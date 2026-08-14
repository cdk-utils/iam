# `health_agent` Submodule <a name="`health_agent` Submodule" id="@cdk_utils/iam.health_agent"></a>


## Structs <a name="Structs" id="Structs"></a>

### HealthAgentAgentArnComponents <a name="HealthAgentAgentArnComponents" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents"></a>

Parsed components of a Agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentAgentArnComponents: health_agent.HealthAgentAgentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### HealthAgentAgentArnProps <a name="HealthAgentAgentArnProps" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnProps"></a>

Properties for building a Agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnProps.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentAgentArnProps: health_agent.HealthAgentAgentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentAgentArnProps.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentAgentArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentAgentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentAgentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentAgentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnProps.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component of the ARN.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentAgentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### HealthAgentDomainArnComponents <a name="HealthAgentDomainArnComponents" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnComponents"></a>

Parsed components of a Domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnComponents.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentDomainArnComponents: health_agent.HealthAgentDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentDomainArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### HealthAgentDomainArnProps <a name="HealthAgentDomainArnProps" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnProps"></a>

Properties for building a Domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnProps.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentDomainArnProps: health_agent.HealthAgentDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentDomainArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### HealthAgentIntegrationArnComponents <a name="HealthAgentIntegrationArnComponents" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents"></a>

Parsed components of a Integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentIntegrationArnComponents: health_agent.HealthAgentIntegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### HealthAgentIntegrationArnProps <a name="HealthAgentIntegrationArnProps" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps"></a>

Properties for building a Integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentIntegrationArnProps: health_agent.HealthAgentIntegrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### HealthAgentPatientInsightsJobArnComponents <a name="HealthAgentPatientInsightsJobArnComponents" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents"></a>

Parsed components of a PatientInsightsJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentPatientInsightsJobArnComponents: health_agent.HealthAgentPatientInsightsJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### HealthAgentPatientInsightsJobArnProps <a name="HealthAgentPatientInsightsJobArnProps" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps"></a>

Properties for building a PatientInsightsJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentPatientInsightsJobArnProps: health_agent.HealthAgentPatientInsightsJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### HealthAgentSessionArnComponents <a name="HealthAgentSessionArnComponents" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents"></a>

Parsed components of a Session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentSessionArnComponents: health_agent.HealthAgentSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnComponents.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component.

---

### HealthAgentSessionArnProps <a name="HealthAgentSessionArnProps" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnProps"></a>

Properties for building a Session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnProps.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentSessionArnProps: health_agent.HealthAgentSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSessionArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSessionArnProps.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnProps.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### HealthAgentSubscriptionArnComponents <a name="HealthAgentSubscriptionArnComponents" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents"></a>

Parsed components of a Subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentSubscriptionArnComponents: health_agent.HealthAgentSubscriptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The SubscriptionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnComponents.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The SubscriptionId component.

---

### HealthAgentSubscriptionArnProps <a name="HealthAgentSubscriptionArnProps" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps"></a>

Properties for building a Subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

const healthAgentSubscriptionArnProps: health_agent.HealthAgentSubscriptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The SubscriptionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The SubscriptionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### HealthAgentActions <a name="HealthAgentActions" id="@cdk_utils/iam.health_agent.HealthAgentActions"></a>

IAM action constants for the health-agent service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.health_agent.HealthAgentActions.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

new health_agent.HealthAgentActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetAgent">actionGetAgent</a></code> | <code>string</code> | [Read] health-agent:GetAgent. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetCareTeamProvider">actionGetCareTeamProvider</a></code> | <code>string</code> | [Read] health-agent:GetCareTeamProvider. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetDomain">actionGetDomain</a></code> | <code>string</code> | [Read] health-agent:GetDomain. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetDomainAnalytics">actionGetDomainAnalytics</a></code> | <code>string</code> | [Read] health-agent:GetDomainAnalytics. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetIntegration">actionGetIntegration</a></code> | <code>string</code> | [Read] health-agent:GetIntegration. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetMedicalScribeListeningSession">actionGetMedicalScribeListeningSession</a></code> | <code>string</code> | [Read] health-agent:GetMedicalScribeListeningSession. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetPatient">actionGetPatient</a></code> | <code>string</code> | [Read] health-agent:GetPatient. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetPatientInsightsJob">actionGetPatientInsightsJob</a></code> | <code>string</code> | [Read] health-agent:GetPatientInsightsJob. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetPractitioner">actionGetPractitioner</a></code> | <code>string</code> | [Read] health-agent:GetPractitioner. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetSessionContext">actionGetSessionContext</a></code> | <code>string</code> | [Read] health-agent:GetSessionContext. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetSubscription">actionGetSubscription</a></code> | <code>string</code> | [Read] health-agent:GetSubscription. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ActivateSubscription">ActivateSubscription</a></code> | <code>string</code> | [Write] health-agent:ActivateSubscription. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.CancelAppointment">CancelAppointment</a></code> | <code>string</code> | [Write] health-agent:CancelAppointment. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.CreateAgent">CreateAgent</a></code> | <code>string</code> | [Write] health-agent:CreateAgent. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.CreateDomain">CreateDomain</a></code> | <code>string</code> | [Write] health-agent:CreateDomain. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.CreateIntegration">CreateIntegration</a></code> | <code>string</code> | [Write] health-agent:CreateIntegration. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.CreateSession">CreateSession</a></code> | <code>string</code> | [Write] health-agent:CreateSession. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.CreateSubscription">CreateSubscription</a></code> | <code>string</code> | [Write] health-agent:CreateSubscription. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.DeactivateSubscription">DeactivateSubscription</a></code> | <code>string</code> | [Write] health-agent:DeactivateSubscription. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.DeleteAgent">DeleteAgent</a></code> | <code>string</code> | [Write] health-agent:DeleteAgent. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] health-agent:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string</code> | [Write] health-agent:DeleteIntegration. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.InvokeAgent">InvokeAgent</a></code> | <code>string</code> | [Write] health-agent:InvokeAgent. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ListAgents">ListAgents</a></code> | <code>string</code> | [List] health-agent:ListAgents. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ListAppointmentSlots">ListAppointmentSlots</a></code> | <code>string</code> | [Read] health-agent:ListAppointmentSlots. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] health-agent:ListDomains. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ListIntegrations">ListIntegrations</a></code> | <code>string</code> | [List] health-agent:ListIntegrations. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ListPatientAppointments">ListPatientAppointments</a></code> | <code>string</code> | [Read] health-agent:ListPatientAppointments. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ListPatientInsuranceCoverages">ListPatientInsuranceCoverages</a></code> | <code>string</code> | [Read] health-agent:ListPatientInsuranceCoverages. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ListPatientMedications">ListPatientMedications</a></code> | <code>string</code> | [Read] health-agent:ListPatientMedications. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ListProviders">ListProviders</a></code> | <code>string</code> | [Read] health-agent:ListProviders. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ListSessionRecords">ListSessionRecords</a></code> | <code>string</code> | [List] health-agent:ListSessionRecords. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string</code> | [List] health-agent:ListSubscriptions. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] health-agent:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.MatchPatient">MatchPatient</a></code> | <code>string</code> | [Read] health-agent:MatchPatient. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.PublishAgent">PublishAgent</a></code> | <code>string</code> | [Write] health-agent:PublishAgent. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.RescheduleAppointment">RescheduleAppointment</a></code> | <code>string</code> | [Write] health-agent:RescheduleAppointment. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ResetPassword">ResetPassword</a></code> | <code>string</code> | [Write] health-agent:ResetPassword. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.ScheduleAppointment">ScheduleAppointment</a></code> | <code>string</code> | [Write] health-agent:ScheduleAppointment. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.StartMedicalScribeListeningSession">StartMedicalScribeListeningSession</a></code> | <code>string</code> | [Write] health-agent:StartMedicalScribeListeningSession. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.StartPatientInsightsJob">StartPatientInsightsJob</a></code> | <code>string</code> | [Write] health-agent:StartPatientInsightsJob. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.SubmitMedicationRenewal">SubmitMedicationRenewal</a></code> | <code>string</code> | [Write] health-agent:SubmitMedicationRenewal. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] health-agent:TagResource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] health-agent:UntagResource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.UpdateAgent">UpdateAgent</a></code> | <code>string</code> | [Write] health-agent:UpdateAgent. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.UpdateIntegration">UpdateIntegration</a></code> | <code>string</code> | [Write] health-agent:UpdateIntegration. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentActions.property.UpdateSession">UpdateSession</a></code> | <code>string</code> | [Write] health-agent:UpdateSession. |

---

##### `actionGetAgent`<sup>Required</sup> <a name="actionGetAgent" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetAgent"></a>

```typescript
public readonly actionGetAgent: string;
```

- *Type:* string

[Read] health-agent:GetAgent.

---

##### `actionGetCareTeamProvider`<sup>Required</sup> <a name="actionGetCareTeamProvider" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetCareTeamProvider"></a>

```typescript
public readonly actionGetCareTeamProvider: string;
```

- *Type:* string

[Read] health-agent:GetCareTeamProvider.

---

##### `actionGetDomain`<sup>Required</sup> <a name="actionGetDomain" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetDomain"></a>

```typescript
public readonly actionGetDomain: string;
```

- *Type:* string

[Read] health-agent:GetDomain.

---

##### `actionGetDomainAnalytics`<sup>Required</sup> <a name="actionGetDomainAnalytics" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetDomainAnalytics"></a>

```typescript
public readonly actionGetDomainAnalytics: string;
```

- *Type:* string

[Read] health-agent:GetDomainAnalytics.

---

##### `actionGetIntegration`<sup>Required</sup> <a name="actionGetIntegration" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetIntegration"></a>

```typescript
public readonly actionGetIntegration: string;
```

- *Type:* string

[Read] health-agent:GetIntegration.

---

##### `actionGetMedicalScribeListeningSession`<sup>Required</sup> <a name="actionGetMedicalScribeListeningSession" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetMedicalScribeListeningSession"></a>

```typescript
public readonly actionGetMedicalScribeListeningSession: string;
```

- *Type:* string

[Read] health-agent:GetMedicalScribeListeningSession.

---

##### `actionGetPatient`<sup>Required</sup> <a name="actionGetPatient" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetPatient"></a>

```typescript
public readonly actionGetPatient: string;
```

- *Type:* string

[Read] health-agent:GetPatient.

---

##### `actionGetPatientInsightsJob`<sup>Required</sup> <a name="actionGetPatientInsightsJob" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetPatientInsightsJob"></a>

```typescript
public readonly actionGetPatientInsightsJob: string;
```

- *Type:* string

[Read] health-agent:GetPatientInsightsJob.

---

##### `actionGetPractitioner`<sup>Required</sup> <a name="actionGetPractitioner" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetPractitioner"></a>

```typescript
public readonly actionGetPractitioner: string;
```

- *Type:* string

[Read] health-agent:GetPractitioner.

---

##### `actionGetSessionContext`<sup>Required</sup> <a name="actionGetSessionContext" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetSessionContext"></a>

```typescript
public readonly actionGetSessionContext: string;
```

- *Type:* string

[Read] health-agent:GetSessionContext.

---

##### `actionGetSubscription`<sup>Required</sup> <a name="actionGetSubscription" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.actionGetSubscription"></a>

```typescript
public readonly actionGetSubscription: string;
```

- *Type:* string

[Read] health-agent:GetSubscription.

---

##### `ActivateSubscription`<sup>Required</sup> <a name="ActivateSubscription" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ActivateSubscription"></a>

```typescript
public readonly ActivateSubscription: string;
```

- *Type:* string

[Write] health-agent:ActivateSubscription.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelAppointment`<sup>Required</sup> <a name="CancelAppointment" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.CancelAppointment"></a>

```typescript
public readonly CancelAppointment: string;
```

- *Type:* string

[Write] health-agent:CancelAppointment.

---

##### `CreateAgent`<sup>Required</sup> <a name="CreateAgent" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.CreateAgent"></a>

```typescript
public readonly CreateAgent: string;
```

- *Type:* string

[Write] health-agent:CreateAgent.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string;
```

- *Type:* string

[Write] health-agent:CreateDomain.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string;
```

- *Type:* string

[Write] health-agent:CreateIntegration.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.CreateSession"></a>

```typescript
public readonly CreateSession: string;
```

- *Type:* string

[Write] health-agent:CreateSession.

---

##### `CreateSubscription`<sup>Required</sup> <a name="CreateSubscription" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.CreateSubscription"></a>

```typescript
public readonly CreateSubscription: string;
```

- *Type:* string

[Write] health-agent:CreateSubscription.

---

##### `DeactivateSubscription`<sup>Required</sup> <a name="DeactivateSubscription" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.DeactivateSubscription"></a>

```typescript
public readonly DeactivateSubscription: string;
```

- *Type:* string

[Write] health-agent:DeactivateSubscription.

---

##### `DeleteAgent`<sup>Required</sup> <a name="DeleteAgent" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.DeleteAgent"></a>

```typescript
public readonly DeleteAgent: string;
```

- *Type:* string

[Write] health-agent:DeleteAgent.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] health-agent:DeleteDomain.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string;
```

- *Type:* string

[Write] health-agent:DeleteIntegration.

---

##### `InvokeAgent`<sup>Required</sup> <a name="InvokeAgent" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.InvokeAgent"></a>

```typescript
public readonly InvokeAgent: string;
```

- *Type:* string

[Write] health-agent:InvokeAgent.

---

##### `ListAgents`<sup>Required</sup> <a name="ListAgents" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ListAgents"></a>

```typescript
public readonly ListAgents: string;
```

- *Type:* string

[List] health-agent:ListAgents.

---

##### `ListAppointmentSlots`<sup>Required</sup> <a name="ListAppointmentSlots" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ListAppointmentSlots"></a>

```typescript
public readonly ListAppointmentSlots: string;
```

- *Type:* string

[Read] health-agent:ListAppointmentSlots.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] health-agent:ListDomains.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string;
```

- *Type:* string

[List] health-agent:ListIntegrations.

---

##### `ListPatientAppointments`<sup>Required</sup> <a name="ListPatientAppointments" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ListPatientAppointments"></a>

```typescript
public readonly ListPatientAppointments: string;
```

- *Type:* string

[Read] health-agent:ListPatientAppointments.

---

##### `ListPatientInsuranceCoverages`<sup>Required</sup> <a name="ListPatientInsuranceCoverages" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ListPatientInsuranceCoverages"></a>

```typescript
public readonly ListPatientInsuranceCoverages: string;
```

- *Type:* string

[Read] health-agent:ListPatientInsuranceCoverages.

---

##### `ListPatientMedications`<sup>Required</sup> <a name="ListPatientMedications" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ListPatientMedications"></a>

```typescript
public readonly ListPatientMedications: string;
```

- *Type:* string

[Read] health-agent:ListPatientMedications.

---

##### `ListProviders`<sup>Required</sup> <a name="ListProviders" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ListProviders"></a>

```typescript
public readonly ListProviders: string;
```

- *Type:* string

[Read] health-agent:ListProviders.

---

##### `ListSessionRecords`<sup>Required</sup> <a name="ListSessionRecords" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ListSessionRecords"></a>

```typescript
public readonly ListSessionRecords: string;
```

- *Type:* string

[List] health-agent:ListSessionRecords.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string;
```

- *Type:* string

[List] health-agent:ListSubscriptions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] health-agent:ListTagsForResource.

---

##### `MatchPatient`<sup>Required</sup> <a name="MatchPatient" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.MatchPatient"></a>

```typescript
public readonly MatchPatient: string;
```

- *Type:* string

[Read] health-agent:MatchPatient.

---

##### `PublishAgent`<sup>Required</sup> <a name="PublishAgent" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.PublishAgent"></a>

```typescript
public readonly PublishAgent: string;
```

- *Type:* string

[Write] health-agent:PublishAgent.

---

##### `RescheduleAppointment`<sup>Required</sup> <a name="RescheduleAppointment" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.RescheduleAppointment"></a>

```typescript
public readonly RescheduleAppointment: string;
```

- *Type:* string

[Write] health-agent:RescheduleAppointment.

---

##### `ResetPassword`<sup>Required</sup> <a name="ResetPassword" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ResetPassword"></a>

```typescript
public readonly ResetPassword: string;
```

- *Type:* string

[Write] health-agent:ResetPassword.

---

##### `ScheduleAppointment`<sup>Required</sup> <a name="ScheduleAppointment" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.ScheduleAppointment"></a>

```typescript
public readonly ScheduleAppointment: string;
```

- *Type:* string

[Write] health-agent:ScheduleAppointment.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartMedicalScribeListeningSession`<sup>Required</sup> <a name="StartMedicalScribeListeningSession" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.StartMedicalScribeListeningSession"></a>

```typescript
public readonly StartMedicalScribeListeningSession: string;
```

- *Type:* string

[Write] health-agent:StartMedicalScribeListeningSession.

---

##### `StartPatientInsightsJob`<sup>Required</sup> <a name="StartPatientInsightsJob" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.StartPatientInsightsJob"></a>

```typescript
public readonly StartPatientInsightsJob: string;
```

- *Type:* string

[Write] health-agent:StartPatientInsightsJob.

---

##### `SubmitMedicationRenewal`<sup>Required</sup> <a name="SubmitMedicationRenewal" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.SubmitMedicationRenewal"></a>

```typescript
public readonly SubmitMedicationRenewal: string;
```

- *Type:* string

[Write] health-agent:SubmitMedicationRenewal.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] health-agent:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] health-agent:UntagResource.

---

##### `UpdateAgent`<sup>Required</sup> <a name="UpdateAgent" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.UpdateAgent"></a>

```typescript
public readonly UpdateAgent: string;
```

- *Type:* string

[Write] health-agent:UpdateAgent.

---

##### `UpdateIntegration`<sup>Required</sup> <a name="UpdateIntegration" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.UpdateIntegration"></a>

```typescript
public readonly UpdateIntegration: string;
```

- *Type:* string

[Write] health-agent:UpdateIntegration.

---

##### `UpdateSession`<sup>Required</sup> <a name="UpdateSession" id="@cdk_utils/iam.health_agent.HealthAgentActions.property.UpdateSession"></a>

```typescript
public readonly UpdateSession: string;
```

- *Type:* string

[Write] health-agent:UpdateSession.

---

### HealthAgentConditions <a name="HealthAgentConditions" id="@cdk_utils/iam.health_agent.HealthAgentConditions"></a>

Condition key constants and builders for health-agent.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.health_agent.HealthAgentConditions.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

new health_agent.HealthAgentConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.health_agent.HealthAgentConditions.requestTag"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.health_agent.HealthAgentConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.health_agent.HealthAgentConditions.resourceTag"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.health_agent.HealthAgentConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.health_agent.HealthAgentConditions.tagKeys"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.health_agent.HealthAgentConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentConditions.property.CreateDomainConditionKeys">CreateDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDomain action. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.health_agent.HealthAgentConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.health_agent.HealthAgentConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.health_agent.HealthAgentConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDomainConditionKeys`<sup>Required</sup> <a name="CreateDomainConditionKeys" id="@cdk_utils/iam.health_agent.HealthAgentConditions.property.CreateDomainConditionKeys"></a>

```typescript
public readonly CreateDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDomain action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.health_agent.HealthAgentConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.health_agent.HealthAgentConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### HealthAgentOperations <a name="HealthAgentOperations" id="@cdk_utils/iam.health_agent.HealthAgentOperations"></a>

API operation to required IAM actions mapping for health-agent.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.health_agent.HealthAgentOperations.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

new health_agent.HealthAgentOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.ActivateSubscription">ActivateSubscription</a></code> | <code>string[]</code> | IAM actions required for the ActivateSubscription API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.CreateDomain">CreateDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateDomain API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.CreateSubscription">CreateSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscription API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.DeactivateSubscription">DeactivateSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeactivateSubscription API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.DeleteDomain">DeleteDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomain API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.ListDomains">ListDomains</a></code> | <code>string[]</code> | IAM actions required for the ListDomains API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.opGetDomain">opGetDomain</a></code> | <code>string[]</code> | IAM actions required for the GetDomain API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.opGetMedicalScribeListeningSession">opGetMedicalScribeListeningSession</a></code> | <code>string[]</code> | IAM actions required for the GetMedicalScribeListeningSession API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.opGetPatientInsightsJob">opGetPatientInsightsJob</a></code> | <code>string[]</code> | IAM actions required for the GetPatientInsightsJob API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.opGetSubscription">opGetSubscription</a></code> | <code>string[]</code> | IAM actions required for the GetSubscription API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.StartMedicalScribeListeningSession">StartMedicalScribeListeningSession</a></code> | <code>string[]</code> | IAM actions required for the StartMedicalScribeListeningSession API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.StartPatientInsightsJob">StartPatientInsightsJob</a></code> | <code>string[]</code> | IAM actions required for the StartPatientInsightsJob API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `ActivateSubscription`<sup>Required</sup> <a name="ActivateSubscription" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.ActivateSubscription"></a>

```typescript
public readonly ActivateSubscription: string[];
```

- *Type:* string[]

IAM actions required for the ActivateSubscription API call.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomain API call.

---

##### `CreateSubscription`<sup>Required</sup> <a name="CreateSubscription" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.CreateSubscription"></a>

```typescript
public readonly CreateSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscription API call.

---

##### `DeactivateSubscription`<sup>Required</sup> <a name="DeactivateSubscription" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.DeactivateSubscription"></a>

```typescript
public readonly DeactivateSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeactivateSubscription API call.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomain API call.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.ListDomains"></a>

```typescript
public readonly ListDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListDomains API call.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetDomain`<sup>Required</sup> <a name="opGetDomain" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.opGetDomain"></a>

```typescript
public readonly opGetDomain: string[];
```

- *Type:* string[]

IAM actions required for the GetDomain API call.

---

##### `opGetMedicalScribeListeningSession`<sup>Required</sup> <a name="opGetMedicalScribeListeningSession" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.opGetMedicalScribeListeningSession"></a>

```typescript
public readonly opGetMedicalScribeListeningSession: string[];
```

- *Type:* string[]

IAM actions required for the GetMedicalScribeListeningSession API call.

---

##### `opGetPatientInsightsJob`<sup>Required</sup> <a name="opGetPatientInsightsJob" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.opGetPatientInsightsJob"></a>

```typescript
public readonly opGetPatientInsightsJob: string[];
```

- *Type:* string[]

IAM actions required for the GetPatientInsightsJob API call.

---

##### `opGetSubscription`<sup>Required</sup> <a name="opGetSubscription" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.opGetSubscription"></a>

```typescript
public readonly opGetSubscription: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscription API call.

---

##### `StartMedicalScribeListeningSession`<sup>Required</sup> <a name="StartMedicalScribeListeningSession" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.StartMedicalScribeListeningSession"></a>

```typescript
public readonly StartMedicalScribeListeningSession: string[];
```

- *Type:* string[]

IAM actions required for the StartMedicalScribeListeningSession API call.

---

##### `StartPatientInsightsJob`<sup>Required</sup> <a name="StartPatientInsightsJob" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.StartPatientInsightsJob"></a>

```typescript
public readonly StartPatientInsightsJob: string[];
```

- *Type:* string[]

IAM actions required for the StartPatientInsightsJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.health_agent.HealthAgentOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### HealthAgentResources <a name="HealthAgentResources" id="@cdk_utils/iam.health_agent.HealthAgentResources"></a>

ARN builders, validators, and parsers for health-agent resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.health_agent.HealthAgentResources.Initializer"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

new health_agent.HealthAgentResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.agent">agent</a></code> | Builds an ARN for the Agent resource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.domain">domain</a></code> | Builds an ARN for the Domain resource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.integration">integration</a></code> | Builds an ARN for the Integration resource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.isValidAgentArn">isValidAgentArn</a></code> | Validates whether a string is a valid ARN for the Agent resource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the Domain resource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.isValidIntegrationArn">isValidIntegrationArn</a></code> | Validates whether a string is a valid ARN for the Integration resource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.isValidPatientInsightsJobArn">isValidPatientInsightsJobArn</a></code> | Validates whether a string is a valid ARN for the PatientInsightsJob resource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.isValidSessionArn">isValidSessionArn</a></code> | Validates whether a string is a valid ARN for the Session resource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.isValidSubscriptionArn">isValidSubscriptionArn</a></code> | Validates whether a string is a valid ARN for the Subscription resource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.parseAgentArn">parseAgentArn</a></code> | Parses a Agent ARN into its components. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.parseDomainArn">parseDomainArn</a></code> | Parses a Domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.parseIntegrationArn">parseIntegrationArn</a></code> | Parses a Integration ARN into its components. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.parsePatientInsightsJobArn">parsePatientInsightsJobArn</a></code> | Parses a PatientInsightsJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.parseSessionArn">parseSessionArn</a></code> | Parses a Session ARN into its components. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.parseSubscriptionArn">parseSubscriptionArn</a></code> | Parses a Subscription ARN into its components. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.patientInsightsJob">patientInsightsJob</a></code> | Builds an ARN for the PatientInsightsJob resource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.session">session</a></code> | Builds an ARN for the Session resource. |
| <code><a href="#@cdk_utils/iam.health_agent.HealthAgentResources.subscription">subscription</a></code> | Builds an ARN for the Subscription resource. |

---

##### `agent` <a name="agent" id="@cdk_utils/iam.health_agent.HealthAgentResources.agent"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.agent(props: HealthAgentAgentArnProps)
```

Builds an ARN for the Agent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.health_agent.HealthAgentResources.agent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.health_agent.HealthAgentAgentArnProps">HealthAgentAgentArnProps</a>

---

##### `domain` <a name="domain" id="@cdk_utils/iam.health_agent.HealthAgentResources.domain"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.domain(props: HealthAgentDomainArnProps)
```

Builds an ARN for the Domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.health_agent.HealthAgentResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.health_agent.HealthAgentDomainArnProps">HealthAgentDomainArnProps</a>

---

##### `integration` <a name="integration" id="@cdk_utils/iam.health_agent.HealthAgentResources.integration"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.integration(props: HealthAgentIntegrationArnProps)
```

Builds an ARN for the Integration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.health_agent.HealthAgentResources.integration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.health_agent.HealthAgentIntegrationArnProps">HealthAgentIntegrationArnProps</a>

---

##### `isValidAgentArn` <a name="isValidAgentArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidAgentArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.isValidAgentArn(arn: string)
```

Validates whether a string is a valid ARN for the Agent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidDomainArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the Domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationArn` <a name="isValidIntegrationArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidIntegrationArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.isValidIntegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the Integration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPatientInsightsJobArn` <a name="isValidPatientInsightsJobArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidPatientInsightsJobArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.isValidPatientInsightsJobArn(arn: string)
```

Validates whether a string is a valid ARN for the PatientInsightsJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidPatientInsightsJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSessionArn` <a name="isValidSessionArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidSessionArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.isValidSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the Session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSubscriptionArn` <a name="isValidSubscriptionArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidSubscriptionArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.isValidSubscriptionArn(arn: string)
```

Validates whether a string is a valid ARN for the Subscription resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.isValidSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAgentArn` <a name="parseAgentArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parseAgentArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.parseAgentArn(arn: string)
```

Parses a Agent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parseAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parseDomainArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.parseDomainArn(arn: string)
```

Parses a Domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationArn` <a name="parseIntegrationArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parseIntegrationArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.parseIntegrationArn(arn: string)
```

Parses a Integration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parseIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePatientInsightsJobArn` <a name="parsePatientInsightsJobArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parsePatientInsightsJobArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.parsePatientInsightsJobArn(arn: string)
```

Parses a PatientInsightsJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parsePatientInsightsJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionArn` <a name="parseSessionArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parseSessionArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.parseSessionArn(arn: string)
```

Parses a Session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parseSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubscriptionArn` <a name="parseSubscriptionArn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parseSubscriptionArn"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.parseSubscriptionArn(arn: string)
```

Parses a Subscription ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.health_agent.HealthAgentResources.parseSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `patientInsightsJob` <a name="patientInsightsJob" id="@cdk_utils/iam.health_agent.HealthAgentResources.patientInsightsJob"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.patientInsightsJob(props: HealthAgentPatientInsightsJobArnProps)
```

Builds an ARN for the PatientInsightsJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.health_agent.HealthAgentResources.patientInsightsJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.health_agent.HealthAgentPatientInsightsJobArnProps">HealthAgentPatientInsightsJobArnProps</a>

---

##### `session` <a name="session" id="@cdk_utils/iam.health_agent.HealthAgentResources.session"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.session(props: HealthAgentSessionArnProps)
```

Builds an ARN for the Session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.health_agent.HealthAgentResources.session.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.health_agent.HealthAgentSessionArnProps">HealthAgentSessionArnProps</a>

---

##### `subscription` <a name="subscription" id="@cdk_utils/iam.health_agent.HealthAgentResources.subscription"></a>

```typescript
import { health_agent } from '@cdk_utils/iam'

health_agent.HealthAgentResources.subscription(props: HealthAgentSubscriptionArnProps)
```

Builds an ARN for the Subscription resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.health_agent.HealthAgentResources.subscription.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.health_agent.HealthAgentSubscriptionArnProps">HealthAgentSubscriptionArnProps</a>

---




