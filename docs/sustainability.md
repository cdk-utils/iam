# `sustainability` Submodule <a name="`sustainability` Submodule" id="@cdk_utils/iam.sustainability"></a>



## Classes <a name="Classes" id="Classes"></a>

### SustainabilityActions <a name="SustainabilityActions" id="@cdk_utils/iam.sustainability.SustainabilityActions"></a>

IAM action constants for the sustainability service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sustainability.SustainabilityActions.Initializer"></a>

```typescript
import { sustainability } from '@cdk_utils/iam'

new sustainability.SustainabilityActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityActions.property.actionGetCarbonFootprintSummary">actionGetCarbonFootprintSummary</a></code> | <code>string</code> | [Read] sustainability:GetCarbonFootprintSummary. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityActions.property.actionGetEstimatedCarbonEmissions">actionGetEstimatedCarbonEmissions</a></code> | <code>string</code> | [Read] sustainability:GetEstimatedCarbonEmissions. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityActions.property.actionGetEstimatedCarbonEmissionsDimensionValues">actionGetEstimatedCarbonEmissionsDimensionValues</a></code> | <code>string</code> | [Read] sustainability:GetEstimatedCarbonEmissionsDimensionValues. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityActions.property.actionGetEstimatedWaterAllocation">actionGetEstimatedWaterAllocation</a></code> | <code>string</code> | [Read] sustainability:GetEstimatedWaterAllocation. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityActions.property.actionGetEstimatedWaterAllocationDimensionValues">actionGetEstimatedWaterAllocationDimensionValues</a></code> | <code>string</code> | [Read] sustainability:GetEstimatedWaterAllocationDimensionValues. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetCarbonFootprintSummary`<sup>Required</sup> <a name="actionGetCarbonFootprintSummary" id="@cdk_utils/iam.sustainability.SustainabilityActions.property.actionGetCarbonFootprintSummary"></a>

```typescript
public readonly actionGetCarbonFootprintSummary: string;
```

- *Type:* string

[Read] sustainability:GetCarbonFootprintSummary.

---

##### `actionGetEstimatedCarbonEmissions`<sup>Required</sup> <a name="actionGetEstimatedCarbonEmissions" id="@cdk_utils/iam.sustainability.SustainabilityActions.property.actionGetEstimatedCarbonEmissions"></a>

```typescript
public readonly actionGetEstimatedCarbonEmissions: string;
```

- *Type:* string

[Read] sustainability:GetEstimatedCarbonEmissions.

---

##### `actionGetEstimatedCarbonEmissionsDimensionValues`<sup>Required</sup> <a name="actionGetEstimatedCarbonEmissionsDimensionValues" id="@cdk_utils/iam.sustainability.SustainabilityActions.property.actionGetEstimatedCarbonEmissionsDimensionValues"></a>

```typescript
public readonly actionGetEstimatedCarbonEmissionsDimensionValues: string;
```

- *Type:* string

[Read] sustainability:GetEstimatedCarbonEmissionsDimensionValues.

---

##### `actionGetEstimatedWaterAllocation`<sup>Required</sup> <a name="actionGetEstimatedWaterAllocation" id="@cdk_utils/iam.sustainability.SustainabilityActions.property.actionGetEstimatedWaterAllocation"></a>

```typescript
public readonly actionGetEstimatedWaterAllocation: string;
```

- *Type:* string

[Read] sustainability:GetEstimatedWaterAllocation.

---

##### `actionGetEstimatedWaterAllocationDimensionValues`<sup>Required</sup> <a name="actionGetEstimatedWaterAllocationDimensionValues" id="@cdk_utils/iam.sustainability.SustainabilityActions.property.actionGetEstimatedWaterAllocationDimensionValues"></a>

```typescript
public readonly actionGetEstimatedWaterAllocationDimensionValues: string;
```

- *Type:* string

[Read] sustainability:GetEstimatedWaterAllocationDimensionValues.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sustainability.SustainabilityActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sustainability.SustainabilityActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sustainability.SustainabilityActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sustainability.SustainabilityActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sustainability.SustainabilityActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sustainability.SustainabilityActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### SustainabilityOperations <a name="SustainabilityOperations" id="@cdk_utils/iam.sustainability.SustainabilityOperations"></a>

API operation to required IAM actions mapping for sustainability.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sustainability.SustainabilityOperations.Initializer"></a>

```typescript
import { sustainability } from '@cdk_utils/iam'

new sustainability.SustainabilityOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityOperations.property.opGetEstimatedCarbonEmissions">opGetEstimatedCarbonEmissions</a></code> | <code>string[]</code> | IAM actions required for the GetEstimatedCarbonEmissions API call. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityOperations.property.opGetEstimatedCarbonEmissionsDimensionValues">opGetEstimatedCarbonEmissionsDimensionValues</a></code> | <code>string[]</code> | IAM actions required for the GetEstimatedCarbonEmissionsDimensionValues API call. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityOperations.property.opGetEstimatedWaterAllocation">opGetEstimatedWaterAllocation</a></code> | <code>string[]</code> | IAM actions required for the GetEstimatedWaterAllocation API call. |
| <code><a href="#@cdk_utils/iam.sustainability.SustainabilityOperations.property.opGetEstimatedWaterAllocationDimensionValues">opGetEstimatedWaterAllocationDimensionValues</a></code> | <code>string[]</code> | IAM actions required for the GetEstimatedWaterAllocationDimensionValues API call. |

---

##### `opGetEstimatedCarbonEmissions`<sup>Required</sup> <a name="opGetEstimatedCarbonEmissions" id="@cdk_utils/iam.sustainability.SustainabilityOperations.property.opGetEstimatedCarbonEmissions"></a>

```typescript
public readonly opGetEstimatedCarbonEmissions: string[];
```

- *Type:* string[]

IAM actions required for the GetEstimatedCarbonEmissions API call.

---

##### `opGetEstimatedCarbonEmissionsDimensionValues`<sup>Required</sup> <a name="opGetEstimatedCarbonEmissionsDimensionValues" id="@cdk_utils/iam.sustainability.SustainabilityOperations.property.opGetEstimatedCarbonEmissionsDimensionValues"></a>

```typescript
public readonly opGetEstimatedCarbonEmissionsDimensionValues: string[];
```

- *Type:* string[]

IAM actions required for the GetEstimatedCarbonEmissionsDimensionValues API call.

---

##### `opGetEstimatedWaterAllocation`<sup>Required</sup> <a name="opGetEstimatedWaterAllocation" id="@cdk_utils/iam.sustainability.SustainabilityOperations.property.opGetEstimatedWaterAllocation"></a>

```typescript
public readonly opGetEstimatedWaterAllocation: string[];
```

- *Type:* string[]

IAM actions required for the GetEstimatedWaterAllocation API call.

---

##### `opGetEstimatedWaterAllocationDimensionValues`<sup>Required</sup> <a name="opGetEstimatedWaterAllocationDimensionValues" id="@cdk_utils/iam.sustainability.SustainabilityOperations.property.opGetEstimatedWaterAllocationDimensionValues"></a>

```typescript
public readonly opGetEstimatedWaterAllocationDimensionValues: string[];
```

- *Type:* string[]

IAM actions required for the GetEstimatedWaterAllocationDimensionValues API call.

---


