# `amplifygen3` Submodule <a name="`amplifygen3` Submodule" id="@cdk_utils/iam.amplifygen3"></a>


## Structs <a name="Structs" id="Structs"></a>

### Amplifygen3AliasArnComponents <a name="Amplifygen3AliasArnComponents" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents"></a>

Parsed components of a Alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3AliasArnComponents: amplifygen3.Amplifygen3AliasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.aliasName">aliasName</a></code> | <code>string</code> | The AliasName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.appName">appName</a></code> | <code>string</code> | The AppName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

The AliasName component.

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Amplifygen3AliasArnProps <a name="Amplifygen3AliasArnProps" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps"></a>

Properties for building a Alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3AliasArnProps: amplifygen3.Amplifygen3AliasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.aliasName">aliasName</a></code> | <code>string</code> | The AliasName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.appName">appName</a></code> | <code>string</code> | The AppName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

The AliasName component of the ARN.

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component of the ARN.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Amplifygen3AppArnComponents <a name="Amplifygen3AppArnComponents" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnComponents"></a>

Parsed components of a App ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnComponents.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3AppArnComponents: amplifygen3.Amplifygen3AppArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AppArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AppArnComponents.property.appName">appName</a></code> | <code>string</code> | The AppName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AppArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AppArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnComponents.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Amplifygen3AppArnProps <a name="Amplifygen3AppArnProps" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnProps"></a>

Properties for building a App ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnProps.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3AppArnProps: amplifygen3.Amplifygen3AppArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AppArnProps.property.appName">appName</a></code> | <code>string</code> | The AppName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AppArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AppArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AppArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnProps.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3AppArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Amplifygen3BranchArnComponents <a name="Amplifygen3BranchArnComponents" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents"></a>

Parsed components of a Branch ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3BranchArnComponents: amplifygen3.Amplifygen3BranchArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.appName">appName</a></code> | <code>string</code> | The AppName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.branchName">branchName</a></code> | <code>string</code> | The BranchName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

The BranchName component.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Amplifygen3BranchArnProps <a name="Amplifygen3BranchArnProps" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps"></a>

Properties for building a Branch ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3BranchArnProps: amplifygen3.Amplifygen3BranchArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.appName">appName</a></code> | <code>string</code> | The AppName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.branchName">branchName</a></code> | <code>string</code> | The BranchName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component of the ARN.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

The BranchName component of the ARN.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Amplifygen3DeploymentArnComponents <a name="Amplifygen3DeploymentArnComponents" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents"></a>

Parsed components of a Deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3DeploymentArnComponents: amplifygen3.Amplifygen3DeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.appName">appName</a></code> | <code>string</code> | The AppName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Amplifygen3DeploymentArnProps <a name="Amplifygen3DeploymentArnProps" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps"></a>

Properties for building a Deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3DeploymentArnProps: amplifygen3.Amplifygen3DeploymentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.appName">appName</a></code> | <code>string</code> | The AppName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component of the ARN.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component of the ARN.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Amplifygen3DomainAssociationArnComponents <a name="Amplifygen3DomainAssociationArnComponents" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents"></a>

Parsed components of a DomainAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3DomainAssociationArnComponents: amplifygen3.Amplifygen3DomainAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents.property.appName">appName</a></code> | <code>string</code> | The AppName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Amplifygen3DomainAssociationArnProps <a name="Amplifygen3DomainAssociationArnProps" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps"></a>

Properties for building a DomainAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3DomainAssociationArnProps: amplifygen3.Amplifygen3DomainAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps.property.appName">appName</a></code> | <code>string</code> | The AppName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component of the ARN.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Amplifygen3EnvironmentArnComponents <a name="Amplifygen3EnvironmentArnComponents" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents"></a>

Parsed components of a Environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3EnvironmentArnComponents: amplifygen3.Amplifygen3EnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents.property.appName">appName</a></code> | <code>string</code> | The AppName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Amplifygen3EnvironmentArnProps <a name="Amplifygen3EnvironmentArnProps" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps"></a>

Properties for building a Environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3EnvironmentArnProps: amplifygen3.Amplifygen3EnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps.property.appName">appName</a></code> | <code>string</code> | The AppName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

The AppName component of the ARN.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Amplifygen3IntegrationConfigurationArnComponents <a name="Amplifygen3IntegrationConfigurationArnComponents" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnComponents"></a>

Parsed components of a IntegrationConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnComponents.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3IntegrationConfigurationArnComponents: amplifygen3.Amplifygen3IntegrationConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnComponents.property.integrationName">integrationName</a></code> | <code>string</code> | The IntegrationName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnComponents.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

The IntegrationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Amplifygen3IntegrationConfigurationArnProps <a name="Amplifygen3IntegrationConfigurationArnProps" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnProps"></a>

Properties for building a IntegrationConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnProps.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3IntegrationConfigurationArnProps: amplifygen3.Amplifygen3IntegrationConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnProps.property.integrationName">integrationName</a></code> | <code>string</code> | The IntegrationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnProps.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

The IntegrationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Amplifygen3NetworkConnectorArnComponents <a name="Amplifygen3NetworkConnectorArnComponents" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnComponents"></a>

Parsed components of a NetworkConnector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnComponents.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3NetworkConnectorArnComponents: amplifygen3.Amplifygen3NetworkConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnComponents.property.networkConnectorName">networkConnectorName</a></code> | <code>string</code> | The NetworkConnectorName component. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkConnectorName`<sup>Required</sup> <a name="networkConnectorName" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnComponents.property.networkConnectorName"></a>

```typescript
public readonly networkConnectorName: string;
```

- *Type:* string

The NetworkConnectorName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Amplifygen3NetworkConnectorArnProps <a name="Amplifygen3NetworkConnectorArnProps" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnProps"></a>

Properties for building a NetworkConnector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnProps.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

const amplifygen3NetworkConnectorArnProps: amplifygen3.Amplifygen3NetworkConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnProps.property.networkConnectorName">networkConnectorName</a></code> | <code>string</code> | The NetworkConnectorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkConnectorName`<sup>Required</sup> <a name="networkConnectorName" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnProps.property.networkConnectorName"></a>

```typescript
public readonly networkConnectorName: string;
```

- *Type:* string

The NetworkConnectorName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### Amplifygen3Actions <a name="Amplifygen3Actions" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions"></a>

IAM action constants for the amplifygen3 service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

new amplifygen3.Amplifygen3Actions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AcceptForkPullRequestDeployment">AcceptForkPullRequestDeployment</a></code> | <code>string</code> | [Write] amplifygen3:AcceptForkPullRequestDeployment. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetAccessControl">actionGetAccessControl</a></code> | <code>string</code> | [Read] amplifygen3:GetAccessControl. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetAlias">actionGetAlias</a></code> | <code>string</code> | [Read] amplifygen3:GetAlias. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetApiKey">actionGetApiKey</a></code> | <code>string</code> | [Read] amplifygen3:GetApiKey. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetApp">actionGetApp</a></code> | <code>string</code> | [Read] amplifygen3:GetApp. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetBranch">actionGetBranch</a></code> | <code>string</code> | [Read] amplifygen3:GetBranch. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetDeployment">actionGetDeployment</a></code> | <code>string</code> | [Read] amplifygen3:GetDeployment. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetDomainAssociation">actionGetDomainAssociation</a></code> | <code>string</code> | [Read] amplifygen3:GetDomainAssociation. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetDomainConnectUrl">actionGetDomainConnectUrl</a></code> | <code>string</code> | [Read] amplifygen3:GetDomainConnectUrl. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] amplifygen3:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetEnvironmentsForNetworkConnector">actionGetEnvironmentsForNetworkConnector</a></code> | <code>string</code> | [List] amplifygen3:GetEnvironmentsForNetworkConnector. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetFile">actionGetFile</a></code> | <code>string</code> | [Read] amplifygen3:GetFile. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetFolder">actionGetFolder</a></code> | <code>string</code> | [Read] amplifygen3:GetFolder. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetIdentityProviderConfig">actionGetIdentityProviderConfig</a></code> | <code>string</code> | [Read] amplifygen3:GetIdentityProviderConfig. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetIntegrationConfiguration">actionGetIntegrationConfiguration</a></code> | <code>string</code> | [Read] amplifygen3:GetIntegrationConfiguration. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetIntegrationConnection">actionGetIntegrationConnection</a></code> | <code>string</code> | [Read] amplifygen3:GetIntegrationConnection. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetNetworkConnector">actionGetNetworkConnector</a></code> | <code>string</code> | [Read] amplifygen3:GetNetworkConnector. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetRestoreWindow">actionGetRestoreWindow</a></code> | <code>string</code> | [Read] amplifygen3:GetRestoreWindow. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetSourceUpload">actionGetSourceUpload</a></code> | <code>string</code> | [Read] amplifygen3:GetSourceUpload. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetWebACLForResource">actionGetWebACLForResource</a></code> | <code>string</code> | [Read] amplifygen3:GetWebACLForResource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] amplifygen3:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AssociateWebACL">AssociateWebACL</a></code> | <code>string</code> | [Write] amplifygen3:AssociateWebACL. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CancelGradualRollout">CancelGradualRollout</a></code> | <code>string</code> | [Write] amplifygen3:CancelGradualRollout. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.Connect">Connect</a></code> | <code>string</code> | [Write] amplifygen3:Connect. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateApp">CreateApp</a></code> | <code>string</code> | [Write] amplifygen3:CreateApp. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateDeployment">CreateDeployment</a></code> | <code>string</code> | [Write] amplifygen3:CreateDeployment. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateDomainAssociation">CreateDomainAssociation</a></code> | <code>string</code> | [Write] amplifygen3:CreateDomainAssociation. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] amplifygen3:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateIntegrationConfiguration">CreateIntegrationConfiguration</a></code> | <code>string</code> | [Write] amplifygen3:CreateIntegrationConfiguration. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateIntegrationConnection">CreateIntegrationConnection</a></code> | <code>string</code> | [Write] amplifygen3:CreateIntegrationConnection. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateNetworkConnector">CreateNetworkConnector</a></code> | <code>string</code> | [Write] amplifygen3:CreateNetworkConnector. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateSourceUpload">CreateSourceUpload</a></code> | <code>string</code> | [Write] amplifygen3:CreateSourceUpload. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteAlias">DeleteAlias</a></code> | <code>string</code> | [Write] amplifygen3:DeleteAlias. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteApp">DeleteApp</a></code> | <code>string</code> | [Write] amplifygen3:DeleteApp. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteBackendFromApp">DeleteBackendFromApp</a></code> | <code>string</code> | [Write] amplifygen3:DeleteBackendFromApp. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteBranch">DeleteBranch</a></code> | <code>string</code> | [Write] amplifygen3:DeleteBranch. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteDeployment">DeleteDeployment</a></code> | <code>string</code> | [Write] amplifygen3:DeleteDeployment. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteDomainAssociation">DeleteDomainAssociation</a></code> | <code>string</code> | [Write] amplifygen3:DeleteDomainAssociation. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] amplifygen3:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteEnvironmentVariables">DeleteEnvironmentVariables</a></code> | <code>string</code> | [Write] amplifygen3:DeleteEnvironmentVariables. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteGitConnection">DeleteGitConnection</a></code> | <code>string</code> | [Write] amplifygen3:DeleteGitConnection. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteIdentityProviderConfig">DeleteIdentityProviderConfig</a></code> | <code>string</code> | [Write] amplifygen3:DeleteIdentityProviderConfig. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteIntegrationConfiguration">DeleteIntegrationConfiguration</a></code> | <code>string</code> | [Write] amplifygen3:DeleteIntegrationConfiguration. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteIntegrationConnection">DeleteIntegrationConnection</a></code> | <code>string</code> | [Write] amplifygen3:DeleteIntegrationConnection. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteNetworkConnector">DeleteNetworkConnector</a></code> | <code>string</code> | [Write] amplifygen3:DeleteNetworkConnector. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteSourceUpload">DeleteSourceUpload</a></code> | <code>string</code> | [Write] amplifygen3:DeleteSourceUpload. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DisableAccessControl">DisableAccessControl</a></code> | <code>string</code> | [Write] amplifygen3:DisableAccessControl. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DisassociateWebACL">DisassociateWebACL</a></code> | <code>string</code> | [Write] amplifygen3:DisassociateWebACL. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.EnableAccessControl">EnableAccessControl</a></code> | <code>string</code> | [Write] amplifygen3:EnableAccessControl. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListAccessControls">ListAccessControls</a></code> | <code>string</code> | [List] amplifygen3:ListAccessControls. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListAliases">ListAliases</a></code> | <code>string</code> | [List] amplifygen3:ListAliases. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListApiKeys">ListApiKeys</a></code> | <code>string</code> | [List] amplifygen3:ListApiKeys. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListApps">ListApps</a></code> | <code>string</code> | [List] amplifygen3:ListApps. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListBranches">ListBranches</a></code> | <code>string</code> | [List] amplifygen3:ListBranches. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListDeploymentsForApp">ListDeploymentsForApp</a></code> | <code>string</code> | [List] amplifygen3:ListDeploymentsForApp. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListDeploymentsForEnvironment">ListDeploymentsForEnvironment</a></code> | <code>string</code> | [List] amplifygen3:ListDeploymentsForEnvironment. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListDomainAssociationsForAccount">ListDomainAssociationsForAccount</a></code> | <code>string</code> | [List] amplifygen3:ListDomainAssociationsForAccount. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListDomainAssociationsForApp">ListDomainAssociationsForApp</a></code> | <code>string</code> | [List] amplifygen3:ListDomainAssociationsForApp. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [List] amplifygen3:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListEnvironmentVariables">ListEnvironmentVariables</a></code> | <code>string</code> | [Read] amplifygen3:ListEnvironmentVariables. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListGitBranches">ListGitBranches</a></code> | <code>string</code> | [List] amplifygen3:ListGitBranches. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListGitConnections">ListGitConnections</a></code> | <code>string</code> | [List] amplifygen3:ListGitConnections. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListIntegrationConfigurations">ListIntegrationConfigurations</a></code> | <code>string</code> | [List] amplifygen3:ListIntegrationConfigurations. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListIntegrationConnections">ListIntegrationConnections</a></code> | <code>string</code> | [List] amplifygen3:ListIntegrationConnections. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListIntegrationTypes">ListIntegrationTypes</a></code> | <code>string</code> | [List] amplifygen3:ListIntegrationTypes. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListNetworkConnectors">ListNetworkConnectors</a></code> | <code>string</code> | [List] amplifygen3:ListNetworkConnectors. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListPlanViolations">ListPlanViolations</a></code> | <code>string</code> | [Read] amplifygen3:ListPlanViolations. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListRepositories">ListRepositories</a></code> | <code>string</code> | [List] amplifygen3:ListRepositories. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListResourcesForWebACL">ListResourcesForWebACL</a></code> | <code>string</code> | [List] amplifygen3:ListResourcesForWebACL. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListSourceUploads">ListSourceUploads</a></code> | <code>string</code> | [List] amplifygen3:ListSourceUploads. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] amplifygen3:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.PutEnvironmentVariables">PutEnvironmentVariables</a></code> | <code>string</code> | [Write] amplifygen3:PutEnvironmentVariables. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.PutIdentityProviderConfig">PutIdentityProviderConfig</a></code> | <code>string</code> | [Write] amplifygen3:PutIdentityProviderConfig. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ResetCache">ResetCache</a></code> | <code>string</code> | [Write] amplifygen3:ResetCache. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.RestoreBranch">RestoreBranch</a></code> | <code>string</code> | [Write] amplifygen3:RestoreBranch. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ResumeBackend">ResumeBackend</a></code> | <code>string</code> | [Write] amplifygen3:ResumeBackend. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.RevokeApiKey">RevokeApiKey</a></code> | <code>string</code> | [Write] amplifygen3:RevokeApiKey. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.RotateIdentityProviderSecret">RotateIdentityProviderSecret</a></code> | <code>string</code> | [Write] amplifygen3:RotateIdentityProviderSecret. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.StartAuthorizationFlow">StartAuthorizationFlow</a></code> | <code>string</code> | [Write] amplifygen3:StartAuthorizationFlow. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.StartCacheRevalidation">StartCacheRevalidation</a></code> | <code>string</code> | [Write] amplifygen3:StartCacheRevalidation. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] amplifygen3:TagResource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] amplifygen3:UntagResource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateAccessControl">UpdateAccessControl</a></code> | <code>string</code> | [Write] amplifygen3:UpdateAccessControl. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateAliasRouting">UpdateAliasRouting</a></code> | <code>string</code> | [Write] amplifygen3:UpdateAliasRouting. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateApp">UpdateApp</a></code> | <code>string</code> | [Write] amplifygen3:UpdateApp. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateDomainAssociation">UpdateDomainAssociation</a></code> | <code>string</code> | [Write] amplifygen3:UpdateDomainAssociation. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] amplifygen3:UpdateEnvironment. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateIntegrationConfiguration">UpdateIntegrationConfiguration</a></code> | <code>string</code> | [Write] amplifygen3:UpdateIntegrationConfiguration. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateNetworkConnector">UpdateNetworkConnector</a></code> | <code>string</code> | [Write] amplifygen3:UpdateNetworkConnector. |

---

##### `AcceptForkPullRequestDeployment`<sup>Required</sup> <a name="AcceptForkPullRequestDeployment" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AcceptForkPullRequestDeployment"></a>

```typescript
public readonly AcceptForkPullRequestDeployment: string;
```

- *Type:* string

[Write] amplifygen3:AcceptForkPullRequestDeployment.

---

##### `actionGetAccessControl`<sup>Required</sup> <a name="actionGetAccessControl" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetAccessControl"></a>

```typescript
public readonly actionGetAccessControl: string;
```

- *Type:* string

[Read] amplifygen3:GetAccessControl.

---

##### `actionGetAlias`<sup>Required</sup> <a name="actionGetAlias" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetAlias"></a>

```typescript
public readonly actionGetAlias: string;
```

- *Type:* string

[Read] amplifygen3:GetAlias.

---

##### `actionGetApiKey`<sup>Required</sup> <a name="actionGetApiKey" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetApiKey"></a>

```typescript
public readonly actionGetApiKey: string;
```

- *Type:* string

[Read] amplifygen3:GetApiKey.

---

##### `actionGetApp`<sup>Required</sup> <a name="actionGetApp" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetApp"></a>

```typescript
public readonly actionGetApp: string;
```

- *Type:* string

[Read] amplifygen3:GetApp.

---

##### `actionGetBranch`<sup>Required</sup> <a name="actionGetBranch" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetBranch"></a>

```typescript
public readonly actionGetBranch: string;
```

- *Type:* string

[Read] amplifygen3:GetBranch.

---

##### `actionGetDeployment`<sup>Required</sup> <a name="actionGetDeployment" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetDeployment"></a>

```typescript
public readonly actionGetDeployment: string;
```

- *Type:* string

[Read] amplifygen3:GetDeployment.

---

##### `actionGetDomainAssociation`<sup>Required</sup> <a name="actionGetDomainAssociation" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetDomainAssociation"></a>

```typescript
public readonly actionGetDomainAssociation: string;
```

- *Type:* string

[Read] amplifygen3:GetDomainAssociation.

---

##### `actionGetDomainConnectUrl`<sup>Required</sup> <a name="actionGetDomainConnectUrl" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetDomainConnectUrl"></a>

```typescript
public readonly actionGetDomainConnectUrl: string;
```

- *Type:* string

[Read] amplifygen3:GetDomainConnectUrl.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] amplifygen3:GetEnvironment.

---

##### `actionGetEnvironmentsForNetworkConnector`<sup>Required</sup> <a name="actionGetEnvironmentsForNetworkConnector" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetEnvironmentsForNetworkConnector"></a>

```typescript
public readonly actionGetEnvironmentsForNetworkConnector: string;
```

- *Type:* string

[List] amplifygen3:GetEnvironmentsForNetworkConnector.

---

##### `actionGetFile`<sup>Required</sup> <a name="actionGetFile" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetFile"></a>

```typescript
public readonly actionGetFile: string;
```

- *Type:* string

[Read] amplifygen3:GetFile.

---

##### `actionGetFolder`<sup>Required</sup> <a name="actionGetFolder" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetFolder"></a>

```typescript
public readonly actionGetFolder: string;
```

- *Type:* string

[Read] amplifygen3:GetFolder.

---

##### `actionGetIdentityProviderConfig`<sup>Required</sup> <a name="actionGetIdentityProviderConfig" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetIdentityProviderConfig"></a>

```typescript
public readonly actionGetIdentityProviderConfig: string;
```

- *Type:* string

[Read] amplifygen3:GetIdentityProviderConfig.

---

##### `actionGetIntegrationConfiguration`<sup>Required</sup> <a name="actionGetIntegrationConfiguration" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetIntegrationConfiguration"></a>

```typescript
public readonly actionGetIntegrationConfiguration: string;
```

- *Type:* string

[Read] amplifygen3:GetIntegrationConfiguration.

---

##### `actionGetIntegrationConnection`<sup>Required</sup> <a name="actionGetIntegrationConnection" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetIntegrationConnection"></a>

```typescript
public readonly actionGetIntegrationConnection: string;
```

- *Type:* string

[Read] amplifygen3:GetIntegrationConnection.

---

##### `actionGetNetworkConnector`<sup>Required</sup> <a name="actionGetNetworkConnector" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetNetworkConnector"></a>

```typescript
public readonly actionGetNetworkConnector: string;
```

- *Type:* string

[Read] amplifygen3:GetNetworkConnector.

---

##### `actionGetRestoreWindow`<sup>Required</sup> <a name="actionGetRestoreWindow" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetRestoreWindow"></a>

```typescript
public readonly actionGetRestoreWindow: string;
```

- *Type:* string

[Read] amplifygen3:GetRestoreWindow.

---

##### `actionGetSourceUpload`<sup>Required</sup> <a name="actionGetSourceUpload" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetSourceUpload"></a>

```typescript
public readonly actionGetSourceUpload: string;
```

- *Type:* string

[Read] amplifygen3:GetSourceUpload.

---

##### `actionGetWebACLForResource`<sup>Required</sup> <a name="actionGetWebACLForResource" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.actionGetWebACLForResource"></a>

```typescript
public readonly actionGetWebACLForResource: string;
```

- *Type:* string

[Read] amplifygen3:GetWebACLForResource.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] amplifygen3:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateWebACL`<sup>Required</sup> <a name="AssociateWebACL" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.AssociateWebACL"></a>

```typescript
public readonly AssociateWebACL: string;
```

- *Type:* string

[Write] amplifygen3:AssociateWebACL.

---

##### `CancelGradualRollout`<sup>Required</sup> <a name="CancelGradualRollout" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CancelGradualRollout"></a>

```typescript
public readonly CancelGradualRollout: string;
```

- *Type:* string

[Write] amplifygen3:CancelGradualRollout.

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.Connect"></a>

```typescript
public readonly Connect: string;
```

- *Type:* string

[Write] amplifygen3:Connect.

---

##### `CreateApp`<sup>Required</sup> <a name="CreateApp" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateApp"></a>

```typescript
public readonly CreateApp: string;
```

- *Type:* string

[Write] amplifygen3:CreateApp.

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string;
```

- *Type:* string

[Write] amplifygen3:CreateDeployment.

---

##### `CreateDomainAssociation`<sup>Required</sup> <a name="CreateDomainAssociation" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateDomainAssociation"></a>

```typescript
public readonly CreateDomainAssociation: string;
```

- *Type:* string

[Write] amplifygen3:CreateDomainAssociation.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] amplifygen3:CreateEnvironment.

---

##### `CreateIntegrationConfiguration`<sup>Required</sup> <a name="CreateIntegrationConfiguration" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateIntegrationConfiguration"></a>

```typescript
public readonly CreateIntegrationConfiguration: string;
```

- *Type:* string

[Write] amplifygen3:CreateIntegrationConfiguration.

---

##### `CreateIntegrationConnection`<sup>Required</sup> <a name="CreateIntegrationConnection" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateIntegrationConnection"></a>

```typescript
public readonly CreateIntegrationConnection: string;
```

- *Type:* string

[Write] amplifygen3:CreateIntegrationConnection.

---

##### `CreateNetworkConnector`<sup>Required</sup> <a name="CreateNetworkConnector" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateNetworkConnector"></a>

```typescript
public readonly CreateNetworkConnector: string;
```

- *Type:* string

[Write] amplifygen3:CreateNetworkConnector.

---

##### `CreateSourceUpload`<sup>Required</sup> <a name="CreateSourceUpload" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.CreateSourceUpload"></a>

```typescript
public readonly CreateSourceUpload: string;
```

- *Type:* string

[Write] amplifygen3:CreateSourceUpload.

---

##### `DeleteAlias`<sup>Required</sup> <a name="DeleteAlias" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteAlias"></a>

```typescript
public readonly DeleteAlias: string;
```

- *Type:* string

[Write] amplifygen3:DeleteAlias.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string;
```

- *Type:* string

[Write] amplifygen3:DeleteApp.

---

##### `DeleteBackendFromApp`<sup>Required</sup> <a name="DeleteBackendFromApp" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteBackendFromApp"></a>

```typescript
public readonly DeleteBackendFromApp: string;
```

- *Type:* string

[Write] amplifygen3:DeleteBackendFromApp.

---

##### `DeleteBranch`<sup>Required</sup> <a name="DeleteBranch" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteBranch"></a>

```typescript
public readonly DeleteBranch: string;
```

- *Type:* string

[Write] amplifygen3:DeleteBranch.

---

##### `DeleteDeployment`<sup>Required</sup> <a name="DeleteDeployment" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteDeployment"></a>

```typescript
public readonly DeleteDeployment: string;
```

- *Type:* string

[Write] amplifygen3:DeleteDeployment.

---

##### `DeleteDomainAssociation`<sup>Required</sup> <a name="DeleteDomainAssociation" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteDomainAssociation"></a>

```typescript
public readonly DeleteDomainAssociation: string;
```

- *Type:* string

[Write] amplifygen3:DeleteDomainAssociation.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] amplifygen3:DeleteEnvironment.

---

##### `DeleteEnvironmentVariables`<sup>Required</sup> <a name="DeleteEnvironmentVariables" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteEnvironmentVariables"></a>

```typescript
public readonly DeleteEnvironmentVariables: string;
```

- *Type:* string

[Write] amplifygen3:DeleteEnvironmentVariables.

---

##### `DeleteGitConnection`<sup>Required</sup> <a name="DeleteGitConnection" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteGitConnection"></a>

```typescript
public readonly DeleteGitConnection: string;
```

- *Type:* string

[Write] amplifygen3:DeleteGitConnection.

---

##### `DeleteIdentityProviderConfig`<sup>Required</sup> <a name="DeleteIdentityProviderConfig" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteIdentityProviderConfig"></a>

```typescript
public readonly DeleteIdentityProviderConfig: string;
```

- *Type:* string

[Write] amplifygen3:DeleteIdentityProviderConfig.

---

##### `DeleteIntegrationConfiguration`<sup>Required</sup> <a name="DeleteIntegrationConfiguration" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteIntegrationConfiguration"></a>

```typescript
public readonly DeleteIntegrationConfiguration: string;
```

- *Type:* string

[Write] amplifygen3:DeleteIntegrationConfiguration.

---

##### `DeleteIntegrationConnection`<sup>Required</sup> <a name="DeleteIntegrationConnection" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteIntegrationConnection"></a>

```typescript
public readonly DeleteIntegrationConnection: string;
```

- *Type:* string

[Write] amplifygen3:DeleteIntegrationConnection.

---

##### `DeleteNetworkConnector`<sup>Required</sup> <a name="DeleteNetworkConnector" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteNetworkConnector"></a>

```typescript
public readonly DeleteNetworkConnector: string;
```

- *Type:* string

[Write] amplifygen3:DeleteNetworkConnector.

---

##### `DeleteSourceUpload`<sup>Required</sup> <a name="DeleteSourceUpload" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DeleteSourceUpload"></a>

```typescript
public readonly DeleteSourceUpload: string;
```

- *Type:* string

[Write] amplifygen3:DeleteSourceUpload.

---

##### `DisableAccessControl`<sup>Required</sup> <a name="DisableAccessControl" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DisableAccessControl"></a>

```typescript
public readonly DisableAccessControl: string;
```

- *Type:* string

[Write] amplifygen3:DisableAccessControl.

---

##### `DisassociateWebACL`<sup>Required</sup> <a name="DisassociateWebACL" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.DisassociateWebACL"></a>

```typescript
public readonly DisassociateWebACL: string;
```

- *Type:* string

[Write] amplifygen3:DisassociateWebACL.

---

##### `EnableAccessControl`<sup>Required</sup> <a name="EnableAccessControl" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.EnableAccessControl"></a>

```typescript
public readonly EnableAccessControl: string;
```

- *Type:* string

[Write] amplifygen3:EnableAccessControl.

---

##### `ListAccessControls`<sup>Required</sup> <a name="ListAccessControls" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListAccessControls"></a>

```typescript
public readonly ListAccessControls: string;
```

- *Type:* string

[List] amplifygen3:ListAccessControls.

---

##### `ListAliases`<sup>Required</sup> <a name="ListAliases" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListAliases"></a>

```typescript
public readonly ListAliases: string;
```

- *Type:* string

[List] amplifygen3:ListAliases.

---

##### `ListApiKeys`<sup>Required</sup> <a name="ListApiKeys" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListApiKeys"></a>

```typescript
public readonly ListApiKeys: string;
```

- *Type:* string

[List] amplifygen3:ListApiKeys.

---

##### `ListApps`<sup>Required</sup> <a name="ListApps" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListApps"></a>

```typescript
public readonly ListApps: string;
```

- *Type:* string

[List] amplifygen3:ListApps.

---

##### `ListBranches`<sup>Required</sup> <a name="ListBranches" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListBranches"></a>

```typescript
public readonly ListBranches: string;
```

- *Type:* string

[List] amplifygen3:ListBranches.

---

##### `ListDeploymentsForApp`<sup>Required</sup> <a name="ListDeploymentsForApp" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListDeploymentsForApp"></a>

```typescript
public readonly ListDeploymentsForApp: string;
```

- *Type:* string

[List] amplifygen3:ListDeploymentsForApp.

---

##### `ListDeploymentsForEnvironment`<sup>Required</sup> <a name="ListDeploymentsForEnvironment" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListDeploymentsForEnvironment"></a>

```typescript
public readonly ListDeploymentsForEnvironment: string;
```

- *Type:* string

[List] amplifygen3:ListDeploymentsForEnvironment.

---

##### `ListDomainAssociationsForAccount`<sup>Required</sup> <a name="ListDomainAssociationsForAccount" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListDomainAssociationsForAccount"></a>

```typescript
public readonly ListDomainAssociationsForAccount: string;
```

- *Type:* string

[List] amplifygen3:ListDomainAssociationsForAccount.

---

##### `ListDomainAssociationsForApp`<sup>Required</sup> <a name="ListDomainAssociationsForApp" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListDomainAssociationsForApp"></a>

```typescript
public readonly ListDomainAssociationsForApp: string;
```

- *Type:* string

[List] amplifygen3:ListDomainAssociationsForApp.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[List] amplifygen3:ListEnvironments.

---

##### `ListEnvironmentVariables`<sup>Required</sup> <a name="ListEnvironmentVariables" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListEnvironmentVariables"></a>

```typescript
public readonly ListEnvironmentVariables: string;
```

- *Type:* string

[Read] amplifygen3:ListEnvironmentVariables.

---

##### `ListGitBranches`<sup>Required</sup> <a name="ListGitBranches" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListGitBranches"></a>

```typescript
public readonly ListGitBranches: string;
```

- *Type:* string

[List] amplifygen3:ListGitBranches.

---

##### `ListGitConnections`<sup>Required</sup> <a name="ListGitConnections" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListGitConnections"></a>

```typescript
public readonly ListGitConnections: string;
```

- *Type:* string

[List] amplifygen3:ListGitConnections.

---

##### `ListIntegrationConfigurations`<sup>Required</sup> <a name="ListIntegrationConfigurations" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListIntegrationConfigurations"></a>

```typescript
public readonly ListIntegrationConfigurations: string;
```

- *Type:* string

[List] amplifygen3:ListIntegrationConfigurations.

---

##### `ListIntegrationConnections`<sup>Required</sup> <a name="ListIntegrationConnections" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListIntegrationConnections"></a>

```typescript
public readonly ListIntegrationConnections: string;
```

- *Type:* string

[List] amplifygen3:ListIntegrationConnections.

---

##### `ListIntegrationTypes`<sup>Required</sup> <a name="ListIntegrationTypes" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListIntegrationTypes"></a>

```typescript
public readonly ListIntegrationTypes: string;
```

- *Type:* string

[List] amplifygen3:ListIntegrationTypes.

---

##### `ListNetworkConnectors`<sup>Required</sup> <a name="ListNetworkConnectors" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListNetworkConnectors"></a>

```typescript
public readonly ListNetworkConnectors: string;
```

- *Type:* string

[List] amplifygen3:ListNetworkConnectors.

---

##### `ListPlanViolations`<sup>Required</sup> <a name="ListPlanViolations" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListPlanViolations"></a>

```typescript
public readonly ListPlanViolations: string;
```

- *Type:* string

[Read] amplifygen3:ListPlanViolations.

---

##### `ListRepositories`<sup>Required</sup> <a name="ListRepositories" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListRepositories"></a>

```typescript
public readonly ListRepositories: string;
```

- *Type:* string

[List] amplifygen3:ListRepositories.

---

##### `ListResourcesForWebACL`<sup>Required</sup> <a name="ListResourcesForWebACL" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListResourcesForWebACL"></a>

```typescript
public readonly ListResourcesForWebACL: string;
```

- *Type:* string

[List] amplifygen3:ListResourcesForWebACL.

---

##### `ListSourceUploads`<sup>Required</sup> <a name="ListSourceUploads" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListSourceUploads"></a>

```typescript
public readonly ListSourceUploads: string;
```

- *Type:* string

[List] amplifygen3:ListSourceUploads.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] amplifygen3:ListTagsForResource.

---

##### `PutEnvironmentVariables`<sup>Required</sup> <a name="PutEnvironmentVariables" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.PutEnvironmentVariables"></a>

```typescript
public readonly PutEnvironmentVariables: string;
```

- *Type:* string

[Write] amplifygen3:PutEnvironmentVariables.

---

##### `PutIdentityProviderConfig`<sup>Required</sup> <a name="PutIdentityProviderConfig" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.PutIdentityProviderConfig"></a>

```typescript
public readonly PutIdentityProviderConfig: string;
```

- *Type:* string

[Write] amplifygen3:PutIdentityProviderConfig.

---

##### `ResetCache`<sup>Required</sup> <a name="ResetCache" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ResetCache"></a>

```typescript
public readonly ResetCache: string;
```

- *Type:* string

[Write] amplifygen3:ResetCache.

---

##### `RestoreBranch`<sup>Required</sup> <a name="RestoreBranch" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.RestoreBranch"></a>

```typescript
public readonly RestoreBranch: string;
```

- *Type:* string

[Write] amplifygen3:RestoreBranch.

---

##### `ResumeBackend`<sup>Required</sup> <a name="ResumeBackend" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.ResumeBackend"></a>

```typescript
public readonly ResumeBackend: string;
```

- *Type:* string

[Write] amplifygen3:ResumeBackend.

---

##### `RevokeApiKey`<sup>Required</sup> <a name="RevokeApiKey" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.RevokeApiKey"></a>

```typescript
public readonly RevokeApiKey: string;
```

- *Type:* string

[Write] amplifygen3:RevokeApiKey.

---

##### `RotateIdentityProviderSecret`<sup>Required</sup> <a name="RotateIdentityProviderSecret" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.RotateIdentityProviderSecret"></a>

```typescript
public readonly RotateIdentityProviderSecret: string;
```

- *Type:* string

[Write] amplifygen3:RotateIdentityProviderSecret.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAuthorizationFlow`<sup>Required</sup> <a name="StartAuthorizationFlow" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.StartAuthorizationFlow"></a>

```typescript
public readonly StartAuthorizationFlow: string;
```

- *Type:* string

[Write] amplifygen3:StartAuthorizationFlow.

---

##### `StartCacheRevalidation`<sup>Required</sup> <a name="StartCacheRevalidation" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.StartCacheRevalidation"></a>

```typescript
public readonly StartCacheRevalidation: string;
```

- *Type:* string

[Write] amplifygen3:StartCacheRevalidation.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] amplifygen3:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] amplifygen3:UntagResource.

---

##### `UpdateAccessControl`<sup>Required</sup> <a name="UpdateAccessControl" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateAccessControl"></a>

```typescript
public readonly UpdateAccessControl: string;
```

- *Type:* string

[Write] amplifygen3:UpdateAccessControl.

---

##### `UpdateAliasRouting`<sup>Required</sup> <a name="UpdateAliasRouting" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateAliasRouting"></a>

```typescript
public readonly UpdateAliasRouting: string;
```

- *Type:* string

[Write] amplifygen3:UpdateAliasRouting.

---

##### `UpdateApp`<sup>Required</sup> <a name="UpdateApp" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateApp"></a>

```typescript
public readonly UpdateApp: string;
```

- *Type:* string

[Write] amplifygen3:UpdateApp.

---

##### `UpdateDomainAssociation`<sup>Required</sup> <a name="UpdateDomainAssociation" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateDomainAssociation"></a>

```typescript
public readonly UpdateDomainAssociation: string;
```

- *Type:* string

[Write] amplifygen3:UpdateDomainAssociation.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] amplifygen3:UpdateEnvironment.

---

##### `UpdateIntegrationConfiguration`<sup>Required</sup> <a name="UpdateIntegrationConfiguration" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateIntegrationConfiguration"></a>

```typescript
public readonly UpdateIntegrationConfiguration: string;
```

- *Type:* string

[Write] amplifygen3:UpdateIntegrationConfiguration.

---

##### `UpdateNetworkConnector`<sup>Required</sup> <a name="UpdateNetworkConnector" id="@cdk_utils/iam.amplifygen3.Amplifygen3Actions.property.UpdateNetworkConnector"></a>

```typescript
public readonly UpdateNetworkConnector: string;
```

- *Type:* string

[Write] amplifygen3:UpdateNetworkConnector.

---

### Amplifygen3Conditions <a name="Amplifygen3Conditions" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions"></a>

Condition key constants and builders for amplifygen3.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

new amplifygen3.Amplifygen3Conditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.requestTag"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Conditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.resourceTag"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Conditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.tagKeys"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Conditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateAppConditionKeys">CreateAppConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApp action. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateDeploymentConditionKeys">CreateDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeployment action. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateDomainAssociationConditionKeys">CreateDomainAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDomainAssociation action. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateIntegrationConfigurationConditionKeys">CreateIntegrationConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIntegrationConfiguration action. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateNetworkConnectorConditionKeys">CreateNetworkConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNetworkConnector action. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAppConditionKeys`<sup>Required</sup> <a name="CreateAppConditionKeys" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateAppConditionKeys"></a>

```typescript
public readonly CreateAppConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApp action.

---

##### `CreateDeploymentConditionKeys`<sup>Required</sup> <a name="CreateDeploymentConditionKeys" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateDeploymentConditionKeys"></a>

```typescript
public readonly CreateDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeployment action.

---

##### `CreateDomainAssociationConditionKeys`<sup>Required</sup> <a name="CreateDomainAssociationConditionKeys" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateDomainAssociationConditionKeys"></a>

```typescript
public readonly CreateDomainAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDomainAssociation action.

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `CreateIntegrationConfigurationConditionKeys`<sup>Required</sup> <a name="CreateIntegrationConfigurationConditionKeys" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateIntegrationConfigurationConditionKeys"></a>

```typescript
public readonly CreateIntegrationConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIntegrationConfiguration action.

---

##### `CreateNetworkConnectorConditionKeys`<sup>Required</sup> <a name="CreateNetworkConnectorConditionKeys" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.CreateNetworkConnectorConditionKeys"></a>

```typescript
public readonly CreateNetworkConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNetworkConnector action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.amplifygen3.Amplifygen3Conditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### Amplifygen3Resources <a name="Amplifygen3Resources" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources"></a>

ARN builders, validators, and parsers for amplifygen3 resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.Initializer"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

new amplifygen3.Amplifygen3Resources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.alias">alias</a></code> | Builds an ARN for the Alias resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.app">app</a></code> | Builds an ARN for the App resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.branch">branch</a></code> | Builds an ARN for the Branch resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.deployment">deployment</a></code> | Builds an ARN for the Deployment resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.domainAssociation">domainAssociation</a></code> | Builds an ARN for the DomainAssociation resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.environment">environment</a></code> | Builds an ARN for the Environment resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.integrationConfiguration">integrationConfiguration</a></code> | Builds an ARN for the IntegrationConfiguration resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidAliasArn">isValidAliasArn</a></code> | Validates whether a string is a valid ARN for the Alias resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidAppArn">isValidAppArn</a></code> | Validates whether a string is a valid ARN for the App resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidBranchArn">isValidBranchArn</a></code> | Validates whether a string is a valid ARN for the Branch resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidDeploymentArn">isValidDeploymentArn</a></code> | Validates whether a string is a valid ARN for the Deployment resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidDomainAssociationArn">isValidDomainAssociationArn</a></code> | Validates whether a string is a valid ARN for the DomainAssociation resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the Environment resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidIntegrationConfigurationArn">isValidIntegrationConfigurationArn</a></code> | Validates whether a string is a valid ARN for the IntegrationConfiguration resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidNetworkConnectorArn">isValidNetworkConnectorArn</a></code> | Validates whether a string is a valid ARN for the NetworkConnector resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.networkConnector">networkConnector</a></code> | Builds an ARN for the NetworkConnector resource. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseAliasArn">parseAliasArn</a></code> | Parses a Alias ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseAppArn">parseAppArn</a></code> | Parses a App ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseBranchArn">parseBranchArn</a></code> | Parses a Branch ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseDeploymentArn">parseDeploymentArn</a></code> | Parses a Deployment ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseDomainAssociationArn">parseDomainAssociationArn</a></code> | Parses a DomainAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a Environment ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseIntegrationConfigurationArn">parseIntegrationConfigurationArn</a></code> | Parses a IntegrationConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseNetworkConnectorArn">parseNetworkConnectorArn</a></code> | Parses a NetworkConnector ARN into its components. |

---

##### `alias` <a name="alias" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.alias"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.alias(props: Amplifygen3AliasArnProps)
```

Builds an ARN for the Alias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.alias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AliasArnProps">Amplifygen3AliasArnProps</a>

---

##### `app` <a name="app" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.app"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.app(props: Amplifygen3AppArnProps)
```

Builds an ARN for the App resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.app.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifygen3.Amplifygen3AppArnProps">Amplifygen3AppArnProps</a>

---

##### `branch` <a name="branch" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.branch"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.branch(props: Amplifygen3BranchArnProps)
```

Builds an ARN for the Branch resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.branch.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifygen3.Amplifygen3BranchArnProps">Amplifygen3BranchArnProps</a>

---

##### `deployment` <a name="deployment" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.deployment"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.deployment(props: Amplifygen3DeploymentArnProps)
```

Builds an ARN for the Deployment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.deployment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DeploymentArnProps">Amplifygen3DeploymentArnProps</a>

---

##### `domainAssociation` <a name="domainAssociation" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.domainAssociation"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.domainAssociation(props: Amplifygen3DomainAssociationArnProps)
```

Builds an ARN for the DomainAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.domainAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifygen3.Amplifygen3DomainAssociationArnProps">Amplifygen3DomainAssociationArnProps</a>

---

##### `environment` <a name="environment" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.environment"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.environment(props: Amplifygen3EnvironmentArnProps)
```

Builds an ARN for the Environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifygen3.Amplifygen3EnvironmentArnProps">Amplifygen3EnvironmentArnProps</a>

---

##### `integrationConfiguration` <a name="integrationConfiguration" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.integrationConfiguration"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.integrationConfiguration(props: Amplifygen3IntegrationConfigurationArnProps)
```

Builds an ARN for the IntegrationConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.integrationConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifygen3.Amplifygen3IntegrationConfigurationArnProps">Amplifygen3IntegrationConfigurationArnProps</a>

---

##### `isValidAliasArn` <a name="isValidAliasArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidAliasArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.isValidAliasArn(arn: string)
```

Validates whether a string is a valid ARN for the Alias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAppArn` <a name="isValidAppArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidAppArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.isValidAppArn(arn: string)
```

Validates whether a string is a valid ARN for the App resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidAppArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBranchArn` <a name="isValidBranchArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidBranchArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.isValidBranchArn(arn: string)
```

Validates whether a string is a valid ARN for the Branch resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidBranchArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentArn` <a name="isValidDeploymentArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidDeploymentArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.isValidDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the Deployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainAssociationArn` <a name="isValidDomainAssociationArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidDomainAssociationArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.isValidDomainAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the DomainAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidDomainAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidEnvironmentArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the Environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationConfigurationArn` <a name="isValidIntegrationConfigurationArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidIntegrationConfigurationArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.isValidIntegrationConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the IntegrationConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidIntegrationConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkConnectorArn` <a name="isValidNetworkConnectorArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidNetworkConnectorArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.isValidNetworkConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the NetworkConnector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.isValidNetworkConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `networkConnector` <a name="networkConnector" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.networkConnector"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.networkConnector(props: Amplifygen3NetworkConnectorArnProps)
```

Builds an ARN for the NetworkConnector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.networkConnector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.amplifygen3.Amplifygen3NetworkConnectorArnProps">Amplifygen3NetworkConnectorArnProps</a>

---

##### `parseAliasArn` <a name="parseAliasArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseAliasArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.parseAliasArn(arn: string)
```

Parses a Alias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppArn` <a name="parseAppArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseAppArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.parseAppArn(arn: string)
```

Parses a App ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseAppArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBranchArn` <a name="parseBranchArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseBranchArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.parseBranchArn(arn: string)
```

Parses a Branch ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseBranchArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentArn` <a name="parseDeploymentArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseDeploymentArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.parseDeploymentArn(arn: string)
```

Parses a Deployment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainAssociationArn` <a name="parseDomainAssociationArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseDomainAssociationArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.parseDomainAssociationArn(arn: string)
```

Parses a DomainAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseDomainAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseEnvironmentArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.parseEnvironmentArn(arn: string)
```

Parses a Environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationConfigurationArn` <a name="parseIntegrationConfigurationArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseIntegrationConfigurationArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.parseIntegrationConfigurationArn(arn: string)
```

Parses a IntegrationConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseIntegrationConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkConnectorArn` <a name="parseNetworkConnectorArn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseNetworkConnectorArn"></a>

```typescript
import { amplifygen3 } from '@cdk_utils/iam'

amplifygen3.Amplifygen3Resources.parseNetworkConnectorArn(arn: string)
```

Parses a NetworkConnector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.amplifygen3.Amplifygen3Resources.parseNetworkConnectorArn.parameter.arn"></a>

- *Type:* string

---




