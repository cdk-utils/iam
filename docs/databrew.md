# `databrew` Submodule <a name="`databrew` Submodule" id="@cdk_utils/iam.databrew"></a>


## Structs <a name="Structs" id="Structs"></a>

### DatabrewDatasetArnComponents <a name="DatabrewDatasetArnComponents" id="@cdk_utils/iam.databrew.DatabrewDatasetArnComponents"></a>

Parsed components of a Dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewDatasetArnComponents.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewDatasetArnComponents: databrew.DatabrewDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewDatasetArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewDatasetArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DatabrewDatasetArnProps <a name="DatabrewDatasetArnProps" id="@cdk_utils/iam.databrew.DatabrewDatasetArnProps"></a>

Properties for building a Dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewDatasetArnProps.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewDatasetArnProps: databrew.DatabrewDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewDatasetArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewDatasetArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DatabrewJobArnComponents <a name="DatabrewJobArnComponents" id="@cdk_utils/iam.databrew.DatabrewJobArnComponents"></a>

Parsed components of a Job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewJobArnComponents.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewJobArnComponents: databrew.DatabrewJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DatabrewJobArnProps <a name="DatabrewJobArnProps" id="@cdk_utils/iam.databrew.DatabrewJobArnProps"></a>

Properties for building a Job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewJobArnProps.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewJobArnProps: databrew.DatabrewJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DatabrewProjectArnComponents <a name="DatabrewProjectArnComponents" id="@cdk_utils/iam.databrew.DatabrewProjectArnComponents"></a>

Parsed components of a Project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewProjectArnComponents.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewProjectArnComponents: databrew.DatabrewProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewProjectArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewProjectArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DatabrewProjectArnProps <a name="DatabrewProjectArnProps" id="@cdk_utils/iam.databrew.DatabrewProjectArnProps"></a>

Properties for building a Project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewProjectArnProps.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewProjectArnProps: databrew.DatabrewProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewProjectArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewProjectArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DatabrewRecipeArnComponents <a name="DatabrewRecipeArnComponents" id="@cdk_utils/iam.databrew.DatabrewRecipeArnComponents"></a>

Parsed components of a Recipe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewRecipeArnComponents.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewRecipeArnComponents: databrew.DatabrewRecipeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRecipeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRecipeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRecipeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRecipeArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewRecipeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewRecipeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewRecipeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewRecipeArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DatabrewRecipeArnProps <a name="DatabrewRecipeArnProps" id="@cdk_utils/iam.databrew.DatabrewRecipeArnProps"></a>

Properties for building a Recipe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewRecipeArnProps.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewRecipeArnProps: databrew.DatabrewRecipeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRecipeArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRecipeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRecipeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRecipeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewRecipeArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewRecipeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewRecipeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewRecipeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DatabrewRulesetArnComponents <a name="DatabrewRulesetArnComponents" id="@cdk_utils/iam.databrew.DatabrewRulesetArnComponents"></a>

Parsed components of a Ruleset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewRulesetArnComponents.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewRulesetArnComponents: databrew.DatabrewRulesetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRulesetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRulesetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRulesetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRulesetArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewRulesetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewRulesetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewRulesetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewRulesetArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DatabrewRulesetArnProps <a name="DatabrewRulesetArnProps" id="@cdk_utils/iam.databrew.DatabrewRulesetArnProps"></a>

Properties for building a Ruleset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewRulesetArnProps.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewRulesetArnProps: databrew.DatabrewRulesetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRulesetArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRulesetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRulesetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewRulesetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewRulesetArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewRulesetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewRulesetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewRulesetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DatabrewScheduleArnComponents <a name="DatabrewScheduleArnComponents" id="@cdk_utils/iam.databrew.DatabrewScheduleArnComponents"></a>

Parsed components of a Schedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewScheduleArnComponents.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewScheduleArnComponents: databrew.DatabrewScheduleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewScheduleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewScheduleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewScheduleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewScheduleArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewScheduleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewScheduleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewScheduleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewScheduleArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DatabrewScheduleArnProps <a name="DatabrewScheduleArnProps" id="@cdk_utils/iam.databrew.DatabrewScheduleArnProps"></a>

Properties for building a Schedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.databrew.DatabrewScheduleArnProps.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

const databrewScheduleArnProps: databrew.DatabrewScheduleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewScheduleArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewScheduleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewScheduleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewScheduleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.databrew.DatabrewScheduleArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.databrew.DatabrewScheduleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.databrew.DatabrewScheduleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.databrew.DatabrewScheduleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DatabrewActions <a name="DatabrewActions" id="@cdk_utils/iam.databrew.DatabrewActions"></a>

IAM action constants for the databrew service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.databrew.DatabrewActions.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

new databrew.DatabrewActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.BatchDeleteRecipeVersion">BatchDeleteRecipeVersion</a></code> | <code>string</code> | [Write] databrew:BatchDeleteRecipeVersion. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.CreateDataset">CreateDataset</a></code> | <code>string</code> | [Write] databrew:CreateDataset. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.CreateProfileJob">CreateProfileJob</a></code> | <code>string</code> | [Write] databrew:CreateProfileJob. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] databrew:CreateProject. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.CreateRecipe">CreateRecipe</a></code> | <code>string</code> | [Write] databrew:CreateRecipe. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.CreateRecipeJob">CreateRecipeJob</a></code> | <code>string</code> | [Write] databrew:CreateRecipeJob. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.CreateRuleset">CreateRuleset</a></code> | <code>string</code> | [Write] databrew:CreateRuleset. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.CreateSchedule">CreateSchedule</a></code> | <code>string</code> | [Write] databrew:CreateSchedule. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DeleteDataset">DeleteDataset</a></code> | <code>string</code> | [Write] databrew:DeleteDataset. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DeleteJob">DeleteJob</a></code> | <code>string</code> | [Write] databrew:DeleteJob. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DeleteProject">DeleteProject</a></code> | <code>string</code> | [Write] databrew:DeleteProject. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DeleteRecipeVersion">DeleteRecipeVersion</a></code> | <code>string</code> | [Write] databrew:DeleteRecipeVersion. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DeleteRuleset">DeleteRuleset</a></code> | <code>string</code> | [Write] databrew:DeleteRuleset. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DeleteSchedule">DeleteSchedule</a></code> | <code>string</code> | [Write] databrew:DeleteSchedule. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DescribeDataset">DescribeDataset</a></code> | <code>string</code> | [Read] databrew:DescribeDataset. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DescribeJob">DescribeJob</a></code> | <code>string</code> | [Read] databrew:DescribeJob. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DescribeJobRun">DescribeJobRun</a></code> | <code>string</code> | [Read] databrew:DescribeJobRun. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DescribeProject">DescribeProject</a></code> | <code>string</code> | [Read] databrew:DescribeProject. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DescribeRecipe">DescribeRecipe</a></code> | <code>string</code> | [Read] databrew:DescribeRecipe. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DescribeRuleset">DescribeRuleset</a></code> | <code>string</code> | [Read] databrew:DescribeRuleset. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.DescribeSchedule">DescribeSchedule</a></code> | <code>string</code> | [Read] databrew:DescribeSchedule. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.ListDatasets">ListDatasets</a></code> | <code>string</code> | [Read] databrew:ListDatasets. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.ListJobRuns">ListJobRuns</a></code> | <code>string</code> | [Read] databrew:ListJobRuns. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [Read] databrew:ListJobs. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [Read] databrew:ListProjects. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.ListRecipes">ListRecipes</a></code> | <code>string</code> | [Read] databrew:ListRecipes. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.ListRecipeVersions">ListRecipeVersions</a></code> | <code>string</code> | [Read] databrew:ListRecipeVersions. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.ListRulesets">ListRulesets</a></code> | <code>string</code> | [Read] databrew:ListRulesets. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.ListSchedules">ListSchedules</a></code> | <code>string</code> | [Read] databrew:ListSchedules. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] databrew:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.PublishRecipe">PublishRecipe</a></code> | <code>string</code> | [Write] databrew:PublishRecipe. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.SendProjectSessionAction">SendProjectSessionAction</a></code> | <code>string</code> | [Write] databrew:SendProjectSessionAction. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.StartJobRun">StartJobRun</a></code> | <code>string</code> | [Write] databrew:StartJobRun. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.StartProjectSession">StartProjectSession</a></code> | <code>string</code> | [Write] databrew:StartProjectSession. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.StopJobRun">StopJobRun</a></code> | <code>string</code> | [Write] databrew:StopJobRun. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] databrew:TagResource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] databrew:UntagResource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.UpdateDataset">UpdateDataset</a></code> | <code>string</code> | [Write] databrew:UpdateDataset. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.UpdateProfileJob">UpdateProfileJob</a></code> | <code>string</code> | [Write] databrew:UpdateProfileJob. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.UpdateProject">UpdateProject</a></code> | <code>string</code> | [Write] databrew:UpdateProject. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.UpdateRecipe">UpdateRecipe</a></code> | <code>string</code> | [Write] databrew:UpdateRecipe. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.UpdateRecipeJob">UpdateRecipeJob</a></code> | <code>string</code> | [Write] databrew:UpdateRecipeJob. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.UpdateRuleset">UpdateRuleset</a></code> | <code>string</code> | [Write] databrew:UpdateRuleset. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewActions.property.UpdateSchedule">UpdateSchedule</a></code> | <code>string</code> | [Write] databrew:UpdateSchedule. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.databrew.DatabrewActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.databrew.DatabrewActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.databrew.DatabrewActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.databrew.DatabrewActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.databrew.DatabrewActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDeleteRecipeVersion`<sup>Required</sup> <a name="BatchDeleteRecipeVersion" id="@cdk_utils/iam.databrew.DatabrewActions.property.BatchDeleteRecipeVersion"></a>

```typescript
public readonly BatchDeleteRecipeVersion: string;
```

- *Type:* string

[Write] databrew:BatchDeleteRecipeVersion.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.databrew.DatabrewActions.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string;
```

- *Type:* string

[Write] databrew:CreateDataset.

---

##### `CreateProfileJob`<sup>Required</sup> <a name="CreateProfileJob" id="@cdk_utils/iam.databrew.DatabrewActions.property.CreateProfileJob"></a>

```typescript
public readonly CreateProfileJob: string;
```

- *Type:* string

[Write] databrew:CreateProfileJob.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.databrew.DatabrewActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] databrew:CreateProject.

---

##### `CreateRecipe`<sup>Required</sup> <a name="CreateRecipe" id="@cdk_utils/iam.databrew.DatabrewActions.property.CreateRecipe"></a>

```typescript
public readonly CreateRecipe: string;
```

- *Type:* string

[Write] databrew:CreateRecipe.

---

##### `CreateRecipeJob`<sup>Required</sup> <a name="CreateRecipeJob" id="@cdk_utils/iam.databrew.DatabrewActions.property.CreateRecipeJob"></a>

```typescript
public readonly CreateRecipeJob: string;
```

- *Type:* string

[Write] databrew:CreateRecipeJob.

---

##### `CreateRuleset`<sup>Required</sup> <a name="CreateRuleset" id="@cdk_utils/iam.databrew.DatabrewActions.property.CreateRuleset"></a>

```typescript
public readonly CreateRuleset: string;
```

- *Type:* string

[Write] databrew:CreateRuleset.

---

##### `CreateSchedule`<sup>Required</sup> <a name="CreateSchedule" id="@cdk_utils/iam.databrew.DatabrewActions.property.CreateSchedule"></a>

```typescript
public readonly CreateSchedule: string;
```

- *Type:* string

[Write] databrew:CreateSchedule.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.databrew.DatabrewActions.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string;
```

- *Type:* string

[Write] databrew:DeleteDataset.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.databrew.DatabrewActions.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string;
```

- *Type:* string

[Write] databrew:DeleteJob.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.databrew.DatabrewActions.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string;
```

- *Type:* string

[Write] databrew:DeleteProject.

---

##### `DeleteRecipeVersion`<sup>Required</sup> <a name="DeleteRecipeVersion" id="@cdk_utils/iam.databrew.DatabrewActions.property.DeleteRecipeVersion"></a>

```typescript
public readonly DeleteRecipeVersion: string;
```

- *Type:* string

[Write] databrew:DeleteRecipeVersion.

---

##### `DeleteRuleset`<sup>Required</sup> <a name="DeleteRuleset" id="@cdk_utils/iam.databrew.DatabrewActions.property.DeleteRuleset"></a>

```typescript
public readonly DeleteRuleset: string;
```

- *Type:* string

[Write] databrew:DeleteRuleset.

---

##### `DeleteSchedule`<sup>Required</sup> <a name="DeleteSchedule" id="@cdk_utils/iam.databrew.DatabrewActions.property.DeleteSchedule"></a>

```typescript
public readonly DeleteSchedule: string;
```

- *Type:* string

[Write] databrew:DeleteSchedule.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.databrew.DatabrewActions.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string;
```

- *Type:* string

[Read] databrew:DescribeDataset.

---

##### `DescribeJob`<sup>Required</sup> <a name="DescribeJob" id="@cdk_utils/iam.databrew.DatabrewActions.property.DescribeJob"></a>

```typescript
public readonly DescribeJob: string;
```

- *Type:* string

[Read] databrew:DescribeJob.

---

##### `DescribeJobRun`<sup>Required</sup> <a name="DescribeJobRun" id="@cdk_utils/iam.databrew.DatabrewActions.property.DescribeJobRun"></a>

```typescript
public readonly DescribeJobRun: string;
```

- *Type:* string

[Read] databrew:DescribeJobRun.

---

##### `DescribeProject`<sup>Required</sup> <a name="DescribeProject" id="@cdk_utils/iam.databrew.DatabrewActions.property.DescribeProject"></a>

```typescript
public readonly DescribeProject: string;
```

- *Type:* string

[Read] databrew:DescribeProject.

---

##### `DescribeRecipe`<sup>Required</sup> <a name="DescribeRecipe" id="@cdk_utils/iam.databrew.DatabrewActions.property.DescribeRecipe"></a>

```typescript
public readonly DescribeRecipe: string;
```

- *Type:* string

[Read] databrew:DescribeRecipe.

---

##### `DescribeRuleset`<sup>Required</sup> <a name="DescribeRuleset" id="@cdk_utils/iam.databrew.DatabrewActions.property.DescribeRuleset"></a>

```typescript
public readonly DescribeRuleset: string;
```

- *Type:* string

[Read] databrew:DescribeRuleset.

---

##### `DescribeSchedule`<sup>Required</sup> <a name="DescribeSchedule" id="@cdk_utils/iam.databrew.DatabrewActions.property.DescribeSchedule"></a>

```typescript
public readonly DescribeSchedule: string;
```

- *Type:* string

[Read] databrew:DescribeSchedule.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.databrew.DatabrewActions.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string;
```

- *Type:* string

[Read] databrew:ListDatasets.

---

##### `ListJobRuns`<sup>Required</sup> <a name="ListJobRuns" id="@cdk_utils/iam.databrew.DatabrewActions.property.ListJobRuns"></a>

```typescript
public readonly ListJobRuns: string;
```

- *Type:* string

[Read] databrew:ListJobRuns.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.databrew.DatabrewActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[Read] databrew:ListJobs.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.databrew.DatabrewActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[Read] databrew:ListProjects.

---

##### `ListRecipes`<sup>Required</sup> <a name="ListRecipes" id="@cdk_utils/iam.databrew.DatabrewActions.property.ListRecipes"></a>

```typescript
public readonly ListRecipes: string;
```

- *Type:* string

[Read] databrew:ListRecipes.

---

##### `ListRecipeVersions`<sup>Required</sup> <a name="ListRecipeVersions" id="@cdk_utils/iam.databrew.DatabrewActions.property.ListRecipeVersions"></a>

```typescript
public readonly ListRecipeVersions: string;
```

- *Type:* string

[Read] databrew:ListRecipeVersions.

---

##### `ListRulesets`<sup>Required</sup> <a name="ListRulesets" id="@cdk_utils/iam.databrew.DatabrewActions.property.ListRulesets"></a>

```typescript
public readonly ListRulesets: string;
```

- *Type:* string

[Read] databrew:ListRulesets.

---

##### `ListSchedules`<sup>Required</sup> <a name="ListSchedules" id="@cdk_utils/iam.databrew.DatabrewActions.property.ListSchedules"></a>

```typescript
public readonly ListSchedules: string;
```

- *Type:* string

[Read] databrew:ListSchedules.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.databrew.DatabrewActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] databrew:ListTagsForResource.

---

##### `PublishRecipe`<sup>Required</sup> <a name="PublishRecipe" id="@cdk_utils/iam.databrew.DatabrewActions.property.PublishRecipe"></a>

```typescript
public readonly PublishRecipe: string;
```

- *Type:* string

[Write] databrew:PublishRecipe.

---

##### `SendProjectSessionAction`<sup>Required</sup> <a name="SendProjectSessionAction" id="@cdk_utils/iam.databrew.DatabrewActions.property.SendProjectSessionAction"></a>

```typescript
public readonly SendProjectSessionAction: string;
```

- *Type:* string

[Write] databrew:SendProjectSessionAction.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.databrew.DatabrewActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartJobRun`<sup>Required</sup> <a name="StartJobRun" id="@cdk_utils/iam.databrew.DatabrewActions.property.StartJobRun"></a>

```typescript
public readonly StartJobRun: string;
```

- *Type:* string

[Write] databrew:StartJobRun.

---

##### `StartProjectSession`<sup>Required</sup> <a name="StartProjectSession" id="@cdk_utils/iam.databrew.DatabrewActions.property.StartProjectSession"></a>

```typescript
public readonly StartProjectSession: string;
```

- *Type:* string

[Write] databrew:StartProjectSession.

---

##### `StopJobRun`<sup>Required</sup> <a name="StopJobRun" id="@cdk_utils/iam.databrew.DatabrewActions.property.StopJobRun"></a>

```typescript
public readonly StopJobRun: string;
```

- *Type:* string

[Write] databrew:StopJobRun.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.databrew.DatabrewActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] databrew:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.databrew.DatabrewActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] databrew:UntagResource.

---

##### `UpdateDataset`<sup>Required</sup> <a name="UpdateDataset" id="@cdk_utils/iam.databrew.DatabrewActions.property.UpdateDataset"></a>

```typescript
public readonly UpdateDataset: string;
```

- *Type:* string

[Write] databrew:UpdateDataset.

---

##### `UpdateProfileJob`<sup>Required</sup> <a name="UpdateProfileJob" id="@cdk_utils/iam.databrew.DatabrewActions.property.UpdateProfileJob"></a>

```typescript
public readonly UpdateProfileJob: string;
```

- *Type:* string

[Write] databrew:UpdateProfileJob.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.databrew.DatabrewActions.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string;
```

- *Type:* string

[Write] databrew:UpdateProject.

---

##### `UpdateRecipe`<sup>Required</sup> <a name="UpdateRecipe" id="@cdk_utils/iam.databrew.DatabrewActions.property.UpdateRecipe"></a>

```typescript
public readonly UpdateRecipe: string;
```

- *Type:* string

[Write] databrew:UpdateRecipe.

---

##### `UpdateRecipeJob`<sup>Required</sup> <a name="UpdateRecipeJob" id="@cdk_utils/iam.databrew.DatabrewActions.property.UpdateRecipeJob"></a>

```typescript
public readonly UpdateRecipeJob: string;
```

- *Type:* string

[Write] databrew:UpdateRecipeJob.

---

##### `UpdateRuleset`<sup>Required</sup> <a name="UpdateRuleset" id="@cdk_utils/iam.databrew.DatabrewActions.property.UpdateRuleset"></a>

```typescript
public readonly UpdateRuleset: string;
```

- *Type:* string

[Write] databrew:UpdateRuleset.

---

##### `UpdateSchedule`<sup>Required</sup> <a name="UpdateSchedule" id="@cdk_utils/iam.databrew.DatabrewActions.property.UpdateSchedule"></a>

```typescript
public readonly UpdateSchedule: string;
```

- *Type:* string

[Write] databrew:UpdateSchedule.

---

### DatabrewConditions <a name="DatabrewConditions" id="@cdk_utils/iam.databrew.DatabrewConditions"></a>

Condition key constants and builders for databrew.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.databrew.DatabrewConditions.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

new databrew.DatabrewConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.databrew.DatabrewConditions.requestTag"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.databrew.DatabrewConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.databrew.DatabrewConditions.resourceTag"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.databrew.DatabrewConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.databrew.DatabrewConditions.tagKeys"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.databrew.DatabrewConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.CreateDatasetConditionKeys">CreateDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataset action. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.CreateProfileJobConditionKeys">CreateProfileJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProfileJob action. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.CreateProjectConditionKeys">CreateProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProject action. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.CreateRecipeConditionKeys">CreateRecipeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRecipe action. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.CreateRecipeJobConditionKeys">CreateRecipeJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRecipeJob action. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.CreateRulesetConditionKeys">CreateRulesetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRuleset action. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.CreateScheduleConditionKeys">CreateScheduleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSchedule action. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.databrew.DatabrewConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.databrew.DatabrewConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.databrew.DatabrewConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDatasetConditionKeys`<sup>Required</sup> <a name="CreateDatasetConditionKeys" id="@cdk_utils/iam.databrew.DatabrewConditions.property.CreateDatasetConditionKeys"></a>

```typescript
public readonly CreateDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataset action.

---

##### `CreateProfileJobConditionKeys`<sup>Required</sup> <a name="CreateProfileJobConditionKeys" id="@cdk_utils/iam.databrew.DatabrewConditions.property.CreateProfileJobConditionKeys"></a>

```typescript
public readonly CreateProfileJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProfileJob action.

---

##### `CreateProjectConditionKeys`<sup>Required</sup> <a name="CreateProjectConditionKeys" id="@cdk_utils/iam.databrew.DatabrewConditions.property.CreateProjectConditionKeys"></a>

```typescript
public readonly CreateProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProject action.

---

##### `CreateRecipeConditionKeys`<sup>Required</sup> <a name="CreateRecipeConditionKeys" id="@cdk_utils/iam.databrew.DatabrewConditions.property.CreateRecipeConditionKeys"></a>

```typescript
public readonly CreateRecipeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRecipe action.

---

##### `CreateRecipeJobConditionKeys`<sup>Required</sup> <a name="CreateRecipeJobConditionKeys" id="@cdk_utils/iam.databrew.DatabrewConditions.property.CreateRecipeJobConditionKeys"></a>

```typescript
public readonly CreateRecipeJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRecipeJob action.

---

##### `CreateRulesetConditionKeys`<sup>Required</sup> <a name="CreateRulesetConditionKeys" id="@cdk_utils/iam.databrew.DatabrewConditions.property.CreateRulesetConditionKeys"></a>

```typescript
public readonly CreateRulesetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRuleset action.

---

##### `CreateScheduleConditionKeys`<sup>Required</sup> <a name="CreateScheduleConditionKeys" id="@cdk_utils/iam.databrew.DatabrewConditions.property.CreateScheduleConditionKeys"></a>

```typescript
public readonly CreateScheduleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSchedule action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.databrew.DatabrewConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.databrew.DatabrewConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### DatabrewOperations <a name="DatabrewOperations" id="@cdk_utils/iam.databrew.DatabrewOperations"></a>

API operation to required IAM actions mapping for databrew.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.databrew.DatabrewOperations.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

new databrew.DatabrewOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.BatchDeleteRecipeVersion">BatchDeleteRecipeVersion</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteRecipeVersion API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.CreateDataset">CreateDataset</a></code> | <code>string[]</code> | IAM actions required for the CreateDataset API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.CreateProfileJob">CreateProfileJob</a></code> | <code>string[]</code> | IAM actions required for the CreateProfileJob API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.CreateProject">CreateProject</a></code> | <code>string[]</code> | IAM actions required for the CreateProject API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.CreateRecipe">CreateRecipe</a></code> | <code>string[]</code> | IAM actions required for the CreateRecipe API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.CreateRecipeJob">CreateRecipeJob</a></code> | <code>string[]</code> | IAM actions required for the CreateRecipeJob API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.CreateRuleset">CreateRuleset</a></code> | <code>string[]</code> | IAM actions required for the CreateRuleset API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.CreateSchedule">CreateSchedule</a></code> | <code>string[]</code> | IAM actions required for the CreateSchedule API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteDataset">DeleteDataset</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataset API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteJob">DeleteJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteJob API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteProject">DeleteProject</a></code> | <code>string[]</code> | IAM actions required for the DeleteProject API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteRecipeVersion">DeleteRecipeVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecipeVersion API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteRuleset">DeleteRuleset</a></code> | <code>string[]</code> | IAM actions required for the DeleteRuleset API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteSchedule">DeleteSchedule</a></code> | <code>string[]</code> | IAM actions required for the DeleteSchedule API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeDataset">DescribeDataset</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataset API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeJob">DescribeJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeJob API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeJobRun">DescribeJobRun</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobRun API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeProject">DescribeProject</a></code> | <code>string[]</code> | IAM actions required for the DescribeProject API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeRecipe">DescribeRecipe</a></code> | <code>string[]</code> | IAM actions required for the DescribeRecipe API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeRuleset">DescribeRuleset</a></code> | <code>string[]</code> | IAM actions required for the DescribeRuleset API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeSchedule">DescribeSchedule</a></code> | <code>string[]</code> | IAM actions required for the DescribeSchedule API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.ListDatasets">ListDatasets</a></code> | <code>string[]</code> | IAM actions required for the ListDatasets API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.ListJobRuns">ListJobRuns</a></code> | <code>string[]</code> | IAM actions required for the ListJobRuns API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.ListProjects">ListProjects</a></code> | <code>string[]</code> | IAM actions required for the ListProjects API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.ListRecipes">ListRecipes</a></code> | <code>string[]</code> | IAM actions required for the ListRecipes API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.ListRecipeVersions">ListRecipeVersions</a></code> | <code>string[]</code> | IAM actions required for the ListRecipeVersions API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.ListRulesets">ListRulesets</a></code> | <code>string[]</code> | IAM actions required for the ListRulesets API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.ListSchedules">ListSchedules</a></code> | <code>string[]</code> | IAM actions required for the ListSchedules API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.PublishRecipe">PublishRecipe</a></code> | <code>string[]</code> | IAM actions required for the PublishRecipe API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.SendProjectSessionAction">SendProjectSessionAction</a></code> | <code>string[]</code> | IAM actions required for the SendProjectSessionAction API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.StartJobRun">StartJobRun</a></code> | <code>string[]</code> | IAM actions required for the StartJobRun API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.StartProjectSession">StartProjectSession</a></code> | <code>string[]</code> | IAM actions required for the StartProjectSession API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.StopJobRun">StopJobRun</a></code> | <code>string[]</code> | IAM actions required for the StopJobRun API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateDataset">UpdateDataset</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataset API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateProfileJob">UpdateProfileJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateProfileJob API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateProject">UpdateProject</a></code> | <code>string[]</code> | IAM actions required for the UpdateProject API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateRecipe">UpdateRecipe</a></code> | <code>string[]</code> | IAM actions required for the UpdateRecipe API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateRecipeJob">UpdateRecipeJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateRecipeJob API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateRuleset">UpdateRuleset</a></code> | <code>string[]</code> | IAM actions required for the UpdateRuleset API call. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateSchedule">UpdateSchedule</a></code> | <code>string[]</code> | IAM actions required for the UpdateSchedule API call. |

---

##### `BatchDeleteRecipeVersion`<sup>Required</sup> <a name="BatchDeleteRecipeVersion" id="@cdk_utils/iam.databrew.DatabrewOperations.property.BatchDeleteRecipeVersion"></a>

```typescript
public readonly BatchDeleteRecipeVersion: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteRecipeVersion API call.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.databrew.DatabrewOperations.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataset API call.

---

##### `CreateProfileJob`<sup>Required</sup> <a name="CreateProfileJob" id="@cdk_utils/iam.databrew.DatabrewOperations.property.CreateProfileJob"></a>

```typescript
public readonly CreateProfileJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateProfileJob API call.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.databrew.DatabrewOperations.property.CreateProject"></a>

```typescript
public readonly CreateProject: string[];
```

- *Type:* string[]

IAM actions required for the CreateProject API call.

---

##### `CreateRecipe`<sup>Required</sup> <a name="CreateRecipe" id="@cdk_utils/iam.databrew.DatabrewOperations.property.CreateRecipe"></a>

```typescript
public readonly CreateRecipe: string[];
```

- *Type:* string[]

IAM actions required for the CreateRecipe API call.

---

##### `CreateRecipeJob`<sup>Required</sup> <a name="CreateRecipeJob" id="@cdk_utils/iam.databrew.DatabrewOperations.property.CreateRecipeJob"></a>

```typescript
public readonly CreateRecipeJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateRecipeJob API call.

---

##### `CreateRuleset`<sup>Required</sup> <a name="CreateRuleset" id="@cdk_utils/iam.databrew.DatabrewOperations.property.CreateRuleset"></a>

```typescript
public readonly CreateRuleset: string[];
```

- *Type:* string[]

IAM actions required for the CreateRuleset API call.

---

##### `CreateSchedule`<sup>Required</sup> <a name="CreateSchedule" id="@cdk_utils/iam.databrew.DatabrewOperations.property.CreateSchedule"></a>

```typescript
public readonly CreateSchedule: string[];
```

- *Type:* string[]

IAM actions required for the CreateSchedule API call.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataset API call.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJob API call.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProject API call.

---

##### `DeleteRecipeVersion`<sup>Required</sup> <a name="DeleteRecipeVersion" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteRecipeVersion"></a>

```typescript
public readonly DeleteRecipeVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecipeVersion API call.

---

##### `DeleteRuleset`<sup>Required</sup> <a name="DeleteRuleset" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteRuleset"></a>

```typescript
public readonly DeleteRuleset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRuleset API call.

---

##### `DeleteSchedule`<sup>Required</sup> <a name="DeleteSchedule" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DeleteSchedule"></a>

```typescript
public readonly DeleteSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSchedule API call.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataset API call.

---

##### `DescribeJob`<sup>Required</sup> <a name="DescribeJob" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeJob"></a>

```typescript
public readonly DescribeJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJob API call.

---

##### `DescribeJobRun`<sup>Required</sup> <a name="DescribeJobRun" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeJobRun"></a>

```typescript
public readonly DescribeJobRun: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobRun API call.

---

##### `DescribeProject`<sup>Required</sup> <a name="DescribeProject" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeProject"></a>

```typescript
public readonly DescribeProject: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProject API call.

---

##### `DescribeRecipe`<sup>Required</sup> <a name="DescribeRecipe" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeRecipe"></a>

```typescript
public readonly DescribeRecipe: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRecipe API call.

---

##### `DescribeRuleset`<sup>Required</sup> <a name="DescribeRuleset" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeRuleset"></a>

```typescript
public readonly DescribeRuleset: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRuleset API call.

---

##### `DescribeSchedule`<sup>Required</sup> <a name="DescribeSchedule" id="@cdk_utils/iam.databrew.DatabrewOperations.property.DescribeSchedule"></a>

```typescript
public readonly DescribeSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSchedule API call.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.databrew.DatabrewOperations.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasets API call.

---

##### `ListJobRuns`<sup>Required</sup> <a name="ListJobRuns" id="@cdk_utils/iam.databrew.DatabrewOperations.property.ListJobRuns"></a>

```typescript
public readonly ListJobRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListJobRuns API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.databrew.DatabrewOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.databrew.DatabrewOperations.property.ListProjects"></a>

```typescript
public readonly ListProjects: string[];
```

- *Type:* string[]

IAM actions required for the ListProjects API call.

---

##### `ListRecipes`<sup>Required</sup> <a name="ListRecipes" id="@cdk_utils/iam.databrew.DatabrewOperations.property.ListRecipes"></a>

```typescript
public readonly ListRecipes: string[];
```

- *Type:* string[]

IAM actions required for the ListRecipes API call.

---

##### `ListRecipeVersions`<sup>Required</sup> <a name="ListRecipeVersions" id="@cdk_utils/iam.databrew.DatabrewOperations.property.ListRecipeVersions"></a>

```typescript
public readonly ListRecipeVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListRecipeVersions API call.

---

##### `ListRulesets`<sup>Required</sup> <a name="ListRulesets" id="@cdk_utils/iam.databrew.DatabrewOperations.property.ListRulesets"></a>

```typescript
public readonly ListRulesets: string[];
```

- *Type:* string[]

IAM actions required for the ListRulesets API call.

---

##### `ListSchedules`<sup>Required</sup> <a name="ListSchedules" id="@cdk_utils/iam.databrew.DatabrewOperations.property.ListSchedules"></a>

```typescript
public readonly ListSchedules: string[];
```

- *Type:* string[]

IAM actions required for the ListSchedules API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.databrew.DatabrewOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `PublishRecipe`<sup>Required</sup> <a name="PublishRecipe" id="@cdk_utils/iam.databrew.DatabrewOperations.property.PublishRecipe"></a>

```typescript
public readonly PublishRecipe: string[];
```

- *Type:* string[]

IAM actions required for the PublishRecipe API call.

---

##### `SendProjectSessionAction`<sup>Required</sup> <a name="SendProjectSessionAction" id="@cdk_utils/iam.databrew.DatabrewOperations.property.SendProjectSessionAction"></a>

```typescript
public readonly SendProjectSessionAction: string[];
```

- *Type:* string[]

IAM actions required for the SendProjectSessionAction API call.

---

##### `StartJobRun`<sup>Required</sup> <a name="StartJobRun" id="@cdk_utils/iam.databrew.DatabrewOperations.property.StartJobRun"></a>

```typescript
public readonly StartJobRun: string[];
```

- *Type:* string[]

IAM actions required for the StartJobRun API call.

---

##### `StartProjectSession`<sup>Required</sup> <a name="StartProjectSession" id="@cdk_utils/iam.databrew.DatabrewOperations.property.StartProjectSession"></a>

```typescript
public readonly StartProjectSession: string[];
```

- *Type:* string[]

IAM actions required for the StartProjectSession API call.

---

##### `StopJobRun`<sup>Required</sup> <a name="StopJobRun" id="@cdk_utils/iam.databrew.DatabrewOperations.property.StopJobRun"></a>

```typescript
public readonly StopJobRun: string[];
```

- *Type:* string[]

IAM actions required for the StopJobRun API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.databrew.DatabrewOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.databrew.DatabrewOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDataset`<sup>Required</sup> <a name="UpdateDataset" id="@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateDataset"></a>

```typescript
public readonly UpdateDataset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataset API call.

---

##### `UpdateProfileJob`<sup>Required</sup> <a name="UpdateProfileJob" id="@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateProfileJob"></a>

```typescript
public readonly UpdateProfileJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProfileJob API call.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProject API call.

---

##### `UpdateRecipe`<sup>Required</sup> <a name="UpdateRecipe" id="@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateRecipe"></a>

```typescript
public readonly UpdateRecipe: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRecipe API call.

---

##### `UpdateRecipeJob`<sup>Required</sup> <a name="UpdateRecipeJob" id="@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateRecipeJob"></a>

```typescript
public readonly UpdateRecipeJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRecipeJob API call.

---

##### `UpdateRuleset`<sup>Required</sup> <a name="UpdateRuleset" id="@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateRuleset"></a>

```typescript
public readonly UpdateRuleset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRuleset API call.

---

##### `UpdateSchedule`<sup>Required</sup> <a name="UpdateSchedule" id="@cdk_utils/iam.databrew.DatabrewOperations.property.UpdateSchedule"></a>

```typescript
public readonly UpdateSchedule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSchedule API call.

---

### DatabrewResources <a name="DatabrewResources" id="@cdk_utils/iam.databrew.DatabrewResources"></a>

ARN builders, validators, and parsers for databrew resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.databrew.DatabrewResources.Initializer"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

new databrew.DatabrewResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.dataset">dataset</a></code> | Builds an ARN for the Dataset resource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the Dataset resource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.isValidJobArn">isValidJobArn</a></code> | Validates whether a string is a valid ARN for the Job resource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the Project resource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.isValidRecipeArn">isValidRecipeArn</a></code> | Validates whether a string is a valid ARN for the Recipe resource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.isValidRulesetArn">isValidRulesetArn</a></code> | Validates whether a string is a valid ARN for the Ruleset resource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.isValidScheduleArn">isValidScheduleArn</a></code> | Validates whether a string is a valid ARN for the Schedule resource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.job">job</a></code> | Builds an ARN for the Job resource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a Dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.parseJobArn">parseJobArn</a></code> | Parses a Job ARN into its components. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.parseProjectArn">parseProjectArn</a></code> | Parses a Project ARN into its components. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.parseRecipeArn">parseRecipeArn</a></code> | Parses a Recipe ARN into its components. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.parseRulesetArn">parseRulesetArn</a></code> | Parses a Ruleset ARN into its components. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.parseScheduleArn">parseScheduleArn</a></code> | Parses a Schedule ARN into its components. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.project">project</a></code> | Builds an ARN for the Project resource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.recipe">recipe</a></code> | Builds an ARN for the Recipe resource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.ruleset">ruleset</a></code> | Builds an ARN for the Ruleset resource. |
| <code><a href="#@cdk_utils/iam.databrew.DatabrewResources.schedule">schedule</a></code> | Builds an ARN for the Schedule resource. |

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.databrew.DatabrewResources.dataset"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.dataset(props: DatabrewDatasetArnProps)
```

Builds an ARN for the Dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.databrew.DatabrewResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.databrew.DatabrewDatasetArnProps">DatabrewDatasetArnProps</a>

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidDatasetArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the Dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobArn` <a name="isValidJobArn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidJobArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.isValidJobArn(arn: string)
```

Validates whether a string is a valid ARN for the Job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidProjectArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the Project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecipeArn` <a name="isValidRecipeArn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidRecipeArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.isValidRecipeArn(arn: string)
```

Validates whether a string is a valid ARN for the Recipe resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidRecipeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRulesetArn` <a name="isValidRulesetArn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidRulesetArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.isValidRulesetArn(arn: string)
```

Validates whether a string is a valid ARN for the Ruleset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidRulesetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScheduleArn` <a name="isValidScheduleArn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidScheduleArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.isValidScheduleArn(arn: string)
```

Validates whether a string is a valid ARN for the Schedule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.isValidScheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `job` <a name="job" id="@cdk_utils/iam.databrew.DatabrewResources.job"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.job(props: DatabrewJobArnProps)
```

Builds an ARN for the Job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.databrew.DatabrewResources.job.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.databrew.DatabrewJobArnProps">DatabrewJobArnProps</a>

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.databrew.DatabrewResources.parseDatasetArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.parseDatasetArn(arn: string)
```

Parses a Dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobArn` <a name="parseJobArn" id="@cdk_utils/iam.databrew.DatabrewResources.parseJobArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.parseJobArn(arn: string)
```

Parses a Job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.parseJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.databrew.DatabrewResources.parseProjectArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.parseProjectArn(arn: string)
```

Parses a Project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecipeArn` <a name="parseRecipeArn" id="@cdk_utils/iam.databrew.DatabrewResources.parseRecipeArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.parseRecipeArn(arn: string)
```

Parses a Recipe ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.parseRecipeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRulesetArn` <a name="parseRulesetArn" id="@cdk_utils/iam.databrew.DatabrewResources.parseRulesetArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.parseRulesetArn(arn: string)
```

Parses a Ruleset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.parseRulesetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScheduleArn` <a name="parseScheduleArn" id="@cdk_utils/iam.databrew.DatabrewResources.parseScheduleArn"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.parseScheduleArn(arn: string)
```

Parses a Schedule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.databrew.DatabrewResources.parseScheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.databrew.DatabrewResources.project"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.project(props: DatabrewProjectArnProps)
```

Builds an ARN for the Project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.databrew.DatabrewResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.databrew.DatabrewProjectArnProps">DatabrewProjectArnProps</a>

---

##### `recipe` <a name="recipe" id="@cdk_utils/iam.databrew.DatabrewResources.recipe"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.recipe(props: DatabrewRecipeArnProps)
```

Builds an ARN for the Recipe resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.databrew.DatabrewResources.recipe.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.databrew.DatabrewRecipeArnProps">DatabrewRecipeArnProps</a>

---

##### `ruleset` <a name="ruleset" id="@cdk_utils/iam.databrew.DatabrewResources.ruleset"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.ruleset(props: DatabrewRulesetArnProps)
```

Builds an ARN for the Ruleset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.databrew.DatabrewResources.ruleset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.databrew.DatabrewRulesetArnProps">DatabrewRulesetArnProps</a>

---

##### `schedule` <a name="schedule" id="@cdk_utils/iam.databrew.DatabrewResources.schedule"></a>

```typescript
import { databrew } from '@cdk_utils/iam'

databrew.DatabrewResources.schedule(props: DatabrewScheduleArnProps)
```

Builds an ARN for the Schedule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.databrew.DatabrewResources.schedule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.databrew.DatabrewScheduleArnProps">DatabrewScheduleArnProps</a>

---




