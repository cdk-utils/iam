# `pricing` Submodule <a name="`pricing` Submodule" id="@cdk_utils/iam.pricing"></a>



## Classes <a name="Classes" id="Classes"></a>

### PricingActions <a name="PricingActions" id="@cdk_utils/iam.pricing.PricingActions"></a>

IAM action constants for the pricing service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pricing.PricingActions.Initializer"></a>

```typescript
import { pricing } from '@cdk_utils/iam'

new pricing.PricingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pricing.PricingActions.property.actionGetAttributeValues">actionGetAttributeValues</a></code> | <code>string</code> | [Read] pricing:GetAttributeValues. |
| <code><a href="#@cdk_utils/iam.pricing.PricingActions.property.actionGetPriceListFileUrl">actionGetPriceListFileUrl</a></code> | <code>string</code> | [Read] pricing:GetPriceListFileUrl. |
| <code><a href="#@cdk_utils/iam.pricing.PricingActions.property.actionGetProducts">actionGetProducts</a></code> | <code>string</code> | [Read] pricing:GetProducts. |
| <code><a href="#@cdk_utils/iam.pricing.PricingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.pricing.PricingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.pricing.PricingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.pricing.PricingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.pricing.PricingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.pricing.PricingActions.property.DescribeServices">DescribeServices</a></code> | <code>string</code> | [Read] pricing:DescribeServices. |
| <code><a href="#@cdk_utils/iam.pricing.PricingActions.property.ListPriceLists">ListPriceLists</a></code> | <code>string</code> | [Read] pricing:ListPriceLists. |
| <code><a href="#@cdk_utils/iam.pricing.PricingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetAttributeValues`<sup>Required</sup> <a name="actionGetAttributeValues" id="@cdk_utils/iam.pricing.PricingActions.property.actionGetAttributeValues"></a>

```typescript
public readonly actionGetAttributeValues: string;
```

- *Type:* string

[Read] pricing:GetAttributeValues.

---

##### `actionGetPriceListFileUrl`<sup>Required</sup> <a name="actionGetPriceListFileUrl" id="@cdk_utils/iam.pricing.PricingActions.property.actionGetPriceListFileUrl"></a>

```typescript
public readonly actionGetPriceListFileUrl: string;
```

- *Type:* string

[Read] pricing:GetPriceListFileUrl.

---

##### `actionGetProducts`<sup>Required</sup> <a name="actionGetProducts" id="@cdk_utils/iam.pricing.PricingActions.property.actionGetProducts"></a>

```typescript
public readonly actionGetProducts: string;
```

- *Type:* string

[Read] pricing:GetProducts.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.pricing.PricingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.pricing.PricingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.pricing.PricingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.pricing.PricingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.pricing.PricingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DescribeServices`<sup>Required</sup> <a name="DescribeServices" id="@cdk_utils/iam.pricing.PricingActions.property.DescribeServices"></a>

```typescript
public readonly DescribeServices: string;
```

- *Type:* string

[Read] pricing:DescribeServices.

---

##### `ListPriceLists`<sup>Required</sup> <a name="ListPriceLists" id="@cdk_utils/iam.pricing.PricingActions.property.ListPriceLists"></a>

```typescript
public readonly ListPriceLists: string;
```

- *Type:* string

[Read] pricing:ListPriceLists.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.pricing.PricingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### PricingOperations <a name="PricingOperations" id="@cdk_utils/iam.pricing.PricingOperations"></a>

API operation to required IAM actions mapping for pricing.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pricing.PricingOperations.Initializer"></a>

```typescript
import { pricing } from '@cdk_utils/iam'

new pricing.PricingOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pricing.PricingOperations.property.DescribeServices">DescribeServices</a></code> | <code>string[]</code> | IAM actions required for the DescribeServices API call. |
| <code><a href="#@cdk_utils/iam.pricing.PricingOperations.property.ListPriceLists">ListPriceLists</a></code> | <code>string[]</code> | IAM actions required for the ListPriceLists API call. |
| <code><a href="#@cdk_utils/iam.pricing.PricingOperations.property.opGetAttributeValues">opGetAttributeValues</a></code> | <code>string[]</code> | IAM actions required for the GetAttributeValues API call. |
| <code><a href="#@cdk_utils/iam.pricing.PricingOperations.property.opGetPriceListFileUrl">opGetPriceListFileUrl</a></code> | <code>string[]</code> | IAM actions required for the GetPriceListFileUrl API call. |
| <code><a href="#@cdk_utils/iam.pricing.PricingOperations.property.opGetProducts">opGetProducts</a></code> | <code>string[]</code> | IAM actions required for the GetProducts API call. |

---

##### `DescribeServices`<sup>Required</sup> <a name="DescribeServices" id="@cdk_utils/iam.pricing.PricingOperations.property.DescribeServices"></a>

```typescript
public readonly DescribeServices: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServices API call.

---

##### `ListPriceLists`<sup>Required</sup> <a name="ListPriceLists" id="@cdk_utils/iam.pricing.PricingOperations.property.ListPriceLists"></a>

```typescript
public readonly ListPriceLists: string[];
```

- *Type:* string[]

IAM actions required for the ListPriceLists API call.

---

##### `opGetAttributeValues`<sup>Required</sup> <a name="opGetAttributeValues" id="@cdk_utils/iam.pricing.PricingOperations.property.opGetAttributeValues"></a>

```typescript
public readonly opGetAttributeValues: string[];
```

- *Type:* string[]

IAM actions required for the GetAttributeValues API call.

---

##### `opGetPriceListFileUrl`<sup>Required</sup> <a name="opGetPriceListFileUrl" id="@cdk_utils/iam.pricing.PricingOperations.property.opGetPriceListFileUrl"></a>

```typescript
public readonly opGetPriceListFileUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetPriceListFileUrl API call.

---

##### `opGetProducts`<sup>Required</sup> <a name="opGetProducts" id="@cdk_utils/iam.pricing.PricingOperations.property.opGetProducts"></a>

```typescript
public readonly opGetProducts: string[];
```

- *Type:* string[]

IAM actions required for the GetProducts API call.

---


