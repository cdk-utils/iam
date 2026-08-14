# `workspaces_instances` Submodule <a name="`workspaces_instances` Submodule" id="@cdk_utils/iam.workspaces_instances"></a>


## Structs <a name="Structs" id="Structs"></a>

### WorkspacesInstancesVolumeIdArnComponents <a name="WorkspacesInstancesVolumeIdArnComponents" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnComponents"></a>

Parsed components of a VolumeId ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnComponents.Initializer"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

const workspacesInstancesVolumeIdArnComponents: workspaces_instances.WorkspacesInstancesVolumeIdArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnComponents.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnComponents.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component.

---

### WorkspacesInstancesVolumeIdArnProps <a name="WorkspacesInstancesVolumeIdArnProps" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnProps"></a>

Properties for building a VolumeId ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnProps.Initializer"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

const workspacesInstancesVolumeIdArnProps: workspaces_instances.WorkspacesInstancesVolumeIdArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnProps.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnProps.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WorkspacesInstancesWorkspaceInstanceIdArnComponents <a name="WorkspacesInstancesWorkspaceInstanceIdArnComponents" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnComponents"></a>

Parsed components of a WorkspaceInstanceId ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnComponents.Initializer"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

const workspacesInstancesWorkspaceInstanceIdArnComponents: workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnComponents.property.workspaceInstanceId">workspaceInstanceId</a></code> | <code>string</code> | The WorkspaceInstanceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceInstanceId`<sup>Required</sup> <a name="workspaceInstanceId" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnComponents.property.workspaceInstanceId"></a>

```typescript
public readonly workspaceInstanceId: string;
```

- *Type:* string

The WorkspaceInstanceId component.

---

### WorkspacesInstancesWorkspaceInstanceIdArnProps <a name="WorkspacesInstancesWorkspaceInstanceIdArnProps" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps"></a>

Properties for building a WorkspaceInstanceId ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps.Initializer"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

const workspacesInstancesWorkspaceInstanceIdArnProps: workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps.property.workspaceInstanceId">workspaceInstanceId</a></code> | <code>string</code> | The WorkspaceInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workspaceInstanceId`<sup>Required</sup> <a name="workspaceInstanceId" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps.property.workspaceInstanceId"></a>

```typescript
public readonly workspaceInstanceId: string;
```

- *Type:* string

The WorkspaceInstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesInstancesActions <a name="WorkspacesInstancesActions" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions"></a>

IAM action constants for the workspaces-instances service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.Initializer"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

new workspaces_instances.WorkspacesInstancesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.actionGetWorkspaceInstance">actionGetWorkspaceInstance</a></code> | <code>string</code> | [Read] workspaces-instances:GetWorkspaceInstance. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AssociateVolume">AssociateVolume</a></code> | <code>string</code> | [Write] workspaces-instances:AssociateVolume. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.CreateVolume">CreateVolume</a></code> | <code>string</code> | [Write] workspaces-instances:CreateVolume. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.CreateWorkspaceInstance">CreateWorkspaceInstance</a></code> | <code>string</code> | [Write] workspaces-instances:CreateWorkspaceInstance. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.DeleteVolume">DeleteVolume</a></code> | <code>string</code> | [Write] workspaces-instances:DeleteVolume. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.DeleteWorkspaceInstance">DeleteWorkspaceInstance</a></code> | <code>string</code> | [Write] workspaces-instances:DeleteWorkspaceInstance. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.DisassociateVolume">DisassociateVolume</a></code> | <code>string</code> | [Write] workspaces-instances:DisassociateVolume. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.ListInstanceTypes">ListInstanceTypes</a></code> | <code>string</code> | [List] workspaces-instances:ListInstanceTypes. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.ListRegions">ListRegions</a></code> | <code>string</code> | [List] workspaces-instances:ListRegions. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] workspaces-instances:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.ListWorkspaceInstances">ListWorkspaceInstances</a></code> | <code>string</code> | [List] workspaces-instances:ListWorkspaceInstances. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] workspaces-instances:TagResource. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] workspaces-instances:UntagResource. |

---

##### `actionGetWorkspaceInstance`<sup>Required</sup> <a name="actionGetWorkspaceInstance" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.actionGetWorkspaceInstance"></a>

```typescript
public readonly actionGetWorkspaceInstance: string;
```

- *Type:* string

[Read] workspaces-instances:GetWorkspaceInstance.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateVolume`<sup>Required</sup> <a name="AssociateVolume" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.AssociateVolume"></a>

```typescript
public readonly AssociateVolume: string;
```

- *Type:* string

[Write] workspaces-instances:AssociateVolume.

---

##### `CreateVolume`<sup>Required</sup> <a name="CreateVolume" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.CreateVolume"></a>

```typescript
public readonly CreateVolume: string;
```

- *Type:* string

[Write] workspaces-instances:CreateVolume.

---

##### `CreateWorkspaceInstance`<sup>Required</sup> <a name="CreateWorkspaceInstance" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.CreateWorkspaceInstance"></a>

```typescript
public readonly CreateWorkspaceInstance: string;
```

- *Type:* string

[Write] workspaces-instances:CreateWorkspaceInstance.

---

##### `DeleteVolume`<sup>Required</sup> <a name="DeleteVolume" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.DeleteVolume"></a>

```typescript
public readonly DeleteVolume: string;
```

- *Type:* string

[Write] workspaces-instances:DeleteVolume.

---

##### `DeleteWorkspaceInstance`<sup>Required</sup> <a name="DeleteWorkspaceInstance" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.DeleteWorkspaceInstance"></a>

```typescript
public readonly DeleteWorkspaceInstance: string;
```

- *Type:* string

[Write] workspaces-instances:DeleteWorkspaceInstance.

---

##### `DisassociateVolume`<sup>Required</sup> <a name="DisassociateVolume" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.DisassociateVolume"></a>

```typescript
public readonly DisassociateVolume: string;
```

- *Type:* string

[Write] workspaces-instances:DisassociateVolume.

---

##### `ListInstanceTypes`<sup>Required</sup> <a name="ListInstanceTypes" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.ListInstanceTypes"></a>

```typescript
public readonly ListInstanceTypes: string;
```

- *Type:* string

[List] workspaces-instances:ListInstanceTypes.

---

##### `ListRegions`<sup>Required</sup> <a name="ListRegions" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.ListRegions"></a>

```typescript
public readonly ListRegions: string;
```

- *Type:* string

[List] workspaces-instances:ListRegions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] workspaces-instances:ListTagsForResource.

---

##### `ListWorkspaceInstances`<sup>Required</sup> <a name="ListWorkspaceInstances" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.ListWorkspaceInstances"></a>

```typescript
public readonly ListWorkspaceInstances: string;
```

- *Type:* string

[List] workspaces-instances:ListWorkspaceInstances.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] workspaces-instances:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] workspaces-instances:UntagResource.

---

### WorkspacesInstancesConditions <a name="WorkspacesInstancesConditions" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions"></a>

Condition key constants and builders for workspaces-instances.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.Initializer"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

new workspaces_instances.WorkspacesInstancesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.requestTag"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

workspaces_instances.WorkspacesInstancesConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.resourceTag"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

workspaces_instances.WorkspacesInstancesConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.tagKeys"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

workspaces_instances.WorkspacesInstancesConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.CreateWorkspaceInstanceConditionKeys">CreateWorkspaceInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkspaceInstance action. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateWorkspaceInstanceConditionKeys`<sup>Required</sup> <a name="CreateWorkspaceInstanceConditionKeys" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.CreateWorkspaceInstanceConditionKeys"></a>

```typescript
public readonly CreateWorkspaceInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkspaceInstance action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### WorkspacesInstancesOperations <a name="WorkspacesInstancesOperations" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations"></a>

API operation to required IAM actions mapping for workspaces-instances.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.Initializer"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

new workspaces_instances.WorkspacesInstancesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.AssociateVolume">AssociateVolume</a></code> | <code>string[]</code> | IAM actions required for the AssociateVolume API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.CreateVolume">CreateVolume</a></code> | <code>string[]</code> | IAM actions required for the CreateVolume API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.CreateWorkspaceInstance">CreateWorkspaceInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspaceInstance API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.DeleteVolume">DeleteVolume</a></code> | <code>string[]</code> | IAM actions required for the DeleteVolume API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.DeleteWorkspaceInstance">DeleteWorkspaceInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspaceInstance API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.DisassociateVolume">DisassociateVolume</a></code> | <code>string[]</code> | IAM actions required for the DisassociateVolume API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.ListInstanceTypes">ListInstanceTypes</a></code> | <code>string[]</code> | IAM actions required for the ListInstanceTypes API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.ListRegions">ListRegions</a></code> | <code>string[]</code> | IAM actions required for the ListRegions API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.ListWorkspaceInstances">ListWorkspaceInstances</a></code> | <code>string[]</code> | IAM actions required for the ListWorkspaceInstances API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.opGetWorkspaceInstance">opGetWorkspaceInstance</a></code> | <code>string[]</code> | IAM actions required for the GetWorkspaceInstance API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `AssociateVolume`<sup>Required</sup> <a name="AssociateVolume" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.AssociateVolume"></a>

```typescript
public readonly AssociateVolume: string[];
```

- *Type:* string[]

IAM actions required for the AssociateVolume API call.

---

##### `CreateVolume`<sup>Required</sup> <a name="CreateVolume" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.CreateVolume"></a>

```typescript
public readonly CreateVolume: string[];
```

- *Type:* string[]

IAM actions required for the CreateVolume API call.

---

##### `CreateWorkspaceInstance`<sup>Required</sup> <a name="CreateWorkspaceInstance" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.CreateWorkspaceInstance"></a>

```typescript
public readonly CreateWorkspaceInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspaceInstance API call.

---

##### `DeleteVolume`<sup>Required</sup> <a name="DeleteVolume" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.DeleteVolume"></a>

```typescript
public readonly DeleteVolume: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVolume API call.

---

##### `DeleteWorkspaceInstance`<sup>Required</sup> <a name="DeleteWorkspaceInstance" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.DeleteWorkspaceInstance"></a>

```typescript
public readonly DeleteWorkspaceInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspaceInstance API call.

---

##### `DisassociateVolume`<sup>Required</sup> <a name="DisassociateVolume" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.DisassociateVolume"></a>

```typescript
public readonly DisassociateVolume: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateVolume API call.

---

##### `ListInstanceTypes`<sup>Required</sup> <a name="ListInstanceTypes" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.ListInstanceTypes"></a>

```typescript
public readonly ListInstanceTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListInstanceTypes API call.

---

##### `ListRegions`<sup>Required</sup> <a name="ListRegions" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.ListRegions"></a>

```typescript
public readonly ListRegions: string[];
```

- *Type:* string[]

IAM actions required for the ListRegions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWorkspaceInstances`<sup>Required</sup> <a name="ListWorkspaceInstances" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.ListWorkspaceInstances"></a>

```typescript
public readonly ListWorkspaceInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkspaceInstances API call.

---

##### `opGetWorkspaceInstance`<sup>Required</sup> <a name="opGetWorkspaceInstance" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.opGetWorkspaceInstance"></a>

```typescript
public readonly opGetWorkspaceInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkspaceInstance API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### WorkspacesInstancesResources <a name="WorkspacesInstancesResources" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources"></a>

ARN builders, validators, and parsers for workspaces-instances resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.Initializer"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

new workspaces_instances.WorkspacesInstancesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.isValidVolumeIdArn">isValidVolumeIdArn</a></code> | Validates whether a string is a valid ARN for the VolumeId resource. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.isValidWorkspaceInstanceIdArn">isValidWorkspaceInstanceIdArn</a></code> | Validates whether a string is a valid ARN for the WorkspaceInstanceId resource. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.parseVolumeIdArn">parseVolumeIdArn</a></code> | Parses a VolumeId ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.parseWorkspaceInstanceIdArn">parseWorkspaceInstanceIdArn</a></code> | Parses a WorkspaceInstanceId ARN into its components. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.volumeId">volumeId</a></code> | Builds an ARN for the VolumeId resource. |
| <code><a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.workspaceInstanceId">workspaceInstanceId</a></code> | Builds an ARN for the WorkspaceInstanceId resource. |

---

##### `isValidVolumeIdArn` <a name="isValidVolumeIdArn" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.isValidVolumeIdArn"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

workspaces_instances.WorkspacesInstancesResources.isValidVolumeIdArn(arn: string)
```

Validates whether a string is a valid ARN for the VolumeId resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.isValidVolumeIdArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkspaceInstanceIdArn` <a name="isValidWorkspaceInstanceIdArn" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.isValidWorkspaceInstanceIdArn"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

workspaces_instances.WorkspacesInstancesResources.isValidWorkspaceInstanceIdArn(arn: string)
```

Validates whether a string is a valid ARN for the WorkspaceInstanceId resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.isValidWorkspaceInstanceIdArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVolumeIdArn` <a name="parseVolumeIdArn" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.parseVolumeIdArn"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

workspaces_instances.WorkspacesInstancesResources.parseVolumeIdArn(arn: string)
```

Parses a VolumeId ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.parseVolumeIdArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspaceInstanceIdArn` <a name="parseWorkspaceInstanceIdArn" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.parseWorkspaceInstanceIdArn"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

workspaces_instances.WorkspacesInstancesResources.parseWorkspaceInstanceIdArn(arn: string)
```

Parses a WorkspaceInstanceId ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.parseWorkspaceInstanceIdArn.parameter.arn"></a>

- *Type:* string

---

##### `volumeId` <a name="volumeId" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.volumeId"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

workspaces_instances.WorkspacesInstancesResources.volumeId(props: WorkspacesInstancesVolumeIdArnProps)
```

Builds an ARN for the VolumeId resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.volumeId.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesVolumeIdArnProps">WorkspacesInstancesVolumeIdArnProps</a>

---

##### `workspaceInstanceId` <a name="workspaceInstanceId" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.workspaceInstanceId"></a>

```typescript
import { workspaces_instances } from '@cdk_utils/iam'

workspaces_instances.WorkspacesInstancesResources.workspaceInstanceId(props: WorkspacesInstancesWorkspaceInstanceIdArnProps)
```

Builds an ARN for the WorkspaceInstanceId resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.workspaces_instances.WorkspacesInstancesResources.workspaceInstanceId.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.workspaces_instances.WorkspacesInstancesWorkspaceInstanceIdArnProps">WorkspacesInstancesWorkspaceInstanceIdArnProps</a>

---




