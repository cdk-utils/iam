# `inspector2` Submodule <a name="`inspector2` Submodule" id="@cdk_utils/iam.inspector2"></a>


## Structs <a name="Structs" id="Structs"></a>

### Inspector2CisScanConfigurationArnComponents <a name="Inspector2CisScanConfigurationArnComponents" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents"></a>

Parsed components of a CIS Scan Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2CisScanConfigurationArnComponents: inspector2.Inspector2CisScanConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents.property.cisScanConfigurationId">cisScanConfigurationId</a></code> | <code>string</code> | The CISScanConfigurationId component. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents.property.ownerId">ownerId</a></code> | <code>string</code> | The OwnerId component. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cisScanConfigurationId`<sup>Required</sup> <a name="cisScanConfigurationId" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents.property.cisScanConfigurationId"></a>

```typescript
public readonly cisScanConfigurationId: string;
```

- *Type:* string

The CISScanConfigurationId component.

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

The OwnerId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Inspector2CisScanConfigurationArnProps <a name="Inspector2CisScanConfigurationArnProps" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps"></a>

Properties for building a CIS Scan Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2CisScanConfigurationArnProps: inspector2.Inspector2CisScanConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps.property.cisScanConfigurationId">cisScanConfigurationId</a></code> | <code>string</code> | The CISScanConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps.property.ownerId">ownerId</a></code> | <code>string</code> | The OwnerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cisScanConfigurationId`<sup>Required</sup> <a name="cisScanConfigurationId" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps.property.cisScanConfigurationId"></a>

```typescript
public readonly cisScanConfigurationId: string;
```

- *Type:* string

The CISScanConfigurationId component of the ARN.

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

The OwnerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Inspector2CodeSecurityIntegrationArnComponents <a name="Inspector2CodeSecurityIntegrationArnComponents" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnComponents"></a>

Parsed components of a Code Security Integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnComponents.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2CodeSecurityIntegrationArnComponents: inspector2.Inspector2CodeSecurityIntegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnComponents.property.codeSecurityIntegrationId">codeSecurityIntegrationId</a></code> | <code>string</code> | The CodeSecurityIntegrationId component. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `codeSecurityIntegrationId`<sup>Required</sup> <a name="codeSecurityIntegrationId" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnComponents.property.codeSecurityIntegrationId"></a>

```typescript
public readonly codeSecurityIntegrationId: string;
```

- *Type:* string

The CodeSecurityIntegrationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Inspector2CodeSecurityIntegrationArnProps <a name="Inspector2CodeSecurityIntegrationArnProps" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnProps"></a>

Properties for building a Code Security Integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnProps.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2CodeSecurityIntegrationArnProps: inspector2.Inspector2CodeSecurityIntegrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnProps.property.codeSecurityIntegrationId">codeSecurityIntegrationId</a></code> | <code>string</code> | The CodeSecurityIntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `codeSecurityIntegrationId`<sup>Required</sup> <a name="codeSecurityIntegrationId" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnProps.property.codeSecurityIntegrationId"></a>

```typescript
public readonly codeSecurityIntegrationId: string;
```

- *Type:* string

The CodeSecurityIntegrationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Inspector2CodeSecurityScanConfigurationArnComponents <a name="Inspector2CodeSecurityScanConfigurationArnComponents" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents"></a>

Parsed components of a Code Security Scan Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2CodeSecurityScanConfigurationArnComponents: inspector2.Inspector2CodeSecurityScanConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents.property.codeSecurityScanConfigurationId">codeSecurityScanConfigurationId</a></code> | <code>string</code> | The CodeSecurityScanConfigurationId component. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents.property.ownerId">ownerId</a></code> | <code>string</code> | The OwnerId component. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `codeSecurityScanConfigurationId`<sup>Required</sup> <a name="codeSecurityScanConfigurationId" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents.property.codeSecurityScanConfigurationId"></a>

```typescript
public readonly codeSecurityScanConfigurationId: string;
```

- *Type:* string

The CodeSecurityScanConfigurationId component.

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

The OwnerId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Inspector2CodeSecurityScanConfigurationArnProps <a name="Inspector2CodeSecurityScanConfigurationArnProps" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps"></a>

Properties for building a Code Security Scan Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2CodeSecurityScanConfigurationArnProps: inspector2.Inspector2CodeSecurityScanConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps.property.codeSecurityScanConfigurationId">codeSecurityScanConfigurationId</a></code> | <code>string</code> | The CodeSecurityScanConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps.property.ownerId">ownerId</a></code> | <code>string</code> | The OwnerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `codeSecurityScanConfigurationId`<sup>Required</sup> <a name="codeSecurityScanConfigurationId" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps.property.codeSecurityScanConfigurationId"></a>

```typescript
public readonly codeSecurityScanConfigurationId: string;
```

- *Type:* string

The CodeSecurityScanConfigurationId component of the ARN.

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

The OwnerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Inspector2ConnectorArnComponents <a name="Inspector2ConnectorArnComponents" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnComponents"></a>

Parsed components of a Connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnComponents.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2ConnectorArnComponents: inspector2.Inspector2ConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2ConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2ConnectorArnComponents.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2ConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2ConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnComponents.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Inspector2ConnectorArnProps <a name="Inspector2ConnectorArnProps" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnProps"></a>

Properties for building a Connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnProps.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2ConnectorArnProps: inspector2.Inspector2ConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2ConnectorArnProps.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2ConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2ConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2ConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnProps.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2ConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Inspector2FilterArnComponents <a name="Inspector2FilterArnComponents" id="@cdk_utils/iam.inspector2.Inspector2FilterArnComponents"></a>

Parsed components of a Filter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2FilterArnComponents.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2FilterArnComponents: inspector2.Inspector2FilterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FilterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FilterArnComponents.property.filterId">filterId</a></code> | <code>string</code> | The FilterId component. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FilterArnComponents.property.ownerId">ownerId</a></code> | <code>string</code> | The OwnerId component. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FilterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FilterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2FilterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `filterId`<sup>Required</sup> <a name="filterId" id="@cdk_utils/iam.inspector2.Inspector2FilterArnComponents.property.filterId"></a>

```typescript
public readonly filterId: string;
```

- *Type:* string

The FilterId component.

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdk_utils/iam.inspector2.Inspector2FilterArnComponents.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

The OwnerId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2FilterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2FilterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Inspector2FilterArnProps <a name="Inspector2FilterArnProps" id="@cdk_utils/iam.inspector2.Inspector2FilterArnProps"></a>

Properties for building a Filter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2FilterArnProps.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2FilterArnProps: inspector2.Inspector2FilterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FilterArnProps.property.filterId">filterId</a></code> | <code>string</code> | The FilterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FilterArnProps.property.ownerId">ownerId</a></code> | <code>string</code> | The OwnerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FilterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FilterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FilterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `filterId`<sup>Required</sup> <a name="filterId" id="@cdk_utils/iam.inspector2.Inspector2FilterArnProps.property.filterId"></a>

```typescript
public readonly filterId: string;
```

- *Type:* string

The FilterId component of the ARN.

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdk_utils/iam.inspector2.Inspector2FilterArnProps.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

The OwnerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2FilterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2FilterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2FilterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Inspector2FindingArnComponents <a name="Inspector2FindingArnComponents" id="@cdk_utils/iam.inspector2.Inspector2FindingArnComponents"></a>

Parsed components of a Finding ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2FindingArnComponents.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2FindingArnComponents: inspector2.Inspector2FindingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FindingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FindingArnComponents.property.findingId">findingId</a></code> | <code>string</code> | The FindingId component. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FindingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FindingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2FindingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `findingId`<sup>Required</sup> <a name="findingId" id="@cdk_utils/iam.inspector2.Inspector2FindingArnComponents.property.findingId"></a>

```typescript
public readonly findingId: string;
```

- *Type:* string

The FindingId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2FindingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2FindingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Inspector2FindingArnProps <a name="Inspector2FindingArnProps" id="@cdk_utils/iam.inspector2.Inspector2FindingArnProps"></a>

Properties for building a Finding ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.inspector2.Inspector2FindingArnProps.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

const inspector2FindingArnProps: inspector2.Inspector2FindingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FindingArnProps.property.findingId">findingId</a></code> | <code>string</code> | The FindingId component of the ARN. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FindingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FindingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2FindingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `findingId`<sup>Required</sup> <a name="findingId" id="@cdk_utils/iam.inspector2.Inspector2FindingArnProps.property.findingId"></a>

```typescript
public readonly findingId: string;
```

- *Type:* string

The FindingId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.inspector2.Inspector2FindingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.inspector2.Inspector2FindingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.inspector2.Inspector2FindingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### Inspector2Actions <a name="Inspector2Actions" id="@cdk_utils/iam.inspector2.Inspector2Actions"></a>

IAM action constants for the inspector2 service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.inspector2.Inspector2Actions.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

new inspector2.Inspector2Actions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetCisScanReport">actionGetCisScanReport</a></code> | <code>string</code> | [Read] inspector2:GetCisScanReport. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetCisScanResultDetails">actionGetCisScanResultDetails</a></code> | <code>string</code> | [List] inspector2:GetCisScanResultDetails. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetClustersForImage">actionGetClustersForImage</a></code> | <code>string</code> | [Read] inspector2:GetClustersForImage. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetCodeSecurityIntegration">actionGetCodeSecurityIntegration</a></code> | <code>string</code> | [Read] inspector2:GetCodeSecurityIntegration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetCodeSecurityScan">actionGetCodeSecurityScan</a></code> | <code>string</code> | [Read] inspector2:GetCodeSecurityScan. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetCodeSecurityScanConfiguration">actionGetCodeSecurityScanConfiguration</a></code> | <code>string</code> | [Read] inspector2:GetCodeSecurityScanConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetConfiguration">actionGetConfiguration</a></code> | <code>string</code> | [Read] inspector2:GetConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetDelegatedAdminAccount">actionGetDelegatedAdminAccount</a></code> | <code>string</code> | [Read] inspector2:GetDelegatedAdminAccount. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetEc2DeepInspectionConfiguration">actionGetEc2DeepInspectionConfiguration</a></code> | <code>string</code> | [Read] inspector2:GetEc2DeepInspectionConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetEncryptionKey">actionGetEncryptionKey</a></code> | <code>string</code> | [Read] inspector2:GetEncryptionKey. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetFindingsReportStatus">actionGetFindingsReportStatus</a></code> | <code>string</code> | [Read] inspector2:GetFindingsReportStatus. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetMember">actionGetMember</a></code> | <code>string</code> | [Read] inspector2:GetMember. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetSbomExport">actionGetSbomExport</a></code> | <code>string</code> | [Read] inspector2:GetSbomExport. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.AssociateMember">AssociateMember</a></code> | <code>string</code> | [Write] inspector2:AssociateMember. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchAssociateCodeSecurityScanConfiguration">BatchAssociateCodeSecurityScanConfiguration</a></code> | <code>string</code> | [Write] inspector2:BatchAssociateCodeSecurityScanConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchDisassociateCodeSecurityScanConfiguration">BatchDisassociateCodeSecurityScanConfiguration</a></code> | <code>string</code> | [Write] inspector2:BatchDisassociateCodeSecurityScanConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchGetAccountStatus">BatchGetAccountStatus</a></code> | <code>string</code> | [Read] inspector2:BatchGetAccountStatus. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchGetCodeSnippet">BatchGetCodeSnippet</a></code> | <code>string</code> | [Read] inspector2:BatchGetCodeSnippet. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchGetFindingDetails">BatchGetFindingDetails</a></code> | <code>string</code> | [Read] inspector2:BatchGetFindingDetails. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchGetFreeTrialInfo">BatchGetFreeTrialInfo</a></code> | <code>string</code> | [Read] inspector2:BatchGetFreeTrialInfo. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchGetMemberEc2DeepInspectionStatus">BatchGetMemberEc2DeepInspectionStatus</a></code> | <code>string</code> | [Read] inspector2:BatchGetMemberEc2DeepInspectionStatus. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchUpdateMemberEc2DeepInspectionStatus">BatchUpdateMemberEc2DeepInspectionStatus</a></code> | <code>string</code> | [Write] inspector2:BatchUpdateMemberEc2DeepInspectionStatus. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.CancelFindingsReport">CancelFindingsReport</a></code> | <code>string</code> | [Write] inspector2:CancelFindingsReport. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.CancelSbomExport">CancelSbomExport</a></code> | <code>string</code> | [Write] inspector2:CancelSbomExport. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateCisScanConfiguration">CreateCisScanConfiguration</a></code> | <code>string</code> | [Write] inspector2:CreateCisScanConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateCodeSecurityIntegration">CreateCodeSecurityIntegration</a></code> | <code>string</code> | [Write] inspector2:CreateCodeSecurityIntegration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateCodeSecurityScanConfiguration">CreateCodeSecurityScanConfiguration</a></code> | <code>string</code> | [Write] inspector2:CreateCodeSecurityScanConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateConnector">CreateConnector</a></code> | <code>string</code> | [Write] inspector2:CreateConnector. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateFilter">CreateFilter</a></code> | <code>string</code> | [Write] inspector2:CreateFilter. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateFindingsReport">CreateFindingsReport</a></code> | <code>string</code> | [Write] inspector2:CreateFindingsReport. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateSbomExport">CreateSbomExport</a></code> | <code>string</code> | [Write] inspector2:CreateSbomExport. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.DeleteCisScanConfiguration">DeleteCisScanConfiguration</a></code> | <code>string</code> | [Write] inspector2:DeleteCisScanConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.DeleteCodeSecurityIntegration">DeleteCodeSecurityIntegration</a></code> | <code>string</code> | [Write] inspector2:DeleteCodeSecurityIntegration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.DeleteCodeSecurityScanConfiguration">DeleteCodeSecurityScanConfiguration</a></code> | <code>string</code> | [Write] inspector2:DeleteCodeSecurityScanConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.DeleteConnector">DeleteConnector</a></code> | <code>string</code> | [Write] inspector2:DeleteConnector. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.DeleteFilter">DeleteFilter</a></code> | <code>string</code> | [Write] inspector2:DeleteFilter. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.DescribeOrganizationConfiguration">DescribeOrganizationConfiguration</a></code> | <code>string</code> | [Read] inspector2:DescribeOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.Disable">Disable</a></code> | <code>string</code> | [Write] inspector2:Disable. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.DisableDelegatedAdminAccount">DisableDelegatedAdminAccount</a></code> | <code>string</code> | [Write] inspector2:DisableDelegatedAdminAccount. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.DisassociateMember">DisassociateMember</a></code> | <code>string</code> | [Write] inspector2:DisassociateMember. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.Enable">Enable</a></code> | <code>string</code> | [Write] inspector2:Enable. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.EnableDelegatedAdminAccount">EnableDelegatedAdminAccount</a></code> | <code>string</code> | [Write] inspector2:EnableDelegatedAdminAccount. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListAccountPermissions">ListAccountPermissions</a></code> | <code>string</code> | [List] inspector2:ListAccountPermissions. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCisScanConfigurations">ListCisScanConfigurations</a></code> | <code>string</code> | [List] inspector2:ListCisScanConfigurations. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCisScanResultsAggregatedByChecks">ListCisScanResultsAggregatedByChecks</a></code> | <code>string</code> | [List] inspector2:ListCisScanResultsAggregatedByChecks. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCisScanResultsAggregatedByTargetResource">ListCisScanResultsAggregatedByTargetResource</a></code> | <code>string</code> | [List] inspector2:ListCisScanResultsAggregatedByTargetResource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCisScans">ListCisScans</a></code> | <code>string</code> | [List] inspector2:ListCisScans. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCodeSecurityIntegrations">ListCodeSecurityIntegrations</a></code> | <code>string</code> | [List] inspector2:ListCodeSecurityIntegrations. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCodeSecurityScanConfigurationAssociations">ListCodeSecurityScanConfigurationAssociations</a></code> | <code>string</code> | [List] inspector2:ListCodeSecurityScanConfigurationAssociations. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCodeSecurityScanConfigurations">ListCodeSecurityScanConfigurations</a></code> | <code>string</code> | [List] inspector2:ListCodeSecurityScanConfigurations. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListConnectors">ListConnectors</a></code> | <code>string</code> | [List] inspector2:ListConnectors. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListConnectorScanConfigurations">ListConnectorScanConfigurations</a></code> | <code>string</code> | [List] inspector2:ListConnectorScanConfigurations. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCoverage">ListCoverage</a></code> | <code>string</code> | [List] inspector2:ListCoverage. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCoverageStatistics">ListCoverageStatistics</a></code> | <code>string</code> | [List] inspector2:ListCoverageStatistics. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListDelegatedAdminAccounts">ListDelegatedAdminAccounts</a></code> | <code>string</code> | [List] inspector2:ListDelegatedAdminAccounts. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListFilters">ListFilters</a></code> | <code>string</code> | [List] inspector2:ListFilters. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListFindingAggregations">ListFindingAggregations</a></code> | <code>string</code> | [List] inspector2:ListFindingAggregations. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListFindings">ListFindings</a></code> | <code>string</code> | [List] inspector2:ListFindings. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListMembers">ListMembers</a></code> | <code>string</code> | [List] inspector2:ListMembers. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] inspector2:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ListUsageTotals">ListUsageTotals</a></code> | <code>string</code> | [List] inspector2:ListUsageTotals. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.ResetEncryptionKey">ResetEncryptionKey</a></code> | <code>string</code> | [Write] inspector2:ResetEncryptionKey. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.SearchVulnerabilities">SearchVulnerabilities</a></code> | <code>string</code> | [Read] inspector2:SearchVulnerabilities. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.SendCisSessionHealth">SendCisSessionHealth</a></code> | <code>string</code> | [Write] inspector2:SendCisSessionHealth. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.SendCisSessionTelemetry">SendCisSessionTelemetry</a></code> | <code>string</code> | [Write] inspector2:SendCisSessionTelemetry. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.StartCisSession">StartCisSession</a></code> | <code>string</code> | [Write] inspector2:StartCisSession. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.StartCodeSecurityScan">StartCodeSecurityScan</a></code> | <code>string</code> | [Write] inspector2:StartCodeSecurityScan. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.StopCisSession">StopCisSession</a></code> | <code>string</code> | [Write] inspector2:StopCisSession. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] inspector2:TagResource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] inspector2:UntagResource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateCisScanConfiguration">UpdateCisScanConfiguration</a></code> | <code>string</code> | [Write] inspector2:UpdateCisScanConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateCodeSecurityIntegration">UpdateCodeSecurityIntegration</a></code> | <code>string</code> | [Write] inspector2:UpdateCodeSecurityIntegration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateCodeSecurityScanConfiguration">UpdateCodeSecurityScanConfiguration</a></code> | <code>string</code> | [Write] inspector2:UpdateCodeSecurityScanConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateConfiguration">UpdateConfiguration</a></code> | <code>string</code> | [Write] inspector2:UpdateConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateConnector">UpdateConnector</a></code> | <code>string</code> | [Write] inspector2:UpdateConnector. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateConnectorScanConfiguration">UpdateConnectorScanConfiguration</a></code> | <code>string</code> | [Write] inspector2:UpdateConnectorScanConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateEc2DeepInspectionConfiguration">UpdateEc2DeepInspectionConfiguration</a></code> | <code>string</code> | [Write] inspector2:UpdateEc2DeepInspectionConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateEncryptionKey">UpdateEncryptionKey</a></code> | <code>string</code> | [Write] inspector2:UpdateEncryptionKey. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateFilter">UpdateFilter</a></code> | <code>string</code> | [Write] inspector2:UpdateFilter. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateOrganizationConfiguration">UpdateOrganizationConfiguration</a></code> | <code>string</code> | [Write] inspector2:UpdateOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateOrgEc2DeepInspectionConfiguration">UpdateOrgEc2DeepInspectionConfiguration</a></code> | <code>string</code> | [Write] inspector2:UpdateOrgEc2DeepInspectionConfiguration. |

---

##### `actionGetCisScanReport`<sup>Required</sup> <a name="actionGetCisScanReport" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetCisScanReport"></a>

```typescript
public readonly actionGetCisScanReport: string;
```

- *Type:* string

[Read] inspector2:GetCisScanReport.

---

##### `actionGetCisScanResultDetails`<sup>Required</sup> <a name="actionGetCisScanResultDetails" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetCisScanResultDetails"></a>

```typescript
public readonly actionGetCisScanResultDetails: string;
```

- *Type:* string

[List] inspector2:GetCisScanResultDetails.

---

##### `actionGetClustersForImage`<sup>Required</sup> <a name="actionGetClustersForImage" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetClustersForImage"></a>

```typescript
public readonly actionGetClustersForImage: string;
```

- *Type:* string

[Read] inspector2:GetClustersForImage.

---

##### `actionGetCodeSecurityIntegration`<sup>Required</sup> <a name="actionGetCodeSecurityIntegration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetCodeSecurityIntegration"></a>

```typescript
public readonly actionGetCodeSecurityIntegration: string;
```

- *Type:* string

[Read] inspector2:GetCodeSecurityIntegration.

---

##### `actionGetCodeSecurityScan`<sup>Required</sup> <a name="actionGetCodeSecurityScan" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetCodeSecurityScan"></a>

```typescript
public readonly actionGetCodeSecurityScan: string;
```

- *Type:* string

[Read] inspector2:GetCodeSecurityScan.

---

##### `actionGetCodeSecurityScanConfiguration`<sup>Required</sup> <a name="actionGetCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetCodeSecurityScanConfiguration"></a>

```typescript
public readonly actionGetCodeSecurityScanConfiguration: string;
```

- *Type:* string

[Read] inspector2:GetCodeSecurityScanConfiguration.

---

##### `actionGetConfiguration`<sup>Required</sup> <a name="actionGetConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetConfiguration"></a>

```typescript
public readonly actionGetConfiguration: string;
```

- *Type:* string

[Read] inspector2:GetConfiguration.

---

##### `actionGetDelegatedAdminAccount`<sup>Required</sup> <a name="actionGetDelegatedAdminAccount" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetDelegatedAdminAccount"></a>

```typescript
public readonly actionGetDelegatedAdminAccount: string;
```

- *Type:* string

[Read] inspector2:GetDelegatedAdminAccount.

---

##### `actionGetEc2DeepInspectionConfiguration`<sup>Required</sup> <a name="actionGetEc2DeepInspectionConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetEc2DeepInspectionConfiguration"></a>

```typescript
public readonly actionGetEc2DeepInspectionConfiguration: string;
```

- *Type:* string

[Read] inspector2:GetEc2DeepInspectionConfiguration.

---

##### `actionGetEncryptionKey`<sup>Required</sup> <a name="actionGetEncryptionKey" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetEncryptionKey"></a>

```typescript
public readonly actionGetEncryptionKey: string;
```

- *Type:* string

[Read] inspector2:GetEncryptionKey.

---

##### `actionGetFindingsReportStatus`<sup>Required</sup> <a name="actionGetFindingsReportStatus" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetFindingsReportStatus"></a>

```typescript
public readonly actionGetFindingsReportStatus: string;
```

- *Type:* string

[Read] inspector2:GetFindingsReportStatus.

---

##### `actionGetMember`<sup>Required</sup> <a name="actionGetMember" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetMember"></a>

```typescript
public readonly actionGetMember: string;
```

- *Type:* string

[Read] inspector2:GetMember.

---

##### `actionGetSbomExport`<sup>Required</sup> <a name="actionGetSbomExport" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.actionGetSbomExport"></a>

```typescript
public readonly actionGetSbomExport: string;
```

- *Type:* string

[Read] inspector2:GetSbomExport.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateMember`<sup>Required</sup> <a name="AssociateMember" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.AssociateMember"></a>

```typescript
public readonly AssociateMember: string;
```

- *Type:* string

[Write] inspector2:AssociateMember.

---

##### `BatchAssociateCodeSecurityScanConfiguration`<sup>Required</sup> <a name="BatchAssociateCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchAssociateCodeSecurityScanConfiguration"></a>

```typescript
public readonly BatchAssociateCodeSecurityScanConfiguration: string;
```

- *Type:* string

[Write] inspector2:BatchAssociateCodeSecurityScanConfiguration.

---

##### `BatchDisassociateCodeSecurityScanConfiguration`<sup>Required</sup> <a name="BatchDisassociateCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchDisassociateCodeSecurityScanConfiguration"></a>

```typescript
public readonly BatchDisassociateCodeSecurityScanConfiguration: string;
```

- *Type:* string

[Write] inspector2:BatchDisassociateCodeSecurityScanConfiguration.

---

##### `BatchGetAccountStatus`<sup>Required</sup> <a name="BatchGetAccountStatus" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchGetAccountStatus"></a>

```typescript
public readonly BatchGetAccountStatus: string;
```

- *Type:* string

[Read] inspector2:BatchGetAccountStatus.

---

##### `BatchGetCodeSnippet`<sup>Required</sup> <a name="BatchGetCodeSnippet" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchGetCodeSnippet"></a>

```typescript
public readonly BatchGetCodeSnippet: string;
```

- *Type:* string

[Read] inspector2:BatchGetCodeSnippet.

---

##### `BatchGetFindingDetails`<sup>Required</sup> <a name="BatchGetFindingDetails" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchGetFindingDetails"></a>

```typescript
public readonly BatchGetFindingDetails: string;
```

- *Type:* string

[Read] inspector2:BatchGetFindingDetails.

---

##### `BatchGetFreeTrialInfo`<sup>Required</sup> <a name="BatchGetFreeTrialInfo" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchGetFreeTrialInfo"></a>

```typescript
public readonly BatchGetFreeTrialInfo: string;
```

- *Type:* string

[Read] inspector2:BatchGetFreeTrialInfo.

---

##### `BatchGetMemberEc2DeepInspectionStatus`<sup>Required</sup> <a name="BatchGetMemberEc2DeepInspectionStatus" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchGetMemberEc2DeepInspectionStatus"></a>

```typescript
public readonly BatchGetMemberEc2DeepInspectionStatus: string;
```

- *Type:* string

[Read] inspector2:BatchGetMemberEc2DeepInspectionStatus.

---

##### `BatchUpdateMemberEc2DeepInspectionStatus`<sup>Required</sup> <a name="BatchUpdateMemberEc2DeepInspectionStatus" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.BatchUpdateMemberEc2DeepInspectionStatus"></a>

```typescript
public readonly BatchUpdateMemberEc2DeepInspectionStatus: string;
```

- *Type:* string

[Write] inspector2:BatchUpdateMemberEc2DeepInspectionStatus.

---

##### `CancelFindingsReport`<sup>Required</sup> <a name="CancelFindingsReport" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.CancelFindingsReport"></a>

```typescript
public readonly CancelFindingsReport: string;
```

- *Type:* string

[Write] inspector2:CancelFindingsReport.

---

##### `CancelSbomExport`<sup>Required</sup> <a name="CancelSbomExport" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.CancelSbomExport"></a>

```typescript
public readonly CancelSbomExport: string;
```

- *Type:* string

[Write] inspector2:CancelSbomExport.

---

##### `CreateCisScanConfiguration`<sup>Required</sup> <a name="CreateCisScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateCisScanConfiguration"></a>

```typescript
public readonly CreateCisScanConfiguration: string;
```

- *Type:* string

[Write] inspector2:CreateCisScanConfiguration.

---

##### `CreateCodeSecurityIntegration`<sup>Required</sup> <a name="CreateCodeSecurityIntegration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateCodeSecurityIntegration"></a>

```typescript
public readonly CreateCodeSecurityIntegration: string;
```

- *Type:* string

[Write] inspector2:CreateCodeSecurityIntegration.

---

##### `CreateCodeSecurityScanConfiguration`<sup>Required</sup> <a name="CreateCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateCodeSecurityScanConfiguration"></a>

```typescript
public readonly CreateCodeSecurityScanConfiguration: string;
```

- *Type:* string

[Write] inspector2:CreateCodeSecurityScanConfiguration.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string;
```

- *Type:* string

[Write] inspector2:CreateConnector.

---

##### `CreateFilter`<sup>Required</sup> <a name="CreateFilter" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateFilter"></a>

```typescript
public readonly CreateFilter: string;
```

- *Type:* string

[Write] inspector2:CreateFilter.

---

##### `CreateFindingsReport`<sup>Required</sup> <a name="CreateFindingsReport" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateFindingsReport"></a>

```typescript
public readonly CreateFindingsReport: string;
```

- *Type:* string

[Write] inspector2:CreateFindingsReport.

---

##### `CreateSbomExport`<sup>Required</sup> <a name="CreateSbomExport" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.CreateSbomExport"></a>

```typescript
public readonly CreateSbomExport: string;
```

- *Type:* string

[Write] inspector2:CreateSbomExport.

---

##### `DeleteCisScanConfiguration`<sup>Required</sup> <a name="DeleteCisScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.DeleteCisScanConfiguration"></a>

```typescript
public readonly DeleteCisScanConfiguration: string;
```

- *Type:* string

[Write] inspector2:DeleteCisScanConfiguration.

---

##### `DeleteCodeSecurityIntegration`<sup>Required</sup> <a name="DeleteCodeSecurityIntegration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.DeleteCodeSecurityIntegration"></a>

```typescript
public readonly DeleteCodeSecurityIntegration: string;
```

- *Type:* string

[Write] inspector2:DeleteCodeSecurityIntegration.

---

##### `DeleteCodeSecurityScanConfiguration`<sup>Required</sup> <a name="DeleteCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.DeleteCodeSecurityScanConfiguration"></a>

```typescript
public readonly DeleteCodeSecurityScanConfiguration: string;
```

- *Type:* string

[Write] inspector2:DeleteCodeSecurityScanConfiguration.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string;
```

- *Type:* string

[Write] inspector2:DeleteConnector.

---

##### `DeleteFilter`<sup>Required</sup> <a name="DeleteFilter" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.DeleteFilter"></a>

```typescript
public readonly DeleteFilter: string;
```

- *Type:* string

[Write] inspector2:DeleteFilter.

---

##### `DescribeOrganizationConfiguration`<sup>Required</sup> <a name="DescribeOrganizationConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.DescribeOrganizationConfiguration"></a>

```typescript
public readonly DescribeOrganizationConfiguration: string;
```

- *Type:* string

[Read] inspector2:DescribeOrganizationConfiguration.

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.Disable"></a>

```typescript
public readonly Disable: string;
```

- *Type:* string

[Write] inspector2:Disable.

---

##### `DisableDelegatedAdminAccount`<sup>Required</sup> <a name="DisableDelegatedAdminAccount" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.DisableDelegatedAdminAccount"></a>

```typescript
public readonly DisableDelegatedAdminAccount: string;
```

- *Type:* string

[Write] inspector2:DisableDelegatedAdminAccount.

---

##### `DisassociateMember`<sup>Required</sup> <a name="DisassociateMember" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.DisassociateMember"></a>

```typescript
public readonly DisassociateMember: string;
```

- *Type:* string

[Write] inspector2:DisassociateMember.

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.Enable"></a>

```typescript
public readonly Enable: string;
```

- *Type:* string

[Write] inspector2:Enable.

---

##### `EnableDelegatedAdminAccount`<sup>Required</sup> <a name="EnableDelegatedAdminAccount" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.EnableDelegatedAdminAccount"></a>

```typescript
public readonly EnableDelegatedAdminAccount: string;
```

- *Type:* string

[Write] inspector2:EnableDelegatedAdminAccount.

---

##### `ListAccountPermissions`<sup>Required</sup> <a name="ListAccountPermissions" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListAccountPermissions"></a>

```typescript
public readonly ListAccountPermissions: string;
```

- *Type:* string

[List] inspector2:ListAccountPermissions.

---

##### `ListCisScanConfigurations`<sup>Required</sup> <a name="ListCisScanConfigurations" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCisScanConfigurations"></a>

```typescript
public readonly ListCisScanConfigurations: string;
```

- *Type:* string

[List] inspector2:ListCisScanConfigurations.

---

##### `ListCisScanResultsAggregatedByChecks`<sup>Required</sup> <a name="ListCisScanResultsAggregatedByChecks" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCisScanResultsAggregatedByChecks"></a>

```typescript
public readonly ListCisScanResultsAggregatedByChecks: string;
```

- *Type:* string

[List] inspector2:ListCisScanResultsAggregatedByChecks.

---

##### `ListCisScanResultsAggregatedByTargetResource`<sup>Required</sup> <a name="ListCisScanResultsAggregatedByTargetResource" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCisScanResultsAggregatedByTargetResource"></a>

```typescript
public readonly ListCisScanResultsAggregatedByTargetResource: string;
```

- *Type:* string

[List] inspector2:ListCisScanResultsAggregatedByTargetResource.

---

##### `ListCisScans`<sup>Required</sup> <a name="ListCisScans" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCisScans"></a>

```typescript
public readonly ListCisScans: string;
```

- *Type:* string

[List] inspector2:ListCisScans.

---

##### `ListCodeSecurityIntegrations`<sup>Required</sup> <a name="ListCodeSecurityIntegrations" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCodeSecurityIntegrations"></a>

```typescript
public readonly ListCodeSecurityIntegrations: string;
```

- *Type:* string

[List] inspector2:ListCodeSecurityIntegrations.

---

##### `ListCodeSecurityScanConfigurationAssociations`<sup>Required</sup> <a name="ListCodeSecurityScanConfigurationAssociations" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCodeSecurityScanConfigurationAssociations"></a>

```typescript
public readonly ListCodeSecurityScanConfigurationAssociations: string;
```

- *Type:* string

[List] inspector2:ListCodeSecurityScanConfigurationAssociations.

---

##### `ListCodeSecurityScanConfigurations`<sup>Required</sup> <a name="ListCodeSecurityScanConfigurations" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCodeSecurityScanConfigurations"></a>

```typescript
public readonly ListCodeSecurityScanConfigurations: string;
```

- *Type:* string

[List] inspector2:ListCodeSecurityScanConfigurations.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string;
```

- *Type:* string

[List] inspector2:ListConnectors.

---

##### `ListConnectorScanConfigurations`<sup>Required</sup> <a name="ListConnectorScanConfigurations" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListConnectorScanConfigurations"></a>

```typescript
public readonly ListConnectorScanConfigurations: string;
```

- *Type:* string

[List] inspector2:ListConnectorScanConfigurations.

---

##### `ListCoverage`<sup>Required</sup> <a name="ListCoverage" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCoverage"></a>

```typescript
public readonly ListCoverage: string;
```

- *Type:* string

[List] inspector2:ListCoverage.

---

##### `ListCoverageStatistics`<sup>Required</sup> <a name="ListCoverageStatistics" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListCoverageStatistics"></a>

```typescript
public readonly ListCoverageStatistics: string;
```

- *Type:* string

[List] inspector2:ListCoverageStatistics.

---

##### `ListDelegatedAdminAccounts`<sup>Required</sup> <a name="ListDelegatedAdminAccounts" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListDelegatedAdminAccounts"></a>

```typescript
public readonly ListDelegatedAdminAccounts: string;
```

- *Type:* string

[List] inspector2:ListDelegatedAdminAccounts.

---

##### `ListFilters`<sup>Required</sup> <a name="ListFilters" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListFilters"></a>

```typescript
public readonly ListFilters: string;
```

- *Type:* string

[List] inspector2:ListFilters.

---

##### `ListFindingAggregations`<sup>Required</sup> <a name="ListFindingAggregations" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListFindingAggregations"></a>

```typescript
public readonly ListFindingAggregations: string;
```

- *Type:* string

[List] inspector2:ListFindingAggregations.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListFindings"></a>

```typescript
public readonly ListFindings: string;
```

- *Type:* string

[List] inspector2:ListFindings.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListMembers"></a>

```typescript
public readonly ListMembers: string;
```

- *Type:* string

[List] inspector2:ListMembers.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] inspector2:ListTagsForResource.

---

##### `ListUsageTotals`<sup>Required</sup> <a name="ListUsageTotals" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ListUsageTotals"></a>

```typescript
public readonly ListUsageTotals: string;
```

- *Type:* string

[List] inspector2:ListUsageTotals.

---

##### `ResetEncryptionKey`<sup>Required</sup> <a name="ResetEncryptionKey" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.ResetEncryptionKey"></a>

```typescript
public readonly ResetEncryptionKey: string;
```

- *Type:* string

[Write] inspector2:ResetEncryptionKey.

---

##### `SearchVulnerabilities`<sup>Required</sup> <a name="SearchVulnerabilities" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.SearchVulnerabilities"></a>

```typescript
public readonly SearchVulnerabilities: string;
```

- *Type:* string

[Read] inspector2:SearchVulnerabilities.

---

##### `SendCisSessionHealth`<sup>Required</sup> <a name="SendCisSessionHealth" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.SendCisSessionHealth"></a>

```typescript
public readonly SendCisSessionHealth: string;
```

- *Type:* string

[Write] inspector2:SendCisSessionHealth.

---

##### `SendCisSessionTelemetry`<sup>Required</sup> <a name="SendCisSessionTelemetry" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.SendCisSessionTelemetry"></a>

```typescript
public readonly SendCisSessionTelemetry: string;
```

- *Type:* string

[Write] inspector2:SendCisSessionTelemetry.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCisSession`<sup>Required</sup> <a name="StartCisSession" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.StartCisSession"></a>

```typescript
public readonly StartCisSession: string;
```

- *Type:* string

[Write] inspector2:StartCisSession.

---

##### `StartCodeSecurityScan`<sup>Required</sup> <a name="StartCodeSecurityScan" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.StartCodeSecurityScan"></a>

```typescript
public readonly StartCodeSecurityScan: string;
```

- *Type:* string

[Write] inspector2:StartCodeSecurityScan.

---

##### `StopCisSession`<sup>Required</sup> <a name="StopCisSession" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.StopCisSession"></a>

```typescript
public readonly StopCisSession: string;
```

- *Type:* string

[Write] inspector2:StopCisSession.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] inspector2:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] inspector2:UntagResource.

---

##### `UpdateCisScanConfiguration`<sup>Required</sup> <a name="UpdateCisScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateCisScanConfiguration"></a>

```typescript
public readonly UpdateCisScanConfiguration: string;
```

- *Type:* string

[Write] inspector2:UpdateCisScanConfiguration.

---

##### `UpdateCodeSecurityIntegration`<sup>Required</sup> <a name="UpdateCodeSecurityIntegration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateCodeSecurityIntegration"></a>

```typescript
public readonly UpdateCodeSecurityIntegration: string;
```

- *Type:* string

[Write] inspector2:UpdateCodeSecurityIntegration.

---

##### `UpdateCodeSecurityScanConfiguration`<sup>Required</sup> <a name="UpdateCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateCodeSecurityScanConfiguration"></a>

```typescript
public readonly UpdateCodeSecurityScanConfiguration: string;
```

- *Type:* string

[Write] inspector2:UpdateCodeSecurityScanConfiguration.

---

##### `UpdateConfiguration`<sup>Required</sup> <a name="UpdateConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateConfiguration"></a>

```typescript
public readonly UpdateConfiguration: string;
```

- *Type:* string

[Write] inspector2:UpdateConfiguration.

---

##### `UpdateConnector`<sup>Required</sup> <a name="UpdateConnector" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateConnector"></a>

```typescript
public readonly UpdateConnector: string;
```

- *Type:* string

[Write] inspector2:UpdateConnector.

---

##### `UpdateConnectorScanConfiguration`<sup>Required</sup> <a name="UpdateConnectorScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateConnectorScanConfiguration"></a>

```typescript
public readonly UpdateConnectorScanConfiguration: string;
```

- *Type:* string

[Write] inspector2:UpdateConnectorScanConfiguration.

---

##### `UpdateEc2DeepInspectionConfiguration`<sup>Required</sup> <a name="UpdateEc2DeepInspectionConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateEc2DeepInspectionConfiguration"></a>

```typescript
public readonly UpdateEc2DeepInspectionConfiguration: string;
```

- *Type:* string

[Write] inspector2:UpdateEc2DeepInspectionConfiguration.

---

##### `UpdateEncryptionKey`<sup>Required</sup> <a name="UpdateEncryptionKey" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateEncryptionKey"></a>

```typescript
public readonly UpdateEncryptionKey: string;
```

- *Type:* string

[Write] inspector2:UpdateEncryptionKey.

---

##### `UpdateFilter`<sup>Required</sup> <a name="UpdateFilter" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateFilter"></a>

```typescript
public readonly UpdateFilter: string;
```

- *Type:* string

[Write] inspector2:UpdateFilter.

---

##### `UpdateOrganizationConfiguration`<sup>Required</sup> <a name="UpdateOrganizationConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateOrganizationConfiguration"></a>

```typescript
public readonly UpdateOrganizationConfiguration: string;
```

- *Type:* string

[Write] inspector2:UpdateOrganizationConfiguration.

---

##### `UpdateOrgEc2DeepInspectionConfiguration`<sup>Required</sup> <a name="UpdateOrgEc2DeepInspectionConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Actions.property.UpdateOrgEc2DeepInspectionConfiguration"></a>

```typescript
public readonly UpdateOrgEc2DeepInspectionConfiguration: string;
```

- *Type:* string

[Write] inspector2:UpdateOrgEc2DeepInspectionConfiguration.

---

### Inspector2Conditions <a name="Inspector2Conditions" id="@cdk_utils/iam.inspector2.Inspector2Conditions"></a>

Condition key constants and builders for inspector2.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.inspector2.Inspector2Conditions.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

new inspector2.Inspector2Conditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.inspector2.Inspector2Conditions.requestTag"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Conditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.inspector2.Inspector2Conditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.inspector2.Inspector2Conditions.resourceTag"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Conditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.inspector2.Inspector2Conditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.tagKeys"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Conditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.inspector2.Inspector2Conditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.CreateCisScanConfigurationConditionKeys">CreateCisScanConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCisScanConfiguration action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.CreateCodeSecurityIntegrationConditionKeys">CreateCodeSecurityIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCodeSecurityIntegration action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.CreateCodeSecurityScanConfigurationConditionKeys">CreateCodeSecurityScanConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCodeSecurityScanConfiguration action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.CreateConnectorConditionKeys">CreateConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnector action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.CreateFilterConditionKeys">CreateFilterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFilter action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.DeleteCisScanConfigurationConditionKeys">DeleteCisScanConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCisScanConfiguration action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.UpdateCisScanConfigurationConditionKeys">UpdateCisScanConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCisScanConfiguration action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.UpdateCodeSecurityIntegrationConditionKeys">UpdateCodeSecurityIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCodeSecurityIntegration action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.UpdateCodeSecurityScanConfigurationConditionKeys">UpdateCodeSecurityScanConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCodeSecurityScanConfiguration action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.UpdateConnectorConditionKeys">UpdateConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConnector action. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Conditions.property.UpdateFilterConditionKeys">UpdateFilterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateFilter action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCisScanConfigurationConditionKeys`<sup>Required</sup> <a name="CreateCisScanConfigurationConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.CreateCisScanConfigurationConditionKeys"></a>

```typescript
public readonly CreateCisScanConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCisScanConfiguration action.

---

##### `CreateCodeSecurityIntegrationConditionKeys`<sup>Required</sup> <a name="CreateCodeSecurityIntegrationConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.CreateCodeSecurityIntegrationConditionKeys"></a>

```typescript
public readonly CreateCodeSecurityIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCodeSecurityIntegration action.

---

##### `CreateCodeSecurityScanConfigurationConditionKeys`<sup>Required</sup> <a name="CreateCodeSecurityScanConfigurationConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.CreateCodeSecurityScanConfigurationConditionKeys"></a>

```typescript
public readonly CreateCodeSecurityScanConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCodeSecurityScanConfiguration action.

---

##### `CreateConnectorConditionKeys`<sup>Required</sup> <a name="CreateConnectorConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.CreateConnectorConditionKeys"></a>

```typescript
public readonly CreateConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnector action.

---

##### `CreateFilterConditionKeys`<sup>Required</sup> <a name="CreateFilterConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.CreateFilterConditionKeys"></a>

```typescript
public readonly CreateFilterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFilter action.

---

##### `DeleteCisScanConfigurationConditionKeys`<sup>Required</sup> <a name="DeleteCisScanConfigurationConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.DeleteCisScanConfigurationConditionKeys"></a>

```typescript
public readonly DeleteCisScanConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCisScanConfiguration action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateCisScanConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateCisScanConfigurationConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.UpdateCisScanConfigurationConditionKeys"></a>

```typescript
public readonly UpdateCisScanConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCisScanConfiguration action.

---

##### `UpdateCodeSecurityIntegrationConditionKeys`<sup>Required</sup> <a name="UpdateCodeSecurityIntegrationConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.UpdateCodeSecurityIntegrationConditionKeys"></a>

```typescript
public readonly UpdateCodeSecurityIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCodeSecurityIntegration action.

---

##### `UpdateCodeSecurityScanConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateCodeSecurityScanConfigurationConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.UpdateCodeSecurityScanConfigurationConditionKeys"></a>

```typescript
public readonly UpdateCodeSecurityScanConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCodeSecurityScanConfiguration action.

---

##### `UpdateConnectorConditionKeys`<sup>Required</sup> <a name="UpdateConnectorConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.UpdateConnectorConditionKeys"></a>

```typescript
public readonly UpdateConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConnector action.

---

##### `UpdateFilterConditionKeys`<sup>Required</sup> <a name="UpdateFilterConditionKeys" id="@cdk_utils/iam.inspector2.Inspector2Conditions.property.UpdateFilterConditionKeys"></a>

```typescript
public readonly UpdateFilterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateFilter action.

---

### Inspector2Operations <a name="Inspector2Operations" id="@cdk_utils/iam.inspector2.Inspector2Operations"></a>

API operation to required IAM actions mapping for inspector2.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.inspector2.Inspector2Operations.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

new inspector2.Inspector2Operations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.AssociateMember">AssociateMember</a></code> | <code>string[]</code> | IAM actions required for the AssociateMember API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchAssociateCodeSecurityScanConfiguration">BatchAssociateCodeSecurityScanConfiguration</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateCodeSecurityScanConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchDisassociateCodeSecurityScanConfiguration">BatchDisassociateCodeSecurityScanConfiguration</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateCodeSecurityScanConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchGetAccountStatus">BatchGetAccountStatus</a></code> | <code>string[]</code> | IAM actions required for the BatchGetAccountStatus API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchGetCodeSnippet">BatchGetCodeSnippet</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCodeSnippet API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchGetFindingDetails">BatchGetFindingDetails</a></code> | <code>string[]</code> | IAM actions required for the BatchGetFindingDetails API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchGetFreeTrialInfo">BatchGetFreeTrialInfo</a></code> | <code>string[]</code> | IAM actions required for the BatchGetFreeTrialInfo API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchGetMemberEc2DeepInspectionStatus">BatchGetMemberEc2DeepInspectionStatus</a></code> | <code>string[]</code> | IAM actions required for the BatchGetMemberEc2DeepInspectionStatus API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchUpdateMemberEc2DeepInspectionStatus">BatchUpdateMemberEc2DeepInspectionStatus</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateMemberEc2DeepInspectionStatus API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.CancelFindingsReport">CancelFindingsReport</a></code> | <code>string[]</code> | IAM actions required for the CancelFindingsReport API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.CancelSbomExport">CancelSbomExport</a></code> | <code>string[]</code> | IAM actions required for the CancelSbomExport API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateCisScanConfiguration">CreateCisScanConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateCisScanConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateCodeSecurityIntegration">CreateCodeSecurityIntegration</a></code> | <code>string[]</code> | IAM actions required for the CreateCodeSecurityIntegration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateCodeSecurityScanConfiguration">CreateCodeSecurityScanConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateCodeSecurityScanConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateConnector">CreateConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateConnector API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateFilter">CreateFilter</a></code> | <code>string[]</code> | IAM actions required for the CreateFilter API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateFindingsReport">CreateFindingsReport</a></code> | <code>string[]</code> | IAM actions required for the CreateFindingsReport API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateSbomExport">CreateSbomExport</a></code> | <code>string[]</code> | IAM actions required for the CreateSbomExport API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.DeleteCisScanConfiguration">DeleteCisScanConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteCisScanConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.DeleteCodeSecurityIntegration">DeleteCodeSecurityIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteCodeSecurityIntegration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.DeleteCodeSecurityScanConfiguration">DeleteCodeSecurityScanConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteCodeSecurityScanConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.DeleteConnector">DeleteConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnector API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.DeleteFilter">DeleteFilter</a></code> | <code>string[]</code> | IAM actions required for the DeleteFilter API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.DescribeOrganizationConfiguration">DescribeOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.Disable">Disable</a></code> | <code>string[]</code> | IAM actions required for the Disable API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.DisableDelegatedAdminAccount">DisableDelegatedAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the DisableDelegatedAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.DisassociateMember">DisassociateMember</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMember API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.Enable">Enable</a></code> | <code>string[]</code> | IAM actions required for the Enable API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.EnableDelegatedAdminAccount">EnableDelegatedAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the EnableDelegatedAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListAccountPermissions">ListAccountPermissions</a></code> | <code>string[]</code> | IAM actions required for the ListAccountPermissions API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCisScanConfigurations">ListCisScanConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListCisScanConfigurations API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCisScanResultsAggregatedByChecks">ListCisScanResultsAggregatedByChecks</a></code> | <code>string[]</code> | IAM actions required for the ListCisScanResultsAggregatedByChecks API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCisScanResultsAggregatedByTargetResource">ListCisScanResultsAggregatedByTargetResource</a></code> | <code>string[]</code> | IAM actions required for the ListCisScanResultsAggregatedByTargetResource API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCisScans">ListCisScans</a></code> | <code>string[]</code> | IAM actions required for the ListCisScans API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCodeSecurityIntegrations">ListCodeSecurityIntegrations</a></code> | <code>string[]</code> | IAM actions required for the ListCodeSecurityIntegrations API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCodeSecurityScanConfigurationAssociations">ListCodeSecurityScanConfigurationAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListCodeSecurityScanConfigurationAssociations API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCodeSecurityScanConfigurations">ListCodeSecurityScanConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListCodeSecurityScanConfigurations API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListConnectors">ListConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListConnectors API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListConnectorScanConfigurations">ListConnectorScanConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListConnectorScanConfigurations API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCoverage">ListCoverage</a></code> | <code>string[]</code> | IAM actions required for the ListCoverage API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCoverageStatistics">ListCoverageStatistics</a></code> | <code>string[]</code> | IAM actions required for the ListCoverageStatistics API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListDelegatedAdminAccounts">ListDelegatedAdminAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListDelegatedAdminAccounts API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListFilters">ListFilters</a></code> | <code>string[]</code> | IAM actions required for the ListFilters API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListFindingAggregations">ListFindingAggregations</a></code> | <code>string[]</code> | IAM actions required for the ListFindingAggregations API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListFindings">ListFindings</a></code> | <code>string[]</code> | IAM actions required for the ListFindings API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListMembers">ListMembers</a></code> | <code>string[]</code> | IAM actions required for the ListMembers API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ListUsageTotals">ListUsageTotals</a></code> | <code>string[]</code> | IAM actions required for the ListUsageTotals API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetCisScanReport">opGetCisScanReport</a></code> | <code>string[]</code> | IAM actions required for the GetCisScanReport API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetCisScanResultDetails">opGetCisScanResultDetails</a></code> | <code>string[]</code> | IAM actions required for the GetCisScanResultDetails API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetClustersForImage">opGetClustersForImage</a></code> | <code>string[]</code> | IAM actions required for the GetClustersForImage API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetCodeSecurityIntegration">opGetCodeSecurityIntegration</a></code> | <code>string[]</code> | IAM actions required for the GetCodeSecurityIntegration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetCodeSecurityScan">opGetCodeSecurityScan</a></code> | <code>string[]</code> | IAM actions required for the GetCodeSecurityScan API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetCodeSecurityScanConfiguration">opGetCodeSecurityScanConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetCodeSecurityScanConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetConfiguration">opGetConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetDelegatedAdminAccount">opGetDelegatedAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the GetDelegatedAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetEc2DeepInspectionConfiguration">opGetEc2DeepInspectionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetEc2DeepInspectionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetEncryptionKey">opGetEncryptionKey</a></code> | <code>string[]</code> | IAM actions required for the GetEncryptionKey API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetFindingsReportStatus">opGetFindingsReportStatus</a></code> | <code>string[]</code> | IAM actions required for the GetFindingsReportStatus API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetMember">opGetMember</a></code> | <code>string[]</code> | IAM actions required for the GetMember API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetSbomExport">opGetSbomExport</a></code> | <code>string[]</code> | IAM actions required for the GetSbomExport API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.ResetEncryptionKey">ResetEncryptionKey</a></code> | <code>string[]</code> | IAM actions required for the ResetEncryptionKey API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.SearchVulnerabilities">SearchVulnerabilities</a></code> | <code>string[]</code> | IAM actions required for the SearchVulnerabilities API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.SendCisSessionHealth">SendCisSessionHealth</a></code> | <code>string[]</code> | IAM actions required for the SendCisSessionHealth API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.SendCisSessionTelemetry">SendCisSessionTelemetry</a></code> | <code>string[]</code> | IAM actions required for the SendCisSessionTelemetry API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.StartCisSession">StartCisSession</a></code> | <code>string[]</code> | IAM actions required for the StartCisSession API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.StartCodeSecurityScan">StartCodeSecurityScan</a></code> | <code>string[]</code> | IAM actions required for the StartCodeSecurityScan API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.StopCisSession">StopCisSession</a></code> | <code>string[]</code> | IAM actions required for the StopCisSession API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateCisScanConfiguration">UpdateCisScanConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateCisScanConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateCodeSecurityIntegration">UpdateCodeSecurityIntegration</a></code> | <code>string[]</code> | IAM actions required for the UpdateCodeSecurityIntegration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateCodeSecurityScanConfiguration">UpdateCodeSecurityScanConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateCodeSecurityScanConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateConfiguration">UpdateConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateConnector">UpdateConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnector API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateConnectorScanConfiguration">UpdateConnectorScanConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectorScanConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateEc2DeepInspectionConfiguration">UpdateEc2DeepInspectionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateEc2DeepInspectionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateEncryptionKey">UpdateEncryptionKey</a></code> | <code>string[]</code> | IAM actions required for the UpdateEncryptionKey API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateFilter">UpdateFilter</a></code> | <code>string[]</code> | IAM actions required for the UpdateFilter API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateOrganizationConfiguration">UpdateOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateOrgEc2DeepInspectionConfiguration">UpdateOrgEc2DeepInspectionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateOrgEc2DeepInspectionConfiguration API call. |

---

##### `AssociateMember`<sup>Required</sup> <a name="AssociateMember" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.AssociateMember"></a>

```typescript
public readonly AssociateMember: string[];
```

- *Type:* string[]

IAM actions required for the AssociateMember API call.

---

##### `BatchAssociateCodeSecurityScanConfiguration`<sup>Required</sup> <a name="BatchAssociateCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchAssociateCodeSecurityScanConfiguration"></a>

```typescript
public readonly BatchAssociateCodeSecurityScanConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateCodeSecurityScanConfiguration API call.

---

##### `BatchDisassociateCodeSecurityScanConfiguration`<sup>Required</sup> <a name="BatchDisassociateCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchDisassociateCodeSecurityScanConfiguration"></a>

```typescript
public readonly BatchDisassociateCodeSecurityScanConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateCodeSecurityScanConfiguration API call.

---

##### `BatchGetAccountStatus`<sup>Required</sup> <a name="BatchGetAccountStatus" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchGetAccountStatus"></a>

```typescript
public readonly BatchGetAccountStatus: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetAccountStatus API call.

---

##### `BatchGetCodeSnippet`<sup>Required</sup> <a name="BatchGetCodeSnippet" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchGetCodeSnippet"></a>

```typescript
public readonly BatchGetCodeSnippet: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCodeSnippet API call.

---

##### `BatchGetFindingDetails`<sup>Required</sup> <a name="BatchGetFindingDetails" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchGetFindingDetails"></a>

```typescript
public readonly BatchGetFindingDetails: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetFindingDetails API call.

---

##### `BatchGetFreeTrialInfo`<sup>Required</sup> <a name="BatchGetFreeTrialInfo" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchGetFreeTrialInfo"></a>

```typescript
public readonly BatchGetFreeTrialInfo: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetFreeTrialInfo API call.

---

##### `BatchGetMemberEc2DeepInspectionStatus`<sup>Required</sup> <a name="BatchGetMemberEc2DeepInspectionStatus" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchGetMemberEc2DeepInspectionStatus"></a>

```typescript
public readonly BatchGetMemberEc2DeepInspectionStatus: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetMemberEc2DeepInspectionStatus API call.

---

##### `BatchUpdateMemberEc2DeepInspectionStatus`<sup>Required</sup> <a name="BatchUpdateMemberEc2DeepInspectionStatus" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.BatchUpdateMemberEc2DeepInspectionStatus"></a>

```typescript
public readonly BatchUpdateMemberEc2DeepInspectionStatus: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateMemberEc2DeepInspectionStatus API call.

---

##### `CancelFindingsReport`<sup>Required</sup> <a name="CancelFindingsReport" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.CancelFindingsReport"></a>

```typescript
public readonly CancelFindingsReport: string[];
```

- *Type:* string[]

IAM actions required for the CancelFindingsReport API call.

---

##### `CancelSbomExport`<sup>Required</sup> <a name="CancelSbomExport" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.CancelSbomExport"></a>

```typescript
public readonly CancelSbomExport: string[];
```

- *Type:* string[]

IAM actions required for the CancelSbomExport API call.

---

##### `CreateCisScanConfiguration`<sup>Required</sup> <a name="CreateCisScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateCisScanConfiguration"></a>

```typescript
public readonly CreateCisScanConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateCisScanConfiguration API call.

---

##### `CreateCodeSecurityIntegration`<sup>Required</sup> <a name="CreateCodeSecurityIntegration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateCodeSecurityIntegration"></a>

```typescript
public readonly CreateCodeSecurityIntegration: string[];
```

- *Type:* string[]

IAM actions required for the CreateCodeSecurityIntegration API call.

---

##### `CreateCodeSecurityScanConfiguration`<sup>Required</sup> <a name="CreateCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateCodeSecurityScanConfiguration"></a>

```typescript
public readonly CreateCodeSecurityScanConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateCodeSecurityScanConfiguration API call.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnector API call.

---

##### `CreateFilter`<sup>Required</sup> <a name="CreateFilter" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateFilter"></a>

```typescript
public readonly CreateFilter: string[];
```

- *Type:* string[]

IAM actions required for the CreateFilter API call.

---

##### `CreateFindingsReport`<sup>Required</sup> <a name="CreateFindingsReport" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateFindingsReport"></a>

```typescript
public readonly CreateFindingsReport: string[];
```

- *Type:* string[]

IAM actions required for the CreateFindingsReport API call.

---

##### `CreateSbomExport`<sup>Required</sup> <a name="CreateSbomExport" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.CreateSbomExport"></a>

```typescript
public readonly CreateSbomExport: string[];
```

- *Type:* string[]

IAM actions required for the CreateSbomExport API call.

---

##### `DeleteCisScanConfiguration`<sup>Required</sup> <a name="DeleteCisScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.DeleteCisScanConfiguration"></a>

```typescript
public readonly DeleteCisScanConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCisScanConfiguration API call.

---

##### `DeleteCodeSecurityIntegration`<sup>Required</sup> <a name="DeleteCodeSecurityIntegration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.DeleteCodeSecurityIntegration"></a>

```typescript
public readonly DeleteCodeSecurityIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCodeSecurityIntegration API call.

---

##### `DeleteCodeSecurityScanConfiguration`<sup>Required</sup> <a name="DeleteCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.DeleteCodeSecurityScanConfiguration"></a>

```typescript
public readonly DeleteCodeSecurityScanConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCodeSecurityScanConfiguration API call.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnector API call.

---

##### `DeleteFilter`<sup>Required</sup> <a name="DeleteFilter" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.DeleteFilter"></a>

```typescript
public readonly DeleteFilter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFilter API call.

---

##### `DescribeOrganizationConfiguration`<sup>Required</sup> <a name="DescribeOrganizationConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.DescribeOrganizationConfiguration"></a>

```typescript
public readonly DescribeOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationConfiguration API call.

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.Disable"></a>

```typescript
public readonly Disable: string[];
```

- *Type:* string[]

IAM actions required for the Disable API call.

---

##### `DisableDelegatedAdminAccount`<sup>Required</sup> <a name="DisableDelegatedAdminAccount" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.DisableDelegatedAdminAccount"></a>

```typescript
public readonly DisableDelegatedAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisableDelegatedAdminAccount API call.

---

##### `DisassociateMember`<sup>Required</sup> <a name="DisassociateMember" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.DisassociateMember"></a>

```typescript
public readonly DisassociateMember: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMember API call.

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.Enable"></a>

```typescript
public readonly Enable: string[];
```

- *Type:* string[]

IAM actions required for the Enable API call.

---

##### `EnableDelegatedAdminAccount`<sup>Required</sup> <a name="EnableDelegatedAdminAccount" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.EnableDelegatedAdminAccount"></a>

```typescript
public readonly EnableDelegatedAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the EnableDelegatedAdminAccount API call.

---

##### `ListAccountPermissions`<sup>Required</sup> <a name="ListAccountPermissions" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListAccountPermissions"></a>

```typescript
public readonly ListAccountPermissions: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountPermissions API call.

---

##### `ListCisScanConfigurations`<sup>Required</sup> <a name="ListCisScanConfigurations" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCisScanConfigurations"></a>

```typescript
public readonly ListCisScanConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListCisScanConfigurations API call.

---

##### `ListCisScanResultsAggregatedByChecks`<sup>Required</sup> <a name="ListCisScanResultsAggregatedByChecks" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCisScanResultsAggregatedByChecks"></a>

```typescript
public readonly ListCisScanResultsAggregatedByChecks: string[];
```

- *Type:* string[]

IAM actions required for the ListCisScanResultsAggregatedByChecks API call.

---

##### `ListCisScanResultsAggregatedByTargetResource`<sup>Required</sup> <a name="ListCisScanResultsAggregatedByTargetResource" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCisScanResultsAggregatedByTargetResource"></a>

```typescript
public readonly ListCisScanResultsAggregatedByTargetResource: string[];
```

- *Type:* string[]

IAM actions required for the ListCisScanResultsAggregatedByTargetResource API call.

---

##### `ListCisScans`<sup>Required</sup> <a name="ListCisScans" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCisScans"></a>

```typescript
public readonly ListCisScans: string[];
```

- *Type:* string[]

IAM actions required for the ListCisScans API call.

---

##### `ListCodeSecurityIntegrations`<sup>Required</sup> <a name="ListCodeSecurityIntegrations" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCodeSecurityIntegrations"></a>

```typescript
public readonly ListCodeSecurityIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeSecurityIntegrations API call.

---

##### `ListCodeSecurityScanConfigurationAssociations`<sup>Required</sup> <a name="ListCodeSecurityScanConfigurationAssociations" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCodeSecurityScanConfigurationAssociations"></a>

```typescript
public readonly ListCodeSecurityScanConfigurationAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeSecurityScanConfigurationAssociations API call.

---

##### `ListCodeSecurityScanConfigurations`<sup>Required</sup> <a name="ListCodeSecurityScanConfigurations" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCodeSecurityScanConfigurations"></a>

```typescript
public readonly ListCodeSecurityScanConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeSecurityScanConfigurations API call.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectors API call.

---

##### `ListConnectorScanConfigurations`<sup>Required</sup> <a name="ListConnectorScanConfigurations" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListConnectorScanConfigurations"></a>

```typescript
public readonly ListConnectorScanConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectorScanConfigurations API call.

---

##### `ListCoverage`<sup>Required</sup> <a name="ListCoverage" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCoverage"></a>

```typescript
public readonly ListCoverage: string[];
```

- *Type:* string[]

IAM actions required for the ListCoverage API call.

---

##### `ListCoverageStatistics`<sup>Required</sup> <a name="ListCoverageStatistics" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListCoverageStatistics"></a>

```typescript
public readonly ListCoverageStatistics: string[];
```

- *Type:* string[]

IAM actions required for the ListCoverageStatistics API call.

---

##### `ListDelegatedAdminAccounts`<sup>Required</sup> <a name="ListDelegatedAdminAccounts" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListDelegatedAdminAccounts"></a>

```typescript
public readonly ListDelegatedAdminAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListDelegatedAdminAccounts API call.

---

##### `ListFilters`<sup>Required</sup> <a name="ListFilters" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListFilters"></a>

```typescript
public readonly ListFilters: string[];
```

- *Type:* string[]

IAM actions required for the ListFilters API call.

---

##### `ListFindingAggregations`<sup>Required</sup> <a name="ListFindingAggregations" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListFindingAggregations"></a>

```typescript
public readonly ListFindingAggregations: string[];
```

- *Type:* string[]

IAM actions required for the ListFindingAggregations API call.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListFindings"></a>

```typescript
public readonly ListFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListFindings API call.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListMembers"></a>

```typescript
public readonly ListMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListMembers API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListUsageTotals`<sup>Required</sup> <a name="ListUsageTotals" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ListUsageTotals"></a>

```typescript
public readonly ListUsageTotals: string[];
```

- *Type:* string[]

IAM actions required for the ListUsageTotals API call.

---

##### `opGetCisScanReport`<sup>Required</sup> <a name="opGetCisScanReport" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetCisScanReport"></a>

```typescript
public readonly opGetCisScanReport: string[];
```

- *Type:* string[]

IAM actions required for the GetCisScanReport API call.

---

##### `opGetCisScanResultDetails`<sup>Required</sup> <a name="opGetCisScanResultDetails" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetCisScanResultDetails"></a>

```typescript
public readonly opGetCisScanResultDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetCisScanResultDetails API call.

---

##### `opGetClustersForImage`<sup>Required</sup> <a name="opGetClustersForImage" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetClustersForImage"></a>

```typescript
public readonly opGetClustersForImage: string[];
```

- *Type:* string[]

IAM actions required for the GetClustersForImage API call.

---

##### `opGetCodeSecurityIntegration`<sup>Required</sup> <a name="opGetCodeSecurityIntegration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetCodeSecurityIntegration"></a>

```typescript
public readonly opGetCodeSecurityIntegration: string[];
```

- *Type:* string[]

IAM actions required for the GetCodeSecurityIntegration API call.

---

##### `opGetCodeSecurityScan`<sup>Required</sup> <a name="opGetCodeSecurityScan" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetCodeSecurityScan"></a>

```typescript
public readonly opGetCodeSecurityScan: string[];
```

- *Type:* string[]

IAM actions required for the GetCodeSecurityScan API call.

---

##### `opGetCodeSecurityScanConfiguration`<sup>Required</sup> <a name="opGetCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetCodeSecurityScanConfiguration"></a>

```typescript
public readonly opGetCodeSecurityScanConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetCodeSecurityScanConfiguration API call.

---

##### `opGetConfiguration`<sup>Required</sup> <a name="opGetConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetConfiguration"></a>

```typescript
public readonly opGetConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetConfiguration API call.

---

##### `opGetDelegatedAdminAccount`<sup>Required</sup> <a name="opGetDelegatedAdminAccount" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetDelegatedAdminAccount"></a>

```typescript
public readonly opGetDelegatedAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetDelegatedAdminAccount API call.

---

##### `opGetEc2DeepInspectionConfiguration`<sup>Required</sup> <a name="opGetEc2DeepInspectionConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetEc2DeepInspectionConfiguration"></a>

```typescript
public readonly opGetEc2DeepInspectionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetEc2DeepInspectionConfiguration API call.

---

##### `opGetEncryptionKey`<sup>Required</sup> <a name="opGetEncryptionKey" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetEncryptionKey"></a>

```typescript
public readonly opGetEncryptionKey: string[];
```

- *Type:* string[]

IAM actions required for the GetEncryptionKey API call.

---

##### `opGetFindingsReportStatus`<sup>Required</sup> <a name="opGetFindingsReportStatus" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetFindingsReportStatus"></a>

```typescript
public readonly opGetFindingsReportStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingsReportStatus API call.

---

##### `opGetMember`<sup>Required</sup> <a name="opGetMember" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetMember"></a>

```typescript
public readonly opGetMember: string[];
```

- *Type:* string[]

IAM actions required for the GetMember API call.

---

##### `opGetSbomExport`<sup>Required</sup> <a name="opGetSbomExport" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.opGetSbomExport"></a>

```typescript
public readonly opGetSbomExport: string[];
```

- *Type:* string[]

IAM actions required for the GetSbomExport API call.

---

##### `ResetEncryptionKey`<sup>Required</sup> <a name="ResetEncryptionKey" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.ResetEncryptionKey"></a>

```typescript
public readonly ResetEncryptionKey: string[];
```

- *Type:* string[]

IAM actions required for the ResetEncryptionKey API call.

---

##### `SearchVulnerabilities`<sup>Required</sup> <a name="SearchVulnerabilities" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.SearchVulnerabilities"></a>

```typescript
public readonly SearchVulnerabilities: string[];
```

- *Type:* string[]

IAM actions required for the SearchVulnerabilities API call.

---

##### `SendCisSessionHealth`<sup>Required</sup> <a name="SendCisSessionHealth" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.SendCisSessionHealth"></a>

```typescript
public readonly SendCisSessionHealth: string[];
```

- *Type:* string[]

IAM actions required for the SendCisSessionHealth API call.

---

##### `SendCisSessionTelemetry`<sup>Required</sup> <a name="SendCisSessionTelemetry" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.SendCisSessionTelemetry"></a>

```typescript
public readonly SendCisSessionTelemetry: string[];
```

- *Type:* string[]

IAM actions required for the SendCisSessionTelemetry API call.

---

##### `StartCisSession`<sup>Required</sup> <a name="StartCisSession" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.StartCisSession"></a>

```typescript
public readonly StartCisSession: string[];
```

- *Type:* string[]

IAM actions required for the StartCisSession API call.

---

##### `StartCodeSecurityScan`<sup>Required</sup> <a name="StartCodeSecurityScan" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.StartCodeSecurityScan"></a>

```typescript
public readonly StartCodeSecurityScan: string[];
```

- *Type:* string[]

IAM actions required for the StartCodeSecurityScan API call.

---

##### `StopCisSession`<sup>Required</sup> <a name="StopCisSession" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.StopCisSession"></a>

```typescript
public readonly StopCisSession: string[];
```

- *Type:* string[]

IAM actions required for the StopCisSession API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCisScanConfiguration`<sup>Required</sup> <a name="UpdateCisScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateCisScanConfiguration"></a>

```typescript
public readonly UpdateCisScanConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCisScanConfiguration API call.

---

##### `UpdateCodeSecurityIntegration`<sup>Required</sup> <a name="UpdateCodeSecurityIntegration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateCodeSecurityIntegration"></a>

```typescript
public readonly UpdateCodeSecurityIntegration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCodeSecurityIntegration API call.

---

##### `UpdateCodeSecurityScanConfiguration`<sup>Required</sup> <a name="UpdateCodeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateCodeSecurityScanConfiguration"></a>

```typescript
public readonly UpdateCodeSecurityScanConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCodeSecurityScanConfiguration API call.

---

##### `UpdateConfiguration`<sup>Required</sup> <a name="UpdateConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateConfiguration"></a>

```typescript
public readonly UpdateConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfiguration API call.

---

##### `UpdateConnector`<sup>Required</sup> <a name="UpdateConnector" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateConnector"></a>

```typescript
public readonly UpdateConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnector API call.

---

##### `UpdateConnectorScanConfiguration`<sup>Required</sup> <a name="UpdateConnectorScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateConnectorScanConfiguration"></a>

```typescript
public readonly UpdateConnectorScanConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectorScanConfiguration API call.

---

##### `UpdateEc2DeepInspectionConfiguration`<sup>Required</sup> <a name="UpdateEc2DeepInspectionConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateEc2DeepInspectionConfiguration"></a>

```typescript
public readonly UpdateEc2DeepInspectionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEc2DeepInspectionConfiguration API call.

---

##### `UpdateEncryptionKey`<sup>Required</sup> <a name="UpdateEncryptionKey" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateEncryptionKey"></a>

```typescript
public readonly UpdateEncryptionKey: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEncryptionKey API call.

---

##### `UpdateFilter`<sup>Required</sup> <a name="UpdateFilter" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateFilter"></a>

```typescript
public readonly UpdateFilter: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFilter API call.

---

##### `UpdateOrganizationConfiguration`<sup>Required</sup> <a name="UpdateOrganizationConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateOrganizationConfiguration"></a>

```typescript
public readonly UpdateOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOrganizationConfiguration API call.

---

##### `UpdateOrgEc2DeepInspectionConfiguration`<sup>Required</sup> <a name="UpdateOrgEc2DeepInspectionConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Operations.property.UpdateOrgEc2DeepInspectionConfiguration"></a>

```typescript
public readonly UpdateOrgEc2DeepInspectionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOrgEc2DeepInspectionConfiguration API call.

---

### Inspector2Resources <a name="Inspector2Resources" id="@cdk_utils/iam.inspector2.Inspector2Resources"></a>

ARN builders, validators, and parsers for inspector2 resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.inspector2.Inspector2Resources.Initializer"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

new inspector2.Inspector2Resources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.cisScanConfiguration">cisScanConfiguration</a></code> | Builds an ARN for the CIS Scan Configuration resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.codeSecurityIntegration">codeSecurityIntegration</a></code> | Builds an ARN for the Code Security Integration resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.codeSecurityScanConfiguration">codeSecurityScanConfiguration</a></code> | Builds an ARN for the Code Security Scan Configuration resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.connector">connector</a></code> | Builds an ARN for the Connector resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.filter">filter</a></code> | Builds an ARN for the Filter resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.finding">finding</a></code> | Builds an ARN for the Finding resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.isValidCisScanConfigurationArn">isValidCisScanConfigurationArn</a></code> | Validates whether a string is a valid ARN for the CIS Scan Configuration resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.isValidCodeSecurityIntegrationArn">isValidCodeSecurityIntegrationArn</a></code> | Validates whether a string is a valid ARN for the Code Security Integration resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.isValidCodeSecurityScanConfigurationArn">isValidCodeSecurityScanConfigurationArn</a></code> | Validates whether a string is a valid ARN for the Code Security Scan Configuration resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.isValidConnectorArn">isValidConnectorArn</a></code> | Validates whether a string is a valid ARN for the Connector resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.isValidFilterArn">isValidFilterArn</a></code> | Validates whether a string is a valid ARN for the Filter resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.isValidFindingArn">isValidFindingArn</a></code> | Validates whether a string is a valid ARN for the Finding resource. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.parseCisScanConfigurationArn">parseCisScanConfigurationArn</a></code> | Parses a CIS Scan Configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.parseCodeSecurityIntegrationArn">parseCodeSecurityIntegrationArn</a></code> | Parses a Code Security Integration ARN into its components. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.parseCodeSecurityScanConfigurationArn">parseCodeSecurityScanConfigurationArn</a></code> | Parses a Code Security Scan Configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.parseConnectorArn">parseConnectorArn</a></code> | Parses a Connector ARN into its components. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.parseFilterArn">parseFilterArn</a></code> | Parses a Filter ARN into its components. |
| <code><a href="#@cdk_utils/iam.inspector2.Inspector2Resources.parseFindingArn">parseFindingArn</a></code> | Parses a Finding ARN into its components. |

---

##### `cisScanConfiguration` <a name="cisScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Resources.cisScanConfiguration"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.cisScanConfiguration(props: Inspector2CisScanConfigurationArnProps)
```

Builds an ARN for the CIS Scan Configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.inspector2.Inspector2Resources.cisScanConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.inspector2.Inspector2CisScanConfigurationArnProps">Inspector2CisScanConfigurationArnProps</a>

---

##### `codeSecurityIntegration` <a name="codeSecurityIntegration" id="@cdk_utils/iam.inspector2.Inspector2Resources.codeSecurityIntegration"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.codeSecurityIntegration(props: Inspector2CodeSecurityIntegrationArnProps)
```

Builds an ARN for the Code Security Integration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.inspector2.Inspector2Resources.codeSecurityIntegration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityIntegrationArnProps">Inspector2CodeSecurityIntegrationArnProps</a>

---

##### `codeSecurityScanConfiguration` <a name="codeSecurityScanConfiguration" id="@cdk_utils/iam.inspector2.Inspector2Resources.codeSecurityScanConfiguration"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.codeSecurityScanConfiguration(props: Inspector2CodeSecurityScanConfigurationArnProps)
```

Builds an ARN for the Code Security Scan Configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.inspector2.Inspector2Resources.codeSecurityScanConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.inspector2.Inspector2CodeSecurityScanConfigurationArnProps">Inspector2CodeSecurityScanConfigurationArnProps</a>

---

##### `connector` <a name="connector" id="@cdk_utils/iam.inspector2.Inspector2Resources.connector"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.connector(props: Inspector2ConnectorArnProps)
```

Builds an ARN for the Connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.inspector2.Inspector2Resources.connector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.inspector2.Inspector2ConnectorArnProps">Inspector2ConnectorArnProps</a>

---

##### `filter` <a name="filter" id="@cdk_utils/iam.inspector2.Inspector2Resources.filter"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.filter(props: Inspector2FilterArnProps)
```

Builds an ARN for the Filter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.inspector2.Inspector2Resources.filter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.inspector2.Inspector2FilterArnProps">Inspector2FilterArnProps</a>

---

##### `finding` <a name="finding" id="@cdk_utils/iam.inspector2.Inspector2Resources.finding"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.finding(props: Inspector2FindingArnProps)
```

Builds an ARN for the Finding resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.inspector2.Inspector2Resources.finding.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.inspector2.Inspector2FindingArnProps">Inspector2FindingArnProps</a>

---

##### `isValidCisScanConfigurationArn` <a name="isValidCisScanConfigurationArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidCisScanConfigurationArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.isValidCisScanConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the CIS Scan Configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidCisScanConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCodeSecurityIntegrationArn` <a name="isValidCodeSecurityIntegrationArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidCodeSecurityIntegrationArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.isValidCodeSecurityIntegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the Code Security Integration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidCodeSecurityIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCodeSecurityScanConfigurationArn` <a name="isValidCodeSecurityScanConfigurationArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidCodeSecurityScanConfigurationArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.isValidCodeSecurityScanConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the Code Security Scan Configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidCodeSecurityScanConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorArn` <a name="isValidConnectorArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidConnectorArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.isValidConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the Connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFilterArn` <a name="isValidFilterArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidFilterArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.isValidFilterArn(arn: string)
```

Validates whether a string is a valid ARN for the Filter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidFilterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFindingArn` <a name="isValidFindingArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidFindingArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.isValidFindingArn(arn: string)
```

Validates whether a string is a valid ARN for the Finding resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.isValidFindingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCisScanConfigurationArn` <a name="parseCisScanConfigurationArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseCisScanConfigurationArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.parseCisScanConfigurationArn(arn: string)
```

Parses a CIS Scan Configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseCisScanConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCodeSecurityIntegrationArn` <a name="parseCodeSecurityIntegrationArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseCodeSecurityIntegrationArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.parseCodeSecurityIntegrationArn(arn: string)
```

Parses a Code Security Integration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseCodeSecurityIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCodeSecurityScanConfigurationArn` <a name="parseCodeSecurityScanConfigurationArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseCodeSecurityScanConfigurationArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.parseCodeSecurityScanConfigurationArn(arn: string)
```

Parses a Code Security Scan Configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseCodeSecurityScanConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorArn` <a name="parseConnectorArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseConnectorArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.parseConnectorArn(arn: string)
```

Parses a Connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFilterArn` <a name="parseFilterArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseFilterArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.parseFilterArn(arn: string)
```

Parses a Filter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseFilterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFindingArn` <a name="parseFindingArn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseFindingArn"></a>

```typescript
import { inspector2 } from '@cdk_utils/iam'

inspector2.Inspector2Resources.parseFindingArn(arn: string)
```

Parses a Finding ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.inspector2.Inspector2Resources.parseFindingArn.parameter.arn"></a>

- *Type:* string

---




