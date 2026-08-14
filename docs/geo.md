# `geo` Submodule <a name="`geo` Submodule" id="@cdk_utils/iam.geo"></a>


## Structs <a name="Structs" id="Structs"></a>

### GeoAPIKeyArnComponents <a name="GeoAPIKeyArnComponents" id="@cdk_utils/iam.geo.GeoAPIKeyArnComponents"></a>

Parsed components of a api-key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoAPIKeyArnComponents.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoAPIKeyArnComponents: geo.GeoAPIKeyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoAPIKeyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoAPIKeyArnComponents.property.keyName">keyName</a></code> | <code>string</code> | The KeyName component. |
| <code><a href="#@cdk_utils/iam.geo.GeoAPIKeyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoAPIKeyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.geo.GeoAPIKeyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdk_utils/iam.geo.GeoAPIKeyArnComponents.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The KeyName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoAPIKeyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.geo.GeoAPIKeyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GeoAPIKeyArnProps <a name="GeoAPIKeyArnProps" id="@cdk_utils/iam.geo.GeoAPIKeyArnProps"></a>

Properties for building a api-key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoAPIKeyArnProps.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoAPIKeyArnProps: geo.GeoAPIKeyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoAPIKeyArnProps.property.keyName">keyName</a></code> | <code>string</code> | The KeyName component of the ARN. |
| <code><a href="#@cdk_utils/iam.geo.GeoAPIKeyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoAPIKeyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoAPIKeyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdk_utils/iam.geo.GeoAPIKeyArnProps.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The KeyName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.geo.GeoAPIKeyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoAPIKeyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.geo.GeoAPIKeyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GeoGeofenceCollectionArnComponents <a name="GeoGeofenceCollectionArnComponents" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnComponents"></a>

Parsed components of a geofence-collection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnComponents.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoGeofenceCollectionArnComponents: geo.GeoGeofenceCollectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoGeofenceCollectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoGeofenceCollectionArnComponents.property.geofenceCollectionName">geofenceCollectionName</a></code> | <code>string</code> | The GeofenceCollectionName component. |
| <code><a href="#@cdk_utils/iam.geo.GeoGeofenceCollectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoGeofenceCollectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `geofenceCollectionName`<sup>Required</sup> <a name="geofenceCollectionName" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnComponents.property.geofenceCollectionName"></a>

```typescript
public readonly geofenceCollectionName: string;
```

- *Type:* string

The GeofenceCollectionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GeoGeofenceCollectionArnProps <a name="GeoGeofenceCollectionArnProps" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnProps"></a>

Properties for building a geofence-collection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnProps.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoGeofenceCollectionArnProps: geo.GeoGeofenceCollectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoGeofenceCollectionArnProps.property.geofenceCollectionName">geofenceCollectionName</a></code> | <code>string</code> | The GeofenceCollectionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.geo.GeoGeofenceCollectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoGeofenceCollectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoGeofenceCollectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `geofenceCollectionName`<sup>Required</sup> <a name="geofenceCollectionName" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnProps.property.geofenceCollectionName"></a>

```typescript
public readonly geofenceCollectionName: string;
```

- *Type:* string

The GeofenceCollectionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.geo.GeoGeofenceCollectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GeoJobArnComponents <a name="GeoJobArnComponents" id="@cdk_utils/iam.geo.GeoJobArnComponents"></a>

Parsed components of a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoJobArnComponents.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoJobArnComponents: geo.GeoJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.geo.GeoJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.geo.GeoJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.geo.GeoJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.geo.GeoJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GeoJobArnProps <a name="GeoJobArnProps" id="@cdk_utils/iam.geo.GeoJobArnProps"></a>

Properties for building a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoJobArnProps.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoJobArnProps: geo.GeoJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.geo.GeoJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.geo.GeoJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.geo.GeoJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.geo.GeoJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GeoMapArnComponents <a name="GeoMapArnComponents" id="@cdk_utils/iam.geo.GeoMapArnComponents"></a>

Parsed components of a map ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoMapArnComponents.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoMapArnComponents: geo.GeoMapArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoMapArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoMapArnComponents.property.mapName">mapName</a></code> | <code>string</code> | The MapName component. |
| <code><a href="#@cdk_utils/iam.geo.GeoMapArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoMapArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.geo.GeoMapArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `mapName`<sup>Required</sup> <a name="mapName" id="@cdk_utils/iam.geo.GeoMapArnComponents.property.mapName"></a>

```typescript
public readonly mapName: string;
```

- *Type:* string

The MapName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoMapArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.geo.GeoMapArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GeoMapArnProps <a name="GeoMapArnProps" id="@cdk_utils/iam.geo.GeoMapArnProps"></a>

Properties for building a map ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoMapArnProps.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoMapArnProps: geo.GeoMapArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoMapArnProps.property.mapName">mapName</a></code> | <code>string</code> | The MapName component of the ARN. |
| <code><a href="#@cdk_utils/iam.geo.GeoMapArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoMapArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoMapArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `mapName`<sup>Required</sup> <a name="mapName" id="@cdk_utils/iam.geo.GeoMapArnProps.property.mapName"></a>

```typescript
public readonly mapName: string;
```

- *Type:* string

The MapName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.geo.GeoMapArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoMapArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.geo.GeoMapArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GeoPlaceIndexArnComponents <a name="GeoPlaceIndexArnComponents" id="@cdk_utils/iam.geo.GeoPlaceIndexArnComponents"></a>

Parsed components of a place-index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoPlaceIndexArnComponents.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoPlaceIndexArnComponents: geo.GeoPlaceIndexArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoPlaceIndexArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoPlaceIndexArnComponents.property.indexName">indexName</a></code> | <code>string</code> | The IndexName component. |
| <code><a href="#@cdk_utils/iam.geo.GeoPlaceIndexArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoPlaceIndexArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.geo.GeoPlaceIndexArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdk_utils/iam.geo.GeoPlaceIndexArnComponents.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The IndexName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoPlaceIndexArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.geo.GeoPlaceIndexArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GeoPlaceIndexArnProps <a name="GeoPlaceIndexArnProps" id="@cdk_utils/iam.geo.GeoPlaceIndexArnProps"></a>

Properties for building a place-index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoPlaceIndexArnProps.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoPlaceIndexArnProps: geo.GeoPlaceIndexArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoPlaceIndexArnProps.property.indexName">indexName</a></code> | <code>string</code> | The IndexName component of the ARN. |
| <code><a href="#@cdk_utils/iam.geo.GeoPlaceIndexArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoPlaceIndexArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoPlaceIndexArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdk_utils/iam.geo.GeoPlaceIndexArnProps.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The IndexName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.geo.GeoPlaceIndexArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoPlaceIndexArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.geo.GeoPlaceIndexArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GeoRouteCalculatorArnComponents <a name="GeoRouteCalculatorArnComponents" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnComponents"></a>

Parsed components of a route-calculator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnComponents.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoRouteCalculatorArnComponents: geo.GeoRouteCalculatorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoRouteCalculatorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoRouteCalculatorArnComponents.property.calculatorName">calculatorName</a></code> | <code>string</code> | The CalculatorName component. |
| <code><a href="#@cdk_utils/iam.geo.GeoRouteCalculatorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoRouteCalculatorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `calculatorName`<sup>Required</sup> <a name="calculatorName" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnComponents.property.calculatorName"></a>

```typescript
public readonly calculatorName: string;
```

- *Type:* string

The CalculatorName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GeoRouteCalculatorArnProps <a name="GeoRouteCalculatorArnProps" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnProps"></a>

Properties for building a route-calculator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnProps.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoRouteCalculatorArnProps: geo.GeoRouteCalculatorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoRouteCalculatorArnProps.property.calculatorName">calculatorName</a></code> | <code>string</code> | The CalculatorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.geo.GeoRouteCalculatorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoRouteCalculatorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoRouteCalculatorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `calculatorName`<sup>Required</sup> <a name="calculatorName" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnProps.property.calculatorName"></a>

```typescript
public readonly calculatorName: string;
```

- *Type:* string

The CalculatorName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.geo.GeoRouteCalculatorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GeoTrackerArnComponents <a name="GeoTrackerArnComponents" id="@cdk_utils/iam.geo.GeoTrackerArnComponents"></a>

Parsed components of a tracker ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoTrackerArnComponents.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoTrackerArnComponents: geo.GeoTrackerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoTrackerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoTrackerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoTrackerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.geo.GeoTrackerArnComponents.property.trackerName">trackerName</a></code> | <code>string</code> | The TrackerName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.geo.GeoTrackerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoTrackerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.geo.GeoTrackerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `trackerName`<sup>Required</sup> <a name="trackerName" id="@cdk_utils/iam.geo.GeoTrackerArnComponents.property.trackerName"></a>

```typescript
public readonly trackerName: string;
```

- *Type:* string

The TrackerName component.

---

### GeoTrackerArnProps <a name="GeoTrackerArnProps" id="@cdk_utils/iam.geo.GeoTrackerArnProps"></a>

Properties for building a tracker ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.geo.GeoTrackerArnProps.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

const geoTrackerArnProps: geo.GeoTrackerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoTrackerArnProps.property.trackerName">trackerName</a></code> | <code>string</code> | The TrackerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.geo.GeoTrackerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.geo.GeoTrackerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.geo.GeoTrackerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `trackerName`<sup>Required</sup> <a name="trackerName" id="@cdk_utils/iam.geo.GeoTrackerArnProps.property.trackerName"></a>

```typescript
public readonly trackerName: string;
```

- *Type:* string

The TrackerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.geo.GeoTrackerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.geo.GeoTrackerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.geo.GeoTrackerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GeoActions <a name="GeoActions" id="@cdk_utils/iam.geo.GeoActions"></a>

IAM action constants for the geo service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo.GeoActions.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

new geo.GeoActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.actionGetDevicePosition">actionGetDevicePosition</a></code> | <code>string</code> | [Read] geo:GetDevicePosition. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.actionGetDevicePositionHistory">actionGetDevicePositionHistory</a></code> | <code>string</code> | [Read] geo:GetDevicePositionHistory. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.actionGetGeofence">actionGetGeofence</a></code> | <code>string</code> | [Read] geo:GetGeofence. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.actionGetJob">actionGetJob</a></code> | <code>string</code> | [Read] geo:GetJob. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.actionGetMapGlyphs">actionGetMapGlyphs</a></code> | <code>string</code> | [Read] geo:GetMapGlyphs. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.actionGetMapSprites">actionGetMapSprites</a></code> | <code>string</code> | [Read] geo:GetMapSprites. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.actionGetMapStyleDescriptor">actionGetMapStyleDescriptor</a></code> | <code>string</code> | [Read] geo:GetMapStyleDescriptor. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.actionGetMapTile">actionGetMapTile</a></code> | <code>string</code> | [Read] geo:GetMapTile. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.actionGetPlace">actionGetPlace</a></code> | <code>string</code> | [Read] geo:GetPlace. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.AssociateTrackerConsumer">AssociateTrackerConsumer</a></code> | <code>string</code> | [Write] geo:AssociateTrackerConsumer. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.BatchDeleteDevicePositionHistory">BatchDeleteDevicePositionHistory</a></code> | <code>string</code> | [Write] geo:BatchDeleteDevicePositionHistory. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.BatchDeleteGeofence">BatchDeleteGeofence</a></code> | <code>string</code> | [Write] geo:BatchDeleteGeofence. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.BatchEvaluateGeofences">BatchEvaluateGeofences</a></code> | <code>string</code> | [Write] geo:BatchEvaluateGeofences. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.BatchGetDevicePosition">BatchGetDevicePosition</a></code> | <code>string</code> | [Read] geo:BatchGetDevicePosition. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.BatchPutGeofence">BatchPutGeofence</a></code> | <code>string</code> | [Write] geo:BatchPutGeofence. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.BatchUpdateDevicePosition">BatchUpdateDevicePosition</a></code> | <code>string</code> | [Write] geo:BatchUpdateDevicePosition. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.CalculateRoute">CalculateRoute</a></code> | <code>string</code> | [Read] geo:CalculateRoute. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.CalculateRouteMatrix">CalculateRouteMatrix</a></code> | <code>string</code> | [Read] geo:CalculateRouteMatrix. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.CancelJob">CancelJob</a></code> | <code>string</code> | [Write] geo:CancelJob. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.CreateGeofenceCollection">CreateGeofenceCollection</a></code> | <code>string</code> | [Write] geo:CreateGeofenceCollection. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.CreateKey">CreateKey</a></code> | <code>string</code> | [Write] geo:CreateKey. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.CreateMap">CreateMap</a></code> | <code>string</code> | [Write] geo:CreateMap. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.CreatePlaceIndex">CreatePlaceIndex</a></code> | <code>string</code> | [Write] geo:CreatePlaceIndex. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.CreateRouteCalculator">CreateRouteCalculator</a></code> | <code>string</code> | [Write] geo:CreateRouteCalculator. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.CreateTracker">CreateTracker</a></code> | <code>string</code> | [Write] geo:CreateTracker. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DeleteGeofenceCollection">DeleteGeofenceCollection</a></code> | <code>string</code> | [Write] geo:DeleteGeofenceCollection. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DeleteKey">DeleteKey</a></code> | <code>string</code> | [Write] geo:DeleteKey. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DeleteMap">DeleteMap</a></code> | <code>string</code> | [Write] geo:DeleteMap. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DeletePlaceIndex">DeletePlaceIndex</a></code> | <code>string</code> | [Write] geo:DeletePlaceIndex. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DeleteRouteCalculator">DeleteRouteCalculator</a></code> | <code>string</code> | [Write] geo:DeleteRouteCalculator. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DeleteTracker">DeleteTracker</a></code> | <code>string</code> | [Write] geo:DeleteTracker. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DescribeGeofenceCollection">DescribeGeofenceCollection</a></code> | <code>string</code> | [Read] geo:DescribeGeofenceCollection. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DescribeKey">DescribeKey</a></code> | <code>string</code> | [Read] geo:DescribeKey. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DescribeMap">DescribeMap</a></code> | <code>string</code> | [Read] geo:DescribeMap. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DescribePlaceIndex">DescribePlaceIndex</a></code> | <code>string</code> | [Read] geo:DescribePlaceIndex. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DescribeRouteCalculator">DescribeRouteCalculator</a></code> | <code>string</code> | [Read] geo:DescribeRouteCalculator. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DescribeTracker">DescribeTracker</a></code> | <code>string</code> | [Read] geo:DescribeTracker. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.DisassociateTrackerConsumer">DisassociateTrackerConsumer</a></code> | <code>string</code> | [Write] geo:DisassociateTrackerConsumer. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ForecastGeofenceEvents">ForecastGeofenceEvents</a></code> | <code>string</code> | [Read] geo:ForecastGeofenceEvents. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ListDevicePositions">ListDevicePositions</a></code> | <code>string</code> | [Read] geo:ListDevicePositions. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ListGeofenceCollections">ListGeofenceCollections</a></code> | <code>string</code> | [List] geo:ListGeofenceCollections. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ListGeofences">ListGeofences</a></code> | <code>string</code> | [Read] geo:ListGeofences. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] geo:ListJobs. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ListKeys">ListKeys</a></code> | <code>string</code> | [List] geo:ListKeys. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ListMaps">ListMaps</a></code> | <code>string</code> | [List] geo:ListMaps. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ListPlaceIndexes">ListPlaceIndexes</a></code> | <code>string</code> | [List] geo:ListPlaceIndexes. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ListRouteCalculators">ListRouteCalculators</a></code> | <code>string</code> | [List] geo:ListRouteCalculators. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] geo:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ListTrackerConsumers">ListTrackerConsumers</a></code> | <code>string</code> | [Read] geo:ListTrackerConsumers. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.ListTrackers">ListTrackers</a></code> | <code>string</code> | [List] geo:ListTrackers. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.PutGeofence">PutGeofence</a></code> | <code>string</code> | [Write] geo:PutGeofence. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.SearchPlaceIndexForPosition">SearchPlaceIndexForPosition</a></code> | <code>string</code> | [Read] geo:SearchPlaceIndexForPosition. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.SearchPlaceIndexForSuggestions">SearchPlaceIndexForSuggestions</a></code> | <code>string</code> | [Read] geo:SearchPlaceIndexForSuggestions. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.SearchPlaceIndexForText">SearchPlaceIndexForText</a></code> | <code>string</code> | [Read] geo:SearchPlaceIndexForText. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.StartJob">StartJob</a></code> | <code>string</code> | [Write] geo:StartJob. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] geo:TagResource. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] geo:UntagResource. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.UpdateGeofenceCollection">UpdateGeofenceCollection</a></code> | <code>string</code> | [Write] geo:UpdateGeofenceCollection. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.UpdateKey">UpdateKey</a></code> | <code>string</code> | [Write] geo:UpdateKey. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.UpdateMap">UpdateMap</a></code> | <code>string</code> | [Write] geo:UpdateMap. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.UpdatePlaceIndex">UpdatePlaceIndex</a></code> | <code>string</code> | [Write] geo:UpdatePlaceIndex. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.UpdateRouteCalculator">UpdateRouteCalculator</a></code> | <code>string</code> | [Write] geo:UpdateRouteCalculator. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.UpdateTracker">UpdateTracker</a></code> | <code>string</code> | [Write] geo:UpdateTracker. |
| <code><a href="#@cdk_utils/iam.geo.GeoActions.property.VerifyDevicePosition">VerifyDevicePosition</a></code> | <code>string</code> | [Read] geo:VerifyDevicePosition. |

---

##### `actionGetDevicePosition`<sup>Required</sup> <a name="actionGetDevicePosition" id="@cdk_utils/iam.geo.GeoActions.property.actionGetDevicePosition"></a>

```typescript
public readonly actionGetDevicePosition: string;
```

- *Type:* string

[Read] geo:GetDevicePosition.

---

##### `actionGetDevicePositionHistory`<sup>Required</sup> <a name="actionGetDevicePositionHistory" id="@cdk_utils/iam.geo.GeoActions.property.actionGetDevicePositionHistory"></a>

```typescript
public readonly actionGetDevicePositionHistory: string;
```

- *Type:* string

[Read] geo:GetDevicePositionHistory.

---

##### `actionGetGeofence`<sup>Required</sup> <a name="actionGetGeofence" id="@cdk_utils/iam.geo.GeoActions.property.actionGetGeofence"></a>

```typescript
public readonly actionGetGeofence: string;
```

- *Type:* string

[Read] geo:GetGeofence.

---

##### `actionGetJob`<sup>Required</sup> <a name="actionGetJob" id="@cdk_utils/iam.geo.GeoActions.property.actionGetJob"></a>

```typescript
public readonly actionGetJob: string;
```

- *Type:* string

[Read] geo:GetJob.

---

##### `actionGetMapGlyphs`<sup>Required</sup> <a name="actionGetMapGlyphs" id="@cdk_utils/iam.geo.GeoActions.property.actionGetMapGlyphs"></a>

```typescript
public readonly actionGetMapGlyphs: string;
```

- *Type:* string

[Read] geo:GetMapGlyphs.

---

##### `actionGetMapSprites`<sup>Required</sup> <a name="actionGetMapSprites" id="@cdk_utils/iam.geo.GeoActions.property.actionGetMapSprites"></a>

```typescript
public readonly actionGetMapSprites: string;
```

- *Type:* string

[Read] geo:GetMapSprites.

---

##### `actionGetMapStyleDescriptor`<sup>Required</sup> <a name="actionGetMapStyleDescriptor" id="@cdk_utils/iam.geo.GeoActions.property.actionGetMapStyleDescriptor"></a>

```typescript
public readonly actionGetMapStyleDescriptor: string;
```

- *Type:* string

[Read] geo:GetMapStyleDescriptor.

---

##### `actionGetMapTile`<sup>Required</sup> <a name="actionGetMapTile" id="@cdk_utils/iam.geo.GeoActions.property.actionGetMapTile"></a>

```typescript
public readonly actionGetMapTile: string;
```

- *Type:* string

[Read] geo:GetMapTile.

---

##### `actionGetPlace`<sup>Required</sup> <a name="actionGetPlace" id="@cdk_utils/iam.geo.GeoActions.property.actionGetPlace"></a>

```typescript
public readonly actionGetPlace: string;
```

- *Type:* string

[Read] geo:GetPlace.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.geo.GeoActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.geo.GeoActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.geo.GeoActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.geo.GeoActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.geo.GeoActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateTrackerConsumer`<sup>Required</sup> <a name="AssociateTrackerConsumer" id="@cdk_utils/iam.geo.GeoActions.property.AssociateTrackerConsumer"></a>

```typescript
public readonly AssociateTrackerConsumer: string;
```

- *Type:* string

[Write] geo:AssociateTrackerConsumer.

---

##### `BatchDeleteDevicePositionHistory`<sup>Required</sup> <a name="BatchDeleteDevicePositionHistory" id="@cdk_utils/iam.geo.GeoActions.property.BatchDeleteDevicePositionHistory"></a>

```typescript
public readonly BatchDeleteDevicePositionHistory: string;
```

- *Type:* string

[Write] geo:BatchDeleteDevicePositionHistory.

---

##### `BatchDeleteGeofence`<sup>Required</sup> <a name="BatchDeleteGeofence" id="@cdk_utils/iam.geo.GeoActions.property.BatchDeleteGeofence"></a>

```typescript
public readonly BatchDeleteGeofence: string;
```

- *Type:* string

[Write] geo:BatchDeleteGeofence.

---

##### `BatchEvaluateGeofences`<sup>Required</sup> <a name="BatchEvaluateGeofences" id="@cdk_utils/iam.geo.GeoActions.property.BatchEvaluateGeofences"></a>

```typescript
public readonly BatchEvaluateGeofences: string;
```

- *Type:* string

[Write] geo:BatchEvaluateGeofences.

---

##### `BatchGetDevicePosition`<sup>Required</sup> <a name="BatchGetDevicePosition" id="@cdk_utils/iam.geo.GeoActions.property.BatchGetDevicePosition"></a>

```typescript
public readonly BatchGetDevicePosition: string;
```

- *Type:* string

[Read] geo:BatchGetDevicePosition.

---

##### `BatchPutGeofence`<sup>Required</sup> <a name="BatchPutGeofence" id="@cdk_utils/iam.geo.GeoActions.property.BatchPutGeofence"></a>

```typescript
public readonly BatchPutGeofence: string;
```

- *Type:* string

[Write] geo:BatchPutGeofence.

---

##### `BatchUpdateDevicePosition`<sup>Required</sup> <a name="BatchUpdateDevicePosition" id="@cdk_utils/iam.geo.GeoActions.property.BatchUpdateDevicePosition"></a>

```typescript
public readonly BatchUpdateDevicePosition: string;
```

- *Type:* string

[Write] geo:BatchUpdateDevicePosition.

---

##### `CalculateRoute`<sup>Required</sup> <a name="CalculateRoute" id="@cdk_utils/iam.geo.GeoActions.property.CalculateRoute"></a>

```typescript
public readonly CalculateRoute: string;
```

- *Type:* string

[Read] geo:CalculateRoute.

---

##### `CalculateRouteMatrix`<sup>Required</sup> <a name="CalculateRouteMatrix" id="@cdk_utils/iam.geo.GeoActions.property.CalculateRouteMatrix"></a>

```typescript
public readonly CalculateRouteMatrix: string;
```

- *Type:* string

[Read] geo:CalculateRouteMatrix.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.geo.GeoActions.property.CancelJob"></a>

```typescript
public readonly CancelJob: string;
```

- *Type:* string

[Write] geo:CancelJob.

---

##### `CreateGeofenceCollection`<sup>Required</sup> <a name="CreateGeofenceCollection" id="@cdk_utils/iam.geo.GeoActions.property.CreateGeofenceCollection"></a>

```typescript
public readonly CreateGeofenceCollection: string;
```

- *Type:* string

[Write] geo:CreateGeofenceCollection.

---

##### `CreateKey`<sup>Required</sup> <a name="CreateKey" id="@cdk_utils/iam.geo.GeoActions.property.CreateKey"></a>

```typescript
public readonly CreateKey: string;
```

- *Type:* string

[Write] geo:CreateKey.

---

##### `CreateMap`<sup>Required</sup> <a name="CreateMap" id="@cdk_utils/iam.geo.GeoActions.property.CreateMap"></a>

```typescript
public readonly CreateMap: string;
```

- *Type:* string

[Write] geo:CreateMap.

---

##### `CreatePlaceIndex`<sup>Required</sup> <a name="CreatePlaceIndex" id="@cdk_utils/iam.geo.GeoActions.property.CreatePlaceIndex"></a>

```typescript
public readonly CreatePlaceIndex: string;
```

- *Type:* string

[Write] geo:CreatePlaceIndex.

---

##### `CreateRouteCalculator`<sup>Required</sup> <a name="CreateRouteCalculator" id="@cdk_utils/iam.geo.GeoActions.property.CreateRouteCalculator"></a>

```typescript
public readonly CreateRouteCalculator: string;
```

- *Type:* string

[Write] geo:CreateRouteCalculator.

---

##### `CreateTracker`<sup>Required</sup> <a name="CreateTracker" id="@cdk_utils/iam.geo.GeoActions.property.CreateTracker"></a>

```typescript
public readonly CreateTracker: string;
```

- *Type:* string

[Write] geo:CreateTracker.

---

##### `DeleteGeofenceCollection`<sup>Required</sup> <a name="DeleteGeofenceCollection" id="@cdk_utils/iam.geo.GeoActions.property.DeleteGeofenceCollection"></a>

```typescript
public readonly DeleteGeofenceCollection: string;
```

- *Type:* string

[Write] geo:DeleteGeofenceCollection.

---

##### `DeleteKey`<sup>Required</sup> <a name="DeleteKey" id="@cdk_utils/iam.geo.GeoActions.property.DeleteKey"></a>

```typescript
public readonly DeleteKey: string;
```

- *Type:* string

[Write] geo:DeleteKey.

---

##### `DeleteMap`<sup>Required</sup> <a name="DeleteMap" id="@cdk_utils/iam.geo.GeoActions.property.DeleteMap"></a>

```typescript
public readonly DeleteMap: string;
```

- *Type:* string

[Write] geo:DeleteMap.

---

##### `DeletePlaceIndex`<sup>Required</sup> <a name="DeletePlaceIndex" id="@cdk_utils/iam.geo.GeoActions.property.DeletePlaceIndex"></a>

```typescript
public readonly DeletePlaceIndex: string;
```

- *Type:* string

[Write] geo:DeletePlaceIndex.

---

##### `DeleteRouteCalculator`<sup>Required</sup> <a name="DeleteRouteCalculator" id="@cdk_utils/iam.geo.GeoActions.property.DeleteRouteCalculator"></a>

```typescript
public readonly DeleteRouteCalculator: string;
```

- *Type:* string

[Write] geo:DeleteRouteCalculator.

---

##### `DeleteTracker`<sup>Required</sup> <a name="DeleteTracker" id="@cdk_utils/iam.geo.GeoActions.property.DeleteTracker"></a>

```typescript
public readonly DeleteTracker: string;
```

- *Type:* string

[Write] geo:DeleteTracker.

---

##### `DescribeGeofenceCollection`<sup>Required</sup> <a name="DescribeGeofenceCollection" id="@cdk_utils/iam.geo.GeoActions.property.DescribeGeofenceCollection"></a>

```typescript
public readonly DescribeGeofenceCollection: string;
```

- *Type:* string

[Read] geo:DescribeGeofenceCollection.

---

##### `DescribeKey`<sup>Required</sup> <a name="DescribeKey" id="@cdk_utils/iam.geo.GeoActions.property.DescribeKey"></a>

```typescript
public readonly DescribeKey: string;
```

- *Type:* string

[Read] geo:DescribeKey.

---

##### `DescribeMap`<sup>Required</sup> <a name="DescribeMap" id="@cdk_utils/iam.geo.GeoActions.property.DescribeMap"></a>

```typescript
public readonly DescribeMap: string;
```

- *Type:* string

[Read] geo:DescribeMap.

---

##### `DescribePlaceIndex`<sup>Required</sup> <a name="DescribePlaceIndex" id="@cdk_utils/iam.geo.GeoActions.property.DescribePlaceIndex"></a>

```typescript
public readonly DescribePlaceIndex: string;
```

- *Type:* string

[Read] geo:DescribePlaceIndex.

---

##### `DescribeRouteCalculator`<sup>Required</sup> <a name="DescribeRouteCalculator" id="@cdk_utils/iam.geo.GeoActions.property.DescribeRouteCalculator"></a>

```typescript
public readonly DescribeRouteCalculator: string;
```

- *Type:* string

[Read] geo:DescribeRouteCalculator.

---

##### `DescribeTracker`<sup>Required</sup> <a name="DescribeTracker" id="@cdk_utils/iam.geo.GeoActions.property.DescribeTracker"></a>

```typescript
public readonly DescribeTracker: string;
```

- *Type:* string

[Read] geo:DescribeTracker.

---

##### `DisassociateTrackerConsumer`<sup>Required</sup> <a name="DisassociateTrackerConsumer" id="@cdk_utils/iam.geo.GeoActions.property.DisassociateTrackerConsumer"></a>

```typescript
public readonly DisassociateTrackerConsumer: string;
```

- *Type:* string

[Write] geo:DisassociateTrackerConsumer.

---

##### `ForecastGeofenceEvents`<sup>Required</sup> <a name="ForecastGeofenceEvents" id="@cdk_utils/iam.geo.GeoActions.property.ForecastGeofenceEvents"></a>

```typescript
public readonly ForecastGeofenceEvents: string;
```

- *Type:* string

[Read] geo:ForecastGeofenceEvents.

---

##### `ListDevicePositions`<sup>Required</sup> <a name="ListDevicePositions" id="@cdk_utils/iam.geo.GeoActions.property.ListDevicePositions"></a>

```typescript
public readonly ListDevicePositions: string;
```

- *Type:* string

[Read] geo:ListDevicePositions.

---

##### `ListGeofenceCollections`<sup>Required</sup> <a name="ListGeofenceCollections" id="@cdk_utils/iam.geo.GeoActions.property.ListGeofenceCollections"></a>

```typescript
public readonly ListGeofenceCollections: string;
```

- *Type:* string

[List] geo:ListGeofenceCollections.

---

##### `ListGeofences`<sup>Required</sup> <a name="ListGeofences" id="@cdk_utils/iam.geo.GeoActions.property.ListGeofences"></a>

```typescript
public readonly ListGeofences: string;
```

- *Type:* string

[Read] geo:ListGeofences.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.geo.GeoActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] geo:ListJobs.

---

##### `ListKeys`<sup>Required</sup> <a name="ListKeys" id="@cdk_utils/iam.geo.GeoActions.property.ListKeys"></a>

```typescript
public readonly ListKeys: string;
```

- *Type:* string

[List] geo:ListKeys.

---

##### `ListMaps`<sup>Required</sup> <a name="ListMaps" id="@cdk_utils/iam.geo.GeoActions.property.ListMaps"></a>

```typescript
public readonly ListMaps: string;
```

- *Type:* string

[List] geo:ListMaps.

---

##### `ListPlaceIndexes`<sup>Required</sup> <a name="ListPlaceIndexes" id="@cdk_utils/iam.geo.GeoActions.property.ListPlaceIndexes"></a>

```typescript
public readonly ListPlaceIndexes: string;
```

- *Type:* string

[List] geo:ListPlaceIndexes.

---

##### `ListRouteCalculators`<sup>Required</sup> <a name="ListRouteCalculators" id="@cdk_utils/iam.geo.GeoActions.property.ListRouteCalculators"></a>

```typescript
public readonly ListRouteCalculators: string;
```

- *Type:* string

[List] geo:ListRouteCalculators.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.geo.GeoActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] geo:ListTagsForResource.

---

##### `ListTrackerConsumers`<sup>Required</sup> <a name="ListTrackerConsumers" id="@cdk_utils/iam.geo.GeoActions.property.ListTrackerConsumers"></a>

```typescript
public readonly ListTrackerConsumers: string;
```

- *Type:* string

[Read] geo:ListTrackerConsumers.

---

##### `ListTrackers`<sup>Required</sup> <a name="ListTrackers" id="@cdk_utils/iam.geo.GeoActions.property.ListTrackers"></a>

```typescript
public readonly ListTrackers: string;
```

- *Type:* string

[List] geo:ListTrackers.

---

##### `PutGeofence`<sup>Required</sup> <a name="PutGeofence" id="@cdk_utils/iam.geo.GeoActions.property.PutGeofence"></a>

```typescript
public readonly PutGeofence: string;
```

- *Type:* string

[Write] geo:PutGeofence.

---

##### `SearchPlaceIndexForPosition`<sup>Required</sup> <a name="SearchPlaceIndexForPosition" id="@cdk_utils/iam.geo.GeoActions.property.SearchPlaceIndexForPosition"></a>

```typescript
public readonly SearchPlaceIndexForPosition: string;
```

- *Type:* string

[Read] geo:SearchPlaceIndexForPosition.

---

##### `SearchPlaceIndexForSuggestions`<sup>Required</sup> <a name="SearchPlaceIndexForSuggestions" id="@cdk_utils/iam.geo.GeoActions.property.SearchPlaceIndexForSuggestions"></a>

```typescript
public readonly SearchPlaceIndexForSuggestions: string;
```

- *Type:* string

[Read] geo:SearchPlaceIndexForSuggestions.

---

##### `SearchPlaceIndexForText`<sup>Required</sup> <a name="SearchPlaceIndexForText" id="@cdk_utils/iam.geo.GeoActions.property.SearchPlaceIndexForText"></a>

```typescript
public readonly SearchPlaceIndexForText: string;
```

- *Type:* string

[Read] geo:SearchPlaceIndexForText.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.geo.GeoActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartJob`<sup>Required</sup> <a name="StartJob" id="@cdk_utils/iam.geo.GeoActions.property.StartJob"></a>

```typescript
public readonly StartJob: string;
```

- *Type:* string

[Write] geo:StartJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.geo.GeoActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] geo:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.geo.GeoActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] geo:UntagResource.

---

##### `UpdateGeofenceCollection`<sup>Required</sup> <a name="UpdateGeofenceCollection" id="@cdk_utils/iam.geo.GeoActions.property.UpdateGeofenceCollection"></a>

```typescript
public readonly UpdateGeofenceCollection: string;
```

- *Type:* string

[Write] geo:UpdateGeofenceCollection.

---

##### `UpdateKey`<sup>Required</sup> <a name="UpdateKey" id="@cdk_utils/iam.geo.GeoActions.property.UpdateKey"></a>

```typescript
public readonly UpdateKey: string;
```

- *Type:* string

[Write] geo:UpdateKey.

---

##### `UpdateMap`<sup>Required</sup> <a name="UpdateMap" id="@cdk_utils/iam.geo.GeoActions.property.UpdateMap"></a>

```typescript
public readonly UpdateMap: string;
```

- *Type:* string

[Write] geo:UpdateMap.

---

##### `UpdatePlaceIndex`<sup>Required</sup> <a name="UpdatePlaceIndex" id="@cdk_utils/iam.geo.GeoActions.property.UpdatePlaceIndex"></a>

```typescript
public readonly UpdatePlaceIndex: string;
```

- *Type:* string

[Write] geo:UpdatePlaceIndex.

---

##### `UpdateRouteCalculator`<sup>Required</sup> <a name="UpdateRouteCalculator" id="@cdk_utils/iam.geo.GeoActions.property.UpdateRouteCalculator"></a>

```typescript
public readonly UpdateRouteCalculator: string;
```

- *Type:* string

[Write] geo:UpdateRouteCalculator.

---

##### `UpdateTracker`<sup>Required</sup> <a name="UpdateTracker" id="@cdk_utils/iam.geo.GeoActions.property.UpdateTracker"></a>

```typescript
public readonly UpdateTracker: string;
```

- *Type:* string

[Write] geo:UpdateTracker.

---

##### `VerifyDevicePosition`<sup>Required</sup> <a name="VerifyDevicePosition" id="@cdk_utils/iam.geo.GeoActions.property.VerifyDevicePosition"></a>

```typescript
public readonly VerifyDevicePosition: string;
```

- *Type:* string

[Read] geo:VerifyDevicePosition.

---

### GeoConditions <a name="GeoConditions" id="@cdk_utils/iam.geo.GeoConditions"></a>

Condition key constants and builders for geo.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo.GeoConditions.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

new geo.GeoConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.deviceIds">deviceIds</a></code> | Generates a condition block for `geo:DeviceIds`. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.geofenceIds">geofenceIds</a></code> | Generates a condition block for `geo:GeofenceIds`. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `deviceIds` <a name="deviceIds" id="@cdk_utils/iam.geo.GeoConditions.deviceIds"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoConditions.deviceIds(values: string[])
```

Generates a condition block for `geo:DeviceIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.geo.GeoConditions.deviceIds.parameter.values"></a>

- *Type:* string[]

---

##### `geofenceIds` <a name="geofenceIds" id="@cdk_utils/iam.geo.GeoConditions.geofenceIds"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoConditions.geofenceIds(values: string[])
```

Generates a condition block for `geo:GeofenceIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.geo.GeoConditions.geofenceIds.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.geo.GeoConditions.requestTag"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.geo.GeoConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.geo.GeoConditions.resourceTag"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.geo.GeoConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.geo.GeoConditions.tagKeys"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.geo.GeoConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.actionGetDevicePositionConditionKeys">actionGetDevicePositionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDevicePosition action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.actionGetDevicePositionHistoryConditionKeys">actionGetDevicePositionHistoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDevicePositionHistory action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.actionGetGeofenceConditionKeys">actionGetGeofenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetGeofence action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.BatchDeleteDevicePositionHistoryConditionKeys">BatchDeleteDevicePositionHistoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDeleteDevicePositionHistory action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.BatchDeleteGeofenceConditionKeys">BatchDeleteGeofenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDeleteGeofence action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.BatchGetDevicePositionConditionKeys">BatchGetDevicePositionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchGetDevicePosition action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.BatchPutGeofenceConditionKeys">BatchPutGeofenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchPutGeofence action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.BatchUpdateDevicePositionConditionKeys">BatchUpdateDevicePositionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchUpdateDevicePosition action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.CreateGeofenceCollectionConditionKeys">CreateGeofenceCollectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGeofenceCollection action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.CreateKeyConditionKeys">CreateKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKey action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.CreateMapConditionKeys">CreateMapConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMap action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.CreatePlaceIndexConditionKeys">CreatePlaceIndexConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePlaceIndex action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.CreateRouteCalculatorConditionKeys">CreateRouteCalculatorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRouteCalculator action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.CreateTrackerConditionKeys">CreateTrackerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTracker action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.DEVICE_IDS">DEVICE_IDS</a></code> | <code>string</code> | Condition key: geo:DeviceIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.GEOFENCE_IDS">GEOFENCE_IDS</a></code> | <code>string</code> | Condition key: geo:GeofenceIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.PutGeofenceConditionKeys">PutGeofenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutGeofence action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.StartJobConditionKeys">StartJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartJob action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.geo.GeoConditions.property.VerifyDevicePositionConditionKeys">VerifyDevicePositionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the VerifyDevicePosition action. |

---

##### `actionGetDevicePositionConditionKeys`<sup>Required</sup> <a name="actionGetDevicePositionConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.actionGetDevicePositionConditionKeys"></a>

```typescript
public readonly actionGetDevicePositionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDevicePosition action.

---

##### `actionGetDevicePositionHistoryConditionKeys`<sup>Required</sup> <a name="actionGetDevicePositionHistoryConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.actionGetDevicePositionHistoryConditionKeys"></a>

```typescript
public readonly actionGetDevicePositionHistoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDevicePositionHistory action.

---

##### `actionGetGeofenceConditionKeys`<sup>Required</sup> <a name="actionGetGeofenceConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.actionGetGeofenceConditionKeys"></a>

```typescript
public readonly actionGetGeofenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetGeofence action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.geo.GeoConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.geo.GeoConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.geo.GeoConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchDeleteDevicePositionHistoryConditionKeys`<sup>Required</sup> <a name="BatchDeleteDevicePositionHistoryConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.BatchDeleteDevicePositionHistoryConditionKeys"></a>

```typescript
public readonly BatchDeleteDevicePositionHistoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDeleteDevicePositionHistory action.

---

##### `BatchDeleteGeofenceConditionKeys`<sup>Required</sup> <a name="BatchDeleteGeofenceConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.BatchDeleteGeofenceConditionKeys"></a>

```typescript
public readonly BatchDeleteGeofenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDeleteGeofence action.

---

##### `BatchGetDevicePositionConditionKeys`<sup>Required</sup> <a name="BatchGetDevicePositionConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.BatchGetDevicePositionConditionKeys"></a>

```typescript
public readonly BatchGetDevicePositionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchGetDevicePosition action.

---

##### `BatchPutGeofenceConditionKeys`<sup>Required</sup> <a name="BatchPutGeofenceConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.BatchPutGeofenceConditionKeys"></a>

```typescript
public readonly BatchPutGeofenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchPutGeofence action.

---

##### `BatchUpdateDevicePositionConditionKeys`<sup>Required</sup> <a name="BatchUpdateDevicePositionConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.BatchUpdateDevicePositionConditionKeys"></a>

```typescript
public readonly BatchUpdateDevicePositionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchUpdateDevicePosition action.

---

##### `CreateGeofenceCollectionConditionKeys`<sup>Required</sup> <a name="CreateGeofenceCollectionConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.CreateGeofenceCollectionConditionKeys"></a>

```typescript
public readonly CreateGeofenceCollectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGeofenceCollection action.

---

##### `CreateKeyConditionKeys`<sup>Required</sup> <a name="CreateKeyConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.CreateKeyConditionKeys"></a>

```typescript
public readonly CreateKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKey action.

---

##### `CreateMapConditionKeys`<sup>Required</sup> <a name="CreateMapConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.CreateMapConditionKeys"></a>

```typescript
public readonly CreateMapConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMap action.

---

##### `CreatePlaceIndexConditionKeys`<sup>Required</sup> <a name="CreatePlaceIndexConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.CreatePlaceIndexConditionKeys"></a>

```typescript
public readonly CreatePlaceIndexConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePlaceIndex action.

---

##### `CreateRouteCalculatorConditionKeys`<sup>Required</sup> <a name="CreateRouteCalculatorConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.CreateRouteCalculatorConditionKeys"></a>

```typescript
public readonly CreateRouteCalculatorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRouteCalculator action.

---

##### `CreateTrackerConditionKeys`<sup>Required</sup> <a name="CreateTrackerConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.CreateTrackerConditionKeys"></a>

```typescript
public readonly CreateTrackerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTracker action.

---

##### `DEVICE_IDS`<sup>Required</sup> <a name="DEVICE_IDS" id="@cdk_utils/iam.geo.GeoConditions.property.DEVICE_IDS"></a>

```typescript
public readonly DEVICE_IDS: string;
```

- *Type:* string

Condition key: geo:DeviceIds (ArrayOfString).

---

##### `GEOFENCE_IDS`<sup>Required</sup> <a name="GEOFENCE_IDS" id="@cdk_utils/iam.geo.GeoConditions.property.GEOFENCE_IDS"></a>

```typescript
public readonly GEOFENCE_IDS: string;
```

- *Type:* string

Condition key: geo:GeofenceIds (ArrayOfString).

---

##### `PutGeofenceConditionKeys`<sup>Required</sup> <a name="PutGeofenceConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.PutGeofenceConditionKeys"></a>

```typescript
public readonly PutGeofenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutGeofence action.

---

##### `StartJobConditionKeys`<sup>Required</sup> <a name="StartJobConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.StartJobConditionKeys"></a>

```typescript
public readonly StartJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartJob action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `VerifyDevicePositionConditionKeys`<sup>Required</sup> <a name="VerifyDevicePositionConditionKeys" id="@cdk_utils/iam.geo.GeoConditions.property.VerifyDevicePositionConditionKeys"></a>

```typescript
public readonly VerifyDevicePositionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the VerifyDevicePosition action.

---

### GeoOperations <a name="GeoOperations" id="@cdk_utils/iam.geo.GeoOperations"></a>

API operation to required IAM actions mapping for geo.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo.GeoOperations.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

new geo.GeoOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.AssociateTrackerConsumer">AssociateTrackerConsumer</a></code> | <code>string[]</code> | IAM actions required for the AssociateTrackerConsumer API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.BatchDeleteDevicePositionHistory">BatchDeleteDevicePositionHistory</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteDevicePositionHistory API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.BatchDeleteGeofence">BatchDeleteGeofence</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteGeofence API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.BatchEvaluateGeofences">BatchEvaluateGeofences</a></code> | <code>string[]</code> | IAM actions required for the BatchEvaluateGeofences API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.BatchGetDevicePosition">BatchGetDevicePosition</a></code> | <code>string[]</code> | IAM actions required for the BatchGetDevicePosition API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.BatchPutGeofence">BatchPutGeofence</a></code> | <code>string[]</code> | IAM actions required for the BatchPutGeofence API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.BatchUpdateDevicePosition">BatchUpdateDevicePosition</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateDevicePosition API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.CalculateRoute">CalculateRoute</a></code> | <code>string[]</code> | IAM actions required for the CalculateRoute API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.CalculateRouteMatrix">CalculateRouteMatrix</a></code> | <code>string[]</code> | IAM actions required for the CalculateRouteMatrix API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.CancelJob">CancelJob</a></code> | <code>string[]</code> | IAM actions required for the CancelJob API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.CreateGeofenceCollection">CreateGeofenceCollection</a></code> | <code>string[]</code> | IAM actions required for the CreateGeofenceCollection API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.CreateKey">CreateKey</a></code> | <code>string[]</code> | IAM actions required for the CreateKey API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.CreateMap">CreateMap</a></code> | <code>string[]</code> | IAM actions required for the CreateMap API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.CreatePlaceIndex">CreatePlaceIndex</a></code> | <code>string[]</code> | IAM actions required for the CreatePlaceIndex API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.CreateRouteCalculator">CreateRouteCalculator</a></code> | <code>string[]</code> | IAM actions required for the CreateRouteCalculator API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.CreateTracker">CreateTracker</a></code> | <code>string[]</code> | IAM actions required for the CreateTracker API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DeleteGeofenceCollection">DeleteGeofenceCollection</a></code> | <code>string[]</code> | IAM actions required for the DeleteGeofenceCollection API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DeleteKey">DeleteKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteKey API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DeleteMap">DeleteMap</a></code> | <code>string[]</code> | IAM actions required for the DeleteMap API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DeletePlaceIndex">DeletePlaceIndex</a></code> | <code>string[]</code> | IAM actions required for the DeletePlaceIndex API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DeleteRouteCalculator">DeleteRouteCalculator</a></code> | <code>string[]</code> | IAM actions required for the DeleteRouteCalculator API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DeleteTracker">DeleteTracker</a></code> | <code>string[]</code> | IAM actions required for the DeleteTracker API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DescribeGeofenceCollection">DescribeGeofenceCollection</a></code> | <code>string[]</code> | IAM actions required for the DescribeGeofenceCollection API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DescribeKey">DescribeKey</a></code> | <code>string[]</code> | IAM actions required for the DescribeKey API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DescribeMap">DescribeMap</a></code> | <code>string[]</code> | IAM actions required for the DescribeMap API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DescribePlaceIndex">DescribePlaceIndex</a></code> | <code>string[]</code> | IAM actions required for the DescribePlaceIndex API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DescribeRouteCalculator">DescribeRouteCalculator</a></code> | <code>string[]</code> | IAM actions required for the DescribeRouteCalculator API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DescribeTracker">DescribeTracker</a></code> | <code>string[]</code> | IAM actions required for the DescribeTracker API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.DisassociateTrackerConsumer">DisassociateTrackerConsumer</a></code> | <code>string[]</code> | IAM actions required for the DisassociateTrackerConsumer API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ForecastGeofenceEvents">ForecastGeofenceEvents</a></code> | <code>string[]</code> | IAM actions required for the ForecastGeofenceEvents API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ListDevicePositions">ListDevicePositions</a></code> | <code>string[]</code> | IAM actions required for the ListDevicePositions API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ListGeofenceCollections">ListGeofenceCollections</a></code> | <code>string[]</code> | IAM actions required for the ListGeofenceCollections API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ListGeofences">ListGeofences</a></code> | <code>string[]</code> | IAM actions required for the ListGeofences API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ListKeys">ListKeys</a></code> | <code>string[]</code> | IAM actions required for the ListKeys API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ListMaps">ListMaps</a></code> | <code>string[]</code> | IAM actions required for the ListMaps API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ListPlaceIndexes">ListPlaceIndexes</a></code> | <code>string[]</code> | IAM actions required for the ListPlaceIndexes API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ListRouteCalculators">ListRouteCalculators</a></code> | <code>string[]</code> | IAM actions required for the ListRouteCalculators API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ListTrackerConsumers">ListTrackerConsumers</a></code> | <code>string[]</code> | IAM actions required for the ListTrackerConsumers API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.ListTrackers">ListTrackers</a></code> | <code>string[]</code> | IAM actions required for the ListTrackers API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.opGetDevicePosition">opGetDevicePosition</a></code> | <code>string[]</code> | IAM actions required for the GetDevicePosition API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.opGetDevicePositionHistory">opGetDevicePositionHistory</a></code> | <code>string[]</code> | IAM actions required for the GetDevicePositionHistory API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.opGetGeofence">opGetGeofence</a></code> | <code>string[]</code> | IAM actions required for the GetGeofence API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.opGetJob">opGetJob</a></code> | <code>string[]</code> | IAM actions required for the GetJob API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.opGetMapGlyphs">opGetMapGlyphs</a></code> | <code>string[]</code> | IAM actions required for the GetMapGlyphs API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.opGetMapSprites">opGetMapSprites</a></code> | <code>string[]</code> | IAM actions required for the GetMapSprites API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.opGetMapStyleDescriptor">opGetMapStyleDescriptor</a></code> | <code>string[]</code> | IAM actions required for the GetMapStyleDescriptor API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.opGetMapTile">opGetMapTile</a></code> | <code>string[]</code> | IAM actions required for the GetMapTile API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.opGetPlace">opGetPlace</a></code> | <code>string[]</code> | IAM actions required for the GetPlace API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.PutGeofence">PutGeofence</a></code> | <code>string[]</code> | IAM actions required for the PutGeofence API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.SearchPlaceIndexForPosition">SearchPlaceIndexForPosition</a></code> | <code>string[]</code> | IAM actions required for the SearchPlaceIndexForPosition API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.SearchPlaceIndexForSuggestions">SearchPlaceIndexForSuggestions</a></code> | <code>string[]</code> | IAM actions required for the SearchPlaceIndexForSuggestions API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.SearchPlaceIndexForText">SearchPlaceIndexForText</a></code> | <code>string[]</code> | IAM actions required for the SearchPlaceIndexForText API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.StartJob">StartJob</a></code> | <code>string[]</code> | IAM actions required for the StartJob API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.UpdateGeofenceCollection">UpdateGeofenceCollection</a></code> | <code>string[]</code> | IAM actions required for the UpdateGeofenceCollection API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.UpdateKey">UpdateKey</a></code> | <code>string[]</code> | IAM actions required for the UpdateKey API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.UpdateMap">UpdateMap</a></code> | <code>string[]</code> | IAM actions required for the UpdateMap API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.UpdatePlaceIndex">UpdatePlaceIndex</a></code> | <code>string[]</code> | IAM actions required for the UpdatePlaceIndex API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.UpdateRouteCalculator">UpdateRouteCalculator</a></code> | <code>string[]</code> | IAM actions required for the UpdateRouteCalculator API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.UpdateTracker">UpdateTracker</a></code> | <code>string[]</code> | IAM actions required for the UpdateTracker API call. |
| <code><a href="#@cdk_utils/iam.geo.GeoOperations.property.VerifyDevicePosition">VerifyDevicePosition</a></code> | <code>string[]</code> | IAM actions required for the VerifyDevicePosition API call. |

---

##### `AssociateTrackerConsumer`<sup>Required</sup> <a name="AssociateTrackerConsumer" id="@cdk_utils/iam.geo.GeoOperations.property.AssociateTrackerConsumer"></a>

```typescript
public readonly AssociateTrackerConsumer: string[];
```

- *Type:* string[]

IAM actions required for the AssociateTrackerConsumer API call.

---

##### `BatchDeleteDevicePositionHistory`<sup>Required</sup> <a name="BatchDeleteDevicePositionHistory" id="@cdk_utils/iam.geo.GeoOperations.property.BatchDeleteDevicePositionHistory"></a>

```typescript
public readonly BatchDeleteDevicePositionHistory: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteDevicePositionHistory API call.

---

##### `BatchDeleteGeofence`<sup>Required</sup> <a name="BatchDeleteGeofence" id="@cdk_utils/iam.geo.GeoOperations.property.BatchDeleteGeofence"></a>

```typescript
public readonly BatchDeleteGeofence: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteGeofence API call.

---

##### `BatchEvaluateGeofences`<sup>Required</sup> <a name="BatchEvaluateGeofences" id="@cdk_utils/iam.geo.GeoOperations.property.BatchEvaluateGeofences"></a>

```typescript
public readonly BatchEvaluateGeofences: string[];
```

- *Type:* string[]

IAM actions required for the BatchEvaluateGeofences API call.

---

##### `BatchGetDevicePosition`<sup>Required</sup> <a name="BatchGetDevicePosition" id="@cdk_utils/iam.geo.GeoOperations.property.BatchGetDevicePosition"></a>

```typescript
public readonly BatchGetDevicePosition: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetDevicePosition API call.

---

##### `BatchPutGeofence`<sup>Required</sup> <a name="BatchPutGeofence" id="@cdk_utils/iam.geo.GeoOperations.property.BatchPutGeofence"></a>

```typescript
public readonly BatchPutGeofence: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutGeofence API call.

---

##### `BatchUpdateDevicePosition`<sup>Required</sup> <a name="BatchUpdateDevicePosition" id="@cdk_utils/iam.geo.GeoOperations.property.BatchUpdateDevicePosition"></a>

```typescript
public readonly BatchUpdateDevicePosition: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateDevicePosition API call.

---

##### `CalculateRoute`<sup>Required</sup> <a name="CalculateRoute" id="@cdk_utils/iam.geo.GeoOperations.property.CalculateRoute"></a>

```typescript
public readonly CalculateRoute: string[];
```

- *Type:* string[]

IAM actions required for the CalculateRoute API call.

---

##### `CalculateRouteMatrix`<sup>Required</sup> <a name="CalculateRouteMatrix" id="@cdk_utils/iam.geo.GeoOperations.property.CalculateRouteMatrix"></a>

```typescript
public readonly CalculateRouteMatrix: string[];
```

- *Type:* string[]

IAM actions required for the CalculateRouteMatrix API call.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.geo.GeoOperations.property.CancelJob"></a>

```typescript
public readonly CancelJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelJob API call.

---

##### `CreateGeofenceCollection`<sup>Required</sup> <a name="CreateGeofenceCollection" id="@cdk_utils/iam.geo.GeoOperations.property.CreateGeofenceCollection"></a>

```typescript
public readonly CreateGeofenceCollection: string[];
```

- *Type:* string[]

IAM actions required for the CreateGeofenceCollection API call.

---

##### `CreateKey`<sup>Required</sup> <a name="CreateKey" id="@cdk_utils/iam.geo.GeoOperations.property.CreateKey"></a>

```typescript
public readonly CreateKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateKey API call.

---

##### `CreateMap`<sup>Required</sup> <a name="CreateMap" id="@cdk_utils/iam.geo.GeoOperations.property.CreateMap"></a>

```typescript
public readonly CreateMap: string[];
```

- *Type:* string[]

IAM actions required for the CreateMap API call.

---

##### `CreatePlaceIndex`<sup>Required</sup> <a name="CreatePlaceIndex" id="@cdk_utils/iam.geo.GeoOperations.property.CreatePlaceIndex"></a>

```typescript
public readonly CreatePlaceIndex: string[];
```

- *Type:* string[]

IAM actions required for the CreatePlaceIndex API call.

---

##### `CreateRouteCalculator`<sup>Required</sup> <a name="CreateRouteCalculator" id="@cdk_utils/iam.geo.GeoOperations.property.CreateRouteCalculator"></a>

```typescript
public readonly CreateRouteCalculator: string[];
```

- *Type:* string[]

IAM actions required for the CreateRouteCalculator API call.

---

##### `CreateTracker`<sup>Required</sup> <a name="CreateTracker" id="@cdk_utils/iam.geo.GeoOperations.property.CreateTracker"></a>

```typescript
public readonly CreateTracker: string[];
```

- *Type:* string[]

IAM actions required for the CreateTracker API call.

---

##### `DeleteGeofenceCollection`<sup>Required</sup> <a name="DeleteGeofenceCollection" id="@cdk_utils/iam.geo.GeoOperations.property.DeleteGeofenceCollection"></a>

```typescript
public readonly DeleteGeofenceCollection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGeofenceCollection API call.

---

##### `DeleteKey`<sup>Required</sup> <a name="DeleteKey" id="@cdk_utils/iam.geo.GeoOperations.property.DeleteKey"></a>

```typescript
public readonly DeleteKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKey API call.

---

##### `DeleteMap`<sup>Required</sup> <a name="DeleteMap" id="@cdk_utils/iam.geo.GeoOperations.property.DeleteMap"></a>

```typescript
public readonly DeleteMap: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMap API call.

---

##### `DeletePlaceIndex`<sup>Required</sup> <a name="DeletePlaceIndex" id="@cdk_utils/iam.geo.GeoOperations.property.DeletePlaceIndex"></a>

```typescript
public readonly DeletePlaceIndex: string[];
```

- *Type:* string[]

IAM actions required for the DeletePlaceIndex API call.

---

##### `DeleteRouteCalculator`<sup>Required</sup> <a name="DeleteRouteCalculator" id="@cdk_utils/iam.geo.GeoOperations.property.DeleteRouteCalculator"></a>

```typescript
public readonly DeleteRouteCalculator: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRouteCalculator API call.

---

##### `DeleteTracker`<sup>Required</sup> <a name="DeleteTracker" id="@cdk_utils/iam.geo.GeoOperations.property.DeleteTracker"></a>

```typescript
public readonly DeleteTracker: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTracker API call.

---

##### `DescribeGeofenceCollection`<sup>Required</sup> <a name="DescribeGeofenceCollection" id="@cdk_utils/iam.geo.GeoOperations.property.DescribeGeofenceCollection"></a>

```typescript
public readonly DescribeGeofenceCollection: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGeofenceCollection API call.

---

##### `DescribeKey`<sup>Required</sup> <a name="DescribeKey" id="@cdk_utils/iam.geo.GeoOperations.property.DescribeKey"></a>

```typescript
public readonly DescribeKey: string[];
```

- *Type:* string[]

IAM actions required for the DescribeKey API call.

---

##### `DescribeMap`<sup>Required</sup> <a name="DescribeMap" id="@cdk_utils/iam.geo.GeoOperations.property.DescribeMap"></a>

```typescript
public readonly DescribeMap: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMap API call.

---

##### `DescribePlaceIndex`<sup>Required</sup> <a name="DescribePlaceIndex" id="@cdk_utils/iam.geo.GeoOperations.property.DescribePlaceIndex"></a>

```typescript
public readonly DescribePlaceIndex: string[];
```

- *Type:* string[]

IAM actions required for the DescribePlaceIndex API call.

---

##### `DescribeRouteCalculator`<sup>Required</sup> <a name="DescribeRouteCalculator" id="@cdk_utils/iam.geo.GeoOperations.property.DescribeRouteCalculator"></a>

```typescript
public readonly DescribeRouteCalculator: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRouteCalculator API call.

---

##### `DescribeTracker`<sup>Required</sup> <a name="DescribeTracker" id="@cdk_utils/iam.geo.GeoOperations.property.DescribeTracker"></a>

```typescript
public readonly DescribeTracker: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTracker API call.

---

##### `DisassociateTrackerConsumer`<sup>Required</sup> <a name="DisassociateTrackerConsumer" id="@cdk_utils/iam.geo.GeoOperations.property.DisassociateTrackerConsumer"></a>

```typescript
public readonly DisassociateTrackerConsumer: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateTrackerConsumer API call.

---

##### `ForecastGeofenceEvents`<sup>Required</sup> <a name="ForecastGeofenceEvents" id="@cdk_utils/iam.geo.GeoOperations.property.ForecastGeofenceEvents"></a>

```typescript
public readonly ForecastGeofenceEvents: string[];
```

- *Type:* string[]

IAM actions required for the ForecastGeofenceEvents API call.

---

##### `ListDevicePositions`<sup>Required</sup> <a name="ListDevicePositions" id="@cdk_utils/iam.geo.GeoOperations.property.ListDevicePositions"></a>

```typescript
public readonly ListDevicePositions: string[];
```

- *Type:* string[]

IAM actions required for the ListDevicePositions API call.

---

##### `ListGeofenceCollections`<sup>Required</sup> <a name="ListGeofenceCollections" id="@cdk_utils/iam.geo.GeoOperations.property.ListGeofenceCollections"></a>

```typescript
public readonly ListGeofenceCollections: string[];
```

- *Type:* string[]

IAM actions required for the ListGeofenceCollections API call.

---

##### `ListGeofences`<sup>Required</sup> <a name="ListGeofences" id="@cdk_utils/iam.geo.GeoOperations.property.ListGeofences"></a>

```typescript
public readonly ListGeofences: string[];
```

- *Type:* string[]

IAM actions required for the ListGeofences API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.geo.GeoOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListKeys`<sup>Required</sup> <a name="ListKeys" id="@cdk_utils/iam.geo.GeoOperations.property.ListKeys"></a>

```typescript
public readonly ListKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListKeys API call.

---

##### `ListMaps`<sup>Required</sup> <a name="ListMaps" id="@cdk_utils/iam.geo.GeoOperations.property.ListMaps"></a>

```typescript
public readonly ListMaps: string[];
```

- *Type:* string[]

IAM actions required for the ListMaps API call.

---

##### `ListPlaceIndexes`<sup>Required</sup> <a name="ListPlaceIndexes" id="@cdk_utils/iam.geo.GeoOperations.property.ListPlaceIndexes"></a>

```typescript
public readonly ListPlaceIndexes: string[];
```

- *Type:* string[]

IAM actions required for the ListPlaceIndexes API call.

---

##### `ListRouteCalculators`<sup>Required</sup> <a name="ListRouteCalculators" id="@cdk_utils/iam.geo.GeoOperations.property.ListRouteCalculators"></a>

```typescript
public readonly ListRouteCalculators: string[];
```

- *Type:* string[]

IAM actions required for the ListRouteCalculators API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.geo.GeoOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTrackerConsumers`<sup>Required</sup> <a name="ListTrackerConsumers" id="@cdk_utils/iam.geo.GeoOperations.property.ListTrackerConsumers"></a>

```typescript
public readonly ListTrackerConsumers: string[];
```

- *Type:* string[]

IAM actions required for the ListTrackerConsumers API call.

---

##### `ListTrackers`<sup>Required</sup> <a name="ListTrackers" id="@cdk_utils/iam.geo.GeoOperations.property.ListTrackers"></a>

```typescript
public readonly ListTrackers: string[];
```

- *Type:* string[]

IAM actions required for the ListTrackers API call.

---

##### `opGetDevicePosition`<sup>Required</sup> <a name="opGetDevicePosition" id="@cdk_utils/iam.geo.GeoOperations.property.opGetDevicePosition"></a>

```typescript
public readonly opGetDevicePosition: string[];
```

- *Type:* string[]

IAM actions required for the GetDevicePosition API call.

---

##### `opGetDevicePositionHistory`<sup>Required</sup> <a name="opGetDevicePositionHistory" id="@cdk_utils/iam.geo.GeoOperations.property.opGetDevicePositionHistory"></a>

```typescript
public readonly opGetDevicePositionHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetDevicePositionHistory API call.

---

##### `opGetGeofence`<sup>Required</sup> <a name="opGetGeofence" id="@cdk_utils/iam.geo.GeoOperations.property.opGetGeofence"></a>

```typescript
public readonly opGetGeofence: string[];
```

- *Type:* string[]

IAM actions required for the GetGeofence API call.

---

##### `opGetJob`<sup>Required</sup> <a name="opGetJob" id="@cdk_utils/iam.geo.GeoOperations.property.opGetJob"></a>

```typescript
public readonly opGetJob: string[];
```

- *Type:* string[]

IAM actions required for the GetJob API call.

---

##### `opGetMapGlyphs`<sup>Required</sup> <a name="opGetMapGlyphs" id="@cdk_utils/iam.geo.GeoOperations.property.opGetMapGlyphs"></a>

```typescript
public readonly opGetMapGlyphs: string[];
```

- *Type:* string[]

IAM actions required for the GetMapGlyphs API call.

---

##### `opGetMapSprites`<sup>Required</sup> <a name="opGetMapSprites" id="@cdk_utils/iam.geo.GeoOperations.property.opGetMapSprites"></a>

```typescript
public readonly opGetMapSprites: string[];
```

- *Type:* string[]

IAM actions required for the GetMapSprites API call.

---

##### `opGetMapStyleDescriptor`<sup>Required</sup> <a name="opGetMapStyleDescriptor" id="@cdk_utils/iam.geo.GeoOperations.property.opGetMapStyleDescriptor"></a>

```typescript
public readonly opGetMapStyleDescriptor: string[];
```

- *Type:* string[]

IAM actions required for the GetMapStyleDescriptor API call.

---

##### `opGetMapTile`<sup>Required</sup> <a name="opGetMapTile" id="@cdk_utils/iam.geo.GeoOperations.property.opGetMapTile"></a>

```typescript
public readonly opGetMapTile: string[];
```

- *Type:* string[]

IAM actions required for the GetMapTile API call.

---

##### `opGetPlace`<sup>Required</sup> <a name="opGetPlace" id="@cdk_utils/iam.geo.GeoOperations.property.opGetPlace"></a>

```typescript
public readonly opGetPlace: string[];
```

- *Type:* string[]

IAM actions required for the GetPlace API call.

---

##### `PutGeofence`<sup>Required</sup> <a name="PutGeofence" id="@cdk_utils/iam.geo.GeoOperations.property.PutGeofence"></a>

```typescript
public readonly PutGeofence: string[];
```

- *Type:* string[]

IAM actions required for the PutGeofence API call.

---

##### `SearchPlaceIndexForPosition`<sup>Required</sup> <a name="SearchPlaceIndexForPosition" id="@cdk_utils/iam.geo.GeoOperations.property.SearchPlaceIndexForPosition"></a>

```typescript
public readonly SearchPlaceIndexForPosition: string[];
```

- *Type:* string[]

IAM actions required for the SearchPlaceIndexForPosition API call.

---

##### `SearchPlaceIndexForSuggestions`<sup>Required</sup> <a name="SearchPlaceIndexForSuggestions" id="@cdk_utils/iam.geo.GeoOperations.property.SearchPlaceIndexForSuggestions"></a>

```typescript
public readonly SearchPlaceIndexForSuggestions: string[];
```

- *Type:* string[]

IAM actions required for the SearchPlaceIndexForSuggestions API call.

---

##### `SearchPlaceIndexForText`<sup>Required</sup> <a name="SearchPlaceIndexForText" id="@cdk_utils/iam.geo.GeoOperations.property.SearchPlaceIndexForText"></a>

```typescript
public readonly SearchPlaceIndexForText: string[];
```

- *Type:* string[]

IAM actions required for the SearchPlaceIndexForText API call.

---

##### `StartJob`<sup>Required</sup> <a name="StartJob" id="@cdk_utils/iam.geo.GeoOperations.property.StartJob"></a>

```typescript
public readonly StartJob: string[];
```

- *Type:* string[]

IAM actions required for the StartJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.geo.GeoOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.geo.GeoOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateGeofenceCollection`<sup>Required</sup> <a name="UpdateGeofenceCollection" id="@cdk_utils/iam.geo.GeoOperations.property.UpdateGeofenceCollection"></a>

```typescript
public readonly UpdateGeofenceCollection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGeofenceCollection API call.

---

##### `UpdateKey`<sup>Required</sup> <a name="UpdateKey" id="@cdk_utils/iam.geo.GeoOperations.property.UpdateKey"></a>

```typescript
public readonly UpdateKey: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKey API call.

---

##### `UpdateMap`<sup>Required</sup> <a name="UpdateMap" id="@cdk_utils/iam.geo.GeoOperations.property.UpdateMap"></a>

```typescript
public readonly UpdateMap: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMap API call.

---

##### `UpdatePlaceIndex`<sup>Required</sup> <a name="UpdatePlaceIndex" id="@cdk_utils/iam.geo.GeoOperations.property.UpdatePlaceIndex"></a>

```typescript
public readonly UpdatePlaceIndex: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePlaceIndex API call.

---

##### `UpdateRouteCalculator`<sup>Required</sup> <a name="UpdateRouteCalculator" id="@cdk_utils/iam.geo.GeoOperations.property.UpdateRouteCalculator"></a>

```typescript
public readonly UpdateRouteCalculator: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRouteCalculator API call.

---

##### `UpdateTracker`<sup>Required</sup> <a name="UpdateTracker" id="@cdk_utils/iam.geo.GeoOperations.property.UpdateTracker"></a>

```typescript
public readonly UpdateTracker: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTracker API call.

---

##### `VerifyDevicePosition`<sup>Required</sup> <a name="VerifyDevicePosition" id="@cdk_utils/iam.geo.GeoOperations.property.VerifyDevicePosition"></a>

```typescript
public readonly VerifyDevicePosition: string[];
```

- *Type:* string[]

IAM actions required for the VerifyDevicePosition API call.

---

### GeoResources <a name="GeoResources" id="@cdk_utils/iam.geo.GeoResources"></a>

ARN builders, validators, and parsers for geo resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.geo.GeoResources.Initializer"></a>

```typescript
import { geo } from '@cdk_utils/iam'

new geo.GeoResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.apiKey">apiKey</a></code> | Builds an ARN for the api-key resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.geofenceCollection">geofenceCollection</a></code> | Builds an ARN for the geofence-collection resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.isValidAPIKeyArn">isValidAPIKeyArn</a></code> | Validates whether a string is a valid ARN for the api-key resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.isValidGeofenceCollectionArn">isValidGeofenceCollectionArn</a></code> | Validates whether a string is a valid ARN for the geofence-collection resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.isValidJobArn">isValidJobArn</a></code> | Validates whether a string is a valid ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.isValidMapArn">isValidMapArn</a></code> | Validates whether a string is a valid ARN for the map resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.isValidPlaceIndexArn">isValidPlaceIndexArn</a></code> | Validates whether a string is a valid ARN for the place-index resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.isValidRouteCalculatorArn">isValidRouteCalculatorArn</a></code> | Validates whether a string is a valid ARN for the route-calculator resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.isValidTrackerArn">isValidTrackerArn</a></code> | Validates whether a string is a valid ARN for the tracker resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.job">job</a></code> | Builds an ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.map">map</a></code> | Builds an ARN for the map resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.parseAPIKeyArn">parseAPIKeyArn</a></code> | Parses a api-key ARN into its components. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.parseGeofenceCollectionArn">parseGeofenceCollectionArn</a></code> | Parses a geofence-collection ARN into its components. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.parseJobArn">parseJobArn</a></code> | Parses a job ARN into its components. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.parseMapArn">parseMapArn</a></code> | Parses a map ARN into its components. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.parsePlaceIndexArn">parsePlaceIndexArn</a></code> | Parses a place-index ARN into its components. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.parseRouteCalculatorArn">parseRouteCalculatorArn</a></code> | Parses a route-calculator ARN into its components. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.parseTrackerArn">parseTrackerArn</a></code> | Parses a tracker ARN into its components. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.placeIndex">placeIndex</a></code> | Builds an ARN for the place-index resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.routeCalculator">routeCalculator</a></code> | Builds an ARN for the route-calculator resource. |
| <code><a href="#@cdk_utils/iam.geo.GeoResources.tracker">tracker</a></code> | Builds an ARN for the tracker resource. |

---

##### `apiKey` <a name="apiKey" id="@cdk_utils/iam.geo.GeoResources.apiKey"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.apiKey(props: GeoAPIKeyArnProps)
```

Builds an ARN for the api-key resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.geo.GeoResources.apiKey.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.geo.GeoAPIKeyArnProps">GeoAPIKeyArnProps</a>

---

##### `geofenceCollection` <a name="geofenceCollection" id="@cdk_utils/iam.geo.GeoResources.geofenceCollection"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.geofenceCollection(props: GeoGeofenceCollectionArnProps)
```

Builds an ARN for the geofence-collection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.geo.GeoResources.geofenceCollection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.geo.GeoGeofenceCollectionArnProps">GeoGeofenceCollectionArnProps</a>

---

##### `isValidAPIKeyArn` <a name="isValidAPIKeyArn" id="@cdk_utils/iam.geo.GeoResources.isValidAPIKeyArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.isValidAPIKeyArn(arn: string)
```

Validates whether a string is a valid ARN for the api-key resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.isValidAPIKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGeofenceCollectionArn` <a name="isValidGeofenceCollectionArn" id="@cdk_utils/iam.geo.GeoResources.isValidGeofenceCollectionArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.isValidGeofenceCollectionArn(arn: string)
```

Validates whether a string is a valid ARN for the geofence-collection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.isValidGeofenceCollectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobArn` <a name="isValidJobArn" id="@cdk_utils/iam.geo.GeoResources.isValidJobArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.isValidJobArn(arn: string)
```

Validates whether a string is a valid ARN for the job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.isValidJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMapArn` <a name="isValidMapArn" id="@cdk_utils/iam.geo.GeoResources.isValidMapArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.isValidMapArn(arn: string)
```

Validates whether a string is a valid ARN for the map resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.isValidMapArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPlaceIndexArn` <a name="isValidPlaceIndexArn" id="@cdk_utils/iam.geo.GeoResources.isValidPlaceIndexArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.isValidPlaceIndexArn(arn: string)
```

Validates whether a string is a valid ARN for the place-index resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.isValidPlaceIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRouteCalculatorArn` <a name="isValidRouteCalculatorArn" id="@cdk_utils/iam.geo.GeoResources.isValidRouteCalculatorArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.isValidRouteCalculatorArn(arn: string)
```

Validates whether a string is a valid ARN for the route-calculator resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.isValidRouteCalculatorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTrackerArn` <a name="isValidTrackerArn" id="@cdk_utils/iam.geo.GeoResources.isValidTrackerArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.isValidTrackerArn(arn: string)
```

Validates whether a string is a valid ARN for the tracker resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.isValidTrackerArn.parameter.arn"></a>

- *Type:* string

---

##### `job` <a name="job" id="@cdk_utils/iam.geo.GeoResources.job"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.job(props: GeoJobArnProps)
```

Builds an ARN for the job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.geo.GeoResources.job.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.geo.GeoJobArnProps">GeoJobArnProps</a>

---

##### `map` <a name="map" id="@cdk_utils/iam.geo.GeoResources.map"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.map(props: GeoMapArnProps)
```

Builds an ARN for the map resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.geo.GeoResources.map.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.geo.GeoMapArnProps">GeoMapArnProps</a>

---

##### `parseAPIKeyArn` <a name="parseAPIKeyArn" id="@cdk_utils/iam.geo.GeoResources.parseAPIKeyArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.parseAPIKeyArn(arn: string)
```

Parses a api-key ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.parseAPIKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGeofenceCollectionArn` <a name="parseGeofenceCollectionArn" id="@cdk_utils/iam.geo.GeoResources.parseGeofenceCollectionArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.parseGeofenceCollectionArn(arn: string)
```

Parses a geofence-collection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.parseGeofenceCollectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobArn` <a name="parseJobArn" id="@cdk_utils/iam.geo.GeoResources.parseJobArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.parseJobArn(arn: string)
```

Parses a job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.parseJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMapArn` <a name="parseMapArn" id="@cdk_utils/iam.geo.GeoResources.parseMapArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.parseMapArn(arn: string)
```

Parses a map ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.parseMapArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePlaceIndexArn` <a name="parsePlaceIndexArn" id="@cdk_utils/iam.geo.GeoResources.parsePlaceIndexArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.parsePlaceIndexArn(arn: string)
```

Parses a place-index ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.parsePlaceIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRouteCalculatorArn` <a name="parseRouteCalculatorArn" id="@cdk_utils/iam.geo.GeoResources.parseRouteCalculatorArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.parseRouteCalculatorArn(arn: string)
```

Parses a route-calculator ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.parseRouteCalculatorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTrackerArn` <a name="parseTrackerArn" id="@cdk_utils/iam.geo.GeoResources.parseTrackerArn"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.parseTrackerArn(arn: string)
```

Parses a tracker ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.geo.GeoResources.parseTrackerArn.parameter.arn"></a>

- *Type:* string

---

##### `placeIndex` <a name="placeIndex" id="@cdk_utils/iam.geo.GeoResources.placeIndex"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.placeIndex(props: GeoPlaceIndexArnProps)
```

Builds an ARN for the place-index resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.geo.GeoResources.placeIndex.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.geo.GeoPlaceIndexArnProps">GeoPlaceIndexArnProps</a>

---

##### `routeCalculator` <a name="routeCalculator" id="@cdk_utils/iam.geo.GeoResources.routeCalculator"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.routeCalculator(props: GeoRouteCalculatorArnProps)
```

Builds an ARN for the route-calculator resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.geo.GeoResources.routeCalculator.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.geo.GeoRouteCalculatorArnProps">GeoRouteCalculatorArnProps</a>

---

##### `tracker` <a name="tracker" id="@cdk_utils/iam.geo.GeoResources.tracker"></a>

```typescript
import { geo } from '@cdk_utils/iam'

geo.GeoResources.tracker(props: GeoTrackerArnProps)
```

Builds an ARN for the tracker resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.geo.GeoResources.tracker.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.geo.GeoTrackerArnProps">GeoTrackerArnProps</a>

---




