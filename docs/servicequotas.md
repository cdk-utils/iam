# `servicequotas` Submodule <a name="`servicequotas` Submodule" id="@cdk_utils/iam.servicequotas"></a>


## Structs <a name="Structs" id="Structs"></a>

### ServicequotasQuotaArnComponents <a name="ServicequotasQuotaArnComponents" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents"></a>

Parsed components of a quota ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents.Initializer"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

const servicequotasQuotaArnComponents: servicequotas.ServicequotasQuotaArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents.property.quotaCode">quotaCode</a></code> | <code>string</code> | The QuotaCode component. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents.property.serviceCode">serviceCode</a></code> | <code>string</code> | The ServiceCode component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `quotaCode`<sup>Required</sup> <a name="quotaCode" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents.property.quotaCode"></a>

```typescript
public readonly quotaCode: string;
```

- *Type:* string

The QuotaCode component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnComponents.property.serviceCode"></a>

```typescript
public readonly serviceCode: string;
```

- *Type:* string

The ServiceCode component.

---

### ServicequotasQuotaArnProps <a name="ServicequotasQuotaArnProps" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps"></a>

Properties for building a quota ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps.Initializer"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

const servicequotasQuotaArnProps: servicequotas.ServicequotasQuotaArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps.property.quotaCode">quotaCode</a></code> | <code>string</code> | The QuotaCode component of the ARN. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps.property.serviceCode">serviceCode</a></code> | <code>string</code> | The ServiceCode component of the ARN. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `quotaCode`<sup>Required</sup> <a name="quotaCode" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps.property.quotaCode"></a>

```typescript
public readonly quotaCode: string;
```

- *Type:* string

The QuotaCode component of the ARN.

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps.property.serviceCode"></a>

```typescript
public readonly serviceCode: string;
```

- *Type:* string

The ServiceCode component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ServicequotasActions <a name="ServicequotasActions" id="@cdk_utils/iam.servicequotas.ServicequotasActions"></a>

IAM action constants for the servicequotas service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicequotas.ServicequotasActions.Initializer"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

new servicequotas.ServicequotasActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetAssociationForServiceQuotaTemplate">actionGetAssociationForServiceQuotaTemplate</a></code> | <code>string</code> | [Read] servicequotas:GetAssociationForServiceQuotaTemplate. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetAutoManagementConfiguration">actionGetAutoManagementConfiguration</a></code> | <code>string</code> | [Read] servicequotas:GetAutoManagementConfiguration. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetAWSDefaultServiceQuota">actionGetAWSDefaultServiceQuota</a></code> | <code>string</code> | [Read] servicequotas:GetAWSDefaultServiceQuota. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetQuotaUtilizationReport">actionGetQuotaUtilizationReport</a></code> | <code>string</code> | [Read] servicequotas:GetQuotaUtilizationReport. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetRequestedServiceQuotaChange">actionGetRequestedServiceQuotaChange</a></code> | <code>string</code> | [Read] servicequotas:GetRequestedServiceQuotaChange. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetServiceQuota">actionGetServiceQuota</a></code> | <code>string</code> | [Read] servicequotas:GetServiceQuota. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetServiceQuotaIncreaseRequestFromTemplate">actionGetServiceQuotaIncreaseRequestFromTemplate</a></code> | <code>string</code> | [Read] servicequotas:GetServiceQuotaIncreaseRequestFromTemplate. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.AssociateServiceQuotaTemplate">AssociateServiceQuotaTemplate</a></code> | <code>string</code> | [Write] servicequotas:AssociateServiceQuotaTemplate. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.CreateSupportCase">CreateSupportCase</a></code> | <code>string</code> | [Write] servicequotas:CreateSupportCase. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.DeleteServiceQuotaIncreaseRequestFromTemplate">DeleteServiceQuotaIncreaseRequestFromTemplate</a></code> | <code>string</code> | [Write] servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.DisassociateServiceQuotaTemplate">DisassociateServiceQuotaTemplate</a></code> | <code>string</code> | [Write] servicequotas:DisassociateServiceQuotaTemplate. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListAWSDefaultServiceQuotas">ListAWSDefaultServiceQuotas</a></code> | <code>string</code> | [Read] servicequotas:ListAWSDefaultServiceQuotas. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListRequestedServiceQuotaChangeHistory">ListRequestedServiceQuotaChangeHistory</a></code> | <code>string</code> | [Read] servicequotas:ListRequestedServiceQuotaChangeHistory. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListRequestedServiceQuotaChangeHistoryByQuota">ListRequestedServiceQuotaChangeHistoryByQuota</a></code> | <code>string</code> | [Read] servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListServiceQuotaIncreaseRequestsInTemplate">ListServiceQuotaIncreaseRequestsInTemplate</a></code> | <code>string</code> | [Read] servicequotas:ListServiceQuotaIncreaseRequestsInTemplate. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListServiceQuotas">ListServiceQuotas</a></code> | <code>string</code> | [Read] servicequotas:ListServiceQuotas. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListServices">ListServices</a></code> | <code>string</code> | [Read] servicequotas:ListServices. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] servicequotas:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.PutServiceQuotaIncreaseRequestIntoTemplate">PutServiceQuotaIncreaseRequestIntoTemplate</a></code> | <code>string</code> | [Write] servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.RequestServiceQuotaIncrease">RequestServiceQuotaIncrease</a></code> | <code>string</code> | [Write] servicequotas:RequestServiceQuotaIncrease. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.StartAutoManagement">StartAutoManagement</a></code> | <code>string</code> | [Write] servicequotas:StartAutoManagement. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.StartQuotaUtilizationReport">StartQuotaUtilizationReport</a></code> | <code>string</code> | [Read] servicequotas:StartQuotaUtilizationReport. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.StopAutoManagement">StopAutoManagement</a></code> | <code>string</code> | [Write] servicequotas:StopAutoManagement. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] servicequotas:TagResource. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] servicequotas:UntagResource. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasActions.property.UpdateAutoManagement">UpdateAutoManagement</a></code> | <code>string</code> | [Write] servicequotas:UpdateAutoManagement. |

---

##### `actionGetAssociationForServiceQuotaTemplate`<sup>Required</sup> <a name="actionGetAssociationForServiceQuotaTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetAssociationForServiceQuotaTemplate"></a>

```typescript
public readonly actionGetAssociationForServiceQuotaTemplate: string;
```

- *Type:* string

[Read] servicequotas:GetAssociationForServiceQuotaTemplate.

---

##### `actionGetAutoManagementConfiguration`<sup>Required</sup> <a name="actionGetAutoManagementConfiguration" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetAutoManagementConfiguration"></a>

```typescript
public readonly actionGetAutoManagementConfiguration: string;
```

- *Type:* string

[Read] servicequotas:GetAutoManagementConfiguration.

---

##### `actionGetAWSDefaultServiceQuota`<sup>Required</sup> <a name="actionGetAWSDefaultServiceQuota" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetAWSDefaultServiceQuota"></a>

```typescript
public readonly actionGetAWSDefaultServiceQuota: string;
```

- *Type:* string

[Read] servicequotas:GetAWSDefaultServiceQuota.

---

##### `actionGetQuotaUtilizationReport`<sup>Required</sup> <a name="actionGetQuotaUtilizationReport" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetQuotaUtilizationReport"></a>

```typescript
public readonly actionGetQuotaUtilizationReport: string;
```

- *Type:* string

[Read] servicequotas:GetQuotaUtilizationReport.

---

##### `actionGetRequestedServiceQuotaChange`<sup>Required</sup> <a name="actionGetRequestedServiceQuotaChange" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetRequestedServiceQuotaChange"></a>

```typescript
public readonly actionGetRequestedServiceQuotaChange: string;
```

- *Type:* string

[Read] servicequotas:GetRequestedServiceQuotaChange.

---

##### `actionGetServiceQuota`<sup>Required</sup> <a name="actionGetServiceQuota" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetServiceQuota"></a>

```typescript
public readonly actionGetServiceQuota: string;
```

- *Type:* string

[Read] servicequotas:GetServiceQuota.

---

##### `actionGetServiceQuotaIncreaseRequestFromTemplate`<sup>Required</sup> <a name="actionGetServiceQuotaIncreaseRequestFromTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.actionGetServiceQuotaIncreaseRequestFromTemplate"></a>

```typescript
public readonly actionGetServiceQuotaIncreaseRequestFromTemplate: string;
```

- *Type:* string

[Read] servicequotas:GetServiceQuotaIncreaseRequestFromTemplate.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateServiceQuotaTemplate`<sup>Required</sup> <a name="AssociateServiceQuotaTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.AssociateServiceQuotaTemplate"></a>

```typescript
public readonly AssociateServiceQuotaTemplate: string;
```

- *Type:* string

[Write] servicequotas:AssociateServiceQuotaTemplate.

---

##### `CreateSupportCase`<sup>Required</sup> <a name="CreateSupportCase" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.CreateSupportCase"></a>

```typescript
public readonly CreateSupportCase: string;
```

- *Type:* string

[Write] servicequotas:CreateSupportCase.

---

##### `DeleteServiceQuotaIncreaseRequestFromTemplate`<sup>Required</sup> <a name="DeleteServiceQuotaIncreaseRequestFromTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.DeleteServiceQuotaIncreaseRequestFromTemplate"></a>

```typescript
public readonly DeleteServiceQuotaIncreaseRequestFromTemplate: string;
```

- *Type:* string

[Write] servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate.

---

##### `DisassociateServiceQuotaTemplate`<sup>Required</sup> <a name="DisassociateServiceQuotaTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.DisassociateServiceQuotaTemplate"></a>

```typescript
public readonly DisassociateServiceQuotaTemplate: string;
```

- *Type:* string

[Write] servicequotas:DisassociateServiceQuotaTemplate.

---

##### `ListAWSDefaultServiceQuotas`<sup>Required</sup> <a name="ListAWSDefaultServiceQuotas" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListAWSDefaultServiceQuotas"></a>

```typescript
public readonly ListAWSDefaultServiceQuotas: string;
```

- *Type:* string

[Read] servicequotas:ListAWSDefaultServiceQuotas.

---

##### `ListRequestedServiceQuotaChangeHistory`<sup>Required</sup> <a name="ListRequestedServiceQuotaChangeHistory" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListRequestedServiceQuotaChangeHistory"></a>

```typescript
public readonly ListRequestedServiceQuotaChangeHistory: string;
```

- *Type:* string

[Read] servicequotas:ListRequestedServiceQuotaChangeHistory.

---

##### `ListRequestedServiceQuotaChangeHistoryByQuota`<sup>Required</sup> <a name="ListRequestedServiceQuotaChangeHistoryByQuota" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListRequestedServiceQuotaChangeHistoryByQuota"></a>

```typescript
public readonly ListRequestedServiceQuotaChangeHistoryByQuota: string;
```

- *Type:* string

[Read] servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota.

---

##### `ListServiceQuotaIncreaseRequestsInTemplate`<sup>Required</sup> <a name="ListServiceQuotaIncreaseRequestsInTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListServiceQuotaIncreaseRequestsInTemplate"></a>

```typescript
public readonly ListServiceQuotaIncreaseRequestsInTemplate: string;
```

- *Type:* string

[Read] servicequotas:ListServiceQuotaIncreaseRequestsInTemplate.

---

##### `ListServiceQuotas`<sup>Required</sup> <a name="ListServiceQuotas" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListServiceQuotas"></a>

```typescript
public readonly ListServiceQuotas: string;
```

- *Type:* string

[Read] servicequotas:ListServiceQuotas.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[Read] servicequotas:ListServices.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] servicequotas:ListTagsForResource.

---

##### `PutServiceQuotaIncreaseRequestIntoTemplate`<sup>Required</sup> <a name="PutServiceQuotaIncreaseRequestIntoTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.PutServiceQuotaIncreaseRequestIntoTemplate"></a>

```typescript
public readonly PutServiceQuotaIncreaseRequestIntoTemplate: string;
```

- *Type:* string

[Write] servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate.

---

##### `RequestServiceQuotaIncrease`<sup>Required</sup> <a name="RequestServiceQuotaIncrease" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.RequestServiceQuotaIncrease"></a>

```typescript
public readonly RequestServiceQuotaIncrease: string;
```

- *Type:* string

[Write] servicequotas:RequestServiceQuotaIncrease.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAutoManagement`<sup>Required</sup> <a name="StartAutoManagement" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.StartAutoManagement"></a>

```typescript
public readonly StartAutoManagement: string;
```

- *Type:* string

[Write] servicequotas:StartAutoManagement.

---

##### `StartQuotaUtilizationReport`<sup>Required</sup> <a name="StartQuotaUtilizationReport" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.StartQuotaUtilizationReport"></a>

```typescript
public readonly StartQuotaUtilizationReport: string;
```

- *Type:* string

[Read] servicequotas:StartQuotaUtilizationReport.

---

##### `StopAutoManagement`<sup>Required</sup> <a name="StopAutoManagement" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.StopAutoManagement"></a>

```typescript
public readonly StopAutoManagement: string;
```

- *Type:* string

[Write] servicequotas:StopAutoManagement.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] servicequotas:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] servicequotas:UntagResource.

---

##### `UpdateAutoManagement`<sup>Required</sup> <a name="UpdateAutoManagement" id="@cdk_utils/iam.servicequotas.ServicequotasActions.property.UpdateAutoManagement"></a>

```typescript
public readonly UpdateAutoManagement: string;
```

- *Type:* string

[Write] servicequotas:UpdateAutoManagement.

---

### ServicequotasConditions <a name="ServicequotasConditions" id="@cdk_utils/iam.servicequotas.ServicequotasConditions"></a>

Condition key constants and builders for servicequotas.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.Initializer"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

new servicequotas.ServicequotasConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.service">service</a></code> | Generates a condition block for `servicequotas:service`. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.requestTag"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

servicequotas.ServicequotasConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.resourceTag"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

servicequotas.ServicequotasConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `service` <a name="service" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.service"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

servicequotas.ServicequotasConditions.service(value: string)
```

Generates a condition block for `servicequotas:service`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.service.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.tagKeys"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

servicequotas.ServicequotasConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.property.actionGetServiceQuotaConditionKeys">actionGetServiceQuotaConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetServiceQuota action. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.property.actionGetServiceQuotaIncreaseRequestFromTemplateConditionKeys">actionGetServiceQuotaIncreaseRequestFromTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetServiceQuotaIncreaseRequestFromTemplate action. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.property.ListRequestedServiceQuotaChangeHistoryByQuotaConditionKeys">ListRequestedServiceQuotaChangeHistoryByQuotaConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRequestedServiceQuotaChangeHistoryByQuota action. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.property.PutServiceQuotaIncreaseRequestIntoTemplateConditionKeys">PutServiceQuotaIncreaseRequestIntoTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutServiceQuotaIncreaseRequestIntoTemplate action. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.property.RequestServiceQuotaIncreaseConditionKeys">RequestServiceQuotaIncreaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RequestServiceQuotaIncrease action. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.property.SERVICE">SERVICE</a></code> | <code>string</code> | Condition key: servicequotas:service (String). |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetServiceQuotaConditionKeys`<sup>Required</sup> <a name="actionGetServiceQuotaConditionKeys" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.property.actionGetServiceQuotaConditionKeys"></a>

```typescript
public readonly actionGetServiceQuotaConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetServiceQuota action.

---

##### `actionGetServiceQuotaIncreaseRequestFromTemplateConditionKeys`<sup>Required</sup> <a name="actionGetServiceQuotaIncreaseRequestFromTemplateConditionKeys" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.property.actionGetServiceQuotaIncreaseRequestFromTemplateConditionKeys"></a>

```typescript
public readonly actionGetServiceQuotaIncreaseRequestFromTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetServiceQuotaIncreaseRequestFromTemplate action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `ListRequestedServiceQuotaChangeHistoryByQuotaConditionKeys`<sup>Required</sup> <a name="ListRequestedServiceQuotaChangeHistoryByQuotaConditionKeys" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.property.ListRequestedServiceQuotaChangeHistoryByQuotaConditionKeys"></a>

```typescript
public readonly ListRequestedServiceQuotaChangeHistoryByQuotaConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRequestedServiceQuotaChangeHistoryByQuota action.

---

##### `PutServiceQuotaIncreaseRequestIntoTemplateConditionKeys`<sup>Required</sup> <a name="PutServiceQuotaIncreaseRequestIntoTemplateConditionKeys" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.property.PutServiceQuotaIncreaseRequestIntoTemplateConditionKeys"></a>

```typescript
public readonly PutServiceQuotaIncreaseRequestIntoTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutServiceQuotaIncreaseRequestIntoTemplate action.

---

##### `RequestServiceQuotaIncreaseConditionKeys`<sup>Required</sup> <a name="RequestServiceQuotaIncreaseConditionKeys" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.property.RequestServiceQuotaIncreaseConditionKeys"></a>

```typescript
public readonly RequestServiceQuotaIncreaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RequestServiceQuotaIncrease action.

---

##### `SERVICE`<sup>Required</sup> <a name="SERVICE" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.property.SERVICE"></a>

```typescript
public readonly SERVICE: string;
```

- *Type:* string

Condition key: servicequotas:service (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.servicequotas.ServicequotasConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ServicequotasOperations <a name="ServicequotasOperations" id="@cdk_utils/iam.servicequotas.ServicequotasOperations"></a>

API operation to required IAM actions mapping for servicequotas.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.Initializer"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

new servicequotas.ServicequotasOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.AssociateServiceQuotaTemplate">AssociateServiceQuotaTemplate</a></code> | <code>string[]</code> | IAM actions required for the AssociateServiceQuotaTemplate API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.CreateSupportCase">CreateSupportCase</a></code> | <code>string[]</code> | IAM actions required for the CreateSupportCase API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.DeleteServiceQuotaIncreaseRequestFromTemplate">DeleteServiceQuotaIncreaseRequestFromTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceQuotaIncreaseRequestFromTemplate API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.DisassociateServiceQuotaTemplate">DisassociateServiceQuotaTemplate</a></code> | <code>string[]</code> | IAM actions required for the DisassociateServiceQuotaTemplate API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListAWSDefaultServiceQuotas">ListAWSDefaultServiceQuotas</a></code> | <code>string[]</code> | IAM actions required for the ListAWSDefaultServiceQuotas API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListRequestedServiceQuotaChangeHistory">ListRequestedServiceQuotaChangeHistory</a></code> | <code>string[]</code> | IAM actions required for the ListRequestedServiceQuotaChangeHistory API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListRequestedServiceQuotaChangeHistoryByQuota">ListRequestedServiceQuotaChangeHistoryByQuota</a></code> | <code>string[]</code> | IAM actions required for the ListRequestedServiceQuotaChangeHistoryByQuota API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListServiceQuotaIncreaseRequestsInTemplate">ListServiceQuotaIncreaseRequestsInTemplate</a></code> | <code>string[]</code> | IAM actions required for the ListServiceQuotaIncreaseRequestsInTemplate API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListServiceQuotas">ListServiceQuotas</a></code> | <code>string[]</code> | IAM actions required for the ListServiceQuotas API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListServices">ListServices</a></code> | <code>string[]</code> | IAM actions required for the ListServices API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetAssociationForServiceQuotaTemplate">opGetAssociationForServiceQuotaTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetAssociationForServiceQuotaTemplate API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetAutoManagementConfiguration">opGetAutoManagementConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetAutoManagementConfiguration API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetAWSDefaultServiceQuota">opGetAWSDefaultServiceQuota</a></code> | <code>string[]</code> | IAM actions required for the GetAWSDefaultServiceQuota API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetQuotaUtilizationReport">opGetQuotaUtilizationReport</a></code> | <code>string[]</code> | IAM actions required for the GetQuotaUtilizationReport API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetRequestedServiceQuotaChange">opGetRequestedServiceQuotaChange</a></code> | <code>string[]</code> | IAM actions required for the GetRequestedServiceQuotaChange API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetServiceQuota">opGetServiceQuota</a></code> | <code>string[]</code> | IAM actions required for the GetServiceQuota API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetServiceQuotaIncreaseRequestFromTemplate">opGetServiceQuotaIncreaseRequestFromTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetServiceQuotaIncreaseRequestFromTemplate API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.PutServiceQuotaIncreaseRequestIntoTemplate">PutServiceQuotaIncreaseRequestIntoTemplate</a></code> | <code>string[]</code> | IAM actions required for the PutServiceQuotaIncreaseRequestIntoTemplate API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.RequestServiceQuotaIncrease">RequestServiceQuotaIncrease</a></code> | <code>string[]</code> | IAM actions required for the RequestServiceQuotaIncrease API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.StartAutoManagement">StartAutoManagement</a></code> | <code>string[]</code> | IAM actions required for the StartAutoManagement API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.StartQuotaUtilizationReport">StartQuotaUtilizationReport</a></code> | <code>string[]</code> | IAM actions required for the StartQuotaUtilizationReport API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.StopAutoManagement">StopAutoManagement</a></code> | <code>string[]</code> | IAM actions required for the StopAutoManagement API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasOperations.property.UpdateAutoManagement">UpdateAutoManagement</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutoManagement API call. |

---

##### `AssociateServiceQuotaTemplate`<sup>Required</sup> <a name="AssociateServiceQuotaTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.AssociateServiceQuotaTemplate"></a>

```typescript
public readonly AssociateServiceQuotaTemplate: string[];
```

- *Type:* string[]

IAM actions required for the AssociateServiceQuotaTemplate API call.

---

##### `CreateSupportCase`<sup>Required</sup> <a name="CreateSupportCase" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.CreateSupportCase"></a>

```typescript
public readonly CreateSupportCase: string[];
```

- *Type:* string[]

IAM actions required for the CreateSupportCase API call.

---

##### `DeleteServiceQuotaIncreaseRequestFromTemplate`<sup>Required</sup> <a name="DeleteServiceQuotaIncreaseRequestFromTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.DeleteServiceQuotaIncreaseRequestFromTemplate"></a>

```typescript
public readonly DeleteServiceQuotaIncreaseRequestFromTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceQuotaIncreaseRequestFromTemplate API call.

---

##### `DisassociateServiceQuotaTemplate`<sup>Required</sup> <a name="DisassociateServiceQuotaTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.DisassociateServiceQuotaTemplate"></a>

```typescript
public readonly DisassociateServiceQuotaTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateServiceQuotaTemplate API call.

---

##### `ListAWSDefaultServiceQuotas`<sup>Required</sup> <a name="ListAWSDefaultServiceQuotas" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListAWSDefaultServiceQuotas"></a>

```typescript
public readonly ListAWSDefaultServiceQuotas: string[];
```

- *Type:* string[]

IAM actions required for the ListAWSDefaultServiceQuotas API call.

---

##### `ListRequestedServiceQuotaChangeHistory`<sup>Required</sup> <a name="ListRequestedServiceQuotaChangeHistory" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListRequestedServiceQuotaChangeHistory"></a>

```typescript
public readonly ListRequestedServiceQuotaChangeHistory: string[];
```

- *Type:* string[]

IAM actions required for the ListRequestedServiceQuotaChangeHistory API call.

---

##### `ListRequestedServiceQuotaChangeHistoryByQuota`<sup>Required</sup> <a name="ListRequestedServiceQuotaChangeHistoryByQuota" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListRequestedServiceQuotaChangeHistoryByQuota"></a>

```typescript
public readonly ListRequestedServiceQuotaChangeHistoryByQuota: string[];
```

- *Type:* string[]

IAM actions required for the ListRequestedServiceQuotaChangeHistoryByQuota API call.

---

##### `ListServiceQuotaIncreaseRequestsInTemplate`<sup>Required</sup> <a name="ListServiceQuotaIncreaseRequestsInTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListServiceQuotaIncreaseRequestsInTemplate"></a>

```typescript
public readonly ListServiceQuotaIncreaseRequestsInTemplate: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceQuotaIncreaseRequestsInTemplate API call.

---

##### `ListServiceQuotas`<sup>Required</sup> <a name="ListServiceQuotas" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListServiceQuotas"></a>

```typescript
public readonly ListServiceQuotas: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceQuotas API call.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListServices"></a>

```typescript
public readonly ListServices: string[];
```

- *Type:* string[]

IAM actions required for the ListServices API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAssociationForServiceQuotaTemplate`<sup>Required</sup> <a name="opGetAssociationForServiceQuotaTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetAssociationForServiceQuotaTemplate"></a>

```typescript
public readonly opGetAssociationForServiceQuotaTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetAssociationForServiceQuotaTemplate API call.

---

##### `opGetAutoManagementConfiguration`<sup>Required</sup> <a name="opGetAutoManagementConfiguration" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetAutoManagementConfiguration"></a>

```typescript
public readonly opGetAutoManagementConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetAutoManagementConfiguration API call.

---

##### `opGetAWSDefaultServiceQuota`<sup>Required</sup> <a name="opGetAWSDefaultServiceQuota" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetAWSDefaultServiceQuota"></a>

```typescript
public readonly opGetAWSDefaultServiceQuota: string[];
```

- *Type:* string[]

IAM actions required for the GetAWSDefaultServiceQuota API call.

---

##### `opGetQuotaUtilizationReport`<sup>Required</sup> <a name="opGetQuotaUtilizationReport" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetQuotaUtilizationReport"></a>

```typescript
public readonly opGetQuotaUtilizationReport: string[];
```

- *Type:* string[]

IAM actions required for the GetQuotaUtilizationReport API call.

---

##### `opGetRequestedServiceQuotaChange`<sup>Required</sup> <a name="opGetRequestedServiceQuotaChange" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetRequestedServiceQuotaChange"></a>

```typescript
public readonly opGetRequestedServiceQuotaChange: string[];
```

- *Type:* string[]

IAM actions required for the GetRequestedServiceQuotaChange API call.

---

##### `opGetServiceQuota`<sup>Required</sup> <a name="opGetServiceQuota" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetServiceQuota"></a>

```typescript
public readonly opGetServiceQuota: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceQuota API call.

---

##### `opGetServiceQuotaIncreaseRequestFromTemplate`<sup>Required</sup> <a name="opGetServiceQuotaIncreaseRequestFromTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.opGetServiceQuotaIncreaseRequestFromTemplate"></a>

```typescript
public readonly opGetServiceQuotaIncreaseRequestFromTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceQuotaIncreaseRequestFromTemplate API call.

---

##### `PutServiceQuotaIncreaseRequestIntoTemplate`<sup>Required</sup> <a name="PutServiceQuotaIncreaseRequestIntoTemplate" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.PutServiceQuotaIncreaseRequestIntoTemplate"></a>

```typescript
public readonly PutServiceQuotaIncreaseRequestIntoTemplate: string[];
```

- *Type:* string[]

IAM actions required for the PutServiceQuotaIncreaseRequestIntoTemplate API call.

---

##### `RequestServiceQuotaIncrease`<sup>Required</sup> <a name="RequestServiceQuotaIncrease" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.RequestServiceQuotaIncrease"></a>

```typescript
public readonly RequestServiceQuotaIncrease: string[];
```

- *Type:* string[]

IAM actions required for the RequestServiceQuotaIncrease API call.

---

##### `StartAutoManagement`<sup>Required</sup> <a name="StartAutoManagement" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.StartAutoManagement"></a>

```typescript
public readonly StartAutoManagement: string[];
```

- *Type:* string[]

IAM actions required for the StartAutoManagement API call.

---

##### `StartQuotaUtilizationReport`<sup>Required</sup> <a name="StartQuotaUtilizationReport" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.StartQuotaUtilizationReport"></a>

```typescript
public readonly StartQuotaUtilizationReport: string[];
```

- *Type:* string[]

IAM actions required for the StartQuotaUtilizationReport API call.

---

##### `StopAutoManagement`<sup>Required</sup> <a name="StopAutoManagement" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.StopAutoManagement"></a>

```typescript
public readonly StopAutoManagement: string[];
```

- *Type:* string[]

IAM actions required for the StopAutoManagement API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAutoManagement`<sup>Required</sup> <a name="UpdateAutoManagement" id="@cdk_utils/iam.servicequotas.ServicequotasOperations.property.UpdateAutoManagement"></a>

```typescript
public readonly UpdateAutoManagement: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutoManagement API call.

---

### ServicequotasResources <a name="ServicequotasResources" id="@cdk_utils/iam.servicequotas.ServicequotasResources"></a>

ARN builders, validators, and parsers for servicequotas resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.servicequotas.ServicequotasResources.Initializer"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

new servicequotas.ServicequotasResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasResources.isValidQuotaArn">isValidQuotaArn</a></code> | Validates whether a string is a valid ARN for the quota resource. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasResources.parseQuotaArn">parseQuotaArn</a></code> | Parses a quota ARN into its components. |
| <code><a href="#@cdk_utils/iam.servicequotas.ServicequotasResources.quota">quota</a></code> | Builds an ARN for the quota resource. |

---

##### `isValidQuotaArn` <a name="isValidQuotaArn" id="@cdk_utils/iam.servicequotas.ServicequotasResources.isValidQuotaArn"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

servicequotas.ServicequotasResources.isValidQuotaArn(arn: string)
```

Validates whether a string is a valid ARN for the quota resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicequotas.ServicequotasResources.isValidQuotaArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQuotaArn` <a name="parseQuotaArn" id="@cdk_utils/iam.servicequotas.ServicequotasResources.parseQuotaArn"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

servicequotas.ServicequotasResources.parseQuotaArn(arn: string)
```

Parses a quota ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.servicequotas.ServicequotasResources.parseQuotaArn.parameter.arn"></a>

- *Type:* string

---

##### `quota` <a name="quota" id="@cdk_utils/iam.servicequotas.ServicequotasResources.quota"></a>

```typescript
import { servicequotas } from '@cdk_utils/iam'

servicequotas.ServicequotasResources.quota(props: ServicequotasQuotaArnProps)
```

Builds an ARN for the quota resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.servicequotas.ServicequotasResources.quota.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.servicequotas.ServicequotasQuotaArnProps">ServicequotasQuotaArnProps</a>

---




