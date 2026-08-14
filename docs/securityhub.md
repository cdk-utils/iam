# `securityhub` Submodule <a name="`securityhub` Submodule" id="@cdk_utils/iam.securityhub"></a>


## Structs <a name="Structs" id="Structs"></a>

### SecurityHubAggregatorv2ArnComponents <a name="SecurityHubAggregatorv2ArnComponents" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnComponents"></a>

Parsed components of a aggregatorv2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnComponents.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubAggregatorv2ArnComponents: securityhub.SecurityHubAggregatorv2ArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnComponents.property.aggregatorV2Id">aggregatorV2Id</a></code> | <code>string</code> | The AggregatorV2Id component. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `aggregatorV2Id`<sup>Required</sup> <a name="aggregatorV2Id" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnComponents.property.aggregatorV2Id"></a>

```typescript
public readonly aggregatorV2Id: string;
```

- *Type:* string

The AggregatorV2Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityHubAggregatorv2ArnProps <a name="SecurityHubAggregatorv2ArnProps" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnProps"></a>

Properties for building a aggregatorv2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnProps.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubAggregatorv2ArnProps: securityhub.SecurityHubAggregatorv2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnProps.property.aggregatorV2Id">aggregatorV2Id</a></code> | <code>string</code> | The AggregatorV2Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `aggregatorV2Id`<sup>Required</sup> <a name="aggregatorV2Id" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnProps.property.aggregatorV2Id"></a>

```typescript
public readonly aggregatorV2Id: string;
```

- *Type:* string

The AggregatorV2Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityHubAutomationRuleArnComponents <a name="SecurityHubAutomationRuleArnComponents" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnComponents"></a>

Parsed components of a automation-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnComponents.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubAutomationRuleArnComponents: securityhub.SecurityHubAutomationRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnComponents.property.automationRuleId">automationRuleId</a></code> | <code>string</code> | The AutomationRuleId component. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `automationRuleId`<sup>Required</sup> <a name="automationRuleId" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnComponents.property.automationRuleId"></a>

```typescript
public readonly automationRuleId: string;
```

- *Type:* string

The AutomationRuleId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityHubAutomationRuleArnProps <a name="SecurityHubAutomationRuleArnProps" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnProps"></a>

Properties for building a automation-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnProps.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubAutomationRuleArnProps: securityhub.SecurityHubAutomationRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnProps.property.automationRuleId">automationRuleId</a></code> | <code>string</code> | The AutomationRuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `automationRuleId`<sup>Required</sup> <a name="automationRuleId" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnProps.property.automationRuleId"></a>

```typescript
public readonly automationRuleId: string;
```

- *Type:* string

The AutomationRuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityHubAutomationRulev2ArnComponents <a name="SecurityHubAutomationRulev2ArnComponents" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnComponents"></a>

Parsed components of a automation-rulev2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnComponents.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubAutomationRulev2ArnComponents: securityhub.SecurityHubAutomationRulev2ArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnComponents.property.automationRuleV2Id">automationRuleV2Id</a></code> | <code>string</code> | The AutomationRuleV2Id component. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `automationRuleV2Id`<sup>Required</sup> <a name="automationRuleV2Id" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnComponents.property.automationRuleV2Id"></a>

```typescript
public readonly automationRuleV2Id: string;
```

- *Type:* string

The AutomationRuleV2Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityHubAutomationRulev2ArnProps <a name="SecurityHubAutomationRulev2ArnProps" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnProps"></a>

Properties for building a automation-rulev2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnProps.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubAutomationRulev2ArnProps: securityhub.SecurityHubAutomationRulev2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnProps.property.automationRuleV2Id">automationRuleV2Id</a></code> | <code>string</code> | The AutomationRuleV2Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `automationRuleV2Id`<sup>Required</sup> <a name="automationRuleV2Id" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnProps.property.automationRuleV2Id"></a>

```typescript
public readonly automationRuleV2Id: string;
```

- *Type:* string

The AutomationRuleV2Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityHubConfigurationPolicyArnComponents <a name="SecurityHubConfigurationPolicyArnComponents" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnComponents"></a>

Parsed components of a configuration-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnComponents.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubConfigurationPolicyArnComponents: securityhub.SecurityHubConfigurationPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnComponents.property.configurationPolicyId">configurationPolicyId</a></code> | <code>string</code> | The ConfigurationPolicyId component. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configurationPolicyId`<sup>Required</sup> <a name="configurationPolicyId" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnComponents.property.configurationPolicyId"></a>

```typescript
public readonly configurationPolicyId: string;
```

- *Type:* string

The ConfigurationPolicyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityHubConfigurationPolicyArnProps <a name="SecurityHubConfigurationPolicyArnProps" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnProps"></a>

Properties for building a configuration-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnProps.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubConfigurationPolicyArnProps: securityhub.SecurityHubConfigurationPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnProps.property.configurationPolicyId">configurationPolicyId</a></code> | <code>string</code> | The ConfigurationPolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configurationPolicyId`<sup>Required</sup> <a name="configurationPolicyId" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnProps.property.configurationPolicyId"></a>

```typescript
public readonly configurationPolicyId: string;
```

- *Type:* string

The ConfigurationPolicyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityHubConnectorArnComponents <a name="SecurityHubConnectorArnComponents" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnComponents"></a>

Parsed components of a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnComponents.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubConnectorArnComponents: securityhub.SecurityHubConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorArnComponents.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnComponents.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityHubConnectorArnProps <a name="SecurityHubConnectorArnProps" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnProps"></a>

Properties for building a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnProps.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubConnectorArnProps: securityhub.SecurityHubConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorArnProps.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnProps.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityHubConnectorv2ArnComponents <a name="SecurityHubConnectorv2ArnComponents" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnComponents"></a>

Parsed components of a connectorv2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnComponents.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubConnectorv2ArnComponents: securityhub.SecurityHubConnectorv2ArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnComponents.property.connectorV2Id">connectorV2Id</a></code> | <code>string</code> | The ConnectorV2Id component. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorV2Id`<sup>Required</sup> <a name="connectorV2Id" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnComponents.property.connectorV2Id"></a>

```typescript
public readonly connectorV2Id: string;
```

- *Type:* string

The ConnectorV2Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityHubConnectorv2ArnProps <a name="SecurityHubConnectorv2ArnProps" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnProps"></a>

Properties for building a connectorv2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnProps.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubConnectorv2ArnProps: securityhub.SecurityHubConnectorv2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnProps.property.connectorV2Id">connectorV2Id</a></code> | <code>string</code> | The ConnectorV2Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorV2Id`<sup>Required</sup> <a name="connectorV2Id" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnProps.property.connectorV2Id"></a>

```typescript
public readonly connectorV2Id: string;
```

- *Type:* string

The ConnectorV2Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityHubFindingAggregatorArnComponents <a name="SecurityHubFindingAggregatorArnComponents" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnComponents"></a>

Parsed components of a finding-aggregator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnComponents.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubFindingAggregatorArnComponents: securityhub.SecurityHubFindingAggregatorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnComponents.property.findingAggregatorId">findingAggregatorId</a></code> | <code>string</code> | The FindingAggregatorId component. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `findingAggregatorId`<sup>Required</sup> <a name="findingAggregatorId" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnComponents.property.findingAggregatorId"></a>

```typescript
public readonly findingAggregatorId: string;
```

- *Type:* string

The FindingAggregatorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityHubFindingAggregatorArnProps <a name="SecurityHubFindingAggregatorArnProps" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnProps"></a>

Properties for building a finding-aggregator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnProps.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubFindingAggregatorArnProps: securityhub.SecurityHubFindingAggregatorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnProps.property.findingAggregatorId">findingAggregatorId</a></code> | <code>string</code> | The FindingAggregatorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `findingAggregatorId`<sup>Required</sup> <a name="findingAggregatorId" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnProps.property.findingAggregatorId"></a>

```typescript
public readonly findingAggregatorId: string;
```

- *Type:* string

The FindingAggregatorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityHubHubArnComponents <a name="SecurityHubHubArnComponents" id="@cdk_utils/iam.securityhub.SecurityHubHubArnComponents"></a>

Parsed components of a hub ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubHubArnComponents.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubHubArnComponents: securityhub.SecurityHubHubArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubHubArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubHubArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubHubArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityHubHubArnProps <a name="SecurityHubHubArnProps" id="@cdk_utils/iam.securityhub.SecurityHubHubArnProps"></a>

Properties for building a hub ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubHubArnProps.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubHubArnProps: securityhub.SecurityHubHubArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubHubArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubHubArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubHubArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityHubHubv2ArnComponents <a name="SecurityHubHubv2ArnComponents" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnComponents"></a>

Parsed components of a hubv2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnComponents.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubHubv2ArnComponents: securityhub.SecurityHubHubv2ArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubv2ArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubv2ArnComponents.property.hubV2Id">hubV2Id</a></code> | <code>string</code> | The HubV2Id component. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubv2ArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubv2ArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `hubV2Id`<sup>Required</sup> <a name="hubV2Id" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnComponents.property.hubV2Id"></a>

```typescript
public readonly hubV2Id: string;
```

- *Type:* string

The HubV2Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityHubHubv2ArnProps <a name="SecurityHubHubv2ArnProps" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnProps"></a>

Properties for building a hubv2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnProps.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubHubv2ArnProps: securityhub.SecurityHubHubv2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubv2ArnProps.property.hubV2Id">hubV2Id</a></code> | <code>string</code> | The HubV2Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubv2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubv2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubHubv2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `hubV2Id`<sup>Required</sup> <a name="hubV2Id" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnProps.property.hubV2Id"></a>

```typescript
public readonly hubV2Id: string;
```

- *Type:* string

The HubV2Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubHubv2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityHubProductArnComponents <a name="SecurityHubProductArnComponents" id="@cdk_utils/iam.securityhub.SecurityHubProductArnComponents"></a>

Parsed components of a product ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubProductArnComponents.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubProductArnComponents: securityhub.SecurityHubProductArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubProductArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubProductArnComponents.property.company">company</a></code> | <code>string</code> | The Company component. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubProductArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubProductArnComponents.property.productId">productId</a></code> | <code>string</code> | The ProductId component. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubProductArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubProductArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `company`<sup>Required</sup> <a name="company" id="@cdk_utils/iam.securityhub.SecurityHubProductArnComponents.property.company"></a>

```typescript
public readonly company: string;
```

- *Type:* string

The Company component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubProductArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.securityhub.SecurityHubProductArnComponents.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubProductArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityHubProductArnProps <a name="SecurityHubProductArnProps" id="@cdk_utils/iam.securityhub.SecurityHubProductArnProps"></a>

Properties for building a product ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.securityhub.SecurityHubProductArnProps.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

const securityHubProductArnProps: securityhub.SecurityHubProductArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubProductArnProps.property.company">company</a></code> | <code>string</code> | The Company component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubProductArnProps.property.productId">productId</a></code> | <code>string</code> | The ProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubProductArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubProductArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubProductArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `company`<sup>Required</sup> <a name="company" id="@cdk_utils/iam.securityhub.SecurityHubProductArnProps.property.company"></a>

```typescript
public readonly company: string;
```

- *Type:* string

The Company component of the ARN.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdk_utils/iam.securityhub.SecurityHubProductArnProps.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ProductId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.securityhub.SecurityHubProductArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.securityhub.SecurityHubProductArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.securityhub.SecurityHubProductArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityHubActions <a name="SecurityHubActions" id="@cdk_utils/iam.securityhub.SecurityHubActions"></a>

IAM action constants for the securityhub service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securityhub.SecurityHubActions.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

new securityhub.SecurityHubActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.AcceptAdministratorInvitation">AcceptAdministratorInvitation</a></code> | <code>string</code> | [Write] securityhub:AcceptAdministratorInvitation. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.AcceptInvitation">AcceptInvitation</a></code> | <code>string</code> | [Write] securityhub:AcceptInvitation. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetAdhocInsightResults">actionGetAdhocInsightResults</a></code> | <code>string</code> | [Read] securityhub:GetAdhocInsightResults. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetAdministratorAccount">actionGetAdministratorAccount</a></code> | <code>string</code> | [Read] securityhub:GetAdministratorAccount. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetAggregatorV2">actionGetAggregatorV2</a></code> | <code>string</code> | [Read] securityhub:GetAggregatorV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetAutomationRuleV2">actionGetAutomationRuleV2</a></code> | <code>string</code> | [Read] securityhub:GetAutomationRuleV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetConfigurationPolicy">actionGetConfigurationPolicy</a></code> | <code>string</code> | [Read] securityhub:GetConfigurationPolicy. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetConfigurationPolicyAssociation">actionGetConfigurationPolicyAssociation</a></code> | <code>string</code> | [Read] securityhub:GetConfigurationPolicyAssociation. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetConnector">actionGetConnector</a></code> | <code>string</code> | [Read] securityhub:GetConnector. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetConnectorV2">actionGetConnectorV2</a></code> | <code>string</code> | [Read] securityhub:GetConnectorV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetControlFindingSummary">actionGetControlFindingSummary</a></code> | <code>string</code> | [Read] securityhub:GetControlFindingSummary. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetCoverageStatisticsV2">actionGetCoverageStatisticsV2</a></code> | <code>string</code> | [Read] securityhub:GetCoverageStatisticsV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetEnabledStandards">actionGetEnabledStandards</a></code> | <code>string</code> | [List] securityhub:GetEnabledStandards. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFindingAggregator">actionGetFindingAggregator</a></code> | <code>string</code> | [Read] securityhub:GetFindingAggregator. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFindingHistory">actionGetFindingHistory</a></code> | <code>string</code> | [Read] securityhub:GetFindingHistory. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFindings">actionGetFindings</a></code> | <code>string</code> | [Read] securityhub:GetFindings. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFindingsTrendsV2">actionGetFindingsTrendsV2</a></code> | <code>string</code> | [Read] securityhub:GetFindingsTrendsV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFreeTrialEndDate">actionGetFreeTrialEndDate</a></code> | <code>string</code> | [Read] securityhub:GetFreeTrialEndDate. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFreeTrialUsage">actionGetFreeTrialUsage</a></code> | <code>string</code> | [Read] securityhub:GetFreeTrialUsage. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetInsightFindingTrend">actionGetInsightFindingTrend</a></code> | <code>string</code> | [Read] securityhub:GetInsightFindingTrend. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetInsightResults">actionGetInsightResults</a></code> | <code>string</code> | [Read] securityhub:GetInsightResults. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetInsights">actionGetInsights</a></code> | <code>string</code> | [List] securityhub:GetInsights. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetInvitationsCount">actionGetInvitationsCount</a></code> | <code>string</code> | [Read] securityhub:GetInvitationsCount. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetMasterAccount">actionGetMasterAccount</a></code> | <code>string</code> | [Read] securityhub:GetMasterAccount. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetMembers">actionGetMembers</a></code> | <code>string</code> | [Read] securityhub:GetMembers. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetRecommendedPolicyV2">actionGetRecommendedPolicyV2</a></code> | <code>string</code> | [Read] securityhub:GetRecommendedPolicyV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetResourcesStatisticsV2">actionGetResourcesStatisticsV2</a></code> | <code>string</code> | [Read] securityhub:GetResourcesStatisticsV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetResourcesTrendsV2">actionGetResourcesTrendsV2</a></code> | <code>string</code> | [Read] securityhub:GetResourcesTrendsV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetResourcesV2">actionGetResourcesV2</a></code> | <code>string</code> | [Read] securityhub:GetResourcesV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetSecurityControlDefinition">actionGetSecurityControlDefinition</a></code> | <code>string</code> | [Read] securityhub:GetSecurityControlDefinition. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetUsage">actionGetUsage</a></code> | <code>string</code> | [Read] securityhub:GetUsage. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetUsageV2">actionGetUsageV2</a></code> | <code>string</code> | [Read] securityhub:GetUsageV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] securityhub:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchDeleteAutomationRules">BatchDeleteAutomationRules</a></code> | <code>string</code> | [Write] securityhub:BatchDeleteAutomationRules. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchDisableStandards">BatchDisableStandards</a></code> | <code>string</code> | [Write] securityhub:BatchDisableStandards. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchEnableStandards">BatchEnableStandards</a></code> | <code>string</code> | [Write] securityhub:BatchEnableStandards. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetAutomationRules">BatchGetAutomationRules</a></code> | <code>string</code> | [Read] securityhub:BatchGetAutomationRules. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetConfigurationPolicyAssociations">BatchGetConfigurationPolicyAssociations</a></code> | <code>string</code> | [Read] securityhub:BatchGetConfigurationPolicyAssociations. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetControlEvaluations">BatchGetControlEvaluations</a></code> | <code>string</code> | [Read] securityhub:BatchGetControlEvaluations. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetEnabledRegionsV2">BatchGetEnabledRegionsV2</a></code> | <code>string</code> | [Read] securityhub:BatchGetEnabledRegionsV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetSecurityControls">BatchGetSecurityControls</a></code> | <code>string</code> | [Read] securityhub:BatchGetSecurityControls. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetStandardsControlAssociations">BatchGetStandardsControlAssociations</a></code> | <code>string</code> | [Read] securityhub:BatchGetStandardsControlAssociations. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchImportFindings">BatchImportFindings</a></code> | <code>string</code> | [Write] securityhub:BatchImportFindings. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchUpdateAutomationRules">BatchUpdateAutomationRules</a></code> | <code>string</code> | [Write] securityhub:BatchUpdateAutomationRules. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchUpdateFindings">BatchUpdateFindings</a></code> | <code>string</code> | [Write] securityhub:BatchUpdateFindings. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchUpdateStandardsControlAssociations">BatchUpdateStandardsControlAssociations</a></code> | <code>string</code> | [Write] securityhub:BatchUpdateStandardsControlAssociations. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ConnectorRegistrationsV2">ConnectorRegistrationsV2</a></code> | <code>string</code> | [Write] securityhub:ConnectorRegistrationsV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateActionTarget">CreateActionTarget</a></code> | <code>string</code> | [Write] securityhub:CreateActionTarget. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateAggregatorV2">CreateAggregatorV2</a></code> | <code>string</code> | [Write] securityhub:CreateAggregatorV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateAutomationRule">CreateAutomationRule</a></code> | <code>string</code> | [Write] securityhub:CreateAutomationRule. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateAutomationRuleV2">CreateAutomationRuleV2</a></code> | <code>string</code> | [Write] securityhub:CreateAutomationRuleV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateConfigurationPolicy">CreateConfigurationPolicy</a></code> | <code>string</code> | [Write] securityhub:CreateConfigurationPolicy. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateConnector">CreateConnector</a></code> | <code>string</code> | [Write] securityhub:CreateConnector. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateConnectorV2">CreateConnectorV2</a></code> | <code>string</code> | [Write] securityhub:CreateConnectorV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateFindingAggregator">CreateFindingAggregator</a></code> | <code>string</code> | [Write] securityhub:CreateFindingAggregator. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateInsight">CreateInsight</a></code> | <code>string</code> | [Write] securityhub:CreateInsight. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateMembers">CreateMembers</a></code> | <code>string</code> | [Write] securityhub:CreateMembers. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateTicketV2">CreateTicketV2</a></code> | <code>string</code> | [Write] securityhub:CreateTicketV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DeclineInvitations">DeclineInvitations</a></code> | <code>string</code> | [Write] securityhub:DeclineInvitations. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteActionTarget">DeleteActionTarget</a></code> | <code>string</code> | [Write] securityhub:DeleteActionTarget. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteAggregatorV2">DeleteAggregatorV2</a></code> | <code>string</code> | [Write] securityhub:DeleteAggregatorV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteAutomationRuleV2">DeleteAutomationRuleV2</a></code> | <code>string</code> | [Write] securityhub:DeleteAutomationRuleV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteConfigurationPolicy">DeleteConfigurationPolicy</a></code> | <code>string</code> | [Write] securityhub:DeleteConfigurationPolicy. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteConnector">DeleteConnector</a></code> | <code>string</code> | [Write] securityhub:DeleteConnector. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteConnectorV2">DeleteConnectorV2</a></code> | <code>string</code> | [Write] securityhub:DeleteConnectorV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteFindingAggregator">DeleteFindingAggregator</a></code> | <code>string</code> | [Write] securityhub:DeleteFindingAggregator. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteInsight">DeleteInsight</a></code> | <code>string</code> | [Write] securityhub:DeleteInsight. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteInvitations">DeleteInvitations</a></code> | <code>string</code> | [Write] securityhub:DeleteInvitations. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteMembers">DeleteMembers</a></code> | <code>string</code> | [Write] securityhub:DeleteMembers. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeActionTargets">DescribeActionTargets</a></code> | <code>string</code> | [Read] securityhub:DescribeActionTargets. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeHub">DescribeHub</a></code> | <code>string</code> | [Read] securityhub:DescribeHub. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeOrganizationConfiguration">DescribeOrganizationConfiguration</a></code> | <code>string</code> | [Read] securityhub:DescribeOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeProducts">DescribeProducts</a></code> | <code>string</code> | [Read] securityhub:DescribeProducts. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeProductsV2">DescribeProductsV2</a></code> | <code>string</code> | [Read] securityhub:DescribeProductsV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeSecurityHubV2">DescribeSecurityHubV2</a></code> | <code>string</code> | [Read] securityhub:DescribeSecurityHubV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeStandards">DescribeStandards</a></code> | <code>string</code> | [Read] securityhub:DescribeStandards. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeStandardsControls">DescribeStandardsControls</a></code> | <code>string</code> | [Read] securityhub:DescribeStandardsControls. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DisableImportFindingsForProduct">DisableImportFindingsForProduct</a></code> | <code>string</code> | [Write] securityhub:DisableImportFindingsForProduct. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DisableOrganizationAdminAccount">DisableOrganizationAdminAccount</a></code> | <code>string</code> | [Write] securityhub:DisableOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DisableSecurityHub">DisableSecurityHub</a></code> | <code>string</code> | [Write] securityhub:DisableSecurityHub. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DisableSecurityHubFeatureV2">DisableSecurityHubFeatureV2</a></code> | <code>string</code> | [Write] securityhub:DisableSecurityHubFeatureV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DisableSecurityHubV2">DisableSecurityHubV2</a></code> | <code>string</code> | [Write] securityhub:DisableSecurityHubV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</a></code> | <code>string</code> | [Write] securityhub:DisassociateFromAdministratorAccount. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DisassociateFromMasterAccount">DisassociateFromMasterAccount</a></code> | <code>string</code> | [Write] securityhub:DisassociateFromMasterAccount. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.DisassociateMembers">DisassociateMembers</a></code> | <code>string</code> | [Write] securityhub:DisassociateMembers. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.EnableImportFindingsForProduct">EnableImportFindingsForProduct</a></code> | <code>string</code> | [Write] securityhub:EnableImportFindingsForProduct. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.EnableOrganizationAdminAccount">EnableOrganizationAdminAccount</a></code> | <code>string</code> | [Write] securityhub:EnableOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.EnableSecurityHub">EnableSecurityHub</a></code> | <code>string</code> | [Write] securityhub:EnableSecurityHub. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.EnableSecurityHubFeatureV2">EnableSecurityHubFeatureV2</a></code> | <code>string</code> | [Write] securityhub:EnableSecurityHubFeatureV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.EnableSecurityHubV2">EnableSecurityHubV2</a></code> | <code>string</code> | [Write] securityhub:EnableSecurityHubV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.GenerateRecommendedPolicyV2">GenerateRecommendedPolicyV2</a></code> | <code>string</code> | [Write] securityhub:GenerateRecommendedPolicyV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.InviteMembers">InviteMembers</a></code> | <code>string</code> | [Write] securityhub:InviteMembers. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListAccountUsageV2">ListAccountUsageV2</a></code> | <code>string</code> | [List] securityhub:ListAccountUsageV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListAggregatorsV2">ListAggregatorsV2</a></code> | <code>string</code> | [List] securityhub:ListAggregatorsV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListAutomationRules">ListAutomationRules</a></code> | <code>string</code> | [List] securityhub:ListAutomationRules. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListAutomationRulesV2">ListAutomationRulesV2</a></code> | <code>string</code> | [List] securityhub:ListAutomationRulesV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListConfigurationPolicies">ListConfigurationPolicies</a></code> | <code>string</code> | [List] securityhub:ListConfigurationPolicies. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListConfigurationPolicyAssociations">ListConfigurationPolicyAssociations</a></code> | <code>string</code> | [List] securityhub:ListConfigurationPolicyAssociations. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListConnectors">ListConnectors</a></code> | <code>string</code> | [List] securityhub:ListConnectors. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListConnectorsV2">ListConnectorsV2</a></code> | <code>string</code> | [List] securityhub:ListConnectorsV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListControlEvaluationSummaries">ListControlEvaluationSummaries</a></code> | <code>string</code> | [Read] securityhub:ListControlEvaluationSummaries. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListEnabledProductsForImport">ListEnabledProductsForImport</a></code> | <code>string</code> | [List] securityhub:ListEnabledProductsForImport. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListFindingAggregators">ListFindingAggregators</a></code> | <code>string</code> | [List] securityhub:ListFindingAggregators. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListFreeTrialStatusesV2">ListFreeTrialStatusesV2</a></code> | <code>string</code> | [List] securityhub:ListFreeTrialStatusesV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListInvitations">ListInvitations</a></code> | <code>string</code> | [List] securityhub:ListInvitations. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListMembers">ListMembers</a></code> | <code>string</code> | [List] securityhub:ListMembers. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListOrganizationAdminAccounts">ListOrganizationAdminAccounts</a></code> | <code>string</code> | [List] securityhub:ListOrganizationAdminAccounts. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListSecurityControlDefinitions">ListSecurityControlDefinitions</a></code> | <code>string</code> | [List] securityhub:ListSecurityControlDefinitions. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListStandardsControlAssociations">ListStandardsControlAssociations</a></code> | <code>string</code> | [List] securityhub:ListStandardsControlAssociations. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] securityhub:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.SendFindingEvents">SendFindingEvents</a></code> | <code>string</code> | [Read] securityhub:SendFindingEvents. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.SendInsightEvents">SendInsightEvents</a></code> | <code>string</code> | [Read] securityhub:SendInsightEvents. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.StartConfigurationPolicyAssociation">StartConfigurationPolicyAssociation</a></code> | <code>string</code> | [Write] securityhub:StartConfigurationPolicyAssociation. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.StartConfigurationPolicyDisassociation">StartConfigurationPolicyDisassociation</a></code> | <code>string</code> | [Write] securityhub:StartConfigurationPolicyDisassociation. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] securityhub:TagResource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] securityhub:UntagResource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateActionTarget">UpdateActionTarget</a></code> | <code>string</code> | [Write] securityhub:UpdateActionTarget. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateAggregatorV2">UpdateAggregatorV2</a></code> | <code>string</code> | [Write] securityhub:UpdateAggregatorV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateAutomationRuleV2">UpdateAutomationRuleV2</a></code> | <code>string</code> | [Write] securityhub:UpdateAutomationRuleV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateConfigurationPolicy">UpdateConfigurationPolicy</a></code> | <code>string</code> | [Write] securityhub:UpdateConfigurationPolicy. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateConnector">UpdateConnector</a></code> | <code>string</code> | [Write] securityhub:UpdateConnector. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateConnectorV2">UpdateConnectorV2</a></code> | <code>string</code> | [Write] securityhub:UpdateConnectorV2. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateFindingAggregator">UpdateFindingAggregator</a></code> | <code>string</code> | [Write] securityhub:UpdateFindingAggregator. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateFindings">UpdateFindings</a></code> | <code>string</code> | [Write] securityhub:UpdateFindings. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateInsight">UpdateInsight</a></code> | <code>string</code> | [Write] securityhub:UpdateInsight. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateOrganizationConfiguration">UpdateOrganizationConfiguration</a></code> | <code>string</code> | [Write] securityhub:UpdateOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateSecurityControl">UpdateSecurityControl</a></code> | <code>string</code> | [Write] securityhub:UpdateSecurityControl. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateSecurityHubConfiguration">UpdateSecurityHubConfiguration</a></code> | <code>string</code> | [Write] securityhub:UpdateSecurityHubConfiguration. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateStandardsControl">UpdateStandardsControl</a></code> | <code>string</code> | [Write] securityhub:UpdateStandardsControl. |

---

##### `AcceptAdministratorInvitation`<sup>Required</sup> <a name="AcceptAdministratorInvitation" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.AcceptAdministratorInvitation"></a>

```typescript
public readonly AcceptAdministratorInvitation: string;
```

- *Type:* string

[Write] securityhub:AcceptAdministratorInvitation.

---

##### `AcceptInvitation`<sup>Required</sup> <a name="AcceptInvitation" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.AcceptInvitation"></a>

```typescript
public readonly AcceptInvitation: string;
```

- *Type:* string

[Write] securityhub:AcceptInvitation.

---

##### `actionGetAdhocInsightResults`<sup>Required</sup> <a name="actionGetAdhocInsightResults" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetAdhocInsightResults"></a>

```typescript
public readonly actionGetAdhocInsightResults: string;
```

- *Type:* string

[Read] securityhub:GetAdhocInsightResults.

---

##### `actionGetAdministratorAccount`<sup>Required</sup> <a name="actionGetAdministratorAccount" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetAdministratorAccount"></a>

```typescript
public readonly actionGetAdministratorAccount: string;
```

- *Type:* string

[Read] securityhub:GetAdministratorAccount.

---

##### `actionGetAggregatorV2`<sup>Required</sup> <a name="actionGetAggregatorV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetAggregatorV2"></a>

```typescript
public readonly actionGetAggregatorV2: string;
```

- *Type:* string

[Read] securityhub:GetAggregatorV2.

---

##### `actionGetAutomationRuleV2`<sup>Required</sup> <a name="actionGetAutomationRuleV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetAutomationRuleV2"></a>

```typescript
public readonly actionGetAutomationRuleV2: string;
```

- *Type:* string

[Read] securityhub:GetAutomationRuleV2.

---

##### `actionGetConfigurationPolicy`<sup>Required</sup> <a name="actionGetConfigurationPolicy" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetConfigurationPolicy"></a>

```typescript
public readonly actionGetConfigurationPolicy: string;
```

- *Type:* string

[Read] securityhub:GetConfigurationPolicy.

---

##### `actionGetConfigurationPolicyAssociation`<sup>Required</sup> <a name="actionGetConfigurationPolicyAssociation" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetConfigurationPolicyAssociation"></a>

```typescript
public readonly actionGetConfigurationPolicyAssociation: string;
```

- *Type:* string

[Read] securityhub:GetConfigurationPolicyAssociation.

---

##### `actionGetConnector`<sup>Required</sup> <a name="actionGetConnector" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetConnector"></a>

```typescript
public readonly actionGetConnector: string;
```

- *Type:* string

[Read] securityhub:GetConnector.

---

##### `actionGetConnectorV2`<sup>Required</sup> <a name="actionGetConnectorV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetConnectorV2"></a>

```typescript
public readonly actionGetConnectorV2: string;
```

- *Type:* string

[Read] securityhub:GetConnectorV2.

---

##### `actionGetControlFindingSummary`<sup>Required</sup> <a name="actionGetControlFindingSummary" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetControlFindingSummary"></a>

```typescript
public readonly actionGetControlFindingSummary: string;
```

- *Type:* string

[Read] securityhub:GetControlFindingSummary.

---

##### `actionGetCoverageStatisticsV2`<sup>Required</sup> <a name="actionGetCoverageStatisticsV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetCoverageStatisticsV2"></a>

```typescript
public readonly actionGetCoverageStatisticsV2: string;
```

- *Type:* string

[Read] securityhub:GetCoverageStatisticsV2.

---

##### `actionGetEnabledStandards`<sup>Required</sup> <a name="actionGetEnabledStandards" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetEnabledStandards"></a>

```typescript
public readonly actionGetEnabledStandards: string;
```

- *Type:* string

[List] securityhub:GetEnabledStandards.

---

##### `actionGetFindingAggregator`<sup>Required</sup> <a name="actionGetFindingAggregator" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFindingAggregator"></a>

```typescript
public readonly actionGetFindingAggregator: string;
```

- *Type:* string

[Read] securityhub:GetFindingAggregator.

---

##### `actionGetFindingHistory`<sup>Required</sup> <a name="actionGetFindingHistory" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFindingHistory"></a>

```typescript
public readonly actionGetFindingHistory: string;
```

- *Type:* string

[Read] securityhub:GetFindingHistory.

---

##### `actionGetFindings`<sup>Required</sup> <a name="actionGetFindings" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFindings"></a>

```typescript
public readonly actionGetFindings: string;
```

- *Type:* string

[Read] securityhub:GetFindings.

---

##### `actionGetFindingsTrendsV2`<sup>Required</sup> <a name="actionGetFindingsTrendsV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFindingsTrendsV2"></a>

```typescript
public readonly actionGetFindingsTrendsV2: string;
```

- *Type:* string

[Read] securityhub:GetFindingsTrendsV2.

---

##### `actionGetFreeTrialEndDate`<sup>Required</sup> <a name="actionGetFreeTrialEndDate" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFreeTrialEndDate"></a>

```typescript
public readonly actionGetFreeTrialEndDate: string;
```

- *Type:* string

[Read] securityhub:GetFreeTrialEndDate.

---

##### `actionGetFreeTrialUsage`<sup>Required</sup> <a name="actionGetFreeTrialUsage" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetFreeTrialUsage"></a>

```typescript
public readonly actionGetFreeTrialUsage: string;
```

- *Type:* string

[Read] securityhub:GetFreeTrialUsage.

---

##### `actionGetInsightFindingTrend`<sup>Required</sup> <a name="actionGetInsightFindingTrend" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetInsightFindingTrend"></a>

```typescript
public readonly actionGetInsightFindingTrend: string;
```

- *Type:* string

[Read] securityhub:GetInsightFindingTrend.

---

##### `actionGetInsightResults`<sup>Required</sup> <a name="actionGetInsightResults" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetInsightResults"></a>

```typescript
public readonly actionGetInsightResults: string;
```

- *Type:* string

[Read] securityhub:GetInsightResults.

---

##### `actionGetInsights`<sup>Required</sup> <a name="actionGetInsights" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetInsights"></a>

```typescript
public readonly actionGetInsights: string;
```

- *Type:* string

[List] securityhub:GetInsights.

---

##### `actionGetInvitationsCount`<sup>Required</sup> <a name="actionGetInvitationsCount" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetInvitationsCount"></a>

```typescript
public readonly actionGetInvitationsCount: string;
```

- *Type:* string

[Read] securityhub:GetInvitationsCount.

---

##### `actionGetMasterAccount`<sup>Required</sup> <a name="actionGetMasterAccount" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetMasterAccount"></a>

```typescript
public readonly actionGetMasterAccount: string;
```

- *Type:* string

[Read] securityhub:GetMasterAccount.

---

##### `actionGetMembers`<sup>Required</sup> <a name="actionGetMembers" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetMembers"></a>

```typescript
public readonly actionGetMembers: string;
```

- *Type:* string

[Read] securityhub:GetMembers.

---

##### `actionGetRecommendedPolicyV2`<sup>Required</sup> <a name="actionGetRecommendedPolicyV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetRecommendedPolicyV2"></a>

```typescript
public readonly actionGetRecommendedPolicyV2: string;
```

- *Type:* string

[Read] securityhub:GetRecommendedPolicyV2.

---

##### `actionGetResourcesStatisticsV2`<sup>Required</sup> <a name="actionGetResourcesStatisticsV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetResourcesStatisticsV2"></a>

```typescript
public readonly actionGetResourcesStatisticsV2: string;
```

- *Type:* string

[Read] securityhub:GetResourcesStatisticsV2.

---

##### `actionGetResourcesTrendsV2`<sup>Required</sup> <a name="actionGetResourcesTrendsV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetResourcesTrendsV2"></a>

```typescript
public readonly actionGetResourcesTrendsV2: string;
```

- *Type:* string

[Read] securityhub:GetResourcesTrendsV2.

---

##### `actionGetResourcesV2`<sup>Required</sup> <a name="actionGetResourcesV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetResourcesV2"></a>

```typescript
public readonly actionGetResourcesV2: string;
```

- *Type:* string

[Read] securityhub:GetResourcesV2.

---

##### `actionGetSecurityControlDefinition`<sup>Required</sup> <a name="actionGetSecurityControlDefinition" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetSecurityControlDefinition"></a>

```typescript
public readonly actionGetSecurityControlDefinition: string;
```

- *Type:* string

[Read] securityhub:GetSecurityControlDefinition.

---

##### `actionGetUsage`<sup>Required</sup> <a name="actionGetUsage" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetUsage"></a>

```typescript
public readonly actionGetUsage: string;
```

- *Type:* string

[Read] securityhub:GetUsage.

---

##### `actionGetUsageV2`<sup>Required</sup> <a name="actionGetUsageV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.actionGetUsageV2"></a>

```typescript
public readonly actionGetUsageV2: string;
```

- *Type:* string

[Read] securityhub:GetUsageV2.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] securityhub:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDeleteAutomationRules`<sup>Required</sup> <a name="BatchDeleteAutomationRules" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchDeleteAutomationRules"></a>

```typescript
public readonly BatchDeleteAutomationRules: string;
```

- *Type:* string

[Write] securityhub:BatchDeleteAutomationRules.

---

##### `BatchDisableStandards`<sup>Required</sup> <a name="BatchDisableStandards" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchDisableStandards"></a>

```typescript
public readonly BatchDisableStandards: string;
```

- *Type:* string

[Write] securityhub:BatchDisableStandards.

---

##### `BatchEnableStandards`<sup>Required</sup> <a name="BatchEnableStandards" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchEnableStandards"></a>

```typescript
public readonly BatchEnableStandards: string;
```

- *Type:* string

[Write] securityhub:BatchEnableStandards.

---

##### `BatchGetAutomationRules`<sup>Required</sup> <a name="BatchGetAutomationRules" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetAutomationRules"></a>

```typescript
public readonly BatchGetAutomationRules: string;
```

- *Type:* string

[Read] securityhub:BatchGetAutomationRules.

---

##### `BatchGetConfigurationPolicyAssociations`<sup>Required</sup> <a name="BatchGetConfigurationPolicyAssociations" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetConfigurationPolicyAssociations"></a>

```typescript
public readonly BatchGetConfigurationPolicyAssociations: string;
```

- *Type:* string

[Read] securityhub:BatchGetConfigurationPolicyAssociations.

---

##### `BatchGetControlEvaluations`<sup>Required</sup> <a name="BatchGetControlEvaluations" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetControlEvaluations"></a>

```typescript
public readonly BatchGetControlEvaluations: string;
```

- *Type:* string

[Read] securityhub:BatchGetControlEvaluations.

---

##### `BatchGetEnabledRegionsV2`<sup>Required</sup> <a name="BatchGetEnabledRegionsV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetEnabledRegionsV2"></a>

```typescript
public readonly BatchGetEnabledRegionsV2: string;
```

- *Type:* string

[Read] securityhub:BatchGetEnabledRegionsV2.

---

##### `BatchGetSecurityControls`<sup>Required</sup> <a name="BatchGetSecurityControls" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetSecurityControls"></a>

```typescript
public readonly BatchGetSecurityControls: string;
```

- *Type:* string

[Read] securityhub:BatchGetSecurityControls.

---

##### `BatchGetStandardsControlAssociations`<sup>Required</sup> <a name="BatchGetStandardsControlAssociations" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchGetStandardsControlAssociations"></a>

```typescript
public readonly BatchGetStandardsControlAssociations: string;
```

- *Type:* string

[Read] securityhub:BatchGetStandardsControlAssociations.

---

##### `BatchImportFindings`<sup>Required</sup> <a name="BatchImportFindings" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchImportFindings"></a>

```typescript
public readonly BatchImportFindings: string;
```

- *Type:* string

[Write] securityhub:BatchImportFindings.

---

##### `BatchUpdateAutomationRules`<sup>Required</sup> <a name="BatchUpdateAutomationRules" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchUpdateAutomationRules"></a>

```typescript
public readonly BatchUpdateAutomationRules: string;
```

- *Type:* string

[Write] securityhub:BatchUpdateAutomationRules.

---

##### `BatchUpdateFindings`<sup>Required</sup> <a name="BatchUpdateFindings" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchUpdateFindings"></a>

```typescript
public readonly BatchUpdateFindings: string;
```

- *Type:* string

[Write] securityhub:BatchUpdateFindings.

---

##### `BatchUpdateStandardsControlAssociations`<sup>Required</sup> <a name="BatchUpdateStandardsControlAssociations" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.BatchUpdateStandardsControlAssociations"></a>

```typescript
public readonly BatchUpdateStandardsControlAssociations: string;
```

- *Type:* string

[Write] securityhub:BatchUpdateStandardsControlAssociations.

---

##### `ConnectorRegistrationsV2`<sup>Required</sup> <a name="ConnectorRegistrationsV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ConnectorRegistrationsV2"></a>

```typescript
public readonly ConnectorRegistrationsV2: string;
```

- *Type:* string

[Write] securityhub:ConnectorRegistrationsV2.

---

##### `CreateActionTarget`<sup>Required</sup> <a name="CreateActionTarget" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateActionTarget"></a>

```typescript
public readonly CreateActionTarget: string;
```

- *Type:* string

[Write] securityhub:CreateActionTarget.

---

##### `CreateAggregatorV2`<sup>Required</sup> <a name="CreateAggregatorV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateAggregatorV2"></a>

```typescript
public readonly CreateAggregatorV2: string;
```

- *Type:* string

[Write] securityhub:CreateAggregatorV2.

---

##### `CreateAutomationRule`<sup>Required</sup> <a name="CreateAutomationRule" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateAutomationRule"></a>

```typescript
public readonly CreateAutomationRule: string;
```

- *Type:* string

[Write] securityhub:CreateAutomationRule.

---

##### `CreateAutomationRuleV2`<sup>Required</sup> <a name="CreateAutomationRuleV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateAutomationRuleV2"></a>

```typescript
public readonly CreateAutomationRuleV2: string;
```

- *Type:* string

[Write] securityhub:CreateAutomationRuleV2.

---

##### `CreateConfigurationPolicy`<sup>Required</sup> <a name="CreateConfigurationPolicy" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateConfigurationPolicy"></a>

```typescript
public readonly CreateConfigurationPolicy: string;
```

- *Type:* string

[Write] securityhub:CreateConfigurationPolicy.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string;
```

- *Type:* string

[Write] securityhub:CreateConnector.

---

##### `CreateConnectorV2`<sup>Required</sup> <a name="CreateConnectorV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateConnectorV2"></a>

```typescript
public readonly CreateConnectorV2: string;
```

- *Type:* string

[Write] securityhub:CreateConnectorV2.

---

##### `CreateFindingAggregator`<sup>Required</sup> <a name="CreateFindingAggregator" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateFindingAggregator"></a>

```typescript
public readonly CreateFindingAggregator: string;
```

- *Type:* string

[Write] securityhub:CreateFindingAggregator.

---

##### `CreateInsight`<sup>Required</sup> <a name="CreateInsight" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateInsight"></a>

```typescript
public readonly CreateInsight: string;
```

- *Type:* string

[Write] securityhub:CreateInsight.

---

##### `CreateMembers`<sup>Required</sup> <a name="CreateMembers" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateMembers"></a>

```typescript
public readonly CreateMembers: string;
```

- *Type:* string

[Write] securityhub:CreateMembers.

---

##### `CreateTicketV2`<sup>Required</sup> <a name="CreateTicketV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.CreateTicketV2"></a>

```typescript
public readonly CreateTicketV2: string;
```

- *Type:* string

[Write] securityhub:CreateTicketV2.

---

##### `DeclineInvitations`<sup>Required</sup> <a name="DeclineInvitations" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DeclineInvitations"></a>

```typescript
public readonly DeclineInvitations: string;
```

- *Type:* string

[Write] securityhub:DeclineInvitations.

---

##### `DeleteActionTarget`<sup>Required</sup> <a name="DeleteActionTarget" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteActionTarget"></a>

```typescript
public readonly DeleteActionTarget: string;
```

- *Type:* string

[Write] securityhub:DeleteActionTarget.

---

##### `DeleteAggregatorV2`<sup>Required</sup> <a name="DeleteAggregatorV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteAggregatorV2"></a>

```typescript
public readonly DeleteAggregatorV2: string;
```

- *Type:* string

[Write] securityhub:DeleteAggregatorV2.

---

##### `DeleteAutomationRuleV2`<sup>Required</sup> <a name="DeleteAutomationRuleV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteAutomationRuleV2"></a>

```typescript
public readonly DeleteAutomationRuleV2: string;
```

- *Type:* string

[Write] securityhub:DeleteAutomationRuleV2.

---

##### `DeleteConfigurationPolicy`<sup>Required</sup> <a name="DeleteConfigurationPolicy" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteConfigurationPolicy"></a>

```typescript
public readonly DeleteConfigurationPolicy: string;
```

- *Type:* string

[Write] securityhub:DeleteConfigurationPolicy.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string;
```

- *Type:* string

[Write] securityhub:DeleteConnector.

---

##### `DeleteConnectorV2`<sup>Required</sup> <a name="DeleteConnectorV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteConnectorV2"></a>

```typescript
public readonly DeleteConnectorV2: string;
```

- *Type:* string

[Write] securityhub:DeleteConnectorV2.

---

##### `DeleteFindingAggregator`<sup>Required</sup> <a name="DeleteFindingAggregator" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteFindingAggregator"></a>

```typescript
public readonly DeleteFindingAggregator: string;
```

- *Type:* string

[Write] securityhub:DeleteFindingAggregator.

---

##### `DeleteInsight`<sup>Required</sup> <a name="DeleteInsight" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteInsight"></a>

```typescript
public readonly DeleteInsight: string;
```

- *Type:* string

[Write] securityhub:DeleteInsight.

---

##### `DeleteInvitations`<sup>Required</sup> <a name="DeleteInvitations" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteInvitations"></a>

```typescript
public readonly DeleteInvitations: string;
```

- *Type:* string

[Write] securityhub:DeleteInvitations.

---

##### `DeleteMembers`<sup>Required</sup> <a name="DeleteMembers" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DeleteMembers"></a>

```typescript
public readonly DeleteMembers: string;
```

- *Type:* string

[Write] securityhub:DeleteMembers.

---

##### `DescribeActionTargets`<sup>Required</sup> <a name="DescribeActionTargets" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeActionTargets"></a>

```typescript
public readonly DescribeActionTargets: string;
```

- *Type:* string

[Read] securityhub:DescribeActionTargets.

---

##### `DescribeHub`<sup>Required</sup> <a name="DescribeHub" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeHub"></a>

```typescript
public readonly DescribeHub: string;
```

- *Type:* string

[Read] securityhub:DescribeHub.

---

##### `DescribeOrganizationConfiguration`<sup>Required</sup> <a name="DescribeOrganizationConfiguration" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeOrganizationConfiguration"></a>

```typescript
public readonly DescribeOrganizationConfiguration: string;
```

- *Type:* string

[Read] securityhub:DescribeOrganizationConfiguration.

---

##### `DescribeProducts`<sup>Required</sup> <a name="DescribeProducts" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeProducts"></a>

```typescript
public readonly DescribeProducts: string;
```

- *Type:* string

[Read] securityhub:DescribeProducts.

---

##### `DescribeProductsV2`<sup>Required</sup> <a name="DescribeProductsV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeProductsV2"></a>

```typescript
public readonly DescribeProductsV2: string;
```

- *Type:* string

[Read] securityhub:DescribeProductsV2.

---

##### `DescribeSecurityHubV2`<sup>Required</sup> <a name="DescribeSecurityHubV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeSecurityHubV2"></a>

```typescript
public readonly DescribeSecurityHubV2: string;
```

- *Type:* string

[Read] securityhub:DescribeSecurityHubV2.

---

##### `DescribeStandards`<sup>Required</sup> <a name="DescribeStandards" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeStandards"></a>

```typescript
public readonly DescribeStandards: string;
```

- *Type:* string

[Read] securityhub:DescribeStandards.

---

##### `DescribeStandardsControls`<sup>Required</sup> <a name="DescribeStandardsControls" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DescribeStandardsControls"></a>

```typescript
public readonly DescribeStandardsControls: string;
```

- *Type:* string

[Read] securityhub:DescribeStandardsControls.

---

##### `DisableImportFindingsForProduct`<sup>Required</sup> <a name="DisableImportFindingsForProduct" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DisableImportFindingsForProduct"></a>

```typescript
public readonly DisableImportFindingsForProduct: string;
```

- *Type:* string

[Write] securityhub:DisableImportFindingsForProduct.

---

##### `DisableOrganizationAdminAccount`<sup>Required</sup> <a name="DisableOrganizationAdminAccount" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DisableOrganizationAdminAccount"></a>

```typescript
public readonly DisableOrganizationAdminAccount: string;
```

- *Type:* string

[Write] securityhub:DisableOrganizationAdminAccount.

---

##### `DisableSecurityHub`<sup>Required</sup> <a name="DisableSecurityHub" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DisableSecurityHub"></a>

```typescript
public readonly DisableSecurityHub: string;
```

- *Type:* string

[Write] securityhub:DisableSecurityHub.

---

##### `DisableSecurityHubFeatureV2`<sup>Required</sup> <a name="DisableSecurityHubFeatureV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DisableSecurityHubFeatureV2"></a>

```typescript
public readonly DisableSecurityHubFeatureV2: string;
```

- *Type:* string

[Write] securityhub:DisableSecurityHubFeatureV2.

---

##### `DisableSecurityHubV2`<sup>Required</sup> <a name="DisableSecurityHubV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DisableSecurityHubV2"></a>

```typescript
public readonly DisableSecurityHubV2: string;
```

- *Type:* string

[Write] securityhub:DisableSecurityHubV2.

---

##### `DisassociateFromAdministratorAccount`<sup>Required</sup> <a name="DisassociateFromAdministratorAccount" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DisassociateFromAdministratorAccount"></a>

```typescript
public readonly DisassociateFromAdministratorAccount: string;
```

- *Type:* string

[Write] securityhub:DisassociateFromAdministratorAccount.

---

##### `DisassociateFromMasterAccount`<sup>Required</sup> <a name="DisassociateFromMasterAccount" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DisassociateFromMasterAccount"></a>

```typescript
public readonly DisassociateFromMasterAccount: string;
```

- *Type:* string

[Write] securityhub:DisassociateFromMasterAccount.

---

##### `DisassociateMembers`<sup>Required</sup> <a name="DisassociateMembers" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.DisassociateMembers"></a>

```typescript
public readonly DisassociateMembers: string;
```

- *Type:* string

[Write] securityhub:DisassociateMembers.

---

##### `EnableImportFindingsForProduct`<sup>Required</sup> <a name="EnableImportFindingsForProduct" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.EnableImportFindingsForProduct"></a>

```typescript
public readonly EnableImportFindingsForProduct: string;
```

- *Type:* string

[Write] securityhub:EnableImportFindingsForProduct.

---

##### `EnableOrganizationAdminAccount`<sup>Required</sup> <a name="EnableOrganizationAdminAccount" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.EnableOrganizationAdminAccount"></a>

```typescript
public readonly EnableOrganizationAdminAccount: string;
```

- *Type:* string

[Write] securityhub:EnableOrganizationAdminAccount.

---

##### `EnableSecurityHub`<sup>Required</sup> <a name="EnableSecurityHub" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.EnableSecurityHub"></a>

```typescript
public readonly EnableSecurityHub: string;
```

- *Type:* string

[Write] securityhub:EnableSecurityHub.

---

##### `EnableSecurityHubFeatureV2`<sup>Required</sup> <a name="EnableSecurityHubFeatureV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.EnableSecurityHubFeatureV2"></a>

```typescript
public readonly EnableSecurityHubFeatureV2: string;
```

- *Type:* string

[Write] securityhub:EnableSecurityHubFeatureV2.

---

##### `EnableSecurityHubV2`<sup>Required</sup> <a name="EnableSecurityHubV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.EnableSecurityHubV2"></a>

```typescript
public readonly EnableSecurityHubV2: string;
```

- *Type:* string

[Write] securityhub:EnableSecurityHubV2.

---

##### `GenerateRecommendedPolicyV2`<sup>Required</sup> <a name="GenerateRecommendedPolicyV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.GenerateRecommendedPolicyV2"></a>

```typescript
public readonly GenerateRecommendedPolicyV2: string;
```

- *Type:* string

[Write] securityhub:GenerateRecommendedPolicyV2.

---

##### `InviteMembers`<sup>Required</sup> <a name="InviteMembers" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.InviteMembers"></a>

```typescript
public readonly InviteMembers: string;
```

- *Type:* string

[Write] securityhub:InviteMembers.

---

##### `ListAccountUsageV2`<sup>Required</sup> <a name="ListAccountUsageV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListAccountUsageV2"></a>

```typescript
public readonly ListAccountUsageV2: string;
```

- *Type:* string

[List] securityhub:ListAccountUsageV2.

---

##### `ListAggregatorsV2`<sup>Required</sup> <a name="ListAggregatorsV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListAggregatorsV2"></a>

```typescript
public readonly ListAggregatorsV2: string;
```

- *Type:* string

[List] securityhub:ListAggregatorsV2.

---

##### `ListAutomationRules`<sup>Required</sup> <a name="ListAutomationRules" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListAutomationRules"></a>

```typescript
public readonly ListAutomationRules: string;
```

- *Type:* string

[List] securityhub:ListAutomationRules.

---

##### `ListAutomationRulesV2`<sup>Required</sup> <a name="ListAutomationRulesV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListAutomationRulesV2"></a>

```typescript
public readonly ListAutomationRulesV2: string;
```

- *Type:* string

[List] securityhub:ListAutomationRulesV2.

---

##### `ListConfigurationPolicies`<sup>Required</sup> <a name="ListConfigurationPolicies" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListConfigurationPolicies"></a>

```typescript
public readonly ListConfigurationPolicies: string;
```

- *Type:* string

[List] securityhub:ListConfigurationPolicies.

---

##### `ListConfigurationPolicyAssociations`<sup>Required</sup> <a name="ListConfigurationPolicyAssociations" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListConfigurationPolicyAssociations"></a>

```typescript
public readonly ListConfigurationPolicyAssociations: string;
```

- *Type:* string

[List] securityhub:ListConfigurationPolicyAssociations.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string;
```

- *Type:* string

[List] securityhub:ListConnectors.

---

##### `ListConnectorsV2`<sup>Required</sup> <a name="ListConnectorsV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListConnectorsV2"></a>

```typescript
public readonly ListConnectorsV2: string;
```

- *Type:* string

[List] securityhub:ListConnectorsV2.

---

##### `ListControlEvaluationSummaries`<sup>Required</sup> <a name="ListControlEvaluationSummaries" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListControlEvaluationSummaries"></a>

```typescript
public readonly ListControlEvaluationSummaries: string;
```

- *Type:* string

[Read] securityhub:ListControlEvaluationSummaries.

---

##### `ListEnabledProductsForImport`<sup>Required</sup> <a name="ListEnabledProductsForImport" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListEnabledProductsForImport"></a>

```typescript
public readonly ListEnabledProductsForImport: string;
```

- *Type:* string

[List] securityhub:ListEnabledProductsForImport.

---

##### `ListFindingAggregators`<sup>Required</sup> <a name="ListFindingAggregators" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListFindingAggregators"></a>

```typescript
public readonly ListFindingAggregators: string;
```

- *Type:* string

[List] securityhub:ListFindingAggregators.

---

##### `ListFreeTrialStatusesV2`<sup>Required</sup> <a name="ListFreeTrialStatusesV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListFreeTrialStatusesV2"></a>

```typescript
public readonly ListFreeTrialStatusesV2: string;
```

- *Type:* string

[List] securityhub:ListFreeTrialStatusesV2.

---

##### `ListInvitations`<sup>Required</sup> <a name="ListInvitations" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListInvitations"></a>

```typescript
public readonly ListInvitations: string;
```

- *Type:* string

[List] securityhub:ListInvitations.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListMembers"></a>

```typescript
public readonly ListMembers: string;
```

- *Type:* string

[List] securityhub:ListMembers.

---

##### `ListOrganizationAdminAccounts`<sup>Required</sup> <a name="ListOrganizationAdminAccounts" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListOrganizationAdminAccounts"></a>

```typescript
public readonly ListOrganizationAdminAccounts: string;
```

- *Type:* string

[List] securityhub:ListOrganizationAdminAccounts.

---

##### `ListSecurityControlDefinitions`<sup>Required</sup> <a name="ListSecurityControlDefinitions" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListSecurityControlDefinitions"></a>

```typescript
public readonly ListSecurityControlDefinitions: string;
```

- *Type:* string

[List] securityhub:ListSecurityControlDefinitions.

---

##### `ListStandardsControlAssociations`<sup>Required</sup> <a name="ListStandardsControlAssociations" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListStandardsControlAssociations"></a>

```typescript
public readonly ListStandardsControlAssociations: string;
```

- *Type:* string

[List] securityhub:ListStandardsControlAssociations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] securityhub:ListTagsForResource.

---

##### `SendFindingEvents`<sup>Required</sup> <a name="SendFindingEvents" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.SendFindingEvents"></a>

```typescript
public readonly SendFindingEvents: string;
```

- *Type:* string

[Read] securityhub:SendFindingEvents.

---

##### `SendInsightEvents`<sup>Required</sup> <a name="SendInsightEvents" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.SendInsightEvents"></a>

```typescript
public readonly SendInsightEvents: string;
```

- *Type:* string

[Read] securityhub:SendInsightEvents.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartConfigurationPolicyAssociation`<sup>Required</sup> <a name="StartConfigurationPolicyAssociation" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.StartConfigurationPolicyAssociation"></a>

```typescript
public readonly StartConfigurationPolicyAssociation: string;
```

- *Type:* string

[Write] securityhub:StartConfigurationPolicyAssociation.

---

##### `StartConfigurationPolicyDisassociation`<sup>Required</sup> <a name="StartConfigurationPolicyDisassociation" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.StartConfigurationPolicyDisassociation"></a>

```typescript
public readonly StartConfigurationPolicyDisassociation: string;
```

- *Type:* string

[Write] securityhub:StartConfigurationPolicyDisassociation.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] securityhub:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] securityhub:UntagResource.

---

##### `UpdateActionTarget`<sup>Required</sup> <a name="UpdateActionTarget" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateActionTarget"></a>

```typescript
public readonly UpdateActionTarget: string;
```

- *Type:* string

[Write] securityhub:UpdateActionTarget.

---

##### `UpdateAggregatorV2`<sup>Required</sup> <a name="UpdateAggregatorV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateAggregatorV2"></a>

```typescript
public readonly UpdateAggregatorV2: string;
```

- *Type:* string

[Write] securityhub:UpdateAggregatorV2.

---

##### `UpdateAutomationRuleV2`<sup>Required</sup> <a name="UpdateAutomationRuleV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateAutomationRuleV2"></a>

```typescript
public readonly UpdateAutomationRuleV2: string;
```

- *Type:* string

[Write] securityhub:UpdateAutomationRuleV2.

---

##### `UpdateConfigurationPolicy`<sup>Required</sup> <a name="UpdateConfigurationPolicy" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateConfigurationPolicy"></a>

```typescript
public readonly UpdateConfigurationPolicy: string;
```

- *Type:* string

[Write] securityhub:UpdateConfigurationPolicy.

---

##### `UpdateConnector`<sup>Required</sup> <a name="UpdateConnector" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateConnector"></a>

```typescript
public readonly UpdateConnector: string;
```

- *Type:* string

[Write] securityhub:UpdateConnector.

---

##### `UpdateConnectorV2`<sup>Required</sup> <a name="UpdateConnectorV2" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateConnectorV2"></a>

```typescript
public readonly UpdateConnectorV2: string;
```

- *Type:* string

[Write] securityhub:UpdateConnectorV2.

---

##### `UpdateFindingAggregator`<sup>Required</sup> <a name="UpdateFindingAggregator" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateFindingAggregator"></a>

```typescript
public readonly UpdateFindingAggregator: string;
```

- *Type:* string

[Write] securityhub:UpdateFindingAggregator.

---

##### `UpdateFindings`<sup>Required</sup> <a name="UpdateFindings" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateFindings"></a>

```typescript
public readonly UpdateFindings: string;
```

- *Type:* string

[Write] securityhub:UpdateFindings.

---

##### `UpdateInsight`<sup>Required</sup> <a name="UpdateInsight" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateInsight"></a>

```typescript
public readonly UpdateInsight: string;
```

- *Type:* string

[Write] securityhub:UpdateInsight.

---

##### `UpdateOrganizationConfiguration`<sup>Required</sup> <a name="UpdateOrganizationConfiguration" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateOrganizationConfiguration"></a>

```typescript
public readonly UpdateOrganizationConfiguration: string;
```

- *Type:* string

[Write] securityhub:UpdateOrganizationConfiguration.

---

##### `UpdateSecurityControl`<sup>Required</sup> <a name="UpdateSecurityControl" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateSecurityControl"></a>

```typescript
public readonly UpdateSecurityControl: string;
```

- *Type:* string

[Write] securityhub:UpdateSecurityControl.

---

##### `UpdateSecurityHubConfiguration`<sup>Required</sup> <a name="UpdateSecurityHubConfiguration" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateSecurityHubConfiguration"></a>

```typescript
public readonly UpdateSecurityHubConfiguration: string;
```

- *Type:* string

[Write] securityhub:UpdateSecurityHubConfiguration.

---

##### `UpdateStandardsControl`<sup>Required</sup> <a name="UpdateStandardsControl" id="@cdk_utils/iam.securityhub.SecurityHubActions.property.UpdateStandardsControl"></a>

```typescript
public readonly UpdateStandardsControl: string;
```

- *Type:* string

[Write] securityhub:UpdateStandardsControl.

---

### SecurityHubConditions <a name="SecurityHubConditions" id="@cdk_utils/iam.securityhub.SecurityHubConditions"></a>

Condition key constants and builders for securityhub.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securityhub.SecurityHubConditions.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

new securityhub.SecurityHubConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.asffSyntaxPath">asffSyntaxPath</a></code> | Generates a condition block for `securityhub:ASFFSyntaxPath/${ASFFSyntaxPath}`. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.ocsfSyntaxPath">ocsfSyntaxPath</a></code> | Generates a condition block for `securityhub:OCSFSyntaxPath/${OCSFSyntaxPath}`. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.targetAccount">targetAccount</a></code> | Generates a condition block for `securityhub:TargetAccount`. |

---

##### `asffSyntaxPath` <a name="asffSyntaxPath" id="@cdk_utils/iam.securityhub.SecurityHubConditions.asffSyntaxPath"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubConditions.asffSyntaxPath(value: string)
```

Generates a condition block for `securityhub:ASFFSyntaxPath/${ASFFSyntaxPath}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.securityhub.SecurityHubConditions.asffSyntaxPath.parameter.value"></a>

- *Type:* string

---

##### `ocsfSyntaxPath` <a name="ocsfSyntaxPath" id="@cdk_utils/iam.securityhub.SecurityHubConditions.ocsfSyntaxPath"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubConditions.ocsfSyntaxPath(value: string)
```

Generates a condition block for `securityhub:OCSFSyntaxPath/${OCSFSyntaxPath}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.securityhub.SecurityHubConditions.ocsfSyntaxPath.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.securityhub.SecurityHubConditions.requestTag"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.securityhub.SecurityHubConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.securityhub.SecurityHubConditions.resourceTag"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.securityhub.SecurityHubConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.securityhub.SecurityHubConditions.tagKeys"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.securityhub.SecurityHubConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `targetAccount` <a name="targetAccount" id="@cdk_utils/iam.securityhub.SecurityHubConditions.targetAccount"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubConditions.targetAccount(value: string)
```

Generates a condition block for `securityhub:TargetAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.securityhub.SecurityHubConditions.targetAccount.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.ASFF_SYNTAX_PATH">ASFF_SYNTAX_PATH</a></code> | <code>string</code> | Condition key: securityhub:ASFFSyntaxPath/${ASFFSyntaxPath} (String). |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.BatchImportFindingsConditionKeys">BatchImportFindingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchImportFindings action. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.BatchUpdateFindingsConditionKeys">BatchUpdateFindingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchUpdateFindings action. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.CreateAutomationRuleConditionKeys">CreateAutomationRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAutomationRule action. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.CreateAutomationRuleV2ConditionKeys">CreateAutomationRuleV2ConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAutomationRuleV2 action. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.CreateConfigurationPolicyConditionKeys">CreateConfigurationPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConfigurationPolicy action. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.CreateConnectorConditionKeys">CreateConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnector action. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.CreateConnectorV2ConditionKeys">CreateConnectorV2ConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnectorV2 action. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.EnableSecurityHubConditionKeys">EnableSecurityHubConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnableSecurityHub action. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.EnableSecurityHubV2ConditionKeys">EnableSecurityHubV2ConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnableSecurityHubV2 action. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.OCSF_SYNTAX_PATH">OCSF_SYNTAX_PATH</a></code> | <code>string</code> | Condition key: securityhub:OCSFSyntaxPath/${OCSFSyntaxPath} (String). |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubConditions.property.TARGET_ACCOUNT">TARGET_ACCOUNT</a></code> | <code>string</code> | Condition key: securityhub:TargetAccount (String). |

---

##### `ASFF_SYNTAX_PATH`<sup>Required</sup> <a name="ASFF_SYNTAX_PATH" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.ASFF_SYNTAX_PATH"></a>

```typescript
public readonly ASFF_SYNTAX_PATH: string;
```

- *Type:* string

Condition key: securityhub:ASFFSyntaxPath/${ASFFSyntaxPath} (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchImportFindingsConditionKeys`<sup>Required</sup> <a name="BatchImportFindingsConditionKeys" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.BatchImportFindingsConditionKeys"></a>

```typescript
public readonly BatchImportFindingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchImportFindings action.

---

##### `BatchUpdateFindingsConditionKeys`<sup>Required</sup> <a name="BatchUpdateFindingsConditionKeys" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.BatchUpdateFindingsConditionKeys"></a>

```typescript
public readonly BatchUpdateFindingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchUpdateFindings action.

---

##### `CreateAutomationRuleConditionKeys`<sup>Required</sup> <a name="CreateAutomationRuleConditionKeys" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.CreateAutomationRuleConditionKeys"></a>

```typescript
public readonly CreateAutomationRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAutomationRule action.

---

##### `CreateAutomationRuleV2ConditionKeys`<sup>Required</sup> <a name="CreateAutomationRuleV2ConditionKeys" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.CreateAutomationRuleV2ConditionKeys"></a>

```typescript
public readonly CreateAutomationRuleV2ConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAutomationRuleV2 action.

---

##### `CreateConfigurationPolicyConditionKeys`<sup>Required</sup> <a name="CreateConfigurationPolicyConditionKeys" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.CreateConfigurationPolicyConditionKeys"></a>

```typescript
public readonly CreateConfigurationPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConfigurationPolicy action.

---

##### `CreateConnectorConditionKeys`<sup>Required</sup> <a name="CreateConnectorConditionKeys" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.CreateConnectorConditionKeys"></a>

```typescript
public readonly CreateConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnector action.

---

##### `CreateConnectorV2ConditionKeys`<sup>Required</sup> <a name="CreateConnectorV2ConditionKeys" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.CreateConnectorV2ConditionKeys"></a>

```typescript
public readonly CreateConnectorV2ConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnectorV2 action.

---

##### `EnableSecurityHubConditionKeys`<sup>Required</sup> <a name="EnableSecurityHubConditionKeys" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.EnableSecurityHubConditionKeys"></a>

```typescript
public readonly EnableSecurityHubConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnableSecurityHub action.

---

##### `EnableSecurityHubV2ConditionKeys`<sup>Required</sup> <a name="EnableSecurityHubV2ConditionKeys" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.EnableSecurityHubV2ConditionKeys"></a>

```typescript
public readonly EnableSecurityHubV2ConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnableSecurityHubV2 action.

---

##### `OCSF_SYNTAX_PATH`<sup>Required</sup> <a name="OCSF_SYNTAX_PATH" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.OCSF_SYNTAX_PATH"></a>

```typescript
public readonly OCSF_SYNTAX_PATH: string;
```

- *Type:* string

Condition key: securityhub:OCSFSyntaxPath/${OCSFSyntaxPath} (String).

---

##### `TARGET_ACCOUNT`<sup>Required</sup> <a name="TARGET_ACCOUNT" id="@cdk_utils/iam.securityhub.SecurityHubConditions.property.TARGET_ACCOUNT"></a>

```typescript
public readonly TARGET_ACCOUNT: string;
```

- *Type:* string

Condition key: securityhub:TargetAccount (String).

---

### SecurityHubOperations <a name="SecurityHubOperations" id="@cdk_utils/iam.securityhub.SecurityHubOperations"></a>

API operation to required IAM actions mapping for securityhub.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securityhub.SecurityHubOperations.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

new securityhub.SecurityHubOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.AcceptAdministratorInvitation">AcceptAdministratorInvitation</a></code> | <code>string[]</code> | IAM actions required for the AcceptAdministratorInvitation API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.AcceptInvitation">AcceptInvitation</a></code> | <code>string[]</code> | IAM actions required for the AcceptInvitation API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchDeleteAutomationRules">BatchDeleteAutomationRules</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteAutomationRules API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchDisableStandards">BatchDisableStandards</a></code> | <code>string[]</code> | IAM actions required for the BatchDisableStandards API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchEnableStandards">BatchEnableStandards</a></code> | <code>string[]</code> | IAM actions required for the BatchEnableStandards API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchGetAutomationRules">BatchGetAutomationRules</a></code> | <code>string[]</code> | IAM actions required for the BatchGetAutomationRules API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchGetConfigurationPolicyAssociations">BatchGetConfigurationPolicyAssociations</a></code> | <code>string[]</code> | IAM actions required for the BatchGetConfigurationPolicyAssociations API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchGetSecurityControls">BatchGetSecurityControls</a></code> | <code>string[]</code> | IAM actions required for the BatchGetSecurityControls API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchGetStandardsControlAssociations">BatchGetStandardsControlAssociations</a></code> | <code>string[]</code> | IAM actions required for the BatchGetStandardsControlAssociations API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchImportFindings">BatchImportFindings</a></code> | <code>string[]</code> | IAM actions required for the BatchImportFindings API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchUpdateAutomationRules">BatchUpdateAutomationRules</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateAutomationRules API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchUpdateFindings">BatchUpdateFindings</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateFindings API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchUpdateFindingsV2">BatchUpdateFindingsV2</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateFindingsV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchUpdateStandardsControlAssociations">BatchUpdateStandardsControlAssociations</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateStandardsControlAssociations API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateActionTarget">CreateActionTarget</a></code> | <code>string[]</code> | IAM actions required for the CreateActionTarget API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateAggregatorV2">CreateAggregatorV2</a></code> | <code>string[]</code> | IAM actions required for the CreateAggregatorV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateAutomationRule">CreateAutomationRule</a></code> | <code>string[]</code> | IAM actions required for the CreateAutomationRule API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateAutomationRuleV2">CreateAutomationRuleV2</a></code> | <code>string[]</code> | IAM actions required for the CreateAutomationRuleV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateConfigurationPolicy">CreateConfigurationPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateConfigurationPolicy API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateConnector">CreateConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateConnector API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateConnectorV2">CreateConnectorV2</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectorV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateFindingAggregator">CreateFindingAggregator</a></code> | <code>string[]</code> | IAM actions required for the CreateFindingAggregator API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateInsight">CreateInsight</a></code> | <code>string[]</code> | IAM actions required for the CreateInsight API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateMembers">CreateMembers</a></code> | <code>string[]</code> | IAM actions required for the CreateMembers API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateTicketV2">CreateTicketV2</a></code> | <code>string[]</code> | IAM actions required for the CreateTicketV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeclineInvitations">DeclineInvitations</a></code> | <code>string[]</code> | IAM actions required for the DeclineInvitations API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteActionTarget">DeleteActionTarget</a></code> | <code>string[]</code> | IAM actions required for the DeleteActionTarget API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteAggregatorV2">DeleteAggregatorV2</a></code> | <code>string[]</code> | IAM actions required for the DeleteAggregatorV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteAutomationRuleV2">DeleteAutomationRuleV2</a></code> | <code>string[]</code> | IAM actions required for the DeleteAutomationRuleV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteConfigurationPolicy">DeleteConfigurationPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationPolicy API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteConnector">DeleteConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnector API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteConnectorV2">DeleteConnectorV2</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectorV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteFindingAggregator">DeleteFindingAggregator</a></code> | <code>string[]</code> | IAM actions required for the DeleteFindingAggregator API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteInsight">DeleteInsight</a></code> | <code>string[]</code> | IAM actions required for the DeleteInsight API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteInvitations">DeleteInvitations</a></code> | <code>string[]</code> | IAM actions required for the DeleteInvitations API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteMembers">DeleteMembers</a></code> | <code>string[]</code> | IAM actions required for the DeleteMembers API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeActionTargets">DescribeActionTargets</a></code> | <code>string[]</code> | IAM actions required for the DescribeActionTargets API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeHub">DescribeHub</a></code> | <code>string[]</code> | IAM actions required for the DescribeHub API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeOrganizationConfiguration">DescribeOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeProducts">DescribeProducts</a></code> | <code>string[]</code> | IAM actions required for the DescribeProducts API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeProductsV2">DescribeProductsV2</a></code> | <code>string[]</code> | IAM actions required for the DescribeProductsV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeSecurityHubV2">DescribeSecurityHubV2</a></code> | <code>string[]</code> | IAM actions required for the DescribeSecurityHubV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeStandards">DescribeStandards</a></code> | <code>string[]</code> | IAM actions required for the DescribeStandards API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeStandardsControls">DescribeStandardsControls</a></code> | <code>string[]</code> | IAM actions required for the DescribeStandardsControls API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisableImportFindingsForProduct">DisableImportFindingsForProduct</a></code> | <code>string[]</code> | IAM actions required for the DisableImportFindingsForProduct API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisableOrganizationAdminAccount">DisableOrganizationAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the DisableOrganizationAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisableSecurityHub">DisableSecurityHub</a></code> | <code>string[]</code> | IAM actions required for the DisableSecurityHub API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisableSecurityHubFeatureV2">DisableSecurityHubFeatureV2</a></code> | <code>string[]</code> | IAM actions required for the DisableSecurityHubFeatureV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisableSecurityHubV2">DisableSecurityHubV2</a></code> | <code>string[]</code> | IAM actions required for the DisableSecurityHubV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFromAdministratorAccount API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisassociateFromMasterAccount">DisassociateFromMasterAccount</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFromMasterAccount API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisassociateMembers">DisassociateMembers</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMembers API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.EnableImportFindingsForProduct">EnableImportFindingsForProduct</a></code> | <code>string[]</code> | IAM actions required for the EnableImportFindingsForProduct API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.EnableOrganizationAdminAccount">EnableOrganizationAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the EnableOrganizationAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.EnableSecurityHub">EnableSecurityHub</a></code> | <code>string[]</code> | IAM actions required for the EnableSecurityHub API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.EnableSecurityHubFeatureV2">EnableSecurityHubFeatureV2</a></code> | <code>string[]</code> | IAM actions required for the EnableSecurityHubFeatureV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.EnableSecurityHubV2">EnableSecurityHubV2</a></code> | <code>string[]</code> | IAM actions required for the EnableSecurityHubV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.GenerateRecommendedPolicyV2">GenerateRecommendedPolicyV2</a></code> | <code>string[]</code> | IAM actions required for the GenerateRecommendedPolicyV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.InviteMembers">InviteMembers</a></code> | <code>string[]</code> | IAM actions required for the InviteMembers API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListAggregatorsV2">ListAggregatorsV2</a></code> | <code>string[]</code> | IAM actions required for the ListAggregatorsV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListAutomationRules">ListAutomationRules</a></code> | <code>string[]</code> | IAM actions required for the ListAutomationRules API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListAutomationRulesV2">ListAutomationRulesV2</a></code> | <code>string[]</code> | IAM actions required for the ListAutomationRulesV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListConfigurationPolicies">ListConfigurationPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationPolicies API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListConfigurationPolicyAssociations">ListConfigurationPolicyAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationPolicyAssociations API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListConnectors">ListConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListConnectors API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListConnectorsV2">ListConnectorsV2</a></code> | <code>string[]</code> | IAM actions required for the ListConnectorsV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListEnabledProductsForImport">ListEnabledProductsForImport</a></code> | <code>string[]</code> | IAM actions required for the ListEnabledProductsForImport API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListFindingAggregators">ListFindingAggregators</a></code> | <code>string[]</code> | IAM actions required for the ListFindingAggregators API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListFreeTrialStatusesV2">ListFreeTrialStatusesV2</a></code> | <code>string[]</code> | IAM actions required for the ListFreeTrialStatusesV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListInvitations">ListInvitations</a></code> | <code>string[]</code> | IAM actions required for the ListInvitations API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListMembers">ListMembers</a></code> | <code>string[]</code> | IAM actions required for the ListMembers API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListOrganizationAdminAccounts">ListOrganizationAdminAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationAdminAccounts API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListSecurityControlDefinitions">ListSecurityControlDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityControlDefinitions API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListStandardsControlAssociations">ListStandardsControlAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListStandardsControlAssociations API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetAdministratorAccount">opGetAdministratorAccount</a></code> | <code>string[]</code> | IAM actions required for the GetAdministratorAccount API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetAggregatorV2">opGetAggregatorV2</a></code> | <code>string[]</code> | IAM actions required for the GetAggregatorV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetAutomationRuleV2">opGetAutomationRuleV2</a></code> | <code>string[]</code> | IAM actions required for the GetAutomationRuleV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetConfigurationPolicy">opGetConfigurationPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetConfigurationPolicy API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetConfigurationPolicyAssociation">opGetConfigurationPolicyAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetConfigurationPolicyAssociation API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetConnector">opGetConnector</a></code> | <code>string[]</code> | IAM actions required for the GetConnector API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetConnectorV2">opGetConnectorV2</a></code> | <code>string[]</code> | IAM actions required for the GetConnectorV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetEnabledStandards">opGetEnabledStandards</a></code> | <code>string[]</code> | IAM actions required for the GetEnabledStandards API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindingAggregator">opGetFindingAggregator</a></code> | <code>string[]</code> | IAM actions required for the GetFindingAggregator API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindingHistory">opGetFindingHistory</a></code> | <code>string[]</code> | IAM actions required for the GetFindingHistory API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindings">opGetFindings</a></code> | <code>string[]</code> | IAM actions required for the GetFindings API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindingStatisticsV2">opGetFindingStatisticsV2</a></code> | <code>string[]</code> | IAM actions required for the GetFindingStatisticsV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindingsTrendsV2">opGetFindingsTrendsV2</a></code> | <code>string[]</code> | IAM actions required for the GetFindingsTrendsV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindingsV2">opGetFindingsV2</a></code> | <code>string[]</code> | IAM actions required for the GetFindingsV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetInsightResults">opGetInsightResults</a></code> | <code>string[]</code> | IAM actions required for the GetInsightResults API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetInsights">opGetInsights</a></code> | <code>string[]</code> | IAM actions required for the GetInsights API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetInvitationsCount">opGetInvitationsCount</a></code> | <code>string[]</code> | IAM actions required for the GetInvitationsCount API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetMasterAccount">opGetMasterAccount</a></code> | <code>string[]</code> | IAM actions required for the GetMasterAccount API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetMembers">opGetMembers</a></code> | <code>string[]</code> | IAM actions required for the GetMembers API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetRecommendedPolicyV2">opGetRecommendedPolicyV2</a></code> | <code>string[]</code> | IAM actions required for the GetRecommendedPolicyV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetResourcesStatisticsV2">opGetResourcesStatisticsV2</a></code> | <code>string[]</code> | IAM actions required for the GetResourcesStatisticsV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetResourcesTrendsV2">opGetResourcesTrendsV2</a></code> | <code>string[]</code> | IAM actions required for the GetResourcesTrendsV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetResourcesV2">opGetResourcesV2</a></code> | <code>string[]</code> | IAM actions required for the GetResourcesV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetSecurityControlDefinition">opGetSecurityControlDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetSecurityControlDefinition API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.RegisterConnectorV2">RegisterConnectorV2</a></code> | <code>string[]</code> | IAM actions required for the RegisterConnectorV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.StartConfigurationPolicyAssociation">StartConfigurationPolicyAssociation</a></code> | <code>string[]</code> | IAM actions required for the StartConfigurationPolicyAssociation API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.StartConfigurationPolicyDisassociation">StartConfigurationPolicyDisassociation</a></code> | <code>string[]</code> | IAM actions required for the StartConfigurationPolicyDisassociation API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateActionTarget">UpdateActionTarget</a></code> | <code>string[]</code> | IAM actions required for the UpdateActionTarget API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateAggregatorV2">UpdateAggregatorV2</a></code> | <code>string[]</code> | IAM actions required for the UpdateAggregatorV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateAutomationRuleV2">UpdateAutomationRuleV2</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutomationRuleV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateConfigurationPolicy">UpdateConfigurationPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationPolicy API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateConnector">UpdateConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnector API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateConnectorV2">UpdateConnectorV2</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectorV2 API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateFindingAggregator">UpdateFindingAggregator</a></code> | <code>string[]</code> | IAM actions required for the UpdateFindingAggregator API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateFindings">UpdateFindings</a></code> | <code>string[]</code> | IAM actions required for the UpdateFindings API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateInsight">UpdateInsight</a></code> | <code>string[]</code> | IAM actions required for the UpdateInsight API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateOrganizationConfiguration">UpdateOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateSecurityControl">UpdateSecurityControl</a></code> | <code>string[]</code> | IAM actions required for the UpdateSecurityControl API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateSecurityHubConfiguration">UpdateSecurityHubConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateSecurityHubConfiguration API call. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateStandardsControl">UpdateStandardsControl</a></code> | <code>string[]</code> | IAM actions required for the UpdateStandardsControl API call. |

---

##### `AcceptAdministratorInvitation`<sup>Required</sup> <a name="AcceptAdministratorInvitation" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.AcceptAdministratorInvitation"></a>

```typescript
public readonly AcceptAdministratorInvitation: string[];
```

- *Type:* string[]

IAM actions required for the AcceptAdministratorInvitation API call.

---

##### `AcceptInvitation`<sup>Required</sup> <a name="AcceptInvitation" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.AcceptInvitation"></a>

```typescript
public readonly AcceptInvitation: string[];
```

- *Type:* string[]

IAM actions required for the AcceptInvitation API call.

---

##### `BatchDeleteAutomationRules`<sup>Required</sup> <a name="BatchDeleteAutomationRules" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchDeleteAutomationRules"></a>

```typescript
public readonly BatchDeleteAutomationRules: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteAutomationRules API call.

---

##### `BatchDisableStandards`<sup>Required</sup> <a name="BatchDisableStandards" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchDisableStandards"></a>

```typescript
public readonly BatchDisableStandards: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisableStandards API call.

---

##### `BatchEnableStandards`<sup>Required</sup> <a name="BatchEnableStandards" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchEnableStandards"></a>

```typescript
public readonly BatchEnableStandards: string[];
```

- *Type:* string[]

IAM actions required for the BatchEnableStandards API call.

---

##### `BatchGetAutomationRules`<sup>Required</sup> <a name="BatchGetAutomationRules" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchGetAutomationRules"></a>

```typescript
public readonly BatchGetAutomationRules: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetAutomationRules API call.

---

##### `BatchGetConfigurationPolicyAssociations`<sup>Required</sup> <a name="BatchGetConfigurationPolicyAssociations" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchGetConfigurationPolicyAssociations"></a>

```typescript
public readonly BatchGetConfigurationPolicyAssociations: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetConfigurationPolicyAssociations API call.

---

##### `BatchGetSecurityControls`<sup>Required</sup> <a name="BatchGetSecurityControls" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchGetSecurityControls"></a>

```typescript
public readonly BatchGetSecurityControls: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetSecurityControls API call.

---

##### `BatchGetStandardsControlAssociations`<sup>Required</sup> <a name="BatchGetStandardsControlAssociations" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchGetStandardsControlAssociations"></a>

```typescript
public readonly BatchGetStandardsControlAssociations: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetStandardsControlAssociations API call.

---

##### `BatchImportFindings`<sup>Required</sup> <a name="BatchImportFindings" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchImportFindings"></a>

```typescript
public readonly BatchImportFindings: string[];
```

- *Type:* string[]

IAM actions required for the BatchImportFindings API call.

---

##### `BatchUpdateAutomationRules`<sup>Required</sup> <a name="BatchUpdateAutomationRules" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchUpdateAutomationRules"></a>

```typescript
public readonly BatchUpdateAutomationRules: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateAutomationRules API call.

---

##### `BatchUpdateFindings`<sup>Required</sup> <a name="BatchUpdateFindings" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchUpdateFindings"></a>

```typescript
public readonly BatchUpdateFindings: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateFindings API call.

---

##### `BatchUpdateFindingsV2`<sup>Required</sup> <a name="BatchUpdateFindingsV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchUpdateFindingsV2"></a>

```typescript
public readonly BatchUpdateFindingsV2: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateFindingsV2 API call.

---

##### `BatchUpdateStandardsControlAssociations`<sup>Required</sup> <a name="BatchUpdateStandardsControlAssociations" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.BatchUpdateStandardsControlAssociations"></a>

```typescript
public readonly BatchUpdateStandardsControlAssociations: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateStandardsControlAssociations API call.

---

##### `CreateActionTarget`<sup>Required</sup> <a name="CreateActionTarget" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateActionTarget"></a>

```typescript
public readonly CreateActionTarget: string[];
```

- *Type:* string[]

IAM actions required for the CreateActionTarget API call.

---

##### `CreateAggregatorV2`<sup>Required</sup> <a name="CreateAggregatorV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateAggregatorV2"></a>

```typescript
public readonly CreateAggregatorV2: string[];
```

- *Type:* string[]

IAM actions required for the CreateAggregatorV2 API call.

---

##### `CreateAutomationRule`<sup>Required</sup> <a name="CreateAutomationRule" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateAutomationRule"></a>

```typescript
public readonly CreateAutomationRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutomationRule API call.

---

##### `CreateAutomationRuleV2`<sup>Required</sup> <a name="CreateAutomationRuleV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateAutomationRuleV2"></a>

```typescript
public readonly CreateAutomationRuleV2: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutomationRuleV2 API call.

---

##### `CreateConfigurationPolicy`<sup>Required</sup> <a name="CreateConfigurationPolicy" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateConfigurationPolicy"></a>

```typescript
public readonly CreateConfigurationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfigurationPolicy API call.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnector API call.

---

##### `CreateConnectorV2`<sup>Required</sup> <a name="CreateConnectorV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateConnectorV2"></a>

```typescript
public readonly CreateConnectorV2: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectorV2 API call.

---

##### `CreateFindingAggregator`<sup>Required</sup> <a name="CreateFindingAggregator" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateFindingAggregator"></a>

```typescript
public readonly CreateFindingAggregator: string[];
```

- *Type:* string[]

IAM actions required for the CreateFindingAggregator API call.

---

##### `CreateInsight`<sup>Required</sup> <a name="CreateInsight" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateInsight"></a>

```typescript
public readonly CreateInsight: string[];
```

- *Type:* string[]

IAM actions required for the CreateInsight API call.

---

##### `CreateMembers`<sup>Required</sup> <a name="CreateMembers" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateMembers"></a>

```typescript
public readonly CreateMembers: string[];
```

- *Type:* string[]

IAM actions required for the CreateMembers API call.

---

##### `CreateTicketV2`<sup>Required</sup> <a name="CreateTicketV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.CreateTicketV2"></a>

```typescript
public readonly CreateTicketV2: string[];
```

- *Type:* string[]

IAM actions required for the CreateTicketV2 API call.

---

##### `DeclineInvitations`<sup>Required</sup> <a name="DeclineInvitations" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeclineInvitations"></a>

```typescript
public readonly DeclineInvitations: string[];
```

- *Type:* string[]

IAM actions required for the DeclineInvitations API call.

---

##### `DeleteActionTarget`<sup>Required</sup> <a name="DeleteActionTarget" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteActionTarget"></a>

```typescript
public readonly DeleteActionTarget: string[];
```

- *Type:* string[]

IAM actions required for the DeleteActionTarget API call.

---

##### `DeleteAggregatorV2`<sup>Required</sup> <a name="DeleteAggregatorV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteAggregatorV2"></a>

```typescript
public readonly DeleteAggregatorV2: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAggregatorV2 API call.

---

##### `DeleteAutomationRuleV2`<sup>Required</sup> <a name="DeleteAutomationRuleV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteAutomationRuleV2"></a>

```typescript
public readonly DeleteAutomationRuleV2: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAutomationRuleV2 API call.

---

##### `DeleteConfigurationPolicy`<sup>Required</sup> <a name="DeleteConfigurationPolicy" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteConfigurationPolicy"></a>

```typescript
public readonly DeleteConfigurationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationPolicy API call.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnector API call.

---

##### `DeleteConnectorV2`<sup>Required</sup> <a name="DeleteConnectorV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteConnectorV2"></a>

```typescript
public readonly DeleteConnectorV2: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectorV2 API call.

---

##### `DeleteFindingAggregator`<sup>Required</sup> <a name="DeleteFindingAggregator" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteFindingAggregator"></a>

```typescript
public readonly DeleteFindingAggregator: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFindingAggregator API call.

---

##### `DeleteInsight`<sup>Required</sup> <a name="DeleteInsight" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteInsight"></a>

```typescript
public readonly DeleteInsight: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInsight API call.

---

##### `DeleteInvitations`<sup>Required</sup> <a name="DeleteInvitations" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteInvitations"></a>

```typescript
public readonly DeleteInvitations: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInvitations API call.

---

##### `DeleteMembers`<sup>Required</sup> <a name="DeleteMembers" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DeleteMembers"></a>

```typescript
public readonly DeleteMembers: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMembers API call.

---

##### `DescribeActionTargets`<sup>Required</sup> <a name="DescribeActionTargets" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeActionTargets"></a>

```typescript
public readonly DescribeActionTargets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeActionTargets API call.

---

##### `DescribeHub`<sup>Required</sup> <a name="DescribeHub" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeHub"></a>

```typescript
public readonly DescribeHub: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHub API call.

---

##### `DescribeOrganizationConfiguration`<sup>Required</sup> <a name="DescribeOrganizationConfiguration" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeOrganizationConfiguration"></a>

```typescript
public readonly DescribeOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationConfiguration API call.

---

##### `DescribeProducts`<sup>Required</sup> <a name="DescribeProducts" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeProducts"></a>

```typescript
public readonly DescribeProducts: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProducts API call.

---

##### `DescribeProductsV2`<sup>Required</sup> <a name="DescribeProductsV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeProductsV2"></a>

```typescript
public readonly DescribeProductsV2: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProductsV2 API call.

---

##### `DescribeSecurityHubV2`<sup>Required</sup> <a name="DescribeSecurityHubV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeSecurityHubV2"></a>

```typescript
public readonly DescribeSecurityHubV2: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSecurityHubV2 API call.

---

##### `DescribeStandards`<sup>Required</sup> <a name="DescribeStandards" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeStandards"></a>

```typescript
public readonly DescribeStandards: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStandards API call.

---

##### `DescribeStandardsControls`<sup>Required</sup> <a name="DescribeStandardsControls" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DescribeStandardsControls"></a>

```typescript
public readonly DescribeStandardsControls: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStandardsControls API call.

---

##### `DisableImportFindingsForProduct`<sup>Required</sup> <a name="DisableImportFindingsForProduct" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisableImportFindingsForProduct"></a>

```typescript
public readonly DisableImportFindingsForProduct: string[];
```

- *Type:* string[]

IAM actions required for the DisableImportFindingsForProduct API call.

---

##### `DisableOrganizationAdminAccount`<sup>Required</sup> <a name="DisableOrganizationAdminAccount" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisableOrganizationAdminAccount"></a>

```typescript
public readonly DisableOrganizationAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisableOrganizationAdminAccount API call.

---

##### `DisableSecurityHub`<sup>Required</sup> <a name="DisableSecurityHub" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisableSecurityHub"></a>

```typescript
public readonly DisableSecurityHub: string[];
```

- *Type:* string[]

IAM actions required for the DisableSecurityHub API call.

---

##### `DisableSecurityHubFeatureV2`<sup>Required</sup> <a name="DisableSecurityHubFeatureV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisableSecurityHubFeatureV2"></a>

```typescript
public readonly DisableSecurityHubFeatureV2: string[];
```

- *Type:* string[]

IAM actions required for the DisableSecurityHubFeatureV2 API call.

---

##### `DisableSecurityHubV2`<sup>Required</sup> <a name="DisableSecurityHubV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisableSecurityHubV2"></a>

```typescript
public readonly DisableSecurityHubV2: string[];
```

- *Type:* string[]

IAM actions required for the DisableSecurityHubV2 API call.

---

##### `DisassociateFromAdministratorAccount`<sup>Required</sup> <a name="DisassociateFromAdministratorAccount" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisassociateFromAdministratorAccount"></a>

```typescript
public readonly DisassociateFromAdministratorAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFromAdministratorAccount API call.

---

##### `DisassociateFromMasterAccount`<sup>Required</sup> <a name="DisassociateFromMasterAccount" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisassociateFromMasterAccount"></a>

```typescript
public readonly DisassociateFromMasterAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFromMasterAccount API call.

---

##### `DisassociateMembers`<sup>Required</sup> <a name="DisassociateMembers" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.DisassociateMembers"></a>

```typescript
public readonly DisassociateMembers: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMembers API call.

---

##### `EnableImportFindingsForProduct`<sup>Required</sup> <a name="EnableImportFindingsForProduct" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.EnableImportFindingsForProduct"></a>

```typescript
public readonly EnableImportFindingsForProduct: string[];
```

- *Type:* string[]

IAM actions required for the EnableImportFindingsForProduct API call.

---

##### `EnableOrganizationAdminAccount`<sup>Required</sup> <a name="EnableOrganizationAdminAccount" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.EnableOrganizationAdminAccount"></a>

```typescript
public readonly EnableOrganizationAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the EnableOrganizationAdminAccount API call.

---

##### `EnableSecurityHub`<sup>Required</sup> <a name="EnableSecurityHub" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.EnableSecurityHub"></a>

```typescript
public readonly EnableSecurityHub: string[];
```

- *Type:* string[]

IAM actions required for the EnableSecurityHub API call.

---

##### `EnableSecurityHubFeatureV2`<sup>Required</sup> <a name="EnableSecurityHubFeatureV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.EnableSecurityHubFeatureV2"></a>

```typescript
public readonly EnableSecurityHubFeatureV2: string[];
```

- *Type:* string[]

IAM actions required for the EnableSecurityHubFeatureV2 API call.

---

##### `EnableSecurityHubV2`<sup>Required</sup> <a name="EnableSecurityHubV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.EnableSecurityHubV2"></a>

```typescript
public readonly EnableSecurityHubV2: string[];
```

- *Type:* string[]

IAM actions required for the EnableSecurityHubV2 API call.

---

##### `GenerateRecommendedPolicyV2`<sup>Required</sup> <a name="GenerateRecommendedPolicyV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.GenerateRecommendedPolicyV2"></a>

```typescript
public readonly GenerateRecommendedPolicyV2: string[];
```

- *Type:* string[]

IAM actions required for the GenerateRecommendedPolicyV2 API call.

---

##### `InviteMembers`<sup>Required</sup> <a name="InviteMembers" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.InviteMembers"></a>

```typescript
public readonly InviteMembers: string[];
```

- *Type:* string[]

IAM actions required for the InviteMembers API call.

---

##### `ListAggregatorsV2`<sup>Required</sup> <a name="ListAggregatorsV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListAggregatorsV2"></a>

```typescript
public readonly ListAggregatorsV2: string[];
```

- *Type:* string[]

IAM actions required for the ListAggregatorsV2 API call.

---

##### `ListAutomationRules`<sup>Required</sup> <a name="ListAutomationRules" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListAutomationRules"></a>

```typescript
public readonly ListAutomationRules: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomationRules API call.

---

##### `ListAutomationRulesV2`<sup>Required</sup> <a name="ListAutomationRulesV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListAutomationRulesV2"></a>

```typescript
public readonly ListAutomationRulesV2: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomationRulesV2 API call.

---

##### `ListConfigurationPolicies`<sup>Required</sup> <a name="ListConfigurationPolicies" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListConfigurationPolicies"></a>

```typescript
public readonly ListConfigurationPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationPolicies API call.

---

##### `ListConfigurationPolicyAssociations`<sup>Required</sup> <a name="ListConfigurationPolicyAssociations" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListConfigurationPolicyAssociations"></a>

```typescript
public readonly ListConfigurationPolicyAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationPolicyAssociations API call.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectors API call.

---

##### `ListConnectorsV2`<sup>Required</sup> <a name="ListConnectorsV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListConnectorsV2"></a>

```typescript
public readonly ListConnectorsV2: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectorsV2 API call.

---

##### `ListEnabledProductsForImport`<sup>Required</sup> <a name="ListEnabledProductsForImport" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListEnabledProductsForImport"></a>

```typescript
public readonly ListEnabledProductsForImport: string[];
```

- *Type:* string[]

IAM actions required for the ListEnabledProductsForImport API call.

---

##### `ListFindingAggregators`<sup>Required</sup> <a name="ListFindingAggregators" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListFindingAggregators"></a>

```typescript
public readonly ListFindingAggregators: string[];
```

- *Type:* string[]

IAM actions required for the ListFindingAggregators API call.

---

##### `ListFreeTrialStatusesV2`<sup>Required</sup> <a name="ListFreeTrialStatusesV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListFreeTrialStatusesV2"></a>

```typescript
public readonly ListFreeTrialStatusesV2: string[];
```

- *Type:* string[]

IAM actions required for the ListFreeTrialStatusesV2 API call.

---

##### `ListInvitations`<sup>Required</sup> <a name="ListInvitations" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListInvitations"></a>

```typescript
public readonly ListInvitations: string[];
```

- *Type:* string[]

IAM actions required for the ListInvitations API call.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListMembers"></a>

```typescript
public readonly ListMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListMembers API call.

---

##### `ListOrganizationAdminAccounts`<sup>Required</sup> <a name="ListOrganizationAdminAccounts" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListOrganizationAdminAccounts"></a>

```typescript
public readonly ListOrganizationAdminAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationAdminAccounts API call.

---

##### `ListSecurityControlDefinitions`<sup>Required</sup> <a name="ListSecurityControlDefinitions" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListSecurityControlDefinitions"></a>

```typescript
public readonly ListSecurityControlDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityControlDefinitions API call.

---

##### `ListStandardsControlAssociations`<sup>Required</sup> <a name="ListStandardsControlAssociations" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListStandardsControlAssociations"></a>

```typescript
public readonly ListStandardsControlAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListStandardsControlAssociations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAdministratorAccount`<sup>Required</sup> <a name="opGetAdministratorAccount" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetAdministratorAccount"></a>

```typescript
public readonly opGetAdministratorAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetAdministratorAccount API call.

---

##### `opGetAggregatorV2`<sup>Required</sup> <a name="opGetAggregatorV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetAggregatorV2"></a>

```typescript
public readonly opGetAggregatorV2: string[];
```

- *Type:* string[]

IAM actions required for the GetAggregatorV2 API call.

---

##### `opGetAutomationRuleV2`<sup>Required</sup> <a name="opGetAutomationRuleV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetAutomationRuleV2"></a>

```typescript
public readonly opGetAutomationRuleV2: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomationRuleV2 API call.

---

##### `opGetConfigurationPolicy`<sup>Required</sup> <a name="opGetConfigurationPolicy" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetConfigurationPolicy"></a>

```typescript
public readonly opGetConfigurationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetConfigurationPolicy API call.

---

##### `opGetConfigurationPolicyAssociation`<sup>Required</sup> <a name="opGetConfigurationPolicyAssociation" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetConfigurationPolicyAssociation"></a>

```typescript
public readonly opGetConfigurationPolicyAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetConfigurationPolicyAssociation API call.

---

##### `opGetConnector`<sup>Required</sup> <a name="opGetConnector" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetConnector"></a>

```typescript
public readonly opGetConnector: string[];
```

- *Type:* string[]

IAM actions required for the GetConnector API call.

---

##### `opGetConnectorV2`<sup>Required</sup> <a name="opGetConnectorV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetConnectorV2"></a>

```typescript
public readonly opGetConnectorV2: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectorV2 API call.

---

##### `opGetEnabledStandards`<sup>Required</sup> <a name="opGetEnabledStandards" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetEnabledStandards"></a>

```typescript
public readonly opGetEnabledStandards: string[];
```

- *Type:* string[]

IAM actions required for the GetEnabledStandards API call.

---

##### `opGetFindingAggregator`<sup>Required</sup> <a name="opGetFindingAggregator" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindingAggregator"></a>

```typescript
public readonly opGetFindingAggregator: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingAggregator API call.

---

##### `opGetFindingHistory`<sup>Required</sup> <a name="opGetFindingHistory" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindingHistory"></a>

```typescript
public readonly opGetFindingHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingHistory API call.

---

##### `opGetFindings`<sup>Required</sup> <a name="opGetFindings" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindings"></a>

```typescript
public readonly opGetFindings: string[];
```

- *Type:* string[]

IAM actions required for the GetFindings API call.

---

##### `opGetFindingStatisticsV2`<sup>Required</sup> <a name="opGetFindingStatisticsV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindingStatisticsV2"></a>

```typescript
public readonly opGetFindingStatisticsV2: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingStatisticsV2 API call.

---

##### `opGetFindingsTrendsV2`<sup>Required</sup> <a name="opGetFindingsTrendsV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindingsTrendsV2"></a>

```typescript
public readonly opGetFindingsTrendsV2: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingsTrendsV2 API call.

---

##### `opGetFindingsV2`<sup>Required</sup> <a name="opGetFindingsV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetFindingsV2"></a>

```typescript
public readonly opGetFindingsV2: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingsV2 API call.

---

##### `opGetInsightResults`<sup>Required</sup> <a name="opGetInsightResults" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetInsightResults"></a>

```typescript
public readonly opGetInsightResults: string[];
```

- *Type:* string[]

IAM actions required for the GetInsightResults API call.

---

##### `opGetInsights`<sup>Required</sup> <a name="opGetInsights" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetInsights"></a>

```typescript
public readonly opGetInsights: string[];
```

- *Type:* string[]

IAM actions required for the GetInsights API call.

---

##### `opGetInvitationsCount`<sup>Required</sup> <a name="opGetInvitationsCount" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetInvitationsCount"></a>

```typescript
public readonly opGetInvitationsCount: string[];
```

- *Type:* string[]

IAM actions required for the GetInvitationsCount API call.

---

##### `opGetMasterAccount`<sup>Required</sup> <a name="opGetMasterAccount" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetMasterAccount"></a>

```typescript
public readonly opGetMasterAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetMasterAccount API call.

---

##### `opGetMembers`<sup>Required</sup> <a name="opGetMembers" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetMembers"></a>

```typescript
public readonly opGetMembers: string[];
```

- *Type:* string[]

IAM actions required for the GetMembers API call.

---

##### `opGetRecommendedPolicyV2`<sup>Required</sup> <a name="opGetRecommendedPolicyV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetRecommendedPolicyV2"></a>

```typescript
public readonly opGetRecommendedPolicyV2: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommendedPolicyV2 API call.

---

##### `opGetResourcesStatisticsV2`<sup>Required</sup> <a name="opGetResourcesStatisticsV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetResourcesStatisticsV2"></a>

```typescript
public readonly opGetResourcesStatisticsV2: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcesStatisticsV2 API call.

---

##### `opGetResourcesTrendsV2`<sup>Required</sup> <a name="opGetResourcesTrendsV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetResourcesTrendsV2"></a>

```typescript
public readonly opGetResourcesTrendsV2: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcesTrendsV2 API call.

---

##### `opGetResourcesV2`<sup>Required</sup> <a name="opGetResourcesV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetResourcesV2"></a>

```typescript
public readonly opGetResourcesV2: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcesV2 API call.

---

##### `opGetSecurityControlDefinition`<sup>Required</sup> <a name="opGetSecurityControlDefinition" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.opGetSecurityControlDefinition"></a>

```typescript
public readonly opGetSecurityControlDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetSecurityControlDefinition API call.

---

##### `RegisterConnectorV2`<sup>Required</sup> <a name="RegisterConnectorV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.RegisterConnectorV2"></a>

```typescript
public readonly RegisterConnectorV2: string[];
```

- *Type:* string[]

IAM actions required for the RegisterConnectorV2 API call.

---

##### `StartConfigurationPolicyAssociation`<sup>Required</sup> <a name="StartConfigurationPolicyAssociation" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.StartConfigurationPolicyAssociation"></a>

```typescript
public readonly StartConfigurationPolicyAssociation: string[];
```

- *Type:* string[]

IAM actions required for the StartConfigurationPolicyAssociation API call.

---

##### `StartConfigurationPolicyDisassociation`<sup>Required</sup> <a name="StartConfigurationPolicyDisassociation" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.StartConfigurationPolicyDisassociation"></a>

```typescript
public readonly StartConfigurationPolicyDisassociation: string[];
```

- *Type:* string[]

IAM actions required for the StartConfigurationPolicyDisassociation API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateActionTarget`<sup>Required</sup> <a name="UpdateActionTarget" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateActionTarget"></a>

```typescript
public readonly UpdateActionTarget: string[];
```

- *Type:* string[]

IAM actions required for the UpdateActionTarget API call.

---

##### `UpdateAggregatorV2`<sup>Required</sup> <a name="UpdateAggregatorV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateAggregatorV2"></a>

```typescript
public readonly UpdateAggregatorV2: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAggregatorV2 API call.

---

##### `UpdateAutomationRuleV2`<sup>Required</sup> <a name="UpdateAutomationRuleV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateAutomationRuleV2"></a>

```typescript
public readonly UpdateAutomationRuleV2: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutomationRuleV2 API call.

---

##### `UpdateConfigurationPolicy`<sup>Required</sup> <a name="UpdateConfigurationPolicy" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateConfigurationPolicy"></a>

```typescript
public readonly UpdateConfigurationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationPolicy API call.

---

##### `UpdateConnector`<sup>Required</sup> <a name="UpdateConnector" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateConnector"></a>

```typescript
public readonly UpdateConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnector API call.

---

##### `UpdateConnectorV2`<sup>Required</sup> <a name="UpdateConnectorV2" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateConnectorV2"></a>

```typescript
public readonly UpdateConnectorV2: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectorV2 API call.

---

##### `UpdateFindingAggregator`<sup>Required</sup> <a name="UpdateFindingAggregator" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateFindingAggregator"></a>

```typescript
public readonly UpdateFindingAggregator: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFindingAggregator API call.

---

##### `UpdateFindings`<sup>Required</sup> <a name="UpdateFindings" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateFindings"></a>

```typescript
public readonly UpdateFindings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFindings API call.

---

##### `UpdateInsight`<sup>Required</sup> <a name="UpdateInsight" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateInsight"></a>

```typescript
public readonly UpdateInsight: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInsight API call.

---

##### `UpdateOrganizationConfiguration`<sup>Required</sup> <a name="UpdateOrganizationConfiguration" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateOrganizationConfiguration"></a>

```typescript
public readonly UpdateOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOrganizationConfiguration API call.

---

##### `UpdateSecurityControl`<sup>Required</sup> <a name="UpdateSecurityControl" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateSecurityControl"></a>

```typescript
public readonly UpdateSecurityControl: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSecurityControl API call.

---

##### `UpdateSecurityHubConfiguration`<sup>Required</sup> <a name="UpdateSecurityHubConfiguration" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateSecurityHubConfiguration"></a>

```typescript
public readonly UpdateSecurityHubConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSecurityHubConfiguration API call.

---

##### `UpdateStandardsControl`<sup>Required</sup> <a name="UpdateStandardsControl" id="@cdk_utils/iam.securityhub.SecurityHubOperations.property.UpdateStandardsControl"></a>

```typescript
public readonly UpdateStandardsControl: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStandardsControl API call.

---

### SecurityHubResources <a name="SecurityHubResources" id="@cdk_utils/iam.securityhub.SecurityHubResources"></a>

ARN builders, validators, and parsers for securityhub resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.securityhub.SecurityHubResources.Initializer"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

new securityhub.SecurityHubResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.aggregatorv2">aggregatorv2</a></code> | Builds an ARN for the aggregatorv2 resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.automationRule">automationRule</a></code> | Builds an ARN for the automation-rule resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.automationRulev2">automationRulev2</a></code> | Builds an ARN for the automation-rulev2 resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.configurationPolicy">configurationPolicy</a></code> | Builds an ARN for the configuration-policy resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.connector">connector</a></code> | Builds an ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.connectorv2">connectorv2</a></code> | Builds an ARN for the connectorv2 resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.findingAggregator">findingAggregator</a></code> | Builds an ARN for the finding-aggregator resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.hub">hub</a></code> | Builds an ARN for the hub resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.hubv2">hubv2</a></code> | Builds an ARN for the hubv2 resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.isValidAggregatorv2Arn">isValidAggregatorv2Arn</a></code> | Validates whether a string is a valid ARN for the aggregatorv2 resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.isValidAutomationRuleArn">isValidAutomationRuleArn</a></code> | Validates whether a string is a valid ARN for the automation-rule resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.isValidAutomationRulev2Arn">isValidAutomationRulev2Arn</a></code> | Validates whether a string is a valid ARN for the automation-rulev2 resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.isValidConfigurationPolicyArn">isValidConfigurationPolicyArn</a></code> | Validates whether a string is a valid ARN for the configuration-policy resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.isValidConnectorArn">isValidConnectorArn</a></code> | Validates whether a string is a valid ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.isValidConnectorv2Arn">isValidConnectorv2Arn</a></code> | Validates whether a string is a valid ARN for the connectorv2 resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.isValidFindingAggregatorArn">isValidFindingAggregatorArn</a></code> | Validates whether a string is a valid ARN for the finding-aggregator resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.isValidHubArn">isValidHubArn</a></code> | Validates whether a string is a valid ARN for the hub resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.isValidHubv2Arn">isValidHubv2Arn</a></code> | Validates whether a string is a valid ARN for the hubv2 resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.isValidProductArn">isValidProductArn</a></code> | Validates whether a string is a valid ARN for the product resource. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.parseAggregatorv2Arn">parseAggregatorv2Arn</a></code> | Parses a aggregatorv2 ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.parseAutomationRuleArn">parseAutomationRuleArn</a></code> | Parses a automation-rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.parseAutomationRulev2Arn">parseAutomationRulev2Arn</a></code> | Parses a automation-rulev2 ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.parseConfigurationPolicyArn">parseConfigurationPolicyArn</a></code> | Parses a configuration-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.parseConnectorArn">parseConnectorArn</a></code> | Parses a connector ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.parseConnectorv2Arn">parseConnectorv2Arn</a></code> | Parses a connectorv2 ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.parseFindingAggregatorArn">parseFindingAggregatorArn</a></code> | Parses a finding-aggregator ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.parseHubArn">parseHubArn</a></code> | Parses a hub ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.parseHubv2Arn">parseHubv2Arn</a></code> | Parses a hubv2 ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.parseProductArn">parseProductArn</a></code> | Parses a product ARN into its components. |
| <code><a href="#@cdk_utils/iam.securityhub.SecurityHubResources.product">product</a></code> | Builds an ARN for the product resource. |

---

##### `aggregatorv2` <a name="aggregatorv2" id="@cdk_utils/iam.securityhub.SecurityHubResources.aggregatorv2"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.aggregatorv2(props: SecurityHubAggregatorv2ArnProps)
```

Builds an ARN for the aggregatorv2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityhub.SecurityHubResources.aggregatorv2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityhub.SecurityHubAggregatorv2ArnProps">SecurityHubAggregatorv2ArnProps</a>

---

##### `automationRule` <a name="automationRule" id="@cdk_utils/iam.securityhub.SecurityHubResources.automationRule"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.automationRule(props: SecurityHubAutomationRuleArnProps)
```

Builds an ARN for the automation-rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityhub.SecurityHubResources.automationRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRuleArnProps">SecurityHubAutomationRuleArnProps</a>

---

##### `automationRulev2` <a name="automationRulev2" id="@cdk_utils/iam.securityhub.SecurityHubResources.automationRulev2"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.automationRulev2(props: SecurityHubAutomationRulev2ArnProps)
```

Builds an ARN for the automation-rulev2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityhub.SecurityHubResources.automationRulev2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityhub.SecurityHubAutomationRulev2ArnProps">SecurityHubAutomationRulev2ArnProps</a>

---

##### `configurationPolicy` <a name="configurationPolicy" id="@cdk_utils/iam.securityhub.SecurityHubResources.configurationPolicy"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.configurationPolicy(props: SecurityHubConfigurationPolicyArnProps)
```

Builds an ARN for the configuration-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityhub.SecurityHubResources.configurationPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityhub.SecurityHubConfigurationPolicyArnProps">SecurityHubConfigurationPolicyArnProps</a>

---

##### `connector` <a name="connector" id="@cdk_utils/iam.securityhub.SecurityHubResources.connector"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.connector(props: SecurityHubConnectorArnProps)
```

Builds an ARN for the connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityhub.SecurityHubResources.connector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorArnProps">SecurityHubConnectorArnProps</a>

---

##### `connectorv2` <a name="connectorv2" id="@cdk_utils/iam.securityhub.SecurityHubResources.connectorv2"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.connectorv2(props: SecurityHubConnectorv2ArnProps)
```

Builds an ARN for the connectorv2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityhub.SecurityHubResources.connectorv2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityhub.SecurityHubConnectorv2ArnProps">SecurityHubConnectorv2ArnProps</a>

---

##### `findingAggregator` <a name="findingAggregator" id="@cdk_utils/iam.securityhub.SecurityHubResources.findingAggregator"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.findingAggregator(props: SecurityHubFindingAggregatorArnProps)
```

Builds an ARN for the finding-aggregator resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityhub.SecurityHubResources.findingAggregator.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityhub.SecurityHubFindingAggregatorArnProps">SecurityHubFindingAggregatorArnProps</a>

---

##### `hub` <a name="hub" id="@cdk_utils/iam.securityhub.SecurityHubResources.hub"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.hub(props: SecurityHubHubArnProps)
```

Builds an ARN for the hub resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityhub.SecurityHubResources.hub.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityhub.SecurityHubHubArnProps">SecurityHubHubArnProps</a>

---

##### `hubv2` <a name="hubv2" id="@cdk_utils/iam.securityhub.SecurityHubResources.hubv2"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.hubv2(props: SecurityHubHubv2ArnProps)
```

Builds an ARN for the hubv2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityhub.SecurityHubResources.hubv2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityhub.SecurityHubHubv2ArnProps">SecurityHubHubv2ArnProps</a>

---

##### `isValidAggregatorv2Arn` <a name="isValidAggregatorv2Arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidAggregatorv2Arn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.isValidAggregatorv2Arn(arn: string)
```

Validates whether a string is a valid ARN for the aggregatorv2 resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidAggregatorv2Arn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAutomationRuleArn` <a name="isValidAutomationRuleArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidAutomationRuleArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.isValidAutomationRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the automation-rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidAutomationRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAutomationRulev2Arn` <a name="isValidAutomationRulev2Arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidAutomationRulev2Arn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.isValidAutomationRulev2Arn(arn: string)
```

Validates whether a string is a valid ARN for the automation-rulev2 resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidAutomationRulev2Arn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigurationPolicyArn` <a name="isValidConfigurationPolicyArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidConfigurationPolicyArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.isValidConfigurationPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the configuration-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidConfigurationPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorArn` <a name="isValidConnectorArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidConnectorArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.isValidConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorv2Arn` <a name="isValidConnectorv2Arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidConnectorv2Arn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.isValidConnectorv2Arn(arn: string)
```

Validates whether a string is a valid ARN for the connectorv2 resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidConnectorv2Arn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFindingAggregatorArn` <a name="isValidFindingAggregatorArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidFindingAggregatorArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.isValidFindingAggregatorArn(arn: string)
```

Validates whether a string is a valid ARN for the finding-aggregator resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidFindingAggregatorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHubArn` <a name="isValidHubArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidHubArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.isValidHubArn(arn: string)
```

Validates whether a string is a valid ARN for the hub resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidHubArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHubv2Arn` <a name="isValidHubv2Arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidHubv2Arn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.isValidHubv2Arn(arn: string)
```

Validates whether a string is a valid ARN for the hubv2 resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidHubv2Arn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProductArn` <a name="isValidProductArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidProductArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.isValidProductArn(arn: string)
```

Validates whether a string is a valid ARN for the product resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.isValidProductArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAggregatorv2Arn` <a name="parseAggregatorv2Arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseAggregatorv2Arn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.parseAggregatorv2Arn(arn: string)
```

Parses a aggregatorv2 ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseAggregatorv2Arn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutomationRuleArn` <a name="parseAutomationRuleArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseAutomationRuleArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.parseAutomationRuleArn(arn: string)
```

Parses a automation-rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseAutomationRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutomationRulev2Arn` <a name="parseAutomationRulev2Arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseAutomationRulev2Arn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.parseAutomationRulev2Arn(arn: string)
```

Parses a automation-rulev2 ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseAutomationRulev2Arn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationPolicyArn` <a name="parseConfigurationPolicyArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseConfigurationPolicyArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.parseConfigurationPolicyArn(arn: string)
```

Parses a configuration-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseConfigurationPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorArn` <a name="parseConnectorArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseConnectorArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.parseConnectorArn(arn: string)
```

Parses a connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorv2Arn` <a name="parseConnectorv2Arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseConnectorv2Arn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.parseConnectorv2Arn(arn: string)
```

Parses a connectorv2 ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseConnectorv2Arn.parameter.arn"></a>

- *Type:* string

---

##### `parseFindingAggregatorArn` <a name="parseFindingAggregatorArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseFindingAggregatorArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.parseFindingAggregatorArn(arn: string)
```

Parses a finding-aggregator ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseFindingAggregatorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHubArn` <a name="parseHubArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseHubArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.parseHubArn(arn: string)
```

Parses a hub ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseHubArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHubv2Arn` <a name="parseHubv2Arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseHubv2Arn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.parseHubv2Arn(arn: string)
```

Parses a hubv2 ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseHubv2Arn.parameter.arn"></a>

- *Type:* string

---

##### `parseProductArn` <a name="parseProductArn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseProductArn"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.parseProductArn(arn: string)
```

Parses a product ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.securityhub.SecurityHubResources.parseProductArn.parameter.arn"></a>

- *Type:* string

---

##### `product` <a name="product" id="@cdk_utils/iam.securityhub.SecurityHubResources.product"></a>

```typescript
import { securityhub } from '@cdk_utils/iam'

securityhub.SecurityHubResources.product(props: SecurityHubProductArnProps)
```

Builds an ARN for the product resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.securityhub.SecurityHubResources.product.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.securityhub.SecurityHubProductArnProps">SecurityHubProductArnProps</a>

---




