# `ts` Submodule <a name="`ts` Submodule" id="@cdk_utils/iam.ts"></a>


## Structs <a name="Structs" id="Structs"></a>

### TsExecutionArnComponents <a name="TsExecutionArnComponents" id="@cdk_utils/iam.ts.TsExecutionArnComponents"></a>

Parsed components of a execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ts.TsExecutionArnComponents.Initializer"></a>

```typescript
import { ts } from '@cdk_utils/iam'

const tsExecutionArnComponents: ts.TsExecutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ts.TsExecutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ts.TsExecutionArnComponents.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component. |
| <code><a href="#@cdk_utils/iam.ts.TsExecutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ts.TsExecutionArnComponents.property.toolId">toolId</a></code> | <code>string</code> | The ToolId component. |
| <code><a href="#@cdk_utils/iam.ts.TsExecutionArnComponents.property.userId">userId</a></code> | <code>string</code> | The UserId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ts.TsExecutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.ts.TsExecutionArnComponents.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ts.TsExecutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdk_utils/iam.ts.TsExecutionArnComponents.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The ToolId component.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.ts.TsExecutionArnComponents.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component.

---

### TsExecutionArnProps <a name="TsExecutionArnProps" id="@cdk_utils/iam.ts.TsExecutionArnProps"></a>

Properties for building a execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ts.TsExecutionArnProps.Initializer"></a>

```typescript
import { ts } from '@cdk_utils/iam'

const tsExecutionArnProps: ts.TsExecutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ts.TsExecutionArnProps.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ts.TsExecutionArnProps.property.toolId">toolId</a></code> | <code>string</code> | The ToolId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ts.TsExecutionArnProps.property.userId">userId</a></code> | <code>string</code> | The UserId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ts.TsExecutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ts.TsExecutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.ts.TsExecutionArnProps.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component of the ARN.

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdk_utils/iam.ts.TsExecutionArnProps.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The ToolId component of the ARN.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.ts.TsExecutionArnProps.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ts.TsExecutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ts.TsExecutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### TsToolArnComponents <a name="TsToolArnComponents" id="@cdk_utils/iam.ts.TsToolArnComponents"></a>

Parsed components of a tool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ts.TsToolArnComponents.Initializer"></a>

```typescript
import { ts } from '@cdk_utils/iam'

const tsToolArnComponents: ts.TsToolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ts.TsToolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ts.TsToolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ts.TsToolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ts.TsToolArnComponents.property.toolId">toolId</a></code> | <code>string</code> | The ToolId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ts.TsToolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ts.TsToolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ts.TsToolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdk_utils/iam.ts.TsToolArnComponents.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The ToolId component.

---

### TsToolArnProps <a name="TsToolArnProps" id="@cdk_utils/iam.ts.TsToolArnProps"></a>

Properties for building a tool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ts.TsToolArnProps.Initializer"></a>

```typescript
import { ts } from '@cdk_utils/iam'

const tsToolArnProps: ts.TsToolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ts.TsToolArnProps.property.toolId">toolId</a></code> | <code>string</code> | The ToolId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ts.TsToolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ts.TsToolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ts.TsToolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdk_utils/iam.ts.TsToolArnProps.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The ToolId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ts.TsToolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ts.TsToolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ts.TsToolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### TsActions <a name="TsActions" id="@cdk_utils/iam.ts.TsActions"></a>

IAM action constants for the ts service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ts.TsActions.Initializer"></a>

```typescript
import { ts } from '@cdk_utils/iam'

new ts.TsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.actionGetExecution">actionGetExecution</a></code> | <code>string</code> | [Read] ts:GetExecution. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.actionGetExecutionOutput">actionGetExecutionOutput</a></code> | <code>string</code> | [Read] ts:GetExecutionOutput. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.actionGetTool">actionGetTool</a></code> | <code>string</code> | [Read] ts:GetTool. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.ListExecutions">ListExecutions</a></code> | <code>string</code> | [List] ts:ListExecutions. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ts:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.ListTools">ListTools</a></code> | <code>string</code> | [List] ts:ListTools. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.StartExecution">StartExecution</a></code> | <code>string</code> | [Write] ts:StartExecution. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ts:TagResource. |
| <code><a href="#@cdk_utils/iam.ts.TsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ts:UntagResource. |

---

##### `actionGetExecution`<sup>Required</sup> <a name="actionGetExecution" id="@cdk_utils/iam.ts.TsActions.property.actionGetExecution"></a>

```typescript
public readonly actionGetExecution: string;
```

- *Type:* string

[Read] ts:GetExecution.

---

##### `actionGetExecutionOutput`<sup>Required</sup> <a name="actionGetExecutionOutput" id="@cdk_utils/iam.ts.TsActions.property.actionGetExecutionOutput"></a>

```typescript
public readonly actionGetExecutionOutput: string;
```

- *Type:* string

[Read] ts:GetExecutionOutput.

---

##### `actionGetTool`<sup>Required</sup> <a name="actionGetTool" id="@cdk_utils/iam.ts.TsActions.property.actionGetTool"></a>

```typescript
public readonly actionGetTool: string;
```

- *Type:* string

[Read] ts:GetTool.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ts.TsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ts.TsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ts.TsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ts.TsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ts.TsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.ts.TsActions.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string;
```

- *Type:* string

[List] ts:ListExecutions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ts.TsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ts:ListTagsForResource.

---

##### `ListTools`<sup>Required</sup> <a name="ListTools" id="@cdk_utils/iam.ts.TsActions.property.ListTools"></a>

```typescript
public readonly ListTools: string;
```

- *Type:* string

[List] ts:ListTools.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ts.TsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartExecution`<sup>Required</sup> <a name="StartExecution" id="@cdk_utils/iam.ts.TsActions.property.StartExecution"></a>

```typescript
public readonly StartExecution: string;
```

- *Type:* string

[Write] ts:StartExecution.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ts.TsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ts:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ts.TsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ts:UntagResource.

---

### TsConditions <a name="TsConditions" id="@cdk_utils/iam.ts.TsConditions"></a>

Condition key constants and builders for ts.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ts.TsConditions.Initializer"></a>

```typescript
import { ts } from '@cdk_utils/iam'

new ts.TsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ts.TsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ts.TsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ts.TsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ts.TsConditions.requestTag"></a>

```typescript
import { ts } from '@cdk_utils/iam'

ts.TsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ts.TsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ts.TsConditions.resourceTag"></a>

```typescript
import { ts } from '@cdk_utils/iam'

ts.TsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ts.TsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ts.TsConditions.tagKeys"></a>

```typescript
import { ts } from '@cdk_utils/iam'

ts.TsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ts.TsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ts.TsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ts.TsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ts.TsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ts.TsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.ts.TsConditions.property.StartExecutionConditionKeys">StartExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartExecution action. |
| <code><a href="#@cdk_utils/iam.ts.TsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ts.TsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ts.TsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ts.TsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ts.TsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.ts.TsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `StartExecutionConditionKeys`<sup>Required</sup> <a name="StartExecutionConditionKeys" id="@cdk_utils/iam.ts.TsConditions.property.StartExecutionConditionKeys"></a>

```typescript
public readonly StartExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartExecution action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ts.TsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ts.TsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### TsResources <a name="TsResources" id="@cdk_utils/iam.ts.TsResources"></a>

ARN builders, validators, and parsers for ts resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ts.TsResources.Initializer"></a>

```typescript
import { ts } from '@cdk_utils/iam'

new ts.TsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ts.TsResources.execution">execution</a></code> | Builds an ARN for the execution resource. |
| <code><a href="#@cdk_utils/iam.ts.TsResources.isValidExecutionArn">isValidExecutionArn</a></code> | Validates whether a string is a valid ARN for the execution resource. |
| <code><a href="#@cdk_utils/iam.ts.TsResources.isValidToolArn">isValidToolArn</a></code> | Validates whether a string is a valid ARN for the tool resource. |
| <code><a href="#@cdk_utils/iam.ts.TsResources.parseExecutionArn">parseExecutionArn</a></code> | Parses a execution ARN into its components. |
| <code><a href="#@cdk_utils/iam.ts.TsResources.parseToolArn">parseToolArn</a></code> | Parses a tool ARN into its components. |
| <code><a href="#@cdk_utils/iam.ts.TsResources.tool">tool</a></code> | Builds an ARN for the tool resource. |

---

##### `execution` <a name="execution" id="@cdk_utils/iam.ts.TsResources.execution"></a>

```typescript
import { ts } from '@cdk_utils/iam'

ts.TsResources.execution(props: TsExecutionArnProps)
```

Builds an ARN for the execution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ts.TsResources.execution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ts.TsExecutionArnProps">TsExecutionArnProps</a>

---

##### `isValidExecutionArn` <a name="isValidExecutionArn" id="@cdk_utils/iam.ts.TsResources.isValidExecutionArn"></a>

```typescript
import { ts } from '@cdk_utils/iam'

ts.TsResources.isValidExecutionArn(arn: string)
```

Validates whether a string is a valid ARN for the execution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ts.TsResources.isValidExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidToolArn` <a name="isValidToolArn" id="@cdk_utils/iam.ts.TsResources.isValidToolArn"></a>

```typescript
import { ts } from '@cdk_utils/iam'

ts.TsResources.isValidToolArn(arn: string)
```

Validates whether a string is a valid ARN for the tool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ts.TsResources.isValidToolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExecutionArn` <a name="parseExecutionArn" id="@cdk_utils/iam.ts.TsResources.parseExecutionArn"></a>

```typescript
import { ts } from '@cdk_utils/iam'

ts.TsResources.parseExecutionArn(arn: string)
```

Parses a execution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ts.TsResources.parseExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseToolArn` <a name="parseToolArn" id="@cdk_utils/iam.ts.TsResources.parseToolArn"></a>

```typescript
import { ts } from '@cdk_utils/iam'

ts.TsResources.parseToolArn(arn: string)
```

Parses a tool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ts.TsResources.parseToolArn.parameter.arn"></a>

- *Type:* string

---

##### `tool` <a name="tool" id="@cdk_utils/iam.ts.TsResources.tool"></a>

```typescript
import { ts } from '@cdk_utils/iam'

ts.TsResources.tool(props: TsToolArnProps)
```

Builds an ARN for the tool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ts.TsResources.tool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ts.TsToolArnProps">TsToolArnProps</a>

---




