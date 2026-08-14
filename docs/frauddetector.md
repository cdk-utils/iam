# `frauddetector` Submodule <a name="`frauddetector` Submodule" id="@cdk_utils/iam.frauddetector"></a>


## Structs <a name="Structs" id="Structs"></a>

### FrauddetectorBatchImportArnComponents <a name="FrauddetectorBatchImportArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnComponents"></a>

Parsed components of a batch-import ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorBatchImportArnComponents: frauddetector.FrauddetectorBatchImportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorBatchImportArnProps <a name="FrauddetectorBatchImportArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnProps"></a>

Properties for building a batch-import ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorBatchImportArnProps: frauddetector.FrauddetectorBatchImportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorBatchPredictionArnComponents <a name="FrauddetectorBatchPredictionArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnComponents"></a>

Parsed components of a batch-prediction ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorBatchPredictionArnComponents: frauddetector.FrauddetectorBatchPredictionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorBatchPredictionArnProps <a name="FrauddetectorBatchPredictionArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnProps"></a>

Properties for building a batch-prediction ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorBatchPredictionArnProps: frauddetector.FrauddetectorBatchPredictionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorDetectorArnComponents <a name="FrauddetectorDetectorArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnComponents"></a>

Parsed components of a detector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorDetectorArnComponents: frauddetector.FrauddetectorDetectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorDetectorArnProps <a name="FrauddetectorDetectorArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnProps"></a>

Properties for building a detector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorDetectorArnProps: frauddetector.FrauddetectorDetectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorDetectorVersionArnComponents <a name="FrauddetectorDetectorVersionArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnComponents"></a>

Parsed components of a detector-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorDetectorVersionArnComponents: frauddetector.FrauddetectorDetectorVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorDetectorVersionArnProps <a name="FrauddetectorDetectorVersionArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnProps"></a>

Properties for building a detector-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorDetectorVersionArnProps: frauddetector.FrauddetectorDetectorVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorEntityTypeArnComponents <a name="FrauddetectorEntityTypeArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnComponents"></a>

Parsed components of a entity-type ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorEntityTypeArnComponents: frauddetector.FrauddetectorEntityTypeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorEntityTypeArnProps <a name="FrauddetectorEntityTypeArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnProps"></a>

Properties for building a entity-type ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorEntityTypeArnProps: frauddetector.FrauddetectorEntityTypeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorEventTypeArnComponents <a name="FrauddetectorEventTypeArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnComponents"></a>

Parsed components of a event-type ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorEventTypeArnComponents: frauddetector.FrauddetectorEventTypeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorEventTypeArnProps <a name="FrauddetectorEventTypeArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnProps"></a>

Properties for building a event-type ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorEventTypeArnProps: frauddetector.FrauddetectorEventTypeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorExternalModelArnComponents <a name="FrauddetectorExternalModelArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnComponents"></a>

Parsed components of a external-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorExternalModelArnComponents: frauddetector.FrauddetectorExternalModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorExternalModelArnProps <a name="FrauddetectorExternalModelArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnProps"></a>

Properties for building a external-model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorExternalModelArnProps: frauddetector.FrauddetectorExternalModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorLabelArnComponents <a name="FrauddetectorLabelArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnComponents"></a>

Parsed components of a label ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorLabelArnComponents: frauddetector.FrauddetectorLabelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorLabelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorLabelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorLabelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorLabelArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorLabelArnProps <a name="FrauddetectorLabelArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnProps"></a>

Properties for building a label ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorLabelArnProps: frauddetector.FrauddetectorLabelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorLabelArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorLabelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorLabelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorLabelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorLabelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorListArnComponents <a name="FrauddetectorListArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnComponents"></a>

Parsed components of a list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorListArnComponents: frauddetector.FrauddetectorListArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorListArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorListArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorListArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorListArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorListArnProps <a name="FrauddetectorListArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnProps"></a>

Properties for building a list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorListArnProps: frauddetector.FrauddetectorListArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorListArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorListArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorListArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorListArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorListArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorModelArnComponents <a name="FrauddetectorModelArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnComponents"></a>

Parsed components of a model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorModelArnComponents: frauddetector.FrauddetectorModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorModelArnProps <a name="FrauddetectorModelArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnProps"></a>

Properties for building a model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorModelArnProps: frauddetector.FrauddetectorModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorModelVersionArnComponents <a name="FrauddetectorModelVersionArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnComponents"></a>

Parsed components of a model-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorModelVersionArnComponents: frauddetector.FrauddetectorModelVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorModelVersionArnProps <a name="FrauddetectorModelVersionArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnProps"></a>

Properties for building a model-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorModelVersionArnProps: frauddetector.FrauddetectorModelVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorOutcomeArnComponents <a name="FrauddetectorOutcomeArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnComponents"></a>

Parsed components of a outcome ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorOutcomeArnComponents: frauddetector.FrauddetectorOutcomeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorOutcomeArnProps <a name="FrauddetectorOutcomeArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnProps"></a>

Properties for building a outcome ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorOutcomeArnProps: frauddetector.FrauddetectorOutcomeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorRuleArnComponents <a name="FrauddetectorRuleArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnComponents"></a>

Parsed components of a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorRuleArnComponents: frauddetector.FrauddetectorRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorRuleArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorRuleArnProps <a name="FrauddetectorRuleArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnProps"></a>

Properties for building a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorRuleArnProps: frauddetector.FrauddetectorRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorRuleArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FrauddetectorVariableArnComponents <a name="FrauddetectorVariableArnComponents" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnComponents"></a>

Parsed components of a variable ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnComponents.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorVariableArnComponents: frauddetector.FrauddetectorVariableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorVariableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorVariableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorVariableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorVariableArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### FrauddetectorVariableArnProps <a name="FrauddetectorVariableArnProps" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnProps"></a>

Properties for building a variable ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnProps.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

const frauddetectorVariableArnProps: frauddetector.FrauddetectorVariableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorVariableArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorVariableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorVariableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorVariableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.frauddetector.FrauddetectorVariableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### FrauddetectorActions <a name="FrauddetectorActions" id="@cdk_utils/iam.frauddetector.FrauddetectorActions"></a>

IAM action constants for the frauddetector service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

new frauddetector.FrauddetectorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetBatchImportJobs">actionGetBatchImportJobs</a></code> | <code>string</code> | [List] frauddetector:GetBatchImportJobs. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetBatchImportJobValidationReport">actionGetBatchImportJobValidationReport</a></code> | <code>string</code> | [Read] frauddetector:GetBatchImportJobValidationReport. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetBatchPredictionJobs">actionGetBatchPredictionJobs</a></code> | <code>string</code> | [List] frauddetector:GetBatchPredictionJobs. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetDeleteEventsByEventTypeStatus">actionGetDeleteEventsByEventTypeStatus</a></code> | <code>string</code> | [Read] frauddetector:GetDeleteEventsByEventTypeStatus. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetDetectors">actionGetDetectors</a></code> | <code>string</code> | [List] frauddetector:GetDetectors. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetDetectorVersion">actionGetDetectorVersion</a></code> | <code>string</code> | [Read] frauddetector:GetDetectorVersion. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetEntityTypes">actionGetEntityTypes</a></code> | <code>string</code> | [List] frauddetector:GetEntityTypes. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetEvent">actionGetEvent</a></code> | <code>string</code> | [Read] frauddetector:GetEvent. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetEventPrediction">actionGetEventPrediction</a></code> | <code>string</code> | [Read] frauddetector:GetEventPrediction. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetEventPredictionMetadata">actionGetEventPredictionMetadata</a></code> | <code>string</code> | [Read] frauddetector:GetEventPredictionMetadata. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetEventTypes">actionGetEventTypes</a></code> | <code>string</code> | [List] frauddetector:GetEventTypes. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetExternalModels">actionGetExternalModels</a></code> | <code>string</code> | [List] frauddetector:GetExternalModels. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetKMSEncryptionKey">actionGetKMSEncryptionKey</a></code> | <code>string</code> | [Read] frauddetector:GetKMSEncryptionKey. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetLabels">actionGetLabels</a></code> | <code>string</code> | [List] frauddetector:GetLabels. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetListElements">actionGetListElements</a></code> | <code>string</code> | [Read] frauddetector:GetListElements. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetListsMetadata">actionGetListsMetadata</a></code> | <code>string</code> | [List] frauddetector:GetListsMetadata. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetModels">actionGetModels</a></code> | <code>string</code> | [List] frauddetector:GetModels. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetModelVersion">actionGetModelVersion</a></code> | <code>string</code> | [Read] frauddetector:GetModelVersion. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetOutcomes">actionGetOutcomes</a></code> | <code>string</code> | [List] frauddetector:GetOutcomes. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetRules">actionGetRules</a></code> | <code>string</code> | [List] frauddetector:GetRules. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetVariables">actionGetVariables</a></code> | <code>string</code> | [List] frauddetector:GetVariables. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.BatchCreateVariable">BatchCreateVariable</a></code> | <code>string</code> | [Write] frauddetector:BatchCreateVariable. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.BatchGetVariable">BatchGetVariable</a></code> | <code>string</code> | [List] frauddetector:BatchGetVariable. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CancelBatchImportJob">CancelBatchImportJob</a></code> | <code>string</code> | [Write] frauddetector:CancelBatchImportJob. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CancelBatchPredictionJob">CancelBatchPredictionJob</a></code> | <code>string</code> | [Write] frauddetector:CancelBatchPredictionJob. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateBatchImportJob">CreateBatchImportJob</a></code> | <code>string</code> | [Write] frauddetector:CreateBatchImportJob. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateBatchPredictionJob">CreateBatchPredictionJob</a></code> | <code>string</code> | [Write] frauddetector:CreateBatchPredictionJob. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateDetectorVersion">CreateDetectorVersion</a></code> | <code>string</code> | [Write] frauddetector:CreateDetectorVersion. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateList">CreateList</a></code> | <code>string</code> | [Write] frauddetector:CreateList. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateModel">CreateModel</a></code> | <code>string</code> | [Write] frauddetector:CreateModel. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateModelVersion">CreateModelVersion</a></code> | <code>string</code> | [Write] frauddetector:CreateModelVersion. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateRule">CreateRule</a></code> | <code>string</code> | [Write] frauddetector:CreateRule. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateVariable">CreateVariable</a></code> | <code>string</code> | [Write] frauddetector:CreateVariable. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteBatchImportJob">DeleteBatchImportJob</a></code> | <code>string</code> | [Write] frauddetector:DeleteBatchImportJob. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteBatchPredictionJob">DeleteBatchPredictionJob</a></code> | <code>string</code> | [Write] frauddetector:DeleteBatchPredictionJob. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteDetector">DeleteDetector</a></code> | <code>string</code> | [Write] frauddetector:DeleteDetector. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteDetectorVersion">DeleteDetectorVersion</a></code> | <code>string</code> | [Write] frauddetector:DeleteDetectorVersion. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteEntityType">DeleteEntityType</a></code> | <code>string</code> | [Write] frauddetector:DeleteEntityType. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteEvent">DeleteEvent</a></code> | <code>string</code> | [Write] frauddetector:DeleteEvent. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteEventsByEventType">DeleteEventsByEventType</a></code> | <code>string</code> | [Write] frauddetector:DeleteEventsByEventType. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteEventType">DeleteEventType</a></code> | <code>string</code> | [Write] frauddetector:DeleteEventType. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteExternalModel">DeleteExternalModel</a></code> | <code>string</code> | [Write] frauddetector:DeleteExternalModel. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteLabel">DeleteLabel</a></code> | <code>string</code> | [Write] frauddetector:DeleteLabel. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteList">DeleteList</a></code> | <code>string</code> | [Write] frauddetector:DeleteList. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteModel">DeleteModel</a></code> | <code>string</code> | [Write] frauddetector:DeleteModel. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteModelVersion">DeleteModelVersion</a></code> | <code>string</code> | [Write] frauddetector:DeleteModelVersion. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteOutcome">DeleteOutcome</a></code> | <code>string</code> | [Write] frauddetector:DeleteOutcome. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteRule">DeleteRule</a></code> | <code>string</code> | [Write] frauddetector:DeleteRule. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteVariable">DeleteVariable</a></code> | <code>string</code> | [Write] frauddetector:DeleteVariable. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DescribeDetector">DescribeDetector</a></code> | <code>string</code> | [Read] frauddetector:DescribeDetector. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DescribeModelVersions">DescribeModelVersions</a></code> | <code>string</code> | [Read] frauddetector:DescribeModelVersions. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.ListEventPredictions">ListEventPredictions</a></code> | <code>string</code> | [List] frauddetector:ListEventPredictions. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] frauddetector:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutDetector">PutDetector</a></code> | <code>string</code> | [Write] frauddetector:PutDetector. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutEntityType">PutEntityType</a></code> | <code>string</code> | [Write] frauddetector:PutEntityType. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutEventType">PutEventType</a></code> | <code>string</code> | [Write] frauddetector:PutEventType. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutExternalModel">PutExternalModel</a></code> | <code>string</code> | [Write] frauddetector:PutExternalModel. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutKMSEncryptionKey">PutKMSEncryptionKey</a></code> | <code>string</code> | [Write] frauddetector:PutKMSEncryptionKey. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutLabel">PutLabel</a></code> | <code>string</code> | [Write] frauddetector:PutLabel. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutOutcome">PutOutcome</a></code> | <code>string</code> | [Write] frauddetector:PutOutcome. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.SendEvent">SendEvent</a></code> | <code>string</code> | [Write] frauddetector:SendEvent. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] frauddetector:TagResource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] frauddetector:UntagResource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateDetectorVersion">UpdateDetectorVersion</a></code> | <code>string</code> | [Write] frauddetector:UpdateDetectorVersion. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateDetectorVersionMetadata">UpdateDetectorVersionMetadata</a></code> | <code>string</code> | [Write] frauddetector:UpdateDetectorVersionMetadata. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateDetectorVersionStatus">UpdateDetectorVersionStatus</a></code> | <code>string</code> | [Write] frauddetector:UpdateDetectorVersionStatus. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateEventLabel">UpdateEventLabel</a></code> | <code>string</code> | [Write] frauddetector:UpdateEventLabel. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateList">UpdateList</a></code> | <code>string</code> | [Write] frauddetector:UpdateList. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateModel">UpdateModel</a></code> | <code>string</code> | [Write] frauddetector:UpdateModel. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateModelVersion">UpdateModelVersion</a></code> | <code>string</code> | [Write] frauddetector:UpdateModelVersion. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateModelVersionStatus">UpdateModelVersionStatus</a></code> | <code>string</code> | [Write] frauddetector:UpdateModelVersionStatus. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateRuleMetadata">UpdateRuleMetadata</a></code> | <code>string</code> | [Write] frauddetector:UpdateRuleMetadata. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateRuleVersion">UpdateRuleVersion</a></code> | <code>string</code> | [Write] frauddetector:UpdateRuleVersion. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateVariable">UpdateVariable</a></code> | <code>string</code> | [Write] frauddetector:UpdateVariable. |

---

##### `actionGetBatchImportJobs`<sup>Required</sup> <a name="actionGetBatchImportJobs" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetBatchImportJobs"></a>

```typescript
public readonly actionGetBatchImportJobs: string;
```

- *Type:* string

[List] frauddetector:GetBatchImportJobs.

---

##### `actionGetBatchImportJobValidationReport`<sup>Required</sup> <a name="actionGetBatchImportJobValidationReport" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetBatchImportJobValidationReport"></a>

```typescript
public readonly actionGetBatchImportJobValidationReport: string;
```

- *Type:* string

[Read] frauddetector:GetBatchImportJobValidationReport.

---

##### `actionGetBatchPredictionJobs`<sup>Required</sup> <a name="actionGetBatchPredictionJobs" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetBatchPredictionJobs"></a>

```typescript
public readonly actionGetBatchPredictionJobs: string;
```

- *Type:* string

[List] frauddetector:GetBatchPredictionJobs.

---

##### `actionGetDeleteEventsByEventTypeStatus`<sup>Required</sup> <a name="actionGetDeleteEventsByEventTypeStatus" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetDeleteEventsByEventTypeStatus"></a>

```typescript
public readonly actionGetDeleteEventsByEventTypeStatus: string;
```

- *Type:* string

[Read] frauddetector:GetDeleteEventsByEventTypeStatus.

---

##### `actionGetDetectors`<sup>Required</sup> <a name="actionGetDetectors" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetDetectors"></a>

```typescript
public readonly actionGetDetectors: string;
```

- *Type:* string

[List] frauddetector:GetDetectors.

---

##### `actionGetDetectorVersion`<sup>Required</sup> <a name="actionGetDetectorVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetDetectorVersion"></a>

```typescript
public readonly actionGetDetectorVersion: string;
```

- *Type:* string

[Read] frauddetector:GetDetectorVersion.

---

##### `actionGetEntityTypes`<sup>Required</sup> <a name="actionGetEntityTypes" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetEntityTypes"></a>

```typescript
public readonly actionGetEntityTypes: string;
```

- *Type:* string

[List] frauddetector:GetEntityTypes.

---

##### `actionGetEvent`<sup>Required</sup> <a name="actionGetEvent" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetEvent"></a>

```typescript
public readonly actionGetEvent: string;
```

- *Type:* string

[Read] frauddetector:GetEvent.

---

##### `actionGetEventPrediction`<sup>Required</sup> <a name="actionGetEventPrediction" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetEventPrediction"></a>

```typescript
public readonly actionGetEventPrediction: string;
```

- *Type:* string

[Read] frauddetector:GetEventPrediction.

---

##### `actionGetEventPredictionMetadata`<sup>Required</sup> <a name="actionGetEventPredictionMetadata" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetEventPredictionMetadata"></a>

```typescript
public readonly actionGetEventPredictionMetadata: string;
```

- *Type:* string

[Read] frauddetector:GetEventPredictionMetadata.

---

##### `actionGetEventTypes`<sup>Required</sup> <a name="actionGetEventTypes" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetEventTypes"></a>

```typescript
public readonly actionGetEventTypes: string;
```

- *Type:* string

[List] frauddetector:GetEventTypes.

---

##### `actionGetExternalModels`<sup>Required</sup> <a name="actionGetExternalModels" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetExternalModels"></a>

```typescript
public readonly actionGetExternalModels: string;
```

- *Type:* string

[List] frauddetector:GetExternalModels.

---

##### `actionGetKMSEncryptionKey`<sup>Required</sup> <a name="actionGetKMSEncryptionKey" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetKMSEncryptionKey"></a>

```typescript
public readonly actionGetKMSEncryptionKey: string;
```

- *Type:* string

[Read] frauddetector:GetKMSEncryptionKey.

---

##### `actionGetLabels`<sup>Required</sup> <a name="actionGetLabels" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetLabels"></a>

```typescript
public readonly actionGetLabels: string;
```

- *Type:* string

[List] frauddetector:GetLabels.

---

##### `actionGetListElements`<sup>Required</sup> <a name="actionGetListElements" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetListElements"></a>

```typescript
public readonly actionGetListElements: string;
```

- *Type:* string

[Read] frauddetector:GetListElements.

---

##### `actionGetListsMetadata`<sup>Required</sup> <a name="actionGetListsMetadata" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetListsMetadata"></a>

```typescript
public readonly actionGetListsMetadata: string;
```

- *Type:* string

[List] frauddetector:GetListsMetadata.

---

##### `actionGetModels`<sup>Required</sup> <a name="actionGetModels" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetModels"></a>

```typescript
public readonly actionGetModels: string;
```

- *Type:* string

[List] frauddetector:GetModels.

---

##### `actionGetModelVersion`<sup>Required</sup> <a name="actionGetModelVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetModelVersion"></a>

```typescript
public readonly actionGetModelVersion: string;
```

- *Type:* string

[Read] frauddetector:GetModelVersion.

---

##### `actionGetOutcomes`<sup>Required</sup> <a name="actionGetOutcomes" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetOutcomes"></a>

```typescript
public readonly actionGetOutcomes: string;
```

- *Type:* string

[List] frauddetector:GetOutcomes.

---

##### `actionGetRules`<sup>Required</sup> <a name="actionGetRules" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetRules"></a>

```typescript
public readonly actionGetRules: string;
```

- *Type:* string

[List] frauddetector:GetRules.

---

##### `actionGetVariables`<sup>Required</sup> <a name="actionGetVariables" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.actionGetVariables"></a>

```typescript
public readonly actionGetVariables: string;
```

- *Type:* string

[List] frauddetector:GetVariables.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchCreateVariable`<sup>Required</sup> <a name="BatchCreateVariable" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.BatchCreateVariable"></a>

```typescript
public readonly BatchCreateVariable: string;
```

- *Type:* string

[Write] frauddetector:BatchCreateVariable.

---

##### `BatchGetVariable`<sup>Required</sup> <a name="BatchGetVariable" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.BatchGetVariable"></a>

```typescript
public readonly BatchGetVariable: string;
```

- *Type:* string

[List] frauddetector:BatchGetVariable.

---

##### `CancelBatchImportJob`<sup>Required</sup> <a name="CancelBatchImportJob" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CancelBatchImportJob"></a>

```typescript
public readonly CancelBatchImportJob: string;
```

- *Type:* string

[Write] frauddetector:CancelBatchImportJob.

---

##### `CancelBatchPredictionJob`<sup>Required</sup> <a name="CancelBatchPredictionJob" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CancelBatchPredictionJob"></a>

```typescript
public readonly CancelBatchPredictionJob: string;
```

- *Type:* string

[Write] frauddetector:CancelBatchPredictionJob.

---

##### `CreateBatchImportJob`<sup>Required</sup> <a name="CreateBatchImportJob" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateBatchImportJob"></a>

```typescript
public readonly CreateBatchImportJob: string;
```

- *Type:* string

[Write] frauddetector:CreateBatchImportJob.

---

##### `CreateBatchPredictionJob`<sup>Required</sup> <a name="CreateBatchPredictionJob" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateBatchPredictionJob"></a>

```typescript
public readonly CreateBatchPredictionJob: string;
```

- *Type:* string

[Write] frauddetector:CreateBatchPredictionJob.

---

##### `CreateDetectorVersion`<sup>Required</sup> <a name="CreateDetectorVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateDetectorVersion"></a>

```typescript
public readonly CreateDetectorVersion: string;
```

- *Type:* string

[Write] frauddetector:CreateDetectorVersion.

---

##### `CreateList`<sup>Required</sup> <a name="CreateList" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateList"></a>

```typescript
public readonly CreateList: string;
```

- *Type:* string

[Write] frauddetector:CreateList.

---

##### `CreateModel`<sup>Required</sup> <a name="CreateModel" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateModel"></a>

```typescript
public readonly CreateModel: string;
```

- *Type:* string

[Write] frauddetector:CreateModel.

---

##### `CreateModelVersion`<sup>Required</sup> <a name="CreateModelVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateModelVersion"></a>

```typescript
public readonly CreateModelVersion: string;
```

- *Type:* string

[Write] frauddetector:CreateModelVersion.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateRule"></a>

```typescript
public readonly CreateRule: string;
```

- *Type:* string

[Write] frauddetector:CreateRule.

---

##### `CreateVariable`<sup>Required</sup> <a name="CreateVariable" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.CreateVariable"></a>

```typescript
public readonly CreateVariable: string;
```

- *Type:* string

[Write] frauddetector:CreateVariable.

---

##### `DeleteBatchImportJob`<sup>Required</sup> <a name="DeleteBatchImportJob" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteBatchImportJob"></a>

```typescript
public readonly DeleteBatchImportJob: string;
```

- *Type:* string

[Write] frauddetector:DeleteBatchImportJob.

---

##### `DeleteBatchPredictionJob`<sup>Required</sup> <a name="DeleteBatchPredictionJob" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteBatchPredictionJob"></a>

```typescript
public readonly DeleteBatchPredictionJob: string;
```

- *Type:* string

[Write] frauddetector:DeleteBatchPredictionJob.

---

##### `DeleteDetector`<sup>Required</sup> <a name="DeleteDetector" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteDetector"></a>

```typescript
public readonly DeleteDetector: string;
```

- *Type:* string

[Write] frauddetector:DeleteDetector.

---

##### `DeleteDetectorVersion`<sup>Required</sup> <a name="DeleteDetectorVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteDetectorVersion"></a>

```typescript
public readonly DeleteDetectorVersion: string;
```

- *Type:* string

[Write] frauddetector:DeleteDetectorVersion.

---

##### `DeleteEntityType`<sup>Required</sup> <a name="DeleteEntityType" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteEntityType"></a>

```typescript
public readonly DeleteEntityType: string;
```

- *Type:* string

[Write] frauddetector:DeleteEntityType.

---

##### `DeleteEvent`<sup>Required</sup> <a name="DeleteEvent" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteEvent"></a>

```typescript
public readonly DeleteEvent: string;
```

- *Type:* string

[Write] frauddetector:DeleteEvent.

---

##### `DeleteEventsByEventType`<sup>Required</sup> <a name="DeleteEventsByEventType" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteEventsByEventType"></a>

```typescript
public readonly DeleteEventsByEventType: string;
```

- *Type:* string

[Write] frauddetector:DeleteEventsByEventType.

---

##### `DeleteEventType`<sup>Required</sup> <a name="DeleteEventType" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteEventType"></a>

```typescript
public readonly DeleteEventType: string;
```

- *Type:* string

[Write] frauddetector:DeleteEventType.

---

##### `DeleteExternalModel`<sup>Required</sup> <a name="DeleteExternalModel" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteExternalModel"></a>

```typescript
public readonly DeleteExternalModel: string;
```

- *Type:* string

[Write] frauddetector:DeleteExternalModel.

---

##### `DeleteLabel`<sup>Required</sup> <a name="DeleteLabel" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteLabel"></a>

```typescript
public readonly DeleteLabel: string;
```

- *Type:* string

[Write] frauddetector:DeleteLabel.

---

##### `DeleteList`<sup>Required</sup> <a name="DeleteList" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteList"></a>

```typescript
public readonly DeleteList: string;
```

- *Type:* string

[Write] frauddetector:DeleteList.

---

##### `DeleteModel`<sup>Required</sup> <a name="DeleteModel" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteModel"></a>

```typescript
public readonly DeleteModel: string;
```

- *Type:* string

[Write] frauddetector:DeleteModel.

---

##### `DeleteModelVersion`<sup>Required</sup> <a name="DeleteModelVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteModelVersion"></a>

```typescript
public readonly DeleteModelVersion: string;
```

- *Type:* string

[Write] frauddetector:DeleteModelVersion.

---

##### `DeleteOutcome`<sup>Required</sup> <a name="DeleteOutcome" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteOutcome"></a>

```typescript
public readonly DeleteOutcome: string;
```

- *Type:* string

[Write] frauddetector:DeleteOutcome.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string;
```

- *Type:* string

[Write] frauddetector:DeleteRule.

---

##### `DeleteVariable`<sup>Required</sup> <a name="DeleteVariable" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DeleteVariable"></a>

```typescript
public readonly DeleteVariable: string;
```

- *Type:* string

[Write] frauddetector:DeleteVariable.

---

##### `DescribeDetector`<sup>Required</sup> <a name="DescribeDetector" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DescribeDetector"></a>

```typescript
public readonly DescribeDetector: string;
```

- *Type:* string

[Read] frauddetector:DescribeDetector.

---

##### `DescribeModelVersions`<sup>Required</sup> <a name="DescribeModelVersions" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.DescribeModelVersions"></a>

```typescript
public readonly DescribeModelVersions: string;
```

- *Type:* string

[Read] frauddetector:DescribeModelVersions.

---

##### `ListEventPredictions`<sup>Required</sup> <a name="ListEventPredictions" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.ListEventPredictions"></a>

```typescript
public readonly ListEventPredictions: string;
```

- *Type:* string

[List] frauddetector:ListEventPredictions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] frauddetector:ListTagsForResource.

---

##### `PutDetector`<sup>Required</sup> <a name="PutDetector" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutDetector"></a>

```typescript
public readonly PutDetector: string;
```

- *Type:* string

[Write] frauddetector:PutDetector.

---

##### `PutEntityType`<sup>Required</sup> <a name="PutEntityType" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutEntityType"></a>

```typescript
public readonly PutEntityType: string;
```

- *Type:* string

[Write] frauddetector:PutEntityType.

---

##### `PutEventType`<sup>Required</sup> <a name="PutEventType" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutEventType"></a>

```typescript
public readonly PutEventType: string;
```

- *Type:* string

[Write] frauddetector:PutEventType.

---

##### `PutExternalModel`<sup>Required</sup> <a name="PutExternalModel" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutExternalModel"></a>

```typescript
public readonly PutExternalModel: string;
```

- *Type:* string

[Write] frauddetector:PutExternalModel.

---

##### `PutKMSEncryptionKey`<sup>Required</sup> <a name="PutKMSEncryptionKey" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutKMSEncryptionKey"></a>

```typescript
public readonly PutKMSEncryptionKey: string;
```

- *Type:* string

[Write] frauddetector:PutKMSEncryptionKey.

---

##### `PutLabel`<sup>Required</sup> <a name="PutLabel" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutLabel"></a>

```typescript
public readonly PutLabel: string;
```

- *Type:* string

[Write] frauddetector:PutLabel.

---

##### `PutOutcome`<sup>Required</sup> <a name="PutOutcome" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.PutOutcome"></a>

```typescript
public readonly PutOutcome: string;
```

- *Type:* string

[Write] frauddetector:PutOutcome.

---

##### `SendEvent`<sup>Required</sup> <a name="SendEvent" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.SendEvent"></a>

```typescript
public readonly SendEvent: string;
```

- *Type:* string

[Write] frauddetector:SendEvent.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] frauddetector:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] frauddetector:UntagResource.

---

##### `UpdateDetectorVersion`<sup>Required</sup> <a name="UpdateDetectorVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateDetectorVersion"></a>

```typescript
public readonly UpdateDetectorVersion: string;
```

- *Type:* string

[Write] frauddetector:UpdateDetectorVersion.

---

##### `UpdateDetectorVersionMetadata`<sup>Required</sup> <a name="UpdateDetectorVersionMetadata" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateDetectorVersionMetadata"></a>

```typescript
public readonly UpdateDetectorVersionMetadata: string;
```

- *Type:* string

[Write] frauddetector:UpdateDetectorVersionMetadata.

---

##### `UpdateDetectorVersionStatus`<sup>Required</sup> <a name="UpdateDetectorVersionStatus" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateDetectorVersionStatus"></a>

```typescript
public readonly UpdateDetectorVersionStatus: string;
```

- *Type:* string

[Write] frauddetector:UpdateDetectorVersionStatus.

---

##### `UpdateEventLabel`<sup>Required</sup> <a name="UpdateEventLabel" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateEventLabel"></a>

```typescript
public readonly UpdateEventLabel: string;
```

- *Type:* string

[Write] frauddetector:UpdateEventLabel.

---

##### `UpdateList`<sup>Required</sup> <a name="UpdateList" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateList"></a>

```typescript
public readonly UpdateList: string;
```

- *Type:* string

[Write] frauddetector:UpdateList.

---

##### `UpdateModel`<sup>Required</sup> <a name="UpdateModel" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateModel"></a>

```typescript
public readonly UpdateModel: string;
```

- *Type:* string

[Write] frauddetector:UpdateModel.

---

##### `UpdateModelVersion`<sup>Required</sup> <a name="UpdateModelVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateModelVersion"></a>

```typescript
public readonly UpdateModelVersion: string;
```

- *Type:* string

[Write] frauddetector:UpdateModelVersion.

---

##### `UpdateModelVersionStatus`<sup>Required</sup> <a name="UpdateModelVersionStatus" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateModelVersionStatus"></a>

```typescript
public readonly UpdateModelVersionStatus: string;
```

- *Type:* string

[Write] frauddetector:UpdateModelVersionStatus.

---

##### `UpdateRuleMetadata`<sup>Required</sup> <a name="UpdateRuleMetadata" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateRuleMetadata"></a>

```typescript
public readonly UpdateRuleMetadata: string;
```

- *Type:* string

[Write] frauddetector:UpdateRuleMetadata.

---

##### `UpdateRuleVersion`<sup>Required</sup> <a name="UpdateRuleVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateRuleVersion"></a>

```typescript
public readonly UpdateRuleVersion: string;
```

- *Type:* string

[Write] frauddetector:UpdateRuleVersion.

---

##### `UpdateVariable`<sup>Required</sup> <a name="UpdateVariable" id="@cdk_utils/iam.frauddetector.FrauddetectorActions.property.UpdateVariable"></a>

```typescript
public readonly UpdateVariable: string;
```

- *Type:* string

[Write] frauddetector:UpdateVariable.

---

### FrauddetectorConditions <a name="FrauddetectorConditions" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions"></a>

Condition key constants and builders for frauddetector.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

new frauddetector.FrauddetectorConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.requestTag"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.resourceTag"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.tagKeys"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.actionGetListElementsConditionKeys">actionGetListElementsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetListElements action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.actionGetListsMetadataConditionKeys">actionGetListsMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetListsMetadata action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.BatchCreateVariableConditionKeys">BatchCreateVariableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchCreateVariable action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateBatchImportJobConditionKeys">CreateBatchImportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBatchImportJob action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateBatchPredictionJobConditionKeys">CreateBatchPredictionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBatchPredictionJob action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateDetectorVersionConditionKeys">CreateDetectorVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDetectorVersion action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateListConditionKeys">CreateListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateList action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateModelConditionKeys">CreateModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateModel action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateModelVersionConditionKeys">CreateModelVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateModelVersion action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateRuleConditionKeys">CreateRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRule action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateVariableConditionKeys">CreateVariableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVariable action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.DeleteListConditionKeys">DeleteListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteList action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutDetectorConditionKeys">PutDetectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDetector action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutEntityTypeConditionKeys">PutEntityTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutEntityType action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutEventTypeConditionKeys">PutEventTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutEventType action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutExternalModelConditionKeys">PutExternalModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutExternalModel action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutLabelConditionKeys">PutLabelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutLabel action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutOutcomeConditionKeys">PutOutcomeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutOutcome action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.SendEventConditionKeys">SendEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendEvent action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.UpdateEventLabelConditionKeys">UpdateEventLabelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEventLabel action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.UpdateListConditionKeys">UpdateListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateList action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.UpdateModelVersionConditionKeys">UpdateModelVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateModelVersion action. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.UpdateRuleVersionConditionKeys">UpdateRuleVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRuleVersion action. |

---

##### `actionGetListElementsConditionKeys`<sup>Required</sup> <a name="actionGetListElementsConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.actionGetListElementsConditionKeys"></a>

```typescript
public readonly actionGetListElementsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetListElements action.

---

##### `actionGetListsMetadataConditionKeys`<sup>Required</sup> <a name="actionGetListsMetadataConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.actionGetListsMetadataConditionKeys"></a>

```typescript
public readonly actionGetListsMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetListsMetadata action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchCreateVariableConditionKeys`<sup>Required</sup> <a name="BatchCreateVariableConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.BatchCreateVariableConditionKeys"></a>

```typescript
public readonly BatchCreateVariableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchCreateVariable action.

---

##### `CreateBatchImportJobConditionKeys`<sup>Required</sup> <a name="CreateBatchImportJobConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateBatchImportJobConditionKeys"></a>

```typescript
public readonly CreateBatchImportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBatchImportJob action.

---

##### `CreateBatchPredictionJobConditionKeys`<sup>Required</sup> <a name="CreateBatchPredictionJobConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateBatchPredictionJobConditionKeys"></a>

```typescript
public readonly CreateBatchPredictionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBatchPredictionJob action.

---

##### `CreateDetectorVersionConditionKeys`<sup>Required</sup> <a name="CreateDetectorVersionConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateDetectorVersionConditionKeys"></a>

```typescript
public readonly CreateDetectorVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDetectorVersion action.

---

##### `CreateListConditionKeys`<sup>Required</sup> <a name="CreateListConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateListConditionKeys"></a>

```typescript
public readonly CreateListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateList action.

---

##### `CreateModelConditionKeys`<sup>Required</sup> <a name="CreateModelConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateModelConditionKeys"></a>

```typescript
public readonly CreateModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateModel action.

---

##### `CreateModelVersionConditionKeys`<sup>Required</sup> <a name="CreateModelVersionConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateModelVersionConditionKeys"></a>

```typescript
public readonly CreateModelVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateModelVersion action.

---

##### `CreateRuleConditionKeys`<sup>Required</sup> <a name="CreateRuleConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateRuleConditionKeys"></a>

```typescript
public readonly CreateRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRule action.

---

##### `CreateVariableConditionKeys`<sup>Required</sup> <a name="CreateVariableConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.CreateVariableConditionKeys"></a>

```typescript
public readonly CreateVariableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVariable action.

---

##### `DeleteListConditionKeys`<sup>Required</sup> <a name="DeleteListConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.DeleteListConditionKeys"></a>

```typescript
public readonly DeleteListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteList action.

---

##### `PutDetectorConditionKeys`<sup>Required</sup> <a name="PutDetectorConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutDetectorConditionKeys"></a>

```typescript
public readonly PutDetectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDetector action.

---

##### `PutEntityTypeConditionKeys`<sup>Required</sup> <a name="PutEntityTypeConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutEntityTypeConditionKeys"></a>

```typescript
public readonly PutEntityTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutEntityType action.

---

##### `PutEventTypeConditionKeys`<sup>Required</sup> <a name="PutEventTypeConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutEventTypeConditionKeys"></a>

```typescript
public readonly PutEventTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutEventType action.

---

##### `PutExternalModelConditionKeys`<sup>Required</sup> <a name="PutExternalModelConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutExternalModelConditionKeys"></a>

```typescript
public readonly PutExternalModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutExternalModel action.

---

##### `PutLabelConditionKeys`<sup>Required</sup> <a name="PutLabelConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutLabelConditionKeys"></a>

```typescript
public readonly PutLabelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutLabel action.

---

##### `PutOutcomeConditionKeys`<sup>Required</sup> <a name="PutOutcomeConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.PutOutcomeConditionKeys"></a>

```typescript
public readonly PutOutcomeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutOutcome action.

---

##### `SendEventConditionKeys`<sup>Required</sup> <a name="SendEventConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.SendEventConditionKeys"></a>

```typescript
public readonly SendEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendEvent action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateEventLabelConditionKeys`<sup>Required</sup> <a name="UpdateEventLabelConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.UpdateEventLabelConditionKeys"></a>

```typescript
public readonly UpdateEventLabelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEventLabel action.

---

##### `UpdateListConditionKeys`<sup>Required</sup> <a name="UpdateListConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.UpdateListConditionKeys"></a>

```typescript
public readonly UpdateListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateList action.

---

##### `UpdateModelVersionConditionKeys`<sup>Required</sup> <a name="UpdateModelVersionConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.UpdateModelVersionConditionKeys"></a>

```typescript
public readonly UpdateModelVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateModelVersion action.

---

##### `UpdateRuleVersionConditionKeys`<sup>Required</sup> <a name="UpdateRuleVersionConditionKeys" id="@cdk_utils/iam.frauddetector.FrauddetectorConditions.property.UpdateRuleVersionConditionKeys"></a>

```typescript
public readonly UpdateRuleVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRuleVersion action.

---

### FrauddetectorOperations <a name="FrauddetectorOperations" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations"></a>

API operation to required IAM actions mapping for frauddetector.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

new frauddetector.FrauddetectorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.BatchCreateVariable">BatchCreateVariable</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateVariable API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.BatchGetVariable">BatchGetVariable</a></code> | <code>string[]</code> | IAM actions required for the BatchGetVariable API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CancelBatchImportJob">CancelBatchImportJob</a></code> | <code>string[]</code> | IAM actions required for the CancelBatchImportJob API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CancelBatchPredictionJob">CancelBatchPredictionJob</a></code> | <code>string[]</code> | IAM actions required for the CancelBatchPredictionJob API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateBatchImportJob">CreateBatchImportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateBatchImportJob API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateBatchPredictionJob">CreateBatchPredictionJob</a></code> | <code>string[]</code> | IAM actions required for the CreateBatchPredictionJob API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateDetectorVersion">CreateDetectorVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateDetectorVersion API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateList">CreateList</a></code> | <code>string[]</code> | IAM actions required for the CreateList API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateModel">CreateModel</a></code> | <code>string[]</code> | IAM actions required for the CreateModel API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateModelVersion">CreateModelVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateModelVersion API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateRule">CreateRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRule API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateVariable">CreateVariable</a></code> | <code>string[]</code> | IAM actions required for the CreateVariable API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteBatchImportJob">DeleteBatchImportJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteBatchImportJob API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteBatchPredictionJob">DeleteBatchPredictionJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteBatchPredictionJob API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteDetector">DeleteDetector</a></code> | <code>string[]</code> | IAM actions required for the DeleteDetector API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteDetectorVersion">DeleteDetectorVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteDetectorVersion API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteEntityType">DeleteEntityType</a></code> | <code>string[]</code> | IAM actions required for the DeleteEntityType API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteEvent">DeleteEvent</a></code> | <code>string[]</code> | IAM actions required for the DeleteEvent API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteEventsByEventType">DeleteEventsByEventType</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventsByEventType API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteEventType">DeleteEventType</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventType API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteExternalModel">DeleteExternalModel</a></code> | <code>string[]</code> | IAM actions required for the DeleteExternalModel API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteLabel">DeleteLabel</a></code> | <code>string[]</code> | IAM actions required for the DeleteLabel API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteList">DeleteList</a></code> | <code>string[]</code> | IAM actions required for the DeleteList API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteModel">DeleteModel</a></code> | <code>string[]</code> | IAM actions required for the DeleteModel API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteModelVersion">DeleteModelVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteModelVersion API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteOutcome">DeleteOutcome</a></code> | <code>string[]</code> | IAM actions required for the DeleteOutcome API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteRule">DeleteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRule API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteVariable">DeleteVariable</a></code> | <code>string[]</code> | IAM actions required for the DeleteVariable API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DescribeDetector">DescribeDetector</a></code> | <code>string[]</code> | IAM actions required for the DescribeDetector API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DescribeModelVersions">DescribeModelVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeModelVersions API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.ListEventPredictions">ListEventPredictions</a></code> | <code>string[]</code> | IAM actions required for the ListEventPredictions API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetBatchImportJobs">opGetBatchImportJobs</a></code> | <code>string[]</code> | IAM actions required for the GetBatchImportJobs API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetBatchPredictionJobs">opGetBatchPredictionJobs</a></code> | <code>string[]</code> | IAM actions required for the GetBatchPredictionJobs API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetDeleteEventsByEventTypeStatus">opGetDeleteEventsByEventTypeStatus</a></code> | <code>string[]</code> | IAM actions required for the GetDeleteEventsByEventTypeStatus API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetDetectors">opGetDetectors</a></code> | <code>string[]</code> | IAM actions required for the GetDetectors API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetDetectorVersion">opGetDetectorVersion</a></code> | <code>string[]</code> | IAM actions required for the GetDetectorVersion API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetEntityTypes">opGetEntityTypes</a></code> | <code>string[]</code> | IAM actions required for the GetEntityTypes API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetEvent">opGetEvent</a></code> | <code>string[]</code> | IAM actions required for the GetEvent API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetEventPrediction">opGetEventPrediction</a></code> | <code>string[]</code> | IAM actions required for the GetEventPrediction API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetEventPredictionMetadata">opGetEventPredictionMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetEventPredictionMetadata API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetEventTypes">opGetEventTypes</a></code> | <code>string[]</code> | IAM actions required for the GetEventTypes API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetExternalModels">opGetExternalModels</a></code> | <code>string[]</code> | IAM actions required for the GetExternalModels API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetKMSEncryptionKey">opGetKMSEncryptionKey</a></code> | <code>string[]</code> | IAM actions required for the GetKMSEncryptionKey API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetLabels">opGetLabels</a></code> | <code>string[]</code> | IAM actions required for the GetLabels API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetListElements">opGetListElements</a></code> | <code>string[]</code> | IAM actions required for the GetListElements API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetListsMetadata">opGetListsMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetListsMetadata API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetModels">opGetModels</a></code> | <code>string[]</code> | IAM actions required for the GetModels API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetModelVersion">opGetModelVersion</a></code> | <code>string[]</code> | IAM actions required for the GetModelVersion API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetOutcomes">opGetOutcomes</a></code> | <code>string[]</code> | IAM actions required for the GetOutcomes API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetRules">opGetRules</a></code> | <code>string[]</code> | IAM actions required for the GetRules API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetVariables">opGetVariables</a></code> | <code>string[]</code> | IAM actions required for the GetVariables API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutDetector">PutDetector</a></code> | <code>string[]</code> | IAM actions required for the PutDetector API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutEntityType">PutEntityType</a></code> | <code>string[]</code> | IAM actions required for the PutEntityType API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutEventType">PutEventType</a></code> | <code>string[]</code> | IAM actions required for the PutEventType API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutExternalModel">PutExternalModel</a></code> | <code>string[]</code> | IAM actions required for the PutExternalModel API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutKMSEncryptionKey">PutKMSEncryptionKey</a></code> | <code>string[]</code> | IAM actions required for the PutKMSEncryptionKey API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutLabel">PutLabel</a></code> | <code>string[]</code> | IAM actions required for the PutLabel API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutOutcome">PutOutcome</a></code> | <code>string[]</code> | IAM actions required for the PutOutcome API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.SendEvent">SendEvent</a></code> | <code>string[]</code> | IAM actions required for the SendEvent API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateDetectorVersion">UpdateDetectorVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateDetectorVersion API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateDetectorVersionMetadata">UpdateDetectorVersionMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateDetectorVersionMetadata API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateDetectorVersionStatus">UpdateDetectorVersionStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateDetectorVersionStatus API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateEventLabel">UpdateEventLabel</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventLabel API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateList">UpdateList</a></code> | <code>string[]</code> | IAM actions required for the UpdateList API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateModel">UpdateModel</a></code> | <code>string[]</code> | IAM actions required for the UpdateModel API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateModelVersion">UpdateModelVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateModelVersion API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateModelVersionStatus">UpdateModelVersionStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateModelVersionStatus API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateRuleMetadata">UpdateRuleMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateRuleMetadata API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateRuleVersion">UpdateRuleVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateRuleVersion API call. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateVariable">UpdateVariable</a></code> | <code>string[]</code> | IAM actions required for the UpdateVariable API call. |

---

##### `BatchCreateVariable`<sup>Required</sup> <a name="BatchCreateVariable" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.BatchCreateVariable"></a>

```typescript
public readonly BatchCreateVariable: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateVariable API call.

---

##### `BatchGetVariable`<sup>Required</sup> <a name="BatchGetVariable" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.BatchGetVariable"></a>

```typescript
public readonly BatchGetVariable: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetVariable API call.

---

##### `CancelBatchImportJob`<sup>Required</sup> <a name="CancelBatchImportJob" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CancelBatchImportJob"></a>

```typescript
public readonly CancelBatchImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelBatchImportJob API call.

---

##### `CancelBatchPredictionJob`<sup>Required</sup> <a name="CancelBatchPredictionJob" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CancelBatchPredictionJob"></a>

```typescript
public readonly CancelBatchPredictionJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelBatchPredictionJob API call.

---

##### `CreateBatchImportJob`<sup>Required</sup> <a name="CreateBatchImportJob" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateBatchImportJob"></a>

```typescript
public readonly CreateBatchImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateBatchImportJob API call.

---

##### `CreateBatchPredictionJob`<sup>Required</sup> <a name="CreateBatchPredictionJob" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateBatchPredictionJob"></a>

```typescript
public readonly CreateBatchPredictionJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateBatchPredictionJob API call.

---

##### `CreateDetectorVersion`<sup>Required</sup> <a name="CreateDetectorVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateDetectorVersion"></a>

```typescript
public readonly CreateDetectorVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateDetectorVersion API call.

---

##### `CreateList`<sup>Required</sup> <a name="CreateList" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateList"></a>

```typescript
public readonly CreateList: string[];
```

- *Type:* string[]

IAM actions required for the CreateList API call.

---

##### `CreateModel`<sup>Required</sup> <a name="CreateModel" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateModel"></a>

```typescript
public readonly CreateModel: string[];
```

- *Type:* string[]

IAM actions required for the CreateModel API call.

---

##### `CreateModelVersion`<sup>Required</sup> <a name="CreateModelVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateModelVersion"></a>

```typescript
public readonly CreateModelVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateModelVersion API call.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateRule"></a>

```typescript
public readonly CreateRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRule API call.

---

##### `CreateVariable`<sup>Required</sup> <a name="CreateVariable" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.CreateVariable"></a>

```typescript
public readonly CreateVariable: string[];
```

- *Type:* string[]

IAM actions required for the CreateVariable API call.

---

##### `DeleteBatchImportJob`<sup>Required</sup> <a name="DeleteBatchImportJob" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteBatchImportJob"></a>

```typescript
public readonly DeleteBatchImportJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBatchImportJob API call.

---

##### `DeleteBatchPredictionJob`<sup>Required</sup> <a name="DeleteBatchPredictionJob" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteBatchPredictionJob"></a>

```typescript
public readonly DeleteBatchPredictionJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBatchPredictionJob API call.

---

##### `DeleteDetector`<sup>Required</sup> <a name="DeleteDetector" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteDetector"></a>

```typescript
public readonly DeleteDetector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDetector API call.

---

##### `DeleteDetectorVersion`<sup>Required</sup> <a name="DeleteDetectorVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteDetectorVersion"></a>

```typescript
public readonly DeleteDetectorVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDetectorVersion API call.

---

##### `DeleteEntityType`<sup>Required</sup> <a name="DeleteEntityType" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteEntityType"></a>

```typescript
public readonly DeleteEntityType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEntityType API call.

---

##### `DeleteEvent`<sup>Required</sup> <a name="DeleteEvent" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteEvent"></a>

```typescript
public readonly DeleteEvent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEvent API call.

---

##### `DeleteEventsByEventType`<sup>Required</sup> <a name="DeleteEventsByEventType" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteEventsByEventType"></a>

```typescript
public readonly DeleteEventsByEventType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventsByEventType API call.

---

##### `DeleteEventType`<sup>Required</sup> <a name="DeleteEventType" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteEventType"></a>

```typescript
public readonly DeleteEventType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventType API call.

---

##### `DeleteExternalModel`<sup>Required</sup> <a name="DeleteExternalModel" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteExternalModel"></a>

```typescript
public readonly DeleteExternalModel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExternalModel API call.

---

##### `DeleteLabel`<sup>Required</sup> <a name="DeleteLabel" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteLabel"></a>

```typescript
public readonly DeleteLabel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLabel API call.

---

##### `DeleteList`<sup>Required</sup> <a name="DeleteList" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteList"></a>

```typescript
public readonly DeleteList: string[];
```

- *Type:* string[]

IAM actions required for the DeleteList API call.

---

##### `DeleteModel`<sup>Required</sup> <a name="DeleteModel" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteModel"></a>

```typescript
public readonly DeleteModel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteModel API call.

---

##### `DeleteModelVersion`<sup>Required</sup> <a name="DeleteModelVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteModelVersion"></a>

```typescript
public readonly DeleteModelVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteModelVersion API call.

---

##### `DeleteOutcome`<sup>Required</sup> <a name="DeleteOutcome" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteOutcome"></a>

```typescript
public readonly DeleteOutcome: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOutcome API call.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRule API call.

---

##### `DeleteVariable`<sup>Required</sup> <a name="DeleteVariable" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DeleteVariable"></a>

```typescript
public readonly DeleteVariable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVariable API call.

---

##### `DescribeDetector`<sup>Required</sup> <a name="DescribeDetector" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DescribeDetector"></a>

```typescript
public readonly DescribeDetector: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDetector API call.

---

##### `DescribeModelVersions`<sup>Required</sup> <a name="DescribeModelVersions" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.DescribeModelVersions"></a>

```typescript
public readonly DescribeModelVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeModelVersions API call.

---

##### `ListEventPredictions`<sup>Required</sup> <a name="ListEventPredictions" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.ListEventPredictions"></a>

```typescript
public readonly ListEventPredictions: string[];
```

- *Type:* string[]

IAM actions required for the ListEventPredictions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetBatchImportJobs`<sup>Required</sup> <a name="opGetBatchImportJobs" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetBatchImportJobs"></a>

```typescript
public readonly opGetBatchImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the GetBatchImportJobs API call.

---

##### `opGetBatchPredictionJobs`<sup>Required</sup> <a name="opGetBatchPredictionJobs" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetBatchPredictionJobs"></a>

```typescript
public readonly opGetBatchPredictionJobs: string[];
```

- *Type:* string[]

IAM actions required for the GetBatchPredictionJobs API call.

---

##### `opGetDeleteEventsByEventTypeStatus`<sup>Required</sup> <a name="opGetDeleteEventsByEventTypeStatus" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetDeleteEventsByEventTypeStatus"></a>

```typescript
public readonly opGetDeleteEventsByEventTypeStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetDeleteEventsByEventTypeStatus API call.

---

##### `opGetDetectors`<sup>Required</sup> <a name="opGetDetectors" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetDetectors"></a>

```typescript
public readonly opGetDetectors: string[];
```

- *Type:* string[]

IAM actions required for the GetDetectors API call.

---

##### `opGetDetectorVersion`<sup>Required</sup> <a name="opGetDetectorVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetDetectorVersion"></a>

```typescript
public readonly opGetDetectorVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetDetectorVersion API call.

---

##### `opGetEntityTypes`<sup>Required</sup> <a name="opGetEntityTypes" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetEntityTypes"></a>

```typescript
public readonly opGetEntityTypes: string[];
```

- *Type:* string[]

IAM actions required for the GetEntityTypes API call.

---

##### `opGetEvent`<sup>Required</sup> <a name="opGetEvent" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetEvent"></a>

```typescript
public readonly opGetEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetEvent API call.

---

##### `opGetEventPrediction`<sup>Required</sup> <a name="opGetEventPrediction" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetEventPrediction"></a>

```typescript
public readonly opGetEventPrediction: string[];
```

- *Type:* string[]

IAM actions required for the GetEventPrediction API call.

---

##### `opGetEventPredictionMetadata`<sup>Required</sup> <a name="opGetEventPredictionMetadata" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetEventPredictionMetadata"></a>

```typescript
public readonly opGetEventPredictionMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetEventPredictionMetadata API call.

---

##### `opGetEventTypes`<sup>Required</sup> <a name="opGetEventTypes" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetEventTypes"></a>

```typescript
public readonly opGetEventTypes: string[];
```

- *Type:* string[]

IAM actions required for the GetEventTypes API call.

---

##### `opGetExternalModels`<sup>Required</sup> <a name="opGetExternalModels" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetExternalModels"></a>

```typescript
public readonly opGetExternalModels: string[];
```

- *Type:* string[]

IAM actions required for the GetExternalModels API call.

---

##### `opGetKMSEncryptionKey`<sup>Required</sup> <a name="opGetKMSEncryptionKey" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetKMSEncryptionKey"></a>

```typescript
public readonly opGetKMSEncryptionKey: string[];
```

- *Type:* string[]

IAM actions required for the GetKMSEncryptionKey API call.

---

##### `opGetLabels`<sup>Required</sup> <a name="opGetLabels" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetLabels"></a>

```typescript
public readonly opGetLabels: string[];
```

- *Type:* string[]

IAM actions required for the GetLabels API call.

---

##### `opGetListElements`<sup>Required</sup> <a name="opGetListElements" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetListElements"></a>

```typescript
public readonly opGetListElements: string[];
```

- *Type:* string[]

IAM actions required for the GetListElements API call.

---

##### `opGetListsMetadata`<sup>Required</sup> <a name="opGetListsMetadata" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetListsMetadata"></a>

```typescript
public readonly opGetListsMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetListsMetadata API call.

---

##### `opGetModels`<sup>Required</sup> <a name="opGetModels" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetModels"></a>

```typescript
public readonly opGetModels: string[];
```

- *Type:* string[]

IAM actions required for the GetModels API call.

---

##### `opGetModelVersion`<sup>Required</sup> <a name="opGetModelVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetModelVersion"></a>

```typescript
public readonly opGetModelVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetModelVersion API call.

---

##### `opGetOutcomes`<sup>Required</sup> <a name="opGetOutcomes" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetOutcomes"></a>

```typescript
public readonly opGetOutcomes: string[];
```

- *Type:* string[]

IAM actions required for the GetOutcomes API call.

---

##### `opGetRules`<sup>Required</sup> <a name="opGetRules" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetRules"></a>

```typescript
public readonly opGetRules: string[];
```

- *Type:* string[]

IAM actions required for the GetRules API call.

---

##### `opGetVariables`<sup>Required</sup> <a name="opGetVariables" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.opGetVariables"></a>

```typescript
public readonly opGetVariables: string[];
```

- *Type:* string[]

IAM actions required for the GetVariables API call.

---

##### `PutDetector`<sup>Required</sup> <a name="PutDetector" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutDetector"></a>

```typescript
public readonly PutDetector: string[];
```

- *Type:* string[]

IAM actions required for the PutDetector API call.

---

##### `PutEntityType`<sup>Required</sup> <a name="PutEntityType" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutEntityType"></a>

```typescript
public readonly PutEntityType: string[];
```

- *Type:* string[]

IAM actions required for the PutEntityType API call.

---

##### `PutEventType`<sup>Required</sup> <a name="PutEventType" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutEventType"></a>

```typescript
public readonly PutEventType: string[];
```

- *Type:* string[]

IAM actions required for the PutEventType API call.

---

##### `PutExternalModel`<sup>Required</sup> <a name="PutExternalModel" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutExternalModel"></a>

```typescript
public readonly PutExternalModel: string[];
```

- *Type:* string[]

IAM actions required for the PutExternalModel API call.

---

##### `PutKMSEncryptionKey`<sup>Required</sup> <a name="PutKMSEncryptionKey" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutKMSEncryptionKey"></a>

```typescript
public readonly PutKMSEncryptionKey: string[];
```

- *Type:* string[]

IAM actions required for the PutKMSEncryptionKey API call.

---

##### `PutLabel`<sup>Required</sup> <a name="PutLabel" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutLabel"></a>

```typescript
public readonly PutLabel: string[];
```

- *Type:* string[]

IAM actions required for the PutLabel API call.

---

##### `PutOutcome`<sup>Required</sup> <a name="PutOutcome" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.PutOutcome"></a>

```typescript
public readonly PutOutcome: string[];
```

- *Type:* string[]

IAM actions required for the PutOutcome API call.

---

##### `SendEvent`<sup>Required</sup> <a name="SendEvent" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.SendEvent"></a>

```typescript
public readonly SendEvent: string[];
```

- *Type:* string[]

IAM actions required for the SendEvent API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDetectorVersion`<sup>Required</sup> <a name="UpdateDetectorVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateDetectorVersion"></a>

```typescript
public readonly UpdateDetectorVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDetectorVersion API call.

---

##### `UpdateDetectorVersionMetadata`<sup>Required</sup> <a name="UpdateDetectorVersionMetadata" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateDetectorVersionMetadata"></a>

```typescript
public readonly UpdateDetectorVersionMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDetectorVersionMetadata API call.

---

##### `UpdateDetectorVersionStatus`<sup>Required</sup> <a name="UpdateDetectorVersionStatus" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateDetectorVersionStatus"></a>

```typescript
public readonly UpdateDetectorVersionStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDetectorVersionStatus API call.

---

##### `UpdateEventLabel`<sup>Required</sup> <a name="UpdateEventLabel" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateEventLabel"></a>

```typescript
public readonly UpdateEventLabel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventLabel API call.

---

##### `UpdateList`<sup>Required</sup> <a name="UpdateList" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateList"></a>

```typescript
public readonly UpdateList: string[];
```

- *Type:* string[]

IAM actions required for the UpdateList API call.

---

##### `UpdateModel`<sup>Required</sup> <a name="UpdateModel" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateModel"></a>

```typescript
public readonly UpdateModel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateModel API call.

---

##### `UpdateModelVersion`<sup>Required</sup> <a name="UpdateModelVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateModelVersion"></a>

```typescript
public readonly UpdateModelVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateModelVersion API call.

---

##### `UpdateModelVersionStatus`<sup>Required</sup> <a name="UpdateModelVersionStatus" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateModelVersionStatus"></a>

```typescript
public readonly UpdateModelVersionStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateModelVersionStatus API call.

---

##### `UpdateRuleMetadata`<sup>Required</sup> <a name="UpdateRuleMetadata" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateRuleMetadata"></a>

```typescript
public readonly UpdateRuleMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRuleMetadata API call.

---

##### `UpdateRuleVersion`<sup>Required</sup> <a name="UpdateRuleVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateRuleVersion"></a>

```typescript
public readonly UpdateRuleVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRuleVersion API call.

---

##### `UpdateVariable`<sup>Required</sup> <a name="UpdateVariable" id="@cdk_utils/iam.frauddetector.FrauddetectorOperations.property.UpdateVariable"></a>

```typescript
public readonly UpdateVariable: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVariable API call.

---

### FrauddetectorResources <a name="FrauddetectorResources" id="@cdk_utils/iam.frauddetector.FrauddetectorResources"></a>

ARN builders, validators, and parsers for frauddetector resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.Initializer"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

new frauddetector.FrauddetectorResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.batchImport">batchImport</a></code> | Builds an ARN for the batch-import resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.batchPrediction">batchPrediction</a></code> | Builds an ARN for the batch-prediction resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.detector">detector</a></code> | Builds an ARN for the detector resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.detectorVersion">detectorVersion</a></code> | Builds an ARN for the detector-version resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.entityType">entityType</a></code> | Builds an ARN for the entity-type resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.eventType">eventType</a></code> | Builds an ARN for the event-type resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.externalModel">externalModel</a></code> | Builds an ARN for the external-model resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidBatchImportArn">isValidBatchImportArn</a></code> | Validates whether a string is a valid ARN for the batch-import resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidBatchPredictionArn">isValidBatchPredictionArn</a></code> | Validates whether a string is a valid ARN for the batch-prediction resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidDetectorArn">isValidDetectorArn</a></code> | Validates whether a string is a valid ARN for the detector resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidDetectorVersionArn">isValidDetectorVersionArn</a></code> | Validates whether a string is a valid ARN for the detector-version resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidEntityTypeArn">isValidEntityTypeArn</a></code> | Validates whether a string is a valid ARN for the entity-type resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidEventTypeArn">isValidEventTypeArn</a></code> | Validates whether a string is a valid ARN for the event-type resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidExternalModelArn">isValidExternalModelArn</a></code> | Validates whether a string is a valid ARN for the external-model resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidLabelArn">isValidLabelArn</a></code> | Validates whether a string is a valid ARN for the label resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidListArn">isValidListArn</a></code> | Validates whether a string is a valid ARN for the list resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidModelArn">isValidModelArn</a></code> | Validates whether a string is a valid ARN for the model resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidModelVersionArn">isValidModelVersionArn</a></code> | Validates whether a string is a valid ARN for the model-version resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidOutcomeArn">isValidOutcomeArn</a></code> | Validates whether a string is a valid ARN for the outcome resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidRuleArn">isValidRuleArn</a></code> | Validates whether a string is a valid ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidVariableArn">isValidVariableArn</a></code> | Validates whether a string is a valid ARN for the variable resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.label">label</a></code> | Builds an ARN for the label resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.list">list</a></code> | Builds an ARN for the list resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.model">model</a></code> | Builds an ARN for the model resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.modelVersion">modelVersion</a></code> | Builds an ARN for the model-version resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.outcome">outcome</a></code> | Builds an ARN for the outcome resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseBatchImportArn">parseBatchImportArn</a></code> | Parses a batch-import ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseBatchPredictionArn">parseBatchPredictionArn</a></code> | Parses a batch-prediction ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseDetectorArn">parseDetectorArn</a></code> | Parses a detector ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseDetectorVersionArn">parseDetectorVersionArn</a></code> | Parses a detector-version ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseEntityTypeArn">parseEntityTypeArn</a></code> | Parses a entity-type ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseEventTypeArn">parseEventTypeArn</a></code> | Parses a event-type ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseExternalModelArn">parseExternalModelArn</a></code> | Parses a external-model ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseLabelArn">parseLabelArn</a></code> | Parses a label ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseListArn">parseListArn</a></code> | Parses a list ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseModelArn">parseModelArn</a></code> | Parses a model ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseModelVersionArn">parseModelVersionArn</a></code> | Parses a model-version ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseOutcomeArn">parseOutcomeArn</a></code> | Parses a outcome ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseRuleArn">parseRuleArn</a></code> | Parses a rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.parseVariableArn">parseVariableArn</a></code> | Parses a variable ARN into its components. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.rule">rule</a></code> | Builds an ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.frauddetector.FrauddetectorResources.variable">variable</a></code> | Builds an ARN for the variable resource. |

---

##### `batchImport` <a name="batchImport" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.batchImport"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.batchImport(props: FrauddetectorBatchImportArnProps)
```

Builds an ARN for the batch-import resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.batchImport.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchImportArnProps">FrauddetectorBatchImportArnProps</a>

---

##### `batchPrediction` <a name="batchPrediction" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.batchPrediction"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.batchPrediction(props: FrauddetectorBatchPredictionArnProps)
```

Builds an ARN for the batch-prediction resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.batchPrediction.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorBatchPredictionArnProps">FrauddetectorBatchPredictionArnProps</a>

---

##### `detector` <a name="detector" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.detector"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.detector(props: FrauddetectorDetectorArnProps)
```

Builds an ARN for the detector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.detector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorArnProps">FrauddetectorDetectorArnProps</a>

---

##### `detectorVersion` <a name="detectorVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.detectorVersion"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.detectorVersion(props: FrauddetectorDetectorVersionArnProps)
```

Builds an ARN for the detector-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.detectorVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorDetectorVersionArnProps">FrauddetectorDetectorVersionArnProps</a>

---

##### `entityType` <a name="entityType" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.entityType"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.entityType(props: FrauddetectorEntityTypeArnProps)
```

Builds an ARN for the entity-type resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.entityType.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorEntityTypeArnProps">FrauddetectorEntityTypeArnProps</a>

---

##### `eventType` <a name="eventType" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.eventType"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.eventType(props: FrauddetectorEventTypeArnProps)
```

Builds an ARN for the event-type resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.eventType.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorEventTypeArnProps">FrauddetectorEventTypeArnProps</a>

---

##### `externalModel` <a name="externalModel" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.externalModel"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.externalModel(props: FrauddetectorExternalModelArnProps)
```

Builds an ARN for the external-model resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.externalModel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorExternalModelArnProps">FrauddetectorExternalModelArnProps</a>

---

##### `isValidBatchImportArn` <a name="isValidBatchImportArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidBatchImportArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidBatchImportArn(arn: string)
```

Validates whether a string is a valid ARN for the batch-import resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidBatchImportArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBatchPredictionArn` <a name="isValidBatchPredictionArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidBatchPredictionArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidBatchPredictionArn(arn: string)
```

Validates whether a string is a valid ARN for the batch-prediction resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidBatchPredictionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDetectorArn` <a name="isValidDetectorArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidDetectorArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidDetectorArn(arn: string)
```

Validates whether a string is a valid ARN for the detector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidDetectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDetectorVersionArn` <a name="isValidDetectorVersionArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidDetectorVersionArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidDetectorVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the detector-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidDetectorVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEntityTypeArn` <a name="isValidEntityTypeArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidEntityTypeArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidEntityTypeArn(arn: string)
```

Validates whether a string is a valid ARN for the entity-type resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidEntityTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventTypeArn` <a name="isValidEventTypeArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidEventTypeArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidEventTypeArn(arn: string)
```

Validates whether a string is a valid ARN for the event-type resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidEventTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExternalModelArn` <a name="isValidExternalModelArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidExternalModelArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidExternalModelArn(arn: string)
```

Validates whether a string is a valid ARN for the external-model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidExternalModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLabelArn` <a name="isValidLabelArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidLabelArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidLabelArn(arn: string)
```

Validates whether a string is a valid ARN for the label resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidLabelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidListArn` <a name="isValidListArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidListArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidListArn(arn: string)
```

Validates whether a string is a valid ARN for the list resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidListArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelArn` <a name="isValidModelArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidModelArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidModelArn(arn: string)
```

Validates whether a string is a valid ARN for the model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelVersionArn` <a name="isValidModelVersionArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidModelVersionArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidModelVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the model-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidModelVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOutcomeArn` <a name="isValidOutcomeArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidOutcomeArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidOutcomeArn(arn: string)
```

Validates whether a string is a valid ARN for the outcome resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidOutcomeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuleArn` <a name="isValidRuleArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidRuleArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVariableArn` <a name="isValidVariableArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidVariableArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.isValidVariableArn(arn: string)
```

Validates whether a string is a valid ARN for the variable resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.isValidVariableArn.parameter.arn"></a>

- *Type:* string

---

##### `label` <a name="label" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.label"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.label(props: FrauddetectorLabelArnProps)
```

Builds an ARN for the label resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.label.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorLabelArnProps">FrauddetectorLabelArnProps</a>

---

##### `list` <a name="list" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.list"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.list(props: FrauddetectorListArnProps)
```

Builds an ARN for the list resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.list.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorListArnProps">FrauddetectorListArnProps</a>

---

##### `model` <a name="model" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.model"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.model(props: FrauddetectorModelArnProps)
```

Builds an ARN for the model resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.model.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelArnProps">FrauddetectorModelArnProps</a>

---

##### `modelVersion` <a name="modelVersion" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.modelVersion"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.modelVersion(props: FrauddetectorModelVersionArnProps)
```

Builds an ARN for the model-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.modelVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorModelVersionArnProps">FrauddetectorModelVersionArnProps</a>

---

##### `outcome` <a name="outcome" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.outcome"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.outcome(props: FrauddetectorOutcomeArnProps)
```

Builds an ARN for the outcome resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.outcome.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorOutcomeArnProps">FrauddetectorOutcomeArnProps</a>

---

##### `parseBatchImportArn` <a name="parseBatchImportArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseBatchImportArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseBatchImportArn(arn: string)
```

Parses a batch-import ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseBatchImportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBatchPredictionArn` <a name="parseBatchPredictionArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseBatchPredictionArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseBatchPredictionArn(arn: string)
```

Parses a batch-prediction ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseBatchPredictionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDetectorArn` <a name="parseDetectorArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseDetectorArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseDetectorArn(arn: string)
```

Parses a detector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseDetectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDetectorVersionArn` <a name="parseDetectorVersionArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseDetectorVersionArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseDetectorVersionArn(arn: string)
```

Parses a detector-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseDetectorVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEntityTypeArn` <a name="parseEntityTypeArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseEntityTypeArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseEntityTypeArn(arn: string)
```

Parses a entity-type ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseEntityTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventTypeArn` <a name="parseEventTypeArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseEventTypeArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseEventTypeArn(arn: string)
```

Parses a event-type ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseEventTypeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExternalModelArn` <a name="parseExternalModelArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseExternalModelArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseExternalModelArn(arn: string)
```

Parses a external-model ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseExternalModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLabelArn` <a name="parseLabelArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseLabelArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseLabelArn(arn: string)
```

Parses a label ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseLabelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseListArn` <a name="parseListArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseListArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseListArn(arn: string)
```

Parses a list ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseListArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelArn` <a name="parseModelArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseModelArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseModelArn(arn: string)
```

Parses a model ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelVersionArn` <a name="parseModelVersionArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseModelVersionArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseModelVersionArn(arn: string)
```

Parses a model-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseModelVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOutcomeArn` <a name="parseOutcomeArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseOutcomeArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseOutcomeArn(arn: string)
```

Parses a outcome ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseOutcomeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuleArn` <a name="parseRuleArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseRuleArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseRuleArn(arn: string)
```

Parses a rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVariableArn` <a name="parseVariableArn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseVariableArn"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.parseVariableArn(arn: string)
```

Parses a variable ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.parseVariableArn.parameter.arn"></a>

- *Type:* string

---

##### `rule` <a name="rule" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.rule"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.rule(props: FrauddetectorRuleArnProps)
```

Builds an ARN for the rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.rule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorRuleArnProps">FrauddetectorRuleArnProps</a>

---

##### `variable` <a name="variable" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.variable"></a>

```typescript
import { frauddetector } from '@cdk_utils/iam'

frauddetector.FrauddetectorResources.variable(props: FrauddetectorVariableArnProps)
```

Builds an ARN for the variable resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.frauddetector.FrauddetectorResources.variable.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.frauddetector.FrauddetectorVariableArnProps">FrauddetectorVariableArnProps</a>

---




