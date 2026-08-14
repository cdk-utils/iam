# `vpc_lattice_svcs` Submodule <a name="`vpc_lattice_svcs` Submodule" id="@cdk_utils/iam.vpc_lattice_svcs"></a>


## Structs <a name="Structs" id="Structs"></a>

### VPCLatticeSvcsServiceArnComponents <a name="VPCLatticeSvcsServiceArnComponents" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents"></a>

Parsed components of a Service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents.Initializer"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

const vPCLatticeSvcsServiceArnComponents: vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents.property.requestPath">requestPath</a></code> | <code>string</code> | The RequestPath component. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The RequestPath component.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnComponents.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component.

---

### VPCLatticeSvcsServiceArnProps <a name="VPCLatticeSvcsServiceArnProps" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps"></a>

Properties for building a Service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps.Initializer"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

const vPCLatticeSvcsServiceArnProps: vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps.property.requestPath">requestPath</a></code> | <code>string</code> | The RequestPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The RequestPath component of the ARN.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeSvcsTCPServiceArnComponents <a name="VPCLatticeSvcsTCPServiceArnComponents" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnComponents"></a>

Parsed components of a TCP Service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnComponents.Initializer"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

const vPCLatticeSvcsTCPServiceArnComponents: vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnComponents.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnComponents.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component.

---

### VPCLatticeSvcsTCPServiceArnProps <a name="VPCLatticeSvcsTCPServiceArnProps" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps"></a>

Properties for building a TCP Service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps.Initializer"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

const vPCLatticeSvcsTCPServiceArnProps: vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### VPCLatticeSvcsActions <a name="VPCLatticeSvcsActions" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions"></a>

IAM action constants for the vpc-lattice-svcs service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.Initializer"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

new vpc_lattice_svcs.VPCLatticeSvcsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.Connect">Connect</a></code> | <code>string</code> | [Write] vpc-lattice-svcs:Connect. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.Invoke">Invoke</a></code> | <code>string</code> | [Write] vpc-lattice-svcs:Invoke. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.Connect"></a>

```typescript
public readonly Connect: string;
```

- *Type:* string

[Write] vpc-lattice-svcs:Connect.

---

##### `Invoke`<sup>Required</sup> <a name="Invoke" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.Invoke"></a>

```typescript
public readonly Invoke: string;
```

- *Type:* string

[Write] vpc-lattice-svcs:Invoke.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### VPCLatticeSvcsConditions <a name="VPCLatticeSvcsConditions" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions"></a>

Condition key constants and builders for vpc-lattice-svcs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.Initializer"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

new vpc_lattice_svcs.VPCLatticeSvcsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.port">port</a></code> | Generates a condition block for `vpc-lattice-svcs:Port`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestHeader">requestHeader</a></code> | Generates a condition block for `vpc-lattice-svcs:RequestHeader/${HeaderName}`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestMethod">requestMethod</a></code> | Generates a condition block for `vpc-lattice-svcs:RequestMethod`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestPath">requestPath</a></code> | Generates a condition block for `vpc-lattice-svcs:RequestPath`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestQueryString">requestQueryString</a></code> | Generates a condition block for `vpc-lattice-svcs:RequestQueryString/${QueryStringKey}`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.serviceARN">serviceARN</a></code> | Generates a condition block for `vpc-lattice-svcs:ServiceArn`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.serviceNetworkARN">serviceNetworkARN</a></code> | Generates a condition block for `vpc-lattice-svcs:ServiceNetworkArn`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.sourceVPC">sourceVPC</a></code> | Generates a condition block for `vpc-lattice-svcs:SourceVpc`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.sourceVPCOwnerAccount">sourceVPCOwnerAccount</a></code> | Generates a condition block for `vpc-lattice-svcs:SourceVpcOwnerAccount`. |

---

##### `port` <a name="port" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.port"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsConditions.port(value: number)
```

Generates a condition block for `vpc-lattice-svcs:Port`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.port.parameter.value"></a>

- *Type:* number

---

##### `requestHeader` <a name="requestHeader" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestHeader"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsConditions.requestHeader(value: string)
```

Generates a condition block for `vpc-lattice-svcs:RequestHeader/${HeaderName}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestHeader.parameter.value"></a>

- *Type:* string

---

##### `requestMethod` <a name="requestMethod" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestMethod"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsConditions.requestMethod(value: string)
```

Generates a condition block for `vpc-lattice-svcs:RequestMethod`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestMethod.parameter.value"></a>

- *Type:* string

---

##### `requestPath` <a name="requestPath" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestPath"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsConditions.requestPath(value: string)
```

Generates a condition block for `vpc-lattice-svcs:RequestPath`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestPath.parameter.value"></a>

- *Type:* string

---

##### `requestQueryString` <a name="requestQueryString" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestQueryString"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsConditions.requestQueryString(values: string[])
```

Generates a condition block for `vpc-lattice-svcs:RequestQueryString/${QueryStringKey}`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.requestQueryString.parameter.values"></a>

- *Type:* string[]

---

##### `serviceARN` <a name="serviceARN" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.serviceARN"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsConditions.serviceARN(value: string)
```

Generates a condition block for `vpc-lattice-svcs:ServiceArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.serviceARN.parameter.value"></a>

- *Type:* string

---

##### `serviceNetworkARN` <a name="serviceNetworkARN" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.serviceNetworkARN"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsConditions.serviceNetworkARN(value: string)
```

Generates a condition block for `vpc-lattice-svcs:ServiceNetworkArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.serviceNetworkARN.parameter.value"></a>

- *Type:* string

---

##### `sourceVPC` <a name="sourceVPC" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.sourceVPC"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsConditions.sourceVPC(value: string)
```

Generates a condition block for `vpc-lattice-svcs:SourceVpc`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.sourceVPC.parameter.value"></a>

- *Type:* string

---

##### `sourceVPCOwnerAccount` <a name="sourceVPCOwnerAccount" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.sourceVPCOwnerAccount"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsConditions.sourceVPCOwnerAccount(value: string)
```

Generates a condition block for `vpc-lattice-svcs:SourceVpcOwnerAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.sourceVPCOwnerAccount.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.ConnectConditionKeys">ConnectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Connect action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.InvokeConditionKeys">InvokeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Invoke action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.PORT">PORT</a></code> | <code>string</code> | Condition key: vpc-lattice-svcs:Port (Numeric). |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.REQUEST_HEADER">REQUEST_HEADER</a></code> | <code>string</code> | Condition key: vpc-lattice-svcs:RequestHeader/${HeaderName} (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.REQUEST_METHOD">REQUEST_METHOD</a></code> | <code>string</code> | Condition key: vpc-lattice-svcs:RequestMethod (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.REQUEST_PATH">REQUEST_PATH</a></code> | <code>string</code> | Condition key: vpc-lattice-svcs:RequestPath (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.REQUEST_QUERY_STRING">REQUEST_QUERY_STRING</a></code> | <code>string</code> | Condition key: vpc-lattice-svcs:RequestQueryString/${QueryStringKey} (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.SERVICE_ARN">SERVICE_ARN</a></code> | <code>string</code> | Condition key: vpc-lattice-svcs:ServiceArn (ARN). |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.SERVICE_NETWORK_ARN">SERVICE_NETWORK_ARN</a></code> | <code>string</code> | Condition key: vpc-lattice-svcs:ServiceNetworkArn (ARN). |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.SOURCE_VPC">SOURCE_VPC</a></code> | <code>string</code> | Condition key: vpc-lattice-svcs:SourceVpc (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.SOURCE_VPC_OWNER_ACCOUNT">SOURCE_VPC_OWNER_ACCOUNT</a></code> | <code>string</code> | Condition key: vpc-lattice-svcs:SourceVpcOwnerAccount (String). |

---

##### `ConnectConditionKeys`<sup>Required</sup> <a name="ConnectConditionKeys" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.ConnectConditionKeys"></a>

```typescript
public readonly ConnectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Connect action.

---

##### `InvokeConditionKeys`<sup>Required</sup> <a name="InvokeConditionKeys" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.InvokeConditionKeys"></a>

```typescript
public readonly InvokeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Invoke action.

---

##### `PORT`<sup>Required</sup> <a name="PORT" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.PORT"></a>

```typescript
public readonly PORT: string;
```

- *Type:* string

Condition key: vpc-lattice-svcs:Port (Numeric).

---

##### `REQUEST_HEADER`<sup>Required</sup> <a name="REQUEST_HEADER" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.REQUEST_HEADER"></a>

```typescript
public readonly REQUEST_HEADER: string;
```

- *Type:* string

Condition key: vpc-lattice-svcs:RequestHeader/${HeaderName} (String).

---

##### `REQUEST_METHOD`<sup>Required</sup> <a name="REQUEST_METHOD" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.REQUEST_METHOD"></a>

```typescript
public readonly REQUEST_METHOD: string;
```

- *Type:* string

Condition key: vpc-lattice-svcs:RequestMethod (String).

---

##### `REQUEST_PATH`<sup>Required</sup> <a name="REQUEST_PATH" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.REQUEST_PATH"></a>

```typescript
public readonly REQUEST_PATH: string;
```

- *Type:* string

Condition key: vpc-lattice-svcs:RequestPath (String).

---

##### `REQUEST_QUERY_STRING`<sup>Required</sup> <a name="REQUEST_QUERY_STRING" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.REQUEST_QUERY_STRING"></a>

```typescript
public readonly REQUEST_QUERY_STRING: string;
```

- *Type:* string

Condition key: vpc-lattice-svcs:RequestQueryString/${QueryStringKey} (ArrayOfString).

---

##### `SERVICE_ARN`<sup>Required</sup> <a name="SERVICE_ARN" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.SERVICE_ARN"></a>

```typescript
public readonly SERVICE_ARN: string;
```

- *Type:* string

Condition key: vpc-lattice-svcs:ServiceArn (ARN).

---

##### `SERVICE_NETWORK_ARN`<sup>Required</sup> <a name="SERVICE_NETWORK_ARN" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.SERVICE_NETWORK_ARN"></a>

```typescript
public readonly SERVICE_NETWORK_ARN: string;
```

- *Type:* string

Condition key: vpc-lattice-svcs:ServiceNetworkArn (ARN).

---

##### `SOURCE_VPC`<sup>Required</sup> <a name="SOURCE_VPC" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.SOURCE_VPC"></a>

```typescript
public readonly SOURCE_VPC: string;
```

- *Type:* string

Condition key: vpc-lattice-svcs:SourceVpc (String).

---

##### `SOURCE_VPC_OWNER_ACCOUNT`<sup>Required</sup> <a name="SOURCE_VPC_OWNER_ACCOUNT" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsConditions.property.SOURCE_VPC_OWNER_ACCOUNT"></a>

```typescript
public readonly SOURCE_VPC_OWNER_ACCOUNT: string;
```

- *Type:* string

Condition key: vpc-lattice-svcs:SourceVpcOwnerAccount (String).

---

### VPCLatticeSvcsResources <a name="VPCLatticeSvcsResources" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources"></a>

ARN builders, validators, and parsers for vpc-lattice-svcs resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.Initializer"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

new vpc_lattice_svcs.VPCLatticeSvcsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.isValidServiceArn">isValidServiceArn</a></code> | Validates whether a string is a valid ARN for the Service resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.isValidTCPServiceArn">isValidTCPServiceArn</a></code> | Validates whether a string is a valid ARN for the TCP Service resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.parseServiceArn">parseServiceArn</a></code> | Parses a Service ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.parseTCPServiceArn">parseTCPServiceArn</a></code> | Parses a TCP Service ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.service">service</a></code> | Builds an ARN for the Service resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.tcpService">tcpService</a></code> | Builds an ARN for the TCP Service resource. |

---

##### `isValidServiceArn` <a name="isValidServiceArn" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.isValidServiceArn"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsResources.isValidServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the Service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.isValidServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTCPServiceArn` <a name="isValidTCPServiceArn" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.isValidTCPServiceArn"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsResources.isValidTCPServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the TCP Service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.isValidTCPServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceArn` <a name="parseServiceArn" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.parseServiceArn"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsResources.parseServiceArn(arn: string)
```

Parses a Service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.parseServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTCPServiceArn` <a name="parseTCPServiceArn" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.parseTCPServiceArn"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsResources.parseTCPServiceArn(arn: string)
```

Parses a TCP Service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.parseTCPServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `service` <a name="service" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.service"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsResources.service(props: VPCLatticeSvcsServiceArnProps)
```

Builds an ARN for the Service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.service.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsServiceArnProps">VPCLatticeSvcsServiceArnProps</a>

---

##### `tcpService` <a name="tcpService" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.tcpService"></a>

```typescript
import { vpc_lattice_svcs } from '@cdk_utils/iam'

vpc_lattice_svcs.VPCLatticeSvcsResources.tcpService(props: VPCLatticeSvcsTCPServiceArnProps)
```

Builds an ARN for the TCP Service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsResources.tcpService.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice_svcs.VPCLatticeSvcsTCPServiceArnProps">VPCLatticeSvcsTCPServiceArnProps</a>

---




