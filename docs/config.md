# `config` Submodule <a name="`config` Submodule" id="@cdk_utils/iam.config"></a>


## Structs <a name="Structs" id="Structs"></a>

### ConfigAggregationAuthorizationArnComponents <a name="ConfigAggregationAuthorizationArnComponents" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents"></a>

Parsed components of a AggregationAuthorization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configAggregationAuthorizationArnComponents: config.ConfigAggregationAuthorizationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents.property.aggregatorAccount">aggregatorAccount</a></code> | <code>string</code> | The AggregatorAccount component. |
| <code><a href="#@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents.property.aggregatorRegion">aggregatorRegion</a></code> | <code>string</code> | The AggregatorRegion component. |
| <code><a href="#@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `aggregatorAccount`<sup>Required</sup> <a name="aggregatorAccount" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents.property.aggregatorAccount"></a>

```typescript
public readonly aggregatorAccount: string;
```

- *Type:* string

The AggregatorAccount component.

---

##### `aggregatorRegion`<sup>Required</sup> <a name="aggregatorRegion" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents.property.aggregatorRegion"></a>

```typescript
public readonly aggregatorRegion: string;
```

- *Type:* string

The AggregatorRegion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConfigAggregationAuthorizationArnProps <a name="ConfigAggregationAuthorizationArnProps" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps"></a>

Properties for building a AggregationAuthorization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configAggregationAuthorizationArnProps: config.ConfigAggregationAuthorizationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps.property.aggregatorAccount">aggregatorAccount</a></code> | <code>string</code> | The AggregatorAccount component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps.property.aggregatorRegion">aggregatorRegion</a></code> | <code>string</code> | The AggregatorRegion component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `aggregatorAccount`<sup>Required</sup> <a name="aggregatorAccount" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps.property.aggregatorAccount"></a>

```typescript
public readonly aggregatorAccount: string;
```

- *Type:* string

The AggregatorAccount component of the ARN.

---

##### `aggregatorRegion`<sup>Required</sup> <a name="aggregatorRegion" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps.property.aggregatorRegion"></a>

```typescript
public readonly aggregatorRegion: string;
```

- *Type:* string

The AggregatorRegion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConfigConfigRuleArnComponents <a name="ConfigConfigRuleArnComponents" id="@cdk_utils/iam.config.ConfigConfigRuleArnComponents"></a>

Parsed components of a ConfigRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigConfigRuleArnComponents.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configConfigRuleArnComponents: config.ConfigConfigRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigRuleArnComponents.property.configRuleId">configRuleId</a></code> | <code>string</code> | The ConfigRuleId component. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.config.ConfigConfigRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configRuleId`<sup>Required</sup> <a name="configRuleId" id="@cdk_utils/iam.config.ConfigConfigRuleArnComponents.property.configRuleId"></a>

```typescript
public readonly configRuleId: string;
```

- *Type:* string

The ConfigRuleId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigConfigRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.config.ConfigConfigRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConfigConfigRuleArnProps <a name="ConfigConfigRuleArnProps" id="@cdk_utils/iam.config.ConfigConfigRuleArnProps"></a>

Properties for building a ConfigRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigConfigRuleArnProps.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configConfigRuleArnProps: config.ConfigConfigRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigRuleArnProps.property.configRuleId">configRuleId</a></code> | <code>string</code> | The ConfigRuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configRuleId`<sup>Required</sup> <a name="configRuleId" id="@cdk_utils/iam.config.ConfigConfigRuleArnProps.property.configRuleId"></a>

```typescript
public readonly configRuleId: string;
```

- *Type:* string

The ConfigRuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.config.ConfigConfigRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigConfigRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.config.ConfigConfigRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConfigConfigurationAggregatorArnComponents <a name="ConfigConfigurationAggregatorArnComponents" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnComponents"></a>

Parsed components of a ConfigurationAggregator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnComponents.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configConfigurationAggregatorArnComponents: config.ConfigConfigurationAggregatorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationAggregatorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationAggregatorArnComponents.property.aggregatorId">aggregatorId</a></code> | <code>string</code> | The AggregatorId component. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationAggregatorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationAggregatorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `aggregatorId`<sup>Required</sup> <a name="aggregatorId" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnComponents.property.aggregatorId"></a>

```typescript
public readonly aggregatorId: string;
```

- *Type:* string

The AggregatorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConfigConfigurationAggregatorArnProps <a name="ConfigConfigurationAggregatorArnProps" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnProps"></a>

Properties for building a ConfigurationAggregator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnProps.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configConfigurationAggregatorArnProps: config.ConfigConfigurationAggregatorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationAggregatorArnProps.property.aggregatorId">aggregatorId</a></code> | <code>string</code> | The AggregatorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationAggregatorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationAggregatorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationAggregatorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `aggregatorId`<sup>Required</sup> <a name="aggregatorId" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnProps.property.aggregatorId"></a>

```typescript
public readonly aggregatorId: string;
```

- *Type:* string

The AggregatorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.config.ConfigConfigurationAggregatorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConfigConfigurationRecorderArnComponents <a name="ConfigConfigurationRecorderArnComponents" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents"></a>

Parsed components of a ConfigurationRecorder ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configConfigurationRecorderArnComponents: config.ConfigConfigurationRecorderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents.property.recorderId">recorderId</a></code> | <code>string</code> | The RecorderId component. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents.property.recorderName">recorderName</a></code> | <code>string</code> | The RecorderName component. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recorderId`<sup>Required</sup> <a name="recorderId" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents.property.recorderId"></a>

```typescript
public readonly recorderId: string;
```

- *Type:* string

The RecorderId component.

---

##### `recorderName`<sup>Required</sup> <a name="recorderName" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents.property.recorderName"></a>

```typescript
public readonly recorderName: string;
```

- *Type:* string

The RecorderName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConfigConfigurationRecorderArnProps <a name="ConfigConfigurationRecorderArnProps" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps"></a>

Properties for building a ConfigurationRecorder ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configConfigurationRecorderArnProps: config.ConfigConfigurationRecorderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps.property.recorderId">recorderId</a></code> | <code>string</code> | The RecorderId component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps.property.recorderName">recorderName</a></code> | <code>string</code> | The RecorderName component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `recorderId`<sup>Required</sup> <a name="recorderId" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps.property.recorderId"></a>

```typescript
public readonly recorderId: string;
```

- *Type:* string

The RecorderId component of the ARN.

---

##### `recorderName`<sup>Required</sup> <a name="recorderName" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps.property.recorderName"></a>

```typescript
public readonly recorderName: string;
```

- *Type:* string

The RecorderName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConfigConformancePackArnComponents <a name="ConfigConformancePackArnComponents" id="@cdk_utils/iam.config.ConfigConformancePackArnComponents"></a>

Parsed components of a ConformancePack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigConformancePackArnComponents.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configConformancePackArnComponents: config.ConfigConformancePackArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConformancePackArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigConformancePackArnComponents.property.conformancePackId">conformancePackId</a></code> | <code>string</code> | The ConformancePackId component. |
| <code><a href="#@cdk_utils/iam.config.ConfigConformancePackArnComponents.property.conformancePackName">conformancePackName</a></code> | <code>string</code> | The ConformancePackName component. |
| <code><a href="#@cdk_utils/iam.config.ConfigConformancePackArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigConformancePackArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.config.ConfigConformancePackArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `conformancePackId`<sup>Required</sup> <a name="conformancePackId" id="@cdk_utils/iam.config.ConfigConformancePackArnComponents.property.conformancePackId"></a>

```typescript
public readonly conformancePackId: string;
```

- *Type:* string

The ConformancePackId component.

---

##### `conformancePackName`<sup>Required</sup> <a name="conformancePackName" id="@cdk_utils/iam.config.ConfigConformancePackArnComponents.property.conformancePackName"></a>

```typescript
public readonly conformancePackName: string;
```

- *Type:* string

The ConformancePackName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigConformancePackArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.config.ConfigConformancePackArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConfigConformancePackArnProps <a name="ConfigConformancePackArnProps" id="@cdk_utils/iam.config.ConfigConformancePackArnProps"></a>

Properties for building a ConformancePack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigConformancePackArnProps.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configConformancePackArnProps: config.ConfigConformancePackArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConformancePackArnProps.property.conformancePackId">conformancePackId</a></code> | <code>string</code> | The ConformancePackId component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigConformancePackArnProps.property.conformancePackName">conformancePackName</a></code> | <code>string</code> | The ConformancePackName component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigConformancePackArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigConformancePackArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigConformancePackArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `conformancePackId`<sup>Required</sup> <a name="conformancePackId" id="@cdk_utils/iam.config.ConfigConformancePackArnProps.property.conformancePackId"></a>

```typescript
public readonly conformancePackId: string;
```

- *Type:* string

The ConformancePackId component of the ARN.

---

##### `conformancePackName`<sup>Required</sup> <a name="conformancePackName" id="@cdk_utils/iam.config.ConfigConformancePackArnProps.property.conformancePackName"></a>

```typescript
public readonly conformancePackName: string;
```

- *Type:* string

The ConformancePackName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.config.ConfigConformancePackArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigConformancePackArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.config.ConfigConformancePackArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConfigConnectorArnComponents <a name="ConfigConnectorArnComponents" id="@cdk_utils/iam.config.ConfigConnectorArnComponents"></a>

Parsed components of a Connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigConnectorArnComponents.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configConnectorArnComponents: config.ConfigConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnComponents.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component. |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnComponents.property.provider">provider</a></code> | <code>string</code> | The Provider component. |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnComponents.property.providerId">providerId</a></code> | <code>string</code> | The ProviderId component. |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.config.ConfigConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.config.ConfigConnectorArnComponents.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdk_utils/iam.config.ConfigConnectorArnComponents.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The Provider component.

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdk_utils/iam.config.ConfigConnectorArnComponents.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

The ProviderId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.config.ConfigConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConfigConnectorArnProps <a name="ConfigConnectorArnProps" id="@cdk_utils/iam.config.ConfigConnectorArnProps"></a>

Properties for building a Connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigConnectorArnProps.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configConnectorArnProps: config.ConfigConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnProps.property.connectorId">connectorId</a></code> | <code>string</code> | The ConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnProps.property.provider">provider</a></code> | <code>string</code> | The Provider component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnProps.property.providerId">providerId</a></code> | <code>string</code> | The ProviderId component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdk_utils/iam.config.ConfigConnectorArnProps.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ConnectorId component of the ARN.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdk_utils/iam.config.ConfigConnectorArnProps.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The Provider component of the ARN.

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdk_utils/iam.config.ConfigConnectorArnProps.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

The ProviderId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.config.ConfigConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.config.ConfigConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConfigOrganizationConfigRuleArnComponents <a name="ConfigOrganizationConfigRuleArnComponents" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnComponents"></a>

Parsed components of a OrganizationConfigRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnComponents.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configOrganizationConfigRuleArnComponents: config.ConfigOrganizationConfigRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnComponents.property.organizationConfigRuleId">organizationConfigRuleId</a></code> | <code>string</code> | The OrganizationConfigRuleId component. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `organizationConfigRuleId`<sup>Required</sup> <a name="organizationConfigRuleId" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnComponents.property.organizationConfigRuleId"></a>

```typescript
public readonly organizationConfigRuleId: string;
```

- *Type:* string

The OrganizationConfigRuleId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConfigOrganizationConfigRuleArnProps <a name="ConfigOrganizationConfigRuleArnProps" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnProps"></a>

Properties for building a OrganizationConfigRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnProps.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configOrganizationConfigRuleArnProps: config.ConfigOrganizationConfigRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnProps.property.organizationConfigRuleId">organizationConfigRuleId</a></code> | <code>string</code> | The OrganizationConfigRuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `organizationConfigRuleId`<sup>Required</sup> <a name="organizationConfigRuleId" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnProps.property.organizationConfigRuleId"></a>

```typescript
public readonly organizationConfigRuleId: string;
```

- *Type:* string

The OrganizationConfigRuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConfigOrganizationConformancePackArnComponents <a name="ConfigOrganizationConformancePackArnComponents" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnComponents"></a>

Parsed components of a OrganizationConformancePack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnComponents.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configOrganizationConformancePackArnComponents: config.ConfigOrganizationConformancePackArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConformancePackArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConformancePackArnComponents.property.organizationConformancePackId">organizationConformancePackId</a></code> | <code>string</code> | The OrganizationConformancePackId component. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConformancePackArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConformancePackArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `organizationConformancePackId`<sup>Required</sup> <a name="organizationConformancePackId" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnComponents.property.organizationConformancePackId"></a>

```typescript
public readonly organizationConformancePackId: string;
```

- *Type:* string

The OrganizationConformancePackId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConfigOrganizationConformancePackArnProps <a name="ConfigOrganizationConformancePackArnProps" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnProps"></a>

Properties for building a OrganizationConformancePack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnProps.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configOrganizationConformancePackArnProps: config.ConfigOrganizationConformancePackArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConformancePackArnProps.property.organizationConformancePackId">organizationConformancePackId</a></code> | <code>string</code> | The OrganizationConformancePackId component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConformancePackArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConformancePackArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigOrganizationConformancePackArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `organizationConformancePackId`<sup>Required</sup> <a name="organizationConformancePackId" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnProps.property.organizationConformancePackId"></a>

```typescript
public readonly organizationConformancePackId: string;
```

- *Type:* string

The OrganizationConformancePackId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.config.ConfigOrganizationConformancePackArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConfigRemediationConfigurationArnComponents <a name="ConfigRemediationConfigurationArnComponents" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnComponents"></a>

Parsed components of a RemediationConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnComponents.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configRemediationConfigurationArnComponents: config.ConfigRemediationConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigRemediationConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigRemediationConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigRemediationConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.config.ConfigRemediationConfigurationArnComponents.property.remediationConfigurationId">remediationConfigurationId</a></code> | <code>string</code> | The RemediationConfigurationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `remediationConfigurationId`<sup>Required</sup> <a name="remediationConfigurationId" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnComponents.property.remediationConfigurationId"></a>

```typescript
public readonly remediationConfigurationId: string;
```

- *Type:* string

The RemediationConfigurationId component.

---

### ConfigRemediationConfigurationArnProps <a name="ConfigRemediationConfigurationArnProps" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnProps"></a>

Properties for building a RemediationConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnProps.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configRemediationConfigurationArnProps: config.ConfigRemediationConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigRemediationConfigurationArnProps.property.remediationConfigurationId">remediationConfigurationId</a></code> | <code>string</code> | The RemediationConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigRemediationConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigRemediationConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigRemediationConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `remediationConfigurationId`<sup>Required</sup> <a name="remediationConfigurationId" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnProps.property.remediationConfigurationId"></a>

```typescript
public readonly remediationConfigurationId: string;
```

- *Type:* string

The RemediationConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.config.ConfigRemediationConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConfigStoredQueryArnComponents <a name="ConfigStoredQueryArnComponents" id="@cdk_utils/iam.config.ConfigStoredQueryArnComponents"></a>

Parsed components of a StoredQuery ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigStoredQueryArnComponents.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configStoredQueryArnComponents: config.ConfigStoredQueryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigStoredQueryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigStoredQueryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigStoredQueryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.config.ConfigStoredQueryArnComponents.property.storedQueryId">storedQueryId</a></code> | <code>string</code> | The StoredQueryId component. |
| <code><a href="#@cdk_utils/iam.config.ConfigStoredQueryArnComponents.property.storedQueryName">storedQueryName</a></code> | <code>string</code> | The StoredQueryName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.config.ConfigStoredQueryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigStoredQueryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.config.ConfigStoredQueryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `storedQueryId`<sup>Required</sup> <a name="storedQueryId" id="@cdk_utils/iam.config.ConfigStoredQueryArnComponents.property.storedQueryId"></a>

```typescript
public readonly storedQueryId: string;
```

- *Type:* string

The StoredQueryId component.

---

##### `storedQueryName`<sup>Required</sup> <a name="storedQueryName" id="@cdk_utils/iam.config.ConfigStoredQueryArnComponents.property.storedQueryName"></a>

```typescript
public readonly storedQueryName: string;
```

- *Type:* string

The StoredQueryName component.

---

### ConfigStoredQueryArnProps <a name="ConfigStoredQueryArnProps" id="@cdk_utils/iam.config.ConfigStoredQueryArnProps"></a>

Properties for building a StoredQuery ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.config.ConfigStoredQueryArnProps.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

const configStoredQueryArnProps: config.ConfigStoredQueryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigStoredQueryArnProps.property.storedQueryId">storedQueryId</a></code> | <code>string</code> | The StoredQueryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigStoredQueryArnProps.property.storedQueryName">storedQueryName</a></code> | <code>string</code> | The StoredQueryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.config.ConfigStoredQueryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.config.ConfigStoredQueryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.config.ConfigStoredQueryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `storedQueryId`<sup>Required</sup> <a name="storedQueryId" id="@cdk_utils/iam.config.ConfigStoredQueryArnProps.property.storedQueryId"></a>

```typescript
public readonly storedQueryId: string;
```

- *Type:* string

The StoredQueryId component of the ARN.

---

##### `storedQueryName`<sup>Required</sup> <a name="storedQueryName" id="@cdk_utils/iam.config.ConfigStoredQueryArnProps.property.storedQueryName"></a>

```typescript
public readonly storedQueryName: string;
```

- *Type:* string

The StoredQueryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.config.ConfigStoredQueryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.config.ConfigStoredQueryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.config.ConfigStoredQueryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigActions <a name="ConfigActions" id="@cdk_utils/iam.config.ConfigActions"></a>

IAM action constants for the config service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.config.ConfigActions.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

new config.ConfigActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetAggregateComplianceDetailsByConfigRule">actionGetAggregateComplianceDetailsByConfigRule</a></code> | <code>string</code> | [Read] config:GetAggregateComplianceDetailsByConfigRule. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetAggregateConfigRuleComplianceSummary">actionGetAggregateConfigRuleComplianceSummary</a></code> | <code>string</code> | [Read] config:GetAggregateConfigRuleComplianceSummary. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetAggregateConformancePackComplianceSummary">actionGetAggregateConformancePackComplianceSummary</a></code> | <code>string</code> | [Read] config:GetAggregateConformancePackComplianceSummary. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetAggregateDiscoveredResourceCounts">actionGetAggregateDiscoveredResourceCounts</a></code> | <code>string</code> | [Read] config:GetAggregateDiscoveredResourceCounts. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetAggregateResourceConfig">actionGetAggregateResourceConfig</a></code> | <code>string</code> | [Read] config:GetAggregateResourceConfig. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetComplianceDetailsByConfigRule">actionGetComplianceDetailsByConfigRule</a></code> | <code>string</code> | [Read] config:GetComplianceDetailsByConfigRule. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetComplianceDetailsByResource">actionGetComplianceDetailsByResource</a></code> | <code>string</code> | [Read] config:GetComplianceDetailsByResource. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetComplianceSummaryByConfigRule">actionGetComplianceSummaryByConfigRule</a></code> | <code>string</code> | [Read] config:GetComplianceSummaryByConfigRule. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetComplianceSummaryByResourceType">actionGetComplianceSummaryByResourceType</a></code> | <code>string</code> | [Read] config:GetComplianceSummaryByResourceType. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetConformancePackComplianceDetails">actionGetConformancePackComplianceDetails</a></code> | <code>string</code> | [Read] config:GetConformancePackComplianceDetails. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetConformancePackComplianceSummary">actionGetConformancePackComplianceSummary</a></code> | <code>string</code> | [Read] config:GetConformancePackComplianceSummary. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetConnector">actionGetConnector</a></code> | <code>string</code> | [Read] config:GetConnector. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetCustomRulePolicy">actionGetCustomRulePolicy</a></code> | <code>string</code> | [Read] config:GetCustomRulePolicy. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetDiscoveredResourceCounts">actionGetDiscoveredResourceCounts</a></code> | <code>string</code> | [Read] config:GetDiscoveredResourceCounts. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetOrganizationConfigRuleDetailedStatus">actionGetOrganizationConfigRuleDetailedStatus</a></code> | <code>string</code> | [Read] config:GetOrganizationConfigRuleDetailedStatus. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetOrganizationConformancePackDetailedStatus">actionGetOrganizationConformancePackDetailedStatus</a></code> | <code>string</code> | [Read] config:GetOrganizationConformancePackDetailedStatus. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetOrganizationCustomRulePolicy">actionGetOrganizationCustomRulePolicy</a></code> | <code>string</code> | [Read] config:GetOrganizationCustomRulePolicy. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetResourceConfigHistory">actionGetResourceConfigHistory</a></code> | <code>string</code> | [Read] config:GetResourceConfigHistory. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetResourceEvaluationSummary">actionGetResourceEvaluationSummary</a></code> | <code>string</code> | [Read] config:GetResourceEvaluationSummary. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.actionGetStoredQuery">actionGetStoredQuery</a></code> | <code>string</code> | [Read] config:GetStoredQuery. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.AssociateResourceTypes">AssociateResourceTypes</a></code> | <code>string</code> | [Write] config:AssociateResourceTypes. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.BatchGetAggregateResourceConfig">BatchGetAggregateResourceConfig</a></code> | <code>string</code> | [Read] config:BatchGetAggregateResourceConfig. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.BatchGetResourceConfig">BatchGetResourceConfig</a></code> | <code>string</code> | [Read] config:BatchGetResourceConfig. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteAggregationAuthorization">DeleteAggregationAuthorization</a></code> | <code>string</code> | [Write] config:DeleteAggregationAuthorization. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteConfigRule">DeleteConfigRule</a></code> | <code>string</code> | [Write] config:DeleteConfigRule. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteConfigurationAggregator">DeleteConfigurationAggregator</a></code> | <code>string</code> | [Write] config:DeleteConfigurationAggregator. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteConfigurationRecorder">DeleteConfigurationRecorder</a></code> | <code>string</code> | [Write] config:DeleteConfigurationRecorder. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteConformancePack">DeleteConformancePack</a></code> | <code>string</code> | [Write] config:DeleteConformancePack. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteConnector">DeleteConnector</a></code> | <code>string</code> | [Write] config:DeleteConnector. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteDeliveryChannel">DeleteDeliveryChannel</a></code> | <code>string</code> | [Write] config:DeleteDeliveryChannel. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteEvaluationResults">DeleteEvaluationResults</a></code> | <code>string</code> | [Write] config:DeleteEvaluationResults. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteOrganizationConfigRule">DeleteOrganizationConfigRule</a></code> | <code>string</code> | [Write] config:DeleteOrganizationConfigRule. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteOrganizationConformancePack">DeleteOrganizationConformancePack</a></code> | <code>string</code> | [Write] config:DeleteOrganizationConformancePack. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeletePendingAggregationRequest">DeletePendingAggregationRequest</a></code> | <code>string</code> | [Write] config:DeletePendingAggregationRequest. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteRemediationConfiguration">DeleteRemediationConfiguration</a></code> | <code>string</code> | [Write] config:DeleteRemediationConfiguration. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteRemediationExceptions">DeleteRemediationExceptions</a></code> | <code>string</code> | [Write] config:DeleteRemediationExceptions. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteResourceConfig">DeleteResourceConfig</a></code> | <code>string</code> | [Write] config:DeleteResourceConfig. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteRetentionConfiguration">DeleteRetentionConfiguration</a></code> | <code>string</code> | [Write] config:DeleteRetentionConfiguration. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteServiceLinkedConfigurationRecorder">DeleteServiceLinkedConfigurationRecorder</a></code> | <code>string</code> | [Write] config:DeleteServiceLinkedConfigurationRecorder. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeleteStoredQuery">DeleteStoredQuery</a></code> | <code>string</code> | [Write] config:DeleteStoredQuery. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DeliverConfigSnapshot">DeliverConfigSnapshot</a></code> | <code>string</code> | [Read] config:DeliverConfigSnapshot. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeAggregateComplianceByConfigRules">DescribeAggregateComplianceByConfigRules</a></code> | <code>string</code> | [Read] config:DescribeAggregateComplianceByConfigRules. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeAggregateComplianceByConformancePacks">DescribeAggregateComplianceByConformancePacks</a></code> | <code>string</code> | [Read] config:DescribeAggregateComplianceByConformancePacks. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeAggregationAuthorizations">DescribeAggregationAuthorizations</a></code> | <code>string</code> | [List] config:DescribeAggregationAuthorizations. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeComplianceByConfigRule">DescribeComplianceByConfigRule</a></code> | <code>string</code> | [Read] config:DescribeComplianceByConfigRule. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeComplianceByResource">DescribeComplianceByResource</a></code> | <code>string</code> | [Read] config:DescribeComplianceByResource. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeConfigRuleEvaluationStatus">DescribeConfigRuleEvaluationStatus</a></code> | <code>string</code> | [Read] config:DescribeConfigRuleEvaluationStatus. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeConfigRules">DescribeConfigRules</a></code> | <code>string</code> | [List] config:DescribeConfigRules. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeConfigurationAggregators">DescribeConfigurationAggregators</a></code> | <code>string</code> | [List] config:DescribeConfigurationAggregators. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeConfigurationAggregatorSourcesStatus">DescribeConfigurationAggregatorSourcesStatus</a></code> | <code>string</code> | [Read] config:DescribeConfigurationAggregatorSourcesStatus. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeConfigurationRecorders">DescribeConfigurationRecorders</a></code> | <code>string</code> | [Read] config:DescribeConfigurationRecorders. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeConfigurationRecorderStatus">DescribeConfigurationRecorderStatus</a></code> | <code>string</code> | [Read] config:DescribeConfigurationRecorderStatus. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeConformancePackCompliance">DescribeConformancePackCompliance</a></code> | <code>string</code> | [Read] config:DescribeConformancePackCompliance. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeConformancePacks">DescribeConformancePacks</a></code> | <code>string</code> | [List] config:DescribeConformancePacks. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeConformancePackStatus">DescribeConformancePackStatus</a></code> | <code>string</code> | [Read] config:DescribeConformancePackStatus. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeDeliveryChannels">DescribeDeliveryChannels</a></code> | <code>string</code> | [List] config:DescribeDeliveryChannels. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeDeliveryChannelStatus">DescribeDeliveryChannelStatus</a></code> | <code>string</code> | [Read] config:DescribeDeliveryChannelStatus. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeOrganizationConfigRules">DescribeOrganizationConfigRules</a></code> | <code>string</code> | [List] config:DescribeOrganizationConfigRules. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeOrganizationConfigRuleStatuses">DescribeOrganizationConfigRuleStatuses</a></code> | <code>string</code> | [Read] config:DescribeOrganizationConfigRuleStatuses. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeOrganizationConformancePacks">DescribeOrganizationConformancePacks</a></code> | <code>string</code> | [List] config:DescribeOrganizationConformancePacks. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeOrganizationConformancePackStatuses">DescribeOrganizationConformancePackStatuses</a></code> | <code>string</code> | [Read] config:DescribeOrganizationConformancePackStatuses. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribePendingAggregationRequests">DescribePendingAggregationRequests</a></code> | <code>string</code> | [List] config:DescribePendingAggregationRequests. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeRemediationConfigurations">DescribeRemediationConfigurations</a></code> | <code>string</code> | [List] config:DescribeRemediationConfigurations. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeRemediationExceptions">DescribeRemediationExceptions</a></code> | <code>string</code> | [List] config:DescribeRemediationExceptions. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeRemediationExecutionStatus">DescribeRemediationExecutionStatus</a></code> | <code>string</code> | [Read] config:DescribeRemediationExecutionStatus. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DescribeRetentionConfigurations">DescribeRetentionConfigurations</a></code> | <code>string</code> | [List] config:DescribeRetentionConfigurations. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.DisassociateResourceTypes">DisassociateResourceTypes</a></code> | <code>string</code> | [Write] config:DisassociateResourceTypes. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.ListAggregateDiscoveredResources">ListAggregateDiscoveredResources</a></code> | <code>string</code> | [List] config:ListAggregateDiscoveredResources. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.ListConfigurationRecorders">ListConfigurationRecorders</a></code> | <code>string</code> | [List] config:ListConfigurationRecorders. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.ListConformancePackComplianceScores">ListConformancePackComplianceScores</a></code> | <code>string</code> | [List] config:ListConformancePackComplianceScores. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.ListConnectors">ListConnectors</a></code> | <code>string</code> | [List] config:ListConnectors. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.ListDiscoveredResources">ListDiscoveredResources</a></code> | <code>string</code> | [List] config:ListDiscoveredResources. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.ListResourceEvaluations">ListResourceEvaluations</a></code> | <code>string</code> | [List] config:ListResourceEvaluations. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.ListStoredQueries">ListStoredQueries</a></code> | <code>string</code> | [List] config:ListStoredQueries. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] config:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutAggregationAuthorization">PutAggregationAuthorization</a></code> | <code>string</code> | [Write] config:PutAggregationAuthorization. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutConfigRule">PutConfigRule</a></code> | <code>string</code> | [Write] config:PutConfigRule. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutConfigurationAggregator">PutConfigurationAggregator</a></code> | <code>string</code> | [Write] config:PutConfigurationAggregator. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutConfigurationRecorder">PutConfigurationRecorder</a></code> | <code>string</code> | [Write] config:PutConfigurationRecorder. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutConformancePack">PutConformancePack</a></code> | <code>string</code> | [Write] config:PutConformancePack. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutConnector">PutConnector</a></code> | <code>string</code> | [Write] config:PutConnector. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutDeliveryChannel">PutDeliveryChannel</a></code> | <code>string</code> | [Write] config:PutDeliveryChannel. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutEvaluations">PutEvaluations</a></code> | <code>string</code> | [Write] config:PutEvaluations. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutExternalEvaluation">PutExternalEvaluation</a></code> | <code>string</code> | [Write] config:PutExternalEvaluation. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutOrganizationConfigRule">PutOrganizationConfigRule</a></code> | <code>string</code> | [Write] config:PutOrganizationConfigRule. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutOrganizationConformancePack">PutOrganizationConformancePack</a></code> | <code>string</code> | [Write] config:PutOrganizationConformancePack. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutRemediationConfigurations">PutRemediationConfigurations</a></code> | <code>string</code> | [Write] config:PutRemediationConfigurations. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutRemediationExceptions">PutRemediationExceptions</a></code> | <code>string</code> | [Write] config:PutRemediationExceptions. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutResourceConfig">PutResourceConfig</a></code> | <code>string</code> | [Write] config:PutResourceConfig. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutRetentionConfiguration">PutRetentionConfiguration</a></code> | <code>string</code> | [Write] config:PutRetentionConfiguration. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutServiceLinkedConfigurationRecorder">PutServiceLinkedConfigurationRecorder</a></code> | <code>string</code> | [Write] config:PutServiceLinkedConfigurationRecorder. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutStoredQuery">PutStoredQuery</a></code> | <code>string</code> | [Write] config:PutStoredQuery. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.PutThirdPartyServiceLinkedConfigurationRecorder">PutThirdPartyServiceLinkedConfigurationRecorder</a></code> | <code>string</code> | [Write] config:PutThirdPartyServiceLinkedConfigurationRecorder. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.SelectAggregateResourceConfig">SelectAggregateResourceConfig</a></code> | <code>string</code> | [Read] config:SelectAggregateResourceConfig. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.SelectResourceConfig">SelectResourceConfig</a></code> | <code>string</code> | [Read] config:SelectResourceConfig. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.StartConfigRulesEvaluation">StartConfigRulesEvaluation</a></code> | <code>string</code> | [Write] config:StartConfigRulesEvaluation. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.StartConfigurationRecorder">StartConfigurationRecorder</a></code> | <code>string</code> | [Write] config:StartConfigurationRecorder. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.StartRemediationExecution">StartRemediationExecution</a></code> | <code>string</code> | [Write] config:StartRemediationExecution. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.StartResourceEvaluation">StartResourceEvaluation</a></code> | <code>string</code> | [Write] config:StartResourceEvaluation. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.StopConfigurationRecorder">StopConfigurationRecorder</a></code> | <code>string</code> | [Write] config:StopConfigurationRecorder. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] config:TagResource. |
| <code><a href="#@cdk_utils/iam.config.ConfigActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] config:UntagResource. |

---

##### `actionGetAggregateComplianceDetailsByConfigRule`<sup>Required</sup> <a name="actionGetAggregateComplianceDetailsByConfigRule" id="@cdk_utils/iam.config.ConfigActions.property.actionGetAggregateComplianceDetailsByConfigRule"></a>

```typescript
public readonly actionGetAggregateComplianceDetailsByConfigRule: string;
```

- *Type:* string

[Read] config:GetAggregateComplianceDetailsByConfigRule.

---

##### `actionGetAggregateConfigRuleComplianceSummary`<sup>Required</sup> <a name="actionGetAggregateConfigRuleComplianceSummary" id="@cdk_utils/iam.config.ConfigActions.property.actionGetAggregateConfigRuleComplianceSummary"></a>

```typescript
public readonly actionGetAggregateConfigRuleComplianceSummary: string;
```

- *Type:* string

[Read] config:GetAggregateConfigRuleComplianceSummary.

---

##### `actionGetAggregateConformancePackComplianceSummary`<sup>Required</sup> <a name="actionGetAggregateConformancePackComplianceSummary" id="@cdk_utils/iam.config.ConfigActions.property.actionGetAggregateConformancePackComplianceSummary"></a>

```typescript
public readonly actionGetAggregateConformancePackComplianceSummary: string;
```

- *Type:* string

[Read] config:GetAggregateConformancePackComplianceSummary.

---

##### `actionGetAggregateDiscoveredResourceCounts`<sup>Required</sup> <a name="actionGetAggregateDiscoveredResourceCounts" id="@cdk_utils/iam.config.ConfigActions.property.actionGetAggregateDiscoveredResourceCounts"></a>

```typescript
public readonly actionGetAggregateDiscoveredResourceCounts: string;
```

- *Type:* string

[Read] config:GetAggregateDiscoveredResourceCounts.

---

##### `actionGetAggregateResourceConfig`<sup>Required</sup> <a name="actionGetAggregateResourceConfig" id="@cdk_utils/iam.config.ConfigActions.property.actionGetAggregateResourceConfig"></a>

```typescript
public readonly actionGetAggregateResourceConfig: string;
```

- *Type:* string

[Read] config:GetAggregateResourceConfig.

---

##### `actionGetComplianceDetailsByConfigRule`<sup>Required</sup> <a name="actionGetComplianceDetailsByConfigRule" id="@cdk_utils/iam.config.ConfigActions.property.actionGetComplianceDetailsByConfigRule"></a>

```typescript
public readonly actionGetComplianceDetailsByConfigRule: string;
```

- *Type:* string

[Read] config:GetComplianceDetailsByConfigRule.

---

##### `actionGetComplianceDetailsByResource`<sup>Required</sup> <a name="actionGetComplianceDetailsByResource" id="@cdk_utils/iam.config.ConfigActions.property.actionGetComplianceDetailsByResource"></a>

```typescript
public readonly actionGetComplianceDetailsByResource: string;
```

- *Type:* string

[Read] config:GetComplianceDetailsByResource.

---

##### `actionGetComplianceSummaryByConfigRule`<sup>Required</sup> <a name="actionGetComplianceSummaryByConfigRule" id="@cdk_utils/iam.config.ConfigActions.property.actionGetComplianceSummaryByConfigRule"></a>

```typescript
public readonly actionGetComplianceSummaryByConfigRule: string;
```

- *Type:* string

[Read] config:GetComplianceSummaryByConfigRule.

---

##### `actionGetComplianceSummaryByResourceType`<sup>Required</sup> <a name="actionGetComplianceSummaryByResourceType" id="@cdk_utils/iam.config.ConfigActions.property.actionGetComplianceSummaryByResourceType"></a>

```typescript
public readonly actionGetComplianceSummaryByResourceType: string;
```

- *Type:* string

[Read] config:GetComplianceSummaryByResourceType.

---

##### `actionGetConformancePackComplianceDetails`<sup>Required</sup> <a name="actionGetConformancePackComplianceDetails" id="@cdk_utils/iam.config.ConfigActions.property.actionGetConformancePackComplianceDetails"></a>

```typescript
public readonly actionGetConformancePackComplianceDetails: string;
```

- *Type:* string

[Read] config:GetConformancePackComplianceDetails.

---

##### `actionGetConformancePackComplianceSummary`<sup>Required</sup> <a name="actionGetConformancePackComplianceSummary" id="@cdk_utils/iam.config.ConfigActions.property.actionGetConformancePackComplianceSummary"></a>

```typescript
public readonly actionGetConformancePackComplianceSummary: string;
```

- *Type:* string

[Read] config:GetConformancePackComplianceSummary.

---

##### `actionGetConnector`<sup>Required</sup> <a name="actionGetConnector" id="@cdk_utils/iam.config.ConfigActions.property.actionGetConnector"></a>

```typescript
public readonly actionGetConnector: string;
```

- *Type:* string

[Read] config:GetConnector.

---

##### `actionGetCustomRulePolicy`<sup>Required</sup> <a name="actionGetCustomRulePolicy" id="@cdk_utils/iam.config.ConfigActions.property.actionGetCustomRulePolicy"></a>

```typescript
public readonly actionGetCustomRulePolicy: string;
```

- *Type:* string

[Read] config:GetCustomRulePolicy.

---

##### `actionGetDiscoveredResourceCounts`<sup>Required</sup> <a name="actionGetDiscoveredResourceCounts" id="@cdk_utils/iam.config.ConfigActions.property.actionGetDiscoveredResourceCounts"></a>

```typescript
public readonly actionGetDiscoveredResourceCounts: string;
```

- *Type:* string

[Read] config:GetDiscoveredResourceCounts.

---

##### `actionGetOrganizationConfigRuleDetailedStatus`<sup>Required</sup> <a name="actionGetOrganizationConfigRuleDetailedStatus" id="@cdk_utils/iam.config.ConfigActions.property.actionGetOrganizationConfigRuleDetailedStatus"></a>

```typescript
public readonly actionGetOrganizationConfigRuleDetailedStatus: string;
```

- *Type:* string

[Read] config:GetOrganizationConfigRuleDetailedStatus.

---

##### `actionGetOrganizationConformancePackDetailedStatus`<sup>Required</sup> <a name="actionGetOrganizationConformancePackDetailedStatus" id="@cdk_utils/iam.config.ConfigActions.property.actionGetOrganizationConformancePackDetailedStatus"></a>

```typescript
public readonly actionGetOrganizationConformancePackDetailedStatus: string;
```

- *Type:* string

[Read] config:GetOrganizationConformancePackDetailedStatus.

---

##### `actionGetOrganizationCustomRulePolicy`<sup>Required</sup> <a name="actionGetOrganizationCustomRulePolicy" id="@cdk_utils/iam.config.ConfigActions.property.actionGetOrganizationCustomRulePolicy"></a>

```typescript
public readonly actionGetOrganizationCustomRulePolicy: string;
```

- *Type:* string

[Read] config:GetOrganizationCustomRulePolicy.

---

##### `actionGetResourceConfigHistory`<sup>Required</sup> <a name="actionGetResourceConfigHistory" id="@cdk_utils/iam.config.ConfigActions.property.actionGetResourceConfigHistory"></a>

```typescript
public readonly actionGetResourceConfigHistory: string;
```

- *Type:* string

[Read] config:GetResourceConfigHistory.

---

##### `actionGetResourceEvaluationSummary`<sup>Required</sup> <a name="actionGetResourceEvaluationSummary" id="@cdk_utils/iam.config.ConfigActions.property.actionGetResourceEvaluationSummary"></a>

```typescript
public readonly actionGetResourceEvaluationSummary: string;
```

- *Type:* string

[Read] config:GetResourceEvaluationSummary.

---

##### `actionGetStoredQuery`<sup>Required</sup> <a name="actionGetStoredQuery" id="@cdk_utils/iam.config.ConfigActions.property.actionGetStoredQuery"></a>

```typescript
public readonly actionGetStoredQuery: string;
```

- *Type:* string

[Read] config:GetStoredQuery.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.config.ConfigActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.config.ConfigActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.config.ConfigActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.config.ConfigActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.config.ConfigActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateResourceTypes`<sup>Required</sup> <a name="AssociateResourceTypes" id="@cdk_utils/iam.config.ConfigActions.property.AssociateResourceTypes"></a>

```typescript
public readonly AssociateResourceTypes: string;
```

- *Type:* string

[Write] config:AssociateResourceTypes.

---

##### `BatchGetAggregateResourceConfig`<sup>Required</sup> <a name="BatchGetAggregateResourceConfig" id="@cdk_utils/iam.config.ConfigActions.property.BatchGetAggregateResourceConfig"></a>

```typescript
public readonly BatchGetAggregateResourceConfig: string;
```

- *Type:* string

[Read] config:BatchGetAggregateResourceConfig.

---

##### `BatchGetResourceConfig`<sup>Required</sup> <a name="BatchGetResourceConfig" id="@cdk_utils/iam.config.ConfigActions.property.BatchGetResourceConfig"></a>

```typescript
public readonly BatchGetResourceConfig: string;
```

- *Type:* string

[Read] config:BatchGetResourceConfig.

---

##### `DeleteAggregationAuthorization`<sup>Required</sup> <a name="DeleteAggregationAuthorization" id="@cdk_utils/iam.config.ConfigActions.property.DeleteAggregationAuthorization"></a>

```typescript
public readonly DeleteAggregationAuthorization: string;
```

- *Type:* string

[Write] config:DeleteAggregationAuthorization.

---

##### `DeleteConfigRule`<sup>Required</sup> <a name="DeleteConfigRule" id="@cdk_utils/iam.config.ConfigActions.property.DeleteConfigRule"></a>

```typescript
public readonly DeleteConfigRule: string;
```

- *Type:* string

[Write] config:DeleteConfigRule.

---

##### `DeleteConfigurationAggregator`<sup>Required</sup> <a name="DeleteConfigurationAggregator" id="@cdk_utils/iam.config.ConfigActions.property.DeleteConfigurationAggregator"></a>

```typescript
public readonly DeleteConfigurationAggregator: string;
```

- *Type:* string

[Write] config:DeleteConfigurationAggregator.

---

##### `DeleteConfigurationRecorder`<sup>Required</sup> <a name="DeleteConfigurationRecorder" id="@cdk_utils/iam.config.ConfigActions.property.DeleteConfigurationRecorder"></a>

```typescript
public readonly DeleteConfigurationRecorder: string;
```

- *Type:* string

[Write] config:DeleteConfigurationRecorder.

---

##### `DeleteConformancePack`<sup>Required</sup> <a name="DeleteConformancePack" id="@cdk_utils/iam.config.ConfigActions.property.DeleteConformancePack"></a>

```typescript
public readonly DeleteConformancePack: string;
```

- *Type:* string

[Write] config:DeleteConformancePack.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.config.ConfigActions.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string;
```

- *Type:* string

[Write] config:DeleteConnector.

---

##### `DeleteDeliveryChannel`<sup>Required</sup> <a name="DeleteDeliveryChannel" id="@cdk_utils/iam.config.ConfigActions.property.DeleteDeliveryChannel"></a>

```typescript
public readonly DeleteDeliveryChannel: string;
```

- *Type:* string

[Write] config:DeleteDeliveryChannel.

---

##### `DeleteEvaluationResults`<sup>Required</sup> <a name="DeleteEvaluationResults" id="@cdk_utils/iam.config.ConfigActions.property.DeleteEvaluationResults"></a>

```typescript
public readonly DeleteEvaluationResults: string;
```

- *Type:* string

[Write] config:DeleteEvaluationResults.

---

##### `DeleteOrganizationConfigRule`<sup>Required</sup> <a name="DeleteOrganizationConfigRule" id="@cdk_utils/iam.config.ConfigActions.property.DeleteOrganizationConfigRule"></a>

```typescript
public readonly DeleteOrganizationConfigRule: string;
```

- *Type:* string

[Write] config:DeleteOrganizationConfigRule.

---

##### `DeleteOrganizationConformancePack`<sup>Required</sup> <a name="DeleteOrganizationConformancePack" id="@cdk_utils/iam.config.ConfigActions.property.DeleteOrganizationConformancePack"></a>

```typescript
public readonly DeleteOrganizationConformancePack: string;
```

- *Type:* string

[Write] config:DeleteOrganizationConformancePack.

---

##### `DeletePendingAggregationRequest`<sup>Required</sup> <a name="DeletePendingAggregationRequest" id="@cdk_utils/iam.config.ConfigActions.property.DeletePendingAggregationRequest"></a>

```typescript
public readonly DeletePendingAggregationRequest: string;
```

- *Type:* string

[Write] config:DeletePendingAggregationRequest.

---

##### `DeleteRemediationConfiguration`<sup>Required</sup> <a name="DeleteRemediationConfiguration" id="@cdk_utils/iam.config.ConfigActions.property.DeleteRemediationConfiguration"></a>

```typescript
public readonly DeleteRemediationConfiguration: string;
```

- *Type:* string

[Write] config:DeleteRemediationConfiguration.

---

##### `DeleteRemediationExceptions`<sup>Required</sup> <a name="DeleteRemediationExceptions" id="@cdk_utils/iam.config.ConfigActions.property.DeleteRemediationExceptions"></a>

```typescript
public readonly DeleteRemediationExceptions: string;
```

- *Type:* string

[Write] config:DeleteRemediationExceptions.

---

##### `DeleteResourceConfig`<sup>Required</sup> <a name="DeleteResourceConfig" id="@cdk_utils/iam.config.ConfigActions.property.DeleteResourceConfig"></a>

```typescript
public readonly DeleteResourceConfig: string;
```

- *Type:* string

[Write] config:DeleteResourceConfig.

---

##### `DeleteRetentionConfiguration`<sup>Required</sup> <a name="DeleteRetentionConfiguration" id="@cdk_utils/iam.config.ConfigActions.property.DeleteRetentionConfiguration"></a>

```typescript
public readonly DeleteRetentionConfiguration: string;
```

- *Type:* string

[Write] config:DeleteRetentionConfiguration.

---

##### `DeleteServiceLinkedConfigurationRecorder`<sup>Required</sup> <a name="DeleteServiceLinkedConfigurationRecorder" id="@cdk_utils/iam.config.ConfigActions.property.DeleteServiceLinkedConfigurationRecorder"></a>

```typescript
public readonly DeleteServiceLinkedConfigurationRecorder: string;
```

- *Type:* string

[Write] config:DeleteServiceLinkedConfigurationRecorder.

---

##### `DeleteStoredQuery`<sup>Required</sup> <a name="DeleteStoredQuery" id="@cdk_utils/iam.config.ConfigActions.property.DeleteStoredQuery"></a>

```typescript
public readonly DeleteStoredQuery: string;
```

- *Type:* string

[Write] config:DeleteStoredQuery.

---

##### `DeliverConfigSnapshot`<sup>Required</sup> <a name="DeliverConfigSnapshot" id="@cdk_utils/iam.config.ConfigActions.property.DeliverConfigSnapshot"></a>

```typescript
public readonly DeliverConfigSnapshot: string;
```

- *Type:* string

[Read] config:DeliverConfigSnapshot.

---

##### `DescribeAggregateComplianceByConfigRules`<sup>Required</sup> <a name="DescribeAggregateComplianceByConfigRules" id="@cdk_utils/iam.config.ConfigActions.property.DescribeAggregateComplianceByConfigRules"></a>

```typescript
public readonly DescribeAggregateComplianceByConfigRules: string;
```

- *Type:* string

[Read] config:DescribeAggregateComplianceByConfigRules.

---

##### `DescribeAggregateComplianceByConformancePacks`<sup>Required</sup> <a name="DescribeAggregateComplianceByConformancePacks" id="@cdk_utils/iam.config.ConfigActions.property.DescribeAggregateComplianceByConformancePacks"></a>

```typescript
public readonly DescribeAggregateComplianceByConformancePacks: string;
```

- *Type:* string

[Read] config:DescribeAggregateComplianceByConformancePacks.

---

##### `DescribeAggregationAuthorizations`<sup>Required</sup> <a name="DescribeAggregationAuthorizations" id="@cdk_utils/iam.config.ConfigActions.property.DescribeAggregationAuthorizations"></a>

```typescript
public readonly DescribeAggregationAuthorizations: string;
```

- *Type:* string

[List] config:DescribeAggregationAuthorizations.

---

##### `DescribeComplianceByConfigRule`<sup>Required</sup> <a name="DescribeComplianceByConfigRule" id="@cdk_utils/iam.config.ConfigActions.property.DescribeComplianceByConfigRule"></a>

```typescript
public readonly DescribeComplianceByConfigRule: string;
```

- *Type:* string

[Read] config:DescribeComplianceByConfigRule.

---

##### `DescribeComplianceByResource`<sup>Required</sup> <a name="DescribeComplianceByResource" id="@cdk_utils/iam.config.ConfigActions.property.DescribeComplianceByResource"></a>

```typescript
public readonly DescribeComplianceByResource: string;
```

- *Type:* string

[Read] config:DescribeComplianceByResource.

---

##### `DescribeConfigRuleEvaluationStatus`<sup>Required</sup> <a name="DescribeConfigRuleEvaluationStatus" id="@cdk_utils/iam.config.ConfigActions.property.DescribeConfigRuleEvaluationStatus"></a>

```typescript
public readonly DescribeConfigRuleEvaluationStatus: string;
```

- *Type:* string

[Read] config:DescribeConfigRuleEvaluationStatus.

---

##### `DescribeConfigRules`<sup>Required</sup> <a name="DescribeConfigRules" id="@cdk_utils/iam.config.ConfigActions.property.DescribeConfigRules"></a>

```typescript
public readonly DescribeConfigRules: string;
```

- *Type:* string

[List] config:DescribeConfigRules.

---

##### `DescribeConfigurationAggregators`<sup>Required</sup> <a name="DescribeConfigurationAggregators" id="@cdk_utils/iam.config.ConfigActions.property.DescribeConfigurationAggregators"></a>

```typescript
public readonly DescribeConfigurationAggregators: string;
```

- *Type:* string

[List] config:DescribeConfigurationAggregators.

---

##### `DescribeConfigurationAggregatorSourcesStatus`<sup>Required</sup> <a name="DescribeConfigurationAggregatorSourcesStatus" id="@cdk_utils/iam.config.ConfigActions.property.DescribeConfigurationAggregatorSourcesStatus"></a>

```typescript
public readonly DescribeConfigurationAggregatorSourcesStatus: string;
```

- *Type:* string

[Read] config:DescribeConfigurationAggregatorSourcesStatus.

---

##### `DescribeConfigurationRecorders`<sup>Required</sup> <a name="DescribeConfigurationRecorders" id="@cdk_utils/iam.config.ConfigActions.property.DescribeConfigurationRecorders"></a>

```typescript
public readonly DescribeConfigurationRecorders: string;
```

- *Type:* string

[Read] config:DescribeConfigurationRecorders.

---

##### `DescribeConfigurationRecorderStatus`<sup>Required</sup> <a name="DescribeConfigurationRecorderStatus" id="@cdk_utils/iam.config.ConfigActions.property.DescribeConfigurationRecorderStatus"></a>

```typescript
public readonly DescribeConfigurationRecorderStatus: string;
```

- *Type:* string

[Read] config:DescribeConfigurationRecorderStatus.

---

##### `DescribeConformancePackCompliance`<sup>Required</sup> <a name="DescribeConformancePackCompliance" id="@cdk_utils/iam.config.ConfigActions.property.DescribeConformancePackCompliance"></a>

```typescript
public readonly DescribeConformancePackCompliance: string;
```

- *Type:* string

[Read] config:DescribeConformancePackCompliance.

---

##### `DescribeConformancePacks`<sup>Required</sup> <a name="DescribeConformancePacks" id="@cdk_utils/iam.config.ConfigActions.property.DescribeConformancePacks"></a>

```typescript
public readonly DescribeConformancePacks: string;
```

- *Type:* string

[List] config:DescribeConformancePacks.

---

##### `DescribeConformancePackStatus`<sup>Required</sup> <a name="DescribeConformancePackStatus" id="@cdk_utils/iam.config.ConfigActions.property.DescribeConformancePackStatus"></a>

```typescript
public readonly DescribeConformancePackStatus: string;
```

- *Type:* string

[Read] config:DescribeConformancePackStatus.

---

##### `DescribeDeliveryChannels`<sup>Required</sup> <a name="DescribeDeliveryChannels" id="@cdk_utils/iam.config.ConfigActions.property.DescribeDeliveryChannels"></a>

```typescript
public readonly DescribeDeliveryChannels: string;
```

- *Type:* string

[List] config:DescribeDeliveryChannels.

---

##### `DescribeDeliveryChannelStatus`<sup>Required</sup> <a name="DescribeDeliveryChannelStatus" id="@cdk_utils/iam.config.ConfigActions.property.DescribeDeliveryChannelStatus"></a>

```typescript
public readonly DescribeDeliveryChannelStatus: string;
```

- *Type:* string

[Read] config:DescribeDeliveryChannelStatus.

---

##### `DescribeOrganizationConfigRules`<sup>Required</sup> <a name="DescribeOrganizationConfigRules" id="@cdk_utils/iam.config.ConfigActions.property.DescribeOrganizationConfigRules"></a>

```typescript
public readonly DescribeOrganizationConfigRules: string;
```

- *Type:* string

[List] config:DescribeOrganizationConfigRules.

---

##### `DescribeOrganizationConfigRuleStatuses`<sup>Required</sup> <a name="DescribeOrganizationConfigRuleStatuses" id="@cdk_utils/iam.config.ConfigActions.property.DescribeOrganizationConfigRuleStatuses"></a>

```typescript
public readonly DescribeOrganizationConfigRuleStatuses: string;
```

- *Type:* string

[Read] config:DescribeOrganizationConfigRuleStatuses.

---

##### `DescribeOrganizationConformancePacks`<sup>Required</sup> <a name="DescribeOrganizationConformancePacks" id="@cdk_utils/iam.config.ConfigActions.property.DescribeOrganizationConformancePacks"></a>

```typescript
public readonly DescribeOrganizationConformancePacks: string;
```

- *Type:* string

[List] config:DescribeOrganizationConformancePacks.

---

##### `DescribeOrganizationConformancePackStatuses`<sup>Required</sup> <a name="DescribeOrganizationConformancePackStatuses" id="@cdk_utils/iam.config.ConfigActions.property.DescribeOrganizationConformancePackStatuses"></a>

```typescript
public readonly DescribeOrganizationConformancePackStatuses: string;
```

- *Type:* string

[Read] config:DescribeOrganizationConformancePackStatuses.

---

##### `DescribePendingAggregationRequests`<sup>Required</sup> <a name="DescribePendingAggregationRequests" id="@cdk_utils/iam.config.ConfigActions.property.DescribePendingAggregationRequests"></a>

```typescript
public readonly DescribePendingAggregationRequests: string;
```

- *Type:* string

[List] config:DescribePendingAggregationRequests.

---

##### `DescribeRemediationConfigurations`<sup>Required</sup> <a name="DescribeRemediationConfigurations" id="@cdk_utils/iam.config.ConfigActions.property.DescribeRemediationConfigurations"></a>

```typescript
public readonly DescribeRemediationConfigurations: string;
```

- *Type:* string

[List] config:DescribeRemediationConfigurations.

---

##### `DescribeRemediationExceptions`<sup>Required</sup> <a name="DescribeRemediationExceptions" id="@cdk_utils/iam.config.ConfigActions.property.DescribeRemediationExceptions"></a>

```typescript
public readonly DescribeRemediationExceptions: string;
```

- *Type:* string

[List] config:DescribeRemediationExceptions.

---

##### `DescribeRemediationExecutionStatus`<sup>Required</sup> <a name="DescribeRemediationExecutionStatus" id="@cdk_utils/iam.config.ConfigActions.property.DescribeRemediationExecutionStatus"></a>

```typescript
public readonly DescribeRemediationExecutionStatus: string;
```

- *Type:* string

[Read] config:DescribeRemediationExecutionStatus.

---

##### `DescribeRetentionConfigurations`<sup>Required</sup> <a name="DescribeRetentionConfigurations" id="@cdk_utils/iam.config.ConfigActions.property.DescribeRetentionConfigurations"></a>

```typescript
public readonly DescribeRetentionConfigurations: string;
```

- *Type:* string

[List] config:DescribeRetentionConfigurations.

---

##### `DisassociateResourceTypes`<sup>Required</sup> <a name="DisassociateResourceTypes" id="@cdk_utils/iam.config.ConfigActions.property.DisassociateResourceTypes"></a>

```typescript
public readonly DisassociateResourceTypes: string;
```

- *Type:* string

[Write] config:DisassociateResourceTypes.

---

##### `ListAggregateDiscoveredResources`<sup>Required</sup> <a name="ListAggregateDiscoveredResources" id="@cdk_utils/iam.config.ConfigActions.property.ListAggregateDiscoveredResources"></a>

```typescript
public readonly ListAggregateDiscoveredResources: string;
```

- *Type:* string

[List] config:ListAggregateDiscoveredResources.

---

##### `ListConfigurationRecorders`<sup>Required</sup> <a name="ListConfigurationRecorders" id="@cdk_utils/iam.config.ConfigActions.property.ListConfigurationRecorders"></a>

```typescript
public readonly ListConfigurationRecorders: string;
```

- *Type:* string

[List] config:ListConfigurationRecorders.

---

##### `ListConformancePackComplianceScores`<sup>Required</sup> <a name="ListConformancePackComplianceScores" id="@cdk_utils/iam.config.ConfigActions.property.ListConformancePackComplianceScores"></a>

```typescript
public readonly ListConformancePackComplianceScores: string;
```

- *Type:* string

[List] config:ListConformancePackComplianceScores.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.config.ConfigActions.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string;
```

- *Type:* string

[List] config:ListConnectors.

---

##### `ListDiscoveredResources`<sup>Required</sup> <a name="ListDiscoveredResources" id="@cdk_utils/iam.config.ConfigActions.property.ListDiscoveredResources"></a>

```typescript
public readonly ListDiscoveredResources: string;
```

- *Type:* string

[List] config:ListDiscoveredResources.

---

##### `ListResourceEvaluations`<sup>Required</sup> <a name="ListResourceEvaluations" id="@cdk_utils/iam.config.ConfigActions.property.ListResourceEvaluations"></a>

```typescript
public readonly ListResourceEvaluations: string;
```

- *Type:* string

[List] config:ListResourceEvaluations.

---

##### `ListStoredQueries`<sup>Required</sup> <a name="ListStoredQueries" id="@cdk_utils/iam.config.ConfigActions.property.ListStoredQueries"></a>

```typescript
public readonly ListStoredQueries: string;
```

- *Type:* string

[List] config:ListStoredQueries.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.config.ConfigActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] config:ListTagsForResource.

---

##### `PutAggregationAuthorization`<sup>Required</sup> <a name="PutAggregationAuthorization" id="@cdk_utils/iam.config.ConfigActions.property.PutAggregationAuthorization"></a>

```typescript
public readonly PutAggregationAuthorization: string;
```

- *Type:* string

[Write] config:PutAggregationAuthorization.

---

##### `PutConfigRule`<sup>Required</sup> <a name="PutConfigRule" id="@cdk_utils/iam.config.ConfigActions.property.PutConfigRule"></a>

```typescript
public readonly PutConfigRule: string;
```

- *Type:* string

[Write] config:PutConfigRule.

---

##### `PutConfigurationAggregator`<sup>Required</sup> <a name="PutConfigurationAggregator" id="@cdk_utils/iam.config.ConfigActions.property.PutConfigurationAggregator"></a>

```typescript
public readonly PutConfigurationAggregator: string;
```

- *Type:* string

[Write] config:PutConfigurationAggregator.

---

##### `PutConfigurationRecorder`<sup>Required</sup> <a name="PutConfigurationRecorder" id="@cdk_utils/iam.config.ConfigActions.property.PutConfigurationRecorder"></a>

```typescript
public readonly PutConfigurationRecorder: string;
```

- *Type:* string

[Write] config:PutConfigurationRecorder.

---

##### `PutConformancePack`<sup>Required</sup> <a name="PutConformancePack" id="@cdk_utils/iam.config.ConfigActions.property.PutConformancePack"></a>

```typescript
public readonly PutConformancePack: string;
```

- *Type:* string

[Write] config:PutConformancePack.

---

##### `PutConnector`<sup>Required</sup> <a name="PutConnector" id="@cdk_utils/iam.config.ConfigActions.property.PutConnector"></a>

```typescript
public readonly PutConnector: string;
```

- *Type:* string

[Write] config:PutConnector.

---

##### `PutDeliveryChannel`<sup>Required</sup> <a name="PutDeliveryChannel" id="@cdk_utils/iam.config.ConfigActions.property.PutDeliveryChannel"></a>

```typescript
public readonly PutDeliveryChannel: string;
```

- *Type:* string

[Write] config:PutDeliveryChannel.

---

##### `PutEvaluations`<sup>Required</sup> <a name="PutEvaluations" id="@cdk_utils/iam.config.ConfigActions.property.PutEvaluations"></a>

```typescript
public readonly PutEvaluations: string;
```

- *Type:* string

[Write] config:PutEvaluations.

---

##### `PutExternalEvaluation`<sup>Required</sup> <a name="PutExternalEvaluation" id="@cdk_utils/iam.config.ConfigActions.property.PutExternalEvaluation"></a>

```typescript
public readonly PutExternalEvaluation: string;
```

- *Type:* string

[Write] config:PutExternalEvaluation.

---

##### `PutOrganizationConfigRule`<sup>Required</sup> <a name="PutOrganizationConfigRule" id="@cdk_utils/iam.config.ConfigActions.property.PutOrganizationConfigRule"></a>

```typescript
public readonly PutOrganizationConfigRule: string;
```

- *Type:* string

[Write] config:PutOrganizationConfigRule.

---

##### `PutOrganizationConformancePack`<sup>Required</sup> <a name="PutOrganizationConformancePack" id="@cdk_utils/iam.config.ConfigActions.property.PutOrganizationConformancePack"></a>

```typescript
public readonly PutOrganizationConformancePack: string;
```

- *Type:* string

[Write] config:PutOrganizationConformancePack.

---

##### `PutRemediationConfigurations`<sup>Required</sup> <a name="PutRemediationConfigurations" id="@cdk_utils/iam.config.ConfigActions.property.PutRemediationConfigurations"></a>

```typescript
public readonly PutRemediationConfigurations: string;
```

- *Type:* string

[Write] config:PutRemediationConfigurations.

---

##### `PutRemediationExceptions`<sup>Required</sup> <a name="PutRemediationExceptions" id="@cdk_utils/iam.config.ConfigActions.property.PutRemediationExceptions"></a>

```typescript
public readonly PutRemediationExceptions: string;
```

- *Type:* string

[Write] config:PutRemediationExceptions.

---

##### `PutResourceConfig`<sup>Required</sup> <a name="PutResourceConfig" id="@cdk_utils/iam.config.ConfigActions.property.PutResourceConfig"></a>

```typescript
public readonly PutResourceConfig: string;
```

- *Type:* string

[Write] config:PutResourceConfig.

---

##### `PutRetentionConfiguration`<sup>Required</sup> <a name="PutRetentionConfiguration" id="@cdk_utils/iam.config.ConfigActions.property.PutRetentionConfiguration"></a>

```typescript
public readonly PutRetentionConfiguration: string;
```

- *Type:* string

[Write] config:PutRetentionConfiguration.

---

##### `PutServiceLinkedConfigurationRecorder`<sup>Required</sup> <a name="PutServiceLinkedConfigurationRecorder" id="@cdk_utils/iam.config.ConfigActions.property.PutServiceLinkedConfigurationRecorder"></a>

```typescript
public readonly PutServiceLinkedConfigurationRecorder: string;
```

- *Type:* string

[Write] config:PutServiceLinkedConfigurationRecorder.

---

##### `PutStoredQuery`<sup>Required</sup> <a name="PutStoredQuery" id="@cdk_utils/iam.config.ConfigActions.property.PutStoredQuery"></a>

```typescript
public readonly PutStoredQuery: string;
```

- *Type:* string

[Write] config:PutStoredQuery.

---

##### `PutThirdPartyServiceLinkedConfigurationRecorder`<sup>Required</sup> <a name="PutThirdPartyServiceLinkedConfigurationRecorder" id="@cdk_utils/iam.config.ConfigActions.property.PutThirdPartyServiceLinkedConfigurationRecorder"></a>

```typescript
public readonly PutThirdPartyServiceLinkedConfigurationRecorder: string;
```

- *Type:* string

[Write] config:PutThirdPartyServiceLinkedConfigurationRecorder.

---

##### `SelectAggregateResourceConfig`<sup>Required</sup> <a name="SelectAggregateResourceConfig" id="@cdk_utils/iam.config.ConfigActions.property.SelectAggregateResourceConfig"></a>

```typescript
public readonly SelectAggregateResourceConfig: string;
```

- *Type:* string

[Read] config:SelectAggregateResourceConfig.

---

##### `SelectResourceConfig`<sup>Required</sup> <a name="SelectResourceConfig" id="@cdk_utils/iam.config.ConfigActions.property.SelectResourceConfig"></a>

```typescript
public readonly SelectResourceConfig: string;
```

- *Type:* string

[Read] config:SelectResourceConfig.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.config.ConfigActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartConfigRulesEvaluation`<sup>Required</sup> <a name="StartConfigRulesEvaluation" id="@cdk_utils/iam.config.ConfigActions.property.StartConfigRulesEvaluation"></a>

```typescript
public readonly StartConfigRulesEvaluation: string;
```

- *Type:* string

[Write] config:StartConfigRulesEvaluation.

---

##### `StartConfigurationRecorder`<sup>Required</sup> <a name="StartConfigurationRecorder" id="@cdk_utils/iam.config.ConfigActions.property.StartConfigurationRecorder"></a>

```typescript
public readonly StartConfigurationRecorder: string;
```

- *Type:* string

[Write] config:StartConfigurationRecorder.

---

##### `StartRemediationExecution`<sup>Required</sup> <a name="StartRemediationExecution" id="@cdk_utils/iam.config.ConfigActions.property.StartRemediationExecution"></a>

```typescript
public readonly StartRemediationExecution: string;
```

- *Type:* string

[Write] config:StartRemediationExecution.

---

##### `StartResourceEvaluation`<sup>Required</sup> <a name="StartResourceEvaluation" id="@cdk_utils/iam.config.ConfigActions.property.StartResourceEvaluation"></a>

```typescript
public readonly StartResourceEvaluation: string;
```

- *Type:* string

[Write] config:StartResourceEvaluation.

---

##### `StopConfigurationRecorder`<sup>Required</sup> <a name="StopConfigurationRecorder" id="@cdk_utils/iam.config.ConfigActions.property.StopConfigurationRecorder"></a>

```typescript
public readonly StopConfigurationRecorder: string;
```

- *Type:* string

[Write] config:StopConfigurationRecorder.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.config.ConfigActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] config:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.config.ConfigActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] config:UntagResource.

---

### ConfigConditions <a name="ConfigConditions" id="@cdk_utils/iam.config.ConfigConditions"></a>

Condition key constants and builders for config.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.config.ConfigConditions.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

new config.ConfigConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.configurationRecorderServicePrincipal">configurationRecorderServicePrincipal</a></code> | Generates a condition block for `config:ConfigurationRecorderServicePrincipal`. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `configurationRecorderServicePrincipal` <a name="configurationRecorderServicePrincipal" id="@cdk_utils/iam.config.ConfigConditions.configurationRecorderServicePrincipal"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigConditions.configurationRecorderServicePrincipal(value: string)
```

Generates a condition block for `config:ConfigurationRecorderServicePrincipal`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.config.ConfigConditions.configurationRecorderServicePrincipal.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.config.ConfigConditions.requestTag"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.config.ConfigConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.config.ConfigConditions.resourceTag"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.config.ConfigConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.config.ConfigConditions.tagKeys"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.config.ConfigConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.CONFIGURATION_RECORDER_SERVICE_PRINCIPAL">CONFIGURATION_RECORDER_SERVICE_PRINCIPAL</a></code> | <code>string</code> | Condition key: config:ConfigurationRecorderServicePrincipal (String). |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.DeleteServiceLinkedConfigurationRecorderConditionKeys">DeleteServiceLinkedConfigurationRecorderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteServiceLinkedConfigurationRecorder action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.DescribeConfigurationRecordersConditionKeys">DescribeConfigurationRecordersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeConfigurationRecorders action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.DescribeConfigurationRecorderStatusConditionKeys">DescribeConfigurationRecorderStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeConfigurationRecorderStatus action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.PutAggregationAuthorizationConditionKeys">PutAggregationAuthorizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAggregationAuthorization action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.PutConfigRuleConditionKeys">PutConfigRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutConfigRule action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.PutConfigurationAggregatorConditionKeys">PutConfigurationAggregatorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutConfigurationAggregator action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.PutConfigurationRecorderConditionKeys">PutConfigurationRecorderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutConfigurationRecorder action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.PutConnectorConditionKeys">PutConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutConnector action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.PutServiceLinkedConfigurationRecorderConditionKeys">PutServiceLinkedConfigurationRecorderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutServiceLinkedConfigurationRecorder action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.PutStoredQueryConditionKeys">PutStoredQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutStoredQuery action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.PutThirdPartyServiceLinkedConfigurationRecorderConditionKeys">PutThirdPartyServiceLinkedConfigurationRecorderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutThirdPartyServiceLinkedConfigurationRecorder action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.config.ConfigConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.config.ConfigConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.config.ConfigConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.config.ConfigConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CONFIGURATION_RECORDER_SERVICE_PRINCIPAL`<sup>Required</sup> <a name="CONFIGURATION_RECORDER_SERVICE_PRINCIPAL" id="@cdk_utils/iam.config.ConfigConditions.property.CONFIGURATION_RECORDER_SERVICE_PRINCIPAL"></a>

```typescript
public readonly CONFIGURATION_RECORDER_SERVICE_PRINCIPAL: string;
```

- *Type:* string

Condition key: config:ConfigurationRecorderServicePrincipal (String).

---

##### `DeleteServiceLinkedConfigurationRecorderConditionKeys`<sup>Required</sup> <a name="DeleteServiceLinkedConfigurationRecorderConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.DeleteServiceLinkedConfigurationRecorderConditionKeys"></a>

```typescript
public readonly DeleteServiceLinkedConfigurationRecorderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteServiceLinkedConfigurationRecorder action.

---

##### `DescribeConfigurationRecordersConditionKeys`<sup>Required</sup> <a name="DescribeConfigurationRecordersConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.DescribeConfigurationRecordersConditionKeys"></a>

```typescript
public readonly DescribeConfigurationRecordersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeConfigurationRecorders action.

---

##### `DescribeConfigurationRecorderStatusConditionKeys`<sup>Required</sup> <a name="DescribeConfigurationRecorderStatusConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.DescribeConfigurationRecorderStatusConditionKeys"></a>

```typescript
public readonly DescribeConfigurationRecorderStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeConfigurationRecorderStatus action.

---

##### `PutAggregationAuthorizationConditionKeys`<sup>Required</sup> <a name="PutAggregationAuthorizationConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.PutAggregationAuthorizationConditionKeys"></a>

```typescript
public readonly PutAggregationAuthorizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAggregationAuthorization action.

---

##### `PutConfigRuleConditionKeys`<sup>Required</sup> <a name="PutConfigRuleConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.PutConfigRuleConditionKeys"></a>

```typescript
public readonly PutConfigRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutConfigRule action.

---

##### `PutConfigurationAggregatorConditionKeys`<sup>Required</sup> <a name="PutConfigurationAggregatorConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.PutConfigurationAggregatorConditionKeys"></a>

```typescript
public readonly PutConfigurationAggregatorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutConfigurationAggregator action.

---

##### `PutConfigurationRecorderConditionKeys`<sup>Required</sup> <a name="PutConfigurationRecorderConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.PutConfigurationRecorderConditionKeys"></a>

```typescript
public readonly PutConfigurationRecorderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutConfigurationRecorder action.

---

##### `PutConnectorConditionKeys`<sup>Required</sup> <a name="PutConnectorConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.PutConnectorConditionKeys"></a>

```typescript
public readonly PutConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutConnector action.

---

##### `PutServiceLinkedConfigurationRecorderConditionKeys`<sup>Required</sup> <a name="PutServiceLinkedConfigurationRecorderConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.PutServiceLinkedConfigurationRecorderConditionKeys"></a>

```typescript
public readonly PutServiceLinkedConfigurationRecorderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutServiceLinkedConfigurationRecorder action.

---

##### `PutStoredQueryConditionKeys`<sup>Required</sup> <a name="PutStoredQueryConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.PutStoredQueryConditionKeys"></a>

```typescript
public readonly PutStoredQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutStoredQuery action.

---

##### `PutThirdPartyServiceLinkedConfigurationRecorderConditionKeys`<sup>Required</sup> <a name="PutThirdPartyServiceLinkedConfigurationRecorderConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.PutThirdPartyServiceLinkedConfigurationRecorderConditionKeys"></a>

```typescript
public readonly PutThirdPartyServiceLinkedConfigurationRecorderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutThirdPartyServiceLinkedConfigurationRecorder action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.config.ConfigConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ConfigOperations <a name="ConfigOperations" id="@cdk_utils/iam.config.ConfigOperations"></a>

API operation to required IAM actions mapping for config.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.config.ConfigOperations.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

new config.ConfigOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.AssociateResourceTypes">AssociateResourceTypes</a></code> | <code>string[]</code> | IAM actions required for the AssociateResourceTypes API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.BatchGetAggregateResourceConfig">BatchGetAggregateResourceConfig</a></code> | <code>string[]</code> | IAM actions required for the BatchGetAggregateResourceConfig API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.BatchGetResourceConfig">BatchGetResourceConfig</a></code> | <code>string[]</code> | IAM actions required for the BatchGetResourceConfig API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteAggregationAuthorization">DeleteAggregationAuthorization</a></code> | <code>string[]</code> | IAM actions required for the DeleteAggregationAuthorization API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteConfigRule">DeleteConfigRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigRule API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteConfigurationAggregator">DeleteConfigurationAggregator</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationAggregator API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteConfigurationRecorder">DeleteConfigurationRecorder</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationRecorder API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteConformancePack">DeleteConformancePack</a></code> | <code>string[]</code> | IAM actions required for the DeleteConformancePack API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteConnector">DeleteConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnector API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteDeliveryChannel">DeleteDeliveryChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeliveryChannel API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteEvaluationResults">DeleteEvaluationResults</a></code> | <code>string[]</code> | IAM actions required for the DeleteEvaluationResults API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteOrganizationConfigRule">DeleteOrganizationConfigRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteOrganizationConfigRule API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteOrganizationConformancePack">DeleteOrganizationConformancePack</a></code> | <code>string[]</code> | IAM actions required for the DeleteOrganizationConformancePack API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeletePendingAggregationRequest">DeletePendingAggregationRequest</a></code> | <code>string[]</code> | IAM actions required for the DeletePendingAggregationRequest API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteRemediationConfiguration">DeleteRemediationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteRemediationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteRemediationExceptions">DeleteRemediationExceptions</a></code> | <code>string[]</code> | IAM actions required for the DeleteRemediationExceptions API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteResourceConfig">DeleteResourceConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceConfig API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteRetentionConfiguration">DeleteRetentionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteRetentionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteServiceLinkedConfigurationRecorder">DeleteServiceLinkedConfigurationRecorder</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceLinkedConfigurationRecorder API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeleteStoredQuery">DeleteStoredQuery</a></code> | <code>string[]</code> | IAM actions required for the DeleteStoredQuery API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DeliverConfigSnapshot">DeliverConfigSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeliverConfigSnapshot API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeAggregateComplianceByConfigRules">DescribeAggregateComplianceByConfigRules</a></code> | <code>string[]</code> | IAM actions required for the DescribeAggregateComplianceByConfigRules API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeAggregateComplianceByConformancePacks">DescribeAggregateComplianceByConformancePacks</a></code> | <code>string[]</code> | IAM actions required for the DescribeAggregateComplianceByConformancePacks API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeAggregationAuthorizations">DescribeAggregationAuthorizations</a></code> | <code>string[]</code> | IAM actions required for the DescribeAggregationAuthorizations API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeComplianceByConfigRule">DescribeComplianceByConfigRule</a></code> | <code>string[]</code> | IAM actions required for the DescribeComplianceByConfigRule API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeComplianceByResource">DescribeComplianceByResource</a></code> | <code>string[]</code> | IAM actions required for the DescribeComplianceByResource API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigRuleEvaluationStatus">DescribeConfigRuleEvaluationStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigRuleEvaluationStatus API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigRules">DescribeConfigRules</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigRules API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigurationAggregators">DescribeConfigurationAggregators</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurationAggregators API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigurationAggregatorSourcesStatus">DescribeConfigurationAggregatorSourcesStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurationAggregatorSourcesStatus API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigurationRecorders">DescribeConfigurationRecorders</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurationRecorders API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigurationRecorderStatus">DescribeConfigurationRecorderStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurationRecorderStatus API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeConformancePackCompliance">DescribeConformancePackCompliance</a></code> | <code>string[]</code> | IAM actions required for the DescribeConformancePackCompliance API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeConformancePacks">DescribeConformancePacks</a></code> | <code>string[]</code> | IAM actions required for the DescribeConformancePacks API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeConformancePackStatus">DescribeConformancePackStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeConformancePackStatus API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeDeliveryChannels">DescribeDeliveryChannels</a></code> | <code>string[]</code> | IAM actions required for the DescribeDeliveryChannels API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeDeliveryChannelStatus">DescribeDeliveryChannelStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeDeliveryChannelStatus API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeOrganizationConfigRules">DescribeOrganizationConfigRules</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationConfigRules API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeOrganizationConfigRuleStatuses">DescribeOrganizationConfigRuleStatuses</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationConfigRuleStatuses API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeOrganizationConformancePacks">DescribeOrganizationConformancePacks</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationConformancePacks API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeOrganizationConformancePackStatuses">DescribeOrganizationConformancePackStatuses</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationConformancePackStatuses API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribePendingAggregationRequests">DescribePendingAggregationRequests</a></code> | <code>string[]</code> | IAM actions required for the DescribePendingAggregationRequests API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeRemediationConfigurations">DescribeRemediationConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeRemediationConfigurations API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeRemediationExceptions">DescribeRemediationExceptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeRemediationExceptions API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeRemediationExecutionStatus">DescribeRemediationExecutionStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeRemediationExecutionStatus API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DescribeRetentionConfigurations">DescribeRetentionConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeRetentionConfigurations API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.DisassociateResourceTypes">DisassociateResourceTypes</a></code> | <code>string[]</code> | IAM actions required for the DisassociateResourceTypes API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.ListAggregateDiscoveredResources">ListAggregateDiscoveredResources</a></code> | <code>string[]</code> | IAM actions required for the ListAggregateDiscoveredResources API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.ListConfigurationRecorders">ListConfigurationRecorders</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationRecorders API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.ListConformancePackComplianceScores">ListConformancePackComplianceScores</a></code> | <code>string[]</code> | IAM actions required for the ListConformancePackComplianceScores API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.ListConnectors">ListConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListConnectors API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.ListDiscoveredResources">ListDiscoveredResources</a></code> | <code>string[]</code> | IAM actions required for the ListDiscoveredResources API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.ListResourceEvaluations">ListResourceEvaluations</a></code> | <code>string[]</code> | IAM actions required for the ListResourceEvaluations API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.ListStoredQueries">ListStoredQueries</a></code> | <code>string[]</code> | IAM actions required for the ListStoredQueries API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetAggregateComplianceDetailsByConfigRule">opGetAggregateComplianceDetailsByConfigRule</a></code> | <code>string[]</code> | IAM actions required for the GetAggregateComplianceDetailsByConfigRule API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetAggregateConfigRuleComplianceSummary">opGetAggregateConfigRuleComplianceSummary</a></code> | <code>string[]</code> | IAM actions required for the GetAggregateConfigRuleComplianceSummary API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetAggregateConformancePackComplianceSummary">opGetAggregateConformancePackComplianceSummary</a></code> | <code>string[]</code> | IAM actions required for the GetAggregateConformancePackComplianceSummary API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetAggregateDiscoveredResourceCounts">opGetAggregateDiscoveredResourceCounts</a></code> | <code>string[]</code> | IAM actions required for the GetAggregateDiscoveredResourceCounts API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetAggregateResourceConfig">opGetAggregateResourceConfig</a></code> | <code>string[]</code> | IAM actions required for the GetAggregateResourceConfig API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetComplianceDetailsByConfigRule">opGetComplianceDetailsByConfigRule</a></code> | <code>string[]</code> | IAM actions required for the GetComplianceDetailsByConfigRule API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetComplianceDetailsByResource">opGetComplianceDetailsByResource</a></code> | <code>string[]</code> | IAM actions required for the GetComplianceDetailsByResource API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetComplianceSummaryByConfigRule">opGetComplianceSummaryByConfigRule</a></code> | <code>string[]</code> | IAM actions required for the GetComplianceSummaryByConfigRule API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetComplianceSummaryByResourceType">opGetComplianceSummaryByResourceType</a></code> | <code>string[]</code> | IAM actions required for the GetComplianceSummaryByResourceType API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetConformancePackComplianceDetails">opGetConformancePackComplianceDetails</a></code> | <code>string[]</code> | IAM actions required for the GetConformancePackComplianceDetails API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetConformancePackComplianceSummary">opGetConformancePackComplianceSummary</a></code> | <code>string[]</code> | IAM actions required for the GetConformancePackComplianceSummary API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetConnector">opGetConnector</a></code> | <code>string[]</code> | IAM actions required for the GetConnector API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetCustomRulePolicy">opGetCustomRulePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetCustomRulePolicy API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetDiscoveredResourceCounts">opGetDiscoveredResourceCounts</a></code> | <code>string[]</code> | IAM actions required for the GetDiscoveredResourceCounts API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetOrganizationConfigRuleDetailedStatus">opGetOrganizationConfigRuleDetailedStatus</a></code> | <code>string[]</code> | IAM actions required for the GetOrganizationConfigRuleDetailedStatus API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetOrganizationConformancePackDetailedStatus">opGetOrganizationConformancePackDetailedStatus</a></code> | <code>string[]</code> | IAM actions required for the GetOrganizationConformancePackDetailedStatus API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetOrganizationCustomRulePolicy">opGetOrganizationCustomRulePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetOrganizationCustomRulePolicy API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetResourceConfigHistory">opGetResourceConfigHistory</a></code> | <code>string[]</code> | IAM actions required for the GetResourceConfigHistory API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetResourceEvaluationSummary">opGetResourceEvaluationSummary</a></code> | <code>string[]</code> | IAM actions required for the GetResourceEvaluationSummary API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.opGetStoredQuery">opGetStoredQuery</a></code> | <code>string[]</code> | IAM actions required for the GetStoredQuery API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutAggregationAuthorization">PutAggregationAuthorization</a></code> | <code>string[]</code> | IAM actions required for the PutAggregationAuthorization API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutConfigRule">PutConfigRule</a></code> | <code>string[]</code> | IAM actions required for the PutConfigRule API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutConfigurationAggregator">PutConfigurationAggregator</a></code> | <code>string[]</code> | IAM actions required for the PutConfigurationAggregator API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutConfigurationRecorder">PutConfigurationRecorder</a></code> | <code>string[]</code> | IAM actions required for the PutConfigurationRecorder API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutConformancePack">PutConformancePack</a></code> | <code>string[]</code> | IAM actions required for the PutConformancePack API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutConnector">PutConnector</a></code> | <code>string[]</code> | IAM actions required for the PutConnector API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutDeliveryChannel">PutDeliveryChannel</a></code> | <code>string[]</code> | IAM actions required for the PutDeliveryChannel API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutEvaluations">PutEvaluations</a></code> | <code>string[]</code> | IAM actions required for the PutEvaluations API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutExternalEvaluation">PutExternalEvaluation</a></code> | <code>string[]</code> | IAM actions required for the PutExternalEvaluation API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutOrganizationConfigRule">PutOrganizationConfigRule</a></code> | <code>string[]</code> | IAM actions required for the PutOrganizationConfigRule API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutOrganizationConformancePack">PutOrganizationConformancePack</a></code> | <code>string[]</code> | IAM actions required for the PutOrganizationConformancePack API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutRemediationConfigurations">PutRemediationConfigurations</a></code> | <code>string[]</code> | IAM actions required for the PutRemediationConfigurations API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutRemediationExceptions">PutRemediationExceptions</a></code> | <code>string[]</code> | IAM actions required for the PutRemediationExceptions API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutResourceConfig">PutResourceConfig</a></code> | <code>string[]</code> | IAM actions required for the PutResourceConfig API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutRetentionConfiguration">PutRetentionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutRetentionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutServiceLinkedConfigurationRecorder">PutServiceLinkedConfigurationRecorder</a></code> | <code>string[]</code> | IAM actions required for the PutServiceLinkedConfigurationRecorder API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutStoredQuery">PutStoredQuery</a></code> | <code>string[]</code> | IAM actions required for the PutStoredQuery API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.PutThirdPartyServiceLinkedConfigurationRecorder">PutThirdPartyServiceLinkedConfigurationRecorder</a></code> | <code>string[]</code> | IAM actions required for the PutThirdPartyServiceLinkedConfigurationRecorder API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.SelectAggregateResourceConfig">SelectAggregateResourceConfig</a></code> | <code>string[]</code> | IAM actions required for the SelectAggregateResourceConfig API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.SelectResourceConfig">SelectResourceConfig</a></code> | <code>string[]</code> | IAM actions required for the SelectResourceConfig API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.StartConfigRulesEvaluation">StartConfigRulesEvaluation</a></code> | <code>string[]</code> | IAM actions required for the StartConfigRulesEvaluation API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.StartConfigurationRecorder">StartConfigurationRecorder</a></code> | <code>string[]</code> | IAM actions required for the StartConfigurationRecorder API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.StartRemediationExecution">StartRemediationExecution</a></code> | <code>string[]</code> | IAM actions required for the StartRemediationExecution API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.StartResourceEvaluation">StartResourceEvaluation</a></code> | <code>string[]</code> | IAM actions required for the StartResourceEvaluation API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.StopConfigurationRecorder">StopConfigurationRecorder</a></code> | <code>string[]</code> | IAM actions required for the StopConfigurationRecorder API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.config.ConfigOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `AssociateResourceTypes`<sup>Required</sup> <a name="AssociateResourceTypes" id="@cdk_utils/iam.config.ConfigOperations.property.AssociateResourceTypes"></a>

```typescript
public readonly AssociateResourceTypes: string[];
```

- *Type:* string[]

IAM actions required for the AssociateResourceTypes API call.

---

##### `BatchGetAggregateResourceConfig`<sup>Required</sup> <a name="BatchGetAggregateResourceConfig" id="@cdk_utils/iam.config.ConfigOperations.property.BatchGetAggregateResourceConfig"></a>

```typescript
public readonly BatchGetAggregateResourceConfig: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetAggregateResourceConfig API call.

---

##### `BatchGetResourceConfig`<sup>Required</sup> <a name="BatchGetResourceConfig" id="@cdk_utils/iam.config.ConfigOperations.property.BatchGetResourceConfig"></a>

```typescript
public readonly BatchGetResourceConfig: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetResourceConfig API call.

---

##### `DeleteAggregationAuthorization`<sup>Required</sup> <a name="DeleteAggregationAuthorization" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteAggregationAuthorization"></a>

```typescript
public readonly DeleteAggregationAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAggregationAuthorization API call.

---

##### `DeleteConfigRule`<sup>Required</sup> <a name="DeleteConfigRule" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteConfigRule"></a>

```typescript
public readonly DeleteConfigRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigRule API call.

---

##### `DeleteConfigurationAggregator`<sup>Required</sup> <a name="DeleteConfigurationAggregator" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteConfigurationAggregator"></a>

```typescript
public readonly DeleteConfigurationAggregator: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationAggregator API call.

---

##### `DeleteConfigurationRecorder`<sup>Required</sup> <a name="DeleteConfigurationRecorder" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteConfigurationRecorder"></a>

```typescript
public readonly DeleteConfigurationRecorder: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationRecorder API call.

---

##### `DeleteConformancePack`<sup>Required</sup> <a name="DeleteConformancePack" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteConformancePack"></a>

```typescript
public readonly DeleteConformancePack: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConformancePack API call.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnector API call.

---

##### `DeleteDeliveryChannel`<sup>Required</sup> <a name="DeleteDeliveryChannel" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteDeliveryChannel"></a>

```typescript
public readonly DeleteDeliveryChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeliveryChannel API call.

---

##### `DeleteEvaluationResults`<sup>Required</sup> <a name="DeleteEvaluationResults" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteEvaluationResults"></a>

```typescript
public readonly DeleteEvaluationResults: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEvaluationResults API call.

---

##### `DeleteOrganizationConfigRule`<sup>Required</sup> <a name="DeleteOrganizationConfigRule" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteOrganizationConfigRule"></a>

```typescript
public readonly DeleteOrganizationConfigRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOrganizationConfigRule API call.

---

##### `DeleteOrganizationConformancePack`<sup>Required</sup> <a name="DeleteOrganizationConformancePack" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteOrganizationConformancePack"></a>

```typescript
public readonly DeleteOrganizationConformancePack: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOrganizationConformancePack API call.

---

##### `DeletePendingAggregationRequest`<sup>Required</sup> <a name="DeletePendingAggregationRequest" id="@cdk_utils/iam.config.ConfigOperations.property.DeletePendingAggregationRequest"></a>

```typescript
public readonly DeletePendingAggregationRequest: string[];
```

- *Type:* string[]

IAM actions required for the DeletePendingAggregationRequest API call.

---

##### `DeleteRemediationConfiguration`<sup>Required</sup> <a name="DeleteRemediationConfiguration" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteRemediationConfiguration"></a>

```typescript
public readonly DeleteRemediationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRemediationConfiguration API call.

---

##### `DeleteRemediationExceptions`<sup>Required</sup> <a name="DeleteRemediationExceptions" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteRemediationExceptions"></a>

```typescript
public readonly DeleteRemediationExceptions: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRemediationExceptions API call.

---

##### `DeleteResourceConfig`<sup>Required</sup> <a name="DeleteResourceConfig" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteResourceConfig"></a>

```typescript
public readonly DeleteResourceConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceConfig API call.

---

##### `DeleteRetentionConfiguration`<sup>Required</sup> <a name="DeleteRetentionConfiguration" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteRetentionConfiguration"></a>

```typescript
public readonly DeleteRetentionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRetentionConfiguration API call.

---

##### `DeleteServiceLinkedConfigurationRecorder`<sup>Required</sup> <a name="DeleteServiceLinkedConfigurationRecorder" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteServiceLinkedConfigurationRecorder"></a>

```typescript
public readonly DeleteServiceLinkedConfigurationRecorder: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceLinkedConfigurationRecorder API call.

---

##### `DeleteStoredQuery`<sup>Required</sup> <a name="DeleteStoredQuery" id="@cdk_utils/iam.config.ConfigOperations.property.DeleteStoredQuery"></a>

```typescript
public readonly DeleteStoredQuery: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStoredQuery API call.

---

##### `DeliverConfigSnapshot`<sup>Required</sup> <a name="DeliverConfigSnapshot" id="@cdk_utils/iam.config.ConfigOperations.property.DeliverConfigSnapshot"></a>

```typescript
public readonly DeliverConfigSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeliverConfigSnapshot API call.

---

##### `DescribeAggregateComplianceByConfigRules`<sup>Required</sup> <a name="DescribeAggregateComplianceByConfigRules" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeAggregateComplianceByConfigRules"></a>

```typescript
public readonly DescribeAggregateComplianceByConfigRules: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAggregateComplianceByConfigRules API call.

---

##### `DescribeAggregateComplianceByConformancePacks`<sup>Required</sup> <a name="DescribeAggregateComplianceByConformancePacks" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeAggregateComplianceByConformancePacks"></a>

```typescript
public readonly DescribeAggregateComplianceByConformancePacks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAggregateComplianceByConformancePacks API call.

---

##### `DescribeAggregationAuthorizations`<sup>Required</sup> <a name="DescribeAggregationAuthorizations" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeAggregationAuthorizations"></a>

```typescript
public readonly DescribeAggregationAuthorizations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAggregationAuthorizations API call.

---

##### `DescribeComplianceByConfigRule`<sup>Required</sup> <a name="DescribeComplianceByConfigRule" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeComplianceByConfigRule"></a>

```typescript
public readonly DescribeComplianceByConfigRule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeComplianceByConfigRule API call.

---

##### `DescribeComplianceByResource`<sup>Required</sup> <a name="DescribeComplianceByResource" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeComplianceByResource"></a>

```typescript
public readonly DescribeComplianceByResource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeComplianceByResource API call.

---

##### `DescribeConfigRuleEvaluationStatus`<sup>Required</sup> <a name="DescribeConfigRuleEvaluationStatus" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigRuleEvaluationStatus"></a>

```typescript
public readonly DescribeConfigRuleEvaluationStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigRuleEvaluationStatus API call.

---

##### `DescribeConfigRules`<sup>Required</sup> <a name="DescribeConfigRules" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigRules"></a>

```typescript
public readonly DescribeConfigRules: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigRules API call.

---

##### `DescribeConfigurationAggregators`<sup>Required</sup> <a name="DescribeConfigurationAggregators" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigurationAggregators"></a>

```typescript
public readonly DescribeConfigurationAggregators: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurationAggregators API call.

---

##### `DescribeConfigurationAggregatorSourcesStatus`<sup>Required</sup> <a name="DescribeConfigurationAggregatorSourcesStatus" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigurationAggregatorSourcesStatus"></a>

```typescript
public readonly DescribeConfigurationAggregatorSourcesStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurationAggregatorSourcesStatus API call.

---

##### `DescribeConfigurationRecorders`<sup>Required</sup> <a name="DescribeConfigurationRecorders" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigurationRecorders"></a>

```typescript
public readonly DescribeConfigurationRecorders: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurationRecorders API call.

---

##### `DescribeConfigurationRecorderStatus`<sup>Required</sup> <a name="DescribeConfigurationRecorderStatus" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeConfigurationRecorderStatus"></a>

```typescript
public readonly DescribeConfigurationRecorderStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurationRecorderStatus API call.

---

##### `DescribeConformancePackCompliance`<sup>Required</sup> <a name="DescribeConformancePackCompliance" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeConformancePackCompliance"></a>

```typescript
public readonly DescribeConformancePackCompliance: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConformancePackCompliance API call.

---

##### `DescribeConformancePacks`<sup>Required</sup> <a name="DescribeConformancePacks" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeConformancePacks"></a>

```typescript
public readonly DescribeConformancePacks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConformancePacks API call.

---

##### `DescribeConformancePackStatus`<sup>Required</sup> <a name="DescribeConformancePackStatus" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeConformancePackStatus"></a>

```typescript
public readonly DescribeConformancePackStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConformancePackStatus API call.

---

##### `DescribeDeliveryChannels`<sup>Required</sup> <a name="DescribeDeliveryChannels" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeDeliveryChannels"></a>

```typescript
public readonly DescribeDeliveryChannels: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDeliveryChannels API call.

---

##### `DescribeDeliveryChannelStatus`<sup>Required</sup> <a name="DescribeDeliveryChannelStatus" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeDeliveryChannelStatus"></a>

```typescript
public readonly DescribeDeliveryChannelStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDeliveryChannelStatus API call.

---

##### `DescribeOrganizationConfigRules`<sup>Required</sup> <a name="DescribeOrganizationConfigRules" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeOrganizationConfigRules"></a>

```typescript
public readonly DescribeOrganizationConfigRules: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationConfigRules API call.

---

##### `DescribeOrganizationConfigRuleStatuses`<sup>Required</sup> <a name="DescribeOrganizationConfigRuleStatuses" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeOrganizationConfigRuleStatuses"></a>

```typescript
public readonly DescribeOrganizationConfigRuleStatuses: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationConfigRuleStatuses API call.

---

##### `DescribeOrganizationConformancePacks`<sup>Required</sup> <a name="DescribeOrganizationConformancePacks" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeOrganizationConformancePacks"></a>

```typescript
public readonly DescribeOrganizationConformancePacks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationConformancePacks API call.

---

##### `DescribeOrganizationConformancePackStatuses`<sup>Required</sup> <a name="DescribeOrganizationConformancePackStatuses" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeOrganizationConformancePackStatuses"></a>

```typescript
public readonly DescribeOrganizationConformancePackStatuses: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationConformancePackStatuses API call.

---

##### `DescribePendingAggregationRequests`<sup>Required</sup> <a name="DescribePendingAggregationRequests" id="@cdk_utils/iam.config.ConfigOperations.property.DescribePendingAggregationRequests"></a>

```typescript
public readonly DescribePendingAggregationRequests: string[];
```

- *Type:* string[]

IAM actions required for the DescribePendingAggregationRequests API call.

---

##### `DescribeRemediationConfigurations`<sup>Required</sup> <a name="DescribeRemediationConfigurations" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeRemediationConfigurations"></a>

```typescript
public readonly DescribeRemediationConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRemediationConfigurations API call.

---

##### `DescribeRemediationExceptions`<sup>Required</sup> <a name="DescribeRemediationExceptions" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeRemediationExceptions"></a>

```typescript
public readonly DescribeRemediationExceptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRemediationExceptions API call.

---

##### `DescribeRemediationExecutionStatus`<sup>Required</sup> <a name="DescribeRemediationExecutionStatus" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeRemediationExecutionStatus"></a>

```typescript
public readonly DescribeRemediationExecutionStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRemediationExecutionStatus API call.

---

##### `DescribeRetentionConfigurations`<sup>Required</sup> <a name="DescribeRetentionConfigurations" id="@cdk_utils/iam.config.ConfigOperations.property.DescribeRetentionConfigurations"></a>

```typescript
public readonly DescribeRetentionConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRetentionConfigurations API call.

---

##### `DisassociateResourceTypes`<sup>Required</sup> <a name="DisassociateResourceTypes" id="@cdk_utils/iam.config.ConfigOperations.property.DisassociateResourceTypes"></a>

```typescript
public readonly DisassociateResourceTypes: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateResourceTypes API call.

---

##### `ListAggregateDiscoveredResources`<sup>Required</sup> <a name="ListAggregateDiscoveredResources" id="@cdk_utils/iam.config.ConfigOperations.property.ListAggregateDiscoveredResources"></a>

```typescript
public readonly ListAggregateDiscoveredResources: string[];
```

- *Type:* string[]

IAM actions required for the ListAggregateDiscoveredResources API call.

---

##### `ListConfigurationRecorders`<sup>Required</sup> <a name="ListConfigurationRecorders" id="@cdk_utils/iam.config.ConfigOperations.property.ListConfigurationRecorders"></a>

```typescript
public readonly ListConfigurationRecorders: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationRecorders API call.

---

##### `ListConformancePackComplianceScores`<sup>Required</sup> <a name="ListConformancePackComplianceScores" id="@cdk_utils/iam.config.ConfigOperations.property.ListConformancePackComplianceScores"></a>

```typescript
public readonly ListConformancePackComplianceScores: string[];
```

- *Type:* string[]

IAM actions required for the ListConformancePackComplianceScores API call.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.config.ConfigOperations.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectors API call.

---

##### `ListDiscoveredResources`<sup>Required</sup> <a name="ListDiscoveredResources" id="@cdk_utils/iam.config.ConfigOperations.property.ListDiscoveredResources"></a>

```typescript
public readonly ListDiscoveredResources: string[];
```

- *Type:* string[]

IAM actions required for the ListDiscoveredResources API call.

---

##### `ListResourceEvaluations`<sup>Required</sup> <a name="ListResourceEvaluations" id="@cdk_utils/iam.config.ConfigOperations.property.ListResourceEvaluations"></a>

```typescript
public readonly ListResourceEvaluations: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceEvaluations API call.

---

##### `ListStoredQueries`<sup>Required</sup> <a name="ListStoredQueries" id="@cdk_utils/iam.config.ConfigOperations.property.ListStoredQueries"></a>

```typescript
public readonly ListStoredQueries: string[];
```

- *Type:* string[]

IAM actions required for the ListStoredQueries API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.config.ConfigOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAggregateComplianceDetailsByConfigRule`<sup>Required</sup> <a name="opGetAggregateComplianceDetailsByConfigRule" id="@cdk_utils/iam.config.ConfigOperations.property.opGetAggregateComplianceDetailsByConfigRule"></a>

```typescript
public readonly opGetAggregateComplianceDetailsByConfigRule: string[];
```

- *Type:* string[]

IAM actions required for the GetAggregateComplianceDetailsByConfigRule API call.

---

##### `opGetAggregateConfigRuleComplianceSummary`<sup>Required</sup> <a name="opGetAggregateConfigRuleComplianceSummary" id="@cdk_utils/iam.config.ConfigOperations.property.opGetAggregateConfigRuleComplianceSummary"></a>

```typescript
public readonly opGetAggregateConfigRuleComplianceSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetAggregateConfigRuleComplianceSummary API call.

---

##### `opGetAggregateConformancePackComplianceSummary`<sup>Required</sup> <a name="opGetAggregateConformancePackComplianceSummary" id="@cdk_utils/iam.config.ConfigOperations.property.opGetAggregateConformancePackComplianceSummary"></a>

```typescript
public readonly opGetAggregateConformancePackComplianceSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetAggregateConformancePackComplianceSummary API call.

---

##### `opGetAggregateDiscoveredResourceCounts`<sup>Required</sup> <a name="opGetAggregateDiscoveredResourceCounts" id="@cdk_utils/iam.config.ConfigOperations.property.opGetAggregateDiscoveredResourceCounts"></a>

```typescript
public readonly opGetAggregateDiscoveredResourceCounts: string[];
```

- *Type:* string[]

IAM actions required for the GetAggregateDiscoveredResourceCounts API call.

---

##### `opGetAggregateResourceConfig`<sup>Required</sup> <a name="opGetAggregateResourceConfig" id="@cdk_utils/iam.config.ConfigOperations.property.opGetAggregateResourceConfig"></a>

```typescript
public readonly opGetAggregateResourceConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetAggregateResourceConfig API call.

---

##### `opGetComplianceDetailsByConfigRule`<sup>Required</sup> <a name="opGetComplianceDetailsByConfigRule" id="@cdk_utils/iam.config.ConfigOperations.property.opGetComplianceDetailsByConfigRule"></a>

```typescript
public readonly opGetComplianceDetailsByConfigRule: string[];
```

- *Type:* string[]

IAM actions required for the GetComplianceDetailsByConfigRule API call.

---

##### `opGetComplianceDetailsByResource`<sup>Required</sup> <a name="opGetComplianceDetailsByResource" id="@cdk_utils/iam.config.ConfigOperations.property.opGetComplianceDetailsByResource"></a>

```typescript
public readonly opGetComplianceDetailsByResource: string[];
```

- *Type:* string[]

IAM actions required for the GetComplianceDetailsByResource API call.

---

##### `opGetComplianceSummaryByConfigRule`<sup>Required</sup> <a name="opGetComplianceSummaryByConfigRule" id="@cdk_utils/iam.config.ConfigOperations.property.opGetComplianceSummaryByConfigRule"></a>

```typescript
public readonly opGetComplianceSummaryByConfigRule: string[];
```

- *Type:* string[]

IAM actions required for the GetComplianceSummaryByConfigRule API call.

---

##### `opGetComplianceSummaryByResourceType`<sup>Required</sup> <a name="opGetComplianceSummaryByResourceType" id="@cdk_utils/iam.config.ConfigOperations.property.opGetComplianceSummaryByResourceType"></a>

```typescript
public readonly opGetComplianceSummaryByResourceType: string[];
```

- *Type:* string[]

IAM actions required for the GetComplianceSummaryByResourceType API call.

---

##### `opGetConformancePackComplianceDetails`<sup>Required</sup> <a name="opGetConformancePackComplianceDetails" id="@cdk_utils/iam.config.ConfigOperations.property.opGetConformancePackComplianceDetails"></a>

```typescript
public readonly opGetConformancePackComplianceDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetConformancePackComplianceDetails API call.

---

##### `opGetConformancePackComplianceSummary`<sup>Required</sup> <a name="opGetConformancePackComplianceSummary" id="@cdk_utils/iam.config.ConfigOperations.property.opGetConformancePackComplianceSummary"></a>

```typescript
public readonly opGetConformancePackComplianceSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetConformancePackComplianceSummary API call.

---

##### `opGetConnector`<sup>Required</sup> <a name="opGetConnector" id="@cdk_utils/iam.config.ConfigOperations.property.opGetConnector"></a>

```typescript
public readonly opGetConnector: string[];
```

- *Type:* string[]

IAM actions required for the GetConnector API call.

---

##### `opGetCustomRulePolicy`<sup>Required</sup> <a name="opGetCustomRulePolicy" id="@cdk_utils/iam.config.ConfigOperations.property.opGetCustomRulePolicy"></a>

```typescript
public readonly opGetCustomRulePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomRulePolicy API call.

---

##### `opGetDiscoveredResourceCounts`<sup>Required</sup> <a name="opGetDiscoveredResourceCounts" id="@cdk_utils/iam.config.ConfigOperations.property.opGetDiscoveredResourceCounts"></a>

```typescript
public readonly opGetDiscoveredResourceCounts: string[];
```

- *Type:* string[]

IAM actions required for the GetDiscoveredResourceCounts API call.

---

##### `opGetOrganizationConfigRuleDetailedStatus`<sup>Required</sup> <a name="opGetOrganizationConfigRuleDetailedStatus" id="@cdk_utils/iam.config.ConfigOperations.property.opGetOrganizationConfigRuleDetailedStatus"></a>

```typescript
public readonly opGetOrganizationConfigRuleDetailedStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetOrganizationConfigRuleDetailedStatus API call.

---

##### `opGetOrganizationConformancePackDetailedStatus`<sup>Required</sup> <a name="opGetOrganizationConformancePackDetailedStatus" id="@cdk_utils/iam.config.ConfigOperations.property.opGetOrganizationConformancePackDetailedStatus"></a>

```typescript
public readonly opGetOrganizationConformancePackDetailedStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetOrganizationConformancePackDetailedStatus API call.

---

##### `opGetOrganizationCustomRulePolicy`<sup>Required</sup> <a name="opGetOrganizationCustomRulePolicy" id="@cdk_utils/iam.config.ConfigOperations.property.opGetOrganizationCustomRulePolicy"></a>

```typescript
public readonly opGetOrganizationCustomRulePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetOrganizationCustomRulePolicy API call.

---

##### `opGetResourceConfigHistory`<sup>Required</sup> <a name="opGetResourceConfigHistory" id="@cdk_utils/iam.config.ConfigOperations.property.opGetResourceConfigHistory"></a>

```typescript
public readonly opGetResourceConfigHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceConfigHistory API call.

---

##### `opGetResourceEvaluationSummary`<sup>Required</sup> <a name="opGetResourceEvaluationSummary" id="@cdk_utils/iam.config.ConfigOperations.property.opGetResourceEvaluationSummary"></a>

```typescript
public readonly opGetResourceEvaluationSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceEvaluationSummary API call.

---

##### `opGetStoredQuery`<sup>Required</sup> <a name="opGetStoredQuery" id="@cdk_utils/iam.config.ConfigOperations.property.opGetStoredQuery"></a>

```typescript
public readonly opGetStoredQuery: string[];
```

- *Type:* string[]

IAM actions required for the GetStoredQuery API call.

---

##### `PutAggregationAuthorization`<sup>Required</sup> <a name="PutAggregationAuthorization" id="@cdk_utils/iam.config.ConfigOperations.property.PutAggregationAuthorization"></a>

```typescript
public readonly PutAggregationAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the PutAggregationAuthorization API call.

---

##### `PutConfigRule`<sup>Required</sup> <a name="PutConfigRule" id="@cdk_utils/iam.config.ConfigOperations.property.PutConfigRule"></a>

```typescript
public readonly PutConfigRule: string[];
```

- *Type:* string[]

IAM actions required for the PutConfigRule API call.

---

##### `PutConfigurationAggregator`<sup>Required</sup> <a name="PutConfigurationAggregator" id="@cdk_utils/iam.config.ConfigOperations.property.PutConfigurationAggregator"></a>

```typescript
public readonly PutConfigurationAggregator: string[];
```

- *Type:* string[]

IAM actions required for the PutConfigurationAggregator API call.

---

##### `PutConfigurationRecorder`<sup>Required</sup> <a name="PutConfigurationRecorder" id="@cdk_utils/iam.config.ConfigOperations.property.PutConfigurationRecorder"></a>

```typescript
public readonly PutConfigurationRecorder: string[];
```

- *Type:* string[]

IAM actions required for the PutConfigurationRecorder API call.

---

##### `PutConformancePack`<sup>Required</sup> <a name="PutConformancePack" id="@cdk_utils/iam.config.ConfigOperations.property.PutConformancePack"></a>

```typescript
public readonly PutConformancePack: string[];
```

- *Type:* string[]

IAM actions required for the PutConformancePack API call.

---

##### `PutConnector`<sup>Required</sup> <a name="PutConnector" id="@cdk_utils/iam.config.ConfigOperations.property.PutConnector"></a>

```typescript
public readonly PutConnector: string[];
```

- *Type:* string[]

IAM actions required for the PutConnector API call.

---

##### `PutDeliveryChannel`<sup>Required</sup> <a name="PutDeliveryChannel" id="@cdk_utils/iam.config.ConfigOperations.property.PutDeliveryChannel"></a>

```typescript
public readonly PutDeliveryChannel: string[];
```

- *Type:* string[]

IAM actions required for the PutDeliveryChannel API call.

---

##### `PutEvaluations`<sup>Required</sup> <a name="PutEvaluations" id="@cdk_utils/iam.config.ConfigOperations.property.PutEvaluations"></a>

```typescript
public readonly PutEvaluations: string[];
```

- *Type:* string[]

IAM actions required for the PutEvaluations API call.

---

##### `PutExternalEvaluation`<sup>Required</sup> <a name="PutExternalEvaluation" id="@cdk_utils/iam.config.ConfigOperations.property.PutExternalEvaluation"></a>

```typescript
public readonly PutExternalEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the PutExternalEvaluation API call.

---

##### `PutOrganizationConfigRule`<sup>Required</sup> <a name="PutOrganizationConfigRule" id="@cdk_utils/iam.config.ConfigOperations.property.PutOrganizationConfigRule"></a>

```typescript
public readonly PutOrganizationConfigRule: string[];
```

- *Type:* string[]

IAM actions required for the PutOrganizationConfigRule API call.

---

##### `PutOrganizationConformancePack`<sup>Required</sup> <a name="PutOrganizationConformancePack" id="@cdk_utils/iam.config.ConfigOperations.property.PutOrganizationConformancePack"></a>

```typescript
public readonly PutOrganizationConformancePack: string[];
```

- *Type:* string[]

IAM actions required for the PutOrganizationConformancePack API call.

---

##### `PutRemediationConfigurations`<sup>Required</sup> <a name="PutRemediationConfigurations" id="@cdk_utils/iam.config.ConfigOperations.property.PutRemediationConfigurations"></a>

```typescript
public readonly PutRemediationConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the PutRemediationConfigurations API call.

---

##### `PutRemediationExceptions`<sup>Required</sup> <a name="PutRemediationExceptions" id="@cdk_utils/iam.config.ConfigOperations.property.PutRemediationExceptions"></a>

```typescript
public readonly PutRemediationExceptions: string[];
```

- *Type:* string[]

IAM actions required for the PutRemediationExceptions API call.

---

##### `PutResourceConfig`<sup>Required</sup> <a name="PutResourceConfig" id="@cdk_utils/iam.config.ConfigOperations.property.PutResourceConfig"></a>

```typescript
public readonly PutResourceConfig: string[];
```

- *Type:* string[]

IAM actions required for the PutResourceConfig API call.

---

##### `PutRetentionConfiguration`<sup>Required</sup> <a name="PutRetentionConfiguration" id="@cdk_utils/iam.config.ConfigOperations.property.PutRetentionConfiguration"></a>

```typescript
public readonly PutRetentionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutRetentionConfiguration API call.

---

##### `PutServiceLinkedConfigurationRecorder`<sup>Required</sup> <a name="PutServiceLinkedConfigurationRecorder" id="@cdk_utils/iam.config.ConfigOperations.property.PutServiceLinkedConfigurationRecorder"></a>

```typescript
public readonly PutServiceLinkedConfigurationRecorder: string[];
```

- *Type:* string[]

IAM actions required for the PutServiceLinkedConfigurationRecorder API call.

---

##### `PutStoredQuery`<sup>Required</sup> <a name="PutStoredQuery" id="@cdk_utils/iam.config.ConfigOperations.property.PutStoredQuery"></a>

```typescript
public readonly PutStoredQuery: string[];
```

- *Type:* string[]

IAM actions required for the PutStoredQuery API call.

---

##### `PutThirdPartyServiceLinkedConfigurationRecorder`<sup>Required</sup> <a name="PutThirdPartyServiceLinkedConfigurationRecorder" id="@cdk_utils/iam.config.ConfigOperations.property.PutThirdPartyServiceLinkedConfigurationRecorder"></a>

```typescript
public readonly PutThirdPartyServiceLinkedConfigurationRecorder: string[];
```

- *Type:* string[]

IAM actions required for the PutThirdPartyServiceLinkedConfigurationRecorder API call.

---

##### `SelectAggregateResourceConfig`<sup>Required</sup> <a name="SelectAggregateResourceConfig" id="@cdk_utils/iam.config.ConfigOperations.property.SelectAggregateResourceConfig"></a>

```typescript
public readonly SelectAggregateResourceConfig: string[];
```

- *Type:* string[]

IAM actions required for the SelectAggregateResourceConfig API call.

---

##### `SelectResourceConfig`<sup>Required</sup> <a name="SelectResourceConfig" id="@cdk_utils/iam.config.ConfigOperations.property.SelectResourceConfig"></a>

```typescript
public readonly SelectResourceConfig: string[];
```

- *Type:* string[]

IAM actions required for the SelectResourceConfig API call.

---

##### `StartConfigRulesEvaluation`<sup>Required</sup> <a name="StartConfigRulesEvaluation" id="@cdk_utils/iam.config.ConfigOperations.property.StartConfigRulesEvaluation"></a>

```typescript
public readonly StartConfigRulesEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the StartConfigRulesEvaluation API call.

---

##### `StartConfigurationRecorder`<sup>Required</sup> <a name="StartConfigurationRecorder" id="@cdk_utils/iam.config.ConfigOperations.property.StartConfigurationRecorder"></a>

```typescript
public readonly StartConfigurationRecorder: string[];
```

- *Type:* string[]

IAM actions required for the StartConfigurationRecorder API call.

---

##### `StartRemediationExecution`<sup>Required</sup> <a name="StartRemediationExecution" id="@cdk_utils/iam.config.ConfigOperations.property.StartRemediationExecution"></a>

```typescript
public readonly StartRemediationExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartRemediationExecution API call.

---

##### `StartResourceEvaluation`<sup>Required</sup> <a name="StartResourceEvaluation" id="@cdk_utils/iam.config.ConfigOperations.property.StartResourceEvaluation"></a>

```typescript
public readonly StartResourceEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the StartResourceEvaluation API call.

---

##### `StopConfigurationRecorder`<sup>Required</sup> <a name="StopConfigurationRecorder" id="@cdk_utils/iam.config.ConfigOperations.property.StopConfigurationRecorder"></a>

```typescript
public readonly StopConfigurationRecorder: string[];
```

- *Type:* string[]

IAM actions required for the StopConfigurationRecorder API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.config.ConfigOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.config.ConfigOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### ConfigResources <a name="ConfigResources" id="@cdk_utils/iam.config.ConfigResources"></a>

ARN builders, validators, and parsers for config resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.config.ConfigResources.Initializer"></a>

```typescript
import { config } from '@cdk_utils/iam'

new config.ConfigResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.aggregationAuthorization">aggregationAuthorization</a></code> | Builds an ARN for the AggregationAuthorization resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.configRule">configRule</a></code> | Builds an ARN for the ConfigRule resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.configurationAggregator">configurationAggregator</a></code> | Builds an ARN for the ConfigurationAggregator resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.configurationRecorder">configurationRecorder</a></code> | Builds an ARN for the ConfigurationRecorder resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.conformancePack">conformancePack</a></code> | Builds an ARN for the ConformancePack resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.connector">connector</a></code> | Builds an ARN for the Connector resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.isValidAggregationAuthorizationArn">isValidAggregationAuthorizationArn</a></code> | Validates whether a string is a valid ARN for the AggregationAuthorization resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.isValidConfigRuleArn">isValidConfigRuleArn</a></code> | Validates whether a string is a valid ARN for the ConfigRule resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.isValidConfigurationAggregatorArn">isValidConfigurationAggregatorArn</a></code> | Validates whether a string is a valid ARN for the ConfigurationAggregator resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.isValidConfigurationRecorderArn">isValidConfigurationRecorderArn</a></code> | Validates whether a string is a valid ARN for the ConfigurationRecorder resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.isValidConformancePackArn">isValidConformancePackArn</a></code> | Validates whether a string is a valid ARN for the ConformancePack resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.isValidConnectorArn">isValidConnectorArn</a></code> | Validates whether a string is a valid ARN for the Connector resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.isValidOrganizationConfigRuleArn">isValidOrganizationConfigRuleArn</a></code> | Validates whether a string is a valid ARN for the OrganizationConfigRule resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.isValidOrganizationConformancePackArn">isValidOrganizationConformancePackArn</a></code> | Validates whether a string is a valid ARN for the OrganizationConformancePack resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.isValidRemediationConfigurationArn">isValidRemediationConfigurationArn</a></code> | Validates whether a string is a valid ARN for the RemediationConfiguration resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.isValidStoredQueryArn">isValidStoredQueryArn</a></code> | Validates whether a string is a valid ARN for the StoredQuery resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.organizationConfigRule">organizationConfigRule</a></code> | Builds an ARN for the OrganizationConfigRule resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.organizationConformancePack">organizationConformancePack</a></code> | Builds an ARN for the OrganizationConformancePack resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.parseAggregationAuthorizationArn">parseAggregationAuthorizationArn</a></code> | Parses a AggregationAuthorization ARN into its components. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.parseConfigRuleArn">parseConfigRuleArn</a></code> | Parses a ConfigRule ARN into its components. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.parseConfigurationAggregatorArn">parseConfigurationAggregatorArn</a></code> | Parses a ConfigurationAggregator ARN into its components. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.parseConfigurationRecorderArn">parseConfigurationRecorderArn</a></code> | Parses a ConfigurationRecorder ARN into its components. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.parseConformancePackArn">parseConformancePackArn</a></code> | Parses a ConformancePack ARN into its components. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.parseConnectorArn">parseConnectorArn</a></code> | Parses a Connector ARN into its components. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.parseOrganizationConfigRuleArn">parseOrganizationConfigRuleArn</a></code> | Parses a OrganizationConfigRule ARN into its components. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.parseOrganizationConformancePackArn">parseOrganizationConformancePackArn</a></code> | Parses a OrganizationConformancePack ARN into its components. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.parseRemediationConfigurationArn">parseRemediationConfigurationArn</a></code> | Parses a RemediationConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.parseStoredQueryArn">parseStoredQueryArn</a></code> | Parses a StoredQuery ARN into its components. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.remediationConfiguration">remediationConfiguration</a></code> | Builds an ARN for the RemediationConfiguration resource. |
| <code><a href="#@cdk_utils/iam.config.ConfigResources.storedQuery">storedQuery</a></code> | Builds an ARN for the StoredQuery resource. |

---

##### `aggregationAuthorization` <a name="aggregationAuthorization" id="@cdk_utils/iam.config.ConfigResources.aggregationAuthorization"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.aggregationAuthorization(props: ConfigAggregationAuthorizationArnProps)
```

Builds an ARN for the AggregationAuthorization resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.config.ConfigResources.aggregationAuthorization.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.config.ConfigAggregationAuthorizationArnProps">ConfigAggregationAuthorizationArnProps</a>

---

##### `configRule` <a name="configRule" id="@cdk_utils/iam.config.ConfigResources.configRule"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.configRule(props: ConfigConfigRuleArnProps)
```

Builds an ARN for the ConfigRule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.config.ConfigResources.configRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.config.ConfigConfigRuleArnProps">ConfigConfigRuleArnProps</a>

---

##### `configurationAggregator` <a name="configurationAggregator" id="@cdk_utils/iam.config.ConfigResources.configurationAggregator"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.configurationAggregator(props: ConfigConfigurationAggregatorArnProps)
```

Builds an ARN for the ConfigurationAggregator resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.config.ConfigResources.configurationAggregator.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.config.ConfigConfigurationAggregatorArnProps">ConfigConfigurationAggregatorArnProps</a>

---

##### `configurationRecorder` <a name="configurationRecorder" id="@cdk_utils/iam.config.ConfigResources.configurationRecorder"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.configurationRecorder(props: ConfigConfigurationRecorderArnProps)
```

Builds an ARN for the ConfigurationRecorder resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.config.ConfigResources.configurationRecorder.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.config.ConfigConfigurationRecorderArnProps">ConfigConfigurationRecorderArnProps</a>

---

##### `conformancePack` <a name="conformancePack" id="@cdk_utils/iam.config.ConfigResources.conformancePack"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.conformancePack(props: ConfigConformancePackArnProps)
```

Builds an ARN for the ConformancePack resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.config.ConfigResources.conformancePack.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.config.ConfigConformancePackArnProps">ConfigConformancePackArnProps</a>

---

##### `connector` <a name="connector" id="@cdk_utils/iam.config.ConfigResources.connector"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.connector(props: ConfigConnectorArnProps)
```

Builds an ARN for the Connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.config.ConfigResources.connector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.config.ConfigConnectorArnProps">ConfigConnectorArnProps</a>

---

##### `isValidAggregationAuthorizationArn` <a name="isValidAggregationAuthorizationArn" id="@cdk_utils/iam.config.ConfigResources.isValidAggregationAuthorizationArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.isValidAggregationAuthorizationArn(arn: string)
```

Validates whether a string is a valid ARN for the AggregationAuthorization resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.isValidAggregationAuthorizationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigRuleArn` <a name="isValidConfigRuleArn" id="@cdk_utils/iam.config.ConfigResources.isValidConfigRuleArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.isValidConfigRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the ConfigRule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.isValidConfigRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigurationAggregatorArn` <a name="isValidConfigurationAggregatorArn" id="@cdk_utils/iam.config.ConfigResources.isValidConfigurationAggregatorArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.isValidConfigurationAggregatorArn(arn: string)
```

Validates whether a string is a valid ARN for the ConfigurationAggregator resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.isValidConfigurationAggregatorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigurationRecorderArn` <a name="isValidConfigurationRecorderArn" id="@cdk_utils/iam.config.ConfigResources.isValidConfigurationRecorderArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.isValidConfigurationRecorderArn(arn: string)
```

Validates whether a string is a valid ARN for the ConfigurationRecorder resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.isValidConfigurationRecorderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConformancePackArn` <a name="isValidConformancePackArn" id="@cdk_utils/iam.config.ConfigResources.isValidConformancePackArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.isValidConformancePackArn(arn: string)
```

Validates whether a string is a valid ARN for the ConformancePack resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.isValidConformancePackArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorArn` <a name="isValidConnectorArn" id="@cdk_utils/iam.config.ConfigResources.isValidConnectorArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.isValidConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the Connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.isValidConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOrganizationConfigRuleArn` <a name="isValidOrganizationConfigRuleArn" id="@cdk_utils/iam.config.ConfigResources.isValidOrganizationConfigRuleArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.isValidOrganizationConfigRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the OrganizationConfigRule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.isValidOrganizationConfigRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOrganizationConformancePackArn` <a name="isValidOrganizationConformancePackArn" id="@cdk_utils/iam.config.ConfigResources.isValidOrganizationConformancePackArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.isValidOrganizationConformancePackArn(arn: string)
```

Validates whether a string is a valid ARN for the OrganizationConformancePack resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.isValidOrganizationConformancePackArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRemediationConfigurationArn` <a name="isValidRemediationConfigurationArn" id="@cdk_utils/iam.config.ConfigResources.isValidRemediationConfigurationArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.isValidRemediationConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the RemediationConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.isValidRemediationConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStoredQueryArn` <a name="isValidStoredQueryArn" id="@cdk_utils/iam.config.ConfigResources.isValidStoredQueryArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.isValidStoredQueryArn(arn: string)
```

Validates whether a string is a valid ARN for the StoredQuery resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.isValidStoredQueryArn.parameter.arn"></a>

- *Type:* string

---

##### `organizationConfigRule` <a name="organizationConfigRule" id="@cdk_utils/iam.config.ConfigResources.organizationConfigRule"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.organizationConfigRule(props: ConfigOrganizationConfigRuleArnProps)
```

Builds an ARN for the OrganizationConfigRule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.config.ConfigResources.organizationConfigRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.config.ConfigOrganizationConfigRuleArnProps">ConfigOrganizationConfigRuleArnProps</a>

---

##### `organizationConformancePack` <a name="organizationConformancePack" id="@cdk_utils/iam.config.ConfigResources.organizationConformancePack"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.organizationConformancePack(props: ConfigOrganizationConformancePackArnProps)
```

Builds an ARN for the OrganizationConformancePack resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.config.ConfigResources.organizationConformancePack.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.config.ConfigOrganizationConformancePackArnProps">ConfigOrganizationConformancePackArnProps</a>

---

##### `parseAggregationAuthorizationArn` <a name="parseAggregationAuthorizationArn" id="@cdk_utils/iam.config.ConfigResources.parseAggregationAuthorizationArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.parseAggregationAuthorizationArn(arn: string)
```

Parses a AggregationAuthorization ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.parseAggregationAuthorizationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigRuleArn` <a name="parseConfigRuleArn" id="@cdk_utils/iam.config.ConfigResources.parseConfigRuleArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.parseConfigRuleArn(arn: string)
```

Parses a ConfigRule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.parseConfigRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationAggregatorArn` <a name="parseConfigurationAggregatorArn" id="@cdk_utils/iam.config.ConfigResources.parseConfigurationAggregatorArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.parseConfigurationAggregatorArn(arn: string)
```

Parses a ConfigurationAggregator ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.parseConfigurationAggregatorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationRecorderArn` <a name="parseConfigurationRecorderArn" id="@cdk_utils/iam.config.ConfigResources.parseConfigurationRecorderArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.parseConfigurationRecorderArn(arn: string)
```

Parses a ConfigurationRecorder ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.parseConfigurationRecorderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConformancePackArn` <a name="parseConformancePackArn" id="@cdk_utils/iam.config.ConfigResources.parseConformancePackArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.parseConformancePackArn(arn: string)
```

Parses a ConformancePack ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.parseConformancePackArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorArn` <a name="parseConnectorArn" id="@cdk_utils/iam.config.ConfigResources.parseConnectorArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.parseConnectorArn(arn: string)
```

Parses a Connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.parseConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOrganizationConfigRuleArn` <a name="parseOrganizationConfigRuleArn" id="@cdk_utils/iam.config.ConfigResources.parseOrganizationConfigRuleArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.parseOrganizationConfigRuleArn(arn: string)
```

Parses a OrganizationConfigRule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.parseOrganizationConfigRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOrganizationConformancePackArn` <a name="parseOrganizationConformancePackArn" id="@cdk_utils/iam.config.ConfigResources.parseOrganizationConformancePackArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.parseOrganizationConformancePackArn(arn: string)
```

Parses a OrganizationConformancePack ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.parseOrganizationConformancePackArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRemediationConfigurationArn` <a name="parseRemediationConfigurationArn" id="@cdk_utils/iam.config.ConfigResources.parseRemediationConfigurationArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.parseRemediationConfigurationArn(arn: string)
```

Parses a RemediationConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.parseRemediationConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStoredQueryArn` <a name="parseStoredQueryArn" id="@cdk_utils/iam.config.ConfigResources.parseStoredQueryArn"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.parseStoredQueryArn(arn: string)
```

Parses a StoredQuery ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.config.ConfigResources.parseStoredQueryArn.parameter.arn"></a>

- *Type:* string

---

##### `remediationConfiguration` <a name="remediationConfiguration" id="@cdk_utils/iam.config.ConfigResources.remediationConfiguration"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.remediationConfiguration(props: ConfigRemediationConfigurationArnProps)
```

Builds an ARN for the RemediationConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.config.ConfigResources.remediationConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.config.ConfigRemediationConfigurationArnProps">ConfigRemediationConfigurationArnProps</a>

---

##### `storedQuery` <a name="storedQuery" id="@cdk_utils/iam.config.ConfigResources.storedQuery"></a>

```typescript
import { config } from '@cdk_utils/iam'

config.ConfigResources.storedQuery(props: ConfigStoredQueryArnProps)
```

Builds an ARN for the StoredQuery resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.config.ConfigResources.storedQuery.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.config.ConfigStoredQueryArnProps">ConfigStoredQueryArnProps</a>

---




