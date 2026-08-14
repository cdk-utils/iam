# `sagemaker_geospatial` Submodule <a name="`sagemaker_geospatial` Submodule" id="@cdk_utils/iam.sagemaker_geospatial"></a>


## Structs <a name="Structs" id="Structs"></a>

### SagemakerGeospatialEarthObservationJobArnComponents <a name="SagemakerGeospatialEarthObservationJobArnComponents" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnComponents"></a>

Parsed components of a EarthObservationJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnComponents.Initializer"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

const sagemakerGeospatialEarthObservationJobArnComponents: sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobID component. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SagemakerGeospatialEarthObservationJobArnProps <a name="SagemakerGeospatialEarthObservationJobArnProps" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps"></a>

Properties for building a EarthObservationJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps.Initializer"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

const sagemakerGeospatialEarthObservationJobArnProps: sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobID component of the ARN. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SagemakerGeospatialRasterDataCollectionArnComponents <a name="SagemakerGeospatialRasterDataCollectionArnComponents" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnComponents"></a>

Parsed components of a RasterDataCollection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnComponents.Initializer"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

const sagemakerGeospatialRasterDataCollectionArnComponents: sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnComponents.property.collectionId">collectionId</a></code> | <code>string</code> | The CollectionID component. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnComponents.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The CollectionID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SagemakerGeospatialRasterDataCollectionArnProps <a name="SagemakerGeospatialRasterDataCollectionArnProps" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps"></a>

Properties for building a RasterDataCollection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps.Initializer"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

const sagemakerGeospatialRasterDataCollectionArnProps: sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps.property.collectionId">collectionId</a></code> | <code>string</code> | The CollectionID component of the ARN. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The CollectionID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SagemakerGeospatialVectorEnrichmentJobArnComponents <a name="SagemakerGeospatialVectorEnrichmentJobArnComponents" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnComponents"></a>

Parsed components of a VectorEnrichmentJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnComponents.Initializer"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

const sagemakerGeospatialVectorEnrichmentJobArnComponents: sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobID component. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SagemakerGeospatialVectorEnrichmentJobArnProps <a name="SagemakerGeospatialVectorEnrichmentJobArnProps" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps"></a>

Properties for building a VectorEnrichmentJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps.Initializer"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

const sagemakerGeospatialVectorEnrichmentJobArnProps: sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobID component of the ARN. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerGeospatialActions <a name="SagemakerGeospatialActions" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions"></a>

IAM action constants for the sagemaker-geospatial service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.Initializer"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

new sagemaker_geospatial.SagemakerGeospatialActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.actionGetEarthObservationJob">actionGetEarthObservationJob</a></code> | <code>string</code> | [Read] sagemaker-geospatial:GetEarthObservationJob. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.actionGetRasterDataCollection">actionGetRasterDataCollection</a></code> | <code>string</code> | [Read] sagemaker-geospatial:GetRasterDataCollection. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.actionGetTile">actionGetTile</a></code> | <code>string</code> | [Read] sagemaker-geospatial:GetTile. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.actionGetVectorEnrichmentJob">actionGetVectorEnrichmentJob</a></code> | <code>string</code> | [Read] sagemaker-geospatial:GetVectorEnrichmentJob. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.DeleteEarthObservationJob">DeleteEarthObservationJob</a></code> | <code>string</code> | [Write] sagemaker-geospatial:DeleteEarthObservationJob. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.DeleteVectorEnrichmentJob">DeleteVectorEnrichmentJob</a></code> | <code>string</code> | [Write] sagemaker-geospatial:DeleteVectorEnrichmentJob. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ExportEarthObservationJob">ExportEarthObservationJob</a></code> | <code>string</code> | [Write] sagemaker-geospatial:ExportEarthObservationJob. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ExportVectorEnrichmentJob">ExportVectorEnrichmentJob</a></code> | <code>string</code> | [Write] sagemaker-geospatial:ExportVectorEnrichmentJob. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ListEarthObservationJobs">ListEarthObservationJobs</a></code> | <code>string</code> | [List] sagemaker-geospatial:ListEarthObservationJobs. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ListRasterDataCollections">ListRasterDataCollections</a></code> | <code>string</code> | [List] sagemaker-geospatial:ListRasterDataCollections. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] sagemaker-geospatial:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ListVectorEnrichmentJobs">ListVectorEnrichmentJobs</a></code> | <code>string</code> | [List] sagemaker-geospatial:ListVectorEnrichmentJobs. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.SearchRasterDataCollection">SearchRasterDataCollection</a></code> | <code>string</code> | [Read] sagemaker-geospatial:SearchRasterDataCollection. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.StartEarthObservationJob">StartEarthObservationJob</a></code> | <code>string</code> | [Write] sagemaker-geospatial:StartEarthObservationJob. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.StartVectorEnrichmentJob">StartVectorEnrichmentJob</a></code> | <code>string</code> | [Write] sagemaker-geospatial:StartVectorEnrichmentJob. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.StopEarthObservationJob">StopEarthObservationJob</a></code> | <code>string</code> | [Write] sagemaker-geospatial:StopEarthObservationJob. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.StopVectorEnrichmentJob">StopVectorEnrichmentJob</a></code> | <code>string</code> | [Write] sagemaker-geospatial:StopVectorEnrichmentJob. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] sagemaker-geospatial:TagResource. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] sagemaker-geospatial:UntagResource. |

---

##### `actionGetEarthObservationJob`<sup>Required</sup> <a name="actionGetEarthObservationJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.actionGetEarthObservationJob"></a>

```typescript
public readonly actionGetEarthObservationJob: string;
```

- *Type:* string

[Read] sagemaker-geospatial:GetEarthObservationJob.

---

##### `actionGetRasterDataCollection`<sup>Required</sup> <a name="actionGetRasterDataCollection" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.actionGetRasterDataCollection"></a>

```typescript
public readonly actionGetRasterDataCollection: string;
```

- *Type:* string

[Read] sagemaker-geospatial:GetRasterDataCollection.

---

##### `actionGetTile`<sup>Required</sup> <a name="actionGetTile" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.actionGetTile"></a>

```typescript
public readonly actionGetTile: string;
```

- *Type:* string

[Read] sagemaker-geospatial:GetTile.

---

##### `actionGetVectorEnrichmentJob`<sup>Required</sup> <a name="actionGetVectorEnrichmentJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.actionGetVectorEnrichmentJob"></a>

```typescript
public readonly actionGetVectorEnrichmentJob: string;
```

- *Type:* string

[Read] sagemaker-geospatial:GetVectorEnrichmentJob.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeleteEarthObservationJob`<sup>Required</sup> <a name="DeleteEarthObservationJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.DeleteEarthObservationJob"></a>

```typescript
public readonly DeleteEarthObservationJob: string;
```

- *Type:* string

[Write] sagemaker-geospatial:DeleteEarthObservationJob.

---

##### `DeleteVectorEnrichmentJob`<sup>Required</sup> <a name="DeleteVectorEnrichmentJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.DeleteVectorEnrichmentJob"></a>

```typescript
public readonly DeleteVectorEnrichmentJob: string;
```

- *Type:* string

[Write] sagemaker-geospatial:DeleteVectorEnrichmentJob.

---

##### `ExportEarthObservationJob`<sup>Required</sup> <a name="ExportEarthObservationJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ExportEarthObservationJob"></a>

```typescript
public readonly ExportEarthObservationJob: string;
```

- *Type:* string

[Write] sagemaker-geospatial:ExportEarthObservationJob.

---

##### `ExportVectorEnrichmentJob`<sup>Required</sup> <a name="ExportVectorEnrichmentJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ExportVectorEnrichmentJob"></a>

```typescript
public readonly ExportVectorEnrichmentJob: string;
```

- *Type:* string

[Write] sagemaker-geospatial:ExportVectorEnrichmentJob.

---

##### `ListEarthObservationJobs`<sup>Required</sup> <a name="ListEarthObservationJobs" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ListEarthObservationJobs"></a>

```typescript
public readonly ListEarthObservationJobs: string;
```

- *Type:* string

[List] sagemaker-geospatial:ListEarthObservationJobs.

---

##### `ListRasterDataCollections`<sup>Required</sup> <a name="ListRasterDataCollections" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ListRasterDataCollections"></a>

```typescript
public readonly ListRasterDataCollections: string;
```

- *Type:* string

[List] sagemaker-geospatial:ListRasterDataCollections.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] sagemaker-geospatial:ListTagsForResource.

---

##### `ListVectorEnrichmentJobs`<sup>Required</sup> <a name="ListVectorEnrichmentJobs" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.ListVectorEnrichmentJobs"></a>

```typescript
public readonly ListVectorEnrichmentJobs: string;
```

- *Type:* string

[List] sagemaker-geospatial:ListVectorEnrichmentJobs.

---

##### `SearchRasterDataCollection`<sup>Required</sup> <a name="SearchRasterDataCollection" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.SearchRasterDataCollection"></a>

```typescript
public readonly SearchRasterDataCollection: string;
```

- *Type:* string

[Read] sagemaker-geospatial:SearchRasterDataCollection.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartEarthObservationJob`<sup>Required</sup> <a name="StartEarthObservationJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.StartEarthObservationJob"></a>

```typescript
public readonly StartEarthObservationJob: string;
```

- *Type:* string

[Write] sagemaker-geospatial:StartEarthObservationJob.

---

##### `StartVectorEnrichmentJob`<sup>Required</sup> <a name="StartVectorEnrichmentJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.StartVectorEnrichmentJob"></a>

```typescript
public readonly StartVectorEnrichmentJob: string;
```

- *Type:* string

[Write] sagemaker-geospatial:StartVectorEnrichmentJob.

---

##### `StopEarthObservationJob`<sup>Required</sup> <a name="StopEarthObservationJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.StopEarthObservationJob"></a>

```typescript
public readonly StopEarthObservationJob: string;
```

- *Type:* string

[Write] sagemaker-geospatial:StopEarthObservationJob.

---

##### `StopVectorEnrichmentJob`<sup>Required</sup> <a name="StopVectorEnrichmentJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.StopVectorEnrichmentJob"></a>

```typescript
public readonly StopVectorEnrichmentJob: string;
```

- *Type:* string

[Write] sagemaker-geospatial:StopVectorEnrichmentJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] sagemaker-geospatial:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] sagemaker-geospatial:UntagResource.

---

### SagemakerGeospatialConditions <a name="SagemakerGeospatialConditions" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions"></a>

Condition key constants and builders for sagemaker-geospatial.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.Initializer"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

new sagemaker_geospatial.SagemakerGeospatialConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.requestTag"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.resourceTag"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.tagKeys"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.actionGetEarthObservationJobConditionKeys">actionGetEarthObservationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEarthObservationJob action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.actionGetRasterDataCollectionConditionKeys">actionGetRasterDataCollectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRasterDataCollection action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.actionGetVectorEnrichmentJobConditionKeys">actionGetVectorEnrichmentJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetVectorEnrichmentJob action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.DeleteEarthObservationJobConditionKeys">DeleteEarthObservationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEarthObservationJob action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.DeleteVectorEnrichmentJobConditionKeys">DeleteVectorEnrichmentJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteVectorEnrichmentJob action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.ExportEarthObservationJobConditionKeys">ExportEarthObservationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExportEarthObservationJob action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.ExportVectorEnrichmentJobConditionKeys">ExportVectorEnrichmentJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExportVectorEnrichmentJob action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.StartEarthObservationJobConditionKeys">StartEarthObservationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartEarthObservationJob action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.StartVectorEnrichmentJobConditionKeys">StartVectorEnrichmentJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartVectorEnrichmentJob action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.StopEarthObservationJobConditionKeys">StopEarthObservationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopEarthObservationJob action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.StopVectorEnrichmentJobConditionKeys">StopVectorEnrichmentJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopVectorEnrichmentJob action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetEarthObservationJobConditionKeys`<sup>Required</sup> <a name="actionGetEarthObservationJobConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.actionGetEarthObservationJobConditionKeys"></a>

```typescript
public readonly actionGetEarthObservationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEarthObservationJob action.

---

##### `actionGetRasterDataCollectionConditionKeys`<sup>Required</sup> <a name="actionGetRasterDataCollectionConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.actionGetRasterDataCollectionConditionKeys"></a>

```typescript
public readonly actionGetRasterDataCollectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRasterDataCollection action.

---

##### `actionGetVectorEnrichmentJobConditionKeys`<sup>Required</sup> <a name="actionGetVectorEnrichmentJobConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.actionGetVectorEnrichmentJobConditionKeys"></a>

```typescript
public readonly actionGetVectorEnrichmentJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetVectorEnrichmentJob action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `DeleteEarthObservationJobConditionKeys`<sup>Required</sup> <a name="DeleteEarthObservationJobConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.DeleteEarthObservationJobConditionKeys"></a>

```typescript
public readonly DeleteEarthObservationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEarthObservationJob action.

---

##### `DeleteVectorEnrichmentJobConditionKeys`<sup>Required</sup> <a name="DeleteVectorEnrichmentJobConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.DeleteVectorEnrichmentJobConditionKeys"></a>

```typescript
public readonly DeleteVectorEnrichmentJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteVectorEnrichmentJob action.

---

##### `ExportEarthObservationJobConditionKeys`<sup>Required</sup> <a name="ExportEarthObservationJobConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.ExportEarthObservationJobConditionKeys"></a>

```typescript
public readonly ExportEarthObservationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExportEarthObservationJob action.

---

##### `ExportVectorEnrichmentJobConditionKeys`<sup>Required</sup> <a name="ExportVectorEnrichmentJobConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.ExportVectorEnrichmentJobConditionKeys"></a>

```typescript
public readonly ExportVectorEnrichmentJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExportVectorEnrichmentJob action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `StartEarthObservationJobConditionKeys`<sup>Required</sup> <a name="StartEarthObservationJobConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.StartEarthObservationJobConditionKeys"></a>

```typescript
public readonly StartEarthObservationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartEarthObservationJob action.

---

##### `StartVectorEnrichmentJobConditionKeys`<sup>Required</sup> <a name="StartVectorEnrichmentJobConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.StartVectorEnrichmentJobConditionKeys"></a>

```typescript
public readonly StartVectorEnrichmentJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartVectorEnrichmentJob action.

---

##### `StopEarthObservationJobConditionKeys`<sup>Required</sup> <a name="StopEarthObservationJobConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.StopEarthObservationJobConditionKeys"></a>

```typescript
public readonly StopEarthObservationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopEarthObservationJob action.

---

##### `StopVectorEnrichmentJobConditionKeys`<sup>Required</sup> <a name="StopVectorEnrichmentJobConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.StopVectorEnrichmentJobConditionKeys"></a>

```typescript
public readonly StopVectorEnrichmentJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopVectorEnrichmentJob action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SagemakerGeospatialOperations <a name="SagemakerGeospatialOperations" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations"></a>

API operation to required IAM actions mapping for sagemaker-geospatial.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.Initializer"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

new sagemaker_geospatial.SagemakerGeospatialOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.DeleteEarthObservationJob">DeleteEarthObservationJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteEarthObservationJob API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.DeleteVectorEnrichmentJob">DeleteVectorEnrichmentJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteVectorEnrichmentJob API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ExportEarthObservationJob">ExportEarthObservationJob</a></code> | <code>string[]</code> | IAM actions required for the ExportEarthObservationJob API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ExportVectorEnrichmentJob">ExportVectorEnrichmentJob</a></code> | <code>string[]</code> | IAM actions required for the ExportVectorEnrichmentJob API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ListEarthObservationJobs">ListEarthObservationJobs</a></code> | <code>string[]</code> | IAM actions required for the ListEarthObservationJobs API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ListRasterDataCollections">ListRasterDataCollections</a></code> | <code>string[]</code> | IAM actions required for the ListRasterDataCollections API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ListVectorEnrichmentJobs">ListVectorEnrichmentJobs</a></code> | <code>string[]</code> | IAM actions required for the ListVectorEnrichmentJobs API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.opGetEarthObservationJob">opGetEarthObservationJob</a></code> | <code>string[]</code> | IAM actions required for the GetEarthObservationJob API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.opGetRasterDataCollection">opGetRasterDataCollection</a></code> | <code>string[]</code> | IAM actions required for the GetRasterDataCollection API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.opGetTile">opGetTile</a></code> | <code>string[]</code> | IAM actions required for the GetTile API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.opGetVectorEnrichmentJob">opGetVectorEnrichmentJob</a></code> | <code>string[]</code> | IAM actions required for the GetVectorEnrichmentJob API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.SearchRasterDataCollection">SearchRasterDataCollection</a></code> | <code>string[]</code> | IAM actions required for the SearchRasterDataCollection API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.StartEarthObservationJob">StartEarthObservationJob</a></code> | <code>string[]</code> | IAM actions required for the StartEarthObservationJob API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.StartVectorEnrichmentJob">StartVectorEnrichmentJob</a></code> | <code>string[]</code> | IAM actions required for the StartVectorEnrichmentJob API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.StopEarthObservationJob">StopEarthObservationJob</a></code> | <code>string[]</code> | IAM actions required for the StopEarthObservationJob API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.StopVectorEnrichmentJob">StopVectorEnrichmentJob</a></code> | <code>string[]</code> | IAM actions required for the StopVectorEnrichmentJob API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `DeleteEarthObservationJob`<sup>Required</sup> <a name="DeleteEarthObservationJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.DeleteEarthObservationJob"></a>

```typescript
public readonly DeleteEarthObservationJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEarthObservationJob API call.

---

##### `DeleteVectorEnrichmentJob`<sup>Required</sup> <a name="DeleteVectorEnrichmentJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.DeleteVectorEnrichmentJob"></a>

```typescript
public readonly DeleteVectorEnrichmentJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVectorEnrichmentJob API call.

---

##### `ExportEarthObservationJob`<sup>Required</sup> <a name="ExportEarthObservationJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ExportEarthObservationJob"></a>

```typescript
public readonly ExportEarthObservationJob: string[];
```

- *Type:* string[]

IAM actions required for the ExportEarthObservationJob API call.

---

##### `ExportVectorEnrichmentJob`<sup>Required</sup> <a name="ExportVectorEnrichmentJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ExportVectorEnrichmentJob"></a>

```typescript
public readonly ExportVectorEnrichmentJob: string[];
```

- *Type:* string[]

IAM actions required for the ExportVectorEnrichmentJob API call.

---

##### `ListEarthObservationJobs`<sup>Required</sup> <a name="ListEarthObservationJobs" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ListEarthObservationJobs"></a>

```typescript
public readonly ListEarthObservationJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListEarthObservationJobs API call.

---

##### `ListRasterDataCollections`<sup>Required</sup> <a name="ListRasterDataCollections" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ListRasterDataCollections"></a>

```typescript
public readonly ListRasterDataCollections: string[];
```

- *Type:* string[]

IAM actions required for the ListRasterDataCollections API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVectorEnrichmentJobs`<sup>Required</sup> <a name="ListVectorEnrichmentJobs" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.ListVectorEnrichmentJobs"></a>

```typescript
public readonly ListVectorEnrichmentJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListVectorEnrichmentJobs API call.

---

##### `opGetEarthObservationJob`<sup>Required</sup> <a name="opGetEarthObservationJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.opGetEarthObservationJob"></a>

```typescript
public readonly opGetEarthObservationJob: string[];
```

- *Type:* string[]

IAM actions required for the GetEarthObservationJob API call.

---

##### `opGetRasterDataCollection`<sup>Required</sup> <a name="opGetRasterDataCollection" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.opGetRasterDataCollection"></a>

```typescript
public readonly opGetRasterDataCollection: string[];
```

- *Type:* string[]

IAM actions required for the GetRasterDataCollection API call.

---

##### `opGetTile`<sup>Required</sup> <a name="opGetTile" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.opGetTile"></a>

```typescript
public readonly opGetTile: string[];
```

- *Type:* string[]

IAM actions required for the GetTile API call.

---

##### `opGetVectorEnrichmentJob`<sup>Required</sup> <a name="opGetVectorEnrichmentJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.opGetVectorEnrichmentJob"></a>

```typescript
public readonly opGetVectorEnrichmentJob: string[];
```

- *Type:* string[]

IAM actions required for the GetVectorEnrichmentJob API call.

---

##### `SearchRasterDataCollection`<sup>Required</sup> <a name="SearchRasterDataCollection" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.SearchRasterDataCollection"></a>

```typescript
public readonly SearchRasterDataCollection: string[];
```

- *Type:* string[]

IAM actions required for the SearchRasterDataCollection API call.

---

##### `StartEarthObservationJob`<sup>Required</sup> <a name="StartEarthObservationJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.StartEarthObservationJob"></a>

```typescript
public readonly StartEarthObservationJob: string[];
```

- *Type:* string[]

IAM actions required for the StartEarthObservationJob API call.

---

##### `StartVectorEnrichmentJob`<sup>Required</sup> <a name="StartVectorEnrichmentJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.StartVectorEnrichmentJob"></a>

```typescript
public readonly StartVectorEnrichmentJob: string[];
```

- *Type:* string[]

IAM actions required for the StartVectorEnrichmentJob API call.

---

##### `StopEarthObservationJob`<sup>Required</sup> <a name="StopEarthObservationJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.StopEarthObservationJob"></a>

```typescript
public readonly StopEarthObservationJob: string[];
```

- *Type:* string[]

IAM actions required for the StopEarthObservationJob API call.

---

##### `StopVectorEnrichmentJob`<sup>Required</sup> <a name="StopVectorEnrichmentJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.StopVectorEnrichmentJob"></a>

```typescript
public readonly StopVectorEnrichmentJob: string[];
```

- *Type:* string[]

IAM actions required for the StopVectorEnrichmentJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### SagemakerGeospatialResources <a name="SagemakerGeospatialResources" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources"></a>

ARN builders, validators, and parsers for sagemaker-geospatial resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.Initializer"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

new sagemaker_geospatial.SagemakerGeospatialResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.earthObservationJob">earthObservationJob</a></code> | Builds an ARN for the EarthObservationJob resource. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.isValidEarthObservationJobArn">isValidEarthObservationJobArn</a></code> | Validates whether a string is a valid ARN for the EarthObservationJob resource. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.isValidRasterDataCollectionArn">isValidRasterDataCollectionArn</a></code> | Validates whether a string is a valid ARN for the RasterDataCollection resource. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.isValidVectorEnrichmentJobArn">isValidVectorEnrichmentJobArn</a></code> | Validates whether a string is a valid ARN for the VectorEnrichmentJob resource. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.parseEarthObservationJobArn">parseEarthObservationJobArn</a></code> | Parses a EarthObservationJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.parseRasterDataCollectionArn">parseRasterDataCollectionArn</a></code> | Parses a RasterDataCollection ARN into its components. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.parseVectorEnrichmentJobArn">parseVectorEnrichmentJobArn</a></code> | Parses a VectorEnrichmentJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.rasterDataCollection">rasterDataCollection</a></code> | Builds an ARN for the RasterDataCollection resource. |
| <code><a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.vectorEnrichmentJob">vectorEnrichmentJob</a></code> | Builds an ARN for the VectorEnrichmentJob resource. |

---

##### `earthObservationJob` <a name="earthObservationJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.earthObservationJob"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialResources.earthObservationJob(props: SagemakerGeospatialEarthObservationJobArnProps)
```

Builds an ARN for the EarthObservationJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.earthObservationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialEarthObservationJobArnProps">SagemakerGeospatialEarthObservationJobArnProps</a>

---

##### `isValidEarthObservationJobArn` <a name="isValidEarthObservationJobArn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.isValidEarthObservationJobArn"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialResources.isValidEarthObservationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the EarthObservationJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.isValidEarthObservationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRasterDataCollectionArn` <a name="isValidRasterDataCollectionArn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.isValidRasterDataCollectionArn"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialResources.isValidRasterDataCollectionArn(arn: string)
```

Validates whether a string is a valid ARN for the RasterDataCollection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.isValidRasterDataCollectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVectorEnrichmentJobArn` <a name="isValidVectorEnrichmentJobArn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.isValidVectorEnrichmentJobArn"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialResources.isValidVectorEnrichmentJobArn(arn: string)
```

Validates whether a string is a valid ARN for the VectorEnrichmentJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.isValidVectorEnrichmentJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEarthObservationJobArn` <a name="parseEarthObservationJobArn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.parseEarthObservationJobArn"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialResources.parseEarthObservationJobArn(arn: string)
```

Parses a EarthObservationJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.parseEarthObservationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRasterDataCollectionArn` <a name="parseRasterDataCollectionArn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.parseRasterDataCollectionArn"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialResources.parseRasterDataCollectionArn(arn: string)
```

Parses a RasterDataCollection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.parseRasterDataCollectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVectorEnrichmentJobArn` <a name="parseVectorEnrichmentJobArn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.parseVectorEnrichmentJobArn"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialResources.parseVectorEnrichmentJobArn(arn: string)
```

Parses a VectorEnrichmentJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.parseVectorEnrichmentJobArn.parameter.arn"></a>

- *Type:* string

---

##### `rasterDataCollection` <a name="rasterDataCollection" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.rasterDataCollection"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialResources.rasterDataCollection(props: SagemakerGeospatialRasterDataCollectionArnProps)
```

Builds an ARN for the RasterDataCollection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.rasterDataCollection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialRasterDataCollectionArnProps">SagemakerGeospatialRasterDataCollectionArnProps</a>

---

##### `vectorEnrichmentJob` <a name="vectorEnrichmentJob" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.vectorEnrichmentJob"></a>

```typescript
import { sagemaker_geospatial } from '@cdk_utils/iam'

sagemaker_geospatial.SagemakerGeospatialResources.vectorEnrichmentJob(props: SagemakerGeospatialVectorEnrichmentJobArnProps)
```

Builds an ARN for the VectorEnrichmentJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialResources.vectorEnrichmentJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sagemaker_geospatial.SagemakerGeospatialVectorEnrichmentJobArnProps">SagemakerGeospatialVectorEnrichmentJobArnProps</a>

---




