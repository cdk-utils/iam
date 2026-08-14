# `securityagent` Submodule <a name="`securityagent` Submodule" id="@cdk_utils/iam.securityagent"></a>


## Structs <a name="Structs" id="Structs"></a>

### SecurityagentAgentSpaceArnComponents <a name="SecurityagentAgentSpaceArnComponents" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnComponents"></a>

Parsed components of a AgentSpace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnComponents.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentAgentSpaceArnComponents: securityagent.SecurityagentAgentSpaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnComponents.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnComponents.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityagentAgentSpaceArnProps <a name="SecurityagentAgentSpaceArnProps" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnProps"></a>

Properties for building a AgentSpace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnProps.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentAgentSpaceArnProps: securityagent.SecurityagentAgentSpaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnProps.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnProps.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityagentApplicationArnComponents <a name="SecurityagentApplicationArnComponents" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnComponents"></a>

Parsed components of a Application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnComponents.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentApplicationArnComponents: securityagent.SecurityagentApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityagentApplicationArnProps <a name="SecurityagentApplicationArnProps" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnProps"></a>

Properties for building a Application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnProps.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentApplicationArnProps: securityagent.SecurityagentApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityagentIntegrationArnComponents <a name="SecurityagentIntegrationArnComponents" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnComponents"></a>

Parsed components of a Integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnComponents.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentIntegrationArnComponents: securityagent.SecurityagentIntegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentIntegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentIntegrationArnComponents.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentIntegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentIntegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnComponents.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityagentIntegrationArnProps <a name="SecurityagentIntegrationArnProps" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnProps"></a>

Properties for building a Integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnProps.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentIntegrationArnProps: securityagent.SecurityagentIntegrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentIntegrationArnProps.property.integrationId">integrationId</a></code> | <code>string</code> | The IntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentIntegrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentIntegrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentIntegrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnProps.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

The IntegrationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentIntegrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityagentPrivateConnectionArnComponents <a name="SecurityagentPrivateConnectionArnComponents" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnComponents"></a>

Parsed components of a PrivateConnection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnComponents.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentPrivateConnectionArnComponents: securityagent.SecurityagentPrivateConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnComponents.property.privateConnectionName">privateConnectionName</a></code> | <code>string</code> | The PrivateConnectionName component. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `privateConnectionName`<sup>Required</sup> <a name="privateConnectionName" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnComponents.property.privateConnectionName"></a>

```typescript
public readonly privateConnectionName: string;
```

- *Type:* string

The PrivateConnectionName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityagentPrivateConnectionArnProps <a name="SecurityagentPrivateConnectionArnProps" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnProps"></a>

Properties for building a PrivateConnection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnProps.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentPrivateConnectionArnProps: securityagent.SecurityagentPrivateConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnProps.property.privateConnectionName">privateConnectionName</a></code> | <code>string</code> | The PrivateConnectionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `privateConnectionName`<sup>Required</sup> <a name="privateConnectionName" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnProps.property.privateConnectionName"></a>

```typescript
public readonly privateConnectionName: string;
```

- *Type:* string

The PrivateConnectionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityagentSecurityRequirementPackArnComponents <a name="SecurityagentSecurityRequirementPackArnComponents" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnComponents"></a>

Parsed components of a SecurityRequirementPack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnComponents.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentSecurityRequirementPackArnComponents: securityagent.SecurityagentSecurityRequirementPackArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnComponents.property.securityRequirementPackId">securityRequirementPackId</a></code> | <code>string</code> | The SecurityRequirementPackId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `securityRequirementPackId`<sup>Required</sup> <a name="securityRequirementPackId" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnComponents.property.securityRequirementPackId"></a>

```typescript
public readonly securityRequirementPackId: string;
```

- *Type:* string

The SecurityRequirementPackId component.

---

### SecurityagentSecurityRequirementPackArnProps <a name="SecurityagentSecurityRequirementPackArnProps" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnProps"></a>

Properties for building a SecurityRequirementPack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnProps.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentSecurityRequirementPackArnProps: securityagent.SecurityagentSecurityRequirementPackArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnProps.property.securityRequirementPackId">securityRequirementPackId</a></code> | <code>string</code> | The SecurityRequirementPackId component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `securityRequirementPackId`<sup>Required</sup> <a name="securityRequirementPackId" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnProps.property.securityRequirementPackId"></a>

```typescript
public readonly securityRequirementPackId: string;
```

- *Type:* string

The SecurityRequirementPackId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityagentTargetDomainArnComponents <a name="SecurityagentTargetDomainArnComponents" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnComponents"></a>

Parsed components of a TargetDomain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnComponents.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentTargetDomainArnComponents: securityagent.SecurityagentTargetDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnComponents.property.targetDomainId">targetDomainId</a></code> | <code>string</code> | The TargetDomainId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `targetDomainId`<sup>Required</sup> <a name="targetDomainId" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnComponents.property.targetDomainId"></a>

```typescript
public readonly targetDomainId: string;
```

- *Type:* string

The TargetDomainId component.

---

### SecurityagentTargetDomainArnProps <a name="SecurityagentTargetDomainArnProps" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnProps"></a>

Properties for building a TargetDomain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnProps.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

const securityagentTargetDomainArnProps: securityagent.SecurityagentTargetDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnProps.property.targetDomainId">targetDomainId</a></code> | <code>string</code> | The TargetDomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `targetDomainId`<sup>Required</sup> <a name="targetDomainId" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnProps.property.targetDomainId"></a>

```typescript
public readonly targetDomainId: string;
```

- *Type:* string

The TargetDomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentActions <a name="SecurityagentActions" id="@cdk_utils/iam.securityagent.SecurityagentActions"></a>

IAM action constants for the securityagent service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securityagent.SecurityagentActions.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

new securityagent.SecurityagentActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] securityagent:GetApplication. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetArtifact">actionGetArtifact</a></code> | <code>string</code> | [Read] securityagent:GetArtifact. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetDesignReview">actionGetDesignReview</a></code> | <code>string</code> | [Read] securityagent:GetDesignReview. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetDesignReviewArtifact">actionGetDesignReviewArtifact</a></code> | <code>string</code> | [Read] securityagent:GetDesignReviewArtifact. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetDesignReviewFeedback">actionGetDesignReviewFeedback</a></code> | <code>string</code> | [Read] securityagent:GetDesignReviewFeedback. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetIntegration">actionGetIntegration</a></code> | <code>string</code> | [Read] securityagent:GetIntegration. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetProviderRegistrationManifest">actionGetProviderRegistrationManifest</a></code> | <code>string</code> | [Read] securityagent:GetProviderRegistrationManifest. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetSecurityRequirement">actionGetSecurityRequirement</a></code> | <code>string</code> | [Read] securityagent:GetSecurityRequirement. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetSecurityRequirementPack">actionGetSecurityRequirementPack</a></code> | <code>string</code> | [Read] securityagent:GetSecurityRequirementPack. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.AddArtifact">AddArtifact</a></code> | <code>string</code> | [Write] securityagent:AddArtifact. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchCreateSecurityRequirements">BatchCreateSecurityRequirements</a></code> | <code>string</code> | [Write] securityagent:BatchCreateSecurityRequirements. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchDeleteCodeReviews">BatchDeleteCodeReviews</a></code> | <code>string</code> | [Write] securityagent:BatchDeleteCodeReviews. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchDeletePentests">BatchDeletePentests</a></code> | <code>string</code> | [Write] securityagent:BatchDeletePentests. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchDeleteSecurityRequirements">BatchDeleteSecurityRequirements</a></code> | <code>string</code> | [Write] securityagent:BatchDeleteSecurityRequirements. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchDeleteThreatModels">BatchDeleteThreatModels</a></code> | <code>string</code> | [Write] securityagent:BatchDeleteThreatModels. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchDeleteThreats">BatchDeleteThreats</a></code> | <code>string</code> | [Write] securityagent:BatchDeleteThreats. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetAgentSpaces">BatchGetAgentSpaces</a></code> | <code>string</code> | [Read] securityagent:BatchGetAgentSpaces. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetArtifactMetadata">BatchGetArtifactMetadata</a></code> | <code>string</code> | [Read] securityagent:BatchGetArtifactMetadata. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetCodeReviewJobs">BatchGetCodeReviewJobs</a></code> | <code>string</code> | [Read] securityagent:BatchGetCodeReviewJobs. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetCodeReviewJobTasks">BatchGetCodeReviewJobTasks</a></code> | <code>string</code> | [Read] securityagent:BatchGetCodeReviewJobTasks. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetCodeReviews">BatchGetCodeReviews</a></code> | <code>string</code> | [Read] securityagent:BatchGetCodeReviews. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetFindings">BatchGetFindings</a></code> | <code>string</code> | [Read] securityagent:BatchGetFindings. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetPentestJobContentMetadata">BatchGetPentestJobContentMetadata</a></code> | <code>string</code> | [Read] securityagent:BatchGetPentestJobContentMetadata. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetPentestJobs">BatchGetPentestJobs</a></code> | <code>string</code> | [Read] securityagent:BatchGetPentestJobs. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetPentestJobTasks">BatchGetPentestJobTasks</a></code> | <code>string</code> | [Read] securityagent:BatchGetPentestJobTasks. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetPentests">BatchGetPentests</a></code> | <code>string</code> | [Read] securityagent:BatchGetPentests. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetSecurityRequirements">BatchGetSecurityRequirements</a></code> | <code>string</code> | [Read] securityagent:BatchGetSecurityRequirements. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetTargetDomains">BatchGetTargetDomains</a></code> | <code>string</code> | [Read] securityagent:BatchGetTargetDomains. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetThreatModelJobs">BatchGetThreatModelJobs</a></code> | <code>string</code> | [Read] securityagent:BatchGetThreatModelJobs. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetThreatModelJobTasks">BatchGetThreatModelJobTasks</a></code> | <code>string</code> | [Read] securityagent:BatchGetThreatModelJobTasks. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetThreatModels">BatchGetThreatModels</a></code> | <code>string</code> | [Read] securityagent:BatchGetThreatModels. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetThreats">BatchGetThreats</a></code> | <code>string</code> | [Read] securityagent:BatchGetThreats. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchUpdateSecurityRequirements">BatchUpdateSecurityRequirements</a></code> | <code>string</code> | [Write] securityagent:BatchUpdateSecurityRequirements. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateAgentSpace">CreateAgentSpace</a></code> | <code>string</code> | [Write] securityagent:CreateAgentSpace. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] securityagent:CreateApplication. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateCodeReview">CreateCodeReview</a></code> | <code>string</code> | [Write] securityagent:CreateCodeReview. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateDesignReview">CreateDesignReview</a></code> | <code>string</code> | [Write] securityagent:CreateDesignReview. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateIntegration">CreateIntegration</a></code> | <code>string</code> | [Write] securityagent:CreateIntegration. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateMembership">CreateMembership</a></code> | <code>string</code> | [Write] securityagent:CreateMembership. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateOneTimeLoginSession">CreateOneTimeLoginSession</a></code> | <code>string</code> | [Write] securityagent:CreateOneTimeLoginSession. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreatePentest">CreatePentest</a></code> | <code>string</code> | [Write] securityagent:CreatePentest. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreatePrivateConnection">CreatePrivateConnection</a></code> | <code>string</code> | [Write] securityagent:CreatePrivateConnection. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateSecurityRequirement">CreateSecurityRequirement</a></code> | <code>string</code> | [Write] securityagent:CreateSecurityRequirement. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateSecurityRequirementPack">CreateSecurityRequirementPack</a></code> | <code>string</code> | [Write] securityagent:CreateSecurityRequirementPack. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateTargetDomain">CreateTargetDomain</a></code> | <code>string</code> | [Write] securityagent:CreateTargetDomain. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateThreat">CreateThreat</a></code> | <code>string</code> | [Write] securityagent:CreateThreat. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateThreatModel">CreateThreatModel</a></code> | <code>string</code> | [Write] securityagent:CreateThreatModel. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteAgentSpace">DeleteAgentSpace</a></code> | <code>string</code> | [Write] securityagent:DeleteAgentSpace. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] securityagent:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteArtifact">DeleteArtifact</a></code> | <code>string</code> | [Write] securityagent:DeleteArtifact. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteDesignReview">DeleteDesignReview</a></code> | <code>string</code> | [Write] securityagent:DeleteDesignReview. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string</code> | [Write] securityagent:DeleteIntegration. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteMembership">DeleteMembership</a></code> | <code>string</code> | [Write] securityagent:DeleteMembership. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.DeletePrivateConnection">DeletePrivateConnection</a></code> | <code>string</code> | [Write] securityagent:DeletePrivateConnection. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteSecurityRequirement">DeleteSecurityRequirement</a></code> | <code>string</code> | [Write] securityagent:DeleteSecurityRequirement. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteSecurityRequirementPack">DeleteSecurityRequirementPack</a></code> | <code>string</code> | [Write] securityagent:DeleteSecurityRequirementPack. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteTargetDomain">DeleteTargetDomain</a></code> | <code>string</code> | [Write] securityagent:DeleteTargetDomain. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.DescribePrivateConnection">DescribePrivateConnection</a></code> | <code>string</code> | [Read] securityagent:DescribePrivateConnection. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.HandleProviderRegistrationCallback">HandleProviderRegistrationCallback</a></code> | <code>string</code> | [Write] securityagent:HandleProviderRegistrationCallback. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ImportSecurityRequirements">ImportSecurityRequirements</a></code> | <code>string</code> | [Write] securityagent:ImportSecurityRequirements. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.InitiateProviderRegistration">InitiateProviderRegistration</a></code> | <code>string</code> | [Write] securityagent:InitiateProviderRegistration. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListAgentSpaces">ListAgentSpaces</a></code> | <code>string</code> | [List] securityagent:ListAgentSpaces. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] securityagent:ListApplications. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListArtifacts">ListArtifacts</a></code> | <code>string</code> | [List] securityagent:ListArtifacts. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListCodeReviewJobsForCodeReview">ListCodeReviewJobsForCodeReview</a></code> | <code>string</code> | [List] securityagent:ListCodeReviewJobsForCodeReview. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListCodeReviewJobTasks">ListCodeReviewJobTasks</a></code> | <code>string</code> | [List] securityagent:ListCodeReviewJobTasks. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListCodeReviews">ListCodeReviews</a></code> | <code>string</code> | [List] securityagent:ListCodeReviews. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListDesignReviewComments">ListDesignReviewComments</a></code> | <code>string</code> | [List] securityagent:ListDesignReviewComments. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListDesignReviews">ListDesignReviews</a></code> | <code>string</code> | [List] securityagent:ListDesignReviews. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListDiscoveredEndpoints">ListDiscoveredEndpoints</a></code> | <code>string</code> | [List] securityagent:ListDiscoveredEndpoints. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListFindings">ListFindings</a></code> | <code>string</code> | [List] securityagent:ListFindings. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListIntegratedResources">ListIntegratedResources</a></code> | <code>string</code> | [List] securityagent:ListIntegratedResources. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListIntegrations">ListIntegrations</a></code> | <code>string</code> | [List] securityagent:ListIntegrations. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListMemberships">ListMemberships</a></code> | <code>string</code> | [List] securityagent:ListMemberships. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListPentestJobsForPentest">ListPentestJobsForPentest</a></code> | <code>string</code> | [List] securityagent:ListPentestJobsForPentest. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListPentestJobTasks">ListPentestJobTasks</a></code> | <code>string</code> | [List] securityagent:ListPentestJobTasks. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListPentests">ListPentests</a></code> | <code>string</code> | [List] securityagent:ListPentests. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListPrivateConnections">ListPrivateConnections</a></code> | <code>string</code> | [List] securityagent:ListPrivateConnections. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListResourcesFromIntegration">ListResourcesFromIntegration</a></code> | <code>string</code> | [List] securityagent:ListResourcesFromIntegration. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListSecurityRequirementPacks">ListSecurityRequirementPacks</a></code> | <code>string</code> | [List] securityagent:ListSecurityRequirementPacks. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListSecurityRequirements">ListSecurityRequirements</a></code> | <code>string</code> | [List] securityagent:ListSecurityRequirements. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] securityagent:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListTargetDomains">ListTargetDomains</a></code> | <code>string</code> | [List] securityagent:ListTargetDomains. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListThreatModelJobs">ListThreatModelJobs</a></code> | <code>string</code> | [List] securityagent:ListThreatModelJobs. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListThreatModelJobTasks">ListThreatModelJobTasks</a></code> | <code>string</code> | [List] securityagent:ListThreatModelJobTasks. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListThreatModels">ListThreatModels</a></code> | <code>string</code> | [List] securityagent:ListThreatModels. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ListThreats">ListThreats</a></code> | <code>string</code> | [List] securityagent:ListThreats. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.PutDesignReviewFeedback">PutDesignReviewFeedback</a></code> | <code>string</code> | [Write] securityagent:PutDesignReviewFeedback. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.StartCodeRemediation">StartCodeRemediation</a></code> | <code>string</code> | [Write] securityagent:StartCodeRemediation. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.StartCodeReviewJob">StartCodeReviewJob</a></code> | <code>string</code> | [Write] securityagent:StartCodeReviewJob. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.StartPentestJob">StartPentestJob</a></code> | <code>string</code> | [Write] securityagent:StartPentestJob. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.StartThreatModelJob">StartThreatModelJob</a></code> | <code>string</code> | [Write] securityagent:StartThreatModelJob. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.StopCodeReviewJob">StopCodeReviewJob</a></code> | <code>string</code> | [Write] securityagent:StopCodeReviewJob. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.StopPentestJob">StopPentestJob</a></code> | <code>string</code> | [Write] securityagent:StopPentestJob. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.StopThreatModelJob">StopThreatModelJob</a></code> | <code>string</code> | [Write] securityagent:StopThreatModelJob. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] securityagent:TagResource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.ToggleManagedSecurityRequirement">ToggleManagedSecurityRequirement</a></code> | <code>string</code> | [Write] securityagent:ToggleManagedSecurityRequirement. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] securityagent:UntagResource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateAgentSpace">UpdateAgentSpace</a></code> | <code>string</code> | [Write] securityagent:UpdateAgentSpace. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] securityagent:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateCodeReview">UpdateCodeReview</a></code> | <code>string</code> | [Write] securityagent:UpdateCodeReview. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateFinding">UpdateFinding</a></code> | <code>string</code> | [Write] securityagent:UpdateFinding. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateIntegratedResources">UpdateIntegratedResources</a></code> | <code>string</code> | [Write] securityagent:UpdateIntegratedResources. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdatePentest">UpdatePentest</a></code> | <code>string</code> | [Write] securityagent:UpdatePentest. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdatePrivateConnectionCertificate">UpdatePrivateConnectionCertificate</a></code> | <code>string</code> | [Write] securityagent:UpdatePrivateConnectionCertificate. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateSecurityRequirement">UpdateSecurityRequirement</a></code> | <code>string</code> | [Write] securityagent:UpdateSecurityRequirement. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateSecurityRequirementPack">UpdateSecurityRequirementPack</a></code> | <code>string</code> | [Write] securityagent:UpdateSecurityRequirementPack. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateTargetDomain">UpdateTargetDomain</a></code> | <code>string</code> | [Write] securityagent:UpdateTargetDomain. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateThreat">UpdateThreat</a></code> | <code>string</code> | [Write] securityagent:UpdateThreat. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateThreatModel">UpdateThreatModel</a></code> | <code>string</code> | [Write] securityagent:UpdateThreatModel. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentActions.property.VerifyTargetDomain">VerifyTargetDomain</a></code> | <code>string</code> | [Write] securityagent:VerifyTargetDomain. |

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] securityagent:GetApplication.

---

##### `actionGetArtifact`<sup>Required</sup> <a name="actionGetArtifact" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetArtifact"></a>

```typescript
public readonly actionGetArtifact: string;
```

- *Type:* string

[Read] securityagent:GetArtifact.

---

##### `actionGetDesignReview`<sup>Required</sup> <a name="actionGetDesignReview" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetDesignReview"></a>

```typescript
public readonly actionGetDesignReview: string;
```

- *Type:* string

[Read] securityagent:GetDesignReview.

---

##### `actionGetDesignReviewArtifact`<sup>Required</sup> <a name="actionGetDesignReviewArtifact" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetDesignReviewArtifact"></a>

```typescript
public readonly actionGetDesignReviewArtifact: string;
```

- *Type:* string

[Read] securityagent:GetDesignReviewArtifact.

---

##### `actionGetDesignReviewFeedback`<sup>Required</sup> <a name="actionGetDesignReviewFeedback" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetDesignReviewFeedback"></a>

```typescript
public readonly actionGetDesignReviewFeedback: string;
```

- *Type:* string

[Read] securityagent:GetDesignReviewFeedback.

---

##### `actionGetIntegration`<sup>Required</sup> <a name="actionGetIntegration" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetIntegration"></a>

```typescript
public readonly actionGetIntegration: string;
```

- *Type:* string

[Read] securityagent:GetIntegration.

---

##### `actionGetProviderRegistrationManifest`<sup>Required</sup> <a name="actionGetProviderRegistrationManifest" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetProviderRegistrationManifest"></a>

```typescript
public readonly actionGetProviderRegistrationManifest: string;
```

- *Type:* string

[Read] securityagent:GetProviderRegistrationManifest.

---

##### `actionGetSecurityRequirement`<sup>Required</sup> <a name="actionGetSecurityRequirement" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetSecurityRequirement"></a>

```typescript
public readonly actionGetSecurityRequirement: string;
```

- *Type:* string

[Read] securityagent:GetSecurityRequirement.

---

##### `actionGetSecurityRequirementPack`<sup>Required</sup> <a name="actionGetSecurityRequirementPack" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.actionGetSecurityRequirementPack"></a>

```typescript
public readonly actionGetSecurityRequirementPack: string;
```

- *Type:* string

[Read] securityagent:GetSecurityRequirementPack.

---

##### `AddArtifact`<sup>Required</sup> <a name="AddArtifact" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.AddArtifact"></a>

```typescript
public readonly AddArtifact: string;
```

- *Type:* string

[Write] securityagent:AddArtifact.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchCreateSecurityRequirements`<sup>Required</sup> <a name="BatchCreateSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchCreateSecurityRequirements"></a>

```typescript
public readonly BatchCreateSecurityRequirements: string;
```

- *Type:* string

[Write] securityagent:BatchCreateSecurityRequirements.

---

##### `BatchDeleteCodeReviews`<sup>Required</sup> <a name="BatchDeleteCodeReviews" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchDeleteCodeReviews"></a>

```typescript
public readonly BatchDeleteCodeReviews: string;
```

- *Type:* string

[Write] securityagent:BatchDeleteCodeReviews.

---

##### `BatchDeletePentests`<sup>Required</sup> <a name="BatchDeletePentests" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchDeletePentests"></a>

```typescript
public readonly BatchDeletePentests: string;
```

- *Type:* string

[Write] securityagent:BatchDeletePentests.

---

##### `BatchDeleteSecurityRequirements`<sup>Required</sup> <a name="BatchDeleteSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchDeleteSecurityRequirements"></a>

```typescript
public readonly BatchDeleteSecurityRequirements: string;
```

- *Type:* string

[Write] securityagent:BatchDeleteSecurityRequirements.

---

##### `BatchDeleteThreatModels`<sup>Required</sup> <a name="BatchDeleteThreatModels" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchDeleteThreatModels"></a>

```typescript
public readonly BatchDeleteThreatModels: string;
```

- *Type:* string

[Write] securityagent:BatchDeleteThreatModels.

---

##### `BatchDeleteThreats`<sup>Required</sup> <a name="BatchDeleteThreats" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchDeleteThreats"></a>

```typescript
public readonly BatchDeleteThreats: string;
```

- *Type:* string

[Write] securityagent:BatchDeleteThreats.

---

##### `BatchGetAgentSpaces`<sup>Required</sup> <a name="BatchGetAgentSpaces" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetAgentSpaces"></a>

```typescript
public readonly BatchGetAgentSpaces: string;
```

- *Type:* string

[Read] securityagent:BatchGetAgentSpaces.

---

##### `BatchGetArtifactMetadata`<sup>Required</sup> <a name="BatchGetArtifactMetadata" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetArtifactMetadata"></a>

```typescript
public readonly BatchGetArtifactMetadata: string;
```

- *Type:* string

[Read] securityagent:BatchGetArtifactMetadata.

---

##### `BatchGetCodeReviewJobs`<sup>Required</sup> <a name="BatchGetCodeReviewJobs" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetCodeReviewJobs"></a>

```typescript
public readonly BatchGetCodeReviewJobs: string;
```

- *Type:* string

[Read] securityagent:BatchGetCodeReviewJobs.

---

##### `BatchGetCodeReviewJobTasks`<sup>Required</sup> <a name="BatchGetCodeReviewJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetCodeReviewJobTasks"></a>

```typescript
public readonly BatchGetCodeReviewJobTasks: string;
```

- *Type:* string

[Read] securityagent:BatchGetCodeReviewJobTasks.

---

##### `BatchGetCodeReviews`<sup>Required</sup> <a name="BatchGetCodeReviews" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetCodeReviews"></a>

```typescript
public readonly BatchGetCodeReviews: string;
```

- *Type:* string

[Read] securityagent:BatchGetCodeReviews.

---

##### `BatchGetFindings`<sup>Required</sup> <a name="BatchGetFindings" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetFindings"></a>

```typescript
public readonly BatchGetFindings: string;
```

- *Type:* string

[Read] securityagent:BatchGetFindings.

---

##### `BatchGetPentestJobContentMetadata`<sup>Required</sup> <a name="BatchGetPentestJobContentMetadata" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetPentestJobContentMetadata"></a>

```typescript
public readonly BatchGetPentestJobContentMetadata: string;
```

- *Type:* string

[Read] securityagent:BatchGetPentestJobContentMetadata.

---

##### `BatchGetPentestJobs`<sup>Required</sup> <a name="BatchGetPentestJobs" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetPentestJobs"></a>

```typescript
public readonly BatchGetPentestJobs: string;
```

- *Type:* string

[Read] securityagent:BatchGetPentestJobs.

---

##### `BatchGetPentestJobTasks`<sup>Required</sup> <a name="BatchGetPentestJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetPentestJobTasks"></a>

```typescript
public readonly BatchGetPentestJobTasks: string;
```

- *Type:* string

[Read] securityagent:BatchGetPentestJobTasks.

---

##### `BatchGetPentests`<sup>Required</sup> <a name="BatchGetPentests" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetPentests"></a>

```typescript
public readonly BatchGetPentests: string;
```

- *Type:* string

[Read] securityagent:BatchGetPentests.

---

##### `BatchGetSecurityRequirements`<sup>Required</sup> <a name="BatchGetSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetSecurityRequirements"></a>

```typescript
public readonly BatchGetSecurityRequirements: string;
```

- *Type:* string

[Read] securityagent:BatchGetSecurityRequirements.

---

##### `BatchGetTargetDomains`<sup>Required</sup> <a name="BatchGetTargetDomains" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetTargetDomains"></a>

```typescript
public readonly BatchGetTargetDomains: string;
```

- *Type:* string

[Read] securityagent:BatchGetTargetDomains.

---

##### `BatchGetThreatModelJobs`<sup>Required</sup> <a name="BatchGetThreatModelJobs" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetThreatModelJobs"></a>

```typescript
public readonly BatchGetThreatModelJobs: string;
```

- *Type:* string

[Read] securityagent:BatchGetThreatModelJobs.

---

##### `BatchGetThreatModelJobTasks`<sup>Required</sup> <a name="BatchGetThreatModelJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetThreatModelJobTasks"></a>

```typescript
public readonly BatchGetThreatModelJobTasks: string;
```

- *Type:* string

[Read] securityagent:BatchGetThreatModelJobTasks.

---

##### `BatchGetThreatModels`<sup>Required</sup> <a name="BatchGetThreatModels" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetThreatModels"></a>

```typescript
public readonly BatchGetThreatModels: string;
```

- *Type:* string

[Read] securityagent:BatchGetThreatModels.

---

##### `BatchGetThreats`<sup>Required</sup> <a name="BatchGetThreats" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchGetThreats"></a>

```typescript
public readonly BatchGetThreats: string;
```

- *Type:* string

[Read] securityagent:BatchGetThreats.

---

##### `BatchUpdateSecurityRequirements`<sup>Required</sup> <a name="BatchUpdateSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.BatchUpdateSecurityRequirements"></a>

```typescript
public readonly BatchUpdateSecurityRequirements: string;
```

- *Type:* string

[Write] securityagent:BatchUpdateSecurityRequirements.

---

##### `CreateAgentSpace`<sup>Required</sup> <a name="CreateAgentSpace" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateAgentSpace"></a>

```typescript
public readonly CreateAgentSpace: string;
```

- *Type:* string

[Write] securityagent:CreateAgentSpace.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] securityagent:CreateApplication.

---

##### `CreateCodeReview`<sup>Required</sup> <a name="CreateCodeReview" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateCodeReview"></a>

```typescript
public readonly CreateCodeReview: string;
```

- *Type:* string

[Write] securityagent:CreateCodeReview.

---

##### `CreateDesignReview`<sup>Required</sup> <a name="CreateDesignReview" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateDesignReview"></a>

```typescript
public readonly CreateDesignReview: string;
```

- *Type:* string

[Write] securityagent:CreateDesignReview.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string;
```

- *Type:* string

[Write] securityagent:CreateIntegration.

---

##### `CreateMembership`<sup>Required</sup> <a name="CreateMembership" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateMembership"></a>

```typescript
public readonly CreateMembership: string;
```

- *Type:* string

[Write] securityagent:CreateMembership.

---

##### `CreateOneTimeLoginSession`<sup>Required</sup> <a name="CreateOneTimeLoginSession" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateOneTimeLoginSession"></a>

```typescript
public readonly CreateOneTimeLoginSession: string;
```

- *Type:* string

[Write] securityagent:CreateOneTimeLoginSession.

---

##### `CreatePentest`<sup>Required</sup> <a name="CreatePentest" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreatePentest"></a>

```typescript
public readonly CreatePentest: string;
```

- *Type:* string

[Write] securityagent:CreatePentest.

---

##### `CreatePrivateConnection`<sup>Required</sup> <a name="CreatePrivateConnection" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreatePrivateConnection"></a>

```typescript
public readonly CreatePrivateConnection: string;
```

- *Type:* string

[Write] securityagent:CreatePrivateConnection.

---

##### `CreateSecurityRequirement`<sup>Required</sup> <a name="CreateSecurityRequirement" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateSecurityRequirement"></a>

```typescript
public readonly CreateSecurityRequirement: string;
```

- *Type:* string

[Write] securityagent:CreateSecurityRequirement.

---

##### `CreateSecurityRequirementPack`<sup>Required</sup> <a name="CreateSecurityRequirementPack" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateSecurityRequirementPack"></a>

```typescript
public readonly CreateSecurityRequirementPack: string;
```

- *Type:* string

[Write] securityagent:CreateSecurityRequirementPack.

---

##### `CreateTargetDomain`<sup>Required</sup> <a name="CreateTargetDomain" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateTargetDomain"></a>

```typescript
public readonly CreateTargetDomain: string;
```

- *Type:* string

[Write] securityagent:CreateTargetDomain.

---

##### `CreateThreat`<sup>Required</sup> <a name="CreateThreat" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateThreat"></a>

```typescript
public readonly CreateThreat: string;
```

- *Type:* string

[Write] securityagent:CreateThreat.

---

##### `CreateThreatModel`<sup>Required</sup> <a name="CreateThreatModel" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.CreateThreatModel"></a>

```typescript
public readonly CreateThreatModel: string;
```

- *Type:* string

[Write] securityagent:CreateThreatModel.

---

##### `DeleteAgentSpace`<sup>Required</sup> <a name="DeleteAgentSpace" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteAgentSpace"></a>

```typescript
public readonly DeleteAgentSpace: string;
```

- *Type:* string

[Write] securityagent:DeleteAgentSpace.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] securityagent:DeleteApplication.

---

##### `DeleteArtifact`<sup>Required</sup> <a name="DeleteArtifact" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteArtifact"></a>

```typescript
public readonly DeleteArtifact: string;
```

- *Type:* string

[Write] securityagent:DeleteArtifact.

---

##### `DeleteDesignReview`<sup>Required</sup> <a name="DeleteDesignReview" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteDesignReview"></a>

```typescript
public readonly DeleteDesignReview: string;
```

- *Type:* string

[Write] securityagent:DeleteDesignReview.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string;
```

- *Type:* string

[Write] securityagent:DeleteIntegration.

---

##### `DeleteMembership`<sup>Required</sup> <a name="DeleteMembership" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteMembership"></a>

```typescript
public readonly DeleteMembership: string;
```

- *Type:* string

[Write] securityagent:DeleteMembership.

---

##### `DeletePrivateConnection`<sup>Required</sup> <a name="DeletePrivateConnection" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.DeletePrivateConnection"></a>

```typescript
public readonly DeletePrivateConnection: string;
```

- *Type:* string

[Write] securityagent:DeletePrivateConnection.

---

##### `DeleteSecurityRequirement`<sup>Required</sup> <a name="DeleteSecurityRequirement" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteSecurityRequirement"></a>

```typescript
public readonly DeleteSecurityRequirement: string;
```

- *Type:* string

[Write] securityagent:DeleteSecurityRequirement.

---

##### `DeleteSecurityRequirementPack`<sup>Required</sup> <a name="DeleteSecurityRequirementPack" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteSecurityRequirementPack"></a>

```typescript
public readonly DeleteSecurityRequirementPack: string;
```

- *Type:* string

[Write] securityagent:DeleteSecurityRequirementPack.

---

##### `DeleteTargetDomain`<sup>Required</sup> <a name="DeleteTargetDomain" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.DeleteTargetDomain"></a>

```typescript
public readonly DeleteTargetDomain: string;
```

- *Type:* string

[Write] securityagent:DeleteTargetDomain.

---

##### `DescribePrivateConnection`<sup>Required</sup> <a name="DescribePrivateConnection" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.DescribePrivateConnection"></a>

```typescript
public readonly DescribePrivateConnection: string;
```

- *Type:* string

[Read] securityagent:DescribePrivateConnection.

---

##### `HandleProviderRegistrationCallback`<sup>Required</sup> <a name="HandleProviderRegistrationCallback" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.HandleProviderRegistrationCallback"></a>

```typescript
public readonly HandleProviderRegistrationCallback: string;
```

- *Type:* string

[Write] securityagent:HandleProviderRegistrationCallback.

---

##### `ImportSecurityRequirements`<sup>Required</sup> <a name="ImportSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ImportSecurityRequirements"></a>

```typescript
public readonly ImportSecurityRequirements: string;
```

- *Type:* string

[Write] securityagent:ImportSecurityRequirements.

---

##### `InitiateProviderRegistration`<sup>Required</sup> <a name="InitiateProviderRegistration" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.InitiateProviderRegistration"></a>

```typescript
public readonly InitiateProviderRegistration: string;
```

- *Type:* string

[Write] securityagent:InitiateProviderRegistration.

---

##### `ListAgentSpaces`<sup>Required</sup> <a name="ListAgentSpaces" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListAgentSpaces"></a>

```typescript
public readonly ListAgentSpaces: string;
```

- *Type:* string

[List] securityagent:ListAgentSpaces.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] securityagent:ListApplications.

---

##### `ListArtifacts`<sup>Required</sup> <a name="ListArtifacts" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListArtifacts"></a>

```typescript
public readonly ListArtifacts: string;
```

- *Type:* string

[List] securityagent:ListArtifacts.

---

##### `ListCodeReviewJobsForCodeReview`<sup>Required</sup> <a name="ListCodeReviewJobsForCodeReview" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListCodeReviewJobsForCodeReview"></a>

```typescript
public readonly ListCodeReviewJobsForCodeReview: string;
```

- *Type:* string

[List] securityagent:ListCodeReviewJobsForCodeReview.

---

##### `ListCodeReviewJobTasks`<sup>Required</sup> <a name="ListCodeReviewJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListCodeReviewJobTasks"></a>

```typescript
public readonly ListCodeReviewJobTasks: string;
```

- *Type:* string

[List] securityagent:ListCodeReviewJobTasks.

---

##### `ListCodeReviews`<sup>Required</sup> <a name="ListCodeReviews" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListCodeReviews"></a>

```typescript
public readonly ListCodeReviews: string;
```

- *Type:* string

[List] securityagent:ListCodeReviews.

---

##### `ListDesignReviewComments`<sup>Required</sup> <a name="ListDesignReviewComments" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListDesignReviewComments"></a>

```typescript
public readonly ListDesignReviewComments: string;
```

- *Type:* string

[List] securityagent:ListDesignReviewComments.

---

##### `ListDesignReviews`<sup>Required</sup> <a name="ListDesignReviews" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListDesignReviews"></a>

```typescript
public readonly ListDesignReviews: string;
```

- *Type:* string

[List] securityagent:ListDesignReviews.

---

##### `ListDiscoveredEndpoints`<sup>Required</sup> <a name="ListDiscoveredEndpoints" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListDiscoveredEndpoints"></a>

```typescript
public readonly ListDiscoveredEndpoints: string;
```

- *Type:* string

[List] securityagent:ListDiscoveredEndpoints.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListFindings"></a>

```typescript
public readonly ListFindings: string;
```

- *Type:* string

[List] securityagent:ListFindings.

---

##### `ListIntegratedResources`<sup>Required</sup> <a name="ListIntegratedResources" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListIntegratedResources"></a>

```typescript
public readonly ListIntegratedResources: string;
```

- *Type:* string

[List] securityagent:ListIntegratedResources.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string;
```

- *Type:* string

[List] securityagent:ListIntegrations.

---

##### `ListMemberships`<sup>Required</sup> <a name="ListMemberships" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListMemberships"></a>

```typescript
public readonly ListMemberships: string;
```

- *Type:* string

[List] securityagent:ListMemberships.

---

##### `ListPentestJobsForPentest`<sup>Required</sup> <a name="ListPentestJobsForPentest" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListPentestJobsForPentest"></a>

```typescript
public readonly ListPentestJobsForPentest: string;
```

- *Type:* string

[List] securityagent:ListPentestJobsForPentest.

---

##### `ListPentestJobTasks`<sup>Required</sup> <a name="ListPentestJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListPentestJobTasks"></a>

```typescript
public readonly ListPentestJobTasks: string;
```

- *Type:* string

[List] securityagent:ListPentestJobTasks.

---

##### `ListPentests`<sup>Required</sup> <a name="ListPentests" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListPentests"></a>

```typescript
public readonly ListPentests: string;
```

- *Type:* string

[List] securityagent:ListPentests.

---

##### `ListPrivateConnections`<sup>Required</sup> <a name="ListPrivateConnections" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListPrivateConnections"></a>

```typescript
public readonly ListPrivateConnections: string;
```

- *Type:* string

[List] securityagent:ListPrivateConnections.

---

##### `ListResourcesFromIntegration`<sup>Required</sup> <a name="ListResourcesFromIntegration" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListResourcesFromIntegration"></a>

```typescript
public readonly ListResourcesFromIntegration: string;
```

- *Type:* string

[List] securityagent:ListResourcesFromIntegration.

---

##### `ListSecurityRequirementPacks`<sup>Required</sup> <a name="ListSecurityRequirementPacks" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListSecurityRequirementPacks"></a>

```typescript
public readonly ListSecurityRequirementPacks: string;
```

- *Type:* string

[List] securityagent:ListSecurityRequirementPacks.

---

##### `ListSecurityRequirements`<sup>Required</sup> <a name="ListSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListSecurityRequirements"></a>

```typescript
public readonly ListSecurityRequirements: string;
```

- *Type:* string

[List] securityagent:ListSecurityRequirements.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] securityagent:ListTagsForResource.

---

##### `ListTargetDomains`<sup>Required</sup> <a name="ListTargetDomains" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListTargetDomains"></a>

```typescript
public readonly ListTargetDomains: string;
```

- *Type:* string

[List] securityagent:ListTargetDomains.

---

##### `ListThreatModelJobs`<sup>Required</sup> <a name="ListThreatModelJobs" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListThreatModelJobs"></a>

```typescript
public readonly ListThreatModelJobs: string;
```

- *Type:* string

[List] securityagent:ListThreatModelJobs.

---

##### `ListThreatModelJobTasks`<sup>Required</sup> <a name="ListThreatModelJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListThreatModelJobTasks"></a>

```typescript
public readonly ListThreatModelJobTasks: string;
```

- *Type:* string

[List] securityagent:ListThreatModelJobTasks.

---

##### `ListThreatModels`<sup>Required</sup> <a name="ListThreatModels" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListThreatModels"></a>

```typescript
public readonly ListThreatModels: string;
```

- *Type:* string

[List] securityagent:ListThreatModels.

---

##### `ListThreats`<sup>Required</sup> <a name="ListThreats" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ListThreats"></a>

```typescript
public readonly ListThreats: string;
```

- *Type:* string

[List] securityagent:ListThreats.

---

##### `PutDesignReviewFeedback`<sup>Required</sup> <a name="PutDesignReviewFeedback" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.PutDesignReviewFeedback"></a>

```typescript
public readonly PutDesignReviewFeedback: string;
```

- *Type:* string

[Write] securityagent:PutDesignReviewFeedback.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCodeRemediation`<sup>Required</sup> <a name="StartCodeRemediation" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.StartCodeRemediation"></a>

```typescript
public readonly StartCodeRemediation: string;
```

- *Type:* string

[Write] securityagent:StartCodeRemediation.

---

##### `StartCodeReviewJob`<sup>Required</sup> <a name="StartCodeReviewJob" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.StartCodeReviewJob"></a>

```typescript
public readonly StartCodeReviewJob: string;
```

- *Type:* string

[Write] securityagent:StartCodeReviewJob.

---

##### `StartPentestJob`<sup>Required</sup> <a name="StartPentestJob" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.StartPentestJob"></a>

```typescript
public readonly StartPentestJob: string;
```

- *Type:* string

[Write] securityagent:StartPentestJob.

---

##### `StartThreatModelJob`<sup>Required</sup> <a name="StartThreatModelJob" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.StartThreatModelJob"></a>

```typescript
public readonly StartThreatModelJob: string;
```

- *Type:* string

[Write] securityagent:StartThreatModelJob.

---

##### `StopCodeReviewJob`<sup>Required</sup> <a name="StopCodeReviewJob" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.StopCodeReviewJob"></a>

```typescript
public readonly StopCodeReviewJob: string;
```

- *Type:* string

[Write] securityagent:StopCodeReviewJob.

---

##### `StopPentestJob`<sup>Required</sup> <a name="StopPentestJob" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.StopPentestJob"></a>

```typescript
public readonly StopPentestJob: string;
```

- *Type:* string

[Write] securityagent:StopPentestJob.

---

##### `StopThreatModelJob`<sup>Required</sup> <a name="StopThreatModelJob" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.StopThreatModelJob"></a>

```typescript
public readonly StopThreatModelJob: string;
```

- *Type:* string

[Write] securityagent:StopThreatModelJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] securityagent:TagResource.

---

##### `ToggleManagedSecurityRequirement`<sup>Required</sup> <a name="ToggleManagedSecurityRequirement" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.ToggleManagedSecurityRequirement"></a>

```typescript
public readonly ToggleManagedSecurityRequirement: string;
```

- *Type:* string

[Write] securityagent:ToggleManagedSecurityRequirement.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] securityagent:UntagResource.

---

##### `UpdateAgentSpace`<sup>Required</sup> <a name="UpdateAgentSpace" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateAgentSpace"></a>

```typescript
public readonly UpdateAgentSpace: string;
```

- *Type:* string

[Write] securityagent:UpdateAgentSpace.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] securityagent:UpdateApplication.

---

##### `UpdateCodeReview`<sup>Required</sup> <a name="UpdateCodeReview" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateCodeReview"></a>

```typescript
public readonly UpdateCodeReview: string;
```

- *Type:* string

[Write] securityagent:UpdateCodeReview.

---

##### `UpdateFinding`<sup>Required</sup> <a name="UpdateFinding" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateFinding"></a>

```typescript
public readonly UpdateFinding: string;
```

- *Type:* string

[Write] securityagent:UpdateFinding.

---

##### `UpdateIntegratedResources`<sup>Required</sup> <a name="UpdateIntegratedResources" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateIntegratedResources"></a>

```typescript
public readonly UpdateIntegratedResources: string;
```

- *Type:* string

[Write] securityagent:UpdateIntegratedResources.

---

##### `UpdatePentest`<sup>Required</sup> <a name="UpdatePentest" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdatePentest"></a>

```typescript
public readonly UpdatePentest: string;
```

- *Type:* string

[Write] securityagent:UpdatePentest.

---

##### `UpdatePrivateConnectionCertificate`<sup>Required</sup> <a name="UpdatePrivateConnectionCertificate" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdatePrivateConnectionCertificate"></a>

```typescript
public readonly UpdatePrivateConnectionCertificate: string;
```

- *Type:* string

[Write] securityagent:UpdatePrivateConnectionCertificate.

---

##### `UpdateSecurityRequirement`<sup>Required</sup> <a name="UpdateSecurityRequirement" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateSecurityRequirement"></a>

```typescript
public readonly UpdateSecurityRequirement: string;
```

- *Type:* string

[Write] securityagent:UpdateSecurityRequirement.

---

##### `UpdateSecurityRequirementPack`<sup>Required</sup> <a name="UpdateSecurityRequirementPack" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateSecurityRequirementPack"></a>

```typescript
public readonly UpdateSecurityRequirementPack: string;
```

- *Type:* string

[Write] securityagent:UpdateSecurityRequirementPack.

---

##### `UpdateTargetDomain`<sup>Required</sup> <a name="UpdateTargetDomain" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateTargetDomain"></a>

```typescript
public readonly UpdateTargetDomain: string;
```

- *Type:* string

[Write] securityagent:UpdateTargetDomain.

---

##### `UpdateThreat`<sup>Required</sup> <a name="UpdateThreat" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateThreat"></a>

```typescript
public readonly UpdateThreat: string;
```

- *Type:* string

[Write] securityagent:UpdateThreat.

---

##### `UpdateThreatModel`<sup>Required</sup> <a name="UpdateThreatModel" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.UpdateThreatModel"></a>

```typescript
public readonly UpdateThreatModel: string;
```

- *Type:* string

[Write] securityagent:UpdateThreatModel.

---

##### `VerifyTargetDomain`<sup>Required</sup> <a name="VerifyTargetDomain" id="@cdk_utils/iam.securityagent.SecurityagentActions.property.VerifyTargetDomain"></a>

```typescript
public readonly VerifyTargetDomain: string;
```

- *Type:* string

[Write] securityagent:VerifyTargetDomain.

---

### SecurityagentConditions <a name="SecurityagentConditions" id="@cdk_utils/iam.securityagent.SecurityagentConditions"></a>

Condition key constants and builders for securityagent.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securityagent.SecurityagentConditions.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

new securityagent.SecurityagentConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.securityagent.SecurityagentConditions.requestTag"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.securityagent.SecurityagentConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.securityagent.SecurityagentConditions.resourceTag"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.securityagent.SecurityagentConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.securityagent.SecurityagentConditions.tagKeys"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.securityagent.SecurityagentConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.property.CreateAgentSpaceConditionKeys">CreateAgentSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgentSpace action. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.property.CreateIntegrationConditionKeys">CreateIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIntegration action. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.property.CreatePrivateConnectionConditionKeys">CreatePrivateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePrivateConnection action. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.property.CreateSecurityRequirementPackConditionKeys">CreateSecurityRequirementPackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSecurityRequirementPack action. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.securityagent.SecurityagentConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.securityagent.SecurityagentConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.securityagent.SecurityagentConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAgentSpaceConditionKeys`<sup>Required</sup> <a name="CreateAgentSpaceConditionKeys" id="@cdk_utils/iam.securityagent.SecurityagentConditions.property.CreateAgentSpaceConditionKeys"></a>

```typescript
public readonly CreateAgentSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgentSpace action.

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.securityagent.SecurityagentConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateIntegrationConditionKeys`<sup>Required</sup> <a name="CreateIntegrationConditionKeys" id="@cdk_utils/iam.securityagent.SecurityagentConditions.property.CreateIntegrationConditionKeys"></a>

```typescript
public readonly CreateIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIntegration action.

---

##### `CreatePrivateConnectionConditionKeys`<sup>Required</sup> <a name="CreatePrivateConnectionConditionKeys" id="@cdk_utils/iam.securityagent.SecurityagentConditions.property.CreatePrivateConnectionConditionKeys"></a>

```typescript
public readonly CreatePrivateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePrivateConnection action.

---

##### `CreateSecurityRequirementPackConditionKeys`<sup>Required</sup> <a name="CreateSecurityRequirementPackConditionKeys" id="@cdk_utils/iam.securityagent.SecurityagentConditions.property.CreateSecurityRequirementPackConditionKeys"></a>

```typescript
public readonly CreateSecurityRequirementPackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSecurityRequirementPack action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.securityagent.SecurityagentConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.securityagent.SecurityagentConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SecurityagentOperations <a name="SecurityagentOperations" id="@cdk_utils/iam.securityagent.SecurityagentOperations"></a>

API operation to required IAM actions mapping for securityagent.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securityagent.SecurityagentOperations.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

new securityagent.SecurityagentOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.AddArtifact">AddArtifact</a></code> | <code>string[]</code> | IAM actions required for the AddArtifact API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchCreateSecurityRequirements">BatchCreateSecurityRequirements</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateSecurityRequirements API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchDeleteCodeReviews">BatchDeleteCodeReviews</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteCodeReviews API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchDeletePentests">BatchDeletePentests</a></code> | <code>string[]</code> | IAM actions required for the BatchDeletePentests API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchDeleteSecurityRequirements">BatchDeleteSecurityRequirements</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteSecurityRequirements API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchDeleteThreatModels">BatchDeleteThreatModels</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteThreatModels API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetAgentSpaces">BatchGetAgentSpaces</a></code> | <code>string[]</code> | IAM actions required for the BatchGetAgentSpaces API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetArtifactMetadata">BatchGetArtifactMetadata</a></code> | <code>string[]</code> | IAM actions required for the BatchGetArtifactMetadata API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetCodeReviewJobs">BatchGetCodeReviewJobs</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCodeReviewJobs API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetCodeReviewJobTasks">BatchGetCodeReviewJobTasks</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCodeReviewJobTasks API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetCodeReviews">BatchGetCodeReviews</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCodeReviews API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetFindings">BatchGetFindings</a></code> | <code>string[]</code> | IAM actions required for the BatchGetFindings API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetPentestJobs">BatchGetPentestJobs</a></code> | <code>string[]</code> | IAM actions required for the BatchGetPentestJobs API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetPentestJobTasks">BatchGetPentestJobTasks</a></code> | <code>string[]</code> | IAM actions required for the BatchGetPentestJobTasks API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetPentests">BatchGetPentests</a></code> | <code>string[]</code> | IAM actions required for the BatchGetPentests API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetSecurityRequirements">BatchGetSecurityRequirements</a></code> | <code>string[]</code> | IAM actions required for the BatchGetSecurityRequirements API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetTargetDomains">BatchGetTargetDomains</a></code> | <code>string[]</code> | IAM actions required for the BatchGetTargetDomains API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetThreatModelJobs">BatchGetThreatModelJobs</a></code> | <code>string[]</code> | IAM actions required for the BatchGetThreatModelJobs API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetThreatModelJobTasks">BatchGetThreatModelJobTasks</a></code> | <code>string[]</code> | IAM actions required for the BatchGetThreatModelJobTasks API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetThreatModels">BatchGetThreatModels</a></code> | <code>string[]</code> | IAM actions required for the BatchGetThreatModels API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetThreats">BatchGetThreats</a></code> | <code>string[]</code> | IAM actions required for the BatchGetThreats API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchUpdateSecurityRequirements">BatchUpdateSecurityRequirements</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateSecurityRequirements API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateAgentSpace">CreateAgentSpace</a></code> | <code>string[]</code> | IAM actions required for the CreateAgentSpace API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateCodeReview">CreateCodeReview</a></code> | <code>string[]</code> | IAM actions required for the CreateCodeReview API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateIntegration">CreateIntegration</a></code> | <code>string[]</code> | IAM actions required for the CreateIntegration API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateMembership">CreateMembership</a></code> | <code>string[]</code> | IAM actions required for the CreateMembership API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreatePentest">CreatePentest</a></code> | <code>string[]</code> | IAM actions required for the CreatePentest API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreatePrivateConnection">CreatePrivateConnection</a></code> | <code>string[]</code> | IAM actions required for the CreatePrivateConnection API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateSecurityRequirementPack">CreateSecurityRequirementPack</a></code> | <code>string[]</code> | IAM actions required for the CreateSecurityRequirementPack API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateTargetDomain">CreateTargetDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateTargetDomain API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateThreat">CreateThreat</a></code> | <code>string[]</code> | IAM actions required for the CreateThreat API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateThreatModel">CreateThreatModel</a></code> | <code>string[]</code> | IAM actions required for the CreateThreatModel API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteAgentSpace">DeleteAgentSpace</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgentSpace API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteArtifact">DeleteArtifact</a></code> | <code>string[]</code> | IAM actions required for the DeleteArtifact API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegration API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteMembership">DeleteMembership</a></code> | <code>string[]</code> | IAM actions required for the DeleteMembership API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeletePrivateConnection">DeletePrivateConnection</a></code> | <code>string[]</code> | IAM actions required for the DeletePrivateConnection API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteSecurityRequirementPack">DeleteSecurityRequirementPack</a></code> | <code>string[]</code> | IAM actions required for the DeleteSecurityRequirementPack API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteTargetDomain">DeleteTargetDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteTargetDomain API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.DescribePrivateConnection">DescribePrivateConnection</a></code> | <code>string[]</code> | IAM actions required for the DescribePrivateConnection API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ImportSecurityRequirements">ImportSecurityRequirements</a></code> | <code>string[]</code> | IAM actions required for the ImportSecurityRequirements API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.InitiateProviderRegistration">InitiateProviderRegistration</a></code> | <code>string[]</code> | IAM actions required for the InitiateProviderRegistration API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListAgentSpaces">ListAgentSpaces</a></code> | <code>string[]</code> | IAM actions required for the ListAgentSpaces API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListArtifacts">ListArtifacts</a></code> | <code>string[]</code> | IAM actions required for the ListArtifacts API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListCodeReviewJobsForCodeReview">ListCodeReviewJobsForCodeReview</a></code> | <code>string[]</code> | IAM actions required for the ListCodeReviewJobsForCodeReview API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListCodeReviewJobTasks">ListCodeReviewJobTasks</a></code> | <code>string[]</code> | IAM actions required for the ListCodeReviewJobTasks API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListCodeReviews">ListCodeReviews</a></code> | <code>string[]</code> | IAM actions required for the ListCodeReviews API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListDiscoveredEndpoints">ListDiscoveredEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListDiscoveredEndpoints API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListFindings">ListFindings</a></code> | <code>string[]</code> | IAM actions required for the ListFindings API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListIntegratedResources">ListIntegratedResources</a></code> | <code>string[]</code> | IAM actions required for the ListIntegratedResources API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListIntegrations">ListIntegrations</a></code> | <code>string[]</code> | IAM actions required for the ListIntegrations API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListMemberships">ListMemberships</a></code> | <code>string[]</code> | IAM actions required for the ListMemberships API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListPentestJobsForPentest">ListPentestJobsForPentest</a></code> | <code>string[]</code> | IAM actions required for the ListPentestJobsForPentest API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListPentestJobTasks">ListPentestJobTasks</a></code> | <code>string[]</code> | IAM actions required for the ListPentestJobTasks API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListPentests">ListPentests</a></code> | <code>string[]</code> | IAM actions required for the ListPentests API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListPrivateConnections">ListPrivateConnections</a></code> | <code>string[]</code> | IAM actions required for the ListPrivateConnections API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListSecurityRequirementPacks">ListSecurityRequirementPacks</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityRequirementPacks API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListSecurityRequirements">ListSecurityRequirements</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityRequirements API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListTargetDomains">ListTargetDomains</a></code> | <code>string[]</code> | IAM actions required for the ListTargetDomains API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListThreatModelJobs">ListThreatModelJobs</a></code> | <code>string[]</code> | IAM actions required for the ListThreatModelJobs API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListThreatModelJobTasks">ListThreatModelJobTasks</a></code> | <code>string[]</code> | IAM actions required for the ListThreatModelJobTasks API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListThreatModels">ListThreatModels</a></code> | <code>string[]</code> | IAM actions required for the ListThreatModels API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListThreats">ListThreats</a></code> | <code>string[]</code> | IAM actions required for the ListThreats API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.opGetArtifact">opGetArtifact</a></code> | <code>string[]</code> | IAM actions required for the GetArtifact API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.opGetIntegration">opGetIntegration</a></code> | <code>string[]</code> | IAM actions required for the GetIntegration API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.opGetSecurityRequirementPack">opGetSecurityRequirementPack</a></code> | <code>string[]</code> | IAM actions required for the GetSecurityRequirementPack API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.StartCodeRemediation">StartCodeRemediation</a></code> | <code>string[]</code> | IAM actions required for the StartCodeRemediation API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.StartCodeReviewJob">StartCodeReviewJob</a></code> | <code>string[]</code> | IAM actions required for the StartCodeReviewJob API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.StartPentestJob">StartPentestJob</a></code> | <code>string[]</code> | IAM actions required for the StartPentestJob API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.StartThreatModelJob">StartThreatModelJob</a></code> | <code>string[]</code> | IAM actions required for the StartThreatModelJob API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.StopCodeReviewJob">StopCodeReviewJob</a></code> | <code>string[]</code> | IAM actions required for the StopCodeReviewJob API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.StopPentestJob">StopPentestJob</a></code> | <code>string[]</code> | IAM actions required for the StopPentestJob API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.StopThreatModelJob">StopThreatModelJob</a></code> | <code>string[]</code> | IAM actions required for the StopThreatModelJob API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateAgentSpace">UpdateAgentSpace</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentSpace API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateCodeReview">UpdateCodeReview</a></code> | <code>string[]</code> | IAM actions required for the UpdateCodeReview API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateFinding">UpdateFinding</a></code> | <code>string[]</code> | IAM actions required for the UpdateFinding API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateIntegratedResources">UpdateIntegratedResources</a></code> | <code>string[]</code> | IAM actions required for the UpdateIntegratedResources API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdatePentest">UpdatePentest</a></code> | <code>string[]</code> | IAM actions required for the UpdatePentest API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdatePrivateConnectionCertificate">UpdatePrivateConnectionCertificate</a></code> | <code>string[]</code> | IAM actions required for the UpdatePrivateConnectionCertificate API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateSecurityRequirementPack">UpdateSecurityRequirementPack</a></code> | <code>string[]</code> | IAM actions required for the UpdateSecurityRequirementPack API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateTargetDomain">UpdateTargetDomain</a></code> | <code>string[]</code> | IAM actions required for the UpdateTargetDomain API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateThreat">UpdateThreat</a></code> | <code>string[]</code> | IAM actions required for the UpdateThreat API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateThreatModel">UpdateThreatModel</a></code> | <code>string[]</code> | IAM actions required for the UpdateThreatModel API call. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentOperations.property.VerifyTargetDomain">VerifyTargetDomain</a></code> | <code>string[]</code> | IAM actions required for the VerifyTargetDomain API call. |

---

##### `AddArtifact`<sup>Required</sup> <a name="AddArtifact" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.AddArtifact"></a>

```typescript
public readonly AddArtifact: string[];
```

- *Type:* string[]

IAM actions required for the AddArtifact API call.

---

##### `BatchCreateSecurityRequirements`<sup>Required</sup> <a name="BatchCreateSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchCreateSecurityRequirements"></a>

```typescript
public readonly BatchCreateSecurityRequirements: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateSecurityRequirements API call.

---

##### `BatchDeleteCodeReviews`<sup>Required</sup> <a name="BatchDeleteCodeReviews" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchDeleteCodeReviews"></a>

```typescript
public readonly BatchDeleteCodeReviews: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteCodeReviews API call.

---

##### `BatchDeletePentests`<sup>Required</sup> <a name="BatchDeletePentests" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchDeletePentests"></a>

```typescript
public readonly BatchDeletePentests: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeletePentests API call.

---

##### `BatchDeleteSecurityRequirements`<sup>Required</sup> <a name="BatchDeleteSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchDeleteSecurityRequirements"></a>

```typescript
public readonly BatchDeleteSecurityRequirements: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteSecurityRequirements API call.

---

##### `BatchDeleteThreatModels`<sup>Required</sup> <a name="BatchDeleteThreatModels" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchDeleteThreatModels"></a>

```typescript
public readonly BatchDeleteThreatModels: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteThreatModels API call.

---

##### `BatchGetAgentSpaces`<sup>Required</sup> <a name="BatchGetAgentSpaces" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetAgentSpaces"></a>

```typescript
public readonly BatchGetAgentSpaces: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetAgentSpaces API call.

---

##### `BatchGetArtifactMetadata`<sup>Required</sup> <a name="BatchGetArtifactMetadata" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetArtifactMetadata"></a>

```typescript
public readonly BatchGetArtifactMetadata: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetArtifactMetadata API call.

---

##### `BatchGetCodeReviewJobs`<sup>Required</sup> <a name="BatchGetCodeReviewJobs" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetCodeReviewJobs"></a>

```typescript
public readonly BatchGetCodeReviewJobs: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCodeReviewJobs API call.

---

##### `BatchGetCodeReviewJobTasks`<sup>Required</sup> <a name="BatchGetCodeReviewJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetCodeReviewJobTasks"></a>

```typescript
public readonly BatchGetCodeReviewJobTasks: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCodeReviewJobTasks API call.

---

##### `BatchGetCodeReviews`<sup>Required</sup> <a name="BatchGetCodeReviews" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetCodeReviews"></a>

```typescript
public readonly BatchGetCodeReviews: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCodeReviews API call.

---

##### `BatchGetFindings`<sup>Required</sup> <a name="BatchGetFindings" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetFindings"></a>

```typescript
public readonly BatchGetFindings: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetFindings API call.

---

##### `BatchGetPentestJobs`<sup>Required</sup> <a name="BatchGetPentestJobs" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetPentestJobs"></a>

```typescript
public readonly BatchGetPentestJobs: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetPentestJobs API call.

---

##### `BatchGetPentestJobTasks`<sup>Required</sup> <a name="BatchGetPentestJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetPentestJobTasks"></a>

```typescript
public readonly BatchGetPentestJobTasks: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetPentestJobTasks API call.

---

##### `BatchGetPentests`<sup>Required</sup> <a name="BatchGetPentests" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetPentests"></a>

```typescript
public readonly BatchGetPentests: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetPentests API call.

---

##### `BatchGetSecurityRequirements`<sup>Required</sup> <a name="BatchGetSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetSecurityRequirements"></a>

```typescript
public readonly BatchGetSecurityRequirements: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetSecurityRequirements API call.

---

##### `BatchGetTargetDomains`<sup>Required</sup> <a name="BatchGetTargetDomains" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetTargetDomains"></a>

```typescript
public readonly BatchGetTargetDomains: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetTargetDomains API call.

---

##### `BatchGetThreatModelJobs`<sup>Required</sup> <a name="BatchGetThreatModelJobs" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetThreatModelJobs"></a>

```typescript
public readonly BatchGetThreatModelJobs: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetThreatModelJobs API call.

---

##### `BatchGetThreatModelJobTasks`<sup>Required</sup> <a name="BatchGetThreatModelJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetThreatModelJobTasks"></a>

```typescript
public readonly BatchGetThreatModelJobTasks: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetThreatModelJobTasks API call.

---

##### `BatchGetThreatModels`<sup>Required</sup> <a name="BatchGetThreatModels" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetThreatModels"></a>

```typescript
public readonly BatchGetThreatModels: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetThreatModels API call.

---

##### `BatchGetThreats`<sup>Required</sup> <a name="BatchGetThreats" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchGetThreats"></a>

```typescript
public readonly BatchGetThreats: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetThreats API call.

---

##### `BatchUpdateSecurityRequirements`<sup>Required</sup> <a name="BatchUpdateSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.BatchUpdateSecurityRequirements"></a>

```typescript
public readonly BatchUpdateSecurityRequirements: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateSecurityRequirements API call.

---

##### `CreateAgentSpace`<sup>Required</sup> <a name="CreateAgentSpace" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateAgentSpace"></a>

```typescript
public readonly CreateAgentSpace: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgentSpace API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateCodeReview`<sup>Required</sup> <a name="CreateCodeReview" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateCodeReview"></a>

```typescript
public readonly CreateCodeReview: string[];
```

- *Type:* string[]

IAM actions required for the CreateCodeReview API call.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntegration API call.

---

##### `CreateMembership`<sup>Required</sup> <a name="CreateMembership" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateMembership"></a>

```typescript
public readonly CreateMembership: string[];
```

- *Type:* string[]

IAM actions required for the CreateMembership API call.

---

##### `CreatePentest`<sup>Required</sup> <a name="CreatePentest" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreatePentest"></a>

```typescript
public readonly CreatePentest: string[];
```

- *Type:* string[]

IAM actions required for the CreatePentest API call.

---

##### `CreatePrivateConnection`<sup>Required</sup> <a name="CreatePrivateConnection" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreatePrivateConnection"></a>

```typescript
public readonly CreatePrivateConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreatePrivateConnection API call.

---

##### `CreateSecurityRequirementPack`<sup>Required</sup> <a name="CreateSecurityRequirementPack" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateSecurityRequirementPack"></a>

```typescript
public readonly CreateSecurityRequirementPack: string[];
```

- *Type:* string[]

IAM actions required for the CreateSecurityRequirementPack API call.

---

##### `CreateTargetDomain`<sup>Required</sup> <a name="CreateTargetDomain" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateTargetDomain"></a>

```typescript
public readonly CreateTargetDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateTargetDomain API call.

---

##### `CreateThreat`<sup>Required</sup> <a name="CreateThreat" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateThreat"></a>

```typescript
public readonly CreateThreat: string[];
```

- *Type:* string[]

IAM actions required for the CreateThreat API call.

---

##### `CreateThreatModel`<sup>Required</sup> <a name="CreateThreatModel" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.CreateThreatModel"></a>

```typescript
public readonly CreateThreatModel: string[];
```

- *Type:* string[]

IAM actions required for the CreateThreatModel API call.

---

##### `DeleteAgentSpace`<sup>Required</sup> <a name="DeleteAgentSpace" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteAgentSpace"></a>

```typescript
public readonly DeleteAgentSpace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgentSpace API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteArtifact`<sup>Required</sup> <a name="DeleteArtifact" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteArtifact"></a>

```typescript
public readonly DeleteArtifact: string[];
```

- *Type:* string[]

IAM actions required for the DeleteArtifact API call.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegration API call.

---

##### `DeleteMembership`<sup>Required</sup> <a name="DeleteMembership" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteMembership"></a>

```typescript
public readonly DeleteMembership: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMembership API call.

---

##### `DeletePrivateConnection`<sup>Required</sup> <a name="DeletePrivateConnection" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeletePrivateConnection"></a>

```typescript
public readonly DeletePrivateConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeletePrivateConnection API call.

---

##### `DeleteSecurityRequirementPack`<sup>Required</sup> <a name="DeleteSecurityRequirementPack" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteSecurityRequirementPack"></a>

```typescript
public readonly DeleteSecurityRequirementPack: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSecurityRequirementPack API call.

---

##### `DeleteTargetDomain`<sup>Required</sup> <a name="DeleteTargetDomain" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.DeleteTargetDomain"></a>

```typescript
public readonly DeleteTargetDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTargetDomain API call.

---

##### `DescribePrivateConnection`<sup>Required</sup> <a name="DescribePrivateConnection" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.DescribePrivateConnection"></a>

```typescript
public readonly DescribePrivateConnection: string[];
```

- *Type:* string[]

IAM actions required for the DescribePrivateConnection API call.

---

##### `ImportSecurityRequirements`<sup>Required</sup> <a name="ImportSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ImportSecurityRequirements"></a>

```typescript
public readonly ImportSecurityRequirements: string[];
```

- *Type:* string[]

IAM actions required for the ImportSecurityRequirements API call.

---

##### `InitiateProviderRegistration`<sup>Required</sup> <a name="InitiateProviderRegistration" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.InitiateProviderRegistration"></a>

```typescript
public readonly InitiateProviderRegistration: string[];
```

- *Type:* string[]

IAM actions required for the InitiateProviderRegistration API call.

---

##### `ListAgentSpaces`<sup>Required</sup> <a name="ListAgentSpaces" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListAgentSpaces"></a>

```typescript
public readonly ListAgentSpaces: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentSpaces API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListArtifacts`<sup>Required</sup> <a name="ListArtifacts" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListArtifacts"></a>

```typescript
public readonly ListArtifacts: string[];
```

- *Type:* string[]

IAM actions required for the ListArtifacts API call.

---

##### `ListCodeReviewJobsForCodeReview`<sup>Required</sup> <a name="ListCodeReviewJobsForCodeReview" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListCodeReviewJobsForCodeReview"></a>

```typescript
public readonly ListCodeReviewJobsForCodeReview: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeReviewJobsForCodeReview API call.

---

##### `ListCodeReviewJobTasks`<sup>Required</sup> <a name="ListCodeReviewJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListCodeReviewJobTasks"></a>

```typescript
public readonly ListCodeReviewJobTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeReviewJobTasks API call.

---

##### `ListCodeReviews`<sup>Required</sup> <a name="ListCodeReviews" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListCodeReviews"></a>

```typescript
public readonly ListCodeReviews: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeReviews API call.

---

##### `ListDiscoveredEndpoints`<sup>Required</sup> <a name="ListDiscoveredEndpoints" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListDiscoveredEndpoints"></a>

```typescript
public readonly ListDiscoveredEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListDiscoveredEndpoints API call.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListFindings"></a>

```typescript
public readonly ListFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListFindings API call.

---

##### `ListIntegratedResources`<sup>Required</sup> <a name="ListIntegratedResources" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListIntegratedResources"></a>

```typescript
public readonly ListIntegratedResources: string[];
```

- *Type:* string[]

IAM actions required for the ListIntegratedResources API call.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the ListIntegrations API call.

---

##### `ListMemberships`<sup>Required</sup> <a name="ListMemberships" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListMemberships"></a>

```typescript
public readonly ListMemberships: string[];
```

- *Type:* string[]

IAM actions required for the ListMemberships API call.

---

##### `ListPentestJobsForPentest`<sup>Required</sup> <a name="ListPentestJobsForPentest" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListPentestJobsForPentest"></a>

```typescript
public readonly ListPentestJobsForPentest: string[];
```

- *Type:* string[]

IAM actions required for the ListPentestJobsForPentest API call.

---

##### `ListPentestJobTasks`<sup>Required</sup> <a name="ListPentestJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListPentestJobTasks"></a>

```typescript
public readonly ListPentestJobTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListPentestJobTasks API call.

---

##### `ListPentests`<sup>Required</sup> <a name="ListPentests" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListPentests"></a>

```typescript
public readonly ListPentests: string[];
```

- *Type:* string[]

IAM actions required for the ListPentests API call.

---

##### `ListPrivateConnections`<sup>Required</sup> <a name="ListPrivateConnections" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListPrivateConnections"></a>

```typescript
public readonly ListPrivateConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListPrivateConnections API call.

---

##### `ListSecurityRequirementPacks`<sup>Required</sup> <a name="ListSecurityRequirementPacks" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListSecurityRequirementPacks"></a>

```typescript
public readonly ListSecurityRequirementPacks: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityRequirementPacks API call.

---

##### `ListSecurityRequirements`<sup>Required</sup> <a name="ListSecurityRequirements" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListSecurityRequirements"></a>

```typescript
public readonly ListSecurityRequirements: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityRequirements API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTargetDomains`<sup>Required</sup> <a name="ListTargetDomains" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListTargetDomains"></a>

```typescript
public readonly ListTargetDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListTargetDomains API call.

---

##### `ListThreatModelJobs`<sup>Required</sup> <a name="ListThreatModelJobs" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListThreatModelJobs"></a>

```typescript
public readonly ListThreatModelJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListThreatModelJobs API call.

---

##### `ListThreatModelJobTasks`<sup>Required</sup> <a name="ListThreatModelJobTasks" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListThreatModelJobTasks"></a>

```typescript
public readonly ListThreatModelJobTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListThreatModelJobTasks API call.

---

##### `ListThreatModels`<sup>Required</sup> <a name="ListThreatModels" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListThreatModels"></a>

```typescript
public readonly ListThreatModels: string[];
```

- *Type:* string[]

IAM actions required for the ListThreatModels API call.

---

##### `ListThreats`<sup>Required</sup> <a name="ListThreats" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.ListThreats"></a>

```typescript
public readonly ListThreats: string[];
```

- *Type:* string[]

IAM actions required for the ListThreats API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetArtifact`<sup>Required</sup> <a name="opGetArtifact" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.opGetArtifact"></a>

```typescript
public readonly opGetArtifact: string[];
```

- *Type:* string[]

IAM actions required for the GetArtifact API call.

---

##### `opGetIntegration`<sup>Required</sup> <a name="opGetIntegration" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.opGetIntegration"></a>

```typescript
public readonly opGetIntegration: string[];
```

- *Type:* string[]

IAM actions required for the GetIntegration API call.

---

##### `opGetSecurityRequirementPack`<sup>Required</sup> <a name="opGetSecurityRequirementPack" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.opGetSecurityRequirementPack"></a>

```typescript
public readonly opGetSecurityRequirementPack: string[];
```

- *Type:* string[]

IAM actions required for the GetSecurityRequirementPack API call.

---

##### `StartCodeRemediation`<sup>Required</sup> <a name="StartCodeRemediation" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.StartCodeRemediation"></a>

```typescript
public readonly StartCodeRemediation: string[];
```

- *Type:* string[]

IAM actions required for the StartCodeRemediation API call.

---

##### `StartCodeReviewJob`<sup>Required</sup> <a name="StartCodeReviewJob" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.StartCodeReviewJob"></a>

```typescript
public readonly StartCodeReviewJob: string[];
```

- *Type:* string[]

IAM actions required for the StartCodeReviewJob API call.

---

##### `StartPentestJob`<sup>Required</sup> <a name="StartPentestJob" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.StartPentestJob"></a>

```typescript
public readonly StartPentestJob: string[];
```

- *Type:* string[]

IAM actions required for the StartPentestJob API call.

---

##### `StartThreatModelJob`<sup>Required</sup> <a name="StartThreatModelJob" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.StartThreatModelJob"></a>

```typescript
public readonly StartThreatModelJob: string[];
```

- *Type:* string[]

IAM actions required for the StartThreatModelJob API call.

---

##### `StopCodeReviewJob`<sup>Required</sup> <a name="StopCodeReviewJob" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.StopCodeReviewJob"></a>

```typescript
public readonly StopCodeReviewJob: string[];
```

- *Type:* string[]

IAM actions required for the StopCodeReviewJob API call.

---

##### `StopPentestJob`<sup>Required</sup> <a name="StopPentestJob" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.StopPentestJob"></a>

```typescript
public readonly StopPentestJob: string[];
```

- *Type:* string[]

IAM actions required for the StopPentestJob API call.

---

##### `StopThreatModelJob`<sup>Required</sup> <a name="StopThreatModelJob" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.StopThreatModelJob"></a>

```typescript
public readonly StopThreatModelJob: string[];
```

- *Type:* string[]

IAM actions required for the StopThreatModelJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAgentSpace`<sup>Required</sup> <a name="UpdateAgentSpace" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateAgentSpace"></a>

```typescript
public readonly UpdateAgentSpace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentSpace API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateCodeReview`<sup>Required</sup> <a name="UpdateCodeReview" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateCodeReview"></a>

```typescript
public readonly UpdateCodeReview: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCodeReview API call.

---

##### `UpdateFinding`<sup>Required</sup> <a name="UpdateFinding" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateFinding"></a>

```typescript
public readonly UpdateFinding: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFinding API call.

---

##### `UpdateIntegratedResources`<sup>Required</sup> <a name="UpdateIntegratedResources" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateIntegratedResources"></a>

```typescript
public readonly UpdateIntegratedResources: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIntegratedResources API call.

---

##### `UpdatePentest`<sup>Required</sup> <a name="UpdatePentest" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdatePentest"></a>

```typescript
public readonly UpdatePentest: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePentest API call.

---

##### `UpdatePrivateConnectionCertificate`<sup>Required</sup> <a name="UpdatePrivateConnectionCertificate" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdatePrivateConnectionCertificate"></a>

```typescript
public readonly UpdatePrivateConnectionCertificate: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePrivateConnectionCertificate API call.

---

##### `UpdateSecurityRequirementPack`<sup>Required</sup> <a name="UpdateSecurityRequirementPack" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateSecurityRequirementPack"></a>

```typescript
public readonly UpdateSecurityRequirementPack: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSecurityRequirementPack API call.

---

##### `UpdateTargetDomain`<sup>Required</sup> <a name="UpdateTargetDomain" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateTargetDomain"></a>

```typescript
public readonly UpdateTargetDomain: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTargetDomain API call.

---

##### `UpdateThreat`<sup>Required</sup> <a name="UpdateThreat" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateThreat"></a>

```typescript
public readonly UpdateThreat: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThreat API call.

---

##### `UpdateThreatModel`<sup>Required</sup> <a name="UpdateThreatModel" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.UpdateThreatModel"></a>

```typescript
public readonly UpdateThreatModel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThreatModel API call.

---

##### `VerifyTargetDomain`<sup>Required</sup> <a name="VerifyTargetDomain" id="@cdk_utils/iam.securityagent.SecurityagentOperations.property.VerifyTargetDomain"></a>

```typescript
public readonly VerifyTargetDomain: string[];
```

- *Type:* string[]

IAM actions required for the VerifyTargetDomain API call.

---

### SecurityagentResources <a name="SecurityagentResources" id="@cdk_utils/iam.securityagent.SecurityagentResources"></a>

ARN builders, validators, and parsers for securityagent resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securityagent.SecurityagentResources.Initializer"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

new securityagent.SecurityagentResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.agentSpace">agentSpace</a></code> | Builds an ARN for the AgentSpace resource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.application">application</a></code> | Builds an ARN for the Application resource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.integration">integration</a></code> | Builds an ARN for the Integration resource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.isValidAgentSpaceArn">isValidAgentSpaceArn</a></code> | Validates whether a string is a valid ARN for the AgentSpace resource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the Application resource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.isValidIntegrationArn">isValidIntegrationArn</a></code> | Validates whether a string is a valid ARN for the Integration resource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.isValidPrivateConnectionArn">isValidPrivateConnectionArn</a></code> | Validates whether a string is a valid ARN for the PrivateConnection resource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.isValidSecurityRequirementPackArn">isValidSecurityRequirementPackArn</a></code> | Validates whether a string is a valid ARN for the SecurityRequirementPack resource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.isValidTargetDomainArn">isValidTargetDomainArn</a></code> | Validates whether a string is a valid ARN for the TargetDomain resource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.parseAgentSpaceArn">parseAgentSpaceArn</a></code> | Parses a AgentSpace ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a Application ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.parseIntegrationArn">parseIntegrationArn</a></code> | Parses a Integration ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.parsePrivateConnectionArn">parsePrivateConnectionArn</a></code> | Parses a PrivateConnection ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.parseSecurityRequirementPackArn">parseSecurityRequirementPackArn</a></code> | Parses a SecurityRequirementPack ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.parseTargetDomainArn">parseTargetDomainArn</a></code> | Parses a TargetDomain ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.privateConnection">privateConnection</a></code> | Builds an ARN for the PrivateConnection resource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.securityRequirementPack">securityRequirementPack</a></code> | Builds an ARN for the SecurityRequirementPack resource. |
| <code><a href="#@cdk_utils/iam.securityagent.SecurityagentResources.targetDomain">targetDomain</a></code> | Builds an ARN for the TargetDomain resource. |

---

##### `agentSpace` <a name="agentSpace" id="@cdk_utils/iam.securityagent.SecurityagentResources.agentSpace"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.agentSpace(props: SecurityagentAgentSpaceArnProps)
```

Builds an ARN for the AgentSpace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityagent.SecurityagentResources.agentSpace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityagent.SecurityagentAgentSpaceArnProps">SecurityagentAgentSpaceArnProps</a>

---

##### `application` <a name="application" id="@cdk_utils/iam.securityagent.SecurityagentResources.application"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.application(props: SecurityagentApplicationArnProps)
```

Builds an ARN for the Application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityagent.SecurityagentResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityagent.SecurityagentApplicationArnProps">SecurityagentApplicationArnProps</a>

---

##### `integration` <a name="integration" id="@cdk_utils/iam.securityagent.SecurityagentResources.integration"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.integration(props: SecurityagentIntegrationArnProps)
```

Builds an ARN for the Integration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityagent.SecurityagentResources.integration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityagent.SecurityagentIntegrationArnProps">SecurityagentIntegrationArnProps</a>

---

##### `isValidAgentSpaceArn` <a name="isValidAgentSpaceArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidAgentSpaceArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.isValidAgentSpaceArn(arn: string)
```

Validates whether a string is a valid ARN for the AgentSpace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidAgentSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidApplicationArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the Application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationArn` <a name="isValidIntegrationArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidIntegrationArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.isValidIntegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the Integration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPrivateConnectionArn` <a name="isValidPrivateConnectionArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidPrivateConnectionArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.isValidPrivateConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the PrivateConnection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidPrivateConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSecurityRequirementPackArn` <a name="isValidSecurityRequirementPackArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidSecurityRequirementPackArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.isValidSecurityRequirementPackArn(arn: string)
```

Validates whether a string is a valid ARN for the SecurityRequirementPack resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidSecurityRequirementPackArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTargetDomainArn` <a name="isValidTargetDomainArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidTargetDomainArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.isValidTargetDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the TargetDomain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.isValidTargetDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAgentSpaceArn` <a name="parseAgentSpaceArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parseAgentSpaceArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.parseAgentSpaceArn(arn: string)
```

Parses a AgentSpace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parseAgentSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parseApplicationArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.parseApplicationArn(arn: string)
```

Parses a Application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationArn` <a name="parseIntegrationArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parseIntegrationArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.parseIntegrationArn(arn: string)
```

Parses a Integration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parseIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePrivateConnectionArn` <a name="parsePrivateConnectionArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parsePrivateConnectionArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.parsePrivateConnectionArn(arn: string)
```

Parses a PrivateConnection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parsePrivateConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSecurityRequirementPackArn` <a name="parseSecurityRequirementPackArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parseSecurityRequirementPackArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.parseSecurityRequirementPackArn(arn: string)
```

Parses a SecurityRequirementPack ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parseSecurityRequirementPackArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTargetDomainArn` <a name="parseTargetDomainArn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parseTargetDomainArn"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.parseTargetDomainArn(arn: string)
```

Parses a TargetDomain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityagent.SecurityagentResources.parseTargetDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `privateConnection` <a name="privateConnection" id="@cdk_utils/iam.securityagent.SecurityagentResources.privateConnection"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.privateConnection(props: SecurityagentPrivateConnectionArnProps)
```

Builds an ARN for the PrivateConnection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityagent.SecurityagentResources.privateConnection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityagent.SecurityagentPrivateConnectionArnProps">SecurityagentPrivateConnectionArnProps</a>

---

##### `securityRequirementPack` <a name="securityRequirementPack" id="@cdk_utils/iam.securityagent.SecurityagentResources.securityRequirementPack"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.securityRequirementPack(props: SecurityagentSecurityRequirementPackArnProps)
```

Builds an ARN for the SecurityRequirementPack resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityagent.SecurityagentResources.securityRequirementPack.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityagent.SecurityagentSecurityRequirementPackArnProps">SecurityagentSecurityRequirementPackArnProps</a>

---

##### `targetDomain` <a name="targetDomain" id="@cdk_utils/iam.securityagent.SecurityagentResources.targetDomain"></a>

```typescript
import { securityagent } from '@cdk_utils/iam'

securityagent.SecurityagentResources.targetDomain(props: SecurityagentTargetDomainArnProps)
```

Builds an ARN for the TargetDomain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityagent.SecurityagentResources.targetDomain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityagent.SecurityagentTargetDomainArnProps">SecurityagentTargetDomainArnProps</a>

---




