# `aws_marketplace_management` Submodule <a name="`aws_marketplace_management` Submodule" id="@cdk_utils/iam.aws_marketplace_management"></a>



## Classes <a name="Classes" id="Classes"></a>

### AWSMarketplaceManagementActions <a name="AWSMarketplaceManagementActions" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions"></a>

IAM action constants for the aws-marketplace-management service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.Initializer"></a>

```typescript
import { aws_marketplace_management } from '@cdk_utils/iam'

new aws_marketplace_management.AWSMarketplaceManagementActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.actionGetAdditionalSellerNotificationRecipients">actionGetAdditionalSellerNotificationRecipients</a></code> | <code>string</code> | [Read] aws-marketplace-management:GetAdditionalSellerNotificationRecipients. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.actionGetBankAccountVerificationDetails">actionGetBankAccountVerificationDetails</a></code> | <code>string</code> | [Read] aws-marketplace-management:GetBankAccountVerificationDetails. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.actionGetSecondaryUserVerificationDetails">actionGetSecondaryUserVerificationDetails</a></code> | <code>string</code> | [Read] aws-marketplace-management:GetSecondaryUserVerificationDetails. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.actionGetSellerVerificationDetails">actionGetSellerVerificationDetails</a></code> | <code>string</code> | [Read] aws-marketplace-management:GetSellerVerificationDetails. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.PutAdditionalSellerNotificationRecipients">PutAdditionalSellerNotificationRecipients</a></code> | <code>string</code> | [Write] aws-marketplace-management:PutAdditionalSellerNotificationRecipients. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.PutBankAccountVerificationDetails">PutBankAccountVerificationDetails</a></code> | <code>string</code> | [Write] aws-marketplace-management:PutBankAccountVerificationDetails. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.PutSecondaryUserVerificationDetails">PutSecondaryUserVerificationDetails</a></code> | <code>string</code> | [Write] aws-marketplace-management:PutSecondaryUserVerificationDetails. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.PutSellerVerificationDetails">PutSellerVerificationDetails</a></code> | <code>string</code> | [Write] aws-marketplace-management:PutSellerVerificationDetails. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.uploadFiles">uploadFiles</a></code> | <code>string</code> | [Write] aws-marketplace-management:uploadFiles. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.viewMarketing">viewMarketing</a></code> | <code>string</code> | [List] aws-marketplace-management:viewMarketing. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.viewReports">viewReports</a></code> | <code>string</code> | [List] aws-marketplace-management:viewReports. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.viewSettings">viewSettings</a></code> | <code>string</code> | [List] aws-marketplace-management:viewSettings. |
| <code><a href="#@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.viewSupport">viewSupport</a></code> | <code>string</code> | [List] aws-marketplace-management:viewSupport. |

---

##### `actionGetAdditionalSellerNotificationRecipients`<sup>Required</sup> <a name="actionGetAdditionalSellerNotificationRecipients" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.actionGetAdditionalSellerNotificationRecipients"></a>

```typescript
public readonly actionGetAdditionalSellerNotificationRecipients: string;
```

- *Type:* string

[Read] aws-marketplace-management:GetAdditionalSellerNotificationRecipients.

---

##### `actionGetBankAccountVerificationDetails`<sup>Required</sup> <a name="actionGetBankAccountVerificationDetails" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.actionGetBankAccountVerificationDetails"></a>

```typescript
public readonly actionGetBankAccountVerificationDetails: string;
```

- *Type:* string

[Read] aws-marketplace-management:GetBankAccountVerificationDetails.

---

##### `actionGetSecondaryUserVerificationDetails`<sup>Required</sup> <a name="actionGetSecondaryUserVerificationDetails" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.actionGetSecondaryUserVerificationDetails"></a>

```typescript
public readonly actionGetSecondaryUserVerificationDetails: string;
```

- *Type:* string

[Read] aws-marketplace-management:GetSecondaryUserVerificationDetails.

---

##### `actionGetSellerVerificationDetails`<sup>Required</sup> <a name="actionGetSellerVerificationDetails" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.actionGetSellerVerificationDetails"></a>

```typescript
public readonly actionGetSellerVerificationDetails: string;
```

- *Type:* string

[Read] aws-marketplace-management:GetSellerVerificationDetails.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `PutAdditionalSellerNotificationRecipients`<sup>Required</sup> <a name="PutAdditionalSellerNotificationRecipients" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.PutAdditionalSellerNotificationRecipients"></a>

```typescript
public readonly PutAdditionalSellerNotificationRecipients: string;
```

- *Type:* string

[Write] aws-marketplace-management:PutAdditionalSellerNotificationRecipients.

---

##### `PutBankAccountVerificationDetails`<sup>Required</sup> <a name="PutBankAccountVerificationDetails" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.PutBankAccountVerificationDetails"></a>

```typescript
public readonly PutBankAccountVerificationDetails: string;
```

- *Type:* string

[Write] aws-marketplace-management:PutBankAccountVerificationDetails.

---

##### `PutSecondaryUserVerificationDetails`<sup>Required</sup> <a name="PutSecondaryUserVerificationDetails" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.PutSecondaryUserVerificationDetails"></a>

```typescript
public readonly PutSecondaryUserVerificationDetails: string;
```

- *Type:* string

[Write] aws-marketplace-management:PutSecondaryUserVerificationDetails.

---

##### `PutSellerVerificationDetails`<sup>Required</sup> <a name="PutSellerVerificationDetails" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.PutSellerVerificationDetails"></a>

```typescript
public readonly PutSellerVerificationDetails: string;
```

- *Type:* string

[Write] aws-marketplace-management:PutSellerVerificationDetails.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `uploadFiles`<sup>Required</sup> <a name="uploadFiles" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.uploadFiles"></a>

```typescript
public readonly uploadFiles: string;
```

- *Type:* string

[Write] aws-marketplace-management:uploadFiles.

---

##### `viewMarketing`<sup>Required</sup> <a name="viewMarketing" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.viewMarketing"></a>

```typescript
public readonly viewMarketing: string;
```

- *Type:* string

[List] aws-marketplace-management:viewMarketing.

---

##### `viewReports`<sup>Required</sup> <a name="viewReports" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.viewReports"></a>

```typescript
public readonly viewReports: string;
```

- *Type:* string

[List] aws-marketplace-management:viewReports.

---

##### `viewSettings`<sup>Required</sup> <a name="viewSettings" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.viewSettings"></a>

```typescript
public readonly viewSettings: string;
```

- *Type:* string

[List] aws-marketplace-management:viewSettings.

---

##### `viewSupport`<sup>Required</sup> <a name="viewSupport" id="@cdk_utils/iam.aws_marketplace_management.AWSMarketplaceManagementActions.property.viewSupport"></a>

```typescript
public readonly viewSupport: string;
```

- *Type:* string

[List] aws-marketplace-management:viewSupport.

---


