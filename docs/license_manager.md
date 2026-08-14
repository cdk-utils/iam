# `license_manager` Submodule <a name="`license_manager` Submodule" id="@cdk_utils/iam.license_manager"></a>


## Structs <a name="Structs" id="Structs"></a>

### LicenseManagerGrantArnComponents <a name="LicenseManagerGrantArnComponents" id="@cdk_utils/iam.license_manager.LicenseManagerGrantArnComponents"></a>

Parsed components of a grant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerGrantArnComponents.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerGrantArnComponents: license_manager.LicenseManagerGrantArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerGrantArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerGrantArnComponents.property.grantId">grantId</a></code> | <code>string</code> | The GrantId component. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerGrantArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerGrantArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdk_utils/iam.license_manager.LicenseManagerGrantArnComponents.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

The GrantId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerGrantArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### LicenseManagerGrantArnProps <a name="LicenseManagerGrantArnProps" id="@cdk_utils/iam.license_manager.LicenseManagerGrantArnProps"></a>

Properties for building a grant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerGrantArnProps.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerGrantArnProps: license_manager.LicenseManagerGrantArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerGrantArnProps.property.grantId">grantId</a></code> | <code>string</code> | The GrantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerGrantArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerGrantArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdk_utils/iam.license_manager.LicenseManagerGrantArnProps.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

The GrantId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerGrantArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerGrantArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### LicenseManagerLicenseArnComponents <a name="LicenseManagerLicenseArnComponents" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseArnComponents"></a>

Parsed components of a license ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseArnComponents.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerLicenseArnComponents: license_manager.LicenseManagerLicenseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseArnComponents.property.licenseId">licenseId</a></code> | <code>string</code> | The LicenseId component. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `licenseId`<sup>Required</sup> <a name="licenseId" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseArnComponents.property.licenseId"></a>

```typescript
public readonly licenseId: string;
```

- *Type:* string

The LicenseId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### LicenseManagerLicenseArnProps <a name="LicenseManagerLicenseArnProps" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseArnProps"></a>

Properties for building a license ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseArnProps.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerLicenseArnProps: license_manager.LicenseManagerLicenseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseArnProps.property.licenseId">licenseId</a></code> | <code>string</code> | The LicenseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `licenseId`<sup>Required</sup> <a name="licenseId" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseArnProps.property.licenseId"></a>

```typescript
public readonly licenseId: string;
```

- *Type:* string

The LicenseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### LicenseManagerLicenseAssetGroupArnComponents <a name="LicenseManagerLicenseAssetGroupArnComponents" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnComponents"></a>

Parsed components of a license-asset-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnComponents.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerLicenseAssetGroupArnComponents: license_manager.LicenseManagerLicenseAssetGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnComponents.property.licenseAssetGroupId">licenseAssetGroupId</a></code> | <code>string</code> | The LicenseAssetGroupId component. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `licenseAssetGroupId`<sup>Required</sup> <a name="licenseAssetGroupId" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnComponents.property.licenseAssetGroupId"></a>

```typescript
public readonly licenseAssetGroupId: string;
```

- *Type:* string

The LicenseAssetGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LicenseManagerLicenseAssetGroupArnProps <a name="LicenseManagerLicenseAssetGroupArnProps" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnProps"></a>

Properties for building a license-asset-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnProps.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerLicenseAssetGroupArnProps: license_manager.LicenseManagerLicenseAssetGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnProps.property.licenseAssetGroupId">licenseAssetGroupId</a></code> | <code>string</code> | The LicenseAssetGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `licenseAssetGroupId`<sup>Required</sup> <a name="licenseAssetGroupId" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnProps.property.licenseAssetGroupId"></a>

```typescript
public readonly licenseAssetGroupId: string;
```

- *Type:* string

The LicenseAssetGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LicenseManagerLicenseAssetRulesetArnComponents <a name="LicenseManagerLicenseAssetRulesetArnComponents" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnComponents"></a>

Parsed components of a license-asset-ruleset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnComponents.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerLicenseAssetRulesetArnComponents: license_manager.LicenseManagerLicenseAssetRulesetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnComponents.property.licenseAssetRulesetId">licenseAssetRulesetId</a></code> | <code>string</code> | The LicenseAssetRulesetId component. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `licenseAssetRulesetId`<sup>Required</sup> <a name="licenseAssetRulesetId" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnComponents.property.licenseAssetRulesetId"></a>

```typescript
public readonly licenseAssetRulesetId: string;
```

- *Type:* string

The LicenseAssetRulesetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LicenseManagerLicenseAssetRulesetArnProps <a name="LicenseManagerLicenseAssetRulesetArnProps" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnProps"></a>

Properties for building a license-asset-ruleset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnProps.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerLicenseAssetRulesetArnProps: license_manager.LicenseManagerLicenseAssetRulesetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnProps.property.licenseAssetRulesetId">licenseAssetRulesetId</a></code> | <code>string</code> | The LicenseAssetRulesetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `licenseAssetRulesetId`<sup>Required</sup> <a name="licenseAssetRulesetId" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnProps.property.licenseAssetRulesetId"></a>

```typescript
public readonly licenseAssetRulesetId: string;
```

- *Type:* string

The LicenseAssetRulesetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LicenseManagerLicenseConfigurationArnComponents <a name="LicenseManagerLicenseConfigurationArnComponents" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnComponents"></a>

Parsed components of a license-configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnComponents.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerLicenseConfigurationArnComponents: license_manager.LicenseManagerLicenseConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnComponents.property.licenseConfigurationId">licenseConfigurationId</a></code> | <code>string</code> | The LicenseConfigurationId component. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `licenseConfigurationId`<sup>Required</sup> <a name="licenseConfigurationId" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnComponents.property.licenseConfigurationId"></a>

```typescript
public readonly licenseConfigurationId: string;
```

- *Type:* string

The LicenseConfigurationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LicenseManagerLicenseConfigurationArnProps <a name="LicenseManagerLicenseConfigurationArnProps" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnProps"></a>

Properties for building a license-configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnProps.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerLicenseConfigurationArnProps: license_manager.LicenseManagerLicenseConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnProps.property.licenseConfigurationId">licenseConfigurationId</a></code> | <code>string</code> | The LicenseConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `licenseConfigurationId`<sup>Required</sup> <a name="licenseConfigurationId" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnProps.property.licenseConfigurationId"></a>

```typescript
public readonly licenseConfigurationId: string;
```

- *Type:* string

The LicenseConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LicenseManagerReportGeneratorArnComponents <a name="LicenseManagerReportGeneratorArnComponents" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnComponents"></a>

Parsed components of a report-generator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnComponents.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerReportGeneratorArnComponents: license_manager.LicenseManagerReportGeneratorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnComponents.property.reportGeneratorId">reportGeneratorId</a></code> | <code>string</code> | The ReportGeneratorId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reportGeneratorId`<sup>Required</sup> <a name="reportGeneratorId" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnComponents.property.reportGeneratorId"></a>

```typescript
public readonly reportGeneratorId: string;
```

- *Type:* string

The ReportGeneratorId component.

---

### LicenseManagerReportGeneratorArnProps <a name="LicenseManagerReportGeneratorArnProps" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnProps"></a>

Properties for building a report-generator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnProps.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

const licenseManagerReportGeneratorArnProps: license_manager.LicenseManagerReportGeneratorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnProps.property.reportGeneratorId">reportGeneratorId</a></code> | <code>string</code> | The ReportGeneratorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reportGeneratorId`<sup>Required</sup> <a name="reportGeneratorId" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnProps.property.reportGeneratorId"></a>

```typescript
public readonly reportGeneratorId: string;
```

- *Type:* string

The ReportGeneratorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### LicenseManagerActions <a name="LicenseManagerActions" id="@cdk_utils/iam.license_manager.LicenseManagerActions"></a>

IAM action constants for the license-manager service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager.LicenseManagerActions.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

new license_manager.LicenseManagerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.AcceptGrant">AcceptGrant</a></code> | <code>string</code> | [Write] license-manager:AcceptGrant. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetAccessToken">actionGetAccessToken</a></code> | <code>string</code> | [Read] license-manager:GetAccessToken. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetGrant">actionGetGrant</a></code> | <code>string</code> | [Read] license-manager:GetGrant. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicense">actionGetLicense</a></code> | <code>string</code> | [Read] license-manager:GetLicense. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseAssetGroup">actionGetLicenseAssetGroup</a></code> | <code>string</code> | [Read] license-manager:GetLicenseAssetGroup. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseAssetRuleset">actionGetLicenseAssetRuleset</a></code> | <code>string</code> | [Read] license-manager:GetLicenseAssetRuleset. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseConfiguration">actionGetLicenseConfiguration</a></code> | <code>string</code> | [Read] license-manager:GetLicenseConfiguration. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseConversionTask">actionGetLicenseConversionTask</a></code> | <code>string</code> | [Read] license-manager:GetLicenseConversionTask. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseManagerReportGenerator">actionGetLicenseManagerReportGenerator</a></code> | <code>string</code> | [Read] license-manager:GetLicenseManagerReportGenerator. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseUsage">actionGetLicenseUsage</a></code> | <code>string</code> | [Read] license-manager:GetLicenseUsage. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetServiceSettings">actionGetServiceSettings</a></code> | <code>string</code> | [List] license-manager:GetServiceSettings. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CheckInLicense">CheckInLicense</a></code> | <code>string</code> | [Write] license-manager:CheckInLicense. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CheckoutBorrowLicense">CheckoutBorrowLicense</a></code> | <code>string</code> | [Write] license-manager:CheckoutBorrowLicense. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CheckoutLicense">CheckoutLicense</a></code> | <code>string</code> | [Write] license-manager:CheckoutLicense. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateGrant">CreateGrant</a></code> | <code>string</code> | [Write] license-manager:CreateGrant. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateGrantVersion">CreateGrantVersion</a></code> | <code>string</code> | [Write] license-manager:CreateGrantVersion. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicense">CreateLicense</a></code> | <code>string</code> | [Write] license-manager:CreateLicense. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseAssetGroup">CreateLicenseAssetGroup</a></code> | <code>string</code> | [Write] license-manager:CreateLicenseAssetGroup. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseAssetRuleset">CreateLicenseAssetRuleset</a></code> | <code>string</code> | [Write] license-manager:CreateLicenseAssetRuleset. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseConfiguration">CreateLicenseConfiguration</a></code> | <code>string</code> | [Write] license-manager:CreateLicenseConfiguration. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseConversionTaskForResource">CreateLicenseConversionTaskForResource</a></code> | <code>string</code> | [Write] license-manager:CreateLicenseConversionTaskForResource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseManagerReportGenerator">CreateLicenseManagerReportGenerator</a></code> | <code>string</code> | [Write] license-manager:CreateLicenseManagerReportGenerator. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseVersion">CreateLicenseVersion</a></code> | <code>string</code> | [Write] license-manager:CreateLicenseVersion. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateToken">CreateToken</a></code> | <code>string</code> | [Write] license-manager:CreateToken. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteGrant">DeleteGrant</a></code> | <code>string</code> | [Write] license-manager:DeleteGrant. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteLicense">DeleteLicense</a></code> | <code>string</code> | [Write] license-manager:DeleteLicense. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteLicenseAssetGroup">DeleteLicenseAssetGroup</a></code> | <code>string</code> | [Write] license-manager:DeleteLicenseAssetGroup. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteLicenseAssetRuleset">DeleteLicenseAssetRuleset</a></code> | <code>string</code> | [Write] license-manager:DeleteLicenseAssetRuleset. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteLicenseConfiguration">DeleteLicenseConfiguration</a></code> | <code>string</code> | [Write] license-manager:DeleteLicenseConfiguration. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteLicenseManagerReportGenerator">DeleteLicenseManagerReportGenerator</a></code> | <code>string</code> | [Write] license-manager:DeleteLicenseManagerReportGenerator. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteToken">DeleteToken</a></code> | <code>string</code> | [Write] license-manager:DeleteToken. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ExtendLicenseConsumption">ExtendLicenseConsumption</a></code> | <code>string</code> | [Write] license-manager:ExtendLicenseConsumption. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListAssetsForLicenseAssetGroup">ListAssetsForLicenseAssetGroup</a></code> | <code>string</code> | [List] license-manager:ListAssetsForLicenseAssetGroup. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListAssociationsForLicenseConfiguration">ListAssociationsForLicenseConfiguration</a></code> | <code>string</code> | [List] license-manager:ListAssociationsForLicenseConfiguration. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListDistributedGrants">ListDistributedGrants</a></code> | <code>string</code> | [List] license-manager:ListDistributedGrants. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListFailuresForLicenseConfigurationOperations">ListFailuresForLicenseConfigurationOperations</a></code> | <code>string</code> | [List] license-manager:ListFailuresForLicenseConfigurationOperations. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseAssetGroups">ListLicenseAssetGroups</a></code> | <code>string</code> | [List] license-manager:ListLicenseAssetGroups. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseAssetRulesets">ListLicenseAssetRulesets</a></code> | <code>string</code> | [List] license-manager:ListLicenseAssetRulesets. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseConfigurations">ListLicenseConfigurations</a></code> | <code>string</code> | [List] license-manager:ListLicenseConfigurations. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseConfigurationsForOrganization">ListLicenseConfigurationsForOrganization</a></code> | <code>string</code> | [List] license-manager:ListLicenseConfigurationsForOrganization. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseConversionTasks">ListLicenseConversionTasks</a></code> | <code>string</code> | [List] license-manager:ListLicenseConversionTasks. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseManagerReportGenerators">ListLicenseManagerReportGenerators</a></code> | <code>string</code> | [List] license-manager:ListLicenseManagerReportGenerators. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenses">ListLicenses</a></code> | <code>string</code> | [Read] license-manager:ListLicenses. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseSpecificationsForResource">ListLicenseSpecificationsForResource</a></code> | <code>string</code> | [List] license-manager:ListLicenseSpecificationsForResource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseVersions">ListLicenseVersions</a></code> | <code>string</code> | [List] license-manager:ListLicenseVersions. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListReceivedGrants">ListReceivedGrants</a></code> | <code>string</code> | [List] license-manager:ListReceivedGrants. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListReceivedGrantsForOrganization">ListReceivedGrantsForOrganization</a></code> | <code>string</code> | [List] license-manager:ListReceivedGrantsForOrganization. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListReceivedLicenses">ListReceivedLicenses</a></code> | <code>string</code> | [List] license-manager:ListReceivedLicenses. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListReceivedLicensesForOrganization">ListReceivedLicensesForOrganization</a></code> | <code>string</code> | [List] license-manager:ListReceivedLicensesForOrganization. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListResourceInventory">ListResourceInventory</a></code> | <code>string</code> | [List] license-manager:ListResourceInventory. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] license-manager:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListTokens">ListTokens</a></code> | <code>string</code> | [List] license-manager:ListTokens. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListUsageForLicenseConfiguration">ListUsageForLicenseConfiguration</a></code> | <code>string</code> | [List] license-manager:ListUsageForLicenseConfiguration. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.RejectGrant">RejectGrant</a></code> | <code>string</code> | [Write] license-manager:RejectGrant. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] license-manager:TagResource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] license-manager:UntagResource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateLicenseAssetGroup">UpdateLicenseAssetGroup</a></code> | <code>string</code> | [Write] license-manager:UpdateLicenseAssetGroup. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateLicenseAssetRuleset">UpdateLicenseAssetRuleset</a></code> | <code>string</code> | [Write] license-manager:UpdateLicenseAssetRuleset. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateLicenseConfiguration">UpdateLicenseConfiguration</a></code> | <code>string</code> | [Write] license-manager:UpdateLicenseConfiguration. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateLicenseManagerReportGenerator">UpdateLicenseManagerReportGenerator</a></code> | <code>string</code> | [Write] license-manager:UpdateLicenseManagerReportGenerator. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateLicenseSpecificationsForResource">UpdateLicenseSpecificationsForResource</a></code> | <code>string</code> | [Write] license-manager:UpdateLicenseSpecificationsForResource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateServiceSettings">UpdateServiceSettings</a></code> | <code>string</code> | [PermissionManagement] license-manager:UpdateServiceSettings. |

---

##### `AcceptGrant`<sup>Required</sup> <a name="AcceptGrant" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.AcceptGrant"></a>

```typescript
public readonly AcceptGrant: string;
```

- *Type:* string

[Write] license-manager:AcceptGrant.

---

##### `actionGetAccessToken`<sup>Required</sup> <a name="actionGetAccessToken" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetAccessToken"></a>

```typescript
public readonly actionGetAccessToken: string;
```

- *Type:* string

[Read] license-manager:GetAccessToken.

---

##### `actionGetGrant`<sup>Required</sup> <a name="actionGetGrant" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetGrant"></a>

```typescript
public readonly actionGetGrant: string;
```

- *Type:* string

[Read] license-manager:GetGrant.

---

##### `actionGetLicense`<sup>Required</sup> <a name="actionGetLicense" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicense"></a>

```typescript
public readonly actionGetLicense: string;
```

- *Type:* string

[Read] license-manager:GetLicense.

---

##### `actionGetLicenseAssetGroup`<sup>Required</sup> <a name="actionGetLicenseAssetGroup" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseAssetGroup"></a>

```typescript
public readonly actionGetLicenseAssetGroup: string;
```

- *Type:* string

[Read] license-manager:GetLicenseAssetGroup.

---

##### `actionGetLicenseAssetRuleset`<sup>Required</sup> <a name="actionGetLicenseAssetRuleset" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseAssetRuleset"></a>

```typescript
public readonly actionGetLicenseAssetRuleset: string;
```

- *Type:* string

[Read] license-manager:GetLicenseAssetRuleset.

---

##### `actionGetLicenseConfiguration`<sup>Required</sup> <a name="actionGetLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseConfiguration"></a>

```typescript
public readonly actionGetLicenseConfiguration: string;
```

- *Type:* string

[Read] license-manager:GetLicenseConfiguration.

---

##### `actionGetLicenseConversionTask`<sup>Required</sup> <a name="actionGetLicenseConversionTask" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseConversionTask"></a>

```typescript
public readonly actionGetLicenseConversionTask: string;
```

- *Type:* string

[Read] license-manager:GetLicenseConversionTask.

---

##### `actionGetLicenseManagerReportGenerator`<sup>Required</sup> <a name="actionGetLicenseManagerReportGenerator" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseManagerReportGenerator"></a>

```typescript
public readonly actionGetLicenseManagerReportGenerator: string;
```

- *Type:* string

[Read] license-manager:GetLicenseManagerReportGenerator.

---

##### `actionGetLicenseUsage`<sup>Required</sup> <a name="actionGetLicenseUsage" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetLicenseUsage"></a>

```typescript
public readonly actionGetLicenseUsage: string;
```

- *Type:* string

[Read] license-manager:GetLicenseUsage.

---

##### `actionGetServiceSettings`<sup>Required</sup> <a name="actionGetServiceSettings" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.actionGetServiceSettings"></a>

```typescript
public readonly actionGetServiceSettings: string;
```

- *Type:* string

[List] license-manager:GetServiceSettings.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CheckInLicense`<sup>Required</sup> <a name="CheckInLicense" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CheckInLicense"></a>

```typescript
public readonly CheckInLicense: string;
```

- *Type:* string

[Write] license-manager:CheckInLicense.

---

##### `CheckoutBorrowLicense`<sup>Required</sup> <a name="CheckoutBorrowLicense" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CheckoutBorrowLicense"></a>

```typescript
public readonly CheckoutBorrowLicense: string;
```

- *Type:* string

[Write] license-manager:CheckoutBorrowLicense.

---

##### `CheckoutLicense`<sup>Required</sup> <a name="CheckoutLicense" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CheckoutLicense"></a>

```typescript
public readonly CheckoutLicense: string;
```

- *Type:* string

[Write] license-manager:CheckoutLicense.

---

##### `CreateGrant`<sup>Required</sup> <a name="CreateGrant" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateGrant"></a>

```typescript
public readonly CreateGrant: string;
```

- *Type:* string

[Write] license-manager:CreateGrant.

---

##### `CreateGrantVersion`<sup>Required</sup> <a name="CreateGrantVersion" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateGrantVersion"></a>

```typescript
public readonly CreateGrantVersion: string;
```

- *Type:* string

[Write] license-manager:CreateGrantVersion.

---

##### `CreateLicense`<sup>Required</sup> <a name="CreateLicense" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicense"></a>

```typescript
public readonly CreateLicense: string;
```

- *Type:* string

[Write] license-manager:CreateLicense.

---

##### `CreateLicenseAssetGroup`<sup>Required</sup> <a name="CreateLicenseAssetGroup" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseAssetGroup"></a>

```typescript
public readonly CreateLicenseAssetGroup: string;
```

- *Type:* string

[Write] license-manager:CreateLicenseAssetGroup.

---

##### `CreateLicenseAssetRuleset`<sup>Required</sup> <a name="CreateLicenseAssetRuleset" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseAssetRuleset"></a>

```typescript
public readonly CreateLicenseAssetRuleset: string;
```

- *Type:* string

[Write] license-manager:CreateLicenseAssetRuleset.

---

##### `CreateLicenseConfiguration`<sup>Required</sup> <a name="CreateLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseConfiguration"></a>

```typescript
public readonly CreateLicenseConfiguration: string;
```

- *Type:* string

[Write] license-manager:CreateLicenseConfiguration.

---

##### `CreateLicenseConversionTaskForResource`<sup>Required</sup> <a name="CreateLicenseConversionTaskForResource" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseConversionTaskForResource"></a>

```typescript
public readonly CreateLicenseConversionTaskForResource: string;
```

- *Type:* string

[Write] license-manager:CreateLicenseConversionTaskForResource.

---

##### `CreateLicenseManagerReportGenerator`<sup>Required</sup> <a name="CreateLicenseManagerReportGenerator" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseManagerReportGenerator"></a>

```typescript
public readonly CreateLicenseManagerReportGenerator: string;
```

- *Type:* string

[Write] license-manager:CreateLicenseManagerReportGenerator.

---

##### `CreateLicenseVersion`<sup>Required</sup> <a name="CreateLicenseVersion" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateLicenseVersion"></a>

```typescript
public readonly CreateLicenseVersion: string;
```

- *Type:* string

[Write] license-manager:CreateLicenseVersion.

---

##### `CreateToken`<sup>Required</sup> <a name="CreateToken" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.CreateToken"></a>

```typescript
public readonly CreateToken: string;
```

- *Type:* string

[Write] license-manager:CreateToken.

---

##### `DeleteGrant`<sup>Required</sup> <a name="DeleteGrant" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteGrant"></a>

```typescript
public readonly DeleteGrant: string;
```

- *Type:* string

[Write] license-manager:DeleteGrant.

---

##### `DeleteLicense`<sup>Required</sup> <a name="DeleteLicense" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteLicense"></a>

```typescript
public readonly DeleteLicense: string;
```

- *Type:* string

[Write] license-manager:DeleteLicense.

---

##### `DeleteLicenseAssetGroup`<sup>Required</sup> <a name="DeleteLicenseAssetGroup" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteLicenseAssetGroup"></a>

```typescript
public readonly DeleteLicenseAssetGroup: string;
```

- *Type:* string

[Write] license-manager:DeleteLicenseAssetGroup.

---

##### `DeleteLicenseAssetRuleset`<sup>Required</sup> <a name="DeleteLicenseAssetRuleset" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteLicenseAssetRuleset"></a>

```typescript
public readonly DeleteLicenseAssetRuleset: string;
```

- *Type:* string

[Write] license-manager:DeleteLicenseAssetRuleset.

---

##### `DeleteLicenseConfiguration`<sup>Required</sup> <a name="DeleteLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteLicenseConfiguration"></a>

```typescript
public readonly DeleteLicenseConfiguration: string;
```

- *Type:* string

[Write] license-manager:DeleteLicenseConfiguration.

---

##### `DeleteLicenseManagerReportGenerator`<sup>Required</sup> <a name="DeleteLicenseManagerReportGenerator" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteLicenseManagerReportGenerator"></a>

```typescript
public readonly DeleteLicenseManagerReportGenerator: string;
```

- *Type:* string

[Write] license-manager:DeleteLicenseManagerReportGenerator.

---

##### `DeleteToken`<sup>Required</sup> <a name="DeleteToken" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.DeleteToken"></a>

```typescript
public readonly DeleteToken: string;
```

- *Type:* string

[Write] license-manager:DeleteToken.

---

##### `ExtendLicenseConsumption`<sup>Required</sup> <a name="ExtendLicenseConsumption" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ExtendLicenseConsumption"></a>

```typescript
public readonly ExtendLicenseConsumption: string;
```

- *Type:* string

[Write] license-manager:ExtendLicenseConsumption.

---

##### `ListAssetsForLicenseAssetGroup`<sup>Required</sup> <a name="ListAssetsForLicenseAssetGroup" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListAssetsForLicenseAssetGroup"></a>

```typescript
public readonly ListAssetsForLicenseAssetGroup: string;
```

- *Type:* string

[List] license-manager:ListAssetsForLicenseAssetGroup.

---

##### `ListAssociationsForLicenseConfiguration`<sup>Required</sup> <a name="ListAssociationsForLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListAssociationsForLicenseConfiguration"></a>

```typescript
public readonly ListAssociationsForLicenseConfiguration: string;
```

- *Type:* string

[List] license-manager:ListAssociationsForLicenseConfiguration.

---

##### `ListDistributedGrants`<sup>Required</sup> <a name="ListDistributedGrants" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListDistributedGrants"></a>

```typescript
public readonly ListDistributedGrants: string;
```

- *Type:* string

[List] license-manager:ListDistributedGrants.

---

##### `ListFailuresForLicenseConfigurationOperations`<sup>Required</sup> <a name="ListFailuresForLicenseConfigurationOperations" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListFailuresForLicenseConfigurationOperations"></a>

```typescript
public readonly ListFailuresForLicenseConfigurationOperations: string;
```

- *Type:* string

[List] license-manager:ListFailuresForLicenseConfigurationOperations.

---

##### `ListLicenseAssetGroups`<sup>Required</sup> <a name="ListLicenseAssetGroups" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseAssetGroups"></a>

```typescript
public readonly ListLicenseAssetGroups: string;
```

- *Type:* string

[List] license-manager:ListLicenseAssetGroups.

---

##### `ListLicenseAssetRulesets`<sup>Required</sup> <a name="ListLicenseAssetRulesets" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseAssetRulesets"></a>

```typescript
public readonly ListLicenseAssetRulesets: string;
```

- *Type:* string

[List] license-manager:ListLicenseAssetRulesets.

---

##### `ListLicenseConfigurations`<sup>Required</sup> <a name="ListLicenseConfigurations" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseConfigurations"></a>

```typescript
public readonly ListLicenseConfigurations: string;
```

- *Type:* string

[List] license-manager:ListLicenseConfigurations.

---

##### `ListLicenseConfigurationsForOrganization`<sup>Required</sup> <a name="ListLicenseConfigurationsForOrganization" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseConfigurationsForOrganization"></a>

```typescript
public readonly ListLicenseConfigurationsForOrganization: string;
```

- *Type:* string

[List] license-manager:ListLicenseConfigurationsForOrganization.

---

##### `ListLicenseConversionTasks`<sup>Required</sup> <a name="ListLicenseConversionTasks" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseConversionTasks"></a>

```typescript
public readonly ListLicenseConversionTasks: string;
```

- *Type:* string

[List] license-manager:ListLicenseConversionTasks.

---

##### `ListLicenseManagerReportGenerators`<sup>Required</sup> <a name="ListLicenseManagerReportGenerators" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseManagerReportGenerators"></a>

```typescript
public readonly ListLicenseManagerReportGenerators: string;
```

- *Type:* string

[List] license-manager:ListLicenseManagerReportGenerators.

---

##### `ListLicenses`<sup>Required</sup> <a name="ListLicenses" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenses"></a>

```typescript
public readonly ListLicenses: string;
```

- *Type:* string

[Read] license-manager:ListLicenses.

---

##### `ListLicenseSpecificationsForResource`<sup>Required</sup> <a name="ListLicenseSpecificationsForResource" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseSpecificationsForResource"></a>

```typescript
public readonly ListLicenseSpecificationsForResource: string;
```

- *Type:* string

[List] license-manager:ListLicenseSpecificationsForResource.

---

##### `ListLicenseVersions`<sup>Required</sup> <a name="ListLicenseVersions" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListLicenseVersions"></a>

```typescript
public readonly ListLicenseVersions: string;
```

- *Type:* string

[List] license-manager:ListLicenseVersions.

---

##### `ListReceivedGrants`<sup>Required</sup> <a name="ListReceivedGrants" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListReceivedGrants"></a>

```typescript
public readonly ListReceivedGrants: string;
```

- *Type:* string

[List] license-manager:ListReceivedGrants.

---

##### `ListReceivedGrantsForOrganization`<sup>Required</sup> <a name="ListReceivedGrantsForOrganization" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListReceivedGrantsForOrganization"></a>

```typescript
public readonly ListReceivedGrantsForOrganization: string;
```

- *Type:* string

[List] license-manager:ListReceivedGrantsForOrganization.

---

##### `ListReceivedLicenses`<sup>Required</sup> <a name="ListReceivedLicenses" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListReceivedLicenses"></a>

```typescript
public readonly ListReceivedLicenses: string;
```

- *Type:* string

[List] license-manager:ListReceivedLicenses.

---

##### `ListReceivedLicensesForOrganization`<sup>Required</sup> <a name="ListReceivedLicensesForOrganization" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListReceivedLicensesForOrganization"></a>

```typescript
public readonly ListReceivedLicensesForOrganization: string;
```

- *Type:* string

[List] license-manager:ListReceivedLicensesForOrganization.

---

##### `ListResourceInventory`<sup>Required</sup> <a name="ListResourceInventory" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListResourceInventory"></a>

```typescript
public readonly ListResourceInventory: string;
```

- *Type:* string

[List] license-manager:ListResourceInventory.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] license-manager:ListTagsForResource.

---

##### `ListTokens`<sup>Required</sup> <a name="ListTokens" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListTokens"></a>

```typescript
public readonly ListTokens: string;
```

- *Type:* string

[List] license-manager:ListTokens.

---

##### `ListUsageForLicenseConfiguration`<sup>Required</sup> <a name="ListUsageForLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.ListUsageForLicenseConfiguration"></a>

```typescript
public readonly ListUsageForLicenseConfiguration: string;
```

- *Type:* string

[List] license-manager:ListUsageForLicenseConfiguration.

---

##### `RejectGrant`<sup>Required</sup> <a name="RejectGrant" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.RejectGrant"></a>

```typescript
public readonly RejectGrant: string;
```

- *Type:* string

[Write] license-manager:RejectGrant.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] license-manager:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] license-manager:UntagResource.

---

##### `UpdateLicenseAssetGroup`<sup>Required</sup> <a name="UpdateLicenseAssetGroup" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateLicenseAssetGroup"></a>

```typescript
public readonly UpdateLicenseAssetGroup: string;
```

- *Type:* string

[Write] license-manager:UpdateLicenseAssetGroup.

---

##### `UpdateLicenseAssetRuleset`<sup>Required</sup> <a name="UpdateLicenseAssetRuleset" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateLicenseAssetRuleset"></a>

```typescript
public readonly UpdateLicenseAssetRuleset: string;
```

- *Type:* string

[Write] license-manager:UpdateLicenseAssetRuleset.

---

##### `UpdateLicenseConfiguration`<sup>Required</sup> <a name="UpdateLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateLicenseConfiguration"></a>

```typescript
public readonly UpdateLicenseConfiguration: string;
```

- *Type:* string

[Write] license-manager:UpdateLicenseConfiguration.

---

##### `UpdateLicenseManagerReportGenerator`<sup>Required</sup> <a name="UpdateLicenseManagerReportGenerator" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateLicenseManagerReportGenerator"></a>

```typescript
public readonly UpdateLicenseManagerReportGenerator: string;
```

- *Type:* string

[Write] license-manager:UpdateLicenseManagerReportGenerator.

---

##### `UpdateLicenseSpecificationsForResource`<sup>Required</sup> <a name="UpdateLicenseSpecificationsForResource" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateLicenseSpecificationsForResource"></a>

```typescript
public readonly UpdateLicenseSpecificationsForResource: string;
```

- *Type:* string

[Write] license-manager:UpdateLicenseSpecificationsForResource.

---

##### `UpdateServiceSettings`<sup>Required</sup> <a name="UpdateServiceSettings" id="@cdk_utils/iam.license_manager.LicenseManagerActions.property.UpdateServiceSettings"></a>

```typescript
public readonly UpdateServiceSettings: string;
```

- *Type:* string

[PermissionManagement] license-manager:UpdateServiceSettings.

---

### LicenseManagerConditions <a name="LicenseManagerConditions" id="@cdk_utils/iam.license_manager.LicenseManagerConditions"></a>

Condition key constants and builders for license-manager.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

new license_manager.LicenseManagerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.requestTag"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.resourceTag"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.tagKeys"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateGrantConditionKeys">CreateGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGrant action. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateLicenseAssetGroupConditionKeys">CreateLicenseAssetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLicenseAssetGroup action. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateLicenseAssetRulesetConditionKeys">CreateLicenseAssetRulesetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLicenseAssetRuleset action. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateLicenseConditionKeys">CreateLicenseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLicense action. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateLicenseConfigurationConditionKeys">CreateLicenseConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLicenseConfiguration action. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateLicenseManagerReportGeneratorConditionKeys">CreateLicenseManagerReportGeneratorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLicenseManagerReportGenerator action. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: license-manager:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateGrantConditionKeys`<sup>Required</sup> <a name="CreateGrantConditionKeys" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateGrantConditionKeys"></a>

```typescript
public readonly CreateGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGrant action.

---

##### `CreateLicenseAssetGroupConditionKeys`<sup>Required</sup> <a name="CreateLicenseAssetGroupConditionKeys" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateLicenseAssetGroupConditionKeys"></a>

```typescript
public readonly CreateLicenseAssetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLicenseAssetGroup action.

---

##### `CreateLicenseAssetRulesetConditionKeys`<sup>Required</sup> <a name="CreateLicenseAssetRulesetConditionKeys" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateLicenseAssetRulesetConditionKeys"></a>

```typescript
public readonly CreateLicenseAssetRulesetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLicenseAssetRuleset action.

---

##### `CreateLicenseConditionKeys`<sup>Required</sup> <a name="CreateLicenseConditionKeys" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateLicenseConditionKeys"></a>

```typescript
public readonly CreateLicenseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLicense action.

---

##### `CreateLicenseConfigurationConditionKeys`<sup>Required</sup> <a name="CreateLicenseConfigurationConditionKeys" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateLicenseConfigurationConditionKeys"></a>

```typescript
public readonly CreateLicenseConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLicenseConfiguration action.

---

##### `CreateLicenseManagerReportGeneratorConditionKeys`<sup>Required</sup> <a name="CreateLicenseManagerReportGeneratorConditionKeys" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.CreateLicenseManagerReportGeneratorConditionKeys"></a>

```typescript
public readonly CreateLicenseManagerReportGeneratorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLicenseManagerReportGenerator action.

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: license-manager:ResourceTag/${TagKey} (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.license_manager.LicenseManagerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### LicenseManagerOperations <a name="LicenseManagerOperations" id="@cdk_utils/iam.license_manager.LicenseManagerOperations"></a>

API operation to required IAM actions mapping for license-manager.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

new license_manager.LicenseManagerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.AcceptGrant">AcceptGrant</a></code> | <code>string[]</code> | IAM actions required for the AcceptGrant API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CheckInLicense">CheckInLicense</a></code> | <code>string[]</code> | IAM actions required for the CheckInLicense API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CheckoutBorrowLicense">CheckoutBorrowLicense</a></code> | <code>string[]</code> | IAM actions required for the CheckoutBorrowLicense API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CheckoutLicense">CheckoutLicense</a></code> | <code>string[]</code> | IAM actions required for the CheckoutLicense API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateGrant">CreateGrant</a></code> | <code>string[]</code> | IAM actions required for the CreateGrant API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateGrantVersion">CreateGrantVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateGrantVersion API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicense">CreateLicense</a></code> | <code>string[]</code> | IAM actions required for the CreateLicense API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseAssetGroup">CreateLicenseAssetGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateLicenseAssetGroup API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseAssetRuleset">CreateLicenseAssetRuleset</a></code> | <code>string[]</code> | IAM actions required for the CreateLicenseAssetRuleset API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseConfiguration">CreateLicenseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateLicenseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseConversionTaskForResource">CreateLicenseConversionTaskForResource</a></code> | <code>string[]</code> | IAM actions required for the CreateLicenseConversionTaskForResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseManagerReportGenerator">CreateLicenseManagerReportGenerator</a></code> | <code>string[]</code> | IAM actions required for the CreateLicenseManagerReportGenerator API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseVersion">CreateLicenseVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateLicenseVersion API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateToken">CreateToken</a></code> | <code>string[]</code> | IAM actions required for the CreateToken API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteGrant">DeleteGrant</a></code> | <code>string[]</code> | IAM actions required for the DeleteGrant API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteLicense">DeleteLicense</a></code> | <code>string[]</code> | IAM actions required for the DeleteLicense API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteLicenseAssetGroup">DeleteLicenseAssetGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteLicenseAssetGroup API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteLicenseAssetRuleset">DeleteLicenseAssetRuleset</a></code> | <code>string[]</code> | IAM actions required for the DeleteLicenseAssetRuleset API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteLicenseConfiguration">DeleteLicenseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteLicenseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteLicenseManagerReportGenerator">DeleteLicenseManagerReportGenerator</a></code> | <code>string[]</code> | IAM actions required for the DeleteLicenseManagerReportGenerator API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteToken">DeleteToken</a></code> | <code>string[]</code> | IAM actions required for the DeleteToken API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ExtendLicenseConsumption">ExtendLicenseConsumption</a></code> | <code>string[]</code> | IAM actions required for the ExtendLicenseConsumption API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListAssetsForLicenseAssetGroup">ListAssetsForLicenseAssetGroup</a></code> | <code>string[]</code> | IAM actions required for the ListAssetsForLicenseAssetGroup API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListAssociationsForLicenseConfiguration">ListAssociationsForLicenseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ListAssociationsForLicenseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListDistributedGrants">ListDistributedGrants</a></code> | <code>string[]</code> | IAM actions required for the ListDistributedGrants API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListFailuresForLicenseConfigurationOperations">ListFailuresForLicenseConfigurationOperations</a></code> | <code>string[]</code> | IAM actions required for the ListFailuresForLicenseConfigurationOperations API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseAssetGroups">ListLicenseAssetGroups</a></code> | <code>string[]</code> | IAM actions required for the ListLicenseAssetGroups API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseAssetRulesets">ListLicenseAssetRulesets</a></code> | <code>string[]</code> | IAM actions required for the ListLicenseAssetRulesets API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseConfigurations">ListLicenseConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListLicenseConfigurations API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseConfigurationsForOrganization">ListLicenseConfigurationsForOrganization</a></code> | <code>string[]</code> | IAM actions required for the ListLicenseConfigurationsForOrganization API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseConversionTasks">ListLicenseConversionTasks</a></code> | <code>string[]</code> | IAM actions required for the ListLicenseConversionTasks API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseManagerReportGenerators">ListLicenseManagerReportGenerators</a></code> | <code>string[]</code> | IAM actions required for the ListLicenseManagerReportGenerators API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenses">ListLicenses</a></code> | <code>string[]</code> | IAM actions required for the ListLicenses API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseSpecificationsForResource">ListLicenseSpecificationsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListLicenseSpecificationsForResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseVersions">ListLicenseVersions</a></code> | <code>string[]</code> | IAM actions required for the ListLicenseVersions API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListReceivedGrants">ListReceivedGrants</a></code> | <code>string[]</code> | IAM actions required for the ListReceivedGrants API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListReceivedGrantsForOrganization">ListReceivedGrantsForOrganization</a></code> | <code>string[]</code> | IAM actions required for the ListReceivedGrantsForOrganization API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListReceivedLicenses">ListReceivedLicenses</a></code> | <code>string[]</code> | IAM actions required for the ListReceivedLicenses API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListReceivedLicensesForOrganization">ListReceivedLicensesForOrganization</a></code> | <code>string[]</code> | IAM actions required for the ListReceivedLicensesForOrganization API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListResourceInventory">ListResourceInventory</a></code> | <code>string[]</code> | IAM actions required for the ListResourceInventory API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListTokens">ListTokens</a></code> | <code>string[]</code> | IAM actions required for the ListTokens API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListUsageForLicenseConfiguration">ListUsageForLicenseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ListUsageForLicenseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetAccessToken">opGetAccessToken</a></code> | <code>string[]</code> | IAM actions required for the GetAccessToken API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetGrant">opGetGrant</a></code> | <code>string[]</code> | IAM actions required for the GetGrant API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicense">opGetLicense</a></code> | <code>string[]</code> | IAM actions required for the GetLicense API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseAssetGroup">opGetLicenseAssetGroup</a></code> | <code>string[]</code> | IAM actions required for the GetLicenseAssetGroup API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseAssetRuleset">opGetLicenseAssetRuleset</a></code> | <code>string[]</code> | IAM actions required for the GetLicenseAssetRuleset API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseConfiguration">opGetLicenseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetLicenseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseConversionTask">opGetLicenseConversionTask</a></code> | <code>string[]</code> | IAM actions required for the GetLicenseConversionTask API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseManagerReportGenerator">opGetLicenseManagerReportGenerator</a></code> | <code>string[]</code> | IAM actions required for the GetLicenseManagerReportGenerator API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseUsage">opGetLicenseUsage</a></code> | <code>string[]</code> | IAM actions required for the GetLicenseUsage API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetServiceSettings">opGetServiceSettings</a></code> | <code>string[]</code> | IAM actions required for the GetServiceSettings API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.RejectGrant">RejectGrant</a></code> | <code>string[]</code> | IAM actions required for the RejectGrant API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateLicenseAssetGroup">UpdateLicenseAssetGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateLicenseAssetGroup API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateLicenseAssetRuleset">UpdateLicenseAssetRuleset</a></code> | <code>string[]</code> | IAM actions required for the UpdateLicenseAssetRuleset API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateLicenseConfiguration">UpdateLicenseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateLicenseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateLicenseManagerReportGenerator">UpdateLicenseManagerReportGenerator</a></code> | <code>string[]</code> | IAM actions required for the UpdateLicenseManagerReportGenerator API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateLicenseSpecificationsForResource">UpdateLicenseSpecificationsForResource</a></code> | <code>string[]</code> | IAM actions required for the UpdateLicenseSpecificationsForResource API call. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateServiceSettings">UpdateServiceSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceSettings API call. |

---

##### `AcceptGrant`<sup>Required</sup> <a name="AcceptGrant" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.AcceptGrant"></a>

```typescript
public readonly AcceptGrant: string[];
```

- *Type:* string[]

IAM actions required for the AcceptGrant API call.

---

##### `CheckInLicense`<sup>Required</sup> <a name="CheckInLicense" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CheckInLicense"></a>

```typescript
public readonly CheckInLicense: string[];
```

- *Type:* string[]

IAM actions required for the CheckInLicense API call.

---

##### `CheckoutBorrowLicense`<sup>Required</sup> <a name="CheckoutBorrowLicense" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CheckoutBorrowLicense"></a>

```typescript
public readonly CheckoutBorrowLicense: string[];
```

- *Type:* string[]

IAM actions required for the CheckoutBorrowLicense API call.

---

##### `CheckoutLicense`<sup>Required</sup> <a name="CheckoutLicense" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CheckoutLicense"></a>

```typescript
public readonly CheckoutLicense: string[];
```

- *Type:* string[]

IAM actions required for the CheckoutLicense API call.

---

##### `CreateGrant`<sup>Required</sup> <a name="CreateGrant" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateGrant"></a>

```typescript
public readonly CreateGrant: string[];
```

- *Type:* string[]

IAM actions required for the CreateGrant API call.

---

##### `CreateGrantVersion`<sup>Required</sup> <a name="CreateGrantVersion" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateGrantVersion"></a>

```typescript
public readonly CreateGrantVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateGrantVersion API call.

---

##### `CreateLicense`<sup>Required</sup> <a name="CreateLicense" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicense"></a>

```typescript
public readonly CreateLicense: string[];
```

- *Type:* string[]

IAM actions required for the CreateLicense API call.

---

##### `CreateLicenseAssetGroup`<sup>Required</sup> <a name="CreateLicenseAssetGroup" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseAssetGroup"></a>

```typescript
public readonly CreateLicenseAssetGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateLicenseAssetGroup API call.

---

##### `CreateLicenseAssetRuleset`<sup>Required</sup> <a name="CreateLicenseAssetRuleset" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseAssetRuleset"></a>

```typescript
public readonly CreateLicenseAssetRuleset: string[];
```

- *Type:* string[]

IAM actions required for the CreateLicenseAssetRuleset API call.

---

##### `CreateLicenseConfiguration`<sup>Required</sup> <a name="CreateLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseConfiguration"></a>

```typescript
public readonly CreateLicenseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateLicenseConfiguration API call.

---

##### `CreateLicenseConversionTaskForResource`<sup>Required</sup> <a name="CreateLicenseConversionTaskForResource" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseConversionTaskForResource"></a>

```typescript
public readonly CreateLicenseConversionTaskForResource: string[];
```

- *Type:* string[]

IAM actions required for the CreateLicenseConversionTaskForResource API call.

---

##### `CreateLicenseManagerReportGenerator`<sup>Required</sup> <a name="CreateLicenseManagerReportGenerator" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseManagerReportGenerator"></a>

```typescript
public readonly CreateLicenseManagerReportGenerator: string[];
```

- *Type:* string[]

IAM actions required for the CreateLicenseManagerReportGenerator API call.

---

##### `CreateLicenseVersion`<sup>Required</sup> <a name="CreateLicenseVersion" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateLicenseVersion"></a>

```typescript
public readonly CreateLicenseVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateLicenseVersion API call.

---

##### `CreateToken`<sup>Required</sup> <a name="CreateToken" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.CreateToken"></a>

```typescript
public readonly CreateToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateToken API call.

---

##### `DeleteGrant`<sup>Required</sup> <a name="DeleteGrant" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteGrant"></a>

```typescript
public readonly DeleteGrant: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGrant API call.

---

##### `DeleteLicense`<sup>Required</sup> <a name="DeleteLicense" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteLicense"></a>

```typescript
public readonly DeleteLicense: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLicense API call.

---

##### `DeleteLicenseAssetGroup`<sup>Required</sup> <a name="DeleteLicenseAssetGroup" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteLicenseAssetGroup"></a>

```typescript
public readonly DeleteLicenseAssetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLicenseAssetGroup API call.

---

##### `DeleteLicenseAssetRuleset`<sup>Required</sup> <a name="DeleteLicenseAssetRuleset" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteLicenseAssetRuleset"></a>

```typescript
public readonly DeleteLicenseAssetRuleset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLicenseAssetRuleset API call.

---

##### `DeleteLicenseConfiguration`<sup>Required</sup> <a name="DeleteLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteLicenseConfiguration"></a>

```typescript
public readonly DeleteLicenseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLicenseConfiguration API call.

---

##### `DeleteLicenseManagerReportGenerator`<sup>Required</sup> <a name="DeleteLicenseManagerReportGenerator" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteLicenseManagerReportGenerator"></a>

```typescript
public readonly DeleteLicenseManagerReportGenerator: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLicenseManagerReportGenerator API call.

---

##### `DeleteToken`<sup>Required</sup> <a name="DeleteToken" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.DeleteToken"></a>

```typescript
public readonly DeleteToken: string[];
```

- *Type:* string[]

IAM actions required for the DeleteToken API call.

---

##### `ExtendLicenseConsumption`<sup>Required</sup> <a name="ExtendLicenseConsumption" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ExtendLicenseConsumption"></a>

```typescript
public readonly ExtendLicenseConsumption: string[];
```

- *Type:* string[]

IAM actions required for the ExtendLicenseConsumption API call.

---

##### `ListAssetsForLicenseAssetGroup`<sup>Required</sup> <a name="ListAssetsForLicenseAssetGroup" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListAssetsForLicenseAssetGroup"></a>

```typescript
public readonly ListAssetsForLicenseAssetGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetsForLicenseAssetGroup API call.

---

##### `ListAssociationsForLicenseConfiguration`<sup>Required</sup> <a name="ListAssociationsForLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListAssociationsForLicenseConfiguration"></a>

```typescript
public readonly ListAssociationsForLicenseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociationsForLicenseConfiguration API call.

---

##### `ListDistributedGrants`<sup>Required</sup> <a name="ListDistributedGrants" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListDistributedGrants"></a>

```typescript
public readonly ListDistributedGrants: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributedGrants API call.

---

##### `ListFailuresForLicenseConfigurationOperations`<sup>Required</sup> <a name="ListFailuresForLicenseConfigurationOperations" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListFailuresForLicenseConfigurationOperations"></a>

```typescript
public readonly ListFailuresForLicenseConfigurationOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListFailuresForLicenseConfigurationOperations API call.

---

##### `ListLicenseAssetGroups`<sup>Required</sup> <a name="ListLicenseAssetGroups" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseAssetGroups"></a>

```typescript
public readonly ListLicenseAssetGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListLicenseAssetGroups API call.

---

##### `ListLicenseAssetRulesets`<sup>Required</sup> <a name="ListLicenseAssetRulesets" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseAssetRulesets"></a>

```typescript
public readonly ListLicenseAssetRulesets: string[];
```

- *Type:* string[]

IAM actions required for the ListLicenseAssetRulesets API call.

---

##### `ListLicenseConfigurations`<sup>Required</sup> <a name="ListLicenseConfigurations" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseConfigurations"></a>

```typescript
public readonly ListLicenseConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListLicenseConfigurations API call.

---

##### `ListLicenseConfigurationsForOrganization`<sup>Required</sup> <a name="ListLicenseConfigurationsForOrganization" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseConfigurationsForOrganization"></a>

```typescript
public readonly ListLicenseConfigurationsForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the ListLicenseConfigurationsForOrganization API call.

---

##### `ListLicenseConversionTasks`<sup>Required</sup> <a name="ListLicenseConversionTasks" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseConversionTasks"></a>

```typescript
public readonly ListLicenseConversionTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListLicenseConversionTasks API call.

---

##### `ListLicenseManagerReportGenerators`<sup>Required</sup> <a name="ListLicenseManagerReportGenerators" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseManagerReportGenerators"></a>

```typescript
public readonly ListLicenseManagerReportGenerators: string[];
```

- *Type:* string[]

IAM actions required for the ListLicenseManagerReportGenerators API call.

---

##### `ListLicenses`<sup>Required</sup> <a name="ListLicenses" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenses"></a>

```typescript
public readonly ListLicenses: string[];
```

- *Type:* string[]

IAM actions required for the ListLicenses API call.

---

##### `ListLicenseSpecificationsForResource`<sup>Required</sup> <a name="ListLicenseSpecificationsForResource" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseSpecificationsForResource"></a>

```typescript
public readonly ListLicenseSpecificationsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListLicenseSpecificationsForResource API call.

---

##### `ListLicenseVersions`<sup>Required</sup> <a name="ListLicenseVersions" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListLicenseVersions"></a>

```typescript
public readonly ListLicenseVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListLicenseVersions API call.

---

##### `ListReceivedGrants`<sup>Required</sup> <a name="ListReceivedGrants" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListReceivedGrants"></a>

```typescript
public readonly ListReceivedGrants: string[];
```

- *Type:* string[]

IAM actions required for the ListReceivedGrants API call.

---

##### `ListReceivedGrantsForOrganization`<sup>Required</sup> <a name="ListReceivedGrantsForOrganization" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListReceivedGrantsForOrganization"></a>

```typescript
public readonly ListReceivedGrantsForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the ListReceivedGrantsForOrganization API call.

---

##### `ListReceivedLicenses`<sup>Required</sup> <a name="ListReceivedLicenses" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListReceivedLicenses"></a>

```typescript
public readonly ListReceivedLicenses: string[];
```

- *Type:* string[]

IAM actions required for the ListReceivedLicenses API call.

---

##### `ListReceivedLicensesForOrganization`<sup>Required</sup> <a name="ListReceivedLicensesForOrganization" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListReceivedLicensesForOrganization"></a>

```typescript
public readonly ListReceivedLicensesForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the ListReceivedLicensesForOrganization API call.

---

##### `ListResourceInventory`<sup>Required</sup> <a name="ListResourceInventory" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListResourceInventory"></a>

```typescript
public readonly ListResourceInventory: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceInventory API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTokens`<sup>Required</sup> <a name="ListTokens" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListTokens"></a>

```typescript
public readonly ListTokens: string[];
```

- *Type:* string[]

IAM actions required for the ListTokens API call.

---

##### `ListUsageForLicenseConfiguration`<sup>Required</sup> <a name="ListUsageForLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.ListUsageForLicenseConfiguration"></a>

```typescript
public readonly ListUsageForLicenseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ListUsageForLicenseConfiguration API call.

---

##### `opGetAccessToken`<sup>Required</sup> <a name="opGetAccessToken" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetAccessToken"></a>

```typescript
public readonly opGetAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessToken API call.

---

##### `opGetGrant`<sup>Required</sup> <a name="opGetGrant" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetGrant"></a>

```typescript
public readonly opGetGrant: string[];
```

- *Type:* string[]

IAM actions required for the GetGrant API call.

---

##### `opGetLicense`<sup>Required</sup> <a name="opGetLicense" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicense"></a>

```typescript
public readonly opGetLicense: string[];
```

- *Type:* string[]

IAM actions required for the GetLicense API call.

---

##### `opGetLicenseAssetGroup`<sup>Required</sup> <a name="opGetLicenseAssetGroup" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseAssetGroup"></a>

```typescript
public readonly opGetLicenseAssetGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetLicenseAssetGroup API call.

---

##### `opGetLicenseAssetRuleset`<sup>Required</sup> <a name="opGetLicenseAssetRuleset" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseAssetRuleset"></a>

```typescript
public readonly opGetLicenseAssetRuleset: string[];
```

- *Type:* string[]

IAM actions required for the GetLicenseAssetRuleset API call.

---

##### `opGetLicenseConfiguration`<sup>Required</sup> <a name="opGetLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseConfiguration"></a>

```typescript
public readonly opGetLicenseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetLicenseConfiguration API call.

---

##### `opGetLicenseConversionTask`<sup>Required</sup> <a name="opGetLicenseConversionTask" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseConversionTask"></a>

```typescript
public readonly opGetLicenseConversionTask: string[];
```

- *Type:* string[]

IAM actions required for the GetLicenseConversionTask API call.

---

##### `opGetLicenseManagerReportGenerator`<sup>Required</sup> <a name="opGetLicenseManagerReportGenerator" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseManagerReportGenerator"></a>

```typescript
public readonly opGetLicenseManagerReportGenerator: string[];
```

- *Type:* string[]

IAM actions required for the GetLicenseManagerReportGenerator API call.

---

##### `opGetLicenseUsage`<sup>Required</sup> <a name="opGetLicenseUsage" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetLicenseUsage"></a>

```typescript
public readonly opGetLicenseUsage: string[];
```

- *Type:* string[]

IAM actions required for the GetLicenseUsage API call.

---

##### `opGetServiceSettings`<sup>Required</sup> <a name="opGetServiceSettings" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.opGetServiceSettings"></a>

```typescript
public readonly opGetServiceSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceSettings API call.

---

##### `RejectGrant`<sup>Required</sup> <a name="RejectGrant" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.RejectGrant"></a>

```typescript
public readonly RejectGrant: string[];
```

- *Type:* string[]

IAM actions required for the RejectGrant API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateLicenseAssetGroup`<sup>Required</sup> <a name="UpdateLicenseAssetGroup" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateLicenseAssetGroup"></a>

```typescript
public readonly UpdateLicenseAssetGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLicenseAssetGroup API call.

---

##### `UpdateLicenseAssetRuleset`<sup>Required</sup> <a name="UpdateLicenseAssetRuleset" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateLicenseAssetRuleset"></a>

```typescript
public readonly UpdateLicenseAssetRuleset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLicenseAssetRuleset API call.

---

##### `UpdateLicenseConfiguration`<sup>Required</sup> <a name="UpdateLicenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateLicenseConfiguration"></a>

```typescript
public readonly UpdateLicenseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLicenseConfiguration API call.

---

##### `UpdateLicenseManagerReportGenerator`<sup>Required</sup> <a name="UpdateLicenseManagerReportGenerator" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateLicenseManagerReportGenerator"></a>

```typescript
public readonly UpdateLicenseManagerReportGenerator: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLicenseManagerReportGenerator API call.

---

##### `UpdateLicenseSpecificationsForResource`<sup>Required</sup> <a name="UpdateLicenseSpecificationsForResource" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateLicenseSpecificationsForResource"></a>

```typescript
public readonly UpdateLicenseSpecificationsForResource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLicenseSpecificationsForResource API call.

---

##### `UpdateServiceSettings`<sup>Required</sup> <a name="UpdateServiceSettings" id="@cdk_utils/iam.license_manager.LicenseManagerOperations.property.UpdateServiceSettings"></a>

```typescript
public readonly UpdateServiceSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceSettings API call.

---

### LicenseManagerResources <a name="LicenseManagerResources" id="@cdk_utils/iam.license_manager.LicenseManagerResources"></a>

ARN builders, validators, and parsers for license-manager resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.license_manager.LicenseManagerResources.Initializer"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

new license_manager.LicenseManagerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.grant">grant</a></code> | Builds an ARN for the grant resource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.isValidGrantArn">isValidGrantArn</a></code> | Validates whether a string is a valid ARN for the grant resource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseArn">isValidLicenseArn</a></code> | Validates whether a string is a valid ARN for the license resource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseAssetGroupArn">isValidLicenseAssetGroupArn</a></code> | Validates whether a string is a valid ARN for the license-asset-group resource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseAssetRulesetArn">isValidLicenseAssetRulesetArn</a></code> | Validates whether a string is a valid ARN for the license-asset-ruleset resource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseConfigurationArn">isValidLicenseConfigurationArn</a></code> | Validates whether a string is a valid ARN for the license-configuration resource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.isValidReportGeneratorArn">isValidReportGeneratorArn</a></code> | Validates whether a string is a valid ARN for the report-generator resource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.license">license</a></code> | Builds an ARN for the license resource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.licenseAssetGroup">licenseAssetGroup</a></code> | Builds an ARN for the license-asset-group resource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.licenseAssetRuleset">licenseAssetRuleset</a></code> | Builds an ARN for the license-asset-ruleset resource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.licenseConfiguration">licenseConfiguration</a></code> | Builds an ARN for the license-configuration resource. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.parseGrantArn">parseGrantArn</a></code> | Parses a grant ARN into its components. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseArn">parseLicenseArn</a></code> | Parses a license ARN into its components. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseAssetGroupArn">parseLicenseAssetGroupArn</a></code> | Parses a license-asset-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseAssetRulesetArn">parseLicenseAssetRulesetArn</a></code> | Parses a license-asset-ruleset ARN into its components. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseConfigurationArn">parseLicenseConfigurationArn</a></code> | Parses a license-configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.parseReportGeneratorArn">parseReportGeneratorArn</a></code> | Parses a report-generator ARN into its components. |
| <code><a href="#@cdk_utils/iam.license_manager.LicenseManagerResources.reportGenerator">reportGenerator</a></code> | Builds an ARN for the report-generator resource. |

---

##### `grant` <a name="grant" id="@cdk_utils/iam.license_manager.LicenseManagerResources.grant"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.grant(props: LicenseManagerGrantArnProps)
```

Builds an ARN for the grant resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.license_manager.LicenseManagerResources.grant.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.license_manager.LicenseManagerGrantArnProps">LicenseManagerGrantArnProps</a>

---

##### `isValidGrantArn` <a name="isValidGrantArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidGrantArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.isValidGrantArn(arn: string)
```

Validates whether a string is a valid ARN for the grant resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidGrantArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLicenseArn` <a name="isValidLicenseArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.isValidLicenseArn(arn: string)
```

Validates whether a string is a valid ARN for the license resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLicenseAssetGroupArn` <a name="isValidLicenseAssetGroupArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseAssetGroupArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.isValidLicenseAssetGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the license-asset-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseAssetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLicenseAssetRulesetArn` <a name="isValidLicenseAssetRulesetArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseAssetRulesetArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.isValidLicenseAssetRulesetArn(arn: string)
```

Validates whether a string is a valid ARN for the license-asset-ruleset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseAssetRulesetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLicenseConfigurationArn` <a name="isValidLicenseConfigurationArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseConfigurationArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.isValidLicenseConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the license-configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidLicenseConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReportGeneratorArn` <a name="isValidReportGeneratorArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidReportGeneratorArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.isValidReportGeneratorArn(arn: string)
```

Validates whether a string is a valid ARN for the report-generator resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.isValidReportGeneratorArn.parameter.arn"></a>

- *Type:* string

---

##### `license` <a name="license" id="@cdk_utils/iam.license_manager.LicenseManagerResources.license"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.license(props: LicenseManagerLicenseArnProps)
```

Builds an ARN for the license resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.license_manager.LicenseManagerResources.license.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseArnProps">LicenseManagerLicenseArnProps</a>

---

##### `licenseAssetGroup` <a name="licenseAssetGroup" id="@cdk_utils/iam.license_manager.LicenseManagerResources.licenseAssetGroup"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.licenseAssetGroup(props: LicenseManagerLicenseAssetGroupArnProps)
```

Builds an ARN for the license-asset-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.license_manager.LicenseManagerResources.licenseAssetGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetGroupArnProps">LicenseManagerLicenseAssetGroupArnProps</a>

---

##### `licenseAssetRuleset` <a name="licenseAssetRuleset" id="@cdk_utils/iam.license_manager.LicenseManagerResources.licenseAssetRuleset"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.licenseAssetRuleset(props: LicenseManagerLicenseAssetRulesetArnProps)
```

Builds an ARN for the license-asset-ruleset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.license_manager.LicenseManagerResources.licenseAssetRuleset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseAssetRulesetArnProps">LicenseManagerLicenseAssetRulesetArnProps</a>

---

##### `licenseConfiguration` <a name="licenseConfiguration" id="@cdk_utils/iam.license_manager.LicenseManagerResources.licenseConfiguration"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.licenseConfiguration(props: LicenseManagerLicenseConfigurationArnProps)
```

Builds an ARN for the license-configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.license_manager.LicenseManagerResources.licenseConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.license_manager.LicenseManagerLicenseConfigurationArnProps">LicenseManagerLicenseConfigurationArnProps</a>

---

##### `parseGrantArn` <a name="parseGrantArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseGrantArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.parseGrantArn(arn: string)
```

Parses a grant ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseGrantArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLicenseArn` <a name="parseLicenseArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.parseLicenseArn(arn: string)
```

Parses a license ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLicenseAssetGroupArn` <a name="parseLicenseAssetGroupArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseAssetGroupArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.parseLicenseAssetGroupArn(arn: string)
```

Parses a license-asset-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseAssetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLicenseAssetRulesetArn` <a name="parseLicenseAssetRulesetArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseAssetRulesetArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.parseLicenseAssetRulesetArn(arn: string)
```

Parses a license-asset-ruleset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseAssetRulesetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLicenseConfigurationArn` <a name="parseLicenseConfigurationArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseConfigurationArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.parseLicenseConfigurationArn(arn: string)
```

Parses a license-configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseLicenseConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReportGeneratorArn` <a name="parseReportGeneratorArn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseReportGeneratorArn"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.parseReportGeneratorArn(arn: string)
```

Parses a report-generator ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.license_manager.LicenseManagerResources.parseReportGeneratorArn.parameter.arn"></a>

- *Type:* string

---

##### `reportGenerator` <a name="reportGenerator" id="@cdk_utils/iam.license_manager.LicenseManagerResources.reportGenerator"></a>

```typescript
import { license_manager } from '@cdk_utils/iam'

license_manager.LicenseManagerResources.reportGenerator(props: LicenseManagerReportGeneratorArnProps)
```

Builds an ARN for the report-generator resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.license_manager.LicenseManagerResources.reportGenerator.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.license_manager.LicenseManagerReportGeneratorArnProps">LicenseManagerReportGeneratorArnProps</a>

---




