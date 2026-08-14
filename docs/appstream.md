# `appstream` Submodule <a name="`appstream` Submodule" id="@cdk_utils/iam.appstream"></a>


## Structs <a name="Structs" id="Structs"></a>

### AppstreamAppBlockArnComponents <a name="AppstreamAppBlockArnComponents" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnComponents"></a>

Parsed components of a app-block ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnComponents.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamAppBlockArnComponents: appstream.AppstreamAppBlockArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockArnComponents.property.appBlockName">appBlockName</a></code> | <code>string</code> | The AppBlockName component. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appBlockName`<sup>Required</sup> <a name="appBlockName" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnComponents.property.appBlockName"></a>

```typescript
public readonly appBlockName: string;
```

- *Type:* string

The AppBlockName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppstreamAppBlockArnProps <a name="AppstreamAppBlockArnProps" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnProps"></a>

Properties for building a app-block ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnProps.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamAppBlockArnProps: appstream.AppstreamAppBlockArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockArnProps.property.appBlockName">appBlockName</a></code> | <code>string</code> | The AppBlockName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appBlockName`<sup>Required</sup> <a name="appBlockName" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnProps.property.appBlockName"></a>

```typescript
public readonly appBlockName: string;
```

- *Type:* string

The AppBlockName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamAppBlockArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppstreamAppBlockBuilderArnComponents <a name="AppstreamAppBlockBuilderArnComponents" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnComponents"></a>

Parsed components of a app-block-builder ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnComponents.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamAppBlockBuilderArnComponents: appstream.AppstreamAppBlockBuilderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnComponents.property.appBlockBuilderName">appBlockBuilderName</a></code> | <code>string</code> | The AppBlockBuilderName component. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appBlockBuilderName`<sup>Required</sup> <a name="appBlockBuilderName" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnComponents.property.appBlockBuilderName"></a>

```typescript
public readonly appBlockBuilderName: string;
```

- *Type:* string

The AppBlockBuilderName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppstreamAppBlockBuilderArnProps <a name="AppstreamAppBlockBuilderArnProps" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnProps"></a>

Properties for building a app-block-builder ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnProps.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamAppBlockBuilderArnProps: appstream.AppstreamAppBlockBuilderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnProps.property.appBlockBuilderName">appBlockBuilderName</a></code> | <code>string</code> | The AppBlockBuilderName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appBlockBuilderName`<sup>Required</sup> <a name="appBlockBuilderName" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnProps.property.appBlockBuilderName"></a>

```typescript
public readonly appBlockBuilderName: string;
```

- *Type:* string

The AppBlockBuilderName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppstreamApplicationArnComponents <a name="AppstreamApplicationArnComponents" id="@cdk_utils/iam.appstream.AppstreamApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamApplicationArnComponents.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamApplicationArnComponents: appstream.AppstreamApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamApplicationArnComponents.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.appstream.AppstreamApplicationArnComponents.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppstreamApplicationArnProps <a name="AppstreamApplicationArnProps" id="@cdk_utils/iam.appstream.AppstreamApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamApplicationArnProps.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamApplicationArnProps: appstream.AppstreamApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamApplicationArnProps.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.appstream.AppstreamApplicationArnProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppstreamFleetArnComponents <a name="AppstreamFleetArnComponents" id="@cdk_utils/iam.appstream.AppstreamFleetArnComponents"></a>

Parsed components of a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamFleetArnComponents.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamFleetArnComponents: appstream.AppstreamFleetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamFleetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamFleetArnComponents.property.fleetName">fleetName</a></code> | <code>string</code> | The FleetName component. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamFleetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamFleetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamFleetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fleetName`<sup>Required</sup> <a name="fleetName" id="@cdk_utils/iam.appstream.AppstreamFleetArnComponents.property.fleetName"></a>

```typescript
public readonly fleetName: string;
```

- *Type:* string

The FleetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamFleetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamFleetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppstreamFleetArnProps <a name="AppstreamFleetArnProps" id="@cdk_utils/iam.appstream.AppstreamFleetArnProps"></a>

Properties for building a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamFleetArnProps.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamFleetArnProps: appstream.AppstreamFleetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamFleetArnProps.property.fleetName">fleetName</a></code> | <code>string</code> | The FleetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamFleetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamFleetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamFleetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fleetName`<sup>Required</sup> <a name="fleetName" id="@cdk_utils/iam.appstream.AppstreamFleetArnProps.property.fleetName"></a>

```typescript
public readonly fleetName: string;
```

- *Type:* string

The FleetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamFleetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamFleetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamFleetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppstreamImageArnComponents <a name="AppstreamImageArnComponents" id="@cdk_utils/iam.appstream.AppstreamImageArnComponents"></a>

Parsed components of a image ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamImageArnComponents.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamImageArnComponents: appstream.AppstreamImageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageArnComponents.property.imageName">imageName</a></code> | <code>string</code> | The ImageName component. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamImageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdk_utils/iam.appstream.AppstreamImageArnComponents.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The ImageName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamImageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamImageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppstreamImageArnProps <a name="AppstreamImageArnProps" id="@cdk_utils/iam.appstream.AppstreamImageArnProps"></a>

Properties for building a image ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamImageArnProps.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamImageArnProps: appstream.AppstreamImageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageArnProps.property.imageName">imageName</a></code> | <code>string</code> | The ImageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdk_utils/iam.appstream.AppstreamImageArnProps.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The ImageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamImageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamImageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamImageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppstreamImageBuilderArnComponents <a name="AppstreamImageBuilderArnComponents" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnComponents"></a>

Parsed components of a image-builder ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnComponents.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamImageBuilderArnComponents: appstream.AppstreamImageBuilderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageBuilderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageBuilderArnComponents.property.imageBuilderName">imageBuilderName</a></code> | <code>string</code> | The ImageBuilderName component. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageBuilderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageBuilderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `imageBuilderName`<sup>Required</sup> <a name="imageBuilderName" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnComponents.property.imageBuilderName"></a>

```typescript
public readonly imageBuilderName: string;
```

- *Type:* string

The ImageBuilderName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppstreamImageBuilderArnProps <a name="AppstreamImageBuilderArnProps" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnProps"></a>

Properties for building a image-builder ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnProps.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamImageBuilderArnProps: appstream.AppstreamImageBuilderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageBuilderArnProps.property.imageBuilderName">imageBuilderName</a></code> | <code>string</code> | The ImageBuilderName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageBuilderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageBuilderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamImageBuilderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `imageBuilderName`<sup>Required</sup> <a name="imageBuilderName" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnProps.property.imageBuilderName"></a>

```typescript
public readonly imageBuilderName: string;
```

- *Type:* string

The ImageBuilderName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamImageBuilderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppstreamStackArnComponents <a name="AppstreamStackArnComponents" id="@cdk_utils/iam.appstream.AppstreamStackArnComponents"></a>

Parsed components of a stack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamStackArnComponents.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamStackArnComponents: appstream.AppstreamStackArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamStackArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamStackArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamStackArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamStackArnComponents.property.stackName">stackName</a></code> | <code>string</code> | The StackName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamStackArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamStackArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamStackArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdk_utils/iam.appstream.AppstreamStackArnComponents.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The StackName component.

---

### AppstreamStackArnProps <a name="AppstreamStackArnProps" id="@cdk_utils/iam.appstream.AppstreamStackArnProps"></a>

Properties for building a stack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstream.AppstreamStackArnProps.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

const appstreamStackArnProps: appstream.AppstreamStackArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamStackArnProps.property.stackName">stackName</a></code> | <code>string</code> | The StackName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamStackArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamStackArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamStackArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdk_utils/iam.appstream.AppstreamStackArnProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The StackName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appstream.AppstreamStackArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appstream.AppstreamStackArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appstream.AppstreamStackArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamActions <a name="AppstreamActions" id="@cdk_utils/iam.appstream.AppstreamActions"></a>

IAM action constants for the appstream service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appstream.AppstreamActions.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

new appstream.AppstreamActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.actionGetExportImageTask">actionGetExportImageTask</a></code> | <code>string</code> | [Read] appstream:GetExportImageTask. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.AssociateAppBlockBuilderAppBlock">AssociateAppBlockBuilderAppBlock</a></code> | <code>string</code> | [Write] appstream:AssociateAppBlockBuilderAppBlock. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.AssociateApplicationFleet">AssociateApplicationFleet</a></code> | <code>string</code> | [Write] appstream:AssociateApplicationFleet. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.AssociateApplicationToEntitlement">AssociateApplicationToEntitlement</a></code> | <code>string</code> | [Write] appstream:AssociateApplicationToEntitlement. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.AssociateFleet">AssociateFleet</a></code> | <code>string</code> | [Write] appstream:AssociateFleet. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.AssociateSoftwareToImageBuilder">AssociateSoftwareToImageBuilder</a></code> | <code>string</code> | [Write] appstream:AssociateSoftwareToImageBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.BatchAssociateUserStack">BatchAssociateUserStack</a></code> | <code>string</code> | [Write] appstream:BatchAssociateUserStack. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.BatchDisassociateUserStack">BatchDisassociateUserStack</a></code> | <code>string</code> | [Write] appstream:BatchDisassociateUserStack. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CopyImage">CopyImage</a></code> | <code>string</code> | [Write] appstream:CopyImage. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateAppBlock">CreateAppBlock</a></code> | <code>string</code> | [Write] appstream:CreateAppBlock. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateAppBlockBuilder">CreateAppBlockBuilder</a></code> | <code>string</code> | [Write] appstream:CreateAppBlockBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateAppBlockBuilderStreamingURL">CreateAppBlockBuilderStreamingURL</a></code> | <code>string</code> | [Write] appstream:CreateAppBlockBuilderStreamingURL. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] appstream:CreateApplication. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateDirectoryConfig">CreateDirectoryConfig</a></code> | <code>string</code> | [Write] appstream:CreateDirectoryConfig. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateEntitlement">CreateEntitlement</a></code> | <code>string</code> | [Write] appstream:CreateEntitlement. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateExportImageTask">CreateExportImageTask</a></code> | <code>string</code> | [Write] appstream:CreateExportImageTask. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateFleet">CreateFleet</a></code> | <code>string</code> | [Write] appstream:CreateFleet. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateImageBuilder">CreateImageBuilder</a></code> | <code>string</code> | [Write] appstream:CreateImageBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateImageBuilderStreamingURL">CreateImageBuilderStreamingURL</a></code> | <code>string</code> | [Write] appstream:CreateImageBuilderStreamingURL. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateImportedImage">CreateImportedImage</a></code> | <code>string</code> | [Write] appstream:CreateImportedImage. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateStack">CreateStack</a></code> | <code>string</code> | [Write] appstream:CreateStack. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateStreamingURL">CreateStreamingURL</a></code> | <code>string</code> | [Write] appstream:CreateStreamingURL. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateThemeForStack">CreateThemeForStack</a></code> | <code>string</code> | [Write] appstream:CreateThemeForStack. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateUpdatedImage">CreateUpdatedImage</a></code> | <code>string</code> | [Write] appstream:CreateUpdatedImage. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateUsageReportSubscription">CreateUsageReportSubscription</a></code> | <code>string</code> | [Write] appstream:CreateUsageReportSubscription. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] appstream:CreateUser. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteAppBlock">DeleteAppBlock</a></code> | <code>string</code> | [Write] appstream:DeleteAppBlock. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteAppBlockBuilder">DeleteAppBlockBuilder</a></code> | <code>string</code> | [Write] appstream:DeleteAppBlockBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] appstream:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteDirectoryConfig">DeleteDirectoryConfig</a></code> | <code>string</code> | [Write] appstream:DeleteDirectoryConfig. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteEntitlement">DeleteEntitlement</a></code> | <code>string</code> | [Write] appstream:DeleteEntitlement. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteFleet">DeleteFleet</a></code> | <code>string</code> | [Write] appstream:DeleteFleet. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteImage">DeleteImage</a></code> | <code>string</code> | [Write] appstream:DeleteImage. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteImageBuilder">DeleteImageBuilder</a></code> | <code>string</code> | [Write] appstream:DeleteImageBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteImagePermissions">DeleteImagePermissions</a></code> | <code>string</code> | [Write] appstream:DeleteImagePermissions. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteStack">DeleteStack</a></code> | <code>string</code> | [Write] appstream:DeleteStack. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteThemeForStack">DeleteThemeForStack</a></code> | <code>string</code> | [Write] appstream:DeleteThemeForStack. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteUsageReportSubscription">DeleteUsageReportSubscription</a></code> | <code>string</code> | [Write] appstream:DeleteUsageReportSubscription. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] appstream:DeleteUser. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeAppBlockBuilderAppBlockAssociations">DescribeAppBlockBuilderAppBlockAssociations</a></code> | <code>string</code> | [List] appstream:DescribeAppBlockBuilderAppBlockAssociations. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeAppBlockBuilders">DescribeAppBlockBuilders</a></code> | <code>string</code> | [List] appstream:DescribeAppBlockBuilders. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeAppBlocks">DescribeAppBlocks</a></code> | <code>string</code> | [List] appstream:DescribeAppBlocks. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeApplicationFleetAssociations">DescribeApplicationFleetAssociations</a></code> | <code>string</code> | [List] appstream:DescribeApplicationFleetAssociations. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeApplications">DescribeApplications</a></code> | <code>string</code> | [List] appstream:DescribeApplications. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeAppLicenseUsage">DescribeAppLicenseUsage</a></code> | <code>string</code> | [List] appstream:DescribeAppLicenseUsage. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeDirectoryConfigs">DescribeDirectoryConfigs</a></code> | <code>string</code> | [List] appstream:DescribeDirectoryConfigs. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeEntitlements">DescribeEntitlements</a></code> | <code>string</code> | [List] appstream:DescribeEntitlements. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeFleets">DescribeFleets</a></code> | <code>string</code> | [List] appstream:DescribeFleets. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeImageBuilders">DescribeImageBuilders</a></code> | <code>string</code> | [List] appstream:DescribeImageBuilders. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeImagePermissions">DescribeImagePermissions</a></code> | <code>string</code> | [Read] appstream:DescribeImagePermissions. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeImages">DescribeImages</a></code> | <code>string</code> | [List] appstream:DescribeImages. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeSessions">DescribeSessions</a></code> | <code>string</code> | [List] appstream:DescribeSessions. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeSoftwareAssociations">DescribeSoftwareAssociations</a></code> | <code>string</code> | [List] appstream:DescribeSoftwareAssociations. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeStacks">DescribeStacks</a></code> | <code>string</code> | [List] appstream:DescribeStacks. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeThemeForStack">DescribeThemeForStack</a></code> | <code>string</code> | [Read] appstream:DescribeThemeForStack. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeUsageReportSubscriptions">DescribeUsageReportSubscriptions</a></code> | <code>string</code> | [List] appstream:DescribeUsageReportSubscriptions. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeUsers">DescribeUsers</a></code> | <code>string</code> | [List] appstream:DescribeUsers. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DescribeUserStackAssociations">DescribeUserStackAssociations</a></code> | <code>string</code> | [List] appstream:DescribeUserStackAssociations. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DisableUser">DisableUser</a></code> | <code>string</code> | [Write] appstream:DisableUser. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DisassociateAppBlockBuilderAppBlock">DisassociateAppBlockBuilderAppBlock</a></code> | <code>string</code> | [Write] appstream:DisassociateAppBlockBuilderAppBlock. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DisassociateApplicationFleet">DisassociateApplicationFleet</a></code> | <code>string</code> | [Write] appstream:DisassociateApplicationFleet. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DisassociateApplicationFromEntitlement">DisassociateApplicationFromEntitlement</a></code> | <code>string</code> | [Write] appstream:DisassociateApplicationFromEntitlement. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DisassociateFleet">DisassociateFleet</a></code> | <code>string</code> | [Write] appstream:DisassociateFleet. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.DisassociateSoftwareFromImageBuilder">DisassociateSoftwareFromImageBuilder</a></code> | <code>string</code> | [Write] appstream:DisassociateSoftwareFromImageBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.EnableUser">EnableUser</a></code> | <code>string</code> | [Write] appstream:EnableUser. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.ExpireSession">ExpireSession</a></code> | <code>string</code> | [Write] appstream:ExpireSession. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.ListAssociatedFleets">ListAssociatedFleets</a></code> | <code>string</code> | [Read] appstream:ListAssociatedFleets. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.ListAssociatedStacks">ListAssociatedStacks</a></code> | <code>string</code> | [Read] appstream:ListAssociatedStacks. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.ListEntitledApplications">ListEntitledApplications</a></code> | <code>string</code> | [List] appstream:ListEntitledApplications. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.ListExportImageTasks">ListExportImageTasks</a></code> | <code>string</code> | [List] appstream:ListExportImageTasks. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] appstream:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.StartAppBlockBuilder">StartAppBlockBuilder</a></code> | <code>string</code> | [Write] appstream:StartAppBlockBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.StartFleet">StartFleet</a></code> | <code>string</code> | [Write] appstream:StartFleet. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.StartImageBuilder">StartImageBuilder</a></code> | <code>string</code> | [Write] appstream:StartImageBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.StartSoftwareDeploymentToImageBuilder">StartSoftwareDeploymentToImageBuilder</a></code> | <code>string</code> | [Write] appstream:StartSoftwareDeploymentToImageBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.StopAppBlockBuilder">StopAppBlockBuilder</a></code> | <code>string</code> | [Write] appstream:StopAppBlockBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.StopFleet">StopFleet</a></code> | <code>string</code> | [Write] appstream:StopFleet. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.StopImageBuilder">StopImageBuilder</a></code> | <code>string</code> | [Write] appstream:StopImageBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.Stream">Stream</a></code> | <code>string</code> | [Write] appstream:Stream. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] appstream:TagResource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] appstream:UntagResource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.UpdateAppBlockBuilder">UpdateAppBlockBuilder</a></code> | <code>string</code> | [Write] appstream:UpdateAppBlockBuilder. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] appstream:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.UpdateDirectoryConfig">UpdateDirectoryConfig</a></code> | <code>string</code> | [Write] appstream:UpdateDirectoryConfig. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.UpdateEntitlement">UpdateEntitlement</a></code> | <code>string</code> | [Write] appstream:UpdateEntitlement. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.UpdateFleet">UpdateFleet</a></code> | <code>string</code> | [Write] appstream:UpdateFleet. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.UpdateImagePermissions">UpdateImagePermissions</a></code> | <code>string</code> | [Write] appstream:UpdateImagePermissions. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.UpdateStack">UpdateStack</a></code> | <code>string</code> | [Write] appstream:UpdateStack. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamActions.property.UpdateThemeForStack">UpdateThemeForStack</a></code> | <code>string</code> | [Write] appstream:UpdateThemeForStack. |

---

##### `actionGetExportImageTask`<sup>Required</sup> <a name="actionGetExportImageTask" id="@cdk_utils/iam.appstream.AppstreamActions.property.actionGetExportImageTask"></a>

```typescript
public readonly actionGetExportImageTask: string;
```

- *Type:* string

[Read] appstream:GetExportImageTask.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.appstream.AppstreamActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.appstream.AppstreamActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.appstream.AppstreamActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.appstream.AppstreamActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.appstream.AppstreamActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAppBlockBuilderAppBlock`<sup>Required</sup> <a name="AssociateAppBlockBuilderAppBlock" id="@cdk_utils/iam.appstream.AppstreamActions.property.AssociateAppBlockBuilderAppBlock"></a>

```typescript
public readonly AssociateAppBlockBuilderAppBlock: string;
```

- *Type:* string

[Write] appstream:AssociateAppBlockBuilderAppBlock.

---

##### `AssociateApplicationFleet`<sup>Required</sup> <a name="AssociateApplicationFleet" id="@cdk_utils/iam.appstream.AppstreamActions.property.AssociateApplicationFleet"></a>

```typescript
public readonly AssociateApplicationFleet: string;
```

- *Type:* string

[Write] appstream:AssociateApplicationFleet.

---

##### `AssociateApplicationToEntitlement`<sup>Required</sup> <a name="AssociateApplicationToEntitlement" id="@cdk_utils/iam.appstream.AppstreamActions.property.AssociateApplicationToEntitlement"></a>

```typescript
public readonly AssociateApplicationToEntitlement: string;
```

- *Type:* string

[Write] appstream:AssociateApplicationToEntitlement.

---

##### `AssociateFleet`<sup>Required</sup> <a name="AssociateFleet" id="@cdk_utils/iam.appstream.AppstreamActions.property.AssociateFleet"></a>

```typescript
public readonly AssociateFleet: string;
```

- *Type:* string

[Write] appstream:AssociateFleet.

---

##### `AssociateSoftwareToImageBuilder`<sup>Required</sup> <a name="AssociateSoftwareToImageBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.AssociateSoftwareToImageBuilder"></a>

```typescript
public readonly AssociateSoftwareToImageBuilder: string;
```

- *Type:* string

[Write] appstream:AssociateSoftwareToImageBuilder.

---

##### `BatchAssociateUserStack`<sup>Required</sup> <a name="BatchAssociateUserStack" id="@cdk_utils/iam.appstream.AppstreamActions.property.BatchAssociateUserStack"></a>

```typescript
public readonly BatchAssociateUserStack: string;
```

- *Type:* string

[Write] appstream:BatchAssociateUserStack.

---

##### `BatchDisassociateUserStack`<sup>Required</sup> <a name="BatchDisassociateUserStack" id="@cdk_utils/iam.appstream.AppstreamActions.property.BatchDisassociateUserStack"></a>

```typescript
public readonly BatchDisassociateUserStack: string;
```

- *Type:* string

[Write] appstream:BatchDisassociateUserStack.

---

##### `CopyImage`<sup>Required</sup> <a name="CopyImage" id="@cdk_utils/iam.appstream.AppstreamActions.property.CopyImage"></a>

```typescript
public readonly CopyImage: string;
```

- *Type:* string

[Write] appstream:CopyImage.

---

##### `CreateAppBlock`<sup>Required</sup> <a name="CreateAppBlock" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateAppBlock"></a>

```typescript
public readonly CreateAppBlock: string;
```

- *Type:* string

[Write] appstream:CreateAppBlock.

---

##### `CreateAppBlockBuilder`<sup>Required</sup> <a name="CreateAppBlockBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateAppBlockBuilder"></a>

```typescript
public readonly CreateAppBlockBuilder: string;
```

- *Type:* string

[Write] appstream:CreateAppBlockBuilder.

---

##### `CreateAppBlockBuilderStreamingURL`<sup>Required</sup> <a name="CreateAppBlockBuilderStreamingURL" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateAppBlockBuilderStreamingURL"></a>

```typescript
public readonly CreateAppBlockBuilderStreamingURL: string;
```

- *Type:* string

[Write] appstream:CreateAppBlockBuilderStreamingURL.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] appstream:CreateApplication.

---

##### `CreateDirectoryConfig`<sup>Required</sup> <a name="CreateDirectoryConfig" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateDirectoryConfig"></a>

```typescript
public readonly CreateDirectoryConfig: string;
```

- *Type:* string

[Write] appstream:CreateDirectoryConfig.

---

##### `CreateEntitlement`<sup>Required</sup> <a name="CreateEntitlement" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateEntitlement"></a>

```typescript
public readonly CreateEntitlement: string;
```

- *Type:* string

[Write] appstream:CreateEntitlement.

---

##### `CreateExportImageTask`<sup>Required</sup> <a name="CreateExportImageTask" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateExportImageTask"></a>

```typescript
public readonly CreateExportImageTask: string;
```

- *Type:* string

[Write] appstream:CreateExportImageTask.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string;
```

- *Type:* string

[Write] appstream:CreateFleet.

---

##### `CreateImageBuilder`<sup>Required</sup> <a name="CreateImageBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateImageBuilder"></a>

```typescript
public readonly CreateImageBuilder: string;
```

- *Type:* string

[Write] appstream:CreateImageBuilder.

---

##### `CreateImageBuilderStreamingURL`<sup>Required</sup> <a name="CreateImageBuilderStreamingURL" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateImageBuilderStreamingURL"></a>

```typescript
public readonly CreateImageBuilderStreamingURL: string;
```

- *Type:* string

[Write] appstream:CreateImageBuilderStreamingURL.

---

##### `CreateImportedImage`<sup>Required</sup> <a name="CreateImportedImage" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateImportedImage"></a>

```typescript
public readonly CreateImportedImage: string;
```

- *Type:* string

[Write] appstream:CreateImportedImage.

---

##### `CreateStack`<sup>Required</sup> <a name="CreateStack" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateStack"></a>

```typescript
public readonly CreateStack: string;
```

- *Type:* string

[Write] appstream:CreateStack.

---

##### `CreateStreamingURL`<sup>Required</sup> <a name="CreateStreamingURL" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateStreamingURL"></a>

```typescript
public readonly CreateStreamingURL: string;
```

- *Type:* string

[Write] appstream:CreateStreamingURL.

---

##### `CreateThemeForStack`<sup>Required</sup> <a name="CreateThemeForStack" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateThemeForStack"></a>

```typescript
public readonly CreateThemeForStack: string;
```

- *Type:* string

[Write] appstream:CreateThemeForStack.

---

##### `CreateUpdatedImage`<sup>Required</sup> <a name="CreateUpdatedImage" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateUpdatedImage"></a>

```typescript
public readonly CreateUpdatedImage: string;
```

- *Type:* string

[Write] appstream:CreateUpdatedImage.

---

##### `CreateUsageReportSubscription`<sup>Required</sup> <a name="CreateUsageReportSubscription" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateUsageReportSubscription"></a>

```typescript
public readonly CreateUsageReportSubscription: string;
```

- *Type:* string

[Write] appstream:CreateUsageReportSubscription.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.appstream.AppstreamActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] appstream:CreateUser.

---

##### `DeleteAppBlock`<sup>Required</sup> <a name="DeleteAppBlock" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteAppBlock"></a>

```typescript
public readonly DeleteAppBlock: string;
```

- *Type:* string

[Write] appstream:DeleteAppBlock.

---

##### `DeleteAppBlockBuilder`<sup>Required</sup> <a name="DeleteAppBlockBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteAppBlockBuilder"></a>

```typescript
public readonly DeleteAppBlockBuilder: string;
```

- *Type:* string

[Write] appstream:DeleteAppBlockBuilder.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] appstream:DeleteApplication.

---

##### `DeleteDirectoryConfig`<sup>Required</sup> <a name="DeleteDirectoryConfig" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteDirectoryConfig"></a>

```typescript
public readonly DeleteDirectoryConfig: string;
```

- *Type:* string

[Write] appstream:DeleteDirectoryConfig.

---

##### `DeleteEntitlement`<sup>Required</sup> <a name="DeleteEntitlement" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteEntitlement"></a>

```typescript
public readonly DeleteEntitlement: string;
```

- *Type:* string

[Write] appstream:DeleteEntitlement.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string;
```

- *Type:* string

[Write] appstream:DeleteFleet.

---

##### `DeleteImage`<sup>Required</sup> <a name="DeleteImage" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteImage"></a>

```typescript
public readonly DeleteImage: string;
```

- *Type:* string

[Write] appstream:DeleteImage.

---

##### `DeleteImageBuilder`<sup>Required</sup> <a name="DeleteImageBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteImageBuilder"></a>

```typescript
public readonly DeleteImageBuilder: string;
```

- *Type:* string

[Write] appstream:DeleteImageBuilder.

---

##### `DeleteImagePermissions`<sup>Required</sup> <a name="DeleteImagePermissions" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteImagePermissions"></a>

```typescript
public readonly DeleteImagePermissions: string;
```

- *Type:* string

[Write] appstream:DeleteImagePermissions.

---

##### `DeleteStack`<sup>Required</sup> <a name="DeleteStack" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteStack"></a>

```typescript
public readonly DeleteStack: string;
```

- *Type:* string

[Write] appstream:DeleteStack.

---

##### `DeleteThemeForStack`<sup>Required</sup> <a name="DeleteThemeForStack" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteThemeForStack"></a>

```typescript
public readonly DeleteThemeForStack: string;
```

- *Type:* string

[Write] appstream:DeleteThemeForStack.

---

##### `DeleteUsageReportSubscription`<sup>Required</sup> <a name="DeleteUsageReportSubscription" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteUsageReportSubscription"></a>

```typescript
public readonly DeleteUsageReportSubscription: string;
```

- *Type:* string

[Write] appstream:DeleteUsageReportSubscription.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.appstream.AppstreamActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] appstream:DeleteUser.

---

##### `DescribeAppBlockBuilderAppBlockAssociations`<sup>Required</sup> <a name="DescribeAppBlockBuilderAppBlockAssociations" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeAppBlockBuilderAppBlockAssociations"></a>

```typescript
public readonly DescribeAppBlockBuilderAppBlockAssociations: string;
```

- *Type:* string

[List] appstream:DescribeAppBlockBuilderAppBlockAssociations.

---

##### `DescribeAppBlockBuilders`<sup>Required</sup> <a name="DescribeAppBlockBuilders" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeAppBlockBuilders"></a>

```typescript
public readonly DescribeAppBlockBuilders: string;
```

- *Type:* string

[List] appstream:DescribeAppBlockBuilders.

---

##### `DescribeAppBlocks`<sup>Required</sup> <a name="DescribeAppBlocks" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeAppBlocks"></a>

```typescript
public readonly DescribeAppBlocks: string;
```

- *Type:* string

[List] appstream:DescribeAppBlocks.

---

##### `DescribeApplicationFleetAssociations`<sup>Required</sup> <a name="DescribeApplicationFleetAssociations" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeApplicationFleetAssociations"></a>

```typescript
public readonly DescribeApplicationFleetAssociations: string;
```

- *Type:* string

[List] appstream:DescribeApplicationFleetAssociations.

---

##### `DescribeApplications`<sup>Required</sup> <a name="DescribeApplications" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeApplications"></a>

```typescript
public readonly DescribeApplications: string;
```

- *Type:* string

[List] appstream:DescribeApplications.

---

##### `DescribeAppLicenseUsage`<sup>Required</sup> <a name="DescribeAppLicenseUsage" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeAppLicenseUsage"></a>

```typescript
public readonly DescribeAppLicenseUsage: string;
```

- *Type:* string

[List] appstream:DescribeAppLicenseUsage.

---

##### `DescribeDirectoryConfigs`<sup>Required</sup> <a name="DescribeDirectoryConfigs" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeDirectoryConfigs"></a>

```typescript
public readonly DescribeDirectoryConfigs: string;
```

- *Type:* string

[List] appstream:DescribeDirectoryConfigs.

---

##### `DescribeEntitlements`<sup>Required</sup> <a name="DescribeEntitlements" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeEntitlements"></a>

```typescript
public readonly DescribeEntitlements: string;
```

- *Type:* string

[List] appstream:DescribeEntitlements.

---

##### `DescribeFleets`<sup>Required</sup> <a name="DescribeFleets" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeFleets"></a>

```typescript
public readonly DescribeFleets: string;
```

- *Type:* string

[List] appstream:DescribeFleets.

---

##### `DescribeImageBuilders`<sup>Required</sup> <a name="DescribeImageBuilders" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeImageBuilders"></a>

```typescript
public readonly DescribeImageBuilders: string;
```

- *Type:* string

[List] appstream:DescribeImageBuilders.

---

##### `DescribeImagePermissions`<sup>Required</sup> <a name="DescribeImagePermissions" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeImagePermissions"></a>

```typescript
public readonly DescribeImagePermissions: string;
```

- *Type:* string

[Read] appstream:DescribeImagePermissions.

---

##### `DescribeImages`<sup>Required</sup> <a name="DescribeImages" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeImages"></a>

```typescript
public readonly DescribeImages: string;
```

- *Type:* string

[List] appstream:DescribeImages.

---

##### `DescribeSessions`<sup>Required</sup> <a name="DescribeSessions" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeSessions"></a>

```typescript
public readonly DescribeSessions: string;
```

- *Type:* string

[List] appstream:DescribeSessions.

---

##### `DescribeSoftwareAssociations`<sup>Required</sup> <a name="DescribeSoftwareAssociations" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeSoftwareAssociations"></a>

```typescript
public readonly DescribeSoftwareAssociations: string;
```

- *Type:* string

[List] appstream:DescribeSoftwareAssociations.

---

##### `DescribeStacks`<sup>Required</sup> <a name="DescribeStacks" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeStacks"></a>

```typescript
public readonly DescribeStacks: string;
```

- *Type:* string

[List] appstream:DescribeStacks.

---

##### `DescribeThemeForStack`<sup>Required</sup> <a name="DescribeThemeForStack" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeThemeForStack"></a>

```typescript
public readonly DescribeThemeForStack: string;
```

- *Type:* string

[Read] appstream:DescribeThemeForStack.

---

##### `DescribeUsageReportSubscriptions`<sup>Required</sup> <a name="DescribeUsageReportSubscriptions" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeUsageReportSubscriptions"></a>

```typescript
public readonly DescribeUsageReportSubscriptions: string;
```

- *Type:* string

[List] appstream:DescribeUsageReportSubscriptions.

---

##### `DescribeUsers`<sup>Required</sup> <a name="DescribeUsers" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeUsers"></a>

```typescript
public readonly DescribeUsers: string;
```

- *Type:* string

[List] appstream:DescribeUsers.

---

##### `DescribeUserStackAssociations`<sup>Required</sup> <a name="DescribeUserStackAssociations" id="@cdk_utils/iam.appstream.AppstreamActions.property.DescribeUserStackAssociations"></a>

```typescript
public readonly DescribeUserStackAssociations: string;
```

- *Type:* string

[List] appstream:DescribeUserStackAssociations.

---

##### `DisableUser`<sup>Required</sup> <a name="DisableUser" id="@cdk_utils/iam.appstream.AppstreamActions.property.DisableUser"></a>

```typescript
public readonly DisableUser: string;
```

- *Type:* string

[Write] appstream:DisableUser.

---

##### `DisassociateAppBlockBuilderAppBlock`<sup>Required</sup> <a name="DisassociateAppBlockBuilderAppBlock" id="@cdk_utils/iam.appstream.AppstreamActions.property.DisassociateAppBlockBuilderAppBlock"></a>

```typescript
public readonly DisassociateAppBlockBuilderAppBlock: string;
```

- *Type:* string

[Write] appstream:DisassociateAppBlockBuilderAppBlock.

---

##### `DisassociateApplicationFleet`<sup>Required</sup> <a name="DisassociateApplicationFleet" id="@cdk_utils/iam.appstream.AppstreamActions.property.DisassociateApplicationFleet"></a>

```typescript
public readonly DisassociateApplicationFleet: string;
```

- *Type:* string

[Write] appstream:DisassociateApplicationFleet.

---

##### `DisassociateApplicationFromEntitlement`<sup>Required</sup> <a name="DisassociateApplicationFromEntitlement" id="@cdk_utils/iam.appstream.AppstreamActions.property.DisassociateApplicationFromEntitlement"></a>

```typescript
public readonly DisassociateApplicationFromEntitlement: string;
```

- *Type:* string

[Write] appstream:DisassociateApplicationFromEntitlement.

---

##### `DisassociateFleet`<sup>Required</sup> <a name="DisassociateFleet" id="@cdk_utils/iam.appstream.AppstreamActions.property.DisassociateFleet"></a>

```typescript
public readonly DisassociateFleet: string;
```

- *Type:* string

[Write] appstream:DisassociateFleet.

---

##### `DisassociateSoftwareFromImageBuilder`<sup>Required</sup> <a name="DisassociateSoftwareFromImageBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.DisassociateSoftwareFromImageBuilder"></a>

```typescript
public readonly DisassociateSoftwareFromImageBuilder: string;
```

- *Type:* string

[Write] appstream:DisassociateSoftwareFromImageBuilder.

---

##### `EnableUser`<sup>Required</sup> <a name="EnableUser" id="@cdk_utils/iam.appstream.AppstreamActions.property.EnableUser"></a>

```typescript
public readonly EnableUser: string;
```

- *Type:* string

[Write] appstream:EnableUser.

---

##### `ExpireSession`<sup>Required</sup> <a name="ExpireSession" id="@cdk_utils/iam.appstream.AppstreamActions.property.ExpireSession"></a>

```typescript
public readonly ExpireSession: string;
```

- *Type:* string

[Write] appstream:ExpireSession.

---

##### `ListAssociatedFleets`<sup>Required</sup> <a name="ListAssociatedFleets" id="@cdk_utils/iam.appstream.AppstreamActions.property.ListAssociatedFleets"></a>

```typescript
public readonly ListAssociatedFleets: string;
```

- *Type:* string

[Read] appstream:ListAssociatedFleets.

---

##### `ListAssociatedStacks`<sup>Required</sup> <a name="ListAssociatedStacks" id="@cdk_utils/iam.appstream.AppstreamActions.property.ListAssociatedStacks"></a>

```typescript
public readonly ListAssociatedStacks: string;
```

- *Type:* string

[Read] appstream:ListAssociatedStacks.

---

##### `ListEntitledApplications`<sup>Required</sup> <a name="ListEntitledApplications" id="@cdk_utils/iam.appstream.AppstreamActions.property.ListEntitledApplications"></a>

```typescript
public readonly ListEntitledApplications: string;
```

- *Type:* string

[List] appstream:ListEntitledApplications.

---

##### `ListExportImageTasks`<sup>Required</sup> <a name="ListExportImageTasks" id="@cdk_utils/iam.appstream.AppstreamActions.property.ListExportImageTasks"></a>

```typescript
public readonly ListExportImageTasks: string;
```

- *Type:* string

[List] appstream:ListExportImageTasks.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appstream.AppstreamActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] appstream:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.appstream.AppstreamActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAppBlockBuilder`<sup>Required</sup> <a name="StartAppBlockBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.StartAppBlockBuilder"></a>

```typescript
public readonly StartAppBlockBuilder: string;
```

- *Type:* string

[Write] appstream:StartAppBlockBuilder.

---

##### `StartFleet`<sup>Required</sup> <a name="StartFleet" id="@cdk_utils/iam.appstream.AppstreamActions.property.StartFleet"></a>

```typescript
public readonly StartFleet: string;
```

- *Type:* string

[Write] appstream:StartFleet.

---

##### `StartImageBuilder`<sup>Required</sup> <a name="StartImageBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.StartImageBuilder"></a>

```typescript
public readonly StartImageBuilder: string;
```

- *Type:* string

[Write] appstream:StartImageBuilder.

---

##### `StartSoftwareDeploymentToImageBuilder`<sup>Required</sup> <a name="StartSoftwareDeploymentToImageBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.StartSoftwareDeploymentToImageBuilder"></a>

```typescript
public readonly StartSoftwareDeploymentToImageBuilder: string;
```

- *Type:* string

[Write] appstream:StartSoftwareDeploymentToImageBuilder.

---

##### `StopAppBlockBuilder`<sup>Required</sup> <a name="StopAppBlockBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.StopAppBlockBuilder"></a>

```typescript
public readonly StopAppBlockBuilder: string;
```

- *Type:* string

[Write] appstream:StopAppBlockBuilder.

---

##### `StopFleet`<sup>Required</sup> <a name="StopFleet" id="@cdk_utils/iam.appstream.AppstreamActions.property.StopFleet"></a>

```typescript
public readonly StopFleet: string;
```

- *Type:* string

[Write] appstream:StopFleet.

---

##### `StopImageBuilder`<sup>Required</sup> <a name="StopImageBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.StopImageBuilder"></a>

```typescript
public readonly StopImageBuilder: string;
```

- *Type:* string

[Write] appstream:StopImageBuilder.

---

##### `Stream`<sup>Required</sup> <a name="Stream" id="@cdk_utils/iam.appstream.AppstreamActions.property.Stream"></a>

```typescript
public readonly Stream: string;
```

- *Type:* string

[Write] appstream:Stream.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appstream.AppstreamActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] appstream:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appstream.AppstreamActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] appstream:UntagResource.

---

##### `UpdateAppBlockBuilder`<sup>Required</sup> <a name="UpdateAppBlockBuilder" id="@cdk_utils/iam.appstream.AppstreamActions.property.UpdateAppBlockBuilder"></a>

```typescript
public readonly UpdateAppBlockBuilder: string;
```

- *Type:* string

[Write] appstream:UpdateAppBlockBuilder.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.appstream.AppstreamActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] appstream:UpdateApplication.

---

##### `UpdateDirectoryConfig`<sup>Required</sup> <a name="UpdateDirectoryConfig" id="@cdk_utils/iam.appstream.AppstreamActions.property.UpdateDirectoryConfig"></a>

```typescript
public readonly UpdateDirectoryConfig: string;
```

- *Type:* string

[Write] appstream:UpdateDirectoryConfig.

---

##### `UpdateEntitlement`<sup>Required</sup> <a name="UpdateEntitlement" id="@cdk_utils/iam.appstream.AppstreamActions.property.UpdateEntitlement"></a>

```typescript
public readonly UpdateEntitlement: string;
```

- *Type:* string

[Write] appstream:UpdateEntitlement.

---

##### `UpdateFleet`<sup>Required</sup> <a name="UpdateFleet" id="@cdk_utils/iam.appstream.AppstreamActions.property.UpdateFleet"></a>

```typescript
public readonly UpdateFleet: string;
```

- *Type:* string

[Write] appstream:UpdateFleet.

---

##### `UpdateImagePermissions`<sup>Required</sup> <a name="UpdateImagePermissions" id="@cdk_utils/iam.appstream.AppstreamActions.property.UpdateImagePermissions"></a>

```typescript
public readonly UpdateImagePermissions: string;
```

- *Type:* string

[Write] appstream:UpdateImagePermissions.

---

##### `UpdateStack`<sup>Required</sup> <a name="UpdateStack" id="@cdk_utils/iam.appstream.AppstreamActions.property.UpdateStack"></a>

```typescript
public readonly UpdateStack: string;
```

- *Type:* string

[Write] appstream:UpdateStack.

---

##### `UpdateThemeForStack`<sup>Required</sup> <a name="UpdateThemeForStack" id="@cdk_utils/iam.appstream.AppstreamActions.property.UpdateThemeForStack"></a>

```typescript
public readonly UpdateThemeForStack: string;
```

- *Type:* string

[Write] appstream:UpdateThemeForStack.

---

### AppstreamConditions <a name="AppstreamConditions" id="@cdk_utils/iam.appstream.AppstreamConditions"></a>

Condition key constants and builders for appstream.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appstream.AppstreamConditions.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

new appstream.AppstreamConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.userId">userId</a></code> | Generates a condition block for `appstream:userId`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.appstream.AppstreamConditions.requestTag"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appstream.AppstreamConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.appstream.AppstreamConditions.resourceTag"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appstream.AppstreamConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.tagKeys"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.appstream.AppstreamConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `userId` <a name="userId" id="@cdk_utils/iam.appstream.AppstreamConditions.userId"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamConditions.userId(value: string)
```

Generates a condition block for `appstream:userId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appstream.AppstreamConditions.userId.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.AssociateAppBlockBuilderAppBlockConditionKeys">AssociateAppBlockBuilderAppBlockConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateAppBlockBuilderAppBlock action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.AssociateApplicationFleetConditionKeys">AssociateApplicationFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateApplicationFleet action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.AssociateFleetConditionKeys">AssociateFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateFleet action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.AssociateSoftwareToImageBuilderConditionKeys">AssociateSoftwareToImageBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateSoftwareToImageBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.BatchAssociateUserStackConditionKeys">BatchAssociateUserStackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchAssociateUserStack action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.BatchDisassociateUserStackConditionKeys">BatchDisassociateUserStackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDisassociateUserStack action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CopyImageConditionKeys">CopyImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyImage action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateAppBlockBuilderConditionKeys">CreateAppBlockBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAppBlockBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateAppBlockBuilderStreamingURLConditionKeys">CreateAppBlockBuilderStreamingURLConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAppBlockBuilderStreamingURL action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateAppBlockConditionKeys">CreateAppBlockConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAppBlock action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateExportImageTaskConditionKeys">CreateExportImageTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExportImageTask action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateFleetConditionKeys">CreateFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFleet action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateImageBuilderConditionKeys">CreateImageBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateImageBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateImageBuilderStreamingURLConditionKeys">CreateImageBuilderStreamingURLConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateImageBuilderStreamingURL action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateImportedImageConditionKeys">CreateImportedImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateImportedImage action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateStackConditionKeys">CreateStackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStack action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateStreamingURLConditionKeys">CreateStreamingURLConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStreamingURL action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.CreateUpdatedImageConditionKeys">CreateUpdatedImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUpdatedImage action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteAppBlockBuilderConditionKeys">DeleteAppBlockBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAppBlockBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteAppBlockConditionKeys">DeleteAppBlockConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAppBlock action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteApplicationConditionKeys">DeleteApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteApplication action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteFleetConditionKeys">DeleteFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteFleet action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteImageBuilderConditionKeys">DeleteImageBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteImageBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteImageConditionKeys">DeleteImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteImage action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteImagePermissionsConditionKeys">DeleteImagePermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteImagePermissions action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteStackConditionKeys">DeleteStackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteStack action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DisassociateAppBlockBuilderAppBlockConditionKeys">DisassociateAppBlockBuilderAppBlockConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateAppBlockBuilderAppBlock action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DisassociateApplicationFleetConditionKeys">DisassociateApplicationFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateApplicationFleet action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DisassociateFleetConditionKeys">DisassociateFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateFleet action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.DisassociateSoftwareFromImageBuilderConditionKeys">DisassociateSoftwareFromImageBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateSoftwareFromImageBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.StartAppBlockBuilderConditionKeys">StartAppBlockBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartAppBlockBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.StartFleetConditionKeys">StartFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartFleet action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.StartImageBuilderConditionKeys">StartImageBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartImageBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.StartSoftwareDeploymentToImageBuilderConditionKeys">StartSoftwareDeploymentToImageBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSoftwareDeploymentToImageBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.StopAppBlockBuilderConditionKeys">StopAppBlockBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopAppBlockBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.StopFleetConditionKeys">StopFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopFleet action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.StopImageBuilderConditionKeys">StopImageBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopImageBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.StreamConditionKeys">StreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Stream action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.UpdateAppBlockBuilderConditionKeys">UpdateAppBlockBuilderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAppBlockBuilder action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.UpdateApplicationConditionKeys">UpdateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateApplication action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.UpdateFleetConditionKeys">UpdateFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateFleet action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.UpdateImagePermissionsConditionKeys">UpdateImagePermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateImagePermissions action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.UpdateStackConditionKeys">UpdateStackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateStack action. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamConditions.property.USER_ID">USER_ID</a></code> | <code>string</code> | Condition key: appstream:userId (String). |

---

##### `AssociateAppBlockBuilderAppBlockConditionKeys`<sup>Required</sup> <a name="AssociateAppBlockBuilderAppBlockConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.AssociateAppBlockBuilderAppBlockConditionKeys"></a>

```typescript
public readonly AssociateAppBlockBuilderAppBlockConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateAppBlockBuilderAppBlock action.

---

##### `AssociateApplicationFleetConditionKeys`<sup>Required</sup> <a name="AssociateApplicationFleetConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.AssociateApplicationFleetConditionKeys"></a>

```typescript
public readonly AssociateApplicationFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateApplicationFleet action.

---

##### `AssociateFleetConditionKeys`<sup>Required</sup> <a name="AssociateFleetConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.AssociateFleetConditionKeys"></a>

```typescript
public readonly AssociateFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateFleet action.

---

##### `AssociateSoftwareToImageBuilderConditionKeys`<sup>Required</sup> <a name="AssociateSoftwareToImageBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.AssociateSoftwareToImageBuilderConditionKeys"></a>

```typescript
public readonly AssociateSoftwareToImageBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateSoftwareToImageBuilder action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.appstream.AppstreamConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.appstream.AppstreamConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.appstream.AppstreamConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchAssociateUserStackConditionKeys`<sup>Required</sup> <a name="BatchAssociateUserStackConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.BatchAssociateUserStackConditionKeys"></a>

```typescript
public readonly BatchAssociateUserStackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchAssociateUserStack action.

---

##### `BatchDisassociateUserStackConditionKeys`<sup>Required</sup> <a name="BatchDisassociateUserStackConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.BatchDisassociateUserStackConditionKeys"></a>

```typescript
public readonly BatchDisassociateUserStackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDisassociateUserStack action.

---

##### `CopyImageConditionKeys`<sup>Required</sup> <a name="CopyImageConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CopyImageConditionKeys"></a>

```typescript
public readonly CopyImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyImage action.

---

##### `CreateAppBlockBuilderConditionKeys`<sup>Required</sup> <a name="CreateAppBlockBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateAppBlockBuilderConditionKeys"></a>

```typescript
public readonly CreateAppBlockBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAppBlockBuilder action.

---

##### `CreateAppBlockBuilderStreamingURLConditionKeys`<sup>Required</sup> <a name="CreateAppBlockBuilderStreamingURLConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateAppBlockBuilderStreamingURLConditionKeys"></a>

```typescript
public readonly CreateAppBlockBuilderStreamingURLConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAppBlockBuilderStreamingURL action.

---

##### `CreateAppBlockConditionKeys`<sup>Required</sup> <a name="CreateAppBlockConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateAppBlockConditionKeys"></a>

```typescript
public readonly CreateAppBlockConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAppBlock action.

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateExportImageTaskConditionKeys`<sup>Required</sup> <a name="CreateExportImageTaskConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateExportImageTaskConditionKeys"></a>

```typescript
public readonly CreateExportImageTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExportImageTask action.

---

##### `CreateFleetConditionKeys`<sup>Required</sup> <a name="CreateFleetConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateFleetConditionKeys"></a>

```typescript
public readonly CreateFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFleet action.

---

##### `CreateImageBuilderConditionKeys`<sup>Required</sup> <a name="CreateImageBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateImageBuilderConditionKeys"></a>

```typescript
public readonly CreateImageBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateImageBuilder action.

---

##### `CreateImageBuilderStreamingURLConditionKeys`<sup>Required</sup> <a name="CreateImageBuilderStreamingURLConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateImageBuilderStreamingURLConditionKeys"></a>

```typescript
public readonly CreateImageBuilderStreamingURLConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateImageBuilderStreamingURL action.

---

##### `CreateImportedImageConditionKeys`<sup>Required</sup> <a name="CreateImportedImageConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateImportedImageConditionKeys"></a>

```typescript
public readonly CreateImportedImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateImportedImage action.

---

##### `CreateStackConditionKeys`<sup>Required</sup> <a name="CreateStackConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateStackConditionKeys"></a>

```typescript
public readonly CreateStackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStack action.

---

##### `CreateStreamingURLConditionKeys`<sup>Required</sup> <a name="CreateStreamingURLConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateStreamingURLConditionKeys"></a>

```typescript
public readonly CreateStreamingURLConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStreamingURL action.

---

##### `CreateUpdatedImageConditionKeys`<sup>Required</sup> <a name="CreateUpdatedImageConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.CreateUpdatedImageConditionKeys"></a>

```typescript
public readonly CreateUpdatedImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUpdatedImage action.

---

##### `DeleteAppBlockBuilderConditionKeys`<sup>Required</sup> <a name="DeleteAppBlockBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteAppBlockBuilderConditionKeys"></a>

```typescript
public readonly DeleteAppBlockBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAppBlockBuilder action.

---

##### `DeleteAppBlockConditionKeys`<sup>Required</sup> <a name="DeleteAppBlockConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteAppBlockConditionKeys"></a>

```typescript
public readonly DeleteAppBlockConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAppBlock action.

---

##### `DeleteApplicationConditionKeys`<sup>Required</sup> <a name="DeleteApplicationConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteApplicationConditionKeys"></a>

```typescript
public readonly DeleteApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteApplication action.

---

##### `DeleteFleetConditionKeys`<sup>Required</sup> <a name="DeleteFleetConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteFleetConditionKeys"></a>

```typescript
public readonly DeleteFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteFleet action.

---

##### `DeleteImageBuilderConditionKeys`<sup>Required</sup> <a name="DeleteImageBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteImageBuilderConditionKeys"></a>

```typescript
public readonly DeleteImageBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteImageBuilder action.

---

##### `DeleteImageConditionKeys`<sup>Required</sup> <a name="DeleteImageConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteImageConditionKeys"></a>

```typescript
public readonly DeleteImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteImage action.

---

##### `DeleteImagePermissionsConditionKeys`<sup>Required</sup> <a name="DeleteImagePermissionsConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteImagePermissionsConditionKeys"></a>

```typescript
public readonly DeleteImagePermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteImagePermissions action.

---

##### `DeleteStackConditionKeys`<sup>Required</sup> <a name="DeleteStackConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DeleteStackConditionKeys"></a>

```typescript
public readonly DeleteStackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteStack action.

---

##### `DisassociateAppBlockBuilderAppBlockConditionKeys`<sup>Required</sup> <a name="DisassociateAppBlockBuilderAppBlockConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DisassociateAppBlockBuilderAppBlockConditionKeys"></a>

```typescript
public readonly DisassociateAppBlockBuilderAppBlockConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateAppBlockBuilderAppBlock action.

---

##### `DisassociateApplicationFleetConditionKeys`<sup>Required</sup> <a name="DisassociateApplicationFleetConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DisassociateApplicationFleetConditionKeys"></a>

```typescript
public readonly DisassociateApplicationFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateApplicationFleet action.

---

##### `DisassociateFleetConditionKeys`<sup>Required</sup> <a name="DisassociateFleetConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DisassociateFleetConditionKeys"></a>

```typescript
public readonly DisassociateFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateFleet action.

---

##### `DisassociateSoftwareFromImageBuilderConditionKeys`<sup>Required</sup> <a name="DisassociateSoftwareFromImageBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.DisassociateSoftwareFromImageBuilderConditionKeys"></a>

```typescript
public readonly DisassociateSoftwareFromImageBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateSoftwareFromImageBuilder action.

---

##### `StartAppBlockBuilderConditionKeys`<sup>Required</sup> <a name="StartAppBlockBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.StartAppBlockBuilderConditionKeys"></a>

```typescript
public readonly StartAppBlockBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartAppBlockBuilder action.

---

##### `StartFleetConditionKeys`<sup>Required</sup> <a name="StartFleetConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.StartFleetConditionKeys"></a>

```typescript
public readonly StartFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartFleet action.

---

##### `StartImageBuilderConditionKeys`<sup>Required</sup> <a name="StartImageBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.StartImageBuilderConditionKeys"></a>

```typescript
public readonly StartImageBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartImageBuilder action.

---

##### `StartSoftwareDeploymentToImageBuilderConditionKeys`<sup>Required</sup> <a name="StartSoftwareDeploymentToImageBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.StartSoftwareDeploymentToImageBuilderConditionKeys"></a>

```typescript
public readonly StartSoftwareDeploymentToImageBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSoftwareDeploymentToImageBuilder action.

---

##### `StopAppBlockBuilderConditionKeys`<sup>Required</sup> <a name="StopAppBlockBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.StopAppBlockBuilderConditionKeys"></a>

```typescript
public readonly StopAppBlockBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopAppBlockBuilder action.

---

##### `StopFleetConditionKeys`<sup>Required</sup> <a name="StopFleetConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.StopFleetConditionKeys"></a>

```typescript
public readonly StopFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopFleet action.

---

##### `StopImageBuilderConditionKeys`<sup>Required</sup> <a name="StopImageBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.StopImageBuilderConditionKeys"></a>

```typescript
public readonly StopImageBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopImageBuilder action.

---

##### `StreamConditionKeys`<sup>Required</sup> <a name="StreamConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.StreamConditionKeys"></a>

```typescript
public readonly StreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Stream action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAppBlockBuilderConditionKeys`<sup>Required</sup> <a name="UpdateAppBlockBuilderConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.UpdateAppBlockBuilderConditionKeys"></a>

```typescript
public readonly UpdateAppBlockBuilderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAppBlockBuilder action.

---

##### `UpdateApplicationConditionKeys`<sup>Required</sup> <a name="UpdateApplicationConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.UpdateApplicationConditionKeys"></a>

```typescript
public readonly UpdateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateApplication action.

---

##### `UpdateFleetConditionKeys`<sup>Required</sup> <a name="UpdateFleetConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.UpdateFleetConditionKeys"></a>

```typescript
public readonly UpdateFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateFleet action.

---

##### `UpdateImagePermissionsConditionKeys`<sup>Required</sup> <a name="UpdateImagePermissionsConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.UpdateImagePermissionsConditionKeys"></a>

```typescript
public readonly UpdateImagePermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateImagePermissions action.

---

##### `UpdateStackConditionKeys`<sup>Required</sup> <a name="UpdateStackConditionKeys" id="@cdk_utils/iam.appstream.AppstreamConditions.property.UpdateStackConditionKeys"></a>

```typescript
public readonly UpdateStackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateStack action.

---

##### `USER_ID`<sup>Required</sup> <a name="USER_ID" id="@cdk_utils/iam.appstream.AppstreamConditions.property.USER_ID"></a>

```typescript
public readonly USER_ID: string;
```

- *Type:* string

Condition key: appstream:userId (String).

---

### AppstreamOperations <a name="AppstreamOperations" id="@cdk_utils/iam.appstream.AppstreamOperations"></a>

API operation to required IAM actions mapping for appstream.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appstream.AppstreamOperations.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

new appstream.AppstreamOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.AssociateAppBlockBuilderAppBlock">AssociateAppBlockBuilderAppBlock</a></code> | <code>string[]</code> | IAM actions required for the AssociateAppBlockBuilderAppBlock API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.AssociateApplicationFleet">AssociateApplicationFleet</a></code> | <code>string[]</code> | IAM actions required for the AssociateApplicationFleet API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.AssociateApplicationToEntitlement">AssociateApplicationToEntitlement</a></code> | <code>string[]</code> | IAM actions required for the AssociateApplicationToEntitlement API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.AssociateFleet">AssociateFleet</a></code> | <code>string[]</code> | IAM actions required for the AssociateFleet API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.AssociateSoftwareToImageBuilder">AssociateSoftwareToImageBuilder</a></code> | <code>string[]</code> | IAM actions required for the AssociateSoftwareToImageBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.BatchAssociateUserStack">BatchAssociateUserStack</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateUserStack API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.BatchDisassociateUserStack">BatchDisassociateUserStack</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateUserStack API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CopyImage">CopyImage</a></code> | <code>string[]</code> | IAM actions required for the CopyImage API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateAppBlock">CreateAppBlock</a></code> | <code>string[]</code> | IAM actions required for the CreateAppBlock API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateAppBlockBuilder">CreateAppBlockBuilder</a></code> | <code>string[]</code> | IAM actions required for the CreateAppBlockBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateAppBlockBuilderStreamingURL">CreateAppBlockBuilderStreamingURL</a></code> | <code>string[]</code> | IAM actions required for the CreateAppBlockBuilderStreamingURL API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateDirectoryConfig">CreateDirectoryConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateDirectoryConfig API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateEntitlement">CreateEntitlement</a></code> | <code>string[]</code> | IAM actions required for the CreateEntitlement API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateExportImageTask">CreateExportImageTask</a></code> | <code>string[]</code> | IAM actions required for the CreateExportImageTask API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateFleet">CreateFleet</a></code> | <code>string[]</code> | IAM actions required for the CreateFleet API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateImageBuilder">CreateImageBuilder</a></code> | <code>string[]</code> | IAM actions required for the CreateImageBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateImageBuilderStreamingURL">CreateImageBuilderStreamingURL</a></code> | <code>string[]</code> | IAM actions required for the CreateImageBuilderStreamingURL API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateImportedImage">CreateImportedImage</a></code> | <code>string[]</code> | IAM actions required for the CreateImportedImage API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateStack">CreateStack</a></code> | <code>string[]</code> | IAM actions required for the CreateStack API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateStreamingURL">CreateStreamingURL</a></code> | <code>string[]</code> | IAM actions required for the CreateStreamingURL API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateThemeForStack">CreateThemeForStack</a></code> | <code>string[]</code> | IAM actions required for the CreateThemeForStack API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateUpdatedImage">CreateUpdatedImage</a></code> | <code>string[]</code> | IAM actions required for the CreateUpdatedImage API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateUsageReportSubscription">CreateUsageReportSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateUsageReportSubscription API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteAppBlock">DeleteAppBlock</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppBlock API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteAppBlockBuilder">DeleteAppBlockBuilder</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppBlockBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteDirectoryConfig">DeleteDirectoryConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteDirectoryConfig API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteEntitlement">DeleteEntitlement</a></code> | <code>string[]</code> | IAM actions required for the DeleteEntitlement API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteFleet">DeleteFleet</a></code> | <code>string[]</code> | IAM actions required for the DeleteFleet API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteImage">DeleteImage</a></code> | <code>string[]</code> | IAM actions required for the DeleteImage API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteImageBuilder">DeleteImageBuilder</a></code> | <code>string[]</code> | IAM actions required for the DeleteImageBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteImagePermissions">DeleteImagePermissions</a></code> | <code>string[]</code> | IAM actions required for the DeleteImagePermissions API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteStack">DeleteStack</a></code> | <code>string[]</code> | IAM actions required for the DeleteStack API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteThemeForStack">DeleteThemeForStack</a></code> | <code>string[]</code> | IAM actions required for the DeleteThemeForStack API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteUsageReportSubscription">DeleteUsageReportSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteUsageReportSubscription API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeAppBlockBuilderAppBlockAssociations">DescribeAppBlockBuilderAppBlockAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppBlockBuilderAppBlockAssociations API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeAppBlockBuilders">DescribeAppBlockBuilders</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppBlockBuilders API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeAppBlocks">DescribeAppBlocks</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppBlocks API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeApplicationFleetAssociations">DescribeApplicationFleetAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplicationFleetAssociations API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeApplications">DescribeApplications</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplications API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeAppLicenseUsage">DescribeAppLicenseUsage</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppLicenseUsage API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeDirectoryConfigs">DescribeDirectoryConfigs</a></code> | <code>string[]</code> | IAM actions required for the DescribeDirectoryConfigs API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeEntitlements">DescribeEntitlements</a></code> | <code>string[]</code> | IAM actions required for the DescribeEntitlements API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeFleets">DescribeFleets</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleets API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeImageBuilders">DescribeImageBuilders</a></code> | <code>string[]</code> | IAM actions required for the DescribeImageBuilders API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeImagePermissions">DescribeImagePermissions</a></code> | <code>string[]</code> | IAM actions required for the DescribeImagePermissions API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeImages">DescribeImages</a></code> | <code>string[]</code> | IAM actions required for the DescribeImages API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeSessions">DescribeSessions</a></code> | <code>string[]</code> | IAM actions required for the DescribeSessions API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeSoftwareAssociations">DescribeSoftwareAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeSoftwareAssociations API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeStacks">DescribeStacks</a></code> | <code>string[]</code> | IAM actions required for the DescribeStacks API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeThemeForStack">DescribeThemeForStack</a></code> | <code>string[]</code> | IAM actions required for the DescribeThemeForStack API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeUsageReportSubscriptions">DescribeUsageReportSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeUsageReportSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeUsers">DescribeUsers</a></code> | <code>string[]</code> | IAM actions required for the DescribeUsers API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeUserStackAssociations">DescribeUserStackAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeUserStackAssociations API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DisableUser">DisableUser</a></code> | <code>string[]</code> | IAM actions required for the DisableUser API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DisassociateAppBlockBuilderAppBlock">DisassociateAppBlockBuilderAppBlock</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAppBlockBuilderAppBlock API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DisassociateApplicationFleet">DisassociateApplicationFleet</a></code> | <code>string[]</code> | IAM actions required for the DisassociateApplicationFleet API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DisassociateApplicationFromEntitlement">DisassociateApplicationFromEntitlement</a></code> | <code>string[]</code> | IAM actions required for the DisassociateApplicationFromEntitlement API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DisassociateFleet">DisassociateFleet</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFleet API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DisassociateSoftwareFromImageBuilder">DisassociateSoftwareFromImageBuilder</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSoftwareFromImageBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.DrainSessionInstance">DrainSessionInstance</a></code> | <code>string[]</code> | IAM actions required for the DrainSessionInstance API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.EnableUser">EnableUser</a></code> | <code>string[]</code> | IAM actions required for the EnableUser API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.ExpireSession">ExpireSession</a></code> | <code>string[]</code> | IAM actions required for the ExpireSession API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.ListAssociatedFleets">ListAssociatedFleets</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedFleets API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.ListAssociatedStacks">ListAssociatedStacks</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedStacks API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.ListEntitledApplications">ListEntitledApplications</a></code> | <code>string[]</code> | IAM actions required for the ListEntitledApplications API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.ListExportImageTasks">ListExportImageTasks</a></code> | <code>string[]</code> | IAM actions required for the ListExportImageTasks API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.opGetExportImageTask">opGetExportImageTask</a></code> | <code>string[]</code> | IAM actions required for the GetExportImageTask API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.StartAppBlockBuilder">StartAppBlockBuilder</a></code> | <code>string[]</code> | IAM actions required for the StartAppBlockBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.StartFleet">StartFleet</a></code> | <code>string[]</code> | IAM actions required for the StartFleet API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.StartImageBuilder">StartImageBuilder</a></code> | <code>string[]</code> | IAM actions required for the StartImageBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.StartSoftwareDeploymentToImageBuilder">StartSoftwareDeploymentToImageBuilder</a></code> | <code>string[]</code> | IAM actions required for the StartSoftwareDeploymentToImageBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.StopAppBlockBuilder">StopAppBlockBuilder</a></code> | <code>string[]</code> | IAM actions required for the StopAppBlockBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.StopFleet">StopFleet</a></code> | <code>string[]</code> | IAM actions required for the StopFleet API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.StopImageBuilder">StopImageBuilder</a></code> | <code>string[]</code> | IAM actions required for the StopImageBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateAppBlockBuilder">UpdateAppBlockBuilder</a></code> | <code>string[]</code> | IAM actions required for the UpdateAppBlockBuilder API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateDirectoryConfig">UpdateDirectoryConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateDirectoryConfig API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateEntitlement">UpdateEntitlement</a></code> | <code>string[]</code> | IAM actions required for the UpdateEntitlement API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateFleet">UpdateFleet</a></code> | <code>string[]</code> | IAM actions required for the UpdateFleet API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateImagePermissions">UpdateImagePermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdateImagePermissions API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateStack">UpdateStack</a></code> | <code>string[]</code> | IAM actions required for the UpdateStack API call. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateThemeForStack">UpdateThemeForStack</a></code> | <code>string[]</code> | IAM actions required for the UpdateThemeForStack API call. |

---

##### `AssociateAppBlockBuilderAppBlock`<sup>Required</sup> <a name="AssociateAppBlockBuilderAppBlock" id="@cdk_utils/iam.appstream.AppstreamOperations.property.AssociateAppBlockBuilderAppBlock"></a>

```typescript
public readonly AssociateAppBlockBuilderAppBlock: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAppBlockBuilderAppBlock API call.

---

##### `AssociateApplicationFleet`<sup>Required</sup> <a name="AssociateApplicationFleet" id="@cdk_utils/iam.appstream.AppstreamOperations.property.AssociateApplicationFleet"></a>

```typescript
public readonly AssociateApplicationFleet: string[];
```

- *Type:* string[]

IAM actions required for the AssociateApplicationFleet API call.

---

##### `AssociateApplicationToEntitlement`<sup>Required</sup> <a name="AssociateApplicationToEntitlement" id="@cdk_utils/iam.appstream.AppstreamOperations.property.AssociateApplicationToEntitlement"></a>

```typescript
public readonly AssociateApplicationToEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the AssociateApplicationToEntitlement API call.

---

##### `AssociateFleet`<sup>Required</sup> <a name="AssociateFleet" id="@cdk_utils/iam.appstream.AppstreamOperations.property.AssociateFleet"></a>

```typescript
public readonly AssociateFleet: string[];
```

- *Type:* string[]

IAM actions required for the AssociateFleet API call.

---

##### `AssociateSoftwareToImageBuilder`<sup>Required</sup> <a name="AssociateSoftwareToImageBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.AssociateSoftwareToImageBuilder"></a>

```typescript
public readonly AssociateSoftwareToImageBuilder: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSoftwareToImageBuilder API call.

---

##### `BatchAssociateUserStack`<sup>Required</sup> <a name="BatchAssociateUserStack" id="@cdk_utils/iam.appstream.AppstreamOperations.property.BatchAssociateUserStack"></a>

```typescript
public readonly BatchAssociateUserStack: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateUserStack API call.

---

##### `BatchDisassociateUserStack`<sup>Required</sup> <a name="BatchDisassociateUserStack" id="@cdk_utils/iam.appstream.AppstreamOperations.property.BatchDisassociateUserStack"></a>

```typescript
public readonly BatchDisassociateUserStack: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateUserStack API call.

---

##### `CopyImage`<sup>Required</sup> <a name="CopyImage" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CopyImage"></a>

```typescript
public readonly CopyImage: string[];
```

- *Type:* string[]

IAM actions required for the CopyImage API call.

---

##### `CreateAppBlock`<sup>Required</sup> <a name="CreateAppBlock" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateAppBlock"></a>

```typescript
public readonly CreateAppBlock: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppBlock API call.

---

##### `CreateAppBlockBuilder`<sup>Required</sup> <a name="CreateAppBlockBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateAppBlockBuilder"></a>

```typescript
public readonly CreateAppBlockBuilder: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppBlockBuilder API call.

---

##### `CreateAppBlockBuilderStreamingURL`<sup>Required</sup> <a name="CreateAppBlockBuilderStreamingURL" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateAppBlockBuilderStreamingURL"></a>

```typescript
public readonly CreateAppBlockBuilderStreamingURL: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppBlockBuilderStreamingURL API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateDirectoryConfig`<sup>Required</sup> <a name="CreateDirectoryConfig" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateDirectoryConfig"></a>

```typescript
public readonly CreateDirectoryConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateDirectoryConfig API call.

---

##### `CreateEntitlement`<sup>Required</sup> <a name="CreateEntitlement" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateEntitlement"></a>

```typescript
public readonly CreateEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the CreateEntitlement API call.

---

##### `CreateExportImageTask`<sup>Required</sup> <a name="CreateExportImageTask" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateExportImageTask"></a>

```typescript
public readonly CreateExportImageTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateExportImageTask API call.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string[];
```

- *Type:* string[]

IAM actions required for the CreateFleet API call.

---

##### `CreateImageBuilder`<sup>Required</sup> <a name="CreateImageBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateImageBuilder"></a>

```typescript
public readonly CreateImageBuilder: string[];
```

- *Type:* string[]

IAM actions required for the CreateImageBuilder API call.

---

##### `CreateImageBuilderStreamingURL`<sup>Required</sup> <a name="CreateImageBuilderStreamingURL" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateImageBuilderStreamingURL"></a>

```typescript
public readonly CreateImageBuilderStreamingURL: string[];
```

- *Type:* string[]

IAM actions required for the CreateImageBuilderStreamingURL API call.

---

##### `CreateImportedImage`<sup>Required</sup> <a name="CreateImportedImage" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateImportedImage"></a>

```typescript
public readonly CreateImportedImage: string[];
```

- *Type:* string[]

IAM actions required for the CreateImportedImage API call.

---

##### `CreateStack`<sup>Required</sup> <a name="CreateStack" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateStack"></a>

```typescript
public readonly CreateStack: string[];
```

- *Type:* string[]

IAM actions required for the CreateStack API call.

---

##### `CreateStreamingURL`<sup>Required</sup> <a name="CreateStreamingURL" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateStreamingURL"></a>

```typescript
public readonly CreateStreamingURL: string[];
```

- *Type:* string[]

IAM actions required for the CreateStreamingURL API call.

---

##### `CreateThemeForStack`<sup>Required</sup> <a name="CreateThemeForStack" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateThemeForStack"></a>

```typescript
public readonly CreateThemeForStack: string[];
```

- *Type:* string[]

IAM actions required for the CreateThemeForStack API call.

---

##### `CreateUpdatedImage`<sup>Required</sup> <a name="CreateUpdatedImage" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateUpdatedImage"></a>

```typescript
public readonly CreateUpdatedImage: string[];
```

- *Type:* string[]

IAM actions required for the CreateUpdatedImage API call.

---

##### `CreateUsageReportSubscription`<sup>Required</sup> <a name="CreateUsageReportSubscription" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateUsageReportSubscription"></a>

```typescript
public readonly CreateUsageReportSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateUsageReportSubscription API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.appstream.AppstreamOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `DeleteAppBlock`<sup>Required</sup> <a name="DeleteAppBlock" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteAppBlock"></a>

```typescript
public readonly DeleteAppBlock: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppBlock API call.

---

##### `DeleteAppBlockBuilder`<sup>Required</sup> <a name="DeleteAppBlockBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteAppBlockBuilder"></a>

```typescript
public readonly DeleteAppBlockBuilder: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppBlockBuilder API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteDirectoryConfig`<sup>Required</sup> <a name="DeleteDirectoryConfig" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteDirectoryConfig"></a>

```typescript
public readonly DeleteDirectoryConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDirectoryConfig API call.

---

##### `DeleteEntitlement`<sup>Required</sup> <a name="DeleteEntitlement" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteEntitlement"></a>

```typescript
public readonly DeleteEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEntitlement API call.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFleet API call.

---

##### `DeleteImage`<sup>Required</sup> <a name="DeleteImage" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteImage"></a>

```typescript
public readonly DeleteImage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImage API call.

---

##### `DeleteImageBuilder`<sup>Required</sup> <a name="DeleteImageBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteImageBuilder"></a>

```typescript
public readonly DeleteImageBuilder: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImageBuilder API call.

---

##### `DeleteImagePermissions`<sup>Required</sup> <a name="DeleteImagePermissions" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteImagePermissions"></a>

```typescript
public readonly DeleteImagePermissions: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImagePermissions API call.

---

##### `DeleteStack`<sup>Required</sup> <a name="DeleteStack" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteStack"></a>

```typescript
public readonly DeleteStack: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStack API call.

---

##### `DeleteThemeForStack`<sup>Required</sup> <a name="DeleteThemeForStack" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteThemeForStack"></a>

```typescript
public readonly DeleteThemeForStack: string[];
```

- *Type:* string[]

IAM actions required for the DeleteThemeForStack API call.

---

##### `DeleteUsageReportSubscription`<sup>Required</sup> <a name="DeleteUsageReportSubscription" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteUsageReportSubscription"></a>

```typescript
public readonly DeleteUsageReportSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUsageReportSubscription API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DescribeAppBlockBuilderAppBlockAssociations`<sup>Required</sup> <a name="DescribeAppBlockBuilderAppBlockAssociations" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeAppBlockBuilderAppBlockAssociations"></a>

```typescript
public readonly DescribeAppBlockBuilderAppBlockAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppBlockBuilderAppBlockAssociations API call.

---

##### `DescribeAppBlockBuilders`<sup>Required</sup> <a name="DescribeAppBlockBuilders" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeAppBlockBuilders"></a>

```typescript
public readonly DescribeAppBlockBuilders: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppBlockBuilders API call.

---

##### `DescribeAppBlocks`<sup>Required</sup> <a name="DescribeAppBlocks" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeAppBlocks"></a>

```typescript
public readonly DescribeAppBlocks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppBlocks API call.

---

##### `DescribeApplicationFleetAssociations`<sup>Required</sup> <a name="DescribeApplicationFleetAssociations" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeApplicationFleetAssociations"></a>

```typescript
public readonly DescribeApplicationFleetAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplicationFleetAssociations API call.

---

##### `DescribeApplications`<sup>Required</sup> <a name="DescribeApplications" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeApplications"></a>

```typescript
public readonly DescribeApplications: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplications API call.

---

##### `DescribeAppLicenseUsage`<sup>Required</sup> <a name="DescribeAppLicenseUsage" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeAppLicenseUsage"></a>

```typescript
public readonly DescribeAppLicenseUsage: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppLicenseUsage API call.

---

##### `DescribeDirectoryConfigs`<sup>Required</sup> <a name="DescribeDirectoryConfigs" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeDirectoryConfigs"></a>

```typescript
public readonly DescribeDirectoryConfigs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDirectoryConfigs API call.

---

##### `DescribeEntitlements`<sup>Required</sup> <a name="DescribeEntitlements" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeEntitlements"></a>

```typescript
public readonly DescribeEntitlements: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEntitlements API call.

---

##### `DescribeFleets`<sup>Required</sup> <a name="DescribeFleets" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeFleets"></a>

```typescript
public readonly DescribeFleets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleets API call.

---

##### `DescribeImageBuilders`<sup>Required</sup> <a name="DescribeImageBuilders" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeImageBuilders"></a>

```typescript
public readonly DescribeImageBuilders: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImageBuilders API call.

---

##### `DescribeImagePermissions`<sup>Required</sup> <a name="DescribeImagePermissions" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeImagePermissions"></a>

```typescript
public readonly DescribeImagePermissions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImagePermissions API call.

---

##### `DescribeImages`<sup>Required</sup> <a name="DescribeImages" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeImages"></a>

```typescript
public readonly DescribeImages: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImages API call.

---

##### `DescribeSessions`<sup>Required</sup> <a name="DescribeSessions" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeSessions"></a>

```typescript
public readonly DescribeSessions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSessions API call.

---

##### `DescribeSoftwareAssociations`<sup>Required</sup> <a name="DescribeSoftwareAssociations" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeSoftwareAssociations"></a>

```typescript
public readonly DescribeSoftwareAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSoftwareAssociations API call.

---

##### `DescribeStacks`<sup>Required</sup> <a name="DescribeStacks" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeStacks"></a>

```typescript
public readonly DescribeStacks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStacks API call.

---

##### `DescribeThemeForStack`<sup>Required</sup> <a name="DescribeThemeForStack" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeThemeForStack"></a>

```typescript
public readonly DescribeThemeForStack: string[];
```

- *Type:* string[]

IAM actions required for the DescribeThemeForStack API call.

---

##### `DescribeUsageReportSubscriptions`<sup>Required</sup> <a name="DescribeUsageReportSubscriptions" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeUsageReportSubscriptions"></a>

```typescript
public readonly DescribeUsageReportSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUsageReportSubscriptions API call.

---

##### `DescribeUsers`<sup>Required</sup> <a name="DescribeUsers" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeUsers"></a>

```typescript
public readonly DescribeUsers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUsers API call.

---

##### `DescribeUserStackAssociations`<sup>Required</sup> <a name="DescribeUserStackAssociations" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DescribeUserStackAssociations"></a>

```typescript
public readonly DescribeUserStackAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUserStackAssociations API call.

---

##### `DisableUser`<sup>Required</sup> <a name="DisableUser" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DisableUser"></a>

```typescript
public readonly DisableUser: string[];
```

- *Type:* string[]

IAM actions required for the DisableUser API call.

---

##### `DisassociateAppBlockBuilderAppBlock`<sup>Required</sup> <a name="DisassociateAppBlockBuilderAppBlock" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DisassociateAppBlockBuilderAppBlock"></a>

```typescript
public readonly DisassociateAppBlockBuilderAppBlock: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAppBlockBuilderAppBlock API call.

---

##### `DisassociateApplicationFleet`<sup>Required</sup> <a name="DisassociateApplicationFleet" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DisassociateApplicationFleet"></a>

```typescript
public readonly DisassociateApplicationFleet: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateApplicationFleet API call.

---

##### `DisassociateApplicationFromEntitlement`<sup>Required</sup> <a name="DisassociateApplicationFromEntitlement" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DisassociateApplicationFromEntitlement"></a>

```typescript
public readonly DisassociateApplicationFromEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateApplicationFromEntitlement API call.

---

##### `DisassociateFleet`<sup>Required</sup> <a name="DisassociateFleet" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DisassociateFleet"></a>

```typescript
public readonly DisassociateFleet: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFleet API call.

---

##### `DisassociateSoftwareFromImageBuilder`<sup>Required</sup> <a name="DisassociateSoftwareFromImageBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DisassociateSoftwareFromImageBuilder"></a>

```typescript
public readonly DisassociateSoftwareFromImageBuilder: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSoftwareFromImageBuilder API call.

---

##### `DrainSessionInstance`<sup>Required</sup> <a name="DrainSessionInstance" id="@cdk_utils/iam.appstream.AppstreamOperations.property.DrainSessionInstance"></a>

```typescript
public readonly DrainSessionInstance: string[];
```

- *Type:* string[]

IAM actions required for the DrainSessionInstance API call.

---

##### `EnableUser`<sup>Required</sup> <a name="EnableUser" id="@cdk_utils/iam.appstream.AppstreamOperations.property.EnableUser"></a>

```typescript
public readonly EnableUser: string[];
```

- *Type:* string[]

IAM actions required for the EnableUser API call.

---

##### `ExpireSession`<sup>Required</sup> <a name="ExpireSession" id="@cdk_utils/iam.appstream.AppstreamOperations.property.ExpireSession"></a>

```typescript
public readonly ExpireSession: string[];
```

- *Type:* string[]

IAM actions required for the ExpireSession API call.

---

##### `ListAssociatedFleets`<sup>Required</sup> <a name="ListAssociatedFleets" id="@cdk_utils/iam.appstream.AppstreamOperations.property.ListAssociatedFleets"></a>

```typescript
public readonly ListAssociatedFleets: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedFleets API call.

---

##### `ListAssociatedStacks`<sup>Required</sup> <a name="ListAssociatedStacks" id="@cdk_utils/iam.appstream.AppstreamOperations.property.ListAssociatedStacks"></a>

```typescript
public readonly ListAssociatedStacks: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedStacks API call.

---

##### `ListEntitledApplications`<sup>Required</sup> <a name="ListEntitledApplications" id="@cdk_utils/iam.appstream.AppstreamOperations.property.ListEntitledApplications"></a>

```typescript
public readonly ListEntitledApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListEntitledApplications API call.

---

##### `ListExportImageTasks`<sup>Required</sup> <a name="ListExportImageTasks" id="@cdk_utils/iam.appstream.AppstreamOperations.property.ListExportImageTasks"></a>

```typescript
public readonly ListExportImageTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListExportImageTasks API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appstream.AppstreamOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetExportImageTask`<sup>Required</sup> <a name="opGetExportImageTask" id="@cdk_utils/iam.appstream.AppstreamOperations.property.opGetExportImageTask"></a>

```typescript
public readonly opGetExportImageTask: string[];
```

- *Type:* string[]

IAM actions required for the GetExportImageTask API call.

---

##### `StartAppBlockBuilder`<sup>Required</sup> <a name="StartAppBlockBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.StartAppBlockBuilder"></a>

```typescript
public readonly StartAppBlockBuilder: string[];
```

- *Type:* string[]

IAM actions required for the StartAppBlockBuilder API call.

---

##### `StartFleet`<sup>Required</sup> <a name="StartFleet" id="@cdk_utils/iam.appstream.AppstreamOperations.property.StartFleet"></a>

```typescript
public readonly StartFleet: string[];
```

- *Type:* string[]

IAM actions required for the StartFleet API call.

---

##### `StartImageBuilder`<sup>Required</sup> <a name="StartImageBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.StartImageBuilder"></a>

```typescript
public readonly StartImageBuilder: string[];
```

- *Type:* string[]

IAM actions required for the StartImageBuilder API call.

---

##### `StartSoftwareDeploymentToImageBuilder`<sup>Required</sup> <a name="StartSoftwareDeploymentToImageBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.StartSoftwareDeploymentToImageBuilder"></a>

```typescript
public readonly StartSoftwareDeploymentToImageBuilder: string[];
```

- *Type:* string[]

IAM actions required for the StartSoftwareDeploymentToImageBuilder API call.

---

##### `StopAppBlockBuilder`<sup>Required</sup> <a name="StopAppBlockBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.StopAppBlockBuilder"></a>

```typescript
public readonly StopAppBlockBuilder: string[];
```

- *Type:* string[]

IAM actions required for the StopAppBlockBuilder API call.

---

##### `StopFleet`<sup>Required</sup> <a name="StopFleet" id="@cdk_utils/iam.appstream.AppstreamOperations.property.StopFleet"></a>

```typescript
public readonly StopFleet: string[];
```

- *Type:* string[]

IAM actions required for the StopFleet API call.

---

##### `StopImageBuilder`<sup>Required</sup> <a name="StopImageBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.StopImageBuilder"></a>

```typescript
public readonly StopImageBuilder: string[];
```

- *Type:* string[]

IAM actions required for the StopImageBuilder API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appstream.AppstreamOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appstream.AppstreamOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAppBlockBuilder`<sup>Required</sup> <a name="UpdateAppBlockBuilder" id="@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateAppBlockBuilder"></a>

```typescript
public readonly UpdateAppBlockBuilder: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAppBlockBuilder API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateDirectoryConfig`<sup>Required</sup> <a name="UpdateDirectoryConfig" id="@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateDirectoryConfig"></a>

```typescript
public readonly UpdateDirectoryConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDirectoryConfig API call.

---

##### `UpdateEntitlement`<sup>Required</sup> <a name="UpdateEntitlement" id="@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateEntitlement"></a>

```typescript
public readonly UpdateEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEntitlement API call.

---

##### `UpdateFleet`<sup>Required</sup> <a name="UpdateFleet" id="@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateFleet"></a>

```typescript
public readonly UpdateFleet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFleet API call.

---

##### `UpdateImagePermissions`<sup>Required</sup> <a name="UpdateImagePermissions" id="@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateImagePermissions"></a>

```typescript
public readonly UpdateImagePermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateImagePermissions API call.

---

##### `UpdateStack`<sup>Required</sup> <a name="UpdateStack" id="@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateStack"></a>

```typescript
public readonly UpdateStack: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStack API call.

---

##### `UpdateThemeForStack`<sup>Required</sup> <a name="UpdateThemeForStack" id="@cdk_utils/iam.appstream.AppstreamOperations.property.UpdateThemeForStack"></a>

```typescript
public readonly UpdateThemeForStack: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThemeForStack API call.

---

### AppstreamResources <a name="AppstreamResources" id="@cdk_utils/iam.appstream.AppstreamResources"></a>

ARN builders, validators, and parsers for appstream resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appstream.AppstreamResources.Initializer"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

new appstream.AppstreamResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.appBlock">appBlock</a></code> | Builds an ARN for the app-block resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.appBlockBuilder">appBlockBuilder</a></code> | Builds an ARN for the app-block-builder resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.fleet">fleet</a></code> | Builds an ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.image">image</a></code> | Builds an ARN for the image resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.imageBuilder">imageBuilder</a></code> | Builds an ARN for the image-builder resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.isValidAppBlockArn">isValidAppBlockArn</a></code> | Validates whether a string is a valid ARN for the app-block resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.isValidAppBlockBuilderArn">isValidAppBlockBuilderArn</a></code> | Validates whether a string is a valid ARN for the app-block-builder resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.isValidFleetArn">isValidFleetArn</a></code> | Validates whether a string is a valid ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.isValidImageArn">isValidImageArn</a></code> | Validates whether a string is a valid ARN for the image resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.isValidImageBuilderArn">isValidImageBuilderArn</a></code> | Validates whether a string is a valid ARN for the image-builder resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.isValidStackArn">isValidStackArn</a></code> | Validates whether a string is a valid ARN for the stack resource. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.parseAppBlockArn">parseAppBlockArn</a></code> | Parses a app-block ARN into its components. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.parseAppBlockBuilderArn">parseAppBlockBuilderArn</a></code> | Parses a app-block-builder ARN into its components. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.parseFleetArn">parseFleetArn</a></code> | Parses a fleet ARN into its components. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.parseImageArn">parseImageArn</a></code> | Parses a image ARN into its components. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.parseImageBuilderArn">parseImageBuilderArn</a></code> | Parses a image-builder ARN into its components. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.parseStackArn">parseStackArn</a></code> | Parses a stack ARN into its components. |
| <code><a href="#@cdk_utils/iam.appstream.AppstreamResources.stack">stack</a></code> | Builds an ARN for the stack resource. |

---

##### `appBlock` <a name="appBlock" id="@cdk_utils/iam.appstream.AppstreamResources.appBlock"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.appBlock(props: AppstreamAppBlockArnProps)
```

Builds an ARN for the app-block resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appstream.AppstreamResources.appBlock.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appstream.AppstreamAppBlockArnProps">AppstreamAppBlockArnProps</a>

---

##### `appBlockBuilder` <a name="appBlockBuilder" id="@cdk_utils/iam.appstream.AppstreamResources.appBlockBuilder"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.appBlockBuilder(props: AppstreamAppBlockBuilderArnProps)
```

Builds an ARN for the app-block-builder resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appstream.AppstreamResources.appBlockBuilder.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appstream.AppstreamAppBlockBuilderArnProps">AppstreamAppBlockBuilderArnProps</a>

---

##### `application` <a name="application" id="@cdk_utils/iam.appstream.AppstreamResources.application"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.application(props: AppstreamApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appstream.AppstreamResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appstream.AppstreamApplicationArnProps">AppstreamApplicationArnProps</a>

---

##### `fleet` <a name="fleet" id="@cdk_utils/iam.appstream.AppstreamResources.fleet"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.fleet(props: AppstreamFleetArnProps)
```

Builds an ARN for the fleet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appstream.AppstreamResources.fleet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appstream.AppstreamFleetArnProps">AppstreamFleetArnProps</a>

---

##### `image` <a name="image" id="@cdk_utils/iam.appstream.AppstreamResources.image"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.image(props: AppstreamImageArnProps)
```

Builds an ARN for the image resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appstream.AppstreamResources.image.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appstream.AppstreamImageArnProps">AppstreamImageArnProps</a>

---

##### `imageBuilder` <a name="imageBuilder" id="@cdk_utils/iam.appstream.AppstreamResources.imageBuilder"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.imageBuilder(props: AppstreamImageBuilderArnProps)
```

Builds an ARN for the image-builder resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appstream.AppstreamResources.imageBuilder.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appstream.AppstreamImageBuilderArnProps">AppstreamImageBuilderArnProps</a>

---

##### `isValidAppBlockArn` <a name="isValidAppBlockArn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidAppBlockArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.isValidAppBlockArn(arn: string)
```

Validates whether a string is a valid ARN for the app-block resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidAppBlockArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAppBlockBuilderArn` <a name="isValidAppBlockBuilderArn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidAppBlockBuilderArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.isValidAppBlockBuilderArn(arn: string)
```

Validates whether a string is a valid ARN for the app-block-builder resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidAppBlockBuilderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidApplicationArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFleetArn` <a name="isValidFleetArn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidFleetArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.isValidFleetArn(arn: string)
```

Validates whether a string is a valid ARN for the fleet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImageArn` <a name="isValidImageArn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidImageArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.isValidImageArn(arn: string)
```

Validates whether a string is a valid ARN for the image resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidImageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImageBuilderArn` <a name="isValidImageBuilderArn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidImageBuilderArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.isValidImageBuilderArn(arn: string)
```

Validates whether a string is a valid ARN for the image-builder resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidImageBuilderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStackArn` <a name="isValidStackArn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidStackArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.isValidStackArn(arn: string)
```

Validates whether a string is a valid ARN for the stack resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.isValidStackArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppBlockArn` <a name="parseAppBlockArn" id="@cdk_utils/iam.appstream.AppstreamResources.parseAppBlockArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.parseAppBlockArn(arn: string)
```

Parses a app-block ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.parseAppBlockArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppBlockBuilderArn` <a name="parseAppBlockBuilderArn" id="@cdk_utils/iam.appstream.AppstreamResources.parseAppBlockBuilderArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.parseAppBlockBuilderArn(arn: string)
```

Parses a app-block-builder ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.parseAppBlockBuilderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.appstream.AppstreamResources.parseApplicationArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFleetArn` <a name="parseFleetArn" id="@cdk_utils/iam.appstream.AppstreamResources.parseFleetArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.parseFleetArn(arn: string)
```

Parses a fleet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.parseFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImageArn` <a name="parseImageArn" id="@cdk_utils/iam.appstream.AppstreamResources.parseImageArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.parseImageArn(arn: string)
```

Parses a image ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.parseImageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImageBuilderArn` <a name="parseImageBuilderArn" id="@cdk_utils/iam.appstream.AppstreamResources.parseImageBuilderArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.parseImageBuilderArn(arn: string)
```

Parses a image-builder ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.parseImageBuilderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStackArn` <a name="parseStackArn" id="@cdk_utils/iam.appstream.AppstreamResources.parseStackArn"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.parseStackArn(arn: string)
```

Parses a stack ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstream.AppstreamResources.parseStackArn.parameter.arn"></a>

- *Type:* string

---

##### `stack` <a name="stack" id="@cdk_utils/iam.appstream.AppstreamResources.stack"></a>

```typescript
import { appstream } from '@cdk_utils/iam'

appstream.AppstreamResources.stack(props: AppstreamStackArnProps)
```

Builds an ARN for the stack resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appstream.AppstreamResources.stack.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appstream.AppstreamStackArnProps">AppstreamStackArnProps</a>

---




