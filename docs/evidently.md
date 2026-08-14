# `evidently` Submodule <a name="`evidently` Submodule" id="@cdk_utils/iam.evidently"></a>


## Structs <a name="Structs" id="Structs"></a>

### EvidentlyExperimentArnComponents <a name="EvidentlyExperimentArnComponents" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents"></a>

Parsed components of a Experiment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

const evidentlyExperimentArnComponents: evidently.EvidentlyExperimentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents.property.experimentName">experimentName</a></code> | <code>string</code> | The ExperimentName component. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `experimentName`<sup>Required</sup> <a name="experimentName" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents.property.experimentName"></a>

```typescript
public readonly experimentName: string;
```

- *Type:* string

The ExperimentName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EvidentlyExperimentArnProps <a name="EvidentlyExperimentArnProps" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnProps"></a>

Properties for building a Experiment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnProps.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

const evidentlyExperimentArnProps: evidently.EvidentlyExperimentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyExperimentArnProps.property.experimentName">experimentName</a></code> | <code>string</code> | The ExperimentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyExperimentArnProps.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component of the ARN. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyExperimentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyExperimentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyExperimentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `experimentName`<sup>Required</sup> <a name="experimentName" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnProps.property.experimentName"></a>

```typescript
public readonly experimentName: string;
```

- *Type:* string

The ExperimentName component of the ARN.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.evidently.EvidentlyExperimentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EvidentlyFeatureArnComponents <a name="EvidentlyFeatureArnComponents" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents"></a>

Parsed components of a Feature ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

const evidentlyFeatureArnComponents: evidently.EvidentlyFeatureArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents.property.featureName">featureName</a></code> | <code>string</code> | The FeatureName component. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

The FeatureName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EvidentlyFeatureArnProps <a name="EvidentlyFeatureArnProps" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnProps"></a>

Properties for building a Feature ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnProps.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

const evidentlyFeatureArnProps: evidently.EvidentlyFeatureArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyFeatureArnProps.property.featureName">featureName</a></code> | <code>string</code> | The FeatureName component of the ARN. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyFeatureArnProps.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component of the ARN. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyFeatureArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyFeatureArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyFeatureArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnProps.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

The FeatureName component of the ARN.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.evidently.EvidentlyFeatureArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EvidentlyLaunchArnComponents <a name="EvidentlyLaunchArnComponents" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents"></a>

Parsed components of a Launch ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

const evidentlyLaunchArnComponents: evidently.EvidentlyLaunchArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents.property.launchName">launchName</a></code> | <code>string</code> | The LaunchName component. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `launchName`<sup>Required</sup> <a name="launchName" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents.property.launchName"></a>

```typescript
public readonly launchName: string;
```

- *Type:* string

The LaunchName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EvidentlyLaunchArnProps <a name="EvidentlyLaunchArnProps" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnProps"></a>

Properties for building a Launch ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnProps.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

const evidentlyLaunchArnProps: evidently.EvidentlyLaunchArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyLaunchArnProps.property.launchName">launchName</a></code> | <code>string</code> | The LaunchName component of the ARN. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyLaunchArnProps.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component of the ARN. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyLaunchArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyLaunchArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyLaunchArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `launchName`<sup>Required</sup> <a name="launchName" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnProps.property.launchName"></a>

```typescript
public readonly launchName: string;
```

- *Type:* string

The LaunchName component of the ARN.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.evidently.EvidentlyLaunchArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EvidentlyProjectArnComponents <a name="EvidentlyProjectArnComponents" id="@cdk_utils/iam.evidently.EvidentlyProjectArnComponents"></a>

Parsed components of a Project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evidently.EvidentlyProjectArnComponents.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

const evidentlyProjectArnComponents: evidently.EvidentlyProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyProjectArnComponents.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.evidently.EvidentlyProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.evidently.EvidentlyProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.evidently.EvidentlyProjectArnComponents.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.evidently.EvidentlyProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EvidentlyProjectArnProps <a name="EvidentlyProjectArnProps" id="@cdk_utils/iam.evidently.EvidentlyProjectArnProps"></a>

Properties for building a Project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evidently.EvidentlyProjectArnProps.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

const evidentlyProjectArnProps: evidently.EvidentlyProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyProjectArnProps.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component of the ARN. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.evidently.EvidentlyProjectArnProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.evidently.EvidentlyProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.evidently.EvidentlyProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.evidently.EvidentlyProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EvidentlySegmentArnComponents <a name="EvidentlySegmentArnComponents" id="@cdk_utils/iam.evidently.EvidentlySegmentArnComponents"></a>

Parsed components of a Segment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evidently.EvidentlySegmentArnComponents.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

const evidentlySegmentArnComponents: evidently.EvidentlySegmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlySegmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlySegmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlySegmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlySegmentArnComponents.property.segmentName">segmentName</a></code> | <code>string</code> | The SegmentName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.evidently.EvidentlySegmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.evidently.EvidentlySegmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.evidently.EvidentlySegmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdk_utils/iam.evidently.EvidentlySegmentArnComponents.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

The SegmentName component.

---

### EvidentlySegmentArnProps <a name="EvidentlySegmentArnProps" id="@cdk_utils/iam.evidently.EvidentlySegmentArnProps"></a>

Properties for building a Segment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.evidently.EvidentlySegmentArnProps.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

const evidentlySegmentArnProps: evidently.EvidentlySegmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlySegmentArnProps.property.segmentName">segmentName</a></code> | <code>string</code> | The SegmentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlySegmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlySegmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlySegmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdk_utils/iam.evidently.EvidentlySegmentArnProps.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

The SegmentName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.evidently.EvidentlySegmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.evidently.EvidentlySegmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.evidently.EvidentlySegmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyActions <a name="EvidentlyActions" id="@cdk_utils/iam.evidently.EvidentlyActions"></a>

IAM action constants for the evidently service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.evidently.EvidentlyActions.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

new evidently.EvidentlyActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetExperiment">actionGetExperiment</a></code> | <code>string</code> | [Read] evidently:GetExperiment. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetExperimentResults">actionGetExperimentResults</a></code> | <code>string</code> | [Read] evidently:GetExperimentResults. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetFeature">actionGetFeature</a></code> | <code>string</code> | [Read] evidently:GetFeature. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetLaunch">actionGetLaunch</a></code> | <code>string</code> | [Read] evidently:GetLaunch. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetProject">actionGetProject</a></code> | <code>string</code> | [Read] evidently:GetProject. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetSegment">actionGetSegment</a></code> | <code>string</code> | [Read] evidently:GetSegment. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.BatchEvaluateFeature">BatchEvaluateFeature</a></code> | <code>string</code> | [Write] evidently:BatchEvaluateFeature. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.CreateExperiment">CreateExperiment</a></code> | <code>string</code> | [Write] evidently:CreateExperiment. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.CreateFeature">CreateFeature</a></code> | <code>string</code> | [Write] evidently:CreateFeature. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.CreateLaunch">CreateLaunch</a></code> | <code>string</code> | [Write] evidently:CreateLaunch. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] evidently:CreateProject. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.CreateSegment">CreateSegment</a></code> | <code>string</code> | [Write] evidently:CreateSegment. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.DeleteExperiment">DeleteExperiment</a></code> | <code>string</code> | [Write] evidently:DeleteExperiment. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.DeleteFeature">DeleteFeature</a></code> | <code>string</code> | [Write] evidently:DeleteFeature. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.DeleteLaunch">DeleteLaunch</a></code> | <code>string</code> | [Write] evidently:DeleteLaunch. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.DeleteProject">DeleteProject</a></code> | <code>string</code> | [Write] evidently:DeleteProject. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.DeleteSegment">DeleteSegment</a></code> | <code>string</code> | [Write] evidently:DeleteSegment. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.EvaluateFeature">EvaluateFeature</a></code> | <code>string</code> | [Write] evidently:EvaluateFeature. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.ListExperiments">ListExperiments</a></code> | <code>string</code> | [Read] evidently:ListExperiments. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.ListFeatures">ListFeatures</a></code> | <code>string</code> | [Read] evidently:ListFeatures. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.ListLaunches">ListLaunches</a></code> | <code>string</code> | [Read] evidently:ListLaunches. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [Read] evidently:ListProjects. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.ListSegmentReferences">ListSegmentReferences</a></code> | <code>string</code> | [Read] evidently:ListSegmentReferences. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.ListSegments">ListSegments</a></code> | <code>string</code> | [Read] evidently:ListSegments. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] evidently:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.PutProjectEvents">PutProjectEvents</a></code> | <code>string</code> | [Write] evidently:PutProjectEvents. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.StartExperiment">StartExperiment</a></code> | <code>string</code> | [Write] evidently:StartExperiment. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.StartLaunch">StartLaunch</a></code> | <code>string</code> | [Write] evidently:StartLaunch. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.StopExperiment">StopExperiment</a></code> | <code>string</code> | [Write] evidently:StopExperiment. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.StopLaunch">StopLaunch</a></code> | <code>string</code> | [Write] evidently:StopLaunch. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] evidently:TagResource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.TestSegmentPattern">TestSegmentPattern</a></code> | <code>string</code> | [Read] evidently:TestSegmentPattern. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] evidently:UntagResource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.UpdateExperiment">UpdateExperiment</a></code> | <code>string</code> | [Write] evidently:UpdateExperiment. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.UpdateFeature">UpdateFeature</a></code> | <code>string</code> | [Write] evidently:UpdateFeature. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.UpdateLaunch">UpdateLaunch</a></code> | <code>string</code> | [Write] evidently:UpdateLaunch. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.UpdateProject">UpdateProject</a></code> | <code>string</code> | [Write] evidently:UpdateProject. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyActions.property.UpdateProjectDataDelivery">UpdateProjectDataDelivery</a></code> | <code>string</code> | [Write] evidently:UpdateProjectDataDelivery. |

---

##### `actionGetExperiment`<sup>Required</sup> <a name="actionGetExperiment" id="@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetExperiment"></a>

```typescript
public readonly actionGetExperiment: string;
```

- *Type:* string

[Read] evidently:GetExperiment.

---

##### `actionGetExperimentResults`<sup>Required</sup> <a name="actionGetExperimentResults" id="@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetExperimentResults"></a>

```typescript
public readonly actionGetExperimentResults: string;
```

- *Type:* string

[Read] evidently:GetExperimentResults.

---

##### `actionGetFeature`<sup>Required</sup> <a name="actionGetFeature" id="@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetFeature"></a>

```typescript
public readonly actionGetFeature: string;
```

- *Type:* string

[Read] evidently:GetFeature.

---

##### `actionGetLaunch`<sup>Required</sup> <a name="actionGetLaunch" id="@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetLaunch"></a>

```typescript
public readonly actionGetLaunch: string;
```

- *Type:* string

[Read] evidently:GetLaunch.

---

##### `actionGetProject`<sup>Required</sup> <a name="actionGetProject" id="@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetProject"></a>

```typescript
public readonly actionGetProject: string;
```

- *Type:* string

[Read] evidently:GetProject.

---

##### `actionGetSegment`<sup>Required</sup> <a name="actionGetSegment" id="@cdk_utils/iam.evidently.EvidentlyActions.property.actionGetSegment"></a>

```typescript
public readonly actionGetSegment: string;
```

- *Type:* string

[Read] evidently:GetSegment.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.evidently.EvidentlyActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.evidently.EvidentlyActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.evidently.EvidentlyActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.evidently.EvidentlyActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.evidently.EvidentlyActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchEvaluateFeature`<sup>Required</sup> <a name="BatchEvaluateFeature" id="@cdk_utils/iam.evidently.EvidentlyActions.property.BatchEvaluateFeature"></a>

```typescript
public readonly BatchEvaluateFeature: string;
```

- *Type:* string

[Write] evidently:BatchEvaluateFeature.

---

##### `CreateExperiment`<sup>Required</sup> <a name="CreateExperiment" id="@cdk_utils/iam.evidently.EvidentlyActions.property.CreateExperiment"></a>

```typescript
public readonly CreateExperiment: string;
```

- *Type:* string

[Write] evidently:CreateExperiment.

---

##### `CreateFeature`<sup>Required</sup> <a name="CreateFeature" id="@cdk_utils/iam.evidently.EvidentlyActions.property.CreateFeature"></a>

```typescript
public readonly CreateFeature: string;
```

- *Type:* string

[Write] evidently:CreateFeature.

---

##### `CreateLaunch`<sup>Required</sup> <a name="CreateLaunch" id="@cdk_utils/iam.evidently.EvidentlyActions.property.CreateLaunch"></a>

```typescript
public readonly CreateLaunch: string;
```

- *Type:* string

[Write] evidently:CreateLaunch.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.evidently.EvidentlyActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] evidently:CreateProject.

---

##### `CreateSegment`<sup>Required</sup> <a name="CreateSegment" id="@cdk_utils/iam.evidently.EvidentlyActions.property.CreateSegment"></a>

```typescript
public readonly CreateSegment: string;
```

- *Type:* string

[Write] evidently:CreateSegment.

---

##### `DeleteExperiment`<sup>Required</sup> <a name="DeleteExperiment" id="@cdk_utils/iam.evidently.EvidentlyActions.property.DeleteExperiment"></a>

```typescript
public readonly DeleteExperiment: string;
```

- *Type:* string

[Write] evidently:DeleteExperiment.

---

##### `DeleteFeature`<sup>Required</sup> <a name="DeleteFeature" id="@cdk_utils/iam.evidently.EvidentlyActions.property.DeleteFeature"></a>

```typescript
public readonly DeleteFeature: string;
```

- *Type:* string

[Write] evidently:DeleteFeature.

---

##### `DeleteLaunch`<sup>Required</sup> <a name="DeleteLaunch" id="@cdk_utils/iam.evidently.EvidentlyActions.property.DeleteLaunch"></a>

```typescript
public readonly DeleteLaunch: string;
```

- *Type:* string

[Write] evidently:DeleteLaunch.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.evidently.EvidentlyActions.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string;
```

- *Type:* string

[Write] evidently:DeleteProject.

---

##### `DeleteSegment`<sup>Required</sup> <a name="DeleteSegment" id="@cdk_utils/iam.evidently.EvidentlyActions.property.DeleteSegment"></a>

```typescript
public readonly DeleteSegment: string;
```

- *Type:* string

[Write] evidently:DeleteSegment.

---

##### `EvaluateFeature`<sup>Required</sup> <a name="EvaluateFeature" id="@cdk_utils/iam.evidently.EvidentlyActions.property.EvaluateFeature"></a>

```typescript
public readonly EvaluateFeature: string;
```

- *Type:* string

[Write] evidently:EvaluateFeature.

---

##### `ListExperiments`<sup>Required</sup> <a name="ListExperiments" id="@cdk_utils/iam.evidently.EvidentlyActions.property.ListExperiments"></a>

```typescript
public readonly ListExperiments: string;
```

- *Type:* string

[Read] evidently:ListExperiments.

---

##### `ListFeatures`<sup>Required</sup> <a name="ListFeatures" id="@cdk_utils/iam.evidently.EvidentlyActions.property.ListFeatures"></a>

```typescript
public readonly ListFeatures: string;
```

- *Type:* string

[Read] evidently:ListFeatures.

---

##### `ListLaunches`<sup>Required</sup> <a name="ListLaunches" id="@cdk_utils/iam.evidently.EvidentlyActions.property.ListLaunches"></a>

```typescript
public readonly ListLaunches: string;
```

- *Type:* string

[Read] evidently:ListLaunches.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.evidently.EvidentlyActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[Read] evidently:ListProjects.

---

##### `ListSegmentReferences`<sup>Required</sup> <a name="ListSegmentReferences" id="@cdk_utils/iam.evidently.EvidentlyActions.property.ListSegmentReferences"></a>

```typescript
public readonly ListSegmentReferences: string;
```

- *Type:* string

[Read] evidently:ListSegmentReferences.

---

##### `ListSegments`<sup>Required</sup> <a name="ListSegments" id="@cdk_utils/iam.evidently.EvidentlyActions.property.ListSegments"></a>

```typescript
public readonly ListSegments: string;
```

- *Type:* string

[Read] evidently:ListSegments.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.evidently.EvidentlyActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] evidently:ListTagsForResource.

---

##### `PutProjectEvents`<sup>Required</sup> <a name="PutProjectEvents" id="@cdk_utils/iam.evidently.EvidentlyActions.property.PutProjectEvents"></a>

```typescript
public readonly PutProjectEvents: string;
```

- *Type:* string

[Write] evidently:PutProjectEvents.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.evidently.EvidentlyActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartExperiment`<sup>Required</sup> <a name="StartExperiment" id="@cdk_utils/iam.evidently.EvidentlyActions.property.StartExperiment"></a>

```typescript
public readonly StartExperiment: string;
```

- *Type:* string

[Write] evidently:StartExperiment.

---

##### `StartLaunch`<sup>Required</sup> <a name="StartLaunch" id="@cdk_utils/iam.evidently.EvidentlyActions.property.StartLaunch"></a>

```typescript
public readonly StartLaunch: string;
```

- *Type:* string

[Write] evidently:StartLaunch.

---

##### `StopExperiment`<sup>Required</sup> <a name="StopExperiment" id="@cdk_utils/iam.evidently.EvidentlyActions.property.StopExperiment"></a>

```typescript
public readonly StopExperiment: string;
```

- *Type:* string

[Write] evidently:StopExperiment.

---

##### `StopLaunch`<sup>Required</sup> <a name="StopLaunch" id="@cdk_utils/iam.evidently.EvidentlyActions.property.StopLaunch"></a>

```typescript
public readonly StopLaunch: string;
```

- *Type:* string

[Write] evidently:StopLaunch.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.evidently.EvidentlyActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] evidently:TagResource.

---

##### `TestSegmentPattern`<sup>Required</sup> <a name="TestSegmentPattern" id="@cdk_utils/iam.evidently.EvidentlyActions.property.TestSegmentPattern"></a>

```typescript
public readonly TestSegmentPattern: string;
```

- *Type:* string

[Read] evidently:TestSegmentPattern.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.evidently.EvidentlyActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] evidently:UntagResource.

---

##### `UpdateExperiment`<sup>Required</sup> <a name="UpdateExperiment" id="@cdk_utils/iam.evidently.EvidentlyActions.property.UpdateExperiment"></a>

```typescript
public readonly UpdateExperiment: string;
```

- *Type:* string

[Write] evidently:UpdateExperiment.

---

##### `UpdateFeature`<sup>Required</sup> <a name="UpdateFeature" id="@cdk_utils/iam.evidently.EvidentlyActions.property.UpdateFeature"></a>

```typescript
public readonly UpdateFeature: string;
```

- *Type:* string

[Write] evidently:UpdateFeature.

---

##### `UpdateLaunch`<sup>Required</sup> <a name="UpdateLaunch" id="@cdk_utils/iam.evidently.EvidentlyActions.property.UpdateLaunch"></a>

```typescript
public readonly UpdateLaunch: string;
```

- *Type:* string

[Write] evidently:UpdateLaunch.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.evidently.EvidentlyActions.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string;
```

- *Type:* string

[Write] evidently:UpdateProject.

---

##### `UpdateProjectDataDelivery`<sup>Required</sup> <a name="UpdateProjectDataDelivery" id="@cdk_utils/iam.evidently.EvidentlyActions.property.UpdateProjectDataDelivery"></a>

```typescript
public readonly UpdateProjectDataDelivery: string;
```

- *Type:* string

[Write] evidently:UpdateProjectDataDelivery.

---

### EvidentlyConditions <a name="EvidentlyConditions" id="@cdk_utils/iam.evidently.EvidentlyConditions"></a>

Condition key constants and builders for evidently.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.evidently.EvidentlyConditions.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

new evidently.EvidentlyConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.evidently.EvidentlyConditions.requestTag"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.evidently.EvidentlyConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.evidently.EvidentlyConditions.resourceTag"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.evidently.EvidentlyConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.evidently.EvidentlyConditions.tagKeys"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.evidently.EvidentlyConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.property.CreateExperimentConditionKeys">CreateExperimentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExperiment action. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.property.CreateFeatureConditionKeys">CreateFeatureConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFeature action. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.property.CreateLaunchConditionKeys">CreateLaunchConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLaunch action. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.property.CreateProjectConditionKeys">CreateProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProject action. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.property.CreateSegmentConditionKeys">CreateSegmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSegment action. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.evidently.EvidentlyConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.evidently.EvidentlyConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.evidently.EvidentlyConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateExperimentConditionKeys`<sup>Required</sup> <a name="CreateExperimentConditionKeys" id="@cdk_utils/iam.evidently.EvidentlyConditions.property.CreateExperimentConditionKeys"></a>

```typescript
public readonly CreateExperimentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExperiment action.

---

##### `CreateFeatureConditionKeys`<sup>Required</sup> <a name="CreateFeatureConditionKeys" id="@cdk_utils/iam.evidently.EvidentlyConditions.property.CreateFeatureConditionKeys"></a>

```typescript
public readonly CreateFeatureConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFeature action.

---

##### `CreateLaunchConditionKeys`<sup>Required</sup> <a name="CreateLaunchConditionKeys" id="@cdk_utils/iam.evidently.EvidentlyConditions.property.CreateLaunchConditionKeys"></a>

```typescript
public readonly CreateLaunchConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLaunch action.

---

##### `CreateProjectConditionKeys`<sup>Required</sup> <a name="CreateProjectConditionKeys" id="@cdk_utils/iam.evidently.EvidentlyConditions.property.CreateProjectConditionKeys"></a>

```typescript
public readonly CreateProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProject action.

---

##### `CreateSegmentConditionKeys`<sup>Required</sup> <a name="CreateSegmentConditionKeys" id="@cdk_utils/iam.evidently.EvidentlyConditions.property.CreateSegmentConditionKeys"></a>

```typescript
public readonly CreateSegmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSegment action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.evidently.EvidentlyConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.evidently.EvidentlyConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### EvidentlyResources <a name="EvidentlyResources" id="@cdk_utils/iam.evidently.EvidentlyResources"></a>

ARN builders, validators, and parsers for evidently resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.evidently.EvidentlyResources.Initializer"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

new evidently.EvidentlyResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.experiment">experiment</a></code> | Builds an ARN for the Experiment resource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.feature">feature</a></code> | Builds an ARN for the Feature resource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.isValidExperimentArn">isValidExperimentArn</a></code> | Validates whether a string is a valid ARN for the Experiment resource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.isValidFeatureArn">isValidFeatureArn</a></code> | Validates whether a string is a valid ARN for the Feature resource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.isValidLaunchArn">isValidLaunchArn</a></code> | Validates whether a string is a valid ARN for the Launch resource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the Project resource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.isValidSegmentArn">isValidSegmentArn</a></code> | Validates whether a string is a valid ARN for the Segment resource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.launch">launch</a></code> | Builds an ARN for the Launch resource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.parseExperimentArn">parseExperimentArn</a></code> | Parses a Experiment ARN into its components. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.parseFeatureArn">parseFeatureArn</a></code> | Parses a Feature ARN into its components. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.parseLaunchArn">parseLaunchArn</a></code> | Parses a Launch ARN into its components. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.parseProjectArn">parseProjectArn</a></code> | Parses a Project ARN into its components. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.parseSegmentArn">parseSegmentArn</a></code> | Parses a Segment ARN into its components. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.project">project</a></code> | Builds an ARN for the Project resource. |
| <code><a href="#@cdk_utils/iam.evidently.EvidentlyResources.segment">segment</a></code> | Builds an ARN for the Segment resource. |

---

##### `experiment` <a name="experiment" id="@cdk_utils/iam.evidently.EvidentlyResources.experiment"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.experiment(props: EvidentlyExperimentArnProps)
```

Builds an ARN for the Experiment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.evidently.EvidentlyResources.experiment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.evidently.EvidentlyExperimentArnProps">EvidentlyExperimentArnProps</a>

---

##### `feature` <a name="feature" id="@cdk_utils/iam.evidently.EvidentlyResources.feature"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.feature(props: EvidentlyFeatureArnProps)
```

Builds an ARN for the Feature resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.evidently.EvidentlyResources.feature.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.evidently.EvidentlyFeatureArnProps">EvidentlyFeatureArnProps</a>

---

##### `isValidExperimentArn` <a name="isValidExperimentArn" id="@cdk_utils/iam.evidently.EvidentlyResources.isValidExperimentArn"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.isValidExperimentArn(arn: string)
```

Validates whether a string is a valid ARN for the Experiment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evidently.EvidentlyResources.isValidExperimentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFeatureArn` <a name="isValidFeatureArn" id="@cdk_utils/iam.evidently.EvidentlyResources.isValidFeatureArn"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.isValidFeatureArn(arn: string)
```

Validates whether a string is a valid ARN for the Feature resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evidently.EvidentlyResources.isValidFeatureArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLaunchArn` <a name="isValidLaunchArn" id="@cdk_utils/iam.evidently.EvidentlyResources.isValidLaunchArn"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.isValidLaunchArn(arn: string)
```

Validates whether a string is a valid ARN for the Launch resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evidently.EvidentlyResources.isValidLaunchArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.evidently.EvidentlyResources.isValidProjectArn"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the Project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evidently.EvidentlyResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSegmentArn` <a name="isValidSegmentArn" id="@cdk_utils/iam.evidently.EvidentlyResources.isValidSegmentArn"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.isValidSegmentArn(arn: string)
```

Validates whether a string is a valid ARN for the Segment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evidently.EvidentlyResources.isValidSegmentArn.parameter.arn"></a>

- *Type:* string

---

##### `launch` <a name="launch" id="@cdk_utils/iam.evidently.EvidentlyResources.launch"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.launch(props: EvidentlyLaunchArnProps)
```

Builds an ARN for the Launch resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.evidently.EvidentlyResources.launch.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.evidently.EvidentlyLaunchArnProps">EvidentlyLaunchArnProps</a>

---

##### `parseExperimentArn` <a name="parseExperimentArn" id="@cdk_utils/iam.evidently.EvidentlyResources.parseExperimentArn"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.parseExperimentArn(arn: string)
```

Parses a Experiment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evidently.EvidentlyResources.parseExperimentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFeatureArn` <a name="parseFeatureArn" id="@cdk_utils/iam.evidently.EvidentlyResources.parseFeatureArn"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.parseFeatureArn(arn: string)
```

Parses a Feature ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evidently.EvidentlyResources.parseFeatureArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLaunchArn` <a name="parseLaunchArn" id="@cdk_utils/iam.evidently.EvidentlyResources.parseLaunchArn"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.parseLaunchArn(arn: string)
```

Parses a Launch ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evidently.EvidentlyResources.parseLaunchArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.evidently.EvidentlyResources.parseProjectArn"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.parseProjectArn(arn: string)
```

Parses a Project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evidently.EvidentlyResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSegmentArn` <a name="parseSegmentArn" id="@cdk_utils/iam.evidently.EvidentlyResources.parseSegmentArn"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.parseSegmentArn(arn: string)
```

Parses a Segment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.evidently.EvidentlyResources.parseSegmentArn.parameter.arn"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.evidently.EvidentlyResources.project"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.project(props: EvidentlyProjectArnProps)
```

Builds an ARN for the Project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.evidently.EvidentlyResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.evidently.EvidentlyProjectArnProps">EvidentlyProjectArnProps</a>

---

##### `segment` <a name="segment" id="@cdk_utils/iam.evidently.EvidentlyResources.segment"></a>

```typescript
import { evidently } from '@cdk_utils/iam'

evidently.EvidentlyResources.segment(props: EvidentlySegmentArnProps)
```

Builds an ARN for the Segment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.evidently.EvidentlyResources.segment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.evidently.EvidentlySegmentArnProps">EvidentlySegmentArnProps</a>

---




