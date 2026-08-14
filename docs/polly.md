# `polly` Submodule <a name="`polly` Submodule" id="@cdk_utils/iam.polly"></a>


## Structs <a name="Structs" id="Structs"></a>

### PollyLexiconArnComponents <a name="PollyLexiconArnComponents" id="@cdk_utils/iam.polly.PollyLexiconArnComponents"></a>

Parsed components of a lexicon ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.polly.PollyLexiconArnComponents.Initializer"></a>

```typescript
import { polly } from '@cdk_utils/iam'

const pollyLexiconArnComponents: polly.PollyLexiconArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.polly.PollyLexiconArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.polly.PollyLexiconArnComponents.property.lexiconName">lexiconName</a></code> | <code>string</code> | The LexiconName component. |
| <code><a href="#@cdk_utils/iam.polly.PollyLexiconArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.polly.PollyLexiconArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.polly.PollyLexiconArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `lexiconName`<sup>Required</sup> <a name="lexiconName" id="@cdk_utils/iam.polly.PollyLexiconArnComponents.property.lexiconName"></a>

```typescript
public readonly lexiconName: string;
```

- *Type:* string

The LexiconName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.polly.PollyLexiconArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.polly.PollyLexiconArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PollyLexiconArnProps <a name="PollyLexiconArnProps" id="@cdk_utils/iam.polly.PollyLexiconArnProps"></a>

Properties for building a lexicon ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.polly.PollyLexiconArnProps.Initializer"></a>

```typescript
import { polly } from '@cdk_utils/iam'

const pollyLexiconArnProps: polly.PollyLexiconArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.polly.PollyLexiconArnProps.property.lexiconName">lexiconName</a></code> | <code>string</code> | The LexiconName component of the ARN. |
| <code><a href="#@cdk_utils/iam.polly.PollyLexiconArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.polly.PollyLexiconArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.polly.PollyLexiconArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `lexiconName`<sup>Required</sup> <a name="lexiconName" id="@cdk_utils/iam.polly.PollyLexiconArnProps.property.lexiconName"></a>

```typescript
public readonly lexiconName: string;
```

- *Type:* string

The LexiconName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.polly.PollyLexiconArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.polly.PollyLexiconArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.polly.PollyLexiconArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### PollyActions <a name="PollyActions" id="@cdk_utils/iam.polly.PollyActions"></a>

IAM action constants for the polly service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.polly.PollyActions.Initializer"></a>

```typescript
import { polly } from '@cdk_utils/iam'

new polly.PollyActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.actionGetLexicon">actionGetLexicon</a></code> | <code>string</code> | [Read] polly:GetLexicon. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.actionGetSpeechSynthesisTask">actionGetSpeechSynthesisTask</a></code> | <code>string</code> | [Read] polly:GetSpeechSynthesisTask. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.DeleteLexicon">DeleteLexicon</a></code> | <code>string</code> | [Write] polly:DeleteLexicon. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.DescribeVoices">DescribeVoices</a></code> | <code>string</code> | [List] polly:DescribeVoices. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.ListLexicons">ListLexicons</a></code> | <code>string</code> | [List] polly:ListLexicons. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.ListSpeechSynthesisTasks">ListSpeechSynthesisTasks</a></code> | <code>string</code> | [List] polly:ListSpeechSynthesisTasks. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.PutLexicon">PutLexicon</a></code> | <code>string</code> | [Write] polly:PutLexicon. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.StartSpeechSynthesisStream">StartSpeechSynthesisStream</a></code> | <code>string</code> | [Read] polly:StartSpeechSynthesisStream. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.StartSpeechSynthesisTask">StartSpeechSynthesisTask</a></code> | <code>string</code> | [Write] polly:StartSpeechSynthesisTask. |
| <code><a href="#@cdk_utils/iam.polly.PollyActions.property.SynthesizeSpeech">SynthesizeSpeech</a></code> | <code>string</code> | [Read] polly:SynthesizeSpeech. |

---

##### `actionGetLexicon`<sup>Required</sup> <a name="actionGetLexicon" id="@cdk_utils/iam.polly.PollyActions.property.actionGetLexicon"></a>

```typescript
public readonly actionGetLexicon: string;
```

- *Type:* string

[Read] polly:GetLexicon.

---

##### `actionGetSpeechSynthesisTask`<sup>Required</sup> <a name="actionGetSpeechSynthesisTask" id="@cdk_utils/iam.polly.PollyActions.property.actionGetSpeechSynthesisTask"></a>

```typescript
public readonly actionGetSpeechSynthesisTask: string;
```

- *Type:* string

[Read] polly:GetSpeechSynthesisTask.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.polly.PollyActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.polly.PollyActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.polly.PollyActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.polly.PollyActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.polly.PollyActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeleteLexicon`<sup>Required</sup> <a name="DeleteLexicon" id="@cdk_utils/iam.polly.PollyActions.property.DeleteLexicon"></a>

```typescript
public readonly DeleteLexicon: string;
```

- *Type:* string

[Write] polly:DeleteLexicon.

---

##### `DescribeVoices`<sup>Required</sup> <a name="DescribeVoices" id="@cdk_utils/iam.polly.PollyActions.property.DescribeVoices"></a>

```typescript
public readonly DescribeVoices: string;
```

- *Type:* string

[List] polly:DescribeVoices.

---

##### `ListLexicons`<sup>Required</sup> <a name="ListLexicons" id="@cdk_utils/iam.polly.PollyActions.property.ListLexicons"></a>

```typescript
public readonly ListLexicons: string;
```

- *Type:* string

[List] polly:ListLexicons.

---

##### `ListSpeechSynthesisTasks`<sup>Required</sup> <a name="ListSpeechSynthesisTasks" id="@cdk_utils/iam.polly.PollyActions.property.ListSpeechSynthesisTasks"></a>

```typescript
public readonly ListSpeechSynthesisTasks: string;
```

- *Type:* string

[List] polly:ListSpeechSynthesisTasks.

---

##### `PutLexicon`<sup>Required</sup> <a name="PutLexicon" id="@cdk_utils/iam.polly.PollyActions.property.PutLexicon"></a>

```typescript
public readonly PutLexicon: string;
```

- *Type:* string

[Write] polly:PutLexicon.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.polly.PollyActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartSpeechSynthesisStream`<sup>Required</sup> <a name="StartSpeechSynthesisStream" id="@cdk_utils/iam.polly.PollyActions.property.StartSpeechSynthesisStream"></a>

```typescript
public readonly StartSpeechSynthesisStream: string;
```

- *Type:* string

[Read] polly:StartSpeechSynthesisStream.

---

##### `StartSpeechSynthesisTask`<sup>Required</sup> <a name="StartSpeechSynthesisTask" id="@cdk_utils/iam.polly.PollyActions.property.StartSpeechSynthesisTask"></a>

```typescript
public readonly StartSpeechSynthesisTask: string;
```

- *Type:* string

[Write] polly:StartSpeechSynthesisTask.

---

##### `SynthesizeSpeech`<sup>Required</sup> <a name="SynthesizeSpeech" id="@cdk_utils/iam.polly.PollyActions.property.SynthesizeSpeech"></a>

```typescript
public readonly SynthesizeSpeech: string;
```

- *Type:* string

[Read] polly:SynthesizeSpeech.

---

### PollyOperations <a name="PollyOperations" id="@cdk_utils/iam.polly.PollyOperations"></a>

API operation to required IAM actions mapping for polly.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.polly.PollyOperations.Initializer"></a>

```typescript
import { polly } from '@cdk_utils/iam'

new polly.PollyOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.polly.PollyOperations.property.DeleteLexicon">DeleteLexicon</a></code> | <code>string[]</code> | IAM actions required for the DeleteLexicon API call. |
| <code><a href="#@cdk_utils/iam.polly.PollyOperations.property.DescribeVoices">DescribeVoices</a></code> | <code>string[]</code> | IAM actions required for the DescribeVoices API call. |
| <code><a href="#@cdk_utils/iam.polly.PollyOperations.property.ListLexicons">ListLexicons</a></code> | <code>string[]</code> | IAM actions required for the ListLexicons API call. |
| <code><a href="#@cdk_utils/iam.polly.PollyOperations.property.ListSpeechSynthesisTasks">ListSpeechSynthesisTasks</a></code> | <code>string[]</code> | IAM actions required for the ListSpeechSynthesisTasks API call. |
| <code><a href="#@cdk_utils/iam.polly.PollyOperations.property.opGetLexicon">opGetLexicon</a></code> | <code>string[]</code> | IAM actions required for the GetLexicon API call. |
| <code><a href="#@cdk_utils/iam.polly.PollyOperations.property.opGetSpeechSynthesisTask">opGetSpeechSynthesisTask</a></code> | <code>string[]</code> | IAM actions required for the GetSpeechSynthesisTask API call. |
| <code><a href="#@cdk_utils/iam.polly.PollyOperations.property.PutLexicon">PutLexicon</a></code> | <code>string[]</code> | IAM actions required for the PutLexicon API call. |
| <code><a href="#@cdk_utils/iam.polly.PollyOperations.property.StartSpeechSynthesisStream">StartSpeechSynthesisStream</a></code> | <code>string[]</code> | IAM actions required for the StartSpeechSynthesisStream API call. |
| <code><a href="#@cdk_utils/iam.polly.PollyOperations.property.StartSpeechSynthesisTask">StartSpeechSynthesisTask</a></code> | <code>string[]</code> | IAM actions required for the StartSpeechSynthesisTask API call. |
| <code><a href="#@cdk_utils/iam.polly.PollyOperations.property.SynthesizeSpeech">SynthesizeSpeech</a></code> | <code>string[]</code> | IAM actions required for the SynthesizeSpeech API call. |

---

##### `DeleteLexicon`<sup>Required</sup> <a name="DeleteLexicon" id="@cdk_utils/iam.polly.PollyOperations.property.DeleteLexicon"></a>

```typescript
public readonly DeleteLexicon: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLexicon API call.

---

##### `DescribeVoices`<sup>Required</sup> <a name="DescribeVoices" id="@cdk_utils/iam.polly.PollyOperations.property.DescribeVoices"></a>

```typescript
public readonly DescribeVoices: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVoices API call.

---

##### `ListLexicons`<sup>Required</sup> <a name="ListLexicons" id="@cdk_utils/iam.polly.PollyOperations.property.ListLexicons"></a>

```typescript
public readonly ListLexicons: string[];
```

- *Type:* string[]

IAM actions required for the ListLexicons API call.

---

##### `ListSpeechSynthesisTasks`<sup>Required</sup> <a name="ListSpeechSynthesisTasks" id="@cdk_utils/iam.polly.PollyOperations.property.ListSpeechSynthesisTasks"></a>

```typescript
public readonly ListSpeechSynthesisTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListSpeechSynthesisTasks API call.

---

##### `opGetLexicon`<sup>Required</sup> <a name="opGetLexicon" id="@cdk_utils/iam.polly.PollyOperations.property.opGetLexicon"></a>

```typescript
public readonly opGetLexicon: string[];
```

- *Type:* string[]

IAM actions required for the GetLexicon API call.

---

##### `opGetSpeechSynthesisTask`<sup>Required</sup> <a name="opGetSpeechSynthesisTask" id="@cdk_utils/iam.polly.PollyOperations.property.opGetSpeechSynthesisTask"></a>

```typescript
public readonly opGetSpeechSynthesisTask: string[];
```

- *Type:* string[]

IAM actions required for the GetSpeechSynthesisTask API call.

---

##### `PutLexicon`<sup>Required</sup> <a name="PutLexicon" id="@cdk_utils/iam.polly.PollyOperations.property.PutLexicon"></a>

```typescript
public readonly PutLexicon: string[];
```

- *Type:* string[]

IAM actions required for the PutLexicon API call.

---

##### `StartSpeechSynthesisStream`<sup>Required</sup> <a name="StartSpeechSynthesisStream" id="@cdk_utils/iam.polly.PollyOperations.property.StartSpeechSynthesisStream"></a>

```typescript
public readonly StartSpeechSynthesisStream: string[];
```

- *Type:* string[]

IAM actions required for the StartSpeechSynthesisStream API call.

---

##### `StartSpeechSynthesisTask`<sup>Required</sup> <a name="StartSpeechSynthesisTask" id="@cdk_utils/iam.polly.PollyOperations.property.StartSpeechSynthesisTask"></a>

```typescript
public readonly StartSpeechSynthesisTask: string[];
```

- *Type:* string[]

IAM actions required for the StartSpeechSynthesisTask API call.

---

##### `SynthesizeSpeech`<sup>Required</sup> <a name="SynthesizeSpeech" id="@cdk_utils/iam.polly.PollyOperations.property.SynthesizeSpeech"></a>

```typescript
public readonly SynthesizeSpeech: string[];
```

- *Type:* string[]

IAM actions required for the SynthesizeSpeech API call.

---

### PollyResources <a name="PollyResources" id="@cdk_utils/iam.polly.PollyResources"></a>

ARN builders, validators, and parsers for polly resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.polly.PollyResources.Initializer"></a>

```typescript
import { polly } from '@cdk_utils/iam'

new polly.PollyResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.polly.PollyResources.isValidLexiconArn">isValidLexiconArn</a></code> | Validates whether a string is a valid ARN for the lexicon resource. |
| <code><a href="#@cdk_utils/iam.polly.PollyResources.lexicon">lexicon</a></code> | Builds an ARN for the lexicon resource. |
| <code><a href="#@cdk_utils/iam.polly.PollyResources.parseLexiconArn">parseLexiconArn</a></code> | Parses a lexicon ARN into its components. |

---

##### `isValidLexiconArn` <a name="isValidLexiconArn" id="@cdk_utils/iam.polly.PollyResources.isValidLexiconArn"></a>

```typescript
import { polly } from '@cdk_utils/iam'

polly.PollyResources.isValidLexiconArn(arn: string)
```

Validates whether a string is a valid ARN for the lexicon resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.polly.PollyResources.isValidLexiconArn.parameter.arn"></a>

- *Type:* string

---

##### `lexicon` <a name="lexicon" id="@cdk_utils/iam.polly.PollyResources.lexicon"></a>

```typescript
import { polly } from '@cdk_utils/iam'

polly.PollyResources.lexicon(props: PollyLexiconArnProps)
```

Builds an ARN for the lexicon resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.polly.PollyResources.lexicon.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.polly.PollyLexiconArnProps">PollyLexiconArnProps</a>

---

##### `parseLexiconArn` <a name="parseLexiconArn" id="@cdk_utils/iam.polly.PollyResources.parseLexiconArn"></a>

```typescript
import { polly } from '@cdk_utils/iam'

polly.PollyResources.parseLexiconArn(arn: string)
```

Parses a lexicon ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.polly.PollyResources.parseLexiconArn.parameter.arn"></a>

- *Type:* string

---




