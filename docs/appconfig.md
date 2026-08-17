# `appconfig` Submodule <a name="`appconfig` Submodule" id="@cdk_utils/iam.appconfig"></a>


## Structs <a name="Structs" id="Structs"></a>

### AppconfigApplicationArnComponents <a name="AppconfigApplicationArnComponents" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnComponents.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigApplicationArnComponents: appconfig.AppconfigApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppconfigApplicationArnProps <a name="AppconfigApplicationArnProps" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnProps.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigApplicationArnProps: appconfig.AppconfigApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppconfigConfigurationArnComponents <a name="AppconfigConfigurationArnComponents" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents"></a>

Parsed components of a configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigConfigurationArnComponents: appconfig.AppconfigConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | The ConfigurationProfileId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

The ConfigurationProfileId component.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppconfigConfigurationArnProps <a name="AppconfigConfigurationArnProps" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps"></a>

Properties for building a configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigConfigurationArnProps: appconfig.AppconfigConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | The ConfigurationProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

The ConfigurationProfileId component of the ARN.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppconfigConfigurationprofileArnComponents <a name="AppconfigConfigurationprofileArnComponents" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents"></a>

Parsed components of a configurationprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigConfigurationprofileArnComponents: appconfig.AppconfigConfigurationprofileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | The ConfigurationProfileId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

The ConfigurationProfileId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppconfigConfigurationprofileArnProps <a name="AppconfigConfigurationprofileArnProps" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps"></a>

Properties for building a configurationprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigConfigurationprofileArnProps: appconfig.AppconfigConfigurationprofileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | The ConfigurationProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

The ConfigurationProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppconfigDeploymentArnComponents <a name="AppconfigDeploymentArnComponents" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents"></a>

Parsed components of a deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigDeploymentArnComponents: appconfig.AppconfigDeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.deploymentNumber">deploymentNumber</a></code> | <code>string</code> | The DeploymentNumber component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `deploymentNumber`<sup>Required</sup> <a name="deploymentNumber" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.deploymentNumber"></a>

```typescript
public readonly deploymentNumber: string;
```

- *Type:* string

The DeploymentNumber component.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppconfigDeploymentArnProps <a name="AppconfigDeploymentArnProps" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps"></a>

Properties for building a deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigDeploymentArnProps: appconfig.AppconfigDeploymentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.deploymentNumber">deploymentNumber</a></code> | <code>string</code> | The DeploymentNumber component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `deploymentNumber`<sup>Required</sup> <a name="deploymentNumber" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.deploymentNumber"></a>

```typescript
public readonly deploymentNumber: string;
```

- *Type:* string

The DeploymentNumber component of the ARN.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppconfigDeploymentstrategyArnComponents <a name="AppconfigDeploymentstrategyArnComponents" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnComponents"></a>

Parsed components of a deploymentstrategy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnComponents.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigDeploymentstrategyArnComponents: appconfig.AppconfigDeploymentstrategyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnComponents.property.deploymentStrategyId">deploymentStrategyId</a></code> | <code>string</code> | The DeploymentStrategyId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deploymentStrategyId`<sup>Required</sup> <a name="deploymentStrategyId" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnComponents.property.deploymentStrategyId"></a>

```typescript
public readonly deploymentStrategyId: string;
```

- *Type:* string

The DeploymentStrategyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppconfigDeploymentstrategyArnProps <a name="AppconfigDeploymentstrategyArnProps" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnProps"></a>

Properties for building a deploymentstrategy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnProps.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigDeploymentstrategyArnProps: appconfig.AppconfigDeploymentstrategyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnProps.property.deploymentStrategyId">deploymentStrategyId</a></code> | <code>string</code> | The DeploymentStrategyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deploymentStrategyId`<sup>Required</sup> <a name="deploymentStrategyId" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnProps.property.deploymentStrategyId"></a>

```typescript
public readonly deploymentStrategyId: string;
```

- *Type:* string

The DeploymentStrategyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppconfigEnvironmentArnComponents <a name="AppconfigEnvironmentArnComponents" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigEnvironmentArnComponents: appconfig.AppconfigEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppconfigEnvironmentArnProps <a name="AppconfigEnvironmentArnProps" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigEnvironmentArnProps: appconfig.AppconfigEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppconfigExperimentdefinitionArnComponents <a name="AppconfigExperimentdefinitionArnComponents" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents"></a>

Parsed components of a experimentdefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigExperimentdefinitionArnComponents: appconfig.AppconfigExperimentdefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents.property.experimentDefinitionId">experimentDefinitionId</a></code> | <code>string</code> | The ExperimentDefinitionId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `experimentDefinitionId`<sup>Required</sup> <a name="experimentDefinitionId" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents.property.experimentDefinitionId"></a>

```typescript
public readonly experimentDefinitionId: string;
```

- *Type:* string

The ExperimentDefinitionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppconfigExperimentdefinitionArnProps <a name="AppconfigExperimentdefinitionArnProps" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps"></a>

Properties for building a experimentdefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigExperimentdefinitionArnProps: appconfig.AppconfigExperimentdefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps.property.experimentDefinitionId">experimentDefinitionId</a></code> | <code>string</code> | The ExperimentDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `experimentDefinitionId`<sup>Required</sup> <a name="experimentDefinitionId" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps.property.experimentDefinitionId"></a>

```typescript
public readonly experimentDefinitionId: string;
```

- *Type:* string

The ExperimentDefinitionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppconfigExperimentrunArnComponents <a name="AppconfigExperimentrunArnComponents" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents"></a>

Parsed components of a experimentrun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigExperimentrunArnComponents: appconfig.AppconfigExperimentrunArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.experimentDefinitionId">experimentDefinitionId</a></code> | <code>string</code> | The ExperimentDefinitionId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.experimentRunNumber">experimentRunNumber</a></code> | <code>string</code> | The ExperimentRunNumber component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `experimentDefinitionId`<sup>Required</sup> <a name="experimentDefinitionId" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.experimentDefinitionId"></a>

```typescript
public readonly experimentDefinitionId: string;
```

- *Type:* string

The ExperimentDefinitionId component.

---

##### `experimentRunNumber`<sup>Required</sup> <a name="experimentRunNumber" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.experimentRunNumber"></a>

```typescript
public readonly experimentRunNumber: string;
```

- *Type:* string

The ExperimentRunNumber component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppconfigExperimentrunArnProps <a name="AppconfigExperimentrunArnProps" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps"></a>

Properties for building a experimentrun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigExperimentrunArnProps: appconfig.AppconfigExperimentrunArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.experimentDefinitionId">experimentDefinitionId</a></code> | <code>string</code> | The ExperimentDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.experimentRunNumber">experimentRunNumber</a></code> | <code>string</code> | The ExperimentRunNumber component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `experimentDefinitionId`<sup>Required</sup> <a name="experimentDefinitionId" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.experimentDefinitionId"></a>

```typescript
public readonly experimentDefinitionId: string;
```

- *Type:* string

The ExperimentDefinitionId component of the ARN.

---

##### `experimentRunNumber`<sup>Required</sup> <a name="experimentRunNumber" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.experimentRunNumber"></a>

```typescript
public readonly experimentRunNumber: string;
```

- *Type:* string

The ExperimentRunNumber component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppconfigExtensionArnComponents <a name="AppconfigExtensionArnComponents" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents"></a>

Parsed components of a extension ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigExtensionArnComponents: appconfig.AppconfigExtensionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents.property.extensionId">extensionId</a></code> | <code>string</code> | The ExtensionId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents.property.extensionVersionNumber">extensionVersionNumber</a></code> | <code>string</code> | The ExtensionVersionNumber component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `extensionId`<sup>Required</sup> <a name="extensionId" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents.property.extensionId"></a>

```typescript
public readonly extensionId: string;
```

- *Type:* string

The ExtensionId component.

---

##### `extensionVersionNumber`<sup>Required</sup> <a name="extensionVersionNumber" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents.property.extensionVersionNumber"></a>

```typescript
public readonly extensionVersionNumber: string;
```

- *Type:* string

The ExtensionVersionNumber component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppconfigExtensionArnProps <a name="AppconfigExtensionArnProps" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnProps"></a>

Properties for building a extension ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnProps.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigExtensionArnProps: appconfig.AppconfigExtensionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionArnProps.property.extensionId">extensionId</a></code> | <code>string</code> | The ExtensionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionArnProps.property.extensionVersionNumber">extensionVersionNumber</a></code> | <code>string</code> | The ExtensionVersionNumber component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `extensionId`<sup>Required</sup> <a name="extensionId" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnProps.property.extensionId"></a>

```typescript
public readonly extensionId: string;
```

- *Type:* string

The ExtensionId component of the ARN.

---

##### `extensionVersionNumber`<sup>Required</sup> <a name="extensionVersionNumber" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnProps.property.extensionVersionNumber"></a>

```typescript
public readonly extensionVersionNumber: string;
```

- *Type:* string

The ExtensionVersionNumber component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigExtensionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppconfigExtensionassociationArnComponents <a name="AppconfigExtensionassociationArnComponents" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnComponents"></a>

Parsed components of a extensionassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnComponents.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigExtensionassociationArnComponents: appconfig.AppconfigExtensionassociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnComponents.property.extensionAssociationId">extensionAssociationId</a></code> | <code>string</code> | The ExtensionAssociationId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `extensionAssociationId`<sup>Required</sup> <a name="extensionAssociationId" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnComponents.property.extensionAssociationId"></a>

```typescript
public readonly extensionAssociationId: string;
```

- *Type:* string

The ExtensionAssociationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppconfigExtensionassociationArnProps <a name="AppconfigExtensionassociationArnProps" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnProps"></a>

Properties for building a extensionassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnProps.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigExtensionassociationArnProps: appconfig.AppconfigExtensionassociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnProps.property.extensionAssociationId">extensionAssociationId</a></code> | <code>string</code> | The ExtensionAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `extensionAssociationId`<sup>Required</sup> <a name="extensionAssociationId" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnProps.property.extensionAssociationId"></a>

```typescript
public readonly extensionAssociationId: string;
```

- *Type:* string

The ExtensionAssociationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppconfigHostedconfigurationversionArnComponents <a name="AppconfigHostedconfigurationversionArnComponents" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents"></a>

Parsed components of a hostedconfigurationversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigHostedconfigurationversionArnComponents: appconfig.AppconfigHostedconfigurationversionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | The ConfigurationProfileId component. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

The ConfigurationProfileId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppconfigHostedconfigurationversionArnProps <a name="AppconfigHostedconfigurationversionArnProps" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps"></a>

Properties for building a hostedconfigurationversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

const appconfigHostedconfigurationversionArnProps: appconfig.AppconfigHostedconfigurationversionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | The ConfigurationProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

The ConfigurationProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigActions <a name="AppconfigActions" id="@cdk_utils/iam.appconfig.AppconfigActions"></a>

IAM action constants for the appconfig service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appconfig.AppconfigActions.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

new appconfig.AppconfigActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] appconfig:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] appconfig:GetApplication. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetConfiguration">actionGetConfiguration</a></code> | <code>string</code> | [Read] appconfig:GetConfiguration. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetConfigurationProfile">actionGetConfigurationProfile</a></code> | <code>string</code> | [Read] appconfig:GetConfigurationProfile. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetDeployment">actionGetDeployment</a></code> | <code>string</code> | [Read] appconfig:GetDeployment. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetDeploymentStrategy">actionGetDeploymentStrategy</a></code> | <code>string</code> | [Read] appconfig:GetDeploymentStrategy. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] appconfig:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetExperimentDefinition">actionGetExperimentDefinition</a></code> | <code>string</code> | [Read] appconfig:GetExperimentDefinition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetExperimentRun">actionGetExperimentRun</a></code> | <code>string</code> | [Read] appconfig:GetExperimentRun. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetExtension">actionGetExtension</a></code> | <code>string</code> | [Read] appconfig:GetExtension. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetExtensionAssociation">actionGetExtensionAssociation</a></code> | <code>string</code> | [Read] appconfig:GetExtensionAssociation. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetHostedConfigurationVersion">actionGetHostedConfigurationVersion</a></code> | <code>string</code> | [Read] appconfig:GetHostedConfigurationVersion. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetLatestConfiguration">actionGetLatestConfiguration</a></code> | <code>string</code> | [Read] appconfig:GetLatestConfiguration. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] appconfig:CreateApplication. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.CreateConfigurationProfile">CreateConfigurationProfile</a></code> | <code>string</code> | [Write] appconfig:CreateConfigurationProfile. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.CreateDeploymentStrategy">CreateDeploymentStrategy</a></code> | <code>string</code> | [Write] appconfig:CreateDeploymentStrategy. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] appconfig:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.CreateExperimentDefinition">CreateExperimentDefinition</a></code> | <code>string</code> | [Write] appconfig:CreateExperimentDefinition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.CreateExtension">CreateExtension</a></code> | <code>string</code> | [Write] appconfig:CreateExtension. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.CreateExtensionAssociation">CreateExtensionAssociation</a></code> | <code>string</code> | [Write] appconfig:CreateExtensionAssociation. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.CreateHostedConfigurationVersion">CreateHostedConfigurationVersion</a></code> | <code>string</code> | [Write] appconfig:CreateHostedConfigurationVersion. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] appconfig:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteConfigurationProfile">DeleteConfigurationProfile</a></code> | <code>string</code> | [Write] appconfig:DeleteConfigurationProfile. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteDeploymentStrategy">DeleteDeploymentStrategy</a></code> | <code>string</code> | [Write] appconfig:DeleteDeploymentStrategy. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] appconfig:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteExperimentDefinition">DeleteExperimentDefinition</a></code> | <code>string</code> | [Write] appconfig:DeleteExperimentDefinition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteExtension">DeleteExtension</a></code> | <code>string</code> | [Write] appconfig:DeleteExtension. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteExtensionAssociation">DeleteExtensionAssociation</a></code> | <code>string</code> | [Write] appconfig:DeleteExtensionAssociation. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteHostedConfigurationVersion">DeleteHostedConfigurationVersion</a></code> | <code>string</code> | [Write] appconfig:DeleteHostedConfigurationVersion. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] appconfig:ListApplications. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListConfigurationProfiles">ListConfigurationProfiles</a></code> | <code>string</code> | [List] appconfig:ListConfigurationProfiles. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListDeployments">ListDeployments</a></code> | <code>string</code> | [List] appconfig:ListDeployments. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListDeploymentStrategies">ListDeploymentStrategies</a></code> | <code>string</code> | [List] appconfig:ListDeploymentStrategies. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [List] appconfig:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListExperimentDefinitions">ListExperimentDefinitions</a></code> | <code>string</code> | [List] appconfig:ListExperimentDefinitions. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListExperimentRunEvents">ListExperimentRunEvents</a></code> | <code>string</code> | [List] appconfig:ListExperimentRunEvents. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListExperimentRuns">ListExperimentRuns</a></code> | <code>string</code> | [List] appconfig:ListExperimentRuns. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListExtensionAssociations">ListExtensionAssociations</a></code> | <code>string</code> | [List] appconfig:ListExtensionAssociations. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListExtensions">ListExtensions</a></code> | <code>string</code> | [List] appconfig:ListExtensions. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListHostedConfigurationVersions">ListHostedConfigurationVersions</a></code> | <code>string</code> | [List] appconfig:ListHostedConfigurationVersions. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] appconfig:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.StartConfigurationSession">StartConfigurationSession</a></code> | <code>string</code> | [Write] appconfig:StartConfigurationSession. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.StartDeployment">StartDeployment</a></code> | <code>string</code> | [Write] appconfig:StartDeployment. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.StartExperimentRun">StartExperimentRun</a></code> | <code>string</code> | [Write] appconfig:StartExperimentRun. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.StopDeployment">StopDeployment</a></code> | <code>string</code> | [Write] appconfig:StopDeployment. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.StopExperimentRun">StopExperimentRun</a></code> | <code>string</code> | [Write] appconfig:StopExperimentRun. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] appconfig:TagResource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] appconfig:UntagResource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string</code> | [Write] appconfig:UpdateAccountSettings. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] appconfig:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateConfigurationProfile">UpdateConfigurationProfile</a></code> | <code>string</code> | [Write] appconfig:UpdateConfigurationProfile. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateDeploymentStrategy">UpdateDeploymentStrategy</a></code> | <code>string</code> | [Write] appconfig:UpdateDeploymentStrategy. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] appconfig:UpdateEnvironment. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateExperimentDefinition">UpdateExperimentDefinition</a></code> | <code>string</code> | [Write] appconfig:UpdateExperimentDefinition. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateExperimentRun">UpdateExperimentRun</a></code> | <code>string</code> | [Write] appconfig:UpdateExperimentRun. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateExtension">UpdateExtension</a></code> | <code>string</code> | [Write] appconfig:UpdateExtension. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateExtensionAssociation">UpdateExtensionAssociation</a></code> | <code>string</code> | [Write] appconfig:UpdateExtensionAssociation. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigActions.property.ValidateConfiguration">ValidateConfiguration</a></code> | <code>string</code> | [Write] appconfig:ValidateConfiguration. |

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] appconfig:GetAccountSettings.

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] appconfig:GetApplication.

---

##### `actionGetConfiguration`<sup>Required</sup> <a name="actionGetConfiguration" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetConfiguration"></a>

```typescript
public readonly actionGetConfiguration: string;
```

- *Type:* string

[Read] appconfig:GetConfiguration.

---

##### `actionGetConfigurationProfile`<sup>Required</sup> <a name="actionGetConfigurationProfile" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetConfigurationProfile"></a>

```typescript
public readonly actionGetConfigurationProfile: string;
```

- *Type:* string

[Read] appconfig:GetConfigurationProfile.

---

##### `actionGetDeployment`<sup>Required</sup> <a name="actionGetDeployment" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetDeployment"></a>

```typescript
public readonly actionGetDeployment: string;
```

- *Type:* string

[Read] appconfig:GetDeployment.

---

##### `actionGetDeploymentStrategy`<sup>Required</sup> <a name="actionGetDeploymentStrategy" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetDeploymentStrategy"></a>

```typescript
public readonly actionGetDeploymentStrategy: string;
```

- *Type:* string

[Read] appconfig:GetDeploymentStrategy.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] appconfig:GetEnvironment.

---

##### `actionGetExperimentDefinition`<sup>Required</sup> <a name="actionGetExperimentDefinition" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetExperimentDefinition"></a>

```typescript
public readonly actionGetExperimentDefinition: string;
```

- *Type:* string

[Read] appconfig:GetExperimentDefinition.

---

##### `actionGetExperimentRun`<sup>Required</sup> <a name="actionGetExperimentRun" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetExperimentRun"></a>

```typescript
public readonly actionGetExperimentRun: string;
```

- *Type:* string

[Read] appconfig:GetExperimentRun.

---

##### `actionGetExtension`<sup>Required</sup> <a name="actionGetExtension" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetExtension"></a>

```typescript
public readonly actionGetExtension: string;
```

- *Type:* string

[Read] appconfig:GetExtension.

---

##### `actionGetExtensionAssociation`<sup>Required</sup> <a name="actionGetExtensionAssociation" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetExtensionAssociation"></a>

```typescript
public readonly actionGetExtensionAssociation: string;
```

- *Type:* string

[Read] appconfig:GetExtensionAssociation.

---

##### `actionGetHostedConfigurationVersion`<sup>Required</sup> <a name="actionGetHostedConfigurationVersion" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetHostedConfigurationVersion"></a>

```typescript
public readonly actionGetHostedConfigurationVersion: string;
```

- *Type:* string

[Read] appconfig:GetHostedConfigurationVersion.

---

##### `actionGetLatestConfiguration`<sup>Required</sup> <a name="actionGetLatestConfiguration" id="@cdk_utils/iam.appconfig.AppconfigActions.property.actionGetLatestConfiguration"></a>

```typescript
public readonly actionGetLatestConfiguration: string;
```

- *Type:* string

[Read] appconfig:GetLatestConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.appconfig.AppconfigActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.appconfig.AppconfigActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.appconfig.AppconfigActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.appconfig.AppconfigActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.appconfig.AppconfigActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.appconfig.AppconfigActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] appconfig:CreateApplication.

---

##### `CreateConfigurationProfile`<sup>Required</sup> <a name="CreateConfigurationProfile" id="@cdk_utils/iam.appconfig.AppconfigActions.property.CreateConfigurationProfile"></a>

```typescript
public readonly CreateConfigurationProfile: string;
```

- *Type:* string

[Write] appconfig:CreateConfigurationProfile.

---

##### `CreateDeploymentStrategy`<sup>Required</sup> <a name="CreateDeploymentStrategy" id="@cdk_utils/iam.appconfig.AppconfigActions.property.CreateDeploymentStrategy"></a>

```typescript
public readonly CreateDeploymentStrategy: string;
```

- *Type:* string

[Write] appconfig:CreateDeploymentStrategy.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.appconfig.AppconfigActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] appconfig:CreateEnvironment.

---

##### `CreateExperimentDefinition`<sup>Required</sup> <a name="CreateExperimentDefinition" id="@cdk_utils/iam.appconfig.AppconfigActions.property.CreateExperimentDefinition"></a>

```typescript
public readonly CreateExperimentDefinition: string;
```

- *Type:* string

[Write] appconfig:CreateExperimentDefinition.

---

##### `CreateExtension`<sup>Required</sup> <a name="CreateExtension" id="@cdk_utils/iam.appconfig.AppconfigActions.property.CreateExtension"></a>

```typescript
public readonly CreateExtension: string;
```

- *Type:* string

[Write] appconfig:CreateExtension.

---

##### `CreateExtensionAssociation`<sup>Required</sup> <a name="CreateExtensionAssociation" id="@cdk_utils/iam.appconfig.AppconfigActions.property.CreateExtensionAssociation"></a>

```typescript
public readonly CreateExtensionAssociation: string;
```

- *Type:* string

[Write] appconfig:CreateExtensionAssociation.

---

##### `CreateHostedConfigurationVersion`<sup>Required</sup> <a name="CreateHostedConfigurationVersion" id="@cdk_utils/iam.appconfig.AppconfigActions.property.CreateHostedConfigurationVersion"></a>

```typescript
public readonly CreateHostedConfigurationVersion: string;
```

- *Type:* string

[Write] appconfig:CreateHostedConfigurationVersion.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] appconfig:DeleteApplication.

---

##### `DeleteConfigurationProfile`<sup>Required</sup> <a name="DeleteConfigurationProfile" id="@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteConfigurationProfile"></a>

```typescript
public readonly DeleteConfigurationProfile: string;
```

- *Type:* string

[Write] appconfig:DeleteConfigurationProfile.

---

##### `DeleteDeploymentStrategy`<sup>Required</sup> <a name="DeleteDeploymentStrategy" id="@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteDeploymentStrategy"></a>

```typescript
public readonly DeleteDeploymentStrategy: string;
```

- *Type:* string

[Write] appconfig:DeleteDeploymentStrategy.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] appconfig:DeleteEnvironment.

---

##### `DeleteExperimentDefinition`<sup>Required</sup> <a name="DeleteExperimentDefinition" id="@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteExperimentDefinition"></a>

```typescript
public readonly DeleteExperimentDefinition: string;
```

- *Type:* string

[Write] appconfig:DeleteExperimentDefinition.

---

##### `DeleteExtension`<sup>Required</sup> <a name="DeleteExtension" id="@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteExtension"></a>

```typescript
public readonly DeleteExtension: string;
```

- *Type:* string

[Write] appconfig:DeleteExtension.

---

##### `DeleteExtensionAssociation`<sup>Required</sup> <a name="DeleteExtensionAssociation" id="@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteExtensionAssociation"></a>

```typescript
public readonly DeleteExtensionAssociation: string;
```

- *Type:* string

[Write] appconfig:DeleteExtensionAssociation.

---

##### `DeleteHostedConfigurationVersion`<sup>Required</sup> <a name="DeleteHostedConfigurationVersion" id="@cdk_utils/iam.appconfig.AppconfigActions.property.DeleteHostedConfigurationVersion"></a>

```typescript
public readonly DeleteHostedConfigurationVersion: string;
```

- *Type:* string

[Write] appconfig:DeleteHostedConfigurationVersion.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] appconfig:ListApplications.

---

##### `ListConfigurationProfiles`<sup>Required</sup> <a name="ListConfigurationProfiles" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListConfigurationProfiles"></a>

```typescript
public readonly ListConfigurationProfiles: string;
```

- *Type:* string

[List] appconfig:ListConfigurationProfiles.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string;
```

- *Type:* string

[List] appconfig:ListDeployments.

---

##### `ListDeploymentStrategies`<sup>Required</sup> <a name="ListDeploymentStrategies" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListDeploymentStrategies"></a>

```typescript
public readonly ListDeploymentStrategies: string;
```

- *Type:* string

[List] appconfig:ListDeploymentStrategies.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[List] appconfig:ListEnvironments.

---

##### `ListExperimentDefinitions`<sup>Required</sup> <a name="ListExperimentDefinitions" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListExperimentDefinitions"></a>

```typescript
public readonly ListExperimentDefinitions: string;
```

- *Type:* string

[List] appconfig:ListExperimentDefinitions.

---

##### `ListExperimentRunEvents`<sup>Required</sup> <a name="ListExperimentRunEvents" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListExperimentRunEvents"></a>

```typescript
public readonly ListExperimentRunEvents: string;
```

- *Type:* string

[List] appconfig:ListExperimentRunEvents.

---

##### `ListExperimentRuns`<sup>Required</sup> <a name="ListExperimentRuns" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListExperimentRuns"></a>

```typescript
public readonly ListExperimentRuns: string;
```

- *Type:* string

[List] appconfig:ListExperimentRuns.

---

##### `ListExtensionAssociations`<sup>Required</sup> <a name="ListExtensionAssociations" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListExtensionAssociations"></a>

```typescript
public readonly ListExtensionAssociations: string;
```

- *Type:* string

[List] appconfig:ListExtensionAssociations.

---

##### `ListExtensions`<sup>Required</sup> <a name="ListExtensions" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListExtensions"></a>

```typescript
public readonly ListExtensions: string;
```

- *Type:* string

[List] appconfig:ListExtensions.

---

##### `ListHostedConfigurationVersions`<sup>Required</sup> <a name="ListHostedConfigurationVersions" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListHostedConfigurationVersions"></a>

```typescript
public readonly ListHostedConfigurationVersions: string;
```

- *Type:* string

[List] appconfig:ListHostedConfigurationVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] appconfig:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.appconfig.AppconfigActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartConfigurationSession`<sup>Required</sup> <a name="StartConfigurationSession" id="@cdk_utils/iam.appconfig.AppconfigActions.property.StartConfigurationSession"></a>

```typescript
public readonly StartConfigurationSession: string;
```

- *Type:* string

[Write] appconfig:StartConfigurationSession.

---

##### `StartDeployment`<sup>Required</sup> <a name="StartDeployment" id="@cdk_utils/iam.appconfig.AppconfigActions.property.StartDeployment"></a>

```typescript
public readonly StartDeployment: string;
```

- *Type:* string

[Write] appconfig:StartDeployment.

---

##### `StartExperimentRun`<sup>Required</sup> <a name="StartExperimentRun" id="@cdk_utils/iam.appconfig.AppconfigActions.property.StartExperimentRun"></a>

```typescript
public readonly StartExperimentRun: string;
```

- *Type:* string

[Write] appconfig:StartExperimentRun.

---

##### `StopDeployment`<sup>Required</sup> <a name="StopDeployment" id="@cdk_utils/iam.appconfig.AppconfigActions.property.StopDeployment"></a>

```typescript
public readonly StopDeployment: string;
```

- *Type:* string

[Write] appconfig:StopDeployment.

---

##### `StopExperimentRun`<sup>Required</sup> <a name="StopExperimentRun" id="@cdk_utils/iam.appconfig.AppconfigActions.property.StopExperimentRun"></a>

```typescript
public readonly StopExperimentRun: string;
```

- *Type:* string

[Write] appconfig:StopExperimentRun.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appconfig.AppconfigActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] appconfig:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appconfig.AppconfigActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] appconfig:UntagResource.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string;
```

- *Type:* string

[Write] appconfig:UpdateAccountSettings.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] appconfig:UpdateApplication.

---

##### `UpdateConfigurationProfile`<sup>Required</sup> <a name="UpdateConfigurationProfile" id="@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateConfigurationProfile"></a>

```typescript
public readonly UpdateConfigurationProfile: string;
```

- *Type:* string

[Write] appconfig:UpdateConfigurationProfile.

---

##### `UpdateDeploymentStrategy`<sup>Required</sup> <a name="UpdateDeploymentStrategy" id="@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateDeploymentStrategy"></a>

```typescript
public readonly UpdateDeploymentStrategy: string;
```

- *Type:* string

[Write] appconfig:UpdateDeploymentStrategy.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] appconfig:UpdateEnvironment.

---

##### `UpdateExperimentDefinition`<sup>Required</sup> <a name="UpdateExperimentDefinition" id="@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateExperimentDefinition"></a>

```typescript
public readonly UpdateExperimentDefinition: string;
```

- *Type:* string

[Write] appconfig:UpdateExperimentDefinition.

---

##### `UpdateExperimentRun`<sup>Required</sup> <a name="UpdateExperimentRun" id="@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateExperimentRun"></a>

```typescript
public readonly UpdateExperimentRun: string;
```

- *Type:* string

[Write] appconfig:UpdateExperimentRun.

---

##### `UpdateExtension`<sup>Required</sup> <a name="UpdateExtension" id="@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateExtension"></a>

```typescript
public readonly UpdateExtension: string;
```

- *Type:* string

[Write] appconfig:UpdateExtension.

---

##### `UpdateExtensionAssociation`<sup>Required</sup> <a name="UpdateExtensionAssociation" id="@cdk_utils/iam.appconfig.AppconfigActions.property.UpdateExtensionAssociation"></a>

```typescript
public readonly UpdateExtensionAssociation: string;
```

- *Type:* string

[Write] appconfig:UpdateExtensionAssociation.

---

##### `ValidateConfiguration`<sup>Required</sup> <a name="ValidateConfiguration" id="@cdk_utils/iam.appconfig.AppconfigActions.property.ValidateConfiguration"></a>

```typescript
public readonly ValidateConfiguration: string;
```

- *Type:* string

[Write] appconfig:ValidateConfiguration.

---

### AppconfigConditions <a name="AppconfigConditions" id="@cdk_utils/iam.appconfig.AppconfigConditions"></a>

Condition key constants and builders for appconfig.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appconfig.AppconfigConditions.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

new appconfig.AppconfigConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.appconfig.AppconfigConditions.requestTag"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appconfig.AppconfigConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.appconfig.AppconfigConditions.resourceTag"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appconfig.AppconfigConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.tagKeys"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.appconfig.AppconfigConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetApplicationConditionKeys">actionGetApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetApplication action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetConfigurationConditionKeys">actionGetConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConfiguration action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetConfigurationProfileConditionKeys">actionGetConfigurationProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConfigurationProfile action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetDeploymentConditionKeys">actionGetDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDeployment action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetDeploymentStrategyConditionKeys">actionGetDeploymentStrategyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDeploymentStrategy action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetEnvironmentConditionKeys">actionGetEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEnvironment action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetExperimentDefinitionConditionKeys">actionGetExperimentDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetExperimentDefinition action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetExperimentRunConditionKeys">actionGetExperimentRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetExperimentRun action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetExtensionAssociationConditionKeys">actionGetExtensionAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetExtensionAssociation action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetExtensionConditionKeys">actionGetExtensionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetExtension action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetLatestConfigurationConditionKeys">actionGetLatestConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLatestConfiguration action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateConfigurationProfileConditionKeys">CreateConfigurationProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConfigurationProfile action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateDeploymentStrategyConditionKeys">CreateDeploymentStrategyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeploymentStrategy action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateExperimentDefinitionConditionKeys">CreateExperimentDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExperimentDefinition action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateExtensionAssociationConditionKeys">CreateExtensionAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExtensionAssociation action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateExtensionConditionKeys">CreateExtensionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExtension action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.StartConfigurationSessionConditionKeys">StartConfigurationSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartConfigurationSession action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.StartDeploymentConditionKeys">StartDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartDeployment action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.StartExperimentRunConditionKeys">StartExperimentRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartExperimentRun action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.StopExperimentRunConditionKeys">StopExperimentRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopExperimentRun action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateApplicationConditionKeys">UpdateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateApplication action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateConfigurationProfileConditionKeys">UpdateConfigurationProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConfigurationProfile action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateDeploymentStrategyConditionKeys">UpdateDeploymentStrategyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDeploymentStrategy action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateEnvironmentConditionKeys">UpdateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEnvironment action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateExperimentDefinitionConditionKeys">UpdateExperimentDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateExperimentDefinition action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateExperimentRunConditionKeys">UpdateExperimentRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateExperimentRun action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateExtensionAssociationConditionKeys">UpdateExtensionAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateExtensionAssociation action. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateExtensionConditionKeys">UpdateExtensionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateExtension action. |

---

##### `actionGetApplicationConditionKeys`<sup>Required</sup> <a name="actionGetApplicationConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetApplicationConditionKeys"></a>

```typescript
public readonly actionGetApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetApplication action.

---

##### `actionGetConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetConfigurationConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetConfigurationConditionKeys"></a>

```typescript
public readonly actionGetConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConfiguration action.

---

##### `actionGetConfigurationProfileConditionKeys`<sup>Required</sup> <a name="actionGetConfigurationProfileConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetConfigurationProfileConditionKeys"></a>

```typescript
public readonly actionGetConfigurationProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConfigurationProfile action.

---

##### `actionGetDeploymentConditionKeys`<sup>Required</sup> <a name="actionGetDeploymentConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetDeploymentConditionKeys"></a>

```typescript
public readonly actionGetDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDeployment action.

---

##### `actionGetDeploymentStrategyConditionKeys`<sup>Required</sup> <a name="actionGetDeploymentStrategyConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetDeploymentStrategyConditionKeys"></a>

```typescript
public readonly actionGetDeploymentStrategyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDeploymentStrategy action.

---

##### `actionGetEnvironmentConditionKeys`<sup>Required</sup> <a name="actionGetEnvironmentConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetEnvironmentConditionKeys"></a>

```typescript
public readonly actionGetEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEnvironment action.

---

##### `actionGetExperimentDefinitionConditionKeys`<sup>Required</sup> <a name="actionGetExperimentDefinitionConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetExperimentDefinitionConditionKeys"></a>

```typescript
public readonly actionGetExperimentDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetExperimentDefinition action.

---

##### `actionGetExperimentRunConditionKeys`<sup>Required</sup> <a name="actionGetExperimentRunConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetExperimentRunConditionKeys"></a>

```typescript
public readonly actionGetExperimentRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetExperimentRun action.

---

##### `actionGetExtensionAssociationConditionKeys`<sup>Required</sup> <a name="actionGetExtensionAssociationConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetExtensionAssociationConditionKeys"></a>

```typescript
public readonly actionGetExtensionAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetExtensionAssociation action.

---

##### `actionGetExtensionConditionKeys`<sup>Required</sup> <a name="actionGetExtensionConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetExtensionConditionKeys"></a>

```typescript
public readonly actionGetExtensionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetExtension action.

---

##### `actionGetLatestConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetLatestConfigurationConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.actionGetLatestConfigurationConditionKeys"></a>

```typescript
public readonly actionGetLatestConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLatestConfiguration action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateConfigurationProfileConditionKeys`<sup>Required</sup> <a name="CreateConfigurationProfileConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateConfigurationProfileConditionKeys"></a>

```typescript
public readonly CreateConfigurationProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConfigurationProfile action.

---

##### `CreateDeploymentStrategyConditionKeys`<sup>Required</sup> <a name="CreateDeploymentStrategyConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateDeploymentStrategyConditionKeys"></a>

```typescript
public readonly CreateDeploymentStrategyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeploymentStrategy action.

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `CreateExperimentDefinitionConditionKeys`<sup>Required</sup> <a name="CreateExperimentDefinitionConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateExperimentDefinitionConditionKeys"></a>

```typescript
public readonly CreateExperimentDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExperimentDefinition action.

---

##### `CreateExtensionAssociationConditionKeys`<sup>Required</sup> <a name="CreateExtensionAssociationConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateExtensionAssociationConditionKeys"></a>

```typescript
public readonly CreateExtensionAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExtensionAssociation action.

---

##### `CreateExtensionConditionKeys`<sup>Required</sup> <a name="CreateExtensionConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.CreateExtensionConditionKeys"></a>

```typescript
public readonly CreateExtensionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExtension action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `StartConfigurationSessionConditionKeys`<sup>Required</sup> <a name="StartConfigurationSessionConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.StartConfigurationSessionConditionKeys"></a>

```typescript
public readonly StartConfigurationSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartConfigurationSession action.

---

##### `StartDeploymentConditionKeys`<sup>Required</sup> <a name="StartDeploymentConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.StartDeploymentConditionKeys"></a>

```typescript
public readonly StartDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartDeployment action.

---

##### `StartExperimentRunConditionKeys`<sup>Required</sup> <a name="StartExperimentRunConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.StartExperimentRunConditionKeys"></a>

```typescript
public readonly StartExperimentRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartExperimentRun action.

---

##### `StopExperimentRunConditionKeys`<sup>Required</sup> <a name="StopExperimentRunConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.StopExperimentRunConditionKeys"></a>

```typescript
public readonly StopExperimentRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopExperimentRun action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateApplicationConditionKeys`<sup>Required</sup> <a name="UpdateApplicationConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateApplicationConditionKeys"></a>

```typescript
public readonly UpdateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateApplication action.

---

##### `UpdateConfigurationProfileConditionKeys`<sup>Required</sup> <a name="UpdateConfigurationProfileConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateConfigurationProfileConditionKeys"></a>

```typescript
public readonly UpdateConfigurationProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConfigurationProfile action.

---

##### `UpdateDeploymentStrategyConditionKeys`<sup>Required</sup> <a name="UpdateDeploymentStrategyConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateDeploymentStrategyConditionKeys"></a>

```typescript
public readonly UpdateDeploymentStrategyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDeploymentStrategy action.

---

##### `UpdateEnvironmentConditionKeys`<sup>Required</sup> <a name="UpdateEnvironmentConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateEnvironmentConditionKeys"></a>

```typescript
public readonly UpdateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEnvironment action.

---

##### `UpdateExperimentDefinitionConditionKeys`<sup>Required</sup> <a name="UpdateExperimentDefinitionConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateExperimentDefinitionConditionKeys"></a>

```typescript
public readonly UpdateExperimentDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateExperimentDefinition action.

---

##### `UpdateExperimentRunConditionKeys`<sup>Required</sup> <a name="UpdateExperimentRunConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateExperimentRunConditionKeys"></a>

```typescript
public readonly UpdateExperimentRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateExperimentRun action.

---

##### `UpdateExtensionAssociationConditionKeys`<sup>Required</sup> <a name="UpdateExtensionAssociationConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateExtensionAssociationConditionKeys"></a>

```typescript
public readonly UpdateExtensionAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateExtensionAssociation action.

---

##### `UpdateExtensionConditionKeys`<sup>Required</sup> <a name="UpdateExtensionConditionKeys" id="@cdk_utils/iam.appconfig.AppconfigConditions.property.UpdateExtensionConditionKeys"></a>

```typescript
public readonly UpdateExtensionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateExtension action.

---

### AppconfigOperations <a name="AppconfigOperations" id="@cdk_utils/iam.appconfig.AppconfigOperations"></a>

API operation to required IAM actions mapping for appconfig.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appconfig.AppconfigOperations.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

new appconfig.AppconfigOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateConfigurationProfile">CreateConfigurationProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateConfigurationProfile API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateDeploymentStrategy">CreateDeploymentStrategy</a></code> | <code>string[]</code> | IAM actions required for the CreateDeploymentStrategy API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateExperimentDefinition">CreateExperimentDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateExperimentDefinition API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateExtension">CreateExtension</a></code> | <code>string[]</code> | IAM actions required for the CreateExtension API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateExtensionAssociation">CreateExtensionAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateExtensionAssociation API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateHostedConfigurationVersion">CreateHostedConfigurationVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateHostedConfigurationVersion API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteConfigurationProfile">DeleteConfigurationProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationProfile API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteDeploymentStrategy">DeleteDeploymentStrategy</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeploymentStrategy API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironment API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteExperimentDefinition">DeleteExperimentDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteExperimentDefinition API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteExtension">DeleteExtension</a></code> | <code>string[]</code> | IAM actions required for the DeleteExtension API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteExtensionAssociation">DeleteExtensionAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteExtensionAssociation API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteHostedConfigurationVersion">DeleteHostedConfigurationVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteHostedConfigurationVersion API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListConfigurationProfiles">ListConfigurationProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationProfiles API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListDeployments">ListDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListDeployments API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListDeploymentStrategies">ListDeploymentStrategies</a></code> | <code>string[]</code> | IAM actions required for the ListDeploymentStrategies API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListEnvironments">ListEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironments API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListExperimentDefinitions">ListExperimentDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListExperimentDefinitions API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListExperimentRunEvents">ListExperimentRunEvents</a></code> | <code>string[]</code> | IAM actions required for the ListExperimentRunEvents API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListExperimentRuns">ListExperimentRuns</a></code> | <code>string[]</code> | IAM actions required for the ListExperimentRuns API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListExtensionAssociations">ListExtensionAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListExtensionAssociations API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListExtensions">ListExtensions</a></code> | <code>string[]</code> | IAM actions required for the ListExtensions API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListHostedConfigurationVersions">ListHostedConfigurationVersions</a></code> | <code>string[]</code> | IAM actions required for the ListHostedConfigurationVersions API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetAccountSettings">opGetAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetConfiguration">opGetConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetConfiguration API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetConfigurationProfile">opGetConfigurationProfile</a></code> | <code>string[]</code> | IAM actions required for the GetConfigurationProfile API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetDeployment">opGetDeployment</a></code> | <code>string[]</code> | IAM actions required for the GetDeployment API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetDeploymentStrategy">opGetDeploymentStrategy</a></code> | <code>string[]</code> | IAM actions required for the GetDeploymentStrategy API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetEnvironment">opGetEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironment API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetExperimentDefinition">opGetExperimentDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetExperimentDefinition API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetExperimentRun">opGetExperimentRun</a></code> | <code>string[]</code> | IAM actions required for the GetExperimentRun API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetExtension">opGetExtension</a></code> | <code>string[]</code> | IAM actions required for the GetExtension API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetExtensionAssociation">opGetExtensionAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetExtensionAssociation API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetHostedConfigurationVersion">opGetHostedConfigurationVersion</a></code> | <code>string[]</code> | IAM actions required for the GetHostedConfigurationVersion API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetLatestConfiguration">opGetLatestConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetLatestConfiguration API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.StartConfigurationSession">StartConfigurationSession</a></code> | <code>string[]</code> | IAM actions required for the StartConfigurationSession API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.StartDeployment">StartDeployment</a></code> | <code>string[]</code> | IAM actions required for the StartDeployment API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.StartExperimentRun">StartExperimentRun</a></code> | <code>string[]</code> | IAM actions required for the StartExperimentRun API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.StopDeployment">StopDeployment</a></code> | <code>string[]</code> | IAM actions required for the StopDeployment API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.StopExperimentRun">StopExperimentRun</a></code> | <code>string[]</code> | IAM actions required for the StopExperimentRun API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateConfigurationProfile">UpdateConfigurationProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationProfile API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateDeploymentStrategy">UpdateDeploymentStrategy</a></code> | <code>string[]</code> | IAM actions required for the UpdateDeploymentStrategy API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateExperimentDefinition">UpdateExperimentDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateExperimentDefinition API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateExperimentRun">UpdateExperimentRun</a></code> | <code>string[]</code> | IAM actions required for the UpdateExperimentRun API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateExtension">UpdateExtension</a></code> | <code>string[]</code> | IAM actions required for the UpdateExtension API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateExtensionAssociation">UpdateExtensionAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateExtensionAssociation API call. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigOperations.property.ValidateConfiguration">ValidateConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ValidateConfiguration API call. |

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateConfigurationProfile`<sup>Required</sup> <a name="CreateConfigurationProfile" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateConfigurationProfile"></a>

```typescript
public readonly CreateConfigurationProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfigurationProfile API call.

---

##### `CreateDeploymentStrategy`<sup>Required</sup> <a name="CreateDeploymentStrategy" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateDeploymentStrategy"></a>

```typescript
public readonly CreateDeploymentStrategy: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeploymentStrategy API call.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironment API call.

---

##### `CreateExperimentDefinition`<sup>Required</sup> <a name="CreateExperimentDefinition" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateExperimentDefinition"></a>

```typescript
public readonly CreateExperimentDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateExperimentDefinition API call.

---

##### `CreateExtension`<sup>Required</sup> <a name="CreateExtension" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateExtension"></a>

```typescript
public readonly CreateExtension: string[];
```

- *Type:* string[]

IAM actions required for the CreateExtension API call.

---

##### `CreateExtensionAssociation`<sup>Required</sup> <a name="CreateExtensionAssociation" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateExtensionAssociation"></a>

```typescript
public readonly CreateExtensionAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateExtensionAssociation API call.

---

##### `CreateHostedConfigurationVersion`<sup>Required</sup> <a name="CreateHostedConfigurationVersion" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.CreateHostedConfigurationVersion"></a>

```typescript
public readonly CreateHostedConfigurationVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateHostedConfigurationVersion API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteConfigurationProfile`<sup>Required</sup> <a name="DeleteConfigurationProfile" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteConfigurationProfile"></a>

```typescript
public readonly DeleteConfigurationProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationProfile API call.

---

##### `DeleteDeploymentStrategy`<sup>Required</sup> <a name="DeleteDeploymentStrategy" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteDeploymentStrategy"></a>

```typescript
public readonly DeleteDeploymentStrategy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeploymentStrategy API call.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironment API call.

---

##### `DeleteExperimentDefinition`<sup>Required</sup> <a name="DeleteExperimentDefinition" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteExperimentDefinition"></a>

```typescript
public readonly DeleteExperimentDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExperimentDefinition API call.

---

##### `DeleteExtension`<sup>Required</sup> <a name="DeleteExtension" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteExtension"></a>

```typescript
public readonly DeleteExtension: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExtension API call.

---

##### `DeleteExtensionAssociation`<sup>Required</sup> <a name="DeleteExtensionAssociation" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteExtensionAssociation"></a>

```typescript
public readonly DeleteExtensionAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExtensionAssociation API call.

---

##### `DeleteHostedConfigurationVersion`<sup>Required</sup> <a name="DeleteHostedConfigurationVersion" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.DeleteHostedConfigurationVersion"></a>

```typescript
public readonly DeleteHostedConfigurationVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHostedConfigurationVersion API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListConfigurationProfiles`<sup>Required</sup> <a name="ListConfigurationProfiles" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListConfigurationProfiles"></a>

```typescript
public readonly ListConfigurationProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationProfiles API call.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListDeployments API call.

---

##### `ListDeploymentStrategies`<sup>Required</sup> <a name="ListDeploymentStrategies" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListDeploymentStrategies"></a>

```typescript
public readonly ListDeploymentStrategies: string[];
```

- *Type:* string[]

IAM actions required for the ListDeploymentStrategies API call.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironments API call.

---

##### `ListExperimentDefinitions`<sup>Required</sup> <a name="ListExperimentDefinitions" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListExperimentDefinitions"></a>

```typescript
public readonly ListExperimentDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListExperimentDefinitions API call.

---

##### `ListExperimentRunEvents`<sup>Required</sup> <a name="ListExperimentRunEvents" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListExperimentRunEvents"></a>

```typescript
public readonly ListExperimentRunEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListExperimentRunEvents API call.

---

##### `ListExperimentRuns`<sup>Required</sup> <a name="ListExperimentRuns" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListExperimentRuns"></a>

```typescript
public readonly ListExperimentRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListExperimentRuns API call.

---

##### `ListExtensionAssociations`<sup>Required</sup> <a name="ListExtensionAssociations" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListExtensionAssociations"></a>

```typescript
public readonly ListExtensionAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListExtensionAssociations API call.

---

##### `ListExtensions`<sup>Required</sup> <a name="ListExtensions" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListExtensions"></a>

```typescript
public readonly ListExtensions: string[];
```

- *Type:* string[]

IAM actions required for the ListExtensions API call.

---

##### `ListHostedConfigurationVersions`<sup>Required</sup> <a name="ListHostedConfigurationVersions" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListHostedConfigurationVersions"></a>

```typescript
public readonly ListHostedConfigurationVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListHostedConfigurationVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccountSettings`<sup>Required</sup> <a name="opGetAccountSettings" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetAccountSettings"></a>

```typescript
public readonly opGetAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSettings API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetConfiguration`<sup>Required</sup> <a name="opGetConfiguration" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetConfiguration"></a>

```typescript
public readonly opGetConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetConfiguration API call.

---

##### `opGetConfigurationProfile`<sup>Required</sup> <a name="opGetConfigurationProfile" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetConfigurationProfile"></a>

```typescript
public readonly opGetConfigurationProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetConfigurationProfile API call.

---

##### `opGetDeployment`<sup>Required</sup> <a name="opGetDeployment" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetDeployment"></a>

```typescript
public readonly opGetDeployment: string[];
```

- *Type:* string[]

IAM actions required for the GetDeployment API call.

---

##### `opGetDeploymentStrategy`<sup>Required</sup> <a name="opGetDeploymentStrategy" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetDeploymentStrategy"></a>

```typescript
public readonly opGetDeploymentStrategy: string[];
```

- *Type:* string[]

IAM actions required for the GetDeploymentStrategy API call.

---

##### `opGetEnvironment`<sup>Required</sup> <a name="opGetEnvironment" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetEnvironment"></a>

```typescript
public readonly opGetEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironment API call.

---

##### `opGetExperimentDefinition`<sup>Required</sup> <a name="opGetExperimentDefinition" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetExperimentDefinition"></a>

```typescript
public readonly opGetExperimentDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetExperimentDefinition API call.

---

##### `opGetExperimentRun`<sup>Required</sup> <a name="opGetExperimentRun" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetExperimentRun"></a>

```typescript
public readonly opGetExperimentRun: string[];
```

- *Type:* string[]

IAM actions required for the GetExperimentRun API call.

---

##### `opGetExtension`<sup>Required</sup> <a name="opGetExtension" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetExtension"></a>

```typescript
public readonly opGetExtension: string[];
```

- *Type:* string[]

IAM actions required for the GetExtension API call.

---

##### `opGetExtensionAssociation`<sup>Required</sup> <a name="opGetExtensionAssociation" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetExtensionAssociation"></a>

```typescript
public readonly opGetExtensionAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetExtensionAssociation API call.

---

##### `opGetHostedConfigurationVersion`<sup>Required</sup> <a name="opGetHostedConfigurationVersion" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetHostedConfigurationVersion"></a>

```typescript
public readonly opGetHostedConfigurationVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetHostedConfigurationVersion API call.

---

##### `opGetLatestConfiguration`<sup>Required</sup> <a name="opGetLatestConfiguration" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.opGetLatestConfiguration"></a>

```typescript
public readonly opGetLatestConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetLatestConfiguration API call.

---

##### `StartConfigurationSession`<sup>Required</sup> <a name="StartConfigurationSession" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.StartConfigurationSession"></a>

```typescript
public readonly StartConfigurationSession: string[];
```

- *Type:* string[]

IAM actions required for the StartConfigurationSession API call.

---

##### `StartDeployment`<sup>Required</sup> <a name="StartDeployment" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.StartDeployment"></a>

```typescript
public readonly StartDeployment: string[];
```

- *Type:* string[]

IAM actions required for the StartDeployment API call.

---

##### `StartExperimentRun`<sup>Required</sup> <a name="StartExperimentRun" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.StartExperimentRun"></a>

```typescript
public readonly StartExperimentRun: string[];
```

- *Type:* string[]

IAM actions required for the StartExperimentRun API call.

---

##### `StopDeployment`<sup>Required</sup> <a name="StopDeployment" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.StopDeployment"></a>

```typescript
public readonly StopDeployment: string[];
```

- *Type:* string[]

IAM actions required for the StopDeployment API call.

---

##### `StopExperimentRun`<sup>Required</sup> <a name="StopExperimentRun" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.StopExperimentRun"></a>

```typescript
public readonly StopExperimentRun: string[];
```

- *Type:* string[]

IAM actions required for the StopExperimentRun API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountSettings API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateConfigurationProfile`<sup>Required</sup> <a name="UpdateConfigurationProfile" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateConfigurationProfile"></a>

```typescript
public readonly UpdateConfigurationProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationProfile API call.

---

##### `UpdateDeploymentStrategy`<sup>Required</sup> <a name="UpdateDeploymentStrategy" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateDeploymentStrategy"></a>

```typescript
public readonly UpdateDeploymentStrategy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDeploymentStrategy API call.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironment API call.

---

##### `UpdateExperimentDefinition`<sup>Required</sup> <a name="UpdateExperimentDefinition" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateExperimentDefinition"></a>

```typescript
public readonly UpdateExperimentDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExperimentDefinition API call.

---

##### `UpdateExperimentRun`<sup>Required</sup> <a name="UpdateExperimentRun" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateExperimentRun"></a>

```typescript
public readonly UpdateExperimentRun: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExperimentRun API call.

---

##### `UpdateExtension`<sup>Required</sup> <a name="UpdateExtension" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateExtension"></a>

```typescript
public readonly UpdateExtension: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExtension API call.

---

##### `UpdateExtensionAssociation`<sup>Required</sup> <a name="UpdateExtensionAssociation" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.UpdateExtensionAssociation"></a>

```typescript
public readonly UpdateExtensionAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExtensionAssociation API call.

---

##### `ValidateConfiguration`<sup>Required</sup> <a name="ValidateConfiguration" id="@cdk_utils/iam.appconfig.AppconfigOperations.property.ValidateConfiguration"></a>

```typescript
public readonly ValidateConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ValidateConfiguration API call.

---

### AppconfigResources <a name="AppconfigResources" id="@cdk_utils/iam.appconfig.AppconfigResources"></a>

ARN builders, validators, and parsers for appconfig resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appconfig.AppconfigResources.Initializer"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

new appconfig.AppconfigResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.configuration">configuration</a></code> | Builds an ARN for the configuration resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.configurationprofile">configurationprofile</a></code> | Builds an ARN for the configurationprofile resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.deployment">deployment</a></code> | Builds an ARN for the deployment resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.deploymentstrategy">deploymentstrategy</a></code> | Builds an ARN for the deploymentstrategy resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.experimentdefinition">experimentdefinition</a></code> | Builds an ARN for the experimentdefinition resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.experimentrun">experimentrun</a></code> | Builds an ARN for the experimentrun resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.extension">extension</a></code> | Builds an ARN for the extension resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.extensionassociation">extensionassociation</a></code> | Builds an ARN for the extensionassociation resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.hostedconfigurationversion">hostedconfigurationversion</a></code> | Builds an ARN for the hostedconfigurationversion resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.isValidConfigurationArn">isValidConfigurationArn</a></code> | Validates whether a string is a valid ARN for the configuration resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.isValidConfigurationprofileArn">isValidConfigurationprofileArn</a></code> | Validates whether a string is a valid ARN for the configurationprofile resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.isValidDeploymentArn">isValidDeploymentArn</a></code> | Validates whether a string is a valid ARN for the deployment resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.isValidDeploymentstrategyArn">isValidDeploymentstrategyArn</a></code> | Validates whether a string is a valid ARN for the deploymentstrategy resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.isValidExperimentdefinitionArn">isValidExperimentdefinitionArn</a></code> | Validates whether a string is a valid ARN for the experimentdefinition resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.isValidExperimentrunArn">isValidExperimentrunArn</a></code> | Validates whether a string is a valid ARN for the experimentrun resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.isValidExtensionArn">isValidExtensionArn</a></code> | Validates whether a string is a valid ARN for the extension resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.isValidExtensionassociationArn">isValidExtensionassociationArn</a></code> | Validates whether a string is a valid ARN for the extensionassociation resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.isValidHostedconfigurationversionArn">isValidHostedconfigurationversionArn</a></code> | Validates whether a string is a valid ARN for the hostedconfigurationversion resource. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.parseConfigurationArn">parseConfigurationArn</a></code> | Parses a configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.parseConfigurationprofileArn">parseConfigurationprofileArn</a></code> | Parses a configurationprofile ARN into its components. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.parseDeploymentArn">parseDeploymentArn</a></code> | Parses a deployment ARN into its components. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.parseDeploymentstrategyArn">parseDeploymentstrategyArn</a></code> | Parses a deploymentstrategy ARN into its components. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.parseExperimentdefinitionArn">parseExperimentdefinitionArn</a></code> | Parses a experimentdefinition ARN into its components. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.parseExperimentrunArn">parseExperimentrunArn</a></code> | Parses a experimentrun ARN into its components. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.parseExtensionArn">parseExtensionArn</a></code> | Parses a extension ARN into its components. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.parseExtensionassociationArn">parseExtensionassociationArn</a></code> | Parses a extensionassociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.appconfig.AppconfigResources.parseHostedconfigurationversionArn">parseHostedconfigurationversionArn</a></code> | Parses a hostedconfigurationversion ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.appconfig.AppconfigResources.application"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.application(props: AppconfigApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appconfig.AppconfigResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appconfig.AppconfigApplicationArnProps">AppconfigApplicationArnProps</a>

---

##### `configuration` <a name="configuration" id="@cdk_utils/iam.appconfig.AppconfigResources.configuration"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.configuration(props: AppconfigConfigurationArnProps)
```

Builds an ARN for the configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appconfig.AppconfigResources.configuration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationArnProps">AppconfigConfigurationArnProps</a>

---

##### `configurationprofile` <a name="configurationprofile" id="@cdk_utils/iam.appconfig.AppconfigResources.configurationprofile"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.configurationprofile(props: AppconfigConfigurationprofileArnProps)
```

Builds an ARN for the configurationprofile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appconfig.AppconfigResources.configurationprofile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appconfig.AppconfigConfigurationprofileArnProps">AppconfigConfigurationprofileArnProps</a>

---

##### `deployment` <a name="deployment" id="@cdk_utils/iam.appconfig.AppconfigResources.deployment"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.deployment(props: AppconfigDeploymentArnProps)
```

Builds an ARN for the deployment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appconfig.AppconfigResources.deployment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentArnProps">AppconfigDeploymentArnProps</a>

---

##### `deploymentstrategy` <a name="deploymentstrategy" id="@cdk_utils/iam.appconfig.AppconfigResources.deploymentstrategy"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.deploymentstrategy(props: AppconfigDeploymentstrategyArnProps)
```

Builds an ARN for the deploymentstrategy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appconfig.AppconfigResources.deploymentstrategy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appconfig.AppconfigDeploymentstrategyArnProps">AppconfigDeploymentstrategyArnProps</a>

---

##### `environment` <a name="environment" id="@cdk_utils/iam.appconfig.AppconfigResources.environment"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.environment(props: AppconfigEnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appconfig.AppconfigResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appconfig.AppconfigEnvironmentArnProps">AppconfigEnvironmentArnProps</a>

---

##### `experimentdefinition` <a name="experimentdefinition" id="@cdk_utils/iam.appconfig.AppconfigResources.experimentdefinition"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.experimentdefinition(props: AppconfigExperimentdefinitionArnProps)
```

Builds an ARN for the experimentdefinition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appconfig.AppconfigResources.experimentdefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appconfig.AppconfigExperimentdefinitionArnProps">AppconfigExperimentdefinitionArnProps</a>

---

##### `experimentrun` <a name="experimentrun" id="@cdk_utils/iam.appconfig.AppconfigResources.experimentrun"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.experimentrun(props: AppconfigExperimentrunArnProps)
```

Builds an ARN for the experimentrun resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appconfig.AppconfigResources.experimentrun.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appconfig.AppconfigExperimentrunArnProps">AppconfigExperimentrunArnProps</a>

---

##### `extension` <a name="extension" id="@cdk_utils/iam.appconfig.AppconfigResources.extension"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.extension(props: AppconfigExtensionArnProps)
```

Builds an ARN for the extension resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appconfig.AppconfigResources.extension.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appconfig.AppconfigExtensionArnProps">AppconfigExtensionArnProps</a>

---

##### `extensionassociation` <a name="extensionassociation" id="@cdk_utils/iam.appconfig.AppconfigResources.extensionassociation"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.extensionassociation(props: AppconfigExtensionassociationArnProps)
```

Builds an ARN for the extensionassociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appconfig.AppconfigResources.extensionassociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appconfig.AppconfigExtensionassociationArnProps">AppconfigExtensionassociationArnProps</a>

---

##### `hostedconfigurationversion` <a name="hostedconfigurationversion" id="@cdk_utils/iam.appconfig.AppconfigResources.hostedconfigurationversion"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.hostedconfigurationversion(props: AppconfigHostedconfigurationversionArnProps)
```

Builds an ARN for the hostedconfigurationversion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appconfig.AppconfigResources.hostedconfigurationversion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appconfig.AppconfigHostedconfigurationversionArnProps">AppconfigHostedconfigurationversionArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidApplicationArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigurationArn` <a name="isValidConfigurationArn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidConfigurationArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.isValidConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigurationprofileArn` <a name="isValidConfigurationprofileArn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidConfigurationprofileArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.isValidConfigurationprofileArn(arn: string)
```

Validates whether a string is a valid ARN for the configurationprofile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidConfigurationprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentArn` <a name="isValidDeploymentArn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidDeploymentArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.isValidDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the deployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentstrategyArn` <a name="isValidDeploymentstrategyArn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidDeploymentstrategyArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.isValidDeploymentstrategyArn(arn: string)
```

Validates whether a string is a valid ARN for the deploymentstrategy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidDeploymentstrategyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidEnvironmentArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExperimentdefinitionArn` <a name="isValidExperimentdefinitionArn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidExperimentdefinitionArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.isValidExperimentdefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the experimentdefinition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidExperimentdefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExperimentrunArn` <a name="isValidExperimentrunArn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidExperimentrunArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.isValidExperimentrunArn(arn: string)
```

Validates whether a string is a valid ARN for the experimentrun resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidExperimentrunArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExtensionArn` <a name="isValidExtensionArn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidExtensionArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.isValidExtensionArn(arn: string)
```

Validates whether a string is a valid ARN for the extension resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidExtensionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExtensionassociationArn` <a name="isValidExtensionassociationArn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidExtensionassociationArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.isValidExtensionassociationArn(arn: string)
```

Validates whether a string is a valid ARN for the extensionassociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidExtensionassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHostedconfigurationversionArn` <a name="isValidHostedconfigurationversionArn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidHostedconfigurationversionArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.isValidHostedconfigurationversionArn(arn: string)
```

Validates whether a string is a valid ARN for the hostedconfigurationversion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.isValidHostedconfigurationversionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseApplicationArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationArn` <a name="parseConfigurationArn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseConfigurationArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.parseConfigurationArn(arn: string)
```

Parses a configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationprofileArn` <a name="parseConfigurationprofileArn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseConfigurationprofileArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.parseConfigurationprofileArn(arn: string)
```

Parses a configurationprofile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseConfigurationprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentArn` <a name="parseDeploymentArn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseDeploymentArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.parseDeploymentArn(arn: string)
```

Parses a deployment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentstrategyArn` <a name="parseDeploymentstrategyArn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseDeploymentstrategyArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.parseDeploymentstrategyArn(arn: string)
```

Parses a deploymentstrategy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseDeploymentstrategyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseEnvironmentArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExperimentdefinitionArn` <a name="parseExperimentdefinitionArn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseExperimentdefinitionArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.parseExperimentdefinitionArn(arn: string)
```

Parses a experimentdefinition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseExperimentdefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExperimentrunArn` <a name="parseExperimentrunArn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseExperimentrunArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.parseExperimentrunArn(arn: string)
```

Parses a experimentrun ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseExperimentrunArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExtensionArn` <a name="parseExtensionArn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseExtensionArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.parseExtensionArn(arn: string)
```

Parses a extension ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseExtensionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExtensionassociationArn` <a name="parseExtensionassociationArn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseExtensionassociationArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.parseExtensionassociationArn(arn: string)
```

Parses a extensionassociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseExtensionassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHostedconfigurationversionArn` <a name="parseHostedconfigurationversionArn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseHostedconfigurationversionArn"></a>

```typescript
import { appconfig } from '@cdk_utils/iam'

appconfig.AppconfigResources.parseHostedconfigurationversionArn(arn: string)
```

Parses a hostedconfigurationversion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appconfig.AppconfigResources.parseHostedconfigurationversionArn.parameter.arn"></a>

- *Type:* string

---




