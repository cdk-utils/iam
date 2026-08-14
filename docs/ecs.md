# `ecs` Submodule <a name="`ecs` Submodule" id="@cdk_utils/iam.ecs"></a>


## Structs <a name="Structs" id="Structs"></a>

### ECSCapacityProviderArnComponents <a name="ECSCapacityProviderArnComponents" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnComponents"></a>

Parsed components of a capacity-provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSCapacityProviderArnComponents: ecs.ECSCapacityProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSCapacityProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSCapacityProviderArnComponents.property.capacityProviderName">capacityProviderName</a></code> | <code>string</code> | The CapacityProviderName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSCapacityProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSCapacityProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `capacityProviderName`<sup>Required</sup> <a name="capacityProviderName" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnComponents.property.capacityProviderName"></a>

```typescript
public readonly capacityProviderName: string;
```

- *Type:* string

The CapacityProviderName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ECSCapacityProviderArnProps <a name="ECSCapacityProviderArnProps" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnProps"></a>

Properties for building a capacity-provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSCapacityProviderArnProps: ecs.ECSCapacityProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSCapacityProviderArnProps.property.capacityProviderName">capacityProviderName</a></code> | <code>string</code> | The CapacityProviderName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSCapacityProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSCapacityProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSCapacityProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `capacityProviderName`<sup>Required</sup> <a name="capacityProviderName" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnProps.property.capacityProviderName"></a>

```typescript
public readonly capacityProviderName: string;
```

- *Type:* string

The CapacityProviderName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSCapacityProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSClusterArnComponents <a name="ECSClusterArnComponents" id="@cdk_utils/iam.ecs.ECSClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSClusterArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSClusterArnComponents: ecs.ECSClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSClusterArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSClusterArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ECSClusterArnProps <a name="ECSClusterArnProps" id="@cdk_utils/iam.ecs.ECSClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSClusterArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSClusterArnProps: ecs.ECSClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSClusterArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSClusterArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSContainerInstanceArnComponents <a name="ECSContainerInstanceArnComponents" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents"></a>

Parsed components of a container-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSContainerInstanceArnComponents: ecs.ECSContainerInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents.property.containerInstanceId">containerInstanceId</a></code> | <code>string</code> | The ContainerInstanceId component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `containerInstanceId`<sup>Required</sup> <a name="containerInstanceId" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents.property.containerInstanceId"></a>

```typescript
public readonly containerInstanceId: string;
```

- *Type:* string

The ContainerInstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ECSContainerInstanceArnProps <a name="ECSContainerInstanceArnProps" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnProps"></a>

Properties for building a container-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSContainerInstanceArnProps: ecs.ECSContainerInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSContainerInstanceArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSContainerInstanceArnProps.property.containerInstanceId">containerInstanceId</a></code> | <code>string</code> | The ContainerInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSContainerInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSContainerInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSContainerInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `containerInstanceId`<sup>Required</sup> <a name="containerInstanceId" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnProps.property.containerInstanceId"></a>

```typescript
public readonly containerInstanceId: string;
```

- *Type:* string

The ContainerInstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSContainerInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSDaemonArnComponents <a name="ECSDaemonArnComponents" id="@cdk_utils/iam.ecs.ECSDaemonArnComponents"></a>

Parsed components of a daemon ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSDaemonArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSDaemonArnComponents: ecs.ECSDaemonArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonArnComponents.property.daemonName">daemonName</a></code> | <code>string</code> | The DaemonName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSDaemonArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSDaemonArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `daemonName`<sup>Required</sup> <a name="daemonName" id="@cdk_utils/iam.ecs.ECSDaemonArnComponents.property.daemonName"></a>

```typescript
public readonly daemonName: string;
```

- *Type:* string

The DaemonName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSDaemonArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSDaemonArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ECSDaemonArnProps <a name="ECSDaemonArnProps" id="@cdk_utils/iam.ecs.ECSDaemonArnProps"></a>

Properties for building a daemon ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSDaemonArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSDaemonArnProps: ecs.ECSDaemonArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonArnProps.property.daemonName">daemonName</a></code> | <code>string</code> | The DaemonName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSDaemonArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `daemonName`<sup>Required</sup> <a name="daemonName" id="@cdk_utils/iam.ecs.ECSDaemonArnProps.property.daemonName"></a>

```typescript
public readonly daemonName: string;
```

- *Type:* string

The DaemonName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSDaemonArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSDaemonArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSDaemonArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSDaemonDeploymentArnComponents <a name="ECSDaemonDeploymentArnComponents" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents"></a>

Parsed components of a daemon-deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSDaemonDeploymentArnComponents: ecs.ECSDaemonDeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.daemonDeploymentId">daemonDeploymentId</a></code> | <code>string</code> | The DaemonDeploymentId component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.daemonName">daemonName</a></code> | <code>string</code> | The DaemonName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `daemonDeploymentId`<sup>Required</sup> <a name="daemonDeploymentId" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.daemonDeploymentId"></a>

```typescript
public readonly daemonDeploymentId: string;
```

- *Type:* string

The DaemonDeploymentId component.

---

##### `daemonName`<sup>Required</sup> <a name="daemonName" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.daemonName"></a>

```typescript
public readonly daemonName: string;
```

- *Type:* string

The DaemonName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ECSDaemonDeploymentArnProps <a name="ECSDaemonDeploymentArnProps" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps"></a>

Properties for building a daemon-deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSDaemonDeploymentArnProps: ecs.ECSDaemonDeploymentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.daemonDeploymentId">daemonDeploymentId</a></code> | <code>string</code> | The DaemonDeploymentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.daemonName">daemonName</a></code> | <code>string</code> | The DaemonName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `daemonDeploymentId`<sup>Required</sup> <a name="daemonDeploymentId" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.daemonDeploymentId"></a>

```typescript
public readonly daemonDeploymentId: string;
```

- *Type:* string

The DaemonDeploymentId component of the ARN.

---

##### `daemonName`<sup>Required</sup> <a name="daemonName" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.daemonName"></a>

```typescript
public readonly daemonName: string;
```

- *Type:* string

The DaemonName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSDaemonRevisionArnComponents <a name="ECSDaemonRevisionArnComponents" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents"></a>

Parsed components of a daemon-revision ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSDaemonRevisionArnComponents: ecs.ECSDaemonRevisionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.daemonName">daemonName</a></code> | <code>string</code> | The DaemonName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.daemonRevisionId">daemonRevisionId</a></code> | <code>string</code> | The DaemonRevisionId component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `daemonName`<sup>Required</sup> <a name="daemonName" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.daemonName"></a>

```typescript
public readonly daemonName: string;
```

- *Type:* string

The DaemonName component.

---

##### `daemonRevisionId`<sup>Required</sup> <a name="daemonRevisionId" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.daemonRevisionId"></a>

```typescript
public readonly daemonRevisionId: string;
```

- *Type:* string

The DaemonRevisionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ECSDaemonRevisionArnProps <a name="ECSDaemonRevisionArnProps" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps"></a>

Properties for building a daemon-revision ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSDaemonRevisionArnProps: ecs.ECSDaemonRevisionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.daemonName">daemonName</a></code> | <code>string</code> | The DaemonName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.daemonRevisionId">daemonRevisionId</a></code> | <code>string</code> | The DaemonRevisionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `daemonName`<sup>Required</sup> <a name="daemonName" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.daemonName"></a>

```typescript
public readonly daemonName: string;
```

- *Type:* string

The DaemonName component of the ARN.

---

##### `daemonRevisionId`<sup>Required</sup> <a name="daemonRevisionId" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.daemonRevisionId"></a>

```typescript
public readonly daemonRevisionId: string;
```

- *Type:* string

The DaemonRevisionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSDaemonTaskDefinitionArnComponents <a name="ECSDaemonTaskDefinitionArnComponents" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents"></a>

Parsed components of a daemon-task-definition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSDaemonTaskDefinitionArnComponents: ecs.ECSDaemonTaskDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents.property.daemonTaskDefinitionFamilyName">daemonTaskDefinitionFamilyName</a></code> | <code>string</code> | The DaemonTaskDefinitionFamilyName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents.property.daemonTaskDefinitionRevisionNumber">daemonTaskDefinitionRevisionNumber</a></code> | <code>string</code> | The DaemonTaskDefinitionRevisionNumber component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `daemonTaskDefinitionFamilyName`<sup>Required</sup> <a name="daemonTaskDefinitionFamilyName" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents.property.daemonTaskDefinitionFamilyName"></a>

```typescript
public readonly daemonTaskDefinitionFamilyName: string;
```

- *Type:* string

The DaemonTaskDefinitionFamilyName component.

---

##### `daemonTaskDefinitionRevisionNumber`<sup>Required</sup> <a name="daemonTaskDefinitionRevisionNumber" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents.property.daemonTaskDefinitionRevisionNumber"></a>

```typescript
public readonly daemonTaskDefinitionRevisionNumber: string;
```

- *Type:* string

The DaemonTaskDefinitionRevisionNumber component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ECSDaemonTaskDefinitionArnProps <a name="ECSDaemonTaskDefinitionArnProps" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps"></a>

Properties for building a daemon-task-definition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSDaemonTaskDefinitionArnProps: ecs.ECSDaemonTaskDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps.property.daemonTaskDefinitionFamilyName">daemonTaskDefinitionFamilyName</a></code> | <code>string</code> | The DaemonTaskDefinitionFamilyName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps.property.daemonTaskDefinitionRevisionNumber">daemonTaskDefinitionRevisionNumber</a></code> | <code>string</code> | The DaemonTaskDefinitionRevisionNumber component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `daemonTaskDefinitionFamilyName`<sup>Required</sup> <a name="daemonTaskDefinitionFamilyName" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps.property.daemonTaskDefinitionFamilyName"></a>

```typescript
public readonly daemonTaskDefinitionFamilyName: string;
```

- *Type:* string

The DaemonTaskDefinitionFamilyName component of the ARN.

---

##### `daemonTaskDefinitionRevisionNumber`<sup>Required</sup> <a name="daemonTaskDefinitionRevisionNumber" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps.property.daemonTaskDefinitionRevisionNumber"></a>

```typescript
public readonly daemonTaskDefinitionRevisionNumber: string;
```

- *Type:* string

The DaemonTaskDefinitionRevisionNumber component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSServiceArnComponents <a name="ECSServiceArnComponents" id="@cdk_utils/iam.ecs.ECSServiceArnComponents"></a>

Parsed components of a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSServiceArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSServiceArnComponents: ecs.ECSServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceArnComponents.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSServiceArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.ecs.ECSServiceArnComponents.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component.

---

### ECSServiceArnProps <a name="ECSServiceArnProps" id="@cdk_utils/iam.ecs.ECSServiceArnProps"></a>

Properties for building a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSServiceArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSServiceArnProps: ecs.ECSServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceArnProps.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSServiceArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.ecs.ECSServiceArnProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSServiceDeploymentArnComponents <a name="ECSServiceDeploymentArnComponents" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents"></a>

Parsed components of a service-deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSServiceDeploymentArnComponents: ecs.ECSServiceDeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.serviceDeploymentId">serviceDeploymentId</a></code> | <code>string</code> | The ServiceDeploymentId component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceDeploymentId`<sup>Required</sup> <a name="serviceDeploymentId" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.serviceDeploymentId"></a>

```typescript
public readonly serviceDeploymentId: string;
```

- *Type:* string

The ServiceDeploymentId component.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnComponents.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component.

---

### ECSServiceDeploymentArnProps <a name="ECSServiceDeploymentArnProps" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps"></a>

Properties for building a service-deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSServiceDeploymentArnProps: ecs.ECSServiceDeploymentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.serviceDeploymentId">serviceDeploymentId</a></code> | <code>string</code> | The ServiceDeploymentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `serviceDeploymentId`<sup>Required</sup> <a name="serviceDeploymentId" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.serviceDeploymentId"></a>

```typescript
public readonly serviceDeploymentId: string;
```

- *Type:* string

The ServiceDeploymentId component of the ARN.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSServiceRevisionArnComponents <a name="ECSServiceRevisionArnComponents" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents"></a>

Parsed components of a service-revision ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSServiceRevisionArnComponents: ecs.ECSServiceRevisionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.serviceRevisionId">serviceRevisionId</a></code> | <code>string</code> | The ServiceRevisionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component.

---

##### `serviceRevisionId`<sup>Required</sup> <a name="serviceRevisionId" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnComponents.property.serviceRevisionId"></a>

```typescript
public readonly serviceRevisionId: string;
```

- *Type:* string

The ServiceRevisionId component.

---

### ECSServiceRevisionArnProps <a name="ECSServiceRevisionArnProps" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnProps"></a>

Properties for building a service-revision ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSServiceRevisionArnProps: ecs.ECSServiceRevisionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.serviceRevisionId">serviceRevisionId</a></code> | <code>string</code> | The ServiceRevisionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component of the ARN.

---

##### `serviceRevisionId`<sup>Required</sup> <a name="serviceRevisionId" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.serviceRevisionId"></a>

```typescript
public readonly serviceRevisionId: string;
```

- *Type:* string

The ServiceRevisionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSServiceRevisionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSTaskArnComponents <a name="ECSTaskArnComponents" id="@cdk_utils/iam.ecs.ECSTaskArnComponents"></a>

Parsed components of a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSTaskArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSTaskArnComponents: ecs.ECSTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskArnComponents.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSTaskArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.ecs.ECSTaskArnComponents.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component.

---

### ECSTaskArnProps <a name="ECSTaskArnProps" id="@cdk_utils/iam.ecs.ECSTaskArnProps"></a>

Properties for building a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSTaskArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSTaskArnProps: ecs.ECSTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskArnProps.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSTaskArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.ecs.ECSTaskArnProps.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSTaskDefinitionArnComponents <a name="ECSTaskDefinitionArnComponents" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents"></a>

Parsed components of a task-definition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSTaskDefinitionArnComponents: ecs.ECSTaskDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents.property.taskDefinitionFamilyName">taskDefinitionFamilyName</a></code> | <code>string</code> | The TaskDefinitionFamilyName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents.property.taskDefinitionRevisionNumber">taskDefinitionRevisionNumber</a></code> | <code>string</code> | The TaskDefinitionRevisionNumber component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskDefinitionFamilyName`<sup>Required</sup> <a name="taskDefinitionFamilyName" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents.property.taskDefinitionFamilyName"></a>

```typescript
public readonly taskDefinitionFamilyName: string;
```

- *Type:* string

The TaskDefinitionFamilyName component.

---

##### `taskDefinitionRevisionNumber`<sup>Required</sup> <a name="taskDefinitionRevisionNumber" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnComponents.property.taskDefinitionRevisionNumber"></a>

```typescript
public readonly taskDefinitionRevisionNumber: string;
```

- *Type:* string

The TaskDefinitionRevisionNumber component.

---

### ECSTaskDefinitionArnProps <a name="ECSTaskDefinitionArnProps" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps"></a>

Properties for building a task-definition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSTaskDefinitionArnProps: ecs.ECSTaskDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps.property.taskDefinitionFamilyName">taskDefinitionFamilyName</a></code> | <code>string</code> | The TaskDefinitionFamilyName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps.property.taskDefinitionRevisionNumber">taskDefinitionRevisionNumber</a></code> | <code>string</code> | The TaskDefinitionRevisionNumber component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `taskDefinitionFamilyName`<sup>Required</sup> <a name="taskDefinitionFamilyName" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps.property.taskDefinitionFamilyName"></a>

```typescript
public readonly taskDefinitionFamilyName: string;
```

- *Type:* string

The TaskDefinitionFamilyName component of the ARN.

---

##### `taskDefinitionRevisionNumber`<sup>Required</sup> <a name="taskDefinitionRevisionNumber" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps.property.taskDefinitionRevisionNumber"></a>

```typescript
public readonly taskDefinitionRevisionNumber: string;
```

- *Type:* string

The TaskDefinitionRevisionNumber component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ECSTaskSetArnComponents <a name="ECSTaskSetArnComponents" id="@cdk_utils/iam.ecs.ECSTaskSetArnComponents"></a>

Parsed components of a task-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSTaskSetArnComponents.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSTaskSetArnComponents: ecs.ECSTaskSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.taskSetId">taskSetId</a></code> | <code>string</code> | The TaskSetId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component.

---

##### `taskSetId`<sup>Required</sup> <a name="taskSetId" id="@cdk_utils/iam.ecs.ECSTaskSetArnComponents.property.taskSetId"></a>

```typescript
public readonly taskSetId: string;
```

- *Type:* string

The TaskSetId component.

---

### ECSTaskSetArnProps <a name="ECSTaskSetArnProps" id="@cdk_utils/iam.ecs.ECSTaskSetArnProps"></a>

Properties for building a task-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ecs.ECSTaskSetArnProps.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

const eCSTaskSetArnProps: ecs.ECSTaskSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.taskSetId">taskSetId</a></code> | <code>string</code> | The TaskSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component of the ARN.

---

##### `taskSetId`<sup>Required</sup> <a name="taskSetId" id="@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.taskSetId"></a>

```typescript
public readonly taskSetId: string;
```

- *Type:* string

The TaskSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ecs.ECSTaskSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ECSActions <a name="ECSActions" id="@cdk_utils/iam.ecs.ECSActions"></a>

IAM action constants for the ecs service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecs.ECSActions.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

new ecs.ECSActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.actionGetTaskProtection">actionGetTaskProtection</a></code> | <code>string</code> | [Read] ecs:GetTaskProtection. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] ecs:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ContinueServiceDeployment">ContinueServiceDeployment</a></code> | <code>string</code> | [Write] ecs:ContinueServiceDeployment. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.CreateCapacityProvider">CreateCapacityProvider</a></code> | <code>string</code> | [Write] ecs:CreateCapacityProvider. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] ecs:CreateCluster. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.CreateDaemon">CreateDaemon</a></code> | <code>string</code> | [Write] ecs:CreateDaemon. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.CreateExpressGatewayService">CreateExpressGatewayService</a></code> | <code>string</code> | [Write] ecs:CreateExpressGatewayService. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.CreateService">CreateService</a></code> | <code>string</code> | [Write] ecs:CreateService. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.CreateTaskSet">CreateTaskSet</a></code> | <code>string</code> | [Write] ecs:CreateTaskSet. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeleteAccountSetting">DeleteAccountSetting</a></code> | <code>string</code> | [Write] ecs:DeleteAccountSetting. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeleteAttributes">DeleteAttributes</a></code> | <code>string</code> | [Write] ecs:DeleteAttributes. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeleteCapacityProvider">DeleteCapacityProvider</a></code> | <code>string</code> | [Write] ecs:DeleteCapacityProvider. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] ecs:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeleteDaemon">DeleteDaemon</a></code> | <code>string</code> | [Write] ecs:DeleteDaemon. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeleteDaemonTaskDefinition">DeleteDaemonTaskDefinition</a></code> | <code>string</code> | [Write] ecs:DeleteDaemonTaskDefinition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeleteExpressGatewayService">DeleteExpressGatewayService</a></code> | <code>string</code> | [Write] ecs:DeleteExpressGatewayService. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeleteService">DeleteService</a></code> | <code>string</code> | [Write] ecs:DeleteService. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeleteTaskDefinitions">DeleteTaskDefinitions</a></code> | <code>string</code> | [Write] ecs:DeleteTaskDefinitions. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeleteTaskSet">DeleteTaskSet</a></code> | <code>string</code> | [Write] ecs:DeleteTaskSet. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeregisterContainerInstance">DeregisterContainerInstance</a></code> | <code>string</code> | [Write] ecs:DeregisterContainerInstance. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DeregisterTaskDefinition">DeregisterTaskDefinition</a></code> | <code>string</code> | [Write] ecs:DeregisterTaskDefinition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeCapacityProviders">DescribeCapacityProviders</a></code> | <code>string</code> | [Read] ecs:DescribeCapacityProviders. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeClusters">DescribeClusters</a></code> | <code>string</code> | [Read] ecs:DescribeClusters. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeContainerInstances">DescribeContainerInstances</a></code> | <code>string</code> | [Read] ecs:DescribeContainerInstances. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeDaemon">DescribeDaemon</a></code> | <code>string</code> | [Read] ecs:DescribeDaemon. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeDaemonDeployments">DescribeDaemonDeployments</a></code> | <code>string</code> | [Read] ecs:DescribeDaemonDeployments. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeDaemonRevisions">DescribeDaemonRevisions</a></code> | <code>string</code> | [Read] ecs:DescribeDaemonRevisions. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeDaemonTaskDefinition">DescribeDaemonTaskDefinition</a></code> | <code>string</code> | [Read] ecs:DescribeDaemonTaskDefinition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeExpressGatewayService">DescribeExpressGatewayService</a></code> | <code>string</code> | [Read] ecs:DescribeExpressGatewayService. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeServiceDeployments">DescribeServiceDeployments</a></code> | <code>string</code> | [Read] ecs:DescribeServiceDeployments. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeServiceRevisions">DescribeServiceRevisions</a></code> | <code>string</code> | [Read] ecs:DescribeServiceRevisions. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeServices">DescribeServices</a></code> | <code>string</code> | [Read] ecs:DescribeServices. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeTaskDefinition">DescribeTaskDefinition</a></code> | <code>string</code> | [Read] ecs:DescribeTaskDefinition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeTasks">DescribeTasks</a></code> | <code>string</code> | [Read] ecs:DescribeTasks. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DescribeTaskSets">DescribeTaskSets</a></code> | <code>string</code> | [Read] ecs:DescribeTaskSets. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.DiscoverPollEndpoint">DiscoverPollEndpoint</a></code> | <code>string</code> | [Write] ecs:DiscoverPollEndpoint. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ExecuteCommand">ExecuteCommand</a></code> | <code>string</code> | [Write] ecs:ExecuteCommand. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListAccountSettings">ListAccountSettings</a></code> | <code>string</code> | [Read] ecs:ListAccountSettings. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListAttributes">ListAttributes</a></code> | <code>string</code> | [List] ecs:ListAttributes. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListClusters">ListClusters</a></code> | <code>string</code> | [List] ecs:ListClusters. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListContainerInstances">ListContainerInstances</a></code> | <code>string</code> | [List] ecs:ListContainerInstances. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListDaemonDeployments">ListDaemonDeployments</a></code> | <code>string</code> | [List] ecs:ListDaemonDeployments. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListDaemons">ListDaemons</a></code> | <code>string</code> | [List] ecs:ListDaemons. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListDaemonTaskDefinitions">ListDaemonTaskDefinitions</a></code> | <code>string</code> | [List] ecs:ListDaemonTaskDefinitions. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListServiceDeployments">ListServiceDeployments</a></code> | <code>string</code> | [List] ecs:ListServiceDeployments. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListServices">ListServices</a></code> | <code>string</code> | [List] ecs:ListServices. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListServicesByNamespace">ListServicesByNamespace</a></code> | <code>string</code> | [List] ecs:ListServicesByNamespace. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ecs:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListTaskDefinitionFamilies">ListTaskDefinitionFamilies</a></code> | <code>string</code> | [List] ecs:ListTaskDefinitionFamilies. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListTaskDefinitions">ListTaskDefinitions</a></code> | <code>string</code> | [List] ecs:ListTaskDefinitions. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.ListTasks">ListTasks</a></code> | <code>string</code> | [List] ecs:ListTasks. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.Poll">Poll</a></code> | <code>string</code> | [Write] ecs:Poll. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.PutAccountSetting">PutAccountSetting</a></code> | <code>string</code> | [Write] ecs:PutAccountSetting. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.PutAccountSettingDefault">PutAccountSettingDefault</a></code> | <code>string</code> | [Write] ecs:PutAccountSettingDefault. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.PutAttributes">PutAttributes</a></code> | <code>string</code> | [Write] ecs:PutAttributes. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.PutClusterCapacityProviders">PutClusterCapacityProviders</a></code> | <code>string</code> | [Write] ecs:PutClusterCapacityProviders. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.PutSystemLogEvents">PutSystemLogEvents</a></code> | <code>string</code> | [Write] ecs:PutSystemLogEvents. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.RegisterContainerInstance">RegisterContainerInstance</a></code> | <code>string</code> | [Write] ecs:RegisterContainerInstance. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.RegisterDaemonTaskDefinition">RegisterDaemonTaskDefinition</a></code> | <code>string</code> | [Write] ecs:RegisterDaemonTaskDefinition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.RegisterTaskDefinition">RegisterTaskDefinition</a></code> | <code>string</code> | [Write] ecs:RegisterTaskDefinition. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.RunTask">RunTask</a></code> | <code>string</code> | [Write] ecs:RunTask. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.StartTask">StartTask</a></code> | <code>string</code> | [Write] ecs:StartTask. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.StartTelemetrySession">StartTelemetrySession</a></code> | <code>string</code> | [Write] ecs:StartTelemetrySession. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.StopServiceDeployment">StopServiceDeployment</a></code> | <code>string</code> | [Write] ecs:StopServiceDeployment. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.StopTask">StopTask</a></code> | <code>string</code> | [Write] ecs:StopTask. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.SubmitAttachmentStateChanges">SubmitAttachmentStateChanges</a></code> | <code>string</code> | [Write] ecs:SubmitAttachmentStateChanges. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.SubmitContainerStateChange">SubmitContainerStateChange</a></code> | <code>string</code> | [Write] ecs:SubmitContainerStateChange. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.SubmitTaskStateChange">SubmitTaskStateChange</a></code> | <code>string</code> | [Write] ecs:SubmitTaskStateChange. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ecs:TagResource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ecs:UntagResource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UpdateCapacityProvider">UpdateCapacityProvider</a></code> | <code>string</code> | [Write] ecs:UpdateCapacityProvider. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UpdateCluster">UpdateCluster</a></code> | <code>string</code> | [Write] ecs:UpdateCluster. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UpdateClusterSettings">UpdateClusterSettings</a></code> | <code>string</code> | [Write] ecs:UpdateClusterSettings. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UpdateContainerAgent">UpdateContainerAgent</a></code> | <code>string</code> | [Write] ecs:UpdateContainerAgent. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UpdateContainerInstancesState">UpdateContainerInstancesState</a></code> | <code>string</code> | [Write] ecs:UpdateContainerInstancesState. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UpdateDaemon">UpdateDaemon</a></code> | <code>string</code> | [Write] ecs:UpdateDaemon. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UpdateExpressGatewayService">UpdateExpressGatewayService</a></code> | <code>string</code> | [Write] ecs:UpdateExpressGatewayService. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UpdateService">UpdateService</a></code> | <code>string</code> | [Write] ecs:UpdateService. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UpdateServicePrimaryTaskSet">UpdateServicePrimaryTaskSet</a></code> | <code>string</code> | [Write] ecs:UpdateServicePrimaryTaskSet. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UpdateTaskProtection">UpdateTaskProtection</a></code> | <code>string</code> | [Write] ecs:UpdateTaskProtection. |
| <code><a href="#@cdk_utils/iam.ecs.ECSActions.property.UpdateTaskSet">UpdateTaskSet</a></code> | <code>string</code> | [Write] ecs:UpdateTaskSet. |

---

##### `actionGetTaskProtection`<sup>Required</sup> <a name="actionGetTaskProtection" id="@cdk_utils/iam.ecs.ECSActions.property.actionGetTaskProtection"></a>

```typescript
public readonly actionGetTaskProtection: string;
```

- *Type:* string

[Read] ecs:GetTaskProtection.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ecs.ECSActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.ecs.ECSActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] ecs:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ecs.ECSActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ecs.ECSActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ecs.ECSActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ecs.ECSActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ContinueServiceDeployment`<sup>Required</sup> <a name="ContinueServiceDeployment" id="@cdk_utils/iam.ecs.ECSActions.property.ContinueServiceDeployment"></a>

```typescript
public readonly ContinueServiceDeployment: string;
```

- *Type:* string

[Write] ecs:ContinueServiceDeployment.

---

##### `CreateCapacityProvider`<sup>Required</sup> <a name="CreateCapacityProvider" id="@cdk_utils/iam.ecs.ECSActions.property.CreateCapacityProvider"></a>

```typescript
public readonly CreateCapacityProvider: string;
```

- *Type:* string

[Write] ecs:CreateCapacityProvider.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.ecs.ECSActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] ecs:CreateCluster.

---

##### `CreateDaemon`<sup>Required</sup> <a name="CreateDaemon" id="@cdk_utils/iam.ecs.ECSActions.property.CreateDaemon"></a>

```typescript
public readonly CreateDaemon: string;
```

- *Type:* string

[Write] ecs:CreateDaemon.

---

##### `CreateExpressGatewayService`<sup>Required</sup> <a name="CreateExpressGatewayService" id="@cdk_utils/iam.ecs.ECSActions.property.CreateExpressGatewayService"></a>

```typescript
public readonly CreateExpressGatewayService: string;
```

- *Type:* string

[Write] ecs:CreateExpressGatewayService.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.ecs.ECSActions.property.CreateService"></a>

```typescript
public readonly CreateService: string;
```

- *Type:* string

[Write] ecs:CreateService.

---

##### `CreateTaskSet`<sup>Required</sup> <a name="CreateTaskSet" id="@cdk_utils/iam.ecs.ECSActions.property.CreateTaskSet"></a>

```typescript
public readonly CreateTaskSet: string;
```

- *Type:* string

[Write] ecs:CreateTaskSet.

---

##### `DeleteAccountSetting`<sup>Required</sup> <a name="DeleteAccountSetting" id="@cdk_utils/iam.ecs.ECSActions.property.DeleteAccountSetting"></a>

```typescript
public readonly DeleteAccountSetting: string;
```

- *Type:* string

[Write] ecs:DeleteAccountSetting.

---

##### `DeleteAttributes`<sup>Required</sup> <a name="DeleteAttributes" id="@cdk_utils/iam.ecs.ECSActions.property.DeleteAttributes"></a>

```typescript
public readonly DeleteAttributes: string;
```

- *Type:* string

[Write] ecs:DeleteAttributes.

---

##### `DeleteCapacityProvider`<sup>Required</sup> <a name="DeleteCapacityProvider" id="@cdk_utils/iam.ecs.ECSActions.property.DeleteCapacityProvider"></a>

```typescript
public readonly DeleteCapacityProvider: string;
```

- *Type:* string

[Write] ecs:DeleteCapacityProvider.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.ecs.ECSActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] ecs:DeleteCluster.

---

##### `DeleteDaemon`<sup>Required</sup> <a name="DeleteDaemon" id="@cdk_utils/iam.ecs.ECSActions.property.DeleteDaemon"></a>

```typescript
public readonly DeleteDaemon: string;
```

- *Type:* string

[Write] ecs:DeleteDaemon.

---

##### `DeleteDaemonTaskDefinition`<sup>Required</sup> <a name="DeleteDaemonTaskDefinition" id="@cdk_utils/iam.ecs.ECSActions.property.DeleteDaemonTaskDefinition"></a>

```typescript
public readonly DeleteDaemonTaskDefinition: string;
```

- *Type:* string

[Write] ecs:DeleteDaemonTaskDefinition.

---

##### `DeleteExpressGatewayService`<sup>Required</sup> <a name="DeleteExpressGatewayService" id="@cdk_utils/iam.ecs.ECSActions.property.DeleteExpressGatewayService"></a>

```typescript
public readonly DeleteExpressGatewayService: string;
```

- *Type:* string

[Write] ecs:DeleteExpressGatewayService.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.ecs.ECSActions.property.DeleteService"></a>

```typescript
public readonly DeleteService: string;
```

- *Type:* string

[Write] ecs:DeleteService.

---

##### `DeleteTaskDefinitions`<sup>Required</sup> <a name="DeleteTaskDefinitions" id="@cdk_utils/iam.ecs.ECSActions.property.DeleteTaskDefinitions"></a>

```typescript
public readonly DeleteTaskDefinitions: string;
```

- *Type:* string

[Write] ecs:DeleteTaskDefinitions.

---

##### `DeleteTaskSet`<sup>Required</sup> <a name="DeleteTaskSet" id="@cdk_utils/iam.ecs.ECSActions.property.DeleteTaskSet"></a>

```typescript
public readonly DeleteTaskSet: string;
```

- *Type:* string

[Write] ecs:DeleteTaskSet.

---

##### `DeregisterContainerInstance`<sup>Required</sup> <a name="DeregisterContainerInstance" id="@cdk_utils/iam.ecs.ECSActions.property.DeregisterContainerInstance"></a>

```typescript
public readonly DeregisterContainerInstance: string;
```

- *Type:* string

[Write] ecs:DeregisterContainerInstance.

---

##### `DeregisterTaskDefinition`<sup>Required</sup> <a name="DeregisterTaskDefinition" id="@cdk_utils/iam.ecs.ECSActions.property.DeregisterTaskDefinition"></a>

```typescript
public readonly DeregisterTaskDefinition: string;
```

- *Type:* string

[Write] ecs:DeregisterTaskDefinition.

---

##### `DescribeCapacityProviders`<sup>Required</sup> <a name="DescribeCapacityProviders" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeCapacityProviders"></a>

```typescript
public readonly DescribeCapacityProviders: string;
```

- *Type:* string

[Read] ecs:DescribeCapacityProviders.

---

##### `DescribeClusters`<sup>Required</sup> <a name="DescribeClusters" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeClusters"></a>

```typescript
public readonly DescribeClusters: string;
```

- *Type:* string

[Read] ecs:DescribeClusters.

---

##### `DescribeContainerInstances`<sup>Required</sup> <a name="DescribeContainerInstances" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeContainerInstances"></a>

```typescript
public readonly DescribeContainerInstances: string;
```

- *Type:* string

[Read] ecs:DescribeContainerInstances.

---

##### `DescribeDaemon`<sup>Required</sup> <a name="DescribeDaemon" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeDaemon"></a>

```typescript
public readonly DescribeDaemon: string;
```

- *Type:* string

[Read] ecs:DescribeDaemon.

---

##### `DescribeDaemonDeployments`<sup>Required</sup> <a name="DescribeDaemonDeployments" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeDaemonDeployments"></a>

```typescript
public readonly DescribeDaemonDeployments: string;
```

- *Type:* string

[Read] ecs:DescribeDaemonDeployments.

---

##### `DescribeDaemonRevisions`<sup>Required</sup> <a name="DescribeDaemonRevisions" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeDaemonRevisions"></a>

```typescript
public readonly DescribeDaemonRevisions: string;
```

- *Type:* string

[Read] ecs:DescribeDaemonRevisions.

---

##### `DescribeDaemonTaskDefinition`<sup>Required</sup> <a name="DescribeDaemonTaskDefinition" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeDaemonTaskDefinition"></a>

```typescript
public readonly DescribeDaemonTaskDefinition: string;
```

- *Type:* string

[Read] ecs:DescribeDaemonTaskDefinition.

---

##### `DescribeExpressGatewayService`<sup>Required</sup> <a name="DescribeExpressGatewayService" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeExpressGatewayService"></a>

```typescript
public readonly DescribeExpressGatewayService: string;
```

- *Type:* string

[Read] ecs:DescribeExpressGatewayService.

---

##### `DescribeServiceDeployments`<sup>Required</sup> <a name="DescribeServiceDeployments" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeServiceDeployments"></a>

```typescript
public readonly DescribeServiceDeployments: string;
```

- *Type:* string

[Read] ecs:DescribeServiceDeployments.

---

##### `DescribeServiceRevisions`<sup>Required</sup> <a name="DescribeServiceRevisions" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeServiceRevisions"></a>

```typescript
public readonly DescribeServiceRevisions: string;
```

- *Type:* string

[Read] ecs:DescribeServiceRevisions.

---

##### `DescribeServices`<sup>Required</sup> <a name="DescribeServices" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeServices"></a>

```typescript
public readonly DescribeServices: string;
```

- *Type:* string

[Read] ecs:DescribeServices.

---

##### `DescribeTaskDefinition`<sup>Required</sup> <a name="DescribeTaskDefinition" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeTaskDefinition"></a>

```typescript
public readonly DescribeTaskDefinition: string;
```

- *Type:* string

[Read] ecs:DescribeTaskDefinition.

---

##### `DescribeTasks`<sup>Required</sup> <a name="DescribeTasks" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeTasks"></a>

```typescript
public readonly DescribeTasks: string;
```

- *Type:* string

[Read] ecs:DescribeTasks.

---

##### `DescribeTaskSets`<sup>Required</sup> <a name="DescribeTaskSets" id="@cdk_utils/iam.ecs.ECSActions.property.DescribeTaskSets"></a>

```typescript
public readonly DescribeTaskSets: string;
```

- *Type:* string

[Read] ecs:DescribeTaskSets.

---

##### `DiscoverPollEndpoint`<sup>Required</sup> <a name="DiscoverPollEndpoint" id="@cdk_utils/iam.ecs.ECSActions.property.DiscoverPollEndpoint"></a>

```typescript
public readonly DiscoverPollEndpoint: string;
```

- *Type:* string

[Write] ecs:DiscoverPollEndpoint.

---

##### `ExecuteCommand`<sup>Required</sup> <a name="ExecuteCommand" id="@cdk_utils/iam.ecs.ECSActions.property.ExecuteCommand"></a>

```typescript
public readonly ExecuteCommand: string;
```

- *Type:* string

[Write] ecs:ExecuteCommand.

---

##### `ListAccountSettings`<sup>Required</sup> <a name="ListAccountSettings" id="@cdk_utils/iam.ecs.ECSActions.property.ListAccountSettings"></a>

```typescript
public readonly ListAccountSettings: string;
```

- *Type:* string

[Read] ecs:ListAccountSettings.

---

##### `ListAttributes`<sup>Required</sup> <a name="ListAttributes" id="@cdk_utils/iam.ecs.ECSActions.property.ListAttributes"></a>

```typescript
public readonly ListAttributes: string;
```

- *Type:* string

[List] ecs:ListAttributes.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.ecs.ECSActions.property.ListClusters"></a>

```typescript
public readonly ListClusters: string;
```

- *Type:* string

[List] ecs:ListClusters.

---

##### `ListContainerInstances`<sup>Required</sup> <a name="ListContainerInstances" id="@cdk_utils/iam.ecs.ECSActions.property.ListContainerInstances"></a>

```typescript
public readonly ListContainerInstances: string;
```

- *Type:* string

[List] ecs:ListContainerInstances.

---

##### `ListDaemonDeployments`<sup>Required</sup> <a name="ListDaemonDeployments" id="@cdk_utils/iam.ecs.ECSActions.property.ListDaemonDeployments"></a>

```typescript
public readonly ListDaemonDeployments: string;
```

- *Type:* string

[List] ecs:ListDaemonDeployments.

---

##### `ListDaemons`<sup>Required</sup> <a name="ListDaemons" id="@cdk_utils/iam.ecs.ECSActions.property.ListDaemons"></a>

```typescript
public readonly ListDaemons: string;
```

- *Type:* string

[List] ecs:ListDaemons.

---

##### `ListDaemonTaskDefinitions`<sup>Required</sup> <a name="ListDaemonTaskDefinitions" id="@cdk_utils/iam.ecs.ECSActions.property.ListDaemonTaskDefinitions"></a>

```typescript
public readonly ListDaemonTaskDefinitions: string;
```

- *Type:* string

[List] ecs:ListDaemonTaskDefinitions.

---

##### `ListServiceDeployments`<sup>Required</sup> <a name="ListServiceDeployments" id="@cdk_utils/iam.ecs.ECSActions.property.ListServiceDeployments"></a>

```typescript
public readonly ListServiceDeployments: string;
```

- *Type:* string

[List] ecs:ListServiceDeployments.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.ecs.ECSActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[List] ecs:ListServices.

---

##### `ListServicesByNamespace`<sup>Required</sup> <a name="ListServicesByNamespace" id="@cdk_utils/iam.ecs.ECSActions.property.ListServicesByNamespace"></a>

```typescript
public readonly ListServicesByNamespace: string;
```

- *Type:* string

[List] ecs:ListServicesByNamespace.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ecs.ECSActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ecs:ListTagsForResource.

---

##### `ListTaskDefinitionFamilies`<sup>Required</sup> <a name="ListTaskDefinitionFamilies" id="@cdk_utils/iam.ecs.ECSActions.property.ListTaskDefinitionFamilies"></a>

```typescript
public readonly ListTaskDefinitionFamilies: string;
```

- *Type:* string

[List] ecs:ListTaskDefinitionFamilies.

---

##### `ListTaskDefinitions`<sup>Required</sup> <a name="ListTaskDefinitions" id="@cdk_utils/iam.ecs.ECSActions.property.ListTaskDefinitions"></a>

```typescript
public readonly ListTaskDefinitions: string;
```

- *Type:* string

[List] ecs:ListTaskDefinitions.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.ecs.ECSActions.property.ListTasks"></a>

```typescript
public readonly ListTasks: string;
```

- *Type:* string

[List] ecs:ListTasks.

---

##### `Poll`<sup>Required</sup> <a name="Poll" id="@cdk_utils/iam.ecs.ECSActions.property.Poll"></a>

```typescript
public readonly Poll: string;
```

- *Type:* string

[Write] ecs:Poll.

---

##### `PutAccountSetting`<sup>Required</sup> <a name="PutAccountSetting" id="@cdk_utils/iam.ecs.ECSActions.property.PutAccountSetting"></a>

```typescript
public readonly PutAccountSetting: string;
```

- *Type:* string

[Write] ecs:PutAccountSetting.

---

##### `PutAccountSettingDefault`<sup>Required</sup> <a name="PutAccountSettingDefault" id="@cdk_utils/iam.ecs.ECSActions.property.PutAccountSettingDefault"></a>

```typescript
public readonly PutAccountSettingDefault: string;
```

- *Type:* string

[Write] ecs:PutAccountSettingDefault.

---

##### `PutAttributes`<sup>Required</sup> <a name="PutAttributes" id="@cdk_utils/iam.ecs.ECSActions.property.PutAttributes"></a>

```typescript
public readonly PutAttributes: string;
```

- *Type:* string

[Write] ecs:PutAttributes.

---

##### `PutClusterCapacityProviders`<sup>Required</sup> <a name="PutClusterCapacityProviders" id="@cdk_utils/iam.ecs.ECSActions.property.PutClusterCapacityProviders"></a>

```typescript
public readonly PutClusterCapacityProviders: string;
```

- *Type:* string

[Write] ecs:PutClusterCapacityProviders.

---

##### `PutSystemLogEvents`<sup>Required</sup> <a name="PutSystemLogEvents" id="@cdk_utils/iam.ecs.ECSActions.property.PutSystemLogEvents"></a>

```typescript
public readonly PutSystemLogEvents: string;
```

- *Type:* string

[Write] ecs:PutSystemLogEvents.

---

##### `RegisterContainerInstance`<sup>Required</sup> <a name="RegisterContainerInstance" id="@cdk_utils/iam.ecs.ECSActions.property.RegisterContainerInstance"></a>

```typescript
public readonly RegisterContainerInstance: string;
```

- *Type:* string

[Write] ecs:RegisterContainerInstance.

---

##### `RegisterDaemonTaskDefinition`<sup>Required</sup> <a name="RegisterDaemonTaskDefinition" id="@cdk_utils/iam.ecs.ECSActions.property.RegisterDaemonTaskDefinition"></a>

```typescript
public readonly RegisterDaemonTaskDefinition: string;
```

- *Type:* string

[Write] ecs:RegisterDaemonTaskDefinition.

---

##### `RegisterTaskDefinition`<sup>Required</sup> <a name="RegisterTaskDefinition" id="@cdk_utils/iam.ecs.ECSActions.property.RegisterTaskDefinition"></a>

```typescript
public readonly RegisterTaskDefinition: string;
```

- *Type:* string

[Write] ecs:RegisterTaskDefinition.

---

##### `RunTask`<sup>Required</sup> <a name="RunTask" id="@cdk_utils/iam.ecs.ECSActions.property.RunTask"></a>

```typescript
public readonly RunTask: string;
```

- *Type:* string

[Write] ecs:RunTask.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ecs.ECSActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartTask`<sup>Required</sup> <a name="StartTask" id="@cdk_utils/iam.ecs.ECSActions.property.StartTask"></a>

```typescript
public readonly StartTask: string;
```

- *Type:* string

[Write] ecs:StartTask.

---

##### `StartTelemetrySession`<sup>Required</sup> <a name="StartTelemetrySession" id="@cdk_utils/iam.ecs.ECSActions.property.StartTelemetrySession"></a>

```typescript
public readonly StartTelemetrySession: string;
```

- *Type:* string

[Write] ecs:StartTelemetrySession.

---

##### `StopServiceDeployment`<sup>Required</sup> <a name="StopServiceDeployment" id="@cdk_utils/iam.ecs.ECSActions.property.StopServiceDeployment"></a>

```typescript
public readonly StopServiceDeployment: string;
```

- *Type:* string

[Write] ecs:StopServiceDeployment.

---

##### `StopTask`<sup>Required</sup> <a name="StopTask" id="@cdk_utils/iam.ecs.ECSActions.property.StopTask"></a>

```typescript
public readonly StopTask: string;
```

- *Type:* string

[Write] ecs:StopTask.

---

##### `SubmitAttachmentStateChanges`<sup>Required</sup> <a name="SubmitAttachmentStateChanges" id="@cdk_utils/iam.ecs.ECSActions.property.SubmitAttachmentStateChanges"></a>

```typescript
public readonly SubmitAttachmentStateChanges: string;
```

- *Type:* string

[Write] ecs:SubmitAttachmentStateChanges.

---

##### `SubmitContainerStateChange`<sup>Required</sup> <a name="SubmitContainerStateChange" id="@cdk_utils/iam.ecs.ECSActions.property.SubmitContainerStateChange"></a>

```typescript
public readonly SubmitContainerStateChange: string;
```

- *Type:* string

[Write] ecs:SubmitContainerStateChange.

---

##### `SubmitTaskStateChange`<sup>Required</sup> <a name="SubmitTaskStateChange" id="@cdk_utils/iam.ecs.ECSActions.property.SubmitTaskStateChange"></a>

```typescript
public readonly SubmitTaskStateChange: string;
```

- *Type:* string

[Write] ecs:SubmitTaskStateChange.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ecs.ECSActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ecs:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ecs.ECSActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ecs:UntagResource.

---

##### `UpdateCapacityProvider`<sup>Required</sup> <a name="UpdateCapacityProvider" id="@cdk_utils/iam.ecs.ECSActions.property.UpdateCapacityProvider"></a>

```typescript
public readonly UpdateCapacityProvider: string;
```

- *Type:* string

[Write] ecs:UpdateCapacityProvider.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.ecs.ECSActions.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string;
```

- *Type:* string

[Write] ecs:UpdateCluster.

---

##### `UpdateClusterSettings`<sup>Required</sup> <a name="UpdateClusterSettings" id="@cdk_utils/iam.ecs.ECSActions.property.UpdateClusterSettings"></a>

```typescript
public readonly UpdateClusterSettings: string;
```

- *Type:* string

[Write] ecs:UpdateClusterSettings.

---

##### `UpdateContainerAgent`<sup>Required</sup> <a name="UpdateContainerAgent" id="@cdk_utils/iam.ecs.ECSActions.property.UpdateContainerAgent"></a>

```typescript
public readonly UpdateContainerAgent: string;
```

- *Type:* string

[Write] ecs:UpdateContainerAgent.

---

##### `UpdateContainerInstancesState`<sup>Required</sup> <a name="UpdateContainerInstancesState" id="@cdk_utils/iam.ecs.ECSActions.property.UpdateContainerInstancesState"></a>

```typescript
public readonly UpdateContainerInstancesState: string;
```

- *Type:* string

[Write] ecs:UpdateContainerInstancesState.

---

##### `UpdateDaemon`<sup>Required</sup> <a name="UpdateDaemon" id="@cdk_utils/iam.ecs.ECSActions.property.UpdateDaemon"></a>

```typescript
public readonly UpdateDaemon: string;
```

- *Type:* string

[Write] ecs:UpdateDaemon.

---

##### `UpdateExpressGatewayService`<sup>Required</sup> <a name="UpdateExpressGatewayService" id="@cdk_utils/iam.ecs.ECSActions.property.UpdateExpressGatewayService"></a>

```typescript
public readonly UpdateExpressGatewayService: string;
```

- *Type:* string

[Write] ecs:UpdateExpressGatewayService.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.ecs.ECSActions.property.UpdateService"></a>

```typescript
public readonly UpdateService: string;
```

- *Type:* string

[Write] ecs:UpdateService.

---

##### `UpdateServicePrimaryTaskSet`<sup>Required</sup> <a name="UpdateServicePrimaryTaskSet" id="@cdk_utils/iam.ecs.ECSActions.property.UpdateServicePrimaryTaskSet"></a>

```typescript
public readonly UpdateServicePrimaryTaskSet: string;
```

- *Type:* string

[Write] ecs:UpdateServicePrimaryTaskSet.

---

##### `UpdateTaskProtection`<sup>Required</sup> <a name="UpdateTaskProtection" id="@cdk_utils/iam.ecs.ECSActions.property.UpdateTaskProtection"></a>

```typescript
public readonly UpdateTaskProtection: string;
```

- *Type:* string

[Write] ecs:UpdateTaskProtection.

---

##### `UpdateTaskSet`<sup>Required</sup> <a name="UpdateTaskSet" id="@cdk_utils/iam.ecs.ECSActions.property.UpdateTaskSet"></a>

```typescript
public readonly UpdateTaskSet: string;
```

- *Type:* string

[Write] ecs:UpdateTaskSet.

---

### ECSConditions <a name="ECSConditions" id="@cdk_utils/iam.ecs.ECSConditions"></a>

Condition key constants and builders for ecs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecs.ECSConditions.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

new ecs.ECSConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.accountSetting">accountSetting</a></code> | Generates a condition block for `ecs:account-setting`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.autoAssignPublicIP">autoAssignPublicIP</a></code> | Generates a condition block for `ecs:auto-assign-public-ip`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.capacityProvider">capacityProvider</a></code> | Generates a condition block for `ecs:capacity-provider`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.cluster">cluster</a></code> | Generates a condition block for `ecs:cluster`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.computeCompatibility">computeCompatibility</a></code> | Generates a condition block for `ecs:compute-compatibility`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.containerInstances">containerInstances</a></code> | Generates a condition block for `ecs:container-instances`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.containerName">containerName</a></code> | Generates a condition block for `ecs:container-name`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.createAction">createAction</a></code> | Generates a condition block for `ecs:CreateAction`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.daemon">daemon</a></code> | Generates a condition block for `ecs:daemon`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.daemonTaskDefinition">daemonTaskDefinition</a></code> | Generates a condition block for `ecs:daemon-task-definition`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.enableEBSVolumes">enableEBSVolumes</a></code> | Generates a condition block for `ecs:enable-ebs-volumes`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.enableECSManagedTags">enableECSManagedTags</a></code> | Generates a condition block for `ecs:enable-ecs-managed-tags`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.enableExecuteCommand">enableExecuteCommand</a></code> | Generates a condition block for `ecs:enable-execute-command`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.enableServiceConnect">enableServiceConnect</a></code> | Generates a condition block for `ecs:enable-service-connect`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.enableVPCLattice">enableVPCLattice</a></code> | Generates a condition block for `ecs:enable-vpc-lattice`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.fargateEphemeralStorageKMSKey">fargateEphemeralStorageKMSKey</a></code> | Generates a condition block for `ecs:fargate-ephemeral-storage-kms-key`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.gateway">gateway</a></code> | Generates a condition block for `ecs:gateway`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.instanceMetadataTagsPropagation">instanceMetadataTagsPropagation</a></code> | Generates a condition block for `ecs:instance-metadata-tags-propagation`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.namespace">namespace</a></code> | Generates a condition block for `ecs:namespace`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.privileged">privileged</a></code> | Generates a condition block for `ecs:privileged`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.propagateTags">propagateTags</a></code> | Generates a condition block for `ecs:propagate-tags`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.service">service</a></code> | Generates a condition block for `ecs:service`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.subnet">subnet</a></code> | Generates a condition block for `ecs:subnet`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.task">task</a></code> | Generates a condition block for `ecs:task`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.taskCpu">taskCpu</a></code> | Generates a condition block for `ecs:task-cpu`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.taskDefinition">taskDefinition</a></code> | Generates a condition block for `ecs:task-definition`. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.taskMemory">taskMemory</a></code> | Generates a condition block for `ecs:task-memory`. |

---

##### `accountSetting` <a name="accountSetting" id="@cdk_utils/iam.ecs.ECSConditions.accountSetting"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.accountSetting(value: string)
```

Generates a condition block for `ecs:account-setting`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.accountSetting.parameter.value"></a>

- *Type:* string

---

##### `autoAssignPublicIP` <a name="autoAssignPublicIP" id="@cdk_utils/iam.ecs.ECSConditions.autoAssignPublicIP"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.autoAssignPublicIP(value: boolean)
```

Generates a condition block for `ecs:auto-assign-public-ip`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.autoAssignPublicIP.parameter.value"></a>

- *Type:* boolean

---

##### `capacityProvider` <a name="capacityProvider" id="@cdk_utils/iam.ecs.ECSConditions.capacityProvider"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.capacityProvider(values: string[])
```

Generates a condition block for `ecs:capacity-provider`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ecs.ECSConditions.capacityProvider.parameter.values"></a>

- *Type:* string[]

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.ecs.ECSConditions.cluster"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.cluster(value: string)
```

Generates a condition block for `ecs:cluster`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.cluster.parameter.value"></a>

- *Type:* string

---

##### `computeCompatibility` <a name="computeCompatibility" id="@cdk_utils/iam.ecs.ECSConditions.computeCompatibility"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.computeCompatibility(values: string[])
```

Generates a condition block for `ecs:compute-compatibility`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ecs.ECSConditions.computeCompatibility.parameter.values"></a>

- *Type:* string[]

---

##### `containerInstances` <a name="containerInstances" id="@cdk_utils/iam.ecs.ECSConditions.containerInstances"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.containerInstances(value: string)
```

Generates a condition block for `ecs:container-instances`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.containerInstances.parameter.value"></a>

- *Type:* string

---

##### `containerName` <a name="containerName" id="@cdk_utils/iam.ecs.ECSConditions.containerName"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.containerName(value: string)
```

Generates a condition block for `ecs:container-name`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.containerName.parameter.value"></a>

- *Type:* string

---

##### `createAction` <a name="createAction" id="@cdk_utils/iam.ecs.ECSConditions.createAction"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.createAction(value: string)
```

Generates a condition block for `ecs:CreateAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.createAction.parameter.value"></a>

- *Type:* string

---

##### `daemon` <a name="daemon" id="@cdk_utils/iam.ecs.ECSConditions.daemon"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.daemon(value: string)
```

Generates a condition block for `ecs:daemon`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.daemon.parameter.value"></a>

- *Type:* string

---

##### `daemonTaskDefinition` <a name="daemonTaskDefinition" id="@cdk_utils/iam.ecs.ECSConditions.daemonTaskDefinition"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.daemonTaskDefinition(value: string)
```

Generates a condition block for `ecs:daemon-task-definition`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.daemonTaskDefinition.parameter.value"></a>

- *Type:* string

---

##### `enableEBSVolumes` <a name="enableEBSVolumes" id="@cdk_utils/iam.ecs.ECSConditions.enableEBSVolumes"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.enableEBSVolumes(value: string)
```

Generates a condition block for `ecs:enable-ebs-volumes`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.enableEBSVolumes.parameter.value"></a>

- *Type:* string

---

##### `enableECSManagedTags` <a name="enableECSManagedTags" id="@cdk_utils/iam.ecs.ECSConditions.enableECSManagedTags"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.enableECSManagedTags(value: boolean)
```

Generates a condition block for `ecs:enable-ecs-managed-tags`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.enableECSManagedTags.parameter.value"></a>

- *Type:* boolean

---

##### `enableExecuteCommand` <a name="enableExecuteCommand" id="@cdk_utils/iam.ecs.ECSConditions.enableExecuteCommand"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.enableExecuteCommand(value: string)
```

Generates a condition block for `ecs:enable-execute-command`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.enableExecuteCommand.parameter.value"></a>

- *Type:* string

---

##### `enableServiceConnect` <a name="enableServiceConnect" id="@cdk_utils/iam.ecs.ECSConditions.enableServiceConnect"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.enableServiceConnect(value: string)
```

Generates a condition block for `ecs:enable-service-connect`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.enableServiceConnect.parameter.value"></a>

- *Type:* string

---

##### `enableVPCLattice` <a name="enableVPCLattice" id="@cdk_utils/iam.ecs.ECSConditions.enableVPCLattice"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.enableVPCLattice(value: string)
```

Generates a condition block for `ecs:enable-vpc-lattice`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.enableVPCLattice.parameter.value"></a>

- *Type:* string

---

##### `fargateEphemeralStorageKMSKey` <a name="fargateEphemeralStorageKMSKey" id="@cdk_utils/iam.ecs.ECSConditions.fargateEphemeralStorageKMSKey"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.fargateEphemeralStorageKMSKey(value: string)
```

Generates a condition block for `ecs:fargate-ephemeral-storage-kms-key`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.fargateEphemeralStorageKMSKey.parameter.value"></a>

- *Type:* string

---

##### `gateway` <a name="gateway" id="@cdk_utils/iam.ecs.ECSConditions.gateway"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.gateway(value: string)
```

Generates a condition block for `ecs:gateway`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.gateway.parameter.value"></a>

- *Type:* string

---

##### `instanceMetadataTagsPropagation` <a name="instanceMetadataTagsPropagation" id="@cdk_utils/iam.ecs.ECSConditions.instanceMetadataTagsPropagation"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.instanceMetadataTagsPropagation(value: boolean)
```

Generates a condition block for `ecs:instance-metadata-tags-propagation`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.instanceMetadataTagsPropagation.parameter.value"></a>

- *Type:* boolean

---

##### `namespace` <a name="namespace" id="@cdk_utils/iam.ecs.ECSConditions.namespace"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.namespace(value: string)
```

Generates a condition block for `ecs:namespace`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.namespace.parameter.value"></a>

- *Type:* string

---

##### `privileged` <a name="privileged" id="@cdk_utils/iam.ecs.ECSConditions.privileged"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.privileged(value: string)
```

Generates a condition block for `ecs:privileged`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.privileged.parameter.value"></a>

- *Type:* string

---

##### `propagateTags` <a name="propagateTags" id="@cdk_utils/iam.ecs.ECSConditions.propagateTags"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.propagateTags(value: string)
```

Generates a condition block for `ecs:propagate-tags`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.propagateTags.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ecs.ECSConditions.requestTag"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ecs.ECSConditions.resourceTag"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `service` <a name="service" id="@cdk_utils/iam.ecs.ECSConditions.service"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.service(value: string)
```

Generates a condition block for `ecs:service`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.service.parameter.value"></a>

- *Type:* string

---

##### `subnet` <a name="subnet" id="@cdk_utils/iam.ecs.ECSConditions.subnet"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.subnet(values: string[])
```

Generates a condition block for `ecs:subnet`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ecs.ECSConditions.subnet.parameter.values"></a>

- *Type:* string[]

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ecs.ECSConditions.tagKeys"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ecs.ECSConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `task` <a name="task" id="@cdk_utils/iam.ecs.ECSConditions.task"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.task(value: string)
```

Generates a condition block for `ecs:task`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.task.parameter.value"></a>

- *Type:* string

---

##### `taskCpu` <a name="taskCpu" id="@cdk_utils/iam.ecs.ECSConditions.taskCpu"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.taskCpu(value: number)
```

Generates a condition block for `ecs:task-cpu`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.taskCpu.parameter.value"></a>

- *Type:* number

---

##### `taskDefinition` <a name="taskDefinition" id="@cdk_utils/iam.ecs.ECSConditions.taskDefinition"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.taskDefinition(value: string)
```

Generates a condition block for `ecs:task-definition`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.taskDefinition.parameter.value"></a>

- *Type:* string

---

##### `taskMemory` <a name="taskMemory" id="@cdk_utils/iam.ecs.ECSConditions.taskMemory"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSConditions.taskMemory(value: number)
```

Generates a condition block for `ecs:task-memory`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ecs.ECSConditions.taskMemory.parameter.value"></a>

- *Type:* number

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ACCOUNT_SETTING">ACCOUNT_SETTING</a></code> | <code>string</code> | Condition key: ecs:account-setting (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.actionGetTaskProtectionConditionKeys">actionGetTaskProtectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTaskProtection action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.AUTO_ASSIGN_PUBLIC_IP">AUTO_ASSIGN_PUBLIC_IP</a></code> | <code>string</code> | Condition key: ecs:auto-assign-public-ip (Bool). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.CAPACITY_PROVIDER">CAPACITY_PROVIDER</a></code> | <code>string</code> | Condition key: ecs:capacity-provider (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.CLUSTER">CLUSTER</a></code> | <code>string</code> | Condition key: ecs:cluster (ARN). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.COMPUTE_COMPATIBILITY">COMPUTE_COMPATIBILITY</a></code> | <code>string</code> | Condition key: ecs:compute-compatibility (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.CONTAINER_INSTANCES">CONTAINER_INSTANCES</a></code> | <code>string</code> | Condition key: ecs:container-instances (ARN). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.CONTAINER_NAME">CONTAINER_NAME</a></code> | <code>string</code> | Condition key: ecs:container-name (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.CREATE_ACTION">CREATE_ACTION</a></code> | <code>string</code> | Condition key: ecs:CreateAction (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.CreateCapacityProviderConditionKeys">CreateCapacityProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCapacityProvider action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.CreateClusterConditionKeys">CreateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCluster action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.CreateDaemonConditionKeys">CreateDaemonConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDaemon action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.CreateExpressGatewayServiceConditionKeys">CreateExpressGatewayServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExpressGatewayService action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.CreateServiceConditionKeys">CreateServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateService action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.CreateTaskSetConditionKeys">CreateTaskSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTaskSet action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DAEMON">DAEMON</a></code> | <code>string</code> | Condition key: ecs:daemon (ARN). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DAEMON_TASK_DEFINITION">DAEMON_TASK_DEFINITION</a></code> | <code>string</code> | Condition key: ecs:daemon-task-definition (ARN). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DeleteAccountSettingConditionKeys">DeleteAccountSettingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAccountSetting action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DeleteAttributesConditionKeys">DeleteAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAttributes action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DeleteCapacityProviderConditionKeys">DeleteCapacityProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCapacityProvider action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DeleteServiceConditionKeys">DeleteServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteService action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DeleteTaskDefinitionsConditionKeys">DeleteTaskDefinitionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTaskDefinitions action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DeleteTaskSetConditionKeys">DeleteTaskSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTaskSet action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DescribeCapacityProvidersConditionKeys">DescribeCapacityProvidersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCapacityProviders action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DescribeContainerInstancesConditionKeys">DescribeContainerInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeContainerInstances action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DescribeServicesConditionKeys">DescribeServicesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeServices action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DescribeTasksConditionKeys">DescribeTasksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeTasks action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.DescribeTaskSetsConditionKeys">DescribeTaskSetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeTaskSets action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ENABLE_EBS_VOLUMES">ENABLE_EBS_VOLUMES</a></code> | <code>string</code> | Condition key: ecs:enable-ebs-volumes (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ENABLE_ECS_MANAGED_TAGS">ENABLE_ECS_MANAGED_TAGS</a></code> | <code>string</code> | Condition key: ecs:enable-ecs-managed-tags (Bool). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ENABLE_EXECUTE_COMMAND">ENABLE_EXECUTE_COMMAND</a></code> | <code>string</code> | Condition key: ecs:enable-execute-command (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ENABLE_SERVICE_CONNECT">ENABLE_SERVICE_CONNECT</a></code> | <code>string</code> | Condition key: ecs:enable-service-connect (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ENABLE_VPC_LATTICE">ENABLE_VPC_LATTICE</a></code> | <code>string</code> | Condition key: ecs:enable-vpc-lattice (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ExecuteCommandConditionKeys">ExecuteCommandConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExecuteCommand action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.FARGATE_EPHEMERAL_STORAGE_KMS_KEY">FARGATE_EPHEMERAL_STORAGE_KMS_KEY</a></code> | <code>string</code> | Condition key: ecs:fargate-ephemeral-storage-kms-key (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.GATEWAY">GATEWAY</a></code> | <code>string</code> | Condition key: ecs:gateway (ARN). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.INSTANCE_METADATA_TAGS_PROPAGATION">INSTANCE_METADATA_TAGS_PROPAGATION</a></code> | <code>string</code> | Condition key: ecs:instance-metadata-tags-propagation (Bool). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ListDaemonsConditionKeys">ListDaemonsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDaemons action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ListServicesByNamespaceConditionKeys">ListServicesByNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListServicesByNamespace action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ListServicesConditionKeys">ListServicesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListServices action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.ListTasksConditionKeys">ListTasksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTasks action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.NAMESPACE">NAMESPACE</a></code> | <code>string</code> | Condition key: ecs:namespace (ARN). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.PollConditionKeys">PollConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Poll action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.PRIVILEGED">PRIVILEGED</a></code> | <code>string</code> | Condition key: ecs:privileged (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.PROPAGATE_TAGS">PROPAGATE_TAGS</a></code> | <code>string</code> | Condition key: ecs:propagate-tags (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.PutAccountSettingConditionKeys">PutAccountSettingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountSetting action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.PutAccountSettingDefaultConditionKeys">PutAccountSettingDefaultConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountSettingDefault action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.PutAttributesConditionKeys">PutAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAttributes action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.PutClusterCapacityProvidersConditionKeys">PutClusterCapacityProvidersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutClusterCapacityProviders action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.RegisterContainerInstanceConditionKeys">RegisterContainerInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterContainerInstance action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.RegisterDaemonTaskDefinitionConditionKeys">RegisterDaemonTaskDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterDaemonTaskDefinition action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.RegisterTaskDefinitionConditionKeys">RegisterTaskDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterTaskDefinition action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: ecs:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.RunTaskConditionKeys">RunTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RunTask action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.SERVICE">SERVICE</a></code> | <code>string</code> | Condition key: ecs:service (ARN). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.StartTaskConditionKeys">StartTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTask action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.StartTelemetrySessionConditionKeys">StartTelemetrySessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTelemetrySession action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.StopTaskConditionKeys">StopTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopTask action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.SUBNET">SUBNET</a></code> | <code>string</code> | Condition key: ecs:subnet (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.TASK">TASK</a></code> | <code>string</code> | Condition key: ecs:task (ARN). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.TASK_CPU">TASK_CPU</a></code> | <code>string</code> | Condition key: ecs:task-cpu (Numeric). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.TASK_DEFINITION">TASK_DEFINITION</a></code> | <code>string</code> | Condition key: ecs:task-definition (ARN). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.TASK_MEMORY">TASK_MEMORY</a></code> | <code>string</code> | Condition key: ecs:task-memory (Numeric). |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.UpdateCapacityProviderConditionKeys">UpdateCapacityProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCapacityProvider action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.UpdateClusterConditionKeys">UpdateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCluster action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.UpdateContainerAgentConditionKeys">UpdateContainerAgentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContainerAgent action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.UpdateContainerInstancesStateConditionKeys">UpdateContainerInstancesStateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContainerInstancesState action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.UpdateDaemonConditionKeys">UpdateDaemonConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDaemon action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.UpdateExpressGatewayServiceConditionKeys">UpdateExpressGatewayServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateExpressGatewayService action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.UpdateServiceConditionKeys">UpdateServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateService action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.UpdateServicePrimaryTaskSetConditionKeys">UpdateServicePrimaryTaskSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateServicePrimaryTaskSet action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.UpdateTaskProtectionConditionKeys">UpdateTaskProtectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTaskProtection action. |
| <code><a href="#@cdk_utils/iam.ecs.ECSConditions.property.UpdateTaskSetConditionKeys">UpdateTaskSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTaskSet action. |

---

##### `ACCOUNT_SETTING`<sup>Required</sup> <a name="ACCOUNT_SETTING" id="@cdk_utils/iam.ecs.ECSConditions.property.ACCOUNT_SETTING"></a>

```typescript
public readonly ACCOUNT_SETTING: string;
```

- *Type:* string

Condition key: ecs:account-setting (String).

---

##### `actionGetTaskProtectionConditionKeys`<sup>Required</sup> <a name="actionGetTaskProtectionConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.actionGetTaskProtectionConditionKeys"></a>

```typescript
public readonly actionGetTaskProtectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTaskProtection action.

---

##### `AUTO_ASSIGN_PUBLIC_IP`<sup>Required</sup> <a name="AUTO_ASSIGN_PUBLIC_IP" id="@cdk_utils/iam.ecs.ECSConditions.property.AUTO_ASSIGN_PUBLIC_IP"></a>

```typescript
public readonly AUTO_ASSIGN_PUBLIC_IP: string;
```

- *Type:* string

Condition key: ecs:auto-assign-public-ip (Bool).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ecs.ECSConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ecs.ECSConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ecs.ECSConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CAPACITY_PROVIDER`<sup>Required</sup> <a name="CAPACITY_PROVIDER" id="@cdk_utils/iam.ecs.ECSConditions.property.CAPACITY_PROVIDER"></a>

```typescript
public readonly CAPACITY_PROVIDER: string;
```

- *Type:* string

Condition key: ecs:capacity-provider (ArrayOfARN).

---

##### `CLUSTER`<sup>Required</sup> <a name="CLUSTER" id="@cdk_utils/iam.ecs.ECSConditions.property.CLUSTER"></a>

```typescript
public readonly CLUSTER: string;
```

- *Type:* string

Condition key: ecs:cluster (ARN).

---

##### `COMPUTE_COMPATIBILITY`<sup>Required</sup> <a name="COMPUTE_COMPATIBILITY" id="@cdk_utils/iam.ecs.ECSConditions.property.COMPUTE_COMPATIBILITY"></a>

```typescript
public readonly COMPUTE_COMPATIBILITY: string;
```

- *Type:* string

Condition key: ecs:compute-compatibility (ArrayOfString).

---

##### `CONTAINER_INSTANCES`<sup>Required</sup> <a name="CONTAINER_INSTANCES" id="@cdk_utils/iam.ecs.ECSConditions.property.CONTAINER_INSTANCES"></a>

```typescript
public readonly CONTAINER_INSTANCES: string;
```

- *Type:* string

Condition key: ecs:container-instances (ARN).

---

##### `CONTAINER_NAME`<sup>Required</sup> <a name="CONTAINER_NAME" id="@cdk_utils/iam.ecs.ECSConditions.property.CONTAINER_NAME"></a>

```typescript
public readonly CONTAINER_NAME: string;
```

- *Type:* string

Condition key: ecs:container-name (String).

---

##### `CREATE_ACTION`<sup>Required</sup> <a name="CREATE_ACTION" id="@cdk_utils/iam.ecs.ECSConditions.property.CREATE_ACTION"></a>

```typescript
public readonly CREATE_ACTION: string;
```

- *Type:* string

Condition key: ecs:CreateAction (String).

---

##### `CreateCapacityProviderConditionKeys`<sup>Required</sup> <a name="CreateCapacityProviderConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.CreateCapacityProviderConditionKeys"></a>

```typescript
public readonly CreateCapacityProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCapacityProvider action.

---

##### `CreateClusterConditionKeys`<sup>Required</sup> <a name="CreateClusterConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.CreateClusterConditionKeys"></a>

```typescript
public readonly CreateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCluster action.

---

##### `CreateDaemonConditionKeys`<sup>Required</sup> <a name="CreateDaemonConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.CreateDaemonConditionKeys"></a>

```typescript
public readonly CreateDaemonConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDaemon action.

---

##### `CreateExpressGatewayServiceConditionKeys`<sup>Required</sup> <a name="CreateExpressGatewayServiceConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.CreateExpressGatewayServiceConditionKeys"></a>

```typescript
public readonly CreateExpressGatewayServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExpressGatewayService action.

---

##### `CreateServiceConditionKeys`<sup>Required</sup> <a name="CreateServiceConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.CreateServiceConditionKeys"></a>

```typescript
public readonly CreateServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateService action.

---

##### `CreateTaskSetConditionKeys`<sup>Required</sup> <a name="CreateTaskSetConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.CreateTaskSetConditionKeys"></a>

```typescript
public readonly CreateTaskSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTaskSet action.

---

##### `DAEMON`<sup>Required</sup> <a name="DAEMON" id="@cdk_utils/iam.ecs.ECSConditions.property.DAEMON"></a>

```typescript
public readonly DAEMON: string;
```

- *Type:* string

Condition key: ecs:daemon (ARN).

---

##### `DAEMON_TASK_DEFINITION`<sup>Required</sup> <a name="DAEMON_TASK_DEFINITION" id="@cdk_utils/iam.ecs.ECSConditions.property.DAEMON_TASK_DEFINITION"></a>

```typescript
public readonly DAEMON_TASK_DEFINITION: string;
```

- *Type:* string

Condition key: ecs:daemon-task-definition (ARN).

---

##### `DeleteAccountSettingConditionKeys`<sup>Required</sup> <a name="DeleteAccountSettingConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.DeleteAccountSettingConditionKeys"></a>

```typescript
public readonly DeleteAccountSettingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAccountSetting action.

---

##### `DeleteAttributesConditionKeys`<sup>Required</sup> <a name="DeleteAttributesConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.DeleteAttributesConditionKeys"></a>

```typescript
public readonly DeleteAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAttributes action.

---

##### `DeleteCapacityProviderConditionKeys`<sup>Required</sup> <a name="DeleteCapacityProviderConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.DeleteCapacityProviderConditionKeys"></a>

```typescript
public readonly DeleteCapacityProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCapacityProvider action.

---

##### `DeleteServiceConditionKeys`<sup>Required</sup> <a name="DeleteServiceConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.DeleteServiceConditionKeys"></a>

```typescript
public readonly DeleteServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteService action.

---

##### `DeleteTaskDefinitionsConditionKeys`<sup>Required</sup> <a name="DeleteTaskDefinitionsConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.DeleteTaskDefinitionsConditionKeys"></a>

```typescript
public readonly DeleteTaskDefinitionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTaskDefinitions action.

---

##### `DeleteTaskSetConditionKeys`<sup>Required</sup> <a name="DeleteTaskSetConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.DeleteTaskSetConditionKeys"></a>

```typescript
public readonly DeleteTaskSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTaskSet action.

---

##### `DescribeCapacityProvidersConditionKeys`<sup>Required</sup> <a name="DescribeCapacityProvidersConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.DescribeCapacityProvidersConditionKeys"></a>

```typescript
public readonly DescribeCapacityProvidersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCapacityProviders action.

---

##### `DescribeContainerInstancesConditionKeys`<sup>Required</sup> <a name="DescribeContainerInstancesConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.DescribeContainerInstancesConditionKeys"></a>

```typescript
public readonly DescribeContainerInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeContainerInstances action.

---

##### `DescribeServicesConditionKeys`<sup>Required</sup> <a name="DescribeServicesConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.DescribeServicesConditionKeys"></a>

```typescript
public readonly DescribeServicesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeServices action.

---

##### `DescribeTasksConditionKeys`<sup>Required</sup> <a name="DescribeTasksConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.DescribeTasksConditionKeys"></a>

```typescript
public readonly DescribeTasksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeTasks action.

---

##### `DescribeTaskSetsConditionKeys`<sup>Required</sup> <a name="DescribeTaskSetsConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.DescribeTaskSetsConditionKeys"></a>

```typescript
public readonly DescribeTaskSetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeTaskSets action.

---

##### `ENABLE_EBS_VOLUMES`<sup>Required</sup> <a name="ENABLE_EBS_VOLUMES" id="@cdk_utils/iam.ecs.ECSConditions.property.ENABLE_EBS_VOLUMES"></a>

```typescript
public readonly ENABLE_EBS_VOLUMES: string;
```

- *Type:* string

Condition key: ecs:enable-ebs-volumes (String).

---

##### `ENABLE_ECS_MANAGED_TAGS`<sup>Required</sup> <a name="ENABLE_ECS_MANAGED_TAGS" id="@cdk_utils/iam.ecs.ECSConditions.property.ENABLE_ECS_MANAGED_TAGS"></a>

```typescript
public readonly ENABLE_ECS_MANAGED_TAGS: string;
```

- *Type:* string

Condition key: ecs:enable-ecs-managed-tags (Bool).

---

##### `ENABLE_EXECUTE_COMMAND`<sup>Required</sup> <a name="ENABLE_EXECUTE_COMMAND" id="@cdk_utils/iam.ecs.ECSConditions.property.ENABLE_EXECUTE_COMMAND"></a>

```typescript
public readonly ENABLE_EXECUTE_COMMAND: string;
```

- *Type:* string

Condition key: ecs:enable-execute-command (String).

---

##### `ENABLE_SERVICE_CONNECT`<sup>Required</sup> <a name="ENABLE_SERVICE_CONNECT" id="@cdk_utils/iam.ecs.ECSConditions.property.ENABLE_SERVICE_CONNECT"></a>

```typescript
public readonly ENABLE_SERVICE_CONNECT: string;
```

- *Type:* string

Condition key: ecs:enable-service-connect (String).

---

##### `ENABLE_VPC_LATTICE`<sup>Required</sup> <a name="ENABLE_VPC_LATTICE" id="@cdk_utils/iam.ecs.ECSConditions.property.ENABLE_VPC_LATTICE"></a>

```typescript
public readonly ENABLE_VPC_LATTICE: string;
```

- *Type:* string

Condition key: ecs:enable-vpc-lattice (String).

---

##### `ExecuteCommandConditionKeys`<sup>Required</sup> <a name="ExecuteCommandConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.ExecuteCommandConditionKeys"></a>

```typescript
public readonly ExecuteCommandConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExecuteCommand action.

---

##### `FARGATE_EPHEMERAL_STORAGE_KMS_KEY`<sup>Required</sup> <a name="FARGATE_EPHEMERAL_STORAGE_KMS_KEY" id="@cdk_utils/iam.ecs.ECSConditions.property.FARGATE_EPHEMERAL_STORAGE_KMS_KEY"></a>

```typescript
public readonly FARGATE_EPHEMERAL_STORAGE_KMS_KEY: string;
```

- *Type:* string

Condition key: ecs:fargate-ephemeral-storage-kms-key (String).

---

##### `GATEWAY`<sup>Required</sup> <a name="GATEWAY" id="@cdk_utils/iam.ecs.ECSConditions.property.GATEWAY"></a>

```typescript
public readonly GATEWAY: string;
```

- *Type:* string

Condition key: ecs:gateway (ARN).

---

##### `INSTANCE_METADATA_TAGS_PROPAGATION`<sup>Required</sup> <a name="INSTANCE_METADATA_TAGS_PROPAGATION" id="@cdk_utils/iam.ecs.ECSConditions.property.INSTANCE_METADATA_TAGS_PROPAGATION"></a>

```typescript
public readonly INSTANCE_METADATA_TAGS_PROPAGATION: string;
```

- *Type:* string

Condition key: ecs:instance-metadata-tags-propagation (Bool).

---

##### `ListDaemonsConditionKeys`<sup>Required</sup> <a name="ListDaemonsConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.ListDaemonsConditionKeys"></a>

```typescript
public readonly ListDaemonsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDaemons action.

---

##### `ListServicesByNamespaceConditionKeys`<sup>Required</sup> <a name="ListServicesByNamespaceConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.ListServicesByNamespaceConditionKeys"></a>

```typescript
public readonly ListServicesByNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListServicesByNamespace action.

---

##### `ListServicesConditionKeys`<sup>Required</sup> <a name="ListServicesConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.ListServicesConditionKeys"></a>

```typescript
public readonly ListServicesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListServices action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ListTasksConditionKeys`<sup>Required</sup> <a name="ListTasksConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.ListTasksConditionKeys"></a>

```typescript
public readonly ListTasksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTasks action.

---

##### `NAMESPACE`<sup>Required</sup> <a name="NAMESPACE" id="@cdk_utils/iam.ecs.ECSConditions.property.NAMESPACE"></a>

```typescript
public readonly NAMESPACE: string;
```

- *Type:* string

Condition key: ecs:namespace (ARN).

---

##### `PollConditionKeys`<sup>Required</sup> <a name="PollConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.PollConditionKeys"></a>

```typescript
public readonly PollConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Poll action.

---

##### `PRIVILEGED`<sup>Required</sup> <a name="PRIVILEGED" id="@cdk_utils/iam.ecs.ECSConditions.property.PRIVILEGED"></a>

```typescript
public readonly PRIVILEGED: string;
```

- *Type:* string

Condition key: ecs:privileged (String).

---

##### `PROPAGATE_TAGS`<sup>Required</sup> <a name="PROPAGATE_TAGS" id="@cdk_utils/iam.ecs.ECSConditions.property.PROPAGATE_TAGS"></a>

```typescript
public readonly PROPAGATE_TAGS: string;
```

- *Type:* string

Condition key: ecs:propagate-tags (String).

---

##### `PutAccountSettingConditionKeys`<sup>Required</sup> <a name="PutAccountSettingConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.PutAccountSettingConditionKeys"></a>

```typescript
public readonly PutAccountSettingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountSetting action.

---

##### `PutAccountSettingDefaultConditionKeys`<sup>Required</sup> <a name="PutAccountSettingDefaultConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.PutAccountSettingDefaultConditionKeys"></a>

```typescript
public readonly PutAccountSettingDefaultConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountSettingDefault action.

---

##### `PutAttributesConditionKeys`<sup>Required</sup> <a name="PutAttributesConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.PutAttributesConditionKeys"></a>

```typescript
public readonly PutAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAttributes action.

---

##### `PutClusterCapacityProvidersConditionKeys`<sup>Required</sup> <a name="PutClusterCapacityProvidersConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.PutClusterCapacityProvidersConditionKeys"></a>

```typescript
public readonly PutClusterCapacityProvidersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutClusterCapacityProviders action.

---

##### `RegisterContainerInstanceConditionKeys`<sup>Required</sup> <a name="RegisterContainerInstanceConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.RegisterContainerInstanceConditionKeys"></a>

```typescript
public readonly RegisterContainerInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterContainerInstance action.

---

##### `RegisterDaemonTaskDefinitionConditionKeys`<sup>Required</sup> <a name="RegisterDaemonTaskDefinitionConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.RegisterDaemonTaskDefinitionConditionKeys"></a>

```typescript
public readonly RegisterDaemonTaskDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterDaemonTaskDefinition action.

---

##### `RegisterTaskDefinitionConditionKeys`<sup>Required</sup> <a name="RegisterTaskDefinitionConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.RegisterTaskDefinitionConditionKeys"></a>

```typescript
public readonly RegisterTaskDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterTaskDefinition action.

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.ecs.ECSConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: ecs:ResourceTag/${TagKey} (String).

---

##### `RunTaskConditionKeys`<sup>Required</sup> <a name="RunTaskConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.RunTaskConditionKeys"></a>

```typescript
public readonly RunTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RunTask action.

---

##### `SERVICE`<sup>Required</sup> <a name="SERVICE" id="@cdk_utils/iam.ecs.ECSConditions.property.SERVICE"></a>

```typescript
public readonly SERVICE: string;
```

- *Type:* string

Condition key: ecs:service (ARN).

---

##### `StartTaskConditionKeys`<sup>Required</sup> <a name="StartTaskConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.StartTaskConditionKeys"></a>

```typescript
public readonly StartTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTask action.

---

##### `StartTelemetrySessionConditionKeys`<sup>Required</sup> <a name="StartTelemetrySessionConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.StartTelemetrySessionConditionKeys"></a>

```typescript
public readonly StartTelemetrySessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTelemetrySession action.

---

##### `StopTaskConditionKeys`<sup>Required</sup> <a name="StopTaskConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.StopTaskConditionKeys"></a>

```typescript
public readonly StopTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopTask action.

---

##### `SUBNET`<sup>Required</sup> <a name="SUBNET" id="@cdk_utils/iam.ecs.ECSConditions.property.SUBNET"></a>

```typescript
public readonly SUBNET: string;
```

- *Type:* string

Condition key: ecs:subnet (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TASK`<sup>Required</sup> <a name="TASK" id="@cdk_utils/iam.ecs.ECSConditions.property.TASK"></a>

```typescript
public readonly TASK: string;
```

- *Type:* string

Condition key: ecs:task (ARN).

---

##### `TASK_CPU`<sup>Required</sup> <a name="TASK_CPU" id="@cdk_utils/iam.ecs.ECSConditions.property.TASK_CPU"></a>

```typescript
public readonly TASK_CPU: string;
```

- *Type:* string

Condition key: ecs:task-cpu (Numeric).

---

##### `TASK_DEFINITION`<sup>Required</sup> <a name="TASK_DEFINITION" id="@cdk_utils/iam.ecs.ECSConditions.property.TASK_DEFINITION"></a>

```typescript
public readonly TASK_DEFINITION: string;
```

- *Type:* string

Condition key: ecs:task-definition (ARN).

---

##### `TASK_MEMORY`<sup>Required</sup> <a name="TASK_MEMORY" id="@cdk_utils/iam.ecs.ECSConditions.property.TASK_MEMORY"></a>

```typescript
public readonly TASK_MEMORY: string;
```

- *Type:* string

Condition key: ecs:task-memory (Numeric).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateCapacityProviderConditionKeys`<sup>Required</sup> <a name="UpdateCapacityProviderConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.UpdateCapacityProviderConditionKeys"></a>

```typescript
public readonly UpdateCapacityProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCapacityProvider action.

---

##### `UpdateClusterConditionKeys`<sup>Required</sup> <a name="UpdateClusterConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.UpdateClusterConditionKeys"></a>

```typescript
public readonly UpdateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCluster action.

---

##### `UpdateContainerAgentConditionKeys`<sup>Required</sup> <a name="UpdateContainerAgentConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.UpdateContainerAgentConditionKeys"></a>

```typescript
public readonly UpdateContainerAgentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContainerAgent action.

---

##### `UpdateContainerInstancesStateConditionKeys`<sup>Required</sup> <a name="UpdateContainerInstancesStateConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.UpdateContainerInstancesStateConditionKeys"></a>

```typescript
public readonly UpdateContainerInstancesStateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContainerInstancesState action.

---

##### `UpdateDaemonConditionKeys`<sup>Required</sup> <a name="UpdateDaemonConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.UpdateDaemonConditionKeys"></a>

```typescript
public readonly UpdateDaemonConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDaemon action.

---

##### `UpdateExpressGatewayServiceConditionKeys`<sup>Required</sup> <a name="UpdateExpressGatewayServiceConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.UpdateExpressGatewayServiceConditionKeys"></a>

```typescript
public readonly UpdateExpressGatewayServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateExpressGatewayService action.

---

##### `UpdateServiceConditionKeys`<sup>Required</sup> <a name="UpdateServiceConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.UpdateServiceConditionKeys"></a>

```typescript
public readonly UpdateServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateService action.

---

##### `UpdateServicePrimaryTaskSetConditionKeys`<sup>Required</sup> <a name="UpdateServicePrimaryTaskSetConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.UpdateServicePrimaryTaskSetConditionKeys"></a>

```typescript
public readonly UpdateServicePrimaryTaskSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateServicePrimaryTaskSet action.

---

##### `UpdateTaskProtectionConditionKeys`<sup>Required</sup> <a name="UpdateTaskProtectionConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.UpdateTaskProtectionConditionKeys"></a>

```typescript
public readonly UpdateTaskProtectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTaskProtection action.

---

##### `UpdateTaskSetConditionKeys`<sup>Required</sup> <a name="UpdateTaskSetConditionKeys" id="@cdk_utils/iam.ecs.ECSConditions.property.UpdateTaskSetConditionKeys"></a>

```typescript
public readonly UpdateTaskSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTaskSet action.

---

### ECSOperations <a name="ECSOperations" id="@cdk_utils/iam.ecs.ECSOperations"></a>

API operation to required IAM actions mapping for ecs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecs.ECSOperations.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

new ecs.ECSOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ContinueServiceDeployment">ContinueServiceDeployment</a></code> | <code>string[]</code> | IAM actions required for the ContinueServiceDeployment API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.CreateCapacityProvider">CreateCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the CreateCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.CreateDaemon">CreateDaemon</a></code> | <code>string[]</code> | IAM actions required for the CreateDaemon API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.CreateExpressGatewayService">CreateExpressGatewayService</a></code> | <code>string[]</code> | IAM actions required for the CreateExpressGatewayService API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.CreateService">CreateService</a></code> | <code>string[]</code> | IAM actions required for the CreateService API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.CreateTaskSet">CreateTaskSet</a></code> | <code>string[]</code> | IAM actions required for the CreateTaskSet API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeleteAccountSetting">DeleteAccountSetting</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountSetting API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeleteAttributes">DeleteAttributes</a></code> | <code>string[]</code> | IAM actions required for the DeleteAttributes API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeleteCapacityProvider">DeleteCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the DeleteCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeleteDaemon">DeleteDaemon</a></code> | <code>string[]</code> | IAM actions required for the DeleteDaemon API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeleteDaemonTaskDefinition">DeleteDaemonTaskDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteDaemonTaskDefinition API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeleteExpressGatewayService">DeleteExpressGatewayService</a></code> | <code>string[]</code> | IAM actions required for the DeleteExpressGatewayService API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeleteService">DeleteService</a></code> | <code>string[]</code> | IAM actions required for the DeleteService API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeleteTaskDefinitions">DeleteTaskDefinitions</a></code> | <code>string[]</code> | IAM actions required for the DeleteTaskDefinitions API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeleteTaskSet">DeleteTaskSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteTaskSet API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeregisterContainerInstance">DeregisterContainerInstance</a></code> | <code>string[]</code> | IAM actions required for the DeregisterContainerInstance API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DeregisterTaskDefinition">DeregisterTaskDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeregisterTaskDefinition API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeCapacityProviders">DescribeCapacityProviders</a></code> | <code>string[]</code> | IAM actions required for the DescribeCapacityProviders API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeClusters">DescribeClusters</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusters API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeContainerInstances">DescribeContainerInstances</a></code> | <code>string[]</code> | IAM actions required for the DescribeContainerInstances API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeDaemon">DescribeDaemon</a></code> | <code>string[]</code> | IAM actions required for the DescribeDaemon API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeDaemonDeployments">DescribeDaemonDeployments</a></code> | <code>string[]</code> | IAM actions required for the DescribeDaemonDeployments API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeDaemonRevisions">DescribeDaemonRevisions</a></code> | <code>string[]</code> | IAM actions required for the DescribeDaemonRevisions API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeDaemonTaskDefinition">DescribeDaemonTaskDefinition</a></code> | <code>string[]</code> | IAM actions required for the DescribeDaemonTaskDefinition API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeExpressGatewayService">DescribeExpressGatewayService</a></code> | <code>string[]</code> | IAM actions required for the DescribeExpressGatewayService API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeServiceDeployments">DescribeServiceDeployments</a></code> | <code>string[]</code> | IAM actions required for the DescribeServiceDeployments API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeServiceRevisions">DescribeServiceRevisions</a></code> | <code>string[]</code> | IAM actions required for the DescribeServiceRevisions API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeServices">DescribeServices</a></code> | <code>string[]</code> | IAM actions required for the DescribeServices API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeTaskDefinition">DescribeTaskDefinition</a></code> | <code>string[]</code> | IAM actions required for the DescribeTaskDefinition API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeTasks">DescribeTasks</a></code> | <code>string[]</code> | IAM actions required for the DescribeTasks API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DescribeTaskSets">DescribeTaskSets</a></code> | <code>string[]</code> | IAM actions required for the DescribeTaskSets API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.DiscoverPollEndpoint">DiscoverPollEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DiscoverPollEndpoint API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ExecuteCommand">ExecuteCommand</a></code> | <code>string[]</code> | IAM actions required for the ExecuteCommand API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListAccountSettings">ListAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the ListAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListAttributes">ListAttributes</a></code> | <code>string[]</code> | IAM actions required for the ListAttributes API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListClusters">ListClusters</a></code> | <code>string[]</code> | IAM actions required for the ListClusters API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListContainerInstances">ListContainerInstances</a></code> | <code>string[]</code> | IAM actions required for the ListContainerInstances API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListDaemonDeployments">ListDaemonDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListDaemonDeployments API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListDaemons">ListDaemons</a></code> | <code>string[]</code> | IAM actions required for the ListDaemons API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListDaemonTaskDefinitions">ListDaemonTaskDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListDaemonTaskDefinitions API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListServiceDeployments">ListServiceDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListServiceDeployments API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListServices">ListServices</a></code> | <code>string[]</code> | IAM actions required for the ListServices API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListServicesByNamespace">ListServicesByNamespace</a></code> | <code>string[]</code> | IAM actions required for the ListServicesByNamespace API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListTaskDefinitionFamilies">ListTaskDefinitionFamilies</a></code> | <code>string[]</code> | IAM actions required for the ListTaskDefinitionFamilies API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListTaskDefinitions">ListTaskDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListTaskDefinitions API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.ListTasks">ListTasks</a></code> | <code>string[]</code> | IAM actions required for the ListTasks API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.opGetTaskProtection">opGetTaskProtection</a></code> | <code>string[]</code> | IAM actions required for the GetTaskProtection API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.PutAccountSetting">PutAccountSetting</a></code> | <code>string[]</code> | IAM actions required for the PutAccountSetting API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.PutAccountSettingDefault">PutAccountSettingDefault</a></code> | <code>string[]</code> | IAM actions required for the PutAccountSettingDefault API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.PutAttributes">PutAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutAttributes API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.PutClusterCapacityProviders">PutClusterCapacityProviders</a></code> | <code>string[]</code> | IAM actions required for the PutClusterCapacityProviders API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.RegisterContainerInstance">RegisterContainerInstance</a></code> | <code>string[]</code> | IAM actions required for the RegisterContainerInstance API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.RegisterDaemonTaskDefinition">RegisterDaemonTaskDefinition</a></code> | <code>string[]</code> | IAM actions required for the RegisterDaemonTaskDefinition API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.RegisterTaskDefinition">RegisterTaskDefinition</a></code> | <code>string[]</code> | IAM actions required for the RegisterTaskDefinition API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.RunTask">RunTask</a></code> | <code>string[]</code> | IAM actions required for the RunTask API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.StartTask">StartTask</a></code> | <code>string[]</code> | IAM actions required for the StartTask API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.StopServiceDeployment">StopServiceDeployment</a></code> | <code>string[]</code> | IAM actions required for the StopServiceDeployment API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.StopTask">StopTask</a></code> | <code>string[]</code> | IAM actions required for the StopTask API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.SubmitAttachmentStateChanges">SubmitAttachmentStateChanges</a></code> | <code>string[]</code> | IAM actions required for the SubmitAttachmentStateChanges API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.SubmitContainerStateChange">SubmitContainerStateChange</a></code> | <code>string[]</code> | IAM actions required for the SubmitContainerStateChange API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.SubmitTaskStateChange">SubmitTaskStateChange</a></code> | <code>string[]</code> | IAM actions required for the SubmitTaskStateChange API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UpdateCapacityProvider">UpdateCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the UpdateCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UpdateCluster">UpdateCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateCluster API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UpdateClusterSettings">UpdateClusterSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateClusterSettings API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UpdateContainerAgent">UpdateContainerAgent</a></code> | <code>string[]</code> | IAM actions required for the UpdateContainerAgent API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UpdateContainerInstancesState">UpdateContainerInstancesState</a></code> | <code>string[]</code> | IAM actions required for the UpdateContainerInstancesState API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UpdateDaemon">UpdateDaemon</a></code> | <code>string[]</code> | IAM actions required for the UpdateDaemon API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UpdateExpressGatewayService">UpdateExpressGatewayService</a></code> | <code>string[]</code> | IAM actions required for the UpdateExpressGatewayService API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UpdateService">UpdateService</a></code> | <code>string[]</code> | IAM actions required for the UpdateService API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UpdateServicePrimaryTaskSet">UpdateServicePrimaryTaskSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateServicePrimaryTaskSet API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UpdateTaskProtection">UpdateTaskProtection</a></code> | <code>string[]</code> | IAM actions required for the UpdateTaskProtection API call. |
| <code><a href="#@cdk_utils/iam.ecs.ECSOperations.property.UpdateTaskSet">UpdateTaskSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateTaskSet API call. |

---

##### `ContinueServiceDeployment`<sup>Required</sup> <a name="ContinueServiceDeployment" id="@cdk_utils/iam.ecs.ECSOperations.property.ContinueServiceDeployment"></a>

```typescript
public readonly ContinueServiceDeployment: string[];
```

- *Type:* string[]

IAM actions required for the ContinueServiceDeployment API call.

---

##### `CreateCapacityProvider`<sup>Required</sup> <a name="CreateCapacityProvider" id="@cdk_utils/iam.ecs.ECSOperations.property.CreateCapacityProvider"></a>

```typescript
public readonly CreateCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreateCapacityProvider API call.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.ecs.ECSOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateDaemon`<sup>Required</sup> <a name="CreateDaemon" id="@cdk_utils/iam.ecs.ECSOperations.property.CreateDaemon"></a>

```typescript
public readonly CreateDaemon: string[];
```

- *Type:* string[]

IAM actions required for the CreateDaemon API call.

---

##### `CreateExpressGatewayService`<sup>Required</sup> <a name="CreateExpressGatewayService" id="@cdk_utils/iam.ecs.ECSOperations.property.CreateExpressGatewayService"></a>

```typescript
public readonly CreateExpressGatewayService: string[];
```

- *Type:* string[]

IAM actions required for the CreateExpressGatewayService API call.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.ecs.ECSOperations.property.CreateService"></a>

```typescript
public readonly CreateService: string[];
```

- *Type:* string[]

IAM actions required for the CreateService API call.

---

##### `CreateTaskSet`<sup>Required</sup> <a name="CreateTaskSet" id="@cdk_utils/iam.ecs.ECSOperations.property.CreateTaskSet"></a>

```typescript
public readonly CreateTaskSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateTaskSet API call.

---

##### `DeleteAccountSetting`<sup>Required</sup> <a name="DeleteAccountSetting" id="@cdk_utils/iam.ecs.ECSOperations.property.DeleteAccountSetting"></a>

```typescript
public readonly DeleteAccountSetting: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountSetting API call.

---

##### `DeleteAttributes`<sup>Required</sup> <a name="DeleteAttributes" id="@cdk_utils/iam.ecs.ECSOperations.property.DeleteAttributes"></a>

```typescript
public readonly DeleteAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAttributes API call.

---

##### `DeleteCapacityProvider`<sup>Required</sup> <a name="DeleteCapacityProvider" id="@cdk_utils/iam.ecs.ECSOperations.property.DeleteCapacityProvider"></a>

```typescript
public readonly DeleteCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCapacityProvider API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.ecs.ECSOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteDaemon`<sup>Required</sup> <a name="DeleteDaemon" id="@cdk_utils/iam.ecs.ECSOperations.property.DeleteDaemon"></a>

```typescript
public readonly DeleteDaemon: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDaemon API call.

---

##### `DeleteDaemonTaskDefinition`<sup>Required</sup> <a name="DeleteDaemonTaskDefinition" id="@cdk_utils/iam.ecs.ECSOperations.property.DeleteDaemonTaskDefinition"></a>

```typescript
public readonly DeleteDaemonTaskDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDaemonTaskDefinition API call.

---

##### `DeleteExpressGatewayService`<sup>Required</sup> <a name="DeleteExpressGatewayService" id="@cdk_utils/iam.ecs.ECSOperations.property.DeleteExpressGatewayService"></a>

```typescript
public readonly DeleteExpressGatewayService: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExpressGatewayService API call.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.ecs.ECSOperations.property.DeleteService"></a>

```typescript
public readonly DeleteService: string[];
```

- *Type:* string[]

IAM actions required for the DeleteService API call.

---

##### `DeleteTaskDefinitions`<sup>Required</sup> <a name="DeleteTaskDefinitions" id="@cdk_utils/iam.ecs.ECSOperations.property.DeleteTaskDefinitions"></a>

```typescript
public readonly DeleteTaskDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTaskDefinitions API call.

---

##### `DeleteTaskSet`<sup>Required</sup> <a name="DeleteTaskSet" id="@cdk_utils/iam.ecs.ECSOperations.property.DeleteTaskSet"></a>

```typescript
public readonly DeleteTaskSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTaskSet API call.

---

##### `DeregisterContainerInstance`<sup>Required</sup> <a name="DeregisterContainerInstance" id="@cdk_utils/iam.ecs.ECSOperations.property.DeregisterContainerInstance"></a>

```typescript
public readonly DeregisterContainerInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterContainerInstance API call.

---

##### `DeregisterTaskDefinition`<sup>Required</sup> <a name="DeregisterTaskDefinition" id="@cdk_utils/iam.ecs.ECSOperations.property.DeregisterTaskDefinition"></a>

```typescript
public readonly DeregisterTaskDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterTaskDefinition API call.

---

##### `DescribeCapacityProviders`<sup>Required</sup> <a name="DescribeCapacityProviders" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeCapacityProviders"></a>

```typescript
public readonly DescribeCapacityProviders: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCapacityProviders API call.

---

##### `DescribeClusters`<sup>Required</sup> <a name="DescribeClusters" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeClusters"></a>

```typescript
public readonly DescribeClusters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusters API call.

---

##### `DescribeContainerInstances`<sup>Required</sup> <a name="DescribeContainerInstances" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeContainerInstances"></a>

```typescript
public readonly DescribeContainerInstances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContainerInstances API call.

---

##### `DescribeDaemon`<sup>Required</sup> <a name="DescribeDaemon" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeDaemon"></a>

```typescript
public readonly DescribeDaemon: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDaemon API call.

---

##### `DescribeDaemonDeployments`<sup>Required</sup> <a name="DescribeDaemonDeployments" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeDaemonDeployments"></a>

```typescript
public readonly DescribeDaemonDeployments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDaemonDeployments API call.

---

##### `DescribeDaemonRevisions`<sup>Required</sup> <a name="DescribeDaemonRevisions" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeDaemonRevisions"></a>

```typescript
public readonly DescribeDaemonRevisions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDaemonRevisions API call.

---

##### `DescribeDaemonTaskDefinition`<sup>Required</sup> <a name="DescribeDaemonTaskDefinition" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeDaemonTaskDefinition"></a>

```typescript
public readonly DescribeDaemonTaskDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDaemonTaskDefinition API call.

---

##### `DescribeExpressGatewayService`<sup>Required</sup> <a name="DescribeExpressGatewayService" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeExpressGatewayService"></a>

```typescript
public readonly DescribeExpressGatewayService: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExpressGatewayService API call.

---

##### `DescribeServiceDeployments`<sup>Required</sup> <a name="DescribeServiceDeployments" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeServiceDeployments"></a>

```typescript
public readonly DescribeServiceDeployments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServiceDeployments API call.

---

##### `DescribeServiceRevisions`<sup>Required</sup> <a name="DescribeServiceRevisions" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeServiceRevisions"></a>

```typescript
public readonly DescribeServiceRevisions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServiceRevisions API call.

---

##### `DescribeServices`<sup>Required</sup> <a name="DescribeServices" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeServices"></a>

```typescript
public readonly DescribeServices: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServices API call.

---

##### `DescribeTaskDefinition`<sup>Required</sup> <a name="DescribeTaskDefinition" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeTaskDefinition"></a>

```typescript
public readonly DescribeTaskDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTaskDefinition API call.

---

##### `DescribeTasks`<sup>Required</sup> <a name="DescribeTasks" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeTasks"></a>

```typescript
public readonly DescribeTasks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTasks API call.

---

##### `DescribeTaskSets`<sup>Required</sup> <a name="DescribeTaskSets" id="@cdk_utils/iam.ecs.ECSOperations.property.DescribeTaskSets"></a>

```typescript
public readonly DescribeTaskSets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTaskSets API call.

---

##### `DiscoverPollEndpoint`<sup>Required</sup> <a name="DiscoverPollEndpoint" id="@cdk_utils/iam.ecs.ECSOperations.property.DiscoverPollEndpoint"></a>

```typescript
public readonly DiscoverPollEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DiscoverPollEndpoint API call.

---

##### `ExecuteCommand`<sup>Required</sup> <a name="ExecuteCommand" id="@cdk_utils/iam.ecs.ECSOperations.property.ExecuteCommand"></a>

```typescript
public readonly ExecuteCommand: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteCommand API call.

---

##### `ListAccountSettings`<sup>Required</sup> <a name="ListAccountSettings" id="@cdk_utils/iam.ecs.ECSOperations.property.ListAccountSettings"></a>

```typescript
public readonly ListAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountSettings API call.

---

##### `ListAttributes`<sup>Required</sup> <a name="ListAttributes" id="@cdk_utils/iam.ecs.ECSOperations.property.ListAttributes"></a>

```typescript
public readonly ListAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ListAttributes API call.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.ecs.ECSOperations.property.ListClusters"></a>

```typescript
public readonly ListClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListClusters API call.

---

##### `ListContainerInstances`<sup>Required</sup> <a name="ListContainerInstances" id="@cdk_utils/iam.ecs.ECSOperations.property.ListContainerInstances"></a>

```typescript
public readonly ListContainerInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListContainerInstances API call.

---

##### `ListDaemonDeployments`<sup>Required</sup> <a name="ListDaemonDeployments" id="@cdk_utils/iam.ecs.ECSOperations.property.ListDaemonDeployments"></a>

```typescript
public readonly ListDaemonDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListDaemonDeployments API call.

---

##### `ListDaemons`<sup>Required</sup> <a name="ListDaemons" id="@cdk_utils/iam.ecs.ECSOperations.property.ListDaemons"></a>

```typescript
public readonly ListDaemons: string[];
```

- *Type:* string[]

IAM actions required for the ListDaemons API call.

---

##### `ListDaemonTaskDefinitions`<sup>Required</sup> <a name="ListDaemonTaskDefinitions" id="@cdk_utils/iam.ecs.ECSOperations.property.ListDaemonTaskDefinitions"></a>

```typescript
public readonly ListDaemonTaskDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListDaemonTaskDefinitions API call.

---

##### `ListServiceDeployments`<sup>Required</sup> <a name="ListServiceDeployments" id="@cdk_utils/iam.ecs.ECSOperations.property.ListServiceDeployments"></a>

```typescript
public readonly ListServiceDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceDeployments API call.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.ecs.ECSOperations.property.ListServices"></a>

```typescript
public readonly ListServices: string[];
```

- *Type:* string[]

IAM actions required for the ListServices API call.

---

##### `ListServicesByNamespace`<sup>Required</sup> <a name="ListServicesByNamespace" id="@cdk_utils/iam.ecs.ECSOperations.property.ListServicesByNamespace"></a>

```typescript
public readonly ListServicesByNamespace: string[];
```

- *Type:* string[]

IAM actions required for the ListServicesByNamespace API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ecs.ECSOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTaskDefinitionFamilies`<sup>Required</sup> <a name="ListTaskDefinitionFamilies" id="@cdk_utils/iam.ecs.ECSOperations.property.ListTaskDefinitionFamilies"></a>

```typescript
public readonly ListTaskDefinitionFamilies: string[];
```

- *Type:* string[]

IAM actions required for the ListTaskDefinitionFamilies API call.

---

##### `ListTaskDefinitions`<sup>Required</sup> <a name="ListTaskDefinitions" id="@cdk_utils/iam.ecs.ECSOperations.property.ListTaskDefinitions"></a>

```typescript
public readonly ListTaskDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListTaskDefinitions API call.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.ecs.ECSOperations.property.ListTasks"></a>

```typescript
public readonly ListTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListTasks API call.

---

##### `opGetTaskProtection`<sup>Required</sup> <a name="opGetTaskProtection" id="@cdk_utils/iam.ecs.ECSOperations.property.opGetTaskProtection"></a>

```typescript
public readonly opGetTaskProtection: string[];
```

- *Type:* string[]

IAM actions required for the GetTaskProtection API call.

---

##### `PutAccountSetting`<sup>Required</sup> <a name="PutAccountSetting" id="@cdk_utils/iam.ecs.ECSOperations.property.PutAccountSetting"></a>

```typescript
public readonly PutAccountSetting: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountSetting API call.

---

##### `PutAccountSettingDefault`<sup>Required</sup> <a name="PutAccountSettingDefault" id="@cdk_utils/iam.ecs.ECSOperations.property.PutAccountSettingDefault"></a>

```typescript
public readonly PutAccountSettingDefault: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountSettingDefault API call.

---

##### `PutAttributes`<sup>Required</sup> <a name="PutAttributes" id="@cdk_utils/iam.ecs.ECSOperations.property.PutAttributes"></a>

```typescript
public readonly PutAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutAttributes API call.

---

##### `PutClusterCapacityProviders`<sup>Required</sup> <a name="PutClusterCapacityProviders" id="@cdk_utils/iam.ecs.ECSOperations.property.PutClusterCapacityProviders"></a>

```typescript
public readonly PutClusterCapacityProviders: string[];
```

- *Type:* string[]

IAM actions required for the PutClusterCapacityProviders API call.

---

##### `RegisterContainerInstance`<sup>Required</sup> <a name="RegisterContainerInstance" id="@cdk_utils/iam.ecs.ECSOperations.property.RegisterContainerInstance"></a>

```typescript
public readonly RegisterContainerInstance: string[];
```

- *Type:* string[]

IAM actions required for the RegisterContainerInstance API call.

---

##### `RegisterDaemonTaskDefinition`<sup>Required</sup> <a name="RegisterDaemonTaskDefinition" id="@cdk_utils/iam.ecs.ECSOperations.property.RegisterDaemonTaskDefinition"></a>

```typescript
public readonly RegisterDaemonTaskDefinition: string[];
```

- *Type:* string[]

IAM actions required for the RegisterDaemonTaskDefinition API call.

---

##### `RegisterTaskDefinition`<sup>Required</sup> <a name="RegisterTaskDefinition" id="@cdk_utils/iam.ecs.ECSOperations.property.RegisterTaskDefinition"></a>

```typescript
public readonly RegisterTaskDefinition: string[];
```

- *Type:* string[]

IAM actions required for the RegisterTaskDefinition API call.

---

##### `RunTask`<sup>Required</sup> <a name="RunTask" id="@cdk_utils/iam.ecs.ECSOperations.property.RunTask"></a>

```typescript
public readonly RunTask: string[];
```

- *Type:* string[]

IAM actions required for the RunTask API call.

---

##### `StartTask`<sup>Required</sup> <a name="StartTask" id="@cdk_utils/iam.ecs.ECSOperations.property.StartTask"></a>

```typescript
public readonly StartTask: string[];
```

- *Type:* string[]

IAM actions required for the StartTask API call.

---

##### `StopServiceDeployment`<sup>Required</sup> <a name="StopServiceDeployment" id="@cdk_utils/iam.ecs.ECSOperations.property.StopServiceDeployment"></a>

```typescript
public readonly StopServiceDeployment: string[];
```

- *Type:* string[]

IAM actions required for the StopServiceDeployment API call.

---

##### `StopTask`<sup>Required</sup> <a name="StopTask" id="@cdk_utils/iam.ecs.ECSOperations.property.StopTask"></a>

```typescript
public readonly StopTask: string[];
```

- *Type:* string[]

IAM actions required for the StopTask API call.

---

##### `SubmitAttachmentStateChanges`<sup>Required</sup> <a name="SubmitAttachmentStateChanges" id="@cdk_utils/iam.ecs.ECSOperations.property.SubmitAttachmentStateChanges"></a>

```typescript
public readonly SubmitAttachmentStateChanges: string[];
```

- *Type:* string[]

IAM actions required for the SubmitAttachmentStateChanges API call.

---

##### `SubmitContainerStateChange`<sup>Required</sup> <a name="SubmitContainerStateChange" id="@cdk_utils/iam.ecs.ECSOperations.property.SubmitContainerStateChange"></a>

```typescript
public readonly SubmitContainerStateChange: string[];
```

- *Type:* string[]

IAM actions required for the SubmitContainerStateChange API call.

---

##### `SubmitTaskStateChange`<sup>Required</sup> <a name="SubmitTaskStateChange" id="@cdk_utils/iam.ecs.ECSOperations.property.SubmitTaskStateChange"></a>

```typescript
public readonly SubmitTaskStateChange: string[];
```

- *Type:* string[]

IAM actions required for the SubmitTaskStateChange API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ecs.ECSOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ecs.ECSOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCapacityProvider`<sup>Required</sup> <a name="UpdateCapacityProvider" id="@cdk_utils/iam.ecs.ECSOperations.property.UpdateCapacityProvider"></a>

```typescript
public readonly UpdateCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCapacityProvider API call.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.ecs.ECSOperations.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCluster API call.

---

##### `UpdateClusterSettings`<sup>Required</sup> <a name="UpdateClusterSettings" id="@cdk_utils/iam.ecs.ECSOperations.property.UpdateClusterSettings"></a>

```typescript
public readonly UpdateClusterSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateClusterSettings API call.

---

##### `UpdateContainerAgent`<sup>Required</sup> <a name="UpdateContainerAgent" id="@cdk_utils/iam.ecs.ECSOperations.property.UpdateContainerAgent"></a>

```typescript
public readonly UpdateContainerAgent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContainerAgent API call.

---

##### `UpdateContainerInstancesState`<sup>Required</sup> <a name="UpdateContainerInstancesState" id="@cdk_utils/iam.ecs.ECSOperations.property.UpdateContainerInstancesState"></a>

```typescript
public readonly UpdateContainerInstancesState: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContainerInstancesState API call.

---

##### `UpdateDaemon`<sup>Required</sup> <a name="UpdateDaemon" id="@cdk_utils/iam.ecs.ECSOperations.property.UpdateDaemon"></a>

```typescript
public readonly UpdateDaemon: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDaemon API call.

---

##### `UpdateExpressGatewayService`<sup>Required</sup> <a name="UpdateExpressGatewayService" id="@cdk_utils/iam.ecs.ECSOperations.property.UpdateExpressGatewayService"></a>

```typescript
public readonly UpdateExpressGatewayService: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExpressGatewayService API call.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.ecs.ECSOperations.property.UpdateService"></a>

```typescript
public readonly UpdateService: string[];
```

- *Type:* string[]

IAM actions required for the UpdateService API call.

---

##### `UpdateServicePrimaryTaskSet`<sup>Required</sup> <a name="UpdateServicePrimaryTaskSet" id="@cdk_utils/iam.ecs.ECSOperations.property.UpdateServicePrimaryTaskSet"></a>

```typescript
public readonly UpdateServicePrimaryTaskSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServicePrimaryTaskSet API call.

---

##### `UpdateTaskProtection`<sup>Required</sup> <a name="UpdateTaskProtection" id="@cdk_utils/iam.ecs.ECSOperations.property.UpdateTaskProtection"></a>

```typescript
public readonly UpdateTaskProtection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTaskProtection API call.

---

##### `UpdateTaskSet`<sup>Required</sup> <a name="UpdateTaskSet" id="@cdk_utils/iam.ecs.ECSOperations.property.UpdateTaskSet"></a>

```typescript
public readonly UpdateTaskSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTaskSet API call.

---

### ECSResources <a name="ECSResources" id="@cdk_utils/iam.ecs.ECSResources"></a>

ARN builders, validators, and parsers for ecs resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ecs.ECSResources.Initializer"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

new ecs.ECSResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.capacityProvider">capacityProvider</a></code> | Builds an ARN for the capacity-provider resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.containerInstance">containerInstance</a></code> | Builds an ARN for the container-instance resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.daemon">daemon</a></code> | Builds an ARN for the daemon resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.daemonDeployment">daemonDeployment</a></code> | Builds an ARN for the daemon-deployment resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.daemonRevision">daemonRevision</a></code> | Builds an ARN for the daemon-revision resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.daemonTaskDefinition">daemonTaskDefinition</a></code> | Builds an ARN for the daemon-task-definition resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidCapacityProviderArn">isValidCapacityProviderArn</a></code> | Validates whether a string is a valid ARN for the capacity-provider resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidContainerInstanceArn">isValidContainerInstanceArn</a></code> | Validates whether a string is a valid ARN for the container-instance resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidDaemonArn">isValidDaemonArn</a></code> | Validates whether a string is a valid ARN for the daemon resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidDaemonDeploymentArn">isValidDaemonDeploymentArn</a></code> | Validates whether a string is a valid ARN for the daemon-deployment resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidDaemonRevisionArn">isValidDaemonRevisionArn</a></code> | Validates whether a string is a valid ARN for the daemon-revision resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidDaemonTaskDefinitionArn">isValidDaemonTaskDefinitionArn</a></code> | Validates whether a string is a valid ARN for the daemon-task-definition resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidServiceArn">isValidServiceArn</a></code> | Validates whether a string is a valid ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidServiceDeploymentArn">isValidServiceDeploymentArn</a></code> | Validates whether a string is a valid ARN for the service-deployment resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidServiceRevisionArn">isValidServiceRevisionArn</a></code> | Validates whether a string is a valid ARN for the service-revision resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidTaskArn">isValidTaskArn</a></code> | Validates whether a string is a valid ARN for the task resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidTaskDefinitionArn">isValidTaskDefinitionArn</a></code> | Validates whether a string is a valid ARN for the task-definition resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.isValidTaskSetArn">isValidTaskSetArn</a></code> | Validates whether a string is a valid ARN for the task-set resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseCapacityProviderArn">parseCapacityProviderArn</a></code> | Parses a capacity-provider ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseContainerInstanceArn">parseContainerInstanceArn</a></code> | Parses a container-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseDaemonArn">parseDaemonArn</a></code> | Parses a daemon ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseDaemonDeploymentArn">parseDaemonDeploymentArn</a></code> | Parses a daemon-deployment ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseDaemonRevisionArn">parseDaemonRevisionArn</a></code> | Parses a daemon-revision ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseDaemonTaskDefinitionArn">parseDaemonTaskDefinitionArn</a></code> | Parses a daemon-task-definition ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseServiceArn">parseServiceArn</a></code> | Parses a service ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseServiceDeploymentArn">parseServiceDeploymentArn</a></code> | Parses a service-deployment ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseServiceRevisionArn">parseServiceRevisionArn</a></code> | Parses a service-revision ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseTaskArn">parseTaskArn</a></code> | Parses a task ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseTaskDefinitionArn">parseTaskDefinitionArn</a></code> | Parses a task-definition ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.parseTaskSetArn">parseTaskSetArn</a></code> | Parses a task-set ARN into its components. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.service">service</a></code> | Builds an ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.serviceDeployment">serviceDeployment</a></code> | Builds an ARN for the service-deployment resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.serviceRevision">serviceRevision</a></code> | Builds an ARN for the service-revision resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.task">task</a></code> | Builds an ARN for the task resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.taskDefinition">taskDefinition</a></code> | Builds an ARN for the task-definition resource. |
| <code><a href="#@cdk_utils/iam.ecs.ECSResources.taskSet">taskSet</a></code> | Builds an ARN for the task-set resource. |

---

##### `capacityProvider` <a name="capacityProvider" id="@cdk_utils/iam.ecs.ECSResources.capacityProvider"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.capacityProvider(props: ECSCapacityProviderArnProps)
```

Builds an ARN for the capacity-provider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.capacityProvider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSCapacityProviderArnProps">ECSCapacityProviderArnProps</a>

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.ecs.ECSResources.cluster"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.cluster(props: ECSClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSClusterArnProps">ECSClusterArnProps</a>

---

##### `containerInstance` <a name="containerInstance" id="@cdk_utils/iam.ecs.ECSResources.containerInstance"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.containerInstance(props: ECSContainerInstanceArnProps)
```

Builds an ARN for the container-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.containerInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSContainerInstanceArnProps">ECSContainerInstanceArnProps</a>

---

##### `daemon` <a name="daemon" id="@cdk_utils/iam.ecs.ECSResources.daemon"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.daemon(props: ECSDaemonArnProps)
```

Builds an ARN for the daemon resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.daemon.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSDaemonArnProps">ECSDaemonArnProps</a>

---

##### `daemonDeployment` <a name="daemonDeployment" id="@cdk_utils/iam.ecs.ECSResources.daemonDeployment"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.daemonDeployment(props: ECSDaemonDeploymentArnProps)
```

Builds an ARN for the daemon-deployment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.daemonDeployment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSDaemonDeploymentArnProps">ECSDaemonDeploymentArnProps</a>

---

##### `daemonRevision` <a name="daemonRevision" id="@cdk_utils/iam.ecs.ECSResources.daemonRevision"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.daemonRevision(props: ECSDaemonRevisionArnProps)
```

Builds an ARN for the daemon-revision resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.daemonRevision.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSDaemonRevisionArnProps">ECSDaemonRevisionArnProps</a>

---

##### `daemonTaskDefinition` <a name="daemonTaskDefinition" id="@cdk_utils/iam.ecs.ECSResources.daemonTaskDefinition"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.daemonTaskDefinition(props: ECSDaemonTaskDefinitionArnProps)
```

Builds an ARN for the daemon-task-definition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.daemonTaskDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSDaemonTaskDefinitionArnProps">ECSDaemonTaskDefinitionArnProps</a>

---

##### `isValidCapacityProviderArn` <a name="isValidCapacityProviderArn" id="@cdk_utils/iam.ecs.ECSResources.isValidCapacityProviderArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidCapacityProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the capacity-provider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidCapacityProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.ecs.ECSResources.isValidClusterArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContainerInstanceArn` <a name="isValidContainerInstanceArn" id="@cdk_utils/iam.ecs.ECSResources.isValidContainerInstanceArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidContainerInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the container-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidContainerInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDaemonArn` <a name="isValidDaemonArn" id="@cdk_utils/iam.ecs.ECSResources.isValidDaemonArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidDaemonArn(arn: string)
```

Validates whether a string is a valid ARN for the daemon resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidDaemonArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDaemonDeploymentArn` <a name="isValidDaemonDeploymentArn" id="@cdk_utils/iam.ecs.ECSResources.isValidDaemonDeploymentArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidDaemonDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the daemon-deployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidDaemonDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDaemonRevisionArn` <a name="isValidDaemonRevisionArn" id="@cdk_utils/iam.ecs.ECSResources.isValidDaemonRevisionArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidDaemonRevisionArn(arn: string)
```

Validates whether a string is a valid ARN for the daemon-revision resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidDaemonRevisionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDaemonTaskDefinitionArn` <a name="isValidDaemonTaskDefinitionArn" id="@cdk_utils/iam.ecs.ECSResources.isValidDaemonTaskDefinitionArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidDaemonTaskDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the daemon-task-definition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidDaemonTaskDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceArn` <a name="isValidServiceArn" id="@cdk_utils/iam.ecs.ECSResources.isValidServiceArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceDeploymentArn` <a name="isValidServiceDeploymentArn" id="@cdk_utils/iam.ecs.ECSResources.isValidServiceDeploymentArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidServiceDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the service-deployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidServiceDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceRevisionArn` <a name="isValidServiceRevisionArn" id="@cdk_utils/iam.ecs.ECSResources.isValidServiceRevisionArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidServiceRevisionArn(arn: string)
```

Validates whether a string is a valid ARN for the service-revision resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidServiceRevisionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaskArn` <a name="isValidTaskArn" id="@cdk_utils/iam.ecs.ECSResources.isValidTaskArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaskDefinitionArn` <a name="isValidTaskDefinitionArn" id="@cdk_utils/iam.ecs.ECSResources.isValidTaskDefinitionArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidTaskDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the task-definition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidTaskDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaskSetArn` <a name="isValidTaskSetArn" id="@cdk_utils/iam.ecs.ECSResources.isValidTaskSetArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.isValidTaskSetArn(arn: string)
```

Validates whether a string is a valid ARN for the task-set resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.isValidTaskSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCapacityProviderArn` <a name="parseCapacityProviderArn" id="@cdk_utils/iam.ecs.ECSResources.parseCapacityProviderArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseCapacityProviderArn(arn: string)
```

Parses a capacity-provider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseCapacityProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.ecs.ECSResources.parseClusterArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContainerInstanceArn` <a name="parseContainerInstanceArn" id="@cdk_utils/iam.ecs.ECSResources.parseContainerInstanceArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseContainerInstanceArn(arn: string)
```

Parses a container-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseContainerInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDaemonArn` <a name="parseDaemonArn" id="@cdk_utils/iam.ecs.ECSResources.parseDaemonArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseDaemonArn(arn: string)
```

Parses a daemon ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseDaemonArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDaemonDeploymentArn` <a name="parseDaemonDeploymentArn" id="@cdk_utils/iam.ecs.ECSResources.parseDaemonDeploymentArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseDaemonDeploymentArn(arn: string)
```

Parses a daemon-deployment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseDaemonDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDaemonRevisionArn` <a name="parseDaemonRevisionArn" id="@cdk_utils/iam.ecs.ECSResources.parseDaemonRevisionArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseDaemonRevisionArn(arn: string)
```

Parses a daemon-revision ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseDaemonRevisionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDaemonTaskDefinitionArn` <a name="parseDaemonTaskDefinitionArn" id="@cdk_utils/iam.ecs.ECSResources.parseDaemonTaskDefinitionArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseDaemonTaskDefinitionArn(arn: string)
```

Parses a daemon-task-definition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseDaemonTaskDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceArn` <a name="parseServiceArn" id="@cdk_utils/iam.ecs.ECSResources.parseServiceArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseServiceArn(arn: string)
```

Parses a service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceDeploymentArn` <a name="parseServiceDeploymentArn" id="@cdk_utils/iam.ecs.ECSResources.parseServiceDeploymentArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseServiceDeploymentArn(arn: string)
```

Parses a service-deployment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseServiceDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceRevisionArn` <a name="parseServiceRevisionArn" id="@cdk_utils/iam.ecs.ECSResources.parseServiceRevisionArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseServiceRevisionArn(arn: string)
```

Parses a service-revision ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseServiceRevisionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaskArn` <a name="parseTaskArn" id="@cdk_utils/iam.ecs.ECSResources.parseTaskArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseTaskArn(arn: string)
```

Parses a task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaskDefinitionArn` <a name="parseTaskDefinitionArn" id="@cdk_utils/iam.ecs.ECSResources.parseTaskDefinitionArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseTaskDefinitionArn(arn: string)
```

Parses a task-definition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseTaskDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaskSetArn` <a name="parseTaskSetArn" id="@cdk_utils/iam.ecs.ECSResources.parseTaskSetArn"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.parseTaskSetArn(arn: string)
```

Parses a task-set ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ecs.ECSResources.parseTaskSetArn.parameter.arn"></a>

- *Type:* string

---

##### `service` <a name="service" id="@cdk_utils/iam.ecs.ECSResources.service"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.service(props: ECSServiceArnProps)
```

Builds an ARN for the service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.service.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSServiceArnProps">ECSServiceArnProps</a>

---

##### `serviceDeployment` <a name="serviceDeployment" id="@cdk_utils/iam.ecs.ECSResources.serviceDeployment"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.serviceDeployment(props: ECSServiceDeploymentArnProps)
```

Builds an ARN for the service-deployment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.serviceDeployment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSServiceDeploymentArnProps">ECSServiceDeploymentArnProps</a>

---

##### `serviceRevision` <a name="serviceRevision" id="@cdk_utils/iam.ecs.ECSResources.serviceRevision"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.serviceRevision(props: ECSServiceRevisionArnProps)
```

Builds an ARN for the service-revision resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.serviceRevision.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSServiceRevisionArnProps">ECSServiceRevisionArnProps</a>

---

##### `task` <a name="task" id="@cdk_utils/iam.ecs.ECSResources.task"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.task(props: ECSTaskArnProps)
```

Builds an ARN for the task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.task.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSTaskArnProps">ECSTaskArnProps</a>

---

##### `taskDefinition` <a name="taskDefinition" id="@cdk_utils/iam.ecs.ECSResources.taskDefinition"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.taskDefinition(props: ECSTaskDefinitionArnProps)
```

Builds an ARN for the task-definition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.taskDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSTaskDefinitionArnProps">ECSTaskDefinitionArnProps</a>

---

##### `taskSet` <a name="taskSet" id="@cdk_utils/iam.ecs.ECSResources.taskSet"></a>

```typescript
import { ecs } from '@cdk_utils/iam'

ecs.ECSResources.taskSet(props: ECSTaskSetArnProps)
```

Builds an ARN for the task-set resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ecs.ECSResources.taskSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ecs.ECSTaskSetArnProps">ECSTaskSetArnProps</a>

---




