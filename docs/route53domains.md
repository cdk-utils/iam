# `route53domains` Submodule <a name="`route53domains` Submodule" id="@cdk_utils/iam.route53domains"></a>



## Classes <a name="Classes" id="Classes"></a>

### Route53domainsActions <a name="Route53domainsActions" id="@cdk_utils/iam.route53domains.Route53domainsActions"></a>

IAM action constants for the route53domains service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53domains.Route53domainsActions.Initializer"></a>

```typescript
import { route53domains } from '@cdk_utils/iam'

new route53domains.Route53domainsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.AcceptDomainTransferFromAnotherAwsAccount">AcceptDomainTransferFromAnotherAwsAccount</a></code> | <code>string</code> | [Write] route53domains:AcceptDomainTransferFromAnotherAwsAccount. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.actionGetContactReachabilityStatus">actionGetContactReachabilityStatus</a></code> | <code>string</code> | [Read] route53domains:GetContactReachabilityStatus. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.actionGetDomainDetail">actionGetDomainDetail</a></code> | <code>string</code> | [Read] route53domains:GetDomainDetail. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.actionGetDomainSuggestions">actionGetDomainSuggestions</a></code> | <code>string</code> | [Read] route53domains:GetDomainSuggestions. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.actionGetOperationDetail">actionGetOperationDetail</a></code> | <code>string</code> | [Read] route53domains:GetOperationDetail. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.AssociateDelegationSignerToDomain">AssociateDelegationSignerToDomain</a></code> | <code>string</code> | [Write] route53domains:AssociateDelegationSignerToDomain. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.CancelDomainTransferToAnotherAwsAccount">CancelDomainTransferToAnotherAwsAccount</a></code> | <code>string</code> | [Write] route53domains:CancelDomainTransferToAnotherAwsAccount. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.CheckDomainAvailability">CheckDomainAvailability</a></code> | <code>string</code> | [Read] route53domains:CheckDomainAvailability. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.CheckDomainTransferability">CheckDomainTransferability</a></code> | <code>string</code> | [Read] route53domains:CheckDomainTransferability. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] route53domains:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.DeleteTagsForDomain">DeleteTagsForDomain</a></code> | <code>string</code> | [Tagging] route53domains:DeleteTagsForDomain. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.DisableDomainAutoRenew">DisableDomainAutoRenew</a></code> | <code>string</code> | [Write] route53domains:DisableDomainAutoRenew. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.DisableDomainTransferLock">DisableDomainTransferLock</a></code> | <code>string</code> | [Write] route53domains:DisableDomainTransferLock. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.DisassociateDelegationSignerFromDomain">DisassociateDelegationSignerFromDomain</a></code> | <code>string</code> | [Write] route53domains:DisassociateDelegationSignerFromDomain. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.EnableDomainAutoRenew">EnableDomainAutoRenew</a></code> | <code>string</code> | [Write] route53domains:EnableDomainAutoRenew. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.EnableDomainTransferLock">EnableDomainTransferLock</a></code> | <code>string</code> | [Write] route53domains:EnableDomainTransferLock. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] route53domains:ListDomains. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.ListOperations">ListOperations</a></code> | <code>string</code> | [List] route53domains:ListOperations. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.ListPrices">ListPrices</a></code> | <code>string</code> | [List] route53domains:ListPrices. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.ListTagsForDomain">ListTagsForDomain</a></code> | <code>string</code> | [Read] route53domains:ListTagsForDomain. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.PushDomain">PushDomain</a></code> | <code>string</code> | [Write] route53domains:PushDomain. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.RegisterDomain">RegisterDomain</a></code> | <code>string</code> | [Write] route53domains:RegisterDomain. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.RejectDomainTransferFromAnotherAwsAccount">RejectDomainTransferFromAnotherAwsAccount</a></code> | <code>string</code> | [Write] route53domains:RejectDomainTransferFromAnotherAwsAccount. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.RenewDomain">RenewDomain</a></code> | <code>string</code> | [Write] route53domains:RenewDomain. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.ResendContactReachabilityEmail">ResendContactReachabilityEmail</a></code> | <code>string</code> | [Write] route53domains:ResendContactReachabilityEmail. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.ResendOperationAuthorization">ResendOperationAuthorization</a></code> | <code>string</code> | [Write] route53domains:ResendOperationAuthorization. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.RetrieveDomainAuthCode">RetrieveDomainAuthCode</a></code> | <code>string</code> | [Write] route53domains:RetrieveDomainAuthCode. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.TransferDomain">TransferDomain</a></code> | <code>string</code> | [Write] route53domains:TransferDomain. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.TransferDomainToAnotherAwsAccount">TransferDomainToAnotherAwsAccount</a></code> | <code>string</code> | [Write] route53domains:TransferDomainToAnotherAwsAccount. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.UpdateDomainContact">UpdateDomainContact</a></code> | <code>string</code> | [Write] route53domains:UpdateDomainContact. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.UpdateDomainContactPrivacy">UpdateDomainContactPrivacy</a></code> | <code>string</code> | [Write] route53domains:UpdateDomainContactPrivacy. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.UpdateDomainNameservers">UpdateDomainNameservers</a></code> | <code>string</code> | [Write] route53domains:UpdateDomainNameservers. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.UpdateTagsForDomain">UpdateTagsForDomain</a></code> | <code>string</code> | [Tagging] route53domains:UpdateTagsForDomain. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsActions.property.ViewBilling">ViewBilling</a></code> | <code>string</code> | [Read] route53domains:ViewBilling. |

---

##### `AcceptDomainTransferFromAnotherAwsAccount`<sup>Required</sup> <a name="AcceptDomainTransferFromAnotherAwsAccount" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.AcceptDomainTransferFromAnotherAwsAccount"></a>

```typescript
public readonly AcceptDomainTransferFromAnotherAwsAccount: string;
```

- *Type:* string

[Write] route53domains:AcceptDomainTransferFromAnotherAwsAccount.

---

##### `actionGetContactReachabilityStatus`<sup>Required</sup> <a name="actionGetContactReachabilityStatus" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.actionGetContactReachabilityStatus"></a>

```typescript
public readonly actionGetContactReachabilityStatus: string;
```

- *Type:* string

[Read] route53domains:GetContactReachabilityStatus.

---

##### `actionGetDomainDetail`<sup>Required</sup> <a name="actionGetDomainDetail" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.actionGetDomainDetail"></a>

```typescript
public readonly actionGetDomainDetail: string;
```

- *Type:* string

[Read] route53domains:GetDomainDetail.

---

##### `actionGetDomainSuggestions`<sup>Required</sup> <a name="actionGetDomainSuggestions" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.actionGetDomainSuggestions"></a>

```typescript
public readonly actionGetDomainSuggestions: string;
```

- *Type:* string

[Read] route53domains:GetDomainSuggestions.

---

##### `actionGetOperationDetail`<sup>Required</sup> <a name="actionGetOperationDetail" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.actionGetOperationDetail"></a>

```typescript
public readonly actionGetOperationDetail: string;
```

- *Type:* string

[Read] route53domains:GetOperationDetail.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateDelegationSignerToDomain`<sup>Required</sup> <a name="AssociateDelegationSignerToDomain" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.AssociateDelegationSignerToDomain"></a>

```typescript
public readonly AssociateDelegationSignerToDomain: string;
```

- *Type:* string

[Write] route53domains:AssociateDelegationSignerToDomain.

---

##### `CancelDomainTransferToAnotherAwsAccount`<sup>Required</sup> <a name="CancelDomainTransferToAnotherAwsAccount" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.CancelDomainTransferToAnotherAwsAccount"></a>

```typescript
public readonly CancelDomainTransferToAnotherAwsAccount: string;
```

- *Type:* string

[Write] route53domains:CancelDomainTransferToAnotherAwsAccount.

---

##### `CheckDomainAvailability`<sup>Required</sup> <a name="CheckDomainAvailability" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.CheckDomainAvailability"></a>

```typescript
public readonly CheckDomainAvailability: string;
```

- *Type:* string

[Read] route53domains:CheckDomainAvailability.

---

##### `CheckDomainTransferability`<sup>Required</sup> <a name="CheckDomainTransferability" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.CheckDomainTransferability"></a>

```typescript
public readonly CheckDomainTransferability: string;
```

- *Type:* string

[Read] route53domains:CheckDomainTransferability.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] route53domains:DeleteDomain.

---

##### `DeleteTagsForDomain`<sup>Required</sup> <a name="DeleteTagsForDomain" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.DeleteTagsForDomain"></a>

```typescript
public readonly DeleteTagsForDomain: string;
```

- *Type:* string

[Tagging] route53domains:DeleteTagsForDomain.

---

##### `DisableDomainAutoRenew`<sup>Required</sup> <a name="DisableDomainAutoRenew" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.DisableDomainAutoRenew"></a>

```typescript
public readonly DisableDomainAutoRenew: string;
```

- *Type:* string

[Write] route53domains:DisableDomainAutoRenew.

---

##### `DisableDomainTransferLock`<sup>Required</sup> <a name="DisableDomainTransferLock" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.DisableDomainTransferLock"></a>

```typescript
public readonly DisableDomainTransferLock: string;
```

- *Type:* string

[Write] route53domains:DisableDomainTransferLock.

---

##### `DisassociateDelegationSignerFromDomain`<sup>Required</sup> <a name="DisassociateDelegationSignerFromDomain" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.DisassociateDelegationSignerFromDomain"></a>

```typescript
public readonly DisassociateDelegationSignerFromDomain: string;
```

- *Type:* string

[Write] route53domains:DisassociateDelegationSignerFromDomain.

---

##### `EnableDomainAutoRenew`<sup>Required</sup> <a name="EnableDomainAutoRenew" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.EnableDomainAutoRenew"></a>

```typescript
public readonly EnableDomainAutoRenew: string;
```

- *Type:* string

[Write] route53domains:EnableDomainAutoRenew.

---

##### `EnableDomainTransferLock`<sup>Required</sup> <a name="EnableDomainTransferLock" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.EnableDomainTransferLock"></a>

```typescript
public readonly EnableDomainTransferLock: string;
```

- *Type:* string

[Write] route53domains:EnableDomainTransferLock.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] route53domains:ListDomains.

---

##### `ListOperations`<sup>Required</sup> <a name="ListOperations" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.ListOperations"></a>

```typescript
public readonly ListOperations: string;
```

- *Type:* string

[List] route53domains:ListOperations.

---

##### `ListPrices`<sup>Required</sup> <a name="ListPrices" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.ListPrices"></a>

```typescript
public readonly ListPrices: string;
```

- *Type:* string

[List] route53domains:ListPrices.

---

##### `ListTagsForDomain`<sup>Required</sup> <a name="ListTagsForDomain" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.ListTagsForDomain"></a>

```typescript
public readonly ListTagsForDomain: string;
```

- *Type:* string

[Read] route53domains:ListTagsForDomain.

---

##### `PushDomain`<sup>Required</sup> <a name="PushDomain" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.PushDomain"></a>

```typescript
public readonly PushDomain: string;
```

- *Type:* string

[Write] route53domains:PushDomain.

---

##### `RegisterDomain`<sup>Required</sup> <a name="RegisterDomain" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.RegisterDomain"></a>

```typescript
public readonly RegisterDomain: string;
```

- *Type:* string

[Write] route53domains:RegisterDomain.

---

##### `RejectDomainTransferFromAnotherAwsAccount`<sup>Required</sup> <a name="RejectDomainTransferFromAnotherAwsAccount" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.RejectDomainTransferFromAnotherAwsAccount"></a>

```typescript
public readonly RejectDomainTransferFromAnotherAwsAccount: string;
```

- *Type:* string

[Write] route53domains:RejectDomainTransferFromAnotherAwsAccount.

---

##### `RenewDomain`<sup>Required</sup> <a name="RenewDomain" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.RenewDomain"></a>

```typescript
public readonly RenewDomain: string;
```

- *Type:* string

[Write] route53domains:RenewDomain.

---

##### `ResendContactReachabilityEmail`<sup>Required</sup> <a name="ResendContactReachabilityEmail" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.ResendContactReachabilityEmail"></a>

```typescript
public readonly ResendContactReachabilityEmail: string;
```

- *Type:* string

[Write] route53domains:ResendContactReachabilityEmail.

---

##### `ResendOperationAuthorization`<sup>Required</sup> <a name="ResendOperationAuthorization" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.ResendOperationAuthorization"></a>

```typescript
public readonly ResendOperationAuthorization: string;
```

- *Type:* string

[Write] route53domains:ResendOperationAuthorization.

---

##### `RetrieveDomainAuthCode`<sup>Required</sup> <a name="RetrieveDomainAuthCode" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.RetrieveDomainAuthCode"></a>

```typescript
public readonly RetrieveDomainAuthCode: string;
```

- *Type:* string

[Write] route53domains:RetrieveDomainAuthCode.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TransferDomain`<sup>Required</sup> <a name="TransferDomain" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.TransferDomain"></a>

```typescript
public readonly TransferDomain: string;
```

- *Type:* string

[Write] route53domains:TransferDomain.

---

##### `TransferDomainToAnotherAwsAccount`<sup>Required</sup> <a name="TransferDomainToAnotherAwsAccount" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.TransferDomainToAnotherAwsAccount"></a>

```typescript
public readonly TransferDomainToAnotherAwsAccount: string;
```

- *Type:* string

[Write] route53domains:TransferDomainToAnotherAwsAccount.

---

##### `UpdateDomainContact`<sup>Required</sup> <a name="UpdateDomainContact" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.UpdateDomainContact"></a>

```typescript
public readonly UpdateDomainContact: string;
```

- *Type:* string

[Write] route53domains:UpdateDomainContact.

---

##### `UpdateDomainContactPrivacy`<sup>Required</sup> <a name="UpdateDomainContactPrivacy" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.UpdateDomainContactPrivacy"></a>

```typescript
public readonly UpdateDomainContactPrivacy: string;
```

- *Type:* string

[Write] route53domains:UpdateDomainContactPrivacy.

---

##### `UpdateDomainNameservers`<sup>Required</sup> <a name="UpdateDomainNameservers" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.UpdateDomainNameservers"></a>

```typescript
public readonly UpdateDomainNameservers: string;
```

- *Type:* string

[Write] route53domains:UpdateDomainNameservers.

---

##### `UpdateTagsForDomain`<sup>Required</sup> <a name="UpdateTagsForDomain" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.UpdateTagsForDomain"></a>

```typescript
public readonly UpdateTagsForDomain: string;
```

- *Type:* string

[Tagging] route53domains:UpdateTagsForDomain.

---

##### `ViewBilling`<sup>Required</sup> <a name="ViewBilling" id="@cdk_utils/iam.route53domains.Route53domainsActions.property.ViewBilling"></a>

```typescript
public readonly ViewBilling: string;
```

- *Type:* string

[Read] route53domains:ViewBilling.

---

### Route53domainsOperations <a name="Route53domainsOperations" id="@cdk_utils/iam.route53domains.Route53domainsOperations"></a>

API operation to required IAM actions mapping for route53domains.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53domains.Route53domainsOperations.Initializer"></a>

```typescript
import { route53domains } from '@cdk_utils/iam'

new route53domains.Route53domainsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.AcceptDomainTransferFromAnotherAwsAccount">AcceptDomainTransferFromAnotherAwsAccount</a></code> | <code>string[]</code> | IAM actions required for the AcceptDomainTransferFromAnotherAwsAccount API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.AssociateDelegationSignerToDomain">AssociateDelegationSignerToDomain</a></code> | <code>string[]</code> | IAM actions required for the AssociateDelegationSignerToDomain API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.CancelDomainTransferToAnotherAwsAccount">CancelDomainTransferToAnotherAwsAccount</a></code> | <code>string[]</code> | IAM actions required for the CancelDomainTransferToAnotherAwsAccount API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.CheckDomainAvailability">CheckDomainAvailability</a></code> | <code>string[]</code> | IAM actions required for the CheckDomainAvailability API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.CheckDomainTransferability">CheckDomainTransferability</a></code> | <code>string[]</code> | IAM actions required for the CheckDomainTransferability API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.DeleteDomain">DeleteDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomain API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.DeleteTagsForDomain">DeleteTagsForDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteTagsForDomain API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.DisableDomainAutoRenew">DisableDomainAutoRenew</a></code> | <code>string[]</code> | IAM actions required for the DisableDomainAutoRenew API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.DisableDomainTransferLock">DisableDomainTransferLock</a></code> | <code>string[]</code> | IAM actions required for the DisableDomainTransferLock API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.DisassociateDelegationSignerFromDomain">DisassociateDelegationSignerFromDomain</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDelegationSignerFromDomain API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.EnableDomainAutoRenew">EnableDomainAutoRenew</a></code> | <code>string[]</code> | IAM actions required for the EnableDomainAutoRenew API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.EnableDomainTransferLock">EnableDomainTransferLock</a></code> | <code>string[]</code> | IAM actions required for the EnableDomainTransferLock API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.ListDomains">ListDomains</a></code> | <code>string[]</code> | IAM actions required for the ListDomains API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.ListOperations">ListOperations</a></code> | <code>string[]</code> | IAM actions required for the ListOperations API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.ListPrices">ListPrices</a></code> | <code>string[]</code> | IAM actions required for the ListPrices API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.ListTagsForDomain">ListTagsForDomain</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForDomain API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.opGetContactReachabilityStatus">opGetContactReachabilityStatus</a></code> | <code>string[]</code> | IAM actions required for the GetContactReachabilityStatus API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.opGetDomainDetail">opGetDomainDetail</a></code> | <code>string[]</code> | IAM actions required for the GetDomainDetail API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.opGetDomainSuggestions">opGetDomainSuggestions</a></code> | <code>string[]</code> | IAM actions required for the GetDomainSuggestions API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.opGetOperationDetail">opGetOperationDetail</a></code> | <code>string[]</code> | IAM actions required for the GetOperationDetail API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.PushDomain">PushDomain</a></code> | <code>string[]</code> | IAM actions required for the PushDomain API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.RegisterDomain">RegisterDomain</a></code> | <code>string[]</code> | IAM actions required for the RegisterDomain API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.RejectDomainTransferFromAnotherAwsAccount">RejectDomainTransferFromAnotherAwsAccount</a></code> | <code>string[]</code> | IAM actions required for the RejectDomainTransferFromAnotherAwsAccount API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.RenewDomain">RenewDomain</a></code> | <code>string[]</code> | IAM actions required for the RenewDomain API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.ResendContactReachabilityEmail">ResendContactReachabilityEmail</a></code> | <code>string[]</code> | IAM actions required for the ResendContactReachabilityEmail API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.ResendOperationAuthorization">ResendOperationAuthorization</a></code> | <code>string[]</code> | IAM actions required for the ResendOperationAuthorization API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.RetrieveDomainAuthCode">RetrieveDomainAuthCode</a></code> | <code>string[]</code> | IAM actions required for the RetrieveDomainAuthCode API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.TransferDomain">TransferDomain</a></code> | <code>string[]</code> | IAM actions required for the TransferDomain API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.TransferDomainToAnotherAwsAccount">TransferDomainToAnotherAwsAccount</a></code> | <code>string[]</code> | IAM actions required for the TransferDomainToAnotherAwsAccount API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.UpdateDomainContact">UpdateDomainContact</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainContact API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.UpdateDomainContactPrivacy">UpdateDomainContactPrivacy</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainContactPrivacy API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.UpdateDomainNameservers">UpdateDomainNameservers</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainNameservers API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.UpdateTagsForDomain">UpdateTagsForDomain</a></code> | <code>string[]</code> | IAM actions required for the UpdateTagsForDomain API call. |
| <code><a href="#@cdk_utils/iam.route53domains.Route53domainsOperations.property.ViewBilling">ViewBilling</a></code> | <code>string[]</code> | IAM actions required for the ViewBilling API call. |

---

##### `AcceptDomainTransferFromAnotherAwsAccount`<sup>Required</sup> <a name="AcceptDomainTransferFromAnotherAwsAccount" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.AcceptDomainTransferFromAnotherAwsAccount"></a>

```typescript
public readonly AcceptDomainTransferFromAnotherAwsAccount: string[];
```

- *Type:* string[]

IAM actions required for the AcceptDomainTransferFromAnotherAwsAccount API call.

---

##### `AssociateDelegationSignerToDomain`<sup>Required</sup> <a name="AssociateDelegationSignerToDomain" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.AssociateDelegationSignerToDomain"></a>

```typescript
public readonly AssociateDelegationSignerToDomain: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDelegationSignerToDomain API call.

---

##### `CancelDomainTransferToAnotherAwsAccount`<sup>Required</sup> <a name="CancelDomainTransferToAnotherAwsAccount" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.CancelDomainTransferToAnotherAwsAccount"></a>

```typescript
public readonly CancelDomainTransferToAnotherAwsAccount: string[];
```

- *Type:* string[]

IAM actions required for the CancelDomainTransferToAnotherAwsAccount API call.

---

##### `CheckDomainAvailability`<sup>Required</sup> <a name="CheckDomainAvailability" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.CheckDomainAvailability"></a>

```typescript
public readonly CheckDomainAvailability: string[];
```

- *Type:* string[]

IAM actions required for the CheckDomainAvailability API call.

---

##### `CheckDomainTransferability`<sup>Required</sup> <a name="CheckDomainTransferability" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.CheckDomainTransferability"></a>

```typescript
public readonly CheckDomainTransferability: string[];
```

- *Type:* string[]

IAM actions required for the CheckDomainTransferability API call.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomain API call.

---

##### `DeleteTagsForDomain`<sup>Required</sup> <a name="DeleteTagsForDomain" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.DeleteTagsForDomain"></a>

```typescript
public readonly DeleteTagsForDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTagsForDomain API call.

---

##### `DisableDomainAutoRenew`<sup>Required</sup> <a name="DisableDomainAutoRenew" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.DisableDomainAutoRenew"></a>

```typescript
public readonly DisableDomainAutoRenew: string[];
```

- *Type:* string[]

IAM actions required for the DisableDomainAutoRenew API call.

---

##### `DisableDomainTransferLock`<sup>Required</sup> <a name="DisableDomainTransferLock" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.DisableDomainTransferLock"></a>

```typescript
public readonly DisableDomainTransferLock: string[];
```

- *Type:* string[]

IAM actions required for the DisableDomainTransferLock API call.

---

##### `DisassociateDelegationSignerFromDomain`<sup>Required</sup> <a name="DisassociateDelegationSignerFromDomain" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.DisassociateDelegationSignerFromDomain"></a>

```typescript
public readonly DisassociateDelegationSignerFromDomain: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDelegationSignerFromDomain API call.

---

##### `EnableDomainAutoRenew`<sup>Required</sup> <a name="EnableDomainAutoRenew" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.EnableDomainAutoRenew"></a>

```typescript
public readonly EnableDomainAutoRenew: string[];
```

- *Type:* string[]

IAM actions required for the EnableDomainAutoRenew API call.

---

##### `EnableDomainTransferLock`<sup>Required</sup> <a name="EnableDomainTransferLock" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.EnableDomainTransferLock"></a>

```typescript
public readonly EnableDomainTransferLock: string[];
```

- *Type:* string[]

IAM actions required for the EnableDomainTransferLock API call.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.ListDomains"></a>

```typescript
public readonly ListDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListDomains API call.

---

##### `ListOperations`<sup>Required</sup> <a name="ListOperations" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.ListOperations"></a>

```typescript
public readonly ListOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListOperations API call.

---

##### `ListPrices`<sup>Required</sup> <a name="ListPrices" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.ListPrices"></a>

```typescript
public readonly ListPrices: string[];
```

- *Type:* string[]

IAM actions required for the ListPrices API call.

---

##### `ListTagsForDomain`<sup>Required</sup> <a name="ListTagsForDomain" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.ListTagsForDomain"></a>

```typescript
public readonly ListTagsForDomain: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForDomain API call.

---

##### `opGetContactReachabilityStatus`<sup>Required</sup> <a name="opGetContactReachabilityStatus" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.opGetContactReachabilityStatus"></a>

```typescript
public readonly opGetContactReachabilityStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetContactReachabilityStatus API call.

---

##### `opGetDomainDetail`<sup>Required</sup> <a name="opGetDomainDetail" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.opGetDomainDetail"></a>

```typescript
public readonly opGetDomainDetail: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainDetail API call.

---

##### `opGetDomainSuggestions`<sup>Required</sup> <a name="opGetDomainSuggestions" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.opGetDomainSuggestions"></a>

```typescript
public readonly opGetDomainSuggestions: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainSuggestions API call.

---

##### `opGetOperationDetail`<sup>Required</sup> <a name="opGetOperationDetail" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.opGetOperationDetail"></a>

```typescript
public readonly opGetOperationDetail: string[];
```

- *Type:* string[]

IAM actions required for the GetOperationDetail API call.

---

##### `PushDomain`<sup>Required</sup> <a name="PushDomain" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.PushDomain"></a>

```typescript
public readonly PushDomain: string[];
```

- *Type:* string[]

IAM actions required for the PushDomain API call.

---

##### `RegisterDomain`<sup>Required</sup> <a name="RegisterDomain" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.RegisterDomain"></a>

```typescript
public readonly RegisterDomain: string[];
```

- *Type:* string[]

IAM actions required for the RegisterDomain API call.

---

##### `RejectDomainTransferFromAnotherAwsAccount`<sup>Required</sup> <a name="RejectDomainTransferFromAnotherAwsAccount" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.RejectDomainTransferFromAnotherAwsAccount"></a>

```typescript
public readonly RejectDomainTransferFromAnotherAwsAccount: string[];
```

- *Type:* string[]

IAM actions required for the RejectDomainTransferFromAnotherAwsAccount API call.

---

##### `RenewDomain`<sup>Required</sup> <a name="RenewDomain" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.RenewDomain"></a>

```typescript
public readonly RenewDomain: string[];
```

- *Type:* string[]

IAM actions required for the RenewDomain API call.

---

##### `ResendContactReachabilityEmail`<sup>Required</sup> <a name="ResendContactReachabilityEmail" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.ResendContactReachabilityEmail"></a>

```typescript
public readonly ResendContactReachabilityEmail: string[];
```

- *Type:* string[]

IAM actions required for the ResendContactReachabilityEmail API call.

---

##### `ResendOperationAuthorization`<sup>Required</sup> <a name="ResendOperationAuthorization" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.ResendOperationAuthorization"></a>

```typescript
public readonly ResendOperationAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the ResendOperationAuthorization API call.

---

##### `RetrieveDomainAuthCode`<sup>Required</sup> <a name="RetrieveDomainAuthCode" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.RetrieveDomainAuthCode"></a>

```typescript
public readonly RetrieveDomainAuthCode: string[];
```

- *Type:* string[]

IAM actions required for the RetrieveDomainAuthCode API call.

---

##### `TransferDomain`<sup>Required</sup> <a name="TransferDomain" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.TransferDomain"></a>

```typescript
public readonly TransferDomain: string[];
```

- *Type:* string[]

IAM actions required for the TransferDomain API call.

---

##### `TransferDomainToAnotherAwsAccount`<sup>Required</sup> <a name="TransferDomainToAnotherAwsAccount" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.TransferDomainToAnotherAwsAccount"></a>

```typescript
public readonly TransferDomainToAnotherAwsAccount: string[];
```

- *Type:* string[]

IAM actions required for the TransferDomainToAnotherAwsAccount API call.

---

##### `UpdateDomainContact`<sup>Required</sup> <a name="UpdateDomainContact" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.UpdateDomainContact"></a>

```typescript
public readonly UpdateDomainContact: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainContact API call.

---

##### `UpdateDomainContactPrivacy`<sup>Required</sup> <a name="UpdateDomainContactPrivacy" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.UpdateDomainContactPrivacy"></a>

```typescript
public readonly UpdateDomainContactPrivacy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainContactPrivacy API call.

---

##### `UpdateDomainNameservers`<sup>Required</sup> <a name="UpdateDomainNameservers" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.UpdateDomainNameservers"></a>

```typescript
public readonly UpdateDomainNameservers: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainNameservers API call.

---

##### `UpdateTagsForDomain`<sup>Required</sup> <a name="UpdateTagsForDomain" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.UpdateTagsForDomain"></a>

```typescript
public readonly UpdateTagsForDomain: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTagsForDomain API call.

---

##### `ViewBilling`<sup>Required</sup> <a name="ViewBilling" id="@cdk_utils/iam.route53domains.Route53domainsOperations.property.ViewBilling"></a>

```typescript
public readonly ViewBilling: string[];
```

- *Type:* string[]

IAM actions required for the ViewBilling API call.

---


