# `dataexchange` Submodule <a name="`dataexchange` Submodule" id="@cdk_utils/iam.dataexchange"></a>


## Structs <a name="Structs" id="Structs"></a>

### DataexchangeAssetsArnComponents <a name="DataexchangeAssetsArnComponents" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents"></a>

Parsed components of a assets ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeAssetsArnComponents: dataexchange.DataexchangeAssetsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.assetId">assetId</a></code> | <code>string</code> | The AssetId component. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.revisionId">revisionId</a></code> | <code>string</code> | The RevisionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

The AssetId component.

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnComponents.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

The RevisionId component.

---

### DataexchangeAssetsArnProps <a name="DataexchangeAssetsArnProps" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps"></a>

Properties for building a assets ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeAssetsArnProps: dataexchange.DataexchangeAssetsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.assetId">assetId</a></code> | <code>string</code> | The AssetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.revisionId">revisionId</a></code> | <code>string</code> | The RevisionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

The AssetId component of the ARN.

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component of the ARN.

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

The RevisionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DataexchangeDataGrantsArnComponents <a name="DataexchangeDataGrantsArnComponents" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnComponents"></a>

Parsed components of a data-grants ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnComponents.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeDataGrantsArnComponents: dataexchange.DataexchangeDataGrantsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnComponents.property.dataGrantId">dataGrantId</a></code> | <code>string</code> | The DataGrantId component. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataGrantId`<sup>Required</sup> <a name="dataGrantId" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnComponents.property.dataGrantId"></a>

```typescript
public readonly dataGrantId: string;
```

- *Type:* string

The DataGrantId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DataexchangeDataGrantsArnProps <a name="DataexchangeDataGrantsArnProps" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnProps"></a>

Properties for building a data-grants ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnProps.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeDataGrantsArnProps: dataexchange.DataexchangeDataGrantsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnProps.property.dataGrantId">dataGrantId</a></code> | <code>string</code> | The DataGrantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataGrantId`<sup>Required</sup> <a name="dataGrantId" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnProps.property.dataGrantId"></a>

```typescript
public readonly dataGrantId: string;
```

- *Type:* string

The DataGrantId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DataexchangeDataSetsArnComponents <a name="DataexchangeDataSetsArnComponents" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnComponents"></a>

Parsed components of a data-sets ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnComponents.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeDataSetsArnComponents: dataexchange.DataexchangeDataSetsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnComponents.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnComponents.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DataexchangeDataSetsArnProps <a name="DataexchangeDataSetsArnProps" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnProps"></a>

Properties for building a data-sets ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnProps.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeDataSetsArnProps: dataexchange.DataexchangeDataSetsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnProps.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnProps.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DataexchangeEntitledAssetsArnComponents <a name="DataexchangeEntitledAssetsArnComponents" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents"></a>

Parsed components of a entitled-assets ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeEntitledAssetsArnComponents: dataexchange.DataexchangeEntitledAssetsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.assetId">assetId</a></code> | <code>string</code> | The AssetId component. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.revisionId">revisionId</a></code> | <code>string</code> | The RevisionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

The AssetId component.

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnComponents.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

The RevisionId component.

---

### DataexchangeEntitledAssetsArnProps <a name="DataexchangeEntitledAssetsArnProps" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps"></a>

Properties for building a entitled-assets ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeEntitledAssetsArnProps: dataexchange.DataexchangeEntitledAssetsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.assetId">assetId</a></code> | <code>string</code> | The AssetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.revisionId">revisionId</a></code> | <code>string</code> | The RevisionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

The AssetId component of the ARN.

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component of the ARN.

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

The RevisionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DataexchangeEntitledDataSetsArnComponents <a name="DataexchangeEntitledDataSetsArnComponents" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnComponents"></a>

Parsed components of a entitled-data-sets ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnComponents.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeEntitledDataSetsArnComponents: dataexchange.DataexchangeEntitledDataSetsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnComponents.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnComponents.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DataexchangeEntitledDataSetsArnProps <a name="DataexchangeEntitledDataSetsArnProps" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnProps"></a>

Properties for building a entitled-data-sets ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnProps.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeEntitledDataSetsArnProps: dataexchange.DataexchangeEntitledDataSetsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnProps.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnProps.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DataexchangeEntitledRevisionsArnComponents <a name="DataexchangeEntitledRevisionsArnComponents" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents"></a>

Parsed components of a entitled-revisions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeEntitledRevisionsArnComponents: dataexchange.DataexchangeEntitledRevisionsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents.property.revisionId">revisionId</a></code> | <code>string</code> | The RevisionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnComponents.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

The RevisionId component.

---

### DataexchangeEntitledRevisionsArnProps <a name="DataexchangeEntitledRevisionsArnProps" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps"></a>

Properties for building a entitled-revisions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeEntitledRevisionsArnProps: dataexchange.DataexchangeEntitledRevisionsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps.property.revisionId">revisionId</a></code> | <code>string</code> | The RevisionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component of the ARN.

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

The RevisionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DataexchangeEventActionsArnComponents <a name="DataexchangeEventActionsArnComponents" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnComponents"></a>

Parsed components of a event-actions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnComponents.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeEventActionsArnComponents: dataexchange.DataexchangeEventActionsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnComponents.property.eventActionId">eventActionId</a></code> | <code>string</code> | The EventActionId component. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventActionId`<sup>Required</sup> <a name="eventActionId" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnComponents.property.eventActionId"></a>

```typescript
public readonly eventActionId: string;
```

- *Type:* string

The EventActionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DataexchangeEventActionsArnProps <a name="DataexchangeEventActionsArnProps" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnProps"></a>

Properties for building a event-actions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnProps.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeEventActionsArnProps: dataexchange.DataexchangeEventActionsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnProps.property.eventActionId">eventActionId</a></code> | <code>string</code> | The EventActionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventActionId`<sup>Required</sup> <a name="eventActionId" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnProps.property.eventActionId"></a>

```typescript
public readonly eventActionId: string;
```

- *Type:* string

The EventActionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DataexchangeJobsArnComponents <a name="DataexchangeJobsArnComponents" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnComponents"></a>

Parsed components of a jobs ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnComponents.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeJobsArnComponents: dataexchange.DataexchangeJobsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeJobsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeJobsArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeJobsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeJobsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DataexchangeJobsArnProps <a name="DataexchangeJobsArnProps" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnProps"></a>

Properties for building a jobs ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnProps.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeJobsArnProps: dataexchange.DataexchangeJobsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeJobsArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeJobsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeJobsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeJobsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeJobsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DataexchangeRevisionsArnComponents <a name="DataexchangeRevisionsArnComponents" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents"></a>

Parsed components of a revisions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeRevisionsArnComponents: dataexchange.DataexchangeRevisionsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents.property.revisionId">revisionId</a></code> | <code>string</code> | The RevisionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnComponents.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

The RevisionId component.

---

### DataexchangeRevisionsArnProps <a name="DataexchangeRevisionsArnProps" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps"></a>

Properties for building a revisions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

const dataexchangeRevisionsArnProps: dataexchange.DataexchangeRevisionsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps.property.dataSetId">dataSetId</a></code> | <code>string</code> | The DataSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps.property.revisionId">revisionId</a></code> | <code>string</code> | The RevisionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The DataSetId component of the ARN.

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

The RevisionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DataexchangeActions <a name="DataexchangeActions" id="@cdk_utils/iam.dataexchange.DataexchangeActions"></a>

IAM action constants for the dataexchange service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dataexchange.DataexchangeActions.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

new dataexchange.DataexchangeActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.AcceptDataGrant">AcceptDataGrant</a></code> | <code>string</code> | [Write] dataexchange:AcceptDataGrant. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetAsset">actionGetAsset</a></code> | <code>string</code> | [Read] dataexchange:GetAsset. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetDataGrant">actionGetDataGrant</a></code> | <code>string</code> | [Read] dataexchange:GetDataGrant. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetDataSet">actionGetDataSet</a></code> | <code>string</code> | [Read] dataexchange:GetDataSet. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetEventAction">actionGetEventAction</a></code> | <code>string</code> | [Read] dataexchange:GetEventAction. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetJob">actionGetJob</a></code> | <code>string</code> | [Read] dataexchange:GetJob. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetReceivedDataGrant">actionGetReceivedDataGrant</a></code> | <code>string</code> | [Read] dataexchange:GetReceivedDataGrant. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetRevision">actionGetRevision</a></code> | <code>string</code> | [Read] dataexchange:GetRevision. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.CancelJob">CancelJob</a></code> | <code>string</code> | [Write] dataexchange:CancelJob. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateAsset">CreateAsset</a></code> | <code>string</code> | [Write] dataexchange:CreateAsset. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateDataGrant">CreateDataGrant</a></code> | <code>string</code> | [Write] dataexchange:CreateDataGrant. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateDataSet">CreateDataSet</a></code> | <code>string</code> | [Write] dataexchange:CreateDataSet. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateEventAction">CreateEventAction</a></code> | <code>string</code> | [Write] dataexchange:CreateEventAction. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateJob">CreateJob</a></code> | <code>string</code> | [Write] dataexchange:CreateJob. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateRevision">CreateRevision</a></code> | <code>string</code> | [Write] dataexchange:CreateRevision. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.DeleteAsset">DeleteAsset</a></code> | <code>string</code> | [Write] dataexchange:DeleteAsset. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.DeleteDataGrant">DeleteDataGrant</a></code> | <code>string</code> | [Write] dataexchange:DeleteDataGrant. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.DeleteDataSet">DeleteDataSet</a></code> | <code>string</code> | [Write] dataexchange:DeleteDataSet. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.DeleteEventAction">DeleteEventAction</a></code> | <code>string</code> | [Write] dataexchange:DeleteEventAction. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.DeleteRevision">DeleteRevision</a></code> | <code>string</code> | [Write] dataexchange:DeleteRevision. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListDataGrants">ListDataGrants</a></code> | <code>string</code> | [List] dataexchange:ListDataGrants. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListDataSetRevisions">ListDataSetRevisions</a></code> | <code>string</code> | [List] dataexchange:ListDataSetRevisions. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListDataSets">ListDataSets</a></code> | <code>string</code> | [List] dataexchange:ListDataSets. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListEventActions">ListEventActions</a></code> | <code>string</code> | [List] dataexchange:ListEventActions. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] dataexchange:ListJobs. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListReceivedDataGrants">ListReceivedDataGrants</a></code> | <code>string</code> | [List] dataexchange:ListReceivedDataGrants. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListRevisionAssets">ListRevisionAssets</a></code> | <code>string</code> | [List] dataexchange:ListRevisionAssets. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] dataexchange:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.PublishDataSet">PublishDataSet</a></code> | <code>string</code> | [Write] dataexchange:PublishDataSet. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.PublishToDataGrant">PublishToDataGrant</a></code> | <code>string</code> | [Write] dataexchange:PublishToDataGrant. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.RevokeRevision">RevokeRevision</a></code> | <code>string</code> | [Write] dataexchange:RevokeRevision. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.SendApiAsset">SendApiAsset</a></code> | <code>string</code> | [Write] dataexchange:SendApiAsset. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.SendDataSetNotification">SendDataSetNotification</a></code> | <code>string</code> | [Write] dataexchange:SendDataSetNotification. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.StartJob">StartJob</a></code> | <code>string</code> | [Write] dataexchange:StartJob. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] dataexchange:TagResource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] dataexchange:UntagResource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.UpdateAsset">UpdateAsset</a></code> | <code>string</code> | [Write] dataexchange:UpdateAsset. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.UpdateDataSet">UpdateDataSet</a></code> | <code>string</code> | [Write] dataexchange:UpdateDataSet. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.UpdateEventAction">UpdateEventAction</a></code> | <code>string</code> | [Write] dataexchange:UpdateEventAction. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeActions.property.UpdateRevision">UpdateRevision</a></code> | <code>string</code> | [Write] dataexchange:UpdateRevision. |

---

##### `AcceptDataGrant`<sup>Required</sup> <a name="AcceptDataGrant" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.AcceptDataGrant"></a>

```typescript
public readonly AcceptDataGrant: string;
```

- *Type:* string

[Write] dataexchange:AcceptDataGrant.

---

##### `actionGetAsset`<sup>Required</sup> <a name="actionGetAsset" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetAsset"></a>

```typescript
public readonly actionGetAsset: string;
```

- *Type:* string

[Read] dataexchange:GetAsset.

---

##### `actionGetDataGrant`<sup>Required</sup> <a name="actionGetDataGrant" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetDataGrant"></a>

```typescript
public readonly actionGetDataGrant: string;
```

- *Type:* string

[Read] dataexchange:GetDataGrant.

---

##### `actionGetDataSet`<sup>Required</sup> <a name="actionGetDataSet" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetDataSet"></a>

```typescript
public readonly actionGetDataSet: string;
```

- *Type:* string

[Read] dataexchange:GetDataSet.

---

##### `actionGetEventAction`<sup>Required</sup> <a name="actionGetEventAction" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetEventAction"></a>

```typescript
public readonly actionGetEventAction: string;
```

- *Type:* string

[Read] dataexchange:GetEventAction.

---

##### `actionGetJob`<sup>Required</sup> <a name="actionGetJob" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetJob"></a>

```typescript
public readonly actionGetJob: string;
```

- *Type:* string

[Read] dataexchange:GetJob.

---

##### `actionGetReceivedDataGrant`<sup>Required</sup> <a name="actionGetReceivedDataGrant" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetReceivedDataGrant"></a>

```typescript
public readonly actionGetReceivedDataGrant: string;
```

- *Type:* string

[Read] dataexchange:GetReceivedDataGrant.

---

##### `actionGetRevision`<sup>Required</sup> <a name="actionGetRevision" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.actionGetRevision"></a>

```typescript
public readonly actionGetRevision: string;
```

- *Type:* string

[Read] dataexchange:GetRevision.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.CancelJob"></a>

```typescript
public readonly CancelJob: string;
```

- *Type:* string

[Write] dataexchange:CancelJob.

---

##### `CreateAsset`<sup>Required</sup> <a name="CreateAsset" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateAsset"></a>

```typescript
public readonly CreateAsset: string;
```

- *Type:* string

[Write] dataexchange:CreateAsset.

---

##### `CreateDataGrant`<sup>Required</sup> <a name="CreateDataGrant" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateDataGrant"></a>

```typescript
public readonly CreateDataGrant: string;
```

- *Type:* string

[Write] dataexchange:CreateDataGrant.

---

##### `CreateDataSet`<sup>Required</sup> <a name="CreateDataSet" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateDataSet"></a>

```typescript
public readonly CreateDataSet: string;
```

- *Type:* string

[Write] dataexchange:CreateDataSet.

---

##### `CreateEventAction`<sup>Required</sup> <a name="CreateEventAction" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateEventAction"></a>

```typescript
public readonly CreateEventAction: string;
```

- *Type:* string

[Write] dataexchange:CreateEventAction.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateJob"></a>

```typescript
public readonly CreateJob: string;
```

- *Type:* string

[Write] dataexchange:CreateJob.

---

##### `CreateRevision`<sup>Required</sup> <a name="CreateRevision" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.CreateRevision"></a>

```typescript
public readonly CreateRevision: string;
```

- *Type:* string

[Write] dataexchange:CreateRevision.

---

##### `DeleteAsset`<sup>Required</sup> <a name="DeleteAsset" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.DeleteAsset"></a>

```typescript
public readonly DeleteAsset: string;
```

- *Type:* string

[Write] dataexchange:DeleteAsset.

---

##### `DeleteDataGrant`<sup>Required</sup> <a name="DeleteDataGrant" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.DeleteDataGrant"></a>

```typescript
public readonly DeleteDataGrant: string;
```

- *Type:* string

[Write] dataexchange:DeleteDataGrant.

---

##### `DeleteDataSet`<sup>Required</sup> <a name="DeleteDataSet" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.DeleteDataSet"></a>

```typescript
public readonly DeleteDataSet: string;
```

- *Type:* string

[Write] dataexchange:DeleteDataSet.

---

##### `DeleteEventAction`<sup>Required</sup> <a name="DeleteEventAction" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.DeleteEventAction"></a>

```typescript
public readonly DeleteEventAction: string;
```

- *Type:* string

[Write] dataexchange:DeleteEventAction.

---

##### `DeleteRevision`<sup>Required</sup> <a name="DeleteRevision" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.DeleteRevision"></a>

```typescript
public readonly DeleteRevision: string;
```

- *Type:* string

[Write] dataexchange:DeleteRevision.

---

##### `ListDataGrants`<sup>Required</sup> <a name="ListDataGrants" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListDataGrants"></a>

```typescript
public readonly ListDataGrants: string;
```

- *Type:* string

[List] dataexchange:ListDataGrants.

---

##### `ListDataSetRevisions`<sup>Required</sup> <a name="ListDataSetRevisions" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListDataSetRevisions"></a>

```typescript
public readonly ListDataSetRevisions: string;
```

- *Type:* string

[List] dataexchange:ListDataSetRevisions.

---

##### `ListDataSets`<sup>Required</sup> <a name="ListDataSets" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListDataSets"></a>

```typescript
public readonly ListDataSets: string;
```

- *Type:* string

[List] dataexchange:ListDataSets.

---

##### `ListEventActions`<sup>Required</sup> <a name="ListEventActions" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListEventActions"></a>

```typescript
public readonly ListEventActions: string;
```

- *Type:* string

[List] dataexchange:ListEventActions.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] dataexchange:ListJobs.

---

##### `ListReceivedDataGrants`<sup>Required</sup> <a name="ListReceivedDataGrants" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListReceivedDataGrants"></a>

```typescript
public readonly ListReceivedDataGrants: string;
```

- *Type:* string

[List] dataexchange:ListReceivedDataGrants.

---

##### `ListRevisionAssets`<sup>Required</sup> <a name="ListRevisionAssets" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListRevisionAssets"></a>

```typescript
public readonly ListRevisionAssets: string;
```

- *Type:* string

[List] dataexchange:ListRevisionAssets.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] dataexchange:ListTagsForResource.

---

##### `PublishDataSet`<sup>Required</sup> <a name="PublishDataSet" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.PublishDataSet"></a>

```typescript
public readonly PublishDataSet: string;
```

- *Type:* string

[Write] dataexchange:PublishDataSet.

---

##### `PublishToDataGrant`<sup>Required</sup> <a name="PublishToDataGrant" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.PublishToDataGrant"></a>

```typescript
public readonly PublishToDataGrant: string;
```

- *Type:* string

[Write] dataexchange:PublishToDataGrant.

---

##### `RevokeRevision`<sup>Required</sup> <a name="RevokeRevision" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.RevokeRevision"></a>

```typescript
public readonly RevokeRevision: string;
```

- *Type:* string

[Write] dataexchange:RevokeRevision.

---

##### `SendApiAsset`<sup>Required</sup> <a name="SendApiAsset" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.SendApiAsset"></a>

```typescript
public readonly SendApiAsset: string;
```

- *Type:* string

[Write] dataexchange:SendApiAsset.

---

##### `SendDataSetNotification`<sup>Required</sup> <a name="SendDataSetNotification" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.SendDataSetNotification"></a>

```typescript
public readonly SendDataSetNotification: string;
```

- *Type:* string

[Write] dataexchange:SendDataSetNotification.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartJob`<sup>Required</sup> <a name="StartJob" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.StartJob"></a>

```typescript
public readonly StartJob: string;
```

- *Type:* string

[Write] dataexchange:StartJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] dataexchange:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] dataexchange:UntagResource.

---

##### `UpdateAsset`<sup>Required</sup> <a name="UpdateAsset" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.UpdateAsset"></a>

```typescript
public readonly UpdateAsset: string;
```

- *Type:* string

[Write] dataexchange:UpdateAsset.

---

##### `UpdateDataSet`<sup>Required</sup> <a name="UpdateDataSet" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.UpdateDataSet"></a>

```typescript
public readonly UpdateDataSet: string;
```

- *Type:* string

[Write] dataexchange:UpdateDataSet.

---

##### `UpdateEventAction`<sup>Required</sup> <a name="UpdateEventAction" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.UpdateEventAction"></a>

```typescript
public readonly UpdateEventAction: string;
```

- *Type:* string

[Write] dataexchange:UpdateEventAction.

---

##### `UpdateRevision`<sup>Required</sup> <a name="UpdateRevision" id="@cdk_utils/iam.dataexchange.DataexchangeActions.property.UpdateRevision"></a>

```typescript
public readonly UpdateRevision: string;
```

- *Type:* string

[Write] dataexchange:UpdateRevision.

---

### DataexchangeConditions <a name="DataexchangeConditions" id="@cdk_utils/iam.dataexchange.DataexchangeConditions"></a>

Condition key constants and builders for dataexchange.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

new dataexchange.DataexchangeConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.jobType">jobType</a></code> | Generates a condition block for `dataexchange:JobType`. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `jobType` <a name="jobType" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.jobType"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeConditions.jobType(value: string)
```

Generates a condition block for `dataexchange:JobType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.jobType.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.requestTag"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.resourceTag"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.tagKeys"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateAssetConditionKeys">CreateAssetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAsset action. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateDataGrantConditionKeys">CreateDataGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataGrant action. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateDataSetConditionKeys">CreateDataSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataSet action. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateEventActionConditionKeys">CreateEventActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventAction action. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateJobConditionKeys">CreateJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateJob action. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateRevisionConditionKeys">CreateRevisionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRevision action. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.JOB_TYPE">JOB_TYPE</a></code> | <code>string</code> | Condition key: dataexchange:JobType (String). |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.PublishToDataGrantConditionKeys">PublishToDataGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PublishToDataGrant action. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAssetConditionKeys`<sup>Required</sup> <a name="CreateAssetConditionKeys" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateAssetConditionKeys"></a>

```typescript
public readonly CreateAssetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAsset action.

---

##### `CreateDataGrantConditionKeys`<sup>Required</sup> <a name="CreateDataGrantConditionKeys" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateDataGrantConditionKeys"></a>

```typescript
public readonly CreateDataGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataGrant action.

---

##### `CreateDataSetConditionKeys`<sup>Required</sup> <a name="CreateDataSetConditionKeys" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateDataSetConditionKeys"></a>

```typescript
public readonly CreateDataSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataSet action.

---

##### `CreateEventActionConditionKeys`<sup>Required</sup> <a name="CreateEventActionConditionKeys" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateEventActionConditionKeys"></a>

```typescript
public readonly CreateEventActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventAction action.

---

##### `CreateJobConditionKeys`<sup>Required</sup> <a name="CreateJobConditionKeys" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateJobConditionKeys"></a>

```typescript
public readonly CreateJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateJob action.

---

##### `CreateRevisionConditionKeys`<sup>Required</sup> <a name="CreateRevisionConditionKeys" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.CreateRevisionConditionKeys"></a>

```typescript
public readonly CreateRevisionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRevision action.

---

##### `JOB_TYPE`<sup>Required</sup> <a name="JOB_TYPE" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.JOB_TYPE"></a>

```typescript
public readonly JOB_TYPE: string;
```

- *Type:* string

Condition key: dataexchange:JobType (String).

---

##### `PublishToDataGrantConditionKeys`<sup>Required</sup> <a name="PublishToDataGrantConditionKeys" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.PublishToDataGrantConditionKeys"></a>

```typescript
public readonly PublishToDataGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PublishToDataGrant action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.dataexchange.DataexchangeConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### DataexchangeOperations <a name="DataexchangeOperations" id="@cdk_utils/iam.dataexchange.DataexchangeOperations"></a>

API operation to required IAM actions mapping for dataexchange.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

new dataexchange.DataexchangeOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.AcceptDataGrant">AcceptDataGrant</a></code> | <code>string[]</code> | IAM actions required for the AcceptDataGrant API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CancelJob">CancelJob</a></code> | <code>string[]</code> | IAM actions required for the CancelJob API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CreateDataGrant">CreateDataGrant</a></code> | <code>string[]</code> | IAM actions required for the CreateDataGrant API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CreateDataSet">CreateDataSet</a></code> | <code>string[]</code> | IAM actions required for the CreateDataSet API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CreateEventAction">CreateEventAction</a></code> | <code>string[]</code> | IAM actions required for the CreateEventAction API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CreateJob">CreateJob</a></code> | <code>string[]</code> | IAM actions required for the CreateJob API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CreateRevision">CreateRevision</a></code> | <code>string[]</code> | IAM actions required for the CreateRevision API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.DeleteAsset">DeleteAsset</a></code> | <code>string[]</code> | IAM actions required for the DeleteAsset API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.DeleteDataGrant">DeleteDataGrant</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataGrant API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.DeleteDataSet">DeleteDataSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataSet API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.DeleteEventAction">DeleteEventAction</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventAction API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.DeleteRevision">DeleteRevision</a></code> | <code>string[]</code> | IAM actions required for the DeleteRevision API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListDataGrants">ListDataGrants</a></code> | <code>string[]</code> | IAM actions required for the ListDataGrants API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListDataSetRevisions">ListDataSetRevisions</a></code> | <code>string[]</code> | IAM actions required for the ListDataSetRevisions API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListDataSets">ListDataSets</a></code> | <code>string[]</code> | IAM actions required for the ListDataSets API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListEventActions">ListEventActions</a></code> | <code>string[]</code> | IAM actions required for the ListEventActions API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListReceivedDataGrants">ListReceivedDataGrants</a></code> | <code>string[]</code> | IAM actions required for the ListReceivedDataGrants API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListRevisionAssets">ListRevisionAssets</a></code> | <code>string[]</code> | IAM actions required for the ListRevisionAssets API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetAsset">opGetAsset</a></code> | <code>string[]</code> | IAM actions required for the GetAsset API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetDataGrant">opGetDataGrant</a></code> | <code>string[]</code> | IAM actions required for the GetDataGrant API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetDataSet">opGetDataSet</a></code> | <code>string[]</code> | IAM actions required for the GetDataSet API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetEventAction">opGetEventAction</a></code> | <code>string[]</code> | IAM actions required for the GetEventAction API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetJob">opGetJob</a></code> | <code>string[]</code> | IAM actions required for the GetJob API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetReceivedDataGrant">opGetReceivedDataGrant</a></code> | <code>string[]</code> | IAM actions required for the GetReceivedDataGrant API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetRevision">opGetRevision</a></code> | <code>string[]</code> | IAM actions required for the GetRevision API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.RevokeRevision">RevokeRevision</a></code> | <code>string[]</code> | IAM actions required for the RevokeRevision API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.SendApiAsset">SendApiAsset</a></code> | <code>string[]</code> | IAM actions required for the SendApiAsset API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.SendDataSetNotification">SendDataSetNotification</a></code> | <code>string[]</code> | IAM actions required for the SendDataSetNotification API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.StartJob">StartJob</a></code> | <code>string[]</code> | IAM actions required for the StartJob API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.UpdateAsset">UpdateAsset</a></code> | <code>string[]</code> | IAM actions required for the UpdateAsset API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.UpdateDataSet">UpdateDataSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSet API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.UpdateEventAction">UpdateEventAction</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventAction API call. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeOperations.property.UpdateRevision">UpdateRevision</a></code> | <code>string[]</code> | IAM actions required for the UpdateRevision API call. |

---

##### `AcceptDataGrant`<sup>Required</sup> <a name="AcceptDataGrant" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.AcceptDataGrant"></a>

```typescript
public readonly AcceptDataGrant: string[];
```

- *Type:* string[]

IAM actions required for the AcceptDataGrant API call.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CancelJob"></a>

```typescript
public readonly CancelJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelJob API call.

---

##### `CreateDataGrant`<sup>Required</sup> <a name="CreateDataGrant" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CreateDataGrant"></a>

```typescript
public readonly CreateDataGrant: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataGrant API call.

---

##### `CreateDataSet`<sup>Required</sup> <a name="CreateDataSet" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CreateDataSet"></a>

```typescript
public readonly CreateDataSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataSet API call.

---

##### `CreateEventAction`<sup>Required</sup> <a name="CreateEventAction" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CreateEventAction"></a>

```typescript
public readonly CreateEventAction: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventAction API call.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CreateJob"></a>

```typescript
public readonly CreateJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateJob API call.

---

##### `CreateRevision`<sup>Required</sup> <a name="CreateRevision" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.CreateRevision"></a>

```typescript
public readonly CreateRevision: string[];
```

- *Type:* string[]

IAM actions required for the CreateRevision API call.

---

##### `DeleteAsset`<sup>Required</sup> <a name="DeleteAsset" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.DeleteAsset"></a>

```typescript
public readonly DeleteAsset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAsset API call.

---

##### `DeleteDataGrant`<sup>Required</sup> <a name="DeleteDataGrant" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.DeleteDataGrant"></a>

```typescript
public readonly DeleteDataGrant: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataGrant API call.

---

##### `DeleteDataSet`<sup>Required</sup> <a name="DeleteDataSet" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.DeleteDataSet"></a>

```typescript
public readonly DeleteDataSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataSet API call.

---

##### `DeleteEventAction`<sup>Required</sup> <a name="DeleteEventAction" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.DeleteEventAction"></a>

```typescript
public readonly DeleteEventAction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventAction API call.

---

##### `DeleteRevision`<sup>Required</sup> <a name="DeleteRevision" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.DeleteRevision"></a>

```typescript
public readonly DeleteRevision: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRevision API call.

---

##### `ListDataGrants`<sup>Required</sup> <a name="ListDataGrants" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListDataGrants"></a>

```typescript
public readonly ListDataGrants: string[];
```

- *Type:* string[]

IAM actions required for the ListDataGrants API call.

---

##### `ListDataSetRevisions`<sup>Required</sup> <a name="ListDataSetRevisions" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListDataSetRevisions"></a>

```typescript
public readonly ListDataSetRevisions: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSetRevisions API call.

---

##### `ListDataSets`<sup>Required</sup> <a name="ListDataSets" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListDataSets"></a>

```typescript
public readonly ListDataSets: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSets API call.

---

##### `ListEventActions`<sup>Required</sup> <a name="ListEventActions" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListEventActions"></a>

```typescript
public readonly ListEventActions: string[];
```

- *Type:* string[]

IAM actions required for the ListEventActions API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListReceivedDataGrants`<sup>Required</sup> <a name="ListReceivedDataGrants" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListReceivedDataGrants"></a>

```typescript
public readonly ListReceivedDataGrants: string[];
```

- *Type:* string[]

IAM actions required for the ListReceivedDataGrants API call.

---

##### `ListRevisionAssets`<sup>Required</sup> <a name="ListRevisionAssets" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListRevisionAssets"></a>

```typescript
public readonly ListRevisionAssets: string[];
```

- *Type:* string[]

IAM actions required for the ListRevisionAssets API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAsset`<sup>Required</sup> <a name="opGetAsset" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetAsset"></a>

```typescript
public readonly opGetAsset: string[];
```

- *Type:* string[]

IAM actions required for the GetAsset API call.

---

##### `opGetDataGrant`<sup>Required</sup> <a name="opGetDataGrant" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetDataGrant"></a>

```typescript
public readonly opGetDataGrant: string[];
```

- *Type:* string[]

IAM actions required for the GetDataGrant API call.

---

##### `opGetDataSet`<sup>Required</sup> <a name="opGetDataSet" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetDataSet"></a>

```typescript
public readonly opGetDataSet: string[];
```

- *Type:* string[]

IAM actions required for the GetDataSet API call.

---

##### `opGetEventAction`<sup>Required</sup> <a name="opGetEventAction" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetEventAction"></a>

```typescript
public readonly opGetEventAction: string[];
```

- *Type:* string[]

IAM actions required for the GetEventAction API call.

---

##### `opGetJob`<sup>Required</sup> <a name="opGetJob" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetJob"></a>

```typescript
public readonly opGetJob: string[];
```

- *Type:* string[]

IAM actions required for the GetJob API call.

---

##### `opGetReceivedDataGrant`<sup>Required</sup> <a name="opGetReceivedDataGrant" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetReceivedDataGrant"></a>

```typescript
public readonly opGetReceivedDataGrant: string[];
```

- *Type:* string[]

IAM actions required for the GetReceivedDataGrant API call.

---

##### `opGetRevision`<sup>Required</sup> <a name="opGetRevision" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.opGetRevision"></a>

```typescript
public readonly opGetRevision: string[];
```

- *Type:* string[]

IAM actions required for the GetRevision API call.

---

##### `RevokeRevision`<sup>Required</sup> <a name="RevokeRevision" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.RevokeRevision"></a>

```typescript
public readonly RevokeRevision: string[];
```

- *Type:* string[]

IAM actions required for the RevokeRevision API call.

---

##### `SendApiAsset`<sup>Required</sup> <a name="SendApiAsset" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.SendApiAsset"></a>

```typescript
public readonly SendApiAsset: string[];
```

- *Type:* string[]

IAM actions required for the SendApiAsset API call.

---

##### `SendDataSetNotification`<sup>Required</sup> <a name="SendDataSetNotification" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.SendDataSetNotification"></a>

```typescript
public readonly SendDataSetNotification: string[];
```

- *Type:* string[]

IAM actions required for the SendDataSetNotification API call.

---

##### `StartJob`<sup>Required</sup> <a name="StartJob" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.StartJob"></a>

```typescript
public readonly StartJob: string[];
```

- *Type:* string[]

IAM actions required for the StartJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAsset`<sup>Required</sup> <a name="UpdateAsset" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.UpdateAsset"></a>

```typescript
public readonly UpdateAsset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAsset API call.

---

##### `UpdateDataSet`<sup>Required</sup> <a name="UpdateDataSet" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.UpdateDataSet"></a>

```typescript
public readonly UpdateDataSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSet API call.

---

##### `UpdateEventAction`<sup>Required</sup> <a name="UpdateEventAction" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.UpdateEventAction"></a>

```typescript
public readonly UpdateEventAction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventAction API call.

---

##### `UpdateRevision`<sup>Required</sup> <a name="UpdateRevision" id="@cdk_utils/iam.dataexchange.DataexchangeOperations.property.UpdateRevision"></a>

```typescript
public readonly UpdateRevision: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRevision API call.

---

### DataexchangeResources <a name="DataexchangeResources" id="@cdk_utils/iam.dataexchange.DataexchangeResources"></a>

ARN builders, validators, and parsers for dataexchange resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dataexchange.DataexchangeResources.Initializer"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

new dataexchange.DataexchangeResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.assets">assets</a></code> | Builds an ARN for the assets resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.dataGrants">dataGrants</a></code> | Builds an ARN for the data-grants resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.dataSets">dataSets</a></code> | Builds an ARN for the data-sets resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.entitledAssets">entitledAssets</a></code> | Builds an ARN for the entitled-assets resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.entitledDataSets">entitledDataSets</a></code> | Builds an ARN for the entitled-data-sets resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.entitledRevisions">entitledRevisions</a></code> | Builds an ARN for the entitled-revisions resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.eventActions">eventActions</a></code> | Builds an ARN for the event-actions resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.isValidAssetsArn">isValidAssetsArn</a></code> | Validates whether a string is a valid ARN for the assets resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.isValidDataGrantsArn">isValidDataGrantsArn</a></code> | Validates whether a string is a valid ARN for the data-grants resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.isValidDataSetsArn">isValidDataSetsArn</a></code> | Validates whether a string is a valid ARN for the data-sets resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEntitledAssetsArn">isValidEntitledAssetsArn</a></code> | Validates whether a string is a valid ARN for the entitled-assets resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEntitledDataSetsArn">isValidEntitledDataSetsArn</a></code> | Validates whether a string is a valid ARN for the entitled-data-sets resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEntitledRevisionsArn">isValidEntitledRevisionsArn</a></code> | Validates whether a string is a valid ARN for the entitled-revisions resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEventActionsArn">isValidEventActionsArn</a></code> | Validates whether a string is a valid ARN for the event-actions resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.isValidJobsArn">isValidJobsArn</a></code> | Validates whether a string is a valid ARN for the jobs resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.isValidRevisionsArn">isValidRevisionsArn</a></code> | Validates whether a string is a valid ARN for the revisions resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.jobs">jobs</a></code> | Builds an ARN for the jobs resource. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.parseAssetsArn">parseAssetsArn</a></code> | Parses a assets ARN into its components. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.parseDataGrantsArn">parseDataGrantsArn</a></code> | Parses a data-grants ARN into its components. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.parseDataSetsArn">parseDataSetsArn</a></code> | Parses a data-sets ARN into its components. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.parseEntitledAssetsArn">parseEntitledAssetsArn</a></code> | Parses a entitled-assets ARN into its components. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.parseEntitledDataSetsArn">parseEntitledDataSetsArn</a></code> | Parses a entitled-data-sets ARN into its components. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.parseEntitledRevisionsArn">parseEntitledRevisionsArn</a></code> | Parses a entitled-revisions ARN into its components. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.parseEventActionsArn">parseEventActionsArn</a></code> | Parses a event-actions ARN into its components. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.parseJobsArn">parseJobsArn</a></code> | Parses a jobs ARN into its components. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.parseRevisionsArn">parseRevisionsArn</a></code> | Parses a revisions ARN into its components. |
| <code><a href="#@cdk_utils/iam.dataexchange.DataexchangeResources.revisions">revisions</a></code> | Builds an ARN for the revisions resource. |

---

##### `assets` <a name="assets" id="@cdk_utils/iam.dataexchange.DataexchangeResources.assets"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.assets(props: DataexchangeAssetsArnProps)
```

Builds an ARN for the assets resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dataexchange.DataexchangeResources.assets.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dataexchange.DataexchangeAssetsArnProps">DataexchangeAssetsArnProps</a>

---

##### `dataGrants` <a name="dataGrants" id="@cdk_utils/iam.dataexchange.DataexchangeResources.dataGrants"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.dataGrants(props: DataexchangeDataGrantsArnProps)
```

Builds an ARN for the data-grants resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dataexchange.DataexchangeResources.dataGrants.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dataexchange.DataexchangeDataGrantsArnProps">DataexchangeDataGrantsArnProps</a>

---

##### `dataSets` <a name="dataSets" id="@cdk_utils/iam.dataexchange.DataexchangeResources.dataSets"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.dataSets(props: DataexchangeDataSetsArnProps)
```

Builds an ARN for the data-sets resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dataexchange.DataexchangeResources.dataSets.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dataexchange.DataexchangeDataSetsArnProps">DataexchangeDataSetsArnProps</a>

---

##### `entitledAssets` <a name="entitledAssets" id="@cdk_utils/iam.dataexchange.DataexchangeResources.entitledAssets"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.entitledAssets(props: DataexchangeEntitledAssetsArnProps)
```

Builds an ARN for the entitled-assets resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dataexchange.DataexchangeResources.entitledAssets.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledAssetsArnProps">DataexchangeEntitledAssetsArnProps</a>

---

##### `entitledDataSets` <a name="entitledDataSets" id="@cdk_utils/iam.dataexchange.DataexchangeResources.entitledDataSets"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.entitledDataSets(props: DataexchangeEntitledDataSetsArnProps)
```

Builds an ARN for the entitled-data-sets resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dataexchange.DataexchangeResources.entitledDataSets.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledDataSetsArnProps">DataexchangeEntitledDataSetsArnProps</a>

---

##### `entitledRevisions` <a name="entitledRevisions" id="@cdk_utils/iam.dataexchange.DataexchangeResources.entitledRevisions"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.entitledRevisions(props: DataexchangeEntitledRevisionsArnProps)
```

Builds an ARN for the entitled-revisions resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dataexchange.DataexchangeResources.entitledRevisions.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dataexchange.DataexchangeEntitledRevisionsArnProps">DataexchangeEntitledRevisionsArnProps</a>

---

##### `eventActions` <a name="eventActions" id="@cdk_utils/iam.dataexchange.DataexchangeResources.eventActions"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.eventActions(props: DataexchangeEventActionsArnProps)
```

Builds an ARN for the event-actions resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dataexchange.DataexchangeResources.eventActions.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dataexchange.DataexchangeEventActionsArnProps">DataexchangeEventActionsArnProps</a>

---

##### `isValidAssetsArn` <a name="isValidAssetsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidAssetsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.isValidAssetsArn(arn: string)
```

Validates whether a string is a valid ARN for the assets resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidAssetsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataGrantsArn` <a name="isValidDataGrantsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidDataGrantsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.isValidDataGrantsArn(arn: string)
```

Validates whether a string is a valid ARN for the data-grants resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidDataGrantsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataSetsArn` <a name="isValidDataSetsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidDataSetsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.isValidDataSetsArn(arn: string)
```

Validates whether a string is a valid ARN for the data-sets resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidDataSetsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEntitledAssetsArn` <a name="isValidEntitledAssetsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEntitledAssetsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.isValidEntitledAssetsArn(arn: string)
```

Validates whether a string is a valid ARN for the entitled-assets resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEntitledAssetsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEntitledDataSetsArn` <a name="isValidEntitledDataSetsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEntitledDataSetsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.isValidEntitledDataSetsArn(arn: string)
```

Validates whether a string is a valid ARN for the entitled-data-sets resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEntitledDataSetsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEntitledRevisionsArn` <a name="isValidEntitledRevisionsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEntitledRevisionsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.isValidEntitledRevisionsArn(arn: string)
```

Validates whether a string is a valid ARN for the entitled-revisions resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEntitledRevisionsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventActionsArn` <a name="isValidEventActionsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEventActionsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.isValidEventActionsArn(arn: string)
```

Validates whether a string is a valid ARN for the event-actions resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidEventActionsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobsArn` <a name="isValidJobsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidJobsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.isValidJobsArn(arn: string)
```

Validates whether a string is a valid ARN for the jobs resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidJobsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRevisionsArn` <a name="isValidRevisionsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidRevisionsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.isValidRevisionsArn(arn: string)
```

Validates whether a string is a valid ARN for the revisions resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.isValidRevisionsArn.parameter.arn"></a>

- *Type:* string

---

##### `jobs` <a name="jobs" id="@cdk_utils/iam.dataexchange.DataexchangeResources.jobs"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.jobs(props: DataexchangeJobsArnProps)
```

Builds an ARN for the jobs resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dataexchange.DataexchangeResources.jobs.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dataexchange.DataexchangeJobsArnProps">DataexchangeJobsArnProps</a>

---

##### `parseAssetsArn` <a name="parseAssetsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseAssetsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.parseAssetsArn(arn: string)
```

Parses a assets ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseAssetsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataGrantsArn` <a name="parseDataGrantsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseDataGrantsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.parseDataGrantsArn(arn: string)
```

Parses a data-grants ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseDataGrantsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataSetsArn` <a name="parseDataSetsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseDataSetsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.parseDataSetsArn(arn: string)
```

Parses a data-sets ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseDataSetsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEntitledAssetsArn` <a name="parseEntitledAssetsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseEntitledAssetsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.parseEntitledAssetsArn(arn: string)
```

Parses a entitled-assets ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseEntitledAssetsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEntitledDataSetsArn` <a name="parseEntitledDataSetsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseEntitledDataSetsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.parseEntitledDataSetsArn(arn: string)
```

Parses a entitled-data-sets ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseEntitledDataSetsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEntitledRevisionsArn` <a name="parseEntitledRevisionsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseEntitledRevisionsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.parseEntitledRevisionsArn(arn: string)
```

Parses a entitled-revisions ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseEntitledRevisionsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventActionsArn` <a name="parseEventActionsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseEventActionsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.parseEventActionsArn(arn: string)
```

Parses a event-actions ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseEventActionsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobsArn` <a name="parseJobsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseJobsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.parseJobsArn(arn: string)
```

Parses a jobs ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseJobsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRevisionsArn` <a name="parseRevisionsArn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseRevisionsArn"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.parseRevisionsArn(arn: string)
```

Parses a revisions ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dataexchange.DataexchangeResources.parseRevisionsArn.parameter.arn"></a>

- *Type:* string

---

##### `revisions` <a name="revisions" id="@cdk_utils/iam.dataexchange.DataexchangeResources.revisions"></a>

```typescript
import { dataexchange } from '@cdk_utils/iam'

dataexchange.DataexchangeResources.revisions(props: DataexchangeRevisionsArnProps)
```

Builds an ARN for the revisions resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dataexchange.DataexchangeResources.revisions.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dataexchange.DataexchangeRevisionsArnProps">DataexchangeRevisionsArnProps</a>

---




