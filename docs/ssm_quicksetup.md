# `ssm_quicksetup` Submodule <a name="`ssm_quicksetup` Submodule" id="@cdk_utils/iam.ssm_quicksetup"></a>


## Structs <a name="Structs" id="Structs"></a>

### SSMQuicksetupConfigurationManagerArnComponents <a name="SSMQuicksetupConfigurationManagerArnComponents" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnComponents"></a>

Parsed components of a configuration-manager ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnComponents.Initializer"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

const sSMQuicksetupConfigurationManagerArnComponents: ssm_quicksetup.SSMQuicksetupConfigurationManagerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnComponents.property.configurationManagerId">configurationManagerId</a></code> | <code>string</code> | The ConfigurationManagerId component. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configurationManagerId`<sup>Required</sup> <a name="configurationManagerId" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnComponents.property.configurationManagerId"></a>

```typescript
public readonly configurationManagerId: string;
```

- *Type:* string

The ConfigurationManagerId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMQuicksetupConfigurationManagerArnProps <a name="SSMQuicksetupConfigurationManagerArnProps" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps"></a>

Properties for building a configuration-manager ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps.Initializer"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

const sSMQuicksetupConfigurationManagerArnProps: ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps.property.configurationManagerId">configurationManagerId</a></code> | <code>string</code> | The ConfigurationManagerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configurationManagerId`<sup>Required</sup> <a name="configurationManagerId" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps.property.configurationManagerId"></a>

```typescript
public readonly configurationManagerId: string;
```

- *Type:* string

The ConfigurationManagerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SSMQuicksetupActions <a name="SSMQuicksetupActions" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions"></a>

IAM action constants for the ssm-quicksetup service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.Initializer"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

new ssm_quicksetup.SSMQuicksetupActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.actionGetConfiguration">actionGetConfiguration</a></code> | <code>string</code> | [Read] ssm-quicksetup:GetConfiguration. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.actionGetConfigurationManager">actionGetConfigurationManager</a></code> | <code>string</code> | [Read] ssm-quicksetup:GetConfigurationManager. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.actionGetServiceSettings">actionGetServiceSettings</a></code> | <code>string</code> | [Read] ssm-quicksetup:GetServiceSettings. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.CreateConfigurationManager">CreateConfigurationManager</a></code> | <code>string</code> | [Write] ssm-quicksetup:CreateConfigurationManager. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.DeleteConfigurationManager">DeleteConfigurationManager</a></code> | <code>string</code> | [Write] ssm-quicksetup:DeleteConfigurationManager. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.ListConfigurationManagers">ListConfigurationManagers</a></code> | <code>string</code> | [List] ssm-quicksetup:ListConfigurationManagers. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.ListConfigurations">ListConfigurations</a></code> | <code>string</code> | [List] ssm-quicksetup:ListConfigurations. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.ListQuickSetupTypes">ListQuickSetupTypes</a></code> | <code>string</code> | [Read] ssm-quicksetup:ListQuickSetupTypes. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ssm-quicksetup:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ssm-quicksetup:TagResource. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ssm-quicksetup:UntagResource. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.UpdateConfigurationDefinition">UpdateConfigurationDefinition</a></code> | <code>string</code> | [Write] ssm-quicksetup:UpdateConfigurationDefinition. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.UpdateConfigurationManager">UpdateConfigurationManager</a></code> | <code>string</code> | [Write] ssm-quicksetup:UpdateConfigurationManager. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.UpdateServiceSettings">UpdateServiceSettings</a></code> | <code>string</code> | [Write] ssm-quicksetup:UpdateServiceSettings. |

---

##### `actionGetConfiguration`<sup>Required</sup> <a name="actionGetConfiguration" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.actionGetConfiguration"></a>

```typescript
public readonly actionGetConfiguration: string;
```

- *Type:* string

[Read] ssm-quicksetup:GetConfiguration.

---

##### `actionGetConfigurationManager`<sup>Required</sup> <a name="actionGetConfigurationManager" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.actionGetConfigurationManager"></a>

```typescript
public readonly actionGetConfigurationManager: string;
```

- *Type:* string

[Read] ssm-quicksetup:GetConfigurationManager.

---

##### `actionGetServiceSettings`<sup>Required</sup> <a name="actionGetServiceSettings" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.actionGetServiceSettings"></a>

```typescript
public readonly actionGetServiceSettings: string;
```

- *Type:* string

[Read] ssm-quicksetup:GetServiceSettings.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateConfigurationManager`<sup>Required</sup> <a name="CreateConfigurationManager" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.CreateConfigurationManager"></a>

```typescript
public readonly CreateConfigurationManager: string;
```

- *Type:* string

[Write] ssm-quicksetup:CreateConfigurationManager.

---

##### `DeleteConfigurationManager`<sup>Required</sup> <a name="DeleteConfigurationManager" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.DeleteConfigurationManager"></a>

```typescript
public readonly DeleteConfigurationManager: string;
```

- *Type:* string

[Write] ssm-quicksetup:DeleteConfigurationManager.

---

##### `ListConfigurationManagers`<sup>Required</sup> <a name="ListConfigurationManagers" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.ListConfigurationManagers"></a>

```typescript
public readonly ListConfigurationManagers: string;
```

- *Type:* string

[List] ssm-quicksetup:ListConfigurationManagers.

---

##### `ListConfigurations`<sup>Required</sup> <a name="ListConfigurations" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.ListConfigurations"></a>

```typescript
public readonly ListConfigurations: string;
```

- *Type:* string

[List] ssm-quicksetup:ListConfigurations.

---

##### `ListQuickSetupTypes`<sup>Required</sup> <a name="ListQuickSetupTypes" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.ListQuickSetupTypes"></a>

```typescript
public readonly ListQuickSetupTypes: string;
```

- *Type:* string

[Read] ssm-quicksetup:ListQuickSetupTypes.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ssm-quicksetup:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ssm-quicksetup:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ssm-quicksetup:UntagResource.

---

##### `UpdateConfigurationDefinition`<sup>Required</sup> <a name="UpdateConfigurationDefinition" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.UpdateConfigurationDefinition"></a>

```typescript
public readonly UpdateConfigurationDefinition: string;
```

- *Type:* string

[Write] ssm-quicksetup:UpdateConfigurationDefinition.

---

##### `UpdateConfigurationManager`<sup>Required</sup> <a name="UpdateConfigurationManager" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.UpdateConfigurationManager"></a>

```typescript
public readonly UpdateConfigurationManager: string;
```

- *Type:* string

[Write] ssm-quicksetup:UpdateConfigurationManager.

---

##### `UpdateServiceSettings`<sup>Required</sup> <a name="UpdateServiceSettings" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupActions.property.UpdateServiceSettings"></a>

```typescript
public readonly UpdateServiceSettings: string;
```

- *Type:* string

[Write] ssm-quicksetup:UpdateServiceSettings.

---

### SSMQuicksetupConditions <a name="SSMQuicksetupConditions" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions"></a>

Condition key constants and builders for ssm-quicksetup.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.Initializer"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

new ssm_quicksetup.SSMQuicksetupConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.requestTag"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

ssm_quicksetup.SSMQuicksetupConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.resourceTag"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

ssm_quicksetup.SSMQuicksetupConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.tagKeys"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

ssm_quicksetup.SSMQuicksetupConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SSMQuicksetupOperations <a name="SSMQuicksetupOperations" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations"></a>

API operation to required IAM actions mapping for ssm-quicksetup.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.Initializer"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

new ssm_quicksetup.SSMQuicksetupOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.CreateConfigurationManager">CreateConfigurationManager</a></code> | <code>string[]</code> | IAM actions required for the CreateConfigurationManager API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.DeleteConfigurationManager">DeleteConfigurationManager</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationManager API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.ListConfigurationManagers">ListConfigurationManagers</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationManagers API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.ListConfigurations">ListConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurations API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.ListQuickSetupTypes">ListQuickSetupTypes</a></code> | <code>string[]</code> | IAM actions required for the ListQuickSetupTypes API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.opGetConfiguration">opGetConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.opGetConfigurationManager">opGetConfigurationManager</a></code> | <code>string[]</code> | IAM actions required for the GetConfigurationManager API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.opGetServiceSettings">opGetServiceSettings</a></code> | <code>string[]</code> | IAM actions required for the GetServiceSettings API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.UpdateConfigurationDefinition">UpdateConfigurationDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationDefinition API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.UpdateConfigurationManager">UpdateConfigurationManager</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationManager API call. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.UpdateServiceSettings">UpdateServiceSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceSettings API call. |

---

##### `CreateConfigurationManager`<sup>Required</sup> <a name="CreateConfigurationManager" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.CreateConfigurationManager"></a>

```typescript
public readonly CreateConfigurationManager: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfigurationManager API call.

---

##### `DeleteConfigurationManager`<sup>Required</sup> <a name="DeleteConfigurationManager" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.DeleteConfigurationManager"></a>

```typescript
public readonly DeleteConfigurationManager: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationManager API call.

---

##### `ListConfigurationManagers`<sup>Required</sup> <a name="ListConfigurationManagers" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.ListConfigurationManagers"></a>

```typescript
public readonly ListConfigurationManagers: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationManagers API call.

---

##### `ListConfigurations`<sup>Required</sup> <a name="ListConfigurations" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.ListConfigurations"></a>

```typescript
public readonly ListConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurations API call.

---

##### `ListQuickSetupTypes`<sup>Required</sup> <a name="ListQuickSetupTypes" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.ListQuickSetupTypes"></a>

```typescript
public readonly ListQuickSetupTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListQuickSetupTypes API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetConfiguration`<sup>Required</sup> <a name="opGetConfiguration" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.opGetConfiguration"></a>

```typescript
public readonly opGetConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetConfiguration API call.

---

##### `opGetConfigurationManager`<sup>Required</sup> <a name="opGetConfigurationManager" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.opGetConfigurationManager"></a>

```typescript
public readonly opGetConfigurationManager: string[];
```

- *Type:* string[]

IAM actions required for the GetConfigurationManager API call.

---

##### `opGetServiceSettings`<sup>Required</sup> <a name="opGetServiceSettings" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.opGetServiceSettings"></a>

```typescript
public readonly opGetServiceSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceSettings API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateConfigurationDefinition`<sup>Required</sup> <a name="UpdateConfigurationDefinition" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.UpdateConfigurationDefinition"></a>

```typescript
public readonly UpdateConfigurationDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationDefinition API call.

---

##### `UpdateConfigurationManager`<sup>Required</sup> <a name="UpdateConfigurationManager" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.UpdateConfigurationManager"></a>

```typescript
public readonly UpdateConfigurationManager: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationManager API call.

---

##### `UpdateServiceSettings`<sup>Required</sup> <a name="UpdateServiceSettings" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupOperations.property.UpdateServiceSettings"></a>

```typescript
public readonly UpdateServiceSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceSettings API call.

---

### SSMQuicksetupResources <a name="SSMQuicksetupResources" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupResources"></a>

ARN builders, validators, and parsers for ssm-quicksetup resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupResources.Initializer"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

new ssm_quicksetup.SSMQuicksetupResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupResources.configurationManager">configurationManager</a></code> | Builds an ARN for the configuration-manager resource. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupResources.isValidConfigurationManagerArn">isValidConfigurationManagerArn</a></code> | Validates whether a string is a valid ARN for the configuration-manager resource. |
| <code><a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupResources.parseConfigurationManagerArn">parseConfigurationManagerArn</a></code> | Parses a configuration-manager ARN into its components. |

---

##### `configurationManager` <a name="configurationManager" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupResources.configurationManager"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

ssm_quicksetup.SSMQuicksetupResources.configurationManager(props: SSMQuicksetupConfigurationManagerArnProps)
```

Builds an ARN for the configuration-manager resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupResources.configurationManager.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupConfigurationManagerArnProps">SSMQuicksetupConfigurationManagerArnProps</a>

---

##### `isValidConfigurationManagerArn` <a name="isValidConfigurationManagerArn" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupResources.isValidConfigurationManagerArn"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

ssm_quicksetup.SSMQuicksetupResources.isValidConfigurationManagerArn(arn: string)
```

Validates whether a string is a valid ARN for the configuration-manager resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupResources.isValidConfigurationManagerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationManagerArn` <a name="parseConfigurationManagerArn" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupResources.parseConfigurationManagerArn"></a>

```typescript
import { ssm_quicksetup } from '@cdk_utils/iam'

ssm_quicksetup.SSMQuicksetupResources.parseConfigurationManagerArn(arn: string)
```

Parses a configuration-manager ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm_quicksetup.SSMQuicksetupResources.parseConfigurationManagerArn.parameter.arn"></a>

- *Type:* string

---




