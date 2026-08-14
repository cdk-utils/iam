# `servicecatalog` Submodule <a name="`servicecatalog` Submodule" id="@cdk_utils/iam.servicecatalog"></a>


## Structs <a name="Structs" id="Structs"></a>

### ServiceCatalogApplicationArnComponents <a name="ServiceCatalogApplicationArnComponents" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnComponents"></a>

Parsed components of a Application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnComponents.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

const serviceCatalogApplicationArnComponents: servicecatalog.ServiceCatalogApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ServiceCatalogApplicationArnProps <a name="ServiceCatalogApplicationArnProps" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnProps"></a>

Properties for building a Application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnProps.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

const serviceCatalogApplicationArnProps: servicecatalog.ServiceCatalogApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ServiceCatalogAttributeGroupArnComponents <a name="ServiceCatalogAttributeGroupArnComponents" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnComponents"></a>

Parsed components of a AttributeGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnComponents.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

const serviceCatalogAttributeGroupArnComponents: servicecatalog.ServiceCatalogAttributeGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnComponents.property.attributeGroupId">attributeGroupId</a></code> | <code>string</code> | The AttributeGroupId component. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `attributeGroupId`<sup>Required</sup> <a name="attributeGroupId" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnComponents.property.attributeGroupId"></a>

```typescript
public readonly attributeGroupId: string;
```

- *Type:* string

The AttributeGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ServiceCatalogAttributeGroupArnProps <a name="ServiceCatalogAttributeGroupArnProps" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnProps"></a>

Properties for building a AttributeGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnProps.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

const serviceCatalogAttributeGroupArnProps: servicecatalog.ServiceCatalogAttributeGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnProps.property.attributeGroupId">attributeGroupId</a></code> | <code>string</code> | The AttributeGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `attributeGroupId`<sup>Required</sup> <a name="attributeGroupId" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnProps.property.attributeGroupId"></a>

```typescript
public readonly attributeGroupId: string;
```

- *Type:* string

The AttributeGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ServiceCatalogPortfolioArnComponents <a name="ServiceCatalogPortfolioArnComponents" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnComponents"></a>

Parsed components of a Portfolio ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnComponents.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

const serviceCatalogPortfolioArnComponents: servicecatalog.ServiceCatalogPortfolioArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnComponents.property.portfolioId">portfolioId</a></code> | <code>string</code> | The PortfolioId component. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnComponents.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

The PortfolioId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ServiceCatalogPortfolioArnProps <a name="ServiceCatalogPortfolioArnProps" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnProps"></a>

Properties for building a Portfolio ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnProps.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

const serviceCatalogPortfolioArnProps: servicecatalog.ServiceCatalogPortfolioArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnProps.property.portfolioId">portfolioId</a></code> | <code>string</code> | The PortfolioId component of the ARN. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnProps.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

The PortfolioId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ServiceCatalogProductArnComponents <a name="ServiceCatalogProductArnComponents" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnComponents"></a>

Parsed components of a Product ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnComponents.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

const serviceCatalogProductArnComponents: servicecatalog.ServiceCatalogProductArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnComponents.property.productId">productId</a></code> | <code>string</code> | The ProductId component. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnComponents.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ServiceCatalogProductArnProps <a name="ServiceCatalogProductArnProps" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnProps"></a>

Properties for building a Product ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnProps.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

const serviceCatalogProductArnProps: servicecatalog.ServiceCatalogProductArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnProps.property.productId">productId</a></code> | <code>string</code> | The ProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnProps.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCatalogActions <a name="ServiceCatalogActions" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions"></a>

IAM action constants for the servicecatalog service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

new servicecatalog.ServiceCatalogActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AcceptPortfolioShare">AcceptPortfolioShare</a></code> | <code>string</code> | [Write] servicecatalog:AcceptPortfolioShare. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] servicecatalog:GetApplication. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetAssociatedResource">actionGetAssociatedResource</a></code> | <code>string</code> | [Read] servicecatalog:GetAssociatedResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetAttributeGroup">actionGetAttributeGroup</a></code> | <code>string</code> | [Read] servicecatalog:GetAttributeGroup. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetAWSOrganizationsAccessStatus">actionGetAWSOrganizationsAccessStatus</a></code> | <code>string</code> | [Read] servicecatalog:GetAWSOrganizationsAccessStatus. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetConfiguration">actionGetConfiguration</a></code> | <code>string</code> | [Read] servicecatalog:GetConfiguration. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetProvisionedProductOutputs">actionGetProvisionedProductOutputs</a></code> | <code>string</code> | [Read] servicecatalog:GetProvisionedProductOutputs. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] servicecatalog:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateAttributeGroup">AssociateAttributeGroup</a></code> | <code>string</code> | [Write] servicecatalog:AssociateAttributeGroup. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateBudgetWithResource">AssociateBudgetWithResource</a></code> | <code>string</code> | [Write] servicecatalog:AssociateBudgetWithResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociatePrincipalWithPortfolio">AssociatePrincipalWithPortfolio</a></code> | <code>string</code> | [Write] servicecatalog:AssociatePrincipalWithPortfolio. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateProductWithPortfolio">AssociateProductWithPortfolio</a></code> | <code>string</code> | [Write] servicecatalog:AssociateProductWithPortfolio. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateResource">AssociateResource</a></code> | <code>string</code> | [Write] servicecatalog:AssociateResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateServiceActionWithProvisioningArtifact">AssociateServiceActionWithProvisioningArtifact</a></code> | <code>string</code> | [Write] servicecatalog:AssociateServiceActionWithProvisioningArtifact. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateTagOptionWithResource">AssociateTagOptionWithResource</a></code> | <code>string</code> | [Write] servicecatalog:AssociateTagOptionWithResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.BatchAssociateServiceActionWithProvisioningArtifact">BatchAssociateServiceActionWithProvisioningArtifact</a></code> | <code>string</code> | [Write] servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.BatchDisassociateServiceActionFromProvisioningArtifact">BatchDisassociateServiceActionFromProvisioningArtifact</a></code> | <code>string</code> | [Write] servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CopyProduct">CopyProduct</a></code> | <code>string</code> | [Write] servicecatalog:CopyProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] servicecatalog:CreateApplication. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateAttributeGroup">CreateAttributeGroup</a></code> | <code>string</code> | [Write] servicecatalog:CreateAttributeGroup. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateConstraint">CreateConstraint</a></code> | <code>string</code> | [Write] servicecatalog:CreateConstraint. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreatePortfolio">CreatePortfolio</a></code> | <code>string</code> | [Write] servicecatalog:CreatePortfolio. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreatePortfolioShare">CreatePortfolioShare</a></code> | <code>string</code> | [PermissionManagement] servicecatalog:CreatePortfolioShare. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateProduct">CreateProduct</a></code> | <code>string</code> | [Write] servicecatalog:CreateProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateProvisionedProductPlan">CreateProvisionedProductPlan</a></code> | <code>string</code> | [Write] servicecatalog:CreateProvisionedProductPlan. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateProvisioningArtifact">CreateProvisioningArtifact</a></code> | <code>string</code> | [Write] servicecatalog:CreateProvisioningArtifact. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateServiceAction">CreateServiceAction</a></code> | <code>string</code> | [Write] servicecatalog:CreateServiceAction. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateTagOption">CreateTagOption</a></code> | <code>string</code> | [Write] servicecatalog:CreateTagOption. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] servicecatalog:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteAttributeGroup">DeleteAttributeGroup</a></code> | <code>string</code> | [Write] servicecatalog:DeleteAttributeGroup. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteConstraint">DeleteConstraint</a></code> | <code>string</code> | [Write] servicecatalog:DeleteConstraint. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeletePortfolio">DeletePortfolio</a></code> | <code>string</code> | [Write] servicecatalog:DeletePortfolio. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeletePortfolioShare">DeletePortfolioShare</a></code> | <code>string</code> | [PermissionManagement] servicecatalog:DeletePortfolioShare. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteProduct">DeleteProduct</a></code> | <code>string</code> | [Write] servicecatalog:DeleteProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteProvisionedProductPlan">DeleteProvisionedProductPlan</a></code> | <code>string</code> | [Write] servicecatalog:DeleteProvisionedProductPlan. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteProvisioningArtifact">DeleteProvisioningArtifact</a></code> | <code>string</code> | [Write] servicecatalog:DeleteProvisioningArtifact. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] servicecatalog:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteServiceAction">DeleteServiceAction</a></code> | <code>string</code> | [Write] servicecatalog:DeleteServiceAction. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteTagOption">DeleteTagOption</a></code> | <code>string</code> | [Write] servicecatalog:DeleteTagOption. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeConstraint">DescribeConstraint</a></code> | <code>string</code> | [Read] servicecatalog:DescribeConstraint. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeCopyProductStatus">DescribeCopyProductStatus</a></code> | <code>string</code> | [Read] servicecatalog:DescribeCopyProductStatus. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribePortfolio">DescribePortfolio</a></code> | <code>string</code> | [Read] servicecatalog:DescribePortfolio. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribePortfolioShares">DescribePortfolioShares</a></code> | <code>string</code> | [List] servicecatalog:DescribePortfolioShares. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribePortfolioShareStatus">DescribePortfolioShareStatus</a></code> | <code>string</code> | [Read] servicecatalog:DescribePortfolioShareStatus. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProduct">DescribeProduct</a></code> | <code>string</code> | [Read] servicecatalog:DescribeProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProductAsAdmin">DescribeProductAsAdmin</a></code> | <code>string</code> | [Read] servicecatalog:DescribeProductAsAdmin. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProductView">DescribeProductView</a></code> | <code>string</code> | [Read] servicecatalog:DescribeProductView. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProvisionedProduct">DescribeProvisionedProduct</a></code> | <code>string</code> | [Read] servicecatalog:DescribeProvisionedProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProvisionedProductPlan">DescribeProvisionedProductPlan</a></code> | <code>string</code> | [Read] servicecatalog:DescribeProvisionedProductPlan. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProvisioningArtifact">DescribeProvisioningArtifact</a></code> | <code>string</code> | [Read] servicecatalog:DescribeProvisioningArtifact. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProvisioningParameters">DescribeProvisioningParameters</a></code> | <code>string</code> | [Read] servicecatalog:DescribeProvisioningParameters. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeRecord">DescribeRecord</a></code> | <code>string</code> | [Read] servicecatalog:DescribeRecord. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeServiceAction">DescribeServiceAction</a></code> | <code>string</code> | [Read] servicecatalog:DescribeServiceAction. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeServiceActionExecutionParameters">DescribeServiceActionExecutionParameters</a></code> | <code>string</code> | [Read] servicecatalog:DescribeServiceActionExecutionParameters. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeTagOption">DescribeTagOption</a></code> | <code>string</code> | [Read] servicecatalog:DescribeTagOption. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisableAWSOrganizationsAccess">DisableAWSOrganizationsAccess</a></code> | <code>string</code> | [Write] servicecatalog:DisableAWSOrganizationsAccess. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateAttributeGroup">DisassociateAttributeGroup</a></code> | <code>string</code> | [Write] servicecatalog:DisassociateAttributeGroup. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateBudgetFromResource">DisassociateBudgetFromResource</a></code> | <code>string</code> | [Write] servicecatalog:DisassociateBudgetFromResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociatePrincipalFromPortfolio">DisassociatePrincipalFromPortfolio</a></code> | <code>string</code> | [Write] servicecatalog:DisassociatePrincipalFromPortfolio. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateProductFromPortfolio">DisassociateProductFromPortfolio</a></code> | <code>string</code> | [Write] servicecatalog:DisassociateProductFromPortfolio. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateResource">DisassociateResource</a></code> | <code>string</code> | [Write] servicecatalog:DisassociateResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateServiceActionFromProvisioningArtifact">DisassociateServiceActionFromProvisioningArtifact</a></code> | <code>string</code> | [Write] servicecatalog:DisassociateServiceActionFromProvisioningArtifact. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateTagOptionFromResource">DisassociateTagOptionFromResource</a></code> | <code>string</code> | [Write] servicecatalog:DisassociateTagOptionFromResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.EnableAWSOrganizationsAccess">EnableAWSOrganizationsAccess</a></code> | <code>string</code> | [Write] servicecatalog:EnableAWSOrganizationsAccess. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ExecuteProvisionedProductPlan">ExecuteProvisionedProductPlan</a></code> | <code>string</code> | [Write] servicecatalog:ExecuteProvisionedProductPlan. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ExecuteProvisionedProductServiceAction">ExecuteProvisionedProductServiceAction</a></code> | <code>string</code> | [Write] servicecatalog:ExecuteProvisionedProductServiceAction. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ImportAsProvisionedProduct">ImportAsProvisionedProduct</a></code> | <code>string</code> | [Write] servicecatalog:ImportAsProvisionedProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListAcceptedPortfolioShares">ListAcceptedPortfolioShares</a></code> | <code>string</code> | [List] servicecatalog:ListAcceptedPortfolioShares. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] servicecatalog:ListApplications. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListAssociatedAttributeGroups">ListAssociatedAttributeGroups</a></code> | <code>string</code> | [List] servicecatalog:ListAssociatedAttributeGroups. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListAssociatedResources">ListAssociatedResources</a></code> | <code>string</code> | [List] servicecatalog:ListAssociatedResources. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListAttributeGroups">ListAttributeGroups</a></code> | <code>string</code> | [List] servicecatalog:ListAttributeGroups. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListAttributeGroupsForApplication">ListAttributeGroupsForApplication</a></code> | <code>string</code> | [List] servicecatalog:ListAttributeGroupsForApplication. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListBudgetsForResource">ListBudgetsForResource</a></code> | <code>string</code> | [List] servicecatalog:ListBudgetsForResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListConstraintsForPortfolio">ListConstraintsForPortfolio</a></code> | <code>string</code> | [List] servicecatalog:ListConstraintsForPortfolio. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListLaunchPaths">ListLaunchPaths</a></code> | <code>string</code> | [List] servicecatalog:ListLaunchPaths. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListOrganizationPortfolioAccess">ListOrganizationPortfolioAccess</a></code> | <code>string</code> | [List] servicecatalog:ListOrganizationPortfolioAccess. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListPortfolioAccess">ListPortfolioAccess</a></code> | <code>string</code> | [List] servicecatalog:ListPortfolioAccess. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListPortfolios">ListPortfolios</a></code> | <code>string</code> | [List] servicecatalog:ListPortfolios. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListPortfoliosForProduct">ListPortfoliosForProduct</a></code> | <code>string</code> | [List] servicecatalog:ListPortfoliosForProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListPrincipalsForPortfolio">ListPrincipalsForPortfolio</a></code> | <code>string</code> | [List] servicecatalog:ListPrincipalsForPortfolio. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListProvisionedProductPlans">ListProvisionedProductPlans</a></code> | <code>string</code> | [List] servicecatalog:ListProvisionedProductPlans. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListProvisioningArtifacts">ListProvisioningArtifacts</a></code> | <code>string</code> | [List] servicecatalog:ListProvisioningArtifacts. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListProvisioningArtifactsForServiceAction">ListProvisioningArtifactsForServiceAction</a></code> | <code>string</code> | [List] servicecatalog:ListProvisioningArtifactsForServiceAction. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListRecordHistory">ListRecordHistory</a></code> | <code>string</code> | [List] servicecatalog:ListRecordHistory. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListResourcesForTagOption">ListResourcesForTagOption</a></code> | <code>string</code> | [List] servicecatalog:ListResourcesForTagOption. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListServiceActions">ListServiceActions</a></code> | <code>string</code> | [List] servicecatalog:ListServiceActions. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListServiceActionsForProvisioningArtifact">ListServiceActionsForProvisioningArtifact</a></code> | <code>string</code> | [List] servicecatalog:ListServiceActionsForProvisioningArtifact. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListStackInstancesForProvisionedProduct">ListStackInstancesForProvisionedProduct</a></code> | <code>string</code> | [List] servicecatalog:ListStackInstancesForProvisionedProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListTagOptions">ListTagOptions</a></code> | <code>string</code> | [List] servicecatalog:ListTagOptions. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] servicecatalog:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.NotifyProvisionProductEngineWorkflowResult">NotifyProvisionProductEngineWorkflowResult</a></code> | <code>string</code> | [Write] servicecatalog:NotifyProvisionProductEngineWorkflowResult. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.NotifyTerminateProvisionedProductEngineWorkflowResult">NotifyTerminateProvisionedProductEngineWorkflowResult</a></code> | <code>string</code> | [Write] servicecatalog:NotifyTerminateProvisionedProductEngineWorkflowResult. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.NotifyUpdateProvisionedProductEngineWorkflowResult">NotifyUpdateProvisionedProductEngineWorkflowResult</a></code> | <code>string</code> | [Write] servicecatalog:NotifyUpdateProvisionedProductEngineWorkflowResult. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ProvisionProduct">ProvisionProduct</a></code> | <code>string</code> | [Write] servicecatalog:ProvisionProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.PutConfiguration">PutConfiguration</a></code> | <code>string</code> | [Write] servicecatalog:PutConfiguration. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] servicecatalog:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.RejectPortfolioShare">RejectPortfolioShare</a></code> | <code>string</code> | [Write] servicecatalog:RejectPortfolioShare. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ScanProvisionedProducts">ScanProvisionedProducts</a></code> | <code>string</code> | [List] servicecatalog:ScanProvisionedProducts. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.SearchProducts">SearchProducts</a></code> | <code>string</code> | [List] servicecatalog:SearchProducts. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.SearchProductsAsAdmin">SearchProductsAsAdmin</a></code> | <code>string</code> | [List] servicecatalog:SearchProductsAsAdmin. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.SearchProvisionedProducts">SearchProvisionedProducts</a></code> | <code>string</code> | [List] servicecatalog:SearchProvisionedProducts. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.SyncResource">SyncResource</a></code> | <code>string</code> | [Write] servicecatalog:SyncResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] servicecatalog:TagResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.TerminateProvisionedProduct">TerminateProvisionedProduct</a></code> | <code>string</code> | [Write] servicecatalog:TerminateProvisionedProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] servicecatalog:UntagResource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] servicecatalog:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateAttributeGroup">UpdateAttributeGroup</a></code> | <code>string</code> | [Write] servicecatalog:UpdateAttributeGroup. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateConstraint">UpdateConstraint</a></code> | <code>string</code> | [Write] servicecatalog:UpdateConstraint. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdatePortfolio">UpdatePortfolio</a></code> | <code>string</code> | [Write] servicecatalog:UpdatePortfolio. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdatePortfolioShare">UpdatePortfolioShare</a></code> | <code>string</code> | [PermissionManagement] servicecatalog:UpdatePortfolioShare. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateProduct">UpdateProduct</a></code> | <code>string</code> | [Write] servicecatalog:UpdateProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateProvisionedProduct">UpdateProvisionedProduct</a></code> | <code>string</code> | [Write] servicecatalog:UpdateProvisionedProduct. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateProvisionedProductProperties">UpdateProvisionedProductProperties</a></code> | <code>string</code> | [Write] servicecatalog:UpdateProvisionedProductProperties. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateProvisioningArtifact">UpdateProvisioningArtifact</a></code> | <code>string</code> | [Write] servicecatalog:UpdateProvisioningArtifact. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateServiceAction">UpdateServiceAction</a></code> | <code>string</code> | [Write] servicecatalog:UpdateServiceAction. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateTagOption">UpdateTagOption</a></code> | <code>string</code> | [Write] servicecatalog:UpdateTagOption. |

---

##### `AcceptPortfolioShare`<sup>Required</sup> <a name="AcceptPortfolioShare" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AcceptPortfolioShare"></a>

```typescript
public readonly AcceptPortfolioShare: string;
```

- *Type:* string

[Write] servicecatalog:AcceptPortfolioShare.

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] servicecatalog:GetApplication.

---

##### `actionGetAssociatedResource`<sup>Required</sup> <a name="actionGetAssociatedResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetAssociatedResource"></a>

```typescript
public readonly actionGetAssociatedResource: string;
```

- *Type:* string

[Read] servicecatalog:GetAssociatedResource.

---

##### `actionGetAttributeGroup`<sup>Required</sup> <a name="actionGetAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetAttributeGroup"></a>

```typescript
public readonly actionGetAttributeGroup: string;
```

- *Type:* string

[Read] servicecatalog:GetAttributeGroup.

---

##### `actionGetAWSOrganizationsAccessStatus`<sup>Required</sup> <a name="actionGetAWSOrganizationsAccessStatus" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetAWSOrganizationsAccessStatus"></a>

```typescript
public readonly actionGetAWSOrganizationsAccessStatus: string;
```

- *Type:* string

[Read] servicecatalog:GetAWSOrganizationsAccessStatus.

---

##### `actionGetConfiguration`<sup>Required</sup> <a name="actionGetConfiguration" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetConfiguration"></a>

```typescript
public readonly actionGetConfiguration: string;
```

- *Type:* string

[Read] servicecatalog:GetConfiguration.

---

##### `actionGetProvisionedProductOutputs`<sup>Required</sup> <a name="actionGetProvisionedProductOutputs" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetProvisionedProductOutputs"></a>

```typescript
public readonly actionGetProvisionedProductOutputs: string;
```

- *Type:* string

[Read] servicecatalog:GetProvisionedProductOutputs.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] servicecatalog:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAttributeGroup`<sup>Required</sup> <a name="AssociateAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateAttributeGroup"></a>

```typescript
public readonly AssociateAttributeGroup: string;
```

- *Type:* string

[Write] servicecatalog:AssociateAttributeGroup.

---

##### `AssociateBudgetWithResource`<sup>Required</sup> <a name="AssociateBudgetWithResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateBudgetWithResource"></a>

```typescript
public readonly AssociateBudgetWithResource: string;
```

- *Type:* string

[Write] servicecatalog:AssociateBudgetWithResource.

---

##### `AssociatePrincipalWithPortfolio`<sup>Required</sup> <a name="AssociatePrincipalWithPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociatePrincipalWithPortfolio"></a>

```typescript
public readonly AssociatePrincipalWithPortfolio: string;
```

- *Type:* string

[Write] servicecatalog:AssociatePrincipalWithPortfolio.

---

##### `AssociateProductWithPortfolio`<sup>Required</sup> <a name="AssociateProductWithPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateProductWithPortfolio"></a>

```typescript
public readonly AssociateProductWithPortfolio: string;
```

- *Type:* string

[Write] servicecatalog:AssociateProductWithPortfolio.

---

##### `AssociateResource`<sup>Required</sup> <a name="AssociateResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateResource"></a>

```typescript
public readonly AssociateResource: string;
```

- *Type:* string

[Write] servicecatalog:AssociateResource.

---

##### `AssociateServiceActionWithProvisioningArtifact`<sup>Required</sup> <a name="AssociateServiceActionWithProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateServiceActionWithProvisioningArtifact"></a>

```typescript
public readonly AssociateServiceActionWithProvisioningArtifact: string;
```

- *Type:* string

[Write] servicecatalog:AssociateServiceActionWithProvisioningArtifact.

---

##### `AssociateTagOptionWithResource`<sup>Required</sup> <a name="AssociateTagOptionWithResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.AssociateTagOptionWithResource"></a>

```typescript
public readonly AssociateTagOptionWithResource: string;
```

- *Type:* string

[Write] servicecatalog:AssociateTagOptionWithResource.

---

##### `BatchAssociateServiceActionWithProvisioningArtifact`<sup>Required</sup> <a name="BatchAssociateServiceActionWithProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.BatchAssociateServiceActionWithProvisioningArtifact"></a>

```typescript
public readonly BatchAssociateServiceActionWithProvisioningArtifact: string;
```

- *Type:* string

[Write] servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact.

---

##### `BatchDisassociateServiceActionFromProvisioningArtifact`<sup>Required</sup> <a name="BatchDisassociateServiceActionFromProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.BatchDisassociateServiceActionFromProvisioningArtifact"></a>

```typescript
public readonly BatchDisassociateServiceActionFromProvisioningArtifact: string;
```

- *Type:* string

[Write] servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact.

---

##### `CopyProduct`<sup>Required</sup> <a name="CopyProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CopyProduct"></a>

```typescript
public readonly CopyProduct: string;
```

- *Type:* string

[Write] servicecatalog:CopyProduct.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] servicecatalog:CreateApplication.

---

##### `CreateAttributeGroup`<sup>Required</sup> <a name="CreateAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateAttributeGroup"></a>

```typescript
public readonly CreateAttributeGroup: string;
```

- *Type:* string

[Write] servicecatalog:CreateAttributeGroup.

---

##### `CreateConstraint`<sup>Required</sup> <a name="CreateConstraint" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateConstraint"></a>

```typescript
public readonly CreateConstraint: string;
```

- *Type:* string

[Write] servicecatalog:CreateConstraint.

---

##### `CreatePortfolio`<sup>Required</sup> <a name="CreatePortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreatePortfolio"></a>

```typescript
public readonly CreatePortfolio: string;
```

- *Type:* string

[Write] servicecatalog:CreatePortfolio.

---

##### `CreatePortfolioShare`<sup>Required</sup> <a name="CreatePortfolioShare" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreatePortfolioShare"></a>

```typescript
public readonly CreatePortfolioShare: string;
```

- *Type:* string

[PermissionManagement] servicecatalog:CreatePortfolioShare.

---

##### `CreateProduct`<sup>Required</sup> <a name="CreateProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateProduct"></a>

```typescript
public readonly CreateProduct: string;
```

- *Type:* string

[Write] servicecatalog:CreateProduct.

---

##### `CreateProvisionedProductPlan`<sup>Required</sup> <a name="CreateProvisionedProductPlan" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateProvisionedProductPlan"></a>

```typescript
public readonly CreateProvisionedProductPlan: string;
```

- *Type:* string

[Write] servicecatalog:CreateProvisionedProductPlan.

---

##### `CreateProvisioningArtifact`<sup>Required</sup> <a name="CreateProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateProvisioningArtifact"></a>

```typescript
public readonly CreateProvisioningArtifact: string;
```

- *Type:* string

[Write] servicecatalog:CreateProvisioningArtifact.

---

##### `CreateServiceAction`<sup>Required</sup> <a name="CreateServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateServiceAction"></a>

```typescript
public readonly CreateServiceAction: string;
```

- *Type:* string

[Write] servicecatalog:CreateServiceAction.

---

##### `CreateTagOption`<sup>Required</sup> <a name="CreateTagOption" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.CreateTagOption"></a>

```typescript
public readonly CreateTagOption: string;
```

- *Type:* string

[Write] servicecatalog:CreateTagOption.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] servicecatalog:DeleteApplication.

---

##### `DeleteAttributeGroup`<sup>Required</sup> <a name="DeleteAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteAttributeGroup"></a>

```typescript
public readonly DeleteAttributeGroup: string;
```

- *Type:* string

[Write] servicecatalog:DeleteAttributeGroup.

---

##### `DeleteConstraint`<sup>Required</sup> <a name="DeleteConstraint" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteConstraint"></a>

```typescript
public readonly DeleteConstraint: string;
```

- *Type:* string

[Write] servicecatalog:DeleteConstraint.

---

##### `DeletePortfolio`<sup>Required</sup> <a name="DeletePortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeletePortfolio"></a>

```typescript
public readonly DeletePortfolio: string;
```

- *Type:* string

[Write] servicecatalog:DeletePortfolio.

---

##### `DeletePortfolioShare`<sup>Required</sup> <a name="DeletePortfolioShare" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeletePortfolioShare"></a>

```typescript
public readonly DeletePortfolioShare: string;
```

- *Type:* string

[PermissionManagement] servicecatalog:DeletePortfolioShare.

---

##### `DeleteProduct`<sup>Required</sup> <a name="DeleteProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteProduct"></a>

```typescript
public readonly DeleteProduct: string;
```

- *Type:* string

[Write] servicecatalog:DeleteProduct.

---

##### `DeleteProvisionedProductPlan`<sup>Required</sup> <a name="DeleteProvisionedProductPlan" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteProvisionedProductPlan"></a>

```typescript
public readonly DeleteProvisionedProductPlan: string;
```

- *Type:* string

[Write] servicecatalog:DeleteProvisionedProductPlan.

---

##### `DeleteProvisioningArtifact`<sup>Required</sup> <a name="DeleteProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteProvisioningArtifact"></a>

```typescript
public readonly DeleteProvisioningArtifact: string;
```

- *Type:* string

[Write] servicecatalog:DeleteProvisioningArtifact.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] servicecatalog:DeleteResourcePolicy.

---

##### `DeleteServiceAction`<sup>Required</sup> <a name="DeleteServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteServiceAction"></a>

```typescript
public readonly DeleteServiceAction: string;
```

- *Type:* string

[Write] servicecatalog:DeleteServiceAction.

---

##### `DeleteTagOption`<sup>Required</sup> <a name="DeleteTagOption" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DeleteTagOption"></a>

```typescript
public readonly DeleteTagOption: string;
```

- *Type:* string

[Write] servicecatalog:DeleteTagOption.

---

##### `DescribeConstraint`<sup>Required</sup> <a name="DescribeConstraint" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeConstraint"></a>

```typescript
public readonly DescribeConstraint: string;
```

- *Type:* string

[Read] servicecatalog:DescribeConstraint.

---

##### `DescribeCopyProductStatus`<sup>Required</sup> <a name="DescribeCopyProductStatus" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeCopyProductStatus"></a>

```typescript
public readonly DescribeCopyProductStatus: string;
```

- *Type:* string

[Read] servicecatalog:DescribeCopyProductStatus.

---

##### `DescribePortfolio`<sup>Required</sup> <a name="DescribePortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribePortfolio"></a>

```typescript
public readonly DescribePortfolio: string;
```

- *Type:* string

[Read] servicecatalog:DescribePortfolio.

---

##### `DescribePortfolioShares`<sup>Required</sup> <a name="DescribePortfolioShares" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribePortfolioShares"></a>

```typescript
public readonly DescribePortfolioShares: string;
```

- *Type:* string

[List] servicecatalog:DescribePortfolioShares.

---

##### `DescribePortfolioShareStatus`<sup>Required</sup> <a name="DescribePortfolioShareStatus" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribePortfolioShareStatus"></a>

```typescript
public readonly DescribePortfolioShareStatus: string;
```

- *Type:* string

[Read] servicecatalog:DescribePortfolioShareStatus.

---

##### `DescribeProduct`<sup>Required</sup> <a name="DescribeProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProduct"></a>

```typescript
public readonly DescribeProduct: string;
```

- *Type:* string

[Read] servicecatalog:DescribeProduct.

---

##### `DescribeProductAsAdmin`<sup>Required</sup> <a name="DescribeProductAsAdmin" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProductAsAdmin"></a>

```typescript
public readonly DescribeProductAsAdmin: string;
```

- *Type:* string

[Read] servicecatalog:DescribeProductAsAdmin.

---

##### `DescribeProductView`<sup>Required</sup> <a name="DescribeProductView" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProductView"></a>

```typescript
public readonly DescribeProductView: string;
```

- *Type:* string

[Read] servicecatalog:DescribeProductView.

---

##### `DescribeProvisionedProduct`<sup>Required</sup> <a name="DescribeProvisionedProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProvisionedProduct"></a>

```typescript
public readonly DescribeProvisionedProduct: string;
```

- *Type:* string

[Read] servicecatalog:DescribeProvisionedProduct.

---

##### `DescribeProvisionedProductPlan`<sup>Required</sup> <a name="DescribeProvisionedProductPlan" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProvisionedProductPlan"></a>

```typescript
public readonly DescribeProvisionedProductPlan: string;
```

- *Type:* string

[Read] servicecatalog:DescribeProvisionedProductPlan.

---

##### `DescribeProvisioningArtifact`<sup>Required</sup> <a name="DescribeProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProvisioningArtifact"></a>

```typescript
public readonly DescribeProvisioningArtifact: string;
```

- *Type:* string

[Read] servicecatalog:DescribeProvisioningArtifact.

---

##### `DescribeProvisioningParameters`<sup>Required</sup> <a name="DescribeProvisioningParameters" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeProvisioningParameters"></a>

```typescript
public readonly DescribeProvisioningParameters: string;
```

- *Type:* string

[Read] servicecatalog:DescribeProvisioningParameters.

---

##### `DescribeRecord`<sup>Required</sup> <a name="DescribeRecord" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeRecord"></a>

```typescript
public readonly DescribeRecord: string;
```

- *Type:* string

[Read] servicecatalog:DescribeRecord.

---

##### `DescribeServiceAction`<sup>Required</sup> <a name="DescribeServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeServiceAction"></a>

```typescript
public readonly DescribeServiceAction: string;
```

- *Type:* string

[Read] servicecatalog:DescribeServiceAction.

---

##### `DescribeServiceActionExecutionParameters`<sup>Required</sup> <a name="DescribeServiceActionExecutionParameters" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeServiceActionExecutionParameters"></a>

```typescript
public readonly DescribeServiceActionExecutionParameters: string;
```

- *Type:* string

[Read] servicecatalog:DescribeServiceActionExecutionParameters.

---

##### `DescribeTagOption`<sup>Required</sup> <a name="DescribeTagOption" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DescribeTagOption"></a>

```typescript
public readonly DescribeTagOption: string;
```

- *Type:* string

[Read] servicecatalog:DescribeTagOption.

---

##### `DisableAWSOrganizationsAccess`<sup>Required</sup> <a name="DisableAWSOrganizationsAccess" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisableAWSOrganizationsAccess"></a>

```typescript
public readonly DisableAWSOrganizationsAccess: string;
```

- *Type:* string

[Write] servicecatalog:DisableAWSOrganizationsAccess.

---

##### `DisassociateAttributeGroup`<sup>Required</sup> <a name="DisassociateAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateAttributeGroup"></a>

```typescript
public readonly DisassociateAttributeGroup: string;
```

- *Type:* string

[Write] servicecatalog:DisassociateAttributeGroup.

---

##### `DisassociateBudgetFromResource`<sup>Required</sup> <a name="DisassociateBudgetFromResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateBudgetFromResource"></a>

```typescript
public readonly DisassociateBudgetFromResource: string;
```

- *Type:* string

[Write] servicecatalog:DisassociateBudgetFromResource.

---

##### `DisassociatePrincipalFromPortfolio`<sup>Required</sup> <a name="DisassociatePrincipalFromPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociatePrincipalFromPortfolio"></a>

```typescript
public readonly DisassociatePrincipalFromPortfolio: string;
```

- *Type:* string

[Write] servicecatalog:DisassociatePrincipalFromPortfolio.

---

##### `DisassociateProductFromPortfolio`<sup>Required</sup> <a name="DisassociateProductFromPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateProductFromPortfolio"></a>

```typescript
public readonly DisassociateProductFromPortfolio: string;
```

- *Type:* string

[Write] servicecatalog:DisassociateProductFromPortfolio.

---

##### `DisassociateResource`<sup>Required</sup> <a name="DisassociateResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateResource"></a>

```typescript
public readonly DisassociateResource: string;
```

- *Type:* string

[Write] servicecatalog:DisassociateResource.

---

##### `DisassociateServiceActionFromProvisioningArtifact`<sup>Required</sup> <a name="DisassociateServiceActionFromProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateServiceActionFromProvisioningArtifact"></a>

```typescript
public readonly DisassociateServiceActionFromProvisioningArtifact: string;
```

- *Type:* string

[Write] servicecatalog:DisassociateServiceActionFromProvisioningArtifact.

---

##### `DisassociateTagOptionFromResource`<sup>Required</sup> <a name="DisassociateTagOptionFromResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.DisassociateTagOptionFromResource"></a>

```typescript
public readonly DisassociateTagOptionFromResource: string;
```

- *Type:* string

[Write] servicecatalog:DisassociateTagOptionFromResource.

---

##### `EnableAWSOrganizationsAccess`<sup>Required</sup> <a name="EnableAWSOrganizationsAccess" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.EnableAWSOrganizationsAccess"></a>

```typescript
public readonly EnableAWSOrganizationsAccess: string;
```

- *Type:* string

[Write] servicecatalog:EnableAWSOrganizationsAccess.

---

##### `ExecuteProvisionedProductPlan`<sup>Required</sup> <a name="ExecuteProvisionedProductPlan" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ExecuteProvisionedProductPlan"></a>

```typescript
public readonly ExecuteProvisionedProductPlan: string;
```

- *Type:* string

[Write] servicecatalog:ExecuteProvisionedProductPlan.

---

##### `ExecuteProvisionedProductServiceAction`<sup>Required</sup> <a name="ExecuteProvisionedProductServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ExecuteProvisionedProductServiceAction"></a>

```typescript
public readonly ExecuteProvisionedProductServiceAction: string;
```

- *Type:* string

[Write] servicecatalog:ExecuteProvisionedProductServiceAction.

---

##### `ImportAsProvisionedProduct`<sup>Required</sup> <a name="ImportAsProvisionedProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ImportAsProvisionedProduct"></a>

```typescript
public readonly ImportAsProvisionedProduct: string;
```

- *Type:* string

[Write] servicecatalog:ImportAsProvisionedProduct.

---

##### `ListAcceptedPortfolioShares`<sup>Required</sup> <a name="ListAcceptedPortfolioShares" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListAcceptedPortfolioShares"></a>

```typescript
public readonly ListAcceptedPortfolioShares: string;
```

- *Type:* string

[List] servicecatalog:ListAcceptedPortfolioShares.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] servicecatalog:ListApplications.

---

##### `ListAssociatedAttributeGroups`<sup>Required</sup> <a name="ListAssociatedAttributeGroups" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListAssociatedAttributeGroups"></a>

```typescript
public readonly ListAssociatedAttributeGroups: string;
```

- *Type:* string

[List] servicecatalog:ListAssociatedAttributeGroups.

---

##### `ListAssociatedResources`<sup>Required</sup> <a name="ListAssociatedResources" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListAssociatedResources"></a>

```typescript
public readonly ListAssociatedResources: string;
```

- *Type:* string

[List] servicecatalog:ListAssociatedResources.

---

##### `ListAttributeGroups`<sup>Required</sup> <a name="ListAttributeGroups" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListAttributeGroups"></a>

```typescript
public readonly ListAttributeGroups: string;
```

- *Type:* string

[List] servicecatalog:ListAttributeGroups.

---

##### `ListAttributeGroupsForApplication`<sup>Required</sup> <a name="ListAttributeGroupsForApplication" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListAttributeGroupsForApplication"></a>

```typescript
public readonly ListAttributeGroupsForApplication: string;
```

- *Type:* string

[List] servicecatalog:ListAttributeGroupsForApplication.

---

##### `ListBudgetsForResource`<sup>Required</sup> <a name="ListBudgetsForResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListBudgetsForResource"></a>

```typescript
public readonly ListBudgetsForResource: string;
```

- *Type:* string

[List] servicecatalog:ListBudgetsForResource.

---

##### `ListConstraintsForPortfolio`<sup>Required</sup> <a name="ListConstraintsForPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListConstraintsForPortfolio"></a>

```typescript
public readonly ListConstraintsForPortfolio: string;
```

- *Type:* string

[List] servicecatalog:ListConstraintsForPortfolio.

---

##### `ListLaunchPaths`<sup>Required</sup> <a name="ListLaunchPaths" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListLaunchPaths"></a>

```typescript
public readonly ListLaunchPaths: string;
```

- *Type:* string

[List] servicecatalog:ListLaunchPaths.

---

##### `ListOrganizationPortfolioAccess`<sup>Required</sup> <a name="ListOrganizationPortfolioAccess" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListOrganizationPortfolioAccess"></a>

```typescript
public readonly ListOrganizationPortfolioAccess: string;
```

- *Type:* string

[List] servicecatalog:ListOrganizationPortfolioAccess.

---

##### `ListPortfolioAccess`<sup>Required</sup> <a name="ListPortfolioAccess" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListPortfolioAccess"></a>

```typescript
public readonly ListPortfolioAccess: string;
```

- *Type:* string

[List] servicecatalog:ListPortfolioAccess.

---

##### `ListPortfolios`<sup>Required</sup> <a name="ListPortfolios" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListPortfolios"></a>

```typescript
public readonly ListPortfolios: string;
```

- *Type:* string

[List] servicecatalog:ListPortfolios.

---

##### `ListPortfoliosForProduct`<sup>Required</sup> <a name="ListPortfoliosForProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListPortfoliosForProduct"></a>

```typescript
public readonly ListPortfoliosForProduct: string;
```

- *Type:* string

[List] servicecatalog:ListPortfoliosForProduct.

---

##### `ListPrincipalsForPortfolio`<sup>Required</sup> <a name="ListPrincipalsForPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListPrincipalsForPortfolio"></a>

```typescript
public readonly ListPrincipalsForPortfolio: string;
```

- *Type:* string

[List] servicecatalog:ListPrincipalsForPortfolio.

---

##### `ListProvisionedProductPlans`<sup>Required</sup> <a name="ListProvisionedProductPlans" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListProvisionedProductPlans"></a>

```typescript
public readonly ListProvisionedProductPlans: string;
```

- *Type:* string

[List] servicecatalog:ListProvisionedProductPlans.

---

##### `ListProvisioningArtifacts`<sup>Required</sup> <a name="ListProvisioningArtifacts" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListProvisioningArtifacts"></a>

```typescript
public readonly ListProvisioningArtifacts: string;
```

- *Type:* string

[List] servicecatalog:ListProvisioningArtifacts.

---

##### `ListProvisioningArtifactsForServiceAction`<sup>Required</sup> <a name="ListProvisioningArtifactsForServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListProvisioningArtifactsForServiceAction"></a>

```typescript
public readonly ListProvisioningArtifactsForServiceAction: string;
```

- *Type:* string

[List] servicecatalog:ListProvisioningArtifactsForServiceAction.

---

##### `ListRecordHistory`<sup>Required</sup> <a name="ListRecordHistory" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListRecordHistory"></a>

```typescript
public readonly ListRecordHistory: string;
```

- *Type:* string

[List] servicecatalog:ListRecordHistory.

---

##### `ListResourcesForTagOption`<sup>Required</sup> <a name="ListResourcesForTagOption" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListResourcesForTagOption"></a>

```typescript
public readonly ListResourcesForTagOption: string;
```

- *Type:* string

[List] servicecatalog:ListResourcesForTagOption.

---

##### `ListServiceActions`<sup>Required</sup> <a name="ListServiceActions" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListServiceActions"></a>

```typescript
public readonly ListServiceActions: string;
```

- *Type:* string

[List] servicecatalog:ListServiceActions.

---

##### `ListServiceActionsForProvisioningArtifact`<sup>Required</sup> <a name="ListServiceActionsForProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListServiceActionsForProvisioningArtifact"></a>

```typescript
public readonly ListServiceActionsForProvisioningArtifact: string;
```

- *Type:* string

[List] servicecatalog:ListServiceActionsForProvisioningArtifact.

---

##### `ListStackInstancesForProvisionedProduct`<sup>Required</sup> <a name="ListStackInstancesForProvisionedProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListStackInstancesForProvisionedProduct"></a>

```typescript
public readonly ListStackInstancesForProvisionedProduct: string;
```

- *Type:* string

[List] servicecatalog:ListStackInstancesForProvisionedProduct.

---

##### `ListTagOptions`<sup>Required</sup> <a name="ListTagOptions" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListTagOptions"></a>

```typescript
public readonly ListTagOptions: string;
```

- *Type:* string

[List] servicecatalog:ListTagOptions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] servicecatalog:ListTagsForResource.

---

##### `NotifyProvisionProductEngineWorkflowResult`<sup>Required</sup> <a name="NotifyProvisionProductEngineWorkflowResult" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.NotifyProvisionProductEngineWorkflowResult"></a>

```typescript
public readonly NotifyProvisionProductEngineWorkflowResult: string;
```

- *Type:* string

[Write] servicecatalog:NotifyProvisionProductEngineWorkflowResult.

---

##### `NotifyTerminateProvisionedProductEngineWorkflowResult`<sup>Required</sup> <a name="NotifyTerminateProvisionedProductEngineWorkflowResult" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.NotifyTerminateProvisionedProductEngineWorkflowResult"></a>

```typescript
public readonly NotifyTerminateProvisionedProductEngineWorkflowResult: string;
```

- *Type:* string

[Write] servicecatalog:NotifyTerminateProvisionedProductEngineWorkflowResult.

---

##### `NotifyUpdateProvisionedProductEngineWorkflowResult`<sup>Required</sup> <a name="NotifyUpdateProvisionedProductEngineWorkflowResult" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.NotifyUpdateProvisionedProductEngineWorkflowResult"></a>

```typescript
public readonly NotifyUpdateProvisionedProductEngineWorkflowResult: string;
```

- *Type:* string

[Write] servicecatalog:NotifyUpdateProvisionedProductEngineWorkflowResult.

---

##### `ProvisionProduct`<sup>Required</sup> <a name="ProvisionProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ProvisionProduct"></a>

```typescript
public readonly ProvisionProduct: string;
```

- *Type:* string

[Write] servicecatalog:ProvisionProduct.

---

##### `PutConfiguration`<sup>Required</sup> <a name="PutConfiguration" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.PutConfiguration"></a>

```typescript
public readonly PutConfiguration: string;
```

- *Type:* string

[Write] servicecatalog:PutConfiguration.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] servicecatalog:PutResourcePolicy.

---

##### `RejectPortfolioShare`<sup>Required</sup> <a name="RejectPortfolioShare" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.RejectPortfolioShare"></a>

```typescript
public readonly RejectPortfolioShare: string;
```

- *Type:* string

[Write] servicecatalog:RejectPortfolioShare.

---

##### `ScanProvisionedProducts`<sup>Required</sup> <a name="ScanProvisionedProducts" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.ScanProvisionedProducts"></a>

```typescript
public readonly ScanProvisionedProducts: string;
```

- *Type:* string

[List] servicecatalog:ScanProvisionedProducts.

---

##### `SearchProducts`<sup>Required</sup> <a name="SearchProducts" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.SearchProducts"></a>

```typescript
public readonly SearchProducts: string;
```

- *Type:* string

[List] servicecatalog:SearchProducts.

---

##### `SearchProductsAsAdmin`<sup>Required</sup> <a name="SearchProductsAsAdmin" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.SearchProductsAsAdmin"></a>

```typescript
public readonly SearchProductsAsAdmin: string;
```

- *Type:* string

[List] servicecatalog:SearchProductsAsAdmin.

---

##### `SearchProvisionedProducts`<sup>Required</sup> <a name="SearchProvisionedProducts" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.SearchProvisionedProducts"></a>

```typescript
public readonly SearchProvisionedProducts: string;
```

- *Type:* string

[List] servicecatalog:SearchProvisionedProducts.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SyncResource`<sup>Required</sup> <a name="SyncResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.SyncResource"></a>

```typescript
public readonly SyncResource: string;
```

- *Type:* string

[Write] servicecatalog:SyncResource.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] servicecatalog:TagResource.

---

##### `TerminateProvisionedProduct`<sup>Required</sup> <a name="TerminateProvisionedProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.TerminateProvisionedProduct"></a>

```typescript
public readonly TerminateProvisionedProduct: string;
```

- *Type:* string

[Write] servicecatalog:TerminateProvisionedProduct.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] servicecatalog:UntagResource.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] servicecatalog:UpdateApplication.

---

##### `UpdateAttributeGroup`<sup>Required</sup> <a name="UpdateAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateAttributeGroup"></a>

```typescript
public readonly UpdateAttributeGroup: string;
```

- *Type:* string

[Write] servicecatalog:UpdateAttributeGroup.

---

##### `UpdateConstraint`<sup>Required</sup> <a name="UpdateConstraint" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateConstraint"></a>

```typescript
public readonly UpdateConstraint: string;
```

- *Type:* string

[Write] servicecatalog:UpdateConstraint.

---

##### `UpdatePortfolio`<sup>Required</sup> <a name="UpdatePortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdatePortfolio"></a>

```typescript
public readonly UpdatePortfolio: string;
```

- *Type:* string

[Write] servicecatalog:UpdatePortfolio.

---

##### `UpdatePortfolioShare`<sup>Required</sup> <a name="UpdatePortfolioShare" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdatePortfolioShare"></a>

```typescript
public readonly UpdatePortfolioShare: string;
```

- *Type:* string

[PermissionManagement] servicecatalog:UpdatePortfolioShare.

---

##### `UpdateProduct`<sup>Required</sup> <a name="UpdateProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateProduct"></a>

```typescript
public readonly UpdateProduct: string;
```

- *Type:* string

[Write] servicecatalog:UpdateProduct.

---

##### `UpdateProvisionedProduct`<sup>Required</sup> <a name="UpdateProvisionedProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateProvisionedProduct"></a>

```typescript
public readonly UpdateProvisionedProduct: string;
```

- *Type:* string

[Write] servicecatalog:UpdateProvisionedProduct.

---

##### `UpdateProvisionedProductProperties`<sup>Required</sup> <a name="UpdateProvisionedProductProperties" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateProvisionedProductProperties"></a>

```typescript
public readonly UpdateProvisionedProductProperties: string;
```

- *Type:* string

[Write] servicecatalog:UpdateProvisionedProductProperties.

---

##### `UpdateProvisioningArtifact`<sup>Required</sup> <a name="UpdateProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateProvisioningArtifact"></a>

```typescript
public readonly UpdateProvisioningArtifact: string;
```

- *Type:* string

[Write] servicecatalog:UpdateProvisioningArtifact.

---

##### `UpdateServiceAction`<sup>Required</sup> <a name="UpdateServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateServiceAction"></a>

```typescript
public readonly UpdateServiceAction: string;
```

- *Type:* string

[Write] servicecatalog:UpdateServiceAction.

---

##### `UpdateTagOption`<sup>Required</sup> <a name="UpdateTagOption" id="@cdk_utils/iam.servicecatalog.ServiceCatalogActions.property.UpdateTagOption"></a>

```typescript
public readonly UpdateTagOption: string;
```

- *Type:* string

[Write] servicecatalog:UpdateTagOption.

---

### ServiceCatalogConditions <a name="ServiceCatalogConditions" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions"></a>

Condition key constants and builders for servicecatalog.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

new servicecatalog.ServiceCatalogConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.accountLevel">accountLevel</a></code> | Generates a condition block for `servicecatalog:accountLevel`. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.resource">resource</a></code> | Generates a condition block for `servicecatalog:Resource`. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.resourceType">resourceType</a></code> | Generates a condition block for `servicecatalog:ResourceType`. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.roleLevel">roleLevel</a></code> | Generates a condition block for `servicecatalog:roleLevel`. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.userLevel">userLevel</a></code> | Generates a condition block for `servicecatalog:userLevel`. |

---

##### `accountLevel` <a name="accountLevel" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.accountLevel"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogConditions.accountLevel(value: string)
```

Generates a condition block for `servicecatalog:accountLevel`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.accountLevel.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.requestTag"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resource` <a name="resource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.resource"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogConditions.resource(value: string)
```

Generates a condition block for `servicecatalog:Resource`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.resource.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.resourceTag"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `resourceType` <a name="resourceType" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.resourceType"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogConditions.resourceType(value: string)
```

Generates a condition block for `servicecatalog:ResourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.resourceType.parameter.value"></a>

- *Type:* string

---

##### `roleLevel` <a name="roleLevel" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.roleLevel"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogConditions.roleLevel(value: string)
```

Generates a condition block for `servicecatalog:roleLevel`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.roleLevel.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.tagKeys"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `userLevel` <a name="userLevel" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.userLevel"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogConditions.userLevel(value: string)
```

Generates a condition block for `servicecatalog:userLevel`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.userLevel.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ACCOUNT_LEVEL">ACCOUNT_LEVEL</a></code> | <code>string</code> | Condition key: servicecatalog:accountLevel (String). |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.actionGetAssociatedResourceConditionKeys">actionGetAssociatedResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAssociatedResource action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.AssociateResourceConditionKeys">AssociateResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateResource action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.CreateAttributeGroupConditionKeys">CreateAttributeGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAttributeGroup action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.CreatePortfolioConditionKeys">CreatePortfolioConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePortfolio action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.CreateProductConditionKeys">CreateProductConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProduct action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.CreateProvisionedProductPlanConditionKeys">CreateProvisionedProductPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProvisionedProductPlan action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DeleteProvisionedProductPlanConditionKeys">DeleteProvisionedProductPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteProvisionedProductPlan action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DescribeProvisionedProductConditionKeys">DescribeProvisionedProductConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeProvisionedProduct action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DescribeProvisionedProductPlanConditionKeys">DescribeProvisionedProductPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeProvisionedProductPlan action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DescribeRecordConditionKeys">DescribeRecordConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeRecord action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DescribeServiceActionExecutionParametersConditionKeys">DescribeServiceActionExecutionParametersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeServiceActionExecutionParameters action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DisassociateResourceConditionKeys">DisassociateResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateResource action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ExecuteProvisionedProductPlanConditionKeys">ExecuteProvisionedProductPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExecuteProvisionedProductPlan action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ExecuteProvisionedProductServiceActionConditionKeys">ExecuteProvisionedProductServiceActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExecuteProvisionedProductServiceAction action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ListProvisionedProductPlansConditionKeys">ListProvisionedProductPlansConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListProvisionedProductPlans action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ListRecordHistoryConditionKeys">ListRecordHistoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRecordHistory action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ListServiceActionsForProvisioningArtifactConditionKeys">ListServiceActionsForProvisioningArtifactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListServiceActionsForProvisioningArtifact action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ListStackInstancesForProvisionedProductConditionKeys">ListStackInstancesForProvisionedProductConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListStackInstancesForProvisionedProduct action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.RESOURCE">RESOURCE</a></code> | <code>string</code> | Condition key: servicecatalog:Resource (String). |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.RESOURCE_TYPE">RESOURCE_TYPE</a></code> | <code>string</code> | Condition key: servicecatalog:ResourceType (String). |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ROLE_LEVEL">ROLE_LEVEL</a></code> | <code>string</code> | Condition key: servicecatalog:roleLevel (String). |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ScanProvisionedProductsConditionKeys">ScanProvisionedProductsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ScanProvisionedProducts action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.SearchProvisionedProductsConditionKeys">SearchProvisionedProductsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchProvisionedProducts action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.TerminateProvisionedProductConditionKeys">TerminateProvisionedProductConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TerminateProvisionedProduct action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.UpdatePortfolioConditionKeys">UpdatePortfolioConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePortfolio action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.UpdateProductConditionKeys">UpdateProductConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProduct action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.UpdateProvisionedProductConditionKeys">UpdateProvisionedProductConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProvisionedProduct action. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.USER_LEVEL">USER_LEVEL</a></code> | <code>string</code> | Condition key: servicecatalog:userLevel (String). |

---

##### `ACCOUNT_LEVEL`<sup>Required</sup> <a name="ACCOUNT_LEVEL" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ACCOUNT_LEVEL"></a>

```typescript
public readonly ACCOUNT_LEVEL: string;
```

- *Type:* string

Condition key: servicecatalog:accountLevel (String).

---

##### `actionGetAssociatedResourceConditionKeys`<sup>Required</sup> <a name="actionGetAssociatedResourceConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.actionGetAssociatedResourceConditionKeys"></a>

```typescript
public readonly actionGetAssociatedResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAssociatedResource action.

---

##### `AssociateResourceConditionKeys`<sup>Required</sup> <a name="AssociateResourceConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.AssociateResourceConditionKeys"></a>

```typescript
public readonly AssociateResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateResource action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateAttributeGroupConditionKeys`<sup>Required</sup> <a name="CreateAttributeGroupConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.CreateAttributeGroupConditionKeys"></a>

```typescript
public readonly CreateAttributeGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAttributeGroup action.

---

##### `CreatePortfolioConditionKeys`<sup>Required</sup> <a name="CreatePortfolioConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.CreatePortfolioConditionKeys"></a>

```typescript
public readonly CreatePortfolioConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePortfolio action.

---

##### `CreateProductConditionKeys`<sup>Required</sup> <a name="CreateProductConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.CreateProductConditionKeys"></a>

```typescript
public readonly CreateProductConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProduct action.

---

##### `CreateProvisionedProductPlanConditionKeys`<sup>Required</sup> <a name="CreateProvisionedProductPlanConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.CreateProvisionedProductPlanConditionKeys"></a>

```typescript
public readonly CreateProvisionedProductPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProvisionedProductPlan action.

---

##### `DeleteProvisionedProductPlanConditionKeys`<sup>Required</sup> <a name="DeleteProvisionedProductPlanConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DeleteProvisionedProductPlanConditionKeys"></a>

```typescript
public readonly DeleteProvisionedProductPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteProvisionedProductPlan action.

---

##### `DescribeProvisionedProductConditionKeys`<sup>Required</sup> <a name="DescribeProvisionedProductConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DescribeProvisionedProductConditionKeys"></a>

```typescript
public readonly DescribeProvisionedProductConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeProvisionedProduct action.

---

##### `DescribeProvisionedProductPlanConditionKeys`<sup>Required</sup> <a name="DescribeProvisionedProductPlanConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DescribeProvisionedProductPlanConditionKeys"></a>

```typescript
public readonly DescribeProvisionedProductPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeProvisionedProductPlan action.

---

##### `DescribeRecordConditionKeys`<sup>Required</sup> <a name="DescribeRecordConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DescribeRecordConditionKeys"></a>

```typescript
public readonly DescribeRecordConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeRecord action.

---

##### `DescribeServiceActionExecutionParametersConditionKeys`<sup>Required</sup> <a name="DescribeServiceActionExecutionParametersConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DescribeServiceActionExecutionParametersConditionKeys"></a>

```typescript
public readonly DescribeServiceActionExecutionParametersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeServiceActionExecutionParameters action.

---

##### `DisassociateResourceConditionKeys`<sup>Required</sup> <a name="DisassociateResourceConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.DisassociateResourceConditionKeys"></a>

```typescript
public readonly DisassociateResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateResource action.

---

##### `ExecuteProvisionedProductPlanConditionKeys`<sup>Required</sup> <a name="ExecuteProvisionedProductPlanConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ExecuteProvisionedProductPlanConditionKeys"></a>

```typescript
public readonly ExecuteProvisionedProductPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExecuteProvisionedProductPlan action.

---

##### `ExecuteProvisionedProductServiceActionConditionKeys`<sup>Required</sup> <a name="ExecuteProvisionedProductServiceActionConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ExecuteProvisionedProductServiceActionConditionKeys"></a>

```typescript
public readonly ExecuteProvisionedProductServiceActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExecuteProvisionedProductServiceAction action.

---

##### `ListProvisionedProductPlansConditionKeys`<sup>Required</sup> <a name="ListProvisionedProductPlansConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ListProvisionedProductPlansConditionKeys"></a>

```typescript
public readonly ListProvisionedProductPlansConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListProvisionedProductPlans action.

---

##### `ListRecordHistoryConditionKeys`<sup>Required</sup> <a name="ListRecordHistoryConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ListRecordHistoryConditionKeys"></a>

```typescript
public readonly ListRecordHistoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRecordHistory action.

---

##### `ListServiceActionsForProvisioningArtifactConditionKeys`<sup>Required</sup> <a name="ListServiceActionsForProvisioningArtifactConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ListServiceActionsForProvisioningArtifactConditionKeys"></a>

```typescript
public readonly ListServiceActionsForProvisioningArtifactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListServiceActionsForProvisioningArtifact action.

---

##### `ListStackInstancesForProvisionedProductConditionKeys`<sup>Required</sup> <a name="ListStackInstancesForProvisionedProductConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ListStackInstancesForProvisionedProductConditionKeys"></a>

```typescript
public readonly ListStackInstancesForProvisionedProductConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListStackInstancesForProvisionedProduct action.

---

##### `RESOURCE`<sup>Required</sup> <a name="RESOURCE" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.RESOURCE"></a>

```typescript
public readonly RESOURCE: string;
```

- *Type:* string

Condition key: servicecatalog:Resource (String).

---

##### `RESOURCE_TYPE`<sup>Required</sup> <a name="RESOURCE_TYPE" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.RESOURCE_TYPE"></a>

```typescript
public readonly RESOURCE_TYPE: string;
```

- *Type:* string

Condition key: servicecatalog:ResourceType (String).

---

##### `ROLE_LEVEL`<sup>Required</sup> <a name="ROLE_LEVEL" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ROLE_LEVEL"></a>

```typescript
public readonly ROLE_LEVEL: string;
```

- *Type:* string

Condition key: servicecatalog:roleLevel (String).

---

##### `ScanProvisionedProductsConditionKeys`<sup>Required</sup> <a name="ScanProvisionedProductsConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.ScanProvisionedProductsConditionKeys"></a>

```typescript
public readonly ScanProvisionedProductsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ScanProvisionedProducts action.

---

##### `SearchProvisionedProductsConditionKeys`<sup>Required</sup> <a name="SearchProvisionedProductsConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.SearchProvisionedProductsConditionKeys"></a>

```typescript
public readonly SearchProvisionedProductsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchProvisionedProducts action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TerminateProvisionedProductConditionKeys`<sup>Required</sup> <a name="TerminateProvisionedProductConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.TerminateProvisionedProductConditionKeys"></a>

```typescript
public readonly TerminateProvisionedProductConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TerminateProvisionedProduct action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdatePortfolioConditionKeys`<sup>Required</sup> <a name="UpdatePortfolioConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.UpdatePortfolioConditionKeys"></a>

```typescript
public readonly UpdatePortfolioConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePortfolio action.

---

##### `UpdateProductConditionKeys`<sup>Required</sup> <a name="UpdateProductConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.UpdateProductConditionKeys"></a>

```typescript
public readonly UpdateProductConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProduct action.

---

##### `UpdateProvisionedProductConditionKeys`<sup>Required</sup> <a name="UpdateProvisionedProductConditionKeys" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.UpdateProvisionedProductConditionKeys"></a>

```typescript
public readonly UpdateProvisionedProductConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProvisionedProduct action.

---

##### `USER_LEVEL`<sup>Required</sup> <a name="USER_LEVEL" id="@cdk_utils/iam.servicecatalog.ServiceCatalogConditions.property.USER_LEVEL"></a>

```typescript
public readonly USER_LEVEL: string;
```

- *Type:* string

Condition key: servicecatalog:userLevel (String).

---

### ServiceCatalogOperations <a name="ServiceCatalogOperations" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations"></a>

API operation to required IAM actions mapping for servicecatalog.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

new servicecatalog.ServiceCatalogOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AcceptPortfolioShare">AcceptPortfolioShare</a></code> | <code>string[]</code> | IAM actions required for the AcceptPortfolioShare API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateAttributeGroup">AssociateAttributeGroup</a></code> | <code>string[]</code> | IAM actions required for the AssociateAttributeGroup API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateBudgetWithResource">AssociateBudgetWithResource</a></code> | <code>string[]</code> | IAM actions required for the AssociateBudgetWithResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociatePrincipalWithPortfolio">AssociatePrincipalWithPortfolio</a></code> | <code>string[]</code> | IAM actions required for the AssociatePrincipalWithPortfolio API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateProductWithPortfolio">AssociateProductWithPortfolio</a></code> | <code>string[]</code> | IAM actions required for the AssociateProductWithPortfolio API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateResource">AssociateResource</a></code> | <code>string[]</code> | IAM actions required for the AssociateResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateServiceActionWithProvisioningArtifact">AssociateServiceActionWithProvisioningArtifact</a></code> | <code>string[]</code> | IAM actions required for the AssociateServiceActionWithProvisioningArtifact API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateTagOptionWithResource">AssociateTagOptionWithResource</a></code> | <code>string[]</code> | IAM actions required for the AssociateTagOptionWithResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.BatchAssociateServiceActionWithProvisioningArtifact">BatchAssociateServiceActionWithProvisioningArtifact</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateServiceActionWithProvisioningArtifact API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.BatchDisassociateServiceActionFromProvisioningArtifact">BatchDisassociateServiceActionFromProvisioningArtifact</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateServiceActionFromProvisioningArtifact API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CopyProduct">CopyProduct</a></code> | <code>string[]</code> | IAM actions required for the CopyProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateAttributeGroup">CreateAttributeGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateAttributeGroup API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateConstraint">CreateConstraint</a></code> | <code>string[]</code> | IAM actions required for the CreateConstraint API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreatePortfolio">CreatePortfolio</a></code> | <code>string[]</code> | IAM actions required for the CreatePortfolio API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreatePortfolioShare">CreatePortfolioShare</a></code> | <code>string[]</code> | IAM actions required for the CreatePortfolioShare API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateProduct">CreateProduct</a></code> | <code>string[]</code> | IAM actions required for the CreateProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateProvisionedProductPlan">CreateProvisionedProductPlan</a></code> | <code>string[]</code> | IAM actions required for the CreateProvisionedProductPlan API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateProvisioningArtifact">CreateProvisioningArtifact</a></code> | <code>string[]</code> | IAM actions required for the CreateProvisioningArtifact API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateServiceAction">CreateServiceAction</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceAction API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateTagOption">CreateTagOption</a></code> | <code>string[]</code> | IAM actions required for the CreateTagOption API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteAttributeGroup">DeleteAttributeGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteAttributeGroup API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteConstraint">DeleteConstraint</a></code> | <code>string[]</code> | IAM actions required for the DeleteConstraint API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeletePortfolio">DeletePortfolio</a></code> | <code>string[]</code> | IAM actions required for the DeletePortfolio API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeletePortfolioShare">DeletePortfolioShare</a></code> | <code>string[]</code> | IAM actions required for the DeletePortfolioShare API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteProduct">DeleteProduct</a></code> | <code>string[]</code> | IAM actions required for the DeleteProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteProvisionedProductPlan">DeleteProvisionedProductPlan</a></code> | <code>string[]</code> | IAM actions required for the DeleteProvisionedProductPlan API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteProvisioningArtifact">DeleteProvisioningArtifact</a></code> | <code>string[]</code> | IAM actions required for the DeleteProvisioningArtifact API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteServiceAction">DeleteServiceAction</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceAction API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteTagOption">DeleteTagOption</a></code> | <code>string[]</code> | IAM actions required for the DeleteTagOption API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeConstraint">DescribeConstraint</a></code> | <code>string[]</code> | IAM actions required for the DescribeConstraint API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeCopyProductStatus">DescribeCopyProductStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeCopyProductStatus API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribePortfolio">DescribePortfolio</a></code> | <code>string[]</code> | IAM actions required for the DescribePortfolio API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribePortfolioShares">DescribePortfolioShares</a></code> | <code>string[]</code> | IAM actions required for the DescribePortfolioShares API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribePortfolioShareStatus">DescribePortfolioShareStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribePortfolioShareStatus API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProduct">DescribeProduct</a></code> | <code>string[]</code> | IAM actions required for the DescribeProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProductAsAdmin">DescribeProductAsAdmin</a></code> | <code>string[]</code> | IAM actions required for the DescribeProductAsAdmin API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProductView">DescribeProductView</a></code> | <code>string[]</code> | IAM actions required for the DescribeProductView API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProvisionedProduct">DescribeProvisionedProduct</a></code> | <code>string[]</code> | IAM actions required for the DescribeProvisionedProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProvisionedProductPlan">DescribeProvisionedProductPlan</a></code> | <code>string[]</code> | IAM actions required for the DescribeProvisionedProductPlan API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProvisioningArtifact">DescribeProvisioningArtifact</a></code> | <code>string[]</code> | IAM actions required for the DescribeProvisioningArtifact API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProvisioningParameters">DescribeProvisioningParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeProvisioningParameters API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeRecord">DescribeRecord</a></code> | <code>string[]</code> | IAM actions required for the DescribeRecord API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeServiceAction">DescribeServiceAction</a></code> | <code>string[]</code> | IAM actions required for the DescribeServiceAction API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeServiceActionExecutionParameters">DescribeServiceActionExecutionParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeServiceActionExecutionParameters API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeTagOption">DescribeTagOption</a></code> | <code>string[]</code> | IAM actions required for the DescribeTagOption API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisableAWSOrganizationsAccess">DisableAWSOrganizationsAccess</a></code> | <code>string[]</code> | IAM actions required for the DisableAWSOrganizationsAccess API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateAttributeGroup">DisassociateAttributeGroup</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAttributeGroup API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateBudgetFromResource">DisassociateBudgetFromResource</a></code> | <code>string[]</code> | IAM actions required for the DisassociateBudgetFromResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociatePrincipalFromPortfolio">DisassociatePrincipalFromPortfolio</a></code> | <code>string[]</code> | IAM actions required for the DisassociatePrincipalFromPortfolio API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateProductFromPortfolio">DisassociateProductFromPortfolio</a></code> | <code>string[]</code> | IAM actions required for the DisassociateProductFromPortfolio API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateResource">DisassociateResource</a></code> | <code>string[]</code> | IAM actions required for the DisassociateResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateServiceActionFromProvisioningArtifact">DisassociateServiceActionFromProvisioningArtifact</a></code> | <code>string[]</code> | IAM actions required for the DisassociateServiceActionFromProvisioningArtifact API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateTagOptionFromResource">DisassociateTagOptionFromResource</a></code> | <code>string[]</code> | IAM actions required for the DisassociateTagOptionFromResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.EnableAWSOrganizationsAccess">EnableAWSOrganizationsAccess</a></code> | <code>string[]</code> | IAM actions required for the EnableAWSOrganizationsAccess API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ExecuteProvisionedProductPlan">ExecuteProvisionedProductPlan</a></code> | <code>string[]</code> | IAM actions required for the ExecuteProvisionedProductPlan API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ExecuteProvisionedProductServiceAction">ExecuteProvisionedProductServiceAction</a></code> | <code>string[]</code> | IAM actions required for the ExecuteProvisionedProductServiceAction API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ImportAsProvisionedProduct">ImportAsProvisionedProduct</a></code> | <code>string[]</code> | IAM actions required for the ImportAsProvisionedProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListAcceptedPortfolioShares">ListAcceptedPortfolioShares</a></code> | <code>string[]</code> | IAM actions required for the ListAcceptedPortfolioShares API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListAssociatedAttributeGroups">ListAssociatedAttributeGroups</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedAttributeGroups API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListAssociatedResources">ListAssociatedResources</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedResources API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListAttributeGroups">ListAttributeGroups</a></code> | <code>string[]</code> | IAM actions required for the ListAttributeGroups API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListAttributeGroupsForApplication">ListAttributeGroupsForApplication</a></code> | <code>string[]</code> | IAM actions required for the ListAttributeGroupsForApplication API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListBudgetsForResource">ListBudgetsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListBudgetsForResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListConstraintsForPortfolio">ListConstraintsForPortfolio</a></code> | <code>string[]</code> | IAM actions required for the ListConstraintsForPortfolio API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListLaunchPaths">ListLaunchPaths</a></code> | <code>string[]</code> | IAM actions required for the ListLaunchPaths API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListOrganizationPortfolioAccess">ListOrganizationPortfolioAccess</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationPortfolioAccess API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListPortfolioAccess">ListPortfolioAccess</a></code> | <code>string[]</code> | IAM actions required for the ListPortfolioAccess API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListPortfolios">ListPortfolios</a></code> | <code>string[]</code> | IAM actions required for the ListPortfolios API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListPortfoliosForProduct">ListPortfoliosForProduct</a></code> | <code>string[]</code> | IAM actions required for the ListPortfoliosForProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListPrincipalsForPortfolio">ListPrincipalsForPortfolio</a></code> | <code>string[]</code> | IAM actions required for the ListPrincipalsForPortfolio API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListProvisionedProductPlans">ListProvisionedProductPlans</a></code> | <code>string[]</code> | IAM actions required for the ListProvisionedProductPlans API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListProvisioningArtifacts">ListProvisioningArtifacts</a></code> | <code>string[]</code> | IAM actions required for the ListProvisioningArtifacts API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListProvisioningArtifactsForServiceAction">ListProvisioningArtifactsForServiceAction</a></code> | <code>string[]</code> | IAM actions required for the ListProvisioningArtifactsForServiceAction API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListRecordHistory">ListRecordHistory</a></code> | <code>string[]</code> | IAM actions required for the ListRecordHistory API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListResourcesForTagOption">ListResourcesForTagOption</a></code> | <code>string[]</code> | IAM actions required for the ListResourcesForTagOption API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListServiceActions">ListServiceActions</a></code> | <code>string[]</code> | IAM actions required for the ListServiceActions API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListServiceActionsForProvisioningArtifact">ListServiceActionsForProvisioningArtifact</a></code> | <code>string[]</code> | IAM actions required for the ListServiceActionsForProvisioningArtifact API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListStackInstancesForProvisionedProduct">ListStackInstancesForProvisionedProduct</a></code> | <code>string[]</code> | IAM actions required for the ListStackInstancesForProvisionedProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListTagOptions">ListTagOptions</a></code> | <code>string[]</code> | IAM actions required for the ListTagOptions API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.NotifyProvisionProductEngineWorkflowResult">NotifyProvisionProductEngineWorkflowResult</a></code> | <code>string[]</code> | IAM actions required for the NotifyProvisionProductEngineWorkflowResult API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.NotifyTerminateProvisionedProductEngineWorkflowResult">NotifyTerminateProvisionedProductEngineWorkflowResult</a></code> | <code>string[]</code> | IAM actions required for the NotifyTerminateProvisionedProductEngineWorkflowResult API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.NotifyUpdateProvisionedProductEngineWorkflowResult">NotifyUpdateProvisionedProductEngineWorkflowResult</a></code> | <code>string[]</code> | IAM actions required for the NotifyUpdateProvisionedProductEngineWorkflowResult API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetAssociatedResource">opGetAssociatedResource</a></code> | <code>string[]</code> | IAM actions required for the GetAssociatedResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetAttributeGroup">opGetAttributeGroup</a></code> | <code>string[]</code> | IAM actions required for the GetAttributeGroup API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetAWSOrganizationsAccessStatus">opGetAWSOrganizationsAccessStatus</a></code> | <code>string[]</code> | IAM actions required for the GetAWSOrganizationsAccessStatus API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetConfiguration">opGetConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetConfiguration API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetProvisionedProductOutputs">opGetProvisionedProductOutputs</a></code> | <code>string[]</code> | IAM actions required for the GetProvisionedProductOutputs API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ProvisionProduct">ProvisionProduct</a></code> | <code>string[]</code> | IAM actions required for the ProvisionProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.PutConfiguration">PutConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutConfiguration API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.RejectPortfolioShare">RejectPortfolioShare</a></code> | <code>string[]</code> | IAM actions required for the RejectPortfolioShare API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ScanProvisionedProducts">ScanProvisionedProducts</a></code> | <code>string[]</code> | IAM actions required for the ScanProvisionedProducts API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.SearchProducts">SearchProducts</a></code> | <code>string[]</code> | IAM actions required for the SearchProducts API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.SearchProductsAsAdmin">SearchProductsAsAdmin</a></code> | <code>string[]</code> | IAM actions required for the SearchProductsAsAdmin API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.SearchProvisionedProducts">SearchProvisionedProducts</a></code> | <code>string[]</code> | IAM actions required for the SearchProvisionedProducts API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.SyncResource">SyncResource</a></code> | <code>string[]</code> | IAM actions required for the SyncResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.TerminateProvisionedProduct">TerminateProvisionedProduct</a></code> | <code>string[]</code> | IAM actions required for the TerminateProvisionedProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateAttributeGroup">UpdateAttributeGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateAttributeGroup API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateConstraint">UpdateConstraint</a></code> | <code>string[]</code> | IAM actions required for the UpdateConstraint API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdatePortfolio">UpdatePortfolio</a></code> | <code>string[]</code> | IAM actions required for the UpdatePortfolio API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdatePortfolioShare">UpdatePortfolioShare</a></code> | <code>string[]</code> | IAM actions required for the UpdatePortfolioShare API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateProduct">UpdateProduct</a></code> | <code>string[]</code> | IAM actions required for the UpdateProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateProvisionedProduct">UpdateProvisionedProduct</a></code> | <code>string[]</code> | IAM actions required for the UpdateProvisionedProduct API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateProvisionedProductProperties">UpdateProvisionedProductProperties</a></code> | <code>string[]</code> | IAM actions required for the UpdateProvisionedProductProperties API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateProvisioningArtifact">UpdateProvisioningArtifact</a></code> | <code>string[]</code> | IAM actions required for the UpdateProvisioningArtifact API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateServiceAction">UpdateServiceAction</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceAction API call. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateTagOption">UpdateTagOption</a></code> | <code>string[]</code> | IAM actions required for the UpdateTagOption API call. |

---

##### `AcceptPortfolioShare`<sup>Required</sup> <a name="AcceptPortfolioShare" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AcceptPortfolioShare"></a>

```typescript
public readonly AcceptPortfolioShare: string[];
```

- *Type:* string[]

IAM actions required for the AcceptPortfolioShare API call.

---

##### `AssociateAttributeGroup`<sup>Required</sup> <a name="AssociateAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateAttributeGroup"></a>

```typescript
public readonly AssociateAttributeGroup: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAttributeGroup API call.

---

##### `AssociateBudgetWithResource`<sup>Required</sup> <a name="AssociateBudgetWithResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateBudgetWithResource"></a>

```typescript
public readonly AssociateBudgetWithResource: string[];
```

- *Type:* string[]

IAM actions required for the AssociateBudgetWithResource API call.

---

##### `AssociatePrincipalWithPortfolio`<sup>Required</sup> <a name="AssociatePrincipalWithPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociatePrincipalWithPortfolio"></a>

```typescript
public readonly AssociatePrincipalWithPortfolio: string[];
```

- *Type:* string[]

IAM actions required for the AssociatePrincipalWithPortfolio API call.

---

##### `AssociateProductWithPortfolio`<sup>Required</sup> <a name="AssociateProductWithPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateProductWithPortfolio"></a>

```typescript
public readonly AssociateProductWithPortfolio: string[];
```

- *Type:* string[]

IAM actions required for the AssociateProductWithPortfolio API call.

---

##### `AssociateResource`<sup>Required</sup> <a name="AssociateResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateResource"></a>

```typescript
public readonly AssociateResource: string[];
```

- *Type:* string[]

IAM actions required for the AssociateResource API call.

---

##### `AssociateServiceActionWithProvisioningArtifact`<sup>Required</sup> <a name="AssociateServiceActionWithProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateServiceActionWithProvisioningArtifact"></a>

```typescript
public readonly AssociateServiceActionWithProvisioningArtifact: string[];
```

- *Type:* string[]

IAM actions required for the AssociateServiceActionWithProvisioningArtifact API call.

---

##### `AssociateTagOptionWithResource`<sup>Required</sup> <a name="AssociateTagOptionWithResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.AssociateTagOptionWithResource"></a>

```typescript
public readonly AssociateTagOptionWithResource: string[];
```

- *Type:* string[]

IAM actions required for the AssociateTagOptionWithResource API call.

---

##### `BatchAssociateServiceActionWithProvisioningArtifact`<sup>Required</sup> <a name="BatchAssociateServiceActionWithProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.BatchAssociateServiceActionWithProvisioningArtifact"></a>

```typescript
public readonly BatchAssociateServiceActionWithProvisioningArtifact: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateServiceActionWithProvisioningArtifact API call.

---

##### `BatchDisassociateServiceActionFromProvisioningArtifact`<sup>Required</sup> <a name="BatchDisassociateServiceActionFromProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.BatchDisassociateServiceActionFromProvisioningArtifact"></a>

```typescript
public readonly BatchDisassociateServiceActionFromProvisioningArtifact: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateServiceActionFromProvisioningArtifact API call.

---

##### `CopyProduct`<sup>Required</sup> <a name="CopyProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CopyProduct"></a>

```typescript
public readonly CopyProduct: string[];
```

- *Type:* string[]

IAM actions required for the CopyProduct API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateAttributeGroup`<sup>Required</sup> <a name="CreateAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateAttributeGroup"></a>

```typescript
public readonly CreateAttributeGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateAttributeGroup API call.

---

##### `CreateConstraint`<sup>Required</sup> <a name="CreateConstraint" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateConstraint"></a>

```typescript
public readonly CreateConstraint: string[];
```

- *Type:* string[]

IAM actions required for the CreateConstraint API call.

---

##### `CreatePortfolio`<sup>Required</sup> <a name="CreatePortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreatePortfolio"></a>

```typescript
public readonly CreatePortfolio: string[];
```

- *Type:* string[]

IAM actions required for the CreatePortfolio API call.

---

##### `CreatePortfolioShare`<sup>Required</sup> <a name="CreatePortfolioShare" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreatePortfolioShare"></a>

```typescript
public readonly CreatePortfolioShare: string[];
```

- *Type:* string[]

IAM actions required for the CreatePortfolioShare API call.

---

##### `CreateProduct`<sup>Required</sup> <a name="CreateProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateProduct"></a>

```typescript
public readonly CreateProduct: string[];
```

- *Type:* string[]

IAM actions required for the CreateProduct API call.

---

##### `CreateProvisionedProductPlan`<sup>Required</sup> <a name="CreateProvisionedProductPlan" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateProvisionedProductPlan"></a>

```typescript
public readonly CreateProvisionedProductPlan: string[];
```

- *Type:* string[]

IAM actions required for the CreateProvisionedProductPlan API call.

---

##### `CreateProvisioningArtifact`<sup>Required</sup> <a name="CreateProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateProvisioningArtifact"></a>

```typescript
public readonly CreateProvisioningArtifact: string[];
```

- *Type:* string[]

IAM actions required for the CreateProvisioningArtifact API call.

---

##### `CreateServiceAction`<sup>Required</sup> <a name="CreateServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateServiceAction"></a>

```typescript
public readonly CreateServiceAction: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceAction API call.

---

##### `CreateTagOption`<sup>Required</sup> <a name="CreateTagOption" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.CreateTagOption"></a>

```typescript
public readonly CreateTagOption: string[];
```

- *Type:* string[]

IAM actions required for the CreateTagOption API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteAttributeGroup`<sup>Required</sup> <a name="DeleteAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteAttributeGroup"></a>

```typescript
public readonly DeleteAttributeGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAttributeGroup API call.

---

##### `DeleteConstraint`<sup>Required</sup> <a name="DeleteConstraint" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteConstraint"></a>

```typescript
public readonly DeleteConstraint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConstraint API call.

---

##### `DeletePortfolio`<sup>Required</sup> <a name="DeletePortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeletePortfolio"></a>

```typescript
public readonly DeletePortfolio: string[];
```

- *Type:* string[]

IAM actions required for the DeletePortfolio API call.

---

##### `DeletePortfolioShare`<sup>Required</sup> <a name="DeletePortfolioShare" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeletePortfolioShare"></a>

```typescript
public readonly DeletePortfolioShare: string[];
```

- *Type:* string[]

IAM actions required for the DeletePortfolioShare API call.

---

##### `DeleteProduct`<sup>Required</sup> <a name="DeleteProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteProduct"></a>

```typescript
public readonly DeleteProduct: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProduct API call.

---

##### `DeleteProvisionedProductPlan`<sup>Required</sup> <a name="DeleteProvisionedProductPlan" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteProvisionedProductPlan"></a>

```typescript
public readonly DeleteProvisionedProductPlan: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProvisionedProductPlan API call.

---

##### `DeleteProvisioningArtifact`<sup>Required</sup> <a name="DeleteProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteProvisioningArtifact"></a>

```typescript
public readonly DeleteProvisioningArtifact: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProvisioningArtifact API call.

---

##### `DeleteServiceAction`<sup>Required</sup> <a name="DeleteServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteServiceAction"></a>

```typescript
public readonly DeleteServiceAction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceAction API call.

---

##### `DeleteTagOption`<sup>Required</sup> <a name="DeleteTagOption" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DeleteTagOption"></a>

```typescript
public readonly DeleteTagOption: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTagOption API call.

---

##### `DescribeConstraint`<sup>Required</sup> <a name="DescribeConstraint" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeConstraint"></a>

```typescript
public readonly DescribeConstraint: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConstraint API call.

---

##### `DescribeCopyProductStatus`<sup>Required</sup> <a name="DescribeCopyProductStatus" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeCopyProductStatus"></a>

```typescript
public readonly DescribeCopyProductStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCopyProductStatus API call.

---

##### `DescribePortfolio`<sup>Required</sup> <a name="DescribePortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribePortfolio"></a>

```typescript
public readonly DescribePortfolio: string[];
```

- *Type:* string[]

IAM actions required for the DescribePortfolio API call.

---

##### `DescribePortfolioShares`<sup>Required</sup> <a name="DescribePortfolioShares" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribePortfolioShares"></a>

```typescript
public readonly DescribePortfolioShares: string[];
```

- *Type:* string[]

IAM actions required for the DescribePortfolioShares API call.

---

##### `DescribePortfolioShareStatus`<sup>Required</sup> <a name="DescribePortfolioShareStatus" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribePortfolioShareStatus"></a>

```typescript
public readonly DescribePortfolioShareStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribePortfolioShareStatus API call.

---

##### `DescribeProduct`<sup>Required</sup> <a name="DescribeProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProduct"></a>

```typescript
public readonly DescribeProduct: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProduct API call.

---

##### `DescribeProductAsAdmin`<sup>Required</sup> <a name="DescribeProductAsAdmin" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProductAsAdmin"></a>

```typescript
public readonly DescribeProductAsAdmin: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProductAsAdmin API call.

---

##### `DescribeProductView`<sup>Required</sup> <a name="DescribeProductView" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProductView"></a>

```typescript
public readonly DescribeProductView: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProductView API call.

---

##### `DescribeProvisionedProduct`<sup>Required</sup> <a name="DescribeProvisionedProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProvisionedProduct"></a>

```typescript
public readonly DescribeProvisionedProduct: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProvisionedProduct API call.

---

##### `DescribeProvisionedProductPlan`<sup>Required</sup> <a name="DescribeProvisionedProductPlan" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProvisionedProductPlan"></a>

```typescript
public readonly DescribeProvisionedProductPlan: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProvisionedProductPlan API call.

---

##### `DescribeProvisioningArtifact`<sup>Required</sup> <a name="DescribeProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProvisioningArtifact"></a>

```typescript
public readonly DescribeProvisioningArtifact: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProvisioningArtifact API call.

---

##### `DescribeProvisioningParameters`<sup>Required</sup> <a name="DescribeProvisioningParameters" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeProvisioningParameters"></a>

```typescript
public readonly DescribeProvisioningParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProvisioningParameters API call.

---

##### `DescribeRecord`<sup>Required</sup> <a name="DescribeRecord" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeRecord"></a>

```typescript
public readonly DescribeRecord: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRecord API call.

---

##### `DescribeServiceAction`<sup>Required</sup> <a name="DescribeServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeServiceAction"></a>

```typescript
public readonly DescribeServiceAction: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServiceAction API call.

---

##### `DescribeServiceActionExecutionParameters`<sup>Required</sup> <a name="DescribeServiceActionExecutionParameters" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeServiceActionExecutionParameters"></a>

```typescript
public readonly DescribeServiceActionExecutionParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServiceActionExecutionParameters API call.

---

##### `DescribeTagOption`<sup>Required</sup> <a name="DescribeTagOption" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DescribeTagOption"></a>

```typescript
public readonly DescribeTagOption: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTagOption API call.

---

##### `DisableAWSOrganizationsAccess`<sup>Required</sup> <a name="DisableAWSOrganizationsAccess" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisableAWSOrganizationsAccess"></a>

```typescript
public readonly DisableAWSOrganizationsAccess: string[];
```

- *Type:* string[]

IAM actions required for the DisableAWSOrganizationsAccess API call.

---

##### `DisassociateAttributeGroup`<sup>Required</sup> <a name="DisassociateAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateAttributeGroup"></a>

```typescript
public readonly DisassociateAttributeGroup: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAttributeGroup API call.

---

##### `DisassociateBudgetFromResource`<sup>Required</sup> <a name="DisassociateBudgetFromResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateBudgetFromResource"></a>

```typescript
public readonly DisassociateBudgetFromResource: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateBudgetFromResource API call.

---

##### `DisassociatePrincipalFromPortfolio`<sup>Required</sup> <a name="DisassociatePrincipalFromPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociatePrincipalFromPortfolio"></a>

```typescript
public readonly DisassociatePrincipalFromPortfolio: string[];
```

- *Type:* string[]

IAM actions required for the DisassociatePrincipalFromPortfolio API call.

---

##### `DisassociateProductFromPortfolio`<sup>Required</sup> <a name="DisassociateProductFromPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateProductFromPortfolio"></a>

```typescript
public readonly DisassociateProductFromPortfolio: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateProductFromPortfolio API call.

---

##### `DisassociateResource`<sup>Required</sup> <a name="DisassociateResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateResource"></a>

```typescript
public readonly DisassociateResource: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateResource API call.

---

##### `DisassociateServiceActionFromProvisioningArtifact`<sup>Required</sup> <a name="DisassociateServiceActionFromProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateServiceActionFromProvisioningArtifact"></a>

```typescript
public readonly DisassociateServiceActionFromProvisioningArtifact: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateServiceActionFromProvisioningArtifact API call.

---

##### `DisassociateTagOptionFromResource`<sup>Required</sup> <a name="DisassociateTagOptionFromResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.DisassociateTagOptionFromResource"></a>

```typescript
public readonly DisassociateTagOptionFromResource: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateTagOptionFromResource API call.

---

##### `EnableAWSOrganizationsAccess`<sup>Required</sup> <a name="EnableAWSOrganizationsAccess" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.EnableAWSOrganizationsAccess"></a>

```typescript
public readonly EnableAWSOrganizationsAccess: string[];
```

- *Type:* string[]

IAM actions required for the EnableAWSOrganizationsAccess API call.

---

##### `ExecuteProvisionedProductPlan`<sup>Required</sup> <a name="ExecuteProvisionedProductPlan" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ExecuteProvisionedProductPlan"></a>

```typescript
public readonly ExecuteProvisionedProductPlan: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteProvisionedProductPlan API call.

---

##### `ExecuteProvisionedProductServiceAction`<sup>Required</sup> <a name="ExecuteProvisionedProductServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ExecuteProvisionedProductServiceAction"></a>

```typescript
public readonly ExecuteProvisionedProductServiceAction: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteProvisionedProductServiceAction API call.

---

##### `ImportAsProvisionedProduct`<sup>Required</sup> <a name="ImportAsProvisionedProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ImportAsProvisionedProduct"></a>

```typescript
public readonly ImportAsProvisionedProduct: string[];
```

- *Type:* string[]

IAM actions required for the ImportAsProvisionedProduct API call.

---

##### `ListAcceptedPortfolioShares`<sup>Required</sup> <a name="ListAcceptedPortfolioShares" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListAcceptedPortfolioShares"></a>

```typescript
public readonly ListAcceptedPortfolioShares: string[];
```

- *Type:* string[]

IAM actions required for the ListAcceptedPortfolioShares API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListAssociatedAttributeGroups`<sup>Required</sup> <a name="ListAssociatedAttributeGroups" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListAssociatedAttributeGroups"></a>

```typescript
public readonly ListAssociatedAttributeGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedAttributeGroups API call.

---

##### `ListAssociatedResources`<sup>Required</sup> <a name="ListAssociatedResources" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListAssociatedResources"></a>

```typescript
public readonly ListAssociatedResources: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedResources API call.

---

##### `ListAttributeGroups`<sup>Required</sup> <a name="ListAttributeGroups" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListAttributeGroups"></a>

```typescript
public readonly ListAttributeGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListAttributeGroups API call.

---

##### `ListAttributeGroupsForApplication`<sup>Required</sup> <a name="ListAttributeGroupsForApplication" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListAttributeGroupsForApplication"></a>

```typescript
public readonly ListAttributeGroupsForApplication: string[];
```

- *Type:* string[]

IAM actions required for the ListAttributeGroupsForApplication API call.

---

##### `ListBudgetsForResource`<sup>Required</sup> <a name="ListBudgetsForResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListBudgetsForResource"></a>

```typescript
public readonly ListBudgetsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListBudgetsForResource API call.

---

##### `ListConstraintsForPortfolio`<sup>Required</sup> <a name="ListConstraintsForPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListConstraintsForPortfolio"></a>

```typescript
public readonly ListConstraintsForPortfolio: string[];
```

- *Type:* string[]

IAM actions required for the ListConstraintsForPortfolio API call.

---

##### `ListLaunchPaths`<sup>Required</sup> <a name="ListLaunchPaths" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListLaunchPaths"></a>

```typescript
public readonly ListLaunchPaths: string[];
```

- *Type:* string[]

IAM actions required for the ListLaunchPaths API call.

---

##### `ListOrganizationPortfolioAccess`<sup>Required</sup> <a name="ListOrganizationPortfolioAccess" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListOrganizationPortfolioAccess"></a>

```typescript
public readonly ListOrganizationPortfolioAccess: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationPortfolioAccess API call.

---

##### `ListPortfolioAccess`<sup>Required</sup> <a name="ListPortfolioAccess" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListPortfolioAccess"></a>

```typescript
public readonly ListPortfolioAccess: string[];
```

- *Type:* string[]

IAM actions required for the ListPortfolioAccess API call.

---

##### `ListPortfolios`<sup>Required</sup> <a name="ListPortfolios" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListPortfolios"></a>

```typescript
public readonly ListPortfolios: string[];
```

- *Type:* string[]

IAM actions required for the ListPortfolios API call.

---

##### `ListPortfoliosForProduct`<sup>Required</sup> <a name="ListPortfoliosForProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListPortfoliosForProduct"></a>

```typescript
public readonly ListPortfoliosForProduct: string[];
```

- *Type:* string[]

IAM actions required for the ListPortfoliosForProduct API call.

---

##### `ListPrincipalsForPortfolio`<sup>Required</sup> <a name="ListPrincipalsForPortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListPrincipalsForPortfolio"></a>

```typescript
public readonly ListPrincipalsForPortfolio: string[];
```

- *Type:* string[]

IAM actions required for the ListPrincipalsForPortfolio API call.

---

##### `ListProvisionedProductPlans`<sup>Required</sup> <a name="ListProvisionedProductPlans" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListProvisionedProductPlans"></a>

```typescript
public readonly ListProvisionedProductPlans: string[];
```

- *Type:* string[]

IAM actions required for the ListProvisionedProductPlans API call.

---

##### `ListProvisioningArtifacts`<sup>Required</sup> <a name="ListProvisioningArtifacts" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListProvisioningArtifacts"></a>

```typescript
public readonly ListProvisioningArtifacts: string[];
```

- *Type:* string[]

IAM actions required for the ListProvisioningArtifacts API call.

---

##### `ListProvisioningArtifactsForServiceAction`<sup>Required</sup> <a name="ListProvisioningArtifactsForServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListProvisioningArtifactsForServiceAction"></a>

```typescript
public readonly ListProvisioningArtifactsForServiceAction: string[];
```

- *Type:* string[]

IAM actions required for the ListProvisioningArtifactsForServiceAction API call.

---

##### `ListRecordHistory`<sup>Required</sup> <a name="ListRecordHistory" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListRecordHistory"></a>

```typescript
public readonly ListRecordHistory: string[];
```

- *Type:* string[]

IAM actions required for the ListRecordHistory API call.

---

##### `ListResourcesForTagOption`<sup>Required</sup> <a name="ListResourcesForTagOption" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListResourcesForTagOption"></a>

```typescript
public readonly ListResourcesForTagOption: string[];
```

- *Type:* string[]

IAM actions required for the ListResourcesForTagOption API call.

---

##### `ListServiceActions`<sup>Required</sup> <a name="ListServiceActions" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListServiceActions"></a>

```typescript
public readonly ListServiceActions: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceActions API call.

---

##### `ListServiceActionsForProvisioningArtifact`<sup>Required</sup> <a name="ListServiceActionsForProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListServiceActionsForProvisioningArtifact"></a>

```typescript
public readonly ListServiceActionsForProvisioningArtifact: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceActionsForProvisioningArtifact API call.

---

##### `ListStackInstancesForProvisionedProduct`<sup>Required</sup> <a name="ListStackInstancesForProvisionedProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListStackInstancesForProvisionedProduct"></a>

```typescript
public readonly ListStackInstancesForProvisionedProduct: string[];
```

- *Type:* string[]

IAM actions required for the ListStackInstancesForProvisionedProduct API call.

---

##### `ListTagOptions`<sup>Required</sup> <a name="ListTagOptions" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListTagOptions"></a>

```typescript
public readonly ListTagOptions: string[];
```

- *Type:* string[]

IAM actions required for the ListTagOptions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `NotifyProvisionProductEngineWorkflowResult`<sup>Required</sup> <a name="NotifyProvisionProductEngineWorkflowResult" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.NotifyProvisionProductEngineWorkflowResult"></a>

```typescript
public readonly NotifyProvisionProductEngineWorkflowResult: string[];
```

- *Type:* string[]

IAM actions required for the NotifyProvisionProductEngineWorkflowResult API call.

---

##### `NotifyTerminateProvisionedProductEngineWorkflowResult`<sup>Required</sup> <a name="NotifyTerminateProvisionedProductEngineWorkflowResult" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.NotifyTerminateProvisionedProductEngineWorkflowResult"></a>

```typescript
public readonly NotifyTerminateProvisionedProductEngineWorkflowResult: string[];
```

- *Type:* string[]

IAM actions required for the NotifyTerminateProvisionedProductEngineWorkflowResult API call.

---

##### `NotifyUpdateProvisionedProductEngineWorkflowResult`<sup>Required</sup> <a name="NotifyUpdateProvisionedProductEngineWorkflowResult" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.NotifyUpdateProvisionedProductEngineWorkflowResult"></a>

```typescript
public readonly NotifyUpdateProvisionedProductEngineWorkflowResult: string[];
```

- *Type:* string[]

IAM actions required for the NotifyUpdateProvisionedProductEngineWorkflowResult API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetAssociatedResource`<sup>Required</sup> <a name="opGetAssociatedResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetAssociatedResource"></a>

```typescript
public readonly opGetAssociatedResource: string[];
```

- *Type:* string[]

IAM actions required for the GetAssociatedResource API call.

---

##### `opGetAttributeGroup`<sup>Required</sup> <a name="opGetAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetAttributeGroup"></a>

```typescript
public readonly opGetAttributeGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetAttributeGroup API call.

---

##### `opGetAWSOrganizationsAccessStatus`<sup>Required</sup> <a name="opGetAWSOrganizationsAccessStatus" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetAWSOrganizationsAccessStatus"></a>

```typescript
public readonly opGetAWSOrganizationsAccessStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetAWSOrganizationsAccessStatus API call.

---

##### `opGetConfiguration`<sup>Required</sup> <a name="opGetConfiguration" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetConfiguration"></a>

```typescript
public readonly opGetConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetConfiguration API call.

---

##### `opGetProvisionedProductOutputs`<sup>Required</sup> <a name="opGetProvisionedProductOutputs" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.opGetProvisionedProductOutputs"></a>

```typescript
public readonly opGetProvisionedProductOutputs: string[];
```

- *Type:* string[]

IAM actions required for the GetProvisionedProductOutputs API call.

---

##### `ProvisionProduct`<sup>Required</sup> <a name="ProvisionProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ProvisionProduct"></a>

```typescript
public readonly ProvisionProduct: string[];
```

- *Type:* string[]

IAM actions required for the ProvisionProduct API call.

---

##### `PutConfiguration`<sup>Required</sup> <a name="PutConfiguration" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.PutConfiguration"></a>

```typescript
public readonly PutConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutConfiguration API call.

---

##### `RejectPortfolioShare`<sup>Required</sup> <a name="RejectPortfolioShare" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.RejectPortfolioShare"></a>

```typescript
public readonly RejectPortfolioShare: string[];
```

- *Type:* string[]

IAM actions required for the RejectPortfolioShare API call.

---

##### `ScanProvisionedProducts`<sup>Required</sup> <a name="ScanProvisionedProducts" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.ScanProvisionedProducts"></a>

```typescript
public readonly ScanProvisionedProducts: string[];
```

- *Type:* string[]

IAM actions required for the ScanProvisionedProducts API call.

---

##### `SearchProducts`<sup>Required</sup> <a name="SearchProducts" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.SearchProducts"></a>

```typescript
public readonly SearchProducts: string[];
```

- *Type:* string[]

IAM actions required for the SearchProducts API call.

---

##### `SearchProductsAsAdmin`<sup>Required</sup> <a name="SearchProductsAsAdmin" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.SearchProductsAsAdmin"></a>

```typescript
public readonly SearchProductsAsAdmin: string[];
```

- *Type:* string[]

IAM actions required for the SearchProductsAsAdmin API call.

---

##### `SearchProvisionedProducts`<sup>Required</sup> <a name="SearchProvisionedProducts" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.SearchProvisionedProducts"></a>

```typescript
public readonly SearchProvisionedProducts: string[];
```

- *Type:* string[]

IAM actions required for the SearchProvisionedProducts API call.

---

##### `SyncResource`<sup>Required</sup> <a name="SyncResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.SyncResource"></a>

```typescript
public readonly SyncResource: string[];
```

- *Type:* string[]

IAM actions required for the SyncResource API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateProvisionedProduct`<sup>Required</sup> <a name="TerminateProvisionedProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.TerminateProvisionedProduct"></a>

```typescript
public readonly TerminateProvisionedProduct: string[];
```

- *Type:* string[]

IAM actions required for the TerminateProvisionedProduct API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateAttributeGroup`<sup>Required</sup> <a name="UpdateAttributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateAttributeGroup"></a>

```typescript
public readonly UpdateAttributeGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAttributeGroup API call.

---

##### `UpdateConstraint`<sup>Required</sup> <a name="UpdateConstraint" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateConstraint"></a>

```typescript
public readonly UpdateConstraint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConstraint API call.

---

##### `UpdatePortfolio`<sup>Required</sup> <a name="UpdatePortfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdatePortfolio"></a>

```typescript
public readonly UpdatePortfolio: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePortfolio API call.

---

##### `UpdatePortfolioShare`<sup>Required</sup> <a name="UpdatePortfolioShare" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdatePortfolioShare"></a>

```typescript
public readonly UpdatePortfolioShare: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePortfolioShare API call.

---

##### `UpdateProduct`<sup>Required</sup> <a name="UpdateProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateProduct"></a>

```typescript
public readonly UpdateProduct: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProduct API call.

---

##### `UpdateProvisionedProduct`<sup>Required</sup> <a name="UpdateProvisionedProduct" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateProvisionedProduct"></a>

```typescript
public readonly UpdateProvisionedProduct: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProvisionedProduct API call.

---

##### `UpdateProvisionedProductProperties`<sup>Required</sup> <a name="UpdateProvisionedProductProperties" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateProvisionedProductProperties"></a>

```typescript
public readonly UpdateProvisionedProductProperties: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProvisionedProductProperties API call.

---

##### `UpdateProvisioningArtifact`<sup>Required</sup> <a name="UpdateProvisioningArtifact" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateProvisioningArtifact"></a>

```typescript
public readonly UpdateProvisioningArtifact: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProvisioningArtifact API call.

---

##### `UpdateServiceAction`<sup>Required</sup> <a name="UpdateServiceAction" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateServiceAction"></a>

```typescript
public readonly UpdateServiceAction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceAction API call.

---

##### `UpdateTagOption`<sup>Required</sup> <a name="UpdateTagOption" id="@cdk_utils/iam.servicecatalog.ServiceCatalogOperations.property.UpdateTagOption"></a>

```typescript
public readonly UpdateTagOption: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTagOption API call.

---

### ServiceCatalogResources <a name="ServiceCatalogResources" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources"></a>

ARN builders, validators, and parsers for servicecatalog resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.Initializer"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

new servicecatalog.ServiceCatalogResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.application">application</a></code> | Builds an ARN for the Application resource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.attributeGroup">attributeGroup</a></code> | Builds an ARN for the AttributeGroup resource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the Application resource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidAttributeGroupArn">isValidAttributeGroupArn</a></code> | Validates whether a string is a valid ARN for the AttributeGroup resource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidPortfolioArn">isValidPortfolioArn</a></code> | Validates whether a string is a valid ARN for the Portfolio resource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidProductArn">isValidProductArn</a></code> | Validates whether a string is a valid ARN for the Product resource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a Application ARN into its components. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parseAttributeGroupArn">parseAttributeGroupArn</a></code> | Parses a AttributeGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parsePortfolioArn">parsePortfolioArn</a></code> | Parses a Portfolio ARN into its components. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parseProductArn">parseProductArn</a></code> | Parses a Product ARN into its components. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.portfolio">portfolio</a></code> | Builds an ARN for the Portfolio resource. |
| <code><a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogResources.product">product</a></code> | Builds an ARN for the Product resource. |

---

##### `application` <a name="application" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.application"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.application(props: ServiceCatalogApplicationArnProps)
```

Builds an ARN for the Application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogApplicationArnProps">ServiceCatalogApplicationArnProps</a>

---

##### `attributeGroup` <a name="attributeGroup" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.attributeGroup"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.attributeGroup(props: ServiceCatalogAttributeGroupArnProps)
```

Builds an ARN for the AttributeGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.attributeGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogAttributeGroupArnProps">ServiceCatalogAttributeGroupArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidApplicationArn"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the Application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAttributeGroupArn` <a name="isValidAttributeGroupArn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidAttributeGroupArn"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.isValidAttributeGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the AttributeGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidAttributeGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPortfolioArn` <a name="isValidPortfolioArn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidPortfolioArn"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.isValidPortfolioArn(arn: string)
```

Validates whether a string is a valid ARN for the Portfolio resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidPortfolioArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProductArn` <a name="isValidProductArn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidProductArn"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.isValidProductArn(arn: string)
```

Validates whether a string is a valid ARN for the Product resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.isValidProductArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parseApplicationArn"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.parseApplicationArn(arn: string)
```

Parses a Application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAttributeGroupArn` <a name="parseAttributeGroupArn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parseAttributeGroupArn"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.parseAttributeGroupArn(arn: string)
```

Parses a AttributeGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parseAttributeGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePortfolioArn` <a name="parsePortfolioArn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parsePortfolioArn"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.parsePortfolioArn(arn: string)
```

Parses a Portfolio ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parsePortfolioArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProductArn` <a name="parseProductArn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parseProductArn"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.parseProductArn(arn: string)
```

Parses a Product ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.parseProductArn.parameter.arn"></a>

- *Type:* string

---

##### `portfolio` <a name="portfolio" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.portfolio"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.portfolio(props: ServiceCatalogPortfolioArnProps)
```

Builds an ARN for the Portfolio resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.portfolio.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogPortfolioArnProps">ServiceCatalogPortfolioArnProps</a>

---

##### `product` <a name="product" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.product"></a>

```typescript
import { servicecatalog } from '@cdk_utils/iam'

servicecatalog.ServiceCatalogResources.product(props: ServiceCatalogProductArnProps)
```

Builds an ARN for the Product resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.servicecatalog.ServiceCatalogResources.product.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.servicecatalog.ServiceCatalogProductArnProps">ServiceCatalogProductArnProps</a>

---




