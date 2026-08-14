# `qdeveloper` Submodule <a name="`qdeveloper` Submodule" id="@cdk_utils/iam.qdeveloper"></a>


## Structs <a name="Structs" id="Structs"></a>

### QdeveloperCodeTransformationArnComponents <a name="QdeveloperCodeTransformationArnComponents" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnComponents"></a>

Parsed components of a codeTransformation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnComponents.Initializer"></a>

```typescript
import { qdeveloper } from '@cdk_utils/iam'

const qdeveloperCodeTransformationArnComponents: qdeveloper.QdeveloperCodeTransformationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### QdeveloperCodeTransformationArnProps <a name="QdeveloperCodeTransformationArnProps" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnProps"></a>

Properties for building a codeTransformation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnProps.Initializer"></a>

```typescript
import { qdeveloper } from '@cdk_utils/iam'

const qdeveloperCodeTransformationArnProps: qdeveloper.QdeveloperCodeTransformationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### QdeveloperActions <a name="QdeveloperActions" id="@cdk_utils/iam.qdeveloper.QdeveloperActions"></a>

IAM action constants for the qdeveloper service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.Initializer"></a>

```typescript
import { qdeveloper } from '@cdk_utils/iam'

new qdeveloper.QdeveloperActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.ExportArtifact">ExportArtifact</a></code> | <code>string</code> | [Write] qdeveloper:ExportArtifact. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.ImportArtifact">ImportArtifact</a></code> | <code>string</code> | [Write] qdeveloper:ImportArtifact. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] qdeveloper:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.StartAgentSession">StartAgentSession</a></code> | <code>string</code> | [Write] qdeveloper:StartAgentSession. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] qdeveloper:TagResource. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.TransformCode">TransformCode</a></code> | <code>string</code> | [Write] qdeveloper:TransformCode. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] qdeveloper:UntagResource. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ExportArtifact`<sup>Required</sup> <a name="ExportArtifact" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.ExportArtifact"></a>

```typescript
public readonly ExportArtifact: string;
```

- *Type:* string

[Write] qdeveloper:ExportArtifact.

---

##### `ImportArtifact`<sup>Required</sup> <a name="ImportArtifact" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.ImportArtifact"></a>

```typescript
public readonly ImportArtifact: string;
```

- *Type:* string

[Write] qdeveloper:ImportArtifact.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] qdeveloper:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAgentSession`<sup>Required</sup> <a name="StartAgentSession" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.StartAgentSession"></a>

```typescript
public readonly StartAgentSession: string;
```

- *Type:* string

[Write] qdeveloper:StartAgentSession.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] qdeveloper:TagResource.

---

##### `TransformCode`<sup>Required</sup> <a name="TransformCode" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.TransformCode"></a>

```typescript
public readonly TransformCode: string;
```

- *Type:* string

[Write] qdeveloper:TransformCode.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.qdeveloper.QdeveloperActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] qdeveloper:UntagResource.

---

### QdeveloperConditions <a name="QdeveloperConditions" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions"></a>

Condition key constants and builders for qdeveloper.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.Initializer"></a>

```typescript
import { qdeveloper } from '@cdk_utils/iam'

new qdeveloper.QdeveloperConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.requestTag"></a>

```typescript
import { qdeveloper } from '@cdk_utils/iam'

qdeveloper.QdeveloperConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.resourceTag"></a>

```typescript
import { qdeveloper } from '@cdk_utils/iam'

qdeveloper.QdeveloperConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.tagKeys"></a>

```typescript
import { qdeveloper } from '@cdk_utils/iam'

qdeveloper.QdeveloperConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.StartAgentSessionConditionKeys">StartAgentSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartAgentSession action. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `StartAgentSessionConditionKeys`<sup>Required</sup> <a name="StartAgentSessionConditionKeys" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.StartAgentSessionConditionKeys"></a>

```typescript
public readonly StartAgentSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartAgentSession action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.qdeveloper.QdeveloperConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### QdeveloperResources <a name="QdeveloperResources" id="@cdk_utils/iam.qdeveloper.QdeveloperResources"></a>

ARN builders, validators, and parsers for qdeveloper resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.qdeveloper.QdeveloperResources.Initializer"></a>

```typescript
import { qdeveloper } from '@cdk_utils/iam'

new qdeveloper.QdeveloperResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperResources.codeTransformation">codeTransformation</a></code> | Builds an ARN for the codeTransformation resource. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperResources.isValidCodeTransformationArn">isValidCodeTransformationArn</a></code> | Validates whether a string is a valid ARN for the codeTransformation resource. |
| <code><a href="#@cdk_utils/iam.qdeveloper.QdeveloperResources.parseCodeTransformationArn">parseCodeTransformationArn</a></code> | Parses a codeTransformation ARN into its components. |

---

##### `codeTransformation` <a name="codeTransformation" id="@cdk_utils/iam.qdeveloper.QdeveloperResources.codeTransformation"></a>

```typescript
import { qdeveloper } from '@cdk_utils/iam'

qdeveloper.QdeveloperResources.codeTransformation(props: QdeveloperCodeTransformationArnProps)
```

Builds an ARN for the codeTransformation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.qdeveloper.QdeveloperResources.codeTransformation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.qdeveloper.QdeveloperCodeTransformationArnProps">QdeveloperCodeTransformationArnProps</a>

---

##### `isValidCodeTransformationArn` <a name="isValidCodeTransformationArn" id="@cdk_utils/iam.qdeveloper.QdeveloperResources.isValidCodeTransformationArn"></a>

```typescript
import { qdeveloper } from '@cdk_utils/iam'

qdeveloper.QdeveloperResources.isValidCodeTransformationArn(arn: string)
```

Validates whether a string is a valid ARN for the codeTransformation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qdeveloper.QdeveloperResources.isValidCodeTransformationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCodeTransformationArn` <a name="parseCodeTransformationArn" id="@cdk_utils/iam.qdeveloper.QdeveloperResources.parseCodeTransformationArn"></a>

```typescript
import { qdeveloper } from '@cdk_utils/iam'

qdeveloper.QdeveloperResources.parseCodeTransformationArn(arn: string)
```

Parses a codeTransformation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.qdeveloper.QdeveloperResources.parseCodeTransformationArn.parameter.arn"></a>

- *Type:* string

---




