# `cloudfront` Submodule <a name="`cloudfront` Submodule" id="@cdk_utils/iam.cloudfront"></a>


## Structs <a name="Structs" id="Structs"></a>

### CloudFrontAnycastIPListArnComponents <a name="CloudFrontAnycastIPListArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnComponents"></a>

Parsed components of a anycast-ip-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontAnycastIPListArnComponents: cloudfront.CloudFrontAnycastIPListArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontAnycastIPListArnProps <a name="CloudFrontAnycastIPListArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnProps"></a>

Properties for building a anycast-ip-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontAnycastIPListArnProps: cloudfront.CloudFrontAnycastIPListArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontCachePolicyArnComponents <a name="CloudFrontCachePolicyArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnComponents"></a>

Parsed components of a cache-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontCachePolicyArnComponents: cloudfront.CloudFrontCachePolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontCachePolicyArnProps <a name="CloudFrontCachePolicyArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnProps"></a>

Properties for building a cache-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontCachePolicyArnProps: cloudfront.CloudFrontCachePolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontConnectionFunctionArnComponents <a name="CloudFrontConnectionFunctionArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnComponents"></a>

Parsed components of a connection-function ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontConnectionFunctionArnComponents: cloudfront.CloudFrontConnectionFunctionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontConnectionFunctionArnProps <a name="CloudFrontConnectionFunctionArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnProps"></a>

Properties for building a connection-function ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontConnectionFunctionArnProps: cloudfront.CloudFrontConnectionFunctionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontConnectionGroupArnComponents <a name="CloudFrontConnectionGroupArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnComponents"></a>

Parsed components of a connection-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontConnectionGroupArnComponents: cloudfront.CloudFrontConnectionGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontConnectionGroupArnProps <a name="CloudFrontConnectionGroupArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnProps"></a>

Properties for building a connection-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontConnectionGroupArnProps: cloudfront.CloudFrontConnectionGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontContinuousDeploymentPolicyArnComponents <a name="CloudFrontContinuousDeploymentPolicyArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnComponents"></a>

Parsed components of a continuous-deployment-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontContinuousDeploymentPolicyArnComponents: cloudfront.CloudFrontContinuousDeploymentPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontContinuousDeploymentPolicyArnProps <a name="CloudFrontContinuousDeploymentPolicyArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnProps"></a>

Properties for building a continuous-deployment-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontContinuousDeploymentPolicyArnProps: cloudfront.CloudFrontContinuousDeploymentPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontDistributionArnComponents <a name="CloudFrontDistributionArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionArnComponents"></a>

Parsed components of a distribution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontDistributionArnComponents: cloudfront.CloudFrontDistributionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionArnComponents.property.distributionId">distributionId</a></code> | <code>string</code> | The DistributionId component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionArnComponents.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

The DistributionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontDistributionArnProps <a name="CloudFrontDistributionArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionArnProps"></a>

Properties for building a distribution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontDistributionArnProps: cloudfront.CloudFrontDistributionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionArnProps.property.distributionId">distributionId</a></code> | <code>string</code> | The DistributionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionArnProps.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

The DistributionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontDistributionTenantArnComponents <a name="CloudFrontDistributionTenantArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnComponents"></a>

Parsed components of a distribution-tenant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontDistributionTenantArnComponents: cloudfront.CloudFrontDistributionTenantArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontDistributionTenantArnProps <a name="CloudFrontDistributionTenantArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnProps"></a>

Properties for building a distribution-tenant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontDistributionTenantArnProps: cloudfront.CloudFrontDistributionTenantArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontFieldLevelEncryptionConfigArnComponents <a name="CloudFrontFieldLevelEncryptionConfigArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnComponents"></a>

Parsed components of a field-level-encryption-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontFieldLevelEncryptionConfigArnComponents: cloudfront.CloudFrontFieldLevelEncryptionConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontFieldLevelEncryptionConfigArnProps <a name="CloudFrontFieldLevelEncryptionConfigArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnProps"></a>

Properties for building a field-level-encryption-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontFieldLevelEncryptionConfigArnProps: cloudfront.CloudFrontFieldLevelEncryptionConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontFieldLevelEncryptionProfileArnComponents <a name="CloudFrontFieldLevelEncryptionProfileArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnComponents"></a>

Parsed components of a field-level-encryption-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontFieldLevelEncryptionProfileArnComponents: cloudfront.CloudFrontFieldLevelEncryptionProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontFieldLevelEncryptionProfileArnProps <a name="CloudFrontFieldLevelEncryptionProfileArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnProps"></a>

Properties for building a field-level-encryption-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontFieldLevelEncryptionProfileArnProps: cloudfront.CloudFrontFieldLevelEncryptionProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontFunctionArnComponents <a name="CloudFrontFunctionArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontFunctionArnComponents"></a>

Parsed components of a function ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontFunctionArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontFunctionArnComponents: cloudfront.CloudFrontFunctionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFunctionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFunctionArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFunctionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontFunctionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.cloudfront.CloudFrontFunctionArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontFunctionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontFunctionArnProps <a name="CloudFrontFunctionArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontFunctionArnProps"></a>

Properties for building a function ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontFunctionArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontFunctionArnProps: cloudfront.CloudFrontFunctionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFunctionArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFunctionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontFunctionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.cloudfront.CloudFrontFunctionArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontFunctionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontFunctionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontKeyValueStoreArnComponents <a name="CloudFrontKeyValueStoreArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnComponents"></a>

Parsed components of a key-value-store ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontKeyValueStoreArnComponents: cloudfront.CloudFrontKeyValueStoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontKeyValueStoreArnProps <a name="CloudFrontKeyValueStoreArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnProps"></a>

Properties for building a key-value-store ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontKeyValueStoreArnProps: cloudfront.CloudFrontKeyValueStoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontOriginAccessControlArnComponents <a name="CloudFrontOriginAccessControlArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnComponents"></a>

Parsed components of a origin-access-control ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontOriginAccessControlArnComponents: cloudfront.CloudFrontOriginAccessControlArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontOriginAccessControlArnProps <a name="CloudFrontOriginAccessControlArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnProps"></a>

Properties for building a origin-access-control ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontOriginAccessControlArnProps: cloudfront.CloudFrontOriginAccessControlArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontOriginAccessIdentityArnComponents <a name="CloudFrontOriginAccessIdentityArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnComponents"></a>

Parsed components of a origin-access-identity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontOriginAccessIdentityArnComponents: cloudfront.CloudFrontOriginAccessIdentityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontOriginAccessIdentityArnProps <a name="CloudFrontOriginAccessIdentityArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnProps"></a>

Properties for building a origin-access-identity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontOriginAccessIdentityArnProps: cloudfront.CloudFrontOriginAccessIdentityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontOriginRequestPolicyArnComponents <a name="CloudFrontOriginRequestPolicyArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnComponents"></a>

Parsed components of a origin-request-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontOriginRequestPolicyArnComponents: cloudfront.CloudFrontOriginRequestPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontOriginRequestPolicyArnProps <a name="CloudFrontOriginRequestPolicyArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnProps"></a>

Properties for building a origin-request-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontOriginRequestPolicyArnProps: cloudfront.CloudFrontOriginRequestPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontRealtimeLogConfigArnComponents <a name="CloudFrontRealtimeLogConfigArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnComponents"></a>

Parsed components of a realtime-log-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontRealtimeLogConfigArnComponents: cloudfront.CloudFrontRealtimeLogConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontRealtimeLogConfigArnProps <a name="CloudFrontRealtimeLogConfigArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnProps"></a>

Properties for building a realtime-log-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontRealtimeLogConfigArnProps: cloudfront.CloudFrontRealtimeLogConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontResponseHeadersPolicyArnComponents <a name="CloudFrontResponseHeadersPolicyArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnComponents"></a>

Parsed components of a response-headers-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontResponseHeadersPolicyArnComponents: cloudfront.CloudFrontResponseHeadersPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontResponseHeadersPolicyArnProps <a name="CloudFrontResponseHeadersPolicyArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnProps"></a>

Properties for building a response-headers-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontResponseHeadersPolicyArnProps: cloudfront.CloudFrontResponseHeadersPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontStreamingDistributionArnComponents <a name="CloudFrontStreamingDistributionArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnComponents"></a>

Parsed components of a streaming-distribution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontStreamingDistributionArnComponents: cloudfront.CloudFrontStreamingDistributionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnComponents.property.distributionId">distributionId</a></code> | <code>string</code> | The DistributionId component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnComponents.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

The DistributionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontStreamingDistributionArnProps <a name="CloudFrontStreamingDistributionArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnProps"></a>

Properties for building a streaming-distribution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontStreamingDistributionArnProps: cloudfront.CloudFrontStreamingDistributionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnProps.property.distributionId">distributionId</a></code> | <code>string</code> | The DistributionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnProps.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

The DistributionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontTrustStoreArnComponents <a name="CloudFrontTrustStoreArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnComponents"></a>

Parsed components of a trust-store ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontTrustStoreArnComponents: cloudfront.CloudFrontTrustStoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontTrustStoreArnProps <a name="CloudFrontTrustStoreArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnProps"></a>

Properties for building a trust-store ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontTrustStoreArnProps: cloudfront.CloudFrontTrustStoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudFrontVpcoriginArnComponents <a name="CloudFrontVpcoriginArnComponents" id="@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnComponents"></a>

Parsed components of a vpcorigin ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnComponents.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontVpcoriginArnComponents: cloudfront.CloudFrontVpcoriginArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudFrontVpcoriginArnProps <a name="CloudFrontVpcoriginArnProps" id="@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnProps"></a>

Properties for building a vpcorigin ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnProps.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

const cloudFrontVpcoriginArnProps: cloudfront.CloudFrontVpcoriginArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### CloudFrontActions <a name="CloudFrontActions" id="@cdk_utils/iam.cloudfront.CloudFrontActions"></a>

IAM action constants for the cloudfront service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudfront.CloudFrontActions.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

new cloudfront.CloudFrontActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetAnycastIpList">actionGetAnycastIpList</a></code> | <code>string</code> | [Read] cloudfront:GetAnycastIpList. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetCachePolicy">actionGetCachePolicy</a></code> | <code>string</code> | [Read] cloudfront:GetCachePolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetCachePolicyConfig">actionGetCachePolicyConfig</a></code> | <code>string</code> | [Read] cloudfront:GetCachePolicyConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetCloudFrontOriginAccessIdentity">actionGetCloudFrontOriginAccessIdentity</a></code> | <code>string</code> | [Read] cloudfront:GetCloudFrontOriginAccessIdentity. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetCloudFrontOriginAccessIdentityConfig">actionGetCloudFrontOriginAccessIdentityConfig</a></code> | <code>string</code> | [Read] cloudfront:GetCloudFrontOriginAccessIdentityConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetConnectionFunction">actionGetConnectionFunction</a></code> | <code>string</code> | [Read] cloudfront:GetConnectionFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetConnectionGroup">actionGetConnectionGroup</a></code> | <code>string</code> | [Read] cloudfront:GetConnectionGroup. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetConnectionGroupByRoutingEndpoint">actionGetConnectionGroupByRoutingEndpoint</a></code> | <code>string</code> | [Read] cloudfront:GetConnectionGroupByRoutingEndpoint. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetContinuousDeploymentPolicy">actionGetContinuousDeploymentPolicy</a></code> | <code>string</code> | [Read] cloudfront:GetContinuousDeploymentPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetContinuousDeploymentPolicyConfig">actionGetContinuousDeploymentPolicyConfig</a></code> | <code>string</code> | [Read] cloudfront:GetContinuousDeploymentPolicyConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetDistribution">actionGetDistribution</a></code> | <code>string</code> | [Read] cloudfront:GetDistribution. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetDistributionConfig">actionGetDistributionConfig</a></code> | <code>string</code> | [Read] cloudfront:GetDistributionConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetDistributionTenant">actionGetDistributionTenant</a></code> | <code>string</code> | [Read] cloudfront:GetDistributionTenant. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetDistributionTenantByDomain">actionGetDistributionTenantByDomain</a></code> | <code>string</code> | [Read] cloudfront:GetDistributionTenantByDomain. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetFieldLevelEncryption">actionGetFieldLevelEncryption</a></code> | <code>string</code> | [Read] cloudfront:GetFieldLevelEncryption. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetFieldLevelEncryptionConfig">actionGetFieldLevelEncryptionConfig</a></code> | <code>string</code> | [Read] cloudfront:GetFieldLevelEncryptionConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetFieldLevelEncryptionProfile">actionGetFieldLevelEncryptionProfile</a></code> | <code>string</code> | [Read] cloudfront:GetFieldLevelEncryptionProfile. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetFieldLevelEncryptionProfileConfig">actionGetFieldLevelEncryptionProfileConfig</a></code> | <code>string</code> | [Read] cloudfront:GetFieldLevelEncryptionProfileConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetFunction">actionGetFunction</a></code> | <code>string</code> | [Read] cloudfront:GetFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetInvalidation">actionGetInvalidation</a></code> | <code>string</code> | [Read] cloudfront:GetInvalidation. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetInvalidationForDistributionTenant">actionGetInvalidationForDistributionTenant</a></code> | <code>string</code> | [Read] cloudfront:GetInvalidationForDistributionTenant. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetKeyGroup">actionGetKeyGroup</a></code> | <code>string</code> | [Read] cloudfront:GetKeyGroup. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetKeyGroupConfig">actionGetKeyGroupConfig</a></code> | <code>string</code> | [Read] cloudfront:GetKeyGroupConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetManagedCertificateDetails">actionGetManagedCertificateDetails</a></code> | <code>string</code> | [Read] cloudfront:GetManagedCertificateDetails. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetMonitoringSubscription">actionGetMonitoringSubscription</a></code> | <code>string</code> | [Read] cloudfront:GetMonitoringSubscription. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetOriginAccessControl">actionGetOriginAccessControl</a></code> | <code>string</code> | [Read] cloudfront:GetOriginAccessControl. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetOriginAccessControlConfig">actionGetOriginAccessControlConfig</a></code> | <code>string</code> | [Read] cloudfront:GetOriginAccessControlConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetOriginRequestPolicy">actionGetOriginRequestPolicy</a></code> | <code>string</code> | [Read] cloudfront:GetOriginRequestPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetOriginRequestPolicyConfig">actionGetOriginRequestPolicyConfig</a></code> | <code>string</code> | [Read] cloudfront:GetOriginRequestPolicyConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetPublicKey">actionGetPublicKey</a></code> | <code>string</code> | [Read] cloudfront:GetPublicKey. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetPublicKeyConfig">actionGetPublicKeyConfig</a></code> | <code>string</code> | [Read] cloudfront:GetPublicKeyConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetRealtimeLogConfig">actionGetRealtimeLogConfig</a></code> | <code>string</code> | [Read] cloudfront:GetRealtimeLogConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] cloudfront:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetResponseHeadersPolicy">actionGetResponseHeadersPolicy</a></code> | <code>string</code> | [Read] cloudfront:GetResponseHeadersPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetResponseHeadersPolicyConfig">actionGetResponseHeadersPolicyConfig</a></code> | <code>string</code> | [Read] cloudfront:GetResponseHeadersPolicyConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetSavingsPlan">actionGetSavingsPlan</a></code> | <code>string</code> | [Read] cloudfront:GetSavingsPlan. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetStreamingDistribution">actionGetStreamingDistribution</a></code> | <code>string</code> | [Read] cloudfront:GetStreamingDistribution. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetStreamingDistributionConfig">actionGetStreamingDistributionConfig</a></code> | <code>string</code> | [Read] cloudfront:GetStreamingDistributionConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetTrustStore">actionGetTrustStore</a></code> | <code>string</code> | [Read] cloudfront:GetTrustStore. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetVpcOrigin">actionGetVpcOrigin</a></code> | <code>string</code> | [Read] cloudfront:GetVpcOrigin. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] cloudfront:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.AssociateAlias">AssociateAlias</a></code> | <code>string</code> | [Write] cloudfront:AssociateAlias. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.AssociateDistributionTenantWebACL">AssociateDistributionTenantWebACL</a></code> | <code>string</code> | [Write] cloudfront:AssociateDistributionTenantWebACL. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.AssociateDistributionWebACL">AssociateDistributionWebACL</a></code> | <code>string</code> | [Write] cloudfront:AssociateDistributionWebACL. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CopyDistribution">CopyDistribution</a></code> | <code>string</code> | [Write] cloudfront:CopyDistribution. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateAnycastIpList">CreateAnycastIpList</a></code> | <code>string</code> | [Write] cloudfront:CreateAnycastIpList. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateCachePolicy">CreateCachePolicy</a></code> | <code>string</code> | [Write] cloudfront:CreateCachePolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateCloudFrontOriginAccessIdentity">CreateCloudFrontOriginAccessIdentity</a></code> | <code>string</code> | [Write] cloudfront:CreateCloudFrontOriginAccessIdentity. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateConnectionFunction">CreateConnectionFunction</a></code> | <code>string</code> | [Write] cloudfront:CreateConnectionFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateConnectionGroup">CreateConnectionGroup</a></code> | <code>string</code> | [Write] cloudfront:CreateConnectionGroup. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateContinuousDeploymentPolicy">CreateContinuousDeploymentPolicy</a></code> | <code>string</code> | [Write] cloudfront:CreateContinuousDeploymentPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateDistribution">CreateDistribution</a></code> | <code>string</code> | [Write] cloudfront:CreateDistribution. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateDistributionTenant">CreateDistributionTenant</a></code> | <code>string</code> | [Write] cloudfront:CreateDistributionTenant. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateFieldLevelEncryptionConfig">CreateFieldLevelEncryptionConfig</a></code> | <code>string</code> | [Write] cloudfront:CreateFieldLevelEncryptionConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateFieldLevelEncryptionProfile">CreateFieldLevelEncryptionProfile</a></code> | <code>string</code> | [Write] cloudfront:CreateFieldLevelEncryptionProfile. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateFunction">CreateFunction</a></code> | <code>string</code> | [Write] cloudfront:CreateFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateInvalidation">CreateInvalidation</a></code> | <code>string</code> | [Write] cloudfront:CreateInvalidation. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateInvalidationForDistributionTenant">CreateInvalidationForDistributionTenant</a></code> | <code>string</code> | [Write] cloudfront:CreateInvalidationForDistributionTenant. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateKeyGroup">CreateKeyGroup</a></code> | <code>string</code> | [Write] cloudfront:CreateKeyGroup. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateKeyValueStore">CreateKeyValueStore</a></code> | <code>string</code> | [Write] cloudfront:CreateKeyValueStore. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateMonitoringSubscription">CreateMonitoringSubscription</a></code> | <code>string</code> | [Write] cloudfront:CreateMonitoringSubscription. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateOriginAccessControl">CreateOriginAccessControl</a></code> | <code>string</code> | [Write] cloudfront:CreateOriginAccessControl. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateOriginRequestPolicy">CreateOriginRequestPolicy</a></code> | <code>string</code> | [Write] cloudfront:CreateOriginRequestPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreatePublicKey">CreatePublicKey</a></code> | <code>string</code> | [Write] cloudfront:CreatePublicKey. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateRealtimeLogConfig">CreateRealtimeLogConfig</a></code> | <code>string</code> | [Write] cloudfront:CreateRealtimeLogConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateResponseHeadersPolicy">CreateResponseHeadersPolicy</a></code> | <code>string</code> | [Write] cloudfront:CreateResponseHeadersPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateSavingsPlan">CreateSavingsPlan</a></code> | <code>string</code> | [Write] cloudfront:CreateSavingsPlan. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateStreamingDistribution">CreateStreamingDistribution</a></code> | <code>string</code> | [Write] cloudfront:CreateStreamingDistribution. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateStreamingDistributionWithTags">CreateStreamingDistributionWithTags</a></code> | <code>string</code> | [Write] cloudfront:CreateStreamingDistributionWithTags. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateTrustStore">CreateTrustStore</a></code> | <code>string</code> | [Write] cloudfront:CreateTrustStore. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateVpcOrigin">CreateVpcOrigin</a></code> | <code>string</code> | [Write] cloudfront:CreateVpcOrigin. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteAnycastIpList">DeleteAnycastIpList</a></code> | <code>string</code> | [Write] cloudfront:DeleteAnycastIpList. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteCachePolicy">DeleteCachePolicy</a></code> | <code>string</code> | [Write] cloudfront:DeleteCachePolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteCloudFrontOriginAccessIdentity">DeleteCloudFrontOriginAccessIdentity</a></code> | <code>string</code> | [Write] cloudfront:DeleteCloudFrontOriginAccessIdentity. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteConnectionFunction">DeleteConnectionFunction</a></code> | <code>string</code> | [Write] cloudfront:DeleteConnectionFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteConnectionGroup">DeleteConnectionGroup</a></code> | <code>string</code> | [Write] cloudfront:DeleteConnectionGroup. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteContinuousDeploymentPolicy">DeleteContinuousDeploymentPolicy</a></code> | <code>string</code> | [Write] cloudfront:DeleteContinuousDeploymentPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteDistribution">DeleteDistribution</a></code> | <code>string</code> | [Write] cloudfront:DeleteDistribution. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteDistributionTenant">DeleteDistributionTenant</a></code> | <code>string</code> | [Write] cloudfront:DeleteDistributionTenant. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteFieldLevelEncryptionConfig">DeleteFieldLevelEncryptionConfig</a></code> | <code>string</code> | [Write] cloudfront:DeleteFieldLevelEncryptionConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteFieldLevelEncryptionProfile">DeleteFieldLevelEncryptionProfile</a></code> | <code>string</code> | [Write] cloudfront:DeleteFieldLevelEncryptionProfile. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteFunction">DeleteFunction</a></code> | <code>string</code> | [Write] cloudfront:DeleteFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteKeyGroup">DeleteKeyGroup</a></code> | <code>string</code> | [Write] cloudfront:DeleteKeyGroup. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteKeyValueStore">DeleteKeyValueStore</a></code> | <code>string</code> | [Write] cloudfront:DeleteKeyValueStore. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteMonitoringSubscription">DeleteMonitoringSubscription</a></code> | <code>string</code> | [Write] cloudfront:DeleteMonitoringSubscription. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteOriginAccessControl">DeleteOriginAccessControl</a></code> | <code>string</code> | [Write] cloudfront:DeleteOriginAccessControl. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteOriginRequestPolicy">DeleteOriginRequestPolicy</a></code> | <code>string</code> | [Write] cloudfront:DeleteOriginRequestPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeletePublicKey">DeletePublicKey</a></code> | <code>string</code> | [Write] cloudfront:DeletePublicKey. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteRealtimeLogConfig">DeleteRealtimeLogConfig</a></code> | <code>string</code> | [Write] cloudfront:DeleteRealtimeLogConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] cloudfront:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteResponseHeadersPolicy">DeleteResponseHeadersPolicy</a></code> | <code>string</code> | [Write] cloudfront:DeleteResponseHeadersPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteStreamingDistribution">DeleteStreamingDistribution</a></code> | <code>string</code> | [Write] cloudfront:DeleteStreamingDistribution. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteTrustStore">DeleteTrustStore</a></code> | <code>string</code> | [Write] cloudfront:DeleteTrustStore. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteVpcOrigin">DeleteVpcOrigin</a></code> | <code>string</code> | [Write] cloudfront:DeleteVpcOrigin. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DescribeConnectionFunction">DescribeConnectionFunction</a></code> | <code>string</code> | [Read] cloudfront:DescribeConnectionFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DescribeFunction">DescribeFunction</a></code> | <code>string</code> | [Read] cloudfront:DescribeFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DescribeKeyValueStore">DescribeKeyValueStore</a></code> | <code>string</code> | [Read] cloudfront:DescribeKeyValueStore. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DisassociateDistributionTenantWebACL">DisassociateDistributionTenantWebACL</a></code> | <code>string</code> | [Write] cloudfront:DisassociateDistributionTenantWebACL. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.DisassociateDistributionWebACL">DisassociateDistributionWebACL</a></code> | <code>string</code> | [Write] cloudfront:DisassociateDistributionWebACL. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListAnycastIpLists">ListAnycastIpLists</a></code> | <code>string</code> | [List] cloudfront:ListAnycastIpLists. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListCachePolicies">ListCachePolicies</a></code> | <code>string</code> | [List] cloudfront:ListCachePolicies. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListCloudFrontOriginAccessIdentities">ListCloudFrontOriginAccessIdentities</a></code> | <code>string</code> | [List] cloudfront:ListCloudFrontOriginAccessIdentities. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListConflictingAliases">ListConflictingAliases</a></code> | <code>string</code> | [List] cloudfront:ListConflictingAliases. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListConnectionFunctions">ListConnectionFunctions</a></code> | <code>string</code> | [List] cloudfront:ListConnectionFunctions. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListConnectionGroups">ListConnectionGroups</a></code> | <code>string</code> | [List] cloudfront:ListConnectionGroups. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListContinuousDeploymentPolicies">ListContinuousDeploymentPolicies</a></code> | <code>string</code> | [List] cloudfront:ListContinuousDeploymentPolicies. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributions">ListDistributions</a></code> | <code>string</code> | [List] cloudfront:ListDistributions. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByAnycastIpListId">ListDistributionsByAnycastIpListId</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByAnycastIpListId. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByCachePolicyId">ListDistributionsByCachePolicyId</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByCachePolicyId. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByConnectionFunction">ListDistributionsByConnectionFunction</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByConnectionFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByConnectionMode">ListDistributionsByConnectionMode</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByConnectionMode. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByKeyGroup">ListDistributionsByKeyGroup</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByKeyGroup. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByLambdaFunction">ListDistributionsByLambdaFunction</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByLambdaFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByOriginRequestPolicyId">ListDistributionsByOriginRequestPolicyId</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByOriginRequestPolicyId. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByRealtimeLogConfig">ListDistributionsByRealtimeLogConfig</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByRealtimeLogConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByResponseHeadersPolicyId">ListDistributionsByResponseHeadersPolicyId</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByResponseHeadersPolicyId. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByTrustStore">ListDistributionsByTrustStore</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByTrustStore. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByVpcOriginId">ListDistributionsByVpcOriginId</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByVpcOriginId. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByWebACLId">ListDistributionsByWebACLId</a></code> | <code>string</code> | [List] cloudfront:ListDistributionsByWebACLId. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionTenants">ListDistributionTenants</a></code> | <code>string</code> | [List] cloudfront:ListDistributionTenants. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionTenantsByCustomization">ListDistributionTenantsByCustomization</a></code> | <code>string</code> | [List] cloudfront:ListDistributionTenantsByCustomization. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDomainConflicts">ListDomainConflicts</a></code> | <code>string</code> | [List] cloudfront:ListDomainConflicts. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListFieldLevelEncryptionConfigs">ListFieldLevelEncryptionConfigs</a></code> | <code>string</code> | [List] cloudfront:ListFieldLevelEncryptionConfigs. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListFieldLevelEncryptionProfiles">ListFieldLevelEncryptionProfiles</a></code> | <code>string</code> | [List] cloudfront:ListFieldLevelEncryptionProfiles. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListFunctions">ListFunctions</a></code> | <code>string</code> | [List] cloudfront:ListFunctions. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListInvalidations">ListInvalidations</a></code> | <code>string</code> | [List] cloudfront:ListInvalidations. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListInvalidationsForDistributionTenant">ListInvalidationsForDistributionTenant</a></code> | <code>string</code> | [List] cloudfront:ListInvalidationsForDistributionTenant. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListKeyGroups">ListKeyGroups</a></code> | <code>string</code> | [List] cloudfront:ListKeyGroups. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListKeyValueStores">ListKeyValueStores</a></code> | <code>string</code> | [List] cloudfront:ListKeyValueStores. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListOriginAccessControls">ListOriginAccessControls</a></code> | <code>string</code> | [List] cloudfront:ListOriginAccessControls. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListOriginRequestPolicies">ListOriginRequestPolicies</a></code> | <code>string</code> | [List] cloudfront:ListOriginRequestPolicies. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListPublicKeys">ListPublicKeys</a></code> | <code>string</code> | [List] cloudfront:ListPublicKeys. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListRateCards">ListRateCards</a></code> | <code>string</code> | [List] cloudfront:ListRateCards. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListRealtimeLogConfigs">ListRealtimeLogConfigs</a></code> | <code>string</code> | [List] cloudfront:ListRealtimeLogConfigs. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListResponseHeadersPolicies">ListResponseHeadersPolicies</a></code> | <code>string</code> | [List] cloudfront:ListResponseHeadersPolicies. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListSavingsPlans">ListSavingsPlans</a></code> | <code>string</code> | [List] cloudfront:ListSavingsPlans. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListStreamingDistributions">ListStreamingDistributions</a></code> | <code>string</code> | [List] cloudfront:ListStreamingDistributions. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] cloudfront:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListTrustStores">ListTrustStores</a></code> | <code>string</code> | [List] cloudfront:ListTrustStores. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListUsages">ListUsages</a></code> | <code>string</code> | [List] cloudfront:ListUsages. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListVpcOrigins">ListVpcOrigins</a></code> | <code>string</code> | [List] cloudfront:ListVpcOrigins. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.PublishConnectionFunction">PublishConnectionFunction</a></code> | <code>string</code> | [Write] cloudfront:PublishConnectionFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.PublishFunction">PublishFunction</a></code> | <code>string</code> | [Write] cloudfront:PublishFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] cloudfront:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cloudfront:TagResource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.TestConnectionFunction">TestConnectionFunction</a></code> | <code>string</code> | [Write] cloudfront:TestConnectionFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.TestFunction">TestFunction</a></code> | <code>string</code> | [Write] cloudfront:TestFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cloudfront:UntagResource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateAnycastIpList">UpdateAnycastIpList</a></code> | <code>string</code> | [Write] cloudfront:UpdateAnycastIpList. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateCachePolicy">UpdateCachePolicy</a></code> | <code>string</code> | [Write] cloudfront:UpdateCachePolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateCloudFrontOriginAccessIdentity">UpdateCloudFrontOriginAccessIdentity</a></code> | <code>string</code> | [Write] cloudfront:UpdateCloudFrontOriginAccessIdentity. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateConnectionFunction">UpdateConnectionFunction</a></code> | <code>string</code> | [Write] cloudfront:UpdateConnectionFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateConnectionGroup">UpdateConnectionGroup</a></code> | <code>string</code> | [Write] cloudfront:UpdateConnectionGroup. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateContinuousDeploymentPolicy">UpdateContinuousDeploymentPolicy</a></code> | <code>string</code> | [Write] cloudfront:UpdateContinuousDeploymentPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateDistribution">UpdateDistribution</a></code> | <code>string</code> | [Write] cloudfront:UpdateDistribution. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateDistributionTenant">UpdateDistributionTenant</a></code> | <code>string</code> | [Write] cloudfront:UpdateDistributionTenant. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateDistributionWithStagingConfig">UpdateDistributionWithStagingConfig</a></code> | <code>string</code> | [Write] cloudfront:UpdateDistributionWithStagingConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateDomainAssociation">UpdateDomainAssociation</a></code> | <code>string</code> | [Write] cloudfront:UpdateDomainAssociation. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateFieldLevelEncryptionConfig">UpdateFieldLevelEncryptionConfig</a></code> | <code>string</code> | [Write] cloudfront:UpdateFieldLevelEncryptionConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateFieldLevelEncryptionProfile">UpdateFieldLevelEncryptionProfile</a></code> | <code>string</code> | [Write] cloudfront:UpdateFieldLevelEncryptionProfile. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateFunction">UpdateFunction</a></code> | <code>string</code> | [Write] cloudfront:UpdateFunction. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateKeyGroup">UpdateKeyGroup</a></code> | <code>string</code> | [Write] cloudfront:UpdateKeyGroup. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateKeyValueStore">UpdateKeyValueStore</a></code> | <code>string</code> | [Write] cloudfront:UpdateKeyValueStore. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateOriginAccessControl">UpdateOriginAccessControl</a></code> | <code>string</code> | [Write] cloudfront:UpdateOriginAccessControl. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateOriginRequestPolicy">UpdateOriginRequestPolicy</a></code> | <code>string</code> | [Write] cloudfront:UpdateOriginRequestPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdatePublicKey">UpdatePublicKey</a></code> | <code>string</code> | [Write] cloudfront:UpdatePublicKey. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateRealtimeLogConfig">UpdateRealtimeLogConfig</a></code> | <code>string</code> | [Write] cloudfront:UpdateRealtimeLogConfig. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateResponseHeadersPolicy">UpdateResponseHeadersPolicy</a></code> | <code>string</code> | [Write] cloudfront:UpdateResponseHeadersPolicy. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateSavingsPlan">UpdateSavingsPlan</a></code> | <code>string</code> | [Write] cloudfront:UpdateSavingsPlan. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateStreamingDistribution">UpdateStreamingDistribution</a></code> | <code>string</code> | [Write] cloudfront:UpdateStreamingDistribution. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateTrustStore">UpdateTrustStore</a></code> | <code>string</code> | [Write] cloudfront:UpdateTrustStore. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateVpcOrigin">UpdateVpcOrigin</a></code> | <code>string</code> | [Write] cloudfront:UpdateVpcOrigin. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontActions.property.VerifyDnsConfiguration">VerifyDnsConfiguration</a></code> | <code>string</code> | [Read] cloudfront:VerifyDnsConfiguration. |

---

##### `actionGetAnycastIpList`<sup>Required</sup> <a name="actionGetAnycastIpList" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetAnycastIpList"></a>

```typescript
public readonly actionGetAnycastIpList: string;
```

- *Type:* string

[Read] cloudfront:GetAnycastIpList.

---

##### `actionGetCachePolicy`<sup>Required</sup> <a name="actionGetCachePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetCachePolicy"></a>

```typescript
public readonly actionGetCachePolicy: string;
```

- *Type:* string

[Read] cloudfront:GetCachePolicy.

---

##### `actionGetCachePolicyConfig`<sup>Required</sup> <a name="actionGetCachePolicyConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetCachePolicyConfig"></a>

```typescript
public readonly actionGetCachePolicyConfig: string;
```

- *Type:* string

[Read] cloudfront:GetCachePolicyConfig.

---

##### `actionGetCloudFrontOriginAccessIdentity`<sup>Required</sup> <a name="actionGetCloudFrontOriginAccessIdentity" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetCloudFrontOriginAccessIdentity"></a>

```typescript
public readonly actionGetCloudFrontOriginAccessIdentity: string;
```

- *Type:* string

[Read] cloudfront:GetCloudFrontOriginAccessIdentity.

---

##### `actionGetCloudFrontOriginAccessIdentityConfig`<sup>Required</sup> <a name="actionGetCloudFrontOriginAccessIdentityConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetCloudFrontOriginAccessIdentityConfig"></a>

```typescript
public readonly actionGetCloudFrontOriginAccessIdentityConfig: string;
```

- *Type:* string

[Read] cloudfront:GetCloudFrontOriginAccessIdentityConfig.

---

##### `actionGetConnectionFunction`<sup>Required</sup> <a name="actionGetConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetConnectionFunction"></a>

```typescript
public readonly actionGetConnectionFunction: string;
```

- *Type:* string

[Read] cloudfront:GetConnectionFunction.

---

##### `actionGetConnectionGroup`<sup>Required</sup> <a name="actionGetConnectionGroup" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetConnectionGroup"></a>

```typescript
public readonly actionGetConnectionGroup: string;
```

- *Type:* string

[Read] cloudfront:GetConnectionGroup.

---

##### `actionGetConnectionGroupByRoutingEndpoint`<sup>Required</sup> <a name="actionGetConnectionGroupByRoutingEndpoint" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetConnectionGroupByRoutingEndpoint"></a>

```typescript
public readonly actionGetConnectionGroupByRoutingEndpoint: string;
```

- *Type:* string

[Read] cloudfront:GetConnectionGroupByRoutingEndpoint.

---

##### `actionGetContinuousDeploymentPolicy`<sup>Required</sup> <a name="actionGetContinuousDeploymentPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetContinuousDeploymentPolicy"></a>

```typescript
public readonly actionGetContinuousDeploymentPolicy: string;
```

- *Type:* string

[Read] cloudfront:GetContinuousDeploymentPolicy.

---

##### `actionGetContinuousDeploymentPolicyConfig`<sup>Required</sup> <a name="actionGetContinuousDeploymentPolicyConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetContinuousDeploymentPolicyConfig"></a>

```typescript
public readonly actionGetContinuousDeploymentPolicyConfig: string;
```

- *Type:* string

[Read] cloudfront:GetContinuousDeploymentPolicyConfig.

---

##### `actionGetDistribution`<sup>Required</sup> <a name="actionGetDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetDistribution"></a>

```typescript
public readonly actionGetDistribution: string;
```

- *Type:* string

[Read] cloudfront:GetDistribution.

---

##### `actionGetDistributionConfig`<sup>Required</sup> <a name="actionGetDistributionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetDistributionConfig"></a>

```typescript
public readonly actionGetDistributionConfig: string;
```

- *Type:* string

[Read] cloudfront:GetDistributionConfig.

---

##### `actionGetDistributionTenant`<sup>Required</sup> <a name="actionGetDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetDistributionTenant"></a>

```typescript
public readonly actionGetDistributionTenant: string;
```

- *Type:* string

[Read] cloudfront:GetDistributionTenant.

---

##### `actionGetDistributionTenantByDomain`<sup>Required</sup> <a name="actionGetDistributionTenantByDomain" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetDistributionTenantByDomain"></a>

```typescript
public readonly actionGetDistributionTenantByDomain: string;
```

- *Type:* string

[Read] cloudfront:GetDistributionTenantByDomain.

---

##### `actionGetFieldLevelEncryption`<sup>Required</sup> <a name="actionGetFieldLevelEncryption" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetFieldLevelEncryption"></a>

```typescript
public readonly actionGetFieldLevelEncryption: string;
```

- *Type:* string

[Read] cloudfront:GetFieldLevelEncryption.

---

##### `actionGetFieldLevelEncryptionConfig`<sup>Required</sup> <a name="actionGetFieldLevelEncryptionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetFieldLevelEncryptionConfig"></a>

```typescript
public readonly actionGetFieldLevelEncryptionConfig: string;
```

- *Type:* string

[Read] cloudfront:GetFieldLevelEncryptionConfig.

---

##### `actionGetFieldLevelEncryptionProfile`<sup>Required</sup> <a name="actionGetFieldLevelEncryptionProfile" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetFieldLevelEncryptionProfile"></a>

```typescript
public readonly actionGetFieldLevelEncryptionProfile: string;
```

- *Type:* string

[Read] cloudfront:GetFieldLevelEncryptionProfile.

---

##### `actionGetFieldLevelEncryptionProfileConfig`<sup>Required</sup> <a name="actionGetFieldLevelEncryptionProfileConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetFieldLevelEncryptionProfileConfig"></a>

```typescript
public readonly actionGetFieldLevelEncryptionProfileConfig: string;
```

- *Type:* string

[Read] cloudfront:GetFieldLevelEncryptionProfileConfig.

---

##### `actionGetFunction`<sup>Required</sup> <a name="actionGetFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetFunction"></a>

```typescript
public readonly actionGetFunction: string;
```

- *Type:* string

[Read] cloudfront:GetFunction.

---

##### `actionGetInvalidation`<sup>Required</sup> <a name="actionGetInvalidation" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetInvalidation"></a>

```typescript
public readonly actionGetInvalidation: string;
```

- *Type:* string

[Read] cloudfront:GetInvalidation.

---

##### `actionGetInvalidationForDistributionTenant`<sup>Required</sup> <a name="actionGetInvalidationForDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetInvalidationForDistributionTenant"></a>

```typescript
public readonly actionGetInvalidationForDistributionTenant: string;
```

- *Type:* string

[Read] cloudfront:GetInvalidationForDistributionTenant.

---

##### `actionGetKeyGroup`<sup>Required</sup> <a name="actionGetKeyGroup" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetKeyGroup"></a>

```typescript
public readonly actionGetKeyGroup: string;
```

- *Type:* string

[Read] cloudfront:GetKeyGroup.

---

##### `actionGetKeyGroupConfig`<sup>Required</sup> <a name="actionGetKeyGroupConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetKeyGroupConfig"></a>

```typescript
public readonly actionGetKeyGroupConfig: string;
```

- *Type:* string

[Read] cloudfront:GetKeyGroupConfig.

---

##### `actionGetManagedCertificateDetails`<sup>Required</sup> <a name="actionGetManagedCertificateDetails" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetManagedCertificateDetails"></a>

```typescript
public readonly actionGetManagedCertificateDetails: string;
```

- *Type:* string

[Read] cloudfront:GetManagedCertificateDetails.

---

##### `actionGetMonitoringSubscription`<sup>Required</sup> <a name="actionGetMonitoringSubscription" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetMonitoringSubscription"></a>

```typescript
public readonly actionGetMonitoringSubscription: string;
```

- *Type:* string

[Read] cloudfront:GetMonitoringSubscription.

---

##### `actionGetOriginAccessControl`<sup>Required</sup> <a name="actionGetOriginAccessControl" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetOriginAccessControl"></a>

```typescript
public readonly actionGetOriginAccessControl: string;
```

- *Type:* string

[Read] cloudfront:GetOriginAccessControl.

---

##### `actionGetOriginAccessControlConfig`<sup>Required</sup> <a name="actionGetOriginAccessControlConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetOriginAccessControlConfig"></a>

```typescript
public readonly actionGetOriginAccessControlConfig: string;
```

- *Type:* string

[Read] cloudfront:GetOriginAccessControlConfig.

---

##### `actionGetOriginRequestPolicy`<sup>Required</sup> <a name="actionGetOriginRequestPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetOriginRequestPolicy"></a>

```typescript
public readonly actionGetOriginRequestPolicy: string;
```

- *Type:* string

[Read] cloudfront:GetOriginRequestPolicy.

---

##### `actionGetOriginRequestPolicyConfig`<sup>Required</sup> <a name="actionGetOriginRequestPolicyConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetOriginRequestPolicyConfig"></a>

```typescript
public readonly actionGetOriginRequestPolicyConfig: string;
```

- *Type:* string

[Read] cloudfront:GetOriginRequestPolicyConfig.

---

##### `actionGetPublicKey`<sup>Required</sup> <a name="actionGetPublicKey" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetPublicKey"></a>

```typescript
public readonly actionGetPublicKey: string;
```

- *Type:* string

[Read] cloudfront:GetPublicKey.

---

##### `actionGetPublicKeyConfig`<sup>Required</sup> <a name="actionGetPublicKeyConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetPublicKeyConfig"></a>

```typescript
public readonly actionGetPublicKeyConfig: string;
```

- *Type:* string

[Read] cloudfront:GetPublicKeyConfig.

---

##### `actionGetRealtimeLogConfig`<sup>Required</sup> <a name="actionGetRealtimeLogConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetRealtimeLogConfig"></a>

```typescript
public readonly actionGetRealtimeLogConfig: string;
```

- *Type:* string

[Read] cloudfront:GetRealtimeLogConfig.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] cloudfront:GetResourcePolicy.

---

##### `actionGetResponseHeadersPolicy`<sup>Required</sup> <a name="actionGetResponseHeadersPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetResponseHeadersPolicy"></a>

```typescript
public readonly actionGetResponseHeadersPolicy: string;
```

- *Type:* string

[Read] cloudfront:GetResponseHeadersPolicy.

---

##### `actionGetResponseHeadersPolicyConfig`<sup>Required</sup> <a name="actionGetResponseHeadersPolicyConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetResponseHeadersPolicyConfig"></a>

```typescript
public readonly actionGetResponseHeadersPolicyConfig: string;
```

- *Type:* string

[Read] cloudfront:GetResponseHeadersPolicyConfig.

---

##### `actionGetSavingsPlan`<sup>Required</sup> <a name="actionGetSavingsPlan" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetSavingsPlan"></a>

```typescript
public readonly actionGetSavingsPlan: string;
```

- *Type:* string

[Read] cloudfront:GetSavingsPlan.

---

##### `actionGetStreamingDistribution`<sup>Required</sup> <a name="actionGetStreamingDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetStreamingDistribution"></a>

```typescript
public readonly actionGetStreamingDistribution: string;
```

- *Type:* string

[Read] cloudfront:GetStreamingDistribution.

---

##### `actionGetStreamingDistributionConfig`<sup>Required</sup> <a name="actionGetStreamingDistributionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetStreamingDistributionConfig"></a>

```typescript
public readonly actionGetStreamingDistributionConfig: string;
```

- *Type:* string

[Read] cloudfront:GetStreamingDistributionConfig.

---

##### `actionGetTrustStore`<sup>Required</sup> <a name="actionGetTrustStore" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetTrustStore"></a>

```typescript
public readonly actionGetTrustStore: string;
```

- *Type:* string

[Read] cloudfront:GetTrustStore.

---

##### `actionGetVpcOrigin`<sup>Required</sup> <a name="actionGetVpcOrigin" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.actionGetVpcOrigin"></a>

```typescript
public readonly actionGetVpcOrigin: string;
```

- *Type:* string

[Read] cloudfront:GetVpcOrigin.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] cloudfront:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAlias`<sup>Required</sup> <a name="AssociateAlias" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.AssociateAlias"></a>

```typescript
public readonly AssociateAlias: string;
```

- *Type:* string

[Write] cloudfront:AssociateAlias.

---

##### `AssociateDistributionTenantWebACL`<sup>Required</sup> <a name="AssociateDistributionTenantWebACL" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.AssociateDistributionTenantWebACL"></a>

```typescript
public readonly AssociateDistributionTenantWebACL: string;
```

- *Type:* string

[Write] cloudfront:AssociateDistributionTenantWebACL.

---

##### `AssociateDistributionWebACL`<sup>Required</sup> <a name="AssociateDistributionWebACL" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.AssociateDistributionWebACL"></a>

```typescript
public readonly AssociateDistributionWebACL: string;
```

- *Type:* string

[Write] cloudfront:AssociateDistributionWebACL.

---

##### `CopyDistribution`<sup>Required</sup> <a name="CopyDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CopyDistribution"></a>

```typescript
public readonly CopyDistribution: string;
```

- *Type:* string

[Write] cloudfront:CopyDistribution.

---

##### `CreateAnycastIpList`<sup>Required</sup> <a name="CreateAnycastIpList" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateAnycastIpList"></a>

```typescript
public readonly CreateAnycastIpList: string;
```

- *Type:* string

[Write] cloudfront:CreateAnycastIpList.

---

##### `CreateCachePolicy`<sup>Required</sup> <a name="CreateCachePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateCachePolicy"></a>

```typescript
public readonly CreateCachePolicy: string;
```

- *Type:* string

[Write] cloudfront:CreateCachePolicy.

---

##### `CreateCloudFrontOriginAccessIdentity`<sup>Required</sup> <a name="CreateCloudFrontOriginAccessIdentity" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateCloudFrontOriginAccessIdentity"></a>

```typescript
public readonly CreateCloudFrontOriginAccessIdentity: string;
```

- *Type:* string

[Write] cloudfront:CreateCloudFrontOriginAccessIdentity.

---

##### `CreateConnectionFunction`<sup>Required</sup> <a name="CreateConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateConnectionFunction"></a>

```typescript
public readonly CreateConnectionFunction: string;
```

- *Type:* string

[Write] cloudfront:CreateConnectionFunction.

---

##### `CreateConnectionGroup`<sup>Required</sup> <a name="CreateConnectionGroup" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateConnectionGroup"></a>

```typescript
public readonly CreateConnectionGroup: string;
```

- *Type:* string

[Write] cloudfront:CreateConnectionGroup.

---

##### `CreateContinuousDeploymentPolicy`<sup>Required</sup> <a name="CreateContinuousDeploymentPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateContinuousDeploymentPolicy"></a>

```typescript
public readonly CreateContinuousDeploymentPolicy: string;
```

- *Type:* string

[Write] cloudfront:CreateContinuousDeploymentPolicy.

---

##### `CreateDistribution`<sup>Required</sup> <a name="CreateDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateDistribution"></a>

```typescript
public readonly CreateDistribution: string;
```

- *Type:* string

[Write] cloudfront:CreateDistribution.

---

##### `CreateDistributionTenant`<sup>Required</sup> <a name="CreateDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateDistributionTenant"></a>

```typescript
public readonly CreateDistributionTenant: string;
```

- *Type:* string

[Write] cloudfront:CreateDistributionTenant.

---

##### `CreateFieldLevelEncryptionConfig`<sup>Required</sup> <a name="CreateFieldLevelEncryptionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateFieldLevelEncryptionConfig"></a>

```typescript
public readonly CreateFieldLevelEncryptionConfig: string;
```

- *Type:* string

[Write] cloudfront:CreateFieldLevelEncryptionConfig.

---

##### `CreateFieldLevelEncryptionProfile`<sup>Required</sup> <a name="CreateFieldLevelEncryptionProfile" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateFieldLevelEncryptionProfile"></a>

```typescript
public readonly CreateFieldLevelEncryptionProfile: string;
```

- *Type:* string

[Write] cloudfront:CreateFieldLevelEncryptionProfile.

---

##### `CreateFunction`<sup>Required</sup> <a name="CreateFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateFunction"></a>

```typescript
public readonly CreateFunction: string;
```

- *Type:* string

[Write] cloudfront:CreateFunction.

---

##### `CreateInvalidation`<sup>Required</sup> <a name="CreateInvalidation" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateInvalidation"></a>

```typescript
public readonly CreateInvalidation: string;
```

- *Type:* string

[Write] cloudfront:CreateInvalidation.

---

##### `CreateInvalidationForDistributionTenant`<sup>Required</sup> <a name="CreateInvalidationForDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateInvalidationForDistributionTenant"></a>

```typescript
public readonly CreateInvalidationForDistributionTenant: string;
```

- *Type:* string

[Write] cloudfront:CreateInvalidationForDistributionTenant.

---

##### `CreateKeyGroup`<sup>Required</sup> <a name="CreateKeyGroup" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateKeyGroup"></a>

```typescript
public readonly CreateKeyGroup: string;
```

- *Type:* string

[Write] cloudfront:CreateKeyGroup.

---

##### `CreateKeyValueStore`<sup>Required</sup> <a name="CreateKeyValueStore" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateKeyValueStore"></a>

```typescript
public readonly CreateKeyValueStore: string;
```

- *Type:* string

[Write] cloudfront:CreateKeyValueStore.

---

##### `CreateMonitoringSubscription`<sup>Required</sup> <a name="CreateMonitoringSubscription" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateMonitoringSubscription"></a>

```typescript
public readonly CreateMonitoringSubscription: string;
```

- *Type:* string

[Write] cloudfront:CreateMonitoringSubscription.

---

##### `CreateOriginAccessControl`<sup>Required</sup> <a name="CreateOriginAccessControl" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateOriginAccessControl"></a>

```typescript
public readonly CreateOriginAccessControl: string;
```

- *Type:* string

[Write] cloudfront:CreateOriginAccessControl.

---

##### `CreateOriginRequestPolicy`<sup>Required</sup> <a name="CreateOriginRequestPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateOriginRequestPolicy"></a>

```typescript
public readonly CreateOriginRequestPolicy: string;
```

- *Type:* string

[Write] cloudfront:CreateOriginRequestPolicy.

---

##### `CreatePublicKey`<sup>Required</sup> <a name="CreatePublicKey" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreatePublicKey"></a>

```typescript
public readonly CreatePublicKey: string;
```

- *Type:* string

[Write] cloudfront:CreatePublicKey.

---

##### `CreateRealtimeLogConfig`<sup>Required</sup> <a name="CreateRealtimeLogConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateRealtimeLogConfig"></a>

```typescript
public readonly CreateRealtimeLogConfig: string;
```

- *Type:* string

[Write] cloudfront:CreateRealtimeLogConfig.

---

##### `CreateResponseHeadersPolicy`<sup>Required</sup> <a name="CreateResponseHeadersPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateResponseHeadersPolicy"></a>

```typescript
public readonly CreateResponseHeadersPolicy: string;
```

- *Type:* string

[Write] cloudfront:CreateResponseHeadersPolicy.

---

##### `CreateSavingsPlan`<sup>Required</sup> <a name="CreateSavingsPlan" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateSavingsPlan"></a>

```typescript
public readonly CreateSavingsPlan: string;
```

- *Type:* string

[Write] cloudfront:CreateSavingsPlan.

---

##### `CreateStreamingDistribution`<sup>Required</sup> <a name="CreateStreamingDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateStreamingDistribution"></a>

```typescript
public readonly CreateStreamingDistribution: string;
```

- *Type:* string

[Write] cloudfront:CreateStreamingDistribution.

---

##### `CreateStreamingDistributionWithTags`<sup>Required</sup> <a name="CreateStreamingDistributionWithTags" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateStreamingDistributionWithTags"></a>

```typescript
public readonly CreateStreamingDistributionWithTags: string;
```

- *Type:* string

[Write] cloudfront:CreateStreamingDistributionWithTags.

---

##### `CreateTrustStore`<sup>Required</sup> <a name="CreateTrustStore" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateTrustStore"></a>

```typescript
public readonly CreateTrustStore: string;
```

- *Type:* string

[Write] cloudfront:CreateTrustStore.

---

##### `CreateVpcOrigin`<sup>Required</sup> <a name="CreateVpcOrigin" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.CreateVpcOrigin"></a>

```typescript
public readonly CreateVpcOrigin: string;
```

- *Type:* string

[Write] cloudfront:CreateVpcOrigin.

---

##### `DeleteAnycastIpList`<sup>Required</sup> <a name="DeleteAnycastIpList" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteAnycastIpList"></a>

```typescript
public readonly DeleteAnycastIpList: string;
```

- *Type:* string

[Write] cloudfront:DeleteAnycastIpList.

---

##### `DeleteCachePolicy`<sup>Required</sup> <a name="DeleteCachePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteCachePolicy"></a>

```typescript
public readonly DeleteCachePolicy: string;
```

- *Type:* string

[Write] cloudfront:DeleteCachePolicy.

---

##### `DeleteCloudFrontOriginAccessIdentity`<sup>Required</sup> <a name="DeleteCloudFrontOriginAccessIdentity" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteCloudFrontOriginAccessIdentity"></a>

```typescript
public readonly DeleteCloudFrontOriginAccessIdentity: string;
```

- *Type:* string

[Write] cloudfront:DeleteCloudFrontOriginAccessIdentity.

---

##### `DeleteConnectionFunction`<sup>Required</sup> <a name="DeleteConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteConnectionFunction"></a>

```typescript
public readonly DeleteConnectionFunction: string;
```

- *Type:* string

[Write] cloudfront:DeleteConnectionFunction.

---

##### `DeleteConnectionGroup`<sup>Required</sup> <a name="DeleteConnectionGroup" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteConnectionGroup"></a>

```typescript
public readonly DeleteConnectionGroup: string;
```

- *Type:* string

[Write] cloudfront:DeleteConnectionGroup.

---

##### `DeleteContinuousDeploymentPolicy`<sup>Required</sup> <a name="DeleteContinuousDeploymentPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteContinuousDeploymentPolicy"></a>

```typescript
public readonly DeleteContinuousDeploymentPolicy: string;
```

- *Type:* string

[Write] cloudfront:DeleteContinuousDeploymentPolicy.

---

##### `DeleteDistribution`<sup>Required</sup> <a name="DeleteDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteDistribution"></a>

```typescript
public readonly DeleteDistribution: string;
```

- *Type:* string

[Write] cloudfront:DeleteDistribution.

---

##### `DeleteDistributionTenant`<sup>Required</sup> <a name="DeleteDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteDistributionTenant"></a>

```typescript
public readonly DeleteDistributionTenant: string;
```

- *Type:* string

[Write] cloudfront:DeleteDistributionTenant.

---

##### `DeleteFieldLevelEncryptionConfig`<sup>Required</sup> <a name="DeleteFieldLevelEncryptionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteFieldLevelEncryptionConfig"></a>

```typescript
public readonly DeleteFieldLevelEncryptionConfig: string;
```

- *Type:* string

[Write] cloudfront:DeleteFieldLevelEncryptionConfig.

---

##### `DeleteFieldLevelEncryptionProfile`<sup>Required</sup> <a name="DeleteFieldLevelEncryptionProfile" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteFieldLevelEncryptionProfile"></a>

```typescript
public readonly DeleteFieldLevelEncryptionProfile: string;
```

- *Type:* string

[Write] cloudfront:DeleteFieldLevelEncryptionProfile.

---

##### `DeleteFunction`<sup>Required</sup> <a name="DeleteFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteFunction"></a>

```typescript
public readonly DeleteFunction: string;
```

- *Type:* string

[Write] cloudfront:DeleteFunction.

---

##### `DeleteKeyGroup`<sup>Required</sup> <a name="DeleteKeyGroup" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteKeyGroup"></a>

```typescript
public readonly DeleteKeyGroup: string;
```

- *Type:* string

[Write] cloudfront:DeleteKeyGroup.

---

##### `DeleteKeyValueStore`<sup>Required</sup> <a name="DeleteKeyValueStore" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteKeyValueStore"></a>

```typescript
public readonly DeleteKeyValueStore: string;
```

- *Type:* string

[Write] cloudfront:DeleteKeyValueStore.

---

##### `DeleteMonitoringSubscription`<sup>Required</sup> <a name="DeleteMonitoringSubscription" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteMonitoringSubscription"></a>

```typescript
public readonly DeleteMonitoringSubscription: string;
```

- *Type:* string

[Write] cloudfront:DeleteMonitoringSubscription.

---

##### `DeleteOriginAccessControl`<sup>Required</sup> <a name="DeleteOriginAccessControl" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteOriginAccessControl"></a>

```typescript
public readonly DeleteOriginAccessControl: string;
```

- *Type:* string

[Write] cloudfront:DeleteOriginAccessControl.

---

##### `DeleteOriginRequestPolicy`<sup>Required</sup> <a name="DeleteOriginRequestPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteOriginRequestPolicy"></a>

```typescript
public readonly DeleteOriginRequestPolicy: string;
```

- *Type:* string

[Write] cloudfront:DeleteOriginRequestPolicy.

---

##### `DeletePublicKey`<sup>Required</sup> <a name="DeletePublicKey" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeletePublicKey"></a>

```typescript
public readonly DeletePublicKey: string;
```

- *Type:* string

[Write] cloudfront:DeletePublicKey.

---

##### `DeleteRealtimeLogConfig`<sup>Required</sup> <a name="DeleteRealtimeLogConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteRealtimeLogConfig"></a>

```typescript
public readonly DeleteRealtimeLogConfig: string;
```

- *Type:* string

[Write] cloudfront:DeleteRealtimeLogConfig.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] cloudfront:DeleteResourcePolicy.

---

##### `DeleteResponseHeadersPolicy`<sup>Required</sup> <a name="DeleteResponseHeadersPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteResponseHeadersPolicy"></a>

```typescript
public readonly DeleteResponseHeadersPolicy: string;
```

- *Type:* string

[Write] cloudfront:DeleteResponseHeadersPolicy.

---

##### `DeleteStreamingDistribution`<sup>Required</sup> <a name="DeleteStreamingDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteStreamingDistribution"></a>

```typescript
public readonly DeleteStreamingDistribution: string;
```

- *Type:* string

[Write] cloudfront:DeleteStreamingDistribution.

---

##### `DeleteTrustStore`<sup>Required</sup> <a name="DeleteTrustStore" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteTrustStore"></a>

```typescript
public readonly DeleteTrustStore: string;
```

- *Type:* string

[Write] cloudfront:DeleteTrustStore.

---

##### `DeleteVpcOrigin`<sup>Required</sup> <a name="DeleteVpcOrigin" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DeleteVpcOrigin"></a>

```typescript
public readonly DeleteVpcOrigin: string;
```

- *Type:* string

[Write] cloudfront:DeleteVpcOrigin.

---

##### `DescribeConnectionFunction`<sup>Required</sup> <a name="DescribeConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DescribeConnectionFunction"></a>

```typescript
public readonly DescribeConnectionFunction: string;
```

- *Type:* string

[Read] cloudfront:DescribeConnectionFunction.

---

##### `DescribeFunction`<sup>Required</sup> <a name="DescribeFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DescribeFunction"></a>

```typescript
public readonly DescribeFunction: string;
```

- *Type:* string

[Read] cloudfront:DescribeFunction.

---

##### `DescribeKeyValueStore`<sup>Required</sup> <a name="DescribeKeyValueStore" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DescribeKeyValueStore"></a>

```typescript
public readonly DescribeKeyValueStore: string;
```

- *Type:* string

[Read] cloudfront:DescribeKeyValueStore.

---

##### `DisassociateDistributionTenantWebACL`<sup>Required</sup> <a name="DisassociateDistributionTenantWebACL" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DisassociateDistributionTenantWebACL"></a>

```typescript
public readonly DisassociateDistributionTenantWebACL: string;
```

- *Type:* string

[Write] cloudfront:DisassociateDistributionTenantWebACL.

---

##### `DisassociateDistributionWebACL`<sup>Required</sup> <a name="DisassociateDistributionWebACL" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.DisassociateDistributionWebACL"></a>

```typescript
public readonly DisassociateDistributionWebACL: string;
```

- *Type:* string

[Write] cloudfront:DisassociateDistributionWebACL.

---

##### `ListAnycastIpLists`<sup>Required</sup> <a name="ListAnycastIpLists" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListAnycastIpLists"></a>

```typescript
public readonly ListAnycastIpLists: string;
```

- *Type:* string

[List] cloudfront:ListAnycastIpLists.

---

##### `ListCachePolicies`<sup>Required</sup> <a name="ListCachePolicies" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListCachePolicies"></a>

```typescript
public readonly ListCachePolicies: string;
```

- *Type:* string

[List] cloudfront:ListCachePolicies.

---

##### `ListCloudFrontOriginAccessIdentities`<sup>Required</sup> <a name="ListCloudFrontOriginAccessIdentities" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListCloudFrontOriginAccessIdentities"></a>

```typescript
public readonly ListCloudFrontOriginAccessIdentities: string;
```

- *Type:* string

[List] cloudfront:ListCloudFrontOriginAccessIdentities.

---

##### `ListConflictingAliases`<sup>Required</sup> <a name="ListConflictingAliases" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListConflictingAliases"></a>

```typescript
public readonly ListConflictingAliases: string;
```

- *Type:* string

[List] cloudfront:ListConflictingAliases.

---

##### `ListConnectionFunctions`<sup>Required</sup> <a name="ListConnectionFunctions" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListConnectionFunctions"></a>

```typescript
public readonly ListConnectionFunctions: string;
```

- *Type:* string

[List] cloudfront:ListConnectionFunctions.

---

##### `ListConnectionGroups`<sup>Required</sup> <a name="ListConnectionGroups" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListConnectionGroups"></a>

```typescript
public readonly ListConnectionGroups: string;
```

- *Type:* string

[List] cloudfront:ListConnectionGroups.

---

##### `ListContinuousDeploymentPolicies`<sup>Required</sup> <a name="ListContinuousDeploymentPolicies" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListContinuousDeploymentPolicies"></a>

```typescript
public readonly ListContinuousDeploymentPolicies: string;
```

- *Type:* string

[List] cloudfront:ListContinuousDeploymentPolicies.

---

##### `ListDistributions`<sup>Required</sup> <a name="ListDistributions" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributions"></a>

```typescript
public readonly ListDistributions: string;
```

- *Type:* string

[List] cloudfront:ListDistributions.

---

##### `ListDistributionsByAnycastIpListId`<sup>Required</sup> <a name="ListDistributionsByAnycastIpListId" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByAnycastIpListId"></a>

```typescript
public readonly ListDistributionsByAnycastIpListId: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByAnycastIpListId.

---

##### `ListDistributionsByCachePolicyId`<sup>Required</sup> <a name="ListDistributionsByCachePolicyId" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByCachePolicyId"></a>

```typescript
public readonly ListDistributionsByCachePolicyId: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByCachePolicyId.

---

##### `ListDistributionsByConnectionFunction`<sup>Required</sup> <a name="ListDistributionsByConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByConnectionFunction"></a>

```typescript
public readonly ListDistributionsByConnectionFunction: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByConnectionFunction.

---

##### `ListDistributionsByConnectionMode`<sup>Required</sup> <a name="ListDistributionsByConnectionMode" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByConnectionMode"></a>

```typescript
public readonly ListDistributionsByConnectionMode: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByConnectionMode.

---

##### `ListDistributionsByKeyGroup`<sup>Required</sup> <a name="ListDistributionsByKeyGroup" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByKeyGroup"></a>

```typescript
public readonly ListDistributionsByKeyGroup: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByKeyGroup.

---

##### `ListDistributionsByLambdaFunction`<sup>Required</sup> <a name="ListDistributionsByLambdaFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByLambdaFunction"></a>

```typescript
public readonly ListDistributionsByLambdaFunction: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByLambdaFunction.

---

##### `ListDistributionsByOriginRequestPolicyId`<sup>Required</sup> <a name="ListDistributionsByOriginRequestPolicyId" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByOriginRequestPolicyId"></a>

```typescript
public readonly ListDistributionsByOriginRequestPolicyId: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByOriginRequestPolicyId.

---

##### `ListDistributionsByRealtimeLogConfig`<sup>Required</sup> <a name="ListDistributionsByRealtimeLogConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByRealtimeLogConfig"></a>

```typescript
public readonly ListDistributionsByRealtimeLogConfig: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByRealtimeLogConfig.

---

##### `ListDistributionsByResponseHeadersPolicyId`<sup>Required</sup> <a name="ListDistributionsByResponseHeadersPolicyId" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByResponseHeadersPolicyId"></a>

```typescript
public readonly ListDistributionsByResponseHeadersPolicyId: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByResponseHeadersPolicyId.

---

##### `ListDistributionsByTrustStore`<sup>Required</sup> <a name="ListDistributionsByTrustStore" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByTrustStore"></a>

```typescript
public readonly ListDistributionsByTrustStore: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByTrustStore.

---

##### `ListDistributionsByVpcOriginId`<sup>Required</sup> <a name="ListDistributionsByVpcOriginId" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByVpcOriginId"></a>

```typescript
public readonly ListDistributionsByVpcOriginId: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByVpcOriginId.

---

##### `ListDistributionsByWebACLId`<sup>Required</sup> <a name="ListDistributionsByWebACLId" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionsByWebACLId"></a>

```typescript
public readonly ListDistributionsByWebACLId: string;
```

- *Type:* string

[List] cloudfront:ListDistributionsByWebACLId.

---

##### `ListDistributionTenants`<sup>Required</sup> <a name="ListDistributionTenants" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionTenants"></a>

```typescript
public readonly ListDistributionTenants: string;
```

- *Type:* string

[List] cloudfront:ListDistributionTenants.

---

##### `ListDistributionTenantsByCustomization`<sup>Required</sup> <a name="ListDistributionTenantsByCustomization" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDistributionTenantsByCustomization"></a>

```typescript
public readonly ListDistributionTenantsByCustomization: string;
```

- *Type:* string

[List] cloudfront:ListDistributionTenantsByCustomization.

---

##### `ListDomainConflicts`<sup>Required</sup> <a name="ListDomainConflicts" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListDomainConflicts"></a>

```typescript
public readonly ListDomainConflicts: string;
```

- *Type:* string

[List] cloudfront:ListDomainConflicts.

---

##### `ListFieldLevelEncryptionConfigs`<sup>Required</sup> <a name="ListFieldLevelEncryptionConfigs" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListFieldLevelEncryptionConfigs"></a>

```typescript
public readonly ListFieldLevelEncryptionConfigs: string;
```

- *Type:* string

[List] cloudfront:ListFieldLevelEncryptionConfigs.

---

##### `ListFieldLevelEncryptionProfiles`<sup>Required</sup> <a name="ListFieldLevelEncryptionProfiles" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListFieldLevelEncryptionProfiles"></a>

```typescript
public readonly ListFieldLevelEncryptionProfiles: string;
```

- *Type:* string

[List] cloudfront:ListFieldLevelEncryptionProfiles.

---

##### `ListFunctions`<sup>Required</sup> <a name="ListFunctions" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListFunctions"></a>

```typescript
public readonly ListFunctions: string;
```

- *Type:* string

[List] cloudfront:ListFunctions.

---

##### `ListInvalidations`<sup>Required</sup> <a name="ListInvalidations" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListInvalidations"></a>

```typescript
public readonly ListInvalidations: string;
```

- *Type:* string

[List] cloudfront:ListInvalidations.

---

##### `ListInvalidationsForDistributionTenant`<sup>Required</sup> <a name="ListInvalidationsForDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListInvalidationsForDistributionTenant"></a>

```typescript
public readonly ListInvalidationsForDistributionTenant: string;
```

- *Type:* string

[List] cloudfront:ListInvalidationsForDistributionTenant.

---

##### `ListKeyGroups`<sup>Required</sup> <a name="ListKeyGroups" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListKeyGroups"></a>

```typescript
public readonly ListKeyGroups: string;
```

- *Type:* string

[List] cloudfront:ListKeyGroups.

---

##### `ListKeyValueStores`<sup>Required</sup> <a name="ListKeyValueStores" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListKeyValueStores"></a>

```typescript
public readonly ListKeyValueStores: string;
```

- *Type:* string

[List] cloudfront:ListKeyValueStores.

---

##### `ListOriginAccessControls`<sup>Required</sup> <a name="ListOriginAccessControls" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListOriginAccessControls"></a>

```typescript
public readonly ListOriginAccessControls: string;
```

- *Type:* string

[List] cloudfront:ListOriginAccessControls.

---

##### `ListOriginRequestPolicies`<sup>Required</sup> <a name="ListOriginRequestPolicies" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListOriginRequestPolicies"></a>

```typescript
public readonly ListOriginRequestPolicies: string;
```

- *Type:* string

[List] cloudfront:ListOriginRequestPolicies.

---

##### `ListPublicKeys`<sup>Required</sup> <a name="ListPublicKeys" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListPublicKeys"></a>

```typescript
public readonly ListPublicKeys: string;
```

- *Type:* string

[List] cloudfront:ListPublicKeys.

---

##### `ListRateCards`<sup>Required</sup> <a name="ListRateCards" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListRateCards"></a>

```typescript
public readonly ListRateCards: string;
```

- *Type:* string

[List] cloudfront:ListRateCards.

---

##### `ListRealtimeLogConfigs`<sup>Required</sup> <a name="ListRealtimeLogConfigs" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListRealtimeLogConfigs"></a>

```typescript
public readonly ListRealtimeLogConfigs: string;
```

- *Type:* string

[List] cloudfront:ListRealtimeLogConfigs.

---

##### `ListResponseHeadersPolicies`<sup>Required</sup> <a name="ListResponseHeadersPolicies" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListResponseHeadersPolicies"></a>

```typescript
public readonly ListResponseHeadersPolicies: string;
```

- *Type:* string

[List] cloudfront:ListResponseHeadersPolicies.

---

##### `ListSavingsPlans`<sup>Required</sup> <a name="ListSavingsPlans" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListSavingsPlans"></a>

```typescript
public readonly ListSavingsPlans: string;
```

- *Type:* string

[List] cloudfront:ListSavingsPlans.

---

##### `ListStreamingDistributions`<sup>Required</sup> <a name="ListStreamingDistributions" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListStreamingDistributions"></a>

```typescript
public readonly ListStreamingDistributions: string;
```

- *Type:* string

[List] cloudfront:ListStreamingDistributions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] cloudfront:ListTagsForResource.

---

##### `ListTrustStores`<sup>Required</sup> <a name="ListTrustStores" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListTrustStores"></a>

```typescript
public readonly ListTrustStores: string;
```

- *Type:* string

[List] cloudfront:ListTrustStores.

---

##### `ListUsages`<sup>Required</sup> <a name="ListUsages" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListUsages"></a>

```typescript
public readonly ListUsages: string;
```

- *Type:* string

[List] cloudfront:ListUsages.

---

##### `ListVpcOrigins`<sup>Required</sup> <a name="ListVpcOrigins" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.ListVpcOrigins"></a>

```typescript
public readonly ListVpcOrigins: string;
```

- *Type:* string

[List] cloudfront:ListVpcOrigins.

---

##### `PublishConnectionFunction`<sup>Required</sup> <a name="PublishConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.PublishConnectionFunction"></a>

```typescript
public readonly PublishConnectionFunction: string;
```

- *Type:* string

[Write] cloudfront:PublishConnectionFunction.

---

##### `PublishFunction`<sup>Required</sup> <a name="PublishFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.PublishFunction"></a>

```typescript
public readonly PublishFunction: string;
```

- *Type:* string

[Write] cloudfront:PublishFunction.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] cloudfront:PutResourcePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cloudfront:TagResource.

---

##### `TestConnectionFunction`<sup>Required</sup> <a name="TestConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.TestConnectionFunction"></a>

```typescript
public readonly TestConnectionFunction: string;
```

- *Type:* string

[Write] cloudfront:TestConnectionFunction.

---

##### `TestFunction`<sup>Required</sup> <a name="TestFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.TestFunction"></a>

```typescript
public readonly TestFunction: string;
```

- *Type:* string

[Write] cloudfront:TestFunction.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cloudfront:UntagResource.

---

##### `UpdateAnycastIpList`<sup>Required</sup> <a name="UpdateAnycastIpList" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateAnycastIpList"></a>

```typescript
public readonly UpdateAnycastIpList: string;
```

- *Type:* string

[Write] cloudfront:UpdateAnycastIpList.

---

##### `UpdateCachePolicy`<sup>Required</sup> <a name="UpdateCachePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateCachePolicy"></a>

```typescript
public readonly UpdateCachePolicy: string;
```

- *Type:* string

[Write] cloudfront:UpdateCachePolicy.

---

##### `UpdateCloudFrontOriginAccessIdentity`<sup>Required</sup> <a name="UpdateCloudFrontOriginAccessIdentity" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateCloudFrontOriginAccessIdentity"></a>

```typescript
public readonly UpdateCloudFrontOriginAccessIdentity: string;
```

- *Type:* string

[Write] cloudfront:UpdateCloudFrontOriginAccessIdentity.

---

##### `UpdateConnectionFunction`<sup>Required</sup> <a name="UpdateConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateConnectionFunction"></a>

```typescript
public readonly UpdateConnectionFunction: string;
```

- *Type:* string

[Write] cloudfront:UpdateConnectionFunction.

---

##### `UpdateConnectionGroup`<sup>Required</sup> <a name="UpdateConnectionGroup" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateConnectionGroup"></a>

```typescript
public readonly UpdateConnectionGroup: string;
```

- *Type:* string

[Write] cloudfront:UpdateConnectionGroup.

---

##### `UpdateContinuousDeploymentPolicy`<sup>Required</sup> <a name="UpdateContinuousDeploymentPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateContinuousDeploymentPolicy"></a>

```typescript
public readonly UpdateContinuousDeploymentPolicy: string;
```

- *Type:* string

[Write] cloudfront:UpdateContinuousDeploymentPolicy.

---

##### `UpdateDistribution`<sup>Required</sup> <a name="UpdateDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateDistribution"></a>

```typescript
public readonly UpdateDistribution: string;
```

- *Type:* string

[Write] cloudfront:UpdateDistribution.

---

##### `UpdateDistributionTenant`<sup>Required</sup> <a name="UpdateDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateDistributionTenant"></a>

```typescript
public readonly UpdateDistributionTenant: string;
```

- *Type:* string

[Write] cloudfront:UpdateDistributionTenant.

---

##### `UpdateDistributionWithStagingConfig`<sup>Required</sup> <a name="UpdateDistributionWithStagingConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateDistributionWithStagingConfig"></a>

```typescript
public readonly UpdateDistributionWithStagingConfig: string;
```

- *Type:* string

[Write] cloudfront:UpdateDistributionWithStagingConfig.

---

##### `UpdateDomainAssociation`<sup>Required</sup> <a name="UpdateDomainAssociation" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateDomainAssociation"></a>

```typescript
public readonly UpdateDomainAssociation: string;
```

- *Type:* string

[Write] cloudfront:UpdateDomainAssociation.

---

##### `UpdateFieldLevelEncryptionConfig`<sup>Required</sup> <a name="UpdateFieldLevelEncryptionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateFieldLevelEncryptionConfig"></a>

```typescript
public readonly UpdateFieldLevelEncryptionConfig: string;
```

- *Type:* string

[Write] cloudfront:UpdateFieldLevelEncryptionConfig.

---

##### `UpdateFieldLevelEncryptionProfile`<sup>Required</sup> <a name="UpdateFieldLevelEncryptionProfile" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateFieldLevelEncryptionProfile"></a>

```typescript
public readonly UpdateFieldLevelEncryptionProfile: string;
```

- *Type:* string

[Write] cloudfront:UpdateFieldLevelEncryptionProfile.

---

##### `UpdateFunction`<sup>Required</sup> <a name="UpdateFunction" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateFunction"></a>

```typescript
public readonly UpdateFunction: string;
```

- *Type:* string

[Write] cloudfront:UpdateFunction.

---

##### `UpdateKeyGroup`<sup>Required</sup> <a name="UpdateKeyGroup" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateKeyGroup"></a>

```typescript
public readonly UpdateKeyGroup: string;
```

- *Type:* string

[Write] cloudfront:UpdateKeyGroup.

---

##### `UpdateKeyValueStore`<sup>Required</sup> <a name="UpdateKeyValueStore" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateKeyValueStore"></a>

```typescript
public readonly UpdateKeyValueStore: string;
```

- *Type:* string

[Write] cloudfront:UpdateKeyValueStore.

---

##### `UpdateOriginAccessControl`<sup>Required</sup> <a name="UpdateOriginAccessControl" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateOriginAccessControl"></a>

```typescript
public readonly UpdateOriginAccessControl: string;
```

- *Type:* string

[Write] cloudfront:UpdateOriginAccessControl.

---

##### `UpdateOriginRequestPolicy`<sup>Required</sup> <a name="UpdateOriginRequestPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateOriginRequestPolicy"></a>

```typescript
public readonly UpdateOriginRequestPolicy: string;
```

- *Type:* string

[Write] cloudfront:UpdateOriginRequestPolicy.

---

##### `UpdatePublicKey`<sup>Required</sup> <a name="UpdatePublicKey" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdatePublicKey"></a>

```typescript
public readonly UpdatePublicKey: string;
```

- *Type:* string

[Write] cloudfront:UpdatePublicKey.

---

##### `UpdateRealtimeLogConfig`<sup>Required</sup> <a name="UpdateRealtimeLogConfig" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateRealtimeLogConfig"></a>

```typescript
public readonly UpdateRealtimeLogConfig: string;
```

- *Type:* string

[Write] cloudfront:UpdateRealtimeLogConfig.

---

##### `UpdateResponseHeadersPolicy`<sup>Required</sup> <a name="UpdateResponseHeadersPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateResponseHeadersPolicy"></a>

```typescript
public readonly UpdateResponseHeadersPolicy: string;
```

- *Type:* string

[Write] cloudfront:UpdateResponseHeadersPolicy.

---

##### `UpdateSavingsPlan`<sup>Required</sup> <a name="UpdateSavingsPlan" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateSavingsPlan"></a>

```typescript
public readonly UpdateSavingsPlan: string;
```

- *Type:* string

[Write] cloudfront:UpdateSavingsPlan.

---

##### `UpdateStreamingDistribution`<sup>Required</sup> <a name="UpdateStreamingDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateStreamingDistribution"></a>

```typescript
public readonly UpdateStreamingDistribution: string;
```

- *Type:* string

[Write] cloudfront:UpdateStreamingDistribution.

---

##### `UpdateTrustStore`<sup>Required</sup> <a name="UpdateTrustStore" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateTrustStore"></a>

```typescript
public readonly UpdateTrustStore: string;
```

- *Type:* string

[Write] cloudfront:UpdateTrustStore.

---

##### `UpdateVpcOrigin`<sup>Required</sup> <a name="UpdateVpcOrigin" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.UpdateVpcOrigin"></a>

```typescript
public readonly UpdateVpcOrigin: string;
```

- *Type:* string

[Write] cloudfront:UpdateVpcOrigin.

---

##### `VerifyDnsConfiguration`<sup>Required</sup> <a name="VerifyDnsConfiguration" id="@cdk_utils/iam.cloudfront.CloudFrontActions.property.VerifyDnsConfiguration"></a>

```typescript
public readonly VerifyDnsConfiguration: string;
```

- *Type:* string

[Read] cloudfront:VerifyDnsConfiguration.

---

### CloudFrontConditions <a name="CloudFrontConditions" id="@cdk_utils/iam.cloudfront.CloudFrontConditions"></a>

Condition key constants and builders for cloudfront.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

new cloudfront.CloudFrontConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.requestTag"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.resourceTag"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.tagKeys"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateAnycastIpListConditionKeys">CreateAnycastIpListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAnycastIpList action. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateConnectionFunctionConditionKeys">CreateConnectionFunctionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnectionFunction action. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateConnectionGroupConditionKeys">CreateConnectionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnectionGroup action. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateDistributionConditionKeys">CreateDistributionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDistribution action. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateDistributionTenantConditionKeys">CreateDistributionTenantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDistributionTenant action. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateFunctionConditionKeys">CreateFunctionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFunction action. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateKeyValueStoreConditionKeys">CreateKeyValueStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKeyValueStore action. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateStreamingDistributionWithTagsConditionKeys">CreateStreamingDistributionWithTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStreamingDistributionWithTags action. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateTrustStoreConditionKeys">CreateTrustStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTrustStore action. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateVpcOriginConditionKeys">CreateVpcOriginConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVpcOrigin action. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAnycastIpListConditionKeys`<sup>Required</sup> <a name="CreateAnycastIpListConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateAnycastIpListConditionKeys"></a>

```typescript
public readonly CreateAnycastIpListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAnycastIpList action.

---

##### `CreateConnectionFunctionConditionKeys`<sup>Required</sup> <a name="CreateConnectionFunctionConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateConnectionFunctionConditionKeys"></a>

```typescript
public readonly CreateConnectionFunctionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnectionFunction action.

---

##### `CreateConnectionGroupConditionKeys`<sup>Required</sup> <a name="CreateConnectionGroupConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateConnectionGroupConditionKeys"></a>

```typescript
public readonly CreateConnectionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnectionGroup action.

---

##### `CreateDistributionConditionKeys`<sup>Required</sup> <a name="CreateDistributionConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateDistributionConditionKeys"></a>

```typescript
public readonly CreateDistributionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDistribution action.

---

##### `CreateDistributionTenantConditionKeys`<sup>Required</sup> <a name="CreateDistributionTenantConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateDistributionTenantConditionKeys"></a>

```typescript
public readonly CreateDistributionTenantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDistributionTenant action.

---

##### `CreateFunctionConditionKeys`<sup>Required</sup> <a name="CreateFunctionConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateFunctionConditionKeys"></a>

```typescript
public readonly CreateFunctionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFunction action.

---

##### `CreateKeyValueStoreConditionKeys`<sup>Required</sup> <a name="CreateKeyValueStoreConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateKeyValueStoreConditionKeys"></a>

```typescript
public readonly CreateKeyValueStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKeyValueStore action.

---

##### `CreateStreamingDistributionWithTagsConditionKeys`<sup>Required</sup> <a name="CreateStreamingDistributionWithTagsConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateStreamingDistributionWithTagsConditionKeys"></a>

```typescript
public readonly CreateStreamingDistributionWithTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStreamingDistributionWithTags action.

---

##### `CreateTrustStoreConditionKeys`<sup>Required</sup> <a name="CreateTrustStoreConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateTrustStoreConditionKeys"></a>

```typescript
public readonly CreateTrustStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTrustStore action.

---

##### `CreateVpcOriginConditionKeys`<sup>Required</sup> <a name="CreateVpcOriginConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.CreateVpcOriginConditionKeys"></a>

```typescript
public readonly CreateVpcOriginConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVpcOrigin action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cloudfront.CloudFrontConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CloudFrontOperations <a name="CloudFrontOperations" id="@cdk_utils/iam.cloudfront.CloudFrontOperations"></a>

API operation to required IAM actions mapping for cloudfront.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

new cloudfront.CloudFrontOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.AssociateAlias">AssociateAlias</a></code> | <code>string[]</code> | IAM actions required for the AssociateAlias API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.AssociateDistributionTenantWebACL">AssociateDistributionTenantWebACL</a></code> | <code>string[]</code> | IAM actions required for the AssociateDistributionTenantWebACL API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.AssociateDistributionWebACL">AssociateDistributionWebACL</a></code> | <code>string[]</code> | IAM actions required for the AssociateDistributionWebACL API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CopyDistribution">CopyDistribution</a></code> | <code>string[]</code> | IAM actions required for the CopyDistribution API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateAnycastIpList">CreateAnycastIpList</a></code> | <code>string[]</code> | IAM actions required for the CreateAnycastIpList API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateCachePolicy">CreateCachePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateCachePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateCloudFrontOriginAccessIdentity">CreateCloudFrontOriginAccessIdentity</a></code> | <code>string[]</code> | IAM actions required for the CreateCloudFrontOriginAccessIdentity API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateConnectionFunction">CreateConnectionFunction</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectionFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateConnectionGroup">CreateConnectionGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectionGroup API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateContinuousDeploymentPolicy">CreateContinuousDeploymentPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateContinuousDeploymentPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateDistribution">CreateDistribution</a></code> | <code>string[]</code> | IAM actions required for the CreateDistribution API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateDistributionTenant">CreateDistributionTenant</a></code> | <code>string[]</code> | IAM actions required for the CreateDistributionTenant API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateDistributionWithTags">CreateDistributionWithTags</a></code> | <code>string[]</code> | IAM actions required for the CreateDistributionWithTags API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateFieldLevelEncryptionConfig">CreateFieldLevelEncryptionConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateFieldLevelEncryptionConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateFieldLevelEncryptionProfile">CreateFieldLevelEncryptionProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateFieldLevelEncryptionProfile API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateFunction">CreateFunction</a></code> | <code>string[]</code> | IAM actions required for the CreateFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateInvalidation">CreateInvalidation</a></code> | <code>string[]</code> | IAM actions required for the CreateInvalidation API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateInvalidationForDistributionTenant">CreateInvalidationForDistributionTenant</a></code> | <code>string[]</code> | IAM actions required for the CreateInvalidationForDistributionTenant API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateKeyGroup">CreateKeyGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateKeyGroup API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateKeyValueStore">CreateKeyValueStore</a></code> | <code>string[]</code> | IAM actions required for the CreateKeyValueStore API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateMonitoringSubscription">CreateMonitoringSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateMonitoringSubscription API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateOriginAccessControl">CreateOriginAccessControl</a></code> | <code>string[]</code> | IAM actions required for the CreateOriginAccessControl API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateOriginRequestPolicy">CreateOriginRequestPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateOriginRequestPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreatePublicKey">CreatePublicKey</a></code> | <code>string[]</code> | IAM actions required for the CreatePublicKey API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateRealtimeLogConfig">CreateRealtimeLogConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateRealtimeLogConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateResponseHeadersPolicy">CreateResponseHeadersPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateResponseHeadersPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateStreamingDistribution">CreateStreamingDistribution</a></code> | <code>string[]</code> | IAM actions required for the CreateStreamingDistribution API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateStreamingDistributionWithTags">CreateStreamingDistributionWithTags</a></code> | <code>string[]</code> | IAM actions required for the CreateStreamingDistributionWithTags API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateTrustStore">CreateTrustStore</a></code> | <code>string[]</code> | IAM actions required for the CreateTrustStore API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateVpcOrigin">CreateVpcOrigin</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcOrigin API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteAnycastIpList">DeleteAnycastIpList</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnycastIpList API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteCachePolicy">DeleteCachePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteCachePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteCloudFrontOriginAccessIdentity">DeleteCloudFrontOriginAccessIdentity</a></code> | <code>string[]</code> | IAM actions required for the DeleteCloudFrontOriginAccessIdentity API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteConnectionFunction">DeleteConnectionFunction</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectionFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteConnectionGroup">DeleteConnectionGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectionGroup API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteContinuousDeploymentPolicy">DeleteContinuousDeploymentPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteContinuousDeploymentPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteDistribution">DeleteDistribution</a></code> | <code>string[]</code> | IAM actions required for the DeleteDistribution API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteDistributionTenant">DeleteDistributionTenant</a></code> | <code>string[]</code> | IAM actions required for the DeleteDistributionTenant API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteFieldLevelEncryptionConfig">DeleteFieldLevelEncryptionConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteFieldLevelEncryptionConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteFieldLevelEncryptionProfile">DeleteFieldLevelEncryptionProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteFieldLevelEncryptionProfile API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteFunction">DeleteFunction</a></code> | <code>string[]</code> | IAM actions required for the DeleteFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteKeyGroup">DeleteKeyGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteKeyGroup API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteKeyValueStore">DeleteKeyValueStore</a></code> | <code>string[]</code> | IAM actions required for the DeleteKeyValueStore API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteMonitoringSubscription">DeleteMonitoringSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteMonitoringSubscription API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteOriginAccessControl">DeleteOriginAccessControl</a></code> | <code>string[]</code> | IAM actions required for the DeleteOriginAccessControl API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteOriginRequestPolicy">DeleteOriginRequestPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteOriginRequestPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeletePublicKey">DeletePublicKey</a></code> | <code>string[]</code> | IAM actions required for the DeletePublicKey API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteRealtimeLogConfig">DeleteRealtimeLogConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteRealtimeLogConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteResponseHeadersPolicy">DeleteResponseHeadersPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResponseHeadersPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteServiceLinkedRole">DeleteServiceLinkedRole</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceLinkedRole API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteStreamingDistribution">DeleteStreamingDistribution</a></code> | <code>string[]</code> | IAM actions required for the DeleteStreamingDistribution API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteTrustStore">DeleteTrustStore</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrustStore API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteVpcOrigin">DeleteVpcOrigin</a></code> | <code>string[]</code> | IAM actions required for the DeleteVpcOrigin API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DescribeConnectionFunction">DescribeConnectionFunction</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectionFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DescribeFunction">DescribeFunction</a></code> | <code>string[]</code> | IAM actions required for the DescribeFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DescribeKeyValueStore">DescribeKeyValueStore</a></code> | <code>string[]</code> | IAM actions required for the DescribeKeyValueStore API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DisassociateDistributionTenantWebACL">DisassociateDistributionTenantWebACL</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDistributionTenantWebACL API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DisassociateDistributionWebACL">DisassociateDistributionWebACL</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDistributionWebACL API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListAnycastIpLists">ListAnycastIpLists</a></code> | <code>string[]</code> | IAM actions required for the ListAnycastIpLists API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListCachePolicies">ListCachePolicies</a></code> | <code>string[]</code> | IAM actions required for the ListCachePolicies API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListCloudFrontOriginAccessIdentities">ListCloudFrontOriginAccessIdentities</a></code> | <code>string[]</code> | IAM actions required for the ListCloudFrontOriginAccessIdentities API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListConflictingAliases">ListConflictingAliases</a></code> | <code>string[]</code> | IAM actions required for the ListConflictingAliases API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListConnectionFunctions">ListConnectionFunctions</a></code> | <code>string[]</code> | IAM actions required for the ListConnectionFunctions API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListConnectionGroups">ListConnectionGroups</a></code> | <code>string[]</code> | IAM actions required for the ListConnectionGroups API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListContinuousDeploymentPolicies">ListContinuousDeploymentPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListContinuousDeploymentPolicies API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributions">ListDistributions</a></code> | <code>string[]</code> | IAM actions required for the ListDistributions API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByAnycastIpListId">ListDistributionsByAnycastIpListId</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByAnycastIpListId API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByCachePolicyId">ListDistributionsByCachePolicyId</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByCachePolicyId API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByConnectionFunction">ListDistributionsByConnectionFunction</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByConnectionFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByConnectionMode">ListDistributionsByConnectionMode</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByConnectionMode API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByKeyGroup">ListDistributionsByKeyGroup</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByKeyGroup API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByOriginRequestPolicyId">ListDistributionsByOriginRequestPolicyId</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByOriginRequestPolicyId API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByOwnedResource">ListDistributionsByOwnedResource</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByOwnedResource API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByRealtimeLogConfig">ListDistributionsByRealtimeLogConfig</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByRealtimeLogConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByResponseHeadersPolicyId">ListDistributionsByResponseHeadersPolicyId</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByResponseHeadersPolicyId API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByTrustStore">ListDistributionsByTrustStore</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByTrustStore API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByVpcOriginId">ListDistributionsByVpcOriginId</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByVpcOriginId API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByWebACLId">ListDistributionsByWebACLId</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionsByWebACLId API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionTenants">ListDistributionTenants</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionTenants API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionTenantsByCustomization">ListDistributionTenantsByCustomization</a></code> | <code>string[]</code> | IAM actions required for the ListDistributionTenantsByCustomization API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDomainConflicts">ListDomainConflicts</a></code> | <code>string[]</code> | IAM actions required for the ListDomainConflicts API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListFieldLevelEncryptionConfigs">ListFieldLevelEncryptionConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListFieldLevelEncryptionConfigs API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListFieldLevelEncryptionProfiles">ListFieldLevelEncryptionProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListFieldLevelEncryptionProfiles API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListFunctions">ListFunctions</a></code> | <code>string[]</code> | IAM actions required for the ListFunctions API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListInvalidations">ListInvalidations</a></code> | <code>string[]</code> | IAM actions required for the ListInvalidations API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListInvalidationsForDistributionTenant">ListInvalidationsForDistributionTenant</a></code> | <code>string[]</code> | IAM actions required for the ListInvalidationsForDistributionTenant API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListKeyGroups">ListKeyGroups</a></code> | <code>string[]</code> | IAM actions required for the ListKeyGroups API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListKeyValueStores">ListKeyValueStores</a></code> | <code>string[]</code> | IAM actions required for the ListKeyValueStores API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListOriginAccessControls">ListOriginAccessControls</a></code> | <code>string[]</code> | IAM actions required for the ListOriginAccessControls API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListOriginRequestPolicies">ListOriginRequestPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListOriginRequestPolicies API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListPublicKeys">ListPublicKeys</a></code> | <code>string[]</code> | IAM actions required for the ListPublicKeys API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListRealtimeLogConfigs">ListRealtimeLogConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListRealtimeLogConfigs API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListResponseHeadersPolicies">ListResponseHeadersPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListResponseHeadersPolicies API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListStreamingDistributions">ListStreamingDistributions</a></code> | <code>string[]</code> | IAM actions required for the ListStreamingDistributions API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListTrustStores">ListTrustStores</a></code> | <code>string[]</code> | IAM actions required for the ListTrustStores API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListVpcOrigins">ListVpcOrigins</a></code> | <code>string[]</code> | IAM actions required for the ListVpcOrigins API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetAnycastIpList">opGetAnycastIpList</a></code> | <code>string[]</code> | IAM actions required for the GetAnycastIpList API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetCachePolicy">opGetCachePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetCachePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetCachePolicyConfig">opGetCachePolicyConfig</a></code> | <code>string[]</code> | IAM actions required for the GetCachePolicyConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetCloudFrontOriginAccessIdentity">opGetCloudFrontOriginAccessIdentity</a></code> | <code>string[]</code> | IAM actions required for the GetCloudFrontOriginAccessIdentity API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetCloudFrontOriginAccessIdentityConfig">opGetCloudFrontOriginAccessIdentityConfig</a></code> | <code>string[]</code> | IAM actions required for the GetCloudFrontOriginAccessIdentityConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetConnectionFunction">opGetConnectionFunction</a></code> | <code>string[]</code> | IAM actions required for the GetConnectionFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetConnectionGroup">opGetConnectionGroup</a></code> | <code>string[]</code> | IAM actions required for the GetConnectionGroup API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetConnectionGroupByRoutingEndpoint">opGetConnectionGroupByRoutingEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetConnectionGroupByRoutingEndpoint API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetContinuousDeploymentPolicy">opGetContinuousDeploymentPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetContinuousDeploymentPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetContinuousDeploymentPolicyConfig">opGetContinuousDeploymentPolicyConfig</a></code> | <code>string[]</code> | IAM actions required for the GetContinuousDeploymentPolicyConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetDistribution">opGetDistribution</a></code> | <code>string[]</code> | IAM actions required for the GetDistribution API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetDistributionConfig">opGetDistributionConfig</a></code> | <code>string[]</code> | IAM actions required for the GetDistributionConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetDistributionTenant">opGetDistributionTenant</a></code> | <code>string[]</code> | IAM actions required for the GetDistributionTenant API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetDistributionTenantByDomain">opGetDistributionTenantByDomain</a></code> | <code>string[]</code> | IAM actions required for the GetDistributionTenantByDomain API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetFieldLevelEncryption">opGetFieldLevelEncryption</a></code> | <code>string[]</code> | IAM actions required for the GetFieldLevelEncryption API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetFieldLevelEncryptionConfig">opGetFieldLevelEncryptionConfig</a></code> | <code>string[]</code> | IAM actions required for the GetFieldLevelEncryptionConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetFieldLevelEncryptionProfile">opGetFieldLevelEncryptionProfile</a></code> | <code>string[]</code> | IAM actions required for the GetFieldLevelEncryptionProfile API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetFieldLevelEncryptionProfileConfig">opGetFieldLevelEncryptionProfileConfig</a></code> | <code>string[]</code> | IAM actions required for the GetFieldLevelEncryptionProfileConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetFunction">opGetFunction</a></code> | <code>string[]</code> | IAM actions required for the GetFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetInvalidation">opGetInvalidation</a></code> | <code>string[]</code> | IAM actions required for the GetInvalidation API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetInvalidationForDistributionTenant">opGetInvalidationForDistributionTenant</a></code> | <code>string[]</code> | IAM actions required for the GetInvalidationForDistributionTenant API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetKeyGroup">opGetKeyGroup</a></code> | <code>string[]</code> | IAM actions required for the GetKeyGroup API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetKeyGroupConfig">opGetKeyGroupConfig</a></code> | <code>string[]</code> | IAM actions required for the GetKeyGroupConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetManagedCertificateDetails">opGetManagedCertificateDetails</a></code> | <code>string[]</code> | IAM actions required for the GetManagedCertificateDetails API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetMonitoringSubscription">opGetMonitoringSubscription</a></code> | <code>string[]</code> | IAM actions required for the GetMonitoringSubscription API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetOriginAccessControl">opGetOriginAccessControl</a></code> | <code>string[]</code> | IAM actions required for the GetOriginAccessControl API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetOriginAccessControlConfig">opGetOriginAccessControlConfig</a></code> | <code>string[]</code> | IAM actions required for the GetOriginAccessControlConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetOriginRequestPolicy">opGetOriginRequestPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetOriginRequestPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetOriginRequestPolicyConfig">opGetOriginRequestPolicyConfig</a></code> | <code>string[]</code> | IAM actions required for the GetOriginRequestPolicyConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetPublicKey">opGetPublicKey</a></code> | <code>string[]</code> | IAM actions required for the GetPublicKey API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetPublicKeyConfig">opGetPublicKeyConfig</a></code> | <code>string[]</code> | IAM actions required for the GetPublicKeyConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetRealtimeLogConfig">opGetRealtimeLogConfig</a></code> | <code>string[]</code> | IAM actions required for the GetRealtimeLogConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetResponseHeadersPolicy">opGetResponseHeadersPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResponseHeadersPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetResponseHeadersPolicyConfig">opGetResponseHeadersPolicyConfig</a></code> | <code>string[]</code> | IAM actions required for the GetResponseHeadersPolicyConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetStreamingDistribution">opGetStreamingDistribution</a></code> | <code>string[]</code> | IAM actions required for the GetStreamingDistribution API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetStreamingDistributionConfig">opGetStreamingDistributionConfig</a></code> | <code>string[]</code> | IAM actions required for the GetStreamingDistributionConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetTrustStore">opGetTrustStore</a></code> | <code>string[]</code> | IAM actions required for the GetTrustStore API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetVpcOrigin">opGetVpcOrigin</a></code> | <code>string[]</code> | IAM actions required for the GetVpcOrigin API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.PublishConnectionFunction">PublishConnectionFunction</a></code> | <code>string[]</code> | IAM actions required for the PublishConnectionFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.PublishFunction">PublishFunction</a></code> | <code>string[]</code> | IAM actions required for the PublishFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.TestConnectionFunction">TestConnectionFunction</a></code> | <code>string[]</code> | IAM actions required for the TestConnectionFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.TestFunction">TestFunction</a></code> | <code>string[]</code> | IAM actions required for the TestFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateAnycastIpList">UpdateAnycastIpList</a></code> | <code>string[]</code> | IAM actions required for the UpdateAnycastIpList API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateCachePolicy">UpdateCachePolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateCachePolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateCloudFrontOriginAccessIdentity">UpdateCloudFrontOriginAccessIdentity</a></code> | <code>string[]</code> | IAM actions required for the UpdateCloudFrontOriginAccessIdentity API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateConnectionFunction">UpdateConnectionFunction</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectionFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateConnectionGroup">UpdateConnectionGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectionGroup API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateContinuousDeploymentPolicy">UpdateContinuousDeploymentPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateContinuousDeploymentPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateDistribution">UpdateDistribution</a></code> | <code>string[]</code> | IAM actions required for the UpdateDistribution API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateDistributionTenant">UpdateDistributionTenant</a></code> | <code>string[]</code> | IAM actions required for the UpdateDistributionTenant API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateDistributionWithStagingConfig">UpdateDistributionWithStagingConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateDistributionWithStagingConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateDomainAssociation">UpdateDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateFieldLevelEncryptionConfig">UpdateFieldLevelEncryptionConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateFieldLevelEncryptionConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateFieldLevelEncryptionProfile">UpdateFieldLevelEncryptionProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateFieldLevelEncryptionProfile API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateFunction">UpdateFunction</a></code> | <code>string[]</code> | IAM actions required for the UpdateFunction API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateKeyGroup">UpdateKeyGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateKeyGroup API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateKeyValueStore">UpdateKeyValueStore</a></code> | <code>string[]</code> | IAM actions required for the UpdateKeyValueStore API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateOriginAccessControl">UpdateOriginAccessControl</a></code> | <code>string[]</code> | IAM actions required for the UpdateOriginAccessControl API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateOriginRequestPolicy">UpdateOriginRequestPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateOriginRequestPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdatePublicKey">UpdatePublicKey</a></code> | <code>string[]</code> | IAM actions required for the UpdatePublicKey API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateRealtimeLogConfig">UpdateRealtimeLogConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateRealtimeLogConfig API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateResponseHeadersPolicy">UpdateResponseHeadersPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateResponseHeadersPolicy API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateStreamingDistribution">UpdateStreamingDistribution</a></code> | <code>string[]</code> | IAM actions required for the UpdateStreamingDistribution API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateTrustStore">UpdateTrustStore</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrustStore API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateVpcOrigin">UpdateVpcOrigin</a></code> | <code>string[]</code> | IAM actions required for the UpdateVpcOrigin API call. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontOperations.property.VerifyDnsConfiguration">VerifyDnsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the VerifyDnsConfiguration API call. |

---

##### `AssociateAlias`<sup>Required</sup> <a name="AssociateAlias" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.AssociateAlias"></a>

```typescript
public readonly AssociateAlias: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAlias API call.

---

##### `AssociateDistributionTenantWebACL`<sup>Required</sup> <a name="AssociateDistributionTenantWebACL" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.AssociateDistributionTenantWebACL"></a>

```typescript
public readonly AssociateDistributionTenantWebACL: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDistributionTenantWebACL API call.

---

##### `AssociateDistributionWebACL`<sup>Required</sup> <a name="AssociateDistributionWebACL" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.AssociateDistributionWebACL"></a>

```typescript
public readonly AssociateDistributionWebACL: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDistributionWebACL API call.

---

##### `CopyDistribution`<sup>Required</sup> <a name="CopyDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CopyDistribution"></a>

```typescript
public readonly CopyDistribution: string[];
```

- *Type:* string[]

IAM actions required for the CopyDistribution API call.

---

##### `CreateAnycastIpList`<sup>Required</sup> <a name="CreateAnycastIpList" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateAnycastIpList"></a>

```typescript
public readonly CreateAnycastIpList: string[];
```

- *Type:* string[]

IAM actions required for the CreateAnycastIpList API call.

---

##### `CreateCachePolicy`<sup>Required</sup> <a name="CreateCachePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateCachePolicy"></a>

```typescript
public readonly CreateCachePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateCachePolicy API call.

---

##### `CreateCloudFrontOriginAccessIdentity`<sup>Required</sup> <a name="CreateCloudFrontOriginAccessIdentity" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateCloudFrontOriginAccessIdentity"></a>

```typescript
public readonly CreateCloudFrontOriginAccessIdentity: string[];
```

- *Type:* string[]

IAM actions required for the CreateCloudFrontOriginAccessIdentity API call.

---

##### `CreateConnectionFunction`<sup>Required</sup> <a name="CreateConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateConnectionFunction"></a>

```typescript
public readonly CreateConnectionFunction: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectionFunction API call.

---

##### `CreateConnectionGroup`<sup>Required</sup> <a name="CreateConnectionGroup" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateConnectionGroup"></a>

```typescript
public readonly CreateConnectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectionGroup API call.

---

##### `CreateContinuousDeploymentPolicy`<sup>Required</sup> <a name="CreateContinuousDeploymentPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateContinuousDeploymentPolicy"></a>

```typescript
public readonly CreateContinuousDeploymentPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateContinuousDeploymentPolicy API call.

---

##### `CreateDistribution`<sup>Required</sup> <a name="CreateDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateDistribution"></a>

```typescript
public readonly CreateDistribution: string[];
```

- *Type:* string[]

IAM actions required for the CreateDistribution API call.

---

##### `CreateDistributionTenant`<sup>Required</sup> <a name="CreateDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateDistributionTenant"></a>

```typescript
public readonly CreateDistributionTenant: string[];
```

- *Type:* string[]

IAM actions required for the CreateDistributionTenant API call.

---

##### `CreateDistributionWithTags`<sup>Required</sup> <a name="CreateDistributionWithTags" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateDistributionWithTags"></a>

```typescript
public readonly CreateDistributionWithTags: string[];
```

- *Type:* string[]

IAM actions required for the CreateDistributionWithTags API call.

---

##### `CreateFieldLevelEncryptionConfig`<sup>Required</sup> <a name="CreateFieldLevelEncryptionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateFieldLevelEncryptionConfig"></a>

```typescript
public readonly CreateFieldLevelEncryptionConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateFieldLevelEncryptionConfig API call.

---

##### `CreateFieldLevelEncryptionProfile`<sup>Required</sup> <a name="CreateFieldLevelEncryptionProfile" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateFieldLevelEncryptionProfile"></a>

```typescript
public readonly CreateFieldLevelEncryptionProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateFieldLevelEncryptionProfile API call.

---

##### `CreateFunction`<sup>Required</sup> <a name="CreateFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateFunction"></a>

```typescript
public readonly CreateFunction: string[];
```

- *Type:* string[]

IAM actions required for the CreateFunction API call.

---

##### `CreateInvalidation`<sup>Required</sup> <a name="CreateInvalidation" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateInvalidation"></a>

```typescript
public readonly CreateInvalidation: string[];
```

- *Type:* string[]

IAM actions required for the CreateInvalidation API call.

---

##### `CreateInvalidationForDistributionTenant`<sup>Required</sup> <a name="CreateInvalidationForDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateInvalidationForDistributionTenant"></a>

```typescript
public readonly CreateInvalidationForDistributionTenant: string[];
```

- *Type:* string[]

IAM actions required for the CreateInvalidationForDistributionTenant API call.

---

##### `CreateKeyGroup`<sup>Required</sup> <a name="CreateKeyGroup" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateKeyGroup"></a>

```typescript
public readonly CreateKeyGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateKeyGroup API call.

---

##### `CreateKeyValueStore`<sup>Required</sup> <a name="CreateKeyValueStore" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateKeyValueStore"></a>

```typescript
public readonly CreateKeyValueStore: string[];
```

- *Type:* string[]

IAM actions required for the CreateKeyValueStore API call.

---

##### `CreateMonitoringSubscription`<sup>Required</sup> <a name="CreateMonitoringSubscription" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateMonitoringSubscription"></a>

```typescript
public readonly CreateMonitoringSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateMonitoringSubscription API call.

---

##### `CreateOriginAccessControl`<sup>Required</sup> <a name="CreateOriginAccessControl" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateOriginAccessControl"></a>

```typescript
public readonly CreateOriginAccessControl: string[];
```

- *Type:* string[]

IAM actions required for the CreateOriginAccessControl API call.

---

##### `CreateOriginRequestPolicy`<sup>Required</sup> <a name="CreateOriginRequestPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateOriginRequestPolicy"></a>

```typescript
public readonly CreateOriginRequestPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateOriginRequestPolicy API call.

---

##### `CreatePublicKey`<sup>Required</sup> <a name="CreatePublicKey" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreatePublicKey"></a>

```typescript
public readonly CreatePublicKey: string[];
```

- *Type:* string[]

IAM actions required for the CreatePublicKey API call.

---

##### `CreateRealtimeLogConfig`<sup>Required</sup> <a name="CreateRealtimeLogConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateRealtimeLogConfig"></a>

```typescript
public readonly CreateRealtimeLogConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateRealtimeLogConfig API call.

---

##### `CreateResponseHeadersPolicy`<sup>Required</sup> <a name="CreateResponseHeadersPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateResponseHeadersPolicy"></a>

```typescript
public readonly CreateResponseHeadersPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateResponseHeadersPolicy API call.

---

##### `CreateStreamingDistribution`<sup>Required</sup> <a name="CreateStreamingDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateStreamingDistribution"></a>

```typescript
public readonly CreateStreamingDistribution: string[];
```

- *Type:* string[]

IAM actions required for the CreateStreamingDistribution API call.

---

##### `CreateStreamingDistributionWithTags`<sup>Required</sup> <a name="CreateStreamingDistributionWithTags" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateStreamingDistributionWithTags"></a>

```typescript
public readonly CreateStreamingDistributionWithTags: string[];
```

- *Type:* string[]

IAM actions required for the CreateStreamingDistributionWithTags API call.

---

##### `CreateTrustStore`<sup>Required</sup> <a name="CreateTrustStore" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateTrustStore"></a>

```typescript
public readonly CreateTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrustStore API call.

---

##### `CreateVpcOrigin`<sup>Required</sup> <a name="CreateVpcOrigin" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.CreateVpcOrigin"></a>

```typescript
public readonly CreateVpcOrigin: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcOrigin API call.

---

##### `DeleteAnycastIpList`<sup>Required</sup> <a name="DeleteAnycastIpList" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteAnycastIpList"></a>

```typescript
public readonly DeleteAnycastIpList: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnycastIpList API call.

---

##### `DeleteCachePolicy`<sup>Required</sup> <a name="DeleteCachePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteCachePolicy"></a>

```typescript
public readonly DeleteCachePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCachePolicy API call.

---

##### `DeleteCloudFrontOriginAccessIdentity`<sup>Required</sup> <a name="DeleteCloudFrontOriginAccessIdentity" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteCloudFrontOriginAccessIdentity"></a>

```typescript
public readonly DeleteCloudFrontOriginAccessIdentity: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCloudFrontOriginAccessIdentity API call.

---

##### `DeleteConnectionFunction`<sup>Required</sup> <a name="DeleteConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteConnectionFunction"></a>

```typescript
public readonly DeleteConnectionFunction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectionFunction API call.

---

##### `DeleteConnectionGroup`<sup>Required</sup> <a name="DeleteConnectionGroup" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteConnectionGroup"></a>

```typescript
public readonly DeleteConnectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectionGroup API call.

---

##### `DeleteContinuousDeploymentPolicy`<sup>Required</sup> <a name="DeleteContinuousDeploymentPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteContinuousDeploymentPolicy"></a>

```typescript
public readonly DeleteContinuousDeploymentPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContinuousDeploymentPolicy API call.

---

##### `DeleteDistribution`<sup>Required</sup> <a name="DeleteDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteDistribution"></a>

```typescript
public readonly DeleteDistribution: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDistribution API call.

---

##### `DeleteDistributionTenant`<sup>Required</sup> <a name="DeleteDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteDistributionTenant"></a>

```typescript
public readonly DeleteDistributionTenant: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDistributionTenant API call.

---

##### `DeleteFieldLevelEncryptionConfig`<sup>Required</sup> <a name="DeleteFieldLevelEncryptionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteFieldLevelEncryptionConfig"></a>

```typescript
public readonly DeleteFieldLevelEncryptionConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFieldLevelEncryptionConfig API call.

---

##### `DeleteFieldLevelEncryptionProfile`<sup>Required</sup> <a name="DeleteFieldLevelEncryptionProfile" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteFieldLevelEncryptionProfile"></a>

```typescript
public readonly DeleteFieldLevelEncryptionProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFieldLevelEncryptionProfile API call.

---

##### `DeleteFunction`<sup>Required</sup> <a name="DeleteFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteFunction"></a>

```typescript
public readonly DeleteFunction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFunction API call.

---

##### `DeleteKeyGroup`<sup>Required</sup> <a name="DeleteKeyGroup" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteKeyGroup"></a>

```typescript
public readonly DeleteKeyGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKeyGroup API call.

---

##### `DeleteKeyValueStore`<sup>Required</sup> <a name="DeleteKeyValueStore" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteKeyValueStore"></a>

```typescript
public readonly DeleteKeyValueStore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKeyValueStore API call.

---

##### `DeleteMonitoringSubscription`<sup>Required</sup> <a name="DeleteMonitoringSubscription" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteMonitoringSubscription"></a>

```typescript
public readonly DeleteMonitoringSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMonitoringSubscription API call.

---

##### `DeleteOriginAccessControl`<sup>Required</sup> <a name="DeleteOriginAccessControl" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteOriginAccessControl"></a>

```typescript
public readonly DeleteOriginAccessControl: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOriginAccessControl API call.

---

##### `DeleteOriginRequestPolicy`<sup>Required</sup> <a name="DeleteOriginRequestPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteOriginRequestPolicy"></a>

```typescript
public readonly DeleteOriginRequestPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOriginRequestPolicy API call.

---

##### `DeletePublicKey`<sup>Required</sup> <a name="DeletePublicKey" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeletePublicKey"></a>

```typescript
public readonly DeletePublicKey: string[];
```

- *Type:* string[]

IAM actions required for the DeletePublicKey API call.

---

##### `DeleteRealtimeLogConfig`<sup>Required</sup> <a name="DeleteRealtimeLogConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteRealtimeLogConfig"></a>

```typescript
public readonly DeleteRealtimeLogConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRealtimeLogConfig API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteResponseHeadersPolicy`<sup>Required</sup> <a name="DeleteResponseHeadersPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteResponseHeadersPolicy"></a>

```typescript
public readonly DeleteResponseHeadersPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResponseHeadersPolicy API call.

---

##### `DeleteServiceLinkedRole`<sup>Required</sup> <a name="DeleteServiceLinkedRole" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteServiceLinkedRole"></a>

```typescript
public readonly DeleteServiceLinkedRole: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceLinkedRole API call.

---

##### `DeleteStreamingDistribution`<sup>Required</sup> <a name="DeleteStreamingDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteStreamingDistribution"></a>

```typescript
public readonly DeleteStreamingDistribution: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStreamingDistribution API call.

---

##### `DeleteTrustStore`<sup>Required</sup> <a name="DeleteTrustStore" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteTrustStore"></a>

```typescript
public readonly DeleteTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrustStore API call.

---

##### `DeleteVpcOrigin`<sup>Required</sup> <a name="DeleteVpcOrigin" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DeleteVpcOrigin"></a>

```typescript
public readonly DeleteVpcOrigin: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVpcOrigin API call.

---

##### `DescribeConnectionFunction`<sup>Required</sup> <a name="DescribeConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DescribeConnectionFunction"></a>

```typescript
public readonly DescribeConnectionFunction: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectionFunction API call.

---

##### `DescribeFunction`<sup>Required</sup> <a name="DescribeFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DescribeFunction"></a>

```typescript
public readonly DescribeFunction: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFunction API call.

---

##### `DescribeKeyValueStore`<sup>Required</sup> <a name="DescribeKeyValueStore" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DescribeKeyValueStore"></a>

```typescript
public readonly DescribeKeyValueStore: string[];
```

- *Type:* string[]

IAM actions required for the DescribeKeyValueStore API call.

---

##### `DisassociateDistributionTenantWebACL`<sup>Required</sup> <a name="DisassociateDistributionTenantWebACL" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DisassociateDistributionTenantWebACL"></a>

```typescript
public readonly DisassociateDistributionTenantWebACL: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDistributionTenantWebACL API call.

---

##### `DisassociateDistributionWebACL`<sup>Required</sup> <a name="DisassociateDistributionWebACL" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.DisassociateDistributionWebACL"></a>

```typescript
public readonly DisassociateDistributionWebACL: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDistributionWebACL API call.

---

##### `ListAnycastIpLists`<sup>Required</sup> <a name="ListAnycastIpLists" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListAnycastIpLists"></a>

```typescript
public readonly ListAnycastIpLists: string[];
```

- *Type:* string[]

IAM actions required for the ListAnycastIpLists API call.

---

##### `ListCachePolicies`<sup>Required</sup> <a name="ListCachePolicies" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListCachePolicies"></a>

```typescript
public readonly ListCachePolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListCachePolicies API call.

---

##### `ListCloudFrontOriginAccessIdentities`<sup>Required</sup> <a name="ListCloudFrontOriginAccessIdentities" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListCloudFrontOriginAccessIdentities"></a>

```typescript
public readonly ListCloudFrontOriginAccessIdentities: string[];
```

- *Type:* string[]

IAM actions required for the ListCloudFrontOriginAccessIdentities API call.

---

##### `ListConflictingAliases`<sup>Required</sup> <a name="ListConflictingAliases" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListConflictingAliases"></a>

```typescript
public readonly ListConflictingAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListConflictingAliases API call.

---

##### `ListConnectionFunctions`<sup>Required</sup> <a name="ListConnectionFunctions" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListConnectionFunctions"></a>

```typescript
public readonly ListConnectionFunctions: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectionFunctions API call.

---

##### `ListConnectionGroups`<sup>Required</sup> <a name="ListConnectionGroups" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListConnectionGroups"></a>

```typescript
public readonly ListConnectionGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectionGroups API call.

---

##### `ListContinuousDeploymentPolicies`<sup>Required</sup> <a name="ListContinuousDeploymentPolicies" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListContinuousDeploymentPolicies"></a>

```typescript
public readonly ListContinuousDeploymentPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListContinuousDeploymentPolicies API call.

---

##### `ListDistributions`<sup>Required</sup> <a name="ListDistributions" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributions"></a>

```typescript
public readonly ListDistributions: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributions API call.

---

##### `ListDistributionsByAnycastIpListId`<sup>Required</sup> <a name="ListDistributionsByAnycastIpListId" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByAnycastIpListId"></a>

```typescript
public readonly ListDistributionsByAnycastIpListId: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByAnycastIpListId API call.

---

##### `ListDistributionsByCachePolicyId`<sup>Required</sup> <a name="ListDistributionsByCachePolicyId" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByCachePolicyId"></a>

```typescript
public readonly ListDistributionsByCachePolicyId: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByCachePolicyId API call.

---

##### `ListDistributionsByConnectionFunction`<sup>Required</sup> <a name="ListDistributionsByConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByConnectionFunction"></a>

```typescript
public readonly ListDistributionsByConnectionFunction: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByConnectionFunction API call.

---

##### `ListDistributionsByConnectionMode`<sup>Required</sup> <a name="ListDistributionsByConnectionMode" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByConnectionMode"></a>

```typescript
public readonly ListDistributionsByConnectionMode: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByConnectionMode API call.

---

##### `ListDistributionsByKeyGroup`<sup>Required</sup> <a name="ListDistributionsByKeyGroup" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByKeyGroup"></a>

```typescript
public readonly ListDistributionsByKeyGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByKeyGroup API call.

---

##### `ListDistributionsByOriginRequestPolicyId`<sup>Required</sup> <a name="ListDistributionsByOriginRequestPolicyId" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByOriginRequestPolicyId"></a>

```typescript
public readonly ListDistributionsByOriginRequestPolicyId: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByOriginRequestPolicyId API call.

---

##### `ListDistributionsByOwnedResource`<sup>Required</sup> <a name="ListDistributionsByOwnedResource" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByOwnedResource"></a>

```typescript
public readonly ListDistributionsByOwnedResource: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByOwnedResource API call.

---

##### `ListDistributionsByRealtimeLogConfig`<sup>Required</sup> <a name="ListDistributionsByRealtimeLogConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByRealtimeLogConfig"></a>

```typescript
public readonly ListDistributionsByRealtimeLogConfig: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByRealtimeLogConfig API call.

---

##### `ListDistributionsByResponseHeadersPolicyId`<sup>Required</sup> <a name="ListDistributionsByResponseHeadersPolicyId" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByResponseHeadersPolicyId"></a>

```typescript
public readonly ListDistributionsByResponseHeadersPolicyId: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByResponseHeadersPolicyId API call.

---

##### `ListDistributionsByTrustStore`<sup>Required</sup> <a name="ListDistributionsByTrustStore" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByTrustStore"></a>

```typescript
public readonly ListDistributionsByTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByTrustStore API call.

---

##### `ListDistributionsByVpcOriginId`<sup>Required</sup> <a name="ListDistributionsByVpcOriginId" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByVpcOriginId"></a>

```typescript
public readonly ListDistributionsByVpcOriginId: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByVpcOriginId API call.

---

##### `ListDistributionsByWebACLId`<sup>Required</sup> <a name="ListDistributionsByWebACLId" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionsByWebACLId"></a>

```typescript
public readonly ListDistributionsByWebACLId: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionsByWebACLId API call.

---

##### `ListDistributionTenants`<sup>Required</sup> <a name="ListDistributionTenants" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionTenants"></a>

```typescript
public readonly ListDistributionTenants: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionTenants API call.

---

##### `ListDistributionTenantsByCustomization`<sup>Required</sup> <a name="ListDistributionTenantsByCustomization" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDistributionTenantsByCustomization"></a>

```typescript
public readonly ListDistributionTenantsByCustomization: string[];
```

- *Type:* string[]

IAM actions required for the ListDistributionTenantsByCustomization API call.

---

##### `ListDomainConflicts`<sup>Required</sup> <a name="ListDomainConflicts" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListDomainConflicts"></a>

```typescript
public readonly ListDomainConflicts: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainConflicts API call.

---

##### `ListFieldLevelEncryptionConfigs`<sup>Required</sup> <a name="ListFieldLevelEncryptionConfigs" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListFieldLevelEncryptionConfigs"></a>

```typescript
public readonly ListFieldLevelEncryptionConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListFieldLevelEncryptionConfigs API call.

---

##### `ListFieldLevelEncryptionProfiles`<sup>Required</sup> <a name="ListFieldLevelEncryptionProfiles" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListFieldLevelEncryptionProfiles"></a>

```typescript
public readonly ListFieldLevelEncryptionProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListFieldLevelEncryptionProfiles API call.

---

##### `ListFunctions`<sup>Required</sup> <a name="ListFunctions" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListFunctions"></a>

```typescript
public readonly ListFunctions: string[];
```

- *Type:* string[]

IAM actions required for the ListFunctions API call.

---

##### `ListInvalidations`<sup>Required</sup> <a name="ListInvalidations" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListInvalidations"></a>

```typescript
public readonly ListInvalidations: string[];
```

- *Type:* string[]

IAM actions required for the ListInvalidations API call.

---

##### `ListInvalidationsForDistributionTenant`<sup>Required</sup> <a name="ListInvalidationsForDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListInvalidationsForDistributionTenant"></a>

```typescript
public readonly ListInvalidationsForDistributionTenant: string[];
```

- *Type:* string[]

IAM actions required for the ListInvalidationsForDistributionTenant API call.

---

##### `ListKeyGroups`<sup>Required</sup> <a name="ListKeyGroups" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListKeyGroups"></a>

```typescript
public readonly ListKeyGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListKeyGroups API call.

---

##### `ListKeyValueStores`<sup>Required</sup> <a name="ListKeyValueStores" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListKeyValueStores"></a>

```typescript
public readonly ListKeyValueStores: string[];
```

- *Type:* string[]

IAM actions required for the ListKeyValueStores API call.

---

##### `ListOriginAccessControls`<sup>Required</sup> <a name="ListOriginAccessControls" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListOriginAccessControls"></a>

```typescript
public readonly ListOriginAccessControls: string[];
```

- *Type:* string[]

IAM actions required for the ListOriginAccessControls API call.

---

##### `ListOriginRequestPolicies`<sup>Required</sup> <a name="ListOriginRequestPolicies" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListOriginRequestPolicies"></a>

```typescript
public readonly ListOriginRequestPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListOriginRequestPolicies API call.

---

##### `ListPublicKeys`<sup>Required</sup> <a name="ListPublicKeys" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListPublicKeys"></a>

```typescript
public readonly ListPublicKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListPublicKeys API call.

---

##### `ListRealtimeLogConfigs`<sup>Required</sup> <a name="ListRealtimeLogConfigs" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListRealtimeLogConfigs"></a>

```typescript
public readonly ListRealtimeLogConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListRealtimeLogConfigs API call.

---

##### `ListResponseHeadersPolicies`<sup>Required</sup> <a name="ListResponseHeadersPolicies" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListResponseHeadersPolicies"></a>

```typescript
public readonly ListResponseHeadersPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListResponseHeadersPolicies API call.

---

##### `ListStreamingDistributions`<sup>Required</sup> <a name="ListStreamingDistributions" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListStreamingDistributions"></a>

```typescript
public readonly ListStreamingDistributions: string[];
```

- *Type:* string[]

IAM actions required for the ListStreamingDistributions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTrustStores`<sup>Required</sup> <a name="ListTrustStores" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListTrustStores"></a>

```typescript
public readonly ListTrustStores: string[];
```

- *Type:* string[]

IAM actions required for the ListTrustStores API call.

---

##### `ListVpcOrigins`<sup>Required</sup> <a name="ListVpcOrigins" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.ListVpcOrigins"></a>

```typescript
public readonly ListVpcOrigins: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcOrigins API call.

---

##### `opGetAnycastIpList`<sup>Required</sup> <a name="opGetAnycastIpList" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetAnycastIpList"></a>

```typescript
public readonly opGetAnycastIpList: string[];
```

- *Type:* string[]

IAM actions required for the GetAnycastIpList API call.

---

##### `opGetCachePolicy`<sup>Required</sup> <a name="opGetCachePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetCachePolicy"></a>

```typescript
public readonly opGetCachePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetCachePolicy API call.

---

##### `opGetCachePolicyConfig`<sup>Required</sup> <a name="opGetCachePolicyConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetCachePolicyConfig"></a>

```typescript
public readonly opGetCachePolicyConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetCachePolicyConfig API call.

---

##### `opGetCloudFrontOriginAccessIdentity`<sup>Required</sup> <a name="opGetCloudFrontOriginAccessIdentity" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetCloudFrontOriginAccessIdentity"></a>

```typescript
public readonly opGetCloudFrontOriginAccessIdentity: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudFrontOriginAccessIdentity API call.

---

##### `opGetCloudFrontOriginAccessIdentityConfig`<sup>Required</sup> <a name="opGetCloudFrontOriginAccessIdentityConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetCloudFrontOriginAccessIdentityConfig"></a>

```typescript
public readonly opGetCloudFrontOriginAccessIdentityConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudFrontOriginAccessIdentityConfig API call.

---

##### `opGetConnectionFunction`<sup>Required</sup> <a name="opGetConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetConnectionFunction"></a>

```typescript
public readonly opGetConnectionFunction: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectionFunction API call.

---

##### `opGetConnectionGroup`<sup>Required</sup> <a name="opGetConnectionGroup" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetConnectionGroup"></a>

```typescript
public readonly opGetConnectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectionGroup API call.

---

##### `opGetConnectionGroupByRoutingEndpoint`<sup>Required</sup> <a name="opGetConnectionGroupByRoutingEndpoint" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetConnectionGroupByRoutingEndpoint"></a>

```typescript
public readonly opGetConnectionGroupByRoutingEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectionGroupByRoutingEndpoint API call.

---

##### `opGetContinuousDeploymentPolicy`<sup>Required</sup> <a name="opGetContinuousDeploymentPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetContinuousDeploymentPolicy"></a>

```typescript
public readonly opGetContinuousDeploymentPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetContinuousDeploymentPolicy API call.

---

##### `opGetContinuousDeploymentPolicyConfig`<sup>Required</sup> <a name="opGetContinuousDeploymentPolicyConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetContinuousDeploymentPolicyConfig"></a>

```typescript
public readonly opGetContinuousDeploymentPolicyConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetContinuousDeploymentPolicyConfig API call.

---

##### `opGetDistribution`<sup>Required</sup> <a name="opGetDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetDistribution"></a>

```typescript
public readonly opGetDistribution: string[];
```

- *Type:* string[]

IAM actions required for the GetDistribution API call.

---

##### `opGetDistributionConfig`<sup>Required</sup> <a name="opGetDistributionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetDistributionConfig"></a>

```typescript
public readonly opGetDistributionConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetDistributionConfig API call.

---

##### `opGetDistributionTenant`<sup>Required</sup> <a name="opGetDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetDistributionTenant"></a>

```typescript
public readonly opGetDistributionTenant: string[];
```

- *Type:* string[]

IAM actions required for the GetDistributionTenant API call.

---

##### `opGetDistributionTenantByDomain`<sup>Required</sup> <a name="opGetDistributionTenantByDomain" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetDistributionTenantByDomain"></a>

```typescript
public readonly opGetDistributionTenantByDomain: string[];
```

- *Type:* string[]

IAM actions required for the GetDistributionTenantByDomain API call.

---

##### `opGetFieldLevelEncryption`<sup>Required</sup> <a name="opGetFieldLevelEncryption" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetFieldLevelEncryption"></a>

```typescript
public readonly opGetFieldLevelEncryption: string[];
```

- *Type:* string[]

IAM actions required for the GetFieldLevelEncryption API call.

---

##### `opGetFieldLevelEncryptionConfig`<sup>Required</sup> <a name="opGetFieldLevelEncryptionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetFieldLevelEncryptionConfig"></a>

```typescript
public readonly opGetFieldLevelEncryptionConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetFieldLevelEncryptionConfig API call.

---

##### `opGetFieldLevelEncryptionProfile`<sup>Required</sup> <a name="opGetFieldLevelEncryptionProfile" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetFieldLevelEncryptionProfile"></a>

```typescript
public readonly opGetFieldLevelEncryptionProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetFieldLevelEncryptionProfile API call.

---

##### `opGetFieldLevelEncryptionProfileConfig`<sup>Required</sup> <a name="opGetFieldLevelEncryptionProfileConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetFieldLevelEncryptionProfileConfig"></a>

```typescript
public readonly opGetFieldLevelEncryptionProfileConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetFieldLevelEncryptionProfileConfig API call.

---

##### `opGetFunction`<sup>Required</sup> <a name="opGetFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetFunction"></a>

```typescript
public readonly opGetFunction: string[];
```

- *Type:* string[]

IAM actions required for the GetFunction API call.

---

##### `opGetInvalidation`<sup>Required</sup> <a name="opGetInvalidation" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetInvalidation"></a>

```typescript
public readonly opGetInvalidation: string[];
```

- *Type:* string[]

IAM actions required for the GetInvalidation API call.

---

##### `opGetInvalidationForDistributionTenant`<sup>Required</sup> <a name="opGetInvalidationForDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetInvalidationForDistributionTenant"></a>

```typescript
public readonly opGetInvalidationForDistributionTenant: string[];
```

- *Type:* string[]

IAM actions required for the GetInvalidationForDistributionTenant API call.

---

##### `opGetKeyGroup`<sup>Required</sup> <a name="opGetKeyGroup" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetKeyGroup"></a>

```typescript
public readonly opGetKeyGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetKeyGroup API call.

---

##### `opGetKeyGroupConfig`<sup>Required</sup> <a name="opGetKeyGroupConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetKeyGroupConfig"></a>

```typescript
public readonly opGetKeyGroupConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetKeyGroupConfig API call.

---

##### `opGetManagedCertificateDetails`<sup>Required</sup> <a name="opGetManagedCertificateDetails" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetManagedCertificateDetails"></a>

```typescript
public readonly opGetManagedCertificateDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedCertificateDetails API call.

---

##### `opGetMonitoringSubscription`<sup>Required</sup> <a name="opGetMonitoringSubscription" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetMonitoringSubscription"></a>

```typescript
public readonly opGetMonitoringSubscription: string[];
```

- *Type:* string[]

IAM actions required for the GetMonitoringSubscription API call.

---

##### `opGetOriginAccessControl`<sup>Required</sup> <a name="opGetOriginAccessControl" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetOriginAccessControl"></a>

```typescript
public readonly opGetOriginAccessControl: string[];
```

- *Type:* string[]

IAM actions required for the GetOriginAccessControl API call.

---

##### `opGetOriginAccessControlConfig`<sup>Required</sup> <a name="opGetOriginAccessControlConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetOriginAccessControlConfig"></a>

```typescript
public readonly opGetOriginAccessControlConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetOriginAccessControlConfig API call.

---

##### `opGetOriginRequestPolicy`<sup>Required</sup> <a name="opGetOriginRequestPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetOriginRequestPolicy"></a>

```typescript
public readonly opGetOriginRequestPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetOriginRequestPolicy API call.

---

##### `opGetOriginRequestPolicyConfig`<sup>Required</sup> <a name="opGetOriginRequestPolicyConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetOriginRequestPolicyConfig"></a>

```typescript
public readonly opGetOriginRequestPolicyConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetOriginRequestPolicyConfig API call.

---

##### `opGetPublicKey`<sup>Required</sup> <a name="opGetPublicKey" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetPublicKey"></a>

```typescript
public readonly opGetPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the GetPublicKey API call.

---

##### `opGetPublicKeyConfig`<sup>Required</sup> <a name="opGetPublicKeyConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetPublicKeyConfig"></a>

```typescript
public readonly opGetPublicKeyConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetPublicKeyConfig API call.

---

##### `opGetRealtimeLogConfig`<sup>Required</sup> <a name="opGetRealtimeLogConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetRealtimeLogConfig"></a>

```typescript
public readonly opGetRealtimeLogConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetRealtimeLogConfig API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetResponseHeadersPolicy`<sup>Required</sup> <a name="opGetResponseHeadersPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetResponseHeadersPolicy"></a>

```typescript
public readonly opGetResponseHeadersPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResponseHeadersPolicy API call.

---

##### `opGetResponseHeadersPolicyConfig`<sup>Required</sup> <a name="opGetResponseHeadersPolicyConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetResponseHeadersPolicyConfig"></a>

```typescript
public readonly opGetResponseHeadersPolicyConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetResponseHeadersPolicyConfig API call.

---

##### `opGetStreamingDistribution`<sup>Required</sup> <a name="opGetStreamingDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetStreamingDistribution"></a>

```typescript
public readonly opGetStreamingDistribution: string[];
```

- *Type:* string[]

IAM actions required for the GetStreamingDistribution API call.

---

##### `opGetStreamingDistributionConfig`<sup>Required</sup> <a name="opGetStreamingDistributionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetStreamingDistributionConfig"></a>

```typescript
public readonly opGetStreamingDistributionConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetStreamingDistributionConfig API call.

---

##### `opGetTrustStore`<sup>Required</sup> <a name="opGetTrustStore" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetTrustStore"></a>

```typescript
public readonly opGetTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the GetTrustStore API call.

---

##### `opGetVpcOrigin`<sup>Required</sup> <a name="opGetVpcOrigin" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.opGetVpcOrigin"></a>

```typescript
public readonly opGetVpcOrigin: string[];
```

- *Type:* string[]

IAM actions required for the GetVpcOrigin API call.

---

##### `PublishConnectionFunction`<sup>Required</sup> <a name="PublishConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.PublishConnectionFunction"></a>

```typescript
public readonly PublishConnectionFunction: string[];
```

- *Type:* string[]

IAM actions required for the PublishConnectionFunction API call.

---

##### `PublishFunction`<sup>Required</sup> <a name="PublishFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.PublishFunction"></a>

```typescript
public readonly PublishFunction: string[];
```

- *Type:* string[]

IAM actions required for the PublishFunction API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestConnectionFunction`<sup>Required</sup> <a name="TestConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.TestConnectionFunction"></a>

```typescript
public readonly TestConnectionFunction: string[];
```

- *Type:* string[]

IAM actions required for the TestConnectionFunction API call.

---

##### `TestFunction`<sup>Required</sup> <a name="TestFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.TestFunction"></a>

```typescript
public readonly TestFunction: string[];
```

- *Type:* string[]

IAM actions required for the TestFunction API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAnycastIpList`<sup>Required</sup> <a name="UpdateAnycastIpList" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateAnycastIpList"></a>

```typescript
public readonly UpdateAnycastIpList: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAnycastIpList API call.

---

##### `UpdateCachePolicy`<sup>Required</sup> <a name="UpdateCachePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateCachePolicy"></a>

```typescript
public readonly UpdateCachePolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCachePolicy API call.

---

##### `UpdateCloudFrontOriginAccessIdentity`<sup>Required</sup> <a name="UpdateCloudFrontOriginAccessIdentity" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateCloudFrontOriginAccessIdentity"></a>

```typescript
public readonly UpdateCloudFrontOriginAccessIdentity: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCloudFrontOriginAccessIdentity API call.

---

##### `UpdateConnectionFunction`<sup>Required</sup> <a name="UpdateConnectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateConnectionFunction"></a>

```typescript
public readonly UpdateConnectionFunction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectionFunction API call.

---

##### `UpdateConnectionGroup`<sup>Required</sup> <a name="UpdateConnectionGroup" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateConnectionGroup"></a>

```typescript
public readonly UpdateConnectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectionGroup API call.

---

##### `UpdateContinuousDeploymentPolicy`<sup>Required</sup> <a name="UpdateContinuousDeploymentPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateContinuousDeploymentPolicy"></a>

```typescript
public readonly UpdateContinuousDeploymentPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContinuousDeploymentPolicy API call.

---

##### `UpdateDistribution`<sup>Required</sup> <a name="UpdateDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateDistribution"></a>

```typescript
public readonly UpdateDistribution: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDistribution API call.

---

##### `UpdateDistributionTenant`<sup>Required</sup> <a name="UpdateDistributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateDistributionTenant"></a>

```typescript
public readonly UpdateDistributionTenant: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDistributionTenant API call.

---

##### `UpdateDistributionWithStagingConfig`<sup>Required</sup> <a name="UpdateDistributionWithStagingConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateDistributionWithStagingConfig"></a>

```typescript
public readonly UpdateDistributionWithStagingConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDistributionWithStagingConfig API call.

---

##### `UpdateDomainAssociation`<sup>Required</sup> <a name="UpdateDomainAssociation" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateDomainAssociation"></a>

```typescript
public readonly UpdateDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainAssociation API call.

---

##### `UpdateFieldLevelEncryptionConfig`<sup>Required</sup> <a name="UpdateFieldLevelEncryptionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateFieldLevelEncryptionConfig"></a>

```typescript
public readonly UpdateFieldLevelEncryptionConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFieldLevelEncryptionConfig API call.

---

##### `UpdateFieldLevelEncryptionProfile`<sup>Required</sup> <a name="UpdateFieldLevelEncryptionProfile" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateFieldLevelEncryptionProfile"></a>

```typescript
public readonly UpdateFieldLevelEncryptionProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFieldLevelEncryptionProfile API call.

---

##### `UpdateFunction`<sup>Required</sup> <a name="UpdateFunction" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateFunction"></a>

```typescript
public readonly UpdateFunction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFunction API call.

---

##### `UpdateKeyGroup`<sup>Required</sup> <a name="UpdateKeyGroup" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateKeyGroup"></a>

```typescript
public readonly UpdateKeyGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKeyGroup API call.

---

##### `UpdateKeyValueStore`<sup>Required</sup> <a name="UpdateKeyValueStore" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateKeyValueStore"></a>

```typescript
public readonly UpdateKeyValueStore: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKeyValueStore API call.

---

##### `UpdateOriginAccessControl`<sup>Required</sup> <a name="UpdateOriginAccessControl" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateOriginAccessControl"></a>

```typescript
public readonly UpdateOriginAccessControl: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOriginAccessControl API call.

---

##### `UpdateOriginRequestPolicy`<sup>Required</sup> <a name="UpdateOriginRequestPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateOriginRequestPolicy"></a>

```typescript
public readonly UpdateOriginRequestPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOriginRequestPolicy API call.

---

##### `UpdatePublicKey`<sup>Required</sup> <a name="UpdatePublicKey" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdatePublicKey"></a>

```typescript
public readonly UpdatePublicKey: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePublicKey API call.

---

##### `UpdateRealtimeLogConfig`<sup>Required</sup> <a name="UpdateRealtimeLogConfig" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateRealtimeLogConfig"></a>

```typescript
public readonly UpdateRealtimeLogConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRealtimeLogConfig API call.

---

##### `UpdateResponseHeadersPolicy`<sup>Required</sup> <a name="UpdateResponseHeadersPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateResponseHeadersPolicy"></a>

```typescript
public readonly UpdateResponseHeadersPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResponseHeadersPolicy API call.

---

##### `UpdateStreamingDistribution`<sup>Required</sup> <a name="UpdateStreamingDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateStreamingDistribution"></a>

```typescript
public readonly UpdateStreamingDistribution: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStreamingDistribution API call.

---

##### `UpdateTrustStore`<sup>Required</sup> <a name="UpdateTrustStore" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateTrustStore"></a>

```typescript
public readonly UpdateTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrustStore API call.

---

##### `UpdateVpcOrigin`<sup>Required</sup> <a name="UpdateVpcOrigin" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.UpdateVpcOrigin"></a>

```typescript
public readonly UpdateVpcOrigin: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVpcOrigin API call.

---

##### `VerifyDnsConfiguration`<sup>Required</sup> <a name="VerifyDnsConfiguration" id="@cdk_utils/iam.cloudfront.CloudFrontOperations.property.VerifyDnsConfiguration"></a>

```typescript
public readonly VerifyDnsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the VerifyDnsConfiguration API call.

---

### CloudFrontResources <a name="CloudFrontResources" id="@cdk_utils/iam.cloudfront.CloudFrontResources"></a>

ARN builders, validators, and parsers for cloudfront resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudfront.CloudFrontResources.Initializer"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

new cloudfront.CloudFrontResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.anycastIPList">anycastIPList</a></code> | Builds an ARN for the anycast-ip-list resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.cachePolicy">cachePolicy</a></code> | Builds an ARN for the cache-policy resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.connectionFunction">connectionFunction</a></code> | Builds an ARN for the connection-function resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.connectionGroup">connectionGroup</a></code> | Builds an ARN for the connection-group resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.continuousDeploymentPolicy">continuousDeploymentPolicy</a></code> | Builds an ARN for the continuous-deployment-policy resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.distribution">distribution</a></code> | Builds an ARN for the distribution resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.distributionTenant">distributionTenant</a></code> | Builds an ARN for the distribution-tenant resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.fieldLevelEncryptionConfig">fieldLevelEncryptionConfig</a></code> | Builds an ARN for the field-level-encryption-config resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.fieldLevelEncryptionProfile">fieldLevelEncryptionProfile</a></code> | Builds an ARN for the field-level-encryption-profile resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.function">function</a></code> | Builds an ARN for the function resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidAnycastIPListArn">isValidAnycastIPListArn</a></code> | Validates whether a string is a valid ARN for the anycast-ip-list resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidCachePolicyArn">isValidCachePolicyArn</a></code> | Validates whether a string is a valid ARN for the cache-policy resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidConnectionFunctionArn">isValidConnectionFunctionArn</a></code> | Validates whether a string is a valid ARN for the connection-function resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidConnectionGroupArn">isValidConnectionGroupArn</a></code> | Validates whether a string is a valid ARN for the connection-group resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidContinuousDeploymentPolicyArn">isValidContinuousDeploymentPolicyArn</a></code> | Validates whether a string is a valid ARN for the continuous-deployment-policy resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidDistributionArn">isValidDistributionArn</a></code> | Validates whether a string is a valid ARN for the distribution resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidDistributionTenantArn">isValidDistributionTenantArn</a></code> | Validates whether a string is a valid ARN for the distribution-tenant resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidFieldLevelEncryptionConfigArn">isValidFieldLevelEncryptionConfigArn</a></code> | Validates whether a string is a valid ARN for the field-level-encryption-config resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidFieldLevelEncryptionProfileArn">isValidFieldLevelEncryptionProfileArn</a></code> | Validates whether a string is a valid ARN for the field-level-encryption-profile resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidFunctionArn">isValidFunctionArn</a></code> | Validates whether a string is a valid ARN for the function resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidKeyValueStoreArn">isValidKeyValueStoreArn</a></code> | Validates whether a string is a valid ARN for the key-value-store resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidOriginAccessControlArn">isValidOriginAccessControlArn</a></code> | Validates whether a string is a valid ARN for the origin-access-control resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidOriginAccessIdentityArn">isValidOriginAccessIdentityArn</a></code> | Validates whether a string is a valid ARN for the origin-access-identity resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidOriginRequestPolicyArn">isValidOriginRequestPolicyArn</a></code> | Validates whether a string is a valid ARN for the origin-request-policy resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidRealtimeLogConfigArn">isValidRealtimeLogConfigArn</a></code> | Validates whether a string is a valid ARN for the realtime-log-config resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidResponseHeadersPolicyArn">isValidResponseHeadersPolicyArn</a></code> | Validates whether a string is a valid ARN for the response-headers-policy resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidStreamingDistributionArn">isValidStreamingDistributionArn</a></code> | Validates whether a string is a valid ARN for the streaming-distribution resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidTrustStoreArn">isValidTrustStoreArn</a></code> | Validates whether a string is a valid ARN for the trust-store resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.isValidVpcoriginArn">isValidVpcoriginArn</a></code> | Validates whether a string is a valid ARN for the vpcorigin resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.keyValueStore">keyValueStore</a></code> | Builds an ARN for the key-value-store resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.originAccessControl">originAccessControl</a></code> | Builds an ARN for the origin-access-control resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.originAccessIdentity">originAccessIdentity</a></code> | Builds an ARN for the origin-access-identity resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.originRequestPolicy">originRequestPolicy</a></code> | Builds an ARN for the origin-request-policy resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseAnycastIPListArn">parseAnycastIPListArn</a></code> | Parses a anycast-ip-list ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseCachePolicyArn">parseCachePolicyArn</a></code> | Parses a cache-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseConnectionFunctionArn">parseConnectionFunctionArn</a></code> | Parses a connection-function ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseConnectionGroupArn">parseConnectionGroupArn</a></code> | Parses a connection-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseContinuousDeploymentPolicyArn">parseContinuousDeploymentPolicyArn</a></code> | Parses a continuous-deployment-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseDistributionArn">parseDistributionArn</a></code> | Parses a distribution ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseDistributionTenantArn">parseDistributionTenantArn</a></code> | Parses a distribution-tenant ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseFieldLevelEncryptionConfigArn">parseFieldLevelEncryptionConfigArn</a></code> | Parses a field-level-encryption-config ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseFieldLevelEncryptionProfileArn">parseFieldLevelEncryptionProfileArn</a></code> | Parses a field-level-encryption-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseFunctionArn">parseFunctionArn</a></code> | Parses a function ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseKeyValueStoreArn">parseKeyValueStoreArn</a></code> | Parses a key-value-store ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseOriginAccessControlArn">parseOriginAccessControlArn</a></code> | Parses a origin-access-control ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseOriginAccessIdentityArn">parseOriginAccessIdentityArn</a></code> | Parses a origin-access-identity ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseOriginRequestPolicyArn">parseOriginRequestPolicyArn</a></code> | Parses a origin-request-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseRealtimeLogConfigArn">parseRealtimeLogConfigArn</a></code> | Parses a realtime-log-config ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseResponseHeadersPolicyArn">parseResponseHeadersPolicyArn</a></code> | Parses a response-headers-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseStreamingDistributionArn">parseStreamingDistributionArn</a></code> | Parses a streaming-distribution ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseTrustStoreArn">parseTrustStoreArn</a></code> | Parses a trust-store ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.parseVpcoriginArn">parseVpcoriginArn</a></code> | Parses a vpcorigin ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.realtimeLogConfig">realtimeLogConfig</a></code> | Builds an ARN for the realtime-log-config resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.responseHeadersPolicy">responseHeadersPolicy</a></code> | Builds an ARN for the response-headers-policy resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.streamingDistribution">streamingDistribution</a></code> | Builds an ARN for the streaming-distribution resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.trustStore">trustStore</a></code> | Builds an ARN for the trust-store resource. |
| <code><a href="#@cdk_utils/iam.cloudfront.CloudFrontResources.vpcorigin">vpcorigin</a></code> | Builds an ARN for the vpcorigin resource. |

---

##### `anycastIPList` <a name="anycastIPList" id="@cdk_utils/iam.cloudfront.CloudFrontResources.anycastIPList"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.anycastIPList(props: CloudFrontAnycastIPListArnProps)
```

Builds an ARN for the anycast-ip-list resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.anycastIPList.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontAnycastIPListArnProps">CloudFrontAnycastIPListArnProps</a>

---

##### `cachePolicy` <a name="cachePolicy" id="@cdk_utils/iam.cloudfront.CloudFrontResources.cachePolicy"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.cachePolicy(props: CloudFrontCachePolicyArnProps)
```

Builds an ARN for the cache-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.cachePolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontCachePolicyArnProps">CloudFrontCachePolicyArnProps</a>

---

##### `connectionFunction` <a name="connectionFunction" id="@cdk_utils/iam.cloudfront.CloudFrontResources.connectionFunction"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.connectionFunction(props: CloudFrontConnectionFunctionArnProps)
```

Builds an ARN for the connection-function resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.connectionFunction.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionFunctionArnProps">CloudFrontConnectionFunctionArnProps</a>

---

##### `connectionGroup` <a name="connectionGroup" id="@cdk_utils/iam.cloudfront.CloudFrontResources.connectionGroup"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.connectionGroup(props: CloudFrontConnectionGroupArnProps)
```

Builds an ARN for the connection-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.connectionGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontConnectionGroupArnProps">CloudFrontConnectionGroupArnProps</a>

---

##### `continuousDeploymentPolicy` <a name="continuousDeploymentPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontResources.continuousDeploymentPolicy"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.continuousDeploymentPolicy(props: CloudFrontContinuousDeploymentPolicyArnProps)
```

Builds an ARN for the continuous-deployment-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.continuousDeploymentPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontContinuousDeploymentPolicyArnProps">CloudFrontContinuousDeploymentPolicyArnProps</a>

---

##### `distribution` <a name="distribution" id="@cdk_utils/iam.cloudfront.CloudFrontResources.distribution"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.distribution(props: CloudFrontDistributionArnProps)
```

Builds an ARN for the distribution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.distribution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionArnProps">CloudFrontDistributionArnProps</a>

---

##### `distributionTenant` <a name="distributionTenant" id="@cdk_utils/iam.cloudfront.CloudFrontResources.distributionTenant"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.distributionTenant(props: CloudFrontDistributionTenantArnProps)
```

Builds an ARN for the distribution-tenant resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.distributionTenant.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontDistributionTenantArnProps">CloudFrontDistributionTenantArnProps</a>

---

##### `fieldLevelEncryptionConfig` <a name="fieldLevelEncryptionConfig" id="@cdk_utils/iam.cloudfront.CloudFrontResources.fieldLevelEncryptionConfig"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.fieldLevelEncryptionConfig(props: CloudFrontFieldLevelEncryptionConfigArnProps)
```

Builds an ARN for the field-level-encryption-config resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.fieldLevelEncryptionConfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionConfigArnProps">CloudFrontFieldLevelEncryptionConfigArnProps</a>

---

##### `fieldLevelEncryptionProfile` <a name="fieldLevelEncryptionProfile" id="@cdk_utils/iam.cloudfront.CloudFrontResources.fieldLevelEncryptionProfile"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.fieldLevelEncryptionProfile(props: CloudFrontFieldLevelEncryptionProfileArnProps)
```

Builds an ARN for the field-level-encryption-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.fieldLevelEncryptionProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontFieldLevelEncryptionProfileArnProps">CloudFrontFieldLevelEncryptionProfileArnProps</a>

---

##### `function` <a name="function" id="@cdk_utils/iam.cloudfront.CloudFrontResources.function"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.function(props: CloudFrontFunctionArnProps)
```

Builds an ARN for the function resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.function.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontFunctionArnProps">CloudFrontFunctionArnProps</a>

---

##### `isValidAnycastIPListArn` <a name="isValidAnycastIPListArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidAnycastIPListArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidAnycastIPListArn(arn: string)
```

Validates whether a string is a valid ARN for the anycast-ip-list resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidAnycastIPListArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCachePolicyArn` <a name="isValidCachePolicyArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidCachePolicyArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidCachePolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the cache-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidCachePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionFunctionArn` <a name="isValidConnectionFunctionArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidConnectionFunctionArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidConnectionFunctionArn(arn: string)
```

Validates whether a string is a valid ARN for the connection-function resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidConnectionFunctionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionGroupArn` <a name="isValidConnectionGroupArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidConnectionGroupArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidConnectionGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the connection-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidConnectionGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContinuousDeploymentPolicyArn` <a name="isValidContinuousDeploymentPolicyArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidContinuousDeploymentPolicyArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidContinuousDeploymentPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the continuous-deployment-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidContinuousDeploymentPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDistributionArn` <a name="isValidDistributionArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidDistributionArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidDistributionArn(arn: string)
```

Validates whether a string is a valid ARN for the distribution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidDistributionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDistributionTenantArn` <a name="isValidDistributionTenantArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidDistributionTenantArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidDistributionTenantArn(arn: string)
```

Validates whether a string is a valid ARN for the distribution-tenant resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidDistributionTenantArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFieldLevelEncryptionConfigArn` <a name="isValidFieldLevelEncryptionConfigArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidFieldLevelEncryptionConfigArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidFieldLevelEncryptionConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the field-level-encryption-config resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidFieldLevelEncryptionConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFieldLevelEncryptionProfileArn` <a name="isValidFieldLevelEncryptionProfileArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidFieldLevelEncryptionProfileArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidFieldLevelEncryptionProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the field-level-encryption-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidFieldLevelEncryptionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFunctionArn` <a name="isValidFunctionArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidFunctionArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidFunctionArn(arn: string)
```

Validates whether a string is a valid ARN for the function resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidFunctionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKeyValueStoreArn` <a name="isValidKeyValueStoreArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidKeyValueStoreArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidKeyValueStoreArn(arn: string)
```

Validates whether a string is a valid ARN for the key-value-store resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidKeyValueStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOriginAccessControlArn` <a name="isValidOriginAccessControlArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidOriginAccessControlArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidOriginAccessControlArn(arn: string)
```

Validates whether a string is a valid ARN for the origin-access-control resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidOriginAccessControlArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOriginAccessIdentityArn` <a name="isValidOriginAccessIdentityArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidOriginAccessIdentityArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidOriginAccessIdentityArn(arn: string)
```

Validates whether a string is a valid ARN for the origin-access-identity resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidOriginAccessIdentityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOriginRequestPolicyArn` <a name="isValidOriginRequestPolicyArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidOriginRequestPolicyArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidOriginRequestPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the origin-request-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidOriginRequestPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRealtimeLogConfigArn` <a name="isValidRealtimeLogConfigArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidRealtimeLogConfigArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidRealtimeLogConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the realtime-log-config resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidRealtimeLogConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResponseHeadersPolicyArn` <a name="isValidResponseHeadersPolicyArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidResponseHeadersPolicyArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidResponseHeadersPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the response-headers-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidResponseHeadersPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamingDistributionArn` <a name="isValidStreamingDistributionArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidStreamingDistributionArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidStreamingDistributionArn(arn: string)
```

Validates whether a string is a valid ARN for the streaming-distribution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidStreamingDistributionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTrustStoreArn` <a name="isValidTrustStoreArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidTrustStoreArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidTrustStoreArn(arn: string)
```

Validates whether a string is a valid ARN for the trust-store resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidTrustStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVpcoriginArn` <a name="isValidVpcoriginArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidVpcoriginArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.isValidVpcoriginArn(arn: string)
```

Validates whether a string is a valid ARN for the vpcorigin resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.isValidVpcoriginArn.parameter.arn"></a>

- *Type:* string

---

##### `keyValueStore` <a name="keyValueStore" id="@cdk_utils/iam.cloudfront.CloudFrontResources.keyValueStore"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.keyValueStore(props: CloudFrontKeyValueStoreArnProps)
```

Builds an ARN for the key-value-store resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.keyValueStore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontKeyValueStoreArnProps">CloudFrontKeyValueStoreArnProps</a>

---

##### `originAccessControl` <a name="originAccessControl" id="@cdk_utils/iam.cloudfront.CloudFrontResources.originAccessControl"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.originAccessControl(props: CloudFrontOriginAccessControlArnProps)
```

Builds an ARN for the origin-access-control resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.originAccessControl.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessControlArnProps">CloudFrontOriginAccessControlArnProps</a>

---

##### `originAccessIdentity` <a name="originAccessIdentity" id="@cdk_utils/iam.cloudfront.CloudFrontResources.originAccessIdentity"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.originAccessIdentity(props: CloudFrontOriginAccessIdentityArnProps)
```

Builds an ARN for the origin-access-identity resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.originAccessIdentity.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginAccessIdentityArnProps">CloudFrontOriginAccessIdentityArnProps</a>

---

##### `originRequestPolicy` <a name="originRequestPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontResources.originRequestPolicy"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.originRequestPolicy(props: CloudFrontOriginRequestPolicyArnProps)
```

Builds an ARN for the origin-request-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.originRequestPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontOriginRequestPolicyArnProps">CloudFrontOriginRequestPolicyArnProps</a>

---

##### `parseAnycastIPListArn` <a name="parseAnycastIPListArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseAnycastIPListArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseAnycastIPListArn(arn: string)
```

Parses a anycast-ip-list ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseAnycastIPListArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCachePolicyArn` <a name="parseCachePolicyArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseCachePolicyArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseCachePolicyArn(arn: string)
```

Parses a cache-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseCachePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionFunctionArn` <a name="parseConnectionFunctionArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseConnectionFunctionArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseConnectionFunctionArn(arn: string)
```

Parses a connection-function ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseConnectionFunctionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionGroupArn` <a name="parseConnectionGroupArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseConnectionGroupArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseConnectionGroupArn(arn: string)
```

Parses a connection-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseConnectionGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContinuousDeploymentPolicyArn` <a name="parseContinuousDeploymentPolicyArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseContinuousDeploymentPolicyArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseContinuousDeploymentPolicyArn(arn: string)
```

Parses a continuous-deployment-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseContinuousDeploymentPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDistributionArn` <a name="parseDistributionArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseDistributionArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseDistributionArn(arn: string)
```

Parses a distribution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseDistributionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDistributionTenantArn` <a name="parseDistributionTenantArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseDistributionTenantArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseDistributionTenantArn(arn: string)
```

Parses a distribution-tenant ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseDistributionTenantArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFieldLevelEncryptionConfigArn` <a name="parseFieldLevelEncryptionConfigArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseFieldLevelEncryptionConfigArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseFieldLevelEncryptionConfigArn(arn: string)
```

Parses a field-level-encryption-config ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseFieldLevelEncryptionConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFieldLevelEncryptionProfileArn` <a name="parseFieldLevelEncryptionProfileArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseFieldLevelEncryptionProfileArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseFieldLevelEncryptionProfileArn(arn: string)
```

Parses a field-level-encryption-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseFieldLevelEncryptionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFunctionArn` <a name="parseFunctionArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseFunctionArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseFunctionArn(arn: string)
```

Parses a function ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseFunctionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKeyValueStoreArn` <a name="parseKeyValueStoreArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseKeyValueStoreArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseKeyValueStoreArn(arn: string)
```

Parses a key-value-store ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseKeyValueStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOriginAccessControlArn` <a name="parseOriginAccessControlArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseOriginAccessControlArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseOriginAccessControlArn(arn: string)
```

Parses a origin-access-control ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseOriginAccessControlArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOriginAccessIdentityArn` <a name="parseOriginAccessIdentityArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseOriginAccessIdentityArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseOriginAccessIdentityArn(arn: string)
```

Parses a origin-access-identity ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseOriginAccessIdentityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOriginRequestPolicyArn` <a name="parseOriginRequestPolicyArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseOriginRequestPolicyArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseOriginRequestPolicyArn(arn: string)
```

Parses a origin-request-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseOriginRequestPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRealtimeLogConfigArn` <a name="parseRealtimeLogConfigArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseRealtimeLogConfigArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseRealtimeLogConfigArn(arn: string)
```

Parses a realtime-log-config ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseRealtimeLogConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResponseHeadersPolicyArn` <a name="parseResponseHeadersPolicyArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseResponseHeadersPolicyArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseResponseHeadersPolicyArn(arn: string)
```

Parses a response-headers-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseResponseHeadersPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamingDistributionArn` <a name="parseStreamingDistributionArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseStreamingDistributionArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseStreamingDistributionArn(arn: string)
```

Parses a streaming-distribution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseStreamingDistributionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTrustStoreArn` <a name="parseTrustStoreArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseTrustStoreArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseTrustStoreArn(arn: string)
```

Parses a trust-store ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseTrustStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVpcoriginArn` <a name="parseVpcoriginArn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseVpcoriginArn"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.parseVpcoriginArn(arn: string)
```

Parses a vpcorigin ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudfront.CloudFrontResources.parseVpcoriginArn.parameter.arn"></a>

- *Type:* string

---

##### `realtimeLogConfig` <a name="realtimeLogConfig" id="@cdk_utils/iam.cloudfront.CloudFrontResources.realtimeLogConfig"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.realtimeLogConfig(props: CloudFrontRealtimeLogConfigArnProps)
```

Builds an ARN for the realtime-log-config resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.realtimeLogConfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontRealtimeLogConfigArnProps">CloudFrontRealtimeLogConfigArnProps</a>

---

##### `responseHeadersPolicy` <a name="responseHeadersPolicy" id="@cdk_utils/iam.cloudfront.CloudFrontResources.responseHeadersPolicy"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.responseHeadersPolicy(props: CloudFrontResponseHeadersPolicyArnProps)
```

Builds an ARN for the response-headers-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.responseHeadersPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontResponseHeadersPolicyArnProps">CloudFrontResponseHeadersPolicyArnProps</a>

---

##### `streamingDistribution` <a name="streamingDistribution" id="@cdk_utils/iam.cloudfront.CloudFrontResources.streamingDistribution"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.streamingDistribution(props: CloudFrontStreamingDistributionArnProps)
```

Builds an ARN for the streaming-distribution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.streamingDistribution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontStreamingDistributionArnProps">CloudFrontStreamingDistributionArnProps</a>

---

##### `trustStore` <a name="trustStore" id="@cdk_utils/iam.cloudfront.CloudFrontResources.trustStore"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.trustStore(props: CloudFrontTrustStoreArnProps)
```

Builds an ARN for the trust-store resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.trustStore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontTrustStoreArnProps">CloudFrontTrustStoreArnProps</a>

---

##### `vpcorigin` <a name="vpcorigin" id="@cdk_utils/iam.cloudfront.CloudFrontResources.vpcorigin"></a>

```typescript
import { cloudfront } from '@cdk_utils/iam'

cloudfront.CloudFrontResources.vpcorigin(props: CloudFrontVpcoriginArnProps)
```

Builds an ARN for the vpcorigin resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudfront.CloudFrontResources.vpcorigin.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudfront.CloudFrontVpcoriginArnProps">CloudFrontVpcoriginArnProps</a>

---




