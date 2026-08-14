# `iq_permission` Submodule <a name="`iq_permission` Submodule" id="@cdk_utils/iam.iq_permission"></a>


## Structs <a name="Structs" id="Structs"></a>

### IqPermissionPermissionArnComponents <a name="IqPermissionPermissionArnComponents" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnComponents"></a>

Parsed components of a permission ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnComponents.Initializer"></a>

```typescript
import { iq_permission } from '@cdk_utils/iam'

const iqPermissionPermissionArnComponents: iq_permission.IqPermissionPermissionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionPermissionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionPermissionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionPermissionArnComponents.property.permissionRequestId">permissionRequestId</a></code> | <code>string</code> | The PermissionRequestId component. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionPermissionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `permissionRequestId`<sup>Required</sup> <a name="permissionRequestId" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnComponents.property.permissionRequestId"></a>

```typescript
public readonly permissionRequestId: string;
```

- *Type:* string

The PermissionRequestId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IqPermissionPermissionArnProps <a name="IqPermissionPermissionArnProps" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnProps"></a>

Properties for building a permission ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnProps.Initializer"></a>

```typescript
import { iq_permission } from '@cdk_utils/iam'

const iqPermissionPermissionArnProps: iq_permission.IqPermissionPermissionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionPermissionArnProps.property.permissionRequestId">permissionRequestId</a></code> | <code>string</code> | The PermissionRequestId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionPermissionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionPermissionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionPermissionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `permissionRequestId`<sup>Required</sup> <a name="permissionRequestId" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnProps.property.permissionRequestId"></a>

```typescript
public readonly permissionRequestId: string;
```

- *Type:* string

The PermissionRequestId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iq_permission.IqPermissionPermissionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IqPermissionActions <a name="IqPermissionActions" id="@cdk_utils/iam.iq_permission.IqPermissionActions"></a>

IAM action constants for the iq-permission service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iq_permission.IqPermissionActions.Initializer"></a>

```typescript
import { iq_permission } from '@cdk_utils/iam'

new iq_permission.IqPermissionActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.actionGetPermissionRequest">actionGetPermissionRequest</a></code> | <code>string</code> | [Read] iq-permission:GetPermissionRequest. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.ApproveAccessGrant">ApproveAccessGrant</a></code> | <code>string</code> | [Write] iq-permission:ApproveAccessGrant. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.ApprovePermissionRequest">ApprovePermissionRequest</a></code> | <code>string</code> | [Write] iq-permission:ApprovePermissionRequest. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.AssumePermissionRole">AssumePermissionRole</a></code> | <code>string</code> | [Write] iq-permission:AssumePermissionRole. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.CreatePermissionRequest">CreatePermissionRequest</a></code> | <code>string</code> | [Write] iq-permission:CreatePermissionRequest. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.ListPermissionRequests">ListPermissionRequests</a></code> | <code>string</code> | [Read] iq-permission:ListPermissionRequests. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.RejectPermissionRequest">RejectPermissionRequest</a></code> | <code>string</code> | [Write] iq-permission:RejectPermissionRequest. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.RevokePermissionRequest">RevokePermissionRequest</a></code> | <code>string</code> | [Write] iq-permission:RevokePermissionRequest. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionActions.property.WithdrawPermissionRequest">WithdrawPermissionRequest</a></code> | <code>string</code> | [Write] iq-permission:WithdrawPermissionRequest. |

---

##### `actionGetPermissionRequest`<sup>Required</sup> <a name="actionGetPermissionRequest" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.actionGetPermissionRequest"></a>

```typescript
public readonly actionGetPermissionRequest: string;
```

- *Type:* string

[Read] iq-permission:GetPermissionRequest.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApproveAccessGrant`<sup>Required</sup> <a name="ApproveAccessGrant" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.ApproveAccessGrant"></a>

```typescript
public readonly ApproveAccessGrant: string;
```

- *Type:* string

[Write] iq-permission:ApproveAccessGrant.

---

##### `ApprovePermissionRequest`<sup>Required</sup> <a name="ApprovePermissionRequest" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.ApprovePermissionRequest"></a>

```typescript
public readonly ApprovePermissionRequest: string;
```

- *Type:* string

[Write] iq-permission:ApprovePermissionRequest.

---

##### `AssumePermissionRole`<sup>Required</sup> <a name="AssumePermissionRole" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.AssumePermissionRole"></a>

```typescript
public readonly AssumePermissionRole: string;
```

- *Type:* string

[Write] iq-permission:AssumePermissionRole.

---

##### `CreatePermissionRequest`<sup>Required</sup> <a name="CreatePermissionRequest" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.CreatePermissionRequest"></a>

```typescript
public readonly CreatePermissionRequest: string;
```

- *Type:* string

[Write] iq-permission:CreatePermissionRequest.

---

##### `ListPermissionRequests`<sup>Required</sup> <a name="ListPermissionRequests" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.ListPermissionRequests"></a>

```typescript
public readonly ListPermissionRequests: string;
```

- *Type:* string

[Read] iq-permission:ListPermissionRequests.

---

##### `RejectPermissionRequest`<sup>Required</sup> <a name="RejectPermissionRequest" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.RejectPermissionRequest"></a>

```typescript
public readonly RejectPermissionRequest: string;
```

- *Type:* string

[Write] iq-permission:RejectPermissionRequest.

---

##### `RevokePermissionRequest`<sup>Required</sup> <a name="RevokePermissionRequest" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.RevokePermissionRequest"></a>

```typescript
public readonly RevokePermissionRequest: string;
```

- *Type:* string

[Write] iq-permission:RevokePermissionRequest.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `WithdrawPermissionRequest`<sup>Required</sup> <a name="WithdrawPermissionRequest" id="@cdk_utils/iam.iq_permission.IqPermissionActions.property.WithdrawPermissionRequest"></a>

```typescript
public readonly WithdrawPermissionRequest: string;
```

- *Type:* string

[Write] iq-permission:WithdrawPermissionRequest.

---

### IqPermissionResources <a name="IqPermissionResources" id="@cdk_utils/iam.iq_permission.IqPermissionResources"></a>

ARN builders, validators, and parsers for iq-permission resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iq_permission.IqPermissionResources.Initializer"></a>

```typescript
import { iq_permission } from '@cdk_utils/iam'

new iq_permission.IqPermissionResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionResources.isValidPermissionArn">isValidPermissionArn</a></code> | Validates whether a string is a valid ARN for the permission resource. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionResources.parsePermissionArn">parsePermissionArn</a></code> | Parses a permission ARN into its components. |
| <code><a href="#@cdk_utils/iam.iq_permission.IqPermissionResources.permission">permission</a></code> | Builds an ARN for the permission resource. |

---

##### `isValidPermissionArn` <a name="isValidPermissionArn" id="@cdk_utils/iam.iq_permission.IqPermissionResources.isValidPermissionArn"></a>

```typescript
import { iq_permission } from '@cdk_utils/iam'

iq_permission.IqPermissionResources.isValidPermissionArn(arn: string)
```

Validates whether a string is a valid ARN for the permission resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq_permission.IqPermissionResources.isValidPermissionArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePermissionArn` <a name="parsePermissionArn" id="@cdk_utils/iam.iq_permission.IqPermissionResources.parsePermissionArn"></a>

```typescript
import { iq_permission } from '@cdk_utils/iam'

iq_permission.IqPermissionResources.parsePermissionArn(arn: string)
```

Parses a permission ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iq_permission.IqPermissionResources.parsePermissionArn.parameter.arn"></a>

- *Type:* string

---

##### `permission` <a name="permission" id="@cdk_utils/iam.iq_permission.IqPermissionResources.permission"></a>

```typescript
import { iq_permission } from '@cdk_utils/iam'

iq_permission.IqPermissionResources.permission(props: IqPermissionPermissionArnProps)
```

Builds an ARN for the permission resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iq_permission.IqPermissionResources.permission.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iq_permission.IqPermissionPermissionArnProps">IqPermissionPermissionArnProps</a>

---




