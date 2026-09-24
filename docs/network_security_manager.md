# `network_security_manager` Submodule <a name="`network_security_manager` Submodule" id="@cdk_utils/iam.network_security_manager"></a>


## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityManagerDeploymentArnComponents <a name="NetworkSecurityManagerDeploymentArnComponents" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnComponents"></a>

Parsed components of a deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnComponents.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerDeploymentArnComponents: network_security_manager.NetworkSecurityManagerDeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnComponents.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnComponents.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkSecurityManagerDeploymentArnProps <a name="NetworkSecurityManagerDeploymentArnProps" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnProps"></a>

Properties for building a deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnProps.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerDeploymentArnProps: network_security_manager.NetworkSecurityManagerDeploymentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnProps.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnProps.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkSecurityManagerDeploymentSnapshotArnComponents <a name="NetworkSecurityManagerDeploymentSnapshotArnComponents" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents"></a>

Parsed components of a deployment-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerDeploymentSnapshotArnComponents: network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents.property.versionNumber">versionNumber</a></code> | <code>string</code> | The VersionNumber component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnComponents.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

The VersionNumber component.

---

### NetworkSecurityManagerDeploymentSnapshotArnProps <a name="NetworkSecurityManagerDeploymentSnapshotArnProps" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps"></a>

Properties for building a deployment-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerDeploymentSnapshotArnProps: network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps.property.deploymentId">deploymentId</a></code> | <code>string</code> | The DeploymentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps.property.versionNumber">versionNumber</a></code> | <code>string</code> | The VersionNumber component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The DeploymentId component of the ARN.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

The VersionNumber component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkSecurityManagerPolicyArnComponents <a name="NetworkSecurityManagerPolicyArnComponents" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnComponents"></a>

Parsed components of a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnComponents.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerPolicyArnComponents: network_security_manager.NetworkSecurityManagerPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnComponents.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnComponents.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkSecurityManagerPolicyArnProps <a name="NetworkSecurityManagerPolicyArnProps" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnProps"></a>

Properties for building a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnProps.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerPolicyArnProps: network_security_manager.NetworkSecurityManagerPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnProps.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnProps.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkSecurityManagerPolicySnapshotArnComponents <a name="NetworkSecurityManagerPolicySnapshotArnComponents" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents"></a>

Parsed components of a policy-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerPolicySnapshotArnComponents: network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents.property.versionNumber">versionNumber</a></code> | <code>string</code> | The VersionNumber component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnComponents.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

The VersionNumber component.

---

### NetworkSecurityManagerPolicySnapshotArnProps <a name="NetworkSecurityManagerPolicySnapshotArnProps" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps"></a>

Properties for building a policy-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerPolicySnapshotArnProps: network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps.property.versionNumber">versionNumber</a></code> | <code>string</code> | The VersionNumber component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component of the ARN.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

The VersionNumber component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkSecurityManagerRuleArnComponents <a name="NetworkSecurityManagerRuleArnComponents" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnComponents"></a>

Parsed components of a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnComponents.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerRuleArnComponents: network_security_manager.NetworkSecurityManagerRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnComponents.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnComponents.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component.

---

### NetworkSecurityManagerRuleArnProps <a name="NetworkSecurityManagerRuleArnProps" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnProps"></a>

Properties for building a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnProps.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerRuleArnProps: network_security_manager.NetworkSecurityManagerRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnProps.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkSecurityManagerRuleSnapshotArnComponents <a name="NetworkSecurityManagerRuleSnapshotArnComponents" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents"></a>

Parsed components of a rule-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerRuleSnapshotArnComponents: network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents.property.versionNumber">versionNumber</a></code> | <code>string</code> | The VersionNumber component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnComponents.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

The VersionNumber component.

---

### NetworkSecurityManagerRuleSnapshotArnProps <a name="NetworkSecurityManagerRuleSnapshotArnProps" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps"></a>

Properties for building a rule-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerRuleSnapshotArnProps: network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps.property.versionNumber">versionNumber</a></code> | <code>string</code> | The VersionNumber component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component of the ARN.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

The VersionNumber component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkSecurityManagerScopeArnComponents <a name="NetworkSecurityManagerScopeArnComponents" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnComponents"></a>

Parsed components of a scope ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnComponents.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerScopeArnComponents: network_security_manager.NetworkSecurityManagerScopeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnComponents.property.scopeId">scopeId</a></code> | <code>string</code> | The ScopeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnComponents.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The ScopeId component.

---

### NetworkSecurityManagerScopeArnProps <a name="NetworkSecurityManagerScopeArnProps" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnProps"></a>

Properties for building a scope ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnProps.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerScopeArnProps: network_security_manager.NetworkSecurityManagerScopeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnProps.property.scopeId">scopeId</a></code> | <code>string</code> | The ScopeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnProps.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The ScopeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkSecurityManagerScopeSnapshotArnComponents <a name="NetworkSecurityManagerScopeSnapshotArnComponents" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents"></a>

Parsed components of a scope-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerScopeSnapshotArnComponents: network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents.property.scopeId">scopeId</a></code> | <code>string</code> | The ScopeId component. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents.property.versionNumber">versionNumber</a></code> | <code>string</code> | The VersionNumber component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The ScopeId component.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnComponents.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

The VersionNumber component.

---

### NetworkSecurityManagerScopeSnapshotArnProps <a name="NetworkSecurityManagerScopeSnapshotArnProps" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps"></a>

Properties for building a scope-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerScopeSnapshotArnProps: network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps.property.scopeId">scopeId</a></code> | <code>string</code> | The ScopeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps.property.versionNumber">versionNumber</a></code> | <code>string</code> | The VersionNumber component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The ScopeId component of the ARN.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

The VersionNumber component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkSecurityManagerTemplateArnComponents <a name="NetworkSecurityManagerTemplateArnComponents" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnComponents"></a>

Parsed components of a template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnComponents.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerTemplateArnComponents: network_security_manager.NetworkSecurityManagerTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnComponents.property.templateId">templateId</a></code> | <code>string</code> | The TemplateId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnComponents.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The TemplateId component.

---

### NetworkSecurityManagerTemplateArnProps <a name="NetworkSecurityManagerTemplateArnProps" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnProps"></a>

Properties for building a template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnProps.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerTemplateArnProps: network_security_manager.NetworkSecurityManagerTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnProps.property.templateId">templateId</a></code> | <code>string</code> | The TemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnProps.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The TemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkSecurityManagerTemplateSnapshotArnComponents <a name="NetworkSecurityManagerTemplateSnapshotArnComponents" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents"></a>

Parsed components of a template-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerTemplateSnapshotArnComponents: network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents.property.templateId">templateId</a></code> | <code>string</code> | The TemplateId component. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents.property.versionNumber">versionNumber</a></code> | <code>string</code> | The VersionNumber component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The TemplateId component.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnComponents.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

The VersionNumber component.

---

### NetworkSecurityManagerTemplateSnapshotArnProps <a name="NetworkSecurityManagerTemplateSnapshotArnProps" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps"></a>

Properties for building a template-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

const networkSecurityManagerTemplateSnapshotArnProps: network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps.property.templateId">templateId</a></code> | <code>string</code> | The TemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps.property.versionNumber">versionNumber</a></code> | <code>string</code> | The VersionNumber component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The TemplateId component of the ARN.

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

The VersionNumber component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityManagerActions <a name="NetworkSecurityManagerActions" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions"></a>

IAM action constants for the network-security-manager service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

new network_security_manager.NetworkSecurityManagerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetAdminAccount">actionGetAdminAccount</a></code> | <code>string</code> | [Read] network-security-manager:GetAdminAccount. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetDeployment">actionGetDeployment</a></code> | <code>string</code> | [Read] network-security-manager:GetDeployment. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] network-security-manager:GetPolicy. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetRule">actionGetRule</a></code> | <code>string</code> | [Read] network-security-manager:GetRule. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetScope">actionGetScope</a></code> | <code>string</code> | [Read] network-security-manager:GetScope. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetTemplate">actionGetTemplate</a></code> | <code>string</code> | [Read] network-security-manager:GetTemplate. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateDeployment">CreateDeployment</a></code> | <code>string</code> | [Write] network-security-manager:CreateDeployment. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateDeploymentSnapshot">CreateDeploymentSnapshot</a></code> | <code>string</code> | [Write] network-security-manager:CreateDeploymentSnapshot. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreatePolicy">CreatePolicy</a></code> | <code>string</code> | [Write] network-security-manager:CreatePolicy. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreatePolicySnapshot">CreatePolicySnapshot</a></code> | <code>string</code> | [Write] network-security-manager:CreatePolicySnapshot. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateRule">CreateRule</a></code> | <code>string</code> | [Write] network-security-manager:CreateRule. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateRuleSnapshot">CreateRuleSnapshot</a></code> | <code>string</code> | [Write] network-security-manager:CreateRuleSnapshot. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateScope">CreateScope</a></code> | <code>string</code> | [Write] network-security-manager:CreateScope. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateScopeSnapshot">CreateScopeSnapshot</a></code> | <code>string</code> | [Write] network-security-manager:CreateScopeSnapshot. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateTemplate">CreateTemplate</a></code> | <code>string</code> | [Write] network-security-manager:CreateTemplate. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateTemplateSnapshot">CreateTemplateSnapshot</a></code> | <code>string</code> | [Write] network-security-manager:CreateTemplateSnapshot. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeleteAdminAccount">DeleteAdminAccount</a></code> | <code>string</code> | [Write] network-security-manager:DeleteAdminAccount. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeleteDeployment">DeleteDeployment</a></code> | <code>string</code> | [Write] network-security-manager:DeleteDeployment. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeletePolicy">DeletePolicy</a></code> | <code>string</code> | [Write] network-security-manager:DeletePolicy. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeleteRule">DeleteRule</a></code> | <code>string</code> | [Write] network-security-manager:DeleteRule. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeleteScope">DeleteScope</a></code> | <code>string</code> | [Write] network-security-manager:DeleteScope. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string</code> | [Write] network-security-manager:DeleteTemplate. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.GenerateRuleConfiguration">GenerateRuleConfiguration</a></code> | <code>string</code> | [Write] network-security-manager:GenerateRuleConfiguration. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListAdminAccounts">ListAdminAccounts</a></code> | <code>string</code> | [List] network-security-manager:ListAdminAccounts. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListAggregateResourceSynchronizationStatuses">ListAggregateResourceSynchronizationStatuses</a></code> | <code>string</code> | [Read] network-security-manager:ListAggregateResourceSynchronizationStatuses. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListDeployments">ListDeployments</a></code> | <code>string</code> | [List] network-security-manager:ListDeployments. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListDeploymentSnapshots">ListDeploymentSnapshots</a></code> | <code>string</code> | [Read] network-security-manager:ListDeploymentSnapshots. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListPolicies">ListPolicies</a></code> | <code>string</code> | [List] network-security-manager:ListPolicies. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListPolicySnapshots">ListPolicySnapshots</a></code> | <code>string</code> | [Read] network-security-manager:ListPolicySnapshots. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListResourceAssociations">ListResourceAssociations</a></code> | <code>string</code> | [Read] network-security-manager:ListResourceAssociations. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListResourceSynchronizationStatuses">ListResourceSynchronizationStatuses</a></code> | <code>string</code> | [Read] network-security-manager:ListResourceSynchronizationStatuses. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListRules">ListRules</a></code> | <code>string</code> | [List] network-security-manager:ListRules. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListRuleSnapshots">ListRuleSnapshots</a></code> | <code>string</code> | [Read] network-security-manager:ListRuleSnapshots. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListScopes">ListScopes</a></code> | <code>string</code> | [List] network-security-manager:ListScopes. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListScopeSnapshots">ListScopeSnapshots</a></code> | <code>string</code> | [Read] network-security-manager:ListScopeSnapshots. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] network-security-manager:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListTemplates">ListTemplates</a></code> | <code>string</code> | [List] network-security-manager:ListTemplates. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListTemplateSnapshots">ListTemplateSnapshots</a></code> | <code>string</code> | [Read] network-security-manager:ListTemplateSnapshots. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.PutAdminAccount">PutAdminAccount</a></code> | <code>string</code> | [Write] network-security-manager:PutAdminAccount. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] network-security-manager:TagResource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] network-security-manager:UntagResource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UpdateDeployment">UpdateDeployment</a></code> | <code>string</code> | [Write] network-security-manager:UpdateDeployment. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UpdatePolicy">UpdatePolicy</a></code> | <code>string</code> | [Write] network-security-manager:UpdatePolicy. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UpdateRule">UpdateRule</a></code> | <code>string</code> | [Write] network-security-manager:UpdateRule. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UpdateScope">UpdateScope</a></code> | <code>string</code> | [Write] network-security-manager:UpdateScope. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string</code> | [Write] network-security-manager:UpdateTemplate. |

---

##### `actionGetAdminAccount`<sup>Required</sup> <a name="actionGetAdminAccount" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetAdminAccount"></a>

```typescript
public readonly actionGetAdminAccount: string;
```

- *Type:* string

[Read] network-security-manager:GetAdminAccount.

---

##### `actionGetDeployment`<sup>Required</sup> <a name="actionGetDeployment" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetDeployment"></a>

```typescript
public readonly actionGetDeployment: string;
```

- *Type:* string

[Read] network-security-manager:GetDeployment.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] network-security-manager:GetPolicy.

---

##### `actionGetRule`<sup>Required</sup> <a name="actionGetRule" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetRule"></a>

```typescript
public readonly actionGetRule: string;
```

- *Type:* string

[Read] network-security-manager:GetRule.

---

##### `actionGetScope`<sup>Required</sup> <a name="actionGetScope" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetScope"></a>

```typescript
public readonly actionGetScope: string;
```

- *Type:* string

[Read] network-security-manager:GetScope.

---

##### `actionGetTemplate`<sup>Required</sup> <a name="actionGetTemplate" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.actionGetTemplate"></a>

```typescript
public readonly actionGetTemplate: string;
```

- *Type:* string

[Read] network-security-manager:GetTemplate.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string;
```

- *Type:* string

[Write] network-security-manager:CreateDeployment.

---

##### `CreateDeploymentSnapshot`<sup>Required</sup> <a name="CreateDeploymentSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateDeploymentSnapshot"></a>

```typescript
public readonly CreateDeploymentSnapshot: string;
```

- *Type:* string

[Write] network-security-manager:CreateDeploymentSnapshot.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string;
```

- *Type:* string

[Write] network-security-manager:CreatePolicy.

---

##### `CreatePolicySnapshot`<sup>Required</sup> <a name="CreatePolicySnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreatePolicySnapshot"></a>

```typescript
public readonly CreatePolicySnapshot: string;
```

- *Type:* string

[Write] network-security-manager:CreatePolicySnapshot.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateRule"></a>

```typescript
public readonly CreateRule: string;
```

- *Type:* string

[Write] network-security-manager:CreateRule.

---

##### `CreateRuleSnapshot`<sup>Required</sup> <a name="CreateRuleSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateRuleSnapshot"></a>

```typescript
public readonly CreateRuleSnapshot: string;
```

- *Type:* string

[Write] network-security-manager:CreateRuleSnapshot.

---

##### `CreateScope`<sup>Required</sup> <a name="CreateScope" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateScope"></a>

```typescript
public readonly CreateScope: string;
```

- *Type:* string

[Write] network-security-manager:CreateScope.

---

##### `CreateScopeSnapshot`<sup>Required</sup> <a name="CreateScopeSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateScopeSnapshot"></a>

```typescript
public readonly CreateScopeSnapshot: string;
```

- *Type:* string

[Write] network-security-manager:CreateScopeSnapshot.

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string;
```

- *Type:* string

[Write] network-security-manager:CreateTemplate.

---

##### `CreateTemplateSnapshot`<sup>Required</sup> <a name="CreateTemplateSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.CreateTemplateSnapshot"></a>

```typescript
public readonly CreateTemplateSnapshot: string;
```

- *Type:* string

[Write] network-security-manager:CreateTemplateSnapshot.

---

##### `DeleteAdminAccount`<sup>Required</sup> <a name="DeleteAdminAccount" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeleteAdminAccount"></a>

```typescript
public readonly DeleteAdminAccount: string;
```

- *Type:* string

[Write] network-security-manager:DeleteAdminAccount.

---

##### `DeleteDeployment`<sup>Required</sup> <a name="DeleteDeployment" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeleteDeployment"></a>

```typescript
public readonly DeleteDeployment: string;
```

- *Type:* string

[Write] network-security-manager:DeleteDeployment.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string;
```

- *Type:* string

[Write] network-security-manager:DeletePolicy.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string;
```

- *Type:* string

[Write] network-security-manager:DeleteRule.

---

##### `DeleteScope`<sup>Required</sup> <a name="DeleteScope" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeleteScope"></a>

```typescript
public readonly DeleteScope: string;
```

- *Type:* string

[Write] network-security-manager:DeleteScope.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string;
```

- *Type:* string

[Write] network-security-manager:DeleteTemplate.

---

##### `GenerateRuleConfiguration`<sup>Required</sup> <a name="GenerateRuleConfiguration" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.GenerateRuleConfiguration"></a>

```typescript
public readonly GenerateRuleConfiguration: string;
```

- *Type:* string

[Write] network-security-manager:GenerateRuleConfiguration.

---

##### `ListAdminAccounts`<sup>Required</sup> <a name="ListAdminAccounts" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListAdminAccounts"></a>

```typescript
public readonly ListAdminAccounts: string;
```

- *Type:* string

[List] network-security-manager:ListAdminAccounts.

---

##### `ListAggregateResourceSynchronizationStatuses`<sup>Required</sup> <a name="ListAggregateResourceSynchronizationStatuses" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListAggregateResourceSynchronizationStatuses"></a>

```typescript
public readonly ListAggregateResourceSynchronizationStatuses: string;
```

- *Type:* string

[Read] network-security-manager:ListAggregateResourceSynchronizationStatuses.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string;
```

- *Type:* string

[List] network-security-manager:ListDeployments.

---

##### `ListDeploymentSnapshots`<sup>Required</sup> <a name="ListDeploymentSnapshots" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListDeploymentSnapshots"></a>

```typescript
public readonly ListDeploymentSnapshots: string;
```

- *Type:* string

[Read] network-security-manager:ListDeploymentSnapshots.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string;
```

- *Type:* string

[List] network-security-manager:ListPolicies.

---

##### `ListPolicySnapshots`<sup>Required</sup> <a name="ListPolicySnapshots" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListPolicySnapshots"></a>

```typescript
public readonly ListPolicySnapshots: string;
```

- *Type:* string

[Read] network-security-manager:ListPolicySnapshots.

---

##### `ListResourceAssociations`<sup>Required</sup> <a name="ListResourceAssociations" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListResourceAssociations"></a>

```typescript
public readonly ListResourceAssociations: string;
```

- *Type:* string

[Read] network-security-manager:ListResourceAssociations.

---

##### `ListResourceSynchronizationStatuses`<sup>Required</sup> <a name="ListResourceSynchronizationStatuses" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListResourceSynchronizationStatuses"></a>

```typescript
public readonly ListResourceSynchronizationStatuses: string;
```

- *Type:* string

[Read] network-security-manager:ListResourceSynchronizationStatuses.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListRules"></a>

```typescript
public readonly ListRules: string;
```

- *Type:* string

[List] network-security-manager:ListRules.

---

##### `ListRuleSnapshots`<sup>Required</sup> <a name="ListRuleSnapshots" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListRuleSnapshots"></a>

```typescript
public readonly ListRuleSnapshots: string;
```

- *Type:* string

[Read] network-security-manager:ListRuleSnapshots.

---

##### `ListScopes`<sup>Required</sup> <a name="ListScopes" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListScopes"></a>

```typescript
public readonly ListScopes: string;
```

- *Type:* string

[List] network-security-manager:ListScopes.

---

##### `ListScopeSnapshots`<sup>Required</sup> <a name="ListScopeSnapshots" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListScopeSnapshots"></a>

```typescript
public readonly ListScopeSnapshots: string;
```

- *Type:* string

[Read] network-security-manager:ListScopeSnapshots.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] network-security-manager:ListTagsForResource.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string;
```

- *Type:* string

[List] network-security-manager:ListTemplates.

---

##### `ListTemplateSnapshots`<sup>Required</sup> <a name="ListTemplateSnapshots" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.ListTemplateSnapshots"></a>

```typescript
public readonly ListTemplateSnapshots: string;
```

- *Type:* string

[Read] network-security-manager:ListTemplateSnapshots.

---

##### `PutAdminAccount`<sup>Required</sup> <a name="PutAdminAccount" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.PutAdminAccount"></a>

```typescript
public readonly PutAdminAccount: string;
```

- *Type:* string

[Write] network-security-manager:PutAdminAccount.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] network-security-manager:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] network-security-manager:UntagResource.

---

##### `UpdateDeployment`<sup>Required</sup> <a name="UpdateDeployment" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UpdateDeployment"></a>

```typescript
public readonly UpdateDeployment: string;
```

- *Type:* string

[Write] network-security-manager:UpdateDeployment.

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UpdatePolicy"></a>

```typescript
public readonly UpdatePolicy: string;
```

- *Type:* string

[Write] network-security-manager:UpdatePolicy.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string;
```

- *Type:* string

[Write] network-security-manager:UpdateRule.

---

##### `UpdateScope`<sup>Required</sup> <a name="UpdateScope" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UpdateScope"></a>

```typescript
public readonly UpdateScope: string;
```

- *Type:* string

[Write] network-security-manager:UpdateScope.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerActions.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string;
```

- *Type:* string

[Write] network-security-manager:UpdateTemplate.

---

### NetworkSecurityManagerConditions <a name="NetworkSecurityManagerConditions" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions"></a>

Condition key constants and builders for network-security-manager.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

new network_security_manager.NetworkSecurityManagerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.requestTag"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.resourceTag"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.tagKeys"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateDeploymentConditionKeys">CreateDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeployment action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateDeploymentSnapshotConditionKeys">CreateDeploymentSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeploymentSnapshot action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreatePolicyConditionKeys">CreatePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePolicy action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreatePolicySnapshotConditionKeys">CreatePolicySnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePolicySnapshot action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateRuleConditionKeys">CreateRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRule action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateRuleSnapshotConditionKeys">CreateRuleSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRuleSnapshot action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateScopeConditionKeys">CreateScopeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScope action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateScopeSnapshotConditionKeys">CreateScopeSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScopeSnapshot action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateTemplateConditionKeys">CreateTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTemplate action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateTemplateSnapshotConditionKeys">CreateTemplateSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTemplateSnapshot action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.ListResourceAssociationsConditionKeys">ListResourceAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListResourceAssociations action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.ListResourceSynchronizationStatusesConditionKeys">ListResourceSynchronizationStatusesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListResourceSynchronizationStatuses action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDeploymentConditionKeys`<sup>Required</sup> <a name="CreateDeploymentConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateDeploymentConditionKeys"></a>

```typescript
public readonly CreateDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeployment action.

---

##### `CreateDeploymentSnapshotConditionKeys`<sup>Required</sup> <a name="CreateDeploymentSnapshotConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateDeploymentSnapshotConditionKeys"></a>

```typescript
public readonly CreateDeploymentSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeploymentSnapshot action.

---

##### `CreatePolicyConditionKeys`<sup>Required</sup> <a name="CreatePolicyConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreatePolicyConditionKeys"></a>

```typescript
public readonly CreatePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePolicy action.

---

##### `CreatePolicySnapshotConditionKeys`<sup>Required</sup> <a name="CreatePolicySnapshotConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreatePolicySnapshotConditionKeys"></a>

```typescript
public readonly CreatePolicySnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePolicySnapshot action.

---

##### `CreateRuleConditionKeys`<sup>Required</sup> <a name="CreateRuleConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateRuleConditionKeys"></a>

```typescript
public readonly CreateRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRule action.

---

##### `CreateRuleSnapshotConditionKeys`<sup>Required</sup> <a name="CreateRuleSnapshotConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateRuleSnapshotConditionKeys"></a>

```typescript
public readonly CreateRuleSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRuleSnapshot action.

---

##### `CreateScopeConditionKeys`<sup>Required</sup> <a name="CreateScopeConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateScopeConditionKeys"></a>

```typescript
public readonly CreateScopeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScope action.

---

##### `CreateScopeSnapshotConditionKeys`<sup>Required</sup> <a name="CreateScopeSnapshotConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateScopeSnapshotConditionKeys"></a>

```typescript
public readonly CreateScopeSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScopeSnapshot action.

---

##### `CreateTemplateConditionKeys`<sup>Required</sup> <a name="CreateTemplateConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateTemplateConditionKeys"></a>

```typescript
public readonly CreateTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTemplate action.

---

##### `CreateTemplateSnapshotConditionKeys`<sup>Required</sup> <a name="CreateTemplateSnapshotConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.CreateTemplateSnapshotConditionKeys"></a>

```typescript
public readonly CreateTemplateSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTemplateSnapshot action.

---

##### `ListResourceAssociationsConditionKeys`<sup>Required</sup> <a name="ListResourceAssociationsConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.ListResourceAssociationsConditionKeys"></a>

```typescript
public readonly ListResourceAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListResourceAssociations action.

---

##### `ListResourceSynchronizationStatusesConditionKeys`<sup>Required</sup> <a name="ListResourceSynchronizationStatusesConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.ListResourceSynchronizationStatusesConditionKeys"></a>

```typescript
public readonly ListResourceSynchronizationStatusesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListResourceSynchronizationStatuses action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### NetworkSecurityManagerOperations <a name="NetworkSecurityManagerOperations" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations"></a>

API operation to required IAM actions mapping for network-security-manager.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

new network_security_manager.NetworkSecurityManagerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateDeployment">CreateDeployment</a></code> | <code>string[]</code> | IAM actions required for the CreateDeployment API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateDeploymentSnapshot">CreateDeploymentSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateDeploymentSnapshot API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreatePolicy">CreatePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicy API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreatePolicySnapshot">CreatePolicySnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicySnapshot API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateRule">CreateRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRule API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateRuleSnapshot">CreateRuleSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateRuleSnapshot API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateScope">CreateScope</a></code> | <code>string[]</code> | IAM actions required for the CreateScope API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateScopeSnapshot">CreateScopeSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateScopeSnapshot API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateTemplate">CreateTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateTemplate API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateTemplateSnapshot">CreateTemplateSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateTemplateSnapshot API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeleteAdminAccount">DeleteAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the DeleteAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeleteDeployment">DeleteDeployment</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeployment API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeletePolicy">DeletePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicy API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeleteRule">DeleteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRule API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeleteScope">DeleteScope</a></code> | <code>string[]</code> | IAM actions required for the DeleteScope API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteTemplate API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.GenerateRuleConfiguration">GenerateRuleConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GenerateRuleConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListAdminAccounts">ListAdminAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListAdminAccounts API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListAggregateResourceSynchronizationStatuses">ListAggregateResourceSynchronizationStatuses</a></code> | <code>string[]</code> | IAM actions required for the ListAggregateResourceSynchronizationStatuses API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListDeployments">ListDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListDeployments API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListDeploymentSnapshots">ListDeploymentSnapshots</a></code> | <code>string[]</code> | IAM actions required for the ListDeploymentSnapshots API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListPolicies">ListPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListPolicies API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListPolicySnapshots">ListPolicySnapshots</a></code> | <code>string[]</code> | IAM actions required for the ListPolicySnapshots API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListResourceAssociations">ListResourceAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListResourceAssociations API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListResourceSynchronizationStatuses">ListResourceSynchronizationStatuses</a></code> | <code>string[]</code> | IAM actions required for the ListResourceSynchronizationStatuses API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListRules">ListRules</a></code> | <code>string[]</code> | IAM actions required for the ListRules API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListRuleSnapshots">ListRuleSnapshots</a></code> | <code>string[]</code> | IAM actions required for the ListRuleSnapshots API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListScopes">ListScopes</a></code> | <code>string[]</code> | IAM actions required for the ListScopes API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListScopeSnapshots">ListScopeSnapshots</a></code> | <code>string[]</code> | IAM actions required for the ListScopeSnapshots API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListTemplates">ListTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListTemplates API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListTemplateSnapshots">ListTemplateSnapshots</a></code> | <code>string[]</code> | IAM actions required for the ListTemplateSnapshots API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetAdminAccount">opGetAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the GetAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetDeployment">opGetDeployment</a></code> | <code>string[]</code> | IAM actions required for the GetDeployment API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetRule">opGetRule</a></code> | <code>string[]</code> | IAM actions required for the GetRule API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetScope">opGetScope</a></code> | <code>string[]</code> | IAM actions required for the GetScope API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetTemplate">opGetTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetTemplate API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.PutAdminAccount">PutAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the PutAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UpdateDeployment">UpdateDeployment</a></code> | <code>string[]</code> | IAM actions required for the UpdateDeployment API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UpdatePolicy">UpdatePolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdatePolicy API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UpdateRule">UpdateRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateRule API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UpdateScope">UpdateScope</a></code> | <code>string[]</code> | IAM actions required for the UpdateScope API call. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateTemplate API call. |

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeployment API call.

---

##### `CreateDeploymentSnapshot`<sup>Required</sup> <a name="CreateDeploymentSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateDeploymentSnapshot"></a>

```typescript
public readonly CreateDeploymentSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeploymentSnapshot API call.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicy API call.

---

##### `CreatePolicySnapshot`<sup>Required</sup> <a name="CreatePolicySnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreatePolicySnapshot"></a>

```typescript
public readonly CreatePolicySnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicySnapshot API call.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateRule"></a>

```typescript
public readonly CreateRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRule API call.

---

##### `CreateRuleSnapshot`<sup>Required</sup> <a name="CreateRuleSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateRuleSnapshot"></a>

```typescript
public readonly CreateRuleSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateRuleSnapshot API call.

---

##### `CreateScope`<sup>Required</sup> <a name="CreateScope" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateScope"></a>

```typescript
public readonly CreateScope: string[];
```

- *Type:* string[]

IAM actions required for the CreateScope API call.

---

##### `CreateScopeSnapshot`<sup>Required</sup> <a name="CreateScopeSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateScopeSnapshot"></a>

```typescript
public readonly CreateScopeSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateScopeSnapshot API call.

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateTemplate API call.

---

##### `CreateTemplateSnapshot`<sup>Required</sup> <a name="CreateTemplateSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.CreateTemplateSnapshot"></a>

```typescript
public readonly CreateTemplateSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateTemplateSnapshot API call.

---

##### `DeleteAdminAccount`<sup>Required</sup> <a name="DeleteAdminAccount" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeleteAdminAccount"></a>

```typescript
public readonly DeleteAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAdminAccount API call.

---

##### `DeleteDeployment`<sup>Required</sup> <a name="DeleteDeployment" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeleteDeployment"></a>

```typescript
public readonly DeleteDeployment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeployment API call.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicy API call.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRule API call.

---

##### `DeleteScope`<sup>Required</sup> <a name="DeleteScope" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeleteScope"></a>

```typescript
public readonly DeleteScope: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScope API call.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTemplate API call.

---

##### `GenerateRuleConfiguration`<sup>Required</sup> <a name="GenerateRuleConfiguration" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.GenerateRuleConfiguration"></a>

```typescript
public readonly GenerateRuleConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GenerateRuleConfiguration API call.

---

##### `ListAdminAccounts`<sup>Required</sup> <a name="ListAdminAccounts" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListAdminAccounts"></a>

```typescript
public readonly ListAdminAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListAdminAccounts API call.

---

##### `ListAggregateResourceSynchronizationStatuses`<sup>Required</sup> <a name="ListAggregateResourceSynchronizationStatuses" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListAggregateResourceSynchronizationStatuses"></a>

```typescript
public readonly ListAggregateResourceSynchronizationStatuses: string[];
```

- *Type:* string[]

IAM actions required for the ListAggregateResourceSynchronizationStatuses API call.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListDeployments API call.

---

##### `ListDeploymentSnapshots`<sup>Required</sup> <a name="ListDeploymentSnapshots" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListDeploymentSnapshots"></a>

```typescript
public readonly ListDeploymentSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the ListDeploymentSnapshots API call.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicies API call.

---

##### `ListPolicySnapshots`<sup>Required</sup> <a name="ListPolicySnapshots" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListPolicySnapshots"></a>

```typescript
public readonly ListPolicySnapshots: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicySnapshots API call.

---

##### `ListResourceAssociations`<sup>Required</sup> <a name="ListResourceAssociations" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListResourceAssociations"></a>

```typescript
public readonly ListResourceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceAssociations API call.

---

##### `ListResourceSynchronizationStatuses`<sup>Required</sup> <a name="ListResourceSynchronizationStatuses" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListResourceSynchronizationStatuses"></a>

```typescript
public readonly ListResourceSynchronizationStatuses: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceSynchronizationStatuses API call.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListRules"></a>

```typescript
public readonly ListRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRules API call.

---

##### `ListRuleSnapshots`<sup>Required</sup> <a name="ListRuleSnapshots" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListRuleSnapshots"></a>

```typescript
public readonly ListRuleSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the ListRuleSnapshots API call.

---

##### `ListScopes`<sup>Required</sup> <a name="ListScopes" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListScopes"></a>

```typescript
public readonly ListScopes: string[];
```

- *Type:* string[]

IAM actions required for the ListScopes API call.

---

##### `ListScopeSnapshots`<sup>Required</sup> <a name="ListScopeSnapshots" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListScopeSnapshots"></a>

```typescript
public readonly ListScopeSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the ListScopeSnapshots API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplates API call.

---

##### `ListTemplateSnapshots`<sup>Required</sup> <a name="ListTemplateSnapshots" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.ListTemplateSnapshots"></a>

```typescript
public readonly ListTemplateSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplateSnapshots API call.

---

##### `opGetAdminAccount`<sup>Required</sup> <a name="opGetAdminAccount" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetAdminAccount"></a>

```typescript
public readonly opGetAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetAdminAccount API call.

---

##### `opGetDeployment`<sup>Required</sup> <a name="opGetDeployment" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetDeployment"></a>

```typescript
public readonly opGetDeployment: string[];
```

- *Type:* string[]

IAM actions required for the GetDeployment API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetRule`<sup>Required</sup> <a name="opGetRule" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetRule"></a>

```typescript
public readonly opGetRule: string[];
```

- *Type:* string[]

IAM actions required for the GetRule API call.

---

##### `opGetScope`<sup>Required</sup> <a name="opGetScope" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetScope"></a>

```typescript
public readonly opGetScope: string[];
```

- *Type:* string[]

IAM actions required for the GetScope API call.

---

##### `opGetTemplate`<sup>Required</sup> <a name="opGetTemplate" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.opGetTemplate"></a>

```typescript
public readonly opGetTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplate API call.

---

##### `PutAdminAccount`<sup>Required</sup> <a name="PutAdminAccount" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.PutAdminAccount"></a>

```typescript
public readonly PutAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the PutAdminAccount API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDeployment`<sup>Required</sup> <a name="UpdateDeployment" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UpdateDeployment"></a>

```typescript
public readonly UpdateDeployment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDeployment API call.

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UpdatePolicy"></a>

```typescript
public readonly UpdatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePolicy API call.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRule API call.

---

##### `UpdateScope`<sup>Required</sup> <a name="UpdateScope" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UpdateScope"></a>

```typescript
public readonly UpdateScope: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScope API call.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerOperations.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTemplate API call.

---

### NetworkSecurityManagerResources <a name="NetworkSecurityManagerResources" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources"></a>

ARN builders, validators, and parsers for network-security-manager resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.Initializer"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

new network_security_manager.NetworkSecurityManagerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.deployment">deployment</a></code> | Builds an ARN for the deployment resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.deploymentSnapshot">deploymentSnapshot</a></code> | Builds an ARN for the deployment-snapshot resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidDeploymentArn">isValidDeploymentArn</a></code> | Validates whether a string is a valid ARN for the deployment resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidDeploymentSnapshotArn">isValidDeploymentSnapshotArn</a></code> | Validates whether a string is a valid ARN for the deployment-snapshot resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidPolicyArn">isValidPolicyArn</a></code> | Validates whether a string is a valid ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidPolicySnapshotArn">isValidPolicySnapshotArn</a></code> | Validates whether a string is a valid ARN for the policy-snapshot resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidRuleArn">isValidRuleArn</a></code> | Validates whether a string is a valid ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidRuleSnapshotArn">isValidRuleSnapshotArn</a></code> | Validates whether a string is a valid ARN for the rule-snapshot resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidScopeArn">isValidScopeArn</a></code> | Validates whether a string is a valid ARN for the scope resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidScopeSnapshotArn">isValidScopeSnapshotArn</a></code> | Validates whether a string is a valid ARN for the scope-snapshot resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidTemplateArn">isValidTemplateArn</a></code> | Validates whether a string is a valid ARN for the template resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidTemplateSnapshotArn">isValidTemplateSnapshotArn</a></code> | Validates whether a string is a valid ARN for the template-snapshot resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseDeploymentArn">parseDeploymentArn</a></code> | Parses a deployment ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseDeploymentSnapshotArn">parseDeploymentSnapshotArn</a></code> | Parses a deployment-snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parsePolicyArn">parsePolicyArn</a></code> | Parses a policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parsePolicySnapshotArn">parsePolicySnapshotArn</a></code> | Parses a policy-snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseRuleArn">parseRuleArn</a></code> | Parses a rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseRuleSnapshotArn">parseRuleSnapshotArn</a></code> | Parses a rule-snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseScopeArn">parseScopeArn</a></code> | Parses a scope ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseScopeSnapshotArn">parseScopeSnapshotArn</a></code> | Parses a scope-snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseTemplateArn">parseTemplateArn</a></code> | Parses a template ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseTemplateSnapshotArn">parseTemplateSnapshotArn</a></code> | Parses a template-snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.policy">policy</a></code> | Builds an ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.policySnapshot">policySnapshot</a></code> | Builds an ARN for the policy-snapshot resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.rule">rule</a></code> | Builds an ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.ruleSnapshot">ruleSnapshot</a></code> | Builds an ARN for the rule-snapshot resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.scope">scope</a></code> | Builds an ARN for the scope resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.scopeSnapshot">scopeSnapshot</a></code> | Builds an ARN for the scope-snapshot resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.template">template</a></code> | Builds an ARN for the template resource. |
| <code><a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.templateSnapshot">templateSnapshot</a></code> | Builds an ARN for the template-snapshot resource. |

---

##### `deployment` <a name="deployment" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.deployment"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.deployment(props: NetworkSecurityManagerDeploymentArnProps)
```

Builds an ARN for the deployment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.deployment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentArnProps">NetworkSecurityManagerDeploymentArnProps</a>

---

##### `deploymentSnapshot` <a name="deploymentSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.deploymentSnapshot"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.deploymentSnapshot(props: NetworkSecurityManagerDeploymentSnapshotArnProps)
```

Builds an ARN for the deployment-snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.deploymentSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerDeploymentSnapshotArnProps">NetworkSecurityManagerDeploymentSnapshotArnProps</a>

---

##### `isValidDeploymentArn` <a name="isValidDeploymentArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidDeploymentArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.isValidDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the deployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentSnapshotArn` <a name="isValidDeploymentSnapshotArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidDeploymentSnapshotArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.isValidDeploymentSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the deployment-snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidDeploymentSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPolicyArn` <a name="isValidPolicyArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidPolicyArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.isValidPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPolicySnapshotArn` <a name="isValidPolicySnapshotArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidPolicySnapshotArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.isValidPolicySnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the policy-snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidPolicySnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuleArn` <a name="isValidRuleArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidRuleArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.isValidRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuleSnapshotArn` <a name="isValidRuleSnapshotArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidRuleSnapshotArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.isValidRuleSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the rule-snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidRuleSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScopeArn` <a name="isValidScopeArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidScopeArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.isValidScopeArn(arn: string)
```

Validates whether a string is a valid ARN for the scope resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidScopeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScopeSnapshotArn` <a name="isValidScopeSnapshotArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidScopeSnapshotArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.isValidScopeSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the scope-snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidScopeSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTemplateArn` <a name="isValidTemplateArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidTemplateArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.isValidTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTemplateSnapshotArn` <a name="isValidTemplateSnapshotArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidTemplateSnapshotArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.isValidTemplateSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the template-snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.isValidTemplateSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentArn` <a name="parseDeploymentArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseDeploymentArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.parseDeploymentArn(arn: string)
```

Parses a deployment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentSnapshotArn` <a name="parseDeploymentSnapshotArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseDeploymentSnapshotArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.parseDeploymentSnapshotArn(arn: string)
```

Parses a deployment-snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseDeploymentSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyArn` <a name="parsePolicyArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parsePolicyArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.parsePolicyArn(arn: string)
```

Parses a policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parsePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicySnapshotArn` <a name="parsePolicySnapshotArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parsePolicySnapshotArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.parsePolicySnapshotArn(arn: string)
```

Parses a policy-snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parsePolicySnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuleArn` <a name="parseRuleArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseRuleArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.parseRuleArn(arn: string)
```

Parses a rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuleSnapshotArn` <a name="parseRuleSnapshotArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseRuleSnapshotArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.parseRuleSnapshotArn(arn: string)
```

Parses a rule-snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseRuleSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScopeArn` <a name="parseScopeArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseScopeArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.parseScopeArn(arn: string)
```

Parses a scope ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseScopeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScopeSnapshotArn` <a name="parseScopeSnapshotArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseScopeSnapshotArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.parseScopeSnapshotArn(arn: string)
```

Parses a scope-snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseScopeSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTemplateArn` <a name="parseTemplateArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseTemplateArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.parseTemplateArn(arn: string)
```

Parses a template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTemplateSnapshotArn` <a name="parseTemplateSnapshotArn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseTemplateSnapshotArn"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.parseTemplateSnapshotArn(arn: string)
```

Parses a template-snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.parseTemplateSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `policy` <a name="policy" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.policy"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.policy(props: NetworkSecurityManagerPolicyArnProps)
```

Builds an ARN for the policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.policy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicyArnProps">NetworkSecurityManagerPolicyArnProps</a>

---

##### `policySnapshot` <a name="policySnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.policySnapshot"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.policySnapshot(props: NetworkSecurityManagerPolicySnapshotArnProps)
```

Builds an ARN for the policy-snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.policySnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerPolicySnapshotArnProps">NetworkSecurityManagerPolicySnapshotArnProps</a>

---

##### `rule` <a name="rule" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.rule"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.rule(props: NetworkSecurityManagerRuleArnProps)
```

Builds an ARN for the rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.rule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleArnProps">NetworkSecurityManagerRuleArnProps</a>

---

##### `ruleSnapshot` <a name="ruleSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.ruleSnapshot"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.ruleSnapshot(props: NetworkSecurityManagerRuleSnapshotArnProps)
```

Builds an ARN for the rule-snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.ruleSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerRuleSnapshotArnProps">NetworkSecurityManagerRuleSnapshotArnProps</a>

---

##### `scope` <a name="scope" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.scope"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.scope(props: NetworkSecurityManagerScopeArnProps)
```

Builds an ARN for the scope resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.scope.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeArnProps">NetworkSecurityManagerScopeArnProps</a>

---

##### `scopeSnapshot` <a name="scopeSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.scopeSnapshot"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.scopeSnapshot(props: NetworkSecurityManagerScopeSnapshotArnProps)
```

Builds an ARN for the scope-snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.scopeSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerScopeSnapshotArnProps">NetworkSecurityManagerScopeSnapshotArnProps</a>

---

##### `template` <a name="template" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.template"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.template(props: NetworkSecurityManagerTemplateArnProps)
```

Builds an ARN for the template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.template.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateArnProps">NetworkSecurityManagerTemplateArnProps</a>

---

##### `templateSnapshot` <a name="templateSnapshot" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.templateSnapshot"></a>

```typescript
import { network_security_manager } from '@cdk_utils/iam'

network_security_manager.NetworkSecurityManagerResources.templateSnapshot(props: NetworkSecurityManagerTemplateSnapshotArnProps)
```

Builds an ARN for the template-snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_security_manager.NetworkSecurityManagerResources.templateSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_security_manager.NetworkSecurityManagerTemplateSnapshotArnProps">NetworkSecurityManagerTemplateSnapshotArnProps</a>

---




