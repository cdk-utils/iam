# `elemental_inference` Submodule <a name="`elemental_inference` Submodule" id="@cdk_utils/iam.elemental_inference"></a>


## Structs <a name="Structs" id="Structs"></a>

### ElementalInferenceDictionaryArnComponents <a name="ElementalInferenceDictionaryArnComponents" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnComponents"></a>

Parsed components of a dictionary ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnComponents.Initializer"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

const elementalInferenceDictionaryArnComponents: elemental_inference.ElementalInferenceDictionaryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElementalInferenceDictionaryArnProps <a name="ElementalInferenceDictionaryArnProps" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnProps"></a>

Properties for building a dictionary ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnProps.Initializer"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

const elementalInferenceDictionaryArnProps: elemental_inference.ElementalInferenceDictionaryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElementalInferenceFeedArnComponents <a name="ElementalInferenceFeedArnComponents" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnComponents"></a>

Parsed components of a feed ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnComponents.Initializer"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

const elementalInferenceFeedArnComponents: elemental_inference.ElementalInferenceFeedArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElementalInferenceFeedArnProps <a name="ElementalInferenceFeedArnProps" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnProps"></a>

Properties for building a feed ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnProps.Initializer"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

const elementalInferenceFeedArnProps: elemental_inference.ElementalInferenceFeedArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ElementalInferenceActions <a name="ElementalInferenceActions" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions"></a>

IAM action constants for the elemental-inference service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.Initializer"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

new elemental_inference.ElementalInferenceActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.actionGetDictionary">actionGetDictionary</a></code> | <code>string</code> | [Read] elemental-inference:GetDictionary. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.actionGetFeed">actionGetFeed</a></code> | <code>string</code> | [Read] elemental-inference:GetFeed. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.actionGetMetadata">actionGetMetadata</a></code> | <code>string</code> | [Read] elemental-inference:GetMetadata. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AssociateFeed">AssociateFeed</a></code> | <code>string</code> | [Write] elemental-inference:AssociateFeed. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.CreateDictionary">CreateDictionary</a></code> | <code>string</code> | [Write] elemental-inference:CreateDictionary. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.CreateFeed">CreateFeed</a></code> | <code>string</code> | [Write] elemental-inference:CreateFeed. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.DeleteDictionary">DeleteDictionary</a></code> | <code>string</code> | [Write] elemental-inference:DeleteDictionary. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.DeleteFeed">DeleteFeed</a></code> | <code>string</code> | [Write] elemental-inference:DeleteFeed. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.DisassociateFeed">DisassociateFeed</a></code> | <code>string</code> | [Write] elemental-inference:DisassociateFeed. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.ExportDictionaryEntries">ExportDictionaryEntries</a></code> | <code>string</code> | [Read] elemental-inference:ExportDictionaryEntries. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.ListDictionaries">ListDictionaries</a></code> | <code>string</code> | [List] elemental-inference:ListDictionaries. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.ListFeeds">ListFeeds</a></code> | <code>string</code> | [List] elemental-inference:ListFeeds. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] elemental-inference:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.PutMedia">PutMedia</a></code> | <code>string</code> | [Write] elemental-inference:PutMedia. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] elemental-inference:TagResource. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] elemental-inference:UntagResource. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.UpdateDictionary">UpdateDictionary</a></code> | <code>string</code> | [Write] elemental-inference:UpdateDictionary. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.UpdateFeed">UpdateFeed</a></code> | <code>string</code> | [Write] elemental-inference:UpdateFeed. |

---

##### `actionGetDictionary`<sup>Required</sup> <a name="actionGetDictionary" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.actionGetDictionary"></a>

```typescript
public readonly actionGetDictionary: string;
```

- *Type:* string

[Read] elemental-inference:GetDictionary.

---

##### `actionGetFeed`<sup>Required</sup> <a name="actionGetFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.actionGetFeed"></a>

```typescript
public readonly actionGetFeed: string;
```

- *Type:* string

[Read] elemental-inference:GetFeed.

---

##### `actionGetMetadata`<sup>Required</sup> <a name="actionGetMetadata" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.actionGetMetadata"></a>

```typescript
public readonly actionGetMetadata: string;
```

- *Type:* string

[Read] elemental-inference:GetMetadata.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateFeed`<sup>Required</sup> <a name="AssociateFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.AssociateFeed"></a>

```typescript
public readonly AssociateFeed: string;
```

- *Type:* string

[Write] elemental-inference:AssociateFeed.

---

##### `CreateDictionary`<sup>Required</sup> <a name="CreateDictionary" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.CreateDictionary"></a>

```typescript
public readonly CreateDictionary: string;
```

- *Type:* string

[Write] elemental-inference:CreateDictionary.

---

##### `CreateFeed`<sup>Required</sup> <a name="CreateFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.CreateFeed"></a>

```typescript
public readonly CreateFeed: string;
```

- *Type:* string

[Write] elemental-inference:CreateFeed.

---

##### `DeleteDictionary`<sup>Required</sup> <a name="DeleteDictionary" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.DeleteDictionary"></a>

```typescript
public readonly DeleteDictionary: string;
```

- *Type:* string

[Write] elemental-inference:DeleteDictionary.

---

##### `DeleteFeed`<sup>Required</sup> <a name="DeleteFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.DeleteFeed"></a>

```typescript
public readonly DeleteFeed: string;
```

- *Type:* string

[Write] elemental-inference:DeleteFeed.

---

##### `DisassociateFeed`<sup>Required</sup> <a name="DisassociateFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.DisassociateFeed"></a>

```typescript
public readonly DisassociateFeed: string;
```

- *Type:* string

[Write] elemental-inference:DisassociateFeed.

---

##### `ExportDictionaryEntries`<sup>Required</sup> <a name="ExportDictionaryEntries" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.ExportDictionaryEntries"></a>

```typescript
public readonly ExportDictionaryEntries: string;
```

- *Type:* string

[Read] elemental-inference:ExportDictionaryEntries.

---

##### `ListDictionaries`<sup>Required</sup> <a name="ListDictionaries" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.ListDictionaries"></a>

```typescript
public readonly ListDictionaries: string;
```

- *Type:* string

[List] elemental-inference:ListDictionaries.

---

##### `ListFeeds`<sup>Required</sup> <a name="ListFeeds" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.ListFeeds"></a>

```typescript
public readonly ListFeeds: string;
```

- *Type:* string

[List] elemental-inference:ListFeeds.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] elemental-inference:ListTagsForResource.

---

##### `PutMedia`<sup>Required</sup> <a name="PutMedia" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.PutMedia"></a>

```typescript
public readonly PutMedia: string;
```

- *Type:* string

[Write] elemental-inference:PutMedia.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] elemental-inference:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] elemental-inference:UntagResource.

---

##### `UpdateDictionary`<sup>Required</sup> <a name="UpdateDictionary" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.UpdateDictionary"></a>

```typescript
public readonly UpdateDictionary: string;
```

- *Type:* string

[Write] elemental-inference:UpdateDictionary.

---

##### `UpdateFeed`<sup>Required</sup> <a name="UpdateFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceActions.property.UpdateFeed"></a>

```typescript
public readonly UpdateFeed: string;
```

- *Type:* string

[Write] elemental-inference:UpdateFeed.

---

### ElementalInferenceConditions <a name="ElementalInferenceConditions" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions"></a>

Condition key constants and builders for elemental-inference.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.Initializer"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

new elemental_inference.ElementalInferenceConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.requestTag"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

elemental_inference.ElementalInferenceConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.resourceTag"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

elemental_inference.ElementalInferenceConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.tagKeys"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

elemental_inference.ElementalInferenceConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.CreateDictionaryConditionKeys">CreateDictionaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDictionary action. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.CreateFeedConditionKeys">CreateFeedConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFeed action. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDictionaryConditionKeys`<sup>Required</sup> <a name="CreateDictionaryConditionKeys" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.CreateDictionaryConditionKeys"></a>

```typescript
public readonly CreateDictionaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDictionary action.

---

##### `CreateFeedConditionKeys`<sup>Required</sup> <a name="CreateFeedConditionKeys" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.CreateFeedConditionKeys"></a>

```typescript
public readonly CreateFeedConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFeed action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.elemental_inference.ElementalInferenceConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ElementalInferenceOperations <a name="ElementalInferenceOperations" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations"></a>

API operation to required IAM actions mapping for elemental-inference.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.Initializer"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

new elemental_inference.ElementalInferenceOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.AssociateFeed">AssociateFeed</a></code> | <code>string[]</code> | IAM actions required for the AssociateFeed API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.CreateDictionary">CreateDictionary</a></code> | <code>string[]</code> | IAM actions required for the CreateDictionary API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.CreateFeed">CreateFeed</a></code> | <code>string[]</code> | IAM actions required for the CreateFeed API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.DeleteDictionary">DeleteDictionary</a></code> | <code>string[]</code> | IAM actions required for the DeleteDictionary API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.DeleteFeed">DeleteFeed</a></code> | <code>string[]</code> | IAM actions required for the DeleteFeed API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.DisassociateFeed">DisassociateFeed</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFeed API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.ExportDictionaryEntries">ExportDictionaryEntries</a></code> | <code>string[]</code> | IAM actions required for the ExportDictionaryEntries API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.ListDictionaries">ListDictionaries</a></code> | <code>string[]</code> | IAM actions required for the ListDictionaries API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.ListFeeds">ListFeeds</a></code> | <code>string[]</code> | IAM actions required for the ListFeeds API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.opGetDictionary">opGetDictionary</a></code> | <code>string[]</code> | IAM actions required for the GetDictionary API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.opGetFeed">opGetFeed</a></code> | <code>string[]</code> | IAM actions required for the GetFeed API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.SearchFixtures">SearchFixtures</a></code> | <code>string[]</code> | IAM actions required for the SearchFixtures API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.UpdateDictionary">UpdateDictionary</a></code> | <code>string[]</code> | IAM actions required for the UpdateDictionary API call. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.UpdateFeed">UpdateFeed</a></code> | <code>string[]</code> | IAM actions required for the UpdateFeed API call. |

---

##### `AssociateFeed`<sup>Required</sup> <a name="AssociateFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.AssociateFeed"></a>

```typescript
public readonly AssociateFeed: string[];
```

- *Type:* string[]

IAM actions required for the AssociateFeed API call.

---

##### `CreateDictionary`<sup>Required</sup> <a name="CreateDictionary" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.CreateDictionary"></a>

```typescript
public readonly CreateDictionary: string[];
```

- *Type:* string[]

IAM actions required for the CreateDictionary API call.

---

##### `CreateFeed`<sup>Required</sup> <a name="CreateFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.CreateFeed"></a>

```typescript
public readonly CreateFeed: string[];
```

- *Type:* string[]

IAM actions required for the CreateFeed API call.

---

##### `DeleteDictionary`<sup>Required</sup> <a name="DeleteDictionary" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.DeleteDictionary"></a>

```typescript
public readonly DeleteDictionary: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDictionary API call.

---

##### `DeleteFeed`<sup>Required</sup> <a name="DeleteFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.DeleteFeed"></a>

```typescript
public readonly DeleteFeed: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFeed API call.

---

##### `DisassociateFeed`<sup>Required</sup> <a name="DisassociateFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.DisassociateFeed"></a>

```typescript
public readonly DisassociateFeed: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFeed API call.

---

##### `ExportDictionaryEntries`<sup>Required</sup> <a name="ExportDictionaryEntries" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.ExportDictionaryEntries"></a>

```typescript
public readonly ExportDictionaryEntries: string[];
```

- *Type:* string[]

IAM actions required for the ExportDictionaryEntries API call.

---

##### `ListDictionaries`<sup>Required</sup> <a name="ListDictionaries" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.ListDictionaries"></a>

```typescript
public readonly ListDictionaries: string[];
```

- *Type:* string[]

IAM actions required for the ListDictionaries API call.

---

##### `ListFeeds`<sup>Required</sup> <a name="ListFeeds" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.ListFeeds"></a>

```typescript
public readonly ListFeeds: string[];
```

- *Type:* string[]

IAM actions required for the ListFeeds API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetDictionary`<sup>Required</sup> <a name="opGetDictionary" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.opGetDictionary"></a>

```typescript
public readonly opGetDictionary: string[];
```

- *Type:* string[]

IAM actions required for the GetDictionary API call.

---

##### `opGetFeed`<sup>Required</sup> <a name="opGetFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.opGetFeed"></a>

```typescript
public readonly opGetFeed: string[];
```

- *Type:* string[]

IAM actions required for the GetFeed API call.

---

##### `SearchFixtures`<sup>Required</sup> <a name="SearchFixtures" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.SearchFixtures"></a>

```typescript
public readonly SearchFixtures: string[];
```

- *Type:* string[]

IAM actions required for the SearchFixtures API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDictionary`<sup>Required</sup> <a name="UpdateDictionary" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.UpdateDictionary"></a>

```typescript
public readonly UpdateDictionary: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDictionary API call.

---

##### `UpdateFeed`<sup>Required</sup> <a name="UpdateFeed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceOperations.property.UpdateFeed"></a>

```typescript
public readonly UpdateFeed: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFeed API call.

---

### ElementalInferenceResources <a name="ElementalInferenceResources" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources"></a>

ARN builders, validators, and parsers for elemental-inference resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.Initializer"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

new elemental_inference.ElementalInferenceResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceResources.dictionary">dictionary</a></code> | Builds an ARN for the dictionary resource. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceResources.feed">feed</a></code> | Builds an ARN for the feed resource. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceResources.isValidDictionaryArn">isValidDictionaryArn</a></code> | Validates whether a string is a valid ARN for the dictionary resource. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceResources.isValidFeedArn">isValidFeedArn</a></code> | Validates whether a string is a valid ARN for the feed resource. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceResources.parseDictionaryArn">parseDictionaryArn</a></code> | Parses a dictionary ARN into its components. |
| <code><a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceResources.parseFeedArn">parseFeedArn</a></code> | Parses a feed ARN into its components. |

---

##### `dictionary` <a name="dictionary" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.dictionary"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

elemental_inference.ElementalInferenceResources.dictionary(props: ElementalInferenceDictionaryArnProps)
```

Builds an ARN for the dictionary resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.dictionary.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceDictionaryArnProps">ElementalInferenceDictionaryArnProps</a>

---

##### `feed` <a name="feed" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.feed"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

elemental_inference.ElementalInferenceResources.feed(props: ElementalInferenceFeedArnProps)
```

Builds an ARN for the feed resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.feed.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elemental_inference.ElementalInferenceFeedArnProps">ElementalInferenceFeedArnProps</a>

---

##### `isValidDictionaryArn` <a name="isValidDictionaryArn" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.isValidDictionaryArn"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

elemental_inference.ElementalInferenceResources.isValidDictionaryArn(arn: string)
```

Validates whether a string is a valid ARN for the dictionary resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.isValidDictionaryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFeedArn` <a name="isValidFeedArn" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.isValidFeedArn"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

elemental_inference.ElementalInferenceResources.isValidFeedArn(arn: string)
```

Validates whether a string is a valid ARN for the feed resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.isValidFeedArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDictionaryArn` <a name="parseDictionaryArn" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.parseDictionaryArn"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

elemental_inference.ElementalInferenceResources.parseDictionaryArn(arn: string)
```

Parses a dictionary ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.parseDictionaryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFeedArn` <a name="parseFeedArn" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.parseFeedArn"></a>

```typescript
import { elemental_inference } from '@cdk_utils/iam'

elemental_inference.ElementalInferenceResources.parseFeedArn(arn: string)
```

Parses a feed ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elemental_inference.ElementalInferenceResources.parseFeedArn.parameter.arn"></a>

- *Type:* string

---




