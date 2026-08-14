# `states` Submodule <a name="`states` Submodule" id="@cdk_utils/iam.states"></a>


## Structs <a name="Structs" id="Structs"></a>

### StatesActivityArnComponents <a name="StatesActivityArnComponents" id="@cdk_utils/iam.states.StatesActivityArnComponents"></a>

Parsed components of a activity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesActivityArnComponents.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesActivityArnComponents: states.StatesActivityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesActivityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesActivityArnComponents.property.activityName">activityName</a></code> | <code>string</code> | The ActivityName component. |
| <code><a href="#@cdk_utils/iam.states.StatesActivityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesActivityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.states.StatesActivityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `activityName`<sup>Required</sup> <a name="activityName" id="@cdk_utils/iam.states.StatesActivityArnComponents.property.activityName"></a>

```typescript
public readonly activityName: string;
```

- *Type:* string

The ActivityName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.states.StatesActivityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.states.StatesActivityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### StatesActivityArnProps <a name="StatesActivityArnProps" id="@cdk_utils/iam.states.StatesActivityArnProps"></a>

Properties for building a activity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesActivityArnProps.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesActivityArnProps: states.StatesActivityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesActivityArnProps.property.activityName">activityName</a></code> | <code>string</code> | The ActivityName component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesActivityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesActivityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesActivityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `activityName`<sup>Required</sup> <a name="activityName" id="@cdk_utils/iam.states.StatesActivityArnProps.property.activityName"></a>

```typescript
public readonly activityName: string;
```

- *Type:* string

The ActivityName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.states.StatesActivityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.states.StatesActivityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.states.StatesActivityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StatesExecutionArnComponents <a name="StatesExecutionArnComponents" id="@cdk_utils/iam.states.StatesExecutionArnComponents"></a>

Parsed components of a execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesExecutionArnComponents.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesExecutionArnComponents: states.StatesExecutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesExecutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesExecutionArnComponents.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component. |
| <code><a href="#@cdk_utils/iam.states.StatesExecutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesExecutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.states.StatesExecutionArnComponents.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.states.StatesExecutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.states.StatesExecutionArnComponents.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.states.StatesExecutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.states.StatesExecutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesExecutionArnComponents.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component.

---

### StatesExecutionArnProps <a name="StatesExecutionArnProps" id="@cdk_utils/iam.states.StatesExecutionArnProps"></a>

Properties for building a execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesExecutionArnProps.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesExecutionArnProps: states.StatesExecutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesExecutionArnProps.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesExecutionArnProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesExecutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesExecutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesExecutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.states.StatesExecutionArnProps.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component of the ARN.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesExecutionArnProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.states.StatesExecutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.states.StatesExecutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.states.StatesExecutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StatesExpressArnComponents <a name="StatesExpressArnComponents" id="@cdk_utils/iam.states.StatesExpressArnComponents"></a>

Parsed components of a express ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesExpressArnComponents.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesExpressArnComponents: states.StatesExpressArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnComponents.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component. |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnComponents.property.expressId">expressId</a></code> | <code>string</code> | The ExpressId component. |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnComponents.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.states.StatesExpressArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.states.StatesExpressArnComponents.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component.

---

##### `expressId`<sup>Required</sup> <a name="expressId" id="@cdk_utils/iam.states.StatesExpressArnComponents.property.expressId"></a>

```typescript
public readonly expressId: string;
```

- *Type:* string

The ExpressId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.states.StatesExpressArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.states.StatesExpressArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesExpressArnComponents.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component.

---

### StatesExpressArnProps <a name="StatesExpressArnProps" id="@cdk_utils/iam.states.StatesExpressArnProps"></a>

Properties for building a express ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesExpressArnProps.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesExpressArnProps: states.StatesExpressArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnProps.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnProps.property.expressId">expressId</a></code> | <code>string</code> | The ExpressId component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesExpressArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.states.StatesExpressArnProps.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component of the ARN.

---

##### `expressId`<sup>Required</sup> <a name="expressId" id="@cdk_utils/iam.states.StatesExpressArnProps.property.expressId"></a>

```typescript
public readonly expressId: string;
```

- *Type:* string

The ExpressId component of the ARN.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesExpressArnProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.states.StatesExpressArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.states.StatesExpressArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.states.StatesExpressArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StatesLabelledExecutionArnComponents <a name="StatesLabelledExecutionArnComponents" id="@cdk_utils/iam.states.StatesLabelledExecutionArnComponents"></a>

Parsed components of a labelled execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesLabelledExecutionArnComponents: states.StatesLabelledExecutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.mapRunLabel">mapRunLabel</a></code> | <code>string</code> | The MapRunLabel component. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component.

---

##### `mapRunLabel`<sup>Required</sup> <a name="mapRunLabel" id="@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.mapRunLabel"></a>

```typescript
public readonly mapRunLabel: string;
```

- *Type:* string

The MapRunLabel component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesLabelledExecutionArnComponents.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component.

---

### StatesLabelledExecutionArnProps <a name="StatesLabelledExecutionArnProps" id="@cdk_utils/iam.states.StatesLabelledExecutionArnProps"></a>

Properties for building a labelled execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesLabelledExecutionArnProps.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesLabelledExecutionArnProps: states.StatesLabelledExecutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.mapRunLabel">mapRunLabel</a></code> | <code>string</code> | The MapRunLabel component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component of the ARN.

---

##### `mapRunLabel`<sup>Required</sup> <a name="mapRunLabel" id="@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.mapRunLabel"></a>

```typescript
public readonly mapRunLabel: string;
```

- *Type:* string

The MapRunLabel component of the ARN.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.states.StatesLabelledExecutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StatesLabelledExpressArnComponents <a name="StatesLabelledExpressArnComponents" id="@cdk_utils/iam.states.StatesLabelledExpressArnComponents"></a>

Parsed components of a labelled express ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesLabelledExpressArnComponents.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesLabelledExpressArnComponents: states.StatesLabelledExpressArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.expressId">expressId</a></code> | <code>string</code> | The ExpressId component. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.mapRunLabel">mapRunLabel</a></code> | <code>string</code> | The MapRunLabel component. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component.

---

##### `expressId`<sup>Required</sup> <a name="expressId" id="@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.expressId"></a>

```typescript
public readonly expressId: string;
```

- *Type:* string

The ExpressId component.

---

##### `mapRunLabel`<sup>Required</sup> <a name="mapRunLabel" id="@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.mapRunLabel"></a>

```typescript
public readonly mapRunLabel: string;
```

- *Type:* string

The MapRunLabel component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesLabelledExpressArnComponents.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component.

---

### StatesLabelledExpressArnProps <a name="StatesLabelledExpressArnProps" id="@cdk_utils/iam.states.StatesLabelledExpressArnProps"></a>

Properties for building a labelled express ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesLabelledExpressArnProps.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesLabelledExpressArnProps: states.StatesLabelledExpressArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.expressId">expressId</a></code> | <code>string</code> | The ExpressId component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.mapRunLabel">mapRunLabel</a></code> | <code>string</code> | The MapRunLabel component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component of the ARN.

---

##### `expressId`<sup>Required</sup> <a name="expressId" id="@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.expressId"></a>

```typescript
public readonly expressId: string;
```

- *Type:* string

The ExpressId component of the ARN.

---

##### `mapRunLabel`<sup>Required</sup> <a name="mapRunLabel" id="@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.mapRunLabel"></a>

```typescript
public readonly mapRunLabel: string;
```

- *Type:* string

The MapRunLabel component of the ARN.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.states.StatesLabelledExpressArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StatesMaprunArnComponents <a name="StatesMaprunArnComponents" id="@cdk_utils/iam.states.StatesMaprunArnComponents"></a>

Parsed components of a maprun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesMaprunArnComponents.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesMaprunArnComponents: states.StatesMaprunArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnComponents.property.mapRunId">mapRunId</a></code> | <code>string</code> | The MapRunId component. |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnComponents.property.mapRunLabel">mapRunLabel</a></code> | <code>string</code> | The MapRunLabel component. |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnComponents.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.states.StatesMaprunArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `mapRunId`<sup>Required</sup> <a name="mapRunId" id="@cdk_utils/iam.states.StatesMaprunArnComponents.property.mapRunId"></a>

```typescript
public readonly mapRunId: string;
```

- *Type:* string

The MapRunId component.

---

##### `mapRunLabel`<sup>Required</sup> <a name="mapRunLabel" id="@cdk_utils/iam.states.StatesMaprunArnComponents.property.mapRunLabel"></a>

```typescript
public readonly mapRunLabel: string;
```

- *Type:* string

The MapRunLabel component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.states.StatesMaprunArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.states.StatesMaprunArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesMaprunArnComponents.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component.

---

### StatesMaprunArnProps <a name="StatesMaprunArnProps" id="@cdk_utils/iam.states.StatesMaprunArnProps"></a>

Properties for building a maprun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesMaprunArnProps.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesMaprunArnProps: states.StatesMaprunArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnProps.property.mapRunId">mapRunId</a></code> | <code>string</code> | The MapRunId component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnProps.property.mapRunLabel">mapRunLabel</a></code> | <code>string</code> | The MapRunLabel component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesMaprunArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `mapRunId`<sup>Required</sup> <a name="mapRunId" id="@cdk_utils/iam.states.StatesMaprunArnProps.property.mapRunId"></a>

```typescript
public readonly mapRunId: string;
```

- *Type:* string

The MapRunId component of the ARN.

---

##### `mapRunLabel`<sup>Required</sup> <a name="mapRunLabel" id="@cdk_utils/iam.states.StatesMaprunArnProps.property.mapRunLabel"></a>

```typescript
public readonly mapRunLabel: string;
```

- *Type:* string

The MapRunLabel component of the ARN.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesMaprunArnProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.states.StatesMaprunArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.states.StatesMaprunArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.states.StatesMaprunArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StatesStatemachinealiasArnComponents <a name="StatesStatemachinealiasArnComponents" id="@cdk_utils/iam.states.StatesStatemachinealiasArnComponents"></a>

Parsed components of a statemachinealias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesStatemachinealiasArnComponents.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesStatemachinealiasArnComponents: states.StatesStatemachinealiasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachinealiasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachinealiasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachinealiasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachinealiasArnComponents.property.stateMachineAliasName">stateMachineAliasName</a></code> | <code>string</code> | The StateMachineAliasName component. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachinealiasArnComponents.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.states.StatesStatemachinealiasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.states.StatesStatemachinealiasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.states.StatesStatemachinealiasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stateMachineAliasName`<sup>Required</sup> <a name="stateMachineAliasName" id="@cdk_utils/iam.states.StatesStatemachinealiasArnComponents.property.stateMachineAliasName"></a>

```typescript
public readonly stateMachineAliasName: string;
```

- *Type:* string

The StateMachineAliasName component.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesStatemachinealiasArnComponents.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component.

---

### StatesStatemachinealiasArnProps <a name="StatesStatemachinealiasArnProps" id="@cdk_utils/iam.states.StatesStatemachinealiasArnProps"></a>

Properties for building a statemachinealias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesStatemachinealiasArnProps.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesStatemachinealiasArnProps: states.StatesStatemachinealiasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachinealiasArnProps.property.stateMachineAliasName">stateMachineAliasName</a></code> | <code>string</code> | The StateMachineAliasName component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachinealiasArnProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachinealiasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachinealiasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachinealiasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `stateMachineAliasName`<sup>Required</sup> <a name="stateMachineAliasName" id="@cdk_utils/iam.states.StatesStatemachinealiasArnProps.property.stateMachineAliasName"></a>

```typescript
public readonly stateMachineAliasName: string;
```

- *Type:* string

The StateMachineAliasName component of the ARN.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesStatemachinealiasArnProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.states.StatesStatemachinealiasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.states.StatesStatemachinealiasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.states.StatesStatemachinealiasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StatesStatemachineArnComponents <a name="StatesStatemachineArnComponents" id="@cdk_utils/iam.states.StatesStatemachineArnComponents"></a>

Parsed components of a statemachine ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesStatemachineArnComponents.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesStatemachineArnComponents: states.StatesStatemachineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineArnComponents.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.states.StatesStatemachineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.states.StatesStatemachineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.states.StatesStatemachineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesStatemachineArnComponents.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component.

---

### StatesStatemachineArnProps <a name="StatesStatemachineArnProps" id="@cdk_utils/iam.states.StatesStatemachineArnProps"></a>

Properties for building a statemachine ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesStatemachineArnProps.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesStatemachineArnProps: states.StatesStatemachineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineArnProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesStatemachineArnProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.states.StatesStatemachineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.states.StatesStatemachineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.states.StatesStatemachineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StatesStatemachineversionArnComponents <a name="StatesStatemachineversionArnComponents" id="@cdk_utils/iam.states.StatesStatemachineversionArnComponents"></a>

Parsed components of a statemachineversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesStatemachineversionArnComponents.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesStatemachineversionArnComponents: states.StatesStatemachineversionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineversionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineversionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineversionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineversionArnComponents.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineversionArnComponents.property.stateMachineVersionId">stateMachineVersionId</a></code> | <code>string</code> | The StateMachineVersionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.states.StatesStatemachineversionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.states.StatesStatemachineversionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.states.StatesStatemachineversionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesStatemachineversionArnComponents.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component.

---

##### `stateMachineVersionId`<sup>Required</sup> <a name="stateMachineVersionId" id="@cdk_utils/iam.states.StatesStatemachineversionArnComponents.property.stateMachineVersionId"></a>

```typescript
public readonly stateMachineVersionId: string;
```

- *Type:* string

The StateMachineVersionId component.

---

### StatesStatemachineversionArnProps <a name="StatesStatemachineversionArnProps" id="@cdk_utils/iam.states.StatesStatemachineversionArnProps"></a>

Properties for building a statemachineversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.states.StatesStatemachineversionArnProps.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

const statesStatemachineversionArnProps: states.StatesStatemachineversionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineversionArnProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The StateMachineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineversionArnProps.property.stateMachineVersionId">stateMachineVersionId</a></code> | <code>string</code> | The StateMachineVersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineversionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineversionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.states.StatesStatemachineversionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdk_utils/iam.states.StatesStatemachineversionArnProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The StateMachineName component of the ARN.

---

##### `stateMachineVersionId`<sup>Required</sup> <a name="stateMachineVersionId" id="@cdk_utils/iam.states.StatesStatemachineversionArnProps.property.stateMachineVersionId"></a>

```typescript
public readonly stateMachineVersionId: string;
```

- *Type:* string

The StateMachineVersionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.states.StatesStatemachineversionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.states.StatesStatemachineversionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.states.StatesStatemachineversionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### StatesActions <a name="StatesActions" id="@cdk_utils/iam.states.StatesActions"></a>

IAM action constants for the states service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.states.StatesActions.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

new states.StatesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.actionGetActivityTask">actionGetActivityTask</a></code> | <code>string</code> | [Write] states:GetActivityTask. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.actionGetExecutionHistory">actionGetExecutionHistory</a></code> | <code>string</code> | [Read] states:GetExecutionHistory. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.CreateActivity">CreateActivity</a></code> | <code>string</code> | [Write] states:CreateActivity. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.CreateStateMachine">CreateStateMachine</a></code> | <code>string</code> | [Write] states:CreateStateMachine. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.CreateStateMachineAlias">CreateStateMachineAlias</a></code> | <code>string</code> | [Write] states:CreateStateMachineAlias. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.DeleteActivity">DeleteActivity</a></code> | <code>string</code> | [Write] states:DeleteActivity. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.DeleteStateMachine">DeleteStateMachine</a></code> | <code>string</code> | [Write] states:DeleteStateMachine. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.DeleteStateMachineAlias">DeleteStateMachineAlias</a></code> | <code>string</code> | [Write] states:DeleteStateMachineAlias. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.DeleteStateMachineVersion">DeleteStateMachineVersion</a></code> | <code>string</code> | [Write] states:DeleteStateMachineVersion. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.DescribeActivity">DescribeActivity</a></code> | <code>string</code> | [Read] states:DescribeActivity. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.DescribeExecution">DescribeExecution</a></code> | <code>string</code> | [Read] states:DescribeExecution. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.DescribeMapRun">DescribeMapRun</a></code> | <code>string</code> | [Read] states:DescribeMapRun. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.DescribeStateMachine">DescribeStateMachine</a></code> | <code>string</code> | [Read] states:DescribeStateMachine. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.DescribeStateMachineAlias">DescribeStateMachineAlias</a></code> | <code>string</code> | [Read] states:DescribeStateMachineAlias. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.DescribeStateMachineForExecution">DescribeStateMachineForExecution</a></code> | <code>string</code> | [Read] states:DescribeStateMachineForExecution. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.InvokeHTTPEndpoint">InvokeHTTPEndpoint</a></code> | <code>string</code> | [Write] states:InvokeHTTPEndpoint. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.ListActivities">ListActivities</a></code> | <code>string</code> | [List] states:ListActivities. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.ListExecutions">ListExecutions</a></code> | <code>string</code> | [List] states:ListExecutions. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.ListMapRuns">ListMapRuns</a></code> | <code>string</code> | [List] states:ListMapRuns. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.ListStateMachineAliases">ListStateMachineAliases</a></code> | <code>string</code> | [List] states:ListStateMachineAliases. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.ListStateMachines">ListStateMachines</a></code> | <code>string</code> | [List] states:ListStateMachines. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.ListStateMachineVersions">ListStateMachineVersions</a></code> | <code>string</code> | [List] states:ListStateMachineVersions. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] states:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.PublishStateMachineVersion">PublishStateMachineVersion</a></code> | <code>string</code> | [Write] states:PublishStateMachineVersion. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.RedriveExecution">RedriveExecution</a></code> | <code>string</code> | [Write] states:RedriveExecution. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.RevealSecrets">RevealSecrets</a></code> | <code>string</code> | [Read] states:RevealSecrets. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.SendTaskFailure">SendTaskFailure</a></code> | <code>string</code> | [Write] states:SendTaskFailure. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.SendTaskHeartbeat">SendTaskHeartbeat</a></code> | <code>string</code> | [Write] states:SendTaskHeartbeat. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.SendTaskSuccess">SendTaskSuccess</a></code> | <code>string</code> | [Write] states:SendTaskSuccess. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.StartExecution">StartExecution</a></code> | <code>string</code> | [Write] states:StartExecution. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.StartSyncExecution">StartSyncExecution</a></code> | <code>string</code> | [Write] states:StartSyncExecution. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.StopExecution">StopExecution</a></code> | <code>string</code> | [Write] states:StopExecution. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] states:TagResource. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.TestState">TestState</a></code> | <code>string</code> | [Write] states:TestState. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] states:UntagResource. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.UpdateMapRun">UpdateMapRun</a></code> | <code>string</code> | [Write] states:UpdateMapRun. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.UpdateStateMachine">UpdateStateMachine</a></code> | <code>string</code> | [Write] states:UpdateStateMachine. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.UpdateStateMachineAlias">UpdateStateMachineAlias</a></code> | <code>string</code> | [Write] states:UpdateStateMachineAlias. |
| <code><a href="#@cdk_utils/iam.states.StatesActions.property.ValidateStateMachineDefinition">ValidateStateMachineDefinition</a></code> | <code>string</code> | [Read] states:ValidateStateMachineDefinition. |

---

##### `actionGetActivityTask`<sup>Required</sup> <a name="actionGetActivityTask" id="@cdk_utils/iam.states.StatesActions.property.actionGetActivityTask"></a>

```typescript
public readonly actionGetActivityTask: string;
```

- *Type:* string

[Write] states:GetActivityTask.

---

##### `actionGetExecutionHistory`<sup>Required</sup> <a name="actionGetExecutionHistory" id="@cdk_utils/iam.states.StatesActions.property.actionGetExecutionHistory"></a>

```typescript
public readonly actionGetExecutionHistory: string;
```

- *Type:* string

[Read] states:GetExecutionHistory.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.states.StatesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.states.StatesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.states.StatesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.states.StatesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.states.StatesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateActivity`<sup>Required</sup> <a name="CreateActivity" id="@cdk_utils/iam.states.StatesActions.property.CreateActivity"></a>

```typescript
public readonly CreateActivity: string;
```

- *Type:* string

[Write] states:CreateActivity.

---

##### `CreateStateMachine`<sup>Required</sup> <a name="CreateStateMachine" id="@cdk_utils/iam.states.StatesActions.property.CreateStateMachine"></a>

```typescript
public readonly CreateStateMachine: string;
```

- *Type:* string

[Write] states:CreateStateMachine.

---

##### `CreateStateMachineAlias`<sup>Required</sup> <a name="CreateStateMachineAlias" id="@cdk_utils/iam.states.StatesActions.property.CreateStateMachineAlias"></a>

```typescript
public readonly CreateStateMachineAlias: string;
```

- *Type:* string

[Write] states:CreateStateMachineAlias.

---

##### `DeleteActivity`<sup>Required</sup> <a name="DeleteActivity" id="@cdk_utils/iam.states.StatesActions.property.DeleteActivity"></a>

```typescript
public readonly DeleteActivity: string;
```

- *Type:* string

[Write] states:DeleteActivity.

---

##### `DeleteStateMachine`<sup>Required</sup> <a name="DeleteStateMachine" id="@cdk_utils/iam.states.StatesActions.property.DeleteStateMachine"></a>

```typescript
public readonly DeleteStateMachine: string;
```

- *Type:* string

[Write] states:DeleteStateMachine.

---

##### `DeleteStateMachineAlias`<sup>Required</sup> <a name="DeleteStateMachineAlias" id="@cdk_utils/iam.states.StatesActions.property.DeleteStateMachineAlias"></a>

```typescript
public readonly DeleteStateMachineAlias: string;
```

- *Type:* string

[Write] states:DeleteStateMachineAlias.

---

##### `DeleteStateMachineVersion`<sup>Required</sup> <a name="DeleteStateMachineVersion" id="@cdk_utils/iam.states.StatesActions.property.DeleteStateMachineVersion"></a>

```typescript
public readonly DeleteStateMachineVersion: string;
```

- *Type:* string

[Write] states:DeleteStateMachineVersion.

---

##### `DescribeActivity`<sup>Required</sup> <a name="DescribeActivity" id="@cdk_utils/iam.states.StatesActions.property.DescribeActivity"></a>

```typescript
public readonly DescribeActivity: string;
```

- *Type:* string

[Read] states:DescribeActivity.

---

##### `DescribeExecution`<sup>Required</sup> <a name="DescribeExecution" id="@cdk_utils/iam.states.StatesActions.property.DescribeExecution"></a>

```typescript
public readonly DescribeExecution: string;
```

- *Type:* string

[Read] states:DescribeExecution.

---

##### `DescribeMapRun`<sup>Required</sup> <a name="DescribeMapRun" id="@cdk_utils/iam.states.StatesActions.property.DescribeMapRun"></a>

```typescript
public readonly DescribeMapRun: string;
```

- *Type:* string

[Read] states:DescribeMapRun.

---

##### `DescribeStateMachine`<sup>Required</sup> <a name="DescribeStateMachine" id="@cdk_utils/iam.states.StatesActions.property.DescribeStateMachine"></a>

```typescript
public readonly DescribeStateMachine: string;
```

- *Type:* string

[Read] states:DescribeStateMachine.

---

##### `DescribeStateMachineAlias`<sup>Required</sup> <a name="DescribeStateMachineAlias" id="@cdk_utils/iam.states.StatesActions.property.DescribeStateMachineAlias"></a>

```typescript
public readonly DescribeStateMachineAlias: string;
```

- *Type:* string

[Read] states:DescribeStateMachineAlias.

---

##### `DescribeStateMachineForExecution`<sup>Required</sup> <a name="DescribeStateMachineForExecution" id="@cdk_utils/iam.states.StatesActions.property.DescribeStateMachineForExecution"></a>

```typescript
public readonly DescribeStateMachineForExecution: string;
```

- *Type:* string

[Read] states:DescribeStateMachineForExecution.

---

##### `InvokeHTTPEndpoint`<sup>Required</sup> <a name="InvokeHTTPEndpoint" id="@cdk_utils/iam.states.StatesActions.property.InvokeHTTPEndpoint"></a>

```typescript
public readonly InvokeHTTPEndpoint: string;
```

- *Type:* string

[Write] states:InvokeHTTPEndpoint.

---

##### `ListActivities`<sup>Required</sup> <a name="ListActivities" id="@cdk_utils/iam.states.StatesActions.property.ListActivities"></a>

```typescript
public readonly ListActivities: string;
```

- *Type:* string

[List] states:ListActivities.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.states.StatesActions.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string;
```

- *Type:* string

[List] states:ListExecutions.

---

##### `ListMapRuns`<sup>Required</sup> <a name="ListMapRuns" id="@cdk_utils/iam.states.StatesActions.property.ListMapRuns"></a>

```typescript
public readonly ListMapRuns: string;
```

- *Type:* string

[List] states:ListMapRuns.

---

##### `ListStateMachineAliases`<sup>Required</sup> <a name="ListStateMachineAliases" id="@cdk_utils/iam.states.StatesActions.property.ListStateMachineAliases"></a>

```typescript
public readonly ListStateMachineAliases: string;
```

- *Type:* string

[List] states:ListStateMachineAliases.

---

##### `ListStateMachines`<sup>Required</sup> <a name="ListStateMachines" id="@cdk_utils/iam.states.StatesActions.property.ListStateMachines"></a>

```typescript
public readonly ListStateMachines: string;
```

- *Type:* string

[List] states:ListStateMachines.

---

##### `ListStateMachineVersions`<sup>Required</sup> <a name="ListStateMachineVersions" id="@cdk_utils/iam.states.StatesActions.property.ListStateMachineVersions"></a>

```typescript
public readonly ListStateMachineVersions: string;
```

- *Type:* string

[List] states:ListStateMachineVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.states.StatesActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] states:ListTagsForResource.

---

##### `PublishStateMachineVersion`<sup>Required</sup> <a name="PublishStateMachineVersion" id="@cdk_utils/iam.states.StatesActions.property.PublishStateMachineVersion"></a>

```typescript
public readonly PublishStateMachineVersion: string;
```

- *Type:* string

[Write] states:PublishStateMachineVersion.

---

##### `RedriveExecution`<sup>Required</sup> <a name="RedriveExecution" id="@cdk_utils/iam.states.StatesActions.property.RedriveExecution"></a>

```typescript
public readonly RedriveExecution: string;
```

- *Type:* string

[Write] states:RedriveExecution.

---

##### `RevealSecrets`<sup>Required</sup> <a name="RevealSecrets" id="@cdk_utils/iam.states.StatesActions.property.RevealSecrets"></a>

```typescript
public readonly RevealSecrets: string;
```

- *Type:* string

[Read] states:RevealSecrets.

---

##### `SendTaskFailure`<sup>Required</sup> <a name="SendTaskFailure" id="@cdk_utils/iam.states.StatesActions.property.SendTaskFailure"></a>

```typescript
public readonly SendTaskFailure: string;
```

- *Type:* string

[Write] states:SendTaskFailure.

---

##### `SendTaskHeartbeat`<sup>Required</sup> <a name="SendTaskHeartbeat" id="@cdk_utils/iam.states.StatesActions.property.SendTaskHeartbeat"></a>

```typescript
public readonly SendTaskHeartbeat: string;
```

- *Type:* string

[Write] states:SendTaskHeartbeat.

---

##### `SendTaskSuccess`<sup>Required</sup> <a name="SendTaskSuccess" id="@cdk_utils/iam.states.StatesActions.property.SendTaskSuccess"></a>

```typescript
public readonly SendTaskSuccess: string;
```

- *Type:* string

[Write] states:SendTaskSuccess.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.states.StatesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartExecution`<sup>Required</sup> <a name="StartExecution" id="@cdk_utils/iam.states.StatesActions.property.StartExecution"></a>

```typescript
public readonly StartExecution: string;
```

- *Type:* string

[Write] states:StartExecution.

---

##### `StartSyncExecution`<sup>Required</sup> <a name="StartSyncExecution" id="@cdk_utils/iam.states.StatesActions.property.StartSyncExecution"></a>

```typescript
public readonly StartSyncExecution: string;
```

- *Type:* string

[Write] states:StartSyncExecution.

---

##### `StopExecution`<sup>Required</sup> <a name="StopExecution" id="@cdk_utils/iam.states.StatesActions.property.StopExecution"></a>

```typescript
public readonly StopExecution: string;
```

- *Type:* string

[Write] states:StopExecution.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.states.StatesActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] states:TagResource.

---

##### `TestState`<sup>Required</sup> <a name="TestState" id="@cdk_utils/iam.states.StatesActions.property.TestState"></a>

```typescript
public readonly TestState: string;
```

- *Type:* string

[Write] states:TestState.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.states.StatesActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] states:UntagResource.

---

##### `UpdateMapRun`<sup>Required</sup> <a name="UpdateMapRun" id="@cdk_utils/iam.states.StatesActions.property.UpdateMapRun"></a>

```typescript
public readonly UpdateMapRun: string;
```

- *Type:* string

[Write] states:UpdateMapRun.

---

##### `UpdateStateMachine`<sup>Required</sup> <a name="UpdateStateMachine" id="@cdk_utils/iam.states.StatesActions.property.UpdateStateMachine"></a>

```typescript
public readonly UpdateStateMachine: string;
```

- *Type:* string

[Write] states:UpdateStateMachine.

---

##### `UpdateStateMachineAlias`<sup>Required</sup> <a name="UpdateStateMachineAlias" id="@cdk_utils/iam.states.StatesActions.property.UpdateStateMachineAlias"></a>

```typescript
public readonly UpdateStateMachineAlias: string;
```

- *Type:* string

[Write] states:UpdateStateMachineAlias.

---

##### `ValidateStateMachineDefinition`<sup>Required</sup> <a name="ValidateStateMachineDefinition" id="@cdk_utils/iam.states.StatesActions.property.ValidateStateMachineDefinition"></a>

```typescript
public readonly ValidateStateMachineDefinition: string;
```

- *Type:* string

[Read] states:ValidateStateMachineDefinition.

---

### StatesConditions <a name="StatesConditions" id="@cdk_utils/iam.states.StatesConditions"></a>

Condition key constants and builders for states.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.states.StatesConditions.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

new states.StatesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.httpEndpoint">httpEndpoint</a></code> | Generates a condition block for `states:HTTPEndpoint`. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.httpMethod">httpMethod</a></code> | Generates a condition block for `states:HTTPMethod`. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.stateMachineQualifier">stateMachineQualifier</a></code> | Generates a condition block for `states:StateMachineQualifier`. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `httpEndpoint` <a name="httpEndpoint" id="@cdk_utils/iam.states.StatesConditions.httpEndpoint"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesConditions.httpEndpoint(value: string)
```

Generates a condition block for `states:HTTPEndpoint`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.states.StatesConditions.httpEndpoint.parameter.value"></a>

- *Type:* string

---

##### `httpMethod` <a name="httpMethod" id="@cdk_utils/iam.states.StatesConditions.httpMethod"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesConditions.httpMethod(value: string)
```

Generates a condition block for `states:HTTPMethod`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.states.StatesConditions.httpMethod.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.states.StatesConditions.requestTag"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.states.StatesConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.states.StatesConditions.resourceTag"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.states.StatesConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `stateMachineQualifier` <a name="stateMachineQualifier" id="@cdk_utils/iam.states.StatesConditions.stateMachineQualifier"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesConditions.stateMachineQualifier(values: string[])
```

Generates a condition block for `states:StateMachineQualifier`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.states.StatesConditions.stateMachineQualifier.parameter.values"></a>

- *Type:* string[]

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.states.StatesConditions.tagKeys"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.states.StatesConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.CreateActivityConditionKeys">CreateActivityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateActivity action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.CreateStateMachineAliasConditionKeys">CreateStateMachineAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStateMachineAlias action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.CreateStateMachineConditionKeys">CreateStateMachineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStateMachine action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.DeleteStateMachineAliasConditionKeys">DeleteStateMachineAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteStateMachineAlias action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.DeleteStateMachineVersionConditionKeys">DeleteStateMachineVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteStateMachineVersion action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.DescribeStateMachineAliasConditionKeys">DescribeStateMachineAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeStateMachineAlias action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.DescribeStateMachineConditionKeys">DescribeStateMachineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeStateMachine action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.HTTP_ENDPOINT">HTTP_ENDPOINT</a></code> | <code>string</code> | Condition key: states:HTTPEndpoint (String). |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.HTTP_METHOD">HTTP_METHOD</a></code> | <code>string</code> | Condition key: states:HTTPMethod (String). |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.ListExecutionsConditionKeys">ListExecutionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListExecutions action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.ListStateMachineAliasesConditionKeys">ListStateMachineAliasesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListStateMachineAliases action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.StartExecutionConditionKeys">StartExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartExecution action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.StartSyncExecutionConditionKeys">StartSyncExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSyncExecution action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.STATE_MACHINE_QUALIFIER">STATE_MACHINE_QUALIFIER</a></code> | <code>string</code> | Condition key: states:StateMachineQualifier (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.UpdateStateMachineAliasConditionKeys">UpdateStateMachineAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateStateMachineAlias action. |
| <code><a href="#@cdk_utils/iam.states.StatesConditions.property.UpdateStateMachineConditionKeys">UpdateStateMachineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateStateMachine action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.states.StatesConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.states.StatesConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.states.StatesConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateActivityConditionKeys`<sup>Required</sup> <a name="CreateActivityConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.CreateActivityConditionKeys"></a>

```typescript
public readonly CreateActivityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateActivity action.

---

##### `CreateStateMachineAliasConditionKeys`<sup>Required</sup> <a name="CreateStateMachineAliasConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.CreateStateMachineAliasConditionKeys"></a>

```typescript
public readonly CreateStateMachineAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStateMachineAlias action.

---

##### `CreateStateMachineConditionKeys`<sup>Required</sup> <a name="CreateStateMachineConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.CreateStateMachineConditionKeys"></a>

```typescript
public readonly CreateStateMachineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStateMachine action.

---

##### `DeleteStateMachineAliasConditionKeys`<sup>Required</sup> <a name="DeleteStateMachineAliasConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.DeleteStateMachineAliasConditionKeys"></a>

```typescript
public readonly DeleteStateMachineAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteStateMachineAlias action.

---

##### `DeleteStateMachineVersionConditionKeys`<sup>Required</sup> <a name="DeleteStateMachineVersionConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.DeleteStateMachineVersionConditionKeys"></a>

```typescript
public readonly DeleteStateMachineVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteStateMachineVersion action.

---

##### `DescribeStateMachineAliasConditionKeys`<sup>Required</sup> <a name="DescribeStateMachineAliasConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.DescribeStateMachineAliasConditionKeys"></a>

```typescript
public readonly DescribeStateMachineAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeStateMachineAlias action.

---

##### `DescribeStateMachineConditionKeys`<sup>Required</sup> <a name="DescribeStateMachineConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.DescribeStateMachineConditionKeys"></a>

```typescript
public readonly DescribeStateMachineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeStateMachine action.

---

##### `HTTP_ENDPOINT`<sup>Required</sup> <a name="HTTP_ENDPOINT" id="@cdk_utils/iam.states.StatesConditions.property.HTTP_ENDPOINT"></a>

```typescript
public readonly HTTP_ENDPOINT: string;
```

- *Type:* string

Condition key: states:HTTPEndpoint (String).

---

##### `HTTP_METHOD`<sup>Required</sup> <a name="HTTP_METHOD" id="@cdk_utils/iam.states.StatesConditions.property.HTTP_METHOD"></a>

```typescript
public readonly HTTP_METHOD: string;
```

- *Type:* string

Condition key: states:HTTPMethod (String).

---

##### `ListExecutionsConditionKeys`<sup>Required</sup> <a name="ListExecutionsConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.ListExecutionsConditionKeys"></a>

```typescript
public readonly ListExecutionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListExecutions action.

---

##### `ListStateMachineAliasesConditionKeys`<sup>Required</sup> <a name="ListStateMachineAliasesConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.ListStateMachineAliasesConditionKeys"></a>

```typescript
public readonly ListStateMachineAliasesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListStateMachineAliases action.

---

##### `StartExecutionConditionKeys`<sup>Required</sup> <a name="StartExecutionConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.StartExecutionConditionKeys"></a>

```typescript
public readonly StartExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartExecution action.

---

##### `StartSyncExecutionConditionKeys`<sup>Required</sup> <a name="StartSyncExecutionConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.StartSyncExecutionConditionKeys"></a>

```typescript
public readonly StartSyncExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSyncExecution action.

---

##### `STATE_MACHINE_QUALIFIER`<sup>Required</sup> <a name="STATE_MACHINE_QUALIFIER" id="@cdk_utils/iam.states.StatesConditions.property.STATE_MACHINE_QUALIFIER"></a>

```typescript
public readonly STATE_MACHINE_QUALIFIER: string;
```

- *Type:* string

Condition key: states:StateMachineQualifier (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateStateMachineAliasConditionKeys`<sup>Required</sup> <a name="UpdateStateMachineAliasConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.UpdateStateMachineAliasConditionKeys"></a>

```typescript
public readonly UpdateStateMachineAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateStateMachineAlias action.

---

##### `UpdateStateMachineConditionKeys`<sup>Required</sup> <a name="UpdateStateMachineConditionKeys" id="@cdk_utils/iam.states.StatesConditions.property.UpdateStateMachineConditionKeys"></a>

```typescript
public readonly UpdateStateMachineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateStateMachine action.

---

### StatesOperations <a name="StatesOperations" id="@cdk_utils/iam.states.StatesOperations"></a>

API operation to required IAM actions mapping for states.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.states.StatesOperations.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

new states.StatesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.CreateActivity">CreateActivity</a></code> | <code>string[]</code> | IAM actions required for the CreateActivity API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.CreateStateMachine">CreateStateMachine</a></code> | <code>string[]</code> | IAM actions required for the CreateStateMachine API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.CreateStateMachineAlias">CreateStateMachineAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateStateMachineAlias API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.DeleteActivity">DeleteActivity</a></code> | <code>string[]</code> | IAM actions required for the DeleteActivity API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.DeleteStateMachine">DeleteStateMachine</a></code> | <code>string[]</code> | IAM actions required for the DeleteStateMachine API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.DeleteStateMachineAlias">DeleteStateMachineAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteStateMachineAlias API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.DeleteStateMachineVersion">DeleteStateMachineVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteStateMachineVersion API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.DescribeActivity">DescribeActivity</a></code> | <code>string[]</code> | IAM actions required for the DescribeActivity API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.DescribeExecution">DescribeExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribeExecution API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.DescribeMapRun">DescribeMapRun</a></code> | <code>string[]</code> | IAM actions required for the DescribeMapRun API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.DescribeStateMachine">DescribeStateMachine</a></code> | <code>string[]</code> | IAM actions required for the DescribeStateMachine API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.DescribeStateMachineAlias">DescribeStateMachineAlias</a></code> | <code>string[]</code> | IAM actions required for the DescribeStateMachineAlias API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.DescribeStateMachineForExecution">DescribeStateMachineForExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribeStateMachineForExecution API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.ListActivities">ListActivities</a></code> | <code>string[]</code> | IAM actions required for the ListActivities API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.ListExecutions">ListExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListExecutions API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.ListMapRuns">ListMapRuns</a></code> | <code>string[]</code> | IAM actions required for the ListMapRuns API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.ListStateMachineAliases">ListStateMachineAliases</a></code> | <code>string[]</code> | IAM actions required for the ListStateMachineAliases API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.ListStateMachines">ListStateMachines</a></code> | <code>string[]</code> | IAM actions required for the ListStateMachines API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.ListStateMachineVersions">ListStateMachineVersions</a></code> | <code>string[]</code> | IAM actions required for the ListStateMachineVersions API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.opGetActivityTask">opGetActivityTask</a></code> | <code>string[]</code> | IAM actions required for the GetActivityTask API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.opGetExecutionHistory">opGetExecutionHistory</a></code> | <code>string[]</code> | IAM actions required for the GetExecutionHistory API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.PublishStateMachineVersion">PublishStateMachineVersion</a></code> | <code>string[]</code> | IAM actions required for the PublishStateMachineVersion API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.RedriveExecution">RedriveExecution</a></code> | <code>string[]</code> | IAM actions required for the RedriveExecution API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.SendTaskFailure">SendTaskFailure</a></code> | <code>string[]</code> | IAM actions required for the SendTaskFailure API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.SendTaskHeartbeat">SendTaskHeartbeat</a></code> | <code>string[]</code> | IAM actions required for the SendTaskHeartbeat API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.SendTaskSuccess">SendTaskSuccess</a></code> | <code>string[]</code> | IAM actions required for the SendTaskSuccess API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.StartExecution">StartExecution</a></code> | <code>string[]</code> | IAM actions required for the StartExecution API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.StartSyncExecution">StartSyncExecution</a></code> | <code>string[]</code> | IAM actions required for the StartSyncExecution API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.StopExecution">StopExecution</a></code> | <code>string[]</code> | IAM actions required for the StopExecution API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.TestState">TestState</a></code> | <code>string[]</code> | IAM actions required for the TestState API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.UpdateMapRun">UpdateMapRun</a></code> | <code>string[]</code> | IAM actions required for the UpdateMapRun API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.UpdateStateMachine">UpdateStateMachine</a></code> | <code>string[]</code> | IAM actions required for the UpdateStateMachine API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.UpdateStateMachineAlias">UpdateStateMachineAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateStateMachineAlias API call. |
| <code><a href="#@cdk_utils/iam.states.StatesOperations.property.ValidateStateMachineDefinition">ValidateStateMachineDefinition</a></code> | <code>string[]</code> | IAM actions required for the ValidateStateMachineDefinition API call. |

---

##### `CreateActivity`<sup>Required</sup> <a name="CreateActivity" id="@cdk_utils/iam.states.StatesOperations.property.CreateActivity"></a>

```typescript
public readonly CreateActivity: string[];
```

- *Type:* string[]

IAM actions required for the CreateActivity API call.

---

##### `CreateStateMachine`<sup>Required</sup> <a name="CreateStateMachine" id="@cdk_utils/iam.states.StatesOperations.property.CreateStateMachine"></a>

```typescript
public readonly CreateStateMachine: string[];
```

- *Type:* string[]

IAM actions required for the CreateStateMachine API call.

---

##### `CreateStateMachineAlias`<sup>Required</sup> <a name="CreateStateMachineAlias" id="@cdk_utils/iam.states.StatesOperations.property.CreateStateMachineAlias"></a>

```typescript
public readonly CreateStateMachineAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateStateMachineAlias API call.

---

##### `DeleteActivity`<sup>Required</sup> <a name="DeleteActivity" id="@cdk_utils/iam.states.StatesOperations.property.DeleteActivity"></a>

```typescript
public readonly DeleteActivity: string[];
```

- *Type:* string[]

IAM actions required for the DeleteActivity API call.

---

##### `DeleteStateMachine`<sup>Required</sup> <a name="DeleteStateMachine" id="@cdk_utils/iam.states.StatesOperations.property.DeleteStateMachine"></a>

```typescript
public readonly DeleteStateMachine: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStateMachine API call.

---

##### `DeleteStateMachineAlias`<sup>Required</sup> <a name="DeleteStateMachineAlias" id="@cdk_utils/iam.states.StatesOperations.property.DeleteStateMachineAlias"></a>

```typescript
public readonly DeleteStateMachineAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStateMachineAlias API call.

---

##### `DeleteStateMachineVersion`<sup>Required</sup> <a name="DeleteStateMachineVersion" id="@cdk_utils/iam.states.StatesOperations.property.DeleteStateMachineVersion"></a>

```typescript
public readonly DeleteStateMachineVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStateMachineVersion API call.

---

##### `DescribeActivity`<sup>Required</sup> <a name="DescribeActivity" id="@cdk_utils/iam.states.StatesOperations.property.DescribeActivity"></a>

```typescript
public readonly DescribeActivity: string[];
```

- *Type:* string[]

IAM actions required for the DescribeActivity API call.

---

##### `DescribeExecution`<sup>Required</sup> <a name="DescribeExecution" id="@cdk_utils/iam.states.StatesOperations.property.DescribeExecution"></a>

```typescript
public readonly DescribeExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExecution API call.

---

##### `DescribeMapRun`<sup>Required</sup> <a name="DescribeMapRun" id="@cdk_utils/iam.states.StatesOperations.property.DescribeMapRun"></a>

```typescript
public readonly DescribeMapRun: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMapRun API call.

---

##### `DescribeStateMachine`<sup>Required</sup> <a name="DescribeStateMachine" id="@cdk_utils/iam.states.StatesOperations.property.DescribeStateMachine"></a>

```typescript
public readonly DescribeStateMachine: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStateMachine API call.

---

##### `DescribeStateMachineAlias`<sup>Required</sup> <a name="DescribeStateMachineAlias" id="@cdk_utils/iam.states.StatesOperations.property.DescribeStateMachineAlias"></a>

```typescript
public readonly DescribeStateMachineAlias: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStateMachineAlias API call.

---

##### `DescribeStateMachineForExecution`<sup>Required</sup> <a name="DescribeStateMachineForExecution" id="@cdk_utils/iam.states.StatesOperations.property.DescribeStateMachineForExecution"></a>

```typescript
public readonly DescribeStateMachineForExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStateMachineForExecution API call.

---

##### `ListActivities`<sup>Required</sup> <a name="ListActivities" id="@cdk_utils/iam.states.StatesOperations.property.ListActivities"></a>

```typescript
public readonly ListActivities: string[];
```

- *Type:* string[]

IAM actions required for the ListActivities API call.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.states.StatesOperations.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListExecutions API call.

---

##### `ListMapRuns`<sup>Required</sup> <a name="ListMapRuns" id="@cdk_utils/iam.states.StatesOperations.property.ListMapRuns"></a>

```typescript
public readonly ListMapRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListMapRuns API call.

---

##### `ListStateMachineAliases`<sup>Required</sup> <a name="ListStateMachineAliases" id="@cdk_utils/iam.states.StatesOperations.property.ListStateMachineAliases"></a>

```typescript
public readonly ListStateMachineAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListStateMachineAliases API call.

---

##### `ListStateMachines`<sup>Required</sup> <a name="ListStateMachines" id="@cdk_utils/iam.states.StatesOperations.property.ListStateMachines"></a>

```typescript
public readonly ListStateMachines: string[];
```

- *Type:* string[]

IAM actions required for the ListStateMachines API call.

---

##### `ListStateMachineVersions`<sup>Required</sup> <a name="ListStateMachineVersions" id="@cdk_utils/iam.states.StatesOperations.property.ListStateMachineVersions"></a>

```typescript
public readonly ListStateMachineVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListStateMachineVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.states.StatesOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetActivityTask`<sup>Required</sup> <a name="opGetActivityTask" id="@cdk_utils/iam.states.StatesOperations.property.opGetActivityTask"></a>

```typescript
public readonly opGetActivityTask: string[];
```

- *Type:* string[]

IAM actions required for the GetActivityTask API call.

---

##### `opGetExecutionHistory`<sup>Required</sup> <a name="opGetExecutionHistory" id="@cdk_utils/iam.states.StatesOperations.property.opGetExecutionHistory"></a>

```typescript
public readonly opGetExecutionHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetExecutionHistory API call.

---

##### `PublishStateMachineVersion`<sup>Required</sup> <a name="PublishStateMachineVersion" id="@cdk_utils/iam.states.StatesOperations.property.PublishStateMachineVersion"></a>

```typescript
public readonly PublishStateMachineVersion: string[];
```

- *Type:* string[]

IAM actions required for the PublishStateMachineVersion API call.

---

##### `RedriveExecution`<sup>Required</sup> <a name="RedriveExecution" id="@cdk_utils/iam.states.StatesOperations.property.RedriveExecution"></a>

```typescript
public readonly RedriveExecution: string[];
```

- *Type:* string[]

IAM actions required for the RedriveExecution API call.

---

##### `SendTaskFailure`<sup>Required</sup> <a name="SendTaskFailure" id="@cdk_utils/iam.states.StatesOperations.property.SendTaskFailure"></a>

```typescript
public readonly SendTaskFailure: string[];
```

- *Type:* string[]

IAM actions required for the SendTaskFailure API call.

---

##### `SendTaskHeartbeat`<sup>Required</sup> <a name="SendTaskHeartbeat" id="@cdk_utils/iam.states.StatesOperations.property.SendTaskHeartbeat"></a>

```typescript
public readonly SendTaskHeartbeat: string[];
```

- *Type:* string[]

IAM actions required for the SendTaskHeartbeat API call.

---

##### `SendTaskSuccess`<sup>Required</sup> <a name="SendTaskSuccess" id="@cdk_utils/iam.states.StatesOperations.property.SendTaskSuccess"></a>

```typescript
public readonly SendTaskSuccess: string[];
```

- *Type:* string[]

IAM actions required for the SendTaskSuccess API call.

---

##### `StartExecution`<sup>Required</sup> <a name="StartExecution" id="@cdk_utils/iam.states.StatesOperations.property.StartExecution"></a>

```typescript
public readonly StartExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartExecution API call.

---

##### `StartSyncExecution`<sup>Required</sup> <a name="StartSyncExecution" id="@cdk_utils/iam.states.StatesOperations.property.StartSyncExecution"></a>

```typescript
public readonly StartSyncExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartSyncExecution API call.

---

##### `StopExecution`<sup>Required</sup> <a name="StopExecution" id="@cdk_utils/iam.states.StatesOperations.property.StopExecution"></a>

```typescript
public readonly StopExecution: string[];
```

- *Type:* string[]

IAM actions required for the StopExecution API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.states.StatesOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestState`<sup>Required</sup> <a name="TestState" id="@cdk_utils/iam.states.StatesOperations.property.TestState"></a>

```typescript
public readonly TestState: string[];
```

- *Type:* string[]

IAM actions required for the TestState API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.states.StatesOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateMapRun`<sup>Required</sup> <a name="UpdateMapRun" id="@cdk_utils/iam.states.StatesOperations.property.UpdateMapRun"></a>

```typescript
public readonly UpdateMapRun: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMapRun API call.

---

##### `UpdateStateMachine`<sup>Required</sup> <a name="UpdateStateMachine" id="@cdk_utils/iam.states.StatesOperations.property.UpdateStateMachine"></a>

```typescript
public readonly UpdateStateMachine: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStateMachine API call.

---

##### `UpdateStateMachineAlias`<sup>Required</sup> <a name="UpdateStateMachineAlias" id="@cdk_utils/iam.states.StatesOperations.property.UpdateStateMachineAlias"></a>

```typescript
public readonly UpdateStateMachineAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStateMachineAlias API call.

---

##### `ValidateStateMachineDefinition`<sup>Required</sup> <a name="ValidateStateMachineDefinition" id="@cdk_utils/iam.states.StatesOperations.property.ValidateStateMachineDefinition"></a>

```typescript
public readonly ValidateStateMachineDefinition: string[];
```

- *Type:* string[]

IAM actions required for the ValidateStateMachineDefinition API call.

---

### StatesResources <a name="StatesResources" id="@cdk_utils/iam.states.StatesResources"></a>

ARN builders, validators, and parsers for states resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.states.StatesResources.Initializer"></a>

```typescript
import { states } from '@cdk_utils/iam'

new states.StatesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.states.StatesResources.activity">activity</a></code> | Builds an ARN for the activity resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.execution">execution</a></code> | Builds an ARN for the execution resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.express">express</a></code> | Builds an ARN for the express resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.isValidActivityArn">isValidActivityArn</a></code> | Validates whether a string is a valid ARN for the activity resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.isValidExecutionArn">isValidExecutionArn</a></code> | Validates whether a string is a valid ARN for the execution resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.isValidExpressArn">isValidExpressArn</a></code> | Validates whether a string is a valid ARN for the express resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.isValidLabelledExecutionArn">isValidLabelledExecutionArn</a></code> | Validates whether a string is a valid ARN for the labelled execution resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.isValidLabelledExpressArn">isValidLabelledExpressArn</a></code> | Validates whether a string is a valid ARN for the labelled express resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.isValidMaprunArn">isValidMaprunArn</a></code> | Validates whether a string is a valid ARN for the maprun resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.isValidStatemachinealiasArn">isValidStatemachinealiasArn</a></code> | Validates whether a string is a valid ARN for the statemachinealias resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.isValidStatemachineArn">isValidStatemachineArn</a></code> | Validates whether a string is a valid ARN for the statemachine resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.isValidStatemachineversionArn">isValidStatemachineversionArn</a></code> | Validates whether a string is a valid ARN for the statemachineversion resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.labelledExecution">labelledExecution</a></code> | Builds an ARN for the labelled execution resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.labelledExpress">labelledExpress</a></code> | Builds an ARN for the labelled express resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.maprun">maprun</a></code> | Builds an ARN for the maprun resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.parseActivityArn">parseActivityArn</a></code> | Parses a activity ARN into its components. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.parseExecutionArn">parseExecutionArn</a></code> | Parses a execution ARN into its components. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.parseExpressArn">parseExpressArn</a></code> | Parses a express ARN into its components. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.parseLabelledExecutionArn">parseLabelledExecutionArn</a></code> | Parses a labelled execution ARN into its components. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.parseLabelledExpressArn">parseLabelledExpressArn</a></code> | Parses a labelled express ARN into its components. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.parseMaprunArn">parseMaprunArn</a></code> | Parses a maprun ARN into its components. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.parseStatemachinealiasArn">parseStatemachinealiasArn</a></code> | Parses a statemachinealias ARN into its components. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.parseStatemachineArn">parseStatemachineArn</a></code> | Parses a statemachine ARN into its components. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.parseStatemachineversionArn">parseStatemachineversionArn</a></code> | Parses a statemachineversion ARN into its components. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.statemachine">statemachine</a></code> | Builds an ARN for the statemachine resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.statemachinealias">statemachinealias</a></code> | Builds an ARN for the statemachinealias resource. |
| <code><a href="#@cdk_utils/iam.states.StatesResources.statemachineversion">statemachineversion</a></code> | Builds an ARN for the statemachineversion resource. |

---

##### `activity` <a name="activity" id="@cdk_utils/iam.states.StatesResources.activity"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.activity(props: StatesActivityArnProps)
```

Builds an ARN for the activity resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.states.StatesResources.activity.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.states.StatesActivityArnProps">StatesActivityArnProps</a>

---

##### `execution` <a name="execution" id="@cdk_utils/iam.states.StatesResources.execution"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.execution(props: StatesExecutionArnProps)
```

Builds an ARN for the execution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.states.StatesResources.execution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.states.StatesExecutionArnProps">StatesExecutionArnProps</a>

---

##### `express` <a name="express" id="@cdk_utils/iam.states.StatesResources.express"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.express(props: StatesExpressArnProps)
```

Builds an ARN for the express resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.states.StatesResources.express.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.states.StatesExpressArnProps">StatesExpressArnProps</a>

---

##### `isValidActivityArn` <a name="isValidActivityArn" id="@cdk_utils/iam.states.StatesResources.isValidActivityArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.isValidActivityArn(arn: string)
```

Validates whether a string is a valid ARN for the activity resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.isValidActivityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExecutionArn` <a name="isValidExecutionArn" id="@cdk_utils/iam.states.StatesResources.isValidExecutionArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.isValidExecutionArn(arn: string)
```

Validates whether a string is a valid ARN for the execution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.isValidExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExpressArn` <a name="isValidExpressArn" id="@cdk_utils/iam.states.StatesResources.isValidExpressArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.isValidExpressArn(arn: string)
```

Validates whether a string is a valid ARN for the express resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.isValidExpressArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLabelledExecutionArn` <a name="isValidLabelledExecutionArn" id="@cdk_utils/iam.states.StatesResources.isValidLabelledExecutionArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.isValidLabelledExecutionArn(arn: string)
```

Validates whether a string is a valid ARN for the labelled execution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.isValidLabelledExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLabelledExpressArn` <a name="isValidLabelledExpressArn" id="@cdk_utils/iam.states.StatesResources.isValidLabelledExpressArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.isValidLabelledExpressArn(arn: string)
```

Validates whether a string is a valid ARN for the labelled express resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.isValidLabelledExpressArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMaprunArn` <a name="isValidMaprunArn" id="@cdk_utils/iam.states.StatesResources.isValidMaprunArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.isValidMaprunArn(arn: string)
```

Validates whether a string is a valid ARN for the maprun resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.isValidMaprunArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStatemachinealiasArn` <a name="isValidStatemachinealiasArn" id="@cdk_utils/iam.states.StatesResources.isValidStatemachinealiasArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.isValidStatemachinealiasArn(arn: string)
```

Validates whether a string is a valid ARN for the statemachinealias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.isValidStatemachinealiasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStatemachineArn` <a name="isValidStatemachineArn" id="@cdk_utils/iam.states.StatesResources.isValidStatemachineArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.isValidStatemachineArn(arn: string)
```

Validates whether a string is a valid ARN for the statemachine resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.isValidStatemachineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStatemachineversionArn` <a name="isValidStatemachineversionArn" id="@cdk_utils/iam.states.StatesResources.isValidStatemachineversionArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.isValidStatemachineversionArn(arn: string)
```

Validates whether a string is a valid ARN for the statemachineversion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.isValidStatemachineversionArn.parameter.arn"></a>

- *Type:* string

---

##### `labelledExecution` <a name="labelledExecution" id="@cdk_utils/iam.states.StatesResources.labelledExecution"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.labelledExecution(props: StatesLabelledExecutionArnProps)
```

Builds an ARN for the labelled execution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.states.StatesResources.labelledExecution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.states.StatesLabelledExecutionArnProps">StatesLabelledExecutionArnProps</a>

---

##### `labelledExpress` <a name="labelledExpress" id="@cdk_utils/iam.states.StatesResources.labelledExpress"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.labelledExpress(props: StatesLabelledExpressArnProps)
```

Builds an ARN for the labelled express resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.states.StatesResources.labelledExpress.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.states.StatesLabelledExpressArnProps">StatesLabelledExpressArnProps</a>

---

##### `maprun` <a name="maprun" id="@cdk_utils/iam.states.StatesResources.maprun"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.maprun(props: StatesMaprunArnProps)
```

Builds an ARN for the maprun resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.states.StatesResources.maprun.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.states.StatesMaprunArnProps">StatesMaprunArnProps</a>

---

##### `parseActivityArn` <a name="parseActivityArn" id="@cdk_utils/iam.states.StatesResources.parseActivityArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.parseActivityArn(arn: string)
```

Parses a activity ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.parseActivityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExecutionArn` <a name="parseExecutionArn" id="@cdk_utils/iam.states.StatesResources.parseExecutionArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.parseExecutionArn(arn: string)
```

Parses a execution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.parseExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExpressArn` <a name="parseExpressArn" id="@cdk_utils/iam.states.StatesResources.parseExpressArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.parseExpressArn(arn: string)
```

Parses a express ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.parseExpressArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLabelledExecutionArn` <a name="parseLabelledExecutionArn" id="@cdk_utils/iam.states.StatesResources.parseLabelledExecutionArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.parseLabelledExecutionArn(arn: string)
```

Parses a labelled execution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.parseLabelledExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLabelledExpressArn` <a name="parseLabelledExpressArn" id="@cdk_utils/iam.states.StatesResources.parseLabelledExpressArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.parseLabelledExpressArn(arn: string)
```

Parses a labelled express ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.parseLabelledExpressArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMaprunArn` <a name="parseMaprunArn" id="@cdk_utils/iam.states.StatesResources.parseMaprunArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.parseMaprunArn(arn: string)
```

Parses a maprun ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.parseMaprunArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStatemachinealiasArn` <a name="parseStatemachinealiasArn" id="@cdk_utils/iam.states.StatesResources.parseStatemachinealiasArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.parseStatemachinealiasArn(arn: string)
```

Parses a statemachinealias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.parseStatemachinealiasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStatemachineArn` <a name="parseStatemachineArn" id="@cdk_utils/iam.states.StatesResources.parseStatemachineArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.parseStatemachineArn(arn: string)
```

Parses a statemachine ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.parseStatemachineArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStatemachineversionArn` <a name="parseStatemachineversionArn" id="@cdk_utils/iam.states.StatesResources.parseStatemachineversionArn"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.parseStatemachineversionArn(arn: string)
```

Parses a statemachineversion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.states.StatesResources.parseStatemachineversionArn.parameter.arn"></a>

- *Type:* string

---

##### `statemachine` <a name="statemachine" id="@cdk_utils/iam.states.StatesResources.statemachine"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.statemachine(props: StatesStatemachineArnProps)
```

Builds an ARN for the statemachine resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.states.StatesResources.statemachine.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.states.StatesStatemachineArnProps">StatesStatemachineArnProps</a>

---

##### `statemachinealias` <a name="statemachinealias" id="@cdk_utils/iam.states.StatesResources.statemachinealias"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.statemachinealias(props: StatesStatemachinealiasArnProps)
```

Builds an ARN for the statemachinealias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.states.StatesResources.statemachinealias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.states.StatesStatemachinealiasArnProps">StatesStatemachinealiasArnProps</a>

---

##### `statemachineversion` <a name="statemachineversion" id="@cdk_utils/iam.states.StatesResources.statemachineversion"></a>

```typescript
import { states } from '@cdk_utils/iam'

states.StatesResources.statemachineversion(props: StatesStatemachineversionArnProps)
```

Builds an ARN for the statemachineversion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.states.StatesResources.statemachineversion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.states.StatesStatemachineversionArnProps">StatesStatemachineversionArnProps</a>

---




