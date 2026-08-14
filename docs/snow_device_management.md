# `snow_device_management` Submodule <a name="`snow_device_management` Submodule" id="@cdk_utils/iam.snow_device_management"></a>


## Structs <a name="Structs" id="Structs"></a>

### SnowDeviceManagementManagedDeviceArnComponents <a name="SnowDeviceManagementManagedDeviceArnComponents" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnComponents"></a>

Parsed components of a managed-device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnComponents.Initializer"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

const snowDeviceManagementManagedDeviceArnComponents: snow_device_management.SnowDeviceManagementManagedDeviceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SnowDeviceManagementManagedDeviceArnProps <a name="SnowDeviceManagementManagedDeviceArnProps" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnProps"></a>

Properties for building a managed-device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnProps.Initializer"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

const snowDeviceManagementManagedDeviceArnProps: snow_device_management.SnowDeviceManagementManagedDeviceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SnowDeviceManagementTaskArnComponents <a name="SnowDeviceManagementTaskArnComponents" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnComponents"></a>

Parsed components of a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnComponents.Initializer"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

const snowDeviceManagementTaskArnComponents: snow_device_management.SnowDeviceManagementTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SnowDeviceManagementTaskArnProps <a name="SnowDeviceManagementTaskArnProps" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnProps"></a>

Properties for building a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnProps.Initializer"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

const snowDeviceManagementTaskArnProps: snow_device_management.SnowDeviceManagementTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SnowDeviceManagementActions <a name="SnowDeviceManagementActions" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions"></a>

IAM action constants for the snow-device-management service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.Initializer"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

new snow_device_management.SnowDeviceManagementActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.CancelTask">CancelTask</a></code> | <code>string</code> | [Write] snow-device-management:CancelTask. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.CreateTask">CreateTask</a></code> | <code>string</code> | [Write] snow-device-management:CreateTask. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.DescribeDevice">DescribeDevice</a></code> | <code>string</code> | [Read] snow-device-management:DescribeDevice. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.DescribeDeviceEc2Instances">DescribeDeviceEc2Instances</a></code> | <code>string</code> | [Read] snow-device-management:DescribeDeviceEc2Instances. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.DescribeExecution">DescribeExecution</a></code> | <code>string</code> | [Read] snow-device-management:DescribeExecution. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.DescribeTask">DescribeTask</a></code> | <code>string</code> | [Read] snow-device-management:DescribeTask. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.ListDeviceResources">ListDeviceResources</a></code> | <code>string</code> | [List] snow-device-management:ListDeviceResources. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.ListDevices">ListDevices</a></code> | <code>string</code> | [List] snow-device-management:ListDevices. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.ListExecutions">ListExecutions</a></code> | <code>string</code> | [List] snow-device-management:ListExecutions. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] snow-device-management:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.ListTasks">ListTasks</a></code> | <code>string</code> | [List] snow-device-management:ListTasks. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] snow-device-management:TagResource. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] snow-device-management:UntagResource. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelTask`<sup>Required</sup> <a name="CancelTask" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.CancelTask"></a>

```typescript
public readonly CancelTask: string;
```

- *Type:* string

[Write] snow-device-management:CancelTask.

---

##### `CreateTask`<sup>Required</sup> <a name="CreateTask" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.CreateTask"></a>

```typescript
public readonly CreateTask: string;
```

- *Type:* string

[Write] snow-device-management:CreateTask.

---

##### `DescribeDevice`<sup>Required</sup> <a name="DescribeDevice" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.DescribeDevice"></a>

```typescript
public readonly DescribeDevice: string;
```

- *Type:* string

[Read] snow-device-management:DescribeDevice.

---

##### `DescribeDeviceEc2Instances`<sup>Required</sup> <a name="DescribeDeviceEc2Instances" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.DescribeDeviceEc2Instances"></a>

```typescript
public readonly DescribeDeviceEc2Instances: string;
```

- *Type:* string

[Read] snow-device-management:DescribeDeviceEc2Instances.

---

##### `DescribeExecution`<sup>Required</sup> <a name="DescribeExecution" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.DescribeExecution"></a>

```typescript
public readonly DescribeExecution: string;
```

- *Type:* string

[Read] snow-device-management:DescribeExecution.

---

##### `DescribeTask`<sup>Required</sup> <a name="DescribeTask" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.DescribeTask"></a>

```typescript
public readonly DescribeTask: string;
```

- *Type:* string

[Read] snow-device-management:DescribeTask.

---

##### `ListDeviceResources`<sup>Required</sup> <a name="ListDeviceResources" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.ListDeviceResources"></a>

```typescript
public readonly ListDeviceResources: string;
```

- *Type:* string

[List] snow-device-management:ListDeviceResources.

---

##### `ListDevices`<sup>Required</sup> <a name="ListDevices" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.ListDevices"></a>

```typescript
public readonly ListDevices: string;
```

- *Type:* string

[List] snow-device-management:ListDevices.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string;
```

- *Type:* string

[List] snow-device-management:ListExecutions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] snow-device-management:ListTagsForResource.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.ListTasks"></a>

```typescript
public readonly ListTasks: string;
```

- *Type:* string

[List] snow-device-management:ListTasks.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] snow-device-management:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] snow-device-management:UntagResource.

---

### SnowDeviceManagementConditions <a name="SnowDeviceManagementConditions" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions"></a>

Condition key constants and builders for snow-device-management.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.Initializer"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

new snow_device_management.SnowDeviceManagementConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.requestTag"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

snow_device_management.SnowDeviceManagementConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.resourceTag"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

snow_device_management.SnowDeviceManagementConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.tagKeys"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

snow_device_management.SnowDeviceManagementConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.CreateTaskConditionKeys">CreateTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTask action. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateTaskConditionKeys`<sup>Required</sup> <a name="CreateTaskConditionKeys" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.CreateTaskConditionKeys"></a>

```typescript
public readonly CreateTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTask action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SnowDeviceManagementOperations <a name="SnowDeviceManagementOperations" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations"></a>

API operation to required IAM actions mapping for snow-device-management.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.Initializer"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

new snow_device_management.SnowDeviceManagementOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.CancelTask">CancelTask</a></code> | <code>string[]</code> | IAM actions required for the CancelTask API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.CreateTask">CreateTask</a></code> | <code>string[]</code> | IAM actions required for the CreateTask API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.DescribeDevice">DescribeDevice</a></code> | <code>string[]</code> | IAM actions required for the DescribeDevice API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.DescribeDeviceEc2Instances">DescribeDeviceEc2Instances</a></code> | <code>string[]</code> | IAM actions required for the DescribeDeviceEc2Instances API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.DescribeExecution">DescribeExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribeExecution API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.DescribeTask">DescribeTask</a></code> | <code>string[]</code> | IAM actions required for the DescribeTask API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.ListDeviceResources">ListDeviceResources</a></code> | <code>string[]</code> | IAM actions required for the ListDeviceResources API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.ListDevices">ListDevices</a></code> | <code>string[]</code> | IAM actions required for the ListDevices API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.ListExecutions">ListExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListExecutions API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.ListTasks">ListTasks</a></code> | <code>string[]</code> | IAM actions required for the ListTasks API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `CancelTask`<sup>Required</sup> <a name="CancelTask" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.CancelTask"></a>

```typescript
public readonly CancelTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelTask API call.

---

##### `CreateTask`<sup>Required</sup> <a name="CreateTask" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.CreateTask"></a>

```typescript
public readonly CreateTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateTask API call.

---

##### `DescribeDevice`<sup>Required</sup> <a name="DescribeDevice" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.DescribeDevice"></a>

```typescript
public readonly DescribeDevice: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDevice API call.

---

##### `DescribeDeviceEc2Instances`<sup>Required</sup> <a name="DescribeDeviceEc2Instances" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.DescribeDeviceEc2Instances"></a>

```typescript
public readonly DescribeDeviceEc2Instances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDeviceEc2Instances API call.

---

##### `DescribeExecution`<sup>Required</sup> <a name="DescribeExecution" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.DescribeExecution"></a>

```typescript
public readonly DescribeExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExecution API call.

---

##### `DescribeTask`<sup>Required</sup> <a name="DescribeTask" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.DescribeTask"></a>

```typescript
public readonly DescribeTask: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTask API call.

---

##### `ListDeviceResources`<sup>Required</sup> <a name="ListDeviceResources" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.ListDeviceResources"></a>

```typescript
public readonly ListDeviceResources: string[];
```

- *Type:* string[]

IAM actions required for the ListDeviceResources API call.

---

##### `ListDevices`<sup>Required</sup> <a name="ListDevices" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.ListDevices"></a>

```typescript
public readonly ListDevices: string[];
```

- *Type:* string[]

IAM actions required for the ListDevices API call.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListExecutions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.ListTasks"></a>

```typescript
public readonly ListTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListTasks API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### SnowDeviceManagementResources <a name="SnowDeviceManagementResources" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources"></a>

ARN builders, validators, and parsers for snow-device-management resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.Initializer"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

new snow_device_management.SnowDeviceManagementResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.isValidManagedDeviceArn">isValidManagedDeviceArn</a></code> | Validates whether a string is a valid ARN for the managed-device resource. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.isValidTaskArn">isValidTaskArn</a></code> | Validates whether a string is a valid ARN for the task resource. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.managedDevice">managedDevice</a></code> | Builds an ARN for the managed-device resource. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.parseManagedDeviceArn">parseManagedDeviceArn</a></code> | Parses a managed-device ARN into its components. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.parseTaskArn">parseTaskArn</a></code> | Parses a task ARN into its components. |
| <code><a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.task">task</a></code> | Builds an ARN for the task resource. |

---

##### `isValidManagedDeviceArn` <a name="isValidManagedDeviceArn" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.isValidManagedDeviceArn"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

snow_device_management.SnowDeviceManagementResources.isValidManagedDeviceArn(arn: string)
```

Validates whether a string is a valid ARN for the managed-device resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.isValidManagedDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaskArn` <a name="isValidTaskArn" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.isValidTaskArn"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

snow_device_management.SnowDeviceManagementResources.isValidTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.isValidTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `managedDevice` <a name="managedDevice" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.managedDevice"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

snow_device_management.SnowDeviceManagementResources.managedDevice(props: SnowDeviceManagementManagedDeviceArnProps)
```

Builds an ARN for the managed-device resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.managedDevice.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementManagedDeviceArnProps">SnowDeviceManagementManagedDeviceArnProps</a>

---

##### `parseManagedDeviceArn` <a name="parseManagedDeviceArn" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.parseManagedDeviceArn"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

snow_device_management.SnowDeviceManagementResources.parseManagedDeviceArn(arn: string)
```

Parses a managed-device ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.parseManagedDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaskArn` <a name="parseTaskArn" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.parseTaskArn"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

snow_device_management.SnowDeviceManagementResources.parseTaskArn(arn: string)
```

Parses a task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.parseTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `task` <a name="task" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.task"></a>

```typescript
import { snow_device_management } from '@cdk_utils/iam'

snow_device_management.SnowDeviceManagementResources.task(props: SnowDeviceManagementTaskArnProps)
```

Builds an ARN for the task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.snow_device_management.SnowDeviceManagementResources.task.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.snow_device_management.SnowDeviceManagementTaskArnProps">SnowDeviceManagementTaskArnProps</a>

---




