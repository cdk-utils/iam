# `outposts` Submodule <a name="`outposts` Submodule" id="@cdk_utils/iam.outposts"></a>


## Structs <a name="Structs" id="Structs"></a>

### OutpostsOutpostArnComponents <a name="OutpostsOutpostArnComponents" id="@cdk_utils/iam.outposts.OutpostsOutpostArnComponents"></a>

Parsed components of a outpost ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.outposts.OutpostsOutpostArnComponents.Initializer"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

const outpostsOutpostArnComponents: outposts.OutpostsOutpostArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOutpostArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOutpostArnComponents.property.outpostId">outpostId</a></code> | <code>string</code> | The OutpostId component. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOutpostArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOutpostArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.outposts.OutpostsOutpostArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdk_utils/iam.outposts.OutpostsOutpostArnComponents.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

The OutpostId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.outposts.OutpostsOutpostArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.outposts.OutpostsOutpostArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OutpostsOutpostArnProps <a name="OutpostsOutpostArnProps" id="@cdk_utils/iam.outposts.OutpostsOutpostArnProps"></a>

Properties for building a outpost ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.outposts.OutpostsOutpostArnProps.Initializer"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

const outpostsOutpostArnProps: outposts.OutpostsOutpostArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOutpostArnProps.property.outpostId">outpostId</a></code> | <code>string</code> | The OutpostId component of the ARN. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOutpostArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOutpostArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOutpostArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdk_utils/iam.outposts.OutpostsOutpostArnProps.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

The OutpostId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.outposts.OutpostsOutpostArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.outposts.OutpostsOutpostArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.outposts.OutpostsOutpostArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OutpostsSiteArnComponents <a name="OutpostsSiteArnComponents" id="@cdk_utils/iam.outposts.OutpostsSiteArnComponents"></a>

Parsed components of a site ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.outposts.OutpostsSiteArnComponents.Initializer"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

const outpostsSiteArnComponents: outposts.OutpostsSiteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsSiteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsSiteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsSiteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsSiteArnComponents.property.siteId">siteId</a></code> | <code>string</code> | The SiteId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.outposts.OutpostsSiteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.outposts.OutpostsSiteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.outposts.OutpostsSiteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdk_utils/iam.outposts.OutpostsSiteArnComponents.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

The SiteId component.

---

### OutpostsSiteArnProps <a name="OutpostsSiteArnProps" id="@cdk_utils/iam.outposts.OutpostsSiteArnProps"></a>

Properties for building a site ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.outposts.OutpostsSiteArnProps.Initializer"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

const outpostsSiteArnProps: outposts.OutpostsSiteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsSiteArnProps.property.siteId">siteId</a></code> | <code>string</code> | The SiteId component of the ARN. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsSiteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsSiteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsSiteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdk_utils/iam.outposts.OutpostsSiteArnProps.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

The SiteId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.outposts.OutpostsSiteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.outposts.OutpostsSiteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.outposts.OutpostsSiteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsActions <a name="OutpostsActions" id="@cdk_utils/iam.outposts.OutpostsActions"></a>

IAM action constants for the outposts service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.outposts.OutpostsActions.Initializer"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

new outposts.OutpostsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetCapacityTask">actionGetCapacityTask</a></code> | <code>string</code> | [Read] outposts:GetCapacityTask. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetCatalogItem">actionGetCatalogItem</a></code> | <code>string</code> | [Read] outposts:GetCatalogItem. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] outposts:GetConnection. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetOrder">actionGetOrder</a></code> | <code>string</code> | [Read] outposts:GetOrder. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetOutpost">actionGetOutpost</a></code> | <code>string</code> | [Read] outposts:GetOutpost. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetOutpostBillingInformation">actionGetOutpostBillingInformation</a></code> | <code>string</code> | [Read] outposts:GetOutpostBillingInformation. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetOutpostInstanceTypes">actionGetOutpostInstanceTypes</a></code> | <code>string</code> | [Read] outposts:GetOutpostInstanceTypes. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetOutpostSupportedInstanceTypes">actionGetOutpostSupportedInstanceTypes</a></code> | <code>string</code> | [Read] outposts:GetOutpostSupportedInstanceTypes. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetPrivateConnectivityConfig">actionGetPrivateConnectivityConfig</a></code> | <code>string</code> | [Read] outposts:GetPrivateConnectivityConfig. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetQuote">actionGetQuote</a></code> | <code>string</code> | [Read] outposts:GetQuote. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetRenewalPricing">actionGetRenewalPricing</a></code> | <code>string</code> | [Read] outposts:GetRenewalPricing. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetSite">actionGetSite</a></code> | <code>string</code> | [Read] outposts:GetSite. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.actionGetSiteAddress">actionGetSiteAddress</a></code> | <code>string</code> | [Read] outposts:GetSiteAddress. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.CancelCapacityTask">CancelCapacityTask</a></code> | <code>string</code> | [Write] outposts:CancelCapacityTask. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.CancelOrder">CancelOrder</a></code> | <code>string</code> | [Write] outposts:CancelOrder. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.CreateOrder">CreateOrder</a></code> | <code>string</code> | [Write] outposts:CreateOrder. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.CreateOutpost">CreateOutpost</a></code> | <code>string</code> | [Write] outposts:CreateOutpost. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.CreatePrivateConnectivityConfig">CreatePrivateConnectivityConfig</a></code> | <code>string</code> | [Write] outposts:CreatePrivateConnectivityConfig. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.CreateQuote">CreateQuote</a></code> | <code>string</code> | [Write] outposts:CreateQuote. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.CreateRenewal">CreateRenewal</a></code> | <code>string</code> | [Write] outposts:CreateRenewal. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.CreateSite">CreateSite</a></code> | <code>string</code> | [Write] outposts:CreateSite. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.DeleteOutpost">DeleteOutpost</a></code> | <code>string</code> | [Write] outposts:DeleteOutpost. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.DeleteQuote">DeleteQuote</a></code> | <code>string</code> | [Write] outposts:DeleteQuote. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.DeleteSite">DeleteSite</a></code> | <code>string</code> | [Write] outposts:DeleteSite. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.ListAssetInstances">ListAssetInstances</a></code> | <code>string</code> | [List] outposts:ListAssetInstances. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.ListAssets">ListAssets</a></code> | <code>string</code> | [List] outposts:ListAssets. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.ListBlockingInstancesForCapacityTask">ListBlockingInstancesForCapacityTask</a></code> | <code>string</code> | [List] outposts:ListBlockingInstancesForCapacityTask. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.ListCapacityTasks">ListCapacityTasks</a></code> | <code>string</code> | [List] outposts:ListCapacityTasks. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.ListCatalogItems">ListCatalogItems</a></code> | <code>string</code> | [List] outposts:ListCatalogItems. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.ListOrderableInstanceTypes">ListOrderableInstanceTypes</a></code> | <code>string</code> | [List] outposts:ListOrderableInstanceTypes. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.ListOrders">ListOrders</a></code> | <code>string</code> | [List] outposts:ListOrders. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.ListOutposts">ListOutposts</a></code> | <code>string</code> | [List] outposts:ListOutposts. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.ListQuotes">ListQuotes</a></code> | <code>string</code> | [List] outposts:ListQuotes. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.ListSites">ListSites</a></code> | <code>string</code> | [List] outposts:ListSites. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] outposts:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.StartCapacityTask">StartCapacityTask</a></code> | <code>string</code> | [Write] outposts:StartCapacityTask. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.StartConnection">StartConnection</a></code> | <code>string</code> | [Write] outposts:StartConnection. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] outposts:TagResource. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] outposts:UntagResource. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.UpdateOutpost">UpdateOutpost</a></code> | <code>string</code> | [Write] outposts:UpdateOutpost. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.UpdateQuote">UpdateQuote</a></code> | <code>string</code> | [Write] outposts:UpdateQuote. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.UpdateSite">UpdateSite</a></code> | <code>string</code> | [Write] outposts:UpdateSite. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.UpdateSiteAddress">UpdateSiteAddress</a></code> | <code>string</code> | [Write] outposts:UpdateSiteAddress. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsActions.property.UpdateSiteRackPhysicalProperties">UpdateSiteRackPhysicalProperties</a></code> | <code>string</code> | [Write] outposts:UpdateSiteRackPhysicalProperties. |

---

##### `actionGetCapacityTask`<sup>Required</sup> <a name="actionGetCapacityTask" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetCapacityTask"></a>

```typescript
public readonly actionGetCapacityTask: string;
```

- *Type:* string

[Read] outposts:GetCapacityTask.

---

##### `actionGetCatalogItem`<sup>Required</sup> <a name="actionGetCatalogItem" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetCatalogItem"></a>

```typescript
public readonly actionGetCatalogItem: string;
```

- *Type:* string

[Read] outposts:GetCatalogItem.

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] outposts:GetConnection.

---

##### `actionGetOrder`<sup>Required</sup> <a name="actionGetOrder" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetOrder"></a>

```typescript
public readonly actionGetOrder: string;
```

- *Type:* string

[Read] outposts:GetOrder.

---

##### `actionGetOutpost`<sup>Required</sup> <a name="actionGetOutpost" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetOutpost"></a>

```typescript
public readonly actionGetOutpost: string;
```

- *Type:* string

[Read] outposts:GetOutpost.

---

##### `actionGetOutpostBillingInformation`<sup>Required</sup> <a name="actionGetOutpostBillingInformation" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetOutpostBillingInformation"></a>

```typescript
public readonly actionGetOutpostBillingInformation: string;
```

- *Type:* string

[Read] outposts:GetOutpostBillingInformation.

---

##### `actionGetOutpostInstanceTypes`<sup>Required</sup> <a name="actionGetOutpostInstanceTypes" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetOutpostInstanceTypes"></a>

```typescript
public readonly actionGetOutpostInstanceTypes: string;
```

- *Type:* string

[Read] outposts:GetOutpostInstanceTypes.

---

##### `actionGetOutpostSupportedInstanceTypes`<sup>Required</sup> <a name="actionGetOutpostSupportedInstanceTypes" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetOutpostSupportedInstanceTypes"></a>

```typescript
public readonly actionGetOutpostSupportedInstanceTypes: string;
```

- *Type:* string

[Read] outposts:GetOutpostSupportedInstanceTypes.

---

##### `actionGetPrivateConnectivityConfig`<sup>Required</sup> <a name="actionGetPrivateConnectivityConfig" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetPrivateConnectivityConfig"></a>

```typescript
public readonly actionGetPrivateConnectivityConfig: string;
```

- *Type:* string

[Read] outposts:GetPrivateConnectivityConfig.

---

##### `actionGetQuote`<sup>Required</sup> <a name="actionGetQuote" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetQuote"></a>

```typescript
public readonly actionGetQuote: string;
```

- *Type:* string

[Read] outposts:GetQuote.

---

##### `actionGetRenewalPricing`<sup>Required</sup> <a name="actionGetRenewalPricing" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetRenewalPricing"></a>

```typescript
public readonly actionGetRenewalPricing: string;
```

- *Type:* string

[Read] outposts:GetRenewalPricing.

---

##### `actionGetSite`<sup>Required</sup> <a name="actionGetSite" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetSite"></a>

```typescript
public readonly actionGetSite: string;
```

- *Type:* string

[Read] outposts:GetSite.

---

##### `actionGetSiteAddress`<sup>Required</sup> <a name="actionGetSiteAddress" id="@cdk_utils/iam.outposts.OutpostsActions.property.actionGetSiteAddress"></a>

```typescript
public readonly actionGetSiteAddress: string;
```

- *Type:* string

[Read] outposts:GetSiteAddress.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.outposts.OutpostsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.outposts.OutpostsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.outposts.OutpostsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.outposts.OutpostsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.outposts.OutpostsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelCapacityTask`<sup>Required</sup> <a name="CancelCapacityTask" id="@cdk_utils/iam.outposts.OutpostsActions.property.CancelCapacityTask"></a>

```typescript
public readonly CancelCapacityTask: string;
```

- *Type:* string

[Write] outposts:CancelCapacityTask.

---

##### `CancelOrder`<sup>Required</sup> <a name="CancelOrder" id="@cdk_utils/iam.outposts.OutpostsActions.property.CancelOrder"></a>

```typescript
public readonly CancelOrder: string;
```

- *Type:* string

[Write] outposts:CancelOrder.

---

##### `CreateOrder`<sup>Required</sup> <a name="CreateOrder" id="@cdk_utils/iam.outposts.OutpostsActions.property.CreateOrder"></a>

```typescript
public readonly CreateOrder: string;
```

- *Type:* string

[Write] outposts:CreateOrder.

---

##### `CreateOutpost`<sup>Required</sup> <a name="CreateOutpost" id="@cdk_utils/iam.outposts.OutpostsActions.property.CreateOutpost"></a>

```typescript
public readonly CreateOutpost: string;
```

- *Type:* string

[Write] outposts:CreateOutpost.

---

##### `CreatePrivateConnectivityConfig`<sup>Required</sup> <a name="CreatePrivateConnectivityConfig" id="@cdk_utils/iam.outposts.OutpostsActions.property.CreatePrivateConnectivityConfig"></a>

```typescript
public readonly CreatePrivateConnectivityConfig: string;
```

- *Type:* string

[Write] outposts:CreatePrivateConnectivityConfig.

---

##### `CreateQuote`<sup>Required</sup> <a name="CreateQuote" id="@cdk_utils/iam.outposts.OutpostsActions.property.CreateQuote"></a>

```typescript
public readonly CreateQuote: string;
```

- *Type:* string

[Write] outposts:CreateQuote.

---

##### `CreateRenewal`<sup>Required</sup> <a name="CreateRenewal" id="@cdk_utils/iam.outposts.OutpostsActions.property.CreateRenewal"></a>

```typescript
public readonly CreateRenewal: string;
```

- *Type:* string

[Write] outposts:CreateRenewal.

---

##### `CreateSite`<sup>Required</sup> <a name="CreateSite" id="@cdk_utils/iam.outposts.OutpostsActions.property.CreateSite"></a>

```typescript
public readonly CreateSite: string;
```

- *Type:* string

[Write] outposts:CreateSite.

---

##### `DeleteOutpost`<sup>Required</sup> <a name="DeleteOutpost" id="@cdk_utils/iam.outposts.OutpostsActions.property.DeleteOutpost"></a>

```typescript
public readonly DeleteOutpost: string;
```

- *Type:* string

[Write] outposts:DeleteOutpost.

---

##### `DeleteQuote`<sup>Required</sup> <a name="DeleteQuote" id="@cdk_utils/iam.outposts.OutpostsActions.property.DeleteQuote"></a>

```typescript
public readonly DeleteQuote: string;
```

- *Type:* string

[Write] outposts:DeleteQuote.

---

##### `DeleteSite`<sup>Required</sup> <a name="DeleteSite" id="@cdk_utils/iam.outposts.OutpostsActions.property.DeleteSite"></a>

```typescript
public readonly DeleteSite: string;
```

- *Type:* string

[Write] outposts:DeleteSite.

---

##### `ListAssetInstances`<sup>Required</sup> <a name="ListAssetInstances" id="@cdk_utils/iam.outposts.OutpostsActions.property.ListAssetInstances"></a>

```typescript
public readonly ListAssetInstances: string;
```

- *Type:* string

[List] outposts:ListAssetInstances.

---

##### `ListAssets`<sup>Required</sup> <a name="ListAssets" id="@cdk_utils/iam.outposts.OutpostsActions.property.ListAssets"></a>

```typescript
public readonly ListAssets: string;
```

- *Type:* string

[List] outposts:ListAssets.

---

##### `ListBlockingInstancesForCapacityTask`<sup>Required</sup> <a name="ListBlockingInstancesForCapacityTask" id="@cdk_utils/iam.outposts.OutpostsActions.property.ListBlockingInstancesForCapacityTask"></a>

```typescript
public readonly ListBlockingInstancesForCapacityTask: string;
```

- *Type:* string

[List] outposts:ListBlockingInstancesForCapacityTask.

---

##### `ListCapacityTasks`<sup>Required</sup> <a name="ListCapacityTasks" id="@cdk_utils/iam.outposts.OutpostsActions.property.ListCapacityTasks"></a>

```typescript
public readonly ListCapacityTasks: string;
```

- *Type:* string

[List] outposts:ListCapacityTasks.

---

##### `ListCatalogItems`<sup>Required</sup> <a name="ListCatalogItems" id="@cdk_utils/iam.outposts.OutpostsActions.property.ListCatalogItems"></a>

```typescript
public readonly ListCatalogItems: string;
```

- *Type:* string

[List] outposts:ListCatalogItems.

---

##### `ListOrderableInstanceTypes`<sup>Required</sup> <a name="ListOrderableInstanceTypes" id="@cdk_utils/iam.outposts.OutpostsActions.property.ListOrderableInstanceTypes"></a>

```typescript
public readonly ListOrderableInstanceTypes: string;
```

- *Type:* string

[List] outposts:ListOrderableInstanceTypes.

---

##### `ListOrders`<sup>Required</sup> <a name="ListOrders" id="@cdk_utils/iam.outposts.OutpostsActions.property.ListOrders"></a>

```typescript
public readonly ListOrders: string;
```

- *Type:* string

[List] outposts:ListOrders.

---

##### `ListOutposts`<sup>Required</sup> <a name="ListOutposts" id="@cdk_utils/iam.outposts.OutpostsActions.property.ListOutposts"></a>

```typescript
public readonly ListOutposts: string;
```

- *Type:* string

[List] outposts:ListOutposts.

---

##### `ListQuotes`<sup>Required</sup> <a name="ListQuotes" id="@cdk_utils/iam.outposts.OutpostsActions.property.ListQuotes"></a>

```typescript
public readonly ListQuotes: string;
```

- *Type:* string

[List] outposts:ListQuotes.

---

##### `ListSites`<sup>Required</sup> <a name="ListSites" id="@cdk_utils/iam.outposts.OutpostsActions.property.ListSites"></a>

```typescript
public readonly ListSites: string;
```

- *Type:* string

[List] outposts:ListSites.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.outposts.OutpostsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] outposts:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.outposts.OutpostsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCapacityTask`<sup>Required</sup> <a name="StartCapacityTask" id="@cdk_utils/iam.outposts.OutpostsActions.property.StartCapacityTask"></a>

```typescript
public readonly StartCapacityTask: string;
```

- *Type:* string

[Write] outposts:StartCapacityTask.

---

##### `StartConnection`<sup>Required</sup> <a name="StartConnection" id="@cdk_utils/iam.outposts.OutpostsActions.property.StartConnection"></a>

```typescript
public readonly StartConnection: string;
```

- *Type:* string

[Write] outposts:StartConnection.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.outposts.OutpostsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] outposts:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.outposts.OutpostsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] outposts:UntagResource.

---

##### `UpdateOutpost`<sup>Required</sup> <a name="UpdateOutpost" id="@cdk_utils/iam.outposts.OutpostsActions.property.UpdateOutpost"></a>

```typescript
public readonly UpdateOutpost: string;
```

- *Type:* string

[Write] outposts:UpdateOutpost.

---

##### `UpdateQuote`<sup>Required</sup> <a name="UpdateQuote" id="@cdk_utils/iam.outposts.OutpostsActions.property.UpdateQuote"></a>

```typescript
public readonly UpdateQuote: string;
```

- *Type:* string

[Write] outposts:UpdateQuote.

---

##### `UpdateSite`<sup>Required</sup> <a name="UpdateSite" id="@cdk_utils/iam.outposts.OutpostsActions.property.UpdateSite"></a>

```typescript
public readonly UpdateSite: string;
```

- *Type:* string

[Write] outposts:UpdateSite.

---

##### `UpdateSiteAddress`<sup>Required</sup> <a name="UpdateSiteAddress" id="@cdk_utils/iam.outposts.OutpostsActions.property.UpdateSiteAddress"></a>

```typescript
public readonly UpdateSiteAddress: string;
```

- *Type:* string

[Write] outposts:UpdateSiteAddress.

---

##### `UpdateSiteRackPhysicalProperties`<sup>Required</sup> <a name="UpdateSiteRackPhysicalProperties" id="@cdk_utils/iam.outposts.OutpostsActions.property.UpdateSiteRackPhysicalProperties"></a>

```typescript
public readonly UpdateSiteRackPhysicalProperties: string;
```

- *Type:* string

[Write] outposts:UpdateSiteRackPhysicalProperties.

---

### OutpostsConditions <a name="OutpostsConditions" id="@cdk_utils/iam.outposts.OutpostsConditions"></a>

Condition key constants and builders for outposts.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.outposts.OutpostsConditions.Initializer"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

new outposts.OutpostsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.outposts.OutpostsConditions.requestTag"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

outposts.OutpostsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.outposts.OutpostsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.outposts.OutpostsConditions.resourceTag"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

outposts.OutpostsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.outposts.OutpostsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.outposts.OutpostsConditions.tagKeys"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

outposts.OutpostsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.outposts.OutpostsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsConditions.property.CreateOutpostConditionKeys">CreateOutpostConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOutpost action. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsConditions.property.CreateSiteConditionKeys">CreateSiteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSite action. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.outposts.OutpostsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.outposts.OutpostsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.outposts.OutpostsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateOutpostConditionKeys`<sup>Required</sup> <a name="CreateOutpostConditionKeys" id="@cdk_utils/iam.outposts.OutpostsConditions.property.CreateOutpostConditionKeys"></a>

```typescript
public readonly CreateOutpostConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOutpost action.

---

##### `CreateSiteConditionKeys`<sup>Required</sup> <a name="CreateSiteConditionKeys" id="@cdk_utils/iam.outposts.OutpostsConditions.property.CreateSiteConditionKeys"></a>

```typescript
public readonly CreateSiteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSite action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.outposts.OutpostsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.outposts.OutpostsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### OutpostsOperations <a name="OutpostsOperations" id="@cdk_utils/iam.outposts.OutpostsOperations"></a>

API operation to required IAM actions mapping for outposts.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.outposts.OutpostsOperations.Initializer"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

new outposts.OutpostsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.CancelCapacityTask">CancelCapacityTask</a></code> | <code>string[]</code> | IAM actions required for the CancelCapacityTask API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.CancelOrder">CancelOrder</a></code> | <code>string[]</code> | IAM actions required for the CancelOrder API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.CreateOrder">CreateOrder</a></code> | <code>string[]</code> | IAM actions required for the CreateOrder API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.CreateOutpost">CreateOutpost</a></code> | <code>string[]</code> | IAM actions required for the CreateOutpost API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.CreateQuote">CreateQuote</a></code> | <code>string[]</code> | IAM actions required for the CreateQuote API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.CreateRenewal">CreateRenewal</a></code> | <code>string[]</code> | IAM actions required for the CreateRenewal API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.CreateSite">CreateSite</a></code> | <code>string[]</code> | IAM actions required for the CreateSite API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.DeleteOutpost">DeleteOutpost</a></code> | <code>string[]</code> | IAM actions required for the DeleteOutpost API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.DeleteQuote">DeleteQuote</a></code> | <code>string[]</code> | IAM actions required for the DeleteQuote API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.DeleteSite">DeleteSite</a></code> | <code>string[]</code> | IAM actions required for the DeleteSite API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.ListAssetInstances">ListAssetInstances</a></code> | <code>string[]</code> | IAM actions required for the ListAssetInstances API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.ListAssets">ListAssets</a></code> | <code>string[]</code> | IAM actions required for the ListAssets API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.ListBlockingInstancesForCapacityTask">ListBlockingInstancesForCapacityTask</a></code> | <code>string[]</code> | IAM actions required for the ListBlockingInstancesForCapacityTask API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.ListCapacityTasks">ListCapacityTasks</a></code> | <code>string[]</code> | IAM actions required for the ListCapacityTasks API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.ListCatalogItems">ListCatalogItems</a></code> | <code>string[]</code> | IAM actions required for the ListCatalogItems API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.ListOrderableInstanceTypes">ListOrderableInstanceTypes</a></code> | <code>string[]</code> | IAM actions required for the ListOrderableInstanceTypes API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.ListOrders">ListOrders</a></code> | <code>string[]</code> | IAM actions required for the ListOrders API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.ListOutposts">ListOutposts</a></code> | <code>string[]</code> | IAM actions required for the ListOutposts API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.ListQuotes">ListQuotes</a></code> | <code>string[]</code> | IAM actions required for the ListQuotes API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.ListSites">ListSites</a></code> | <code>string[]</code> | IAM actions required for the ListSites API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetCapacityTask">opGetCapacityTask</a></code> | <code>string[]</code> | IAM actions required for the GetCapacityTask API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetCatalogItem">opGetCatalogItem</a></code> | <code>string[]</code> | IAM actions required for the GetCatalogItem API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetConnection">opGetConnection</a></code> | <code>string[]</code> | IAM actions required for the GetConnection API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetOrder">opGetOrder</a></code> | <code>string[]</code> | IAM actions required for the GetOrder API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetOutpost">opGetOutpost</a></code> | <code>string[]</code> | IAM actions required for the GetOutpost API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetOutpostBillingInformation">opGetOutpostBillingInformation</a></code> | <code>string[]</code> | IAM actions required for the GetOutpostBillingInformation API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetOutpostInstanceTypes">opGetOutpostInstanceTypes</a></code> | <code>string[]</code> | IAM actions required for the GetOutpostInstanceTypes API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetOutpostSupportedInstanceTypes">opGetOutpostSupportedInstanceTypes</a></code> | <code>string[]</code> | IAM actions required for the GetOutpostSupportedInstanceTypes API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetQuote">opGetQuote</a></code> | <code>string[]</code> | IAM actions required for the GetQuote API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetRenewalPricing">opGetRenewalPricing</a></code> | <code>string[]</code> | IAM actions required for the GetRenewalPricing API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetSite">opGetSite</a></code> | <code>string[]</code> | IAM actions required for the GetSite API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.opGetSiteAddress">opGetSiteAddress</a></code> | <code>string[]</code> | IAM actions required for the GetSiteAddress API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.StartCapacityTask">StartCapacityTask</a></code> | <code>string[]</code> | IAM actions required for the StartCapacityTask API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.StartConnection">StartConnection</a></code> | <code>string[]</code> | IAM actions required for the StartConnection API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.StartOutpostDecommission">StartOutpostDecommission</a></code> | <code>string[]</code> | IAM actions required for the StartOutpostDecommission API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.UpdateOutpost">UpdateOutpost</a></code> | <code>string[]</code> | IAM actions required for the UpdateOutpost API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.UpdateQuote">UpdateQuote</a></code> | <code>string[]</code> | IAM actions required for the UpdateQuote API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.UpdateSite">UpdateSite</a></code> | <code>string[]</code> | IAM actions required for the UpdateSite API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.UpdateSiteAddress">UpdateSiteAddress</a></code> | <code>string[]</code> | IAM actions required for the UpdateSiteAddress API call. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsOperations.property.UpdateSiteRackPhysicalProperties">UpdateSiteRackPhysicalProperties</a></code> | <code>string[]</code> | IAM actions required for the UpdateSiteRackPhysicalProperties API call. |

---

##### `CancelCapacityTask`<sup>Required</sup> <a name="CancelCapacityTask" id="@cdk_utils/iam.outposts.OutpostsOperations.property.CancelCapacityTask"></a>

```typescript
public readonly CancelCapacityTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelCapacityTask API call.

---

##### `CancelOrder`<sup>Required</sup> <a name="CancelOrder" id="@cdk_utils/iam.outposts.OutpostsOperations.property.CancelOrder"></a>

```typescript
public readonly CancelOrder: string[];
```

- *Type:* string[]

IAM actions required for the CancelOrder API call.

---

##### `CreateOrder`<sup>Required</sup> <a name="CreateOrder" id="@cdk_utils/iam.outposts.OutpostsOperations.property.CreateOrder"></a>

```typescript
public readonly CreateOrder: string[];
```

- *Type:* string[]

IAM actions required for the CreateOrder API call.

---

##### `CreateOutpost`<sup>Required</sup> <a name="CreateOutpost" id="@cdk_utils/iam.outposts.OutpostsOperations.property.CreateOutpost"></a>

```typescript
public readonly CreateOutpost: string[];
```

- *Type:* string[]

IAM actions required for the CreateOutpost API call.

---

##### `CreateQuote`<sup>Required</sup> <a name="CreateQuote" id="@cdk_utils/iam.outposts.OutpostsOperations.property.CreateQuote"></a>

```typescript
public readonly CreateQuote: string[];
```

- *Type:* string[]

IAM actions required for the CreateQuote API call.

---

##### `CreateRenewal`<sup>Required</sup> <a name="CreateRenewal" id="@cdk_utils/iam.outposts.OutpostsOperations.property.CreateRenewal"></a>

```typescript
public readonly CreateRenewal: string[];
```

- *Type:* string[]

IAM actions required for the CreateRenewal API call.

---

##### `CreateSite`<sup>Required</sup> <a name="CreateSite" id="@cdk_utils/iam.outposts.OutpostsOperations.property.CreateSite"></a>

```typescript
public readonly CreateSite: string[];
```

- *Type:* string[]

IAM actions required for the CreateSite API call.

---

##### `DeleteOutpost`<sup>Required</sup> <a name="DeleteOutpost" id="@cdk_utils/iam.outposts.OutpostsOperations.property.DeleteOutpost"></a>

```typescript
public readonly DeleteOutpost: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOutpost API call.

---

##### `DeleteQuote`<sup>Required</sup> <a name="DeleteQuote" id="@cdk_utils/iam.outposts.OutpostsOperations.property.DeleteQuote"></a>

```typescript
public readonly DeleteQuote: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQuote API call.

---

##### `DeleteSite`<sup>Required</sup> <a name="DeleteSite" id="@cdk_utils/iam.outposts.OutpostsOperations.property.DeleteSite"></a>

```typescript
public readonly DeleteSite: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSite API call.

---

##### `ListAssetInstances`<sup>Required</sup> <a name="ListAssetInstances" id="@cdk_utils/iam.outposts.OutpostsOperations.property.ListAssetInstances"></a>

```typescript
public readonly ListAssetInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetInstances API call.

---

##### `ListAssets`<sup>Required</sup> <a name="ListAssets" id="@cdk_utils/iam.outposts.OutpostsOperations.property.ListAssets"></a>

```typescript
public readonly ListAssets: string[];
```

- *Type:* string[]

IAM actions required for the ListAssets API call.

---

##### `ListBlockingInstancesForCapacityTask`<sup>Required</sup> <a name="ListBlockingInstancesForCapacityTask" id="@cdk_utils/iam.outposts.OutpostsOperations.property.ListBlockingInstancesForCapacityTask"></a>

```typescript
public readonly ListBlockingInstancesForCapacityTask: string[];
```

- *Type:* string[]

IAM actions required for the ListBlockingInstancesForCapacityTask API call.

---

##### `ListCapacityTasks`<sup>Required</sup> <a name="ListCapacityTasks" id="@cdk_utils/iam.outposts.OutpostsOperations.property.ListCapacityTasks"></a>

```typescript
public readonly ListCapacityTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListCapacityTasks API call.

---

##### `ListCatalogItems`<sup>Required</sup> <a name="ListCatalogItems" id="@cdk_utils/iam.outposts.OutpostsOperations.property.ListCatalogItems"></a>

```typescript
public readonly ListCatalogItems: string[];
```

- *Type:* string[]

IAM actions required for the ListCatalogItems API call.

---

##### `ListOrderableInstanceTypes`<sup>Required</sup> <a name="ListOrderableInstanceTypes" id="@cdk_utils/iam.outposts.OutpostsOperations.property.ListOrderableInstanceTypes"></a>

```typescript
public readonly ListOrderableInstanceTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListOrderableInstanceTypes API call.

---

##### `ListOrders`<sup>Required</sup> <a name="ListOrders" id="@cdk_utils/iam.outposts.OutpostsOperations.property.ListOrders"></a>

```typescript
public readonly ListOrders: string[];
```

- *Type:* string[]

IAM actions required for the ListOrders API call.

---

##### `ListOutposts`<sup>Required</sup> <a name="ListOutposts" id="@cdk_utils/iam.outposts.OutpostsOperations.property.ListOutposts"></a>

```typescript
public readonly ListOutposts: string[];
```

- *Type:* string[]

IAM actions required for the ListOutposts API call.

---

##### `ListQuotes`<sup>Required</sup> <a name="ListQuotes" id="@cdk_utils/iam.outposts.OutpostsOperations.property.ListQuotes"></a>

```typescript
public readonly ListQuotes: string[];
```

- *Type:* string[]

IAM actions required for the ListQuotes API call.

---

##### `ListSites`<sup>Required</sup> <a name="ListSites" id="@cdk_utils/iam.outposts.OutpostsOperations.property.ListSites"></a>

```typescript
public readonly ListSites: string[];
```

- *Type:* string[]

IAM actions required for the ListSites API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.outposts.OutpostsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetCapacityTask`<sup>Required</sup> <a name="opGetCapacityTask" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetCapacityTask"></a>

```typescript
public readonly opGetCapacityTask: string[];
```

- *Type:* string[]

IAM actions required for the GetCapacityTask API call.

---

##### `opGetCatalogItem`<sup>Required</sup> <a name="opGetCatalogItem" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetCatalogItem"></a>

```typescript
public readonly opGetCatalogItem: string[];
```

- *Type:* string[]

IAM actions required for the GetCatalogItem API call.

---

##### `opGetConnection`<sup>Required</sup> <a name="opGetConnection" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetConnection"></a>

```typescript
public readonly opGetConnection: string[];
```

- *Type:* string[]

IAM actions required for the GetConnection API call.

---

##### `opGetOrder`<sup>Required</sup> <a name="opGetOrder" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetOrder"></a>

```typescript
public readonly opGetOrder: string[];
```

- *Type:* string[]

IAM actions required for the GetOrder API call.

---

##### `opGetOutpost`<sup>Required</sup> <a name="opGetOutpost" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetOutpost"></a>

```typescript
public readonly opGetOutpost: string[];
```

- *Type:* string[]

IAM actions required for the GetOutpost API call.

---

##### `opGetOutpostBillingInformation`<sup>Required</sup> <a name="opGetOutpostBillingInformation" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetOutpostBillingInformation"></a>

```typescript
public readonly opGetOutpostBillingInformation: string[];
```

- *Type:* string[]

IAM actions required for the GetOutpostBillingInformation API call.

---

##### `opGetOutpostInstanceTypes`<sup>Required</sup> <a name="opGetOutpostInstanceTypes" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetOutpostInstanceTypes"></a>

```typescript
public readonly opGetOutpostInstanceTypes: string[];
```

- *Type:* string[]

IAM actions required for the GetOutpostInstanceTypes API call.

---

##### `opGetOutpostSupportedInstanceTypes`<sup>Required</sup> <a name="opGetOutpostSupportedInstanceTypes" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetOutpostSupportedInstanceTypes"></a>

```typescript
public readonly opGetOutpostSupportedInstanceTypes: string[];
```

- *Type:* string[]

IAM actions required for the GetOutpostSupportedInstanceTypes API call.

---

##### `opGetQuote`<sup>Required</sup> <a name="opGetQuote" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetQuote"></a>

```typescript
public readonly opGetQuote: string[];
```

- *Type:* string[]

IAM actions required for the GetQuote API call.

---

##### `opGetRenewalPricing`<sup>Required</sup> <a name="opGetRenewalPricing" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetRenewalPricing"></a>

```typescript
public readonly opGetRenewalPricing: string[];
```

- *Type:* string[]

IAM actions required for the GetRenewalPricing API call.

---

##### `opGetSite`<sup>Required</sup> <a name="opGetSite" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetSite"></a>

```typescript
public readonly opGetSite: string[];
```

- *Type:* string[]

IAM actions required for the GetSite API call.

---

##### `opGetSiteAddress`<sup>Required</sup> <a name="opGetSiteAddress" id="@cdk_utils/iam.outposts.OutpostsOperations.property.opGetSiteAddress"></a>

```typescript
public readonly opGetSiteAddress: string[];
```

- *Type:* string[]

IAM actions required for the GetSiteAddress API call.

---

##### `StartCapacityTask`<sup>Required</sup> <a name="StartCapacityTask" id="@cdk_utils/iam.outposts.OutpostsOperations.property.StartCapacityTask"></a>

```typescript
public readonly StartCapacityTask: string[];
```

- *Type:* string[]

IAM actions required for the StartCapacityTask API call.

---

##### `StartConnection`<sup>Required</sup> <a name="StartConnection" id="@cdk_utils/iam.outposts.OutpostsOperations.property.StartConnection"></a>

```typescript
public readonly StartConnection: string[];
```

- *Type:* string[]

IAM actions required for the StartConnection API call.

---

##### `StartOutpostDecommission`<sup>Required</sup> <a name="StartOutpostDecommission" id="@cdk_utils/iam.outposts.OutpostsOperations.property.StartOutpostDecommission"></a>

```typescript
public readonly StartOutpostDecommission: string[];
```

- *Type:* string[]

IAM actions required for the StartOutpostDecommission API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.outposts.OutpostsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.outposts.OutpostsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateOutpost`<sup>Required</sup> <a name="UpdateOutpost" id="@cdk_utils/iam.outposts.OutpostsOperations.property.UpdateOutpost"></a>

```typescript
public readonly UpdateOutpost: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOutpost API call.

---

##### `UpdateQuote`<sup>Required</sup> <a name="UpdateQuote" id="@cdk_utils/iam.outposts.OutpostsOperations.property.UpdateQuote"></a>

```typescript
public readonly UpdateQuote: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQuote API call.

---

##### `UpdateSite`<sup>Required</sup> <a name="UpdateSite" id="@cdk_utils/iam.outposts.OutpostsOperations.property.UpdateSite"></a>

```typescript
public readonly UpdateSite: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSite API call.

---

##### `UpdateSiteAddress`<sup>Required</sup> <a name="UpdateSiteAddress" id="@cdk_utils/iam.outposts.OutpostsOperations.property.UpdateSiteAddress"></a>

```typescript
public readonly UpdateSiteAddress: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSiteAddress API call.

---

##### `UpdateSiteRackPhysicalProperties`<sup>Required</sup> <a name="UpdateSiteRackPhysicalProperties" id="@cdk_utils/iam.outposts.OutpostsOperations.property.UpdateSiteRackPhysicalProperties"></a>

```typescript
public readonly UpdateSiteRackPhysicalProperties: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSiteRackPhysicalProperties API call.

---

### OutpostsResources <a name="OutpostsResources" id="@cdk_utils/iam.outposts.OutpostsResources"></a>

ARN builders, validators, and parsers for outposts resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.outposts.OutpostsResources.Initializer"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

new outposts.OutpostsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsResources.isValidOutpostArn">isValidOutpostArn</a></code> | Validates whether a string is a valid ARN for the outpost resource. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsResources.isValidSiteArn">isValidSiteArn</a></code> | Validates whether a string is a valid ARN for the site resource. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsResources.outpost">outpost</a></code> | Builds an ARN for the outpost resource. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsResources.parseOutpostArn">parseOutpostArn</a></code> | Parses a outpost ARN into its components. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsResources.parseSiteArn">parseSiteArn</a></code> | Parses a site ARN into its components. |
| <code><a href="#@cdk_utils/iam.outposts.OutpostsResources.site">site</a></code> | Builds an ARN for the site resource. |

---

##### `isValidOutpostArn` <a name="isValidOutpostArn" id="@cdk_utils/iam.outposts.OutpostsResources.isValidOutpostArn"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

outposts.OutpostsResources.isValidOutpostArn(arn: string)
```

Validates whether a string is a valid ARN for the outpost resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.outposts.OutpostsResources.isValidOutpostArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSiteArn` <a name="isValidSiteArn" id="@cdk_utils/iam.outposts.OutpostsResources.isValidSiteArn"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

outposts.OutpostsResources.isValidSiteArn(arn: string)
```

Validates whether a string is a valid ARN for the site resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.outposts.OutpostsResources.isValidSiteArn.parameter.arn"></a>

- *Type:* string

---

##### `outpost` <a name="outpost" id="@cdk_utils/iam.outposts.OutpostsResources.outpost"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

outposts.OutpostsResources.outpost(props: OutpostsOutpostArnProps)
```

Builds an ARN for the outpost resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.outposts.OutpostsResources.outpost.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.outposts.OutpostsOutpostArnProps">OutpostsOutpostArnProps</a>

---

##### `parseOutpostArn` <a name="parseOutpostArn" id="@cdk_utils/iam.outposts.OutpostsResources.parseOutpostArn"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

outposts.OutpostsResources.parseOutpostArn(arn: string)
```

Parses a outpost ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.outposts.OutpostsResources.parseOutpostArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSiteArn` <a name="parseSiteArn" id="@cdk_utils/iam.outposts.OutpostsResources.parseSiteArn"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

outposts.OutpostsResources.parseSiteArn(arn: string)
```

Parses a site ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.outposts.OutpostsResources.parseSiteArn.parameter.arn"></a>

- *Type:* string

---

##### `site` <a name="site" id="@cdk_utils/iam.outposts.OutpostsResources.site"></a>

```typescript
import { outposts } from '@cdk_utils/iam'

outposts.OutpostsResources.site(props: OutpostsSiteArnProps)
```

Builds an ARN for the site resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.outposts.OutpostsResources.site.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.outposts.OutpostsSiteArnProps">OutpostsSiteArnProps</a>

---




