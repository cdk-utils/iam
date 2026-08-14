# `eventsbilltoaws` Submodule <a name="`eventsbilltoaws` Submodule" id="@cdk_utils/iam.eventsbilltoaws"></a>


## Structs <a name="Structs" id="Structs"></a>

### EventsbilltoawsApproveArnComponents <a name="EventsbilltoawsApproveArnComponents" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnComponents"></a>

Parsed components of a approve ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnComponents.Initializer"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

const eventsbilltoawsApproveArnComponents: eventsbilltoaws.EventsbilltoawsApproveArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnComponents.property.relativeId">relativeId</a></code> | <code>string</code> | The RelativeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `relativeId`<sup>Required</sup> <a name="relativeId" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnComponents.property.relativeId"></a>

```typescript
public readonly relativeId: string;
```

- *Type:* string

The RelativeId component.

---

### EventsbilltoawsApproveArnProps <a name="EventsbilltoawsApproveArnProps" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnProps"></a>

Properties for building a approve ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnProps.Initializer"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

const eventsbilltoawsApproveArnProps: eventsbilltoaws.EventsbilltoawsApproveArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnProps.property.relativeId">relativeId</a></code> | <code>string</code> | The RelativeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `relativeId`<sup>Required</sup> <a name="relativeId" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnProps.property.relativeId"></a>

```typescript
public readonly relativeId: string;
```

- *Type:* string

The RelativeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsbilltoawsInfoArnComponents <a name="EventsbilltoawsInfoArnComponents" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnComponents"></a>

Parsed components of a info ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnComponents.Initializer"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

const eventsbilltoawsInfoArnComponents: eventsbilltoaws.EventsbilltoawsInfoArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnComponents.property.relativeId">relativeId</a></code> | <code>string</code> | The RelativeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `relativeId`<sup>Required</sup> <a name="relativeId" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnComponents.property.relativeId"></a>

```typescript
public readonly relativeId: string;
```

- *Type:* string

The RelativeId component.

---

### EventsbilltoawsInfoArnProps <a name="EventsbilltoawsInfoArnProps" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnProps"></a>

Properties for building a info ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnProps.Initializer"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

const eventsbilltoawsInfoArnProps: eventsbilltoaws.EventsbilltoawsInfoArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnProps.property.relativeId">relativeId</a></code> | <code>string</code> | The RelativeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `relativeId`<sup>Required</sup> <a name="relativeId" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnProps.property.relativeId"></a>

```typescript
public readonly relativeId: string;
```

- *Type:* string

The RelativeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EventsbilltoawsActions <a name="EventsbilltoawsActions" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions"></a>

IAM action constants for the eventsbilltoaws service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.Initializer"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

new eventsbilltoaws.EventsbilltoawsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.approve">approve</a></code> | <code>string</code> | [Write] eventsbilltoaws:approve. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.info">info</a></code> | <code>string</code> | [Read] eventsbilltoaws:info. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `approve`<sup>Required</sup> <a name="approve" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.approve"></a>

```typescript
public readonly approve: string;
```

- *Type:* string

[Write] eventsbilltoaws:approve.

---

##### `info`<sup>Required</sup> <a name="info" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.info"></a>

```typescript
public readonly info: string;
```

- *Type:* string

[Read] eventsbilltoaws:info.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### EventsbilltoawsConditions <a name="EventsbilltoawsConditions" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions"></a>

Condition key constants and builders for eventsbilltoaws.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.Initializer"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

new eventsbilltoaws.EventsbilltoawsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.requestTag"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

eventsbilltoaws.EventsbilltoawsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.resourceTag"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

eventsbilltoaws.EventsbilltoawsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.tagKeys"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

eventsbilltoaws.EventsbilltoawsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.property.approveConditionKeys">approveConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the approve action. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.property.infoConditionKeys">infoConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the info action. |

---

##### `approveConditionKeys`<sup>Required</sup> <a name="approveConditionKeys" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.property.approveConditionKeys"></a>

```typescript
public readonly approveConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the approve action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `infoConditionKeys`<sup>Required</sup> <a name="infoConditionKeys" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsConditions.property.infoConditionKeys"></a>

```typescript
public readonly infoConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the info action.

---

### EventsbilltoawsResources <a name="EventsbilltoawsResources" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources"></a>

ARN builders, validators, and parsers for eventsbilltoaws resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.Initializer"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

new eventsbilltoaws.EventsbilltoawsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.approve">approve</a></code> | Builds an ARN for the approve resource. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.info">info</a></code> | Builds an ARN for the info resource. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.isValidApproveArn">isValidApproveArn</a></code> | Validates whether a string is a valid ARN for the approve resource. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.isValidInfoArn">isValidInfoArn</a></code> | Validates whether a string is a valid ARN for the info resource. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.parseApproveArn">parseApproveArn</a></code> | Parses a approve ARN into its components. |
| <code><a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.parseInfoArn">parseInfoArn</a></code> | Parses a info ARN into its components. |

---

##### `approve` <a name="approve" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.approve"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

eventsbilltoaws.EventsbilltoawsResources.approve(props: EventsbilltoawsApproveArnProps)
```

Builds an ARN for the approve resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.approve.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsApproveArnProps">EventsbilltoawsApproveArnProps</a>

---

##### `info` <a name="info" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.info"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

eventsbilltoaws.EventsbilltoawsResources.info(props: EventsbilltoawsInfoArnProps)
```

Builds an ARN for the info resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.info.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsInfoArnProps">EventsbilltoawsInfoArnProps</a>

---

##### `isValidApproveArn` <a name="isValidApproveArn" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.isValidApproveArn"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

eventsbilltoaws.EventsbilltoawsResources.isValidApproveArn(arn: string)
```

Validates whether a string is a valid ARN for the approve resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.isValidApproveArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInfoArn` <a name="isValidInfoArn" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.isValidInfoArn"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

eventsbilltoaws.EventsbilltoawsResources.isValidInfoArn(arn: string)
```

Validates whether a string is a valid ARN for the info resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.isValidInfoArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApproveArn` <a name="parseApproveArn" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.parseApproveArn"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

eventsbilltoaws.EventsbilltoawsResources.parseApproveArn(arn: string)
```

Parses a approve ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.parseApproveArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInfoArn` <a name="parseInfoArn" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.parseInfoArn"></a>

```typescript
import { eventsbilltoaws } from '@cdk_utils/iam'

eventsbilltoaws.EventsbilltoawsResources.parseInfoArn(arn: string)
```

Parses a info ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eventsbilltoaws.EventsbilltoawsResources.parseInfoArn.parameter.arn"></a>

- *Type:* string

---




