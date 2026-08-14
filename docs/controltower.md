# `controltower` Submodule <a name="`controltower` Submodule" id="@cdk_utils/iam.controltower"></a>


## Structs <a name="Structs" id="Structs"></a>

### ControltowerBaselineArnComponents <a name="ControltowerBaselineArnComponents" id="@cdk_utils/iam.controltower.ControltowerBaselineArnComponents"></a>

Parsed components of a Baseline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controltower.ControltowerBaselineArnComponents.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

const controltowerBaselineArnComponents: controltower.ControltowerBaselineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerBaselineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerBaselineArnComponents.property.baselineId">baselineId</a></code> | <code>string</code> | The BaselineId component. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerBaselineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerBaselineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.controltower.ControltowerBaselineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `baselineId`<sup>Required</sup> <a name="baselineId" id="@cdk_utils/iam.controltower.ControltowerBaselineArnComponents.property.baselineId"></a>

```typescript
public readonly baselineId: string;
```

- *Type:* string

The BaselineId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.controltower.ControltowerBaselineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.controltower.ControltowerBaselineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ControltowerBaselineArnProps <a name="ControltowerBaselineArnProps" id="@cdk_utils/iam.controltower.ControltowerBaselineArnProps"></a>

Properties for building a Baseline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controltower.ControltowerBaselineArnProps.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

const controltowerBaselineArnProps: controltower.ControltowerBaselineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerBaselineArnProps.property.baselineId">baselineId</a></code> | <code>string</code> | The BaselineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerBaselineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerBaselineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerBaselineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `baselineId`<sup>Required</sup> <a name="baselineId" id="@cdk_utils/iam.controltower.ControltowerBaselineArnProps.property.baselineId"></a>

```typescript
public readonly baselineId: string;
```

- *Type:* string

The BaselineId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.controltower.ControltowerBaselineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.controltower.ControltowerBaselineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.controltower.ControltowerBaselineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ControltowerEnabledBaselineArnComponents <a name="ControltowerEnabledBaselineArnComponents" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnComponents"></a>

Parsed components of a EnabledBaseline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnComponents.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

const controltowerEnabledBaselineArnComponents: controltower.ControltowerEnabledBaselineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnComponents.property.enabledBaselineId">enabledBaselineId</a></code> | <code>string</code> | The EnabledBaselineId component. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `enabledBaselineId`<sup>Required</sup> <a name="enabledBaselineId" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnComponents.property.enabledBaselineId"></a>

```typescript
public readonly enabledBaselineId: string;
```

- *Type:* string

The EnabledBaselineId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ControltowerEnabledBaselineArnProps <a name="ControltowerEnabledBaselineArnProps" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnProps"></a>

Properties for building a EnabledBaseline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnProps.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

const controltowerEnabledBaselineArnProps: controltower.ControltowerEnabledBaselineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnProps.property.enabledBaselineId">enabledBaselineId</a></code> | <code>string</code> | The EnabledBaselineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `enabledBaselineId`<sup>Required</sup> <a name="enabledBaselineId" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnProps.property.enabledBaselineId"></a>

```typescript
public readonly enabledBaselineId: string;
```

- *Type:* string

The EnabledBaselineId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ControltowerEnabledControlArnComponents <a name="ControltowerEnabledControlArnComponents" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnComponents"></a>

Parsed components of a EnabledControl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnComponents.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

const controltowerEnabledControlArnComponents: controltower.ControltowerEnabledControlArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledControlArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledControlArnComponents.property.enabledControlId">enabledControlId</a></code> | <code>string</code> | The EnabledControlId component. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledControlArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledControlArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `enabledControlId`<sup>Required</sup> <a name="enabledControlId" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnComponents.property.enabledControlId"></a>

```typescript
public readonly enabledControlId: string;
```

- *Type:* string

The EnabledControlId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ControltowerEnabledControlArnProps <a name="ControltowerEnabledControlArnProps" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnProps"></a>

Properties for building a EnabledControl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnProps.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

const controltowerEnabledControlArnProps: controltower.ControltowerEnabledControlArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledControlArnProps.property.enabledControlId">enabledControlId</a></code> | <code>string</code> | The EnabledControlId component of the ARN. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledControlArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledControlArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerEnabledControlArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `enabledControlId`<sup>Required</sup> <a name="enabledControlId" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnProps.property.enabledControlId"></a>

```typescript
public readonly enabledControlId: string;
```

- *Type:* string

The EnabledControlId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.controltower.ControltowerEnabledControlArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ControltowerLandingZoneArnComponents <a name="ControltowerLandingZoneArnComponents" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnComponents"></a>

Parsed components of a LandingZone ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnComponents.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

const controltowerLandingZoneArnComponents: controltower.ControltowerLandingZoneArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerLandingZoneArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerLandingZoneArnComponents.property.landingZoneId">landingZoneId</a></code> | <code>string</code> | The LandingZoneId component. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerLandingZoneArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerLandingZoneArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `landingZoneId`<sup>Required</sup> <a name="landingZoneId" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnComponents.property.landingZoneId"></a>

```typescript
public readonly landingZoneId: string;
```

- *Type:* string

The LandingZoneId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ControltowerLandingZoneArnProps <a name="ControltowerLandingZoneArnProps" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnProps"></a>

Properties for building a LandingZone ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnProps.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

const controltowerLandingZoneArnProps: controltower.ControltowerLandingZoneArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerLandingZoneArnProps.property.landingZoneId">landingZoneId</a></code> | <code>string</code> | The LandingZoneId component of the ARN. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerLandingZoneArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerLandingZoneArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerLandingZoneArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `landingZoneId`<sup>Required</sup> <a name="landingZoneId" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnProps.property.landingZoneId"></a>

```typescript
public readonly landingZoneId: string;
```

- *Type:* string

The LandingZoneId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.controltower.ControltowerLandingZoneArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ControltowerActions <a name="ControltowerActions" id="@cdk_utils/iam.controltower.ControltowerActions"></a>

IAM action constants for the controltower service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.controltower.ControltowerActions.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

new controltower.ControltowerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetAccountInfo">actionGetAccountInfo</a></code> | <code>string</code> | [Read] controltower:GetAccountInfo. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetAvailableUpdates">actionGetAvailableUpdates</a></code> | <code>string</code> | [Read] controltower:GetAvailableUpdates. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetBaseline">actionGetBaseline</a></code> | <code>string</code> | [Read] controltower:GetBaseline. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetBaselineOperation">actionGetBaselineOperation</a></code> | <code>string</code> | [Read] controltower:GetBaselineOperation. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetControlOperation">actionGetControlOperation</a></code> | <code>string</code> | [Read] controltower:GetControlOperation. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetEnabledBaseline">actionGetEnabledBaseline</a></code> | <code>string</code> | [Read] controltower:GetEnabledBaseline. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetEnabledControl">actionGetEnabledControl</a></code> | <code>string</code> | [Read] controltower:GetEnabledControl. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetGuardrailComplianceStatus">actionGetGuardrailComplianceStatus</a></code> | <code>string</code> | [Read] controltower:GetGuardrailComplianceStatus. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetHomeRegion">actionGetHomeRegion</a></code> | <code>string</code> | [Read] controltower:GetHomeRegion. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetLandingZone">actionGetLandingZone</a></code> | <code>string</code> | [Read] controltower:GetLandingZone. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetLandingZoneDriftStatus">actionGetLandingZoneDriftStatus</a></code> | <code>string</code> | [Read] controltower:GetLandingZoneDriftStatus. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetLandingZoneOperation">actionGetLandingZoneOperation</a></code> | <code>string</code> | [Read] controltower:GetLandingZoneOperation. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.actionGetLandingZoneStatus">actionGetLandingZoneStatus</a></code> | <code>string</code> | [Read] controltower:GetLandingZoneStatus. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.CreateLandingZone">CreateLandingZone</a></code> | <code>string</code> | [Write] controltower:CreateLandingZone. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.CreateManagedAccount">CreateManagedAccount</a></code> | <code>string</code> | [Write] controltower:CreateManagedAccount. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DeleteLandingZone">DeleteLandingZone</a></code> | <code>string</code> | [Write] controltower:DeleteLandingZone. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DeregisterManagedAccount">DeregisterManagedAccount</a></code> | <code>string</code> | [Write] controltower:DeregisterManagedAccount. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DeregisterOrganizationalUnit">DeregisterOrganizationalUnit</a></code> | <code>string</code> | [Write] controltower:DeregisterOrganizationalUnit. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DescribeAccountFactoryConfig">DescribeAccountFactoryConfig</a></code> | <code>string</code> | [Read] controltower:DescribeAccountFactoryConfig. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DescribeCoreService">DescribeCoreService</a></code> | <code>string</code> | [Read] controltower:DescribeCoreService. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DescribeGuardrail">DescribeGuardrail</a></code> | <code>string</code> | [Read] controltower:DescribeGuardrail. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DescribeGuardrailForTarget">DescribeGuardrailForTarget</a></code> | <code>string</code> | [Read] controltower:DescribeGuardrailForTarget. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DescribeLandingZoneConfiguration">DescribeLandingZoneConfiguration</a></code> | <code>string</code> | [Read] controltower:DescribeLandingZoneConfiguration. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DescribeManagedAccount">DescribeManagedAccount</a></code> | <code>string</code> | [Read] controltower:DescribeManagedAccount. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DescribeManagedOrganizationalUnit">DescribeManagedOrganizationalUnit</a></code> | <code>string</code> | [Read] controltower:DescribeManagedOrganizationalUnit. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DescribeRegisterOrganizationalUnitOperation">DescribeRegisterOrganizationalUnitOperation</a></code> | <code>string</code> | [Read] controltower:DescribeRegisterOrganizationalUnitOperation. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DescribeSingleSignOn">DescribeSingleSignOn</a></code> | <code>string</code> | [Read] controltower:DescribeSingleSignOn. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DisableBaseline">DisableBaseline</a></code> | <code>string</code> | [Write] controltower:DisableBaseline. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DisableControl">DisableControl</a></code> | <code>string</code> | [Write] controltower:DisableControl. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.DisableGuardrail">DisableGuardrail</a></code> | <code>string</code> | [Write] controltower:DisableGuardrail. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.EnableBaseline">EnableBaseline</a></code> | <code>string</code> | [Write] controltower:EnableBaseline. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.EnableControl">EnableControl</a></code> | <code>string</code> | [Write] controltower:EnableControl. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.EnableGuardrail">EnableGuardrail</a></code> | <code>string</code> | [Write] controltower:EnableGuardrail. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListBaselines">ListBaselines</a></code> | <code>string</code> | [List] controltower:ListBaselines. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListControlOperations">ListControlOperations</a></code> | <code>string</code> | [List] controltower:ListControlOperations. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListDirectoryGroups">ListDirectoryGroups</a></code> | <code>string</code> | [List] controltower:ListDirectoryGroups. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListDriftDetails">ListDriftDetails</a></code> | <code>string</code> | [Read] controltower:ListDriftDetails. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListEnabledBaselines">ListEnabledBaselines</a></code> | <code>string</code> | [List] controltower:ListEnabledBaselines. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListEnabledControls">ListEnabledControls</a></code> | <code>string</code> | [List] controltower:ListEnabledControls. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListEnabledGuardrails">ListEnabledGuardrails</a></code> | <code>string</code> | [List] controltower:ListEnabledGuardrails. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListExtendGovernancePrecheckDetails">ListExtendGovernancePrecheckDetails</a></code> | <code>string</code> | [List] controltower:ListExtendGovernancePrecheckDetails. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListExternalConfigRuleCompliance">ListExternalConfigRuleCompliance</a></code> | <code>string</code> | [Read] controltower:ListExternalConfigRuleCompliance. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListGuardrails">ListGuardrails</a></code> | <code>string</code> | [List] controltower:ListGuardrails. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListGuardrailsForTarget">ListGuardrailsForTarget</a></code> | <code>string</code> | [List] controltower:ListGuardrailsForTarget. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListGuardrailViolations">ListGuardrailViolations</a></code> | <code>string</code> | [List] controltower:ListGuardrailViolations. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListLandingZoneOperations">ListLandingZoneOperations</a></code> | <code>string</code> | [List] controltower:ListLandingZoneOperations. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListLandingZones">ListLandingZones</a></code> | <code>string</code> | [List] controltower:ListLandingZones. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListManagedAccounts">ListManagedAccounts</a></code> | <code>string</code> | [List] controltower:ListManagedAccounts. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListManagedAccountsForGuardrail">ListManagedAccountsForGuardrail</a></code> | <code>string</code> | [List] controltower:ListManagedAccountsForGuardrail. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListManagedAccountsForParent">ListManagedAccountsForParent</a></code> | <code>string</code> | [List] controltower:ListManagedAccountsForParent. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListManagedOrganizationalUnits">ListManagedOrganizationalUnits</a></code> | <code>string</code> | [List] controltower:ListManagedOrganizationalUnits. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListManagedOrganizationalUnitsForGuardrail">ListManagedOrganizationalUnitsForGuardrail</a></code> | <code>string</code> | [List] controltower:ListManagedOrganizationalUnitsForGuardrail. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] controltower:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ManageOrganizationalUnit">ManageOrganizationalUnit</a></code> | <code>string</code> | [Write] controltower:ManageOrganizationalUnit. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.PerformPreLaunchChecks">PerformPreLaunchChecks</a></code> | <code>string</code> | [Read] controltower:PerformPreLaunchChecks. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ResetEnabledBaseline">ResetEnabledBaseline</a></code> | <code>string</code> | [Write] controltower:ResetEnabledBaseline. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ResetEnabledControl">ResetEnabledControl</a></code> | <code>string</code> | [Write] controltower:ResetEnabledControl. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.ResetLandingZone">ResetLandingZone</a></code> | <code>string</code> | [Write] controltower:ResetLandingZone. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.SetupLandingZone">SetupLandingZone</a></code> | <code>string</code> | [Write] controltower:SetupLandingZone. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] controltower:TagResource. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] controltower:UntagResource. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.UpdateAccountFactoryConfig">UpdateAccountFactoryConfig</a></code> | <code>string</code> | [Write] controltower:UpdateAccountFactoryConfig. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.UpdateEnabledBaseline">UpdateEnabledBaseline</a></code> | <code>string</code> | [Write] controltower:UpdateEnabledBaseline. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.UpdateEnabledControl">UpdateEnabledControl</a></code> | <code>string</code> | [Write] controltower:UpdateEnabledControl. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerActions.property.UpdateLandingZone">UpdateLandingZone</a></code> | <code>string</code> | [Write] controltower:UpdateLandingZone. |

---

##### `actionGetAccountInfo`<sup>Required</sup> <a name="actionGetAccountInfo" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetAccountInfo"></a>

```typescript
public readonly actionGetAccountInfo: string;
```

- *Type:* string

[Read] controltower:GetAccountInfo.

---

##### `actionGetAvailableUpdates`<sup>Required</sup> <a name="actionGetAvailableUpdates" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetAvailableUpdates"></a>

```typescript
public readonly actionGetAvailableUpdates: string;
```

- *Type:* string

[Read] controltower:GetAvailableUpdates.

---

##### `actionGetBaseline`<sup>Required</sup> <a name="actionGetBaseline" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetBaseline"></a>

```typescript
public readonly actionGetBaseline: string;
```

- *Type:* string

[Read] controltower:GetBaseline.

---

##### `actionGetBaselineOperation`<sup>Required</sup> <a name="actionGetBaselineOperation" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetBaselineOperation"></a>

```typescript
public readonly actionGetBaselineOperation: string;
```

- *Type:* string

[Read] controltower:GetBaselineOperation.

---

##### `actionGetControlOperation`<sup>Required</sup> <a name="actionGetControlOperation" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetControlOperation"></a>

```typescript
public readonly actionGetControlOperation: string;
```

- *Type:* string

[Read] controltower:GetControlOperation.

---

##### `actionGetEnabledBaseline`<sup>Required</sup> <a name="actionGetEnabledBaseline" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetEnabledBaseline"></a>

```typescript
public readonly actionGetEnabledBaseline: string;
```

- *Type:* string

[Read] controltower:GetEnabledBaseline.

---

##### `actionGetEnabledControl`<sup>Required</sup> <a name="actionGetEnabledControl" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetEnabledControl"></a>

```typescript
public readonly actionGetEnabledControl: string;
```

- *Type:* string

[Read] controltower:GetEnabledControl.

---

##### `actionGetGuardrailComplianceStatus`<sup>Required</sup> <a name="actionGetGuardrailComplianceStatus" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetGuardrailComplianceStatus"></a>

```typescript
public readonly actionGetGuardrailComplianceStatus: string;
```

- *Type:* string

[Read] controltower:GetGuardrailComplianceStatus.

---

##### `actionGetHomeRegion`<sup>Required</sup> <a name="actionGetHomeRegion" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetHomeRegion"></a>

```typescript
public readonly actionGetHomeRegion: string;
```

- *Type:* string

[Read] controltower:GetHomeRegion.

---

##### `actionGetLandingZone`<sup>Required</sup> <a name="actionGetLandingZone" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetLandingZone"></a>

```typescript
public readonly actionGetLandingZone: string;
```

- *Type:* string

[Read] controltower:GetLandingZone.

---

##### `actionGetLandingZoneDriftStatus`<sup>Required</sup> <a name="actionGetLandingZoneDriftStatus" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetLandingZoneDriftStatus"></a>

```typescript
public readonly actionGetLandingZoneDriftStatus: string;
```

- *Type:* string

[Read] controltower:GetLandingZoneDriftStatus.

---

##### `actionGetLandingZoneOperation`<sup>Required</sup> <a name="actionGetLandingZoneOperation" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetLandingZoneOperation"></a>

```typescript
public readonly actionGetLandingZoneOperation: string;
```

- *Type:* string

[Read] controltower:GetLandingZoneOperation.

---

##### `actionGetLandingZoneStatus`<sup>Required</sup> <a name="actionGetLandingZoneStatus" id="@cdk_utils/iam.controltower.ControltowerActions.property.actionGetLandingZoneStatus"></a>

```typescript
public readonly actionGetLandingZoneStatus: string;
```

- *Type:* string

[Read] controltower:GetLandingZoneStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.controltower.ControltowerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.controltower.ControltowerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.controltower.ControltowerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.controltower.ControltowerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.controltower.ControltowerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateLandingZone`<sup>Required</sup> <a name="CreateLandingZone" id="@cdk_utils/iam.controltower.ControltowerActions.property.CreateLandingZone"></a>

```typescript
public readonly CreateLandingZone: string;
```

- *Type:* string

[Write] controltower:CreateLandingZone.

---

##### `CreateManagedAccount`<sup>Required</sup> <a name="CreateManagedAccount" id="@cdk_utils/iam.controltower.ControltowerActions.property.CreateManagedAccount"></a>

```typescript
public readonly CreateManagedAccount: string;
```

- *Type:* string

[Write] controltower:CreateManagedAccount.

---

##### `DeleteLandingZone`<sup>Required</sup> <a name="DeleteLandingZone" id="@cdk_utils/iam.controltower.ControltowerActions.property.DeleteLandingZone"></a>

```typescript
public readonly DeleteLandingZone: string;
```

- *Type:* string

[Write] controltower:DeleteLandingZone.

---

##### `DeregisterManagedAccount`<sup>Required</sup> <a name="DeregisterManagedAccount" id="@cdk_utils/iam.controltower.ControltowerActions.property.DeregisterManagedAccount"></a>

```typescript
public readonly DeregisterManagedAccount: string;
```

- *Type:* string

[Write] controltower:DeregisterManagedAccount.

---

##### `DeregisterOrganizationalUnit`<sup>Required</sup> <a name="DeregisterOrganizationalUnit" id="@cdk_utils/iam.controltower.ControltowerActions.property.DeregisterOrganizationalUnit"></a>

```typescript
public readonly DeregisterOrganizationalUnit: string;
```

- *Type:* string

[Write] controltower:DeregisterOrganizationalUnit.

---

##### `DescribeAccountFactoryConfig`<sup>Required</sup> <a name="DescribeAccountFactoryConfig" id="@cdk_utils/iam.controltower.ControltowerActions.property.DescribeAccountFactoryConfig"></a>

```typescript
public readonly DescribeAccountFactoryConfig: string;
```

- *Type:* string

[Read] controltower:DescribeAccountFactoryConfig.

---

##### `DescribeCoreService`<sup>Required</sup> <a name="DescribeCoreService" id="@cdk_utils/iam.controltower.ControltowerActions.property.DescribeCoreService"></a>

```typescript
public readonly DescribeCoreService: string;
```

- *Type:* string

[Read] controltower:DescribeCoreService.

---

##### `DescribeGuardrail`<sup>Required</sup> <a name="DescribeGuardrail" id="@cdk_utils/iam.controltower.ControltowerActions.property.DescribeGuardrail"></a>

```typescript
public readonly DescribeGuardrail: string;
```

- *Type:* string

[Read] controltower:DescribeGuardrail.

---

##### `DescribeGuardrailForTarget`<sup>Required</sup> <a name="DescribeGuardrailForTarget" id="@cdk_utils/iam.controltower.ControltowerActions.property.DescribeGuardrailForTarget"></a>

```typescript
public readonly DescribeGuardrailForTarget: string;
```

- *Type:* string

[Read] controltower:DescribeGuardrailForTarget.

---

##### `DescribeLandingZoneConfiguration`<sup>Required</sup> <a name="DescribeLandingZoneConfiguration" id="@cdk_utils/iam.controltower.ControltowerActions.property.DescribeLandingZoneConfiguration"></a>

```typescript
public readonly DescribeLandingZoneConfiguration: string;
```

- *Type:* string

[Read] controltower:DescribeLandingZoneConfiguration.

---

##### `DescribeManagedAccount`<sup>Required</sup> <a name="DescribeManagedAccount" id="@cdk_utils/iam.controltower.ControltowerActions.property.DescribeManagedAccount"></a>

```typescript
public readonly DescribeManagedAccount: string;
```

- *Type:* string

[Read] controltower:DescribeManagedAccount.

---

##### `DescribeManagedOrganizationalUnit`<sup>Required</sup> <a name="DescribeManagedOrganizationalUnit" id="@cdk_utils/iam.controltower.ControltowerActions.property.DescribeManagedOrganizationalUnit"></a>

```typescript
public readonly DescribeManagedOrganizationalUnit: string;
```

- *Type:* string

[Read] controltower:DescribeManagedOrganizationalUnit.

---

##### `DescribeRegisterOrganizationalUnitOperation`<sup>Required</sup> <a name="DescribeRegisterOrganizationalUnitOperation" id="@cdk_utils/iam.controltower.ControltowerActions.property.DescribeRegisterOrganizationalUnitOperation"></a>

```typescript
public readonly DescribeRegisterOrganizationalUnitOperation: string;
```

- *Type:* string

[Read] controltower:DescribeRegisterOrganizationalUnitOperation.

---

##### `DescribeSingleSignOn`<sup>Required</sup> <a name="DescribeSingleSignOn" id="@cdk_utils/iam.controltower.ControltowerActions.property.DescribeSingleSignOn"></a>

```typescript
public readonly DescribeSingleSignOn: string;
```

- *Type:* string

[Read] controltower:DescribeSingleSignOn.

---

##### `DisableBaseline`<sup>Required</sup> <a name="DisableBaseline" id="@cdk_utils/iam.controltower.ControltowerActions.property.DisableBaseline"></a>

```typescript
public readonly DisableBaseline: string;
```

- *Type:* string

[Write] controltower:DisableBaseline.

---

##### `DisableControl`<sup>Required</sup> <a name="DisableControl" id="@cdk_utils/iam.controltower.ControltowerActions.property.DisableControl"></a>

```typescript
public readonly DisableControl: string;
```

- *Type:* string

[Write] controltower:DisableControl.

---

##### `DisableGuardrail`<sup>Required</sup> <a name="DisableGuardrail" id="@cdk_utils/iam.controltower.ControltowerActions.property.DisableGuardrail"></a>

```typescript
public readonly DisableGuardrail: string;
```

- *Type:* string

[Write] controltower:DisableGuardrail.

---

##### `EnableBaseline`<sup>Required</sup> <a name="EnableBaseline" id="@cdk_utils/iam.controltower.ControltowerActions.property.EnableBaseline"></a>

```typescript
public readonly EnableBaseline: string;
```

- *Type:* string

[Write] controltower:EnableBaseline.

---

##### `EnableControl`<sup>Required</sup> <a name="EnableControl" id="@cdk_utils/iam.controltower.ControltowerActions.property.EnableControl"></a>

```typescript
public readonly EnableControl: string;
```

- *Type:* string

[Write] controltower:EnableControl.

---

##### `EnableGuardrail`<sup>Required</sup> <a name="EnableGuardrail" id="@cdk_utils/iam.controltower.ControltowerActions.property.EnableGuardrail"></a>

```typescript
public readonly EnableGuardrail: string;
```

- *Type:* string

[Write] controltower:EnableGuardrail.

---

##### `ListBaselines`<sup>Required</sup> <a name="ListBaselines" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListBaselines"></a>

```typescript
public readonly ListBaselines: string;
```

- *Type:* string

[List] controltower:ListBaselines.

---

##### `ListControlOperations`<sup>Required</sup> <a name="ListControlOperations" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListControlOperations"></a>

```typescript
public readonly ListControlOperations: string;
```

- *Type:* string

[List] controltower:ListControlOperations.

---

##### `ListDirectoryGroups`<sup>Required</sup> <a name="ListDirectoryGroups" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListDirectoryGroups"></a>

```typescript
public readonly ListDirectoryGroups: string;
```

- *Type:* string

[List] controltower:ListDirectoryGroups.

---

##### `ListDriftDetails`<sup>Required</sup> <a name="ListDriftDetails" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListDriftDetails"></a>

```typescript
public readonly ListDriftDetails: string;
```

- *Type:* string

[Read] controltower:ListDriftDetails.

---

##### `ListEnabledBaselines`<sup>Required</sup> <a name="ListEnabledBaselines" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListEnabledBaselines"></a>

```typescript
public readonly ListEnabledBaselines: string;
```

- *Type:* string

[List] controltower:ListEnabledBaselines.

---

##### `ListEnabledControls`<sup>Required</sup> <a name="ListEnabledControls" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListEnabledControls"></a>

```typescript
public readonly ListEnabledControls: string;
```

- *Type:* string

[List] controltower:ListEnabledControls.

---

##### `ListEnabledGuardrails`<sup>Required</sup> <a name="ListEnabledGuardrails" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListEnabledGuardrails"></a>

```typescript
public readonly ListEnabledGuardrails: string;
```

- *Type:* string

[List] controltower:ListEnabledGuardrails.

---

##### `ListExtendGovernancePrecheckDetails`<sup>Required</sup> <a name="ListExtendGovernancePrecheckDetails" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListExtendGovernancePrecheckDetails"></a>

```typescript
public readonly ListExtendGovernancePrecheckDetails: string;
```

- *Type:* string

[List] controltower:ListExtendGovernancePrecheckDetails.

---

##### `ListExternalConfigRuleCompliance`<sup>Required</sup> <a name="ListExternalConfigRuleCompliance" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListExternalConfigRuleCompliance"></a>

```typescript
public readonly ListExternalConfigRuleCompliance: string;
```

- *Type:* string

[Read] controltower:ListExternalConfigRuleCompliance.

---

##### `ListGuardrails`<sup>Required</sup> <a name="ListGuardrails" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListGuardrails"></a>

```typescript
public readonly ListGuardrails: string;
```

- *Type:* string

[List] controltower:ListGuardrails.

---

##### `ListGuardrailsForTarget`<sup>Required</sup> <a name="ListGuardrailsForTarget" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListGuardrailsForTarget"></a>

```typescript
public readonly ListGuardrailsForTarget: string;
```

- *Type:* string

[List] controltower:ListGuardrailsForTarget.

---

##### `ListGuardrailViolations`<sup>Required</sup> <a name="ListGuardrailViolations" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListGuardrailViolations"></a>

```typescript
public readonly ListGuardrailViolations: string;
```

- *Type:* string

[List] controltower:ListGuardrailViolations.

---

##### `ListLandingZoneOperations`<sup>Required</sup> <a name="ListLandingZoneOperations" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListLandingZoneOperations"></a>

```typescript
public readonly ListLandingZoneOperations: string;
```

- *Type:* string

[List] controltower:ListLandingZoneOperations.

---

##### `ListLandingZones`<sup>Required</sup> <a name="ListLandingZones" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListLandingZones"></a>

```typescript
public readonly ListLandingZones: string;
```

- *Type:* string

[List] controltower:ListLandingZones.

---

##### `ListManagedAccounts`<sup>Required</sup> <a name="ListManagedAccounts" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListManagedAccounts"></a>

```typescript
public readonly ListManagedAccounts: string;
```

- *Type:* string

[List] controltower:ListManagedAccounts.

---

##### `ListManagedAccountsForGuardrail`<sup>Required</sup> <a name="ListManagedAccountsForGuardrail" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListManagedAccountsForGuardrail"></a>

```typescript
public readonly ListManagedAccountsForGuardrail: string;
```

- *Type:* string

[List] controltower:ListManagedAccountsForGuardrail.

---

##### `ListManagedAccountsForParent`<sup>Required</sup> <a name="ListManagedAccountsForParent" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListManagedAccountsForParent"></a>

```typescript
public readonly ListManagedAccountsForParent: string;
```

- *Type:* string

[List] controltower:ListManagedAccountsForParent.

---

##### `ListManagedOrganizationalUnits`<sup>Required</sup> <a name="ListManagedOrganizationalUnits" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListManagedOrganizationalUnits"></a>

```typescript
public readonly ListManagedOrganizationalUnits: string;
```

- *Type:* string

[List] controltower:ListManagedOrganizationalUnits.

---

##### `ListManagedOrganizationalUnitsForGuardrail`<sup>Required</sup> <a name="ListManagedOrganizationalUnitsForGuardrail" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListManagedOrganizationalUnitsForGuardrail"></a>

```typescript
public readonly ListManagedOrganizationalUnitsForGuardrail: string;
```

- *Type:* string

[List] controltower:ListManagedOrganizationalUnitsForGuardrail.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.controltower.ControltowerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] controltower:ListTagsForResource.

---

##### `ManageOrganizationalUnit`<sup>Required</sup> <a name="ManageOrganizationalUnit" id="@cdk_utils/iam.controltower.ControltowerActions.property.ManageOrganizationalUnit"></a>

```typescript
public readonly ManageOrganizationalUnit: string;
```

- *Type:* string

[Write] controltower:ManageOrganizationalUnit.

---

##### `PerformPreLaunchChecks`<sup>Required</sup> <a name="PerformPreLaunchChecks" id="@cdk_utils/iam.controltower.ControltowerActions.property.PerformPreLaunchChecks"></a>

```typescript
public readonly PerformPreLaunchChecks: string;
```

- *Type:* string

[Read] controltower:PerformPreLaunchChecks.

---

##### `ResetEnabledBaseline`<sup>Required</sup> <a name="ResetEnabledBaseline" id="@cdk_utils/iam.controltower.ControltowerActions.property.ResetEnabledBaseline"></a>

```typescript
public readonly ResetEnabledBaseline: string;
```

- *Type:* string

[Write] controltower:ResetEnabledBaseline.

---

##### `ResetEnabledControl`<sup>Required</sup> <a name="ResetEnabledControl" id="@cdk_utils/iam.controltower.ControltowerActions.property.ResetEnabledControl"></a>

```typescript
public readonly ResetEnabledControl: string;
```

- *Type:* string

[Write] controltower:ResetEnabledControl.

---

##### `ResetLandingZone`<sup>Required</sup> <a name="ResetLandingZone" id="@cdk_utils/iam.controltower.ControltowerActions.property.ResetLandingZone"></a>

```typescript
public readonly ResetLandingZone: string;
```

- *Type:* string

[Write] controltower:ResetLandingZone.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.controltower.ControltowerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SetupLandingZone`<sup>Required</sup> <a name="SetupLandingZone" id="@cdk_utils/iam.controltower.ControltowerActions.property.SetupLandingZone"></a>

```typescript
public readonly SetupLandingZone: string;
```

- *Type:* string

[Write] controltower:SetupLandingZone.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.controltower.ControltowerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] controltower:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.controltower.ControltowerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] controltower:UntagResource.

---

##### `UpdateAccountFactoryConfig`<sup>Required</sup> <a name="UpdateAccountFactoryConfig" id="@cdk_utils/iam.controltower.ControltowerActions.property.UpdateAccountFactoryConfig"></a>

```typescript
public readonly UpdateAccountFactoryConfig: string;
```

- *Type:* string

[Write] controltower:UpdateAccountFactoryConfig.

---

##### `UpdateEnabledBaseline`<sup>Required</sup> <a name="UpdateEnabledBaseline" id="@cdk_utils/iam.controltower.ControltowerActions.property.UpdateEnabledBaseline"></a>

```typescript
public readonly UpdateEnabledBaseline: string;
```

- *Type:* string

[Write] controltower:UpdateEnabledBaseline.

---

##### `UpdateEnabledControl`<sup>Required</sup> <a name="UpdateEnabledControl" id="@cdk_utils/iam.controltower.ControltowerActions.property.UpdateEnabledControl"></a>

```typescript
public readonly UpdateEnabledControl: string;
```

- *Type:* string

[Write] controltower:UpdateEnabledControl.

---

##### `UpdateLandingZone`<sup>Required</sup> <a name="UpdateLandingZone" id="@cdk_utils/iam.controltower.ControltowerActions.property.UpdateLandingZone"></a>

```typescript
public readonly UpdateLandingZone: string;
```

- *Type:* string

[Write] controltower:UpdateLandingZone.

---

### ControltowerConditions <a name="ControltowerConditions" id="@cdk_utils/iam.controltower.ControltowerConditions"></a>

Condition key constants and builders for controltower.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.controltower.ControltowerConditions.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

new controltower.ControltowerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.controltower.ControltowerConditions.requestTag"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.controltower.ControltowerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.controltower.ControltowerConditions.resourceTag"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.controltower.ControltowerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.controltower.ControltowerConditions.tagKeys"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.controltower.ControltowerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerConditions.property.CreateLandingZoneConditionKeys">CreateLandingZoneConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLandingZone action. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerConditions.property.EnableBaselineConditionKeys">EnableBaselineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnableBaseline action. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerConditions.property.EnableControlConditionKeys">EnableControlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnableControl action. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.controltower.ControltowerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.controltower.ControltowerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.controltower.ControltowerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateLandingZoneConditionKeys`<sup>Required</sup> <a name="CreateLandingZoneConditionKeys" id="@cdk_utils/iam.controltower.ControltowerConditions.property.CreateLandingZoneConditionKeys"></a>

```typescript
public readonly CreateLandingZoneConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLandingZone action.

---

##### `EnableBaselineConditionKeys`<sup>Required</sup> <a name="EnableBaselineConditionKeys" id="@cdk_utils/iam.controltower.ControltowerConditions.property.EnableBaselineConditionKeys"></a>

```typescript
public readonly EnableBaselineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnableBaseline action.

---

##### `EnableControlConditionKeys`<sup>Required</sup> <a name="EnableControlConditionKeys" id="@cdk_utils/iam.controltower.ControltowerConditions.property.EnableControlConditionKeys"></a>

```typescript
public readonly EnableControlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnableControl action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.controltower.ControltowerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.controltower.ControltowerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ControltowerOperations <a name="ControltowerOperations" id="@cdk_utils/iam.controltower.ControltowerOperations"></a>

API operation to required IAM actions mapping for controltower.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.controltower.ControltowerOperations.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

new controltower.ControltowerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.CreateLandingZone">CreateLandingZone</a></code> | <code>string[]</code> | IAM actions required for the CreateLandingZone API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.DeleteLandingZone">DeleteLandingZone</a></code> | <code>string[]</code> | IAM actions required for the DeleteLandingZone API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.DisableBaseline">DisableBaseline</a></code> | <code>string[]</code> | IAM actions required for the DisableBaseline API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.DisableControl">DisableControl</a></code> | <code>string[]</code> | IAM actions required for the DisableControl API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.EnableBaseline">EnableBaseline</a></code> | <code>string[]</code> | IAM actions required for the EnableBaseline API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.EnableControl">EnableControl</a></code> | <code>string[]</code> | IAM actions required for the EnableControl API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.ListBaselines">ListBaselines</a></code> | <code>string[]</code> | IAM actions required for the ListBaselines API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.ListControlOperations">ListControlOperations</a></code> | <code>string[]</code> | IAM actions required for the ListControlOperations API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.ListEnabledBaselines">ListEnabledBaselines</a></code> | <code>string[]</code> | IAM actions required for the ListEnabledBaselines API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.ListEnabledControls">ListEnabledControls</a></code> | <code>string[]</code> | IAM actions required for the ListEnabledControls API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.ListLandingZoneOperations">ListLandingZoneOperations</a></code> | <code>string[]</code> | IAM actions required for the ListLandingZoneOperations API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.ListLandingZones">ListLandingZones</a></code> | <code>string[]</code> | IAM actions required for the ListLandingZones API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.opGetBaseline">opGetBaseline</a></code> | <code>string[]</code> | IAM actions required for the GetBaseline API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.opGetBaselineOperation">opGetBaselineOperation</a></code> | <code>string[]</code> | IAM actions required for the GetBaselineOperation API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.opGetControlOperation">opGetControlOperation</a></code> | <code>string[]</code> | IAM actions required for the GetControlOperation API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.opGetEnabledBaseline">opGetEnabledBaseline</a></code> | <code>string[]</code> | IAM actions required for the GetEnabledBaseline API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.opGetEnabledControl">opGetEnabledControl</a></code> | <code>string[]</code> | IAM actions required for the GetEnabledControl API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.opGetLandingZone">opGetLandingZone</a></code> | <code>string[]</code> | IAM actions required for the GetLandingZone API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.opGetLandingZoneOperation">opGetLandingZoneOperation</a></code> | <code>string[]</code> | IAM actions required for the GetLandingZoneOperation API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.ResetEnabledBaseline">ResetEnabledBaseline</a></code> | <code>string[]</code> | IAM actions required for the ResetEnabledBaseline API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.ResetEnabledControl">ResetEnabledControl</a></code> | <code>string[]</code> | IAM actions required for the ResetEnabledControl API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.ResetLandingZone">ResetLandingZone</a></code> | <code>string[]</code> | IAM actions required for the ResetLandingZone API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.UpdateEnabledBaseline">UpdateEnabledBaseline</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnabledBaseline API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.UpdateEnabledControl">UpdateEnabledControl</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnabledControl API call. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerOperations.property.UpdateLandingZone">UpdateLandingZone</a></code> | <code>string[]</code> | IAM actions required for the UpdateLandingZone API call. |

---

##### `CreateLandingZone`<sup>Required</sup> <a name="CreateLandingZone" id="@cdk_utils/iam.controltower.ControltowerOperations.property.CreateLandingZone"></a>

```typescript
public readonly CreateLandingZone: string[];
```

- *Type:* string[]

IAM actions required for the CreateLandingZone API call.

---

##### `DeleteLandingZone`<sup>Required</sup> <a name="DeleteLandingZone" id="@cdk_utils/iam.controltower.ControltowerOperations.property.DeleteLandingZone"></a>

```typescript
public readonly DeleteLandingZone: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLandingZone API call.

---

##### `DisableBaseline`<sup>Required</sup> <a name="DisableBaseline" id="@cdk_utils/iam.controltower.ControltowerOperations.property.DisableBaseline"></a>

```typescript
public readonly DisableBaseline: string[];
```

- *Type:* string[]

IAM actions required for the DisableBaseline API call.

---

##### `DisableControl`<sup>Required</sup> <a name="DisableControl" id="@cdk_utils/iam.controltower.ControltowerOperations.property.DisableControl"></a>

```typescript
public readonly DisableControl: string[];
```

- *Type:* string[]

IAM actions required for the DisableControl API call.

---

##### `EnableBaseline`<sup>Required</sup> <a name="EnableBaseline" id="@cdk_utils/iam.controltower.ControltowerOperations.property.EnableBaseline"></a>

```typescript
public readonly EnableBaseline: string[];
```

- *Type:* string[]

IAM actions required for the EnableBaseline API call.

---

##### `EnableControl`<sup>Required</sup> <a name="EnableControl" id="@cdk_utils/iam.controltower.ControltowerOperations.property.EnableControl"></a>

```typescript
public readonly EnableControl: string[];
```

- *Type:* string[]

IAM actions required for the EnableControl API call.

---

##### `ListBaselines`<sup>Required</sup> <a name="ListBaselines" id="@cdk_utils/iam.controltower.ControltowerOperations.property.ListBaselines"></a>

```typescript
public readonly ListBaselines: string[];
```

- *Type:* string[]

IAM actions required for the ListBaselines API call.

---

##### `ListControlOperations`<sup>Required</sup> <a name="ListControlOperations" id="@cdk_utils/iam.controltower.ControltowerOperations.property.ListControlOperations"></a>

```typescript
public readonly ListControlOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListControlOperations API call.

---

##### `ListEnabledBaselines`<sup>Required</sup> <a name="ListEnabledBaselines" id="@cdk_utils/iam.controltower.ControltowerOperations.property.ListEnabledBaselines"></a>

```typescript
public readonly ListEnabledBaselines: string[];
```

- *Type:* string[]

IAM actions required for the ListEnabledBaselines API call.

---

##### `ListEnabledControls`<sup>Required</sup> <a name="ListEnabledControls" id="@cdk_utils/iam.controltower.ControltowerOperations.property.ListEnabledControls"></a>

```typescript
public readonly ListEnabledControls: string[];
```

- *Type:* string[]

IAM actions required for the ListEnabledControls API call.

---

##### `ListLandingZoneOperations`<sup>Required</sup> <a name="ListLandingZoneOperations" id="@cdk_utils/iam.controltower.ControltowerOperations.property.ListLandingZoneOperations"></a>

```typescript
public readonly ListLandingZoneOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListLandingZoneOperations API call.

---

##### `ListLandingZones`<sup>Required</sup> <a name="ListLandingZones" id="@cdk_utils/iam.controltower.ControltowerOperations.property.ListLandingZones"></a>

```typescript
public readonly ListLandingZones: string[];
```

- *Type:* string[]

IAM actions required for the ListLandingZones API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.controltower.ControltowerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetBaseline`<sup>Required</sup> <a name="opGetBaseline" id="@cdk_utils/iam.controltower.ControltowerOperations.property.opGetBaseline"></a>

```typescript
public readonly opGetBaseline: string[];
```

- *Type:* string[]

IAM actions required for the GetBaseline API call.

---

##### `opGetBaselineOperation`<sup>Required</sup> <a name="opGetBaselineOperation" id="@cdk_utils/iam.controltower.ControltowerOperations.property.opGetBaselineOperation"></a>

```typescript
public readonly opGetBaselineOperation: string[];
```

- *Type:* string[]

IAM actions required for the GetBaselineOperation API call.

---

##### `opGetControlOperation`<sup>Required</sup> <a name="opGetControlOperation" id="@cdk_utils/iam.controltower.ControltowerOperations.property.opGetControlOperation"></a>

```typescript
public readonly opGetControlOperation: string[];
```

- *Type:* string[]

IAM actions required for the GetControlOperation API call.

---

##### `opGetEnabledBaseline`<sup>Required</sup> <a name="opGetEnabledBaseline" id="@cdk_utils/iam.controltower.ControltowerOperations.property.opGetEnabledBaseline"></a>

```typescript
public readonly opGetEnabledBaseline: string[];
```

- *Type:* string[]

IAM actions required for the GetEnabledBaseline API call.

---

##### `opGetEnabledControl`<sup>Required</sup> <a name="opGetEnabledControl" id="@cdk_utils/iam.controltower.ControltowerOperations.property.opGetEnabledControl"></a>

```typescript
public readonly opGetEnabledControl: string[];
```

- *Type:* string[]

IAM actions required for the GetEnabledControl API call.

---

##### `opGetLandingZone`<sup>Required</sup> <a name="opGetLandingZone" id="@cdk_utils/iam.controltower.ControltowerOperations.property.opGetLandingZone"></a>

```typescript
public readonly opGetLandingZone: string[];
```

- *Type:* string[]

IAM actions required for the GetLandingZone API call.

---

##### `opGetLandingZoneOperation`<sup>Required</sup> <a name="opGetLandingZoneOperation" id="@cdk_utils/iam.controltower.ControltowerOperations.property.opGetLandingZoneOperation"></a>

```typescript
public readonly opGetLandingZoneOperation: string[];
```

- *Type:* string[]

IAM actions required for the GetLandingZoneOperation API call.

---

##### `ResetEnabledBaseline`<sup>Required</sup> <a name="ResetEnabledBaseline" id="@cdk_utils/iam.controltower.ControltowerOperations.property.ResetEnabledBaseline"></a>

```typescript
public readonly ResetEnabledBaseline: string[];
```

- *Type:* string[]

IAM actions required for the ResetEnabledBaseline API call.

---

##### `ResetEnabledControl`<sup>Required</sup> <a name="ResetEnabledControl" id="@cdk_utils/iam.controltower.ControltowerOperations.property.ResetEnabledControl"></a>

```typescript
public readonly ResetEnabledControl: string[];
```

- *Type:* string[]

IAM actions required for the ResetEnabledControl API call.

---

##### `ResetLandingZone`<sup>Required</sup> <a name="ResetLandingZone" id="@cdk_utils/iam.controltower.ControltowerOperations.property.ResetLandingZone"></a>

```typescript
public readonly ResetLandingZone: string[];
```

- *Type:* string[]

IAM actions required for the ResetLandingZone API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.controltower.ControltowerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.controltower.ControltowerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateEnabledBaseline`<sup>Required</sup> <a name="UpdateEnabledBaseline" id="@cdk_utils/iam.controltower.ControltowerOperations.property.UpdateEnabledBaseline"></a>

```typescript
public readonly UpdateEnabledBaseline: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnabledBaseline API call.

---

##### `UpdateEnabledControl`<sup>Required</sup> <a name="UpdateEnabledControl" id="@cdk_utils/iam.controltower.ControltowerOperations.property.UpdateEnabledControl"></a>

```typescript
public readonly UpdateEnabledControl: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnabledControl API call.

---

##### `UpdateLandingZone`<sup>Required</sup> <a name="UpdateLandingZone" id="@cdk_utils/iam.controltower.ControltowerOperations.property.UpdateLandingZone"></a>

```typescript
public readonly UpdateLandingZone: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLandingZone API call.

---

### ControltowerResources <a name="ControltowerResources" id="@cdk_utils/iam.controltower.ControltowerResources"></a>

ARN builders, validators, and parsers for controltower resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.controltower.ControltowerResources.Initializer"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

new controltower.ControltowerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.baseline">baseline</a></code> | Builds an ARN for the Baseline resource. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.enabledBaseline">enabledBaseline</a></code> | Builds an ARN for the EnabledBaseline resource. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.enabledControl">enabledControl</a></code> | Builds an ARN for the EnabledControl resource. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.isValidBaselineArn">isValidBaselineArn</a></code> | Validates whether a string is a valid ARN for the Baseline resource. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.isValidEnabledBaselineArn">isValidEnabledBaselineArn</a></code> | Validates whether a string is a valid ARN for the EnabledBaseline resource. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.isValidEnabledControlArn">isValidEnabledControlArn</a></code> | Validates whether a string is a valid ARN for the EnabledControl resource. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.isValidLandingZoneArn">isValidLandingZoneArn</a></code> | Validates whether a string is a valid ARN for the LandingZone resource. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.landingZone">landingZone</a></code> | Builds an ARN for the LandingZone resource. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.parseBaselineArn">parseBaselineArn</a></code> | Parses a Baseline ARN into its components. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.parseEnabledBaselineArn">parseEnabledBaselineArn</a></code> | Parses a EnabledBaseline ARN into its components. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.parseEnabledControlArn">parseEnabledControlArn</a></code> | Parses a EnabledControl ARN into its components. |
| <code><a href="#@cdk_utils/iam.controltower.ControltowerResources.parseLandingZoneArn">parseLandingZoneArn</a></code> | Parses a LandingZone ARN into its components. |

---

##### `baseline` <a name="baseline" id="@cdk_utils/iam.controltower.ControltowerResources.baseline"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.baseline(props: ControltowerBaselineArnProps)
```

Builds an ARN for the Baseline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.controltower.ControltowerResources.baseline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.controltower.ControltowerBaselineArnProps">ControltowerBaselineArnProps</a>

---

##### `enabledBaseline` <a name="enabledBaseline" id="@cdk_utils/iam.controltower.ControltowerResources.enabledBaseline"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.enabledBaseline(props: ControltowerEnabledBaselineArnProps)
```

Builds an ARN for the EnabledBaseline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.controltower.ControltowerResources.enabledBaseline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.controltower.ControltowerEnabledBaselineArnProps">ControltowerEnabledBaselineArnProps</a>

---

##### `enabledControl` <a name="enabledControl" id="@cdk_utils/iam.controltower.ControltowerResources.enabledControl"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.enabledControl(props: ControltowerEnabledControlArnProps)
```

Builds an ARN for the EnabledControl resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.controltower.ControltowerResources.enabledControl.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.controltower.ControltowerEnabledControlArnProps">ControltowerEnabledControlArnProps</a>

---

##### `isValidBaselineArn` <a name="isValidBaselineArn" id="@cdk_utils/iam.controltower.ControltowerResources.isValidBaselineArn"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.isValidBaselineArn(arn: string)
```

Validates whether a string is a valid ARN for the Baseline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controltower.ControltowerResources.isValidBaselineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnabledBaselineArn` <a name="isValidEnabledBaselineArn" id="@cdk_utils/iam.controltower.ControltowerResources.isValidEnabledBaselineArn"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.isValidEnabledBaselineArn(arn: string)
```

Validates whether a string is a valid ARN for the EnabledBaseline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controltower.ControltowerResources.isValidEnabledBaselineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnabledControlArn` <a name="isValidEnabledControlArn" id="@cdk_utils/iam.controltower.ControltowerResources.isValidEnabledControlArn"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.isValidEnabledControlArn(arn: string)
```

Validates whether a string is a valid ARN for the EnabledControl resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controltower.ControltowerResources.isValidEnabledControlArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLandingZoneArn` <a name="isValidLandingZoneArn" id="@cdk_utils/iam.controltower.ControltowerResources.isValidLandingZoneArn"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.isValidLandingZoneArn(arn: string)
```

Validates whether a string is a valid ARN for the LandingZone resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controltower.ControltowerResources.isValidLandingZoneArn.parameter.arn"></a>

- *Type:* string

---

##### `landingZone` <a name="landingZone" id="@cdk_utils/iam.controltower.ControltowerResources.landingZone"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.landingZone(props: ControltowerLandingZoneArnProps)
```

Builds an ARN for the LandingZone resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.controltower.ControltowerResources.landingZone.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.controltower.ControltowerLandingZoneArnProps">ControltowerLandingZoneArnProps</a>

---

##### `parseBaselineArn` <a name="parseBaselineArn" id="@cdk_utils/iam.controltower.ControltowerResources.parseBaselineArn"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.parseBaselineArn(arn: string)
```

Parses a Baseline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controltower.ControltowerResources.parseBaselineArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnabledBaselineArn` <a name="parseEnabledBaselineArn" id="@cdk_utils/iam.controltower.ControltowerResources.parseEnabledBaselineArn"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.parseEnabledBaselineArn(arn: string)
```

Parses a EnabledBaseline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controltower.ControltowerResources.parseEnabledBaselineArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnabledControlArn` <a name="parseEnabledControlArn" id="@cdk_utils/iam.controltower.ControltowerResources.parseEnabledControlArn"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.parseEnabledControlArn(arn: string)
```

Parses a EnabledControl ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controltower.ControltowerResources.parseEnabledControlArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLandingZoneArn` <a name="parseLandingZoneArn" id="@cdk_utils/iam.controltower.ControltowerResources.parseLandingZoneArn"></a>

```typescript
import { controltower } from '@cdk_utils/iam'

controltower.ControltowerResources.parseLandingZoneArn(arn: string)
```

Parses a LandingZone ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.controltower.ControltowerResources.parseLandingZoneArn.parameter.arn"></a>

- *Type:* string

---




