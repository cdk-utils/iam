# `evs` Submodule <a name="`evs` Submodule" id="@cdk_utils/iam.evs"></a>


## Structs <a name="Structs" id="Structs"></a>

### EvsEnvironmentArnComponents <a name="EvsEnvironmentArnComponents" id="@cdk_utils/iam.evs.EvsEnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evs.EvsEnvironmentArnComponents.Initializer"></a>

```typescript
import { evs } from '@cdk_utils/iam'

const evsEnvironmentArnComponents: evs.EvsEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evs.EvsEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evs.EvsEnvironmentArnComponents.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | The EnvironmentIdentifier component. |
| <code><a href="#@cdk_utils/iam.evs.EvsEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evs.EvsEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.evs.EvsEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdk_utils/iam.evs.EvsEnvironmentArnComponents.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

The EnvironmentIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.evs.EvsEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.evs.EvsEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EvsEnvironmentArnProps <a name="EvsEnvironmentArnProps" id="@cdk_utils/iam.evs.EvsEnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evs.EvsEnvironmentArnProps.Initializer"></a>

```typescript
import { evs } from '@cdk_utils/iam'

const evsEnvironmentArnProps: evs.EvsEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evs.EvsEnvironmentArnProps.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | The EnvironmentIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.evs.EvsEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evs.EvsEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evs.EvsEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdk_utils/iam.evs.EvsEnvironmentArnProps.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

The EnvironmentIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.evs.EvsEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.evs.EvsEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.evs.EvsEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EvsActions <a name="EvsActions" id="@cdk_utils/iam.evs.EvsActions"></a>

IAM action constants for the evs service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.evs.EvsActions.Initializer"></a>

```typescript
import { evs } from '@cdk_utils/iam'

new evs.EvsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] evs:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.actionGetDepotUrl">actionGetDepotUrl</a></code> | <code>string</code> | [Read] evs:GetDepotUrl. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] evs:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.actionGetVersions">actionGetVersions</a></code> | <code>string</code> | [Read] evs:GetVersions. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.AssociateEipToVlan">AssociateEipToVlan</a></code> | <code>string</code> | [Write] evs:AssociateEipToVlan. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.CreateEntitlement">CreateEntitlement</a></code> | <code>string</code> | [Write] evs:CreateEntitlement. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] evs:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.CreateEnvironmentConnector">CreateEnvironmentConnector</a></code> | <code>string</code> | [Write] evs:CreateEnvironmentConnector. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.CreateEnvironmentHost">CreateEnvironmentHost</a></code> | <code>string</code> | [Write] evs:CreateEnvironmentHost. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.DeleteEntitlement">DeleteEntitlement</a></code> | <code>string</code> | [Write] evs:DeleteEntitlement. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] evs:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.DeleteEnvironmentConnector">DeleteEnvironmentConnector</a></code> | <code>string</code> | [Write] evs:DeleteEnvironmentConnector. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.DeleteEnvironmentHost">DeleteEnvironmentHost</a></code> | <code>string</code> | [Write] evs:DeleteEnvironmentHost. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.DisassociateEipFromVlan">DisassociateEipFromVlan</a></code> | <code>string</code> | [Write] evs:DisassociateEipFromVlan. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.ListEnvironmentConnectors">ListEnvironmentConnectors</a></code> | <code>string</code> | [List] evs:ListEnvironmentConnectors. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.ListEnvironmentHosts">ListEnvironmentHosts</a></code> | <code>string</code> | [List] evs:ListEnvironmentHosts. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [List] evs:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.ListEnvironmentVlans">ListEnvironmentVlans</a></code> | <code>string</code> | [List] evs:ListEnvironmentVlans. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] evs:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.ListVmEntitlements">ListVmEntitlements</a></code> | <code>string</code> | [List] evs:ListVmEntitlements. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.PutAccountSettings">PutAccountSettings</a></code> | <code>string</code> | [Write] evs:PutAccountSettings. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] evs:TagResource. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] evs:UntagResource. |
| <code><a href="#@cdk_utils/iam.evs.EvsActions.property.UpdateEnvironmentConnector">UpdateEnvironmentConnector</a></code> | <code>string</code> | [Write] evs:UpdateEnvironmentConnector. |

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.evs.EvsActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] evs:GetAccountSettings.

---

##### `actionGetDepotUrl`<sup>Required</sup> <a name="actionGetDepotUrl" id="@cdk_utils/iam.evs.EvsActions.property.actionGetDepotUrl"></a>

```typescript
public readonly actionGetDepotUrl: string;
```

- *Type:* string

[Read] evs:GetDepotUrl.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.evs.EvsActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] evs:GetEnvironment.

---

##### `actionGetVersions`<sup>Required</sup> <a name="actionGetVersions" id="@cdk_utils/iam.evs.EvsActions.property.actionGetVersions"></a>

```typescript
public readonly actionGetVersions: string;
```

- *Type:* string

[Read] evs:GetVersions.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.evs.EvsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.evs.EvsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.evs.EvsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.evs.EvsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.evs.EvsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateEipToVlan`<sup>Required</sup> <a name="AssociateEipToVlan" id="@cdk_utils/iam.evs.EvsActions.property.AssociateEipToVlan"></a>

```typescript
public readonly AssociateEipToVlan: string;
```

- *Type:* string

[Write] evs:AssociateEipToVlan.

---

##### `CreateEntitlement`<sup>Required</sup> <a name="CreateEntitlement" id="@cdk_utils/iam.evs.EvsActions.property.CreateEntitlement"></a>

```typescript
public readonly CreateEntitlement: string;
```

- *Type:* string

[Write] evs:CreateEntitlement.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.evs.EvsActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] evs:CreateEnvironment.

---

##### `CreateEnvironmentConnector`<sup>Required</sup> <a name="CreateEnvironmentConnector" id="@cdk_utils/iam.evs.EvsActions.property.CreateEnvironmentConnector"></a>

```typescript
public readonly CreateEnvironmentConnector: string;
```

- *Type:* string

[Write] evs:CreateEnvironmentConnector.

---

##### `CreateEnvironmentHost`<sup>Required</sup> <a name="CreateEnvironmentHost" id="@cdk_utils/iam.evs.EvsActions.property.CreateEnvironmentHost"></a>

```typescript
public readonly CreateEnvironmentHost: string;
```

- *Type:* string

[Write] evs:CreateEnvironmentHost.

---

##### `DeleteEntitlement`<sup>Required</sup> <a name="DeleteEntitlement" id="@cdk_utils/iam.evs.EvsActions.property.DeleteEntitlement"></a>

```typescript
public readonly DeleteEntitlement: string;
```

- *Type:* string

[Write] evs:DeleteEntitlement.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.evs.EvsActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] evs:DeleteEnvironment.

---

##### `DeleteEnvironmentConnector`<sup>Required</sup> <a name="DeleteEnvironmentConnector" id="@cdk_utils/iam.evs.EvsActions.property.DeleteEnvironmentConnector"></a>

```typescript
public readonly DeleteEnvironmentConnector: string;
```

- *Type:* string

[Write] evs:DeleteEnvironmentConnector.

---

##### `DeleteEnvironmentHost`<sup>Required</sup> <a name="DeleteEnvironmentHost" id="@cdk_utils/iam.evs.EvsActions.property.DeleteEnvironmentHost"></a>

```typescript
public readonly DeleteEnvironmentHost: string;
```

- *Type:* string

[Write] evs:DeleteEnvironmentHost.

---

##### `DisassociateEipFromVlan`<sup>Required</sup> <a name="DisassociateEipFromVlan" id="@cdk_utils/iam.evs.EvsActions.property.DisassociateEipFromVlan"></a>

```typescript
public readonly DisassociateEipFromVlan: string;
```

- *Type:* string

[Write] evs:DisassociateEipFromVlan.

---

##### `ListEnvironmentConnectors`<sup>Required</sup> <a name="ListEnvironmentConnectors" id="@cdk_utils/iam.evs.EvsActions.property.ListEnvironmentConnectors"></a>

```typescript
public readonly ListEnvironmentConnectors: string;
```

- *Type:* string

[List] evs:ListEnvironmentConnectors.

---

##### `ListEnvironmentHosts`<sup>Required</sup> <a name="ListEnvironmentHosts" id="@cdk_utils/iam.evs.EvsActions.property.ListEnvironmentHosts"></a>

```typescript
public readonly ListEnvironmentHosts: string;
```

- *Type:* string

[List] evs:ListEnvironmentHosts.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.evs.EvsActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[List] evs:ListEnvironments.

---

##### `ListEnvironmentVlans`<sup>Required</sup> <a name="ListEnvironmentVlans" id="@cdk_utils/iam.evs.EvsActions.property.ListEnvironmentVlans"></a>

```typescript
public readonly ListEnvironmentVlans: string;
```

- *Type:* string

[List] evs:ListEnvironmentVlans.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.evs.EvsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] evs:ListTagsForResource.

---

##### `ListVmEntitlements`<sup>Required</sup> <a name="ListVmEntitlements" id="@cdk_utils/iam.evs.EvsActions.property.ListVmEntitlements"></a>

```typescript
public readonly ListVmEntitlements: string;
```

- *Type:* string

[List] evs:ListVmEntitlements.

---

##### `PutAccountSettings`<sup>Required</sup> <a name="PutAccountSettings" id="@cdk_utils/iam.evs.EvsActions.property.PutAccountSettings"></a>

```typescript
public readonly PutAccountSettings: string;
```

- *Type:* string

[Write] evs:PutAccountSettings.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.evs.EvsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.evs.EvsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] evs:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.evs.EvsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] evs:UntagResource.

---

##### `UpdateEnvironmentConnector`<sup>Required</sup> <a name="UpdateEnvironmentConnector" id="@cdk_utils/iam.evs.EvsActions.property.UpdateEnvironmentConnector"></a>

```typescript
public readonly UpdateEnvironmentConnector: string;
```

- *Type:* string

[Write] evs:UpdateEnvironmentConnector.

---

### EvsConditions <a name="EvsConditions" id="@cdk_utils/iam.evs.EvsConditions"></a>

Condition key constants and builders for evs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.evs.EvsConditions.Initializer"></a>

```typescript
import { evs } from '@cdk_utils/iam'

new evs.EvsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.evs.EvsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.evs.EvsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.evs.EvsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.evs.EvsConditions.requestTag"></a>

```typescript
import { evs } from '@cdk_utils/iam'

evs.EvsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.evs.EvsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.evs.EvsConditions.resourceTag"></a>

```typescript
import { evs } from '@cdk_utils/iam'

evs.EvsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.evs.EvsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.evs.EvsConditions.tagKeys"></a>

```typescript
import { evs } from '@cdk_utils/iam'

evs.EvsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.evs.EvsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evs.EvsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.evs.EvsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.evs.EvsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.evs.EvsConditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.evs.EvsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.evs.EvsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.evs.EvsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.evs.EvsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.evs.EvsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.evs.EvsConditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.evs.EvsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.evs.EvsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### EvsOperations <a name="EvsOperations" id="@cdk_utils/iam.evs.EvsOperations"></a>

API operation to required IAM actions mapping for evs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.evs.EvsOperations.Initializer"></a>

```typescript
import { evs } from '@cdk_utils/iam'

new evs.EvsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.AssociateEipToVlan">AssociateEipToVlan</a></code> | <code>string[]</code> | IAM actions required for the AssociateEipToVlan API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.CreateEntitlement">CreateEntitlement</a></code> | <code>string[]</code> | IAM actions required for the CreateEntitlement API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.CreateEnvironmentConnector">CreateEnvironmentConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironmentConnector API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.CreateEnvironmentHost">CreateEnvironmentHost</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironmentHost API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.DeleteEntitlement">DeleteEntitlement</a></code> | <code>string[]</code> | IAM actions required for the DeleteEntitlement API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironment API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.DeleteEnvironmentConnector">DeleteEnvironmentConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironmentConnector API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.DeleteEnvironmentHost">DeleteEnvironmentHost</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironmentHost API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.DisassociateEipFromVlan">DisassociateEipFromVlan</a></code> | <code>string[]</code> | IAM actions required for the DisassociateEipFromVlan API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.ListEnvironmentConnectors">ListEnvironmentConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentConnectors API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.ListEnvironmentHosts">ListEnvironmentHosts</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentHosts API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.ListEnvironments">ListEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironments API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.ListEnvironmentVlans">ListEnvironmentVlans</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentVlans API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.ListVmEntitlements">ListVmEntitlements</a></code> | <code>string[]</code> | IAM actions required for the ListVmEntitlements API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.opGetAccountSettings">opGetAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.opGetDepotUrl">opGetDepotUrl</a></code> | <code>string[]</code> | IAM actions required for the GetDepotUrl API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.opGetEnvironment">opGetEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironment API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.opGetVersions">opGetVersions</a></code> | <code>string[]</code> | IAM actions required for the GetVersions API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.PutAccountSettings">PutAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the PutAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.evs.EvsOperations.property.UpdateEnvironmentConnector">UpdateEnvironmentConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironmentConnector API call. |

---

##### `AssociateEipToVlan`<sup>Required</sup> <a name="AssociateEipToVlan" id="@cdk_utils/iam.evs.EvsOperations.property.AssociateEipToVlan"></a>

```typescript
public readonly AssociateEipToVlan: string[];
```

- *Type:* string[]

IAM actions required for the AssociateEipToVlan API call.

---

##### `CreateEntitlement`<sup>Required</sup> <a name="CreateEntitlement" id="@cdk_utils/iam.evs.EvsOperations.property.CreateEntitlement"></a>

```typescript
public readonly CreateEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the CreateEntitlement API call.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.evs.EvsOperations.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironment API call.

---

##### `CreateEnvironmentConnector`<sup>Required</sup> <a name="CreateEnvironmentConnector" id="@cdk_utils/iam.evs.EvsOperations.property.CreateEnvironmentConnector"></a>

```typescript
public readonly CreateEnvironmentConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironmentConnector API call.

---

##### `CreateEnvironmentHost`<sup>Required</sup> <a name="CreateEnvironmentHost" id="@cdk_utils/iam.evs.EvsOperations.property.CreateEnvironmentHost"></a>

```typescript
public readonly CreateEnvironmentHost: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironmentHost API call.

---

##### `DeleteEntitlement`<sup>Required</sup> <a name="DeleteEntitlement" id="@cdk_utils/iam.evs.EvsOperations.property.DeleteEntitlement"></a>

```typescript
public readonly DeleteEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEntitlement API call.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.evs.EvsOperations.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironment API call.

---

##### `DeleteEnvironmentConnector`<sup>Required</sup> <a name="DeleteEnvironmentConnector" id="@cdk_utils/iam.evs.EvsOperations.property.DeleteEnvironmentConnector"></a>

```typescript
public readonly DeleteEnvironmentConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironmentConnector API call.

---

##### `DeleteEnvironmentHost`<sup>Required</sup> <a name="DeleteEnvironmentHost" id="@cdk_utils/iam.evs.EvsOperations.property.DeleteEnvironmentHost"></a>

```typescript
public readonly DeleteEnvironmentHost: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironmentHost API call.

---

##### `DisassociateEipFromVlan`<sup>Required</sup> <a name="DisassociateEipFromVlan" id="@cdk_utils/iam.evs.EvsOperations.property.DisassociateEipFromVlan"></a>

```typescript
public readonly DisassociateEipFromVlan: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateEipFromVlan API call.

---

##### `ListEnvironmentConnectors`<sup>Required</sup> <a name="ListEnvironmentConnectors" id="@cdk_utils/iam.evs.EvsOperations.property.ListEnvironmentConnectors"></a>

```typescript
public readonly ListEnvironmentConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentConnectors API call.

---

##### `ListEnvironmentHosts`<sup>Required</sup> <a name="ListEnvironmentHosts" id="@cdk_utils/iam.evs.EvsOperations.property.ListEnvironmentHosts"></a>

```typescript
public readonly ListEnvironmentHosts: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentHosts API call.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.evs.EvsOperations.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironments API call.

---

##### `ListEnvironmentVlans`<sup>Required</sup> <a name="ListEnvironmentVlans" id="@cdk_utils/iam.evs.EvsOperations.property.ListEnvironmentVlans"></a>

```typescript
public readonly ListEnvironmentVlans: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentVlans API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.evs.EvsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVmEntitlements`<sup>Required</sup> <a name="ListVmEntitlements" id="@cdk_utils/iam.evs.EvsOperations.property.ListVmEntitlements"></a>

```typescript
public readonly ListVmEntitlements: string[];
```

- *Type:* string[]

IAM actions required for the ListVmEntitlements API call.

---

##### `opGetAccountSettings`<sup>Required</sup> <a name="opGetAccountSettings" id="@cdk_utils/iam.evs.EvsOperations.property.opGetAccountSettings"></a>

```typescript
public readonly opGetAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSettings API call.

---

##### `opGetDepotUrl`<sup>Required</sup> <a name="opGetDepotUrl" id="@cdk_utils/iam.evs.EvsOperations.property.opGetDepotUrl"></a>

```typescript
public readonly opGetDepotUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetDepotUrl API call.

---

##### `opGetEnvironment`<sup>Required</sup> <a name="opGetEnvironment" id="@cdk_utils/iam.evs.EvsOperations.property.opGetEnvironment"></a>

```typescript
public readonly opGetEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironment API call.

---

##### `opGetVersions`<sup>Required</sup> <a name="opGetVersions" id="@cdk_utils/iam.evs.EvsOperations.property.opGetVersions"></a>

```typescript
public readonly opGetVersions: string[];
```

- *Type:* string[]

IAM actions required for the GetVersions API call.

---

##### `PutAccountSettings`<sup>Required</sup> <a name="PutAccountSettings" id="@cdk_utils/iam.evs.EvsOperations.property.PutAccountSettings"></a>

```typescript
public readonly PutAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountSettings API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.evs.EvsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.evs.EvsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateEnvironmentConnector`<sup>Required</sup> <a name="UpdateEnvironmentConnector" id="@cdk_utils/iam.evs.EvsOperations.property.UpdateEnvironmentConnector"></a>

```typescript
public readonly UpdateEnvironmentConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironmentConnector API call.

---

### EvsResources <a name="EvsResources" id="@cdk_utils/iam.evs.EvsResources"></a>

ARN builders, validators, and parsers for evs resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.evs.EvsResources.Initializer"></a>

```typescript
import { evs } from '@cdk_utils/iam'

new evs.EvsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.evs.EvsResources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.evs.EvsResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.evs.EvsResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |

---

##### `environment` <a name="environment" id="@cdk_utils/iam.evs.EvsResources.environment"></a>

```typescript
import { evs } from '@cdk_utils/iam'

evs.EvsResources.environment(props: EvsEnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.evs.EvsResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.evs.EvsEnvironmentArnProps">EvsEnvironmentArnProps</a>

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.evs.EvsResources.isValidEnvironmentArn"></a>

```typescript
import { evs } from '@cdk_utils/iam'

evs.EvsResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evs.EvsResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.evs.EvsResources.parseEnvironmentArn"></a>

```typescript
import { evs } from '@cdk_utils/iam'

evs.EvsResources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evs.EvsResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---




