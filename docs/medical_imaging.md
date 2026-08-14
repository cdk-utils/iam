# `medical_imaging` Submodule <a name="`medical_imaging` Submodule" id="@cdk_utils/iam.medical_imaging"></a>


## Structs <a name="Structs" id="Structs"></a>

### MedicalImagingDatastoreArnComponents <a name="MedicalImagingDatastoreArnComponents" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnComponents"></a>

Parsed components of a datastore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnComponents.Initializer"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

const medicalImagingDatastoreArnComponents: medical_imaging.MedicalImagingDatastoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnComponents.property.datastoreId">datastoreId</a></code> | <code>string</code> | The DatastoreId component. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnComponents.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

The DatastoreId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MedicalImagingDatastoreArnProps <a name="MedicalImagingDatastoreArnProps" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnProps"></a>

Properties for building a datastore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnProps.Initializer"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

const medicalImagingDatastoreArnProps: medical_imaging.MedicalImagingDatastoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnProps.property.datastoreId">datastoreId</a></code> | <code>string</code> | The DatastoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnProps.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

The DatastoreId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MedicalImagingImagesetArnComponents <a name="MedicalImagingImagesetArnComponents" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents"></a>

Parsed components of a imageset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents.Initializer"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

const medicalImagingImagesetArnComponents: medical_imaging.MedicalImagingImagesetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents.property.datastoreId">datastoreId</a></code> | <code>string</code> | The DatastoreId component. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents.property.imageSetId">imageSetId</a></code> | <code>string</code> | The ImageSetId component. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

The DatastoreId component.

---

##### `imageSetId`<sup>Required</sup> <a name="imageSetId" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents.property.imageSetId"></a>

```typescript
public readonly imageSetId: string;
```

- *Type:* string

The ImageSetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MedicalImagingImagesetArnProps <a name="MedicalImagingImagesetArnProps" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps"></a>

Properties for building a imageset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps.Initializer"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

const medicalImagingImagesetArnProps: medical_imaging.MedicalImagingImagesetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps.property.datastoreId">datastoreId</a></code> | <code>string</code> | The DatastoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps.property.imageSetId">imageSetId</a></code> | <code>string</code> | The ImageSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

The DatastoreId component of the ARN.

---

##### `imageSetId`<sup>Required</sup> <a name="imageSetId" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps.property.imageSetId"></a>

```typescript
public readonly imageSetId: string;
```

- *Type:* string

The ImageSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MedicalImagingActions <a name="MedicalImagingActions" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions"></a>

IAM action constants for the medical-imaging service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.Initializer"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

new medical_imaging.MedicalImagingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDatastore">actionGetDatastore</a></code> | <code>string</code> | [Read] medical-imaging:GetDatastore. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMBulkdata">actionGetDICOMBulkdata</a></code> | <code>string</code> | [Read] medical-imaging:GetDICOMBulkdata. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMImportJob">actionGetDICOMImportJob</a></code> | <code>string</code> | [Read] medical-imaging:GetDICOMImportJob. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMInstance">actionGetDICOMInstance</a></code> | <code>string</code> | [Read] medical-imaging:GetDICOMInstance. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMInstanceFrames">actionGetDICOMInstanceFrames</a></code> | <code>string</code> | [Read] medical-imaging:GetDICOMInstanceFrames. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMInstanceMetadata">actionGetDICOMInstanceMetadata</a></code> | <code>string</code> | [Read] medical-imaging:GetDICOMInstanceMetadata. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMSeriesMetadata">actionGetDICOMSeriesMetadata</a></code> | <code>string</code> | [Read] medical-imaging:GetDICOMSeriesMetadata. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetImageFrame">actionGetImageFrame</a></code> | <code>string</code> | [Read] medical-imaging:GetImageFrame. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetImageSet">actionGetImageSet</a></code> | <code>string</code> | [Read] medical-imaging:GetImageSet. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetImageSetMetadata">actionGetImageSetMetadata</a></code> | <code>string</code> | [Read] medical-imaging:GetImageSetMetadata. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.CopyImageSet">CopyImageSet</a></code> | <code>string</code> | [Write] medical-imaging:CopyImageSet. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.CreateDatastore">CreateDatastore</a></code> | <code>string</code> | [Write] medical-imaging:CreateDatastore. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.DeleteDatastore">DeleteDatastore</a></code> | <code>string</code> | [Write] medical-imaging:DeleteDatastore. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.DeleteImageSet">DeleteImageSet</a></code> | <code>string</code> | [Write] medical-imaging:DeleteImageSet. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.ListDatastores">ListDatastores</a></code> | <code>string</code> | [List] medical-imaging:ListDatastores. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.ListDICOMImportJobs">ListDICOMImportJobs</a></code> | <code>string</code> | [List] medical-imaging:ListDICOMImportJobs. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.ListImageSetVersions">ListImageSetVersions</a></code> | <code>string</code> | [List] medical-imaging:ListImageSetVersions. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] medical-imaging:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.SearchDICOMInstances">SearchDICOMInstances</a></code> | <code>string</code> | [Read] medical-imaging:SearchDICOMInstances. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.SearchDICOMSeries">SearchDICOMSeries</a></code> | <code>string</code> | [Read] medical-imaging:SearchDICOMSeries. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.SearchDICOMStudies">SearchDICOMStudies</a></code> | <code>string</code> | [Read] medical-imaging:SearchDICOMStudies. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.SearchImageSets">SearchImageSets</a></code> | <code>string</code> | [Read] medical-imaging:SearchImageSets. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.StartDICOMImportJob">StartDICOMImportJob</a></code> | <code>string</code> | [Write] medical-imaging:StartDICOMImportJob. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.StoreDICOM">StoreDICOM</a></code> | <code>string</code> | [Write] medical-imaging:StoreDICOM. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.StoreDICOMStudy">StoreDICOMStudy</a></code> | <code>string</code> | [Write] medical-imaging:StoreDICOMStudy. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] medical-imaging:TagResource. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] medical-imaging:UntagResource. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.UpdateImageSetMetadata">UpdateImageSetMetadata</a></code> | <code>string</code> | [Write] medical-imaging:UpdateImageSetMetadata. |

---

##### `actionGetDatastore`<sup>Required</sup> <a name="actionGetDatastore" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDatastore"></a>

```typescript
public readonly actionGetDatastore: string;
```

- *Type:* string

[Read] medical-imaging:GetDatastore.

---

##### `actionGetDICOMBulkdata`<sup>Required</sup> <a name="actionGetDICOMBulkdata" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMBulkdata"></a>

```typescript
public readonly actionGetDICOMBulkdata: string;
```

- *Type:* string

[Read] medical-imaging:GetDICOMBulkdata.

---

##### `actionGetDICOMImportJob`<sup>Required</sup> <a name="actionGetDICOMImportJob" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMImportJob"></a>

```typescript
public readonly actionGetDICOMImportJob: string;
```

- *Type:* string

[Read] medical-imaging:GetDICOMImportJob.

---

##### `actionGetDICOMInstance`<sup>Required</sup> <a name="actionGetDICOMInstance" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMInstance"></a>

```typescript
public readonly actionGetDICOMInstance: string;
```

- *Type:* string

[Read] medical-imaging:GetDICOMInstance.

---

##### `actionGetDICOMInstanceFrames`<sup>Required</sup> <a name="actionGetDICOMInstanceFrames" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMInstanceFrames"></a>

```typescript
public readonly actionGetDICOMInstanceFrames: string;
```

- *Type:* string

[Read] medical-imaging:GetDICOMInstanceFrames.

---

##### `actionGetDICOMInstanceMetadata`<sup>Required</sup> <a name="actionGetDICOMInstanceMetadata" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMInstanceMetadata"></a>

```typescript
public readonly actionGetDICOMInstanceMetadata: string;
```

- *Type:* string

[Read] medical-imaging:GetDICOMInstanceMetadata.

---

##### `actionGetDICOMSeriesMetadata`<sup>Required</sup> <a name="actionGetDICOMSeriesMetadata" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetDICOMSeriesMetadata"></a>

```typescript
public readonly actionGetDICOMSeriesMetadata: string;
```

- *Type:* string

[Read] medical-imaging:GetDICOMSeriesMetadata.

---

##### `actionGetImageFrame`<sup>Required</sup> <a name="actionGetImageFrame" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetImageFrame"></a>

```typescript
public readonly actionGetImageFrame: string;
```

- *Type:* string

[Read] medical-imaging:GetImageFrame.

---

##### `actionGetImageSet`<sup>Required</sup> <a name="actionGetImageSet" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetImageSet"></a>

```typescript
public readonly actionGetImageSet: string;
```

- *Type:* string

[Read] medical-imaging:GetImageSet.

---

##### `actionGetImageSetMetadata`<sup>Required</sup> <a name="actionGetImageSetMetadata" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.actionGetImageSetMetadata"></a>

```typescript
public readonly actionGetImageSetMetadata: string;
```

- *Type:* string

[Read] medical-imaging:GetImageSetMetadata.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CopyImageSet`<sup>Required</sup> <a name="CopyImageSet" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.CopyImageSet"></a>

```typescript
public readonly CopyImageSet: string;
```

- *Type:* string

[Write] medical-imaging:CopyImageSet.

---

##### `CreateDatastore`<sup>Required</sup> <a name="CreateDatastore" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.CreateDatastore"></a>

```typescript
public readonly CreateDatastore: string;
```

- *Type:* string

[Write] medical-imaging:CreateDatastore.

---

##### `DeleteDatastore`<sup>Required</sup> <a name="DeleteDatastore" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.DeleteDatastore"></a>

```typescript
public readonly DeleteDatastore: string;
```

- *Type:* string

[Write] medical-imaging:DeleteDatastore.

---

##### `DeleteImageSet`<sup>Required</sup> <a name="DeleteImageSet" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.DeleteImageSet"></a>

```typescript
public readonly DeleteImageSet: string;
```

- *Type:* string

[Write] medical-imaging:DeleteImageSet.

---

##### `ListDatastores`<sup>Required</sup> <a name="ListDatastores" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.ListDatastores"></a>

```typescript
public readonly ListDatastores: string;
```

- *Type:* string

[List] medical-imaging:ListDatastores.

---

##### `ListDICOMImportJobs`<sup>Required</sup> <a name="ListDICOMImportJobs" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.ListDICOMImportJobs"></a>

```typescript
public readonly ListDICOMImportJobs: string;
```

- *Type:* string

[List] medical-imaging:ListDICOMImportJobs.

---

##### `ListImageSetVersions`<sup>Required</sup> <a name="ListImageSetVersions" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.ListImageSetVersions"></a>

```typescript
public readonly ListImageSetVersions: string;
```

- *Type:* string

[List] medical-imaging:ListImageSetVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] medical-imaging:ListTagsForResource.

---

##### `SearchDICOMInstances`<sup>Required</sup> <a name="SearchDICOMInstances" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.SearchDICOMInstances"></a>

```typescript
public readonly SearchDICOMInstances: string;
```

- *Type:* string

[Read] medical-imaging:SearchDICOMInstances.

---

##### `SearchDICOMSeries`<sup>Required</sup> <a name="SearchDICOMSeries" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.SearchDICOMSeries"></a>

```typescript
public readonly SearchDICOMSeries: string;
```

- *Type:* string

[Read] medical-imaging:SearchDICOMSeries.

---

##### `SearchDICOMStudies`<sup>Required</sup> <a name="SearchDICOMStudies" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.SearchDICOMStudies"></a>

```typescript
public readonly SearchDICOMStudies: string;
```

- *Type:* string

[Read] medical-imaging:SearchDICOMStudies.

---

##### `SearchImageSets`<sup>Required</sup> <a name="SearchImageSets" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.SearchImageSets"></a>

```typescript
public readonly SearchImageSets: string;
```

- *Type:* string

[Read] medical-imaging:SearchImageSets.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDICOMImportJob`<sup>Required</sup> <a name="StartDICOMImportJob" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.StartDICOMImportJob"></a>

```typescript
public readonly StartDICOMImportJob: string;
```

- *Type:* string

[Write] medical-imaging:StartDICOMImportJob.

---

##### `StoreDICOM`<sup>Required</sup> <a name="StoreDICOM" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.StoreDICOM"></a>

```typescript
public readonly StoreDICOM: string;
```

- *Type:* string

[Write] medical-imaging:StoreDICOM.

---

##### `StoreDICOMStudy`<sup>Required</sup> <a name="StoreDICOMStudy" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.StoreDICOMStudy"></a>

```typescript
public readonly StoreDICOMStudy: string;
```

- *Type:* string

[Write] medical-imaging:StoreDICOMStudy.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] medical-imaging:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] medical-imaging:UntagResource.

---

##### `UpdateImageSetMetadata`<sup>Required</sup> <a name="UpdateImageSetMetadata" id="@cdk_utils/iam.medical_imaging.MedicalImagingActions.property.UpdateImageSetMetadata"></a>

```typescript
public readonly UpdateImageSetMetadata: string;
```

- *Type:* string

[Write] medical-imaging:UpdateImageSetMetadata.

---

### MedicalImagingConditions <a name="MedicalImagingConditions" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions"></a>

Condition key constants and builders for medical-imaging.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.Initializer"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

new medical_imaging.MedicalImagingConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.seriesInstanceUid">seriesInstanceUid</a></code> | Generates a condition block for `medical-imaging:SeriesInstanceUID`. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.studyInstanceUid">studyInstanceUid</a></code> | Generates a condition block for `medical-imaging:StudyInstanceUID`. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.requestTag"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

medical_imaging.MedicalImagingConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.resourceTag"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

medical_imaging.MedicalImagingConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `seriesInstanceUid` <a name="seriesInstanceUid" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.seriesInstanceUid"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

medical_imaging.MedicalImagingConditions.seriesInstanceUid(value: string)
```

Generates a condition block for `medical-imaging:SeriesInstanceUID`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.seriesInstanceUid.parameter.value"></a>

- *Type:* string

---

##### `studyInstanceUid` <a name="studyInstanceUid" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.studyInstanceUid"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

medical_imaging.MedicalImagingConditions.studyInstanceUid(value: string)
```

Generates a condition block for `medical-imaging:StudyInstanceUID`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.studyInstanceUid.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.tagKeys"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

medical_imaging.MedicalImagingConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.actionGetDICOMBulkdataConditionKeys">actionGetDICOMBulkdataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDICOMBulkdata action. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.actionGetDICOMInstanceConditionKeys">actionGetDICOMInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDICOMInstance action. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.actionGetDICOMInstanceFramesConditionKeys">actionGetDICOMInstanceFramesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDICOMInstanceFrames action. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.actionGetDICOMInstanceMetadataConditionKeys">actionGetDICOMInstanceMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDICOMInstanceMetadata action. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.actionGetDICOMSeriesMetadataConditionKeys">actionGetDICOMSeriesMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDICOMSeriesMetadata action. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.CreateDatastoreConditionKeys">CreateDatastoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDatastore action. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.SearchDICOMInstancesConditionKeys">SearchDICOMInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchDICOMInstances action. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.SearchDICOMSeriesConditionKeys">SearchDICOMSeriesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchDICOMSeries action. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.SERIES_INSTANCE_UID">SERIES_INSTANCE_UID</a></code> | <code>string</code> | Condition key: medical-imaging:SeriesInstanceUID (String). |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.StoreDICOMStudyConditionKeys">StoreDICOMStudyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StoreDICOMStudy action. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.STUDY_INSTANCE_UID">STUDY_INSTANCE_UID</a></code> | <code>string</code> | Condition key: medical-imaging:StudyInstanceUID (String). |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetDICOMBulkdataConditionKeys`<sup>Required</sup> <a name="actionGetDICOMBulkdataConditionKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.actionGetDICOMBulkdataConditionKeys"></a>

```typescript
public readonly actionGetDICOMBulkdataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDICOMBulkdata action.

---

##### `actionGetDICOMInstanceConditionKeys`<sup>Required</sup> <a name="actionGetDICOMInstanceConditionKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.actionGetDICOMInstanceConditionKeys"></a>

```typescript
public readonly actionGetDICOMInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDICOMInstance action.

---

##### `actionGetDICOMInstanceFramesConditionKeys`<sup>Required</sup> <a name="actionGetDICOMInstanceFramesConditionKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.actionGetDICOMInstanceFramesConditionKeys"></a>

```typescript
public readonly actionGetDICOMInstanceFramesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDICOMInstanceFrames action.

---

##### `actionGetDICOMInstanceMetadataConditionKeys`<sup>Required</sup> <a name="actionGetDICOMInstanceMetadataConditionKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.actionGetDICOMInstanceMetadataConditionKeys"></a>

```typescript
public readonly actionGetDICOMInstanceMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDICOMInstanceMetadata action.

---

##### `actionGetDICOMSeriesMetadataConditionKeys`<sup>Required</sup> <a name="actionGetDICOMSeriesMetadataConditionKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.actionGetDICOMSeriesMetadataConditionKeys"></a>

```typescript
public readonly actionGetDICOMSeriesMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDICOMSeriesMetadata action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDatastoreConditionKeys`<sup>Required</sup> <a name="CreateDatastoreConditionKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.CreateDatastoreConditionKeys"></a>

```typescript
public readonly CreateDatastoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDatastore action.

---

##### `SearchDICOMInstancesConditionKeys`<sup>Required</sup> <a name="SearchDICOMInstancesConditionKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.SearchDICOMInstancesConditionKeys"></a>

```typescript
public readonly SearchDICOMInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchDICOMInstances action.

---

##### `SearchDICOMSeriesConditionKeys`<sup>Required</sup> <a name="SearchDICOMSeriesConditionKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.SearchDICOMSeriesConditionKeys"></a>

```typescript
public readonly SearchDICOMSeriesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchDICOMSeries action.

---

##### `SERIES_INSTANCE_UID`<sup>Required</sup> <a name="SERIES_INSTANCE_UID" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.SERIES_INSTANCE_UID"></a>

```typescript
public readonly SERIES_INSTANCE_UID: string;
```

- *Type:* string

Condition key: medical-imaging:SeriesInstanceUID (String).

---

##### `StoreDICOMStudyConditionKeys`<sup>Required</sup> <a name="StoreDICOMStudyConditionKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.StoreDICOMStudyConditionKeys"></a>

```typescript
public readonly StoreDICOMStudyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StoreDICOMStudy action.

---

##### `STUDY_INSTANCE_UID`<sup>Required</sup> <a name="STUDY_INSTANCE_UID" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.STUDY_INSTANCE_UID"></a>

```typescript
public readonly STUDY_INSTANCE_UID: string;
```

- *Type:* string

Condition key: medical-imaging:StudyInstanceUID (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.medical_imaging.MedicalImagingConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### MedicalImagingOperations <a name="MedicalImagingOperations" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations"></a>

API operation to required IAM actions mapping for medical-imaging.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.Initializer"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

new medical_imaging.MedicalImagingOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.CopyImageSet">CopyImageSet</a></code> | <code>string[]</code> | IAM actions required for the CopyImageSet API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.CreateDatastore">CreateDatastore</a></code> | <code>string[]</code> | IAM actions required for the CreateDatastore API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.DeleteDatastore">DeleteDatastore</a></code> | <code>string[]</code> | IAM actions required for the DeleteDatastore API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.DeleteImageSet">DeleteImageSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteImageSet API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.ListDatastores">ListDatastores</a></code> | <code>string[]</code> | IAM actions required for the ListDatastores API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.ListDICOMImportJobs">ListDICOMImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDICOMImportJobs API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.ListImageSetVersions">ListImageSetVersions</a></code> | <code>string[]</code> | IAM actions required for the ListImageSetVersions API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.opGetDatastore">opGetDatastore</a></code> | <code>string[]</code> | IAM actions required for the GetDatastore API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.opGetDICOMImportJob">opGetDICOMImportJob</a></code> | <code>string[]</code> | IAM actions required for the GetDICOMImportJob API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.opGetImageFrame">opGetImageFrame</a></code> | <code>string[]</code> | IAM actions required for the GetImageFrame API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.opGetImageSet">opGetImageSet</a></code> | <code>string[]</code> | IAM actions required for the GetImageSet API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.opGetImageSetMetadata">opGetImageSetMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetImageSetMetadata API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.SearchImageSets">SearchImageSets</a></code> | <code>string[]</code> | IAM actions required for the SearchImageSets API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.StartDICOMImportJob">StartDICOMImportJob</a></code> | <code>string[]</code> | IAM actions required for the StartDICOMImportJob API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.UpdateImageSetMetadata">UpdateImageSetMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateImageSetMetadata API call. |

---

##### `CopyImageSet`<sup>Required</sup> <a name="CopyImageSet" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.CopyImageSet"></a>

```typescript
public readonly CopyImageSet: string[];
```

- *Type:* string[]

IAM actions required for the CopyImageSet API call.

---

##### `CreateDatastore`<sup>Required</sup> <a name="CreateDatastore" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.CreateDatastore"></a>

```typescript
public readonly CreateDatastore: string[];
```

- *Type:* string[]

IAM actions required for the CreateDatastore API call.

---

##### `DeleteDatastore`<sup>Required</sup> <a name="DeleteDatastore" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.DeleteDatastore"></a>

```typescript
public readonly DeleteDatastore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDatastore API call.

---

##### `DeleteImageSet`<sup>Required</sup> <a name="DeleteImageSet" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.DeleteImageSet"></a>

```typescript
public readonly DeleteImageSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImageSet API call.

---

##### `ListDatastores`<sup>Required</sup> <a name="ListDatastores" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.ListDatastores"></a>

```typescript
public readonly ListDatastores: string[];
```

- *Type:* string[]

IAM actions required for the ListDatastores API call.

---

##### `ListDICOMImportJobs`<sup>Required</sup> <a name="ListDICOMImportJobs" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.ListDICOMImportJobs"></a>

```typescript
public readonly ListDICOMImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDICOMImportJobs API call.

---

##### `ListImageSetVersions`<sup>Required</sup> <a name="ListImageSetVersions" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.ListImageSetVersions"></a>

```typescript
public readonly ListImageSetVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListImageSetVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetDatastore`<sup>Required</sup> <a name="opGetDatastore" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.opGetDatastore"></a>

```typescript
public readonly opGetDatastore: string[];
```

- *Type:* string[]

IAM actions required for the GetDatastore API call.

---

##### `opGetDICOMImportJob`<sup>Required</sup> <a name="opGetDICOMImportJob" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.opGetDICOMImportJob"></a>

```typescript
public readonly opGetDICOMImportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetDICOMImportJob API call.

---

##### `opGetImageFrame`<sup>Required</sup> <a name="opGetImageFrame" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.opGetImageFrame"></a>

```typescript
public readonly opGetImageFrame: string[];
```

- *Type:* string[]

IAM actions required for the GetImageFrame API call.

---

##### `opGetImageSet`<sup>Required</sup> <a name="opGetImageSet" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.opGetImageSet"></a>

```typescript
public readonly opGetImageSet: string[];
```

- *Type:* string[]

IAM actions required for the GetImageSet API call.

---

##### `opGetImageSetMetadata`<sup>Required</sup> <a name="opGetImageSetMetadata" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.opGetImageSetMetadata"></a>

```typescript
public readonly opGetImageSetMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetImageSetMetadata API call.

---

##### `SearchImageSets`<sup>Required</sup> <a name="SearchImageSets" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.SearchImageSets"></a>

```typescript
public readonly SearchImageSets: string[];
```

- *Type:* string[]

IAM actions required for the SearchImageSets API call.

---

##### `StartDICOMImportJob`<sup>Required</sup> <a name="StartDICOMImportJob" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.StartDICOMImportJob"></a>

```typescript
public readonly StartDICOMImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartDICOMImportJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateImageSetMetadata`<sup>Required</sup> <a name="UpdateImageSetMetadata" id="@cdk_utils/iam.medical_imaging.MedicalImagingOperations.property.UpdateImageSetMetadata"></a>

```typescript
public readonly UpdateImageSetMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateImageSetMetadata API call.

---

### MedicalImagingResources <a name="MedicalImagingResources" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources"></a>

ARN builders, validators, and parsers for medical-imaging resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.Initializer"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

new medical_imaging.MedicalImagingResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingResources.datastore">datastore</a></code> | Builds an ARN for the datastore resource. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingResources.imageset">imageset</a></code> | Builds an ARN for the imageset resource. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingResources.isValidDatastoreArn">isValidDatastoreArn</a></code> | Validates whether a string is a valid ARN for the datastore resource. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingResources.isValidImagesetArn">isValidImagesetArn</a></code> | Validates whether a string is a valid ARN for the imageset resource. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingResources.parseDatastoreArn">parseDatastoreArn</a></code> | Parses a datastore ARN into its components. |
| <code><a href="#@cdk_utils/iam.medical_imaging.MedicalImagingResources.parseImagesetArn">parseImagesetArn</a></code> | Parses a imageset ARN into its components. |

---

##### `datastore` <a name="datastore" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.datastore"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

medical_imaging.MedicalImagingResources.datastore(props: MedicalImagingDatastoreArnProps)
```

Builds an ARN for the datastore resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.datastore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medical_imaging.MedicalImagingDatastoreArnProps">MedicalImagingDatastoreArnProps</a>

---

##### `imageset` <a name="imageset" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.imageset"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

medical_imaging.MedicalImagingResources.imageset(props: MedicalImagingImagesetArnProps)
```

Builds an ARN for the imageset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.imageset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medical_imaging.MedicalImagingImagesetArnProps">MedicalImagingImagesetArnProps</a>

---

##### `isValidDatastoreArn` <a name="isValidDatastoreArn" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.isValidDatastoreArn"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

medical_imaging.MedicalImagingResources.isValidDatastoreArn(arn: string)
```

Validates whether a string is a valid ARN for the datastore resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.isValidDatastoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImagesetArn` <a name="isValidImagesetArn" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.isValidImagesetArn"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

medical_imaging.MedicalImagingResources.isValidImagesetArn(arn: string)
```

Validates whether a string is a valid ARN for the imageset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.isValidImagesetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatastoreArn` <a name="parseDatastoreArn" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.parseDatastoreArn"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

medical_imaging.MedicalImagingResources.parseDatastoreArn(arn: string)
```

Parses a datastore ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.parseDatastoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImagesetArn` <a name="parseImagesetArn" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.parseImagesetArn"></a>

```typescript
import { medical_imaging } from '@cdk_utils/iam'

medical_imaging.MedicalImagingResources.parseImagesetArn(arn: string)
```

Parses a imageset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medical_imaging.MedicalImagingResources.parseImagesetArn.parameter.arn"></a>

- *Type:* string

---




