# `codedeploy` Submodule <a name="`codedeploy` Submodule" id="@cdk_utils/iam.codedeploy"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodeDeployApplicationArnComponents <a name="CodeDeployApplicationArnComponents" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnComponents.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

const codeDeployApplicationArnComponents: codedeploy.CodeDeployApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployApplicationArnComponents.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnComponents.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeDeployApplicationArnProps <a name="CodeDeployApplicationArnProps" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnProps.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

const codeDeployApplicationArnProps: codedeploy.CodeDeployApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployApplicationArnProps.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codedeploy.CodeDeployApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeDeployDeploymentconfigArnComponents <a name="CodeDeployDeploymentconfigArnComponents" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnComponents"></a>

Parsed components of a deploymentconfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnComponents.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

const codeDeployDeploymentconfigArnComponents: codedeploy.CodeDeployDeploymentconfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnComponents.property.deploymentConfigurationName">deploymentConfigurationName</a></code> | <code>string</code> | The DeploymentConfigurationName component. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deploymentConfigurationName`<sup>Required</sup> <a name="deploymentConfigurationName" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnComponents.property.deploymentConfigurationName"></a>

```typescript
public readonly deploymentConfigurationName: string;
```

- *Type:* string

The DeploymentConfigurationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeDeployDeploymentconfigArnProps <a name="CodeDeployDeploymentconfigArnProps" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnProps"></a>

Properties for building a deploymentconfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnProps.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

const codeDeployDeploymentconfigArnProps: codedeploy.CodeDeployDeploymentconfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnProps.property.deploymentConfigurationName">deploymentConfigurationName</a></code> | <code>string</code> | The DeploymentConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deploymentConfigurationName`<sup>Required</sup> <a name="deploymentConfigurationName" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnProps.property.deploymentConfigurationName"></a>

```typescript
public readonly deploymentConfigurationName: string;
```

- *Type:* string

The DeploymentConfigurationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeDeployDeploymentgroupArnComponents <a name="CodeDeployDeploymentgroupArnComponents" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents"></a>

Parsed components of a deploymentgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

const codeDeployDeploymentgroupArnComponents: codedeploy.CodeDeployDeploymentgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents.property.deploymentGroupName">deploymentGroupName</a></code> | <code>string</code> | The DeploymentGroupName component. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component.

---

##### `deploymentGroupName`<sup>Required</sup> <a name="deploymentGroupName" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents.property.deploymentGroupName"></a>

```typescript
public readonly deploymentGroupName: string;
```

- *Type:* string

The DeploymentGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeDeployDeploymentgroupArnProps <a name="CodeDeployDeploymentgroupArnProps" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps"></a>

Properties for building a deploymentgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

const codeDeployDeploymentgroupArnProps: codedeploy.CodeDeployDeploymentgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps.property.deploymentGroupName">deploymentGroupName</a></code> | <code>string</code> | The DeploymentGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component of the ARN.

---

##### `deploymentGroupName`<sup>Required</sup> <a name="deploymentGroupName" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps.property.deploymentGroupName"></a>

```typescript
public readonly deploymentGroupName: string;
```

- *Type:* string

The DeploymentGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeDeployInstanceArnComponents <a name="CodeDeployInstanceArnComponents" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnComponents"></a>

Parsed components of a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnComponents.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

const codeDeployInstanceArnComponents: codedeploy.CodeDeployInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployInstanceArnComponents.property.instanceName">instanceName</a></code> | <code>string</code> | The InstanceName component. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnComponents.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

The InstanceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeDeployInstanceArnProps <a name="CodeDeployInstanceArnProps" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnProps"></a>

Properties for building a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnProps.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

const codeDeployInstanceArnProps: codedeploy.CodeDeployInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployInstanceArnProps.property.instanceName">instanceName</a></code> | <code>string</code> | The InstanceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnProps.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

The InstanceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codedeploy.CodeDeployInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodeDeployActions <a name="CodeDeployActions" id="@cdk_utils/iam.codedeploy.CodeDeployActions"></a>

IAM action constants for the codedeploy service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codedeploy.CodeDeployActions.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

new codedeploy.CodeDeployActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [List] codedeploy:GetApplication. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetApplicationRevision">actionGetApplicationRevision</a></code> | <code>string</code> | [List] codedeploy:GetApplicationRevision. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetDeployment">actionGetDeployment</a></code> | <code>string</code> | [List] codedeploy:GetDeployment. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetDeploymentConfig">actionGetDeploymentConfig</a></code> | <code>string</code> | [List] codedeploy:GetDeploymentConfig. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetDeploymentGroup">actionGetDeploymentGroup</a></code> | <code>string</code> | [List] codedeploy:GetDeploymentGroup. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetDeploymentInstance">actionGetDeploymentInstance</a></code> | <code>string</code> | [List] codedeploy:GetDeploymentInstance. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetDeploymentTarget">actionGetDeploymentTarget</a></code> | <code>string</code> | [Read] codedeploy:GetDeploymentTarget. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetOnPremisesInstance">actionGetOnPremisesInstance</a></code> | <code>string</code> | [List] codedeploy:GetOnPremisesInstance. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.AddTagsToOnPremisesInstances">AddTagsToOnPremisesInstances</a></code> | <code>string</code> | [Tagging] codedeploy:AddTagsToOnPremisesInstances. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetApplicationRevisions">BatchGetApplicationRevisions</a></code> | <code>string</code> | [Read] codedeploy:BatchGetApplicationRevisions. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetApplications">BatchGetApplications</a></code> | <code>string</code> | [Read] codedeploy:BatchGetApplications. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetDeploymentGroups">BatchGetDeploymentGroups</a></code> | <code>string</code> | [Read] codedeploy:BatchGetDeploymentGroups. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetDeploymentInstances">BatchGetDeploymentInstances</a></code> | <code>string</code> | [Read] codedeploy:BatchGetDeploymentInstances. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetDeployments">BatchGetDeployments</a></code> | <code>string</code> | [Read] codedeploy:BatchGetDeployments. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetDeploymentTargets">BatchGetDeploymentTargets</a></code> | <code>string</code> | [Read] codedeploy:BatchGetDeploymentTargets. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetOnPremisesInstances">BatchGetOnPremisesInstances</a></code> | <code>string</code> | [Read] codedeploy:BatchGetOnPremisesInstances. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.ContinueDeployment">ContinueDeployment</a></code> | <code>string</code> | [Write] codedeploy:ContinueDeployment. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] codedeploy:CreateApplication. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.CreateCloudFormationDeployment">CreateCloudFormationDeployment</a></code> | <code>string</code> | [Write] codedeploy:CreateCloudFormationDeployment. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.CreateDeployment">CreateDeployment</a></code> | <code>string</code> | [Write] codedeploy:CreateDeployment. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.CreateDeploymentConfig">CreateDeploymentConfig</a></code> | <code>string</code> | [Write] codedeploy:CreateDeploymentConfig. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.CreateDeploymentGroup">CreateDeploymentGroup</a></code> | <code>string</code> | [Write] codedeploy:CreateDeploymentGroup. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] codedeploy:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeleteDeploymentConfig">DeleteDeploymentConfig</a></code> | <code>string</code> | [Write] codedeploy:DeleteDeploymentConfig. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeleteDeploymentGroup">DeleteDeploymentGroup</a></code> | <code>string</code> | [Write] codedeploy:DeleteDeploymentGroup. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeleteGitHubAccountToken">DeleteGitHubAccountToken</a></code> | <code>string</code> | [Write] codedeploy:DeleteGitHubAccountToken. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeleteResourcesByExternalId">DeleteResourcesByExternalId</a></code> | <code>string</code> | [Write] codedeploy:DeleteResourcesByExternalId. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeregisterOnPremisesInstance">DeregisterOnPremisesInstance</a></code> | <code>string</code> | [Write] codedeploy:DeregisterOnPremisesInstance. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListApplicationRevisions">ListApplicationRevisions</a></code> | <code>string</code> | [List] codedeploy:ListApplicationRevisions. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] codedeploy:ListApplications. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListDeploymentConfigs">ListDeploymentConfigs</a></code> | <code>string</code> | [List] codedeploy:ListDeploymentConfigs. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListDeploymentGroups">ListDeploymentGroups</a></code> | <code>string</code> | [List] codedeploy:ListDeploymentGroups. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListDeploymentInstances">ListDeploymentInstances</a></code> | <code>string</code> | [List] codedeploy:ListDeploymentInstances. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListDeployments">ListDeployments</a></code> | <code>string</code> | [List] codedeploy:ListDeployments. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListDeploymentTargets">ListDeploymentTargets</a></code> | <code>string</code> | [List] codedeploy:ListDeploymentTargets. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListGitHubAccountTokenNames">ListGitHubAccountTokenNames</a></code> | <code>string</code> | [List] codedeploy:ListGitHubAccountTokenNames. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListOnPremisesInstances">ListOnPremisesInstances</a></code> | <code>string</code> | [List] codedeploy:ListOnPremisesInstances. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] codedeploy:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.PutLifecycleEventHookExecutionStatus">PutLifecycleEventHookExecutionStatus</a></code> | <code>string</code> | [Write] codedeploy:PutLifecycleEventHookExecutionStatus. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.RegisterApplicationRevision">RegisterApplicationRevision</a></code> | <code>string</code> | [Write] codedeploy:RegisterApplicationRevision. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.RegisterOnPremisesInstance">RegisterOnPremisesInstance</a></code> | <code>string</code> | [Write] codedeploy:RegisterOnPremisesInstance. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.RemoveTagsFromOnPremisesInstances">RemoveTagsFromOnPremisesInstances</a></code> | <code>string</code> | [Tagging] codedeploy:RemoveTagsFromOnPremisesInstances. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.SkipWaitTimeForInstanceTermination">SkipWaitTimeForInstanceTermination</a></code> | <code>string</code> | [Write] codedeploy:SkipWaitTimeForInstanceTermination. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.StopDeployment">StopDeployment</a></code> | <code>string</code> | [Write] codedeploy:StopDeployment. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codedeploy:TagResource. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] codedeploy:UntagResource. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] codedeploy:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployActions.property.UpdateDeploymentGroup">UpdateDeploymentGroup</a></code> | <code>string</code> | [Write] codedeploy:UpdateDeploymentGroup. |

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[List] codedeploy:GetApplication.

---

##### `actionGetApplicationRevision`<sup>Required</sup> <a name="actionGetApplicationRevision" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetApplicationRevision"></a>

```typescript
public readonly actionGetApplicationRevision: string;
```

- *Type:* string

[List] codedeploy:GetApplicationRevision.

---

##### `actionGetDeployment`<sup>Required</sup> <a name="actionGetDeployment" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetDeployment"></a>

```typescript
public readonly actionGetDeployment: string;
```

- *Type:* string

[List] codedeploy:GetDeployment.

---

##### `actionGetDeploymentConfig`<sup>Required</sup> <a name="actionGetDeploymentConfig" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetDeploymentConfig"></a>

```typescript
public readonly actionGetDeploymentConfig: string;
```

- *Type:* string

[List] codedeploy:GetDeploymentConfig.

---

##### `actionGetDeploymentGroup`<sup>Required</sup> <a name="actionGetDeploymentGroup" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetDeploymentGroup"></a>

```typescript
public readonly actionGetDeploymentGroup: string;
```

- *Type:* string

[List] codedeploy:GetDeploymentGroup.

---

##### `actionGetDeploymentInstance`<sup>Required</sup> <a name="actionGetDeploymentInstance" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetDeploymentInstance"></a>

```typescript
public readonly actionGetDeploymentInstance: string;
```

- *Type:* string

[List] codedeploy:GetDeploymentInstance.

---

##### `actionGetDeploymentTarget`<sup>Required</sup> <a name="actionGetDeploymentTarget" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetDeploymentTarget"></a>

```typescript
public readonly actionGetDeploymentTarget: string;
```

- *Type:* string

[Read] codedeploy:GetDeploymentTarget.

---

##### `actionGetOnPremisesInstance`<sup>Required</sup> <a name="actionGetOnPremisesInstance" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.actionGetOnPremisesInstance"></a>

```typescript
public readonly actionGetOnPremisesInstance: string;
```

- *Type:* string

[List] codedeploy:GetOnPremisesInstance.

---

##### `AddTagsToOnPremisesInstances`<sup>Required</sup> <a name="AddTagsToOnPremisesInstances" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.AddTagsToOnPremisesInstances"></a>

```typescript
public readonly AddTagsToOnPremisesInstances: string;
```

- *Type:* string

[Tagging] codedeploy:AddTagsToOnPremisesInstances.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetApplicationRevisions`<sup>Required</sup> <a name="BatchGetApplicationRevisions" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetApplicationRevisions"></a>

```typescript
public readonly BatchGetApplicationRevisions: string;
```

- *Type:* string

[Read] codedeploy:BatchGetApplicationRevisions.

---

##### `BatchGetApplications`<sup>Required</sup> <a name="BatchGetApplications" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetApplications"></a>

```typescript
public readonly BatchGetApplications: string;
```

- *Type:* string

[Read] codedeploy:BatchGetApplications.

---

##### `BatchGetDeploymentGroups`<sup>Required</sup> <a name="BatchGetDeploymentGroups" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetDeploymentGroups"></a>

```typescript
public readonly BatchGetDeploymentGroups: string;
```

- *Type:* string

[Read] codedeploy:BatchGetDeploymentGroups.

---

##### `BatchGetDeploymentInstances`<sup>Required</sup> <a name="BatchGetDeploymentInstances" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetDeploymentInstances"></a>

```typescript
public readonly BatchGetDeploymentInstances: string;
```

- *Type:* string

[Read] codedeploy:BatchGetDeploymentInstances.

---

##### `BatchGetDeployments`<sup>Required</sup> <a name="BatchGetDeployments" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetDeployments"></a>

```typescript
public readonly BatchGetDeployments: string;
```

- *Type:* string

[Read] codedeploy:BatchGetDeployments.

---

##### `BatchGetDeploymentTargets`<sup>Required</sup> <a name="BatchGetDeploymentTargets" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetDeploymentTargets"></a>

```typescript
public readonly BatchGetDeploymentTargets: string;
```

- *Type:* string

[Read] codedeploy:BatchGetDeploymentTargets.

---

##### `BatchGetOnPremisesInstances`<sup>Required</sup> <a name="BatchGetOnPremisesInstances" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.BatchGetOnPremisesInstances"></a>

```typescript
public readonly BatchGetOnPremisesInstances: string;
```

- *Type:* string

[Read] codedeploy:BatchGetOnPremisesInstances.

---

##### `ContinueDeployment`<sup>Required</sup> <a name="ContinueDeployment" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.ContinueDeployment"></a>

```typescript
public readonly ContinueDeployment: string;
```

- *Type:* string

[Write] codedeploy:ContinueDeployment.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] codedeploy:CreateApplication.

---

##### `CreateCloudFormationDeployment`<sup>Required</sup> <a name="CreateCloudFormationDeployment" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.CreateCloudFormationDeployment"></a>

```typescript
public readonly CreateCloudFormationDeployment: string;
```

- *Type:* string

[Write] codedeploy:CreateCloudFormationDeployment.

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string;
```

- *Type:* string

[Write] codedeploy:CreateDeployment.

---

##### `CreateDeploymentConfig`<sup>Required</sup> <a name="CreateDeploymentConfig" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.CreateDeploymentConfig"></a>

```typescript
public readonly CreateDeploymentConfig: string;
```

- *Type:* string

[Write] codedeploy:CreateDeploymentConfig.

---

##### `CreateDeploymentGroup`<sup>Required</sup> <a name="CreateDeploymentGroup" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.CreateDeploymentGroup"></a>

```typescript
public readonly CreateDeploymentGroup: string;
```

- *Type:* string

[Write] codedeploy:CreateDeploymentGroup.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] codedeploy:DeleteApplication.

---

##### `DeleteDeploymentConfig`<sup>Required</sup> <a name="DeleteDeploymentConfig" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeleteDeploymentConfig"></a>

```typescript
public readonly DeleteDeploymentConfig: string;
```

- *Type:* string

[Write] codedeploy:DeleteDeploymentConfig.

---

##### `DeleteDeploymentGroup`<sup>Required</sup> <a name="DeleteDeploymentGroup" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeleteDeploymentGroup"></a>

```typescript
public readonly DeleteDeploymentGroup: string;
```

- *Type:* string

[Write] codedeploy:DeleteDeploymentGroup.

---

##### `DeleteGitHubAccountToken`<sup>Required</sup> <a name="DeleteGitHubAccountToken" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeleteGitHubAccountToken"></a>

```typescript
public readonly DeleteGitHubAccountToken: string;
```

- *Type:* string

[Write] codedeploy:DeleteGitHubAccountToken.

---

##### `DeleteResourcesByExternalId`<sup>Required</sup> <a name="DeleteResourcesByExternalId" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeleteResourcesByExternalId"></a>

```typescript
public readonly DeleteResourcesByExternalId: string;
```

- *Type:* string

[Write] codedeploy:DeleteResourcesByExternalId.

---

##### `DeregisterOnPremisesInstance`<sup>Required</sup> <a name="DeregisterOnPremisesInstance" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.DeregisterOnPremisesInstance"></a>

```typescript
public readonly DeregisterOnPremisesInstance: string;
```

- *Type:* string

[Write] codedeploy:DeregisterOnPremisesInstance.

---

##### `ListApplicationRevisions`<sup>Required</sup> <a name="ListApplicationRevisions" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListApplicationRevisions"></a>

```typescript
public readonly ListApplicationRevisions: string;
```

- *Type:* string

[List] codedeploy:ListApplicationRevisions.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] codedeploy:ListApplications.

---

##### `ListDeploymentConfigs`<sup>Required</sup> <a name="ListDeploymentConfigs" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListDeploymentConfigs"></a>

```typescript
public readonly ListDeploymentConfigs: string;
```

- *Type:* string

[List] codedeploy:ListDeploymentConfigs.

---

##### `ListDeploymentGroups`<sup>Required</sup> <a name="ListDeploymentGroups" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListDeploymentGroups"></a>

```typescript
public readonly ListDeploymentGroups: string;
```

- *Type:* string

[List] codedeploy:ListDeploymentGroups.

---

##### `ListDeploymentInstances`<sup>Required</sup> <a name="ListDeploymentInstances" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListDeploymentInstances"></a>

```typescript
public readonly ListDeploymentInstances: string;
```

- *Type:* string

[List] codedeploy:ListDeploymentInstances.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string;
```

- *Type:* string

[List] codedeploy:ListDeployments.

---

##### `ListDeploymentTargets`<sup>Required</sup> <a name="ListDeploymentTargets" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListDeploymentTargets"></a>

```typescript
public readonly ListDeploymentTargets: string;
```

- *Type:* string

[List] codedeploy:ListDeploymentTargets.

---

##### `ListGitHubAccountTokenNames`<sup>Required</sup> <a name="ListGitHubAccountTokenNames" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListGitHubAccountTokenNames"></a>

```typescript
public readonly ListGitHubAccountTokenNames: string;
```

- *Type:* string

[List] codedeploy:ListGitHubAccountTokenNames.

---

##### `ListOnPremisesInstances`<sup>Required</sup> <a name="ListOnPremisesInstances" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListOnPremisesInstances"></a>

```typescript
public readonly ListOnPremisesInstances: string;
```

- *Type:* string

[List] codedeploy:ListOnPremisesInstances.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] codedeploy:ListTagsForResource.

---

##### `PutLifecycleEventHookExecutionStatus`<sup>Required</sup> <a name="PutLifecycleEventHookExecutionStatus" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.PutLifecycleEventHookExecutionStatus"></a>

```typescript
public readonly PutLifecycleEventHookExecutionStatus: string;
```

- *Type:* string

[Write] codedeploy:PutLifecycleEventHookExecutionStatus.

---

##### `RegisterApplicationRevision`<sup>Required</sup> <a name="RegisterApplicationRevision" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.RegisterApplicationRevision"></a>

```typescript
public readonly RegisterApplicationRevision: string;
```

- *Type:* string

[Write] codedeploy:RegisterApplicationRevision.

---

##### `RegisterOnPremisesInstance`<sup>Required</sup> <a name="RegisterOnPremisesInstance" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.RegisterOnPremisesInstance"></a>

```typescript
public readonly RegisterOnPremisesInstance: string;
```

- *Type:* string

[Write] codedeploy:RegisterOnPremisesInstance.

---

##### `RemoveTagsFromOnPremisesInstances`<sup>Required</sup> <a name="RemoveTagsFromOnPremisesInstances" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.RemoveTagsFromOnPremisesInstances"></a>

```typescript
public readonly RemoveTagsFromOnPremisesInstances: string;
```

- *Type:* string

[Tagging] codedeploy:RemoveTagsFromOnPremisesInstances.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SkipWaitTimeForInstanceTermination`<sup>Required</sup> <a name="SkipWaitTimeForInstanceTermination" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.SkipWaitTimeForInstanceTermination"></a>

```typescript
public readonly SkipWaitTimeForInstanceTermination: string;
```

- *Type:* string

[Write] codedeploy:SkipWaitTimeForInstanceTermination.

---

##### `StopDeployment`<sup>Required</sup> <a name="StopDeployment" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.StopDeployment"></a>

```typescript
public readonly StopDeployment: string;
```

- *Type:* string

[Write] codedeploy:StopDeployment.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codedeploy:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] codedeploy:UntagResource.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] codedeploy:UpdateApplication.

---

##### `UpdateDeploymentGroup`<sup>Required</sup> <a name="UpdateDeploymentGroup" id="@cdk_utils/iam.codedeploy.CodeDeployActions.property.UpdateDeploymentGroup"></a>

```typescript
public readonly UpdateDeploymentGroup: string;
```

- *Type:* string

[Write] codedeploy:UpdateDeploymentGroup.

---

### CodeDeployConditions <a name="CodeDeployConditions" id="@cdk_utils/iam.codedeploy.CodeDeployConditions"></a>

Condition key constants and builders for codedeploy.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

new codedeploy.CodeDeployConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.requestTag"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.resourceTag"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.tagKeys"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployConditions.property.CreateDeploymentGroupConditionKeys">CreateDeploymentGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeploymentGroup action. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateDeploymentGroupConditionKeys`<sup>Required</sup> <a name="CreateDeploymentGroupConditionKeys" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.property.CreateDeploymentGroupConditionKeys"></a>

```typescript
public readonly CreateDeploymentGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeploymentGroup action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.codedeploy.CodeDeployConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CodeDeployOperations <a name="CodeDeployOperations" id="@cdk_utils/iam.codedeploy.CodeDeployOperations"></a>

API operation to required IAM actions mapping for codedeploy.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

new codedeploy.CodeDeployOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.AddTagsToOnPremisesInstances">AddTagsToOnPremisesInstances</a></code> | <code>string[]</code> | IAM actions required for the AddTagsToOnPremisesInstances API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetApplicationRevisions">BatchGetApplicationRevisions</a></code> | <code>string[]</code> | IAM actions required for the BatchGetApplicationRevisions API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetApplications">BatchGetApplications</a></code> | <code>string[]</code> | IAM actions required for the BatchGetApplications API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetDeploymentGroups">BatchGetDeploymentGroups</a></code> | <code>string[]</code> | IAM actions required for the BatchGetDeploymentGroups API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetDeploymentInstances">BatchGetDeploymentInstances</a></code> | <code>string[]</code> | IAM actions required for the BatchGetDeploymentInstances API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetDeployments">BatchGetDeployments</a></code> | <code>string[]</code> | IAM actions required for the BatchGetDeployments API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetDeploymentTargets">BatchGetDeploymentTargets</a></code> | <code>string[]</code> | IAM actions required for the BatchGetDeploymentTargets API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetOnPremisesInstances">BatchGetOnPremisesInstances</a></code> | <code>string[]</code> | IAM actions required for the BatchGetOnPremisesInstances API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ContinueDeployment">ContinueDeployment</a></code> | <code>string[]</code> | IAM actions required for the ContinueDeployment API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.CreateDeployment">CreateDeployment</a></code> | <code>string[]</code> | IAM actions required for the CreateDeployment API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.CreateDeploymentConfig">CreateDeploymentConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateDeploymentConfig API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.CreateDeploymentGroup">CreateDeploymentGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateDeploymentGroup API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeleteDeploymentConfig">DeleteDeploymentConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeploymentConfig API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeleteDeploymentGroup">DeleteDeploymentGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeploymentGroup API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeleteGitHubAccountToken">DeleteGitHubAccountToken</a></code> | <code>string[]</code> | IAM actions required for the DeleteGitHubAccountToken API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeleteResourcesByExternalId">DeleteResourcesByExternalId</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcesByExternalId API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeregisterOnPremisesInstance">DeregisterOnPremisesInstance</a></code> | <code>string[]</code> | IAM actions required for the DeregisterOnPremisesInstance API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListApplicationRevisions">ListApplicationRevisions</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationRevisions API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListDeploymentConfigs">ListDeploymentConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListDeploymentConfigs API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListDeploymentGroups">ListDeploymentGroups</a></code> | <code>string[]</code> | IAM actions required for the ListDeploymentGroups API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListDeploymentInstances">ListDeploymentInstances</a></code> | <code>string[]</code> | IAM actions required for the ListDeploymentInstances API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListDeployments">ListDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListDeployments API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListDeploymentTargets">ListDeploymentTargets</a></code> | <code>string[]</code> | IAM actions required for the ListDeploymentTargets API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListGitHubAccountTokenNames">ListGitHubAccountTokenNames</a></code> | <code>string[]</code> | IAM actions required for the ListGitHubAccountTokenNames API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListOnPremisesInstances">ListOnPremisesInstances</a></code> | <code>string[]</code> | IAM actions required for the ListOnPremisesInstances API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetApplicationRevision">opGetApplicationRevision</a></code> | <code>string[]</code> | IAM actions required for the GetApplicationRevision API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetDeployment">opGetDeployment</a></code> | <code>string[]</code> | IAM actions required for the GetDeployment API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetDeploymentConfig">opGetDeploymentConfig</a></code> | <code>string[]</code> | IAM actions required for the GetDeploymentConfig API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetDeploymentGroup">opGetDeploymentGroup</a></code> | <code>string[]</code> | IAM actions required for the GetDeploymentGroup API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetDeploymentInstance">opGetDeploymentInstance</a></code> | <code>string[]</code> | IAM actions required for the GetDeploymentInstance API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetDeploymentTarget">opGetDeploymentTarget</a></code> | <code>string[]</code> | IAM actions required for the GetDeploymentTarget API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetOnPremisesInstance">opGetOnPremisesInstance</a></code> | <code>string[]</code> | IAM actions required for the GetOnPremisesInstance API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.PutLifecycleEventHookExecutionStatus">PutLifecycleEventHookExecutionStatus</a></code> | <code>string[]</code> | IAM actions required for the PutLifecycleEventHookExecutionStatus API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.RegisterApplicationRevision">RegisterApplicationRevision</a></code> | <code>string[]</code> | IAM actions required for the RegisterApplicationRevision API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.RegisterOnPremisesInstance">RegisterOnPremisesInstance</a></code> | <code>string[]</code> | IAM actions required for the RegisterOnPremisesInstance API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.RemoveTagsFromOnPremisesInstances">RemoveTagsFromOnPremisesInstances</a></code> | <code>string[]</code> | IAM actions required for the RemoveTagsFromOnPremisesInstances API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.SkipWaitTimeForInstanceTermination">SkipWaitTimeForInstanceTermination</a></code> | <code>string[]</code> | IAM actions required for the SkipWaitTimeForInstanceTermination API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.StopDeployment">StopDeployment</a></code> | <code>string[]</code> | IAM actions required for the StopDeployment API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployOperations.property.UpdateDeploymentGroup">UpdateDeploymentGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateDeploymentGroup API call. |

---

##### `AddTagsToOnPremisesInstances`<sup>Required</sup> <a name="AddTagsToOnPremisesInstances" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.AddTagsToOnPremisesInstances"></a>

```typescript
public readonly AddTagsToOnPremisesInstances: string[];
```

- *Type:* string[]

IAM actions required for the AddTagsToOnPremisesInstances API call.

---

##### `BatchGetApplicationRevisions`<sup>Required</sup> <a name="BatchGetApplicationRevisions" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetApplicationRevisions"></a>

```typescript
public readonly BatchGetApplicationRevisions: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetApplicationRevisions API call.

---

##### `BatchGetApplications`<sup>Required</sup> <a name="BatchGetApplications" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetApplications"></a>

```typescript
public readonly BatchGetApplications: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetApplications API call.

---

##### `BatchGetDeploymentGroups`<sup>Required</sup> <a name="BatchGetDeploymentGroups" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetDeploymentGroups"></a>

```typescript
public readonly BatchGetDeploymentGroups: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetDeploymentGroups API call.

---

##### `BatchGetDeploymentInstances`<sup>Required</sup> <a name="BatchGetDeploymentInstances" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetDeploymentInstances"></a>

```typescript
public readonly BatchGetDeploymentInstances: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetDeploymentInstances API call.

---

##### `BatchGetDeployments`<sup>Required</sup> <a name="BatchGetDeployments" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetDeployments"></a>

```typescript
public readonly BatchGetDeployments: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetDeployments API call.

---

##### `BatchGetDeploymentTargets`<sup>Required</sup> <a name="BatchGetDeploymentTargets" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetDeploymentTargets"></a>

```typescript
public readonly BatchGetDeploymentTargets: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetDeploymentTargets API call.

---

##### `BatchGetOnPremisesInstances`<sup>Required</sup> <a name="BatchGetOnPremisesInstances" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.BatchGetOnPremisesInstances"></a>

```typescript
public readonly BatchGetOnPremisesInstances: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetOnPremisesInstances API call.

---

##### `ContinueDeployment`<sup>Required</sup> <a name="ContinueDeployment" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ContinueDeployment"></a>

```typescript
public readonly ContinueDeployment: string[];
```

- *Type:* string[]

IAM actions required for the ContinueDeployment API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateDeployment`<sup>Required</sup> <a name="CreateDeployment" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.CreateDeployment"></a>

```typescript
public readonly CreateDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeployment API call.

---

##### `CreateDeploymentConfig`<sup>Required</sup> <a name="CreateDeploymentConfig" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.CreateDeploymentConfig"></a>

```typescript
public readonly CreateDeploymentConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeploymentConfig API call.

---

##### `CreateDeploymentGroup`<sup>Required</sup> <a name="CreateDeploymentGroup" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.CreateDeploymentGroup"></a>

```typescript
public readonly CreateDeploymentGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeploymentGroup API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteDeploymentConfig`<sup>Required</sup> <a name="DeleteDeploymentConfig" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeleteDeploymentConfig"></a>

```typescript
public readonly DeleteDeploymentConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeploymentConfig API call.

---

##### `DeleteDeploymentGroup`<sup>Required</sup> <a name="DeleteDeploymentGroup" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeleteDeploymentGroup"></a>

```typescript
public readonly DeleteDeploymentGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeploymentGroup API call.

---

##### `DeleteGitHubAccountToken`<sup>Required</sup> <a name="DeleteGitHubAccountToken" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeleteGitHubAccountToken"></a>

```typescript
public readonly DeleteGitHubAccountToken: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGitHubAccountToken API call.

---

##### `DeleteResourcesByExternalId`<sup>Required</sup> <a name="DeleteResourcesByExternalId" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeleteResourcesByExternalId"></a>

```typescript
public readonly DeleteResourcesByExternalId: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcesByExternalId API call.

---

##### `DeregisterOnPremisesInstance`<sup>Required</sup> <a name="DeregisterOnPremisesInstance" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.DeregisterOnPremisesInstance"></a>

```typescript
public readonly DeregisterOnPremisesInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterOnPremisesInstance API call.

---

##### `ListApplicationRevisions`<sup>Required</sup> <a name="ListApplicationRevisions" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListApplicationRevisions"></a>

```typescript
public readonly ListApplicationRevisions: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationRevisions API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListDeploymentConfigs`<sup>Required</sup> <a name="ListDeploymentConfigs" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListDeploymentConfigs"></a>

```typescript
public readonly ListDeploymentConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListDeploymentConfigs API call.

---

##### `ListDeploymentGroups`<sup>Required</sup> <a name="ListDeploymentGroups" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListDeploymentGroups"></a>

```typescript
public readonly ListDeploymentGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListDeploymentGroups API call.

---

##### `ListDeploymentInstances`<sup>Required</sup> <a name="ListDeploymentInstances" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListDeploymentInstances"></a>

```typescript
public readonly ListDeploymentInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListDeploymentInstances API call.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListDeployments API call.

---

##### `ListDeploymentTargets`<sup>Required</sup> <a name="ListDeploymentTargets" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListDeploymentTargets"></a>

```typescript
public readonly ListDeploymentTargets: string[];
```

- *Type:* string[]

IAM actions required for the ListDeploymentTargets API call.

---

##### `ListGitHubAccountTokenNames`<sup>Required</sup> <a name="ListGitHubAccountTokenNames" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListGitHubAccountTokenNames"></a>

```typescript
public readonly ListGitHubAccountTokenNames: string[];
```

- *Type:* string[]

IAM actions required for the ListGitHubAccountTokenNames API call.

---

##### `ListOnPremisesInstances`<sup>Required</sup> <a name="ListOnPremisesInstances" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListOnPremisesInstances"></a>

```typescript
public readonly ListOnPremisesInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListOnPremisesInstances API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetApplicationRevision`<sup>Required</sup> <a name="opGetApplicationRevision" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetApplicationRevision"></a>

```typescript
public readonly opGetApplicationRevision: string[];
```

- *Type:* string[]

IAM actions required for the GetApplicationRevision API call.

---

##### `opGetDeployment`<sup>Required</sup> <a name="opGetDeployment" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetDeployment"></a>

```typescript
public readonly opGetDeployment: string[];
```

- *Type:* string[]

IAM actions required for the GetDeployment API call.

---

##### `opGetDeploymentConfig`<sup>Required</sup> <a name="opGetDeploymentConfig" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetDeploymentConfig"></a>

```typescript
public readonly opGetDeploymentConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetDeploymentConfig API call.

---

##### `opGetDeploymentGroup`<sup>Required</sup> <a name="opGetDeploymentGroup" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetDeploymentGroup"></a>

```typescript
public readonly opGetDeploymentGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetDeploymentGroup API call.

---

##### `opGetDeploymentInstance`<sup>Required</sup> <a name="opGetDeploymentInstance" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetDeploymentInstance"></a>

```typescript
public readonly opGetDeploymentInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetDeploymentInstance API call.

---

##### `opGetDeploymentTarget`<sup>Required</sup> <a name="opGetDeploymentTarget" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetDeploymentTarget"></a>

```typescript
public readonly opGetDeploymentTarget: string[];
```

- *Type:* string[]

IAM actions required for the GetDeploymentTarget API call.

---

##### `opGetOnPremisesInstance`<sup>Required</sup> <a name="opGetOnPremisesInstance" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.opGetOnPremisesInstance"></a>

```typescript
public readonly opGetOnPremisesInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetOnPremisesInstance API call.

---

##### `PutLifecycleEventHookExecutionStatus`<sup>Required</sup> <a name="PutLifecycleEventHookExecutionStatus" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.PutLifecycleEventHookExecutionStatus"></a>

```typescript
public readonly PutLifecycleEventHookExecutionStatus: string[];
```

- *Type:* string[]

IAM actions required for the PutLifecycleEventHookExecutionStatus API call.

---

##### `RegisterApplicationRevision`<sup>Required</sup> <a name="RegisterApplicationRevision" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.RegisterApplicationRevision"></a>

```typescript
public readonly RegisterApplicationRevision: string[];
```

- *Type:* string[]

IAM actions required for the RegisterApplicationRevision API call.

---

##### `RegisterOnPremisesInstance`<sup>Required</sup> <a name="RegisterOnPremisesInstance" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.RegisterOnPremisesInstance"></a>

```typescript
public readonly RegisterOnPremisesInstance: string[];
```

- *Type:* string[]

IAM actions required for the RegisterOnPremisesInstance API call.

---

##### `RemoveTagsFromOnPremisesInstances`<sup>Required</sup> <a name="RemoveTagsFromOnPremisesInstances" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.RemoveTagsFromOnPremisesInstances"></a>

```typescript
public readonly RemoveTagsFromOnPremisesInstances: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTagsFromOnPremisesInstances API call.

---

##### `SkipWaitTimeForInstanceTermination`<sup>Required</sup> <a name="SkipWaitTimeForInstanceTermination" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.SkipWaitTimeForInstanceTermination"></a>

```typescript
public readonly SkipWaitTimeForInstanceTermination: string[];
```

- *Type:* string[]

IAM actions required for the SkipWaitTimeForInstanceTermination API call.

---

##### `StopDeployment`<sup>Required</sup> <a name="StopDeployment" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.StopDeployment"></a>

```typescript
public readonly StopDeployment: string[];
```

- *Type:* string[]

IAM actions required for the StopDeployment API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateDeploymentGroup`<sup>Required</sup> <a name="UpdateDeploymentGroup" id="@cdk_utils/iam.codedeploy.CodeDeployOperations.property.UpdateDeploymentGroup"></a>

```typescript
public readonly UpdateDeploymentGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDeploymentGroup API call.

---

### CodeDeployResources <a name="CodeDeployResources" id="@cdk_utils/iam.codedeploy.CodeDeployResources"></a>

ARN builders, validators, and parsers for codedeploy resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codedeploy.CodeDeployResources.Initializer"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

new codedeploy.CodeDeployResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.deploymentconfig">deploymentconfig</a></code> | Builds an ARN for the deploymentconfig resource. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.deploymentgroup">deploymentgroup</a></code> | Builds an ARN for the deploymentgroup resource. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.instance">instance</a></code> | Builds an ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.isValidDeploymentconfigArn">isValidDeploymentconfigArn</a></code> | Validates whether a string is a valid ARN for the deploymentconfig resource. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.isValidDeploymentgroupArn">isValidDeploymentgroupArn</a></code> | Validates whether a string is a valid ARN for the deploymentgroup resource. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.isValidInstanceArn">isValidInstanceArn</a></code> | Validates whether a string is a valid ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.parseDeploymentconfigArn">parseDeploymentconfigArn</a></code> | Parses a deploymentconfig ARN into its components. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.parseDeploymentgroupArn">parseDeploymentgroupArn</a></code> | Parses a deploymentgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.codedeploy.CodeDeployResources.parseInstanceArn">parseInstanceArn</a></code> | Parses a instance ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.codedeploy.CodeDeployResources.application"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.application(props: CodeDeployApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codedeploy.CodeDeployResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codedeploy.CodeDeployApplicationArnProps">CodeDeployApplicationArnProps</a>

---

##### `deploymentconfig` <a name="deploymentconfig" id="@cdk_utils/iam.codedeploy.CodeDeployResources.deploymentconfig"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.deploymentconfig(props: CodeDeployDeploymentconfigArnProps)
```

Builds an ARN for the deploymentconfig resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codedeploy.CodeDeployResources.deploymentconfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentconfigArnProps">CodeDeployDeploymentconfigArnProps</a>

---

##### `deploymentgroup` <a name="deploymentgroup" id="@cdk_utils/iam.codedeploy.CodeDeployResources.deploymentgroup"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.deploymentgroup(props: CodeDeployDeploymentgroupArnProps)
```

Builds an ARN for the deploymentgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codedeploy.CodeDeployResources.deploymentgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codedeploy.CodeDeployDeploymentgroupArnProps">CodeDeployDeploymentgroupArnProps</a>

---

##### `instance` <a name="instance" id="@cdk_utils/iam.codedeploy.CodeDeployResources.instance"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.instance(props: CodeDeployInstanceArnProps)
```

Builds an ARN for the instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codedeploy.CodeDeployResources.instance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codedeploy.CodeDeployInstanceArnProps">CodeDeployInstanceArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.isValidApplicationArn"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentconfigArn` <a name="isValidDeploymentconfigArn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.isValidDeploymentconfigArn"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.isValidDeploymentconfigArn(arn: string)
```

Validates whether a string is a valid ARN for the deploymentconfig resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.isValidDeploymentconfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentgroupArn` <a name="isValidDeploymentgroupArn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.isValidDeploymentgroupArn"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.isValidDeploymentgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the deploymentgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.isValidDeploymentgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceArn` <a name="isValidInstanceArn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.isValidInstanceArn"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.isValidInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.isValidInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.parseApplicationArn"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentconfigArn` <a name="parseDeploymentconfigArn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.parseDeploymentconfigArn"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.parseDeploymentconfigArn(arn: string)
```

Parses a deploymentconfig ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.parseDeploymentconfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentgroupArn` <a name="parseDeploymentgroupArn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.parseDeploymentgroupArn"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.parseDeploymentgroupArn(arn: string)
```

Parses a deploymentgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.parseDeploymentgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceArn` <a name="parseInstanceArn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.parseInstanceArn"></a>

```typescript
import { codedeploy } from '@cdk_utils/iam'

codedeploy.CodeDeployResources.parseInstanceArn(arn: string)
```

Parses a instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codedeploy.CodeDeployResources.parseInstanceArn.parameter.arn"></a>

- *Type:* string

---




