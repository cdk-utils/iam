# `oam` Submodule <a name="`oam` Submodule" id="@cdk_utils/iam.oam"></a>


## Structs <a name="Structs" id="Structs"></a>

### OamLinkArnComponents <a name="OamLinkArnComponents" id="@cdk_utils/iam.oam.OamLinkArnComponents"></a>

Parsed components of a Link ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.oam.OamLinkArnComponents.Initializer"></a>

```typescript
import { oam } from '@cdk_utils/iam'

const oamLinkArnComponents: oam.OamLinkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.oam.OamLinkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.oam.OamLinkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.oam.OamLinkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.oam.OamLinkArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.oam.OamLinkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.oam.OamLinkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.oam.OamLinkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.oam.OamLinkArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### OamLinkArnProps <a name="OamLinkArnProps" id="@cdk_utils/iam.oam.OamLinkArnProps"></a>

Properties for building a Link ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.oam.OamLinkArnProps.Initializer"></a>

```typescript
import { oam } from '@cdk_utils/iam'

const oamLinkArnProps: oam.OamLinkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.oam.OamLinkArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.oam.OamLinkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.oam.OamLinkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.oam.OamLinkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.oam.OamLinkArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.oam.OamLinkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.oam.OamLinkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.oam.OamLinkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OamSinkArnComponents <a name="OamSinkArnComponents" id="@cdk_utils/iam.oam.OamSinkArnComponents"></a>

Parsed components of a Sink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.oam.OamSinkArnComponents.Initializer"></a>

```typescript
import { oam } from '@cdk_utils/iam'

const oamSinkArnComponents: oam.OamSinkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.oam.OamSinkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.oam.OamSinkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.oam.OamSinkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.oam.OamSinkArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.oam.OamSinkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.oam.OamSinkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.oam.OamSinkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.oam.OamSinkArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### OamSinkArnProps <a name="OamSinkArnProps" id="@cdk_utils/iam.oam.OamSinkArnProps"></a>

Properties for building a Sink ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.oam.OamSinkArnProps.Initializer"></a>

```typescript
import { oam } from '@cdk_utils/iam'

const oamSinkArnProps: oam.OamSinkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.oam.OamSinkArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.oam.OamSinkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.oam.OamSinkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.oam.OamSinkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.oam.OamSinkArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.oam.OamSinkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.oam.OamSinkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.oam.OamSinkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### OamActions <a name="OamActions" id="@cdk_utils/iam.oam.OamActions"></a>

IAM action constants for the oam service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.oam.OamActions.Initializer"></a>

```typescript
import { oam } from '@cdk_utils/iam'

new oam.OamActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.actionGetLink">actionGetLink</a></code> | <code>string</code> | [Read] oam:GetLink. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.actionGetSink">actionGetSink</a></code> | <code>string</code> | [Read] oam:GetSink. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.actionGetSinkPolicy">actionGetSinkPolicy</a></code> | <code>string</code> | [Read] oam:GetSinkPolicy. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.CreateLink">CreateLink</a></code> | <code>string</code> | [Write] oam:CreateLink. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.CreateSink">CreateSink</a></code> | <code>string</code> | [Write] oam:CreateSink. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.DeleteLink">DeleteLink</a></code> | <code>string</code> | [Write] oam:DeleteLink. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.DeleteSink">DeleteSink</a></code> | <code>string</code> | [Write] oam:DeleteSink. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.ListAttachedLinks">ListAttachedLinks</a></code> | <code>string</code> | [Read] oam:ListAttachedLinks. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.ListLinks">ListLinks</a></code> | <code>string</code> | [Read] oam:ListLinks. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.ListSinks">ListSinks</a></code> | <code>string</code> | [Read] oam:ListSinks. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] oam:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.PutSinkPolicy">PutSinkPolicy</a></code> | <code>string</code> | [Write] oam:PutSinkPolicy. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] oam:TagResource. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] oam:UntagResource. |
| <code><a href="#@cdk_utils/iam.oam.OamActions.property.UpdateLink">UpdateLink</a></code> | <code>string</code> | [Write] oam:UpdateLink. |

---

##### `actionGetLink`<sup>Required</sup> <a name="actionGetLink" id="@cdk_utils/iam.oam.OamActions.property.actionGetLink"></a>

```typescript
public readonly actionGetLink: string;
```

- *Type:* string

[Read] oam:GetLink.

---

##### `actionGetSink`<sup>Required</sup> <a name="actionGetSink" id="@cdk_utils/iam.oam.OamActions.property.actionGetSink"></a>

```typescript
public readonly actionGetSink: string;
```

- *Type:* string

[Read] oam:GetSink.

---

##### `actionGetSinkPolicy`<sup>Required</sup> <a name="actionGetSinkPolicy" id="@cdk_utils/iam.oam.OamActions.property.actionGetSinkPolicy"></a>

```typescript
public readonly actionGetSinkPolicy: string;
```

- *Type:* string

[Read] oam:GetSinkPolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.oam.OamActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.oam.OamActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.oam.OamActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.oam.OamActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.oam.OamActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateLink`<sup>Required</sup> <a name="CreateLink" id="@cdk_utils/iam.oam.OamActions.property.CreateLink"></a>

```typescript
public readonly CreateLink: string;
```

- *Type:* string

[Write] oam:CreateLink.

---

##### `CreateSink`<sup>Required</sup> <a name="CreateSink" id="@cdk_utils/iam.oam.OamActions.property.CreateSink"></a>

```typescript
public readonly CreateSink: string;
```

- *Type:* string

[Write] oam:CreateSink.

---

##### `DeleteLink`<sup>Required</sup> <a name="DeleteLink" id="@cdk_utils/iam.oam.OamActions.property.DeleteLink"></a>

```typescript
public readonly DeleteLink: string;
```

- *Type:* string

[Write] oam:DeleteLink.

---

##### `DeleteSink`<sup>Required</sup> <a name="DeleteSink" id="@cdk_utils/iam.oam.OamActions.property.DeleteSink"></a>

```typescript
public readonly DeleteSink: string;
```

- *Type:* string

[Write] oam:DeleteSink.

---

##### `ListAttachedLinks`<sup>Required</sup> <a name="ListAttachedLinks" id="@cdk_utils/iam.oam.OamActions.property.ListAttachedLinks"></a>

```typescript
public readonly ListAttachedLinks: string;
```

- *Type:* string

[Read] oam:ListAttachedLinks.

---

##### `ListLinks`<sup>Required</sup> <a name="ListLinks" id="@cdk_utils/iam.oam.OamActions.property.ListLinks"></a>

```typescript
public readonly ListLinks: string;
```

- *Type:* string

[Read] oam:ListLinks.

---

##### `ListSinks`<sup>Required</sup> <a name="ListSinks" id="@cdk_utils/iam.oam.OamActions.property.ListSinks"></a>

```typescript
public readonly ListSinks: string;
```

- *Type:* string

[Read] oam:ListSinks.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.oam.OamActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] oam:ListTagsForResource.

---

##### `PutSinkPolicy`<sup>Required</sup> <a name="PutSinkPolicy" id="@cdk_utils/iam.oam.OamActions.property.PutSinkPolicy"></a>

```typescript
public readonly PutSinkPolicy: string;
```

- *Type:* string

[Write] oam:PutSinkPolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.oam.OamActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.oam.OamActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] oam:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.oam.OamActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] oam:UntagResource.

---

##### `UpdateLink`<sup>Required</sup> <a name="UpdateLink" id="@cdk_utils/iam.oam.OamActions.property.UpdateLink"></a>

```typescript
public readonly UpdateLink: string;
```

- *Type:* string

[Write] oam:UpdateLink.

---

### OamConditions <a name="OamConditions" id="@cdk_utils/iam.oam.OamConditions"></a>

Condition key constants and builders for oam.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.oam.OamConditions.Initializer"></a>

```typescript
import { oam } from '@cdk_utils/iam'

new oam.OamConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.resourceTypes">resourceTypes</a></code> | Generates a condition block for `oam:ResourceTypes`. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.oam.OamConditions.requestTag"></a>

```typescript
import { oam } from '@cdk_utils/iam'

oam.OamConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.oam.OamConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.oam.OamConditions.resourceTag"></a>

```typescript
import { oam } from '@cdk_utils/iam'

oam.OamConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.oam.OamConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTypes` <a name="resourceTypes" id="@cdk_utils/iam.oam.OamConditions.resourceTypes"></a>

```typescript
import { oam } from '@cdk_utils/iam'

oam.OamConditions.resourceTypes(values: string[])
```

Generates a condition block for `oam:ResourceTypes`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.oam.OamConditions.resourceTypes.parameter.values"></a>

- *Type:* string[]

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.oam.OamConditions.tagKeys"></a>

```typescript
import { oam } from '@cdk_utils/iam'

oam.OamConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.oam.OamConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.actionGetLinkConditionKeys">actionGetLinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLink action. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.actionGetSinkConditionKeys">actionGetSinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSink action. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.actionGetSinkPolicyConditionKeys">actionGetSinkPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSinkPolicy action. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.CreateLinkConditionKeys">CreateLinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLink action. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.CreateSinkConditionKeys">CreateSinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSink action. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.DeleteLinkConditionKeys">DeleteLinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteLink action. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.DeleteSinkConditionKeys">DeleteSinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSink action. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.ListAttachedLinksConditionKeys">ListAttachedLinksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAttachedLinks action. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.PutSinkPolicyConditionKeys">PutSinkPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutSinkPolicy action. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.RESOURCE_TYPES">RESOURCE_TYPES</a></code> | <code>string</code> | Condition key: oam:ResourceTypes (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.oam.OamConditions.property.UpdateLinkConditionKeys">UpdateLinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateLink action. |

---

##### `actionGetLinkConditionKeys`<sup>Required</sup> <a name="actionGetLinkConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.actionGetLinkConditionKeys"></a>

```typescript
public readonly actionGetLinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLink action.

---

##### `actionGetSinkConditionKeys`<sup>Required</sup> <a name="actionGetSinkConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.actionGetSinkConditionKeys"></a>

```typescript
public readonly actionGetSinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSink action.

---

##### `actionGetSinkPolicyConditionKeys`<sup>Required</sup> <a name="actionGetSinkPolicyConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.actionGetSinkPolicyConditionKeys"></a>

```typescript
public readonly actionGetSinkPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSinkPolicy action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.oam.OamConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.oam.OamConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.oam.OamConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateLinkConditionKeys`<sup>Required</sup> <a name="CreateLinkConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.CreateLinkConditionKeys"></a>

```typescript
public readonly CreateLinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLink action.

---

##### `CreateSinkConditionKeys`<sup>Required</sup> <a name="CreateSinkConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.CreateSinkConditionKeys"></a>

```typescript
public readonly CreateSinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSink action.

---

##### `DeleteLinkConditionKeys`<sup>Required</sup> <a name="DeleteLinkConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.DeleteLinkConditionKeys"></a>

```typescript
public readonly DeleteLinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteLink action.

---

##### `DeleteSinkConditionKeys`<sup>Required</sup> <a name="DeleteSinkConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.DeleteSinkConditionKeys"></a>

```typescript
public readonly DeleteSinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSink action.

---

##### `ListAttachedLinksConditionKeys`<sup>Required</sup> <a name="ListAttachedLinksConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.ListAttachedLinksConditionKeys"></a>

```typescript
public readonly ListAttachedLinksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAttachedLinks action.

---

##### `PutSinkPolicyConditionKeys`<sup>Required</sup> <a name="PutSinkPolicyConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.PutSinkPolicyConditionKeys"></a>

```typescript
public readonly PutSinkPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutSinkPolicy action.

---

##### `RESOURCE_TYPES`<sup>Required</sup> <a name="RESOURCE_TYPES" id="@cdk_utils/iam.oam.OamConditions.property.RESOURCE_TYPES"></a>

```typescript
public readonly RESOURCE_TYPES: string;
```

- *Type:* string

Condition key: oam:ResourceTypes (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateLinkConditionKeys`<sup>Required</sup> <a name="UpdateLinkConditionKeys" id="@cdk_utils/iam.oam.OamConditions.property.UpdateLinkConditionKeys"></a>

```typescript
public readonly UpdateLinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateLink action.

---

### OamOperations <a name="OamOperations" id="@cdk_utils/iam.oam.OamOperations"></a>

API operation to required IAM actions mapping for oam.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.oam.OamOperations.Initializer"></a>

```typescript
import { oam } from '@cdk_utils/iam'

new oam.OamOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.CreateLink">CreateLink</a></code> | <code>string[]</code> | IAM actions required for the CreateLink API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.CreateSink">CreateSink</a></code> | <code>string[]</code> | IAM actions required for the CreateSink API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.DeleteLink">DeleteLink</a></code> | <code>string[]</code> | IAM actions required for the DeleteLink API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.DeleteSink">DeleteSink</a></code> | <code>string[]</code> | IAM actions required for the DeleteSink API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.ListAttachedLinks">ListAttachedLinks</a></code> | <code>string[]</code> | IAM actions required for the ListAttachedLinks API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.ListLinks">ListLinks</a></code> | <code>string[]</code> | IAM actions required for the ListLinks API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.ListSinks">ListSinks</a></code> | <code>string[]</code> | IAM actions required for the ListSinks API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.opGetLink">opGetLink</a></code> | <code>string[]</code> | IAM actions required for the GetLink API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.opGetSink">opGetSink</a></code> | <code>string[]</code> | IAM actions required for the GetSink API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.opGetSinkPolicy">opGetSinkPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetSinkPolicy API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.PutSinkPolicy">PutSinkPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutSinkPolicy API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.oam.OamOperations.property.UpdateLink">UpdateLink</a></code> | <code>string[]</code> | IAM actions required for the UpdateLink API call. |

---

##### `CreateLink`<sup>Required</sup> <a name="CreateLink" id="@cdk_utils/iam.oam.OamOperations.property.CreateLink"></a>

```typescript
public readonly CreateLink: string[];
```

- *Type:* string[]

IAM actions required for the CreateLink API call.

---

##### `CreateSink`<sup>Required</sup> <a name="CreateSink" id="@cdk_utils/iam.oam.OamOperations.property.CreateSink"></a>

```typescript
public readonly CreateSink: string[];
```

- *Type:* string[]

IAM actions required for the CreateSink API call.

---

##### `DeleteLink`<sup>Required</sup> <a name="DeleteLink" id="@cdk_utils/iam.oam.OamOperations.property.DeleteLink"></a>

```typescript
public readonly DeleteLink: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLink API call.

---

##### `DeleteSink`<sup>Required</sup> <a name="DeleteSink" id="@cdk_utils/iam.oam.OamOperations.property.DeleteSink"></a>

```typescript
public readonly DeleteSink: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSink API call.

---

##### `ListAttachedLinks`<sup>Required</sup> <a name="ListAttachedLinks" id="@cdk_utils/iam.oam.OamOperations.property.ListAttachedLinks"></a>

```typescript
public readonly ListAttachedLinks: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachedLinks API call.

---

##### `ListLinks`<sup>Required</sup> <a name="ListLinks" id="@cdk_utils/iam.oam.OamOperations.property.ListLinks"></a>

```typescript
public readonly ListLinks: string[];
```

- *Type:* string[]

IAM actions required for the ListLinks API call.

---

##### `ListSinks`<sup>Required</sup> <a name="ListSinks" id="@cdk_utils/iam.oam.OamOperations.property.ListSinks"></a>

```typescript
public readonly ListSinks: string[];
```

- *Type:* string[]

IAM actions required for the ListSinks API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.oam.OamOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetLink`<sup>Required</sup> <a name="opGetLink" id="@cdk_utils/iam.oam.OamOperations.property.opGetLink"></a>

```typescript
public readonly opGetLink: string[];
```

- *Type:* string[]

IAM actions required for the GetLink API call.

---

##### `opGetSink`<sup>Required</sup> <a name="opGetSink" id="@cdk_utils/iam.oam.OamOperations.property.opGetSink"></a>

```typescript
public readonly opGetSink: string[];
```

- *Type:* string[]

IAM actions required for the GetSink API call.

---

##### `opGetSinkPolicy`<sup>Required</sup> <a name="opGetSinkPolicy" id="@cdk_utils/iam.oam.OamOperations.property.opGetSinkPolicy"></a>

```typescript
public readonly opGetSinkPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetSinkPolicy API call.

---

##### `PutSinkPolicy`<sup>Required</sup> <a name="PutSinkPolicy" id="@cdk_utils/iam.oam.OamOperations.property.PutSinkPolicy"></a>

```typescript
public readonly PutSinkPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutSinkPolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.oam.OamOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.oam.OamOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateLink`<sup>Required</sup> <a name="UpdateLink" id="@cdk_utils/iam.oam.OamOperations.property.UpdateLink"></a>

```typescript
public readonly UpdateLink: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLink API call.

---

### OamResources <a name="OamResources" id="@cdk_utils/iam.oam.OamResources"></a>

ARN builders, validators, and parsers for oam resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.oam.OamResources.Initializer"></a>

```typescript
import { oam } from '@cdk_utils/iam'

new oam.OamResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.oam.OamResources.isValidLinkArn">isValidLinkArn</a></code> | Validates whether a string is a valid ARN for the Link resource. |
| <code><a href="#@cdk_utils/iam.oam.OamResources.isValidSinkArn">isValidSinkArn</a></code> | Validates whether a string is a valid ARN for the Sink resource. |
| <code><a href="#@cdk_utils/iam.oam.OamResources.link">link</a></code> | Builds an ARN for the Link resource. |
| <code><a href="#@cdk_utils/iam.oam.OamResources.parseLinkArn">parseLinkArn</a></code> | Parses a Link ARN into its components. |
| <code><a href="#@cdk_utils/iam.oam.OamResources.parseSinkArn">parseSinkArn</a></code> | Parses a Sink ARN into its components. |
| <code><a href="#@cdk_utils/iam.oam.OamResources.sink">sink</a></code> | Builds an ARN for the Sink resource. |

---

##### `isValidLinkArn` <a name="isValidLinkArn" id="@cdk_utils/iam.oam.OamResources.isValidLinkArn"></a>

```typescript
import { oam } from '@cdk_utils/iam'

oam.OamResources.isValidLinkArn(arn: string)
```

Validates whether a string is a valid ARN for the Link resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.oam.OamResources.isValidLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSinkArn` <a name="isValidSinkArn" id="@cdk_utils/iam.oam.OamResources.isValidSinkArn"></a>

```typescript
import { oam } from '@cdk_utils/iam'

oam.OamResources.isValidSinkArn(arn: string)
```

Validates whether a string is a valid ARN for the Sink resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.oam.OamResources.isValidSinkArn.parameter.arn"></a>

- *Type:* string

---

##### `link` <a name="link" id="@cdk_utils/iam.oam.OamResources.link"></a>

```typescript
import { oam } from '@cdk_utils/iam'

oam.OamResources.link(props: OamLinkArnProps)
```

Builds an ARN for the Link resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.oam.OamResources.link.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.oam.OamLinkArnProps">OamLinkArnProps</a>

---

##### `parseLinkArn` <a name="parseLinkArn" id="@cdk_utils/iam.oam.OamResources.parseLinkArn"></a>

```typescript
import { oam } from '@cdk_utils/iam'

oam.OamResources.parseLinkArn(arn: string)
```

Parses a Link ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.oam.OamResources.parseLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSinkArn` <a name="parseSinkArn" id="@cdk_utils/iam.oam.OamResources.parseSinkArn"></a>

```typescript
import { oam } from '@cdk_utils/iam'

oam.OamResources.parseSinkArn(arn: string)
```

Parses a Sink ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.oam.OamResources.parseSinkArn.parameter.arn"></a>

- *Type:* string

---

##### `sink` <a name="sink" id="@cdk_utils/iam.oam.OamResources.sink"></a>

```typescript
import { oam } from '@cdk_utils/iam'

oam.OamResources.sink(props: OamSinkArnProps)
```

Builds an ARN for the Sink resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.oam.OamResources.sink.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.oam.OamSinkArnProps">OamSinkArnProps</a>

---




