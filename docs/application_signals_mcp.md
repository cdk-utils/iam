# `application_signals_mcp` Submodule <a name="`application_signals_mcp` Submodule" id="@cdk_utils/iam.application_signals_mcp"></a>


## Structs <a name="Structs" id="Structs"></a>

### ApplicationSignalsMcpMcpServerArnComponents <a name="ApplicationSignalsMcpMcpServerArnComponents" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnComponents"></a>

Parsed components of a mcp-server ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnComponents.Initializer"></a>

```typescript
import { application_signals_mcp } from '@cdk_utils/iam'

const applicationSignalsMcpMcpServerArnComponents: application_signals_mcp.ApplicationSignalsMcpMcpServerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ApplicationSignalsMcpMcpServerArnProps <a name="ApplicationSignalsMcpMcpServerArnProps" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnProps"></a>

Properties for building a mcp-server ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnProps.Initializer"></a>

```typescript
import { application_signals_mcp } from '@cdk_utils/iam'

const applicationSignalsMcpMcpServerArnProps: application_signals_mcp.ApplicationSignalsMcpMcpServerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationSignalsMcpActions <a name="ApplicationSignalsMcpActions" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions"></a>

IAM action constants for the application-signals-mcp service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.Initializer"></a>

```typescript
import { application_signals_mcp } from '@cdk_utils/iam'

new application_signals_mcp.ApplicationSignalsMcpActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.CallReadOnlyTool">CallReadOnlyTool</a></code> | <code>string</code> | [Read] application-signals-mcp:CallReadOnlyTool. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.InvokeMcp">InvokeMcp</a></code> | <code>string</code> | [Read] application-signals-mcp:InvokeMcp. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CallReadOnlyTool`<sup>Required</sup> <a name="CallReadOnlyTool" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.CallReadOnlyTool"></a>

```typescript
public readonly CallReadOnlyTool: string;
```

- *Type:* string

[Read] application-signals-mcp:CallReadOnlyTool.

---

##### `InvokeMcp`<sup>Required</sup> <a name="InvokeMcp" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.InvokeMcp"></a>

```typescript
public readonly InvokeMcp: string;
```

- *Type:* string

[Read] application-signals-mcp:InvokeMcp.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### ApplicationSignalsMcpConditions <a name="ApplicationSignalsMcpConditions" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpConditions"></a>

Condition key constants and builders for application-signals-mcp.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpConditions.Initializer"></a>

```typescript
import { application_signals_mcp } from '@cdk_utils/iam'

new application_signals_mcp.ApplicationSignalsMcpConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpConditions.resourceTag"></a>

```typescript
import { application_signals_mcp } from '@cdk_utils/iam'

application_signals_mcp.ApplicationSignalsMcpConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpConditions.resourceTag.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

### ApplicationSignalsMcpResources <a name="ApplicationSignalsMcpResources" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpResources"></a>

ARN builders, validators, and parsers for application-signals-mcp resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpResources.Initializer"></a>

```typescript
import { application_signals_mcp } from '@cdk_utils/iam'

new application_signals_mcp.ApplicationSignalsMcpResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpResources.isValidMcpServerArn">isValidMcpServerArn</a></code> | Validates whether a string is a valid ARN for the mcp-server resource. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpResources.mcpServer">mcpServer</a></code> | Builds an ARN for the mcp-server resource. |
| <code><a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpResources.parseMcpServerArn">parseMcpServerArn</a></code> | Parses a mcp-server ARN into its components. |

---

##### `isValidMcpServerArn` <a name="isValidMcpServerArn" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpResources.isValidMcpServerArn"></a>

```typescript
import { application_signals_mcp } from '@cdk_utils/iam'

application_signals_mcp.ApplicationSignalsMcpResources.isValidMcpServerArn(arn: string)
```

Validates whether a string is a valid ARN for the mcp-server resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpResources.isValidMcpServerArn.parameter.arn"></a>

- *Type:* string

---

##### `mcpServer` <a name="mcpServer" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpResources.mcpServer"></a>

```typescript
import { application_signals_mcp } from '@cdk_utils/iam'

application_signals_mcp.ApplicationSignalsMcpResources.mcpServer(props: ApplicationSignalsMcpMcpServerArnProps)
```

Builds an ARN for the mcp-server resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpResources.mcpServer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpMcpServerArnProps">ApplicationSignalsMcpMcpServerArnProps</a>

---

##### `parseMcpServerArn` <a name="parseMcpServerArn" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpResources.parseMcpServerArn"></a>

```typescript
import { application_signals_mcp } from '@cdk_utils/iam'

application_signals_mcp.ApplicationSignalsMcpResources.parseMcpServerArn(arn: string)
```

Parses a mcp-server ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.application_signals_mcp.ApplicationSignalsMcpResources.parseMcpServerArn.parameter.arn"></a>

- *Type:* string

---




