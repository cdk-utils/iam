# `geo_places` Submodule <a name="`geo_places` Submodule" id="@cdk_utils/iam.geo_places"></a>


## Structs <a name="Structs" id="Structs"></a>

### GeoPlacesProviderArnComponents <a name="GeoPlacesProviderArnComponents" id="@cdk_utils/iam.geo_places.GeoPlacesProviderArnComponents"></a>

Parsed components of a provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo_places.GeoPlacesProviderArnComponents.Initializer"></a>

```typescript
import { geo_places } from '@cdk_utils/iam'

const geoPlacesProviderArnComponents: geo_places.GeoPlacesProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.geo_places.GeoPlacesProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.geo_places.GeoPlacesProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.geo_places.GeoPlacesProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GeoPlacesProviderArnProps <a name="GeoPlacesProviderArnProps" id="@cdk_utils/iam.geo_places.GeoPlacesProviderArnProps"></a>

Properties for building a provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo_places.GeoPlacesProviderArnProps.Initializer"></a>

```typescript
import { geo_places } from '@cdk_utils/iam'

const geoPlacesProviderArnProps: geo_places.GeoPlacesProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.geo_places.GeoPlacesProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.geo_places.GeoPlacesProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.geo_places.GeoPlacesProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GeoPlacesActions <a name="GeoPlacesActions" id="@cdk_utils/iam.geo_places.GeoPlacesActions"></a>

IAM action constants for the geo-places service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo_places.GeoPlacesActions.Initializer"></a>

```typescript
import { geo_places } from '@cdk_utils/iam'

new geo_places.GeoPlacesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.actionGetPlace">actionGetPlace</a></code> | <code>string</code> | [Read] geo-places:GetPlace. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.Autocomplete">Autocomplete</a></code> | <code>string</code> | [Read] geo-places:Autocomplete. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.Geocode">Geocode</a></code> | <code>string</code> | [Read] geo-places:Geocode. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.ReverseGeocode">ReverseGeocode</a></code> | <code>string</code> | [Read] geo-places:ReverseGeocode. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.SearchNearby">SearchNearby</a></code> | <code>string</code> | [Read] geo-places:SearchNearby. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.SearchText">SearchText</a></code> | <code>string</code> | [Read] geo-places:SearchText. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesActions.property.Suggest">Suggest</a></code> | <code>string</code> | [Read] geo-places:Suggest. |

---

##### `actionGetPlace`<sup>Required</sup> <a name="actionGetPlace" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.actionGetPlace"></a>

```typescript
public readonly actionGetPlace: string;
```

- *Type:* string

[Read] geo-places:GetPlace.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `Autocomplete`<sup>Required</sup> <a name="Autocomplete" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.Autocomplete"></a>

```typescript
public readonly Autocomplete: string;
```

- *Type:* string

[Read] geo-places:Autocomplete.

---

##### `Geocode`<sup>Required</sup> <a name="Geocode" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.Geocode"></a>

```typescript
public readonly Geocode: string;
```

- *Type:* string

[Read] geo-places:Geocode.

---

##### `ReverseGeocode`<sup>Required</sup> <a name="ReverseGeocode" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.ReverseGeocode"></a>

```typescript
public readonly ReverseGeocode: string;
```

- *Type:* string

[Read] geo-places:ReverseGeocode.

---

##### `SearchNearby`<sup>Required</sup> <a name="SearchNearby" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.SearchNearby"></a>

```typescript
public readonly SearchNearby: string;
```

- *Type:* string

[Read] geo-places:SearchNearby.

---

##### `SearchText`<sup>Required</sup> <a name="SearchText" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.SearchText"></a>

```typescript
public readonly SearchText: string;
```

- *Type:* string

[Read] geo-places:SearchText.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `Suggest`<sup>Required</sup> <a name="Suggest" id="@cdk_utils/iam.geo_places.GeoPlacesActions.property.Suggest"></a>

```typescript
public readonly Suggest: string;
```

- *Type:* string

[Read] geo-places:Suggest.

---

### GeoPlacesOperations <a name="GeoPlacesOperations" id="@cdk_utils/iam.geo_places.GeoPlacesOperations"></a>

API operation to required IAM actions mapping for geo-places.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo_places.GeoPlacesOperations.Initializer"></a>

```typescript
import { geo_places } from '@cdk_utils/iam'

new geo_places.GeoPlacesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesOperations.property.Autocomplete">Autocomplete</a></code> | <code>string[]</code> | IAM actions required for the Autocomplete API call. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesOperations.property.Geocode">Geocode</a></code> | <code>string[]</code> | IAM actions required for the Geocode API call. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesOperations.property.opGetPlace">opGetPlace</a></code> | <code>string[]</code> | IAM actions required for the GetPlace API call. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesOperations.property.ReverseGeocode">ReverseGeocode</a></code> | <code>string[]</code> | IAM actions required for the ReverseGeocode API call. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesOperations.property.SearchNearby">SearchNearby</a></code> | <code>string[]</code> | IAM actions required for the SearchNearby API call. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesOperations.property.SearchText">SearchText</a></code> | <code>string[]</code> | IAM actions required for the SearchText API call. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesOperations.property.Suggest">Suggest</a></code> | <code>string[]</code> | IAM actions required for the Suggest API call. |

---

##### `Autocomplete`<sup>Required</sup> <a name="Autocomplete" id="@cdk_utils/iam.geo_places.GeoPlacesOperations.property.Autocomplete"></a>

```typescript
public readonly Autocomplete: string[];
```

- *Type:* string[]

IAM actions required for the Autocomplete API call.

---

##### `Geocode`<sup>Required</sup> <a name="Geocode" id="@cdk_utils/iam.geo_places.GeoPlacesOperations.property.Geocode"></a>

```typescript
public readonly Geocode: string[];
```

- *Type:* string[]

IAM actions required for the Geocode API call.

---

##### `opGetPlace`<sup>Required</sup> <a name="opGetPlace" id="@cdk_utils/iam.geo_places.GeoPlacesOperations.property.opGetPlace"></a>

```typescript
public readonly opGetPlace: string[];
```

- *Type:* string[]

IAM actions required for the GetPlace API call.

---

##### `ReverseGeocode`<sup>Required</sup> <a name="ReverseGeocode" id="@cdk_utils/iam.geo_places.GeoPlacesOperations.property.ReverseGeocode"></a>

```typescript
public readonly ReverseGeocode: string[];
```

- *Type:* string[]

IAM actions required for the ReverseGeocode API call.

---

##### `SearchNearby`<sup>Required</sup> <a name="SearchNearby" id="@cdk_utils/iam.geo_places.GeoPlacesOperations.property.SearchNearby"></a>

```typescript
public readonly SearchNearby: string[];
```

- *Type:* string[]

IAM actions required for the SearchNearby API call.

---

##### `SearchText`<sup>Required</sup> <a name="SearchText" id="@cdk_utils/iam.geo_places.GeoPlacesOperations.property.SearchText"></a>

```typescript
public readonly SearchText: string[];
```

- *Type:* string[]

IAM actions required for the SearchText API call.

---

##### `Suggest`<sup>Required</sup> <a name="Suggest" id="@cdk_utils/iam.geo_places.GeoPlacesOperations.property.Suggest"></a>

```typescript
public readonly Suggest: string[];
```

- *Type:* string[]

IAM actions required for the Suggest API call.

---

### GeoPlacesResources <a name="GeoPlacesResources" id="@cdk_utils/iam.geo_places.GeoPlacesResources"></a>

ARN builders, validators, and parsers for geo-places resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo_places.GeoPlacesResources.Initializer"></a>

```typescript
import { geo_places } from '@cdk_utils/iam'

new geo_places.GeoPlacesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesResources.isValidProviderArn">isValidProviderArn</a></code> | Validates whether a string is a valid ARN for the provider resource. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesResources.parseProviderArn">parseProviderArn</a></code> | Parses a provider ARN into its components. |
| <code><a href="#@cdk_utils/iam.geo_places.GeoPlacesResources.provider">provider</a></code> | Builds an ARN for the provider resource. |

---

##### `isValidProviderArn` <a name="isValidProviderArn" id="@cdk_utils/iam.geo_places.GeoPlacesResources.isValidProviderArn"></a>

```typescript
import { geo_places } from '@cdk_utils/iam'

geo_places.GeoPlacesResources.isValidProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the provider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo_places.GeoPlacesResources.isValidProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProviderArn` <a name="parseProviderArn" id="@cdk_utils/iam.geo_places.GeoPlacesResources.parseProviderArn"></a>

```typescript
import { geo_places } from '@cdk_utils/iam'

geo_places.GeoPlacesResources.parseProviderArn(arn: string)
```

Parses a provider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo_places.GeoPlacesResources.parseProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `provider` <a name="provider" id="@cdk_utils/iam.geo_places.GeoPlacesResources.provider"></a>

```typescript
import { geo_places } from '@cdk_utils/iam'

geo_places.GeoPlacesResources.provider(props: GeoPlacesProviderArnProps)
```

Builds an ARN for the provider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.geo_places.GeoPlacesResources.provider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.geo_places.GeoPlacesProviderArnProps">GeoPlacesProviderArnProps</a>

---




