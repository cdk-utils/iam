# `freertos` Submodule <a name="`freertos` Submodule" id="@cdk_utils/iam.freertos"></a>


## Structs <a name="Structs" id="Structs"></a>

### FreertosConfigurationArnComponents <a name="FreertosConfigurationArnComponents" id="@cdk_utils/iam.freertos.FreertosConfigurationArnComponents"></a>

Parsed components of a configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.freertos.FreertosConfigurationArnComponents.Initializer"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

const freertosConfigurationArnComponents: freertos.FreertosConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConfigurationArnComponents.property.configurationName">configurationName</a></code> | <code>string</code> | The ConfigurationName component. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.freertos.FreertosConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdk_utils/iam.freertos.FreertosConfigurationArnComponents.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

The ConfigurationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.freertos.FreertosConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.freertos.FreertosConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FreertosConfigurationArnProps <a name="FreertosConfigurationArnProps" id="@cdk_utils/iam.freertos.FreertosConfigurationArnProps"></a>

Properties for building a configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.freertos.FreertosConfigurationArnProps.Initializer"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

const freertosConfigurationArnProps: freertos.FreertosConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConfigurationArnProps.property.configurationName">configurationName</a></code> | <code>string</code> | The ConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdk_utils/iam.freertos.FreertosConfigurationArnProps.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

The ConfigurationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.freertos.FreertosConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.freertos.FreertosConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.freertos.FreertosConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FreertosSubscriptionArnComponents <a name="FreertosSubscriptionArnComponents" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnComponents"></a>

Parsed components of a subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnComponents.Initializer"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

const freertosSubscriptionArnComponents: freertos.FreertosSubscriptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.freertos.FreertosSubscriptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosSubscriptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosSubscriptionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosSubscriptionArnComponents.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The SubscriptionID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnComponents.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The SubscriptionID component.

---

### FreertosSubscriptionArnProps <a name="FreertosSubscriptionArnProps" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnProps"></a>

Properties for building a subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnProps.Initializer"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

const freertosSubscriptionArnProps: freertos.FreertosSubscriptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.freertos.FreertosSubscriptionArnProps.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The SubscriptionID component of the ARN. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosSubscriptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosSubscriptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosSubscriptionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnProps.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The SubscriptionID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.freertos.FreertosSubscriptionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### FreertosActions <a name="FreertosActions" id="@cdk_utils/iam.freertos.FreertosActions"></a>

IAM action constants for the freertos service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.freertos.FreertosActions.Initializer"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

new freertos.FreertosActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.actionGetEmpPatchUrl">actionGetEmpPatchUrl</a></code> | <code>string</code> | [Read] freertos:GetEmpPatchUrl. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.actionGetSoftwareURL">actionGetSoftwareURL</a></code> | <code>string</code> | [Read] freertos:GetSoftwareURL. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.actionGetSoftwareURLForConfiguration">actionGetSoftwareURLForConfiguration</a></code> | <code>string</code> | [Read] freertos:GetSoftwareURLForConfiguration. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.actionGetSubscriptionBillingAmount">actionGetSubscriptionBillingAmount</a></code> | <code>string</code> | [Read] freertos:GetSubscriptionBillingAmount. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.CreateSoftwareConfiguration">CreateSoftwareConfiguration</a></code> | <code>string</code> | [Write] freertos:CreateSoftwareConfiguration. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.CreateSubscription">CreateSubscription</a></code> | <code>string</code> | [Write] freertos:CreateSubscription. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.DeleteSoftwareConfiguration">DeleteSoftwareConfiguration</a></code> | <code>string</code> | [Write] freertos:DeleteSoftwareConfiguration. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.DescribeHardwarePlatform">DescribeHardwarePlatform</a></code> | <code>string</code> | [Read] freertos:DescribeHardwarePlatform. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.DescribeSoftwareConfiguration">DescribeSoftwareConfiguration</a></code> | <code>string</code> | [Read] freertos:DescribeSoftwareConfiguration. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.DescribeSubscription">DescribeSubscription</a></code> | <code>string</code> | [Read] freertos:DescribeSubscription. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.ListFreeRTOSVersions">ListFreeRTOSVersions</a></code> | <code>string</code> | [List] freertos:ListFreeRTOSVersions. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.ListHardwarePlatforms">ListHardwarePlatforms</a></code> | <code>string</code> | [List] freertos:ListHardwarePlatforms. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.ListHardwareVendors">ListHardwareVendors</a></code> | <code>string</code> | [List] freertos:ListHardwareVendors. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.ListSoftwareConfigurations">ListSoftwareConfigurations</a></code> | <code>string</code> | [List] freertos:ListSoftwareConfigurations. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.ListSoftwarePatches">ListSoftwarePatches</a></code> | <code>string</code> | [List] freertos:ListSoftwarePatches. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.ListSubscriptionEmails">ListSubscriptionEmails</a></code> | <code>string</code> | [List] freertos:ListSubscriptionEmails. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string</code> | [List] freertos:ListSubscriptions. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.UpdateEmailRecipients">UpdateEmailRecipients</a></code> | <code>string</code> | [Write] freertos:UpdateEmailRecipients. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.UpdateSoftwareConfiguration">UpdateSoftwareConfiguration</a></code> | <code>string</code> | [Write] freertos:UpdateSoftwareConfiguration. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosActions.property.VerifyEmail">VerifyEmail</a></code> | <code>string</code> | [Write] freertos:VerifyEmail. |

---

##### `actionGetEmpPatchUrl`<sup>Required</sup> <a name="actionGetEmpPatchUrl" id="@cdk_utils/iam.freertos.FreertosActions.property.actionGetEmpPatchUrl"></a>

```typescript
public readonly actionGetEmpPatchUrl: string;
```

- *Type:* string

[Read] freertos:GetEmpPatchUrl.

---

##### `actionGetSoftwareURL`<sup>Required</sup> <a name="actionGetSoftwareURL" id="@cdk_utils/iam.freertos.FreertosActions.property.actionGetSoftwareURL"></a>

```typescript
public readonly actionGetSoftwareURL: string;
```

- *Type:* string

[Read] freertos:GetSoftwareURL.

---

##### `actionGetSoftwareURLForConfiguration`<sup>Required</sup> <a name="actionGetSoftwareURLForConfiguration" id="@cdk_utils/iam.freertos.FreertosActions.property.actionGetSoftwareURLForConfiguration"></a>

```typescript
public readonly actionGetSoftwareURLForConfiguration: string;
```

- *Type:* string

[Read] freertos:GetSoftwareURLForConfiguration.

---

##### `actionGetSubscriptionBillingAmount`<sup>Required</sup> <a name="actionGetSubscriptionBillingAmount" id="@cdk_utils/iam.freertos.FreertosActions.property.actionGetSubscriptionBillingAmount"></a>

```typescript
public readonly actionGetSubscriptionBillingAmount: string;
```

- *Type:* string

[Read] freertos:GetSubscriptionBillingAmount.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.freertos.FreertosActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.freertos.FreertosActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.freertos.FreertosActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.freertos.FreertosActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.freertos.FreertosActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateSoftwareConfiguration`<sup>Required</sup> <a name="CreateSoftwareConfiguration" id="@cdk_utils/iam.freertos.FreertosActions.property.CreateSoftwareConfiguration"></a>

```typescript
public readonly CreateSoftwareConfiguration: string;
```

- *Type:* string

[Write] freertos:CreateSoftwareConfiguration.

---

##### `CreateSubscription`<sup>Required</sup> <a name="CreateSubscription" id="@cdk_utils/iam.freertos.FreertosActions.property.CreateSubscription"></a>

```typescript
public readonly CreateSubscription: string;
```

- *Type:* string

[Write] freertos:CreateSubscription.

---

##### `DeleteSoftwareConfiguration`<sup>Required</sup> <a name="DeleteSoftwareConfiguration" id="@cdk_utils/iam.freertos.FreertosActions.property.DeleteSoftwareConfiguration"></a>

```typescript
public readonly DeleteSoftwareConfiguration: string;
```

- *Type:* string

[Write] freertos:DeleteSoftwareConfiguration.

---

##### `DescribeHardwarePlatform`<sup>Required</sup> <a name="DescribeHardwarePlatform" id="@cdk_utils/iam.freertos.FreertosActions.property.DescribeHardwarePlatform"></a>

```typescript
public readonly DescribeHardwarePlatform: string;
```

- *Type:* string

[Read] freertos:DescribeHardwarePlatform.

---

##### `DescribeSoftwareConfiguration`<sup>Required</sup> <a name="DescribeSoftwareConfiguration" id="@cdk_utils/iam.freertos.FreertosActions.property.DescribeSoftwareConfiguration"></a>

```typescript
public readonly DescribeSoftwareConfiguration: string;
```

- *Type:* string

[Read] freertos:DescribeSoftwareConfiguration.

---

##### `DescribeSubscription`<sup>Required</sup> <a name="DescribeSubscription" id="@cdk_utils/iam.freertos.FreertosActions.property.DescribeSubscription"></a>

```typescript
public readonly DescribeSubscription: string;
```

- *Type:* string

[Read] freertos:DescribeSubscription.

---

##### `ListFreeRTOSVersions`<sup>Required</sup> <a name="ListFreeRTOSVersions" id="@cdk_utils/iam.freertos.FreertosActions.property.ListFreeRTOSVersions"></a>

```typescript
public readonly ListFreeRTOSVersions: string;
```

- *Type:* string

[List] freertos:ListFreeRTOSVersions.

---

##### `ListHardwarePlatforms`<sup>Required</sup> <a name="ListHardwarePlatforms" id="@cdk_utils/iam.freertos.FreertosActions.property.ListHardwarePlatforms"></a>

```typescript
public readonly ListHardwarePlatforms: string;
```

- *Type:* string

[List] freertos:ListHardwarePlatforms.

---

##### `ListHardwareVendors`<sup>Required</sup> <a name="ListHardwareVendors" id="@cdk_utils/iam.freertos.FreertosActions.property.ListHardwareVendors"></a>

```typescript
public readonly ListHardwareVendors: string;
```

- *Type:* string

[List] freertos:ListHardwareVendors.

---

##### `ListSoftwareConfigurations`<sup>Required</sup> <a name="ListSoftwareConfigurations" id="@cdk_utils/iam.freertos.FreertosActions.property.ListSoftwareConfigurations"></a>

```typescript
public readonly ListSoftwareConfigurations: string;
```

- *Type:* string

[List] freertos:ListSoftwareConfigurations.

---

##### `ListSoftwarePatches`<sup>Required</sup> <a name="ListSoftwarePatches" id="@cdk_utils/iam.freertos.FreertosActions.property.ListSoftwarePatches"></a>

```typescript
public readonly ListSoftwarePatches: string;
```

- *Type:* string

[List] freertos:ListSoftwarePatches.

---

##### `ListSubscriptionEmails`<sup>Required</sup> <a name="ListSubscriptionEmails" id="@cdk_utils/iam.freertos.FreertosActions.property.ListSubscriptionEmails"></a>

```typescript
public readonly ListSubscriptionEmails: string;
```

- *Type:* string

[List] freertos:ListSubscriptionEmails.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.freertos.FreertosActions.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string;
```

- *Type:* string

[List] freertos:ListSubscriptions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.freertos.FreertosActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateEmailRecipients`<sup>Required</sup> <a name="UpdateEmailRecipients" id="@cdk_utils/iam.freertos.FreertosActions.property.UpdateEmailRecipients"></a>

```typescript
public readonly UpdateEmailRecipients: string;
```

- *Type:* string

[Write] freertos:UpdateEmailRecipients.

---

##### `UpdateSoftwareConfiguration`<sup>Required</sup> <a name="UpdateSoftwareConfiguration" id="@cdk_utils/iam.freertos.FreertosActions.property.UpdateSoftwareConfiguration"></a>

```typescript
public readonly UpdateSoftwareConfiguration: string;
```

- *Type:* string

[Write] freertos:UpdateSoftwareConfiguration.

---

##### `VerifyEmail`<sup>Required</sup> <a name="VerifyEmail" id="@cdk_utils/iam.freertos.FreertosActions.property.VerifyEmail"></a>

```typescript
public readonly VerifyEmail: string;
```

- *Type:* string

[Write] freertos:VerifyEmail.

---

### FreertosConditions <a name="FreertosConditions" id="@cdk_utils/iam.freertos.FreertosConditions"></a>

Condition key constants and builders for freertos.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.freertos.FreertosConditions.Initializer"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

new freertos.FreertosConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.freertos.FreertosConditions.requestTag"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

freertos.FreertosConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.freertos.FreertosConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.freertos.FreertosConditions.resourceTag"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

freertos.FreertosConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.freertos.FreertosConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.freertos.FreertosConditions.tagKeys"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

freertos.FreertosConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.freertos.FreertosConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConditions.property.CreateSoftwareConfigurationConditionKeys">CreateSoftwareConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSoftwareConfiguration action. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosConditions.property.CreateSubscriptionConditionKeys">CreateSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSubscription action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.freertos.FreertosConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.freertos.FreertosConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.freertos.FreertosConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateSoftwareConfigurationConditionKeys`<sup>Required</sup> <a name="CreateSoftwareConfigurationConditionKeys" id="@cdk_utils/iam.freertos.FreertosConditions.property.CreateSoftwareConfigurationConditionKeys"></a>

```typescript
public readonly CreateSoftwareConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSoftwareConfiguration action.

---

##### `CreateSubscriptionConditionKeys`<sup>Required</sup> <a name="CreateSubscriptionConditionKeys" id="@cdk_utils/iam.freertos.FreertosConditions.property.CreateSubscriptionConditionKeys"></a>

```typescript
public readonly CreateSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSubscription action.

---

### FreertosResources <a name="FreertosResources" id="@cdk_utils/iam.freertos.FreertosResources"></a>

ARN builders, validators, and parsers for freertos resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.freertos.FreertosResources.Initializer"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

new freertos.FreertosResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.freertos.FreertosResources.configuration">configuration</a></code> | Builds an ARN for the configuration resource. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosResources.isValidConfigurationArn">isValidConfigurationArn</a></code> | Validates whether a string is a valid ARN for the configuration resource. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosResources.isValidSubscriptionArn">isValidSubscriptionArn</a></code> | Validates whether a string is a valid ARN for the subscription resource. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosResources.parseConfigurationArn">parseConfigurationArn</a></code> | Parses a configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosResources.parseSubscriptionArn">parseSubscriptionArn</a></code> | Parses a subscription ARN into its components. |
| <code><a href="#@cdk_utils/iam.freertos.FreertosResources.subscription">subscription</a></code> | Builds an ARN for the subscription resource. |

---

##### `configuration` <a name="configuration" id="@cdk_utils/iam.freertos.FreertosResources.configuration"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

freertos.FreertosResources.configuration(props: FreertosConfigurationArnProps)
```

Builds an ARN for the configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.freertos.FreertosResources.configuration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.freertos.FreertosConfigurationArnProps">FreertosConfigurationArnProps</a>

---

##### `isValidConfigurationArn` <a name="isValidConfigurationArn" id="@cdk_utils/iam.freertos.FreertosResources.isValidConfigurationArn"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

freertos.FreertosResources.isValidConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.freertos.FreertosResources.isValidConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSubscriptionArn` <a name="isValidSubscriptionArn" id="@cdk_utils/iam.freertos.FreertosResources.isValidSubscriptionArn"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

freertos.FreertosResources.isValidSubscriptionArn(arn: string)
```

Validates whether a string is a valid ARN for the subscription resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.freertos.FreertosResources.isValidSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationArn` <a name="parseConfigurationArn" id="@cdk_utils/iam.freertos.FreertosResources.parseConfigurationArn"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

freertos.FreertosResources.parseConfigurationArn(arn: string)
```

Parses a configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.freertos.FreertosResources.parseConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubscriptionArn` <a name="parseSubscriptionArn" id="@cdk_utils/iam.freertos.FreertosResources.parseSubscriptionArn"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

freertos.FreertosResources.parseSubscriptionArn(arn: string)
```

Parses a subscription ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.freertos.FreertosResources.parseSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `subscription` <a name="subscription" id="@cdk_utils/iam.freertos.FreertosResources.subscription"></a>

```typescript
import { freertos } from '@cdk_utils/iam'

freertos.FreertosResources.subscription(props: FreertosSubscriptionArnProps)
```

Builds an ARN for the subscription resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.freertos.FreertosResources.subscription.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.freertos.FreertosSubscriptionArnProps">FreertosSubscriptionArnProps</a>

---




