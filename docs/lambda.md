# `lambda` Submodule <a name="`lambda` Submodule" id="@cdk_utils/iam.lambda"></a>


## Structs <a name="Structs" id="Structs"></a>

### LambdaCapacityProviderArnComponents <a name="LambdaCapacityProviderArnComponents" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnComponents"></a>

Parsed components of a capacityProvider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnComponents.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaCapacityProviderArnComponents: lambda.LambdaCapacityProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCapacityProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCapacityProviderArnComponents.property.capacityProviderName">capacityProviderName</a></code> | <code>string</code> | The CapacityProviderName component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCapacityProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCapacityProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `capacityProviderName`<sup>Required</sup> <a name="capacityProviderName" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnComponents.property.capacityProviderName"></a>

```typescript
public readonly capacityProviderName: string;
```

- *Type:* string

The CapacityProviderName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LambdaCapacityProviderArnProps <a name="LambdaCapacityProviderArnProps" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnProps"></a>

Properties for building a capacityProvider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnProps.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaCapacityProviderArnProps: lambda.LambdaCapacityProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCapacityProviderArnProps.property.capacityProviderName">capacityProviderName</a></code> | <code>string</code> | The CapacityProviderName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCapacityProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCapacityProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCapacityProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `capacityProviderName`<sup>Required</sup> <a name="capacityProviderName" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnProps.property.capacityProviderName"></a>

```typescript
public readonly capacityProviderName: string;
```

- *Type:* string

The CapacityProviderName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaCapacityProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LambdaCodeSigningConfigArnComponents <a name="LambdaCodeSigningConfigArnComponents" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnComponents"></a>

Parsed components of a code signing config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnComponents.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaCodeSigningConfigArnComponents: lambda.LambdaCodeSigningConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnComponents.property.codeSigningConfigId">codeSigningConfigId</a></code> | <code>string</code> | The CodeSigningConfigId component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `codeSigningConfigId`<sup>Required</sup> <a name="codeSigningConfigId" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnComponents.property.codeSigningConfigId"></a>

```typescript
public readonly codeSigningConfigId: string;
```

- *Type:* string

The CodeSigningConfigId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LambdaCodeSigningConfigArnProps <a name="LambdaCodeSigningConfigArnProps" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnProps"></a>

Properties for building a code signing config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnProps.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaCodeSigningConfigArnProps: lambda.LambdaCodeSigningConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnProps.property.codeSigningConfigId">codeSigningConfigId</a></code> | <code>string</code> | The CodeSigningConfigId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `codeSigningConfigId`<sup>Required</sup> <a name="codeSigningConfigId" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnProps.property.codeSigningConfigId"></a>

```typescript
public readonly codeSigningConfigId: string;
```

- *Type:* string

The CodeSigningConfigId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LambdaDurableExecutionArnComponents <a name="LambdaDurableExecutionArnComponents" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents"></a>

Parsed components of a durable execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaDurableExecutionArnComponents: lambda.LambdaDurableExecutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.executionName">executionName</a></code> | <code>string</code> | The ExecutionName component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.functionName">functionName</a></code> | <code>string</code> | The FunctionName component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.version">version</a></code> | <code>string</code> | The Version component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component.

---

##### `executionName`<sup>Required</sup> <a name="executionName" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.executionName"></a>

```typescript
public readonly executionName: string;
```

- *Type:* string

The ExecutionName component.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The FunctionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnComponents.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component.

---

### LambdaDurableExecutionArnProps <a name="LambdaDurableExecutionArnProps" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps"></a>

Properties for building a durable execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaDurableExecutionArnProps: lambda.LambdaDurableExecutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.executionName">executionName</a></code> | <code>string</code> | The ExecutionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.functionName">functionName</a></code> | <code>string</code> | The FunctionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.version">version</a></code> | <code>string</code> | The Version component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component of the ARN.

---

##### `executionName`<sup>Required</sup> <a name="executionName" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.executionName"></a>

```typescript
public readonly executionName: string;
```

- *Type:* string

The ExecutionName component of the ARN.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The FunctionName component of the ARN.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LambdaEventSourceMappingArnComponents <a name="LambdaEventSourceMappingArnComponents" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnComponents"></a>

Parsed components of a eventSourceMapping ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnComponents.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaEventSourceMappingArnComponents: lambda.LambdaEventSourceMappingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaEventSourceMappingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaEventSourceMappingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaEventSourceMappingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaEventSourceMappingArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### LambdaEventSourceMappingArnProps <a name="LambdaEventSourceMappingArnProps" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnProps"></a>

Properties for building a eventSourceMapping ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnProps.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaEventSourceMappingArnProps: lambda.LambdaEventSourceMappingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaEventSourceMappingArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaEventSourceMappingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaEventSourceMappingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaEventSourceMappingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaEventSourceMappingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LambdaFunctionAliasArnComponents <a name="LambdaFunctionAliasArnComponents" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents"></a>

Parsed components of a function alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaFunctionAliasArnComponents: lambda.LambdaFunctionAliasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents.property.alias">alias</a></code> | <code>string</code> | The Alias component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents.property.functionName">functionName</a></code> | <code>string</code> | The FunctionName component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The Alias component.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The FunctionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LambdaFunctionAliasArnProps <a name="LambdaFunctionAliasArnProps" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps"></a>

Properties for building a function alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaFunctionAliasArnProps: lambda.LambdaFunctionAliasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps.property.alias">alias</a></code> | <code>string</code> | The Alias component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps.property.functionName">functionName</a></code> | <code>string</code> | The FunctionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The Alias component of the ARN.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The FunctionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LambdaFunctionArnComponents <a name="LambdaFunctionArnComponents" id="@cdk_utils/iam.lambda.LambdaFunctionArnComponents"></a>

Parsed components of a function ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaFunctionArnComponents.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaFunctionArnComponents: lambda.LambdaFunctionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionArnComponents.property.functionName">functionName</a></code> | <code>string</code> | The FunctionName component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaFunctionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdk_utils/iam.lambda.LambdaFunctionArnComponents.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The FunctionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaFunctionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaFunctionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LambdaFunctionArnProps <a name="LambdaFunctionArnProps" id="@cdk_utils/iam.lambda.LambdaFunctionArnProps"></a>

Properties for building a function ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaFunctionArnProps.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaFunctionArnProps: lambda.LambdaFunctionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionArnProps.property.functionName">functionName</a></code> | <code>string</code> | The FunctionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdk_utils/iam.lambda.LambdaFunctionArnProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The FunctionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaFunctionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaFunctionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaFunctionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LambdaFunctionVersionArnComponents <a name="LambdaFunctionVersionArnComponents" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents"></a>

Parsed components of a function version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaFunctionVersionArnComponents: lambda.LambdaFunctionVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents.property.functionName">functionName</a></code> | <code>string</code> | The FunctionName component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents.property.version">version</a></code> | <code>string</code> | The Version component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The FunctionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnComponents.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component.

---

### LambdaFunctionVersionArnProps <a name="LambdaFunctionVersionArnProps" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps"></a>

Properties for building a function version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaFunctionVersionArnProps: lambda.LambdaFunctionVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps.property.functionName">functionName</a></code> | <code>string</code> | The FunctionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps.property.version">version</a></code> | <code>string</code> | The Version component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The FunctionName component of the ARN.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LambdaLayerArnComponents <a name="LambdaLayerArnComponents" id="@cdk_utils/iam.lambda.LambdaLayerArnComponents"></a>

Parsed components of a layer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaLayerArnComponents.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaLayerArnComponents: lambda.LambdaLayerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerArnComponents.property.layerName">layerName</a></code> | <code>string</code> | The LayerName component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaLayerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdk_utils/iam.lambda.LambdaLayerArnComponents.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

The LayerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaLayerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaLayerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LambdaLayerArnProps <a name="LambdaLayerArnProps" id="@cdk_utils/iam.lambda.LambdaLayerArnProps"></a>

Properties for building a layer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaLayerArnProps.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaLayerArnProps: lambda.LambdaLayerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerArnProps.property.layerName">layerName</a></code> | <code>string</code> | The LayerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdk_utils/iam.lambda.LambdaLayerArnProps.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

The LayerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaLayerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaLayerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaLayerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LambdaLayerVersionArnComponents <a name="LambdaLayerVersionArnComponents" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents"></a>

Parsed components of a layerVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaLayerVersionArnComponents: lambda.LambdaLayerVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents.property.layerName">layerName</a></code> | <code>string</code> | The LayerName component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents.property.layerVersion">layerVersion</a></code> | <code>string</code> | The LayerVersion component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

The LayerName component.

---

##### `layerVersion`<sup>Required</sup> <a name="layerVersion" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents.property.layerVersion"></a>

```typescript
public readonly layerVersion: string;
```

- *Type:* string

The LayerVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LambdaLayerVersionArnProps <a name="LambdaLayerVersionArnProps" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnProps"></a>

Properties for building a layerVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnProps.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaLayerVersionArnProps: lambda.LambdaLayerVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerVersionArnProps.property.layerName">layerName</a></code> | <code>string</code> | The LayerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerVersionArnProps.property.layerVersion">layerVersion</a></code> | <code>string</code> | The LayerVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaLayerVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnProps.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

The LayerName component of the ARN.

---

##### `layerVersion`<sup>Required</sup> <a name="layerVersion" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnProps.property.layerVersion"></a>

```typescript
public readonly layerVersion: string;
```

- *Type:* string

The LayerVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaLayerVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LambdaMicrovmImageArnComponents <a name="LambdaMicrovmImageArnComponents" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnComponents"></a>

Parsed components of a microvmImage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnComponents.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaMicrovmImageArnComponents: lambda.LambdaMicrovmImageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaMicrovmImageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaMicrovmImageArnComponents.property.microvmImageName">microvmImageName</a></code> | <code>string</code> | The MicrovmImageName component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaMicrovmImageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaMicrovmImageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `microvmImageName`<sup>Required</sup> <a name="microvmImageName" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnComponents.property.microvmImageName"></a>

```typescript
public readonly microvmImageName: string;
```

- *Type:* string

The MicrovmImageName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LambdaMicrovmImageArnProps <a name="LambdaMicrovmImageArnProps" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnProps"></a>

Properties for building a microvmImage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnProps.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaMicrovmImageArnProps: lambda.LambdaMicrovmImageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaMicrovmImageArnProps.property.microvmImageName">microvmImageName</a></code> | <code>string</code> | The MicrovmImageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaMicrovmImageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaMicrovmImageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaMicrovmImageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `microvmImageName`<sup>Required</sup> <a name="microvmImageName" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnProps.property.microvmImageName"></a>

```typescript
public readonly microvmImageName: string;
```

- *Type:* string

The MicrovmImageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaMicrovmImageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LambdaNetworkConnectorArnComponents <a name="LambdaNetworkConnectorArnComponents" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnComponents"></a>

Parsed components of a networkConnector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnComponents.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaNetworkConnectorArnComponents: lambda.LambdaNetworkConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaNetworkConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaNetworkConnectorArnComponents.property.networkConnectorId">networkConnectorId</a></code> | <code>string</code> | The NetworkConnectorId component. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaNetworkConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaNetworkConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkConnectorId`<sup>Required</sup> <a name="networkConnectorId" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnComponents.property.networkConnectorId"></a>

```typescript
public readonly networkConnectorId: string;
```

- *Type:* string

The NetworkConnectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LambdaNetworkConnectorArnProps <a name="LambdaNetworkConnectorArnProps" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnProps"></a>

Properties for building a networkConnector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnProps.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

const lambdaNetworkConnectorArnProps: lambda.LambdaNetworkConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaNetworkConnectorArnProps.property.networkConnectorId">networkConnectorId</a></code> | <code>string</code> | The NetworkConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaNetworkConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaNetworkConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaNetworkConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkConnectorId`<sup>Required</sup> <a name="networkConnectorId" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnProps.property.networkConnectorId"></a>

```typescript
public readonly networkConnectorId: string;
```

- *Type:* string

The NetworkConnectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lambda.LambdaNetworkConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaActions <a name="LambdaActions" id="@cdk_utils/iam.lambda.LambdaActions"></a>

IAM action constants for the lambda service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lambda.LambdaActions.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

new lambda.LambdaActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] lambda:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetAlias">actionGetAlias</a></code> | <code>string</code> | [Read] lambda:GetAlias. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetCapacityProvider">actionGetCapacityProvider</a></code> | <code>string</code> | [Read] lambda:GetCapacityProvider. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetCodeSigningConfig">actionGetCodeSigningConfig</a></code> | <code>string</code> | [Read] lambda:GetCodeSigningConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetDurableExecution">actionGetDurableExecution</a></code> | <code>string</code> | [Read] lambda:GetDurableExecution. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetDurableExecutionHistory">actionGetDurableExecutionHistory</a></code> | <code>string</code> | [Read] lambda:GetDurableExecutionHistory. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetDurableExecutionState">actionGetDurableExecutionState</a></code> | <code>string</code> | [Read] lambda:GetDurableExecutionState. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetEventSourceMapping">actionGetEventSourceMapping</a></code> | <code>string</code> | [Read] lambda:GetEventSourceMapping. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunction">actionGetFunction</a></code> | <code>string</code> | [Read] lambda:GetFunction. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionCodeSigningConfig">actionGetFunctionCodeSigningConfig</a></code> | <code>string</code> | [Read] lambda:GetFunctionCodeSigningConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionConcurrency">actionGetFunctionConcurrency</a></code> | <code>string</code> | [Read] lambda:GetFunctionConcurrency. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionConfiguration">actionGetFunctionConfiguration</a></code> | <code>string</code> | [Read] lambda:GetFunctionConfiguration. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionEventInvokeConfig">actionGetFunctionEventInvokeConfig</a></code> | <code>string</code> | [Read] lambda:GetFunctionEventInvokeConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionRecursionConfig">actionGetFunctionRecursionConfig</a></code> | <code>string</code> | [Read] lambda:GetFunctionRecursionConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionScalingConfig">actionGetFunctionScalingConfig</a></code> | <code>string</code> | [Read] lambda:GetFunctionScalingConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionUrlConfig">actionGetFunctionUrlConfig</a></code> | <code>string</code> | [Read] lambda:GetFunctionUrlConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetLayerVersion">actionGetLayerVersion</a></code> | <code>string</code> | [Read] lambda:GetLayerVersion. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetLayerVersionPolicy">actionGetLayerVersionPolicy</a></code> | <code>string</code> | [Read] lambda:GetLayerVersionPolicy. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetMicrovm">actionGetMicrovm</a></code> | <code>string</code> | [Read] lambda:GetMicrovm. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetMicrovmImage">actionGetMicrovmImage</a></code> | <code>string</code> | [Read] lambda:GetMicrovmImage. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetMicrovmImageBuild">actionGetMicrovmImageBuild</a></code> | <code>string</code> | [Read] lambda:GetMicrovmImageBuild. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetMicrovmImageVersion">actionGetMicrovmImageVersion</a></code> | <code>string</code> | [Read] lambda:GetMicrovmImageVersion. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetNetworkConnector">actionGetNetworkConnector</a></code> | <code>string</code> | [Read] lambda:GetNetworkConnector. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] lambda:GetPolicy. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetProvisionedConcurrencyConfig">actionGetProvisionedConcurrencyConfig</a></code> | <code>string</code> | [Read] lambda:GetProvisionedConcurrencyConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.actionGetRuntimeManagementConfig">actionGetRuntimeManagementConfig</a></code> | <code>string</code> | [Read] lambda:GetRuntimeManagementConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.AddLayerVersionPermission">AddLayerVersionPermission</a></code> | <code>string</code> | [PermissionManagement] lambda:AddLayerVersionPermission. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.AddPermission">AddPermission</a></code> | <code>string</code> | [PermissionManagement] lambda:AddPermission. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.CheckpointDurableExecution">CheckpointDurableExecution</a></code> | <code>string</code> | [Write] lambda:CheckpointDurableExecution. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ConnectMicrovm">ConnectMicrovm</a></code> | <code>string</code> | [Write] lambda:ConnectMicrovm. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.CreateAlias">CreateAlias</a></code> | <code>string</code> | [Write] lambda:CreateAlias. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.CreateCapacityProvider">CreateCapacityProvider</a></code> | <code>string</code> | [Write] lambda:CreateCapacityProvider. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.CreateCodeSigningConfig">CreateCodeSigningConfig</a></code> | <code>string</code> | [Write] lambda:CreateCodeSigningConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.CreateEventSourceMapping">CreateEventSourceMapping</a></code> | <code>string</code> | [Write] lambda:CreateEventSourceMapping. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.CreateFunction">CreateFunction</a></code> | <code>string</code> | [Write] lambda:CreateFunction. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.CreateFunctionUrlConfig">CreateFunctionUrlConfig</a></code> | <code>string</code> | [Write] lambda:CreateFunctionUrlConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.CreateMicrovmAuthToken">CreateMicrovmAuthToken</a></code> | <code>string</code> | [Write] lambda:CreateMicrovmAuthToken. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.CreateMicrovmImage">CreateMicrovmImage</a></code> | <code>string</code> | [Write] lambda:CreateMicrovmImage. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.CreateMicrovmShellAuthToken">CreateMicrovmShellAuthToken</a></code> | <code>string</code> | [Write] lambda:CreateMicrovmShellAuthToken. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.CreateNetworkConnector">CreateNetworkConnector</a></code> | <code>string</code> | [Write] lambda:CreateNetworkConnector. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteAlias">DeleteAlias</a></code> | <code>string</code> | [Write] lambda:DeleteAlias. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteCapacityProvider">DeleteCapacityProvider</a></code> | <code>string</code> | [Write] lambda:DeleteCapacityProvider. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteCodeSigningConfig">DeleteCodeSigningConfig</a></code> | <code>string</code> | [Write] lambda:DeleteCodeSigningConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteEventSourceMapping">DeleteEventSourceMapping</a></code> | <code>string</code> | [Write] lambda:DeleteEventSourceMapping. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteFunction">DeleteFunction</a></code> | <code>string</code> | [Write] lambda:DeleteFunction. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteFunctionCodeSigningConfig">DeleteFunctionCodeSigningConfig</a></code> | <code>string</code> | [Write] lambda:DeleteFunctionCodeSigningConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteFunctionConcurrency">DeleteFunctionConcurrency</a></code> | <code>string</code> | [Write] lambda:DeleteFunctionConcurrency. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteFunctionEventInvokeConfig">DeleteFunctionEventInvokeConfig</a></code> | <code>string</code> | [Write] lambda:DeleteFunctionEventInvokeConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteFunctionUrlConfig">DeleteFunctionUrlConfig</a></code> | <code>string</code> | [Write] lambda:DeleteFunctionUrlConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteLayerVersion">DeleteLayerVersion</a></code> | <code>string</code> | [Write] lambda:DeleteLayerVersion. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteMicrovmImage">DeleteMicrovmImage</a></code> | <code>string</code> | [Write] lambda:DeleteMicrovmImage. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteMicrovmImageVersion">DeleteMicrovmImageVersion</a></code> | <code>string</code> | [Write] lambda:DeleteMicrovmImageVersion. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteNetworkConnector">DeleteNetworkConnector</a></code> | <code>string</code> | [Write] lambda:DeleteNetworkConnector. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DeleteProvisionedConcurrencyConfig">DeleteProvisionedConcurrencyConfig</a></code> | <code>string</code> | [Write] lambda:DeleteProvisionedConcurrencyConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.DisableReplication">DisableReplication</a></code> | <code>string</code> | [PermissionManagement] lambda:DisableReplication. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.EnableReplication">EnableReplication</a></code> | <code>string</code> | [PermissionManagement] lambda:EnableReplication. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.InvokeAsync">InvokeAsync</a></code> | <code>string</code> | [Write] lambda:InvokeAsync. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.InvokeFunction">InvokeFunction</a></code> | <code>string</code> | [Write] lambda:InvokeFunction. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.InvokeFunctionUrl">InvokeFunctionUrl</a></code> | <code>string</code> | [Write] lambda:InvokeFunctionUrl. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListAliases">ListAliases</a></code> | <code>string</code> | [List] lambda:ListAliases. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListCapacityProviders">ListCapacityProviders</a></code> | <code>string</code> | [List] lambda:ListCapacityProviders. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListCodeSigningConfigs">ListCodeSigningConfigs</a></code> | <code>string</code> | [List] lambda:ListCodeSigningConfigs. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListDurableExecutionsByFunction">ListDurableExecutionsByFunction</a></code> | <code>string</code> | [List] lambda:ListDurableExecutionsByFunction. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListEventSourceMappings">ListEventSourceMappings</a></code> | <code>string</code> | [List] lambda:ListEventSourceMappings. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListFunctionEventInvokeConfigs">ListFunctionEventInvokeConfigs</a></code> | <code>string</code> | [List] lambda:ListFunctionEventInvokeConfigs. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListFunctions">ListFunctions</a></code> | <code>string</code> | [List] lambda:ListFunctions. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListFunctionsByCodeSigningConfig">ListFunctionsByCodeSigningConfig</a></code> | <code>string</code> | [List] lambda:ListFunctionsByCodeSigningConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListFunctionUrlConfigs">ListFunctionUrlConfigs</a></code> | <code>string</code> | [List] lambda:ListFunctionUrlConfigs. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListFunctionVersionsByCapacityProvider">ListFunctionVersionsByCapacityProvider</a></code> | <code>string</code> | [List] lambda:ListFunctionVersionsByCapacityProvider. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListLayers">ListLayers</a></code> | <code>string</code> | [List] lambda:ListLayers. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListLayerVersions">ListLayerVersions</a></code> | <code>string</code> | [List] lambda:ListLayerVersions. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListManagedMicrovmImages">ListManagedMicrovmImages</a></code> | <code>string</code> | [List] lambda:ListManagedMicrovmImages. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListManagedMicrovmImageVersions">ListManagedMicrovmImageVersions</a></code> | <code>string</code> | [List] lambda:ListManagedMicrovmImageVersions. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListMicrovmImageBuilds">ListMicrovmImageBuilds</a></code> | <code>string</code> | [List] lambda:ListMicrovmImageBuilds. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListMicrovmImages">ListMicrovmImages</a></code> | <code>string</code> | [List] lambda:ListMicrovmImages. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListMicrovmImageVersions">ListMicrovmImageVersions</a></code> | <code>string</code> | [List] lambda:ListMicrovmImageVersions. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListMicrovms">ListMicrovms</a></code> | <code>string</code> | [List] lambda:ListMicrovms. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListNetworkConnectors">ListNetworkConnectors</a></code> | <code>string</code> | [List] lambda:ListNetworkConnectors. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListProvisionedConcurrencyConfigs">ListProvisionedConcurrencyConfigs</a></code> | <code>string</code> | [List] lambda:ListProvisionedConcurrencyConfigs. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListTags">ListTags</a></code> | <code>string</code> | [Read] lambda:ListTags. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ListVersionsByFunction">ListVersionsByFunction</a></code> | <code>string</code> | [List] lambda:ListVersionsByFunction. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.PassCapacityProvider">PassCapacityProvider</a></code> | <code>string</code> | [Write] lambda:PassCapacityProvider. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.PassNetworkConnector">PassNetworkConnector</a></code> | <code>string</code> | [Write] lambda:PassNetworkConnector. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.PublishLayerVersion">PublishLayerVersion</a></code> | <code>string</code> | [Write] lambda:PublishLayerVersion. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.PublishVersion">PublishVersion</a></code> | <code>string</code> | [Write] lambda:PublishVersion. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.PutFunctionCodeSigningConfig">PutFunctionCodeSigningConfig</a></code> | <code>string</code> | [Write] lambda:PutFunctionCodeSigningConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.PutFunctionConcurrency">PutFunctionConcurrency</a></code> | <code>string</code> | [Write] lambda:PutFunctionConcurrency. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.PutFunctionEventInvokeConfig">PutFunctionEventInvokeConfig</a></code> | <code>string</code> | [Write] lambda:PutFunctionEventInvokeConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.PutFunctionRecursionConfig">PutFunctionRecursionConfig</a></code> | <code>string</code> | [Write] lambda:PutFunctionRecursionConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.PutFunctionScalingConfig">PutFunctionScalingConfig</a></code> | <code>string</code> | [Write] lambda:PutFunctionScalingConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.PutProvisionedConcurrencyConfig">PutProvisionedConcurrencyConfig</a></code> | <code>string</code> | [Write] lambda:PutProvisionedConcurrencyConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.PutRuntimeManagementConfig">PutRuntimeManagementConfig</a></code> | <code>string</code> | [Write] lambda:PutRuntimeManagementConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.RemoveLayerVersionPermission">RemoveLayerVersionPermission</a></code> | <code>string</code> | [PermissionManagement] lambda:RemoveLayerVersionPermission. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.RemovePermission">RemovePermission</a></code> | <code>string</code> | [PermissionManagement] lambda:RemovePermission. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.ResumeMicrovm">ResumeMicrovm</a></code> | <code>string</code> | [Write] lambda:ResumeMicrovm. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.RunMicrovm">RunMicrovm</a></code> | <code>string</code> | [Write] lambda:RunMicrovm. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.SendDurableExecutionCallbackFailure">SendDurableExecutionCallbackFailure</a></code> | <code>string</code> | [Write] lambda:SendDurableExecutionCallbackFailure. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.SendDurableExecutionCallbackHeartbeat">SendDurableExecutionCallbackHeartbeat</a></code> | <code>string</code> | [Write] lambda:SendDurableExecutionCallbackHeartbeat. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.SendDurableExecutionCallbackSuccess">SendDurableExecutionCallbackSuccess</a></code> | <code>string</code> | [Write] lambda:SendDurableExecutionCallbackSuccess. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.StopDurableExecution">StopDurableExecution</a></code> | <code>string</code> | [Write] lambda:StopDurableExecution. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.SuspendMicrovm">SuspendMicrovm</a></code> | <code>string</code> | [Write] lambda:SuspendMicrovm. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] lambda:TagResource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.TerminateMicrovm">TerminateMicrovm</a></code> | <code>string</code> | [Write] lambda:TerminateMicrovm. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] lambda:UntagResource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateAlias">UpdateAlias</a></code> | <code>string</code> | [Write] lambda:UpdateAlias. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateCapacityProvider">UpdateCapacityProvider</a></code> | <code>string</code> | [Write] lambda:UpdateCapacityProvider. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateCodeSigningConfig">UpdateCodeSigningConfig</a></code> | <code>string</code> | [Write] lambda:UpdateCodeSigningConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateEventSourceMapping">UpdateEventSourceMapping</a></code> | <code>string</code> | [Write] lambda:UpdateEventSourceMapping. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateFunctionCode">UpdateFunctionCode</a></code> | <code>string</code> | [Write] lambda:UpdateFunctionCode. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateFunctionCodeSigningConfig">UpdateFunctionCodeSigningConfig</a></code> | <code>string</code> | [Write] lambda:UpdateFunctionCodeSigningConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateFunctionConfiguration">UpdateFunctionConfiguration</a></code> | <code>string</code> | [Write] lambda:UpdateFunctionConfiguration. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateFunctionEventInvokeConfig">UpdateFunctionEventInvokeConfig</a></code> | <code>string</code> | [Write] lambda:UpdateFunctionEventInvokeConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateFunctionUrlConfig">UpdateFunctionUrlConfig</a></code> | <code>string</code> | [Write] lambda:UpdateFunctionUrlConfig. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateMicrovmImage">UpdateMicrovmImage</a></code> | <code>string</code> | [Write] lambda:UpdateMicrovmImage. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateMicrovmImageVersion">UpdateMicrovmImageVersion</a></code> | <code>string</code> | [Write] lambda:UpdateMicrovmImageVersion. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaActions.property.UpdateNetworkConnector">UpdateNetworkConnector</a></code> | <code>string</code> | [Write] lambda:UpdateNetworkConnector. |

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] lambda:GetAccountSettings.

---

##### `actionGetAlias`<sup>Required</sup> <a name="actionGetAlias" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetAlias"></a>

```typescript
public readonly actionGetAlias: string;
```

- *Type:* string

[Read] lambda:GetAlias.

---

##### `actionGetCapacityProvider`<sup>Required</sup> <a name="actionGetCapacityProvider" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetCapacityProvider"></a>

```typescript
public readonly actionGetCapacityProvider: string;
```

- *Type:* string

[Read] lambda:GetCapacityProvider.

---

##### `actionGetCodeSigningConfig`<sup>Required</sup> <a name="actionGetCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetCodeSigningConfig"></a>

```typescript
public readonly actionGetCodeSigningConfig: string;
```

- *Type:* string

[Read] lambda:GetCodeSigningConfig.

---

##### `actionGetDurableExecution`<sup>Required</sup> <a name="actionGetDurableExecution" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetDurableExecution"></a>

```typescript
public readonly actionGetDurableExecution: string;
```

- *Type:* string

[Read] lambda:GetDurableExecution.

---

##### `actionGetDurableExecutionHistory`<sup>Required</sup> <a name="actionGetDurableExecutionHistory" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetDurableExecutionHistory"></a>

```typescript
public readonly actionGetDurableExecutionHistory: string;
```

- *Type:* string

[Read] lambda:GetDurableExecutionHistory.

---

##### `actionGetDurableExecutionState`<sup>Required</sup> <a name="actionGetDurableExecutionState" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetDurableExecutionState"></a>

```typescript
public readonly actionGetDurableExecutionState: string;
```

- *Type:* string

[Read] lambda:GetDurableExecutionState.

---

##### `actionGetEventSourceMapping`<sup>Required</sup> <a name="actionGetEventSourceMapping" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetEventSourceMapping"></a>

```typescript
public readonly actionGetEventSourceMapping: string;
```

- *Type:* string

[Read] lambda:GetEventSourceMapping.

---

##### `actionGetFunction`<sup>Required</sup> <a name="actionGetFunction" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunction"></a>

```typescript
public readonly actionGetFunction: string;
```

- *Type:* string

[Read] lambda:GetFunction.

---

##### `actionGetFunctionCodeSigningConfig`<sup>Required</sup> <a name="actionGetFunctionCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionCodeSigningConfig"></a>

```typescript
public readonly actionGetFunctionCodeSigningConfig: string;
```

- *Type:* string

[Read] lambda:GetFunctionCodeSigningConfig.

---

##### `actionGetFunctionConcurrency`<sup>Required</sup> <a name="actionGetFunctionConcurrency" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionConcurrency"></a>

```typescript
public readonly actionGetFunctionConcurrency: string;
```

- *Type:* string

[Read] lambda:GetFunctionConcurrency.

---

##### `actionGetFunctionConfiguration`<sup>Required</sup> <a name="actionGetFunctionConfiguration" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionConfiguration"></a>

```typescript
public readonly actionGetFunctionConfiguration: string;
```

- *Type:* string

[Read] lambda:GetFunctionConfiguration.

---

##### `actionGetFunctionEventInvokeConfig`<sup>Required</sup> <a name="actionGetFunctionEventInvokeConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionEventInvokeConfig"></a>

```typescript
public readonly actionGetFunctionEventInvokeConfig: string;
```

- *Type:* string

[Read] lambda:GetFunctionEventInvokeConfig.

---

##### `actionGetFunctionRecursionConfig`<sup>Required</sup> <a name="actionGetFunctionRecursionConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionRecursionConfig"></a>

```typescript
public readonly actionGetFunctionRecursionConfig: string;
```

- *Type:* string

[Read] lambda:GetFunctionRecursionConfig.

---

##### `actionGetFunctionScalingConfig`<sup>Required</sup> <a name="actionGetFunctionScalingConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionScalingConfig"></a>

```typescript
public readonly actionGetFunctionScalingConfig: string;
```

- *Type:* string

[Read] lambda:GetFunctionScalingConfig.

---

##### `actionGetFunctionUrlConfig`<sup>Required</sup> <a name="actionGetFunctionUrlConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetFunctionUrlConfig"></a>

```typescript
public readonly actionGetFunctionUrlConfig: string;
```

- *Type:* string

[Read] lambda:GetFunctionUrlConfig.

---

##### `actionGetLayerVersion`<sup>Required</sup> <a name="actionGetLayerVersion" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetLayerVersion"></a>

```typescript
public readonly actionGetLayerVersion: string;
```

- *Type:* string

[Read] lambda:GetLayerVersion.

---

##### `actionGetLayerVersionPolicy`<sup>Required</sup> <a name="actionGetLayerVersionPolicy" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetLayerVersionPolicy"></a>

```typescript
public readonly actionGetLayerVersionPolicy: string;
```

- *Type:* string

[Read] lambda:GetLayerVersionPolicy.

---

##### `actionGetMicrovm`<sup>Required</sup> <a name="actionGetMicrovm" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetMicrovm"></a>

```typescript
public readonly actionGetMicrovm: string;
```

- *Type:* string

[Read] lambda:GetMicrovm.

---

##### `actionGetMicrovmImage`<sup>Required</sup> <a name="actionGetMicrovmImage" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetMicrovmImage"></a>

```typescript
public readonly actionGetMicrovmImage: string;
```

- *Type:* string

[Read] lambda:GetMicrovmImage.

---

##### `actionGetMicrovmImageBuild`<sup>Required</sup> <a name="actionGetMicrovmImageBuild" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetMicrovmImageBuild"></a>

```typescript
public readonly actionGetMicrovmImageBuild: string;
```

- *Type:* string

[Read] lambda:GetMicrovmImageBuild.

---

##### `actionGetMicrovmImageVersion`<sup>Required</sup> <a name="actionGetMicrovmImageVersion" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetMicrovmImageVersion"></a>

```typescript
public readonly actionGetMicrovmImageVersion: string;
```

- *Type:* string

[Read] lambda:GetMicrovmImageVersion.

---

##### `actionGetNetworkConnector`<sup>Required</sup> <a name="actionGetNetworkConnector" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetNetworkConnector"></a>

```typescript
public readonly actionGetNetworkConnector: string;
```

- *Type:* string

[Read] lambda:GetNetworkConnector.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] lambda:GetPolicy.

---

##### `actionGetProvisionedConcurrencyConfig`<sup>Required</sup> <a name="actionGetProvisionedConcurrencyConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetProvisionedConcurrencyConfig"></a>

```typescript
public readonly actionGetProvisionedConcurrencyConfig: string;
```

- *Type:* string

[Read] lambda:GetProvisionedConcurrencyConfig.

---

##### `actionGetRuntimeManagementConfig`<sup>Required</sup> <a name="actionGetRuntimeManagementConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.actionGetRuntimeManagementConfig"></a>

```typescript
public readonly actionGetRuntimeManagementConfig: string;
```

- *Type:* string

[Read] lambda:GetRuntimeManagementConfig.

---

##### `AddLayerVersionPermission`<sup>Required</sup> <a name="AddLayerVersionPermission" id="@cdk_utils/iam.lambda.LambdaActions.property.AddLayerVersionPermission"></a>

```typescript
public readonly AddLayerVersionPermission: string;
```

- *Type:* string

[PermissionManagement] lambda:AddLayerVersionPermission.

---

##### `AddPermission`<sup>Required</sup> <a name="AddPermission" id="@cdk_utils/iam.lambda.LambdaActions.property.AddPermission"></a>

```typescript
public readonly AddPermission: string;
```

- *Type:* string

[PermissionManagement] lambda:AddPermission.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.lambda.LambdaActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.lambda.LambdaActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.lambda.LambdaActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.lambda.LambdaActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.lambda.LambdaActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CheckpointDurableExecution`<sup>Required</sup> <a name="CheckpointDurableExecution" id="@cdk_utils/iam.lambda.LambdaActions.property.CheckpointDurableExecution"></a>

```typescript
public readonly CheckpointDurableExecution: string;
```

- *Type:* string

[Write] lambda:CheckpointDurableExecution.

---

##### `ConnectMicrovm`<sup>Required</sup> <a name="ConnectMicrovm" id="@cdk_utils/iam.lambda.LambdaActions.property.ConnectMicrovm"></a>

```typescript
public readonly ConnectMicrovm: string;
```

- *Type:* string

[Write] lambda:ConnectMicrovm.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.lambda.LambdaActions.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string;
```

- *Type:* string

[Write] lambda:CreateAlias.

---

##### `CreateCapacityProvider`<sup>Required</sup> <a name="CreateCapacityProvider" id="@cdk_utils/iam.lambda.LambdaActions.property.CreateCapacityProvider"></a>

```typescript
public readonly CreateCapacityProvider: string;
```

- *Type:* string

[Write] lambda:CreateCapacityProvider.

---

##### `CreateCodeSigningConfig`<sup>Required</sup> <a name="CreateCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.CreateCodeSigningConfig"></a>

```typescript
public readonly CreateCodeSigningConfig: string;
```

- *Type:* string

[Write] lambda:CreateCodeSigningConfig.

---

##### `CreateEventSourceMapping`<sup>Required</sup> <a name="CreateEventSourceMapping" id="@cdk_utils/iam.lambda.LambdaActions.property.CreateEventSourceMapping"></a>

```typescript
public readonly CreateEventSourceMapping: string;
```

- *Type:* string

[Write] lambda:CreateEventSourceMapping.

---

##### `CreateFunction`<sup>Required</sup> <a name="CreateFunction" id="@cdk_utils/iam.lambda.LambdaActions.property.CreateFunction"></a>

```typescript
public readonly CreateFunction: string;
```

- *Type:* string

[Write] lambda:CreateFunction.

---

##### `CreateFunctionUrlConfig`<sup>Required</sup> <a name="CreateFunctionUrlConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.CreateFunctionUrlConfig"></a>

```typescript
public readonly CreateFunctionUrlConfig: string;
```

- *Type:* string

[Write] lambda:CreateFunctionUrlConfig.

---

##### `CreateMicrovmAuthToken`<sup>Required</sup> <a name="CreateMicrovmAuthToken" id="@cdk_utils/iam.lambda.LambdaActions.property.CreateMicrovmAuthToken"></a>

```typescript
public readonly CreateMicrovmAuthToken: string;
```

- *Type:* string

[Write] lambda:CreateMicrovmAuthToken.

---

##### `CreateMicrovmImage`<sup>Required</sup> <a name="CreateMicrovmImage" id="@cdk_utils/iam.lambda.LambdaActions.property.CreateMicrovmImage"></a>

```typescript
public readonly CreateMicrovmImage: string;
```

- *Type:* string

[Write] lambda:CreateMicrovmImage.

---

##### `CreateMicrovmShellAuthToken`<sup>Required</sup> <a name="CreateMicrovmShellAuthToken" id="@cdk_utils/iam.lambda.LambdaActions.property.CreateMicrovmShellAuthToken"></a>

```typescript
public readonly CreateMicrovmShellAuthToken: string;
```

- *Type:* string

[Write] lambda:CreateMicrovmShellAuthToken.

---

##### `CreateNetworkConnector`<sup>Required</sup> <a name="CreateNetworkConnector" id="@cdk_utils/iam.lambda.LambdaActions.property.CreateNetworkConnector"></a>

```typescript
public readonly CreateNetworkConnector: string;
```

- *Type:* string

[Write] lambda:CreateNetworkConnector.

---

##### `DeleteAlias`<sup>Required</sup> <a name="DeleteAlias" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteAlias"></a>

```typescript
public readonly DeleteAlias: string;
```

- *Type:* string

[Write] lambda:DeleteAlias.

---

##### `DeleteCapacityProvider`<sup>Required</sup> <a name="DeleteCapacityProvider" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteCapacityProvider"></a>

```typescript
public readonly DeleteCapacityProvider: string;
```

- *Type:* string

[Write] lambda:DeleteCapacityProvider.

---

##### `DeleteCodeSigningConfig`<sup>Required</sup> <a name="DeleteCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteCodeSigningConfig"></a>

```typescript
public readonly DeleteCodeSigningConfig: string;
```

- *Type:* string

[Write] lambda:DeleteCodeSigningConfig.

---

##### `DeleteEventSourceMapping`<sup>Required</sup> <a name="DeleteEventSourceMapping" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteEventSourceMapping"></a>

```typescript
public readonly DeleteEventSourceMapping: string;
```

- *Type:* string

[Write] lambda:DeleteEventSourceMapping.

---

##### `DeleteFunction`<sup>Required</sup> <a name="DeleteFunction" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteFunction"></a>

```typescript
public readonly DeleteFunction: string;
```

- *Type:* string

[Write] lambda:DeleteFunction.

---

##### `DeleteFunctionCodeSigningConfig`<sup>Required</sup> <a name="DeleteFunctionCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteFunctionCodeSigningConfig"></a>

```typescript
public readonly DeleteFunctionCodeSigningConfig: string;
```

- *Type:* string

[Write] lambda:DeleteFunctionCodeSigningConfig.

---

##### `DeleteFunctionConcurrency`<sup>Required</sup> <a name="DeleteFunctionConcurrency" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteFunctionConcurrency"></a>

```typescript
public readonly DeleteFunctionConcurrency: string;
```

- *Type:* string

[Write] lambda:DeleteFunctionConcurrency.

---

##### `DeleteFunctionEventInvokeConfig`<sup>Required</sup> <a name="DeleteFunctionEventInvokeConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteFunctionEventInvokeConfig"></a>

```typescript
public readonly DeleteFunctionEventInvokeConfig: string;
```

- *Type:* string

[Write] lambda:DeleteFunctionEventInvokeConfig.

---

##### `DeleteFunctionUrlConfig`<sup>Required</sup> <a name="DeleteFunctionUrlConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteFunctionUrlConfig"></a>

```typescript
public readonly DeleteFunctionUrlConfig: string;
```

- *Type:* string

[Write] lambda:DeleteFunctionUrlConfig.

---

##### `DeleteLayerVersion`<sup>Required</sup> <a name="DeleteLayerVersion" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteLayerVersion"></a>

```typescript
public readonly DeleteLayerVersion: string;
```

- *Type:* string

[Write] lambda:DeleteLayerVersion.

---

##### `DeleteMicrovmImage`<sup>Required</sup> <a name="DeleteMicrovmImage" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteMicrovmImage"></a>

```typescript
public readonly DeleteMicrovmImage: string;
```

- *Type:* string

[Write] lambda:DeleteMicrovmImage.

---

##### `DeleteMicrovmImageVersion`<sup>Required</sup> <a name="DeleteMicrovmImageVersion" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteMicrovmImageVersion"></a>

```typescript
public readonly DeleteMicrovmImageVersion: string;
```

- *Type:* string

[Write] lambda:DeleteMicrovmImageVersion.

---

##### `DeleteNetworkConnector`<sup>Required</sup> <a name="DeleteNetworkConnector" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteNetworkConnector"></a>

```typescript
public readonly DeleteNetworkConnector: string;
```

- *Type:* string

[Write] lambda:DeleteNetworkConnector.

---

##### `DeleteProvisionedConcurrencyConfig`<sup>Required</sup> <a name="DeleteProvisionedConcurrencyConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.DeleteProvisionedConcurrencyConfig"></a>

```typescript
public readonly DeleteProvisionedConcurrencyConfig: string;
```

- *Type:* string

[Write] lambda:DeleteProvisionedConcurrencyConfig.

---

##### `DisableReplication`<sup>Required</sup> <a name="DisableReplication" id="@cdk_utils/iam.lambda.LambdaActions.property.DisableReplication"></a>

```typescript
public readonly DisableReplication: string;
```

- *Type:* string

[PermissionManagement] lambda:DisableReplication.

---

##### `EnableReplication`<sup>Required</sup> <a name="EnableReplication" id="@cdk_utils/iam.lambda.LambdaActions.property.EnableReplication"></a>

```typescript
public readonly EnableReplication: string;
```

- *Type:* string

[PermissionManagement] lambda:EnableReplication.

---

##### `InvokeAsync`<sup>Required</sup> <a name="InvokeAsync" id="@cdk_utils/iam.lambda.LambdaActions.property.InvokeAsync"></a>

```typescript
public readonly InvokeAsync: string;
```

- *Type:* string

[Write] lambda:InvokeAsync.

---

##### `InvokeFunction`<sup>Required</sup> <a name="InvokeFunction" id="@cdk_utils/iam.lambda.LambdaActions.property.InvokeFunction"></a>

```typescript
public readonly InvokeFunction: string;
```

- *Type:* string

[Write] lambda:InvokeFunction.

---

##### `InvokeFunctionUrl`<sup>Required</sup> <a name="InvokeFunctionUrl" id="@cdk_utils/iam.lambda.LambdaActions.property.InvokeFunctionUrl"></a>

```typescript
public readonly InvokeFunctionUrl: string;
```

- *Type:* string

[Write] lambda:InvokeFunctionUrl.

---

##### `ListAliases`<sup>Required</sup> <a name="ListAliases" id="@cdk_utils/iam.lambda.LambdaActions.property.ListAliases"></a>

```typescript
public readonly ListAliases: string;
```

- *Type:* string

[List] lambda:ListAliases.

---

##### `ListCapacityProviders`<sup>Required</sup> <a name="ListCapacityProviders" id="@cdk_utils/iam.lambda.LambdaActions.property.ListCapacityProviders"></a>

```typescript
public readonly ListCapacityProviders: string;
```

- *Type:* string

[List] lambda:ListCapacityProviders.

---

##### `ListCodeSigningConfigs`<sup>Required</sup> <a name="ListCodeSigningConfigs" id="@cdk_utils/iam.lambda.LambdaActions.property.ListCodeSigningConfigs"></a>

```typescript
public readonly ListCodeSigningConfigs: string;
```

- *Type:* string

[List] lambda:ListCodeSigningConfigs.

---

##### `ListDurableExecutionsByFunction`<sup>Required</sup> <a name="ListDurableExecutionsByFunction" id="@cdk_utils/iam.lambda.LambdaActions.property.ListDurableExecutionsByFunction"></a>

```typescript
public readonly ListDurableExecutionsByFunction: string;
```

- *Type:* string

[List] lambda:ListDurableExecutionsByFunction.

---

##### `ListEventSourceMappings`<sup>Required</sup> <a name="ListEventSourceMappings" id="@cdk_utils/iam.lambda.LambdaActions.property.ListEventSourceMappings"></a>

```typescript
public readonly ListEventSourceMappings: string;
```

- *Type:* string

[List] lambda:ListEventSourceMappings.

---

##### `ListFunctionEventInvokeConfigs`<sup>Required</sup> <a name="ListFunctionEventInvokeConfigs" id="@cdk_utils/iam.lambda.LambdaActions.property.ListFunctionEventInvokeConfigs"></a>

```typescript
public readonly ListFunctionEventInvokeConfigs: string;
```

- *Type:* string

[List] lambda:ListFunctionEventInvokeConfigs.

---

##### `ListFunctions`<sup>Required</sup> <a name="ListFunctions" id="@cdk_utils/iam.lambda.LambdaActions.property.ListFunctions"></a>

```typescript
public readonly ListFunctions: string;
```

- *Type:* string

[List] lambda:ListFunctions.

---

##### `ListFunctionsByCodeSigningConfig`<sup>Required</sup> <a name="ListFunctionsByCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.ListFunctionsByCodeSigningConfig"></a>

```typescript
public readonly ListFunctionsByCodeSigningConfig: string;
```

- *Type:* string

[List] lambda:ListFunctionsByCodeSigningConfig.

---

##### `ListFunctionUrlConfigs`<sup>Required</sup> <a name="ListFunctionUrlConfigs" id="@cdk_utils/iam.lambda.LambdaActions.property.ListFunctionUrlConfigs"></a>

```typescript
public readonly ListFunctionUrlConfigs: string;
```

- *Type:* string

[List] lambda:ListFunctionUrlConfigs.

---

##### `ListFunctionVersionsByCapacityProvider`<sup>Required</sup> <a name="ListFunctionVersionsByCapacityProvider" id="@cdk_utils/iam.lambda.LambdaActions.property.ListFunctionVersionsByCapacityProvider"></a>

```typescript
public readonly ListFunctionVersionsByCapacityProvider: string;
```

- *Type:* string

[List] lambda:ListFunctionVersionsByCapacityProvider.

---

##### `ListLayers`<sup>Required</sup> <a name="ListLayers" id="@cdk_utils/iam.lambda.LambdaActions.property.ListLayers"></a>

```typescript
public readonly ListLayers: string;
```

- *Type:* string

[List] lambda:ListLayers.

---

##### `ListLayerVersions`<sup>Required</sup> <a name="ListLayerVersions" id="@cdk_utils/iam.lambda.LambdaActions.property.ListLayerVersions"></a>

```typescript
public readonly ListLayerVersions: string;
```

- *Type:* string

[List] lambda:ListLayerVersions.

---

##### `ListManagedMicrovmImages`<sup>Required</sup> <a name="ListManagedMicrovmImages" id="@cdk_utils/iam.lambda.LambdaActions.property.ListManagedMicrovmImages"></a>

```typescript
public readonly ListManagedMicrovmImages: string;
```

- *Type:* string

[List] lambda:ListManagedMicrovmImages.

---

##### `ListManagedMicrovmImageVersions`<sup>Required</sup> <a name="ListManagedMicrovmImageVersions" id="@cdk_utils/iam.lambda.LambdaActions.property.ListManagedMicrovmImageVersions"></a>

```typescript
public readonly ListManagedMicrovmImageVersions: string;
```

- *Type:* string

[List] lambda:ListManagedMicrovmImageVersions.

---

##### `ListMicrovmImageBuilds`<sup>Required</sup> <a name="ListMicrovmImageBuilds" id="@cdk_utils/iam.lambda.LambdaActions.property.ListMicrovmImageBuilds"></a>

```typescript
public readonly ListMicrovmImageBuilds: string;
```

- *Type:* string

[List] lambda:ListMicrovmImageBuilds.

---

##### `ListMicrovmImages`<sup>Required</sup> <a name="ListMicrovmImages" id="@cdk_utils/iam.lambda.LambdaActions.property.ListMicrovmImages"></a>

```typescript
public readonly ListMicrovmImages: string;
```

- *Type:* string

[List] lambda:ListMicrovmImages.

---

##### `ListMicrovmImageVersions`<sup>Required</sup> <a name="ListMicrovmImageVersions" id="@cdk_utils/iam.lambda.LambdaActions.property.ListMicrovmImageVersions"></a>

```typescript
public readonly ListMicrovmImageVersions: string;
```

- *Type:* string

[List] lambda:ListMicrovmImageVersions.

---

##### `ListMicrovms`<sup>Required</sup> <a name="ListMicrovms" id="@cdk_utils/iam.lambda.LambdaActions.property.ListMicrovms"></a>

```typescript
public readonly ListMicrovms: string;
```

- *Type:* string

[List] lambda:ListMicrovms.

---

##### `ListNetworkConnectors`<sup>Required</sup> <a name="ListNetworkConnectors" id="@cdk_utils/iam.lambda.LambdaActions.property.ListNetworkConnectors"></a>

```typescript
public readonly ListNetworkConnectors: string;
```

- *Type:* string

[List] lambda:ListNetworkConnectors.

---

##### `ListProvisionedConcurrencyConfigs`<sup>Required</sup> <a name="ListProvisionedConcurrencyConfigs" id="@cdk_utils/iam.lambda.LambdaActions.property.ListProvisionedConcurrencyConfigs"></a>

```typescript
public readonly ListProvisionedConcurrencyConfigs: string;
```

- *Type:* string

[List] lambda:ListProvisionedConcurrencyConfigs.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.lambda.LambdaActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[Read] lambda:ListTags.

---

##### `ListVersionsByFunction`<sup>Required</sup> <a name="ListVersionsByFunction" id="@cdk_utils/iam.lambda.LambdaActions.property.ListVersionsByFunction"></a>

```typescript
public readonly ListVersionsByFunction: string;
```

- *Type:* string

[List] lambda:ListVersionsByFunction.

---

##### `PassCapacityProvider`<sup>Required</sup> <a name="PassCapacityProvider" id="@cdk_utils/iam.lambda.LambdaActions.property.PassCapacityProvider"></a>

```typescript
public readonly PassCapacityProvider: string;
```

- *Type:* string

[Write] lambda:PassCapacityProvider.

---

##### `PassNetworkConnector`<sup>Required</sup> <a name="PassNetworkConnector" id="@cdk_utils/iam.lambda.LambdaActions.property.PassNetworkConnector"></a>

```typescript
public readonly PassNetworkConnector: string;
```

- *Type:* string

[Write] lambda:PassNetworkConnector.

---

##### `PublishLayerVersion`<sup>Required</sup> <a name="PublishLayerVersion" id="@cdk_utils/iam.lambda.LambdaActions.property.PublishLayerVersion"></a>

```typescript
public readonly PublishLayerVersion: string;
```

- *Type:* string

[Write] lambda:PublishLayerVersion.

---

##### `PublishVersion`<sup>Required</sup> <a name="PublishVersion" id="@cdk_utils/iam.lambda.LambdaActions.property.PublishVersion"></a>

```typescript
public readonly PublishVersion: string;
```

- *Type:* string

[Write] lambda:PublishVersion.

---

##### `PutFunctionCodeSigningConfig`<sup>Required</sup> <a name="PutFunctionCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.PutFunctionCodeSigningConfig"></a>

```typescript
public readonly PutFunctionCodeSigningConfig: string;
```

- *Type:* string

[Write] lambda:PutFunctionCodeSigningConfig.

---

##### `PutFunctionConcurrency`<sup>Required</sup> <a name="PutFunctionConcurrency" id="@cdk_utils/iam.lambda.LambdaActions.property.PutFunctionConcurrency"></a>

```typescript
public readonly PutFunctionConcurrency: string;
```

- *Type:* string

[Write] lambda:PutFunctionConcurrency.

---

##### `PutFunctionEventInvokeConfig`<sup>Required</sup> <a name="PutFunctionEventInvokeConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.PutFunctionEventInvokeConfig"></a>

```typescript
public readonly PutFunctionEventInvokeConfig: string;
```

- *Type:* string

[Write] lambda:PutFunctionEventInvokeConfig.

---

##### `PutFunctionRecursionConfig`<sup>Required</sup> <a name="PutFunctionRecursionConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.PutFunctionRecursionConfig"></a>

```typescript
public readonly PutFunctionRecursionConfig: string;
```

- *Type:* string

[Write] lambda:PutFunctionRecursionConfig.

---

##### `PutFunctionScalingConfig`<sup>Required</sup> <a name="PutFunctionScalingConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.PutFunctionScalingConfig"></a>

```typescript
public readonly PutFunctionScalingConfig: string;
```

- *Type:* string

[Write] lambda:PutFunctionScalingConfig.

---

##### `PutProvisionedConcurrencyConfig`<sup>Required</sup> <a name="PutProvisionedConcurrencyConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.PutProvisionedConcurrencyConfig"></a>

```typescript
public readonly PutProvisionedConcurrencyConfig: string;
```

- *Type:* string

[Write] lambda:PutProvisionedConcurrencyConfig.

---

##### `PutRuntimeManagementConfig`<sup>Required</sup> <a name="PutRuntimeManagementConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.PutRuntimeManagementConfig"></a>

```typescript
public readonly PutRuntimeManagementConfig: string;
```

- *Type:* string

[Write] lambda:PutRuntimeManagementConfig.

---

##### `RemoveLayerVersionPermission`<sup>Required</sup> <a name="RemoveLayerVersionPermission" id="@cdk_utils/iam.lambda.LambdaActions.property.RemoveLayerVersionPermission"></a>

```typescript
public readonly RemoveLayerVersionPermission: string;
```

- *Type:* string

[PermissionManagement] lambda:RemoveLayerVersionPermission.

---

##### `RemovePermission`<sup>Required</sup> <a name="RemovePermission" id="@cdk_utils/iam.lambda.LambdaActions.property.RemovePermission"></a>

```typescript
public readonly RemovePermission: string;
```

- *Type:* string

[PermissionManagement] lambda:RemovePermission.

---

##### `ResumeMicrovm`<sup>Required</sup> <a name="ResumeMicrovm" id="@cdk_utils/iam.lambda.LambdaActions.property.ResumeMicrovm"></a>

```typescript
public readonly ResumeMicrovm: string;
```

- *Type:* string

[Write] lambda:ResumeMicrovm.

---

##### `RunMicrovm`<sup>Required</sup> <a name="RunMicrovm" id="@cdk_utils/iam.lambda.LambdaActions.property.RunMicrovm"></a>

```typescript
public readonly RunMicrovm: string;
```

- *Type:* string

[Write] lambda:RunMicrovm.

---

##### `SendDurableExecutionCallbackFailure`<sup>Required</sup> <a name="SendDurableExecutionCallbackFailure" id="@cdk_utils/iam.lambda.LambdaActions.property.SendDurableExecutionCallbackFailure"></a>

```typescript
public readonly SendDurableExecutionCallbackFailure: string;
```

- *Type:* string

[Write] lambda:SendDurableExecutionCallbackFailure.

---

##### `SendDurableExecutionCallbackHeartbeat`<sup>Required</sup> <a name="SendDurableExecutionCallbackHeartbeat" id="@cdk_utils/iam.lambda.LambdaActions.property.SendDurableExecutionCallbackHeartbeat"></a>

```typescript
public readonly SendDurableExecutionCallbackHeartbeat: string;
```

- *Type:* string

[Write] lambda:SendDurableExecutionCallbackHeartbeat.

---

##### `SendDurableExecutionCallbackSuccess`<sup>Required</sup> <a name="SendDurableExecutionCallbackSuccess" id="@cdk_utils/iam.lambda.LambdaActions.property.SendDurableExecutionCallbackSuccess"></a>

```typescript
public readonly SendDurableExecutionCallbackSuccess: string;
```

- *Type:* string

[Write] lambda:SendDurableExecutionCallbackSuccess.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.lambda.LambdaActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StopDurableExecution`<sup>Required</sup> <a name="StopDurableExecution" id="@cdk_utils/iam.lambda.LambdaActions.property.StopDurableExecution"></a>

```typescript
public readonly StopDurableExecution: string;
```

- *Type:* string

[Write] lambda:StopDurableExecution.

---

##### `SuspendMicrovm`<sup>Required</sup> <a name="SuspendMicrovm" id="@cdk_utils/iam.lambda.LambdaActions.property.SuspendMicrovm"></a>

```typescript
public readonly SuspendMicrovm: string;
```

- *Type:* string

[Write] lambda:SuspendMicrovm.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.lambda.LambdaActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] lambda:TagResource.

---

##### `TerminateMicrovm`<sup>Required</sup> <a name="TerminateMicrovm" id="@cdk_utils/iam.lambda.LambdaActions.property.TerminateMicrovm"></a>

```typescript
public readonly TerminateMicrovm: string;
```

- *Type:* string

[Write] lambda:TerminateMicrovm.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.lambda.LambdaActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] lambda:UntagResource.

---

##### `UpdateAlias`<sup>Required</sup> <a name="UpdateAlias" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateAlias"></a>

```typescript
public readonly UpdateAlias: string;
```

- *Type:* string

[Write] lambda:UpdateAlias.

---

##### `UpdateCapacityProvider`<sup>Required</sup> <a name="UpdateCapacityProvider" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateCapacityProvider"></a>

```typescript
public readonly UpdateCapacityProvider: string;
```

- *Type:* string

[Write] lambda:UpdateCapacityProvider.

---

##### `UpdateCodeSigningConfig`<sup>Required</sup> <a name="UpdateCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateCodeSigningConfig"></a>

```typescript
public readonly UpdateCodeSigningConfig: string;
```

- *Type:* string

[Write] lambda:UpdateCodeSigningConfig.

---

##### `UpdateEventSourceMapping`<sup>Required</sup> <a name="UpdateEventSourceMapping" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateEventSourceMapping"></a>

```typescript
public readonly UpdateEventSourceMapping: string;
```

- *Type:* string

[Write] lambda:UpdateEventSourceMapping.

---

##### `UpdateFunctionCode`<sup>Required</sup> <a name="UpdateFunctionCode" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateFunctionCode"></a>

```typescript
public readonly UpdateFunctionCode: string;
```

- *Type:* string

[Write] lambda:UpdateFunctionCode.

---

##### `UpdateFunctionCodeSigningConfig`<sup>Required</sup> <a name="UpdateFunctionCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateFunctionCodeSigningConfig"></a>

```typescript
public readonly UpdateFunctionCodeSigningConfig: string;
```

- *Type:* string

[Write] lambda:UpdateFunctionCodeSigningConfig.

---

##### `UpdateFunctionConfiguration`<sup>Required</sup> <a name="UpdateFunctionConfiguration" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateFunctionConfiguration"></a>

```typescript
public readonly UpdateFunctionConfiguration: string;
```

- *Type:* string

[Write] lambda:UpdateFunctionConfiguration.

---

##### `UpdateFunctionEventInvokeConfig`<sup>Required</sup> <a name="UpdateFunctionEventInvokeConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateFunctionEventInvokeConfig"></a>

```typescript
public readonly UpdateFunctionEventInvokeConfig: string;
```

- *Type:* string

[Write] lambda:UpdateFunctionEventInvokeConfig.

---

##### `UpdateFunctionUrlConfig`<sup>Required</sup> <a name="UpdateFunctionUrlConfig" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateFunctionUrlConfig"></a>

```typescript
public readonly UpdateFunctionUrlConfig: string;
```

- *Type:* string

[Write] lambda:UpdateFunctionUrlConfig.

---

##### `UpdateMicrovmImage`<sup>Required</sup> <a name="UpdateMicrovmImage" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateMicrovmImage"></a>

```typescript
public readonly UpdateMicrovmImage: string;
```

- *Type:* string

[Write] lambda:UpdateMicrovmImage.

---

##### `UpdateMicrovmImageVersion`<sup>Required</sup> <a name="UpdateMicrovmImageVersion" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateMicrovmImageVersion"></a>

```typescript
public readonly UpdateMicrovmImageVersion: string;
```

- *Type:* string

[Write] lambda:UpdateMicrovmImageVersion.

---

##### `UpdateNetworkConnector`<sup>Required</sup> <a name="UpdateNetworkConnector" id="@cdk_utils/iam.lambda.LambdaActions.property.UpdateNetworkConnector"></a>

```typescript
public readonly UpdateNetworkConnector: string;
```

- *Type:* string

[Write] lambda:UpdateNetworkConnector.

---

### LambdaConditions <a name="LambdaConditions" id="@cdk_utils/iam.lambda.LambdaConditions"></a>

Condition key constants and builders for lambda.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lambda.LambdaConditions.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

new lambda.LambdaConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.codeSigningConfigARN">codeSigningConfigARN</a></code> | Generates a condition block for `lambda:CodeSigningConfigArn`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.eventSourceToken">eventSourceToken</a></code> | Generates a condition block for `lambda:EventSourceToken`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.functionARN">functionARN</a></code> | Generates a condition block for `lambda:FunctionArn`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.functionURLAuthType">functionURLAuthType</a></code> | Generates a condition block for `lambda:FunctionUrlAuthType`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.invokedViaFunctionURL">invokedViaFunctionURL</a></code> | Generates a condition block for `lambda:InvokedViaFunctionUrl`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.layer">layer</a></code> | Generates a condition block for `lambda:Layer`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.principal">principal</a></code> | Generates a condition block for `lambda:Principal`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.securityGroupIds">securityGroupIds</a></code> | Generates a condition block for `lambda:SecurityGroupIds`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.sourceFunctionARN">sourceFunctionARN</a></code> | Generates a condition block for `lambda:SourceFunctionArn`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.subnetIds">subnetIds</a></code> | Generates a condition block for `lambda:SubnetIds`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.vpcIds">vpcIds</a></code> | Generates a condition block for `lambda:VpcIds`. |

---

##### `codeSigningConfigARN` <a name="codeSigningConfigARN" id="@cdk_utils/iam.lambda.LambdaConditions.codeSigningConfigARN"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.codeSigningConfigARN(value: string)
```

Generates a condition block for `lambda:CodeSigningConfigArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lambda.LambdaConditions.codeSigningConfigARN.parameter.value"></a>

- *Type:* string

---

##### `eventSourceToken` <a name="eventSourceToken" id="@cdk_utils/iam.lambda.LambdaConditions.eventSourceToken"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.eventSourceToken(value: string)
```

Generates a condition block for `lambda:EventSourceToken`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lambda.LambdaConditions.eventSourceToken.parameter.value"></a>

- *Type:* string

---

##### `functionARN` <a name="functionARN" id="@cdk_utils/iam.lambda.LambdaConditions.functionARN"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.functionARN(value: string)
```

Generates a condition block for `lambda:FunctionArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lambda.LambdaConditions.functionARN.parameter.value"></a>

- *Type:* string

---

##### `functionURLAuthType` <a name="functionURLAuthType" id="@cdk_utils/iam.lambda.LambdaConditions.functionURLAuthType"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.functionURLAuthType(value: string)
```

Generates a condition block for `lambda:FunctionUrlAuthType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lambda.LambdaConditions.functionURLAuthType.parameter.value"></a>

- *Type:* string

---

##### `invokedViaFunctionURL` <a name="invokedViaFunctionURL" id="@cdk_utils/iam.lambda.LambdaConditions.invokedViaFunctionURL"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.invokedViaFunctionURL(value: boolean)
```

Generates a condition block for `lambda:InvokedViaFunctionUrl`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lambda.LambdaConditions.invokedViaFunctionURL.parameter.value"></a>

- *Type:* boolean

---

##### `layer` <a name="layer" id="@cdk_utils/iam.lambda.LambdaConditions.layer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.layer(values: string[])
```

Generates a condition block for `lambda:Layer`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.lambda.LambdaConditions.layer.parameter.values"></a>

- *Type:* string[]

---

##### `principal` <a name="principal" id="@cdk_utils/iam.lambda.LambdaConditions.principal"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.principal(value: string)
```

Generates a condition block for `lambda:Principal`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lambda.LambdaConditions.principal.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.lambda.LambdaConditions.requestTag"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lambda.LambdaConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.lambda.LambdaConditions.resourceTag"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lambda.LambdaConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `securityGroupIds` <a name="securityGroupIds" id="@cdk_utils/iam.lambda.LambdaConditions.securityGroupIds"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.securityGroupIds(values: string[])
```

Generates a condition block for `lambda:SecurityGroupIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.lambda.LambdaConditions.securityGroupIds.parameter.values"></a>

- *Type:* string[]

---

##### `sourceFunctionARN` <a name="sourceFunctionARN" id="@cdk_utils/iam.lambda.LambdaConditions.sourceFunctionARN"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.sourceFunctionARN(value: string)
```

Generates a condition block for `lambda:SourceFunctionArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lambda.LambdaConditions.sourceFunctionARN.parameter.value"></a>

- *Type:* string

---

##### `subnetIds` <a name="subnetIds" id="@cdk_utils/iam.lambda.LambdaConditions.subnetIds"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.subnetIds(values: string[])
```

Generates a condition block for `lambda:SubnetIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.lambda.LambdaConditions.subnetIds.parameter.values"></a>

- *Type:* string[]

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.lambda.LambdaConditions.tagKeys"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.lambda.LambdaConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `vpcIds` <a name="vpcIds" id="@cdk_utils/iam.lambda.LambdaConditions.vpcIds"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaConditions.vpcIds(value: string)
```

Generates a condition block for `lambda:VpcIds`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lambda.LambdaConditions.vpcIds.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.actionGetEventSourceMappingConditionKeys">actionGetEventSourceMappingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEventSourceMapping action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.actionGetFunctionUrlConfigConditionKeys">actionGetFunctionUrlConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetFunctionUrlConfig action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.AddPermissionConditionKeys">AddPermissionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddPermission action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.CODE_SIGNING_CONFIG_ARN">CODE_SIGNING_CONFIG_ARN</a></code> | <code>string</code> | Condition key: lambda:CodeSigningConfigArn (ARN). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.CreateCapacityProviderConditionKeys">CreateCapacityProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCapacityProvider action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.CreateCodeSigningConfigConditionKeys">CreateCodeSigningConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCodeSigningConfig action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.CreateEventSourceMappingConditionKeys">CreateEventSourceMappingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventSourceMapping action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.CreateFunctionConditionKeys">CreateFunctionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFunction action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.CreateFunctionUrlConfigConditionKeys">CreateFunctionUrlConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFunctionUrlConfig action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.CreateMicrovmImageConditionKeys">CreateMicrovmImageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMicrovmImage action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.CreateNetworkConnectorConditionKeys">CreateNetworkConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNetworkConnector action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.DeleteEventSourceMappingConditionKeys">DeleteEventSourceMappingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEventSourceMapping action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.DeleteFunctionUrlConfigConditionKeys">DeleteFunctionUrlConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteFunctionUrlConfig action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.EVENT_SOURCE_TOKEN">EVENT_SOURCE_TOKEN</a></code> | <code>string</code> | Condition key: lambda:EventSourceToken (String). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.FUNCTION_ARN">FUNCTION_ARN</a></code> | <code>string</code> | Condition key: lambda:FunctionArn (ARN). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.FUNCTION_URL_AUTH_TYPE">FUNCTION_URL_AUTH_TYPE</a></code> | <code>string</code> | Condition key: lambda:FunctionUrlAuthType (String). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.INVOKED_VIA_FUNCTION_URL">INVOKED_VIA_FUNCTION_URL</a></code> | <code>string</code> | Condition key: lambda:InvokedViaFunctionUrl (Bool). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.InvokeFunctionConditionKeys">InvokeFunctionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InvokeFunction action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.InvokeFunctionUrlConditionKeys">InvokeFunctionUrlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InvokeFunctionUrl action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.LAYER">LAYER</a></code> | <code>string</code> | Condition key: lambda:Layer (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.ListFunctionUrlConfigsConditionKeys">ListFunctionUrlConfigsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListFunctionUrlConfigs action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.PRINCIPAL">PRINCIPAL</a></code> | <code>string</code> | Condition key: lambda:Principal (String). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.PutFunctionCodeSigningConfigConditionKeys">PutFunctionCodeSigningConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutFunctionCodeSigningConfig action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.RemovePermissionConditionKeys">RemovePermissionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemovePermission action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.SECURITY_GROUP_IDS">SECURITY_GROUP_IDS</a></code> | <code>string</code> | Condition key: lambda:SecurityGroupIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.SOURCE_FUNCTION_ARN">SOURCE_FUNCTION_ARN</a></code> | <code>string</code> | Condition key: lambda:SourceFunctionArn (ARN). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.SUBNET_IDS">SUBNET_IDS</a></code> | <code>string</code> | Condition key: lambda:SubnetIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.UpdateEventSourceMappingConditionKeys">UpdateEventSourceMappingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEventSourceMapping action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.UpdateFunctionConfigurationConditionKeys">UpdateFunctionConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateFunctionConfiguration action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.UpdateFunctionUrlConfigConditionKeys">UpdateFunctionUrlConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateFunctionUrlConfig action. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaConditions.property.VPC_IDS">VPC_IDS</a></code> | <code>string</code> | Condition key: lambda:VpcIds (String). |

---

##### `actionGetEventSourceMappingConditionKeys`<sup>Required</sup> <a name="actionGetEventSourceMappingConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.actionGetEventSourceMappingConditionKeys"></a>

```typescript
public readonly actionGetEventSourceMappingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEventSourceMapping action.

---

##### `actionGetFunctionUrlConfigConditionKeys`<sup>Required</sup> <a name="actionGetFunctionUrlConfigConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.actionGetFunctionUrlConfigConditionKeys"></a>

```typescript
public readonly actionGetFunctionUrlConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetFunctionUrlConfig action.

---

##### `AddPermissionConditionKeys`<sup>Required</sup> <a name="AddPermissionConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.AddPermissionConditionKeys"></a>

```typescript
public readonly AddPermissionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddPermission action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.lambda.LambdaConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.lambda.LambdaConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.lambda.LambdaConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CODE_SIGNING_CONFIG_ARN`<sup>Required</sup> <a name="CODE_SIGNING_CONFIG_ARN" id="@cdk_utils/iam.lambda.LambdaConditions.property.CODE_SIGNING_CONFIG_ARN"></a>

```typescript
public readonly CODE_SIGNING_CONFIG_ARN: string;
```

- *Type:* string

Condition key: lambda:CodeSigningConfigArn (ARN).

---

##### `CreateCapacityProviderConditionKeys`<sup>Required</sup> <a name="CreateCapacityProviderConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.CreateCapacityProviderConditionKeys"></a>

```typescript
public readonly CreateCapacityProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCapacityProvider action.

---

##### `CreateCodeSigningConfigConditionKeys`<sup>Required</sup> <a name="CreateCodeSigningConfigConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.CreateCodeSigningConfigConditionKeys"></a>

```typescript
public readonly CreateCodeSigningConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCodeSigningConfig action.

---

##### `CreateEventSourceMappingConditionKeys`<sup>Required</sup> <a name="CreateEventSourceMappingConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.CreateEventSourceMappingConditionKeys"></a>

```typescript
public readonly CreateEventSourceMappingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventSourceMapping action.

---

##### `CreateFunctionConditionKeys`<sup>Required</sup> <a name="CreateFunctionConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.CreateFunctionConditionKeys"></a>

```typescript
public readonly CreateFunctionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFunction action.

---

##### `CreateFunctionUrlConfigConditionKeys`<sup>Required</sup> <a name="CreateFunctionUrlConfigConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.CreateFunctionUrlConfigConditionKeys"></a>

```typescript
public readonly CreateFunctionUrlConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFunctionUrlConfig action.

---

##### `CreateMicrovmImageConditionKeys`<sup>Required</sup> <a name="CreateMicrovmImageConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.CreateMicrovmImageConditionKeys"></a>

```typescript
public readonly CreateMicrovmImageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMicrovmImage action.

---

##### `CreateNetworkConnectorConditionKeys`<sup>Required</sup> <a name="CreateNetworkConnectorConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.CreateNetworkConnectorConditionKeys"></a>

```typescript
public readonly CreateNetworkConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNetworkConnector action.

---

##### `DeleteEventSourceMappingConditionKeys`<sup>Required</sup> <a name="DeleteEventSourceMappingConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.DeleteEventSourceMappingConditionKeys"></a>

```typescript
public readonly DeleteEventSourceMappingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEventSourceMapping action.

---

##### `DeleteFunctionUrlConfigConditionKeys`<sup>Required</sup> <a name="DeleteFunctionUrlConfigConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.DeleteFunctionUrlConfigConditionKeys"></a>

```typescript
public readonly DeleteFunctionUrlConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteFunctionUrlConfig action.

---

##### `EVENT_SOURCE_TOKEN`<sup>Required</sup> <a name="EVENT_SOURCE_TOKEN" id="@cdk_utils/iam.lambda.LambdaConditions.property.EVENT_SOURCE_TOKEN"></a>

```typescript
public readonly EVENT_SOURCE_TOKEN: string;
```

- *Type:* string

Condition key: lambda:EventSourceToken (String).

---

##### `FUNCTION_ARN`<sup>Required</sup> <a name="FUNCTION_ARN" id="@cdk_utils/iam.lambda.LambdaConditions.property.FUNCTION_ARN"></a>

```typescript
public readonly FUNCTION_ARN: string;
```

- *Type:* string

Condition key: lambda:FunctionArn (ARN).

---

##### `FUNCTION_URL_AUTH_TYPE`<sup>Required</sup> <a name="FUNCTION_URL_AUTH_TYPE" id="@cdk_utils/iam.lambda.LambdaConditions.property.FUNCTION_URL_AUTH_TYPE"></a>

```typescript
public readonly FUNCTION_URL_AUTH_TYPE: string;
```

- *Type:* string

Condition key: lambda:FunctionUrlAuthType (String).

---

##### `INVOKED_VIA_FUNCTION_URL`<sup>Required</sup> <a name="INVOKED_VIA_FUNCTION_URL" id="@cdk_utils/iam.lambda.LambdaConditions.property.INVOKED_VIA_FUNCTION_URL"></a>

```typescript
public readonly INVOKED_VIA_FUNCTION_URL: string;
```

- *Type:* string

Condition key: lambda:InvokedViaFunctionUrl (Bool).

---

##### `InvokeFunctionConditionKeys`<sup>Required</sup> <a name="InvokeFunctionConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.InvokeFunctionConditionKeys"></a>

```typescript
public readonly InvokeFunctionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InvokeFunction action.

---

##### `InvokeFunctionUrlConditionKeys`<sup>Required</sup> <a name="InvokeFunctionUrlConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.InvokeFunctionUrlConditionKeys"></a>

```typescript
public readonly InvokeFunctionUrlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InvokeFunctionUrl action.

---

##### `LAYER`<sup>Required</sup> <a name="LAYER" id="@cdk_utils/iam.lambda.LambdaConditions.property.LAYER"></a>

```typescript
public readonly LAYER: string;
```

- *Type:* string

Condition key: lambda:Layer (ArrayOfString).

---

##### `ListFunctionUrlConfigsConditionKeys`<sup>Required</sup> <a name="ListFunctionUrlConfigsConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.ListFunctionUrlConfigsConditionKeys"></a>

```typescript
public readonly ListFunctionUrlConfigsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListFunctionUrlConfigs action.

---

##### `PRINCIPAL`<sup>Required</sup> <a name="PRINCIPAL" id="@cdk_utils/iam.lambda.LambdaConditions.property.PRINCIPAL"></a>

```typescript
public readonly PRINCIPAL: string;
```

- *Type:* string

Condition key: lambda:Principal (String).

---

##### `PutFunctionCodeSigningConfigConditionKeys`<sup>Required</sup> <a name="PutFunctionCodeSigningConfigConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.PutFunctionCodeSigningConfigConditionKeys"></a>

```typescript
public readonly PutFunctionCodeSigningConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutFunctionCodeSigningConfig action.

---

##### `RemovePermissionConditionKeys`<sup>Required</sup> <a name="RemovePermissionConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.RemovePermissionConditionKeys"></a>

```typescript
public readonly RemovePermissionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemovePermission action.

---

##### `SECURITY_GROUP_IDS`<sup>Required</sup> <a name="SECURITY_GROUP_IDS" id="@cdk_utils/iam.lambda.LambdaConditions.property.SECURITY_GROUP_IDS"></a>

```typescript
public readonly SECURITY_GROUP_IDS: string;
```

- *Type:* string

Condition key: lambda:SecurityGroupIds (ArrayOfString).

---

##### `SOURCE_FUNCTION_ARN`<sup>Required</sup> <a name="SOURCE_FUNCTION_ARN" id="@cdk_utils/iam.lambda.LambdaConditions.property.SOURCE_FUNCTION_ARN"></a>

```typescript
public readonly SOURCE_FUNCTION_ARN: string;
```

- *Type:* string

Condition key: lambda:SourceFunctionArn (ARN).

---

##### `SUBNET_IDS`<sup>Required</sup> <a name="SUBNET_IDS" id="@cdk_utils/iam.lambda.LambdaConditions.property.SUBNET_IDS"></a>

```typescript
public readonly SUBNET_IDS: string;
```

- *Type:* string

Condition key: lambda:SubnetIds (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateEventSourceMappingConditionKeys`<sup>Required</sup> <a name="UpdateEventSourceMappingConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.UpdateEventSourceMappingConditionKeys"></a>

```typescript
public readonly UpdateEventSourceMappingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEventSourceMapping action.

---

##### `UpdateFunctionConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateFunctionConfigurationConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.UpdateFunctionConfigurationConditionKeys"></a>

```typescript
public readonly UpdateFunctionConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateFunctionConfiguration action.

---

##### `UpdateFunctionUrlConfigConditionKeys`<sup>Required</sup> <a name="UpdateFunctionUrlConfigConditionKeys" id="@cdk_utils/iam.lambda.LambdaConditions.property.UpdateFunctionUrlConfigConditionKeys"></a>

```typescript
public readonly UpdateFunctionUrlConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateFunctionUrlConfig action.

---

##### `VPC_IDS`<sup>Required</sup> <a name="VPC_IDS" id="@cdk_utils/iam.lambda.LambdaConditions.property.VPC_IDS"></a>

```typescript
public readonly VPC_IDS: string;
```

- *Type:* string

Condition key: lambda:VpcIds (String).

---

### LambdaOperations <a name="LambdaOperations" id="@cdk_utils/iam.lambda.LambdaOperations"></a>

API operation to required IAM actions mapping for lambda.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lambda.LambdaOperations.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

new lambda.LambdaOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.AddEventSource">AddEventSource</a></code> | <code>string[]</code> | IAM actions required for the AddEventSource API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.AddLayerVersionPermission">AddLayerVersionPermission</a></code> | <code>string[]</code> | IAM actions required for the AddLayerVersionPermission API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.AddPermission">AddPermission</a></code> | <code>string[]</code> | IAM actions required for the AddPermission API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.CheckpointDurableExecution">CheckpointDurableExecution</a></code> | <code>string[]</code> | IAM actions required for the CheckpointDurableExecution API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.CreateAlias">CreateAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateAlias API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.CreateCapacityProvider">CreateCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the CreateCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.CreateCodeSigningConfig">CreateCodeSigningConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateCodeSigningConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.CreateEventSourceMapping">CreateEventSourceMapping</a></code> | <code>string[]</code> | IAM actions required for the CreateEventSourceMapping API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.CreateFunction">CreateFunction</a></code> | <code>string[]</code> | IAM actions required for the CreateFunction API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.CreateFunctionUrlConfig">CreateFunctionUrlConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateFunctionUrlConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.CreateMicrovmAuthToken">CreateMicrovmAuthToken</a></code> | <code>string[]</code> | IAM actions required for the CreateMicrovmAuthToken API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.CreateMicrovmImage">CreateMicrovmImage</a></code> | <code>string[]</code> | IAM actions required for the CreateMicrovmImage API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.CreateMicrovmShellAuthToken">CreateMicrovmShellAuthToken</a></code> | <code>string[]</code> | IAM actions required for the CreateMicrovmShellAuthToken API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.CreateNetworkConnector">CreateNetworkConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateNetworkConnector API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteAlias">DeleteAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlias API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteCapacityProvider">DeleteCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the DeleteCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteCodeSigningConfig">DeleteCodeSigningConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteCodeSigningConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteEventSourceMapping">DeleteEventSourceMapping</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventSourceMapping API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteFunction">DeleteFunction</a></code> | <code>string[]</code> | IAM actions required for the DeleteFunction API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteFunctionCodeSigningConfig">DeleteFunctionCodeSigningConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteFunctionCodeSigningConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteFunctionConcurrency">DeleteFunctionConcurrency</a></code> | <code>string[]</code> | IAM actions required for the DeleteFunctionConcurrency API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteFunctionEventInvokeConfig">DeleteFunctionEventInvokeConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteFunctionEventInvokeConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteFunctionUrlConfig">DeleteFunctionUrlConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteFunctionUrlConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteLayerVersion">DeleteLayerVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteLayerVersion API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteMicrovmImage">DeleteMicrovmImage</a></code> | <code>string[]</code> | IAM actions required for the DeleteMicrovmImage API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteMicrovmImageVersion">DeleteMicrovmImageVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteMicrovmImageVersion API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteNetworkConnector">DeleteNetworkConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteNetworkConnector API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.DeleteProvisionedConcurrencyConfig">DeleteProvisionedConcurrencyConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteProvisionedConcurrencyConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.Invoke">Invoke</a></code> | <code>string[]</code> | IAM actions required for the Invoke API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.InvokeAsync">InvokeAsync</a></code> | <code>string[]</code> | IAM actions required for the InvokeAsync API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.InvokeWithResponseStream">InvokeWithResponseStream</a></code> | <code>string[]</code> | IAM actions required for the InvokeWithResponseStream API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListAliases">ListAliases</a></code> | <code>string[]</code> | IAM actions required for the ListAliases API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListCapacityProviders">ListCapacityProviders</a></code> | <code>string[]</code> | IAM actions required for the ListCapacityProviders API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListCodeSigningConfigs">ListCodeSigningConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListCodeSigningConfigs API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListDurableExecutionsByFunction">ListDurableExecutionsByFunction</a></code> | <code>string[]</code> | IAM actions required for the ListDurableExecutionsByFunction API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListEventSourceMappings">ListEventSourceMappings</a></code> | <code>string[]</code> | IAM actions required for the ListEventSourceMappings API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListEventSources">ListEventSources</a></code> | <code>string[]</code> | IAM actions required for the ListEventSources API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListFunctionEventInvokeConfigs">ListFunctionEventInvokeConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListFunctionEventInvokeConfigs API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListFunctions">ListFunctions</a></code> | <code>string[]</code> | IAM actions required for the ListFunctions API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListFunctionsByCodeSigningConfig">ListFunctionsByCodeSigningConfig</a></code> | <code>string[]</code> | IAM actions required for the ListFunctionsByCodeSigningConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListFunctionUrlConfigs">ListFunctionUrlConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListFunctionUrlConfigs API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListFunctionVersionsByCapacityProvider">ListFunctionVersionsByCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the ListFunctionVersionsByCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListLayers">ListLayers</a></code> | <code>string[]</code> | IAM actions required for the ListLayers API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListLayerVersions">ListLayerVersions</a></code> | <code>string[]</code> | IAM actions required for the ListLayerVersions API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListManagedMicrovmImages">ListManagedMicrovmImages</a></code> | <code>string[]</code> | IAM actions required for the ListManagedMicrovmImages API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListManagedMicrovmImageVersions">ListManagedMicrovmImageVersions</a></code> | <code>string[]</code> | IAM actions required for the ListManagedMicrovmImageVersions API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListMicrovmImageBuilds">ListMicrovmImageBuilds</a></code> | <code>string[]</code> | IAM actions required for the ListMicrovmImageBuilds API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListMicrovmImages">ListMicrovmImages</a></code> | <code>string[]</code> | IAM actions required for the ListMicrovmImages API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListMicrovmImageVersions">ListMicrovmImageVersions</a></code> | <code>string[]</code> | IAM actions required for the ListMicrovmImageVersions API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListMicrovms">ListMicrovms</a></code> | <code>string[]</code> | IAM actions required for the ListMicrovms API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListNetworkConnectors">ListNetworkConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkConnectors API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListProvisionedConcurrencyConfigs">ListProvisionedConcurrencyConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListProvisionedConcurrencyConfigs API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListTags">ListTags</a></code> | <code>string[]</code> | IAM actions required for the ListTags API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ListVersionsByFunction">ListVersionsByFunction</a></code> | <code>string[]</code> | IAM actions required for the ListVersionsByFunction API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetAccountSettings">opGetAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetAlias">opGetAlias</a></code> | <code>string[]</code> | IAM actions required for the GetAlias API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetCapacityProvider">opGetCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the GetCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetCodeSigningConfig">opGetCodeSigningConfig</a></code> | <code>string[]</code> | IAM actions required for the GetCodeSigningConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetDurableExecution">opGetDurableExecution</a></code> | <code>string[]</code> | IAM actions required for the GetDurableExecution API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetDurableExecutionHistory">opGetDurableExecutionHistory</a></code> | <code>string[]</code> | IAM actions required for the GetDurableExecutionHistory API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetDurableExecutionState">opGetDurableExecutionState</a></code> | <code>string[]</code> | IAM actions required for the GetDurableExecutionState API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetEventSource">opGetEventSource</a></code> | <code>string[]</code> | IAM actions required for the GetEventSource API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetEventSourceMapping">opGetEventSourceMapping</a></code> | <code>string[]</code> | IAM actions required for the GetEventSourceMapping API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunction">opGetFunction</a></code> | <code>string[]</code> | IAM actions required for the GetFunction API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionCodeSigningConfig">opGetFunctionCodeSigningConfig</a></code> | <code>string[]</code> | IAM actions required for the GetFunctionCodeSigningConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionConcurrency">opGetFunctionConcurrency</a></code> | <code>string[]</code> | IAM actions required for the GetFunctionConcurrency API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionConfiguration">opGetFunctionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetFunctionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionEventInvokeConfig">opGetFunctionEventInvokeConfig</a></code> | <code>string[]</code> | IAM actions required for the GetFunctionEventInvokeConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionRecursionConfig">opGetFunctionRecursionConfig</a></code> | <code>string[]</code> | IAM actions required for the GetFunctionRecursionConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionScalingConfig">opGetFunctionScalingConfig</a></code> | <code>string[]</code> | IAM actions required for the GetFunctionScalingConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionUrlConfig">opGetFunctionUrlConfig</a></code> | <code>string[]</code> | IAM actions required for the GetFunctionUrlConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetLayerVersion">opGetLayerVersion</a></code> | <code>string[]</code> | IAM actions required for the GetLayerVersion API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetLayerVersionByArn">opGetLayerVersionByArn</a></code> | <code>string[]</code> | IAM actions required for the GetLayerVersionByArn API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetLayerVersionPolicy">opGetLayerVersionPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetLayerVersionPolicy API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetMicrovm">opGetMicrovm</a></code> | <code>string[]</code> | IAM actions required for the GetMicrovm API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetMicrovmImage">opGetMicrovmImage</a></code> | <code>string[]</code> | IAM actions required for the GetMicrovmImage API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetMicrovmImageBuild">opGetMicrovmImageBuild</a></code> | <code>string[]</code> | IAM actions required for the GetMicrovmImageBuild API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetMicrovmImageVersion">opGetMicrovmImageVersion</a></code> | <code>string[]</code> | IAM actions required for the GetMicrovmImageVersion API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetNetworkConnector">opGetNetworkConnector</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkConnector API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetProvisionedConcurrencyConfig">opGetProvisionedConcurrencyConfig</a></code> | <code>string[]</code> | IAM actions required for the GetProvisionedConcurrencyConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.opGetRuntimeManagementConfig">opGetRuntimeManagementConfig</a></code> | <code>string[]</code> | IAM actions required for the GetRuntimeManagementConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.PublishLayerVersion">PublishLayerVersion</a></code> | <code>string[]</code> | IAM actions required for the PublishLayerVersion API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.PublishVersion">PublishVersion</a></code> | <code>string[]</code> | IAM actions required for the PublishVersion API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.PutFunctionCodeSigningConfig">PutFunctionCodeSigningConfig</a></code> | <code>string[]</code> | IAM actions required for the PutFunctionCodeSigningConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.PutFunctionConcurrency">PutFunctionConcurrency</a></code> | <code>string[]</code> | IAM actions required for the PutFunctionConcurrency API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.PutFunctionEventInvokeConfig">PutFunctionEventInvokeConfig</a></code> | <code>string[]</code> | IAM actions required for the PutFunctionEventInvokeConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.PutFunctionRecursionConfig">PutFunctionRecursionConfig</a></code> | <code>string[]</code> | IAM actions required for the PutFunctionRecursionConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.PutFunctionScalingConfig">PutFunctionScalingConfig</a></code> | <code>string[]</code> | IAM actions required for the PutFunctionScalingConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.PutProvisionedConcurrencyConfig">PutProvisionedConcurrencyConfig</a></code> | <code>string[]</code> | IAM actions required for the PutProvisionedConcurrencyConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.PutRuntimeManagementConfig">PutRuntimeManagementConfig</a></code> | <code>string[]</code> | IAM actions required for the PutRuntimeManagementConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.RemoveEventSource">RemoveEventSource</a></code> | <code>string[]</code> | IAM actions required for the RemoveEventSource API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.RemoveLayerVersionPermission">RemoveLayerVersionPermission</a></code> | <code>string[]</code> | IAM actions required for the RemoveLayerVersionPermission API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.RemovePermission">RemovePermission</a></code> | <code>string[]</code> | IAM actions required for the RemovePermission API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.ResumeMicrovm">ResumeMicrovm</a></code> | <code>string[]</code> | IAM actions required for the ResumeMicrovm API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.RunMicrovm">RunMicrovm</a></code> | <code>string[]</code> | IAM actions required for the RunMicrovm API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.SendDurableExecutionCallbackFailure">SendDurableExecutionCallbackFailure</a></code> | <code>string[]</code> | IAM actions required for the SendDurableExecutionCallbackFailure API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.SendDurableExecutionCallbackHeartbeat">SendDurableExecutionCallbackHeartbeat</a></code> | <code>string[]</code> | IAM actions required for the SendDurableExecutionCallbackHeartbeat API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.SendDurableExecutionCallbackSuccess">SendDurableExecutionCallbackSuccess</a></code> | <code>string[]</code> | IAM actions required for the SendDurableExecutionCallbackSuccess API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.StopDurableExecution">StopDurableExecution</a></code> | <code>string[]</code> | IAM actions required for the StopDurableExecution API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.SuspendMicrovm">SuspendMicrovm</a></code> | <code>string[]</code> | IAM actions required for the SuspendMicrovm API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.TerminateMicrovm">TerminateMicrovm</a></code> | <code>string[]</code> | IAM actions required for the TerminateMicrovm API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UpdateAlias">UpdateAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateAlias API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UpdateCapacityProvider">UpdateCapacityProvider</a></code> | <code>string[]</code> | IAM actions required for the UpdateCapacityProvider API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UpdateCodeSigningConfig">UpdateCodeSigningConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateCodeSigningConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UpdateEventSourceMapping">UpdateEventSourceMapping</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventSourceMapping API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UpdateFunctionCode">UpdateFunctionCode</a></code> | <code>string[]</code> | IAM actions required for the UpdateFunctionCode API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UpdateFunctionConfiguration">UpdateFunctionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateFunctionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UpdateFunctionEventInvokeConfig">UpdateFunctionEventInvokeConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateFunctionEventInvokeConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UpdateFunctionUrlConfig">UpdateFunctionUrlConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateFunctionUrlConfig API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UpdateMicrovmImage">UpdateMicrovmImage</a></code> | <code>string[]</code> | IAM actions required for the UpdateMicrovmImage API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UpdateMicrovmImageVersion">UpdateMicrovmImageVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateMicrovmImageVersion API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UpdateNetworkConnector">UpdateNetworkConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdateNetworkConnector API call. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaOperations.property.UploadFunction">UploadFunction</a></code> | <code>string[]</code> | IAM actions required for the UploadFunction API call. |

---

##### `AddEventSource`<sup>Required</sup> <a name="AddEventSource" id="@cdk_utils/iam.lambda.LambdaOperations.property.AddEventSource"></a>

```typescript
public readonly AddEventSource: string[];
```

- *Type:* string[]

IAM actions required for the AddEventSource API call.

---

##### `AddLayerVersionPermission`<sup>Required</sup> <a name="AddLayerVersionPermission" id="@cdk_utils/iam.lambda.LambdaOperations.property.AddLayerVersionPermission"></a>

```typescript
public readonly AddLayerVersionPermission: string[];
```

- *Type:* string[]

IAM actions required for the AddLayerVersionPermission API call.

---

##### `AddPermission`<sup>Required</sup> <a name="AddPermission" id="@cdk_utils/iam.lambda.LambdaOperations.property.AddPermission"></a>

```typescript
public readonly AddPermission: string[];
```

- *Type:* string[]

IAM actions required for the AddPermission API call.

---

##### `CheckpointDurableExecution`<sup>Required</sup> <a name="CheckpointDurableExecution" id="@cdk_utils/iam.lambda.LambdaOperations.property.CheckpointDurableExecution"></a>

```typescript
public readonly CheckpointDurableExecution: string[];
```

- *Type:* string[]

IAM actions required for the CheckpointDurableExecution API call.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.lambda.LambdaOperations.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateAlias API call.

---

##### `CreateCapacityProvider`<sup>Required</sup> <a name="CreateCapacityProvider" id="@cdk_utils/iam.lambda.LambdaOperations.property.CreateCapacityProvider"></a>

```typescript
public readonly CreateCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreateCapacityProvider API call.

---

##### `CreateCodeSigningConfig`<sup>Required</sup> <a name="CreateCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.CreateCodeSigningConfig"></a>

```typescript
public readonly CreateCodeSigningConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateCodeSigningConfig API call.

---

##### `CreateEventSourceMapping`<sup>Required</sup> <a name="CreateEventSourceMapping" id="@cdk_utils/iam.lambda.LambdaOperations.property.CreateEventSourceMapping"></a>

```typescript
public readonly CreateEventSourceMapping: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventSourceMapping API call.

---

##### `CreateFunction`<sup>Required</sup> <a name="CreateFunction" id="@cdk_utils/iam.lambda.LambdaOperations.property.CreateFunction"></a>

```typescript
public readonly CreateFunction: string[];
```

- *Type:* string[]

IAM actions required for the CreateFunction API call.

---

##### `CreateFunctionUrlConfig`<sup>Required</sup> <a name="CreateFunctionUrlConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.CreateFunctionUrlConfig"></a>

```typescript
public readonly CreateFunctionUrlConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateFunctionUrlConfig API call.

---

##### `CreateMicrovmAuthToken`<sup>Required</sup> <a name="CreateMicrovmAuthToken" id="@cdk_utils/iam.lambda.LambdaOperations.property.CreateMicrovmAuthToken"></a>

```typescript
public readonly CreateMicrovmAuthToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateMicrovmAuthToken API call.

---

##### `CreateMicrovmImage`<sup>Required</sup> <a name="CreateMicrovmImage" id="@cdk_utils/iam.lambda.LambdaOperations.property.CreateMicrovmImage"></a>

```typescript
public readonly CreateMicrovmImage: string[];
```

- *Type:* string[]

IAM actions required for the CreateMicrovmImage API call.

---

##### `CreateMicrovmShellAuthToken`<sup>Required</sup> <a name="CreateMicrovmShellAuthToken" id="@cdk_utils/iam.lambda.LambdaOperations.property.CreateMicrovmShellAuthToken"></a>

```typescript
public readonly CreateMicrovmShellAuthToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateMicrovmShellAuthToken API call.

---

##### `CreateNetworkConnector`<sup>Required</sup> <a name="CreateNetworkConnector" id="@cdk_utils/iam.lambda.LambdaOperations.property.CreateNetworkConnector"></a>

```typescript
public readonly CreateNetworkConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateNetworkConnector API call.

---

##### `DeleteAlias`<sup>Required</sup> <a name="DeleteAlias" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteAlias"></a>

```typescript
public readonly DeleteAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlias API call.

---

##### `DeleteCapacityProvider`<sup>Required</sup> <a name="DeleteCapacityProvider" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteCapacityProvider"></a>

```typescript
public readonly DeleteCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCapacityProvider API call.

---

##### `DeleteCodeSigningConfig`<sup>Required</sup> <a name="DeleteCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteCodeSigningConfig"></a>

```typescript
public readonly DeleteCodeSigningConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCodeSigningConfig API call.

---

##### `DeleteEventSourceMapping`<sup>Required</sup> <a name="DeleteEventSourceMapping" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteEventSourceMapping"></a>

```typescript
public readonly DeleteEventSourceMapping: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventSourceMapping API call.

---

##### `DeleteFunction`<sup>Required</sup> <a name="DeleteFunction" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteFunction"></a>

```typescript
public readonly DeleteFunction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFunction API call.

---

##### `DeleteFunctionCodeSigningConfig`<sup>Required</sup> <a name="DeleteFunctionCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteFunctionCodeSigningConfig"></a>

```typescript
public readonly DeleteFunctionCodeSigningConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFunctionCodeSigningConfig API call.

---

##### `DeleteFunctionConcurrency`<sup>Required</sup> <a name="DeleteFunctionConcurrency" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteFunctionConcurrency"></a>

```typescript
public readonly DeleteFunctionConcurrency: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFunctionConcurrency API call.

---

##### `DeleteFunctionEventInvokeConfig`<sup>Required</sup> <a name="DeleteFunctionEventInvokeConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteFunctionEventInvokeConfig"></a>

```typescript
public readonly DeleteFunctionEventInvokeConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFunctionEventInvokeConfig API call.

---

##### `DeleteFunctionUrlConfig`<sup>Required</sup> <a name="DeleteFunctionUrlConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteFunctionUrlConfig"></a>

```typescript
public readonly DeleteFunctionUrlConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFunctionUrlConfig API call.

---

##### `DeleteLayerVersion`<sup>Required</sup> <a name="DeleteLayerVersion" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteLayerVersion"></a>

```typescript
public readonly DeleteLayerVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLayerVersion API call.

---

##### `DeleteMicrovmImage`<sup>Required</sup> <a name="DeleteMicrovmImage" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteMicrovmImage"></a>

```typescript
public readonly DeleteMicrovmImage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMicrovmImage API call.

---

##### `DeleteMicrovmImageVersion`<sup>Required</sup> <a name="DeleteMicrovmImageVersion" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteMicrovmImageVersion"></a>

```typescript
public readonly DeleteMicrovmImageVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMicrovmImageVersion API call.

---

##### `DeleteNetworkConnector`<sup>Required</sup> <a name="DeleteNetworkConnector" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteNetworkConnector"></a>

```typescript
public readonly DeleteNetworkConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNetworkConnector API call.

---

##### `DeleteProvisionedConcurrencyConfig`<sup>Required</sup> <a name="DeleteProvisionedConcurrencyConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.DeleteProvisionedConcurrencyConfig"></a>

```typescript
public readonly DeleteProvisionedConcurrencyConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProvisionedConcurrencyConfig API call.

---

##### `Invoke`<sup>Required</sup> <a name="Invoke" id="@cdk_utils/iam.lambda.LambdaOperations.property.Invoke"></a>

```typescript
public readonly Invoke: string[];
```

- *Type:* string[]

IAM actions required for the Invoke API call.

---

##### `InvokeAsync`<sup>Required</sup> <a name="InvokeAsync" id="@cdk_utils/iam.lambda.LambdaOperations.property.InvokeAsync"></a>

```typescript
public readonly InvokeAsync: string[];
```

- *Type:* string[]

IAM actions required for the InvokeAsync API call.

---

##### `InvokeWithResponseStream`<sup>Required</sup> <a name="InvokeWithResponseStream" id="@cdk_utils/iam.lambda.LambdaOperations.property.InvokeWithResponseStream"></a>

```typescript
public readonly InvokeWithResponseStream: string[];
```

- *Type:* string[]

IAM actions required for the InvokeWithResponseStream API call.

---

##### `ListAliases`<sup>Required</sup> <a name="ListAliases" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListAliases"></a>

```typescript
public readonly ListAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListAliases API call.

---

##### `ListCapacityProviders`<sup>Required</sup> <a name="ListCapacityProviders" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListCapacityProviders"></a>

```typescript
public readonly ListCapacityProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListCapacityProviders API call.

---

##### `ListCodeSigningConfigs`<sup>Required</sup> <a name="ListCodeSigningConfigs" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListCodeSigningConfigs"></a>

```typescript
public readonly ListCodeSigningConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListCodeSigningConfigs API call.

---

##### `ListDurableExecutionsByFunction`<sup>Required</sup> <a name="ListDurableExecutionsByFunction" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListDurableExecutionsByFunction"></a>

```typescript
public readonly ListDurableExecutionsByFunction: string[];
```

- *Type:* string[]

IAM actions required for the ListDurableExecutionsByFunction API call.

---

##### `ListEventSourceMappings`<sup>Required</sup> <a name="ListEventSourceMappings" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListEventSourceMappings"></a>

```typescript
public readonly ListEventSourceMappings: string[];
```

- *Type:* string[]

IAM actions required for the ListEventSourceMappings API call.

---

##### `ListEventSources`<sup>Required</sup> <a name="ListEventSources" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListEventSources"></a>

```typescript
public readonly ListEventSources: string[];
```

- *Type:* string[]

IAM actions required for the ListEventSources API call.

---

##### `ListFunctionEventInvokeConfigs`<sup>Required</sup> <a name="ListFunctionEventInvokeConfigs" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListFunctionEventInvokeConfigs"></a>

```typescript
public readonly ListFunctionEventInvokeConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListFunctionEventInvokeConfigs API call.

---

##### `ListFunctions`<sup>Required</sup> <a name="ListFunctions" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListFunctions"></a>

```typescript
public readonly ListFunctions: string[];
```

- *Type:* string[]

IAM actions required for the ListFunctions API call.

---

##### `ListFunctionsByCodeSigningConfig`<sup>Required</sup> <a name="ListFunctionsByCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListFunctionsByCodeSigningConfig"></a>

```typescript
public readonly ListFunctionsByCodeSigningConfig: string[];
```

- *Type:* string[]

IAM actions required for the ListFunctionsByCodeSigningConfig API call.

---

##### `ListFunctionUrlConfigs`<sup>Required</sup> <a name="ListFunctionUrlConfigs" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListFunctionUrlConfigs"></a>

```typescript
public readonly ListFunctionUrlConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListFunctionUrlConfigs API call.

---

##### `ListFunctionVersionsByCapacityProvider`<sup>Required</sup> <a name="ListFunctionVersionsByCapacityProvider" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListFunctionVersionsByCapacityProvider"></a>

```typescript
public readonly ListFunctionVersionsByCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the ListFunctionVersionsByCapacityProvider API call.

---

##### `ListLayers`<sup>Required</sup> <a name="ListLayers" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListLayers"></a>

```typescript
public readonly ListLayers: string[];
```

- *Type:* string[]

IAM actions required for the ListLayers API call.

---

##### `ListLayerVersions`<sup>Required</sup> <a name="ListLayerVersions" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListLayerVersions"></a>

```typescript
public readonly ListLayerVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListLayerVersions API call.

---

##### `ListManagedMicrovmImages`<sup>Required</sup> <a name="ListManagedMicrovmImages" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListManagedMicrovmImages"></a>

```typescript
public readonly ListManagedMicrovmImages: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedMicrovmImages API call.

---

##### `ListManagedMicrovmImageVersions`<sup>Required</sup> <a name="ListManagedMicrovmImageVersions" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListManagedMicrovmImageVersions"></a>

```typescript
public readonly ListManagedMicrovmImageVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedMicrovmImageVersions API call.

---

##### `ListMicrovmImageBuilds`<sup>Required</sup> <a name="ListMicrovmImageBuilds" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListMicrovmImageBuilds"></a>

```typescript
public readonly ListMicrovmImageBuilds: string[];
```

- *Type:* string[]

IAM actions required for the ListMicrovmImageBuilds API call.

---

##### `ListMicrovmImages`<sup>Required</sup> <a name="ListMicrovmImages" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListMicrovmImages"></a>

```typescript
public readonly ListMicrovmImages: string[];
```

- *Type:* string[]

IAM actions required for the ListMicrovmImages API call.

---

##### `ListMicrovmImageVersions`<sup>Required</sup> <a name="ListMicrovmImageVersions" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListMicrovmImageVersions"></a>

```typescript
public readonly ListMicrovmImageVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListMicrovmImageVersions API call.

---

##### `ListMicrovms`<sup>Required</sup> <a name="ListMicrovms" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListMicrovms"></a>

```typescript
public readonly ListMicrovms: string[];
```

- *Type:* string[]

IAM actions required for the ListMicrovms API call.

---

##### `ListNetworkConnectors`<sup>Required</sup> <a name="ListNetworkConnectors" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListNetworkConnectors"></a>

```typescript
public readonly ListNetworkConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkConnectors API call.

---

##### `ListProvisionedConcurrencyConfigs`<sup>Required</sup> <a name="ListProvisionedConcurrencyConfigs" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListProvisionedConcurrencyConfigs"></a>

```typescript
public readonly ListProvisionedConcurrencyConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListProvisionedConcurrencyConfigs API call.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListTags"></a>

```typescript
public readonly ListTags: string[];
```

- *Type:* string[]

IAM actions required for the ListTags API call.

---

##### `ListVersionsByFunction`<sup>Required</sup> <a name="ListVersionsByFunction" id="@cdk_utils/iam.lambda.LambdaOperations.property.ListVersionsByFunction"></a>

```typescript
public readonly ListVersionsByFunction: string[];
```

- *Type:* string[]

IAM actions required for the ListVersionsByFunction API call.

---

##### `opGetAccountSettings`<sup>Required</sup> <a name="opGetAccountSettings" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetAccountSettings"></a>

```typescript
public readonly opGetAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSettings API call.

---

##### `opGetAlias`<sup>Required</sup> <a name="opGetAlias" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetAlias"></a>

```typescript
public readonly opGetAlias: string[];
```

- *Type:* string[]

IAM actions required for the GetAlias API call.

---

##### `opGetCapacityProvider`<sup>Required</sup> <a name="opGetCapacityProvider" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetCapacityProvider"></a>

```typescript
public readonly opGetCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the GetCapacityProvider API call.

---

##### `opGetCodeSigningConfig`<sup>Required</sup> <a name="opGetCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetCodeSigningConfig"></a>

```typescript
public readonly opGetCodeSigningConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetCodeSigningConfig API call.

---

##### `opGetDurableExecution`<sup>Required</sup> <a name="opGetDurableExecution" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetDurableExecution"></a>

```typescript
public readonly opGetDurableExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetDurableExecution API call.

---

##### `opGetDurableExecutionHistory`<sup>Required</sup> <a name="opGetDurableExecutionHistory" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetDurableExecutionHistory"></a>

```typescript
public readonly opGetDurableExecutionHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetDurableExecutionHistory API call.

---

##### `opGetDurableExecutionState`<sup>Required</sup> <a name="opGetDurableExecutionState" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetDurableExecutionState"></a>

```typescript
public readonly opGetDurableExecutionState: string[];
```

- *Type:* string[]

IAM actions required for the GetDurableExecutionState API call.

---

##### `opGetEventSource`<sup>Required</sup> <a name="opGetEventSource" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetEventSource"></a>

```typescript
public readonly opGetEventSource: string[];
```

- *Type:* string[]

IAM actions required for the GetEventSource API call.

---

##### `opGetEventSourceMapping`<sup>Required</sup> <a name="opGetEventSourceMapping" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetEventSourceMapping"></a>

```typescript
public readonly opGetEventSourceMapping: string[];
```

- *Type:* string[]

IAM actions required for the GetEventSourceMapping API call.

---

##### `opGetFunction`<sup>Required</sup> <a name="opGetFunction" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunction"></a>

```typescript
public readonly opGetFunction: string[];
```

- *Type:* string[]

IAM actions required for the GetFunction API call.

---

##### `opGetFunctionCodeSigningConfig`<sup>Required</sup> <a name="opGetFunctionCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionCodeSigningConfig"></a>

```typescript
public readonly opGetFunctionCodeSigningConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetFunctionCodeSigningConfig API call.

---

##### `opGetFunctionConcurrency`<sup>Required</sup> <a name="opGetFunctionConcurrency" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionConcurrency"></a>

```typescript
public readonly opGetFunctionConcurrency: string[];
```

- *Type:* string[]

IAM actions required for the GetFunctionConcurrency API call.

---

##### `opGetFunctionConfiguration`<sup>Required</sup> <a name="opGetFunctionConfiguration" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionConfiguration"></a>

```typescript
public readonly opGetFunctionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetFunctionConfiguration API call.

---

##### `opGetFunctionEventInvokeConfig`<sup>Required</sup> <a name="opGetFunctionEventInvokeConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionEventInvokeConfig"></a>

```typescript
public readonly opGetFunctionEventInvokeConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetFunctionEventInvokeConfig API call.

---

##### `opGetFunctionRecursionConfig`<sup>Required</sup> <a name="opGetFunctionRecursionConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionRecursionConfig"></a>

```typescript
public readonly opGetFunctionRecursionConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetFunctionRecursionConfig API call.

---

##### `opGetFunctionScalingConfig`<sup>Required</sup> <a name="opGetFunctionScalingConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionScalingConfig"></a>

```typescript
public readonly opGetFunctionScalingConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetFunctionScalingConfig API call.

---

##### `opGetFunctionUrlConfig`<sup>Required</sup> <a name="opGetFunctionUrlConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetFunctionUrlConfig"></a>

```typescript
public readonly opGetFunctionUrlConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetFunctionUrlConfig API call.

---

##### `opGetLayerVersion`<sup>Required</sup> <a name="opGetLayerVersion" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetLayerVersion"></a>

```typescript
public readonly opGetLayerVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetLayerVersion API call.

---

##### `opGetLayerVersionByArn`<sup>Required</sup> <a name="opGetLayerVersionByArn" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetLayerVersionByArn"></a>

```typescript
public readonly opGetLayerVersionByArn: string[];
```

- *Type:* string[]

IAM actions required for the GetLayerVersionByArn API call.

---

##### `opGetLayerVersionPolicy`<sup>Required</sup> <a name="opGetLayerVersionPolicy" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetLayerVersionPolicy"></a>

```typescript
public readonly opGetLayerVersionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetLayerVersionPolicy API call.

---

##### `opGetMicrovm`<sup>Required</sup> <a name="opGetMicrovm" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetMicrovm"></a>

```typescript
public readonly opGetMicrovm: string[];
```

- *Type:* string[]

IAM actions required for the GetMicrovm API call.

---

##### `opGetMicrovmImage`<sup>Required</sup> <a name="opGetMicrovmImage" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetMicrovmImage"></a>

```typescript
public readonly opGetMicrovmImage: string[];
```

- *Type:* string[]

IAM actions required for the GetMicrovmImage API call.

---

##### `opGetMicrovmImageBuild`<sup>Required</sup> <a name="opGetMicrovmImageBuild" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetMicrovmImageBuild"></a>

```typescript
public readonly opGetMicrovmImageBuild: string[];
```

- *Type:* string[]

IAM actions required for the GetMicrovmImageBuild API call.

---

##### `opGetMicrovmImageVersion`<sup>Required</sup> <a name="opGetMicrovmImageVersion" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetMicrovmImageVersion"></a>

```typescript
public readonly opGetMicrovmImageVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetMicrovmImageVersion API call.

---

##### `opGetNetworkConnector`<sup>Required</sup> <a name="opGetNetworkConnector" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetNetworkConnector"></a>

```typescript
public readonly opGetNetworkConnector: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkConnector API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetProvisionedConcurrencyConfig`<sup>Required</sup> <a name="opGetProvisionedConcurrencyConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetProvisionedConcurrencyConfig"></a>

```typescript
public readonly opGetProvisionedConcurrencyConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetProvisionedConcurrencyConfig API call.

---

##### `opGetRuntimeManagementConfig`<sup>Required</sup> <a name="opGetRuntimeManagementConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.opGetRuntimeManagementConfig"></a>

```typescript
public readonly opGetRuntimeManagementConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetRuntimeManagementConfig API call.

---

##### `PublishLayerVersion`<sup>Required</sup> <a name="PublishLayerVersion" id="@cdk_utils/iam.lambda.LambdaOperations.property.PublishLayerVersion"></a>

```typescript
public readonly PublishLayerVersion: string[];
```

- *Type:* string[]

IAM actions required for the PublishLayerVersion API call.

---

##### `PublishVersion`<sup>Required</sup> <a name="PublishVersion" id="@cdk_utils/iam.lambda.LambdaOperations.property.PublishVersion"></a>

```typescript
public readonly PublishVersion: string[];
```

- *Type:* string[]

IAM actions required for the PublishVersion API call.

---

##### `PutFunctionCodeSigningConfig`<sup>Required</sup> <a name="PutFunctionCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.PutFunctionCodeSigningConfig"></a>

```typescript
public readonly PutFunctionCodeSigningConfig: string[];
```

- *Type:* string[]

IAM actions required for the PutFunctionCodeSigningConfig API call.

---

##### `PutFunctionConcurrency`<sup>Required</sup> <a name="PutFunctionConcurrency" id="@cdk_utils/iam.lambda.LambdaOperations.property.PutFunctionConcurrency"></a>

```typescript
public readonly PutFunctionConcurrency: string[];
```

- *Type:* string[]

IAM actions required for the PutFunctionConcurrency API call.

---

##### `PutFunctionEventInvokeConfig`<sup>Required</sup> <a name="PutFunctionEventInvokeConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.PutFunctionEventInvokeConfig"></a>

```typescript
public readonly PutFunctionEventInvokeConfig: string[];
```

- *Type:* string[]

IAM actions required for the PutFunctionEventInvokeConfig API call.

---

##### `PutFunctionRecursionConfig`<sup>Required</sup> <a name="PutFunctionRecursionConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.PutFunctionRecursionConfig"></a>

```typescript
public readonly PutFunctionRecursionConfig: string[];
```

- *Type:* string[]

IAM actions required for the PutFunctionRecursionConfig API call.

---

##### `PutFunctionScalingConfig`<sup>Required</sup> <a name="PutFunctionScalingConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.PutFunctionScalingConfig"></a>

```typescript
public readonly PutFunctionScalingConfig: string[];
```

- *Type:* string[]

IAM actions required for the PutFunctionScalingConfig API call.

---

##### `PutProvisionedConcurrencyConfig`<sup>Required</sup> <a name="PutProvisionedConcurrencyConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.PutProvisionedConcurrencyConfig"></a>

```typescript
public readonly PutProvisionedConcurrencyConfig: string[];
```

- *Type:* string[]

IAM actions required for the PutProvisionedConcurrencyConfig API call.

---

##### `PutRuntimeManagementConfig`<sup>Required</sup> <a name="PutRuntimeManagementConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.PutRuntimeManagementConfig"></a>

```typescript
public readonly PutRuntimeManagementConfig: string[];
```

- *Type:* string[]

IAM actions required for the PutRuntimeManagementConfig API call.

---

##### `RemoveEventSource`<sup>Required</sup> <a name="RemoveEventSource" id="@cdk_utils/iam.lambda.LambdaOperations.property.RemoveEventSource"></a>

```typescript
public readonly RemoveEventSource: string[];
```

- *Type:* string[]

IAM actions required for the RemoveEventSource API call.

---

##### `RemoveLayerVersionPermission`<sup>Required</sup> <a name="RemoveLayerVersionPermission" id="@cdk_utils/iam.lambda.LambdaOperations.property.RemoveLayerVersionPermission"></a>

```typescript
public readonly RemoveLayerVersionPermission: string[];
```

- *Type:* string[]

IAM actions required for the RemoveLayerVersionPermission API call.

---

##### `RemovePermission`<sup>Required</sup> <a name="RemovePermission" id="@cdk_utils/iam.lambda.LambdaOperations.property.RemovePermission"></a>

```typescript
public readonly RemovePermission: string[];
```

- *Type:* string[]

IAM actions required for the RemovePermission API call.

---

##### `ResumeMicrovm`<sup>Required</sup> <a name="ResumeMicrovm" id="@cdk_utils/iam.lambda.LambdaOperations.property.ResumeMicrovm"></a>

```typescript
public readonly ResumeMicrovm: string[];
```

- *Type:* string[]

IAM actions required for the ResumeMicrovm API call.

---

##### `RunMicrovm`<sup>Required</sup> <a name="RunMicrovm" id="@cdk_utils/iam.lambda.LambdaOperations.property.RunMicrovm"></a>

```typescript
public readonly RunMicrovm: string[];
```

- *Type:* string[]

IAM actions required for the RunMicrovm API call.

---

##### `SendDurableExecutionCallbackFailure`<sup>Required</sup> <a name="SendDurableExecutionCallbackFailure" id="@cdk_utils/iam.lambda.LambdaOperations.property.SendDurableExecutionCallbackFailure"></a>

```typescript
public readonly SendDurableExecutionCallbackFailure: string[];
```

- *Type:* string[]

IAM actions required for the SendDurableExecutionCallbackFailure API call.

---

##### `SendDurableExecutionCallbackHeartbeat`<sup>Required</sup> <a name="SendDurableExecutionCallbackHeartbeat" id="@cdk_utils/iam.lambda.LambdaOperations.property.SendDurableExecutionCallbackHeartbeat"></a>

```typescript
public readonly SendDurableExecutionCallbackHeartbeat: string[];
```

- *Type:* string[]

IAM actions required for the SendDurableExecutionCallbackHeartbeat API call.

---

##### `SendDurableExecutionCallbackSuccess`<sup>Required</sup> <a name="SendDurableExecutionCallbackSuccess" id="@cdk_utils/iam.lambda.LambdaOperations.property.SendDurableExecutionCallbackSuccess"></a>

```typescript
public readonly SendDurableExecutionCallbackSuccess: string[];
```

- *Type:* string[]

IAM actions required for the SendDurableExecutionCallbackSuccess API call.

---

##### `StopDurableExecution`<sup>Required</sup> <a name="StopDurableExecution" id="@cdk_utils/iam.lambda.LambdaOperations.property.StopDurableExecution"></a>

```typescript
public readonly StopDurableExecution: string[];
```

- *Type:* string[]

IAM actions required for the StopDurableExecution API call.

---

##### `SuspendMicrovm`<sup>Required</sup> <a name="SuspendMicrovm" id="@cdk_utils/iam.lambda.LambdaOperations.property.SuspendMicrovm"></a>

```typescript
public readonly SuspendMicrovm: string[];
```

- *Type:* string[]

IAM actions required for the SuspendMicrovm API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.lambda.LambdaOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateMicrovm`<sup>Required</sup> <a name="TerminateMicrovm" id="@cdk_utils/iam.lambda.LambdaOperations.property.TerminateMicrovm"></a>

```typescript
public readonly TerminateMicrovm: string[];
```

- *Type:* string[]

IAM actions required for the TerminateMicrovm API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.lambda.LambdaOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAlias`<sup>Required</sup> <a name="UpdateAlias" id="@cdk_utils/iam.lambda.LambdaOperations.property.UpdateAlias"></a>

```typescript
public readonly UpdateAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAlias API call.

---

##### `UpdateCapacityProvider`<sup>Required</sup> <a name="UpdateCapacityProvider" id="@cdk_utils/iam.lambda.LambdaOperations.property.UpdateCapacityProvider"></a>

```typescript
public readonly UpdateCapacityProvider: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCapacityProvider API call.

---

##### `UpdateCodeSigningConfig`<sup>Required</sup> <a name="UpdateCodeSigningConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.UpdateCodeSigningConfig"></a>

```typescript
public readonly UpdateCodeSigningConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCodeSigningConfig API call.

---

##### `UpdateEventSourceMapping`<sup>Required</sup> <a name="UpdateEventSourceMapping" id="@cdk_utils/iam.lambda.LambdaOperations.property.UpdateEventSourceMapping"></a>

```typescript
public readonly UpdateEventSourceMapping: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventSourceMapping API call.

---

##### `UpdateFunctionCode`<sup>Required</sup> <a name="UpdateFunctionCode" id="@cdk_utils/iam.lambda.LambdaOperations.property.UpdateFunctionCode"></a>

```typescript
public readonly UpdateFunctionCode: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFunctionCode API call.

---

##### `UpdateFunctionConfiguration`<sup>Required</sup> <a name="UpdateFunctionConfiguration" id="@cdk_utils/iam.lambda.LambdaOperations.property.UpdateFunctionConfiguration"></a>

```typescript
public readonly UpdateFunctionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFunctionConfiguration API call.

---

##### `UpdateFunctionEventInvokeConfig`<sup>Required</sup> <a name="UpdateFunctionEventInvokeConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.UpdateFunctionEventInvokeConfig"></a>

```typescript
public readonly UpdateFunctionEventInvokeConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFunctionEventInvokeConfig API call.

---

##### `UpdateFunctionUrlConfig`<sup>Required</sup> <a name="UpdateFunctionUrlConfig" id="@cdk_utils/iam.lambda.LambdaOperations.property.UpdateFunctionUrlConfig"></a>

```typescript
public readonly UpdateFunctionUrlConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFunctionUrlConfig API call.

---

##### `UpdateMicrovmImage`<sup>Required</sup> <a name="UpdateMicrovmImage" id="@cdk_utils/iam.lambda.LambdaOperations.property.UpdateMicrovmImage"></a>

```typescript
public readonly UpdateMicrovmImage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMicrovmImage API call.

---

##### `UpdateMicrovmImageVersion`<sup>Required</sup> <a name="UpdateMicrovmImageVersion" id="@cdk_utils/iam.lambda.LambdaOperations.property.UpdateMicrovmImageVersion"></a>

```typescript
public readonly UpdateMicrovmImageVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMicrovmImageVersion API call.

---

##### `UpdateNetworkConnector`<sup>Required</sup> <a name="UpdateNetworkConnector" id="@cdk_utils/iam.lambda.LambdaOperations.property.UpdateNetworkConnector"></a>

```typescript
public readonly UpdateNetworkConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNetworkConnector API call.

---

##### `UploadFunction`<sup>Required</sup> <a name="UploadFunction" id="@cdk_utils/iam.lambda.LambdaOperations.property.UploadFunction"></a>

```typescript
public readonly UploadFunction: string[];
```

- *Type:* string[]

IAM actions required for the UploadFunction API call.

---

### LambdaResources <a name="LambdaResources" id="@cdk_utils/iam.lambda.LambdaResources"></a>

ARN builders, validators, and parsers for lambda resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lambda.LambdaResources.Initializer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

new lambda.LambdaResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.capacityProvider">capacityProvider</a></code> | Builds an ARN for the capacityProvider resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.codeSigningConfig">codeSigningConfig</a></code> | Builds an ARN for the code signing config resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.durableExecution">durableExecution</a></code> | Builds an ARN for the durable execution resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.eventSourceMapping">eventSourceMapping</a></code> | Builds an ARN for the eventSourceMapping resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.function">function</a></code> | Builds an ARN for the function resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.functionAlias">functionAlias</a></code> | Builds an ARN for the function alias resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.functionVersion">functionVersion</a></code> | Builds an ARN for the function version resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.isValidCapacityProviderArn">isValidCapacityProviderArn</a></code> | Validates whether a string is a valid ARN for the capacityProvider resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.isValidCodeSigningConfigArn">isValidCodeSigningConfigArn</a></code> | Validates whether a string is a valid ARN for the code signing config resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.isValidDurableExecutionArn">isValidDurableExecutionArn</a></code> | Validates whether a string is a valid ARN for the durable execution resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.isValidEventSourceMappingArn">isValidEventSourceMappingArn</a></code> | Validates whether a string is a valid ARN for the eventSourceMapping resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.isValidFunctionAliasArn">isValidFunctionAliasArn</a></code> | Validates whether a string is a valid ARN for the function alias resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.isValidFunctionArn">isValidFunctionArn</a></code> | Validates whether a string is a valid ARN for the function resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.isValidFunctionVersionArn">isValidFunctionVersionArn</a></code> | Validates whether a string is a valid ARN for the function version resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.isValidLayerArn">isValidLayerArn</a></code> | Validates whether a string is a valid ARN for the layer resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.isValidLayerVersionArn">isValidLayerVersionArn</a></code> | Validates whether a string is a valid ARN for the layerVersion resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.isValidMicrovmImageArn">isValidMicrovmImageArn</a></code> | Validates whether a string is a valid ARN for the microvmImage resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.isValidNetworkConnectorArn">isValidNetworkConnectorArn</a></code> | Validates whether a string is a valid ARN for the networkConnector resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.layer">layer</a></code> | Builds an ARN for the layer resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.layerVersion">layerVersion</a></code> | Builds an ARN for the layerVersion resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.microvmImage">microvmImage</a></code> | Builds an ARN for the microvmImage resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.networkConnector">networkConnector</a></code> | Builds an ARN for the networkConnector resource. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.parseCapacityProviderArn">parseCapacityProviderArn</a></code> | Parses a capacityProvider ARN into its components. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.parseCodeSigningConfigArn">parseCodeSigningConfigArn</a></code> | Parses a code signing config ARN into its components. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.parseDurableExecutionArn">parseDurableExecutionArn</a></code> | Parses a durable execution ARN into its components. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.parseEventSourceMappingArn">parseEventSourceMappingArn</a></code> | Parses a eventSourceMapping ARN into its components. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.parseFunctionAliasArn">parseFunctionAliasArn</a></code> | Parses a function alias ARN into its components. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.parseFunctionArn">parseFunctionArn</a></code> | Parses a function ARN into its components. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.parseFunctionVersionArn">parseFunctionVersionArn</a></code> | Parses a function version ARN into its components. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.parseLayerArn">parseLayerArn</a></code> | Parses a layer ARN into its components. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.parseLayerVersionArn">parseLayerVersionArn</a></code> | Parses a layerVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.parseMicrovmImageArn">parseMicrovmImageArn</a></code> | Parses a microvmImage ARN into its components. |
| <code><a href="#@cdk_utils/iam.lambda.LambdaResources.parseNetworkConnectorArn">parseNetworkConnectorArn</a></code> | Parses a networkConnector ARN into its components. |

---

##### `capacityProvider` <a name="capacityProvider" id="@cdk_utils/iam.lambda.LambdaResources.capacityProvider"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.capacityProvider(props: LambdaCapacityProviderArnProps)
```

Builds an ARN for the capacityProvider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lambda.LambdaResources.capacityProvider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lambda.LambdaCapacityProviderArnProps">LambdaCapacityProviderArnProps</a>

---

##### `codeSigningConfig` <a name="codeSigningConfig" id="@cdk_utils/iam.lambda.LambdaResources.codeSigningConfig"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.codeSigningConfig(props: LambdaCodeSigningConfigArnProps)
```

Builds an ARN for the code signing config resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lambda.LambdaResources.codeSigningConfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lambda.LambdaCodeSigningConfigArnProps">LambdaCodeSigningConfigArnProps</a>

---

##### `durableExecution` <a name="durableExecution" id="@cdk_utils/iam.lambda.LambdaResources.durableExecution"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.durableExecution(props: LambdaDurableExecutionArnProps)
```

Builds an ARN for the durable execution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lambda.LambdaResources.durableExecution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lambda.LambdaDurableExecutionArnProps">LambdaDurableExecutionArnProps</a>

---

##### `eventSourceMapping` <a name="eventSourceMapping" id="@cdk_utils/iam.lambda.LambdaResources.eventSourceMapping"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.eventSourceMapping(props: LambdaEventSourceMappingArnProps)
```

Builds an ARN for the eventSourceMapping resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lambda.LambdaResources.eventSourceMapping.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lambda.LambdaEventSourceMappingArnProps">LambdaEventSourceMappingArnProps</a>

---

##### `function` <a name="function" id="@cdk_utils/iam.lambda.LambdaResources.function"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.function(props: LambdaFunctionArnProps)
```

Builds an ARN for the function resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lambda.LambdaResources.function.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lambda.LambdaFunctionArnProps">LambdaFunctionArnProps</a>

---

##### `functionAlias` <a name="functionAlias" id="@cdk_utils/iam.lambda.LambdaResources.functionAlias"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.functionAlias(props: LambdaFunctionAliasArnProps)
```

Builds an ARN for the function alias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lambda.LambdaResources.functionAlias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lambda.LambdaFunctionAliasArnProps">LambdaFunctionAliasArnProps</a>

---

##### `functionVersion` <a name="functionVersion" id="@cdk_utils/iam.lambda.LambdaResources.functionVersion"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.functionVersion(props: LambdaFunctionVersionArnProps)
```

Builds an ARN for the function version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lambda.LambdaResources.functionVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lambda.LambdaFunctionVersionArnProps">LambdaFunctionVersionArnProps</a>

---

##### `isValidCapacityProviderArn` <a name="isValidCapacityProviderArn" id="@cdk_utils/iam.lambda.LambdaResources.isValidCapacityProviderArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.isValidCapacityProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the capacityProvider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.isValidCapacityProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCodeSigningConfigArn` <a name="isValidCodeSigningConfigArn" id="@cdk_utils/iam.lambda.LambdaResources.isValidCodeSigningConfigArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.isValidCodeSigningConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the code signing config resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.isValidCodeSigningConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDurableExecutionArn` <a name="isValidDurableExecutionArn" id="@cdk_utils/iam.lambda.LambdaResources.isValidDurableExecutionArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.isValidDurableExecutionArn(arn: string)
```

Validates whether a string is a valid ARN for the durable execution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.isValidDurableExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventSourceMappingArn` <a name="isValidEventSourceMappingArn" id="@cdk_utils/iam.lambda.LambdaResources.isValidEventSourceMappingArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.isValidEventSourceMappingArn(arn: string)
```

Validates whether a string is a valid ARN for the eventSourceMapping resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.isValidEventSourceMappingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFunctionAliasArn` <a name="isValidFunctionAliasArn" id="@cdk_utils/iam.lambda.LambdaResources.isValidFunctionAliasArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.isValidFunctionAliasArn(arn: string)
```

Validates whether a string is a valid ARN for the function alias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.isValidFunctionAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFunctionArn` <a name="isValidFunctionArn" id="@cdk_utils/iam.lambda.LambdaResources.isValidFunctionArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.isValidFunctionArn(arn: string)
```

Validates whether a string is a valid ARN for the function resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.isValidFunctionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFunctionVersionArn` <a name="isValidFunctionVersionArn" id="@cdk_utils/iam.lambda.LambdaResources.isValidFunctionVersionArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.isValidFunctionVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the function version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.isValidFunctionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLayerArn` <a name="isValidLayerArn" id="@cdk_utils/iam.lambda.LambdaResources.isValidLayerArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.isValidLayerArn(arn: string)
```

Validates whether a string is a valid ARN for the layer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.isValidLayerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLayerVersionArn` <a name="isValidLayerVersionArn" id="@cdk_utils/iam.lambda.LambdaResources.isValidLayerVersionArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.isValidLayerVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the layerVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.isValidLayerVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMicrovmImageArn` <a name="isValidMicrovmImageArn" id="@cdk_utils/iam.lambda.LambdaResources.isValidMicrovmImageArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.isValidMicrovmImageArn(arn: string)
```

Validates whether a string is a valid ARN for the microvmImage resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.isValidMicrovmImageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkConnectorArn` <a name="isValidNetworkConnectorArn" id="@cdk_utils/iam.lambda.LambdaResources.isValidNetworkConnectorArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.isValidNetworkConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the networkConnector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.isValidNetworkConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `layer` <a name="layer" id="@cdk_utils/iam.lambda.LambdaResources.layer"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.layer(props: LambdaLayerArnProps)
```

Builds an ARN for the layer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lambda.LambdaResources.layer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lambda.LambdaLayerArnProps">LambdaLayerArnProps</a>

---

##### `layerVersion` <a name="layerVersion" id="@cdk_utils/iam.lambda.LambdaResources.layerVersion"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.layerVersion(props: LambdaLayerVersionArnProps)
```

Builds an ARN for the layerVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lambda.LambdaResources.layerVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lambda.LambdaLayerVersionArnProps">LambdaLayerVersionArnProps</a>

---

##### `microvmImage` <a name="microvmImage" id="@cdk_utils/iam.lambda.LambdaResources.microvmImage"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.microvmImage(props: LambdaMicrovmImageArnProps)
```

Builds an ARN for the microvmImage resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lambda.LambdaResources.microvmImage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lambda.LambdaMicrovmImageArnProps">LambdaMicrovmImageArnProps</a>

---

##### `networkConnector` <a name="networkConnector" id="@cdk_utils/iam.lambda.LambdaResources.networkConnector"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.networkConnector(props: LambdaNetworkConnectorArnProps)
```

Builds an ARN for the networkConnector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lambda.LambdaResources.networkConnector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lambda.LambdaNetworkConnectorArnProps">LambdaNetworkConnectorArnProps</a>

---

##### `parseCapacityProviderArn` <a name="parseCapacityProviderArn" id="@cdk_utils/iam.lambda.LambdaResources.parseCapacityProviderArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.parseCapacityProviderArn(arn: string)
```

Parses a capacityProvider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.parseCapacityProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCodeSigningConfigArn` <a name="parseCodeSigningConfigArn" id="@cdk_utils/iam.lambda.LambdaResources.parseCodeSigningConfigArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.parseCodeSigningConfigArn(arn: string)
```

Parses a code signing config ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.parseCodeSigningConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDurableExecutionArn` <a name="parseDurableExecutionArn" id="@cdk_utils/iam.lambda.LambdaResources.parseDurableExecutionArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.parseDurableExecutionArn(arn: string)
```

Parses a durable execution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.parseDurableExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventSourceMappingArn` <a name="parseEventSourceMappingArn" id="@cdk_utils/iam.lambda.LambdaResources.parseEventSourceMappingArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.parseEventSourceMappingArn(arn: string)
```

Parses a eventSourceMapping ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.parseEventSourceMappingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFunctionAliasArn` <a name="parseFunctionAliasArn" id="@cdk_utils/iam.lambda.LambdaResources.parseFunctionAliasArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.parseFunctionAliasArn(arn: string)
```

Parses a function alias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.parseFunctionAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFunctionArn` <a name="parseFunctionArn" id="@cdk_utils/iam.lambda.LambdaResources.parseFunctionArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.parseFunctionArn(arn: string)
```

Parses a function ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.parseFunctionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFunctionVersionArn` <a name="parseFunctionVersionArn" id="@cdk_utils/iam.lambda.LambdaResources.parseFunctionVersionArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.parseFunctionVersionArn(arn: string)
```

Parses a function version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.parseFunctionVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLayerArn` <a name="parseLayerArn" id="@cdk_utils/iam.lambda.LambdaResources.parseLayerArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.parseLayerArn(arn: string)
```

Parses a layer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.parseLayerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLayerVersionArn` <a name="parseLayerVersionArn" id="@cdk_utils/iam.lambda.LambdaResources.parseLayerVersionArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.parseLayerVersionArn(arn: string)
```

Parses a layerVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.parseLayerVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMicrovmImageArn` <a name="parseMicrovmImageArn" id="@cdk_utils/iam.lambda.LambdaResources.parseMicrovmImageArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.parseMicrovmImageArn(arn: string)
```

Parses a microvmImage ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.parseMicrovmImageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkConnectorArn` <a name="parseNetworkConnectorArn" id="@cdk_utils/iam.lambda.LambdaResources.parseNetworkConnectorArn"></a>

```typescript
import { lambda } from '@cdk_utils/iam'

lambda.LambdaResources.parseNetworkConnectorArn(arn: string)
```

Parses a networkConnector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lambda.LambdaResources.parseNetworkConnectorArn.parameter.arn"></a>

- *Type:* string

---




