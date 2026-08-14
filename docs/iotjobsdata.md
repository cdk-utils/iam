# `iotjobsdata` Submodule <a name="`iotjobsdata` Submodule" id="@cdk_utils/iam.iotjobsdata"></a>


## Structs <a name="Structs" id="Structs"></a>

### IotjobsdataThingArnComponents <a name="IotjobsdataThingArnComponents" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnComponents"></a>

Parsed components of a thing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnComponents.Initializer"></a>

```typescript
import { iotjobsdata } from '@cdk_utils/iam'

const iotjobsdataThingArnComponents: iotjobsdata.IotjobsdataThingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnComponents.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnComponents.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component.

---

### IotjobsdataThingArnProps <a name="IotjobsdataThingArnProps" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnProps"></a>

Properties for building a thing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnProps.Initializer"></a>

```typescript
import { iotjobsdata } from '@cdk_utils/iam'

const iotjobsdataThingArnProps: iotjobsdata.IotjobsdataThingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnProps.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnProps.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IotjobsdataActions <a name="IotjobsdataActions" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions"></a>

IAM action constants for the iotjobsdata service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions.Initializer"></a>

```typescript
import { iotjobsdata } from '@cdk_utils/iam'

new iotjobsdata.IotjobsdataActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.actionGetPendingJobExecutions">actionGetPendingJobExecutions</a></code> | <code>string</code> | [Read] iotjobsdata:GetPendingJobExecutions. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.DescribeJobExecution">DescribeJobExecution</a></code> | <code>string</code> | [Read] iotjobsdata:DescribeJobExecution. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.StartNextPendingJobExecution">StartNextPendingJobExecution</a></code> | <code>string</code> | [Write] iotjobsdata:StartNextPendingJobExecution. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.UpdateJobExecution">UpdateJobExecution</a></code> | <code>string</code> | [Write] iotjobsdata:UpdateJobExecution. |

---

##### `actionGetPendingJobExecutions`<sup>Required</sup> <a name="actionGetPendingJobExecutions" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.actionGetPendingJobExecutions"></a>

```typescript
public readonly actionGetPendingJobExecutions: string;
```

- *Type:* string

[Read] iotjobsdata:GetPendingJobExecutions.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DescribeJobExecution`<sup>Required</sup> <a name="DescribeJobExecution" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.DescribeJobExecution"></a>

```typescript
public readonly DescribeJobExecution: string;
```

- *Type:* string

[Read] iotjobsdata:DescribeJobExecution.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartNextPendingJobExecution`<sup>Required</sup> <a name="StartNextPendingJobExecution" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.StartNextPendingJobExecution"></a>

```typescript
public readonly StartNextPendingJobExecution: string;
```

- *Type:* string

[Write] iotjobsdata:StartNextPendingJobExecution.

---

##### `UpdateJobExecution`<sup>Required</sup> <a name="UpdateJobExecution" id="@cdk_utils/iam.iotjobsdata.IotjobsdataActions.property.UpdateJobExecution"></a>

```typescript
public readonly UpdateJobExecution: string;
```

- *Type:* string

[Write] iotjobsdata:UpdateJobExecution.

---

### IotjobsdataConditions <a name="IotjobsdataConditions" id="@cdk_utils/iam.iotjobsdata.IotjobsdataConditions"></a>

Condition key constants and builders for iotjobsdata.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotjobsdata.IotjobsdataConditions.Initializer"></a>

```typescript
import { iotjobsdata } from '@cdk_utils/iam'

new iotjobsdata.IotjobsdataConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataConditions.property.DescribeJobExecutionConditionKeys">DescribeJobExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeJobExecution action. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataConditions.property.JOB_ID">JOB_ID</a></code> | <code>string</code> | Condition key: iot:JobId (String). |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataConditions.property.UpdateJobExecutionConditionKeys">UpdateJobExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateJobExecution action. |

---

##### `DescribeJobExecutionConditionKeys`<sup>Required</sup> <a name="DescribeJobExecutionConditionKeys" id="@cdk_utils/iam.iotjobsdata.IotjobsdataConditions.property.DescribeJobExecutionConditionKeys"></a>

```typescript
public readonly DescribeJobExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeJobExecution action.

---

##### `JOB_ID`<sup>Required</sup> <a name="JOB_ID" id="@cdk_utils/iam.iotjobsdata.IotjobsdataConditions.property.JOB_ID"></a>

```typescript
public readonly JOB_ID: string;
```

- *Type:* string

Condition key: iot:JobId (String).

---

##### `UpdateJobExecutionConditionKeys`<sup>Required</sup> <a name="UpdateJobExecutionConditionKeys" id="@cdk_utils/iam.iotjobsdata.IotjobsdataConditions.property.UpdateJobExecutionConditionKeys"></a>

```typescript
public readonly UpdateJobExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateJobExecution action.

---

### IotjobsdataOperations <a name="IotjobsdataOperations" id="@cdk_utils/iam.iotjobsdata.IotjobsdataOperations"></a>

API operation to required IAM actions mapping for iotjobsdata.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotjobsdata.IotjobsdataOperations.Initializer"></a>

```typescript
import { iotjobsdata } from '@cdk_utils/iam'

new iotjobsdata.IotjobsdataOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataOperations.property.DescribeJobExecution">DescribeJobExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobExecution API call. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataOperations.property.opGetPendingJobExecutions">opGetPendingJobExecutions</a></code> | <code>string[]</code> | IAM actions required for the GetPendingJobExecutions API call. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataOperations.property.StartCommandExecution">StartCommandExecution</a></code> | <code>string[]</code> | IAM actions required for the StartCommandExecution API call. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataOperations.property.StartNextPendingJobExecution">StartNextPendingJobExecution</a></code> | <code>string[]</code> | IAM actions required for the StartNextPendingJobExecution API call. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataOperations.property.UpdateJobExecution">UpdateJobExecution</a></code> | <code>string[]</code> | IAM actions required for the UpdateJobExecution API call. |

---

##### `DescribeJobExecution`<sup>Required</sup> <a name="DescribeJobExecution" id="@cdk_utils/iam.iotjobsdata.IotjobsdataOperations.property.DescribeJobExecution"></a>

```typescript
public readonly DescribeJobExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobExecution API call.

---

##### `opGetPendingJobExecutions`<sup>Required</sup> <a name="opGetPendingJobExecutions" id="@cdk_utils/iam.iotjobsdata.IotjobsdataOperations.property.opGetPendingJobExecutions"></a>

```typescript
public readonly opGetPendingJobExecutions: string[];
```

- *Type:* string[]

IAM actions required for the GetPendingJobExecutions API call.

---

##### `StartCommandExecution`<sup>Required</sup> <a name="StartCommandExecution" id="@cdk_utils/iam.iotjobsdata.IotjobsdataOperations.property.StartCommandExecution"></a>

```typescript
public readonly StartCommandExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartCommandExecution API call.

---

##### `StartNextPendingJobExecution`<sup>Required</sup> <a name="StartNextPendingJobExecution" id="@cdk_utils/iam.iotjobsdata.IotjobsdataOperations.property.StartNextPendingJobExecution"></a>

```typescript
public readonly StartNextPendingJobExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartNextPendingJobExecution API call.

---

##### `UpdateJobExecution`<sup>Required</sup> <a name="UpdateJobExecution" id="@cdk_utils/iam.iotjobsdata.IotjobsdataOperations.property.UpdateJobExecution"></a>

```typescript
public readonly UpdateJobExecution: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJobExecution API call.

---

### IotjobsdataResources <a name="IotjobsdataResources" id="@cdk_utils/iam.iotjobsdata.IotjobsdataResources"></a>

ARN builders, validators, and parsers for iotjobsdata resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotjobsdata.IotjobsdataResources.Initializer"></a>

```typescript
import { iotjobsdata } from '@cdk_utils/iam'

new iotjobsdata.IotjobsdataResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataResources.isValidThingArn">isValidThingArn</a></code> | Validates whether a string is a valid ARN for the thing resource. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataResources.parseThingArn">parseThingArn</a></code> | Parses a thing ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataResources.thing">thing</a></code> | Builds an ARN for the thing resource. |

---

##### `isValidThingArn` <a name="isValidThingArn" id="@cdk_utils/iam.iotjobsdata.IotjobsdataResources.isValidThingArn"></a>

```typescript
import { iotjobsdata } from '@cdk_utils/iam'

iotjobsdata.IotjobsdataResources.isValidThingArn(arn: string)
```

Validates whether a string is a valid ARN for the thing resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotjobsdata.IotjobsdataResources.isValidThingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseThingArn` <a name="parseThingArn" id="@cdk_utils/iam.iotjobsdata.IotjobsdataResources.parseThingArn"></a>

```typescript
import { iotjobsdata } from '@cdk_utils/iam'

iotjobsdata.IotjobsdataResources.parseThingArn(arn: string)
```

Parses a thing ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotjobsdata.IotjobsdataResources.parseThingArn.parameter.arn"></a>

- *Type:* string

---

##### `thing` <a name="thing" id="@cdk_utils/iam.iotjobsdata.IotjobsdataResources.thing"></a>

```typescript
import { iotjobsdata } from '@cdk_utils/iam'

iotjobsdata.IotjobsdataResources.thing(props: IotjobsdataThingArnProps)
```

Builds an ARN for the thing resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotjobsdata.IotjobsdataResources.thing.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotjobsdata.IotjobsdataThingArnProps">IotjobsdataThingArnProps</a>

---




