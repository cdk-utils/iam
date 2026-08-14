# `eks_auth` Submodule <a name="`eks_auth` Submodule" id="@cdk_utils/iam.eks_auth"></a>


## Structs <a name="Structs" id="Structs"></a>

### EKSAuthClusterArnComponents <a name="EKSAuthClusterArnComponents" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnComponents.Initializer"></a>

```typescript
import { eks_auth } from '@cdk_utils/iam'

const eKSAuthClusterArnComponents: eks_auth.EKSAuthClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthClusterArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EKSAuthClusterArnProps <a name="EKSAuthClusterArnProps" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnProps.Initializer"></a>

```typescript
import { eks_auth } from '@cdk_utils/iam'

const eKSAuthClusterArnProps: eks_auth.EKSAuthClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthClusterArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks_auth.EKSAuthClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EKSAuthActions <a name="EKSAuthActions" id="@cdk_utils/iam.eks_auth.EKSAuthActions"></a>

IAM action constants for the eks-auth service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eks_auth.EKSAuthActions.Initializer"></a>

```typescript
import { eks_auth } from '@cdk_utils/iam'

new eks_auth.EKSAuthActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthActions.property.AssumeRoleForPodIdentity">AssumeRoleForPodIdentity</a></code> | <code>string</code> | [Read] eks-auth:AssumeRoleForPodIdentity. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.eks_auth.EKSAuthActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.eks_auth.EKSAuthActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.eks_auth.EKSAuthActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.eks_auth.EKSAuthActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.eks_auth.EKSAuthActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssumeRoleForPodIdentity`<sup>Required</sup> <a name="AssumeRoleForPodIdentity" id="@cdk_utils/iam.eks_auth.EKSAuthActions.property.AssumeRoleForPodIdentity"></a>

```typescript
public readonly AssumeRoleForPodIdentity: string;
```

- *Type:* string

[Read] eks-auth:AssumeRoleForPodIdentity.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.eks_auth.EKSAuthActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### EKSAuthConditions <a name="EKSAuthConditions" id="@cdk_utils/iam.eks_auth.EKSAuthConditions"></a>

Condition key constants and builders for eks-auth.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eks_auth.EKSAuthConditions.Initializer"></a>

```typescript
import { eks_auth } from '@cdk_utils/iam'

new eks_auth.EKSAuthConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.eks_auth.EKSAuthConditions.resourceTag"></a>

```typescript
import { eks_auth } from '@cdk_utils/iam'

eks_auth.EKSAuthConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks_auth.EKSAuthConditions.resourceTag.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.eks_auth.EKSAuthConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

### EKSAuthOperations <a name="EKSAuthOperations" id="@cdk_utils/iam.eks_auth.EKSAuthOperations"></a>

API operation to required IAM actions mapping for eks-auth.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eks_auth.EKSAuthOperations.Initializer"></a>

```typescript
import { eks_auth } from '@cdk_utils/iam'

new eks_auth.EKSAuthOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthOperations.property.AssumeRoleForPodIdentity">AssumeRoleForPodIdentity</a></code> | <code>string[]</code> | IAM actions required for the AssumeRoleForPodIdentity API call. |

---

##### `AssumeRoleForPodIdentity`<sup>Required</sup> <a name="AssumeRoleForPodIdentity" id="@cdk_utils/iam.eks_auth.EKSAuthOperations.property.AssumeRoleForPodIdentity"></a>

```typescript
public readonly AssumeRoleForPodIdentity: string[];
```

- *Type:* string[]

IAM actions required for the AssumeRoleForPodIdentity API call.

---

### EKSAuthResources <a name="EKSAuthResources" id="@cdk_utils/iam.eks_auth.EKSAuthResources"></a>

ARN builders, validators, and parsers for eks-auth resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eks_auth.EKSAuthResources.Initializer"></a>

```typescript
import { eks_auth } from '@cdk_utils/iam'

new eks_auth.EKSAuthResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.eks_auth.EKSAuthResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.eks_auth.EKSAuthResources.cluster"></a>

```typescript
import { eks_auth } from '@cdk_utils/iam'

eks_auth.EKSAuthResources.cluster(props: EKSAuthClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks_auth.EKSAuthResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks_auth.EKSAuthClusterArnProps">EKSAuthClusterArnProps</a>

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.eks_auth.EKSAuthResources.isValidClusterArn"></a>

```typescript
import { eks_auth } from '@cdk_utils/iam'

eks_auth.EKSAuthResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks_auth.EKSAuthResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.eks_auth.EKSAuthResources.parseClusterArn"></a>

```typescript
import { eks_auth } from '@cdk_utils/iam'

eks_auth.EKSAuthResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks_auth.EKSAuthResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---




