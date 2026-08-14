# `ce` Submodule <a name="`ce` Submodule" id="@cdk_utils/iam.ce"></a>


## Structs <a name="Structs" id="Structs"></a>

### CeAnomalymonitorArnComponents <a name="CeAnomalymonitorArnComponents" id="@cdk_utils/iam.ce.CeAnomalymonitorArnComponents"></a>

Parsed components of a anomalymonitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ce.CeAnomalymonitorArnComponents.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

const ceAnomalymonitorArnComponents: ce.CeAnomalymonitorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalymonitorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalymonitorArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalymonitorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ce.CeAnomalymonitorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.ce.CeAnomalymonitorArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ce.CeAnomalymonitorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CeAnomalymonitorArnProps <a name="CeAnomalymonitorArnProps" id="@cdk_utils/iam.ce.CeAnomalymonitorArnProps"></a>

Properties for building a anomalymonitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ce.CeAnomalymonitorArnProps.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

const ceAnomalymonitorArnProps: ce.CeAnomalymonitorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalymonitorArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalymonitorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalymonitorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.ce.CeAnomalymonitorArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ce.CeAnomalymonitorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ce.CeAnomalymonitorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CeAnomalysubscriptionArnComponents <a name="CeAnomalysubscriptionArnComponents" id="@cdk_utils/iam.ce.CeAnomalysubscriptionArnComponents"></a>

Parsed components of a anomalysubscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ce.CeAnomalysubscriptionArnComponents.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

const ceAnomalysubscriptionArnComponents: ce.CeAnomalysubscriptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalysubscriptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalysubscriptionArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalysubscriptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ce.CeAnomalysubscriptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.ce.CeAnomalysubscriptionArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ce.CeAnomalysubscriptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CeAnomalysubscriptionArnProps <a name="CeAnomalysubscriptionArnProps" id="@cdk_utils/iam.ce.CeAnomalysubscriptionArnProps"></a>

Properties for building a anomalysubscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ce.CeAnomalysubscriptionArnProps.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

const ceAnomalysubscriptionArnProps: ce.CeAnomalysubscriptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalysubscriptionArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalysubscriptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ce.CeAnomalysubscriptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.ce.CeAnomalysubscriptionArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ce.CeAnomalysubscriptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ce.CeAnomalysubscriptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CeBillingviewArnComponents <a name="CeBillingviewArnComponents" id="@cdk_utils/iam.ce.CeBillingviewArnComponents"></a>

Parsed components of a billingview ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ce.CeBillingviewArnComponents.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

const ceBillingviewArnComponents: ce.CeBillingviewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeBillingviewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ce.CeBillingviewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ce.CeBillingviewArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ce.CeBillingviewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ce.CeBillingviewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ce.CeBillingviewArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### CeBillingviewArnProps <a name="CeBillingviewArnProps" id="@cdk_utils/iam.ce.CeBillingviewArnProps"></a>

Properties for building a billingview ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ce.CeBillingviewArnProps.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

const ceBillingviewArnProps: ce.CeBillingviewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeBillingviewArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ce.CeBillingviewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ce.CeBillingviewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ce.CeBillingviewArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ce.CeBillingviewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ce.CeBillingviewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CeCostcategoryArnComponents <a name="CeCostcategoryArnComponents" id="@cdk_utils/iam.ce.CeCostcategoryArnComponents"></a>

Parsed components of a costcategory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ce.CeCostcategoryArnComponents.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

const ceCostcategoryArnComponents: ce.CeCostcategoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeCostcategoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ce.CeCostcategoryArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.ce.CeCostcategoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ce.CeCostcategoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.ce.CeCostcategoryArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ce.CeCostcategoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CeCostcategoryArnProps <a name="CeCostcategoryArnProps" id="@cdk_utils/iam.ce.CeCostcategoryArnProps"></a>

Properties for building a costcategory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ce.CeCostcategoryArnProps.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

const ceCostcategoryArnProps: ce.CeCostcategoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeCostcategoryArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.ce.CeCostcategoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ce.CeCostcategoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.ce.CeCostcategoryArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ce.CeCostcategoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ce.CeCostcategoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### CeActions <a name="CeActions" id="@cdk_utils/iam.ce.CeActions"></a>

IAM action constants for the ce service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ce.CeActions.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

new ce.CeActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetAnomalies">actionGetAnomalies</a></code> | <code>string</code> | [Read] ce:GetAnomalies. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetAnomalyMonitors">actionGetAnomalyMonitors</a></code> | <code>string</code> | [Read] ce:GetAnomalyMonitors. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetAnomalySubscriptions">actionGetAnomalySubscriptions</a></code> | <code>string</code> | [Read] ce:GetAnomalySubscriptions. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetApproximateUsageRecords">actionGetApproximateUsageRecords</a></code> | <code>string</code> | [Read] ce:GetApproximateUsageRecords. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetCommitmentPurchaseAnalysis">actionGetCommitmentPurchaseAnalysis</a></code> | <code>string</code> | [Read] ce:GetCommitmentPurchaseAnalysis. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetConsoleActionSetEnforced">actionGetConsoleActionSetEnforced</a></code> | <code>string</code> | [Read] ce:GetConsoleActionSetEnforced. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetCostAndUsage">actionGetCostAndUsage</a></code> | <code>string</code> | [Read] ce:GetCostAndUsage. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetCostAndUsageComparisons">actionGetCostAndUsageComparisons</a></code> | <code>string</code> | [Read] ce:GetCostAndUsageComparisons. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetCostAndUsageWithResources">actionGetCostAndUsageWithResources</a></code> | <code>string</code> | [Read] ce:GetCostAndUsageWithResources. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetCostCategories">actionGetCostCategories</a></code> | <code>string</code> | [Read] ce:GetCostCategories. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetCostComparisonDrivers">actionGetCostComparisonDrivers</a></code> | <code>string</code> | [Read] ce:GetCostComparisonDrivers. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetCostForecast">actionGetCostForecast</a></code> | <code>string</code> | [Read] ce:GetCostForecast. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetDimensionValues">actionGetDimensionValues</a></code> | <code>string</code> | [Read] ce:GetDimensionValues. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetPreferences">actionGetPreferences</a></code> | <code>string</code> | [Read] ce:GetPreferences. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetReservationCoverage">actionGetReservationCoverage</a></code> | <code>string</code> | [Read] ce:GetReservationCoverage. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetReservationPurchaseRecommendation">actionGetReservationPurchaseRecommendation</a></code> | <code>string</code> | [Read] ce:GetReservationPurchaseRecommendation. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetReservationUtilization">actionGetReservationUtilization</a></code> | <code>string</code> | [Read] ce:GetReservationUtilization. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetRightsizingRecommendation">actionGetRightsizingRecommendation</a></code> | <code>string</code> | [Read] ce:GetRightsizingRecommendation. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetSavingsPlanPurchaseRecommendationDetails">actionGetSavingsPlanPurchaseRecommendationDetails</a></code> | <code>string</code> | [Read] ce:GetSavingsPlanPurchaseRecommendationDetails. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetSavingsPlansCoverage">actionGetSavingsPlansCoverage</a></code> | <code>string</code> | [Read] ce:GetSavingsPlansCoverage. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetSavingsPlansPurchaseRecommendation">actionGetSavingsPlansPurchaseRecommendation</a></code> | <code>string</code> | [Read] ce:GetSavingsPlansPurchaseRecommendation. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetSavingsPlansUtilization">actionGetSavingsPlansUtilization</a></code> | <code>string</code> | [Read] ce:GetSavingsPlansUtilization. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetSavingsPlansUtilizationDetails">actionGetSavingsPlansUtilizationDetails</a></code> | <code>string</code> | [Read] ce:GetSavingsPlansUtilizationDetails. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetTags">actionGetTags</a></code> | <code>string</code> | [Read] ce:GetTags. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.actionGetUsageForecast">actionGetUsageForecast</a></code> | <code>string</code> | [Read] ce:GetUsageForecast. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.CreateAnomalyMonitor">CreateAnomalyMonitor</a></code> | <code>string</code> | [Write] ce:CreateAnomalyMonitor. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.CreateAnomalySubscription">CreateAnomalySubscription</a></code> | <code>string</code> | [Write] ce:CreateAnomalySubscription. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.CreateCostCategoryDefinition">CreateCostCategoryDefinition</a></code> | <code>string</code> | [Write] ce:CreateCostCategoryDefinition. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.CreateNotificationSubscription">CreateNotificationSubscription</a></code> | <code>string</code> | [Write] ce:CreateNotificationSubscription. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.CreateReport">CreateReport</a></code> | <code>string</code> | [Write] ce:CreateReport. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.DeleteAnomalyMonitor">DeleteAnomalyMonitor</a></code> | <code>string</code> | [Write] ce:DeleteAnomalyMonitor. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.DeleteAnomalySubscription">DeleteAnomalySubscription</a></code> | <code>string</code> | [Write] ce:DeleteAnomalySubscription. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.DeleteCostCategoryDefinition">DeleteCostCategoryDefinition</a></code> | <code>string</code> | [Write] ce:DeleteCostCategoryDefinition. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.DeleteNotificationSubscription">DeleteNotificationSubscription</a></code> | <code>string</code> | [Write] ce:DeleteNotificationSubscription. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.DeleteReport">DeleteReport</a></code> | <code>string</code> | [Write] ce:DeleteReport. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.DescribeCostCategoryDefinition">DescribeCostCategoryDefinition</a></code> | <code>string</code> | [Read] ce:DescribeCostCategoryDefinition. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.DescribeNotificationSubscription">DescribeNotificationSubscription</a></code> | <code>string</code> | [Read] ce:DescribeNotificationSubscription. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.DescribeReport">DescribeReport</a></code> | <code>string</code> | [Read] ce:DescribeReport. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.ListCommitmentPurchaseAnalyses">ListCommitmentPurchaseAnalyses</a></code> | <code>string</code> | [List] ce:ListCommitmentPurchaseAnalyses. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.ListCostAllocationTagBackfillHistory">ListCostAllocationTagBackfillHistory</a></code> | <code>string</code> | [List] ce:ListCostAllocationTagBackfillHistory. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.ListCostAllocationTags">ListCostAllocationTags</a></code> | <code>string</code> | [List] ce:ListCostAllocationTags. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.ListCostCategoryDefinitions">ListCostCategoryDefinitions</a></code> | <code>string</code> | [List] ce:ListCostCategoryDefinitions. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.ListCostCategoryResourceAssociations">ListCostCategoryResourceAssociations</a></code> | <code>string</code> | [List] ce:ListCostCategoryResourceAssociations. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.ListSavingsPlansPurchaseRecommendationGeneration">ListSavingsPlansPurchaseRecommendationGeneration</a></code> | <code>string</code> | [List] ce:ListSavingsPlansPurchaseRecommendationGeneration. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ce:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.ProvideAnomalyFeedback">ProvideAnomalyFeedback</a></code> | <code>string</code> | [Write] ce:ProvideAnomalyFeedback. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.StartCommitmentPurchaseAnalysis">StartCommitmentPurchaseAnalysis</a></code> | <code>string</code> | [Write] ce:StartCommitmentPurchaseAnalysis. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.StartCostAllocationTagBackfill">StartCostAllocationTagBackfill</a></code> | <code>string</code> | [Write] ce:StartCostAllocationTagBackfill. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.StartSavingsPlansPurchaseRecommendationGeneration">StartSavingsPlansPurchaseRecommendationGeneration</a></code> | <code>string</code> | [Write] ce:StartSavingsPlansPurchaseRecommendationGeneration. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ce:TagResource. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ce:UntagResource. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.UpdateAnomalyMonitor">UpdateAnomalyMonitor</a></code> | <code>string</code> | [Write] ce:UpdateAnomalyMonitor. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.UpdateAnomalySubscription">UpdateAnomalySubscription</a></code> | <code>string</code> | [Write] ce:UpdateAnomalySubscription. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.UpdateConsoleActionSetEnforced">UpdateConsoleActionSetEnforced</a></code> | <code>string</code> | [Write] ce:UpdateConsoleActionSetEnforced. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.UpdateCostAllocationTagsStatus">UpdateCostAllocationTagsStatus</a></code> | <code>string</code> | [Write] ce:UpdateCostAllocationTagsStatus. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.UpdateCostCategoryDefinition">UpdateCostCategoryDefinition</a></code> | <code>string</code> | [Write] ce:UpdateCostCategoryDefinition. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.UpdateNotificationSubscription">UpdateNotificationSubscription</a></code> | <code>string</code> | [Write] ce:UpdateNotificationSubscription. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.UpdatePreferences">UpdatePreferences</a></code> | <code>string</code> | [Write] ce:UpdatePreferences. |
| <code><a href="#@cdk_utils/iam.ce.CeActions.property.UpdateReport">UpdateReport</a></code> | <code>string</code> | [Write] ce:UpdateReport. |

---

##### `actionGetAnomalies`<sup>Required</sup> <a name="actionGetAnomalies" id="@cdk_utils/iam.ce.CeActions.property.actionGetAnomalies"></a>

```typescript
public readonly actionGetAnomalies: string;
```

- *Type:* string

[Read] ce:GetAnomalies.

---

##### `actionGetAnomalyMonitors`<sup>Required</sup> <a name="actionGetAnomalyMonitors" id="@cdk_utils/iam.ce.CeActions.property.actionGetAnomalyMonitors"></a>

```typescript
public readonly actionGetAnomalyMonitors: string;
```

- *Type:* string

[Read] ce:GetAnomalyMonitors.

---

##### `actionGetAnomalySubscriptions`<sup>Required</sup> <a name="actionGetAnomalySubscriptions" id="@cdk_utils/iam.ce.CeActions.property.actionGetAnomalySubscriptions"></a>

```typescript
public readonly actionGetAnomalySubscriptions: string;
```

- *Type:* string

[Read] ce:GetAnomalySubscriptions.

---

##### `actionGetApproximateUsageRecords`<sup>Required</sup> <a name="actionGetApproximateUsageRecords" id="@cdk_utils/iam.ce.CeActions.property.actionGetApproximateUsageRecords"></a>

```typescript
public readonly actionGetApproximateUsageRecords: string;
```

- *Type:* string

[Read] ce:GetApproximateUsageRecords.

---

##### `actionGetCommitmentPurchaseAnalysis`<sup>Required</sup> <a name="actionGetCommitmentPurchaseAnalysis" id="@cdk_utils/iam.ce.CeActions.property.actionGetCommitmentPurchaseAnalysis"></a>

```typescript
public readonly actionGetCommitmentPurchaseAnalysis: string;
```

- *Type:* string

[Read] ce:GetCommitmentPurchaseAnalysis.

---

##### `actionGetConsoleActionSetEnforced`<sup>Required</sup> <a name="actionGetConsoleActionSetEnforced" id="@cdk_utils/iam.ce.CeActions.property.actionGetConsoleActionSetEnforced"></a>

```typescript
public readonly actionGetConsoleActionSetEnforced: string;
```

- *Type:* string

[Read] ce:GetConsoleActionSetEnforced.

---

##### `actionGetCostAndUsage`<sup>Required</sup> <a name="actionGetCostAndUsage" id="@cdk_utils/iam.ce.CeActions.property.actionGetCostAndUsage"></a>

```typescript
public readonly actionGetCostAndUsage: string;
```

- *Type:* string

[Read] ce:GetCostAndUsage.

---

##### `actionGetCostAndUsageComparisons`<sup>Required</sup> <a name="actionGetCostAndUsageComparisons" id="@cdk_utils/iam.ce.CeActions.property.actionGetCostAndUsageComparisons"></a>

```typescript
public readonly actionGetCostAndUsageComparisons: string;
```

- *Type:* string

[Read] ce:GetCostAndUsageComparisons.

---

##### `actionGetCostAndUsageWithResources`<sup>Required</sup> <a name="actionGetCostAndUsageWithResources" id="@cdk_utils/iam.ce.CeActions.property.actionGetCostAndUsageWithResources"></a>

```typescript
public readonly actionGetCostAndUsageWithResources: string;
```

- *Type:* string

[Read] ce:GetCostAndUsageWithResources.

---

##### `actionGetCostCategories`<sup>Required</sup> <a name="actionGetCostCategories" id="@cdk_utils/iam.ce.CeActions.property.actionGetCostCategories"></a>

```typescript
public readonly actionGetCostCategories: string;
```

- *Type:* string

[Read] ce:GetCostCategories.

---

##### `actionGetCostComparisonDrivers`<sup>Required</sup> <a name="actionGetCostComparisonDrivers" id="@cdk_utils/iam.ce.CeActions.property.actionGetCostComparisonDrivers"></a>

```typescript
public readonly actionGetCostComparisonDrivers: string;
```

- *Type:* string

[Read] ce:GetCostComparisonDrivers.

---

##### `actionGetCostForecast`<sup>Required</sup> <a name="actionGetCostForecast" id="@cdk_utils/iam.ce.CeActions.property.actionGetCostForecast"></a>

```typescript
public readonly actionGetCostForecast: string;
```

- *Type:* string

[Read] ce:GetCostForecast.

---

##### `actionGetDimensionValues`<sup>Required</sup> <a name="actionGetDimensionValues" id="@cdk_utils/iam.ce.CeActions.property.actionGetDimensionValues"></a>

```typescript
public readonly actionGetDimensionValues: string;
```

- *Type:* string

[Read] ce:GetDimensionValues.

---

##### `actionGetPreferences`<sup>Required</sup> <a name="actionGetPreferences" id="@cdk_utils/iam.ce.CeActions.property.actionGetPreferences"></a>

```typescript
public readonly actionGetPreferences: string;
```

- *Type:* string

[Read] ce:GetPreferences.

---

##### `actionGetReservationCoverage`<sup>Required</sup> <a name="actionGetReservationCoverage" id="@cdk_utils/iam.ce.CeActions.property.actionGetReservationCoverage"></a>

```typescript
public readonly actionGetReservationCoverage: string;
```

- *Type:* string

[Read] ce:GetReservationCoverage.

---

##### `actionGetReservationPurchaseRecommendation`<sup>Required</sup> <a name="actionGetReservationPurchaseRecommendation" id="@cdk_utils/iam.ce.CeActions.property.actionGetReservationPurchaseRecommendation"></a>

```typescript
public readonly actionGetReservationPurchaseRecommendation: string;
```

- *Type:* string

[Read] ce:GetReservationPurchaseRecommendation.

---

##### `actionGetReservationUtilization`<sup>Required</sup> <a name="actionGetReservationUtilization" id="@cdk_utils/iam.ce.CeActions.property.actionGetReservationUtilization"></a>

```typescript
public readonly actionGetReservationUtilization: string;
```

- *Type:* string

[Read] ce:GetReservationUtilization.

---

##### `actionGetRightsizingRecommendation`<sup>Required</sup> <a name="actionGetRightsizingRecommendation" id="@cdk_utils/iam.ce.CeActions.property.actionGetRightsizingRecommendation"></a>

```typescript
public readonly actionGetRightsizingRecommendation: string;
```

- *Type:* string

[Read] ce:GetRightsizingRecommendation.

---

##### `actionGetSavingsPlanPurchaseRecommendationDetails`<sup>Required</sup> <a name="actionGetSavingsPlanPurchaseRecommendationDetails" id="@cdk_utils/iam.ce.CeActions.property.actionGetSavingsPlanPurchaseRecommendationDetails"></a>

```typescript
public readonly actionGetSavingsPlanPurchaseRecommendationDetails: string;
```

- *Type:* string

[Read] ce:GetSavingsPlanPurchaseRecommendationDetails.

---

##### `actionGetSavingsPlansCoverage`<sup>Required</sup> <a name="actionGetSavingsPlansCoverage" id="@cdk_utils/iam.ce.CeActions.property.actionGetSavingsPlansCoverage"></a>

```typescript
public readonly actionGetSavingsPlansCoverage: string;
```

- *Type:* string

[Read] ce:GetSavingsPlansCoverage.

---

##### `actionGetSavingsPlansPurchaseRecommendation`<sup>Required</sup> <a name="actionGetSavingsPlansPurchaseRecommendation" id="@cdk_utils/iam.ce.CeActions.property.actionGetSavingsPlansPurchaseRecommendation"></a>

```typescript
public readonly actionGetSavingsPlansPurchaseRecommendation: string;
```

- *Type:* string

[Read] ce:GetSavingsPlansPurchaseRecommendation.

---

##### `actionGetSavingsPlansUtilization`<sup>Required</sup> <a name="actionGetSavingsPlansUtilization" id="@cdk_utils/iam.ce.CeActions.property.actionGetSavingsPlansUtilization"></a>

```typescript
public readonly actionGetSavingsPlansUtilization: string;
```

- *Type:* string

[Read] ce:GetSavingsPlansUtilization.

---

##### `actionGetSavingsPlansUtilizationDetails`<sup>Required</sup> <a name="actionGetSavingsPlansUtilizationDetails" id="@cdk_utils/iam.ce.CeActions.property.actionGetSavingsPlansUtilizationDetails"></a>

```typescript
public readonly actionGetSavingsPlansUtilizationDetails: string;
```

- *Type:* string

[Read] ce:GetSavingsPlansUtilizationDetails.

---

##### `actionGetTags`<sup>Required</sup> <a name="actionGetTags" id="@cdk_utils/iam.ce.CeActions.property.actionGetTags"></a>

```typescript
public readonly actionGetTags: string;
```

- *Type:* string

[Read] ce:GetTags.

---

##### `actionGetUsageForecast`<sup>Required</sup> <a name="actionGetUsageForecast" id="@cdk_utils/iam.ce.CeActions.property.actionGetUsageForecast"></a>

```typescript
public readonly actionGetUsageForecast: string;
```

- *Type:* string

[Read] ce:GetUsageForecast.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ce.CeActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ce.CeActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ce.CeActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ce.CeActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ce.CeActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAnomalyMonitor`<sup>Required</sup> <a name="CreateAnomalyMonitor" id="@cdk_utils/iam.ce.CeActions.property.CreateAnomalyMonitor"></a>

```typescript
public readonly CreateAnomalyMonitor: string;
```

- *Type:* string

[Write] ce:CreateAnomalyMonitor.

---

##### `CreateAnomalySubscription`<sup>Required</sup> <a name="CreateAnomalySubscription" id="@cdk_utils/iam.ce.CeActions.property.CreateAnomalySubscription"></a>

```typescript
public readonly CreateAnomalySubscription: string;
```

- *Type:* string

[Write] ce:CreateAnomalySubscription.

---

##### `CreateCostCategoryDefinition`<sup>Required</sup> <a name="CreateCostCategoryDefinition" id="@cdk_utils/iam.ce.CeActions.property.CreateCostCategoryDefinition"></a>

```typescript
public readonly CreateCostCategoryDefinition: string;
```

- *Type:* string

[Write] ce:CreateCostCategoryDefinition.

---

##### `CreateNotificationSubscription`<sup>Required</sup> <a name="CreateNotificationSubscription" id="@cdk_utils/iam.ce.CeActions.property.CreateNotificationSubscription"></a>

```typescript
public readonly CreateNotificationSubscription: string;
```

- *Type:* string

[Write] ce:CreateNotificationSubscription.

---

##### `CreateReport`<sup>Required</sup> <a name="CreateReport" id="@cdk_utils/iam.ce.CeActions.property.CreateReport"></a>

```typescript
public readonly CreateReport: string;
```

- *Type:* string

[Write] ce:CreateReport.

---

##### `DeleteAnomalyMonitor`<sup>Required</sup> <a name="DeleteAnomalyMonitor" id="@cdk_utils/iam.ce.CeActions.property.DeleteAnomalyMonitor"></a>

```typescript
public readonly DeleteAnomalyMonitor: string;
```

- *Type:* string

[Write] ce:DeleteAnomalyMonitor.

---

##### `DeleteAnomalySubscription`<sup>Required</sup> <a name="DeleteAnomalySubscription" id="@cdk_utils/iam.ce.CeActions.property.DeleteAnomalySubscription"></a>

```typescript
public readonly DeleteAnomalySubscription: string;
```

- *Type:* string

[Write] ce:DeleteAnomalySubscription.

---

##### `DeleteCostCategoryDefinition`<sup>Required</sup> <a name="DeleteCostCategoryDefinition" id="@cdk_utils/iam.ce.CeActions.property.DeleteCostCategoryDefinition"></a>

```typescript
public readonly DeleteCostCategoryDefinition: string;
```

- *Type:* string

[Write] ce:DeleteCostCategoryDefinition.

---

##### `DeleteNotificationSubscription`<sup>Required</sup> <a name="DeleteNotificationSubscription" id="@cdk_utils/iam.ce.CeActions.property.DeleteNotificationSubscription"></a>

```typescript
public readonly DeleteNotificationSubscription: string;
```

- *Type:* string

[Write] ce:DeleteNotificationSubscription.

---

##### `DeleteReport`<sup>Required</sup> <a name="DeleteReport" id="@cdk_utils/iam.ce.CeActions.property.DeleteReport"></a>

```typescript
public readonly DeleteReport: string;
```

- *Type:* string

[Write] ce:DeleteReport.

---

##### `DescribeCostCategoryDefinition`<sup>Required</sup> <a name="DescribeCostCategoryDefinition" id="@cdk_utils/iam.ce.CeActions.property.DescribeCostCategoryDefinition"></a>

```typescript
public readonly DescribeCostCategoryDefinition: string;
```

- *Type:* string

[Read] ce:DescribeCostCategoryDefinition.

---

##### `DescribeNotificationSubscription`<sup>Required</sup> <a name="DescribeNotificationSubscription" id="@cdk_utils/iam.ce.CeActions.property.DescribeNotificationSubscription"></a>

```typescript
public readonly DescribeNotificationSubscription: string;
```

- *Type:* string

[Read] ce:DescribeNotificationSubscription.

---

##### `DescribeReport`<sup>Required</sup> <a name="DescribeReport" id="@cdk_utils/iam.ce.CeActions.property.DescribeReport"></a>

```typescript
public readonly DescribeReport: string;
```

- *Type:* string

[Read] ce:DescribeReport.

---

##### `ListCommitmentPurchaseAnalyses`<sup>Required</sup> <a name="ListCommitmentPurchaseAnalyses" id="@cdk_utils/iam.ce.CeActions.property.ListCommitmentPurchaseAnalyses"></a>

```typescript
public readonly ListCommitmentPurchaseAnalyses: string;
```

- *Type:* string

[List] ce:ListCommitmentPurchaseAnalyses.

---

##### `ListCostAllocationTagBackfillHistory`<sup>Required</sup> <a name="ListCostAllocationTagBackfillHistory" id="@cdk_utils/iam.ce.CeActions.property.ListCostAllocationTagBackfillHistory"></a>

```typescript
public readonly ListCostAllocationTagBackfillHistory: string;
```

- *Type:* string

[List] ce:ListCostAllocationTagBackfillHistory.

---

##### `ListCostAllocationTags`<sup>Required</sup> <a name="ListCostAllocationTags" id="@cdk_utils/iam.ce.CeActions.property.ListCostAllocationTags"></a>

```typescript
public readonly ListCostAllocationTags: string;
```

- *Type:* string

[List] ce:ListCostAllocationTags.

---

##### `ListCostCategoryDefinitions`<sup>Required</sup> <a name="ListCostCategoryDefinitions" id="@cdk_utils/iam.ce.CeActions.property.ListCostCategoryDefinitions"></a>

```typescript
public readonly ListCostCategoryDefinitions: string;
```

- *Type:* string

[List] ce:ListCostCategoryDefinitions.

---

##### `ListCostCategoryResourceAssociations`<sup>Required</sup> <a name="ListCostCategoryResourceAssociations" id="@cdk_utils/iam.ce.CeActions.property.ListCostCategoryResourceAssociations"></a>

```typescript
public readonly ListCostCategoryResourceAssociations: string;
```

- *Type:* string

[List] ce:ListCostCategoryResourceAssociations.

---

##### `ListSavingsPlansPurchaseRecommendationGeneration`<sup>Required</sup> <a name="ListSavingsPlansPurchaseRecommendationGeneration" id="@cdk_utils/iam.ce.CeActions.property.ListSavingsPlansPurchaseRecommendationGeneration"></a>

```typescript
public readonly ListSavingsPlansPurchaseRecommendationGeneration: string;
```

- *Type:* string

[List] ce:ListSavingsPlansPurchaseRecommendationGeneration.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ce.CeActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ce:ListTagsForResource.

---

##### `ProvideAnomalyFeedback`<sup>Required</sup> <a name="ProvideAnomalyFeedback" id="@cdk_utils/iam.ce.CeActions.property.ProvideAnomalyFeedback"></a>

```typescript
public readonly ProvideAnomalyFeedback: string;
```

- *Type:* string

[Write] ce:ProvideAnomalyFeedback.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ce.CeActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCommitmentPurchaseAnalysis`<sup>Required</sup> <a name="StartCommitmentPurchaseAnalysis" id="@cdk_utils/iam.ce.CeActions.property.StartCommitmentPurchaseAnalysis"></a>

```typescript
public readonly StartCommitmentPurchaseAnalysis: string;
```

- *Type:* string

[Write] ce:StartCommitmentPurchaseAnalysis.

---

##### `StartCostAllocationTagBackfill`<sup>Required</sup> <a name="StartCostAllocationTagBackfill" id="@cdk_utils/iam.ce.CeActions.property.StartCostAllocationTagBackfill"></a>

```typescript
public readonly StartCostAllocationTagBackfill: string;
```

- *Type:* string

[Write] ce:StartCostAllocationTagBackfill.

---

##### `StartSavingsPlansPurchaseRecommendationGeneration`<sup>Required</sup> <a name="StartSavingsPlansPurchaseRecommendationGeneration" id="@cdk_utils/iam.ce.CeActions.property.StartSavingsPlansPurchaseRecommendationGeneration"></a>

```typescript
public readonly StartSavingsPlansPurchaseRecommendationGeneration: string;
```

- *Type:* string

[Write] ce:StartSavingsPlansPurchaseRecommendationGeneration.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ce.CeActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ce:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ce.CeActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ce:UntagResource.

---

##### `UpdateAnomalyMonitor`<sup>Required</sup> <a name="UpdateAnomalyMonitor" id="@cdk_utils/iam.ce.CeActions.property.UpdateAnomalyMonitor"></a>

```typescript
public readonly UpdateAnomalyMonitor: string;
```

- *Type:* string

[Write] ce:UpdateAnomalyMonitor.

---

##### `UpdateAnomalySubscription`<sup>Required</sup> <a name="UpdateAnomalySubscription" id="@cdk_utils/iam.ce.CeActions.property.UpdateAnomalySubscription"></a>

```typescript
public readonly UpdateAnomalySubscription: string;
```

- *Type:* string

[Write] ce:UpdateAnomalySubscription.

---

##### `UpdateConsoleActionSetEnforced`<sup>Required</sup> <a name="UpdateConsoleActionSetEnforced" id="@cdk_utils/iam.ce.CeActions.property.UpdateConsoleActionSetEnforced"></a>

```typescript
public readonly UpdateConsoleActionSetEnforced: string;
```

- *Type:* string

[Write] ce:UpdateConsoleActionSetEnforced.

---

##### `UpdateCostAllocationTagsStatus`<sup>Required</sup> <a name="UpdateCostAllocationTagsStatus" id="@cdk_utils/iam.ce.CeActions.property.UpdateCostAllocationTagsStatus"></a>

```typescript
public readonly UpdateCostAllocationTagsStatus: string;
```

- *Type:* string

[Write] ce:UpdateCostAllocationTagsStatus.

---

##### `UpdateCostCategoryDefinition`<sup>Required</sup> <a name="UpdateCostCategoryDefinition" id="@cdk_utils/iam.ce.CeActions.property.UpdateCostCategoryDefinition"></a>

```typescript
public readonly UpdateCostCategoryDefinition: string;
```

- *Type:* string

[Write] ce:UpdateCostCategoryDefinition.

---

##### `UpdateNotificationSubscription`<sup>Required</sup> <a name="UpdateNotificationSubscription" id="@cdk_utils/iam.ce.CeActions.property.UpdateNotificationSubscription"></a>

```typescript
public readonly UpdateNotificationSubscription: string;
```

- *Type:* string

[Write] ce:UpdateNotificationSubscription.

---

##### `UpdatePreferences`<sup>Required</sup> <a name="UpdatePreferences" id="@cdk_utils/iam.ce.CeActions.property.UpdatePreferences"></a>

```typescript
public readonly UpdatePreferences: string;
```

- *Type:* string

[Write] ce:UpdatePreferences.

---

##### `UpdateReport`<sup>Required</sup> <a name="UpdateReport" id="@cdk_utils/iam.ce.CeActions.property.UpdateReport"></a>

```typescript
public readonly UpdateReport: string;
```

- *Type:* string

[Write] ce:UpdateReport.

---

### CeConditions <a name="CeConditions" id="@cdk_utils/iam.ce.CeConditions"></a>

Condition key constants and builders for ce.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ce.CeConditions.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

new ce.CeConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ce.CeConditions.requestTag"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ce.CeConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ce.CeConditions.resourceTag"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ce.CeConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ce.CeConditions.tagKeys"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ce.CeConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetAnomaliesConditionKeys">actionGetAnomaliesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAnomalies action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetAnomalyMonitorsConditionKeys">actionGetAnomalyMonitorsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAnomalyMonitors action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetAnomalySubscriptionsConditionKeys">actionGetAnomalySubscriptionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAnomalySubscriptions action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetCostAndUsageComparisonsConditionKeys">actionGetCostAndUsageComparisonsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCostAndUsageComparisons action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetCostAndUsageConditionKeys">actionGetCostAndUsageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCostAndUsage action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetCostAndUsageWithResourcesConditionKeys">actionGetCostAndUsageWithResourcesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCostAndUsageWithResources action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetCostCategoriesConditionKeys">actionGetCostCategoriesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCostCategories action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetCostComparisonDriversConditionKeys">actionGetCostComparisonDriversConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCostComparisonDrivers action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetCostForecastConditionKeys">actionGetCostForecastConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCostForecast action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetDimensionValuesConditionKeys">actionGetDimensionValuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDimensionValues action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetTagsConditionKeys">actionGetTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTags action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.actionGetUsageForecastConditionKeys">actionGetUsageForecastConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetUsageForecast action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.CreateAnomalyMonitorConditionKeys">CreateAnomalyMonitorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAnomalyMonitor action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.CreateAnomalySubscriptionConditionKeys">CreateAnomalySubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAnomalySubscription action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.CreateCostCategoryDefinitionConditionKeys">CreateCostCategoryDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCostCategoryDefinition action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.DeleteAnomalyMonitorConditionKeys">DeleteAnomalyMonitorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAnomalyMonitor action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.DeleteAnomalySubscriptionConditionKeys">DeleteAnomalySubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAnomalySubscription action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.DeleteCostCategoryDefinitionConditionKeys">DeleteCostCategoryDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCostCategoryDefinition action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.DescribeCostCategoryDefinitionConditionKeys">DescribeCostCategoryDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCostCategoryDefinition action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.UpdateAnomalyMonitorConditionKeys">UpdateAnomalyMonitorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAnomalyMonitor action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.UpdateAnomalySubscriptionConditionKeys">UpdateAnomalySubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAnomalySubscription action. |
| <code><a href="#@cdk_utils/iam.ce.CeConditions.property.UpdateCostCategoryDefinitionConditionKeys">UpdateCostCategoryDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCostCategoryDefinition action. |

---

##### `actionGetAnomaliesConditionKeys`<sup>Required</sup> <a name="actionGetAnomaliesConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetAnomaliesConditionKeys"></a>

```typescript
public readonly actionGetAnomaliesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAnomalies action.

---

##### `actionGetAnomalyMonitorsConditionKeys`<sup>Required</sup> <a name="actionGetAnomalyMonitorsConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetAnomalyMonitorsConditionKeys"></a>

```typescript
public readonly actionGetAnomalyMonitorsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAnomalyMonitors action.

---

##### `actionGetAnomalySubscriptionsConditionKeys`<sup>Required</sup> <a name="actionGetAnomalySubscriptionsConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetAnomalySubscriptionsConditionKeys"></a>

```typescript
public readonly actionGetAnomalySubscriptionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAnomalySubscriptions action.

---

##### `actionGetCostAndUsageComparisonsConditionKeys`<sup>Required</sup> <a name="actionGetCostAndUsageComparisonsConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetCostAndUsageComparisonsConditionKeys"></a>

```typescript
public readonly actionGetCostAndUsageComparisonsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCostAndUsageComparisons action.

---

##### `actionGetCostAndUsageConditionKeys`<sup>Required</sup> <a name="actionGetCostAndUsageConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetCostAndUsageConditionKeys"></a>

```typescript
public readonly actionGetCostAndUsageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCostAndUsage action.

---

##### `actionGetCostAndUsageWithResourcesConditionKeys`<sup>Required</sup> <a name="actionGetCostAndUsageWithResourcesConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetCostAndUsageWithResourcesConditionKeys"></a>

```typescript
public readonly actionGetCostAndUsageWithResourcesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCostAndUsageWithResources action.

---

##### `actionGetCostCategoriesConditionKeys`<sup>Required</sup> <a name="actionGetCostCategoriesConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetCostCategoriesConditionKeys"></a>

```typescript
public readonly actionGetCostCategoriesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCostCategories action.

---

##### `actionGetCostComparisonDriversConditionKeys`<sup>Required</sup> <a name="actionGetCostComparisonDriversConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetCostComparisonDriversConditionKeys"></a>

```typescript
public readonly actionGetCostComparisonDriversConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCostComparisonDrivers action.

---

##### `actionGetCostForecastConditionKeys`<sup>Required</sup> <a name="actionGetCostForecastConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetCostForecastConditionKeys"></a>

```typescript
public readonly actionGetCostForecastConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCostForecast action.

---

##### `actionGetDimensionValuesConditionKeys`<sup>Required</sup> <a name="actionGetDimensionValuesConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetDimensionValuesConditionKeys"></a>

```typescript
public readonly actionGetDimensionValuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDimensionValues action.

---

##### `actionGetTagsConditionKeys`<sup>Required</sup> <a name="actionGetTagsConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetTagsConditionKeys"></a>

```typescript
public readonly actionGetTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTags action.

---

##### `actionGetUsageForecastConditionKeys`<sup>Required</sup> <a name="actionGetUsageForecastConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.actionGetUsageForecastConditionKeys"></a>

```typescript
public readonly actionGetUsageForecastConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetUsageForecast action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ce.CeConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ce.CeConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ce.CeConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAnomalyMonitorConditionKeys`<sup>Required</sup> <a name="CreateAnomalyMonitorConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.CreateAnomalyMonitorConditionKeys"></a>

```typescript
public readonly CreateAnomalyMonitorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAnomalyMonitor action.

---

##### `CreateAnomalySubscriptionConditionKeys`<sup>Required</sup> <a name="CreateAnomalySubscriptionConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.CreateAnomalySubscriptionConditionKeys"></a>

```typescript
public readonly CreateAnomalySubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAnomalySubscription action.

---

##### `CreateCostCategoryDefinitionConditionKeys`<sup>Required</sup> <a name="CreateCostCategoryDefinitionConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.CreateCostCategoryDefinitionConditionKeys"></a>

```typescript
public readonly CreateCostCategoryDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCostCategoryDefinition action.

---

##### `DeleteAnomalyMonitorConditionKeys`<sup>Required</sup> <a name="DeleteAnomalyMonitorConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.DeleteAnomalyMonitorConditionKeys"></a>

```typescript
public readonly DeleteAnomalyMonitorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAnomalyMonitor action.

---

##### `DeleteAnomalySubscriptionConditionKeys`<sup>Required</sup> <a name="DeleteAnomalySubscriptionConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.DeleteAnomalySubscriptionConditionKeys"></a>

```typescript
public readonly DeleteAnomalySubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAnomalySubscription action.

---

##### `DeleteCostCategoryDefinitionConditionKeys`<sup>Required</sup> <a name="DeleteCostCategoryDefinitionConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.DeleteCostCategoryDefinitionConditionKeys"></a>

```typescript
public readonly DeleteCostCategoryDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCostCategoryDefinition action.

---

##### `DescribeCostCategoryDefinitionConditionKeys`<sup>Required</sup> <a name="DescribeCostCategoryDefinitionConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.DescribeCostCategoryDefinitionConditionKeys"></a>

```typescript
public readonly DescribeCostCategoryDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCostCategoryDefinition action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAnomalyMonitorConditionKeys`<sup>Required</sup> <a name="UpdateAnomalyMonitorConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.UpdateAnomalyMonitorConditionKeys"></a>

```typescript
public readonly UpdateAnomalyMonitorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAnomalyMonitor action.

---

##### `UpdateAnomalySubscriptionConditionKeys`<sup>Required</sup> <a name="UpdateAnomalySubscriptionConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.UpdateAnomalySubscriptionConditionKeys"></a>

```typescript
public readonly UpdateAnomalySubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAnomalySubscription action.

---

##### `UpdateCostCategoryDefinitionConditionKeys`<sup>Required</sup> <a name="UpdateCostCategoryDefinitionConditionKeys" id="@cdk_utils/iam.ce.CeConditions.property.UpdateCostCategoryDefinitionConditionKeys"></a>

```typescript
public readonly UpdateCostCategoryDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCostCategoryDefinition action.

---

### CeOperations <a name="CeOperations" id="@cdk_utils/iam.ce.CeOperations"></a>

API operation to required IAM actions mapping for ce.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ce.CeOperations.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

new ce.CeOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.CreateAnomalyMonitor">CreateAnomalyMonitor</a></code> | <code>string[]</code> | IAM actions required for the CreateAnomalyMonitor API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.CreateAnomalySubscription">CreateAnomalySubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateAnomalySubscription API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.CreateCostCategoryDefinition">CreateCostCategoryDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateCostCategoryDefinition API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.DeleteAnomalyMonitor">DeleteAnomalyMonitor</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnomalyMonitor API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.DeleteAnomalySubscription">DeleteAnomalySubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnomalySubscription API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.DeleteCostCategoryDefinition">DeleteCostCategoryDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteCostCategoryDefinition API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.DescribeCostCategoryDefinition">DescribeCostCategoryDefinition</a></code> | <code>string[]</code> | IAM actions required for the DescribeCostCategoryDefinition API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.ListCommitmentPurchaseAnalyses">ListCommitmentPurchaseAnalyses</a></code> | <code>string[]</code> | IAM actions required for the ListCommitmentPurchaseAnalyses API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.ListCostAllocationTagBackfillHistory">ListCostAllocationTagBackfillHistory</a></code> | <code>string[]</code> | IAM actions required for the ListCostAllocationTagBackfillHistory API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.ListCostAllocationTags">ListCostAllocationTags</a></code> | <code>string[]</code> | IAM actions required for the ListCostAllocationTags API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.ListCostCategoryDefinitions">ListCostCategoryDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListCostCategoryDefinitions API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.ListCostCategoryResourceAssociations">ListCostCategoryResourceAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListCostCategoryResourceAssociations API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.ListSavingsPlansPurchaseRecommendationGeneration">ListSavingsPlansPurchaseRecommendationGeneration</a></code> | <code>string[]</code> | IAM actions required for the ListSavingsPlansPurchaseRecommendationGeneration API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetAnomalies">opGetAnomalies</a></code> | <code>string[]</code> | IAM actions required for the GetAnomalies API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetAnomalyMonitors">opGetAnomalyMonitors</a></code> | <code>string[]</code> | IAM actions required for the GetAnomalyMonitors API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetAnomalySubscriptions">opGetAnomalySubscriptions</a></code> | <code>string[]</code> | IAM actions required for the GetAnomalySubscriptions API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetApproximateUsageRecords">opGetApproximateUsageRecords</a></code> | <code>string[]</code> | IAM actions required for the GetApproximateUsageRecords API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetCommitmentPurchaseAnalysis">opGetCommitmentPurchaseAnalysis</a></code> | <code>string[]</code> | IAM actions required for the GetCommitmentPurchaseAnalysis API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetCostAndUsage">opGetCostAndUsage</a></code> | <code>string[]</code> | IAM actions required for the GetCostAndUsage API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetCostAndUsageComparisons">opGetCostAndUsageComparisons</a></code> | <code>string[]</code> | IAM actions required for the GetCostAndUsageComparisons API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetCostAndUsageWithResources">opGetCostAndUsageWithResources</a></code> | <code>string[]</code> | IAM actions required for the GetCostAndUsageWithResources API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetCostCategories">opGetCostCategories</a></code> | <code>string[]</code> | IAM actions required for the GetCostCategories API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetCostComparisonDrivers">opGetCostComparisonDrivers</a></code> | <code>string[]</code> | IAM actions required for the GetCostComparisonDrivers API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetCostForecast">opGetCostForecast</a></code> | <code>string[]</code> | IAM actions required for the GetCostForecast API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetDimensionValues">opGetDimensionValues</a></code> | <code>string[]</code> | IAM actions required for the GetDimensionValues API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetReservationCoverage">opGetReservationCoverage</a></code> | <code>string[]</code> | IAM actions required for the GetReservationCoverage API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetReservationPurchaseRecommendation">opGetReservationPurchaseRecommendation</a></code> | <code>string[]</code> | IAM actions required for the GetReservationPurchaseRecommendation API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetReservationUtilization">opGetReservationUtilization</a></code> | <code>string[]</code> | IAM actions required for the GetReservationUtilization API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetRightsizingRecommendation">opGetRightsizingRecommendation</a></code> | <code>string[]</code> | IAM actions required for the GetRightsizingRecommendation API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetSavingsPlanPurchaseRecommendationDetails">opGetSavingsPlanPurchaseRecommendationDetails</a></code> | <code>string[]</code> | IAM actions required for the GetSavingsPlanPurchaseRecommendationDetails API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetSavingsPlansCoverage">opGetSavingsPlansCoverage</a></code> | <code>string[]</code> | IAM actions required for the GetSavingsPlansCoverage API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetSavingsPlansPurchaseRecommendation">opGetSavingsPlansPurchaseRecommendation</a></code> | <code>string[]</code> | IAM actions required for the GetSavingsPlansPurchaseRecommendation API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetSavingsPlansUtilization">opGetSavingsPlansUtilization</a></code> | <code>string[]</code> | IAM actions required for the GetSavingsPlansUtilization API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetSavingsPlansUtilizationDetails">opGetSavingsPlansUtilizationDetails</a></code> | <code>string[]</code> | IAM actions required for the GetSavingsPlansUtilizationDetails API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetTags">opGetTags</a></code> | <code>string[]</code> | IAM actions required for the GetTags API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.opGetUsageForecast">opGetUsageForecast</a></code> | <code>string[]</code> | IAM actions required for the GetUsageForecast API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.ProvideAnomalyFeedback">ProvideAnomalyFeedback</a></code> | <code>string[]</code> | IAM actions required for the ProvideAnomalyFeedback API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.StartCommitmentPurchaseAnalysis">StartCommitmentPurchaseAnalysis</a></code> | <code>string[]</code> | IAM actions required for the StartCommitmentPurchaseAnalysis API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.StartCostAllocationTagBackfill">StartCostAllocationTagBackfill</a></code> | <code>string[]</code> | IAM actions required for the StartCostAllocationTagBackfill API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.StartSavingsPlansPurchaseRecommendationGeneration">StartSavingsPlansPurchaseRecommendationGeneration</a></code> | <code>string[]</code> | IAM actions required for the StartSavingsPlansPurchaseRecommendationGeneration API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.UpdateAnomalyMonitor">UpdateAnomalyMonitor</a></code> | <code>string[]</code> | IAM actions required for the UpdateAnomalyMonitor API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.UpdateAnomalySubscription">UpdateAnomalySubscription</a></code> | <code>string[]</code> | IAM actions required for the UpdateAnomalySubscription API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.UpdateCostAllocationTagsStatus">UpdateCostAllocationTagsStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateCostAllocationTagsStatus API call. |
| <code><a href="#@cdk_utils/iam.ce.CeOperations.property.UpdateCostCategoryDefinition">UpdateCostCategoryDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateCostCategoryDefinition API call. |

---

##### `CreateAnomalyMonitor`<sup>Required</sup> <a name="CreateAnomalyMonitor" id="@cdk_utils/iam.ce.CeOperations.property.CreateAnomalyMonitor"></a>

```typescript
public readonly CreateAnomalyMonitor: string[];
```

- *Type:* string[]

IAM actions required for the CreateAnomalyMonitor API call.

---

##### `CreateAnomalySubscription`<sup>Required</sup> <a name="CreateAnomalySubscription" id="@cdk_utils/iam.ce.CeOperations.property.CreateAnomalySubscription"></a>

```typescript
public readonly CreateAnomalySubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateAnomalySubscription API call.

---

##### `CreateCostCategoryDefinition`<sup>Required</sup> <a name="CreateCostCategoryDefinition" id="@cdk_utils/iam.ce.CeOperations.property.CreateCostCategoryDefinition"></a>

```typescript
public readonly CreateCostCategoryDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateCostCategoryDefinition API call.

---

##### `DeleteAnomalyMonitor`<sup>Required</sup> <a name="DeleteAnomalyMonitor" id="@cdk_utils/iam.ce.CeOperations.property.DeleteAnomalyMonitor"></a>

```typescript
public readonly DeleteAnomalyMonitor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnomalyMonitor API call.

---

##### `DeleteAnomalySubscription`<sup>Required</sup> <a name="DeleteAnomalySubscription" id="@cdk_utils/iam.ce.CeOperations.property.DeleteAnomalySubscription"></a>

```typescript
public readonly DeleteAnomalySubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnomalySubscription API call.

---

##### `DeleteCostCategoryDefinition`<sup>Required</sup> <a name="DeleteCostCategoryDefinition" id="@cdk_utils/iam.ce.CeOperations.property.DeleteCostCategoryDefinition"></a>

```typescript
public readonly DeleteCostCategoryDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCostCategoryDefinition API call.

---

##### `DescribeCostCategoryDefinition`<sup>Required</sup> <a name="DescribeCostCategoryDefinition" id="@cdk_utils/iam.ce.CeOperations.property.DescribeCostCategoryDefinition"></a>

```typescript
public readonly DescribeCostCategoryDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCostCategoryDefinition API call.

---

##### `ListCommitmentPurchaseAnalyses`<sup>Required</sup> <a name="ListCommitmentPurchaseAnalyses" id="@cdk_utils/iam.ce.CeOperations.property.ListCommitmentPurchaseAnalyses"></a>

```typescript
public readonly ListCommitmentPurchaseAnalyses: string[];
```

- *Type:* string[]

IAM actions required for the ListCommitmentPurchaseAnalyses API call.

---

##### `ListCostAllocationTagBackfillHistory`<sup>Required</sup> <a name="ListCostAllocationTagBackfillHistory" id="@cdk_utils/iam.ce.CeOperations.property.ListCostAllocationTagBackfillHistory"></a>

```typescript
public readonly ListCostAllocationTagBackfillHistory: string[];
```

- *Type:* string[]

IAM actions required for the ListCostAllocationTagBackfillHistory API call.

---

##### `ListCostAllocationTags`<sup>Required</sup> <a name="ListCostAllocationTags" id="@cdk_utils/iam.ce.CeOperations.property.ListCostAllocationTags"></a>

```typescript
public readonly ListCostAllocationTags: string[];
```

- *Type:* string[]

IAM actions required for the ListCostAllocationTags API call.

---

##### `ListCostCategoryDefinitions`<sup>Required</sup> <a name="ListCostCategoryDefinitions" id="@cdk_utils/iam.ce.CeOperations.property.ListCostCategoryDefinitions"></a>

```typescript
public readonly ListCostCategoryDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListCostCategoryDefinitions API call.

---

##### `ListCostCategoryResourceAssociations`<sup>Required</sup> <a name="ListCostCategoryResourceAssociations" id="@cdk_utils/iam.ce.CeOperations.property.ListCostCategoryResourceAssociations"></a>

```typescript
public readonly ListCostCategoryResourceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListCostCategoryResourceAssociations API call.

---

##### `ListSavingsPlansPurchaseRecommendationGeneration`<sup>Required</sup> <a name="ListSavingsPlansPurchaseRecommendationGeneration" id="@cdk_utils/iam.ce.CeOperations.property.ListSavingsPlansPurchaseRecommendationGeneration"></a>

```typescript
public readonly ListSavingsPlansPurchaseRecommendationGeneration: string[];
```

- *Type:* string[]

IAM actions required for the ListSavingsPlansPurchaseRecommendationGeneration API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ce.CeOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAnomalies`<sup>Required</sup> <a name="opGetAnomalies" id="@cdk_utils/iam.ce.CeOperations.property.opGetAnomalies"></a>

```typescript
public readonly opGetAnomalies: string[];
```

- *Type:* string[]

IAM actions required for the GetAnomalies API call.

---

##### `opGetAnomalyMonitors`<sup>Required</sup> <a name="opGetAnomalyMonitors" id="@cdk_utils/iam.ce.CeOperations.property.opGetAnomalyMonitors"></a>

```typescript
public readonly opGetAnomalyMonitors: string[];
```

- *Type:* string[]

IAM actions required for the GetAnomalyMonitors API call.

---

##### `opGetAnomalySubscriptions`<sup>Required</sup> <a name="opGetAnomalySubscriptions" id="@cdk_utils/iam.ce.CeOperations.property.opGetAnomalySubscriptions"></a>

```typescript
public readonly opGetAnomalySubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the GetAnomalySubscriptions API call.

---

##### `opGetApproximateUsageRecords`<sup>Required</sup> <a name="opGetApproximateUsageRecords" id="@cdk_utils/iam.ce.CeOperations.property.opGetApproximateUsageRecords"></a>

```typescript
public readonly opGetApproximateUsageRecords: string[];
```

- *Type:* string[]

IAM actions required for the GetApproximateUsageRecords API call.

---

##### `opGetCommitmentPurchaseAnalysis`<sup>Required</sup> <a name="opGetCommitmentPurchaseAnalysis" id="@cdk_utils/iam.ce.CeOperations.property.opGetCommitmentPurchaseAnalysis"></a>

```typescript
public readonly opGetCommitmentPurchaseAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the GetCommitmentPurchaseAnalysis API call.

---

##### `opGetCostAndUsage`<sup>Required</sup> <a name="opGetCostAndUsage" id="@cdk_utils/iam.ce.CeOperations.property.opGetCostAndUsage"></a>

```typescript
public readonly opGetCostAndUsage: string[];
```

- *Type:* string[]

IAM actions required for the GetCostAndUsage API call.

---

##### `opGetCostAndUsageComparisons`<sup>Required</sup> <a name="opGetCostAndUsageComparisons" id="@cdk_utils/iam.ce.CeOperations.property.opGetCostAndUsageComparisons"></a>

```typescript
public readonly opGetCostAndUsageComparisons: string[];
```

- *Type:* string[]

IAM actions required for the GetCostAndUsageComparisons API call.

---

##### `opGetCostAndUsageWithResources`<sup>Required</sup> <a name="opGetCostAndUsageWithResources" id="@cdk_utils/iam.ce.CeOperations.property.opGetCostAndUsageWithResources"></a>

```typescript
public readonly opGetCostAndUsageWithResources: string[];
```

- *Type:* string[]

IAM actions required for the GetCostAndUsageWithResources API call.

---

##### `opGetCostCategories`<sup>Required</sup> <a name="opGetCostCategories" id="@cdk_utils/iam.ce.CeOperations.property.opGetCostCategories"></a>

```typescript
public readonly opGetCostCategories: string[];
```

- *Type:* string[]

IAM actions required for the GetCostCategories API call.

---

##### `opGetCostComparisonDrivers`<sup>Required</sup> <a name="opGetCostComparisonDrivers" id="@cdk_utils/iam.ce.CeOperations.property.opGetCostComparisonDrivers"></a>

```typescript
public readonly opGetCostComparisonDrivers: string[];
```

- *Type:* string[]

IAM actions required for the GetCostComparisonDrivers API call.

---

##### `opGetCostForecast`<sup>Required</sup> <a name="opGetCostForecast" id="@cdk_utils/iam.ce.CeOperations.property.opGetCostForecast"></a>

```typescript
public readonly opGetCostForecast: string[];
```

- *Type:* string[]

IAM actions required for the GetCostForecast API call.

---

##### `opGetDimensionValues`<sup>Required</sup> <a name="opGetDimensionValues" id="@cdk_utils/iam.ce.CeOperations.property.opGetDimensionValues"></a>

```typescript
public readonly opGetDimensionValues: string[];
```

- *Type:* string[]

IAM actions required for the GetDimensionValues API call.

---

##### `opGetReservationCoverage`<sup>Required</sup> <a name="opGetReservationCoverage" id="@cdk_utils/iam.ce.CeOperations.property.opGetReservationCoverage"></a>

```typescript
public readonly opGetReservationCoverage: string[];
```

- *Type:* string[]

IAM actions required for the GetReservationCoverage API call.

---

##### `opGetReservationPurchaseRecommendation`<sup>Required</sup> <a name="opGetReservationPurchaseRecommendation" id="@cdk_utils/iam.ce.CeOperations.property.opGetReservationPurchaseRecommendation"></a>

```typescript
public readonly opGetReservationPurchaseRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the GetReservationPurchaseRecommendation API call.

---

##### `opGetReservationUtilization`<sup>Required</sup> <a name="opGetReservationUtilization" id="@cdk_utils/iam.ce.CeOperations.property.opGetReservationUtilization"></a>

```typescript
public readonly opGetReservationUtilization: string[];
```

- *Type:* string[]

IAM actions required for the GetReservationUtilization API call.

---

##### `opGetRightsizingRecommendation`<sup>Required</sup> <a name="opGetRightsizingRecommendation" id="@cdk_utils/iam.ce.CeOperations.property.opGetRightsizingRecommendation"></a>

```typescript
public readonly opGetRightsizingRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the GetRightsizingRecommendation API call.

---

##### `opGetSavingsPlanPurchaseRecommendationDetails`<sup>Required</sup> <a name="opGetSavingsPlanPurchaseRecommendationDetails" id="@cdk_utils/iam.ce.CeOperations.property.opGetSavingsPlanPurchaseRecommendationDetails"></a>

```typescript
public readonly opGetSavingsPlanPurchaseRecommendationDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetSavingsPlanPurchaseRecommendationDetails API call.

---

##### `opGetSavingsPlansCoverage`<sup>Required</sup> <a name="opGetSavingsPlansCoverage" id="@cdk_utils/iam.ce.CeOperations.property.opGetSavingsPlansCoverage"></a>

```typescript
public readonly opGetSavingsPlansCoverage: string[];
```

- *Type:* string[]

IAM actions required for the GetSavingsPlansCoverage API call.

---

##### `opGetSavingsPlansPurchaseRecommendation`<sup>Required</sup> <a name="opGetSavingsPlansPurchaseRecommendation" id="@cdk_utils/iam.ce.CeOperations.property.opGetSavingsPlansPurchaseRecommendation"></a>

```typescript
public readonly opGetSavingsPlansPurchaseRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the GetSavingsPlansPurchaseRecommendation API call.

---

##### `opGetSavingsPlansUtilization`<sup>Required</sup> <a name="opGetSavingsPlansUtilization" id="@cdk_utils/iam.ce.CeOperations.property.opGetSavingsPlansUtilization"></a>

```typescript
public readonly opGetSavingsPlansUtilization: string[];
```

- *Type:* string[]

IAM actions required for the GetSavingsPlansUtilization API call.

---

##### `opGetSavingsPlansUtilizationDetails`<sup>Required</sup> <a name="opGetSavingsPlansUtilizationDetails" id="@cdk_utils/iam.ce.CeOperations.property.opGetSavingsPlansUtilizationDetails"></a>

```typescript
public readonly opGetSavingsPlansUtilizationDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetSavingsPlansUtilizationDetails API call.

---

##### `opGetTags`<sup>Required</sup> <a name="opGetTags" id="@cdk_utils/iam.ce.CeOperations.property.opGetTags"></a>

```typescript
public readonly opGetTags: string[];
```

- *Type:* string[]

IAM actions required for the GetTags API call.

---

##### `opGetUsageForecast`<sup>Required</sup> <a name="opGetUsageForecast" id="@cdk_utils/iam.ce.CeOperations.property.opGetUsageForecast"></a>

```typescript
public readonly opGetUsageForecast: string[];
```

- *Type:* string[]

IAM actions required for the GetUsageForecast API call.

---

##### `ProvideAnomalyFeedback`<sup>Required</sup> <a name="ProvideAnomalyFeedback" id="@cdk_utils/iam.ce.CeOperations.property.ProvideAnomalyFeedback"></a>

```typescript
public readonly ProvideAnomalyFeedback: string[];
```

- *Type:* string[]

IAM actions required for the ProvideAnomalyFeedback API call.

---

##### `StartCommitmentPurchaseAnalysis`<sup>Required</sup> <a name="StartCommitmentPurchaseAnalysis" id="@cdk_utils/iam.ce.CeOperations.property.StartCommitmentPurchaseAnalysis"></a>

```typescript
public readonly StartCommitmentPurchaseAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the StartCommitmentPurchaseAnalysis API call.

---

##### `StartCostAllocationTagBackfill`<sup>Required</sup> <a name="StartCostAllocationTagBackfill" id="@cdk_utils/iam.ce.CeOperations.property.StartCostAllocationTagBackfill"></a>

```typescript
public readonly StartCostAllocationTagBackfill: string[];
```

- *Type:* string[]

IAM actions required for the StartCostAllocationTagBackfill API call.

---

##### `StartSavingsPlansPurchaseRecommendationGeneration`<sup>Required</sup> <a name="StartSavingsPlansPurchaseRecommendationGeneration" id="@cdk_utils/iam.ce.CeOperations.property.StartSavingsPlansPurchaseRecommendationGeneration"></a>

```typescript
public readonly StartSavingsPlansPurchaseRecommendationGeneration: string[];
```

- *Type:* string[]

IAM actions required for the StartSavingsPlansPurchaseRecommendationGeneration API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ce.CeOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ce.CeOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAnomalyMonitor`<sup>Required</sup> <a name="UpdateAnomalyMonitor" id="@cdk_utils/iam.ce.CeOperations.property.UpdateAnomalyMonitor"></a>

```typescript
public readonly UpdateAnomalyMonitor: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAnomalyMonitor API call.

---

##### `UpdateAnomalySubscription`<sup>Required</sup> <a name="UpdateAnomalySubscription" id="@cdk_utils/iam.ce.CeOperations.property.UpdateAnomalySubscription"></a>

```typescript
public readonly UpdateAnomalySubscription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAnomalySubscription API call.

---

##### `UpdateCostAllocationTagsStatus`<sup>Required</sup> <a name="UpdateCostAllocationTagsStatus" id="@cdk_utils/iam.ce.CeOperations.property.UpdateCostAllocationTagsStatus"></a>

```typescript
public readonly UpdateCostAllocationTagsStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCostAllocationTagsStatus API call.

---

##### `UpdateCostCategoryDefinition`<sup>Required</sup> <a name="UpdateCostCategoryDefinition" id="@cdk_utils/iam.ce.CeOperations.property.UpdateCostCategoryDefinition"></a>

```typescript
public readonly UpdateCostCategoryDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCostCategoryDefinition API call.

---

### CeResources <a name="CeResources" id="@cdk_utils/iam.ce.CeResources"></a>

ARN builders, validators, and parsers for ce resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ce.CeResources.Initializer"></a>

```typescript
import { ce } from '@cdk_utils/iam'

new ce.CeResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ce.CeResources.anomalymonitor">anomalymonitor</a></code> | Builds an ARN for the anomalymonitor resource. |
| <code><a href="#@cdk_utils/iam.ce.CeResources.anomalysubscription">anomalysubscription</a></code> | Builds an ARN for the anomalysubscription resource. |
| <code><a href="#@cdk_utils/iam.ce.CeResources.billingview">billingview</a></code> | Builds an ARN for the billingview resource. |
| <code><a href="#@cdk_utils/iam.ce.CeResources.costcategory">costcategory</a></code> | Builds an ARN for the costcategory resource. |
| <code><a href="#@cdk_utils/iam.ce.CeResources.isValidAnomalymonitorArn">isValidAnomalymonitorArn</a></code> | Validates whether a string is a valid ARN for the anomalymonitor resource. |
| <code><a href="#@cdk_utils/iam.ce.CeResources.isValidAnomalysubscriptionArn">isValidAnomalysubscriptionArn</a></code> | Validates whether a string is a valid ARN for the anomalysubscription resource. |
| <code><a href="#@cdk_utils/iam.ce.CeResources.isValidBillingviewArn">isValidBillingviewArn</a></code> | Validates whether a string is a valid ARN for the billingview resource. |
| <code><a href="#@cdk_utils/iam.ce.CeResources.isValidCostcategoryArn">isValidCostcategoryArn</a></code> | Validates whether a string is a valid ARN for the costcategory resource. |
| <code><a href="#@cdk_utils/iam.ce.CeResources.parseAnomalymonitorArn">parseAnomalymonitorArn</a></code> | Parses a anomalymonitor ARN into its components. |
| <code><a href="#@cdk_utils/iam.ce.CeResources.parseAnomalysubscriptionArn">parseAnomalysubscriptionArn</a></code> | Parses a anomalysubscription ARN into its components. |
| <code><a href="#@cdk_utils/iam.ce.CeResources.parseBillingviewArn">parseBillingviewArn</a></code> | Parses a billingview ARN into its components. |
| <code><a href="#@cdk_utils/iam.ce.CeResources.parseCostcategoryArn">parseCostcategoryArn</a></code> | Parses a costcategory ARN into its components. |

---

##### `anomalymonitor` <a name="anomalymonitor" id="@cdk_utils/iam.ce.CeResources.anomalymonitor"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.anomalymonitor(props: CeAnomalymonitorArnProps)
```

Builds an ARN for the anomalymonitor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ce.CeResources.anomalymonitor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ce.CeAnomalymonitorArnProps">CeAnomalymonitorArnProps</a>

---

##### `anomalysubscription` <a name="anomalysubscription" id="@cdk_utils/iam.ce.CeResources.anomalysubscription"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.anomalysubscription(props: CeAnomalysubscriptionArnProps)
```

Builds an ARN for the anomalysubscription resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ce.CeResources.anomalysubscription.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ce.CeAnomalysubscriptionArnProps">CeAnomalysubscriptionArnProps</a>

---

##### `billingview` <a name="billingview" id="@cdk_utils/iam.ce.CeResources.billingview"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.billingview(props: CeBillingviewArnProps)
```

Builds an ARN for the billingview resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ce.CeResources.billingview.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ce.CeBillingviewArnProps">CeBillingviewArnProps</a>

---

##### `costcategory` <a name="costcategory" id="@cdk_utils/iam.ce.CeResources.costcategory"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.costcategory(props: CeCostcategoryArnProps)
```

Builds an ARN for the costcategory resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ce.CeResources.costcategory.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ce.CeCostcategoryArnProps">CeCostcategoryArnProps</a>

---

##### `isValidAnomalymonitorArn` <a name="isValidAnomalymonitorArn" id="@cdk_utils/iam.ce.CeResources.isValidAnomalymonitorArn"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.isValidAnomalymonitorArn(arn: string)
```

Validates whether a string is a valid ARN for the anomalymonitor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ce.CeResources.isValidAnomalymonitorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAnomalysubscriptionArn` <a name="isValidAnomalysubscriptionArn" id="@cdk_utils/iam.ce.CeResources.isValidAnomalysubscriptionArn"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.isValidAnomalysubscriptionArn(arn: string)
```

Validates whether a string is a valid ARN for the anomalysubscription resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ce.CeResources.isValidAnomalysubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBillingviewArn` <a name="isValidBillingviewArn" id="@cdk_utils/iam.ce.CeResources.isValidBillingviewArn"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.isValidBillingviewArn(arn: string)
```

Validates whether a string is a valid ARN for the billingview resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ce.CeResources.isValidBillingviewArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCostcategoryArn` <a name="isValidCostcategoryArn" id="@cdk_utils/iam.ce.CeResources.isValidCostcategoryArn"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.isValidCostcategoryArn(arn: string)
```

Validates whether a string is a valid ARN for the costcategory resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ce.CeResources.isValidCostcategoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAnomalymonitorArn` <a name="parseAnomalymonitorArn" id="@cdk_utils/iam.ce.CeResources.parseAnomalymonitorArn"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.parseAnomalymonitorArn(arn: string)
```

Parses a anomalymonitor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ce.CeResources.parseAnomalymonitorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAnomalysubscriptionArn` <a name="parseAnomalysubscriptionArn" id="@cdk_utils/iam.ce.CeResources.parseAnomalysubscriptionArn"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.parseAnomalysubscriptionArn(arn: string)
```

Parses a anomalysubscription ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ce.CeResources.parseAnomalysubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBillingviewArn` <a name="parseBillingviewArn" id="@cdk_utils/iam.ce.CeResources.parseBillingviewArn"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.parseBillingviewArn(arn: string)
```

Parses a billingview ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ce.CeResources.parseBillingviewArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCostcategoryArn` <a name="parseCostcategoryArn" id="@cdk_utils/iam.ce.CeResources.parseCostcategoryArn"></a>

```typescript
import { ce } from '@cdk_utils/iam'

ce.CeResources.parseCostcategoryArn(arn: string)
```

Parses a costcategory ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ce.CeResources.parseCostcategoryArn.parameter.arn"></a>

- *Type:* string

---




