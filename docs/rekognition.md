# `rekognition` Submodule <a name="`rekognition` Submodule" id="@cdk_utils/iam.rekognition"></a>


## Structs <a name="Structs" id="Structs"></a>

### RekognitionCollectionArnComponents <a name="RekognitionCollectionArnComponents" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnComponents"></a>

Parsed components of a collection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnComponents.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

const rekognitionCollectionArnComponents: rekognition.RekognitionCollectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionCollectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionCollectionArnComponents.property.collectionId">collectionId</a></code> | <code>string</code> | The CollectionId component. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionCollectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionCollectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnComponents.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The CollectionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RekognitionCollectionArnProps <a name="RekognitionCollectionArnProps" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnProps"></a>

Properties for building a collection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnProps.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

const rekognitionCollectionArnProps: rekognition.RekognitionCollectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionCollectionArnProps.property.collectionId">collectionId</a></code> | <code>string</code> | The CollectionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionCollectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionCollectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionCollectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnProps.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The CollectionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rekognition.RekognitionCollectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RekognitionDatasetArnComponents <a name="RekognitionDatasetArnComponents" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

const rekognitionDatasetArnComponents: rekognition.RekognitionDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | The CreationTimestamp component. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.datasetType">datasetType</a></code> | <code>string</code> | The DatasetType component. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

The CreationTimestamp component.

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

The DatasetType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RekognitionDatasetArnProps <a name="RekognitionDatasetArnProps" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

const rekognitionDatasetArnProps: rekognition.RekognitionDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | The CreationTimestamp component of the ARN. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.datasetType">datasetType</a></code> | <code>string</code> | The DatasetType component of the ARN. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

The CreationTimestamp component of the ARN.

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

The DatasetType component of the ARN.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rekognition.RekognitionDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RekognitionProjectArnComponents <a name="RekognitionProjectArnComponents" id="@cdk_utils/iam.rekognition.RekognitionProjectArnComponents"></a>

Parsed components of a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rekognition.RekognitionProjectArnComponents.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

const rekognitionProjectArnComponents: rekognition.RekognitionProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectArnComponents.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | The CreationTimestamp component. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectArnComponents.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rekognition.RekognitionProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdk_utils/iam.rekognition.RekognitionProjectArnComponents.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

The CreationTimestamp component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rekognition.RekognitionProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.rekognition.RekognitionProjectArnComponents.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rekognition.RekognitionProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RekognitionProjectArnProps <a name="RekognitionProjectArnProps" id="@cdk_utils/iam.rekognition.RekognitionProjectArnProps"></a>

Properties for building a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rekognition.RekognitionProjectArnProps.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

const rekognitionProjectArnProps: rekognition.RekognitionProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectArnProps.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | The CreationTimestamp component of the ARN. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectArnProps.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdk_utils/iam.rekognition.RekognitionProjectArnProps.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

The CreationTimestamp component of the ARN.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.rekognition.RekognitionProjectArnProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rekognition.RekognitionProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rekognition.RekognitionProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rekognition.RekognitionProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RekognitionProjectversionArnComponents <a name="RekognitionProjectversionArnComponents" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents"></a>

Parsed components of a projectversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

const rekognitionProjectversionArnComponents: rekognition.RekognitionProjectversionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | The CreationTimestamp component. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.versionName">versionName</a></code> | <code>string</code> | The VersionName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

The CreationTimestamp component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnComponents.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

The VersionName component.

---

### RekognitionProjectversionArnProps <a name="RekognitionProjectversionArnProps" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps"></a>

Properties for building a projectversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

const rekognitionProjectversionArnProps: rekognition.RekognitionProjectversionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | The CreationTimestamp component of the ARN. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.versionName">versionName</a></code> | <code>string</code> | The VersionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

The CreationTimestamp component of the ARN.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component of the ARN.

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

The VersionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RekognitionStreamprocessorArnComponents <a name="RekognitionStreamprocessorArnComponents" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnComponents"></a>

Parsed components of a streamprocessor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnComponents.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

const rekognitionStreamprocessorArnComponents: rekognition.RekognitionStreamprocessorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnComponents.property.streamprocessorId">streamprocessorId</a></code> | <code>string</code> | The StreamprocessorId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamprocessorId`<sup>Required</sup> <a name="streamprocessorId" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnComponents.property.streamprocessorId"></a>

```typescript
public readonly streamprocessorId: string;
```

- *Type:* string

The StreamprocessorId component.

---

### RekognitionStreamprocessorArnProps <a name="RekognitionStreamprocessorArnProps" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnProps"></a>

Properties for building a streamprocessor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnProps.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

const rekognitionStreamprocessorArnProps: rekognition.RekognitionStreamprocessorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnProps.property.streamprocessorId">streamprocessorId</a></code> | <code>string</code> | The StreamprocessorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `streamprocessorId`<sup>Required</sup> <a name="streamprocessorId" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnProps.property.streamprocessorId"></a>

```typescript
public readonly streamprocessorId: string;
```

- *Type:* string

The StreamprocessorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RekognitionActions <a name="RekognitionActions" id="@cdk_utils/iam.rekognition.RekognitionActions"></a>

IAM action constants for the rekognition service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rekognition.RekognitionActions.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

new rekognition.RekognitionActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetCelebrityInfo">actionGetCelebrityInfo</a></code> | <code>string</code> | [Read] rekognition:GetCelebrityInfo. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetCelebrityRecognition">actionGetCelebrityRecognition</a></code> | <code>string</code> | [Read] rekognition:GetCelebrityRecognition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetContentModeration">actionGetContentModeration</a></code> | <code>string</code> | [Read] rekognition:GetContentModeration. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetFaceDetection">actionGetFaceDetection</a></code> | <code>string</code> | [Read] rekognition:GetFaceDetection. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetFaceLivenessSessionResults">actionGetFaceLivenessSessionResults</a></code> | <code>string</code> | [Read] rekognition:GetFaceLivenessSessionResults. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetFaceSearch">actionGetFaceSearch</a></code> | <code>string</code> | [Read] rekognition:GetFaceSearch. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetLabelDetection">actionGetLabelDetection</a></code> | <code>string</code> | [Read] rekognition:GetLabelDetection. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetMediaAnalysisJob">actionGetMediaAnalysisJob</a></code> | <code>string</code> | [Read] rekognition:GetMediaAnalysisJob. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetPersonTracking">actionGetPersonTracking</a></code> | <code>string</code> | [Read] rekognition:GetPersonTracking. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetSegmentDetection">actionGetSegmentDetection</a></code> | <code>string</code> | [Read] rekognition:GetSegmentDetection. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetTextDetection">actionGetTextDetection</a></code> | <code>string</code> | [Read] rekognition:GetTextDetection. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.AssociateFaces">AssociateFaces</a></code> | <code>string</code> | [Write] rekognition:AssociateFaces. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.CompareFaces">CompareFaces</a></code> | <code>string</code> | [Read] rekognition:CompareFaces. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.CopyProjectVersion">CopyProjectVersion</a></code> | <code>string</code> | [Write] rekognition:CopyProjectVersion. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.CreateCollection">CreateCollection</a></code> | <code>string</code> | [Write] rekognition:CreateCollection. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.CreateDataset">CreateDataset</a></code> | <code>string</code> | [Write] rekognition:CreateDataset. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.CreateFaceLivenessSession">CreateFaceLivenessSession</a></code> | <code>string</code> | [Write] rekognition:CreateFaceLivenessSession. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] rekognition:CreateProject. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.CreateProjectVersion">CreateProjectVersion</a></code> | <code>string</code> | [Write] rekognition:CreateProjectVersion. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.CreateStreamProcessor">CreateStreamProcessor</a></code> | <code>string</code> | [Write] rekognition:CreateStreamProcessor. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] rekognition:CreateUser. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteCollection">DeleteCollection</a></code> | <code>string</code> | [Write] rekognition:DeleteCollection. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteDataset">DeleteDataset</a></code> | <code>string</code> | [Write] rekognition:DeleteDataset. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteFaces">DeleteFaces</a></code> | <code>string</code> | [Write] rekognition:DeleteFaces. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteProject">DeleteProject</a></code> | <code>string</code> | [Write] rekognition:DeleteProject. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteProjectPolicy">DeleteProjectPolicy</a></code> | <code>string</code> | [Write] rekognition:DeleteProjectPolicy. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteProjectVersion">DeleteProjectVersion</a></code> | <code>string</code> | [Write] rekognition:DeleteProjectVersion. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteStreamProcessor">DeleteStreamProcessor</a></code> | <code>string</code> | [Write] rekognition:DeleteStreamProcessor. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] rekognition:DeleteUser. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DescribeCollection">DescribeCollection</a></code> | <code>string</code> | [Read] rekognition:DescribeCollection. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DescribeDataset">DescribeDataset</a></code> | <code>string</code> | [Read] rekognition:DescribeDataset. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DescribeProjects">DescribeProjects</a></code> | <code>string</code> | [Read] rekognition:DescribeProjects. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DescribeProjectVersions">DescribeProjectVersions</a></code> | <code>string</code> | [Read] rekognition:DescribeProjectVersions. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DescribeStreamProcessor">DescribeStreamProcessor</a></code> | <code>string</code> | [Read] rekognition:DescribeStreamProcessor. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DetectCustomLabels">DetectCustomLabels</a></code> | <code>string</code> | [Read] rekognition:DetectCustomLabels. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DetectFaces">DetectFaces</a></code> | <code>string</code> | [Read] rekognition:DetectFaces. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DetectLabels">DetectLabels</a></code> | <code>string</code> | [Read] rekognition:DetectLabels. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DetectModerationLabels">DetectModerationLabels</a></code> | <code>string</code> | [Read] rekognition:DetectModerationLabels. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DetectProtectiveEquipment">DetectProtectiveEquipment</a></code> | <code>string</code> | [Read] rekognition:DetectProtectiveEquipment. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DetectText">DetectText</a></code> | <code>string</code> | [Read] rekognition:DetectText. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DisassociateFaces">DisassociateFaces</a></code> | <code>string</code> | [Write] rekognition:DisassociateFaces. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.DistributeDatasetEntries">DistributeDatasetEntries</a></code> | <code>string</code> | [Write] rekognition:DistributeDatasetEntries. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.IndexFaces">IndexFaces</a></code> | <code>string</code> | [Write] rekognition:IndexFaces. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.ListCollections">ListCollections</a></code> | <code>string</code> | [Read] rekognition:ListCollections. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.ListDatasetEntries">ListDatasetEntries</a></code> | <code>string</code> | [Read] rekognition:ListDatasetEntries. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.ListDatasetLabels">ListDatasetLabels</a></code> | <code>string</code> | [Read] rekognition:ListDatasetLabels. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.ListFaces">ListFaces</a></code> | <code>string</code> | [Read] rekognition:ListFaces. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.ListMediaAnalysisJobs">ListMediaAnalysisJobs</a></code> | <code>string</code> | [Read] rekognition:ListMediaAnalysisJobs. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.ListProjectPolicies">ListProjectPolicies</a></code> | <code>string</code> | [Read] rekognition:ListProjectPolicies. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.ListStreamProcessors">ListStreamProcessors</a></code> | <code>string</code> | [List] rekognition:ListStreamProcessors. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] rekognition:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [Read] rekognition:ListUsers. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.PutProjectPolicy">PutProjectPolicy</a></code> | <code>string</code> | [Write] rekognition:PutProjectPolicy. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.RecognizeCelebrities">RecognizeCelebrities</a></code> | <code>string</code> | [Read] rekognition:RecognizeCelebrities. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.SearchFaces">SearchFaces</a></code> | <code>string</code> | [Read] rekognition:SearchFaces. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.SearchFacesByImage">SearchFacesByImage</a></code> | <code>string</code> | [Read] rekognition:SearchFacesByImage. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.SearchUsers">SearchUsers</a></code> | <code>string</code> | [Read] rekognition:SearchUsers. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.SearchUsersByImage">SearchUsersByImage</a></code> | <code>string</code> | [Read] rekognition:SearchUsersByImage. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartCelebrityRecognition">StartCelebrityRecognition</a></code> | <code>string</code> | [Write] rekognition:StartCelebrityRecognition. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartContentModeration">StartContentModeration</a></code> | <code>string</code> | [Write] rekognition:StartContentModeration. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartFaceDetection">StartFaceDetection</a></code> | <code>string</code> | [Write] rekognition:StartFaceDetection. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartFaceLivenessSession">StartFaceLivenessSession</a></code> | <code>string</code> | [Write] rekognition:StartFaceLivenessSession. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartFaceSearch">StartFaceSearch</a></code> | <code>string</code> | [Write] rekognition:StartFaceSearch. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartLabelDetection">StartLabelDetection</a></code> | <code>string</code> | [Write] rekognition:StartLabelDetection. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartMediaAnalysisJob">StartMediaAnalysisJob</a></code> | <code>string</code> | [Write] rekognition:StartMediaAnalysisJob. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartPersonTracking">StartPersonTracking</a></code> | <code>string</code> | [Write] rekognition:StartPersonTracking. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartProjectVersion">StartProjectVersion</a></code> | <code>string</code> | [Write] rekognition:StartProjectVersion. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartSegmentDetection">StartSegmentDetection</a></code> | <code>string</code> | [Write] rekognition:StartSegmentDetection. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartStreamProcessor">StartStreamProcessor</a></code> | <code>string</code> | [Write] rekognition:StartStreamProcessor. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StartTextDetection">StartTextDetection</a></code> | <code>string</code> | [Write] rekognition:StartTextDetection. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StopProjectVersion">StopProjectVersion</a></code> | <code>string</code> | [Write] rekognition:StopProjectVersion. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.StopStreamProcessor">StopStreamProcessor</a></code> | <code>string</code> | [Write] rekognition:StopStreamProcessor. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] rekognition:TagResource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] rekognition:UntagResource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.UpdateDatasetEntries">UpdateDatasetEntries</a></code> | <code>string</code> | [Write] rekognition:UpdateDatasetEntries. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionActions.property.UpdateStreamProcessor">UpdateStreamProcessor</a></code> | <code>string</code> | [Write] rekognition:UpdateStreamProcessor. |

---

##### `actionGetCelebrityInfo`<sup>Required</sup> <a name="actionGetCelebrityInfo" id="@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetCelebrityInfo"></a>

```typescript
public readonly actionGetCelebrityInfo: string;
```

- *Type:* string

[Read] rekognition:GetCelebrityInfo.

---

##### `actionGetCelebrityRecognition`<sup>Required</sup> <a name="actionGetCelebrityRecognition" id="@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetCelebrityRecognition"></a>

```typescript
public readonly actionGetCelebrityRecognition: string;
```

- *Type:* string

[Read] rekognition:GetCelebrityRecognition.

---

##### `actionGetContentModeration`<sup>Required</sup> <a name="actionGetContentModeration" id="@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetContentModeration"></a>

```typescript
public readonly actionGetContentModeration: string;
```

- *Type:* string

[Read] rekognition:GetContentModeration.

---

##### `actionGetFaceDetection`<sup>Required</sup> <a name="actionGetFaceDetection" id="@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetFaceDetection"></a>

```typescript
public readonly actionGetFaceDetection: string;
```

- *Type:* string

[Read] rekognition:GetFaceDetection.

---

##### `actionGetFaceLivenessSessionResults`<sup>Required</sup> <a name="actionGetFaceLivenessSessionResults" id="@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetFaceLivenessSessionResults"></a>

```typescript
public readonly actionGetFaceLivenessSessionResults: string;
```

- *Type:* string

[Read] rekognition:GetFaceLivenessSessionResults.

---

##### `actionGetFaceSearch`<sup>Required</sup> <a name="actionGetFaceSearch" id="@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetFaceSearch"></a>

```typescript
public readonly actionGetFaceSearch: string;
```

- *Type:* string

[Read] rekognition:GetFaceSearch.

---

##### `actionGetLabelDetection`<sup>Required</sup> <a name="actionGetLabelDetection" id="@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetLabelDetection"></a>

```typescript
public readonly actionGetLabelDetection: string;
```

- *Type:* string

[Read] rekognition:GetLabelDetection.

---

##### `actionGetMediaAnalysisJob`<sup>Required</sup> <a name="actionGetMediaAnalysisJob" id="@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetMediaAnalysisJob"></a>

```typescript
public readonly actionGetMediaAnalysisJob: string;
```

- *Type:* string

[Read] rekognition:GetMediaAnalysisJob.

---

##### `actionGetPersonTracking`<sup>Required</sup> <a name="actionGetPersonTracking" id="@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetPersonTracking"></a>

```typescript
public readonly actionGetPersonTracking: string;
```

- *Type:* string

[Read] rekognition:GetPersonTracking.

---

##### `actionGetSegmentDetection`<sup>Required</sup> <a name="actionGetSegmentDetection" id="@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetSegmentDetection"></a>

```typescript
public readonly actionGetSegmentDetection: string;
```

- *Type:* string

[Read] rekognition:GetSegmentDetection.

---

##### `actionGetTextDetection`<sup>Required</sup> <a name="actionGetTextDetection" id="@cdk_utils/iam.rekognition.RekognitionActions.property.actionGetTextDetection"></a>

```typescript
public readonly actionGetTextDetection: string;
```

- *Type:* string

[Read] rekognition:GetTextDetection.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.rekognition.RekognitionActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.rekognition.RekognitionActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.rekognition.RekognitionActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.rekognition.RekognitionActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.rekognition.RekognitionActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateFaces`<sup>Required</sup> <a name="AssociateFaces" id="@cdk_utils/iam.rekognition.RekognitionActions.property.AssociateFaces"></a>

```typescript
public readonly AssociateFaces: string;
```

- *Type:* string

[Write] rekognition:AssociateFaces.

---

##### `CompareFaces`<sup>Required</sup> <a name="CompareFaces" id="@cdk_utils/iam.rekognition.RekognitionActions.property.CompareFaces"></a>

```typescript
public readonly CompareFaces: string;
```

- *Type:* string

[Read] rekognition:CompareFaces.

---

##### `CopyProjectVersion`<sup>Required</sup> <a name="CopyProjectVersion" id="@cdk_utils/iam.rekognition.RekognitionActions.property.CopyProjectVersion"></a>

```typescript
public readonly CopyProjectVersion: string;
```

- *Type:* string

[Write] rekognition:CopyProjectVersion.

---

##### `CreateCollection`<sup>Required</sup> <a name="CreateCollection" id="@cdk_utils/iam.rekognition.RekognitionActions.property.CreateCollection"></a>

```typescript
public readonly CreateCollection: string;
```

- *Type:* string

[Write] rekognition:CreateCollection.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.rekognition.RekognitionActions.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string;
```

- *Type:* string

[Write] rekognition:CreateDataset.

---

##### `CreateFaceLivenessSession`<sup>Required</sup> <a name="CreateFaceLivenessSession" id="@cdk_utils/iam.rekognition.RekognitionActions.property.CreateFaceLivenessSession"></a>

```typescript
public readonly CreateFaceLivenessSession: string;
```

- *Type:* string

[Write] rekognition:CreateFaceLivenessSession.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.rekognition.RekognitionActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] rekognition:CreateProject.

---

##### `CreateProjectVersion`<sup>Required</sup> <a name="CreateProjectVersion" id="@cdk_utils/iam.rekognition.RekognitionActions.property.CreateProjectVersion"></a>

```typescript
public readonly CreateProjectVersion: string;
```

- *Type:* string

[Write] rekognition:CreateProjectVersion.

---

##### `CreateStreamProcessor`<sup>Required</sup> <a name="CreateStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionActions.property.CreateStreamProcessor"></a>

```typescript
public readonly CreateStreamProcessor: string;
```

- *Type:* string

[Write] rekognition:CreateStreamProcessor.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.rekognition.RekognitionActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] rekognition:CreateUser.

---

##### `DeleteCollection`<sup>Required</sup> <a name="DeleteCollection" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteCollection"></a>

```typescript
public readonly DeleteCollection: string;
```

- *Type:* string

[Write] rekognition:DeleteCollection.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string;
```

- *Type:* string

[Write] rekognition:DeleteDataset.

---

##### `DeleteFaces`<sup>Required</sup> <a name="DeleteFaces" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteFaces"></a>

```typescript
public readonly DeleteFaces: string;
```

- *Type:* string

[Write] rekognition:DeleteFaces.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string;
```

- *Type:* string

[Write] rekognition:DeleteProject.

---

##### `DeleteProjectPolicy`<sup>Required</sup> <a name="DeleteProjectPolicy" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteProjectPolicy"></a>

```typescript
public readonly DeleteProjectPolicy: string;
```

- *Type:* string

[Write] rekognition:DeleteProjectPolicy.

---

##### `DeleteProjectVersion`<sup>Required</sup> <a name="DeleteProjectVersion" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteProjectVersion"></a>

```typescript
public readonly DeleteProjectVersion: string;
```

- *Type:* string

[Write] rekognition:DeleteProjectVersion.

---

##### `DeleteStreamProcessor`<sup>Required</sup> <a name="DeleteStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteStreamProcessor"></a>

```typescript
public readonly DeleteStreamProcessor: string;
```

- *Type:* string

[Write] rekognition:DeleteStreamProcessor.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] rekognition:DeleteUser.

---

##### `DescribeCollection`<sup>Required</sup> <a name="DescribeCollection" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DescribeCollection"></a>

```typescript
public readonly DescribeCollection: string;
```

- *Type:* string

[Read] rekognition:DescribeCollection.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string;
```

- *Type:* string

[Read] rekognition:DescribeDataset.

---

##### `DescribeProjects`<sup>Required</sup> <a name="DescribeProjects" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DescribeProjects"></a>

```typescript
public readonly DescribeProjects: string;
```

- *Type:* string

[Read] rekognition:DescribeProjects.

---

##### `DescribeProjectVersions`<sup>Required</sup> <a name="DescribeProjectVersions" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DescribeProjectVersions"></a>

```typescript
public readonly DescribeProjectVersions: string;
```

- *Type:* string

[Read] rekognition:DescribeProjectVersions.

---

##### `DescribeStreamProcessor`<sup>Required</sup> <a name="DescribeStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DescribeStreamProcessor"></a>

```typescript
public readonly DescribeStreamProcessor: string;
```

- *Type:* string

[Read] rekognition:DescribeStreamProcessor.

---

##### `DetectCustomLabels`<sup>Required</sup> <a name="DetectCustomLabels" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DetectCustomLabels"></a>

```typescript
public readonly DetectCustomLabels: string;
```

- *Type:* string

[Read] rekognition:DetectCustomLabels.

---

##### `DetectFaces`<sup>Required</sup> <a name="DetectFaces" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DetectFaces"></a>

```typescript
public readonly DetectFaces: string;
```

- *Type:* string

[Read] rekognition:DetectFaces.

---

##### `DetectLabels`<sup>Required</sup> <a name="DetectLabels" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DetectLabels"></a>

```typescript
public readonly DetectLabels: string;
```

- *Type:* string

[Read] rekognition:DetectLabels.

---

##### `DetectModerationLabels`<sup>Required</sup> <a name="DetectModerationLabels" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DetectModerationLabels"></a>

```typescript
public readonly DetectModerationLabels: string;
```

- *Type:* string

[Read] rekognition:DetectModerationLabels.

---

##### `DetectProtectiveEquipment`<sup>Required</sup> <a name="DetectProtectiveEquipment" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DetectProtectiveEquipment"></a>

```typescript
public readonly DetectProtectiveEquipment: string;
```

- *Type:* string

[Read] rekognition:DetectProtectiveEquipment.

---

##### `DetectText`<sup>Required</sup> <a name="DetectText" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DetectText"></a>

```typescript
public readonly DetectText: string;
```

- *Type:* string

[Read] rekognition:DetectText.

---

##### `DisassociateFaces`<sup>Required</sup> <a name="DisassociateFaces" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DisassociateFaces"></a>

```typescript
public readonly DisassociateFaces: string;
```

- *Type:* string

[Write] rekognition:DisassociateFaces.

---

##### `DistributeDatasetEntries`<sup>Required</sup> <a name="DistributeDatasetEntries" id="@cdk_utils/iam.rekognition.RekognitionActions.property.DistributeDatasetEntries"></a>

```typescript
public readonly DistributeDatasetEntries: string;
```

- *Type:* string

[Write] rekognition:DistributeDatasetEntries.

---

##### `IndexFaces`<sup>Required</sup> <a name="IndexFaces" id="@cdk_utils/iam.rekognition.RekognitionActions.property.IndexFaces"></a>

```typescript
public readonly IndexFaces: string;
```

- *Type:* string

[Write] rekognition:IndexFaces.

---

##### `ListCollections`<sup>Required</sup> <a name="ListCollections" id="@cdk_utils/iam.rekognition.RekognitionActions.property.ListCollections"></a>

```typescript
public readonly ListCollections: string;
```

- *Type:* string

[Read] rekognition:ListCollections.

---

##### `ListDatasetEntries`<sup>Required</sup> <a name="ListDatasetEntries" id="@cdk_utils/iam.rekognition.RekognitionActions.property.ListDatasetEntries"></a>

```typescript
public readonly ListDatasetEntries: string;
```

- *Type:* string

[Read] rekognition:ListDatasetEntries.

---

##### `ListDatasetLabels`<sup>Required</sup> <a name="ListDatasetLabels" id="@cdk_utils/iam.rekognition.RekognitionActions.property.ListDatasetLabels"></a>

```typescript
public readonly ListDatasetLabels: string;
```

- *Type:* string

[Read] rekognition:ListDatasetLabels.

---

##### `ListFaces`<sup>Required</sup> <a name="ListFaces" id="@cdk_utils/iam.rekognition.RekognitionActions.property.ListFaces"></a>

```typescript
public readonly ListFaces: string;
```

- *Type:* string

[Read] rekognition:ListFaces.

---

##### `ListMediaAnalysisJobs`<sup>Required</sup> <a name="ListMediaAnalysisJobs" id="@cdk_utils/iam.rekognition.RekognitionActions.property.ListMediaAnalysisJobs"></a>

```typescript
public readonly ListMediaAnalysisJobs: string;
```

- *Type:* string

[Read] rekognition:ListMediaAnalysisJobs.

---

##### `ListProjectPolicies`<sup>Required</sup> <a name="ListProjectPolicies" id="@cdk_utils/iam.rekognition.RekognitionActions.property.ListProjectPolicies"></a>

```typescript
public readonly ListProjectPolicies: string;
```

- *Type:* string

[Read] rekognition:ListProjectPolicies.

---

##### `ListStreamProcessors`<sup>Required</sup> <a name="ListStreamProcessors" id="@cdk_utils/iam.rekognition.RekognitionActions.property.ListStreamProcessors"></a>

```typescript
public readonly ListStreamProcessors: string;
```

- *Type:* string

[List] rekognition:ListStreamProcessors.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rekognition.RekognitionActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] rekognition:ListTagsForResource.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.rekognition.RekognitionActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[Read] rekognition:ListUsers.

---

##### `PutProjectPolicy`<sup>Required</sup> <a name="PutProjectPolicy" id="@cdk_utils/iam.rekognition.RekognitionActions.property.PutProjectPolicy"></a>

```typescript
public readonly PutProjectPolicy: string;
```

- *Type:* string

[Write] rekognition:PutProjectPolicy.

---

##### `RecognizeCelebrities`<sup>Required</sup> <a name="RecognizeCelebrities" id="@cdk_utils/iam.rekognition.RekognitionActions.property.RecognizeCelebrities"></a>

```typescript
public readonly RecognizeCelebrities: string;
```

- *Type:* string

[Read] rekognition:RecognizeCelebrities.

---

##### `SearchFaces`<sup>Required</sup> <a name="SearchFaces" id="@cdk_utils/iam.rekognition.RekognitionActions.property.SearchFaces"></a>

```typescript
public readonly SearchFaces: string;
```

- *Type:* string

[Read] rekognition:SearchFaces.

---

##### `SearchFacesByImage`<sup>Required</sup> <a name="SearchFacesByImage" id="@cdk_utils/iam.rekognition.RekognitionActions.property.SearchFacesByImage"></a>

```typescript
public readonly SearchFacesByImage: string;
```

- *Type:* string

[Read] rekognition:SearchFacesByImage.

---

##### `SearchUsers`<sup>Required</sup> <a name="SearchUsers" id="@cdk_utils/iam.rekognition.RekognitionActions.property.SearchUsers"></a>

```typescript
public readonly SearchUsers: string;
```

- *Type:* string

[Read] rekognition:SearchUsers.

---

##### `SearchUsersByImage`<sup>Required</sup> <a name="SearchUsersByImage" id="@cdk_utils/iam.rekognition.RekognitionActions.property.SearchUsersByImage"></a>

```typescript
public readonly SearchUsersByImage: string;
```

- *Type:* string

[Read] rekognition:SearchUsersByImage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.rekognition.RekognitionActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCelebrityRecognition`<sup>Required</sup> <a name="StartCelebrityRecognition" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartCelebrityRecognition"></a>

```typescript
public readonly StartCelebrityRecognition: string;
```

- *Type:* string

[Write] rekognition:StartCelebrityRecognition.

---

##### `StartContentModeration`<sup>Required</sup> <a name="StartContentModeration" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartContentModeration"></a>

```typescript
public readonly StartContentModeration: string;
```

- *Type:* string

[Write] rekognition:StartContentModeration.

---

##### `StartFaceDetection`<sup>Required</sup> <a name="StartFaceDetection" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartFaceDetection"></a>

```typescript
public readonly StartFaceDetection: string;
```

- *Type:* string

[Write] rekognition:StartFaceDetection.

---

##### `StartFaceLivenessSession`<sup>Required</sup> <a name="StartFaceLivenessSession" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartFaceLivenessSession"></a>

```typescript
public readonly StartFaceLivenessSession: string;
```

- *Type:* string

[Write] rekognition:StartFaceLivenessSession.

---

##### `StartFaceSearch`<sup>Required</sup> <a name="StartFaceSearch" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartFaceSearch"></a>

```typescript
public readonly StartFaceSearch: string;
```

- *Type:* string

[Write] rekognition:StartFaceSearch.

---

##### `StartLabelDetection`<sup>Required</sup> <a name="StartLabelDetection" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartLabelDetection"></a>

```typescript
public readonly StartLabelDetection: string;
```

- *Type:* string

[Write] rekognition:StartLabelDetection.

---

##### `StartMediaAnalysisJob`<sup>Required</sup> <a name="StartMediaAnalysisJob" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartMediaAnalysisJob"></a>

```typescript
public readonly StartMediaAnalysisJob: string;
```

- *Type:* string

[Write] rekognition:StartMediaAnalysisJob.

---

##### `StartPersonTracking`<sup>Required</sup> <a name="StartPersonTracking" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartPersonTracking"></a>

```typescript
public readonly StartPersonTracking: string;
```

- *Type:* string

[Write] rekognition:StartPersonTracking.

---

##### `StartProjectVersion`<sup>Required</sup> <a name="StartProjectVersion" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartProjectVersion"></a>

```typescript
public readonly StartProjectVersion: string;
```

- *Type:* string

[Write] rekognition:StartProjectVersion.

---

##### `StartSegmentDetection`<sup>Required</sup> <a name="StartSegmentDetection" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartSegmentDetection"></a>

```typescript
public readonly StartSegmentDetection: string;
```

- *Type:* string

[Write] rekognition:StartSegmentDetection.

---

##### `StartStreamProcessor`<sup>Required</sup> <a name="StartStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartStreamProcessor"></a>

```typescript
public readonly StartStreamProcessor: string;
```

- *Type:* string

[Write] rekognition:StartStreamProcessor.

---

##### `StartTextDetection`<sup>Required</sup> <a name="StartTextDetection" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StartTextDetection"></a>

```typescript
public readonly StartTextDetection: string;
```

- *Type:* string

[Write] rekognition:StartTextDetection.

---

##### `StopProjectVersion`<sup>Required</sup> <a name="StopProjectVersion" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StopProjectVersion"></a>

```typescript
public readonly StopProjectVersion: string;
```

- *Type:* string

[Write] rekognition:StopProjectVersion.

---

##### `StopStreamProcessor`<sup>Required</sup> <a name="StopStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionActions.property.StopStreamProcessor"></a>

```typescript
public readonly StopStreamProcessor: string;
```

- *Type:* string

[Write] rekognition:StopStreamProcessor.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.rekognition.RekognitionActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] rekognition:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.rekognition.RekognitionActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] rekognition:UntagResource.

---

##### `UpdateDatasetEntries`<sup>Required</sup> <a name="UpdateDatasetEntries" id="@cdk_utils/iam.rekognition.RekognitionActions.property.UpdateDatasetEntries"></a>

```typescript
public readonly UpdateDatasetEntries: string;
```

- *Type:* string

[Write] rekognition:UpdateDatasetEntries.

---

##### `UpdateStreamProcessor`<sup>Required</sup> <a name="UpdateStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionActions.property.UpdateStreamProcessor"></a>

```typescript
public readonly UpdateStreamProcessor: string;
```

- *Type:* string

[Write] rekognition:UpdateStreamProcessor.

---

### RekognitionConditions <a name="RekognitionConditions" id="@cdk_utils/iam.rekognition.RekognitionConditions"></a>

Condition key constants and builders for rekognition.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rekognition.RekognitionConditions.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

new rekognition.RekognitionConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.rekognition.RekognitionConditions.requestTag"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rekognition.RekognitionConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.rekognition.RekognitionConditions.resourceTag"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rekognition.RekognitionConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.rekognition.RekognitionConditions.tagKeys"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.rekognition.RekognitionConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.property.CopyProjectVersionConditionKeys">CopyProjectVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyProjectVersion action. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.property.CreateCollectionConditionKeys">CreateCollectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCollection action. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.property.CreateDatasetConditionKeys">CreateDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataset action. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.property.CreateProjectConditionKeys">CreateProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProject action. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.property.CreateProjectVersionConditionKeys">CreateProjectVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProjectVersion action. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.property.CreateStreamProcessorConditionKeys">CreateStreamProcessorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStreamProcessor action. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.rekognition.RekognitionConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.rekognition.RekognitionConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.rekognition.RekognitionConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CopyProjectVersionConditionKeys`<sup>Required</sup> <a name="CopyProjectVersionConditionKeys" id="@cdk_utils/iam.rekognition.RekognitionConditions.property.CopyProjectVersionConditionKeys"></a>

```typescript
public readonly CopyProjectVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyProjectVersion action.

---

##### `CreateCollectionConditionKeys`<sup>Required</sup> <a name="CreateCollectionConditionKeys" id="@cdk_utils/iam.rekognition.RekognitionConditions.property.CreateCollectionConditionKeys"></a>

```typescript
public readonly CreateCollectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCollection action.

---

##### `CreateDatasetConditionKeys`<sup>Required</sup> <a name="CreateDatasetConditionKeys" id="@cdk_utils/iam.rekognition.RekognitionConditions.property.CreateDatasetConditionKeys"></a>

```typescript
public readonly CreateDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataset action.

---

##### `CreateProjectConditionKeys`<sup>Required</sup> <a name="CreateProjectConditionKeys" id="@cdk_utils/iam.rekognition.RekognitionConditions.property.CreateProjectConditionKeys"></a>

```typescript
public readonly CreateProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProject action.

---

##### `CreateProjectVersionConditionKeys`<sup>Required</sup> <a name="CreateProjectVersionConditionKeys" id="@cdk_utils/iam.rekognition.RekognitionConditions.property.CreateProjectVersionConditionKeys"></a>

```typescript
public readonly CreateProjectVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProjectVersion action.

---

##### `CreateStreamProcessorConditionKeys`<sup>Required</sup> <a name="CreateStreamProcessorConditionKeys" id="@cdk_utils/iam.rekognition.RekognitionConditions.property.CreateStreamProcessorConditionKeys"></a>

```typescript
public readonly CreateStreamProcessorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStreamProcessor action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.rekognition.RekognitionConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.rekognition.RekognitionConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### RekognitionOperations <a name="RekognitionOperations" id="@cdk_utils/iam.rekognition.RekognitionOperations"></a>

API operation to required IAM actions mapping for rekognition.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rekognition.RekognitionOperations.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

new rekognition.RekognitionOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.AssociateFaces">AssociateFaces</a></code> | <code>string[]</code> | IAM actions required for the AssociateFaces API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.CompareFaces">CompareFaces</a></code> | <code>string[]</code> | IAM actions required for the CompareFaces API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.CopyProjectVersion">CopyProjectVersion</a></code> | <code>string[]</code> | IAM actions required for the CopyProjectVersion API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateCollection">CreateCollection</a></code> | <code>string[]</code> | IAM actions required for the CreateCollection API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateDataset">CreateDataset</a></code> | <code>string[]</code> | IAM actions required for the CreateDataset API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateFaceLivenessSession">CreateFaceLivenessSession</a></code> | <code>string[]</code> | IAM actions required for the CreateFaceLivenessSession API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateProject">CreateProject</a></code> | <code>string[]</code> | IAM actions required for the CreateProject API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateProjectVersion">CreateProjectVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateProjectVersion API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateStreamProcessor">CreateStreamProcessor</a></code> | <code>string[]</code> | IAM actions required for the CreateStreamProcessor API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteCollection">DeleteCollection</a></code> | <code>string[]</code> | IAM actions required for the DeleteCollection API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteDataset">DeleteDataset</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataset API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteFaces">DeleteFaces</a></code> | <code>string[]</code> | IAM actions required for the DeleteFaces API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteProject">DeleteProject</a></code> | <code>string[]</code> | IAM actions required for the DeleteProject API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteProjectPolicy">DeleteProjectPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteProjectPolicy API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteProjectVersion">DeleteProjectVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteProjectVersion API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteStreamProcessor">DeleteStreamProcessor</a></code> | <code>string[]</code> | IAM actions required for the DeleteStreamProcessor API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DescribeCollection">DescribeCollection</a></code> | <code>string[]</code> | IAM actions required for the DescribeCollection API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DescribeDataset">DescribeDataset</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataset API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DescribeProjects">DescribeProjects</a></code> | <code>string[]</code> | IAM actions required for the DescribeProjects API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DescribeProjectVersions">DescribeProjectVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeProjectVersions API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DescribeStreamProcessor">DescribeStreamProcessor</a></code> | <code>string[]</code> | IAM actions required for the DescribeStreamProcessor API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectCustomLabels">DetectCustomLabels</a></code> | <code>string[]</code> | IAM actions required for the DetectCustomLabels API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectFaces">DetectFaces</a></code> | <code>string[]</code> | IAM actions required for the DetectFaces API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectLabels">DetectLabels</a></code> | <code>string[]</code> | IAM actions required for the DetectLabels API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectModerationLabels">DetectModerationLabels</a></code> | <code>string[]</code> | IAM actions required for the DetectModerationLabels API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectProtectiveEquipment">DetectProtectiveEquipment</a></code> | <code>string[]</code> | IAM actions required for the DetectProtectiveEquipment API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectText">DetectText</a></code> | <code>string[]</code> | IAM actions required for the DetectText API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DisassociateFaces">DisassociateFaces</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFaces API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.DistributeDatasetEntries">DistributeDatasetEntries</a></code> | <code>string[]</code> | IAM actions required for the DistributeDatasetEntries API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.IndexFaces">IndexFaces</a></code> | <code>string[]</code> | IAM actions required for the IndexFaces API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.ListCollections">ListCollections</a></code> | <code>string[]</code> | IAM actions required for the ListCollections API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.ListDatasetEntries">ListDatasetEntries</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetEntries API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.ListDatasetLabels">ListDatasetLabels</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetLabels API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.ListFaces">ListFaces</a></code> | <code>string[]</code> | IAM actions required for the ListFaces API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.ListMediaAnalysisJobs">ListMediaAnalysisJobs</a></code> | <code>string[]</code> | IAM actions required for the ListMediaAnalysisJobs API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.ListProjectPolicies">ListProjectPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListProjectPolicies API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.ListStreamProcessors">ListStreamProcessors</a></code> | <code>string[]</code> | IAM actions required for the ListStreamProcessors API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetCelebrityInfo">opGetCelebrityInfo</a></code> | <code>string[]</code> | IAM actions required for the GetCelebrityInfo API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetCelebrityRecognition">opGetCelebrityRecognition</a></code> | <code>string[]</code> | IAM actions required for the GetCelebrityRecognition API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetContentModeration">opGetContentModeration</a></code> | <code>string[]</code> | IAM actions required for the GetContentModeration API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetFaceDetection">opGetFaceDetection</a></code> | <code>string[]</code> | IAM actions required for the GetFaceDetection API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetFaceLivenessSessionResults">opGetFaceLivenessSessionResults</a></code> | <code>string[]</code> | IAM actions required for the GetFaceLivenessSessionResults API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetFaceSearch">opGetFaceSearch</a></code> | <code>string[]</code> | IAM actions required for the GetFaceSearch API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetLabelDetection">opGetLabelDetection</a></code> | <code>string[]</code> | IAM actions required for the GetLabelDetection API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetMediaAnalysisJob">opGetMediaAnalysisJob</a></code> | <code>string[]</code> | IAM actions required for the GetMediaAnalysisJob API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetPersonTracking">opGetPersonTracking</a></code> | <code>string[]</code> | IAM actions required for the GetPersonTracking API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetSegmentDetection">opGetSegmentDetection</a></code> | <code>string[]</code> | IAM actions required for the GetSegmentDetection API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetTextDetection">opGetTextDetection</a></code> | <code>string[]</code> | IAM actions required for the GetTextDetection API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.PutProjectPolicy">PutProjectPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutProjectPolicy API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.RecognizeCelebrities">RecognizeCelebrities</a></code> | <code>string[]</code> | IAM actions required for the RecognizeCelebrities API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.SearchFaces">SearchFaces</a></code> | <code>string[]</code> | IAM actions required for the SearchFaces API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.SearchFacesByImage">SearchFacesByImage</a></code> | <code>string[]</code> | IAM actions required for the SearchFacesByImage API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.SearchUsers">SearchUsers</a></code> | <code>string[]</code> | IAM actions required for the SearchUsers API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.SearchUsersByImage">SearchUsersByImage</a></code> | <code>string[]</code> | IAM actions required for the SearchUsersByImage API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StartCelebrityRecognition">StartCelebrityRecognition</a></code> | <code>string[]</code> | IAM actions required for the StartCelebrityRecognition API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StartContentModeration">StartContentModeration</a></code> | <code>string[]</code> | IAM actions required for the StartContentModeration API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StartFaceDetection">StartFaceDetection</a></code> | <code>string[]</code> | IAM actions required for the StartFaceDetection API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StartFaceSearch">StartFaceSearch</a></code> | <code>string[]</code> | IAM actions required for the StartFaceSearch API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StartLabelDetection">StartLabelDetection</a></code> | <code>string[]</code> | IAM actions required for the StartLabelDetection API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StartMediaAnalysisJob">StartMediaAnalysisJob</a></code> | <code>string[]</code> | IAM actions required for the StartMediaAnalysisJob API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StartPersonTracking">StartPersonTracking</a></code> | <code>string[]</code> | IAM actions required for the StartPersonTracking API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StartProjectVersion">StartProjectVersion</a></code> | <code>string[]</code> | IAM actions required for the StartProjectVersion API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StartSegmentDetection">StartSegmentDetection</a></code> | <code>string[]</code> | IAM actions required for the StartSegmentDetection API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StartStreamProcessor">StartStreamProcessor</a></code> | <code>string[]</code> | IAM actions required for the StartStreamProcessor API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StartTextDetection">StartTextDetection</a></code> | <code>string[]</code> | IAM actions required for the StartTextDetection API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StopProjectVersion">StopProjectVersion</a></code> | <code>string[]</code> | IAM actions required for the StopProjectVersion API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.StopStreamProcessor">StopStreamProcessor</a></code> | <code>string[]</code> | IAM actions required for the StopStreamProcessor API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.UpdateDatasetEntries">UpdateDatasetEntries</a></code> | <code>string[]</code> | IAM actions required for the UpdateDatasetEntries API call. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionOperations.property.UpdateStreamProcessor">UpdateStreamProcessor</a></code> | <code>string[]</code> | IAM actions required for the UpdateStreamProcessor API call. |

---

##### `AssociateFaces`<sup>Required</sup> <a name="AssociateFaces" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.AssociateFaces"></a>

```typescript
public readonly AssociateFaces: string[];
```

- *Type:* string[]

IAM actions required for the AssociateFaces API call.

---

##### `CompareFaces`<sup>Required</sup> <a name="CompareFaces" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.CompareFaces"></a>

```typescript
public readonly CompareFaces: string[];
```

- *Type:* string[]

IAM actions required for the CompareFaces API call.

---

##### `CopyProjectVersion`<sup>Required</sup> <a name="CopyProjectVersion" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.CopyProjectVersion"></a>

```typescript
public readonly CopyProjectVersion: string[];
```

- *Type:* string[]

IAM actions required for the CopyProjectVersion API call.

---

##### `CreateCollection`<sup>Required</sup> <a name="CreateCollection" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateCollection"></a>

```typescript
public readonly CreateCollection: string[];
```

- *Type:* string[]

IAM actions required for the CreateCollection API call.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataset API call.

---

##### `CreateFaceLivenessSession`<sup>Required</sup> <a name="CreateFaceLivenessSession" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateFaceLivenessSession"></a>

```typescript
public readonly CreateFaceLivenessSession: string[];
```

- *Type:* string[]

IAM actions required for the CreateFaceLivenessSession API call.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateProject"></a>

```typescript
public readonly CreateProject: string[];
```

- *Type:* string[]

IAM actions required for the CreateProject API call.

---

##### `CreateProjectVersion`<sup>Required</sup> <a name="CreateProjectVersion" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateProjectVersion"></a>

```typescript
public readonly CreateProjectVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateProjectVersion API call.

---

##### `CreateStreamProcessor`<sup>Required</sup> <a name="CreateStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateStreamProcessor"></a>

```typescript
public readonly CreateStreamProcessor: string[];
```

- *Type:* string[]

IAM actions required for the CreateStreamProcessor API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `DeleteCollection`<sup>Required</sup> <a name="DeleteCollection" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteCollection"></a>

```typescript
public readonly DeleteCollection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCollection API call.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataset API call.

---

##### `DeleteFaces`<sup>Required</sup> <a name="DeleteFaces" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteFaces"></a>

```typescript
public readonly DeleteFaces: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFaces API call.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProject API call.

---

##### `DeleteProjectPolicy`<sup>Required</sup> <a name="DeleteProjectPolicy" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteProjectPolicy"></a>

```typescript
public readonly DeleteProjectPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProjectPolicy API call.

---

##### `DeleteProjectVersion`<sup>Required</sup> <a name="DeleteProjectVersion" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteProjectVersion"></a>

```typescript
public readonly DeleteProjectVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProjectVersion API call.

---

##### `DeleteStreamProcessor`<sup>Required</sup> <a name="DeleteStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteStreamProcessor"></a>

```typescript
public readonly DeleteStreamProcessor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStreamProcessor API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DescribeCollection`<sup>Required</sup> <a name="DescribeCollection" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DescribeCollection"></a>

```typescript
public readonly DescribeCollection: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCollection API call.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataset API call.

---

##### `DescribeProjects`<sup>Required</sup> <a name="DescribeProjects" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DescribeProjects"></a>

```typescript
public readonly DescribeProjects: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProjects API call.

---

##### `DescribeProjectVersions`<sup>Required</sup> <a name="DescribeProjectVersions" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DescribeProjectVersions"></a>

```typescript
public readonly DescribeProjectVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProjectVersions API call.

---

##### `DescribeStreamProcessor`<sup>Required</sup> <a name="DescribeStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DescribeStreamProcessor"></a>

```typescript
public readonly DescribeStreamProcessor: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStreamProcessor API call.

---

##### `DetectCustomLabels`<sup>Required</sup> <a name="DetectCustomLabels" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectCustomLabels"></a>

```typescript
public readonly DetectCustomLabels: string[];
```

- *Type:* string[]

IAM actions required for the DetectCustomLabels API call.

---

##### `DetectFaces`<sup>Required</sup> <a name="DetectFaces" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectFaces"></a>

```typescript
public readonly DetectFaces: string[];
```

- *Type:* string[]

IAM actions required for the DetectFaces API call.

---

##### `DetectLabels`<sup>Required</sup> <a name="DetectLabels" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectLabels"></a>

```typescript
public readonly DetectLabels: string[];
```

- *Type:* string[]

IAM actions required for the DetectLabels API call.

---

##### `DetectModerationLabels`<sup>Required</sup> <a name="DetectModerationLabels" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectModerationLabels"></a>

```typescript
public readonly DetectModerationLabels: string[];
```

- *Type:* string[]

IAM actions required for the DetectModerationLabels API call.

---

##### `DetectProtectiveEquipment`<sup>Required</sup> <a name="DetectProtectiveEquipment" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectProtectiveEquipment"></a>

```typescript
public readonly DetectProtectiveEquipment: string[];
```

- *Type:* string[]

IAM actions required for the DetectProtectiveEquipment API call.

---

##### `DetectText`<sup>Required</sup> <a name="DetectText" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DetectText"></a>

```typescript
public readonly DetectText: string[];
```

- *Type:* string[]

IAM actions required for the DetectText API call.

---

##### `DisassociateFaces`<sup>Required</sup> <a name="DisassociateFaces" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DisassociateFaces"></a>

```typescript
public readonly DisassociateFaces: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFaces API call.

---

##### `DistributeDatasetEntries`<sup>Required</sup> <a name="DistributeDatasetEntries" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.DistributeDatasetEntries"></a>

```typescript
public readonly DistributeDatasetEntries: string[];
```

- *Type:* string[]

IAM actions required for the DistributeDatasetEntries API call.

---

##### `IndexFaces`<sup>Required</sup> <a name="IndexFaces" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.IndexFaces"></a>

```typescript
public readonly IndexFaces: string[];
```

- *Type:* string[]

IAM actions required for the IndexFaces API call.

---

##### `ListCollections`<sup>Required</sup> <a name="ListCollections" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.ListCollections"></a>

```typescript
public readonly ListCollections: string[];
```

- *Type:* string[]

IAM actions required for the ListCollections API call.

---

##### `ListDatasetEntries`<sup>Required</sup> <a name="ListDatasetEntries" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.ListDatasetEntries"></a>

```typescript
public readonly ListDatasetEntries: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetEntries API call.

---

##### `ListDatasetLabels`<sup>Required</sup> <a name="ListDatasetLabels" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.ListDatasetLabels"></a>

```typescript
public readonly ListDatasetLabels: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetLabels API call.

---

##### `ListFaces`<sup>Required</sup> <a name="ListFaces" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.ListFaces"></a>

```typescript
public readonly ListFaces: string[];
```

- *Type:* string[]

IAM actions required for the ListFaces API call.

---

##### `ListMediaAnalysisJobs`<sup>Required</sup> <a name="ListMediaAnalysisJobs" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.ListMediaAnalysisJobs"></a>

```typescript
public readonly ListMediaAnalysisJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListMediaAnalysisJobs API call.

---

##### `ListProjectPolicies`<sup>Required</sup> <a name="ListProjectPolicies" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.ListProjectPolicies"></a>

```typescript
public readonly ListProjectPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListProjectPolicies API call.

---

##### `ListStreamProcessors`<sup>Required</sup> <a name="ListStreamProcessors" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.ListStreamProcessors"></a>

```typescript
public readonly ListStreamProcessors: string[];
```

- *Type:* string[]

IAM actions required for the ListStreamProcessors API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `opGetCelebrityInfo`<sup>Required</sup> <a name="opGetCelebrityInfo" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetCelebrityInfo"></a>

```typescript
public readonly opGetCelebrityInfo: string[];
```

- *Type:* string[]

IAM actions required for the GetCelebrityInfo API call.

---

##### `opGetCelebrityRecognition`<sup>Required</sup> <a name="opGetCelebrityRecognition" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetCelebrityRecognition"></a>

```typescript
public readonly opGetCelebrityRecognition: string[];
```

- *Type:* string[]

IAM actions required for the GetCelebrityRecognition API call.

---

##### `opGetContentModeration`<sup>Required</sup> <a name="opGetContentModeration" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetContentModeration"></a>

```typescript
public readonly opGetContentModeration: string[];
```

- *Type:* string[]

IAM actions required for the GetContentModeration API call.

---

##### `opGetFaceDetection`<sup>Required</sup> <a name="opGetFaceDetection" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetFaceDetection"></a>

```typescript
public readonly opGetFaceDetection: string[];
```

- *Type:* string[]

IAM actions required for the GetFaceDetection API call.

---

##### `opGetFaceLivenessSessionResults`<sup>Required</sup> <a name="opGetFaceLivenessSessionResults" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetFaceLivenessSessionResults"></a>

```typescript
public readonly opGetFaceLivenessSessionResults: string[];
```

- *Type:* string[]

IAM actions required for the GetFaceLivenessSessionResults API call.

---

##### `opGetFaceSearch`<sup>Required</sup> <a name="opGetFaceSearch" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetFaceSearch"></a>

```typescript
public readonly opGetFaceSearch: string[];
```

- *Type:* string[]

IAM actions required for the GetFaceSearch API call.

---

##### `opGetLabelDetection`<sup>Required</sup> <a name="opGetLabelDetection" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetLabelDetection"></a>

```typescript
public readonly opGetLabelDetection: string[];
```

- *Type:* string[]

IAM actions required for the GetLabelDetection API call.

---

##### `opGetMediaAnalysisJob`<sup>Required</sup> <a name="opGetMediaAnalysisJob" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetMediaAnalysisJob"></a>

```typescript
public readonly opGetMediaAnalysisJob: string[];
```

- *Type:* string[]

IAM actions required for the GetMediaAnalysisJob API call.

---

##### `opGetPersonTracking`<sup>Required</sup> <a name="opGetPersonTracking" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetPersonTracking"></a>

```typescript
public readonly opGetPersonTracking: string[];
```

- *Type:* string[]

IAM actions required for the GetPersonTracking API call.

---

##### `opGetSegmentDetection`<sup>Required</sup> <a name="opGetSegmentDetection" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetSegmentDetection"></a>

```typescript
public readonly opGetSegmentDetection: string[];
```

- *Type:* string[]

IAM actions required for the GetSegmentDetection API call.

---

##### `opGetTextDetection`<sup>Required</sup> <a name="opGetTextDetection" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.opGetTextDetection"></a>

```typescript
public readonly opGetTextDetection: string[];
```

- *Type:* string[]

IAM actions required for the GetTextDetection API call.

---

##### `PutProjectPolicy`<sup>Required</sup> <a name="PutProjectPolicy" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.PutProjectPolicy"></a>

```typescript
public readonly PutProjectPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutProjectPolicy API call.

---

##### `RecognizeCelebrities`<sup>Required</sup> <a name="RecognizeCelebrities" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.RecognizeCelebrities"></a>

```typescript
public readonly RecognizeCelebrities: string[];
```

- *Type:* string[]

IAM actions required for the RecognizeCelebrities API call.

---

##### `SearchFaces`<sup>Required</sup> <a name="SearchFaces" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.SearchFaces"></a>

```typescript
public readonly SearchFaces: string[];
```

- *Type:* string[]

IAM actions required for the SearchFaces API call.

---

##### `SearchFacesByImage`<sup>Required</sup> <a name="SearchFacesByImage" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.SearchFacesByImage"></a>

```typescript
public readonly SearchFacesByImage: string[];
```

- *Type:* string[]

IAM actions required for the SearchFacesByImage API call.

---

##### `SearchUsers`<sup>Required</sup> <a name="SearchUsers" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.SearchUsers"></a>

```typescript
public readonly SearchUsers: string[];
```

- *Type:* string[]

IAM actions required for the SearchUsers API call.

---

##### `SearchUsersByImage`<sup>Required</sup> <a name="SearchUsersByImage" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.SearchUsersByImage"></a>

```typescript
public readonly SearchUsersByImage: string[];
```

- *Type:* string[]

IAM actions required for the SearchUsersByImage API call.

---

##### `StartCelebrityRecognition`<sup>Required</sup> <a name="StartCelebrityRecognition" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StartCelebrityRecognition"></a>

```typescript
public readonly StartCelebrityRecognition: string[];
```

- *Type:* string[]

IAM actions required for the StartCelebrityRecognition API call.

---

##### `StartContentModeration`<sup>Required</sup> <a name="StartContentModeration" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StartContentModeration"></a>

```typescript
public readonly StartContentModeration: string[];
```

- *Type:* string[]

IAM actions required for the StartContentModeration API call.

---

##### `StartFaceDetection`<sup>Required</sup> <a name="StartFaceDetection" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StartFaceDetection"></a>

```typescript
public readonly StartFaceDetection: string[];
```

- *Type:* string[]

IAM actions required for the StartFaceDetection API call.

---

##### `StartFaceSearch`<sup>Required</sup> <a name="StartFaceSearch" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StartFaceSearch"></a>

```typescript
public readonly StartFaceSearch: string[];
```

- *Type:* string[]

IAM actions required for the StartFaceSearch API call.

---

##### `StartLabelDetection`<sup>Required</sup> <a name="StartLabelDetection" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StartLabelDetection"></a>

```typescript
public readonly StartLabelDetection: string[];
```

- *Type:* string[]

IAM actions required for the StartLabelDetection API call.

---

##### `StartMediaAnalysisJob`<sup>Required</sup> <a name="StartMediaAnalysisJob" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StartMediaAnalysisJob"></a>

```typescript
public readonly StartMediaAnalysisJob: string[];
```

- *Type:* string[]

IAM actions required for the StartMediaAnalysisJob API call.

---

##### `StartPersonTracking`<sup>Required</sup> <a name="StartPersonTracking" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StartPersonTracking"></a>

```typescript
public readonly StartPersonTracking: string[];
```

- *Type:* string[]

IAM actions required for the StartPersonTracking API call.

---

##### `StartProjectVersion`<sup>Required</sup> <a name="StartProjectVersion" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StartProjectVersion"></a>

```typescript
public readonly StartProjectVersion: string[];
```

- *Type:* string[]

IAM actions required for the StartProjectVersion API call.

---

##### `StartSegmentDetection`<sup>Required</sup> <a name="StartSegmentDetection" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StartSegmentDetection"></a>

```typescript
public readonly StartSegmentDetection: string[];
```

- *Type:* string[]

IAM actions required for the StartSegmentDetection API call.

---

##### `StartStreamProcessor`<sup>Required</sup> <a name="StartStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StartStreamProcessor"></a>

```typescript
public readonly StartStreamProcessor: string[];
```

- *Type:* string[]

IAM actions required for the StartStreamProcessor API call.

---

##### `StartTextDetection`<sup>Required</sup> <a name="StartTextDetection" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StartTextDetection"></a>

```typescript
public readonly StartTextDetection: string[];
```

- *Type:* string[]

IAM actions required for the StartTextDetection API call.

---

##### `StopProjectVersion`<sup>Required</sup> <a name="StopProjectVersion" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StopProjectVersion"></a>

```typescript
public readonly StopProjectVersion: string[];
```

- *Type:* string[]

IAM actions required for the StopProjectVersion API call.

---

##### `StopStreamProcessor`<sup>Required</sup> <a name="StopStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.StopStreamProcessor"></a>

```typescript
public readonly StopStreamProcessor: string[];
```

- *Type:* string[]

IAM actions required for the StopStreamProcessor API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDatasetEntries`<sup>Required</sup> <a name="UpdateDatasetEntries" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.UpdateDatasetEntries"></a>

```typescript
public readonly UpdateDatasetEntries: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDatasetEntries API call.

---

##### `UpdateStreamProcessor`<sup>Required</sup> <a name="UpdateStreamProcessor" id="@cdk_utils/iam.rekognition.RekognitionOperations.property.UpdateStreamProcessor"></a>

```typescript
public readonly UpdateStreamProcessor: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStreamProcessor API call.

---

### RekognitionResources <a name="RekognitionResources" id="@cdk_utils/iam.rekognition.RekognitionResources"></a>

ARN builders, validators, and parsers for rekognition resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rekognition.RekognitionResources.Initializer"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

new rekognition.RekognitionResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.collection">collection</a></code> | Builds an ARN for the collection resource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.isValidCollectionArn">isValidCollectionArn</a></code> | Validates whether a string is a valid ARN for the collection resource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.isValidProjectversionArn">isValidProjectversionArn</a></code> | Validates whether a string is a valid ARN for the projectversion resource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.isValidStreamprocessorArn">isValidStreamprocessorArn</a></code> | Validates whether a string is a valid ARN for the streamprocessor resource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.parseCollectionArn">parseCollectionArn</a></code> | Parses a collection ARN into its components. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.parseProjectArn">parseProjectArn</a></code> | Parses a project ARN into its components. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.parseProjectversionArn">parseProjectversionArn</a></code> | Parses a projectversion ARN into its components. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.parseStreamprocessorArn">parseStreamprocessorArn</a></code> | Parses a streamprocessor ARN into its components. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.project">project</a></code> | Builds an ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.projectversion">projectversion</a></code> | Builds an ARN for the projectversion resource. |
| <code><a href="#@cdk_utils/iam.rekognition.RekognitionResources.streamprocessor">streamprocessor</a></code> | Builds an ARN for the streamprocessor resource. |

---

##### `collection` <a name="collection" id="@cdk_utils/iam.rekognition.RekognitionResources.collection"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.collection(props: RekognitionCollectionArnProps)
```

Builds an ARN for the collection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rekognition.RekognitionResources.collection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rekognition.RekognitionCollectionArnProps">RekognitionCollectionArnProps</a>

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.rekognition.RekognitionResources.dataset"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.dataset(props: RekognitionDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rekognition.RekognitionResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rekognition.RekognitionDatasetArnProps">RekognitionDatasetArnProps</a>

---

##### `isValidCollectionArn` <a name="isValidCollectionArn" id="@cdk_utils/iam.rekognition.RekognitionResources.isValidCollectionArn"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.isValidCollectionArn(arn: string)
```

Validates whether a string is a valid ARN for the collection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rekognition.RekognitionResources.isValidCollectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.rekognition.RekognitionResources.isValidDatasetArn"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rekognition.RekognitionResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.rekognition.RekognitionResources.isValidProjectArn"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rekognition.RekognitionResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProjectversionArn` <a name="isValidProjectversionArn" id="@cdk_utils/iam.rekognition.RekognitionResources.isValidProjectversionArn"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.isValidProjectversionArn(arn: string)
```

Validates whether a string is a valid ARN for the projectversion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rekognition.RekognitionResources.isValidProjectversionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamprocessorArn` <a name="isValidStreamprocessorArn" id="@cdk_utils/iam.rekognition.RekognitionResources.isValidStreamprocessorArn"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.isValidStreamprocessorArn(arn: string)
```

Validates whether a string is a valid ARN for the streamprocessor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rekognition.RekognitionResources.isValidStreamprocessorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCollectionArn` <a name="parseCollectionArn" id="@cdk_utils/iam.rekognition.RekognitionResources.parseCollectionArn"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.parseCollectionArn(arn: string)
```

Parses a collection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rekognition.RekognitionResources.parseCollectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.rekognition.RekognitionResources.parseDatasetArn"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rekognition.RekognitionResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.rekognition.RekognitionResources.parseProjectArn"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.parseProjectArn(arn: string)
```

Parses a project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rekognition.RekognitionResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectversionArn` <a name="parseProjectversionArn" id="@cdk_utils/iam.rekognition.RekognitionResources.parseProjectversionArn"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.parseProjectversionArn(arn: string)
```

Parses a projectversion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rekognition.RekognitionResources.parseProjectversionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamprocessorArn` <a name="parseStreamprocessorArn" id="@cdk_utils/iam.rekognition.RekognitionResources.parseStreamprocessorArn"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.parseStreamprocessorArn(arn: string)
```

Parses a streamprocessor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rekognition.RekognitionResources.parseStreamprocessorArn.parameter.arn"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.rekognition.RekognitionResources.project"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.project(props: RekognitionProjectArnProps)
```

Builds an ARN for the project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rekognition.RekognitionResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rekognition.RekognitionProjectArnProps">RekognitionProjectArnProps</a>

---

##### `projectversion` <a name="projectversion" id="@cdk_utils/iam.rekognition.RekognitionResources.projectversion"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.projectversion(props: RekognitionProjectversionArnProps)
```

Builds an ARN for the projectversion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rekognition.RekognitionResources.projectversion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rekognition.RekognitionProjectversionArnProps">RekognitionProjectversionArnProps</a>

---

##### `streamprocessor` <a name="streamprocessor" id="@cdk_utils/iam.rekognition.RekognitionResources.streamprocessor"></a>

```typescript
import { rekognition } from '@cdk_utils/iam'

rekognition.RekognitionResources.streamprocessor(props: RekognitionStreamprocessorArnProps)
```

Builds an ARN for the streamprocessor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rekognition.RekognitionResources.streamprocessor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rekognition.RekognitionStreamprocessorArnProps">RekognitionStreamprocessorArnProps</a>

---




