# `license_manager_linux_subscriptions` Submodule <a name="`license_manager_linux_subscriptions` Submodule" id="@cdk_utils/iam.license_manager_linux_subscriptions"></a>


## Structs <a name="Structs" id="Structs"></a>

### LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents <a name="LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents"></a>

Parsed components of a subscription-provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents.Initializer"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

const licenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents: license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents.property.subscriptionProviderId">subscriptionProviderId</a></code> | <code>string</code> | The SubscriptionProviderId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subscriptionProviderId`<sup>Required</sup> <a name="subscriptionProviderId" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnComponents.property.subscriptionProviderId"></a>

```typescript
public readonly subscriptionProviderId: string;
```

- *Type:* string

The SubscriptionProviderId component.

---

### LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps <a name="LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps"></a>

Properties for building a subscription-provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps.Initializer"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

const licenseManagerLinuxSubscriptionsSubscriptionProviderArnProps: license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps.property.subscriptionProviderId">subscriptionProviderId</a></code> | <code>string</code> | The SubscriptionProviderId component of the ARN. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `subscriptionProviderId`<sup>Required</sup> <a name="subscriptionProviderId" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps.property.subscriptionProviderId"></a>

```typescript
public readonly subscriptionProviderId: string;
```

- *Type:* string

The SubscriptionProviderId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### LicenseManagerLinuxSubscriptionsActions <a name="LicenseManagerLinuxSubscriptionsActions" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions"></a>

IAM action constants for the license-manager-linux-subscriptions service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.Initializer"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

new license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.actionGetRegisteredSubscriptionProvider">actionGetRegisteredSubscriptionProvider</a></code> | <code>string</code> | [Read] license-manager-linux-subscriptions:GetRegisteredSubscriptionProvider. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.actionGetServiceSettings">actionGetServiceSettings</a></code> | <code>string</code> | [Read] license-manager-linux-subscriptions:GetServiceSettings. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.DeregisterSubscriptionProvider">DeregisterSubscriptionProvider</a></code> | <code>string</code> | [Write] license-manager-linux-subscriptions:DeregisterSubscriptionProvider. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.ListLinuxSubscriptionInstances">ListLinuxSubscriptionInstances</a></code> | <code>string</code> | [Read] license-manager-linux-subscriptions:ListLinuxSubscriptionInstances. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.ListLinuxSubscriptions">ListLinuxSubscriptions</a></code> | <code>string</code> | [Read] license-manager-linux-subscriptions:ListLinuxSubscriptions. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.ListRegisteredSubscriptionProviders">ListRegisteredSubscriptionProviders</a></code> | <code>string</code> | [Read] license-manager-linux-subscriptions:ListRegisteredSubscriptionProviders. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] license-manager-linux-subscriptions:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.RegisterSubscriptionProvider">RegisterSubscriptionProvider</a></code> | <code>string</code> | [Write] license-manager-linux-subscriptions:RegisterSubscriptionProvider. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] license-manager-linux-subscriptions:TagResource. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] license-manager-linux-subscriptions:UntagResource. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.UpdateServiceSettings">UpdateServiceSettings</a></code> | <code>string</code> | [Write] license-manager-linux-subscriptions:UpdateServiceSettings. |

---

##### `actionGetRegisteredSubscriptionProvider`<sup>Required</sup> <a name="actionGetRegisteredSubscriptionProvider" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.actionGetRegisteredSubscriptionProvider"></a>

```typescript
public readonly actionGetRegisteredSubscriptionProvider: string;
```

- *Type:* string

[Read] license-manager-linux-subscriptions:GetRegisteredSubscriptionProvider.

---

##### `actionGetServiceSettings`<sup>Required</sup> <a name="actionGetServiceSettings" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.actionGetServiceSettings"></a>

```typescript
public readonly actionGetServiceSettings: string;
```

- *Type:* string

[Read] license-manager-linux-subscriptions:GetServiceSettings.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeregisterSubscriptionProvider`<sup>Required</sup> <a name="DeregisterSubscriptionProvider" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.DeregisterSubscriptionProvider"></a>

```typescript
public readonly DeregisterSubscriptionProvider: string;
```

- *Type:* string

[Write] license-manager-linux-subscriptions:DeregisterSubscriptionProvider.

---

##### `ListLinuxSubscriptionInstances`<sup>Required</sup> <a name="ListLinuxSubscriptionInstances" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.ListLinuxSubscriptionInstances"></a>

```typescript
public readonly ListLinuxSubscriptionInstances: string;
```

- *Type:* string

[Read] license-manager-linux-subscriptions:ListLinuxSubscriptionInstances.

---

##### `ListLinuxSubscriptions`<sup>Required</sup> <a name="ListLinuxSubscriptions" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.ListLinuxSubscriptions"></a>

```typescript
public readonly ListLinuxSubscriptions: string;
```

- *Type:* string

[Read] license-manager-linux-subscriptions:ListLinuxSubscriptions.

---

##### `ListRegisteredSubscriptionProviders`<sup>Required</sup> <a name="ListRegisteredSubscriptionProviders" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.ListRegisteredSubscriptionProviders"></a>

```typescript
public readonly ListRegisteredSubscriptionProviders: string;
```

- *Type:* string

[Read] license-manager-linux-subscriptions:ListRegisteredSubscriptionProviders.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] license-manager-linux-subscriptions:ListTagsForResource.

---

##### `RegisterSubscriptionProvider`<sup>Required</sup> <a name="RegisterSubscriptionProvider" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.RegisterSubscriptionProvider"></a>

```typescript
public readonly RegisterSubscriptionProvider: string;
```

- *Type:* string

[Write] license-manager-linux-subscriptions:RegisterSubscriptionProvider.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] license-manager-linux-subscriptions:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] license-manager-linux-subscriptions:UntagResource.

---

##### `UpdateServiceSettings`<sup>Required</sup> <a name="UpdateServiceSettings" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsActions.property.UpdateServiceSettings"></a>

```typescript
public readonly UpdateServiceSettings: string;
```

- *Type:* string

[Write] license-manager-linux-subscriptions:UpdateServiceSettings.

---

### LicenseManagerLinuxSubscriptionsConditions <a name="LicenseManagerLinuxSubscriptionsConditions" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions"></a>

Condition key constants and builders for license-manager-linux-subscriptions.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.Initializer"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

new license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.requestTag"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.resourceTag"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.tagKeys"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.RegisterSubscriptionProviderConditionKeys">RegisterSubscriptionProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterSubscriptionProvider action. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `RegisterSubscriptionProviderConditionKeys`<sup>Required</sup> <a name="RegisterSubscriptionProviderConditionKeys" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.RegisterSubscriptionProviderConditionKeys"></a>

```typescript
public readonly RegisterSubscriptionProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterSubscriptionProvider action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### LicenseManagerLinuxSubscriptionsOperations <a name="LicenseManagerLinuxSubscriptionsOperations" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations"></a>

API operation to required IAM actions mapping for license-manager-linux-subscriptions.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.Initializer"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

new license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.DeregisterSubscriptionProvider">DeregisterSubscriptionProvider</a></code> | <code>string[]</code> | IAM actions required for the DeregisterSubscriptionProvider API call. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.ListLinuxSubscriptionInstances">ListLinuxSubscriptionInstances</a></code> | <code>string[]</code> | IAM actions required for the ListLinuxSubscriptionInstances API call. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.ListLinuxSubscriptions">ListLinuxSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListLinuxSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.ListRegisteredSubscriptionProviders">ListRegisteredSubscriptionProviders</a></code> | <code>string[]</code> | IAM actions required for the ListRegisteredSubscriptionProviders API call. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.opGetRegisteredSubscriptionProvider">opGetRegisteredSubscriptionProvider</a></code> | <code>string[]</code> | IAM actions required for the GetRegisteredSubscriptionProvider API call. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.opGetServiceSettings">opGetServiceSettings</a></code> | <code>string[]</code> | IAM actions required for the GetServiceSettings API call. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.RegisterSubscriptionProvider">RegisterSubscriptionProvider</a></code> | <code>string[]</code> | IAM actions required for the RegisterSubscriptionProvider API call. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.UpdateServiceSettings">UpdateServiceSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceSettings API call. |

---

##### `DeregisterSubscriptionProvider`<sup>Required</sup> <a name="DeregisterSubscriptionProvider" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.DeregisterSubscriptionProvider"></a>

```typescript
public readonly DeregisterSubscriptionProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterSubscriptionProvider API call.

---

##### `ListLinuxSubscriptionInstances`<sup>Required</sup> <a name="ListLinuxSubscriptionInstances" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.ListLinuxSubscriptionInstances"></a>

```typescript
public readonly ListLinuxSubscriptionInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListLinuxSubscriptionInstances API call.

---

##### `ListLinuxSubscriptions`<sup>Required</sup> <a name="ListLinuxSubscriptions" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.ListLinuxSubscriptions"></a>

```typescript
public readonly ListLinuxSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListLinuxSubscriptions API call.

---

##### `ListRegisteredSubscriptionProviders`<sup>Required</sup> <a name="ListRegisteredSubscriptionProviders" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.ListRegisteredSubscriptionProviders"></a>

```typescript
public readonly ListRegisteredSubscriptionProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListRegisteredSubscriptionProviders API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetRegisteredSubscriptionProvider`<sup>Required</sup> <a name="opGetRegisteredSubscriptionProvider" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.opGetRegisteredSubscriptionProvider"></a>

```typescript
public readonly opGetRegisteredSubscriptionProvider: string[];
```

- *Type:* string[]

IAM actions required for the GetRegisteredSubscriptionProvider API call.

---

##### `opGetServiceSettings`<sup>Required</sup> <a name="opGetServiceSettings" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.opGetServiceSettings"></a>

```typescript
public readonly opGetServiceSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceSettings API call.

---

##### `RegisterSubscriptionProvider`<sup>Required</sup> <a name="RegisterSubscriptionProvider" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.RegisterSubscriptionProvider"></a>

```typescript
public readonly RegisterSubscriptionProvider: string[];
```

- *Type:* string[]

IAM actions required for the RegisterSubscriptionProvider API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateServiceSettings`<sup>Required</sup> <a name="UpdateServiceSettings" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsOperations.property.UpdateServiceSettings"></a>

```typescript
public readonly UpdateServiceSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceSettings API call.

---

### LicenseManagerLinuxSubscriptionsResources <a name="LicenseManagerLinuxSubscriptionsResources" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources"></a>

ARN builders, validators, and parsers for license-manager-linux-subscriptions resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.Initializer"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

new license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.isValidSubscriptionProviderArn">isValidSubscriptionProviderArn</a></code> | Validates whether a string is a valid ARN for the subscription-provider resource. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.parseSubscriptionProviderArn">parseSubscriptionProviderArn</a></code> | Parses a subscription-provider ARN into its components. |
| <code><a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.subscriptionProvider">subscriptionProvider</a></code> | Builds an ARN for the subscription-provider resource. |

---

##### `isValidSubscriptionProviderArn` <a name="isValidSubscriptionProviderArn" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.isValidSubscriptionProviderArn"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.isValidSubscriptionProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the subscription-provider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.isValidSubscriptionProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubscriptionProviderArn` <a name="parseSubscriptionProviderArn" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.parseSubscriptionProviderArn"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.parseSubscriptionProviderArn(arn: string)
```

Parses a subscription-provider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.parseSubscriptionProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `subscriptionProvider` <a name="subscriptionProvider" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.subscriptionProvider"></a>

```typescript
import { license_manager_linux_subscriptions } from '@cdk_utils/iam'

license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.subscriptionProvider(props: LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps)
```

Builds an ARN for the subscription-provider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsResources.subscriptionProvider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.license_manager_linux_subscriptions.LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps">LicenseManagerLinuxSubscriptionsSubscriptionProviderArnProps</a>

---




