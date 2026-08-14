# `geo_maps` Submodule <a name="`geo_maps` Submodule" id="@cdk_utils/iam.geo_maps"></a>


## Structs <a name="Structs" id="Structs"></a>

### GeoMapsProviderArnComponents <a name="GeoMapsProviderArnComponents" id="@cdk_utils/iam.geo_maps.GeoMapsProviderArnComponents"></a>

Parsed components of a provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo_maps.GeoMapsProviderArnComponents.Initializer"></a>

```typescript
import { geo_maps } from '@cdk_utils/iam'

const geoMapsProviderArnComponents: geo_maps.GeoMapsProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.geo_maps.GeoMapsProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.geo_maps.GeoMapsProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.geo_maps.GeoMapsProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GeoMapsProviderArnProps <a name="GeoMapsProviderArnProps" id="@cdk_utils/iam.geo_maps.GeoMapsProviderArnProps"></a>

Properties for building a provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo_maps.GeoMapsProviderArnProps.Initializer"></a>

```typescript
import { geo_maps } from '@cdk_utils/iam'

const geoMapsProviderArnProps: geo_maps.GeoMapsProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.geo_maps.GeoMapsProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.geo_maps.GeoMapsProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.geo_maps.GeoMapsProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GeoMapsActions <a name="GeoMapsActions" id="@cdk_utils/iam.geo_maps.GeoMapsActions"></a>

IAM action constants for the geo-maps service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo_maps.GeoMapsActions.Initializer"></a>

```typescript
import { geo_maps } from '@cdk_utils/iam'

new geo_maps.GeoMapsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsActions.property.actionGetStaticMap">actionGetStaticMap</a></code> | <code>string</code> | [Read] geo-maps:GetStaticMap. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsActions.property.actionGetTile">actionGetTile</a></code> | <code>string</code> | [Read] geo-maps:GetTile. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetStaticMap`<sup>Required</sup> <a name="actionGetStaticMap" id="@cdk_utils/iam.geo_maps.GeoMapsActions.property.actionGetStaticMap"></a>

```typescript
public readonly actionGetStaticMap: string;
```

- *Type:* string

[Read] geo-maps:GetStaticMap.

---

##### `actionGetTile`<sup>Required</sup> <a name="actionGetTile" id="@cdk_utils/iam.geo_maps.GeoMapsActions.property.actionGetTile"></a>

```typescript
public readonly actionGetTile: string;
```

- *Type:* string

[Read] geo-maps:GetTile.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.geo_maps.GeoMapsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.geo_maps.GeoMapsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.geo_maps.GeoMapsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.geo_maps.GeoMapsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.geo_maps.GeoMapsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.geo_maps.GeoMapsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### GeoMapsOperations <a name="GeoMapsOperations" id="@cdk_utils/iam.geo_maps.GeoMapsOperations"></a>

API operation to required IAM actions mapping for geo-maps.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo_maps.GeoMapsOperations.Initializer"></a>

```typescript
import { geo_maps } from '@cdk_utils/iam'

new geo_maps.GeoMapsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsOperations.property.opGetGlyphs">opGetGlyphs</a></code> | <code>string[]</code> | IAM actions required for the GetGlyphs API call. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsOperations.property.opGetSprites">opGetSprites</a></code> | <code>string[]</code> | IAM actions required for the GetSprites API call. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsOperations.property.opGetStaticMap">opGetStaticMap</a></code> | <code>string[]</code> | IAM actions required for the GetStaticMap API call. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsOperations.property.opGetStyleDescriptor">opGetStyleDescriptor</a></code> | <code>string[]</code> | IAM actions required for the GetStyleDescriptor API call. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsOperations.property.opGetTile">opGetTile</a></code> | <code>string[]</code> | IAM actions required for the GetTile API call. |

---

##### `opGetGlyphs`<sup>Required</sup> <a name="opGetGlyphs" id="@cdk_utils/iam.geo_maps.GeoMapsOperations.property.opGetGlyphs"></a>

```typescript
public readonly opGetGlyphs: string[];
```

- *Type:* string[]

IAM actions required for the GetGlyphs API call.

---

##### `opGetSprites`<sup>Required</sup> <a name="opGetSprites" id="@cdk_utils/iam.geo_maps.GeoMapsOperations.property.opGetSprites"></a>

```typescript
public readonly opGetSprites: string[];
```

- *Type:* string[]

IAM actions required for the GetSprites API call.

---

##### `opGetStaticMap`<sup>Required</sup> <a name="opGetStaticMap" id="@cdk_utils/iam.geo_maps.GeoMapsOperations.property.opGetStaticMap"></a>

```typescript
public readonly opGetStaticMap: string[];
```

- *Type:* string[]

IAM actions required for the GetStaticMap API call.

---

##### `opGetStyleDescriptor`<sup>Required</sup> <a name="opGetStyleDescriptor" id="@cdk_utils/iam.geo_maps.GeoMapsOperations.property.opGetStyleDescriptor"></a>

```typescript
public readonly opGetStyleDescriptor: string[];
```

- *Type:* string[]

IAM actions required for the GetStyleDescriptor API call.

---

##### `opGetTile`<sup>Required</sup> <a name="opGetTile" id="@cdk_utils/iam.geo_maps.GeoMapsOperations.property.opGetTile"></a>

```typescript
public readonly opGetTile: string[];
```

- *Type:* string[]

IAM actions required for the GetTile API call.

---

### GeoMapsResources <a name="GeoMapsResources" id="@cdk_utils/iam.geo_maps.GeoMapsResources"></a>

ARN builders, validators, and parsers for geo-maps resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo_maps.GeoMapsResources.Initializer"></a>

```typescript
import { geo_maps } from '@cdk_utils/iam'

new geo_maps.GeoMapsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsResources.isValidProviderArn">isValidProviderArn</a></code> | Validates whether a string is a valid ARN for the provider resource. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsResources.parseProviderArn">parseProviderArn</a></code> | Parses a provider ARN into its components. |
| <code><a href="#@cdk_utils/iam.geo_maps.GeoMapsResources.provider">provider</a></code> | Builds an ARN for the provider resource. |

---

##### `isValidProviderArn` <a name="isValidProviderArn" id="@cdk_utils/iam.geo_maps.GeoMapsResources.isValidProviderArn"></a>

```typescript
import { geo_maps } from '@cdk_utils/iam'

geo_maps.GeoMapsResources.isValidProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the provider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo_maps.GeoMapsResources.isValidProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProviderArn` <a name="parseProviderArn" id="@cdk_utils/iam.geo_maps.GeoMapsResources.parseProviderArn"></a>

```typescript
import { geo_maps } from '@cdk_utils/iam'

geo_maps.GeoMapsResources.parseProviderArn(arn: string)
```

Parses a provider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo_maps.GeoMapsResources.parseProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `provider` <a name="provider" id="@cdk_utils/iam.geo_maps.GeoMapsResources.provider"></a>

```typescript
import { geo_maps } from '@cdk_utils/iam'

geo_maps.GeoMapsResources.provider(props: GeoMapsProviderArnProps)
```

Builds an ARN for the provider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.geo_maps.GeoMapsResources.provider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.geo_maps.GeoMapsProviderArnProps">GeoMapsProviderArnProps</a>

---




