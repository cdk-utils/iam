# `robomaker` Submodule <a name="`robomaker` Submodule" id="@cdk_utils/iam.robomaker"></a>


## Structs <a name="Structs" id="Structs"></a>

### RoboMakerDeploymentFleetArnComponents <a name="RoboMakerDeploymentFleetArnComponents" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents"></a>

Parsed components of a deploymentFleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerDeploymentFleetArnComponents: robomaker.RoboMakerDeploymentFleetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents.property.createdOnEpoch">createdOnEpoch</a></code> | <code>string</code> | The CreatedOnEpoch component. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents.property.fleetName">fleetName</a></code> | <code>string</code> | The FleetName component. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `createdOnEpoch`<sup>Required</sup> <a name="createdOnEpoch" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents.property.createdOnEpoch"></a>

```typescript
public readonly createdOnEpoch: string;
```

- *Type:* string

The CreatedOnEpoch component.

---

##### `fleetName`<sup>Required</sup> <a name="fleetName" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents.property.fleetName"></a>

```typescript
public readonly fleetName: string;
```

- *Type:* string

The FleetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RoboMakerDeploymentFleetArnProps <a name="RoboMakerDeploymentFleetArnProps" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps"></a>

Properties for building a deploymentFleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerDeploymentFleetArnProps: robomaker.RoboMakerDeploymentFleetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps.property.createdOnEpoch">createdOnEpoch</a></code> | <code>string</code> | The CreatedOnEpoch component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps.property.fleetName">fleetName</a></code> | <code>string</code> | The FleetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `createdOnEpoch`<sup>Required</sup> <a name="createdOnEpoch" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps.property.createdOnEpoch"></a>

```typescript
public readonly createdOnEpoch: string;
```

- *Type:* string

The CreatedOnEpoch component of the ARN.

---

##### `fleetName`<sup>Required</sup> <a name="fleetName" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps.property.fleetName"></a>

```typescript
public readonly fleetName: string;
```

- *Type:* string

The FleetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RoboMakerDeploymentJobArnComponents <a name="RoboMakerDeploymentJobArnComponents" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnComponents"></a>

Parsed components of a deploymentJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnComponents.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerDeploymentJobArnComponents: robomaker.RoboMakerDeploymentJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnComponents.property.deploymentJobId">deploymentJobId</a></code> | <code>string</code> | The DeploymentJobId component. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deploymentJobId`<sup>Required</sup> <a name="deploymentJobId" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnComponents.property.deploymentJobId"></a>

```typescript
public readonly deploymentJobId: string;
```

- *Type:* string

The DeploymentJobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RoboMakerDeploymentJobArnProps <a name="RoboMakerDeploymentJobArnProps" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnProps"></a>

Properties for building a deploymentJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnProps.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerDeploymentJobArnProps: robomaker.RoboMakerDeploymentJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnProps.property.deploymentJobId">deploymentJobId</a></code> | <code>string</code> | The DeploymentJobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deploymentJobId`<sup>Required</sup> <a name="deploymentJobId" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnProps.property.deploymentJobId"></a>

```typescript
public readonly deploymentJobId: string;
```

- *Type:* string

The DeploymentJobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RoboMakerRobotApplicationArnComponents <a name="RoboMakerRobotApplicationArnComponents" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents"></a>

Parsed components of a robotApplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerRobotApplicationArnComponents: robomaker.RoboMakerRobotApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents.property.createdOnEpoch">createdOnEpoch</a></code> | <code>string</code> | The CreatedOnEpoch component. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component.

---

##### `createdOnEpoch`<sup>Required</sup> <a name="createdOnEpoch" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents.property.createdOnEpoch"></a>

```typescript
public readonly createdOnEpoch: string;
```

- *Type:* string

The CreatedOnEpoch component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RoboMakerRobotApplicationArnProps <a name="RoboMakerRobotApplicationArnProps" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps"></a>

Properties for building a robotApplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerRobotApplicationArnProps: robomaker.RoboMakerRobotApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps.property.createdOnEpoch">createdOnEpoch</a></code> | <code>string</code> | The CreatedOnEpoch component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component of the ARN.

---

##### `createdOnEpoch`<sup>Required</sup> <a name="createdOnEpoch" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps.property.createdOnEpoch"></a>

```typescript
public readonly createdOnEpoch: string;
```

- *Type:* string

The CreatedOnEpoch component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RoboMakerRobotArnComponents <a name="RoboMakerRobotArnComponents" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents"></a>

Parsed components of a robot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerRobotArnComponents: robomaker.RoboMakerRobotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents.property.createdOnEpoch">createdOnEpoch</a></code> | <code>string</code> | The CreatedOnEpoch component. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents.property.robotName">robotName</a></code> | <code>string</code> | The RobotName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `createdOnEpoch`<sup>Required</sup> <a name="createdOnEpoch" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents.property.createdOnEpoch"></a>

```typescript
public readonly createdOnEpoch: string;
```

- *Type:* string

The CreatedOnEpoch component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `robotName`<sup>Required</sup> <a name="robotName" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnComponents.property.robotName"></a>

```typescript
public readonly robotName: string;
```

- *Type:* string

The RobotName component.

---

### RoboMakerRobotArnProps <a name="RoboMakerRobotArnProps" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnProps"></a>

Properties for building a robot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnProps.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerRobotArnProps: robomaker.RoboMakerRobotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotArnProps.property.createdOnEpoch">createdOnEpoch</a></code> | <code>string</code> | The CreatedOnEpoch component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotArnProps.property.robotName">robotName</a></code> | <code>string</code> | The RobotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerRobotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `createdOnEpoch`<sup>Required</sup> <a name="createdOnEpoch" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnProps.property.createdOnEpoch"></a>

```typescript
public readonly createdOnEpoch: string;
```

- *Type:* string

The CreatedOnEpoch component of the ARN.

---

##### `robotName`<sup>Required</sup> <a name="robotName" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnProps.property.robotName"></a>

```typescript
public readonly robotName: string;
```

- *Type:* string

The RobotName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerRobotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RoboMakerSimulationApplicationArnComponents <a name="RoboMakerSimulationApplicationArnComponents" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents"></a>

Parsed components of a simulationApplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerSimulationApplicationArnComponents: robomaker.RoboMakerSimulationApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents.property.createdOnEpoch">createdOnEpoch</a></code> | <code>string</code> | The CreatedOnEpoch component. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component.

---

##### `createdOnEpoch`<sup>Required</sup> <a name="createdOnEpoch" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents.property.createdOnEpoch"></a>

```typescript
public readonly createdOnEpoch: string;
```

- *Type:* string

The CreatedOnEpoch component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RoboMakerSimulationApplicationArnProps <a name="RoboMakerSimulationApplicationArnProps" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps"></a>

Properties for building a simulationApplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerSimulationApplicationArnProps: robomaker.RoboMakerSimulationApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps.property.createdOnEpoch">createdOnEpoch</a></code> | <code>string</code> | The CreatedOnEpoch component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component of the ARN.

---

##### `createdOnEpoch`<sup>Required</sup> <a name="createdOnEpoch" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps.property.createdOnEpoch"></a>

```typescript
public readonly createdOnEpoch: string;
```

- *Type:* string

The CreatedOnEpoch component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RoboMakerSimulationJobArnComponents <a name="RoboMakerSimulationJobArnComponents" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnComponents"></a>

Parsed components of a simulationJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnComponents.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerSimulationJobArnComponents: robomaker.RoboMakerSimulationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnComponents.property.simulationJobId">simulationJobId</a></code> | <code>string</code> | The SimulationJobId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `simulationJobId`<sup>Required</sup> <a name="simulationJobId" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnComponents.property.simulationJobId"></a>

```typescript
public readonly simulationJobId: string;
```

- *Type:* string

The SimulationJobId component.

---

### RoboMakerSimulationJobArnProps <a name="RoboMakerSimulationJobArnProps" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnProps"></a>

Properties for building a simulationJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnProps.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerSimulationJobArnProps: robomaker.RoboMakerSimulationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnProps.property.simulationJobId">simulationJobId</a></code> | <code>string</code> | The SimulationJobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `simulationJobId`<sup>Required</sup> <a name="simulationJobId" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnProps.property.simulationJobId"></a>

```typescript
public readonly simulationJobId: string;
```

- *Type:* string

The SimulationJobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RoboMakerSimulationJobBatchArnComponents <a name="RoboMakerSimulationJobBatchArnComponents" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnComponents"></a>

Parsed components of a simulationJobBatch ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnComponents.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerSimulationJobBatchArnComponents: robomaker.RoboMakerSimulationJobBatchArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnComponents.property.simulationJobBatchId">simulationJobBatchId</a></code> | <code>string</code> | The SimulationJobBatchId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `simulationJobBatchId`<sup>Required</sup> <a name="simulationJobBatchId" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnComponents.property.simulationJobBatchId"></a>

```typescript
public readonly simulationJobBatchId: string;
```

- *Type:* string

The SimulationJobBatchId component.

---

### RoboMakerSimulationJobBatchArnProps <a name="RoboMakerSimulationJobBatchArnProps" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnProps"></a>

Properties for building a simulationJobBatch ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnProps.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerSimulationJobBatchArnProps: robomaker.RoboMakerSimulationJobBatchArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnProps.property.simulationJobBatchId">simulationJobBatchId</a></code> | <code>string</code> | The SimulationJobBatchId component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `simulationJobBatchId`<sup>Required</sup> <a name="simulationJobBatchId" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnProps.property.simulationJobBatchId"></a>

```typescript
public readonly simulationJobBatchId: string;
```

- *Type:* string

The SimulationJobBatchId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RoboMakerWorldArnComponents <a name="RoboMakerWorldArnComponents" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnComponents"></a>

Parsed components of a world ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnComponents.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerWorldArnComponents: robomaker.RoboMakerWorldArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldArnComponents.property.worldId">worldId</a></code> | <code>string</code> | The WorldId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `worldId`<sup>Required</sup> <a name="worldId" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnComponents.property.worldId"></a>

```typescript
public readonly worldId: string;
```

- *Type:* string

The WorldId component.

---

### RoboMakerWorldArnProps <a name="RoboMakerWorldArnProps" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnProps"></a>

Properties for building a world ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnProps.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerWorldArnProps: robomaker.RoboMakerWorldArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldArnProps.property.worldId">worldId</a></code> | <code>string</code> | The WorldId component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `worldId`<sup>Required</sup> <a name="worldId" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnProps.property.worldId"></a>

```typescript
public readonly worldId: string;
```

- *Type:* string

The WorldId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerWorldArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RoboMakerWorldExportJobArnComponents <a name="RoboMakerWorldExportJobArnComponents" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnComponents"></a>

Parsed components of a worldExportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnComponents.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerWorldExportJobArnComponents: robomaker.RoboMakerWorldExportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnComponents.property.worldExportJobId">worldExportJobId</a></code> | <code>string</code> | The WorldExportJobId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `worldExportJobId`<sup>Required</sup> <a name="worldExportJobId" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnComponents.property.worldExportJobId"></a>

```typescript
public readonly worldExportJobId: string;
```

- *Type:* string

The WorldExportJobId component.

---

### RoboMakerWorldExportJobArnProps <a name="RoboMakerWorldExportJobArnProps" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnProps"></a>

Properties for building a worldExportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnProps.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerWorldExportJobArnProps: robomaker.RoboMakerWorldExportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnProps.property.worldExportJobId">worldExportJobId</a></code> | <code>string</code> | The WorldExportJobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `worldExportJobId`<sup>Required</sup> <a name="worldExportJobId" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnProps.property.worldExportJobId"></a>

```typescript
public readonly worldExportJobId: string;
```

- *Type:* string

The WorldExportJobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RoboMakerWorldGenerationJobArnComponents <a name="RoboMakerWorldGenerationJobArnComponents" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnComponents"></a>

Parsed components of a worldGenerationJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnComponents.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerWorldGenerationJobArnComponents: robomaker.RoboMakerWorldGenerationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnComponents.property.worldGenerationJobId">worldGenerationJobId</a></code> | <code>string</code> | The WorldGenerationJobId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `worldGenerationJobId`<sup>Required</sup> <a name="worldGenerationJobId" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnComponents.property.worldGenerationJobId"></a>

```typescript
public readonly worldGenerationJobId: string;
```

- *Type:* string

The WorldGenerationJobId component.

---

### RoboMakerWorldGenerationJobArnProps <a name="RoboMakerWorldGenerationJobArnProps" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnProps"></a>

Properties for building a worldGenerationJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnProps.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerWorldGenerationJobArnProps: robomaker.RoboMakerWorldGenerationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnProps.property.worldGenerationJobId">worldGenerationJobId</a></code> | <code>string</code> | The WorldGenerationJobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `worldGenerationJobId`<sup>Required</sup> <a name="worldGenerationJobId" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnProps.property.worldGenerationJobId"></a>

```typescript
public readonly worldGenerationJobId: string;
```

- *Type:* string

The WorldGenerationJobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RoboMakerWorldTemplateArnComponents <a name="RoboMakerWorldTemplateArnComponents" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnComponents"></a>

Parsed components of a worldTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnComponents.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerWorldTemplateArnComponents: robomaker.RoboMakerWorldTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnComponents.property.worldTemplateJobId">worldTemplateJobId</a></code> | <code>string</code> | The WorldTemplateJobId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `worldTemplateJobId`<sup>Required</sup> <a name="worldTemplateJobId" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnComponents.property.worldTemplateJobId"></a>

```typescript
public readonly worldTemplateJobId: string;
```

- *Type:* string

The WorldTemplateJobId component.

---

### RoboMakerWorldTemplateArnProps <a name="RoboMakerWorldTemplateArnProps" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnProps"></a>

Properties for building a worldTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnProps.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

const roboMakerWorldTemplateArnProps: robomaker.RoboMakerWorldTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnProps.property.worldTemplateJobId">worldTemplateJobId</a></code> | <code>string</code> | The WorldTemplateJobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `worldTemplateJobId`<sup>Required</sup> <a name="worldTemplateJobId" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnProps.property.worldTemplateJobId"></a>

```typescript
public readonly worldTemplateJobId: string;
```

- *Type:* string

The WorldTemplateJobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RoboMakerActions <a name="RoboMakerActions" id="@cdk_utils/iam.robomaker.RoboMakerActions"></a>

IAM action constants for the robomaker service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.robomaker.RoboMakerActions.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

new robomaker.RoboMakerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.actionGetWorldTemplateBody">actionGetWorldTemplateBody</a></code> | <code>string</code> | [Read] robomaker:GetWorldTemplateBody. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.BatchDeleteWorlds">BatchDeleteWorlds</a></code> | <code>string</code> | [Write] robomaker:BatchDeleteWorlds. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.BatchDescribeSimulationJob">BatchDescribeSimulationJob</a></code> | <code>string</code> | [Read] robomaker:BatchDescribeSimulationJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CancelDeploymentJob">CancelDeploymentJob</a></code> | <code>string</code> | [Write] robomaker:CancelDeploymentJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CancelSimulationJob">CancelSimulationJob</a></code> | <code>string</code> | [Write] robomaker:CancelSimulationJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CancelSimulationJobBatch">CancelSimulationJobBatch</a></code> | <code>string</code> | [Write] robomaker:CancelSimulationJobBatch. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CancelWorldExportJob">CancelWorldExportJob</a></code> | <code>string</code> | [Write] robomaker:CancelWorldExportJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CancelWorldGenerationJob">CancelWorldGenerationJob</a></code> | <code>string</code> | [Write] robomaker:CancelWorldGenerationJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateDeploymentJob">CreateDeploymentJob</a></code> | <code>string</code> | [Write] robomaker:CreateDeploymentJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateFleet">CreateFleet</a></code> | <code>string</code> | [Write] robomaker:CreateFleet. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateRobot">CreateRobot</a></code> | <code>string</code> | [Write] robomaker:CreateRobot. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateRobotApplication">CreateRobotApplication</a></code> | <code>string</code> | [Write] robomaker:CreateRobotApplication. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateRobotApplicationVersion">CreateRobotApplicationVersion</a></code> | <code>string</code> | [Write] robomaker:CreateRobotApplicationVersion. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateSimulationApplication">CreateSimulationApplication</a></code> | <code>string</code> | [Write] robomaker:CreateSimulationApplication. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateSimulationApplicationVersion">CreateSimulationApplicationVersion</a></code> | <code>string</code> | [Write] robomaker:CreateSimulationApplicationVersion. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateSimulationJob">CreateSimulationJob</a></code> | <code>string</code> | [Write] robomaker:CreateSimulationJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateWorldExportJob">CreateWorldExportJob</a></code> | <code>string</code> | [Write] robomaker:CreateWorldExportJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateWorldGenerationJob">CreateWorldGenerationJob</a></code> | <code>string</code> | [Write] robomaker:CreateWorldGenerationJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateWorldTemplate">CreateWorldTemplate</a></code> | <code>string</code> | [Write] robomaker:CreateWorldTemplate. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DeleteFleet">DeleteFleet</a></code> | <code>string</code> | [Write] robomaker:DeleteFleet. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DeleteRobot">DeleteRobot</a></code> | <code>string</code> | [Write] robomaker:DeleteRobot. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DeleteRobotApplication">DeleteRobotApplication</a></code> | <code>string</code> | [Write] robomaker:DeleteRobotApplication. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DeleteSimulationApplication">DeleteSimulationApplication</a></code> | <code>string</code> | [Write] robomaker:DeleteSimulationApplication. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DeleteWorldTemplate">DeleteWorldTemplate</a></code> | <code>string</code> | [Write] robomaker:DeleteWorldTemplate. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DeregisterRobot">DeregisterRobot</a></code> | <code>string</code> | [Write] robomaker:DeregisterRobot. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeDeploymentJob">DescribeDeploymentJob</a></code> | <code>string</code> | [Read] robomaker:DescribeDeploymentJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeFleet">DescribeFleet</a></code> | <code>string</code> | [Read] robomaker:DescribeFleet. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeRobot">DescribeRobot</a></code> | <code>string</code> | [Read] robomaker:DescribeRobot. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeRobotApplication">DescribeRobotApplication</a></code> | <code>string</code> | [Read] robomaker:DescribeRobotApplication. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeSimulationApplication">DescribeSimulationApplication</a></code> | <code>string</code> | [Read] robomaker:DescribeSimulationApplication. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeSimulationJob">DescribeSimulationJob</a></code> | <code>string</code> | [Read] robomaker:DescribeSimulationJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeSimulationJobBatch">DescribeSimulationJobBatch</a></code> | <code>string</code> | [Read] robomaker:DescribeSimulationJobBatch. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeWorld">DescribeWorld</a></code> | <code>string</code> | [Read] robomaker:DescribeWorld. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeWorldExportJob">DescribeWorldExportJob</a></code> | <code>string</code> | [Read] robomaker:DescribeWorldExportJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeWorldGenerationJob">DescribeWorldGenerationJob</a></code> | <code>string</code> | [Read] robomaker:DescribeWorldGenerationJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeWorldTemplate">DescribeWorldTemplate</a></code> | <code>string</code> | [Read] robomaker:DescribeWorldTemplate. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListDeploymentJobs">ListDeploymentJobs</a></code> | <code>string</code> | [List] robomaker:ListDeploymentJobs. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListFleets">ListFleets</a></code> | <code>string</code> | [List] robomaker:ListFleets. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListRobotApplications">ListRobotApplications</a></code> | <code>string</code> | [List] robomaker:ListRobotApplications. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListRobots">ListRobots</a></code> | <code>string</code> | [List] robomaker:ListRobots. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListSimulationApplications">ListSimulationApplications</a></code> | <code>string</code> | [List] robomaker:ListSimulationApplications. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListSimulationJobBatches">ListSimulationJobBatches</a></code> | <code>string</code> | [List] robomaker:ListSimulationJobBatches. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListSimulationJobs">ListSimulationJobs</a></code> | <code>string</code> | [List] robomaker:ListSimulationJobs. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListSupportedAvailabilityZones">ListSupportedAvailabilityZones</a></code> | <code>string</code> | [List] robomaker:ListSupportedAvailabilityZones. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] robomaker:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListWorldExportJobs">ListWorldExportJobs</a></code> | <code>string</code> | [List] robomaker:ListWorldExportJobs. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListWorldGenerationJobs">ListWorldGenerationJobs</a></code> | <code>string</code> | [List] robomaker:ListWorldGenerationJobs. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListWorlds">ListWorlds</a></code> | <code>string</code> | [List] robomaker:ListWorlds. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.ListWorldTemplates">ListWorldTemplates</a></code> | <code>string</code> | [List] robomaker:ListWorldTemplates. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.RegisterRobot">RegisterRobot</a></code> | <code>string</code> | [Write] robomaker:RegisterRobot. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.RestartSimulationJob">RestartSimulationJob</a></code> | <code>string</code> | [Write] robomaker:RestartSimulationJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.StartSimulationJobBatch">StartSimulationJobBatch</a></code> | <code>string</code> | [Write] robomaker:StartSimulationJobBatch. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.SyncDeploymentJob">SyncDeploymentJob</a></code> | <code>string</code> | [Write] robomaker:SyncDeploymentJob. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] robomaker:TagResource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] robomaker:UntagResource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.UpdateRobotApplication">UpdateRobotApplication</a></code> | <code>string</code> | [Write] robomaker:UpdateRobotApplication. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.UpdateRobotDeployment">UpdateRobotDeployment</a></code> | <code>string</code> | [Write] robomaker:UpdateRobotDeployment. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.UpdateSimulationApplication">UpdateSimulationApplication</a></code> | <code>string</code> | [Write] robomaker:UpdateSimulationApplication. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerActions.property.UpdateWorldTemplate">UpdateWorldTemplate</a></code> | <code>string</code> | [Write] robomaker:UpdateWorldTemplate. |

---

##### `actionGetWorldTemplateBody`<sup>Required</sup> <a name="actionGetWorldTemplateBody" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.actionGetWorldTemplateBody"></a>

```typescript
public readonly actionGetWorldTemplateBody: string;
```

- *Type:* string

[Read] robomaker:GetWorldTemplateBody.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDeleteWorlds`<sup>Required</sup> <a name="BatchDeleteWorlds" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.BatchDeleteWorlds"></a>

```typescript
public readonly BatchDeleteWorlds: string;
```

- *Type:* string

[Write] robomaker:BatchDeleteWorlds.

---

##### `BatchDescribeSimulationJob`<sup>Required</sup> <a name="BatchDescribeSimulationJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.BatchDescribeSimulationJob"></a>

```typescript
public readonly BatchDescribeSimulationJob: string;
```

- *Type:* string

[Read] robomaker:BatchDescribeSimulationJob.

---

##### `CancelDeploymentJob`<sup>Required</sup> <a name="CancelDeploymentJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CancelDeploymentJob"></a>

```typescript
public readonly CancelDeploymentJob: string;
```

- *Type:* string

[Write] robomaker:CancelDeploymentJob.

---

##### `CancelSimulationJob`<sup>Required</sup> <a name="CancelSimulationJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CancelSimulationJob"></a>

```typescript
public readonly CancelSimulationJob: string;
```

- *Type:* string

[Write] robomaker:CancelSimulationJob.

---

##### `CancelSimulationJobBatch`<sup>Required</sup> <a name="CancelSimulationJobBatch" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CancelSimulationJobBatch"></a>

```typescript
public readonly CancelSimulationJobBatch: string;
```

- *Type:* string

[Write] robomaker:CancelSimulationJobBatch.

---

##### `CancelWorldExportJob`<sup>Required</sup> <a name="CancelWorldExportJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CancelWorldExportJob"></a>

```typescript
public readonly CancelWorldExportJob: string;
```

- *Type:* string

[Write] robomaker:CancelWorldExportJob.

---

##### `CancelWorldGenerationJob`<sup>Required</sup> <a name="CancelWorldGenerationJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CancelWorldGenerationJob"></a>

```typescript
public readonly CancelWorldGenerationJob: string;
```

- *Type:* string

[Write] robomaker:CancelWorldGenerationJob.

---

##### `CreateDeploymentJob`<sup>Required</sup> <a name="CreateDeploymentJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateDeploymentJob"></a>

```typescript
public readonly CreateDeploymentJob: string;
```

- *Type:* string

[Write] robomaker:CreateDeploymentJob.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string;
```

- *Type:* string

[Write] robomaker:CreateFleet.

---

##### `CreateRobot`<sup>Required</sup> <a name="CreateRobot" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateRobot"></a>

```typescript
public readonly CreateRobot: string;
```

- *Type:* string

[Write] robomaker:CreateRobot.

---

##### `CreateRobotApplication`<sup>Required</sup> <a name="CreateRobotApplication" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateRobotApplication"></a>

```typescript
public readonly CreateRobotApplication: string;
```

- *Type:* string

[Write] robomaker:CreateRobotApplication.

---

##### `CreateRobotApplicationVersion`<sup>Required</sup> <a name="CreateRobotApplicationVersion" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateRobotApplicationVersion"></a>

```typescript
public readonly CreateRobotApplicationVersion: string;
```

- *Type:* string

[Write] robomaker:CreateRobotApplicationVersion.

---

##### `CreateSimulationApplication`<sup>Required</sup> <a name="CreateSimulationApplication" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateSimulationApplication"></a>

```typescript
public readonly CreateSimulationApplication: string;
```

- *Type:* string

[Write] robomaker:CreateSimulationApplication.

---

##### `CreateSimulationApplicationVersion`<sup>Required</sup> <a name="CreateSimulationApplicationVersion" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateSimulationApplicationVersion"></a>

```typescript
public readonly CreateSimulationApplicationVersion: string;
```

- *Type:* string

[Write] robomaker:CreateSimulationApplicationVersion.

---

##### `CreateSimulationJob`<sup>Required</sup> <a name="CreateSimulationJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateSimulationJob"></a>

```typescript
public readonly CreateSimulationJob: string;
```

- *Type:* string

[Write] robomaker:CreateSimulationJob.

---

##### `CreateWorldExportJob`<sup>Required</sup> <a name="CreateWorldExportJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateWorldExportJob"></a>

```typescript
public readonly CreateWorldExportJob: string;
```

- *Type:* string

[Write] robomaker:CreateWorldExportJob.

---

##### `CreateWorldGenerationJob`<sup>Required</sup> <a name="CreateWorldGenerationJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateWorldGenerationJob"></a>

```typescript
public readonly CreateWorldGenerationJob: string;
```

- *Type:* string

[Write] robomaker:CreateWorldGenerationJob.

---

##### `CreateWorldTemplate`<sup>Required</sup> <a name="CreateWorldTemplate" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.CreateWorldTemplate"></a>

```typescript
public readonly CreateWorldTemplate: string;
```

- *Type:* string

[Write] robomaker:CreateWorldTemplate.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string;
```

- *Type:* string

[Write] robomaker:DeleteFleet.

---

##### `DeleteRobot`<sup>Required</sup> <a name="DeleteRobot" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DeleteRobot"></a>

```typescript
public readonly DeleteRobot: string;
```

- *Type:* string

[Write] robomaker:DeleteRobot.

---

##### `DeleteRobotApplication`<sup>Required</sup> <a name="DeleteRobotApplication" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DeleteRobotApplication"></a>

```typescript
public readonly DeleteRobotApplication: string;
```

- *Type:* string

[Write] robomaker:DeleteRobotApplication.

---

##### `DeleteSimulationApplication`<sup>Required</sup> <a name="DeleteSimulationApplication" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DeleteSimulationApplication"></a>

```typescript
public readonly DeleteSimulationApplication: string;
```

- *Type:* string

[Write] robomaker:DeleteSimulationApplication.

---

##### `DeleteWorldTemplate`<sup>Required</sup> <a name="DeleteWorldTemplate" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DeleteWorldTemplate"></a>

```typescript
public readonly DeleteWorldTemplate: string;
```

- *Type:* string

[Write] robomaker:DeleteWorldTemplate.

---

##### `DeregisterRobot`<sup>Required</sup> <a name="DeregisterRobot" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DeregisterRobot"></a>

```typescript
public readonly DeregisterRobot: string;
```

- *Type:* string

[Write] robomaker:DeregisterRobot.

---

##### `DescribeDeploymentJob`<sup>Required</sup> <a name="DescribeDeploymentJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeDeploymentJob"></a>

```typescript
public readonly DescribeDeploymentJob: string;
```

- *Type:* string

[Read] robomaker:DescribeDeploymentJob.

---

##### `DescribeFleet`<sup>Required</sup> <a name="DescribeFleet" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeFleet"></a>

```typescript
public readonly DescribeFleet: string;
```

- *Type:* string

[Read] robomaker:DescribeFleet.

---

##### `DescribeRobot`<sup>Required</sup> <a name="DescribeRobot" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeRobot"></a>

```typescript
public readonly DescribeRobot: string;
```

- *Type:* string

[Read] robomaker:DescribeRobot.

---

##### `DescribeRobotApplication`<sup>Required</sup> <a name="DescribeRobotApplication" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeRobotApplication"></a>

```typescript
public readonly DescribeRobotApplication: string;
```

- *Type:* string

[Read] robomaker:DescribeRobotApplication.

---

##### `DescribeSimulationApplication`<sup>Required</sup> <a name="DescribeSimulationApplication" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeSimulationApplication"></a>

```typescript
public readonly DescribeSimulationApplication: string;
```

- *Type:* string

[Read] robomaker:DescribeSimulationApplication.

---

##### `DescribeSimulationJob`<sup>Required</sup> <a name="DescribeSimulationJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeSimulationJob"></a>

```typescript
public readonly DescribeSimulationJob: string;
```

- *Type:* string

[Read] robomaker:DescribeSimulationJob.

---

##### `DescribeSimulationJobBatch`<sup>Required</sup> <a name="DescribeSimulationJobBatch" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeSimulationJobBatch"></a>

```typescript
public readonly DescribeSimulationJobBatch: string;
```

- *Type:* string

[Read] robomaker:DescribeSimulationJobBatch.

---

##### `DescribeWorld`<sup>Required</sup> <a name="DescribeWorld" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeWorld"></a>

```typescript
public readonly DescribeWorld: string;
```

- *Type:* string

[Read] robomaker:DescribeWorld.

---

##### `DescribeWorldExportJob`<sup>Required</sup> <a name="DescribeWorldExportJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeWorldExportJob"></a>

```typescript
public readonly DescribeWorldExportJob: string;
```

- *Type:* string

[Read] robomaker:DescribeWorldExportJob.

---

##### `DescribeWorldGenerationJob`<sup>Required</sup> <a name="DescribeWorldGenerationJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeWorldGenerationJob"></a>

```typescript
public readonly DescribeWorldGenerationJob: string;
```

- *Type:* string

[Read] robomaker:DescribeWorldGenerationJob.

---

##### `DescribeWorldTemplate`<sup>Required</sup> <a name="DescribeWorldTemplate" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.DescribeWorldTemplate"></a>

```typescript
public readonly DescribeWorldTemplate: string;
```

- *Type:* string

[Read] robomaker:DescribeWorldTemplate.

---

##### `ListDeploymentJobs`<sup>Required</sup> <a name="ListDeploymentJobs" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListDeploymentJobs"></a>

```typescript
public readonly ListDeploymentJobs: string;
```

- *Type:* string

[List] robomaker:ListDeploymentJobs.

---

##### `ListFleets`<sup>Required</sup> <a name="ListFleets" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListFleets"></a>

```typescript
public readonly ListFleets: string;
```

- *Type:* string

[List] robomaker:ListFleets.

---

##### `ListRobotApplications`<sup>Required</sup> <a name="ListRobotApplications" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListRobotApplications"></a>

```typescript
public readonly ListRobotApplications: string;
```

- *Type:* string

[List] robomaker:ListRobotApplications.

---

##### `ListRobots`<sup>Required</sup> <a name="ListRobots" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListRobots"></a>

```typescript
public readonly ListRobots: string;
```

- *Type:* string

[List] robomaker:ListRobots.

---

##### `ListSimulationApplications`<sup>Required</sup> <a name="ListSimulationApplications" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListSimulationApplications"></a>

```typescript
public readonly ListSimulationApplications: string;
```

- *Type:* string

[List] robomaker:ListSimulationApplications.

---

##### `ListSimulationJobBatches`<sup>Required</sup> <a name="ListSimulationJobBatches" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListSimulationJobBatches"></a>

```typescript
public readonly ListSimulationJobBatches: string;
```

- *Type:* string

[List] robomaker:ListSimulationJobBatches.

---

##### `ListSimulationJobs`<sup>Required</sup> <a name="ListSimulationJobs" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListSimulationJobs"></a>

```typescript
public readonly ListSimulationJobs: string;
```

- *Type:* string

[List] robomaker:ListSimulationJobs.

---

##### `ListSupportedAvailabilityZones`<sup>Required</sup> <a name="ListSupportedAvailabilityZones" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListSupportedAvailabilityZones"></a>

```typescript
public readonly ListSupportedAvailabilityZones: string;
```

- *Type:* string

[List] robomaker:ListSupportedAvailabilityZones.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] robomaker:ListTagsForResource.

---

##### `ListWorldExportJobs`<sup>Required</sup> <a name="ListWorldExportJobs" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListWorldExportJobs"></a>

```typescript
public readonly ListWorldExportJobs: string;
```

- *Type:* string

[List] robomaker:ListWorldExportJobs.

---

##### `ListWorldGenerationJobs`<sup>Required</sup> <a name="ListWorldGenerationJobs" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListWorldGenerationJobs"></a>

```typescript
public readonly ListWorldGenerationJobs: string;
```

- *Type:* string

[List] robomaker:ListWorldGenerationJobs.

---

##### `ListWorlds`<sup>Required</sup> <a name="ListWorlds" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListWorlds"></a>

```typescript
public readonly ListWorlds: string;
```

- *Type:* string

[List] robomaker:ListWorlds.

---

##### `ListWorldTemplates`<sup>Required</sup> <a name="ListWorldTemplates" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.ListWorldTemplates"></a>

```typescript
public readonly ListWorldTemplates: string;
```

- *Type:* string

[List] robomaker:ListWorldTemplates.

---

##### `RegisterRobot`<sup>Required</sup> <a name="RegisterRobot" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.RegisterRobot"></a>

```typescript
public readonly RegisterRobot: string;
```

- *Type:* string

[Write] robomaker:RegisterRobot.

---

##### `RestartSimulationJob`<sup>Required</sup> <a name="RestartSimulationJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.RestartSimulationJob"></a>

```typescript
public readonly RestartSimulationJob: string;
```

- *Type:* string

[Write] robomaker:RestartSimulationJob.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartSimulationJobBatch`<sup>Required</sup> <a name="StartSimulationJobBatch" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.StartSimulationJobBatch"></a>

```typescript
public readonly StartSimulationJobBatch: string;
```

- *Type:* string

[Write] robomaker:StartSimulationJobBatch.

---

##### `SyncDeploymentJob`<sup>Required</sup> <a name="SyncDeploymentJob" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.SyncDeploymentJob"></a>

```typescript
public readonly SyncDeploymentJob: string;
```

- *Type:* string

[Write] robomaker:SyncDeploymentJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] robomaker:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] robomaker:UntagResource.

---

##### `UpdateRobotApplication`<sup>Required</sup> <a name="UpdateRobotApplication" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.UpdateRobotApplication"></a>

```typescript
public readonly UpdateRobotApplication: string;
```

- *Type:* string

[Write] robomaker:UpdateRobotApplication.

---

##### `UpdateRobotDeployment`<sup>Required</sup> <a name="UpdateRobotDeployment" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.UpdateRobotDeployment"></a>

```typescript
public readonly UpdateRobotDeployment: string;
```

- *Type:* string

[Write] robomaker:UpdateRobotDeployment.

---

##### `UpdateSimulationApplication`<sup>Required</sup> <a name="UpdateSimulationApplication" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.UpdateSimulationApplication"></a>

```typescript
public readonly UpdateSimulationApplication: string;
```

- *Type:* string

[Write] robomaker:UpdateSimulationApplication.

---

##### `UpdateWorldTemplate`<sup>Required</sup> <a name="UpdateWorldTemplate" id="@cdk_utils/iam.robomaker.RoboMakerActions.property.UpdateWorldTemplate"></a>

```typescript
public readonly UpdateWorldTemplate: string;
```

- *Type:* string

[Write] robomaker:UpdateWorldTemplate.

---

### RoboMakerConditions <a name="RoboMakerConditions" id="@cdk_utils/iam.robomaker.RoboMakerConditions"></a>

Condition key constants and builders for robomaker.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.robomaker.RoboMakerConditions.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

new robomaker.RoboMakerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.robomaker.RoboMakerConditions.requestTag"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.robomaker.RoboMakerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.robomaker.RoboMakerConditions.resourceTag"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.robomaker.RoboMakerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.tagKeys"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.robomaker.RoboMakerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateDeploymentJobConditionKeys">CreateDeploymentJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeploymentJob action. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateFleetConditionKeys">CreateFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFleet action. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateRobotApplicationConditionKeys">CreateRobotApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRobotApplication action. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateRobotConditionKeys">CreateRobotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRobot action. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateSimulationApplicationConditionKeys">CreateSimulationApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSimulationApplication action. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateSimulationJobConditionKeys">CreateSimulationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSimulationJob action. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateWorldExportJobConditionKeys">CreateWorldExportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorldExportJob action. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateWorldGenerationJobConditionKeys">CreateWorldGenerationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorldGenerationJob action. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateWorldTemplateConditionKeys">CreateWorldTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorldTemplate action. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.StartSimulationJobBatchConditionKeys">StartSimulationJobBatchConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSimulationJobBatch action. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDeploymentJobConditionKeys`<sup>Required</sup> <a name="CreateDeploymentJobConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateDeploymentJobConditionKeys"></a>

```typescript
public readonly CreateDeploymentJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeploymentJob action.

---

##### `CreateFleetConditionKeys`<sup>Required</sup> <a name="CreateFleetConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateFleetConditionKeys"></a>

```typescript
public readonly CreateFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFleet action.

---

##### `CreateRobotApplicationConditionKeys`<sup>Required</sup> <a name="CreateRobotApplicationConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateRobotApplicationConditionKeys"></a>

```typescript
public readonly CreateRobotApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRobotApplication action.

---

##### `CreateRobotConditionKeys`<sup>Required</sup> <a name="CreateRobotConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateRobotConditionKeys"></a>

```typescript
public readonly CreateRobotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRobot action.

---

##### `CreateSimulationApplicationConditionKeys`<sup>Required</sup> <a name="CreateSimulationApplicationConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateSimulationApplicationConditionKeys"></a>

```typescript
public readonly CreateSimulationApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSimulationApplication action.

---

##### `CreateSimulationJobConditionKeys`<sup>Required</sup> <a name="CreateSimulationJobConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateSimulationJobConditionKeys"></a>

```typescript
public readonly CreateSimulationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSimulationJob action.

---

##### `CreateWorldExportJobConditionKeys`<sup>Required</sup> <a name="CreateWorldExportJobConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateWorldExportJobConditionKeys"></a>

```typescript
public readonly CreateWorldExportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorldExportJob action.

---

##### `CreateWorldGenerationJobConditionKeys`<sup>Required</sup> <a name="CreateWorldGenerationJobConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateWorldGenerationJobConditionKeys"></a>

```typescript
public readonly CreateWorldGenerationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorldGenerationJob action.

---

##### `CreateWorldTemplateConditionKeys`<sup>Required</sup> <a name="CreateWorldTemplateConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.CreateWorldTemplateConditionKeys"></a>

```typescript
public readonly CreateWorldTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorldTemplate action.

---

##### `StartSimulationJobBatchConditionKeys`<sup>Required</sup> <a name="StartSimulationJobBatchConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.StartSimulationJobBatchConditionKeys"></a>

```typescript
public readonly StartSimulationJobBatchConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSimulationJobBatch action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.robomaker.RoboMakerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### RoboMakerResources <a name="RoboMakerResources" id="@cdk_utils/iam.robomaker.RoboMakerResources"></a>

ARN builders, validators, and parsers for robomaker resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.robomaker.RoboMakerResources.Initializer"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

new robomaker.RoboMakerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.deploymentFleet">deploymentFleet</a></code> | Builds an ARN for the deploymentFleet resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.deploymentJob">deploymentJob</a></code> | Builds an ARN for the deploymentJob resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.isValidDeploymentFleetArn">isValidDeploymentFleetArn</a></code> | Validates whether a string is a valid ARN for the deploymentFleet resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.isValidDeploymentJobArn">isValidDeploymentJobArn</a></code> | Validates whether a string is a valid ARN for the deploymentJob resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.isValidRobotApplicationArn">isValidRobotApplicationArn</a></code> | Validates whether a string is a valid ARN for the robotApplication resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.isValidRobotArn">isValidRobotArn</a></code> | Validates whether a string is a valid ARN for the robot resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.isValidSimulationApplicationArn">isValidSimulationApplicationArn</a></code> | Validates whether a string is a valid ARN for the simulationApplication resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.isValidSimulationJobArn">isValidSimulationJobArn</a></code> | Validates whether a string is a valid ARN for the simulationJob resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.isValidSimulationJobBatchArn">isValidSimulationJobBatchArn</a></code> | Validates whether a string is a valid ARN for the simulationJobBatch resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldArn">isValidWorldArn</a></code> | Validates whether a string is a valid ARN for the world resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldExportJobArn">isValidWorldExportJobArn</a></code> | Validates whether a string is a valid ARN for the worldExportJob resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldGenerationJobArn">isValidWorldGenerationJobArn</a></code> | Validates whether a string is a valid ARN for the worldGenerationJob resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldTemplateArn">isValidWorldTemplateArn</a></code> | Validates whether a string is a valid ARN for the worldTemplate resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.parseDeploymentFleetArn">parseDeploymentFleetArn</a></code> | Parses a deploymentFleet ARN into its components. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.parseDeploymentJobArn">parseDeploymentJobArn</a></code> | Parses a deploymentJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.parseRobotApplicationArn">parseRobotApplicationArn</a></code> | Parses a robotApplication ARN into its components. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.parseRobotArn">parseRobotArn</a></code> | Parses a robot ARN into its components. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.parseSimulationApplicationArn">parseSimulationApplicationArn</a></code> | Parses a simulationApplication ARN into its components. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.parseSimulationJobArn">parseSimulationJobArn</a></code> | Parses a simulationJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.parseSimulationJobBatchArn">parseSimulationJobBatchArn</a></code> | Parses a simulationJobBatch ARN into its components. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldArn">parseWorldArn</a></code> | Parses a world ARN into its components. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldExportJobArn">parseWorldExportJobArn</a></code> | Parses a worldExportJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldGenerationJobArn">parseWorldGenerationJobArn</a></code> | Parses a worldGenerationJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldTemplateArn">parseWorldTemplateArn</a></code> | Parses a worldTemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.robot">robot</a></code> | Builds an ARN for the robot resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.robotApplication">robotApplication</a></code> | Builds an ARN for the robotApplication resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.simulationApplication">simulationApplication</a></code> | Builds an ARN for the simulationApplication resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.simulationJob">simulationJob</a></code> | Builds an ARN for the simulationJob resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.simulationJobBatch">simulationJobBatch</a></code> | Builds an ARN for the simulationJobBatch resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.world">world</a></code> | Builds an ARN for the world resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.worldExportJob">worldExportJob</a></code> | Builds an ARN for the worldExportJob resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.worldGenerationJob">worldGenerationJob</a></code> | Builds an ARN for the worldGenerationJob resource. |
| <code><a href="#@cdk_utils/iam.robomaker.RoboMakerResources.worldTemplate">worldTemplate</a></code> | Builds an ARN for the worldTemplate resource. |

---

##### `deploymentFleet` <a name="deploymentFleet" id="@cdk_utils/iam.robomaker.RoboMakerResources.deploymentFleet"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.deploymentFleet(props: RoboMakerDeploymentFleetArnProps)
```

Builds an ARN for the deploymentFleet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.robomaker.RoboMakerResources.deploymentFleet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentFleetArnProps">RoboMakerDeploymentFleetArnProps</a>

---

##### `deploymentJob` <a name="deploymentJob" id="@cdk_utils/iam.robomaker.RoboMakerResources.deploymentJob"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.deploymentJob(props: RoboMakerDeploymentJobArnProps)
```

Builds an ARN for the deploymentJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.robomaker.RoboMakerResources.deploymentJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.robomaker.RoboMakerDeploymentJobArnProps">RoboMakerDeploymentJobArnProps</a>

---

##### `isValidDeploymentFleetArn` <a name="isValidDeploymentFleetArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidDeploymentFleetArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.isValidDeploymentFleetArn(arn: string)
```

Validates whether a string is a valid ARN for the deploymentFleet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidDeploymentFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentJobArn` <a name="isValidDeploymentJobArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidDeploymentJobArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.isValidDeploymentJobArn(arn: string)
```

Validates whether a string is a valid ARN for the deploymentJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidDeploymentJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRobotApplicationArn` <a name="isValidRobotApplicationArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidRobotApplicationArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.isValidRobotApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the robotApplication resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidRobotApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRobotArn` <a name="isValidRobotArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidRobotArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.isValidRobotArn(arn: string)
```

Validates whether a string is a valid ARN for the robot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidRobotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSimulationApplicationArn` <a name="isValidSimulationApplicationArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidSimulationApplicationArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.isValidSimulationApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the simulationApplication resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidSimulationApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSimulationJobArn` <a name="isValidSimulationJobArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidSimulationJobArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.isValidSimulationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the simulationJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidSimulationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSimulationJobBatchArn` <a name="isValidSimulationJobBatchArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidSimulationJobBatchArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.isValidSimulationJobBatchArn(arn: string)
```

Validates whether a string is a valid ARN for the simulationJobBatch resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidSimulationJobBatchArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorldArn` <a name="isValidWorldArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.isValidWorldArn(arn: string)
```

Validates whether a string is a valid ARN for the world resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorldExportJobArn` <a name="isValidWorldExportJobArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldExportJobArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.isValidWorldExportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the worldExportJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorldGenerationJobArn` <a name="isValidWorldGenerationJobArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldGenerationJobArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.isValidWorldGenerationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the worldGenerationJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldGenerationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorldTemplateArn` <a name="isValidWorldTemplateArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldTemplateArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.isValidWorldTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the worldTemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.isValidWorldTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentFleetArn` <a name="parseDeploymentFleetArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseDeploymentFleetArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.parseDeploymentFleetArn(arn: string)
```

Parses a deploymentFleet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseDeploymentFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentJobArn` <a name="parseDeploymentJobArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseDeploymentJobArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.parseDeploymentJobArn(arn: string)
```

Parses a deploymentJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseDeploymentJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRobotApplicationArn` <a name="parseRobotApplicationArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseRobotApplicationArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.parseRobotApplicationArn(arn: string)
```

Parses a robotApplication ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseRobotApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRobotArn` <a name="parseRobotArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseRobotArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.parseRobotArn(arn: string)
```

Parses a robot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseRobotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSimulationApplicationArn` <a name="parseSimulationApplicationArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseSimulationApplicationArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.parseSimulationApplicationArn(arn: string)
```

Parses a simulationApplication ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseSimulationApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSimulationJobArn` <a name="parseSimulationJobArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseSimulationJobArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.parseSimulationJobArn(arn: string)
```

Parses a simulationJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseSimulationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSimulationJobBatchArn` <a name="parseSimulationJobBatchArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseSimulationJobBatchArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.parseSimulationJobBatchArn(arn: string)
```

Parses a simulationJobBatch ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseSimulationJobBatchArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorldArn` <a name="parseWorldArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.parseWorldArn(arn: string)
```

Parses a world ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorldExportJobArn` <a name="parseWorldExportJobArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldExportJobArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.parseWorldExportJobArn(arn: string)
```

Parses a worldExportJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorldGenerationJobArn` <a name="parseWorldGenerationJobArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldGenerationJobArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.parseWorldGenerationJobArn(arn: string)
```

Parses a worldGenerationJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldGenerationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorldTemplateArn` <a name="parseWorldTemplateArn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldTemplateArn"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.parseWorldTemplateArn(arn: string)
```

Parses a worldTemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.robomaker.RoboMakerResources.parseWorldTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `robot` <a name="robot" id="@cdk_utils/iam.robomaker.RoboMakerResources.robot"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.robot(props: RoboMakerRobotArnProps)
```

Builds an ARN for the robot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.robomaker.RoboMakerResources.robot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.robomaker.RoboMakerRobotArnProps">RoboMakerRobotArnProps</a>

---

##### `robotApplication` <a name="robotApplication" id="@cdk_utils/iam.robomaker.RoboMakerResources.robotApplication"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.robotApplication(props: RoboMakerRobotApplicationArnProps)
```

Builds an ARN for the robotApplication resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.robomaker.RoboMakerResources.robotApplication.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.robomaker.RoboMakerRobotApplicationArnProps">RoboMakerRobotApplicationArnProps</a>

---

##### `simulationApplication` <a name="simulationApplication" id="@cdk_utils/iam.robomaker.RoboMakerResources.simulationApplication"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.simulationApplication(props: RoboMakerSimulationApplicationArnProps)
```

Builds an ARN for the simulationApplication resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.robomaker.RoboMakerResources.simulationApplication.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationApplicationArnProps">RoboMakerSimulationApplicationArnProps</a>

---

##### `simulationJob` <a name="simulationJob" id="@cdk_utils/iam.robomaker.RoboMakerResources.simulationJob"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.simulationJob(props: RoboMakerSimulationJobArnProps)
```

Builds an ARN for the simulationJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.robomaker.RoboMakerResources.simulationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobArnProps">RoboMakerSimulationJobArnProps</a>

---

##### `simulationJobBatch` <a name="simulationJobBatch" id="@cdk_utils/iam.robomaker.RoboMakerResources.simulationJobBatch"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.simulationJobBatch(props: RoboMakerSimulationJobBatchArnProps)
```

Builds an ARN for the simulationJobBatch resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.robomaker.RoboMakerResources.simulationJobBatch.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.robomaker.RoboMakerSimulationJobBatchArnProps">RoboMakerSimulationJobBatchArnProps</a>

---

##### `world` <a name="world" id="@cdk_utils/iam.robomaker.RoboMakerResources.world"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.world(props: RoboMakerWorldArnProps)
```

Builds an ARN for the world resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.robomaker.RoboMakerResources.world.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.robomaker.RoboMakerWorldArnProps">RoboMakerWorldArnProps</a>

---

##### `worldExportJob` <a name="worldExportJob" id="@cdk_utils/iam.robomaker.RoboMakerResources.worldExportJob"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.worldExportJob(props: RoboMakerWorldExportJobArnProps)
```

Builds an ARN for the worldExportJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.robomaker.RoboMakerResources.worldExportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.robomaker.RoboMakerWorldExportJobArnProps">RoboMakerWorldExportJobArnProps</a>

---

##### `worldGenerationJob` <a name="worldGenerationJob" id="@cdk_utils/iam.robomaker.RoboMakerResources.worldGenerationJob"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.worldGenerationJob(props: RoboMakerWorldGenerationJobArnProps)
```

Builds an ARN for the worldGenerationJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.robomaker.RoboMakerResources.worldGenerationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.robomaker.RoboMakerWorldGenerationJobArnProps">RoboMakerWorldGenerationJobArnProps</a>

---

##### `worldTemplate` <a name="worldTemplate" id="@cdk_utils/iam.robomaker.RoboMakerResources.worldTemplate"></a>

```typescript
import { robomaker } from '@cdk_utils/iam'

robomaker.RoboMakerResources.worldTemplate(props: RoboMakerWorldTemplateArnProps)
```

Builds an ARN for the worldTemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.robomaker.RoboMakerResources.worldTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.robomaker.RoboMakerWorldTemplateArnProps">RoboMakerWorldTemplateArnProps</a>

---




