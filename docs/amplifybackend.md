# `amplifybackend` Submodule <a name="`amplifybackend` Submodule" id="@cdk_utils/iam.amplifybackend"></a>


## Structs <a name="Structs" id="Structs"></a>

### AmplifybackendAPIArnComponents <a name="AmplifybackendAPIArnComponents" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnComponents"></a>

Parsed components of a api ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnComponents.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendAPIArnComponents: amplifybackend.AmplifybackendAPIArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifybackendAPIArnProps <a name="AmplifybackendAPIArnProps" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnProps"></a>

Properties for building a api ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnProps.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendAPIArnProps: amplifybackend.AmplifybackendAPIArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifybackendAuthArnComponents <a name="AmplifybackendAuthArnComponents" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnComponents"></a>

Parsed components of a auth ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnComponents.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendAuthArnComponents: amplifybackend.AmplifybackendAuthArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifybackendAuthArnProps <a name="AmplifybackendAuthArnProps" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnProps"></a>

Properties for building a auth ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnProps.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendAuthArnProps: amplifybackend.AmplifybackendAuthArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifybackendBackendArnComponents <a name="AmplifybackendBackendArnComponents" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnComponents"></a>

Parsed components of a backend ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnComponents.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendBackendArnComponents: amplifybackend.AmplifybackendBackendArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifybackendBackendArnProps <a name="AmplifybackendBackendArnProps" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnProps"></a>

Properties for building a backend ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnProps.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendBackendArnProps: amplifybackend.AmplifybackendBackendArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifybackendConfigArnComponents <a name="AmplifybackendConfigArnComponents" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnComponents"></a>

Parsed components of a config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnComponents.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendConfigArnComponents: amplifybackend.AmplifybackendConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifybackendConfigArnProps <a name="AmplifybackendConfigArnProps" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnProps"></a>

Properties for building a config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnProps.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendConfigArnProps: amplifybackend.AmplifybackendConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifybackendCreatedBackendArnComponents <a name="AmplifybackendCreatedBackendArnComponents" id="@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnComponents"></a>

Parsed components of a created-backend ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnComponents.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendCreatedBackendArnComponents: amplifybackend.AmplifybackendCreatedBackendArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifybackendCreatedBackendArnProps <a name="AmplifybackendCreatedBackendArnProps" id="@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnProps"></a>

Properties for building a created-backend ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnProps.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendCreatedBackendArnProps: amplifybackend.AmplifybackendCreatedBackendArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifybackendEnvironmentArnComponents <a name="AmplifybackendEnvironmentArnComponents" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnComponents.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendEnvironmentArnComponents: amplifybackend.AmplifybackendEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifybackendEnvironmentArnProps <a name="AmplifybackendEnvironmentArnProps" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnProps.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendEnvironmentArnProps: amplifybackend.AmplifybackendEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifybackendJobArnComponents <a name="AmplifybackendJobArnComponents" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnComponents"></a>

Parsed components of a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnComponents.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendJobArnComponents: amplifybackend.AmplifybackendJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendJobArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifybackendJobArnProps <a name="AmplifybackendJobArnProps" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnProps"></a>

Properties for building a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnProps.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendJobArnProps: amplifybackend.AmplifybackendJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendJobArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifybackendStorageArnComponents <a name="AmplifybackendStorageArnComponents" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnComponents"></a>

Parsed components of a storage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnComponents.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendStorageArnComponents: amplifybackend.AmplifybackendStorageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifybackendStorageArnProps <a name="AmplifybackendStorageArnProps" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnProps"></a>

Properties for building a storage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnProps.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendStorageArnProps: amplifybackend.AmplifybackendStorageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AmplifybackendTokenArnComponents <a name="AmplifybackendTokenArnComponents" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnComponents"></a>

Parsed components of a token ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnComponents.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendTokenArnComponents: amplifybackend.AmplifybackendTokenArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AmplifybackendTokenArnProps <a name="AmplifybackendTokenArnProps" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnProps"></a>

Properties for building a token ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnProps.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

const amplifybackendTokenArnProps: amplifybackend.AmplifybackendTokenArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifybackendActions <a name="AmplifybackendActions" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions"></a>

IAM action constants for the amplifybackend service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

new amplifybackend.AmplifybackendActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackend">actionGetBackend</a></code> | <code>string</code> | [Read] amplifybackend:GetBackend. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackendAPI">actionGetBackendAPI</a></code> | <code>string</code> | [Read] amplifybackend:GetBackendAPI. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackendAPIModels">actionGetBackendAPIModels</a></code> | <code>string</code> | [Read] amplifybackend:GetBackendAPIModels. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackendAuth">actionGetBackendAuth</a></code> | <code>string</code> | [Read] amplifybackend:GetBackendAuth. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackendJob">actionGetBackendJob</a></code> | <code>string</code> | [Read] amplifybackend:GetBackendJob. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackendStorage">actionGetBackendStorage</a></code> | <code>string</code> | [Read] amplifybackend:GetBackendStorage. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetToken">actionGetToken</a></code> | <code>string</code> | [Read] amplifybackend:GetToken. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CloneBackend">CloneBackend</a></code> | <code>string</code> | [Write] amplifybackend:CloneBackend. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateBackend">CreateBackend</a></code> | <code>string</code> | [Write] amplifybackend:CreateBackend. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateBackendAPI">CreateBackendAPI</a></code> | <code>string</code> | [Write] amplifybackend:CreateBackendAPI. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateBackendAuth">CreateBackendAuth</a></code> | <code>string</code> | [Write] amplifybackend:CreateBackendAuth. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateBackendConfig">CreateBackendConfig</a></code> | <code>string</code> | [Write] amplifybackend:CreateBackendConfig. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateBackendStorage">CreateBackendStorage</a></code> | <code>string</code> | [Write] amplifybackend:CreateBackendStorage. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateToken">CreateToken</a></code> | <code>string</code> | [Write] amplifybackend:CreateToken. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.DeleteBackend">DeleteBackend</a></code> | <code>string</code> | [Write] amplifybackend:DeleteBackend. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.DeleteBackendAPI">DeleteBackendAPI</a></code> | <code>string</code> | [Write] amplifybackend:DeleteBackendAPI. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.DeleteBackendAuth">DeleteBackendAuth</a></code> | <code>string</code> | [Write] amplifybackend:DeleteBackendAuth. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.DeleteBackendStorage">DeleteBackendStorage</a></code> | <code>string</code> | [Write] amplifybackend:DeleteBackendStorage. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.DeleteToken">DeleteToken</a></code> | <code>string</code> | [Write] amplifybackend:DeleteToken. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.GenerateBackendAPIModels">GenerateBackendAPIModels</a></code> | <code>string</code> | [Write] amplifybackend:GenerateBackendAPIModels. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.ImportBackendAuth">ImportBackendAuth</a></code> | <code>string</code> | [Write] amplifybackend:ImportBackendAuth. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.ImportBackendStorage">ImportBackendStorage</a></code> | <code>string</code> | [Write] amplifybackend:ImportBackendStorage. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.ListBackendJobs">ListBackendJobs</a></code> | <code>string</code> | [List] amplifybackend:ListBackendJobs. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.ListS3Buckets">ListS3Buckets</a></code> | <code>string</code> | [List] amplifybackend:ListS3Buckets. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.RemoveAllBackends">RemoveAllBackends</a></code> | <code>string</code> | [Write] amplifybackend:RemoveAllBackends. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.RemoveBackendConfig">RemoveBackendConfig</a></code> | <code>string</code> | [Write] amplifybackend:RemoveBackendConfig. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.UpdateBackendAPI">UpdateBackendAPI</a></code> | <code>string</code> | [Write] amplifybackend:UpdateBackendAPI. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.UpdateBackendAuth">UpdateBackendAuth</a></code> | <code>string</code> | [Write] amplifybackend:UpdateBackendAuth. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.UpdateBackendConfig">UpdateBackendConfig</a></code> | <code>string</code> | [Write] amplifybackend:UpdateBackendConfig. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.UpdateBackendJob">UpdateBackendJob</a></code> | <code>string</code> | [Write] amplifybackend:UpdateBackendJob. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.UpdateBackendStorage">UpdateBackendStorage</a></code> | <code>string</code> | [Write] amplifybackend:UpdateBackendStorage. |

---

##### `actionGetBackend`<sup>Required</sup> <a name="actionGetBackend" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackend"></a>

```typescript
public readonly actionGetBackend: string;
```

- *Type:* string

[Read] amplifybackend:GetBackend.

---

##### `actionGetBackendAPI`<sup>Required</sup> <a name="actionGetBackendAPI" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackendAPI"></a>

```typescript
public readonly actionGetBackendAPI: string;
```

- *Type:* string

[Read] amplifybackend:GetBackendAPI.

---

##### `actionGetBackendAPIModels`<sup>Required</sup> <a name="actionGetBackendAPIModels" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackendAPIModels"></a>

```typescript
public readonly actionGetBackendAPIModels: string;
```

- *Type:* string

[Read] amplifybackend:GetBackendAPIModels.

---

##### `actionGetBackendAuth`<sup>Required</sup> <a name="actionGetBackendAuth" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackendAuth"></a>

```typescript
public readonly actionGetBackendAuth: string;
```

- *Type:* string

[Read] amplifybackend:GetBackendAuth.

---

##### `actionGetBackendJob`<sup>Required</sup> <a name="actionGetBackendJob" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackendJob"></a>

```typescript
public readonly actionGetBackendJob: string;
```

- *Type:* string

[Read] amplifybackend:GetBackendJob.

---

##### `actionGetBackendStorage`<sup>Required</sup> <a name="actionGetBackendStorage" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetBackendStorage"></a>

```typescript
public readonly actionGetBackendStorage: string;
```

- *Type:* string

[Read] amplifybackend:GetBackendStorage.

---

##### `actionGetToken`<sup>Required</sup> <a name="actionGetToken" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.actionGetToken"></a>

```typescript
public readonly actionGetToken: string;
```

- *Type:* string

[Read] amplifybackend:GetToken.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CloneBackend`<sup>Required</sup> <a name="CloneBackend" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CloneBackend"></a>

```typescript
public readonly CloneBackend: string;
```

- *Type:* string

[Write] amplifybackend:CloneBackend.

---

##### `CreateBackend`<sup>Required</sup> <a name="CreateBackend" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateBackend"></a>

```typescript
public readonly CreateBackend: string;
```

- *Type:* string

[Write] amplifybackend:CreateBackend.

---

##### `CreateBackendAPI`<sup>Required</sup> <a name="CreateBackendAPI" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateBackendAPI"></a>

```typescript
public readonly CreateBackendAPI: string;
```

- *Type:* string

[Write] amplifybackend:CreateBackendAPI.

---

##### `CreateBackendAuth`<sup>Required</sup> <a name="CreateBackendAuth" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateBackendAuth"></a>

```typescript
public readonly CreateBackendAuth: string;
```

- *Type:* string

[Write] amplifybackend:CreateBackendAuth.

---

##### `CreateBackendConfig`<sup>Required</sup> <a name="CreateBackendConfig" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateBackendConfig"></a>

```typescript
public readonly CreateBackendConfig: string;
```

- *Type:* string

[Write] amplifybackend:CreateBackendConfig.

---

##### `CreateBackendStorage`<sup>Required</sup> <a name="CreateBackendStorage" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateBackendStorage"></a>

```typescript
public readonly CreateBackendStorage: string;
```

- *Type:* string

[Write] amplifybackend:CreateBackendStorage.

---

##### `CreateToken`<sup>Required</sup> <a name="CreateToken" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.CreateToken"></a>

```typescript
public readonly CreateToken: string;
```

- *Type:* string

[Write] amplifybackend:CreateToken.

---

##### `DeleteBackend`<sup>Required</sup> <a name="DeleteBackend" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.DeleteBackend"></a>

```typescript
public readonly DeleteBackend: string;
```

- *Type:* string

[Write] amplifybackend:DeleteBackend.

---

##### `DeleteBackendAPI`<sup>Required</sup> <a name="DeleteBackendAPI" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.DeleteBackendAPI"></a>

```typescript
public readonly DeleteBackendAPI: string;
```

- *Type:* string

[Write] amplifybackend:DeleteBackendAPI.

---

##### `DeleteBackendAuth`<sup>Required</sup> <a name="DeleteBackendAuth" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.DeleteBackendAuth"></a>

```typescript
public readonly DeleteBackendAuth: string;
```

- *Type:* string

[Write] amplifybackend:DeleteBackendAuth.

---

##### `DeleteBackendStorage`<sup>Required</sup> <a name="DeleteBackendStorage" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.DeleteBackendStorage"></a>

```typescript
public readonly DeleteBackendStorage: string;
```

- *Type:* string

[Write] amplifybackend:DeleteBackendStorage.

---

##### `DeleteToken`<sup>Required</sup> <a name="DeleteToken" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.DeleteToken"></a>

```typescript
public readonly DeleteToken: string;
```

- *Type:* string

[Write] amplifybackend:DeleteToken.

---

##### `GenerateBackendAPIModels`<sup>Required</sup> <a name="GenerateBackendAPIModels" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.GenerateBackendAPIModels"></a>

```typescript
public readonly GenerateBackendAPIModels: string;
```

- *Type:* string

[Write] amplifybackend:GenerateBackendAPIModels.

---

##### `ImportBackendAuth`<sup>Required</sup> <a name="ImportBackendAuth" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.ImportBackendAuth"></a>

```typescript
public readonly ImportBackendAuth: string;
```

- *Type:* string

[Write] amplifybackend:ImportBackendAuth.

---

##### `ImportBackendStorage`<sup>Required</sup> <a name="ImportBackendStorage" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.ImportBackendStorage"></a>

```typescript
public readonly ImportBackendStorage: string;
```

- *Type:* string

[Write] amplifybackend:ImportBackendStorage.

---

##### `ListBackendJobs`<sup>Required</sup> <a name="ListBackendJobs" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.ListBackendJobs"></a>

```typescript
public readonly ListBackendJobs: string;
```

- *Type:* string

[List] amplifybackend:ListBackendJobs.

---

##### `ListS3Buckets`<sup>Required</sup> <a name="ListS3Buckets" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.ListS3Buckets"></a>

```typescript
public readonly ListS3Buckets: string;
```

- *Type:* string

[List] amplifybackend:ListS3Buckets.

---

##### `RemoveAllBackends`<sup>Required</sup> <a name="RemoveAllBackends" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.RemoveAllBackends"></a>

```typescript
public readonly RemoveAllBackends: string;
```

- *Type:* string

[Write] amplifybackend:RemoveAllBackends.

---

##### `RemoveBackendConfig`<sup>Required</sup> <a name="RemoveBackendConfig" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.RemoveBackendConfig"></a>

```typescript
public readonly RemoveBackendConfig: string;
```

- *Type:* string

[Write] amplifybackend:RemoveBackendConfig.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateBackendAPI`<sup>Required</sup> <a name="UpdateBackendAPI" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.UpdateBackendAPI"></a>

```typescript
public readonly UpdateBackendAPI: string;
```

- *Type:* string

[Write] amplifybackend:UpdateBackendAPI.

---

##### `UpdateBackendAuth`<sup>Required</sup> <a name="UpdateBackendAuth" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.UpdateBackendAuth"></a>

```typescript
public readonly UpdateBackendAuth: string;
```

- *Type:* string

[Write] amplifybackend:UpdateBackendAuth.

---

##### `UpdateBackendConfig`<sup>Required</sup> <a name="UpdateBackendConfig" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.UpdateBackendConfig"></a>

```typescript
public readonly UpdateBackendConfig: string;
```

- *Type:* string

[Write] amplifybackend:UpdateBackendConfig.

---

##### `UpdateBackendJob`<sup>Required</sup> <a name="UpdateBackendJob" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.UpdateBackendJob"></a>

```typescript
public readonly UpdateBackendJob: string;
```

- *Type:* string

[Write] amplifybackend:UpdateBackendJob.

---

##### `UpdateBackendStorage`<sup>Required</sup> <a name="UpdateBackendStorage" id="@cdk_utils/iam.amplifybackend.AmplifybackendActions.property.UpdateBackendStorage"></a>

```typescript
public readonly UpdateBackendStorage: string;
```

- *Type:* string

[Write] amplifybackend:UpdateBackendStorage.

---

### AmplifybackendOperations <a name="AmplifybackendOperations" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations"></a>

API operation to required IAM actions mapping for amplifybackend.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

new amplifybackend.AmplifybackendOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CloneBackend">CloneBackend</a></code> | <code>string[]</code> | IAM actions required for the CloneBackend API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateBackend">CreateBackend</a></code> | <code>string[]</code> | IAM actions required for the CreateBackend API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateBackendAPI">CreateBackendAPI</a></code> | <code>string[]</code> | IAM actions required for the CreateBackendAPI API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateBackendAuth">CreateBackendAuth</a></code> | <code>string[]</code> | IAM actions required for the CreateBackendAuth API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateBackendConfig">CreateBackendConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateBackendConfig API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateBackendStorage">CreateBackendStorage</a></code> | <code>string[]</code> | IAM actions required for the CreateBackendStorage API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateToken">CreateToken</a></code> | <code>string[]</code> | IAM actions required for the CreateToken API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.DeleteBackend">DeleteBackend</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackend API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.DeleteBackendAPI">DeleteBackendAPI</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackendAPI API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.DeleteBackendAuth">DeleteBackendAuth</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackendAuth API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.DeleteBackendStorage">DeleteBackendStorage</a></code> | <code>string[]</code> | IAM actions required for the DeleteBackendStorage API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.DeleteToken">DeleteToken</a></code> | <code>string[]</code> | IAM actions required for the DeleteToken API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.GenerateBackendAPIModels">GenerateBackendAPIModels</a></code> | <code>string[]</code> | IAM actions required for the GenerateBackendAPIModels API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.ImportBackendAuth">ImportBackendAuth</a></code> | <code>string[]</code> | IAM actions required for the ImportBackendAuth API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.ImportBackendStorage">ImportBackendStorage</a></code> | <code>string[]</code> | IAM actions required for the ImportBackendStorage API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.ListBackendJobs">ListBackendJobs</a></code> | <code>string[]</code> | IAM actions required for the ListBackendJobs API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.ListS3Buckets">ListS3Buckets</a></code> | <code>string[]</code> | IAM actions required for the ListS3Buckets API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackend">opGetBackend</a></code> | <code>string[]</code> | IAM actions required for the GetBackend API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackendAPI">opGetBackendAPI</a></code> | <code>string[]</code> | IAM actions required for the GetBackendAPI API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackendAPIModels">opGetBackendAPIModels</a></code> | <code>string[]</code> | IAM actions required for the GetBackendAPIModels API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackendAuth">opGetBackendAuth</a></code> | <code>string[]</code> | IAM actions required for the GetBackendAuth API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackendJob">opGetBackendJob</a></code> | <code>string[]</code> | IAM actions required for the GetBackendJob API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackendStorage">opGetBackendStorage</a></code> | <code>string[]</code> | IAM actions required for the GetBackendStorage API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetToken">opGetToken</a></code> | <code>string[]</code> | IAM actions required for the GetToken API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.RemoveAllBackends">RemoveAllBackends</a></code> | <code>string[]</code> | IAM actions required for the RemoveAllBackends API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.RemoveBackendConfig">RemoveBackendConfig</a></code> | <code>string[]</code> | IAM actions required for the RemoveBackendConfig API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.UpdateBackendAPI">UpdateBackendAPI</a></code> | <code>string[]</code> | IAM actions required for the UpdateBackendAPI API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.UpdateBackendAuth">UpdateBackendAuth</a></code> | <code>string[]</code> | IAM actions required for the UpdateBackendAuth API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.UpdateBackendConfig">UpdateBackendConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateBackendConfig API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.UpdateBackendJob">UpdateBackendJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateBackendJob API call. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.UpdateBackendStorage">UpdateBackendStorage</a></code> | <code>string[]</code> | IAM actions required for the UpdateBackendStorage API call. |

---

##### `CloneBackend`<sup>Required</sup> <a name="CloneBackend" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CloneBackend"></a>

```typescript
public readonly CloneBackend: string[];
```

- *Type:* string[]

IAM actions required for the CloneBackend API call.

---

##### `CreateBackend`<sup>Required</sup> <a name="CreateBackend" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateBackend"></a>

```typescript
public readonly CreateBackend: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackend API call.

---

##### `CreateBackendAPI`<sup>Required</sup> <a name="CreateBackendAPI" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateBackendAPI"></a>

```typescript
public readonly CreateBackendAPI: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackendAPI API call.

---

##### `CreateBackendAuth`<sup>Required</sup> <a name="CreateBackendAuth" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateBackendAuth"></a>

```typescript
public readonly CreateBackendAuth: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackendAuth API call.

---

##### `CreateBackendConfig`<sup>Required</sup> <a name="CreateBackendConfig" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateBackendConfig"></a>

```typescript
public readonly CreateBackendConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackendConfig API call.

---

##### `CreateBackendStorage`<sup>Required</sup> <a name="CreateBackendStorage" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateBackendStorage"></a>

```typescript
public readonly CreateBackendStorage: string[];
```

- *Type:* string[]

IAM actions required for the CreateBackendStorage API call.

---

##### `CreateToken`<sup>Required</sup> <a name="CreateToken" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.CreateToken"></a>

```typescript
public readonly CreateToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateToken API call.

---

##### `DeleteBackend`<sup>Required</sup> <a name="DeleteBackend" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.DeleteBackend"></a>

```typescript
public readonly DeleteBackend: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackend API call.

---

##### `DeleteBackendAPI`<sup>Required</sup> <a name="DeleteBackendAPI" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.DeleteBackendAPI"></a>

```typescript
public readonly DeleteBackendAPI: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackendAPI API call.

---

##### `DeleteBackendAuth`<sup>Required</sup> <a name="DeleteBackendAuth" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.DeleteBackendAuth"></a>

```typescript
public readonly DeleteBackendAuth: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackendAuth API call.

---

##### `DeleteBackendStorage`<sup>Required</sup> <a name="DeleteBackendStorage" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.DeleteBackendStorage"></a>

```typescript
public readonly DeleteBackendStorage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBackendStorage API call.

---

##### `DeleteToken`<sup>Required</sup> <a name="DeleteToken" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.DeleteToken"></a>

```typescript
public readonly DeleteToken: string[];
```

- *Type:* string[]

IAM actions required for the DeleteToken API call.

---

##### `GenerateBackendAPIModels`<sup>Required</sup> <a name="GenerateBackendAPIModels" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.GenerateBackendAPIModels"></a>

```typescript
public readonly GenerateBackendAPIModels: string[];
```

- *Type:* string[]

IAM actions required for the GenerateBackendAPIModels API call.

---

##### `ImportBackendAuth`<sup>Required</sup> <a name="ImportBackendAuth" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.ImportBackendAuth"></a>

```typescript
public readonly ImportBackendAuth: string[];
```

- *Type:* string[]

IAM actions required for the ImportBackendAuth API call.

---

##### `ImportBackendStorage`<sup>Required</sup> <a name="ImportBackendStorage" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.ImportBackendStorage"></a>

```typescript
public readonly ImportBackendStorage: string[];
```

- *Type:* string[]

IAM actions required for the ImportBackendStorage API call.

---

##### `ListBackendJobs`<sup>Required</sup> <a name="ListBackendJobs" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.ListBackendJobs"></a>

```typescript
public readonly ListBackendJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListBackendJobs API call.

---

##### `ListS3Buckets`<sup>Required</sup> <a name="ListS3Buckets" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.ListS3Buckets"></a>

```typescript
public readonly ListS3Buckets: string[];
```

- *Type:* string[]

IAM actions required for the ListS3Buckets API call.

---

##### `opGetBackend`<sup>Required</sup> <a name="opGetBackend" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackend"></a>

```typescript
public readonly opGetBackend: string[];
```

- *Type:* string[]

IAM actions required for the GetBackend API call.

---

##### `opGetBackendAPI`<sup>Required</sup> <a name="opGetBackendAPI" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackendAPI"></a>

```typescript
public readonly opGetBackendAPI: string[];
```

- *Type:* string[]

IAM actions required for the GetBackendAPI API call.

---

##### `opGetBackendAPIModels`<sup>Required</sup> <a name="opGetBackendAPIModels" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackendAPIModels"></a>

```typescript
public readonly opGetBackendAPIModels: string[];
```

- *Type:* string[]

IAM actions required for the GetBackendAPIModels API call.

---

##### `opGetBackendAuth`<sup>Required</sup> <a name="opGetBackendAuth" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackendAuth"></a>

```typescript
public readonly opGetBackendAuth: string[];
```

- *Type:* string[]

IAM actions required for the GetBackendAuth API call.

---

##### `opGetBackendJob`<sup>Required</sup> <a name="opGetBackendJob" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackendJob"></a>

```typescript
public readonly opGetBackendJob: string[];
```

- *Type:* string[]

IAM actions required for the GetBackendJob API call.

---

##### `opGetBackendStorage`<sup>Required</sup> <a name="opGetBackendStorage" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetBackendStorage"></a>

```typescript
public readonly opGetBackendStorage: string[];
```

- *Type:* string[]

IAM actions required for the GetBackendStorage API call.

---

##### `opGetToken`<sup>Required</sup> <a name="opGetToken" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.opGetToken"></a>

```typescript
public readonly opGetToken: string[];
```

- *Type:* string[]

IAM actions required for the GetToken API call.

---

##### `RemoveAllBackends`<sup>Required</sup> <a name="RemoveAllBackends" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.RemoveAllBackends"></a>

```typescript
public readonly RemoveAllBackends: string[];
```

- *Type:* string[]

IAM actions required for the RemoveAllBackends API call.

---

##### `RemoveBackendConfig`<sup>Required</sup> <a name="RemoveBackendConfig" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.RemoveBackendConfig"></a>

```typescript
public readonly RemoveBackendConfig: string[];
```

- *Type:* string[]

IAM actions required for the RemoveBackendConfig API call.

---

##### `UpdateBackendAPI`<sup>Required</sup> <a name="UpdateBackendAPI" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.UpdateBackendAPI"></a>

```typescript
public readonly UpdateBackendAPI: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBackendAPI API call.

---

##### `UpdateBackendAuth`<sup>Required</sup> <a name="UpdateBackendAuth" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.UpdateBackendAuth"></a>

```typescript
public readonly UpdateBackendAuth: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBackendAuth API call.

---

##### `UpdateBackendConfig`<sup>Required</sup> <a name="UpdateBackendConfig" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.UpdateBackendConfig"></a>

```typescript
public readonly UpdateBackendConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBackendConfig API call.

---

##### `UpdateBackendJob`<sup>Required</sup> <a name="UpdateBackendJob" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.UpdateBackendJob"></a>

```typescript
public readonly UpdateBackendJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBackendJob API call.

---

##### `UpdateBackendStorage`<sup>Required</sup> <a name="UpdateBackendStorage" id="@cdk_utils/iam.amplifybackend.AmplifybackendOperations.property.UpdateBackendStorage"></a>

```typescript
public readonly UpdateBackendStorage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBackendStorage API call.

---

### AmplifybackendResources <a name="AmplifybackendResources" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources"></a>

ARN builders, validators, and parsers for amplifybackend resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.Initializer"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

new amplifybackend.AmplifybackendResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.api">api</a></code> | Builds an ARN for the api resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.auth">auth</a></code> | Builds an ARN for the auth resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.backend">backend</a></code> | Builds an ARN for the backend resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.config">config</a></code> | Builds an ARN for the config resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.createdBackend">createdBackend</a></code> | Builds an ARN for the created-backend resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidAPIArn">isValidAPIArn</a></code> | Validates whether a string is a valid ARN for the api resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidAuthArn">isValidAuthArn</a></code> | Validates whether a string is a valid ARN for the auth resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidBackendArn">isValidBackendArn</a></code> | Validates whether a string is a valid ARN for the backend resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidConfigArn">isValidConfigArn</a></code> | Validates whether a string is a valid ARN for the config resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidCreatedBackendArn">isValidCreatedBackendArn</a></code> | Validates whether a string is a valid ARN for the created-backend resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidJobArn">isValidJobArn</a></code> | Validates whether a string is a valid ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidStorageArn">isValidStorageArn</a></code> | Validates whether a string is a valid ARN for the storage resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidTokenArn">isValidTokenArn</a></code> | Validates whether a string is a valid ARN for the token resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.job">job</a></code> | Builds an ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseAPIArn">parseAPIArn</a></code> | Parses a api ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseAuthArn">parseAuthArn</a></code> | Parses a auth ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseBackendArn">parseBackendArn</a></code> | Parses a backend ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseConfigArn">parseConfigArn</a></code> | Parses a config ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseCreatedBackendArn">parseCreatedBackendArn</a></code> | Parses a created-backend ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseJobArn">parseJobArn</a></code> | Parses a job ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseStorageArn">parseStorageArn</a></code> | Parses a storage ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseTokenArn">parseTokenArn</a></code> | Parses a token ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.storage">storage</a></code> | Builds an ARN for the storage resource. |
| <code><a href="#@cdk_utils/iam.amplifybackend.AmplifybackendResources.token">token</a></code> | Builds an ARN for the token resource. |

---

##### `api` <a name="api" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.api"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.api(props: AmplifybackendAPIArnProps)
```

Builds an ARN for the api resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.api.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAPIArnProps">AmplifybackendAPIArnProps</a>

---

##### `auth` <a name="auth" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.auth"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.auth(props: AmplifybackendAuthArnProps)
```

Builds an ARN for the auth resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.auth.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifybackend.AmplifybackendAuthArnProps">AmplifybackendAuthArnProps</a>

---

##### `backend` <a name="backend" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.backend"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.backend(props: AmplifybackendBackendArnProps)
```

Builds an ARN for the backend resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.backend.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifybackend.AmplifybackendBackendArnProps">AmplifybackendBackendArnProps</a>

---

##### `config` <a name="config" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.config"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.config(props: AmplifybackendConfigArnProps)
```

Builds an ARN for the config resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.config.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifybackend.AmplifybackendConfigArnProps">AmplifybackendConfigArnProps</a>

---

##### `createdBackend` <a name="createdBackend" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.createdBackend"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.createdBackend(props: AmplifybackendCreatedBackendArnProps)
```

Builds an ARN for the created-backend resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.createdBackend.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifybackend.AmplifybackendCreatedBackendArnProps">AmplifybackendCreatedBackendArnProps</a>

---

##### `environment` <a name="environment" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.environment"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.environment(props: AmplifybackendEnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifybackend.AmplifybackendEnvironmentArnProps">AmplifybackendEnvironmentArnProps</a>

---

##### `isValidAPIArn` <a name="isValidAPIArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidAPIArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.isValidAPIArn(arn: string)
```

Validates whether a string is a valid ARN for the api resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAuthArn` <a name="isValidAuthArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidAuthArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.isValidAuthArn(arn: string)
```

Validates whether a string is a valid ARN for the auth resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidAuthArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBackendArn` <a name="isValidBackendArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidBackendArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.isValidBackendArn(arn: string)
```

Validates whether a string is a valid ARN for the backend resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidBackendArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigArn` <a name="isValidConfigArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidConfigArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.isValidConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the config resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCreatedBackendArn` <a name="isValidCreatedBackendArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidCreatedBackendArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.isValidCreatedBackendArn(arn: string)
```

Validates whether a string is a valid ARN for the created-backend resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidCreatedBackendArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidEnvironmentArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobArn` <a name="isValidJobArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidJobArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.isValidJobArn(arn: string)
```

Validates whether a string is a valid ARN for the job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStorageArn` <a name="isValidStorageArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidStorageArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.isValidStorageArn(arn: string)
```

Validates whether a string is a valid ARN for the storage resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidStorageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTokenArn` <a name="isValidTokenArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidTokenArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.isValidTokenArn(arn: string)
```

Validates whether a string is a valid ARN for the token resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.isValidTokenArn.parameter.arn"></a>

- *Type:* string

---

##### `job` <a name="job" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.job"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.job(props: AmplifybackendJobArnProps)
```

Builds an ARN for the job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.job.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifybackend.AmplifybackendJobArnProps">AmplifybackendJobArnProps</a>

---

##### `parseAPIArn` <a name="parseAPIArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseAPIArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.parseAPIArn(arn: string)
```

Parses a api ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseAPIArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAuthArn` <a name="parseAuthArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseAuthArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.parseAuthArn(arn: string)
```

Parses a auth ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseAuthArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBackendArn` <a name="parseBackendArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseBackendArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.parseBackendArn(arn: string)
```

Parses a backend ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseBackendArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigArn` <a name="parseConfigArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseConfigArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.parseConfigArn(arn: string)
```

Parses a config ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCreatedBackendArn` <a name="parseCreatedBackendArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseCreatedBackendArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.parseCreatedBackendArn(arn: string)
```

Parses a created-backend ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseCreatedBackendArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseEnvironmentArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobArn` <a name="parseJobArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseJobArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.parseJobArn(arn: string)
```

Parses a job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStorageArn` <a name="parseStorageArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseStorageArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.parseStorageArn(arn: string)
```

Parses a storage ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseStorageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTokenArn` <a name="parseTokenArn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseTokenArn"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.parseTokenArn(arn: string)
```

Parses a token ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.parseTokenArn.parameter.arn"></a>

- *Type:* string

---

##### `storage` <a name="storage" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.storage"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.storage(props: AmplifybackendStorageArnProps)
```

Builds an ARN for the storage resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.storage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifybackend.AmplifybackendStorageArnProps">AmplifybackendStorageArnProps</a>

---

##### `token` <a name="token" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.token"></a>

```typescript
import { amplifybackend } from '@cdk_utils/iam'

amplifybackend.AmplifybackendResources.token(props: AmplifybackendTokenArnProps)
```

Builds an ARN for the token resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifybackend.AmplifybackendResources.token.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifybackend.AmplifybackendTokenArnProps">AmplifybackendTokenArnProps</a>

---




