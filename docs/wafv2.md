# `wafv2` Submodule <a name="`wafv2` Submodule" id="@cdk_utils/iam.wafv2"></a>


## Structs <a name="Structs" id="Structs"></a>

### Wafv2AgentcoreGatewayArnComponents <a name="Wafv2AgentcoreGatewayArnComponents" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnComponents"></a>

Parsed components of a agentcore-gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2AgentcoreGatewayArnComponents: wafv2.Wafv2AgentcoreGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Wafv2AgentcoreGatewayArnProps <a name="Wafv2AgentcoreGatewayArnProps" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnProps"></a>

Properties for building a agentcore-gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2AgentcoreGatewayArnProps: wafv2.Wafv2AgentcoreGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2AmplifyAppArnComponents <a name="Wafv2AmplifyAppArnComponents" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnComponents"></a>

Parsed components of a amplify-app ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2AmplifyAppArnComponents: wafv2.Wafv2AmplifyAppArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Wafv2AmplifyAppArnProps <a name="Wafv2AmplifyAppArnProps" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnProps"></a>

Properties for building a amplify-app ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2AmplifyAppArnProps: wafv2.Wafv2AmplifyAppArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2ApigatewayArnComponents <a name="Wafv2ApigatewayArnComponents" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents"></a>

Parsed components of a apigateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2ApigatewayArnComponents: wafv2.Wafv2ApigatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents.property.stageName">stageName</a></code> | <code>string</code> | The StageName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnComponents.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component.

---

### Wafv2ApigatewayArnProps <a name="Wafv2ApigatewayArnProps" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps"></a>

Properties for building a apigateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2ApigatewayArnProps: wafv2.Wafv2ApigatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps.property.stageName">stageName</a></code> | <code>string</code> | The StageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The StageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2ApprunnerArnComponents <a name="Wafv2ApprunnerArnComponents" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents"></a>

Parsed components of a apprunner ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2ApprunnerArnComponents: wafv2.Wafv2ApprunnerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnComponents.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component.

---

### Wafv2ApprunnerArnProps <a name="Wafv2ApprunnerArnProps" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps"></a>

Properties for building a apprunner ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2ApprunnerArnProps: wafv2.Wafv2ApprunnerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component of the ARN.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2AppsyncArnComponents <a name="Wafv2AppsyncArnComponents" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnComponents"></a>

Parsed components of a appsync ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2AppsyncArnComponents: wafv2.Wafv2AppsyncArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AppsyncArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AppsyncArnComponents.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AppsyncArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AppsyncArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnComponents.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Wafv2AppsyncArnProps <a name="Wafv2AppsyncArnProps" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnProps"></a>

Properties for building a appsync ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2AppsyncArnProps: wafv2.Wafv2AppsyncArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AppsyncArnProps.property.graphQlapiId">graphQlapiId</a></code> | <code>string</code> | The GraphQLAPIId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AppsyncArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AppsyncArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2AppsyncArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `graphQlapiId`<sup>Required</sup> <a name="graphQlapiId" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnProps.property.graphQlapiId"></a>

```typescript
public readonly graphQlapiId: string;
```

- *Type:* string

The GraphQLAPIId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2AppsyncArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2IpsetArnComponents <a name="Wafv2IpsetArnComponents" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents"></a>

Parsed components of a ipset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2IpsetArnComponents: wafv2.Wafv2IpsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.scope">scope</a></code> | <code>string</code> | The Scope component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnComponents.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component.

---

### Wafv2IpsetArnProps <a name="Wafv2IpsetArnProps" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnProps"></a>

Properties for building a ipset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2IpsetArnProps: wafv2.Wafv2IpsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.scope">scope</a></code> | <code>string</code> | The Scope component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2IpsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2LoadbalancerAppArnComponents <a name="Wafv2LoadbalancerAppArnComponents" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents"></a>

Parsed components of a loadbalancer/app/ ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2LoadbalancerAppArnComponents: wafv2.Wafv2LoadbalancerAppArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Wafv2LoadbalancerAppArnProps <a name="Wafv2LoadbalancerAppArnProps" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps"></a>

Properties for building a loadbalancer/app/ ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2LoadbalancerAppArnProps: wafv2.Wafv2LoadbalancerAppArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2ManagedrulesetArnComponents <a name="Wafv2ManagedrulesetArnComponents" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents"></a>

Parsed components of a managedruleset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2ManagedrulesetArnComponents: wafv2.Wafv2ManagedrulesetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.scope">scope</a></code> | <code>string</code> | The Scope component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnComponents.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component.

---

### Wafv2ManagedrulesetArnProps <a name="Wafv2ManagedrulesetArnProps" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps"></a>

Properties for building a managedruleset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2ManagedrulesetArnProps: wafv2.Wafv2ManagedrulesetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.scope">scope</a></code> | <code>string</code> | The Scope component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2RegexpatternsetArnComponents <a name="Wafv2RegexpatternsetArnComponents" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents"></a>

Parsed components of a regexpatternset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2RegexpatternsetArnComponents: wafv2.Wafv2RegexpatternsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.scope">scope</a></code> | <code>string</code> | The Scope component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnComponents.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component.

---

### Wafv2RegexpatternsetArnProps <a name="Wafv2RegexpatternsetArnProps" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps"></a>

Properties for building a regexpatternset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2RegexpatternsetArnProps: wafv2.Wafv2RegexpatternsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.scope">scope</a></code> | <code>string</code> | The Scope component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2RulegroupArnComponents <a name="Wafv2RulegroupArnComponents" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents"></a>

Parsed components of a rulegroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2RulegroupArnComponents: wafv2.Wafv2RulegroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.scope">scope</a></code> | <code>string</code> | The Scope component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnComponents.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component.

---

### Wafv2RulegroupArnProps <a name="Wafv2RulegroupArnProps" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps"></a>

Properties for building a rulegroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2RulegroupArnProps: wafv2.Wafv2RulegroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.scope">scope</a></code> | <code>string</code> | The Scope component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2UserpoolArnComponents <a name="Wafv2UserpoolArnComponents" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnComponents"></a>

Parsed components of a userpool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2UserpoolArnComponents: wafv2.Wafv2UserpoolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2UserpoolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2UserpoolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2UserpoolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2UserpoolArnComponents.property.userPoolId">userPoolId</a></code> | <code>string</code> | The UserPoolId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnComponents.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The UserPoolId component.

---

### Wafv2UserpoolArnProps <a name="Wafv2UserpoolArnProps" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnProps"></a>

Properties for building a userpool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2UserpoolArnProps: wafv2.Wafv2UserpoolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2UserpoolArnProps.property.userPoolId">userPoolId</a></code> | <code>string</code> | The UserPoolId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2UserpoolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2UserpoolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2UserpoolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnProps.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The UserPoolId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2UserpoolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2VerifiedAccessInstanceArnComponents <a name="Wafv2VerifiedAccessInstanceArnComponents" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnComponents"></a>

Parsed components of a verified-access-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2VerifiedAccessInstanceArnComponents: wafv2.Wafv2VerifiedAccessInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnComponents.property.verifiedAccessInstanceId">verifiedAccessInstanceId</a></code> | <code>string</code> | The VerifiedAccessInstanceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `verifiedAccessInstanceId`<sup>Required</sup> <a name="verifiedAccessInstanceId" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnComponents.property.verifiedAccessInstanceId"></a>

```typescript
public readonly verifiedAccessInstanceId: string;
```

- *Type:* string

The VerifiedAccessInstanceId component.

---

### Wafv2VerifiedAccessInstanceArnProps <a name="Wafv2VerifiedAccessInstanceArnProps" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnProps"></a>

Properties for building a verified-access-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2VerifiedAccessInstanceArnProps: wafv2.Wafv2VerifiedAccessInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnProps.property.verifiedAccessInstanceId">verifiedAccessInstanceId</a></code> | <code>string</code> | The VerifiedAccessInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `verifiedAccessInstanceId`<sup>Required</sup> <a name="verifiedAccessInstanceId" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnProps.property.verifiedAccessInstanceId"></a>

```typescript
public readonly verifiedAccessInstanceId: string;
```

- *Type:* string

The VerifiedAccessInstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Wafv2WebaclArnComponents <a name="Wafv2WebaclArnComponents" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents"></a>

Parsed components of a webacl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2WebaclArnComponents: wafv2.Wafv2WebaclArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.scope">scope</a></code> | <code>string</code> | The Scope component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnComponents.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component.

---

### Wafv2WebaclArnProps <a name="Wafv2WebaclArnProps" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnProps"></a>

Properties for building a webacl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

const wafv2WebaclArnProps: wafv2.Wafv2WebaclArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.scope">scope</a></code> | <code>string</code> | The Scope component of the ARN. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wafv2.Wafv2WebaclArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2Actions <a name="Wafv2Actions" id="@cdk_utils/iam.wafv2.Wafv2Actions"></a>

IAM action constants for the wafv2 service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wafv2.Wafv2Actions.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

new wafv2.Wafv2Actions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetDecryptedAPIKey">actionGetDecryptedAPIKey</a></code> | <code>string</code> | [Read] wafv2:GetDecryptedAPIKey. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetIPSet">actionGetIPSet</a></code> | <code>string</code> | [Read] wafv2:GetIPSet. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetLoggingConfiguration">actionGetLoggingConfiguration</a></code> | <code>string</code> | [Read] wafv2:GetLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetManagedRuleSet">actionGetManagedRuleSet</a></code> | <code>string</code> | [Read] wafv2:GetManagedRuleSet. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetMobileSdkRelease">actionGetMobileSdkRelease</a></code> | <code>string</code> | [Read] wafv2:GetMobileSdkRelease. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetPermissionPolicy">actionGetPermissionPolicy</a></code> | <code>string</code> | [Read] wafv2:GetPermissionPolicy. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRateBasedStatementManagedKeys">actionGetRateBasedStatementManagedKeys</a></code> | <code>string</code> | [Read] wafv2:GetRateBasedStatementManagedKeys. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRegexPatternSet">actionGetRegexPatternSet</a></code> | <code>string</code> | [Read] wafv2:GetRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRevenueStatistics">actionGetRevenueStatistics</a></code> | <code>string</code> | [Read] wafv2:GetRevenueStatistics. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRevenueStatisticsSummary">actionGetRevenueStatisticsSummary</a></code> | <code>string</code> | [Read] wafv2:GetRevenueStatisticsSummary. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRevenueStatisticsTimeSeries">actionGetRevenueStatisticsTimeSeries</a></code> | <code>string</code> | [Read] wafv2:GetRevenueStatisticsTimeSeries. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRuleGroup">actionGetRuleGroup</a></code> | <code>string</code> | [Read] wafv2:GetRuleGroup. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetSampledRequests">actionGetSampledRequests</a></code> | <code>string</code> | [Read] wafv2:GetSampledRequests. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetTopPathStatisticsByTraffic">actionGetTopPathStatisticsByTraffic</a></code> | <code>string</code> | [Read] wafv2:GetTopPathStatisticsByTraffic. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetWebACL">actionGetWebACL</a></code> | <code>string</code> | [Read] wafv2:GetWebACL. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetWebACLForResource">actionGetWebACLForResource</a></code> | <code>string</code> | [Read] wafv2:GetWebACLForResource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.AssociateWebACL">AssociateWebACL</a></code> | <code>string</code> | [Write] wafv2:AssociateWebACL. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.CheckCapacity">CheckCapacity</a></code> | <code>string</code> | [Read] wafv2:CheckCapacity. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.CreateAPIKey">CreateAPIKey</a></code> | <code>string</code> | [Write] wafv2:CreateAPIKey. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.CreateIPSet">CreateIPSet</a></code> | <code>string</code> | [Write] wafv2:CreateIPSet. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.CreateRegexPatternSet">CreateRegexPatternSet</a></code> | <code>string</code> | [Write] wafv2:CreateRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.CreateRuleGroup">CreateRuleGroup</a></code> | <code>string</code> | [Write] wafv2:CreateRuleGroup. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.CreateWebACL">CreateWebACL</a></code> | <code>string</code> | [Write] wafv2:CreateWebACL. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteAPIKey">DeleteAPIKey</a></code> | <code>string</code> | [Write] wafv2:DeleteAPIKey. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteFirewallManagerRuleGroups">DeleteFirewallManagerRuleGroups</a></code> | <code>string</code> | [Write] wafv2:DeleteFirewallManagerRuleGroups. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteIPSet">DeleteIPSet</a></code> | <code>string</code> | [Write] wafv2:DeleteIPSet. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteLoggingConfiguration">DeleteLoggingConfiguration</a></code> | <code>string</code> | [Write] wafv2:DeleteLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DeletePermissionPolicy">DeletePermissionPolicy</a></code> | <code>string</code> | [PermissionManagement] wafv2:DeletePermissionPolicy. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteRegexPatternSet">DeleteRegexPatternSet</a></code> | <code>string</code> | [Write] wafv2:DeleteRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteRuleGroup">DeleteRuleGroup</a></code> | <code>string</code> | [Write] wafv2:DeleteRuleGroup. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteWebACL">DeleteWebACL</a></code> | <code>string</code> | [Write] wafv2:DeleteWebACL. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DescribeAllManagedProducts">DescribeAllManagedProducts</a></code> | <code>string</code> | [Read] wafv2:DescribeAllManagedProducts. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DescribeManagedProductsByVendor">DescribeManagedProductsByVendor</a></code> | <code>string</code> | [Read] wafv2:DescribeManagedProductsByVendor. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DescribeManagedRuleGroup">DescribeManagedRuleGroup</a></code> | <code>string</code> | [Read] wafv2:DescribeManagedRuleGroup. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DisassociateFirewallManager">DisassociateFirewallManager</a></code> | <code>string</code> | [Write] wafv2:DisassociateFirewallManager. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.DisassociateWebACL">DisassociateWebACL</a></code> | <code>string</code> | [Write] wafv2:DisassociateWebACL. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.GenerateMobileSdkReleaseUrl">GenerateMobileSdkReleaseUrl</a></code> | <code>string</code> | [Read] wafv2:GenerateMobileSdkReleaseUrl. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListAPIKeys">ListAPIKeys</a></code> | <code>string</code> | [List] wafv2:ListAPIKeys. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListAvailableManagedRuleGroups">ListAvailableManagedRuleGroups</a></code> | <code>string</code> | [List] wafv2:ListAvailableManagedRuleGroups. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListAvailableManagedRuleGroupVersions">ListAvailableManagedRuleGroupVersions</a></code> | <code>string</code> | [List] wafv2:ListAvailableManagedRuleGroupVersions. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListIPSets">ListIPSets</a></code> | <code>string</code> | [List] wafv2:ListIPSets. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListLoggingConfigurations">ListLoggingConfigurations</a></code> | <code>string</code> | [List] wafv2:ListLoggingConfigurations. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListManagedRuleSets">ListManagedRuleSets</a></code> | <code>string</code> | [List] wafv2:ListManagedRuleSets. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListMobileSdkReleases">ListMobileSdkReleases</a></code> | <code>string</code> | [List] wafv2:ListMobileSdkReleases. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListRegexPatternSets">ListRegexPatternSets</a></code> | <code>string</code> | [List] wafv2:ListRegexPatternSets. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListResourcesForWebACL">ListResourcesForWebACL</a></code> | <code>string</code> | [List] wafv2:ListResourcesForWebACL. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListRuleGroups">ListRuleGroups</a></code> | <code>string</code> | [List] wafv2:ListRuleGroups. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListSettlementRecords">ListSettlementRecords</a></code> | <code>string</code> | [List] wafv2:ListSettlementRecords. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] wafv2:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.ListWebACLs">ListWebACLs</a></code> | <code>string</code> | [List] wafv2:ListWebACLs. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.PutFirewallManagerRuleGroups">PutFirewallManagerRuleGroups</a></code> | <code>string</code> | [Write] wafv2:PutFirewallManagerRuleGroups. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.PutLoggingConfiguration">PutLoggingConfiguration</a></code> | <code>string</code> | [Write] wafv2:PutLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.PutManagedRuleSetVersions">PutManagedRuleSetVersions</a></code> | <code>string</code> | [Write] wafv2:PutManagedRuleSetVersions. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.PutPermissionPolicy">PutPermissionPolicy</a></code> | <code>string</code> | [PermissionManagement] wafv2:PutPermissionPolicy. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] wafv2:TagResource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] wafv2:UntagResource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.UpdateIPSet">UpdateIPSet</a></code> | <code>string</code> | [Write] wafv2:UpdateIPSet. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.UpdateManagedRuleSetVersionExpiryDate">UpdateManagedRuleSetVersionExpiryDate</a></code> | <code>string</code> | [Write] wafv2:UpdateManagedRuleSetVersionExpiryDate. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.UpdateRegexPatternSet">UpdateRegexPatternSet</a></code> | <code>string</code> | [Write] wafv2:UpdateRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.UpdateRuleGroup">UpdateRuleGroup</a></code> | <code>string</code> | [Write] wafv2:UpdateRuleGroup. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Actions.property.UpdateWebACL">UpdateWebACL</a></code> | <code>string</code> | [Write] wafv2:UpdateWebACL. |

---

##### `actionGetDecryptedAPIKey`<sup>Required</sup> <a name="actionGetDecryptedAPIKey" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetDecryptedAPIKey"></a>

```typescript
public readonly actionGetDecryptedAPIKey: string;
```

- *Type:* string

[Read] wafv2:GetDecryptedAPIKey.

---

##### `actionGetIPSet`<sup>Required</sup> <a name="actionGetIPSet" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetIPSet"></a>

```typescript
public readonly actionGetIPSet: string;
```

- *Type:* string

[Read] wafv2:GetIPSet.

---

##### `actionGetLoggingConfiguration`<sup>Required</sup> <a name="actionGetLoggingConfiguration" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetLoggingConfiguration"></a>

```typescript
public readonly actionGetLoggingConfiguration: string;
```

- *Type:* string

[Read] wafv2:GetLoggingConfiguration.

---

##### `actionGetManagedRuleSet`<sup>Required</sup> <a name="actionGetManagedRuleSet" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetManagedRuleSet"></a>

```typescript
public readonly actionGetManagedRuleSet: string;
```

- *Type:* string

[Read] wafv2:GetManagedRuleSet.

---

##### `actionGetMobileSdkRelease`<sup>Required</sup> <a name="actionGetMobileSdkRelease" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetMobileSdkRelease"></a>

```typescript
public readonly actionGetMobileSdkRelease: string;
```

- *Type:* string

[Read] wafv2:GetMobileSdkRelease.

---

##### `actionGetPermissionPolicy`<sup>Required</sup> <a name="actionGetPermissionPolicy" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetPermissionPolicy"></a>

```typescript
public readonly actionGetPermissionPolicy: string;
```

- *Type:* string

[Read] wafv2:GetPermissionPolicy.

---

##### `actionGetRateBasedStatementManagedKeys`<sup>Required</sup> <a name="actionGetRateBasedStatementManagedKeys" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRateBasedStatementManagedKeys"></a>

```typescript
public readonly actionGetRateBasedStatementManagedKeys: string;
```

- *Type:* string

[Read] wafv2:GetRateBasedStatementManagedKeys.

---

##### `actionGetRegexPatternSet`<sup>Required</sup> <a name="actionGetRegexPatternSet" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRegexPatternSet"></a>

```typescript
public readonly actionGetRegexPatternSet: string;
```

- *Type:* string

[Read] wafv2:GetRegexPatternSet.

---

##### `actionGetRevenueStatistics`<sup>Required</sup> <a name="actionGetRevenueStatistics" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRevenueStatistics"></a>

```typescript
public readonly actionGetRevenueStatistics: string;
```

- *Type:* string

[Read] wafv2:GetRevenueStatistics.

---

##### `actionGetRevenueStatisticsSummary`<sup>Required</sup> <a name="actionGetRevenueStatisticsSummary" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRevenueStatisticsSummary"></a>

```typescript
public readonly actionGetRevenueStatisticsSummary: string;
```

- *Type:* string

[Read] wafv2:GetRevenueStatisticsSummary.

---

##### `actionGetRevenueStatisticsTimeSeries`<sup>Required</sup> <a name="actionGetRevenueStatisticsTimeSeries" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRevenueStatisticsTimeSeries"></a>

```typescript
public readonly actionGetRevenueStatisticsTimeSeries: string;
```

- *Type:* string

[Read] wafv2:GetRevenueStatisticsTimeSeries.

---

##### `actionGetRuleGroup`<sup>Required</sup> <a name="actionGetRuleGroup" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetRuleGroup"></a>

```typescript
public readonly actionGetRuleGroup: string;
```

- *Type:* string

[Read] wafv2:GetRuleGroup.

---

##### `actionGetSampledRequests`<sup>Required</sup> <a name="actionGetSampledRequests" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetSampledRequests"></a>

```typescript
public readonly actionGetSampledRequests: string;
```

- *Type:* string

[Read] wafv2:GetSampledRequests.

---

##### `actionGetTopPathStatisticsByTraffic`<sup>Required</sup> <a name="actionGetTopPathStatisticsByTraffic" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetTopPathStatisticsByTraffic"></a>

```typescript
public readonly actionGetTopPathStatisticsByTraffic: string;
```

- *Type:* string

[Read] wafv2:GetTopPathStatisticsByTraffic.

---

##### `actionGetWebACL`<sup>Required</sup> <a name="actionGetWebACL" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetWebACL"></a>

```typescript
public readonly actionGetWebACL: string;
```

- *Type:* string

[Read] wafv2:GetWebACL.

---

##### `actionGetWebACLForResource`<sup>Required</sup> <a name="actionGetWebACLForResource" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.actionGetWebACLForResource"></a>

```typescript
public readonly actionGetWebACLForResource: string;
```

- *Type:* string

[Read] wafv2:GetWebACLForResource.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateWebACL`<sup>Required</sup> <a name="AssociateWebACL" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.AssociateWebACL"></a>

```typescript
public readonly AssociateWebACL: string;
```

- *Type:* string

[Write] wafv2:AssociateWebACL.

---

##### `CheckCapacity`<sup>Required</sup> <a name="CheckCapacity" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.CheckCapacity"></a>

```typescript
public readonly CheckCapacity: string;
```

- *Type:* string

[Read] wafv2:CheckCapacity.

---

##### `CreateAPIKey`<sup>Required</sup> <a name="CreateAPIKey" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.CreateAPIKey"></a>

```typescript
public readonly CreateAPIKey: string;
```

- *Type:* string

[Write] wafv2:CreateAPIKey.

---

##### `CreateIPSet`<sup>Required</sup> <a name="CreateIPSet" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.CreateIPSet"></a>

```typescript
public readonly CreateIPSet: string;
```

- *Type:* string

[Write] wafv2:CreateIPSet.

---

##### `CreateRegexPatternSet`<sup>Required</sup> <a name="CreateRegexPatternSet" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.CreateRegexPatternSet"></a>

```typescript
public readonly CreateRegexPatternSet: string;
```

- *Type:* string

[Write] wafv2:CreateRegexPatternSet.

---

##### `CreateRuleGroup`<sup>Required</sup> <a name="CreateRuleGroup" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.CreateRuleGroup"></a>

```typescript
public readonly CreateRuleGroup: string;
```

- *Type:* string

[Write] wafv2:CreateRuleGroup.

---

##### `CreateWebACL`<sup>Required</sup> <a name="CreateWebACL" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.CreateWebACL"></a>

```typescript
public readonly CreateWebACL: string;
```

- *Type:* string

[Write] wafv2:CreateWebACL.

---

##### `DeleteAPIKey`<sup>Required</sup> <a name="DeleteAPIKey" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteAPIKey"></a>

```typescript
public readonly DeleteAPIKey: string;
```

- *Type:* string

[Write] wafv2:DeleteAPIKey.

---

##### `DeleteFirewallManagerRuleGroups`<sup>Required</sup> <a name="DeleteFirewallManagerRuleGroups" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteFirewallManagerRuleGroups"></a>

```typescript
public readonly DeleteFirewallManagerRuleGroups: string;
```

- *Type:* string

[Write] wafv2:DeleteFirewallManagerRuleGroups.

---

##### `DeleteIPSet`<sup>Required</sup> <a name="DeleteIPSet" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteIPSet"></a>

```typescript
public readonly DeleteIPSet: string;
```

- *Type:* string

[Write] wafv2:DeleteIPSet.

---

##### `DeleteLoggingConfiguration`<sup>Required</sup> <a name="DeleteLoggingConfiguration" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteLoggingConfiguration"></a>

```typescript
public readonly DeleteLoggingConfiguration: string;
```

- *Type:* string

[Write] wafv2:DeleteLoggingConfiguration.

---

##### `DeletePermissionPolicy`<sup>Required</sup> <a name="DeletePermissionPolicy" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DeletePermissionPolicy"></a>

```typescript
public readonly DeletePermissionPolicy: string;
```

- *Type:* string

[PermissionManagement] wafv2:DeletePermissionPolicy.

---

##### `DeleteRegexPatternSet`<sup>Required</sup> <a name="DeleteRegexPatternSet" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteRegexPatternSet"></a>

```typescript
public readonly DeleteRegexPatternSet: string;
```

- *Type:* string

[Write] wafv2:DeleteRegexPatternSet.

---

##### `DeleteRuleGroup`<sup>Required</sup> <a name="DeleteRuleGroup" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteRuleGroup"></a>

```typescript
public readonly DeleteRuleGroup: string;
```

- *Type:* string

[Write] wafv2:DeleteRuleGroup.

---

##### `DeleteWebACL`<sup>Required</sup> <a name="DeleteWebACL" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DeleteWebACL"></a>

```typescript
public readonly DeleteWebACL: string;
```

- *Type:* string

[Write] wafv2:DeleteWebACL.

---

##### `DescribeAllManagedProducts`<sup>Required</sup> <a name="DescribeAllManagedProducts" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DescribeAllManagedProducts"></a>

```typescript
public readonly DescribeAllManagedProducts: string;
```

- *Type:* string

[Read] wafv2:DescribeAllManagedProducts.

---

##### `DescribeManagedProductsByVendor`<sup>Required</sup> <a name="DescribeManagedProductsByVendor" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DescribeManagedProductsByVendor"></a>

```typescript
public readonly DescribeManagedProductsByVendor: string;
```

- *Type:* string

[Read] wafv2:DescribeManagedProductsByVendor.

---

##### `DescribeManagedRuleGroup`<sup>Required</sup> <a name="DescribeManagedRuleGroup" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DescribeManagedRuleGroup"></a>

```typescript
public readonly DescribeManagedRuleGroup: string;
```

- *Type:* string

[Read] wafv2:DescribeManagedRuleGroup.

---

##### `DisassociateFirewallManager`<sup>Required</sup> <a name="DisassociateFirewallManager" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DisassociateFirewallManager"></a>

```typescript
public readonly DisassociateFirewallManager: string;
```

- *Type:* string

[Write] wafv2:DisassociateFirewallManager.

---

##### `DisassociateWebACL`<sup>Required</sup> <a name="DisassociateWebACL" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.DisassociateWebACL"></a>

```typescript
public readonly DisassociateWebACL: string;
```

- *Type:* string

[Write] wafv2:DisassociateWebACL.

---

##### `GenerateMobileSdkReleaseUrl`<sup>Required</sup> <a name="GenerateMobileSdkReleaseUrl" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.GenerateMobileSdkReleaseUrl"></a>

```typescript
public readonly GenerateMobileSdkReleaseUrl: string;
```

- *Type:* string

[Read] wafv2:GenerateMobileSdkReleaseUrl.

---

##### `ListAPIKeys`<sup>Required</sup> <a name="ListAPIKeys" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListAPIKeys"></a>

```typescript
public readonly ListAPIKeys: string;
```

- *Type:* string

[List] wafv2:ListAPIKeys.

---

##### `ListAvailableManagedRuleGroups`<sup>Required</sup> <a name="ListAvailableManagedRuleGroups" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListAvailableManagedRuleGroups"></a>

```typescript
public readonly ListAvailableManagedRuleGroups: string;
```

- *Type:* string

[List] wafv2:ListAvailableManagedRuleGroups.

---

##### `ListAvailableManagedRuleGroupVersions`<sup>Required</sup> <a name="ListAvailableManagedRuleGroupVersions" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListAvailableManagedRuleGroupVersions"></a>

```typescript
public readonly ListAvailableManagedRuleGroupVersions: string;
```

- *Type:* string

[List] wafv2:ListAvailableManagedRuleGroupVersions.

---

##### `ListIPSets`<sup>Required</sup> <a name="ListIPSets" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListIPSets"></a>

```typescript
public readonly ListIPSets: string;
```

- *Type:* string

[List] wafv2:ListIPSets.

---

##### `ListLoggingConfigurations`<sup>Required</sup> <a name="ListLoggingConfigurations" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListLoggingConfigurations"></a>

```typescript
public readonly ListLoggingConfigurations: string;
```

- *Type:* string

[List] wafv2:ListLoggingConfigurations.

---

##### `ListManagedRuleSets`<sup>Required</sup> <a name="ListManagedRuleSets" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListManagedRuleSets"></a>

```typescript
public readonly ListManagedRuleSets: string;
```

- *Type:* string

[List] wafv2:ListManagedRuleSets.

---

##### `ListMobileSdkReleases`<sup>Required</sup> <a name="ListMobileSdkReleases" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListMobileSdkReleases"></a>

```typescript
public readonly ListMobileSdkReleases: string;
```

- *Type:* string

[List] wafv2:ListMobileSdkReleases.

---

##### `ListRegexPatternSets`<sup>Required</sup> <a name="ListRegexPatternSets" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListRegexPatternSets"></a>

```typescript
public readonly ListRegexPatternSets: string;
```

- *Type:* string

[List] wafv2:ListRegexPatternSets.

---

##### `ListResourcesForWebACL`<sup>Required</sup> <a name="ListResourcesForWebACL" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListResourcesForWebACL"></a>

```typescript
public readonly ListResourcesForWebACL: string;
```

- *Type:* string

[List] wafv2:ListResourcesForWebACL.

---

##### `ListRuleGroups`<sup>Required</sup> <a name="ListRuleGroups" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListRuleGroups"></a>

```typescript
public readonly ListRuleGroups: string;
```

- *Type:* string

[List] wafv2:ListRuleGroups.

---

##### `ListSettlementRecords`<sup>Required</sup> <a name="ListSettlementRecords" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListSettlementRecords"></a>

```typescript
public readonly ListSettlementRecords: string;
```

- *Type:* string

[List] wafv2:ListSettlementRecords.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] wafv2:ListTagsForResource.

---

##### `ListWebACLs`<sup>Required</sup> <a name="ListWebACLs" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.ListWebACLs"></a>

```typescript
public readonly ListWebACLs: string;
```

- *Type:* string

[List] wafv2:ListWebACLs.

---

##### `PutFirewallManagerRuleGroups`<sup>Required</sup> <a name="PutFirewallManagerRuleGroups" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.PutFirewallManagerRuleGroups"></a>

```typescript
public readonly PutFirewallManagerRuleGroups: string;
```

- *Type:* string

[Write] wafv2:PutFirewallManagerRuleGroups.

---

##### `PutLoggingConfiguration`<sup>Required</sup> <a name="PutLoggingConfiguration" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.PutLoggingConfiguration"></a>

```typescript
public readonly PutLoggingConfiguration: string;
```

- *Type:* string

[Write] wafv2:PutLoggingConfiguration.

---

##### `PutManagedRuleSetVersions`<sup>Required</sup> <a name="PutManagedRuleSetVersions" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.PutManagedRuleSetVersions"></a>

```typescript
public readonly PutManagedRuleSetVersions: string;
```

- *Type:* string

[Write] wafv2:PutManagedRuleSetVersions.

---

##### `PutPermissionPolicy`<sup>Required</sup> <a name="PutPermissionPolicy" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.PutPermissionPolicy"></a>

```typescript
public readonly PutPermissionPolicy: string;
```

- *Type:* string

[PermissionManagement] wafv2:PutPermissionPolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] wafv2:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] wafv2:UntagResource.

---

##### `UpdateIPSet`<sup>Required</sup> <a name="UpdateIPSet" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.UpdateIPSet"></a>

```typescript
public readonly UpdateIPSet: string;
```

- *Type:* string

[Write] wafv2:UpdateIPSet.

---

##### `UpdateManagedRuleSetVersionExpiryDate`<sup>Required</sup> <a name="UpdateManagedRuleSetVersionExpiryDate" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.UpdateManagedRuleSetVersionExpiryDate"></a>

```typescript
public readonly UpdateManagedRuleSetVersionExpiryDate: string;
```

- *Type:* string

[Write] wafv2:UpdateManagedRuleSetVersionExpiryDate.

---

##### `UpdateRegexPatternSet`<sup>Required</sup> <a name="UpdateRegexPatternSet" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.UpdateRegexPatternSet"></a>

```typescript
public readonly UpdateRegexPatternSet: string;
```

- *Type:* string

[Write] wafv2:UpdateRegexPatternSet.

---

##### `UpdateRuleGroup`<sup>Required</sup> <a name="UpdateRuleGroup" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.UpdateRuleGroup"></a>

```typescript
public readonly UpdateRuleGroup: string;
```

- *Type:* string

[Write] wafv2:UpdateRuleGroup.

---

##### `UpdateWebACL`<sup>Required</sup> <a name="UpdateWebACL" id="@cdk_utils/iam.wafv2.Wafv2Actions.property.UpdateWebACL"></a>

```typescript
public readonly UpdateWebACL: string;
```

- *Type:* string

[Write] wafv2:UpdateWebACL.

---

### Wafv2Conditions <a name="Wafv2Conditions" id="@cdk_utils/iam.wafv2.Wafv2Conditions"></a>

Condition key constants and builders for wafv2.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wafv2.Wafv2Conditions.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

new wafv2.Wafv2Conditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.logDestinationResource">logDestinationResource</a></code> | Generates a condition block for `wafv2:LogDestinationResource`. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.logScope">logScope</a></code> | Generates a condition block for `wafv2:LogScope`. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `logDestinationResource` <a name="logDestinationResource" id="@cdk_utils/iam.wafv2.Wafv2Conditions.logDestinationResource"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Conditions.logDestinationResource(value: string)
```

Generates a condition block for `wafv2:LogDestinationResource`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wafv2.Wafv2Conditions.logDestinationResource.parameter.value"></a>

- *Type:* string

---

##### `logScope` <a name="logScope" id="@cdk_utils/iam.wafv2.Wafv2Conditions.logScope"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Conditions.logScope(value: string)
```

Generates a condition block for `wafv2:LogScope`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wafv2.Wafv2Conditions.logScope.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.wafv2.Wafv2Conditions.requestTag"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Conditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wafv2.Wafv2Conditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.wafv2.Wafv2Conditions.resourceTag"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Conditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wafv2.Wafv2Conditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.tagKeys"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Conditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.wafv2.Wafv2Conditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetIPSetConditionKeys">actionGetIPSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIPSet action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetLoggingConfigurationConditionKeys">actionGetLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetRateBasedStatementManagedKeysConditionKeys">actionGetRateBasedStatementManagedKeysConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRateBasedStatementManagedKeys action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetRegexPatternSetConditionKeys">actionGetRegexPatternSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRegexPatternSet action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetRuleGroupConditionKeys">actionGetRuleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRuleGroup action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetWebACLConditionKeys">actionGetWebACLConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetWebACL action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.CreateIPSetConditionKeys">CreateIPSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIPSet action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.CreateRegexPatternSetConditionKeys">CreateRegexPatternSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRegexPatternSet action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.CreateRuleGroupConditionKeys">CreateRuleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRuleGroup action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.CreateWebACLConditionKeys">CreateWebACLConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWebACL action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.DeleteLoggingConfigurationConditionKeys">DeleteLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.ListLoggingConfigurationsConditionKeys">ListLoggingConfigurationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListLoggingConfigurations action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.LOG_DESTINATION_RESOURCE">LOG_DESTINATION_RESOURCE</a></code> | <code>string</code> | Condition key: wafv2:LogDestinationResource (ARN). |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.LOG_SCOPE">LOG_SCOPE</a></code> | <code>string</code> | Condition key: wafv2:LogScope (String). |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.PutLoggingConfigurationConditionKeys">PutLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.UpdateIPSetConditionKeys">UpdateIPSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateIPSet action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.UpdateRegexPatternSetConditionKeys">UpdateRegexPatternSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRegexPatternSet action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.UpdateRuleGroupConditionKeys">UpdateRuleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRuleGroup action. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Conditions.property.UpdateWebACLConditionKeys">UpdateWebACLConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWebACL action. |

---

##### `actionGetIPSetConditionKeys`<sup>Required</sup> <a name="actionGetIPSetConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetIPSetConditionKeys"></a>

```typescript
public readonly actionGetIPSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIPSet action.

---

##### `actionGetLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetLoggingConfigurationConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetLoggingConfigurationConditionKeys"></a>

```typescript
public readonly actionGetLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLoggingConfiguration action.

---

##### `actionGetRateBasedStatementManagedKeysConditionKeys`<sup>Required</sup> <a name="actionGetRateBasedStatementManagedKeysConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetRateBasedStatementManagedKeysConditionKeys"></a>

```typescript
public readonly actionGetRateBasedStatementManagedKeysConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRateBasedStatementManagedKeys action.

---

##### `actionGetRegexPatternSetConditionKeys`<sup>Required</sup> <a name="actionGetRegexPatternSetConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetRegexPatternSetConditionKeys"></a>

```typescript
public readonly actionGetRegexPatternSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRegexPatternSet action.

---

##### `actionGetRuleGroupConditionKeys`<sup>Required</sup> <a name="actionGetRuleGroupConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetRuleGroupConditionKeys"></a>

```typescript
public readonly actionGetRuleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRuleGroup action.

---

##### `actionGetWebACLConditionKeys`<sup>Required</sup> <a name="actionGetWebACLConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.actionGetWebACLConditionKeys"></a>

```typescript
public readonly actionGetWebACLConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetWebACL action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateIPSetConditionKeys`<sup>Required</sup> <a name="CreateIPSetConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.CreateIPSetConditionKeys"></a>

```typescript
public readonly CreateIPSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIPSet action.

---

##### `CreateRegexPatternSetConditionKeys`<sup>Required</sup> <a name="CreateRegexPatternSetConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.CreateRegexPatternSetConditionKeys"></a>

```typescript
public readonly CreateRegexPatternSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRegexPatternSet action.

---

##### `CreateRuleGroupConditionKeys`<sup>Required</sup> <a name="CreateRuleGroupConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.CreateRuleGroupConditionKeys"></a>

```typescript
public readonly CreateRuleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRuleGroup action.

---

##### `CreateWebACLConditionKeys`<sup>Required</sup> <a name="CreateWebACLConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.CreateWebACLConditionKeys"></a>

```typescript
public readonly CreateWebACLConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWebACL action.

---

##### `DeleteLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="DeleteLoggingConfigurationConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.DeleteLoggingConfigurationConditionKeys"></a>

```typescript
public readonly DeleteLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteLoggingConfiguration action.

---

##### `ListLoggingConfigurationsConditionKeys`<sup>Required</sup> <a name="ListLoggingConfigurationsConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.ListLoggingConfigurationsConditionKeys"></a>

```typescript
public readonly ListLoggingConfigurationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListLoggingConfigurations action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `LOG_DESTINATION_RESOURCE`<sup>Required</sup> <a name="LOG_DESTINATION_RESOURCE" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.LOG_DESTINATION_RESOURCE"></a>

```typescript
public readonly LOG_DESTINATION_RESOURCE: string;
```

- *Type:* string

Condition key: wafv2:LogDestinationResource (ARN).

---

##### `LOG_SCOPE`<sup>Required</sup> <a name="LOG_SCOPE" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.LOG_SCOPE"></a>

```typescript
public readonly LOG_SCOPE: string;
```

- *Type:* string

Condition key: wafv2:LogScope (String).

---

##### `PutLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="PutLoggingConfigurationConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.PutLoggingConfigurationConditionKeys"></a>

```typescript
public readonly PutLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutLoggingConfiguration action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateIPSetConditionKeys`<sup>Required</sup> <a name="UpdateIPSetConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.UpdateIPSetConditionKeys"></a>

```typescript
public readonly UpdateIPSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateIPSet action.

---

##### `UpdateRegexPatternSetConditionKeys`<sup>Required</sup> <a name="UpdateRegexPatternSetConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.UpdateRegexPatternSetConditionKeys"></a>

```typescript
public readonly UpdateRegexPatternSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRegexPatternSet action.

---

##### `UpdateRuleGroupConditionKeys`<sup>Required</sup> <a name="UpdateRuleGroupConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.UpdateRuleGroupConditionKeys"></a>

```typescript
public readonly UpdateRuleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRuleGroup action.

---

##### `UpdateWebACLConditionKeys`<sup>Required</sup> <a name="UpdateWebACLConditionKeys" id="@cdk_utils/iam.wafv2.Wafv2Conditions.property.UpdateWebACLConditionKeys"></a>

```typescript
public readonly UpdateWebACLConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWebACL action.

---

### Wafv2Operations <a name="Wafv2Operations" id="@cdk_utils/iam.wafv2.Wafv2Operations"></a>

API operation to required IAM actions mapping for wafv2.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wafv2.Wafv2Operations.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

new wafv2.Wafv2Operations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.AssociateWebACL">AssociateWebACL</a></code> | <code>string[]</code> | IAM actions required for the AssociateWebACL API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.CheckCapacity">CheckCapacity</a></code> | <code>string[]</code> | IAM actions required for the CheckCapacity API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.CreateAPIKey">CreateAPIKey</a></code> | <code>string[]</code> | IAM actions required for the CreateAPIKey API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.CreateIPSet">CreateIPSet</a></code> | <code>string[]</code> | IAM actions required for the CreateIPSet API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.CreateRegexPatternSet">CreateRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the CreateRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.CreateRuleGroup">CreateRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.CreateWebACL">CreateWebACL</a></code> | <code>string[]</code> | IAM actions required for the CreateWebACL API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteAPIKey">DeleteAPIKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteAPIKey API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteFirewallManagerRuleGroups">DeleteFirewallManagerRuleGroups</a></code> | <code>string[]</code> | IAM actions required for the DeleteFirewallManagerRuleGroups API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteIPSet">DeleteIPSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteIPSet API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteLoggingConfiguration">DeleteLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DeletePermissionPolicy">DeletePermissionPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePermissionPolicy API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteRegexPatternSet">DeleteRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteRuleGroup">DeleteRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteWebACL">DeleteWebACL</a></code> | <code>string[]</code> | IAM actions required for the DeleteWebACL API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DescribeAllManagedProducts">DescribeAllManagedProducts</a></code> | <code>string[]</code> | IAM actions required for the DescribeAllManagedProducts API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DescribeManagedProductsByVendor">DescribeManagedProductsByVendor</a></code> | <code>string[]</code> | IAM actions required for the DescribeManagedProductsByVendor API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DescribeManagedRuleGroup">DescribeManagedRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeManagedRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.DisassociateWebACL">DisassociateWebACL</a></code> | <code>string[]</code> | IAM actions required for the DisassociateWebACL API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.GenerateMobileSdkReleaseUrl">GenerateMobileSdkReleaseUrl</a></code> | <code>string[]</code> | IAM actions required for the GenerateMobileSdkReleaseUrl API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListAPIKeys">ListAPIKeys</a></code> | <code>string[]</code> | IAM actions required for the ListAPIKeys API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListAvailableManagedRuleGroups">ListAvailableManagedRuleGroups</a></code> | <code>string[]</code> | IAM actions required for the ListAvailableManagedRuleGroups API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListAvailableManagedRuleGroupVersions">ListAvailableManagedRuleGroupVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAvailableManagedRuleGroupVersions API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListIPSets">ListIPSets</a></code> | <code>string[]</code> | IAM actions required for the ListIPSets API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListLoggingConfigurations">ListLoggingConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListLoggingConfigurations API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListManagedRuleSets">ListManagedRuleSets</a></code> | <code>string[]</code> | IAM actions required for the ListManagedRuleSets API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListMobileSdkReleases">ListMobileSdkReleases</a></code> | <code>string[]</code> | IAM actions required for the ListMobileSdkReleases API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListRegexPatternSets">ListRegexPatternSets</a></code> | <code>string[]</code> | IAM actions required for the ListRegexPatternSets API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListResourcesForWebACL">ListResourcesForWebACL</a></code> | <code>string[]</code> | IAM actions required for the ListResourcesForWebACL API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListRuleGroups">ListRuleGroups</a></code> | <code>string[]</code> | IAM actions required for the ListRuleGroups API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListSettlementRecords">ListSettlementRecords</a></code> | <code>string[]</code> | IAM actions required for the ListSettlementRecords API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.ListWebACLs">ListWebACLs</a></code> | <code>string[]</code> | IAM actions required for the ListWebACLs API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetDecryptedAPIKey">opGetDecryptedAPIKey</a></code> | <code>string[]</code> | IAM actions required for the GetDecryptedAPIKey API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetIPSet">opGetIPSet</a></code> | <code>string[]</code> | IAM actions required for the GetIPSet API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetLoggingConfiguration">opGetLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetManagedRuleSet">opGetManagedRuleSet</a></code> | <code>string[]</code> | IAM actions required for the GetManagedRuleSet API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetMobileSdkRelease">opGetMobileSdkRelease</a></code> | <code>string[]</code> | IAM actions required for the GetMobileSdkRelease API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetPermissionPolicy">opGetPermissionPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPermissionPolicy API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRateBasedStatementManagedKeys">opGetRateBasedStatementManagedKeys</a></code> | <code>string[]</code> | IAM actions required for the GetRateBasedStatementManagedKeys API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRegexPatternSet">opGetRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the GetRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRevenueStatistics">opGetRevenueStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetRevenueStatistics API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRevenueStatisticsSummary">opGetRevenueStatisticsSummary</a></code> | <code>string[]</code> | IAM actions required for the GetRevenueStatisticsSummary API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRevenueStatisticsTimeSeries">opGetRevenueStatisticsTimeSeries</a></code> | <code>string[]</code> | IAM actions required for the GetRevenueStatisticsTimeSeries API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRuleGroup">opGetRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the GetRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetSampledRequests">opGetSampledRequests</a></code> | <code>string[]</code> | IAM actions required for the GetSampledRequests API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetTopPathStatisticsByTraffic">opGetTopPathStatisticsByTraffic</a></code> | <code>string[]</code> | IAM actions required for the GetTopPathStatisticsByTraffic API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetWebACL">opGetWebACL</a></code> | <code>string[]</code> | IAM actions required for the GetWebACL API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetWebACLForResource">opGetWebACLForResource</a></code> | <code>string[]</code> | IAM actions required for the GetWebACLForResource API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.PutLoggingConfiguration">PutLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.PutManagedRuleSetVersions">PutManagedRuleSetVersions</a></code> | <code>string[]</code> | IAM actions required for the PutManagedRuleSetVersions API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.PutPermissionPolicy">PutPermissionPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutPermissionPolicy API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.UpdateIPSet">UpdateIPSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateIPSet API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.UpdateManagedRuleSetVersionExpiryDate">UpdateManagedRuleSetVersionExpiryDate</a></code> | <code>string[]</code> | IAM actions required for the UpdateManagedRuleSetVersionExpiryDate API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.UpdateRegexPatternSet">UpdateRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.UpdateRuleGroup">UpdateRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Operations.property.UpdateWebACL">UpdateWebACL</a></code> | <code>string[]</code> | IAM actions required for the UpdateWebACL API call. |

---

##### `AssociateWebACL`<sup>Required</sup> <a name="AssociateWebACL" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.AssociateWebACL"></a>

```typescript
public readonly AssociateWebACL: string[];
```

- *Type:* string[]

IAM actions required for the AssociateWebACL API call.

---

##### `CheckCapacity`<sup>Required</sup> <a name="CheckCapacity" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.CheckCapacity"></a>

```typescript
public readonly CheckCapacity: string[];
```

- *Type:* string[]

IAM actions required for the CheckCapacity API call.

---

##### `CreateAPIKey`<sup>Required</sup> <a name="CreateAPIKey" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.CreateAPIKey"></a>

```typescript
public readonly CreateAPIKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateAPIKey API call.

---

##### `CreateIPSet`<sup>Required</sup> <a name="CreateIPSet" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.CreateIPSet"></a>

```typescript
public readonly CreateIPSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateIPSet API call.

---

##### `CreateRegexPatternSet`<sup>Required</sup> <a name="CreateRegexPatternSet" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.CreateRegexPatternSet"></a>

```typescript
public readonly CreateRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegexPatternSet API call.

---

##### `CreateRuleGroup`<sup>Required</sup> <a name="CreateRuleGroup" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.CreateRuleGroup"></a>

```typescript
public readonly CreateRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateRuleGroup API call.

---

##### `CreateWebACL`<sup>Required</sup> <a name="CreateWebACL" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.CreateWebACL"></a>

```typescript
public readonly CreateWebACL: string[];
```

- *Type:* string[]

IAM actions required for the CreateWebACL API call.

---

##### `DeleteAPIKey`<sup>Required</sup> <a name="DeleteAPIKey" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteAPIKey"></a>

```typescript
public readonly DeleteAPIKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAPIKey API call.

---

##### `DeleteFirewallManagerRuleGroups`<sup>Required</sup> <a name="DeleteFirewallManagerRuleGroups" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteFirewallManagerRuleGroups"></a>

```typescript
public readonly DeleteFirewallManagerRuleGroups: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFirewallManagerRuleGroups API call.

---

##### `DeleteIPSet`<sup>Required</sup> <a name="DeleteIPSet" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteIPSet"></a>

```typescript
public readonly DeleteIPSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIPSet API call.

---

##### `DeleteLoggingConfiguration`<sup>Required</sup> <a name="DeleteLoggingConfiguration" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteLoggingConfiguration"></a>

```typescript
public readonly DeleteLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoggingConfiguration API call.

---

##### `DeletePermissionPolicy`<sup>Required</sup> <a name="DeletePermissionPolicy" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DeletePermissionPolicy"></a>

```typescript
public readonly DeletePermissionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePermissionPolicy API call.

---

##### `DeleteRegexPatternSet`<sup>Required</sup> <a name="DeleteRegexPatternSet" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteRegexPatternSet"></a>

```typescript
public readonly DeleteRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegexPatternSet API call.

---

##### `DeleteRuleGroup`<sup>Required</sup> <a name="DeleteRuleGroup" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteRuleGroup"></a>

```typescript
public readonly DeleteRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRuleGroup API call.

---

##### `DeleteWebACL`<sup>Required</sup> <a name="DeleteWebACL" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DeleteWebACL"></a>

```typescript
public readonly DeleteWebACL: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWebACL API call.

---

##### `DescribeAllManagedProducts`<sup>Required</sup> <a name="DescribeAllManagedProducts" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DescribeAllManagedProducts"></a>

```typescript
public readonly DescribeAllManagedProducts: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAllManagedProducts API call.

---

##### `DescribeManagedProductsByVendor`<sup>Required</sup> <a name="DescribeManagedProductsByVendor" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DescribeManagedProductsByVendor"></a>

```typescript
public readonly DescribeManagedProductsByVendor: string[];
```

- *Type:* string[]

IAM actions required for the DescribeManagedProductsByVendor API call.

---

##### `DescribeManagedRuleGroup`<sup>Required</sup> <a name="DescribeManagedRuleGroup" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DescribeManagedRuleGroup"></a>

```typescript
public readonly DescribeManagedRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeManagedRuleGroup API call.

---

##### `DisassociateWebACL`<sup>Required</sup> <a name="DisassociateWebACL" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.DisassociateWebACL"></a>

```typescript
public readonly DisassociateWebACL: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateWebACL API call.

---

##### `GenerateMobileSdkReleaseUrl`<sup>Required</sup> <a name="GenerateMobileSdkReleaseUrl" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.GenerateMobileSdkReleaseUrl"></a>

```typescript
public readonly GenerateMobileSdkReleaseUrl: string[];
```

- *Type:* string[]

IAM actions required for the GenerateMobileSdkReleaseUrl API call.

---

##### `ListAPIKeys`<sup>Required</sup> <a name="ListAPIKeys" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListAPIKeys"></a>

```typescript
public readonly ListAPIKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListAPIKeys API call.

---

##### `ListAvailableManagedRuleGroups`<sup>Required</sup> <a name="ListAvailableManagedRuleGroups" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListAvailableManagedRuleGroups"></a>

```typescript
public readonly ListAvailableManagedRuleGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListAvailableManagedRuleGroups API call.

---

##### `ListAvailableManagedRuleGroupVersions`<sup>Required</sup> <a name="ListAvailableManagedRuleGroupVersions" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListAvailableManagedRuleGroupVersions"></a>

```typescript
public readonly ListAvailableManagedRuleGroupVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAvailableManagedRuleGroupVersions API call.

---

##### `ListIPSets`<sup>Required</sup> <a name="ListIPSets" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListIPSets"></a>

```typescript
public readonly ListIPSets: string[];
```

- *Type:* string[]

IAM actions required for the ListIPSets API call.

---

##### `ListLoggingConfigurations`<sup>Required</sup> <a name="ListLoggingConfigurations" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListLoggingConfigurations"></a>

```typescript
public readonly ListLoggingConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListLoggingConfigurations API call.

---

##### `ListManagedRuleSets`<sup>Required</sup> <a name="ListManagedRuleSets" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListManagedRuleSets"></a>

```typescript
public readonly ListManagedRuleSets: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedRuleSets API call.

---

##### `ListMobileSdkReleases`<sup>Required</sup> <a name="ListMobileSdkReleases" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListMobileSdkReleases"></a>

```typescript
public readonly ListMobileSdkReleases: string[];
```

- *Type:* string[]

IAM actions required for the ListMobileSdkReleases API call.

---

##### `ListRegexPatternSets`<sup>Required</sup> <a name="ListRegexPatternSets" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListRegexPatternSets"></a>

```typescript
public readonly ListRegexPatternSets: string[];
```

- *Type:* string[]

IAM actions required for the ListRegexPatternSets API call.

---

##### `ListResourcesForWebACL`<sup>Required</sup> <a name="ListResourcesForWebACL" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListResourcesForWebACL"></a>

```typescript
public readonly ListResourcesForWebACL: string[];
```

- *Type:* string[]

IAM actions required for the ListResourcesForWebACL API call.

---

##### `ListRuleGroups`<sup>Required</sup> <a name="ListRuleGroups" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListRuleGroups"></a>

```typescript
public readonly ListRuleGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListRuleGroups API call.

---

##### `ListSettlementRecords`<sup>Required</sup> <a name="ListSettlementRecords" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListSettlementRecords"></a>

```typescript
public readonly ListSettlementRecords: string[];
```

- *Type:* string[]

IAM actions required for the ListSettlementRecords API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWebACLs`<sup>Required</sup> <a name="ListWebACLs" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.ListWebACLs"></a>

```typescript
public readonly ListWebACLs: string[];
```

- *Type:* string[]

IAM actions required for the ListWebACLs API call.

---

##### `opGetDecryptedAPIKey`<sup>Required</sup> <a name="opGetDecryptedAPIKey" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetDecryptedAPIKey"></a>

```typescript
public readonly opGetDecryptedAPIKey: string[];
```

- *Type:* string[]

IAM actions required for the GetDecryptedAPIKey API call.

---

##### `opGetIPSet`<sup>Required</sup> <a name="opGetIPSet" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetIPSet"></a>

```typescript
public readonly opGetIPSet: string[];
```

- *Type:* string[]

IAM actions required for the GetIPSet API call.

---

##### `opGetLoggingConfiguration`<sup>Required</sup> <a name="opGetLoggingConfiguration" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetLoggingConfiguration"></a>

```typescript
public readonly opGetLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetLoggingConfiguration API call.

---

##### `opGetManagedRuleSet`<sup>Required</sup> <a name="opGetManagedRuleSet" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetManagedRuleSet"></a>

```typescript
public readonly opGetManagedRuleSet: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedRuleSet API call.

---

##### `opGetMobileSdkRelease`<sup>Required</sup> <a name="opGetMobileSdkRelease" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetMobileSdkRelease"></a>

```typescript
public readonly opGetMobileSdkRelease: string[];
```

- *Type:* string[]

IAM actions required for the GetMobileSdkRelease API call.

---

##### `opGetPermissionPolicy`<sup>Required</sup> <a name="opGetPermissionPolicy" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetPermissionPolicy"></a>

```typescript
public readonly opGetPermissionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPermissionPolicy API call.

---

##### `opGetRateBasedStatementManagedKeys`<sup>Required</sup> <a name="opGetRateBasedStatementManagedKeys" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRateBasedStatementManagedKeys"></a>

```typescript
public readonly opGetRateBasedStatementManagedKeys: string[];
```

- *Type:* string[]

IAM actions required for the GetRateBasedStatementManagedKeys API call.

---

##### `opGetRegexPatternSet`<sup>Required</sup> <a name="opGetRegexPatternSet" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRegexPatternSet"></a>

```typescript
public readonly opGetRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the GetRegexPatternSet API call.

---

##### `opGetRevenueStatistics`<sup>Required</sup> <a name="opGetRevenueStatistics" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRevenueStatistics"></a>

```typescript
public readonly opGetRevenueStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetRevenueStatistics API call.

---

##### `opGetRevenueStatisticsSummary`<sup>Required</sup> <a name="opGetRevenueStatisticsSummary" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRevenueStatisticsSummary"></a>

```typescript
public readonly opGetRevenueStatisticsSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetRevenueStatisticsSummary API call.

---

##### `opGetRevenueStatisticsTimeSeries`<sup>Required</sup> <a name="opGetRevenueStatisticsTimeSeries" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRevenueStatisticsTimeSeries"></a>

```typescript
public readonly opGetRevenueStatisticsTimeSeries: string[];
```

- *Type:* string[]

IAM actions required for the GetRevenueStatisticsTimeSeries API call.

---

##### `opGetRuleGroup`<sup>Required</sup> <a name="opGetRuleGroup" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetRuleGroup"></a>

```typescript
public readonly opGetRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetRuleGroup API call.

---

##### `opGetSampledRequests`<sup>Required</sup> <a name="opGetSampledRequests" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetSampledRequests"></a>

```typescript
public readonly opGetSampledRequests: string[];
```

- *Type:* string[]

IAM actions required for the GetSampledRequests API call.

---

##### `opGetTopPathStatisticsByTraffic`<sup>Required</sup> <a name="opGetTopPathStatisticsByTraffic" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetTopPathStatisticsByTraffic"></a>

```typescript
public readonly opGetTopPathStatisticsByTraffic: string[];
```

- *Type:* string[]

IAM actions required for the GetTopPathStatisticsByTraffic API call.

---

##### `opGetWebACL`<sup>Required</sup> <a name="opGetWebACL" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetWebACL"></a>

```typescript
public readonly opGetWebACL: string[];
```

- *Type:* string[]

IAM actions required for the GetWebACL API call.

---

##### `opGetWebACLForResource`<sup>Required</sup> <a name="opGetWebACLForResource" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.opGetWebACLForResource"></a>

```typescript
public readonly opGetWebACLForResource: string[];
```

- *Type:* string[]

IAM actions required for the GetWebACLForResource API call.

---

##### `PutLoggingConfiguration`<sup>Required</sup> <a name="PutLoggingConfiguration" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.PutLoggingConfiguration"></a>

```typescript
public readonly PutLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutLoggingConfiguration API call.

---

##### `PutManagedRuleSetVersions`<sup>Required</sup> <a name="PutManagedRuleSetVersions" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.PutManagedRuleSetVersions"></a>

```typescript
public readonly PutManagedRuleSetVersions: string[];
```

- *Type:* string[]

IAM actions required for the PutManagedRuleSetVersions API call.

---

##### `PutPermissionPolicy`<sup>Required</sup> <a name="PutPermissionPolicy" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.PutPermissionPolicy"></a>

```typescript
public readonly PutPermissionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutPermissionPolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateIPSet`<sup>Required</sup> <a name="UpdateIPSet" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.UpdateIPSet"></a>

```typescript
public readonly UpdateIPSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIPSet API call.

---

##### `UpdateManagedRuleSetVersionExpiryDate`<sup>Required</sup> <a name="UpdateManagedRuleSetVersionExpiryDate" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.UpdateManagedRuleSetVersionExpiryDate"></a>

```typescript
public readonly UpdateManagedRuleSetVersionExpiryDate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateManagedRuleSetVersionExpiryDate API call.

---

##### `UpdateRegexPatternSet`<sup>Required</sup> <a name="UpdateRegexPatternSet" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.UpdateRegexPatternSet"></a>

```typescript
public readonly UpdateRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegexPatternSet API call.

---

##### `UpdateRuleGroup`<sup>Required</sup> <a name="UpdateRuleGroup" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.UpdateRuleGroup"></a>

```typescript
public readonly UpdateRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRuleGroup API call.

---

##### `UpdateWebACL`<sup>Required</sup> <a name="UpdateWebACL" id="@cdk_utils/iam.wafv2.Wafv2Operations.property.UpdateWebACL"></a>

```typescript
public readonly UpdateWebACL: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWebACL API call.

---

### Wafv2Resources <a name="Wafv2Resources" id="@cdk_utils/iam.wafv2.Wafv2Resources"></a>

ARN builders, validators, and parsers for wafv2 resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wafv2.Wafv2Resources.Initializer"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

new wafv2.Wafv2Resources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.agentcoreGateway">agentcoreGateway</a></code> | Builds an ARN for the agentcore-gateway resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.amplifyApp">amplifyApp</a></code> | Builds an ARN for the amplify-app resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.apigateway">apigateway</a></code> | Builds an ARN for the apigateway resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.apprunner">apprunner</a></code> | Builds an ARN for the apprunner resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.appsync">appsync</a></code> | Builds an ARN for the appsync resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.ipset">ipset</a></code> | Builds an ARN for the ipset resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidAgentcoreGatewayArn">isValidAgentcoreGatewayArn</a></code> | Validates whether a string is a valid ARN for the agentcore-gateway resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidAmplifyAppArn">isValidAmplifyAppArn</a></code> | Validates whether a string is a valid ARN for the amplify-app resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidApigatewayArn">isValidApigatewayArn</a></code> | Validates whether a string is a valid ARN for the apigateway resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidApprunnerArn">isValidApprunnerArn</a></code> | Validates whether a string is a valid ARN for the apprunner resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidAppsyncArn">isValidAppsyncArn</a></code> | Validates whether a string is a valid ARN for the appsync resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidIpsetArn">isValidIpsetArn</a></code> | Validates whether a string is a valid ARN for the ipset resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidLoadbalancerAppArn">isValidLoadbalancerAppArn</a></code> | Validates whether a string is a valid ARN for the loadbalancer/app/ resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidManagedrulesetArn">isValidManagedrulesetArn</a></code> | Validates whether a string is a valid ARN for the managedruleset resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidRegexpatternsetArn">isValidRegexpatternsetArn</a></code> | Validates whether a string is a valid ARN for the regexpatternset resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidRulegroupArn">isValidRulegroupArn</a></code> | Validates whether a string is a valid ARN for the rulegroup resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidUserpoolArn">isValidUserpoolArn</a></code> | Validates whether a string is a valid ARN for the userpool resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidVerifiedAccessInstanceArn">isValidVerifiedAccessInstanceArn</a></code> | Validates whether a string is a valid ARN for the verified-access-instance resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.isValidWebaclArn">isValidWebaclArn</a></code> | Validates whether a string is a valid ARN for the webacl resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.loadbalancerApp">loadbalancerApp</a></code> | Builds an ARN for the loadbalancer/app/ resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.managedruleset">managedruleset</a></code> | Builds an ARN for the managedruleset resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseAgentcoreGatewayArn">parseAgentcoreGatewayArn</a></code> | Parses a agentcore-gateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseAmplifyAppArn">parseAmplifyAppArn</a></code> | Parses a amplify-app ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseApigatewayArn">parseApigatewayArn</a></code> | Parses a apigateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseApprunnerArn">parseApprunnerArn</a></code> | Parses a apprunner ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseAppsyncArn">parseAppsyncArn</a></code> | Parses a appsync ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseIpsetArn">parseIpsetArn</a></code> | Parses a ipset ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseLoadbalancerAppArn">parseLoadbalancerAppArn</a></code> | Parses a loadbalancer/app/ ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseManagedrulesetArn">parseManagedrulesetArn</a></code> | Parses a managedruleset ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseRegexpatternsetArn">parseRegexpatternsetArn</a></code> | Parses a regexpatternset ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseRulegroupArn">parseRulegroupArn</a></code> | Parses a rulegroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseUserpoolArn">parseUserpoolArn</a></code> | Parses a userpool ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseVerifiedAccessInstanceArn">parseVerifiedAccessInstanceArn</a></code> | Parses a verified-access-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.parseWebaclArn">parseWebaclArn</a></code> | Parses a webacl ARN into its components. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.regexpatternset">regexpatternset</a></code> | Builds an ARN for the regexpatternset resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.rulegroup">rulegroup</a></code> | Builds an ARN for the rulegroup resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.userpool">userpool</a></code> | Builds an ARN for the userpool resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.verifiedAccessInstance">verifiedAccessInstance</a></code> | Builds an ARN for the verified-access-instance resource. |
| <code><a href="#@cdk_utils/iam.wafv2.Wafv2Resources.webacl">webacl</a></code> | Builds an ARN for the webacl resource. |

---

##### `agentcoreGateway` <a name="agentcoreGateway" id="@cdk_utils/iam.wafv2.Wafv2Resources.agentcoreGateway"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.agentcoreGateway(props: Wafv2AgentcoreGatewayArnProps)
```

Builds an ARN for the agentcore-gateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.agentcoreGateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2AgentcoreGatewayArnProps">Wafv2AgentcoreGatewayArnProps</a>

---

##### `amplifyApp` <a name="amplifyApp" id="@cdk_utils/iam.wafv2.Wafv2Resources.amplifyApp"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.amplifyApp(props: Wafv2AmplifyAppArnProps)
```

Builds an ARN for the amplify-app resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.amplifyApp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2AmplifyAppArnProps">Wafv2AmplifyAppArnProps</a>

---

##### `apigateway` <a name="apigateway" id="@cdk_utils/iam.wafv2.Wafv2Resources.apigateway"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.apigateway(props: Wafv2ApigatewayArnProps)
```

Builds an ARN for the apigateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.apigateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2ApigatewayArnProps">Wafv2ApigatewayArnProps</a>

---

##### `apprunner` <a name="apprunner" id="@cdk_utils/iam.wafv2.Wafv2Resources.apprunner"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.apprunner(props: Wafv2ApprunnerArnProps)
```

Builds an ARN for the apprunner resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.apprunner.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2ApprunnerArnProps">Wafv2ApprunnerArnProps</a>

---

##### `appsync` <a name="appsync" id="@cdk_utils/iam.wafv2.Wafv2Resources.appsync"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.appsync(props: Wafv2AppsyncArnProps)
```

Builds an ARN for the appsync resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.appsync.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2AppsyncArnProps">Wafv2AppsyncArnProps</a>

---

##### `ipset` <a name="ipset" id="@cdk_utils/iam.wafv2.Wafv2Resources.ipset"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.ipset(props: Wafv2IpsetArnProps)
```

Builds an ARN for the ipset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.ipset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2IpsetArnProps">Wafv2IpsetArnProps</a>

---

##### `isValidAgentcoreGatewayArn` <a name="isValidAgentcoreGatewayArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidAgentcoreGatewayArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidAgentcoreGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the agentcore-gateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidAgentcoreGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAmplifyAppArn` <a name="isValidAmplifyAppArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidAmplifyAppArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidAmplifyAppArn(arn: string)
```

Validates whether a string is a valid ARN for the amplify-app resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidAmplifyAppArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApigatewayArn` <a name="isValidApigatewayArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidApigatewayArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidApigatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the apigateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidApigatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApprunnerArn` <a name="isValidApprunnerArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidApprunnerArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidApprunnerArn(arn: string)
```

Validates whether a string is a valid ARN for the apprunner resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidApprunnerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAppsyncArn` <a name="isValidAppsyncArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidAppsyncArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidAppsyncArn(arn: string)
```

Validates whether a string is a valid ARN for the appsync resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidAppsyncArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIpsetArn` <a name="isValidIpsetArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidIpsetArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidIpsetArn(arn: string)
```

Validates whether a string is a valid ARN for the ipset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidIpsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLoadbalancerAppArn` <a name="isValidLoadbalancerAppArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidLoadbalancerAppArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidLoadbalancerAppArn(arn: string)
```

Validates whether a string is a valid ARN for the loadbalancer/app/ resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidLoadbalancerAppArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedrulesetArn` <a name="isValidManagedrulesetArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidManagedrulesetArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidManagedrulesetArn(arn: string)
```

Validates whether a string is a valid ARN for the managedruleset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidManagedrulesetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegexpatternsetArn` <a name="isValidRegexpatternsetArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidRegexpatternsetArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidRegexpatternsetArn(arn: string)
```

Validates whether a string is a valid ARN for the regexpatternset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidRegexpatternsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRulegroupArn` <a name="isValidRulegroupArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidRulegroupArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidRulegroupArn(arn: string)
```

Validates whether a string is a valid ARN for the rulegroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidRulegroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserpoolArn` <a name="isValidUserpoolArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidUserpoolArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidUserpoolArn(arn: string)
```

Validates whether a string is a valid ARN for the userpool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidUserpoolArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVerifiedAccessInstanceArn` <a name="isValidVerifiedAccessInstanceArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidVerifiedAccessInstanceArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidVerifiedAccessInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the verified-access-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidVerifiedAccessInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWebaclArn` <a name="isValidWebaclArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidWebaclArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.isValidWebaclArn(arn: string)
```

Validates whether a string is a valid ARN for the webacl resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.isValidWebaclArn.parameter.arn"></a>

- *Type:* string

---

##### `loadbalancerApp` <a name="loadbalancerApp" id="@cdk_utils/iam.wafv2.Wafv2Resources.loadbalancerApp"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.loadbalancerApp(props: Wafv2LoadbalancerAppArnProps)
```

Builds an ARN for the loadbalancer/app/ resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.loadbalancerApp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2LoadbalancerAppArnProps">Wafv2LoadbalancerAppArnProps</a>

---

##### `managedruleset` <a name="managedruleset" id="@cdk_utils/iam.wafv2.Wafv2Resources.managedruleset"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.managedruleset(props: Wafv2ManagedrulesetArnProps)
```

Builds an ARN for the managedruleset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.managedruleset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2ManagedrulesetArnProps">Wafv2ManagedrulesetArnProps</a>

---

##### `parseAgentcoreGatewayArn` <a name="parseAgentcoreGatewayArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseAgentcoreGatewayArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseAgentcoreGatewayArn(arn: string)
```

Parses a agentcore-gateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseAgentcoreGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAmplifyAppArn` <a name="parseAmplifyAppArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseAmplifyAppArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseAmplifyAppArn(arn: string)
```

Parses a amplify-app ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseAmplifyAppArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApigatewayArn` <a name="parseApigatewayArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseApigatewayArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseApigatewayArn(arn: string)
```

Parses a apigateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseApigatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApprunnerArn` <a name="parseApprunnerArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseApprunnerArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseApprunnerArn(arn: string)
```

Parses a apprunner ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseApprunnerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppsyncArn` <a name="parseAppsyncArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseAppsyncArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseAppsyncArn(arn: string)
```

Parses a appsync ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseAppsyncArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIpsetArn` <a name="parseIpsetArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseIpsetArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseIpsetArn(arn: string)
```

Parses a ipset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseIpsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLoadbalancerAppArn` <a name="parseLoadbalancerAppArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseLoadbalancerAppArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseLoadbalancerAppArn(arn: string)
```

Parses a loadbalancer/app/ ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseLoadbalancerAppArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedrulesetArn` <a name="parseManagedrulesetArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseManagedrulesetArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseManagedrulesetArn(arn: string)
```

Parses a managedruleset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseManagedrulesetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegexpatternsetArn` <a name="parseRegexpatternsetArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseRegexpatternsetArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseRegexpatternsetArn(arn: string)
```

Parses a regexpatternset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseRegexpatternsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRulegroupArn` <a name="parseRulegroupArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseRulegroupArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseRulegroupArn(arn: string)
```

Parses a rulegroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseRulegroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserpoolArn` <a name="parseUserpoolArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseUserpoolArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseUserpoolArn(arn: string)
```

Parses a userpool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseUserpoolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVerifiedAccessInstanceArn` <a name="parseVerifiedAccessInstanceArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseVerifiedAccessInstanceArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseVerifiedAccessInstanceArn(arn: string)
```

Parses a verified-access-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseVerifiedAccessInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWebaclArn` <a name="parseWebaclArn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseWebaclArn"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.parseWebaclArn(arn: string)
```

Parses a webacl ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wafv2.Wafv2Resources.parseWebaclArn.parameter.arn"></a>

- *Type:* string

---

##### `regexpatternset` <a name="regexpatternset" id="@cdk_utils/iam.wafv2.Wafv2Resources.regexpatternset"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.regexpatternset(props: Wafv2RegexpatternsetArnProps)
```

Builds an ARN for the regexpatternset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.regexpatternset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2RegexpatternsetArnProps">Wafv2RegexpatternsetArnProps</a>

---

##### `rulegroup` <a name="rulegroup" id="@cdk_utils/iam.wafv2.Wafv2Resources.rulegroup"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.rulegroup(props: Wafv2RulegroupArnProps)
```

Builds an ARN for the rulegroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.rulegroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2RulegroupArnProps">Wafv2RulegroupArnProps</a>

---

##### `userpool` <a name="userpool" id="@cdk_utils/iam.wafv2.Wafv2Resources.userpool"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.userpool(props: Wafv2UserpoolArnProps)
```

Builds an ARN for the userpool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.userpool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2UserpoolArnProps">Wafv2UserpoolArnProps</a>

---

##### `verifiedAccessInstance` <a name="verifiedAccessInstance" id="@cdk_utils/iam.wafv2.Wafv2Resources.verifiedAccessInstance"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.verifiedAccessInstance(props: Wafv2VerifiedAccessInstanceArnProps)
```

Builds an ARN for the verified-access-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.verifiedAccessInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2VerifiedAccessInstanceArnProps">Wafv2VerifiedAccessInstanceArnProps</a>

---

##### `webacl` <a name="webacl" id="@cdk_utils/iam.wafv2.Wafv2Resources.webacl"></a>

```typescript
import { wafv2 } from '@cdk_utils/iam'

wafv2.Wafv2Resources.webacl(props: Wafv2WebaclArnProps)
```

Builds an ARN for the webacl resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wafv2.Wafv2Resources.webacl.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wafv2.Wafv2WebaclArnProps">Wafv2WebaclArnProps</a>

---




