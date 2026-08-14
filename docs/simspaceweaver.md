# `simspaceweaver` Submodule <a name="`simspaceweaver` Submodule" id="@cdk_utils/iam.simspaceweaver"></a>


## Structs <a name="Structs" id="Structs"></a>

### SimspaceweaverSimulationArnComponents <a name="SimspaceweaverSimulationArnComponents" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnComponents"></a>

Parsed components of a Simulation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnComponents.Initializer"></a>

```typescript
import { simspaceweaver } from '@cdk_utils/iam'

const simspaceweaverSimulationArnComponents: simspaceweaver.SimspaceweaverSimulationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnComponents.property.simulationName">simulationName</a></code> | <code>string</code> | The SimulationName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `simulationName`<sup>Required</sup> <a name="simulationName" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnComponents.property.simulationName"></a>

```typescript
public readonly simulationName: string;
```

- *Type:* string

The SimulationName component.

---

### SimspaceweaverSimulationArnProps <a name="SimspaceweaverSimulationArnProps" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnProps"></a>

Properties for building a Simulation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnProps.Initializer"></a>

```typescript
import { simspaceweaver } from '@cdk_utils/iam'

const simspaceweaverSimulationArnProps: simspaceweaver.SimspaceweaverSimulationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnProps.property.simulationName">simulationName</a></code> | <code>string</code> | The SimulationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `simulationName`<sup>Required</sup> <a name="simulationName" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnProps.property.simulationName"></a>

```typescript
public readonly simulationName: string;
```

- *Type:* string

The SimulationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SimspaceweaverActions <a name="SimspaceweaverActions" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions"></a>

IAM action constants for the simspaceweaver service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.Initializer"></a>

```typescript
import { simspaceweaver } from '@cdk_utils/iam'

new simspaceweaver.SimspaceweaverActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string</code> | [Write] simspaceweaver:CreateSnapshot. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.DeleteApp">DeleteApp</a></code> | <code>string</code> | [Write] simspaceweaver:DeleteApp. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.DeleteSimulation">DeleteSimulation</a></code> | <code>string</code> | [Write] simspaceweaver:DeleteSimulation. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.DescribeApp">DescribeApp</a></code> | <code>string</code> | [Read] simspaceweaver:DescribeApp. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.DescribeSimulation">DescribeSimulation</a></code> | <code>string</code> | [Read] simspaceweaver:DescribeSimulation. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.ListApps">ListApps</a></code> | <code>string</code> | [Read] simspaceweaver:ListApps. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.ListSimulations">ListSimulations</a></code> | <code>string</code> | [List] simspaceweaver:ListSimulations. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] simspaceweaver:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StartApp">StartApp</a></code> | <code>string</code> | [Write] simspaceweaver:StartApp. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StartClock">StartClock</a></code> | <code>string</code> | [Write] simspaceweaver:StartClock. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StartSimulation">StartSimulation</a></code> | <code>string</code> | [Write] simspaceweaver:StartSimulation. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StopApp">StopApp</a></code> | <code>string</code> | [Write] simspaceweaver:StopApp. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StopClock">StopClock</a></code> | <code>string</code> | [Write] simspaceweaver:StopClock. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StopSimulation">StopSimulation</a></code> | <code>string</code> | [Write] simspaceweaver:StopSimulation. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] simspaceweaver:TagResource. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] simspaceweaver:UntagResource. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string;
```

- *Type:* string

[Write] simspaceweaver:CreateSnapshot.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string;
```

- *Type:* string

[Write] simspaceweaver:DeleteApp.

---

##### `DeleteSimulation`<sup>Required</sup> <a name="DeleteSimulation" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.DeleteSimulation"></a>

```typescript
public readonly DeleteSimulation: string;
```

- *Type:* string

[Write] simspaceweaver:DeleteSimulation.

---

##### `DescribeApp`<sup>Required</sup> <a name="DescribeApp" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.DescribeApp"></a>

```typescript
public readonly DescribeApp: string;
```

- *Type:* string

[Read] simspaceweaver:DescribeApp.

---

##### `DescribeSimulation`<sup>Required</sup> <a name="DescribeSimulation" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.DescribeSimulation"></a>

```typescript
public readonly DescribeSimulation: string;
```

- *Type:* string

[Read] simspaceweaver:DescribeSimulation.

---

##### `ListApps`<sup>Required</sup> <a name="ListApps" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.ListApps"></a>

```typescript
public readonly ListApps: string;
```

- *Type:* string

[Read] simspaceweaver:ListApps.

---

##### `ListSimulations`<sup>Required</sup> <a name="ListSimulations" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.ListSimulations"></a>

```typescript
public readonly ListSimulations: string;
```

- *Type:* string

[List] simspaceweaver:ListSimulations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] simspaceweaver:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartApp`<sup>Required</sup> <a name="StartApp" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StartApp"></a>

```typescript
public readonly StartApp: string;
```

- *Type:* string

[Write] simspaceweaver:StartApp.

---

##### `StartClock`<sup>Required</sup> <a name="StartClock" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StartClock"></a>

```typescript
public readonly StartClock: string;
```

- *Type:* string

[Write] simspaceweaver:StartClock.

---

##### `StartSimulation`<sup>Required</sup> <a name="StartSimulation" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StartSimulation"></a>

```typescript
public readonly StartSimulation: string;
```

- *Type:* string

[Write] simspaceweaver:StartSimulation.

---

##### `StopApp`<sup>Required</sup> <a name="StopApp" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StopApp"></a>

```typescript
public readonly StopApp: string;
```

- *Type:* string

[Write] simspaceweaver:StopApp.

---

##### `StopClock`<sup>Required</sup> <a name="StopClock" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StopClock"></a>

```typescript
public readonly StopClock: string;
```

- *Type:* string

[Write] simspaceweaver:StopClock.

---

##### `StopSimulation`<sup>Required</sup> <a name="StopSimulation" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.StopSimulation"></a>

```typescript
public readonly StopSimulation: string;
```

- *Type:* string

[Write] simspaceweaver:StopSimulation.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] simspaceweaver:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] simspaceweaver:UntagResource.

---

### SimspaceweaverConditions <a name="SimspaceweaverConditions" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions"></a>

Condition key constants and builders for simspaceweaver.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.Initializer"></a>

```typescript
import { simspaceweaver } from '@cdk_utils/iam'

new simspaceweaver.SimspaceweaverConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.requestTag"></a>

```typescript
import { simspaceweaver } from '@cdk_utils/iam'

simspaceweaver.SimspaceweaverConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.resourceTag"></a>

```typescript
import { simspaceweaver } from '@cdk_utils/iam'

simspaceweaver.SimspaceweaverConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.tagKeys"></a>

```typescript
import { simspaceweaver } from '@cdk_utils/iam'

simspaceweaver.SimspaceweaverConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.StartSimulationConditionKeys">StartSimulationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSimulation action. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `StartSimulationConditionKeys`<sup>Required</sup> <a name="StartSimulationConditionKeys" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.StartSimulationConditionKeys"></a>

```typescript
public readonly StartSimulationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSimulation action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SimspaceweaverResources <a name="SimspaceweaverResources" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverResources"></a>

ARN builders, validators, and parsers for simspaceweaver resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverResources.Initializer"></a>

```typescript
import { simspaceweaver } from '@cdk_utils/iam'

new simspaceweaver.SimspaceweaverResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverResources.isValidSimulationArn">isValidSimulationArn</a></code> | Validates whether a string is a valid ARN for the Simulation resource. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverResources.parseSimulationArn">parseSimulationArn</a></code> | Parses a Simulation ARN into its components. |
| <code><a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverResources.simulation">simulation</a></code> | Builds an ARN for the Simulation resource. |

---

##### `isValidSimulationArn` <a name="isValidSimulationArn" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverResources.isValidSimulationArn"></a>

```typescript
import { simspaceweaver } from '@cdk_utils/iam'

simspaceweaver.SimspaceweaverResources.isValidSimulationArn(arn: string)
```

Validates whether a string is a valid ARN for the Simulation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverResources.isValidSimulationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSimulationArn` <a name="parseSimulationArn" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverResources.parseSimulationArn"></a>

```typescript
import { simspaceweaver } from '@cdk_utils/iam'

simspaceweaver.SimspaceweaverResources.parseSimulationArn(arn: string)
```

Parses a Simulation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverResources.parseSimulationArn.parameter.arn"></a>

- *Type:* string

---

##### `simulation` <a name="simulation" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverResources.simulation"></a>

```typescript
import { simspaceweaver } from '@cdk_utils/iam'

simspaceweaver.SimspaceweaverResources.simulation(props: SimspaceweaverSimulationArnProps)
```

Builds an ARN for the Simulation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.simspaceweaver.SimspaceweaverResources.simulation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.simspaceweaver.SimspaceweaverSimulationArnProps">SimspaceweaverSimulationArnProps</a>

---




