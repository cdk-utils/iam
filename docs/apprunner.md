# `apprunner` Submodule <a name="`apprunner` Submodule" id="@cdk_utils/iam.apprunner"></a>


## Structs <a name="Structs" id="Structs"></a>

### ApprunnerAutoscalingconfigurationArnComponents <a name="ApprunnerAutoscalingconfigurationArnComponents" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents"></a>

Parsed components of a autoscalingconfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerAutoscalingconfigurationArnComponents: apprunner.ApprunnerAutoscalingconfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.autoscalingConfigurationId">autoscalingConfigurationId</a></code> | <code>string</code> | The AutoscalingConfigurationId component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.autoscalingConfigurationName">autoscalingConfigurationName</a></code> | <code>string</code> | The AutoscalingConfigurationName component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.autoscalingConfigurationVersion">autoscalingConfigurationVersion</a></code> | <code>string</code> | The AutoscalingConfigurationVersion component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `autoscalingConfigurationId`<sup>Required</sup> <a name="autoscalingConfigurationId" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.autoscalingConfigurationId"></a>

```typescript
public readonly autoscalingConfigurationId: string;
```

- *Type:* string

The AutoscalingConfigurationId component.

---

##### `autoscalingConfigurationName`<sup>Required</sup> <a name="autoscalingConfigurationName" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.autoscalingConfigurationName"></a>

```typescript
public readonly autoscalingConfigurationName: string;
```

- *Type:* string

The AutoscalingConfigurationName component.

---

##### `autoscalingConfigurationVersion`<sup>Required</sup> <a name="autoscalingConfigurationVersion" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.autoscalingConfigurationVersion"></a>

```typescript
public readonly autoscalingConfigurationVersion: string;
```

- *Type:* string

The AutoscalingConfigurationVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApprunnerAutoscalingconfigurationArnProps <a name="ApprunnerAutoscalingconfigurationArnProps" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps"></a>

Properties for building a autoscalingconfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerAutoscalingconfigurationArnProps: apprunner.ApprunnerAutoscalingconfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.autoscalingConfigurationId">autoscalingConfigurationId</a></code> | <code>string</code> | The AutoscalingConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.autoscalingConfigurationName">autoscalingConfigurationName</a></code> | <code>string</code> | The AutoscalingConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.autoscalingConfigurationVersion">autoscalingConfigurationVersion</a></code> | <code>string</code> | The AutoscalingConfigurationVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `autoscalingConfigurationId`<sup>Required</sup> <a name="autoscalingConfigurationId" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.autoscalingConfigurationId"></a>

```typescript
public readonly autoscalingConfigurationId: string;
```

- *Type:* string

The AutoscalingConfigurationId component of the ARN.

---

##### `autoscalingConfigurationName`<sup>Required</sup> <a name="autoscalingConfigurationName" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.autoscalingConfigurationName"></a>

```typescript
public readonly autoscalingConfigurationName: string;
```

- *Type:* string

The AutoscalingConfigurationName component of the ARN.

---

##### `autoscalingConfigurationVersion`<sup>Required</sup> <a name="autoscalingConfigurationVersion" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.autoscalingConfigurationVersion"></a>

```typescript
public readonly autoscalingConfigurationVersion: string;
```

- *Type:* string

The AutoscalingConfigurationVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApprunnerConnectionArnComponents <a name="ApprunnerConnectionArnComponents" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents"></a>

Parsed components of a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerConnectionArnComponents: apprunner.ApprunnerConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents.property.connectionName">connectionName</a></code> | <code>string</code> | The ConnectionName component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component.

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The ConnectionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApprunnerConnectionArnProps <a name="ApprunnerConnectionArnProps" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps"></a>

Properties for building a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerConnectionArnProps: apprunner.ApprunnerConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps.property.connectionName">connectionName</a></code> | <code>string</code> | The ConnectionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component of the ARN.

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The ConnectionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApprunnerObservabilityconfigurationArnComponents <a name="ApprunnerObservabilityconfigurationArnComponents" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents"></a>

Parsed components of a observabilityconfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerObservabilityconfigurationArnComponents: apprunner.ApprunnerObservabilityconfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.observabilityConfigurationId">observabilityConfigurationId</a></code> | <code>string</code> | The ObservabilityConfigurationId component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.observabilityConfigurationName">observabilityConfigurationName</a></code> | <code>string</code> | The ObservabilityConfigurationName component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.observabilityConfigurationVersion">observabilityConfigurationVersion</a></code> | <code>string</code> | The ObservabilityConfigurationVersion component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `observabilityConfigurationId`<sup>Required</sup> <a name="observabilityConfigurationId" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.observabilityConfigurationId"></a>

```typescript
public readonly observabilityConfigurationId: string;
```

- *Type:* string

The ObservabilityConfigurationId component.

---

##### `observabilityConfigurationName`<sup>Required</sup> <a name="observabilityConfigurationName" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.observabilityConfigurationName"></a>

```typescript
public readonly observabilityConfigurationName: string;
```

- *Type:* string

The ObservabilityConfigurationName component.

---

##### `observabilityConfigurationVersion`<sup>Required</sup> <a name="observabilityConfigurationVersion" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.observabilityConfigurationVersion"></a>

```typescript
public readonly observabilityConfigurationVersion: string;
```

- *Type:* string

The ObservabilityConfigurationVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApprunnerObservabilityconfigurationArnProps <a name="ApprunnerObservabilityconfigurationArnProps" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps"></a>

Properties for building a observabilityconfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerObservabilityconfigurationArnProps: apprunner.ApprunnerObservabilityconfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.observabilityConfigurationId">observabilityConfigurationId</a></code> | <code>string</code> | The ObservabilityConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.observabilityConfigurationName">observabilityConfigurationName</a></code> | <code>string</code> | The ObservabilityConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.observabilityConfigurationVersion">observabilityConfigurationVersion</a></code> | <code>string</code> | The ObservabilityConfigurationVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `observabilityConfigurationId`<sup>Required</sup> <a name="observabilityConfigurationId" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.observabilityConfigurationId"></a>

```typescript
public readonly observabilityConfigurationId: string;
```

- *Type:* string

The ObservabilityConfigurationId component of the ARN.

---

##### `observabilityConfigurationName`<sup>Required</sup> <a name="observabilityConfigurationName" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.observabilityConfigurationName"></a>

```typescript
public readonly observabilityConfigurationName: string;
```

- *Type:* string

The ObservabilityConfigurationName component of the ARN.

---

##### `observabilityConfigurationVersion`<sup>Required</sup> <a name="observabilityConfigurationVersion" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.observabilityConfigurationVersion"></a>

```typescript
public readonly observabilityConfigurationVersion: string;
```

- *Type:* string

The ObservabilityConfigurationVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApprunnerServiceArnComponents <a name="ApprunnerServiceArnComponents" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents"></a>

Parsed components of a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerServiceArnComponents: apprunner.ApprunnerServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnComponents.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component.

---

### ApprunnerServiceArnProps <a name="ApprunnerServiceArnProps" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnProps"></a>

Properties for building a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnProps.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerServiceArnProps: apprunner.ApprunnerServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerServiceArnProps.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerServiceArnProps.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component of the ARN.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApprunnerVpcconnectorArnComponents <a name="ApprunnerVpcconnectorArnComponents" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents"></a>

Parsed components of a vpcconnector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerVpcconnectorArnComponents: apprunner.ApprunnerVpcconnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.vpcConnectorId">vpcConnectorId</a></code> | <code>string</code> | The VpcConnectorId component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.vpcConnectorName">vpcConnectorName</a></code> | <code>string</code> | The VpcConnectorName component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.vpcConnectorVersion">vpcConnectorVersion</a></code> | <code>string</code> | The VpcConnectorVersion component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vpcConnectorId`<sup>Required</sup> <a name="vpcConnectorId" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.vpcConnectorId"></a>

```typescript
public readonly vpcConnectorId: string;
```

- *Type:* string

The VpcConnectorId component.

---

##### `vpcConnectorName`<sup>Required</sup> <a name="vpcConnectorName" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.vpcConnectorName"></a>

```typescript
public readonly vpcConnectorName: string;
```

- *Type:* string

The VpcConnectorName component.

---

##### `vpcConnectorVersion`<sup>Required</sup> <a name="vpcConnectorVersion" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnComponents.property.vpcConnectorVersion"></a>

```typescript
public readonly vpcConnectorVersion: string;
```

- *Type:* string

The VpcConnectorVersion component.

---

### ApprunnerVpcconnectorArnProps <a name="ApprunnerVpcconnectorArnProps" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps"></a>

Properties for building a vpcconnector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerVpcconnectorArnProps: apprunner.ApprunnerVpcconnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.vpcConnectorId">vpcConnectorId</a></code> | <code>string</code> | The VpcConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.vpcConnectorName">vpcConnectorName</a></code> | <code>string</code> | The VpcConnectorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.vpcConnectorVersion">vpcConnectorVersion</a></code> | <code>string</code> | The VpcConnectorVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vpcConnectorId`<sup>Required</sup> <a name="vpcConnectorId" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.vpcConnectorId"></a>

```typescript
public readonly vpcConnectorId: string;
```

- *Type:* string

The VpcConnectorId component of the ARN.

---

##### `vpcConnectorName`<sup>Required</sup> <a name="vpcConnectorName" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.vpcConnectorName"></a>

```typescript
public readonly vpcConnectorName: string;
```

- *Type:* string

The VpcConnectorName component of the ARN.

---

##### `vpcConnectorVersion`<sup>Required</sup> <a name="vpcConnectorVersion" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.vpcConnectorVersion"></a>

```typescript
public readonly vpcConnectorVersion: string;
```

- *Type:* string

The VpcConnectorVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApprunnerVpcingressconnectionArnComponents <a name="ApprunnerVpcingressconnectionArnComponents" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents"></a>

Parsed components of a vpcingressconnection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerVpcingressconnectionArnComponents: apprunner.ApprunnerVpcingressconnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents.property.vpcIngressConnectionId">vpcIngressConnectionId</a></code> | <code>string</code> | The VpcIngressConnectionId component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents.property.vpcIngressConnectionName">vpcIngressConnectionName</a></code> | <code>string</code> | The VpcIngressConnectionName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vpcIngressConnectionId`<sup>Required</sup> <a name="vpcIngressConnectionId" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents.property.vpcIngressConnectionId"></a>

```typescript
public readonly vpcIngressConnectionId: string;
```

- *Type:* string

The VpcIngressConnectionId component.

---

##### `vpcIngressConnectionName`<sup>Required</sup> <a name="vpcIngressConnectionName" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnComponents.property.vpcIngressConnectionName"></a>

```typescript
public readonly vpcIngressConnectionName: string;
```

- *Type:* string

The VpcIngressConnectionName component.

---

### ApprunnerVpcingressconnectionArnProps <a name="ApprunnerVpcingressconnectionArnProps" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps"></a>

Properties for building a vpcingressconnection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerVpcingressconnectionArnProps: apprunner.ApprunnerVpcingressconnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps.property.vpcIngressConnectionId">vpcIngressConnectionId</a></code> | <code>string</code> | The VpcIngressConnectionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps.property.vpcIngressConnectionName">vpcIngressConnectionName</a></code> | <code>string</code> | The VpcIngressConnectionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vpcIngressConnectionId`<sup>Required</sup> <a name="vpcIngressConnectionId" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps.property.vpcIngressConnectionId"></a>

```typescript
public readonly vpcIngressConnectionId: string;
```

- *Type:* string

The VpcIngressConnectionId component of the ARN.

---

##### `vpcIngressConnectionName`<sup>Required</sup> <a name="vpcIngressConnectionName" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps.property.vpcIngressConnectionName"></a>

```typescript
public readonly vpcIngressConnectionName: string;
```

- *Type:* string

The VpcIngressConnectionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApprunnerWebaclArnComponents <a name="ApprunnerWebaclArnComponents" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents"></a>

Parsed components of a webacl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerWebaclArnComponents: apprunner.ApprunnerWebaclArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.scope">scope</a></code> | <code>string</code> | The Scope component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnComponents.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component.

---

### ApprunnerWebaclArnProps <a name="ApprunnerWebaclArnProps" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps"></a>

Properties for building a webacl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

const apprunnerWebaclArnProps: apprunner.ApprunnerWebaclArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.scope">scope</a></code> | <code>string</code> | The Scope component of the ARN. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerActions <a name="ApprunnerActions" id="@cdk_utils/iam.apprunner.ApprunnerActions"></a>

IAM action constants for the apprunner service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apprunner.ApprunnerActions.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

new apprunner.ApprunnerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.AssociateCustomDomain">AssociateCustomDomain</a></code> | <code>string</code> | [Write] apprunner:AssociateCustomDomain. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.AssociateWebAcl">AssociateWebAcl</a></code> | <code>string</code> | [Write] apprunner:AssociateWebAcl. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateAutoScalingConfiguration">CreateAutoScalingConfiguration</a></code> | <code>string</code> | [Write] apprunner:CreateAutoScalingConfiguration. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateConnection">CreateConnection</a></code> | <code>string</code> | [Write] apprunner:CreateConnection. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateObservabilityConfiguration">CreateObservabilityConfiguration</a></code> | <code>string</code> | [Write] apprunner:CreateObservabilityConfiguration. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateService">CreateService</a></code> | <code>string</code> | [Write] apprunner:CreateService. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateVpcConnector">CreateVpcConnector</a></code> | <code>string</code> | [Write] apprunner:CreateVpcConnector. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateVpcIngressConnection">CreateVpcIngressConnection</a></code> | <code>string</code> | [Write] apprunner:CreateVpcIngressConnection. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteAutoScalingConfiguration">DeleteAutoScalingConfiguration</a></code> | <code>string</code> | [Write] apprunner:DeleteAutoScalingConfiguration. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] apprunner:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteObservabilityConfiguration">DeleteObservabilityConfiguration</a></code> | <code>string</code> | [Write] apprunner:DeleteObservabilityConfiguration. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteService">DeleteService</a></code> | <code>string</code> | [Write] apprunner:DeleteService. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteVpcConnector">DeleteVpcConnector</a></code> | <code>string</code> | [Write] apprunner:DeleteVpcConnector. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteVpcIngressConnection">DeleteVpcIngressConnection</a></code> | <code>string</code> | [Write] apprunner:DeleteVpcIngressConnection. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeAutoScalingConfiguration">DescribeAutoScalingConfiguration</a></code> | <code>string</code> | [Read] apprunner:DescribeAutoScalingConfiguration. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeCustomDomains">DescribeCustomDomains</a></code> | <code>string</code> | [Read] apprunner:DescribeCustomDomains. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeObservabilityConfiguration">DescribeObservabilityConfiguration</a></code> | <code>string</code> | [Read] apprunner:DescribeObservabilityConfiguration. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeOperation">DescribeOperation</a></code> | <code>string</code> | [Read] apprunner:DescribeOperation. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeService">DescribeService</a></code> | <code>string</code> | [Read] apprunner:DescribeService. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeVpcConnector">DescribeVpcConnector</a></code> | <code>string</code> | [Read] apprunner:DescribeVpcConnector. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeVpcIngressConnection">DescribeVpcIngressConnection</a></code> | <code>string</code> | [Read] apprunner:DescribeVpcIngressConnection. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeWebAclForService">DescribeWebAclForService</a></code> | <code>string</code> | [Read] apprunner:DescribeWebAclForService. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DisassociateCustomDomain">DisassociateCustomDomain</a></code> | <code>string</code> | [Write] apprunner:DisassociateCustomDomain. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.DisassociateWebAcl">DisassociateWebAcl</a></code> | <code>string</code> | [Write] apprunner:DisassociateWebAcl. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.ListAssociatedServicesForWebAcl">ListAssociatedServicesForWebAcl</a></code> | <code>string</code> | [List] apprunner:ListAssociatedServicesForWebAcl. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.ListAutoScalingConfigurations">ListAutoScalingConfigurations</a></code> | <code>string</code> | [List] apprunner:ListAutoScalingConfigurations. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] apprunner:ListConnections. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.ListObservabilityConfigurations">ListObservabilityConfigurations</a></code> | <code>string</code> | [List] apprunner:ListObservabilityConfigurations. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.ListOperations">ListOperations</a></code> | <code>string</code> | [List] apprunner:ListOperations. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.ListServices">ListServices</a></code> | <code>string</code> | [List] apprunner:ListServices. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.ListServicesForAutoScalingConfiguration">ListServicesForAutoScalingConfiguration</a></code> | <code>string</code> | [List] apprunner:ListServicesForAutoScalingConfiguration. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] apprunner:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.ListVpcConnectors">ListVpcConnectors</a></code> | <code>string</code> | [List] apprunner:ListVpcConnectors. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.ListVpcIngressConnections">ListVpcIngressConnections</a></code> | <code>string</code> | [List] apprunner:ListVpcIngressConnections. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.PauseService">PauseService</a></code> | <code>string</code> | [Write] apprunner:PauseService. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.ResumeService">ResumeService</a></code> | <code>string</code> | [Write] apprunner:ResumeService. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.StartDeployment">StartDeployment</a></code> | <code>string</code> | [Write] apprunner:StartDeployment. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] apprunner:TagResource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] apprunner:UntagResource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.UpdateDefaultAutoScalingConfiguration">UpdateDefaultAutoScalingConfiguration</a></code> | <code>string</code> | [Write] apprunner:UpdateDefaultAutoScalingConfiguration. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.UpdateService">UpdateService</a></code> | <code>string</code> | [Write] apprunner:UpdateService. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerActions.property.UpdateVpcIngressConnection">UpdateVpcIngressConnection</a></code> | <code>string</code> | [Write] apprunner:UpdateVpcIngressConnection. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateCustomDomain`<sup>Required</sup> <a name="AssociateCustomDomain" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.AssociateCustomDomain"></a>

```typescript
public readonly AssociateCustomDomain: string;
```

- *Type:* string

[Write] apprunner:AssociateCustomDomain.

---

##### `AssociateWebAcl`<sup>Required</sup> <a name="AssociateWebAcl" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.AssociateWebAcl"></a>

```typescript
public readonly AssociateWebAcl: string;
```

- *Type:* string

[Write] apprunner:AssociateWebAcl.

---

##### `CreateAutoScalingConfiguration`<sup>Required</sup> <a name="CreateAutoScalingConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateAutoScalingConfiguration"></a>

```typescript
public readonly CreateAutoScalingConfiguration: string;
```

- *Type:* string

[Write] apprunner:CreateAutoScalingConfiguration.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string;
```

- *Type:* string

[Write] apprunner:CreateConnection.

---

##### `CreateObservabilityConfiguration`<sup>Required</sup> <a name="CreateObservabilityConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateObservabilityConfiguration"></a>

```typescript
public readonly CreateObservabilityConfiguration: string;
```

- *Type:* string

[Write] apprunner:CreateObservabilityConfiguration.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateService"></a>

```typescript
public readonly CreateService: string;
```

- *Type:* string

[Write] apprunner:CreateService.

---

##### `CreateVpcConnector`<sup>Required</sup> <a name="CreateVpcConnector" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateVpcConnector"></a>

```typescript
public readonly CreateVpcConnector: string;
```

- *Type:* string

[Write] apprunner:CreateVpcConnector.

---

##### `CreateVpcIngressConnection`<sup>Required</sup> <a name="CreateVpcIngressConnection" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.CreateVpcIngressConnection"></a>

```typescript
public readonly CreateVpcIngressConnection: string;
```

- *Type:* string

[Write] apprunner:CreateVpcIngressConnection.

---

##### `DeleteAutoScalingConfiguration`<sup>Required</sup> <a name="DeleteAutoScalingConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteAutoScalingConfiguration"></a>

```typescript
public readonly DeleteAutoScalingConfiguration: string;
```

- *Type:* string

[Write] apprunner:DeleteAutoScalingConfiguration.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] apprunner:DeleteConnection.

---

##### `DeleteObservabilityConfiguration`<sup>Required</sup> <a name="DeleteObservabilityConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteObservabilityConfiguration"></a>

```typescript
public readonly DeleteObservabilityConfiguration: string;
```

- *Type:* string

[Write] apprunner:DeleteObservabilityConfiguration.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteService"></a>

```typescript
public readonly DeleteService: string;
```

- *Type:* string

[Write] apprunner:DeleteService.

---

##### `DeleteVpcConnector`<sup>Required</sup> <a name="DeleteVpcConnector" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteVpcConnector"></a>

```typescript
public readonly DeleteVpcConnector: string;
```

- *Type:* string

[Write] apprunner:DeleteVpcConnector.

---

##### `DeleteVpcIngressConnection`<sup>Required</sup> <a name="DeleteVpcIngressConnection" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DeleteVpcIngressConnection"></a>

```typescript
public readonly DeleteVpcIngressConnection: string;
```

- *Type:* string

[Write] apprunner:DeleteVpcIngressConnection.

---

##### `DescribeAutoScalingConfiguration`<sup>Required</sup> <a name="DescribeAutoScalingConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeAutoScalingConfiguration"></a>

```typescript
public readonly DescribeAutoScalingConfiguration: string;
```

- *Type:* string

[Read] apprunner:DescribeAutoScalingConfiguration.

---

##### `DescribeCustomDomains`<sup>Required</sup> <a name="DescribeCustomDomains" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeCustomDomains"></a>

```typescript
public readonly DescribeCustomDomains: string;
```

- *Type:* string

[Read] apprunner:DescribeCustomDomains.

---

##### `DescribeObservabilityConfiguration`<sup>Required</sup> <a name="DescribeObservabilityConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeObservabilityConfiguration"></a>

```typescript
public readonly DescribeObservabilityConfiguration: string;
```

- *Type:* string

[Read] apprunner:DescribeObservabilityConfiguration.

---

##### `DescribeOperation`<sup>Required</sup> <a name="DescribeOperation" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeOperation"></a>

```typescript
public readonly DescribeOperation: string;
```

- *Type:* string

[Read] apprunner:DescribeOperation.

---

##### `DescribeService`<sup>Required</sup> <a name="DescribeService" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeService"></a>

```typescript
public readonly DescribeService: string;
```

- *Type:* string

[Read] apprunner:DescribeService.

---

##### `DescribeVpcConnector`<sup>Required</sup> <a name="DescribeVpcConnector" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeVpcConnector"></a>

```typescript
public readonly DescribeVpcConnector: string;
```

- *Type:* string

[Read] apprunner:DescribeVpcConnector.

---

##### `DescribeVpcIngressConnection`<sup>Required</sup> <a name="DescribeVpcIngressConnection" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeVpcIngressConnection"></a>

```typescript
public readonly DescribeVpcIngressConnection: string;
```

- *Type:* string

[Read] apprunner:DescribeVpcIngressConnection.

---

##### `DescribeWebAclForService`<sup>Required</sup> <a name="DescribeWebAclForService" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DescribeWebAclForService"></a>

```typescript
public readonly DescribeWebAclForService: string;
```

- *Type:* string

[Read] apprunner:DescribeWebAclForService.

---

##### `DisassociateCustomDomain`<sup>Required</sup> <a name="DisassociateCustomDomain" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DisassociateCustomDomain"></a>

```typescript
public readonly DisassociateCustomDomain: string;
```

- *Type:* string

[Write] apprunner:DisassociateCustomDomain.

---

##### `DisassociateWebAcl`<sup>Required</sup> <a name="DisassociateWebAcl" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.DisassociateWebAcl"></a>

```typescript
public readonly DisassociateWebAcl: string;
```

- *Type:* string

[Write] apprunner:DisassociateWebAcl.

---

##### `ListAssociatedServicesForWebAcl`<sup>Required</sup> <a name="ListAssociatedServicesForWebAcl" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.ListAssociatedServicesForWebAcl"></a>

```typescript
public readonly ListAssociatedServicesForWebAcl: string;
```

- *Type:* string

[List] apprunner:ListAssociatedServicesForWebAcl.

---

##### `ListAutoScalingConfigurations`<sup>Required</sup> <a name="ListAutoScalingConfigurations" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.ListAutoScalingConfigurations"></a>

```typescript
public readonly ListAutoScalingConfigurations: string;
```

- *Type:* string

[List] apprunner:ListAutoScalingConfigurations.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] apprunner:ListConnections.

---

##### `ListObservabilityConfigurations`<sup>Required</sup> <a name="ListObservabilityConfigurations" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.ListObservabilityConfigurations"></a>

```typescript
public readonly ListObservabilityConfigurations: string;
```

- *Type:* string

[List] apprunner:ListObservabilityConfigurations.

---

##### `ListOperations`<sup>Required</sup> <a name="ListOperations" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.ListOperations"></a>

```typescript
public readonly ListOperations: string;
```

- *Type:* string

[List] apprunner:ListOperations.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[List] apprunner:ListServices.

---

##### `ListServicesForAutoScalingConfiguration`<sup>Required</sup> <a name="ListServicesForAutoScalingConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.ListServicesForAutoScalingConfiguration"></a>

```typescript
public readonly ListServicesForAutoScalingConfiguration: string;
```

- *Type:* string

[List] apprunner:ListServicesForAutoScalingConfiguration.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] apprunner:ListTagsForResource.

---

##### `ListVpcConnectors`<sup>Required</sup> <a name="ListVpcConnectors" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.ListVpcConnectors"></a>

```typescript
public readonly ListVpcConnectors: string;
```

- *Type:* string

[List] apprunner:ListVpcConnectors.

---

##### `ListVpcIngressConnections`<sup>Required</sup> <a name="ListVpcIngressConnections" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.ListVpcIngressConnections"></a>

```typescript
public readonly ListVpcIngressConnections: string;
```

- *Type:* string

[List] apprunner:ListVpcIngressConnections.

---

##### `PauseService`<sup>Required</sup> <a name="PauseService" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.PauseService"></a>

```typescript
public readonly PauseService: string;
```

- *Type:* string

[Write] apprunner:PauseService.

---

##### `ResumeService`<sup>Required</sup> <a name="ResumeService" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.ResumeService"></a>

```typescript
public readonly ResumeService: string;
```

- *Type:* string

[Write] apprunner:ResumeService.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDeployment`<sup>Required</sup> <a name="StartDeployment" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.StartDeployment"></a>

```typescript
public readonly StartDeployment: string;
```

- *Type:* string

[Write] apprunner:StartDeployment.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] apprunner:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] apprunner:UntagResource.

---

##### `UpdateDefaultAutoScalingConfiguration`<sup>Required</sup> <a name="UpdateDefaultAutoScalingConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.UpdateDefaultAutoScalingConfiguration"></a>

```typescript
public readonly UpdateDefaultAutoScalingConfiguration: string;
```

- *Type:* string

[Write] apprunner:UpdateDefaultAutoScalingConfiguration.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.UpdateService"></a>

```typescript
public readonly UpdateService: string;
```

- *Type:* string

[Write] apprunner:UpdateService.

---

##### `UpdateVpcIngressConnection`<sup>Required</sup> <a name="UpdateVpcIngressConnection" id="@cdk_utils/iam.apprunner.ApprunnerActions.property.UpdateVpcIngressConnection"></a>

```typescript
public readonly UpdateVpcIngressConnection: string;
```

- *Type:* string

[Write] apprunner:UpdateVpcIngressConnection.

---

### ApprunnerConditions <a name="ApprunnerConditions" id="@cdk_utils/iam.apprunner.ApprunnerConditions"></a>

Condition key constants and builders for apprunner.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apprunner.ApprunnerConditions.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

new apprunner.ApprunnerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.autoScalingConfigurationARN">autoScalingConfigurationARN</a></code> | Generates a condition block for `apprunner:AutoScalingConfigurationArn`. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.connectionARN">connectionARN</a></code> | Generates a condition block for `apprunner:ConnectionArn`. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.observabilityConfigurationARN">observabilityConfigurationARN</a></code> | Generates a condition block for `apprunner:ObservabilityConfigurationArn`. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.serviceARN">serviceARN</a></code> | Generates a condition block for `apprunner:ServiceArn`. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.vpcConnectorARN">vpcConnectorARN</a></code> | Generates a condition block for `apprunner:VpcConnectorArn`. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.vpcEndpointId">vpcEndpointId</a></code> | Generates a condition block for `apprunner:VpcEndpointId`. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.vpcId">vpcId</a></code> | Generates a condition block for `apprunner:VpcId`. |

---

##### `autoScalingConfigurationARN` <a name="autoScalingConfigurationARN" id="@cdk_utils/iam.apprunner.ApprunnerConditions.autoScalingConfigurationARN"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerConditions.autoScalingConfigurationARN(value: string)
```

Generates a condition block for `apprunner:AutoScalingConfigurationArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apprunner.ApprunnerConditions.autoScalingConfigurationARN.parameter.value"></a>

- *Type:* string

---

##### `connectionARN` <a name="connectionARN" id="@cdk_utils/iam.apprunner.ApprunnerConditions.connectionARN"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerConditions.connectionARN(value: string)
```

Generates a condition block for `apprunner:ConnectionArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apprunner.ApprunnerConditions.connectionARN.parameter.value"></a>

- *Type:* string

---

##### `observabilityConfigurationARN` <a name="observabilityConfigurationARN" id="@cdk_utils/iam.apprunner.ApprunnerConditions.observabilityConfigurationARN"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerConditions.observabilityConfigurationARN(value: string)
```

Generates a condition block for `apprunner:ObservabilityConfigurationArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apprunner.ApprunnerConditions.observabilityConfigurationARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.apprunner.ApprunnerConditions.requestTag"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apprunner.ApprunnerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.apprunner.ApprunnerConditions.resourceTag"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apprunner.ApprunnerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `serviceARN` <a name="serviceARN" id="@cdk_utils/iam.apprunner.ApprunnerConditions.serviceARN"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerConditions.serviceARN(value: string)
```

Generates a condition block for `apprunner:ServiceArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apprunner.ApprunnerConditions.serviceARN.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.apprunner.ApprunnerConditions.tagKeys"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.apprunner.ApprunnerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `vpcConnectorARN` <a name="vpcConnectorARN" id="@cdk_utils/iam.apprunner.ApprunnerConditions.vpcConnectorARN"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerConditions.vpcConnectorARN(value: string)
```

Generates a condition block for `apprunner:VpcConnectorArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apprunner.ApprunnerConditions.vpcConnectorARN.parameter.value"></a>

- *Type:* string

---

##### `vpcEndpointId` <a name="vpcEndpointId" id="@cdk_utils/iam.apprunner.ApprunnerConditions.vpcEndpointId"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerConditions.vpcEndpointId(value: string)
```

Generates a condition block for `apprunner:VpcEndpointId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apprunner.ApprunnerConditions.vpcEndpointId.parameter.value"></a>

- *Type:* string

---

##### `vpcId` <a name="vpcId" id="@cdk_utils/iam.apprunner.ApprunnerConditions.vpcId"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerConditions.vpcId(value: string)
```

Generates a condition block for `apprunner:VpcId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.apprunner.ApprunnerConditions.vpcId.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.AUTO_SCALING_CONFIGURATION_ARN">AUTO_SCALING_CONFIGURATION_ARN</a></code> | <code>string</code> | Condition key: apprunner:AutoScalingConfigurationArn (ARN). |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.CONNECTION_ARN">CONNECTION_ARN</a></code> | <code>string</code> | Condition key: apprunner:ConnectionArn (ARN). |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateAutoScalingConfigurationConditionKeys">CreateAutoScalingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAutoScalingConfiguration action. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateConnectionConditionKeys">CreateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnection action. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateObservabilityConfigurationConditionKeys">CreateObservabilityConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateObservabilityConfiguration action. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateServiceConditionKeys">CreateServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateService action. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateVpcConnectorConditionKeys">CreateVpcConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVpcConnector action. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateVpcIngressConnectionConditionKeys">CreateVpcIngressConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVpcIngressConnection action. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.OBSERVABILITY_CONFIGURATION_ARN">OBSERVABILITY_CONFIGURATION_ARN</a></code> | <code>string</code> | Condition key: apprunner:ObservabilityConfigurationArn (ARN). |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.SERVICE_ARN">SERVICE_ARN</a></code> | <code>string</code> | Condition key: apprunner:ServiceArn (ARN). |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.UpdateServiceConditionKeys">UpdateServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateService action. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.UpdateVpcIngressConnectionConditionKeys">UpdateVpcIngressConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateVpcIngressConnection action. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.VPC_CONNECTOR_ARN">VPC_CONNECTOR_ARN</a></code> | <code>string</code> | Condition key: apprunner:VpcConnectorArn (ARN). |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.VPC_ENDPOINT_ID">VPC_ENDPOINT_ID</a></code> | <code>string</code> | Condition key: apprunner:VpcEndpointId (String). |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerConditions.property.VPC_ID">VPC_ID</a></code> | <code>string</code> | Condition key: apprunner:VpcId (String). |

---

##### `AUTO_SCALING_CONFIGURATION_ARN`<sup>Required</sup> <a name="AUTO_SCALING_CONFIGURATION_ARN" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.AUTO_SCALING_CONFIGURATION_ARN"></a>

```typescript
public readonly AUTO_SCALING_CONFIGURATION_ARN: string;
```

- *Type:* string

Condition key: apprunner:AutoScalingConfigurationArn (ARN).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CONNECTION_ARN`<sup>Required</sup> <a name="CONNECTION_ARN" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.CONNECTION_ARN"></a>

```typescript
public readonly CONNECTION_ARN: string;
```

- *Type:* string

Condition key: apprunner:ConnectionArn (ARN).

---

##### `CreateAutoScalingConfigurationConditionKeys`<sup>Required</sup> <a name="CreateAutoScalingConfigurationConditionKeys" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateAutoScalingConfigurationConditionKeys"></a>

```typescript
public readonly CreateAutoScalingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAutoScalingConfiguration action.

---

##### `CreateConnectionConditionKeys`<sup>Required</sup> <a name="CreateConnectionConditionKeys" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateConnectionConditionKeys"></a>

```typescript
public readonly CreateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnection action.

---

##### `CreateObservabilityConfigurationConditionKeys`<sup>Required</sup> <a name="CreateObservabilityConfigurationConditionKeys" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateObservabilityConfigurationConditionKeys"></a>

```typescript
public readonly CreateObservabilityConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateObservabilityConfiguration action.

---

##### `CreateServiceConditionKeys`<sup>Required</sup> <a name="CreateServiceConditionKeys" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateServiceConditionKeys"></a>

```typescript
public readonly CreateServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateService action.

---

##### `CreateVpcConnectorConditionKeys`<sup>Required</sup> <a name="CreateVpcConnectorConditionKeys" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateVpcConnectorConditionKeys"></a>

```typescript
public readonly CreateVpcConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVpcConnector action.

---

##### `CreateVpcIngressConnectionConditionKeys`<sup>Required</sup> <a name="CreateVpcIngressConnectionConditionKeys" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.CreateVpcIngressConnectionConditionKeys"></a>

```typescript
public readonly CreateVpcIngressConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVpcIngressConnection action.

---

##### `OBSERVABILITY_CONFIGURATION_ARN`<sup>Required</sup> <a name="OBSERVABILITY_CONFIGURATION_ARN" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.OBSERVABILITY_CONFIGURATION_ARN"></a>

```typescript
public readonly OBSERVABILITY_CONFIGURATION_ARN: string;
```

- *Type:* string

Condition key: apprunner:ObservabilityConfigurationArn (ARN).

---

##### `SERVICE_ARN`<sup>Required</sup> <a name="SERVICE_ARN" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.SERVICE_ARN"></a>

```typescript
public readonly SERVICE_ARN: string;
```

- *Type:* string

Condition key: apprunner:ServiceArn (ARN).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateServiceConditionKeys`<sup>Required</sup> <a name="UpdateServiceConditionKeys" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.UpdateServiceConditionKeys"></a>

```typescript
public readonly UpdateServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateService action.

---

##### `UpdateVpcIngressConnectionConditionKeys`<sup>Required</sup> <a name="UpdateVpcIngressConnectionConditionKeys" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.UpdateVpcIngressConnectionConditionKeys"></a>

```typescript
public readonly UpdateVpcIngressConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateVpcIngressConnection action.

---

##### `VPC_CONNECTOR_ARN`<sup>Required</sup> <a name="VPC_CONNECTOR_ARN" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.VPC_CONNECTOR_ARN"></a>

```typescript
public readonly VPC_CONNECTOR_ARN: string;
```

- *Type:* string

Condition key: apprunner:VpcConnectorArn (ARN).

---

##### `VPC_ENDPOINT_ID`<sup>Required</sup> <a name="VPC_ENDPOINT_ID" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.VPC_ENDPOINT_ID"></a>

```typescript
public readonly VPC_ENDPOINT_ID: string;
```

- *Type:* string

Condition key: apprunner:VpcEndpointId (String).

---

##### `VPC_ID`<sup>Required</sup> <a name="VPC_ID" id="@cdk_utils/iam.apprunner.ApprunnerConditions.property.VPC_ID"></a>

```typescript
public readonly VPC_ID: string;
```

- *Type:* string

Condition key: apprunner:VpcId (String).

---

### ApprunnerOperations <a name="ApprunnerOperations" id="@cdk_utils/iam.apprunner.ApprunnerOperations"></a>

API operation to required IAM actions mapping for apprunner.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apprunner.ApprunnerOperations.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

new apprunner.ApprunnerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.AssociateCustomDomain">AssociateCustomDomain</a></code> | <code>string[]</code> | IAM actions required for the AssociateCustomDomain API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateAutoScalingConfiguration">CreateAutoScalingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateAutoScalingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateConnection">CreateConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateConnection API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateObservabilityConfiguration">CreateObservabilityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateObservabilityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateService">CreateService</a></code> | <code>string[]</code> | IAM actions required for the CreateService API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateVpcConnector">CreateVpcConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcConnector API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateVpcIngressConnection">CreateVpcIngressConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcIngressConnection API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteAutoScalingConfiguration">DeleteAutoScalingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteAutoScalingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteObservabilityConfiguration">DeleteObservabilityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteObservabilityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteService">DeleteService</a></code> | <code>string[]</code> | IAM actions required for the DeleteService API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteVpcConnector">DeleteVpcConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteVpcConnector API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteVpcIngressConnection">DeleteVpcIngressConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteVpcIngressConnection API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeAutoScalingConfiguration">DescribeAutoScalingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeAutoScalingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeCustomDomains">DescribeCustomDomains</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomDomains API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeObservabilityConfiguration">DescribeObservabilityConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeObservabilityConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeService">DescribeService</a></code> | <code>string[]</code> | IAM actions required for the DescribeService API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeVpcConnector">DescribeVpcConnector</a></code> | <code>string[]</code> | IAM actions required for the DescribeVpcConnector API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeVpcIngressConnection">DescribeVpcIngressConnection</a></code> | <code>string[]</code> | IAM actions required for the DescribeVpcIngressConnection API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.DisassociateCustomDomain">DisassociateCustomDomain</a></code> | <code>string[]</code> | IAM actions required for the DisassociateCustomDomain API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListAutoScalingConfigurations">ListAutoScalingConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListAutoScalingConfigurations API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListConnections">ListConnections</a></code> | <code>string[]</code> | IAM actions required for the ListConnections API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListObservabilityConfigurations">ListObservabilityConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListObservabilityConfigurations API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListOperations">ListOperations</a></code> | <code>string[]</code> | IAM actions required for the ListOperations API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListServices">ListServices</a></code> | <code>string[]</code> | IAM actions required for the ListServices API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListServicesForAutoScalingConfiguration">ListServicesForAutoScalingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ListServicesForAutoScalingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListVpcConnectors">ListVpcConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListVpcConnectors API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListVpcIngressConnections">ListVpcIngressConnections</a></code> | <code>string[]</code> | IAM actions required for the ListVpcIngressConnections API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.PauseService">PauseService</a></code> | <code>string[]</code> | IAM actions required for the PauseService API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.ResumeService">ResumeService</a></code> | <code>string[]</code> | IAM actions required for the ResumeService API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.StartDeployment">StartDeployment</a></code> | <code>string[]</code> | IAM actions required for the StartDeployment API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.UpdateDefaultAutoScalingConfiguration">UpdateDefaultAutoScalingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateDefaultAutoScalingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.UpdateService">UpdateService</a></code> | <code>string[]</code> | IAM actions required for the UpdateService API call. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerOperations.property.UpdateVpcIngressConnection">UpdateVpcIngressConnection</a></code> | <code>string[]</code> | IAM actions required for the UpdateVpcIngressConnection API call. |

---

##### `AssociateCustomDomain`<sup>Required</sup> <a name="AssociateCustomDomain" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.AssociateCustomDomain"></a>

```typescript
public readonly AssociateCustomDomain: string[];
```

- *Type:* string[]

IAM actions required for the AssociateCustomDomain API call.

---

##### `CreateAutoScalingConfiguration`<sup>Required</sup> <a name="CreateAutoScalingConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateAutoScalingConfiguration"></a>

```typescript
public readonly CreateAutoScalingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutoScalingConfiguration API call.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnection API call.

---

##### `CreateObservabilityConfiguration`<sup>Required</sup> <a name="CreateObservabilityConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateObservabilityConfiguration"></a>

```typescript
public readonly CreateObservabilityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateObservabilityConfiguration API call.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateService"></a>

```typescript
public readonly CreateService: string[];
```

- *Type:* string[]

IAM actions required for the CreateService API call.

---

##### `CreateVpcConnector`<sup>Required</sup> <a name="CreateVpcConnector" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateVpcConnector"></a>

```typescript
public readonly CreateVpcConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcConnector API call.

---

##### `CreateVpcIngressConnection`<sup>Required</sup> <a name="CreateVpcIngressConnection" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.CreateVpcIngressConnection"></a>

```typescript
public readonly CreateVpcIngressConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcIngressConnection API call.

---

##### `DeleteAutoScalingConfiguration`<sup>Required</sup> <a name="DeleteAutoScalingConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteAutoScalingConfiguration"></a>

```typescript
public readonly DeleteAutoScalingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAutoScalingConfiguration API call.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `DeleteObservabilityConfiguration`<sup>Required</sup> <a name="DeleteObservabilityConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteObservabilityConfiguration"></a>

```typescript
public readonly DeleteObservabilityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteObservabilityConfiguration API call.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteService"></a>

```typescript
public readonly DeleteService: string[];
```

- *Type:* string[]

IAM actions required for the DeleteService API call.

---

##### `DeleteVpcConnector`<sup>Required</sup> <a name="DeleteVpcConnector" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteVpcConnector"></a>

```typescript
public readonly DeleteVpcConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVpcConnector API call.

---

##### `DeleteVpcIngressConnection`<sup>Required</sup> <a name="DeleteVpcIngressConnection" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DeleteVpcIngressConnection"></a>

```typescript
public readonly DeleteVpcIngressConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVpcIngressConnection API call.

---

##### `DescribeAutoScalingConfiguration`<sup>Required</sup> <a name="DescribeAutoScalingConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeAutoScalingConfiguration"></a>

```typescript
public readonly DescribeAutoScalingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAutoScalingConfiguration API call.

---

##### `DescribeCustomDomains`<sup>Required</sup> <a name="DescribeCustomDomains" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeCustomDomains"></a>

```typescript
public readonly DescribeCustomDomains: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomDomains API call.

---

##### `DescribeObservabilityConfiguration`<sup>Required</sup> <a name="DescribeObservabilityConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeObservabilityConfiguration"></a>

```typescript
public readonly DescribeObservabilityConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeObservabilityConfiguration API call.

---

##### `DescribeService`<sup>Required</sup> <a name="DescribeService" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeService"></a>

```typescript
public readonly DescribeService: string[];
```

- *Type:* string[]

IAM actions required for the DescribeService API call.

---

##### `DescribeVpcConnector`<sup>Required</sup> <a name="DescribeVpcConnector" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeVpcConnector"></a>

```typescript
public readonly DescribeVpcConnector: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVpcConnector API call.

---

##### `DescribeVpcIngressConnection`<sup>Required</sup> <a name="DescribeVpcIngressConnection" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DescribeVpcIngressConnection"></a>

```typescript
public readonly DescribeVpcIngressConnection: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVpcIngressConnection API call.

---

##### `DisassociateCustomDomain`<sup>Required</sup> <a name="DisassociateCustomDomain" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.DisassociateCustomDomain"></a>

```typescript
public readonly DisassociateCustomDomain: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateCustomDomain API call.

---

##### `ListAutoScalingConfigurations`<sup>Required</sup> <a name="ListAutoScalingConfigurations" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListAutoScalingConfigurations"></a>

```typescript
public readonly ListAutoScalingConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListAutoScalingConfigurations API call.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListConnections"></a>

```typescript
public readonly ListConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListConnections API call.

---

##### `ListObservabilityConfigurations`<sup>Required</sup> <a name="ListObservabilityConfigurations" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListObservabilityConfigurations"></a>

```typescript
public readonly ListObservabilityConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListObservabilityConfigurations API call.

---

##### `ListOperations`<sup>Required</sup> <a name="ListOperations" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListOperations"></a>

```typescript
public readonly ListOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListOperations API call.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListServices"></a>

```typescript
public readonly ListServices: string[];
```

- *Type:* string[]

IAM actions required for the ListServices API call.

---

##### `ListServicesForAutoScalingConfiguration`<sup>Required</sup> <a name="ListServicesForAutoScalingConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListServicesForAutoScalingConfiguration"></a>

```typescript
public readonly ListServicesForAutoScalingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ListServicesForAutoScalingConfiguration API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVpcConnectors`<sup>Required</sup> <a name="ListVpcConnectors" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListVpcConnectors"></a>

```typescript
public readonly ListVpcConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcConnectors API call.

---

##### `ListVpcIngressConnections`<sup>Required</sup> <a name="ListVpcIngressConnections" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.ListVpcIngressConnections"></a>

```typescript
public readonly ListVpcIngressConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcIngressConnections API call.

---

##### `PauseService`<sup>Required</sup> <a name="PauseService" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.PauseService"></a>

```typescript
public readonly PauseService: string[];
```

- *Type:* string[]

IAM actions required for the PauseService API call.

---

##### `ResumeService`<sup>Required</sup> <a name="ResumeService" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.ResumeService"></a>

```typescript
public readonly ResumeService: string[];
```

- *Type:* string[]

IAM actions required for the ResumeService API call.

---

##### `StartDeployment`<sup>Required</sup> <a name="StartDeployment" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.StartDeployment"></a>

```typescript
public readonly StartDeployment: string[];
```

- *Type:* string[]

IAM actions required for the StartDeployment API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDefaultAutoScalingConfiguration`<sup>Required</sup> <a name="UpdateDefaultAutoScalingConfiguration" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.UpdateDefaultAutoScalingConfiguration"></a>

```typescript
public readonly UpdateDefaultAutoScalingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDefaultAutoScalingConfiguration API call.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.UpdateService"></a>

```typescript
public readonly UpdateService: string[];
```

- *Type:* string[]

IAM actions required for the UpdateService API call.

---

##### `UpdateVpcIngressConnection`<sup>Required</sup> <a name="UpdateVpcIngressConnection" id="@cdk_utils/iam.apprunner.ApprunnerOperations.property.UpdateVpcIngressConnection"></a>

```typescript
public readonly UpdateVpcIngressConnection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVpcIngressConnection API call.

---

### ApprunnerResources <a name="ApprunnerResources" id="@cdk_utils/iam.apprunner.ApprunnerResources"></a>

ARN builders, validators, and parsers for apprunner resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.apprunner.ApprunnerResources.Initializer"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

new apprunner.ApprunnerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.autoscalingconfiguration">autoscalingconfiguration</a></code> | Builds an ARN for the autoscalingconfiguration resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.connection">connection</a></code> | Builds an ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.isValidAutoscalingconfigurationArn">isValidAutoscalingconfigurationArn</a></code> | Validates whether a string is a valid ARN for the autoscalingconfiguration resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.isValidConnectionArn">isValidConnectionArn</a></code> | Validates whether a string is a valid ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.isValidObservabilityconfigurationArn">isValidObservabilityconfigurationArn</a></code> | Validates whether a string is a valid ARN for the observabilityconfiguration resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.isValidServiceArn">isValidServiceArn</a></code> | Validates whether a string is a valid ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.isValidVpcconnectorArn">isValidVpcconnectorArn</a></code> | Validates whether a string is a valid ARN for the vpcconnector resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.isValidVpcingressconnectionArn">isValidVpcingressconnectionArn</a></code> | Validates whether a string is a valid ARN for the vpcingressconnection resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.isValidWebaclArn">isValidWebaclArn</a></code> | Validates whether a string is a valid ARN for the webacl resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.observabilityconfiguration">observabilityconfiguration</a></code> | Builds an ARN for the observabilityconfiguration resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.parseAutoscalingconfigurationArn">parseAutoscalingconfigurationArn</a></code> | Parses a autoscalingconfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.parseConnectionArn">parseConnectionArn</a></code> | Parses a connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.parseObservabilityconfigurationArn">parseObservabilityconfigurationArn</a></code> | Parses a observabilityconfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.parseServiceArn">parseServiceArn</a></code> | Parses a service ARN into its components. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.parseVpcconnectorArn">parseVpcconnectorArn</a></code> | Parses a vpcconnector ARN into its components. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.parseVpcingressconnectionArn">parseVpcingressconnectionArn</a></code> | Parses a vpcingressconnection ARN into its components. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.parseWebaclArn">parseWebaclArn</a></code> | Parses a webacl ARN into its components. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.service">service</a></code> | Builds an ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.vpcconnector">vpcconnector</a></code> | Builds an ARN for the vpcconnector resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.vpcingressconnection">vpcingressconnection</a></code> | Builds an ARN for the vpcingressconnection resource. |
| <code><a href="#@cdk_utils/iam.apprunner.ApprunnerResources.webacl">webacl</a></code> | Builds an ARN for the webacl resource. |

---

##### `autoscalingconfiguration` <a name="autoscalingconfiguration" id="@cdk_utils/iam.apprunner.ApprunnerResources.autoscalingconfiguration"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.autoscalingconfiguration(props: ApprunnerAutoscalingconfigurationArnProps)
```

Builds an ARN for the autoscalingconfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apprunner.ApprunnerResources.autoscalingconfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apprunner.ApprunnerAutoscalingconfigurationArnProps">ApprunnerAutoscalingconfigurationArnProps</a>

---

##### `connection` <a name="connection" id="@cdk_utils/iam.apprunner.ApprunnerResources.connection"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.connection(props: ApprunnerConnectionArnProps)
```

Builds an ARN for the connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apprunner.ApprunnerResources.connection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apprunner.ApprunnerConnectionArnProps">ApprunnerConnectionArnProps</a>

---

##### `isValidAutoscalingconfigurationArn` <a name="isValidAutoscalingconfigurationArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidAutoscalingconfigurationArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.isValidAutoscalingconfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the autoscalingconfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidAutoscalingconfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionArn` <a name="isValidConnectionArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidConnectionArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.isValidConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidObservabilityconfigurationArn` <a name="isValidObservabilityconfigurationArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidObservabilityconfigurationArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.isValidObservabilityconfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the observabilityconfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidObservabilityconfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceArn` <a name="isValidServiceArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidServiceArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.isValidServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVpcconnectorArn` <a name="isValidVpcconnectorArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidVpcconnectorArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.isValidVpcconnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the vpcconnector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidVpcconnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVpcingressconnectionArn` <a name="isValidVpcingressconnectionArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidVpcingressconnectionArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.isValidVpcingressconnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the vpcingressconnection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidVpcingressconnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWebaclArn` <a name="isValidWebaclArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidWebaclArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.isValidWebaclArn(arn: string)
```

Validates whether a string is a valid ARN for the webacl resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.isValidWebaclArn.parameter.arn"></a>

- *Type:* string

---

##### `observabilityconfiguration` <a name="observabilityconfiguration" id="@cdk_utils/iam.apprunner.ApprunnerResources.observabilityconfiguration"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.observabilityconfiguration(props: ApprunnerObservabilityconfigurationArnProps)
```

Builds an ARN for the observabilityconfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apprunner.ApprunnerResources.observabilityconfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apprunner.ApprunnerObservabilityconfigurationArnProps">ApprunnerObservabilityconfigurationArnProps</a>

---

##### `parseAutoscalingconfigurationArn` <a name="parseAutoscalingconfigurationArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseAutoscalingconfigurationArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.parseAutoscalingconfigurationArn(arn: string)
```

Parses a autoscalingconfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseAutoscalingconfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionArn` <a name="parseConnectionArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseConnectionArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.parseConnectionArn(arn: string)
```

Parses a connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseObservabilityconfigurationArn` <a name="parseObservabilityconfigurationArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseObservabilityconfigurationArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.parseObservabilityconfigurationArn(arn: string)
```

Parses a observabilityconfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseObservabilityconfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceArn` <a name="parseServiceArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseServiceArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.parseServiceArn(arn: string)
```

Parses a service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVpcconnectorArn` <a name="parseVpcconnectorArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseVpcconnectorArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.parseVpcconnectorArn(arn: string)
```

Parses a vpcconnector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseVpcconnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVpcingressconnectionArn` <a name="parseVpcingressconnectionArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseVpcingressconnectionArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.parseVpcingressconnectionArn(arn: string)
```

Parses a vpcingressconnection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseVpcingressconnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWebaclArn` <a name="parseWebaclArn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseWebaclArn"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.parseWebaclArn(arn: string)
```

Parses a webacl ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.apprunner.ApprunnerResources.parseWebaclArn.parameter.arn"></a>

- *Type:* string

---

##### `service` <a name="service" id="@cdk_utils/iam.apprunner.ApprunnerResources.service"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.service(props: ApprunnerServiceArnProps)
```

Builds an ARN for the service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apprunner.ApprunnerResources.service.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apprunner.ApprunnerServiceArnProps">ApprunnerServiceArnProps</a>

---

##### `vpcconnector` <a name="vpcconnector" id="@cdk_utils/iam.apprunner.ApprunnerResources.vpcconnector"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.vpcconnector(props: ApprunnerVpcconnectorArnProps)
```

Builds an ARN for the vpcconnector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apprunner.ApprunnerResources.vpcconnector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apprunner.ApprunnerVpcconnectorArnProps">ApprunnerVpcconnectorArnProps</a>

---

##### `vpcingressconnection` <a name="vpcingressconnection" id="@cdk_utils/iam.apprunner.ApprunnerResources.vpcingressconnection"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.vpcingressconnection(props: ApprunnerVpcingressconnectionArnProps)
```

Builds an ARN for the vpcingressconnection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apprunner.ApprunnerResources.vpcingressconnection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apprunner.ApprunnerVpcingressconnectionArnProps">ApprunnerVpcingressconnectionArnProps</a>

---

##### `webacl` <a name="webacl" id="@cdk_utils/iam.apprunner.ApprunnerResources.webacl"></a>

```typescript
import { apprunner } from '@cdk_utils/iam'

apprunner.ApprunnerResources.webacl(props: ApprunnerWebaclArnProps)
```

Builds an ARN for the webacl resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.apprunner.ApprunnerResources.webacl.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.apprunner.ApprunnerWebaclArnProps">ApprunnerWebaclArnProps</a>

---




