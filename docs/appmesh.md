# `appmesh` Submodule <a name="`appmesh` Submodule" id="@cdk_utils/iam.appmesh"></a>


## Structs <a name="Structs" id="Structs"></a>

### AppmeshGatewayRouteArnComponents <a name="AppmeshGatewayRouteArnComponents" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents"></a>

Parsed components of a gatewayRoute ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshGatewayRouteArnComponents: appmesh.AppmeshGatewayRouteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.gatewayRouteName">gatewayRouteName</a></code> | <code>string</code> | The GatewayRouteName component. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.virtualGatewayName">virtualGatewayName</a></code> | <code>string</code> | The VirtualGatewayName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayRouteName`<sup>Required</sup> <a name="gatewayRouteName" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.gatewayRouteName"></a>

```typescript
public readonly gatewayRouteName: string;
```

- *Type:* string

The GatewayRouteName component.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnComponents.property.virtualGatewayName"></a>

```typescript
public readonly virtualGatewayName: string;
```

- *Type:* string

The VirtualGatewayName component.

---

### AppmeshGatewayRouteArnProps <a name="AppmeshGatewayRouteArnProps" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps"></a>

Properties for building a gatewayRoute ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshGatewayRouteArnProps: appmesh.AppmeshGatewayRouteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.gatewayRouteName">gatewayRouteName</a></code> | <code>string</code> | The GatewayRouteName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.virtualGatewayName">virtualGatewayName</a></code> | <code>string</code> | The VirtualGatewayName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayRouteName`<sup>Required</sup> <a name="gatewayRouteName" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.gatewayRouteName"></a>

```typescript
public readonly gatewayRouteName: string;
```

- *Type:* string

The GatewayRouteName component of the ARN.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.virtualGatewayName"></a>

```typescript
public readonly virtualGatewayName: string;
```

- *Type:* string

The VirtualGatewayName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshMeshArnComponents <a name="AppmeshMeshArnComponents" id="@cdk_utils/iam.appmesh.AppmeshMeshArnComponents"></a>

Parsed components of a mesh ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshMeshArnComponents.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshMeshArnComponents: appmesh.AppmeshMeshArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshMeshArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshMeshArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshMeshArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshMeshArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshMeshArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshMeshArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshMeshArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshMeshArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppmeshMeshArnProps <a name="AppmeshMeshArnProps" id="@cdk_utils/iam.appmesh.AppmeshMeshArnProps"></a>

Properties for building a mesh ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshMeshArnProps.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshMeshArnProps: appmesh.AppmeshMeshArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshMeshArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshMeshArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshMeshArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshMeshArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshMeshArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshMeshArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshMeshArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshMeshArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshRouteArnComponents <a name="AppmeshRouteArnComponents" id="@cdk_utils/iam.appmesh.AppmeshRouteArnComponents"></a>

Parsed components of a route ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshRouteArnComponents: appmesh.AppmeshRouteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.routeName">routeName</a></code> | <code>string</code> | The RouteName component. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.virtualRouterName">virtualRouterName</a></code> | <code>string</code> | The VirtualRouterName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routeName`<sup>Required</sup> <a name="routeName" id="@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.routeName"></a>

```typescript
public readonly routeName: string;
```

- *Type:* string

The RouteName component.

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdk_utils/iam.appmesh.AppmeshRouteArnComponents.property.virtualRouterName"></a>

```typescript
public readonly virtualRouterName: string;
```

- *Type:* string

The VirtualRouterName component.

---

### AppmeshRouteArnProps <a name="AppmeshRouteArnProps" id="@cdk_utils/iam.appmesh.AppmeshRouteArnProps"></a>

Properties for building a route ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshRouteArnProps.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshRouteArnProps: appmesh.AppmeshRouteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.routeName">routeName</a></code> | <code>string</code> | The RouteName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.virtualRouterName">virtualRouterName</a></code> | <code>string</code> | The VirtualRouterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `routeName`<sup>Required</sup> <a name="routeName" id="@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.routeName"></a>

```typescript
public readonly routeName: string;
```

- *Type:* string

The RouteName component of the ARN.

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.virtualRouterName"></a>

```typescript
public readonly virtualRouterName: string;
```

- *Type:* string

The VirtualRouterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshRouteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshVirtualGatewayArnComponents <a name="AppmeshVirtualGatewayArnComponents" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents"></a>

Parsed components of a virtualGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshVirtualGatewayArnComponents: appmesh.AppmeshVirtualGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents.property.virtualGatewayName">virtualGatewayName</a></code> | <code>string</code> | The VirtualGatewayName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnComponents.property.virtualGatewayName"></a>

```typescript
public readonly virtualGatewayName: string;
```

- *Type:* string

The VirtualGatewayName component.

---

### AppmeshVirtualGatewayArnProps <a name="AppmeshVirtualGatewayArnProps" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps"></a>

Properties for building a virtualGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshVirtualGatewayArnProps: appmesh.AppmeshVirtualGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps.property.virtualGatewayName">virtualGatewayName</a></code> | <code>string</code> | The VirtualGatewayName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps.property.virtualGatewayName"></a>

```typescript
public readonly virtualGatewayName: string;
```

- *Type:* string

The VirtualGatewayName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshVirtualNodeArnComponents <a name="AppmeshVirtualNodeArnComponents" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents"></a>

Parsed components of a virtualNode ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshVirtualNodeArnComponents: appmesh.AppmeshVirtualNodeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents.property.virtualNodeName">virtualNodeName</a></code> | <code>string</code> | The VirtualNodeName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualNodeName`<sup>Required</sup> <a name="virtualNodeName" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnComponents.property.virtualNodeName"></a>

```typescript
public readonly virtualNodeName: string;
```

- *Type:* string

The VirtualNodeName component.

---

### AppmeshVirtualNodeArnProps <a name="AppmeshVirtualNodeArnProps" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps"></a>

Properties for building a virtualNode ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshVirtualNodeArnProps: appmesh.AppmeshVirtualNodeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps.property.virtualNodeName">virtualNodeName</a></code> | <code>string</code> | The VirtualNodeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `virtualNodeName`<sup>Required</sup> <a name="virtualNodeName" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps.property.virtualNodeName"></a>

```typescript
public readonly virtualNodeName: string;
```

- *Type:* string

The VirtualNodeName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshVirtualRouterArnComponents <a name="AppmeshVirtualRouterArnComponents" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents"></a>

Parsed components of a virtualRouter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshVirtualRouterArnComponents: appmesh.AppmeshVirtualRouterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents.property.virtualRouterName">virtualRouterName</a></code> | <code>string</code> | The VirtualRouterName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnComponents.property.virtualRouterName"></a>

```typescript
public readonly virtualRouterName: string;
```

- *Type:* string

The VirtualRouterName component.

---

### AppmeshVirtualRouterArnProps <a name="AppmeshVirtualRouterArnProps" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps"></a>

Properties for building a virtualRouter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshVirtualRouterArnProps: appmesh.AppmeshVirtualRouterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps.property.virtualRouterName">virtualRouterName</a></code> | <code>string</code> | The VirtualRouterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps.property.virtualRouterName"></a>

```typescript
public readonly virtualRouterName: string;
```

- *Type:* string

The VirtualRouterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshVirtualServiceArnComponents <a name="AppmeshVirtualServiceArnComponents" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents"></a>

Parsed components of a virtualService ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshVirtualServiceArnComponents: appmesh.AppmeshVirtualServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | The VirtualServiceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnComponents.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

The VirtualServiceName component.

---

### AppmeshVirtualServiceArnProps <a name="AppmeshVirtualServiceArnProps" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps"></a>

Properties for building a virtualService ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

const appmeshVirtualServiceArnProps: appmesh.AppmeshVirtualServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | The VirtualServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

The VirtualServiceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshActions <a name="AppmeshActions" id="@cdk_utils/iam.appmesh.AppmeshActions"></a>

IAM action constants for the appmesh service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appmesh.AppmeshActions.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

new appmesh.AppmeshActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.actionGetMeshPolicy">actionGetMeshPolicy</a></code> | <code>string</code> | [Read] appmesh:GetMeshPolicy. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.CreateGatewayRoute">CreateGatewayRoute</a></code> | <code>string</code> | [Write] appmesh:CreateGatewayRoute. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.CreateMesh">CreateMesh</a></code> | <code>string</code> | [Write] appmesh:CreateMesh. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.CreateRoute">CreateRoute</a></code> | <code>string</code> | [Write] appmesh:CreateRoute. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.CreateVirtualGateway">CreateVirtualGateway</a></code> | <code>string</code> | [Write] appmesh:CreateVirtualGateway. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.CreateVirtualNode">CreateVirtualNode</a></code> | <code>string</code> | [Write] appmesh:CreateVirtualNode. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.CreateVirtualRouter">CreateVirtualRouter</a></code> | <code>string</code> | [Write] appmesh:CreateVirtualRouter. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.CreateVirtualService">CreateVirtualService</a></code> | <code>string</code> | [Write] appmesh:CreateVirtualService. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteGatewayRoute">DeleteGatewayRoute</a></code> | <code>string</code> | [Write] appmesh:DeleteGatewayRoute. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteMesh">DeleteMesh</a></code> | <code>string</code> | [Write] appmesh:DeleteMesh. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteMeshPolicy">DeleteMeshPolicy</a></code> | <code>string</code> | [Write] appmesh:DeleteMeshPolicy. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteRoute">DeleteRoute</a></code> | <code>string</code> | [Write] appmesh:DeleteRoute. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteVirtualGateway">DeleteVirtualGateway</a></code> | <code>string</code> | [Write] appmesh:DeleteVirtualGateway. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteVirtualNode">DeleteVirtualNode</a></code> | <code>string</code> | [Write] appmesh:DeleteVirtualNode. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteVirtualRouter">DeleteVirtualRouter</a></code> | <code>string</code> | [Write] appmesh:DeleteVirtualRouter. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteVirtualService">DeleteVirtualService</a></code> | <code>string</code> | [Write] appmesh:DeleteVirtualService. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeGatewayRoute">DescribeGatewayRoute</a></code> | <code>string</code> | [Read] appmesh:DescribeGatewayRoute. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeMesh">DescribeMesh</a></code> | <code>string</code> | [Read] appmesh:DescribeMesh. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeRoute">DescribeRoute</a></code> | <code>string</code> | [Read] appmesh:DescribeRoute. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeVirtualGateway">DescribeVirtualGateway</a></code> | <code>string</code> | [Read] appmesh:DescribeVirtualGateway. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeVirtualNode">DescribeVirtualNode</a></code> | <code>string</code> | [Read] appmesh:DescribeVirtualNode. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeVirtualRouter">DescribeVirtualRouter</a></code> | <code>string</code> | [Read] appmesh:DescribeVirtualRouter. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeVirtualService">DescribeVirtualService</a></code> | <code>string</code> | [Read] appmesh:DescribeVirtualService. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.ListGatewayRoutes">ListGatewayRoutes</a></code> | <code>string</code> | [List] appmesh:ListGatewayRoutes. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.ListMeshes">ListMeshes</a></code> | <code>string</code> | [List] appmesh:ListMeshes. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.ListRoutes">ListRoutes</a></code> | <code>string</code> | [List] appmesh:ListRoutes. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] appmesh:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.ListVirtualGateways">ListVirtualGateways</a></code> | <code>string</code> | [List] appmesh:ListVirtualGateways. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.ListVirtualNodes">ListVirtualNodes</a></code> | <code>string</code> | [List] appmesh:ListVirtualNodes. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.ListVirtualRouters">ListVirtualRouters</a></code> | <code>string</code> | [List] appmesh:ListVirtualRouters. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.ListVirtualServices">ListVirtualServices</a></code> | <code>string</code> | [List] appmesh:ListVirtualServices. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.PutMeshPolicy">PutMeshPolicy</a></code> | <code>string</code> | [Write] appmesh:PutMeshPolicy. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.StreamAggregatedResources">StreamAggregatedResources</a></code> | <code>string</code> | [Read] appmesh:StreamAggregatedResources. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] appmesh:TagResource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] appmesh:UntagResource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateGatewayRoute">UpdateGatewayRoute</a></code> | <code>string</code> | [Write] appmesh:UpdateGatewayRoute. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateMesh">UpdateMesh</a></code> | <code>string</code> | [Write] appmesh:UpdateMesh. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateRoute">UpdateRoute</a></code> | <code>string</code> | [Write] appmesh:UpdateRoute. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateVirtualGateway">UpdateVirtualGateway</a></code> | <code>string</code> | [Write] appmesh:UpdateVirtualGateway. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateVirtualNode">UpdateVirtualNode</a></code> | <code>string</code> | [Write] appmesh:UpdateVirtualNode. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateVirtualRouter">UpdateVirtualRouter</a></code> | <code>string</code> | [Write] appmesh:UpdateVirtualRouter. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateVirtualService">UpdateVirtualService</a></code> | <code>string</code> | [Write] appmesh:UpdateVirtualService. |

---

##### `actionGetMeshPolicy`<sup>Required</sup> <a name="actionGetMeshPolicy" id="@cdk_utils/iam.appmesh.AppmeshActions.property.actionGetMeshPolicy"></a>

```typescript
public readonly actionGetMeshPolicy: string;
```

- *Type:* string

[Read] appmesh:GetMeshPolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.appmesh.AppmeshActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.appmesh.AppmeshActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.appmesh.AppmeshActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.appmesh.AppmeshActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.appmesh.AppmeshActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateGatewayRoute`<sup>Required</sup> <a name="CreateGatewayRoute" id="@cdk_utils/iam.appmesh.AppmeshActions.property.CreateGatewayRoute"></a>

```typescript
public readonly CreateGatewayRoute: string;
```

- *Type:* string

[Write] appmesh:CreateGatewayRoute.

---

##### `CreateMesh`<sup>Required</sup> <a name="CreateMesh" id="@cdk_utils/iam.appmesh.AppmeshActions.property.CreateMesh"></a>

```typescript
public readonly CreateMesh: string;
```

- *Type:* string

[Write] appmesh:CreateMesh.

---

##### `CreateRoute`<sup>Required</sup> <a name="CreateRoute" id="@cdk_utils/iam.appmesh.AppmeshActions.property.CreateRoute"></a>

```typescript
public readonly CreateRoute: string;
```

- *Type:* string

[Write] appmesh:CreateRoute.

---

##### `CreateVirtualGateway`<sup>Required</sup> <a name="CreateVirtualGateway" id="@cdk_utils/iam.appmesh.AppmeshActions.property.CreateVirtualGateway"></a>

```typescript
public readonly CreateVirtualGateway: string;
```

- *Type:* string

[Write] appmesh:CreateVirtualGateway.

---

##### `CreateVirtualNode`<sup>Required</sup> <a name="CreateVirtualNode" id="@cdk_utils/iam.appmesh.AppmeshActions.property.CreateVirtualNode"></a>

```typescript
public readonly CreateVirtualNode: string;
```

- *Type:* string

[Write] appmesh:CreateVirtualNode.

---

##### `CreateVirtualRouter`<sup>Required</sup> <a name="CreateVirtualRouter" id="@cdk_utils/iam.appmesh.AppmeshActions.property.CreateVirtualRouter"></a>

```typescript
public readonly CreateVirtualRouter: string;
```

- *Type:* string

[Write] appmesh:CreateVirtualRouter.

---

##### `CreateVirtualService`<sup>Required</sup> <a name="CreateVirtualService" id="@cdk_utils/iam.appmesh.AppmeshActions.property.CreateVirtualService"></a>

```typescript
public readonly CreateVirtualService: string;
```

- *Type:* string

[Write] appmesh:CreateVirtualService.

---

##### `DeleteGatewayRoute`<sup>Required</sup> <a name="DeleteGatewayRoute" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteGatewayRoute"></a>

```typescript
public readonly DeleteGatewayRoute: string;
```

- *Type:* string

[Write] appmesh:DeleteGatewayRoute.

---

##### `DeleteMesh`<sup>Required</sup> <a name="DeleteMesh" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteMesh"></a>

```typescript
public readonly DeleteMesh: string;
```

- *Type:* string

[Write] appmesh:DeleteMesh.

---

##### `DeleteMeshPolicy`<sup>Required</sup> <a name="DeleteMeshPolicy" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteMeshPolicy"></a>

```typescript
public readonly DeleteMeshPolicy: string;
```

- *Type:* string

[Write] appmesh:DeleteMeshPolicy.

---

##### `DeleteRoute`<sup>Required</sup> <a name="DeleteRoute" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteRoute"></a>

```typescript
public readonly DeleteRoute: string;
```

- *Type:* string

[Write] appmesh:DeleteRoute.

---

##### `DeleteVirtualGateway`<sup>Required</sup> <a name="DeleteVirtualGateway" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteVirtualGateway"></a>

```typescript
public readonly DeleteVirtualGateway: string;
```

- *Type:* string

[Write] appmesh:DeleteVirtualGateway.

---

##### `DeleteVirtualNode`<sup>Required</sup> <a name="DeleteVirtualNode" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteVirtualNode"></a>

```typescript
public readonly DeleteVirtualNode: string;
```

- *Type:* string

[Write] appmesh:DeleteVirtualNode.

---

##### `DeleteVirtualRouter`<sup>Required</sup> <a name="DeleteVirtualRouter" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteVirtualRouter"></a>

```typescript
public readonly DeleteVirtualRouter: string;
```

- *Type:* string

[Write] appmesh:DeleteVirtualRouter.

---

##### `DeleteVirtualService`<sup>Required</sup> <a name="DeleteVirtualService" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DeleteVirtualService"></a>

```typescript
public readonly DeleteVirtualService: string;
```

- *Type:* string

[Write] appmesh:DeleteVirtualService.

---

##### `DescribeGatewayRoute`<sup>Required</sup> <a name="DescribeGatewayRoute" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeGatewayRoute"></a>

```typescript
public readonly DescribeGatewayRoute: string;
```

- *Type:* string

[Read] appmesh:DescribeGatewayRoute.

---

##### `DescribeMesh`<sup>Required</sup> <a name="DescribeMesh" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeMesh"></a>

```typescript
public readonly DescribeMesh: string;
```

- *Type:* string

[Read] appmesh:DescribeMesh.

---

##### `DescribeRoute`<sup>Required</sup> <a name="DescribeRoute" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeRoute"></a>

```typescript
public readonly DescribeRoute: string;
```

- *Type:* string

[Read] appmesh:DescribeRoute.

---

##### `DescribeVirtualGateway`<sup>Required</sup> <a name="DescribeVirtualGateway" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeVirtualGateway"></a>

```typescript
public readonly DescribeVirtualGateway: string;
```

- *Type:* string

[Read] appmesh:DescribeVirtualGateway.

---

##### `DescribeVirtualNode`<sup>Required</sup> <a name="DescribeVirtualNode" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeVirtualNode"></a>

```typescript
public readonly DescribeVirtualNode: string;
```

- *Type:* string

[Read] appmesh:DescribeVirtualNode.

---

##### `DescribeVirtualRouter`<sup>Required</sup> <a name="DescribeVirtualRouter" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeVirtualRouter"></a>

```typescript
public readonly DescribeVirtualRouter: string;
```

- *Type:* string

[Read] appmesh:DescribeVirtualRouter.

---

##### `DescribeVirtualService`<sup>Required</sup> <a name="DescribeVirtualService" id="@cdk_utils/iam.appmesh.AppmeshActions.property.DescribeVirtualService"></a>

```typescript
public readonly DescribeVirtualService: string;
```

- *Type:* string

[Read] appmesh:DescribeVirtualService.

---

##### `ListGatewayRoutes`<sup>Required</sup> <a name="ListGatewayRoutes" id="@cdk_utils/iam.appmesh.AppmeshActions.property.ListGatewayRoutes"></a>

```typescript
public readonly ListGatewayRoutes: string;
```

- *Type:* string

[List] appmesh:ListGatewayRoutes.

---

##### `ListMeshes`<sup>Required</sup> <a name="ListMeshes" id="@cdk_utils/iam.appmesh.AppmeshActions.property.ListMeshes"></a>

```typescript
public readonly ListMeshes: string;
```

- *Type:* string

[List] appmesh:ListMeshes.

---

##### `ListRoutes`<sup>Required</sup> <a name="ListRoutes" id="@cdk_utils/iam.appmesh.AppmeshActions.property.ListRoutes"></a>

```typescript
public readonly ListRoutes: string;
```

- *Type:* string

[List] appmesh:ListRoutes.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appmesh.AppmeshActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] appmesh:ListTagsForResource.

---

##### `ListVirtualGateways`<sup>Required</sup> <a name="ListVirtualGateways" id="@cdk_utils/iam.appmesh.AppmeshActions.property.ListVirtualGateways"></a>

```typescript
public readonly ListVirtualGateways: string;
```

- *Type:* string

[List] appmesh:ListVirtualGateways.

---

##### `ListVirtualNodes`<sup>Required</sup> <a name="ListVirtualNodes" id="@cdk_utils/iam.appmesh.AppmeshActions.property.ListVirtualNodes"></a>

```typescript
public readonly ListVirtualNodes: string;
```

- *Type:* string

[List] appmesh:ListVirtualNodes.

---

##### `ListVirtualRouters`<sup>Required</sup> <a name="ListVirtualRouters" id="@cdk_utils/iam.appmesh.AppmeshActions.property.ListVirtualRouters"></a>

```typescript
public readonly ListVirtualRouters: string;
```

- *Type:* string

[List] appmesh:ListVirtualRouters.

---

##### `ListVirtualServices`<sup>Required</sup> <a name="ListVirtualServices" id="@cdk_utils/iam.appmesh.AppmeshActions.property.ListVirtualServices"></a>

```typescript
public readonly ListVirtualServices: string;
```

- *Type:* string

[List] appmesh:ListVirtualServices.

---

##### `PutMeshPolicy`<sup>Required</sup> <a name="PutMeshPolicy" id="@cdk_utils/iam.appmesh.AppmeshActions.property.PutMeshPolicy"></a>

```typescript
public readonly PutMeshPolicy: string;
```

- *Type:* string

[Write] appmesh:PutMeshPolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.appmesh.AppmeshActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StreamAggregatedResources`<sup>Required</sup> <a name="StreamAggregatedResources" id="@cdk_utils/iam.appmesh.AppmeshActions.property.StreamAggregatedResources"></a>

```typescript
public readonly StreamAggregatedResources: string;
```

- *Type:* string

[Read] appmesh:StreamAggregatedResources.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appmesh.AppmeshActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] appmesh:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appmesh.AppmeshActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] appmesh:UntagResource.

---

##### `UpdateGatewayRoute`<sup>Required</sup> <a name="UpdateGatewayRoute" id="@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateGatewayRoute"></a>

```typescript
public readonly UpdateGatewayRoute: string;
```

- *Type:* string

[Write] appmesh:UpdateGatewayRoute.

---

##### `UpdateMesh`<sup>Required</sup> <a name="UpdateMesh" id="@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateMesh"></a>

```typescript
public readonly UpdateMesh: string;
```

- *Type:* string

[Write] appmesh:UpdateMesh.

---

##### `UpdateRoute`<sup>Required</sup> <a name="UpdateRoute" id="@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateRoute"></a>

```typescript
public readonly UpdateRoute: string;
```

- *Type:* string

[Write] appmesh:UpdateRoute.

---

##### `UpdateVirtualGateway`<sup>Required</sup> <a name="UpdateVirtualGateway" id="@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateVirtualGateway"></a>

```typescript
public readonly UpdateVirtualGateway: string;
```

- *Type:* string

[Write] appmesh:UpdateVirtualGateway.

---

##### `UpdateVirtualNode`<sup>Required</sup> <a name="UpdateVirtualNode" id="@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateVirtualNode"></a>

```typescript
public readonly UpdateVirtualNode: string;
```

- *Type:* string

[Write] appmesh:UpdateVirtualNode.

---

##### `UpdateVirtualRouter`<sup>Required</sup> <a name="UpdateVirtualRouter" id="@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateVirtualRouter"></a>

```typescript
public readonly UpdateVirtualRouter: string;
```

- *Type:* string

[Write] appmesh:UpdateVirtualRouter.

---

##### `UpdateVirtualService`<sup>Required</sup> <a name="UpdateVirtualService" id="@cdk_utils/iam.appmesh.AppmeshActions.property.UpdateVirtualService"></a>

```typescript
public readonly UpdateVirtualService: string;
```

- *Type:* string

[Write] appmesh:UpdateVirtualService.

---

### AppmeshConditions <a name="AppmeshConditions" id="@cdk_utils/iam.appmesh.AppmeshConditions"></a>

Condition key constants and builders for appmesh.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appmesh.AppmeshConditions.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

new appmesh.AppmeshConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.appmesh.AppmeshConditions.requestTag"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appmesh.AppmeshConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.appmesh.AppmeshConditions.resourceTag"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appmesh.AppmeshConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.appmesh.AppmeshConditions.tagKeys"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.appmesh.AppmeshConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshConditions.property.CreateMeshConditionKeys">CreateMeshConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMesh action. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshConditions.property.CreateVirtualGatewayConditionKeys">CreateVirtualGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVirtualGateway action. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshConditions.property.CreateVirtualRouterConditionKeys">CreateVirtualRouterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVirtualRouter action. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.appmesh.AppmeshConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.appmesh.AppmeshConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.appmesh.AppmeshConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateMeshConditionKeys`<sup>Required</sup> <a name="CreateMeshConditionKeys" id="@cdk_utils/iam.appmesh.AppmeshConditions.property.CreateMeshConditionKeys"></a>

```typescript
public readonly CreateMeshConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMesh action.

---

##### `CreateVirtualGatewayConditionKeys`<sup>Required</sup> <a name="CreateVirtualGatewayConditionKeys" id="@cdk_utils/iam.appmesh.AppmeshConditions.property.CreateVirtualGatewayConditionKeys"></a>

```typescript
public readonly CreateVirtualGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVirtualGateway action.

---

##### `CreateVirtualRouterConditionKeys`<sup>Required</sup> <a name="CreateVirtualRouterConditionKeys" id="@cdk_utils/iam.appmesh.AppmeshConditions.property.CreateVirtualRouterConditionKeys"></a>

```typescript
public readonly CreateVirtualRouterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVirtualRouter action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.appmesh.AppmeshConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.appmesh.AppmeshConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AppmeshOperations <a name="AppmeshOperations" id="@cdk_utils/iam.appmesh.AppmeshOperations"></a>

API operation to required IAM actions mapping for appmesh.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appmesh.AppmeshOperations.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

new appmesh.AppmeshOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateGatewayRoute">CreateGatewayRoute</a></code> | <code>string[]</code> | IAM actions required for the CreateGatewayRoute API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateMesh">CreateMesh</a></code> | <code>string[]</code> | IAM actions required for the CreateMesh API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateRoute">CreateRoute</a></code> | <code>string[]</code> | IAM actions required for the CreateRoute API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateVirtualGateway">CreateVirtualGateway</a></code> | <code>string[]</code> | IAM actions required for the CreateVirtualGateway API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateVirtualNode">CreateVirtualNode</a></code> | <code>string[]</code> | IAM actions required for the CreateVirtualNode API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateVirtualRouter">CreateVirtualRouter</a></code> | <code>string[]</code> | IAM actions required for the CreateVirtualRouter API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateVirtualService">CreateVirtualService</a></code> | <code>string[]</code> | IAM actions required for the CreateVirtualService API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteGatewayRoute">DeleteGatewayRoute</a></code> | <code>string[]</code> | IAM actions required for the DeleteGatewayRoute API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteMesh">DeleteMesh</a></code> | <code>string[]</code> | IAM actions required for the DeleteMesh API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteRoute">DeleteRoute</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoute API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteVirtualGateway">DeleteVirtualGateway</a></code> | <code>string[]</code> | IAM actions required for the DeleteVirtualGateway API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteVirtualNode">DeleteVirtualNode</a></code> | <code>string[]</code> | IAM actions required for the DeleteVirtualNode API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteVirtualRouter">DeleteVirtualRouter</a></code> | <code>string[]</code> | IAM actions required for the DeleteVirtualRouter API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteVirtualService">DeleteVirtualService</a></code> | <code>string[]</code> | IAM actions required for the DeleteVirtualService API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeGatewayRoute">DescribeGatewayRoute</a></code> | <code>string[]</code> | IAM actions required for the DescribeGatewayRoute API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeMesh">DescribeMesh</a></code> | <code>string[]</code> | IAM actions required for the DescribeMesh API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeRoute">DescribeRoute</a></code> | <code>string[]</code> | IAM actions required for the DescribeRoute API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeVirtualGateway">DescribeVirtualGateway</a></code> | <code>string[]</code> | IAM actions required for the DescribeVirtualGateway API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeVirtualNode">DescribeVirtualNode</a></code> | <code>string[]</code> | IAM actions required for the DescribeVirtualNode API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeVirtualRouter">DescribeVirtualRouter</a></code> | <code>string[]</code> | IAM actions required for the DescribeVirtualRouter API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeVirtualService">DescribeVirtualService</a></code> | <code>string[]</code> | IAM actions required for the DescribeVirtualService API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.ListGatewayRoutes">ListGatewayRoutes</a></code> | <code>string[]</code> | IAM actions required for the ListGatewayRoutes API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.ListMeshes">ListMeshes</a></code> | <code>string[]</code> | IAM actions required for the ListMeshes API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.ListRoutes">ListRoutes</a></code> | <code>string[]</code> | IAM actions required for the ListRoutes API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.ListVirtualGateways">ListVirtualGateways</a></code> | <code>string[]</code> | IAM actions required for the ListVirtualGateways API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.ListVirtualNodes">ListVirtualNodes</a></code> | <code>string[]</code> | IAM actions required for the ListVirtualNodes API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.ListVirtualRouters">ListVirtualRouters</a></code> | <code>string[]</code> | IAM actions required for the ListVirtualRouters API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.ListVirtualServices">ListVirtualServices</a></code> | <code>string[]</code> | IAM actions required for the ListVirtualServices API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateGatewayRoute">UpdateGatewayRoute</a></code> | <code>string[]</code> | IAM actions required for the UpdateGatewayRoute API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateMesh">UpdateMesh</a></code> | <code>string[]</code> | IAM actions required for the UpdateMesh API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateRoute">UpdateRoute</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoute API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateVirtualGateway">UpdateVirtualGateway</a></code> | <code>string[]</code> | IAM actions required for the UpdateVirtualGateway API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateVirtualNode">UpdateVirtualNode</a></code> | <code>string[]</code> | IAM actions required for the UpdateVirtualNode API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateVirtualRouter">UpdateVirtualRouter</a></code> | <code>string[]</code> | IAM actions required for the UpdateVirtualRouter API call. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateVirtualService">UpdateVirtualService</a></code> | <code>string[]</code> | IAM actions required for the UpdateVirtualService API call. |

---

##### `CreateGatewayRoute`<sup>Required</sup> <a name="CreateGatewayRoute" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateGatewayRoute"></a>

```typescript
public readonly CreateGatewayRoute: string[];
```

- *Type:* string[]

IAM actions required for the CreateGatewayRoute API call.

---

##### `CreateMesh`<sup>Required</sup> <a name="CreateMesh" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateMesh"></a>

```typescript
public readonly CreateMesh: string[];
```

- *Type:* string[]

IAM actions required for the CreateMesh API call.

---

##### `CreateRoute`<sup>Required</sup> <a name="CreateRoute" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateRoute"></a>

```typescript
public readonly CreateRoute: string[];
```

- *Type:* string[]

IAM actions required for the CreateRoute API call.

---

##### `CreateVirtualGateway`<sup>Required</sup> <a name="CreateVirtualGateway" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateVirtualGateway"></a>

```typescript
public readonly CreateVirtualGateway: string[];
```

- *Type:* string[]

IAM actions required for the CreateVirtualGateway API call.

---

##### `CreateVirtualNode`<sup>Required</sup> <a name="CreateVirtualNode" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateVirtualNode"></a>

```typescript
public readonly CreateVirtualNode: string[];
```

- *Type:* string[]

IAM actions required for the CreateVirtualNode API call.

---

##### `CreateVirtualRouter`<sup>Required</sup> <a name="CreateVirtualRouter" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateVirtualRouter"></a>

```typescript
public readonly CreateVirtualRouter: string[];
```

- *Type:* string[]

IAM actions required for the CreateVirtualRouter API call.

---

##### `CreateVirtualService`<sup>Required</sup> <a name="CreateVirtualService" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.CreateVirtualService"></a>

```typescript
public readonly CreateVirtualService: string[];
```

- *Type:* string[]

IAM actions required for the CreateVirtualService API call.

---

##### `DeleteGatewayRoute`<sup>Required</sup> <a name="DeleteGatewayRoute" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteGatewayRoute"></a>

```typescript
public readonly DeleteGatewayRoute: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGatewayRoute API call.

---

##### `DeleteMesh`<sup>Required</sup> <a name="DeleteMesh" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteMesh"></a>

```typescript
public readonly DeleteMesh: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMesh API call.

---

##### `DeleteRoute`<sup>Required</sup> <a name="DeleteRoute" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteRoute"></a>

```typescript
public readonly DeleteRoute: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoute API call.

---

##### `DeleteVirtualGateway`<sup>Required</sup> <a name="DeleteVirtualGateway" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteVirtualGateway"></a>

```typescript
public readonly DeleteVirtualGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVirtualGateway API call.

---

##### `DeleteVirtualNode`<sup>Required</sup> <a name="DeleteVirtualNode" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteVirtualNode"></a>

```typescript
public readonly DeleteVirtualNode: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVirtualNode API call.

---

##### `DeleteVirtualRouter`<sup>Required</sup> <a name="DeleteVirtualRouter" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteVirtualRouter"></a>

```typescript
public readonly DeleteVirtualRouter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVirtualRouter API call.

---

##### `DeleteVirtualService`<sup>Required</sup> <a name="DeleteVirtualService" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DeleteVirtualService"></a>

```typescript
public readonly DeleteVirtualService: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVirtualService API call.

---

##### `DescribeGatewayRoute`<sup>Required</sup> <a name="DescribeGatewayRoute" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeGatewayRoute"></a>

```typescript
public readonly DescribeGatewayRoute: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGatewayRoute API call.

---

##### `DescribeMesh`<sup>Required</sup> <a name="DescribeMesh" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeMesh"></a>

```typescript
public readonly DescribeMesh: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMesh API call.

---

##### `DescribeRoute`<sup>Required</sup> <a name="DescribeRoute" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeRoute"></a>

```typescript
public readonly DescribeRoute: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRoute API call.

---

##### `DescribeVirtualGateway`<sup>Required</sup> <a name="DescribeVirtualGateway" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeVirtualGateway"></a>

```typescript
public readonly DescribeVirtualGateway: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVirtualGateway API call.

---

##### `DescribeVirtualNode`<sup>Required</sup> <a name="DescribeVirtualNode" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeVirtualNode"></a>

```typescript
public readonly DescribeVirtualNode: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVirtualNode API call.

---

##### `DescribeVirtualRouter`<sup>Required</sup> <a name="DescribeVirtualRouter" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeVirtualRouter"></a>

```typescript
public readonly DescribeVirtualRouter: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVirtualRouter API call.

---

##### `DescribeVirtualService`<sup>Required</sup> <a name="DescribeVirtualService" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.DescribeVirtualService"></a>

```typescript
public readonly DescribeVirtualService: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVirtualService API call.

---

##### `ListGatewayRoutes`<sup>Required</sup> <a name="ListGatewayRoutes" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.ListGatewayRoutes"></a>

```typescript
public readonly ListGatewayRoutes: string[];
```

- *Type:* string[]

IAM actions required for the ListGatewayRoutes API call.

---

##### `ListMeshes`<sup>Required</sup> <a name="ListMeshes" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.ListMeshes"></a>

```typescript
public readonly ListMeshes: string[];
```

- *Type:* string[]

IAM actions required for the ListMeshes API call.

---

##### `ListRoutes`<sup>Required</sup> <a name="ListRoutes" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.ListRoutes"></a>

```typescript
public readonly ListRoutes: string[];
```

- *Type:* string[]

IAM actions required for the ListRoutes API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVirtualGateways`<sup>Required</sup> <a name="ListVirtualGateways" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.ListVirtualGateways"></a>

```typescript
public readonly ListVirtualGateways: string[];
```

- *Type:* string[]

IAM actions required for the ListVirtualGateways API call.

---

##### `ListVirtualNodes`<sup>Required</sup> <a name="ListVirtualNodes" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.ListVirtualNodes"></a>

```typescript
public readonly ListVirtualNodes: string[];
```

- *Type:* string[]

IAM actions required for the ListVirtualNodes API call.

---

##### `ListVirtualRouters`<sup>Required</sup> <a name="ListVirtualRouters" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.ListVirtualRouters"></a>

```typescript
public readonly ListVirtualRouters: string[];
```

- *Type:* string[]

IAM actions required for the ListVirtualRouters API call.

---

##### `ListVirtualServices`<sup>Required</sup> <a name="ListVirtualServices" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.ListVirtualServices"></a>

```typescript
public readonly ListVirtualServices: string[];
```

- *Type:* string[]

IAM actions required for the ListVirtualServices API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateGatewayRoute`<sup>Required</sup> <a name="UpdateGatewayRoute" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateGatewayRoute"></a>

```typescript
public readonly UpdateGatewayRoute: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGatewayRoute API call.

---

##### `UpdateMesh`<sup>Required</sup> <a name="UpdateMesh" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateMesh"></a>

```typescript
public readonly UpdateMesh: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMesh API call.

---

##### `UpdateRoute`<sup>Required</sup> <a name="UpdateRoute" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateRoute"></a>

```typescript
public readonly UpdateRoute: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoute API call.

---

##### `UpdateVirtualGateway`<sup>Required</sup> <a name="UpdateVirtualGateway" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateVirtualGateway"></a>

```typescript
public readonly UpdateVirtualGateway: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVirtualGateway API call.

---

##### `UpdateVirtualNode`<sup>Required</sup> <a name="UpdateVirtualNode" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateVirtualNode"></a>

```typescript
public readonly UpdateVirtualNode: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVirtualNode API call.

---

##### `UpdateVirtualRouter`<sup>Required</sup> <a name="UpdateVirtualRouter" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateVirtualRouter"></a>

```typescript
public readonly UpdateVirtualRouter: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVirtualRouter API call.

---

##### `UpdateVirtualService`<sup>Required</sup> <a name="UpdateVirtualService" id="@cdk_utils/iam.appmesh.AppmeshOperations.property.UpdateVirtualService"></a>

```typescript
public readonly UpdateVirtualService: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVirtualService API call.

---

### AppmeshResources <a name="AppmeshResources" id="@cdk_utils/iam.appmesh.AppmeshResources"></a>

ARN builders, validators, and parsers for appmesh resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appmesh.AppmeshResources.Initializer"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

new appmesh.AppmeshResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.gatewayRoute">gatewayRoute</a></code> | Builds an ARN for the gatewayRoute resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.isValidGatewayRouteArn">isValidGatewayRouteArn</a></code> | Validates whether a string is a valid ARN for the gatewayRoute resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.isValidMeshArn">isValidMeshArn</a></code> | Validates whether a string is a valid ARN for the mesh resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.isValidRouteArn">isValidRouteArn</a></code> | Validates whether a string is a valid ARN for the route resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualGatewayArn">isValidVirtualGatewayArn</a></code> | Validates whether a string is a valid ARN for the virtualGateway resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualNodeArn">isValidVirtualNodeArn</a></code> | Validates whether a string is a valid ARN for the virtualNode resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualRouterArn">isValidVirtualRouterArn</a></code> | Validates whether a string is a valid ARN for the virtualRouter resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualServiceArn">isValidVirtualServiceArn</a></code> | Validates whether a string is a valid ARN for the virtualService resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.mesh">mesh</a></code> | Builds an ARN for the mesh resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.parseGatewayRouteArn">parseGatewayRouteArn</a></code> | Parses a gatewayRoute ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.parseMeshArn">parseMeshArn</a></code> | Parses a mesh ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.parseRouteArn">parseRouteArn</a></code> | Parses a route ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualGatewayArn">parseVirtualGatewayArn</a></code> | Parses a virtualGateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualNodeArn">parseVirtualNodeArn</a></code> | Parses a virtualNode ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualRouterArn">parseVirtualRouterArn</a></code> | Parses a virtualRouter ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualServiceArn">parseVirtualServiceArn</a></code> | Parses a virtualService ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.route">route</a></code> | Builds an ARN for the route resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.virtualGateway">virtualGateway</a></code> | Builds an ARN for the virtualGateway resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.virtualNode">virtualNode</a></code> | Builds an ARN for the virtualNode resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.virtualRouter">virtualRouter</a></code> | Builds an ARN for the virtualRouter resource. |
| <code><a href="#@cdk_utils/iam.appmesh.AppmeshResources.virtualService">virtualService</a></code> | Builds an ARN for the virtualService resource. |

---

##### `gatewayRoute` <a name="gatewayRoute" id="@cdk_utils/iam.appmesh.AppmeshResources.gatewayRoute"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.gatewayRoute(props: AppmeshGatewayRouteArnProps)
```

Builds an ARN for the gatewayRoute resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh.AppmeshResources.gatewayRoute.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh.AppmeshGatewayRouteArnProps">AppmeshGatewayRouteArnProps</a>

---

##### `isValidGatewayRouteArn` <a name="isValidGatewayRouteArn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidGatewayRouteArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.isValidGatewayRouteArn(arn: string)
```

Validates whether a string is a valid ARN for the gatewayRoute resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidGatewayRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMeshArn` <a name="isValidMeshArn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidMeshArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.isValidMeshArn(arn: string)
```

Validates whether a string is a valid ARN for the mesh resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidMeshArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouteArn` <a name="isValidRouteArn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidRouteArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.isValidRouteArn(arn: string)
```

Validates whether a string is a valid ARN for the route resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVirtualGatewayArn` <a name="isValidVirtualGatewayArn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualGatewayArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.isValidVirtualGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the virtualGateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVirtualNodeArn` <a name="isValidVirtualNodeArn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualNodeArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.isValidVirtualNodeArn(arn: string)
```

Validates whether a string is a valid ARN for the virtualNode resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualNodeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVirtualRouterArn` <a name="isValidVirtualRouterArn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualRouterArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.isValidVirtualRouterArn(arn: string)
```

Validates whether a string is a valid ARN for the virtualRouter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualRouterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVirtualServiceArn` <a name="isValidVirtualServiceArn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualServiceArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.isValidVirtualServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the virtualService resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.isValidVirtualServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `mesh` <a name="mesh" id="@cdk_utils/iam.appmesh.AppmeshResources.mesh"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.mesh(props: AppmeshMeshArnProps)
```

Builds an ARN for the mesh resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh.AppmeshResources.mesh.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh.AppmeshMeshArnProps">AppmeshMeshArnProps</a>

---

##### `parseGatewayRouteArn` <a name="parseGatewayRouteArn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseGatewayRouteArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.parseGatewayRouteArn(arn: string)
```

Parses a gatewayRoute ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseGatewayRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMeshArn` <a name="parseMeshArn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseMeshArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.parseMeshArn(arn: string)
```

Parses a mesh ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseMeshArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouteArn` <a name="parseRouteArn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseRouteArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.parseRouteArn(arn: string)
```

Parses a route ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVirtualGatewayArn` <a name="parseVirtualGatewayArn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualGatewayArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.parseVirtualGatewayArn(arn: string)
```

Parses a virtualGateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVirtualNodeArn` <a name="parseVirtualNodeArn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualNodeArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.parseVirtualNodeArn(arn: string)
```

Parses a virtualNode ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualNodeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVirtualRouterArn` <a name="parseVirtualRouterArn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualRouterArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.parseVirtualRouterArn(arn: string)
```

Parses a virtualRouter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualRouterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVirtualServiceArn` <a name="parseVirtualServiceArn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualServiceArn"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.parseVirtualServiceArn(arn: string)
```

Parses a virtualService ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh.AppmeshResources.parseVirtualServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `route` <a name="route" id="@cdk_utils/iam.appmesh.AppmeshResources.route"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.route(props: AppmeshRouteArnProps)
```

Builds an ARN for the route resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh.AppmeshResources.route.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh.AppmeshRouteArnProps">AppmeshRouteArnProps</a>

---

##### `virtualGateway` <a name="virtualGateway" id="@cdk_utils/iam.appmesh.AppmeshResources.virtualGateway"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.virtualGateway(props: AppmeshVirtualGatewayArnProps)
```

Builds an ARN for the virtualGateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh.AppmeshResources.virtualGateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh.AppmeshVirtualGatewayArnProps">AppmeshVirtualGatewayArnProps</a>

---

##### `virtualNode` <a name="virtualNode" id="@cdk_utils/iam.appmesh.AppmeshResources.virtualNode"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.virtualNode(props: AppmeshVirtualNodeArnProps)
```

Builds an ARN for the virtualNode resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh.AppmeshResources.virtualNode.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh.AppmeshVirtualNodeArnProps">AppmeshVirtualNodeArnProps</a>

---

##### `virtualRouter` <a name="virtualRouter" id="@cdk_utils/iam.appmesh.AppmeshResources.virtualRouter"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.virtualRouter(props: AppmeshVirtualRouterArnProps)
```

Builds an ARN for the virtualRouter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh.AppmeshResources.virtualRouter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh.AppmeshVirtualRouterArnProps">AppmeshVirtualRouterArnProps</a>

---

##### `virtualService` <a name="virtualService" id="@cdk_utils/iam.appmesh.AppmeshResources.virtualService"></a>

```typescript
import { appmesh } from '@cdk_utils/iam'

appmesh.AppmeshResources.virtualService(props: AppmeshVirtualServiceArnProps)
```

Builds an ARN for the virtualService resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh.AppmeshResources.virtualService.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh.AppmeshVirtualServiceArnProps">AppmeshVirtualServiceArnProps</a>

---




