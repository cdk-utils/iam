# `observabilityadmin` Submodule <a name="`observabilityadmin` Submodule" id="@cdk_utils/iam.observabilityadmin"></a>


## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminOrganizationCentralizationRuleArnComponents <a name="ObservabilityadminOrganizationCentralizationRuleArnComponents" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnComponents"></a>

Parsed components of a organization-centralization-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnComponents.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

const observabilityadminOrganizationCentralizationRuleArnComponents: observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnComponents.property.centralizationRuleName">centralizationRuleName</a></code> | <code>string</code> | The CentralizationRuleName component. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `centralizationRuleName`<sup>Required</sup> <a name="centralizationRuleName" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnComponents.property.centralizationRuleName"></a>

```typescript
public readonly centralizationRuleName: string;
```

- *Type:* string

The CentralizationRuleName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ObservabilityadminOrganizationCentralizationRuleArnProps <a name="ObservabilityadminOrganizationCentralizationRuleArnProps" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps"></a>

Properties for building a organization-centralization-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

const observabilityadminOrganizationCentralizationRuleArnProps: observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps.property.centralizationRuleName">centralizationRuleName</a></code> | <code>string</code> | The CentralizationRuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `centralizationRuleName`<sup>Required</sup> <a name="centralizationRuleName" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps.property.centralizationRuleName"></a>

```typescript
public readonly centralizationRuleName: string;
```

- *Type:* string

The CentralizationRuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ObservabilityadminOrganizationTelemetryRuleArnComponents <a name="ObservabilityadminOrganizationTelemetryRuleArnComponents" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnComponents"></a>

Parsed components of a organization-telemetry-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnComponents.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

const observabilityadminOrganizationTelemetryRuleArnComponents: observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnComponents.property.telemetryRuleName">telemetryRuleName</a></code> | <code>string</code> | The TelemetryRuleName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `telemetryRuleName`<sup>Required</sup> <a name="telemetryRuleName" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnComponents.property.telemetryRuleName"></a>

```typescript
public readonly telemetryRuleName: string;
```

- *Type:* string

The TelemetryRuleName component.

---

### ObservabilityadminOrganizationTelemetryRuleArnProps <a name="ObservabilityadminOrganizationTelemetryRuleArnProps" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps"></a>

Properties for building a organization-telemetry-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

const observabilityadminOrganizationTelemetryRuleArnProps: observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps.property.telemetryRuleName">telemetryRuleName</a></code> | <code>string</code> | The TelemetryRuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `telemetryRuleName`<sup>Required</sup> <a name="telemetryRuleName" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps.property.telemetryRuleName"></a>

```typescript
public readonly telemetryRuleName: string;
```

- *Type:* string

The TelemetryRuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ObservabilityadminS3tableintegrationArnComponents <a name="ObservabilityadminS3tableintegrationArnComponents" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnComponents"></a>

Parsed components of a s3tableintegration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnComponents.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

const observabilityadminS3tableintegrationArnComponents: observabilityadmin.ObservabilityadminS3tableintegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnComponents.property.s3TableIntegrationIdentifier">s3TableIntegrationIdentifier</a></code> | <code>string</code> | The S3TableIntegrationIdentifier component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `s3TableIntegrationIdentifier`<sup>Required</sup> <a name="s3TableIntegrationIdentifier" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnComponents.property.s3TableIntegrationIdentifier"></a>

```typescript
public readonly s3TableIntegrationIdentifier: string;
```

- *Type:* string

The S3TableIntegrationIdentifier component.

---

### ObservabilityadminS3tableintegrationArnProps <a name="ObservabilityadminS3tableintegrationArnProps" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnProps"></a>

Properties for building a s3tableintegration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnProps.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

const observabilityadminS3tableintegrationArnProps: observabilityadmin.ObservabilityadminS3tableintegrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnProps.property.s3TableIntegrationIdentifier">s3TableIntegrationIdentifier</a></code> | <code>string</code> | The S3TableIntegrationIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `s3TableIntegrationIdentifier`<sup>Required</sup> <a name="s3TableIntegrationIdentifier" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnProps.property.s3TableIntegrationIdentifier"></a>

```typescript
public readonly s3TableIntegrationIdentifier: string;
```

- *Type:* string

The S3TableIntegrationIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ObservabilityadminTelemetryPipelineArnComponents <a name="ObservabilityadminTelemetryPipelineArnComponents" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnComponents"></a>

Parsed components of a telemetry-pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnComponents.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

const observabilityadminTelemetryPipelineArnComponents: observabilityadmin.ObservabilityadminTelemetryPipelineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnComponents.property.telemetryPipelineIdentifier">telemetryPipelineIdentifier</a></code> | <code>string</code> | The TelemetryPipelineIdentifier component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `telemetryPipelineIdentifier`<sup>Required</sup> <a name="telemetryPipelineIdentifier" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnComponents.property.telemetryPipelineIdentifier"></a>

```typescript
public readonly telemetryPipelineIdentifier: string;
```

- *Type:* string

The TelemetryPipelineIdentifier component.

---

### ObservabilityadminTelemetryPipelineArnProps <a name="ObservabilityadminTelemetryPipelineArnProps" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnProps"></a>

Properties for building a telemetry-pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnProps.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

const observabilityadminTelemetryPipelineArnProps: observabilityadmin.ObservabilityadminTelemetryPipelineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnProps.property.telemetryPipelineIdentifier">telemetryPipelineIdentifier</a></code> | <code>string</code> | The TelemetryPipelineIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `telemetryPipelineIdentifier`<sup>Required</sup> <a name="telemetryPipelineIdentifier" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnProps.property.telemetryPipelineIdentifier"></a>

```typescript
public readonly telemetryPipelineIdentifier: string;
```

- *Type:* string

The TelemetryPipelineIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ObservabilityadminTelemetryRuleArnComponents <a name="ObservabilityadminTelemetryRuleArnComponents" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnComponents"></a>

Parsed components of a telemetry-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnComponents.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

const observabilityadminTelemetryRuleArnComponents: observabilityadmin.ObservabilityadminTelemetryRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnComponents.property.telemetryRuleName">telemetryRuleName</a></code> | <code>string</code> | The TelemetryRuleName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `telemetryRuleName`<sup>Required</sup> <a name="telemetryRuleName" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnComponents.property.telemetryRuleName"></a>

```typescript
public readonly telemetryRuleName: string;
```

- *Type:* string

The TelemetryRuleName component.

---

### ObservabilityadminTelemetryRuleArnProps <a name="ObservabilityadminTelemetryRuleArnProps" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnProps"></a>

Properties for building a telemetry-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnProps.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

const observabilityadminTelemetryRuleArnProps: observabilityadmin.ObservabilityadminTelemetryRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnProps.property.telemetryRuleName">telemetryRuleName</a></code> | <code>string</code> | The TelemetryRuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `telemetryRuleName`<sup>Required</sup> <a name="telemetryRuleName" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnProps.property.telemetryRuleName"></a>

```typescript
public readonly telemetryRuleName: string;
```

- *Type:* string

The TelemetryRuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminActions <a name="ObservabilityadminActions" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions"></a>

IAM action constants for the observabilityadmin service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

new observabilityadmin.ObservabilityadminActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetCentralizationRuleForOrganization">actionGetCentralizationRuleForOrganization</a></code> | <code>string</code> | [Read] observabilityadmin:GetCentralizationRuleForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetS3TableIntegration">actionGetS3TableIntegration</a></code> | <code>string</code> | [Read] observabilityadmin:GetS3TableIntegration. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryEnrichmentStatus">actionGetTelemetryEnrichmentStatus</a></code> | <code>string</code> | [Read] observabilityadmin:GetTelemetryEnrichmentStatus. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryEvaluationStatus">actionGetTelemetryEvaluationStatus</a></code> | <code>string</code> | [Read] observabilityadmin:GetTelemetryEvaluationStatus. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryEvaluationStatusForOrganization">actionGetTelemetryEvaluationStatusForOrganization</a></code> | <code>string</code> | [Read] observabilityadmin:GetTelemetryEvaluationStatusForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryPipeline">actionGetTelemetryPipeline</a></code> | <code>string</code> | [Read] observabilityadmin:GetTelemetryPipeline. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryRule">actionGetTelemetryRule</a></code> | <code>string</code> | [Read] observabilityadmin:GetTelemetryRule. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryRuleForOrganization">actionGetTelemetryRuleForOrganization</a></code> | <code>string</code> | [Read] observabilityadmin:GetTelemetryRuleForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.CreateCentralizationRuleForOrganization">CreateCentralizationRuleForOrganization</a></code> | <code>string</code> | [Write] observabilityadmin:CreateCentralizationRuleForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.CreateS3TableIntegration">CreateS3TableIntegration</a></code> | <code>string</code> | [Write] observabilityadmin:CreateS3TableIntegration. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.CreateTelemetryPipeline">CreateTelemetryPipeline</a></code> | <code>string</code> | [Write] observabilityadmin:CreateTelemetryPipeline. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.CreateTelemetryRule">CreateTelemetryRule</a></code> | <code>string</code> | [Write] observabilityadmin:CreateTelemetryRule. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.CreateTelemetryRuleForOrganization">CreateTelemetryRuleForOrganization</a></code> | <code>string</code> | [Write] observabilityadmin:CreateTelemetryRuleForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.DeleteCentralizationRuleForOrganization">DeleteCentralizationRuleForOrganization</a></code> | <code>string</code> | [Write] observabilityadmin:DeleteCentralizationRuleForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.DeleteS3TableIntegration">DeleteS3TableIntegration</a></code> | <code>string</code> | [Write] observabilityadmin:DeleteS3TableIntegration. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.DeleteTelemetryPipeline">DeleteTelemetryPipeline</a></code> | <code>string</code> | [Write] observabilityadmin:DeleteTelemetryPipeline. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.DeleteTelemetryRule">DeleteTelemetryRule</a></code> | <code>string</code> | [Write] observabilityadmin:DeleteTelemetryRule. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.DeleteTelemetryRuleForOrganization">DeleteTelemetryRuleForOrganization</a></code> | <code>string</code> | [Write] observabilityadmin:DeleteTelemetryRuleForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListCentralizationRulesForOrganization">ListCentralizationRulesForOrganization</a></code> | <code>string</code> | [List] observabilityadmin:ListCentralizationRulesForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListResourceTelemetry">ListResourceTelemetry</a></code> | <code>string</code> | [Read] observabilityadmin:ListResourceTelemetry. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListResourceTelemetryForOrganization">ListResourceTelemetryForOrganization</a></code> | <code>string</code> | [Read] observabilityadmin:ListResourceTelemetryForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListS3TableIntegrations">ListS3TableIntegrations</a></code> | <code>string</code> | [List] observabilityadmin:ListS3TableIntegrations. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] observabilityadmin:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListTelemetryPipelines">ListTelemetryPipelines</a></code> | <code>string</code> | [List] observabilityadmin:ListTelemetryPipelines. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListTelemetryRules">ListTelemetryRules</a></code> | <code>string</code> | [List] observabilityadmin:ListTelemetryRules. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListTelemetryRulesForOrganization">ListTelemetryRulesForOrganization</a></code> | <code>string</code> | [List] observabilityadmin:ListTelemetryRulesForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StartTelemetryEnrichment">StartTelemetryEnrichment</a></code> | <code>string</code> | [Write] observabilityadmin:StartTelemetryEnrichment. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StartTelemetryEvaluation">StartTelemetryEvaluation</a></code> | <code>string</code> | [Write] observabilityadmin:StartTelemetryEvaluation. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StartTelemetryEvaluationForOrganization">StartTelemetryEvaluationForOrganization</a></code> | <code>string</code> | [Write] observabilityadmin:StartTelemetryEvaluationForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StopTelemetryEnrichment">StopTelemetryEnrichment</a></code> | <code>string</code> | [Write] observabilityadmin:StopTelemetryEnrichment. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StopTelemetryEvaluation">StopTelemetryEvaluation</a></code> | <code>string</code> | [Write] observabilityadmin:StopTelemetryEvaluation. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StopTelemetryEvaluationForOrganization">StopTelemetryEvaluationForOrganization</a></code> | <code>string</code> | [Write] observabilityadmin:StopTelemetryEvaluationForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] observabilityadmin:TagResource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.TestTelemetryPipeline">TestTelemetryPipeline</a></code> | <code>string</code> | [Read] observabilityadmin:TestTelemetryPipeline. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] observabilityadmin:UntagResource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.UpdateCentralizationRuleForOrganization">UpdateCentralizationRuleForOrganization</a></code> | <code>string</code> | [Write] observabilityadmin:UpdateCentralizationRuleForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.UpdateTelemetryPipeline">UpdateTelemetryPipeline</a></code> | <code>string</code> | [Write] observabilityadmin:UpdateTelemetryPipeline. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.UpdateTelemetryRule">UpdateTelemetryRule</a></code> | <code>string</code> | [Write] observabilityadmin:UpdateTelemetryRule. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.UpdateTelemetryRuleForOrganization">UpdateTelemetryRuleForOrganization</a></code> | <code>string</code> | [Write] observabilityadmin:UpdateTelemetryRuleForOrganization. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ValidateTelemetryPipelineConfiguration">ValidateTelemetryPipelineConfiguration</a></code> | <code>string</code> | [Read] observabilityadmin:ValidateTelemetryPipelineConfiguration. |

---

##### `actionGetCentralizationRuleForOrganization`<sup>Required</sup> <a name="actionGetCentralizationRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetCentralizationRuleForOrganization"></a>

```typescript
public readonly actionGetCentralizationRuleForOrganization: string;
```

- *Type:* string

[Read] observabilityadmin:GetCentralizationRuleForOrganization.

---

##### `actionGetS3TableIntegration`<sup>Required</sup> <a name="actionGetS3TableIntegration" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetS3TableIntegration"></a>

```typescript
public readonly actionGetS3TableIntegration: string;
```

- *Type:* string

[Read] observabilityadmin:GetS3TableIntegration.

---

##### `actionGetTelemetryEnrichmentStatus`<sup>Required</sup> <a name="actionGetTelemetryEnrichmentStatus" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryEnrichmentStatus"></a>

```typescript
public readonly actionGetTelemetryEnrichmentStatus: string;
```

- *Type:* string

[Read] observabilityadmin:GetTelemetryEnrichmentStatus.

---

##### `actionGetTelemetryEvaluationStatus`<sup>Required</sup> <a name="actionGetTelemetryEvaluationStatus" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryEvaluationStatus"></a>

```typescript
public readonly actionGetTelemetryEvaluationStatus: string;
```

- *Type:* string

[Read] observabilityadmin:GetTelemetryEvaluationStatus.

---

##### `actionGetTelemetryEvaluationStatusForOrganization`<sup>Required</sup> <a name="actionGetTelemetryEvaluationStatusForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryEvaluationStatusForOrganization"></a>

```typescript
public readonly actionGetTelemetryEvaluationStatusForOrganization: string;
```

- *Type:* string

[Read] observabilityadmin:GetTelemetryEvaluationStatusForOrganization.

---

##### `actionGetTelemetryPipeline`<sup>Required</sup> <a name="actionGetTelemetryPipeline" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryPipeline"></a>

```typescript
public readonly actionGetTelemetryPipeline: string;
```

- *Type:* string

[Read] observabilityadmin:GetTelemetryPipeline.

---

##### `actionGetTelemetryRule`<sup>Required</sup> <a name="actionGetTelemetryRule" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryRule"></a>

```typescript
public readonly actionGetTelemetryRule: string;
```

- *Type:* string

[Read] observabilityadmin:GetTelemetryRule.

---

##### `actionGetTelemetryRuleForOrganization`<sup>Required</sup> <a name="actionGetTelemetryRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.actionGetTelemetryRuleForOrganization"></a>

```typescript
public readonly actionGetTelemetryRuleForOrganization: string;
```

- *Type:* string

[Read] observabilityadmin:GetTelemetryRuleForOrganization.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCentralizationRuleForOrganization`<sup>Required</sup> <a name="CreateCentralizationRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.CreateCentralizationRuleForOrganization"></a>

```typescript
public readonly CreateCentralizationRuleForOrganization: string;
```

- *Type:* string

[Write] observabilityadmin:CreateCentralizationRuleForOrganization.

---

##### `CreateS3TableIntegration`<sup>Required</sup> <a name="CreateS3TableIntegration" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.CreateS3TableIntegration"></a>

```typescript
public readonly CreateS3TableIntegration: string;
```

- *Type:* string

[Write] observabilityadmin:CreateS3TableIntegration.

---

##### `CreateTelemetryPipeline`<sup>Required</sup> <a name="CreateTelemetryPipeline" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.CreateTelemetryPipeline"></a>

```typescript
public readonly CreateTelemetryPipeline: string;
```

- *Type:* string

[Write] observabilityadmin:CreateTelemetryPipeline.

---

##### `CreateTelemetryRule`<sup>Required</sup> <a name="CreateTelemetryRule" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.CreateTelemetryRule"></a>

```typescript
public readonly CreateTelemetryRule: string;
```

- *Type:* string

[Write] observabilityadmin:CreateTelemetryRule.

---

##### `CreateTelemetryRuleForOrganization`<sup>Required</sup> <a name="CreateTelemetryRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.CreateTelemetryRuleForOrganization"></a>

```typescript
public readonly CreateTelemetryRuleForOrganization: string;
```

- *Type:* string

[Write] observabilityadmin:CreateTelemetryRuleForOrganization.

---

##### `DeleteCentralizationRuleForOrganization`<sup>Required</sup> <a name="DeleteCentralizationRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.DeleteCentralizationRuleForOrganization"></a>

```typescript
public readonly DeleteCentralizationRuleForOrganization: string;
```

- *Type:* string

[Write] observabilityadmin:DeleteCentralizationRuleForOrganization.

---

##### `DeleteS3TableIntegration`<sup>Required</sup> <a name="DeleteS3TableIntegration" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.DeleteS3TableIntegration"></a>

```typescript
public readonly DeleteS3TableIntegration: string;
```

- *Type:* string

[Write] observabilityadmin:DeleteS3TableIntegration.

---

##### `DeleteTelemetryPipeline`<sup>Required</sup> <a name="DeleteTelemetryPipeline" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.DeleteTelemetryPipeline"></a>

```typescript
public readonly DeleteTelemetryPipeline: string;
```

- *Type:* string

[Write] observabilityadmin:DeleteTelemetryPipeline.

---

##### `DeleteTelemetryRule`<sup>Required</sup> <a name="DeleteTelemetryRule" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.DeleteTelemetryRule"></a>

```typescript
public readonly DeleteTelemetryRule: string;
```

- *Type:* string

[Write] observabilityadmin:DeleteTelemetryRule.

---

##### `DeleteTelemetryRuleForOrganization`<sup>Required</sup> <a name="DeleteTelemetryRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.DeleteTelemetryRuleForOrganization"></a>

```typescript
public readonly DeleteTelemetryRuleForOrganization: string;
```

- *Type:* string

[Write] observabilityadmin:DeleteTelemetryRuleForOrganization.

---

##### `ListCentralizationRulesForOrganization`<sup>Required</sup> <a name="ListCentralizationRulesForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListCentralizationRulesForOrganization"></a>

```typescript
public readonly ListCentralizationRulesForOrganization: string;
```

- *Type:* string

[List] observabilityadmin:ListCentralizationRulesForOrganization.

---

##### `ListResourceTelemetry`<sup>Required</sup> <a name="ListResourceTelemetry" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListResourceTelemetry"></a>

```typescript
public readonly ListResourceTelemetry: string;
```

- *Type:* string

[Read] observabilityadmin:ListResourceTelemetry.

---

##### `ListResourceTelemetryForOrganization`<sup>Required</sup> <a name="ListResourceTelemetryForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListResourceTelemetryForOrganization"></a>

```typescript
public readonly ListResourceTelemetryForOrganization: string;
```

- *Type:* string

[Read] observabilityadmin:ListResourceTelemetryForOrganization.

---

##### `ListS3TableIntegrations`<sup>Required</sup> <a name="ListS3TableIntegrations" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListS3TableIntegrations"></a>

```typescript
public readonly ListS3TableIntegrations: string;
```

- *Type:* string

[List] observabilityadmin:ListS3TableIntegrations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] observabilityadmin:ListTagsForResource.

---

##### `ListTelemetryPipelines`<sup>Required</sup> <a name="ListTelemetryPipelines" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListTelemetryPipelines"></a>

```typescript
public readonly ListTelemetryPipelines: string;
```

- *Type:* string

[List] observabilityadmin:ListTelemetryPipelines.

---

##### `ListTelemetryRules`<sup>Required</sup> <a name="ListTelemetryRules" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListTelemetryRules"></a>

```typescript
public readonly ListTelemetryRules: string;
```

- *Type:* string

[List] observabilityadmin:ListTelemetryRules.

---

##### `ListTelemetryRulesForOrganization`<sup>Required</sup> <a name="ListTelemetryRulesForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ListTelemetryRulesForOrganization"></a>

```typescript
public readonly ListTelemetryRulesForOrganization: string;
```

- *Type:* string

[List] observabilityadmin:ListTelemetryRulesForOrganization.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartTelemetryEnrichment`<sup>Required</sup> <a name="StartTelemetryEnrichment" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StartTelemetryEnrichment"></a>

```typescript
public readonly StartTelemetryEnrichment: string;
```

- *Type:* string

[Write] observabilityadmin:StartTelemetryEnrichment.

---

##### `StartTelemetryEvaluation`<sup>Required</sup> <a name="StartTelemetryEvaluation" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StartTelemetryEvaluation"></a>

```typescript
public readonly StartTelemetryEvaluation: string;
```

- *Type:* string

[Write] observabilityadmin:StartTelemetryEvaluation.

---

##### `StartTelemetryEvaluationForOrganization`<sup>Required</sup> <a name="StartTelemetryEvaluationForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StartTelemetryEvaluationForOrganization"></a>

```typescript
public readonly StartTelemetryEvaluationForOrganization: string;
```

- *Type:* string

[Write] observabilityadmin:StartTelemetryEvaluationForOrganization.

---

##### `StopTelemetryEnrichment`<sup>Required</sup> <a name="StopTelemetryEnrichment" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StopTelemetryEnrichment"></a>

```typescript
public readonly StopTelemetryEnrichment: string;
```

- *Type:* string

[Write] observabilityadmin:StopTelemetryEnrichment.

---

##### `StopTelemetryEvaluation`<sup>Required</sup> <a name="StopTelemetryEvaluation" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StopTelemetryEvaluation"></a>

```typescript
public readonly StopTelemetryEvaluation: string;
```

- *Type:* string

[Write] observabilityadmin:StopTelemetryEvaluation.

---

##### `StopTelemetryEvaluationForOrganization`<sup>Required</sup> <a name="StopTelemetryEvaluationForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.StopTelemetryEvaluationForOrganization"></a>

```typescript
public readonly StopTelemetryEvaluationForOrganization: string;
```

- *Type:* string

[Write] observabilityadmin:StopTelemetryEvaluationForOrganization.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] observabilityadmin:TagResource.

---

##### `TestTelemetryPipeline`<sup>Required</sup> <a name="TestTelemetryPipeline" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.TestTelemetryPipeline"></a>

```typescript
public readonly TestTelemetryPipeline: string;
```

- *Type:* string

[Read] observabilityadmin:TestTelemetryPipeline.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] observabilityadmin:UntagResource.

---

##### `UpdateCentralizationRuleForOrganization`<sup>Required</sup> <a name="UpdateCentralizationRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.UpdateCentralizationRuleForOrganization"></a>

```typescript
public readonly UpdateCentralizationRuleForOrganization: string;
```

- *Type:* string

[Write] observabilityadmin:UpdateCentralizationRuleForOrganization.

---

##### `UpdateTelemetryPipeline`<sup>Required</sup> <a name="UpdateTelemetryPipeline" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.UpdateTelemetryPipeline"></a>

```typescript
public readonly UpdateTelemetryPipeline: string;
```

- *Type:* string

[Write] observabilityadmin:UpdateTelemetryPipeline.

---

##### `UpdateTelemetryRule`<sup>Required</sup> <a name="UpdateTelemetryRule" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.UpdateTelemetryRule"></a>

```typescript
public readonly UpdateTelemetryRule: string;
```

- *Type:* string

[Write] observabilityadmin:UpdateTelemetryRule.

---

##### `UpdateTelemetryRuleForOrganization`<sup>Required</sup> <a name="UpdateTelemetryRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.UpdateTelemetryRuleForOrganization"></a>

```typescript
public readonly UpdateTelemetryRuleForOrganization: string;
```

- *Type:* string

[Write] observabilityadmin:UpdateTelemetryRuleForOrganization.

---

##### `ValidateTelemetryPipelineConfiguration`<sup>Required</sup> <a name="ValidateTelemetryPipelineConfiguration" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminActions.property.ValidateTelemetryPipelineConfiguration"></a>

```typescript
public readonly ValidateTelemetryPipelineConfiguration: string;
```

- *Type:* string

[Read] observabilityadmin:ValidateTelemetryPipelineConfiguration.

---

### ObservabilityadminConditions <a name="ObservabilityadminConditions" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions"></a>

Condition key constants and builders for observabilityadmin.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

new observabilityadmin.ObservabilityadminConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationBackupRegion">centralizationBackupRegion</a></code> | Generates a condition block for `observabilityadmin:CentralizationBackupRegion`. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationDestinationAccount">centralizationDestinationAccount</a></code> | Generates a condition block for `observabilityadmin:CentralizationDestinationAccount`. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationDestinationRegion">centralizationDestinationRegion</a></code> | Generates a condition block for `observabilityadmin:CentralizationDestinationRegion`. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationRuleName">centralizationRuleName</a></code> | Generates a condition block for `observabilityadmin:CentralizationRuleName`. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationSourceId">centralizationSourceId</a></code> | Generates a condition block for `observabilityadmin:CentralizationSourceId`. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationSourceRegions">centralizationSourceRegions</a></code> | Generates a condition block for `observabilityadmin:CentralizationSourceRegions`. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.sourceType">sourceType</a></code> | Generates a condition block for `observabilityadmin:SourceType`. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.targetRegions">targetRegions</a></code> | Generates a condition block for `observabilityadmin:TargetRegions`. |

---

##### `centralizationBackupRegion` <a name="centralizationBackupRegion" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationBackupRegion"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminConditions.centralizationBackupRegion(value: string)
```

Generates a condition block for `observabilityadmin:CentralizationBackupRegion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationBackupRegion.parameter.value"></a>

- *Type:* string

---

##### `centralizationDestinationAccount` <a name="centralizationDestinationAccount" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationDestinationAccount"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminConditions.centralizationDestinationAccount(value: string)
```

Generates a condition block for `observabilityadmin:CentralizationDestinationAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationDestinationAccount.parameter.value"></a>

- *Type:* string

---

##### `centralizationDestinationRegion` <a name="centralizationDestinationRegion" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationDestinationRegion"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminConditions.centralizationDestinationRegion(value: string)
```

Generates a condition block for `observabilityadmin:CentralizationDestinationRegion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationDestinationRegion.parameter.value"></a>

- *Type:* string

---

##### `centralizationRuleName` <a name="centralizationRuleName" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationRuleName"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminConditions.centralizationRuleName(value: string)
```

Generates a condition block for `observabilityadmin:CentralizationRuleName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationRuleName.parameter.value"></a>

- *Type:* string

---

##### `centralizationSourceId` <a name="centralizationSourceId" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationSourceId"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminConditions.centralizationSourceId(values: string[])
```

Generates a condition block for `observabilityadmin:CentralizationSourceId`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationSourceId.parameter.values"></a>

- *Type:* string[]

---

##### `centralizationSourceRegions` <a name="centralizationSourceRegions" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationSourceRegions"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminConditions.centralizationSourceRegions(values: string[])
```

Generates a condition block for `observabilityadmin:CentralizationSourceRegions`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.centralizationSourceRegions.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.requestTag"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.resourceTag"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `sourceType` <a name="sourceType" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.sourceType"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminConditions.sourceType(value: string)
```

Generates a condition block for `observabilityadmin:SourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.sourceType.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.tagKeys"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `targetRegions` <a name="targetRegions" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.targetRegions"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminConditions.targetRegions(value: string)
```

Generates a condition block for `observabilityadmin:TargetRegions`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.targetRegions.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.actionGetCentralizationRuleForOrganizationConditionKeys">actionGetCentralizationRuleForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCentralizationRuleForOrganization action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_BACKUP_REGION">CENTRALIZATION_BACKUP_REGION</a></code> | <code>string</code> | Condition key: observabilityadmin:CentralizationBackupRegion (String). |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_DESTINATION_ACCOUNT">CENTRALIZATION_DESTINATION_ACCOUNT</a></code> | <code>string</code> | Condition key: observabilityadmin:CentralizationDestinationAccount (String). |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_DESTINATION_REGION">CENTRALIZATION_DESTINATION_REGION</a></code> | <code>string</code> | Condition key: observabilityadmin:CentralizationDestinationRegion (String). |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_RULE_NAME">CENTRALIZATION_RULE_NAME</a></code> | <code>string</code> | Condition key: observabilityadmin:CentralizationRuleName (String). |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_SOURCE_ID">CENTRALIZATION_SOURCE_ID</a></code> | <code>string</code> | Condition key: observabilityadmin:CentralizationSourceId (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_SOURCE_REGIONS">CENTRALIZATION_SOURCE_REGIONS</a></code> | <code>string</code> | Condition key: observabilityadmin:CentralizationSourceRegions (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CreateCentralizationRuleForOrganizationConditionKeys">CreateCentralizationRuleForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCentralizationRuleForOrganization action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CreateS3TableIntegrationConditionKeys">CreateS3TableIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateS3TableIntegration action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CreateTelemetryPipelineConditionKeys">CreateTelemetryPipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTelemetryPipeline action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CreateTelemetryRuleConditionKeys">CreateTelemetryRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTelemetryRule action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CreateTelemetryRuleForOrganizationConditionKeys">CreateTelemetryRuleForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTelemetryRuleForOrganization action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.DeleteCentralizationRuleForOrganizationConditionKeys">DeleteCentralizationRuleForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCentralizationRuleForOrganization action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.ListResourceTelemetryConditionKeys">ListResourceTelemetryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListResourceTelemetry action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.ListResourceTelemetryForOrganizationConditionKeys">ListResourceTelemetryForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListResourceTelemetryForOrganization action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.SOURCE_TYPE">SOURCE_TYPE</a></code> | <code>string</code> | Condition key: observabilityadmin:SourceType (String). |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.StartTelemetryEvaluationConditionKeys">StartTelemetryEvaluationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTelemetryEvaluation action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.StartTelemetryEvaluationForOrganizationConditionKeys">StartTelemetryEvaluationForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTelemetryEvaluationForOrganization action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.TARGET_REGIONS">TARGET_REGIONS</a></code> | <code>string</code> | Condition key: observabilityadmin:TargetRegions (String). |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.UpdateCentralizationRuleForOrganizationConditionKeys">UpdateCentralizationRuleForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCentralizationRuleForOrganization action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.UpdateTelemetryRuleConditionKeys">UpdateTelemetryRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTelemetryRule action. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.UpdateTelemetryRuleForOrganizationConditionKeys">UpdateTelemetryRuleForOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTelemetryRuleForOrganization action. |

---

##### `actionGetCentralizationRuleForOrganizationConditionKeys`<sup>Required</sup> <a name="actionGetCentralizationRuleForOrganizationConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.actionGetCentralizationRuleForOrganizationConditionKeys"></a>

```typescript
public readonly actionGetCentralizationRuleForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCentralizationRuleForOrganization action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CENTRALIZATION_BACKUP_REGION`<sup>Required</sup> <a name="CENTRALIZATION_BACKUP_REGION" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_BACKUP_REGION"></a>

```typescript
public readonly CENTRALIZATION_BACKUP_REGION: string;
```

- *Type:* string

Condition key: observabilityadmin:CentralizationBackupRegion (String).

---

##### `CENTRALIZATION_DESTINATION_ACCOUNT`<sup>Required</sup> <a name="CENTRALIZATION_DESTINATION_ACCOUNT" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_DESTINATION_ACCOUNT"></a>

```typescript
public readonly CENTRALIZATION_DESTINATION_ACCOUNT: string;
```

- *Type:* string

Condition key: observabilityadmin:CentralizationDestinationAccount (String).

---

##### `CENTRALIZATION_DESTINATION_REGION`<sup>Required</sup> <a name="CENTRALIZATION_DESTINATION_REGION" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_DESTINATION_REGION"></a>

```typescript
public readonly CENTRALIZATION_DESTINATION_REGION: string;
```

- *Type:* string

Condition key: observabilityadmin:CentralizationDestinationRegion (String).

---

##### `CENTRALIZATION_RULE_NAME`<sup>Required</sup> <a name="CENTRALIZATION_RULE_NAME" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_RULE_NAME"></a>

```typescript
public readonly CENTRALIZATION_RULE_NAME: string;
```

- *Type:* string

Condition key: observabilityadmin:CentralizationRuleName (String).

---

##### `CENTRALIZATION_SOURCE_ID`<sup>Required</sup> <a name="CENTRALIZATION_SOURCE_ID" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_SOURCE_ID"></a>

```typescript
public readonly CENTRALIZATION_SOURCE_ID: string;
```

- *Type:* string

Condition key: observabilityadmin:CentralizationSourceId (ArrayOfString).

---

##### `CENTRALIZATION_SOURCE_REGIONS`<sup>Required</sup> <a name="CENTRALIZATION_SOURCE_REGIONS" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CENTRALIZATION_SOURCE_REGIONS"></a>

```typescript
public readonly CENTRALIZATION_SOURCE_REGIONS: string;
```

- *Type:* string

Condition key: observabilityadmin:CentralizationSourceRegions (ArrayOfString).

---

##### `CreateCentralizationRuleForOrganizationConditionKeys`<sup>Required</sup> <a name="CreateCentralizationRuleForOrganizationConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CreateCentralizationRuleForOrganizationConditionKeys"></a>

```typescript
public readonly CreateCentralizationRuleForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCentralizationRuleForOrganization action.

---

##### `CreateS3TableIntegrationConditionKeys`<sup>Required</sup> <a name="CreateS3TableIntegrationConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CreateS3TableIntegrationConditionKeys"></a>

```typescript
public readonly CreateS3TableIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateS3TableIntegration action.

---

##### `CreateTelemetryPipelineConditionKeys`<sup>Required</sup> <a name="CreateTelemetryPipelineConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CreateTelemetryPipelineConditionKeys"></a>

```typescript
public readonly CreateTelemetryPipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTelemetryPipeline action.

---

##### `CreateTelemetryRuleConditionKeys`<sup>Required</sup> <a name="CreateTelemetryRuleConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CreateTelemetryRuleConditionKeys"></a>

```typescript
public readonly CreateTelemetryRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTelemetryRule action.

---

##### `CreateTelemetryRuleForOrganizationConditionKeys`<sup>Required</sup> <a name="CreateTelemetryRuleForOrganizationConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.CreateTelemetryRuleForOrganizationConditionKeys"></a>

```typescript
public readonly CreateTelemetryRuleForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTelemetryRuleForOrganization action.

---

##### `DeleteCentralizationRuleForOrganizationConditionKeys`<sup>Required</sup> <a name="DeleteCentralizationRuleForOrganizationConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.DeleteCentralizationRuleForOrganizationConditionKeys"></a>

```typescript
public readonly DeleteCentralizationRuleForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCentralizationRuleForOrganization action.

---

##### `ListResourceTelemetryConditionKeys`<sup>Required</sup> <a name="ListResourceTelemetryConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.ListResourceTelemetryConditionKeys"></a>

```typescript
public readonly ListResourceTelemetryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListResourceTelemetry action.

---

##### `ListResourceTelemetryForOrganizationConditionKeys`<sup>Required</sup> <a name="ListResourceTelemetryForOrganizationConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.ListResourceTelemetryForOrganizationConditionKeys"></a>

```typescript
public readonly ListResourceTelemetryForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListResourceTelemetryForOrganization action.

---

##### `SOURCE_TYPE`<sup>Required</sup> <a name="SOURCE_TYPE" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.SOURCE_TYPE"></a>

```typescript
public readonly SOURCE_TYPE: string;
```

- *Type:* string

Condition key: observabilityadmin:SourceType (String).

---

##### `StartTelemetryEvaluationConditionKeys`<sup>Required</sup> <a name="StartTelemetryEvaluationConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.StartTelemetryEvaluationConditionKeys"></a>

```typescript
public readonly StartTelemetryEvaluationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTelemetryEvaluation action.

---

##### `StartTelemetryEvaluationForOrganizationConditionKeys`<sup>Required</sup> <a name="StartTelemetryEvaluationForOrganizationConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.StartTelemetryEvaluationForOrganizationConditionKeys"></a>

```typescript
public readonly StartTelemetryEvaluationForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTelemetryEvaluationForOrganization action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TARGET_REGIONS`<sup>Required</sup> <a name="TARGET_REGIONS" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.TARGET_REGIONS"></a>

```typescript
public readonly TARGET_REGIONS: string;
```

- *Type:* string

Condition key: observabilityadmin:TargetRegions (String).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateCentralizationRuleForOrganizationConditionKeys`<sup>Required</sup> <a name="UpdateCentralizationRuleForOrganizationConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.UpdateCentralizationRuleForOrganizationConditionKeys"></a>

```typescript
public readonly UpdateCentralizationRuleForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCentralizationRuleForOrganization action.

---

##### `UpdateTelemetryRuleConditionKeys`<sup>Required</sup> <a name="UpdateTelemetryRuleConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.UpdateTelemetryRuleConditionKeys"></a>

```typescript
public readonly UpdateTelemetryRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTelemetryRule action.

---

##### `UpdateTelemetryRuleForOrganizationConditionKeys`<sup>Required</sup> <a name="UpdateTelemetryRuleForOrganizationConditionKeys" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminConditions.property.UpdateTelemetryRuleForOrganizationConditionKeys"></a>

```typescript
public readonly UpdateTelemetryRuleForOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTelemetryRuleForOrganization action.

---

### ObservabilityadminOperations <a name="ObservabilityadminOperations" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations"></a>

API operation to required IAM actions mapping for observabilityadmin.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

new observabilityadmin.ObservabilityadminOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.CreateCentralizationRuleForOrganization">CreateCentralizationRuleForOrganization</a></code> | <code>string[]</code> | IAM actions required for the CreateCentralizationRuleForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.CreateS3TableIntegration">CreateS3TableIntegration</a></code> | <code>string[]</code> | IAM actions required for the CreateS3TableIntegration API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.CreateTelemetryPipeline">CreateTelemetryPipeline</a></code> | <code>string[]</code> | IAM actions required for the CreateTelemetryPipeline API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.CreateTelemetryRule">CreateTelemetryRule</a></code> | <code>string[]</code> | IAM actions required for the CreateTelemetryRule API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.CreateTelemetryRuleForOrganization">CreateTelemetryRuleForOrganization</a></code> | <code>string[]</code> | IAM actions required for the CreateTelemetryRuleForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.DeleteCentralizationRuleForOrganization">DeleteCentralizationRuleForOrganization</a></code> | <code>string[]</code> | IAM actions required for the DeleteCentralizationRuleForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.DeleteS3TableIntegration">DeleteS3TableIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteS3TableIntegration API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.DeleteTelemetryPipeline">DeleteTelemetryPipeline</a></code> | <code>string[]</code> | IAM actions required for the DeleteTelemetryPipeline API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.DeleteTelemetryRule">DeleteTelemetryRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteTelemetryRule API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.DeleteTelemetryRuleForOrganization">DeleteTelemetryRuleForOrganization</a></code> | <code>string[]</code> | IAM actions required for the DeleteTelemetryRuleForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListCentralizationRulesForOrganization">ListCentralizationRulesForOrganization</a></code> | <code>string[]</code> | IAM actions required for the ListCentralizationRulesForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListResourceTelemetry">ListResourceTelemetry</a></code> | <code>string[]</code> | IAM actions required for the ListResourceTelemetry API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListResourceTelemetryForOrganization">ListResourceTelemetryForOrganization</a></code> | <code>string[]</code> | IAM actions required for the ListResourceTelemetryForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListS3TableIntegrations">ListS3TableIntegrations</a></code> | <code>string[]</code> | IAM actions required for the ListS3TableIntegrations API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListTelemetryPipelines">ListTelemetryPipelines</a></code> | <code>string[]</code> | IAM actions required for the ListTelemetryPipelines API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListTelemetryRules">ListTelemetryRules</a></code> | <code>string[]</code> | IAM actions required for the ListTelemetryRules API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListTelemetryRulesForOrganization">ListTelemetryRulesForOrganization</a></code> | <code>string[]</code> | IAM actions required for the ListTelemetryRulesForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetCentralizationRuleForOrganization">opGetCentralizationRuleForOrganization</a></code> | <code>string[]</code> | IAM actions required for the GetCentralizationRuleForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetS3TableIntegration">opGetS3TableIntegration</a></code> | <code>string[]</code> | IAM actions required for the GetS3TableIntegration API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryEnrichmentStatus">opGetTelemetryEnrichmentStatus</a></code> | <code>string[]</code> | IAM actions required for the GetTelemetryEnrichmentStatus API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryEvaluationStatus">opGetTelemetryEvaluationStatus</a></code> | <code>string[]</code> | IAM actions required for the GetTelemetryEvaluationStatus API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryEvaluationStatusForOrganization">opGetTelemetryEvaluationStatusForOrganization</a></code> | <code>string[]</code> | IAM actions required for the GetTelemetryEvaluationStatusForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryPipeline">opGetTelemetryPipeline</a></code> | <code>string[]</code> | IAM actions required for the GetTelemetryPipeline API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryRule">opGetTelemetryRule</a></code> | <code>string[]</code> | IAM actions required for the GetTelemetryRule API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryRuleForOrganization">opGetTelemetryRuleForOrganization</a></code> | <code>string[]</code> | IAM actions required for the GetTelemetryRuleForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StartTelemetryEnrichment">StartTelemetryEnrichment</a></code> | <code>string[]</code> | IAM actions required for the StartTelemetryEnrichment API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StartTelemetryEvaluation">StartTelemetryEvaluation</a></code> | <code>string[]</code> | IAM actions required for the StartTelemetryEvaluation API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StartTelemetryEvaluationForOrganization">StartTelemetryEvaluationForOrganization</a></code> | <code>string[]</code> | IAM actions required for the StartTelemetryEvaluationForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StopTelemetryEnrichment">StopTelemetryEnrichment</a></code> | <code>string[]</code> | IAM actions required for the StopTelemetryEnrichment API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StopTelemetryEvaluation">StopTelemetryEvaluation</a></code> | <code>string[]</code> | IAM actions required for the StopTelemetryEvaluation API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StopTelemetryEvaluationForOrganization">StopTelemetryEvaluationForOrganization</a></code> | <code>string[]</code> | IAM actions required for the StopTelemetryEvaluationForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.TestTelemetryPipeline">TestTelemetryPipeline</a></code> | <code>string[]</code> | IAM actions required for the TestTelemetryPipeline API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.UpdateCentralizationRuleForOrganization">UpdateCentralizationRuleForOrganization</a></code> | <code>string[]</code> | IAM actions required for the UpdateCentralizationRuleForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.UpdateTelemetryPipeline">UpdateTelemetryPipeline</a></code> | <code>string[]</code> | IAM actions required for the UpdateTelemetryPipeline API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.UpdateTelemetryRule">UpdateTelemetryRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateTelemetryRule API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.UpdateTelemetryRuleForOrganization">UpdateTelemetryRuleForOrganization</a></code> | <code>string[]</code> | IAM actions required for the UpdateTelemetryRuleForOrganization API call. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ValidateTelemetryPipelineConfiguration">ValidateTelemetryPipelineConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ValidateTelemetryPipelineConfiguration API call. |

---

##### `CreateCentralizationRuleForOrganization`<sup>Required</sup> <a name="CreateCentralizationRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.CreateCentralizationRuleForOrganization"></a>

```typescript
public readonly CreateCentralizationRuleForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the CreateCentralizationRuleForOrganization API call.

---

##### `CreateS3TableIntegration`<sup>Required</sup> <a name="CreateS3TableIntegration" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.CreateS3TableIntegration"></a>

```typescript
public readonly CreateS3TableIntegration: string[];
```

- *Type:* string[]

IAM actions required for the CreateS3TableIntegration API call.

---

##### `CreateTelemetryPipeline`<sup>Required</sup> <a name="CreateTelemetryPipeline" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.CreateTelemetryPipeline"></a>

```typescript
public readonly CreateTelemetryPipeline: string[];
```

- *Type:* string[]

IAM actions required for the CreateTelemetryPipeline API call.

---

##### `CreateTelemetryRule`<sup>Required</sup> <a name="CreateTelemetryRule" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.CreateTelemetryRule"></a>

```typescript
public readonly CreateTelemetryRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateTelemetryRule API call.

---

##### `CreateTelemetryRuleForOrganization`<sup>Required</sup> <a name="CreateTelemetryRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.CreateTelemetryRuleForOrganization"></a>

```typescript
public readonly CreateTelemetryRuleForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the CreateTelemetryRuleForOrganization API call.

---

##### `DeleteCentralizationRuleForOrganization`<sup>Required</sup> <a name="DeleteCentralizationRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.DeleteCentralizationRuleForOrganization"></a>

```typescript
public readonly DeleteCentralizationRuleForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCentralizationRuleForOrganization API call.

---

##### `DeleteS3TableIntegration`<sup>Required</sup> <a name="DeleteS3TableIntegration" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.DeleteS3TableIntegration"></a>

```typescript
public readonly DeleteS3TableIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteS3TableIntegration API call.

---

##### `DeleteTelemetryPipeline`<sup>Required</sup> <a name="DeleteTelemetryPipeline" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.DeleteTelemetryPipeline"></a>

```typescript
public readonly DeleteTelemetryPipeline: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTelemetryPipeline API call.

---

##### `DeleteTelemetryRule`<sup>Required</sup> <a name="DeleteTelemetryRule" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.DeleteTelemetryRule"></a>

```typescript
public readonly DeleteTelemetryRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTelemetryRule API call.

---

##### `DeleteTelemetryRuleForOrganization`<sup>Required</sup> <a name="DeleteTelemetryRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.DeleteTelemetryRuleForOrganization"></a>

```typescript
public readonly DeleteTelemetryRuleForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTelemetryRuleForOrganization API call.

---

##### `ListCentralizationRulesForOrganization`<sup>Required</sup> <a name="ListCentralizationRulesForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListCentralizationRulesForOrganization"></a>

```typescript
public readonly ListCentralizationRulesForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the ListCentralizationRulesForOrganization API call.

---

##### `ListResourceTelemetry`<sup>Required</sup> <a name="ListResourceTelemetry" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListResourceTelemetry"></a>

```typescript
public readonly ListResourceTelemetry: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceTelemetry API call.

---

##### `ListResourceTelemetryForOrganization`<sup>Required</sup> <a name="ListResourceTelemetryForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListResourceTelemetryForOrganization"></a>

```typescript
public readonly ListResourceTelemetryForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceTelemetryForOrganization API call.

---

##### `ListS3TableIntegrations`<sup>Required</sup> <a name="ListS3TableIntegrations" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListS3TableIntegrations"></a>

```typescript
public readonly ListS3TableIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the ListS3TableIntegrations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTelemetryPipelines`<sup>Required</sup> <a name="ListTelemetryPipelines" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListTelemetryPipelines"></a>

```typescript
public readonly ListTelemetryPipelines: string[];
```

- *Type:* string[]

IAM actions required for the ListTelemetryPipelines API call.

---

##### `ListTelemetryRules`<sup>Required</sup> <a name="ListTelemetryRules" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListTelemetryRules"></a>

```typescript
public readonly ListTelemetryRules: string[];
```

- *Type:* string[]

IAM actions required for the ListTelemetryRules API call.

---

##### `ListTelemetryRulesForOrganization`<sup>Required</sup> <a name="ListTelemetryRulesForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ListTelemetryRulesForOrganization"></a>

```typescript
public readonly ListTelemetryRulesForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the ListTelemetryRulesForOrganization API call.

---

##### `opGetCentralizationRuleForOrganization`<sup>Required</sup> <a name="opGetCentralizationRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetCentralizationRuleForOrganization"></a>

```typescript
public readonly opGetCentralizationRuleForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the GetCentralizationRuleForOrganization API call.

---

##### `opGetS3TableIntegration`<sup>Required</sup> <a name="opGetS3TableIntegration" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetS3TableIntegration"></a>

```typescript
public readonly opGetS3TableIntegration: string[];
```

- *Type:* string[]

IAM actions required for the GetS3TableIntegration API call.

---

##### `opGetTelemetryEnrichmentStatus`<sup>Required</sup> <a name="opGetTelemetryEnrichmentStatus" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryEnrichmentStatus"></a>

```typescript
public readonly opGetTelemetryEnrichmentStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetTelemetryEnrichmentStatus API call.

---

##### `opGetTelemetryEvaluationStatus`<sup>Required</sup> <a name="opGetTelemetryEvaluationStatus" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryEvaluationStatus"></a>

```typescript
public readonly opGetTelemetryEvaluationStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetTelemetryEvaluationStatus API call.

---

##### `opGetTelemetryEvaluationStatusForOrganization`<sup>Required</sup> <a name="opGetTelemetryEvaluationStatusForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryEvaluationStatusForOrganization"></a>

```typescript
public readonly opGetTelemetryEvaluationStatusForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the GetTelemetryEvaluationStatusForOrganization API call.

---

##### `opGetTelemetryPipeline`<sup>Required</sup> <a name="opGetTelemetryPipeline" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryPipeline"></a>

```typescript
public readonly opGetTelemetryPipeline: string[];
```

- *Type:* string[]

IAM actions required for the GetTelemetryPipeline API call.

---

##### `opGetTelemetryRule`<sup>Required</sup> <a name="opGetTelemetryRule" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryRule"></a>

```typescript
public readonly opGetTelemetryRule: string[];
```

- *Type:* string[]

IAM actions required for the GetTelemetryRule API call.

---

##### `opGetTelemetryRuleForOrganization`<sup>Required</sup> <a name="opGetTelemetryRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.opGetTelemetryRuleForOrganization"></a>

```typescript
public readonly opGetTelemetryRuleForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the GetTelemetryRuleForOrganization API call.

---

##### `StartTelemetryEnrichment`<sup>Required</sup> <a name="StartTelemetryEnrichment" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StartTelemetryEnrichment"></a>

```typescript
public readonly StartTelemetryEnrichment: string[];
```

- *Type:* string[]

IAM actions required for the StartTelemetryEnrichment API call.

---

##### `StartTelemetryEvaluation`<sup>Required</sup> <a name="StartTelemetryEvaluation" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StartTelemetryEvaluation"></a>

```typescript
public readonly StartTelemetryEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the StartTelemetryEvaluation API call.

---

##### `StartTelemetryEvaluationForOrganization`<sup>Required</sup> <a name="StartTelemetryEvaluationForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StartTelemetryEvaluationForOrganization"></a>

```typescript
public readonly StartTelemetryEvaluationForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the StartTelemetryEvaluationForOrganization API call.

---

##### `StopTelemetryEnrichment`<sup>Required</sup> <a name="StopTelemetryEnrichment" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StopTelemetryEnrichment"></a>

```typescript
public readonly StopTelemetryEnrichment: string[];
```

- *Type:* string[]

IAM actions required for the StopTelemetryEnrichment API call.

---

##### `StopTelemetryEvaluation`<sup>Required</sup> <a name="StopTelemetryEvaluation" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StopTelemetryEvaluation"></a>

```typescript
public readonly StopTelemetryEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the StopTelemetryEvaluation API call.

---

##### `StopTelemetryEvaluationForOrganization`<sup>Required</sup> <a name="StopTelemetryEvaluationForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.StopTelemetryEvaluationForOrganization"></a>

```typescript
public readonly StopTelemetryEvaluationForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the StopTelemetryEvaluationForOrganization API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestTelemetryPipeline`<sup>Required</sup> <a name="TestTelemetryPipeline" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.TestTelemetryPipeline"></a>

```typescript
public readonly TestTelemetryPipeline: string[];
```

- *Type:* string[]

IAM actions required for the TestTelemetryPipeline API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCentralizationRuleForOrganization`<sup>Required</sup> <a name="UpdateCentralizationRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.UpdateCentralizationRuleForOrganization"></a>

```typescript
public readonly UpdateCentralizationRuleForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCentralizationRuleForOrganization API call.

---

##### `UpdateTelemetryPipeline`<sup>Required</sup> <a name="UpdateTelemetryPipeline" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.UpdateTelemetryPipeline"></a>

```typescript
public readonly UpdateTelemetryPipeline: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTelemetryPipeline API call.

---

##### `UpdateTelemetryRule`<sup>Required</sup> <a name="UpdateTelemetryRule" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.UpdateTelemetryRule"></a>

```typescript
public readonly UpdateTelemetryRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTelemetryRule API call.

---

##### `UpdateTelemetryRuleForOrganization`<sup>Required</sup> <a name="UpdateTelemetryRuleForOrganization" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.UpdateTelemetryRuleForOrganization"></a>

```typescript
public readonly UpdateTelemetryRuleForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTelemetryRuleForOrganization API call.

---

##### `ValidateTelemetryPipelineConfiguration`<sup>Required</sup> <a name="ValidateTelemetryPipelineConfiguration" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminOperations.property.ValidateTelemetryPipelineConfiguration"></a>

```typescript
public readonly ValidateTelemetryPipelineConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ValidateTelemetryPipelineConfiguration API call.

---

### ObservabilityadminResources <a name="ObservabilityadminResources" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources"></a>

ARN builders, validators, and parsers for observabilityadmin resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.Initializer"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

new observabilityadmin.ObservabilityadminResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidOrganizationCentralizationRuleArn">isValidOrganizationCentralizationRuleArn</a></code> | Validates whether a string is a valid ARN for the organization-centralization-rule resource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidOrganizationTelemetryRuleArn">isValidOrganizationTelemetryRuleArn</a></code> | Validates whether a string is a valid ARN for the organization-telemetry-rule resource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidS3tableintegrationArn">isValidS3tableintegrationArn</a></code> | Validates whether a string is a valid ARN for the s3tableintegration resource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidTelemetryPipelineArn">isValidTelemetryPipelineArn</a></code> | Validates whether a string is a valid ARN for the telemetry-pipeline resource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidTelemetryRuleArn">isValidTelemetryRuleArn</a></code> | Validates whether a string is a valid ARN for the telemetry-rule resource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.organizationCentralizationRule">organizationCentralizationRule</a></code> | Builds an ARN for the organization-centralization-rule resource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.organizationTelemetryRule">organizationTelemetryRule</a></code> | Builds an ARN for the organization-telemetry-rule resource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseOrganizationCentralizationRuleArn">parseOrganizationCentralizationRuleArn</a></code> | Parses a organization-centralization-rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseOrganizationTelemetryRuleArn">parseOrganizationTelemetryRuleArn</a></code> | Parses a organization-telemetry-rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseS3tableintegrationArn">parseS3tableintegrationArn</a></code> | Parses a s3tableintegration ARN into its components. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseTelemetryPipelineArn">parseTelemetryPipelineArn</a></code> | Parses a telemetry-pipeline ARN into its components. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseTelemetryRuleArn">parseTelemetryRuleArn</a></code> | Parses a telemetry-rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.s3tableintegration">s3tableintegration</a></code> | Builds an ARN for the s3tableintegration resource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.telemetryPipeline">telemetryPipeline</a></code> | Builds an ARN for the telemetry-pipeline resource. |
| <code><a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.telemetryRule">telemetryRule</a></code> | Builds an ARN for the telemetry-rule resource. |

---

##### `isValidOrganizationCentralizationRuleArn` <a name="isValidOrganizationCentralizationRuleArn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidOrganizationCentralizationRuleArn"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.isValidOrganizationCentralizationRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the organization-centralization-rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidOrganizationCentralizationRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOrganizationTelemetryRuleArn` <a name="isValidOrganizationTelemetryRuleArn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidOrganizationTelemetryRuleArn"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.isValidOrganizationTelemetryRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the organization-telemetry-rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidOrganizationTelemetryRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidS3tableintegrationArn` <a name="isValidS3tableintegrationArn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidS3tableintegrationArn"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.isValidS3tableintegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the s3tableintegration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidS3tableintegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTelemetryPipelineArn` <a name="isValidTelemetryPipelineArn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidTelemetryPipelineArn"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.isValidTelemetryPipelineArn(arn: string)
```

Validates whether a string is a valid ARN for the telemetry-pipeline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidTelemetryPipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTelemetryRuleArn` <a name="isValidTelemetryRuleArn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidTelemetryRuleArn"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.isValidTelemetryRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the telemetry-rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.isValidTelemetryRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `organizationCentralizationRule` <a name="organizationCentralizationRule" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.organizationCentralizationRule"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.organizationCentralizationRule(props: ObservabilityadminOrganizationCentralizationRuleArnProps)
```

Builds an ARN for the organization-centralization-rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.organizationCentralizationRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationCentralizationRuleArnProps">ObservabilityadminOrganizationCentralizationRuleArnProps</a>

---

##### `organizationTelemetryRule` <a name="organizationTelemetryRule" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.organizationTelemetryRule"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.organizationTelemetryRule(props: ObservabilityadminOrganizationTelemetryRuleArnProps)
```

Builds an ARN for the organization-telemetry-rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.organizationTelemetryRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminOrganizationTelemetryRuleArnProps">ObservabilityadminOrganizationTelemetryRuleArnProps</a>

---

##### `parseOrganizationCentralizationRuleArn` <a name="parseOrganizationCentralizationRuleArn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseOrganizationCentralizationRuleArn"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.parseOrganizationCentralizationRuleArn(arn: string)
```

Parses a organization-centralization-rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseOrganizationCentralizationRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOrganizationTelemetryRuleArn` <a name="parseOrganizationTelemetryRuleArn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseOrganizationTelemetryRuleArn"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.parseOrganizationTelemetryRuleArn(arn: string)
```

Parses a organization-telemetry-rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseOrganizationTelemetryRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseS3tableintegrationArn` <a name="parseS3tableintegrationArn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseS3tableintegrationArn"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.parseS3tableintegrationArn(arn: string)
```

Parses a s3tableintegration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseS3tableintegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTelemetryPipelineArn` <a name="parseTelemetryPipelineArn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseTelemetryPipelineArn"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.parseTelemetryPipelineArn(arn: string)
```

Parses a telemetry-pipeline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseTelemetryPipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTelemetryRuleArn` <a name="parseTelemetryRuleArn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseTelemetryRuleArn"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.parseTelemetryRuleArn(arn: string)
```

Parses a telemetry-rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.parseTelemetryRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `s3tableintegration` <a name="s3tableintegration" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.s3tableintegration"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.s3tableintegration(props: ObservabilityadminS3tableintegrationArnProps)
```

Builds an ARN for the s3tableintegration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.s3tableintegration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminS3tableintegrationArnProps">ObservabilityadminS3tableintegrationArnProps</a>

---

##### `telemetryPipeline` <a name="telemetryPipeline" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.telemetryPipeline"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.telemetryPipeline(props: ObservabilityadminTelemetryPipelineArnProps)
```

Builds an ARN for the telemetry-pipeline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.telemetryPipeline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryPipelineArnProps">ObservabilityadminTelemetryPipelineArnProps</a>

---

##### `telemetryRule` <a name="telemetryRule" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.telemetryRule"></a>

```typescript
import { observabilityadmin } from '@cdk_utils/iam'

observabilityadmin.ObservabilityadminResources.telemetryRule(props: ObservabilityadminTelemetryRuleArnProps)
```

Builds an ARN for the telemetry-rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.observabilityadmin.ObservabilityadminResources.telemetryRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.observabilityadmin.ObservabilityadminTelemetryRuleArnProps">ObservabilityadminTelemetryRuleArnProps</a>

---




