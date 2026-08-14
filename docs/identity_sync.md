# `identity_sync` Submodule <a name="`identity_sync` Submodule" id="@cdk_utils/iam.identity_sync"></a>


## Structs <a name="Structs" id="Structs"></a>

### IdentitySyncSyncProfileResourceArnComponents <a name="IdentitySyncSyncProfileResourceArnComponents" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnComponents"></a>

Parsed components of a SyncProfileResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnComponents.Initializer"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

const identitySyncSyncProfileResourceArnComponents: identity_sync.IdentitySyncSyncProfileResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnComponents.property.syncProfileName">syncProfileName</a></code> | <code>string</code> | The SyncProfileName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `syncProfileName`<sup>Required</sup> <a name="syncProfileName" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnComponents.property.syncProfileName"></a>

```typescript
public readonly syncProfileName: string;
```

- *Type:* string

The SyncProfileName component.

---

### IdentitySyncSyncProfileResourceArnProps <a name="IdentitySyncSyncProfileResourceArnProps" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnProps"></a>

Properties for building a SyncProfileResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnProps.Initializer"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

const identitySyncSyncProfileResourceArnProps: identity_sync.IdentitySyncSyncProfileResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnProps.property.syncProfileName">syncProfileName</a></code> | <code>string</code> | The SyncProfileName component of the ARN. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `syncProfileName`<sup>Required</sup> <a name="syncProfileName" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnProps.property.syncProfileName"></a>

```typescript
public readonly syncProfileName: string;
```

- *Type:* string

The SyncProfileName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IdentitySyncSyncTargetResourceArnComponents <a name="IdentitySyncSyncTargetResourceArnComponents" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents"></a>

Parsed components of a SyncTargetResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents.Initializer"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

const identitySyncSyncTargetResourceArnComponents: identity_sync.IdentitySyncSyncTargetResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents.property.syncProfileName">syncProfileName</a></code> | <code>string</code> | The SyncProfileName component. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents.property.syncTargetName">syncTargetName</a></code> | <code>string</code> | The SyncTargetName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `syncProfileName`<sup>Required</sup> <a name="syncProfileName" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents.property.syncProfileName"></a>

```typescript
public readonly syncProfileName: string;
```

- *Type:* string

The SyncProfileName component.

---

##### `syncTargetName`<sup>Required</sup> <a name="syncTargetName" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnComponents.property.syncTargetName"></a>

```typescript
public readonly syncTargetName: string;
```

- *Type:* string

The SyncTargetName component.

---

### IdentitySyncSyncTargetResourceArnProps <a name="IdentitySyncSyncTargetResourceArnProps" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps"></a>

Properties for building a SyncTargetResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps.Initializer"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

const identitySyncSyncTargetResourceArnProps: identity_sync.IdentitySyncSyncTargetResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps.property.syncProfileName">syncProfileName</a></code> | <code>string</code> | The SyncProfileName component of the ARN. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps.property.syncTargetName">syncTargetName</a></code> | <code>string</code> | The SyncTargetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `syncProfileName`<sup>Required</sup> <a name="syncProfileName" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps.property.syncProfileName"></a>

```typescript
public readonly syncProfileName: string;
```

- *Type:* string

The SyncProfileName component of the ARN.

---

##### `syncTargetName`<sup>Required</sup> <a name="syncTargetName" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps.property.syncTargetName"></a>

```typescript
public readonly syncTargetName: string;
```

- *Type:* string

The SyncTargetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitySyncActions <a name="IdentitySyncActions" id="@cdk_utils/iam.identity_sync.IdentitySyncActions"></a>

IAM action constants for the identity-sync service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.Initializer"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

new identity_sync.IdentitySyncActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.actionGetSyncProfile">actionGetSyncProfile</a></code> | <code>string</code> | [Read] identity-sync:GetSyncProfile. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.actionGetSyncTarget">actionGetSyncTarget</a></code> | <code>string</code> | [Read] identity-sync:GetSyncTarget. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] identity-sync:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.CreateSyncFilter">CreateSyncFilter</a></code> | <code>string</code> | [Write] identity-sync:CreateSyncFilter. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.CreateSyncProfile">CreateSyncProfile</a></code> | <code>string</code> | [Write] identity-sync:CreateSyncProfile. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.CreateSyncTarget">CreateSyncTarget</a></code> | <code>string</code> | [Write] identity-sync:CreateSyncTarget. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.DeleteSyncFilter">DeleteSyncFilter</a></code> | <code>string</code> | [Write] identity-sync:DeleteSyncFilter. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.DeleteSyncProfile">DeleteSyncProfile</a></code> | <code>string</code> | [Write] identity-sync:DeleteSyncProfile. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.DeleteSyncTarget">DeleteSyncTarget</a></code> | <code>string</code> | [Write] identity-sync:DeleteSyncTarget. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.ListSyncFilters">ListSyncFilters</a></code> | <code>string</code> | [List] identity-sync:ListSyncFilters. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.StartSync">StartSync</a></code> | <code>string</code> | [Write] identity-sync:StartSync. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.StopSync">StopSync</a></code> | <code>string</code> | [Write] identity-sync:StopSync. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncActions.property.UpdateSyncTarget">UpdateSyncTarget</a></code> | <code>string</code> | [Write] identity-sync:UpdateSyncTarget. |

---

##### `actionGetSyncProfile`<sup>Required</sup> <a name="actionGetSyncProfile" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.actionGetSyncProfile"></a>

```typescript
public readonly actionGetSyncProfile: string;
```

- *Type:* string

[Read] identity-sync:GetSyncProfile.

---

##### `actionGetSyncTarget`<sup>Required</sup> <a name="actionGetSyncTarget" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.actionGetSyncTarget"></a>

```typescript
public readonly actionGetSyncTarget: string;
```

- *Type:* string

[Read] identity-sync:GetSyncTarget.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] identity-sync:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateSyncFilter`<sup>Required</sup> <a name="CreateSyncFilter" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.CreateSyncFilter"></a>

```typescript
public readonly CreateSyncFilter: string;
```

- *Type:* string

[Write] identity-sync:CreateSyncFilter.

---

##### `CreateSyncProfile`<sup>Required</sup> <a name="CreateSyncProfile" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.CreateSyncProfile"></a>

```typescript
public readonly CreateSyncProfile: string;
```

- *Type:* string

[Write] identity-sync:CreateSyncProfile.

---

##### `CreateSyncTarget`<sup>Required</sup> <a name="CreateSyncTarget" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.CreateSyncTarget"></a>

```typescript
public readonly CreateSyncTarget: string;
```

- *Type:* string

[Write] identity-sync:CreateSyncTarget.

---

##### `DeleteSyncFilter`<sup>Required</sup> <a name="DeleteSyncFilter" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.DeleteSyncFilter"></a>

```typescript
public readonly DeleteSyncFilter: string;
```

- *Type:* string

[Write] identity-sync:DeleteSyncFilter.

---

##### `DeleteSyncProfile`<sup>Required</sup> <a name="DeleteSyncProfile" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.DeleteSyncProfile"></a>

```typescript
public readonly DeleteSyncProfile: string;
```

- *Type:* string

[Write] identity-sync:DeleteSyncProfile.

---

##### `DeleteSyncTarget`<sup>Required</sup> <a name="DeleteSyncTarget" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.DeleteSyncTarget"></a>

```typescript
public readonly DeleteSyncTarget: string;
```

- *Type:* string

[Write] identity-sync:DeleteSyncTarget.

---

##### `ListSyncFilters`<sup>Required</sup> <a name="ListSyncFilters" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.ListSyncFilters"></a>

```typescript
public readonly ListSyncFilters: string;
```

- *Type:* string

[List] identity-sync:ListSyncFilters.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartSync`<sup>Required</sup> <a name="StartSync" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.StartSync"></a>

```typescript
public readonly StartSync: string;
```

- *Type:* string

[Write] identity-sync:StartSync.

---

##### `StopSync`<sup>Required</sup> <a name="StopSync" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.StopSync"></a>

```typescript
public readonly StopSync: string;
```

- *Type:* string

[Write] identity-sync:StopSync.

---

##### `UpdateSyncTarget`<sup>Required</sup> <a name="UpdateSyncTarget" id="@cdk_utils/iam.identity_sync.IdentitySyncActions.property.UpdateSyncTarget"></a>

```typescript
public readonly UpdateSyncTarget: string;
```

- *Type:* string

[Write] identity-sync:UpdateSyncTarget.

---

### IdentitySyncResources <a name="IdentitySyncResources" id="@cdk_utils/iam.identity_sync.IdentitySyncResources"></a>

ARN builders, validators, and parsers for identity-sync resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.Initializer"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

new identity_sync.IdentitySyncResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncResources.isValidSyncProfileResourceArn">isValidSyncProfileResourceArn</a></code> | Validates whether a string is a valid ARN for the SyncProfileResource resource. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncResources.isValidSyncTargetResourceArn">isValidSyncTargetResourceArn</a></code> | Validates whether a string is a valid ARN for the SyncTargetResource resource. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncResources.parseSyncProfileResourceArn">parseSyncProfileResourceArn</a></code> | Parses a SyncProfileResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncResources.parseSyncTargetResourceArn">parseSyncTargetResourceArn</a></code> | Parses a SyncTargetResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncResources.syncProfileResource">syncProfileResource</a></code> | Builds an ARN for the SyncProfileResource resource. |
| <code><a href="#@cdk_utils/iam.identity_sync.IdentitySyncResources.syncTargetResource">syncTargetResource</a></code> | Builds an ARN for the SyncTargetResource resource. |

---

##### `isValidSyncProfileResourceArn` <a name="isValidSyncProfileResourceArn" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.isValidSyncProfileResourceArn"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

identity_sync.IdentitySyncResources.isValidSyncProfileResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the SyncProfileResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.isValidSyncProfileResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSyncTargetResourceArn` <a name="isValidSyncTargetResourceArn" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.isValidSyncTargetResourceArn"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

identity_sync.IdentitySyncResources.isValidSyncTargetResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the SyncTargetResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.isValidSyncTargetResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSyncProfileResourceArn` <a name="parseSyncProfileResourceArn" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.parseSyncProfileResourceArn"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

identity_sync.IdentitySyncResources.parseSyncProfileResourceArn(arn: string)
```

Parses a SyncProfileResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.parseSyncProfileResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSyncTargetResourceArn` <a name="parseSyncTargetResourceArn" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.parseSyncTargetResourceArn"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

identity_sync.IdentitySyncResources.parseSyncTargetResourceArn(arn: string)
```

Parses a SyncTargetResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.parseSyncTargetResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `syncProfileResource` <a name="syncProfileResource" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.syncProfileResource"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

identity_sync.IdentitySyncResources.syncProfileResource(props: IdentitySyncSyncProfileResourceArnProps)
```

Builds an ARN for the SyncProfileResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.syncProfileResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncProfileResourceArnProps">IdentitySyncSyncProfileResourceArnProps</a>

---

##### `syncTargetResource` <a name="syncTargetResource" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.syncTargetResource"></a>

```typescript
import { identity_sync } from '@cdk_utils/iam'

identity_sync.IdentitySyncResources.syncTargetResource(props: IdentitySyncSyncTargetResourceArnProps)
```

Builds an ARN for the SyncTargetResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.identity_sync.IdentitySyncResources.syncTargetResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.identity_sync.IdentitySyncSyncTargetResourceArnProps">IdentitySyncSyncTargetResourceArnProps</a>

---




