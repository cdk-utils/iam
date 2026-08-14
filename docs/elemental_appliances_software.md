# `elemental_appliances_software` Submodule <a name="`elemental_appliances_software` Submodule" id="@cdk_utils/iam.elemental_appliances_software"></a>


## Structs <a name="Structs" id="Structs"></a>

### ElementalAppliancesSoftwareQuoteArnComponents <a name="ElementalAppliancesSoftwareQuoteArnComponents" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnComponents"></a>

Parsed components of a quote ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnComponents.Initializer"></a>

```typescript
import { elemental_appliances_software } from '@cdk_utils/iam'

const elementalAppliancesSoftwareQuoteArnComponents: elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ElementalAppliancesSoftwareQuoteArnProps <a name="ElementalAppliancesSoftwareQuoteArnProps" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps"></a>

Properties for building a quote ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps.Initializer"></a>

```typescript
import { elemental_appliances_software } from '@cdk_utils/iam'

const elementalAppliancesSoftwareQuoteArnProps: elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ElementalAppliancesSoftwareActions <a name="ElementalAppliancesSoftwareActions" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions"></a>

IAM action constants for the elemental-appliances-software service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.Initializer"></a>

```typescript
import { elemental_appliances_software } from '@cdk_utils/iam'

new elemental_appliances_software.ElementalAppliancesSoftwareActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetAvsCorrectAddress">actionGetAvsCorrectAddress</a></code> | <code>string</code> | [Read] elemental-appliances-software:GetAvsCorrectAddress. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetBillingAddresses">actionGetBillingAddresses</a></code> | <code>string</code> | [Read] elemental-appliances-software:GetBillingAddresses. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetDeliveryAddressesV2">actionGetDeliveryAddressesV2</a></code> | <code>string</code> | [Read] elemental-appliances-software:GetDeliveryAddressesV2. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetOrder">actionGetOrder</a></code> | <code>string</code> | [Read] elemental-appliances-software:GetOrder. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetOrdersV2">actionGetOrdersV2</a></code> | <code>string</code> | [Read] elemental-appliances-software:GetOrdersV2. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetQuote">actionGetQuote</a></code> | <code>string</code> | [Read] elemental-appliances-software:GetQuote. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetTaxes">actionGetTaxes</a></code> | <code>string</code> | [Read] elemental-appliances-software:GetTaxes. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.CompleteUpload">CompleteUpload</a></code> | <code>string</code> | [Write] elemental-appliances-software:CompleteUpload. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.CreateOrderV1">CreateOrderV1</a></code> | <code>string</code> | [Write] elemental-appliances-software:CreateOrderV1. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.CreateQuote">CreateQuote</a></code> | <code>string</code> | [Write] elemental-appliances-software:CreateQuote. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.ListQuotes">ListQuotes</a></code> | <code>string</code> | [List] elemental-appliances-software:ListQuotes. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.StartUpload">StartUpload</a></code> | <code>string</code> | [Write] elemental-appliances-software:StartUpload. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.SubmitOrderV1">SubmitOrderV1</a></code> | <code>string</code> | [Write] elemental-appliances-software:SubmitOrderV1. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.UpdateQuote">UpdateQuote</a></code> | <code>string</code> | [Write] elemental-appliances-software:UpdateQuote. |

---

##### `actionGetAvsCorrectAddress`<sup>Required</sup> <a name="actionGetAvsCorrectAddress" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetAvsCorrectAddress"></a>

```typescript
public readonly actionGetAvsCorrectAddress: string;
```

- *Type:* string

[Read] elemental-appliances-software:GetAvsCorrectAddress.

---

##### `actionGetBillingAddresses`<sup>Required</sup> <a name="actionGetBillingAddresses" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetBillingAddresses"></a>

```typescript
public readonly actionGetBillingAddresses: string;
```

- *Type:* string

[Read] elemental-appliances-software:GetBillingAddresses.

---

##### `actionGetDeliveryAddressesV2`<sup>Required</sup> <a name="actionGetDeliveryAddressesV2" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetDeliveryAddressesV2"></a>

```typescript
public readonly actionGetDeliveryAddressesV2: string;
```

- *Type:* string

[Read] elemental-appliances-software:GetDeliveryAddressesV2.

---

##### `actionGetOrder`<sup>Required</sup> <a name="actionGetOrder" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetOrder"></a>

```typescript
public readonly actionGetOrder: string;
```

- *Type:* string

[Read] elemental-appliances-software:GetOrder.

---

##### `actionGetOrdersV2`<sup>Required</sup> <a name="actionGetOrdersV2" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetOrdersV2"></a>

```typescript
public readonly actionGetOrdersV2: string;
```

- *Type:* string

[Read] elemental-appliances-software:GetOrdersV2.

---

##### `actionGetQuote`<sup>Required</sup> <a name="actionGetQuote" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetQuote"></a>

```typescript
public readonly actionGetQuote: string;
```

- *Type:* string

[Read] elemental-appliances-software:GetQuote.

---

##### `actionGetTaxes`<sup>Required</sup> <a name="actionGetTaxes" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.actionGetTaxes"></a>

```typescript
public readonly actionGetTaxes: string;
```

- *Type:* string

[Read] elemental-appliances-software:GetTaxes.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CompleteUpload`<sup>Required</sup> <a name="CompleteUpload" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.CompleteUpload"></a>

```typescript
public readonly CompleteUpload: string;
```

- *Type:* string

[Write] elemental-appliances-software:CompleteUpload.

---

##### `CreateOrderV1`<sup>Required</sup> <a name="CreateOrderV1" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.CreateOrderV1"></a>

```typescript
public readonly CreateOrderV1: string;
```

- *Type:* string

[Write] elemental-appliances-software:CreateOrderV1.

---

##### `CreateQuote`<sup>Required</sup> <a name="CreateQuote" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.CreateQuote"></a>

```typescript
public readonly CreateQuote: string;
```

- *Type:* string

[Write] elemental-appliances-software:CreateQuote.

---

##### `ListQuotes`<sup>Required</sup> <a name="ListQuotes" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.ListQuotes"></a>

```typescript
public readonly ListQuotes: string;
```

- *Type:* string

[List] elemental-appliances-software:ListQuotes.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartUpload`<sup>Required</sup> <a name="StartUpload" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.StartUpload"></a>

```typescript
public readonly StartUpload: string;
```

- *Type:* string

[Write] elemental-appliances-software:StartUpload.

---

##### `SubmitOrderV1`<sup>Required</sup> <a name="SubmitOrderV1" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.SubmitOrderV1"></a>

```typescript
public readonly SubmitOrderV1: string;
```

- *Type:* string

[Write] elemental-appliances-software:SubmitOrderV1.

---

##### `UpdateQuote`<sup>Required</sup> <a name="UpdateQuote" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareActions.property.UpdateQuote"></a>

```typescript
public readonly UpdateQuote: string;
```

- *Type:* string

[Write] elemental-appliances-software:UpdateQuote.

---

### ElementalAppliancesSoftwareResources <a name="ElementalAppliancesSoftwareResources" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareResources"></a>

ARN builders, validators, and parsers for elemental-appliances-software resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareResources.Initializer"></a>

```typescript
import { elemental_appliances_software } from '@cdk_utils/iam'

new elemental_appliances_software.ElementalAppliancesSoftwareResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareResources.isValidQuoteArn">isValidQuoteArn</a></code> | Validates whether a string is a valid ARN for the quote resource. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareResources.parseQuoteArn">parseQuoteArn</a></code> | Parses a quote ARN into its components. |
| <code><a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareResources.quote">quote</a></code> | Builds an ARN for the quote resource. |

---

##### `isValidQuoteArn` <a name="isValidQuoteArn" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareResources.isValidQuoteArn"></a>

```typescript
import { elemental_appliances_software } from '@cdk_utils/iam'

elemental_appliances_software.ElementalAppliancesSoftwareResources.isValidQuoteArn(arn: string)
```

Validates whether a string is a valid ARN for the quote resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareResources.isValidQuoteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQuoteArn` <a name="parseQuoteArn" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareResources.parseQuoteArn"></a>

```typescript
import { elemental_appliances_software } from '@cdk_utils/iam'

elemental_appliances_software.ElementalAppliancesSoftwareResources.parseQuoteArn(arn: string)
```

Parses a quote ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareResources.parseQuoteArn.parameter.arn"></a>

- *Type:* string

---

##### `quote` <a name="quote" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareResources.quote"></a>

```typescript
import { elemental_appliances_software } from '@cdk_utils/iam'

elemental_appliances_software.ElementalAppliancesSoftwareResources.quote(props: ElementalAppliancesSoftwareQuoteArnProps)
```

Builds an ARN for the quote resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareResources.quote.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elemental_appliances_software.ElementalAppliancesSoftwareQuoteArnProps">ElementalAppliancesSoftwareQuoteArnProps</a>

---




