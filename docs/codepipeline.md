# `codepipeline` Submodule <a name="`codepipeline` Submodule" id="@cdk_utils/iam.codepipeline"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodePipelineActionArnComponents <a name="CodePipelineActionArnComponents" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents"></a>

Parsed components of a action ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

const codePipelineActionArnComponents: codepipeline.CodePipelineActionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.actionName">actionName</a></code> | <code>string</code> | The ActionName component. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.stageName">stageName</a></code> | <code>string</code> | The StageName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

The ActionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnComponents.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component.

---

### CodePipelineActionArnProps <a name="CodePipelineActionArnProps" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnProps"></a>

Properties for building a action ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

const codePipelineActionArnProps: codepipeline.CodePipelineActionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.actionName">actionName</a></code> | <code>string</code> | The ActionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.stageName">stageName</a></code> | <code>string</code> | The StageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

The ActionName component of the ARN.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component of the ARN.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codepipeline.CodePipelineActionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodePipelineActiontypeArnComponents <a name="CodePipelineActiontypeArnComponents" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents"></a>

Parsed components of a actiontype ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

const codePipelineActiontypeArnComponents: codepipeline.CodePipelineActiontypeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.category">category</a></code> | <code>string</code> | The Category component. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.owner">owner</a></code> | <code>string</code> | The Owner component. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.provider">provider</a></code> | <code>string</code> | The Provider component. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.version">version</a></code> | <code>string</code> | The Version component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `category`<sup>Required</sup> <a name="category" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The Category component.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The Owner component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The Provider component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnComponents.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component.

---

### CodePipelineActiontypeArnProps <a name="CodePipelineActiontypeArnProps" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps"></a>

Properties for building a actiontype ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

const codePipelineActiontypeArnProps: codepipeline.CodePipelineActiontypeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.category">category</a></code> | <code>string</code> | The Category component of the ARN. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.owner">owner</a></code> | <code>string</code> | The Owner component of the ARN. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.provider">provider</a></code> | <code>string</code> | The Provider component of the ARN. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.version">version</a></code> | <code>string</code> | The Version component of the ARN. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

The Category component of the ARN.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The Owner component of the ARN.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The Provider component of the ARN.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodePipelinePipelineArnComponents <a name="CodePipelinePipelineArnComponents" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnComponents"></a>

Parsed components of a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnComponents.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

const codePipelinePipelineArnComponents: codepipeline.CodePipelinePipelineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelinePipelineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelinePipelineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelinePipelineArnComponents.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelinePipelineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnComponents.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodePipelinePipelineArnProps <a name="CodePipelinePipelineArnProps" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnProps"></a>

Properties for building a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnProps.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

const codePipelinePipelineArnProps: codepipeline.CodePipelinePipelineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelinePipelineArnProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelinePipelineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelinePipelineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelinePipelineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codepipeline.CodePipelinePipelineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodePipelineStageArnComponents <a name="CodePipelineStageArnComponents" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents"></a>

Parsed components of a stage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

const codePipelineStageArnComponents: codepipeline.CodePipelineStageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents.property.stageName">stageName</a></code> | <code>string</code> | The StageName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnComponents.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component.

---

### CodePipelineStageArnProps <a name="CodePipelineStageArnProps" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnProps"></a>

Properties for building a stage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnProps.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

const codePipelineStageArnProps: codepipeline.CodePipelineStageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineStageArnProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineStageArnProps.property.stageName">stageName</a></code> | <code>string</code> | The StageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineStageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineStageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineStageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component of the ARN.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codepipeline.CodePipelineStageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodePipelineWebhookArnComponents <a name="CodePipelineWebhookArnComponents" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnComponents"></a>

Parsed components of a webhook ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnComponents.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

const codePipelineWebhookArnComponents: codepipeline.CodePipelineWebhookArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineWebhookArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineWebhookArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineWebhookArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineWebhookArnComponents.property.webhookName">webhookName</a></code> | <code>string</code> | The WebhookName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `webhookName`<sup>Required</sup> <a name="webhookName" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnComponents.property.webhookName"></a>

```typescript
public readonly webhookName: string;
```

- *Type:* string

The WebhookName component.

---

### CodePipelineWebhookArnProps <a name="CodePipelineWebhookArnProps" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnProps"></a>

Properties for building a webhook ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnProps.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

const codePipelineWebhookArnProps: codepipeline.CodePipelineWebhookArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineWebhookArnProps.property.webhookName">webhookName</a></code> | <code>string</code> | The WebhookName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineWebhookArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineWebhookArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineWebhookArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `webhookName`<sup>Required</sup> <a name="webhookName" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnProps.property.webhookName"></a>

```typescript
public readonly webhookName: string;
```

- *Type:* string

The WebhookName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codepipeline.CodePipelineWebhookArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodePipelineActions <a name="CodePipelineActions" id="@cdk_utils/iam.codepipeline.CodePipelineActions"></a>

IAM action constants for the codepipeline service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codepipeline.CodePipelineActions.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

new codepipeline.CodePipelineActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.AcknowledgeJob">AcknowledgeJob</a></code> | <code>string</code> | [Write] codepipeline:AcknowledgeJob. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.AcknowledgeThirdPartyJob">AcknowledgeThirdPartyJob</a></code> | <code>string</code> | [Write] codepipeline:AcknowledgeThirdPartyJob. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetActionType">actionGetActionType</a></code> | <code>string</code> | [Read] codepipeline:GetActionType. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetJobDetails">actionGetJobDetails</a></code> | <code>string</code> | [Read] codepipeline:GetJobDetails. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetPipeline">actionGetPipeline</a></code> | <code>string</code> | [Read] codepipeline:GetPipeline. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetPipelineExecution">actionGetPipelineExecution</a></code> | <code>string</code> | [Read] codepipeline:GetPipelineExecution. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetPipelineState">actionGetPipelineState</a></code> | <code>string</code> | [Read] codepipeline:GetPipelineState. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetThirdPartyJobDetails">actionGetThirdPartyJobDetails</a></code> | <code>string</code> | [Read] codepipeline:GetThirdPartyJobDetails. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.CreateCustomActionType">CreateCustomActionType</a></code> | <code>string</code> | [Write] codepipeline:CreateCustomActionType. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.CreatePipeline">CreatePipeline</a></code> | <code>string</code> | [Write] codepipeline:CreatePipeline. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.DeleteCustomActionType">DeleteCustomActionType</a></code> | <code>string</code> | [Write] codepipeline:DeleteCustomActionType. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.DeletePipeline">DeletePipeline</a></code> | <code>string</code> | [Write] codepipeline:DeletePipeline. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.DeleteWebhook">DeleteWebhook</a></code> | <code>string</code> | [Write] codepipeline:DeleteWebhook. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.DeregisterWebhookWithThirdParty">DeregisterWebhookWithThirdParty</a></code> | <code>string</code> | [Write] codepipeline:DeregisterWebhookWithThirdParty. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.DisableStageTransition">DisableStageTransition</a></code> | <code>string</code> | [Write] codepipeline:DisableStageTransition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.EnableStageTransition">EnableStageTransition</a></code> | <code>string</code> | [Write] codepipeline:EnableStageTransition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListActionExecutions">ListActionExecutions</a></code> | <code>string</code> | [Read] codepipeline:ListActionExecutions. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListActionTypes">ListActionTypes</a></code> | <code>string</code> | [Read] codepipeline:ListActionTypes. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListDeployActionExecutionTargets">ListDeployActionExecutionTargets</a></code> | <code>string</code> | [Read] codepipeline:ListDeployActionExecutionTargets. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListPipelineExecutions">ListPipelineExecutions</a></code> | <code>string</code> | [List] codepipeline:ListPipelineExecutions. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListPipelines">ListPipelines</a></code> | <code>string</code> | [List] codepipeline:ListPipelines. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListRuleExecutions">ListRuleExecutions</a></code> | <code>string</code> | [Read] codepipeline:ListRuleExecutions. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListRuleTypes">ListRuleTypes</a></code> | <code>string</code> | [Read] codepipeline:ListRuleTypes. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] codepipeline:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListWebhooks">ListWebhooks</a></code> | <code>string</code> | [List] codepipeline:ListWebhooks. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.OverrideStageCondition">OverrideStageCondition</a></code> | <code>string</code> | [Write] codepipeline:OverrideStageCondition. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.PollForJobs">PollForJobs</a></code> | <code>string</code> | [Write] codepipeline:PollForJobs. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.PollForThirdPartyJobs">PollForThirdPartyJobs</a></code> | <code>string</code> | [Write] codepipeline:PollForThirdPartyJobs. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutActionRevision">PutActionRevision</a></code> | <code>string</code> | [Write] codepipeline:PutActionRevision. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutApprovalResult">PutApprovalResult</a></code> | <code>string</code> | [Write] codepipeline:PutApprovalResult. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutJobFailureResult">PutJobFailureResult</a></code> | <code>string</code> | [Write] codepipeline:PutJobFailureResult. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutJobSuccessResult">PutJobSuccessResult</a></code> | <code>string</code> | [Write] codepipeline:PutJobSuccessResult. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutThirdPartyJobFailureResult">PutThirdPartyJobFailureResult</a></code> | <code>string</code> | [Write] codepipeline:PutThirdPartyJobFailureResult. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutThirdPartyJobSuccessResult">PutThirdPartyJobSuccessResult</a></code> | <code>string</code> | [Write] codepipeline:PutThirdPartyJobSuccessResult. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutWebhook">PutWebhook</a></code> | <code>string</code> | [Write] codepipeline:PutWebhook. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.RegisterWebhookWithThirdParty">RegisterWebhookWithThirdParty</a></code> | <code>string</code> | [Write] codepipeline:RegisterWebhookWithThirdParty. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.RetryStageExecution">RetryStageExecution</a></code> | <code>string</code> | [Write] codepipeline:RetryStageExecution. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.RollbackStage">RollbackStage</a></code> | <code>string</code> | [Write] codepipeline:RollbackStage. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.StartPipelineExecution">StartPipelineExecution</a></code> | <code>string</code> | [Write] codepipeline:StartPipelineExecution. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.StopPipelineExecution">StopPipelineExecution</a></code> | <code>string</code> | [Write] codepipeline:StopPipelineExecution. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codepipeline:TagResource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] codepipeline:UntagResource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.UpdateActionType">UpdateActionType</a></code> | <code>string</code> | [Write] codepipeline:UpdateActionType. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineActions.property.UpdatePipeline">UpdatePipeline</a></code> | <code>string</code> | [Write] codepipeline:UpdatePipeline. |

---

##### `AcknowledgeJob`<sup>Required</sup> <a name="AcknowledgeJob" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.AcknowledgeJob"></a>

```typescript
public readonly AcknowledgeJob: string;
```

- *Type:* string

[Write] codepipeline:AcknowledgeJob.

---

##### `AcknowledgeThirdPartyJob`<sup>Required</sup> <a name="AcknowledgeThirdPartyJob" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.AcknowledgeThirdPartyJob"></a>

```typescript
public readonly AcknowledgeThirdPartyJob: string;
```

- *Type:* string

[Write] codepipeline:AcknowledgeThirdPartyJob.

---

##### `actionGetActionType`<sup>Required</sup> <a name="actionGetActionType" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetActionType"></a>

```typescript
public readonly actionGetActionType: string;
```

- *Type:* string

[Read] codepipeline:GetActionType.

---

##### `actionGetJobDetails`<sup>Required</sup> <a name="actionGetJobDetails" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetJobDetails"></a>

```typescript
public readonly actionGetJobDetails: string;
```

- *Type:* string

[Read] codepipeline:GetJobDetails.

---

##### `actionGetPipeline`<sup>Required</sup> <a name="actionGetPipeline" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetPipeline"></a>

```typescript
public readonly actionGetPipeline: string;
```

- *Type:* string

[Read] codepipeline:GetPipeline.

---

##### `actionGetPipelineExecution`<sup>Required</sup> <a name="actionGetPipelineExecution" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetPipelineExecution"></a>

```typescript
public readonly actionGetPipelineExecution: string;
```

- *Type:* string

[Read] codepipeline:GetPipelineExecution.

---

##### `actionGetPipelineState`<sup>Required</sup> <a name="actionGetPipelineState" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetPipelineState"></a>

```typescript
public readonly actionGetPipelineState: string;
```

- *Type:* string

[Read] codepipeline:GetPipelineState.

---

##### `actionGetThirdPartyJobDetails`<sup>Required</sup> <a name="actionGetThirdPartyJobDetails" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.actionGetThirdPartyJobDetails"></a>

```typescript
public readonly actionGetThirdPartyJobDetails: string;
```

- *Type:* string

[Read] codepipeline:GetThirdPartyJobDetails.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCustomActionType`<sup>Required</sup> <a name="CreateCustomActionType" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.CreateCustomActionType"></a>

```typescript
public readonly CreateCustomActionType: string;
```

- *Type:* string

[Write] codepipeline:CreateCustomActionType.

---

##### `CreatePipeline`<sup>Required</sup> <a name="CreatePipeline" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.CreatePipeline"></a>

```typescript
public readonly CreatePipeline: string;
```

- *Type:* string

[Write] codepipeline:CreatePipeline.

---

##### `DeleteCustomActionType`<sup>Required</sup> <a name="DeleteCustomActionType" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.DeleteCustomActionType"></a>

```typescript
public readonly DeleteCustomActionType: string;
```

- *Type:* string

[Write] codepipeline:DeleteCustomActionType.

---

##### `DeletePipeline`<sup>Required</sup> <a name="DeletePipeline" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.DeletePipeline"></a>

```typescript
public readonly DeletePipeline: string;
```

- *Type:* string

[Write] codepipeline:DeletePipeline.

---

##### `DeleteWebhook`<sup>Required</sup> <a name="DeleteWebhook" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.DeleteWebhook"></a>

```typescript
public readonly DeleteWebhook: string;
```

- *Type:* string

[Write] codepipeline:DeleteWebhook.

---

##### `DeregisterWebhookWithThirdParty`<sup>Required</sup> <a name="DeregisterWebhookWithThirdParty" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.DeregisterWebhookWithThirdParty"></a>

```typescript
public readonly DeregisterWebhookWithThirdParty: string;
```

- *Type:* string

[Write] codepipeline:DeregisterWebhookWithThirdParty.

---

##### `DisableStageTransition`<sup>Required</sup> <a name="DisableStageTransition" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.DisableStageTransition"></a>

```typescript
public readonly DisableStageTransition: string;
```

- *Type:* string

[Write] codepipeline:DisableStageTransition.

---

##### `EnableStageTransition`<sup>Required</sup> <a name="EnableStageTransition" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.EnableStageTransition"></a>

```typescript
public readonly EnableStageTransition: string;
```

- *Type:* string

[Write] codepipeline:EnableStageTransition.

---

##### `ListActionExecutions`<sup>Required</sup> <a name="ListActionExecutions" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListActionExecutions"></a>

```typescript
public readonly ListActionExecutions: string;
```

- *Type:* string

[Read] codepipeline:ListActionExecutions.

---

##### `ListActionTypes`<sup>Required</sup> <a name="ListActionTypes" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListActionTypes"></a>

```typescript
public readonly ListActionTypes: string;
```

- *Type:* string

[Read] codepipeline:ListActionTypes.

---

##### `ListDeployActionExecutionTargets`<sup>Required</sup> <a name="ListDeployActionExecutionTargets" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListDeployActionExecutionTargets"></a>

```typescript
public readonly ListDeployActionExecutionTargets: string;
```

- *Type:* string

[Read] codepipeline:ListDeployActionExecutionTargets.

---

##### `ListPipelineExecutions`<sup>Required</sup> <a name="ListPipelineExecutions" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListPipelineExecutions"></a>

```typescript
public readonly ListPipelineExecutions: string;
```

- *Type:* string

[List] codepipeline:ListPipelineExecutions.

---

##### `ListPipelines`<sup>Required</sup> <a name="ListPipelines" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListPipelines"></a>

```typescript
public readonly ListPipelines: string;
```

- *Type:* string

[List] codepipeline:ListPipelines.

---

##### `ListRuleExecutions`<sup>Required</sup> <a name="ListRuleExecutions" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListRuleExecutions"></a>

```typescript
public readonly ListRuleExecutions: string;
```

- *Type:* string

[Read] codepipeline:ListRuleExecutions.

---

##### `ListRuleTypes`<sup>Required</sup> <a name="ListRuleTypes" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListRuleTypes"></a>

```typescript
public readonly ListRuleTypes: string;
```

- *Type:* string

[Read] codepipeline:ListRuleTypes.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] codepipeline:ListTagsForResource.

---

##### `ListWebhooks`<sup>Required</sup> <a name="ListWebhooks" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.ListWebhooks"></a>

```typescript
public readonly ListWebhooks: string;
```

- *Type:* string

[List] codepipeline:ListWebhooks.

---

##### `OverrideStageCondition`<sup>Required</sup> <a name="OverrideStageCondition" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.OverrideStageCondition"></a>

```typescript
public readonly OverrideStageCondition: string;
```

- *Type:* string

[Write] codepipeline:OverrideStageCondition.

---

##### `PollForJobs`<sup>Required</sup> <a name="PollForJobs" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.PollForJobs"></a>

```typescript
public readonly PollForJobs: string;
```

- *Type:* string

[Write] codepipeline:PollForJobs.

---

##### `PollForThirdPartyJobs`<sup>Required</sup> <a name="PollForThirdPartyJobs" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.PollForThirdPartyJobs"></a>

```typescript
public readonly PollForThirdPartyJobs: string;
```

- *Type:* string

[Write] codepipeline:PollForThirdPartyJobs.

---

##### `PutActionRevision`<sup>Required</sup> <a name="PutActionRevision" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutActionRevision"></a>

```typescript
public readonly PutActionRevision: string;
```

- *Type:* string

[Write] codepipeline:PutActionRevision.

---

##### `PutApprovalResult`<sup>Required</sup> <a name="PutApprovalResult" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutApprovalResult"></a>

```typescript
public readonly PutApprovalResult: string;
```

- *Type:* string

[Write] codepipeline:PutApprovalResult.

---

##### `PutJobFailureResult`<sup>Required</sup> <a name="PutJobFailureResult" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutJobFailureResult"></a>

```typescript
public readonly PutJobFailureResult: string;
```

- *Type:* string

[Write] codepipeline:PutJobFailureResult.

---

##### `PutJobSuccessResult`<sup>Required</sup> <a name="PutJobSuccessResult" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutJobSuccessResult"></a>

```typescript
public readonly PutJobSuccessResult: string;
```

- *Type:* string

[Write] codepipeline:PutJobSuccessResult.

---

##### `PutThirdPartyJobFailureResult`<sup>Required</sup> <a name="PutThirdPartyJobFailureResult" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutThirdPartyJobFailureResult"></a>

```typescript
public readonly PutThirdPartyJobFailureResult: string;
```

- *Type:* string

[Write] codepipeline:PutThirdPartyJobFailureResult.

---

##### `PutThirdPartyJobSuccessResult`<sup>Required</sup> <a name="PutThirdPartyJobSuccessResult" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutThirdPartyJobSuccessResult"></a>

```typescript
public readonly PutThirdPartyJobSuccessResult: string;
```

- *Type:* string

[Write] codepipeline:PutThirdPartyJobSuccessResult.

---

##### `PutWebhook`<sup>Required</sup> <a name="PutWebhook" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.PutWebhook"></a>

```typescript
public readonly PutWebhook: string;
```

- *Type:* string

[Write] codepipeline:PutWebhook.

---

##### `RegisterWebhookWithThirdParty`<sup>Required</sup> <a name="RegisterWebhookWithThirdParty" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.RegisterWebhookWithThirdParty"></a>

```typescript
public readonly RegisterWebhookWithThirdParty: string;
```

- *Type:* string

[Write] codepipeline:RegisterWebhookWithThirdParty.

---

##### `RetryStageExecution`<sup>Required</sup> <a name="RetryStageExecution" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.RetryStageExecution"></a>

```typescript
public readonly RetryStageExecution: string;
```

- *Type:* string

[Write] codepipeline:RetryStageExecution.

---

##### `RollbackStage`<sup>Required</sup> <a name="RollbackStage" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.RollbackStage"></a>

```typescript
public readonly RollbackStage: string;
```

- *Type:* string

[Write] codepipeline:RollbackStage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartPipelineExecution`<sup>Required</sup> <a name="StartPipelineExecution" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.StartPipelineExecution"></a>

```typescript
public readonly StartPipelineExecution: string;
```

- *Type:* string

[Write] codepipeline:StartPipelineExecution.

---

##### `StopPipelineExecution`<sup>Required</sup> <a name="StopPipelineExecution" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.StopPipelineExecution"></a>

```typescript
public readonly StopPipelineExecution: string;
```

- *Type:* string

[Write] codepipeline:StopPipelineExecution.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codepipeline:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] codepipeline:UntagResource.

---

##### `UpdateActionType`<sup>Required</sup> <a name="UpdateActionType" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.UpdateActionType"></a>

```typescript
public readonly UpdateActionType: string;
```

- *Type:* string

[Write] codepipeline:UpdateActionType.

---

##### `UpdatePipeline`<sup>Required</sup> <a name="UpdatePipeline" id="@cdk_utils/iam.codepipeline.CodePipelineActions.property.UpdatePipeline"></a>

```typescript
public readonly UpdatePipeline: string;
```

- *Type:* string

[Write] codepipeline:UpdatePipeline.

---

### CodePipelineConditions <a name="CodePipelineConditions" id="@cdk_utils/iam.codepipeline.CodePipelineConditions"></a>

Condition key constants and builders for codepipeline.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

new codepipeline.CodePipelineConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.requestTag"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.resourceTag"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.tagKeys"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineConditions.property.CreateCustomActionTypeConditionKeys">CreateCustomActionTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomActionType action. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineConditions.property.CreatePipelineConditionKeys">CreatePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePipeline action. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineConditions.property.PutWebhookConditionKeys">PutWebhookConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutWebhook action. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCustomActionTypeConditionKeys`<sup>Required</sup> <a name="CreateCustomActionTypeConditionKeys" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.property.CreateCustomActionTypeConditionKeys"></a>

```typescript
public readonly CreateCustomActionTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomActionType action.

---

##### `CreatePipelineConditionKeys`<sup>Required</sup> <a name="CreatePipelineConditionKeys" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.property.CreatePipelineConditionKeys"></a>

```typescript
public readonly CreatePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePipeline action.

---

##### `PutWebhookConditionKeys`<sup>Required</sup> <a name="PutWebhookConditionKeys" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.property.PutWebhookConditionKeys"></a>

```typescript
public readonly PutWebhookConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutWebhook action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.codepipeline.CodePipelineConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CodePipelineOperations <a name="CodePipelineOperations" id="@cdk_utils/iam.codepipeline.CodePipelineOperations"></a>

API operation to required IAM actions mapping for codepipeline.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

new codepipeline.CodePipelineOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.AcknowledgeJob">AcknowledgeJob</a></code> | <code>string[]</code> | IAM actions required for the AcknowledgeJob API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.AcknowledgeThirdPartyJob">AcknowledgeThirdPartyJob</a></code> | <code>string[]</code> | IAM actions required for the AcknowledgeThirdPartyJob API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.CreateCustomActionType">CreateCustomActionType</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomActionType API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.CreatePipeline">CreatePipeline</a></code> | <code>string[]</code> | IAM actions required for the CreatePipeline API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.DeleteCustomActionType">DeleteCustomActionType</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomActionType API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.DeletePipeline">DeletePipeline</a></code> | <code>string[]</code> | IAM actions required for the DeletePipeline API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.DeleteWebhook">DeleteWebhook</a></code> | <code>string[]</code> | IAM actions required for the DeleteWebhook API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.DeregisterWebhookWithThirdParty">DeregisterWebhookWithThirdParty</a></code> | <code>string[]</code> | IAM actions required for the DeregisterWebhookWithThirdParty API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.DisableStageTransition">DisableStageTransition</a></code> | <code>string[]</code> | IAM actions required for the DisableStageTransition API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.EnableStageTransition">EnableStageTransition</a></code> | <code>string[]</code> | IAM actions required for the EnableStageTransition API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListActionExecutions">ListActionExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListActionExecutions API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListActionTypes">ListActionTypes</a></code> | <code>string[]</code> | IAM actions required for the ListActionTypes API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListDeployActionExecutionTargets">ListDeployActionExecutionTargets</a></code> | <code>string[]</code> | IAM actions required for the ListDeployActionExecutionTargets API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListPipelineExecutions">ListPipelineExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListPipelineExecutions API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListPipelines">ListPipelines</a></code> | <code>string[]</code> | IAM actions required for the ListPipelines API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListRuleExecutions">ListRuleExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListRuleExecutions API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListRuleTypes">ListRuleTypes</a></code> | <code>string[]</code> | IAM actions required for the ListRuleTypes API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListWebhooks">ListWebhooks</a></code> | <code>string[]</code> | IAM actions required for the ListWebhooks API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetActionType">opGetActionType</a></code> | <code>string[]</code> | IAM actions required for the GetActionType API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetJobDetails">opGetJobDetails</a></code> | <code>string[]</code> | IAM actions required for the GetJobDetails API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetPipeline">opGetPipeline</a></code> | <code>string[]</code> | IAM actions required for the GetPipeline API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetPipelineExecution">opGetPipelineExecution</a></code> | <code>string[]</code> | IAM actions required for the GetPipelineExecution API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetPipelineState">opGetPipelineState</a></code> | <code>string[]</code> | IAM actions required for the GetPipelineState API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetThirdPartyJobDetails">opGetThirdPartyJobDetails</a></code> | <code>string[]</code> | IAM actions required for the GetThirdPartyJobDetails API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.OverrideStageCondition">OverrideStageCondition</a></code> | <code>string[]</code> | IAM actions required for the OverrideStageCondition API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PollForJobs">PollForJobs</a></code> | <code>string[]</code> | IAM actions required for the PollForJobs API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PollForThirdPartyJobs">PollForThirdPartyJobs</a></code> | <code>string[]</code> | IAM actions required for the PollForThirdPartyJobs API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutActionRevision">PutActionRevision</a></code> | <code>string[]</code> | IAM actions required for the PutActionRevision API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutApprovalResult">PutApprovalResult</a></code> | <code>string[]</code> | IAM actions required for the PutApprovalResult API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutJobFailureResult">PutJobFailureResult</a></code> | <code>string[]</code> | IAM actions required for the PutJobFailureResult API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutJobSuccessResult">PutJobSuccessResult</a></code> | <code>string[]</code> | IAM actions required for the PutJobSuccessResult API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutThirdPartyJobFailureResult">PutThirdPartyJobFailureResult</a></code> | <code>string[]</code> | IAM actions required for the PutThirdPartyJobFailureResult API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutThirdPartyJobSuccessResult">PutThirdPartyJobSuccessResult</a></code> | <code>string[]</code> | IAM actions required for the PutThirdPartyJobSuccessResult API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutWebhook">PutWebhook</a></code> | <code>string[]</code> | IAM actions required for the PutWebhook API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.RegisterWebhookWithThirdParty">RegisterWebhookWithThirdParty</a></code> | <code>string[]</code> | IAM actions required for the RegisterWebhookWithThirdParty API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.RetryStageExecution">RetryStageExecution</a></code> | <code>string[]</code> | IAM actions required for the RetryStageExecution API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.RollbackStage">RollbackStage</a></code> | <code>string[]</code> | IAM actions required for the RollbackStage API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.StartPipelineExecution">StartPipelineExecution</a></code> | <code>string[]</code> | IAM actions required for the StartPipelineExecution API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.StopPipelineExecution">StopPipelineExecution</a></code> | <code>string[]</code> | IAM actions required for the StopPipelineExecution API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.UpdateActionType">UpdateActionType</a></code> | <code>string[]</code> | IAM actions required for the UpdateActionType API call. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineOperations.property.UpdatePipeline">UpdatePipeline</a></code> | <code>string[]</code> | IAM actions required for the UpdatePipeline API call. |

---

##### `AcknowledgeJob`<sup>Required</sup> <a name="AcknowledgeJob" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.AcknowledgeJob"></a>

```typescript
public readonly AcknowledgeJob: string[];
```

- *Type:* string[]

IAM actions required for the AcknowledgeJob API call.

---

##### `AcknowledgeThirdPartyJob`<sup>Required</sup> <a name="AcknowledgeThirdPartyJob" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.AcknowledgeThirdPartyJob"></a>

```typescript
public readonly AcknowledgeThirdPartyJob: string[];
```

- *Type:* string[]

IAM actions required for the AcknowledgeThirdPartyJob API call.

---

##### `CreateCustomActionType`<sup>Required</sup> <a name="CreateCustomActionType" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.CreateCustomActionType"></a>

```typescript
public readonly CreateCustomActionType: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomActionType API call.

---

##### `CreatePipeline`<sup>Required</sup> <a name="CreatePipeline" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.CreatePipeline"></a>

```typescript
public readonly CreatePipeline: string[];
```

- *Type:* string[]

IAM actions required for the CreatePipeline API call.

---

##### `DeleteCustomActionType`<sup>Required</sup> <a name="DeleteCustomActionType" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.DeleteCustomActionType"></a>

```typescript
public readonly DeleteCustomActionType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomActionType API call.

---

##### `DeletePipeline`<sup>Required</sup> <a name="DeletePipeline" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.DeletePipeline"></a>

```typescript
public readonly DeletePipeline: string[];
```

- *Type:* string[]

IAM actions required for the DeletePipeline API call.

---

##### `DeleteWebhook`<sup>Required</sup> <a name="DeleteWebhook" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.DeleteWebhook"></a>

```typescript
public readonly DeleteWebhook: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWebhook API call.

---

##### `DeregisterWebhookWithThirdParty`<sup>Required</sup> <a name="DeregisterWebhookWithThirdParty" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.DeregisterWebhookWithThirdParty"></a>

```typescript
public readonly DeregisterWebhookWithThirdParty: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterWebhookWithThirdParty API call.

---

##### `DisableStageTransition`<sup>Required</sup> <a name="DisableStageTransition" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.DisableStageTransition"></a>

```typescript
public readonly DisableStageTransition: string[];
```

- *Type:* string[]

IAM actions required for the DisableStageTransition API call.

---

##### `EnableStageTransition`<sup>Required</sup> <a name="EnableStageTransition" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.EnableStageTransition"></a>

```typescript
public readonly EnableStageTransition: string[];
```

- *Type:* string[]

IAM actions required for the EnableStageTransition API call.

---

##### `ListActionExecutions`<sup>Required</sup> <a name="ListActionExecutions" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListActionExecutions"></a>

```typescript
public readonly ListActionExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListActionExecutions API call.

---

##### `ListActionTypes`<sup>Required</sup> <a name="ListActionTypes" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListActionTypes"></a>

```typescript
public readonly ListActionTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListActionTypes API call.

---

##### `ListDeployActionExecutionTargets`<sup>Required</sup> <a name="ListDeployActionExecutionTargets" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListDeployActionExecutionTargets"></a>

```typescript
public readonly ListDeployActionExecutionTargets: string[];
```

- *Type:* string[]

IAM actions required for the ListDeployActionExecutionTargets API call.

---

##### `ListPipelineExecutions`<sup>Required</sup> <a name="ListPipelineExecutions" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListPipelineExecutions"></a>

```typescript
public readonly ListPipelineExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListPipelineExecutions API call.

---

##### `ListPipelines`<sup>Required</sup> <a name="ListPipelines" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListPipelines"></a>

```typescript
public readonly ListPipelines: string[];
```

- *Type:* string[]

IAM actions required for the ListPipelines API call.

---

##### `ListRuleExecutions`<sup>Required</sup> <a name="ListRuleExecutions" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListRuleExecutions"></a>

```typescript
public readonly ListRuleExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListRuleExecutions API call.

---

##### `ListRuleTypes`<sup>Required</sup> <a name="ListRuleTypes" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListRuleTypes"></a>

```typescript
public readonly ListRuleTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListRuleTypes API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWebhooks`<sup>Required</sup> <a name="ListWebhooks" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.ListWebhooks"></a>

```typescript
public readonly ListWebhooks: string[];
```

- *Type:* string[]

IAM actions required for the ListWebhooks API call.

---

##### `opGetActionType`<sup>Required</sup> <a name="opGetActionType" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetActionType"></a>

```typescript
public readonly opGetActionType: string[];
```

- *Type:* string[]

IAM actions required for the GetActionType API call.

---

##### `opGetJobDetails`<sup>Required</sup> <a name="opGetJobDetails" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetJobDetails"></a>

```typescript
public readonly opGetJobDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetJobDetails API call.

---

##### `opGetPipeline`<sup>Required</sup> <a name="opGetPipeline" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetPipeline"></a>

```typescript
public readonly opGetPipeline: string[];
```

- *Type:* string[]

IAM actions required for the GetPipeline API call.

---

##### `opGetPipelineExecution`<sup>Required</sup> <a name="opGetPipelineExecution" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetPipelineExecution"></a>

```typescript
public readonly opGetPipelineExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetPipelineExecution API call.

---

##### `opGetPipelineState`<sup>Required</sup> <a name="opGetPipelineState" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetPipelineState"></a>

```typescript
public readonly opGetPipelineState: string[];
```

- *Type:* string[]

IAM actions required for the GetPipelineState API call.

---

##### `opGetThirdPartyJobDetails`<sup>Required</sup> <a name="opGetThirdPartyJobDetails" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.opGetThirdPartyJobDetails"></a>

```typescript
public readonly opGetThirdPartyJobDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetThirdPartyJobDetails API call.

---

##### `OverrideStageCondition`<sup>Required</sup> <a name="OverrideStageCondition" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.OverrideStageCondition"></a>

```typescript
public readonly OverrideStageCondition: string[];
```

- *Type:* string[]

IAM actions required for the OverrideStageCondition API call.

---

##### `PollForJobs`<sup>Required</sup> <a name="PollForJobs" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PollForJobs"></a>

```typescript
public readonly PollForJobs: string[];
```

- *Type:* string[]

IAM actions required for the PollForJobs API call.

---

##### `PollForThirdPartyJobs`<sup>Required</sup> <a name="PollForThirdPartyJobs" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PollForThirdPartyJobs"></a>

```typescript
public readonly PollForThirdPartyJobs: string[];
```

- *Type:* string[]

IAM actions required for the PollForThirdPartyJobs API call.

---

##### `PutActionRevision`<sup>Required</sup> <a name="PutActionRevision" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutActionRevision"></a>

```typescript
public readonly PutActionRevision: string[];
```

- *Type:* string[]

IAM actions required for the PutActionRevision API call.

---

##### `PutApprovalResult`<sup>Required</sup> <a name="PutApprovalResult" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutApprovalResult"></a>

```typescript
public readonly PutApprovalResult: string[];
```

- *Type:* string[]

IAM actions required for the PutApprovalResult API call.

---

##### `PutJobFailureResult`<sup>Required</sup> <a name="PutJobFailureResult" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutJobFailureResult"></a>

```typescript
public readonly PutJobFailureResult: string[];
```

- *Type:* string[]

IAM actions required for the PutJobFailureResult API call.

---

##### `PutJobSuccessResult`<sup>Required</sup> <a name="PutJobSuccessResult" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutJobSuccessResult"></a>

```typescript
public readonly PutJobSuccessResult: string[];
```

- *Type:* string[]

IAM actions required for the PutJobSuccessResult API call.

---

##### `PutThirdPartyJobFailureResult`<sup>Required</sup> <a name="PutThirdPartyJobFailureResult" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutThirdPartyJobFailureResult"></a>

```typescript
public readonly PutThirdPartyJobFailureResult: string[];
```

- *Type:* string[]

IAM actions required for the PutThirdPartyJobFailureResult API call.

---

##### `PutThirdPartyJobSuccessResult`<sup>Required</sup> <a name="PutThirdPartyJobSuccessResult" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutThirdPartyJobSuccessResult"></a>

```typescript
public readonly PutThirdPartyJobSuccessResult: string[];
```

- *Type:* string[]

IAM actions required for the PutThirdPartyJobSuccessResult API call.

---

##### `PutWebhook`<sup>Required</sup> <a name="PutWebhook" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.PutWebhook"></a>

```typescript
public readonly PutWebhook: string[];
```

- *Type:* string[]

IAM actions required for the PutWebhook API call.

---

##### `RegisterWebhookWithThirdParty`<sup>Required</sup> <a name="RegisterWebhookWithThirdParty" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.RegisterWebhookWithThirdParty"></a>

```typescript
public readonly RegisterWebhookWithThirdParty: string[];
```

- *Type:* string[]

IAM actions required for the RegisterWebhookWithThirdParty API call.

---

##### `RetryStageExecution`<sup>Required</sup> <a name="RetryStageExecution" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.RetryStageExecution"></a>

```typescript
public readonly RetryStageExecution: string[];
```

- *Type:* string[]

IAM actions required for the RetryStageExecution API call.

---

##### `RollbackStage`<sup>Required</sup> <a name="RollbackStage" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.RollbackStage"></a>

```typescript
public readonly RollbackStage: string[];
```

- *Type:* string[]

IAM actions required for the RollbackStage API call.

---

##### `StartPipelineExecution`<sup>Required</sup> <a name="StartPipelineExecution" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.StartPipelineExecution"></a>

```typescript
public readonly StartPipelineExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartPipelineExecution API call.

---

##### `StopPipelineExecution`<sup>Required</sup> <a name="StopPipelineExecution" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.StopPipelineExecution"></a>

```typescript
public readonly StopPipelineExecution: string[];
```

- *Type:* string[]

IAM actions required for the StopPipelineExecution API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateActionType`<sup>Required</sup> <a name="UpdateActionType" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.UpdateActionType"></a>

```typescript
public readonly UpdateActionType: string[];
```

- *Type:* string[]

IAM actions required for the UpdateActionType API call.

---

##### `UpdatePipeline`<sup>Required</sup> <a name="UpdatePipeline" id="@cdk_utils/iam.codepipeline.CodePipelineOperations.property.UpdatePipeline"></a>

```typescript
public readonly UpdatePipeline: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePipeline API call.

---

### CodePipelineResources <a name="CodePipelineResources" id="@cdk_utils/iam.codepipeline.CodePipelineResources"></a>

ARN builders, validators, and parsers for codepipeline resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codepipeline.CodePipelineResources.Initializer"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

new codepipeline.CodePipelineResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.action">action</a></code> | Builds an ARN for the action resource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.actiontype">actiontype</a></code> | Builds an ARN for the actiontype resource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.isValidActionArn">isValidActionArn</a></code> | Validates whether a string is a valid ARN for the action resource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.isValidActiontypeArn">isValidActiontypeArn</a></code> | Validates whether a string is a valid ARN for the actiontype resource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.isValidPipelineArn">isValidPipelineArn</a></code> | Validates whether a string is a valid ARN for the pipeline resource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.isValidStageArn">isValidStageArn</a></code> | Validates whether a string is a valid ARN for the stage resource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.isValidWebhookArn">isValidWebhookArn</a></code> | Validates whether a string is a valid ARN for the webhook resource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.parseActionArn">parseActionArn</a></code> | Parses a action ARN into its components. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.parseActiontypeArn">parseActiontypeArn</a></code> | Parses a actiontype ARN into its components. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.parsePipelineArn">parsePipelineArn</a></code> | Parses a pipeline ARN into its components. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.parseStageArn">parseStageArn</a></code> | Parses a stage ARN into its components. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.parseWebhookArn">parseWebhookArn</a></code> | Parses a webhook ARN into its components. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.pipeline">pipeline</a></code> | Builds an ARN for the pipeline resource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.stage">stage</a></code> | Builds an ARN for the stage resource. |
| <code><a href="#@cdk_utils/iam.codepipeline.CodePipelineResources.webhook">webhook</a></code> | Builds an ARN for the webhook resource. |

---

##### `action` <a name="action" id="@cdk_utils/iam.codepipeline.CodePipelineResources.action"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.action(props: CodePipelineActionArnProps)
```

Builds an ARN for the action resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codepipeline.CodePipelineResources.action.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codepipeline.CodePipelineActionArnProps">CodePipelineActionArnProps</a>

---

##### `actiontype` <a name="actiontype" id="@cdk_utils/iam.codepipeline.CodePipelineResources.actiontype"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.actiontype(props: CodePipelineActiontypeArnProps)
```

Builds an ARN for the actiontype resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codepipeline.CodePipelineResources.actiontype.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codepipeline.CodePipelineActiontypeArnProps">CodePipelineActiontypeArnProps</a>

---

##### `isValidActionArn` <a name="isValidActionArn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.isValidActionArn"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.isValidActionArn(arn: string)
```

Validates whether a string is a valid ARN for the action resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.isValidActionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidActiontypeArn` <a name="isValidActiontypeArn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.isValidActiontypeArn"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.isValidActiontypeArn(arn: string)
```

Validates whether a string is a valid ARN for the actiontype resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.isValidActiontypeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPipelineArn` <a name="isValidPipelineArn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.isValidPipelineArn"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.isValidPipelineArn(arn: string)
```

Validates whether a string is a valid ARN for the pipeline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.isValidPipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStageArn` <a name="isValidStageArn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.isValidStageArn"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.isValidStageArn(arn: string)
```

Validates whether a string is a valid ARN for the stage resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.isValidStageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWebhookArn` <a name="isValidWebhookArn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.isValidWebhookArn"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.isValidWebhookArn(arn: string)
```

Validates whether a string is a valid ARN for the webhook resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.isValidWebhookArn.parameter.arn"></a>

- *Type:* string

---

##### `parseActionArn` <a name="parseActionArn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.parseActionArn"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.parseActionArn(arn: string)
```

Parses a action ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.parseActionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseActiontypeArn` <a name="parseActiontypeArn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.parseActiontypeArn"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.parseActiontypeArn(arn: string)
```

Parses a actiontype ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.parseActiontypeArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePipelineArn` <a name="parsePipelineArn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.parsePipelineArn"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.parsePipelineArn(arn: string)
```

Parses a pipeline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.parsePipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStageArn` <a name="parseStageArn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.parseStageArn"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.parseStageArn(arn: string)
```

Parses a stage ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.parseStageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWebhookArn` <a name="parseWebhookArn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.parseWebhookArn"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.parseWebhookArn(arn: string)
```

Parses a webhook ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codepipeline.CodePipelineResources.parseWebhookArn.parameter.arn"></a>

- *Type:* string

---

##### `pipeline` <a name="pipeline" id="@cdk_utils/iam.codepipeline.CodePipelineResources.pipeline"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.pipeline(props: CodePipelinePipelineArnProps)
```

Builds an ARN for the pipeline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codepipeline.CodePipelineResources.pipeline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codepipeline.CodePipelinePipelineArnProps">CodePipelinePipelineArnProps</a>

---

##### `stage` <a name="stage" id="@cdk_utils/iam.codepipeline.CodePipelineResources.stage"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.stage(props: CodePipelineStageArnProps)
```

Builds an ARN for the stage resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codepipeline.CodePipelineResources.stage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codepipeline.CodePipelineStageArnProps">CodePipelineStageArnProps</a>

---

##### `webhook` <a name="webhook" id="@cdk_utils/iam.codepipeline.CodePipelineResources.webhook"></a>

```typescript
import { codepipeline } from '@cdk_utils/iam'

codepipeline.CodePipelineResources.webhook(props: CodePipelineWebhookArnProps)
```

Builds an ARN for the webhook resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codepipeline.CodePipelineResources.webhook.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codepipeline.CodePipelineWebhookArnProps">CodePipelineWebhookArnProps</a>

---




