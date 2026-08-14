# `aws_marketplace` Submodule <a name="`aws_marketplace` Submodule" id="@cdk_utils/iam.aws_marketplace"></a>


## Structs <a name="Structs" id="Structs"></a>

### AWSMarketplaceAllListingsArnComponents <a name="AWSMarketplaceAllListingsArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnComponents"></a>

Parsed components of a AllListings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceAllListingsArnComponents: aws_marketplace.AWSMarketplaceAllListingsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnComponents.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnComponents.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AWSMarketplaceAllListingsArnProps <a name="AWSMarketplaceAllListingsArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnProps"></a>

Properties for building a AllListings ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceAllListingsArnProps: aws_marketplace.AWSMarketplaceAllListingsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnProps.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnProps.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceAllPurchaseOptionsArnComponents <a name="AWSMarketplaceAllPurchaseOptionsArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnComponents"></a>

Parsed components of a AllPurchaseOptions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceAllPurchaseOptionsArnComponents: aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnComponents.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnComponents.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AWSMarketplaceAllPurchaseOptionsArnProps <a name="AWSMarketplaceAllPurchaseOptionsArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps"></a>

Properties for building a AllPurchaseOptions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceAllPurchaseOptionsArnProps: aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceAssessmentArnComponents <a name="AWSMarketplaceAssessmentArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents"></a>

Parsed components of a Assessment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceAssessmentArnComponents: aws_marketplace.AWSMarketplaceAssessmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AWSMarketplaceAssessmentArnProps <a name="AWSMarketplaceAssessmentArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps"></a>

Properties for building a Assessment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceAssessmentArnProps: aws_marketplace.AWSMarketplaceAssessmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceChangeSetArnComponents <a name="AWSMarketplaceChangeSetArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents"></a>

Parsed components of a ChangeSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceChangeSetArnComponents: aws_marketplace.AWSMarketplaceChangeSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AWSMarketplaceChangeSetArnProps <a name="AWSMarketplaceChangeSetArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps"></a>

Properties for building a ChangeSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceChangeSetArnProps: aws_marketplace.AWSMarketplaceChangeSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceDashboardArnComponents <a name="AWSMarketplaceDashboardArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents"></a>

Parsed components of a Dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceDashboardArnComponents: aws_marketplace.AWSMarketplaceDashboardArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents.property.factTable">factTable</a></code> | <code>string</code> | The FactTable component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component.

---

##### `factTable`<sup>Required</sup> <a name="factTable" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents.property.factTable"></a>

```typescript
public readonly factTable: string;
```

- *Type:* string

The FactTable component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### AWSMarketplaceDashboardArnProps <a name="AWSMarketplaceDashboardArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps"></a>

Properties for building a Dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceDashboardArnProps: aws_marketplace.AWSMarketplaceDashboardArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps.property.factTable">factTable</a></code> | <code>string</code> | The FactTable component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component of the ARN.

---

##### `factTable`<sup>Required</sup> <a name="factTable" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps.property.factTable"></a>

```typescript
public readonly factTable: string;
```

- *Type:* string

The FactTable component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### AWSMarketplaceDeploymentParameterArnComponents <a name="AWSMarketplaceDeploymentParameterArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents"></a>

Parsed components of a DeploymentParameter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceDeploymentParameterArnComponents: aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.productId">productId</a></code> | <code>string</code> | The ProductId component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AWSMarketplaceDeploymentParameterArnProps <a name="AWSMarketplaceDeploymentParameterArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps"></a>

Properties for building a DeploymentParameter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceDeploymentParameterArnProps: aws_marketplace.AWSMarketplaceDeploymentParameterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.productId">productId</a></code> | <code>string</code> | The ProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component of the ARN.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceEntityArnComponents <a name="AWSMarketplaceEntityArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents"></a>

Parsed components of a Entity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceEntityArnComponents: aws_marketplace.AWSMarketplaceEntityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.entityType">entityType</a></code> | <code>string</code> | The EntityType component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

The EntityType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AWSMarketplaceEntityArnProps <a name="AWSMarketplaceEntityArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps"></a>

Properties for building a Entity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceEntityArnProps: aws_marketplace.AWSMarketplaceEntityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.entityType">entityType</a></code> | <code>string</code> | The EntityType component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

The EntityType component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceInvoiceSubmissionTaskArnComponents <a name="AWSMarketplaceInvoiceSubmissionTaskArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents"></a>

Parsed components of a InvoiceSubmissionTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceInvoiceSubmissionTaskArnComponents: aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AWSMarketplaceInvoiceSubmissionTaskArnProps <a name="AWSMarketplaceInvoiceSubmissionTaskArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps"></a>

Properties for building a InvoiceSubmissionTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceInvoiceSubmissionTaskArnProps: aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceIssuedTaxInvoiceArnComponents <a name="AWSMarketplaceIssuedTaxInvoiceArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents"></a>

Parsed components of a IssuedTaxInvoice ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceIssuedTaxInvoiceArnComponents: aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AWSMarketplaceIssuedTaxInvoiceArnProps <a name="AWSMarketplaceIssuedTaxInvoiceArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps"></a>

Properties for building a IssuedTaxInvoice ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceIssuedTaxInvoiceArnProps: aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceListingArnComponents <a name="AWSMarketplaceListingArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents"></a>

Parsed components of a Listing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceListingArnComponents: aws_marketplace.AWSMarketplaceListingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents.property.listingId">listingId</a></code> | <code>string</code> | The ListingId component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component.

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

The ListingId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AWSMarketplaceListingArnProps <a name="AWSMarketplaceListingArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps"></a>

Properties for building a Listing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceListingArnProps: aws_marketplace.AWSMarketplaceListingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps.property.listingId">listingId</a></code> | <code>string</code> | The ListingId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component of the ARN.

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

The ListingId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceOfferArnComponents <a name="AWSMarketplaceOfferArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents"></a>

Parsed components of a Offer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceOfferArnComponents: aws_marketplace.AWSMarketplaceOfferArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents.property.offerId">offerId</a></code> | <code>string</code> | The OfferId component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component.

---

##### `offerId`<sup>Required</sup> <a name="offerId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents.property.offerId"></a>

```typescript
public readonly offerId: string;
```

- *Type:* string

The OfferId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AWSMarketplaceOfferArnProps <a name="AWSMarketplaceOfferArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps"></a>

Properties for building a Offer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceOfferArnProps: aws_marketplace.AWSMarketplaceOfferArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps.property.offerId">offerId</a></code> | <code>string</code> | The OfferId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component of the ARN.

---

##### `offerId`<sup>Required</sup> <a name="offerId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps.property.offerId"></a>

```typescript
public readonly offerId: string;
```

- *Type:* string

The OfferId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceOfferSetArnComponents <a name="AWSMarketplaceOfferSetArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents"></a>

Parsed components of a OfferSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceOfferSetArnComponents: aws_marketplace.AWSMarketplaceOfferSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents.property.offerSetId">offerSetId</a></code> | <code>string</code> | The OfferSetId component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component.

---

##### `offerSetId`<sup>Required</sup> <a name="offerSetId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents.property.offerSetId"></a>

```typescript
public readonly offerSetId: string;
```

- *Type:* string

The OfferSetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AWSMarketplaceOfferSetArnProps <a name="AWSMarketplaceOfferSetArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps"></a>

Properties for building a OfferSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceOfferSetArnProps: aws_marketplace.AWSMarketplaceOfferSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps.property.offerSetId">offerSetId</a></code> | <code>string</code> | The OfferSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component of the ARN.

---

##### `offerSetId`<sup>Required</sup> <a name="offerSetId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps.property.offerSetId"></a>

```typescript
public readonly offerSetId: string;
```

- *Type:* string

The OfferSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceProductArnComponents <a name="AWSMarketplaceProductArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents"></a>

Parsed components of a Product ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceProductArnComponents: aws_marketplace.AWSMarketplaceProductArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents.property.productId">productId</a></code> | <code>string</code> | The ProductId component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AWSMarketplaceProductArnProps <a name="AWSMarketplaceProductArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps"></a>

Properties for building a Product ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceProductArnProps: aws_marketplace.AWSMarketplaceProductArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps.property.productId">productId</a></code> | <code>string</code> | The ProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component of the ARN.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplacePurchaseOptionArnComponents <a name="AWSMarketplacePurchaseOptionArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents"></a>

Parsed components of a PurchaseOption ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplacePurchaseOptionArnComponents: aws_marketplace.AWSMarketplacePurchaseOptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents.property.purchaseOptionId">purchaseOptionId</a></code> | <code>string</code> | The PurchaseOptionId component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `purchaseOptionId`<sup>Required</sup> <a name="purchaseOptionId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents.property.purchaseOptionId"></a>

```typescript
public readonly purchaseOptionId: string;
```

- *Type:* string

The PurchaseOptionId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AWSMarketplacePurchaseOptionArnProps <a name="AWSMarketplacePurchaseOptionArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps"></a>

Properties for building a PurchaseOption ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplacePurchaseOptionArnProps: aws_marketplace.AWSMarketplacePurchaseOptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps.property.catalogName">catalogName</a></code> | <code>string</code> | The CatalogName component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps.property.purchaseOptionId">purchaseOptionId</a></code> | <code>string</code> | The PurchaseOptionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The CatalogName component of the ARN.

---

##### `purchaseOptionId`<sup>Required</sup> <a name="purchaseOptionId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps.property.purchaseOptionId"></a>

```typescript
public readonly purchaseOptionId: string;
```

- *Type:* string

The PurchaseOptionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceSellerDashboardArnComponents <a name="AWSMarketplaceSellerDashboardArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents"></a>

Parsed components of a SellerDashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceSellerDashboardArnComponents: aws_marketplace.AWSMarketplaceSellerDashboardArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents.property.factTable">factTable</a></code> | <code>string</code> | The FactTable component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component.

---

##### `factTable`<sup>Required</sup> <a name="factTable" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents.property.factTable"></a>

```typescript
public readonly factTable: string;
```

- *Type:* string

The FactTable component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### AWSMarketplaceSellerDashboardArnProps <a name="AWSMarketplaceSellerDashboardArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps"></a>

Properties for building a SellerDashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceSellerDashboardArnProps: aws_marketplace.AWSMarketplaceSellerDashboardArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps.property.factTable">factTable</a></code> | <code>string</code> | The FactTable component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component of the ARN.

---

##### `factTable`<sup>Required</sup> <a name="factTable" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps.property.factTable"></a>

```typescript
public readonly factTable: string;
```

- *Type:* string

The FactTable component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### AWSMarketplaceTaxComplianceProfileArnComponents <a name="AWSMarketplaceTaxComplianceProfileArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnComponents"></a>

Parsed components of a TaxComplianceProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceTaxComplianceProfileArnComponents: aws_marketplace.AWSMarketplaceTaxComplianceProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AWSMarketplaceTaxComplianceProfileArnProps <a name="AWSMarketplaceTaxComplianceProfileArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps"></a>

Properties for building a TaxComplianceProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceTaxComplianceProfileArnProps: aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents <a name="AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents"></a>

Parsed components of a TaxComplianceProfileChangeTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceTaxComplianceProfileChangeTaskArnComponents: aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AWSMarketplaceTaxComplianceProfileChangeTaskArnProps <a name="AWSMarketplaceTaxComplianceProfileChangeTaskArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps"></a>

Properties for building a TaxComplianceProfileChangeTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceTaxComplianceProfileChangeTaskArnProps: aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AWSMarketplaceVerificationEvidenceArnComponents <a name="AWSMarketplaceVerificationEvidenceArnComponents" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents"></a>

Parsed components of a VerificationEvidence ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceVerificationEvidenceArnComponents: aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents.property.verificationType">verificationType</a></code> | <code>string</code> | The VerificationType component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

##### `verificationType`<sup>Required</sup> <a name="verificationType" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnComponents.property.verificationType"></a>

```typescript
public readonly verificationType: string;
```

- *Type:* string

The VerificationType component.

---

### AWSMarketplaceVerificationEvidenceArnProps <a name="AWSMarketplaceVerificationEvidenceArnProps" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps"></a>

Properties for building a VerificationEvidence ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

const aWSMarketplaceVerificationEvidenceArnProps: aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps.property.verificationType">verificationType</a></code> | <code>string</code> | The VerificationType component of the ARN. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `verificationType`<sup>Required</sup> <a name="verificationType" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps.property.verificationType"></a>

```typescript
public readonly verificationType: string;
```

- *Type:* string

The VerificationType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AWSMarketplaceActions <a name="AWSMarketplaceActions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions"></a>

IAM action constants for the aws-marketplace service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

new aws_marketplace.AWSMarketplaceActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AcceptAgreementApprovalRequest">AcceptAgreementApprovalRequest</a></code> | <code>string</code> | [Write] aws-marketplace:AcceptAgreementApprovalRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AcceptAgreementCancellationRequest">AcceptAgreementCancellationRequest</a></code> | <code>string</code> | [Write] aws-marketplace:AcceptAgreementCancellationRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AcceptAgreementPaymentRequest">AcceptAgreementPaymentRequest</a></code> | <code>string</code> | [Write] aws-marketplace:AcceptAgreementPaymentRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AcceptAgreementRequest">AcceptAgreementRequest</a></code> | <code>string</code> | [Write] aws-marketplace:AcceptAgreementRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementApprovalRequest">actionGetAgreementApprovalRequest</a></code> | <code>string</code> | [Read] aws-marketplace:GetAgreementApprovalRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementCancellationRequest">actionGetAgreementCancellationRequest</a></code> | <code>string</code> | [Read] aws-marketplace:GetAgreementCancellationRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementEntitlements">actionGetAgreementEntitlements</a></code> | <code>string</code> | [Read] aws-marketplace:GetAgreementEntitlements. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementPaymentRequest">actionGetAgreementPaymentRequest</a></code> | <code>string</code> | [Read] aws-marketplace:GetAgreementPaymentRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementRequest">actionGetAgreementRequest</a></code> | <code>string</code> | [Read] aws-marketplace:GetAgreementRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementTerms">actionGetAgreementTerms</a></code> | <code>string</code> | [List] aws-marketplace:GetAgreementTerms. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetBillingAdjustmentRequest">actionGetBillingAdjustmentRequest</a></code> | <code>string</code> | [Read] aws-marketplace:GetBillingAdjustmentRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetBuyerDashboard">actionGetBuyerDashboard</a></code> | <code>string</code> | [Read] aws-marketplace:GetBuyerDashboard. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetEntitlements">actionGetEntitlements</a></code> | <code>string</code> | [Read] aws-marketplace:GetEntitlements. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetInvoiceSubmissionTask">actionGetInvoiceSubmissionTask</a></code> | <code>string</code> | [Read] aws-marketplace:GetInvoiceSubmissionTask. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetIssuedTaxInvoice">actionGetIssuedTaxInvoice</a></code> | <code>string</code> | [Read] aws-marketplace:GetIssuedTaxInvoice. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetListing">actionGetListing</a></code> | <code>string</code> | [Read] aws-marketplace:GetListing. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetOffer">actionGetOffer</a></code> | <code>string</code> | [Read] aws-marketplace:GetOffer. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetOfferSet">actionGetOfferSet</a></code> | <code>string</code> | [Read] aws-marketplace:GetOfferSet. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetOfferTerms">actionGetOfferTerms</a></code> | <code>string</code> | [Read] aws-marketplace:GetOfferTerms. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetProduct">actionGetProduct</a></code> | <code>string</code> | [Read] aws-marketplace:GetProduct. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] aws-marketplace:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetSellerDashboard">actionGetSellerDashboard</a></code> | <code>string</code> | [Read] aws-marketplace:GetSellerDashboard. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetTaxComplianceProfile">actionGetTaxComplianceProfile</a></code> | <code>string</code> | [Read] aws-marketplace:GetTaxComplianceProfile. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetVerification">actionGetVerification</a></code> | <code>string</code> | [Read] aws-marketplace:GetVerification. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetVerificationEvidence">actionGetVerificationEvidence</a></code> | <code>string</code> | [Read] aws-marketplace:GetVerificationEvidence. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AssociateProductsWithPrivateMarketplace">AssociateProductsWithPrivateMarketplace</a></code> | <code>string</code> | [Write] aws-marketplace:AssociateProductsWithPrivateMarketplace. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.BatchCreateBillingAdjustmentRequest">BatchCreateBillingAdjustmentRequest</a></code> | <code>string</code> | [Write] aws-marketplace:BatchCreateBillingAdjustmentRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.BatchMeterUsage">BatchMeterUsage</a></code> | <code>string</code> | [Write] aws-marketplace:BatchMeterUsage. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CancelAgreement">CancelAgreement</a></code> | <code>string</code> | [Write] aws-marketplace:CancelAgreement. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CancelAgreementCancellationRequest">CancelAgreementCancellationRequest</a></code> | <code>string</code> | [Write] aws-marketplace:CancelAgreementCancellationRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CancelAgreementPaymentRequest">CancelAgreementPaymentRequest</a></code> | <code>string</code> | [Write] aws-marketplace:CancelAgreementPaymentRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CancelAgreementRequest">CancelAgreementRequest</a></code> | <code>string</code> | [Write] aws-marketplace:CancelAgreementRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CancelChangeSet">CancelChangeSet</a></code> | <code>string</code> | [Write] aws-marketplace:CancelChangeSet. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CreateAgreementRequest">CreateAgreementRequest</a></code> | <code>string</code> | [Write] aws-marketplace:CreateAgreementRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CreatePrivateMarketplaceRequests">CreatePrivateMarketplaceRequests</a></code> | <code>string</code> | [Write] aws-marketplace:CreatePrivateMarketplaceRequests. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CreateVerificationEvidence">CreateVerificationEvidence</a></code> | <code>string</code> | [Write] aws-marketplace:CreateVerificationEvidence. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] aws-marketplace:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeAgreement">DescribeAgreement</a></code> | <code>string</code> | [Read] aws-marketplace:DescribeAgreement. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeAssessment">DescribeAssessment</a></code> | <code>string</code> | [Read] aws-marketplace:DescribeAssessment. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeBuilds">DescribeBuilds</a></code> | <code>string</code> | [Read] aws-marketplace:DescribeBuilds. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeChangeSet">DescribeChangeSet</a></code> | <code>string</code> | [Read] aws-marketplace:DescribeChangeSet. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeEntity">DescribeEntity</a></code> | <code>string</code> | [Read] aws-marketplace:DescribeEntity. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribePrivateMarketplaceRequests">DescribePrivateMarketplaceRequests</a></code> | <code>string</code> | [List] aws-marketplace:DescribePrivateMarketplaceRequests. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeProcurementSystemConfiguration">DescribeProcurementSystemConfiguration</a></code> | <code>string</code> | [Read] aws-marketplace:DescribeProcurementSystemConfiguration. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DisassociateProductsFromPrivateMarketplace">DisassociateProductsFromPrivateMarketplace</a></code> | <code>string</code> | [Write] aws-marketplace:DisassociateProductsFromPrivateMarketplace. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementApprovalRequests">ListAgreementApprovalRequests</a></code> | <code>string</code> | [List] aws-marketplace:ListAgreementApprovalRequests. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementCancellationRequests">ListAgreementCancellationRequests</a></code> | <code>string</code> | [List] aws-marketplace:ListAgreementCancellationRequests. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementCharges">ListAgreementCharges</a></code> | <code>string</code> | [List] aws-marketplace:ListAgreementCharges. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementInvoiceLineItems">ListAgreementInvoiceLineItems</a></code> | <code>string</code> | [List] aws-marketplace:ListAgreementInvoiceLineItems. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementPaymentRequests">ListAgreementPaymentRequests</a></code> | <code>string</code> | [List] aws-marketplace:ListAgreementPaymentRequests. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementRequests">ListAgreementRequests</a></code> | <code>string</code> | [List] aws-marketplace:ListAgreementRequests. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAssessments">ListAssessments</a></code> | <code>string</code> | [List] aws-marketplace:ListAssessments. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListBillingAdjustmentRequests">ListBillingAdjustmentRequests</a></code> | <code>string</code> | [List] aws-marketplace:ListBillingAdjustmentRequests. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListBuilds">ListBuilds</a></code> | <code>string</code> | [Read] aws-marketplace:ListBuilds. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListChangeSets">ListChangeSets</a></code> | <code>string</code> | [List] aws-marketplace:ListChangeSets. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListEntities">ListEntities</a></code> | <code>string</code> | [List] aws-marketplace:ListEntities. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListEntitlementDetails">ListEntitlementDetails</a></code> | <code>string</code> | [Read] aws-marketplace:ListEntitlementDetails. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListFulfillmentOptions">ListFulfillmentOptions</a></code> | <code>string</code> | [List] aws-marketplace:ListFulfillmentOptions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListInvoiceSubmissionTasks">ListInvoiceSubmissionTasks</a></code> | <code>string</code> | [List] aws-marketplace:ListInvoiceSubmissionTasks. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListIssuedTaxInvoices">ListIssuedTaxInvoices</a></code> | <code>string</code> | [List] aws-marketplace:ListIssuedTaxInvoices. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListPayables">ListPayables</a></code> | <code>string</code> | [List] aws-marketplace:ListPayables. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListPrivateListings">ListPrivateListings</a></code> | <code>string</code> | [List] aws-marketplace:ListPrivateListings. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListPrivateMarketplaceRequests">ListPrivateMarketplaceRequests</a></code> | <code>string</code> | [List] aws-marketplace:ListPrivateMarketplaceRequests. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListPurchaseOptions">ListPurchaseOptions</a></code> | <code>string</code> | [List] aws-marketplace:ListPurchaseOptions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] aws-marketplace:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListTaxComplianceProfileChangeTasks">ListTaxComplianceProfileChangeTasks</a></code> | <code>string</code> | [List] aws-marketplace:ListTaxComplianceProfileChangeTasks. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListTaxComplianceProfiles">ListTaxComplianceProfiles</a></code> | <code>string</code> | [List] aws-marketplace:ListTaxComplianceProfiles. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListVerificationEvidence">ListVerificationEvidence</a></code> | <code>string</code> | [List] aws-marketplace:ListVerificationEvidence. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListVerifications">ListVerifications</a></code> | <code>string</code> | [List] aws-marketplace:ListVerifications. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.MeterUsage">MeterUsage</a></code> | <code>string</code> | [Write] aws-marketplace:MeterUsage. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.PutDeploymentParameter">PutDeploymentParameter</a></code> | <code>string</code> | [Write] aws-marketplace:PutDeploymentParameter. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.PutProcurementSystemConfiguration">PutProcurementSystemConfiguration</a></code> | <code>string</code> | [Write] aws-marketplace:PutProcurementSystemConfiguration. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] aws-marketplace:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.RegisterUsage">RegisterUsage</a></code> | <code>string</code> | [Write] aws-marketplace:RegisterUsage. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.RejectAgreementApprovalRequest">RejectAgreementApprovalRequest</a></code> | <code>string</code> | [Write] aws-marketplace:RejectAgreementApprovalRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.RejectAgreementCancellationRequest">RejectAgreementCancellationRequest</a></code> | <code>string</code> | [Write] aws-marketplace:RejectAgreementCancellationRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.RejectAgreementPaymentRequest">RejectAgreementPaymentRequest</a></code> | <code>string</code> | [Write] aws-marketplace:RejectAgreementPaymentRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ResolveCustomer">ResolveCustomer</a></code> | <code>string</code> | [Write] aws-marketplace:ResolveCustomer. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SearchAgreements">SearchAgreements</a></code> | <code>string</code> | [List] aws-marketplace:SearchAgreements. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SearchFacets">SearchFacets</a></code> | <code>string</code> | [List] aws-marketplace:SearchFacets. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SearchListings">SearchListings</a></code> | <code>string</code> | [List] aws-marketplace:SearchListings. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SendAgreementCancellationRequest">SendAgreementCancellationRequest</a></code> | <code>string</code> | [Write] aws-marketplace:SendAgreementCancellationRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SendAgreementPaymentRequest">SendAgreementPaymentRequest</a></code> | <code>string</code> | [Write] aws-marketplace:SendAgreementPaymentRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.StartBuild">StartBuild</a></code> | <code>string</code> | [Write] aws-marketplace:StartBuild. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.StartChangeSet">StartChangeSet</a></code> | <code>string</code> | [Write] aws-marketplace:StartChangeSet. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.StartInvoiceSubmissionTask">StartInvoiceSubmissionTask</a></code> | <code>string</code> | [Write] aws-marketplace:StartInvoiceSubmissionTask. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.StartTaxComplianceProfileChangeTask">StartTaxComplianceProfileChangeTask</a></code> | <code>string</code> | [Write] aws-marketplace:StartTaxComplianceProfileChangeTask. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.StartVerification">StartVerification</a></code> | <code>string</code> | [Write] aws-marketplace:StartVerification. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.Subscribe">Subscribe</a></code> | <code>string</code> | [Write] aws-marketplace:Subscribe. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] aws-marketplace:TagResource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.Unsubscribe">Unsubscribe</a></code> | <code>string</code> | [Write] aws-marketplace:Unsubscribe. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] aws-marketplace:UntagResource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.UpdateAgreementApprovalRequest">UpdateAgreementApprovalRequest</a></code> | <code>string</code> | [Write] aws-marketplace:UpdateAgreementApprovalRequest. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.UpdatePurchaseOrders">UpdatePurchaseOrders</a></code> | <code>string</code> | [Write] aws-marketplace:UpdatePurchaseOrders. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.UpdateVerificationEvidence">UpdateVerificationEvidence</a></code> | <code>string</code> | [Write] aws-marketplace:UpdateVerificationEvidence. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ViewSubscriptions">ViewSubscriptions</a></code> | <code>string</code> | [List] aws-marketplace:ViewSubscriptions. |

---

##### `AcceptAgreementApprovalRequest`<sup>Required</sup> <a name="AcceptAgreementApprovalRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AcceptAgreementApprovalRequest"></a>

```typescript
public readonly AcceptAgreementApprovalRequest: string;
```

- *Type:* string

[Write] aws-marketplace:AcceptAgreementApprovalRequest.

---

##### `AcceptAgreementCancellationRequest`<sup>Required</sup> <a name="AcceptAgreementCancellationRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AcceptAgreementCancellationRequest"></a>

```typescript
public readonly AcceptAgreementCancellationRequest: string;
```

- *Type:* string

[Write] aws-marketplace:AcceptAgreementCancellationRequest.

---

##### `AcceptAgreementPaymentRequest`<sup>Required</sup> <a name="AcceptAgreementPaymentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AcceptAgreementPaymentRequest"></a>

```typescript
public readonly AcceptAgreementPaymentRequest: string;
```

- *Type:* string

[Write] aws-marketplace:AcceptAgreementPaymentRequest.

---

##### `AcceptAgreementRequest`<sup>Required</sup> <a name="AcceptAgreementRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AcceptAgreementRequest"></a>

```typescript
public readonly AcceptAgreementRequest: string;
```

- *Type:* string

[Write] aws-marketplace:AcceptAgreementRequest.

---

##### `actionGetAgreementApprovalRequest`<sup>Required</sup> <a name="actionGetAgreementApprovalRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementApprovalRequest"></a>

```typescript
public readonly actionGetAgreementApprovalRequest: string;
```

- *Type:* string

[Read] aws-marketplace:GetAgreementApprovalRequest.

---

##### `actionGetAgreementCancellationRequest`<sup>Required</sup> <a name="actionGetAgreementCancellationRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementCancellationRequest"></a>

```typescript
public readonly actionGetAgreementCancellationRequest: string;
```

- *Type:* string

[Read] aws-marketplace:GetAgreementCancellationRequest.

---

##### `actionGetAgreementEntitlements`<sup>Required</sup> <a name="actionGetAgreementEntitlements" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementEntitlements"></a>

```typescript
public readonly actionGetAgreementEntitlements: string;
```

- *Type:* string

[Read] aws-marketplace:GetAgreementEntitlements.

---

##### `actionGetAgreementPaymentRequest`<sup>Required</sup> <a name="actionGetAgreementPaymentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementPaymentRequest"></a>

```typescript
public readonly actionGetAgreementPaymentRequest: string;
```

- *Type:* string

[Read] aws-marketplace:GetAgreementPaymentRequest.

---

##### `actionGetAgreementRequest`<sup>Required</sup> <a name="actionGetAgreementRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementRequest"></a>

```typescript
public readonly actionGetAgreementRequest: string;
```

- *Type:* string

[Read] aws-marketplace:GetAgreementRequest.

---

##### `actionGetAgreementTerms`<sup>Required</sup> <a name="actionGetAgreementTerms" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetAgreementTerms"></a>

```typescript
public readonly actionGetAgreementTerms: string;
```

- *Type:* string

[List] aws-marketplace:GetAgreementTerms.

---

##### `actionGetBillingAdjustmentRequest`<sup>Required</sup> <a name="actionGetBillingAdjustmentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetBillingAdjustmentRequest"></a>

```typescript
public readonly actionGetBillingAdjustmentRequest: string;
```

- *Type:* string

[Read] aws-marketplace:GetBillingAdjustmentRequest.

---

##### `actionGetBuyerDashboard`<sup>Required</sup> <a name="actionGetBuyerDashboard" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetBuyerDashboard"></a>

```typescript
public readonly actionGetBuyerDashboard: string;
```

- *Type:* string

[Read] aws-marketplace:GetBuyerDashboard.

---

##### `actionGetEntitlements`<sup>Required</sup> <a name="actionGetEntitlements" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetEntitlements"></a>

```typescript
public readonly actionGetEntitlements: string;
```

- *Type:* string

[Read] aws-marketplace:GetEntitlements.

---

##### `actionGetInvoiceSubmissionTask`<sup>Required</sup> <a name="actionGetInvoiceSubmissionTask" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetInvoiceSubmissionTask"></a>

```typescript
public readonly actionGetInvoiceSubmissionTask: string;
```

- *Type:* string

[Read] aws-marketplace:GetInvoiceSubmissionTask.

---

##### `actionGetIssuedTaxInvoice`<sup>Required</sup> <a name="actionGetIssuedTaxInvoice" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetIssuedTaxInvoice"></a>

```typescript
public readonly actionGetIssuedTaxInvoice: string;
```

- *Type:* string

[Read] aws-marketplace:GetIssuedTaxInvoice.

---

##### `actionGetListing`<sup>Required</sup> <a name="actionGetListing" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetListing"></a>

```typescript
public readonly actionGetListing: string;
```

- *Type:* string

[Read] aws-marketplace:GetListing.

---

##### `actionGetOffer`<sup>Required</sup> <a name="actionGetOffer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetOffer"></a>

```typescript
public readonly actionGetOffer: string;
```

- *Type:* string

[Read] aws-marketplace:GetOffer.

---

##### `actionGetOfferSet`<sup>Required</sup> <a name="actionGetOfferSet" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetOfferSet"></a>

```typescript
public readonly actionGetOfferSet: string;
```

- *Type:* string

[Read] aws-marketplace:GetOfferSet.

---

##### `actionGetOfferTerms`<sup>Required</sup> <a name="actionGetOfferTerms" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetOfferTerms"></a>

```typescript
public readonly actionGetOfferTerms: string;
```

- *Type:* string

[Read] aws-marketplace:GetOfferTerms.

---

##### `actionGetProduct`<sup>Required</sup> <a name="actionGetProduct" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetProduct"></a>

```typescript
public readonly actionGetProduct: string;
```

- *Type:* string

[Read] aws-marketplace:GetProduct.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] aws-marketplace:GetResourcePolicy.

---

##### `actionGetSellerDashboard`<sup>Required</sup> <a name="actionGetSellerDashboard" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetSellerDashboard"></a>

```typescript
public readonly actionGetSellerDashboard: string;
```

- *Type:* string

[Read] aws-marketplace:GetSellerDashboard.

---

##### `actionGetTaxComplianceProfile`<sup>Required</sup> <a name="actionGetTaxComplianceProfile" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetTaxComplianceProfile"></a>

```typescript
public readonly actionGetTaxComplianceProfile: string;
```

- *Type:* string

[Read] aws-marketplace:GetTaxComplianceProfile.

---

##### `actionGetVerification`<sup>Required</sup> <a name="actionGetVerification" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetVerification"></a>

```typescript
public readonly actionGetVerification: string;
```

- *Type:* string

[Read] aws-marketplace:GetVerification.

---

##### `actionGetVerificationEvidence`<sup>Required</sup> <a name="actionGetVerificationEvidence" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.actionGetVerificationEvidence"></a>

```typescript
public readonly actionGetVerificationEvidence: string;
```

- *Type:* string

[Read] aws-marketplace:GetVerificationEvidence.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateProductsWithPrivateMarketplace`<sup>Required</sup> <a name="AssociateProductsWithPrivateMarketplace" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.AssociateProductsWithPrivateMarketplace"></a>

```typescript
public readonly AssociateProductsWithPrivateMarketplace: string;
```

- *Type:* string

[Write] aws-marketplace:AssociateProductsWithPrivateMarketplace.

---

##### `BatchCreateBillingAdjustmentRequest`<sup>Required</sup> <a name="BatchCreateBillingAdjustmentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.BatchCreateBillingAdjustmentRequest"></a>

```typescript
public readonly BatchCreateBillingAdjustmentRequest: string;
```

- *Type:* string

[Write] aws-marketplace:BatchCreateBillingAdjustmentRequest.

---

##### `BatchMeterUsage`<sup>Required</sup> <a name="BatchMeterUsage" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.BatchMeterUsage"></a>

```typescript
public readonly BatchMeterUsage: string;
```

- *Type:* string

[Write] aws-marketplace:BatchMeterUsage.

---

##### `CancelAgreement`<sup>Required</sup> <a name="CancelAgreement" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CancelAgreement"></a>

```typescript
public readonly CancelAgreement: string;
```

- *Type:* string

[Write] aws-marketplace:CancelAgreement.

---

##### `CancelAgreementCancellationRequest`<sup>Required</sup> <a name="CancelAgreementCancellationRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CancelAgreementCancellationRequest"></a>

```typescript
public readonly CancelAgreementCancellationRequest: string;
```

- *Type:* string

[Write] aws-marketplace:CancelAgreementCancellationRequest.

---

##### `CancelAgreementPaymentRequest`<sup>Required</sup> <a name="CancelAgreementPaymentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CancelAgreementPaymentRequest"></a>

```typescript
public readonly CancelAgreementPaymentRequest: string;
```

- *Type:* string

[Write] aws-marketplace:CancelAgreementPaymentRequest.

---

##### `CancelAgreementRequest`<sup>Required</sup> <a name="CancelAgreementRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CancelAgreementRequest"></a>

```typescript
public readonly CancelAgreementRequest: string;
```

- *Type:* string

[Write] aws-marketplace:CancelAgreementRequest.

---

##### `CancelChangeSet`<sup>Required</sup> <a name="CancelChangeSet" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CancelChangeSet"></a>

```typescript
public readonly CancelChangeSet: string;
```

- *Type:* string

[Write] aws-marketplace:CancelChangeSet.

---

##### `CreateAgreementRequest`<sup>Required</sup> <a name="CreateAgreementRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CreateAgreementRequest"></a>

```typescript
public readonly CreateAgreementRequest: string;
```

- *Type:* string

[Write] aws-marketplace:CreateAgreementRequest.

---

##### `CreatePrivateMarketplaceRequests`<sup>Required</sup> <a name="CreatePrivateMarketplaceRequests" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CreatePrivateMarketplaceRequests"></a>

```typescript
public readonly CreatePrivateMarketplaceRequests: string;
```

- *Type:* string

[Write] aws-marketplace:CreatePrivateMarketplaceRequests.

---

##### `CreateVerificationEvidence`<sup>Required</sup> <a name="CreateVerificationEvidence" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.CreateVerificationEvidence"></a>

```typescript
public readonly CreateVerificationEvidence: string;
```

- *Type:* string

[Write] aws-marketplace:CreateVerificationEvidence.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] aws-marketplace:DeleteResourcePolicy.

---

##### `DescribeAgreement`<sup>Required</sup> <a name="DescribeAgreement" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeAgreement"></a>

```typescript
public readonly DescribeAgreement: string;
```

- *Type:* string

[Read] aws-marketplace:DescribeAgreement.

---

##### `DescribeAssessment`<sup>Required</sup> <a name="DescribeAssessment" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeAssessment"></a>

```typescript
public readonly DescribeAssessment: string;
```

- *Type:* string

[Read] aws-marketplace:DescribeAssessment.

---

##### `DescribeBuilds`<sup>Required</sup> <a name="DescribeBuilds" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeBuilds"></a>

```typescript
public readonly DescribeBuilds: string;
```

- *Type:* string

[Read] aws-marketplace:DescribeBuilds.

---

##### `DescribeChangeSet`<sup>Required</sup> <a name="DescribeChangeSet" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeChangeSet"></a>

```typescript
public readonly DescribeChangeSet: string;
```

- *Type:* string

[Read] aws-marketplace:DescribeChangeSet.

---

##### `DescribeEntity`<sup>Required</sup> <a name="DescribeEntity" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeEntity"></a>

```typescript
public readonly DescribeEntity: string;
```

- *Type:* string

[Read] aws-marketplace:DescribeEntity.

---

##### `DescribePrivateMarketplaceRequests`<sup>Required</sup> <a name="DescribePrivateMarketplaceRequests" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribePrivateMarketplaceRequests"></a>

```typescript
public readonly DescribePrivateMarketplaceRequests: string;
```

- *Type:* string

[List] aws-marketplace:DescribePrivateMarketplaceRequests.

---

##### `DescribeProcurementSystemConfiguration`<sup>Required</sup> <a name="DescribeProcurementSystemConfiguration" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DescribeProcurementSystemConfiguration"></a>

```typescript
public readonly DescribeProcurementSystemConfiguration: string;
```

- *Type:* string

[Read] aws-marketplace:DescribeProcurementSystemConfiguration.

---

##### `DisassociateProductsFromPrivateMarketplace`<sup>Required</sup> <a name="DisassociateProductsFromPrivateMarketplace" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.DisassociateProductsFromPrivateMarketplace"></a>

```typescript
public readonly DisassociateProductsFromPrivateMarketplace: string;
```

- *Type:* string

[Write] aws-marketplace:DisassociateProductsFromPrivateMarketplace.

---

##### `ListAgreementApprovalRequests`<sup>Required</sup> <a name="ListAgreementApprovalRequests" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementApprovalRequests"></a>

```typescript
public readonly ListAgreementApprovalRequests: string;
```

- *Type:* string

[List] aws-marketplace:ListAgreementApprovalRequests.

---

##### `ListAgreementCancellationRequests`<sup>Required</sup> <a name="ListAgreementCancellationRequests" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementCancellationRequests"></a>

```typescript
public readonly ListAgreementCancellationRequests: string;
```

- *Type:* string

[List] aws-marketplace:ListAgreementCancellationRequests.

---

##### `ListAgreementCharges`<sup>Required</sup> <a name="ListAgreementCharges" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementCharges"></a>

```typescript
public readonly ListAgreementCharges: string;
```

- *Type:* string

[List] aws-marketplace:ListAgreementCharges.

---

##### `ListAgreementInvoiceLineItems`<sup>Required</sup> <a name="ListAgreementInvoiceLineItems" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementInvoiceLineItems"></a>

```typescript
public readonly ListAgreementInvoiceLineItems: string;
```

- *Type:* string

[List] aws-marketplace:ListAgreementInvoiceLineItems.

---

##### `ListAgreementPaymentRequests`<sup>Required</sup> <a name="ListAgreementPaymentRequests" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementPaymentRequests"></a>

```typescript
public readonly ListAgreementPaymentRequests: string;
```

- *Type:* string

[List] aws-marketplace:ListAgreementPaymentRequests.

---

##### `ListAgreementRequests`<sup>Required</sup> <a name="ListAgreementRequests" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAgreementRequests"></a>

```typescript
public readonly ListAgreementRequests: string;
```

- *Type:* string

[List] aws-marketplace:ListAgreementRequests.

---

##### `ListAssessments`<sup>Required</sup> <a name="ListAssessments" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListAssessments"></a>

```typescript
public readonly ListAssessments: string;
```

- *Type:* string

[List] aws-marketplace:ListAssessments.

---

##### `ListBillingAdjustmentRequests`<sup>Required</sup> <a name="ListBillingAdjustmentRequests" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListBillingAdjustmentRequests"></a>

```typescript
public readonly ListBillingAdjustmentRequests: string;
```

- *Type:* string

[List] aws-marketplace:ListBillingAdjustmentRequests.

---

##### `ListBuilds`<sup>Required</sup> <a name="ListBuilds" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListBuilds"></a>

```typescript
public readonly ListBuilds: string;
```

- *Type:* string

[Read] aws-marketplace:ListBuilds.

---

##### `ListChangeSets`<sup>Required</sup> <a name="ListChangeSets" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListChangeSets"></a>

```typescript
public readonly ListChangeSets: string;
```

- *Type:* string

[List] aws-marketplace:ListChangeSets.

---

##### `ListEntities`<sup>Required</sup> <a name="ListEntities" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListEntities"></a>

```typescript
public readonly ListEntities: string;
```

- *Type:* string

[List] aws-marketplace:ListEntities.

---

##### `ListEntitlementDetails`<sup>Required</sup> <a name="ListEntitlementDetails" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListEntitlementDetails"></a>

```typescript
public readonly ListEntitlementDetails: string;
```

- *Type:* string

[Read] aws-marketplace:ListEntitlementDetails.

---

##### `ListFulfillmentOptions`<sup>Required</sup> <a name="ListFulfillmentOptions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListFulfillmentOptions"></a>

```typescript
public readonly ListFulfillmentOptions: string;
```

- *Type:* string

[List] aws-marketplace:ListFulfillmentOptions.

---

##### `ListInvoiceSubmissionTasks`<sup>Required</sup> <a name="ListInvoiceSubmissionTasks" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListInvoiceSubmissionTasks"></a>

```typescript
public readonly ListInvoiceSubmissionTasks: string;
```

- *Type:* string

[List] aws-marketplace:ListInvoiceSubmissionTasks.

---

##### `ListIssuedTaxInvoices`<sup>Required</sup> <a name="ListIssuedTaxInvoices" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListIssuedTaxInvoices"></a>

```typescript
public readonly ListIssuedTaxInvoices: string;
```

- *Type:* string

[List] aws-marketplace:ListIssuedTaxInvoices.

---

##### `ListPayables`<sup>Required</sup> <a name="ListPayables" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListPayables"></a>

```typescript
public readonly ListPayables: string;
```

- *Type:* string

[List] aws-marketplace:ListPayables.

---

##### `ListPrivateListings`<sup>Required</sup> <a name="ListPrivateListings" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListPrivateListings"></a>

```typescript
public readonly ListPrivateListings: string;
```

- *Type:* string

[List] aws-marketplace:ListPrivateListings.

---

##### `ListPrivateMarketplaceRequests`<sup>Required</sup> <a name="ListPrivateMarketplaceRequests" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListPrivateMarketplaceRequests"></a>

```typescript
public readonly ListPrivateMarketplaceRequests: string;
```

- *Type:* string

[List] aws-marketplace:ListPrivateMarketplaceRequests.

---

##### `ListPurchaseOptions`<sup>Required</sup> <a name="ListPurchaseOptions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListPurchaseOptions"></a>

```typescript
public readonly ListPurchaseOptions: string;
```

- *Type:* string

[List] aws-marketplace:ListPurchaseOptions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] aws-marketplace:ListTagsForResource.

---

##### `ListTaxComplianceProfileChangeTasks`<sup>Required</sup> <a name="ListTaxComplianceProfileChangeTasks" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListTaxComplianceProfileChangeTasks"></a>

```typescript
public readonly ListTaxComplianceProfileChangeTasks: string;
```

- *Type:* string

[List] aws-marketplace:ListTaxComplianceProfileChangeTasks.

---

##### `ListTaxComplianceProfiles`<sup>Required</sup> <a name="ListTaxComplianceProfiles" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListTaxComplianceProfiles"></a>

```typescript
public readonly ListTaxComplianceProfiles: string;
```

- *Type:* string

[List] aws-marketplace:ListTaxComplianceProfiles.

---

##### `ListVerificationEvidence`<sup>Required</sup> <a name="ListVerificationEvidence" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListVerificationEvidence"></a>

```typescript
public readonly ListVerificationEvidence: string;
```

- *Type:* string

[List] aws-marketplace:ListVerificationEvidence.

---

##### `ListVerifications`<sup>Required</sup> <a name="ListVerifications" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ListVerifications"></a>

```typescript
public readonly ListVerifications: string;
```

- *Type:* string

[List] aws-marketplace:ListVerifications.

---

##### `MeterUsage`<sup>Required</sup> <a name="MeterUsage" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.MeterUsage"></a>

```typescript
public readonly MeterUsage: string;
```

- *Type:* string

[Write] aws-marketplace:MeterUsage.

---

##### `PutDeploymentParameter`<sup>Required</sup> <a name="PutDeploymentParameter" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.PutDeploymentParameter"></a>

```typescript
public readonly PutDeploymentParameter: string;
```

- *Type:* string

[Write] aws-marketplace:PutDeploymentParameter.

---

##### `PutProcurementSystemConfiguration`<sup>Required</sup> <a name="PutProcurementSystemConfiguration" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.PutProcurementSystemConfiguration"></a>

```typescript
public readonly PutProcurementSystemConfiguration: string;
```

- *Type:* string

[Write] aws-marketplace:PutProcurementSystemConfiguration.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] aws-marketplace:PutResourcePolicy.

---

##### `RegisterUsage`<sup>Required</sup> <a name="RegisterUsage" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.RegisterUsage"></a>

```typescript
public readonly RegisterUsage: string;
```

- *Type:* string

[Write] aws-marketplace:RegisterUsage.

---

##### `RejectAgreementApprovalRequest`<sup>Required</sup> <a name="RejectAgreementApprovalRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.RejectAgreementApprovalRequest"></a>

```typescript
public readonly RejectAgreementApprovalRequest: string;
```

- *Type:* string

[Write] aws-marketplace:RejectAgreementApprovalRequest.

---

##### `RejectAgreementCancellationRequest`<sup>Required</sup> <a name="RejectAgreementCancellationRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.RejectAgreementCancellationRequest"></a>

```typescript
public readonly RejectAgreementCancellationRequest: string;
```

- *Type:* string

[Write] aws-marketplace:RejectAgreementCancellationRequest.

---

##### `RejectAgreementPaymentRequest`<sup>Required</sup> <a name="RejectAgreementPaymentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.RejectAgreementPaymentRequest"></a>

```typescript
public readonly RejectAgreementPaymentRequest: string;
```

- *Type:* string

[Write] aws-marketplace:RejectAgreementPaymentRequest.

---

##### `ResolveCustomer`<sup>Required</sup> <a name="ResolveCustomer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ResolveCustomer"></a>

```typescript
public readonly ResolveCustomer: string;
```

- *Type:* string

[Write] aws-marketplace:ResolveCustomer.

---

##### `SearchAgreements`<sup>Required</sup> <a name="SearchAgreements" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SearchAgreements"></a>

```typescript
public readonly SearchAgreements: string;
```

- *Type:* string

[List] aws-marketplace:SearchAgreements.

---

##### `SearchFacets`<sup>Required</sup> <a name="SearchFacets" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SearchFacets"></a>

```typescript
public readonly SearchFacets: string;
```

- *Type:* string

[List] aws-marketplace:SearchFacets.

---

##### `SearchListings`<sup>Required</sup> <a name="SearchListings" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SearchListings"></a>

```typescript
public readonly SearchListings: string;
```

- *Type:* string

[List] aws-marketplace:SearchListings.

---

##### `SendAgreementCancellationRequest`<sup>Required</sup> <a name="SendAgreementCancellationRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SendAgreementCancellationRequest"></a>

```typescript
public readonly SendAgreementCancellationRequest: string;
```

- *Type:* string

[Write] aws-marketplace:SendAgreementCancellationRequest.

---

##### `SendAgreementPaymentRequest`<sup>Required</sup> <a name="SendAgreementPaymentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SendAgreementPaymentRequest"></a>

```typescript
public readonly SendAgreementPaymentRequest: string;
```

- *Type:* string

[Write] aws-marketplace:SendAgreementPaymentRequest.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartBuild`<sup>Required</sup> <a name="StartBuild" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.StartBuild"></a>

```typescript
public readonly StartBuild: string;
```

- *Type:* string

[Write] aws-marketplace:StartBuild.

---

##### `StartChangeSet`<sup>Required</sup> <a name="StartChangeSet" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.StartChangeSet"></a>

```typescript
public readonly StartChangeSet: string;
```

- *Type:* string

[Write] aws-marketplace:StartChangeSet.

---

##### `StartInvoiceSubmissionTask`<sup>Required</sup> <a name="StartInvoiceSubmissionTask" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.StartInvoiceSubmissionTask"></a>

```typescript
public readonly StartInvoiceSubmissionTask: string;
```

- *Type:* string

[Write] aws-marketplace:StartInvoiceSubmissionTask.

---

##### `StartTaxComplianceProfileChangeTask`<sup>Required</sup> <a name="StartTaxComplianceProfileChangeTask" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.StartTaxComplianceProfileChangeTask"></a>

```typescript
public readonly StartTaxComplianceProfileChangeTask: string;
```

- *Type:* string

[Write] aws-marketplace:StartTaxComplianceProfileChangeTask.

---

##### `StartVerification`<sup>Required</sup> <a name="StartVerification" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.StartVerification"></a>

```typescript
public readonly StartVerification: string;
```

- *Type:* string

[Write] aws-marketplace:StartVerification.

---

##### `Subscribe`<sup>Required</sup> <a name="Subscribe" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.Subscribe"></a>

```typescript
public readonly Subscribe: string;
```

- *Type:* string

[Write] aws-marketplace:Subscribe.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] aws-marketplace:TagResource.

---

##### `Unsubscribe`<sup>Required</sup> <a name="Unsubscribe" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.Unsubscribe"></a>

```typescript
public readonly Unsubscribe: string;
```

- *Type:* string

[Write] aws-marketplace:Unsubscribe.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] aws-marketplace:UntagResource.

---

##### `UpdateAgreementApprovalRequest`<sup>Required</sup> <a name="UpdateAgreementApprovalRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.UpdateAgreementApprovalRequest"></a>

```typescript
public readonly UpdateAgreementApprovalRequest: string;
```

- *Type:* string

[Write] aws-marketplace:UpdateAgreementApprovalRequest.

---

##### `UpdatePurchaseOrders`<sup>Required</sup> <a name="UpdatePurchaseOrders" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.UpdatePurchaseOrders"></a>

```typescript
public readonly UpdatePurchaseOrders: string;
```

- *Type:* string

[Write] aws-marketplace:UpdatePurchaseOrders.

---

##### `UpdateVerificationEvidence`<sup>Required</sup> <a name="UpdateVerificationEvidence" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.UpdateVerificationEvidence"></a>

```typescript
public readonly UpdateVerificationEvidence: string;
```

- *Type:* string

[Write] aws-marketplace:UpdateVerificationEvidence.

---

##### `ViewSubscriptions`<sup>Required</sup> <a name="ViewSubscriptions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceActions.property.ViewSubscriptions"></a>

```typescript
public readonly ViewSubscriptions: string;
```

- *Type:* string

[List] aws-marketplace:ViewSubscriptions.

---

### AWSMarketplaceConditions <a name="AWSMarketplaceConditions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions"></a>

Condition key constants and builders for aws-marketplace.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

new aws_marketplace.AWSMarketplaceConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.agreementType">agreementType</a></code> | Generates a condition block for `aws-marketplace:AgreementType`. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.intent">intent</a></code> | Generates a condition block for `aws-marketplace:Intent`. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.partyType">partyType</a></code> | Generates a condition block for `aws-marketplace:PartyType`. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.productId">productId</a></code> | Generates a condition block for `aws-marketplace:ProductId`. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.verificationType">verificationType</a></code> | Generates a condition block for `aws-marketplace:VerificationType`. |

---

##### `agreementType` <a name="agreementType" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.agreementType"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceConditions.agreementType(values: string[])
```

Generates a condition block for `aws-marketplace:AgreementType`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.agreementType.parameter.values"></a>

- *Type:* string[]

---

##### `intent` <a name="intent" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.intent"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceConditions.intent(value: string)
```

Generates a condition block for `aws-marketplace:Intent`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.intent.parameter.value"></a>

- *Type:* string

---

##### `partyType` <a name="partyType" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.partyType"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceConditions.partyType(value: string)
```

Generates a condition block for `aws-marketplace:PartyType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.partyType.parameter.value"></a>

- *Type:* string

---

##### `productId` <a name="productId" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.productId"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceConditions.productId(values: string[])
```

Generates a condition block for `aws-marketplace:ProductId`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.productId.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.requestTag"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.resourceTag"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.tagKeys"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `verificationType` <a name="verificationType" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.verificationType"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceConditions.verificationType(value: string)
```

Generates a condition block for `aws-marketplace:VerificationType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.verificationType.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AcceptAgreementCancellationRequestConditionKeys">AcceptAgreementCancellationRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AcceptAgreementCancellationRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AcceptAgreementPaymentRequestConditionKeys">AcceptAgreementPaymentRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AcceptAgreementPaymentRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AcceptAgreementRequestConditionKeys">AcceptAgreementRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AcceptAgreementRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetAgreementCancellationRequestConditionKeys">actionGetAgreementCancellationRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAgreementCancellationRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetAgreementEntitlementsConditionKeys">actionGetAgreementEntitlementsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAgreementEntitlements action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetAgreementPaymentRequestConditionKeys">actionGetAgreementPaymentRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAgreementPaymentRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetAgreementTermsConditionKeys">actionGetAgreementTermsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAgreementTerms action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetBillingAdjustmentRequestConditionKeys">actionGetBillingAdjustmentRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBillingAdjustmentRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetVerificationConditionKeys">actionGetVerificationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetVerification action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AGREEMENT_TYPE">AGREEMENT_TYPE</a></code> | <code>string</code> | Condition key: aws-marketplace:AgreementType (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.BatchCreateBillingAdjustmentRequestConditionKeys">BatchCreateBillingAdjustmentRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchCreateBillingAdjustmentRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CancelAgreementCancellationRequestConditionKeys">CancelAgreementCancellationRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelAgreementCancellationRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CancelAgreementConditionKeys">CancelAgreementConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelAgreement action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CancelAgreementPaymentRequestConditionKeys">CancelAgreementPaymentRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelAgreementPaymentRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CHANGE_TYPE">CHANGE_TYPE</a></code> | <code>string</code> | Condition key: catalog:ChangeType (String). |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CreateAgreementRequestConditionKeys">CreateAgreementRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgreementRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CreateVerificationEvidenceConditionKeys">CreateVerificationEvidenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVerificationEvidence action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.DescribeAgreementConditionKeys">DescribeAgreementConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeAgreement action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.INTENT">INTENT</a></code> | <code>string</code> | Condition key: aws-marketplace:Intent (String). |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListAgreementCancellationRequestsConditionKeys">ListAgreementCancellationRequestsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAgreementCancellationRequests action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListAgreementChargesConditionKeys">ListAgreementChargesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAgreementCharges action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListAgreementInvoiceLineItemsConditionKeys">ListAgreementInvoiceLineItemsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAgreementInvoiceLineItems action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListAgreementPaymentRequestsConditionKeys">ListAgreementPaymentRequestsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAgreementPaymentRequests action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListBillingAdjustmentRequestsConditionKeys">ListBillingAdjustmentRequestsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBillingAdjustmentRequests action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListVerificationsConditionKeys">ListVerificationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListVerifications action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.PARTY_TYPE">PARTY_TYPE</a></code> | <code>string</code> | Condition key: aws-marketplace:PartyType (String). |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.PRODUCT_ID">PRODUCT_ID</a></code> | <code>string</code> | Condition key: aws-marketplace:ProductId (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.PutDeploymentParameterConditionKeys">PutDeploymentParameterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDeploymentParameter action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.RejectAgreementCancellationRequestConditionKeys">RejectAgreementCancellationRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RejectAgreementCancellationRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.RejectAgreementPaymentRequestConditionKeys">RejectAgreementPaymentRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RejectAgreementPaymentRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.SearchAgreementsConditionKeys">SearchAgreementsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchAgreements action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.SendAgreementCancellationRequestConditionKeys">SendAgreementCancellationRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendAgreementCancellationRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.SendAgreementPaymentRequestConditionKeys">SendAgreementPaymentRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendAgreementPaymentRequest action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.StartChangeSetConditionKeys">StartChangeSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartChangeSet action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.StartInvoiceSubmissionTaskConditionKeys">StartInvoiceSubmissionTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartInvoiceSubmissionTask action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.StartTaxComplianceProfileChangeTaskConditionKeys">StartTaxComplianceProfileChangeTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTaxComplianceProfileChangeTask action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.StartVerificationConditionKeys">StartVerificationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartVerification action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.UpdatePurchaseOrdersConditionKeys">UpdatePurchaseOrdersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePurchaseOrders action. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.VERIFICATION_TYPE">VERIFICATION_TYPE</a></code> | <code>string</code> | Condition key: aws-marketplace:VerificationType (String). |

---

##### `AcceptAgreementCancellationRequestConditionKeys`<sup>Required</sup> <a name="AcceptAgreementCancellationRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AcceptAgreementCancellationRequestConditionKeys"></a>

```typescript
public readonly AcceptAgreementCancellationRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AcceptAgreementCancellationRequest action.

---

##### `AcceptAgreementPaymentRequestConditionKeys`<sup>Required</sup> <a name="AcceptAgreementPaymentRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AcceptAgreementPaymentRequestConditionKeys"></a>

```typescript
public readonly AcceptAgreementPaymentRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AcceptAgreementPaymentRequest action.

---

##### `AcceptAgreementRequestConditionKeys`<sup>Required</sup> <a name="AcceptAgreementRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AcceptAgreementRequestConditionKeys"></a>

```typescript
public readonly AcceptAgreementRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AcceptAgreementRequest action.

---

##### `actionGetAgreementCancellationRequestConditionKeys`<sup>Required</sup> <a name="actionGetAgreementCancellationRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetAgreementCancellationRequestConditionKeys"></a>

```typescript
public readonly actionGetAgreementCancellationRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAgreementCancellationRequest action.

---

##### `actionGetAgreementEntitlementsConditionKeys`<sup>Required</sup> <a name="actionGetAgreementEntitlementsConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetAgreementEntitlementsConditionKeys"></a>

```typescript
public readonly actionGetAgreementEntitlementsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAgreementEntitlements action.

---

##### `actionGetAgreementPaymentRequestConditionKeys`<sup>Required</sup> <a name="actionGetAgreementPaymentRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetAgreementPaymentRequestConditionKeys"></a>

```typescript
public readonly actionGetAgreementPaymentRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAgreementPaymentRequest action.

---

##### `actionGetAgreementTermsConditionKeys`<sup>Required</sup> <a name="actionGetAgreementTermsConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetAgreementTermsConditionKeys"></a>

```typescript
public readonly actionGetAgreementTermsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAgreementTerms action.

---

##### `actionGetBillingAdjustmentRequestConditionKeys`<sup>Required</sup> <a name="actionGetBillingAdjustmentRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetBillingAdjustmentRequestConditionKeys"></a>

```typescript
public readonly actionGetBillingAdjustmentRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBillingAdjustmentRequest action.

---

##### `actionGetVerificationConditionKeys`<sup>Required</sup> <a name="actionGetVerificationConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.actionGetVerificationConditionKeys"></a>

```typescript
public readonly actionGetVerificationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetVerification action.

---

##### `AGREEMENT_TYPE`<sup>Required</sup> <a name="AGREEMENT_TYPE" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AGREEMENT_TYPE"></a>

```typescript
public readonly AGREEMENT_TYPE: string;
```

- *Type:* string

Condition key: aws-marketplace:AgreementType (ArrayOfString).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchCreateBillingAdjustmentRequestConditionKeys`<sup>Required</sup> <a name="BatchCreateBillingAdjustmentRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.BatchCreateBillingAdjustmentRequestConditionKeys"></a>

```typescript
public readonly BatchCreateBillingAdjustmentRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchCreateBillingAdjustmentRequest action.

---

##### `CancelAgreementCancellationRequestConditionKeys`<sup>Required</sup> <a name="CancelAgreementCancellationRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CancelAgreementCancellationRequestConditionKeys"></a>

```typescript
public readonly CancelAgreementCancellationRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelAgreementCancellationRequest action.

---

##### `CancelAgreementConditionKeys`<sup>Required</sup> <a name="CancelAgreementConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CancelAgreementConditionKeys"></a>

```typescript
public readonly CancelAgreementConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelAgreement action.

---

##### `CancelAgreementPaymentRequestConditionKeys`<sup>Required</sup> <a name="CancelAgreementPaymentRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CancelAgreementPaymentRequestConditionKeys"></a>

```typescript
public readonly CancelAgreementPaymentRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelAgreementPaymentRequest action.

---

##### `CHANGE_TYPE`<sup>Required</sup> <a name="CHANGE_TYPE" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CHANGE_TYPE"></a>

```typescript
public readonly CHANGE_TYPE: string;
```

- *Type:* string

Condition key: catalog:ChangeType (String).

---

##### `CreateAgreementRequestConditionKeys`<sup>Required</sup> <a name="CreateAgreementRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CreateAgreementRequestConditionKeys"></a>

```typescript
public readonly CreateAgreementRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgreementRequest action.

---

##### `CreateVerificationEvidenceConditionKeys`<sup>Required</sup> <a name="CreateVerificationEvidenceConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.CreateVerificationEvidenceConditionKeys"></a>

```typescript
public readonly CreateVerificationEvidenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVerificationEvidence action.

---

##### `DescribeAgreementConditionKeys`<sup>Required</sup> <a name="DescribeAgreementConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.DescribeAgreementConditionKeys"></a>

```typescript
public readonly DescribeAgreementConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeAgreement action.

---

##### `INTENT`<sup>Required</sup> <a name="INTENT" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.INTENT"></a>

```typescript
public readonly INTENT: string;
```

- *Type:* string

Condition key: aws-marketplace:Intent (String).

---

##### `ListAgreementCancellationRequestsConditionKeys`<sup>Required</sup> <a name="ListAgreementCancellationRequestsConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListAgreementCancellationRequestsConditionKeys"></a>

```typescript
public readonly ListAgreementCancellationRequestsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAgreementCancellationRequests action.

---

##### `ListAgreementChargesConditionKeys`<sup>Required</sup> <a name="ListAgreementChargesConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListAgreementChargesConditionKeys"></a>

```typescript
public readonly ListAgreementChargesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAgreementCharges action.

---

##### `ListAgreementInvoiceLineItemsConditionKeys`<sup>Required</sup> <a name="ListAgreementInvoiceLineItemsConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListAgreementInvoiceLineItemsConditionKeys"></a>

```typescript
public readonly ListAgreementInvoiceLineItemsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAgreementInvoiceLineItems action.

---

##### `ListAgreementPaymentRequestsConditionKeys`<sup>Required</sup> <a name="ListAgreementPaymentRequestsConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListAgreementPaymentRequestsConditionKeys"></a>

```typescript
public readonly ListAgreementPaymentRequestsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAgreementPaymentRequests action.

---

##### `ListBillingAdjustmentRequestsConditionKeys`<sup>Required</sup> <a name="ListBillingAdjustmentRequestsConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListBillingAdjustmentRequestsConditionKeys"></a>

```typescript
public readonly ListBillingAdjustmentRequestsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBillingAdjustmentRequests action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ListVerificationsConditionKeys`<sup>Required</sup> <a name="ListVerificationsConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.ListVerificationsConditionKeys"></a>

```typescript
public readonly ListVerificationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListVerifications action.

---

##### `PARTY_TYPE`<sup>Required</sup> <a name="PARTY_TYPE" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.PARTY_TYPE"></a>

```typescript
public readonly PARTY_TYPE: string;
```

- *Type:* string

Condition key: aws-marketplace:PartyType (String).

---

##### `PRODUCT_ID`<sup>Required</sup> <a name="PRODUCT_ID" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.PRODUCT_ID"></a>

```typescript
public readonly PRODUCT_ID: string;
```

- *Type:* string

Condition key: aws-marketplace:ProductId (ArrayOfString).

---

##### `PutDeploymentParameterConditionKeys`<sup>Required</sup> <a name="PutDeploymentParameterConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.PutDeploymentParameterConditionKeys"></a>

```typescript
public readonly PutDeploymentParameterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDeploymentParameter action.

---

##### `RejectAgreementCancellationRequestConditionKeys`<sup>Required</sup> <a name="RejectAgreementCancellationRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.RejectAgreementCancellationRequestConditionKeys"></a>

```typescript
public readonly RejectAgreementCancellationRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RejectAgreementCancellationRequest action.

---

##### `RejectAgreementPaymentRequestConditionKeys`<sup>Required</sup> <a name="RejectAgreementPaymentRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.RejectAgreementPaymentRequestConditionKeys"></a>

```typescript
public readonly RejectAgreementPaymentRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RejectAgreementPaymentRequest action.

---

##### `SearchAgreementsConditionKeys`<sup>Required</sup> <a name="SearchAgreementsConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.SearchAgreementsConditionKeys"></a>

```typescript
public readonly SearchAgreementsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchAgreements action.

---

##### `SendAgreementCancellationRequestConditionKeys`<sup>Required</sup> <a name="SendAgreementCancellationRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.SendAgreementCancellationRequestConditionKeys"></a>

```typescript
public readonly SendAgreementCancellationRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendAgreementCancellationRequest action.

---

##### `SendAgreementPaymentRequestConditionKeys`<sup>Required</sup> <a name="SendAgreementPaymentRequestConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.SendAgreementPaymentRequestConditionKeys"></a>

```typescript
public readonly SendAgreementPaymentRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendAgreementPaymentRequest action.

---

##### `StartChangeSetConditionKeys`<sup>Required</sup> <a name="StartChangeSetConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.StartChangeSetConditionKeys"></a>

```typescript
public readonly StartChangeSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartChangeSet action.

---

##### `StartInvoiceSubmissionTaskConditionKeys`<sup>Required</sup> <a name="StartInvoiceSubmissionTaskConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.StartInvoiceSubmissionTaskConditionKeys"></a>

```typescript
public readonly StartInvoiceSubmissionTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartInvoiceSubmissionTask action.

---

##### `StartTaxComplianceProfileChangeTaskConditionKeys`<sup>Required</sup> <a name="StartTaxComplianceProfileChangeTaskConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.StartTaxComplianceProfileChangeTaskConditionKeys"></a>

```typescript
public readonly StartTaxComplianceProfileChangeTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTaxComplianceProfileChangeTask action.

---

##### `StartVerificationConditionKeys`<sup>Required</sup> <a name="StartVerificationConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.StartVerificationConditionKeys"></a>

```typescript
public readonly StartVerificationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartVerification action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdatePurchaseOrdersConditionKeys`<sup>Required</sup> <a name="UpdatePurchaseOrdersConditionKeys" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.UpdatePurchaseOrdersConditionKeys"></a>

```typescript
public readonly UpdatePurchaseOrdersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePurchaseOrders action.

---

##### `VERIFICATION_TYPE`<sup>Required</sup> <a name="VERIFICATION_TYPE" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceConditions.property.VERIFICATION_TYPE"></a>

```typescript
public readonly VERIFICATION_TYPE: string;
```

- *Type:* string

Condition key: aws-marketplace:VerificationType (String).

---

### AWSMarketplaceOperations <a name="AWSMarketplaceOperations" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations"></a>

API operation to required IAM actions mapping for aws-marketplace.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

new aws_marketplace.AWSMarketplaceOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.AcceptAgreementCancellationRequest">AcceptAgreementCancellationRequest</a></code> | <code>string[]</code> | IAM actions required for the AcceptAgreementCancellationRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.AcceptAgreementPaymentRequest">AcceptAgreementPaymentRequest</a></code> | <code>string[]</code> | IAM actions required for the AcceptAgreementPaymentRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.AcceptAgreementRequest">AcceptAgreementRequest</a></code> | <code>string[]</code> | IAM actions required for the AcceptAgreementRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.BatchCreateBillingAdjustmentRequest">BatchCreateBillingAdjustmentRequest</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateBillingAdjustmentRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.BatchDescribeEntities">BatchDescribeEntities</a></code> | <code>string[]</code> | IAM actions required for the BatchDescribeEntities API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.BatchMeterUsage">BatchMeterUsage</a></code> | <code>string[]</code> | IAM actions required for the BatchMeterUsage API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.CancelAgreement">CancelAgreement</a></code> | <code>string[]</code> | IAM actions required for the CancelAgreement API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.CancelAgreementCancellationRequest">CancelAgreementCancellationRequest</a></code> | <code>string[]</code> | IAM actions required for the CancelAgreementCancellationRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.CancelAgreementPaymentRequest">CancelAgreementPaymentRequest</a></code> | <code>string[]</code> | IAM actions required for the CancelAgreementPaymentRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.CancelChangeSet">CancelChangeSet</a></code> | <code>string[]</code> | IAM actions required for the CancelChangeSet API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.CreateAgreementRequest">CreateAgreementRequest</a></code> | <code>string[]</code> | IAM actions required for the CreateAgreementRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.DescribeAgreement">DescribeAgreement</a></code> | <code>string[]</code> | IAM actions required for the DescribeAgreement API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.DescribeChangeSet">DescribeChangeSet</a></code> | <code>string[]</code> | IAM actions required for the DescribeChangeSet API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.DescribeEntity">DescribeEntity</a></code> | <code>string[]</code> | IAM actions required for the DescribeEntity API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListAgreementCancellationRequests">ListAgreementCancellationRequests</a></code> | <code>string[]</code> | IAM actions required for the ListAgreementCancellationRequests API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListAgreementCharges">ListAgreementCharges</a></code> | <code>string[]</code> | IAM actions required for the ListAgreementCharges API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListAgreementInvoiceLineItems">ListAgreementInvoiceLineItems</a></code> | <code>string[]</code> | IAM actions required for the ListAgreementInvoiceLineItems API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListAgreementPaymentRequests">ListAgreementPaymentRequests</a></code> | <code>string[]</code> | IAM actions required for the ListAgreementPaymentRequests API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListBillingAdjustmentRequests">ListBillingAdjustmentRequests</a></code> | <code>string[]</code> | IAM actions required for the ListBillingAdjustmentRequests API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListChangeSets">ListChangeSets</a></code> | <code>string[]</code> | IAM actions required for the ListChangeSets API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListEntities">ListEntities</a></code> | <code>string[]</code> | IAM actions required for the ListEntities API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListFulfillmentOptions">ListFulfillmentOptions</a></code> | <code>string[]</code> | IAM actions required for the ListFulfillmentOptions API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListPurchaseOptions">ListPurchaseOptions</a></code> | <code>string[]</code> | IAM actions required for the ListPurchaseOptions API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.MeterUsage">MeterUsage</a></code> | <code>string[]</code> | IAM actions required for the MeterUsage API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetAgreementCancellationRequest">opGetAgreementCancellationRequest</a></code> | <code>string[]</code> | IAM actions required for the GetAgreementCancellationRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetAgreementEntitlements">opGetAgreementEntitlements</a></code> | <code>string[]</code> | IAM actions required for the GetAgreementEntitlements API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetAgreementPaymentRequest">opGetAgreementPaymentRequest</a></code> | <code>string[]</code> | IAM actions required for the GetAgreementPaymentRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetAgreementTerms">opGetAgreementTerms</a></code> | <code>string[]</code> | IAM actions required for the GetAgreementTerms API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetBillingAdjustmentRequest">opGetBillingAdjustmentRequest</a></code> | <code>string[]</code> | IAM actions required for the GetBillingAdjustmentRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetBuyerDashboard">opGetBuyerDashboard</a></code> | <code>string[]</code> | IAM actions required for the GetBuyerDashboard API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetEntitlements">opGetEntitlements</a></code> | <code>string[]</code> | IAM actions required for the GetEntitlements API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetListing">opGetListing</a></code> | <code>string[]</code> | IAM actions required for the GetListing API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetOffer">opGetOffer</a></code> | <code>string[]</code> | IAM actions required for the GetOffer API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetOfferSet">opGetOfferSet</a></code> | <code>string[]</code> | IAM actions required for the GetOfferSet API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetOfferTerms">opGetOfferTerms</a></code> | <code>string[]</code> | IAM actions required for the GetOfferTerms API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetProduct">opGetProduct</a></code> | <code>string[]</code> | IAM actions required for the GetProduct API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.PutDeploymentParameter">PutDeploymentParameter</a></code> | <code>string[]</code> | IAM actions required for the PutDeploymentParameter API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.RegisterUsage">RegisterUsage</a></code> | <code>string[]</code> | IAM actions required for the RegisterUsage API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.RejectAgreementCancellationRequest">RejectAgreementCancellationRequest</a></code> | <code>string[]</code> | IAM actions required for the RejectAgreementCancellationRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.RejectAgreementPaymentRequest">RejectAgreementPaymentRequest</a></code> | <code>string[]</code> | IAM actions required for the RejectAgreementPaymentRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ResolveCustomer">ResolveCustomer</a></code> | <code>string[]</code> | IAM actions required for the ResolveCustomer API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.SearchAgreements">SearchAgreements</a></code> | <code>string[]</code> | IAM actions required for the SearchAgreements API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.SearchFacets">SearchFacets</a></code> | <code>string[]</code> | IAM actions required for the SearchFacets API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.SearchListings">SearchListings</a></code> | <code>string[]</code> | IAM actions required for the SearchListings API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.SendAgreementCancellationRequest">SendAgreementCancellationRequest</a></code> | <code>string[]</code> | IAM actions required for the SendAgreementCancellationRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.SendAgreementPaymentRequest">SendAgreementPaymentRequest</a></code> | <code>string[]</code> | IAM actions required for the SendAgreementPaymentRequest API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.StartChangeSet">StartChangeSet</a></code> | <code>string[]</code> | IAM actions required for the StartChangeSet API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.UpdatePurchaseOrders">UpdatePurchaseOrders</a></code> | <code>string[]</code> | IAM actions required for the UpdatePurchaseOrders API call. |

---

##### `AcceptAgreementCancellationRequest`<sup>Required</sup> <a name="AcceptAgreementCancellationRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.AcceptAgreementCancellationRequest"></a>

```typescript
public readonly AcceptAgreementCancellationRequest: string[];
```

- *Type:* string[]

IAM actions required for the AcceptAgreementCancellationRequest API call.

---

##### `AcceptAgreementPaymentRequest`<sup>Required</sup> <a name="AcceptAgreementPaymentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.AcceptAgreementPaymentRequest"></a>

```typescript
public readonly AcceptAgreementPaymentRequest: string[];
```

- *Type:* string[]

IAM actions required for the AcceptAgreementPaymentRequest API call.

---

##### `AcceptAgreementRequest`<sup>Required</sup> <a name="AcceptAgreementRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.AcceptAgreementRequest"></a>

```typescript
public readonly AcceptAgreementRequest: string[];
```

- *Type:* string[]

IAM actions required for the AcceptAgreementRequest API call.

---

##### `BatchCreateBillingAdjustmentRequest`<sup>Required</sup> <a name="BatchCreateBillingAdjustmentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.BatchCreateBillingAdjustmentRequest"></a>

```typescript
public readonly BatchCreateBillingAdjustmentRequest: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateBillingAdjustmentRequest API call.

---

##### `BatchDescribeEntities`<sup>Required</sup> <a name="BatchDescribeEntities" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.BatchDescribeEntities"></a>

```typescript
public readonly BatchDescribeEntities: string[];
```

- *Type:* string[]

IAM actions required for the BatchDescribeEntities API call.

---

##### `BatchMeterUsage`<sup>Required</sup> <a name="BatchMeterUsage" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.BatchMeterUsage"></a>

```typescript
public readonly BatchMeterUsage: string[];
```

- *Type:* string[]

IAM actions required for the BatchMeterUsage API call.

---

##### `CancelAgreement`<sup>Required</sup> <a name="CancelAgreement" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.CancelAgreement"></a>

```typescript
public readonly CancelAgreement: string[];
```

- *Type:* string[]

IAM actions required for the CancelAgreement API call.

---

##### `CancelAgreementCancellationRequest`<sup>Required</sup> <a name="CancelAgreementCancellationRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.CancelAgreementCancellationRequest"></a>

```typescript
public readonly CancelAgreementCancellationRequest: string[];
```

- *Type:* string[]

IAM actions required for the CancelAgreementCancellationRequest API call.

---

##### `CancelAgreementPaymentRequest`<sup>Required</sup> <a name="CancelAgreementPaymentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.CancelAgreementPaymentRequest"></a>

```typescript
public readonly CancelAgreementPaymentRequest: string[];
```

- *Type:* string[]

IAM actions required for the CancelAgreementPaymentRequest API call.

---

##### `CancelChangeSet`<sup>Required</sup> <a name="CancelChangeSet" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.CancelChangeSet"></a>

```typescript
public readonly CancelChangeSet: string[];
```

- *Type:* string[]

IAM actions required for the CancelChangeSet API call.

---

##### `CreateAgreementRequest`<sup>Required</sup> <a name="CreateAgreementRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.CreateAgreementRequest"></a>

```typescript
public readonly CreateAgreementRequest: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgreementRequest API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DescribeAgreement`<sup>Required</sup> <a name="DescribeAgreement" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.DescribeAgreement"></a>

```typescript
public readonly DescribeAgreement: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAgreement API call.

---

##### `DescribeChangeSet`<sup>Required</sup> <a name="DescribeChangeSet" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.DescribeChangeSet"></a>

```typescript
public readonly DescribeChangeSet: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChangeSet API call.

---

##### `DescribeEntity`<sup>Required</sup> <a name="DescribeEntity" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.DescribeEntity"></a>

```typescript
public readonly DescribeEntity: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEntity API call.

---

##### `ListAgreementCancellationRequests`<sup>Required</sup> <a name="ListAgreementCancellationRequests" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListAgreementCancellationRequests"></a>

```typescript
public readonly ListAgreementCancellationRequests: string[];
```

- *Type:* string[]

IAM actions required for the ListAgreementCancellationRequests API call.

---

##### `ListAgreementCharges`<sup>Required</sup> <a name="ListAgreementCharges" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListAgreementCharges"></a>

```typescript
public readonly ListAgreementCharges: string[];
```

- *Type:* string[]

IAM actions required for the ListAgreementCharges API call.

---

##### `ListAgreementInvoiceLineItems`<sup>Required</sup> <a name="ListAgreementInvoiceLineItems" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListAgreementInvoiceLineItems"></a>

```typescript
public readonly ListAgreementInvoiceLineItems: string[];
```

- *Type:* string[]

IAM actions required for the ListAgreementInvoiceLineItems API call.

---

##### `ListAgreementPaymentRequests`<sup>Required</sup> <a name="ListAgreementPaymentRequests" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListAgreementPaymentRequests"></a>

```typescript
public readonly ListAgreementPaymentRequests: string[];
```

- *Type:* string[]

IAM actions required for the ListAgreementPaymentRequests API call.

---

##### `ListBillingAdjustmentRequests`<sup>Required</sup> <a name="ListBillingAdjustmentRequests" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListBillingAdjustmentRequests"></a>

```typescript
public readonly ListBillingAdjustmentRequests: string[];
```

- *Type:* string[]

IAM actions required for the ListBillingAdjustmentRequests API call.

---

##### `ListChangeSets`<sup>Required</sup> <a name="ListChangeSets" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListChangeSets"></a>

```typescript
public readonly ListChangeSets: string[];
```

- *Type:* string[]

IAM actions required for the ListChangeSets API call.

---

##### `ListEntities`<sup>Required</sup> <a name="ListEntities" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListEntities"></a>

```typescript
public readonly ListEntities: string[];
```

- *Type:* string[]

IAM actions required for the ListEntities API call.

---

##### `ListFulfillmentOptions`<sup>Required</sup> <a name="ListFulfillmentOptions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListFulfillmentOptions"></a>

```typescript
public readonly ListFulfillmentOptions: string[];
```

- *Type:* string[]

IAM actions required for the ListFulfillmentOptions API call.

---

##### `ListPurchaseOptions`<sup>Required</sup> <a name="ListPurchaseOptions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListPurchaseOptions"></a>

```typescript
public readonly ListPurchaseOptions: string[];
```

- *Type:* string[]

IAM actions required for the ListPurchaseOptions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `MeterUsage`<sup>Required</sup> <a name="MeterUsage" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.MeterUsage"></a>

```typescript
public readonly MeterUsage: string[];
```

- *Type:* string[]

IAM actions required for the MeterUsage API call.

---

##### `opGetAgreementCancellationRequest`<sup>Required</sup> <a name="opGetAgreementCancellationRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetAgreementCancellationRequest"></a>

```typescript
public readonly opGetAgreementCancellationRequest: string[];
```

- *Type:* string[]

IAM actions required for the GetAgreementCancellationRequest API call.

---

##### `opGetAgreementEntitlements`<sup>Required</sup> <a name="opGetAgreementEntitlements" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetAgreementEntitlements"></a>

```typescript
public readonly opGetAgreementEntitlements: string[];
```

- *Type:* string[]

IAM actions required for the GetAgreementEntitlements API call.

---

##### `opGetAgreementPaymentRequest`<sup>Required</sup> <a name="opGetAgreementPaymentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetAgreementPaymentRequest"></a>

```typescript
public readonly opGetAgreementPaymentRequest: string[];
```

- *Type:* string[]

IAM actions required for the GetAgreementPaymentRequest API call.

---

##### `opGetAgreementTerms`<sup>Required</sup> <a name="opGetAgreementTerms" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetAgreementTerms"></a>

```typescript
public readonly opGetAgreementTerms: string[];
```

- *Type:* string[]

IAM actions required for the GetAgreementTerms API call.

---

##### `opGetBillingAdjustmentRequest`<sup>Required</sup> <a name="opGetBillingAdjustmentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetBillingAdjustmentRequest"></a>

```typescript
public readonly opGetBillingAdjustmentRequest: string[];
```

- *Type:* string[]

IAM actions required for the GetBillingAdjustmentRequest API call.

---

##### `opGetBuyerDashboard`<sup>Required</sup> <a name="opGetBuyerDashboard" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetBuyerDashboard"></a>

```typescript
public readonly opGetBuyerDashboard: string[];
```

- *Type:* string[]

IAM actions required for the GetBuyerDashboard API call.

---

##### `opGetEntitlements`<sup>Required</sup> <a name="opGetEntitlements" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetEntitlements"></a>

```typescript
public readonly opGetEntitlements: string[];
```

- *Type:* string[]

IAM actions required for the GetEntitlements API call.

---

##### `opGetListing`<sup>Required</sup> <a name="opGetListing" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetListing"></a>

```typescript
public readonly opGetListing: string[];
```

- *Type:* string[]

IAM actions required for the GetListing API call.

---

##### `opGetOffer`<sup>Required</sup> <a name="opGetOffer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetOffer"></a>

```typescript
public readonly opGetOffer: string[];
```

- *Type:* string[]

IAM actions required for the GetOffer API call.

---

##### `opGetOfferSet`<sup>Required</sup> <a name="opGetOfferSet" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetOfferSet"></a>

```typescript
public readonly opGetOfferSet: string[];
```

- *Type:* string[]

IAM actions required for the GetOfferSet API call.

---

##### `opGetOfferTerms`<sup>Required</sup> <a name="opGetOfferTerms" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetOfferTerms"></a>

```typescript
public readonly opGetOfferTerms: string[];
```

- *Type:* string[]

IAM actions required for the GetOfferTerms API call.

---

##### `opGetProduct`<sup>Required</sup> <a name="opGetProduct" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetProduct"></a>

```typescript
public readonly opGetProduct: string[];
```

- *Type:* string[]

IAM actions required for the GetProduct API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `PutDeploymentParameter`<sup>Required</sup> <a name="PutDeploymentParameter" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.PutDeploymentParameter"></a>

```typescript
public readonly PutDeploymentParameter: string[];
```

- *Type:* string[]

IAM actions required for the PutDeploymentParameter API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RegisterUsage`<sup>Required</sup> <a name="RegisterUsage" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.RegisterUsage"></a>

```typescript
public readonly RegisterUsage: string[];
```

- *Type:* string[]

IAM actions required for the RegisterUsage API call.

---

##### `RejectAgreementCancellationRequest`<sup>Required</sup> <a name="RejectAgreementCancellationRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.RejectAgreementCancellationRequest"></a>

```typescript
public readonly RejectAgreementCancellationRequest: string[];
```

- *Type:* string[]

IAM actions required for the RejectAgreementCancellationRequest API call.

---

##### `RejectAgreementPaymentRequest`<sup>Required</sup> <a name="RejectAgreementPaymentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.RejectAgreementPaymentRequest"></a>

```typescript
public readonly RejectAgreementPaymentRequest: string[];
```

- *Type:* string[]

IAM actions required for the RejectAgreementPaymentRequest API call.

---

##### `ResolveCustomer`<sup>Required</sup> <a name="ResolveCustomer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.ResolveCustomer"></a>

```typescript
public readonly ResolveCustomer: string[];
```

- *Type:* string[]

IAM actions required for the ResolveCustomer API call.

---

##### `SearchAgreements`<sup>Required</sup> <a name="SearchAgreements" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.SearchAgreements"></a>

```typescript
public readonly SearchAgreements: string[];
```

- *Type:* string[]

IAM actions required for the SearchAgreements API call.

---

##### `SearchFacets`<sup>Required</sup> <a name="SearchFacets" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.SearchFacets"></a>

```typescript
public readonly SearchFacets: string[];
```

- *Type:* string[]

IAM actions required for the SearchFacets API call.

---

##### `SearchListings`<sup>Required</sup> <a name="SearchListings" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.SearchListings"></a>

```typescript
public readonly SearchListings: string[];
```

- *Type:* string[]

IAM actions required for the SearchListings API call.

---

##### `SendAgreementCancellationRequest`<sup>Required</sup> <a name="SendAgreementCancellationRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.SendAgreementCancellationRequest"></a>

```typescript
public readonly SendAgreementCancellationRequest: string[];
```

- *Type:* string[]

IAM actions required for the SendAgreementCancellationRequest API call.

---

##### `SendAgreementPaymentRequest`<sup>Required</sup> <a name="SendAgreementPaymentRequest" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.SendAgreementPaymentRequest"></a>

```typescript
public readonly SendAgreementPaymentRequest: string[];
```

- *Type:* string[]

IAM actions required for the SendAgreementPaymentRequest API call.

---

##### `StartChangeSet`<sup>Required</sup> <a name="StartChangeSet" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.StartChangeSet"></a>

```typescript
public readonly StartChangeSet: string[];
```

- *Type:* string[]

IAM actions required for the StartChangeSet API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdatePurchaseOrders`<sup>Required</sup> <a name="UpdatePurchaseOrders" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceOperations.property.UpdatePurchaseOrders"></a>

```typescript
public readonly UpdatePurchaseOrders: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePurchaseOrders API call.

---

### AWSMarketplaceResources <a name="AWSMarketplaceResources" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources"></a>

ARN builders, validators, and parsers for aws-marketplace resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.Initializer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

new aws_marketplace.AWSMarketplaceResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.allListings">allListings</a></code> | Builds an ARN for the AllListings resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.allPurchaseOptions">allPurchaseOptions</a></code> | Builds an ARN for the AllPurchaseOptions resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.assessment">assessment</a></code> | Builds an ARN for the Assessment resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.changeSet">changeSet</a></code> | Builds an ARN for the ChangeSet resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.dashboard">dashboard</a></code> | Builds an ARN for the Dashboard resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.deploymentParameter">deploymentParameter</a></code> | Builds an ARN for the DeploymentParameter resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.entity">entity</a></code> | Builds an ARN for the Entity resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.invoiceSubmissionTask">invoiceSubmissionTask</a></code> | Builds an ARN for the InvoiceSubmissionTask resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.issuedTaxInvoice">issuedTaxInvoice</a></code> | Builds an ARN for the IssuedTaxInvoice resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidAllListingsArn">isValidAllListingsArn</a></code> | Validates whether a string is a valid ARN for the AllListings resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidAllPurchaseOptionsArn">isValidAllPurchaseOptionsArn</a></code> | Validates whether a string is a valid ARN for the AllPurchaseOptions resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidAssessmentArn">isValidAssessmentArn</a></code> | Validates whether a string is a valid ARN for the Assessment resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidChangeSetArn">isValidChangeSetArn</a></code> | Validates whether a string is a valid ARN for the ChangeSet resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidDashboardArn">isValidDashboardArn</a></code> | Validates whether a string is a valid ARN for the Dashboard resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidDeploymentParameterArn">isValidDeploymentParameterArn</a></code> | Validates whether a string is a valid ARN for the DeploymentParameter resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidEntityArn">isValidEntityArn</a></code> | Validates whether a string is a valid ARN for the Entity resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidInvoiceSubmissionTaskArn">isValidInvoiceSubmissionTaskArn</a></code> | Validates whether a string is a valid ARN for the InvoiceSubmissionTask resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidIssuedTaxInvoiceArn">isValidIssuedTaxInvoiceArn</a></code> | Validates whether a string is a valid ARN for the IssuedTaxInvoice resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidListingArn">isValidListingArn</a></code> | Validates whether a string is a valid ARN for the Listing resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidOfferArn">isValidOfferArn</a></code> | Validates whether a string is a valid ARN for the Offer resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidOfferSetArn">isValidOfferSetArn</a></code> | Validates whether a string is a valid ARN for the OfferSet resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidProductArn">isValidProductArn</a></code> | Validates whether a string is a valid ARN for the Product resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidPurchaseOptionArn">isValidPurchaseOptionArn</a></code> | Validates whether a string is a valid ARN for the PurchaseOption resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidSellerDashboardArn">isValidSellerDashboardArn</a></code> | Validates whether a string is a valid ARN for the SellerDashboard resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidTaxComplianceProfileArn">isValidTaxComplianceProfileArn</a></code> | Validates whether a string is a valid ARN for the TaxComplianceProfile resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidTaxComplianceProfileChangeTaskArn">isValidTaxComplianceProfileChangeTaskArn</a></code> | Validates whether a string is a valid ARN for the TaxComplianceProfileChangeTask resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidVerificationEvidenceArn">isValidVerificationEvidenceArn</a></code> | Validates whether a string is a valid ARN for the VerificationEvidence resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.listing">listing</a></code> | Builds an ARN for the Listing resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.offer">offer</a></code> | Builds an ARN for the Offer resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.offerSet">offerSet</a></code> | Builds an ARN for the OfferSet resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseAllListingsArn">parseAllListingsArn</a></code> | Parses a AllListings ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseAllPurchaseOptionsArn">parseAllPurchaseOptionsArn</a></code> | Parses a AllPurchaseOptions ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseAssessmentArn">parseAssessmentArn</a></code> | Parses a Assessment ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseChangeSetArn">parseChangeSetArn</a></code> | Parses a ChangeSet ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseDashboardArn">parseDashboardArn</a></code> | Parses a Dashboard ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseDeploymentParameterArn">parseDeploymentParameterArn</a></code> | Parses a DeploymentParameter ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseEntityArn">parseEntityArn</a></code> | Parses a Entity ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseInvoiceSubmissionTaskArn">parseInvoiceSubmissionTaskArn</a></code> | Parses a InvoiceSubmissionTask ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseIssuedTaxInvoiceArn">parseIssuedTaxInvoiceArn</a></code> | Parses a IssuedTaxInvoice ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseListingArn">parseListingArn</a></code> | Parses a Listing ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseOfferArn">parseOfferArn</a></code> | Parses a Offer ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseOfferSetArn">parseOfferSetArn</a></code> | Parses a OfferSet ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseProductArn">parseProductArn</a></code> | Parses a Product ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parsePurchaseOptionArn">parsePurchaseOptionArn</a></code> | Parses a PurchaseOption ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseSellerDashboardArn">parseSellerDashboardArn</a></code> | Parses a SellerDashboard ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseTaxComplianceProfileArn">parseTaxComplianceProfileArn</a></code> | Parses a TaxComplianceProfile ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseTaxComplianceProfileChangeTaskArn">parseTaxComplianceProfileChangeTaskArn</a></code> | Parses a TaxComplianceProfileChangeTask ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseVerificationEvidenceArn">parseVerificationEvidenceArn</a></code> | Parses a VerificationEvidence ARN into its components. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.product">product</a></code> | Builds an ARN for the Product resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.purchaseOption">purchaseOption</a></code> | Builds an ARN for the PurchaseOption resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.sellerDashboard">sellerDashboard</a></code> | Builds an ARN for the SellerDashboard resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.taxComplianceProfile">taxComplianceProfile</a></code> | Builds an ARN for the TaxComplianceProfile resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.taxComplianceProfileChangeTask">taxComplianceProfileChangeTask</a></code> | Builds an ARN for the TaxComplianceProfileChangeTask resource. |
| <code><a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.verificationEvidence">verificationEvidence</a></code> | Builds an ARN for the VerificationEvidence resource. |

---

##### `allListings` <a name="allListings" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.allListings"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.allListings(props: AWSMarketplaceAllListingsArnProps)
```

Builds an ARN for the AllListings resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.allListings.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllListingsArnProps">AWSMarketplaceAllListingsArnProps</a>

---

##### `allPurchaseOptions` <a name="allPurchaseOptions" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.allPurchaseOptions"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.allPurchaseOptions(props: AWSMarketplaceAllPurchaseOptionsArnProps)
```

Builds an ARN for the AllPurchaseOptions resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.allPurchaseOptions.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAllPurchaseOptionsArnProps">AWSMarketplaceAllPurchaseOptionsArnProps</a>

---

##### `assessment` <a name="assessment" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.assessment"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.assessment(props: AWSMarketplaceAssessmentArnProps)
```

Builds an ARN for the Assessment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.assessment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceAssessmentArnProps">AWSMarketplaceAssessmentArnProps</a>

---

##### `changeSet` <a name="changeSet" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.changeSet"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.changeSet(props: AWSMarketplaceChangeSetArnProps)
```

Builds an ARN for the ChangeSet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.changeSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceChangeSetArnProps">AWSMarketplaceChangeSetArnProps</a>

---

##### `dashboard` <a name="dashboard" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.dashboard"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.dashboard(props: AWSMarketplaceDashboardArnProps)
```

Builds an ARN for the Dashboard resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.dashboard.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDashboardArnProps">AWSMarketplaceDashboardArnProps</a>

---

##### `deploymentParameter` <a name="deploymentParameter" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.deploymentParameter"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.deploymentParameter(props: AWSMarketplaceDeploymentParameterArnProps)
```

Builds an ARN for the DeploymentParameter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.deploymentParameter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceDeploymentParameterArnProps">AWSMarketplaceDeploymentParameterArnProps</a>

---

##### `entity` <a name="entity" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.entity"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.entity(props: AWSMarketplaceEntityArnProps)
```

Builds an ARN for the Entity resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.entity.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceEntityArnProps">AWSMarketplaceEntityArnProps</a>

---

##### `invoiceSubmissionTask` <a name="invoiceSubmissionTask" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.invoiceSubmissionTask"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.invoiceSubmissionTask(props: AWSMarketplaceInvoiceSubmissionTaskArnProps)
```

Builds an ARN for the InvoiceSubmissionTask resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.invoiceSubmissionTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceInvoiceSubmissionTaskArnProps">AWSMarketplaceInvoiceSubmissionTaskArnProps</a>

---

##### `issuedTaxInvoice` <a name="issuedTaxInvoice" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.issuedTaxInvoice"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.issuedTaxInvoice(props: AWSMarketplaceIssuedTaxInvoiceArnProps)
```

Builds an ARN for the IssuedTaxInvoice resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.issuedTaxInvoice.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceIssuedTaxInvoiceArnProps">AWSMarketplaceIssuedTaxInvoiceArnProps</a>

---

##### `isValidAllListingsArn` <a name="isValidAllListingsArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidAllListingsArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidAllListingsArn(arn: string)
```

Validates whether a string is a valid ARN for the AllListings resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidAllListingsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAllPurchaseOptionsArn` <a name="isValidAllPurchaseOptionsArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidAllPurchaseOptionsArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidAllPurchaseOptionsArn(arn: string)
```

Validates whether a string is a valid ARN for the AllPurchaseOptions resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidAllPurchaseOptionsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssessmentArn` <a name="isValidAssessmentArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidAssessmentArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidAssessmentArn(arn: string)
```

Validates whether a string is a valid ARN for the Assessment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidAssessmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChangeSetArn` <a name="isValidChangeSetArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidChangeSetArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidChangeSetArn(arn: string)
```

Validates whether a string is a valid ARN for the ChangeSet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidChangeSetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDashboardArn` <a name="isValidDashboardArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidDashboardArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidDashboardArn(arn: string)
```

Validates whether a string is a valid ARN for the Dashboard resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentParameterArn` <a name="isValidDeploymentParameterArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidDeploymentParameterArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidDeploymentParameterArn(arn: string)
```

Validates whether a string is a valid ARN for the DeploymentParameter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidDeploymentParameterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEntityArn` <a name="isValidEntityArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidEntityArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidEntityArn(arn: string)
```

Validates whether a string is a valid ARN for the Entity resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidEntityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInvoiceSubmissionTaskArn` <a name="isValidInvoiceSubmissionTaskArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidInvoiceSubmissionTaskArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidInvoiceSubmissionTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the InvoiceSubmissionTask resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidInvoiceSubmissionTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIssuedTaxInvoiceArn` <a name="isValidIssuedTaxInvoiceArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidIssuedTaxInvoiceArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidIssuedTaxInvoiceArn(arn: string)
```

Validates whether a string is a valid ARN for the IssuedTaxInvoice resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidIssuedTaxInvoiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidListingArn` <a name="isValidListingArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidListingArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidListingArn(arn: string)
```

Validates whether a string is a valid ARN for the Listing resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidListingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOfferArn` <a name="isValidOfferArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidOfferArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidOfferArn(arn: string)
```

Validates whether a string is a valid ARN for the Offer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidOfferArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOfferSetArn` <a name="isValidOfferSetArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidOfferSetArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidOfferSetArn(arn: string)
```

Validates whether a string is a valid ARN for the OfferSet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidOfferSetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProductArn` <a name="isValidProductArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidProductArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidProductArn(arn: string)
```

Validates whether a string is a valid ARN for the Product resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidProductArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPurchaseOptionArn` <a name="isValidPurchaseOptionArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidPurchaseOptionArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidPurchaseOptionArn(arn: string)
```

Validates whether a string is a valid ARN for the PurchaseOption resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidPurchaseOptionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSellerDashboardArn` <a name="isValidSellerDashboardArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidSellerDashboardArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidSellerDashboardArn(arn: string)
```

Validates whether a string is a valid ARN for the SellerDashboard resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidSellerDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaxComplianceProfileArn` <a name="isValidTaxComplianceProfileArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidTaxComplianceProfileArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidTaxComplianceProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the TaxComplianceProfile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidTaxComplianceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaxComplianceProfileChangeTaskArn` <a name="isValidTaxComplianceProfileChangeTaskArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidTaxComplianceProfileChangeTaskArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidTaxComplianceProfileChangeTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the TaxComplianceProfileChangeTask resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidTaxComplianceProfileChangeTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVerificationEvidenceArn` <a name="isValidVerificationEvidenceArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidVerificationEvidenceArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.isValidVerificationEvidenceArn(arn: string)
```

Validates whether a string is a valid ARN for the VerificationEvidence resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.isValidVerificationEvidenceArn.parameter.arn"></a>

- *Type:* string

---

##### `listing` <a name="listing" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.listing"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.listing(props: AWSMarketplaceListingArnProps)
```

Builds an ARN for the Listing resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.listing.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceListingArnProps">AWSMarketplaceListingArnProps</a>

---

##### `offer` <a name="offer" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.offer"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.offer(props: AWSMarketplaceOfferArnProps)
```

Builds an ARN for the Offer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.offer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferArnProps">AWSMarketplaceOfferArnProps</a>

---

##### `offerSet` <a name="offerSet" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.offerSet"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.offerSet(props: AWSMarketplaceOfferSetArnProps)
```

Builds an ARN for the OfferSet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.offerSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceOfferSetArnProps">AWSMarketplaceOfferSetArnProps</a>

---

##### `parseAllListingsArn` <a name="parseAllListingsArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseAllListingsArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseAllListingsArn(arn: string)
```

Parses a AllListings ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseAllListingsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAllPurchaseOptionsArn` <a name="parseAllPurchaseOptionsArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseAllPurchaseOptionsArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseAllPurchaseOptionsArn(arn: string)
```

Parses a AllPurchaseOptions ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseAllPurchaseOptionsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssessmentArn` <a name="parseAssessmentArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseAssessmentArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseAssessmentArn(arn: string)
```

Parses a Assessment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseAssessmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChangeSetArn` <a name="parseChangeSetArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseChangeSetArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseChangeSetArn(arn: string)
```

Parses a ChangeSet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseChangeSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDashboardArn` <a name="parseDashboardArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseDashboardArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseDashboardArn(arn: string)
```

Parses a Dashboard ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentParameterArn` <a name="parseDeploymentParameterArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseDeploymentParameterArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseDeploymentParameterArn(arn: string)
```

Parses a DeploymentParameter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseDeploymentParameterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEntityArn` <a name="parseEntityArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseEntityArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseEntityArn(arn: string)
```

Parses a Entity ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseEntityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInvoiceSubmissionTaskArn` <a name="parseInvoiceSubmissionTaskArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseInvoiceSubmissionTaskArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseInvoiceSubmissionTaskArn(arn: string)
```

Parses a InvoiceSubmissionTask ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseInvoiceSubmissionTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIssuedTaxInvoiceArn` <a name="parseIssuedTaxInvoiceArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseIssuedTaxInvoiceArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseIssuedTaxInvoiceArn(arn: string)
```

Parses a IssuedTaxInvoice ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseIssuedTaxInvoiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseListingArn` <a name="parseListingArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseListingArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseListingArn(arn: string)
```

Parses a Listing ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseListingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOfferArn` <a name="parseOfferArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseOfferArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseOfferArn(arn: string)
```

Parses a Offer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseOfferArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOfferSetArn` <a name="parseOfferSetArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseOfferSetArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseOfferSetArn(arn: string)
```

Parses a OfferSet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseOfferSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProductArn` <a name="parseProductArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseProductArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseProductArn(arn: string)
```

Parses a Product ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseProductArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePurchaseOptionArn` <a name="parsePurchaseOptionArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parsePurchaseOptionArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parsePurchaseOptionArn(arn: string)
```

Parses a PurchaseOption ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parsePurchaseOptionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSellerDashboardArn` <a name="parseSellerDashboardArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseSellerDashboardArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseSellerDashboardArn(arn: string)
```

Parses a SellerDashboard ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseSellerDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaxComplianceProfileArn` <a name="parseTaxComplianceProfileArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseTaxComplianceProfileArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseTaxComplianceProfileArn(arn: string)
```

Parses a TaxComplianceProfile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseTaxComplianceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaxComplianceProfileChangeTaskArn` <a name="parseTaxComplianceProfileChangeTaskArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseTaxComplianceProfileChangeTaskArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseTaxComplianceProfileChangeTaskArn(arn: string)
```

Parses a TaxComplianceProfileChangeTask ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseTaxComplianceProfileChangeTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVerificationEvidenceArn` <a name="parseVerificationEvidenceArn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseVerificationEvidenceArn"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.parseVerificationEvidenceArn(arn: string)
```

Parses a VerificationEvidence ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.parseVerificationEvidenceArn.parameter.arn"></a>

- *Type:* string

---

##### `product` <a name="product" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.product"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.product(props: AWSMarketplaceProductArnProps)
```

Builds an ARN for the Product resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.product.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceProductArnProps">AWSMarketplaceProductArnProps</a>

---

##### `purchaseOption` <a name="purchaseOption" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.purchaseOption"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.purchaseOption(props: AWSMarketplacePurchaseOptionArnProps)
```

Builds an ARN for the PurchaseOption resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.purchaseOption.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplacePurchaseOptionArnProps">AWSMarketplacePurchaseOptionArnProps</a>

---

##### `sellerDashboard` <a name="sellerDashboard" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.sellerDashboard"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.sellerDashboard(props: AWSMarketplaceSellerDashboardArnProps)
```

Builds an ARN for the SellerDashboard resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.sellerDashboard.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceSellerDashboardArnProps">AWSMarketplaceSellerDashboardArnProps</a>

---

##### `taxComplianceProfile` <a name="taxComplianceProfile" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.taxComplianceProfile"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.taxComplianceProfile(props: AWSMarketplaceTaxComplianceProfileArnProps)
```

Builds an ARN for the TaxComplianceProfile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.taxComplianceProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileArnProps">AWSMarketplaceTaxComplianceProfileArnProps</a>

---

##### `taxComplianceProfileChangeTask` <a name="taxComplianceProfileChangeTask" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.taxComplianceProfileChangeTask"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.taxComplianceProfileChangeTask(props: AWSMarketplaceTaxComplianceProfileChangeTaskArnProps)
```

Builds an ARN for the TaxComplianceProfileChangeTask resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.taxComplianceProfileChangeTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceTaxComplianceProfileChangeTaskArnProps">AWSMarketplaceTaxComplianceProfileChangeTaskArnProps</a>

---

##### `verificationEvidence` <a name="verificationEvidence" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.verificationEvidence"></a>

```typescript
import { aws_marketplace } from '@cdk_utils/iam'

aws_marketplace.AWSMarketplaceResources.verificationEvidence(props: AWSMarketplaceVerificationEvidenceArnProps)
```

Builds an ARN for the VerificationEvidence resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aws_marketplace.AWSMarketplaceResources.verificationEvidence.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aws_marketplace.AWSMarketplaceVerificationEvidenceArnProps">AWSMarketplaceVerificationEvidenceArnProps</a>

---




