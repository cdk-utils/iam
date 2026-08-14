# `synthetics` Submodule <a name="`synthetics` Submodule" id="@cdk_utils/iam.synthetics"></a>


## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCanaryArnComponents <a name="SyntheticsCanaryArnComponents" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnComponents"></a>

Parsed components of a canary ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnComponents.Initializer"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

const syntheticsCanaryArnComponents: synthetics.SyntheticsCanaryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsCanaryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsCanaryArnComponents.property.canaryName">canaryName</a></code> | <code>string</code> | The CanaryName component. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsCanaryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsCanaryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `canaryName`<sup>Required</sup> <a name="canaryName" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnComponents.property.canaryName"></a>

```typescript
public readonly canaryName: string;
```

- *Type:* string

The CanaryName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SyntheticsCanaryArnProps <a name="SyntheticsCanaryArnProps" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnProps"></a>

Properties for building a canary ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnProps.Initializer"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

const syntheticsCanaryArnProps: synthetics.SyntheticsCanaryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsCanaryArnProps.property.canaryName">canaryName</a></code> | <code>string</code> | The CanaryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsCanaryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsCanaryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsCanaryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `canaryName`<sup>Required</sup> <a name="canaryName" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnProps.property.canaryName"></a>

```typescript
public readonly canaryName: string;
```

- *Type:* string

The CanaryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.synthetics.SyntheticsCanaryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SyntheticsGroupArnComponents <a name="SyntheticsGroupArnComponents" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnComponents"></a>

Parsed components of a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnComponents.Initializer"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

const syntheticsGroupArnComponents: synthetics.SyntheticsGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsGroupArnComponents.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnComponents.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SyntheticsGroupArnProps <a name="SyntheticsGroupArnProps" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnProps"></a>

Properties for building a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnProps.Initializer"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

const syntheticsGroupArnProps: synthetics.SyntheticsGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsGroupArnProps.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnProps.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.synthetics.SyntheticsGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsActions <a name="SyntheticsActions" id="@cdk_utils/iam.synthetics.SyntheticsActions"></a>

IAM action constants for the synthetics service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.synthetics.SyntheticsActions.Initializer"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

new synthetics.SyntheticsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.actionGetCanary">actionGetCanary</a></code> | <code>string</code> | [Read] synthetics:GetCanary. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.actionGetCanaryRuns">actionGetCanaryRuns</a></code> | <code>string</code> | [Read] synthetics:GetCanaryRuns. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.actionGetGroup">actionGetGroup</a></code> | <code>string</code> | [Read] synthetics:GetGroup. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.AssociateResource">AssociateResource</a></code> | <code>string</code> | [Write] synthetics:AssociateResource. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.CreateCanary">CreateCanary</a></code> | <code>string</code> | [Write] synthetics:CreateCanary. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.CreateGroup">CreateGroup</a></code> | <code>string</code> | [Write] synthetics:CreateGroup. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.DeleteCanary">DeleteCanary</a></code> | <code>string</code> | [Write] synthetics:DeleteCanary. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] synthetics:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.DescribeCanaries">DescribeCanaries</a></code> | <code>string</code> | [Read] synthetics:DescribeCanaries. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.DescribeCanariesLastRun">DescribeCanariesLastRun</a></code> | <code>string</code> | [Read] synthetics:DescribeCanariesLastRun. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.DescribeRuntimeVersions">DescribeRuntimeVersions</a></code> | <code>string</code> | [Read] synthetics:DescribeRuntimeVersions. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.DisassociateResource">DisassociateResource</a></code> | <code>string</code> | [Write] synthetics:DisassociateResource. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.ListAssociatedGroups">ListAssociatedGroups</a></code> | <code>string</code> | [List] synthetics:ListAssociatedGroups. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.ListGroupResources">ListGroupResources</a></code> | <code>string</code> | [List] synthetics:ListGroupResources. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] synthetics:ListGroups. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] synthetics:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.StartCanary">StartCanary</a></code> | <code>string</code> | [Write] synthetics:StartCanary. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.StartCanaryDryRun">StartCanaryDryRun</a></code> | <code>string</code> | [Write] synthetics:StartCanaryDryRun. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.StopCanary">StopCanary</a></code> | <code>string</code> | [Write] synthetics:StopCanary. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] synthetics:TagResource. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] synthetics:UntagResource. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsActions.property.UpdateCanary">UpdateCanary</a></code> | <code>string</code> | [Write] synthetics:UpdateCanary. |

---

##### `actionGetCanary`<sup>Required</sup> <a name="actionGetCanary" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.actionGetCanary"></a>

```typescript
public readonly actionGetCanary: string;
```

- *Type:* string

[Read] synthetics:GetCanary.

---

##### `actionGetCanaryRuns`<sup>Required</sup> <a name="actionGetCanaryRuns" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.actionGetCanaryRuns"></a>

```typescript
public readonly actionGetCanaryRuns: string;
```

- *Type:* string

[Read] synthetics:GetCanaryRuns.

---

##### `actionGetGroup`<sup>Required</sup> <a name="actionGetGroup" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.actionGetGroup"></a>

```typescript
public readonly actionGetGroup: string;
```

- *Type:* string

[Read] synthetics:GetGroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateResource`<sup>Required</sup> <a name="AssociateResource" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.AssociateResource"></a>

```typescript
public readonly AssociateResource: string;
```

- *Type:* string

[Write] synthetics:AssociateResource.

---

##### `CreateCanary`<sup>Required</sup> <a name="CreateCanary" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.CreateCanary"></a>

```typescript
public readonly CreateCanary: string;
```

- *Type:* string

[Write] synthetics:CreateCanary.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string;
```

- *Type:* string

[Write] synthetics:CreateGroup.

---

##### `DeleteCanary`<sup>Required</sup> <a name="DeleteCanary" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.DeleteCanary"></a>

```typescript
public readonly DeleteCanary: string;
```

- *Type:* string

[Write] synthetics:DeleteCanary.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] synthetics:DeleteGroup.

---

##### `DescribeCanaries`<sup>Required</sup> <a name="DescribeCanaries" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.DescribeCanaries"></a>

```typescript
public readonly DescribeCanaries: string;
```

- *Type:* string

[Read] synthetics:DescribeCanaries.

---

##### `DescribeCanariesLastRun`<sup>Required</sup> <a name="DescribeCanariesLastRun" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.DescribeCanariesLastRun"></a>

```typescript
public readonly DescribeCanariesLastRun: string;
```

- *Type:* string

[Read] synthetics:DescribeCanariesLastRun.

---

##### `DescribeRuntimeVersions`<sup>Required</sup> <a name="DescribeRuntimeVersions" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.DescribeRuntimeVersions"></a>

```typescript
public readonly DescribeRuntimeVersions: string;
```

- *Type:* string

[Read] synthetics:DescribeRuntimeVersions.

---

##### `DisassociateResource`<sup>Required</sup> <a name="DisassociateResource" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.DisassociateResource"></a>

```typescript
public readonly DisassociateResource: string;
```

- *Type:* string

[Write] synthetics:DisassociateResource.

---

##### `ListAssociatedGroups`<sup>Required</sup> <a name="ListAssociatedGroups" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.ListAssociatedGroups"></a>

```typescript
public readonly ListAssociatedGroups: string;
```

- *Type:* string

[List] synthetics:ListAssociatedGroups.

---

##### `ListGroupResources`<sup>Required</sup> <a name="ListGroupResources" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.ListGroupResources"></a>

```typescript
public readonly ListGroupResources: string;
```

- *Type:* string

[List] synthetics:ListGroupResources.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] synthetics:ListGroups.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] synthetics:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCanary`<sup>Required</sup> <a name="StartCanary" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.StartCanary"></a>

```typescript
public readonly StartCanary: string;
```

- *Type:* string

[Write] synthetics:StartCanary.

---

##### `StartCanaryDryRun`<sup>Required</sup> <a name="StartCanaryDryRun" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.StartCanaryDryRun"></a>

```typescript
public readonly StartCanaryDryRun: string;
```

- *Type:* string

[Write] synthetics:StartCanaryDryRun.

---

##### `StopCanary`<sup>Required</sup> <a name="StopCanary" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.StopCanary"></a>

```typescript
public readonly StopCanary: string;
```

- *Type:* string

[Write] synthetics:StopCanary.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] synthetics:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] synthetics:UntagResource.

---

##### `UpdateCanary`<sup>Required</sup> <a name="UpdateCanary" id="@cdk_utils/iam.synthetics.SyntheticsActions.property.UpdateCanary"></a>

```typescript
public readonly UpdateCanary: string;
```

- *Type:* string

[Write] synthetics:UpdateCanary.

---

### SyntheticsConditions <a name="SyntheticsConditions" id="@cdk_utils/iam.synthetics.SyntheticsConditions"></a>

Condition key constants and builders for synthetics.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.synthetics.SyntheticsConditions.Initializer"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

new synthetics.SyntheticsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.names">names</a></code> | Generates a condition block for `synthetics:Names`. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `names` <a name="names" id="@cdk_utils/iam.synthetics.SyntheticsConditions.names"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

synthetics.SyntheticsConditions.names(values: string[])
```

Generates a condition block for `synthetics:Names`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.synthetics.SyntheticsConditions.names.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.synthetics.SyntheticsConditions.requestTag"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

synthetics.SyntheticsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.synthetics.SyntheticsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.synthetics.SyntheticsConditions.resourceTag"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

synthetics.SyntheticsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.synthetics.SyntheticsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.tagKeys"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

synthetics.SyntheticsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.synthetics.SyntheticsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.actionGetCanaryConditionKeys">actionGetCanaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCanary action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.actionGetCanaryRunsConditionKeys">actionGetCanaryRunsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCanaryRuns action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.actionGetGroupConditionKeys">actionGetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetGroup action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.AssociateResourceConditionKeys">AssociateResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateResource action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.CreateCanaryConditionKeys">CreateCanaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCanary action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.CreateGroupConditionKeys">CreateGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGroup action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.DeleteCanaryConditionKeys">DeleteCanaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCanary action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.DeleteGroupConditionKeys">DeleteGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteGroup action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.DescribeCanariesConditionKeys">DescribeCanariesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCanaries action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.DescribeCanariesLastRunConditionKeys">DescribeCanariesLastRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCanariesLastRun action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.DisassociateResourceConditionKeys">DisassociateResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateResource action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.ListAssociatedGroupsConditionKeys">ListAssociatedGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAssociatedGroups action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.ListGroupResourcesConditionKeys">ListGroupResourcesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListGroupResources action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.NAMES">NAMES</a></code> | <code>string</code> | Condition key: synthetics:Names (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.StartCanaryConditionKeys">StartCanaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartCanary action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.StartCanaryDryRunConditionKeys">StartCanaryDryRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartCanaryDryRun action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.StopCanaryConditionKeys">StopCanaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopCanary action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsConditions.property.UpdateCanaryConditionKeys">UpdateCanaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCanary action. |

---

##### `actionGetCanaryConditionKeys`<sup>Required</sup> <a name="actionGetCanaryConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.actionGetCanaryConditionKeys"></a>

```typescript
public readonly actionGetCanaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCanary action.

---

##### `actionGetCanaryRunsConditionKeys`<sup>Required</sup> <a name="actionGetCanaryRunsConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.actionGetCanaryRunsConditionKeys"></a>

```typescript
public readonly actionGetCanaryRunsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCanaryRuns action.

---

##### `actionGetGroupConditionKeys`<sup>Required</sup> <a name="actionGetGroupConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.actionGetGroupConditionKeys"></a>

```typescript
public readonly actionGetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetGroup action.

---

##### `AssociateResourceConditionKeys`<sup>Required</sup> <a name="AssociateResourceConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.AssociateResourceConditionKeys"></a>

```typescript
public readonly AssociateResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateResource action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCanaryConditionKeys`<sup>Required</sup> <a name="CreateCanaryConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.CreateCanaryConditionKeys"></a>

```typescript
public readonly CreateCanaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCanary action.

---

##### `CreateGroupConditionKeys`<sup>Required</sup> <a name="CreateGroupConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.CreateGroupConditionKeys"></a>

```typescript
public readonly CreateGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGroup action.

---

##### `DeleteCanaryConditionKeys`<sup>Required</sup> <a name="DeleteCanaryConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.DeleteCanaryConditionKeys"></a>

```typescript
public readonly DeleteCanaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCanary action.

---

##### `DeleteGroupConditionKeys`<sup>Required</sup> <a name="DeleteGroupConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.DeleteGroupConditionKeys"></a>

```typescript
public readonly DeleteGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteGroup action.

---

##### `DescribeCanariesConditionKeys`<sup>Required</sup> <a name="DescribeCanariesConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.DescribeCanariesConditionKeys"></a>

```typescript
public readonly DescribeCanariesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCanaries action.

---

##### `DescribeCanariesLastRunConditionKeys`<sup>Required</sup> <a name="DescribeCanariesLastRunConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.DescribeCanariesLastRunConditionKeys"></a>

```typescript
public readonly DescribeCanariesLastRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCanariesLastRun action.

---

##### `DisassociateResourceConditionKeys`<sup>Required</sup> <a name="DisassociateResourceConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.DisassociateResourceConditionKeys"></a>

```typescript
public readonly DisassociateResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateResource action.

---

##### `ListAssociatedGroupsConditionKeys`<sup>Required</sup> <a name="ListAssociatedGroupsConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.ListAssociatedGroupsConditionKeys"></a>

```typescript
public readonly ListAssociatedGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAssociatedGroups action.

---

##### `ListGroupResourcesConditionKeys`<sup>Required</sup> <a name="ListGroupResourcesConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.ListGroupResourcesConditionKeys"></a>

```typescript
public readonly ListGroupResourcesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListGroupResources action.

---

##### `NAMES`<sup>Required</sup> <a name="NAMES" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.NAMES"></a>

```typescript
public readonly NAMES: string;
```

- *Type:* string

Condition key: synthetics:Names (ArrayOfString).

---

##### `StartCanaryConditionKeys`<sup>Required</sup> <a name="StartCanaryConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.StartCanaryConditionKeys"></a>

```typescript
public readonly StartCanaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartCanary action.

---

##### `StartCanaryDryRunConditionKeys`<sup>Required</sup> <a name="StartCanaryDryRunConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.StartCanaryDryRunConditionKeys"></a>

```typescript
public readonly StartCanaryDryRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartCanaryDryRun action.

---

##### `StopCanaryConditionKeys`<sup>Required</sup> <a name="StopCanaryConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.StopCanaryConditionKeys"></a>

```typescript
public readonly StopCanaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopCanary action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateCanaryConditionKeys`<sup>Required</sup> <a name="UpdateCanaryConditionKeys" id="@cdk_utils/iam.synthetics.SyntheticsConditions.property.UpdateCanaryConditionKeys"></a>

```typescript
public readonly UpdateCanaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCanary action.

---

### SyntheticsOperations <a name="SyntheticsOperations" id="@cdk_utils/iam.synthetics.SyntheticsOperations"></a>

API operation to required IAM actions mapping for synthetics.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.synthetics.SyntheticsOperations.Initializer"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

new synthetics.SyntheticsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.AssociateResource">AssociateResource</a></code> | <code>string[]</code> | IAM actions required for the AssociateResource API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.CreateCanary">CreateCanary</a></code> | <code>string[]</code> | IAM actions required for the CreateCanary API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.CreateGroup">CreateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGroup API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.DeleteCanary">DeleteCanary</a></code> | <code>string[]</code> | IAM actions required for the DeleteCanary API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.DeleteGroup">DeleteGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroup API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.DescribeCanaries">DescribeCanaries</a></code> | <code>string[]</code> | IAM actions required for the DescribeCanaries API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.DescribeCanariesLastRun">DescribeCanariesLastRun</a></code> | <code>string[]</code> | IAM actions required for the DescribeCanariesLastRun API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.DescribeRuntimeVersions">DescribeRuntimeVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeRuntimeVersions API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.DisassociateResource">DisassociateResource</a></code> | <code>string[]</code> | IAM actions required for the DisassociateResource API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.ListAssociatedGroups">ListAssociatedGroups</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedGroups API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.ListGroupResources">ListGroupResources</a></code> | <code>string[]</code> | IAM actions required for the ListGroupResources API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.ListGroups">ListGroups</a></code> | <code>string[]</code> | IAM actions required for the ListGroups API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.opGetCanary">opGetCanary</a></code> | <code>string[]</code> | IAM actions required for the GetCanary API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.opGetCanaryRuns">opGetCanaryRuns</a></code> | <code>string[]</code> | IAM actions required for the GetCanaryRuns API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.opGetGroup">opGetGroup</a></code> | <code>string[]</code> | IAM actions required for the GetGroup API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.StartCanary">StartCanary</a></code> | <code>string[]</code> | IAM actions required for the StartCanary API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.StartCanaryDryRun">StartCanaryDryRun</a></code> | <code>string[]</code> | IAM actions required for the StartCanaryDryRun API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.StopCanary">StopCanary</a></code> | <code>string[]</code> | IAM actions required for the StopCanary API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsOperations.property.UpdateCanary">UpdateCanary</a></code> | <code>string[]</code> | IAM actions required for the UpdateCanary API call. |

---

##### `AssociateResource`<sup>Required</sup> <a name="AssociateResource" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.AssociateResource"></a>

```typescript
public readonly AssociateResource: string[];
```

- *Type:* string[]

IAM actions required for the AssociateResource API call.

---

##### `CreateCanary`<sup>Required</sup> <a name="CreateCanary" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.CreateCanary"></a>

```typescript
public readonly CreateCanary: string[];
```

- *Type:* string[]

IAM actions required for the CreateCanary API call.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroup API call.

---

##### `DeleteCanary`<sup>Required</sup> <a name="DeleteCanary" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.DeleteCanary"></a>

```typescript
public readonly DeleteCanary: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCanary API call.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroup API call.

---

##### `DescribeCanaries`<sup>Required</sup> <a name="DescribeCanaries" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.DescribeCanaries"></a>

```typescript
public readonly DescribeCanaries: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCanaries API call.

---

##### `DescribeCanariesLastRun`<sup>Required</sup> <a name="DescribeCanariesLastRun" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.DescribeCanariesLastRun"></a>

```typescript
public readonly DescribeCanariesLastRun: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCanariesLastRun API call.

---

##### `DescribeRuntimeVersions`<sup>Required</sup> <a name="DescribeRuntimeVersions" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.DescribeRuntimeVersions"></a>

```typescript
public readonly DescribeRuntimeVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRuntimeVersions API call.

---

##### `DisassociateResource`<sup>Required</sup> <a name="DisassociateResource" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.DisassociateResource"></a>

```typescript
public readonly DisassociateResource: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateResource API call.

---

##### `ListAssociatedGroups`<sup>Required</sup> <a name="ListAssociatedGroups" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.ListAssociatedGroups"></a>

```typescript
public readonly ListAssociatedGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedGroups API call.

---

##### `ListGroupResources`<sup>Required</sup> <a name="ListGroupResources" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.ListGroupResources"></a>

```typescript
public readonly ListGroupResources: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupResources API call.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.ListGroups"></a>

```typescript
public readonly ListGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListGroups API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetCanary`<sup>Required</sup> <a name="opGetCanary" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.opGetCanary"></a>

```typescript
public readonly opGetCanary: string[];
```

- *Type:* string[]

IAM actions required for the GetCanary API call.

---

##### `opGetCanaryRuns`<sup>Required</sup> <a name="opGetCanaryRuns" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.opGetCanaryRuns"></a>

```typescript
public readonly opGetCanaryRuns: string[];
```

- *Type:* string[]

IAM actions required for the GetCanaryRuns API call.

---

##### `opGetGroup`<sup>Required</sup> <a name="opGetGroup" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.opGetGroup"></a>

```typescript
public readonly opGetGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetGroup API call.

---

##### `StartCanary`<sup>Required</sup> <a name="StartCanary" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.StartCanary"></a>

```typescript
public readonly StartCanary: string[];
```

- *Type:* string[]

IAM actions required for the StartCanary API call.

---

##### `StartCanaryDryRun`<sup>Required</sup> <a name="StartCanaryDryRun" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.StartCanaryDryRun"></a>

```typescript
public readonly StartCanaryDryRun: string[];
```

- *Type:* string[]

IAM actions required for the StartCanaryDryRun API call.

---

##### `StopCanary`<sup>Required</sup> <a name="StopCanary" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.StopCanary"></a>

```typescript
public readonly StopCanary: string[];
```

- *Type:* string[]

IAM actions required for the StopCanary API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCanary`<sup>Required</sup> <a name="UpdateCanary" id="@cdk_utils/iam.synthetics.SyntheticsOperations.property.UpdateCanary"></a>

```typescript
public readonly UpdateCanary: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCanary API call.

---

### SyntheticsResources <a name="SyntheticsResources" id="@cdk_utils/iam.synthetics.SyntheticsResources"></a>

ARN builders, validators, and parsers for synthetics resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.synthetics.SyntheticsResources.Initializer"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

new synthetics.SyntheticsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsResources.canary">canary</a></code> | Builds an ARN for the canary resource. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsResources.group">group</a></code> | Builds an ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsResources.isValidCanaryArn">isValidCanaryArn</a></code> | Validates whether a string is a valid ARN for the canary resource. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsResources.isValidGroupArn">isValidGroupArn</a></code> | Validates whether a string is a valid ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsResources.parseCanaryArn">parseCanaryArn</a></code> | Parses a canary ARN into its components. |
| <code><a href="#@cdk_utils/iam.synthetics.SyntheticsResources.parseGroupArn">parseGroupArn</a></code> | Parses a group ARN into its components. |

---

##### `canary` <a name="canary" id="@cdk_utils/iam.synthetics.SyntheticsResources.canary"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

synthetics.SyntheticsResources.canary(props: SyntheticsCanaryArnProps)
```

Builds an ARN for the canary resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.synthetics.SyntheticsResources.canary.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.synthetics.SyntheticsCanaryArnProps">SyntheticsCanaryArnProps</a>

---

##### `group` <a name="group" id="@cdk_utils/iam.synthetics.SyntheticsResources.group"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

synthetics.SyntheticsResources.group(props: SyntheticsGroupArnProps)
```

Builds an ARN for the group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.synthetics.SyntheticsResources.group.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.synthetics.SyntheticsGroupArnProps">SyntheticsGroupArnProps</a>

---

##### `isValidCanaryArn` <a name="isValidCanaryArn" id="@cdk_utils/iam.synthetics.SyntheticsResources.isValidCanaryArn"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

synthetics.SyntheticsResources.isValidCanaryArn(arn: string)
```

Validates whether a string is a valid ARN for the canary resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.synthetics.SyntheticsResources.isValidCanaryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGroupArn` <a name="isValidGroupArn" id="@cdk_utils/iam.synthetics.SyntheticsResources.isValidGroupArn"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

synthetics.SyntheticsResources.isValidGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.synthetics.SyntheticsResources.isValidGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCanaryArn` <a name="parseCanaryArn" id="@cdk_utils/iam.synthetics.SyntheticsResources.parseCanaryArn"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

synthetics.SyntheticsResources.parseCanaryArn(arn: string)
```

Parses a canary ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.synthetics.SyntheticsResources.parseCanaryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroupArn` <a name="parseGroupArn" id="@cdk_utils/iam.synthetics.SyntheticsResources.parseGroupArn"></a>

```typescript
import { synthetics } from '@cdk_utils/iam'

synthetics.SyntheticsResources.parseGroupArn(arn: string)
```

Parses a group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.synthetics.SyntheticsResources.parseGroupArn.parameter.arn"></a>

- *Type:* string

---




