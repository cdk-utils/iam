# `iotsitewise` Submodule <a name="`iotsitewise` Submodule" id="@cdk_utils/iam.iotsitewise"></a>


## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseAccessPolicyArnComponents <a name="IotsitewiseAccessPolicyArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnComponents"></a>

Parsed components of a access-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseAccessPolicyArnComponents: iotsitewise.IotsitewiseAccessPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnComponents.property.accessPolicyId">accessPolicyId</a></code> | <code>string</code> | The AccessPolicyId component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnComponents.property.accessPolicyId"></a>

```typescript
public readonly accessPolicyId: string;
```

- *Type:* string

The AccessPolicyId component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotsitewiseAccessPolicyArnProps <a name="IotsitewiseAccessPolicyArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnProps"></a>

Properties for building a access-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseAccessPolicyArnProps: iotsitewise.IotsitewiseAccessPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnProps.property.accessPolicyId">accessPolicyId</a></code> | <code>string</code> | The AccessPolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnProps.property.accessPolicyId"></a>

```typescript
public readonly accessPolicyId: string;
```

- *Type:* string

The AccessPolicyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewiseApplicationArnComponents <a name="IotsitewiseApplicationArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseApplicationArnComponents: iotsitewise.IotsitewiseApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents.property.workspaceName">workspaceName</a></code> | <code>string</code> | The WorkspaceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnComponents.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

The WorkspaceName component.

---

### IotsitewiseApplicationArnProps <a name="IotsitewiseApplicationArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseApplicationArnProps: iotsitewise.IotsitewiseApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps.property.workspaceName">workspaceName</a></code> | <code>string</code> | The WorkspaceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

The WorkspaceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewiseAssetArnComponents <a name="IotsitewiseAssetArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnComponents"></a>

Parsed components of a asset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseAssetArnComponents: iotsitewise.IotsitewiseAssetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnComponents.property.assetId">assetId</a></code> | <code>string</code> | The AssetId component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnComponents.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

The AssetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotsitewiseAssetArnProps <a name="IotsitewiseAssetArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnProps"></a>

Properties for building a asset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseAssetArnProps: iotsitewise.IotsitewiseAssetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnProps.property.assetId">assetId</a></code> | <code>string</code> | The AssetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnProps.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

The AssetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewiseAssetModelArnComponents <a name="IotsitewiseAssetModelArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnComponents"></a>

Parsed components of a asset-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseAssetModelArnComponents: iotsitewise.IotsitewiseAssetModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnComponents.property.assetModelId">assetModelId</a></code> | <code>string</code> | The AssetModelId component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `assetModelId`<sup>Required</sup> <a name="assetModelId" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnComponents.property.assetModelId"></a>

```typescript
public readonly assetModelId: string;
```

- *Type:* string

The AssetModelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotsitewiseAssetModelArnProps <a name="IotsitewiseAssetModelArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnProps"></a>

Properties for building a asset-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseAssetModelArnProps: iotsitewise.IotsitewiseAssetModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnProps.property.assetModelId">assetModelId</a></code> | <code>string</code> | The AssetModelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `assetModelId`<sup>Required</sup> <a name="assetModelId" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnProps.property.assetModelId"></a>

```typescript
public readonly assetModelId: string;
```

- *Type:* string

The AssetModelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewiseComputationModelArnComponents <a name="IotsitewiseComputationModelArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnComponents"></a>

Parsed components of a computation-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseComputationModelArnComponents: iotsitewise.IotsitewiseComputationModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnComponents.property.computationModelId">computationModelId</a></code> | <code>string</code> | The ComputationModelId component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `computationModelId`<sup>Required</sup> <a name="computationModelId" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnComponents.property.computationModelId"></a>

```typescript
public readonly computationModelId: string;
```

- *Type:* string

The ComputationModelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotsitewiseComputationModelArnProps <a name="IotsitewiseComputationModelArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnProps"></a>

Properties for building a computation-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseComputationModelArnProps: iotsitewise.IotsitewiseComputationModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnProps.property.computationModelId">computationModelId</a></code> | <code>string</code> | The ComputationModelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `computationModelId`<sup>Required</sup> <a name="computationModelId" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnProps.property.computationModelId"></a>

```typescript
public readonly computationModelId: string;
```

- *Type:* string

The ComputationModelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewiseDashboardArnComponents <a name="IotsitewiseDashboardArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnComponents"></a>

Parsed components of a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseDashboardArnComponents: iotsitewise.IotsitewiseDashboardArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnComponents.property.dashboardId">dashboardId</a></code> | <code>string</code> | The DashboardId component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnComponents.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

The DashboardId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotsitewiseDashboardArnProps <a name="IotsitewiseDashboardArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnProps"></a>

Properties for building a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseDashboardArnProps: iotsitewise.IotsitewiseDashboardArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnProps.property.dashboardId">dashboardId</a></code> | <code>string</code> | The DashboardId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnProps.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

The DashboardId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewiseDatasetArnComponents <a name="IotsitewiseDatasetArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseDatasetArnComponents: iotsitewise.IotsitewiseDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnComponents.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnComponents.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotsitewiseDatasetArnProps <a name="IotsitewiseDatasetArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseDatasetArnProps: iotsitewise.IotsitewiseDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnProps.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnProps.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewiseGatewayArnComponents <a name="IotsitewiseGatewayArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnComponents"></a>

Parsed components of a gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseGatewayArnComponents: iotsitewise.IotsitewiseGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotsitewiseGatewayArnProps <a name="IotsitewiseGatewayArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnProps"></a>

Properties for building a gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseGatewayArnProps: iotsitewise.IotsitewiseGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewisePipelineArnComponents <a name="IotsitewisePipelineArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents"></a>

Parsed components of a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewisePipelineArnComponents: iotsitewise.IotsitewisePipelineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents.property.workspaceName">workspaceName</a></code> | <code>string</code> | The WorkspaceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnComponents.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

The WorkspaceName component.

---

### IotsitewisePipelineArnProps <a name="IotsitewisePipelineArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps"></a>

Properties for building a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewisePipelineArnProps: iotsitewise.IotsitewisePipelineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps.property.workspaceName">workspaceName</a></code> | <code>string</code> | The WorkspaceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component of the ARN.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

The WorkspaceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewisePortalArnComponents <a name="IotsitewisePortalArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnComponents"></a>

Parsed components of a portal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewisePortalArnComponents: iotsitewise.IotsitewisePortalArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePortalArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePortalArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePortalArnComponents.property.portalId">portalId</a></code> | <code>string</code> | The PortalId component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePortalArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnComponents.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

The PortalId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotsitewisePortalArnProps <a name="IotsitewisePortalArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnProps"></a>

Properties for building a portal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewisePortalArnProps: iotsitewise.IotsitewisePortalArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePortalArnProps.property.portalId">portalId</a></code> | <code>string</code> | The PortalId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePortalArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePortalArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewisePortalArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnProps.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

The PortalId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewisePortalArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewiseProjectArnComponents <a name="IotsitewiseProjectArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnComponents"></a>

Parsed components of a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseProjectArnComponents: iotsitewise.IotsitewiseProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnComponents.property.projectId">projectId</a></code> | <code>string</code> | The ProjectId component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnComponents.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ProjectId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotsitewiseProjectArnProps <a name="IotsitewiseProjectArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnProps"></a>

Properties for building a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseProjectArnProps: iotsitewise.IotsitewiseProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnProps.property.projectId">projectId</a></code> | <code>string</code> | The ProjectId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ProjectId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewiseTaskArnComponents <a name="IotsitewiseTaskArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents"></a>

Parsed components of a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseTaskArnComponents: iotsitewise.IotsitewiseTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents.property.taskName">taskName</a></code> | <code>string</code> | The TaskName component. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents.property.workspaceName">workspaceName</a></code> | <code>string</code> | The WorkspaceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents.property.taskName"></a>

```typescript
public readonly taskName: string;
```

- *Type:* string

The TaskName component.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnComponents.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

The WorkspaceName component.

---

### IotsitewiseTaskArnProps <a name="IotsitewiseTaskArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps"></a>

Properties for building a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseTaskArnProps: iotsitewise.IotsitewiseTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps.property.taskName">taskName</a></code> | <code>string</code> | The TaskName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps.property.workspaceName">workspaceName</a></code> | <code>string</code> | The WorkspaceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps.property.taskName"></a>

```typescript
public readonly taskName: string;
```

- *Type:* string

The TaskName component of the ARN.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

The WorkspaceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewiseTimeSeriesArnComponents <a name="IotsitewiseTimeSeriesArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnComponents"></a>

Parsed components of a time-series ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseTimeSeriesArnComponents: iotsitewise.IotsitewiseTimeSeriesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnComponents.property.timeSeriesId">timeSeriesId</a></code> | <code>string</code> | The TimeSeriesId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `timeSeriesId`<sup>Required</sup> <a name="timeSeriesId" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnComponents.property.timeSeriesId"></a>

```typescript
public readonly timeSeriesId: string;
```

- *Type:* string

The TimeSeriesId component.

---

### IotsitewiseTimeSeriesArnProps <a name="IotsitewiseTimeSeriesArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnProps"></a>

Properties for building a time-series ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseTimeSeriesArnProps: iotsitewise.IotsitewiseTimeSeriesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnProps.property.timeSeriesId">timeSeriesId</a></code> | <code>string</code> | The TimeSeriesId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `timeSeriesId`<sup>Required</sup> <a name="timeSeriesId" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnProps.property.timeSeriesId"></a>

```typescript
public readonly timeSeriesId: string;
```

- *Type:* string

The TimeSeriesId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotsitewiseWorkspaceArnComponents <a name="IotsitewiseWorkspaceArnComponents" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnComponents"></a>

Parsed components of a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnComponents.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseWorkspaceArnComponents: iotsitewise.IotsitewiseWorkspaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnComponents.property.workspaceName">workspaceName</a></code> | <code>string</code> | The WorkspaceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnComponents.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

The WorkspaceName component.

---

### IotsitewiseWorkspaceArnProps <a name="IotsitewiseWorkspaceArnProps" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnProps"></a>

Properties for building a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnProps.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

const iotsitewiseWorkspaceArnProps: iotsitewise.IotsitewiseWorkspaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnProps.property.workspaceName">workspaceName</a></code> | <code>string</code> | The WorkspaceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnProps.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

The WorkspaceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseActions <a name="IotsitewiseActions" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions"></a>

IAM action constants for the iotsitewise service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

new iotsitewise.IotsitewiseActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetAssetPropertyAggregates">actionGetAssetPropertyAggregates</a></code> | <code>string</code> | [Read] iotsitewise:GetAssetPropertyAggregates. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetAssetPropertyValue">actionGetAssetPropertyValue</a></code> | <code>string</code> | [Read] iotsitewise:GetAssetPropertyValue. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetAssetPropertyValueHistory">actionGetAssetPropertyValueHistory</a></code> | <code>string</code> | [Read] iotsitewise:GetAssetPropertyValueHistory. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetCaptureData">actionGetCaptureData</a></code> | <code>string</code> | [Read] iotsitewise:GetCaptureData. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetInterpolatedAssetPropertyValues">actionGetInterpolatedAssetPropertyValues</a></code> | <code>string</code> | [Read] iotsitewise:GetInterpolatedAssetPropertyValues. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetQueryResults">actionGetQueryResults</a></code> | <code>string</code> | [Read] iotsitewise:GetQueryResults. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetSearchResults">actionGetSearchResults</a></code> | <code>string</code> | [Read] iotsitewise:GetSearchResults. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AssociateAssets">AssociateAssets</a></code> | <code>string</code> | [Write] iotsitewise:AssociateAssets. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AssociateTimeSeriesToAssetProperty">AssociateTimeSeriesToAssetProperty</a></code> | <code>string</code> | [Write] iotsitewise:AssociateTimeSeriesToAssetProperty. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchAssociateDataSegmentsToDataset">BatchAssociateDataSegmentsToDataset</a></code> | <code>string</code> | [Write] iotsitewise:BatchAssociateDataSegmentsToDataset. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchAssociateProjectAssets">BatchAssociateProjectAssets</a></code> | <code>string</code> | [Write] iotsitewise:BatchAssociateProjectAssets. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchDeleteDatasetDataSegments">BatchDeleteDatasetDataSegments</a></code> | <code>string</code> | [Write] iotsitewise:BatchDeleteDatasetDataSegments. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchDisassociateDataSegmentsFromDataset">BatchDisassociateDataSegmentsFromDataset</a></code> | <code>string</code> | [Write] iotsitewise:BatchDisassociateDataSegmentsFromDataset. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchDisassociateProjectAssets">BatchDisassociateProjectAssets</a></code> | <code>string</code> | [Write] iotsitewise:BatchDisassociateProjectAssets. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchGetAssetPropertyAggregates">BatchGetAssetPropertyAggregates</a></code> | <code>string</code> | [Read] iotsitewise:BatchGetAssetPropertyAggregates. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchGetAssetPropertyValue">BatchGetAssetPropertyValue</a></code> | <code>string</code> | [Read] iotsitewise:BatchGetAssetPropertyValue. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchGetAssetPropertyValueHistory">BatchGetAssetPropertyValueHistory</a></code> | <code>string</code> | [Read] iotsitewise:BatchGetAssetPropertyValueHistory. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchPutAssetPropertyValue">BatchPutAssetPropertyValue</a></code> | <code>string</code> | [Write] iotsitewise:BatchPutAssetPropertyValue. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CancelEnrichmentJob">CancelEnrichmentJob</a></code> | <code>string</code> | [Write] iotsitewise:CancelEnrichmentJob. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CancelPipelineExecution">CancelPipelineExecution</a></code> | <code>string</code> | [Write] iotsitewise:CancelPipelineExecution. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CancelQuery">CancelQuery</a></code> | <code>string</code> | [Write] iotsitewise:CancelQuery. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateAccessPolicy">CreateAccessPolicy</a></code> | <code>string</code> | [Write] iotsitewise:CreateAccessPolicy. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] iotsitewise:CreateApplication. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateAsset">CreateAsset</a></code> | <code>string</code> | [Write] iotsitewise:CreateAsset. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateAssetModel">CreateAssetModel</a></code> | <code>string</code> | [Write] iotsitewise:CreateAssetModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateAssetModelCompositeModel">CreateAssetModelCompositeModel</a></code> | <code>string</code> | [Write] iotsitewise:CreateAssetModelCompositeModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateBulkImportJob">CreateBulkImportJob</a></code> | <code>string</code> | [Write] iotsitewise:CreateBulkImportJob. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateComputationModel">CreateComputationModel</a></code> | <code>string</code> | [Write] iotsitewise:CreateComputationModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateDashboard">CreateDashboard</a></code> | <code>string</code> | [Write] iotsitewise:CreateDashboard. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateDataset">CreateDataset</a></code> | <code>string</code> | [Write] iotsitewise:CreateDataset. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateDatasetExportJob">CreateDatasetExportJob</a></code> | <code>string</code> | [Write] iotsitewise:CreateDatasetExportJob. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateEnrichmentJob">CreateEnrichmentJob</a></code> | <code>string</code> | [Write] iotsitewise:CreateEnrichmentJob. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateGateway">CreateGateway</a></code> | <code>string</code> | [Write] iotsitewise:CreateGateway. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreatePipeline">CreatePipeline</a></code> | <code>string</code> | [Write] iotsitewise:CreatePipeline. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreatePortal">CreatePortal</a></code> | <code>string</code> | [Write] iotsitewise:CreatePortal. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] iotsitewise:CreateProject. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateTask">CreateTask</a></code> | <code>string</code> | [Write] iotsitewise:CreateTask. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateWorkspace">CreateWorkspace</a></code> | <code>string</code> | [Write] iotsitewise:CreateWorkspace. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteAccessPolicy">DeleteAccessPolicy</a></code> | <code>string</code> | [Write] iotsitewise:DeleteAccessPolicy. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] iotsitewise:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteAsset">DeleteAsset</a></code> | <code>string</code> | [Write] iotsitewise:DeleteAsset. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteAssetModel">DeleteAssetModel</a></code> | <code>string</code> | [Write] iotsitewise:DeleteAssetModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteAssetModelCompositeModel">DeleteAssetModelCompositeModel</a></code> | <code>string</code> | [Write] iotsitewise:DeleteAssetModelCompositeModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteAssetModelInterfaceRelationship">DeleteAssetModelInterfaceRelationship</a></code> | <code>string</code> | [Write] iotsitewise:DeleteAssetModelInterfaceRelationship. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteComputationModel">DeleteComputationModel</a></code> | <code>string</code> | [Write] iotsitewise:DeleteComputationModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteDashboard">DeleteDashboard</a></code> | <code>string</code> | [Write] iotsitewise:DeleteDashboard. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteDataset">DeleteDataset</a></code> | <code>string</code> | [Write] iotsitewise:DeleteDataset. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteGateway">DeleteGateway</a></code> | <code>string</code> | [Write] iotsitewise:DeleteGateway. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeletePipeline">DeletePipeline</a></code> | <code>string</code> | [Write] iotsitewise:DeletePipeline. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeletePortal">DeletePortal</a></code> | <code>string</code> | [Write] iotsitewise:DeletePortal. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteProject">DeleteProject</a></code> | <code>string</code> | [Write] iotsitewise:DeleteProject. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteTask">DeleteTask</a></code> | <code>string</code> | [Write] iotsitewise:DeleteTask. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteTimeSeries">DeleteTimeSeries</a></code> | <code>string</code> | [Write] iotsitewise:DeleteTimeSeries. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteWorkspace">DeleteWorkspace</a></code> | <code>string</code> | [Write] iotsitewise:DeleteWorkspace. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAccessPolicy">DescribeAccessPolicy</a></code> | <code>string</code> | [Read] iotsitewise:DescribeAccessPolicy. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAction">DescribeAction</a></code> | <code>string</code> | [Read] iotsitewise:DescribeAction. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeApplication">DescribeApplication</a></code> | <code>string</code> | [Read] iotsitewise:DescribeApplication. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAsset">DescribeAsset</a></code> | <code>string</code> | [Read] iotsitewise:DescribeAsset. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAssetCompositeModel">DescribeAssetCompositeModel</a></code> | <code>string</code> | [Read] iotsitewise:DescribeAssetCompositeModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAssetModel">DescribeAssetModel</a></code> | <code>string</code> | [Read] iotsitewise:DescribeAssetModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAssetModelCompositeModel">DescribeAssetModelCompositeModel</a></code> | <code>string</code> | [Read] iotsitewise:DescribeAssetModelCompositeModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAssetModelInterfaceRelationship">DescribeAssetModelInterfaceRelationship</a></code> | <code>string</code> | [Read] iotsitewise:DescribeAssetModelInterfaceRelationship. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAssetProperty">DescribeAssetProperty</a></code> | <code>string</code> | [Read] iotsitewise:DescribeAssetProperty. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeBulkImportJob">DescribeBulkImportJob</a></code> | <code>string</code> | [Read] iotsitewise:DescribeBulkImportJob. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeComputationModel">DescribeComputationModel</a></code> | <code>string</code> | [Read] iotsitewise:DescribeComputationModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeComputationModelExecutionSummary">DescribeComputationModelExecutionSummary</a></code> | <code>string</code> | [Read] iotsitewise:DescribeComputationModelExecutionSummary. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeDashboard">DescribeDashboard</a></code> | <code>string</code> | [Read] iotsitewise:DescribeDashboard. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeDataset">DescribeDataset</a></code> | <code>string</code> | [Read] iotsitewise:DescribeDataset. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeDatasetExportJob">DescribeDatasetExportJob</a></code> | <code>string</code> | [Read] iotsitewise:DescribeDatasetExportJob. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeDefaultEncryptionConfiguration">DescribeDefaultEncryptionConfiguration</a></code> | <code>string</code> | [Read] iotsitewise:DescribeDefaultEncryptionConfiguration. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeEnrichmentJob">DescribeEnrichmentJob</a></code> | <code>string</code> | [Read] iotsitewise:DescribeEnrichmentJob. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeExecution">DescribeExecution</a></code> | <code>string</code> | [Read] iotsitewise:DescribeExecution. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeGateway">DescribeGateway</a></code> | <code>string</code> | [Read] iotsitewise:DescribeGateway. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeGatewayCapabilityConfiguration">DescribeGatewayCapabilityConfiguration</a></code> | <code>string</code> | [Read] iotsitewise:DescribeGatewayCapabilityConfiguration. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeLoggingOptions">DescribeLoggingOptions</a></code> | <code>string</code> | [Read] iotsitewise:DescribeLoggingOptions. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribePipeline">DescribePipeline</a></code> | <code>string</code> | [Read] iotsitewise:DescribePipeline. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribePipelineExecution">DescribePipelineExecution</a></code> | <code>string</code> | [Read] iotsitewise:DescribePipelineExecution. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribePortal">DescribePortal</a></code> | <code>string</code> | [Read] iotsitewise:DescribePortal. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeProject">DescribeProject</a></code> | <code>string</code> | [Read] iotsitewise:DescribeProject. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeQuery">DescribeQuery</a></code> | <code>string</code> | [Read] iotsitewise:DescribeQuery. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeSearch">DescribeSearch</a></code> | <code>string</code> | [Read] iotsitewise:DescribeSearch. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeStorageConfiguration">DescribeStorageConfiguration</a></code> | <code>string</code> | [Read] iotsitewise:DescribeStorageConfiguration. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeTask">DescribeTask</a></code> | <code>string</code> | [Read] iotsitewise:DescribeTask. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeTimeSeries">DescribeTimeSeries</a></code> | <code>string</code> | [Read] iotsitewise:DescribeTimeSeries. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeWorkspace">DescribeWorkspace</a></code> | <code>string</code> | [Read] iotsitewise:DescribeWorkspace. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DisassociateAssets">DisassociateAssets</a></code> | <code>string</code> | [Write] iotsitewise:DisassociateAssets. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DisassociateTimeSeriesFromAssetProperty">DisassociateTimeSeriesFromAssetProperty</a></code> | <code>string</code> | [Write] iotsitewise:DisassociateTimeSeriesFromAssetProperty. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.EnableSiteWiseIntegration">EnableSiteWiseIntegration</a></code> | <code>string</code> | [Write] iotsitewise:EnableSiteWiseIntegration. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ExecuteAction">ExecuteAction</a></code> | <code>string</code> | [Write] iotsitewise:ExecuteAction. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ExecuteQuery">ExecuteQuery</a></code> | <code>string</code> | [Read] iotsitewise:ExecuteQuery. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.InvokeAssistant">InvokeAssistant</a></code> | <code>string</code> | [Read] iotsitewise:InvokeAssistant. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAccessPolicies">ListAccessPolicies</a></code> | <code>string</code> | [List] iotsitewise:ListAccessPolicies. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListActions">ListActions</a></code> | <code>string</code> | [List] iotsitewise:ListActions. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] iotsitewise:ListApplications. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssetModelCompositeModels">ListAssetModelCompositeModels</a></code> | <code>string</code> | [List] iotsitewise:ListAssetModelCompositeModels. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssetModelProperties">ListAssetModelProperties</a></code> | <code>string</code> | [List] iotsitewise:ListAssetModelProperties. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssetModels">ListAssetModels</a></code> | <code>string</code> | [List] iotsitewise:ListAssetModels. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssetProperties">ListAssetProperties</a></code> | <code>string</code> | [List] iotsitewise:ListAssetProperties. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssetRelationships">ListAssetRelationships</a></code> | <code>string</code> | [List] iotsitewise:ListAssetRelationships. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssets">ListAssets</a></code> | <code>string</code> | [List] iotsitewise:ListAssets. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssociatedAssets">ListAssociatedAssets</a></code> | <code>string</code> | [List] iotsitewise:ListAssociatedAssets. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListBulkImportJobs">ListBulkImportJobs</a></code> | <code>string</code> | [List] iotsitewise:ListBulkImportJobs. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListCompositionRelationships">ListCompositionRelationships</a></code> | <code>string</code> | [List] iotsitewise:ListCompositionRelationships. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListComputationModelDataBindingUsages">ListComputationModelDataBindingUsages</a></code> | <code>string</code> | [List] iotsitewise:ListComputationModelDataBindingUsages. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListComputationModelResolveToResources">ListComputationModelResolveToResources</a></code> | <code>string</code> | [List] iotsitewise:ListComputationModelResolveToResources. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListComputationModels">ListComputationModels</a></code> | <code>string</code> | [List] iotsitewise:ListComputationModels. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListDashboards">ListDashboards</a></code> | <code>string</code> | [List] iotsitewise:ListDashboards. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListDatasetDataSegmentRelationships">ListDatasetDataSegmentRelationships</a></code> | <code>string</code> | [List] iotsitewise:ListDatasetDataSegmentRelationships. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListDatasetDataSegments">ListDatasetDataSegments</a></code> | <code>string</code> | [List] iotsitewise:ListDatasetDataSegments. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListDatasetExportJobs">ListDatasetExportJobs</a></code> | <code>string</code> | [List] iotsitewise:ListDatasetExportJobs. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListDatasets">ListDatasets</a></code> | <code>string</code> | [List] iotsitewise:ListDatasets. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListEnrichmentJobs">ListEnrichmentJobs</a></code> | <code>string</code> | [List] iotsitewise:ListEnrichmentJobs. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListExecutions">ListExecutions</a></code> | <code>string</code> | [List] iotsitewise:ListExecutions. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListGateways">ListGateways</a></code> | <code>string</code> | [List] iotsitewise:ListGateways. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListInterfaceRelationships">ListInterfaceRelationships</a></code> | <code>string</code> | [List] iotsitewise:ListInterfaceRelationships. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListPipelineExecutions">ListPipelineExecutions</a></code> | <code>string</code> | [List] iotsitewise:ListPipelineExecutions. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListPipelines">ListPipelines</a></code> | <code>string</code> | [List] iotsitewise:ListPipelines. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListPortals">ListPortals</a></code> | <code>string</code> | [List] iotsitewise:ListPortals. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListProjectAssets">ListProjectAssets</a></code> | <code>string</code> | [List] iotsitewise:ListProjectAssets. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [List] iotsitewise:ListProjects. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListQueries">ListQueries</a></code> | <code>string</code> | [List] iotsitewise:ListQueries. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListSearches">ListSearches</a></code> | <code>string</code> | [List] iotsitewise:ListSearches. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] iotsitewise:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListTasks">ListTasks</a></code> | <code>string</code> | [List] iotsitewise:ListTasks. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListTimeSeries">ListTimeSeries</a></code> | <code>string</code> | [List] iotsitewise:ListTimeSeries. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListWorkspaces">ListWorkspaces</a></code> | <code>string</code> | [List] iotsitewise:ListWorkspaces. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.PutAssetModelInterfaceRelationship">PutAssetModelInterfaceRelationship</a></code> | <code>string</code> | [Write] iotsitewise:PutAssetModelInterfaceRelationship. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.PutDefaultEncryptionConfiguration">PutDefaultEncryptionConfiguration</a></code> | <code>string</code> | [Write] iotsitewise:PutDefaultEncryptionConfiguration. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.PutLoggingOptions">PutLoggingOptions</a></code> | <code>string</code> | [Write] iotsitewise:PutLoggingOptions. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.PutStorageConfiguration">PutStorageConfiguration</a></code> | <code>string</code> | [Write] iotsitewise:PutStorageConfiguration. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.StartPipelineExecution">StartPipelineExecution</a></code> | <code>string</code> | [Write] iotsitewise:StartPipelineExecution. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.StartQuery">StartQuery</a></code> | <code>string</code> | [Write] iotsitewise:StartQuery. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.StartSearch">StartSearch</a></code> | <code>string</code> | [Write] iotsitewise:StartSearch. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] iotsitewise:TagResource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] iotsitewise:UntagResource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAccessPolicy">UpdateAccessPolicy</a></code> | <code>string</code> | [Write] iotsitewise:UpdateAccessPolicy. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAsset">UpdateAsset</a></code> | <code>string</code> | [Write] iotsitewise:UpdateAsset. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAssetModel">UpdateAssetModel</a></code> | <code>string</code> | [Write] iotsitewise:UpdateAssetModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAssetModelCompositeModel">UpdateAssetModelCompositeModel</a></code> | <code>string</code> | [Write] iotsitewise:UpdateAssetModelCompositeModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAssetModelPropertyRouting">UpdateAssetModelPropertyRouting</a></code> | <code>string</code> | [Write] iotsitewise:UpdateAssetModelPropertyRouting. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAssetProperty">UpdateAssetProperty</a></code> | <code>string</code> | [Write] iotsitewise:UpdateAssetProperty. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateComputationModel">UpdateComputationModel</a></code> | <code>string</code> | [Write] iotsitewise:UpdateComputationModel. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateDashboard">UpdateDashboard</a></code> | <code>string</code> | [Write] iotsitewise:UpdateDashboard. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateDataset">UpdateDataset</a></code> | <code>string</code> | [Write] iotsitewise:UpdateDataset. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateGateway">UpdateGateway</a></code> | <code>string</code> | [Write] iotsitewise:UpdateGateway. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateGatewayCapabilityConfiguration">UpdateGatewayCapabilityConfiguration</a></code> | <code>string</code> | [Write] iotsitewise:UpdateGatewayCapabilityConfiguration. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdatePipeline">UpdatePipeline</a></code> | <code>string</code> | [Write] iotsitewise:UpdatePipeline. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdatePortal">UpdatePortal</a></code> | <code>string</code> | [Write] iotsitewise:UpdatePortal. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateProject">UpdateProject</a></code> | <code>string</code> | [Write] iotsitewise:UpdateProject. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateTask">UpdateTask</a></code> | <code>string</code> | [Write] iotsitewise:UpdateTask. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateWorkspace">UpdateWorkspace</a></code> | <code>string</code> | [Write] iotsitewise:UpdateWorkspace. |

---

##### `actionGetAssetPropertyAggregates`<sup>Required</sup> <a name="actionGetAssetPropertyAggregates" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetAssetPropertyAggregates"></a>

```typescript
public readonly actionGetAssetPropertyAggregates: string;
```

- *Type:* string

[Read] iotsitewise:GetAssetPropertyAggregates.

---

##### `actionGetAssetPropertyValue`<sup>Required</sup> <a name="actionGetAssetPropertyValue" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetAssetPropertyValue"></a>

```typescript
public readonly actionGetAssetPropertyValue: string;
```

- *Type:* string

[Read] iotsitewise:GetAssetPropertyValue.

---

##### `actionGetAssetPropertyValueHistory`<sup>Required</sup> <a name="actionGetAssetPropertyValueHistory" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetAssetPropertyValueHistory"></a>

```typescript
public readonly actionGetAssetPropertyValueHistory: string;
```

- *Type:* string

[Read] iotsitewise:GetAssetPropertyValueHistory.

---

##### `actionGetCaptureData`<sup>Required</sup> <a name="actionGetCaptureData" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetCaptureData"></a>

```typescript
public readonly actionGetCaptureData: string;
```

- *Type:* string

[Read] iotsitewise:GetCaptureData.

---

##### `actionGetInterpolatedAssetPropertyValues`<sup>Required</sup> <a name="actionGetInterpolatedAssetPropertyValues" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetInterpolatedAssetPropertyValues"></a>

```typescript
public readonly actionGetInterpolatedAssetPropertyValues: string;
```

- *Type:* string

[Read] iotsitewise:GetInterpolatedAssetPropertyValues.

---

##### `actionGetQueryResults`<sup>Required</sup> <a name="actionGetQueryResults" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetQueryResults"></a>

```typescript
public readonly actionGetQueryResults: string;
```

- *Type:* string

[Read] iotsitewise:GetQueryResults.

---

##### `actionGetSearchResults`<sup>Required</sup> <a name="actionGetSearchResults" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.actionGetSearchResults"></a>

```typescript
public readonly actionGetSearchResults: string;
```

- *Type:* string

[Read] iotsitewise:GetSearchResults.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAssets`<sup>Required</sup> <a name="AssociateAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AssociateAssets"></a>

```typescript
public readonly AssociateAssets: string;
```

- *Type:* string

[Write] iotsitewise:AssociateAssets.

---

##### `AssociateTimeSeriesToAssetProperty`<sup>Required</sup> <a name="AssociateTimeSeriesToAssetProperty" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.AssociateTimeSeriesToAssetProperty"></a>

```typescript
public readonly AssociateTimeSeriesToAssetProperty: string;
```

- *Type:* string

[Write] iotsitewise:AssociateTimeSeriesToAssetProperty.

---

##### `BatchAssociateDataSegmentsToDataset`<sup>Required</sup> <a name="BatchAssociateDataSegmentsToDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchAssociateDataSegmentsToDataset"></a>

```typescript
public readonly BatchAssociateDataSegmentsToDataset: string;
```

- *Type:* string

[Write] iotsitewise:BatchAssociateDataSegmentsToDataset.

---

##### `BatchAssociateProjectAssets`<sup>Required</sup> <a name="BatchAssociateProjectAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchAssociateProjectAssets"></a>

```typescript
public readonly BatchAssociateProjectAssets: string;
```

- *Type:* string

[Write] iotsitewise:BatchAssociateProjectAssets.

---

##### `BatchDeleteDatasetDataSegments`<sup>Required</sup> <a name="BatchDeleteDatasetDataSegments" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchDeleteDatasetDataSegments"></a>

```typescript
public readonly BatchDeleteDatasetDataSegments: string;
```

- *Type:* string

[Write] iotsitewise:BatchDeleteDatasetDataSegments.

---

##### `BatchDisassociateDataSegmentsFromDataset`<sup>Required</sup> <a name="BatchDisassociateDataSegmentsFromDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchDisassociateDataSegmentsFromDataset"></a>

```typescript
public readonly BatchDisassociateDataSegmentsFromDataset: string;
```

- *Type:* string

[Write] iotsitewise:BatchDisassociateDataSegmentsFromDataset.

---

##### `BatchDisassociateProjectAssets`<sup>Required</sup> <a name="BatchDisassociateProjectAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchDisassociateProjectAssets"></a>

```typescript
public readonly BatchDisassociateProjectAssets: string;
```

- *Type:* string

[Write] iotsitewise:BatchDisassociateProjectAssets.

---

##### `BatchGetAssetPropertyAggregates`<sup>Required</sup> <a name="BatchGetAssetPropertyAggregates" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchGetAssetPropertyAggregates"></a>

```typescript
public readonly BatchGetAssetPropertyAggregates: string;
```

- *Type:* string

[Read] iotsitewise:BatchGetAssetPropertyAggregates.

---

##### `BatchGetAssetPropertyValue`<sup>Required</sup> <a name="BatchGetAssetPropertyValue" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchGetAssetPropertyValue"></a>

```typescript
public readonly BatchGetAssetPropertyValue: string;
```

- *Type:* string

[Read] iotsitewise:BatchGetAssetPropertyValue.

---

##### `BatchGetAssetPropertyValueHistory`<sup>Required</sup> <a name="BatchGetAssetPropertyValueHistory" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchGetAssetPropertyValueHistory"></a>

```typescript
public readonly BatchGetAssetPropertyValueHistory: string;
```

- *Type:* string

[Read] iotsitewise:BatchGetAssetPropertyValueHistory.

---

##### `BatchPutAssetPropertyValue`<sup>Required</sup> <a name="BatchPutAssetPropertyValue" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.BatchPutAssetPropertyValue"></a>

```typescript
public readonly BatchPutAssetPropertyValue: string;
```

- *Type:* string

[Write] iotsitewise:BatchPutAssetPropertyValue.

---

##### `CancelEnrichmentJob`<sup>Required</sup> <a name="CancelEnrichmentJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CancelEnrichmentJob"></a>

```typescript
public readonly CancelEnrichmentJob: string;
```

- *Type:* string

[Write] iotsitewise:CancelEnrichmentJob.

---

##### `CancelPipelineExecution`<sup>Required</sup> <a name="CancelPipelineExecution" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CancelPipelineExecution"></a>

```typescript
public readonly CancelPipelineExecution: string;
```

- *Type:* string

[Write] iotsitewise:CancelPipelineExecution.

---

##### `CancelQuery`<sup>Required</sup> <a name="CancelQuery" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CancelQuery"></a>

```typescript
public readonly CancelQuery: string;
```

- *Type:* string

[Write] iotsitewise:CancelQuery.

---

##### `CreateAccessPolicy`<sup>Required</sup> <a name="CreateAccessPolicy" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateAccessPolicy"></a>

```typescript
public readonly CreateAccessPolicy: string;
```

- *Type:* string

[Write] iotsitewise:CreateAccessPolicy.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] iotsitewise:CreateApplication.

---

##### `CreateAsset`<sup>Required</sup> <a name="CreateAsset" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateAsset"></a>

```typescript
public readonly CreateAsset: string;
```

- *Type:* string

[Write] iotsitewise:CreateAsset.

---

##### `CreateAssetModel`<sup>Required</sup> <a name="CreateAssetModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateAssetModel"></a>

```typescript
public readonly CreateAssetModel: string;
```

- *Type:* string

[Write] iotsitewise:CreateAssetModel.

---

##### `CreateAssetModelCompositeModel`<sup>Required</sup> <a name="CreateAssetModelCompositeModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateAssetModelCompositeModel"></a>

```typescript
public readonly CreateAssetModelCompositeModel: string;
```

- *Type:* string

[Write] iotsitewise:CreateAssetModelCompositeModel.

---

##### `CreateBulkImportJob`<sup>Required</sup> <a name="CreateBulkImportJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateBulkImportJob"></a>

```typescript
public readonly CreateBulkImportJob: string;
```

- *Type:* string

[Write] iotsitewise:CreateBulkImportJob.

---

##### `CreateComputationModel`<sup>Required</sup> <a name="CreateComputationModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateComputationModel"></a>

```typescript
public readonly CreateComputationModel: string;
```

- *Type:* string

[Write] iotsitewise:CreateComputationModel.

---

##### `CreateDashboard`<sup>Required</sup> <a name="CreateDashboard" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateDashboard"></a>

```typescript
public readonly CreateDashboard: string;
```

- *Type:* string

[Write] iotsitewise:CreateDashboard.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string;
```

- *Type:* string

[Write] iotsitewise:CreateDataset.

---

##### `CreateDatasetExportJob`<sup>Required</sup> <a name="CreateDatasetExportJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateDatasetExportJob"></a>

```typescript
public readonly CreateDatasetExportJob: string;
```

- *Type:* string

[Write] iotsitewise:CreateDatasetExportJob.

---

##### `CreateEnrichmentJob`<sup>Required</sup> <a name="CreateEnrichmentJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateEnrichmentJob"></a>

```typescript
public readonly CreateEnrichmentJob: string;
```

- *Type:* string

[Write] iotsitewise:CreateEnrichmentJob.

---

##### `CreateGateway`<sup>Required</sup> <a name="CreateGateway" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateGateway"></a>

```typescript
public readonly CreateGateway: string;
```

- *Type:* string

[Write] iotsitewise:CreateGateway.

---

##### `CreatePipeline`<sup>Required</sup> <a name="CreatePipeline" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreatePipeline"></a>

```typescript
public readonly CreatePipeline: string;
```

- *Type:* string

[Write] iotsitewise:CreatePipeline.

---

##### `CreatePortal`<sup>Required</sup> <a name="CreatePortal" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreatePortal"></a>

```typescript
public readonly CreatePortal: string;
```

- *Type:* string

[Write] iotsitewise:CreatePortal.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] iotsitewise:CreateProject.

---

##### `CreateTask`<sup>Required</sup> <a name="CreateTask" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateTask"></a>

```typescript
public readonly CreateTask: string;
```

- *Type:* string

[Write] iotsitewise:CreateTask.

---

##### `CreateWorkspace`<sup>Required</sup> <a name="CreateWorkspace" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.CreateWorkspace"></a>

```typescript
public readonly CreateWorkspace: string;
```

- *Type:* string

[Write] iotsitewise:CreateWorkspace.

---

##### `DeleteAccessPolicy`<sup>Required</sup> <a name="DeleteAccessPolicy" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteAccessPolicy"></a>

```typescript
public readonly DeleteAccessPolicy: string;
```

- *Type:* string

[Write] iotsitewise:DeleteAccessPolicy.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] iotsitewise:DeleteApplication.

---

##### `DeleteAsset`<sup>Required</sup> <a name="DeleteAsset" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteAsset"></a>

```typescript
public readonly DeleteAsset: string;
```

- *Type:* string

[Write] iotsitewise:DeleteAsset.

---

##### `DeleteAssetModel`<sup>Required</sup> <a name="DeleteAssetModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteAssetModel"></a>

```typescript
public readonly DeleteAssetModel: string;
```

- *Type:* string

[Write] iotsitewise:DeleteAssetModel.

---

##### `DeleteAssetModelCompositeModel`<sup>Required</sup> <a name="DeleteAssetModelCompositeModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteAssetModelCompositeModel"></a>

```typescript
public readonly DeleteAssetModelCompositeModel: string;
```

- *Type:* string

[Write] iotsitewise:DeleteAssetModelCompositeModel.

---

##### `DeleteAssetModelInterfaceRelationship`<sup>Required</sup> <a name="DeleteAssetModelInterfaceRelationship" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteAssetModelInterfaceRelationship"></a>

```typescript
public readonly DeleteAssetModelInterfaceRelationship: string;
```

- *Type:* string

[Write] iotsitewise:DeleteAssetModelInterfaceRelationship.

---

##### `DeleteComputationModel`<sup>Required</sup> <a name="DeleteComputationModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteComputationModel"></a>

```typescript
public readonly DeleteComputationModel: string;
```

- *Type:* string

[Write] iotsitewise:DeleteComputationModel.

---

##### `DeleteDashboard`<sup>Required</sup> <a name="DeleteDashboard" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteDashboard"></a>

```typescript
public readonly DeleteDashboard: string;
```

- *Type:* string

[Write] iotsitewise:DeleteDashboard.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string;
```

- *Type:* string

[Write] iotsitewise:DeleteDataset.

---

##### `DeleteGateway`<sup>Required</sup> <a name="DeleteGateway" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteGateway"></a>

```typescript
public readonly DeleteGateway: string;
```

- *Type:* string

[Write] iotsitewise:DeleteGateway.

---

##### `DeletePipeline`<sup>Required</sup> <a name="DeletePipeline" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeletePipeline"></a>

```typescript
public readonly DeletePipeline: string;
```

- *Type:* string

[Write] iotsitewise:DeletePipeline.

---

##### `DeletePortal`<sup>Required</sup> <a name="DeletePortal" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeletePortal"></a>

```typescript
public readonly DeletePortal: string;
```

- *Type:* string

[Write] iotsitewise:DeletePortal.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string;
```

- *Type:* string

[Write] iotsitewise:DeleteProject.

---

##### `DeleteTask`<sup>Required</sup> <a name="DeleteTask" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteTask"></a>

```typescript
public readonly DeleteTask: string;
```

- *Type:* string

[Write] iotsitewise:DeleteTask.

---

##### `DeleteTimeSeries`<sup>Required</sup> <a name="DeleteTimeSeries" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteTimeSeries"></a>

```typescript
public readonly DeleteTimeSeries: string;
```

- *Type:* string

[Write] iotsitewise:DeleteTimeSeries.

---

##### `DeleteWorkspace`<sup>Required</sup> <a name="DeleteWorkspace" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DeleteWorkspace"></a>

```typescript
public readonly DeleteWorkspace: string;
```

- *Type:* string

[Write] iotsitewise:DeleteWorkspace.

---

##### `DescribeAccessPolicy`<sup>Required</sup> <a name="DescribeAccessPolicy" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAccessPolicy"></a>

```typescript
public readonly DescribeAccessPolicy: string;
```

- *Type:* string

[Read] iotsitewise:DescribeAccessPolicy.

---

##### `DescribeAction`<sup>Required</sup> <a name="DescribeAction" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAction"></a>

```typescript
public readonly DescribeAction: string;
```

- *Type:* string

[Read] iotsitewise:DescribeAction.

---

##### `DescribeApplication`<sup>Required</sup> <a name="DescribeApplication" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeApplication"></a>

```typescript
public readonly DescribeApplication: string;
```

- *Type:* string

[Read] iotsitewise:DescribeApplication.

---

##### `DescribeAsset`<sup>Required</sup> <a name="DescribeAsset" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAsset"></a>

```typescript
public readonly DescribeAsset: string;
```

- *Type:* string

[Read] iotsitewise:DescribeAsset.

---

##### `DescribeAssetCompositeModel`<sup>Required</sup> <a name="DescribeAssetCompositeModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAssetCompositeModel"></a>

```typescript
public readonly DescribeAssetCompositeModel: string;
```

- *Type:* string

[Read] iotsitewise:DescribeAssetCompositeModel.

---

##### `DescribeAssetModel`<sup>Required</sup> <a name="DescribeAssetModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAssetModel"></a>

```typescript
public readonly DescribeAssetModel: string;
```

- *Type:* string

[Read] iotsitewise:DescribeAssetModel.

---

##### `DescribeAssetModelCompositeModel`<sup>Required</sup> <a name="DescribeAssetModelCompositeModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAssetModelCompositeModel"></a>

```typescript
public readonly DescribeAssetModelCompositeModel: string;
```

- *Type:* string

[Read] iotsitewise:DescribeAssetModelCompositeModel.

---

##### `DescribeAssetModelInterfaceRelationship`<sup>Required</sup> <a name="DescribeAssetModelInterfaceRelationship" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAssetModelInterfaceRelationship"></a>

```typescript
public readonly DescribeAssetModelInterfaceRelationship: string;
```

- *Type:* string

[Read] iotsitewise:DescribeAssetModelInterfaceRelationship.

---

##### `DescribeAssetProperty`<sup>Required</sup> <a name="DescribeAssetProperty" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeAssetProperty"></a>

```typescript
public readonly DescribeAssetProperty: string;
```

- *Type:* string

[Read] iotsitewise:DescribeAssetProperty.

---

##### `DescribeBulkImportJob`<sup>Required</sup> <a name="DescribeBulkImportJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeBulkImportJob"></a>

```typescript
public readonly DescribeBulkImportJob: string;
```

- *Type:* string

[Read] iotsitewise:DescribeBulkImportJob.

---

##### `DescribeComputationModel`<sup>Required</sup> <a name="DescribeComputationModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeComputationModel"></a>

```typescript
public readonly DescribeComputationModel: string;
```

- *Type:* string

[Read] iotsitewise:DescribeComputationModel.

---

##### `DescribeComputationModelExecutionSummary`<sup>Required</sup> <a name="DescribeComputationModelExecutionSummary" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeComputationModelExecutionSummary"></a>

```typescript
public readonly DescribeComputationModelExecutionSummary: string;
```

- *Type:* string

[Read] iotsitewise:DescribeComputationModelExecutionSummary.

---

##### `DescribeDashboard`<sup>Required</sup> <a name="DescribeDashboard" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeDashboard"></a>

```typescript
public readonly DescribeDashboard: string;
```

- *Type:* string

[Read] iotsitewise:DescribeDashboard.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string;
```

- *Type:* string

[Read] iotsitewise:DescribeDataset.

---

##### `DescribeDatasetExportJob`<sup>Required</sup> <a name="DescribeDatasetExportJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeDatasetExportJob"></a>

```typescript
public readonly DescribeDatasetExportJob: string;
```

- *Type:* string

[Read] iotsitewise:DescribeDatasetExportJob.

---

##### `DescribeDefaultEncryptionConfiguration`<sup>Required</sup> <a name="DescribeDefaultEncryptionConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeDefaultEncryptionConfiguration"></a>

```typescript
public readonly DescribeDefaultEncryptionConfiguration: string;
```

- *Type:* string

[Read] iotsitewise:DescribeDefaultEncryptionConfiguration.

---

##### `DescribeEnrichmentJob`<sup>Required</sup> <a name="DescribeEnrichmentJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeEnrichmentJob"></a>

```typescript
public readonly DescribeEnrichmentJob: string;
```

- *Type:* string

[Read] iotsitewise:DescribeEnrichmentJob.

---

##### `DescribeExecution`<sup>Required</sup> <a name="DescribeExecution" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeExecution"></a>

```typescript
public readonly DescribeExecution: string;
```

- *Type:* string

[Read] iotsitewise:DescribeExecution.

---

##### `DescribeGateway`<sup>Required</sup> <a name="DescribeGateway" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeGateway"></a>

```typescript
public readonly DescribeGateway: string;
```

- *Type:* string

[Read] iotsitewise:DescribeGateway.

---

##### `DescribeGatewayCapabilityConfiguration`<sup>Required</sup> <a name="DescribeGatewayCapabilityConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeGatewayCapabilityConfiguration"></a>

```typescript
public readonly DescribeGatewayCapabilityConfiguration: string;
```

- *Type:* string

[Read] iotsitewise:DescribeGatewayCapabilityConfiguration.

---

##### `DescribeLoggingOptions`<sup>Required</sup> <a name="DescribeLoggingOptions" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeLoggingOptions"></a>

```typescript
public readonly DescribeLoggingOptions: string;
```

- *Type:* string

[Read] iotsitewise:DescribeLoggingOptions.

---

##### `DescribePipeline`<sup>Required</sup> <a name="DescribePipeline" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribePipeline"></a>

```typescript
public readonly DescribePipeline: string;
```

- *Type:* string

[Read] iotsitewise:DescribePipeline.

---

##### `DescribePipelineExecution`<sup>Required</sup> <a name="DescribePipelineExecution" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribePipelineExecution"></a>

```typescript
public readonly DescribePipelineExecution: string;
```

- *Type:* string

[Read] iotsitewise:DescribePipelineExecution.

---

##### `DescribePortal`<sup>Required</sup> <a name="DescribePortal" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribePortal"></a>

```typescript
public readonly DescribePortal: string;
```

- *Type:* string

[Read] iotsitewise:DescribePortal.

---

##### `DescribeProject`<sup>Required</sup> <a name="DescribeProject" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeProject"></a>

```typescript
public readonly DescribeProject: string;
```

- *Type:* string

[Read] iotsitewise:DescribeProject.

---

##### `DescribeQuery`<sup>Required</sup> <a name="DescribeQuery" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeQuery"></a>

```typescript
public readonly DescribeQuery: string;
```

- *Type:* string

[Read] iotsitewise:DescribeQuery.

---

##### `DescribeSearch`<sup>Required</sup> <a name="DescribeSearch" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeSearch"></a>

```typescript
public readonly DescribeSearch: string;
```

- *Type:* string

[Read] iotsitewise:DescribeSearch.

---

##### `DescribeStorageConfiguration`<sup>Required</sup> <a name="DescribeStorageConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeStorageConfiguration"></a>

```typescript
public readonly DescribeStorageConfiguration: string;
```

- *Type:* string

[Read] iotsitewise:DescribeStorageConfiguration.

---

##### `DescribeTask`<sup>Required</sup> <a name="DescribeTask" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeTask"></a>

```typescript
public readonly DescribeTask: string;
```

- *Type:* string

[Read] iotsitewise:DescribeTask.

---

##### `DescribeTimeSeries`<sup>Required</sup> <a name="DescribeTimeSeries" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeTimeSeries"></a>

```typescript
public readonly DescribeTimeSeries: string;
```

- *Type:* string

[Read] iotsitewise:DescribeTimeSeries.

---

##### `DescribeWorkspace`<sup>Required</sup> <a name="DescribeWorkspace" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DescribeWorkspace"></a>

```typescript
public readonly DescribeWorkspace: string;
```

- *Type:* string

[Read] iotsitewise:DescribeWorkspace.

---

##### `DisassociateAssets`<sup>Required</sup> <a name="DisassociateAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DisassociateAssets"></a>

```typescript
public readonly DisassociateAssets: string;
```

- *Type:* string

[Write] iotsitewise:DisassociateAssets.

---

##### `DisassociateTimeSeriesFromAssetProperty`<sup>Required</sup> <a name="DisassociateTimeSeriesFromAssetProperty" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.DisassociateTimeSeriesFromAssetProperty"></a>

```typescript
public readonly DisassociateTimeSeriesFromAssetProperty: string;
```

- *Type:* string

[Write] iotsitewise:DisassociateTimeSeriesFromAssetProperty.

---

##### `EnableSiteWiseIntegration`<sup>Required</sup> <a name="EnableSiteWiseIntegration" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.EnableSiteWiseIntegration"></a>

```typescript
public readonly EnableSiteWiseIntegration: string;
```

- *Type:* string

[Write] iotsitewise:EnableSiteWiseIntegration.

---

##### `ExecuteAction`<sup>Required</sup> <a name="ExecuteAction" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ExecuteAction"></a>

```typescript
public readonly ExecuteAction: string;
```

- *Type:* string

[Write] iotsitewise:ExecuteAction.

---

##### `ExecuteQuery`<sup>Required</sup> <a name="ExecuteQuery" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ExecuteQuery"></a>

```typescript
public readonly ExecuteQuery: string;
```

- *Type:* string

[Read] iotsitewise:ExecuteQuery.

---

##### `InvokeAssistant`<sup>Required</sup> <a name="InvokeAssistant" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.InvokeAssistant"></a>

```typescript
public readonly InvokeAssistant: string;
```

- *Type:* string

[Read] iotsitewise:InvokeAssistant.

---

##### `ListAccessPolicies`<sup>Required</sup> <a name="ListAccessPolicies" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAccessPolicies"></a>

```typescript
public readonly ListAccessPolicies: string;
```

- *Type:* string

[List] iotsitewise:ListAccessPolicies.

---

##### `ListActions`<sup>Required</sup> <a name="ListActions" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListActions"></a>

```typescript
public readonly ListActions: string;
```

- *Type:* string

[List] iotsitewise:ListActions.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] iotsitewise:ListApplications.

---

##### `ListAssetModelCompositeModels`<sup>Required</sup> <a name="ListAssetModelCompositeModels" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssetModelCompositeModels"></a>

```typescript
public readonly ListAssetModelCompositeModels: string;
```

- *Type:* string

[List] iotsitewise:ListAssetModelCompositeModels.

---

##### `ListAssetModelProperties`<sup>Required</sup> <a name="ListAssetModelProperties" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssetModelProperties"></a>

```typescript
public readonly ListAssetModelProperties: string;
```

- *Type:* string

[List] iotsitewise:ListAssetModelProperties.

---

##### `ListAssetModels`<sup>Required</sup> <a name="ListAssetModels" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssetModels"></a>

```typescript
public readonly ListAssetModels: string;
```

- *Type:* string

[List] iotsitewise:ListAssetModels.

---

##### `ListAssetProperties`<sup>Required</sup> <a name="ListAssetProperties" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssetProperties"></a>

```typescript
public readonly ListAssetProperties: string;
```

- *Type:* string

[List] iotsitewise:ListAssetProperties.

---

##### `ListAssetRelationships`<sup>Required</sup> <a name="ListAssetRelationships" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssetRelationships"></a>

```typescript
public readonly ListAssetRelationships: string;
```

- *Type:* string

[List] iotsitewise:ListAssetRelationships.

---

##### `ListAssets`<sup>Required</sup> <a name="ListAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssets"></a>

```typescript
public readonly ListAssets: string;
```

- *Type:* string

[List] iotsitewise:ListAssets.

---

##### `ListAssociatedAssets`<sup>Required</sup> <a name="ListAssociatedAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListAssociatedAssets"></a>

```typescript
public readonly ListAssociatedAssets: string;
```

- *Type:* string

[List] iotsitewise:ListAssociatedAssets.

---

##### `ListBulkImportJobs`<sup>Required</sup> <a name="ListBulkImportJobs" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListBulkImportJobs"></a>

```typescript
public readonly ListBulkImportJobs: string;
```

- *Type:* string

[List] iotsitewise:ListBulkImportJobs.

---

##### `ListCompositionRelationships`<sup>Required</sup> <a name="ListCompositionRelationships" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListCompositionRelationships"></a>

```typescript
public readonly ListCompositionRelationships: string;
```

- *Type:* string

[List] iotsitewise:ListCompositionRelationships.

---

##### `ListComputationModelDataBindingUsages`<sup>Required</sup> <a name="ListComputationModelDataBindingUsages" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListComputationModelDataBindingUsages"></a>

```typescript
public readonly ListComputationModelDataBindingUsages: string;
```

- *Type:* string

[List] iotsitewise:ListComputationModelDataBindingUsages.

---

##### `ListComputationModelResolveToResources`<sup>Required</sup> <a name="ListComputationModelResolveToResources" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListComputationModelResolveToResources"></a>

```typescript
public readonly ListComputationModelResolveToResources: string;
```

- *Type:* string

[List] iotsitewise:ListComputationModelResolveToResources.

---

##### `ListComputationModels`<sup>Required</sup> <a name="ListComputationModels" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListComputationModels"></a>

```typescript
public readonly ListComputationModels: string;
```

- *Type:* string

[List] iotsitewise:ListComputationModels.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string;
```

- *Type:* string

[List] iotsitewise:ListDashboards.

---

##### `ListDatasetDataSegmentRelationships`<sup>Required</sup> <a name="ListDatasetDataSegmentRelationships" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListDatasetDataSegmentRelationships"></a>

```typescript
public readonly ListDatasetDataSegmentRelationships: string;
```

- *Type:* string

[List] iotsitewise:ListDatasetDataSegmentRelationships.

---

##### `ListDatasetDataSegments`<sup>Required</sup> <a name="ListDatasetDataSegments" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListDatasetDataSegments"></a>

```typescript
public readonly ListDatasetDataSegments: string;
```

- *Type:* string

[List] iotsitewise:ListDatasetDataSegments.

---

##### `ListDatasetExportJobs`<sup>Required</sup> <a name="ListDatasetExportJobs" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListDatasetExportJobs"></a>

```typescript
public readonly ListDatasetExportJobs: string;
```

- *Type:* string

[List] iotsitewise:ListDatasetExportJobs.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string;
```

- *Type:* string

[List] iotsitewise:ListDatasets.

---

##### `ListEnrichmentJobs`<sup>Required</sup> <a name="ListEnrichmentJobs" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListEnrichmentJobs"></a>

```typescript
public readonly ListEnrichmentJobs: string;
```

- *Type:* string

[List] iotsitewise:ListEnrichmentJobs.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string;
```

- *Type:* string

[List] iotsitewise:ListExecutions.

---

##### `ListGateways`<sup>Required</sup> <a name="ListGateways" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListGateways"></a>

```typescript
public readonly ListGateways: string;
```

- *Type:* string

[List] iotsitewise:ListGateways.

---

##### `ListInterfaceRelationships`<sup>Required</sup> <a name="ListInterfaceRelationships" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListInterfaceRelationships"></a>

```typescript
public readonly ListInterfaceRelationships: string;
```

- *Type:* string

[List] iotsitewise:ListInterfaceRelationships.

---

##### `ListPipelineExecutions`<sup>Required</sup> <a name="ListPipelineExecutions" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListPipelineExecutions"></a>

```typescript
public readonly ListPipelineExecutions: string;
```

- *Type:* string

[List] iotsitewise:ListPipelineExecutions.

---

##### `ListPipelines`<sup>Required</sup> <a name="ListPipelines" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListPipelines"></a>

```typescript
public readonly ListPipelines: string;
```

- *Type:* string

[List] iotsitewise:ListPipelines.

---

##### `ListPortals`<sup>Required</sup> <a name="ListPortals" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListPortals"></a>

```typescript
public readonly ListPortals: string;
```

- *Type:* string

[List] iotsitewise:ListPortals.

---

##### `ListProjectAssets`<sup>Required</sup> <a name="ListProjectAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListProjectAssets"></a>

```typescript
public readonly ListProjectAssets: string;
```

- *Type:* string

[List] iotsitewise:ListProjectAssets.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[List] iotsitewise:ListProjects.

---

##### `ListQueries`<sup>Required</sup> <a name="ListQueries" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListQueries"></a>

```typescript
public readonly ListQueries: string;
```

- *Type:* string

[List] iotsitewise:ListQueries.

---

##### `ListSearches`<sup>Required</sup> <a name="ListSearches" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListSearches"></a>

```typescript
public readonly ListSearches: string;
```

- *Type:* string

[List] iotsitewise:ListSearches.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] iotsitewise:ListTagsForResource.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListTasks"></a>

```typescript
public readonly ListTasks: string;
```

- *Type:* string

[List] iotsitewise:ListTasks.

---

##### `ListTimeSeries`<sup>Required</sup> <a name="ListTimeSeries" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListTimeSeries"></a>

```typescript
public readonly ListTimeSeries: string;
```

- *Type:* string

[List] iotsitewise:ListTimeSeries.

---

##### `ListWorkspaces`<sup>Required</sup> <a name="ListWorkspaces" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.ListWorkspaces"></a>

```typescript
public readonly ListWorkspaces: string;
```

- *Type:* string

[List] iotsitewise:ListWorkspaces.

---

##### `PutAssetModelInterfaceRelationship`<sup>Required</sup> <a name="PutAssetModelInterfaceRelationship" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.PutAssetModelInterfaceRelationship"></a>

```typescript
public readonly PutAssetModelInterfaceRelationship: string;
```

- *Type:* string

[Write] iotsitewise:PutAssetModelInterfaceRelationship.

---

##### `PutDefaultEncryptionConfiguration`<sup>Required</sup> <a name="PutDefaultEncryptionConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.PutDefaultEncryptionConfiguration"></a>

```typescript
public readonly PutDefaultEncryptionConfiguration: string;
```

- *Type:* string

[Write] iotsitewise:PutDefaultEncryptionConfiguration.

---

##### `PutLoggingOptions`<sup>Required</sup> <a name="PutLoggingOptions" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.PutLoggingOptions"></a>

```typescript
public readonly PutLoggingOptions: string;
```

- *Type:* string

[Write] iotsitewise:PutLoggingOptions.

---

##### `PutStorageConfiguration`<sup>Required</sup> <a name="PutStorageConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.PutStorageConfiguration"></a>

```typescript
public readonly PutStorageConfiguration: string;
```

- *Type:* string

[Write] iotsitewise:PutStorageConfiguration.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartPipelineExecution`<sup>Required</sup> <a name="StartPipelineExecution" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.StartPipelineExecution"></a>

```typescript
public readonly StartPipelineExecution: string;
```

- *Type:* string

[Write] iotsitewise:StartPipelineExecution.

---

##### `StartQuery`<sup>Required</sup> <a name="StartQuery" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.StartQuery"></a>

```typescript
public readonly StartQuery: string;
```

- *Type:* string

[Write] iotsitewise:StartQuery.

---

##### `StartSearch`<sup>Required</sup> <a name="StartSearch" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.StartSearch"></a>

```typescript
public readonly StartSearch: string;
```

- *Type:* string

[Write] iotsitewise:StartSearch.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] iotsitewise:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] iotsitewise:UntagResource.

---

##### `UpdateAccessPolicy`<sup>Required</sup> <a name="UpdateAccessPolicy" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAccessPolicy"></a>

```typescript
public readonly UpdateAccessPolicy: string;
```

- *Type:* string

[Write] iotsitewise:UpdateAccessPolicy.

---

##### `UpdateAsset`<sup>Required</sup> <a name="UpdateAsset" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAsset"></a>

```typescript
public readonly UpdateAsset: string;
```

- *Type:* string

[Write] iotsitewise:UpdateAsset.

---

##### `UpdateAssetModel`<sup>Required</sup> <a name="UpdateAssetModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAssetModel"></a>

```typescript
public readonly UpdateAssetModel: string;
```

- *Type:* string

[Write] iotsitewise:UpdateAssetModel.

---

##### `UpdateAssetModelCompositeModel`<sup>Required</sup> <a name="UpdateAssetModelCompositeModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAssetModelCompositeModel"></a>

```typescript
public readonly UpdateAssetModelCompositeModel: string;
```

- *Type:* string

[Write] iotsitewise:UpdateAssetModelCompositeModel.

---

##### `UpdateAssetModelPropertyRouting`<sup>Required</sup> <a name="UpdateAssetModelPropertyRouting" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAssetModelPropertyRouting"></a>

```typescript
public readonly UpdateAssetModelPropertyRouting: string;
```

- *Type:* string

[Write] iotsitewise:UpdateAssetModelPropertyRouting.

---

##### `UpdateAssetProperty`<sup>Required</sup> <a name="UpdateAssetProperty" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateAssetProperty"></a>

```typescript
public readonly UpdateAssetProperty: string;
```

- *Type:* string

[Write] iotsitewise:UpdateAssetProperty.

---

##### `UpdateComputationModel`<sup>Required</sup> <a name="UpdateComputationModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateComputationModel"></a>

```typescript
public readonly UpdateComputationModel: string;
```

- *Type:* string

[Write] iotsitewise:UpdateComputationModel.

---

##### `UpdateDashboard`<sup>Required</sup> <a name="UpdateDashboard" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateDashboard"></a>

```typescript
public readonly UpdateDashboard: string;
```

- *Type:* string

[Write] iotsitewise:UpdateDashboard.

---

##### `UpdateDataset`<sup>Required</sup> <a name="UpdateDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateDataset"></a>

```typescript
public readonly UpdateDataset: string;
```

- *Type:* string

[Write] iotsitewise:UpdateDataset.

---

##### `UpdateGateway`<sup>Required</sup> <a name="UpdateGateway" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateGateway"></a>

```typescript
public readonly UpdateGateway: string;
```

- *Type:* string

[Write] iotsitewise:UpdateGateway.

---

##### `UpdateGatewayCapabilityConfiguration`<sup>Required</sup> <a name="UpdateGatewayCapabilityConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateGatewayCapabilityConfiguration"></a>

```typescript
public readonly UpdateGatewayCapabilityConfiguration: string;
```

- *Type:* string

[Write] iotsitewise:UpdateGatewayCapabilityConfiguration.

---

##### `UpdatePipeline`<sup>Required</sup> <a name="UpdatePipeline" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdatePipeline"></a>

```typescript
public readonly UpdatePipeline: string;
```

- *Type:* string

[Write] iotsitewise:UpdatePipeline.

---

##### `UpdatePortal`<sup>Required</sup> <a name="UpdatePortal" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdatePortal"></a>

```typescript
public readonly UpdatePortal: string;
```

- *Type:* string

[Write] iotsitewise:UpdatePortal.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string;
```

- *Type:* string

[Write] iotsitewise:UpdateProject.

---

##### `UpdateTask`<sup>Required</sup> <a name="UpdateTask" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateTask"></a>

```typescript
public readonly UpdateTask: string;
```

- *Type:* string

[Write] iotsitewise:UpdateTask.

---

##### `UpdateWorkspace`<sup>Required</sup> <a name="UpdateWorkspace" id="@cdk_utils/iam.iotsitewise.IotsitewiseActions.property.UpdateWorkspace"></a>

```typescript
public readonly UpdateWorkspace: string;
```

- *Type:* string

[Write] iotsitewise:UpdateWorkspace.

---

### IotsitewiseConditions <a name="IotsitewiseConditions" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions"></a>

Condition key constants and builders for iotsitewise.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

new iotsitewise.IotsitewiseConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.assetHierarchyPath">assetHierarchyPath</a></code> | Generates a condition block for `iotsitewise:assetHierarchyPath`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.childAssetId">childAssetId</a></code> | Generates a condition block for `iotsitewise:childAssetId`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.group">group</a></code> | Generates a condition block for `iotsitewise:group`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.iam">iam</a></code> | Generates a condition block for `iotsitewise:iam`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.isAssociatedWithAssetProperty">isAssociatedWithAssetProperty</a></code> | Generates a condition block for `iotsitewise:isAssociatedWithAssetProperty`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.portal">portal</a></code> | Generates a condition block for `iotsitewise:portal`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.project">project</a></code> | Generates a condition block for `iotsitewise:project`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.propertyAlias">propertyAlias</a></code> | Generates a condition block for `iotsitewise:propertyAlias`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.propertyId">propertyId</a></code> | Generates a condition block for `iotsitewise:propertyId`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.taskArns">taskArns</a></code> | Generates a condition block for `iotsitewise:taskArns`. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.user">user</a></code> | Generates a condition block for `iotsitewise:user`. |

---

##### `assetHierarchyPath` <a name="assetHierarchyPath" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.assetHierarchyPath"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.assetHierarchyPath(value: string)
```

Generates a condition block for `iotsitewise:assetHierarchyPath`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.assetHierarchyPath.parameter.value"></a>

- *Type:* string

---

##### `childAssetId` <a name="childAssetId" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.childAssetId"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.childAssetId(value: string)
```

Generates a condition block for `iotsitewise:childAssetId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.childAssetId.parameter.value"></a>

- *Type:* string

---

##### `group` <a name="group" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.group"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.group(value: string)
```

Generates a condition block for `iotsitewise:group`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.group.parameter.value"></a>

- *Type:* string

---

##### `iam` <a name="iam" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.iam"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.iam(value: string)
```

Generates a condition block for `iotsitewise:iam`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.iam.parameter.value"></a>

- *Type:* string

---

##### `isAssociatedWithAssetProperty` <a name="isAssociatedWithAssetProperty" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.isAssociatedWithAssetProperty"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.isAssociatedWithAssetProperty(value: string)
```

Generates a condition block for `iotsitewise:isAssociatedWithAssetProperty`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.isAssociatedWithAssetProperty.parameter.value"></a>

- *Type:* string

---

##### `portal` <a name="portal" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.portal"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.portal(value: string)
```

Generates a condition block for `iotsitewise:portal`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.portal.parameter.value"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.project"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.project(value: string)
```

Generates a condition block for `iotsitewise:project`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.project.parameter.value"></a>

- *Type:* string

---

##### `propertyAlias` <a name="propertyAlias" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.propertyAlias"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.propertyAlias(value: string)
```

Generates a condition block for `iotsitewise:propertyAlias`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.propertyAlias.parameter.value"></a>

- *Type:* string

---

##### `propertyId` <a name="propertyId" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.propertyId"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.propertyId(value: string)
```

Generates a condition block for `iotsitewise:propertyId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.propertyId.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.requestTag"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.resourceTag"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.tagKeys"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `taskArns` <a name="taskArns" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.taskArns"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.taskArns(values: string[])
```

Generates a condition block for `iotsitewise:taskArns`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.taskArns.parameter.values"></a>

- *Type:* string[]

---

##### `user` <a name="user" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.user"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseConditions.user(value: string)
```

Generates a condition block for `iotsitewise:user`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.user.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.ASSET_HIERARCHY_PATH">ASSET_HIERARCHY_PATH</a></code> | <code>string</code> | Condition key: iotsitewise:assetHierarchyPath (String). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CHILD_ASSET_ID">CHILD_ASSET_ID</a></code> | <code>string</code> | Condition key: iotsitewise:childAssetId (String). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateAccessPolicyConditionKeys">CreateAccessPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessPolicy action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateAssetConditionKeys">CreateAssetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAsset action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateAssetModelConditionKeys">CreateAssetModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAssetModel action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateComputationModelConditionKeys">CreateComputationModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateComputationModel action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateDashboardConditionKeys">CreateDashboardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDashboard action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateDatasetConditionKeys">CreateDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataset action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateGatewayConditionKeys">CreateGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGateway action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreatePipelineConditionKeys">CreatePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePipeline action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreatePortalConditionKeys">CreatePortalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePortal action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateProjectConditionKeys">CreateProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProject action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateTaskConditionKeys">CreateTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTask action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateWorkspaceConditionKeys">CreateWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkspace action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.DescribeTimeSeriesConditionKeys">DescribeTimeSeriesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeTimeSeries action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.GROUP">GROUP</a></code> | <code>string</code> | Condition key: iotsitewise:group (String). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.IAM">IAM</a></code> | <code>string</code> | Condition key: iotsitewise:iam (String). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.IS_ASSOCIATED_WITH_ASSET_PROPERTY">IS_ASSOCIATED_WITH_ASSET_PROPERTY</a></code> | <code>string</code> | Condition key: iotsitewise:isAssociatedWithAssetProperty (String). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.PORTAL">PORTAL</a></code> | <code>string</code> | Condition key: iotsitewise:portal (String). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.PROJECT">PROJECT</a></code> | <code>string</code> | Condition key: iotsitewise:project (String). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.PROPERTY_ALIAS">PROPERTY_ALIAS</a></code> | <code>string</code> | Condition key: iotsitewise:propertyAlias (String). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.PROPERTY_ID">PROPERTY_ID</a></code> | <code>string</code> | Condition key: iotsitewise:propertyId (String). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.TASK_ARNS">TASK_ARNS</a></code> | <code>string</code> | Condition key: iotsitewise:taskArns (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.UpdatePipelineConditionKeys">UpdatePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePipeline action. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.USER">USER</a></code> | <code>string</code> | Condition key: iotsitewise:user (String). |

---

##### `ASSET_HIERARCHY_PATH`<sup>Required</sup> <a name="ASSET_HIERARCHY_PATH" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.ASSET_HIERARCHY_PATH"></a>

```typescript
public readonly ASSET_HIERARCHY_PATH: string;
```

- *Type:* string

Condition key: iotsitewise:assetHierarchyPath (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CHILD_ASSET_ID`<sup>Required</sup> <a name="CHILD_ASSET_ID" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CHILD_ASSET_ID"></a>

```typescript
public readonly CHILD_ASSET_ID: string;
```

- *Type:* string

Condition key: iotsitewise:childAssetId (String).

---

##### `CreateAccessPolicyConditionKeys`<sup>Required</sup> <a name="CreateAccessPolicyConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateAccessPolicyConditionKeys"></a>

```typescript
public readonly CreateAccessPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessPolicy action.

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateAssetConditionKeys`<sup>Required</sup> <a name="CreateAssetConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateAssetConditionKeys"></a>

```typescript
public readonly CreateAssetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAsset action.

---

##### `CreateAssetModelConditionKeys`<sup>Required</sup> <a name="CreateAssetModelConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateAssetModelConditionKeys"></a>

```typescript
public readonly CreateAssetModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAssetModel action.

---

##### `CreateComputationModelConditionKeys`<sup>Required</sup> <a name="CreateComputationModelConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateComputationModelConditionKeys"></a>

```typescript
public readonly CreateComputationModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateComputationModel action.

---

##### `CreateDashboardConditionKeys`<sup>Required</sup> <a name="CreateDashboardConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateDashboardConditionKeys"></a>

```typescript
public readonly CreateDashboardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDashboard action.

---

##### `CreateDatasetConditionKeys`<sup>Required</sup> <a name="CreateDatasetConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateDatasetConditionKeys"></a>

```typescript
public readonly CreateDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataset action.

---

##### `CreateGatewayConditionKeys`<sup>Required</sup> <a name="CreateGatewayConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateGatewayConditionKeys"></a>

```typescript
public readonly CreateGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGateway action.

---

##### `CreatePipelineConditionKeys`<sup>Required</sup> <a name="CreatePipelineConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreatePipelineConditionKeys"></a>

```typescript
public readonly CreatePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePipeline action.

---

##### `CreatePortalConditionKeys`<sup>Required</sup> <a name="CreatePortalConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreatePortalConditionKeys"></a>

```typescript
public readonly CreatePortalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePortal action.

---

##### `CreateProjectConditionKeys`<sup>Required</sup> <a name="CreateProjectConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateProjectConditionKeys"></a>

```typescript
public readonly CreateProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProject action.

---

##### `CreateTaskConditionKeys`<sup>Required</sup> <a name="CreateTaskConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateTaskConditionKeys"></a>

```typescript
public readonly CreateTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTask action.

---

##### `CreateWorkspaceConditionKeys`<sup>Required</sup> <a name="CreateWorkspaceConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.CreateWorkspaceConditionKeys"></a>

```typescript
public readonly CreateWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkspace action.

---

##### `DescribeTimeSeriesConditionKeys`<sup>Required</sup> <a name="DescribeTimeSeriesConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.DescribeTimeSeriesConditionKeys"></a>

```typescript
public readonly DescribeTimeSeriesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeTimeSeries action.

---

##### `GROUP`<sup>Required</sup> <a name="GROUP" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.GROUP"></a>

```typescript
public readonly GROUP: string;
```

- *Type:* string

Condition key: iotsitewise:group (String).

---

##### `IAM`<sup>Required</sup> <a name="IAM" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.IAM"></a>

```typescript
public readonly IAM: string;
```

- *Type:* string

Condition key: iotsitewise:iam (String).

---

##### `IS_ASSOCIATED_WITH_ASSET_PROPERTY`<sup>Required</sup> <a name="IS_ASSOCIATED_WITH_ASSET_PROPERTY" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.IS_ASSOCIATED_WITH_ASSET_PROPERTY"></a>

```typescript
public readonly IS_ASSOCIATED_WITH_ASSET_PROPERTY: string;
```

- *Type:* string

Condition key: iotsitewise:isAssociatedWithAssetProperty (String).

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `PORTAL`<sup>Required</sup> <a name="PORTAL" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.PORTAL"></a>

```typescript
public readonly PORTAL: string;
```

- *Type:* string

Condition key: iotsitewise:portal (String).

---

##### `PROJECT`<sup>Required</sup> <a name="PROJECT" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.PROJECT"></a>

```typescript
public readonly PROJECT: string;
```

- *Type:* string

Condition key: iotsitewise:project (String).

---

##### `PROPERTY_ALIAS`<sup>Required</sup> <a name="PROPERTY_ALIAS" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.PROPERTY_ALIAS"></a>

```typescript
public readonly PROPERTY_ALIAS: string;
```

- *Type:* string

Condition key: iotsitewise:propertyAlias (String).

---

##### `PROPERTY_ID`<sup>Required</sup> <a name="PROPERTY_ID" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.PROPERTY_ID"></a>

```typescript
public readonly PROPERTY_ID: string;
```

- *Type:* string

Condition key: iotsitewise:propertyId (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TASK_ARNS`<sup>Required</sup> <a name="TASK_ARNS" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.TASK_ARNS"></a>

```typescript
public readonly TASK_ARNS: string;
```

- *Type:* string

Condition key: iotsitewise:taskArns (ArrayOfARN).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdatePipelineConditionKeys`<sup>Required</sup> <a name="UpdatePipelineConditionKeys" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.UpdatePipelineConditionKeys"></a>

```typescript
public readonly UpdatePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePipeline action.

---

##### `USER`<sup>Required</sup> <a name="USER" id="@cdk_utils/iam.iotsitewise.IotsitewiseConditions.property.USER"></a>

```typescript
public readonly USER: string;
```

- *Type:* string

Condition key: iotsitewise:user (String).

---

### IotsitewiseOperations <a name="IotsitewiseOperations" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations"></a>

API operation to required IAM actions mapping for iotsitewise.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

new iotsitewise.IotsitewiseOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.AssociateAssets">AssociateAssets</a></code> | <code>string[]</code> | IAM actions required for the AssociateAssets API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.AssociateTimeSeriesToAssetProperty">AssociateTimeSeriesToAssetProperty</a></code> | <code>string[]</code> | IAM actions required for the AssociateTimeSeriesToAssetProperty API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchAssociateDataSegmentsToDataset">BatchAssociateDataSegmentsToDataset</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateDataSegmentsToDataset API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchAssociateProjectAssets">BatchAssociateProjectAssets</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateProjectAssets API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchDeleteDatasetDataSegments">BatchDeleteDatasetDataSegments</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteDatasetDataSegments API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchDisassociateDataSegmentsFromDataset">BatchDisassociateDataSegmentsFromDataset</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateDataSegmentsFromDataset API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchDisassociateProjectAssets">BatchDisassociateProjectAssets</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateProjectAssets API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchGetAssetPropertyAggregates">BatchGetAssetPropertyAggregates</a></code> | <code>string[]</code> | IAM actions required for the BatchGetAssetPropertyAggregates API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchGetAssetPropertyValue">BatchGetAssetPropertyValue</a></code> | <code>string[]</code> | IAM actions required for the BatchGetAssetPropertyValue API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchGetAssetPropertyValueHistory">BatchGetAssetPropertyValueHistory</a></code> | <code>string[]</code> | IAM actions required for the BatchGetAssetPropertyValueHistory API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchPutAssetPropertyValue">BatchPutAssetPropertyValue</a></code> | <code>string[]</code> | IAM actions required for the BatchPutAssetPropertyValue API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CancelEnrichmentJob">CancelEnrichmentJob</a></code> | <code>string[]</code> | IAM actions required for the CancelEnrichmentJob API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CancelPipelineExecution">CancelPipelineExecution</a></code> | <code>string[]</code> | IAM actions required for the CancelPipelineExecution API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CancelQuery">CancelQuery</a></code> | <code>string[]</code> | IAM actions required for the CancelQuery API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateAccessPolicy">CreateAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateAsset">CreateAsset</a></code> | <code>string[]</code> | IAM actions required for the CreateAsset API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateAssetModel">CreateAssetModel</a></code> | <code>string[]</code> | IAM actions required for the CreateAssetModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateAssetModelCompositeModel">CreateAssetModelCompositeModel</a></code> | <code>string[]</code> | IAM actions required for the CreateAssetModelCompositeModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateBulkImportJob">CreateBulkImportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateBulkImportJob API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateComputationModel">CreateComputationModel</a></code> | <code>string[]</code> | IAM actions required for the CreateComputationModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateDashboard">CreateDashboard</a></code> | <code>string[]</code> | IAM actions required for the CreateDashboard API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateDataset">CreateDataset</a></code> | <code>string[]</code> | IAM actions required for the CreateDataset API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateDatasetExportJob">CreateDatasetExportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateDatasetExportJob API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateEnrichmentJob">CreateEnrichmentJob</a></code> | <code>string[]</code> | IAM actions required for the CreateEnrichmentJob API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateGateway">CreateGateway</a></code> | <code>string[]</code> | IAM actions required for the CreateGateway API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreatePipeline">CreatePipeline</a></code> | <code>string[]</code> | IAM actions required for the CreatePipeline API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreatePortal">CreatePortal</a></code> | <code>string[]</code> | IAM actions required for the CreatePortal API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateProject">CreateProject</a></code> | <code>string[]</code> | IAM actions required for the CreateProject API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateTask">CreateTask</a></code> | <code>string[]</code> | IAM actions required for the CreateTask API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateWorkspace">CreateWorkspace</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspace API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteAccessPolicy">DeleteAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteAsset">DeleteAsset</a></code> | <code>string[]</code> | IAM actions required for the DeleteAsset API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteAssetModel">DeleteAssetModel</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssetModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteAssetModelCompositeModel">DeleteAssetModelCompositeModel</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssetModelCompositeModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteAssetModelInterfaceRelationship">DeleteAssetModelInterfaceRelationship</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssetModelInterfaceRelationship API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteComputationModel">DeleteComputationModel</a></code> | <code>string[]</code> | IAM actions required for the DeleteComputationModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteDashboard">DeleteDashboard</a></code> | <code>string[]</code> | IAM actions required for the DeleteDashboard API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteDataset">DeleteDataset</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataset API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteGateway">DeleteGateway</a></code> | <code>string[]</code> | IAM actions required for the DeleteGateway API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeletePipeline">DeletePipeline</a></code> | <code>string[]</code> | IAM actions required for the DeletePipeline API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeletePortal">DeletePortal</a></code> | <code>string[]</code> | IAM actions required for the DeletePortal API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteProject">DeleteProject</a></code> | <code>string[]</code> | IAM actions required for the DeleteProject API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteTask">DeleteTask</a></code> | <code>string[]</code> | IAM actions required for the DeleteTask API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteTimeSeries">DeleteTimeSeries</a></code> | <code>string[]</code> | IAM actions required for the DeleteTimeSeries API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteWorkspace">DeleteWorkspace</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspace API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAccessPolicy">DescribeAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAction">DescribeAction</a></code> | <code>string[]</code> | IAM actions required for the DescribeAction API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeApplication">DescribeApplication</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplication API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAsset">DescribeAsset</a></code> | <code>string[]</code> | IAM actions required for the DescribeAsset API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAssetCompositeModel">DescribeAssetCompositeModel</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssetCompositeModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAssetModel">DescribeAssetModel</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssetModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAssetModelCompositeModel">DescribeAssetModelCompositeModel</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssetModelCompositeModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAssetModelInterfaceRelationship">DescribeAssetModelInterfaceRelationship</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssetModelInterfaceRelationship API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAssetProperty">DescribeAssetProperty</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssetProperty API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeBulkImportJob">DescribeBulkImportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeBulkImportJob API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeComputationModel">DescribeComputationModel</a></code> | <code>string[]</code> | IAM actions required for the DescribeComputationModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeComputationModelExecutionSummary">DescribeComputationModelExecutionSummary</a></code> | <code>string[]</code> | IAM actions required for the DescribeComputationModelExecutionSummary API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeDashboard">DescribeDashboard</a></code> | <code>string[]</code> | IAM actions required for the DescribeDashboard API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeDataset">DescribeDataset</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataset API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeDatasetExportJob">DescribeDatasetExportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeDatasetExportJob API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeDefaultEncryptionConfiguration">DescribeDefaultEncryptionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeDefaultEncryptionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeEnrichmentJob">DescribeEnrichmentJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeEnrichmentJob API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeExecution">DescribeExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribeExecution API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeGateway">DescribeGateway</a></code> | <code>string[]</code> | IAM actions required for the DescribeGateway API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeGatewayCapabilityConfiguration">DescribeGatewayCapabilityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeGatewayCapabilityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeLoggingOptions">DescribeLoggingOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeLoggingOptions API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribePipeline">DescribePipeline</a></code> | <code>string[]</code> | IAM actions required for the DescribePipeline API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribePipelineExecution">DescribePipelineExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribePipelineExecution API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribePortal">DescribePortal</a></code> | <code>string[]</code> | IAM actions required for the DescribePortal API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeProject">DescribeProject</a></code> | <code>string[]</code> | IAM actions required for the DescribeProject API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeQuery">DescribeQuery</a></code> | <code>string[]</code> | IAM actions required for the DescribeQuery API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeSearch">DescribeSearch</a></code> | <code>string[]</code> | IAM actions required for the DescribeSearch API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeStorageConfiguration">DescribeStorageConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeStorageConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeTask">DescribeTask</a></code> | <code>string[]</code> | IAM actions required for the DescribeTask API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeTimeSeries">DescribeTimeSeries</a></code> | <code>string[]</code> | IAM actions required for the DescribeTimeSeries API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeWorkspace">DescribeWorkspace</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspace API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DisassociateAssets">DisassociateAssets</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAssets API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DisassociateTimeSeriesFromAssetProperty">DisassociateTimeSeriesFromAssetProperty</a></code> | <code>string[]</code> | IAM actions required for the DisassociateTimeSeriesFromAssetProperty API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ExecuteAction">ExecuteAction</a></code> | <code>string[]</code> | IAM actions required for the ExecuteAction API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ExecuteQuery">ExecuteQuery</a></code> | <code>string[]</code> | IAM actions required for the ExecuteQuery API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.InvokeAssistant">InvokeAssistant</a></code> | <code>string[]</code> | IAM actions required for the InvokeAssistant API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAccessPolicies">ListAccessPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListAccessPolicies API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListActions">ListActions</a></code> | <code>string[]</code> | IAM actions required for the ListActions API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssetModelCompositeModels">ListAssetModelCompositeModels</a></code> | <code>string[]</code> | IAM actions required for the ListAssetModelCompositeModels API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssetModelProperties">ListAssetModelProperties</a></code> | <code>string[]</code> | IAM actions required for the ListAssetModelProperties API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssetModels">ListAssetModels</a></code> | <code>string[]</code> | IAM actions required for the ListAssetModels API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssetProperties">ListAssetProperties</a></code> | <code>string[]</code> | IAM actions required for the ListAssetProperties API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssetRelationships">ListAssetRelationships</a></code> | <code>string[]</code> | IAM actions required for the ListAssetRelationships API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssets">ListAssets</a></code> | <code>string[]</code> | IAM actions required for the ListAssets API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssociatedAssets">ListAssociatedAssets</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedAssets API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListBulkImportJobs">ListBulkImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListBulkImportJobs API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListCompositionRelationships">ListCompositionRelationships</a></code> | <code>string[]</code> | IAM actions required for the ListCompositionRelationships API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListComputationModelDataBindingUsages">ListComputationModelDataBindingUsages</a></code> | <code>string[]</code> | IAM actions required for the ListComputationModelDataBindingUsages API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListComputationModelResolveToResources">ListComputationModelResolveToResources</a></code> | <code>string[]</code> | IAM actions required for the ListComputationModelResolveToResources API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListComputationModels">ListComputationModels</a></code> | <code>string[]</code> | IAM actions required for the ListComputationModels API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListDashboards">ListDashboards</a></code> | <code>string[]</code> | IAM actions required for the ListDashboards API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListDatasetDataSegmentRelationships">ListDatasetDataSegmentRelationships</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetDataSegmentRelationships API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListDatasetDataSegments">ListDatasetDataSegments</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetDataSegments API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListDatasetExportJobs">ListDatasetExportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetExportJobs API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListDatasets">ListDatasets</a></code> | <code>string[]</code> | IAM actions required for the ListDatasets API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListEnrichmentJobs">ListEnrichmentJobs</a></code> | <code>string[]</code> | IAM actions required for the ListEnrichmentJobs API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListExecutions">ListExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListExecutions API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListGateways">ListGateways</a></code> | <code>string[]</code> | IAM actions required for the ListGateways API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListInterfaceRelationships">ListInterfaceRelationships</a></code> | <code>string[]</code> | IAM actions required for the ListInterfaceRelationships API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListPipelineExecutions">ListPipelineExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListPipelineExecutions API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListPipelines">ListPipelines</a></code> | <code>string[]</code> | IAM actions required for the ListPipelines API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListPortals">ListPortals</a></code> | <code>string[]</code> | IAM actions required for the ListPortals API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListProjectAssets">ListProjectAssets</a></code> | <code>string[]</code> | IAM actions required for the ListProjectAssets API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListProjects">ListProjects</a></code> | <code>string[]</code> | IAM actions required for the ListProjects API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListQueries">ListQueries</a></code> | <code>string[]</code> | IAM actions required for the ListQueries API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListSearches">ListSearches</a></code> | <code>string[]</code> | IAM actions required for the ListSearches API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListTasks">ListTasks</a></code> | <code>string[]</code> | IAM actions required for the ListTasks API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListTimeSeries">ListTimeSeries</a></code> | <code>string[]</code> | IAM actions required for the ListTimeSeries API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListWorkspaces">ListWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the ListWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetAssetPropertyAggregates">opGetAssetPropertyAggregates</a></code> | <code>string[]</code> | IAM actions required for the GetAssetPropertyAggregates API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetAssetPropertyValue">opGetAssetPropertyValue</a></code> | <code>string[]</code> | IAM actions required for the GetAssetPropertyValue API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetAssetPropertyValueHistory">opGetAssetPropertyValueHistory</a></code> | <code>string[]</code> | IAM actions required for the GetAssetPropertyValueHistory API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetCaptureData">opGetCaptureData</a></code> | <code>string[]</code> | IAM actions required for the GetCaptureData API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetInterpolatedAssetPropertyValues">opGetInterpolatedAssetPropertyValues</a></code> | <code>string[]</code> | IAM actions required for the GetInterpolatedAssetPropertyValues API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetQueryResults">opGetQueryResults</a></code> | <code>string[]</code> | IAM actions required for the GetQueryResults API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetSearchResults">opGetSearchResults</a></code> | <code>string[]</code> | IAM actions required for the GetSearchResults API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.PutAssetModelInterfaceRelationship">PutAssetModelInterfaceRelationship</a></code> | <code>string[]</code> | IAM actions required for the PutAssetModelInterfaceRelationship API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.PutDefaultEncryptionConfiguration">PutDefaultEncryptionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutDefaultEncryptionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.PutLoggingOptions">PutLoggingOptions</a></code> | <code>string[]</code> | IAM actions required for the PutLoggingOptions API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.PutStorageConfiguration">PutStorageConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutStorageConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.StartPipelineExecution">StartPipelineExecution</a></code> | <code>string[]</code> | IAM actions required for the StartPipelineExecution API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.StartQuery">StartQuery</a></code> | <code>string[]</code> | IAM actions required for the StartQuery API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.StartSearch">StartSearch</a></code> | <code>string[]</code> | IAM actions required for the StartSearch API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateAccessPolicy">UpdateAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateAsset">UpdateAsset</a></code> | <code>string[]</code> | IAM actions required for the UpdateAsset API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateAssetModel">UpdateAssetModel</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssetModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateAssetModelCompositeModel">UpdateAssetModelCompositeModel</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssetModelCompositeModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateAssetProperty">UpdateAssetProperty</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssetProperty API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateComputationModel">UpdateComputationModel</a></code> | <code>string[]</code> | IAM actions required for the UpdateComputationModel API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateDashboard">UpdateDashboard</a></code> | <code>string[]</code> | IAM actions required for the UpdateDashboard API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateDataset">UpdateDataset</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataset API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateGateway">UpdateGateway</a></code> | <code>string[]</code> | IAM actions required for the UpdateGateway API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateGatewayCapabilityConfiguration">UpdateGatewayCapabilityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateGatewayCapabilityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdatePipeline">UpdatePipeline</a></code> | <code>string[]</code> | IAM actions required for the UpdatePipeline API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdatePortal">UpdatePortal</a></code> | <code>string[]</code> | IAM actions required for the UpdatePortal API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateProject">UpdateProject</a></code> | <code>string[]</code> | IAM actions required for the UpdateProject API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateTask">UpdateTask</a></code> | <code>string[]</code> | IAM actions required for the UpdateTask API call. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateWorkspace">UpdateWorkspace</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspace API call. |

---

##### `AssociateAssets`<sup>Required</sup> <a name="AssociateAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.AssociateAssets"></a>

```typescript
public readonly AssociateAssets: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAssets API call.

---

##### `AssociateTimeSeriesToAssetProperty`<sup>Required</sup> <a name="AssociateTimeSeriesToAssetProperty" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.AssociateTimeSeriesToAssetProperty"></a>

```typescript
public readonly AssociateTimeSeriesToAssetProperty: string[];
```

- *Type:* string[]

IAM actions required for the AssociateTimeSeriesToAssetProperty API call.

---

##### `BatchAssociateDataSegmentsToDataset`<sup>Required</sup> <a name="BatchAssociateDataSegmentsToDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchAssociateDataSegmentsToDataset"></a>

```typescript
public readonly BatchAssociateDataSegmentsToDataset: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateDataSegmentsToDataset API call.

---

##### `BatchAssociateProjectAssets`<sup>Required</sup> <a name="BatchAssociateProjectAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchAssociateProjectAssets"></a>

```typescript
public readonly BatchAssociateProjectAssets: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateProjectAssets API call.

---

##### `BatchDeleteDatasetDataSegments`<sup>Required</sup> <a name="BatchDeleteDatasetDataSegments" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchDeleteDatasetDataSegments"></a>

```typescript
public readonly BatchDeleteDatasetDataSegments: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteDatasetDataSegments API call.

---

##### `BatchDisassociateDataSegmentsFromDataset`<sup>Required</sup> <a name="BatchDisassociateDataSegmentsFromDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchDisassociateDataSegmentsFromDataset"></a>

```typescript
public readonly BatchDisassociateDataSegmentsFromDataset: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateDataSegmentsFromDataset API call.

---

##### `BatchDisassociateProjectAssets`<sup>Required</sup> <a name="BatchDisassociateProjectAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchDisassociateProjectAssets"></a>

```typescript
public readonly BatchDisassociateProjectAssets: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateProjectAssets API call.

---

##### `BatchGetAssetPropertyAggregates`<sup>Required</sup> <a name="BatchGetAssetPropertyAggregates" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchGetAssetPropertyAggregates"></a>

```typescript
public readonly BatchGetAssetPropertyAggregates: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetAssetPropertyAggregates API call.

---

##### `BatchGetAssetPropertyValue`<sup>Required</sup> <a name="BatchGetAssetPropertyValue" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchGetAssetPropertyValue"></a>

```typescript
public readonly BatchGetAssetPropertyValue: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetAssetPropertyValue API call.

---

##### `BatchGetAssetPropertyValueHistory`<sup>Required</sup> <a name="BatchGetAssetPropertyValueHistory" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchGetAssetPropertyValueHistory"></a>

```typescript
public readonly BatchGetAssetPropertyValueHistory: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetAssetPropertyValueHistory API call.

---

##### `BatchPutAssetPropertyValue`<sup>Required</sup> <a name="BatchPutAssetPropertyValue" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.BatchPutAssetPropertyValue"></a>

```typescript
public readonly BatchPutAssetPropertyValue: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutAssetPropertyValue API call.

---

##### `CancelEnrichmentJob`<sup>Required</sup> <a name="CancelEnrichmentJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CancelEnrichmentJob"></a>

```typescript
public readonly CancelEnrichmentJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelEnrichmentJob API call.

---

##### `CancelPipelineExecution`<sup>Required</sup> <a name="CancelPipelineExecution" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CancelPipelineExecution"></a>

```typescript
public readonly CancelPipelineExecution: string[];
```

- *Type:* string[]

IAM actions required for the CancelPipelineExecution API call.

---

##### `CancelQuery`<sup>Required</sup> <a name="CancelQuery" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CancelQuery"></a>

```typescript
public readonly CancelQuery: string[];
```

- *Type:* string[]

IAM actions required for the CancelQuery API call.

---

##### `CreateAccessPolicy`<sup>Required</sup> <a name="CreateAccessPolicy" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateAccessPolicy"></a>

```typescript
public readonly CreateAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessPolicy API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateAsset`<sup>Required</sup> <a name="CreateAsset" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateAsset"></a>

```typescript
public readonly CreateAsset: string[];
```

- *Type:* string[]

IAM actions required for the CreateAsset API call.

---

##### `CreateAssetModel`<sup>Required</sup> <a name="CreateAssetModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateAssetModel"></a>

```typescript
public readonly CreateAssetModel: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssetModel API call.

---

##### `CreateAssetModelCompositeModel`<sup>Required</sup> <a name="CreateAssetModelCompositeModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateAssetModelCompositeModel"></a>

```typescript
public readonly CreateAssetModelCompositeModel: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssetModelCompositeModel API call.

---

##### `CreateBulkImportJob`<sup>Required</sup> <a name="CreateBulkImportJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateBulkImportJob"></a>

```typescript
public readonly CreateBulkImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateBulkImportJob API call.

---

##### `CreateComputationModel`<sup>Required</sup> <a name="CreateComputationModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateComputationModel"></a>

```typescript
public readonly CreateComputationModel: string[];
```

- *Type:* string[]

IAM actions required for the CreateComputationModel API call.

---

##### `CreateDashboard`<sup>Required</sup> <a name="CreateDashboard" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateDashboard"></a>

```typescript
public readonly CreateDashboard: string[];
```

- *Type:* string[]

IAM actions required for the CreateDashboard API call.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataset API call.

---

##### `CreateDatasetExportJob`<sup>Required</sup> <a name="CreateDatasetExportJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateDatasetExportJob"></a>

```typescript
public readonly CreateDatasetExportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateDatasetExportJob API call.

---

##### `CreateEnrichmentJob`<sup>Required</sup> <a name="CreateEnrichmentJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateEnrichmentJob"></a>

```typescript
public readonly CreateEnrichmentJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnrichmentJob API call.

---

##### `CreateGateway`<sup>Required</sup> <a name="CreateGateway" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateGateway"></a>

```typescript
public readonly CreateGateway: string[];
```

- *Type:* string[]

IAM actions required for the CreateGateway API call.

---

##### `CreatePipeline`<sup>Required</sup> <a name="CreatePipeline" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreatePipeline"></a>

```typescript
public readonly CreatePipeline: string[];
```

- *Type:* string[]

IAM actions required for the CreatePipeline API call.

---

##### `CreatePortal`<sup>Required</sup> <a name="CreatePortal" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreatePortal"></a>

```typescript
public readonly CreatePortal: string[];
```

- *Type:* string[]

IAM actions required for the CreatePortal API call.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateProject"></a>

```typescript
public readonly CreateProject: string[];
```

- *Type:* string[]

IAM actions required for the CreateProject API call.

---

##### `CreateTask`<sup>Required</sup> <a name="CreateTask" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateTask"></a>

```typescript
public readonly CreateTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateTask API call.

---

##### `CreateWorkspace`<sup>Required</sup> <a name="CreateWorkspace" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.CreateWorkspace"></a>

```typescript
public readonly CreateWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspace API call.

---

##### `DeleteAccessPolicy`<sup>Required</sup> <a name="DeleteAccessPolicy" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteAccessPolicy"></a>

```typescript
public readonly DeleteAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessPolicy API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteAsset`<sup>Required</sup> <a name="DeleteAsset" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteAsset"></a>

```typescript
public readonly DeleteAsset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAsset API call.

---

##### `DeleteAssetModel`<sup>Required</sup> <a name="DeleteAssetModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteAssetModel"></a>

```typescript
public readonly DeleteAssetModel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssetModel API call.

---

##### `DeleteAssetModelCompositeModel`<sup>Required</sup> <a name="DeleteAssetModelCompositeModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteAssetModelCompositeModel"></a>

```typescript
public readonly DeleteAssetModelCompositeModel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssetModelCompositeModel API call.

---

##### `DeleteAssetModelInterfaceRelationship`<sup>Required</sup> <a name="DeleteAssetModelInterfaceRelationship" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteAssetModelInterfaceRelationship"></a>

```typescript
public readonly DeleteAssetModelInterfaceRelationship: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssetModelInterfaceRelationship API call.

---

##### `DeleteComputationModel`<sup>Required</sup> <a name="DeleteComputationModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteComputationModel"></a>

```typescript
public readonly DeleteComputationModel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteComputationModel API call.

---

##### `DeleteDashboard`<sup>Required</sup> <a name="DeleteDashboard" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteDashboard"></a>

```typescript
public readonly DeleteDashboard: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDashboard API call.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataset API call.

---

##### `DeleteGateway`<sup>Required</sup> <a name="DeleteGateway" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteGateway"></a>

```typescript
public readonly DeleteGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGateway API call.

---

##### `DeletePipeline`<sup>Required</sup> <a name="DeletePipeline" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeletePipeline"></a>

```typescript
public readonly DeletePipeline: string[];
```

- *Type:* string[]

IAM actions required for the DeletePipeline API call.

---

##### `DeletePortal`<sup>Required</sup> <a name="DeletePortal" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeletePortal"></a>

```typescript
public readonly DeletePortal: string[];
```

- *Type:* string[]

IAM actions required for the DeletePortal API call.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProject API call.

---

##### `DeleteTask`<sup>Required</sup> <a name="DeleteTask" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteTask"></a>

```typescript
public readonly DeleteTask: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTask API call.

---

##### `DeleteTimeSeries`<sup>Required</sup> <a name="DeleteTimeSeries" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteTimeSeries"></a>

```typescript
public readonly DeleteTimeSeries: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTimeSeries API call.

---

##### `DeleteWorkspace`<sup>Required</sup> <a name="DeleteWorkspace" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DeleteWorkspace"></a>

```typescript
public readonly DeleteWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspace API call.

---

##### `DescribeAccessPolicy`<sup>Required</sup> <a name="DescribeAccessPolicy" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAccessPolicy"></a>

```typescript
public readonly DescribeAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccessPolicy API call.

---

##### `DescribeAction`<sup>Required</sup> <a name="DescribeAction" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAction"></a>

```typescript
public readonly DescribeAction: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAction API call.

---

##### `DescribeApplication`<sup>Required</sup> <a name="DescribeApplication" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeApplication"></a>

```typescript
public readonly DescribeApplication: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplication API call.

---

##### `DescribeAsset`<sup>Required</sup> <a name="DescribeAsset" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAsset"></a>

```typescript
public readonly DescribeAsset: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAsset API call.

---

##### `DescribeAssetCompositeModel`<sup>Required</sup> <a name="DescribeAssetCompositeModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAssetCompositeModel"></a>

```typescript
public readonly DescribeAssetCompositeModel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssetCompositeModel API call.

---

##### `DescribeAssetModel`<sup>Required</sup> <a name="DescribeAssetModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAssetModel"></a>

```typescript
public readonly DescribeAssetModel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssetModel API call.

---

##### `DescribeAssetModelCompositeModel`<sup>Required</sup> <a name="DescribeAssetModelCompositeModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAssetModelCompositeModel"></a>

```typescript
public readonly DescribeAssetModelCompositeModel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssetModelCompositeModel API call.

---

##### `DescribeAssetModelInterfaceRelationship`<sup>Required</sup> <a name="DescribeAssetModelInterfaceRelationship" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAssetModelInterfaceRelationship"></a>

```typescript
public readonly DescribeAssetModelInterfaceRelationship: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssetModelInterfaceRelationship API call.

---

##### `DescribeAssetProperty`<sup>Required</sup> <a name="DescribeAssetProperty" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeAssetProperty"></a>

```typescript
public readonly DescribeAssetProperty: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssetProperty API call.

---

##### `DescribeBulkImportJob`<sup>Required</sup> <a name="DescribeBulkImportJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeBulkImportJob"></a>

```typescript
public readonly DescribeBulkImportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBulkImportJob API call.

---

##### `DescribeComputationModel`<sup>Required</sup> <a name="DescribeComputationModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeComputationModel"></a>

```typescript
public readonly DescribeComputationModel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeComputationModel API call.

---

##### `DescribeComputationModelExecutionSummary`<sup>Required</sup> <a name="DescribeComputationModelExecutionSummary" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeComputationModelExecutionSummary"></a>

```typescript
public readonly DescribeComputationModelExecutionSummary: string[];
```

- *Type:* string[]

IAM actions required for the DescribeComputationModelExecutionSummary API call.

---

##### `DescribeDashboard`<sup>Required</sup> <a name="DescribeDashboard" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeDashboard"></a>

```typescript
public readonly DescribeDashboard: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDashboard API call.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataset API call.

---

##### `DescribeDatasetExportJob`<sup>Required</sup> <a name="DescribeDatasetExportJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeDatasetExportJob"></a>

```typescript
public readonly DescribeDatasetExportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDatasetExportJob API call.

---

##### `DescribeDefaultEncryptionConfiguration`<sup>Required</sup> <a name="DescribeDefaultEncryptionConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeDefaultEncryptionConfiguration"></a>

```typescript
public readonly DescribeDefaultEncryptionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDefaultEncryptionConfiguration API call.

---

##### `DescribeEnrichmentJob`<sup>Required</sup> <a name="DescribeEnrichmentJob" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeEnrichmentJob"></a>

```typescript
public readonly DescribeEnrichmentJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEnrichmentJob API call.

---

##### `DescribeExecution`<sup>Required</sup> <a name="DescribeExecution" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeExecution"></a>

```typescript
public readonly DescribeExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExecution API call.

---

##### `DescribeGateway`<sup>Required</sup> <a name="DescribeGateway" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeGateway"></a>

```typescript
public readonly DescribeGateway: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGateway API call.

---

##### `DescribeGatewayCapabilityConfiguration`<sup>Required</sup> <a name="DescribeGatewayCapabilityConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeGatewayCapabilityConfiguration"></a>

```typescript
public readonly DescribeGatewayCapabilityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGatewayCapabilityConfiguration API call.

---

##### `DescribeLoggingOptions`<sup>Required</sup> <a name="DescribeLoggingOptions" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeLoggingOptions"></a>

```typescript
public readonly DescribeLoggingOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLoggingOptions API call.

---

##### `DescribePipeline`<sup>Required</sup> <a name="DescribePipeline" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribePipeline"></a>

```typescript
public readonly DescribePipeline: string[];
```

- *Type:* string[]

IAM actions required for the DescribePipeline API call.

---

##### `DescribePipelineExecution`<sup>Required</sup> <a name="DescribePipelineExecution" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribePipelineExecution"></a>

```typescript
public readonly DescribePipelineExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribePipelineExecution API call.

---

##### `DescribePortal`<sup>Required</sup> <a name="DescribePortal" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribePortal"></a>

```typescript
public readonly DescribePortal: string[];
```

- *Type:* string[]

IAM actions required for the DescribePortal API call.

---

##### `DescribeProject`<sup>Required</sup> <a name="DescribeProject" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeProject"></a>

```typescript
public readonly DescribeProject: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProject API call.

---

##### `DescribeQuery`<sup>Required</sup> <a name="DescribeQuery" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeQuery"></a>

```typescript
public readonly DescribeQuery: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQuery API call.

---

##### `DescribeSearch`<sup>Required</sup> <a name="DescribeSearch" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeSearch"></a>

```typescript
public readonly DescribeSearch: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSearch API call.

---

##### `DescribeStorageConfiguration`<sup>Required</sup> <a name="DescribeStorageConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeStorageConfiguration"></a>

```typescript
public readonly DescribeStorageConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStorageConfiguration API call.

---

##### `DescribeTask`<sup>Required</sup> <a name="DescribeTask" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeTask"></a>

```typescript
public readonly DescribeTask: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTask API call.

---

##### `DescribeTimeSeries`<sup>Required</sup> <a name="DescribeTimeSeries" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeTimeSeries"></a>

```typescript
public readonly DescribeTimeSeries: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTimeSeries API call.

---

##### `DescribeWorkspace`<sup>Required</sup> <a name="DescribeWorkspace" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DescribeWorkspace"></a>

```typescript
public readonly DescribeWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspace API call.

---

##### `DisassociateAssets`<sup>Required</sup> <a name="DisassociateAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DisassociateAssets"></a>

```typescript
public readonly DisassociateAssets: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAssets API call.

---

##### `DisassociateTimeSeriesFromAssetProperty`<sup>Required</sup> <a name="DisassociateTimeSeriesFromAssetProperty" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.DisassociateTimeSeriesFromAssetProperty"></a>

```typescript
public readonly DisassociateTimeSeriesFromAssetProperty: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateTimeSeriesFromAssetProperty API call.

---

##### `ExecuteAction`<sup>Required</sup> <a name="ExecuteAction" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ExecuteAction"></a>

```typescript
public readonly ExecuteAction: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteAction API call.

---

##### `ExecuteQuery`<sup>Required</sup> <a name="ExecuteQuery" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ExecuteQuery"></a>

```typescript
public readonly ExecuteQuery: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteQuery API call.

---

##### `InvokeAssistant`<sup>Required</sup> <a name="InvokeAssistant" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.InvokeAssistant"></a>

```typescript
public readonly InvokeAssistant: string[];
```

- *Type:* string[]

IAM actions required for the InvokeAssistant API call.

---

##### `ListAccessPolicies`<sup>Required</sup> <a name="ListAccessPolicies" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAccessPolicies"></a>

```typescript
public readonly ListAccessPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessPolicies API call.

---

##### `ListActions`<sup>Required</sup> <a name="ListActions" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListActions"></a>

```typescript
public readonly ListActions: string[];
```

- *Type:* string[]

IAM actions required for the ListActions API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListAssetModelCompositeModels`<sup>Required</sup> <a name="ListAssetModelCompositeModels" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssetModelCompositeModels"></a>

```typescript
public readonly ListAssetModelCompositeModels: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetModelCompositeModels API call.

---

##### `ListAssetModelProperties`<sup>Required</sup> <a name="ListAssetModelProperties" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssetModelProperties"></a>

```typescript
public readonly ListAssetModelProperties: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetModelProperties API call.

---

##### `ListAssetModels`<sup>Required</sup> <a name="ListAssetModels" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssetModels"></a>

```typescript
public readonly ListAssetModels: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetModels API call.

---

##### `ListAssetProperties`<sup>Required</sup> <a name="ListAssetProperties" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssetProperties"></a>

```typescript
public readonly ListAssetProperties: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetProperties API call.

---

##### `ListAssetRelationships`<sup>Required</sup> <a name="ListAssetRelationships" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssetRelationships"></a>

```typescript
public readonly ListAssetRelationships: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetRelationships API call.

---

##### `ListAssets`<sup>Required</sup> <a name="ListAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssets"></a>

```typescript
public readonly ListAssets: string[];
```

- *Type:* string[]

IAM actions required for the ListAssets API call.

---

##### `ListAssociatedAssets`<sup>Required</sup> <a name="ListAssociatedAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListAssociatedAssets"></a>

```typescript
public readonly ListAssociatedAssets: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedAssets API call.

---

##### `ListBulkImportJobs`<sup>Required</sup> <a name="ListBulkImportJobs" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListBulkImportJobs"></a>

```typescript
public readonly ListBulkImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListBulkImportJobs API call.

---

##### `ListCompositionRelationships`<sup>Required</sup> <a name="ListCompositionRelationships" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListCompositionRelationships"></a>

```typescript
public readonly ListCompositionRelationships: string[];
```

- *Type:* string[]

IAM actions required for the ListCompositionRelationships API call.

---

##### `ListComputationModelDataBindingUsages`<sup>Required</sup> <a name="ListComputationModelDataBindingUsages" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListComputationModelDataBindingUsages"></a>

```typescript
public readonly ListComputationModelDataBindingUsages: string[];
```

- *Type:* string[]

IAM actions required for the ListComputationModelDataBindingUsages API call.

---

##### `ListComputationModelResolveToResources`<sup>Required</sup> <a name="ListComputationModelResolveToResources" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListComputationModelResolveToResources"></a>

```typescript
public readonly ListComputationModelResolveToResources: string[];
```

- *Type:* string[]

IAM actions required for the ListComputationModelResolveToResources API call.

---

##### `ListComputationModels`<sup>Required</sup> <a name="ListComputationModels" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListComputationModels"></a>

```typescript
public readonly ListComputationModels: string[];
```

- *Type:* string[]

IAM actions required for the ListComputationModels API call.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string[];
```

- *Type:* string[]

IAM actions required for the ListDashboards API call.

---

##### `ListDatasetDataSegmentRelationships`<sup>Required</sup> <a name="ListDatasetDataSegmentRelationships" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListDatasetDataSegmentRelationships"></a>

```typescript
public readonly ListDatasetDataSegmentRelationships: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetDataSegmentRelationships API call.

---

##### `ListDatasetDataSegments`<sup>Required</sup> <a name="ListDatasetDataSegments" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListDatasetDataSegments"></a>

```typescript
public readonly ListDatasetDataSegments: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetDataSegments API call.

---

##### `ListDatasetExportJobs`<sup>Required</sup> <a name="ListDatasetExportJobs" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListDatasetExportJobs"></a>

```typescript
public readonly ListDatasetExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetExportJobs API call.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasets API call.

---

##### `ListEnrichmentJobs`<sup>Required</sup> <a name="ListEnrichmentJobs" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListEnrichmentJobs"></a>

```typescript
public readonly ListEnrichmentJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListEnrichmentJobs API call.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListExecutions API call.

---

##### `ListGateways`<sup>Required</sup> <a name="ListGateways" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListGateways"></a>

```typescript
public readonly ListGateways: string[];
```

- *Type:* string[]

IAM actions required for the ListGateways API call.

---

##### `ListInterfaceRelationships`<sup>Required</sup> <a name="ListInterfaceRelationships" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListInterfaceRelationships"></a>

```typescript
public readonly ListInterfaceRelationships: string[];
```

- *Type:* string[]

IAM actions required for the ListInterfaceRelationships API call.

---

##### `ListPipelineExecutions`<sup>Required</sup> <a name="ListPipelineExecutions" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListPipelineExecutions"></a>

```typescript
public readonly ListPipelineExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListPipelineExecutions API call.

---

##### `ListPipelines`<sup>Required</sup> <a name="ListPipelines" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListPipelines"></a>

```typescript
public readonly ListPipelines: string[];
```

- *Type:* string[]

IAM actions required for the ListPipelines API call.

---

##### `ListPortals`<sup>Required</sup> <a name="ListPortals" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListPortals"></a>

```typescript
public readonly ListPortals: string[];
```

- *Type:* string[]

IAM actions required for the ListPortals API call.

---

##### `ListProjectAssets`<sup>Required</sup> <a name="ListProjectAssets" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListProjectAssets"></a>

```typescript
public readonly ListProjectAssets: string[];
```

- *Type:* string[]

IAM actions required for the ListProjectAssets API call.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListProjects"></a>

```typescript
public readonly ListProjects: string[];
```

- *Type:* string[]

IAM actions required for the ListProjects API call.

---

##### `ListQueries`<sup>Required</sup> <a name="ListQueries" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListQueries"></a>

```typescript
public readonly ListQueries: string[];
```

- *Type:* string[]

IAM actions required for the ListQueries API call.

---

##### `ListSearches`<sup>Required</sup> <a name="ListSearches" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListSearches"></a>

```typescript
public readonly ListSearches: string[];
```

- *Type:* string[]

IAM actions required for the ListSearches API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListTasks"></a>

```typescript
public readonly ListTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListTasks API call.

---

##### `ListTimeSeries`<sup>Required</sup> <a name="ListTimeSeries" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListTimeSeries"></a>

```typescript
public readonly ListTimeSeries: string[];
```

- *Type:* string[]

IAM actions required for the ListTimeSeries API call.

---

##### `ListWorkspaces`<sup>Required</sup> <a name="ListWorkspaces" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.ListWorkspaces"></a>

```typescript
public readonly ListWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkspaces API call.

---

##### `opGetAssetPropertyAggregates`<sup>Required</sup> <a name="opGetAssetPropertyAggregates" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetAssetPropertyAggregates"></a>

```typescript
public readonly opGetAssetPropertyAggregates: string[];
```

- *Type:* string[]

IAM actions required for the GetAssetPropertyAggregates API call.

---

##### `opGetAssetPropertyValue`<sup>Required</sup> <a name="opGetAssetPropertyValue" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetAssetPropertyValue"></a>

```typescript
public readonly opGetAssetPropertyValue: string[];
```

- *Type:* string[]

IAM actions required for the GetAssetPropertyValue API call.

---

##### `opGetAssetPropertyValueHistory`<sup>Required</sup> <a name="opGetAssetPropertyValueHistory" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetAssetPropertyValueHistory"></a>

```typescript
public readonly opGetAssetPropertyValueHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetAssetPropertyValueHistory API call.

---

##### `opGetCaptureData`<sup>Required</sup> <a name="opGetCaptureData" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetCaptureData"></a>

```typescript
public readonly opGetCaptureData: string[];
```

- *Type:* string[]

IAM actions required for the GetCaptureData API call.

---

##### `opGetInterpolatedAssetPropertyValues`<sup>Required</sup> <a name="opGetInterpolatedAssetPropertyValues" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetInterpolatedAssetPropertyValues"></a>

```typescript
public readonly opGetInterpolatedAssetPropertyValues: string[];
```

- *Type:* string[]

IAM actions required for the GetInterpolatedAssetPropertyValues API call.

---

##### `opGetQueryResults`<sup>Required</sup> <a name="opGetQueryResults" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetQueryResults"></a>

```typescript
public readonly opGetQueryResults: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryResults API call.

---

##### `opGetSearchResults`<sup>Required</sup> <a name="opGetSearchResults" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.opGetSearchResults"></a>

```typescript
public readonly opGetSearchResults: string[];
```

- *Type:* string[]

IAM actions required for the GetSearchResults API call.

---

##### `PutAssetModelInterfaceRelationship`<sup>Required</sup> <a name="PutAssetModelInterfaceRelationship" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.PutAssetModelInterfaceRelationship"></a>

```typescript
public readonly PutAssetModelInterfaceRelationship: string[];
```

- *Type:* string[]

IAM actions required for the PutAssetModelInterfaceRelationship API call.

---

##### `PutDefaultEncryptionConfiguration`<sup>Required</sup> <a name="PutDefaultEncryptionConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.PutDefaultEncryptionConfiguration"></a>

```typescript
public readonly PutDefaultEncryptionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutDefaultEncryptionConfiguration API call.

---

##### `PutLoggingOptions`<sup>Required</sup> <a name="PutLoggingOptions" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.PutLoggingOptions"></a>

```typescript
public readonly PutLoggingOptions: string[];
```

- *Type:* string[]

IAM actions required for the PutLoggingOptions API call.

---

##### `PutStorageConfiguration`<sup>Required</sup> <a name="PutStorageConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.PutStorageConfiguration"></a>

```typescript
public readonly PutStorageConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutStorageConfiguration API call.

---

##### `StartPipelineExecution`<sup>Required</sup> <a name="StartPipelineExecution" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.StartPipelineExecution"></a>

```typescript
public readonly StartPipelineExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartPipelineExecution API call.

---

##### `StartQuery`<sup>Required</sup> <a name="StartQuery" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.StartQuery"></a>

```typescript
public readonly StartQuery: string[];
```

- *Type:* string[]

IAM actions required for the StartQuery API call.

---

##### `StartSearch`<sup>Required</sup> <a name="StartSearch" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.StartSearch"></a>

```typescript
public readonly StartSearch: string[];
```

- *Type:* string[]

IAM actions required for the StartSearch API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccessPolicy`<sup>Required</sup> <a name="UpdateAccessPolicy" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateAccessPolicy"></a>

```typescript
public readonly UpdateAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccessPolicy API call.

---

##### `UpdateAsset`<sup>Required</sup> <a name="UpdateAsset" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateAsset"></a>

```typescript
public readonly UpdateAsset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAsset API call.

---

##### `UpdateAssetModel`<sup>Required</sup> <a name="UpdateAssetModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateAssetModel"></a>

```typescript
public readonly UpdateAssetModel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssetModel API call.

---

##### `UpdateAssetModelCompositeModel`<sup>Required</sup> <a name="UpdateAssetModelCompositeModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateAssetModelCompositeModel"></a>

```typescript
public readonly UpdateAssetModelCompositeModel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssetModelCompositeModel API call.

---

##### `UpdateAssetProperty`<sup>Required</sup> <a name="UpdateAssetProperty" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateAssetProperty"></a>

```typescript
public readonly UpdateAssetProperty: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssetProperty API call.

---

##### `UpdateComputationModel`<sup>Required</sup> <a name="UpdateComputationModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateComputationModel"></a>

```typescript
public readonly UpdateComputationModel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateComputationModel API call.

---

##### `UpdateDashboard`<sup>Required</sup> <a name="UpdateDashboard" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateDashboard"></a>

```typescript
public readonly UpdateDashboard: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDashboard API call.

---

##### `UpdateDataset`<sup>Required</sup> <a name="UpdateDataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateDataset"></a>

```typescript
public readonly UpdateDataset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataset API call.

---

##### `UpdateGateway`<sup>Required</sup> <a name="UpdateGateway" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateGateway"></a>

```typescript
public readonly UpdateGateway: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGateway API call.

---

##### `UpdateGatewayCapabilityConfiguration`<sup>Required</sup> <a name="UpdateGatewayCapabilityConfiguration" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateGatewayCapabilityConfiguration"></a>

```typescript
public readonly UpdateGatewayCapabilityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGatewayCapabilityConfiguration API call.

---

##### `UpdatePipeline`<sup>Required</sup> <a name="UpdatePipeline" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdatePipeline"></a>

```typescript
public readonly UpdatePipeline: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePipeline API call.

---

##### `UpdatePortal`<sup>Required</sup> <a name="UpdatePortal" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdatePortal"></a>

```typescript
public readonly UpdatePortal: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePortal API call.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProject API call.

---

##### `UpdateTask`<sup>Required</sup> <a name="UpdateTask" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateTask"></a>

```typescript
public readonly UpdateTask: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTask API call.

---

##### `UpdateWorkspace`<sup>Required</sup> <a name="UpdateWorkspace" id="@cdk_utils/iam.iotsitewise.IotsitewiseOperations.property.UpdateWorkspace"></a>

```typescript
public readonly UpdateWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspace API call.

---

### IotsitewiseResources <a name="IotsitewiseResources" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources"></a>

ARN builders, validators, and parsers for iotsitewise resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.Initializer"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

new iotsitewise.IotsitewiseResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.accessPolicy">accessPolicy</a></code> | Builds an ARN for the access-policy resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.asset">asset</a></code> | Builds an ARN for the asset resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.assetModel">assetModel</a></code> | Builds an ARN for the asset-model resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.computationModel">computationModel</a></code> | Builds an ARN for the computation-model resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.dashboard">dashboard</a></code> | Builds an ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.gateway">gateway</a></code> | Builds an ARN for the gateway resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidAccessPolicyArn">isValidAccessPolicyArn</a></code> | Validates whether a string is a valid ARN for the access-policy resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidAssetArn">isValidAssetArn</a></code> | Validates whether a string is a valid ARN for the asset resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidAssetModelArn">isValidAssetModelArn</a></code> | Validates whether a string is a valid ARN for the asset-model resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidComputationModelArn">isValidComputationModelArn</a></code> | Validates whether a string is a valid ARN for the computation-model resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidDashboardArn">isValidDashboardArn</a></code> | Validates whether a string is a valid ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidGatewayArn">isValidGatewayArn</a></code> | Validates whether a string is a valid ARN for the gateway resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidPipelineArn">isValidPipelineArn</a></code> | Validates whether a string is a valid ARN for the pipeline resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidPortalArn">isValidPortalArn</a></code> | Validates whether a string is a valid ARN for the portal resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidTaskArn">isValidTaskArn</a></code> | Validates whether a string is a valid ARN for the task resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidTimeSeriesArn">isValidTimeSeriesArn</a></code> | Validates whether a string is a valid ARN for the time-series resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidWorkspaceArn">isValidWorkspaceArn</a></code> | Validates whether a string is a valid ARN for the workspace resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseAccessPolicyArn">parseAccessPolicyArn</a></code> | Parses a access-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseAssetArn">parseAssetArn</a></code> | Parses a asset ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseAssetModelArn">parseAssetModelArn</a></code> | Parses a asset-model ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseComputationModelArn">parseComputationModelArn</a></code> | Parses a computation-model ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseDashboardArn">parseDashboardArn</a></code> | Parses a dashboard ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseGatewayArn">parseGatewayArn</a></code> | Parses a gateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parsePipelineArn">parsePipelineArn</a></code> | Parses a pipeline ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parsePortalArn">parsePortalArn</a></code> | Parses a portal ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseProjectArn">parseProjectArn</a></code> | Parses a project ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseTaskArn">parseTaskArn</a></code> | Parses a task ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseTimeSeriesArn">parseTimeSeriesArn</a></code> | Parses a time-series ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseWorkspaceArn">parseWorkspaceArn</a></code> | Parses a workspace ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.pipeline">pipeline</a></code> | Builds an ARN for the pipeline resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.portal">portal</a></code> | Builds an ARN for the portal resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.project">project</a></code> | Builds an ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.task">task</a></code> | Builds an ARN for the task resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.timeSeries">timeSeries</a></code> | Builds an ARN for the time-series resource. |
| <code><a href="#@cdk_utils/iam.iotsitewise.IotsitewiseResources.workspace">workspace</a></code> | Builds an ARN for the workspace resource. |

---

##### `accessPolicy` <a name="accessPolicy" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.accessPolicy"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.accessPolicy(props: IotsitewiseAccessPolicyArnProps)
```

Builds an ARN for the access-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.accessPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAccessPolicyArnProps">IotsitewiseAccessPolicyArnProps</a>

---

##### `application` <a name="application" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.application"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.application(props: IotsitewiseApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseApplicationArnProps">IotsitewiseApplicationArnProps</a>

---

##### `asset` <a name="asset" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.asset"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.asset(props: IotsitewiseAssetArnProps)
```

Builds an ARN for the asset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.asset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetArnProps">IotsitewiseAssetArnProps</a>

---

##### `assetModel` <a name="assetModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.assetModel"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.assetModel(props: IotsitewiseAssetModelArnProps)
```

Builds an ARN for the asset-model resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.assetModel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseAssetModelArnProps">IotsitewiseAssetModelArnProps</a>

---

##### `computationModel` <a name="computationModel" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.computationModel"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.computationModel(props: IotsitewiseComputationModelArnProps)
```

Builds an ARN for the computation-model resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.computationModel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseComputationModelArnProps">IotsitewiseComputationModelArnProps</a>

---

##### `dashboard` <a name="dashboard" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.dashboard"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.dashboard(props: IotsitewiseDashboardArnProps)
```

Builds an ARN for the dashboard resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.dashboard.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDashboardArnProps">IotsitewiseDashboardArnProps</a>

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.dataset"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.dataset(props: IotsitewiseDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseDatasetArnProps">IotsitewiseDatasetArnProps</a>

---

##### `gateway` <a name="gateway" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.gateway"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.gateway(props: IotsitewiseGatewayArnProps)
```

Builds an ARN for the gateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.gateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseGatewayArnProps">IotsitewiseGatewayArnProps</a>

---

##### `isValidAccessPolicyArn` <a name="isValidAccessPolicyArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidAccessPolicyArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidAccessPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the access-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidAccessPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidApplicationArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssetArn` <a name="isValidAssetArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidAssetArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidAssetArn(arn: string)
```

Validates whether a string is a valid ARN for the asset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidAssetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssetModelArn` <a name="isValidAssetModelArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidAssetModelArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidAssetModelArn(arn: string)
```

Validates whether a string is a valid ARN for the asset-model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidAssetModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidComputationModelArn` <a name="isValidComputationModelArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidComputationModelArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidComputationModelArn(arn: string)
```

Validates whether a string is a valid ARN for the computation-model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidComputationModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDashboardArn` <a name="isValidDashboardArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidDashboardArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidDashboardArn(arn: string)
```

Validates whether a string is a valid ARN for the dashboard resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidDatasetArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGatewayArn` <a name="isValidGatewayArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidGatewayArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the gateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPipelineArn` <a name="isValidPipelineArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidPipelineArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidPipelineArn(arn: string)
```

Validates whether a string is a valid ARN for the pipeline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidPipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPortalArn` <a name="isValidPortalArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidPortalArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidPortalArn(arn: string)
```

Validates whether a string is a valid ARN for the portal resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidPortalArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidProjectArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaskArn` <a name="isValidTaskArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidTaskArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTimeSeriesArn` <a name="isValidTimeSeriesArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidTimeSeriesArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidTimeSeriesArn(arn: string)
```

Validates whether a string is a valid ARN for the time-series resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidTimeSeriesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkspaceArn` <a name="isValidWorkspaceArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidWorkspaceArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.isValidWorkspaceArn(arn: string)
```

Validates whether a string is a valid ARN for the workspace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.isValidWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccessPolicyArn` <a name="parseAccessPolicyArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseAccessPolicyArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseAccessPolicyArn(arn: string)
```

Parses a access-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseAccessPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseApplicationArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssetArn` <a name="parseAssetArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseAssetArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseAssetArn(arn: string)
```

Parses a asset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseAssetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssetModelArn` <a name="parseAssetModelArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseAssetModelArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseAssetModelArn(arn: string)
```

Parses a asset-model ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseAssetModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseComputationModelArn` <a name="parseComputationModelArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseComputationModelArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseComputationModelArn(arn: string)
```

Parses a computation-model ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseComputationModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDashboardArn` <a name="parseDashboardArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseDashboardArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseDashboardArn(arn: string)
```

Parses a dashboard ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseDatasetArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGatewayArn` <a name="parseGatewayArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseGatewayArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseGatewayArn(arn: string)
```

Parses a gateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePipelineArn` <a name="parsePipelineArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parsePipelineArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parsePipelineArn(arn: string)
```

Parses a pipeline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parsePipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePortalArn` <a name="parsePortalArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parsePortalArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parsePortalArn(arn: string)
```

Parses a portal ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parsePortalArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseProjectArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseProjectArn(arn: string)
```

Parses a project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaskArn` <a name="parseTaskArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseTaskArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseTaskArn(arn: string)
```

Parses a task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTimeSeriesArn` <a name="parseTimeSeriesArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseTimeSeriesArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseTimeSeriesArn(arn: string)
```

Parses a time-series ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseTimeSeriesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspaceArn` <a name="parseWorkspaceArn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseWorkspaceArn"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.parseWorkspaceArn(arn: string)
```

Parses a workspace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.parseWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `pipeline` <a name="pipeline" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.pipeline"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.pipeline(props: IotsitewisePipelineArnProps)
```

Builds an ARN for the pipeline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.pipeline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewisePipelineArnProps">IotsitewisePipelineArnProps</a>

---

##### `portal` <a name="portal" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.portal"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.portal(props: IotsitewisePortalArnProps)
```

Builds an ARN for the portal resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.portal.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewisePortalArnProps">IotsitewisePortalArnProps</a>

---

##### `project` <a name="project" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.project"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.project(props: IotsitewiseProjectArnProps)
```

Builds an ARN for the project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseProjectArnProps">IotsitewiseProjectArnProps</a>

---

##### `task` <a name="task" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.task"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.task(props: IotsitewiseTaskArnProps)
```

Builds an ARN for the task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.task.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTaskArnProps">IotsitewiseTaskArnProps</a>

---

##### `timeSeries` <a name="timeSeries" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.timeSeries"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.timeSeries(props: IotsitewiseTimeSeriesArnProps)
```

Builds an ARN for the time-series resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.timeSeries.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseTimeSeriesArnProps">IotsitewiseTimeSeriesArnProps</a>

---

##### `workspace` <a name="workspace" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.workspace"></a>

```typescript
import { iotsitewise } from '@cdk_utils/iam'

iotsitewise.IotsitewiseResources.workspace(props: IotsitewiseWorkspaceArnProps)
```

Builds an ARN for the workspace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotsitewise.IotsitewiseResources.workspace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotsitewise.IotsitewiseWorkspaceArnProps">IotsitewiseWorkspaceArnProps</a>

---




