# `bedrock_websearch` Submodule <a name="`bedrock_websearch` Submodule" id="@cdk_utils/iam.bedrock_websearch"></a>


## Structs <a name="Structs" id="Structs"></a>

### BedrockWebsearchToolArnComponents <a name="BedrockWebsearchToolArnComponents" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnComponents"></a>

Parsed components of a tool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnComponents.Initializer"></a>

```typescript
import { bedrock_websearch } from '@cdk_utils/iam'

const bedrockWebsearchToolArnComponents: bedrock_websearch.BedrockWebsearchToolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnComponents.property.toolName">toolName</a></code> | <code>string</code> | The ToolName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `toolName`<sup>Required</sup> <a name="toolName" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnComponents.property.toolName"></a>

```typescript
public readonly toolName: string;
```

- *Type:* string

The ToolName component.

---

### BedrockWebsearchToolArnProps <a name="BedrockWebsearchToolArnProps" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnProps"></a>

Properties for building a tool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnProps.Initializer"></a>

```typescript
import { bedrock_websearch } from '@cdk_utils/iam'

const bedrockWebsearchToolArnProps: bedrock_websearch.BedrockWebsearchToolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnProps.property.toolName">toolName</a></code> | <code>string</code> | The ToolName component of the ARN. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `toolName`<sup>Required</sup> <a name="toolName" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnProps.property.toolName"></a>

```typescript
public readonly toolName: string;
```

- *Type:* string

The ToolName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockWebsearchActions <a name="BedrockWebsearchActions" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions"></a>

IAM action constants for the bedrock-websearch service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.Initializer"></a>

```typescript
import { bedrock_websearch } from '@cdk_utils/iam'

new bedrock_websearch.BedrockWebsearchActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.ExternalWebAccess">ExternalWebAccess</a></code> | <code>string</code> | [Read] bedrock-websearch:ExternalWebAccess. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.InvokeFetch">InvokeFetch</a></code> | <code>string</code> | [Read] bedrock-websearch:InvokeFetch. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.InvokeSearch">InvokeSearch</a></code> | <code>string</code> | [Read] bedrock-websearch:InvokeSearch. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ExternalWebAccess`<sup>Required</sup> <a name="ExternalWebAccess" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.ExternalWebAccess"></a>

```typescript
public readonly ExternalWebAccess: string;
```

- *Type:* string

[Read] bedrock-websearch:ExternalWebAccess.

---

##### `InvokeFetch`<sup>Required</sup> <a name="InvokeFetch" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.InvokeFetch"></a>

```typescript
public readonly InvokeFetch: string;
```

- *Type:* string

[Read] bedrock-websearch:InvokeFetch.

---

##### `InvokeSearch`<sup>Required</sup> <a name="InvokeSearch" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.InvokeSearch"></a>

```typescript
public readonly InvokeSearch: string;
```

- *Type:* string

[Read] bedrock-websearch:InvokeSearch.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### BedrockWebsearchResources <a name="BedrockWebsearchResources" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchResources"></a>

ARN builders, validators, and parsers for bedrock-websearch resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchResources.Initializer"></a>

```typescript
import { bedrock_websearch } from '@cdk_utils/iam'

new bedrock_websearch.BedrockWebsearchResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchResources.isValidToolArn">isValidToolArn</a></code> | Validates whether a string is a valid ARN for the tool resource. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchResources.parseToolArn">parseToolArn</a></code> | Parses a tool ARN into its components. |
| <code><a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchResources.tool">tool</a></code> | Builds an ARN for the tool resource. |

---

##### `isValidToolArn` <a name="isValidToolArn" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchResources.isValidToolArn"></a>

```typescript
import { bedrock_websearch } from '@cdk_utils/iam'

bedrock_websearch.BedrockWebsearchResources.isValidToolArn(arn: string)
```

Validates whether a string is a valid ARN for the tool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchResources.isValidToolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseToolArn` <a name="parseToolArn" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchResources.parseToolArn"></a>

```typescript
import { bedrock_websearch } from '@cdk_utils/iam'

bedrock_websearch.BedrockWebsearchResources.parseToolArn(arn: string)
```

Parses a tool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchResources.parseToolArn.parameter.arn"></a>

- *Type:* string

---

##### `tool` <a name="tool" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchResources.tool"></a>

```typescript
import { bedrock_websearch } from '@cdk_utils/iam'

bedrock_websearch.BedrockWebsearchResources.tool(props: BedrockWebsearchToolArnProps)
```

Builds an ARN for the tool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bedrock_websearch.BedrockWebsearchResources.tool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bedrock_websearch.BedrockWebsearchToolArnProps">BedrockWebsearchToolArnProps</a>

---




