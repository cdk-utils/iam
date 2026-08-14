# `nimble` Submodule <a name="`nimble` Submodule" id="@cdk_utils/iam.nimble"></a>


## Structs <a name="Structs" id="Structs"></a>

### NimbleEulaAcceptanceArnComponents <a name="NimbleEulaAcceptanceArnComponents" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnComponents"></a>

Parsed components of a eula-acceptance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnComponents.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleEulaAcceptanceArnComponents: nimble.NimbleEulaAcceptanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnComponents.property.eulaAcceptanceId">eulaAcceptanceId</a></code> | <code>string</code> | The EulaAcceptanceId component. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eulaAcceptanceId`<sup>Required</sup> <a name="eulaAcceptanceId" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnComponents.property.eulaAcceptanceId"></a>

```typescript
public readonly eulaAcceptanceId: string;
```

- *Type:* string

The EulaAcceptanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NimbleEulaAcceptanceArnProps <a name="NimbleEulaAcceptanceArnProps" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnProps"></a>

Properties for building a eula-acceptance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnProps.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleEulaAcceptanceArnProps: nimble.NimbleEulaAcceptanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnProps.property.eulaAcceptanceId">eulaAcceptanceId</a></code> | <code>string</code> | The EulaAcceptanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eulaAcceptanceId`<sup>Required</sup> <a name="eulaAcceptanceId" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnProps.property.eulaAcceptanceId"></a>

```typescript
public readonly eulaAcceptanceId: string;
```

- *Type:* string

The EulaAcceptanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NimbleEulaArnComponents <a name="NimbleEulaArnComponents" id="@cdk_utils/iam.nimble.NimbleEulaArnComponents"></a>

Parsed components of a eula ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleEulaArnComponents.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleEulaArnComponents: nimble.NimbleEulaArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaArnComponents.property.eulaId">eulaId</a></code> | <code>string</code> | The EulaId component. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleEulaArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eulaId`<sup>Required</sup> <a name="eulaId" id="@cdk_utils/iam.nimble.NimbleEulaArnComponents.property.eulaId"></a>

```typescript
public readonly eulaId: string;
```

- *Type:* string

The EulaId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleEulaArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleEulaArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NimbleEulaArnProps <a name="NimbleEulaArnProps" id="@cdk_utils/iam.nimble.NimbleEulaArnProps"></a>

Properties for building a eula ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleEulaArnProps.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleEulaArnProps: nimble.NimbleEulaArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaArnProps.property.eulaId">eulaId</a></code> | <code>string</code> | The EulaId component of the ARN. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleEulaArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eulaId`<sup>Required</sup> <a name="eulaId" id="@cdk_utils/iam.nimble.NimbleEulaArnProps.property.eulaId"></a>

```typescript
public readonly eulaId: string;
```

- *Type:* string

The EulaId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleEulaArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleEulaArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleEulaArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NimbleLaunchProfileArnComponents <a name="NimbleLaunchProfileArnComponents" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnComponents"></a>

Parsed components of a launch-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnComponents.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleLaunchProfileArnComponents: nimble.NimbleLaunchProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleLaunchProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleLaunchProfileArnComponents.property.launchProfileId">launchProfileId</a></code> | <code>string</code> | The LaunchProfileId component. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleLaunchProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleLaunchProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `launchProfileId`<sup>Required</sup> <a name="launchProfileId" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnComponents.property.launchProfileId"></a>

```typescript
public readonly launchProfileId: string;
```

- *Type:* string

The LaunchProfileId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NimbleLaunchProfileArnProps <a name="NimbleLaunchProfileArnProps" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnProps"></a>

Properties for building a launch-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnProps.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleLaunchProfileArnProps: nimble.NimbleLaunchProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleLaunchProfileArnProps.property.launchProfileId">launchProfileId</a></code> | <code>string</code> | The LaunchProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleLaunchProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleLaunchProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleLaunchProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `launchProfileId`<sup>Required</sup> <a name="launchProfileId" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnProps.property.launchProfileId"></a>

```typescript
public readonly launchProfileId: string;
```

- *Type:* string

The LaunchProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleLaunchProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NimbleStreamingImageArnComponents <a name="NimbleStreamingImageArnComponents" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnComponents"></a>

Parsed components of a streaming-image ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnComponents.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleStreamingImageArnComponents: nimble.NimbleStreamingImageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingImageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingImageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingImageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingImageArnComponents.property.streamingImageId">streamingImageId</a></code> | <code>string</code> | The StreamingImageId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamingImageId`<sup>Required</sup> <a name="streamingImageId" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnComponents.property.streamingImageId"></a>

```typescript
public readonly streamingImageId: string;
```

- *Type:* string

The StreamingImageId component.

---

### NimbleStreamingImageArnProps <a name="NimbleStreamingImageArnProps" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnProps"></a>

Properties for building a streaming-image ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnProps.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleStreamingImageArnProps: nimble.NimbleStreamingImageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingImageArnProps.property.streamingImageId">streamingImageId</a></code> | <code>string</code> | The StreamingImageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingImageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingImageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingImageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `streamingImageId`<sup>Required</sup> <a name="streamingImageId" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnProps.property.streamingImageId"></a>

```typescript
public readonly streamingImageId: string;
```

- *Type:* string

The StreamingImageId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleStreamingImageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NimbleStreamingSessionArnComponents <a name="NimbleStreamingSessionArnComponents" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnComponents"></a>

Parsed components of a streaming-session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnComponents.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleStreamingSessionArnComponents: nimble.NimbleStreamingSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionArnComponents.property.streamingSessionId">streamingSessionId</a></code> | <code>string</code> | The StreamingSessionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamingSessionId`<sup>Required</sup> <a name="streamingSessionId" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnComponents.property.streamingSessionId"></a>

```typescript
public readonly streamingSessionId: string;
```

- *Type:* string

The StreamingSessionId component.

---

### NimbleStreamingSessionArnProps <a name="NimbleStreamingSessionArnProps" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnProps"></a>

Properties for building a streaming-session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnProps.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleStreamingSessionArnProps: nimble.NimbleStreamingSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionArnProps.property.streamingSessionId">streamingSessionId</a></code> | <code>string</code> | The StreamingSessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `streamingSessionId`<sup>Required</sup> <a name="streamingSessionId" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnProps.property.streamingSessionId"></a>

```typescript
public readonly streamingSessionId: string;
```

- *Type:* string

The StreamingSessionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleStreamingSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NimbleStreamingSessionBackupArnComponents <a name="NimbleStreamingSessionBackupArnComponents" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnComponents"></a>

Parsed components of a streaming-session-backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnComponents.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleStreamingSessionBackupArnComponents: nimble.NimbleStreamingSessionBackupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnComponents.property.streamingSessionBackupId">streamingSessionBackupId</a></code> | <code>string</code> | The StreamingSessionBackupId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamingSessionBackupId`<sup>Required</sup> <a name="streamingSessionBackupId" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnComponents.property.streamingSessionBackupId"></a>

```typescript
public readonly streamingSessionBackupId: string;
```

- *Type:* string

The StreamingSessionBackupId component.

---

### NimbleStreamingSessionBackupArnProps <a name="NimbleStreamingSessionBackupArnProps" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnProps"></a>

Properties for building a streaming-session-backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnProps.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleStreamingSessionBackupArnProps: nimble.NimbleStreamingSessionBackupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnProps.property.streamingSessionBackupId">streamingSessionBackupId</a></code> | <code>string</code> | The StreamingSessionBackupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `streamingSessionBackupId`<sup>Required</sup> <a name="streamingSessionBackupId" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnProps.property.streamingSessionBackupId"></a>

```typescript
public readonly streamingSessionBackupId: string;
```

- *Type:* string

The StreamingSessionBackupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NimbleStudioArnComponents <a name="NimbleStudioArnComponents" id="@cdk_utils/iam.nimble.NimbleStudioArnComponents"></a>

Parsed components of a studio ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleStudioArnComponents.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleStudioArnComponents: nimble.NimbleStudioArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioArnComponents.property.studioId">studioId</a></code> | <code>string</code> | The StudioId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleStudioArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleStudioArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleStudioArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdk_utils/iam.nimble.NimbleStudioArnComponents.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

The StudioId component.

---

### NimbleStudioArnProps <a name="NimbleStudioArnProps" id="@cdk_utils/iam.nimble.NimbleStudioArnProps"></a>

Properties for building a studio ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleStudioArnProps.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleStudioArnProps: nimble.NimbleStudioArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioArnProps.property.studioId">studioId</a></code> | <code>string</code> | The StudioId component of the ARN. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdk_utils/iam.nimble.NimbleStudioArnProps.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

The StudioId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleStudioArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleStudioArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleStudioArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NimbleStudioComponentArnComponents <a name="NimbleStudioComponentArnComponents" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnComponents"></a>

Parsed components of a studio-component ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnComponents.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleStudioComponentArnComponents: nimble.NimbleStudioComponentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioComponentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioComponentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioComponentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioComponentArnComponents.property.studioComponentId">studioComponentId</a></code> | <code>string</code> | The StudioComponentId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `studioComponentId`<sup>Required</sup> <a name="studioComponentId" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnComponents.property.studioComponentId"></a>

```typescript
public readonly studioComponentId: string;
```

- *Type:* string

The StudioComponentId component.

---

### NimbleStudioComponentArnProps <a name="NimbleStudioComponentArnProps" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnProps"></a>

Properties for building a studio-component ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnProps.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

const nimbleStudioComponentArnProps: nimble.NimbleStudioComponentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioComponentArnProps.property.studioComponentId">studioComponentId</a></code> | <code>string</code> | The StudioComponentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioComponentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioComponentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleStudioComponentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `studioComponentId`<sup>Required</sup> <a name="studioComponentId" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnProps.property.studioComponentId"></a>

```typescript
public readonly studioComponentId: string;
```

- *Type:* string

The StudioComponentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.nimble.NimbleStudioComponentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### NimbleActions <a name="NimbleActions" id="@cdk_utils/iam.nimble.NimbleActions"></a>

IAM action constants for the nimble service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.nimble.NimbleActions.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

new nimble.NimbleActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.AcceptEulas">AcceptEulas</a></code> | <code>string</code> | [Write] nimble:AcceptEulas. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetEula">actionGetEula</a></code> | <code>string</code> | [Read] nimble:GetEula. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetFeatureMap">actionGetFeatureMap</a></code> | <code>string</code> | [Read] nimble:GetFeatureMap. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetLaunchProfile">actionGetLaunchProfile</a></code> | <code>string</code> | [Read] nimble:GetLaunchProfile. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetLaunchProfileDetails">actionGetLaunchProfileDetails</a></code> | <code>string</code> | [Read] nimble:GetLaunchProfileDetails. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetLaunchProfileInitialization">actionGetLaunchProfileInitialization</a></code> | <code>string</code> | [Read] nimble:GetLaunchProfileInitialization. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetLaunchProfileMember">actionGetLaunchProfileMember</a></code> | <code>string</code> | [Read] nimble:GetLaunchProfileMember. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetStreamingImage">actionGetStreamingImage</a></code> | <code>string</code> | [Read] nimble:GetStreamingImage. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetStreamingSession">actionGetStreamingSession</a></code> | <code>string</code> | [Read] nimble:GetStreamingSession. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetStreamingSessionBackup">actionGetStreamingSessionBackup</a></code> | <code>string</code> | [Read] nimble:GetStreamingSessionBackup. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetStreamingSessionStream">actionGetStreamingSessionStream</a></code> | <code>string</code> | [Read] nimble:GetStreamingSessionStream. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetStudio">actionGetStudio</a></code> | <code>string</code> | [Read] nimble:GetStudio. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetStudioComponent">actionGetStudioComponent</a></code> | <code>string</code> | [Read] nimble:GetStudioComponent. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.actionGetStudioMember">actionGetStudioMember</a></code> | <code>string</code> | [Read] nimble:GetStudioMember. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.CreateLaunchProfile">CreateLaunchProfile</a></code> | <code>string</code> | [Write] nimble:CreateLaunchProfile. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.CreateStreamingImage">CreateStreamingImage</a></code> | <code>string</code> | [Write] nimble:CreateStreamingImage. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.CreateStreamingSession">CreateStreamingSession</a></code> | <code>string</code> | [Write] nimble:CreateStreamingSession. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.CreateStreamingSessionStream">CreateStreamingSessionStream</a></code> | <code>string</code> | [Write] nimble:CreateStreamingSessionStream. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.CreateStudio">CreateStudio</a></code> | <code>string</code> | [Write] nimble:CreateStudio. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.CreateStudioComponent">CreateStudioComponent</a></code> | <code>string</code> | [Write] nimble:CreateStudioComponent. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.DeleteLaunchProfile">DeleteLaunchProfile</a></code> | <code>string</code> | [Write] nimble:DeleteLaunchProfile. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.DeleteLaunchProfileMember">DeleteLaunchProfileMember</a></code> | <code>string</code> | [Write] nimble:DeleteLaunchProfileMember. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.DeleteStreamingImage">DeleteStreamingImage</a></code> | <code>string</code> | [Write] nimble:DeleteStreamingImage. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.DeleteStreamingSession">DeleteStreamingSession</a></code> | <code>string</code> | [Write] nimble:DeleteStreamingSession. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.DeleteStudio">DeleteStudio</a></code> | <code>string</code> | [Write] nimble:DeleteStudio. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.DeleteStudioComponent">DeleteStudioComponent</a></code> | <code>string</code> | [Write] nimble:DeleteStudioComponent. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.DeleteStudioMember">DeleteStudioMember</a></code> | <code>string</code> | [Write] nimble:DeleteStudioMember. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.ListEulaAcceptances">ListEulaAcceptances</a></code> | <code>string</code> | [Read] nimble:ListEulaAcceptances. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.ListEulas">ListEulas</a></code> | <code>string</code> | [Read] nimble:ListEulas. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.ListLaunchProfileMembers">ListLaunchProfileMembers</a></code> | <code>string</code> | [Read] nimble:ListLaunchProfileMembers. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.ListLaunchProfiles">ListLaunchProfiles</a></code> | <code>string</code> | [Read] nimble:ListLaunchProfiles. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.ListStreamingImages">ListStreamingImages</a></code> | <code>string</code> | [Read] nimble:ListStreamingImages. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.ListStreamingSessionBackups">ListStreamingSessionBackups</a></code> | <code>string</code> | [Read] nimble:ListStreamingSessionBackups. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.ListStreamingSessions">ListStreamingSessions</a></code> | <code>string</code> | [Read] nimble:ListStreamingSessions. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.ListStudioComponents">ListStudioComponents</a></code> | <code>string</code> | [Read] nimble:ListStudioComponents. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.ListStudioMembers">ListStudioMembers</a></code> | <code>string</code> | [Read] nimble:ListStudioMembers. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.ListStudios">ListStudios</a></code> | <code>string</code> | [Read] nimble:ListStudios. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] nimble:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.PutLaunchProfileMembers">PutLaunchProfileMembers</a></code> | <code>string</code> | [Write] nimble:PutLaunchProfileMembers. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.PutStudioLogEvents">PutStudioLogEvents</a></code> | <code>string</code> | [Write] nimble:PutStudioLogEvents. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.PutStudioMembers">PutStudioMembers</a></code> | <code>string</code> | [Write] nimble:PutStudioMembers. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.StartStreamingSession">StartStreamingSession</a></code> | <code>string</code> | [Write] nimble:StartStreamingSession. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.StartStudioSSOConfigurationRepair">StartStudioSSOConfigurationRepair</a></code> | <code>string</code> | [Write] nimble:StartStudioSSOConfigurationRepair. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.StopStreamingSession">StopStreamingSession</a></code> | <code>string</code> | [Write] nimble:StopStreamingSession. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] nimble:TagResource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] nimble:UntagResource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.UpdateLaunchProfile">UpdateLaunchProfile</a></code> | <code>string</code> | [Write] nimble:UpdateLaunchProfile. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.UpdateLaunchProfileMember">UpdateLaunchProfileMember</a></code> | <code>string</code> | [Write] nimble:UpdateLaunchProfileMember. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.UpdateStreamingImage">UpdateStreamingImage</a></code> | <code>string</code> | [Write] nimble:UpdateStreamingImage. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.UpdateStudio">UpdateStudio</a></code> | <code>string</code> | [Write] nimble:UpdateStudio. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleActions.property.UpdateStudioComponent">UpdateStudioComponent</a></code> | <code>string</code> | [Write] nimble:UpdateStudioComponent. |

---

##### `AcceptEulas`<sup>Required</sup> <a name="AcceptEulas" id="@cdk_utils/iam.nimble.NimbleActions.property.AcceptEulas"></a>

```typescript
public readonly AcceptEulas: string;
```

- *Type:* string

[Write] nimble:AcceptEulas.

---

##### `actionGetEula`<sup>Required</sup> <a name="actionGetEula" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetEula"></a>

```typescript
public readonly actionGetEula: string;
```

- *Type:* string

[Read] nimble:GetEula.

---

##### `actionGetFeatureMap`<sup>Required</sup> <a name="actionGetFeatureMap" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetFeatureMap"></a>

```typescript
public readonly actionGetFeatureMap: string;
```

- *Type:* string

[Read] nimble:GetFeatureMap.

---

##### `actionGetLaunchProfile`<sup>Required</sup> <a name="actionGetLaunchProfile" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetLaunchProfile"></a>

```typescript
public readonly actionGetLaunchProfile: string;
```

- *Type:* string

[Read] nimble:GetLaunchProfile.

---

##### `actionGetLaunchProfileDetails`<sup>Required</sup> <a name="actionGetLaunchProfileDetails" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetLaunchProfileDetails"></a>

```typescript
public readonly actionGetLaunchProfileDetails: string;
```

- *Type:* string

[Read] nimble:GetLaunchProfileDetails.

---

##### `actionGetLaunchProfileInitialization`<sup>Required</sup> <a name="actionGetLaunchProfileInitialization" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetLaunchProfileInitialization"></a>

```typescript
public readonly actionGetLaunchProfileInitialization: string;
```

- *Type:* string

[Read] nimble:GetLaunchProfileInitialization.

---

##### `actionGetLaunchProfileMember`<sup>Required</sup> <a name="actionGetLaunchProfileMember" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetLaunchProfileMember"></a>

```typescript
public readonly actionGetLaunchProfileMember: string;
```

- *Type:* string

[Read] nimble:GetLaunchProfileMember.

---

##### `actionGetStreamingImage`<sup>Required</sup> <a name="actionGetStreamingImage" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetStreamingImage"></a>

```typescript
public readonly actionGetStreamingImage: string;
```

- *Type:* string

[Read] nimble:GetStreamingImage.

---

##### `actionGetStreamingSession`<sup>Required</sup> <a name="actionGetStreamingSession" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetStreamingSession"></a>

```typescript
public readonly actionGetStreamingSession: string;
```

- *Type:* string

[Read] nimble:GetStreamingSession.

---

##### `actionGetStreamingSessionBackup`<sup>Required</sup> <a name="actionGetStreamingSessionBackup" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetStreamingSessionBackup"></a>

```typescript
public readonly actionGetStreamingSessionBackup: string;
```

- *Type:* string

[Read] nimble:GetStreamingSessionBackup.

---

##### `actionGetStreamingSessionStream`<sup>Required</sup> <a name="actionGetStreamingSessionStream" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetStreamingSessionStream"></a>

```typescript
public readonly actionGetStreamingSessionStream: string;
```

- *Type:* string

[Read] nimble:GetStreamingSessionStream.

---

##### `actionGetStudio`<sup>Required</sup> <a name="actionGetStudio" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetStudio"></a>

```typescript
public readonly actionGetStudio: string;
```

- *Type:* string

[Read] nimble:GetStudio.

---

##### `actionGetStudioComponent`<sup>Required</sup> <a name="actionGetStudioComponent" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetStudioComponent"></a>

```typescript
public readonly actionGetStudioComponent: string;
```

- *Type:* string

[Read] nimble:GetStudioComponent.

---

##### `actionGetStudioMember`<sup>Required</sup> <a name="actionGetStudioMember" id="@cdk_utils/iam.nimble.NimbleActions.property.actionGetStudioMember"></a>

```typescript
public readonly actionGetStudioMember: string;
```

- *Type:* string

[Read] nimble:GetStudioMember.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.nimble.NimbleActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.nimble.NimbleActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.nimble.NimbleActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.nimble.NimbleActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.nimble.NimbleActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateLaunchProfile`<sup>Required</sup> <a name="CreateLaunchProfile" id="@cdk_utils/iam.nimble.NimbleActions.property.CreateLaunchProfile"></a>

```typescript
public readonly CreateLaunchProfile: string;
```

- *Type:* string

[Write] nimble:CreateLaunchProfile.

---

##### `CreateStreamingImage`<sup>Required</sup> <a name="CreateStreamingImage" id="@cdk_utils/iam.nimble.NimbleActions.property.CreateStreamingImage"></a>

```typescript
public readonly CreateStreamingImage: string;
```

- *Type:* string

[Write] nimble:CreateStreamingImage.

---

##### `CreateStreamingSession`<sup>Required</sup> <a name="CreateStreamingSession" id="@cdk_utils/iam.nimble.NimbleActions.property.CreateStreamingSession"></a>

```typescript
public readonly CreateStreamingSession: string;
```

- *Type:* string

[Write] nimble:CreateStreamingSession.

---

##### `CreateStreamingSessionStream`<sup>Required</sup> <a name="CreateStreamingSessionStream" id="@cdk_utils/iam.nimble.NimbleActions.property.CreateStreamingSessionStream"></a>

```typescript
public readonly CreateStreamingSessionStream: string;
```

- *Type:* string

[Write] nimble:CreateStreamingSessionStream.

---

##### `CreateStudio`<sup>Required</sup> <a name="CreateStudio" id="@cdk_utils/iam.nimble.NimbleActions.property.CreateStudio"></a>

```typescript
public readonly CreateStudio: string;
```

- *Type:* string

[Write] nimble:CreateStudio.

---

##### `CreateStudioComponent`<sup>Required</sup> <a name="CreateStudioComponent" id="@cdk_utils/iam.nimble.NimbleActions.property.CreateStudioComponent"></a>

```typescript
public readonly CreateStudioComponent: string;
```

- *Type:* string

[Write] nimble:CreateStudioComponent.

---

##### `DeleteLaunchProfile`<sup>Required</sup> <a name="DeleteLaunchProfile" id="@cdk_utils/iam.nimble.NimbleActions.property.DeleteLaunchProfile"></a>

```typescript
public readonly DeleteLaunchProfile: string;
```

- *Type:* string

[Write] nimble:DeleteLaunchProfile.

---

##### `DeleteLaunchProfileMember`<sup>Required</sup> <a name="DeleteLaunchProfileMember" id="@cdk_utils/iam.nimble.NimbleActions.property.DeleteLaunchProfileMember"></a>

```typescript
public readonly DeleteLaunchProfileMember: string;
```

- *Type:* string

[Write] nimble:DeleteLaunchProfileMember.

---

##### `DeleteStreamingImage`<sup>Required</sup> <a name="DeleteStreamingImage" id="@cdk_utils/iam.nimble.NimbleActions.property.DeleteStreamingImage"></a>

```typescript
public readonly DeleteStreamingImage: string;
```

- *Type:* string

[Write] nimble:DeleteStreamingImage.

---

##### `DeleteStreamingSession`<sup>Required</sup> <a name="DeleteStreamingSession" id="@cdk_utils/iam.nimble.NimbleActions.property.DeleteStreamingSession"></a>

```typescript
public readonly DeleteStreamingSession: string;
```

- *Type:* string

[Write] nimble:DeleteStreamingSession.

---

##### `DeleteStudio`<sup>Required</sup> <a name="DeleteStudio" id="@cdk_utils/iam.nimble.NimbleActions.property.DeleteStudio"></a>

```typescript
public readonly DeleteStudio: string;
```

- *Type:* string

[Write] nimble:DeleteStudio.

---

##### `DeleteStudioComponent`<sup>Required</sup> <a name="DeleteStudioComponent" id="@cdk_utils/iam.nimble.NimbleActions.property.DeleteStudioComponent"></a>

```typescript
public readonly DeleteStudioComponent: string;
```

- *Type:* string

[Write] nimble:DeleteStudioComponent.

---

##### `DeleteStudioMember`<sup>Required</sup> <a name="DeleteStudioMember" id="@cdk_utils/iam.nimble.NimbleActions.property.DeleteStudioMember"></a>

```typescript
public readonly DeleteStudioMember: string;
```

- *Type:* string

[Write] nimble:DeleteStudioMember.

---

##### `ListEulaAcceptances`<sup>Required</sup> <a name="ListEulaAcceptances" id="@cdk_utils/iam.nimble.NimbleActions.property.ListEulaAcceptances"></a>

```typescript
public readonly ListEulaAcceptances: string;
```

- *Type:* string

[Read] nimble:ListEulaAcceptances.

---

##### `ListEulas`<sup>Required</sup> <a name="ListEulas" id="@cdk_utils/iam.nimble.NimbleActions.property.ListEulas"></a>

```typescript
public readonly ListEulas: string;
```

- *Type:* string

[Read] nimble:ListEulas.

---

##### `ListLaunchProfileMembers`<sup>Required</sup> <a name="ListLaunchProfileMembers" id="@cdk_utils/iam.nimble.NimbleActions.property.ListLaunchProfileMembers"></a>

```typescript
public readonly ListLaunchProfileMembers: string;
```

- *Type:* string

[Read] nimble:ListLaunchProfileMembers.

---

##### `ListLaunchProfiles`<sup>Required</sup> <a name="ListLaunchProfiles" id="@cdk_utils/iam.nimble.NimbleActions.property.ListLaunchProfiles"></a>

```typescript
public readonly ListLaunchProfiles: string;
```

- *Type:* string

[Read] nimble:ListLaunchProfiles.

---

##### `ListStreamingImages`<sup>Required</sup> <a name="ListStreamingImages" id="@cdk_utils/iam.nimble.NimbleActions.property.ListStreamingImages"></a>

```typescript
public readonly ListStreamingImages: string;
```

- *Type:* string

[Read] nimble:ListStreamingImages.

---

##### `ListStreamingSessionBackups`<sup>Required</sup> <a name="ListStreamingSessionBackups" id="@cdk_utils/iam.nimble.NimbleActions.property.ListStreamingSessionBackups"></a>

```typescript
public readonly ListStreamingSessionBackups: string;
```

- *Type:* string

[Read] nimble:ListStreamingSessionBackups.

---

##### `ListStreamingSessions`<sup>Required</sup> <a name="ListStreamingSessions" id="@cdk_utils/iam.nimble.NimbleActions.property.ListStreamingSessions"></a>

```typescript
public readonly ListStreamingSessions: string;
```

- *Type:* string

[Read] nimble:ListStreamingSessions.

---

##### `ListStudioComponents`<sup>Required</sup> <a name="ListStudioComponents" id="@cdk_utils/iam.nimble.NimbleActions.property.ListStudioComponents"></a>

```typescript
public readonly ListStudioComponents: string;
```

- *Type:* string

[Read] nimble:ListStudioComponents.

---

##### `ListStudioMembers`<sup>Required</sup> <a name="ListStudioMembers" id="@cdk_utils/iam.nimble.NimbleActions.property.ListStudioMembers"></a>

```typescript
public readonly ListStudioMembers: string;
```

- *Type:* string

[Read] nimble:ListStudioMembers.

---

##### `ListStudios`<sup>Required</sup> <a name="ListStudios" id="@cdk_utils/iam.nimble.NimbleActions.property.ListStudios"></a>

```typescript
public readonly ListStudios: string;
```

- *Type:* string

[Read] nimble:ListStudios.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.nimble.NimbleActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] nimble:ListTagsForResource.

---

##### `PutLaunchProfileMembers`<sup>Required</sup> <a name="PutLaunchProfileMembers" id="@cdk_utils/iam.nimble.NimbleActions.property.PutLaunchProfileMembers"></a>

```typescript
public readonly PutLaunchProfileMembers: string;
```

- *Type:* string

[Write] nimble:PutLaunchProfileMembers.

---

##### `PutStudioLogEvents`<sup>Required</sup> <a name="PutStudioLogEvents" id="@cdk_utils/iam.nimble.NimbleActions.property.PutStudioLogEvents"></a>

```typescript
public readonly PutStudioLogEvents: string;
```

- *Type:* string

[Write] nimble:PutStudioLogEvents.

---

##### `PutStudioMembers`<sup>Required</sup> <a name="PutStudioMembers" id="@cdk_utils/iam.nimble.NimbleActions.property.PutStudioMembers"></a>

```typescript
public readonly PutStudioMembers: string;
```

- *Type:* string

[Write] nimble:PutStudioMembers.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.nimble.NimbleActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartStreamingSession`<sup>Required</sup> <a name="StartStreamingSession" id="@cdk_utils/iam.nimble.NimbleActions.property.StartStreamingSession"></a>

```typescript
public readonly StartStreamingSession: string;
```

- *Type:* string

[Write] nimble:StartStreamingSession.

---

##### `StartStudioSSOConfigurationRepair`<sup>Required</sup> <a name="StartStudioSSOConfigurationRepair" id="@cdk_utils/iam.nimble.NimbleActions.property.StartStudioSSOConfigurationRepair"></a>

```typescript
public readonly StartStudioSSOConfigurationRepair: string;
```

- *Type:* string

[Write] nimble:StartStudioSSOConfigurationRepair.

---

##### `StopStreamingSession`<sup>Required</sup> <a name="StopStreamingSession" id="@cdk_utils/iam.nimble.NimbleActions.property.StopStreamingSession"></a>

```typescript
public readonly StopStreamingSession: string;
```

- *Type:* string

[Write] nimble:StopStreamingSession.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.nimble.NimbleActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] nimble:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.nimble.NimbleActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] nimble:UntagResource.

---

##### `UpdateLaunchProfile`<sup>Required</sup> <a name="UpdateLaunchProfile" id="@cdk_utils/iam.nimble.NimbleActions.property.UpdateLaunchProfile"></a>

```typescript
public readonly UpdateLaunchProfile: string;
```

- *Type:* string

[Write] nimble:UpdateLaunchProfile.

---

##### `UpdateLaunchProfileMember`<sup>Required</sup> <a name="UpdateLaunchProfileMember" id="@cdk_utils/iam.nimble.NimbleActions.property.UpdateLaunchProfileMember"></a>

```typescript
public readonly UpdateLaunchProfileMember: string;
```

- *Type:* string

[Write] nimble:UpdateLaunchProfileMember.

---

##### `UpdateStreamingImage`<sup>Required</sup> <a name="UpdateStreamingImage" id="@cdk_utils/iam.nimble.NimbleActions.property.UpdateStreamingImage"></a>

```typescript
public readonly UpdateStreamingImage: string;
```

- *Type:* string

[Write] nimble:UpdateStreamingImage.

---

##### `UpdateStudio`<sup>Required</sup> <a name="UpdateStudio" id="@cdk_utils/iam.nimble.NimbleActions.property.UpdateStudio"></a>

```typescript
public readonly UpdateStudio: string;
```

- *Type:* string

[Write] nimble:UpdateStudio.

---

##### `UpdateStudioComponent`<sup>Required</sup> <a name="UpdateStudioComponent" id="@cdk_utils/iam.nimble.NimbleActions.property.UpdateStudioComponent"></a>

```typescript
public readonly UpdateStudioComponent: string;
```

- *Type:* string

[Write] nimble:UpdateStudioComponent.

---

### NimbleConditions <a name="NimbleConditions" id="@cdk_utils/iam.nimble.NimbleConditions"></a>

Condition key constants and builders for nimble.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.nimble.NimbleConditions.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

new nimble.NimbleConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.createdBy">createdBy</a></code> | Generates a condition block for `nimble:createdBy`. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.ownedBy">ownedBy</a></code> | Generates a condition block for `nimble:ownedBy`. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.principalId">principalId</a></code> | Generates a condition block for `nimble:principalId`. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.requesterPrincipalId">requesterPrincipalId</a></code> | Generates a condition block for `nimble:requesterPrincipalId`. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.studioId">studioId</a></code> | Generates a condition block for `nimble:studioId`. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `createdBy` <a name="createdBy" id="@cdk_utils/iam.nimble.NimbleConditions.createdBy"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleConditions.createdBy(value: string)
```

Generates a condition block for `nimble:createdBy`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.nimble.NimbleConditions.createdBy.parameter.value"></a>

- *Type:* string

---

##### `ownedBy` <a name="ownedBy" id="@cdk_utils/iam.nimble.NimbleConditions.ownedBy"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleConditions.ownedBy(value: string)
```

Generates a condition block for `nimble:ownedBy`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.nimble.NimbleConditions.ownedBy.parameter.value"></a>

- *Type:* string

---

##### `principalId` <a name="principalId" id="@cdk_utils/iam.nimble.NimbleConditions.principalId"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleConditions.principalId(value: string)
```

Generates a condition block for `nimble:principalId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.nimble.NimbleConditions.principalId.parameter.value"></a>

- *Type:* string

---

##### `requesterPrincipalId` <a name="requesterPrincipalId" id="@cdk_utils/iam.nimble.NimbleConditions.requesterPrincipalId"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleConditions.requesterPrincipalId(value: string)
```

Generates a condition block for `nimble:requesterPrincipalId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.nimble.NimbleConditions.requesterPrincipalId.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.nimble.NimbleConditions.requestTag"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.nimble.NimbleConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.nimble.NimbleConditions.resourceTag"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.nimble.NimbleConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `studioId` <a name="studioId" id="@cdk_utils/iam.nimble.NimbleConditions.studioId"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleConditions.studioId(value: string)
```

Generates a condition block for `nimble:studioId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.nimble.NimbleConditions.studioId.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.nimble.NimbleConditions.tagKeys"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.nimble.NimbleConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.actionGetStreamingSessionBackupConditionKeys">actionGetStreamingSessionBackupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetStreamingSessionBackup action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.actionGetStreamingSessionConditionKeys">actionGetStreamingSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetStreamingSession action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.actionGetStreamingSessionStreamConditionKeys">actionGetStreamingSessionStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetStreamingSessionStream action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.CREATED_BY">CREATED_BY</a></code> | <code>string</code> | Condition key: nimble:createdBy (String). |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.CreateLaunchProfileConditionKeys">CreateLaunchProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLaunchProfile action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.CreateStreamingImageConditionKeys">CreateStreamingImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStreamingImage action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.CreateStreamingSessionConditionKeys">CreateStreamingSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStreamingSession action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.CreateStreamingSessionStreamConditionKeys">CreateStreamingSessionStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStreamingSessionStream action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.CreateStudioComponentConditionKeys">CreateStudioComponentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStudioComponent action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.CreateStudioConditionKeys">CreateStudioConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStudio action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.DeleteStreamingSessionConditionKeys">DeleteStreamingSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteStreamingSession action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.ListLaunchProfilesConditionKeys">ListLaunchProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListLaunchProfiles action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.ListStreamingSessionBackupsConditionKeys">ListStreamingSessionBackupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListStreamingSessionBackups action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.ListStreamingSessionsConditionKeys">ListStreamingSessionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListStreamingSessions action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.OWNED_BY">OWNED_BY</a></code> | <code>string</code> | Condition key: nimble:ownedBy (String). |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.PRINCIPAL_ID">PRINCIPAL_ID</a></code> | <code>string</code> | Condition key: nimble:principalId (String). |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.REQUESTER_PRINCIPAL_ID">REQUESTER_PRINCIPAL_ID</a></code> | <code>string</code> | Condition key: nimble:requesterPrincipalId (String). |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.StartStreamingSessionConditionKeys">StartStreamingSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartStreamingSession action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.StopStreamingSessionConditionKeys">StopStreamingSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopStreamingSession action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.STUDIO_ID">STUDIO_ID</a></code> | <code>string</code> | Condition key: nimble:studioId (ARN). |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetStreamingSessionBackupConditionKeys`<sup>Required</sup> <a name="actionGetStreamingSessionBackupConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.actionGetStreamingSessionBackupConditionKeys"></a>

```typescript
public readonly actionGetStreamingSessionBackupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetStreamingSessionBackup action.

---

##### `actionGetStreamingSessionConditionKeys`<sup>Required</sup> <a name="actionGetStreamingSessionConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.actionGetStreamingSessionConditionKeys"></a>

```typescript
public readonly actionGetStreamingSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetStreamingSession action.

---

##### `actionGetStreamingSessionStreamConditionKeys`<sup>Required</sup> <a name="actionGetStreamingSessionStreamConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.actionGetStreamingSessionStreamConditionKeys"></a>

```typescript
public readonly actionGetStreamingSessionStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetStreamingSessionStream action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.nimble.NimbleConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.nimble.NimbleConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.nimble.NimbleConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CREATED_BY`<sup>Required</sup> <a name="CREATED_BY" id="@cdk_utils/iam.nimble.NimbleConditions.property.CREATED_BY"></a>

```typescript
public readonly CREATED_BY: string;
```

- *Type:* string

Condition key: nimble:createdBy (String).

---

##### `CreateLaunchProfileConditionKeys`<sup>Required</sup> <a name="CreateLaunchProfileConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.CreateLaunchProfileConditionKeys"></a>

```typescript
public readonly CreateLaunchProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLaunchProfile action.

---

##### `CreateStreamingImageConditionKeys`<sup>Required</sup> <a name="CreateStreamingImageConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.CreateStreamingImageConditionKeys"></a>

```typescript
public readonly CreateStreamingImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStreamingImage action.

---

##### `CreateStreamingSessionConditionKeys`<sup>Required</sup> <a name="CreateStreamingSessionConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.CreateStreamingSessionConditionKeys"></a>

```typescript
public readonly CreateStreamingSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStreamingSession action.

---

##### `CreateStreamingSessionStreamConditionKeys`<sup>Required</sup> <a name="CreateStreamingSessionStreamConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.CreateStreamingSessionStreamConditionKeys"></a>

```typescript
public readonly CreateStreamingSessionStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStreamingSessionStream action.

---

##### `CreateStudioComponentConditionKeys`<sup>Required</sup> <a name="CreateStudioComponentConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.CreateStudioComponentConditionKeys"></a>

```typescript
public readonly CreateStudioComponentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStudioComponent action.

---

##### `CreateStudioConditionKeys`<sup>Required</sup> <a name="CreateStudioConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.CreateStudioConditionKeys"></a>

```typescript
public readonly CreateStudioConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStudio action.

---

##### `DeleteStreamingSessionConditionKeys`<sup>Required</sup> <a name="DeleteStreamingSessionConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.DeleteStreamingSessionConditionKeys"></a>

```typescript
public readonly DeleteStreamingSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteStreamingSession action.

---

##### `ListLaunchProfilesConditionKeys`<sup>Required</sup> <a name="ListLaunchProfilesConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.ListLaunchProfilesConditionKeys"></a>

```typescript
public readonly ListLaunchProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListLaunchProfiles action.

---

##### `ListStreamingSessionBackupsConditionKeys`<sup>Required</sup> <a name="ListStreamingSessionBackupsConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.ListStreamingSessionBackupsConditionKeys"></a>

```typescript
public readonly ListStreamingSessionBackupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListStreamingSessionBackups action.

---

##### `ListStreamingSessionsConditionKeys`<sup>Required</sup> <a name="ListStreamingSessionsConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.ListStreamingSessionsConditionKeys"></a>

```typescript
public readonly ListStreamingSessionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListStreamingSessions action.

---

##### `OWNED_BY`<sup>Required</sup> <a name="OWNED_BY" id="@cdk_utils/iam.nimble.NimbleConditions.property.OWNED_BY"></a>

```typescript
public readonly OWNED_BY: string;
```

- *Type:* string

Condition key: nimble:ownedBy (String).

---

##### `PRINCIPAL_ID`<sup>Required</sup> <a name="PRINCIPAL_ID" id="@cdk_utils/iam.nimble.NimbleConditions.property.PRINCIPAL_ID"></a>

```typescript
public readonly PRINCIPAL_ID: string;
```

- *Type:* string

Condition key: nimble:principalId (String).

---

##### `REQUESTER_PRINCIPAL_ID`<sup>Required</sup> <a name="REQUESTER_PRINCIPAL_ID" id="@cdk_utils/iam.nimble.NimbleConditions.property.REQUESTER_PRINCIPAL_ID"></a>

```typescript
public readonly REQUESTER_PRINCIPAL_ID: string;
```

- *Type:* string

Condition key: nimble:requesterPrincipalId (String).

---

##### `StartStreamingSessionConditionKeys`<sup>Required</sup> <a name="StartStreamingSessionConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.StartStreamingSessionConditionKeys"></a>

```typescript
public readonly StartStreamingSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartStreamingSession action.

---

##### `StopStreamingSessionConditionKeys`<sup>Required</sup> <a name="StopStreamingSessionConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.StopStreamingSessionConditionKeys"></a>

```typescript
public readonly StopStreamingSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopStreamingSession action.

---

##### `STUDIO_ID`<sup>Required</sup> <a name="STUDIO_ID" id="@cdk_utils/iam.nimble.NimbleConditions.property.STUDIO_ID"></a>

```typescript
public readonly STUDIO_ID: string;
```

- *Type:* string

Condition key: nimble:studioId (ARN).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.nimble.NimbleConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### NimbleResources <a name="NimbleResources" id="@cdk_utils/iam.nimble.NimbleResources"></a>

ARN builders, validators, and parsers for nimble resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.nimble.NimbleResources.Initializer"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

new nimble.NimbleResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.eula">eula</a></code> | Builds an ARN for the eula resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.eulaAcceptance">eulaAcceptance</a></code> | Builds an ARN for the eula-acceptance resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.isValidEulaAcceptanceArn">isValidEulaAcceptanceArn</a></code> | Validates whether a string is a valid ARN for the eula-acceptance resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.isValidEulaArn">isValidEulaArn</a></code> | Validates whether a string is a valid ARN for the eula resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.isValidLaunchProfileArn">isValidLaunchProfileArn</a></code> | Validates whether a string is a valid ARN for the launch-profile resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.isValidStreamingImageArn">isValidStreamingImageArn</a></code> | Validates whether a string is a valid ARN for the streaming-image resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.isValidStreamingSessionArn">isValidStreamingSessionArn</a></code> | Validates whether a string is a valid ARN for the streaming-session resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.isValidStreamingSessionBackupArn">isValidStreamingSessionBackupArn</a></code> | Validates whether a string is a valid ARN for the streaming-session-backup resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.isValidStudioArn">isValidStudioArn</a></code> | Validates whether a string is a valid ARN for the studio resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.isValidStudioComponentArn">isValidStudioComponentArn</a></code> | Validates whether a string is a valid ARN for the studio-component resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.launchProfile">launchProfile</a></code> | Builds an ARN for the launch-profile resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.parseEulaAcceptanceArn">parseEulaAcceptanceArn</a></code> | Parses a eula-acceptance ARN into its components. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.parseEulaArn">parseEulaArn</a></code> | Parses a eula ARN into its components. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.parseLaunchProfileArn">parseLaunchProfileArn</a></code> | Parses a launch-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.parseStreamingImageArn">parseStreamingImageArn</a></code> | Parses a streaming-image ARN into its components. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.parseStreamingSessionArn">parseStreamingSessionArn</a></code> | Parses a streaming-session ARN into its components. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.parseStreamingSessionBackupArn">parseStreamingSessionBackupArn</a></code> | Parses a streaming-session-backup ARN into its components. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.parseStudioArn">parseStudioArn</a></code> | Parses a studio ARN into its components. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.parseStudioComponentArn">parseStudioComponentArn</a></code> | Parses a studio-component ARN into its components. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.streamingImage">streamingImage</a></code> | Builds an ARN for the streaming-image resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.streamingSession">streamingSession</a></code> | Builds an ARN for the streaming-session resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.streamingSessionBackup">streamingSessionBackup</a></code> | Builds an ARN for the streaming-session-backup resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.studio">studio</a></code> | Builds an ARN for the studio resource. |
| <code><a href="#@cdk_utils/iam.nimble.NimbleResources.studioComponent">studioComponent</a></code> | Builds an ARN for the studio-component resource. |

---

##### `eula` <a name="eula" id="@cdk_utils/iam.nimble.NimbleResources.eula"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.eula(props: NimbleEulaArnProps)
```

Builds an ARN for the eula resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.nimble.NimbleResources.eula.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.nimble.NimbleEulaArnProps">NimbleEulaArnProps</a>

---

##### `eulaAcceptance` <a name="eulaAcceptance" id="@cdk_utils/iam.nimble.NimbleResources.eulaAcceptance"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.eulaAcceptance(props: NimbleEulaAcceptanceArnProps)
```

Builds an ARN for the eula-acceptance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.nimble.NimbleResources.eulaAcceptance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.nimble.NimbleEulaAcceptanceArnProps">NimbleEulaAcceptanceArnProps</a>

---

##### `isValidEulaAcceptanceArn` <a name="isValidEulaAcceptanceArn" id="@cdk_utils/iam.nimble.NimbleResources.isValidEulaAcceptanceArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.isValidEulaAcceptanceArn(arn: string)
```

Validates whether a string is a valid ARN for the eula-acceptance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.isValidEulaAcceptanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEulaArn` <a name="isValidEulaArn" id="@cdk_utils/iam.nimble.NimbleResources.isValidEulaArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.isValidEulaArn(arn: string)
```

Validates whether a string is a valid ARN for the eula resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.isValidEulaArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLaunchProfileArn` <a name="isValidLaunchProfileArn" id="@cdk_utils/iam.nimble.NimbleResources.isValidLaunchProfileArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.isValidLaunchProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the launch-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.isValidLaunchProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamingImageArn` <a name="isValidStreamingImageArn" id="@cdk_utils/iam.nimble.NimbleResources.isValidStreamingImageArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.isValidStreamingImageArn(arn: string)
```

Validates whether a string is a valid ARN for the streaming-image resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.isValidStreamingImageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamingSessionArn` <a name="isValidStreamingSessionArn" id="@cdk_utils/iam.nimble.NimbleResources.isValidStreamingSessionArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.isValidStreamingSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the streaming-session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.isValidStreamingSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamingSessionBackupArn` <a name="isValidStreamingSessionBackupArn" id="@cdk_utils/iam.nimble.NimbleResources.isValidStreamingSessionBackupArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.isValidStreamingSessionBackupArn(arn: string)
```

Validates whether a string is a valid ARN for the streaming-session-backup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.isValidStreamingSessionBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStudioArn` <a name="isValidStudioArn" id="@cdk_utils/iam.nimble.NimbleResources.isValidStudioArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.isValidStudioArn(arn: string)
```

Validates whether a string is a valid ARN for the studio resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.isValidStudioArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStudioComponentArn` <a name="isValidStudioComponentArn" id="@cdk_utils/iam.nimble.NimbleResources.isValidStudioComponentArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.isValidStudioComponentArn(arn: string)
```

Validates whether a string is a valid ARN for the studio-component resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.isValidStudioComponentArn.parameter.arn"></a>

- *Type:* string

---

##### `launchProfile` <a name="launchProfile" id="@cdk_utils/iam.nimble.NimbleResources.launchProfile"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.launchProfile(props: NimbleLaunchProfileArnProps)
```

Builds an ARN for the launch-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.nimble.NimbleResources.launchProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.nimble.NimbleLaunchProfileArnProps">NimbleLaunchProfileArnProps</a>

---

##### `parseEulaAcceptanceArn` <a name="parseEulaAcceptanceArn" id="@cdk_utils/iam.nimble.NimbleResources.parseEulaAcceptanceArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.parseEulaAcceptanceArn(arn: string)
```

Parses a eula-acceptance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.parseEulaAcceptanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEulaArn` <a name="parseEulaArn" id="@cdk_utils/iam.nimble.NimbleResources.parseEulaArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.parseEulaArn(arn: string)
```

Parses a eula ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.parseEulaArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLaunchProfileArn` <a name="parseLaunchProfileArn" id="@cdk_utils/iam.nimble.NimbleResources.parseLaunchProfileArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.parseLaunchProfileArn(arn: string)
```

Parses a launch-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.parseLaunchProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamingImageArn` <a name="parseStreamingImageArn" id="@cdk_utils/iam.nimble.NimbleResources.parseStreamingImageArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.parseStreamingImageArn(arn: string)
```

Parses a streaming-image ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.parseStreamingImageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamingSessionArn` <a name="parseStreamingSessionArn" id="@cdk_utils/iam.nimble.NimbleResources.parseStreamingSessionArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.parseStreamingSessionArn(arn: string)
```

Parses a streaming-session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.parseStreamingSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamingSessionBackupArn` <a name="parseStreamingSessionBackupArn" id="@cdk_utils/iam.nimble.NimbleResources.parseStreamingSessionBackupArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.parseStreamingSessionBackupArn(arn: string)
```

Parses a streaming-session-backup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.parseStreamingSessionBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStudioArn` <a name="parseStudioArn" id="@cdk_utils/iam.nimble.NimbleResources.parseStudioArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.parseStudioArn(arn: string)
```

Parses a studio ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.parseStudioArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStudioComponentArn` <a name="parseStudioComponentArn" id="@cdk_utils/iam.nimble.NimbleResources.parseStudioComponentArn"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.parseStudioComponentArn(arn: string)
```

Parses a studio-component ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nimble.NimbleResources.parseStudioComponentArn.parameter.arn"></a>

- *Type:* string

---

##### `streamingImage` <a name="streamingImage" id="@cdk_utils/iam.nimble.NimbleResources.streamingImage"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.streamingImage(props: NimbleStreamingImageArnProps)
```

Builds an ARN for the streaming-image resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.nimble.NimbleResources.streamingImage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.nimble.NimbleStreamingImageArnProps">NimbleStreamingImageArnProps</a>

---

##### `streamingSession` <a name="streamingSession" id="@cdk_utils/iam.nimble.NimbleResources.streamingSession"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.streamingSession(props: NimbleStreamingSessionArnProps)
```

Builds an ARN for the streaming-session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.nimble.NimbleResources.streamingSession.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionArnProps">NimbleStreamingSessionArnProps</a>

---

##### `streamingSessionBackup` <a name="streamingSessionBackup" id="@cdk_utils/iam.nimble.NimbleResources.streamingSessionBackup"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.streamingSessionBackup(props: NimbleStreamingSessionBackupArnProps)
```

Builds an ARN for the streaming-session-backup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.nimble.NimbleResources.streamingSessionBackup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.nimble.NimbleStreamingSessionBackupArnProps">NimbleStreamingSessionBackupArnProps</a>

---

##### `studio` <a name="studio" id="@cdk_utils/iam.nimble.NimbleResources.studio"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.studio(props: NimbleStudioArnProps)
```

Builds an ARN for the studio resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.nimble.NimbleResources.studio.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.nimble.NimbleStudioArnProps">NimbleStudioArnProps</a>

---

##### `studioComponent` <a name="studioComponent" id="@cdk_utils/iam.nimble.NimbleResources.studioComponent"></a>

```typescript
import { nimble } from '@cdk_utils/iam'

nimble.NimbleResources.studioComponent(props: NimbleStudioComponentArnProps)
```

Builds an ARN for the studio-component resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.nimble.NimbleResources.studioComponent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.nimble.NimbleStudioComponentArnProps">NimbleStudioComponentArnProps</a>

---




