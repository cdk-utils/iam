# `geo_routes` Submodule <a name="`geo_routes` Submodule" id="@cdk_utils/iam.geo_routes"></a>


## Structs <a name="Structs" id="Structs"></a>

### GeoRoutesProviderArnComponents <a name="GeoRoutesProviderArnComponents" id="@cdk_utils/iam.geo_routes.GeoRoutesProviderArnComponents"></a>

Parsed components of a provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo_routes.GeoRoutesProviderArnComponents.Initializer"></a>

```typescript
import { geo_routes } from '@cdk_utils/iam'

const geoRoutesProviderArnComponents: geo_routes.GeoRoutesProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.geo_routes.GeoRoutesProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.geo_routes.GeoRoutesProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.geo_routes.GeoRoutesProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GeoRoutesProviderArnProps <a name="GeoRoutesProviderArnProps" id="@cdk_utils/iam.geo_routes.GeoRoutesProviderArnProps"></a>

Properties for building a provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo_routes.GeoRoutesProviderArnProps.Initializer"></a>

```typescript
import { geo_routes } from '@cdk_utils/iam'

const geoRoutesProviderArnProps: geo_routes.GeoRoutesProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.geo_routes.GeoRoutesProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.geo_routes.GeoRoutesProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.geo_routes.GeoRoutesProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GeoRoutesActions <a name="GeoRoutesActions" id="@cdk_utils/iam.geo_routes.GeoRoutesActions"></a>

IAM action constants for the geo-routes service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.Initializer"></a>

```typescript
import { geo_routes } from '@cdk_utils/iam'

new geo_routes.GeoRoutesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesActions.property.CalculateIsolines">CalculateIsolines</a></code> | <code>string</code> | [Read] geo-routes:CalculateIsolines. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesActions.property.CalculateRouteMatrix">CalculateRouteMatrix</a></code> | <code>string</code> | [Read] geo-routes:CalculateRouteMatrix. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesActions.property.CalculateRoutes">CalculateRoutes</a></code> | <code>string</code> | [Read] geo-routes:CalculateRoutes. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesActions.property.OptimizeWaypoints">OptimizeWaypoints</a></code> | <code>string</code> | [Read] geo-routes:OptimizeWaypoints. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesActions.property.SnapToRoads">SnapToRoads</a></code> | <code>string</code> | [Read] geo-routes:SnapToRoads. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CalculateIsolines`<sup>Required</sup> <a name="CalculateIsolines" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.property.CalculateIsolines"></a>

```typescript
public readonly CalculateIsolines: string;
```

- *Type:* string

[Read] geo-routes:CalculateIsolines.

---

##### `CalculateRouteMatrix`<sup>Required</sup> <a name="CalculateRouteMatrix" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.property.CalculateRouteMatrix"></a>

```typescript
public readonly CalculateRouteMatrix: string;
```

- *Type:* string

[Read] geo-routes:CalculateRouteMatrix.

---

##### `CalculateRoutes`<sup>Required</sup> <a name="CalculateRoutes" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.property.CalculateRoutes"></a>

```typescript
public readonly CalculateRoutes: string;
```

- *Type:* string

[Read] geo-routes:CalculateRoutes.

---

##### `OptimizeWaypoints`<sup>Required</sup> <a name="OptimizeWaypoints" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.property.OptimizeWaypoints"></a>

```typescript
public readonly OptimizeWaypoints: string;
```

- *Type:* string

[Read] geo-routes:OptimizeWaypoints.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SnapToRoads`<sup>Required</sup> <a name="SnapToRoads" id="@cdk_utils/iam.geo_routes.GeoRoutesActions.property.SnapToRoads"></a>

```typescript
public readonly SnapToRoads: string;
```

- *Type:* string

[Read] geo-routes:SnapToRoads.

---

### GeoRoutesOperations <a name="GeoRoutesOperations" id="@cdk_utils/iam.geo_routes.GeoRoutesOperations"></a>

API operation to required IAM actions mapping for geo-routes.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo_routes.GeoRoutesOperations.Initializer"></a>

```typescript
import { geo_routes } from '@cdk_utils/iam'

new geo_routes.GeoRoutesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesOperations.property.CalculateIsolines">CalculateIsolines</a></code> | <code>string[]</code> | IAM actions required for the CalculateIsolines API call. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesOperations.property.CalculateRouteMatrix">CalculateRouteMatrix</a></code> | <code>string[]</code> | IAM actions required for the CalculateRouteMatrix API call. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesOperations.property.CalculateRoutes">CalculateRoutes</a></code> | <code>string[]</code> | IAM actions required for the CalculateRoutes API call. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesOperations.property.OptimizeWaypoints">OptimizeWaypoints</a></code> | <code>string[]</code> | IAM actions required for the OptimizeWaypoints API call. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesOperations.property.SnapToRoads">SnapToRoads</a></code> | <code>string[]</code> | IAM actions required for the SnapToRoads API call. |

---

##### `CalculateIsolines`<sup>Required</sup> <a name="CalculateIsolines" id="@cdk_utils/iam.geo_routes.GeoRoutesOperations.property.CalculateIsolines"></a>

```typescript
public readonly CalculateIsolines: string[];
```

- *Type:* string[]

IAM actions required for the CalculateIsolines API call.

---

##### `CalculateRouteMatrix`<sup>Required</sup> <a name="CalculateRouteMatrix" id="@cdk_utils/iam.geo_routes.GeoRoutesOperations.property.CalculateRouteMatrix"></a>

```typescript
public readonly CalculateRouteMatrix: string[];
```

- *Type:* string[]

IAM actions required for the CalculateRouteMatrix API call.

---

##### `CalculateRoutes`<sup>Required</sup> <a name="CalculateRoutes" id="@cdk_utils/iam.geo_routes.GeoRoutesOperations.property.CalculateRoutes"></a>

```typescript
public readonly CalculateRoutes: string[];
```

- *Type:* string[]

IAM actions required for the CalculateRoutes API call.

---

##### `OptimizeWaypoints`<sup>Required</sup> <a name="OptimizeWaypoints" id="@cdk_utils/iam.geo_routes.GeoRoutesOperations.property.OptimizeWaypoints"></a>

```typescript
public readonly OptimizeWaypoints: string[];
```

- *Type:* string[]

IAM actions required for the OptimizeWaypoints API call.

---

##### `SnapToRoads`<sup>Required</sup> <a name="SnapToRoads" id="@cdk_utils/iam.geo_routes.GeoRoutesOperations.property.SnapToRoads"></a>

```typescript
public readonly SnapToRoads: string[];
```

- *Type:* string[]

IAM actions required for the SnapToRoads API call.

---

### GeoRoutesResources <a name="GeoRoutesResources" id="@cdk_utils/iam.geo_routes.GeoRoutesResources"></a>

ARN builders, validators, and parsers for geo-routes resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo_routes.GeoRoutesResources.Initializer"></a>

```typescript
import { geo_routes } from '@cdk_utils/iam'

new geo_routes.GeoRoutesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesResources.isValidProviderArn">isValidProviderArn</a></code> | Validates whether a string is a valid ARN for the provider resource. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesResources.parseProviderArn">parseProviderArn</a></code> | Parses a provider ARN into its components. |
| <code><a href="#@cdk_utils/iam.geo_routes.GeoRoutesResources.provider">provider</a></code> | Builds an ARN for the provider resource. |

---

##### `isValidProviderArn` <a name="isValidProviderArn" id="@cdk_utils/iam.geo_routes.GeoRoutesResources.isValidProviderArn"></a>

```typescript
import { geo_routes } from '@cdk_utils/iam'

geo_routes.GeoRoutesResources.isValidProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the provider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo_routes.GeoRoutesResources.isValidProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProviderArn` <a name="parseProviderArn" id="@cdk_utils/iam.geo_routes.GeoRoutesResources.parseProviderArn"></a>

```typescript
import { geo_routes } from '@cdk_utils/iam'

geo_routes.GeoRoutesResources.parseProviderArn(arn: string)
```

Parses a provider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo_routes.GeoRoutesResources.parseProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `provider` <a name="provider" id="@cdk_utils/iam.geo_routes.GeoRoutesResources.provider"></a>

```typescript
import { geo_routes } from '@cdk_utils/iam'

geo_routes.GeoRoutesResources.provider(props: GeoRoutesProviderArnProps)
```

Builds an ARN for the provider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.geo_routes.GeoRoutesResources.provider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.geo_routes.GeoRoutesProviderArnProps">GeoRoutesProviderArnProps</a>

---




