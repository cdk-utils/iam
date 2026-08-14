# `backup` Submodule <a name="`backup` Submodule" id="@cdk_utils/iam.backup"></a>


## Structs <a name="Structs" id="Structs"></a>

### BackupBackupAccessPointArnComponents <a name="BackupBackupAccessPointArnComponents" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnComponents"></a>

Parsed components of a backupAccessPoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnComponents.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupBackupAccessPointArnComponents: backup.BackupBackupAccessPointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupAccessPointArnComponents.property.accessPointName">accessPointName</a></code> | <code>string</code> | The AccessPointName component. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupAccessPointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupAccessPointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupAccessPointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointName`<sup>Required</sup> <a name="accessPointName" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnComponents.property.accessPointName"></a>

```typescript
public readonly accessPointName: string;
```

- *Type:* string

The AccessPointName component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BackupBackupAccessPointArnProps <a name="BackupBackupAccessPointArnProps" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnProps"></a>

Properties for building a backupAccessPoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnProps.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupBackupAccessPointArnProps: backup.BackupBackupAccessPointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupAccessPointArnProps.property.accessPointName">accessPointName</a></code> | <code>string</code> | The AccessPointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupAccessPointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupAccessPointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupAccessPointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPointName`<sup>Required</sup> <a name="accessPointName" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnProps.property.accessPointName"></a>

```typescript
public readonly accessPointName: string;
```

- *Type:* string

The AccessPointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup.BackupBackupAccessPointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BackupBackupPlanArnComponents <a name="BackupBackupPlanArnComponents" id="@cdk_utils/iam.backup.BackupBackupPlanArnComponents"></a>

Parsed components of a backupPlan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupBackupPlanArnComponents.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupBackupPlanArnComponents: backup.BackupBackupPlanArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupPlanArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupPlanArnComponents.property.backupPlanId">backupPlanId</a></code> | <code>string</code> | The BackupPlanId component. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupPlanArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupPlanArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup.BackupBackupPlanArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdk_utils/iam.backup.BackupBackupPlanArnComponents.property.backupPlanId"></a>

```typescript
public readonly backupPlanId: string;
```

- *Type:* string

The BackupPlanId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupBackupPlanArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup.BackupBackupPlanArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BackupBackupPlanArnProps <a name="BackupBackupPlanArnProps" id="@cdk_utils/iam.backup.BackupBackupPlanArnProps"></a>

Properties for building a backupPlan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupBackupPlanArnProps.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupBackupPlanArnProps: backup.BackupBackupPlanArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupPlanArnProps.property.backupPlanId">backupPlanId</a></code> | <code>string</code> | The BackupPlanId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupPlanArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupPlanArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupPlanArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdk_utils/iam.backup.BackupBackupPlanArnProps.property.backupPlanId"></a>

```typescript
public readonly backupPlanId: string;
```

- *Type:* string

The BackupPlanId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup.BackupBackupPlanArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupBackupPlanArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup.BackupBackupPlanArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BackupBackupVaultArnComponents <a name="BackupBackupVaultArnComponents" id="@cdk_utils/iam.backup.BackupBackupVaultArnComponents"></a>

Parsed components of a backupVault ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupBackupVaultArnComponents.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupBackupVaultArnComponents: backup.BackupBackupVaultArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupVaultArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupVaultArnComponents.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | The BackupVaultName component. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupVaultArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupVaultArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup.BackupBackupVaultArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdk_utils/iam.backup.BackupBackupVaultArnComponents.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

The BackupVaultName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupBackupVaultArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup.BackupBackupVaultArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BackupBackupVaultArnProps <a name="BackupBackupVaultArnProps" id="@cdk_utils/iam.backup.BackupBackupVaultArnProps"></a>

Properties for building a backupVault ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupBackupVaultArnProps.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupBackupVaultArnProps: backup.BackupBackupVaultArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupVaultArnProps.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | The BackupVaultName component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupVaultArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupVaultArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupBackupVaultArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdk_utils/iam.backup.BackupBackupVaultArnProps.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

The BackupVaultName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup.BackupBackupVaultArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupBackupVaultArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup.BackupBackupVaultArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BackupFrameworkArnComponents <a name="BackupFrameworkArnComponents" id="@cdk_utils/iam.backup.BackupFrameworkArnComponents"></a>

Parsed components of a framework ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupFrameworkArnComponents.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupFrameworkArnComponents: backup.BackupFrameworkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupFrameworkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupFrameworkArnComponents.property.frameworkId">frameworkId</a></code> | <code>string</code> | The FrameworkId component. |
| <code><a href="#@cdk_utils/iam.backup.BackupFrameworkArnComponents.property.frameworkName">frameworkName</a></code> | <code>string</code> | The FrameworkName component. |
| <code><a href="#@cdk_utils/iam.backup.BackupFrameworkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupFrameworkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup.BackupFrameworkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdk_utils/iam.backup.BackupFrameworkArnComponents.property.frameworkId"></a>

```typescript
public readonly frameworkId: string;
```

- *Type:* string

The FrameworkId component.

---

##### `frameworkName`<sup>Required</sup> <a name="frameworkName" id="@cdk_utils/iam.backup.BackupFrameworkArnComponents.property.frameworkName"></a>

```typescript
public readonly frameworkName: string;
```

- *Type:* string

The FrameworkName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupFrameworkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup.BackupFrameworkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BackupFrameworkArnProps <a name="BackupFrameworkArnProps" id="@cdk_utils/iam.backup.BackupFrameworkArnProps"></a>

Properties for building a framework ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupFrameworkArnProps.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupFrameworkArnProps: backup.BackupFrameworkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupFrameworkArnProps.property.frameworkId">frameworkId</a></code> | <code>string</code> | The FrameworkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupFrameworkArnProps.property.frameworkName">frameworkName</a></code> | <code>string</code> | The FrameworkName component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupFrameworkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupFrameworkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupFrameworkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdk_utils/iam.backup.BackupFrameworkArnProps.property.frameworkId"></a>

```typescript
public readonly frameworkId: string;
```

- *Type:* string

The FrameworkId component of the ARN.

---

##### `frameworkName`<sup>Required</sup> <a name="frameworkName" id="@cdk_utils/iam.backup.BackupFrameworkArnProps.property.frameworkName"></a>

```typescript
public readonly frameworkName: string;
```

- *Type:* string

The FrameworkName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup.BackupFrameworkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupFrameworkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup.BackupFrameworkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BackupLegalHoldArnComponents <a name="BackupLegalHoldArnComponents" id="@cdk_utils/iam.backup.BackupLegalHoldArnComponents"></a>

Parsed components of a legalHold ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupLegalHoldArnComponents.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupLegalHoldArnComponents: backup.BackupLegalHoldArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupLegalHoldArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupLegalHoldArnComponents.property.legalHoldId">legalHoldId</a></code> | <code>string</code> | The LegalHoldId component. |
| <code><a href="#@cdk_utils/iam.backup.BackupLegalHoldArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupLegalHoldArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup.BackupLegalHoldArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `legalHoldId`<sup>Required</sup> <a name="legalHoldId" id="@cdk_utils/iam.backup.BackupLegalHoldArnComponents.property.legalHoldId"></a>

```typescript
public readonly legalHoldId: string;
```

- *Type:* string

The LegalHoldId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupLegalHoldArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup.BackupLegalHoldArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BackupLegalHoldArnProps <a name="BackupLegalHoldArnProps" id="@cdk_utils/iam.backup.BackupLegalHoldArnProps"></a>

Properties for building a legalHold ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupLegalHoldArnProps.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupLegalHoldArnProps: backup.BackupLegalHoldArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupLegalHoldArnProps.property.legalHoldId">legalHoldId</a></code> | <code>string</code> | The LegalHoldId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupLegalHoldArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupLegalHoldArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupLegalHoldArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `legalHoldId`<sup>Required</sup> <a name="legalHoldId" id="@cdk_utils/iam.backup.BackupLegalHoldArnProps.property.legalHoldId"></a>

```typescript
public readonly legalHoldId: string;
```

- *Type:* string

The LegalHoldId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup.BackupLegalHoldArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupLegalHoldArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup.BackupLegalHoldArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BackupRecoveryPointArnComponents <a name="BackupRecoveryPointArnComponents" id="@cdk_utils/iam.backup.BackupRecoveryPointArnComponents"></a>

Parsed components of a recoveryPoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupRecoveryPointArnComponents: backup.BackupRecoveryPointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.recoveryPointId">recoveryPointId</a></code> | <code>string</code> | The RecoveryPointId component. |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.resourceType">resourceType</a></code> | <code>string</code> | The ResourceType component. |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.vendor">vendor</a></code> | <code>string</code> | The Vendor component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recoveryPointId`<sup>Required</sup> <a name="recoveryPointId" id="@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.recoveryPointId"></a>

```typescript
public readonly recoveryPointId: string;
```

- *Type:* string

The RecoveryPointId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The ResourceType component.

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdk_utils/iam.backup.BackupRecoveryPointArnComponents.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

The Vendor component.

---

### BackupRecoveryPointArnProps <a name="BackupRecoveryPointArnProps" id="@cdk_utils/iam.backup.BackupRecoveryPointArnProps"></a>

Properties for building a recoveryPoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupRecoveryPointArnProps.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupRecoveryPointArnProps: backup.BackupRecoveryPointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.recoveryPointId">recoveryPointId</a></code> | <code>string</code> | The RecoveryPointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.resourceType">resourceType</a></code> | <code>string</code> | The ResourceType component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.vendor">vendor</a></code> | <code>string</code> | The Vendor component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `recoveryPointId`<sup>Required</sup> <a name="recoveryPointId" id="@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.recoveryPointId"></a>

```typescript
public readonly recoveryPointId: string;
```

- *Type:* string

The RecoveryPointId component of the ARN.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The ResourceType component of the ARN.

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

The Vendor component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup.BackupRecoveryPointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BackupReportPlanArnComponents <a name="BackupReportPlanArnComponents" id="@cdk_utils/iam.backup.BackupReportPlanArnComponents"></a>

Parsed components of a reportPlan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupReportPlanArnComponents.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupReportPlanArnComponents: backup.BackupReportPlanArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupReportPlanArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupReportPlanArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupReportPlanArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.backup.BackupReportPlanArnComponents.property.reportPlanId">reportPlanId</a></code> | <code>string</code> | The ReportPlanId component. |
| <code><a href="#@cdk_utils/iam.backup.BackupReportPlanArnComponents.property.reportPlanName">reportPlanName</a></code> | <code>string</code> | The ReportPlanName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup.BackupReportPlanArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupReportPlanArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup.BackupReportPlanArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reportPlanId`<sup>Required</sup> <a name="reportPlanId" id="@cdk_utils/iam.backup.BackupReportPlanArnComponents.property.reportPlanId"></a>

```typescript
public readonly reportPlanId: string;
```

- *Type:* string

The ReportPlanId component.

---

##### `reportPlanName`<sup>Required</sup> <a name="reportPlanName" id="@cdk_utils/iam.backup.BackupReportPlanArnComponents.property.reportPlanName"></a>

```typescript
public readonly reportPlanName: string;
```

- *Type:* string

The ReportPlanName component.

---

### BackupReportPlanArnProps <a name="BackupReportPlanArnProps" id="@cdk_utils/iam.backup.BackupReportPlanArnProps"></a>

Properties for building a reportPlan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupReportPlanArnProps.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupReportPlanArnProps: backup.BackupReportPlanArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupReportPlanArnProps.property.reportPlanId">reportPlanId</a></code> | <code>string</code> | The ReportPlanId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupReportPlanArnProps.property.reportPlanName">reportPlanName</a></code> | <code>string</code> | The ReportPlanName component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupReportPlanArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupReportPlanArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupReportPlanArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reportPlanId`<sup>Required</sup> <a name="reportPlanId" id="@cdk_utils/iam.backup.BackupReportPlanArnProps.property.reportPlanId"></a>

```typescript
public readonly reportPlanId: string;
```

- *Type:* string

The ReportPlanId component of the ARN.

---

##### `reportPlanName`<sup>Required</sup> <a name="reportPlanName" id="@cdk_utils/iam.backup.BackupReportPlanArnProps.property.reportPlanName"></a>

```typescript
public readonly reportPlanName: string;
```

- *Type:* string

The ReportPlanName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup.BackupReportPlanArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupReportPlanArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup.BackupReportPlanArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BackupRestoreTestingPlanArnComponents <a name="BackupRestoreTestingPlanArnComponents" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents"></a>

Parsed components of a restoreTestingPlan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupRestoreTestingPlanArnComponents: backup.BackupRestoreTestingPlanArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents.property.restoreTestingPlanId">restoreTestingPlanId</a></code> | <code>string</code> | The RestoreTestingPlanId component. |
| <code><a href="#@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents.property.restoreTestingPlanName">restoreTestingPlanName</a></code> | <code>string</code> | The RestoreTestingPlanName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `restoreTestingPlanId`<sup>Required</sup> <a name="restoreTestingPlanId" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents.property.restoreTestingPlanId"></a>

```typescript
public readonly restoreTestingPlanId: string;
```

- *Type:* string

The RestoreTestingPlanId component.

---

##### `restoreTestingPlanName`<sup>Required</sup> <a name="restoreTestingPlanName" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnComponents.property.restoreTestingPlanName"></a>

```typescript
public readonly restoreTestingPlanName: string;
```

- *Type:* string

The RestoreTestingPlanName component.

---

### BackupRestoreTestingPlanArnProps <a name="BackupRestoreTestingPlanArnProps" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps"></a>

Properties for building a restoreTestingPlan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupRestoreTestingPlanArnProps: backup.BackupRestoreTestingPlanArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps.property.restoreTestingPlanId">restoreTestingPlanId</a></code> | <code>string</code> | The RestoreTestingPlanId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps.property.restoreTestingPlanName">restoreTestingPlanName</a></code> | <code>string</code> | The RestoreTestingPlanName component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `restoreTestingPlanId`<sup>Required</sup> <a name="restoreTestingPlanId" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps.property.restoreTestingPlanId"></a>

```typescript
public readonly restoreTestingPlanId: string;
```

- *Type:* string

The RestoreTestingPlanId component of the ARN.

---

##### `restoreTestingPlanName`<sup>Required</sup> <a name="restoreTestingPlanName" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps.property.restoreTestingPlanName"></a>

```typescript
public readonly restoreTestingPlanName: string;
```

- *Type:* string

The RestoreTestingPlanName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BackupTieringConfigurationArnComponents <a name="BackupTieringConfigurationArnComponents" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents"></a>

Parsed components of a tieringConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupTieringConfigurationArnComponents: backup.BackupTieringConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents.property.tieringConfigurationId">tieringConfigurationId</a></code> | <code>string</code> | The TieringConfigurationId component. |
| <code><a href="#@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents.property.tieringConfigurationName">tieringConfigurationName</a></code> | <code>string</code> | The TieringConfigurationName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tieringConfigurationId`<sup>Required</sup> <a name="tieringConfigurationId" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents.property.tieringConfigurationId"></a>

```typescript
public readonly tieringConfigurationId: string;
```

- *Type:* string

The TieringConfigurationId component.

---

##### `tieringConfigurationName`<sup>Required</sup> <a name="tieringConfigurationName" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnComponents.property.tieringConfigurationName"></a>

```typescript
public readonly tieringConfigurationName: string;
```

- *Type:* string

The TieringConfigurationName component.

---

### BackupTieringConfigurationArnProps <a name="BackupTieringConfigurationArnProps" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnProps"></a>

Properties for building a tieringConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnProps.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

const backupTieringConfigurationArnProps: backup.BackupTieringConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupTieringConfigurationArnProps.property.tieringConfigurationId">tieringConfigurationId</a></code> | <code>string</code> | The TieringConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupTieringConfigurationArnProps.property.tieringConfigurationName">tieringConfigurationName</a></code> | <code>string</code> | The TieringConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup.BackupTieringConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup.BackupTieringConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup.BackupTieringConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `tieringConfigurationId`<sup>Required</sup> <a name="tieringConfigurationId" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnProps.property.tieringConfigurationId"></a>

```typescript
public readonly tieringConfigurationId: string;
```

- *Type:* string

The TieringConfigurationId component of the ARN.

---

##### `tieringConfigurationName`<sup>Required</sup> <a name="tieringConfigurationName" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnProps.property.tieringConfigurationName"></a>

```typescript
public readonly tieringConfigurationName: string;
```

- *Type:* string

The TieringConfigurationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup.BackupTieringConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### BackupActions <a name="BackupActions" id="@cdk_utils/iam.backup.BackupActions"></a>

IAM action constants for the backup service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup.BackupActions.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

new backup.BackupActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetBackupPlan">actionGetBackupPlan</a></code> | <code>string</code> | [Read] backup:GetBackupPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetBackupPlanFromJSON">actionGetBackupPlanFromJSON</a></code> | <code>string</code> | [Read] backup:GetBackupPlanFromJSON. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetBackupPlanFromTemplate">actionGetBackupPlanFromTemplate</a></code> | <code>string</code> | [Read] backup:GetBackupPlanFromTemplate. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetBackupSelection">actionGetBackupSelection</a></code> | <code>string</code> | [Read] backup:GetBackupSelection. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetBackupVaultAccessPolicy">actionGetBackupVaultAccessPolicy</a></code> | <code>string</code> | [Read] backup:GetBackupVaultAccessPolicy. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetBackupVaultNotifications">actionGetBackupVaultNotifications</a></code> | <code>string</code> | [Read] backup:GetBackupVaultNotifications. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetBackupVaultSharingPolicy">actionGetBackupVaultSharingPolicy</a></code> | <code>string</code> | [Read] backup:GetBackupVaultSharingPolicy. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetLegalHold">actionGetLegalHold</a></code> | <code>string</code> | [Read] backup:GetLegalHold. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetPITRMalwareScanResults">actionGetPITRMalwareScanResults</a></code> | <code>string</code> | [Read] backup:GetPITRMalwareScanResults. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetRecoveryPointIndexDetails">actionGetRecoveryPointIndexDetails</a></code> | <code>string</code> | [Read] backup:GetRecoveryPointIndexDetails. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetRecoveryPointRestoreMetadata">actionGetRecoveryPointRestoreMetadata</a></code> | <code>string</code> | [Read] backup:GetRecoveryPointRestoreMetadata. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetRestoreJobMetadata">actionGetRestoreJobMetadata</a></code> | <code>string</code> | [Read] backup:GetRestoreJobMetadata. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetRestoreTestingInferredMetadata">actionGetRestoreTestingInferredMetadata</a></code> | <code>string</code> | [Read] backup:GetRestoreTestingInferredMetadata. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetRestoreTestingPlan">actionGetRestoreTestingPlan</a></code> | <code>string</code> | [Read] backup:GetRestoreTestingPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetRestoreTestingSelection">actionGetRestoreTestingSelection</a></code> | <code>string</code> | [Read] backup:GetRestoreTestingSelection. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetSupportedResourceTypes">actionGetSupportedResourceTypes</a></code> | <code>string</code> | [Read] backup:GetSupportedResourceTypes. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.actionGetTieringConfiguration">actionGetTieringConfiguration</a></code> | <code>string</code> | [Read] backup:GetTieringConfiguration. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.AssociateBackupVaultMpaApprovalTeam">AssociateBackupVaultMpaApprovalTeam</a></code> | <code>string</code> | [Write] backup:AssociateBackupVaultMpaApprovalTeam. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CancelLegalHold">CancelLegalHold</a></code> | <code>string</code> | [Write] backup:CancelLegalHold. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CopyFromBackupVault">CopyFromBackupVault</a></code> | <code>string</code> | [Write] backup:CopyFromBackupVault. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CopyIntoBackupVault">CopyIntoBackupVault</a></code> | <code>string</code> | [Write] backup:CopyIntoBackupVault. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateBackupAccessPoint">CreateBackupAccessPoint</a></code> | <code>string</code> | [Write] backup:CreateBackupAccessPoint. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateBackupPlan">CreateBackupPlan</a></code> | <code>string</code> | [Write] backup:CreateBackupPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateBackupSelection">CreateBackupSelection</a></code> | <code>string</code> | [Write] backup:CreateBackupSelection. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateBackupVault">CreateBackupVault</a></code> | <code>string</code> | [Write] backup:CreateBackupVault. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateFramework">CreateFramework</a></code> | <code>string</code> | [Write] backup:CreateFramework. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateLegalHold">CreateLegalHold</a></code> | <code>string</code> | [Write] backup:CreateLegalHold. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateLogicallyAirGappedBackupVault">CreateLogicallyAirGappedBackupVault</a></code> | <code>string</code> | [Write] backup:CreateLogicallyAirGappedBackupVault. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateReportPlan">CreateReportPlan</a></code> | <code>string</code> | [Write] backup:CreateReportPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateRestoreAccessBackupVault">CreateRestoreAccessBackupVault</a></code> | <code>string</code> | [Write] backup:CreateRestoreAccessBackupVault. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateRestoreTestingPlan">CreateRestoreTestingPlan</a></code> | <code>string</code> | [Write] backup:CreateRestoreTestingPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateRestoreTestingSelection">CreateRestoreTestingSelection</a></code> | <code>string</code> | [Write] backup:CreateRestoreTestingSelection. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.CreateTieringConfiguration">CreateTieringConfiguration</a></code> | <code>string</code> | [Write] backup:CreateTieringConfiguration. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteBackupAccessPoint">DeleteBackupAccessPoint</a></code> | <code>string</code> | [Write] backup:DeleteBackupAccessPoint. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteBackupPlan">DeleteBackupPlan</a></code> | <code>string</code> | [Write] backup:DeleteBackupPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteBackupSelection">DeleteBackupSelection</a></code> | <code>string</code> | [Write] backup:DeleteBackupSelection. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteBackupVault">DeleteBackupVault</a></code> | <code>string</code> | [Write] backup:DeleteBackupVault. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteBackupVaultAccessPolicy">DeleteBackupVaultAccessPolicy</a></code> | <code>string</code> | [PermissionManagement] backup:DeleteBackupVaultAccessPolicy. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteBackupVaultLockConfiguration">DeleteBackupVaultLockConfiguration</a></code> | <code>string</code> | [Write] backup:DeleteBackupVaultLockConfiguration. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteBackupVaultNotifications">DeleteBackupVaultNotifications</a></code> | <code>string</code> | [Write] backup:DeleteBackupVaultNotifications. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteBackupVaultSharingPolicy">DeleteBackupVaultSharingPolicy</a></code> | <code>string</code> | [PermissionManagement] backup:DeleteBackupVaultSharingPolicy. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteFramework">DeleteFramework</a></code> | <code>string</code> | [Write] backup:DeleteFramework. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteRecoveryPoint">DeleteRecoveryPoint</a></code> | <code>string</code> | [Write] backup:DeleteRecoveryPoint. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteReportPlan">DeleteReportPlan</a></code> | <code>string</code> | [Write] backup:DeleteReportPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteRestoreTestingPlan">DeleteRestoreTestingPlan</a></code> | <code>string</code> | [Write] backup:DeleteRestoreTestingPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteRestoreTestingSelection">DeleteRestoreTestingSelection</a></code> | <code>string</code> | [Write] backup:DeleteRestoreTestingSelection. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DeleteTieringConfiguration">DeleteTieringConfiguration</a></code> | <code>string</code> | [Write] backup:DeleteTieringConfiguration. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeBackupAccessPoint">DescribeBackupAccessPoint</a></code> | <code>string</code> | [Read] backup:DescribeBackupAccessPoint. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeBackupJob">DescribeBackupJob</a></code> | <code>string</code> | [Read] backup:DescribeBackupJob. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeBackupVault">DescribeBackupVault</a></code> | <code>string</code> | [Read] backup:DescribeBackupVault. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeCopyJob">DescribeCopyJob</a></code> | <code>string</code> | [Read] backup:DescribeCopyJob. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeFramework">DescribeFramework</a></code> | <code>string</code> | [Read] backup:DescribeFramework. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeGlobalSettings">DescribeGlobalSettings</a></code> | <code>string</code> | [Read] backup:DescribeGlobalSettings. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeProtectedResource">DescribeProtectedResource</a></code> | <code>string</code> | [Read] backup:DescribeProtectedResource. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeRecoveryPoint">DescribeRecoveryPoint</a></code> | <code>string</code> | [Read] backup:DescribeRecoveryPoint. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeRegionSettings">DescribeRegionSettings</a></code> | <code>string</code> | [Read] backup:DescribeRegionSettings. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeReportJob">DescribeReportJob</a></code> | <code>string</code> | [Read] backup:DescribeReportJob. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeReportPlan">DescribeReportPlan</a></code> | <code>string</code> | [Read] backup:DescribeReportPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeRestoreJob">DescribeRestoreJob</a></code> | <code>string</code> | [Read] backup:DescribeRestoreJob. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DescribeScanJob">DescribeScanJob</a></code> | <code>string</code> | [Read] backup:DescribeScanJob. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DisassociateBackupVaultMpaApprovalTeam">DisassociateBackupVaultMpaApprovalTeam</a></code> | <code>string</code> | [Write] backup:DisassociateBackupVaultMpaApprovalTeam. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DisassociateRecoveryPoint">DisassociateRecoveryPoint</a></code> | <code>string</code> | [Write] backup:DisassociateRecoveryPoint. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.DisassociateRecoveryPointFromParent">DisassociateRecoveryPointFromParent</a></code> | <code>string</code> | [Write] backup:DisassociateRecoveryPointFromParent. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ExportBackupPlanTemplate">ExportBackupPlanTemplate</a></code> | <code>string</code> | [Read] backup:ExportBackupPlanTemplate. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListBackupAccessPoints">ListBackupAccessPoints</a></code> | <code>string</code> | [List] backup:ListBackupAccessPoints. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListBackupAccessPointsByRecoveryPoint">ListBackupAccessPointsByRecoveryPoint</a></code> | <code>string</code> | [List] backup:ListBackupAccessPointsByRecoveryPoint. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListBackupAccessPointsByResource">ListBackupAccessPointsByResource</a></code> | <code>string</code> | [List] backup:ListBackupAccessPointsByResource. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListBackupJobs">ListBackupJobs</a></code> | <code>string</code> | [List] backup:ListBackupJobs. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListBackupJobSummaries">ListBackupJobSummaries</a></code> | <code>string</code> | [List] backup:ListBackupJobSummaries. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListBackupPlans">ListBackupPlans</a></code> | <code>string</code> | [List] backup:ListBackupPlans. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListBackupPlanTemplates">ListBackupPlanTemplates</a></code> | <code>string</code> | [List] backup:ListBackupPlanTemplates. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListBackupPlanVersions">ListBackupPlanVersions</a></code> | <code>string</code> | [List] backup:ListBackupPlanVersions. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListBackupSelections">ListBackupSelections</a></code> | <code>string</code> | [List] backup:ListBackupSelections. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListBackupVaults">ListBackupVaults</a></code> | <code>string</code> | [List] backup:ListBackupVaults. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListCopyJobs">ListCopyJobs</a></code> | <code>string</code> | [List] backup:ListCopyJobs. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListCopyJobSummaries">ListCopyJobSummaries</a></code> | <code>string</code> | [List] backup:ListCopyJobSummaries. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListFrameworks">ListFrameworks</a></code> | <code>string</code> | [List] backup:ListFrameworks. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListIndexedRecoveryPoints">ListIndexedRecoveryPoints</a></code> | <code>string</code> | [List] backup:ListIndexedRecoveryPoints. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListIndexedRecoveryPointsForSearch">ListIndexedRecoveryPointsForSearch</a></code> | <code>string</code> | [PermissionManagement] backup:ListIndexedRecoveryPointsForSearch. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListLegalHolds">ListLegalHolds</a></code> | <code>string</code> | [List] backup:ListLegalHolds. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListProtectedResources">ListProtectedResources</a></code> | <code>string</code> | [List] backup:ListProtectedResources. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListProtectedResourcesByBackupVault">ListProtectedResourcesByBackupVault</a></code> | <code>string</code> | [List] backup:ListProtectedResourcesByBackupVault. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListRecoveryPointsByBackupVault">ListRecoveryPointsByBackupVault</a></code> | <code>string</code> | [List] backup:ListRecoveryPointsByBackupVault. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListRecoveryPointsByLegalHold">ListRecoveryPointsByLegalHold</a></code> | <code>string</code> | [List] backup:ListRecoveryPointsByLegalHold. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListRecoveryPointsByResource">ListRecoveryPointsByResource</a></code> | <code>string</code> | [List] backup:ListRecoveryPointsByResource. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListReportJobs">ListReportJobs</a></code> | <code>string</code> | [List] backup:ListReportJobs. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListReportPlans">ListReportPlans</a></code> | <code>string</code> | [List] backup:ListReportPlans. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListRestoreAccessBackupVaults">ListRestoreAccessBackupVaults</a></code> | <code>string</code> | [List] backup:ListRestoreAccessBackupVaults. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListRestoreJobs">ListRestoreJobs</a></code> | <code>string</code> | [List] backup:ListRestoreJobs. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListRestoreJobsByProtectedResource">ListRestoreJobsByProtectedResource</a></code> | <code>string</code> | [List] backup:ListRestoreJobsByProtectedResource. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListRestoreJobSummaries">ListRestoreJobSummaries</a></code> | <code>string</code> | [List] backup:ListRestoreJobSummaries. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListRestoreTestingPlans">ListRestoreTestingPlans</a></code> | <code>string</code> | [List] backup:ListRestoreTestingPlans. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListRestoreTestingSelections">ListRestoreTestingSelections</a></code> | <code>string</code> | [List] backup:ListRestoreTestingSelections. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListScanJobs">ListScanJobs</a></code> | <code>string</code> | [List] backup:ListScanJobs. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListScanJobSummaries">ListScanJobSummaries</a></code> | <code>string</code> | [List] backup:ListScanJobSummaries. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListTags">ListTags</a></code> | <code>string</code> | [Read] backup:ListTags. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.ListTieringConfigurations">ListTieringConfigurations</a></code> | <code>string</code> | [List] backup:ListTieringConfigurations. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.PutBackupVaultAccessPolicy">PutBackupVaultAccessPolicy</a></code> | <code>string</code> | [PermissionManagement] backup:PutBackupVaultAccessPolicy. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.PutBackupVaultLockConfiguration">PutBackupVaultLockConfiguration</a></code> | <code>string</code> | [Write] backup:PutBackupVaultLockConfiguration. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.PutBackupVaultNotifications">PutBackupVaultNotifications</a></code> | <code>string</code> | [Write] backup:PutBackupVaultNotifications. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.PutBackupVaultSharingPolicy">PutBackupVaultSharingPolicy</a></code> | <code>string</code> | [PermissionManagement] backup:PutBackupVaultSharingPolicy. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.PutRestoreValidationResult">PutRestoreValidationResult</a></code> | <code>string</code> | [Write] backup:PutRestoreValidationResult. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.RevokeRestoreAccessBackupVault">RevokeRestoreAccessBackupVault</a></code> | <code>string</code> | [Write] backup:RevokeRestoreAccessBackupVault. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.SearchRecoveryPoint">SearchRecoveryPoint</a></code> | <code>string</code> | [PermissionManagement] backup:SearchRecoveryPoint. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.StartBackupJob">StartBackupJob</a></code> | <code>string</code> | [Write] backup:StartBackupJob. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.StartCopyJob">StartCopyJob</a></code> | <code>string</code> | [Write] backup:StartCopyJob. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.StartReportJob">StartReportJob</a></code> | <code>string</code> | [Write] backup:StartReportJob. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.StartRestoreJob">StartRestoreJob</a></code> | <code>string</code> | [Write] backup:StartRestoreJob. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.StartScanJob">StartScanJob</a></code> | <code>string</code> | [Write] backup:StartScanJob. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.StopBackupJob">StopBackupJob</a></code> | <code>string</code> | [Write] backup:StopBackupJob. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] backup:TagResource. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] backup:UntagResource. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.UpdateBackupPlan">UpdateBackupPlan</a></code> | <code>string</code> | [Write] backup:UpdateBackupPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.UpdateFramework">UpdateFramework</a></code> | <code>string</code> | [Write] backup:UpdateFramework. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.UpdateGlobalSettings">UpdateGlobalSettings</a></code> | <code>string</code> | [Write] backup:UpdateGlobalSettings. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.UpdateRecoveryPointIndexSettings">UpdateRecoveryPointIndexSettings</a></code> | <code>string</code> | [Write] backup:UpdateRecoveryPointIndexSettings. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.UpdateRecoveryPointLifecycle">UpdateRecoveryPointLifecycle</a></code> | <code>string</code> | [Write] backup:UpdateRecoveryPointLifecycle. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.UpdateRegionSettings">UpdateRegionSettings</a></code> | <code>string</code> | [Write] backup:UpdateRegionSettings. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.UpdateReportPlan">UpdateReportPlan</a></code> | <code>string</code> | [Write] backup:UpdateReportPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.UpdateRestoreTestingPlan">UpdateRestoreTestingPlan</a></code> | <code>string</code> | [Write] backup:UpdateRestoreTestingPlan. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.UpdateRestoreTestingSelection">UpdateRestoreTestingSelection</a></code> | <code>string</code> | [Write] backup:UpdateRestoreTestingSelection. |
| <code><a href="#@cdk_utils/iam.backup.BackupActions.property.UpdateTieringConfiguration">UpdateTieringConfiguration</a></code> | <code>string</code> | [Write] backup:UpdateTieringConfiguration. |

---

##### `actionGetBackupPlan`<sup>Required</sup> <a name="actionGetBackupPlan" id="@cdk_utils/iam.backup.BackupActions.property.actionGetBackupPlan"></a>

```typescript
public readonly actionGetBackupPlan: string;
```

- *Type:* string

[Read] backup:GetBackupPlan.

---

##### `actionGetBackupPlanFromJSON`<sup>Required</sup> <a name="actionGetBackupPlanFromJSON" id="@cdk_utils/iam.backup.BackupActions.property.actionGetBackupPlanFromJSON"></a>

```typescript
public readonly actionGetBackupPlanFromJSON: string;
```

- *Type:* string

[Read] backup:GetBackupPlanFromJSON.

---

##### `actionGetBackupPlanFromTemplate`<sup>Required</sup> <a name="actionGetBackupPlanFromTemplate" id="@cdk_utils/iam.backup.BackupActions.property.actionGetBackupPlanFromTemplate"></a>

```typescript
public readonly actionGetBackupPlanFromTemplate: string;
```

- *Type:* string

[Read] backup:GetBackupPlanFromTemplate.

---

##### `actionGetBackupSelection`<sup>Required</sup> <a name="actionGetBackupSelection" id="@cdk_utils/iam.backup.BackupActions.property.actionGetBackupSelection"></a>

```typescript
public readonly actionGetBackupSelection: string;
```

- *Type:* string

[Read] backup:GetBackupSelection.

---

##### `actionGetBackupVaultAccessPolicy`<sup>Required</sup> <a name="actionGetBackupVaultAccessPolicy" id="@cdk_utils/iam.backup.BackupActions.property.actionGetBackupVaultAccessPolicy"></a>

```typescript
public readonly actionGetBackupVaultAccessPolicy: string;
```

- *Type:* string

[Read] backup:GetBackupVaultAccessPolicy.

---

##### `actionGetBackupVaultNotifications`<sup>Required</sup> <a name="actionGetBackupVaultNotifications" id="@cdk_utils/iam.backup.BackupActions.property.actionGetBackupVaultNotifications"></a>

```typescript
public readonly actionGetBackupVaultNotifications: string;
```

- *Type:* string

[Read] backup:GetBackupVaultNotifications.

---

##### `actionGetBackupVaultSharingPolicy`<sup>Required</sup> <a name="actionGetBackupVaultSharingPolicy" id="@cdk_utils/iam.backup.BackupActions.property.actionGetBackupVaultSharingPolicy"></a>

```typescript
public readonly actionGetBackupVaultSharingPolicy: string;
```

- *Type:* string

[Read] backup:GetBackupVaultSharingPolicy.

---

##### `actionGetLegalHold`<sup>Required</sup> <a name="actionGetLegalHold" id="@cdk_utils/iam.backup.BackupActions.property.actionGetLegalHold"></a>

```typescript
public readonly actionGetLegalHold: string;
```

- *Type:* string

[Read] backup:GetLegalHold.

---

##### `actionGetPITRMalwareScanResults`<sup>Required</sup> <a name="actionGetPITRMalwareScanResults" id="@cdk_utils/iam.backup.BackupActions.property.actionGetPITRMalwareScanResults"></a>

```typescript
public readonly actionGetPITRMalwareScanResults: string;
```

- *Type:* string

[Read] backup:GetPITRMalwareScanResults.

---

##### `actionGetRecoveryPointIndexDetails`<sup>Required</sup> <a name="actionGetRecoveryPointIndexDetails" id="@cdk_utils/iam.backup.BackupActions.property.actionGetRecoveryPointIndexDetails"></a>

```typescript
public readonly actionGetRecoveryPointIndexDetails: string;
```

- *Type:* string

[Read] backup:GetRecoveryPointIndexDetails.

---

##### `actionGetRecoveryPointRestoreMetadata`<sup>Required</sup> <a name="actionGetRecoveryPointRestoreMetadata" id="@cdk_utils/iam.backup.BackupActions.property.actionGetRecoveryPointRestoreMetadata"></a>

```typescript
public readonly actionGetRecoveryPointRestoreMetadata: string;
```

- *Type:* string

[Read] backup:GetRecoveryPointRestoreMetadata.

---

##### `actionGetRestoreJobMetadata`<sup>Required</sup> <a name="actionGetRestoreJobMetadata" id="@cdk_utils/iam.backup.BackupActions.property.actionGetRestoreJobMetadata"></a>

```typescript
public readonly actionGetRestoreJobMetadata: string;
```

- *Type:* string

[Read] backup:GetRestoreJobMetadata.

---

##### `actionGetRestoreTestingInferredMetadata`<sup>Required</sup> <a name="actionGetRestoreTestingInferredMetadata" id="@cdk_utils/iam.backup.BackupActions.property.actionGetRestoreTestingInferredMetadata"></a>

```typescript
public readonly actionGetRestoreTestingInferredMetadata: string;
```

- *Type:* string

[Read] backup:GetRestoreTestingInferredMetadata.

---

##### `actionGetRestoreTestingPlan`<sup>Required</sup> <a name="actionGetRestoreTestingPlan" id="@cdk_utils/iam.backup.BackupActions.property.actionGetRestoreTestingPlan"></a>

```typescript
public readonly actionGetRestoreTestingPlan: string;
```

- *Type:* string

[Read] backup:GetRestoreTestingPlan.

---

##### `actionGetRestoreTestingSelection`<sup>Required</sup> <a name="actionGetRestoreTestingSelection" id="@cdk_utils/iam.backup.BackupActions.property.actionGetRestoreTestingSelection"></a>

```typescript
public readonly actionGetRestoreTestingSelection: string;
```

- *Type:* string

[Read] backup:GetRestoreTestingSelection.

---

##### `actionGetSupportedResourceTypes`<sup>Required</sup> <a name="actionGetSupportedResourceTypes" id="@cdk_utils/iam.backup.BackupActions.property.actionGetSupportedResourceTypes"></a>

```typescript
public readonly actionGetSupportedResourceTypes: string;
```

- *Type:* string

[Read] backup:GetSupportedResourceTypes.

---

##### `actionGetTieringConfiguration`<sup>Required</sup> <a name="actionGetTieringConfiguration" id="@cdk_utils/iam.backup.BackupActions.property.actionGetTieringConfiguration"></a>

```typescript
public readonly actionGetTieringConfiguration: string;
```

- *Type:* string

[Read] backup:GetTieringConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.backup.BackupActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.backup.BackupActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.backup.BackupActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.backup.BackupActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.backup.BackupActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateBackupVaultMpaApprovalTeam`<sup>Required</sup> <a name="AssociateBackupVaultMpaApprovalTeam" id="@cdk_utils/iam.backup.BackupActions.property.AssociateBackupVaultMpaApprovalTeam"></a>

```typescript
public readonly AssociateBackupVaultMpaApprovalTeam: string;
```

- *Type:* string

[Write] backup:AssociateBackupVaultMpaApprovalTeam.

---

##### `CancelLegalHold`<sup>Required</sup> <a name="CancelLegalHold" id="@cdk_utils/iam.backup.BackupActions.property.CancelLegalHold"></a>

```typescript
public readonly CancelLegalHold: string;
```

- *Type:* string

[Write] backup:CancelLegalHold.

---

##### `CopyFromBackupVault`<sup>Required</sup> <a name="CopyFromBackupVault" id="@cdk_utils/iam.backup.BackupActions.property.CopyFromBackupVault"></a>

```typescript
public readonly CopyFromBackupVault: string;
```

- *Type:* string

[Write] backup:CopyFromBackupVault.

---

##### `CopyIntoBackupVault`<sup>Required</sup> <a name="CopyIntoBackupVault" id="@cdk_utils/iam.backup.BackupActions.property.CopyIntoBackupVault"></a>

```typescript
public readonly CopyIntoBackupVault: string;
```

- *Type:* string

[Write] backup:CopyIntoBackupVault.

---

##### `CreateBackupAccessPoint`<sup>Required</sup> <a name="CreateBackupAccessPoint" id="@cdk_utils/iam.backup.BackupActions.property.CreateBackupAccessPoint"></a>

```typescript
public readonly CreateBackupAccessPoint: string;
```

- *Type:* string

[Write] backup:CreateBackupAccessPoint.

---

##### `CreateBackupPlan`<sup>Required</sup> <a name="CreateBackupPlan" id="@cdk_utils/iam.backup.BackupActions.property.CreateBackupPlan"></a>

```typescript
public readonly CreateBackupPlan: string;
```

- *Type:* string

[Write] backup:CreateBackupPlan.

---

##### `CreateBackupSelection`<sup>Required</sup> <a name="CreateBackupSelection" id="@cdk_utils/iam.backup.BackupActions.property.CreateBackupSelection"></a>

```typescript
public readonly CreateBackupSelection: string;
```

- *Type:* string

[Write] backup:CreateBackupSelection.

---

##### `CreateBackupVault`<sup>Required</sup> <a name="CreateBackupVault" id="@cdk_utils/iam.backup.BackupActions.property.CreateBackupVault"></a>

```typescript
public readonly CreateBackupVault: string;
```

- *Type:* string

[Write] backup:CreateBackupVault.

---

##### `CreateFramework`<sup>Required</sup> <a name="CreateFramework" id="@cdk_utils/iam.backup.BackupActions.property.CreateFramework"></a>

```typescript
public readonly CreateFramework: string;
```

- *Type:* string

[Write] backup:CreateFramework.

---

##### `CreateLegalHold`<sup>Required</sup> <a name="CreateLegalHold" id="@cdk_utils/iam.backup.BackupActions.property.CreateLegalHold"></a>

```typescript
public readonly CreateLegalHold: string;
```

- *Type:* string

[Write] backup:CreateLegalHold.

---

##### `CreateLogicallyAirGappedBackupVault`<sup>Required</sup> <a name="CreateLogicallyAirGappedBackupVault" id="@cdk_utils/iam.backup.BackupActions.property.CreateLogicallyAirGappedBackupVault"></a>

```typescript
public readonly CreateLogicallyAirGappedBackupVault: string;
```

- *Type:* string

[Write] backup:CreateLogicallyAirGappedBackupVault.

---

##### `CreateReportPlan`<sup>Required</sup> <a name="CreateReportPlan" id="@cdk_utils/iam.backup.BackupActions.property.CreateReportPlan"></a>

```typescript
public readonly CreateReportPlan: string;
```

- *Type:* string

[Write] backup:CreateReportPlan.

---

##### `CreateRestoreAccessBackupVault`<sup>Required</sup> <a name="CreateRestoreAccessBackupVault" id="@cdk_utils/iam.backup.BackupActions.property.CreateRestoreAccessBackupVault"></a>

```typescript
public readonly CreateRestoreAccessBackupVault: string;
```

- *Type:* string

[Write] backup:CreateRestoreAccessBackupVault.

---

##### `CreateRestoreTestingPlan`<sup>Required</sup> <a name="CreateRestoreTestingPlan" id="@cdk_utils/iam.backup.BackupActions.property.CreateRestoreTestingPlan"></a>

```typescript
public readonly CreateRestoreTestingPlan: string;
```

- *Type:* string

[Write] backup:CreateRestoreTestingPlan.

---

##### `CreateRestoreTestingSelection`<sup>Required</sup> <a name="CreateRestoreTestingSelection" id="@cdk_utils/iam.backup.BackupActions.property.CreateRestoreTestingSelection"></a>

```typescript
public readonly CreateRestoreTestingSelection: string;
```

- *Type:* string

[Write] backup:CreateRestoreTestingSelection.

---

##### `CreateTieringConfiguration`<sup>Required</sup> <a name="CreateTieringConfiguration" id="@cdk_utils/iam.backup.BackupActions.property.CreateTieringConfiguration"></a>

```typescript
public readonly CreateTieringConfiguration: string;
```

- *Type:* string

[Write] backup:CreateTieringConfiguration.

---

##### `DeleteBackupAccessPoint`<sup>Required</sup> <a name="DeleteBackupAccessPoint" id="@cdk_utils/iam.backup.BackupActions.property.DeleteBackupAccessPoint"></a>

```typescript
public readonly DeleteBackupAccessPoint: string;
```

- *Type:* string

[Write] backup:DeleteBackupAccessPoint.

---

##### `DeleteBackupPlan`<sup>Required</sup> <a name="DeleteBackupPlan" id="@cdk_utils/iam.backup.BackupActions.property.DeleteBackupPlan"></a>

```typescript
public readonly DeleteBackupPlan: string;
```

- *Type:* string

[Write] backup:DeleteBackupPlan.

---

##### `DeleteBackupSelection`<sup>Required</sup> <a name="DeleteBackupSelection" id="@cdk_utils/iam.backup.BackupActions.property.DeleteBackupSelection"></a>

```typescript
public readonly DeleteBackupSelection: string;
```

- *Type:* string

[Write] backup:DeleteBackupSelection.

---

##### `DeleteBackupVault`<sup>Required</sup> <a name="DeleteBackupVault" id="@cdk_utils/iam.backup.BackupActions.property.DeleteBackupVault"></a>

```typescript
public readonly DeleteBackupVault: string;
```

- *Type:* string

[Write] backup:DeleteBackupVault.

---

##### `DeleteBackupVaultAccessPolicy`<sup>Required</sup> <a name="DeleteBackupVaultAccessPolicy" id="@cdk_utils/iam.backup.BackupActions.property.DeleteBackupVaultAccessPolicy"></a>

```typescript
public readonly DeleteBackupVaultAccessPolicy: string;
```

- *Type:* string

[PermissionManagement] backup:DeleteBackupVaultAccessPolicy.

---

##### `DeleteBackupVaultLockConfiguration`<sup>Required</sup> <a name="DeleteBackupVaultLockConfiguration" id="@cdk_utils/iam.backup.BackupActions.property.DeleteBackupVaultLockConfiguration"></a>

```typescript
public readonly DeleteBackupVaultLockConfiguration: string;
```

- *Type:* string

[Write] backup:DeleteBackupVaultLockConfiguration.

---

##### `DeleteBackupVaultNotifications`<sup>Required</sup> <a name="DeleteBackupVaultNotifications" id="@cdk_utils/iam.backup.BackupActions.property.DeleteBackupVaultNotifications"></a>

```typescript
public readonly DeleteBackupVaultNotifications: string;
```

- *Type:* string

[Write] backup:DeleteBackupVaultNotifications.

---

##### `DeleteBackupVaultSharingPolicy`<sup>Required</sup> <a name="DeleteBackupVaultSharingPolicy" id="@cdk_utils/iam.backup.BackupActions.property.DeleteBackupVaultSharingPolicy"></a>

```typescript
public readonly DeleteBackupVaultSharingPolicy: string;
```

- *Type:* string

[PermissionManagement] backup:DeleteBackupVaultSharingPolicy.

---

##### `DeleteFramework`<sup>Required</sup> <a name="DeleteFramework" id="@cdk_utils/iam.backup.BackupActions.property.DeleteFramework"></a>

```typescript
public readonly DeleteFramework: string;
```

- *Type:* string

[Write] backup:DeleteFramework.

---

##### `DeleteRecoveryPoint`<sup>Required</sup> <a name="DeleteRecoveryPoint" id="@cdk_utils/iam.backup.BackupActions.property.DeleteRecoveryPoint"></a>

```typescript
public readonly DeleteRecoveryPoint: string;
```

- *Type:* string

[Write] backup:DeleteRecoveryPoint.

---

##### `DeleteReportPlan`<sup>Required</sup> <a name="DeleteReportPlan" id="@cdk_utils/iam.backup.BackupActions.property.DeleteReportPlan"></a>

```typescript
public readonly DeleteReportPlan: string;
```

- *Type:* string

[Write] backup:DeleteReportPlan.

---

##### `DeleteRestoreTestingPlan`<sup>Required</sup> <a name="DeleteRestoreTestingPlan" id="@cdk_utils/iam.backup.BackupActions.property.DeleteRestoreTestingPlan"></a>

```typescript
public readonly DeleteRestoreTestingPlan: string;
```

- *Type:* string

[Write] backup:DeleteRestoreTestingPlan.

---

##### `DeleteRestoreTestingSelection`<sup>Required</sup> <a name="DeleteRestoreTestingSelection" id="@cdk_utils/iam.backup.BackupActions.property.DeleteRestoreTestingSelection"></a>

```typescript
public readonly DeleteRestoreTestingSelection: string;
```

- *Type:* string

[Write] backup:DeleteRestoreTestingSelection.

---

##### `DeleteTieringConfiguration`<sup>Required</sup> <a name="DeleteTieringConfiguration" id="@cdk_utils/iam.backup.BackupActions.property.DeleteTieringConfiguration"></a>

```typescript
public readonly DeleteTieringConfiguration: string;
```

- *Type:* string

[Write] backup:DeleteTieringConfiguration.

---

##### `DescribeBackupAccessPoint`<sup>Required</sup> <a name="DescribeBackupAccessPoint" id="@cdk_utils/iam.backup.BackupActions.property.DescribeBackupAccessPoint"></a>

```typescript
public readonly DescribeBackupAccessPoint: string;
```

- *Type:* string

[Read] backup:DescribeBackupAccessPoint.

---

##### `DescribeBackupJob`<sup>Required</sup> <a name="DescribeBackupJob" id="@cdk_utils/iam.backup.BackupActions.property.DescribeBackupJob"></a>

```typescript
public readonly DescribeBackupJob: string;
```

- *Type:* string

[Read] backup:DescribeBackupJob.

---

##### `DescribeBackupVault`<sup>Required</sup> <a name="DescribeBackupVault" id="@cdk_utils/iam.backup.BackupActions.property.DescribeBackupVault"></a>

```typescript
public readonly DescribeBackupVault: string;
```

- *Type:* string

[Read] backup:DescribeBackupVault.

---

##### `DescribeCopyJob`<sup>Required</sup> <a name="DescribeCopyJob" id="@cdk_utils/iam.backup.BackupActions.property.DescribeCopyJob"></a>

```typescript
public readonly DescribeCopyJob: string;
```

- *Type:* string

[Read] backup:DescribeCopyJob.

---

##### `DescribeFramework`<sup>Required</sup> <a name="DescribeFramework" id="@cdk_utils/iam.backup.BackupActions.property.DescribeFramework"></a>

```typescript
public readonly DescribeFramework: string;
```

- *Type:* string

[Read] backup:DescribeFramework.

---

##### `DescribeGlobalSettings`<sup>Required</sup> <a name="DescribeGlobalSettings" id="@cdk_utils/iam.backup.BackupActions.property.DescribeGlobalSettings"></a>

```typescript
public readonly DescribeGlobalSettings: string;
```

- *Type:* string

[Read] backup:DescribeGlobalSettings.

---

##### `DescribeProtectedResource`<sup>Required</sup> <a name="DescribeProtectedResource" id="@cdk_utils/iam.backup.BackupActions.property.DescribeProtectedResource"></a>

```typescript
public readonly DescribeProtectedResource: string;
```

- *Type:* string

[Read] backup:DescribeProtectedResource.

---

##### `DescribeRecoveryPoint`<sup>Required</sup> <a name="DescribeRecoveryPoint" id="@cdk_utils/iam.backup.BackupActions.property.DescribeRecoveryPoint"></a>

```typescript
public readonly DescribeRecoveryPoint: string;
```

- *Type:* string

[Read] backup:DescribeRecoveryPoint.

---

##### `DescribeRegionSettings`<sup>Required</sup> <a name="DescribeRegionSettings" id="@cdk_utils/iam.backup.BackupActions.property.DescribeRegionSettings"></a>

```typescript
public readonly DescribeRegionSettings: string;
```

- *Type:* string

[Read] backup:DescribeRegionSettings.

---

##### `DescribeReportJob`<sup>Required</sup> <a name="DescribeReportJob" id="@cdk_utils/iam.backup.BackupActions.property.DescribeReportJob"></a>

```typescript
public readonly DescribeReportJob: string;
```

- *Type:* string

[Read] backup:DescribeReportJob.

---

##### `DescribeReportPlan`<sup>Required</sup> <a name="DescribeReportPlan" id="@cdk_utils/iam.backup.BackupActions.property.DescribeReportPlan"></a>

```typescript
public readonly DescribeReportPlan: string;
```

- *Type:* string

[Read] backup:DescribeReportPlan.

---

##### `DescribeRestoreJob`<sup>Required</sup> <a name="DescribeRestoreJob" id="@cdk_utils/iam.backup.BackupActions.property.DescribeRestoreJob"></a>

```typescript
public readonly DescribeRestoreJob: string;
```

- *Type:* string

[Read] backup:DescribeRestoreJob.

---

##### `DescribeScanJob`<sup>Required</sup> <a name="DescribeScanJob" id="@cdk_utils/iam.backup.BackupActions.property.DescribeScanJob"></a>

```typescript
public readonly DescribeScanJob: string;
```

- *Type:* string

[Read] backup:DescribeScanJob.

---

##### `DisassociateBackupVaultMpaApprovalTeam`<sup>Required</sup> <a name="DisassociateBackupVaultMpaApprovalTeam" id="@cdk_utils/iam.backup.BackupActions.property.DisassociateBackupVaultMpaApprovalTeam"></a>

```typescript
public readonly DisassociateBackupVaultMpaApprovalTeam: string;
```

- *Type:* string

[Write] backup:DisassociateBackupVaultMpaApprovalTeam.

---

##### `DisassociateRecoveryPoint`<sup>Required</sup> <a name="DisassociateRecoveryPoint" id="@cdk_utils/iam.backup.BackupActions.property.DisassociateRecoveryPoint"></a>

```typescript
public readonly DisassociateRecoveryPoint: string;
```

- *Type:* string

[Write] backup:DisassociateRecoveryPoint.

---

##### `DisassociateRecoveryPointFromParent`<sup>Required</sup> <a name="DisassociateRecoveryPointFromParent" id="@cdk_utils/iam.backup.BackupActions.property.DisassociateRecoveryPointFromParent"></a>

```typescript
public readonly DisassociateRecoveryPointFromParent: string;
```

- *Type:* string

[Write] backup:DisassociateRecoveryPointFromParent.

---

##### `ExportBackupPlanTemplate`<sup>Required</sup> <a name="ExportBackupPlanTemplate" id="@cdk_utils/iam.backup.BackupActions.property.ExportBackupPlanTemplate"></a>

```typescript
public readonly ExportBackupPlanTemplate: string;
```

- *Type:* string

[Read] backup:ExportBackupPlanTemplate.

---

##### `ListBackupAccessPoints`<sup>Required</sup> <a name="ListBackupAccessPoints" id="@cdk_utils/iam.backup.BackupActions.property.ListBackupAccessPoints"></a>

```typescript
public readonly ListBackupAccessPoints: string;
```

- *Type:* string

[List] backup:ListBackupAccessPoints.

---

##### `ListBackupAccessPointsByRecoveryPoint`<sup>Required</sup> <a name="ListBackupAccessPointsByRecoveryPoint" id="@cdk_utils/iam.backup.BackupActions.property.ListBackupAccessPointsByRecoveryPoint"></a>

```typescript
public readonly ListBackupAccessPointsByRecoveryPoint: string;
```

- *Type:* string

[List] backup:ListBackupAccessPointsByRecoveryPoint.

---

##### `ListBackupAccessPointsByResource`<sup>Required</sup> <a name="ListBackupAccessPointsByResource" id="@cdk_utils/iam.backup.BackupActions.property.ListBackupAccessPointsByResource"></a>

```typescript
public readonly ListBackupAccessPointsByResource: string;
```

- *Type:* string

[List] backup:ListBackupAccessPointsByResource.

---

##### `ListBackupJobs`<sup>Required</sup> <a name="ListBackupJobs" id="@cdk_utils/iam.backup.BackupActions.property.ListBackupJobs"></a>

```typescript
public readonly ListBackupJobs: string;
```

- *Type:* string

[List] backup:ListBackupJobs.

---

##### `ListBackupJobSummaries`<sup>Required</sup> <a name="ListBackupJobSummaries" id="@cdk_utils/iam.backup.BackupActions.property.ListBackupJobSummaries"></a>

```typescript
public readonly ListBackupJobSummaries: string;
```

- *Type:* string

[List] backup:ListBackupJobSummaries.

---

##### `ListBackupPlans`<sup>Required</sup> <a name="ListBackupPlans" id="@cdk_utils/iam.backup.BackupActions.property.ListBackupPlans"></a>

```typescript
public readonly ListBackupPlans: string;
```

- *Type:* string

[List] backup:ListBackupPlans.

---

##### `ListBackupPlanTemplates`<sup>Required</sup> <a name="ListBackupPlanTemplates" id="@cdk_utils/iam.backup.BackupActions.property.ListBackupPlanTemplates"></a>

```typescript
public readonly ListBackupPlanTemplates: string;
```

- *Type:* string

[List] backup:ListBackupPlanTemplates.

---

##### `ListBackupPlanVersions`<sup>Required</sup> <a name="ListBackupPlanVersions" id="@cdk_utils/iam.backup.BackupActions.property.ListBackupPlanVersions"></a>

```typescript
public readonly ListBackupPlanVersions: string;
```

- *Type:* string

[List] backup:ListBackupPlanVersions.

---

##### `ListBackupSelections`<sup>Required</sup> <a name="ListBackupSelections" id="@cdk_utils/iam.backup.BackupActions.property.ListBackupSelections"></a>

```typescript
public readonly ListBackupSelections: string;
```

- *Type:* string

[List] backup:ListBackupSelections.

---

##### `ListBackupVaults`<sup>Required</sup> <a name="ListBackupVaults" id="@cdk_utils/iam.backup.BackupActions.property.ListBackupVaults"></a>

```typescript
public readonly ListBackupVaults: string;
```

- *Type:* string

[List] backup:ListBackupVaults.

---

##### `ListCopyJobs`<sup>Required</sup> <a name="ListCopyJobs" id="@cdk_utils/iam.backup.BackupActions.property.ListCopyJobs"></a>

```typescript
public readonly ListCopyJobs: string;
```

- *Type:* string

[List] backup:ListCopyJobs.

---

##### `ListCopyJobSummaries`<sup>Required</sup> <a name="ListCopyJobSummaries" id="@cdk_utils/iam.backup.BackupActions.property.ListCopyJobSummaries"></a>

```typescript
public readonly ListCopyJobSummaries: string;
```

- *Type:* string

[List] backup:ListCopyJobSummaries.

---

##### `ListFrameworks`<sup>Required</sup> <a name="ListFrameworks" id="@cdk_utils/iam.backup.BackupActions.property.ListFrameworks"></a>

```typescript
public readonly ListFrameworks: string;
```

- *Type:* string

[List] backup:ListFrameworks.

---

##### `ListIndexedRecoveryPoints`<sup>Required</sup> <a name="ListIndexedRecoveryPoints" id="@cdk_utils/iam.backup.BackupActions.property.ListIndexedRecoveryPoints"></a>

```typescript
public readonly ListIndexedRecoveryPoints: string;
```

- *Type:* string

[List] backup:ListIndexedRecoveryPoints.

---

##### `ListIndexedRecoveryPointsForSearch`<sup>Required</sup> <a name="ListIndexedRecoveryPointsForSearch" id="@cdk_utils/iam.backup.BackupActions.property.ListIndexedRecoveryPointsForSearch"></a>

```typescript
public readonly ListIndexedRecoveryPointsForSearch: string;
```

- *Type:* string

[PermissionManagement] backup:ListIndexedRecoveryPointsForSearch.

---

##### `ListLegalHolds`<sup>Required</sup> <a name="ListLegalHolds" id="@cdk_utils/iam.backup.BackupActions.property.ListLegalHolds"></a>

```typescript
public readonly ListLegalHolds: string;
```

- *Type:* string

[List] backup:ListLegalHolds.

---

##### `ListProtectedResources`<sup>Required</sup> <a name="ListProtectedResources" id="@cdk_utils/iam.backup.BackupActions.property.ListProtectedResources"></a>

```typescript
public readonly ListProtectedResources: string;
```

- *Type:* string

[List] backup:ListProtectedResources.

---

##### `ListProtectedResourcesByBackupVault`<sup>Required</sup> <a name="ListProtectedResourcesByBackupVault" id="@cdk_utils/iam.backup.BackupActions.property.ListProtectedResourcesByBackupVault"></a>

```typescript
public readonly ListProtectedResourcesByBackupVault: string;
```

- *Type:* string

[List] backup:ListProtectedResourcesByBackupVault.

---

##### `ListRecoveryPointsByBackupVault`<sup>Required</sup> <a name="ListRecoveryPointsByBackupVault" id="@cdk_utils/iam.backup.BackupActions.property.ListRecoveryPointsByBackupVault"></a>

```typescript
public readonly ListRecoveryPointsByBackupVault: string;
```

- *Type:* string

[List] backup:ListRecoveryPointsByBackupVault.

---

##### `ListRecoveryPointsByLegalHold`<sup>Required</sup> <a name="ListRecoveryPointsByLegalHold" id="@cdk_utils/iam.backup.BackupActions.property.ListRecoveryPointsByLegalHold"></a>

```typescript
public readonly ListRecoveryPointsByLegalHold: string;
```

- *Type:* string

[List] backup:ListRecoveryPointsByLegalHold.

---

##### `ListRecoveryPointsByResource`<sup>Required</sup> <a name="ListRecoveryPointsByResource" id="@cdk_utils/iam.backup.BackupActions.property.ListRecoveryPointsByResource"></a>

```typescript
public readonly ListRecoveryPointsByResource: string;
```

- *Type:* string

[List] backup:ListRecoveryPointsByResource.

---

##### `ListReportJobs`<sup>Required</sup> <a name="ListReportJobs" id="@cdk_utils/iam.backup.BackupActions.property.ListReportJobs"></a>

```typescript
public readonly ListReportJobs: string;
```

- *Type:* string

[List] backup:ListReportJobs.

---

##### `ListReportPlans`<sup>Required</sup> <a name="ListReportPlans" id="@cdk_utils/iam.backup.BackupActions.property.ListReportPlans"></a>

```typescript
public readonly ListReportPlans: string;
```

- *Type:* string

[List] backup:ListReportPlans.

---

##### `ListRestoreAccessBackupVaults`<sup>Required</sup> <a name="ListRestoreAccessBackupVaults" id="@cdk_utils/iam.backup.BackupActions.property.ListRestoreAccessBackupVaults"></a>

```typescript
public readonly ListRestoreAccessBackupVaults: string;
```

- *Type:* string

[List] backup:ListRestoreAccessBackupVaults.

---

##### `ListRestoreJobs`<sup>Required</sup> <a name="ListRestoreJobs" id="@cdk_utils/iam.backup.BackupActions.property.ListRestoreJobs"></a>

```typescript
public readonly ListRestoreJobs: string;
```

- *Type:* string

[List] backup:ListRestoreJobs.

---

##### `ListRestoreJobsByProtectedResource`<sup>Required</sup> <a name="ListRestoreJobsByProtectedResource" id="@cdk_utils/iam.backup.BackupActions.property.ListRestoreJobsByProtectedResource"></a>

```typescript
public readonly ListRestoreJobsByProtectedResource: string;
```

- *Type:* string

[List] backup:ListRestoreJobsByProtectedResource.

---

##### `ListRestoreJobSummaries`<sup>Required</sup> <a name="ListRestoreJobSummaries" id="@cdk_utils/iam.backup.BackupActions.property.ListRestoreJobSummaries"></a>

```typescript
public readonly ListRestoreJobSummaries: string;
```

- *Type:* string

[List] backup:ListRestoreJobSummaries.

---

##### `ListRestoreTestingPlans`<sup>Required</sup> <a name="ListRestoreTestingPlans" id="@cdk_utils/iam.backup.BackupActions.property.ListRestoreTestingPlans"></a>

```typescript
public readonly ListRestoreTestingPlans: string;
```

- *Type:* string

[List] backup:ListRestoreTestingPlans.

---

##### `ListRestoreTestingSelections`<sup>Required</sup> <a name="ListRestoreTestingSelections" id="@cdk_utils/iam.backup.BackupActions.property.ListRestoreTestingSelections"></a>

```typescript
public readonly ListRestoreTestingSelections: string;
```

- *Type:* string

[List] backup:ListRestoreTestingSelections.

---

##### `ListScanJobs`<sup>Required</sup> <a name="ListScanJobs" id="@cdk_utils/iam.backup.BackupActions.property.ListScanJobs"></a>

```typescript
public readonly ListScanJobs: string;
```

- *Type:* string

[List] backup:ListScanJobs.

---

##### `ListScanJobSummaries`<sup>Required</sup> <a name="ListScanJobSummaries" id="@cdk_utils/iam.backup.BackupActions.property.ListScanJobSummaries"></a>

```typescript
public readonly ListScanJobSummaries: string;
```

- *Type:* string

[List] backup:ListScanJobSummaries.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.backup.BackupActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[Read] backup:ListTags.

---

##### `ListTieringConfigurations`<sup>Required</sup> <a name="ListTieringConfigurations" id="@cdk_utils/iam.backup.BackupActions.property.ListTieringConfigurations"></a>

```typescript
public readonly ListTieringConfigurations: string;
```

- *Type:* string

[List] backup:ListTieringConfigurations.

---

##### `PutBackupVaultAccessPolicy`<sup>Required</sup> <a name="PutBackupVaultAccessPolicy" id="@cdk_utils/iam.backup.BackupActions.property.PutBackupVaultAccessPolicy"></a>

```typescript
public readonly PutBackupVaultAccessPolicy: string;
```

- *Type:* string

[PermissionManagement] backup:PutBackupVaultAccessPolicy.

---

##### `PutBackupVaultLockConfiguration`<sup>Required</sup> <a name="PutBackupVaultLockConfiguration" id="@cdk_utils/iam.backup.BackupActions.property.PutBackupVaultLockConfiguration"></a>

```typescript
public readonly PutBackupVaultLockConfiguration: string;
```

- *Type:* string

[Write] backup:PutBackupVaultLockConfiguration.

---

##### `PutBackupVaultNotifications`<sup>Required</sup> <a name="PutBackupVaultNotifications" id="@cdk_utils/iam.backup.BackupActions.property.PutBackupVaultNotifications"></a>

```typescript
public readonly PutBackupVaultNotifications: string;
```

- *Type:* string

[Write] backup:PutBackupVaultNotifications.

---

##### `PutBackupVaultSharingPolicy`<sup>Required</sup> <a name="PutBackupVaultSharingPolicy" id="@cdk_utils/iam.backup.BackupActions.property.PutBackupVaultSharingPolicy"></a>

```typescript
public readonly PutBackupVaultSharingPolicy: string;
```

- *Type:* string

[PermissionManagement] backup:PutBackupVaultSharingPolicy.

---

##### `PutRestoreValidationResult`<sup>Required</sup> <a name="PutRestoreValidationResult" id="@cdk_utils/iam.backup.BackupActions.property.PutRestoreValidationResult"></a>

```typescript
public readonly PutRestoreValidationResult: string;
```

- *Type:* string

[Write] backup:PutRestoreValidationResult.

---

##### `RevokeRestoreAccessBackupVault`<sup>Required</sup> <a name="RevokeRestoreAccessBackupVault" id="@cdk_utils/iam.backup.BackupActions.property.RevokeRestoreAccessBackupVault"></a>

```typescript
public readonly RevokeRestoreAccessBackupVault: string;
```

- *Type:* string

[Write] backup:RevokeRestoreAccessBackupVault.

---

##### `SearchRecoveryPoint`<sup>Required</sup> <a name="SearchRecoveryPoint" id="@cdk_utils/iam.backup.BackupActions.property.SearchRecoveryPoint"></a>

```typescript
public readonly SearchRecoveryPoint: string;
```

- *Type:* string

[PermissionManagement] backup:SearchRecoveryPoint.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.backup.BackupActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartBackupJob`<sup>Required</sup> <a name="StartBackupJob" id="@cdk_utils/iam.backup.BackupActions.property.StartBackupJob"></a>

```typescript
public readonly StartBackupJob: string;
```

- *Type:* string

[Write] backup:StartBackupJob.

---

##### `StartCopyJob`<sup>Required</sup> <a name="StartCopyJob" id="@cdk_utils/iam.backup.BackupActions.property.StartCopyJob"></a>

```typescript
public readonly StartCopyJob: string;
```

- *Type:* string

[Write] backup:StartCopyJob.

---

##### `StartReportJob`<sup>Required</sup> <a name="StartReportJob" id="@cdk_utils/iam.backup.BackupActions.property.StartReportJob"></a>

```typescript
public readonly StartReportJob: string;
```

- *Type:* string

[Write] backup:StartReportJob.

---

##### `StartRestoreJob`<sup>Required</sup> <a name="StartRestoreJob" id="@cdk_utils/iam.backup.BackupActions.property.StartRestoreJob"></a>

```typescript
public readonly StartRestoreJob: string;
```

- *Type:* string

[Write] backup:StartRestoreJob.

---

##### `StartScanJob`<sup>Required</sup> <a name="StartScanJob" id="@cdk_utils/iam.backup.BackupActions.property.StartScanJob"></a>

```typescript
public readonly StartScanJob: string;
```

- *Type:* string

[Write] backup:StartScanJob.

---

##### `StopBackupJob`<sup>Required</sup> <a name="StopBackupJob" id="@cdk_utils/iam.backup.BackupActions.property.StopBackupJob"></a>

```typescript
public readonly StopBackupJob: string;
```

- *Type:* string

[Write] backup:StopBackupJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.backup.BackupActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] backup:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.backup.BackupActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] backup:UntagResource.

---

##### `UpdateBackupPlan`<sup>Required</sup> <a name="UpdateBackupPlan" id="@cdk_utils/iam.backup.BackupActions.property.UpdateBackupPlan"></a>

```typescript
public readonly UpdateBackupPlan: string;
```

- *Type:* string

[Write] backup:UpdateBackupPlan.

---

##### `UpdateFramework`<sup>Required</sup> <a name="UpdateFramework" id="@cdk_utils/iam.backup.BackupActions.property.UpdateFramework"></a>

```typescript
public readonly UpdateFramework: string;
```

- *Type:* string

[Write] backup:UpdateFramework.

---

##### `UpdateGlobalSettings`<sup>Required</sup> <a name="UpdateGlobalSettings" id="@cdk_utils/iam.backup.BackupActions.property.UpdateGlobalSettings"></a>

```typescript
public readonly UpdateGlobalSettings: string;
```

- *Type:* string

[Write] backup:UpdateGlobalSettings.

---

##### `UpdateRecoveryPointIndexSettings`<sup>Required</sup> <a name="UpdateRecoveryPointIndexSettings" id="@cdk_utils/iam.backup.BackupActions.property.UpdateRecoveryPointIndexSettings"></a>

```typescript
public readonly UpdateRecoveryPointIndexSettings: string;
```

- *Type:* string

[Write] backup:UpdateRecoveryPointIndexSettings.

---

##### `UpdateRecoveryPointLifecycle`<sup>Required</sup> <a name="UpdateRecoveryPointLifecycle" id="@cdk_utils/iam.backup.BackupActions.property.UpdateRecoveryPointLifecycle"></a>

```typescript
public readonly UpdateRecoveryPointLifecycle: string;
```

- *Type:* string

[Write] backup:UpdateRecoveryPointLifecycle.

---

##### `UpdateRegionSettings`<sup>Required</sup> <a name="UpdateRegionSettings" id="@cdk_utils/iam.backup.BackupActions.property.UpdateRegionSettings"></a>

```typescript
public readonly UpdateRegionSettings: string;
```

- *Type:* string

[Write] backup:UpdateRegionSettings.

---

##### `UpdateReportPlan`<sup>Required</sup> <a name="UpdateReportPlan" id="@cdk_utils/iam.backup.BackupActions.property.UpdateReportPlan"></a>

```typescript
public readonly UpdateReportPlan: string;
```

- *Type:* string

[Write] backup:UpdateReportPlan.

---

##### `UpdateRestoreTestingPlan`<sup>Required</sup> <a name="UpdateRestoreTestingPlan" id="@cdk_utils/iam.backup.BackupActions.property.UpdateRestoreTestingPlan"></a>

```typescript
public readonly UpdateRestoreTestingPlan: string;
```

- *Type:* string

[Write] backup:UpdateRestoreTestingPlan.

---

##### `UpdateRestoreTestingSelection`<sup>Required</sup> <a name="UpdateRestoreTestingSelection" id="@cdk_utils/iam.backup.BackupActions.property.UpdateRestoreTestingSelection"></a>

```typescript
public readonly UpdateRestoreTestingSelection: string;
```

- *Type:* string

[Write] backup:UpdateRestoreTestingSelection.

---

##### `UpdateTieringConfiguration`<sup>Required</sup> <a name="UpdateTieringConfiguration" id="@cdk_utils/iam.backup.BackupActions.property.UpdateTieringConfiguration"></a>

```typescript
public readonly UpdateTieringConfiguration: string;
```

- *Type:* string

[Write] backup:UpdateTieringConfiguration.

---

### BackupConditions <a name="BackupConditions" id="@cdk_utils/iam.backup.BackupConditions"></a>

Condition key constants and builders for backup.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup.BackupConditions.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

new backup.BackupConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.changeableForDays">changeableForDays</a></code> | Generates a condition block for `backup:ChangeableForDays`. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.copyTargetOrgPaths">copyTargetOrgPaths</a></code> | Generates a condition block for `backup:CopyTargetOrgPaths`. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.copyTargets">copyTargets</a></code> | Generates a condition block for `backup:CopyTargets`. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.frameworkArns">frameworkArns</a></code> | Generates a condition block for `backup:FrameworkArns`. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.index">index</a></code> | Generates a condition block for `backup:Index`. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.maxRetentionDays">maxRetentionDays</a></code> | Generates a condition block for `backup:MaxRetentionDays`. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.minRetentionDays">minRetentionDays</a></code> | Generates a condition block for `backup:MinRetentionDays`. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.mpaApprovalTeamARN">mpaApprovalTeamARN</a></code> | Generates a condition block for `backup:MpaApprovalTeamArn`. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `changeableForDays` <a name="changeableForDays" id="@cdk_utils/iam.backup.BackupConditions.changeableForDays"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupConditions.changeableForDays(value: number)
```

Generates a condition block for `backup:ChangeableForDays`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.backup.BackupConditions.changeableForDays.parameter.value"></a>

- *Type:* number

---

##### `copyTargetOrgPaths` <a name="copyTargetOrgPaths" id="@cdk_utils/iam.backup.BackupConditions.copyTargetOrgPaths"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupConditions.copyTargetOrgPaths(values: string[])
```

Generates a condition block for `backup:CopyTargetOrgPaths`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.backup.BackupConditions.copyTargetOrgPaths.parameter.values"></a>

- *Type:* string[]

---

##### `copyTargets` <a name="copyTargets" id="@cdk_utils/iam.backup.BackupConditions.copyTargets"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupConditions.copyTargets(values: string[])
```

Generates a condition block for `backup:CopyTargets`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.backup.BackupConditions.copyTargets.parameter.values"></a>

- *Type:* string[]

---

##### `frameworkArns` <a name="frameworkArns" id="@cdk_utils/iam.backup.BackupConditions.frameworkArns"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupConditions.frameworkArns(values: string[])
```

Generates a condition block for `backup:FrameworkArns`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.backup.BackupConditions.frameworkArns.parameter.values"></a>

- *Type:* string[]

---

##### `index` <a name="index" id="@cdk_utils/iam.backup.BackupConditions.index"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupConditions.index(value: string)
```

Generates a condition block for `backup:Index`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.backup.BackupConditions.index.parameter.value"></a>

- *Type:* string

---

##### `maxRetentionDays` <a name="maxRetentionDays" id="@cdk_utils/iam.backup.BackupConditions.maxRetentionDays"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupConditions.maxRetentionDays(value: number)
```

Generates a condition block for `backup:MaxRetentionDays`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.backup.BackupConditions.maxRetentionDays.parameter.value"></a>

- *Type:* number

---

##### `minRetentionDays` <a name="minRetentionDays" id="@cdk_utils/iam.backup.BackupConditions.minRetentionDays"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupConditions.minRetentionDays(value: number)
```

Generates a condition block for `backup:MinRetentionDays`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.backup.BackupConditions.minRetentionDays.parameter.value"></a>

- *Type:* number

---

##### `mpaApprovalTeamARN` <a name="mpaApprovalTeamARN" id="@cdk_utils/iam.backup.BackupConditions.mpaApprovalTeamARN"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupConditions.mpaApprovalTeamARN(value: string)
```

Generates a condition block for `backup:MpaApprovalTeamArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.backup.BackupConditions.mpaApprovalTeamARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.backup.BackupConditions.requestTag"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.backup.BackupConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.backup.BackupConditions.resourceTag"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.backup.BackupConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.backup.BackupConditions.tagKeys"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.backup.BackupConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.AssociateBackupVaultMpaApprovalTeamConditionKeys">AssociateBackupVaultMpaApprovalTeamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateBackupVaultMpaApprovalTeam action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CHANGEABLE_FOR_DAYS">CHANGEABLE_FOR_DAYS</a></code> | <code>string</code> | Condition key: backup:ChangeableForDays (Numeric). |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.COPY_TARGET_ORG_PATHS">COPY_TARGET_ORG_PATHS</a></code> | <code>string</code> | Condition key: backup:CopyTargetOrgPaths (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.COPY_TARGETS">COPY_TARGETS</a></code> | <code>string</code> | Condition key: backup:CopyTargets (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CopyFromBackupVaultConditionKeys">CopyFromBackupVaultConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyFromBackupVault action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CopyIntoBackupVaultConditionKeys">CopyIntoBackupVaultConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyIntoBackupVault action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CreateBackupAccessPointConditionKeys">CreateBackupAccessPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBackupAccessPoint action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CreateBackupPlanConditionKeys">CreateBackupPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBackupPlan action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CreateBackupVaultConditionKeys">CreateBackupVaultConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBackupVault action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CreateFrameworkConditionKeys">CreateFrameworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFramework action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CreateLegalHoldConditionKeys">CreateLegalHoldConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLegalHold action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CreateLogicallyAirGappedBackupVaultConditionKeys">CreateLogicallyAirGappedBackupVaultConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLogicallyAirGappedBackupVault action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CreateReportPlanConditionKeys">CreateReportPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReportPlan action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CreateRestoreAccessBackupVaultConditionKeys">CreateRestoreAccessBackupVaultConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRestoreAccessBackupVault action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CreateRestoreTestingPlanConditionKeys">CreateRestoreTestingPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRestoreTestingPlan action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.CreateTieringConfigurationConditionKeys">CreateTieringConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTieringConfiguration action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.FRAMEWORK_ARNS">FRAMEWORK_ARNS</a></code> | <code>string</code> | Condition key: backup:FrameworkArns (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.INDEX">INDEX</a></code> | <code>string</code> | Condition key: backup:Index (String). |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.MAX_RETENTION_DAYS">MAX_RETENTION_DAYS</a></code> | <code>string</code> | Condition key: backup:MaxRetentionDays (Numeric). |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.MIN_RETENTION_DAYS">MIN_RETENTION_DAYS</a></code> | <code>string</code> | Condition key: backup:MinRetentionDays (Numeric). |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.MPA_APPROVAL_TEAM_ARN">MPA_APPROVAL_TEAM_ARN</a></code> | <code>string</code> | Condition key: backup:MpaApprovalTeamArn (ARN). |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.PutBackupVaultLockConfigurationConditionKeys">PutBackupVaultLockConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutBackupVaultLockConfiguration action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.UpdateRecoveryPointIndexSettingsConditionKeys">UpdateRecoveryPointIndexSettingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRecoveryPointIndexSettings action. |
| <code><a href="#@cdk_utils/iam.backup.BackupConditions.property.UpdateReportPlanConditionKeys">UpdateReportPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateReportPlan action. |

---

##### `AssociateBackupVaultMpaApprovalTeamConditionKeys`<sup>Required</sup> <a name="AssociateBackupVaultMpaApprovalTeamConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.AssociateBackupVaultMpaApprovalTeamConditionKeys"></a>

```typescript
public readonly AssociateBackupVaultMpaApprovalTeamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateBackupVaultMpaApprovalTeam action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.backup.BackupConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.backup.BackupConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.backup.BackupConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CHANGEABLE_FOR_DAYS`<sup>Required</sup> <a name="CHANGEABLE_FOR_DAYS" id="@cdk_utils/iam.backup.BackupConditions.property.CHANGEABLE_FOR_DAYS"></a>

```typescript
public readonly CHANGEABLE_FOR_DAYS: string;
```

- *Type:* string

Condition key: backup:ChangeableForDays (Numeric).

---

##### `COPY_TARGET_ORG_PATHS`<sup>Required</sup> <a name="COPY_TARGET_ORG_PATHS" id="@cdk_utils/iam.backup.BackupConditions.property.COPY_TARGET_ORG_PATHS"></a>

```typescript
public readonly COPY_TARGET_ORG_PATHS: string;
```

- *Type:* string

Condition key: backup:CopyTargetOrgPaths (ArrayOfString).

---

##### `COPY_TARGETS`<sup>Required</sup> <a name="COPY_TARGETS" id="@cdk_utils/iam.backup.BackupConditions.property.COPY_TARGETS"></a>

```typescript
public readonly COPY_TARGETS: string;
```

- *Type:* string

Condition key: backup:CopyTargets (ArrayOfARN).

---

##### `CopyFromBackupVaultConditionKeys`<sup>Required</sup> <a name="CopyFromBackupVaultConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CopyFromBackupVaultConditionKeys"></a>

```typescript
public readonly CopyFromBackupVaultConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyFromBackupVault action.

---

##### `CopyIntoBackupVaultConditionKeys`<sup>Required</sup> <a name="CopyIntoBackupVaultConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CopyIntoBackupVaultConditionKeys"></a>

```typescript
public readonly CopyIntoBackupVaultConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyIntoBackupVault action.

---

##### `CreateBackupAccessPointConditionKeys`<sup>Required</sup> <a name="CreateBackupAccessPointConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CreateBackupAccessPointConditionKeys"></a>

```typescript
public readonly CreateBackupAccessPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBackupAccessPoint action.

---

##### `CreateBackupPlanConditionKeys`<sup>Required</sup> <a name="CreateBackupPlanConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CreateBackupPlanConditionKeys"></a>

```typescript
public readonly CreateBackupPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBackupPlan action.

---

##### `CreateBackupVaultConditionKeys`<sup>Required</sup> <a name="CreateBackupVaultConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CreateBackupVaultConditionKeys"></a>

```typescript
public readonly CreateBackupVaultConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBackupVault action.

---

##### `CreateFrameworkConditionKeys`<sup>Required</sup> <a name="CreateFrameworkConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CreateFrameworkConditionKeys"></a>

```typescript
public readonly CreateFrameworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFramework action.

---

##### `CreateLegalHoldConditionKeys`<sup>Required</sup> <a name="CreateLegalHoldConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CreateLegalHoldConditionKeys"></a>

```typescript
public readonly CreateLegalHoldConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLegalHold action.

---

##### `CreateLogicallyAirGappedBackupVaultConditionKeys`<sup>Required</sup> <a name="CreateLogicallyAirGappedBackupVaultConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CreateLogicallyAirGappedBackupVaultConditionKeys"></a>

```typescript
public readonly CreateLogicallyAirGappedBackupVaultConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLogicallyAirGappedBackupVault action.

---

##### `CreateReportPlanConditionKeys`<sup>Required</sup> <a name="CreateReportPlanConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CreateReportPlanConditionKeys"></a>

```typescript
public readonly CreateReportPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReportPlan action.

---

##### `CreateRestoreAccessBackupVaultConditionKeys`<sup>Required</sup> <a name="CreateRestoreAccessBackupVaultConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CreateRestoreAccessBackupVaultConditionKeys"></a>

```typescript
public readonly CreateRestoreAccessBackupVaultConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRestoreAccessBackupVault action.

---

##### `CreateRestoreTestingPlanConditionKeys`<sup>Required</sup> <a name="CreateRestoreTestingPlanConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CreateRestoreTestingPlanConditionKeys"></a>

```typescript
public readonly CreateRestoreTestingPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRestoreTestingPlan action.

---

##### `CreateTieringConfigurationConditionKeys`<sup>Required</sup> <a name="CreateTieringConfigurationConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.CreateTieringConfigurationConditionKeys"></a>

```typescript
public readonly CreateTieringConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTieringConfiguration action.

---

##### `FRAMEWORK_ARNS`<sup>Required</sup> <a name="FRAMEWORK_ARNS" id="@cdk_utils/iam.backup.BackupConditions.property.FRAMEWORK_ARNS"></a>

```typescript
public readonly FRAMEWORK_ARNS: string;
```

- *Type:* string

Condition key: backup:FrameworkArns (ArrayOfARN).

---

##### `INDEX`<sup>Required</sup> <a name="INDEX" id="@cdk_utils/iam.backup.BackupConditions.property.INDEX"></a>

```typescript
public readonly INDEX: string;
```

- *Type:* string

Condition key: backup:Index (String).

---

##### `MAX_RETENTION_DAYS`<sup>Required</sup> <a name="MAX_RETENTION_DAYS" id="@cdk_utils/iam.backup.BackupConditions.property.MAX_RETENTION_DAYS"></a>

```typescript
public readonly MAX_RETENTION_DAYS: string;
```

- *Type:* string

Condition key: backup:MaxRetentionDays (Numeric).

---

##### `MIN_RETENTION_DAYS`<sup>Required</sup> <a name="MIN_RETENTION_DAYS" id="@cdk_utils/iam.backup.BackupConditions.property.MIN_RETENTION_DAYS"></a>

```typescript
public readonly MIN_RETENTION_DAYS: string;
```

- *Type:* string

Condition key: backup:MinRetentionDays (Numeric).

---

##### `MPA_APPROVAL_TEAM_ARN`<sup>Required</sup> <a name="MPA_APPROVAL_TEAM_ARN" id="@cdk_utils/iam.backup.BackupConditions.property.MPA_APPROVAL_TEAM_ARN"></a>

```typescript
public readonly MPA_APPROVAL_TEAM_ARN: string;
```

- *Type:* string

Condition key: backup:MpaApprovalTeamArn (ARN).

---

##### `PutBackupVaultLockConfigurationConditionKeys`<sup>Required</sup> <a name="PutBackupVaultLockConfigurationConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.PutBackupVaultLockConfigurationConditionKeys"></a>

```typescript
public readonly PutBackupVaultLockConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutBackupVaultLockConfiguration action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateRecoveryPointIndexSettingsConditionKeys`<sup>Required</sup> <a name="UpdateRecoveryPointIndexSettingsConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.UpdateRecoveryPointIndexSettingsConditionKeys"></a>

```typescript
public readonly UpdateRecoveryPointIndexSettingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRecoveryPointIndexSettings action.

---

##### `UpdateReportPlanConditionKeys`<sup>Required</sup> <a name="UpdateReportPlanConditionKeys" id="@cdk_utils/iam.backup.BackupConditions.property.UpdateReportPlanConditionKeys"></a>

```typescript
public readonly UpdateReportPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateReportPlan action.

---

### BackupOperations <a name="BackupOperations" id="@cdk_utils/iam.backup.BackupOperations"></a>

API operation to required IAM actions mapping for backup.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup.BackupOperations.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

new backup.BackupOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.AssociateBackupVaultMpaApprovalTeam">AssociateBackupVaultMpaApprovalTeam</a></code> | <code>string[]</code> | IAM actions required for the AssociateBackupVaultMpaApprovalTeam API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CancelLegalHold">CancelLegalHold</a></code> | <code>string[]</code> | IAM actions required for the CancelLegalHold API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateBackupAccessPoint">CreateBackupAccessPoint</a></code> | <code>string[]</code> | IAM actions required for the CreateBackupAccessPoint API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateBackupPlan">CreateBackupPlan</a></code> | <code>string[]</code> | IAM actions required for the CreateBackupPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateBackupSelection">CreateBackupSelection</a></code> | <code>string[]</code> | IAM actions required for the CreateBackupSelection API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateBackupVault">CreateBackupVault</a></code> | <code>string[]</code> | IAM actions required for the CreateBackupVault API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateFramework">CreateFramework</a></code> | <code>string[]</code> | IAM actions required for the CreateFramework API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateLegalHold">CreateLegalHold</a></code> | <code>string[]</code> | IAM actions required for the CreateLegalHold API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateLogicallyAirGappedBackupVault">CreateLogicallyAirGappedBackupVault</a></code> | <code>string[]</code> | IAM actions required for the CreateLogicallyAirGappedBackupVault API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateReportPlan">CreateReportPlan</a></code> | <code>string[]</code> | IAM actions required for the CreateReportPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateRestoreAccessBackupVault">CreateRestoreAccessBackupVault</a></code> | <code>string[]</code> | IAM actions required for the CreateRestoreAccessBackupVault API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateRestoreTestingPlan">CreateRestoreTestingPlan</a></code> | <code>string[]</code> | IAM actions required for the CreateRestoreTestingPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateRestoreTestingSelection">CreateRestoreTestingSelection</a></code> | <code>string[]</code> | IAM actions required for the CreateRestoreTestingSelection API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.CreateTieringConfiguration">CreateTieringConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateTieringConfiguration API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupAccessPoint">DeleteBackupAccessPoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackupAccessPoint API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupPlan">DeleteBackupPlan</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackupPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupSelection">DeleteBackupSelection</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackupSelection API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupVault">DeleteBackupVault</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackupVault API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupVaultAccessPolicy">DeleteBackupVaultAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackupVaultAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupVaultLockConfiguration">DeleteBackupVaultLockConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackupVaultLockConfiguration API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupVaultNotifications">DeleteBackupVaultNotifications</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackupVaultNotifications API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteFramework">DeleteFramework</a></code> | <code>string[]</code> | IAM actions required for the DeleteFramework API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteRecoveryPoint">DeleteRecoveryPoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecoveryPoint API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteReportPlan">DeleteReportPlan</a></code> | <code>string[]</code> | IAM actions required for the DeleteReportPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteRestoreTestingPlan">DeleteRestoreTestingPlan</a></code> | <code>string[]</code> | IAM actions required for the DeleteRestoreTestingPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteRestoreTestingSelection">DeleteRestoreTestingSelection</a></code> | <code>string[]</code> | IAM actions required for the DeleteRestoreTestingSelection API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DeleteTieringConfiguration">DeleteTieringConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteTieringConfiguration API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeBackupAccessPoint">DescribeBackupAccessPoint</a></code> | <code>string[]</code> | IAM actions required for the DescribeBackupAccessPoint API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeBackupJob">DescribeBackupJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeBackupJob API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeBackupVault">DescribeBackupVault</a></code> | <code>string[]</code> | IAM actions required for the DescribeBackupVault API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeCopyJob">DescribeCopyJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeCopyJob API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeFramework">DescribeFramework</a></code> | <code>string[]</code> | IAM actions required for the DescribeFramework API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeGlobalSettings">DescribeGlobalSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeGlobalSettings API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeProtectedResource">DescribeProtectedResource</a></code> | <code>string[]</code> | IAM actions required for the DescribeProtectedResource API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeRecoveryPoint">DescribeRecoveryPoint</a></code> | <code>string[]</code> | IAM actions required for the DescribeRecoveryPoint API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeRegionSettings">DescribeRegionSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeRegionSettings API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeReportJob">DescribeReportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeReportJob API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeReportPlan">DescribeReportPlan</a></code> | <code>string[]</code> | IAM actions required for the DescribeReportPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeRestoreJob">DescribeRestoreJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeRestoreJob API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DescribeScanJob">DescribeScanJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeScanJob API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DisassociateBackupVaultMpaApprovalTeam">DisassociateBackupVaultMpaApprovalTeam</a></code> | <code>string[]</code> | IAM actions required for the DisassociateBackupVaultMpaApprovalTeam API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DisassociateRecoveryPoint">DisassociateRecoveryPoint</a></code> | <code>string[]</code> | IAM actions required for the DisassociateRecoveryPoint API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.DisassociateRecoveryPointFromParent">DisassociateRecoveryPointFromParent</a></code> | <code>string[]</code> | IAM actions required for the DisassociateRecoveryPointFromParent API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ExportBackupPlanTemplate">ExportBackupPlanTemplate</a></code> | <code>string[]</code> | IAM actions required for the ExportBackupPlanTemplate API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListBackupAccessPoints">ListBackupAccessPoints</a></code> | <code>string[]</code> | IAM actions required for the ListBackupAccessPoints API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListBackupAccessPointsByRecoveryPoint">ListBackupAccessPointsByRecoveryPoint</a></code> | <code>string[]</code> | IAM actions required for the ListBackupAccessPointsByRecoveryPoint API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListBackupAccessPointsByResource">ListBackupAccessPointsByResource</a></code> | <code>string[]</code> | IAM actions required for the ListBackupAccessPointsByResource API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListBackupJobs">ListBackupJobs</a></code> | <code>string[]</code> | IAM actions required for the ListBackupJobs API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListBackupJobSummaries">ListBackupJobSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListBackupJobSummaries API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListBackupPlans">ListBackupPlans</a></code> | <code>string[]</code> | IAM actions required for the ListBackupPlans API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListBackupPlanTemplates">ListBackupPlanTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListBackupPlanTemplates API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListBackupPlanVersions">ListBackupPlanVersions</a></code> | <code>string[]</code> | IAM actions required for the ListBackupPlanVersions API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListBackupSelections">ListBackupSelections</a></code> | <code>string[]</code> | IAM actions required for the ListBackupSelections API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListBackupVaults">ListBackupVaults</a></code> | <code>string[]</code> | IAM actions required for the ListBackupVaults API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListCopyJobs">ListCopyJobs</a></code> | <code>string[]</code> | IAM actions required for the ListCopyJobs API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListCopyJobSummaries">ListCopyJobSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListCopyJobSummaries API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListFrameworks">ListFrameworks</a></code> | <code>string[]</code> | IAM actions required for the ListFrameworks API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListIndexedRecoveryPoints">ListIndexedRecoveryPoints</a></code> | <code>string[]</code> | IAM actions required for the ListIndexedRecoveryPoints API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListLegalHolds">ListLegalHolds</a></code> | <code>string[]</code> | IAM actions required for the ListLegalHolds API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListProtectedResources">ListProtectedResources</a></code> | <code>string[]</code> | IAM actions required for the ListProtectedResources API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListProtectedResourcesByBackupVault">ListProtectedResourcesByBackupVault</a></code> | <code>string[]</code> | IAM actions required for the ListProtectedResourcesByBackupVault API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListRecoveryPointsByBackupVault">ListRecoveryPointsByBackupVault</a></code> | <code>string[]</code> | IAM actions required for the ListRecoveryPointsByBackupVault API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListRecoveryPointsByLegalHold">ListRecoveryPointsByLegalHold</a></code> | <code>string[]</code> | IAM actions required for the ListRecoveryPointsByLegalHold API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListRecoveryPointsByResource">ListRecoveryPointsByResource</a></code> | <code>string[]</code> | IAM actions required for the ListRecoveryPointsByResource API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListReportJobs">ListReportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListReportJobs API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListReportPlans">ListReportPlans</a></code> | <code>string[]</code> | IAM actions required for the ListReportPlans API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListRestoreAccessBackupVaults">ListRestoreAccessBackupVaults</a></code> | <code>string[]</code> | IAM actions required for the ListRestoreAccessBackupVaults API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListRestoreJobs">ListRestoreJobs</a></code> | <code>string[]</code> | IAM actions required for the ListRestoreJobs API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListRestoreJobsByProtectedResource">ListRestoreJobsByProtectedResource</a></code> | <code>string[]</code> | IAM actions required for the ListRestoreJobsByProtectedResource API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListRestoreJobSummaries">ListRestoreJobSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListRestoreJobSummaries API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListRestoreTestingPlans">ListRestoreTestingPlans</a></code> | <code>string[]</code> | IAM actions required for the ListRestoreTestingPlans API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListRestoreTestingSelections">ListRestoreTestingSelections</a></code> | <code>string[]</code> | IAM actions required for the ListRestoreTestingSelections API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListScanJobs">ListScanJobs</a></code> | <code>string[]</code> | IAM actions required for the ListScanJobs API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListScanJobSummaries">ListScanJobSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListScanJobSummaries API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListTags">ListTags</a></code> | <code>string[]</code> | IAM actions required for the ListTags API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.ListTieringConfigurations">ListTieringConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListTieringConfigurations API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetBackupPlan">opGetBackupPlan</a></code> | <code>string[]</code> | IAM actions required for the GetBackupPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetBackupPlanFromJSON">opGetBackupPlanFromJSON</a></code> | <code>string[]</code> | IAM actions required for the GetBackupPlanFromJSON API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetBackupPlanFromTemplate">opGetBackupPlanFromTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetBackupPlanFromTemplate API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetBackupSelection">opGetBackupSelection</a></code> | <code>string[]</code> | IAM actions required for the GetBackupSelection API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetBackupVaultAccessPolicy">opGetBackupVaultAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetBackupVaultAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetBackupVaultNotifications">opGetBackupVaultNotifications</a></code> | <code>string[]</code> | IAM actions required for the GetBackupVaultNotifications API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetLegalHold">opGetLegalHold</a></code> | <code>string[]</code> | IAM actions required for the GetLegalHold API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetPITRMalwareScanResults">opGetPITRMalwareScanResults</a></code> | <code>string[]</code> | IAM actions required for the GetPITRMalwareScanResults API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetRecoveryPointIndexDetails">opGetRecoveryPointIndexDetails</a></code> | <code>string[]</code> | IAM actions required for the GetRecoveryPointIndexDetails API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetRecoveryPointRestoreMetadata">opGetRecoveryPointRestoreMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetRecoveryPointRestoreMetadata API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetRestoreJobMetadata">opGetRestoreJobMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetRestoreJobMetadata API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetRestoreTestingInferredMetadata">opGetRestoreTestingInferredMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetRestoreTestingInferredMetadata API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetRestoreTestingPlan">opGetRestoreTestingPlan</a></code> | <code>string[]</code> | IAM actions required for the GetRestoreTestingPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetRestoreTestingSelection">opGetRestoreTestingSelection</a></code> | <code>string[]</code> | IAM actions required for the GetRestoreTestingSelection API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetSupportedResourceTypes">opGetSupportedResourceTypes</a></code> | <code>string[]</code> | IAM actions required for the GetSupportedResourceTypes API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.opGetTieringConfiguration">opGetTieringConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetTieringConfiguration API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.PutBackupVaultAccessPolicy">PutBackupVaultAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutBackupVaultAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.PutBackupVaultLockConfiguration">PutBackupVaultLockConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutBackupVaultLockConfiguration API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.PutBackupVaultNotifications">PutBackupVaultNotifications</a></code> | <code>string[]</code> | IAM actions required for the PutBackupVaultNotifications API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.PutRestoreValidationResult">PutRestoreValidationResult</a></code> | <code>string[]</code> | IAM actions required for the PutRestoreValidationResult API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.RevokeRestoreAccessBackupVault">RevokeRestoreAccessBackupVault</a></code> | <code>string[]</code> | IAM actions required for the RevokeRestoreAccessBackupVault API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.StartBackupJob">StartBackupJob</a></code> | <code>string[]</code> | IAM actions required for the StartBackupJob API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.StartCopyJob">StartCopyJob</a></code> | <code>string[]</code> | IAM actions required for the StartCopyJob API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.StartReportJob">StartReportJob</a></code> | <code>string[]</code> | IAM actions required for the StartReportJob API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.StartRestoreJob">StartRestoreJob</a></code> | <code>string[]</code> | IAM actions required for the StartRestoreJob API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.StartScanJob">StartScanJob</a></code> | <code>string[]</code> | IAM actions required for the StartScanJob API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.StopBackupJob">StopBackupJob</a></code> | <code>string[]</code> | IAM actions required for the StopBackupJob API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.UpdateBackupPlan">UpdateBackupPlan</a></code> | <code>string[]</code> | IAM actions required for the UpdateBackupPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.UpdateFramework">UpdateFramework</a></code> | <code>string[]</code> | IAM actions required for the UpdateFramework API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.UpdateGlobalSettings">UpdateGlobalSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlobalSettings API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.UpdateRecoveryPointIndexSettings">UpdateRecoveryPointIndexSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateRecoveryPointIndexSettings API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.UpdateRecoveryPointLifecycle">UpdateRecoveryPointLifecycle</a></code> | <code>string[]</code> | IAM actions required for the UpdateRecoveryPointLifecycle API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.UpdateRegionSettings">UpdateRegionSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegionSettings API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.UpdateReportPlan">UpdateReportPlan</a></code> | <code>string[]</code> | IAM actions required for the UpdateReportPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.UpdateRestoreTestingPlan">UpdateRestoreTestingPlan</a></code> | <code>string[]</code> | IAM actions required for the UpdateRestoreTestingPlan API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.UpdateRestoreTestingSelection">UpdateRestoreTestingSelection</a></code> | <code>string[]</code> | IAM actions required for the UpdateRestoreTestingSelection API call. |
| <code><a href="#@cdk_utils/iam.backup.BackupOperations.property.UpdateTieringConfiguration">UpdateTieringConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateTieringConfiguration API call. |

---

##### `AssociateBackupVaultMpaApprovalTeam`<sup>Required</sup> <a name="AssociateBackupVaultMpaApprovalTeam" id="@cdk_utils/iam.backup.BackupOperations.property.AssociateBackupVaultMpaApprovalTeam"></a>

```typescript
public readonly AssociateBackupVaultMpaApprovalTeam: string[];
```

- *Type:* string[]

IAM actions required for the AssociateBackupVaultMpaApprovalTeam API call.

---

##### `CancelLegalHold`<sup>Required</sup> <a name="CancelLegalHold" id="@cdk_utils/iam.backup.BackupOperations.property.CancelLegalHold"></a>

```typescript
public readonly CancelLegalHold: string[];
```

- *Type:* string[]

IAM actions required for the CancelLegalHold API call.

---

##### `CreateBackupAccessPoint`<sup>Required</sup> <a name="CreateBackupAccessPoint" id="@cdk_utils/iam.backup.BackupOperations.property.CreateBackupAccessPoint"></a>

```typescript
public readonly CreateBackupAccessPoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackupAccessPoint API call.

---

##### `CreateBackupPlan`<sup>Required</sup> <a name="CreateBackupPlan" id="@cdk_utils/iam.backup.BackupOperations.property.CreateBackupPlan"></a>

```typescript
public readonly CreateBackupPlan: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackupPlan API call.

---

##### `CreateBackupSelection`<sup>Required</sup> <a name="CreateBackupSelection" id="@cdk_utils/iam.backup.BackupOperations.property.CreateBackupSelection"></a>

```typescript
public readonly CreateBackupSelection: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackupSelection API call.

---

##### `CreateBackupVault`<sup>Required</sup> <a name="CreateBackupVault" id="@cdk_utils/iam.backup.BackupOperations.property.CreateBackupVault"></a>

```typescript
public readonly CreateBackupVault: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackupVault API call.

---

##### `CreateFramework`<sup>Required</sup> <a name="CreateFramework" id="@cdk_utils/iam.backup.BackupOperations.property.CreateFramework"></a>

```typescript
public readonly CreateFramework: string[];
```

- *Type:* string[]

IAM actions required for the CreateFramework API call.

---

##### `CreateLegalHold`<sup>Required</sup> <a name="CreateLegalHold" id="@cdk_utils/iam.backup.BackupOperations.property.CreateLegalHold"></a>

```typescript
public readonly CreateLegalHold: string[];
```

- *Type:* string[]

IAM actions required for the CreateLegalHold API call.

---

##### `CreateLogicallyAirGappedBackupVault`<sup>Required</sup> <a name="CreateLogicallyAirGappedBackupVault" id="@cdk_utils/iam.backup.BackupOperations.property.CreateLogicallyAirGappedBackupVault"></a>

```typescript
public readonly CreateLogicallyAirGappedBackupVault: string[];
```

- *Type:* string[]

IAM actions required for the CreateLogicallyAirGappedBackupVault API call.

---

##### `CreateReportPlan`<sup>Required</sup> <a name="CreateReportPlan" id="@cdk_utils/iam.backup.BackupOperations.property.CreateReportPlan"></a>

```typescript
public readonly CreateReportPlan: string[];
```

- *Type:* string[]

IAM actions required for the CreateReportPlan API call.

---

##### `CreateRestoreAccessBackupVault`<sup>Required</sup> <a name="CreateRestoreAccessBackupVault" id="@cdk_utils/iam.backup.BackupOperations.property.CreateRestoreAccessBackupVault"></a>

```typescript
public readonly CreateRestoreAccessBackupVault: string[];
```

- *Type:* string[]

IAM actions required for the CreateRestoreAccessBackupVault API call.

---

##### `CreateRestoreTestingPlan`<sup>Required</sup> <a name="CreateRestoreTestingPlan" id="@cdk_utils/iam.backup.BackupOperations.property.CreateRestoreTestingPlan"></a>

```typescript
public readonly CreateRestoreTestingPlan: string[];
```

- *Type:* string[]

IAM actions required for the CreateRestoreTestingPlan API call.

---

##### `CreateRestoreTestingSelection`<sup>Required</sup> <a name="CreateRestoreTestingSelection" id="@cdk_utils/iam.backup.BackupOperations.property.CreateRestoreTestingSelection"></a>

```typescript
public readonly CreateRestoreTestingSelection: string[];
```

- *Type:* string[]

IAM actions required for the CreateRestoreTestingSelection API call.

---

##### `CreateTieringConfiguration`<sup>Required</sup> <a name="CreateTieringConfiguration" id="@cdk_utils/iam.backup.BackupOperations.property.CreateTieringConfiguration"></a>

```typescript
public readonly CreateTieringConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateTieringConfiguration API call.

---

##### `DeleteBackupAccessPoint`<sup>Required</sup> <a name="DeleteBackupAccessPoint" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupAccessPoint"></a>

```typescript
public readonly DeleteBackupAccessPoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackupAccessPoint API call.

---

##### `DeleteBackupPlan`<sup>Required</sup> <a name="DeleteBackupPlan" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupPlan"></a>

```typescript
public readonly DeleteBackupPlan: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackupPlan API call.

---

##### `DeleteBackupSelection`<sup>Required</sup> <a name="DeleteBackupSelection" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupSelection"></a>

```typescript
public readonly DeleteBackupSelection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackupSelection API call.

---

##### `DeleteBackupVault`<sup>Required</sup> <a name="DeleteBackupVault" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupVault"></a>

```typescript
public readonly DeleteBackupVault: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackupVault API call.

---

##### `DeleteBackupVaultAccessPolicy`<sup>Required</sup> <a name="DeleteBackupVaultAccessPolicy" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupVaultAccessPolicy"></a>

```typescript
public readonly DeleteBackupVaultAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackupVaultAccessPolicy API call.

---

##### `DeleteBackupVaultLockConfiguration`<sup>Required</sup> <a name="DeleteBackupVaultLockConfiguration" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupVaultLockConfiguration"></a>

```typescript
public readonly DeleteBackupVaultLockConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackupVaultLockConfiguration API call.

---

##### `DeleteBackupVaultNotifications`<sup>Required</sup> <a name="DeleteBackupVaultNotifications" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteBackupVaultNotifications"></a>

```typescript
public readonly DeleteBackupVaultNotifications: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackupVaultNotifications API call.

---

##### `DeleteFramework`<sup>Required</sup> <a name="DeleteFramework" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteFramework"></a>

```typescript
public readonly DeleteFramework: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFramework API call.

---

##### `DeleteRecoveryPoint`<sup>Required</sup> <a name="DeleteRecoveryPoint" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteRecoveryPoint"></a>

```typescript
public readonly DeleteRecoveryPoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecoveryPoint API call.

---

##### `DeleteReportPlan`<sup>Required</sup> <a name="DeleteReportPlan" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteReportPlan"></a>

```typescript
public readonly DeleteReportPlan: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReportPlan API call.

---

##### `DeleteRestoreTestingPlan`<sup>Required</sup> <a name="DeleteRestoreTestingPlan" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteRestoreTestingPlan"></a>

```typescript
public readonly DeleteRestoreTestingPlan: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRestoreTestingPlan API call.

---

##### `DeleteRestoreTestingSelection`<sup>Required</sup> <a name="DeleteRestoreTestingSelection" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteRestoreTestingSelection"></a>

```typescript
public readonly DeleteRestoreTestingSelection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRestoreTestingSelection API call.

---

##### `DeleteTieringConfiguration`<sup>Required</sup> <a name="DeleteTieringConfiguration" id="@cdk_utils/iam.backup.BackupOperations.property.DeleteTieringConfiguration"></a>

```typescript
public readonly DeleteTieringConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTieringConfiguration API call.

---

##### `DescribeBackupAccessPoint`<sup>Required</sup> <a name="DescribeBackupAccessPoint" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeBackupAccessPoint"></a>

```typescript
public readonly DescribeBackupAccessPoint: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBackupAccessPoint API call.

---

##### `DescribeBackupJob`<sup>Required</sup> <a name="DescribeBackupJob" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeBackupJob"></a>

```typescript
public readonly DescribeBackupJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBackupJob API call.

---

##### `DescribeBackupVault`<sup>Required</sup> <a name="DescribeBackupVault" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeBackupVault"></a>

```typescript
public readonly DescribeBackupVault: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBackupVault API call.

---

##### `DescribeCopyJob`<sup>Required</sup> <a name="DescribeCopyJob" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeCopyJob"></a>

```typescript
public readonly DescribeCopyJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCopyJob API call.

---

##### `DescribeFramework`<sup>Required</sup> <a name="DescribeFramework" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeFramework"></a>

```typescript
public readonly DescribeFramework: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFramework API call.

---

##### `DescribeGlobalSettings`<sup>Required</sup> <a name="DescribeGlobalSettings" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeGlobalSettings"></a>

```typescript
public readonly DescribeGlobalSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGlobalSettings API call.

---

##### `DescribeProtectedResource`<sup>Required</sup> <a name="DescribeProtectedResource" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeProtectedResource"></a>

```typescript
public readonly DescribeProtectedResource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProtectedResource API call.

---

##### `DescribeRecoveryPoint`<sup>Required</sup> <a name="DescribeRecoveryPoint" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeRecoveryPoint"></a>

```typescript
public readonly DescribeRecoveryPoint: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRecoveryPoint API call.

---

##### `DescribeRegionSettings`<sup>Required</sup> <a name="DescribeRegionSettings" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeRegionSettings"></a>

```typescript
public readonly DescribeRegionSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRegionSettings API call.

---

##### `DescribeReportJob`<sup>Required</sup> <a name="DescribeReportJob" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeReportJob"></a>

```typescript
public readonly DescribeReportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReportJob API call.

---

##### `DescribeReportPlan`<sup>Required</sup> <a name="DescribeReportPlan" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeReportPlan"></a>

```typescript
public readonly DescribeReportPlan: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReportPlan API call.

---

##### `DescribeRestoreJob`<sup>Required</sup> <a name="DescribeRestoreJob" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeRestoreJob"></a>

```typescript
public readonly DescribeRestoreJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRestoreJob API call.

---

##### `DescribeScanJob`<sup>Required</sup> <a name="DescribeScanJob" id="@cdk_utils/iam.backup.BackupOperations.property.DescribeScanJob"></a>

```typescript
public readonly DescribeScanJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScanJob API call.

---

##### `DisassociateBackupVaultMpaApprovalTeam`<sup>Required</sup> <a name="DisassociateBackupVaultMpaApprovalTeam" id="@cdk_utils/iam.backup.BackupOperations.property.DisassociateBackupVaultMpaApprovalTeam"></a>

```typescript
public readonly DisassociateBackupVaultMpaApprovalTeam: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateBackupVaultMpaApprovalTeam API call.

---

##### `DisassociateRecoveryPoint`<sup>Required</sup> <a name="DisassociateRecoveryPoint" id="@cdk_utils/iam.backup.BackupOperations.property.DisassociateRecoveryPoint"></a>

```typescript
public readonly DisassociateRecoveryPoint: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateRecoveryPoint API call.

---

##### `DisassociateRecoveryPointFromParent`<sup>Required</sup> <a name="DisassociateRecoveryPointFromParent" id="@cdk_utils/iam.backup.BackupOperations.property.DisassociateRecoveryPointFromParent"></a>

```typescript
public readonly DisassociateRecoveryPointFromParent: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateRecoveryPointFromParent API call.

---

##### `ExportBackupPlanTemplate`<sup>Required</sup> <a name="ExportBackupPlanTemplate" id="@cdk_utils/iam.backup.BackupOperations.property.ExportBackupPlanTemplate"></a>

```typescript
public readonly ExportBackupPlanTemplate: string[];
```

- *Type:* string[]

IAM actions required for the ExportBackupPlanTemplate API call.

---

##### `ListBackupAccessPoints`<sup>Required</sup> <a name="ListBackupAccessPoints" id="@cdk_utils/iam.backup.BackupOperations.property.ListBackupAccessPoints"></a>

```typescript
public readonly ListBackupAccessPoints: string[];
```

- *Type:* string[]

IAM actions required for the ListBackupAccessPoints API call.

---

##### `ListBackupAccessPointsByRecoveryPoint`<sup>Required</sup> <a name="ListBackupAccessPointsByRecoveryPoint" id="@cdk_utils/iam.backup.BackupOperations.property.ListBackupAccessPointsByRecoveryPoint"></a>

```typescript
public readonly ListBackupAccessPointsByRecoveryPoint: string[];
```

- *Type:* string[]

IAM actions required for the ListBackupAccessPointsByRecoveryPoint API call.

---

##### `ListBackupAccessPointsByResource`<sup>Required</sup> <a name="ListBackupAccessPointsByResource" id="@cdk_utils/iam.backup.BackupOperations.property.ListBackupAccessPointsByResource"></a>

```typescript
public readonly ListBackupAccessPointsByResource: string[];
```

- *Type:* string[]

IAM actions required for the ListBackupAccessPointsByResource API call.

---

##### `ListBackupJobs`<sup>Required</sup> <a name="ListBackupJobs" id="@cdk_utils/iam.backup.BackupOperations.property.ListBackupJobs"></a>

```typescript
public readonly ListBackupJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListBackupJobs API call.

---

##### `ListBackupJobSummaries`<sup>Required</sup> <a name="ListBackupJobSummaries" id="@cdk_utils/iam.backup.BackupOperations.property.ListBackupJobSummaries"></a>

```typescript
public readonly ListBackupJobSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListBackupJobSummaries API call.

---

##### `ListBackupPlans`<sup>Required</sup> <a name="ListBackupPlans" id="@cdk_utils/iam.backup.BackupOperations.property.ListBackupPlans"></a>

```typescript
public readonly ListBackupPlans: string[];
```

- *Type:* string[]

IAM actions required for the ListBackupPlans API call.

---

##### `ListBackupPlanTemplates`<sup>Required</sup> <a name="ListBackupPlanTemplates" id="@cdk_utils/iam.backup.BackupOperations.property.ListBackupPlanTemplates"></a>

```typescript
public readonly ListBackupPlanTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListBackupPlanTemplates API call.

---

##### `ListBackupPlanVersions`<sup>Required</sup> <a name="ListBackupPlanVersions" id="@cdk_utils/iam.backup.BackupOperations.property.ListBackupPlanVersions"></a>

```typescript
public readonly ListBackupPlanVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListBackupPlanVersions API call.

---

##### `ListBackupSelections`<sup>Required</sup> <a name="ListBackupSelections" id="@cdk_utils/iam.backup.BackupOperations.property.ListBackupSelections"></a>

```typescript
public readonly ListBackupSelections: string[];
```

- *Type:* string[]

IAM actions required for the ListBackupSelections API call.

---

##### `ListBackupVaults`<sup>Required</sup> <a name="ListBackupVaults" id="@cdk_utils/iam.backup.BackupOperations.property.ListBackupVaults"></a>

```typescript
public readonly ListBackupVaults: string[];
```

- *Type:* string[]

IAM actions required for the ListBackupVaults API call.

---

##### `ListCopyJobs`<sup>Required</sup> <a name="ListCopyJobs" id="@cdk_utils/iam.backup.BackupOperations.property.ListCopyJobs"></a>

```typescript
public readonly ListCopyJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListCopyJobs API call.

---

##### `ListCopyJobSummaries`<sup>Required</sup> <a name="ListCopyJobSummaries" id="@cdk_utils/iam.backup.BackupOperations.property.ListCopyJobSummaries"></a>

```typescript
public readonly ListCopyJobSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListCopyJobSummaries API call.

---

##### `ListFrameworks`<sup>Required</sup> <a name="ListFrameworks" id="@cdk_utils/iam.backup.BackupOperations.property.ListFrameworks"></a>

```typescript
public readonly ListFrameworks: string[];
```

- *Type:* string[]

IAM actions required for the ListFrameworks API call.

---

##### `ListIndexedRecoveryPoints`<sup>Required</sup> <a name="ListIndexedRecoveryPoints" id="@cdk_utils/iam.backup.BackupOperations.property.ListIndexedRecoveryPoints"></a>

```typescript
public readonly ListIndexedRecoveryPoints: string[];
```

- *Type:* string[]

IAM actions required for the ListIndexedRecoveryPoints API call.

---

##### `ListLegalHolds`<sup>Required</sup> <a name="ListLegalHolds" id="@cdk_utils/iam.backup.BackupOperations.property.ListLegalHolds"></a>

```typescript
public readonly ListLegalHolds: string[];
```

- *Type:* string[]

IAM actions required for the ListLegalHolds API call.

---

##### `ListProtectedResources`<sup>Required</sup> <a name="ListProtectedResources" id="@cdk_utils/iam.backup.BackupOperations.property.ListProtectedResources"></a>

```typescript
public readonly ListProtectedResources: string[];
```

- *Type:* string[]

IAM actions required for the ListProtectedResources API call.

---

##### `ListProtectedResourcesByBackupVault`<sup>Required</sup> <a name="ListProtectedResourcesByBackupVault" id="@cdk_utils/iam.backup.BackupOperations.property.ListProtectedResourcesByBackupVault"></a>

```typescript
public readonly ListProtectedResourcesByBackupVault: string[];
```

- *Type:* string[]

IAM actions required for the ListProtectedResourcesByBackupVault API call.

---

##### `ListRecoveryPointsByBackupVault`<sup>Required</sup> <a name="ListRecoveryPointsByBackupVault" id="@cdk_utils/iam.backup.BackupOperations.property.ListRecoveryPointsByBackupVault"></a>

```typescript
public readonly ListRecoveryPointsByBackupVault: string[];
```

- *Type:* string[]

IAM actions required for the ListRecoveryPointsByBackupVault API call.

---

##### `ListRecoveryPointsByLegalHold`<sup>Required</sup> <a name="ListRecoveryPointsByLegalHold" id="@cdk_utils/iam.backup.BackupOperations.property.ListRecoveryPointsByLegalHold"></a>

```typescript
public readonly ListRecoveryPointsByLegalHold: string[];
```

- *Type:* string[]

IAM actions required for the ListRecoveryPointsByLegalHold API call.

---

##### `ListRecoveryPointsByResource`<sup>Required</sup> <a name="ListRecoveryPointsByResource" id="@cdk_utils/iam.backup.BackupOperations.property.ListRecoveryPointsByResource"></a>

```typescript
public readonly ListRecoveryPointsByResource: string[];
```

- *Type:* string[]

IAM actions required for the ListRecoveryPointsByResource API call.

---

##### `ListReportJobs`<sup>Required</sup> <a name="ListReportJobs" id="@cdk_utils/iam.backup.BackupOperations.property.ListReportJobs"></a>

```typescript
public readonly ListReportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListReportJobs API call.

---

##### `ListReportPlans`<sup>Required</sup> <a name="ListReportPlans" id="@cdk_utils/iam.backup.BackupOperations.property.ListReportPlans"></a>

```typescript
public readonly ListReportPlans: string[];
```

- *Type:* string[]

IAM actions required for the ListReportPlans API call.

---

##### `ListRestoreAccessBackupVaults`<sup>Required</sup> <a name="ListRestoreAccessBackupVaults" id="@cdk_utils/iam.backup.BackupOperations.property.ListRestoreAccessBackupVaults"></a>

```typescript
public readonly ListRestoreAccessBackupVaults: string[];
```

- *Type:* string[]

IAM actions required for the ListRestoreAccessBackupVaults API call.

---

##### `ListRestoreJobs`<sup>Required</sup> <a name="ListRestoreJobs" id="@cdk_utils/iam.backup.BackupOperations.property.ListRestoreJobs"></a>

```typescript
public readonly ListRestoreJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListRestoreJobs API call.

---

##### `ListRestoreJobsByProtectedResource`<sup>Required</sup> <a name="ListRestoreJobsByProtectedResource" id="@cdk_utils/iam.backup.BackupOperations.property.ListRestoreJobsByProtectedResource"></a>

```typescript
public readonly ListRestoreJobsByProtectedResource: string[];
```

- *Type:* string[]

IAM actions required for the ListRestoreJobsByProtectedResource API call.

---

##### `ListRestoreJobSummaries`<sup>Required</sup> <a name="ListRestoreJobSummaries" id="@cdk_utils/iam.backup.BackupOperations.property.ListRestoreJobSummaries"></a>

```typescript
public readonly ListRestoreJobSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListRestoreJobSummaries API call.

---

##### `ListRestoreTestingPlans`<sup>Required</sup> <a name="ListRestoreTestingPlans" id="@cdk_utils/iam.backup.BackupOperations.property.ListRestoreTestingPlans"></a>

```typescript
public readonly ListRestoreTestingPlans: string[];
```

- *Type:* string[]

IAM actions required for the ListRestoreTestingPlans API call.

---

##### `ListRestoreTestingSelections`<sup>Required</sup> <a name="ListRestoreTestingSelections" id="@cdk_utils/iam.backup.BackupOperations.property.ListRestoreTestingSelections"></a>

```typescript
public readonly ListRestoreTestingSelections: string[];
```

- *Type:* string[]

IAM actions required for the ListRestoreTestingSelections API call.

---

##### `ListScanJobs`<sup>Required</sup> <a name="ListScanJobs" id="@cdk_utils/iam.backup.BackupOperations.property.ListScanJobs"></a>

```typescript
public readonly ListScanJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListScanJobs API call.

---

##### `ListScanJobSummaries`<sup>Required</sup> <a name="ListScanJobSummaries" id="@cdk_utils/iam.backup.BackupOperations.property.ListScanJobSummaries"></a>

```typescript
public readonly ListScanJobSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListScanJobSummaries API call.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.backup.BackupOperations.property.ListTags"></a>

```typescript
public readonly ListTags: string[];
```

- *Type:* string[]

IAM actions required for the ListTags API call.

---

##### `ListTieringConfigurations`<sup>Required</sup> <a name="ListTieringConfigurations" id="@cdk_utils/iam.backup.BackupOperations.property.ListTieringConfigurations"></a>

```typescript
public readonly ListTieringConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListTieringConfigurations API call.

---

##### `opGetBackupPlan`<sup>Required</sup> <a name="opGetBackupPlan" id="@cdk_utils/iam.backup.BackupOperations.property.opGetBackupPlan"></a>

```typescript
public readonly opGetBackupPlan: string[];
```

- *Type:* string[]

IAM actions required for the GetBackupPlan API call.

---

##### `opGetBackupPlanFromJSON`<sup>Required</sup> <a name="opGetBackupPlanFromJSON" id="@cdk_utils/iam.backup.BackupOperations.property.opGetBackupPlanFromJSON"></a>

```typescript
public readonly opGetBackupPlanFromJSON: string[];
```

- *Type:* string[]

IAM actions required for the GetBackupPlanFromJSON API call.

---

##### `opGetBackupPlanFromTemplate`<sup>Required</sup> <a name="opGetBackupPlanFromTemplate" id="@cdk_utils/iam.backup.BackupOperations.property.opGetBackupPlanFromTemplate"></a>

```typescript
public readonly opGetBackupPlanFromTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetBackupPlanFromTemplate API call.

---

##### `opGetBackupSelection`<sup>Required</sup> <a name="opGetBackupSelection" id="@cdk_utils/iam.backup.BackupOperations.property.opGetBackupSelection"></a>

```typescript
public readonly opGetBackupSelection: string[];
```

- *Type:* string[]

IAM actions required for the GetBackupSelection API call.

---

##### `opGetBackupVaultAccessPolicy`<sup>Required</sup> <a name="opGetBackupVaultAccessPolicy" id="@cdk_utils/iam.backup.BackupOperations.property.opGetBackupVaultAccessPolicy"></a>

```typescript
public readonly opGetBackupVaultAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetBackupVaultAccessPolicy API call.

---

##### `opGetBackupVaultNotifications`<sup>Required</sup> <a name="opGetBackupVaultNotifications" id="@cdk_utils/iam.backup.BackupOperations.property.opGetBackupVaultNotifications"></a>

```typescript
public readonly opGetBackupVaultNotifications: string[];
```

- *Type:* string[]

IAM actions required for the GetBackupVaultNotifications API call.

---

##### `opGetLegalHold`<sup>Required</sup> <a name="opGetLegalHold" id="@cdk_utils/iam.backup.BackupOperations.property.opGetLegalHold"></a>

```typescript
public readonly opGetLegalHold: string[];
```

- *Type:* string[]

IAM actions required for the GetLegalHold API call.

---

##### `opGetPITRMalwareScanResults`<sup>Required</sup> <a name="opGetPITRMalwareScanResults" id="@cdk_utils/iam.backup.BackupOperations.property.opGetPITRMalwareScanResults"></a>

```typescript
public readonly opGetPITRMalwareScanResults: string[];
```

- *Type:* string[]

IAM actions required for the GetPITRMalwareScanResults API call.

---

##### `opGetRecoveryPointIndexDetails`<sup>Required</sup> <a name="opGetRecoveryPointIndexDetails" id="@cdk_utils/iam.backup.BackupOperations.property.opGetRecoveryPointIndexDetails"></a>

```typescript
public readonly opGetRecoveryPointIndexDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetRecoveryPointIndexDetails API call.

---

##### `opGetRecoveryPointRestoreMetadata`<sup>Required</sup> <a name="opGetRecoveryPointRestoreMetadata" id="@cdk_utils/iam.backup.BackupOperations.property.opGetRecoveryPointRestoreMetadata"></a>

```typescript
public readonly opGetRecoveryPointRestoreMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetRecoveryPointRestoreMetadata API call.

---

##### `opGetRestoreJobMetadata`<sup>Required</sup> <a name="opGetRestoreJobMetadata" id="@cdk_utils/iam.backup.BackupOperations.property.opGetRestoreJobMetadata"></a>

```typescript
public readonly opGetRestoreJobMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetRestoreJobMetadata API call.

---

##### `opGetRestoreTestingInferredMetadata`<sup>Required</sup> <a name="opGetRestoreTestingInferredMetadata" id="@cdk_utils/iam.backup.BackupOperations.property.opGetRestoreTestingInferredMetadata"></a>

```typescript
public readonly opGetRestoreTestingInferredMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetRestoreTestingInferredMetadata API call.

---

##### `opGetRestoreTestingPlan`<sup>Required</sup> <a name="opGetRestoreTestingPlan" id="@cdk_utils/iam.backup.BackupOperations.property.opGetRestoreTestingPlan"></a>

```typescript
public readonly opGetRestoreTestingPlan: string[];
```

- *Type:* string[]

IAM actions required for the GetRestoreTestingPlan API call.

---

##### `opGetRestoreTestingSelection`<sup>Required</sup> <a name="opGetRestoreTestingSelection" id="@cdk_utils/iam.backup.BackupOperations.property.opGetRestoreTestingSelection"></a>

```typescript
public readonly opGetRestoreTestingSelection: string[];
```

- *Type:* string[]

IAM actions required for the GetRestoreTestingSelection API call.

---

##### `opGetSupportedResourceTypes`<sup>Required</sup> <a name="opGetSupportedResourceTypes" id="@cdk_utils/iam.backup.BackupOperations.property.opGetSupportedResourceTypes"></a>

```typescript
public readonly opGetSupportedResourceTypes: string[];
```

- *Type:* string[]

IAM actions required for the GetSupportedResourceTypes API call.

---

##### `opGetTieringConfiguration`<sup>Required</sup> <a name="opGetTieringConfiguration" id="@cdk_utils/iam.backup.BackupOperations.property.opGetTieringConfiguration"></a>

```typescript
public readonly opGetTieringConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetTieringConfiguration API call.

---

##### `PutBackupVaultAccessPolicy`<sup>Required</sup> <a name="PutBackupVaultAccessPolicy" id="@cdk_utils/iam.backup.BackupOperations.property.PutBackupVaultAccessPolicy"></a>

```typescript
public readonly PutBackupVaultAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutBackupVaultAccessPolicy API call.

---

##### `PutBackupVaultLockConfiguration`<sup>Required</sup> <a name="PutBackupVaultLockConfiguration" id="@cdk_utils/iam.backup.BackupOperations.property.PutBackupVaultLockConfiguration"></a>

```typescript
public readonly PutBackupVaultLockConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutBackupVaultLockConfiguration API call.

---

##### `PutBackupVaultNotifications`<sup>Required</sup> <a name="PutBackupVaultNotifications" id="@cdk_utils/iam.backup.BackupOperations.property.PutBackupVaultNotifications"></a>

```typescript
public readonly PutBackupVaultNotifications: string[];
```

- *Type:* string[]

IAM actions required for the PutBackupVaultNotifications API call.

---

##### `PutRestoreValidationResult`<sup>Required</sup> <a name="PutRestoreValidationResult" id="@cdk_utils/iam.backup.BackupOperations.property.PutRestoreValidationResult"></a>

```typescript
public readonly PutRestoreValidationResult: string[];
```

- *Type:* string[]

IAM actions required for the PutRestoreValidationResult API call.

---

##### `RevokeRestoreAccessBackupVault`<sup>Required</sup> <a name="RevokeRestoreAccessBackupVault" id="@cdk_utils/iam.backup.BackupOperations.property.RevokeRestoreAccessBackupVault"></a>

```typescript
public readonly RevokeRestoreAccessBackupVault: string[];
```

- *Type:* string[]

IAM actions required for the RevokeRestoreAccessBackupVault API call.

---

##### `StartBackupJob`<sup>Required</sup> <a name="StartBackupJob" id="@cdk_utils/iam.backup.BackupOperations.property.StartBackupJob"></a>

```typescript
public readonly StartBackupJob: string[];
```

- *Type:* string[]

IAM actions required for the StartBackupJob API call.

---

##### `StartCopyJob`<sup>Required</sup> <a name="StartCopyJob" id="@cdk_utils/iam.backup.BackupOperations.property.StartCopyJob"></a>

```typescript
public readonly StartCopyJob: string[];
```

- *Type:* string[]

IAM actions required for the StartCopyJob API call.

---

##### `StartReportJob`<sup>Required</sup> <a name="StartReportJob" id="@cdk_utils/iam.backup.BackupOperations.property.StartReportJob"></a>

```typescript
public readonly StartReportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartReportJob API call.

---

##### `StartRestoreJob`<sup>Required</sup> <a name="StartRestoreJob" id="@cdk_utils/iam.backup.BackupOperations.property.StartRestoreJob"></a>

```typescript
public readonly StartRestoreJob: string[];
```

- *Type:* string[]

IAM actions required for the StartRestoreJob API call.

---

##### `StartScanJob`<sup>Required</sup> <a name="StartScanJob" id="@cdk_utils/iam.backup.BackupOperations.property.StartScanJob"></a>

```typescript
public readonly StartScanJob: string[];
```

- *Type:* string[]

IAM actions required for the StartScanJob API call.

---

##### `StopBackupJob`<sup>Required</sup> <a name="StopBackupJob" id="@cdk_utils/iam.backup.BackupOperations.property.StopBackupJob"></a>

```typescript
public readonly StopBackupJob: string[];
```

- *Type:* string[]

IAM actions required for the StopBackupJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.backup.BackupOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.backup.BackupOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBackupPlan`<sup>Required</sup> <a name="UpdateBackupPlan" id="@cdk_utils/iam.backup.BackupOperations.property.UpdateBackupPlan"></a>

```typescript
public readonly UpdateBackupPlan: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBackupPlan API call.

---

##### `UpdateFramework`<sup>Required</sup> <a name="UpdateFramework" id="@cdk_utils/iam.backup.BackupOperations.property.UpdateFramework"></a>

```typescript
public readonly UpdateFramework: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFramework API call.

---

##### `UpdateGlobalSettings`<sup>Required</sup> <a name="UpdateGlobalSettings" id="@cdk_utils/iam.backup.BackupOperations.property.UpdateGlobalSettings"></a>

```typescript
public readonly UpdateGlobalSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlobalSettings API call.

---

##### `UpdateRecoveryPointIndexSettings`<sup>Required</sup> <a name="UpdateRecoveryPointIndexSettings" id="@cdk_utils/iam.backup.BackupOperations.property.UpdateRecoveryPointIndexSettings"></a>

```typescript
public readonly UpdateRecoveryPointIndexSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRecoveryPointIndexSettings API call.

---

##### `UpdateRecoveryPointLifecycle`<sup>Required</sup> <a name="UpdateRecoveryPointLifecycle" id="@cdk_utils/iam.backup.BackupOperations.property.UpdateRecoveryPointLifecycle"></a>

```typescript
public readonly UpdateRecoveryPointLifecycle: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRecoveryPointLifecycle API call.

---

##### `UpdateRegionSettings`<sup>Required</sup> <a name="UpdateRegionSettings" id="@cdk_utils/iam.backup.BackupOperations.property.UpdateRegionSettings"></a>

```typescript
public readonly UpdateRegionSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegionSettings API call.

---

##### `UpdateReportPlan`<sup>Required</sup> <a name="UpdateReportPlan" id="@cdk_utils/iam.backup.BackupOperations.property.UpdateReportPlan"></a>

```typescript
public readonly UpdateReportPlan: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReportPlan API call.

---

##### `UpdateRestoreTestingPlan`<sup>Required</sup> <a name="UpdateRestoreTestingPlan" id="@cdk_utils/iam.backup.BackupOperations.property.UpdateRestoreTestingPlan"></a>

```typescript
public readonly UpdateRestoreTestingPlan: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRestoreTestingPlan API call.

---

##### `UpdateRestoreTestingSelection`<sup>Required</sup> <a name="UpdateRestoreTestingSelection" id="@cdk_utils/iam.backup.BackupOperations.property.UpdateRestoreTestingSelection"></a>

```typescript
public readonly UpdateRestoreTestingSelection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRestoreTestingSelection API call.

---

##### `UpdateTieringConfiguration`<sup>Required</sup> <a name="UpdateTieringConfiguration" id="@cdk_utils/iam.backup.BackupOperations.property.UpdateTieringConfiguration"></a>

```typescript
public readonly UpdateTieringConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTieringConfiguration API call.

---

### BackupResources <a name="BackupResources" id="@cdk_utils/iam.backup.BackupResources"></a>

ARN builders, validators, and parsers for backup resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup.BackupResources.Initializer"></a>

```typescript
import { backup } from '@cdk_utils/iam'

new backup.BackupResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.backupAccessPoint">backupAccessPoint</a></code> | Builds an ARN for the backupAccessPoint resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.backupPlan">backupPlan</a></code> | Builds an ARN for the backupPlan resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.backupVault">backupVault</a></code> | Builds an ARN for the backupVault resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.framework">framework</a></code> | Builds an ARN for the framework resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.isValidBackupAccessPointArn">isValidBackupAccessPointArn</a></code> | Validates whether a string is a valid ARN for the backupAccessPoint resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.isValidBackupPlanArn">isValidBackupPlanArn</a></code> | Validates whether a string is a valid ARN for the backupPlan resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.isValidBackupVaultArn">isValidBackupVaultArn</a></code> | Validates whether a string is a valid ARN for the backupVault resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.isValidFrameworkArn">isValidFrameworkArn</a></code> | Validates whether a string is a valid ARN for the framework resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.isValidLegalHoldArn">isValidLegalHoldArn</a></code> | Validates whether a string is a valid ARN for the legalHold resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.isValidRecoveryPointArn">isValidRecoveryPointArn</a></code> | Validates whether a string is a valid ARN for the recoveryPoint resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.isValidReportPlanArn">isValidReportPlanArn</a></code> | Validates whether a string is a valid ARN for the reportPlan resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.isValidRestoreTestingPlanArn">isValidRestoreTestingPlanArn</a></code> | Validates whether a string is a valid ARN for the restoreTestingPlan resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.isValidTieringConfigurationArn">isValidTieringConfigurationArn</a></code> | Validates whether a string is a valid ARN for the tieringConfiguration resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.legalHold">legalHold</a></code> | Builds an ARN for the legalHold resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.parseBackupAccessPointArn">parseBackupAccessPointArn</a></code> | Parses a backupAccessPoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.parseBackupPlanArn">parseBackupPlanArn</a></code> | Parses a backupPlan ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.parseBackupVaultArn">parseBackupVaultArn</a></code> | Parses a backupVault ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.parseFrameworkArn">parseFrameworkArn</a></code> | Parses a framework ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.parseLegalHoldArn">parseLegalHoldArn</a></code> | Parses a legalHold ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.parseRecoveryPointArn">parseRecoveryPointArn</a></code> | Parses a recoveryPoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.parseReportPlanArn">parseReportPlanArn</a></code> | Parses a reportPlan ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.parseRestoreTestingPlanArn">parseRestoreTestingPlanArn</a></code> | Parses a restoreTestingPlan ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.parseTieringConfigurationArn">parseTieringConfigurationArn</a></code> | Parses a tieringConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.recoveryPoint">recoveryPoint</a></code> | Builds an ARN for the recoveryPoint resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.reportPlan">reportPlan</a></code> | Builds an ARN for the reportPlan resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.restoreTestingPlan">restoreTestingPlan</a></code> | Builds an ARN for the restoreTestingPlan resource. |
| <code><a href="#@cdk_utils/iam.backup.BackupResources.tieringConfiguration">tieringConfiguration</a></code> | Builds an ARN for the tieringConfiguration resource. |

---

##### `backupAccessPoint` <a name="backupAccessPoint" id="@cdk_utils/iam.backup.BackupResources.backupAccessPoint"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.backupAccessPoint(props: BackupBackupAccessPointArnProps)
```

Builds an ARN for the backupAccessPoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup.BackupResources.backupAccessPoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup.BackupBackupAccessPointArnProps">BackupBackupAccessPointArnProps</a>

---

##### `backupPlan` <a name="backupPlan" id="@cdk_utils/iam.backup.BackupResources.backupPlan"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.backupPlan(props: BackupBackupPlanArnProps)
```

Builds an ARN for the backupPlan resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup.BackupResources.backupPlan.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup.BackupBackupPlanArnProps">BackupBackupPlanArnProps</a>

---

##### `backupVault` <a name="backupVault" id="@cdk_utils/iam.backup.BackupResources.backupVault"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.backupVault(props: BackupBackupVaultArnProps)
```

Builds an ARN for the backupVault resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup.BackupResources.backupVault.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup.BackupBackupVaultArnProps">BackupBackupVaultArnProps</a>

---

##### `framework` <a name="framework" id="@cdk_utils/iam.backup.BackupResources.framework"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.framework(props: BackupFrameworkArnProps)
```

Builds an ARN for the framework resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup.BackupResources.framework.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup.BackupFrameworkArnProps">BackupFrameworkArnProps</a>

---

##### `isValidBackupAccessPointArn` <a name="isValidBackupAccessPointArn" id="@cdk_utils/iam.backup.BackupResources.isValidBackupAccessPointArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.isValidBackupAccessPointArn(arn: string)
```

Validates whether a string is a valid ARN for the backupAccessPoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.isValidBackupAccessPointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBackupPlanArn` <a name="isValidBackupPlanArn" id="@cdk_utils/iam.backup.BackupResources.isValidBackupPlanArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.isValidBackupPlanArn(arn: string)
```

Validates whether a string is a valid ARN for the backupPlan resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.isValidBackupPlanArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBackupVaultArn` <a name="isValidBackupVaultArn" id="@cdk_utils/iam.backup.BackupResources.isValidBackupVaultArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.isValidBackupVaultArn(arn: string)
```

Validates whether a string is a valid ARN for the backupVault resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.isValidBackupVaultArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFrameworkArn` <a name="isValidFrameworkArn" id="@cdk_utils/iam.backup.BackupResources.isValidFrameworkArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.isValidFrameworkArn(arn: string)
```

Validates whether a string is a valid ARN for the framework resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.isValidFrameworkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLegalHoldArn` <a name="isValidLegalHoldArn" id="@cdk_utils/iam.backup.BackupResources.isValidLegalHoldArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.isValidLegalHoldArn(arn: string)
```

Validates whether a string is a valid ARN for the legalHold resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.isValidLegalHoldArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecoveryPointArn` <a name="isValidRecoveryPointArn" id="@cdk_utils/iam.backup.BackupResources.isValidRecoveryPointArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.isValidRecoveryPointArn(arn: string)
```

Validates whether a string is a valid ARN for the recoveryPoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.isValidRecoveryPointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReportPlanArn` <a name="isValidReportPlanArn" id="@cdk_utils/iam.backup.BackupResources.isValidReportPlanArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.isValidReportPlanArn(arn: string)
```

Validates whether a string is a valid ARN for the reportPlan resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.isValidReportPlanArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRestoreTestingPlanArn` <a name="isValidRestoreTestingPlanArn" id="@cdk_utils/iam.backup.BackupResources.isValidRestoreTestingPlanArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.isValidRestoreTestingPlanArn(arn: string)
```

Validates whether a string is a valid ARN for the restoreTestingPlan resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.isValidRestoreTestingPlanArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTieringConfigurationArn` <a name="isValidTieringConfigurationArn" id="@cdk_utils/iam.backup.BackupResources.isValidTieringConfigurationArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.isValidTieringConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the tieringConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.isValidTieringConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `legalHold` <a name="legalHold" id="@cdk_utils/iam.backup.BackupResources.legalHold"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.legalHold(props: BackupLegalHoldArnProps)
```

Builds an ARN for the legalHold resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup.BackupResources.legalHold.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup.BackupLegalHoldArnProps">BackupLegalHoldArnProps</a>

---

##### `parseBackupAccessPointArn` <a name="parseBackupAccessPointArn" id="@cdk_utils/iam.backup.BackupResources.parseBackupAccessPointArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.parseBackupAccessPointArn(arn: string)
```

Parses a backupAccessPoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.parseBackupAccessPointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBackupPlanArn` <a name="parseBackupPlanArn" id="@cdk_utils/iam.backup.BackupResources.parseBackupPlanArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.parseBackupPlanArn(arn: string)
```

Parses a backupPlan ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.parseBackupPlanArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBackupVaultArn` <a name="parseBackupVaultArn" id="@cdk_utils/iam.backup.BackupResources.parseBackupVaultArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.parseBackupVaultArn(arn: string)
```

Parses a backupVault ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.parseBackupVaultArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFrameworkArn` <a name="parseFrameworkArn" id="@cdk_utils/iam.backup.BackupResources.parseFrameworkArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.parseFrameworkArn(arn: string)
```

Parses a framework ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.parseFrameworkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLegalHoldArn` <a name="parseLegalHoldArn" id="@cdk_utils/iam.backup.BackupResources.parseLegalHoldArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.parseLegalHoldArn(arn: string)
```

Parses a legalHold ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.parseLegalHoldArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecoveryPointArn` <a name="parseRecoveryPointArn" id="@cdk_utils/iam.backup.BackupResources.parseRecoveryPointArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.parseRecoveryPointArn(arn: string)
```

Parses a recoveryPoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.parseRecoveryPointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReportPlanArn` <a name="parseReportPlanArn" id="@cdk_utils/iam.backup.BackupResources.parseReportPlanArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.parseReportPlanArn(arn: string)
```

Parses a reportPlan ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.parseReportPlanArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRestoreTestingPlanArn` <a name="parseRestoreTestingPlanArn" id="@cdk_utils/iam.backup.BackupResources.parseRestoreTestingPlanArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.parseRestoreTestingPlanArn(arn: string)
```

Parses a restoreTestingPlan ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.parseRestoreTestingPlanArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTieringConfigurationArn` <a name="parseTieringConfigurationArn" id="@cdk_utils/iam.backup.BackupResources.parseTieringConfigurationArn"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.parseTieringConfigurationArn(arn: string)
```

Parses a tieringConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup.BackupResources.parseTieringConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `recoveryPoint` <a name="recoveryPoint" id="@cdk_utils/iam.backup.BackupResources.recoveryPoint"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.recoveryPoint(props: BackupRecoveryPointArnProps)
```

Builds an ARN for the recoveryPoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup.BackupResources.recoveryPoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup.BackupRecoveryPointArnProps">BackupRecoveryPointArnProps</a>

---

##### `reportPlan` <a name="reportPlan" id="@cdk_utils/iam.backup.BackupResources.reportPlan"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.reportPlan(props: BackupReportPlanArnProps)
```

Builds an ARN for the reportPlan resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup.BackupResources.reportPlan.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup.BackupReportPlanArnProps">BackupReportPlanArnProps</a>

---

##### `restoreTestingPlan` <a name="restoreTestingPlan" id="@cdk_utils/iam.backup.BackupResources.restoreTestingPlan"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.restoreTestingPlan(props: BackupRestoreTestingPlanArnProps)
```

Builds an ARN for the restoreTestingPlan resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup.BackupResources.restoreTestingPlan.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup.BackupRestoreTestingPlanArnProps">BackupRestoreTestingPlanArnProps</a>

---

##### `tieringConfiguration` <a name="tieringConfiguration" id="@cdk_utils/iam.backup.BackupResources.tieringConfiguration"></a>

```typescript
import { backup } from '@cdk_utils/iam'

backup.BackupResources.tieringConfiguration(props: BackupTieringConfigurationArnProps)
```

Builds an ARN for the tieringConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup.BackupResources.tieringConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup.BackupTieringConfigurationArnProps">BackupTieringConfigurationArnProps</a>

---




