# `pricingplanmanager` Submodule <a name="`pricingplanmanager` Submodule" id="@cdk_utils/iam.pricingplanmanager"></a>


## Structs <a name="Structs" id="Structs"></a>

### PricingplanmanagerSubscriptionArnComponents <a name="PricingplanmanagerSubscriptionArnComponents" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnComponents"></a>

Parsed components of a subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnComponents.Initializer"></a>

```typescript
import { pricingplanmanager } from '@cdk_utils/iam'

const pricingplanmanagerSubscriptionArnComponents: pricingplanmanager.PricingplanmanagerSubscriptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnComponents.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The SubscriptionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnComponents.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The SubscriptionId component.

---

### PricingplanmanagerSubscriptionArnProps <a name="PricingplanmanagerSubscriptionArnProps" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnProps"></a>

Properties for building a subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnProps.Initializer"></a>

```typescript
import { pricingplanmanager } from '@cdk_utils/iam'

const pricingplanmanagerSubscriptionArnProps: pricingplanmanager.PricingplanmanagerSubscriptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnProps.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The SubscriptionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnProps.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The SubscriptionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### PricingplanmanagerActions <a name="PricingplanmanagerActions" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions"></a>

IAM action constants for the pricingplanmanager service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.Initializer"></a>

```typescript
import { pricingplanmanager } from '@cdk_utils/iam'

new pricingplanmanager.PricingplanmanagerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.actionGetSubscription">actionGetSubscription</a></code> | <code>string</code> | [Read] pricingplanmanager:GetSubscription. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.ApprovePaidSubscription">ApprovePaidSubscription</a></code> | <code>string</code> | [Write] pricingplanmanager:ApprovePaidSubscription. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AssociateResourcesToSubscription">AssociateResourcesToSubscription</a></code> | <code>string</code> | [Write] pricingplanmanager:AssociateResourcesToSubscription. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.CancelSubscription">CancelSubscription</a></code> | <code>string</code> | [Write] pricingplanmanager:CancelSubscription. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.CancelSubscriptionChange">CancelSubscriptionChange</a></code> | <code>string</code> | [Write] pricingplanmanager:CancelSubscriptionChange. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.CreateSubscription">CreateSubscription</a></code> | <code>string</code> | [Write] pricingplanmanager:CreateSubscription. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.DisassociateResourcesFromSubscription">DisassociateResourcesFromSubscription</a></code> | <code>string</code> | [Write] pricingplanmanager:DisassociateResourcesFromSubscription. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string</code> | [Read] pricingplanmanager:ListSubscriptions. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.UpdateSubscription">UpdateSubscription</a></code> | <code>string</code> | [Write] pricingplanmanager:UpdateSubscription. |

---

##### `actionGetSubscription`<sup>Required</sup> <a name="actionGetSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.actionGetSubscription"></a>

```typescript
public readonly actionGetSubscription: string;
```

- *Type:* string

[Read] pricingplanmanager:GetSubscription.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApprovePaidSubscription`<sup>Required</sup> <a name="ApprovePaidSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.ApprovePaidSubscription"></a>

```typescript
public readonly ApprovePaidSubscription: string;
```

- *Type:* string

[Write] pricingplanmanager:ApprovePaidSubscription.

---

##### `AssociateResourcesToSubscription`<sup>Required</sup> <a name="AssociateResourcesToSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.AssociateResourcesToSubscription"></a>

```typescript
public readonly AssociateResourcesToSubscription: string;
```

- *Type:* string

[Write] pricingplanmanager:AssociateResourcesToSubscription.

---

##### `CancelSubscription`<sup>Required</sup> <a name="CancelSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.CancelSubscription"></a>

```typescript
public readonly CancelSubscription: string;
```

- *Type:* string

[Write] pricingplanmanager:CancelSubscription.

---

##### `CancelSubscriptionChange`<sup>Required</sup> <a name="CancelSubscriptionChange" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.CancelSubscriptionChange"></a>

```typescript
public readonly CancelSubscriptionChange: string;
```

- *Type:* string

[Write] pricingplanmanager:CancelSubscriptionChange.

---

##### `CreateSubscription`<sup>Required</sup> <a name="CreateSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.CreateSubscription"></a>

```typescript
public readonly CreateSubscription: string;
```

- *Type:* string

[Write] pricingplanmanager:CreateSubscription.

---

##### `DisassociateResourcesFromSubscription`<sup>Required</sup> <a name="DisassociateResourcesFromSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.DisassociateResourcesFromSubscription"></a>

```typescript
public readonly DisassociateResourcesFromSubscription: string;
```

- *Type:* string

[Write] pricingplanmanager:DisassociateResourcesFromSubscription.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string;
```

- *Type:* string

[Read] pricingplanmanager:ListSubscriptions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateSubscription`<sup>Required</sup> <a name="UpdateSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerActions.property.UpdateSubscription"></a>

```typescript
public readonly UpdateSubscription: string;
```

- *Type:* string

[Write] pricingplanmanager:UpdateSubscription.

---

### PricingplanmanagerOperations <a name="PricingplanmanagerOperations" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations"></a>

API operation to required IAM actions mapping for pricingplanmanager.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.Initializer"></a>

```typescript
import { pricingplanmanager } from '@cdk_utils/iam'

new pricingplanmanager.PricingplanmanagerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.ApprovePaidSubscription">ApprovePaidSubscription</a></code> | <code>string[]</code> | IAM actions required for the ApprovePaidSubscription API call. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.AssociateResourcesToSubscription">AssociateResourcesToSubscription</a></code> | <code>string[]</code> | IAM actions required for the AssociateResourcesToSubscription API call. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.CancelSubscription">CancelSubscription</a></code> | <code>string[]</code> | IAM actions required for the CancelSubscription API call. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.CancelSubscriptionChange">CancelSubscriptionChange</a></code> | <code>string[]</code> | IAM actions required for the CancelSubscriptionChange API call. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.CreateSubscription">CreateSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscription API call. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.DisassociateResourcesFromSubscription">DisassociateResourcesFromSubscription</a></code> | <code>string[]</code> | IAM actions required for the DisassociateResourcesFromSubscription API call. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.opGetSubscription">opGetSubscription</a></code> | <code>string[]</code> | IAM actions required for the GetSubscription API call. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.UpdateSubscription">UpdateSubscription</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubscription API call. |

---

##### `ApprovePaidSubscription`<sup>Required</sup> <a name="ApprovePaidSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.ApprovePaidSubscription"></a>

```typescript
public readonly ApprovePaidSubscription: string[];
```

- *Type:* string[]

IAM actions required for the ApprovePaidSubscription API call.

---

##### `AssociateResourcesToSubscription`<sup>Required</sup> <a name="AssociateResourcesToSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.AssociateResourcesToSubscription"></a>

```typescript
public readonly AssociateResourcesToSubscription: string[];
```

- *Type:* string[]

IAM actions required for the AssociateResourcesToSubscription API call.

---

##### `CancelSubscription`<sup>Required</sup> <a name="CancelSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.CancelSubscription"></a>

```typescript
public readonly CancelSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CancelSubscription API call.

---

##### `CancelSubscriptionChange`<sup>Required</sup> <a name="CancelSubscriptionChange" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.CancelSubscriptionChange"></a>

```typescript
public readonly CancelSubscriptionChange: string[];
```

- *Type:* string[]

IAM actions required for the CancelSubscriptionChange API call.

---

##### `CreateSubscription`<sup>Required</sup> <a name="CreateSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.CreateSubscription"></a>

```typescript
public readonly CreateSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscription API call.

---

##### `DisassociateResourcesFromSubscription`<sup>Required</sup> <a name="DisassociateResourcesFromSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.DisassociateResourcesFromSubscription"></a>

```typescript
public readonly DisassociateResourcesFromSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateResourcesFromSubscription API call.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptions API call.

---

##### `opGetSubscription`<sup>Required</sup> <a name="opGetSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.opGetSubscription"></a>

```typescript
public readonly opGetSubscription: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscription API call.

---

##### `UpdateSubscription`<sup>Required</sup> <a name="UpdateSubscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerOperations.property.UpdateSubscription"></a>

```typescript
public readonly UpdateSubscription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubscription API call.

---

### PricingplanmanagerResources <a name="PricingplanmanagerResources" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerResources"></a>

ARN builders, validators, and parsers for pricingplanmanager resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerResources.Initializer"></a>

```typescript
import { pricingplanmanager } from '@cdk_utils/iam'

new pricingplanmanager.PricingplanmanagerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerResources.isValidSubscriptionArn">isValidSubscriptionArn</a></code> | Validates whether a string is a valid ARN for the subscription resource. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerResources.parseSubscriptionArn">parseSubscriptionArn</a></code> | Parses a subscription ARN into its components. |
| <code><a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerResources.subscription">subscription</a></code> | Builds an ARN for the subscription resource. |

---

##### `isValidSubscriptionArn` <a name="isValidSubscriptionArn" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerResources.isValidSubscriptionArn"></a>

```typescript
import { pricingplanmanager } from '@cdk_utils/iam'

pricingplanmanager.PricingplanmanagerResources.isValidSubscriptionArn(arn: string)
```

Validates whether a string is a valid ARN for the subscription resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerResources.isValidSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubscriptionArn` <a name="parseSubscriptionArn" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerResources.parseSubscriptionArn"></a>

```typescript
import { pricingplanmanager } from '@cdk_utils/iam'

pricingplanmanager.PricingplanmanagerResources.parseSubscriptionArn(arn: string)
```

Parses a subscription ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerResources.parseSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `subscription` <a name="subscription" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerResources.subscription"></a>

```typescript
import { pricingplanmanager } from '@cdk_utils/iam'

pricingplanmanager.PricingplanmanagerResources.subscription(props: PricingplanmanagerSubscriptionArnProps)
```

Builds an ARN for the subscription resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pricingplanmanager.PricingplanmanagerResources.subscription.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pricingplanmanager.PricingplanmanagerSubscriptionArnProps">PricingplanmanagerSubscriptionArnProps</a>

---




