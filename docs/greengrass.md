# `greengrass` Submodule <a name="`greengrass` Submodule" id="@cdk_utils/iam.greengrass"></a>


## Structs <a name="Structs" id="Structs"></a>

### GreengrassBulkDeploymentArnComponents <a name="GreengrassBulkDeploymentArnComponents" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnComponents"></a>

Parsed components of a bulkDeployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassBulkDeploymentArnComponents: greengrass.GreengrassBulkDeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnComponents.property.bulkDeploymentId">bulkDeploymentId</a></code> | <code>string</code> | The BulkDeploymentId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `bulkDeploymentId`<sup>Required</sup> <a name="bulkDeploymentId" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnComponents.property.bulkDeploymentId"></a>

```typescript
public readonly bulkDeploymentId: string;
```

- *Type:* string

The BulkDeploymentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassBulkDeploymentArnProps <a name="GreengrassBulkDeploymentArnProps" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnProps"></a>

Properties for building a bulkDeployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassBulkDeploymentArnProps: greengrass.GreengrassBulkDeploymentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnProps.property.bulkDeploymentId">bulkDeploymentId</a></code> | <code>string</code> | The BulkDeploymentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `bulkDeploymentId`<sup>Required</sup> <a name="bulkDeploymentId" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnProps.property.bulkDeploymentId"></a>

```typescript
public readonly bulkDeploymentId: string;
```

- *Type:* string

The BulkDeploymentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassCertificateAuthorityArnComponents <a name="GreengrassCertificateAuthorityArnComponents" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents"></a>

Parsed components of a certificateAuthority ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassCertificateAuthorityArnComponents: greengrass.GreengrassCertificateAuthorityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | The CertificateAuthorityId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

The CertificateAuthorityId component.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassCertificateAuthorityArnProps <a name="GreengrassCertificateAuthorityArnProps" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps"></a>

Properties for building a certificateAuthority ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassCertificateAuthorityArnProps: greengrass.GreengrassCertificateAuthorityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | The CertificateAuthorityId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

The CertificateAuthorityId component of the ARN.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassComponentArnComponents <a name="GreengrassComponentArnComponents" id="@cdk_utils/iam.greengrass.GreengrassComponentArnComponents"></a>

Parsed components of a component ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassComponentArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassComponentArnComponents: greengrass.GreengrassComponentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentArnComponents.property.componentName">componentName</a></code> | <code>string</code> | The ComponentName component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassComponentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdk_utils/iam.greengrass.GreengrassComponentArnComponents.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

The ComponentName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassComponentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassComponentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassComponentArnProps <a name="GreengrassComponentArnProps" id="@cdk_utils/iam.greengrass.GreengrassComponentArnProps"></a>

Properties for building a component ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassComponentArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassComponentArnProps: greengrass.GreengrassComponentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentArnProps.property.componentName">componentName</a></code> | <code>string</code> | The ComponentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdk_utils/iam.greengrass.GreengrassComponentArnProps.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

The ComponentName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassComponentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassComponentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassComponentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassComponentVersionArnComponents <a name="GreengrassComponentVersionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents"></a>

Parsed components of a componentVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassComponentVersionArnComponents: greengrass.GreengrassComponentVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents.property.componentName">componentName</a></code> | <code>string</code> | The ComponentName component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents.property.componentVersion">componentVersion</a></code> | <code>string</code> | The ComponentVersion component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

The ComponentName component.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents.property.componentVersion"></a>

```typescript
public readonly componentVersion: string;
```

- *Type:* string

The ComponentVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassComponentVersionArnProps <a name="GreengrassComponentVersionArnProps" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps"></a>

Properties for building a componentVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassComponentVersionArnProps: greengrass.GreengrassComponentVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps.property.componentName">componentName</a></code> | <code>string</code> | The ComponentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps.property.componentVersion">componentVersion</a></code> | <code>string</code> | The ComponentVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

The ComponentName component of the ARN.

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps.property.componentVersion"></a>

```typescript
public readonly componentVersion: string;
```

- *Type:* string

The ComponentVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassConnectivityInfoArnComponents <a name="GreengrassConnectivityInfoArnComponents" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnComponents"></a>

Parsed components of a connectivityInfo ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassConnectivityInfoArnComponents: greengrass.GreengrassConnectivityInfoArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnComponents.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnComponents.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component.

---

### GreengrassConnectivityInfoArnProps <a name="GreengrassConnectivityInfoArnProps" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnProps"></a>

Properties for building a connectivityInfo ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassConnectivityInfoArnProps: greengrass.GreengrassConnectivityInfoArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnProps.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnProps.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassConnectorDefinitionArnComponents <a name="GreengrassConnectorDefinitionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnComponents"></a>

Parsed components of a connectorDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassConnectorDefinitionArnComponents: greengrass.GreengrassConnectorDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnComponents.property.connectorDefinitionId">connectorDefinitionId</a></code> | <code>string</code> | The ConnectorDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorDefinitionId`<sup>Required</sup> <a name="connectorDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnComponents.property.connectorDefinitionId"></a>

```typescript
public readonly connectorDefinitionId: string;
```

- *Type:* string

The ConnectorDefinitionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassConnectorDefinitionArnProps <a name="GreengrassConnectorDefinitionArnProps" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnProps"></a>

Properties for building a connectorDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassConnectorDefinitionArnProps: greengrass.GreengrassConnectorDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnProps.property.connectorDefinitionId">connectorDefinitionId</a></code> | <code>string</code> | The ConnectorDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorDefinitionId`<sup>Required</sup> <a name="connectorDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnProps.property.connectorDefinitionId"></a>

```typescript
public readonly connectorDefinitionId: string;
```

- *Type:* string

The ConnectorDefinitionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassConnectorDefinitionVersionArnComponents <a name="GreengrassConnectorDefinitionVersionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents"></a>

Parsed components of a connectorDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassConnectorDefinitionVersionArnComponents: greengrass.GreengrassConnectorDefinitionVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents.property.connectorDefinitionId">connectorDefinitionId</a></code> | <code>string</code> | The ConnectorDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorDefinitionId`<sup>Required</sup> <a name="connectorDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents.property.connectorDefinitionId"></a>

```typescript
public readonly connectorDefinitionId: string;
```

- *Type:* string

The ConnectorDefinitionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnComponents.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component.

---

### GreengrassConnectorDefinitionVersionArnProps <a name="GreengrassConnectorDefinitionVersionArnProps" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps"></a>

Properties for building a connectorDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassConnectorDefinitionVersionArnProps: greengrass.GreengrassConnectorDefinitionVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps.property.connectorDefinitionId">connectorDefinitionId</a></code> | <code>string</code> | The ConnectorDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorDefinitionId`<sup>Required</sup> <a name="connectorDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps.property.connectorDefinitionId"></a>

```typescript
public readonly connectorDefinitionId: string;
```

- *Type:* string

The ConnectorDefinitionId component of the ARN.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassCoreDefinitionArnComponents <a name="GreengrassCoreDefinitionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnComponents"></a>

Parsed components of a coreDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassCoreDefinitionArnComponents: greengrass.GreengrassCoreDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnComponents.property.coreDefinitionId">coreDefinitionId</a></code> | <code>string</code> | The CoreDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `coreDefinitionId`<sup>Required</sup> <a name="coreDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnComponents.property.coreDefinitionId"></a>

```typescript
public readonly coreDefinitionId: string;
```

- *Type:* string

The CoreDefinitionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassCoreDefinitionArnProps <a name="GreengrassCoreDefinitionArnProps" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnProps"></a>

Properties for building a coreDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassCoreDefinitionArnProps: greengrass.GreengrassCoreDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnProps.property.coreDefinitionId">coreDefinitionId</a></code> | <code>string</code> | The CoreDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `coreDefinitionId`<sup>Required</sup> <a name="coreDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnProps.property.coreDefinitionId"></a>

```typescript
public readonly coreDefinitionId: string;
```

- *Type:* string

The CoreDefinitionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassCoreDefinitionVersionArnComponents <a name="GreengrassCoreDefinitionVersionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents"></a>

Parsed components of a coreDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassCoreDefinitionVersionArnComponents: greengrass.GreengrassCoreDefinitionVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents.property.coreDefinitionId">coreDefinitionId</a></code> | <code>string</code> | The CoreDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `coreDefinitionId`<sup>Required</sup> <a name="coreDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents.property.coreDefinitionId"></a>

```typescript
public readonly coreDefinitionId: string;
```

- *Type:* string

The CoreDefinitionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnComponents.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component.

---

### GreengrassCoreDefinitionVersionArnProps <a name="GreengrassCoreDefinitionVersionArnProps" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps"></a>

Properties for building a coreDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassCoreDefinitionVersionArnProps: greengrass.GreengrassCoreDefinitionVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps.property.coreDefinitionId">coreDefinitionId</a></code> | <code>string</code> | The CoreDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `coreDefinitionId`<sup>Required</sup> <a name="coreDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps.property.coreDefinitionId"></a>

```typescript
public readonly coreDefinitionId: string;
```

- *Type:* string

The CoreDefinitionId component of the ARN.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassCoreDeviceArnComponents <a name="GreengrassCoreDeviceArnComponents" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnComponents"></a>

Parsed components of a coreDevice ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassCoreDeviceArnComponents: greengrass.GreengrassCoreDeviceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnComponents.property.coreDeviceThingName">coreDeviceThingName</a></code> | <code>string</code> | The CoreDeviceThingName component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `coreDeviceThingName`<sup>Required</sup> <a name="coreDeviceThingName" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnComponents.property.coreDeviceThingName"></a>

```typescript
public readonly coreDeviceThingName: string;
```

- *Type:* string

The CoreDeviceThingName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassCoreDeviceArnProps <a name="GreengrassCoreDeviceArnProps" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnProps"></a>

Properties for building a coreDevice ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassCoreDeviceArnProps: greengrass.GreengrassCoreDeviceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnProps.property.coreDeviceThingName">coreDeviceThingName</a></code> | <code>string</code> | The CoreDeviceThingName component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `coreDeviceThingName`<sup>Required</sup> <a name="coreDeviceThingName" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnProps.property.coreDeviceThingName"></a>

```typescript
public readonly coreDeviceThingName: string;
```

- *Type:* string

The CoreDeviceThingName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassDeploymentArnComponents <a name="GreengrassDeploymentArnComponents" id="@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents"></a>

Parsed components of a deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassDeploymentArnComponents: greengrass.GreengrassDeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassDeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassDeploymentVariant1ArnProps <a name="GreengrassDeploymentVariant1ArnProps" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps"></a>

Properties for building a deploymentVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassDeploymentVariant1ArnProps: greengrass.GreengrassDeploymentVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component of the ARN.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassDeploymentVariant2ArnProps <a name="GreengrassDeploymentVariant2ArnProps" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant2ArnProps"></a>

Properties for building a deploymentVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant2ArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassDeploymentVariant2ArnProps: greengrass.GreengrassDeploymentVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentVariant2ArnProps.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant2ArnProps.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassDeploymentVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassDeviceDefinitionArnComponents <a name="GreengrassDeviceDefinitionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnComponents"></a>

Parsed components of a deviceDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassDeviceDefinitionArnComponents: greengrass.GreengrassDeviceDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnComponents.property.deviceDefinitionId">deviceDefinitionId</a></code> | <code>string</code> | The DeviceDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deviceDefinitionId`<sup>Required</sup> <a name="deviceDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnComponents.property.deviceDefinitionId"></a>

```typescript
public readonly deviceDefinitionId: string;
```

- *Type:* string

The DeviceDefinitionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassDeviceDefinitionArnProps <a name="GreengrassDeviceDefinitionArnProps" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnProps"></a>

Properties for building a deviceDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassDeviceDefinitionArnProps: greengrass.GreengrassDeviceDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnProps.property.deviceDefinitionId">deviceDefinitionId</a></code> | <code>string</code> | The DeviceDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deviceDefinitionId`<sup>Required</sup> <a name="deviceDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnProps.property.deviceDefinitionId"></a>

```typescript
public readonly deviceDefinitionId: string;
```

- *Type:* string

The DeviceDefinitionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassDeviceDefinitionVersionArnComponents <a name="GreengrassDeviceDefinitionVersionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents"></a>

Parsed components of a deviceDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassDeviceDefinitionVersionArnComponents: greengrass.GreengrassDeviceDefinitionVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents.property.deviceDefinitionId">deviceDefinitionId</a></code> | <code>string</code> | The DeviceDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deviceDefinitionId`<sup>Required</sup> <a name="deviceDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents.property.deviceDefinitionId"></a>

```typescript
public readonly deviceDefinitionId: string;
```

- *Type:* string

The DeviceDefinitionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnComponents.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component.

---

### GreengrassDeviceDefinitionVersionArnProps <a name="GreengrassDeviceDefinitionVersionArnProps" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps"></a>

Properties for building a deviceDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassDeviceDefinitionVersionArnProps: greengrass.GreengrassDeviceDefinitionVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps.property.deviceDefinitionId">deviceDefinitionId</a></code> | <code>string</code> | The DeviceDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deviceDefinitionId`<sup>Required</sup> <a name="deviceDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps.property.deviceDefinitionId"></a>

```typescript
public readonly deviceDefinitionId: string;
```

- *Type:* string

The DeviceDefinitionId component of the ARN.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassFunctionDefinitionArnComponents <a name="GreengrassFunctionDefinitionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnComponents"></a>

Parsed components of a functionDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassFunctionDefinitionArnComponents: greengrass.GreengrassFunctionDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnComponents.property.functionDefinitionId">functionDefinitionId</a></code> | <code>string</code> | The FunctionDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `functionDefinitionId`<sup>Required</sup> <a name="functionDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnComponents.property.functionDefinitionId"></a>

```typescript
public readonly functionDefinitionId: string;
```

- *Type:* string

The FunctionDefinitionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassFunctionDefinitionArnProps <a name="GreengrassFunctionDefinitionArnProps" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnProps"></a>

Properties for building a functionDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassFunctionDefinitionArnProps: greengrass.GreengrassFunctionDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnProps.property.functionDefinitionId">functionDefinitionId</a></code> | <code>string</code> | The FunctionDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `functionDefinitionId`<sup>Required</sup> <a name="functionDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnProps.property.functionDefinitionId"></a>

```typescript
public readonly functionDefinitionId: string;
```

- *Type:* string

The FunctionDefinitionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassFunctionDefinitionVersionArnComponents <a name="GreengrassFunctionDefinitionVersionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents"></a>

Parsed components of a functionDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassFunctionDefinitionVersionArnComponents: greengrass.GreengrassFunctionDefinitionVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents.property.functionDefinitionId">functionDefinitionId</a></code> | <code>string</code> | The FunctionDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `functionDefinitionId`<sup>Required</sup> <a name="functionDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents.property.functionDefinitionId"></a>

```typescript
public readonly functionDefinitionId: string;
```

- *Type:* string

The FunctionDefinitionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnComponents.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component.

---

### GreengrassFunctionDefinitionVersionArnProps <a name="GreengrassFunctionDefinitionVersionArnProps" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps"></a>

Properties for building a functionDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassFunctionDefinitionVersionArnProps: greengrass.GreengrassFunctionDefinitionVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps.property.functionDefinitionId">functionDefinitionId</a></code> | <code>string</code> | The FunctionDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `functionDefinitionId`<sup>Required</sup> <a name="functionDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps.property.functionDefinitionId"></a>

```typescript
public readonly functionDefinitionId: string;
```

- *Type:* string

The FunctionDefinitionId component of the ARN.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassGroupArnComponents <a name="GreengrassGroupArnComponents" id="@cdk_utils/iam.greengrass.GreengrassGroupArnComponents"></a>

Parsed components of a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassGroupArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassGroupArnComponents: greengrass.GreengrassGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupArnComponents.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.greengrass.GreengrassGroupArnComponents.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassGroupArnProps <a name="GreengrassGroupArnProps" id="@cdk_utils/iam.greengrass.GreengrassGroupArnProps"></a>

Properties for building a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassGroupArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassGroupArnProps: greengrass.GreengrassGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupArnProps.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.greengrass.GreengrassGroupArnProps.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassGroupVersionArnComponents <a name="GreengrassGroupVersionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents"></a>

Parsed components of a groupVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassGroupVersionArnComponents: greengrass.GreengrassGroupVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnComponents.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component.

---

### GreengrassGroupVersionArnProps <a name="GreengrassGroupVersionArnProps" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps"></a>

Properties for building a groupVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassGroupVersionArnProps: greengrass.GreengrassGroupVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component of the ARN.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassLoggerDefinitionArnComponents <a name="GreengrassLoggerDefinitionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnComponents"></a>

Parsed components of a loggerDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassLoggerDefinitionArnComponents: greengrass.GreengrassLoggerDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnComponents.property.loggerDefinitionId">loggerDefinitionId</a></code> | <code>string</code> | The LoggerDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `loggerDefinitionId`<sup>Required</sup> <a name="loggerDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnComponents.property.loggerDefinitionId"></a>

```typescript
public readonly loggerDefinitionId: string;
```

- *Type:* string

The LoggerDefinitionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GreengrassLoggerDefinitionArnProps <a name="GreengrassLoggerDefinitionArnProps" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnProps"></a>

Properties for building a loggerDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassLoggerDefinitionArnProps: greengrass.GreengrassLoggerDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnProps.property.loggerDefinitionId">loggerDefinitionId</a></code> | <code>string</code> | The LoggerDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `loggerDefinitionId`<sup>Required</sup> <a name="loggerDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnProps.property.loggerDefinitionId"></a>

```typescript
public readonly loggerDefinitionId: string;
```

- *Type:* string

The LoggerDefinitionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassLoggerDefinitionVersionArnComponents <a name="GreengrassLoggerDefinitionVersionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents"></a>

Parsed components of a loggerDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassLoggerDefinitionVersionArnComponents: greengrass.GreengrassLoggerDefinitionVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents.property.loggerDefinitionId">loggerDefinitionId</a></code> | <code>string</code> | The LoggerDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `loggerDefinitionId`<sup>Required</sup> <a name="loggerDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents.property.loggerDefinitionId"></a>

```typescript
public readonly loggerDefinitionId: string;
```

- *Type:* string

The LoggerDefinitionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnComponents.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component.

---

### GreengrassLoggerDefinitionVersionArnProps <a name="GreengrassLoggerDefinitionVersionArnProps" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps"></a>

Properties for building a loggerDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassLoggerDefinitionVersionArnProps: greengrass.GreengrassLoggerDefinitionVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps.property.loggerDefinitionId">loggerDefinitionId</a></code> | <code>string</code> | The LoggerDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `loggerDefinitionId`<sup>Required</sup> <a name="loggerDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps.property.loggerDefinitionId"></a>

```typescript
public readonly loggerDefinitionId: string;
```

- *Type:* string

The LoggerDefinitionId component of the ARN.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassResourceDefinitionArnComponents <a name="GreengrassResourceDefinitionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnComponents"></a>

Parsed components of a resourceDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassResourceDefinitionArnComponents: greengrass.GreengrassResourceDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnComponents.property.resourceDefinitionId">resourceDefinitionId</a></code> | <code>string</code> | The ResourceDefinitionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceDefinitionId`<sup>Required</sup> <a name="resourceDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnComponents.property.resourceDefinitionId"></a>

```typescript
public readonly resourceDefinitionId: string;
```

- *Type:* string

The ResourceDefinitionId component.

---

### GreengrassResourceDefinitionArnProps <a name="GreengrassResourceDefinitionArnProps" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnProps"></a>

Properties for building a resourceDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassResourceDefinitionArnProps: greengrass.GreengrassResourceDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnProps.property.resourceDefinitionId">resourceDefinitionId</a></code> | <code>string</code> | The ResourceDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceDefinitionId`<sup>Required</sup> <a name="resourceDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnProps.property.resourceDefinitionId"></a>

```typescript
public readonly resourceDefinitionId: string;
```

- *Type:* string

The ResourceDefinitionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassResourceDefinitionVersionArnComponents <a name="GreengrassResourceDefinitionVersionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents"></a>

Parsed components of a resourceDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassResourceDefinitionVersionArnComponents: greengrass.GreengrassResourceDefinitionVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents.property.resourceDefinitionId">resourceDefinitionId</a></code> | <code>string</code> | The ResourceDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceDefinitionId`<sup>Required</sup> <a name="resourceDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents.property.resourceDefinitionId"></a>

```typescript
public readonly resourceDefinitionId: string;
```

- *Type:* string

The ResourceDefinitionId component.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnComponents.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component.

---

### GreengrassResourceDefinitionVersionArnProps <a name="GreengrassResourceDefinitionVersionArnProps" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps"></a>

Properties for building a resourceDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassResourceDefinitionVersionArnProps: greengrass.GreengrassResourceDefinitionVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps.property.resourceDefinitionId">resourceDefinitionId</a></code> | <code>string</code> | The ResourceDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceDefinitionId`<sup>Required</sup> <a name="resourceDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps.property.resourceDefinitionId"></a>

```typescript
public readonly resourceDefinitionId: string;
```

- *Type:* string

The ResourceDefinitionId component of the ARN.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassSubscriptionDefinitionArnComponents <a name="GreengrassSubscriptionDefinitionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnComponents"></a>

Parsed components of a subscriptionDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassSubscriptionDefinitionArnComponents: greengrass.GreengrassSubscriptionDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnComponents.property.subscriptionDefinitionId">subscriptionDefinitionId</a></code> | <code>string</code> | The SubscriptionDefinitionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subscriptionDefinitionId`<sup>Required</sup> <a name="subscriptionDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnComponents.property.subscriptionDefinitionId"></a>

```typescript
public readonly subscriptionDefinitionId: string;
```

- *Type:* string

The SubscriptionDefinitionId component.

---

### GreengrassSubscriptionDefinitionArnProps <a name="GreengrassSubscriptionDefinitionArnProps" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnProps"></a>

Properties for building a subscriptionDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassSubscriptionDefinitionArnProps: greengrass.GreengrassSubscriptionDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnProps.property.subscriptionDefinitionId">subscriptionDefinitionId</a></code> | <code>string</code> | The SubscriptionDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `subscriptionDefinitionId`<sup>Required</sup> <a name="subscriptionDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnProps.property.subscriptionDefinitionId"></a>

```typescript
public readonly subscriptionDefinitionId: string;
```

- *Type:* string

The SubscriptionDefinitionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassSubscriptionDefinitionVersionArnComponents <a name="GreengrassSubscriptionDefinitionVersionArnComponents" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents"></a>

Parsed components of a subscriptionDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassSubscriptionDefinitionVersionArnComponents: greengrass.GreengrassSubscriptionDefinitionVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents.property.subscriptionDefinitionId">subscriptionDefinitionId</a></code> | <code>string</code> | The SubscriptionDefinitionId component. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subscriptionDefinitionId`<sup>Required</sup> <a name="subscriptionDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents.property.subscriptionDefinitionId"></a>

```typescript
public readonly subscriptionDefinitionId: string;
```

- *Type:* string

The SubscriptionDefinitionId component.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnComponents.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component.

---

### GreengrassSubscriptionDefinitionVersionArnProps <a name="GreengrassSubscriptionDefinitionVersionArnProps" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps"></a>

Properties for building a subscriptionDefinitionVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassSubscriptionDefinitionVersionArnProps: greengrass.GreengrassSubscriptionDefinitionVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps.property.subscriptionDefinitionId">subscriptionDefinitionId</a></code> | <code>string</code> | The SubscriptionDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `subscriptionDefinitionId`<sup>Required</sup> <a name="subscriptionDefinitionId" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps.property.subscriptionDefinitionId"></a>

```typescript
public readonly subscriptionDefinitionId: string;
```

- *Type:* string

The SubscriptionDefinitionId component of the ARN.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassThingArnComponents <a name="GreengrassThingArnComponents" id="@cdk_utils/iam.greengrass.GreengrassThingArnComponents"></a>

Parsed components of a thing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassThingArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassThingArnComponents: greengrass.GreengrassThingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingArnComponents.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassThingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassThingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassThingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.greengrass.GreengrassThingArnComponents.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component.

---

### GreengrassThingArnProps <a name="GreengrassThingArnProps" id="@cdk_utils/iam.greengrass.GreengrassThingArnProps"></a>

Properties for building a thing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassThingArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassThingArnProps: greengrass.GreengrassThingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingArnProps.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.greengrass.GreengrassThingArnProps.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassThingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassThingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassThingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GreengrassThingRuntimeConfigArnComponents <a name="GreengrassThingRuntimeConfigArnComponents" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnComponents"></a>

Parsed components of a thingRuntimeConfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnComponents.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassThingRuntimeConfigArnComponents: greengrass.GreengrassThingRuntimeConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnComponents.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnComponents.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component.

---

### GreengrassThingRuntimeConfigArnProps <a name="GreengrassThingRuntimeConfigArnProps" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnProps"></a>

Properties for building a thingRuntimeConfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnProps.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

const greengrassThingRuntimeConfigArnProps: greengrass.GreengrassThingRuntimeConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnProps.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component of the ARN. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnProps.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GreengrassActions <a name="GreengrassActions" id="@cdk_utils/iam.greengrass.GreengrassActions"></a>

IAM action constants for the greengrass service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.greengrass.GreengrassActions.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

new greengrass.GreengrassActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetAssociatedRole">actionGetAssociatedRole</a></code> | <code>string</code> | [Read] greengrass:GetAssociatedRole. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetBulkDeploymentStatus">actionGetBulkDeploymentStatus</a></code> | <code>string</code> | [Read] greengrass:GetBulkDeploymentStatus. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetComponent">actionGetComponent</a></code> | <code>string</code> | [Read] greengrass:GetComponent. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetComponentVersionArtifact">actionGetComponentVersionArtifact</a></code> | <code>string</code> | [Read] greengrass:GetComponentVersionArtifact. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetConnectivityInfo">actionGetConnectivityInfo</a></code> | <code>string</code> | [Read] greengrass:GetConnectivityInfo. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetConnectorDefinition">actionGetConnectorDefinition</a></code> | <code>string</code> | [Read] greengrass:GetConnectorDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetConnectorDefinitionVersion">actionGetConnectorDefinitionVersion</a></code> | <code>string</code> | [Read] greengrass:GetConnectorDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetCoreDefinition">actionGetCoreDefinition</a></code> | <code>string</code> | [Read] greengrass:GetCoreDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetCoreDefinitionVersion">actionGetCoreDefinitionVersion</a></code> | <code>string</code> | [Read] greengrass:GetCoreDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetCoreDevice">actionGetCoreDevice</a></code> | <code>string</code> | [Read] greengrass:GetCoreDevice. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetDeployment">actionGetDeployment</a></code> | <code>string</code> | [Read] greengrass:GetDeployment. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetDeploymentStatus">actionGetDeploymentStatus</a></code> | <code>string</code> | [Read] greengrass:GetDeploymentStatus. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetDeviceDefinition">actionGetDeviceDefinition</a></code> | <code>string</code> | [Read] greengrass:GetDeviceDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetDeviceDefinitionVersion">actionGetDeviceDefinitionVersion</a></code> | <code>string</code> | [Read] greengrass:GetDeviceDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetFunctionDefinition">actionGetFunctionDefinition</a></code> | <code>string</code> | [Read] greengrass:GetFunctionDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetFunctionDefinitionVersion">actionGetFunctionDefinitionVersion</a></code> | <code>string</code> | [Read] greengrass:GetFunctionDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetGroup">actionGetGroup</a></code> | <code>string</code> | [Read] greengrass:GetGroup. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetGroupCertificateAuthority">actionGetGroupCertificateAuthority</a></code> | <code>string</code> | [Read] greengrass:GetGroupCertificateAuthority. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetGroupCertificateConfiguration">actionGetGroupCertificateConfiguration</a></code> | <code>string</code> | [Read] greengrass:GetGroupCertificateConfiguration. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetGroupVersion">actionGetGroupVersion</a></code> | <code>string</code> | [Read] greengrass:GetGroupVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetLoggerDefinition">actionGetLoggerDefinition</a></code> | <code>string</code> | [Read] greengrass:GetLoggerDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetLoggerDefinitionVersion">actionGetLoggerDefinitionVersion</a></code> | <code>string</code> | [Read] greengrass:GetLoggerDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetResourceDefinition">actionGetResourceDefinition</a></code> | <code>string</code> | [Read] greengrass:GetResourceDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetResourceDefinitionVersion">actionGetResourceDefinitionVersion</a></code> | <code>string</code> | [Read] greengrass:GetResourceDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetServiceRoleForAccount">actionGetServiceRoleForAccount</a></code> | <code>string</code> | [Read] greengrass:GetServiceRoleForAccount. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetSubscriptionDefinition">actionGetSubscriptionDefinition</a></code> | <code>string</code> | [Read] greengrass:GetSubscriptionDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetSubscriptionDefinitionVersion">actionGetSubscriptionDefinitionVersion</a></code> | <code>string</code> | [Read] greengrass:GetSubscriptionDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetThingRuntimeConfiguration">actionGetThingRuntimeConfiguration</a></code> | <code>string</code> | [Read] greengrass:GetThingRuntimeConfiguration. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.AssociateRoleToGroup">AssociateRoleToGroup</a></code> | <code>string</code> | [Write] greengrass:AssociateRoleToGroup. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.AssociateServiceRoleToAccount">AssociateServiceRoleToAccount</a></code> | <code>string</code> | [PermissionManagement] greengrass:AssociateServiceRoleToAccount. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.BatchAssociateClientDeviceWithCoreDevice">BatchAssociateClientDeviceWithCoreDevice</a></code> | <code>string</code> | [Write] greengrass:BatchAssociateClientDeviceWithCoreDevice. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.BatchDisassociateClientDeviceFromCoreDevice">BatchDisassociateClientDeviceFromCoreDevice</a></code> | <code>string</code> | [Write] greengrass:BatchDisassociateClientDeviceFromCoreDevice. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CancelDeployment">CancelDeployment</a></code> | <code>string</code> | [Write] greengrass:CancelDeployment. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateComponentVersion">CreateComponentVersion</a></code> | <code>string</code> | [Write] greengrass:CreateComponentVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateConnectorDefinition">CreateConnectorDefinition</a></code> | <code>string</code> | [Write] greengrass:CreateConnectorDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateConnectorDefinitionVersion">CreateConnectorDefinitionVersion</a></code> | <code>string</code> | [Write] greengrass:CreateConnectorDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateCoreDefinition">CreateCoreDefinition</a></code> | <code>string</code> | [Write] greengrass:CreateCoreDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateCoreDefinitionVersion">CreateCoreDefinitionVersion</a></code> | <code>string</code> | [Write] greengrass:CreateCoreDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateDeployment">CreateDeployment</a></code> | <code>string</code> | [Write] greengrass:CreateDeployment. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateDeviceDefinition">CreateDeviceDefinition</a></code> | <code>string</code> | [Write] greengrass:CreateDeviceDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateDeviceDefinitionVersion">CreateDeviceDefinitionVersion</a></code> | <code>string</code> | [Write] greengrass:CreateDeviceDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateFunctionDefinition">CreateFunctionDefinition</a></code> | <code>string</code> | [Write] greengrass:CreateFunctionDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateFunctionDefinitionVersion">CreateFunctionDefinitionVersion</a></code> | <code>string</code> | [Write] greengrass:CreateFunctionDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateGroup">CreateGroup</a></code> | <code>string</code> | [Write] greengrass:CreateGroup. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateGroupCertificateAuthority">CreateGroupCertificateAuthority</a></code> | <code>string</code> | [Write] greengrass:CreateGroupCertificateAuthority. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateGroupVersion">CreateGroupVersion</a></code> | <code>string</code> | [Write] greengrass:CreateGroupVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateLoggerDefinition">CreateLoggerDefinition</a></code> | <code>string</code> | [Write] greengrass:CreateLoggerDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateLoggerDefinitionVersion">CreateLoggerDefinitionVersion</a></code> | <code>string</code> | [Write] greengrass:CreateLoggerDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateResourceDefinition">CreateResourceDefinition</a></code> | <code>string</code> | [Write] greengrass:CreateResourceDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateResourceDefinitionVersion">CreateResourceDefinitionVersion</a></code> | <code>string</code> | [Write] greengrass:CreateResourceDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateSoftwareUpdateJob">CreateSoftwareUpdateJob</a></code> | <code>string</code> | [Write] greengrass:CreateSoftwareUpdateJob. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateSubscriptionDefinition">CreateSubscriptionDefinition</a></code> | <code>string</code> | [Write] greengrass:CreateSubscriptionDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.CreateSubscriptionDefinitionVersion">CreateSubscriptionDefinitionVersion</a></code> | <code>string</code> | [Write] greengrass:CreateSubscriptionDefinitionVersion. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteComponent">DeleteComponent</a></code> | <code>string</code> | [Write] greengrass:DeleteComponent. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteConnectorDefinition">DeleteConnectorDefinition</a></code> | <code>string</code> | [Write] greengrass:DeleteConnectorDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteCoreDefinition">DeleteCoreDefinition</a></code> | <code>string</code> | [Write] greengrass:DeleteCoreDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteCoreDevice">DeleteCoreDevice</a></code> | <code>string</code> | [Write] greengrass:DeleteCoreDevice. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteDeployment">DeleteDeployment</a></code> | <code>string</code> | [Write] greengrass:DeleteDeployment. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteDeviceDefinition">DeleteDeviceDefinition</a></code> | <code>string</code> | [Write] greengrass:DeleteDeviceDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteFunctionDefinition">DeleteFunctionDefinition</a></code> | <code>string</code> | [Write] greengrass:DeleteFunctionDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] greengrass:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteLoggerDefinition">DeleteLoggerDefinition</a></code> | <code>string</code> | [Write] greengrass:DeleteLoggerDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteResourceDefinition">DeleteResourceDefinition</a></code> | <code>string</code> | [Write] greengrass:DeleteResourceDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteSubscriptionDefinition">DeleteSubscriptionDefinition</a></code> | <code>string</code> | [Write] greengrass:DeleteSubscriptionDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DescribeComponent">DescribeComponent</a></code> | <code>string</code> | [Read] greengrass:DescribeComponent. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DisassociateRoleFromGroup">DisassociateRoleFromGroup</a></code> | <code>string</code> | [Write] greengrass:DisassociateRoleFromGroup. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.DisassociateServiceRoleFromAccount">DisassociateServiceRoleFromAccount</a></code> | <code>string</code> | [Write] greengrass:DisassociateServiceRoleFromAccount. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.Discover">Discover</a></code> | <code>string</code> | [Read] greengrass:Discover. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListBulkDeploymentDetailedReports">ListBulkDeploymentDetailedReports</a></code> | <code>string</code> | [Read] greengrass:ListBulkDeploymentDetailedReports. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListBulkDeployments">ListBulkDeployments</a></code> | <code>string</code> | [List] greengrass:ListBulkDeployments. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListClientDevicesAssociatedWithCoreDevice">ListClientDevicesAssociatedWithCoreDevice</a></code> | <code>string</code> | [List] greengrass:ListClientDevicesAssociatedWithCoreDevice. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListComponents">ListComponents</a></code> | <code>string</code> | [List] greengrass:ListComponents. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListComponentVersions">ListComponentVersions</a></code> | <code>string</code> | [List] greengrass:ListComponentVersions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListConnectorDefinitions">ListConnectorDefinitions</a></code> | <code>string</code> | [List] greengrass:ListConnectorDefinitions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListConnectorDefinitionVersions">ListConnectorDefinitionVersions</a></code> | <code>string</code> | [List] greengrass:ListConnectorDefinitionVersions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListCoreDefinitions">ListCoreDefinitions</a></code> | <code>string</code> | [List] greengrass:ListCoreDefinitions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListCoreDefinitionVersions">ListCoreDefinitionVersions</a></code> | <code>string</code> | [List] greengrass:ListCoreDefinitionVersions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListCoreDevices">ListCoreDevices</a></code> | <code>string</code> | [List] greengrass:ListCoreDevices. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListDeployments">ListDeployments</a></code> | <code>string</code> | [List] greengrass:ListDeployments. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListDeviceDefinitions">ListDeviceDefinitions</a></code> | <code>string</code> | [List] greengrass:ListDeviceDefinitions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListDeviceDefinitionVersions">ListDeviceDefinitionVersions</a></code> | <code>string</code> | [List] greengrass:ListDeviceDefinitionVersions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListEffectiveDeployments">ListEffectiveDeployments</a></code> | <code>string</code> | [List] greengrass:ListEffectiveDeployments. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListFunctionDefinitions">ListFunctionDefinitions</a></code> | <code>string</code> | [List] greengrass:ListFunctionDefinitions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListFunctionDefinitionVersions">ListFunctionDefinitionVersions</a></code> | <code>string</code> | [List] greengrass:ListFunctionDefinitionVersions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListGroupCertificateAuthorities">ListGroupCertificateAuthorities</a></code> | <code>string</code> | [List] greengrass:ListGroupCertificateAuthorities. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] greengrass:ListGroups. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListGroupVersions">ListGroupVersions</a></code> | <code>string</code> | [List] greengrass:ListGroupVersions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListInstalledComponents">ListInstalledComponents</a></code> | <code>string</code> | [List] greengrass:ListInstalledComponents. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListLoggerDefinitions">ListLoggerDefinitions</a></code> | <code>string</code> | [List] greengrass:ListLoggerDefinitions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListLoggerDefinitionVersions">ListLoggerDefinitionVersions</a></code> | <code>string</code> | [List] greengrass:ListLoggerDefinitionVersions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListResourceDefinitions">ListResourceDefinitions</a></code> | <code>string</code> | [List] greengrass:ListResourceDefinitions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListResourceDefinitionVersions">ListResourceDefinitionVersions</a></code> | <code>string</code> | [List] greengrass:ListResourceDefinitionVersions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListSubscriptionDefinitions">ListSubscriptionDefinitions</a></code> | <code>string</code> | [List] greengrass:ListSubscriptionDefinitions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListSubscriptionDefinitionVersions">ListSubscriptionDefinitionVersions</a></code> | <code>string</code> | [List] greengrass:ListSubscriptionDefinitionVersions. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] greengrass:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ResetDeployments">ResetDeployments</a></code> | <code>string</code> | [Write] greengrass:ResetDeployments. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.ResolveComponentCandidates">ResolveComponentCandidates</a></code> | <code>string</code> | [List] greengrass:ResolveComponentCandidates. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.StartBulkDeployment">StartBulkDeployment</a></code> | <code>string</code> | [Write] greengrass:StartBulkDeployment. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.StopBulkDeployment">StopBulkDeployment</a></code> | <code>string</code> | [Write] greengrass:StopBulkDeployment. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] greengrass:TagResource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] greengrass:UntagResource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateConnectivityInfo">UpdateConnectivityInfo</a></code> | <code>string</code> | [Write] greengrass:UpdateConnectivityInfo. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateConnectorDefinition">UpdateConnectorDefinition</a></code> | <code>string</code> | [Write] greengrass:UpdateConnectorDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateCoreDefinition">UpdateCoreDefinition</a></code> | <code>string</code> | [Write] greengrass:UpdateCoreDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateDeviceDefinition">UpdateDeviceDefinition</a></code> | <code>string</code> | [Write] greengrass:UpdateDeviceDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateFunctionDefinition">UpdateFunctionDefinition</a></code> | <code>string</code> | [Write] greengrass:UpdateFunctionDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateGroup">UpdateGroup</a></code> | <code>string</code> | [Write] greengrass:UpdateGroup. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateGroupCertificateConfiguration">UpdateGroupCertificateConfiguration</a></code> | <code>string</code> | [Write] greengrass:UpdateGroupCertificateConfiguration. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateLoggerDefinition">UpdateLoggerDefinition</a></code> | <code>string</code> | [Write] greengrass:UpdateLoggerDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateResourceDefinition">UpdateResourceDefinition</a></code> | <code>string</code> | [Write] greengrass:UpdateResourceDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateSubscriptionDefinition">UpdateSubscriptionDefinition</a></code> | <code>string</code> | [Write] greengrass:UpdateSubscriptionDefinition. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateThingRuntimeConfiguration">UpdateThingRuntimeConfiguration</a></code> | <code>string</code> | [Write] greengrass:UpdateThingRuntimeConfiguration. |

---

##### `actionGetAssociatedRole`<sup>Required</sup> <a name="actionGetAssociatedRole" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetAssociatedRole"></a>

```typescript
public readonly actionGetAssociatedRole: string;
```

- *Type:* string

[Read] greengrass:GetAssociatedRole.

---

##### `actionGetBulkDeploymentStatus`<sup>Required</sup> <a name="actionGetBulkDeploymentStatus" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetBulkDeploymentStatus"></a>

```typescript
public readonly actionGetBulkDeploymentStatus: string;
```

- *Type:* string

[Read] greengrass:GetBulkDeploymentStatus.

---

##### `actionGetComponent`<sup>Required</sup> <a name="actionGetComponent" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetComponent"></a>

```typescript
public readonly actionGetComponent: string;
```

- *Type:* string

[Read] greengrass:GetComponent.

---

##### `actionGetComponentVersionArtifact`<sup>Required</sup> <a name="actionGetComponentVersionArtifact" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetComponentVersionArtifact"></a>

```typescript
public readonly actionGetComponentVersionArtifact: string;
```

- *Type:* string

[Read] greengrass:GetComponentVersionArtifact.

---

##### `actionGetConnectivityInfo`<sup>Required</sup> <a name="actionGetConnectivityInfo" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetConnectivityInfo"></a>

```typescript
public readonly actionGetConnectivityInfo: string;
```

- *Type:* string

[Read] greengrass:GetConnectivityInfo.

---

##### `actionGetConnectorDefinition`<sup>Required</sup> <a name="actionGetConnectorDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetConnectorDefinition"></a>

```typescript
public readonly actionGetConnectorDefinition: string;
```

- *Type:* string

[Read] greengrass:GetConnectorDefinition.

---

##### `actionGetConnectorDefinitionVersion`<sup>Required</sup> <a name="actionGetConnectorDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetConnectorDefinitionVersion"></a>

```typescript
public readonly actionGetConnectorDefinitionVersion: string;
```

- *Type:* string

[Read] greengrass:GetConnectorDefinitionVersion.

---

##### `actionGetCoreDefinition`<sup>Required</sup> <a name="actionGetCoreDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetCoreDefinition"></a>

```typescript
public readonly actionGetCoreDefinition: string;
```

- *Type:* string

[Read] greengrass:GetCoreDefinition.

---

##### `actionGetCoreDefinitionVersion`<sup>Required</sup> <a name="actionGetCoreDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetCoreDefinitionVersion"></a>

```typescript
public readonly actionGetCoreDefinitionVersion: string;
```

- *Type:* string

[Read] greengrass:GetCoreDefinitionVersion.

---

##### `actionGetCoreDevice`<sup>Required</sup> <a name="actionGetCoreDevice" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetCoreDevice"></a>

```typescript
public readonly actionGetCoreDevice: string;
```

- *Type:* string

[Read] greengrass:GetCoreDevice.

---

##### `actionGetDeployment`<sup>Required</sup> <a name="actionGetDeployment" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetDeployment"></a>

```typescript
public readonly actionGetDeployment: string;
```

- *Type:* string

[Read] greengrass:GetDeployment.

---

##### `actionGetDeploymentStatus`<sup>Required</sup> <a name="actionGetDeploymentStatus" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetDeploymentStatus"></a>

```typescript
public readonly actionGetDeploymentStatus: string;
```

- *Type:* string

[Read] greengrass:GetDeploymentStatus.

---

##### `actionGetDeviceDefinition`<sup>Required</sup> <a name="actionGetDeviceDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetDeviceDefinition"></a>

```typescript
public readonly actionGetDeviceDefinition: string;
```

- *Type:* string

[Read] greengrass:GetDeviceDefinition.

---

##### `actionGetDeviceDefinitionVersion`<sup>Required</sup> <a name="actionGetDeviceDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetDeviceDefinitionVersion"></a>

```typescript
public readonly actionGetDeviceDefinitionVersion: string;
```

- *Type:* string

[Read] greengrass:GetDeviceDefinitionVersion.

---

##### `actionGetFunctionDefinition`<sup>Required</sup> <a name="actionGetFunctionDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetFunctionDefinition"></a>

```typescript
public readonly actionGetFunctionDefinition: string;
```

- *Type:* string

[Read] greengrass:GetFunctionDefinition.

---

##### `actionGetFunctionDefinitionVersion`<sup>Required</sup> <a name="actionGetFunctionDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetFunctionDefinitionVersion"></a>

```typescript
public readonly actionGetFunctionDefinitionVersion: string;
```

- *Type:* string

[Read] greengrass:GetFunctionDefinitionVersion.

---

##### `actionGetGroup`<sup>Required</sup> <a name="actionGetGroup" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetGroup"></a>

```typescript
public readonly actionGetGroup: string;
```

- *Type:* string

[Read] greengrass:GetGroup.

---

##### `actionGetGroupCertificateAuthority`<sup>Required</sup> <a name="actionGetGroupCertificateAuthority" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetGroupCertificateAuthority"></a>

```typescript
public readonly actionGetGroupCertificateAuthority: string;
```

- *Type:* string

[Read] greengrass:GetGroupCertificateAuthority.

---

##### `actionGetGroupCertificateConfiguration`<sup>Required</sup> <a name="actionGetGroupCertificateConfiguration" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetGroupCertificateConfiguration"></a>

```typescript
public readonly actionGetGroupCertificateConfiguration: string;
```

- *Type:* string

[Read] greengrass:GetGroupCertificateConfiguration.

---

##### `actionGetGroupVersion`<sup>Required</sup> <a name="actionGetGroupVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetGroupVersion"></a>

```typescript
public readonly actionGetGroupVersion: string;
```

- *Type:* string

[Read] greengrass:GetGroupVersion.

---

##### `actionGetLoggerDefinition`<sup>Required</sup> <a name="actionGetLoggerDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetLoggerDefinition"></a>

```typescript
public readonly actionGetLoggerDefinition: string;
```

- *Type:* string

[Read] greengrass:GetLoggerDefinition.

---

##### `actionGetLoggerDefinitionVersion`<sup>Required</sup> <a name="actionGetLoggerDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetLoggerDefinitionVersion"></a>

```typescript
public readonly actionGetLoggerDefinitionVersion: string;
```

- *Type:* string

[Read] greengrass:GetLoggerDefinitionVersion.

---

##### `actionGetResourceDefinition`<sup>Required</sup> <a name="actionGetResourceDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetResourceDefinition"></a>

```typescript
public readonly actionGetResourceDefinition: string;
```

- *Type:* string

[Read] greengrass:GetResourceDefinition.

---

##### `actionGetResourceDefinitionVersion`<sup>Required</sup> <a name="actionGetResourceDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetResourceDefinitionVersion"></a>

```typescript
public readonly actionGetResourceDefinitionVersion: string;
```

- *Type:* string

[Read] greengrass:GetResourceDefinitionVersion.

---

##### `actionGetServiceRoleForAccount`<sup>Required</sup> <a name="actionGetServiceRoleForAccount" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetServiceRoleForAccount"></a>

```typescript
public readonly actionGetServiceRoleForAccount: string;
```

- *Type:* string

[Read] greengrass:GetServiceRoleForAccount.

---

##### `actionGetSubscriptionDefinition`<sup>Required</sup> <a name="actionGetSubscriptionDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetSubscriptionDefinition"></a>

```typescript
public readonly actionGetSubscriptionDefinition: string;
```

- *Type:* string

[Read] greengrass:GetSubscriptionDefinition.

---

##### `actionGetSubscriptionDefinitionVersion`<sup>Required</sup> <a name="actionGetSubscriptionDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetSubscriptionDefinitionVersion"></a>

```typescript
public readonly actionGetSubscriptionDefinitionVersion: string;
```

- *Type:* string

[Read] greengrass:GetSubscriptionDefinitionVersion.

---

##### `actionGetThingRuntimeConfiguration`<sup>Required</sup> <a name="actionGetThingRuntimeConfiguration" id="@cdk_utils/iam.greengrass.GreengrassActions.property.actionGetThingRuntimeConfiguration"></a>

```typescript
public readonly actionGetThingRuntimeConfiguration: string;
```

- *Type:* string

[Read] greengrass:GetThingRuntimeConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateRoleToGroup`<sup>Required</sup> <a name="AssociateRoleToGroup" id="@cdk_utils/iam.greengrass.GreengrassActions.property.AssociateRoleToGroup"></a>

```typescript
public readonly AssociateRoleToGroup: string;
```

- *Type:* string

[Write] greengrass:AssociateRoleToGroup.

---

##### `AssociateServiceRoleToAccount`<sup>Required</sup> <a name="AssociateServiceRoleToAccount" id="@cdk_utils/iam.greengrass.GreengrassActions.property.AssociateServiceRoleToAccount"></a>

```typescript
public readonly AssociateServiceRoleToAccount: string;
```

- *Type:* string

[PermissionManagement] greengrass:AssociateServiceRoleToAccount.

---

##### `BatchAssociateClientDeviceWithCoreDevice`<sup>Required</sup> <a name="BatchAssociateClientDeviceWithCoreDevice" id="@cdk_utils/iam.greengrass.GreengrassActions.property.BatchAssociateClientDeviceWithCoreDevice"></a>

```typescript
public readonly BatchAssociateClientDeviceWithCoreDevice: string;
```

- *Type:* string

[Write] greengrass:BatchAssociateClientDeviceWithCoreDevice.

---

##### `BatchDisassociateClientDeviceFromCoreDevice`<sup>Required</sup> <a name="BatchDisassociateClientDeviceFromCoreDevice" id="@cdk_utils/iam.greengrass.GreengrassActions.property.BatchDisassociateClientDeviceFromCoreDevice"></a>

```typescript
public readonly BatchDisassociateClientDeviceFromCoreDevice: string;
```

- *Type:* string

[Write] greengrass:BatchDisassociateClientDeviceFromCoreDevice.

---

##### `CancelDeployment`<sup>Required</sup> <a name="CancelDeployment" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CancelDeployment"></a>

```typescript
public readonly CancelDeployment: string;
```

- *Type:* string

[Write] greengrass:CancelDeployment.

---

##### `CreateComponentVersion`<sup>Required</sup> <a name="CreateComponentVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateComponentVersion"></a>

```typescript
public readonly CreateComponentVersion: string;
```

- *Type:* string

[Write] greengrass:CreateComponentVersion.

---

##### `CreateConnectorDefinition`<sup>Required</sup> <a name="CreateConnectorDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateConnectorDefinition"></a>

```typescript
public readonly CreateConnectorDefinition: string;
```

- *Type:* string

[Write] greengrass:CreateConnectorDefinition.

---

##### `CreateConnectorDefinitionVersion`<sup>Required</sup> <a name="CreateConnectorDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateConnectorDefinitionVersion"></a>

```typescript
public readonly CreateConnectorDefinitionVersion: string;
```

- *Type:* string

[Write] greengrass:CreateConnectorDefinitionVersion.

---

##### `CreateCoreDefinition`<sup>Required</sup> <a name="CreateCoreDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateCoreDefinition"></a>

```typescript
public readonly CreateCoreDefinition: string;
```

- *Type:* string

[Write] greengrass:CreateCoreDefinition.

---

##### `CreateCoreDefinitionVersion`<sup>Required</sup> <a name="CreateCoreDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateCoreDefinitionVersion"></a>

```typescript
public readonly CreateCoreDefinitionVersion: string;
```

- *Type:* string

[Write] greengrass:CreateCoreDefinitionVersion.

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string;
```

- *Type:* string

[Write] greengrass:CreateDeployment.

---

##### `CreateDeviceDefinition`<sup>Required</sup> <a name="CreateDeviceDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateDeviceDefinition"></a>

```typescript
public readonly CreateDeviceDefinition: string;
```

- *Type:* string

[Write] greengrass:CreateDeviceDefinition.

---

##### `CreateDeviceDefinitionVersion`<sup>Required</sup> <a name="CreateDeviceDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateDeviceDefinitionVersion"></a>

```typescript
public readonly CreateDeviceDefinitionVersion: string;
```

- *Type:* string

[Write] greengrass:CreateDeviceDefinitionVersion.

---

##### `CreateFunctionDefinition`<sup>Required</sup> <a name="CreateFunctionDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateFunctionDefinition"></a>

```typescript
public readonly CreateFunctionDefinition: string;
```

- *Type:* string

[Write] greengrass:CreateFunctionDefinition.

---

##### `CreateFunctionDefinitionVersion`<sup>Required</sup> <a name="CreateFunctionDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateFunctionDefinitionVersion"></a>

```typescript
public readonly CreateFunctionDefinitionVersion: string;
```

- *Type:* string

[Write] greengrass:CreateFunctionDefinitionVersion.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string;
```

- *Type:* string

[Write] greengrass:CreateGroup.

---

##### `CreateGroupCertificateAuthority`<sup>Required</sup> <a name="CreateGroupCertificateAuthority" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateGroupCertificateAuthority"></a>

```typescript
public readonly CreateGroupCertificateAuthority: string;
```

- *Type:* string

[Write] greengrass:CreateGroupCertificateAuthority.

---

##### `CreateGroupVersion`<sup>Required</sup> <a name="CreateGroupVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateGroupVersion"></a>

```typescript
public readonly CreateGroupVersion: string;
```

- *Type:* string

[Write] greengrass:CreateGroupVersion.

---

##### `CreateLoggerDefinition`<sup>Required</sup> <a name="CreateLoggerDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateLoggerDefinition"></a>

```typescript
public readonly CreateLoggerDefinition: string;
```

- *Type:* string

[Write] greengrass:CreateLoggerDefinition.

---

##### `CreateLoggerDefinitionVersion`<sup>Required</sup> <a name="CreateLoggerDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateLoggerDefinitionVersion"></a>

```typescript
public readonly CreateLoggerDefinitionVersion: string;
```

- *Type:* string

[Write] greengrass:CreateLoggerDefinitionVersion.

---

##### `CreateResourceDefinition`<sup>Required</sup> <a name="CreateResourceDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateResourceDefinition"></a>

```typescript
public readonly CreateResourceDefinition: string;
```

- *Type:* string

[Write] greengrass:CreateResourceDefinition.

---

##### `CreateResourceDefinitionVersion`<sup>Required</sup> <a name="CreateResourceDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateResourceDefinitionVersion"></a>

```typescript
public readonly CreateResourceDefinitionVersion: string;
```

- *Type:* string

[Write] greengrass:CreateResourceDefinitionVersion.

---

##### `CreateSoftwareUpdateJob`<sup>Required</sup> <a name="CreateSoftwareUpdateJob" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateSoftwareUpdateJob"></a>

```typescript
public readonly CreateSoftwareUpdateJob: string;
```

- *Type:* string

[Write] greengrass:CreateSoftwareUpdateJob.

---

##### `CreateSubscriptionDefinition`<sup>Required</sup> <a name="CreateSubscriptionDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateSubscriptionDefinition"></a>

```typescript
public readonly CreateSubscriptionDefinition: string;
```

- *Type:* string

[Write] greengrass:CreateSubscriptionDefinition.

---

##### `CreateSubscriptionDefinitionVersion`<sup>Required</sup> <a name="CreateSubscriptionDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassActions.property.CreateSubscriptionDefinitionVersion"></a>

```typescript
public readonly CreateSubscriptionDefinitionVersion: string;
```

- *Type:* string

[Write] greengrass:CreateSubscriptionDefinitionVersion.

---

##### `DeleteComponent`<sup>Required</sup> <a name="DeleteComponent" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteComponent"></a>

```typescript
public readonly DeleteComponent: string;
```

- *Type:* string

[Write] greengrass:DeleteComponent.

---

##### `DeleteConnectorDefinition`<sup>Required</sup> <a name="DeleteConnectorDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteConnectorDefinition"></a>

```typescript
public readonly DeleteConnectorDefinition: string;
```

- *Type:* string

[Write] greengrass:DeleteConnectorDefinition.

---

##### `DeleteCoreDefinition`<sup>Required</sup> <a name="DeleteCoreDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteCoreDefinition"></a>

```typescript
public readonly DeleteCoreDefinition: string;
```

- *Type:* string

[Write] greengrass:DeleteCoreDefinition.

---

##### `DeleteCoreDevice`<sup>Required</sup> <a name="DeleteCoreDevice" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteCoreDevice"></a>

```typescript
public readonly DeleteCoreDevice: string;
```

- *Type:* string

[Write] greengrass:DeleteCoreDevice.

---

##### `DeleteDeployment`<sup>Required</sup> <a name="DeleteDeployment" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteDeployment"></a>

```typescript
public readonly DeleteDeployment: string;
```

- *Type:* string

[Write] greengrass:DeleteDeployment.

---

##### `DeleteDeviceDefinition`<sup>Required</sup> <a name="DeleteDeviceDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteDeviceDefinition"></a>

```typescript
public readonly DeleteDeviceDefinition: string;
```

- *Type:* string

[Write] greengrass:DeleteDeviceDefinition.

---

##### `DeleteFunctionDefinition`<sup>Required</sup> <a name="DeleteFunctionDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteFunctionDefinition"></a>

```typescript
public readonly DeleteFunctionDefinition: string;
```

- *Type:* string

[Write] greengrass:DeleteFunctionDefinition.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] greengrass:DeleteGroup.

---

##### `DeleteLoggerDefinition`<sup>Required</sup> <a name="DeleteLoggerDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteLoggerDefinition"></a>

```typescript
public readonly DeleteLoggerDefinition: string;
```

- *Type:* string

[Write] greengrass:DeleteLoggerDefinition.

---

##### `DeleteResourceDefinition`<sup>Required</sup> <a name="DeleteResourceDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteResourceDefinition"></a>

```typescript
public readonly DeleteResourceDefinition: string;
```

- *Type:* string

[Write] greengrass:DeleteResourceDefinition.

---

##### `DeleteSubscriptionDefinition`<sup>Required</sup> <a name="DeleteSubscriptionDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DeleteSubscriptionDefinition"></a>

```typescript
public readonly DeleteSubscriptionDefinition: string;
```

- *Type:* string

[Write] greengrass:DeleteSubscriptionDefinition.

---

##### `DescribeComponent`<sup>Required</sup> <a name="DescribeComponent" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DescribeComponent"></a>

```typescript
public readonly DescribeComponent: string;
```

- *Type:* string

[Read] greengrass:DescribeComponent.

---

##### `DisassociateRoleFromGroup`<sup>Required</sup> <a name="DisassociateRoleFromGroup" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DisassociateRoleFromGroup"></a>

```typescript
public readonly DisassociateRoleFromGroup: string;
```

- *Type:* string

[Write] greengrass:DisassociateRoleFromGroup.

---

##### `DisassociateServiceRoleFromAccount`<sup>Required</sup> <a name="DisassociateServiceRoleFromAccount" id="@cdk_utils/iam.greengrass.GreengrassActions.property.DisassociateServiceRoleFromAccount"></a>

```typescript
public readonly DisassociateServiceRoleFromAccount: string;
```

- *Type:* string

[Write] greengrass:DisassociateServiceRoleFromAccount.

---

##### `Discover`<sup>Required</sup> <a name="Discover" id="@cdk_utils/iam.greengrass.GreengrassActions.property.Discover"></a>

```typescript
public readonly Discover: string;
```

- *Type:* string

[Read] greengrass:Discover.

---

##### `ListBulkDeploymentDetailedReports`<sup>Required</sup> <a name="ListBulkDeploymentDetailedReports" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListBulkDeploymentDetailedReports"></a>

```typescript
public readonly ListBulkDeploymentDetailedReports: string;
```

- *Type:* string

[Read] greengrass:ListBulkDeploymentDetailedReports.

---

##### `ListBulkDeployments`<sup>Required</sup> <a name="ListBulkDeployments" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListBulkDeployments"></a>

```typescript
public readonly ListBulkDeployments: string;
```

- *Type:* string

[List] greengrass:ListBulkDeployments.

---

##### `ListClientDevicesAssociatedWithCoreDevice`<sup>Required</sup> <a name="ListClientDevicesAssociatedWithCoreDevice" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListClientDevicesAssociatedWithCoreDevice"></a>

```typescript
public readonly ListClientDevicesAssociatedWithCoreDevice: string;
```

- *Type:* string

[List] greengrass:ListClientDevicesAssociatedWithCoreDevice.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListComponents"></a>

```typescript
public readonly ListComponents: string;
```

- *Type:* string

[List] greengrass:ListComponents.

---

##### `ListComponentVersions`<sup>Required</sup> <a name="ListComponentVersions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListComponentVersions"></a>

```typescript
public readonly ListComponentVersions: string;
```

- *Type:* string

[List] greengrass:ListComponentVersions.

---

##### `ListConnectorDefinitions`<sup>Required</sup> <a name="ListConnectorDefinitions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListConnectorDefinitions"></a>

```typescript
public readonly ListConnectorDefinitions: string;
```

- *Type:* string

[List] greengrass:ListConnectorDefinitions.

---

##### `ListConnectorDefinitionVersions`<sup>Required</sup> <a name="ListConnectorDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListConnectorDefinitionVersions"></a>

```typescript
public readonly ListConnectorDefinitionVersions: string;
```

- *Type:* string

[List] greengrass:ListConnectorDefinitionVersions.

---

##### `ListCoreDefinitions`<sup>Required</sup> <a name="ListCoreDefinitions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListCoreDefinitions"></a>

```typescript
public readonly ListCoreDefinitions: string;
```

- *Type:* string

[List] greengrass:ListCoreDefinitions.

---

##### `ListCoreDefinitionVersions`<sup>Required</sup> <a name="ListCoreDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListCoreDefinitionVersions"></a>

```typescript
public readonly ListCoreDefinitionVersions: string;
```

- *Type:* string

[List] greengrass:ListCoreDefinitionVersions.

---

##### `ListCoreDevices`<sup>Required</sup> <a name="ListCoreDevices" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListCoreDevices"></a>

```typescript
public readonly ListCoreDevices: string;
```

- *Type:* string

[List] greengrass:ListCoreDevices.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string;
```

- *Type:* string

[List] greengrass:ListDeployments.

---

##### `ListDeviceDefinitions`<sup>Required</sup> <a name="ListDeviceDefinitions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListDeviceDefinitions"></a>

```typescript
public readonly ListDeviceDefinitions: string;
```

- *Type:* string

[List] greengrass:ListDeviceDefinitions.

---

##### `ListDeviceDefinitionVersions`<sup>Required</sup> <a name="ListDeviceDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListDeviceDefinitionVersions"></a>

```typescript
public readonly ListDeviceDefinitionVersions: string;
```

- *Type:* string

[List] greengrass:ListDeviceDefinitionVersions.

---

##### `ListEffectiveDeployments`<sup>Required</sup> <a name="ListEffectiveDeployments" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListEffectiveDeployments"></a>

```typescript
public readonly ListEffectiveDeployments: string;
```

- *Type:* string

[List] greengrass:ListEffectiveDeployments.

---

##### `ListFunctionDefinitions`<sup>Required</sup> <a name="ListFunctionDefinitions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListFunctionDefinitions"></a>

```typescript
public readonly ListFunctionDefinitions: string;
```

- *Type:* string

[List] greengrass:ListFunctionDefinitions.

---

##### `ListFunctionDefinitionVersions`<sup>Required</sup> <a name="ListFunctionDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListFunctionDefinitionVersions"></a>

```typescript
public readonly ListFunctionDefinitionVersions: string;
```

- *Type:* string

[List] greengrass:ListFunctionDefinitionVersions.

---

##### `ListGroupCertificateAuthorities`<sup>Required</sup> <a name="ListGroupCertificateAuthorities" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListGroupCertificateAuthorities"></a>

```typescript
public readonly ListGroupCertificateAuthorities: string;
```

- *Type:* string

[List] greengrass:ListGroupCertificateAuthorities.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] greengrass:ListGroups.

---

##### `ListGroupVersions`<sup>Required</sup> <a name="ListGroupVersions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListGroupVersions"></a>

```typescript
public readonly ListGroupVersions: string;
```

- *Type:* string

[List] greengrass:ListGroupVersions.

---

##### `ListInstalledComponents`<sup>Required</sup> <a name="ListInstalledComponents" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListInstalledComponents"></a>

```typescript
public readonly ListInstalledComponents: string;
```

- *Type:* string

[List] greengrass:ListInstalledComponents.

---

##### `ListLoggerDefinitions`<sup>Required</sup> <a name="ListLoggerDefinitions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListLoggerDefinitions"></a>

```typescript
public readonly ListLoggerDefinitions: string;
```

- *Type:* string

[List] greengrass:ListLoggerDefinitions.

---

##### `ListLoggerDefinitionVersions`<sup>Required</sup> <a name="ListLoggerDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListLoggerDefinitionVersions"></a>

```typescript
public readonly ListLoggerDefinitionVersions: string;
```

- *Type:* string

[List] greengrass:ListLoggerDefinitionVersions.

---

##### `ListResourceDefinitions`<sup>Required</sup> <a name="ListResourceDefinitions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListResourceDefinitions"></a>

```typescript
public readonly ListResourceDefinitions: string;
```

- *Type:* string

[List] greengrass:ListResourceDefinitions.

---

##### `ListResourceDefinitionVersions`<sup>Required</sup> <a name="ListResourceDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListResourceDefinitionVersions"></a>

```typescript
public readonly ListResourceDefinitionVersions: string;
```

- *Type:* string

[List] greengrass:ListResourceDefinitionVersions.

---

##### `ListSubscriptionDefinitions`<sup>Required</sup> <a name="ListSubscriptionDefinitions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListSubscriptionDefinitions"></a>

```typescript
public readonly ListSubscriptionDefinitions: string;
```

- *Type:* string

[List] greengrass:ListSubscriptionDefinitions.

---

##### `ListSubscriptionDefinitionVersions`<sup>Required</sup> <a name="ListSubscriptionDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListSubscriptionDefinitionVersions"></a>

```typescript
public readonly ListSubscriptionDefinitionVersions: string;
```

- *Type:* string

[List] greengrass:ListSubscriptionDefinitionVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] greengrass:ListTagsForResource.

---

##### `ResetDeployments`<sup>Required</sup> <a name="ResetDeployments" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ResetDeployments"></a>

```typescript
public readonly ResetDeployments: string;
```

- *Type:* string

[Write] greengrass:ResetDeployments.

---

##### `ResolveComponentCandidates`<sup>Required</sup> <a name="ResolveComponentCandidates" id="@cdk_utils/iam.greengrass.GreengrassActions.property.ResolveComponentCandidates"></a>

```typescript
public readonly ResolveComponentCandidates: string;
```

- *Type:* string

[List] greengrass:ResolveComponentCandidates.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.greengrass.GreengrassActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartBulkDeployment`<sup>Required</sup> <a name="StartBulkDeployment" id="@cdk_utils/iam.greengrass.GreengrassActions.property.StartBulkDeployment"></a>

```typescript
public readonly StartBulkDeployment: string;
```

- *Type:* string

[Write] greengrass:StartBulkDeployment.

---

##### `StopBulkDeployment`<sup>Required</sup> <a name="StopBulkDeployment" id="@cdk_utils/iam.greengrass.GreengrassActions.property.StopBulkDeployment"></a>

```typescript
public readonly StopBulkDeployment: string;
```

- *Type:* string

[Write] greengrass:StopBulkDeployment.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.greengrass.GreengrassActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] greengrass:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] greengrass:UntagResource.

---

##### `UpdateConnectivityInfo`<sup>Required</sup> <a name="UpdateConnectivityInfo" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateConnectivityInfo"></a>

```typescript
public readonly UpdateConnectivityInfo: string;
```

- *Type:* string

[Write] greengrass:UpdateConnectivityInfo.

---

##### `UpdateConnectorDefinition`<sup>Required</sup> <a name="UpdateConnectorDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateConnectorDefinition"></a>

```typescript
public readonly UpdateConnectorDefinition: string;
```

- *Type:* string

[Write] greengrass:UpdateConnectorDefinition.

---

##### `UpdateCoreDefinition`<sup>Required</sup> <a name="UpdateCoreDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateCoreDefinition"></a>

```typescript
public readonly UpdateCoreDefinition: string;
```

- *Type:* string

[Write] greengrass:UpdateCoreDefinition.

---

##### `UpdateDeviceDefinition`<sup>Required</sup> <a name="UpdateDeviceDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateDeviceDefinition"></a>

```typescript
public readonly UpdateDeviceDefinition: string;
```

- *Type:* string

[Write] greengrass:UpdateDeviceDefinition.

---

##### `UpdateFunctionDefinition`<sup>Required</sup> <a name="UpdateFunctionDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateFunctionDefinition"></a>

```typescript
public readonly UpdateFunctionDefinition: string;
```

- *Type:* string

[Write] greengrass:UpdateFunctionDefinition.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string;
```

- *Type:* string

[Write] greengrass:UpdateGroup.

---

##### `UpdateGroupCertificateConfiguration`<sup>Required</sup> <a name="UpdateGroupCertificateConfiguration" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateGroupCertificateConfiguration"></a>

```typescript
public readonly UpdateGroupCertificateConfiguration: string;
```

- *Type:* string

[Write] greengrass:UpdateGroupCertificateConfiguration.

---

##### `UpdateLoggerDefinition`<sup>Required</sup> <a name="UpdateLoggerDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateLoggerDefinition"></a>

```typescript
public readonly UpdateLoggerDefinition: string;
```

- *Type:* string

[Write] greengrass:UpdateLoggerDefinition.

---

##### `UpdateResourceDefinition`<sup>Required</sup> <a name="UpdateResourceDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateResourceDefinition"></a>

```typescript
public readonly UpdateResourceDefinition: string;
```

- *Type:* string

[Write] greengrass:UpdateResourceDefinition.

---

##### `UpdateSubscriptionDefinition`<sup>Required</sup> <a name="UpdateSubscriptionDefinition" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateSubscriptionDefinition"></a>

```typescript
public readonly UpdateSubscriptionDefinition: string;
```

- *Type:* string

[Write] greengrass:UpdateSubscriptionDefinition.

---

##### `UpdateThingRuntimeConfiguration`<sup>Required</sup> <a name="UpdateThingRuntimeConfiguration" id="@cdk_utils/iam.greengrass.GreengrassActions.property.UpdateThingRuntimeConfiguration"></a>

```typescript
public readonly UpdateThingRuntimeConfiguration: string;
```

- *Type:* string

[Write] greengrass:UpdateThingRuntimeConfiguration.

---

### GreengrassConditions <a name="GreengrassConditions" id="@cdk_utils/iam.greengrass.GreengrassConditions"></a>

Condition key constants and builders for greengrass.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.greengrass.GreengrassConditions.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

new greengrass.GreengrassConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.greengrass.GreengrassConditions.requestTag"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.greengrass.GreengrassConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.greengrass.GreengrassConditions.resourceTag"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.greengrass.GreengrassConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.tagKeys"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.greengrass.GreengrassConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateComponentVersionConditionKeys">CreateComponentVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateComponentVersion action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateConnectorDefinitionConditionKeys">CreateConnectorDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnectorDefinition action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateCoreDefinitionConditionKeys">CreateCoreDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCoreDefinition action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateDeploymentConditionKeys">CreateDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeployment action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateDeviceDefinitionConditionKeys">CreateDeviceDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeviceDefinition action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateFunctionDefinitionConditionKeys">CreateFunctionDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFunctionDefinition action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateGroupConditionKeys">CreateGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGroup action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateLoggerDefinitionConditionKeys">CreateLoggerDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLoggerDefinition action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateResourceDefinitionConditionKeys">CreateResourceDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResourceDefinition action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateSubscriptionDefinitionConditionKeys">CreateSubscriptionDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSubscriptionDefinition action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.StartBulkDeploymentConditionKeys">StartBulkDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartBulkDeployment action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateComponentVersionConditionKeys`<sup>Required</sup> <a name="CreateComponentVersionConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateComponentVersionConditionKeys"></a>

```typescript
public readonly CreateComponentVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateComponentVersion action.

---

##### `CreateConnectorDefinitionConditionKeys`<sup>Required</sup> <a name="CreateConnectorDefinitionConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateConnectorDefinitionConditionKeys"></a>

```typescript
public readonly CreateConnectorDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnectorDefinition action.

---

##### `CreateCoreDefinitionConditionKeys`<sup>Required</sup> <a name="CreateCoreDefinitionConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateCoreDefinitionConditionKeys"></a>

```typescript
public readonly CreateCoreDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCoreDefinition action.

---

##### `CreateDeploymentConditionKeys`<sup>Required</sup> <a name="CreateDeploymentConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateDeploymentConditionKeys"></a>

```typescript
public readonly CreateDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeployment action.

---

##### `CreateDeviceDefinitionConditionKeys`<sup>Required</sup> <a name="CreateDeviceDefinitionConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateDeviceDefinitionConditionKeys"></a>

```typescript
public readonly CreateDeviceDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeviceDefinition action.

---

##### `CreateFunctionDefinitionConditionKeys`<sup>Required</sup> <a name="CreateFunctionDefinitionConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateFunctionDefinitionConditionKeys"></a>

```typescript
public readonly CreateFunctionDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFunctionDefinition action.

---

##### `CreateGroupConditionKeys`<sup>Required</sup> <a name="CreateGroupConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateGroupConditionKeys"></a>

```typescript
public readonly CreateGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGroup action.

---

##### `CreateLoggerDefinitionConditionKeys`<sup>Required</sup> <a name="CreateLoggerDefinitionConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateLoggerDefinitionConditionKeys"></a>

```typescript
public readonly CreateLoggerDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLoggerDefinition action.

---

##### `CreateResourceDefinitionConditionKeys`<sup>Required</sup> <a name="CreateResourceDefinitionConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateResourceDefinitionConditionKeys"></a>

```typescript
public readonly CreateResourceDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResourceDefinition action.

---

##### `CreateSubscriptionDefinitionConditionKeys`<sup>Required</sup> <a name="CreateSubscriptionDefinitionConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.CreateSubscriptionDefinitionConditionKeys"></a>

```typescript
public readonly CreateSubscriptionDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSubscriptionDefinition action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `StartBulkDeploymentConditionKeys`<sup>Required</sup> <a name="StartBulkDeploymentConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.StartBulkDeploymentConditionKeys"></a>

```typescript
public readonly StartBulkDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartBulkDeployment action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.greengrass.GreengrassConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### GreengrassOperations <a name="GreengrassOperations" id="@cdk_utils/iam.greengrass.GreengrassOperations"></a>

API operation to required IAM actions mapping for greengrass.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.greengrass.GreengrassOperations.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

new greengrass.GreengrassOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.AssociateRoleToGroup">AssociateRoleToGroup</a></code> | <code>string[]</code> | IAM actions required for the AssociateRoleToGroup API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.AssociateServiceRoleToAccount">AssociateServiceRoleToAccount</a></code> | <code>string[]</code> | IAM actions required for the AssociateServiceRoleToAccount API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.BatchAssociateClientDeviceWithCoreDevice">BatchAssociateClientDeviceWithCoreDevice</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateClientDeviceWithCoreDevice API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.BatchDisassociateClientDeviceFromCoreDevice">BatchDisassociateClientDeviceFromCoreDevice</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateClientDeviceFromCoreDevice API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CancelDeployment">CancelDeployment</a></code> | <code>string[]</code> | IAM actions required for the CancelDeployment API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateComponentVersion">CreateComponentVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateComponentVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateConnectorDefinition">CreateConnectorDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectorDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateConnectorDefinitionVersion">CreateConnectorDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectorDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateCoreDefinition">CreateCoreDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateCoreDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateCoreDefinitionVersion">CreateCoreDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateCoreDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateDeployment">CreateDeployment</a></code> | <code>string[]</code> | IAM actions required for the CreateDeployment API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateDeviceDefinition">CreateDeviceDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateDeviceDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateDeviceDefinitionVersion">CreateDeviceDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateDeviceDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateFunctionDefinition">CreateFunctionDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateFunctionDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateFunctionDefinitionVersion">CreateFunctionDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateFunctionDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateGroup">CreateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGroup API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateGroupCertificateAuthority">CreateGroupCertificateAuthority</a></code> | <code>string[]</code> | IAM actions required for the CreateGroupCertificateAuthority API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateGroupVersion">CreateGroupVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateGroupVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateLoggerDefinition">CreateLoggerDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateLoggerDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateLoggerDefinitionVersion">CreateLoggerDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateLoggerDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateResourceDefinition">CreateResourceDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateResourceDefinitionVersion">CreateResourceDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateSoftwareUpdateJob">CreateSoftwareUpdateJob</a></code> | <code>string[]</code> | IAM actions required for the CreateSoftwareUpdateJob API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateSubscriptionDefinition">CreateSubscriptionDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscriptionDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateSubscriptionDefinitionVersion">CreateSubscriptionDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscriptionDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteComponent">DeleteComponent</a></code> | <code>string[]</code> | IAM actions required for the DeleteComponent API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteConnectorDefinition">DeleteConnectorDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectorDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteCoreDefinition">DeleteCoreDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteCoreDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteCoreDevice">DeleteCoreDevice</a></code> | <code>string[]</code> | IAM actions required for the DeleteCoreDevice API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteDeployment">DeleteDeployment</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeployment API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteDeviceDefinition">DeleteDeviceDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeviceDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteFunctionDefinition">DeleteFunctionDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteFunctionDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteGroup">DeleteGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroup API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteLoggerDefinition">DeleteLoggerDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoggerDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteResourceDefinition">DeleteResourceDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteSubscriptionDefinition">DeleteSubscriptionDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteSubscriptionDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DescribeComponent">DescribeComponent</a></code> | <code>string[]</code> | IAM actions required for the DescribeComponent API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DisassociateRoleFromGroup">DisassociateRoleFromGroup</a></code> | <code>string[]</code> | IAM actions required for the DisassociateRoleFromGroup API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.DisassociateServiceRoleFromAccount">DisassociateServiceRoleFromAccount</a></code> | <code>string[]</code> | IAM actions required for the DisassociateServiceRoleFromAccount API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListBulkDeploymentDetailedReports">ListBulkDeploymentDetailedReports</a></code> | <code>string[]</code> | IAM actions required for the ListBulkDeploymentDetailedReports API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListBulkDeployments">ListBulkDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListBulkDeployments API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListClientDevicesAssociatedWithCoreDevice">ListClientDevicesAssociatedWithCoreDevice</a></code> | <code>string[]</code> | IAM actions required for the ListClientDevicesAssociatedWithCoreDevice API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListComponents">ListComponents</a></code> | <code>string[]</code> | IAM actions required for the ListComponents API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListComponentVersions">ListComponentVersions</a></code> | <code>string[]</code> | IAM actions required for the ListComponentVersions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListConnectorDefinitions">ListConnectorDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListConnectorDefinitions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListConnectorDefinitionVersions">ListConnectorDefinitionVersions</a></code> | <code>string[]</code> | IAM actions required for the ListConnectorDefinitionVersions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListCoreDefinitions">ListCoreDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListCoreDefinitions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListCoreDefinitionVersions">ListCoreDefinitionVersions</a></code> | <code>string[]</code> | IAM actions required for the ListCoreDefinitionVersions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListCoreDevices">ListCoreDevices</a></code> | <code>string[]</code> | IAM actions required for the ListCoreDevices API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListDeployments">ListDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListDeployments API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListDeviceDefinitions">ListDeviceDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListDeviceDefinitions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListDeviceDefinitionVersions">ListDeviceDefinitionVersions</a></code> | <code>string[]</code> | IAM actions required for the ListDeviceDefinitionVersions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListEffectiveDeployments">ListEffectiveDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListEffectiveDeployments API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListFunctionDefinitions">ListFunctionDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListFunctionDefinitions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListFunctionDefinitionVersions">ListFunctionDefinitionVersions</a></code> | <code>string[]</code> | IAM actions required for the ListFunctionDefinitionVersions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListGroupCertificateAuthorities">ListGroupCertificateAuthorities</a></code> | <code>string[]</code> | IAM actions required for the ListGroupCertificateAuthorities API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListGroups">ListGroups</a></code> | <code>string[]</code> | IAM actions required for the ListGroups API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListGroupVersions">ListGroupVersions</a></code> | <code>string[]</code> | IAM actions required for the ListGroupVersions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListInstalledComponents">ListInstalledComponents</a></code> | <code>string[]</code> | IAM actions required for the ListInstalledComponents API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListLoggerDefinitions">ListLoggerDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListLoggerDefinitions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListLoggerDefinitionVersions">ListLoggerDefinitionVersions</a></code> | <code>string[]</code> | IAM actions required for the ListLoggerDefinitionVersions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListResourceDefinitions">ListResourceDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListResourceDefinitions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListResourceDefinitionVersions">ListResourceDefinitionVersions</a></code> | <code>string[]</code> | IAM actions required for the ListResourceDefinitionVersions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListSubscriptionDefinitions">ListSubscriptionDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptionDefinitions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListSubscriptionDefinitionVersions">ListSubscriptionDefinitionVersions</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptionDefinitionVersions API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetAssociatedRole">opGetAssociatedRole</a></code> | <code>string[]</code> | IAM actions required for the GetAssociatedRole API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetBulkDeploymentStatus">opGetBulkDeploymentStatus</a></code> | <code>string[]</code> | IAM actions required for the GetBulkDeploymentStatus API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetComponent">opGetComponent</a></code> | <code>string[]</code> | IAM actions required for the GetComponent API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetComponentVersionArtifact">opGetComponentVersionArtifact</a></code> | <code>string[]</code> | IAM actions required for the GetComponentVersionArtifact API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetConnectivityInfo">opGetConnectivityInfo</a></code> | <code>string[]</code> | IAM actions required for the GetConnectivityInfo API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetConnectorDefinition">opGetConnectorDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetConnectorDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetConnectorDefinitionVersion">opGetConnectorDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the GetConnectorDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetCoreDefinition">opGetCoreDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetCoreDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetCoreDefinitionVersion">opGetCoreDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the GetCoreDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetCoreDevice">opGetCoreDevice</a></code> | <code>string[]</code> | IAM actions required for the GetCoreDevice API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetDeployment">opGetDeployment</a></code> | <code>string[]</code> | IAM actions required for the GetDeployment API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetDeploymentStatus">opGetDeploymentStatus</a></code> | <code>string[]</code> | IAM actions required for the GetDeploymentStatus API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetDeviceDefinition">opGetDeviceDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetDeviceDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetDeviceDefinitionVersion">opGetDeviceDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the GetDeviceDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetFunctionDefinition">opGetFunctionDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetFunctionDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetFunctionDefinitionVersion">opGetFunctionDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the GetFunctionDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetGroup">opGetGroup</a></code> | <code>string[]</code> | IAM actions required for the GetGroup API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetGroupCertificateAuthority">opGetGroupCertificateAuthority</a></code> | <code>string[]</code> | IAM actions required for the GetGroupCertificateAuthority API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetGroupCertificateConfiguration">opGetGroupCertificateConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetGroupCertificateConfiguration API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetGroupVersion">opGetGroupVersion</a></code> | <code>string[]</code> | IAM actions required for the GetGroupVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetLoggerDefinition">opGetLoggerDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetLoggerDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetLoggerDefinitionVersion">opGetLoggerDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the GetLoggerDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetResourceDefinition">opGetResourceDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetResourceDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetResourceDefinitionVersion">opGetResourceDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the GetResourceDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetServiceRoleForAccount">opGetServiceRoleForAccount</a></code> | <code>string[]</code> | IAM actions required for the GetServiceRoleForAccount API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetSubscriptionDefinition">opGetSubscriptionDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetSubscriptionDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetSubscriptionDefinitionVersion">opGetSubscriptionDefinitionVersion</a></code> | <code>string[]</code> | IAM actions required for the GetSubscriptionDefinitionVersion API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetThingRuntimeConfiguration">opGetThingRuntimeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetThingRuntimeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ResetDeployments">ResetDeployments</a></code> | <code>string[]</code> | IAM actions required for the ResetDeployments API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.ResolveComponentCandidates">ResolveComponentCandidates</a></code> | <code>string[]</code> | IAM actions required for the ResolveComponentCandidates API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.StartBulkDeployment">StartBulkDeployment</a></code> | <code>string[]</code> | IAM actions required for the StartBulkDeployment API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.StopBulkDeployment">StopBulkDeployment</a></code> | <code>string[]</code> | IAM actions required for the StopBulkDeployment API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateConnectivityInfo">UpdateConnectivityInfo</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectivityInfo API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateConnectorDefinition">UpdateConnectorDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectorDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateCoreDefinition">UpdateCoreDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateCoreDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateDeviceDefinition">UpdateDeviceDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateDeviceDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateFunctionDefinition">UpdateFunctionDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateFunctionDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateGroup">UpdateGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroup API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateGroupCertificateConfiguration">UpdateGroupCertificateConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroupCertificateConfiguration API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateLoggerDefinition">UpdateLoggerDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateLoggerDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateResourceDefinition">UpdateResourceDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourceDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateSubscriptionDefinition">UpdateSubscriptionDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubscriptionDefinition API call. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateThingRuntimeConfiguration">UpdateThingRuntimeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateThingRuntimeConfiguration API call. |

---

##### `AssociateRoleToGroup`<sup>Required</sup> <a name="AssociateRoleToGroup" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.AssociateRoleToGroup"></a>

```typescript
public readonly AssociateRoleToGroup: string[];
```

- *Type:* string[]

IAM actions required for the AssociateRoleToGroup API call.

---

##### `AssociateServiceRoleToAccount`<sup>Required</sup> <a name="AssociateServiceRoleToAccount" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.AssociateServiceRoleToAccount"></a>

```typescript
public readonly AssociateServiceRoleToAccount: string[];
```

- *Type:* string[]

IAM actions required for the AssociateServiceRoleToAccount API call.

---

##### `BatchAssociateClientDeviceWithCoreDevice`<sup>Required</sup> <a name="BatchAssociateClientDeviceWithCoreDevice" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.BatchAssociateClientDeviceWithCoreDevice"></a>

```typescript
public readonly BatchAssociateClientDeviceWithCoreDevice: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateClientDeviceWithCoreDevice API call.

---

##### `BatchDisassociateClientDeviceFromCoreDevice`<sup>Required</sup> <a name="BatchDisassociateClientDeviceFromCoreDevice" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.BatchDisassociateClientDeviceFromCoreDevice"></a>

```typescript
public readonly BatchDisassociateClientDeviceFromCoreDevice: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateClientDeviceFromCoreDevice API call.

---

##### `CancelDeployment`<sup>Required</sup> <a name="CancelDeployment" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CancelDeployment"></a>

```typescript
public readonly CancelDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CancelDeployment API call.

---

##### `CreateComponentVersion`<sup>Required</sup> <a name="CreateComponentVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateComponentVersion"></a>

```typescript
public readonly CreateComponentVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateComponentVersion API call.

---

##### `CreateConnectorDefinition`<sup>Required</sup> <a name="CreateConnectorDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateConnectorDefinition"></a>

```typescript
public readonly CreateConnectorDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectorDefinition API call.

---

##### `CreateConnectorDefinitionVersion`<sup>Required</sup> <a name="CreateConnectorDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateConnectorDefinitionVersion"></a>

```typescript
public readonly CreateConnectorDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectorDefinitionVersion API call.

---

##### `CreateCoreDefinition`<sup>Required</sup> <a name="CreateCoreDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateCoreDefinition"></a>

```typescript
public readonly CreateCoreDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateCoreDefinition API call.

---

##### `CreateCoreDefinitionVersion`<sup>Required</sup> <a name="CreateCoreDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateCoreDefinitionVersion"></a>

```typescript
public readonly CreateCoreDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateCoreDefinitionVersion API call.

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeployment API call.

---

##### `CreateDeviceDefinition`<sup>Required</sup> <a name="CreateDeviceDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateDeviceDefinition"></a>

```typescript
public readonly CreateDeviceDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeviceDefinition API call.

---

##### `CreateDeviceDefinitionVersion`<sup>Required</sup> <a name="CreateDeviceDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateDeviceDefinitionVersion"></a>

```typescript
public readonly CreateDeviceDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeviceDefinitionVersion API call.

---

##### `CreateFunctionDefinition`<sup>Required</sup> <a name="CreateFunctionDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateFunctionDefinition"></a>

```typescript
public readonly CreateFunctionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateFunctionDefinition API call.

---

##### `CreateFunctionDefinitionVersion`<sup>Required</sup> <a name="CreateFunctionDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateFunctionDefinitionVersion"></a>

```typescript
public readonly CreateFunctionDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateFunctionDefinitionVersion API call.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroup API call.

---

##### `CreateGroupCertificateAuthority`<sup>Required</sup> <a name="CreateGroupCertificateAuthority" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateGroupCertificateAuthority"></a>

```typescript
public readonly CreateGroupCertificateAuthority: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroupCertificateAuthority API call.

---

##### `CreateGroupVersion`<sup>Required</sup> <a name="CreateGroupVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateGroupVersion"></a>

```typescript
public readonly CreateGroupVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroupVersion API call.

---

##### `CreateLoggerDefinition`<sup>Required</sup> <a name="CreateLoggerDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateLoggerDefinition"></a>

```typescript
public readonly CreateLoggerDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateLoggerDefinition API call.

---

##### `CreateLoggerDefinitionVersion`<sup>Required</sup> <a name="CreateLoggerDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateLoggerDefinitionVersion"></a>

```typescript
public readonly CreateLoggerDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateLoggerDefinitionVersion API call.

---

##### `CreateResourceDefinition`<sup>Required</sup> <a name="CreateResourceDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateResourceDefinition"></a>

```typescript
public readonly CreateResourceDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceDefinition API call.

---

##### `CreateResourceDefinitionVersion`<sup>Required</sup> <a name="CreateResourceDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateResourceDefinitionVersion"></a>

```typescript
public readonly CreateResourceDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceDefinitionVersion API call.

---

##### `CreateSoftwareUpdateJob`<sup>Required</sup> <a name="CreateSoftwareUpdateJob" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateSoftwareUpdateJob"></a>

```typescript
public readonly CreateSoftwareUpdateJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateSoftwareUpdateJob API call.

---

##### `CreateSubscriptionDefinition`<sup>Required</sup> <a name="CreateSubscriptionDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateSubscriptionDefinition"></a>

```typescript
public readonly CreateSubscriptionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscriptionDefinition API call.

---

##### `CreateSubscriptionDefinitionVersion`<sup>Required</sup> <a name="CreateSubscriptionDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.CreateSubscriptionDefinitionVersion"></a>

```typescript
public readonly CreateSubscriptionDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscriptionDefinitionVersion API call.

---

##### `DeleteComponent`<sup>Required</sup> <a name="DeleteComponent" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteComponent"></a>

```typescript
public readonly DeleteComponent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteComponent API call.

---

##### `DeleteConnectorDefinition`<sup>Required</sup> <a name="DeleteConnectorDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteConnectorDefinition"></a>

```typescript
public readonly DeleteConnectorDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectorDefinition API call.

---

##### `DeleteCoreDefinition`<sup>Required</sup> <a name="DeleteCoreDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteCoreDefinition"></a>

```typescript
public readonly DeleteCoreDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCoreDefinition API call.

---

##### `DeleteCoreDevice`<sup>Required</sup> <a name="DeleteCoreDevice" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteCoreDevice"></a>

```typescript
public readonly DeleteCoreDevice: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCoreDevice API call.

---

##### `DeleteDeployment`<sup>Required</sup> <a name="DeleteDeployment" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteDeployment"></a>

```typescript
public readonly DeleteDeployment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeployment API call.

---

##### `DeleteDeviceDefinition`<sup>Required</sup> <a name="DeleteDeviceDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteDeviceDefinition"></a>

```typescript
public readonly DeleteDeviceDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeviceDefinition API call.

---

##### `DeleteFunctionDefinition`<sup>Required</sup> <a name="DeleteFunctionDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteFunctionDefinition"></a>

```typescript
public readonly DeleteFunctionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFunctionDefinition API call.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroup API call.

---

##### `DeleteLoggerDefinition`<sup>Required</sup> <a name="DeleteLoggerDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteLoggerDefinition"></a>

```typescript
public readonly DeleteLoggerDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoggerDefinition API call.

---

##### `DeleteResourceDefinition`<sup>Required</sup> <a name="DeleteResourceDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteResourceDefinition"></a>

```typescript
public readonly DeleteResourceDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceDefinition API call.

---

##### `DeleteSubscriptionDefinition`<sup>Required</sup> <a name="DeleteSubscriptionDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DeleteSubscriptionDefinition"></a>

```typescript
public readonly DeleteSubscriptionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSubscriptionDefinition API call.

---

##### `DescribeComponent`<sup>Required</sup> <a name="DescribeComponent" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DescribeComponent"></a>

```typescript
public readonly DescribeComponent: string[];
```

- *Type:* string[]

IAM actions required for the DescribeComponent API call.

---

##### `DisassociateRoleFromGroup`<sup>Required</sup> <a name="DisassociateRoleFromGroup" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DisassociateRoleFromGroup"></a>

```typescript
public readonly DisassociateRoleFromGroup: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateRoleFromGroup API call.

---

##### `DisassociateServiceRoleFromAccount`<sup>Required</sup> <a name="DisassociateServiceRoleFromAccount" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.DisassociateServiceRoleFromAccount"></a>

```typescript
public readonly DisassociateServiceRoleFromAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateServiceRoleFromAccount API call.

---

##### `ListBulkDeploymentDetailedReports`<sup>Required</sup> <a name="ListBulkDeploymentDetailedReports" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListBulkDeploymentDetailedReports"></a>

```typescript
public readonly ListBulkDeploymentDetailedReports: string[];
```

- *Type:* string[]

IAM actions required for the ListBulkDeploymentDetailedReports API call.

---

##### `ListBulkDeployments`<sup>Required</sup> <a name="ListBulkDeployments" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListBulkDeployments"></a>

```typescript
public readonly ListBulkDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListBulkDeployments API call.

---

##### `ListClientDevicesAssociatedWithCoreDevice`<sup>Required</sup> <a name="ListClientDevicesAssociatedWithCoreDevice" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListClientDevicesAssociatedWithCoreDevice"></a>

```typescript
public readonly ListClientDevicesAssociatedWithCoreDevice: string[];
```

- *Type:* string[]

IAM actions required for the ListClientDevicesAssociatedWithCoreDevice API call.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListComponents"></a>

```typescript
public readonly ListComponents: string[];
```

- *Type:* string[]

IAM actions required for the ListComponents API call.

---

##### `ListComponentVersions`<sup>Required</sup> <a name="ListComponentVersions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListComponentVersions"></a>

```typescript
public readonly ListComponentVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListComponentVersions API call.

---

##### `ListConnectorDefinitions`<sup>Required</sup> <a name="ListConnectorDefinitions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListConnectorDefinitions"></a>

```typescript
public readonly ListConnectorDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectorDefinitions API call.

---

##### `ListConnectorDefinitionVersions`<sup>Required</sup> <a name="ListConnectorDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListConnectorDefinitionVersions"></a>

```typescript
public readonly ListConnectorDefinitionVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectorDefinitionVersions API call.

---

##### `ListCoreDefinitions`<sup>Required</sup> <a name="ListCoreDefinitions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListCoreDefinitions"></a>

```typescript
public readonly ListCoreDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListCoreDefinitions API call.

---

##### `ListCoreDefinitionVersions`<sup>Required</sup> <a name="ListCoreDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListCoreDefinitionVersions"></a>

```typescript
public readonly ListCoreDefinitionVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListCoreDefinitionVersions API call.

---

##### `ListCoreDevices`<sup>Required</sup> <a name="ListCoreDevices" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListCoreDevices"></a>

```typescript
public readonly ListCoreDevices: string[];
```

- *Type:* string[]

IAM actions required for the ListCoreDevices API call.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListDeployments API call.

---

##### `ListDeviceDefinitions`<sup>Required</sup> <a name="ListDeviceDefinitions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListDeviceDefinitions"></a>

```typescript
public readonly ListDeviceDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListDeviceDefinitions API call.

---

##### `ListDeviceDefinitionVersions`<sup>Required</sup> <a name="ListDeviceDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListDeviceDefinitionVersions"></a>

```typescript
public readonly ListDeviceDefinitionVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListDeviceDefinitionVersions API call.

---

##### `ListEffectiveDeployments`<sup>Required</sup> <a name="ListEffectiveDeployments" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListEffectiveDeployments"></a>

```typescript
public readonly ListEffectiveDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListEffectiveDeployments API call.

---

##### `ListFunctionDefinitions`<sup>Required</sup> <a name="ListFunctionDefinitions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListFunctionDefinitions"></a>

```typescript
public readonly ListFunctionDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListFunctionDefinitions API call.

---

##### `ListFunctionDefinitionVersions`<sup>Required</sup> <a name="ListFunctionDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListFunctionDefinitionVersions"></a>

```typescript
public readonly ListFunctionDefinitionVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListFunctionDefinitionVersions API call.

---

##### `ListGroupCertificateAuthorities`<sup>Required</sup> <a name="ListGroupCertificateAuthorities" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListGroupCertificateAuthorities"></a>

```typescript
public readonly ListGroupCertificateAuthorities: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupCertificateAuthorities API call.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListGroups"></a>

```typescript
public readonly ListGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListGroups API call.

---

##### `ListGroupVersions`<sup>Required</sup> <a name="ListGroupVersions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListGroupVersions"></a>

```typescript
public readonly ListGroupVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupVersions API call.

---

##### `ListInstalledComponents`<sup>Required</sup> <a name="ListInstalledComponents" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListInstalledComponents"></a>

```typescript
public readonly ListInstalledComponents: string[];
```

- *Type:* string[]

IAM actions required for the ListInstalledComponents API call.

---

##### `ListLoggerDefinitions`<sup>Required</sup> <a name="ListLoggerDefinitions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListLoggerDefinitions"></a>

```typescript
public readonly ListLoggerDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListLoggerDefinitions API call.

---

##### `ListLoggerDefinitionVersions`<sup>Required</sup> <a name="ListLoggerDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListLoggerDefinitionVersions"></a>

```typescript
public readonly ListLoggerDefinitionVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListLoggerDefinitionVersions API call.

---

##### `ListResourceDefinitions`<sup>Required</sup> <a name="ListResourceDefinitions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListResourceDefinitions"></a>

```typescript
public readonly ListResourceDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceDefinitions API call.

---

##### `ListResourceDefinitionVersions`<sup>Required</sup> <a name="ListResourceDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListResourceDefinitionVersions"></a>

```typescript
public readonly ListResourceDefinitionVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceDefinitionVersions API call.

---

##### `ListSubscriptionDefinitions`<sup>Required</sup> <a name="ListSubscriptionDefinitions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListSubscriptionDefinitions"></a>

```typescript
public readonly ListSubscriptionDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptionDefinitions API call.

---

##### `ListSubscriptionDefinitionVersions`<sup>Required</sup> <a name="ListSubscriptionDefinitionVersions" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListSubscriptionDefinitionVersions"></a>

```typescript
public readonly ListSubscriptionDefinitionVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptionDefinitionVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAssociatedRole`<sup>Required</sup> <a name="opGetAssociatedRole" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetAssociatedRole"></a>

```typescript
public readonly opGetAssociatedRole: string[];
```

- *Type:* string[]

IAM actions required for the GetAssociatedRole API call.

---

##### `opGetBulkDeploymentStatus`<sup>Required</sup> <a name="opGetBulkDeploymentStatus" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetBulkDeploymentStatus"></a>

```typescript
public readonly opGetBulkDeploymentStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetBulkDeploymentStatus API call.

---

##### `opGetComponent`<sup>Required</sup> <a name="opGetComponent" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetComponent"></a>

```typescript
public readonly opGetComponent: string[];
```

- *Type:* string[]

IAM actions required for the GetComponent API call.

---

##### `opGetComponentVersionArtifact`<sup>Required</sup> <a name="opGetComponentVersionArtifact" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetComponentVersionArtifact"></a>

```typescript
public readonly opGetComponentVersionArtifact: string[];
```

- *Type:* string[]

IAM actions required for the GetComponentVersionArtifact API call.

---

##### `opGetConnectivityInfo`<sup>Required</sup> <a name="opGetConnectivityInfo" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetConnectivityInfo"></a>

```typescript
public readonly opGetConnectivityInfo: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectivityInfo API call.

---

##### `opGetConnectorDefinition`<sup>Required</sup> <a name="opGetConnectorDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetConnectorDefinition"></a>

```typescript
public readonly opGetConnectorDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectorDefinition API call.

---

##### `opGetConnectorDefinitionVersion`<sup>Required</sup> <a name="opGetConnectorDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetConnectorDefinitionVersion"></a>

```typescript
public readonly opGetConnectorDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectorDefinitionVersion API call.

---

##### `opGetCoreDefinition`<sup>Required</sup> <a name="opGetCoreDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetCoreDefinition"></a>

```typescript
public readonly opGetCoreDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetCoreDefinition API call.

---

##### `opGetCoreDefinitionVersion`<sup>Required</sup> <a name="opGetCoreDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetCoreDefinitionVersion"></a>

```typescript
public readonly opGetCoreDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetCoreDefinitionVersion API call.

---

##### `opGetCoreDevice`<sup>Required</sup> <a name="opGetCoreDevice" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetCoreDevice"></a>

```typescript
public readonly opGetCoreDevice: string[];
```

- *Type:* string[]

IAM actions required for the GetCoreDevice API call.

---

##### `opGetDeployment`<sup>Required</sup> <a name="opGetDeployment" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetDeployment"></a>

```typescript
public readonly opGetDeployment: string[];
```

- *Type:* string[]

IAM actions required for the GetDeployment API call.

---

##### `opGetDeploymentStatus`<sup>Required</sup> <a name="opGetDeploymentStatus" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetDeploymentStatus"></a>

```typescript
public readonly opGetDeploymentStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetDeploymentStatus API call.

---

##### `opGetDeviceDefinition`<sup>Required</sup> <a name="opGetDeviceDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetDeviceDefinition"></a>

```typescript
public readonly opGetDeviceDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetDeviceDefinition API call.

---

##### `opGetDeviceDefinitionVersion`<sup>Required</sup> <a name="opGetDeviceDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetDeviceDefinitionVersion"></a>

```typescript
public readonly opGetDeviceDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetDeviceDefinitionVersion API call.

---

##### `opGetFunctionDefinition`<sup>Required</sup> <a name="opGetFunctionDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetFunctionDefinition"></a>

```typescript
public readonly opGetFunctionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetFunctionDefinition API call.

---

##### `opGetFunctionDefinitionVersion`<sup>Required</sup> <a name="opGetFunctionDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetFunctionDefinitionVersion"></a>

```typescript
public readonly opGetFunctionDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetFunctionDefinitionVersion API call.

---

##### `opGetGroup`<sup>Required</sup> <a name="opGetGroup" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetGroup"></a>

```typescript
public readonly opGetGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetGroup API call.

---

##### `opGetGroupCertificateAuthority`<sup>Required</sup> <a name="opGetGroupCertificateAuthority" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetGroupCertificateAuthority"></a>

```typescript
public readonly opGetGroupCertificateAuthority: string[];
```

- *Type:* string[]

IAM actions required for the GetGroupCertificateAuthority API call.

---

##### `opGetGroupCertificateConfiguration`<sup>Required</sup> <a name="opGetGroupCertificateConfiguration" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetGroupCertificateConfiguration"></a>

```typescript
public readonly opGetGroupCertificateConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetGroupCertificateConfiguration API call.

---

##### `opGetGroupVersion`<sup>Required</sup> <a name="opGetGroupVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetGroupVersion"></a>

```typescript
public readonly opGetGroupVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetGroupVersion API call.

---

##### `opGetLoggerDefinition`<sup>Required</sup> <a name="opGetLoggerDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetLoggerDefinition"></a>

```typescript
public readonly opGetLoggerDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetLoggerDefinition API call.

---

##### `opGetLoggerDefinitionVersion`<sup>Required</sup> <a name="opGetLoggerDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetLoggerDefinitionVersion"></a>

```typescript
public readonly opGetLoggerDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetLoggerDefinitionVersion API call.

---

##### `opGetResourceDefinition`<sup>Required</sup> <a name="opGetResourceDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetResourceDefinition"></a>

```typescript
public readonly opGetResourceDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceDefinition API call.

---

##### `opGetResourceDefinitionVersion`<sup>Required</sup> <a name="opGetResourceDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetResourceDefinitionVersion"></a>

```typescript
public readonly opGetResourceDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceDefinitionVersion API call.

---

##### `opGetServiceRoleForAccount`<sup>Required</sup> <a name="opGetServiceRoleForAccount" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetServiceRoleForAccount"></a>

```typescript
public readonly opGetServiceRoleForAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceRoleForAccount API call.

---

##### `opGetSubscriptionDefinition`<sup>Required</sup> <a name="opGetSubscriptionDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetSubscriptionDefinition"></a>

```typescript
public readonly opGetSubscriptionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscriptionDefinition API call.

---

##### `opGetSubscriptionDefinitionVersion`<sup>Required</sup> <a name="opGetSubscriptionDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetSubscriptionDefinitionVersion"></a>

```typescript
public readonly opGetSubscriptionDefinitionVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscriptionDefinitionVersion API call.

---

##### `opGetThingRuntimeConfiguration`<sup>Required</sup> <a name="opGetThingRuntimeConfiguration" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.opGetThingRuntimeConfiguration"></a>

```typescript
public readonly opGetThingRuntimeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetThingRuntimeConfiguration API call.

---

##### `ResetDeployments`<sup>Required</sup> <a name="ResetDeployments" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ResetDeployments"></a>

```typescript
public readonly ResetDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ResetDeployments API call.

---

##### `ResolveComponentCandidates`<sup>Required</sup> <a name="ResolveComponentCandidates" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.ResolveComponentCandidates"></a>

```typescript
public readonly ResolveComponentCandidates: string[];
```

- *Type:* string[]

IAM actions required for the ResolveComponentCandidates API call.

---

##### `StartBulkDeployment`<sup>Required</sup> <a name="StartBulkDeployment" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.StartBulkDeployment"></a>

```typescript
public readonly StartBulkDeployment: string[];
```

- *Type:* string[]

IAM actions required for the StartBulkDeployment API call.

---

##### `StopBulkDeployment`<sup>Required</sup> <a name="StopBulkDeployment" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.StopBulkDeployment"></a>

```typescript
public readonly StopBulkDeployment: string[];
```

- *Type:* string[]

IAM actions required for the StopBulkDeployment API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateConnectivityInfo`<sup>Required</sup> <a name="UpdateConnectivityInfo" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateConnectivityInfo"></a>

```typescript
public readonly UpdateConnectivityInfo: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectivityInfo API call.

---

##### `UpdateConnectorDefinition`<sup>Required</sup> <a name="UpdateConnectorDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateConnectorDefinition"></a>

```typescript
public readonly UpdateConnectorDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectorDefinition API call.

---

##### `UpdateCoreDefinition`<sup>Required</sup> <a name="UpdateCoreDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateCoreDefinition"></a>

```typescript
public readonly UpdateCoreDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCoreDefinition API call.

---

##### `UpdateDeviceDefinition`<sup>Required</sup> <a name="UpdateDeviceDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateDeviceDefinition"></a>

```typescript
public readonly UpdateDeviceDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDeviceDefinition API call.

---

##### `UpdateFunctionDefinition`<sup>Required</sup> <a name="UpdateFunctionDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateFunctionDefinition"></a>

```typescript
public readonly UpdateFunctionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFunctionDefinition API call.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroup API call.

---

##### `UpdateGroupCertificateConfiguration`<sup>Required</sup> <a name="UpdateGroupCertificateConfiguration" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateGroupCertificateConfiguration"></a>

```typescript
public readonly UpdateGroupCertificateConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroupCertificateConfiguration API call.

---

##### `UpdateLoggerDefinition`<sup>Required</sup> <a name="UpdateLoggerDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateLoggerDefinition"></a>

```typescript
public readonly UpdateLoggerDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLoggerDefinition API call.

---

##### `UpdateResourceDefinition`<sup>Required</sup> <a name="UpdateResourceDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateResourceDefinition"></a>

```typescript
public readonly UpdateResourceDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourceDefinition API call.

---

##### `UpdateSubscriptionDefinition`<sup>Required</sup> <a name="UpdateSubscriptionDefinition" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateSubscriptionDefinition"></a>

```typescript
public readonly UpdateSubscriptionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubscriptionDefinition API call.

---

##### `UpdateThingRuntimeConfiguration`<sup>Required</sup> <a name="UpdateThingRuntimeConfiguration" id="@cdk_utils/iam.greengrass.GreengrassOperations.property.UpdateThingRuntimeConfiguration"></a>

```typescript
public readonly UpdateThingRuntimeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThingRuntimeConfiguration API call.

---

### GreengrassResources <a name="GreengrassResources" id="@cdk_utils/iam.greengrass.GreengrassResources"></a>

ARN builders, validators, and parsers for greengrass resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.greengrass.GreengrassResources.Initializer"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

new greengrass.GreengrassResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.bulkDeployment">bulkDeployment</a></code> | Builds an ARN for the bulkDeployment resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.certificateAuthority">certificateAuthority</a></code> | Builds an ARN for the certificateAuthority resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.component">component</a></code> | Builds an ARN for the component resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.componentVersion">componentVersion</a></code> | Builds an ARN for the componentVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.connectivityInfo">connectivityInfo</a></code> | Builds an ARN for the connectivityInfo resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.connectorDefinition">connectorDefinition</a></code> | Builds an ARN for the connectorDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.connectorDefinitionVersion">connectorDefinitionVersion</a></code> | Builds an ARN for the connectorDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.coreDefinition">coreDefinition</a></code> | Builds an ARN for the coreDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.coreDefinitionVersion">coreDefinitionVersion</a></code> | Builds an ARN for the coreDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.coreDevice">coreDevice</a></code> | Builds an ARN for the coreDevice resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.deploymentVariant1">deploymentVariant1</a></code> | Builds an ARN for the deploymentVariant1 resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.deploymentVariant2">deploymentVariant2</a></code> | Builds an ARN for the deploymentVariant2 resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.deviceDefinition">deviceDefinition</a></code> | Builds an ARN for the deviceDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.deviceDefinitionVersion">deviceDefinitionVersion</a></code> | Builds an ARN for the deviceDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.functionDefinition">functionDefinition</a></code> | Builds an ARN for the functionDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.functionDefinitionVersion">functionDefinitionVersion</a></code> | Builds an ARN for the functionDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.group">group</a></code> | Builds an ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.groupVersion">groupVersion</a></code> | Builds an ARN for the groupVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidBulkDeploymentArn">isValidBulkDeploymentArn</a></code> | Validates whether a string is a valid ARN for the bulkDeployment resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidCertificateAuthorityArn">isValidCertificateAuthorityArn</a></code> | Validates whether a string is a valid ARN for the certificateAuthority resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidComponentArn">isValidComponentArn</a></code> | Validates whether a string is a valid ARN for the component resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidComponentVersionArn">isValidComponentVersionArn</a></code> | Validates whether a string is a valid ARN for the componentVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidConnectivityInfoArn">isValidConnectivityInfoArn</a></code> | Validates whether a string is a valid ARN for the connectivityInfo resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidConnectorDefinitionArn">isValidConnectorDefinitionArn</a></code> | Validates whether a string is a valid ARN for the connectorDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidConnectorDefinitionVersionArn">isValidConnectorDefinitionVersionArn</a></code> | Validates whether a string is a valid ARN for the connectorDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidCoreDefinitionArn">isValidCoreDefinitionArn</a></code> | Validates whether a string is a valid ARN for the coreDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidCoreDefinitionVersionArn">isValidCoreDefinitionVersionArn</a></code> | Validates whether a string is a valid ARN for the coreDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidCoreDeviceArn">isValidCoreDeviceArn</a></code> | Validates whether a string is a valid ARN for the coreDevice resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidDeploymentArn">isValidDeploymentArn</a></code> | Validates whether a string is a valid ARN for the deployment resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidDeviceDefinitionArn">isValidDeviceDefinitionArn</a></code> | Validates whether a string is a valid ARN for the deviceDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidDeviceDefinitionVersionArn">isValidDeviceDefinitionVersionArn</a></code> | Validates whether a string is a valid ARN for the deviceDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidFunctionDefinitionArn">isValidFunctionDefinitionArn</a></code> | Validates whether a string is a valid ARN for the functionDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidFunctionDefinitionVersionArn">isValidFunctionDefinitionVersionArn</a></code> | Validates whether a string is a valid ARN for the functionDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidGroupArn">isValidGroupArn</a></code> | Validates whether a string is a valid ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidGroupVersionArn">isValidGroupVersionArn</a></code> | Validates whether a string is a valid ARN for the groupVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidLoggerDefinitionArn">isValidLoggerDefinitionArn</a></code> | Validates whether a string is a valid ARN for the loggerDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidLoggerDefinitionVersionArn">isValidLoggerDefinitionVersionArn</a></code> | Validates whether a string is a valid ARN for the loggerDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidResourceDefinitionArn">isValidResourceDefinitionArn</a></code> | Validates whether a string is a valid ARN for the resourceDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidResourceDefinitionVersionArn">isValidResourceDefinitionVersionArn</a></code> | Validates whether a string is a valid ARN for the resourceDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidSubscriptionDefinitionArn">isValidSubscriptionDefinitionArn</a></code> | Validates whether a string is a valid ARN for the subscriptionDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidSubscriptionDefinitionVersionArn">isValidSubscriptionDefinitionVersionArn</a></code> | Validates whether a string is a valid ARN for the subscriptionDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidThingArn">isValidThingArn</a></code> | Validates whether a string is a valid ARN for the thing resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.isValidThingRuntimeConfigArn">isValidThingRuntimeConfigArn</a></code> | Validates whether a string is a valid ARN for the thingRuntimeConfig resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.loggerDefinition">loggerDefinition</a></code> | Builds an ARN for the loggerDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.loggerDefinitionVersion">loggerDefinitionVersion</a></code> | Builds an ARN for the loggerDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseBulkDeploymentArn">parseBulkDeploymentArn</a></code> | Parses a bulkDeployment ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseCertificateAuthorityArn">parseCertificateAuthorityArn</a></code> | Parses a certificateAuthority ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseComponentArn">parseComponentArn</a></code> | Parses a component ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseComponentVersionArn">parseComponentVersionArn</a></code> | Parses a componentVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseConnectivityInfoArn">parseConnectivityInfoArn</a></code> | Parses a connectivityInfo ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseConnectorDefinitionArn">parseConnectorDefinitionArn</a></code> | Parses a connectorDefinition ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseConnectorDefinitionVersionArn">parseConnectorDefinitionVersionArn</a></code> | Parses a connectorDefinitionVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseCoreDefinitionArn">parseCoreDefinitionArn</a></code> | Parses a coreDefinition ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseCoreDefinitionVersionArn">parseCoreDefinitionVersionArn</a></code> | Parses a coreDefinitionVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseCoreDeviceArn">parseCoreDeviceArn</a></code> | Parses a coreDevice ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseDeploymentArn">parseDeploymentArn</a></code> | Parses a deployment ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseDeviceDefinitionArn">parseDeviceDefinitionArn</a></code> | Parses a deviceDefinition ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseDeviceDefinitionVersionArn">parseDeviceDefinitionVersionArn</a></code> | Parses a deviceDefinitionVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseFunctionDefinitionArn">parseFunctionDefinitionArn</a></code> | Parses a functionDefinition ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseFunctionDefinitionVersionArn">parseFunctionDefinitionVersionArn</a></code> | Parses a functionDefinitionVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseGroupArn">parseGroupArn</a></code> | Parses a group ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseGroupVersionArn">parseGroupVersionArn</a></code> | Parses a groupVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseLoggerDefinitionArn">parseLoggerDefinitionArn</a></code> | Parses a loggerDefinition ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseLoggerDefinitionVersionArn">parseLoggerDefinitionVersionArn</a></code> | Parses a loggerDefinitionVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseResourceDefinitionArn">parseResourceDefinitionArn</a></code> | Parses a resourceDefinition ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseResourceDefinitionVersionArn">parseResourceDefinitionVersionArn</a></code> | Parses a resourceDefinitionVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseSubscriptionDefinitionArn">parseSubscriptionDefinitionArn</a></code> | Parses a subscriptionDefinition ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseSubscriptionDefinitionVersionArn">parseSubscriptionDefinitionVersionArn</a></code> | Parses a subscriptionDefinitionVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseThingArn">parseThingArn</a></code> | Parses a thing ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.parseThingRuntimeConfigArn">parseThingRuntimeConfigArn</a></code> | Parses a thingRuntimeConfig ARN into its components. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.resourceDefinition">resourceDefinition</a></code> | Builds an ARN for the resourceDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.resourceDefinitionVersion">resourceDefinitionVersion</a></code> | Builds an ARN for the resourceDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.subscriptionDefinition">subscriptionDefinition</a></code> | Builds an ARN for the subscriptionDefinition resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.subscriptionDefinitionVersion">subscriptionDefinitionVersion</a></code> | Builds an ARN for the subscriptionDefinitionVersion resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.thing">thing</a></code> | Builds an ARN for the thing resource. |
| <code><a href="#@cdk_utils/iam.greengrass.GreengrassResources.thingRuntimeConfig">thingRuntimeConfig</a></code> | Builds an ARN for the thingRuntimeConfig resource. |

---

##### `bulkDeployment` <a name="bulkDeployment" id="@cdk_utils/iam.greengrass.GreengrassResources.bulkDeployment"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.bulkDeployment(props: GreengrassBulkDeploymentArnProps)
```

Builds an ARN for the bulkDeployment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.bulkDeployment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassBulkDeploymentArnProps">GreengrassBulkDeploymentArnProps</a>

---

##### `certificateAuthority` <a name="certificateAuthority" id="@cdk_utils/iam.greengrass.GreengrassResources.certificateAuthority"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.certificateAuthority(props: GreengrassCertificateAuthorityArnProps)
```

Builds an ARN for the certificateAuthority resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.certificateAuthority.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassCertificateAuthorityArnProps">GreengrassCertificateAuthorityArnProps</a>

---

##### `component` <a name="component" id="@cdk_utils/iam.greengrass.GreengrassResources.component"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.component(props: GreengrassComponentArnProps)
```

Builds an ARN for the component resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.component.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassComponentArnProps">GreengrassComponentArnProps</a>

---

##### `componentVersion` <a name="componentVersion" id="@cdk_utils/iam.greengrass.GreengrassResources.componentVersion"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.componentVersion(props: GreengrassComponentVersionArnProps)
```

Builds an ARN for the componentVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.componentVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassComponentVersionArnProps">GreengrassComponentVersionArnProps</a>

---

##### `connectivityInfo` <a name="connectivityInfo" id="@cdk_utils/iam.greengrass.GreengrassResources.connectivityInfo"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.connectivityInfo(props: GreengrassConnectivityInfoArnProps)
```

Builds an ARN for the connectivityInfo resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.connectivityInfo.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassConnectivityInfoArnProps">GreengrassConnectivityInfoArnProps</a>

---

##### `connectorDefinition` <a name="connectorDefinition" id="@cdk_utils/iam.greengrass.GreengrassResources.connectorDefinition"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.connectorDefinition(props: GreengrassConnectorDefinitionArnProps)
```

Builds an ARN for the connectorDefinition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.connectorDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionArnProps">GreengrassConnectorDefinitionArnProps</a>

---

##### `connectorDefinitionVersion` <a name="connectorDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassResources.connectorDefinitionVersion"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.connectorDefinitionVersion(props: GreengrassConnectorDefinitionVersionArnProps)
```

Builds an ARN for the connectorDefinitionVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.connectorDefinitionVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassConnectorDefinitionVersionArnProps">GreengrassConnectorDefinitionVersionArnProps</a>

---

##### `coreDefinition` <a name="coreDefinition" id="@cdk_utils/iam.greengrass.GreengrassResources.coreDefinition"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.coreDefinition(props: GreengrassCoreDefinitionArnProps)
```

Builds an ARN for the coreDefinition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.coreDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionArnProps">GreengrassCoreDefinitionArnProps</a>

---

##### `coreDefinitionVersion` <a name="coreDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassResources.coreDefinitionVersion"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.coreDefinitionVersion(props: GreengrassCoreDefinitionVersionArnProps)
```

Builds an ARN for the coreDefinitionVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.coreDefinitionVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassCoreDefinitionVersionArnProps">GreengrassCoreDefinitionVersionArnProps</a>

---

##### `coreDevice` <a name="coreDevice" id="@cdk_utils/iam.greengrass.GreengrassResources.coreDevice"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.coreDevice(props: GreengrassCoreDeviceArnProps)
```

Builds an ARN for the coreDevice resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.coreDevice.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassCoreDeviceArnProps">GreengrassCoreDeviceArnProps</a>

---

##### `deploymentVariant1` <a name="deploymentVariant1" id="@cdk_utils/iam.greengrass.GreengrassResources.deploymentVariant1"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.deploymentVariant1(props: GreengrassDeploymentVariant1ArnProps)
```

Builds an ARN for the deploymentVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.deploymentVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentVariant1ArnProps">GreengrassDeploymentVariant1ArnProps</a>

---

##### `deploymentVariant2` <a name="deploymentVariant2" id="@cdk_utils/iam.greengrass.GreengrassResources.deploymentVariant2"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.deploymentVariant2(props: GreengrassDeploymentVariant2ArnProps)
```

Builds an ARN for the deploymentVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.deploymentVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassDeploymentVariant2ArnProps">GreengrassDeploymentVariant2ArnProps</a>

---

##### `deviceDefinition` <a name="deviceDefinition" id="@cdk_utils/iam.greengrass.GreengrassResources.deviceDefinition"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.deviceDefinition(props: GreengrassDeviceDefinitionArnProps)
```

Builds an ARN for the deviceDefinition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.deviceDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionArnProps">GreengrassDeviceDefinitionArnProps</a>

---

##### `deviceDefinitionVersion` <a name="deviceDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassResources.deviceDefinitionVersion"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.deviceDefinitionVersion(props: GreengrassDeviceDefinitionVersionArnProps)
```

Builds an ARN for the deviceDefinitionVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.deviceDefinitionVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassDeviceDefinitionVersionArnProps">GreengrassDeviceDefinitionVersionArnProps</a>

---

##### `functionDefinition` <a name="functionDefinition" id="@cdk_utils/iam.greengrass.GreengrassResources.functionDefinition"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.functionDefinition(props: GreengrassFunctionDefinitionArnProps)
```

Builds an ARN for the functionDefinition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.functionDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionArnProps">GreengrassFunctionDefinitionArnProps</a>

---

##### `functionDefinitionVersion` <a name="functionDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassResources.functionDefinitionVersion"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.functionDefinitionVersion(props: GreengrassFunctionDefinitionVersionArnProps)
```

Builds an ARN for the functionDefinitionVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.functionDefinitionVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassFunctionDefinitionVersionArnProps">GreengrassFunctionDefinitionVersionArnProps</a>

---

##### `group` <a name="group" id="@cdk_utils/iam.greengrass.GreengrassResources.group"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.group(props: GreengrassGroupArnProps)
```

Builds an ARN for the group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.group.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassGroupArnProps">GreengrassGroupArnProps</a>

---

##### `groupVersion` <a name="groupVersion" id="@cdk_utils/iam.greengrass.GreengrassResources.groupVersion"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.groupVersion(props: GreengrassGroupVersionArnProps)
```

Builds an ARN for the groupVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.groupVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassGroupVersionArnProps">GreengrassGroupVersionArnProps</a>

---

##### `isValidBulkDeploymentArn` <a name="isValidBulkDeploymentArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidBulkDeploymentArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidBulkDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the bulkDeployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidBulkDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCertificateAuthorityArn` <a name="isValidCertificateAuthorityArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidCertificateAuthorityArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidCertificateAuthorityArn(arn: string)
```

Validates whether a string is a valid ARN for the certificateAuthority resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidCertificateAuthorityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidComponentArn` <a name="isValidComponentArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidComponentArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidComponentArn(arn: string)
```

Validates whether a string is a valid ARN for the component resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidComponentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidComponentVersionArn` <a name="isValidComponentVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidComponentVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidComponentVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the componentVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidComponentVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectivityInfoArn` <a name="isValidConnectivityInfoArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidConnectivityInfoArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidConnectivityInfoArn(arn: string)
```

Validates whether a string is a valid ARN for the connectivityInfo resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidConnectivityInfoArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorDefinitionArn` <a name="isValidConnectorDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidConnectorDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidConnectorDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the connectorDefinition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidConnectorDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorDefinitionVersionArn` <a name="isValidConnectorDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidConnectorDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidConnectorDefinitionVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the connectorDefinitionVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidConnectorDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCoreDefinitionArn` <a name="isValidCoreDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidCoreDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidCoreDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the coreDefinition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidCoreDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCoreDefinitionVersionArn` <a name="isValidCoreDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidCoreDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidCoreDefinitionVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the coreDefinitionVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidCoreDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCoreDeviceArn` <a name="isValidCoreDeviceArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidCoreDeviceArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidCoreDeviceArn(arn: string)
```

Validates whether a string is a valid ARN for the coreDevice resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidCoreDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentArn` <a name="isValidDeploymentArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidDeploymentArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the deployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeviceDefinitionArn` <a name="isValidDeviceDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidDeviceDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidDeviceDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the deviceDefinition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidDeviceDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeviceDefinitionVersionArn` <a name="isValidDeviceDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidDeviceDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidDeviceDefinitionVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the deviceDefinitionVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidDeviceDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFunctionDefinitionArn` <a name="isValidFunctionDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidFunctionDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidFunctionDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the functionDefinition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidFunctionDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFunctionDefinitionVersionArn` <a name="isValidFunctionDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidFunctionDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidFunctionDefinitionVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the functionDefinitionVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidFunctionDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGroupArn` <a name="isValidGroupArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidGroupArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGroupVersionArn` <a name="isValidGroupVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidGroupVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidGroupVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the groupVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidGroupVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLoggerDefinitionArn` <a name="isValidLoggerDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidLoggerDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidLoggerDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the loggerDefinition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidLoggerDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLoggerDefinitionVersionArn` <a name="isValidLoggerDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidLoggerDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidLoggerDefinitionVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the loggerDefinitionVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidLoggerDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourceDefinitionArn` <a name="isValidResourceDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidResourceDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidResourceDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the resourceDefinition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidResourceDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourceDefinitionVersionArn` <a name="isValidResourceDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidResourceDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidResourceDefinitionVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the resourceDefinitionVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidResourceDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSubscriptionDefinitionArn` <a name="isValidSubscriptionDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidSubscriptionDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidSubscriptionDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the subscriptionDefinition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidSubscriptionDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSubscriptionDefinitionVersionArn` <a name="isValidSubscriptionDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidSubscriptionDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidSubscriptionDefinitionVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the subscriptionDefinitionVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidSubscriptionDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidThingArn` <a name="isValidThingArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidThingArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidThingArn(arn: string)
```

Validates whether a string is a valid ARN for the thing resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidThingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidThingRuntimeConfigArn` <a name="isValidThingRuntimeConfigArn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidThingRuntimeConfigArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.isValidThingRuntimeConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the thingRuntimeConfig resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.isValidThingRuntimeConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `loggerDefinition` <a name="loggerDefinition" id="@cdk_utils/iam.greengrass.GreengrassResources.loggerDefinition"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.loggerDefinition(props: GreengrassLoggerDefinitionArnProps)
```

Builds an ARN for the loggerDefinition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.loggerDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionArnProps">GreengrassLoggerDefinitionArnProps</a>

---

##### `loggerDefinitionVersion` <a name="loggerDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassResources.loggerDefinitionVersion"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.loggerDefinitionVersion(props: GreengrassLoggerDefinitionVersionArnProps)
```

Builds an ARN for the loggerDefinitionVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.loggerDefinitionVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassLoggerDefinitionVersionArnProps">GreengrassLoggerDefinitionVersionArnProps</a>

---

##### `parseBulkDeploymentArn` <a name="parseBulkDeploymentArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseBulkDeploymentArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseBulkDeploymentArn(arn: string)
```

Parses a bulkDeployment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseBulkDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCertificateAuthorityArn` <a name="parseCertificateAuthorityArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseCertificateAuthorityArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseCertificateAuthorityArn(arn: string)
```

Parses a certificateAuthority ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseCertificateAuthorityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseComponentArn` <a name="parseComponentArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseComponentArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseComponentArn(arn: string)
```

Parses a component ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseComponentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseComponentVersionArn` <a name="parseComponentVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseComponentVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseComponentVersionArn(arn: string)
```

Parses a componentVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseComponentVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectivityInfoArn` <a name="parseConnectivityInfoArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseConnectivityInfoArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseConnectivityInfoArn(arn: string)
```

Parses a connectivityInfo ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseConnectivityInfoArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorDefinitionArn` <a name="parseConnectorDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseConnectorDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseConnectorDefinitionArn(arn: string)
```

Parses a connectorDefinition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseConnectorDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorDefinitionVersionArn` <a name="parseConnectorDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseConnectorDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseConnectorDefinitionVersionArn(arn: string)
```

Parses a connectorDefinitionVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseConnectorDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCoreDefinitionArn` <a name="parseCoreDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseCoreDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseCoreDefinitionArn(arn: string)
```

Parses a coreDefinition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseCoreDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCoreDefinitionVersionArn` <a name="parseCoreDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseCoreDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseCoreDefinitionVersionArn(arn: string)
```

Parses a coreDefinitionVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseCoreDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCoreDeviceArn` <a name="parseCoreDeviceArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseCoreDeviceArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseCoreDeviceArn(arn: string)
```

Parses a coreDevice ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseCoreDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentArn` <a name="parseDeploymentArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseDeploymentArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseDeploymentArn(arn: string)
```

Parses a deployment ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceDefinitionArn` <a name="parseDeviceDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseDeviceDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseDeviceDefinitionArn(arn: string)
```

Parses a deviceDefinition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseDeviceDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceDefinitionVersionArn` <a name="parseDeviceDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseDeviceDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseDeviceDefinitionVersionArn(arn: string)
```

Parses a deviceDefinitionVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseDeviceDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFunctionDefinitionArn` <a name="parseFunctionDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseFunctionDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseFunctionDefinitionArn(arn: string)
```

Parses a functionDefinition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseFunctionDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFunctionDefinitionVersionArn` <a name="parseFunctionDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseFunctionDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseFunctionDefinitionVersionArn(arn: string)
```

Parses a functionDefinitionVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseFunctionDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroupArn` <a name="parseGroupArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseGroupArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseGroupArn(arn: string)
```

Parses a group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroupVersionArn` <a name="parseGroupVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseGroupVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseGroupVersionArn(arn: string)
```

Parses a groupVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseGroupVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLoggerDefinitionArn` <a name="parseLoggerDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseLoggerDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseLoggerDefinitionArn(arn: string)
```

Parses a loggerDefinition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseLoggerDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLoggerDefinitionVersionArn` <a name="parseLoggerDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseLoggerDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseLoggerDefinitionVersionArn(arn: string)
```

Parses a loggerDefinitionVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseLoggerDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourceDefinitionArn` <a name="parseResourceDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseResourceDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseResourceDefinitionArn(arn: string)
```

Parses a resourceDefinition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseResourceDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourceDefinitionVersionArn` <a name="parseResourceDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseResourceDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseResourceDefinitionVersionArn(arn: string)
```

Parses a resourceDefinitionVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseResourceDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubscriptionDefinitionArn` <a name="parseSubscriptionDefinitionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseSubscriptionDefinitionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseSubscriptionDefinitionArn(arn: string)
```

Parses a subscriptionDefinition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseSubscriptionDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubscriptionDefinitionVersionArn` <a name="parseSubscriptionDefinitionVersionArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseSubscriptionDefinitionVersionArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseSubscriptionDefinitionVersionArn(arn: string)
```

Parses a subscriptionDefinitionVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseSubscriptionDefinitionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseThingArn` <a name="parseThingArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseThingArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseThingArn(arn: string)
```

Parses a thing ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseThingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseThingRuntimeConfigArn` <a name="parseThingRuntimeConfigArn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseThingRuntimeConfigArn"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.parseThingRuntimeConfigArn(arn: string)
```

Parses a thingRuntimeConfig ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.greengrass.GreengrassResources.parseThingRuntimeConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `resourceDefinition` <a name="resourceDefinition" id="@cdk_utils/iam.greengrass.GreengrassResources.resourceDefinition"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.resourceDefinition(props: GreengrassResourceDefinitionArnProps)
```

Builds an ARN for the resourceDefinition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.resourceDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionArnProps">GreengrassResourceDefinitionArnProps</a>

---

##### `resourceDefinitionVersion` <a name="resourceDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassResources.resourceDefinitionVersion"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.resourceDefinitionVersion(props: GreengrassResourceDefinitionVersionArnProps)
```

Builds an ARN for the resourceDefinitionVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.resourceDefinitionVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassResourceDefinitionVersionArnProps">GreengrassResourceDefinitionVersionArnProps</a>

---

##### `subscriptionDefinition` <a name="subscriptionDefinition" id="@cdk_utils/iam.greengrass.GreengrassResources.subscriptionDefinition"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.subscriptionDefinition(props: GreengrassSubscriptionDefinitionArnProps)
```

Builds an ARN for the subscriptionDefinition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.subscriptionDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionArnProps">GreengrassSubscriptionDefinitionArnProps</a>

---

##### `subscriptionDefinitionVersion` <a name="subscriptionDefinitionVersion" id="@cdk_utils/iam.greengrass.GreengrassResources.subscriptionDefinitionVersion"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.subscriptionDefinitionVersion(props: GreengrassSubscriptionDefinitionVersionArnProps)
```

Builds an ARN for the subscriptionDefinitionVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.subscriptionDefinitionVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassSubscriptionDefinitionVersionArnProps">GreengrassSubscriptionDefinitionVersionArnProps</a>

---

##### `thing` <a name="thing" id="@cdk_utils/iam.greengrass.GreengrassResources.thing"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.thing(props: GreengrassThingArnProps)
```

Builds an ARN for the thing resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.thing.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassThingArnProps">GreengrassThingArnProps</a>

---

##### `thingRuntimeConfig` <a name="thingRuntimeConfig" id="@cdk_utils/iam.greengrass.GreengrassResources.thingRuntimeConfig"></a>

```typescript
import { greengrass } from '@cdk_utils/iam'

greengrass.GreengrassResources.thingRuntimeConfig(props: GreengrassThingRuntimeConfigArnProps)
```

Builds an ARN for the thingRuntimeConfig resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.greengrass.GreengrassResources.thingRuntimeConfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.greengrass.GreengrassThingRuntimeConfigArnProps">GreengrassThingRuntimeConfigArnProps</a>

---




