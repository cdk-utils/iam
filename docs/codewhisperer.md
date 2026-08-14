# `codewhisperer` Submodule <a name="`codewhisperer` Submodule" id="@cdk_utils/iam.codewhisperer"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodewhispererCustomizationArnComponents <a name="CodewhispererCustomizationArnComponents" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnComponents"></a>

Parsed components of a customization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnComponents.Initializer"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

const codewhispererCustomizationArnComponents: codewhisperer.CodewhispererCustomizationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodewhispererCustomizationArnProps <a name="CodewhispererCustomizationArnProps" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnProps"></a>

Properties for building a customization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnProps.Initializer"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

const codewhispererCustomizationArnProps: codewhisperer.CodewhispererCustomizationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodewhispererProfileArnComponents <a name="CodewhispererProfileArnComponents" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnComponents"></a>

Parsed components of a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnComponents.Initializer"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

const codewhispererProfileArnComponents: codewhisperer.CodewhispererProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererProfileArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodewhispererProfileArnProps <a name="CodewhispererProfileArnProps" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnProps"></a>

Properties for building a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnProps.Initializer"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

const codewhispererProfileArnProps: codewhisperer.CodewhispererProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererProfileArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codewhisperer.CodewhispererProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodewhispererActions <a name="CodewhispererActions" id="@cdk_utils/iam.codewhisperer.CodewhispererActions"></a>

IAM action constants for the codewhisperer service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.Initializer"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

new codewhisperer.CodewhispererActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.actionGetCustomization">actionGetCustomization</a></code> | <code>string</code> | [Read] codewhisperer:GetCustomization. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] codewhisperer:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AssociateCustomizationPermission">AssociateCustomizationPermission</a></code> | <code>string</code> | [Write] codewhisperer:AssociateCustomizationPermission. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.CreateCustomization">CreateCustomization</a></code> | <code>string</code> | [Write] codewhisperer:CreateCustomization. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.CreateProfile">CreateProfile</a></code> | <code>string</code> | [Write] codewhisperer:CreateProfile. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.DeleteCustomization">DeleteCustomization</a></code> | <code>string</code> | [Write] codewhisperer:DeleteCustomization. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.DeleteProfile">DeleteProfile</a></code> | <code>string</code> | [Write] codewhisperer:DeleteProfile. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.DisassociateCustomizationPermission">DisassociateCustomizationPermission</a></code> | <code>string</code> | [Write] codewhisperer:DisassociateCustomizationPermission. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.GenerateRecommendations">GenerateRecommendations</a></code> | <code>string</code> | [Read] codewhisperer:GenerateRecommendations. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.ListCustomizationPermissions">ListCustomizationPermissions</a></code> | <code>string</code> | [List] codewhisperer:ListCustomizationPermissions. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.ListCustomizations">ListCustomizations</a></code> | <code>string</code> | [List] codewhisperer:ListCustomizations. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.ListCustomizationVersions">ListCustomizationVersions</a></code> | <code>string</code> | [List] codewhisperer:ListCustomizationVersions. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.ListProfiles">ListProfiles</a></code> | <code>string</code> | [List] codewhisperer:ListProfiles. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] codewhisperer:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codewhisperer:TagResource. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] codewhisperer:UntagResource. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.UpdateCustomization">UpdateCustomization</a></code> | <code>string</code> | [Write] codewhisperer:UpdateCustomization. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererActions.property.UpdateProfile">UpdateProfile</a></code> | <code>string</code> | [Write] codewhisperer:UpdateProfile. |

---

##### `actionGetCustomization`<sup>Required</sup> <a name="actionGetCustomization" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.actionGetCustomization"></a>

```typescript
public readonly actionGetCustomization: string;
```

- *Type:* string

[Read] codewhisperer:GetCustomization.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] codewhisperer:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateCustomizationPermission`<sup>Required</sup> <a name="AssociateCustomizationPermission" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.AssociateCustomizationPermission"></a>

```typescript
public readonly AssociateCustomizationPermission: string;
```

- *Type:* string

[Write] codewhisperer:AssociateCustomizationPermission.

---

##### `CreateCustomization`<sup>Required</sup> <a name="CreateCustomization" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.CreateCustomization"></a>

```typescript
public readonly CreateCustomization: string;
```

- *Type:* string

[Write] codewhisperer:CreateCustomization.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string;
```

- *Type:* string

[Write] codewhisperer:CreateProfile.

---

##### `DeleteCustomization`<sup>Required</sup> <a name="DeleteCustomization" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.DeleteCustomization"></a>

```typescript
public readonly DeleteCustomization: string;
```

- *Type:* string

[Write] codewhisperer:DeleteCustomization.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string;
```

- *Type:* string

[Write] codewhisperer:DeleteProfile.

---

##### `DisassociateCustomizationPermission`<sup>Required</sup> <a name="DisassociateCustomizationPermission" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.DisassociateCustomizationPermission"></a>

```typescript
public readonly DisassociateCustomizationPermission: string;
```

- *Type:* string

[Write] codewhisperer:DisassociateCustomizationPermission.

---

##### `GenerateRecommendations`<sup>Required</sup> <a name="GenerateRecommendations" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.GenerateRecommendations"></a>

```typescript
public readonly GenerateRecommendations: string;
```

- *Type:* string

[Read] codewhisperer:GenerateRecommendations.

---

##### `ListCustomizationPermissions`<sup>Required</sup> <a name="ListCustomizationPermissions" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.ListCustomizationPermissions"></a>

```typescript
public readonly ListCustomizationPermissions: string;
```

- *Type:* string

[List] codewhisperer:ListCustomizationPermissions.

---

##### `ListCustomizations`<sup>Required</sup> <a name="ListCustomizations" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.ListCustomizations"></a>

```typescript
public readonly ListCustomizations: string;
```

- *Type:* string

[List] codewhisperer:ListCustomizations.

---

##### `ListCustomizationVersions`<sup>Required</sup> <a name="ListCustomizationVersions" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.ListCustomizationVersions"></a>

```typescript
public readonly ListCustomizationVersions: string;
```

- *Type:* string

[List] codewhisperer:ListCustomizationVersions.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string;
```

- *Type:* string

[List] codewhisperer:ListProfiles.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] codewhisperer:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codewhisperer:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] codewhisperer:UntagResource.

---

##### `UpdateCustomization`<sup>Required</sup> <a name="UpdateCustomization" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.UpdateCustomization"></a>

```typescript
public readonly UpdateCustomization: string;
```

- *Type:* string

[Write] codewhisperer:UpdateCustomization.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.codewhisperer.CodewhispererActions.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string;
```

- *Type:* string

[Write] codewhisperer:UpdateProfile.

---

### CodewhispererConditions <a name="CodewhispererConditions" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions"></a>

Condition key constants and builders for codewhisperer.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.Initializer"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

new codewhisperer.CodewhispererConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.requestTag"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

codewhisperer.CodewhispererConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.resourceTag"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

codewhisperer.CodewhispererConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.tagKeys"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

codewhisperer.CodewhispererConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.actionGetCustomizationConditionKeys">actionGetCustomizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCustomization action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.AllowVendedLogDeliveryForResourceConditionKeys">AllowVendedLogDeliveryForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AllowVendedLogDeliveryForResource action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.AssociateCustomizationPermissionConditionKeys">AssociateCustomizationPermissionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateCustomizationPermission action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.CreateCustomizationConditionKeys">CreateCustomizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomization action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.CreateProfileConditionKeys">CreateProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProfile action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.DeleteCustomizationConditionKeys">DeleteCustomizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCustomization action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.DeleteProfileConditionKeys">DeleteProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteProfile action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.DisassociateCustomizationPermissionConditionKeys">DisassociateCustomizationPermissionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateCustomizationPermission action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.ListCustomizationPermissionsConditionKeys">ListCustomizationPermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListCustomizationPermissions action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.ListCustomizationVersionsConditionKeys">ListCustomizationVersionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListCustomizationVersions action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.UpdateCustomizationConditionKeys">UpdateCustomizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCustomization action. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.UpdateProfileConditionKeys">UpdateProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProfile action. |

---

##### `actionGetCustomizationConditionKeys`<sup>Required</sup> <a name="actionGetCustomizationConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.actionGetCustomizationConditionKeys"></a>

```typescript
public readonly actionGetCustomizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCustomization action.

---

##### `AllowVendedLogDeliveryForResourceConditionKeys`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResourceConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.AllowVendedLogDeliveryForResourceConditionKeys"></a>

```typescript
public readonly AllowVendedLogDeliveryForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AllowVendedLogDeliveryForResource action.

---

##### `AssociateCustomizationPermissionConditionKeys`<sup>Required</sup> <a name="AssociateCustomizationPermissionConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.AssociateCustomizationPermissionConditionKeys"></a>

```typescript
public readonly AssociateCustomizationPermissionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateCustomizationPermission action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCustomizationConditionKeys`<sup>Required</sup> <a name="CreateCustomizationConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.CreateCustomizationConditionKeys"></a>

```typescript
public readonly CreateCustomizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomization action.

---

##### `CreateProfileConditionKeys`<sup>Required</sup> <a name="CreateProfileConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.CreateProfileConditionKeys"></a>

```typescript
public readonly CreateProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProfile action.

---

##### `DeleteCustomizationConditionKeys`<sup>Required</sup> <a name="DeleteCustomizationConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.DeleteCustomizationConditionKeys"></a>

```typescript
public readonly DeleteCustomizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCustomization action.

---

##### `DeleteProfileConditionKeys`<sup>Required</sup> <a name="DeleteProfileConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.DeleteProfileConditionKeys"></a>

```typescript
public readonly DeleteProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteProfile action.

---

##### `DisassociateCustomizationPermissionConditionKeys`<sup>Required</sup> <a name="DisassociateCustomizationPermissionConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.DisassociateCustomizationPermissionConditionKeys"></a>

```typescript
public readonly DisassociateCustomizationPermissionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateCustomizationPermission action.

---

##### `ListCustomizationPermissionsConditionKeys`<sup>Required</sup> <a name="ListCustomizationPermissionsConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.ListCustomizationPermissionsConditionKeys"></a>

```typescript
public readonly ListCustomizationPermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListCustomizationPermissions action.

---

##### `ListCustomizationVersionsConditionKeys`<sup>Required</sup> <a name="ListCustomizationVersionsConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.ListCustomizationVersionsConditionKeys"></a>

```typescript
public readonly ListCustomizationVersionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListCustomizationVersions action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateCustomizationConditionKeys`<sup>Required</sup> <a name="UpdateCustomizationConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.UpdateCustomizationConditionKeys"></a>

```typescript
public readonly UpdateCustomizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCustomization action.

---

##### `UpdateProfileConditionKeys`<sup>Required</sup> <a name="UpdateProfileConditionKeys" id="@cdk_utils/iam.codewhisperer.CodewhispererConditions.property.UpdateProfileConditionKeys"></a>

```typescript
public readonly UpdateProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProfile action.

---

### CodewhispererResources <a name="CodewhispererResources" id="@cdk_utils/iam.codewhisperer.CodewhispererResources"></a>

ARN builders, validators, and parsers for codewhisperer resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.Initializer"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

new codewhisperer.CodewhispererResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererResources.customization">customization</a></code> | Builds an ARN for the customization resource. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererResources.isValidCustomizationArn">isValidCustomizationArn</a></code> | Validates whether a string is a valid ARN for the customization resource. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererResources.isValidProfileArn">isValidProfileArn</a></code> | Validates whether a string is a valid ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererResources.parseCustomizationArn">parseCustomizationArn</a></code> | Parses a customization ARN into its components. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererResources.parseProfileArn">parseProfileArn</a></code> | Parses a profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.codewhisperer.CodewhispererResources.profile">profile</a></code> | Builds an ARN for the profile resource. |

---

##### `customization` <a name="customization" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.customization"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

codewhisperer.CodewhispererResources.customization(props: CodewhispererCustomizationArnProps)
```

Builds an ARN for the customization resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.customization.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codewhisperer.CodewhispererCustomizationArnProps">CodewhispererCustomizationArnProps</a>

---

##### `isValidCustomizationArn` <a name="isValidCustomizationArn" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.isValidCustomizationArn"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

codewhisperer.CodewhispererResources.isValidCustomizationArn(arn: string)
```

Validates whether a string is a valid ARN for the customization resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.isValidCustomizationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProfileArn` <a name="isValidProfileArn" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.isValidProfileArn"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

codewhisperer.CodewhispererResources.isValidProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.isValidProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomizationArn` <a name="parseCustomizationArn" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.parseCustomizationArn"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

codewhisperer.CodewhispererResources.parseCustomizationArn(arn: string)
```

Parses a customization ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.parseCustomizationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProfileArn` <a name="parseProfileArn" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.parseProfileArn"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

codewhisperer.CodewhispererResources.parseProfileArn(arn: string)
```

Parses a profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.parseProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `profile` <a name="profile" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.profile"></a>

```typescript
import { codewhisperer } from '@cdk_utils/iam'

codewhisperer.CodewhispererResources.profile(props: CodewhispererProfileArnProps)
```

Builds an ARN for the profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codewhisperer.CodewhispererResources.profile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codewhisperer.CodewhispererProfileArnProps">CodewhispererProfileArnProps</a>

---




