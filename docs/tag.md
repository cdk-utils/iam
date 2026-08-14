# `tag` Submodule <a name="`tag` Submodule" id="@cdk_utils/iam.tag"></a>



## Classes <a name="Classes" id="Classes"></a>

### TagActions <a name="TagActions" id="@cdk_utils/iam.tag.TagActions"></a>

IAM action constants for the tag service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.tag.TagActions.Initializer"></a>

```typescript
import { tag } from '@cdk_utils/iam'

new tag.TagActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.actionGetComplianceSummary">actionGetComplianceSummary</a></code> | <code>string</code> | [Read] tag:GetComplianceSummary. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.actionGetResources">actionGetResources</a></code> | <code>string</code> | [Read] tag:GetResources. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.actionGetTagKeys">actionGetTagKeys</a></code> | <code>string</code> | [Read] tag:GetTagKeys. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.actionGetTagValues">actionGetTagValues</a></code> | <code>string</code> | [Read] tag:GetTagValues. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.DescribeReportCreation">DescribeReportCreation</a></code> | <code>string</code> | [Read] tag:DescribeReportCreation. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.ListRequiredTags">ListRequiredTags</a></code> | <code>string</code> | [List] tag:ListRequiredTags. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.StartReportCreation">StartReportCreation</a></code> | <code>string</code> | [Write] tag:StartReportCreation. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.TagResources">TagResources</a></code> | <code>string</code> | [Tagging] tag:TagResources. |
| <code><a href="#@cdk_utils/iam.tag.TagActions.property.UntagResources">UntagResources</a></code> | <code>string</code> | [Tagging] tag:UntagResources. |

---

##### `actionGetComplianceSummary`<sup>Required</sup> <a name="actionGetComplianceSummary" id="@cdk_utils/iam.tag.TagActions.property.actionGetComplianceSummary"></a>

```typescript
public readonly actionGetComplianceSummary: string;
```

- *Type:* string

[Read] tag:GetComplianceSummary.

---

##### `actionGetResources`<sup>Required</sup> <a name="actionGetResources" id="@cdk_utils/iam.tag.TagActions.property.actionGetResources"></a>

```typescript
public readonly actionGetResources: string;
```

- *Type:* string

[Read] tag:GetResources.

---

##### `actionGetTagKeys`<sup>Required</sup> <a name="actionGetTagKeys" id="@cdk_utils/iam.tag.TagActions.property.actionGetTagKeys"></a>

```typescript
public readonly actionGetTagKeys: string;
```

- *Type:* string

[Read] tag:GetTagKeys.

---

##### `actionGetTagValues`<sup>Required</sup> <a name="actionGetTagValues" id="@cdk_utils/iam.tag.TagActions.property.actionGetTagValues"></a>

```typescript
public readonly actionGetTagValues: string;
```

- *Type:* string

[Read] tag:GetTagValues.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.tag.TagActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.tag.TagActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.tag.TagActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.tag.TagActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.tag.TagActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DescribeReportCreation`<sup>Required</sup> <a name="DescribeReportCreation" id="@cdk_utils/iam.tag.TagActions.property.DescribeReportCreation"></a>

```typescript
public readonly DescribeReportCreation: string;
```

- *Type:* string

[Read] tag:DescribeReportCreation.

---

##### `ListRequiredTags`<sup>Required</sup> <a name="ListRequiredTags" id="@cdk_utils/iam.tag.TagActions.property.ListRequiredTags"></a>

```typescript
public readonly ListRequiredTags: string;
```

- *Type:* string

[List] tag:ListRequiredTags.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.tag.TagActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartReportCreation`<sup>Required</sup> <a name="StartReportCreation" id="@cdk_utils/iam.tag.TagActions.property.StartReportCreation"></a>

```typescript
public readonly StartReportCreation: string;
```

- *Type:* string

[Write] tag:StartReportCreation.

---

##### `TagResources`<sup>Required</sup> <a name="TagResources" id="@cdk_utils/iam.tag.TagActions.property.TagResources"></a>

```typescript
public readonly TagResources: string;
```

- *Type:* string

[Tagging] tag:TagResources.

---

##### `UntagResources`<sup>Required</sup> <a name="UntagResources" id="@cdk_utils/iam.tag.TagActions.property.UntagResources"></a>

```typescript
public readonly UntagResources: string;
```

- *Type:* string

[Tagging] tag:UntagResources.

---

### TagOperations <a name="TagOperations" id="@cdk_utils/iam.tag.TagOperations"></a>

API operation to required IAM actions mapping for tag.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.tag.TagOperations.Initializer"></a>

```typescript
import { tag } from '@cdk_utils/iam'

new tag.TagOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tag.TagOperations.property.DescribeReportCreation">DescribeReportCreation</a></code> | <code>string[]</code> | IAM actions required for the DescribeReportCreation API call. |
| <code><a href="#@cdk_utils/iam.tag.TagOperations.property.ListRequiredTags">ListRequiredTags</a></code> | <code>string[]</code> | IAM actions required for the ListRequiredTags API call. |
| <code><a href="#@cdk_utils/iam.tag.TagOperations.property.opGetComplianceSummary">opGetComplianceSummary</a></code> | <code>string[]</code> | IAM actions required for the GetComplianceSummary API call. |
| <code><a href="#@cdk_utils/iam.tag.TagOperations.property.opGetResources">opGetResources</a></code> | <code>string[]</code> | IAM actions required for the GetResources API call. |
| <code><a href="#@cdk_utils/iam.tag.TagOperations.property.opGetTagKeys">opGetTagKeys</a></code> | <code>string[]</code> | IAM actions required for the GetTagKeys API call. |
| <code><a href="#@cdk_utils/iam.tag.TagOperations.property.opGetTagValues">opGetTagValues</a></code> | <code>string[]</code> | IAM actions required for the GetTagValues API call. |
| <code><a href="#@cdk_utils/iam.tag.TagOperations.property.StartReportCreation">StartReportCreation</a></code> | <code>string[]</code> | IAM actions required for the StartReportCreation API call. |
| <code><a href="#@cdk_utils/iam.tag.TagOperations.property.TagResources">TagResources</a></code> | <code>string[]</code> | IAM actions required for the TagResources API call. |
| <code><a href="#@cdk_utils/iam.tag.TagOperations.property.UntagResources">UntagResources</a></code> | <code>string[]</code> | IAM actions required for the UntagResources API call. |

---

##### `DescribeReportCreation`<sup>Required</sup> <a name="DescribeReportCreation" id="@cdk_utils/iam.tag.TagOperations.property.DescribeReportCreation"></a>

```typescript
public readonly DescribeReportCreation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReportCreation API call.

---

##### `ListRequiredTags`<sup>Required</sup> <a name="ListRequiredTags" id="@cdk_utils/iam.tag.TagOperations.property.ListRequiredTags"></a>

```typescript
public readonly ListRequiredTags: string[];
```

- *Type:* string[]

IAM actions required for the ListRequiredTags API call.

---

##### `opGetComplianceSummary`<sup>Required</sup> <a name="opGetComplianceSummary" id="@cdk_utils/iam.tag.TagOperations.property.opGetComplianceSummary"></a>

```typescript
public readonly opGetComplianceSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetComplianceSummary API call.

---

##### `opGetResources`<sup>Required</sup> <a name="opGetResources" id="@cdk_utils/iam.tag.TagOperations.property.opGetResources"></a>

```typescript
public readonly opGetResources: string[];
```

- *Type:* string[]

IAM actions required for the GetResources API call.

---

##### `opGetTagKeys`<sup>Required</sup> <a name="opGetTagKeys" id="@cdk_utils/iam.tag.TagOperations.property.opGetTagKeys"></a>

```typescript
public readonly opGetTagKeys: string[];
```

- *Type:* string[]

IAM actions required for the GetTagKeys API call.

---

##### `opGetTagValues`<sup>Required</sup> <a name="opGetTagValues" id="@cdk_utils/iam.tag.TagOperations.property.opGetTagValues"></a>

```typescript
public readonly opGetTagValues: string[];
```

- *Type:* string[]

IAM actions required for the GetTagValues API call.

---

##### `StartReportCreation`<sup>Required</sup> <a name="StartReportCreation" id="@cdk_utils/iam.tag.TagOperations.property.StartReportCreation"></a>

```typescript
public readonly StartReportCreation: string[];
```

- *Type:* string[]

IAM actions required for the StartReportCreation API call.

---

##### `TagResources`<sup>Required</sup> <a name="TagResources" id="@cdk_utils/iam.tag.TagOperations.property.TagResources"></a>

```typescript
public readonly TagResources: string[];
```

- *Type:* string[]

IAM actions required for the TagResources API call.

---

##### `UntagResources`<sup>Required</sup> <a name="UntagResources" id="@cdk_utils/iam.tag.TagOperations.property.UntagResources"></a>

```typescript
public readonly UntagResources: string[];
```

- *Type:* string[]

IAM actions required for the UntagResources API call.

---


