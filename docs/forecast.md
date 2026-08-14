# `forecast` Submodule <a name="`forecast` Submodule" id="@cdk_utils/iam.forecast"></a>


## Structs <a name="Structs" id="Structs"></a>

### ForecastAlgorithmArnComponents <a name="ForecastAlgorithmArnComponents" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnComponents"></a>

Parsed components of a algorithm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastAlgorithmArnComponents: forecast.ForecastAlgorithmArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastAlgorithmArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastAlgorithmArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastAlgorithmArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastAlgorithmArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastAlgorithmArnProps <a name="ForecastAlgorithmArnProps" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnProps"></a>

Properties for building a algorithm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastAlgorithmArnProps: forecast.ForecastAlgorithmArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastAlgorithmArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastAlgorithmArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastAlgorithmArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastAlgorithmArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastAlgorithmArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastDatasetArnComponents <a name="ForecastDatasetArnComponents" id="@cdk_utils/iam.forecast.ForecastDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastDatasetArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastDatasetArnComponents: forecast.ForecastDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastDatasetArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastDatasetArnProps <a name="ForecastDatasetArnProps" id="@cdk_utils/iam.forecast.ForecastDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastDatasetArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastDatasetArnProps: forecast.ForecastDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastDatasetArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastDatasetGroupArnComponents <a name="ForecastDatasetGroupArnComponents" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnComponents"></a>

Parsed components of a datasetGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastDatasetGroupArnComponents: forecast.ForecastDatasetGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetGroupArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastDatasetGroupArnProps <a name="ForecastDatasetGroupArnProps" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnProps"></a>

Properties for building a datasetGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastDatasetGroupArnProps: forecast.ForecastDatasetGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetGroupArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastDatasetGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastDatasetImportJobArnComponents <a name="ForecastDatasetImportJobArnComponents" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnComponents"></a>

Parsed components of a datasetImportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastDatasetImportJobArnComponents: forecast.ForecastDatasetImportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetImportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetImportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetImportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetImportJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastDatasetImportJobArnProps <a name="ForecastDatasetImportJobArnProps" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnProps"></a>

Properties for building a datasetImportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastDatasetImportJobArnProps: forecast.ForecastDatasetImportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetImportJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetImportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetImportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastDatasetImportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastDatasetImportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastEndpointArnComponents <a name="ForecastEndpointArnComponents" id="@cdk_utils/iam.forecast.ForecastEndpointArnComponents"></a>

Parsed components of a endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastEndpointArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastEndpointArnComponents: forecast.ForecastEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastEndpointArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastEndpointArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastEndpointArnProps <a name="ForecastEndpointArnProps" id="@cdk_utils/iam.forecast.ForecastEndpointArnProps"></a>

Properties for building a endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastEndpointArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastEndpointArnProps: forecast.ForecastEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastEndpointArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastEndpointArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastExplainabilityArnComponents <a name="ForecastExplainabilityArnComponents" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnComponents"></a>

Parsed components of a explainability ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastExplainabilityArnComponents: forecast.ForecastExplainabilityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastExplainabilityArnProps <a name="ForecastExplainabilityArnProps" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnProps"></a>

Properties for building a explainability ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastExplainabilityArnProps: forecast.ForecastExplainabilityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastExplainabilityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastExplainabilityExportArnComponents <a name="ForecastExplainabilityExportArnComponents" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnComponents"></a>

Parsed components of a explainabilityExport ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastExplainabilityExportArnComponents: forecast.ForecastExplainabilityExportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityExportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityExportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityExportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityExportArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastExplainabilityExportArnProps <a name="ForecastExplainabilityExportArnProps" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnProps"></a>

Properties for building a explainabilityExport ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastExplainabilityExportArnProps: forecast.ForecastExplainabilityExportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityExportArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityExportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityExportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastExplainabilityExportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastExplainabilityExportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastForecastArnComponents <a name="ForecastForecastArnComponents" id="@cdk_utils/iam.forecast.ForecastForecastArnComponents"></a>

Parsed components of a forecast ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastForecastArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastForecastArnComponents: forecast.ForecastForecastArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastForecastArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastForecastArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastForecastArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastForecastArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastForecastArnProps <a name="ForecastForecastArnProps" id="@cdk_utils/iam.forecast.ForecastForecastArnProps"></a>

Properties for building a forecast ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastForecastArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastForecastArnProps: forecast.ForecastForecastArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastForecastArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastForecastArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastForecastArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastForecastArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastForecastExportArnComponents <a name="ForecastForecastExportArnComponents" id="@cdk_utils/iam.forecast.ForecastForecastExportArnComponents"></a>

Parsed components of a forecastExport ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastForecastExportArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastForecastExportArnComponents: forecast.ForecastForecastExportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastExportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastExportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastExportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastExportArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastForecastExportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastForecastExportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastForecastExportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastForecastExportArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastForecastExportArnProps <a name="ForecastForecastExportArnProps" id="@cdk_utils/iam.forecast.ForecastForecastExportArnProps"></a>

Properties for building a forecastExport ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastForecastExportArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastForecastExportArnProps: forecast.ForecastForecastExportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastExportArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastExportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastExportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastForecastExportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastForecastExportArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastForecastExportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastForecastExportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastForecastExportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastMonitorArnComponents <a name="ForecastMonitorArnComponents" id="@cdk_utils/iam.forecast.ForecastMonitorArnComponents"></a>

Parsed components of a monitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastMonitorArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastMonitorArnComponents: forecast.ForecastMonitorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastMonitorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastMonitorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastMonitorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastMonitorArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastMonitorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastMonitorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastMonitorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastMonitorArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastMonitorArnProps <a name="ForecastMonitorArnProps" id="@cdk_utils/iam.forecast.ForecastMonitorArnProps"></a>

Properties for building a monitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastMonitorArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastMonitorArnProps: forecast.ForecastMonitorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastMonitorArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastMonitorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastMonitorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastMonitorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastMonitorArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastMonitorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastMonitorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastMonitorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastPredictorArnComponents <a name="ForecastPredictorArnComponents" id="@cdk_utils/iam.forecast.ForecastPredictorArnComponents"></a>

Parsed components of a predictor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastPredictorArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastPredictorArnComponents: forecast.ForecastPredictorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastPredictorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastPredictorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastPredictorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastPredictorArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastPredictorArnProps <a name="ForecastPredictorArnProps" id="@cdk_utils/iam.forecast.ForecastPredictorArnProps"></a>

Properties for building a predictor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastPredictorArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastPredictorArnProps: forecast.ForecastPredictorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastPredictorArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastPredictorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastPredictorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastPredictorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastPredictorBacktestExportJobArnComponents <a name="ForecastPredictorBacktestExportJobArnComponents" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnComponents"></a>

Parsed components of a predictorBacktestExportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastPredictorBacktestExportJobArnComponents: forecast.ForecastPredictorBacktestExportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastPredictorBacktestExportJobArnProps <a name="ForecastPredictorBacktestExportJobArnProps" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnProps"></a>

Properties for building a predictorBacktestExportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastPredictorBacktestExportJobArnProps: forecast.ForecastPredictorBacktestExportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastWhatIfAnalysisArnComponents <a name="ForecastWhatIfAnalysisArnComponents" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnComponents"></a>

Parsed components of a whatIfAnalysis ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastWhatIfAnalysisArnComponents: forecast.ForecastWhatIfAnalysisArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastWhatIfAnalysisArnProps <a name="ForecastWhatIfAnalysisArnProps" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnProps"></a>

Properties for building a whatIfAnalysis ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastWhatIfAnalysisArnProps: forecast.ForecastWhatIfAnalysisArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastWhatIfForecastArnComponents <a name="ForecastWhatIfForecastArnComponents" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnComponents"></a>

Parsed components of a whatIfForecast ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastWhatIfForecastArnComponents: forecast.ForecastWhatIfForecastArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastWhatIfForecastArnProps <a name="ForecastWhatIfForecastArnProps" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnProps"></a>

Properties for building a whatIfForecast ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastWhatIfForecastArnProps: forecast.ForecastWhatIfForecastArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ForecastWhatIfForecastExportArnComponents <a name="ForecastWhatIfForecastExportArnComponents" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnComponents"></a>

Parsed components of a whatIfForecastExport ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnComponents.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastWhatIfForecastExportArnComponents: forecast.ForecastWhatIfForecastExportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ForecastWhatIfForecastExportArnProps <a name="ForecastWhatIfForecastExportArnProps" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnProps"></a>

Properties for building a whatIfForecastExport ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnProps.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

const forecastWhatIfForecastExportArnProps: forecast.ForecastWhatIfForecastExportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ForecastActions <a name="ForecastActions" id="@cdk_utils/iam.forecast.ForecastActions"></a>

IAM action constants for the forecast service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.forecast.ForecastActions.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

new forecast.ForecastActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.actionGetAccuracyMetrics">actionGetAccuracyMetrics</a></code> | <code>string</code> | [Read] forecast:GetAccuracyMetrics. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.actionGetRecentForecastContext">actionGetRecentForecastContext</a></code> | <code>string</code> | [Read] forecast:GetRecentForecastContext. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateAutoPredictor">CreateAutoPredictor</a></code> | <code>string</code> | [Write] forecast:CreateAutoPredictor. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateDataset">CreateDataset</a></code> | <code>string</code> | [Write] forecast:CreateDataset. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateDatasetGroup">CreateDatasetGroup</a></code> | <code>string</code> | [Write] forecast:CreateDatasetGroup. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateDatasetImportJob">CreateDatasetImportJob</a></code> | <code>string</code> | [Write] forecast:CreateDatasetImportJob. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateExplainability">CreateExplainability</a></code> | <code>string</code> | [Write] forecast:CreateExplainability. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateExplainabilityExport">CreateExplainabilityExport</a></code> | <code>string</code> | [Write] forecast:CreateExplainabilityExport. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateForecast">CreateForecast</a></code> | <code>string</code> | [Write] forecast:CreateForecast. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateForecastEndpoint">CreateForecastEndpoint</a></code> | <code>string</code> | [Write] forecast:CreateForecastEndpoint. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateForecastExportJob">CreateForecastExportJob</a></code> | <code>string</code> | [Write] forecast:CreateForecastExportJob. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateMonitor">CreateMonitor</a></code> | <code>string</code> | [Write] forecast:CreateMonitor. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreatePredictor">CreatePredictor</a></code> | <code>string</code> | [Write] forecast:CreatePredictor. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreatePredictorBacktestExportJob">CreatePredictorBacktestExportJob</a></code> | <code>string</code> | [Write] forecast:CreatePredictorBacktestExportJob. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateWhatIfAnalysis">CreateWhatIfAnalysis</a></code> | <code>string</code> | [Write] forecast:CreateWhatIfAnalysis. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateWhatIfForecast">CreateWhatIfForecast</a></code> | <code>string</code> | [Write] forecast:CreateWhatIfForecast. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.CreateWhatIfForecastExport">CreateWhatIfForecastExport</a></code> | <code>string</code> | [Write] forecast:CreateWhatIfForecastExport. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteDataset">DeleteDataset</a></code> | <code>string</code> | [Write] forecast:DeleteDataset. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteDatasetGroup">DeleteDatasetGroup</a></code> | <code>string</code> | [Write] forecast:DeleteDatasetGroup. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteDatasetImportJob">DeleteDatasetImportJob</a></code> | <code>string</code> | [Write] forecast:DeleteDatasetImportJob. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteExplainability">DeleteExplainability</a></code> | <code>string</code> | [Write] forecast:DeleteExplainability. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteExplainabilityExport">DeleteExplainabilityExport</a></code> | <code>string</code> | [Write] forecast:DeleteExplainabilityExport. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteForecast">DeleteForecast</a></code> | <code>string</code> | [Write] forecast:DeleteForecast. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteForecastEndpoint">DeleteForecastEndpoint</a></code> | <code>string</code> | [Write] forecast:DeleteForecastEndpoint. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteForecastExportJob">DeleteForecastExportJob</a></code> | <code>string</code> | [Write] forecast:DeleteForecastExportJob. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteMonitor">DeleteMonitor</a></code> | <code>string</code> | [Write] forecast:DeleteMonitor. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeletePredictor">DeletePredictor</a></code> | <code>string</code> | [Write] forecast:DeletePredictor. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeletePredictorBacktestExportJob">DeletePredictorBacktestExportJob</a></code> | <code>string</code> | [Write] forecast:DeletePredictorBacktestExportJob. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteResourceTree">DeleteResourceTree</a></code> | <code>string</code> | [Write] forecast:DeleteResourceTree. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteWhatIfAnalysis">DeleteWhatIfAnalysis</a></code> | <code>string</code> | [Write] forecast:DeleteWhatIfAnalysis. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteWhatIfForecast">DeleteWhatIfForecast</a></code> | <code>string</code> | [Write] forecast:DeleteWhatIfForecast. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DeleteWhatIfForecastExport">DeleteWhatIfForecastExport</a></code> | <code>string</code> | [Write] forecast:DeleteWhatIfForecastExport. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeAutoPredictor">DescribeAutoPredictor</a></code> | <code>string</code> | [Read] forecast:DescribeAutoPredictor. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeDataset">DescribeDataset</a></code> | <code>string</code> | [Read] forecast:DescribeDataset. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeDatasetGroup">DescribeDatasetGroup</a></code> | <code>string</code> | [Read] forecast:DescribeDatasetGroup. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeDatasetImportJob">DescribeDatasetImportJob</a></code> | <code>string</code> | [Read] forecast:DescribeDatasetImportJob. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeExplainability">DescribeExplainability</a></code> | <code>string</code> | [Read] forecast:DescribeExplainability. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeExplainabilityExport">DescribeExplainabilityExport</a></code> | <code>string</code> | [Read] forecast:DescribeExplainabilityExport. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeForecast">DescribeForecast</a></code> | <code>string</code> | [Read] forecast:DescribeForecast. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeForecastEndpoint">DescribeForecastEndpoint</a></code> | <code>string</code> | [Read] forecast:DescribeForecastEndpoint. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeForecastExportJob">DescribeForecastExportJob</a></code> | <code>string</code> | [Read] forecast:DescribeForecastExportJob. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeMonitor">DescribeMonitor</a></code> | <code>string</code> | [Read] forecast:DescribeMonitor. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribePredictor">DescribePredictor</a></code> | <code>string</code> | [Read] forecast:DescribePredictor. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribePredictorBacktestExportJob">DescribePredictorBacktestExportJob</a></code> | <code>string</code> | [Read] forecast:DescribePredictorBacktestExportJob. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeWhatIfAnalysis">DescribeWhatIfAnalysis</a></code> | <code>string</code> | [Read] forecast:DescribeWhatIfAnalysis. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeWhatIfForecast">DescribeWhatIfForecast</a></code> | <code>string</code> | [Read] forecast:DescribeWhatIfForecast. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.DescribeWhatIfForecastExport">DescribeWhatIfForecastExport</a></code> | <code>string</code> | [Read] forecast:DescribeWhatIfForecastExport. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.InvokeForecastEndpoint">InvokeForecastEndpoint</a></code> | <code>string</code> | [Read] forecast:InvokeForecastEndpoint. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListDatasetGroups">ListDatasetGroups</a></code> | <code>string</code> | [Read] forecast:ListDatasetGroups. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListDatasetImportJobs">ListDatasetImportJobs</a></code> | <code>string</code> | [Read] forecast:ListDatasetImportJobs. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListDatasets">ListDatasets</a></code> | <code>string</code> | [Read] forecast:ListDatasets. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListExplainabilities">ListExplainabilities</a></code> | <code>string</code> | [Read] forecast:ListExplainabilities. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListExplainabilityExports">ListExplainabilityExports</a></code> | <code>string</code> | [Read] forecast:ListExplainabilityExports. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListForecastExportJobs">ListForecastExportJobs</a></code> | <code>string</code> | [Read] forecast:ListForecastExportJobs. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListForecasts">ListForecasts</a></code> | <code>string</code> | [Read] forecast:ListForecasts. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListMonitorEvaluations">ListMonitorEvaluations</a></code> | <code>string</code> | [Read] forecast:ListMonitorEvaluations. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListMonitors">ListMonitors</a></code> | <code>string</code> | [Read] forecast:ListMonitors. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListPredictorBacktestExportJobs">ListPredictorBacktestExportJobs</a></code> | <code>string</code> | [Read] forecast:ListPredictorBacktestExportJobs. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListPredictors">ListPredictors</a></code> | <code>string</code> | [Read] forecast:ListPredictors. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] forecast:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListWhatIfAnalyses">ListWhatIfAnalyses</a></code> | <code>string</code> | [Read] forecast:ListWhatIfAnalyses. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListWhatIfForecastExports">ListWhatIfForecastExports</a></code> | <code>string</code> | [Read] forecast:ListWhatIfForecastExports. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ListWhatIfForecasts">ListWhatIfForecasts</a></code> | <code>string</code> | [Read] forecast:ListWhatIfForecasts. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.QueryForecast">QueryForecast</a></code> | <code>string</code> | [Read] forecast:QueryForecast. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.QueryWhatIfForecast">QueryWhatIfForecast</a></code> | <code>string</code> | [Read] forecast:QueryWhatIfForecast. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.ResumeResource">ResumeResource</a></code> | <code>string</code> | [Write] forecast:ResumeResource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.StopResource">StopResource</a></code> | <code>string</code> | [Write] forecast:StopResource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] forecast:TagResource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] forecast:UntagResource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastActions.property.UpdateDatasetGroup">UpdateDatasetGroup</a></code> | <code>string</code> | [Write] forecast:UpdateDatasetGroup. |

---

##### `actionGetAccuracyMetrics`<sup>Required</sup> <a name="actionGetAccuracyMetrics" id="@cdk_utils/iam.forecast.ForecastActions.property.actionGetAccuracyMetrics"></a>

```typescript
public readonly actionGetAccuracyMetrics: string;
```

- *Type:* string

[Read] forecast:GetAccuracyMetrics.

---

##### `actionGetRecentForecastContext`<sup>Required</sup> <a name="actionGetRecentForecastContext" id="@cdk_utils/iam.forecast.ForecastActions.property.actionGetRecentForecastContext"></a>

```typescript
public readonly actionGetRecentForecastContext: string;
```

- *Type:* string

[Read] forecast:GetRecentForecastContext.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.forecast.ForecastActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.forecast.ForecastActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.forecast.ForecastActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.forecast.ForecastActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.forecast.ForecastActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAutoPredictor`<sup>Required</sup> <a name="CreateAutoPredictor" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateAutoPredictor"></a>

```typescript
public readonly CreateAutoPredictor: string;
```

- *Type:* string

[Write] forecast:CreateAutoPredictor.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string;
```

- *Type:* string

[Write] forecast:CreateDataset.

---

##### `CreateDatasetGroup`<sup>Required</sup> <a name="CreateDatasetGroup" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateDatasetGroup"></a>

```typescript
public readonly CreateDatasetGroup: string;
```

- *Type:* string

[Write] forecast:CreateDatasetGroup.

---

##### `CreateDatasetImportJob`<sup>Required</sup> <a name="CreateDatasetImportJob" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateDatasetImportJob"></a>

```typescript
public readonly CreateDatasetImportJob: string;
```

- *Type:* string

[Write] forecast:CreateDatasetImportJob.

---

##### `CreateExplainability`<sup>Required</sup> <a name="CreateExplainability" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateExplainability"></a>

```typescript
public readonly CreateExplainability: string;
```

- *Type:* string

[Write] forecast:CreateExplainability.

---

##### `CreateExplainabilityExport`<sup>Required</sup> <a name="CreateExplainabilityExport" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateExplainabilityExport"></a>

```typescript
public readonly CreateExplainabilityExport: string;
```

- *Type:* string

[Write] forecast:CreateExplainabilityExport.

---

##### `CreateForecast`<sup>Required</sup> <a name="CreateForecast" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateForecast"></a>

```typescript
public readonly CreateForecast: string;
```

- *Type:* string

[Write] forecast:CreateForecast.

---

##### `CreateForecastEndpoint`<sup>Required</sup> <a name="CreateForecastEndpoint" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateForecastEndpoint"></a>

```typescript
public readonly CreateForecastEndpoint: string;
```

- *Type:* string

[Write] forecast:CreateForecastEndpoint.

---

##### `CreateForecastExportJob`<sup>Required</sup> <a name="CreateForecastExportJob" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateForecastExportJob"></a>

```typescript
public readonly CreateForecastExportJob: string;
```

- *Type:* string

[Write] forecast:CreateForecastExportJob.

---

##### `CreateMonitor`<sup>Required</sup> <a name="CreateMonitor" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateMonitor"></a>

```typescript
public readonly CreateMonitor: string;
```

- *Type:* string

[Write] forecast:CreateMonitor.

---

##### `CreatePredictor`<sup>Required</sup> <a name="CreatePredictor" id="@cdk_utils/iam.forecast.ForecastActions.property.CreatePredictor"></a>

```typescript
public readonly CreatePredictor: string;
```

- *Type:* string

[Write] forecast:CreatePredictor.

---

##### `CreatePredictorBacktestExportJob`<sup>Required</sup> <a name="CreatePredictorBacktestExportJob" id="@cdk_utils/iam.forecast.ForecastActions.property.CreatePredictorBacktestExportJob"></a>

```typescript
public readonly CreatePredictorBacktestExportJob: string;
```

- *Type:* string

[Write] forecast:CreatePredictorBacktestExportJob.

---

##### `CreateWhatIfAnalysis`<sup>Required</sup> <a name="CreateWhatIfAnalysis" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateWhatIfAnalysis"></a>

```typescript
public readonly CreateWhatIfAnalysis: string;
```

- *Type:* string

[Write] forecast:CreateWhatIfAnalysis.

---

##### `CreateWhatIfForecast`<sup>Required</sup> <a name="CreateWhatIfForecast" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateWhatIfForecast"></a>

```typescript
public readonly CreateWhatIfForecast: string;
```

- *Type:* string

[Write] forecast:CreateWhatIfForecast.

---

##### `CreateWhatIfForecastExport`<sup>Required</sup> <a name="CreateWhatIfForecastExport" id="@cdk_utils/iam.forecast.ForecastActions.property.CreateWhatIfForecastExport"></a>

```typescript
public readonly CreateWhatIfForecastExport: string;
```

- *Type:* string

[Write] forecast:CreateWhatIfForecastExport.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string;
```

- *Type:* string

[Write] forecast:DeleteDataset.

---

##### `DeleteDatasetGroup`<sup>Required</sup> <a name="DeleteDatasetGroup" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteDatasetGroup"></a>

```typescript
public readonly DeleteDatasetGroup: string;
```

- *Type:* string

[Write] forecast:DeleteDatasetGroup.

---

##### `DeleteDatasetImportJob`<sup>Required</sup> <a name="DeleteDatasetImportJob" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteDatasetImportJob"></a>

```typescript
public readonly DeleteDatasetImportJob: string;
```

- *Type:* string

[Write] forecast:DeleteDatasetImportJob.

---

##### `DeleteExplainability`<sup>Required</sup> <a name="DeleteExplainability" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteExplainability"></a>

```typescript
public readonly DeleteExplainability: string;
```

- *Type:* string

[Write] forecast:DeleteExplainability.

---

##### `DeleteExplainabilityExport`<sup>Required</sup> <a name="DeleteExplainabilityExport" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteExplainabilityExport"></a>

```typescript
public readonly DeleteExplainabilityExport: string;
```

- *Type:* string

[Write] forecast:DeleteExplainabilityExport.

---

##### `DeleteForecast`<sup>Required</sup> <a name="DeleteForecast" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteForecast"></a>

```typescript
public readonly DeleteForecast: string;
```

- *Type:* string

[Write] forecast:DeleteForecast.

---

##### `DeleteForecastEndpoint`<sup>Required</sup> <a name="DeleteForecastEndpoint" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteForecastEndpoint"></a>

```typescript
public readonly DeleteForecastEndpoint: string;
```

- *Type:* string

[Write] forecast:DeleteForecastEndpoint.

---

##### `DeleteForecastExportJob`<sup>Required</sup> <a name="DeleteForecastExportJob" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteForecastExportJob"></a>

```typescript
public readonly DeleteForecastExportJob: string;
```

- *Type:* string

[Write] forecast:DeleteForecastExportJob.

---

##### `DeleteMonitor`<sup>Required</sup> <a name="DeleteMonitor" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteMonitor"></a>

```typescript
public readonly DeleteMonitor: string;
```

- *Type:* string

[Write] forecast:DeleteMonitor.

---

##### `DeletePredictor`<sup>Required</sup> <a name="DeletePredictor" id="@cdk_utils/iam.forecast.ForecastActions.property.DeletePredictor"></a>

```typescript
public readonly DeletePredictor: string;
```

- *Type:* string

[Write] forecast:DeletePredictor.

---

##### `DeletePredictorBacktestExportJob`<sup>Required</sup> <a name="DeletePredictorBacktestExportJob" id="@cdk_utils/iam.forecast.ForecastActions.property.DeletePredictorBacktestExportJob"></a>

```typescript
public readonly DeletePredictorBacktestExportJob: string;
```

- *Type:* string

[Write] forecast:DeletePredictorBacktestExportJob.

---

##### `DeleteResourceTree`<sup>Required</sup> <a name="DeleteResourceTree" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteResourceTree"></a>

```typescript
public readonly DeleteResourceTree: string;
```

- *Type:* string

[Write] forecast:DeleteResourceTree.

---

##### `DeleteWhatIfAnalysis`<sup>Required</sup> <a name="DeleteWhatIfAnalysis" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteWhatIfAnalysis"></a>

```typescript
public readonly DeleteWhatIfAnalysis: string;
```

- *Type:* string

[Write] forecast:DeleteWhatIfAnalysis.

---

##### `DeleteWhatIfForecast`<sup>Required</sup> <a name="DeleteWhatIfForecast" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteWhatIfForecast"></a>

```typescript
public readonly DeleteWhatIfForecast: string;
```

- *Type:* string

[Write] forecast:DeleteWhatIfForecast.

---

##### `DeleteWhatIfForecastExport`<sup>Required</sup> <a name="DeleteWhatIfForecastExport" id="@cdk_utils/iam.forecast.ForecastActions.property.DeleteWhatIfForecastExport"></a>

```typescript
public readonly DeleteWhatIfForecastExport: string;
```

- *Type:* string

[Write] forecast:DeleteWhatIfForecastExport.

---

##### `DescribeAutoPredictor`<sup>Required</sup> <a name="DescribeAutoPredictor" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeAutoPredictor"></a>

```typescript
public readonly DescribeAutoPredictor: string;
```

- *Type:* string

[Read] forecast:DescribeAutoPredictor.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string;
```

- *Type:* string

[Read] forecast:DescribeDataset.

---

##### `DescribeDatasetGroup`<sup>Required</sup> <a name="DescribeDatasetGroup" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeDatasetGroup"></a>

```typescript
public readonly DescribeDatasetGroup: string;
```

- *Type:* string

[Read] forecast:DescribeDatasetGroup.

---

##### `DescribeDatasetImportJob`<sup>Required</sup> <a name="DescribeDatasetImportJob" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeDatasetImportJob"></a>

```typescript
public readonly DescribeDatasetImportJob: string;
```

- *Type:* string

[Read] forecast:DescribeDatasetImportJob.

---

##### `DescribeExplainability`<sup>Required</sup> <a name="DescribeExplainability" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeExplainability"></a>

```typescript
public readonly DescribeExplainability: string;
```

- *Type:* string

[Read] forecast:DescribeExplainability.

---

##### `DescribeExplainabilityExport`<sup>Required</sup> <a name="DescribeExplainabilityExport" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeExplainabilityExport"></a>

```typescript
public readonly DescribeExplainabilityExport: string;
```

- *Type:* string

[Read] forecast:DescribeExplainabilityExport.

---

##### `DescribeForecast`<sup>Required</sup> <a name="DescribeForecast" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeForecast"></a>

```typescript
public readonly DescribeForecast: string;
```

- *Type:* string

[Read] forecast:DescribeForecast.

---

##### `DescribeForecastEndpoint`<sup>Required</sup> <a name="DescribeForecastEndpoint" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeForecastEndpoint"></a>

```typescript
public readonly DescribeForecastEndpoint: string;
```

- *Type:* string

[Read] forecast:DescribeForecastEndpoint.

---

##### `DescribeForecastExportJob`<sup>Required</sup> <a name="DescribeForecastExportJob" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeForecastExportJob"></a>

```typescript
public readonly DescribeForecastExportJob: string;
```

- *Type:* string

[Read] forecast:DescribeForecastExportJob.

---

##### `DescribeMonitor`<sup>Required</sup> <a name="DescribeMonitor" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeMonitor"></a>

```typescript
public readonly DescribeMonitor: string;
```

- *Type:* string

[Read] forecast:DescribeMonitor.

---

##### `DescribePredictor`<sup>Required</sup> <a name="DescribePredictor" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribePredictor"></a>

```typescript
public readonly DescribePredictor: string;
```

- *Type:* string

[Read] forecast:DescribePredictor.

---

##### `DescribePredictorBacktestExportJob`<sup>Required</sup> <a name="DescribePredictorBacktestExportJob" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribePredictorBacktestExportJob"></a>

```typescript
public readonly DescribePredictorBacktestExportJob: string;
```

- *Type:* string

[Read] forecast:DescribePredictorBacktestExportJob.

---

##### `DescribeWhatIfAnalysis`<sup>Required</sup> <a name="DescribeWhatIfAnalysis" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeWhatIfAnalysis"></a>

```typescript
public readonly DescribeWhatIfAnalysis: string;
```

- *Type:* string

[Read] forecast:DescribeWhatIfAnalysis.

---

##### `DescribeWhatIfForecast`<sup>Required</sup> <a name="DescribeWhatIfForecast" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeWhatIfForecast"></a>

```typescript
public readonly DescribeWhatIfForecast: string;
```

- *Type:* string

[Read] forecast:DescribeWhatIfForecast.

---

##### `DescribeWhatIfForecastExport`<sup>Required</sup> <a name="DescribeWhatIfForecastExport" id="@cdk_utils/iam.forecast.ForecastActions.property.DescribeWhatIfForecastExport"></a>

```typescript
public readonly DescribeWhatIfForecastExport: string;
```

- *Type:* string

[Read] forecast:DescribeWhatIfForecastExport.

---

##### `InvokeForecastEndpoint`<sup>Required</sup> <a name="InvokeForecastEndpoint" id="@cdk_utils/iam.forecast.ForecastActions.property.InvokeForecastEndpoint"></a>

```typescript
public readonly InvokeForecastEndpoint: string;
```

- *Type:* string

[Read] forecast:InvokeForecastEndpoint.

---

##### `ListDatasetGroups`<sup>Required</sup> <a name="ListDatasetGroups" id="@cdk_utils/iam.forecast.ForecastActions.property.ListDatasetGroups"></a>

```typescript
public readonly ListDatasetGroups: string;
```

- *Type:* string

[Read] forecast:ListDatasetGroups.

---

##### `ListDatasetImportJobs`<sup>Required</sup> <a name="ListDatasetImportJobs" id="@cdk_utils/iam.forecast.ForecastActions.property.ListDatasetImportJobs"></a>

```typescript
public readonly ListDatasetImportJobs: string;
```

- *Type:* string

[Read] forecast:ListDatasetImportJobs.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.forecast.ForecastActions.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string;
```

- *Type:* string

[Read] forecast:ListDatasets.

---

##### `ListExplainabilities`<sup>Required</sup> <a name="ListExplainabilities" id="@cdk_utils/iam.forecast.ForecastActions.property.ListExplainabilities"></a>

```typescript
public readonly ListExplainabilities: string;
```

- *Type:* string

[Read] forecast:ListExplainabilities.

---

##### `ListExplainabilityExports`<sup>Required</sup> <a name="ListExplainabilityExports" id="@cdk_utils/iam.forecast.ForecastActions.property.ListExplainabilityExports"></a>

```typescript
public readonly ListExplainabilityExports: string;
```

- *Type:* string

[Read] forecast:ListExplainabilityExports.

---

##### `ListForecastExportJobs`<sup>Required</sup> <a name="ListForecastExportJobs" id="@cdk_utils/iam.forecast.ForecastActions.property.ListForecastExportJobs"></a>

```typescript
public readonly ListForecastExportJobs: string;
```

- *Type:* string

[Read] forecast:ListForecastExportJobs.

---

##### `ListForecasts`<sup>Required</sup> <a name="ListForecasts" id="@cdk_utils/iam.forecast.ForecastActions.property.ListForecasts"></a>

```typescript
public readonly ListForecasts: string;
```

- *Type:* string

[Read] forecast:ListForecasts.

---

##### `ListMonitorEvaluations`<sup>Required</sup> <a name="ListMonitorEvaluations" id="@cdk_utils/iam.forecast.ForecastActions.property.ListMonitorEvaluations"></a>

```typescript
public readonly ListMonitorEvaluations: string;
```

- *Type:* string

[Read] forecast:ListMonitorEvaluations.

---

##### `ListMonitors`<sup>Required</sup> <a name="ListMonitors" id="@cdk_utils/iam.forecast.ForecastActions.property.ListMonitors"></a>

```typescript
public readonly ListMonitors: string;
```

- *Type:* string

[Read] forecast:ListMonitors.

---

##### `ListPredictorBacktestExportJobs`<sup>Required</sup> <a name="ListPredictorBacktestExportJobs" id="@cdk_utils/iam.forecast.ForecastActions.property.ListPredictorBacktestExportJobs"></a>

```typescript
public readonly ListPredictorBacktestExportJobs: string;
```

- *Type:* string

[Read] forecast:ListPredictorBacktestExportJobs.

---

##### `ListPredictors`<sup>Required</sup> <a name="ListPredictors" id="@cdk_utils/iam.forecast.ForecastActions.property.ListPredictors"></a>

```typescript
public readonly ListPredictors: string;
```

- *Type:* string

[Read] forecast:ListPredictors.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.forecast.ForecastActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] forecast:ListTagsForResource.

---

##### `ListWhatIfAnalyses`<sup>Required</sup> <a name="ListWhatIfAnalyses" id="@cdk_utils/iam.forecast.ForecastActions.property.ListWhatIfAnalyses"></a>

```typescript
public readonly ListWhatIfAnalyses: string;
```

- *Type:* string

[Read] forecast:ListWhatIfAnalyses.

---

##### `ListWhatIfForecastExports`<sup>Required</sup> <a name="ListWhatIfForecastExports" id="@cdk_utils/iam.forecast.ForecastActions.property.ListWhatIfForecastExports"></a>

```typescript
public readonly ListWhatIfForecastExports: string;
```

- *Type:* string

[Read] forecast:ListWhatIfForecastExports.

---

##### `ListWhatIfForecasts`<sup>Required</sup> <a name="ListWhatIfForecasts" id="@cdk_utils/iam.forecast.ForecastActions.property.ListWhatIfForecasts"></a>

```typescript
public readonly ListWhatIfForecasts: string;
```

- *Type:* string

[Read] forecast:ListWhatIfForecasts.

---

##### `QueryForecast`<sup>Required</sup> <a name="QueryForecast" id="@cdk_utils/iam.forecast.ForecastActions.property.QueryForecast"></a>

```typescript
public readonly QueryForecast: string;
```

- *Type:* string

[Read] forecast:QueryForecast.

---

##### `QueryWhatIfForecast`<sup>Required</sup> <a name="QueryWhatIfForecast" id="@cdk_utils/iam.forecast.ForecastActions.property.QueryWhatIfForecast"></a>

```typescript
public readonly QueryWhatIfForecast: string;
```

- *Type:* string

[Read] forecast:QueryWhatIfForecast.

---

##### `ResumeResource`<sup>Required</sup> <a name="ResumeResource" id="@cdk_utils/iam.forecast.ForecastActions.property.ResumeResource"></a>

```typescript
public readonly ResumeResource: string;
```

- *Type:* string

[Write] forecast:ResumeResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.forecast.ForecastActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StopResource`<sup>Required</sup> <a name="StopResource" id="@cdk_utils/iam.forecast.ForecastActions.property.StopResource"></a>

```typescript
public readonly StopResource: string;
```

- *Type:* string

[Write] forecast:StopResource.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.forecast.ForecastActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] forecast:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.forecast.ForecastActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] forecast:UntagResource.

---

##### `UpdateDatasetGroup`<sup>Required</sup> <a name="UpdateDatasetGroup" id="@cdk_utils/iam.forecast.ForecastActions.property.UpdateDatasetGroup"></a>

```typescript
public readonly UpdateDatasetGroup: string;
```

- *Type:* string

[Write] forecast:UpdateDatasetGroup.

---

### ForecastConditions <a name="ForecastConditions" id="@cdk_utils/iam.forecast.ForecastConditions"></a>

Condition key constants and builders for forecast.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.forecast.ForecastConditions.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

new forecast.ForecastConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.forecast.ForecastConditions.requestTag"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.forecast.ForecastConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.forecast.ForecastConditions.resourceTag"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.forecast.ForecastConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.forecast.ForecastConditions.tagKeys"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.forecast.ForecastConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateAutoPredictorConditionKeys">CreateAutoPredictorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAutoPredictor action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateDatasetConditionKeys">CreateDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataset action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateDatasetGroupConditionKeys">CreateDatasetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDatasetGroup action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateDatasetImportJobConditionKeys">CreateDatasetImportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDatasetImportJob action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateExplainabilityConditionKeys">CreateExplainabilityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExplainability action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateExplainabilityExportConditionKeys">CreateExplainabilityExportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExplainabilityExport action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateForecastConditionKeys">CreateForecastConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateForecast action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateForecastEndpointConditionKeys">CreateForecastEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateForecastEndpoint action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateForecastExportJobConditionKeys">CreateForecastExportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateForecastExportJob action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateMonitorConditionKeys">CreateMonitorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMonitor action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreatePredictorBacktestExportJobConditionKeys">CreatePredictorBacktestExportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePredictorBacktestExportJob action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreatePredictorConditionKeys">CreatePredictorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePredictor action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateWhatIfAnalysisConditionKeys">CreateWhatIfAnalysisConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWhatIfAnalysis action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateWhatIfForecastConditionKeys">CreateWhatIfForecastConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWhatIfForecast action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.CreateWhatIfForecastExportConditionKeys">CreateWhatIfForecastExportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWhatIfForecastExport action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.ResumeResourceConditionKeys">ResumeResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ResumeResource action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.StopResourceConditionKeys">StopResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopResource action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.forecast.ForecastConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.forecast.ForecastConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.forecast.ForecastConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAutoPredictorConditionKeys`<sup>Required</sup> <a name="CreateAutoPredictorConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateAutoPredictorConditionKeys"></a>

```typescript
public readonly CreateAutoPredictorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAutoPredictor action.

---

##### `CreateDatasetConditionKeys`<sup>Required</sup> <a name="CreateDatasetConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateDatasetConditionKeys"></a>

```typescript
public readonly CreateDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataset action.

---

##### `CreateDatasetGroupConditionKeys`<sup>Required</sup> <a name="CreateDatasetGroupConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateDatasetGroupConditionKeys"></a>

```typescript
public readonly CreateDatasetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDatasetGroup action.

---

##### `CreateDatasetImportJobConditionKeys`<sup>Required</sup> <a name="CreateDatasetImportJobConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateDatasetImportJobConditionKeys"></a>

```typescript
public readonly CreateDatasetImportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDatasetImportJob action.

---

##### `CreateExplainabilityConditionKeys`<sup>Required</sup> <a name="CreateExplainabilityConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateExplainabilityConditionKeys"></a>

```typescript
public readonly CreateExplainabilityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExplainability action.

---

##### `CreateExplainabilityExportConditionKeys`<sup>Required</sup> <a name="CreateExplainabilityExportConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateExplainabilityExportConditionKeys"></a>

```typescript
public readonly CreateExplainabilityExportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExplainabilityExport action.

---

##### `CreateForecastConditionKeys`<sup>Required</sup> <a name="CreateForecastConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateForecastConditionKeys"></a>

```typescript
public readonly CreateForecastConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateForecast action.

---

##### `CreateForecastEndpointConditionKeys`<sup>Required</sup> <a name="CreateForecastEndpointConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateForecastEndpointConditionKeys"></a>

```typescript
public readonly CreateForecastEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateForecastEndpoint action.

---

##### `CreateForecastExportJobConditionKeys`<sup>Required</sup> <a name="CreateForecastExportJobConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateForecastExportJobConditionKeys"></a>

```typescript
public readonly CreateForecastExportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateForecastExportJob action.

---

##### `CreateMonitorConditionKeys`<sup>Required</sup> <a name="CreateMonitorConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateMonitorConditionKeys"></a>

```typescript
public readonly CreateMonitorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMonitor action.

---

##### `CreatePredictorBacktestExportJobConditionKeys`<sup>Required</sup> <a name="CreatePredictorBacktestExportJobConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreatePredictorBacktestExportJobConditionKeys"></a>

```typescript
public readonly CreatePredictorBacktestExportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePredictorBacktestExportJob action.

---

##### `CreatePredictorConditionKeys`<sup>Required</sup> <a name="CreatePredictorConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreatePredictorConditionKeys"></a>

```typescript
public readonly CreatePredictorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePredictor action.

---

##### `CreateWhatIfAnalysisConditionKeys`<sup>Required</sup> <a name="CreateWhatIfAnalysisConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateWhatIfAnalysisConditionKeys"></a>

```typescript
public readonly CreateWhatIfAnalysisConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWhatIfAnalysis action.

---

##### `CreateWhatIfForecastConditionKeys`<sup>Required</sup> <a name="CreateWhatIfForecastConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateWhatIfForecastConditionKeys"></a>

```typescript
public readonly CreateWhatIfForecastConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWhatIfForecast action.

---

##### `CreateWhatIfForecastExportConditionKeys`<sup>Required</sup> <a name="CreateWhatIfForecastExportConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.CreateWhatIfForecastExportConditionKeys"></a>

```typescript
public readonly CreateWhatIfForecastExportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWhatIfForecastExport action.

---

##### `ResumeResourceConditionKeys`<sup>Required</sup> <a name="ResumeResourceConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.ResumeResourceConditionKeys"></a>

```typescript
public readonly ResumeResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ResumeResource action.

---

##### `StopResourceConditionKeys`<sup>Required</sup> <a name="StopResourceConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.StopResourceConditionKeys"></a>

```typescript
public readonly StopResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.forecast.ForecastConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ForecastOperations <a name="ForecastOperations" id="@cdk_utils/iam.forecast.ForecastOperations"></a>

API operation to required IAM actions mapping for forecast.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.forecast.ForecastOperations.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

new forecast.ForecastOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateAutoPredictor">CreateAutoPredictor</a></code> | <code>string[]</code> | IAM actions required for the CreateAutoPredictor API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateDataset">CreateDataset</a></code> | <code>string[]</code> | IAM actions required for the CreateDataset API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateDatasetGroup">CreateDatasetGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateDatasetGroup API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateDatasetImportJob">CreateDatasetImportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateDatasetImportJob API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateExplainability">CreateExplainability</a></code> | <code>string[]</code> | IAM actions required for the CreateExplainability API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateExplainabilityExport">CreateExplainabilityExport</a></code> | <code>string[]</code> | IAM actions required for the CreateExplainabilityExport API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateForecast">CreateForecast</a></code> | <code>string[]</code> | IAM actions required for the CreateForecast API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateForecastExportJob">CreateForecastExportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateForecastExportJob API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateMonitor">CreateMonitor</a></code> | <code>string[]</code> | IAM actions required for the CreateMonitor API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreatePredictor">CreatePredictor</a></code> | <code>string[]</code> | IAM actions required for the CreatePredictor API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreatePredictorBacktestExportJob">CreatePredictorBacktestExportJob</a></code> | <code>string[]</code> | IAM actions required for the CreatePredictorBacktestExportJob API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateWhatIfAnalysis">CreateWhatIfAnalysis</a></code> | <code>string[]</code> | IAM actions required for the CreateWhatIfAnalysis API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateWhatIfForecast">CreateWhatIfForecast</a></code> | <code>string[]</code> | IAM actions required for the CreateWhatIfForecast API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.CreateWhatIfForecastExport">CreateWhatIfForecastExport</a></code> | <code>string[]</code> | IAM actions required for the CreateWhatIfForecastExport API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteDataset">DeleteDataset</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataset API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteDatasetGroup">DeleteDatasetGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDatasetGroup API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteDatasetImportJob">DeleteDatasetImportJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteDatasetImportJob API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteExplainability">DeleteExplainability</a></code> | <code>string[]</code> | IAM actions required for the DeleteExplainability API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteExplainabilityExport">DeleteExplainabilityExport</a></code> | <code>string[]</code> | IAM actions required for the DeleteExplainabilityExport API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteForecast">DeleteForecast</a></code> | <code>string[]</code> | IAM actions required for the DeleteForecast API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteForecastExportJob">DeleteForecastExportJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteForecastExportJob API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteMonitor">DeleteMonitor</a></code> | <code>string[]</code> | IAM actions required for the DeleteMonitor API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeletePredictor">DeletePredictor</a></code> | <code>string[]</code> | IAM actions required for the DeletePredictor API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeletePredictorBacktestExportJob">DeletePredictorBacktestExportJob</a></code> | <code>string[]</code> | IAM actions required for the DeletePredictorBacktestExportJob API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteResourceTree">DeleteResourceTree</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceTree API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteWhatIfAnalysis">DeleteWhatIfAnalysis</a></code> | <code>string[]</code> | IAM actions required for the DeleteWhatIfAnalysis API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteWhatIfForecast">DeleteWhatIfForecast</a></code> | <code>string[]</code> | IAM actions required for the DeleteWhatIfForecast API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DeleteWhatIfForecastExport">DeleteWhatIfForecastExport</a></code> | <code>string[]</code> | IAM actions required for the DeleteWhatIfForecastExport API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeAutoPredictor">DescribeAutoPredictor</a></code> | <code>string[]</code> | IAM actions required for the DescribeAutoPredictor API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeDataset">DescribeDataset</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataset API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeDatasetGroup">DescribeDatasetGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeDatasetGroup API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeDatasetImportJob">DescribeDatasetImportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeDatasetImportJob API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeExplainability">DescribeExplainability</a></code> | <code>string[]</code> | IAM actions required for the DescribeExplainability API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeExplainabilityExport">DescribeExplainabilityExport</a></code> | <code>string[]</code> | IAM actions required for the DescribeExplainabilityExport API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeForecast">DescribeForecast</a></code> | <code>string[]</code> | IAM actions required for the DescribeForecast API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeForecastExportJob">DescribeForecastExportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeForecastExportJob API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeMonitor">DescribeMonitor</a></code> | <code>string[]</code> | IAM actions required for the DescribeMonitor API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribePredictor">DescribePredictor</a></code> | <code>string[]</code> | IAM actions required for the DescribePredictor API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribePredictorBacktestExportJob">DescribePredictorBacktestExportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribePredictorBacktestExportJob API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeWhatIfAnalysis">DescribeWhatIfAnalysis</a></code> | <code>string[]</code> | IAM actions required for the DescribeWhatIfAnalysis API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeWhatIfForecast">DescribeWhatIfForecast</a></code> | <code>string[]</code> | IAM actions required for the DescribeWhatIfForecast API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.DescribeWhatIfForecastExport">DescribeWhatIfForecastExport</a></code> | <code>string[]</code> | IAM actions required for the DescribeWhatIfForecastExport API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListDatasetGroups">ListDatasetGroups</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetGroups API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListDatasetImportJobs">ListDatasetImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetImportJobs API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListDatasets">ListDatasets</a></code> | <code>string[]</code> | IAM actions required for the ListDatasets API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListExplainabilities">ListExplainabilities</a></code> | <code>string[]</code> | IAM actions required for the ListExplainabilities API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListExplainabilityExports">ListExplainabilityExports</a></code> | <code>string[]</code> | IAM actions required for the ListExplainabilityExports API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListForecastExportJobs">ListForecastExportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListForecastExportJobs API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListForecasts">ListForecasts</a></code> | <code>string[]</code> | IAM actions required for the ListForecasts API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListMonitorEvaluations">ListMonitorEvaluations</a></code> | <code>string[]</code> | IAM actions required for the ListMonitorEvaluations API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListMonitors">ListMonitors</a></code> | <code>string[]</code> | IAM actions required for the ListMonitors API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListPredictorBacktestExportJobs">ListPredictorBacktestExportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListPredictorBacktestExportJobs API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListPredictors">ListPredictors</a></code> | <code>string[]</code> | IAM actions required for the ListPredictors API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListWhatIfAnalyses">ListWhatIfAnalyses</a></code> | <code>string[]</code> | IAM actions required for the ListWhatIfAnalyses API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListWhatIfForecastExports">ListWhatIfForecastExports</a></code> | <code>string[]</code> | IAM actions required for the ListWhatIfForecastExports API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ListWhatIfForecasts">ListWhatIfForecasts</a></code> | <code>string[]</code> | IAM actions required for the ListWhatIfForecasts API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.opGetAccuracyMetrics">opGetAccuracyMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetAccuracyMetrics API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.QueryForecast">QueryForecast</a></code> | <code>string[]</code> | IAM actions required for the QueryForecast API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.QueryWhatIfForecast">QueryWhatIfForecast</a></code> | <code>string[]</code> | IAM actions required for the QueryWhatIfForecast API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.ResumeResource">ResumeResource</a></code> | <code>string[]</code> | IAM actions required for the ResumeResource API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.StopResource">StopResource</a></code> | <code>string[]</code> | IAM actions required for the StopResource API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastOperations.property.UpdateDatasetGroup">UpdateDatasetGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateDatasetGroup API call. |

---

##### `CreateAutoPredictor`<sup>Required</sup> <a name="CreateAutoPredictor" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateAutoPredictor"></a>

```typescript
public readonly CreateAutoPredictor: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutoPredictor API call.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataset API call.

---

##### `CreateDatasetGroup`<sup>Required</sup> <a name="CreateDatasetGroup" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateDatasetGroup"></a>

```typescript
public readonly CreateDatasetGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDatasetGroup API call.

---

##### `CreateDatasetImportJob`<sup>Required</sup> <a name="CreateDatasetImportJob" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateDatasetImportJob"></a>

```typescript
public readonly CreateDatasetImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateDatasetImportJob API call.

---

##### `CreateExplainability`<sup>Required</sup> <a name="CreateExplainability" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateExplainability"></a>

```typescript
public readonly CreateExplainability: string[];
```

- *Type:* string[]

IAM actions required for the CreateExplainability API call.

---

##### `CreateExplainabilityExport`<sup>Required</sup> <a name="CreateExplainabilityExport" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateExplainabilityExport"></a>

```typescript
public readonly CreateExplainabilityExport: string[];
```

- *Type:* string[]

IAM actions required for the CreateExplainabilityExport API call.

---

##### `CreateForecast`<sup>Required</sup> <a name="CreateForecast" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateForecast"></a>

```typescript
public readonly CreateForecast: string[];
```

- *Type:* string[]

IAM actions required for the CreateForecast API call.

---

##### `CreateForecastExportJob`<sup>Required</sup> <a name="CreateForecastExportJob" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateForecastExportJob"></a>

```typescript
public readonly CreateForecastExportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateForecastExportJob API call.

---

##### `CreateMonitor`<sup>Required</sup> <a name="CreateMonitor" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateMonitor"></a>

```typescript
public readonly CreateMonitor: string[];
```

- *Type:* string[]

IAM actions required for the CreateMonitor API call.

---

##### `CreatePredictor`<sup>Required</sup> <a name="CreatePredictor" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreatePredictor"></a>

```typescript
public readonly CreatePredictor: string[];
```

- *Type:* string[]

IAM actions required for the CreatePredictor API call.

---

##### `CreatePredictorBacktestExportJob`<sup>Required</sup> <a name="CreatePredictorBacktestExportJob" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreatePredictorBacktestExportJob"></a>

```typescript
public readonly CreatePredictorBacktestExportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreatePredictorBacktestExportJob API call.

---

##### `CreateWhatIfAnalysis`<sup>Required</sup> <a name="CreateWhatIfAnalysis" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateWhatIfAnalysis"></a>

```typescript
public readonly CreateWhatIfAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the CreateWhatIfAnalysis API call.

---

##### `CreateWhatIfForecast`<sup>Required</sup> <a name="CreateWhatIfForecast" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateWhatIfForecast"></a>

```typescript
public readonly CreateWhatIfForecast: string[];
```

- *Type:* string[]

IAM actions required for the CreateWhatIfForecast API call.

---

##### `CreateWhatIfForecastExport`<sup>Required</sup> <a name="CreateWhatIfForecastExport" id="@cdk_utils/iam.forecast.ForecastOperations.property.CreateWhatIfForecastExport"></a>

```typescript
public readonly CreateWhatIfForecastExport: string[];
```

- *Type:* string[]

IAM actions required for the CreateWhatIfForecastExport API call.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataset API call.

---

##### `DeleteDatasetGroup`<sup>Required</sup> <a name="DeleteDatasetGroup" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteDatasetGroup"></a>

```typescript
public readonly DeleteDatasetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDatasetGroup API call.

---

##### `DeleteDatasetImportJob`<sup>Required</sup> <a name="DeleteDatasetImportJob" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteDatasetImportJob"></a>

```typescript
public readonly DeleteDatasetImportJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDatasetImportJob API call.

---

##### `DeleteExplainability`<sup>Required</sup> <a name="DeleteExplainability" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteExplainability"></a>

```typescript
public readonly DeleteExplainability: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExplainability API call.

---

##### `DeleteExplainabilityExport`<sup>Required</sup> <a name="DeleteExplainabilityExport" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteExplainabilityExport"></a>

```typescript
public readonly DeleteExplainabilityExport: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExplainabilityExport API call.

---

##### `DeleteForecast`<sup>Required</sup> <a name="DeleteForecast" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteForecast"></a>

```typescript
public readonly DeleteForecast: string[];
```

- *Type:* string[]

IAM actions required for the DeleteForecast API call.

---

##### `DeleteForecastExportJob`<sup>Required</sup> <a name="DeleteForecastExportJob" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteForecastExportJob"></a>

```typescript
public readonly DeleteForecastExportJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteForecastExportJob API call.

---

##### `DeleteMonitor`<sup>Required</sup> <a name="DeleteMonitor" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteMonitor"></a>

```typescript
public readonly DeleteMonitor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMonitor API call.

---

##### `DeletePredictor`<sup>Required</sup> <a name="DeletePredictor" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeletePredictor"></a>

```typescript
public readonly DeletePredictor: string[];
```

- *Type:* string[]

IAM actions required for the DeletePredictor API call.

---

##### `DeletePredictorBacktestExportJob`<sup>Required</sup> <a name="DeletePredictorBacktestExportJob" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeletePredictorBacktestExportJob"></a>

```typescript
public readonly DeletePredictorBacktestExportJob: string[];
```

- *Type:* string[]

IAM actions required for the DeletePredictorBacktestExportJob API call.

---

##### `DeleteResourceTree`<sup>Required</sup> <a name="DeleteResourceTree" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteResourceTree"></a>

```typescript
public readonly DeleteResourceTree: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceTree API call.

---

##### `DeleteWhatIfAnalysis`<sup>Required</sup> <a name="DeleteWhatIfAnalysis" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteWhatIfAnalysis"></a>

```typescript
public readonly DeleteWhatIfAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWhatIfAnalysis API call.

---

##### `DeleteWhatIfForecast`<sup>Required</sup> <a name="DeleteWhatIfForecast" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteWhatIfForecast"></a>

```typescript
public readonly DeleteWhatIfForecast: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWhatIfForecast API call.

---

##### `DeleteWhatIfForecastExport`<sup>Required</sup> <a name="DeleteWhatIfForecastExport" id="@cdk_utils/iam.forecast.ForecastOperations.property.DeleteWhatIfForecastExport"></a>

```typescript
public readonly DeleteWhatIfForecastExport: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWhatIfForecastExport API call.

---

##### `DescribeAutoPredictor`<sup>Required</sup> <a name="DescribeAutoPredictor" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeAutoPredictor"></a>

```typescript
public readonly DescribeAutoPredictor: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAutoPredictor API call.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataset API call.

---

##### `DescribeDatasetGroup`<sup>Required</sup> <a name="DescribeDatasetGroup" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeDatasetGroup"></a>

```typescript
public readonly DescribeDatasetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDatasetGroup API call.

---

##### `DescribeDatasetImportJob`<sup>Required</sup> <a name="DescribeDatasetImportJob" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeDatasetImportJob"></a>

```typescript
public readonly DescribeDatasetImportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDatasetImportJob API call.

---

##### `DescribeExplainability`<sup>Required</sup> <a name="DescribeExplainability" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeExplainability"></a>

```typescript
public readonly DescribeExplainability: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExplainability API call.

---

##### `DescribeExplainabilityExport`<sup>Required</sup> <a name="DescribeExplainabilityExport" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeExplainabilityExport"></a>

```typescript
public readonly DescribeExplainabilityExport: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExplainabilityExport API call.

---

##### `DescribeForecast`<sup>Required</sup> <a name="DescribeForecast" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeForecast"></a>

```typescript
public readonly DescribeForecast: string[];
```

- *Type:* string[]

IAM actions required for the DescribeForecast API call.

---

##### `DescribeForecastExportJob`<sup>Required</sup> <a name="DescribeForecastExportJob" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeForecastExportJob"></a>

```typescript
public readonly DescribeForecastExportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeForecastExportJob API call.

---

##### `DescribeMonitor`<sup>Required</sup> <a name="DescribeMonitor" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeMonitor"></a>

```typescript
public readonly DescribeMonitor: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMonitor API call.

---

##### `DescribePredictor`<sup>Required</sup> <a name="DescribePredictor" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribePredictor"></a>

```typescript
public readonly DescribePredictor: string[];
```

- *Type:* string[]

IAM actions required for the DescribePredictor API call.

---

##### `DescribePredictorBacktestExportJob`<sup>Required</sup> <a name="DescribePredictorBacktestExportJob" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribePredictorBacktestExportJob"></a>

```typescript
public readonly DescribePredictorBacktestExportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribePredictorBacktestExportJob API call.

---

##### `DescribeWhatIfAnalysis`<sup>Required</sup> <a name="DescribeWhatIfAnalysis" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeWhatIfAnalysis"></a>

```typescript
public readonly DescribeWhatIfAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWhatIfAnalysis API call.

---

##### `DescribeWhatIfForecast`<sup>Required</sup> <a name="DescribeWhatIfForecast" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeWhatIfForecast"></a>

```typescript
public readonly DescribeWhatIfForecast: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWhatIfForecast API call.

---

##### `DescribeWhatIfForecastExport`<sup>Required</sup> <a name="DescribeWhatIfForecastExport" id="@cdk_utils/iam.forecast.ForecastOperations.property.DescribeWhatIfForecastExport"></a>

```typescript
public readonly DescribeWhatIfForecastExport: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWhatIfForecastExport API call.

---

##### `ListDatasetGroups`<sup>Required</sup> <a name="ListDatasetGroups" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListDatasetGroups"></a>

```typescript
public readonly ListDatasetGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetGroups API call.

---

##### `ListDatasetImportJobs`<sup>Required</sup> <a name="ListDatasetImportJobs" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListDatasetImportJobs"></a>

```typescript
public readonly ListDatasetImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetImportJobs API call.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasets API call.

---

##### `ListExplainabilities`<sup>Required</sup> <a name="ListExplainabilities" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListExplainabilities"></a>

```typescript
public readonly ListExplainabilities: string[];
```

- *Type:* string[]

IAM actions required for the ListExplainabilities API call.

---

##### `ListExplainabilityExports`<sup>Required</sup> <a name="ListExplainabilityExports" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListExplainabilityExports"></a>

```typescript
public readonly ListExplainabilityExports: string[];
```

- *Type:* string[]

IAM actions required for the ListExplainabilityExports API call.

---

##### `ListForecastExportJobs`<sup>Required</sup> <a name="ListForecastExportJobs" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListForecastExportJobs"></a>

```typescript
public readonly ListForecastExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListForecastExportJobs API call.

---

##### `ListForecasts`<sup>Required</sup> <a name="ListForecasts" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListForecasts"></a>

```typescript
public readonly ListForecasts: string[];
```

- *Type:* string[]

IAM actions required for the ListForecasts API call.

---

##### `ListMonitorEvaluations`<sup>Required</sup> <a name="ListMonitorEvaluations" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListMonitorEvaluations"></a>

```typescript
public readonly ListMonitorEvaluations: string[];
```

- *Type:* string[]

IAM actions required for the ListMonitorEvaluations API call.

---

##### `ListMonitors`<sup>Required</sup> <a name="ListMonitors" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListMonitors"></a>

```typescript
public readonly ListMonitors: string[];
```

- *Type:* string[]

IAM actions required for the ListMonitors API call.

---

##### `ListPredictorBacktestExportJobs`<sup>Required</sup> <a name="ListPredictorBacktestExportJobs" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListPredictorBacktestExportJobs"></a>

```typescript
public readonly ListPredictorBacktestExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListPredictorBacktestExportJobs API call.

---

##### `ListPredictors`<sup>Required</sup> <a name="ListPredictors" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListPredictors"></a>

```typescript
public readonly ListPredictors: string[];
```

- *Type:* string[]

IAM actions required for the ListPredictors API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWhatIfAnalyses`<sup>Required</sup> <a name="ListWhatIfAnalyses" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListWhatIfAnalyses"></a>

```typescript
public readonly ListWhatIfAnalyses: string[];
```

- *Type:* string[]

IAM actions required for the ListWhatIfAnalyses API call.

---

##### `ListWhatIfForecastExports`<sup>Required</sup> <a name="ListWhatIfForecastExports" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListWhatIfForecastExports"></a>

```typescript
public readonly ListWhatIfForecastExports: string[];
```

- *Type:* string[]

IAM actions required for the ListWhatIfForecastExports API call.

---

##### `ListWhatIfForecasts`<sup>Required</sup> <a name="ListWhatIfForecasts" id="@cdk_utils/iam.forecast.ForecastOperations.property.ListWhatIfForecasts"></a>

```typescript
public readonly ListWhatIfForecasts: string[];
```

- *Type:* string[]

IAM actions required for the ListWhatIfForecasts API call.

---

##### `opGetAccuracyMetrics`<sup>Required</sup> <a name="opGetAccuracyMetrics" id="@cdk_utils/iam.forecast.ForecastOperations.property.opGetAccuracyMetrics"></a>

```typescript
public readonly opGetAccuracyMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetAccuracyMetrics API call.

---

##### `QueryForecast`<sup>Required</sup> <a name="QueryForecast" id="@cdk_utils/iam.forecast.ForecastOperations.property.QueryForecast"></a>

```typescript
public readonly QueryForecast: string[];
```

- *Type:* string[]

IAM actions required for the QueryForecast API call.

---

##### `QueryWhatIfForecast`<sup>Required</sup> <a name="QueryWhatIfForecast" id="@cdk_utils/iam.forecast.ForecastOperations.property.QueryWhatIfForecast"></a>

```typescript
public readonly QueryWhatIfForecast: string[];
```

- *Type:* string[]

IAM actions required for the QueryWhatIfForecast API call.

---

##### `ResumeResource`<sup>Required</sup> <a name="ResumeResource" id="@cdk_utils/iam.forecast.ForecastOperations.property.ResumeResource"></a>

```typescript
public readonly ResumeResource: string[];
```

- *Type:* string[]

IAM actions required for the ResumeResource API call.

---

##### `StopResource`<sup>Required</sup> <a name="StopResource" id="@cdk_utils/iam.forecast.ForecastOperations.property.StopResource"></a>

```typescript
public readonly StopResource: string[];
```

- *Type:* string[]

IAM actions required for the StopResource API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.forecast.ForecastOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.forecast.ForecastOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDatasetGroup`<sup>Required</sup> <a name="UpdateDatasetGroup" id="@cdk_utils/iam.forecast.ForecastOperations.property.UpdateDatasetGroup"></a>

```typescript
public readonly UpdateDatasetGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDatasetGroup API call.

---

### ForecastResources <a name="ForecastResources" id="@cdk_utils/iam.forecast.ForecastResources"></a>

ARN builders, validators, and parsers for forecast resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.forecast.ForecastResources.Initializer"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

new forecast.ForecastResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.algorithm">algorithm</a></code> | Builds an ARN for the algorithm resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.datasetGroup">datasetGroup</a></code> | Builds an ARN for the datasetGroup resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.datasetImportJob">datasetImportJob</a></code> | Builds an ARN for the datasetImportJob resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.endpoint">endpoint</a></code> | Builds an ARN for the endpoint resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.explainability">explainability</a></code> | Builds an ARN for the explainability resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.explainabilityExport">explainabilityExport</a></code> | Builds an ARN for the explainabilityExport resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.forecast">forecast</a></code> | Builds an ARN for the forecast resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.forecastExport">forecastExport</a></code> | Builds an ARN for the forecastExport resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidAlgorithmArn">isValidAlgorithmArn</a></code> | Validates whether a string is a valid ARN for the algorithm resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidDatasetGroupArn">isValidDatasetGroupArn</a></code> | Validates whether a string is a valid ARN for the datasetGroup resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidDatasetImportJobArn">isValidDatasetImportJobArn</a></code> | Validates whether a string is a valid ARN for the datasetImportJob resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidEndpointArn">isValidEndpointArn</a></code> | Validates whether a string is a valid ARN for the endpoint resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidExplainabilityArn">isValidExplainabilityArn</a></code> | Validates whether a string is a valid ARN for the explainability resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidExplainabilityExportArn">isValidExplainabilityExportArn</a></code> | Validates whether a string is a valid ARN for the explainabilityExport resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidForecastArn">isValidForecastArn</a></code> | Validates whether a string is a valid ARN for the forecast resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidForecastExportArn">isValidForecastExportArn</a></code> | Validates whether a string is a valid ARN for the forecastExport resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidMonitorArn">isValidMonitorArn</a></code> | Validates whether a string is a valid ARN for the monitor resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidPredictorArn">isValidPredictorArn</a></code> | Validates whether a string is a valid ARN for the predictor resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidPredictorBacktestExportJobArn">isValidPredictorBacktestExportJobArn</a></code> | Validates whether a string is a valid ARN for the predictorBacktestExportJob resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidWhatIfAnalysisArn">isValidWhatIfAnalysisArn</a></code> | Validates whether a string is a valid ARN for the whatIfAnalysis resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidWhatIfForecastArn">isValidWhatIfForecastArn</a></code> | Validates whether a string is a valid ARN for the whatIfForecast resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.isValidWhatIfForecastExportArn">isValidWhatIfForecastExportArn</a></code> | Validates whether a string is a valid ARN for the whatIfForecastExport resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.monitor">monitor</a></code> | Builds an ARN for the monitor resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseAlgorithmArn">parseAlgorithmArn</a></code> | Parses a algorithm ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseDatasetGroupArn">parseDatasetGroupArn</a></code> | Parses a datasetGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseDatasetImportJobArn">parseDatasetImportJobArn</a></code> | Parses a datasetImportJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseEndpointArn">parseEndpointArn</a></code> | Parses a endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseExplainabilityArn">parseExplainabilityArn</a></code> | Parses a explainability ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseExplainabilityExportArn">parseExplainabilityExportArn</a></code> | Parses a explainabilityExport ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseForecastArn">parseForecastArn</a></code> | Parses a forecast ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseForecastExportArn">parseForecastExportArn</a></code> | Parses a forecastExport ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseMonitorArn">parseMonitorArn</a></code> | Parses a monitor ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parsePredictorArn">parsePredictorArn</a></code> | Parses a predictor ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parsePredictorBacktestExportJobArn">parsePredictorBacktestExportJobArn</a></code> | Parses a predictorBacktestExportJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseWhatIfAnalysisArn">parseWhatIfAnalysisArn</a></code> | Parses a whatIfAnalysis ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseWhatIfForecastArn">parseWhatIfForecastArn</a></code> | Parses a whatIfForecast ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.parseWhatIfForecastExportArn">parseWhatIfForecastExportArn</a></code> | Parses a whatIfForecastExport ARN into its components. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.predictor">predictor</a></code> | Builds an ARN for the predictor resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.predictorBacktestExportJob">predictorBacktestExportJob</a></code> | Builds an ARN for the predictorBacktestExportJob resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.whatIfAnalysis">whatIfAnalysis</a></code> | Builds an ARN for the whatIfAnalysis resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.whatIfForecast">whatIfForecast</a></code> | Builds an ARN for the whatIfForecast resource. |
| <code><a href="#@cdk_utils/iam.forecast.ForecastResources.whatIfForecastExport">whatIfForecastExport</a></code> | Builds an ARN for the whatIfForecastExport resource. |

---

##### `algorithm` <a name="algorithm" id="@cdk_utils/iam.forecast.ForecastResources.algorithm"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.algorithm(props: ForecastAlgorithmArnProps)
```

Builds an ARN for the algorithm resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.algorithm.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastAlgorithmArnProps">ForecastAlgorithmArnProps</a>

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.forecast.ForecastResources.dataset"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.dataset(props: ForecastDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastDatasetArnProps">ForecastDatasetArnProps</a>

---

##### `datasetGroup` <a name="datasetGroup" id="@cdk_utils/iam.forecast.ForecastResources.datasetGroup"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.datasetGroup(props: ForecastDatasetGroupArnProps)
```

Builds an ARN for the datasetGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.datasetGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastDatasetGroupArnProps">ForecastDatasetGroupArnProps</a>

---

##### `datasetImportJob` <a name="datasetImportJob" id="@cdk_utils/iam.forecast.ForecastResources.datasetImportJob"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.datasetImportJob(props: ForecastDatasetImportJobArnProps)
```

Builds an ARN for the datasetImportJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.datasetImportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastDatasetImportJobArnProps">ForecastDatasetImportJobArnProps</a>

---

##### `endpoint` <a name="endpoint" id="@cdk_utils/iam.forecast.ForecastResources.endpoint"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.endpoint(props: ForecastEndpointArnProps)
```

Builds an ARN for the endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.endpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastEndpointArnProps">ForecastEndpointArnProps</a>

---

##### `explainability` <a name="explainability" id="@cdk_utils/iam.forecast.ForecastResources.explainability"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.explainability(props: ForecastExplainabilityArnProps)
```

Builds an ARN for the explainability resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.explainability.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastExplainabilityArnProps">ForecastExplainabilityArnProps</a>

---

##### `explainabilityExport` <a name="explainabilityExport" id="@cdk_utils/iam.forecast.ForecastResources.explainabilityExport"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.explainabilityExport(props: ForecastExplainabilityExportArnProps)
```

Builds an ARN for the explainabilityExport resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.explainabilityExport.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastExplainabilityExportArnProps">ForecastExplainabilityExportArnProps</a>

---

##### `forecast` <a name="forecast" id="@cdk_utils/iam.forecast.ForecastResources.forecast"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.forecast(props: ForecastForecastArnProps)
```

Builds an ARN for the forecast resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.forecast.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastForecastArnProps">ForecastForecastArnProps</a>

---

##### `forecastExport` <a name="forecastExport" id="@cdk_utils/iam.forecast.ForecastResources.forecastExport"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.forecastExport(props: ForecastForecastExportArnProps)
```

Builds an ARN for the forecastExport resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.forecastExport.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastForecastExportArnProps">ForecastForecastExportArnProps</a>

---

##### `isValidAlgorithmArn` <a name="isValidAlgorithmArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidAlgorithmArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidAlgorithmArn(arn: string)
```

Validates whether a string is a valid ARN for the algorithm resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidAlgorithmArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidDatasetArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetGroupArn` <a name="isValidDatasetGroupArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidDatasetGroupArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidDatasetGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the datasetGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidDatasetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetImportJobArn` <a name="isValidDatasetImportJobArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidDatasetImportJobArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidDatasetImportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the datasetImportJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidDatasetImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEndpointArn` <a name="isValidEndpointArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidEndpointArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExplainabilityArn` <a name="isValidExplainabilityArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidExplainabilityArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidExplainabilityArn(arn: string)
```

Validates whether a string is a valid ARN for the explainability resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidExplainabilityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExplainabilityExportArn` <a name="isValidExplainabilityExportArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidExplainabilityExportArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidExplainabilityExportArn(arn: string)
```

Validates whether a string is a valid ARN for the explainabilityExport resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidExplainabilityExportArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidForecastArn` <a name="isValidForecastArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidForecastArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidForecastArn(arn: string)
```

Validates whether a string is a valid ARN for the forecast resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidForecastArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidForecastExportArn` <a name="isValidForecastExportArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidForecastExportArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidForecastExportArn(arn: string)
```

Validates whether a string is a valid ARN for the forecastExport resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidForecastExportArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMonitorArn` <a name="isValidMonitorArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidMonitorArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidMonitorArn(arn: string)
```

Validates whether a string is a valid ARN for the monitor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidMonitorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPredictorArn` <a name="isValidPredictorArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidPredictorArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidPredictorArn(arn: string)
```

Validates whether a string is a valid ARN for the predictor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidPredictorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPredictorBacktestExportJobArn` <a name="isValidPredictorBacktestExportJobArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidPredictorBacktestExportJobArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidPredictorBacktestExportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the predictorBacktestExportJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidPredictorBacktestExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWhatIfAnalysisArn` <a name="isValidWhatIfAnalysisArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidWhatIfAnalysisArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidWhatIfAnalysisArn(arn: string)
```

Validates whether a string is a valid ARN for the whatIfAnalysis resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidWhatIfAnalysisArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWhatIfForecastArn` <a name="isValidWhatIfForecastArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidWhatIfForecastArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidWhatIfForecastArn(arn: string)
```

Validates whether a string is a valid ARN for the whatIfForecast resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidWhatIfForecastArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWhatIfForecastExportArn` <a name="isValidWhatIfForecastExportArn" id="@cdk_utils/iam.forecast.ForecastResources.isValidWhatIfForecastExportArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.isValidWhatIfForecastExportArn(arn: string)
```

Validates whether a string is a valid ARN for the whatIfForecastExport resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.isValidWhatIfForecastExportArn.parameter.arn"></a>

- *Type:* string

---

##### `monitor` <a name="monitor" id="@cdk_utils/iam.forecast.ForecastResources.monitor"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.monitor(props: ForecastMonitorArnProps)
```

Builds an ARN for the monitor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.monitor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastMonitorArnProps">ForecastMonitorArnProps</a>

---

##### `parseAlgorithmArn` <a name="parseAlgorithmArn" id="@cdk_utils/iam.forecast.ForecastResources.parseAlgorithmArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseAlgorithmArn(arn: string)
```

Parses a algorithm ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseAlgorithmArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.forecast.ForecastResources.parseDatasetArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetGroupArn` <a name="parseDatasetGroupArn" id="@cdk_utils/iam.forecast.ForecastResources.parseDatasetGroupArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseDatasetGroupArn(arn: string)
```

Parses a datasetGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseDatasetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetImportJobArn` <a name="parseDatasetImportJobArn" id="@cdk_utils/iam.forecast.ForecastResources.parseDatasetImportJobArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseDatasetImportJobArn(arn: string)
```

Parses a datasetImportJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseDatasetImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEndpointArn` <a name="parseEndpointArn" id="@cdk_utils/iam.forecast.ForecastResources.parseEndpointArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseEndpointArn(arn: string)
```

Parses a endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExplainabilityArn` <a name="parseExplainabilityArn" id="@cdk_utils/iam.forecast.ForecastResources.parseExplainabilityArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseExplainabilityArn(arn: string)
```

Parses a explainability ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseExplainabilityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExplainabilityExportArn` <a name="parseExplainabilityExportArn" id="@cdk_utils/iam.forecast.ForecastResources.parseExplainabilityExportArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseExplainabilityExportArn(arn: string)
```

Parses a explainabilityExport ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseExplainabilityExportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseForecastArn` <a name="parseForecastArn" id="@cdk_utils/iam.forecast.ForecastResources.parseForecastArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseForecastArn(arn: string)
```

Parses a forecast ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseForecastArn.parameter.arn"></a>

- *Type:* string

---

##### `parseForecastExportArn` <a name="parseForecastExportArn" id="@cdk_utils/iam.forecast.ForecastResources.parseForecastExportArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseForecastExportArn(arn: string)
```

Parses a forecastExport ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseForecastExportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMonitorArn` <a name="parseMonitorArn" id="@cdk_utils/iam.forecast.ForecastResources.parseMonitorArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseMonitorArn(arn: string)
```

Parses a monitor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseMonitorArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePredictorArn` <a name="parsePredictorArn" id="@cdk_utils/iam.forecast.ForecastResources.parsePredictorArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parsePredictorArn(arn: string)
```

Parses a predictor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parsePredictorArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePredictorBacktestExportJobArn` <a name="parsePredictorBacktestExportJobArn" id="@cdk_utils/iam.forecast.ForecastResources.parsePredictorBacktestExportJobArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parsePredictorBacktestExportJobArn(arn: string)
```

Parses a predictorBacktestExportJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parsePredictorBacktestExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWhatIfAnalysisArn` <a name="parseWhatIfAnalysisArn" id="@cdk_utils/iam.forecast.ForecastResources.parseWhatIfAnalysisArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseWhatIfAnalysisArn(arn: string)
```

Parses a whatIfAnalysis ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseWhatIfAnalysisArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWhatIfForecastArn` <a name="parseWhatIfForecastArn" id="@cdk_utils/iam.forecast.ForecastResources.parseWhatIfForecastArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseWhatIfForecastArn(arn: string)
```

Parses a whatIfForecast ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseWhatIfForecastArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWhatIfForecastExportArn` <a name="parseWhatIfForecastExportArn" id="@cdk_utils/iam.forecast.ForecastResources.parseWhatIfForecastExportArn"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.parseWhatIfForecastExportArn(arn: string)
```

Parses a whatIfForecastExport ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.forecast.ForecastResources.parseWhatIfForecastExportArn.parameter.arn"></a>

- *Type:* string

---

##### `predictor` <a name="predictor" id="@cdk_utils/iam.forecast.ForecastResources.predictor"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.predictor(props: ForecastPredictorArnProps)
```

Builds an ARN for the predictor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.predictor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastPredictorArnProps">ForecastPredictorArnProps</a>

---

##### `predictorBacktestExportJob` <a name="predictorBacktestExportJob" id="@cdk_utils/iam.forecast.ForecastResources.predictorBacktestExportJob"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.predictorBacktestExportJob(props: ForecastPredictorBacktestExportJobArnProps)
```

Builds an ARN for the predictorBacktestExportJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.predictorBacktestExportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastPredictorBacktestExportJobArnProps">ForecastPredictorBacktestExportJobArnProps</a>

---

##### `whatIfAnalysis` <a name="whatIfAnalysis" id="@cdk_utils/iam.forecast.ForecastResources.whatIfAnalysis"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.whatIfAnalysis(props: ForecastWhatIfAnalysisArnProps)
```

Builds an ARN for the whatIfAnalysis resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.whatIfAnalysis.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastWhatIfAnalysisArnProps">ForecastWhatIfAnalysisArnProps</a>

---

##### `whatIfForecast` <a name="whatIfForecast" id="@cdk_utils/iam.forecast.ForecastResources.whatIfForecast"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.whatIfForecast(props: ForecastWhatIfForecastArnProps)
```

Builds an ARN for the whatIfForecast resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.whatIfForecast.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastArnProps">ForecastWhatIfForecastArnProps</a>

---

##### `whatIfForecastExport` <a name="whatIfForecastExport" id="@cdk_utils/iam.forecast.ForecastResources.whatIfForecastExport"></a>

```typescript
import { forecast } from '@cdk_utils/iam'

forecast.ForecastResources.whatIfForecastExport(props: ForecastWhatIfForecastExportArnProps)
```

Builds an ARN for the whatIfForecastExport resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.forecast.ForecastResources.whatIfForecastExport.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.forecast.ForecastWhatIfForecastExportArnProps">ForecastWhatIfForecastExportArnProps</a>

---




