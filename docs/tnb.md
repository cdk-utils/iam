# `tnb` Submodule <a name="`tnb` Submodule" id="@cdk_utils/iam.tnb"></a>


## Structs <a name="Structs" id="Structs"></a>

### TnbFunctionInstanceArnComponents <a name="TnbFunctionInstanceArnComponents" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnComponents"></a>

Parsed components of a function-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnComponents.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

const tnbFunctionInstanceArnComponents: tnb.TnbFunctionInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionInstanceArnComponents.property.functionInstanceId">functionInstanceId</a></code> | <code>string</code> | The FunctionInstanceId component. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `functionInstanceId`<sup>Required</sup> <a name="functionInstanceId" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnComponents.property.functionInstanceId"></a>

```typescript
public readonly functionInstanceId: string;
```

- *Type:* string

The FunctionInstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TnbFunctionInstanceArnProps <a name="TnbFunctionInstanceArnProps" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnProps"></a>

Properties for building a function-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnProps.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

const tnbFunctionInstanceArnProps: tnb.TnbFunctionInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionInstanceArnProps.property.functionInstanceId">functionInstanceId</a></code> | <code>string</code> | The FunctionInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `functionInstanceId`<sup>Required</sup> <a name="functionInstanceId" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnProps.property.functionInstanceId"></a>

```typescript
public readonly functionInstanceId: string;
```

- *Type:* string

The FunctionInstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.tnb.TnbFunctionInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TnbFunctionPackageArnComponents <a name="TnbFunctionPackageArnComponents" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnComponents"></a>

Parsed components of a function-package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnComponents.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

const tnbFunctionPackageArnComponents: tnb.TnbFunctionPackageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionPackageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionPackageArnComponents.property.functionPackageId">functionPackageId</a></code> | <code>string</code> | The FunctionPackageId component. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionPackageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionPackageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `functionPackageId`<sup>Required</sup> <a name="functionPackageId" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnComponents.property.functionPackageId"></a>

```typescript
public readonly functionPackageId: string;
```

- *Type:* string

The FunctionPackageId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TnbFunctionPackageArnProps <a name="TnbFunctionPackageArnProps" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnProps"></a>

Properties for building a function-package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnProps.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

const tnbFunctionPackageArnProps: tnb.TnbFunctionPackageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionPackageArnProps.property.functionPackageId">functionPackageId</a></code> | <code>string</code> | The FunctionPackageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionPackageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionPackageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.tnb.TnbFunctionPackageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `functionPackageId`<sup>Required</sup> <a name="functionPackageId" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnProps.property.functionPackageId"></a>

```typescript
public readonly functionPackageId: string;
```

- *Type:* string

The FunctionPackageId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.tnb.TnbFunctionPackageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TnbNetworkInstanceArnComponents <a name="TnbNetworkInstanceArnComponents" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnComponents"></a>

Parsed components of a network-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnComponents.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

const tnbNetworkInstanceArnComponents: tnb.TnbNetworkInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkInstanceArnComponents.property.networkInstanceId">networkInstanceId</a></code> | <code>string</code> | The NetworkInstanceId component. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkInstanceId`<sup>Required</sup> <a name="networkInstanceId" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnComponents.property.networkInstanceId"></a>

```typescript
public readonly networkInstanceId: string;
```

- *Type:* string

The NetworkInstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TnbNetworkInstanceArnProps <a name="TnbNetworkInstanceArnProps" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnProps"></a>

Properties for building a network-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnProps.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

const tnbNetworkInstanceArnProps: tnb.TnbNetworkInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkInstanceArnProps.property.networkInstanceId">networkInstanceId</a></code> | <code>string</code> | The NetworkInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkInstanceId`<sup>Required</sup> <a name="networkInstanceId" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnProps.property.networkInstanceId"></a>

```typescript
public readonly networkInstanceId: string;
```

- *Type:* string

The NetworkInstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.tnb.TnbNetworkInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TnbNetworkOperationArnComponents <a name="TnbNetworkOperationArnComponents" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnComponents"></a>

Parsed components of a network-operation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnComponents.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

const tnbNetworkOperationArnComponents: tnb.TnbNetworkOperationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkOperationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkOperationArnComponents.property.networkOperationId">networkOperationId</a></code> | <code>string</code> | The NetworkOperationId component. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkOperationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkOperationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkOperationId`<sup>Required</sup> <a name="networkOperationId" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnComponents.property.networkOperationId"></a>

```typescript
public readonly networkOperationId: string;
```

- *Type:* string

The NetworkOperationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TnbNetworkOperationArnProps <a name="TnbNetworkOperationArnProps" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnProps"></a>

Properties for building a network-operation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnProps.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

const tnbNetworkOperationArnProps: tnb.TnbNetworkOperationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkOperationArnProps.property.networkOperationId">networkOperationId</a></code> | <code>string</code> | The NetworkOperationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkOperationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkOperationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkOperationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkOperationId`<sup>Required</sup> <a name="networkOperationId" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnProps.property.networkOperationId"></a>

```typescript
public readonly networkOperationId: string;
```

- *Type:* string

The NetworkOperationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.tnb.TnbNetworkOperationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TnbNetworkPackageArnComponents <a name="TnbNetworkPackageArnComponents" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnComponents"></a>

Parsed components of a network-package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnComponents.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

const tnbNetworkPackageArnComponents: tnb.TnbNetworkPackageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkPackageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkPackageArnComponents.property.networkPackageId">networkPackageId</a></code> | <code>string</code> | The NetworkPackageId component. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkPackageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkPackageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkPackageId`<sup>Required</sup> <a name="networkPackageId" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnComponents.property.networkPackageId"></a>

```typescript
public readonly networkPackageId: string;
```

- *Type:* string

The NetworkPackageId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TnbNetworkPackageArnProps <a name="TnbNetworkPackageArnProps" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnProps"></a>

Properties for building a network-package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnProps.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

const tnbNetworkPackageArnProps: tnb.TnbNetworkPackageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkPackageArnProps.property.networkPackageId">networkPackageId</a></code> | <code>string</code> | The NetworkPackageId component of the ARN. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkPackageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkPackageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.tnb.TnbNetworkPackageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkPackageId`<sup>Required</sup> <a name="networkPackageId" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnProps.property.networkPackageId"></a>

```typescript
public readonly networkPackageId: string;
```

- *Type:* string

The NetworkPackageId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.tnb.TnbNetworkPackageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### TnbActions <a name="TnbActions" id="@cdk_utils/iam.tnb.TnbActions"></a>

IAM action constants for the tnb service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.tnb.TnbActions.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

new tnb.TnbActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.actionGetSolFunctionInstance">actionGetSolFunctionInstance</a></code> | <code>string</code> | [Read] tnb:GetSolFunctionInstance. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.actionGetSolFunctionPackage">actionGetSolFunctionPackage</a></code> | <code>string</code> | [Read] tnb:GetSolFunctionPackage. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.actionGetSolFunctionPackageContent">actionGetSolFunctionPackageContent</a></code> | <code>string</code> | [Read] tnb:GetSolFunctionPackageContent. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.actionGetSolFunctionPackageDescriptor">actionGetSolFunctionPackageDescriptor</a></code> | <code>string</code> | [Read] tnb:GetSolFunctionPackageDescriptor. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.actionGetSolNetworkInstance">actionGetSolNetworkInstance</a></code> | <code>string</code> | [Read] tnb:GetSolNetworkInstance. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.actionGetSolNetworkOperation">actionGetSolNetworkOperation</a></code> | <code>string</code> | [Read] tnb:GetSolNetworkOperation. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.actionGetSolNetworkPackage">actionGetSolNetworkPackage</a></code> | <code>string</code> | [Read] tnb:GetSolNetworkPackage. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.actionGetSolNetworkPackageContent">actionGetSolNetworkPackageContent</a></code> | <code>string</code> | [Read] tnb:GetSolNetworkPackageContent. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.actionGetSolNetworkPackageDescriptor">actionGetSolNetworkPackageDescriptor</a></code> | <code>string</code> | [Read] tnb:GetSolNetworkPackageDescriptor. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.CancelSolNetworkOperation">CancelSolNetworkOperation</a></code> | <code>string</code> | [Write] tnb:CancelSolNetworkOperation. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.CreateSolFunctionPackage">CreateSolFunctionPackage</a></code> | <code>string</code> | [Write] tnb:CreateSolFunctionPackage. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.CreateSolNetworkInstance">CreateSolNetworkInstance</a></code> | <code>string</code> | [Write] tnb:CreateSolNetworkInstance. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.CreateSolNetworkPackage">CreateSolNetworkPackage</a></code> | <code>string</code> | [Write] tnb:CreateSolNetworkPackage. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.DeleteSolFunctionPackage">DeleteSolFunctionPackage</a></code> | <code>string</code> | [Write] tnb:DeleteSolFunctionPackage. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.DeleteSolNetworkInstance">DeleteSolNetworkInstance</a></code> | <code>string</code> | [Write] tnb:DeleteSolNetworkInstance. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.DeleteSolNetworkPackage">DeleteSolNetworkPackage</a></code> | <code>string</code> | [Write] tnb:DeleteSolNetworkPackage. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.InstantiateSolNetworkInstance">InstantiateSolNetworkInstance</a></code> | <code>string</code> | [Write] tnb:InstantiateSolNetworkInstance. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.ListSolFunctionInstances">ListSolFunctionInstances</a></code> | <code>string</code> | [List] tnb:ListSolFunctionInstances. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.ListSolFunctionPackages">ListSolFunctionPackages</a></code> | <code>string</code> | [List] tnb:ListSolFunctionPackages. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.ListSolNetworkInstances">ListSolNetworkInstances</a></code> | <code>string</code> | [List] tnb:ListSolNetworkInstances. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.ListSolNetworkOperations">ListSolNetworkOperations</a></code> | <code>string</code> | [List] tnb:ListSolNetworkOperations. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.ListSolNetworkPackages">ListSolNetworkPackages</a></code> | <code>string</code> | [List] tnb:ListSolNetworkPackages. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] tnb:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.PutSolFunctionPackageContent">PutSolFunctionPackageContent</a></code> | <code>string</code> | [Write] tnb:PutSolFunctionPackageContent. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.PutSolNetworkPackageContent">PutSolNetworkPackageContent</a></code> | <code>string</code> | [Write] tnb:PutSolNetworkPackageContent. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] tnb:TagResource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.TerminateSolNetworkInstance">TerminateSolNetworkInstance</a></code> | <code>string</code> | [Write] tnb:TerminateSolNetworkInstance. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] tnb:UntagResource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.UpdateSolFunctionPackage">UpdateSolFunctionPackage</a></code> | <code>string</code> | [Write] tnb:UpdateSolFunctionPackage. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.UpdateSolNetworkInstance">UpdateSolNetworkInstance</a></code> | <code>string</code> | [Write] tnb:UpdateSolNetworkInstance. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.UpdateSolNetworkPackage">UpdateSolNetworkPackage</a></code> | <code>string</code> | [Write] tnb:UpdateSolNetworkPackage. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.ValidateSolFunctionPackageContent">ValidateSolFunctionPackageContent</a></code> | <code>string</code> | [Write] tnb:ValidateSolFunctionPackageContent. |
| <code><a href="#@cdk_utils/iam.tnb.TnbActions.property.ValidateSolNetworkPackageContent">ValidateSolNetworkPackageContent</a></code> | <code>string</code> | [Write] tnb:ValidateSolNetworkPackageContent. |

---

##### `actionGetSolFunctionInstance`<sup>Required</sup> <a name="actionGetSolFunctionInstance" id="@cdk_utils/iam.tnb.TnbActions.property.actionGetSolFunctionInstance"></a>

```typescript
public readonly actionGetSolFunctionInstance: string;
```

- *Type:* string

[Read] tnb:GetSolFunctionInstance.

---

##### `actionGetSolFunctionPackage`<sup>Required</sup> <a name="actionGetSolFunctionPackage" id="@cdk_utils/iam.tnb.TnbActions.property.actionGetSolFunctionPackage"></a>

```typescript
public readonly actionGetSolFunctionPackage: string;
```

- *Type:* string

[Read] tnb:GetSolFunctionPackage.

---

##### `actionGetSolFunctionPackageContent`<sup>Required</sup> <a name="actionGetSolFunctionPackageContent" id="@cdk_utils/iam.tnb.TnbActions.property.actionGetSolFunctionPackageContent"></a>

```typescript
public readonly actionGetSolFunctionPackageContent: string;
```

- *Type:* string

[Read] tnb:GetSolFunctionPackageContent.

---

##### `actionGetSolFunctionPackageDescriptor`<sup>Required</sup> <a name="actionGetSolFunctionPackageDescriptor" id="@cdk_utils/iam.tnb.TnbActions.property.actionGetSolFunctionPackageDescriptor"></a>

```typescript
public readonly actionGetSolFunctionPackageDescriptor: string;
```

- *Type:* string

[Read] tnb:GetSolFunctionPackageDescriptor.

---

##### `actionGetSolNetworkInstance`<sup>Required</sup> <a name="actionGetSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbActions.property.actionGetSolNetworkInstance"></a>

```typescript
public readonly actionGetSolNetworkInstance: string;
```

- *Type:* string

[Read] tnb:GetSolNetworkInstance.

---

##### `actionGetSolNetworkOperation`<sup>Required</sup> <a name="actionGetSolNetworkOperation" id="@cdk_utils/iam.tnb.TnbActions.property.actionGetSolNetworkOperation"></a>

```typescript
public readonly actionGetSolNetworkOperation: string;
```

- *Type:* string

[Read] tnb:GetSolNetworkOperation.

---

##### `actionGetSolNetworkPackage`<sup>Required</sup> <a name="actionGetSolNetworkPackage" id="@cdk_utils/iam.tnb.TnbActions.property.actionGetSolNetworkPackage"></a>

```typescript
public readonly actionGetSolNetworkPackage: string;
```

- *Type:* string

[Read] tnb:GetSolNetworkPackage.

---

##### `actionGetSolNetworkPackageContent`<sup>Required</sup> <a name="actionGetSolNetworkPackageContent" id="@cdk_utils/iam.tnb.TnbActions.property.actionGetSolNetworkPackageContent"></a>

```typescript
public readonly actionGetSolNetworkPackageContent: string;
```

- *Type:* string

[Read] tnb:GetSolNetworkPackageContent.

---

##### `actionGetSolNetworkPackageDescriptor`<sup>Required</sup> <a name="actionGetSolNetworkPackageDescriptor" id="@cdk_utils/iam.tnb.TnbActions.property.actionGetSolNetworkPackageDescriptor"></a>

```typescript
public readonly actionGetSolNetworkPackageDescriptor: string;
```

- *Type:* string

[Read] tnb:GetSolNetworkPackageDescriptor.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.tnb.TnbActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.tnb.TnbActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.tnb.TnbActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.tnb.TnbActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.tnb.TnbActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelSolNetworkOperation`<sup>Required</sup> <a name="CancelSolNetworkOperation" id="@cdk_utils/iam.tnb.TnbActions.property.CancelSolNetworkOperation"></a>

```typescript
public readonly CancelSolNetworkOperation: string;
```

- *Type:* string

[Write] tnb:CancelSolNetworkOperation.

---

##### `CreateSolFunctionPackage`<sup>Required</sup> <a name="CreateSolFunctionPackage" id="@cdk_utils/iam.tnb.TnbActions.property.CreateSolFunctionPackage"></a>

```typescript
public readonly CreateSolFunctionPackage: string;
```

- *Type:* string

[Write] tnb:CreateSolFunctionPackage.

---

##### `CreateSolNetworkInstance`<sup>Required</sup> <a name="CreateSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbActions.property.CreateSolNetworkInstance"></a>

```typescript
public readonly CreateSolNetworkInstance: string;
```

- *Type:* string

[Write] tnb:CreateSolNetworkInstance.

---

##### `CreateSolNetworkPackage`<sup>Required</sup> <a name="CreateSolNetworkPackage" id="@cdk_utils/iam.tnb.TnbActions.property.CreateSolNetworkPackage"></a>

```typescript
public readonly CreateSolNetworkPackage: string;
```

- *Type:* string

[Write] tnb:CreateSolNetworkPackage.

---

##### `DeleteSolFunctionPackage`<sup>Required</sup> <a name="DeleteSolFunctionPackage" id="@cdk_utils/iam.tnb.TnbActions.property.DeleteSolFunctionPackage"></a>

```typescript
public readonly DeleteSolFunctionPackage: string;
```

- *Type:* string

[Write] tnb:DeleteSolFunctionPackage.

---

##### `DeleteSolNetworkInstance`<sup>Required</sup> <a name="DeleteSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbActions.property.DeleteSolNetworkInstance"></a>

```typescript
public readonly DeleteSolNetworkInstance: string;
```

- *Type:* string

[Write] tnb:DeleteSolNetworkInstance.

---

##### `DeleteSolNetworkPackage`<sup>Required</sup> <a name="DeleteSolNetworkPackage" id="@cdk_utils/iam.tnb.TnbActions.property.DeleteSolNetworkPackage"></a>

```typescript
public readonly DeleteSolNetworkPackage: string;
```

- *Type:* string

[Write] tnb:DeleteSolNetworkPackage.

---

##### `InstantiateSolNetworkInstance`<sup>Required</sup> <a name="InstantiateSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbActions.property.InstantiateSolNetworkInstance"></a>

```typescript
public readonly InstantiateSolNetworkInstance: string;
```

- *Type:* string

[Write] tnb:InstantiateSolNetworkInstance.

---

##### `ListSolFunctionInstances`<sup>Required</sup> <a name="ListSolFunctionInstances" id="@cdk_utils/iam.tnb.TnbActions.property.ListSolFunctionInstances"></a>

```typescript
public readonly ListSolFunctionInstances: string;
```

- *Type:* string

[List] tnb:ListSolFunctionInstances.

---

##### `ListSolFunctionPackages`<sup>Required</sup> <a name="ListSolFunctionPackages" id="@cdk_utils/iam.tnb.TnbActions.property.ListSolFunctionPackages"></a>

```typescript
public readonly ListSolFunctionPackages: string;
```

- *Type:* string

[List] tnb:ListSolFunctionPackages.

---

##### `ListSolNetworkInstances`<sup>Required</sup> <a name="ListSolNetworkInstances" id="@cdk_utils/iam.tnb.TnbActions.property.ListSolNetworkInstances"></a>

```typescript
public readonly ListSolNetworkInstances: string;
```

- *Type:* string

[List] tnb:ListSolNetworkInstances.

---

##### `ListSolNetworkOperations`<sup>Required</sup> <a name="ListSolNetworkOperations" id="@cdk_utils/iam.tnb.TnbActions.property.ListSolNetworkOperations"></a>

```typescript
public readonly ListSolNetworkOperations: string;
```

- *Type:* string

[List] tnb:ListSolNetworkOperations.

---

##### `ListSolNetworkPackages`<sup>Required</sup> <a name="ListSolNetworkPackages" id="@cdk_utils/iam.tnb.TnbActions.property.ListSolNetworkPackages"></a>

```typescript
public readonly ListSolNetworkPackages: string;
```

- *Type:* string

[List] tnb:ListSolNetworkPackages.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.tnb.TnbActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] tnb:ListTagsForResource.

---

##### `PutSolFunctionPackageContent`<sup>Required</sup> <a name="PutSolFunctionPackageContent" id="@cdk_utils/iam.tnb.TnbActions.property.PutSolFunctionPackageContent"></a>

```typescript
public readonly PutSolFunctionPackageContent: string;
```

- *Type:* string

[Write] tnb:PutSolFunctionPackageContent.

---

##### `PutSolNetworkPackageContent`<sup>Required</sup> <a name="PutSolNetworkPackageContent" id="@cdk_utils/iam.tnb.TnbActions.property.PutSolNetworkPackageContent"></a>

```typescript
public readonly PutSolNetworkPackageContent: string;
```

- *Type:* string

[Write] tnb:PutSolNetworkPackageContent.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.tnb.TnbActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.tnb.TnbActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] tnb:TagResource.

---

##### `TerminateSolNetworkInstance`<sup>Required</sup> <a name="TerminateSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbActions.property.TerminateSolNetworkInstance"></a>

```typescript
public readonly TerminateSolNetworkInstance: string;
```

- *Type:* string

[Write] tnb:TerminateSolNetworkInstance.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.tnb.TnbActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] tnb:UntagResource.

---

##### `UpdateSolFunctionPackage`<sup>Required</sup> <a name="UpdateSolFunctionPackage" id="@cdk_utils/iam.tnb.TnbActions.property.UpdateSolFunctionPackage"></a>

```typescript
public readonly UpdateSolFunctionPackage: string;
```

- *Type:* string

[Write] tnb:UpdateSolFunctionPackage.

---

##### `UpdateSolNetworkInstance`<sup>Required</sup> <a name="UpdateSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbActions.property.UpdateSolNetworkInstance"></a>

```typescript
public readonly UpdateSolNetworkInstance: string;
```

- *Type:* string

[Write] tnb:UpdateSolNetworkInstance.

---

##### `UpdateSolNetworkPackage`<sup>Required</sup> <a name="UpdateSolNetworkPackage" id="@cdk_utils/iam.tnb.TnbActions.property.UpdateSolNetworkPackage"></a>

```typescript
public readonly UpdateSolNetworkPackage: string;
```

- *Type:* string

[Write] tnb:UpdateSolNetworkPackage.

---

##### `ValidateSolFunctionPackageContent`<sup>Required</sup> <a name="ValidateSolFunctionPackageContent" id="@cdk_utils/iam.tnb.TnbActions.property.ValidateSolFunctionPackageContent"></a>

```typescript
public readonly ValidateSolFunctionPackageContent: string;
```

- *Type:* string

[Write] tnb:ValidateSolFunctionPackageContent.

---

##### `ValidateSolNetworkPackageContent`<sup>Required</sup> <a name="ValidateSolNetworkPackageContent" id="@cdk_utils/iam.tnb.TnbActions.property.ValidateSolNetworkPackageContent"></a>

```typescript
public readonly ValidateSolNetworkPackageContent: string;
```

- *Type:* string

[Write] tnb:ValidateSolNetworkPackageContent.

---

### TnbConditions <a name="TnbConditions" id="@cdk_utils/iam.tnb.TnbConditions"></a>

Condition key constants and builders for tnb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.tnb.TnbConditions.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

new tnb.TnbConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.tnb.TnbConditions.requestTag"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.tnb.TnbConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.tnb.TnbConditions.resourceTag"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.tnb.TnbConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.tnb.TnbConditions.tagKeys"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.tnb.TnbConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolFunctionInstanceConditionKeys">actionGetSolFunctionInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSolFunctionInstance action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolFunctionPackageConditionKeys">actionGetSolFunctionPackageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSolFunctionPackage action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolFunctionPackageContentConditionKeys">actionGetSolFunctionPackageContentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSolFunctionPackageContent action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolFunctionPackageDescriptorConditionKeys">actionGetSolFunctionPackageDescriptorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSolFunctionPackageDescriptor action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolNetworkInstanceConditionKeys">actionGetSolNetworkInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSolNetworkInstance action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolNetworkOperationConditionKeys">actionGetSolNetworkOperationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSolNetworkOperation action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolNetworkPackageConditionKeys">actionGetSolNetworkPackageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSolNetworkPackage action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolNetworkPackageContentConditionKeys">actionGetSolNetworkPackageContentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSolNetworkPackageContent action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolNetworkPackageDescriptorConditionKeys">actionGetSolNetworkPackageDescriptorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSolNetworkPackageDescriptor action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.CreateSolFunctionPackageConditionKeys">CreateSolFunctionPackageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSolFunctionPackage action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.CreateSolNetworkInstanceConditionKeys">CreateSolNetworkInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSolNetworkInstance action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.CreateSolNetworkPackageConditionKeys">CreateSolNetworkPackageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSolNetworkPackage action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.InstantiateSolNetworkInstanceConditionKeys">InstantiateSolNetworkInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InstantiateSolNetworkInstance action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.ListSolFunctionInstancesConditionKeys">ListSolFunctionInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSolFunctionInstances action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.ListSolFunctionPackagesConditionKeys">ListSolFunctionPackagesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSolFunctionPackages action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.ListSolNetworkInstancesConditionKeys">ListSolNetworkInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSolNetworkInstances action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.ListSolNetworkOperationsConditionKeys">ListSolNetworkOperationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSolNetworkOperations action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.ListSolNetworkPackagesConditionKeys">ListSolNetworkPackagesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSolNetworkPackages action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.TerminateSolNetworkInstanceConditionKeys">TerminateSolNetworkInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TerminateSolNetworkInstance action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.tnb.TnbConditions.property.UpdateSolNetworkInstanceConditionKeys">UpdateSolNetworkInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSolNetworkInstance action. |

---

##### `actionGetSolFunctionInstanceConditionKeys`<sup>Required</sup> <a name="actionGetSolFunctionInstanceConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolFunctionInstanceConditionKeys"></a>

```typescript
public readonly actionGetSolFunctionInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSolFunctionInstance action.

---

##### `actionGetSolFunctionPackageConditionKeys`<sup>Required</sup> <a name="actionGetSolFunctionPackageConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolFunctionPackageConditionKeys"></a>

```typescript
public readonly actionGetSolFunctionPackageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSolFunctionPackage action.

---

##### `actionGetSolFunctionPackageContentConditionKeys`<sup>Required</sup> <a name="actionGetSolFunctionPackageContentConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolFunctionPackageContentConditionKeys"></a>

```typescript
public readonly actionGetSolFunctionPackageContentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSolFunctionPackageContent action.

---

##### `actionGetSolFunctionPackageDescriptorConditionKeys`<sup>Required</sup> <a name="actionGetSolFunctionPackageDescriptorConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolFunctionPackageDescriptorConditionKeys"></a>

```typescript
public readonly actionGetSolFunctionPackageDescriptorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSolFunctionPackageDescriptor action.

---

##### `actionGetSolNetworkInstanceConditionKeys`<sup>Required</sup> <a name="actionGetSolNetworkInstanceConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolNetworkInstanceConditionKeys"></a>

```typescript
public readonly actionGetSolNetworkInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSolNetworkInstance action.

---

##### `actionGetSolNetworkOperationConditionKeys`<sup>Required</sup> <a name="actionGetSolNetworkOperationConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolNetworkOperationConditionKeys"></a>

```typescript
public readonly actionGetSolNetworkOperationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSolNetworkOperation action.

---

##### `actionGetSolNetworkPackageConditionKeys`<sup>Required</sup> <a name="actionGetSolNetworkPackageConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolNetworkPackageConditionKeys"></a>

```typescript
public readonly actionGetSolNetworkPackageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSolNetworkPackage action.

---

##### `actionGetSolNetworkPackageContentConditionKeys`<sup>Required</sup> <a name="actionGetSolNetworkPackageContentConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolNetworkPackageContentConditionKeys"></a>

```typescript
public readonly actionGetSolNetworkPackageContentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSolNetworkPackageContent action.

---

##### `actionGetSolNetworkPackageDescriptorConditionKeys`<sup>Required</sup> <a name="actionGetSolNetworkPackageDescriptorConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.actionGetSolNetworkPackageDescriptorConditionKeys"></a>

```typescript
public readonly actionGetSolNetworkPackageDescriptorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSolNetworkPackageDescriptor action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.tnb.TnbConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.tnb.TnbConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.tnb.TnbConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateSolFunctionPackageConditionKeys`<sup>Required</sup> <a name="CreateSolFunctionPackageConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.CreateSolFunctionPackageConditionKeys"></a>

```typescript
public readonly CreateSolFunctionPackageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSolFunctionPackage action.

---

##### `CreateSolNetworkInstanceConditionKeys`<sup>Required</sup> <a name="CreateSolNetworkInstanceConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.CreateSolNetworkInstanceConditionKeys"></a>

```typescript
public readonly CreateSolNetworkInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSolNetworkInstance action.

---

##### `CreateSolNetworkPackageConditionKeys`<sup>Required</sup> <a name="CreateSolNetworkPackageConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.CreateSolNetworkPackageConditionKeys"></a>

```typescript
public readonly CreateSolNetworkPackageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSolNetworkPackage action.

---

##### `InstantiateSolNetworkInstanceConditionKeys`<sup>Required</sup> <a name="InstantiateSolNetworkInstanceConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.InstantiateSolNetworkInstanceConditionKeys"></a>

```typescript
public readonly InstantiateSolNetworkInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InstantiateSolNetworkInstance action.

---

##### `ListSolFunctionInstancesConditionKeys`<sup>Required</sup> <a name="ListSolFunctionInstancesConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.ListSolFunctionInstancesConditionKeys"></a>

```typescript
public readonly ListSolFunctionInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSolFunctionInstances action.

---

##### `ListSolFunctionPackagesConditionKeys`<sup>Required</sup> <a name="ListSolFunctionPackagesConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.ListSolFunctionPackagesConditionKeys"></a>

```typescript
public readonly ListSolFunctionPackagesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSolFunctionPackages action.

---

##### `ListSolNetworkInstancesConditionKeys`<sup>Required</sup> <a name="ListSolNetworkInstancesConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.ListSolNetworkInstancesConditionKeys"></a>

```typescript
public readonly ListSolNetworkInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSolNetworkInstances action.

---

##### `ListSolNetworkOperationsConditionKeys`<sup>Required</sup> <a name="ListSolNetworkOperationsConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.ListSolNetworkOperationsConditionKeys"></a>

```typescript
public readonly ListSolNetworkOperationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSolNetworkOperations action.

---

##### `ListSolNetworkPackagesConditionKeys`<sup>Required</sup> <a name="ListSolNetworkPackagesConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.ListSolNetworkPackagesConditionKeys"></a>

```typescript
public readonly ListSolNetworkPackagesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSolNetworkPackages action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TerminateSolNetworkInstanceConditionKeys`<sup>Required</sup> <a name="TerminateSolNetworkInstanceConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.TerminateSolNetworkInstanceConditionKeys"></a>

```typescript
public readonly TerminateSolNetworkInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TerminateSolNetworkInstance action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateSolNetworkInstanceConditionKeys`<sup>Required</sup> <a name="UpdateSolNetworkInstanceConditionKeys" id="@cdk_utils/iam.tnb.TnbConditions.property.UpdateSolNetworkInstanceConditionKeys"></a>

```typescript
public readonly UpdateSolNetworkInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSolNetworkInstance action.

---

### TnbOperations <a name="TnbOperations" id="@cdk_utils/iam.tnb.TnbOperations"></a>

API operation to required IAM actions mapping for tnb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.tnb.TnbOperations.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

new tnb.TnbOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.CancelSolNetworkOperation">CancelSolNetworkOperation</a></code> | <code>string[]</code> | IAM actions required for the CancelSolNetworkOperation API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.CreateSolFunctionPackage">CreateSolFunctionPackage</a></code> | <code>string[]</code> | IAM actions required for the CreateSolFunctionPackage API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.CreateSolNetworkInstance">CreateSolNetworkInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateSolNetworkInstance API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.CreateSolNetworkPackage">CreateSolNetworkPackage</a></code> | <code>string[]</code> | IAM actions required for the CreateSolNetworkPackage API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.DeleteSolFunctionPackage">DeleteSolFunctionPackage</a></code> | <code>string[]</code> | IAM actions required for the DeleteSolFunctionPackage API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.DeleteSolNetworkInstance">DeleteSolNetworkInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteSolNetworkInstance API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.DeleteSolNetworkPackage">DeleteSolNetworkPackage</a></code> | <code>string[]</code> | IAM actions required for the DeleteSolNetworkPackage API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.InstantiateSolNetworkInstance">InstantiateSolNetworkInstance</a></code> | <code>string[]</code> | IAM actions required for the InstantiateSolNetworkInstance API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.ListSolFunctionInstances">ListSolFunctionInstances</a></code> | <code>string[]</code> | IAM actions required for the ListSolFunctionInstances API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.ListSolFunctionPackages">ListSolFunctionPackages</a></code> | <code>string[]</code> | IAM actions required for the ListSolFunctionPackages API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.ListSolNetworkInstances">ListSolNetworkInstances</a></code> | <code>string[]</code> | IAM actions required for the ListSolNetworkInstances API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.ListSolNetworkOperations">ListSolNetworkOperations</a></code> | <code>string[]</code> | IAM actions required for the ListSolNetworkOperations API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.ListSolNetworkPackages">ListSolNetworkPackages</a></code> | <code>string[]</code> | IAM actions required for the ListSolNetworkPackages API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.opGetSolFunctionInstance">opGetSolFunctionInstance</a></code> | <code>string[]</code> | IAM actions required for the GetSolFunctionInstance API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.opGetSolFunctionPackage">opGetSolFunctionPackage</a></code> | <code>string[]</code> | IAM actions required for the GetSolFunctionPackage API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.opGetSolFunctionPackageContent">opGetSolFunctionPackageContent</a></code> | <code>string[]</code> | IAM actions required for the GetSolFunctionPackageContent API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.opGetSolFunctionPackageDescriptor">opGetSolFunctionPackageDescriptor</a></code> | <code>string[]</code> | IAM actions required for the GetSolFunctionPackageDescriptor API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.opGetSolNetworkInstance">opGetSolNetworkInstance</a></code> | <code>string[]</code> | IAM actions required for the GetSolNetworkInstance API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.opGetSolNetworkOperation">opGetSolNetworkOperation</a></code> | <code>string[]</code> | IAM actions required for the GetSolNetworkOperation API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.opGetSolNetworkPackage">opGetSolNetworkPackage</a></code> | <code>string[]</code> | IAM actions required for the GetSolNetworkPackage API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.opGetSolNetworkPackageContent">opGetSolNetworkPackageContent</a></code> | <code>string[]</code> | IAM actions required for the GetSolNetworkPackageContent API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.opGetSolNetworkPackageDescriptor">opGetSolNetworkPackageDescriptor</a></code> | <code>string[]</code> | IAM actions required for the GetSolNetworkPackageDescriptor API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.PutSolFunctionPackageContent">PutSolFunctionPackageContent</a></code> | <code>string[]</code> | IAM actions required for the PutSolFunctionPackageContent API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.PutSolNetworkPackageContent">PutSolNetworkPackageContent</a></code> | <code>string[]</code> | IAM actions required for the PutSolNetworkPackageContent API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.TerminateSolNetworkInstance">TerminateSolNetworkInstance</a></code> | <code>string[]</code> | IAM actions required for the TerminateSolNetworkInstance API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.UpdateSolFunctionPackage">UpdateSolFunctionPackage</a></code> | <code>string[]</code> | IAM actions required for the UpdateSolFunctionPackage API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.UpdateSolNetworkInstance">UpdateSolNetworkInstance</a></code> | <code>string[]</code> | IAM actions required for the UpdateSolNetworkInstance API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.UpdateSolNetworkPackage">UpdateSolNetworkPackage</a></code> | <code>string[]</code> | IAM actions required for the UpdateSolNetworkPackage API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.ValidateSolFunctionPackageContent">ValidateSolFunctionPackageContent</a></code> | <code>string[]</code> | IAM actions required for the ValidateSolFunctionPackageContent API call. |
| <code><a href="#@cdk_utils/iam.tnb.TnbOperations.property.ValidateSolNetworkPackageContent">ValidateSolNetworkPackageContent</a></code> | <code>string[]</code> | IAM actions required for the ValidateSolNetworkPackageContent API call. |

---

##### `CancelSolNetworkOperation`<sup>Required</sup> <a name="CancelSolNetworkOperation" id="@cdk_utils/iam.tnb.TnbOperations.property.CancelSolNetworkOperation"></a>

```typescript
public readonly CancelSolNetworkOperation: string[];
```

- *Type:* string[]

IAM actions required for the CancelSolNetworkOperation API call.

---

##### `CreateSolFunctionPackage`<sup>Required</sup> <a name="CreateSolFunctionPackage" id="@cdk_utils/iam.tnb.TnbOperations.property.CreateSolFunctionPackage"></a>

```typescript
public readonly CreateSolFunctionPackage: string[];
```

- *Type:* string[]

IAM actions required for the CreateSolFunctionPackage API call.

---

##### `CreateSolNetworkInstance`<sup>Required</sup> <a name="CreateSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbOperations.property.CreateSolNetworkInstance"></a>

```typescript
public readonly CreateSolNetworkInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateSolNetworkInstance API call.

---

##### `CreateSolNetworkPackage`<sup>Required</sup> <a name="CreateSolNetworkPackage" id="@cdk_utils/iam.tnb.TnbOperations.property.CreateSolNetworkPackage"></a>

```typescript
public readonly CreateSolNetworkPackage: string[];
```

- *Type:* string[]

IAM actions required for the CreateSolNetworkPackage API call.

---

##### `DeleteSolFunctionPackage`<sup>Required</sup> <a name="DeleteSolFunctionPackage" id="@cdk_utils/iam.tnb.TnbOperations.property.DeleteSolFunctionPackage"></a>

```typescript
public readonly DeleteSolFunctionPackage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSolFunctionPackage API call.

---

##### `DeleteSolNetworkInstance`<sup>Required</sup> <a name="DeleteSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbOperations.property.DeleteSolNetworkInstance"></a>

```typescript
public readonly DeleteSolNetworkInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSolNetworkInstance API call.

---

##### `DeleteSolNetworkPackage`<sup>Required</sup> <a name="DeleteSolNetworkPackage" id="@cdk_utils/iam.tnb.TnbOperations.property.DeleteSolNetworkPackage"></a>

```typescript
public readonly DeleteSolNetworkPackage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSolNetworkPackage API call.

---

##### `InstantiateSolNetworkInstance`<sup>Required</sup> <a name="InstantiateSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbOperations.property.InstantiateSolNetworkInstance"></a>

```typescript
public readonly InstantiateSolNetworkInstance: string[];
```

- *Type:* string[]

IAM actions required for the InstantiateSolNetworkInstance API call.

---

##### `ListSolFunctionInstances`<sup>Required</sup> <a name="ListSolFunctionInstances" id="@cdk_utils/iam.tnb.TnbOperations.property.ListSolFunctionInstances"></a>

```typescript
public readonly ListSolFunctionInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListSolFunctionInstances API call.

---

##### `ListSolFunctionPackages`<sup>Required</sup> <a name="ListSolFunctionPackages" id="@cdk_utils/iam.tnb.TnbOperations.property.ListSolFunctionPackages"></a>

```typescript
public readonly ListSolFunctionPackages: string[];
```

- *Type:* string[]

IAM actions required for the ListSolFunctionPackages API call.

---

##### `ListSolNetworkInstances`<sup>Required</sup> <a name="ListSolNetworkInstances" id="@cdk_utils/iam.tnb.TnbOperations.property.ListSolNetworkInstances"></a>

```typescript
public readonly ListSolNetworkInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListSolNetworkInstances API call.

---

##### `ListSolNetworkOperations`<sup>Required</sup> <a name="ListSolNetworkOperations" id="@cdk_utils/iam.tnb.TnbOperations.property.ListSolNetworkOperations"></a>

```typescript
public readonly ListSolNetworkOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListSolNetworkOperations API call.

---

##### `ListSolNetworkPackages`<sup>Required</sup> <a name="ListSolNetworkPackages" id="@cdk_utils/iam.tnb.TnbOperations.property.ListSolNetworkPackages"></a>

```typescript
public readonly ListSolNetworkPackages: string[];
```

- *Type:* string[]

IAM actions required for the ListSolNetworkPackages API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.tnb.TnbOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetSolFunctionInstance`<sup>Required</sup> <a name="opGetSolFunctionInstance" id="@cdk_utils/iam.tnb.TnbOperations.property.opGetSolFunctionInstance"></a>

```typescript
public readonly opGetSolFunctionInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetSolFunctionInstance API call.

---

##### `opGetSolFunctionPackage`<sup>Required</sup> <a name="opGetSolFunctionPackage" id="@cdk_utils/iam.tnb.TnbOperations.property.opGetSolFunctionPackage"></a>

```typescript
public readonly opGetSolFunctionPackage: string[];
```

- *Type:* string[]

IAM actions required for the GetSolFunctionPackage API call.

---

##### `opGetSolFunctionPackageContent`<sup>Required</sup> <a name="opGetSolFunctionPackageContent" id="@cdk_utils/iam.tnb.TnbOperations.property.opGetSolFunctionPackageContent"></a>

```typescript
public readonly opGetSolFunctionPackageContent: string[];
```

- *Type:* string[]

IAM actions required for the GetSolFunctionPackageContent API call.

---

##### `opGetSolFunctionPackageDescriptor`<sup>Required</sup> <a name="opGetSolFunctionPackageDescriptor" id="@cdk_utils/iam.tnb.TnbOperations.property.opGetSolFunctionPackageDescriptor"></a>

```typescript
public readonly opGetSolFunctionPackageDescriptor: string[];
```

- *Type:* string[]

IAM actions required for the GetSolFunctionPackageDescriptor API call.

---

##### `opGetSolNetworkInstance`<sup>Required</sup> <a name="opGetSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbOperations.property.opGetSolNetworkInstance"></a>

```typescript
public readonly opGetSolNetworkInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetSolNetworkInstance API call.

---

##### `opGetSolNetworkOperation`<sup>Required</sup> <a name="opGetSolNetworkOperation" id="@cdk_utils/iam.tnb.TnbOperations.property.opGetSolNetworkOperation"></a>

```typescript
public readonly opGetSolNetworkOperation: string[];
```

- *Type:* string[]

IAM actions required for the GetSolNetworkOperation API call.

---

##### `opGetSolNetworkPackage`<sup>Required</sup> <a name="opGetSolNetworkPackage" id="@cdk_utils/iam.tnb.TnbOperations.property.opGetSolNetworkPackage"></a>

```typescript
public readonly opGetSolNetworkPackage: string[];
```

- *Type:* string[]

IAM actions required for the GetSolNetworkPackage API call.

---

##### `opGetSolNetworkPackageContent`<sup>Required</sup> <a name="opGetSolNetworkPackageContent" id="@cdk_utils/iam.tnb.TnbOperations.property.opGetSolNetworkPackageContent"></a>

```typescript
public readonly opGetSolNetworkPackageContent: string[];
```

- *Type:* string[]

IAM actions required for the GetSolNetworkPackageContent API call.

---

##### `opGetSolNetworkPackageDescriptor`<sup>Required</sup> <a name="opGetSolNetworkPackageDescriptor" id="@cdk_utils/iam.tnb.TnbOperations.property.opGetSolNetworkPackageDescriptor"></a>

```typescript
public readonly opGetSolNetworkPackageDescriptor: string[];
```

- *Type:* string[]

IAM actions required for the GetSolNetworkPackageDescriptor API call.

---

##### `PutSolFunctionPackageContent`<sup>Required</sup> <a name="PutSolFunctionPackageContent" id="@cdk_utils/iam.tnb.TnbOperations.property.PutSolFunctionPackageContent"></a>

```typescript
public readonly PutSolFunctionPackageContent: string[];
```

- *Type:* string[]

IAM actions required for the PutSolFunctionPackageContent API call.

---

##### `PutSolNetworkPackageContent`<sup>Required</sup> <a name="PutSolNetworkPackageContent" id="@cdk_utils/iam.tnb.TnbOperations.property.PutSolNetworkPackageContent"></a>

```typescript
public readonly PutSolNetworkPackageContent: string[];
```

- *Type:* string[]

IAM actions required for the PutSolNetworkPackageContent API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.tnb.TnbOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateSolNetworkInstance`<sup>Required</sup> <a name="TerminateSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbOperations.property.TerminateSolNetworkInstance"></a>

```typescript
public readonly TerminateSolNetworkInstance: string[];
```

- *Type:* string[]

IAM actions required for the TerminateSolNetworkInstance API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.tnb.TnbOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateSolFunctionPackage`<sup>Required</sup> <a name="UpdateSolFunctionPackage" id="@cdk_utils/iam.tnb.TnbOperations.property.UpdateSolFunctionPackage"></a>

```typescript
public readonly UpdateSolFunctionPackage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSolFunctionPackage API call.

---

##### `UpdateSolNetworkInstance`<sup>Required</sup> <a name="UpdateSolNetworkInstance" id="@cdk_utils/iam.tnb.TnbOperations.property.UpdateSolNetworkInstance"></a>

```typescript
public readonly UpdateSolNetworkInstance: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSolNetworkInstance API call.

---

##### `UpdateSolNetworkPackage`<sup>Required</sup> <a name="UpdateSolNetworkPackage" id="@cdk_utils/iam.tnb.TnbOperations.property.UpdateSolNetworkPackage"></a>

```typescript
public readonly UpdateSolNetworkPackage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSolNetworkPackage API call.

---

##### `ValidateSolFunctionPackageContent`<sup>Required</sup> <a name="ValidateSolFunctionPackageContent" id="@cdk_utils/iam.tnb.TnbOperations.property.ValidateSolFunctionPackageContent"></a>

```typescript
public readonly ValidateSolFunctionPackageContent: string[];
```

- *Type:* string[]

IAM actions required for the ValidateSolFunctionPackageContent API call.

---

##### `ValidateSolNetworkPackageContent`<sup>Required</sup> <a name="ValidateSolNetworkPackageContent" id="@cdk_utils/iam.tnb.TnbOperations.property.ValidateSolNetworkPackageContent"></a>

```typescript
public readonly ValidateSolNetworkPackageContent: string[];
```

- *Type:* string[]

IAM actions required for the ValidateSolNetworkPackageContent API call.

---

### TnbResources <a name="TnbResources" id="@cdk_utils/iam.tnb.TnbResources"></a>

ARN builders, validators, and parsers for tnb resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.tnb.TnbResources.Initializer"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

new tnb.TnbResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.functionInstance">functionInstance</a></code> | Builds an ARN for the function-instance resource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.functionPackage">functionPackage</a></code> | Builds an ARN for the function-package resource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.isValidFunctionInstanceArn">isValidFunctionInstanceArn</a></code> | Validates whether a string is a valid ARN for the function-instance resource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.isValidFunctionPackageArn">isValidFunctionPackageArn</a></code> | Validates whether a string is a valid ARN for the function-package resource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.isValidNetworkInstanceArn">isValidNetworkInstanceArn</a></code> | Validates whether a string is a valid ARN for the network-instance resource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.isValidNetworkOperationArn">isValidNetworkOperationArn</a></code> | Validates whether a string is a valid ARN for the network-operation resource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.isValidNetworkPackageArn">isValidNetworkPackageArn</a></code> | Validates whether a string is a valid ARN for the network-package resource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.networkInstance">networkInstance</a></code> | Builds an ARN for the network-instance resource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.networkOperation">networkOperation</a></code> | Builds an ARN for the network-operation resource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.networkPackage">networkPackage</a></code> | Builds an ARN for the network-package resource. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.parseFunctionInstanceArn">parseFunctionInstanceArn</a></code> | Parses a function-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.parseFunctionPackageArn">parseFunctionPackageArn</a></code> | Parses a function-package ARN into its components. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.parseNetworkInstanceArn">parseNetworkInstanceArn</a></code> | Parses a network-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.parseNetworkOperationArn">parseNetworkOperationArn</a></code> | Parses a network-operation ARN into its components. |
| <code><a href="#@cdk_utils/iam.tnb.TnbResources.parseNetworkPackageArn">parseNetworkPackageArn</a></code> | Parses a network-package ARN into its components. |

---

##### `functionInstance` <a name="functionInstance" id="@cdk_utils/iam.tnb.TnbResources.functionInstance"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.functionInstance(props: TnbFunctionInstanceArnProps)
```

Builds an ARN for the function-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.tnb.TnbResources.functionInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.tnb.TnbFunctionInstanceArnProps">TnbFunctionInstanceArnProps</a>

---

##### `functionPackage` <a name="functionPackage" id="@cdk_utils/iam.tnb.TnbResources.functionPackage"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.functionPackage(props: TnbFunctionPackageArnProps)
```

Builds an ARN for the function-package resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.tnb.TnbResources.functionPackage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.tnb.TnbFunctionPackageArnProps">TnbFunctionPackageArnProps</a>

---

##### `isValidFunctionInstanceArn` <a name="isValidFunctionInstanceArn" id="@cdk_utils/iam.tnb.TnbResources.isValidFunctionInstanceArn"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.isValidFunctionInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the function-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.tnb.TnbResources.isValidFunctionInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFunctionPackageArn` <a name="isValidFunctionPackageArn" id="@cdk_utils/iam.tnb.TnbResources.isValidFunctionPackageArn"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.isValidFunctionPackageArn(arn: string)
```

Validates whether a string is a valid ARN for the function-package resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.tnb.TnbResources.isValidFunctionPackageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkInstanceArn` <a name="isValidNetworkInstanceArn" id="@cdk_utils/iam.tnb.TnbResources.isValidNetworkInstanceArn"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.isValidNetworkInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the network-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.tnb.TnbResources.isValidNetworkInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkOperationArn` <a name="isValidNetworkOperationArn" id="@cdk_utils/iam.tnb.TnbResources.isValidNetworkOperationArn"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.isValidNetworkOperationArn(arn: string)
```

Validates whether a string is a valid ARN for the network-operation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.tnb.TnbResources.isValidNetworkOperationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkPackageArn` <a name="isValidNetworkPackageArn" id="@cdk_utils/iam.tnb.TnbResources.isValidNetworkPackageArn"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.isValidNetworkPackageArn(arn: string)
```

Validates whether a string is a valid ARN for the network-package resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.tnb.TnbResources.isValidNetworkPackageArn.parameter.arn"></a>

- *Type:* string

---

##### `networkInstance` <a name="networkInstance" id="@cdk_utils/iam.tnb.TnbResources.networkInstance"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.networkInstance(props: TnbNetworkInstanceArnProps)
```

Builds an ARN for the network-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.tnb.TnbResources.networkInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.tnb.TnbNetworkInstanceArnProps">TnbNetworkInstanceArnProps</a>

---

##### `networkOperation` <a name="networkOperation" id="@cdk_utils/iam.tnb.TnbResources.networkOperation"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.networkOperation(props: TnbNetworkOperationArnProps)
```

Builds an ARN for the network-operation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.tnb.TnbResources.networkOperation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.tnb.TnbNetworkOperationArnProps">TnbNetworkOperationArnProps</a>

---

##### `networkPackage` <a name="networkPackage" id="@cdk_utils/iam.tnb.TnbResources.networkPackage"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.networkPackage(props: TnbNetworkPackageArnProps)
```

Builds an ARN for the network-package resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.tnb.TnbResources.networkPackage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.tnb.TnbNetworkPackageArnProps">TnbNetworkPackageArnProps</a>

---

##### `parseFunctionInstanceArn` <a name="parseFunctionInstanceArn" id="@cdk_utils/iam.tnb.TnbResources.parseFunctionInstanceArn"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.parseFunctionInstanceArn(arn: string)
```

Parses a function-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.tnb.TnbResources.parseFunctionInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFunctionPackageArn` <a name="parseFunctionPackageArn" id="@cdk_utils/iam.tnb.TnbResources.parseFunctionPackageArn"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.parseFunctionPackageArn(arn: string)
```

Parses a function-package ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.tnb.TnbResources.parseFunctionPackageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkInstanceArn` <a name="parseNetworkInstanceArn" id="@cdk_utils/iam.tnb.TnbResources.parseNetworkInstanceArn"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.parseNetworkInstanceArn(arn: string)
```

Parses a network-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.tnb.TnbResources.parseNetworkInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkOperationArn` <a name="parseNetworkOperationArn" id="@cdk_utils/iam.tnb.TnbResources.parseNetworkOperationArn"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.parseNetworkOperationArn(arn: string)
```

Parses a network-operation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.tnb.TnbResources.parseNetworkOperationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkPackageArn` <a name="parseNetworkPackageArn" id="@cdk_utils/iam.tnb.TnbResources.parseNetworkPackageArn"></a>

```typescript
import { tnb } from '@cdk_utils/iam'

tnb.TnbResources.parseNetworkPackageArn(arn: string)
```

Parses a network-package ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.tnb.TnbResources.parseNetworkPackageArn.parameter.arn"></a>

- *Type:* string

---




