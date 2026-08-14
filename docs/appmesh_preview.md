# `appmesh_preview` Submodule <a name="`appmesh_preview` Submodule" id="@cdk_utils/iam.appmesh_preview"></a>


## Structs <a name="Structs" id="Structs"></a>

### AppmeshPreviewGatewayRouteArnComponents <a name="AppmeshPreviewGatewayRouteArnComponents" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents"></a>

Parsed components of a gatewayRoute ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewGatewayRouteArnComponents: appmesh_preview.AppmeshPreviewGatewayRouteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.gatewayRouteName">gatewayRouteName</a></code> | <code>string</code> | The GatewayRouteName component. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.virtualGatewayName">virtualGatewayName</a></code> | <code>string</code> | The VirtualGatewayName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayRouteName`<sup>Required</sup> <a name="gatewayRouteName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.gatewayRouteName"></a>

```typescript
public readonly gatewayRouteName: string;
```

- *Type:* string

The GatewayRouteName component.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnComponents.property.virtualGatewayName"></a>

```typescript
public readonly virtualGatewayName: string;
```

- *Type:* string

The VirtualGatewayName component.

---

### AppmeshPreviewGatewayRouteArnProps <a name="AppmeshPreviewGatewayRouteArnProps" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps"></a>

Properties for building a gatewayRoute ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewGatewayRouteArnProps: appmesh_preview.AppmeshPreviewGatewayRouteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.gatewayRouteName">gatewayRouteName</a></code> | <code>string</code> | The GatewayRouteName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.virtualGatewayName">virtualGatewayName</a></code> | <code>string</code> | The VirtualGatewayName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayRouteName`<sup>Required</sup> <a name="gatewayRouteName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.gatewayRouteName"></a>

```typescript
public readonly gatewayRouteName: string;
```

- *Type:* string

The GatewayRouteName component of the ARN.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.virtualGatewayName"></a>

```typescript
public readonly virtualGatewayName: string;
```

- *Type:* string

The VirtualGatewayName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshPreviewMeshArnComponents <a name="AppmeshPreviewMeshArnComponents" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnComponents"></a>

Parsed components of a mesh ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnComponents.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewMeshArnComponents: appmesh_preview.AppmeshPreviewMeshArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppmeshPreviewMeshArnProps <a name="AppmeshPreviewMeshArnProps" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnProps"></a>

Properties for building a mesh ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnProps.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewMeshArnProps: appmesh_preview.AppmeshPreviewMeshArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshPreviewRouteArnComponents <a name="AppmeshPreviewRouteArnComponents" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents"></a>

Parsed components of a route ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewRouteArnComponents: appmesh_preview.AppmeshPreviewRouteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.routeName">routeName</a></code> | <code>string</code> | The RouteName component. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.virtualRouterName">virtualRouterName</a></code> | <code>string</code> | The VirtualRouterName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routeName`<sup>Required</sup> <a name="routeName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.routeName"></a>

```typescript
public readonly routeName: string;
```

- *Type:* string

The RouteName component.

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnComponents.property.virtualRouterName"></a>

```typescript
public readonly virtualRouterName: string;
```

- *Type:* string

The VirtualRouterName component.

---

### AppmeshPreviewRouteArnProps <a name="AppmeshPreviewRouteArnProps" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps"></a>

Properties for building a route ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewRouteArnProps: appmesh_preview.AppmeshPreviewRouteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.routeName">routeName</a></code> | <code>string</code> | The RouteName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.virtualRouterName">virtualRouterName</a></code> | <code>string</code> | The VirtualRouterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `routeName`<sup>Required</sup> <a name="routeName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.routeName"></a>

```typescript
public readonly routeName: string;
```

- *Type:* string

The RouteName component of the ARN.

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.virtualRouterName"></a>

```typescript
public readonly virtualRouterName: string;
```

- *Type:* string

The VirtualRouterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshPreviewVirtualGatewayArnComponents <a name="AppmeshPreviewVirtualGatewayArnComponents" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents"></a>

Parsed components of a virtualGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewVirtualGatewayArnComponents: appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents.property.virtualGatewayName">virtualGatewayName</a></code> | <code>string</code> | The VirtualGatewayName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnComponents.property.virtualGatewayName"></a>

```typescript
public readonly virtualGatewayName: string;
```

- *Type:* string

The VirtualGatewayName component.

---

### AppmeshPreviewVirtualGatewayArnProps <a name="AppmeshPreviewVirtualGatewayArnProps" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps"></a>

Properties for building a virtualGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewVirtualGatewayArnProps: appmesh_preview.AppmeshPreviewVirtualGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps.property.virtualGatewayName">virtualGatewayName</a></code> | <code>string</code> | The VirtualGatewayName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `virtualGatewayName`<sup>Required</sup> <a name="virtualGatewayName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps.property.virtualGatewayName"></a>

```typescript
public readonly virtualGatewayName: string;
```

- *Type:* string

The VirtualGatewayName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshPreviewVirtualNodeArnComponents <a name="AppmeshPreviewVirtualNodeArnComponents" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents"></a>

Parsed components of a virtualNode ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewVirtualNodeArnComponents: appmesh_preview.AppmeshPreviewVirtualNodeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents.property.virtualNodeName">virtualNodeName</a></code> | <code>string</code> | The VirtualNodeName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualNodeName`<sup>Required</sup> <a name="virtualNodeName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnComponents.property.virtualNodeName"></a>

```typescript
public readonly virtualNodeName: string;
```

- *Type:* string

The VirtualNodeName component.

---

### AppmeshPreviewVirtualNodeArnProps <a name="AppmeshPreviewVirtualNodeArnProps" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps"></a>

Properties for building a virtualNode ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewVirtualNodeArnProps: appmesh_preview.AppmeshPreviewVirtualNodeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps.property.virtualNodeName">virtualNodeName</a></code> | <code>string</code> | The VirtualNodeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `virtualNodeName`<sup>Required</sup> <a name="virtualNodeName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps.property.virtualNodeName"></a>

```typescript
public readonly virtualNodeName: string;
```

- *Type:* string

The VirtualNodeName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshPreviewVirtualRouterArnComponents <a name="AppmeshPreviewVirtualRouterArnComponents" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents"></a>

Parsed components of a virtualRouter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewVirtualRouterArnComponents: appmesh_preview.AppmeshPreviewVirtualRouterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents.property.virtualRouterName">virtualRouterName</a></code> | <code>string</code> | The VirtualRouterName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnComponents.property.virtualRouterName"></a>

```typescript
public readonly virtualRouterName: string;
```

- *Type:* string

The VirtualRouterName component.

---

### AppmeshPreviewVirtualRouterArnProps <a name="AppmeshPreviewVirtualRouterArnProps" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps"></a>

Properties for building a virtualRouter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewVirtualRouterArnProps: appmesh_preview.AppmeshPreviewVirtualRouterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps.property.virtualRouterName">virtualRouterName</a></code> | <code>string</code> | The VirtualRouterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps.property.virtualRouterName"></a>

```typescript
public readonly virtualRouterName: string;
```

- *Type:* string

The VirtualRouterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppmeshPreviewVirtualServiceArnComponents <a name="AppmeshPreviewVirtualServiceArnComponents" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents"></a>

Parsed components of a virtualService ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewVirtualServiceArnComponents: appmesh_preview.AppmeshPreviewVirtualServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | The VirtualServiceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnComponents.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

The VirtualServiceName component.

---

### AppmeshPreviewVirtualServiceArnProps <a name="AppmeshPreviewVirtualServiceArnProps" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps"></a>

Properties for building a virtualService ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

const appmeshPreviewVirtualServiceArnProps: appmesh_preview.AppmeshPreviewVirtualServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps.property.meshName">meshName</a></code> | <code>string</code> | The MeshName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps.property.virtualServiceName">virtualServiceName</a></code> | <code>string</code> | The VirtualServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

The MeshName component of the ARN.

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps.property.virtualServiceName"></a>

```typescript
public readonly virtualServiceName: string;
```

- *Type:* string

The VirtualServiceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshPreviewActions <a name="AppmeshPreviewActions" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions"></a>

IAM action constants for the appmesh-preview service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

new appmesh_preview.AppmeshPreviewActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.actionGetMeshPolicy">actionGetMeshPolicy</a></code> | <code>string</code> | [Read] appmesh-preview:GetMeshPolicy. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateGatewayRoute">CreateGatewayRoute</a></code> | <code>string</code> | [Write] appmesh-preview:CreateGatewayRoute. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateMesh">CreateMesh</a></code> | <code>string</code> | [Write] appmesh-preview:CreateMesh. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateRoute">CreateRoute</a></code> | <code>string</code> | [Write] appmesh-preview:CreateRoute. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateVirtualGateway">CreateVirtualGateway</a></code> | <code>string</code> | [Write] appmesh-preview:CreateVirtualGateway. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateVirtualNode">CreateVirtualNode</a></code> | <code>string</code> | [Write] appmesh-preview:CreateVirtualNode. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateVirtualRouter">CreateVirtualRouter</a></code> | <code>string</code> | [Write] appmesh-preview:CreateVirtualRouter. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateVirtualService">CreateVirtualService</a></code> | <code>string</code> | [Write] appmesh-preview:CreateVirtualService. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteGatewayRoute">DeleteGatewayRoute</a></code> | <code>string</code> | [Write] appmesh-preview:DeleteGatewayRoute. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteMesh">DeleteMesh</a></code> | <code>string</code> | [Write] appmesh-preview:DeleteMesh. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteMeshPolicy">DeleteMeshPolicy</a></code> | <code>string</code> | [Write] appmesh-preview:DeleteMeshPolicy. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteRoute">DeleteRoute</a></code> | <code>string</code> | [Write] appmesh-preview:DeleteRoute. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteVirtualGateway">DeleteVirtualGateway</a></code> | <code>string</code> | [Write] appmesh-preview:DeleteVirtualGateway. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteVirtualNode">DeleteVirtualNode</a></code> | <code>string</code> | [Write] appmesh-preview:DeleteVirtualNode. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteVirtualRouter">DeleteVirtualRouter</a></code> | <code>string</code> | [Write] appmesh-preview:DeleteVirtualRouter. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteVirtualService">DeleteVirtualService</a></code> | <code>string</code> | [Write] appmesh-preview:DeleteVirtualService. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeGatewayRoute">DescribeGatewayRoute</a></code> | <code>string</code> | [Read] appmesh-preview:DescribeGatewayRoute. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeMesh">DescribeMesh</a></code> | <code>string</code> | [Read] appmesh-preview:DescribeMesh. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeRoute">DescribeRoute</a></code> | <code>string</code> | [Read] appmesh-preview:DescribeRoute. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeVirtualGateway">DescribeVirtualGateway</a></code> | <code>string</code> | [Read] appmesh-preview:DescribeVirtualGateway. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeVirtualNode">DescribeVirtualNode</a></code> | <code>string</code> | [Read] appmesh-preview:DescribeVirtualNode. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeVirtualRouter">DescribeVirtualRouter</a></code> | <code>string</code> | [Read] appmesh-preview:DescribeVirtualRouter. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeVirtualService">DescribeVirtualService</a></code> | <code>string</code> | [Read] appmesh-preview:DescribeVirtualService. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListGatewayRoutes">ListGatewayRoutes</a></code> | <code>string</code> | [List] appmesh-preview:ListGatewayRoutes. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListMeshes">ListMeshes</a></code> | <code>string</code> | [List] appmesh-preview:ListMeshes. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListRoutes">ListRoutes</a></code> | <code>string</code> | [List] appmesh-preview:ListRoutes. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListVirtualGateways">ListVirtualGateways</a></code> | <code>string</code> | [List] appmesh-preview:ListVirtualGateways. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListVirtualNodes">ListVirtualNodes</a></code> | <code>string</code> | [List] appmesh-preview:ListVirtualNodes. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListVirtualRouters">ListVirtualRouters</a></code> | <code>string</code> | [List] appmesh-preview:ListVirtualRouters. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListVirtualServices">ListVirtualServices</a></code> | <code>string</code> | [List] appmesh-preview:ListVirtualServices. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.PutMeshPolicy">PutMeshPolicy</a></code> | <code>string</code> | [Write] appmesh-preview:PutMeshPolicy. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.StreamAggregatedResources">StreamAggregatedResources</a></code> | <code>string</code> | [Read] appmesh-preview:StreamAggregatedResources. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateGatewayRoute">UpdateGatewayRoute</a></code> | <code>string</code> | [Write] appmesh-preview:UpdateGatewayRoute. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateMesh">UpdateMesh</a></code> | <code>string</code> | [Write] appmesh-preview:UpdateMesh. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateRoute">UpdateRoute</a></code> | <code>string</code> | [Write] appmesh-preview:UpdateRoute. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateVirtualGateway">UpdateVirtualGateway</a></code> | <code>string</code> | [Write] appmesh-preview:UpdateVirtualGateway. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateVirtualNode">UpdateVirtualNode</a></code> | <code>string</code> | [Write] appmesh-preview:UpdateVirtualNode. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateVirtualRouter">UpdateVirtualRouter</a></code> | <code>string</code> | [Write] appmesh-preview:UpdateVirtualRouter. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateVirtualService">UpdateVirtualService</a></code> | <code>string</code> | [Write] appmesh-preview:UpdateVirtualService. |

---

##### `actionGetMeshPolicy`<sup>Required</sup> <a name="actionGetMeshPolicy" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.actionGetMeshPolicy"></a>

```typescript
public readonly actionGetMeshPolicy: string;
```

- *Type:* string

[Read] appmesh-preview:GetMeshPolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateGatewayRoute`<sup>Required</sup> <a name="CreateGatewayRoute" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateGatewayRoute"></a>

```typescript
public readonly CreateGatewayRoute: string;
```

- *Type:* string

[Write] appmesh-preview:CreateGatewayRoute.

---

##### `CreateMesh`<sup>Required</sup> <a name="CreateMesh" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateMesh"></a>

```typescript
public readonly CreateMesh: string;
```

- *Type:* string

[Write] appmesh-preview:CreateMesh.

---

##### `CreateRoute`<sup>Required</sup> <a name="CreateRoute" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateRoute"></a>

```typescript
public readonly CreateRoute: string;
```

- *Type:* string

[Write] appmesh-preview:CreateRoute.

---

##### `CreateVirtualGateway`<sup>Required</sup> <a name="CreateVirtualGateway" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateVirtualGateway"></a>

```typescript
public readonly CreateVirtualGateway: string;
```

- *Type:* string

[Write] appmesh-preview:CreateVirtualGateway.

---

##### `CreateVirtualNode`<sup>Required</sup> <a name="CreateVirtualNode" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateVirtualNode"></a>

```typescript
public readonly CreateVirtualNode: string;
```

- *Type:* string

[Write] appmesh-preview:CreateVirtualNode.

---

##### `CreateVirtualRouter`<sup>Required</sup> <a name="CreateVirtualRouter" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateVirtualRouter"></a>

```typescript
public readonly CreateVirtualRouter: string;
```

- *Type:* string

[Write] appmesh-preview:CreateVirtualRouter.

---

##### `CreateVirtualService`<sup>Required</sup> <a name="CreateVirtualService" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.CreateVirtualService"></a>

```typescript
public readonly CreateVirtualService: string;
```

- *Type:* string

[Write] appmesh-preview:CreateVirtualService.

---

##### `DeleteGatewayRoute`<sup>Required</sup> <a name="DeleteGatewayRoute" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteGatewayRoute"></a>

```typescript
public readonly DeleteGatewayRoute: string;
```

- *Type:* string

[Write] appmesh-preview:DeleteGatewayRoute.

---

##### `DeleteMesh`<sup>Required</sup> <a name="DeleteMesh" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteMesh"></a>

```typescript
public readonly DeleteMesh: string;
```

- *Type:* string

[Write] appmesh-preview:DeleteMesh.

---

##### `DeleteMeshPolicy`<sup>Required</sup> <a name="DeleteMeshPolicy" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteMeshPolicy"></a>

```typescript
public readonly DeleteMeshPolicy: string;
```

- *Type:* string

[Write] appmesh-preview:DeleteMeshPolicy.

---

##### `DeleteRoute`<sup>Required</sup> <a name="DeleteRoute" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteRoute"></a>

```typescript
public readonly DeleteRoute: string;
```

- *Type:* string

[Write] appmesh-preview:DeleteRoute.

---

##### `DeleteVirtualGateway`<sup>Required</sup> <a name="DeleteVirtualGateway" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteVirtualGateway"></a>

```typescript
public readonly DeleteVirtualGateway: string;
```

- *Type:* string

[Write] appmesh-preview:DeleteVirtualGateway.

---

##### `DeleteVirtualNode`<sup>Required</sup> <a name="DeleteVirtualNode" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteVirtualNode"></a>

```typescript
public readonly DeleteVirtualNode: string;
```

- *Type:* string

[Write] appmesh-preview:DeleteVirtualNode.

---

##### `DeleteVirtualRouter`<sup>Required</sup> <a name="DeleteVirtualRouter" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteVirtualRouter"></a>

```typescript
public readonly DeleteVirtualRouter: string;
```

- *Type:* string

[Write] appmesh-preview:DeleteVirtualRouter.

---

##### `DeleteVirtualService`<sup>Required</sup> <a name="DeleteVirtualService" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DeleteVirtualService"></a>

```typescript
public readonly DeleteVirtualService: string;
```

- *Type:* string

[Write] appmesh-preview:DeleteVirtualService.

---

##### `DescribeGatewayRoute`<sup>Required</sup> <a name="DescribeGatewayRoute" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeGatewayRoute"></a>

```typescript
public readonly DescribeGatewayRoute: string;
```

- *Type:* string

[Read] appmesh-preview:DescribeGatewayRoute.

---

##### `DescribeMesh`<sup>Required</sup> <a name="DescribeMesh" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeMesh"></a>

```typescript
public readonly DescribeMesh: string;
```

- *Type:* string

[Read] appmesh-preview:DescribeMesh.

---

##### `DescribeRoute`<sup>Required</sup> <a name="DescribeRoute" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeRoute"></a>

```typescript
public readonly DescribeRoute: string;
```

- *Type:* string

[Read] appmesh-preview:DescribeRoute.

---

##### `DescribeVirtualGateway`<sup>Required</sup> <a name="DescribeVirtualGateway" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeVirtualGateway"></a>

```typescript
public readonly DescribeVirtualGateway: string;
```

- *Type:* string

[Read] appmesh-preview:DescribeVirtualGateway.

---

##### `DescribeVirtualNode`<sup>Required</sup> <a name="DescribeVirtualNode" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeVirtualNode"></a>

```typescript
public readonly DescribeVirtualNode: string;
```

- *Type:* string

[Read] appmesh-preview:DescribeVirtualNode.

---

##### `DescribeVirtualRouter`<sup>Required</sup> <a name="DescribeVirtualRouter" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeVirtualRouter"></a>

```typescript
public readonly DescribeVirtualRouter: string;
```

- *Type:* string

[Read] appmesh-preview:DescribeVirtualRouter.

---

##### `DescribeVirtualService`<sup>Required</sup> <a name="DescribeVirtualService" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.DescribeVirtualService"></a>

```typescript
public readonly DescribeVirtualService: string;
```

- *Type:* string

[Read] appmesh-preview:DescribeVirtualService.

---

##### `ListGatewayRoutes`<sup>Required</sup> <a name="ListGatewayRoutes" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListGatewayRoutes"></a>

```typescript
public readonly ListGatewayRoutes: string;
```

- *Type:* string

[List] appmesh-preview:ListGatewayRoutes.

---

##### `ListMeshes`<sup>Required</sup> <a name="ListMeshes" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListMeshes"></a>

```typescript
public readonly ListMeshes: string;
```

- *Type:* string

[List] appmesh-preview:ListMeshes.

---

##### `ListRoutes`<sup>Required</sup> <a name="ListRoutes" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListRoutes"></a>

```typescript
public readonly ListRoutes: string;
```

- *Type:* string

[List] appmesh-preview:ListRoutes.

---

##### `ListVirtualGateways`<sup>Required</sup> <a name="ListVirtualGateways" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListVirtualGateways"></a>

```typescript
public readonly ListVirtualGateways: string;
```

- *Type:* string

[List] appmesh-preview:ListVirtualGateways.

---

##### `ListVirtualNodes`<sup>Required</sup> <a name="ListVirtualNodes" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListVirtualNodes"></a>

```typescript
public readonly ListVirtualNodes: string;
```

- *Type:* string

[List] appmesh-preview:ListVirtualNodes.

---

##### `ListVirtualRouters`<sup>Required</sup> <a name="ListVirtualRouters" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListVirtualRouters"></a>

```typescript
public readonly ListVirtualRouters: string;
```

- *Type:* string

[List] appmesh-preview:ListVirtualRouters.

---

##### `ListVirtualServices`<sup>Required</sup> <a name="ListVirtualServices" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.ListVirtualServices"></a>

```typescript
public readonly ListVirtualServices: string;
```

- *Type:* string

[List] appmesh-preview:ListVirtualServices.

---

##### `PutMeshPolicy`<sup>Required</sup> <a name="PutMeshPolicy" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.PutMeshPolicy"></a>

```typescript
public readonly PutMeshPolicy: string;
```

- *Type:* string

[Write] appmesh-preview:PutMeshPolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StreamAggregatedResources`<sup>Required</sup> <a name="StreamAggregatedResources" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.StreamAggregatedResources"></a>

```typescript
public readonly StreamAggregatedResources: string;
```

- *Type:* string

[Read] appmesh-preview:StreamAggregatedResources.

---

##### `UpdateGatewayRoute`<sup>Required</sup> <a name="UpdateGatewayRoute" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateGatewayRoute"></a>

```typescript
public readonly UpdateGatewayRoute: string;
```

- *Type:* string

[Write] appmesh-preview:UpdateGatewayRoute.

---

##### `UpdateMesh`<sup>Required</sup> <a name="UpdateMesh" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateMesh"></a>

```typescript
public readonly UpdateMesh: string;
```

- *Type:* string

[Write] appmesh-preview:UpdateMesh.

---

##### `UpdateRoute`<sup>Required</sup> <a name="UpdateRoute" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateRoute"></a>

```typescript
public readonly UpdateRoute: string;
```

- *Type:* string

[Write] appmesh-preview:UpdateRoute.

---

##### `UpdateVirtualGateway`<sup>Required</sup> <a name="UpdateVirtualGateway" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateVirtualGateway"></a>

```typescript
public readonly UpdateVirtualGateway: string;
```

- *Type:* string

[Write] appmesh-preview:UpdateVirtualGateway.

---

##### `UpdateVirtualNode`<sup>Required</sup> <a name="UpdateVirtualNode" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateVirtualNode"></a>

```typescript
public readonly UpdateVirtualNode: string;
```

- *Type:* string

[Write] appmesh-preview:UpdateVirtualNode.

---

##### `UpdateVirtualRouter`<sup>Required</sup> <a name="UpdateVirtualRouter" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateVirtualRouter"></a>

```typescript
public readonly UpdateVirtualRouter: string;
```

- *Type:* string

[Write] appmesh-preview:UpdateVirtualRouter.

---

##### `UpdateVirtualService`<sup>Required</sup> <a name="UpdateVirtualService" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewActions.property.UpdateVirtualService"></a>

```typescript
public readonly UpdateVirtualService: string;
```

- *Type:* string

[Write] appmesh-preview:UpdateVirtualService.

---

### AppmeshPreviewResources <a name="AppmeshPreviewResources" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources"></a>

ARN builders, validators, and parsers for appmesh-preview resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.Initializer"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

new appmesh_preview.AppmeshPreviewResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.gatewayRoute">gatewayRoute</a></code> | Builds an ARN for the gatewayRoute resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidGatewayRouteArn">isValidGatewayRouteArn</a></code> | Validates whether a string is a valid ARN for the gatewayRoute resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidMeshArn">isValidMeshArn</a></code> | Validates whether a string is a valid ARN for the mesh resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidRouteArn">isValidRouteArn</a></code> | Validates whether a string is a valid ARN for the route resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualGatewayArn">isValidVirtualGatewayArn</a></code> | Validates whether a string is a valid ARN for the virtualGateway resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualNodeArn">isValidVirtualNodeArn</a></code> | Validates whether a string is a valid ARN for the virtualNode resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualRouterArn">isValidVirtualRouterArn</a></code> | Validates whether a string is a valid ARN for the virtualRouter resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualServiceArn">isValidVirtualServiceArn</a></code> | Validates whether a string is a valid ARN for the virtualService resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.mesh">mesh</a></code> | Builds an ARN for the mesh resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseGatewayRouteArn">parseGatewayRouteArn</a></code> | Parses a gatewayRoute ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseMeshArn">parseMeshArn</a></code> | Parses a mesh ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseRouteArn">parseRouteArn</a></code> | Parses a route ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualGatewayArn">parseVirtualGatewayArn</a></code> | Parses a virtualGateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualNodeArn">parseVirtualNodeArn</a></code> | Parses a virtualNode ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualRouterArn">parseVirtualRouterArn</a></code> | Parses a virtualRouter ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualServiceArn">parseVirtualServiceArn</a></code> | Parses a virtualService ARN into its components. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.route">route</a></code> | Builds an ARN for the route resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualGateway">virtualGateway</a></code> | Builds an ARN for the virtualGateway resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualNode">virtualNode</a></code> | Builds an ARN for the virtualNode resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualRouter">virtualRouter</a></code> | Builds an ARN for the virtualRouter resource. |
| <code><a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualService">virtualService</a></code> | Builds an ARN for the virtualService resource. |

---

##### `gatewayRoute` <a name="gatewayRoute" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.gatewayRoute"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.gatewayRoute(props: AppmeshPreviewGatewayRouteArnProps)
```

Builds an ARN for the gatewayRoute resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.gatewayRoute.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewGatewayRouteArnProps">AppmeshPreviewGatewayRouteArnProps</a>

---

##### `isValidGatewayRouteArn` <a name="isValidGatewayRouteArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidGatewayRouteArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.isValidGatewayRouteArn(arn: string)
```

Validates whether a string is a valid ARN for the gatewayRoute resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidGatewayRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMeshArn` <a name="isValidMeshArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidMeshArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.isValidMeshArn(arn: string)
```

Validates whether a string is a valid ARN for the mesh resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidMeshArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouteArn` <a name="isValidRouteArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidRouteArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.isValidRouteArn(arn: string)
```

Validates whether a string is a valid ARN for the route resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVirtualGatewayArn` <a name="isValidVirtualGatewayArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualGatewayArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.isValidVirtualGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the virtualGateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVirtualNodeArn` <a name="isValidVirtualNodeArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualNodeArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.isValidVirtualNodeArn(arn: string)
```

Validates whether a string is a valid ARN for the virtualNode resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualNodeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVirtualRouterArn` <a name="isValidVirtualRouterArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualRouterArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.isValidVirtualRouterArn(arn: string)
```

Validates whether a string is a valid ARN for the virtualRouter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualRouterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVirtualServiceArn` <a name="isValidVirtualServiceArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualServiceArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.isValidVirtualServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the virtualService resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.isValidVirtualServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `mesh` <a name="mesh" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.mesh"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.mesh(props: AppmeshPreviewMeshArnProps)
```

Builds an ARN for the mesh resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.mesh.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewMeshArnProps">AppmeshPreviewMeshArnProps</a>

---

##### `parseGatewayRouteArn` <a name="parseGatewayRouteArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseGatewayRouteArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.parseGatewayRouteArn(arn: string)
```

Parses a gatewayRoute ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseGatewayRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMeshArn` <a name="parseMeshArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseMeshArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.parseMeshArn(arn: string)
```

Parses a mesh ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseMeshArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouteArn` <a name="parseRouteArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseRouteArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.parseRouteArn(arn: string)
```

Parses a route ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseRouteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVirtualGatewayArn` <a name="parseVirtualGatewayArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualGatewayArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.parseVirtualGatewayArn(arn: string)
```

Parses a virtualGateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVirtualNodeArn` <a name="parseVirtualNodeArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualNodeArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.parseVirtualNodeArn(arn: string)
```

Parses a virtualNode ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualNodeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVirtualRouterArn` <a name="parseVirtualRouterArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualRouterArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.parseVirtualRouterArn(arn: string)
```

Parses a virtualRouter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualRouterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVirtualServiceArn` <a name="parseVirtualServiceArn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualServiceArn"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.parseVirtualServiceArn(arn: string)
```

Parses a virtualService ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.parseVirtualServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `route` <a name="route" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.route"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.route(props: AppmeshPreviewRouteArnProps)
```

Builds an ARN for the route resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.route.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewRouteArnProps">AppmeshPreviewRouteArnProps</a>

---

##### `virtualGateway` <a name="virtualGateway" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualGateway"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.virtualGateway(props: AppmeshPreviewVirtualGatewayArnProps)
```

Builds an ARN for the virtualGateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualGateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualGatewayArnProps">AppmeshPreviewVirtualGatewayArnProps</a>

---

##### `virtualNode` <a name="virtualNode" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualNode"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.virtualNode(props: AppmeshPreviewVirtualNodeArnProps)
```

Builds an ARN for the virtualNode resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualNode.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualNodeArnProps">AppmeshPreviewVirtualNodeArnProps</a>

---

##### `virtualRouter` <a name="virtualRouter" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualRouter"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.virtualRouter(props: AppmeshPreviewVirtualRouterArnProps)
```

Builds an ARN for the virtualRouter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualRouter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualRouterArnProps">AppmeshPreviewVirtualRouterArnProps</a>

---

##### `virtualService` <a name="virtualService" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualService"></a>

```typescript
import { appmesh_preview } from '@cdk_utils/iam'

appmesh_preview.AppmeshPreviewResources.virtualService(props: AppmeshPreviewVirtualServiceArnProps)
```

Builds an ARN for the virtualService resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appmesh_preview.AppmeshPreviewResources.virtualService.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appmesh_preview.AppmeshPreviewVirtualServiceArnProps">AppmeshPreviewVirtualServiceArnProps</a>

---




