# `iotfleethub` Submodule <a name="`iotfleethub` Submodule" id="@cdk_utils/iam.iotfleethub"></a>


## Structs <a name="Structs" id="Structs"></a>

### IotfleethubApplicationArnComponents <a name="IotfleethubApplicationArnComponents" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnComponents.Initializer"></a>

```typescript
import { iotfleethub } from '@cdk_utils/iam'

const iotfleethubApplicationArnComponents: iotfleethub.IotfleethubApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotfleethubApplicationArnProps <a name="IotfleethubApplicationArnProps" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnProps.Initializer"></a>

```typescript
import { iotfleethub } from '@cdk_utils/iam'

const iotfleethubApplicationArnProps: iotfleethub.IotfleethubApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleethubActions <a name="IotfleethubActions" id="@cdk_utils/iam.iotfleethub.IotfleethubActions"></a>

IAM action constants for the iotfleethub service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.Initializer"></a>

```typescript
import { iotfleethub } from '@cdk_utils/iam'

new iotfleethub.IotfleethubActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] iotfleethub:CreateApplication. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] iotfleethub:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.DescribeApplication">DescribeApplication</a></code> | <code>string</code> | [Read] iotfleethub:DescribeApplication. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] iotfleethub:ListApplications. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] iotfleethub:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] iotfleethub:TagResource. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] iotfleethub:UntagResource. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] iotfleethub:UpdateApplication. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] iotfleethub:CreateApplication.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] iotfleethub:DeleteApplication.

---

##### `DescribeApplication`<sup>Required</sup> <a name="DescribeApplication" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.DescribeApplication"></a>

```typescript
public readonly DescribeApplication: string;
```

- *Type:* string

[Read] iotfleethub:DescribeApplication.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] iotfleethub:ListApplications.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] iotfleethub:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] iotfleethub:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] iotfleethub:UntagResource.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.iotfleethub.IotfleethubActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] iotfleethub:UpdateApplication.

---

### IotfleethubConditions <a name="IotfleethubConditions" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions"></a>

Condition key constants and builders for iotfleethub.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.Initializer"></a>

```typescript
import { iotfleethub } from '@cdk_utils/iam'

new iotfleethub.IotfleethubConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.requestTag"></a>

```typescript
import { iotfleethub } from '@cdk_utils/iam'

iotfleethub.IotfleethubConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.resourceTag"></a>

```typescript
import { iotfleethub } from '@cdk_utils/iam'

iotfleethub.IotfleethubConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.tagKeys"></a>

```typescript
import { iotfleethub } from '@cdk_utils/iam'

iotfleethub.IotfleethubConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.iotfleethub.IotfleethubConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### IotfleethubResources <a name="IotfleethubResources" id="@cdk_utils/iam.iotfleethub.IotfleethubResources"></a>

ARN builders, validators, and parsers for iotfleethub resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotfleethub.IotfleethubResources.Initializer"></a>

```typescript
import { iotfleethub } from '@cdk_utils/iam'

new iotfleethub.IotfleethubResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.iotfleethub.IotfleethubResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.iotfleethub.IotfleethubResources.application"></a>

```typescript
import { iotfleethub } from '@cdk_utils/iam'

iotfleethub.IotfleethubResources.application(props: IotfleethubApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotfleethub.IotfleethubResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotfleethub.IotfleethubApplicationArnProps">IotfleethubApplicationArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.iotfleethub.IotfleethubResources.isValidApplicationArn"></a>

```typescript
import { iotfleethub } from '@cdk_utils/iam'

iotfleethub.IotfleethubResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleethub.IotfleethubResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.iotfleethub.IotfleethubResources.parseApplicationArn"></a>

```typescript
import { iotfleethub } from '@cdk_utils/iam'

iotfleethub.IotfleethubResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleethub.IotfleethubResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---




