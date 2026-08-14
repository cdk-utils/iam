# `execute_api` Submodule <a name="`execute_api` Submodule" id="@cdk_utils/iam.execute_api"></a>


## Structs <a name="Structs" id="Structs"></a>

### ExecuteAPIExecuteAPIDomainArnComponents <a name="ExecuteAPIExecuteAPIDomainArnComponents" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents"></a>

Parsed components of a execute-api-domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents.Initializer"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

const executeAPIExecuteAPIDomainArnComponents: execute_api.ExecuteAPIExecuteAPIDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The DomainIdentifier component. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The DomainIdentifier component.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ExecuteAPIExecuteAPIDomainArnProps <a name="ExecuteAPIExecuteAPIDomainArnProps" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps"></a>

Properties for building a execute-api-domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps.Initializer"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

const executeAPIExecuteAPIDomainArnProps: execute_api.ExecuteAPIExecuteAPIDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The DomainIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The DomainIdentifier component of the ARN.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ExecuteAPIExecuteAPIGeneralArnComponents <a name="ExecuteAPIExecuteAPIGeneralArnComponents" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents"></a>

Parsed components of a execute-api-general ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.Initializer"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

const executeAPIExecuteAPIGeneralArnComponents: execute_api.ExecuteAPIExecuteAPIGeneralArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.apiSpecificResourcePath">apiSpecificResourcePath</a></code> | <code>string</code> | The ApiSpecificResourcePath component. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.method">method</a></code> | <code>string</code> | The Method component. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.stage">stage</a></code> | <code>string</code> | The Stage component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component.

---

##### `apiSpecificResourcePath`<sup>Required</sup> <a name="apiSpecificResourcePath" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.apiSpecificResourcePath"></a>

```typescript
public readonly apiSpecificResourcePath: string;
```

- *Type:* string

The ApiSpecificResourcePath component.

---

##### `method`<sup>Required</sup> <a name="method" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The Method component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnComponents.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

The Stage component.

---

### ExecuteAPIExecuteAPIGeneralArnProps <a name="ExecuteAPIExecuteAPIGeneralArnProps" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps"></a>

Properties for building a execute-api-general ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.Initializer"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

const executeAPIExecuteAPIGeneralArnProps: execute_api.ExecuteAPIExecuteAPIGeneralArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.apiId">apiId</a></code> | <code>string</code> | The ApiId component of the ARN. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.apiSpecificResourcePath">apiSpecificResourcePath</a></code> | <code>string</code> | The ApiSpecificResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.method">method</a></code> | <code>string</code> | The Method component of the ARN. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.stage">stage</a></code> | <code>string</code> | The Stage component of the ARN. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The ApiId component of the ARN.

---

##### `apiSpecificResourcePath`<sup>Required</sup> <a name="apiSpecificResourcePath" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.apiSpecificResourcePath"></a>

```typescript
public readonly apiSpecificResourcePath: string;
```

- *Type:* string

The ApiSpecificResourcePath component of the ARN.

---

##### `method`<sup>Required</sup> <a name="method" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The Method component of the ARN.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

The Stage component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ExecuteAPIActions <a name="ExecuteAPIActions" id="@cdk_utils/iam.execute_api.ExecuteAPIActions"></a>

IAM action constants for the execute-api service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.execute_api.ExecuteAPIActions.Initializer"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

new execute_api.ExecuteAPIActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIActions.property.InvalidateCache">InvalidateCache</a></code> | <code>string</code> | [Write] execute-api:InvalidateCache. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIActions.property.Invoke">Invoke</a></code> | <code>string</code> | [Write] execute-api:Invoke. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIActions.property.ManageConnections">ManageConnections</a></code> | <code>string</code> | [Write] execute-api:ManageConnections. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.execute_api.ExecuteAPIActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.execute_api.ExecuteAPIActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.execute_api.ExecuteAPIActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.execute_api.ExecuteAPIActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.execute_api.ExecuteAPIActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `InvalidateCache`<sup>Required</sup> <a name="InvalidateCache" id="@cdk_utils/iam.execute_api.ExecuteAPIActions.property.InvalidateCache"></a>

```typescript
public readonly InvalidateCache: string;
```

- *Type:* string

[Write] execute-api:InvalidateCache.

---

##### `Invoke`<sup>Required</sup> <a name="Invoke" id="@cdk_utils/iam.execute_api.ExecuteAPIActions.property.Invoke"></a>

```typescript
public readonly Invoke: string;
```

- *Type:* string

[Write] execute-api:Invoke.

---

##### `ManageConnections`<sup>Required</sup> <a name="ManageConnections" id="@cdk_utils/iam.execute_api.ExecuteAPIActions.property.ManageConnections"></a>

```typescript
public readonly ManageConnections: string;
```

- *Type:* string

[Write] execute-api:ManageConnections.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.execute_api.ExecuteAPIActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### ExecuteAPIConditions <a name="ExecuteAPIConditions" id="@cdk_utils/iam.execute_api.ExecuteAPIConditions"></a>

Condition key constants and builders for execute-api.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.execute_api.ExecuteAPIConditions.Initializer"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

new execute_api.ExecuteAPIConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIConditions.viaDomainARN">viaDomainARN</a></code> | Generates a condition block for `execute-api:viaDomainArn`. |

---

##### `viaDomainARN` <a name="viaDomainARN" id="@cdk_utils/iam.execute_api.ExecuteAPIConditions.viaDomainARN"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

execute_api.ExecuteAPIConditions.viaDomainARN(value: string)
```

Generates a condition block for `execute-api:viaDomainArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.execute_api.ExecuteAPIConditions.viaDomainARN.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIConditions.property.VIA_DOMAIN_ARN">VIA_DOMAIN_ARN</a></code> | <code>string</code> | Condition key: execute-api:viaDomainArn (ARN). |

---

##### `VIA_DOMAIN_ARN`<sup>Required</sup> <a name="VIA_DOMAIN_ARN" id="@cdk_utils/iam.execute_api.ExecuteAPIConditions.property.VIA_DOMAIN_ARN"></a>

```typescript
public readonly VIA_DOMAIN_ARN: string;
```

- *Type:* string

Condition key: execute-api:viaDomainArn (ARN).

---

### ExecuteAPIOperations <a name="ExecuteAPIOperations" id="@cdk_utils/iam.execute_api.ExecuteAPIOperations"></a>

API operation to required IAM actions mapping for execute-api.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.execute_api.ExecuteAPIOperations.Initializer"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

new execute_api.ExecuteAPIOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIOperations.property.opGetConnection">opGetConnection</a></code> | <code>string[]</code> | IAM actions required for the GetConnection API call. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIOperations.property.PostToConnection">PostToConnection</a></code> | <code>string[]</code> | IAM actions required for the PostToConnection API call. |

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.execute_api.ExecuteAPIOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `opGetConnection`<sup>Required</sup> <a name="opGetConnection" id="@cdk_utils/iam.execute_api.ExecuteAPIOperations.property.opGetConnection"></a>

```typescript
public readonly opGetConnection: string[];
```

- *Type:* string[]

IAM actions required for the GetConnection API call.

---

##### `PostToConnection`<sup>Required</sup> <a name="PostToConnection" id="@cdk_utils/iam.execute_api.ExecuteAPIOperations.property.PostToConnection"></a>

```typescript
public readonly PostToConnection: string[];
```

- *Type:* string[]

IAM actions required for the PostToConnection API call.

---

### ExecuteAPIResources <a name="ExecuteAPIResources" id="@cdk_utils/iam.execute_api.ExecuteAPIResources"></a>

ARN builders, validators, and parsers for execute-api resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.Initializer"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

new execute_api.ExecuteAPIResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIResources.executeAPIDomain">executeAPIDomain</a></code> | Builds an ARN for the execute-api-domain resource. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIResources.executeAPIGeneral">executeAPIGeneral</a></code> | Builds an ARN for the execute-api-general resource. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIResources.isValidExecuteAPIDomainArn">isValidExecuteAPIDomainArn</a></code> | Validates whether a string is a valid ARN for the execute-api-domain resource. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIResources.isValidExecuteAPIGeneralArn">isValidExecuteAPIGeneralArn</a></code> | Validates whether a string is a valid ARN for the execute-api-general resource. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIResources.parseExecuteAPIDomainArn">parseExecuteAPIDomainArn</a></code> | Parses a execute-api-domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.execute_api.ExecuteAPIResources.parseExecuteAPIGeneralArn">parseExecuteAPIGeneralArn</a></code> | Parses a execute-api-general ARN into its components. |

---

##### `executeAPIDomain` <a name="executeAPIDomain" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.executeAPIDomain"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

execute_api.ExecuteAPIResources.executeAPIDomain(props: ExecuteAPIExecuteAPIDomainArnProps)
```

Builds an ARN for the execute-api-domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.executeAPIDomain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIDomainArnProps">ExecuteAPIExecuteAPIDomainArnProps</a>

---

##### `executeAPIGeneral` <a name="executeAPIGeneral" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.executeAPIGeneral"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

execute_api.ExecuteAPIResources.executeAPIGeneral(props: ExecuteAPIExecuteAPIGeneralArnProps)
```

Builds an ARN for the execute-api-general resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.executeAPIGeneral.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.execute_api.ExecuteAPIExecuteAPIGeneralArnProps">ExecuteAPIExecuteAPIGeneralArnProps</a>

---

##### `isValidExecuteAPIDomainArn` <a name="isValidExecuteAPIDomainArn" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.isValidExecuteAPIDomainArn"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

execute_api.ExecuteAPIResources.isValidExecuteAPIDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the execute-api-domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.isValidExecuteAPIDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExecuteAPIGeneralArn` <a name="isValidExecuteAPIGeneralArn" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.isValidExecuteAPIGeneralArn"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

execute_api.ExecuteAPIResources.isValidExecuteAPIGeneralArn(arn: string)
```

Validates whether a string is a valid ARN for the execute-api-general resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.isValidExecuteAPIGeneralArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExecuteAPIDomainArn` <a name="parseExecuteAPIDomainArn" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.parseExecuteAPIDomainArn"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

execute_api.ExecuteAPIResources.parseExecuteAPIDomainArn(arn: string)
```

Parses a execute-api-domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.parseExecuteAPIDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExecuteAPIGeneralArn` <a name="parseExecuteAPIGeneralArn" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.parseExecuteAPIGeneralArn"></a>

```typescript
import { execute_api } from '@cdk_utils/iam'

execute_api.ExecuteAPIResources.parseExecuteAPIGeneralArn(arn: string)
```

Parses a execute-api-general ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.execute_api.ExecuteAPIResources.parseExecuteAPIGeneralArn.parameter.arn"></a>

- *Type:* string

---




