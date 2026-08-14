# `appstudio` Submodule <a name="`appstudio` Submodule" id="@cdk_utils/iam.appstudio"></a>


## Structs <a name="Structs" id="Structs"></a>

### AppstudioApplicationArnComponents <a name="AppstudioApplicationArnComponents" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnComponents.Initializer"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

const appstudioApplicationArnComponents: appstudio.AppstudioApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppstudioApplicationArnProps <a name="AppstudioApplicationArnProps" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnProps.Initializer"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

const appstudioApplicationArnProps: appstudio.AppstudioApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appstudio.AppstudioApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppstudioConnectorArnComponents <a name="AppstudioConnectorArnComponents" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnComponents"></a>

Parsed components of a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnComponents.Initializer"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

const appstudioConnectorArnComponents: appstudio.AppstudioConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioConnectorArnComponents.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnComponents.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppstudioConnectorArnProps <a name="AppstudioConnectorArnProps" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnProps"></a>

Properties for building a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnProps.Initializer"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

const appstudioConnectorArnProps: appstudio.AppstudioConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioConnectorArnProps.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnProps.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appstudio.AppstudioConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppstudioInstanceArnComponents <a name="AppstudioInstanceArnComponents" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnComponents"></a>

Parsed components of a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnComponents.Initializer"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

const appstudioInstanceArnComponents: appstudio.AppstudioInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioInstanceArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppstudioInstanceArnProps <a name="AppstudioInstanceArnProps" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnProps"></a>

Properties for building a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnProps.Initializer"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

const appstudioInstanceArnProps: appstudio.AppstudioInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioInstanceArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appstudio.AppstudioInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AppstudioActions <a name="AppstudioActions" id="@cdk_utils/iam.appstudio.AppstudioActions"></a>

IAM action constants for the appstudio service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appstudio.AppstudioActions.Initializer"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

new appstudio.AppstudioActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioActions.property.actionGetAccountStatus">actionGetAccountStatus</a></code> | <code>string</code> | [Read] appstudio:GetAccountStatus. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioActions.property.actionGetEnablementJobStatus">actionGetEnablementJobStatus</a></code> | <code>string</code> | [Read] appstudio:GetEnablementJobStatus. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioActions.property.StartEnablementJob">StartEnablementJob</a></code> | <code>string</code> | [Write] appstudio:StartEnablementJob. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioActions.property.StartRollbackEnablementJob">StartRollbackEnablementJob</a></code> | <code>string</code> | [Write] appstudio:StartRollbackEnablementJob. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioActions.property.StartTeamDeployment">StartTeamDeployment</a></code> | <code>string</code> | [Write] appstudio:StartTeamDeployment. |

---

##### `actionGetAccountStatus`<sup>Required</sup> <a name="actionGetAccountStatus" id="@cdk_utils/iam.appstudio.AppstudioActions.property.actionGetAccountStatus"></a>

```typescript
public readonly actionGetAccountStatus: string;
```

- *Type:* string

[Read] appstudio:GetAccountStatus.

---

##### `actionGetEnablementJobStatus`<sup>Required</sup> <a name="actionGetEnablementJobStatus" id="@cdk_utils/iam.appstudio.AppstudioActions.property.actionGetEnablementJobStatus"></a>

```typescript
public readonly actionGetEnablementJobStatus: string;
```

- *Type:* string

[Read] appstudio:GetEnablementJobStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.appstudio.AppstudioActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.appstudio.AppstudioActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.appstudio.AppstudioActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.appstudio.AppstudioActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.appstudio.AppstudioActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.appstudio.AppstudioActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartEnablementJob`<sup>Required</sup> <a name="StartEnablementJob" id="@cdk_utils/iam.appstudio.AppstudioActions.property.StartEnablementJob"></a>

```typescript
public readonly StartEnablementJob: string;
```

- *Type:* string

[Write] appstudio:StartEnablementJob.

---

##### `StartRollbackEnablementJob`<sup>Required</sup> <a name="StartRollbackEnablementJob" id="@cdk_utils/iam.appstudio.AppstudioActions.property.StartRollbackEnablementJob"></a>

```typescript
public readonly StartRollbackEnablementJob: string;
```

- *Type:* string

[Write] appstudio:StartRollbackEnablementJob.

---

##### `StartTeamDeployment`<sup>Required</sup> <a name="StartTeamDeployment" id="@cdk_utils/iam.appstudio.AppstudioActions.property.StartTeamDeployment"></a>

```typescript
public readonly StartTeamDeployment: string;
```

- *Type:* string

[Write] appstudio:StartTeamDeployment.

---

### AppstudioResources <a name="AppstudioResources" id="@cdk_utils/iam.appstudio.AppstudioResources"></a>

ARN builders, validators, and parsers for appstudio resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appstudio.AppstudioResources.Initializer"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

new appstudio.AppstudioResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioResources.connector">connector</a></code> | Builds an ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioResources.instance">instance</a></code> | Builds an ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioResources.isValidConnectorArn">isValidConnectorArn</a></code> | Validates whether a string is a valid ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioResources.isValidInstanceArn">isValidInstanceArn</a></code> | Validates whether a string is a valid ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioResources.parseConnectorArn">parseConnectorArn</a></code> | Parses a connector ARN into its components. |
| <code><a href="#@cdk_utils/iam.appstudio.AppstudioResources.parseInstanceArn">parseInstanceArn</a></code> | Parses a instance ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.appstudio.AppstudioResources.application"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

appstudio.AppstudioResources.application(props: AppstudioApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appstudio.AppstudioResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appstudio.AppstudioApplicationArnProps">AppstudioApplicationArnProps</a>

---

##### `connector` <a name="connector" id="@cdk_utils/iam.appstudio.AppstudioResources.connector"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

appstudio.AppstudioResources.connector(props: AppstudioConnectorArnProps)
```

Builds an ARN for the connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appstudio.AppstudioResources.connector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appstudio.AppstudioConnectorArnProps">AppstudioConnectorArnProps</a>

---

##### `instance` <a name="instance" id="@cdk_utils/iam.appstudio.AppstudioResources.instance"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

appstudio.AppstudioResources.instance(props: AppstudioInstanceArnProps)
```

Builds an ARN for the instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appstudio.AppstudioResources.instance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appstudio.AppstudioInstanceArnProps">AppstudioInstanceArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.appstudio.AppstudioResources.isValidApplicationArn"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

appstudio.AppstudioResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstudio.AppstudioResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorArn` <a name="isValidConnectorArn" id="@cdk_utils/iam.appstudio.AppstudioResources.isValidConnectorArn"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

appstudio.AppstudioResources.isValidConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstudio.AppstudioResources.isValidConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceArn` <a name="isValidInstanceArn" id="@cdk_utils/iam.appstudio.AppstudioResources.isValidInstanceArn"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

appstudio.AppstudioResources.isValidInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstudio.AppstudioResources.isValidInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.appstudio.AppstudioResources.parseApplicationArn"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

appstudio.AppstudioResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstudio.AppstudioResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorArn` <a name="parseConnectorArn" id="@cdk_utils/iam.appstudio.AppstudioResources.parseConnectorArn"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

appstudio.AppstudioResources.parseConnectorArn(arn: string)
```

Parses a connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstudio.AppstudioResources.parseConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceArn` <a name="parseInstanceArn" id="@cdk_utils/iam.appstudio.AppstudioResources.parseInstanceArn"></a>

```typescript
import { appstudio } from '@cdk_utils/iam'

appstudio.AppstudioResources.parseInstanceArn(arn: string)
```

Parses a instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appstudio.AppstudioResources.parseInstanceArn.parameter.arn"></a>

- *Type:* string

---




