# `backup_search` Submodule <a name="`backup_search` Submodule" id="@cdk_utils/iam.backup_search"></a>


## Structs <a name="Structs" id="Structs"></a>

### BackupSearchSearchExportJobArnComponents <a name="BackupSearchSearchExportJobArnComponents" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnComponents"></a>

Parsed components of a searchExportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnComponents.Initializer"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

const backupSearchSearchExportJobArnComponents: backup_search.BackupSearchSearchExportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BackupSearchSearchExportJobArnProps <a name="BackupSearchSearchExportJobArnProps" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnProps"></a>

Properties for building a searchExportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnProps.Initializer"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

const backupSearchSearchExportJobArnProps: backup_search.BackupSearchSearchExportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BackupSearchSearchJobArnComponents <a name="BackupSearchSearchJobArnComponents" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnComponents"></a>

Parsed components of a searchJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnComponents.Initializer"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

const backupSearchSearchJobArnComponents: backup_search.BackupSearchSearchJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BackupSearchSearchJobArnProps <a name="BackupSearchSearchJobArnProps" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnProps"></a>

Properties for building a searchJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnProps.Initializer"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

const backupSearchSearchJobArnProps: backup_search.BackupSearchSearchJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchSearchJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup_search.BackupSearchSearchJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### BackupSearchActions <a name="BackupSearchActions" id="@cdk_utils/iam.backup_search.BackupSearchActions"></a>

IAM action constants for the backup-search service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup_search.BackupSearchActions.Initializer"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

new backup_search.BackupSearchActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.actionGetSearchJob">actionGetSearchJob</a></code> | <code>string</code> | [Read] backup-search:GetSearchJob. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.actionGetSearchResultExportJob">actionGetSearchResultExportJob</a></code> | <code>string</code> | [Read] backup-search:GetSearchResultExportJob. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.ListSearchJobBackups">ListSearchJobBackups</a></code> | <code>string</code> | [Read] backup-search:ListSearchJobBackups. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.ListSearchJobResults">ListSearchJobResults</a></code> | <code>string</code> | [Read] backup-search:ListSearchJobResults. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.ListSearchJobs">ListSearchJobs</a></code> | <code>string</code> | [List] backup-search:ListSearchJobs. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.ListSearchResultExportJobs">ListSearchResultExportJobs</a></code> | <code>string</code> | [List] backup-search:ListSearchResultExportJobs. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] backup-search:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.StartSearchJob">StartSearchJob</a></code> | <code>string</code> | [Write] backup-search:StartSearchJob. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.StartSearchResultExportJob">StartSearchResultExportJob</a></code> | <code>string</code> | [Write] backup-search:StartSearchResultExportJob. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.StopSearchJob">StopSearchJob</a></code> | <code>string</code> | [Write] backup-search:StopSearchJob. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] backup-search:TagResource. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] backup-search:UntagResource. |

---

##### `actionGetSearchJob`<sup>Required</sup> <a name="actionGetSearchJob" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.actionGetSearchJob"></a>

```typescript
public readonly actionGetSearchJob: string;
```

- *Type:* string

[Read] backup-search:GetSearchJob.

---

##### `actionGetSearchResultExportJob`<sup>Required</sup> <a name="actionGetSearchResultExportJob" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.actionGetSearchResultExportJob"></a>

```typescript
public readonly actionGetSearchResultExportJob: string;
```

- *Type:* string

[Read] backup-search:GetSearchResultExportJob.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ListSearchJobBackups`<sup>Required</sup> <a name="ListSearchJobBackups" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.ListSearchJobBackups"></a>

```typescript
public readonly ListSearchJobBackups: string;
```

- *Type:* string

[Read] backup-search:ListSearchJobBackups.

---

##### `ListSearchJobResults`<sup>Required</sup> <a name="ListSearchJobResults" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.ListSearchJobResults"></a>

```typescript
public readonly ListSearchJobResults: string;
```

- *Type:* string

[Read] backup-search:ListSearchJobResults.

---

##### `ListSearchJobs`<sup>Required</sup> <a name="ListSearchJobs" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.ListSearchJobs"></a>

```typescript
public readonly ListSearchJobs: string;
```

- *Type:* string

[List] backup-search:ListSearchJobs.

---

##### `ListSearchResultExportJobs`<sup>Required</sup> <a name="ListSearchResultExportJobs" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.ListSearchResultExportJobs"></a>

```typescript
public readonly ListSearchResultExportJobs: string;
```

- *Type:* string

[List] backup-search:ListSearchResultExportJobs.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] backup-search:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartSearchJob`<sup>Required</sup> <a name="StartSearchJob" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.StartSearchJob"></a>

```typescript
public readonly StartSearchJob: string;
```

- *Type:* string

[Write] backup-search:StartSearchJob.

---

##### `StartSearchResultExportJob`<sup>Required</sup> <a name="StartSearchResultExportJob" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.StartSearchResultExportJob"></a>

```typescript
public readonly StartSearchResultExportJob: string;
```

- *Type:* string

[Write] backup-search:StartSearchResultExportJob.

---

##### `StopSearchJob`<sup>Required</sup> <a name="StopSearchJob" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.StopSearchJob"></a>

```typescript
public readonly StopSearchJob: string;
```

- *Type:* string

[Write] backup-search:StopSearchJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] backup-search:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.backup_search.BackupSearchActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] backup-search:UntagResource.

---

### BackupSearchConditions <a name="BackupSearchConditions" id="@cdk_utils/iam.backup_search.BackupSearchConditions"></a>

Condition key constants and builders for backup-search.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup_search.BackupSearchConditions.Initializer"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

new backup_search.BackupSearchConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.backup_search.BackupSearchConditions.requestTag"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

backup_search.BackupSearchConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.backup_search.BackupSearchConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.backup_search.BackupSearchConditions.resourceTag"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

backup_search.BackupSearchConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.backup_search.BackupSearchConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.backup_search.BackupSearchConditions.tagKeys"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

backup_search.BackupSearchConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.backup_search.BackupSearchConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchConditions.property.StartSearchJobConditionKeys">StartSearchJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSearchJob action. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchConditions.property.StartSearchResultExportJobConditionKeys">StartSearchResultExportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSearchResultExportJob action. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.backup_search.BackupSearchConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.backup_search.BackupSearchConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.backup_search.BackupSearchConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `StartSearchJobConditionKeys`<sup>Required</sup> <a name="StartSearchJobConditionKeys" id="@cdk_utils/iam.backup_search.BackupSearchConditions.property.StartSearchJobConditionKeys"></a>

```typescript
public readonly StartSearchJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSearchJob action.

---

##### `StartSearchResultExportJobConditionKeys`<sup>Required</sup> <a name="StartSearchResultExportJobConditionKeys" id="@cdk_utils/iam.backup_search.BackupSearchConditions.property.StartSearchResultExportJobConditionKeys"></a>

```typescript
public readonly StartSearchResultExportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSearchResultExportJob action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.backup_search.BackupSearchConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.backup_search.BackupSearchConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### BackupSearchOperations <a name="BackupSearchOperations" id="@cdk_utils/iam.backup_search.BackupSearchOperations"></a>

API operation to required IAM actions mapping for backup-search.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup_search.BackupSearchOperations.Initializer"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

new backup_search.BackupSearchOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.ListSearchJobBackups">ListSearchJobBackups</a></code> | <code>string[]</code> | IAM actions required for the ListSearchJobBackups API call. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.ListSearchJobResults">ListSearchJobResults</a></code> | <code>string[]</code> | IAM actions required for the ListSearchJobResults API call. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.ListSearchJobs">ListSearchJobs</a></code> | <code>string[]</code> | IAM actions required for the ListSearchJobs API call. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.ListSearchResultExportJobs">ListSearchResultExportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListSearchResultExportJobs API call. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.opGetSearchJob">opGetSearchJob</a></code> | <code>string[]</code> | IAM actions required for the GetSearchJob API call. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.opGetSearchResultExportJob">opGetSearchResultExportJob</a></code> | <code>string[]</code> | IAM actions required for the GetSearchResultExportJob API call. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.StartSearchJob">StartSearchJob</a></code> | <code>string[]</code> | IAM actions required for the StartSearchJob API call. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.StartSearchResultExportJob">StartSearchResultExportJob</a></code> | <code>string[]</code> | IAM actions required for the StartSearchResultExportJob API call. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.StopSearchJob">StopSearchJob</a></code> | <code>string[]</code> | IAM actions required for the StopSearchJob API call. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `ListSearchJobBackups`<sup>Required</sup> <a name="ListSearchJobBackups" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.ListSearchJobBackups"></a>

```typescript
public readonly ListSearchJobBackups: string[];
```

- *Type:* string[]

IAM actions required for the ListSearchJobBackups API call.

---

##### `ListSearchJobResults`<sup>Required</sup> <a name="ListSearchJobResults" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.ListSearchJobResults"></a>

```typescript
public readonly ListSearchJobResults: string[];
```

- *Type:* string[]

IAM actions required for the ListSearchJobResults API call.

---

##### `ListSearchJobs`<sup>Required</sup> <a name="ListSearchJobs" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.ListSearchJobs"></a>

```typescript
public readonly ListSearchJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListSearchJobs API call.

---

##### `ListSearchResultExportJobs`<sup>Required</sup> <a name="ListSearchResultExportJobs" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.ListSearchResultExportJobs"></a>

```typescript
public readonly ListSearchResultExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListSearchResultExportJobs API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetSearchJob`<sup>Required</sup> <a name="opGetSearchJob" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.opGetSearchJob"></a>

```typescript
public readonly opGetSearchJob: string[];
```

- *Type:* string[]

IAM actions required for the GetSearchJob API call.

---

##### `opGetSearchResultExportJob`<sup>Required</sup> <a name="opGetSearchResultExportJob" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.opGetSearchResultExportJob"></a>

```typescript
public readonly opGetSearchResultExportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetSearchResultExportJob API call.

---

##### `StartSearchJob`<sup>Required</sup> <a name="StartSearchJob" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.StartSearchJob"></a>

```typescript
public readonly StartSearchJob: string[];
```

- *Type:* string[]

IAM actions required for the StartSearchJob API call.

---

##### `StartSearchResultExportJob`<sup>Required</sup> <a name="StartSearchResultExportJob" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.StartSearchResultExportJob"></a>

```typescript
public readonly StartSearchResultExportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartSearchResultExportJob API call.

---

##### `StopSearchJob`<sup>Required</sup> <a name="StopSearchJob" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.StopSearchJob"></a>

```typescript
public readonly StopSearchJob: string[];
```

- *Type:* string[]

IAM actions required for the StopSearchJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.backup_search.BackupSearchOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### BackupSearchResources <a name="BackupSearchResources" id="@cdk_utils/iam.backup_search.BackupSearchResources"></a>

ARN builders, validators, and parsers for backup-search resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup_search.BackupSearchResources.Initializer"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

new backup_search.BackupSearchResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchResources.isValidSearchExportJobArn">isValidSearchExportJobArn</a></code> | Validates whether a string is a valid ARN for the searchExportJob resource. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchResources.isValidSearchJobArn">isValidSearchJobArn</a></code> | Validates whether a string is a valid ARN for the searchJob resource. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchResources.parseSearchExportJobArn">parseSearchExportJobArn</a></code> | Parses a searchExportJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchResources.parseSearchJobArn">parseSearchJobArn</a></code> | Parses a searchJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchResources.searchExportJob">searchExportJob</a></code> | Builds an ARN for the searchExportJob resource. |
| <code><a href="#@cdk_utils/iam.backup_search.BackupSearchResources.searchJob">searchJob</a></code> | Builds an ARN for the searchJob resource. |

---

##### `isValidSearchExportJobArn` <a name="isValidSearchExportJobArn" id="@cdk_utils/iam.backup_search.BackupSearchResources.isValidSearchExportJobArn"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

backup_search.BackupSearchResources.isValidSearchExportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the searchExportJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup_search.BackupSearchResources.isValidSearchExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSearchJobArn` <a name="isValidSearchJobArn" id="@cdk_utils/iam.backup_search.BackupSearchResources.isValidSearchJobArn"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

backup_search.BackupSearchResources.isValidSearchJobArn(arn: string)
```

Validates whether a string is a valid ARN for the searchJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup_search.BackupSearchResources.isValidSearchJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSearchExportJobArn` <a name="parseSearchExportJobArn" id="@cdk_utils/iam.backup_search.BackupSearchResources.parseSearchExportJobArn"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

backup_search.BackupSearchResources.parseSearchExportJobArn(arn: string)
```

Parses a searchExportJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup_search.BackupSearchResources.parseSearchExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSearchJobArn` <a name="parseSearchJobArn" id="@cdk_utils/iam.backup_search.BackupSearchResources.parseSearchJobArn"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

backup_search.BackupSearchResources.parseSearchJobArn(arn: string)
```

Parses a searchJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup_search.BackupSearchResources.parseSearchJobArn.parameter.arn"></a>

- *Type:* string

---

##### `searchExportJob` <a name="searchExportJob" id="@cdk_utils/iam.backup_search.BackupSearchResources.searchExportJob"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

backup_search.BackupSearchResources.searchExportJob(props: BackupSearchSearchExportJobArnProps)
```

Builds an ARN for the searchExportJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup_search.BackupSearchResources.searchExportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup_search.BackupSearchSearchExportJobArnProps">BackupSearchSearchExportJobArnProps</a>

---

##### `searchJob` <a name="searchJob" id="@cdk_utils/iam.backup_search.BackupSearchResources.searchJob"></a>

```typescript
import { backup_search } from '@cdk_utils/iam'

backup_search.BackupSearchResources.searchJob(props: BackupSearchSearchJobArnProps)
```

Builds an ARN for the searchJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup_search.BackupSearchResources.searchJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup_search.BackupSearchSearchJobArnProps">BackupSearchSearchJobArnProps</a>

---




