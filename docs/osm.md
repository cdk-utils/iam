# `osm` Submodule <a name="`osm` Submodule" id="@cdk_utils/iam.osm"></a>


## Structs <a name="Structs" id="Structs"></a>

### OsmSpaceArnComponents <a name="OsmSpaceArnComponents" id="@cdk_utils/iam.osm.OsmSpaceArnComponents"></a>

Parsed components of a space ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.osm.OsmSpaceArnComponents.Initializer"></a>

```typescript
import { osm } from '@cdk_utils/iam'

const osmSpaceArnComponents: osm.OsmSpaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osm.OsmSpaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.osm.OsmSpaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.osm.OsmSpaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.osm.OsmSpaceArnComponents.property.spaceId">spaceId</a></code> | <code>string</code> | The SpaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.osm.OsmSpaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.osm.OsmSpaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.osm.OsmSpaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdk_utils/iam.osm.OsmSpaceArnComponents.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

The SpaceId component.

---

### OsmSpaceArnProps <a name="OsmSpaceArnProps" id="@cdk_utils/iam.osm.OsmSpaceArnProps"></a>

Properties for building a space ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.osm.OsmSpaceArnProps.Initializer"></a>

```typescript
import { osm } from '@cdk_utils/iam'

const osmSpaceArnProps: osm.OsmSpaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osm.OsmSpaceArnProps.property.spaceId">spaceId</a></code> | <code>string</code> | The SpaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.osm.OsmSpaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.osm.OsmSpaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.osm.OsmSpaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdk_utils/iam.osm.OsmSpaceArnProps.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

The SpaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.osm.OsmSpaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.osm.OsmSpaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.osm.OsmSpaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### OsmActions <a name="OsmActions" id="@cdk_utils/iam.osm.OsmActions"></a>

IAM action constants for the osm service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.osm.OsmActions.Initializer"></a>

```typescript
import { osm } from '@cdk_utils/iam'

new osm.OsmActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.actionGetEvent">actionGetEvent</a></code> | <code>string</code> | [Read] osm:GetEvent. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.actionGetMemory">actionGetMemory</a></code> | <code>string</code> | [Read] osm:GetMemory. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.actionGetSpace">actionGetSpace</a></code> | <code>string</code> | [Read] osm:GetSpace. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.BatchGetEvent">BatchGetEvent</a></code> | <code>string</code> | [Read] osm:BatchGetEvent. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.CreateEvent">CreateEvent</a></code> | <code>string</code> | [Write] osm:CreateEvent. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.CreateMemory">CreateMemory</a></code> | <code>string</code> | [Write] osm:CreateMemory. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.CreateSpace">CreateSpace</a></code> | <code>string</code> | [Write] osm:CreateSpace. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.DeleteEvent">DeleteEvent</a></code> | <code>string</code> | [Write] osm:DeleteEvent. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.DeleteMemory">DeleteMemory</a></code> | <code>string</code> | [Write] osm:DeleteMemory. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.DeleteSpace">DeleteSpace</a></code> | <code>string</code> | [Write] osm:DeleteSpace. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.ListEvents">ListEvents</a></code> | <code>string</code> | [List] osm:ListEvents. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.ListMemories">ListMemories</a></code> | <code>string</code> | [List] osm:ListMemories. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.ListSpaces">ListSpaces</a></code> | <code>string</code> | [List] osm:ListSpaces. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] osm:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.SearchEvents">SearchEvents</a></code> | <code>string</code> | [Read] osm:SearchEvents. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.SearchMemories">SearchMemories</a></code> | <code>string</code> | [Read] osm:SearchMemories. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] osm:TagResource. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] osm:UntagResource. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.UpdateMemory">UpdateMemory</a></code> | <code>string</code> | [Write] osm:UpdateMemory. |
| <code><a href="#@cdk_utils/iam.osm.OsmActions.property.UpdateSpace">UpdateSpace</a></code> | <code>string</code> | [Write] osm:UpdateSpace. |

---

##### `actionGetEvent`<sup>Required</sup> <a name="actionGetEvent" id="@cdk_utils/iam.osm.OsmActions.property.actionGetEvent"></a>

```typescript
public readonly actionGetEvent: string;
```

- *Type:* string

[Read] osm:GetEvent.

---

##### `actionGetMemory`<sup>Required</sup> <a name="actionGetMemory" id="@cdk_utils/iam.osm.OsmActions.property.actionGetMemory"></a>

```typescript
public readonly actionGetMemory: string;
```

- *Type:* string

[Read] osm:GetMemory.

---

##### `actionGetSpace`<sup>Required</sup> <a name="actionGetSpace" id="@cdk_utils/iam.osm.OsmActions.property.actionGetSpace"></a>

```typescript
public readonly actionGetSpace: string;
```

- *Type:* string

[Read] osm:GetSpace.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.osm.OsmActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.osm.OsmActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.osm.OsmActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.osm.OsmActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.osm.OsmActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetEvent`<sup>Required</sup> <a name="BatchGetEvent" id="@cdk_utils/iam.osm.OsmActions.property.BatchGetEvent"></a>

```typescript
public readonly BatchGetEvent: string;
```

- *Type:* string

[Read] osm:BatchGetEvent.

---

##### `CreateEvent`<sup>Required</sup> <a name="CreateEvent" id="@cdk_utils/iam.osm.OsmActions.property.CreateEvent"></a>

```typescript
public readonly CreateEvent: string;
```

- *Type:* string

[Write] osm:CreateEvent.

---

##### `CreateMemory`<sup>Required</sup> <a name="CreateMemory" id="@cdk_utils/iam.osm.OsmActions.property.CreateMemory"></a>

```typescript
public readonly CreateMemory: string;
```

- *Type:* string

[Write] osm:CreateMemory.

---

##### `CreateSpace`<sup>Required</sup> <a name="CreateSpace" id="@cdk_utils/iam.osm.OsmActions.property.CreateSpace"></a>

```typescript
public readonly CreateSpace: string;
```

- *Type:* string

[Write] osm:CreateSpace.

---

##### `DeleteEvent`<sup>Required</sup> <a name="DeleteEvent" id="@cdk_utils/iam.osm.OsmActions.property.DeleteEvent"></a>

```typescript
public readonly DeleteEvent: string;
```

- *Type:* string

[Write] osm:DeleteEvent.

---

##### `DeleteMemory`<sup>Required</sup> <a name="DeleteMemory" id="@cdk_utils/iam.osm.OsmActions.property.DeleteMemory"></a>

```typescript
public readonly DeleteMemory: string;
```

- *Type:* string

[Write] osm:DeleteMemory.

---

##### `DeleteSpace`<sup>Required</sup> <a name="DeleteSpace" id="@cdk_utils/iam.osm.OsmActions.property.DeleteSpace"></a>

```typescript
public readonly DeleteSpace: string;
```

- *Type:* string

[Write] osm:DeleteSpace.

---

##### `ListEvents`<sup>Required</sup> <a name="ListEvents" id="@cdk_utils/iam.osm.OsmActions.property.ListEvents"></a>

```typescript
public readonly ListEvents: string;
```

- *Type:* string

[List] osm:ListEvents.

---

##### `ListMemories`<sup>Required</sup> <a name="ListMemories" id="@cdk_utils/iam.osm.OsmActions.property.ListMemories"></a>

```typescript
public readonly ListMemories: string;
```

- *Type:* string

[List] osm:ListMemories.

---

##### `ListSpaces`<sup>Required</sup> <a name="ListSpaces" id="@cdk_utils/iam.osm.OsmActions.property.ListSpaces"></a>

```typescript
public readonly ListSpaces: string;
```

- *Type:* string

[List] osm:ListSpaces.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.osm.OsmActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] osm:ListTagsForResource.

---

##### `SearchEvents`<sup>Required</sup> <a name="SearchEvents" id="@cdk_utils/iam.osm.OsmActions.property.SearchEvents"></a>

```typescript
public readonly SearchEvents: string;
```

- *Type:* string

[Read] osm:SearchEvents.

---

##### `SearchMemories`<sup>Required</sup> <a name="SearchMemories" id="@cdk_utils/iam.osm.OsmActions.property.SearchMemories"></a>

```typescript
public readonly SearchMemories: string;
```

- *Type:* string

[Read] osm:SearchMemories.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.osm.OsmActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.osm.OsmActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] osm:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.osm.OsmActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] osm:UntagResource.

---

##### `UpdateMemory`<sup>Required</sup> <a name="UpdateMemory" id="@cdk_utils/iam.osm.OsmActions.property.UpdateMemory"></a>

```typescript
public readonly UpdateMemory: string;
```

- *Type:* string

[Write] osm:UpdateMemory.

---

##### `UpdateSpace`<sup>Required</sup> <a name="UpdateSpace" id="@cdk_utils/iam.osm.OsmActions.property.UpdateSpace"></a>

```typescript
public readonly UpdateSpace: string;
```

- *Type:* string

[Write] osm:UpdateSpace.

---

### OsmConditions <a name="OsmConditions" id="@cdk_utils/iam.osm.OsmConditions"></a>

Condition key constants and builders for osm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.osm.OsmConditions.Initializer"></a>

```typescript
import { osm } from '@cdk_utils/iam'

new osm.OsmConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.actorId">actorId</a></code> | Generates a condition block for `osm:actorId`. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.sessionId">sessionId</a></code> | Generates a condition block for `osm:sessionId`. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.strategyName">strategyName</a></code> | Generates a condition block for `osm:strategyName`. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `actorId` <a name="actorId" id="@cdk_utils/iam.osm.OsmConditions.actorId"></a>

```typescript
import { osm } from '@cdk_utils/iam'

osm.OsmConditions.actorId(values: string[])
```

Generates a condition block for `osm:actorId`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.osm.OsmConditions.actorId.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.osm.OsmConditions.requestTag"></a>

```typescript
import { osm } from '@cdk_utils/iam'

osm.OsmConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.osm.OsmConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.osm.OsmConditions.resourceTag"></a>

```typescript
import { osm } from '@cdk_utils/iam'

osm.OsmConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.osm.OsmConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `sessionId` <a name="sessionId" id="@cdk_utils/iam.osm.OsmConditions.sessionId"></a>

```typescript
import { osm } from '@cdk_utils/iam'

osm.OsmConditions.sessionId(values: string[])
```

Generates a condition block for `osm:sessionId`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.osm.OsmConditions.sessionId.parameter.values"></a>

- *Type:* string[]

---

##### `strategyName` <a name="strategyName" id="@cdk_utils/iam.osm.OsmConditions.strategyName"></a>

```typescript
import { osm } from '@cdk_utils/iam'

osm.OsmConditions.strategyName(values: string[])
```

Generates a condition block for `osm:strategyName`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.osm.OsmConditions.strategyName.parameter.values"></a>

- *Type:* string[]

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.osm.OsmConditions.tagKeys"></a>

```typescript
import { osm } from '@cdk_utils/iam'

osm.OsmConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.osm.OsmConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.actionGetEventConditionKeys">actionGetEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEvent action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.actionGetMemoryConditionKeys">actionGetMemoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMemory action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.ACTOR_ID">ACTOR_ID</a></code> | <code>string</code> | Condition key: osm:actorId (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.BatchGetEventConditionKeys">BatchGetEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchGetEvent action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.CreateEventConditionKeys">CreateEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEvent action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.CreateMemoryConditionKeys">CreateMemoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMemory action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.CreateSpaceConditionKeys">CreateSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSpace action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.DeleteEventConditionKeys">DeleteEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEvent action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.DeleteMemoryConditionKeys">DeleteMemoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteMemory action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.ListEventsConditionKeys">ListEventsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEvents action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.ListMemoriesConditionKeys">ListMemoriesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListMemories action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.SearchEventsConditionKeys">SearchEventsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchEvents action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.SearchMemoriesConditionKeys">SearchMemoriesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchMemories action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.SESSION_ID">SESSION_ID</a></code> | <code>string</code> | Condition key: osm:sessionId (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.STRATEGY_NAME">STRATEGY_NAME</a></code> | <code>string</code> | Condition key: osm:strategyName (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.osm.OsmConditions.property.UpdateMemoryConditionKeys">UpdateMemoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateMemory action. |

---

##### `actionGetEventConditionKeys`<sup>Required</sup> <a name="actionGetEventConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.actionGetEventConditionKeys"></a>

```typescript
public readonly actionGetEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEvent action.

---

##### `actionGetMemoryConditionKeys`<sup>Required</sup> <a name="actionGetMemoryConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.actionGetMemoryConditionKeys"></a>

```typescript
public readonly actionGetMemoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMemory action.

---

##### `ACTOR_ID`<sup>Required</sup> <a name="ACTOR_ID" id="@cdk_utils/iam.osm.OsmConditions.property.ACTOR_ID"></a>

```typescript
public readonly ACTOR_ID: string;
```

- *Type:* string

Condition key: osm:actorId (ArrayOfString).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.osm.OsmConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.osm.OsmConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.osm.OsmConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchGetEventConditionKeys`<sup>Required</sup> <a name="BatchGetEventConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.BatchGetEventConditionKeys"></a>

```typescript
public readonly BatchGetEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchGetEvent action.

---

##### `CreateEventConditionKeys`<sup>Required</sup> <a name="CreateEventConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.CreateEventConditionKeys"></a>

```typescript
public readonly CreateEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEvent action.

---

##### `CreateMemoryConditionKeys`<sup>Required</sup> <a name="CreateMemoryConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.CreateMemoryConditionKeys"></a>

```typescript
public readonly CreateMemoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMemory action.

---

##### `CreateSpaceConditionKeys`<sup>Required</sup> <a name="CreateSpaceConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.CreateSpaceConditionKeys"></a>

```typescript
public readonly CreateSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSpace action.

---

##### `DeleteEventConditionKeys`<sup>Required</sup> <a name="DeleteEventConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.DeleteEventConditionKeys"></a>

```typescript
public readonly DeleteEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEvent action.

---

##### `DeleteMemoryConditionKeys`<sup>Required</sup> <a name="DeleteMemoryConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.DeleteMemoryConditionKeys"></a>

```typescript
public readonly DeleteMemoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteMemory action.

---

##### `ListEventsConditionKeys`<sup>Required</sup> <a name="ListEventsConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.ListEventsConditionKeys"></a>

```typescript
public readonly ListEventsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEvents action.

---

##### `ListMemoriesConditionKeys`<sup>Required</sup> <a name="ListMemoriesConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.ListMemoriesConditionKeys"></a>

```typescript
public readonly ListMemoriesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListMemories action.

---

##### `SearchEventsConditionKeys`<sup>Required</sup> <a name="SearchEventsConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.SearchEventsConditionKeys"></a>

```typescript
public readonly SearchEventsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchEvents action.

---

##### `SearchMemoriesConditionKeys`<sup>Required</sup> <a name="SearchMemoriesConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.SearchMemoriesConditionKeys"></a>

```typescript
public readonly SearchMemoriesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchMemories action.

---

##### `SESSION_ID`<sup>Required</sup> <a name="SESSION_ID" id="@cdk_utils/iam.osm.OsmConditions.property.SESSION_ID"></a>

```typescript
public readonly SESSION_ID: string;
```

- *Type:* string

Condition key: osm:sessionId (ArrayOfString).

---

##### `STRATEGY_NAME`<sup>Required</sup> <a name="STRATEGY_NAME" id="@cdk_utils/iam.osm.OsmConditions.property.STRATEGY_NAME"></a>

```typescript
public readonly STRATEGY_NAME: string;
```

- *Type:* string

Condition key: osm:strategyName (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateMemoryConditionKeys`<sup>Required</sup> <a name="UpdateMemoryConditionKeys" id="@cdk_utils/iam.osm.OsmConditions.property.UpdateMemoryConditionKeys"></a>

```typescript
public readonly UpdateMemoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateMemory action.

---

### OsmOperations <a name="OsmOperations" id="@cdk_utils/iam.osm.OsmOperations"></a>

API operation to required IAM actions mapping for osm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.osm.OsmOperations.Initializer"></a>

```typescript
import { osm } from '@cdk_utils/iam'

new osm.OsmOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.BatchGetEvent">BatchGetEvent</a></code> | <code>string[]</code> | IAM actions required for the BatchGetEvent API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.CreateEvent">CreateEvent</a></code> | <code>string[]</code> | IAM actions required for the CreateEvent API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.CreateMemory">CreateMemory</a></code> | <code>string[]</code> | IAM actions required for the CreateMemory API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.CreateSpace">CreateSpace</a></code> | <code>string[]</code> | IAM actions required for the CreateSpace API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.DeleteEvent">DeleteEvent</a></code> | <code>string[]</code> | IAM actions required for the DeleteEvent API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.DeleteMemory">DeleteMemory</a></code> | <code>string[]</code> | IAM actions required for the DeleteMemory API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.DeleteSpace">DeleteSpace</a></code> | <code>string[]</code> | IAM actions required for the DeleteSpace API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.ListEvents">ListEvents</a></code> | <code>string[]</code> | IAM actions required for the ListEvents API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.ListMemories">ListMemories</a></code> | <code>string[]</code> | IAM actions required for the ListMemories API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.ListSpaces">ListSpaces</a></code> | <code>string[]</code> | IAM actions required for the ListSpaces API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.opGetEvent">opGetEvent</a></code> | <code>string[]</code> | IAM actions required for the GetEvent API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.opGetMemory">opGetMemory</a></code> | <code>string[]</code> | IAM actions required for the GetMemory API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.opGetSpace">opGetSpace</a></code> | <code>string[]</code> | IAM actions required for the GetSpace API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.SearchEvents">SearchEvents</a></code> | <code>string[]</code> | IAM actions required for the SearchEvents API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.SearchMemories">SearchMemories</a></code> | <code>string[]</code> | IAM actions required for the SearchMemories API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.UpdateMemory">UpdateMemory</a></code> | <code>string[]</code> | IAM actions required for the UpdateMemory API call. |
| <code><a href="#@cdk_utils/iam.osm.OsmOperations.property.UpdateSpace">UpdateSpace</a></code> | <code>string[]</code> | IAM actions required for the UpdateSpace API call. |

---

##### `BatchGetEvent`<sup>Required</sup> <a name="BatchGetEvent" id="@cdk_utils/iam.osm.OsmOperations.property.BatchGetEvent"></a>

```typescript
public readonly BatchGetEvent: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetEvent API call.

---

##### `CreateEvent`<sup>Required</sup> <a name="CreateEvent" id="@cdk_utils/iam.osm.OsmOperations.property.CreateEvent"></a>

```typescript
public readonly CreateEvent: string[];
```

- *Type:* string[]

IAM actions required for the CreateEvent API call.

---

##### `CreateMemory`<sup>Required</sup> <a name="CreateMemory" id="@cdk_utils/iam.osm.OsmOperations.property.CreateMemory"></a>

```typescript
public readonly CreateMemory: string[];
```

- *Type:* string[]

IAM actions required for the CreateMemory API call.

---

##### `CreateSpace`<sup>Required</sup> <a name="CreateSpace" id="@cdk_utils/iam.osm.OsmOperations.property.CreateSpace"></a>

```typescript
public readonly CreateSpace: string[];
```

- *Type:* string[]

IAM actions required for the CreateSpace API call.

---

##### `DeleteEvent`<sup>Required</sup> <a name="DeleteEvent" id="@cdk_utils/iam.osm.OsmOperations.property.DeleteEvent"></a>

```typescript
public readonly DeleteEvent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEvent API call.

---

##### `DeleteMemory`<sup>Required</sup> <a name="DeleteMemory" id="@cdk_utils/iam.osm.OsmOperations.property.DeleteMemory"></a>

```typescript
public readonly DeleteMemory: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMemory API call.

---

##### `DeleteSpace`<sup>Required</sup> <a name="DeleteSpace" id="@cdk_utils/iam.osm.OsmOperations.property.DeleteSpace"></a>

```typescript
public readonly DeleteSpace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSpace API call.

---

##### `ListEvents`<sup>Required</sup> <a name="ListEvents" id="@cdk_utils/iam.osm.OsmOperations.property.ListEvents"></a>

```typescript
public readonly ListEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListEvents API call.

---

##### `ListMemories`<sup>Required</sup> <a name="ListMemories" id="@cdk_utils/iam.osm.OsmOperations.property.ListMemories"></a>

```typescript
public readonly ListMemories: string[];
```

- *Type:* string[]

IAM actions required for the ListMemories API call.

---

##### `ListSpaces`<sup>Required</sup> <a name="ListSpaces" id="@cdk_utils/iam.osm.OsmOperations.property.ListSpaces"></a>

```typescript
public readonly ListSpaces: string[];
```

- *Type:* string[]

IAM actions required for the ListSpaces API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.osm.OsmOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetEvent`<sup>Required</sup> <a name="opGetEvent" id="@cdk_utils/iam.osm.OsmOperations.property.opGetEvent"></a>

```typescript
public readonly opGetEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetEvent API call.

---

##### `opGetMemory`<sup>Required</sup> <a name="opGetMemory" id="@cdk_utils/iam.osm.OsmOperations.property.opGetMemory"></a>

```typescript
public readonly opGetMemory: string[];
```

- *Type:* string[]

IAM actions required for the GetMemory API call.

---

##### `opGetSpace`<sup>Required</sup> <a name="opGetSpace" id="@cdk_utils/iam.osm.OsmOperations.property.opGetSpace"></a>

```typescript
public readonly opGetSpace: string[];
```

- *Type:* string[]

IAM actions required for the GetSpace API call.

---

##### `SearchEvents`<sup>Required</sup> <a name="SearchEvents" id="@cdk_utils/iam.osm.OsmOperations.property.SearchEvents"></a>

```typescript
public readonly SearchEvents: string[];
```

- *Type:* string[]

IAM actions required for the SearchEvents API call.

---

##### `SearchMemories`<sup>Required</sup> <a name="SearchMemories" id="@cdk_utils/iam.osm.OsmOperations.property.SearchMemories"></a>

```typescript
public readonly SearchMemories: string[];
```

- *Type:* string[]

IAM actions required for the SearchMemories API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.osm.OsmOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.osm.OsmOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateMemory`<sup>Required</sup> <a name="UpdateMemory" id="@cdk_utils/iam.osm.OsmOperations.property.UpdateMemory"></a>

```typescript
public readonly UpdateMemory: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMemory API call.

---

##### `UpdateSpace`<sup>Required</sup> <a name="UpdateSpace" id="@cdk_utils/iam.osm.OsmOperations.property.UpdateSpace"></a>

```typescript
public readonly UpdateSpace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSpace API call.

---

### OsmResources <a name="OsmResources" id="@cdk_utils/iam.osm.OsmResources"></a>

ARN builders, validators, and parsers for osm resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.osm.OsmResources.Initializer"></a>

```typescript
import { osm } from '@cdk_utils/iam'

new osm.OsmResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.osm.OsmResources.isValidSpaceArn">isValidSpaceArn</a></code> | Validates whether a string is a valid ARN for the space resource. |
| <code><a href="#@cdk_utils/iam.osm.OsmResources.parseSpaceArn">parseSpaceArn</a></code> | Parses a space ARN into its components. |
| <code><a href="#@cdk_utils/iam.osm.OsmResources.space">space</a></code> | Builds an ARN for the space resource. |

---

##### `isValidSpaceArn` <a name="isValidSpaceArn" id="@cdk_utils/iam.osm.OsmResources.isValidSpaceArn"></a>

```typescript
import { osm } from '@cdk_utils/iam'

osm.OsmResources.isValidSpaceArn(arn: string)
```

Validates whether a string is a valid ARN for the space resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.osm.OsmResources.isValidSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSpaceArn` <a name="parseSpaceArn" id="@cdk_utils/iam.osm.OsmResources.parseSpaceArn"></a>

```typescript
import { osm } from '@cdk_utils/iam'

osm.OsmResources.parseSpaceArn(arn: string)
```

Parses a space ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.osm.OsmResources.parseSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `space` <a name="space" id="@cdk_utils/iam.osm.OsmResources.space"></a>

```typescript
import { osm } from '@cdk_utils/iam'

osm.OsmResources.space(props: OsmSpaceArnProps)
```

Builds an ARN for the space resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.osm.OsmResources.space.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.osm.OsmSpaceArnProps">OsmSpaceArnProps</a>

---




