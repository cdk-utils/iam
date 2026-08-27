# `mgn` Submodule <a name="`mgn` Submodule" id="@cdk_utils/iam.mgn"></a>


## Structs <a name="Structs" id="Structs"></a>

### MgnApplicationResourceArnComponents <a name="MgnApplicationResourceArnComponents" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnComponents"></a>

Parsed components of a ApplicationResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnComponents.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnApplicationResourceArnComponents: mgn.MgnApplicationResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnApplicationResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnApplicationResourceArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationID component. |
| <code><a href="#@cdk_utils/iam.mgn.MgnApplicationResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnApplicationResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MgnApplicationResourceArnProps <a name="MgnApplicationResourceArnProps" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnProps"></a>

Properties for building a ApplicationResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnProps.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnApplicationResourceArnProps: mgn.MgnApplicationResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnApplicationResourceArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgn.MgnApplicationResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnApplicationResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnApplicationResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnApplicationResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MgnConnectorResourceArnComponents <a name="MgnConnectorResourceArnComponents" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnComponents"></a>

Parsed components of a ConnectorResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnComponents.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnConnectorResourceArnComponents: mgn.MgnConnectorResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnConnectorResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConnectorResourceArnComponents.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorID component. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConnectorResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConnectorResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnComponents.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MgnConnectorResourceArnProps <a name="MgnConnectorResourceArnProps" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnProps"></a>

Properties for building a ConnectorResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnProps.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnConnectorResourceArnProps: mgn.MgnConnectorResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnConnectorResourceArnProps.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConnectorResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConnectorResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConnectorResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnProps.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnConnectorResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MgnExportResourceArnComponents <a name="MgnExportResourceArnComponents" id="@cdk_utils/iam.mgn.MgnExportResourceArnComponents"></a>

Parsed components of a ExportResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnExportResourceArnComponents.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnExportResourceArnComponents: mgn.MgnExportResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnExportResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnExportResourceArnComponents.property.exportId">exportId</a></code> | <code>string</code> | The ExportID component. |
| <code><a href="#@cdk_utils/iam.mgn.MgnExportResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnExportResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnExportResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `exportId`<sup>Required</sup> <a name="exportId" id="@cdk_utils/iam.mgn.MgnExportResourceArnComponents.property.exportId"></a>

```typescript
public readonly exportId: string;
```

- *Type:* string

The ExportID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnExportResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnExportResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MgnExportResourceArnProps <a name="MgnExportResourceArnProps" id="@cdk_utils/iam.mgn.MgnExportResourceArnProps"></a>

Properties for building a ExportResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnExportResourceArnProps.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnExportResourceArnProps: mgn.MgnExportResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnExportResourceArnProps.property.exportId">exportId</a></code> | <code>string</code> | The ExportID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgn.MgnExportResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnExportResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnExportResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `exportId`<sup>Required</sup> <a name="exportId" id="@cdk_utils/iam.mgn.MgnExportResourceArnProps.property.exportId"></a>

```typescript
public readonly exportId: string;
```

- *Type:* string

The ExportID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnExportResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnExportResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnExportResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MgnImportResourceArnComponents <a name="MgnImportResourceArnComponents" id="@cdk_utils/iam.mgn.MgnImportResourceArnComponents"></a>

Parsed components of a ImportResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnImportResourceArnComponents.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnImportResourceArnComponents: mgn.MgnImportResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnImportResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnImportResourceArnComponents.property.importId">importId</a></code> | <code>string</code> | The ImportID component. |
| <code><a href="#@cdk_utils/iam.mgn.MgnImportResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnImportResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnImportResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `importId`<sup>Required</sup> <a name="importId" id="@cdk_utils/iam.mgn.MgnImportResourceArnComponents.property.importId"></a>

```typescript
public readonly importId: string;
```

- *Type:* string

The ImportID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnImportResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnImportResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MgnImportResourceArnProps <a name="MgnImportResourceArnProps" id="@cdk_utils/iam.mgn.MgnImportResourceArnProps"></a>

Properties for building a ImportResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnImportResourceArnProps.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnImportResourceArnProps: mgn.MgnImportResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnImportResourceArnProps.property.importId">importId</a></code> | <code>string</code> | The ImportID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgn.MgnImportResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnImportResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnImportResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `importId`<sup>Required</sup> <a name="importId" id="@cdk_utils/iam.mgn.MgnImportResourceArnProps.property.importId"></a>

```typescript
public readonly importId: string;
```

- *Type:* string

The ImportID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnImportResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnImportResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnImportResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MgnJobResourceArnComponents <a name="MgnJobResourceArnComponents" id="@cdk_utils/iam.mgn.MgnJobResourceArnComponents"></a>

Parsed components of a JobResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnJobResourceArnComponents.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnJobResourceArnComponents: mgn.MgnJobResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnJobResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnJobResourceArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobID component. |
| <code><a href="#@cdk_utils/iam.mgn.MgnJobResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnJobResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnJobResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.mgn.MgnJobResourceArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnJobResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnJobResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MgnJobResourceArnProps <a name="MgnJobResourceArnProps" id="@cdk_utils/iam.mgn.MgnJobResourceArnProps"></a>

Properties for building a JobResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnJobResourceArnProps.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnJobResourceArnProps: mgn.MgnJobResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnJobResourceArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgn.MgnJobResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnJobResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnJobResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.mgn.MgnJobResourceArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnJobResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnJobResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnJobResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MgnLaunchConfigurationTemplateResourceArnComponents <a name="MgnLaunchConfigurationTemplateResourceArnComponents" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnComponents"></a>

Parsed components of a LaunchConfigurationTemplateResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnComponents.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnLaunchConfigurationTemplateResourceArnComponents: mgn.MgnLaunchConfigurationTemplateResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnComponents.property.launchConfigurationTemplateId">launchConfigurationTemplateId</a></code> | <code>string</code> | The LaunchConfigurationTemplateID component. |
| <code><a href="#@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `launchConfigurationTemplateId`<sup>Required</sup> <a name="launchConfigurationTemplateId" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnComponents.property.launchConfigurationTemplateId"></a>

```typescript
public readonly launchConfigurationTemplateId: string;
```

- *Type:* string

The LaunchConfigurationTemplateID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MgnLaunchConfigurationTemplateResourceArnProps <a name="MgnLaunchConfigurationTemplateResourceArnProps" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnProps"></a>

Properties for building a LaunchConfigurationTemplateResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnProps.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnLaunchConfigurationTemplateResourceArnProps: mgn.MgnLaunchConfigurationTemplateResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnProps.property.launchConfigurationTemplateId">launchConfigurationTemplateId</a></code> | <code>string</code> | The LaunchConfigurationTemplateID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `launchConfigurationTemplateId`<sup>Required</sup> <a name="launchConfigurationTemplateId" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnProps.property.launchConfigurationTemplateId"></a>

```typescript
public readonly launchConfigurationTemplateId: string;
```

- *Type:* string

The LaunchConfigurationTemplateID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MgnNetworkMigrationDefinitionResourceArnComponents <a name="MgnNetworkMigrationDefinitionResourceArnComponents" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnComponents"></a>

Parsed components of a NetworkMigrationDefinitionResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnComponents.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnNetworkMigrationDefinitionResourceArnComponents: mgn.MgnNetworkMigrationDefinitionResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnComponents.property.networkMigrationDefinitionId">networkMigrationDefinitionId</a></code> | <code>string</code> | The NetworkMigrationDefinitionID component. |
| <code><a href="#@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkMigrationDefinitionId`<sup>Required</sup> <a name="networkMigrationDefinitionId" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnComponents.property.networkMigrationDefinitionId"></a>

```typescript
public readonly networkMigrationDefinitionId: string;
```

- *Type:* string

The NetworkMigrationDefinitionID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MgnNetworkMigrationDefinitionResourceArnProps <a name="MgnNetworkMigrationDefinitionResourceArnProps" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnProps"></a>

Properties for building a NetworkMigrationDefinitionResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnProps.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnNetworkMigrationDefinitionResourceArnProps: mgn.MgnNetworkMigrationDefinitionResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnProps.property.networkMigrationDefinitionId">networkMigrationDefinitionId</a></code> | <code>string</code> | The NetworkMigrationDefinitionID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkMigrationDefinitionId`<sup>Required</sup> <a name="networkMigrationDefinitionId" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnProps.property.networkMigrationDefinitionId"></a>

```typescript
public readonly networkMigrationDefinitionId: string;
```

- *Type:* string

The NetworkMigrationDefinitionID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MgnReplicationConfigurationTemplateResourceArnComponents <a name="MgnReplicationConfigurationTemplateResourceArnComponents" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnComponents"></a>

Parsed components of a ReplicationConfigurationTemplateResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnComponents.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnReplicationConfigurationTemplateResourceArnComponents: mgn.MgnReplicationConfigurationTemplateResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnComponents.property.replicationConfigurationTemplateId">replicationConfigurationTemplateId</a></code> | <code>string</code> | The ReplicationConfigurationTemplateID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `replicationConfigurationTemplateId`<sup>Required</sup> <a name="replicationConfigurationTemplateId" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnComponents.property.replicationConfigurationTemplateId"></a>

```typescript
public readonly replicationConfigurationTemplateId: string;
```

- *Type:* string

The ReplicationConfigurationTemplateID component.

---

### MgnReplicationConfigurationTemplateResourceArnProps <a name="MgnReplicationConfigurationTemplateResourceArnProps" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnProps"></a>

Properties for building a ReplicationConfigurationTemplateResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnProps.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnReplicationConfigurationTemplateResourceArnProps: mgn.MgnReplicationConfigurationTemplateResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnProps.property.replicationConfigurationTemplateId">replicationConfigurationTemplateId</a></code> | <code>string</code> | The ReplicationConfigurationTemplateID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `replicationConfigurationTemplateId`<sup>Required</sup> <a name="replicationConfigurationTemplateId" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnProps.property.replicationConfigurationTemplateId"></a>

```typescript
public readonly replicationConfigurationTemplateId: string;
```

- *Type:* string

The ReplicationConfigurationTemplateID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MgnSourceServerResourceArnComponents <a name="MgnSourceServerResourceArnComponents" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnComponents"></a>

Parsed components of a SourceServerResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnComponents.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnSourceServerResourceArnComponents: mgn.MgnSourceServerResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnSourceServerResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnSourceServerResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnSourceServerResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mgn.MgnSourceServerResourceArnComponents.property.sourceServerId">sourceServerId</a></code> | <code>string</code> | The SourceServerID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sourceServerId`<sup>Required</sup> <a name="sourceServerId" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnComponents.property.sourceServerId"></a>

```typescript
public readonly sourceServerId: string;
```

- *Type:* string

The SourceServerID component.

---

### MgnSourceServerResourceArnProps <a name="MgnSourceServerResourceArnProps" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnProps"></a>

Properties for building a SourceServerResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnProps.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnSourceServerResourceArnProps: mgn.MgnSourceServerResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnSourceServerResourceArnProps.property.sourceServerId">sourceServerId</a></code> | <code>string</code> | The SourceServerID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgn.MgnSourceServerResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnSourceServerResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnSourceServerResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sourceServerId`<sup>Required</sup> <a name="sourceServerId" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnProps.property.sourceServerId"></a>

```typescript
public readonly sourceServerId: string;
```

- *Type:* string

The SourceServerID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnSourceServerResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MgnVcenterClientResourceArnComponents <a name="MgnVcenterClientResourceArnComponents" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnComponents"></a>

Parsed components of a VcenterClientResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnComponents.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnVcenterClientResourceArnComponents: mgn.MgnVcenterClientResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnVcenterClientResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnVcenterClientResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnVcenterClientResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mgn.MgnVcenterClientResourceArnComponents.property.vcenterClientId">vcenterClientId</a></code> | <code>string</code> | The VcenterClientID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vcenterClientId`<sup>Required</sup> <a name="vcenterClientId" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnComponents.property.vcenterClientId"></a>

```typescript
public readonly vcenterClientId: string;
```

- *Type:* string

The VcenterClientID component.

---

### MgnVcenterClientResourceArnProps <a name="MgnVcenterClientResourceArnProps" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnProps"></a>

Properties for building a VcenterClientResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnProps.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnVcenterClientResourceArnProps: mgn.MgnVcenterClientResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnVcenterClientResourceArnProps.property.vcenterClientId">vcenterClientId</a></code> | <code>string</code> | The VcenterClientID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgn.MgnVcenterClientResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnVcenterClientResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnVcenterClientResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vcenterClientId`<sup>Required</sup> <a name="vcenterClientId" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnProps.property.vcenterClientId"></a>

```typescript
public readonly vcenterClientId: string;
```

- *Type:* string

The VcenterClientID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnVcenterClientResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MgnWaveResourceArnComponents <a name="MgnWaveResourceArnComponents" id="@cdk_utils/iam.mgn.MgnWaveResourceArnComponents"></a>

Parsed components of a WaveResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnWaveResourceArnComponents.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnWaveResourceArnComponents: mgn.MgnWaveResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnWaveResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnWaveResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnWaveResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mgn.MgnWaveResourceArnComponents.property.waveId">waveId</a></code> | <code>string</code> | The WaveID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnWaveResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnWaveResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnWaveResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `waveId`<sup>Required</sup> <a name="waveId" id="@cdk_utils/iam.mgn.MgnWaveResourceArnComponents.property.waveId"></a>

```typescript
public readonly waveId: string;
```

- *Type:* string

The WaveID component.

---

### MgnWaveResourceArnProps <a name="MgnWaveResourceArnProps" id="@cdk_utils/iam.mgn.MgnWaveResourceArnProps"></a>

Properties for building a WaveResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgn.MgnWaveResourceArnProps.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

const mgnWaveResourceArnProps: mgn.MgnWaveResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnWaveResourceArnProps.property.waveId">waveId</a></code> | <code>string</code> | The WaveID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgn.MgnWaveResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgn.MgnWaveResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnWaveResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `waveId`<sup>Required</sup> <a name="waveId" id="@cdk_utils/iam.mgn.MgnWaveResourceArnProps.property.waveId"></a>

```typescript
public readonly waveId: string;
```

- *Type:* string

The WaveID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgn.MgnWaveResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgn.MgnWaveResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgn.MgnWaveResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MgnActions <a name="MgnActions" id="@cdk_utils/iam.mgn.MgnActions"></a>

IAM action constants for the mgn service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mgn.MgnActions.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

new mgn.MgnActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] mgn:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentCommandForMgn">actionGetAgentCommandForMgn</a></code> | <code>string</code> | [Read] mgn:GetAgentCommandForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentConfirmedResumeInfoForMgn">actionGetAgentConfirmedResumeInfoForMgn</a></code> | <code>string</code> | [Read] mgn:GetAgentConfirmedResumeInfoForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentInstallationAssetsForMgn">actionGetAgentInstallationAssetsForMgn</a></code> | <code>string</code> | [Read] mgn:GetAgentInstallationAssetsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentReplicationInfoForMgn">actionGetAgentReplicationInfoForMgn</a></code> | <code>string</code> | [Read] mgn:GetAgentReplicationInfoForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentRuntimeConfigurationForMgn">actionGetAgentRuntimeConfigurationForMgn</a></code> | <code>string</code> | [Read] mgn:GetAgentRuntimeConfigurationForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentSnapshotCreditsForMgn">actionGetAgentSnapshotCreditsForMgn</a></code> | <code>string</code> | [Read] mgn:GetAgentSnapshotCreditsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetChannelCommandsForMgn">actionGetChannelCommandsForMgn</a></code> | <code>string</code> | [Read] mgn:GetChannelCommandsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetLaunchConfiguration">actionGetLaunchConfiguration</a></code> | <code>string</code> | [Read] mgn:GetLaunchConfiguration. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetNetworkMigrationDefinition">actionGetNetworkMigrationDefinition</a></code> | <code>string</code> | [Read] mgn:GetNetworkMigrationDefinition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetNetworkMigrationMapperSegmentConstruct">actionGetNetworkMigrationMapperSegmentConstruct</a></code> | <code>string</code> | [Read] mgn:GetNetworkMigrationMapperSegmentConstruct. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetReplicationConfiguration">actionGetReplicationConfiguration</a></code> | <code>string</code> | [Read] mgn:GetReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.actionGetVcenterClientCommandsForMgn">actionGetVcenterClientCommandsForMgn</a></code> | <code>string</code> | [Read] mgn:GetVcenterClientCommandsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ArchiveApplication">ArchiveApplication</a></code> | <code>string</code> | [Write] mgn:ArchiveApplication. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ArchiveWave">ArchiveWave</a></code> | <code>string</code> | [Write] mgn:ArchiveWave. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.AssociateApplications">AssociateApplications</a></code> | <code>string</code> | [Write] mgn:AssociateApplications. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.AssociateSourceServers">AssociateSourceServers</a></code> | <code>string</code> | [Write] mgn:AssociateSourceServers. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.BatchCreateVolumeSnapshotGroupForMgn">BatchCreateVolumeSnapshotGroupForMgn</a></code> | <code>string</code> | [Write] mgn:BatchCreateVolumeSnapshotGroupForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.BatchDeleteSnapshotRequestForMgn">BatchDeleteSnapshotRequestForMgn</a></code> | <code>string</code> | [Write] mgn:BatchDeleteSnapshotRequestForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ChangeServerLifeCycleState">ChangeServerLifeCycleState</a></code> | <code>string</code> | [Write] mgn:ChangeServerLifeCycleState. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] mgn:CreateApplication. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.CreateConnector">CreateConnector</a></code> | <code>string</code> | [Write] mgn:CreateConnector. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.CreateLaunchConfigurationTemplate">CreateLaunchConfigurationTemplate</a></code> | <code>string</code> | [Write] mgn:CreateLaunchConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.CreateNetworkMigrationDefinition">CreateNetworkMigrationDefinition</a></code> | <code>string</code> | [Write] mgn:CreateNetworkMigrationDefinition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.CreateReplicationConfigurationTemplate">CreateReplicationConfigurationTemplate</a></code> | <code>string</code> | [Write] mgn:CreateReplicationConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.CreateVcenterClientForMgn">CreateVcenterClientForMgn</a></code> | <code>string</code> | [Write] mgn:CreateVcenterClientForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.CreateWave">CreateWave</a></code> | <code>string</code> | [Write] mgn:CreateWave. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] mgn:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DeleteConnector">DeleteConnector</a></code> | <code>string</code> | [Write] mgn:DeleteConnector. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DeleteJob">DeleteJob</a></code> | <code>string</code> | [Write] mgn:DeleteJob. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DeleteLaunchConfigurationTemplate">DeleteLaunchConfigurationTemplate</a></code> | <code>string</code> | [Write] mgn:DeleteLaunchConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DeleteNetworkMigrationDefinition">DeleteNetworkMigrationDefinition</a></code> | <code>string</code> | [Write] mgn:DeleteNetworkMigrationDefinition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DeleteReplicationConfigurationTemplate">DeleteReplicationConfigurationTemplate</a></code> | <code>string</code> | [Write] mgn:DeleteReplicationConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DeleteSourceServer">DeleteSourceServer</a></code> | <code>string</code> | [Write] mgn:DeleteSourceServer. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DeleteVcenterClient">DeleteVcenterClient</a></code> | <code>string</code> | [Write] mgn:DeleteVcenterClient. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DeleteWave">DeleteWave</a></code> | <code>string</code> | [Write] mgn:DeleteWave. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DescribeJobLogItems">DescribeJobLogItems</a></code> | <code>string</code> | [Read] mgn:DescribeJobLogItems. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DescribeJobs">DescribeJobs</a></code> | <code>string</code> | [List] mgn:DescribeJobs. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DescribeLaunchConfigurationTemplates">DescribeLaunchConfigurationTemplates</a></code> | <code>string</code> | [List] mgn:DescribeLaunchConfigurationTemplates. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DescribeReplicationConfigurationTemplates">DescribeReplicationConfigurationTemplates</a></code> | <code>string</code> | [List] mgn:DescribeReplicationConfigurationTemplates. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DescribeReplicationServerAssociationsForMgn">DescribeReplicationServerAssociationsForMgn</a></code> | <code>string</code> | [Read] mgn:DescribeReplicationServerAssociationsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DescribeSnapshotRequestsForMgn">DescribeSnapshotRequestsForMgn</a></code> | <code>string</code> | [Read] mgn:DescribeSnapshotRequestsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DescribeSourceServers">DescribeSourceServers</a></code> | <code>string</code> | [List] mgn:DescribeSourceServers. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DescribeVcenterClients">DescribeVcenterClients</a></code> | <code>string</code> | [List] mgn:DescribeVcenterClients. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DisassociateApplications">DisassociateApplications</a></code> | <code>string</code> | [Write] mgn:DisassociateApplications. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DisassociateSourceServers">DisassociateSourceServers</a></code> | <code>string</code> | [Write] mgn:DisassociateSourceServers. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.DisconnectFromService">DisconnectFromService</a></code> | <code>string</code> | [Write] mgn:DisconnectFromService. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.FinalizeCutover">FinalizeCutover</a></code> | <code>string</code> | [Write] mgn:FinalizeCutover. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.InitializeService">InitializeService</a></code> | <code>string</code> | [Write] mgn:InitializeService. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.IssueClientCertificateForMgn">IssueClientCertificateForMgn</a></code> | <code>string</code> | [Write] mgn:IssueClientCertificateForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] mgn:ListApplications. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListConnectors">ListConnectors</a></code> | <code>string</code> | [Read] mgn:ListConnectors. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListExportErrors">ListExportErrors</a></code> | <code>string</code> | [List] mgn:ListExportErrors. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListExports">ListExports</a></code> | <code>string</code> | [List] mgn:ListExports. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListImportErrors">ListImportErrors</a></code> | <code>string</code> | [List] mgn:ListImportErrors. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListImportFileEnrichments">ListImportFileEnrichments</a></code> | <code>string</code> | [List] mgn:ListImportFileEnrichments. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListImports">ListImports</a></code> | <code>string</code> | [List] mgn:ListImports. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListManagedAccounts">ListManagedAccounts</a></code> | <code>string</code> | [List] mgn:ListManagedAccounts. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationAnalyses">ListNetworkMigrationAnalyses</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationAnalyses. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationAnalysisResults">ListNetworkMigrationAnalysisResults</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationAnalysisResults. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationCodeGenerations">ListNetworkMigrationCodeGenerations</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationCodeGenerations. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationCodeGenerationSegments">ListNetworkMigrationCodeGenerationSegments</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationCodeGenerationSegments. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationDefinitions">ListNetworkMigrationDefinitions</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationDefinitions. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationDeployedStacks">ListNetworkMigrationDeployedStacks</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationDeployedStacks. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationDeployedStacksDeletions">ListNetworkMigrationDeployedStacksDeletions</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationDeployedStacksDeletions. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationDeployments">ListNetworkMigrationDeployments</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationDeployments. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationExecutionArtifacts">ListNetworkMigrationExecutionArtifacts</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationExecutionArtifacts. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationExecutions">ListNetworkMigrationExecutions</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationExecutions. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationMapperSegmentConstructs">ListNetworkMigrationMapperSegmentConstructs</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationMapperSegmentConstructs. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationMapperSegments">ListNetworkMigrationMapperSegments</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationMapperSegments. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationMappings">ListNetworkMigrationMappings</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationMappings. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationMappingUpdates">ListNetworkMigrationMappingUpdates</a></code> | <code>string</code> | [List] mgn:ListNetworkMigrationMappingUpdates. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListSourceServerActions">ListSourceServerActions</a></code> | <code>string</code> | [List] mgn:ListSourceServerActions. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] mgn:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListTemplateActions">ListTemplateActions</a></code> | <code>string</code> | [List] mgn:ListTemplateActions. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ListWaves">ListWaves</a></code> | <code>string</code> | [List] mgn:ListWaves. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.MarkAsArchived">MarkAsArchived</a></code> | <code>string</code> | [Write] mgn:MarkAsArchived. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.NotifyAgentAuthenticationForMgn">NotifyAgentAuthenticationForMgn</a></code> | <code>string</code> | [Write] mgn:NotifyAgentAuthenticationForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.NotifyAgentConnectedForMgn">NotifyAgentConnectedForMgn</a></code> | <code>string</code> | [Write] mgn:NotifyAgentConnectedForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.NotifyAgentDisconnectedForMgn">NotifyAgentDisconnectedForMgn</a></code> | <code>string</code> | [Write] mgn:NotifyAgentDisconnectedForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.NotifyAgentReplicationProgressForMgn">NotifyAgentReplicationProgressForMgn</a></code> | <code>string</code> | [Write] mgn:NotifyAgentReplicationProgressForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.NotifyVcenterClientStartedForMgn">NotifyVcenterClientStartedForMgn</a></code> | <code>string</code> | [Write] mgn:NotifyVcenterClientStartedForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.PauseReplication">PauseReplication</a></code> | <code>string</code> | [Write] mgn:PauseReplication. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.PutSourceServerAction">PutSourceServerAction</a></code> | <code>string</code> | [Write] mgn:PutSourceServerAction. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.PutTemplateAction">PutTemplateAction</a></code> | <code>string</code> | [Write] mgn:PutTemplateAction. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.RegisterAgentForMgn">RegisterAgentForMgn</a></code> | <code>string</code> | [Write] mgn:RegisterAgentForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.RemoveSourceServerAction">RemoveSourceServerAction</a></code> | <code>string</code> | [Write] mgn:RemoveSourceServerAction. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.RemoveTemplateAction">RemoveTemplateAction</a></code> | <code>string</code> | [Write] mgn:RemoveTemplateAction. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.ResumeReplication">ResumeReplication</a></code> | <code>string</code> | [Write] mgn:ResumeReplication. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.RetryDataReplication">RetryDataReplication</a></code> | <code>string</code> | [Write] mgn:RetryDataReplication. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.SendAgentLogsForMgn">SendAgentLogsForMgn</a></code> | <code>string</code> | [Write] mgn:SendAgentLogsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.SendAgentMetricsForMgn">SendAgentMetricsForMgn</a></code> | <code>string</code> | [Write] mgn:SendAgentMetricsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.SendChannelCommandResultForMgn">SendChannelCommandResultForMgn</a></code> | <code>string</code> | [Write] mgn:SendChannelCommandResultForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.SendClientLogsForMgn">SendClientLogsForMgn</a></code> | <code>string</code> | [Write] mgn:SendClientLogsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.SendClientMetricsForMgn">SendClientMetricsForMgn</a></code> | <code>string</code> | [Write] mgn:SendClientMetricsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.SendVcenterClientCommandResultForMgn">SendVcenterClientCommandResultForMgn</a></code> | <code>string</code> | [Write] mgn:SendVcenterClientCommandResultForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.SendVcenterClientLogsForMgn">SendVcenterClientLogsForMgn</a></code> | <code>string</code> | [Write] mgn:SendVcenterClientLogsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.SendVcenterClientMetricsForMgn">SendVcenterClientMetricsForMgn</a></code> | <code>string</code> | [Write] mgn:SendVcenterClientMetricsForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartCutover">StartCutover</a></code> | <code>string</code> | [Write] mgn:StartCutover. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartExport">StartExport</a></code> | <code>string</code> | [Write] mgn:StartExport. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartImport">StartImport</a></code> | <code>string</code> | [Write] mgn:StartImport. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartImportFileEnrichment">StartImportFileEnrichment</a></code> | <code>string</code> | [Write] mgn:StartImportFileEnrichment. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationAnalysis">StartNetworkMigrationAnalysis</a></code> | <code>string</code> | [Write] mgn:StartNetworkMigrationAnalysis. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationCodeGeneration">StartNetworkMigrationCodeGeneration</a></code> | <code>string</code> | [Write] mgn:StartNetworkMigrationCodeGeneration. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationDeployedStacksDeletion">StartNetworkMigrationDeployedStacksDeletion</a></code> | <code>string</code> | [Write] mgn:StartNetworkMigrationDeployedStacksDeletion. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationDeployment">StartNetworkMigrationDeployment</a></code> | <code>string</code> | [Write] mgn:StartNetworkMigrationDeployment. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationMapping">StartNetworkMigrationMapping</a></code> | <code>string</code> | [Write] mgn:StartNetworkMigrationMapping. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationMappingUpdate">StartNetworkMigrationMappingUpdate</a></code> | <code>string</code> | [Write] mgn:StartNetworkMigrationMappingUpdate. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartReplication">StartReplication</a></code> | <code>string</code> | [Write] mgn:StartReplication. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartSnapshotGroupForMgn">StartSnapshotGroupForMgn</a></code> | <code>string</code> | [Write] mgn:StartSnapshotGroupForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StartTest">StartTest</a></code> | <code>string</code> | [Write] mgn:StartTest. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.StopReplication">StopReplication</a></code> | <code>string</code> | [Write] mgn:StopReplication. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] mgn:TagResource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.TerminateTargetInstances">TerminateTargetInstances</a></code> | <code>string</code> | [Write] mgn:TerminateTargetInstances. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UnarchiveApplication">UnarchiveApplication</a></code> | <code>string</code> | [Write] mgn:UnarchiveApplication. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UnarchiveWave">UnarchiveWave</a></code> | <code>string</code> | [Write] mgn:UnarchiveWave. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] mgn:UntagResource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string</code> | [Write] mgn:UpdateAccountSettings. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateAgentBacklogForMgn">UpdateAgentBacklogForMgn</a></code> | <code>string</code> | [Write] mgn:UpdateAgentBacklogForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateAgentConversionInfoForMgn">UpdateAgentConversionInfoForMgn</a></code> | <code>string</code> | [Write] mgn:UpdateAgentConversionInfoForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateAgentReplicationInfoForMgn">UpdateAgentReplicationInfoForMgn</a></code> | <code>string</code> | [Write] mgn:UpdateAgentReplicationInfoForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateAgentReplicationProcessStateForMgn">UpdateAgentReplicationProcessStateForMgn</a></code> | <code>string</code> | [Write] mgn:UpdateAgentReplicationProcessStateForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateAgentSourcePropertiesForMgn">UpdateAgentSourcePropertiesForMgn</a></code> | <code>string</code> | [Write] mgn:UpdateAgentSourcePropertiesForMgn. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] mgn:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateConnector">UpdateConnector</a></code> | <code>string</code> | [Write] mgn:UpdateConnector. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateLaunchConfiguration">UpdateLaunchConfiguration</a></code> | <code>string</code> | [Write] mgn:UpdateLaunchConfiguration. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateLaunchConfigurationTemplate">UpdateLaunchConfigurationTemplate</a></code> | <code>string</code> | [Write] mgn:UpdateLaunchConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateNetworkMigrationDefinition">UpdateNetworkMigrationDefinition</a></code> | <code>string</code> | [Write] mgn:UpdateNetworkMigrationDefinition. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateNetworkMigrationMapperSegment">UpdateNetworkMigrationMapperSegment</a></code> | <code>string</code> | [Write] mgn:UpdateNetworkMigrationMapperSegment. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateNetworkMigrationMapperSegmentConstruct">UpdateNetworkMigrationMapperSegmentConstruct</a></code> | <code>string</code> | [Write] mgn:UpdateNetworkMigrationMapperSegmentConstruct. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateReplicationConfiguration">UpdateReplicationConfiguration</a></code> | <code>string</code> | [Write] mgn:UpdateReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateReplicationConfigurationTemplate">UpdateReplicationConfigurationTemplate</a></code> | <code>string</code> | [Write] mgn:UpdateReplicationConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateSourceServer">UpdateSourceServer</a></code> | <code>string</code> | [Write] mgn:UpdateSourceServer. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateSourceServerReplicationType">UpdateSourceServerReplicationType</a></code> | <code>string</code> | [Write] mgn:UpdateSourceServerReplicationType. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.UpdateWave">UpdateWave</a></code> | <code>string</code> | [Write] mgn:UpdateWave. |
| <code><a href="#@cdk_utils/iam.mgn.MgnActions.property.VerifyClientRoleForMgn">VerifyClientRoleForMgn</a></code> | <code>string</code> | [Read] mgn:VerifyClientRoleForMgn. |

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] mgn:GetAccountSettings.

---

##### `actionGetAgentCommandForMgn`<sup>Required</sup> <a name="actionGetAgentCommandForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentCommandForMgn"></a>

```typescript
public readonly actionGetAgentCommandForMgn: string;
```

- *Type:* string

[Read] mgn:GetAgentCommandForMgn.

---

##### `actionGetAgentConfirmedResumeInfoForMgn`<sup>Required</sup> <a name="actionGetAgentConfirmedResumeInfoForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentConfirmedResumeInfoForMgn"></a>

```typescript
public readonly actionGetAgentConfirmedResumeInfoForMgn: string;
```

- *Type:* string

[Read] mgn:GetAgentConfirmedResumeInfoForMgn.

---

##### `actionGetAgentInstallationAssetsForMgn`<sup>Required</sup> <a name="actionGetAgentInstallationAssetsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentInstallationAssetsForMgn"></a>

```typescript
public readonly actionGetAgentInstallationAssetsForMgn: string;
```

- *Type:* string

[Read] mgn:GetAgentInstallationAssetsForMgn.

---

##### `actionGetAgentReplicationInfoForMgn`<sup>Required</sup> <a name="actionGetAgentReplicationInfoForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentReplicationInfoForMgn"></a>

```typescript
public readonly actionGetAgentReplicationInfoForMgn: string;
```

- *Type:* string

[Read] mgn:GetAgentReplicationInfoForMgn.

---

##### `actionGetAgentRuntimeConfigurationForMgn`<sup>Required</sup> <a name="actionGetAgentRuntimeConfigurationForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentRuntimeConfigurationForMgn"></a>

```typescript
public readonly actionGetAgentRuntimeConfigurationForMgn: string;
```

- *Type:* string

[Read] mgn:GetAgentRuntimeConfigurationForMgn.

---

##### `actionGetAgentSnapshotCreditsForMgn`<sup>Required</sup> <a name="actionGetAgentSnapshotCreditsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetAgentSnapshotCreditsForMgn"></a>

```typescript
public readonly actionGetAgentSnapshotCreditsForMgn: string;
```

- *Type:* string

[Read] mgn:GetAgentSnapshotCreditsForMgn.

---

##### `actionGetChannelCommandsForMgn`<sup>Required</sup> <a name="actionGetChannelCommandsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetChannelCommandsForMgn"></a>

```typescript
public readonly actionGetChannelCommandsForMgn: string;
```

- *Type:* string

[Read] mgn:GetChannelCommandsForMgn.

---

##### `actionGetLaunchConfiguration`<sup>Required</sup> <a name="actionGetLaunchConfiguration" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetLaunchConfiguration"></a>

```typescript
public readonly actionGetLaunchConfiguration: string;
```

- *Type:* string

[Read] mgn:GetLaunchConfiguration.

---

##### `actionGetNetworkMigrationDefinition`<sup>Required</sup> <a name="actionGetNetworkMigrationDefinition" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetNetworkMigrationDefinition"></a>

```typescript
public readonly actionGetNetworkMigrationDefinition: string;
```

- *Type:* string

[Read] mgn:GetNetworkMigrationDefinition.

---

##### `actionGetNetworkMigrationMapperSegmentConstruct`<sup>Required</sup> <a name="actionGetNetworkMigrationMapperSegmentConstruct" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetNetworkMigrationMapperSegmentConstruct"></a>

```typescript
public readonly actionGetNetworkMigrationMapperSegmentConstruct: string;
```

- *Type:* string

[Read] mgn:GetNetworkMigrationMapperSegmentConstruct.

---

##### `actionGetReplicationConfiguration`<sup>Required</sup> <a name="actionGetReplicationConfiguration" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetReplicationConfiguration"></a>

```typescript
public readonly actionGetReplicationConfiguration: string;
```

- *Type:* string

[Read] mgn:GetReplicationConfiguration.

---

##### `actionGetVcenterClientCommandsForMgn`<sup>Required</sup> <a name="actionGetVcenterClientCommandsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.actionGetVcenterClientCommandsForMgn"></a>

```typescript
public readonly actionGetVcenterClientCommandsForMgn: string;
```

- *Type:* string

[Read] mgn:GetVcenterClientCommandsForMgn.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mgn.MgnActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mgn.MgnActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mgn.MgnActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mgn.MgnActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mgn.MgnActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ArchiveApplication`<sup>Required</sup> <a name="ArchiveApplication" id="@cdk_utils/iam.mgn.MgnActions.property.ArchiveApplication"></a>

```typescript
public readonly ArchiveApplication: string;
```

- *Type:* string

[Write] mgn:ArchiveApplication.

---

##### `ArchiveWave`<sup>Required</sup> <a name="ArchiveWave" id="@cdk_utils/iam.mgn.MgnActions.property.ArchiveWave"></a>

```typescript
public readonly ArchiveWave: string;
```

- *Type:* string

[Write] mgn:ArchiveWave.

---

##### `AssociateApplications`<sup>Required</sup> <a name="AssociateApplications" id="@cdk_utils/iam.mgn.MgnActions.property.AssociateApplications"></a>

```typescript
public readonly AssociateApplications: string;
```

- *Type:* string

[Write] mgn:AssociateApplications.

---

##### `AssociateSourceServers`<sup>Required</sup> <a name="AssociateSourceServers" id="@cdk_utils/iam.mgn.MgnActions.property.AssociateSourceServers"></a>

```typescript
public readonly AssociateSourceServers: string;
```

- *Type:* string

[Write] mgn:AssociateSourceServers.

---

##### `BatchCreateVolumeSnapshotGroupForMgn`<sup>Required</sup> <a name="BatchCreateVolumeSnapshotGroupForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.BatchCreateVolumeSnapshotGroupForMgn"></a>

```typescript
public readonly BatchCreateVolumeSnapshotGroupForMgn: string;
```

- *Type:* string

[Write] mgn:BatchCreateVolumeSnapshotGroupForMgn.

---

##### `BatchDeleteSnapshotRequestForMgn`<sup>Required</sup> <a name="BatchDeleteSnapshotRequestForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.BatchDeleteSnapshotRequestForMgn"></a>

```typescript
public readonly BatchDeleteSnapshotRequestForMgn: string;
```

- *Type:* string

[Write] mgn:BatchDeleteSnapshotRequestForMgn.

---

##### `ChangeServerLifeCycleState`<sup>Required</sup> <a name="ChangeServerLifeCycleState" id="@cdk_utils/iam.mgn.MgnActions.property.ChangeServerLifeCycleState"></a>

```typescript
public readonly ChangeServerLifeCycleState: string;
```

- *Type:* string

[Write] mgn:ChangeServerLifeCycleState.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.mgn.MgnActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] mgn:CreateApplication.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.mgn.MgnActions.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string;
```

- *Type:* string

[Write] mgn:CreateConnector.

---

##### `CreateLaunchConfigurationTemplate`<sup>Required</sup> <a name="CreateLaunchConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnActions.property.CreateLaunchConfigurationTemplate"></a>

```typescript
public readonly CreateLaunchConfigurationTemplate: string;
```

- *Type:* string

[Write] mgn:CreateLaunchConfigurationTemplate.

---

##### `CreateNetworkMigrationDefinition`<sup>Required</sup> <a name="CreateNetworkMigrationDefinition" id="@cdk_utils/iam.mgn.MgnActions.property.CreateNetworkMigrationDefinition"></a>

```typescript
public readonly CreateNetworkMigrationDefinition: string;
```

- *Type:* string

[Write] mgn:CreateNetworkMigrationDefinition.

---

##### `CreateReplicationConfigurationTemplate`<sup>Required</sup> <a name="CreateReplicationConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnActions.property.CreateReplicationConfigurationTemplate"></a>

```typescript
public readonly CreateReplicationConfigurationTemplate: string;
```

- *Type:* string

[Write] mgn:CreateReplicationConfigurationTemplate.

---

##### `CreateVcenterClientForMgn`<sup>Required</sup> <a name="CreateVcenterClientForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.CreateVcenterClientForMgn"></a>

```typescript
public readonly CreateVcenterClientForMgn: string;
```

- *Type:* string

[Write] mgn:CreateVcenterClientForMgn.

---

##### `CreateWave`<sup>Required</sup> <a name="CreateWave" id="@cdk_utils/iam.mgn.MgnActions.property.CreateWave"></a>

```typescript
public readonly CreateWave: string;
```

- *Type:* string

[Write] mgn:CreateWave.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.mgn.MgnActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] mgn:DeleteApplication.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.mgn.MgnActions.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string;
```

- *Type:* string

[Write] mgn:DeleteConnector.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.mgn.MgnActions.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string;
```

- *Type:* string

[Write] mgn:DeleteJob.

---

##### `DeleteLaunchConfigurationTemplate`<sup>Required</sup> <a name="DeleteLaunchConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnActions.property.DeleteLaunchConfigurationTemplate"></a>

```typescript
public readonly DeleteLaunchConfigurationTemplate: string;
```

- *Type:* string

[Write] mgn:DeleteLaunchConfigurationTemplate.

---

##### `DeleteNetworkMigrationDefinition`<sup>Required</sup> <a name="DeleteNetworkMigrationDefinition" id="@cdk_utils/iam.mgn.MgnActions.property.DeleteNetworkMigrationDefinition"></a>

```typescript
public readonly DeleteNetworkMigrationDefinition: string;
```

- *Type:* string

[Write] mgn:DeleteNetworkMigrationDefinition.

---

##### `DeleteReplicationConfigurationTemplate`<sup>Required</sup> <a name="DeleteReplicationConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnActions.property.DeleteReplicationConfigurationTemplate"></a>

```typescript
public readonly DeleteReplicationConfigurationTemplate: string;
```

- *Type:* string

[Write] mgn:DeleteReplicationConfigurationTemplate.

---

##### `DeleteSourceServer`<sup>Required</sup> <a name="DeleteSourceServer" id="@cdk_utils/iam.mgn.MgnActions.property.DeleteSourceServer"></a>

```typescript
public readonly DeleteSourceServer: string;
```

- *Type:* string

[Write] mgn:DeleteSourceServer.

---

##### `DeleteVcenterClient`<sup>Required</sup> <a name="DeleteVcenterClient" id="@cdk_utils/iam.mgn.MgnActions.property.DeleteVcenterClient"></a>

```typescript
public readonly DeleteVcenterClient: string;
```

- *Type:* string

[Write] mgn:DeleteVcenterClient.

---

##### `DeleteWave`<sup>Required</sup> <a name="DeleteWave" id="@cdk_utils/iam.mgn.MgnActions.property.DeleteWave"></a>

```typescript
public readonly DeleteWave: string;
```

- *Type:* string

[Write] mgn:DeleteWave.

---

##### `DescribeJobLogItems`<sup>Required</sup> <a name="DescribeJobLogItems" id="@cdk_utils/iam.mgn.MgnActions.property.DescribeJobLogItems"></a>

```typescript
public readonly DescribeJobLogItems: string;
```

- *Type:* string

[Read] mgn:DescribeJobLogItems.

---

##### `DescribeJobs`<sup>Required</sup> <a name="DescribeJobs" id="@cdk_utils/iam.mgn.MgnActions.property.DescribeJobs"></a>

```typescript
public readonly DescribeJobs: string;
```

- *Type:* string

[List] mgn:DescribeJobs.

---

##### `DescribeLaunchConfigurationTemplates`<sup>Required</sup> <a name="DescribeLaunchConfigurationTemplates" id="@cdk_utils/iam.mgn.MgnActions.property.DescribeLaunchConfigurationTemplates"></a>

```typescript
public readonly DescribeLaunchConfigurationTemplates: string;
```

- *Type:* string

[List] mgn:DescribeLaunchConfigurationTemplates.

---

##### `DescribeReplicationConfigurationTemplates`<sup>Required</sup> <a name="DescribeReplicationConfigurationTemplates" id="@cdk_utils/iam.mgn.MgnActions.property.DescribeReplicationConfigurationTemplates"></a>

```typescript
public readonly DescribeReplicationConfigurationTemplates: string;
```

- *Type:* string

[List] mgn:DescribeReplicationConfigurationTemplates.

---

##### `DescribeReplicationServerAssociationsForMgn`<sup>Required</sup> <a name="DescribeReplicationServerAssociationsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.DescribeReplicationServerAssociationsForMgn"></a>

```typescript
public readonly DescribeReplicationServerAssociationsForMgn: string;
```

- *Type:* string

[Read] mgn:DescribeReplicationServerAssociationsForMgn.

---

##### `DescribeSnapshotRequestsForMgn`<sup>Required</sup> <a name="DescribeSnapshotRequestsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.DescribeSnapshotRequestsForMgn"></a>

```typescript
public readonly DescribeSnapshotRequestsForMgn: string;
```

- *Type:* string

[Read] mgn:DescribeSnapshotRequestsForMgn.

---

##### `DescribeSourceServers`<sup>Required</sup> <a name="DescribeSourceServers" id="@cdk_utils/iam.mgn.MgnActions.property.DescribeSourceServers"></a>

```typescript
public readonly DescribeSourceServers: string;
```

- *Type:* string

[List] mgn:DescribeSourceServers.

---

##### `DescribeVcenterClients`<sup>Required</sup> <a name="DescribeVcenterClients" id="@cdk_utils/iam.mgn.MgnActions.property.DescribeVcenterClients"></a>

```typescript
public readonly DescribeVcenterClients: string;
```

- *Type:* string

[List] mgn:DescribeVcenterClients.

---

##### `DisassociateApplications`<sup>Required</sup> <a name="DisassociateApplications" id="@cdk_utils/iam.mgn.MgnActions.property.DisassociateApplications"></a>

```typescript
public readonly DisassociateApplications: string;
```

- *Type:* string

[Write] mgn:DisassociateApplications.

---

##### `DisassociateSourceServers`<sup>Required</sup> <a name="DisassociateSourceServers" id="@cdk_utils/iam.mgn.MgnActions.property.DisassociateSourceServers"></a>

```typescript
public readonly DisassociateSourceServers: string;
```

- *Type:* string

[Write] mgn:DisassociateSourceServers.

---

##### `DisconnectFromService`<sup>Required</sup> <a name="DisconnectFromService" id="@cdk_utils/iam.mgn.MgnActions.property.DisconnectFromService"></a>

```typescript
public readonly DisconnectFromService: string;
```

- *Type:* string

[Write] mgn:DisconnectFromService.

---

##### `FinalizeCutover`<sup>Required</sup> <a name="FinalizeCutover" id="@cdk_utils/iam.mgn.MgnActions.property.FinalizeCutover"></a>

```typescript
public readonly FinalizeCutover: string;
```

- *Type:* string

[Write] mgn:FinalizeCutover.

---

##### `InitializeService`<sup>Required</sup> <a name="InitializeService" id="@cdk_utils/iam.mgn.MgnActions.property.InitializeService"></a>

```typescript
public readonly InitializeService: string;
```

- *Type:* string

[Write] mgn:InitializeService.

---

##### `IssueClientCertificateForMgn`<sup>Required</sup> <a name="IssueClientCertificateForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.IssueClientCertificateForMgn"></a>

```typescript
public readonly IssueClientCertificateForMgn: string;
```

- *Type:* string

[Write] mgn:IssueClientCertificateForMgn.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.mgn.MgnActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] mgn:ListApplications.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.mgn.MgnActions.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string;
```

- *Type:* string

[Read] mgn:ListConnectors.

---

##### `ListExportErrors`<sup>Required</sup> <a name="ListExportErrors" id="@cdk_utils/iam.mgn.MgnActions.property.ListExportErrors"></a>

```typescript
public readonly ListExportErrors: string;
```

- *Type:* string

[List] mgn:ListExportErrors.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.mgn.MgnActions.property.ListExports"></a>

```typescript
public readonly ListExports: string;
```

- *Type:* string

[List] mgn:ListExports.

---

##### `ListImportErrors`<sup>Required</sup> <a name="ListImportErrors" id="@cdk_utils/iam.mgn.MgnActions.property.ListImportErrors"></a>

```typescript
public readonly ListImportErrors: string;
```

- *Type:* string

[List] mgn:ListImportErrors.

---

##### `ListImportFileEnrichments`<sup>Required</sup> <a name="ListImportFileEnrichments" id="@cdk_utils/iam.mgn.MgnActions.property.ListImportFileEnrichments"></a>

```typescript
public readonly ListImportFileEnrichments: string;
```

- *Type:* string

[List] mgn:ListImportFileEnrichments.

---

##### `ListImports`<sup>Required</sup> <a name="ListImports" id="@cdk_utils/iam.mgn.MgnActions.property.ListImports"></a>

```typescript
public readonly ListImports: string;
```

- *Type:* string

[List] mgn:ListImports.

---

##### `ListManagedAccounts`<sup>Required</sup> <a name="ListManagedAccounts" id="@cdk_utils/iam.mgn.MgnActions.property.ListManagedAccounts"></a>

```typescript
public readonly ListManagedAccounts: string;
```

- *Type:* string

[List] mgn:ListManagedAccounts.

---

##### `ListNetworkMigrationAnalyses`<sup>Required</sup> <a name="ListNetworkMigrationAnalyses" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationAnalyses"></a>

```typescript
public readonly ListNetworkMigrationAnalyses: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationAnalyses.

---

##### `ListNetworkMigrationAnalysisResults`<sup>Required</sup> <a name="ListNetworkMigrationAnalysisResults" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationAnalysisResults"></a>

```typescript
public readonly ListNetworkMigrationAnalysisResults: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationAnalysisResults.

---

##### `ListNetworkMigrationCodeGenerations`<sup>Required</sup> <a name="ListNetworkMigrationCodeGenerations" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationCodeGenerations"></a>

```typescript
public readonly ListNetworkMigrationCodeGenerations: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationCodeGenerations.

---

##### `ListNetworkMigrationCodeGenerationSegments`<sup>Required</sup> <a name="ListNetworkMigrationCodeGenerationSegments" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationCodeGenerationSegments"></a>

```typescript
public readonly ListNetworkMigrationCodeGenerationSegments: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationCodeGenerationSegments.

---

##### `ListNetworkMigrationDefinitions`<sup>Required</sup> <a name="ListNetworkMigrationDefinitions" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationDefinitions"></a>

```typescript
public readonly ListNetworkMigrationDefinitions: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationDefinitions.

---

##### `ListNetworkMigrationDeployedStacks`<sup>Required</sup> <a name="ListNetworkMigrationDeployedStacks" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationDeployedStacks"></a>

```typescript
public readonly ListNetworkMigrationDeployedStacks: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationDeployedStacks.

---

##### `ListNetworkMigrationDeployedStacksDeletions`<sup>Required</sup> <a name="ListNetworkMigrationDeployedStacksDeletions" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationDeployedStacksDeletions"></a>

```typescript
public readonly ListNetworkMigrationDeployedStacksDeletions: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationDeployedStacksDeletions.

---

##### `ListNetworkMigrationDeployments`<sup>Required</sup> <a name="ListNetworkMigrationDeployments" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationDeployments"></a>

```typescript
public readonly ListNetworkMigrationDeployments: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationDeployments.

---

##### `ListNetworkMigrationExecutionArtifacts`<sup>Required</sup> <a name="ListNetworkMigrationExecutionArtifacts" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationExecutionArtifacts"></a>

```typescript
public readonly ListNetworkMigrationExecutionArtifacts: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationExecutionArtifacts.

---

##### `ListNetworkMigrationExecutions`<sup>Required</sup> <a name="ListNetworkMigrationExecutions" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationExecutions"></a>

```typescript
public readonly ListNetworkMigrationExecutions: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationExecutions.

---

##### `ListNetworkMigrationMapperSegmentConstructs`<sup>Required</sup> <a name="ListNetworkMigrationMapperSegmentConstructs" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationMapperSegmentConstructs"></a>

```typescript
public readonly ListNetworkMigrationMapperSegmentConstructs: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationMapperSegmentConstructs.

---

##### `ListNetworkMigrationMapperSegments`<sup>Required</sup> <a name="ListNetworkMigrationMapperSegments" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationMapperSegments"></a>

```typescript
public readonly ListNetworkMigrationMapperSegments: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationMapperSegments.

---

##### `ListNetworkMigrationMappings`<sup>Required</sup> <a name="ListNetworkMigrationMappings" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationMappings"></a>

```typescript
public readonly ListNetworkMigrationMappings: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationMappings.

---

##### `ListNetworkMigrationMappingUpdates`<sup>Required</sup> <a name="ListNetworkMigrationMappingUpdates" id="@cdk_utils/iam.mgn.MgnActions.property.ListNetworkMigrationMappingUpdates"></a>

```typescript
public readonly ListNetworkMigrationMappingUpdates: string;
```

- *Type:* string

[List] mgn:ListNetworkMigrationMappingUpdates.

---

##### `ListSourceServerActions`<sup>Required</sup> <a name="ListSourceServerActions" id="@cdk_utils/iam.mgn.MgnActions.property.ListSourceServerActions"></a>

```typescript
public readonly ListSourceServerActions: string;
```

- *Type:* string

[List] mgn:ListSourceServerActions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mgn.MgnActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] mgn:ListTagsForResource.

---

##### `ListTemplateActions`<sup>Required</sup> <a name="ListTemplateActions" id="@cdk_utils/iam.mgn.MgnActions.property.ListTemplateActions"></a>

```typescript
public readonly ListTemplateActions: string;
```

- *Type:* string

[List] mgn:ListTemplateActions.

---

##### `ListWaves`<sup>Required</sup> <a name="ListWaves" id="@cdk_utils/iam.mgn.MgnActions.property.ListWaves"></a>

```typescript
public readonly ListWaves: string;
```

- *Type:* string

[List] mgn:ListWaves.

---

##### `MarkAsArchived`<sup>Required</sup> <a name="MarkAsArchived" id="@cdk_utils/iam.mgn.MgnActions.property.MarkAsArchived"></a>

```typescript
public readonly MarkAsArchived: string;
```

- *Type:* string

[Write] mgn:MarkAsArchived.

---

##### `NotifyAgentAuthenticationForMgn`<sup>Required</sup> <a name="NotifyAgentAuthenticationForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.NotifyAgentAuthenticationForMgn"></a>

```typescript
public readonly NotifyAgentAuthenticationForMgn: string;
```

- *Type:* string

[Write] mgn:NotifyAgentAuthenticationForMgn.

---

##### `NotifyAgentConnectedForMgn`<sup>Required</sup> <a name="NotifyAgentConnectedForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.NotifyAgentConnectedForMgn"></a>

```typescript
public readonly NotifyAgentConnectedForMgn: string;
```

- *Type:* string

[Write] mgn:NotifyAgentConnectedForMgn.

---

##### `NotifyAgentDisconnectedForMgn`<sup>Required</sup> <a name="NotifyAgentDisconnectedForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.NotifyAgentDisconnectedForMgn"></a>

```typescript
public readonly NotifyAgentDisconnectedForMgn: string;
```

- *Type:* string

[Write] mgn:NotifyAgentDisconnectedForMgn.

---

##### `NotifyAgentReplicationProgressForMgn`<sup>Required</sup> <a name="NotifyAgentReplicationProgressForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.NotifyAgentReplicationProgressForMgn"></a>

```typescript
public readonly NotifyAgentReplicationProgressForMgn: string;
```

- *Type:* string

[Write] mgn:NotifyAgentReplicationProgressForMgn.

---

##### `NotifyVcenterClientStartedForMgn`<sup>Required</sup> <a name="NotifyVcenterClientStartedForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.NotifyVcenterClientStartedForMgn"></a>

```typescript
public readonly NotifyVcenterClientStartedForMgn: string;
```

- *Type:* string

[Write] mgn:NotifyVcenterClientStartedForMgn.

---

##### `PauseReplication`<sup>Required</sup> <a name="PauseReplication" id="@cdk_utils/iam.mgn.MgnActions.property.PauseReplication"></a>

```typescript
public readonly PauseReplication: string;
```

- *Type:* string

[Write] mgn:PauseReplication.

---

##### `PutSourceServerAction`<sup>Required</sup> <a name="PutSourceServerAction" id="@cdk_utils/iam.mgn.MgnActions.property.PutSourceServerAction"></a>

```typescript
public readonly PutSourceServerAction: string;
```

- *Type:* string

[Write] mgn:PutSourceServerAction.

---

##### `PutTemplateAction`<sup>Required</sup> <a name="PutTemplateAction" id="@cdk_utils/iam.mgn.MgnActions.property.PutTemplateAction"></a>

```typescript
public readonly PutTemplateAction: string;
```

- *Type:* string

[Write] mgn:PutTemplateAction.

---

##### `RegisterAgentForMgn`<sup>Required</sup> <a name="RegisterAgentForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.RegisterAgentForMgn"></a>

```typescript
public readonly RegisterAgentForMgn: string;
```

- *Type:* string

[Write] mgn:RegisterAgentForMgn.

---

##### `RemoveSourceServerAction`<sup>Required</sup> <a name="RemoveSourceServerAction" id="@cdk_utils/iam.mgn.MgnActions.property.RemoveSourceServerAction"></a>

```typescript
public readonly RemoveSourceServerAction: string;
```

- *Type:* string

[Write] mgn:RemoveSourceServerAction.

---

##### `RemoveTemplateAction`<sup>Required</sup> <a name="RemoveTemplateAction" id="@cdk_utils/iam.mgn.MgnActions.property.RemoveTemplateAction"></a>

```typescript
public readonly RemoveTemplateAction: string;
```

- *Type:* string

[Write] mgn:RemoveTemplateAction.

---

##### `ResumeReplication`<sup>Required</sup> <a name="ResumeReplication" id="@cdk_utils/iam.mgn.MgnActions.property.ResumeReplication"></a>

```typescript
public readonly ResumeReplication: string;
```

- *Type:* string

[Write] mgn:ResumeReplication.

---

##### `RetryDataReplication`<sup>Required</sup> <a name="RetryDataReplication" id="@cdk_utils/iam.mgn.MgnActions.property.RetryDataReplication"></a>

```typescript
public readonly RetryDataReplication: string;
```

- *Type:* string

[Write] mgn:RetryDataReplication.

---

##### `SendAgentLogsForMgn`<sup>Required</sup> <a name="SendAgentLogsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.SendAgentLogsForMgn"></a>

```typescript
public readonly SendAgentLogsForMgn: string;
```

- *Type:* string

[Write] mgn:SendAgentLogsForMgn.

---

##### `SendAgentMetricsForMgn`<sup>Required</sup> <a name="SendAgentMetricsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.SendAgentMetricsForMgn"></a>

```typescript
public readonly SendAgentMetricsForMgn: string;
```

- *Type:* string

[Write] mgn:SendAgentMetricsForMgn.

---

##### `SendChannelCommandResultForMgn`<sup>Required</sup> <a name="SendChannelCommandResultForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.SendChannelCommandResultForMgn"></a>

```typescript
public readonly SendChannelCommandResultForMgn: string;
```

- *Type:* string

[Write] mgn:SendChannelCommandResultForMgn.

---

##### `SendClientLogsForMgn`<sup>Required</sup> <a name="SendClientLogsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.SendClientLogsForMgn"></a>

```typescript
public readonly SendClientLogsForMgn: string;
```

- *Type:* string

[Write] mgn:SendClientLogsForMgn.

---

##### `SendClientMetricsForMgn`<sup>Required</sup> <a name="SendClientMetricsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.SendClientMetricsForMgn"></a>

```typescript
public readonly SendClientMetricsForMgn: string;
```

- *Type:* string

[Write] mgn:SendClientMetricsForMgn.

---

##### `SendVcenterClientCommandResultForMgn`<sup>Required</sup> <a name="SendVcenterClientCommandResultForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.SendVcenterClientCommandResultForMgn"></a>

```typescript
public readonly SendVcenterClientCommandResultForMgn: string;
```

- *Type:* string

[Write] mgn:SendVcenterClientCommandResultForMgn.

---

##### `SendVcenterClientLogsForMgn`<sup>Required</sup> <a name="SendVcenterClientLogsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.SendVcenterClientLogsForMgn"></a>

```typescript
public readonly SendVcenterClientLogsForMgn: string;
```

- *Type:* string

[Write] mgn:SendVcenterClientLogsForMgn.

---

##### `SendVcenterClientMetricsForMgn`<sup>Required</sup> <a name="SendVcenterClientMetricsForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.SendVcenterClientMetricsForMgn"></a>

```typescript
public readonly SendVcenterClientMetricsForMgn: string;
```

- *Type:* string

[Write] mgn:SendVcenterClientMetricsForMgn.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mgn.MgnActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCutover`<sup>Required</sup> <a name="StartCutover" id="@cdk_utils/iam.mgn.MgnActions.property.StartCutover"></a>

```typescript
public readonly StartCutover: string;
```

- *Type:* string

[Write] mgn:StartCutover.

---

##### `StartExport`<sup>Required</sup> <a name="StartExport" id="@cdk_utils/iam.mgn.MgnActions.property.StartExport"></a>

```typescript
public readonly StartExport: string;
```

- *Type:* string

[Write] mgn:StartExport.

---

##### `StartImport`<sup>Required</sup> <a name="StartImport" id="@cdk_utils/iam.mgn.MgnActions.property.StartImport"></a>

```typescript
public readonly StartImport: string;
```

- *Type:* string

[Write] mgn:StartImport.

---

##### `StartImportFileEnrichment`<sup>Required</sup> <a name="StartImportFileEnrichment" id="@cdk_utils/iam.mgn.MgnActions.property.StartImportFileEnrichment"></a>

```typescript
public readonly StartImportFileEnrichment: string;
```

- *Type:* string

[Write] mgn:StartImportFileEnrichment.

---

##### `StartNetworkMigrationAnalysis`<sup>Required</sup> <a name="StartNetworkMigrationAnalysis" id="@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationAnalysis"></a>

```typescript
public readonly StartNetworkMigrationAnalysis: string;
```

- *Type:* string

[Write] mgn:StartNetworkMigrationAnalysis.

---

##### `StartNetworkMigrationCodeGeneration`<sup>Required</sup> <a name="StartNetworkMigrationCodeGeneration" id="@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationCodeGeneration"></a>

```typescript
public readonly StartNetworkMigrationCodeGeneration: string;
```

- *Type:* string

[Write] mgn:StartNetworkMigrationCodeGeneration.

---

##### `StartNetworkMigrationDeployedStacksDeletion`<sup>Required</sup> <a name="StartNetworkMigrationDeployedStacksDeletion" id="@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationDeployedStacksDeletion"></a>

```typescript
public readonly StartNetworkMigrationDeployedStacksDeletion: string;
```

- *Type:* string

[Write] mgn:StartNetworkMigrationDeployedStacksDeletion.

---

##### `StartNetworkMigrationDeployment`<sup>Required</sup> <a name="StartNetworkMigrationDeployment" id="@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationDeployment"></a>

```typescript
public readonly StartNetworkMigrationDeployment: string;
```

- *Type:* string

[Write] mgn:StartNetworkMigrationDeployment.

---

##### `StartNetworkMigrationMapping`<sup>Required</sup> <a name="StartNetworkMigrationMapping" id="@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationMapping"></a>

```typescript
public readonly StartNetworkMigrationMapping: string;
```

- *Type:* string

[Write] mgn:StartNetworkMigrationMapping.

---

##### `StartNetworkMigrationMappingUpdate`<sup>Required</sup> <a name="StartNetworkMigrationMappingUpdate" id="@cdk_utils/iam.mgn.MgnActions.property.StartNetworkMigrationMappingUpdate"></a>

```typescript
public readonly StartNetworkMigrationMappingUpdate: string;
```

- *Type:* string

[Write] mgn:StartNetworkMigrationMappingUpdate.

---

##### `StartReplication`<sup>Required</sup> <a name="StartReplication" id="@cdk_utils/iam.mgn.MgnActions.property.StartReplication"></a>

```typescript
public readonly StartReplication: string;
```

- *Type:* string

[Write] mgn:StartReplication.

---

##### `StartSnapshotGroupForMgn`<sup>Required</sup> <a name="StartSnapshotGroupForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.StartSnapshotGroupForMgn"></a>

```typescript
public readonly StartSnapshotGroupForMgn: string;
```

- *Type:* string

[Write] mgn:StartSnapshotGroupForMgn.

---

##### `StartTest`<sup>Required</sup> <a name="StartTest" id="@cdk_utils/iam.mgn.MgnActions.property.StartTest"></a>

```typescript
public readonly StartTest: string;
```

- *Type:* string

[Write] mgn:StartTest.

---

##### `StopReplication`<sup>Required</sup> <a name="StopReplication" id="@cdk_utils/iam.mgn.MgnActions.property.StopReplication"></a>

```typescript
public readonly StopReplication: string;
```

- *Type:* string

[Write] mgn:StopReplication.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mgn.MgnActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] mgn:TagResource.

---

##### `TerminateTargetInstances`<sup>Required</sup> <a name="TerminateTargetInstances" id="@cdk_utils/iam.mgn.MgnActions.property.TerminateTargetInstances"></a>

```typescript
public readonly TerminateTargetInstances: string;
```

- *Type:* string

[Write] mgn:TerminateTargetInstances.

---

##### `UnarchiveApplication`<sup>Required</sup> <a name="UnarchiveApplication" id="@cdk_utils/iam.mgn.MgnActions.property.UnarchiveApplication"></a>

```typescript
public readonly UnarchiveApplication: string;
```

- *Type:* string

[Write] mgn:UnarchiveApplication.

---

##### `UnarchiveWave`<sup>Required</sup> <a name="UnarchiveWave" id="@cdk_utils/iam.mgn.MgnActions.property.UnarchiveWave"></a>

```typescript
public readonly UnarchiveWave: string;
```

- *Type:* string

[Write] mgn:UnarchiveWave.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mgn.MgnActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] mgn:UntagResource.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string;
```

- *Type:* string

[Write] mgn:UpdateAccountSettings.

---

##### `UpdateAgentBacklogForMgn`<sup>Required</sup> <a name="UpdateAgentBacklogForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateAgentBacklogForMgn"></a>

```typescript
public readonly UpdateAgentBacklogForMgn: string;
```

- *Type:* string

[Write] mgn:UpdateAgentBacklogForMgn.

---

##### `UpdateAgentConversionInfoForMgn`<sup>Required</sup> <a name="UpdateAgentConversionInfoForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateAgentConversionInfoForMgn"></a>

```typescript
public readonly UpdateAgentConversionInfoForMgn: string;
```

- *Type:* string

[Write] mgn:UpdateAgentConversionInfoForMgn.

---

##### `UpdateAgentReplicationInfoForMgn`<sup>Required</sup> <a name="UpdateAgentReplicationInfoForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateAgentReplicationInfoForMgn"></a>

```typescript
public readonly UpdateAgentReplicationInfoForMgn: string;
```

- *Type:* string

[Write] mgn:UpdateAgentReplicationInfoForMgn.

---

##### `UpdateAgentReplicationProcessStateForMgn`<sup>Required</sup> <a name="UpdateAgentReplicationProcessStateForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateAgentReplicationProcessStateForMgn"></a>

```typescript
public readonly UpdateAgentReplicationProcessStateForMgn: string;
```

- *Type:* string

[Write] mgn:UpdateAgentReplicationProcessStateForMgn.

---

##### `UpdateAgentSourcePropertiesForMgn`<sup>Required</sup> <a name="UpdateAgentSourcePropertiesForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateAgentSourcePropertiesForMgn"></a>

```typescript
public readonly UpdateAgentSourcePropertiesForMgn: string;
```

- *Type:* string

[Write] mgn:UpdateAgentSourcePropertiesForMgn.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] mgn:UpdateApplication.

---

##### `UpdateConnector`<sup>Required</sup> <a name="UpdateConnector" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateConnector"></a>

```typescript
public readonly UpdateConnector: string;
```

- *Type:* string

[Write] mgn:UpdateConnector.

---

##### `UpdateLaunchConfiguration`<sup>Required</sup> <a name="UpdateLaunchConfiguration" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateLaunchConfiguration"></a>

```typescript
public readonly UpdateLaunchConfiguration: string;
```

- *Type:* string

[Write] mgn:UpdateLaunchConfiguration.

---

##### `UpdateLaunchConfigurationTemplate`<sup>Required</sup> <a name="UpdateLaunchConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateLaunchConfigurationTemplate"></a>

```typescript
public readonly UpdateLaunchConfigurationTemplate: string;
```

- *Type:* string

[Write] mgn:UpdateLaunchConfigurationTemplate.

---

##### `UpdateNetworkMigrationDefinition`<sup>Required</sup> <a name="UpdateNetworkMigrationDefinition" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateNetworkMigrationDefinition"></a>

```typescript
public readonly UpdateNetworkMigrationDefinition: string;
```

- *Type:* string

[Write] mgn:UpdateNetworkMigrationDefinition.

---

##### `UpdateNetworkMigrationMapperSegment`<sup>Required</sup> <a name="UpdateNetworkMigrationMapperSegment" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateNetworkMigrationMapperSegment"></a>

```typescript
public readonly UpdateNetworkMigrationMapperSegment: string;
```

- *Type:* string

[Write] mgn:UpdateNetworkMigrationMapperSegment.

---

##### `UpdateNetworkMigrationMapperSegmentConstruct`<sup>Required</sup> <a name="UpdateNetworkMigrationMapperSegmentConstruct" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateNetworkMigrationMapperSegmentConstruct"></a>

```typescript
public readonly UpdateNetworkMigrationMapperSegmentConstruct: string;
```

- *Type:* string

[Write] mgn:UpdateNetworkMigrationMapperSegmentConstruct.

---

##### `UpdateReplicationConfiguration`<sup>Required</sup> <a name="UpdateReplicationConfiguration" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateReplicationConfiguration"></a>

```typescript
public readonly UpdateReplicationConfiguration: string;
```

- *Type:* string

[Write] mgn:UpdateReplicationConfiguration.

---

##### `UpdateReplicationConfigurationTemplate`<sup>Required</sup> <a name="UpdateReplicationConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateReplicationConfigurationTemplate"></a>

```typescript
public readonly UpdateReplicationConfigurationTemplate: string;
```

- *Type:* string

[Write] mgn:UpdateReplicationConfigurationTemplate.

---

##### `UpdateSourceServer`<sup>Required</sup> <a name="UpdateSourceServer" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateSourceServer"></a>

```typescript
public readonly UpdateSourceServer: string;
```

- *Type:* string

[Write] mgn:UpdateSourceServer.

---

##### `UpdateSourceServerReplicationType`<sup>Required</sup> <a name="UpdateSourceServerReplicationType" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateSourceServerReplicationType"></a>

```typescript
public readonly UpdateSourceServerReplicationType: string;
```

- *Type:* string

[Write] mgn:UpdateSourceServerReplicationType.

---

##### `UpdateWave`<sup>Required</sup> <a name="UpdateWave" id="@cdk_utils/iam.mgn.MgnActions.property.UpdateWave"></a>

```typescript
public readonly UpdateWave: string;
```

- *Type:* string

[Write] mgn:UpdateWave.

---

##### `VerifyClientRoleForMgn`<sup>Required</sup> <a name="VerifyClientRoleForMgn" id="@cdk_utils/iam.mgn.MgnActions.property.VerifyClientRoleForMgn"></a>

```typescript
public readonly VerifyClientRoleForMgn: string;
```

- *Type:* string

[Read] mgn:VerifyClientRoleForMgn.

---

### MgnConditions <a name="MgnConditions" id="@cdk_utils/iam.mgn.MgnConditions"></a>

Condition key constants and builders for mgn.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mgn.MgnConditions.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

new mgn.MgnConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.createAction">createAction</a></code> | Generates a condition block for `mgn:CreateAction`. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `createAction` <a name="createAction" id="@cdk_utils/iam.mgn.MgnConditions.createAction"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnConditions.createAction(value: string)
```

Generates a condition block for `mgn:CreateAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mgn.MgnConditions.createAction.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mgn.MgnConditions.requestTag"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mgn.MgnConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mgn.MgnConditions.resourceTag"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mgn.MgnConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mgn.MgnConditions.tagKeys"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mgn.MgnConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.CREATE_ACTION">CREATE_ACTION</a></code> | <code>string</code> | Condition key: mgn:CreateAction (String). |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.CreateConnectorConditionKeys">CreateConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnector action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.CreateLaunchConfigurationTemplateConditionKeys">CreateLaunchConfigurationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLaunchConfigurationTemplate action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.CreateNetworkMigrationDefinitionConditionKeys">CreateNetworkMigrationDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNetworkMigrationDefinition action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.CreateReplicationConfigurationTemplateConditionKeys">CreateReplicationConfigurationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReplicationConfigurationTemplate action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.CreateVcenterClientForMgnConditionKeys">CreateVcenterClientForMgnConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVcenterClientForMgn action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.CreateWaveConditionKeys">CreateWaveConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWave action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.RegisterAgentForMgnConditionKeys">RegisterAgentForMgnConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterAgentForMgn action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.StartCutoverConditionKeys">StartCutoverConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartCutover action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.StartExportConditionKeys">StartExportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartExport action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.StartImportConditionKeys">StartImportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartImport action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.StartTestConditionKeys">StartTestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTest action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.TerminateTargetInstancesConditionKeys">TerminateTargetInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TerminateTargetInstances action. |
| <code><a href="#@cdk_utils/iam.mgn.MgnConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mgn.MgnConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mgn.MgnConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mgn.MgnConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CREATE_ACTION`<sup>Required</sup> <a name="CREATE_ACTION" id="@cdk_utils/iam.mgn.MgnConditions.property.CREATE_ACTION"></a>

```typescript
public readonly CREATE_ACTION: string;
```

- *Type:* string

Condition key: mgn:CreateAction (String).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateConnectorConditionKeys`<sup>Required</sup> <a name="CreateConnectorConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.CreateConnectorConditionKeys"></a>

```typescript
public readonly CreateConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnector action.

---

##### `CreateLaunchConfigurationTemplateConditionKeys`<sup>Required</sup> <a name="CreateLaunchConfigurationTemplateConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.CreateLaunchConfigurationTemplateConditionKeys"></a>

```typescript
public readonly CreateLaunchConfigurationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLaunchConfigurationTemplate action.

---

##### `CreateNetworkMigrationDefinitionConditionKeys`<sup>Required</sup> <a name="CreateNetworkMigrationDefinitionConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.CreateNetworkMigrationDefinitionConditionKeys"></a>

```typescript
public readonly CreateNetworkMigrationDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNetworkMigrationDefinition action.

---

##### `CreateReplicationConfigurationTemplateConditionKeys`<sup>Required</sup> <a name="CreateReplicationConfigurationTemplateConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.CreateReplicationConfigurationTemplateConditionKeys"></a>

```typescript
public readonly CreateReplicationConfigurationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReplicationConfigurationTemplate action.

---

##### `CreateVcenterClientForMgnConditionKeys`<sup>Required</sup> <a name="CreateVcenterClientForMgnConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.CreateVcenterClientForMgnConditionKeys"></a>

```typescript
public readonly CreateVcenterClientForMgnConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVcenterClientForMgn action.

---

##### `CreateWaveConditionKeys`<sup>Required</sup> <a name="CreateWaveConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.CreateWaveConditionKeys"></a>

```typescript
public readonly CreateWaveConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWave action.

---

##### `RegisterAgentForMgnConditionKeys`<sup>Required</sup> <a name="RegisterAgentForMgnConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.RegisterAgentForMgnConditionKeys"></a>

```typescript
public readonly RegisterAgentForMgnConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterAgentForMgn action.

---

##### `StartCutoverConditionKeys`<sup>Required</sup> <a name="StartCutoverConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.StartCutoverConditionKeys"></a>

```typescript
public readonly StartCutoverConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartCutover action.

---

##### `StartExportConditionKeys`<sup>Required</sup> <a name="StartExportConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.StartExportConditionKeys"></a>

```typescript
public readonly StartExportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartExport action.

---

##### `StartImportConditionKeys`<sup>Required</sup> <a name="StartImportConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.StartImportConditionKeys"></a>

```typescript
public readonly StartImportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartImport action.

---

##### `StartTestConditionKeys`<sup>Required</sup> <a name="StartTestConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.StartTestConditionKeys"></a>

```typescript
public readonly StartTestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTest action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TerminateTargetInstancesConditionKeys`<sup>Required</sup> <a name="TerminateTargetInstancesConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.TerminateTargetInstancesConditionKeys"></a>

```typescript
public readonly TerminateTargetInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TerminateTargetInstances action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.mgn.MgnConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### MgnOperations <a name="MgnOperations" id="@cdk_utils/iam.mgn.MgnOperations"></a>

API operation to required IAM actions mapping for mgn.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mgn.MgnOperations.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

new mgn.MgnOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ArchiveApplication">ArchiveApplication</a></code> | <code>string[]</code> | IAM actions required for the ArchiveApplication API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ArchiveWave">ArchiveWave</a></code> | <code>string[]</code> | IAM actions required for the ArchiveWave API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.AssociateApplications">AssociateApplications</a></code> | <code>string[]</code> | IAM actions required for the AssociateApplications API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.AssociateSourceServers">AssociateSourceServers</a></code> | <code>string[]</code> | IAM actions required for the AssociateSourceServers API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ChangeServerLifeCycleState">ChangeServerLifeCycleState</a></code> | <code>string[]</code> | IAM actions required for the ChangeServerLifeCycleState API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.CreateConnector">CreateConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateConnector API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.CreateLaunchConfigurationTemplate">CreateLaunchConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateLaunchConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.CreateNetworkMigrationDefinition">CreateNetworkMigrationDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateNetworkMigrationDefinition API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.CreateReplicationConfigurationTemplate">CreateReplicationConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateReplicationConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.CreateWave">CreateWave</a></code> | <code>string[]</code> | IAM actions required for the CreateWave API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DeleteConnector">DeleteConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnector API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DeleteJob">DeleteJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteJob API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DeleteLaunchConfigurationTemplate">DeleteLaunchConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteLaunchConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DeleteNetworkMigrationDefinition">DeleteNetworkMigrationDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteNetworkMigrationDefinition API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DeleteReplicationConfigurationTemplate">DeleteReplicationConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteReplicationConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DeleteSourceServer">DeleteSourceServer</a></code> | <code>string[]</code> | IAM actions required for the DeleteSourceServer API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DeleteVcenterClient">DeleteVcenterClient</a></code> | <code>string[]</code> | IAM actions required for the DeleteVcenterClient API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DeleteWave">DeleteWave</a></code> | <code>string[]</code> | IAM actions required for the DeleteWave API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DescribeJobLogItems">DescribeJobLogItems</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobLogItems API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DescribeJobs">DescribeJobs</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobs API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DescribeLaunchConfigurationTemplates">DescribeLaunchConfigurationTemplates</a></code> | <code>string[]</code> | IAM actions required for the DescribeLaunchConfigurationTemplates API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DescribeReplicationConfigurationTemplates">DescribeReplicationConfigurationTemplates</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationConfigurationTemplates API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DescribeSourceServers">DescribeSourceServers</a></code> | <code>string[]</code> | IAM actions required for the DescribeSourceServers API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DescribeVcenterClients">DescribeVcenterClients</a></code> | <code>string[]</code> | IAM actions required for the DescribeVcenterClients API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DisassociateApplications">DisassociateApplications</a></code> | <code>string[]</code> | IAM actions required for the DisassociateApplications API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DisassociateSourceServers">DisassociateSourceServers</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSourceServers API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.DisconnectFromService">DisconnectFromService</a></code> | <code>string[]</code> | IAM actions required for the DisconnectFromService API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.FinalizeCutover">FinalizeCutover</a></code> | <code>string[]</code> | IAM actions required for the FinalizeCutover API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.InitializeService">InitializeService</a></code> | <code>string[]</code> | IAM actions required for the InitializeService API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListConnectors">ListConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListConnectors API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListExportErrors">ListExportErrors</a></code> | <code>string[]</code> | IAM actions required for the ListExportErrors API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListExports">ListExports</a></code> | <code>string[]</code> | IAM actions required for the ListExports API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListImportErrors">ListImportErrors</a></code> | <code>string[]</code> | IAM actions required for the ListImportErrors API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListImportFileEnrichments">ListImportFileEnrichments</a></code> | <code>string[]</code> | IAM actions required for the ListImportFileEnrichments API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListImports">ListImports</a></code> | <code>string[]</code> | IAM actions required for the ListImports API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListManagedAccounts">ListManagedAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListManagedAccounts API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationAnalyses">ListNetworkMigrationAnalyses</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationAnalyses API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationAnalysisResults">ListNetworkMigrationAnalysisResults</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationAnalysisResults API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationCodeGenerations">ListNetworkMigrationCodeGenerations</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationCodeGenerations API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationCodeGenerationSegments">ListNetworkMigrationCodeGenerationSegments</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationCodeGenerationSegments API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationDefinitions">ListNetworkMigrationDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationDefinitions API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationDeployedStacks">ListNetworkMigrationDeployedStacks</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationDeployedStacks API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationDeployments">ListNetworkMigrationDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationDeployments API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationExecutions">ListNetworkMigrationExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationExecutions API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationMapperSegmentConstructs">ListNetworkMigrationMapperSegmentConstructs</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationMapperSegmentConstructs API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationMapperSegments">ListNetworkMigrationMapperSegments</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationMapperSegments API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationMappings">ListNetworkMigrationMappings</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationMappings API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationMappingUpdates">ListNetworkMigrationMappingUpdates</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkMigrationMappingUpdates API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListSourceServerActions">ListSourceServerActions</a></code> | <code>string[]</code> | IAM actions required for the ListSourceServerActions API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListTemplateActions">ListTemplateActions</a></code> | <code>string[]</code> | IAM actions required for the ListTemplateActions API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ListWaves">ListWaves</a></code> | <code>string[]</code> | IAM actions required for the ListWaves API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.MarkAsArchived">MarkAsArchived</a></code> | <code>string[]</code> | IAM actions required for the MarkAsArchived API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.opGetLaunchConfiguration">opGetLaunchConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetLaunchConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.opGetNetworkMigrationDefinition">opGetNetworkMigrationDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkMigrationDefinition API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.opGetNetworkMigrationMapperSegmentConstruct">opGetNetworkMigrationMapperSegmentConstruct</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkMigrationMapperSegmentConstruct API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.opGetReplicationConfiguration">opGetReplicationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetReplicationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.PauseReplication">PauseReplication</a></code> | <code>string[]</code> | IAM actions required for the PauseReplication API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.PutSourceServerAction">PutSourceServerAction</a></code> | <code>string[]</code> | IAM actions required for the PutSourceServerAction API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.PutTemplateAction">PutTemplateAction</a></code> | <code>string[]</code> | IAM actions required for the PutTemplateAction API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.RemoveSourceServerAction">RemoveSourceServerAction</a></code> | <code>string[]</code> | IAM actions required for the RemoveSourceServerAction API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.RemoveTemplateAction">RemoveTemplateAction</a></code> | <code>string[]</code> | IAM actions required for the RemoveTemplateAction API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.ResumeReplication">ResumeReplication</a></code> | <code>string[]</code> | IAM actions required for the ResumeReplication API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.RetryDataReplication">RetryDataReplication</a></code> | <code>string[]</code> | IAM actions required for the RetryDataReplication API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StartCutover">StartCutover</a></code> | <code>string[]</code> | IAM actions required for the StartCutover API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StartExport">StartExport</a></code> | <code>string[]</code> | IAM actions required for the StartExport API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StartImport">StartImport</a></code> | <code>string[]</code> | IAM actions required for the StartImport API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StartImportFileEnrichment">StartImportFileEnrichment</a></code> | <code>string[]</code> | IAM actions required for the StartImportFileEnrichment API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StartNetworkMigrationAnalysis">StartNetworkMigrationAnalysis</a></code> | <code>string[]</code> | IAM actions required for the StartNetworkMigrationAnalysis API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StartNetworkMigrationCodeGeneration">StartNetworkMigrationCodeGeneration</a></code> | <code>string[]</code> | IAM actions required for the StartNetworkMigrationCodeGeneration API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StartNetworkMigrationDeployment">StartNetworkMigrationDeployment</a></code> | <code>string[]</code> | IAM actions required for the StartNetworkMigrationDeployment API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StartNetworkMigrationMapping">StartNetworkMigrationMapping</a></code> | <code>string[]</code> | IAM actions required for the StartNetworkMigrationMapping API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StartNetworkMigrationMappingUpdate">StartNetworkMigrationMappingUpdate</a></code> | <code>string[]</code> | IAM actions required for the StartNetworkMigrationMappingUpdate API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StartReplication">StartReplication</a></code> | <code>string[]</code> | IAM actions required for the StartReplication API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StartTest">StartTest</a></code> | <code>string[]</code> | IAM actions required for the StartTest API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.StopReplication">StopReplication</a></code> | <code>string[]</code> | IAM actions required for the StopReplication API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.TerminateTargetInstances">TerminateTargetInstances</a></code> | <code>string[]</code> | IAM actions required for the TerminateTargetInstances API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UnarchiveApplication">UnarchiveApplication</a></code> | <code>string[]</code> | IAM actions required for the UnarchiveApplication API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UnarchiveWave">UnarchiveWave</a></code> | <code>string[]</code> | IAM actions required for the UnarchiveWave API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UpdateConnector">UpdateConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnector API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UpdateLaunchConfiguration">UpdateLaunchConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateLaunchConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UpdateLaunchConfigurationTemplate">UpdateLaunchConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateLaunchConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UpdateNetworkMigrationDefinition">UpdateNetworkMigrationDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateNetworkMigrationDefinition API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UpdateNetworkMigrationMapperSegment">UpdateNetworkMigrationMapperSegment</a></code> | <code>string[]</code> | IAM actions required for the UpdateNetworkMigrationMapperSegment API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UpdateReplicationConfiguration">UpdateReplicationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateReplicationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UpdateReplicationConfigurationTemplate">UpdateReplicationConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateReplicationConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UpdateSourceServer">UpdateSourceServer</a></code> | <code>string[]</code> | IAM actions required for the UpdateSourceServer API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UpdateSourceServerReplicationType">UpdateSourceServerReplicationType</a></code> | <code>string[]</code> | IAM actions required for the UpdateSourceServerReplicationType API call. |
| <code><a href="#@cdk_utils/iam.mgn.MgnOperations.property.UpdateWave">UpdateWave</a></code> | <code>string[]</code> | IAM actions required for the UpdateWave API call. |

---

##### `ArchiveApplication`<sup>Required</sup> <a name="ArchiveApplication" id="@cdk_utils/iam.mgn.MgnOperations.property.ArchiveApplication"></a>

```typescript
public readonly ArchiveApplication: string[];
```

- *Type:* string[]

IAM actions required for the ArchiveApplication API call.

---

##### `ArchiveWave`<sup>Required</sup> <a name="ArchiveWave" id="@cdk_utils/iam.mgn.MgnOperations.property.ArchiveWave"></a>

```typescript
public readonly ArchiveWave: string[];
```

- *Type:* string[]

IAM actions required for the ArchiveWave API call.

---

##### `AssociateApplications`<sup>Required</sup> <a name="AssociateApplications" id="@cdk_utils/iam.mgn.MgnOperations.property.AssociateApplications"></a>

```typescript
public readonly AssociateApplications: string[];
```

- *Type:* string[]

IAM actions required for the AssociateApplications API call.

---

##### `AssociateSourceServers`<sup>Required</sup> <a name="AssociateSourceServers" id="@cdk_utils/iam.mgn.MgnOperations.property.AssociateSourceServers"></a>

```typescript
public readonly AssociateSourceServers: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSourceServers API call.

---

##### `ChangeServerLifeCycleState`<sup>Required</sup> <a name="ChangeServerLifeCycleState" id="@cdk_utils/iam.mgn.MgnOperations.property.ChangeServerLifeCycleState"></a>

```typescript
public readonly ChangeServerLifeCycleState: string[];
```

- *Type:* string[]

IAM actions required for the ChangeServerLifeCycleState API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.mgn.MgnOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.mgn.MgnOperations.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnector API call.

---

##### `CreateLaunchConfigurationTemplate`<sup>Required</sup> <a name="CreateLaunchConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnOperations.property.CreateLaunchConfigurationTemplate"></a>

```typescript
public readonly CreateLaunchConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateLaunchConfigurationTemplate API call.

---

##### `CreateNetworkMigrationDefinition`<sup>Required</sup> <a name="CreateNetworkMigrationDefinition" id="@cdk_utils/iam.mgn.MgnOperations.property.CreateNetworkMigrationDefinition"></a>

```typescript
public readonly CreateNetworkMigrationDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateNetworkMigrationDefinition API call.

---

##### `CreateReplicationConfigurationTemplate`<sup>Required</sup> <a name="CreateReplicationConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnOperations.property.CreateReplicationConfigurationTemplate"></a>

```typescript
public readonly CreateReplicationConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateReplicationConfigurationTemplate API call.

---

##### `CreateWave`<sup>Required</sup> <a name="CreateWave" id="@cdk_utils/iam.mgn.MgnOperations.property.CreateWave"></a>

```typescript
public readonly CreateWave: string[];
```

- *Type:* string[]

IAM actions required for the CreateWave API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.mgn.MgnOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.mgn.MgnOperations.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnector API call.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.mgn.MgnOperations.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJob API call.

---

##### `DeleteLaunchConfigurationTemplate`<sup>Required</sup> <a name="DeleteLaunchConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnOperations.property.DeleteLaunchConfigurationTemplate"></a>

```typescript
public readonly DeleteLaunchConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLaunchConfigurationTemplate API call.

---

##### `DeleteNetworkMigrationDefinition`<sup>Required</sup> <a name="DeleteNetworkMigrationDefinition" id="@cdk_utils/iam.mgn.MgnOperations.property.DeleteNetworkMigrationDefinition"></a>

```typescript
public readonly DeleteNetworkMigrationDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNetworkMigrationDefinition API call.

---

##### `DeleteReplicationConfigurationTemplate`<sup>Required</sup> <a name="DeleteReplicationConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnOperations.property.DeleteReplicationConfigurationTemplate"></a>

```typescript
public readonly DeleteReplicationConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReplicationConfigurationTemplate API call.

---

##### `DeleteSourceServer`<sup>Required</sup> <a name="DeleteSourceServer" id="@cdk_utils/iam.mgn.MgnOperations.property.DeleteSourceServer"></a>

```typescript
public readonly DeleteSourceServer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSourceServer API call.

---

##### `DeleteVcenterClient`<sup>Required</sup> <a name="DeleteVcenterClient" id="@cdk_utils/iam.mgn.MgnOperations.property.DeleteVcenterClient"></a>

```typescript
public readonly DeleteVcenterClient: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVcenterClient API call.

---

##### `DeleteWave`<sup>Required</sup> <a name="DeleteWave" id="@cdk_utils/iam.mgn.MgnOperations.property.DeleteWave"></a>

```typescript
public readonly DeleteWave: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWave API call.

---

##### `DescribeJobLogItems`<sup>Required</sup> <a name="DescribeJobLogItems" id="@cdk_utils/iam.mgn.MgnOperations.property.DescribeJobLogItems"></a>

```typescript
public readonly DescribeJobLogItems: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobLogItems API call.

---

##### `DescribeJobs`<sup>Required</sup> <a name="DescribeJobs" id="@cdk_utils/iam.mgn.MgnOperations.property.DescribeJobs"></a>

```typescript
public readonly DescribeJobs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobs API call.

---

##### `DescribeLaunchConfigurationTemplates`<sup>Required</sup> <a name="DescribeLaunchConfigurationTemplates" id="@cdk_utils/iam.mgn.MgnOperations.property.DescribeLaunchConfigurationTemplates"></a>

```typescript
public readonly DescribeLaunchConfigurationTemplates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLaunchConfigurationTemplates API call.

---

##### `DescribeReplicationConfigurationTemplates`<sup>Required</sup> <a name="DescribeReplicationConfigurationTemplates" id="@cdk_utils/iam.mgn.MgnOperations.property.DescribeReplicationConfigurationTemplates"></a>

```typescript
public readonly DescribeReplicationConfigurationTemplates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationConfigurationTemplates API call.

---

##### `DescribeSourceServers`<sup>Required</sup> <a name="DescribeSourceServers" id="@cdk_utils/iam.mgn.MgnOperations.property.DescribeSourceServers"></a>

```typescript
public readonly DescribeSourceServers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSourceServers API call.

---

##### `DescribeVcenterClients`<sup>Required</sup> <a name="DescribeVcenterClients" id="@cdk_utils/iam.mgn.MgnOperations.property.DescribeVcenterClients"></a>

```typescript
public readonly DescribeVcenterClients: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVcenterClients API call.

---

##### `DisassociateApplications`<sup>Required</sup> <a name="DisassociateApplications" id="@cdk_utils/iam.mgn.MgnOperations.property.DisassociateApplications"></a>

```typescript
public readonly DisassociateApplications: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateApplications API call.

---

##### `DisassociateSourceServers`<sup>Required</sup> <a name="DisassociateSourceServers" id="@cdk_utils/iam.mgn.MgnOperations.property.DisassociateSourceServers"></a>

```typescript
public readonly DisassociateSourceServers: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSourceServers API call.

---

##### `DisconnectFromService`<sup>Required</sup> <a name="DisconnectFromService" id="@cdk_utils/iam.mgn.MgnOperations.property.DisconnectFromService"></a>

```typescript
public readonly DisconnectFromService: string[];
```

- *Type:* string[]

IAM actions required for the DisconnectFromService API call.

---

##### `FinalizeCutover`<sup>Required</sup> <a name="FinalizeCutover" id="@cdk_utils/iam.mgn.MgnOperations.property.FinalizeCutover"></a>

```typescript
public readonly FinalizeCutover: string[];
```

- *Type:* string[]

IAM actions required for the FinalizeCutover API call.

---

##### `InitializeService`<sup>Required</sup> <a name="InitializeService" id="@cdk_utils/iam.mgn.MgnOperations.property.InitializeService"></a>

```typescript
public readonly InitializeService: string[];
```

- *Type:* string[]

IAM actions required for the InitializeService API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.mgn.MgnOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.mgn.MgnOperations.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectors API call.

---

##### `ListExportErrors`<sup>Required</sup> <a name="ListExportErrors" id="@cdk_utils/iam.mgn.MgnOperations.property.ListExportErrors"></a>

```typescript
public readonly ListExportErrors: string[];
```

- *Type:* string[]

IAM actions required for the ListExportErrors API call.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.mgn.MgnOperations.property.ListExports"></a>

```typescript
public readonly ListExports: string[];
```

- *Type:* string[]

IAM actions required for the ListExports API call.

---

##### `ListImportErrors`<sup>Required</sup> <a name="ListImportErrors" id="@cdk_utils/iam.mgn.MgnOperations.property.ListImportErrors"></a>

```typescript
public readonly ListImportErrors: string[];
```

- *Type:* string[]

IAM actions required for the ListImportErrors API call.

---

##### `ListImportFileEnrichments`<sup>Required</sup> <a name="ListImportFileEnrichments" id="@cdk_utils/iam.mgn.MgnOperations.property.ListImportFileEnrichments"></a>

```typescript
public readonly ListImportFileEnrichments: string[];
```

- *Type:* string[]

IAM actions required for the ListImportFileEnrichments API call.

---

##### `ListImports`<sup>Required</sup> <a name="ListImports" id="@cdk_utils/iam.mgn.MgnOperations.property.ListImports"></a>

```typescript
public readonly ListImports: string[];
```

- *Type:* string[]

IAM actions required for the ListImports API call.

---

##### `ListManagedAccounts`<sup>Required</sup> <a name="ListManagedAccounts" id="@cdk_utils/iam.mgn.MgnOperations.property.ListManagedAccounts"></a>

```typescript
public readonly ListManagedAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedAccounts API call.

---

##### `ListNetworkMigrationAnalyses`<sup>Required</sup> <a name="ListNetworkMigrationAnalyses" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationAnalyses"></a>

```typescript
public readonly ListNetworkMigrationAnalyses: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationAnalyses API call.

---

##### `ListNetworkMigrationAnalysisResults`<sup>Required</sup> <a name="ListNetworkMigrationAnalysisResults" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationAnalysisResults"></a>

```typescript
public readonly ListNetworkMigrationAnalysisResults: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationAnalysisResults API call.

---

##### `ListNetworkMigrationCodeGenerations`<sup>Required</sup> <a name="ListNetworkMigrationCodeGenerations" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationCodeGenerations"></a>

```typescript
public readonly ListNetworkMigrationCodeGenerations: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationCodeGenerations API call.

---

##### `ListNetworkMigrationCodeGenerationSegments`<sup>Required</sup> <a name="ListNetworkMigrationCodeGenerationSegments" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationCodeGenerationSegments"></a>

```typescript
public readonly ListNetworkMigrationCodeGenerationSegments: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationCodeGenerationSegments API call.

---

##### `ListNetworkMigrationDefinitions`<sup>Required</sup> <a name="ListNetworkMigrationDefinitions" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationDefinitions"></a>

```typescript
public readonly ListNetworkMigrationDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationDefinitions API call.

---

##### `ListNetworkMigrationDeployedStacks`<sup>Required</sup> <a name="ListNetworkMigrationDeployedStacks" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationDeployedStacks"></a>

```typescript
public readonly ListNetworkMigrationDeployedStacks: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationDeployedStacks API call.

---

##### `ListNetworkMigrationDeployments`<sup>Required</sup> <a name="ListNetworkMigrationDeployments" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationDeployments"></a>

```typescript
public readonly ListNetworkMigrationDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationDeployments API call.

---

##### `ListNetworkMigrationExecutions`<sup>Required</sup> <a name="ListNetworkMigrationExecutions" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationExecutions"></a>

```typescript
public readonly ListNetworkMigrationExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationExecutions API call.

---

##### `ListNetworkMigrationMapperSegmentConstructs`<sup>Required</sup> <a name="ListNetworkMigrationMapperSegmentConstructs" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationMapperSegmentConstructs"></a>

```typescript
public readonly ListNetworkMigrationMapperSegmentConstructs: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationMapperSegmentConstructs API call.

---

##### `ListNetworkMigrationMapperSegments`<sup>Required</sup> <a name="ListNetworkMigrationMapperSegments" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationMapperSegments"></a>

```typescript
public readonly ListNetworkMigrationMapperSegments: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationMapperSegments API call.

---

##### `ListNetworkMigrationMappings`<sup>Required</sup> <a name="ListNetworkMigrationMappings" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationMappings"></a>

```typescript
public readonly ListNetworkMigrationMappings: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationMappings API call.

---

##### `ListNetworkMigrationMappingUpdates`<sup>Required</sup> <a name="ListNetworkMigrationMappingUpdates" id="@cdk_utils/iam.mgn.MgnOperations.property.ListNetworkMigrationMappingUpdates"></a>

```typescript
public readonly ListNetworkMigrationMappingUpdates: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkMigrationMappingUpdates API call.

---

##### `ListSourceServerActions`<sup>Required</sup> <a name="ListSourceServerActions" id="@cdk_utils/iam.mgn.MgnOperations.property.ListSourceServerActions"></a>

```typescript
public readonly ListSourceServerActions: string[];
```

- *Type:* string[]

IAM actions required for the ListSourceServerActions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mgn.MgnOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTemplateActions`<sup>Required</sup> <a name="ListTemplateActions" id="@cdk_utils/iam.mgn.MgnOperations.property.ListTemplateActions"></a>

```typescript
public readonly ListTemplateActions: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplateActions API call.

---

##### `ListWaves`<sup>Required</sup> <a name="ListWaves" id="@cdk_utils/iam.mgn.MgnOperations.property.ListWaves"></a>

```typescript
public readonly ListWaves: string[];
```

- *Type:* string[]

IAM actions required for the ListWaves API call.

---

##### `MarkAsArchived`<sup>Required</sup> <a name="MarkAsArchived" id="@cdk_utils/iam.mgn.MgnOperations.property.MarkAsArchived"></a>

```typescript
public readonly MarkAsArchived: string[];
```

- *Type:* string[]

IAM actions required for the MarkAsArchived API call.

---

##### `opGetLaunchConfiguration`<sup>Required</sup> <a name="opGetLaunchConfiguration" id="@cdk_utils/iam.mgn.MgnOperations.property.opGetLaunchConfiguration"></a>

```typescript
public readonly opGetLaunchConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetLaunchConfiguration API call.

---

##### `opGetNetworkMigrationDefinition`<sup>Required</sup> <a name="opGetNetworkMigrationDefinition" id="@cdk_utils/iam.mgn.MgnOperations.property.opGetNetworkMigrationDefinition"></a>

```typescript
public readonly opGetNetworkMigrationDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkMigrationDefinition API call.

---

##### `opGetNetworkMigrationMapperSegmentConstruct`<sup>Required</sup> <a name="opGetNetworkMigrationMapperSegmentConstruct" id="@cdk_utils/iam.mgn.MgnOperations.property.opGetNetworkMigrationMapperSegmentConstruct"></a>

```typescript
public readonly opGetNetworkMigrationMapperSegmentConstruct: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkMigrationMapperSegmentConstruct API call.

---

##### `opGetReplicationConfiguration`<sup>Required</sup> <a name="opGetReplicationConfiguration" id="@cdk_utils/iam.mgn.MgnOperations.property.opGetReplicationConfiguration"></a>

```typescript
public readonly opGetReplicationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetReplicationConfiguration API call.

---

##### `PauseReplication`<sup>Required</sup> <a name="PauseReplication" id="@cdk_utils/iam.mgn.MgnOperations.property.PauseReplication"></a>

```typescript
public readonly PauseReplication: string[];
```

- *Type:* string[]

IAM actions required for the PauseReplication API call.

---

##### `PutSourceServerAction`<sup>Required</sup> <a name="PutSourceServerAction" id="@cdk_utils/iam.mgn.MgnOperations.property.PutSourceServerAction"></a>

```typescript
public readonly PutSourceServerAction: string[];
```

- *Type:* string[]

IAM actions required for the PutSourceServerAction API call.

---

##### `PutTemplateAction`<sup>Required</sup> <a name="PutTemplateAction" id="@cdk_utils/iam.mgn.MgnOperations.property.PutTemplateAction"></a>

```typescript
public readonly PutTemplateAction: string[];
```

- *Type:* string[]

IAM actions required for the PutTemplateAction API call.

---

##### `RemoveSourceServerAction`<sup>Required</sup> <a name="RemoveSourceServerAction" id="@cdk_utils/iam.mgn.MgnOperations.property.RemoveSourceServerAction"></a>

```typescript
public readonly RemoveSourceServerAction: string[];
```

- *Type:* string[]

IAM actions required for the RemoveSourceServerAction API call.

---

##### `RemoveTemplateAction`<sup>Required</sup> <a name="RemoveTemplateAction" id="@cdk_utils/iam.mgn.MgnOperations.property.RemoveTemplateAction"></a>

```typescript
public readonly RemoveTemplateAction: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTemplateAction API call.

---

##### `ResumeReplication`<sup>Required</sup> <a name="ResumeReplication" id="@cdk_utils/iam.mgn.MgnOperations.property.ResumeReplication"></a>

```typescript
public readonly ResumeReplication: string[];
```

- *Type:* string[]

IAM actions required for the ResumeReplication API call.

---

##### `RetryDataReplication`<sup>Required</sup> <a name="RetryDataReplication" id="@cdk_utils/iam.mgn.MgnOperations.property.RetryDataReplication"></a>

```typescript
public readonly RetryDataReplication: string[];
```

- *Type:* string[]

IAM actions required for the RetryDataReplication API call.

---

##### `StartCutover`<sup>Required</sup> <a name="StartCutover" id="@cdk_utils/iam.mgn.MgnOperations.property.StartCutover"></a>

```typescript
public readonly StartCutover: string[];
```

- *Type:* string[]

IAM actions required for the StartCutover API call.

---

##### `StartExport`<sup>Required</sup> <a name="StartExport" id="@cdk_utils/iam.mgn.MgnOperations.property.StartExport"></a>

```typescript
public readonly StartExport: string[];
```

- *Type:* string[]

IAM actions required for the StartExport API call.

---

##### `StartImport`<sup>Required</sup> <a name="StartImport" id="@cdk_utils/iam.mgn.MgnOperations.property.StartImport"></a>

```typescript
public readonly StartImport: string[];
```

- *Type:* string[]

IAM actions required for the StartImport API call.

---

##### `StartImportFileEnrichment`<sup>Required</sup> <a name="StartImportFileEnrichment" id="@cdk_utils/iam.mgn.MgnOperations.property.StartImportFileEnrichment"></a>

```typescript
public readonly StartImportFileEnrichment: string[];
```

- *Type:* string[]

IAM actions required for the StartImportFileEnrichment API call.

---

##### `StartNetworkMigrationAnalysis`<sup>Required</sup> <a name="StartNetworkMigrationAnalysis" id="@cdk_utils/iam.mgn.MgnOperations.property.StartNetworkMigrationAnalysis"></a>

```typescript
public readonly StartNetworkMigrationAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the StartNetworkMigrationAnalysis API call.

---

##### `StartNetworkMigrationCodeGeneration`<sup>Required</sup> <a name="StartNetworkMigrationCodeGeneration" id="@cdk_utils/iam.mgn.MgnOperations.property.StartNetworkMigrationCodeGeneration"></a>

```typescript
public readonly StartNetworkMigrationCodeGeneration: string[];
```

- *Type:* string[]

IAM actions required for the StartNetworkMigrationCodeGeneration API call.

---

##### `StartNetworkMigrationDeployment`<sup>Required</sup> <a name="StartNetworkMigrationDeployment" id="@cdk_utils/iam.mgn.MgnOperations.property.StartNetworkMigrationDeployment"></a>

```typescript
public readonly StartNetworkMigrationDeployment: string[];
```

- *Type:* string[]

IAM actions required for the StartNetworkMigrationDeployment API call.

---

##### `StartNetworkMigrationMapping`<sup>Required</sup> <a name="StartNetworkMigrationMapping" id="@cdk_utils/iam.mgn.MgnOperations.property.StartNetworkMigrationMapping"></a>

```typescript
public readonly StartNetworkMigrationMapping: string[];
```

- *Type:* string[]

IAM actions required for the StartNetworkMigrationMapping API call.

---

##### `StartNetworkMigrationMappingUpdate`<sup>Required</sup> <a name="StartNetworkMigrationMappingUpdate" id="@cdk_utils/iam.mgn.MgnOperations.property.StartNetworkMigrationMappingUpdate"></a>

```typescript
public readonly StartNetworkMigrationMappingUpdate: string[];
```

- *Type:* string[]

IAM actions required for the StartNetworkMigrationMappingUpdate API call.

---

##### `StartReplication`<sup>Required</sup> <a name="StartReplication" id="@cdk_utils/iam.mgn.MgnOperations.property.StartReplication"></a>

```typescript
public readonly StartReplication: string[];
```

- *Type:* string[]

IAM actions required for the StartReplication API call.

---

##### `StartTest`<sup>Required</sup> <a name="StartTest" id="@cdk_utils/iam.mgn.MgnOperations.property.StartTest"></a>

```typescript
public readonly StartTest: string[];
```

- *Type:* string[]

IAM actions required for the StartTest API call.

---

##### `StopReplication`<sup>Required</sup> <a name="StopReplication" id="@cdk_utils/iam.mgn.MgnOperations.property.StopReplication"></a>

```typescript
public readonly StopReplication: string[];
```

- *Type:* string[]

IAM actions required for the StopReplication API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mgn.MgnOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateTargetInstances`<sup>Required</sup> <a name="TerminateTargetInstances" id="@cdk_utils/iam.mgn.MgnOperations.property.TerminateTargetInstances"></a>

```typescript
public readonly TerminateTargetInstances: string[];
```

- *Type:* string[]

IAM actions required for the TerminateTargetInstances API call.

---

##### `UnarchiveApplication`<sup>Required</sup> <a name="UnarchiveApplication" id="@cdk_utils/iam.mgn.MgnOperations.property.UnarchiveApplication"></a>

```typescript
public readonly UnarchiveApplication: string[];
```

- *Type:* string[]

IAM actions required for the UnarchiveApplication API call.

---

##### `UnarchiveWave`<sup>Required</sup> <a name="UnarchiveWave" id="@cdk_utils/iam.mgn.MgnOperations.property.UnarchiveWave"></a>

```typescript
public readonly UnarchiveWave: string[];
```

- *Type:* string[]

IAM actions required for the UnarchiveWave API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mgn.MgnOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.mgn.MgnOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateConnector`<sup>Required</sup> <a name="UpdateConnector" id="@cdk_utils/iam.mgn.MgnOperations.property.UpdateConnector"></a>

```typescript
public readonly UpdateConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnector API call.

---

##### `UpdateLaunchConfiguration`<sup>Required</sup> <a name="UpdateLaunchConfiguration" id="@cdk_utils/iam.mgn.MgnOperations.property.UpdateLaunchConfiguration"></a>

```typescript
public readonly UpdateLaunchConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLaunchConfiguration API call.

---

##### `UpdateLaunchConfigurationTemplate`<sup>Required</sup> <a name="UpdateLaunchConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnOperations.property.UpdateLaunchConfigurationTemplate"></a>

```typescript
public readonly UpdateLaunchConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLaunchConfigurationTemplate API call.

---

##### `UpdateNetworkMigrationDefinition`<sup>Required</sup> <a name="UpdateNetworkMigrationDefinition" id="@cdk_utils/iam.mgn.MgnOperations.property.UpdateNetworkMigrationDefinition"></a>

```typescript
public readonly UpdateNetworkMigrationDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNetworkMigrationDefinition API call.

---

##### `UpdateNetworkMigrationMapperSegment`<sup>Required</sup> <a name="UpdateNetworkMigrationMapperSegment" id="@cdk_utils/iam.mgn.MgnOperations.property.UpdateNetworkMigrationMapperSegment"></a>

```typescript
public readonly UpdateNetworkMigrationMapperSegment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNetworkMigrationMapperSegment API call.

---

##### `UpdateReplicationConfiguration`<sup>Required</sup> <a name="UpdateReplicationConfiguration" id="@cdk_utils/iam.mgn.MgnOperations.property.UpdateReplicationConfiguration"></a>

```typescript
public readonly UpdateReplicationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReplicationConfiguration API call.

---

##### `UpdateReplicationConfigurationTemplate`<sup>Required</sup> <a name="UpdateReplicationConfigurationTemplate" id="@cdk_utils/iam.mgn.MgnOperations.property.UpdateReplicationConfigurationTemplate"></a>

```typescript
public readonly UpdateReplicationConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReplicationConfigurationTemplate API call.

---

##### `UpdateSourceServer`<sup>Required</sup> <a name="UpdateSourceServer" id="@cdk_utils/iam.mgn.MgnOperations.property.UpdateSourceServer"></a>

```typescript
public readonly UpdateSourceServer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSourceServer API call.

---

##### `UpdateSourceServerReplicationType`<sup>Required</sup> <a name="UpdateSourceServerReplicationType" id="@cdk_utils/iam.mgn.MgnOperations.property.UpdateSourceServerReplicationType"></a>

```typescript
public readonly UpdateSourceServerReplicationType: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSourceServerReplicationType API call.

---

##### `UpdateWave`<sup>Required</sup> <a name="UpdateWave" id="@cdk_utils/iam.mgn.MgnOperations.property.UpdateWave"></a>

```typescript
public readonly UpdateWave: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWave API call.

---

### MgnResources <a name="MgnResources" id="@cdk_utils/iam.mgn.MgnResources"></a>

ARN builders, validators, and parsers for mgn resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mgn.MgnResources.Initializer"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

new mgn.MgnResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.applicationResource">applicationResource</a></code> | Builds an ARN for the ApplicationResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.connectorResource">connectorResource</a></code> | Builds an ARN for the ConnectorResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.exportResource">exportResource</a></code> | Builds an ARN for the ExportResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.importResource">importResource</a></code> | Builds an ARN for the ImportResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.isValidApplicationResourceArn">isValidApplicationResourceArn</a></code> | Validates whether a string is a valid ARN for the ApplicationResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.isValidConnectorResourceArn">isValidConnectorResourceArn</a></code> | Validates whether a string is a valid ARN for the ConnectorResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.isValidExportResourceArn">isValidExportResourceArn</a></code> | Validates whether a string is a valid ARN for the ExportResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.isValidImportResourceArn">isValidImportResourceArn</a></code> | Validates whether a string is a valid ARN for the ImportResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.isValidJobResourceArn">isValidJobResourceArn</a></code> | Validates whether a string is a valid ARN for the JobResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.isValidLaunchConfigurationTemplateResourceArn">isValidLaunchConfigurationTemplateResourceArn</a></code> | Validates whether a string is a valid ARN for the LaunchConfigurationTemplateResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.isValidNetworkMigrationDefinitionResourceArn">isValidNetworkMigrationDefinitionResourceArn</a></code> | Validates whether a string is a valid ARN for the NetworkMigrationDefinitionResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.isValidReplicationConfigurationTemplateResourceArn">isValidReplicationConfigurationTemplateResourceArn</a></code> | Validates whether a string is a valid ARN for the ReplicationConfigurationTemplateResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.isValidSourceServerResourceArn">isValidSourceServerResourceArn</a></code> | Validates whether a string is a valid ARN for the SourceServerResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.isValidVcenterClientResourceArn">isValidVcenterClientResourceArn</a></code> | Validates whether a string is a valid ARN for the VcenterClientResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.isValidWaveResourceArn">isValidWaveResourceArn</a></code> | Validates whether a string is a valid ARN for the WaveResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.jobResource">jobResource</a></code> | Builds an ARN for the JobResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.launchConfigurationTemplateResource">launchConfigurationTemplateResource</a></code> | Builds an ARN for the LaunchConfigurationTemplateResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.networkMigrationDefinitionResource">networkMigrationDefinitionResource</a></code> | Builds an ARN for the NetworkMigrationDefinitionResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.parseApplicationResourceArn">parseApplicationResourceArn</a></code> | Parses a ApplicationResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.parseConnectorResourceArn">parseConnectorResourceArn</a></code> | Parses a ConnectorResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.parseExportResourceArn">parseExportResourceArn</a></code> | Parses a ExportResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.parseImportResourceArn">parseImportResourceArn</a></code> | Parses a ImportResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.parseJobResourceArn">parseJobResourceArn</a></code> | Parses a JobResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.parseLaunchConfigurationTemplateResourceArn">parseLaunchConfigurationTemplateResourceArn</a></code> | Parses a LaunchConfigurationTemplateResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.parseNetworkMigrationDefinitionResourceArn">parseNetworkMigrationDefinitionResourceArn</a></code> | Parses a NetworkMigrationDefinitionResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.parseReplicationConfigurationTemplateResourceArn">parseReplicationConfigurationTemplateResourceArn</a></code> | Parses a ReplicationConfigurationTemplateResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.parseSourceServerResourceArn">parseSourceServerResourceArn</a></code> | Parses a SourceServerResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.parseVcenterClientResourceArn">parseVcenterClientResourceArn</a></code> | Parses a VcenterClientResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.parseWaveResourceArn">parseWaveResourceArn</a></code> | Parses a WaveResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.replicationConfigurationTemplateResource">replicationConfigurationTemplateResource</a></code> | Builds an ARN for the ReplicationConfigurationTemplateResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.sourceServerResource">sourceServerResource</a></code> | Builds an ARN for the SourceServerResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.vcenterClientResource">vcenterClientResource</a></code> | Builds an ARN for the VcenterClientResource resource. |
| <code><a href="#@cdk_utils/iam.mgn.MgnResources.waveResource">waveResource</a></code> | Builds an ARN for the WaveResource resource. |

---

##### `applicationResource` <a name="applicationResource" id="@cdk_utils/iam.mgn.MgnResources.applicationResource"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.applicationResource(props: MgnApplicationResourceArnProps)
```

Builds an ARN for the ApplicationResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgn.MgnResources.applicationResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgn.MgnApplicationResourceArnProps">MgnApplicationResourceArnProps</a>

---

##### `connectorResource` <a name="connectorResource" id="@cdk_utils/iam.mgn.MgnResources.connectorResource"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.connectorResource(props: MgnConnectorResourceArnProps)
```

Builds an ARN for the ConnectorResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgn.MgnResources.connectorResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgn.MgnConnectorResourceArnProps">MgnConnectorResourceArnProps</a>

---

##### `exportResource` <a name="exportResource" id="@cdk_utils/iam.mgn.MgnResources.exportResource"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.exportResource(props: MgnExportResourceArnProps)
```

Builds an ARN for the ExportResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgn.MgnResources.exportResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgn.MgnExportResourceArnProps">MgnExportResourceArnProps</a>

---

##### `importResource` <a name="importResource" id="@cdk_utils/iam.mgn.MgnResources.importResource"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.importResource(props: MgnImportResourceArnProps)
```

Builds an ARN for the ImportResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgn.MgnResources.importResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgn.MgnImportResourceArnProps">MgnImportResourceArnProps</a>

---

##### `isValidApplicationResourceArn` <a name="isValidApplicationResourceArn" id="@cdk_utils/iam.mgn.MgnResources.isValidApplicationResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.isValidApplicationResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the ApplicationResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.isValidApplicationResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorResourceArn` <a name="isValidConnectorResourceArn" id="@cdk_utils/iam.mgn.MgnResources.isValidConnectorResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.isValidConnectorResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the ConnectorResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.isValidConnectorResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExportResourceArn` <a name="isValidExportResourceArn" id="@cdk_utils/iam.mgn.MgnResources.isValidExportResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.isValidExportResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the ExportResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.isValidExportResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImportResourceArn` <a name="isValidImportResourceArn" id="@cdk_utils/iam.mgn.MgnResources.isValidImportResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.isValidImportResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the ImportResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.isValidImportResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobResourceArn` <a name="isValidJobResourceArn" id="@cdk_utils/iam.mgn.MgnResources.isValidJobResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.isValidJobResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the JobResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.isValidJobResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLaunchConfigurationTemplateResourceArn` <a name="isValidLaunchConfigurationTemplateResourceArn" id="@cdk_utils/iam.mgn.MgnResources.isValidLaunchConfigurationTemplateResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.isValidLaunchConfigurationTemplateResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the LaunchConfigurationTemplateResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.isValidLaunchConfigurationTemplateResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkMigrationDefinitionResourceArn` <a name="isValidNetworkMigrationDefinitionResourceArn" id="@cdk_utils/iam.mgn.MgnResources.isValidNetworkMigrationDefinitionResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.isValidNetworkMigrationDefinitionResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the NetworkMigrationDefinitionResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.isValidNetworkMigrationDefinitionResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplicationConfigurationTemplateResourceArn` <a name="isValidReplicationConfigurationTemplateResourceArn" id="@cdk_utils/iam.mgn.MgnResources.isValidReplicationConfigurationTemplateResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.isValidReplicationConfigurationTemplateResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the ReplicationConfigurationTemplateResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.isValidReplicationConfigurationTemplateResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSourceServerResourceArn` <a name="isValidSourceServerResourceArn" id="@cdk_utils/iam.mgn.MgnResources.isValidSourceServerResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.isValidSourceServerResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the SourceServerResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.isValidSourceServerResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVcenterClientResourceArn` <a name="isValidVcenterClientResourceArn" id="@cdk_utils/iam.mgn.MgnResources.isValidVcenterClientResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.isValidVcenterClientResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the VcenterClientResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.isValidVcenterClientResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWaveResourceArn` <a name="isValidWaveResourceArn" id="@cdk_utils/iam.mgn.MgnResources.isValidWaveResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.isValidWaveResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the WaveResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.isValidWaveResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `jobResource` <a name="jobResource" id="@cdk_utils/iam.mgn.MgnResources.jobResource"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.jobResource(props: MgnJobResourceArnProps)
```

Builds an ARN for the JobResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgn.MgnResources.jobResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgn.MgnJobResourceArnProps">MgnJobResourceArnProps</a>

---

##### `launchConfigurationTemplateResource` <a name="launchConfigurationTemplateResource" id="@cdk_utils/iam.mgn.MgnResources.launchConfigurationTemplateResource"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.launchConfigurationTemplateResource(props: MgnLaunchConfigurationTemplateResourceArnProps)
```

Builds an ARN for the LaunchConfigurationTemplateResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgn.MgnResources.launchConfigurationTemplateResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgn.MgnLaunchConfigurationTemplateResourceArnProps">MgnLaunchConfigurationTemplateResourceArnProps</a>

---

##### `networkMigrationDefinitionResource` <a name="networkMigrationDefinitionResource" id="@cdk_utils/iam.mgn.MgnResources.networkMigrationDefinitionResource"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.networkMigrationDefinitionResource(props: MgnNetworkMigrationDefinitionResourceArnProps)
```

Builds an ARN for the NetworkMigrationDefinitionResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgn.MgnResources.networkMigrationDefinitionResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgn.MgnNetworkMigrationDefinitionResourceArnProps">MgnNetworkMigrationDefinitionResourceArnProps</a>

---

##### `parseApplicationResourceArn` <a name="parseApplicationResourceArn" id="@cdk_utils/iam.mgn.MgnResources.parseApplicationResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.parseApplicationResourceArn(arn: string)
```

Parses a ApplicationResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.parseApplicationResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorResourceArn` <a name="parseConnectorResourceArn" id="@cdk_utils/iam.mgn.MgnResources.parseConnectorResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.parseConnectorResourceArn(arn: string)
```

Parses a ConnectorResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.parseConnectorResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExportResourceArn` <a name="parseExportResourceArn" id="@cdk_utils/iam.mgn.MgnResources.parseExportResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.parseExportResourceArn(arn: string)
```

Parses a ExportResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.parseExportResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImportResourceArn` <a name="parseImportResourceArn" id="@cdk_utils/iam.mgn.MgnResources.parseImportResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.parseImportResourceArn(arn: string)
```

Parses a ImportResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.parseImportResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobResourceArn` <a name="parseJobResourceArn" id="@cdk_utils/iam.mgn.MgnResources.parseJobResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.parseJobResourceArn(arn: string)
```

Parses a JobResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.parseJobResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLaunchConfigurationTemplateResourceArn` <a name="parseLaunchConfigurationTemplateResourceArn" id="@cdk_utils/iam.mgn.MgnResources.parseLaunchConfigurationTemplateResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.parseLaunchConfigurationTemplateResourceArn(arn: string)
```

Parses a LaunchConfigurationTemplateResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.parseLaunchConfigurationTemplateResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkMigrationDefinitionResourceArn` <a name="parseNetworkMigrationDefinitionResourceArn" id="@cdk_utils/iam.mgn.MgnResources.parseNetworkMigrationDefinitionResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.parseNetworkMigrationDefinitionResourceArn(arn: string)
```

Parses a NetworkMigrationDefinitionResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.parseNetworkMigrationDefinitionResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplicationConfigurationTemplateResourceArn` <a name="parseReplicationConfigurationTemplateResourceArn" id="@cdk_utils/iam.mgn.MgnResources.parseReplicationConfigurationTemplateResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.parseReplicationConfigurationTemplateResourceArn(arn: string)
```

Parses a ReplicationConfigurationTemplateResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.parseReplicationConfigurationTemplateResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSourceServerResourceArn` <a name="parseSourceServerResourceArn" id="@cdk_utils/iam.mgn.MgnResources.parseSourceServerResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.parseSourceServerResourceArn(arn: string)
```

Parses a SourceServerResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.parseSourceServerResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVcenterClientResourceArn` <a name="parseVcenterClientResourceArn" id="@cdk_utils/iam.mgn.MgnResources.parseVcenterClientResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.parseVcenterClientResourceArn(arn: string)
```

Parses a VcenterClientResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.parseVcenterClientResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWaveResourceArn` <a name="parseWaveResourceArn" id="@cdk_utils/iam.mgn.MgnResources.parseWaveResourceArn"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.parseWaveResourceArn(arn: string)
```

Parses a WaveResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgn.MgnResources.parseWaveResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `replicationConfigurationTemplateResource` <a name="replicationConfigurationTemplateResource" id="@cdk_utils/iam.mgn.MgnResources.replicationConfigurationTemplateResource"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.replicationConfigurationTemplateResource(props: MgnReplicationConfigurationTemplateResourceArnProps)
```

Builds an ARN for the ReplicationConfigurationTemplateResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgn.MgnResources.replicationConfigurationTemplateResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgn.MgnReplicationConfigurationTemplateResourceArnProps">MgnReplicationConfigurationTemplateResourceArnProps</a>

---

##### `sourceServerResource` <a name="sourceServerResource" id="@cdk_utils/iam.mgn.MgnResources.sourceServerResource"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.sourceServerResource(props: MgnSourceServerResourceArnProps)
```

Builds an ARN for the SourceServerResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgn.MgnResources.sourceServerResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgn.MgnSourceServerResourceArnProps">MgnSourceServerResourceArnProps</a>

---

##### `vcenterClientResource` <a name="vcenterClientResource" id="@cdk_utils/iam.mgn.MgnResources.vcenterClientResource"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.vcenterClientResource(props: MgnVcenterClientResourceArnProps)
```

Builds an ARN for the VcenterClientResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgn.MgnResources.vcenterClientResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgn.MgnVcenterClientResourceArnProps">MgnVcenterClientResourceArnProps</a>

---

##### `waveResource` <a name="waveResource" id="@cdk_utils/iam.mgn.MgnResources.waveResource"></a>

```typescript
import { mgn } from '@cdk_utils/iam'

mgn.MgnResources.waveResource(props: MgnWaveResourceArnProps)
```

Builds an ARN for the WaveResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgn.MgnResources.waveResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgn.MgnWaveResourceArnProps">MgnWaveResourceArnProps</a>

---




