# `appfabric` Submodule <a name="`appfabric` Submodule" id="@cdk_utils/iam.appfabric"></a>


## Structs <a name="Structs" id="Structs"></a>

### AppfabricAppauthorizationArnComponents <a name="AppfabricAppauthorizationArnComponents" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents"></a>

Parsed components of a appauthorization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

const appfabricAppauthorizationArnComponents: appfabric.AppfabricAppauthorizationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents.property.appAuthorizationIdentifier">appAuthorizationIdentifier</a></code> | <code>string</code> | The AppAuthorizationIdentifier component. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents.property.appbundleId">appbundleId</a></code> | <code>string</code> | The AppbundleId component. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appAuthorizationIdentifier`<sup>Required</sup> <a name="appAuthorizationIdentifier" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents.property.appAuthorizationIdentifier"></a>

```typescript
public readonly appAuthorizationIdentifier: string;
```

- *Type:* string

The AppAuthorizationIdentifier component.

---

##### `appbundleId`<sup>Required</sup> <a name="appbundleId" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents.property.appbundleId"></a>

```typescript
public readonly appbundleId: string;
```

- *Type:* string

The AppbundleId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppfabricAppauthorizationArnProps <a name="AppfabricAppauthorizationArnProps" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps"></a>

Properties for building a appauthorization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

const appfabricAppauthorizationArnProps: appfabric.AppfabricAppauthorizationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps.property.appAuthorizationIdentifier">appAuthorizationIdentifier</a></code> | <code>string</code> | The AppAuthorizationIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps.property.appbundleId">appbundleId</a></code> | <code>string</code> | The AppbundleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appAuthorizationIdentifier`<sup>Required</sup> <a name="appAuthorizationIdentifier" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps.property.appAuthorizationIdentifier"></a>

```typescript
public readonly appAuthorizationIdentifier: string;
```

- *Type:* string

The AppAuthorizationIdentifier component of the ARN.

---

##### `appbundleId`<sup>Required</sup> <a name="appbundleId" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps.property.appbundleId"></a>

```typescript
public readonly appbundleId: string;
```

- *Type:* string

The AppbundleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppfabricAppbundleArnComponents <a name="AppfabricAppbundleArnComponents" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnComponents"></a>

Parsed components of a appbundle ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnComponents.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

const appfabricAppbundleArnComponents: appfabric.AppfabricAppbundleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppbundleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppbundleArnComponents.property.appBundleIdentifier">appBundleIdentifier</a></code> | <code>string</code> | The AppBundleIdentifier component. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppbundleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppbundleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appBundleIdentifier`<sup>Required</sup> <a name="appBundleIdentifier" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnComponents.property.appBundleIdentifier"></a>

```typescript
public readonly appBundleIdentifier: string;
```

- *Type:* string

The AppBundleIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppfabricAppbundleArnProps <a name="AppfabricAppbundleArnProps" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnProps"></a>

Properties for building a appbundle ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnProps.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

const appfabricAppbundleArnProps: appfabric.AppfabricAppbundleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppbundleArnProps.property.appBundleIdentifier">appBundleIdentifier</a></code> | <code>string</code> | The AppBundleIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppbundleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppbundleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricAppbundleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appBundleIdentifier`<sup>Required</sup> <a name="appBundleIdentifier" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnProps.property.appBundleIdentifier"></a>

```typescript
public readonly appBundleIdentifier: string;
```

- *Type:* string

The AppBundleIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appfabric.AppfabricAppbundleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppfabricIngestionArnComponents <a name="AppfabricIngestionArnComponents" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents"></a>

Parsed components of a ingestion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

const appfabricIngestionArnComponents: appfabric.AppfabricIngestionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents.property.appbundleId">appbundleId</a></code> | <code>string</code> | The AppbundleId component. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents.property.ingestionIdentifier">ingestionIdentifier</a></code> | <code>string</code> | The IngestionIdentifier component. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appbundleId`<sup>Required</sup> <a name="appbundleId" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents.property.appbundleId"></a>

```typescript
public readonly appbundleId: string;
```

- *Type:* string

The AppbundleId component.

---

##### `ingestionIdentifier`<sup>Required</sup> <a name="ingestionIdentifier" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents.property.ingestionIdentifier"></a>

```typescript
public readonly ingestionIdentifier: string;
```

- *Type:* string

The IngestionIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppfabricIngestionArnProps <a name="AppfabricIngestionArnProps" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnProps"></a>

Properties for building a ingestion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnProps.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

const appfabricIngestionArnProps: appfabric.AppfabricIngestionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestionArnProps.property.appbundleId">appbundleId</a></code> | <code>string</code> | The AppbundleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestionArnProps.property.ingestionIdentifier">ingestionIdentifier</a></code> | <code>string</code> | The IngestionIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appbundleId`<sup>Required</sup> <a name="appbundleId" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnProps.property.appbundleId"></a>

```typescript
public readonly appbundleId: string;
```

- *Type:* string

The AppbundleId component of the ARN.

---

##### `ingestionIdentifier`<sup>Required</sup> <a name="ingestionIdentifier" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnProps.property.ingestionIdentifier"></a>

```typescript
public readonly ingestionIdentifier: string;
```

- *Type:* string

The IngestionIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appfabric.AppfabricIngestionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppfabricIngestiondestinationArnComponents <a name="AppfabricIngestiondestinationArnComponents" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents"></a>

Parsed components of a ingestiondestination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

const appfabricIngestiondestinationArnComponents: appfabric.AppfabricIngestiondestinationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.appbundleId">appbundleId</a></code> | <code>string</code> | The AppbundleId component. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.ingestionDestinationIdentifier">ingestionDestinationIdentifier</a></code> | <code>string</code> | The IngestionDestinationIdentifier component. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.ingestionIdentifier">ingestionIdentifier</a></code> | <code>string</code> | The IngestionIdentifier component. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appbundleId`<sup>Required</sup> <a name="appbundleId" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.appbundleId"></a>

```typescript
public readonly appbundleId: string;
```

- *Type:* string

The AppbundleId component.

---

##### `ingestionDestinationIdentifier`<sup>Required</sup> <a name="ingestionDestinationIdentifier" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.ingestionDestinationIdentifier"></a>

```typescript
public readonly ingestionDestinationIdentifier: string;
```

- *Type:* string

The IngestionDestinationIdentifier component.

---

##### `ingestionIdentifier`<sup>Required</sup> <a name="ingestionIdentifier" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.ingestionIdentifier"></a>

```typescript
public readonly ingestionIdentifier: string;
```

- *Type:* string

The IngestionIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppfabricIngestiondestinationArnProps <a name="AppfabricIngestiondestinationArnProps" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps"></a>

Properties for building a ingestiondestination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

const appfabricIngestiondestinationArnProps: appfabric.AppfabricIngestiondestinationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.appbundleId">appbundleId</a></code> | <code>string</code> | The AppbundleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.ingestionDestinationIdentifier">ingestionDestinationIdentifier</a></code> | <code>string</code> | The IngestionDestinationIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.ingestionIdentifier">ingestionIdentifier</a></code> | <code>string</code> | The IngestionIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appbundleId`<sup>Required</sup> <a name="appbundleId" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.appbundleId"></a>

```typescript
public readonly appbundleId: string;
```

- *Type:* string

The AppbundleId component of the ARN.

---

##### `ingestionDestinationIdentifier`<sup>Required</sup> <a name="ingestionDestinationIdentifier" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.ingestionDestinationIdentifier"></a>

```typescript
public readonly ingestionDestinationIdentifier: string;
```

- *Type:* string

The IngestionDestinationIdentifier component of the ARN.

---

##### `ingestionIdentifier`<sup>Required</sup> <a name="ingestionIdentifier" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.ingestionIdentifier"></a>

```typescript
public readonly ingestionIdentifier: string;
```

- *Type:* string

The IngestionIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricActions <a name="AppfabricActions" id="@cdk_utils/iam.appfabric.AppfabricActions"></a>

IAM action constants for the appfabric service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appfabric.AppfabricActions.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

new appfabric.AppfabricActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.actionGetAppAuthorization">actionGetAppAuthorization</a></code> | <code>string</code> | [Read] appfabric:GetAppAuthorization. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.actionGetAppBundle">actionGetAppBundle</a></code> | <code>string</code> | [Read] appfabric:GetAppBundle. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.actionGetIngestion">actionGetIngestion</a></code> | <code>string</code> | [Read] appfabric:GetIngestion. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.actionGetIngestionDestination">actionGetIngestionDestination</a></code> | <code>string</code> | [Read] appfabric:GetIngestionDestination. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.BatchGetUserAccessTasks">BatchGetUserAccessTasks</a></code> | <code>string</code> | [Write] appfabric:BatchGetUserAccessTasks. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.ConnectAppAuthorization">ConnectAppAuthorization</a></code> | <code>string</code> | [Write] appfabric:ConnectAppAuthorization. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.CreateAppAuthorization">CreateAppAuthorization</a></code> | <code>string</code> | [Write] appfabric:CreateAppAuthorization. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.CreateAppBundle">CreateAppBundle</a></code> | <code>string</code> | [Write] appfabric:CreateAppBundle. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.CreateIngestion">CreateIngestion</a></code> | <code>string</code> | [Write] appfabric:CreateIngestion. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.CreateIngestionDestination">CreateIngestionDestination</a></code> | <code>string</code> | [Write] appfabric:CreateIngestionDestination. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.DeleteAppAuthorization">DeleteAppAuthorization</a></code> | <code>string</code> | [Write] appfabric:DeleteAppAuthorization. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.DeleteAppBundle">DeleteAppBundle</a></code> | <code>string</code> | [Write] appfabric:DeleteAppBundle. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.DeleteIngestion">DeleteIngestion</a></code> | <code>string</code> | [Write] appfabric:DeleteIngestion. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.DeleteIngestionDestination">DeleteIngestionDestination</a></code> | <code>string</code> | [Write] appfabric:DeleteIngestionDestination. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.ListAppAuthorizations">ListAppAuthorizations</a></code> | <code>string</code> | [List] appfabric:ListAppAuthorizations. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.ListAppBundles">ListAppBundles</a></code> | <code>string</code> | [List] appfabric:ListAppBundles. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.ListIngestionDestinations">ListIngestionDestinations</a></code> | <code>string</code> | [List] appfabric:ListIngestionDestinations. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.ListIngestions">ListIngestions</a></code> | <code>string</code> | [List] appfabric:ListIngestions. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] appfabric:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.StartIngestion">StartIngestion</a></code> | <code>string</code> | [Write] appfabric:StartIngestion. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.StartUserAccessTasks">StartUserAccessTasks</a></code> | <code>string</code> | [Write] appfabric:StartUserAccessTasks. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.StopIngestion">StopIngestion</a></code> | <code>string</code> | [Write] appfabric:StopIngestion. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] appfabric:TagResource. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] appfabric:UntagResource. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.UpdateAppAuthorization">UpdateAppAuthorization</a></code> | <code>string</code> | [Write] appfabric:UpdateAppAuthorization. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricActions.property.UpdateIngestionDestination">UpdateIngestionDestination</a></code> | <code>string</code> | [Write] appfabric:UpdateIngestionDestination. |

---

##### `actionGetAppAuthorization`<sup>Required</sup> <a name="actionGetAppAuthorization" id="@cdk_utils/iam.appfabric.AppfabricActions.property.actionGetAppAuthorization"></a>

```typescript
public readonly actionGetAppAuthorization: string;
```

- *Type:* string

[Read] appfabric:GetAppAuthorization.

---

##### `actionGetAppBundle`<sup>Required</sup> <a name="actionGetAppBundle" id="@cdk_utils/iam.appfabric.AppfabricActions.property.actionGetAppBundle"></a>

```typescript
public readonly actionGetAppBundle: string;
```

- *Type:* string

[Read] appfabric:GetAppBundle.

---

##### `actionGetIngestion`<sup>Required</sup> <a name="actionGetIngestion" id="@cdk_utils/iam.appfabric.AppfabricActions.property.actionGetIngestion"></a>

```typescript
public readonly actionGetIngestion: string;
```

- *Type:* string

[Read] appfabric:GetIngestion.

---

##### `actionGetIngestionDestination`<sup>Required</sup> <a name="actionGetIngestionDestination" id="@cdk_utils/iam.appfabric.AppfabricActions.property.actionGetIngestionDestination"></a>

```typescript
public readonly actionGetIngestionDestination: string;
```

- *Type:* string

[Read] appfabric:GetIngestionDestination.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.appfabric.AppfabricActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.appfabric.AppfabricActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.appfabric.AppfabricActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.appfabric.AppfabricActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.appfabric.AppfabricActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetUserAccessTasks`<sup>Required</sup> <a name="BatchGetUserAccessTasks" id="@cdk_utils/iam.appfabric.AppfabricActions.property.BatchGetUserAccessTasks"></a>

```typescript
public readonly BatchGetUserAccessTasks: string;
```

- *Type:* string

[Write] appfabric:BatchGetUserAccessTasks.

---

##### `ConnectAppAuthorization`<sup>Required</sup> <a name="ConnectAppAuthorization" id="@cdk_utils/iam.appfabric.AppfabricActions.property.ConnectAppAuthorization"></a>

```typescript
public readonly ConnectAppAuthorization: string;
```

- *Type:* string

[Write] appfabric:ConnectAppAuthorization.

---

##### `CreateAppAuthorization`<sup>Required</sup> <a name="CreateAppAuthorization" id="@cdk_utils/iam.appfabric.AppfabricActions.property.CreateAppAuthorization"></a>

```typescript
public readonly CreateAppAuthorization: string;
```

- *Type:* string

[Write] appfabric:CreateAppAuthorization.

---

##### `CreateAppBundle`<sup>Required</sup> <a name="CreateAppBundle" id="@cdk_utils/iam.appfabric.AppfabricActions.property.CreateAppBundle"></a>

```typescript
public readonly CreateAppBundle: string;
```

- *Type:* string

[Write] appfabric:CreateAppBundle.

---

##### `CreateIngestion`<sup>Required</sup> <a name="CreateIngestion" id="@cdk_utils/iam.appfabric.AppfabricActions.property.CreateIngestion"></a>

```typescript
public readonly CreateIngestion: string;
```

- *Type:* string

[Write] appfabric:CreateIngestion.

---

##### `CreateIngestionDestination`<sup>Required</sup> <a name="CreateIngestionDestination" id="@cdk_utils/iam.appfabric.AppfabricActions.property.CreateIngestionDestination"></a>

```typescript
public readonly CreateIngestionDestination: string;
```

- *Type:* string

[Write] appfabric:CreateIngestionDestination.

---

##### `DeleteAppAuthorization`<sup>Required</sup> <a name="DeleteAppAuthorization" id="@cdk_utils/iam.appfabric.AppfabricActions.property.DeleteAppAuthorization"></a>

```typescript
public readonly DeleteAppAuthorization: string;
```

- *Type:* string

[Write] appfabric:DeleteAppAuthorization.

---

##### `DeleteAppBundle`<sup>Required</sup> <a name="DeleteAppBundle" id="@cdk_utils/iam.appfabric.AppfabricActions.property.DeleteAppBundle"></a>

```typescript
public readonly DeleteAppBundle: string;
```

- *Type:* string

[Write] appfabric:DeleteAppBundle.

---

##### `DeleteIngestion`<sup>Required</sup> <a name="DeleteIngestion" id="@cdk_utils/iam.appfabric.AppfabricActions.property.DeleteIngestion"></a>

```typescript
public readonly DeleteIngestion: string;
```

- *Type:* string

[Write] appfabric:DeleteIngestion.

---

##### `DeleteIngestionDestination`<sup>Required</sup> <a name="DeleteIngestionDestination" id="@cdk_utils/iam.appfabric.AppfabricActions.property.DeleteIngestionDestination"></a>

```typescript
public readonly DeleteIngestionDestination: string;
```

- *Type:* string

[Write] appfabric:DeleteIngestionDestination.

---

##### `ListAppAuthorizations`<sup>Required</sup> <a name="ListAppAuthorizations" id="@cdk_utils/iam.appfabric.AppfabricActions.property.ListAppAuthorizations"></a>

```typescript
public readonly ListAppAuthorizations: string;
```

- *Type:* string

[List] appfabric:ListAppAuthorizations.

---

##### `ListAppBundles`<sup>Required</sup> <a name="ListAppBundles" id="@cdk_utils/iam.appfabric.AppfabricActions.property.ListAppBundles"></a>

```typescript
public readonly ListAppBundles: string;
```

- *Type:* string

[List] appfabric:ListAppBundles.

---

##### `ListIngestionDestinations`<sup>Required</sup> <a name="ListIngestionDestinations" id="@cdk_utils/iam.appfabric.AppfabricActions.property.ListIngestionDestinations"></a>

```typescript
public readonly ListIngestionDestinations: string;
```

- *Type:* string

[List] appfabric:ListIngestionDestinations.

---

##### `ListIngestions`<sup>Required</sup> <a name="ListIngestions" id="@cdk_utils/iam.appfabric.AppfabricActions.property.ListIngestions"></a>

```typescript
public readonly ListIngestions: string;
```

- *Type:* string

[List] appfabric:ListIngestions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appfabric.AppfabricActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] appfabric:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.appfabric.AppfabricActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartIngestion`<sup>Required</sup> <a name="StartIngestion" id="@cdk_utils/iam.appfabric.AppfabricActions.property.StartIngestion"></a>

```typescript
public readonly StartIngestion: string;
```

- *Type:* string

[Write] appfabric:StartIngestion.

---

##### `StartUserAccessTasks`<sup>Required</sup> <a name="StartUserAccessTasks" id="@cdk_utils/iam.appfabric.AppfabricActions.property.StartUserAccessTasks"></a>

```typescript
public readonly StartUserAccessTasks: string;
```

- *Type:* string

[Write] appfabric:StartUserAccessTasks.

---

##### `StopIngestion`<sup>Required</sup> <a name="StopIngestion" id="@cdk_utils/iam.appfabric.AppfabricActions.property.StopIngestion"></a>

```typescript
public readonly StopIngestion: string;
```

- *Type:* string

[Write] appfabric:StopIngestion.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appfabric.AppfabricActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] appfabric:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appfabric.AppfabricActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] appfabric:UntagResource.

---

##### `UpdateAppAuthorization`<sup>Required</sup> <a name="UpdateAppAuthorization" id="@cdk_utils/iam.appfabric.AppfabricActions.property.UpdateAppAuthorization"></a>

```typescript
public readonly UpdateAppAuthorization: string;
```

- *Type:* string

[Write] appfabric:UpdateAppAuthorization.

---

##### `UpdateIngestionDestination`<sup>Required</sup> <a name="UpdateIngestionDestination" id="@cdk_utils/iam.appfabric.AppfabricActions.property.UpdateIngestionDestination"></a>

```typescript
public readonly UpdateIngestionDestination: string;
```

- *Type:* string

[Write] appfabric:UpdateIngestionDestination.

---

### AppfabricConditions <a name="AppfabricConditions" id="@cdk_utils/iam.appfabric.AppfabricConditions"></a>

Condition key constants and builders for appfabric.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appfabric.AppfabricConditions.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

new appfabric.AppfabricConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.appfabric.AppfabricConditions.requestTag"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appfabric.AppfabricConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.appfabric.AppfabricConditions.resourceTag"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appfabric.AppfabricConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.tagKeys"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.appfabric.AppfabricConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.actionGetAppAuthorizationConditionKeys">actionGetAppAuthorizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAppAuthorization action. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.actionGetAppBundleConditionKeys">actionGetAppBundleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAppBundle action. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.actionGetIngestionConditionKeys">actionGetIngestionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIngestion action. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.actionGetIngestionDestinationConditionKeys">actionGetIngestionDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIngestionDestination action. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.CreateAppAuthorizationConditionKeys">CreateAppAuthorizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAppAuthorization action. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.CreateAppBundleConditionKeys">CreateAppBundleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAppBundle action. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.CreateIngestionConditionKeys">CreateIngestionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIngestion action. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.CreateIngestionDestinationConditionKeys">CreateIngestionDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIngestionDestination action. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.UpdateAppAuthorizationConditionKeys">UpdateAppAuthorizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAppAuthorization action. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricConditions.property.UpdateIngestionDestinationConditionKeys">UpdateIngestionDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateIngestionDestination action. |

---

##### `actionGetAppAuthorizationConditionKeys`<sup>Required</sup> <a name="actionGetAppAuthorizationConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.actionGetAppAuthorizationConditionKeys"></a>

```typescript
public readonly actionGetAppAuthorizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAppAuthorization action.

---

##### `actionGetAppBundleConditionKeys`<sup>Required</sup> <a name="actionGetAppBundleConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.actionGetAppBundleConditionKeys"></a>

```typescript
public readonly actionGetAppBundleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAppBundle action.

---

##### `actionGetIngestionConditionKeys`<sup>Required</sup> <a name="actionGetIngestionConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.actionGetIngestionConditionKeys"></a>

```typescript
public readonly actionGetIngestionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIngestion action.

---

##### `actionGetIngestionDestinationConditionKeys`<sup>Required</sup> <a name="actionGetIngestionDestinationConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.actionGetIngestionDestinationConditionKeys"></a>

```typescript
public readonly actionGetIngestionDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIngestionDestination action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAppAuthorizationConditionKeys`<sup>Required</sup> <a name="CreateAppAuthorizationConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.CreateAppAuthorizationConditionKeys"></a>

```typescript
public readonly CreateAppAuthorizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAppAuthorization action.

---

##### `CreateAppBundleConditionKeys`<sup>Required</sup> <a name="CreateAppBundleConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.CreateAppBundleConditionKeys"></a>

```typescript
public readonly CreateAppBundleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAppBundle action.

---

##### `CreateIngestionConditionKeys`<sup>Required</sup> <a name="CreateIngestionConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.CreateIngestionConditionKeys"></a>

```typescript
public readonly CreateIngestionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIngestion action.

---

##### `CreateIngestionDestinationConditionKeys`<sup>Required</sup> <a name="CreateIngestionDestinationConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.CreateIngestionDestinationConditionKeys"></a>

```typescript
public readonly CreateIngestionDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIngestionDestination action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAppAuthorizationConditionKeys`<sup>Required</sup> <a name="UpdateAppAuthorizationConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.UpdateAppAuthorizationConditionKeys"></a>

```typescript
public readonly UpdateAppAuthorizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAppAuthorization action.

---

##### `UpdateIngestionDestinationConditionKeys`<sup>Required</sup> <a name="UpdateIngestionDestinationConditionKeys" id="@cdk_utils/iam.appfabric.AppfabricConditions.property.UpdateIngestionDestinationConditionKeys"></a>

```typescript
public readonly UpdateIngestionDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateIngestionDestination action.

---

### AppfabricOperations <a name="AppfabricOperations" id="@cdk_utils/iam.appfabric.AppfabricOperations"></a>

API operation to required IAM actions mapping for appfabric.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appfabric.AppfabricOperations.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

new appfabric.AppfabricOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.BatchGetUserAccessTasks">BatchGetUserAccessTasks</a></code> | <code>string[]</code> | IAM actions required for the BatchGetUserAccessTasks API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.ConnectAppAuthorization">ConnectAppAuthorization</a></code> | <code>string[]</code> | IAM actions required for the ConnectAppAuthorization API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.CreateAppAuthorization">CreateAppAuthorization</a></code> | <code>string[]</code> | IAM actions required for the CreateAppAuthorization API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.CreateAppBundle">CreateAppBundle</a></code> | <code>string[]</code> | IAM actions required for the CreateAppBundle API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.CreateIngestion">CreateIngestion</a></code> | <code>string[]</code> | IAM actions required for the CreateIngestion API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.CreateIngestionDestination">CreateIngestionDestination</a></code> | <code>string[]</code> | IAM actions required for the CreateIngestionDestination API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.DeleteAppAuthorization">DeleteAppAuthorization</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppAuthorization API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.DeleteAppBundle">DeleteAppBundle</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppBundle API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.DeleteIngestion">DeleteIngestion</a></code> | <code>string[]</code> | IAM actions required for the DeleteIngestion API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.DeleteIngestionDestination">DeleteIngestionDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteIngestionDestination API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.ListAppAuthorizations">ListAppAuthorizations</a></code> | <code>string[]</code> | IAM actions required for the ListAppAuthorizations API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.ListAppBundles">ListAppBundles</a></code> | <code>string[]</code> | IAM actions required for the ListAppBundles API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.ListIngestionDestinations">ListIngestionDestinations</a></code> | <code>string[]</code> | IAM actions required for the ListIngestionDestinations API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.ListIngestions">ListIngestions</a></code> | <code>string[]</code> | IAM actions required for the ListIngestions API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.opGetAppAuthorization">opGetAppAuthorization</a></code> | <code>string[]</code> | IAM actions required for the GetAppAuthorization API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.opGetAppBundle">opGetAppBundle</a></code> | <code>string[]</code> | IAM actions required for the GetAppBundle API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.opGetIngestion">opGetIngestion</a></code> | <code>string[]</code> | IAM actions required for the GetIngestion API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.opGetIngestionDestination">opGetIngestionDestination</a></code> | <code>string[]</code> | IAM actions required for the GetIngestionDestination API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.StartIngestion">StartIngestion</a></code> | <code>string[]</code> | IAM actions required for the StartIngestion API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.StartUserAccessTasks">StartUserAccessTasks</a></code> | <code>string[]</code> | IAM actions required for the StartUserAccessTasks API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.StopIngestion">StopIngestion</a></code> | <code>string[]</code> | IAM actions required for the StopIngestion API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.UpdateAppAuthorization">UpdateAppAuthorization</a></code> | <code>string[]</code> | IAM actions required for the UpdateAppAuthorization API call. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricOperations.property.UpdateIngestionDestination">UpdateIngestionDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateIngestionDestination API call. |

---

##### `BatchGetUserAccessTasks`<sup>Required</sup> <a name="BatchGetUserAccessTasks" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.BatchGetUserAccessTasks"></a>

```typescript
public readonly BatchGetUserAccessTasks: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetUserAccessTasks API call.

---

##### `ConnectAppAuthorization`<sup>Required</sup> <a name="ConnectAppAuthorization" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.ConnectAppAuthorization"></a>

```typescript
public readonly ConnectAppAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the ConnectAppAuthorization API call.

---

##### `CreateAppAuthorization`<sup>Required</sup> <a name="CreateAppAuthorization" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.CreateAppAuthorization"></a>

```typescript
public readonly CreateAppAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppAuthorization API call.

---

##### `CreateAppBundle`<sup>Required</sup> <a name="CreateAppBundle" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.CreateAppBundle"></a>

```typescript
public readonly CreateAppBundle: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppBundle API call.

---

##### `CreateIngestion`<sup>Required</sup> <a name="CreateIngestion" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.CreateIngestion"></a>

```typescript
public readonly CreateIngestion: string[];
```

- *Type:* string[]

IAM actions required for the CreateIngestion API call.

---

##### `CreateIngestionDestination`<sup>Required</sup> <a name="CreateIngestionDestination" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.CreateIngestionDestination"></a>

```typescript
public readonly CreateIngestionDestination: string[];
```

- *Type:* string[]

IAM actions required for the CreateIngestionDestination API call.

---

##### `DeleteAppAuthorization`<sup>Required</sup> <a name="DeleteAppAuthorization" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.DeleteAppAuthorization"></a>

```typescript
public readonly DeleteAppAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppAuthorization API call.

---

##### `DeleteAppBundle`<sup>Required</sup> <a name="DeleteAppBundle" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.DeleteAppBundle"></a>

```typescript
public readonly DeleteAppBundle: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppBundle API call.

---

##### `DeleteIngestion`<sup>Required</sup> <a name="DeleteIngestion" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.DeleteIngestion"></a>

```typescript
public readonly DeleteIngestion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIngestion API call.

---

##### `DeleteIngestionDestination`<sup>Required</sup> <a name="DeleteIngestionDestination" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.DeleteIngestionDestination"></a>

```typescript
public readonly DeleteIngestionDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIngestionDestination API call.

---

##### `ListAppAuthorizations`<sup>Required</sup> <a name="ListAppAuthorizations" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.ListAppAuthorizations"></a>

```typescript
public readonly ListAppAuthorizations: string[];
```

- *Type:* string[]

IAM actions required for the ListAppAuthorizations API call.

---

##### `ListAppBundles`<sup>Required</sup> <a name="ListAppBundles" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.ListAppBundles"></a>

```typescript
public readonly ListAppBundles: string[];
```

- *Type:* string[]

IAM actions required for the ListAppBundles API call.

---

##### `ListIngestionDestinations`<sup>Required</sup> <a name="ListIngestionDestinations" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.ListIngestionDestinations"></a>

```typescript
public readonly ListIngestionDestinations: string[];
```

- *Type:* string[]

IAM actions required for the ListIngestionDestinations API call.

---

##### `ListIngestions`<sup>Required</sup> <a name="ListIngestions" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.ListIngestions"></a>

```typescript
public readonly ListIngestions: string[];
```

- *Type:* string[]

IAM actions required for the ListIngestions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAppAuthorization`<sup>Required</sup> <a name="opGetAppAuthorization" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.opGetAppAuthorization"></a>

```typescript
public readonly opGetAppAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the GetAppAuthorization API call.

---

##### `opGetAppBundle`<sup>Required</sup> <a name="opGetAppBundle" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.opGetAppBundle"></a>

```typescript
public readonly opGetAppBundle: string[];
```

- *Type:* string[]

IAM actions required for the GetAppBundle API call.

---

##### `opGetIngestion`<sup>Required</sup> <a name="opGetIngestion" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.opGetIngestion"></a>

```typescript
public readonly opGetIngestion: string[];
```

- *Type:* string[]

IAM actions required for the GetIngestion API call.

---

##### `opGetIngestionDestination`<sup>Required</sup> <a name="opGetIngestionDestination" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.opGetIngestionDestination"></a>

```typescript
public readonly opGetIngestionDestination: string[];
```

- *Type:* string[]

IAM actions required for the GetIngestionDestination API call.

---

##### `StartIngestion`<sup>Required</sup> <a name="StartIngestion" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.StartIngestion"></a>

```typescript
public readonly StartIngestion: string[];
```

- *Type:* string[]

IAM actions required for the StartIngestion API call.

---

##### `StartUserAccessTasks`<sup>Required</sup> <a name="StartUserAccessTasks" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.StartUserAccessTasks"></a>

```typescript
public readonly StartUserAccessTasks: string[];
```

- *Type:* string[]

IAM actions required for the StartUserAccessTasks API call.

---

##### `StopIngestion`<sup>Required</sup> <a name="StopIngestion" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.StopIngestion"></a>

```typescript
public readonly StopIngestion: string[];
```

- *Type:* string[]

IAM actions required for the StopIngestion API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAppAuthorization`<sup>Required</sup> <a name="UpdateAppAuthorization" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.UpdateAppAuthorization"></a>

```typescript
public readonly UpdateAppAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAppAuthorization API call.

---

##### `UpdateIngestionDestination`<sup>Required</sup> <a name="UpdateIngestionDestination" id="@cdk_utils/iam.appfabric.AppfabricOperations.property.UpdateIngestionDestination"></a>

```typescript
public readonly UpdateIngestionDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIngestionDestination API call.

---

### AppfabricResources <a name="AppfabricResources" id="@cdk_utils/iam.appfabric.AppfabricResources"></a>

ARN builders, validators, and parsers for appfabric resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appfabric.AppfabricResources.Initializer"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

new appfabric.AppfabricResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.appauthorization">appauthorization</a></code> | Builds an ARN for the appauthorization resource. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.appbundle">appbundle</a></code> | Builds an ARN for the appbundle resource. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.ingestion">ingestion</a></code> | Builds an ARN for the ingestion resource. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.ingestiondestination">ingestiondestination</a></code> | Builds an ARN for the ingestiondestination resource. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.isValidAppauthorizationArn">isValidAppauthorizationArn</a></code> | Validates whether a string is a valid ARN for the appauthorization resource. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.isValidAppbundleArn">isValidAppbundleArn</a></code> | Validates whether a string is a valid ARN for the appbundle resource. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.isValidIngestionArn">isValidIngestionArn</a></code> | Validates whether a string is a valid ARN for the ingestion resource. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.isValidIngestiondestinationArn">isValidIngestiondestinationArn</a></code> | Validates whether a string is a valid ARN for the ingestiondestination resource. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.parseAppauthorizationArn">parseAppauthorizationArn</a></code> | Parses a appauthorization ARN into its components. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.parseAppbundleArn">parseAppbundleArn</a></code> | Parses a appbundle ARN into its components. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.parseIngestionArn">parseIngestionArn</a></code> | Parses a ingestion ARN into its components. |
| <code><a href="#@cdk_utils/iam.appfabric.AppfabricResources.parseIngestiondestinationArn">parseIngestiondestinationArn</a></code> | Parses a ingestiondestination ARN into its components. |

---

##### `appauthorization` <a name="appauthorization" id="@cdk_utils/iam.appfabric.AppfabricResources.appauthorization"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.appauthorization(props: AppfabricAppauthorizationArnProps)
```

Builds an ARN for the appauthorization resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appfabric.AppfabricResources.appauthorization.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appfabric.AppfabricAppauthorizationArnProps">AppfabricAppauthorizationArnProps</a>

---

##### `appbundle` <a name="appbundle" id="@cdk_utils/iam.appfabric.AppfabricResources.appbundle"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.appbundle(props: AppfabricAppbundleArnProps)
```

Builds an ARN for the appbundle resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appfabric.AppfabricResources.appbundle.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appfabric.AppfabricAppbundleArnProps">AppfabricAppbundleArnProps</a>

---

##### `ingestion` <a name="ingestion" id="@cdk_utils/iam.appfabric.AppfabricResources.ingestion"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.ingestion(props: AppfabricIngestionArnProps)
```

Builds an ARN for the ingestion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appfabric.AppfabricResources.ingestion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appfabric.AppfabricIngestionArnProps">AppfabricIngestionArnProps</a>

---

##### `ingestiondestination` <a name="ingestiondestination" id="@cdk_utils/iam.appfabric.AppfabricResources.ingestiondestination"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.ingestiondestination(props: AppfabricIngestiondestinationArnProps)
```

Builds an ARN for the ingestiondestination resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appfabric.AppfabricResources.ingestiondestination.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appfabric.AppfabricIngestiondestinationArnProps">AppfabricIngestiondestinationArnProps</a>

---

##### `isValidAppauthorizationArn` <a name="isValidAppauthorizationArn" id="@cdk_utils/iam.appfabric.AppfabricResources.isValidAppauthorizationArn"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.isValidAppauthorizationArn(arn: string)
```

Validates whether a string is a valid ARN for the appauthorization resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appfabric.AppfabricResources.isValidAppauthorizationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAppbundleArn` <a name="isValidAppbundleArn" id="@cdk_utils/iam.appfabric.AppfabricResources.isValidAppbundleArn"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.isValidAppbundleArn(arn: string)
```

Validates whether a string is a valid ARN for the appbundle resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appfabric.AppfabricResources.isValidAppbundleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIngestionArn` <a name="isValidIngestionArn" id="@cdk_utils/iam.appfabric.AppfabricResources.isValidIngestionArn"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.isValidIngestionArn(arn: string)
```

Validates whether a string is a valid ARN for the ingestion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appfabric.AppfabricResources.isValidIngestionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIngestiondestinationArn` <a name="isValidIngestiondestinationArn" id="@cdk_utils/iam.appfabric.AppfabricResources.isValidIngestiondestinationArn"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.isValidIngestiondestinationArn(arn: string)
```

Validates whether a string is a valid ARN for the ingestiondestination resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appfabric.AppfabricResources.isValidIngestiondestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppauthorizationArn` <a name="parseAppauthorizationArn" id="@cdk_utils/iam.appfabric.AppfabricResources.parseAppauthorizationArn"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.parseAppauthorizationArn(arn: string)
```

Parses a appauthorization ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appfabric.AppfabricResources.parseAppauthorizationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppbundleArn` <a name="parseAppbundleArn" id="@cdk_utils/iam.appfabric.AppfabricResources.parseAppbundleArn"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.parseAppbundleArn(arn: string)
```

Parses a appbundle ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appfabric.AppfabricResources.parseAppbundleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIngestionArn` <a name="parseIngestionArn" id="@cdk_utils/iam.appfabric.AppfabricResources.parseIngestionArn"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.parseIngestionArn(arn: string)
```

Parses a ingestion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appfabric.AppfabricResources.parseIngestionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIngestiondestinationArn` <a name="parseIngestiondestinationArn" id="@cdk_utils/iam.appfabric.AppfabricResources.parseIngestiondestinationArn"></a>

```typescript
import { appfabric } from '@cdk_utils/iam'

appfabric.AppfabricResources.parseIngestiondestinationArn(arn: string)
```

Parses a ingestiondestination ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appfabric.AppfabricResources.parseIngestiondestinationArn.parameter.arn"></a>

- *Type:* string

---




