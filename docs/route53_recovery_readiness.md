# `route53_recovery_readiness` Submodule <a name="`route53_recovery_readiness` Submodule" id="@cdk_utils/iam.route53_recovery_readiness"></a>


## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryReadinessCellArnComponents <a name="Route53RecoveryReadinessCellArnComponents" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnComponents"></a>

Parsed components of a cell ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnComponents.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

const route53RecoveryReadinessCellArnComponents: route53_recovery_readiness.Route53RecoveryReadinessCellArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53RecoveryReadinessCellArnProps <a name="Route53RecoveryReadinessCellArnProps" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnProps"></a>

Properties for building a cell ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnProps.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

const route53RecoveryReadinessCellArnProps: route53_recovery_readiness.Route53RecoveryReadinessCellArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### Route53RecoveryReadinessReadinesscheckArnComponents <a name="Route53RecoveryReadinessReadinesscheckArnComponents" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnComponents"></a>

Parsed components of a readinesscheck ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnComponents.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

const route53RecoveryReadinessReadinesscheckArnComponents: route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53RecoveryReadinessReadinesscheckArnProps <a name="Route53RecoveryReadinessReadinesscheckArnProps" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnProps"></a>

Properties for building a readinesscheck ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnProps.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

const route53RecoveryReadinessReadinesscheckArnProps: route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### Route53RecoveryReadinessRecoverygroupArnComponents <a name="Route53RecoveryReadinessRecoverygroupArnComponents" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnComponents"></a>

Parsed components of a recoverygroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnComponents.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

const route53RecoveryReadinessRecoverygroupArnComponents: route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53RecoveryReadinessRecoverygroupArnProps <a name="Route53RecoveryReadinessRecoverygroupArnProps" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnProps"></a>

Properties for building a recoverygroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnProps.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

const route53RecoveryReadinessRecoverygroupArnProps: route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### Route53RecoveryReadinessResourcesetArnComponents <a name="Route53RecoveryReadinessResourcesetArnComponents" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnComponents"></a>

Parsed components of a resourceset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnComponents.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

const route53RecoveryReadinessResourcesetArnComponents: route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53RecoveryReadinessResourcesetArnProps <a name="Route53RecoveryReadinessResourcesetArnProps" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnProps"></a>

Properties for building a resourceset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnProps.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

const route53RecoveryReadinessResourcesetArnProps: route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryReadinessActions <a name="Route53RecoveryReadinessActions" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions"></a>

IAM action constants for the route53-recovery-readiness service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

new route53_recovery_readiness.Route53RecoveryReadinessActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetArchitectureRecommendations">actionGetArchitectureRecommendations</a></code> | <code>string</code> | [Read] route53-recovery-readiness:GetArchitectureRecommendations. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetCell">actionGetCell</a></code> | <code>string</code> | [Read] route53-recovery-readiness:GetCell. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetCellReadinessSummary">actionGetCellReadinessSummary</a></code> | <code>string</code> | [Read] route53-recovery-readiness:GetCellReadinessSummary. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetReadinessCheck">actionGetReadinessCheck</a></code> | <code>string</code> | [Read] route53-recovery-readiness:GetReadinessCheck. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetReadinessCheckResourceStatus">actionGetReadinessCheckResourceStatus</a></code> | <code>string</code> | [Read] route53-recovery-readiness:GetReadinessCheckResourceStatus. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetReadinessCheckStatus">actionGetReadinessCheckStatus</a></code> | <code>string</code> | [Read] route53-recovery-readiness:GetReadinessCheckStatus. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetRecoveryGroup">actionGetRecoveryGroup</a></code> | <code>string</code> | [Read] route53-recovery-readiness:GetRecoveryGroup. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetRecoveryGroupReadinessSummary">actionGetRecoveryGroupReadinessSummary</a></code> | <code>string</code> | [Read] route53-recovery-readiness:GetRecoveryGroupReadinessSummary. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetResourceSet">actionGetResourceSet</a></code> | <code>string</code> | [Read] route53-recovery-readiness:GetResourceSet. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.CreateCell">CreateCell</a></code> | <code>string</code> | [Write] route53-recovery-readiness:CreateCell. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.CreateCrossAccountAuthorization">CreateCrossAccountAuthorization</a></code> | <code>string</code> | [Write] route53-recovery-readiness:CreateCrossAccountAuthorization. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.CreateReadinessCheck">CreateReadinessCheck</a></code> | <code>string</code> | [Write] route53-recovery-readiness:CreateReadinessCheck. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.CreateRecoveryGroup">CreateRecoveryGroup</a></code> | <code>string</code> | [Write] route53-recovery-readiness:CreateRecoveryGroup. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.CreateResourceSet">CreateResourceSet</a></code> | <code>string</code> | [Write] route53-recovery-readiness:CreateResourceSet. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.DeleteCell">DeleteCell</a></code> | <code>string</code> | [Write] route53-recovery-readiness:DeleteCell. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.DeleteCrossAccountAuthorization">DeleteCrossAccountAuthorization</a></code> | <code>string</code> | [Write] route53-recovery-readiness:DeleteCrossAccountAuthorization. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.DeleteReadinessCheck">DeleteReadinessCheck</a></code> | <code>string</code> | [Write] route53-recovery-readiness:DeleteReadinessCheck. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.DeleteRecoveryGroup">DeleteRecoveryGroup</a></code> | <code>string</code> | [Write] route53-recovery-readiness:DeleteRecoveryGroup. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.DeleteResourceSet">DeleteResourceSet</a></code> | <code>string</code> | [Write] route53-recovery-readiness:DeleteResourceSet. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListCells">ListCells</a></code> | <code>string</code> | [Read] route53-recovery-readiness:ListCells. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListCrossAccountAuthorizations">ListCrossAccountAuthorizations</a></code> | <code>string</code> | [Read] route53-recovery-readiness:ListCrossAccountAuthorizations. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListReadinessChecks">ListReadinessChecks</a></code> | <code>string</code> | [Read] route53-recovery-readiness:ListReadinessChecks. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListRecoveryGroups">ListRecoveryGroups</a></code> | <code>string</code> | [Read] route53-recovery-readiness:ListRecoveryGroups. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListResourceSets">ListResourceSets</a></code> | <code>string</code> | [Read] route53-recovery-readiness:ListResourceSets. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListRules">ListRules</a></code> | <code>string</code> | [Read] route53-recovery-readiness:ListRules. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListTagsForResources">ListTagsForResources</a></code> | <code>string</code> | [Read] route53-recovery-readiness:ListTagsForResources. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] route53-recovery-readiness:TagResource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] route53-recovery-readiness:UntagResource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.UpdateCell">UpdateCell</a></code> | <code>string</code> | [Write] route53-recovery-readiness:UpdateCell. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.UpdateReadinessCheck">UpdateReadinessCheck</a></code> | <code>string</code> | [Write] route53-recovery-readiness:UpdateReadinessCheck. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.UpdateRecoveryGroup">UpdateRecoveryGroup</a></code> | <code>string</code> | [Write] route53-recovery-readiness:UpdateRecoveryGroup. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.UpdateResourceSet">UpdateResourceSet</a></code> | <code>string</code> | [Write] route53-recovery-readiness:UpdateResourceSet. |

---

##### `actionGetArchitectureRecommendations`<sup>Required</sup> <a name="actionGetArchitectureRecommendations" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetArchitectureRecommendations"></a>

```typescript
public readonly actionGetArchitectureRecommendations: string;
```

- *Type:* string

[Read] route53-recovery-readiness:GetArchitectureRecommendations.

---

##### `actionGetCell`<sup>Required</sup> <a name="actionGetCell" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetCell"></a>

```typescript
public readonly actionGetCell: string;
```

- *Type:* string

[Read] route53-recovery-readiness:GetCell.

---

##### `actionGetCellReadinessSummary`<sup>Required</sup> <a name="actionGetCellReadinessSummary" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetCellReadinessSummary"></a>

```typescript
public readonly actionGetCellReadinessSummary: string;
```

- *Type:* string

[Read] route53-recovery-readiness:GetCellReadinessSummary.

---

##### `actionGetReadinessCheck`<sup>Required</sup> <a name="actionGetReadinessCheck" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetReadinessCheck"></a>

```typescript
public readonly actionGetReadinessCheck: string;
```

- *Type:* string

[Read] route53-recovery-readiness:GetReadinessCheck.

---

##### `actionGetReadinessCheckResourceStatus`<sup>Required</sup> <a name="actionGetReadinessCheckResourceStatus" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetReadinessCheckResourceStatus"></a>

```typescript
public readonly actionGetReadinessCheckResourceStatus: string;
```

- *Type:* string

[Read] route53-recovery-readiness:GetReadinessCheckResourceStatus.

---

##### `actionGetReadinessCheckStatus`<sup>Required</sup> <a name="actionGetReadinessCheckStatus" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetReadinessCheckStatus"></a>

```typescript
public readonly actionGetReadinessCheckStatus: string;
```

- *Type:* string

[Read] route53-recovery-readiness:GetReadinessCheckStatus.

---

##### `actionGetRecoveryGroup`<sup>Required</sup> <a name="actionGetRecoveryGroup" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetRecoveryGroup"></a>

```typescript
public readonly actionGetRecoveryGroup: string;
```

- *Type:* string

[Read] route53-recovery-readiness:GetRecoveryGroup.

---

##### `actionGetRecoveryGroupReadinessSummary`<sup>Required</sup> <a name="actionGetRecoveryGroupReadinessSummary" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetRecoveryGroupReadinessSummary"></a>

```typescript
public readonly actionGetRecoveryGroupReadinessSummary: string;
```

- *Type:* string

[Read] route53-recovery-readiness:GetRecoveryGroupReadinessSummary.

---

##### `actionGetResourceSet`<sup>Required</sup> <a name="actionGetResourceSet" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.actionGetResourceSet"></a>

```typescript
public readonly actionGetResourceSet: string;
```

- *Type:* string

[Read] route53-recovery-readiness:GetResourceSet.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCell`<sup>Required</sup> <a name="CreateCell" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.CreateCell"></a>

```typescript
public readonly CreateCell: string;
```

- *Type:* string

[Write] route53-recovery-readiness:CreateCell.

---

##### `CreateCrossAccountAuthorization`<sup>Required</sup> <a name="CreateCrossAccountAuthorization" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.CreateCrossAccountAuthorization"></a>

```typescript
public readonly CreateCrossAccountAuthorization: string;
```

- *Type:* string

[Write] route53-recovery-readiness:CreateCrossAccountAuthorization.

---

##### `CreateReadinessCheck`<sup>Required</sup> <a name="CreateReadinessCheck" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.CreateReadinessCheck"></a>

```typescript
public readonly CreateReadinessCheck: string;
```

- *Type:* string

[Write] route53-recovery-readiness:CreateReadinessCheck.

---

##### `CreateRecoveryGroup`<sup>Required</sup> <a name="CreateRecoveryGroup" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.CreateRecoveryGroup"></a>

```typescript
public readonly CreateRecoveryGroup: string;
```

- *Type:* string

[Write] route53-recovery-readiness:CreateRecoveryGroup.

---

##### `CreateResourceSet`<sup>Required</sup> <a name="CreateResourceSet" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.CreateResourceSet"></a>

```typescript
public readonly CreateResourceSet: string;
```

- *Type:* string

[Write] route53-recovery-readiness:CreateResourceSet.

---

##### `DeleteCell`<sup>Required</sup> <a name="DeleteCell" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.DeleteCell"></a>

```typescript
public readonly DeleteCell: string;
```

- *Type:* string

[Write] route53-recovery-readiness:DeleteCell.

---

##### `DeleteCrossAccountAuthorization`<sup>Required</sup> <a name="DeleteCrossAccountAuthorization" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.DeleteCrossAccountAuthorization"></a>

```typescript
public readonly DeleteCrossAccountAuthorization: string;
```

- *Type:* string

[Write] route53-recovery-readiness:DeleteCrossAccountAuthorization.

---

##### `DeleteReadinessCheck`<sup>Required</sup> <a name="DeleteReadinessCheck" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.DeleteReadinessCheck"></a>

```typescript
public readonly DeleteReadinessCheck: string;
```

- *Type:* string

[Write] route53-recovery-readiness:DeleteReadinessCheck.

---

##### `DeleteRecoveryGroup`<sup>Required</sup> <a name="DeleteRecoveryGroup" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.DeleteRecoveryGroup"></a>

```typescript
public readonly DeleteRecoveryGroup: string;
```

- *Type:* string

[Write] route53-recovery-readiness:DeleteRecoveryGroup.

---

##### `DeleteResourceSet`<sup>Required</sup> <a name="DeleteResourceSet" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.DeleteResourceSet"></a>

```typescript
public readonly DeleteResourceSet: string;
```

- *Type:* string

[Write] route53-recovery-readiness:DeleteResourceSet.

---

##### `ListCells`<sup>Required</sup> <a name="ListCells" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListCells"></a>

```typescript
public readonly ListCells: string;
```

- *Type:* string

[Read] route53-recovery-readiness:ListCells.

---

##### `ListCrossAccountAuthorizations`<sup>Required</sup> <a name="ListCrossAccountAuthorizations" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListCrossAccountAuthorizations"></a>

```typescript
public readonly ListCrossAccountAuthorizations: string;
```

- *Type:* string

[Read] route53-recovery-readiness:ListCrossAccountAuthorizations.

---

##### `ListReadinessChecks`<sup>Required</sup> <a name="ListReadinessChecks" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListReadinessChecks"></a>

```typescript
public readonly ListReadinessChecks: string;
```

- *Type:* string

[Read] route53-recovery-readiness:ListReadinessChecks.

---

##### `ListRecoveryGroups`<sup>Required</sup> <a name="ListRecoveryGroups" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListRecoveryGroups"></a>

```typescript
public readonly ListRecoveryGroups: string;
```

- *Type:* string

[Read] route53-recovery-readiness:ListRecoveryGroups.

---

##### `ListResourceSets`<sup>Required</sup> <a name="ListResourceSets" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListResourceSets"></a>

```typescript
public readonly ListResourceSets: string;
```

- *Type:* string

[Read] route53-recovery-readiness:ListResourceSets.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListRules"></a>

```typescript
public readonly ListRules: string;
```

- *Type:* string

[Read] route53-recovery-readiness:ListRules.

---

##### `ListTagsForResources`<sup>Required</sup> <a name="ListTagsForResources" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.ListTagsForResources"></a>

```typescript
public readonly ListTagsForResources: string;
```

- *Type:* string

[Read] route53-recovery-readiness:ListTagsForResources.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] route53-recovery-readiness:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] route53-recovery-readiness:UntagResource.

---

##### `UpdateCell`<sup>Required</sup> <a name="UpdateCell" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.UpdateCell"></a>

```typescript
public readonly UpdateCell: string;
```

- *Type:* string

[Write] route53-recovery-readiness:UpdateCell.

---

##### `UpdateReadinessCheck`<sup>Required</sup> <a name="UpdateReadinessCheck" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.UpdateReadinessCheck"></a>

```typescript
public readonly UpdateReadinessCheck: string;
```

- *Type:* string

[Write] route53-recovery-readiness:UpdateReadinessCheck.

---

##### `UpdateRecoveryGroup`<sup>Required</sup> <a name="UpdateRecoveryGroup" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.UpdateRecoveryGroup"></a>

```typescript
public readonly UpdateRecoveryGroup: string;
```

- *Type:* string

[Write] route53-recovery-readiness:UpdateRecoveryGroup.

---

##### `UpdateResourceSet`<sup>Required</sup> <a name="UpdateResourceSet" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessActions.property.UpdateResourceSet"></a>

```typescript
public readonly UpdateResourceSet: string;
```

- *Type:* string

[Write] route53-recovery-readiness:UpdateResourceSet.

---

### Route53RecoveryReadinessConditions <a name="Route53RecoveryReadinessConditions" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions"></a>

Condition key constants and builders for route53-recovery-readiness.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

new route53_recovery_readiness.Route53RecoveryReadinessConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.requestTag"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.resourceTag"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.tagKeys"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.CreateCellConditionKeys">CreateCellConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCell action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.CreateReadinessCheckConditionKeys">CreateReadinessCheckConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReadinessCheck action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.CreateRecoveryGroupConditionKeys">CreateRecoveryGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRecoveryGroup action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.CreateResourceSetConditionKeys">CreateResourceSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResourceSet action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.UpdateCellConditionKeys">UpdateCellConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCell action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.UpdateReadinessCheckConditionKeys">UpdateReadinessCheckConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateReadinessCheck action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.UpdateRecoveryGroupConditionKeys">UpdateRecoveryGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRecoveryGroup action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.UpdateResourceSetConditionKeys">UpdateResourceSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateResourceSet action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCellConditionKeys`<sup>Required</sup> <a name="CreateCellConditionKeys" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.CreateCellConditionKeys"></a>

```typescript
public readonly CreateCellConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCell action.

---

##### `CreateReadinessCheckConditionKeys`<sup>Required</sup> <a name="CreateReadinessCheckConditionKeys" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.CreateReadinessCheckConditionKeys"></a>

```typescript
public readonly CreateReadinessCheckConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReadinessCheck action.

---

##### `CreateRecoveryGroupConditionKeys`<sup>Required</sup> <a name="CreateRecoveryGroupConditionKeys" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.CreateRecoveryGroupConditionKeys"></a>

```typescript
public readonly CreateRecoveryGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRecoveryGroup action.

---

##### `CreateResourceSetConditionKeys`<sup>Required</sup> <a name="CreateResourceSetConditionKeys" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.CreateResourceSetConditionKeys"></a>

```typescript
public readonly CreateResourceSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResourceSet action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateCellConditionKeys`<sup>Required</sup> <a name="UpdateCellConditionKeys" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.UpdateCellConditionKeys"></a>

```typescript
public readonly UpdateCellConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCell action.

---

##### `UpdateReadinessCheckConditionKeys`<sup>Required</sup> <a name="UpdateReadinessCheckConditionKeys" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.UpdateReadinessCheckConditionKeys"></a>

```typescript
public readonly UpdateReadinessCheckConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateReadinessCheck action.

---

##### `UpdateRecoveryGroupConditionKeys`<sup>Required</sup> <a name="UpdateRecoveryGroupConditionKeys" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.UpdateRecoveryGroupConditionKeys"></a>

```typescript
public readonly UpdateRecoveryGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRecoveryGroup action.

---

##### `UpdateResourceSetConditionKeys`<sup>Required</sup> <a name="UpdateResourceSetConditionKeys" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessConditions.property.UpdateResourceSetConditionKeys"></a>

```typescript
public readonly UpdateResourceSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateResourceSet action.

---

### Route53RecoveryReadinessOperations <a name="Route53RecoveryReadinessOperations" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations"></a>

API operation to required IAM actions mapping for route53-recovery-readiness.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

new route53_recovery_readiness.Route53RecoveryReadinessOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.CreateCell">CreateCell</a></code> | <code>string[]</code> | IAM actions required for the CreateCell API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.CreateCrossAccountAuthorization">CreateCrossAccountAuthorization</a></code> | <code>string[]</code> | IAM actions required for the CreateCrossAccountAuthorization API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.CreateReadinessCheck">CreateReadinessCheck</a></code> | <code>string[]</code> | IAM actions required for the CreateReadinessCheck API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.CreateRecoveryGroup">CreateRecoveryGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateRecoveryGroup API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.CreateResourceSet">CreateResourceSet</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceSet API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.DeleteCell">DeleteCell</a></code> | <code>string[]</code> | IAM actions required for the DeleteCell API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.DeleteCrossAccountAuthorization">DeleteCrossAccountAuthorization</a></code> | <code>string[]</code> | IAM actions required for the DeleteCrossAccountAuthorization API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.DeleteReadinessCheck">DeleteReadinessCheck</a></code> | <code>string[]</code> | IAM actions required for the DeleteReadinessCheck API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.DeleteRecoveryGroup">DeleteRecoveryGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecoveryGroup API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.DeleteResourceSet">DeleteResourceSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceSet API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListCells">ListCells</a></code> | <code>string[]</code> | IAM actions required for the ListCells API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListCrossAccountAuthorizations">ListCrossAccountAuthorizations</a></code> | <code>string[]</code> | IAM actions required for the ListCrossAccountAuthorizations API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListReadinessChecks">ListReadinessChecks</a></code> | <code>string[]</code> | IAM actions required for the ListReadinessChecks API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListRecoveryGroups">ListRecoveryGroups</a></code> | <code>string[]</code> | IAM actions required for the ListRecoveryGroups API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListResourceSets">ListResourceSets</a></code> | <code>string[]</code> | IAM actions required for the ListResourceSets API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListRules">ListRules</a></code> | <code>string[]</code> | IAM actions required for the ListRules API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListTagsForResources">ListTagsForResources</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResources API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetArchitectureRecommendations">opGetArchitectureRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetArchitectureRecommendations API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetCell">opGetCell</a></code> | <code>string[]</code> | IAM actions required for the GetCell API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetCellReadinessSummary">opGetCellReadinessSummary</a></code> | <code>string[]</code> | IAM actions required for the GetCellReadinessSummary API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetReadinessCheck">opGetReadinessCheck</a></code> | <code>string[]</code> | IAM actions required for the GetReadinessCheck API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetReadinessCheckResourceStatus">opGetReadinessCheckResourceStatus</a></code> | <code>string[]</code> | IAM actions required for the GetReadinessCheckResourceStatus API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetReadinessCheckStatus">opGetReadinessCheckStatus</a></code> | <code>string[]</code> | IAM actions required for the GetReadinessCheckStatus API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetRecoveryGroup">opGetRecoveryGroup</a></code> | <code>string[]</code> | IAM actions required for the GetRecoveryGroup API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetRecoveryGroupReadinessSummary">opGetRecoveryGroupReadinessSummary</a></code> | <code>string[]</code> | IAM actions required for the GetRecoveryGroupReadinessSummary API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetResourceSet">opGetResourceSet</a></code> | <code>string[]</code> | IAM actions required for the GetResourceSet API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.UpdateCell">UpdateCell</a></code> | <code>string[]</code> | IAM actions required for the UpdateCell API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.UpdateReadinessCheck">UpdateReadinessCheck</a></code> | <code>string[]</code> | IAM actions required for the UpdateReadinessCheck API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.UpdateRecoveryGroup">UpdateRecoveryGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateRecoveryGroup API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.UpdateResourceSet">UpdateResourceSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourceSet API call. |

---

##### `CreateCell`<sup>Required</sup> <a name="CreateCell" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.CreateCell"></a>

```typescript
public readonly CreateCell: string[];
```

- *Type:* string[]

IAM actions required for the CreateCell API call.

---

##### `CreateCrossAccountAuthorization`<sup>Required</sup> <a name="CreateCrossAccountAuthorization" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.CreateCrossAccountAuthorization"></a>

```typescript
public readonly CreateCrossAccountAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the CreateCrossAccountAuthorization API call.

---

##### `CreateReadinessCheck`<sup>Required</sup> <a name="CreateReadinessCheck" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.CreateReadinessCheck"></a>

```typescript
public readonly CreateReadinessCheck: string[];
```

- *Type:* string[]

IAM actions required for the CreateReadinessCheck API call.

---

##### `CreateRecoveryGroup`<sup>Required</sup> <a name="CreateRecoveryGroup" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.CreateRecoveryGroup"></a>

```typescript
public readonly CreateRecoveryGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateRecoveryGroup API call.

---

##### `CreateResourceSet`<sup>Required</sup> <a name="CreateResourceSet" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.CreateResourceSet"></a>

```typescript
public readonly CreateResourceSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceSet API call.

---

##### `DeleteCell`<sup>Required</sup> <a name="DeleteCell" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.DeleteCell"></a>

```typescript
public readonly DeleteCell: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCell API call.

---

##### `DeleteCrossAccountAuthorization`<sup>Required</sup> <a name="DeleteCrossAccountAuthorization" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.DeleteCrossAccountAuthorization"></a>

```typescript
public readonly DeleteCrossAccountAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCrossAccountAuthorization API call.

---

##### `DeleteReadinessCheck`<sup>Required</sup> <a name="DeleteReadinessCheck" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.DeleteReadinessCheck"></a>

```typescript
public readonly DeleteReadinessCheck: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReadinessCheck API call.

---

##### `DeleteRecoveryGroup`<sup>Required</sup> <a name="DeleteRecoveryGroup" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.DeleteRecoveryGroup"></a>

```typescript
public readonly DeleteRecoveryGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecoveryGroup API call.

---

##### `DeleteResourceSet`<sup>Required</sup> <a name="DeleteResourceSet" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.DeleteResourceSet"></a>

```typescript
public readonly DeleteResourceSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceSet API call.

---

##### `ListCells`<sup>Required</sup> <a name="ListCells" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListCells"></a>

```typescript
public readonly ListCells: string[];
```

- *Type:* string[]

IAM actions required for the ListCells API call.

---

##### `ListCrossAccountAuthorizations`<sup>Required</sup> <a name="ListCrossAccountAuthorizations" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListCrossAccountAuthorizations"></a>

```typescript
public readonly ListCrossAccountAuthorizations: string[];
```

- *Type:* string[]

IAM actions required for the ListCrossAccountAuthorizations API call.

---

##### `ListReadinessChecks`<sup>Required</sup> <a name="ListReadinessChecks" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListReadinessChecks"></a>

```typescript
public readonly ListReadinessChecks: string[];
```

- *Type:* string[]

IAM actions required for the ListReadinessChecks API call.

---

##### `ListRecoveryGroups`<sup>Required</sup> <a name="ListRecoveryGroups" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListRecoveryGroups"></a>

```typescript
public readonly ListRecoveryGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListRecoveryGroups API call.

---

##### `ListResourceSets`<sup>Required</sup> <a name="ListResourceSets" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListResourceSets"></a>

```typescript
public readonly ListResourceSets: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceSets API call.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListRules"></a>

```typescript
public readonly ListRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRules API call.

---

##### `ListTagsForResources`<sup>Required</sup> <a name="ListTagsForResources" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.ListTagsForResources"></a>

```typescript
public readonly ListTagsForResources: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResources API call.

---

##### `opGetArchitectureRecommendations`<sup>Required</sup> <a name="opGetArchitectureRecommendations" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetArchitectureRecommendations"></a>

```typescript
public readonly opGetArchitectureRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetArchitectureRecommendations API call.

---

##### `opGetCell`<sup>Required</sup> <a name="opGetCell" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetCell"></a>

```typescript
public readonly opGetCell: string[];
```

- *Type:* string[]

IAM actions required for the GetCell API call.

---

##### `opGetCellReadinessSummary`<sup>Required</sup> <a name="opGetCellReadinessSummary" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetCellReadinessSummary"></a>

```typescript
public readonly opGetCellReadinessSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetCellReadinessSummary API call.

---

##### `opGetReadinessCheck`<sup>Required</sup> <a name="opGetReadinessCheck" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetReadinessCheck"></a>

```typescript
public readonly opGetReadinessCheck: string[];
```

- *Type:* string[]

IAM actions required for the GetReadinessCheck API call.

---

##### `opGetReadinessCheckResourceStatus`<sup>Required</sup> <a name="opGetReadinessCheckResourceStatus" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetReadinessCheckResourceStatus"></a>

```typescript
public readonly opGetReadinessCheckResourceStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetReadinessCheckResourceStatus API call.

---

##### `opGetReadinessCheckStatus`<sup>Required</sup> <a name="opGetReadinessCheckStatus" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetReadinessCheckStatus"></a>

```typescript
public readonly opGetReadinessCheckStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetReadinessCheckStatus API call.

---

##### `opGetRecoveryGroup`<sup>Required</sup> <a name="opGetRecoveryGroup" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetRecoveryGroup"></a>

```typescript
public readonly opGetRecoveryGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetRecoveryGroup API call.

---

##### `opGetRecoveryGroupReadinessSummary`<sup>Required</sup> <a name="opGetRecoveryGroupReadinessSummary" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetRecoveryGroupReadinessSummary"></a>

```typescript
public readonly opGetRecoveryGroupReadinessSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetRecoveryGroupReadinessSummary API call.

---

##### `opGetResourceSet`<sup>Required</sup> <a name="opGetResourceSet" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.opGetResourceSet"></a>

```typescript
public readonly opGetResourceSet: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceSet API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCell`<sup>Required</sup> <a name="UpdateCell" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.UpdateCell"></a>

```typescript
public readonly UpdateCell: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCell API call.

---

##### `UpdateReadinessCheck`<sup>Required</sup> <a name="UpdateReadinessCheck" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.UpdateReadinessCheck"></a>

```typescript
public readonly UpdateReadinessCheck: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReadinessCheck API call.

---

##### `UpdateRecoveryGroup`<sup>Required</sup> <a name="UpdateRecoveryGroup" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.UpdateRecoveryGroup"></a>

```typescript
public readonly UpdateRecoveryGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRecoveryGroup API call.

---

##### `UpdateResourceSet`<sup>Required</sup> <a name="UpdateResourceSet" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessOperations.property.UpdateResourceSet"></a>

```typescript
public readonly UpdateResourceSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourceSet API call.

---

### Route53RecoveryReadinessResources <a name="Route53RecoveryReadinessResources" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources"></a>

ARN builders, validators, and parsers for route53-recovery-readiness resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.Initializer"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

new route53_recovery_readiness.Route53RecoveryReadinessResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.cell">cell</a></code> | Builds an ARN for the cell resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidCellArn">isValidCellArn</a></code> | Validates whether a string is a valid ARN for the cell resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidReadinesscheckArn">isValidReadinesscheckArn</a></code> | Validates whether a string is a valid ARN for the readinesscheck resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidRecoverygroupArn">isValidRecoverygroupArn</a></code> | Validates whether a string is a valid ARN for the recoverygroup resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidResourcesetArn">isValidResourcesetArn</a></code> | Validates whether a string is a valid ARN for the resourceset resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseCellArn">parseCellArn</a></code> | Parses a cell ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseReadinesscheckArn">parseReadinesscheckArn</a></code> | Parses a readinesscheck ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseRecoverygroupArn">parseRecoverygroupArn</a></code> | Parses a recoverygroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseResourcesetArn">parseResourcesetArn</a></code> | Parses a resourceset ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.readinesscheck">readinesscheck</a></code> | Builds an ARN for the readinesscheck resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.recoverygroup">recoverygroup</a></code> | Builds an ARN for the recoverygroup resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.resourceset">resourceset</a></code> | Builds an ARN for the resourceset resource. |

---

##### `cell` <a name="cell" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.cell"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.cell(props: Route53RecoveryReadinessCellArnProps)
```

Builds an ARN for the cell resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.cell.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessCellArnProps">Route53RecoveryReadinessCellArnProps</a>

---

##### `isValidCellArn` <a name="isValidCellArn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidCellArn"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.isValidCellArn(arn: string)
```

Validates whether a string is a valid ARN for the cell resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidCellArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReadinesscheckArn` <a name="isValidReadinesscheckArn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidReadinesscheckArn"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.isValidReadinesscheckArn(arn: string)
```

Validates whether a string is a valid ARN for the readinesscheck resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidReadinesscheckArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecoverygroupArn` <a name="isValidRecoverygroupArn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidRecoverygroupArn"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.isValidRecoverygroupArn(arn: string)
```

Validates whether a string is a valid ARN for the recoverygroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidRecoverygroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourcesetArn` <a name="isValidResourcesetArn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidResourcesetArn"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.isValidResourcesetArn(arn: string)
```

Validates whether a string is a valid ARN for the resourceset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.isValidResourcesetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCellArn` <a name="parseCellArn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseCellArn"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.parseCellArn(arn: string)
```

Parses a cell ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseCellArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReadinesscheckArn` <a name="parseReadinesscheckArn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseReadinesscheckArn"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.parseReadinesscheckArn(arn: string)
```

Parses a readinesscheck ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseReadinesscheckArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecoverygroupArn` <a name="parseRecoverygroupArn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseRecoverygroupArn"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.parseRecoverygroupArn(arn: string)
```

Parses a recoverygroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseRecoverygroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourcesetArn` <a name="parseResourcesetArn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseResourcesetArn"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.parseResourcesetArn(arn: string)
```

Parses a resourceset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.parseResourcesetArn.parameter.arn"></a>

- *Type:* string

---

##### `readinesscheck` <a name="readinesscheck" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.readinesscheck"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.readinesscheck(props: Route53RecoveryReadinessReadinesscheckArnProps)
```

Builds an ARN for the readinesscheck resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.readinesscheck.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessReadinesscheckArnProps">Route53RecoveryReadinessReadinesscheckArnProps</a>

---

##### `recoverygroup` <a name="recoverygroup" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.recoverygroup"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.recoverygroup(props: Route53RecoveryReadinessRecoverygroupArnProps)
```

Builds an ARN for the recoverygroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.recoverygroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessRecoverygroupArnProps">Route53RecoveryReadinessRecoverygroupArnProps</a>

---

##### `resourceset` <a name="resourceset" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.resourceset"></a>

```typescript
import { route53_recovery_readiness } from '@cdk_utils/iam'

route53_recovery_readiness.Route53RecoveryReadinessResources.resourceset(props: Route53RecoveryReadinessResourcesetArnProps)
```

Builds an ARN for the resourceset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResources.resourceset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53_recovery_readiness.Route53RecoveryReadinessResourcesetArnProps">Route53RecoveryReadinessResourcesetArnProps</a>

---




