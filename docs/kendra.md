# `kendra` Submodule <a name="`kendra` Submodule" id="@cdk_utils/iam.kendra"></a>


## Structs <a name="Structs" id="Structs"></a>

### KendraAccessControlConfigurationArnComponents <a name="KendraAccessControlConfigurationArnComponents" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents"></a>

Parsed components of a access-control-configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraAccessControlConfigurationArnComponents: kendra.KendraAccessControlConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents.property.accessControlConfigurationId">accessControlConfigurationId</a></code> | <code>string</code> | The AccessControlConfigurationId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessControlConfigurationId`<sup>Required</sup> <a name="accessControlConfigurationId" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents.property.accessControlConfigurationId"></a>

```typescript
public readonly accessControlConfigurationId: string;
```

- *Type:* string

The AccessControlConfigurationId component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KendraAccessControlConfigurationArnProps <a name="KendraAccessControlConfigurationArnProps" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps"></a>

Properties for building a access-control-configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraAccessControlConfigurationArnProps: kendra.KendraAccessControlConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps.property.accessControlConfigurationId">accessControlConfigurationId</a></code> | <code>string</code> | The AccessControlConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessControlConfigurationId`<sup>Required</sup> <a name="accessControlConfigurationId" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps.property.accessControlConfigurationId"></a>

```typescript
public readonly accessControlConfigurationId: string;
```

- *Type:* string

The AccessControlConfigurationId component of the ARN.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KendraDataSourceArnComponents <a name="KendraDataSourceArnComponents" id="@cdk_utils/iam.kendra.KendraDataSourceArnComponents"></a>

Parsed components of a data-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraDataSourceArnComponents.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraDataSourceArnComponents: kendra.KendraDataSourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraDataSourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraDataSourceArnComponents.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | The DataSourceId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraDataSourceArnComponents.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraDataSourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraDataSourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraDataSourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdk_utils/iam.kendra.KendraDataSourceArnComponents.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

The DataSourceId component.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraDataSourceArnComponents.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraDataSourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraDataSourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KendraDataSourceArnProps <a name="KendraDataSourceArnProps" id="@cdk_utils/iam.kendra.KendraDataSourceArnProps"></a>

Properties for building a data-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraDataSourceArnProps.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraDataSourceArnProps: kendra.KendraDataSourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraDataSourceArnProps.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | The DataSourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraDataSourceArnProps.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraDataSourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraDataSourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraDataSourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdk_utils/iam.kendra.KendraDataSourceArnProps.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

The DataSourceId component of the ARN.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraDataSourceArnProps.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraDataSourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraDataSourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraDataSourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KendraExperienceArnComponents <a name="KendraExperienceArnComponents" id="@cdk_utils/iam.kendra.KendraExperienceArnComponents"></a>

Parsed components of a experience ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraExperienceArnComponents.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraExperienceArnComponents: kendra.KendraExperienceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraExperienceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraExperienceArnComponents.property.experienceId">experienceId</a></code> | <code>string</code> | The ExperienceId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraExperienceArnComponents.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraExperienceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraExperienceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraExperienceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `experienceId`<sup>Required</sup> <a name="experienceId" id="@cdk_utils/iam.kendra.KendraExperienceArnComponents.property.experienceId"></a>

```typescript
public readonly experienceId: string;
```

- *Type:* string

The ExperienceId component.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraExperienceArnComponents.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraExperienceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraExperienceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KendraExperienceArnProps <a name="KendraExperienceArnProps" id="@cdk_utils/iam.kendra.KendraExperienceArnProps"></a>

Properties for building a experience ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraExperienceArnProps.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraExperienceArnProps: kendra.KendraExperienceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraExperienceArnProps.property.experienceId">experienceId</a></code> | <code>string</code> | The ExperienceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraExperienceArnProps.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraExperienceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraExperienceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraExperienceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `experienceId`<sup>Required</sup> <a name="experienceId" id="@cdk_utils/iam.kendra.KendraExperienceArnProps.property.experienceId"></a>

```typescript
public readonly experienceId: string;
```

- *Type:* string

The ExperienceId component of the ARN.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraExperienceArnProps.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraExperienceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraExperienceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraExperienceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KendraFaqArnComponents <a name="KendraFaqArnComponents" id="@cdk_utils/iam.kendra.KendraFaqArnComponents"></a>

Parsed components of a faq ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraFaqArnComponents.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraFaqArnComponents: kendra.KendraFaqArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraFaqArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFaqArnComponents.property.faqId">faqId</a></code> | <code>string</code> | The FaqId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFaqArnComponents.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFaqArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFaqArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraFaqArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `faqId`<sup>Required</sup> <a name="faqId" id="@cdk_utils/iam.kendra.KendraFaqArnComponents.property.faqId"></a>

```typescript
public readonly faqId: string;
```

- *Type:* string

The FaqId component.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraFaqArnComponents.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraFaqArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraFaqArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KendraFaqArnProps <a name="KendraFaqArnProps" id="@cdk_utils/iam.kendra.KendraFaqArnProps"></a>

Properties for building a faq ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraFaqArnProps.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraFaqArnProps: kendra.KendraFaqArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraFaqArnProps.property.faqId">faqId</a></code> | <code>string</code> | The FaqId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFaqArnProps.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFaqArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFaqArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFaqArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `faqId`<sup>Required</sup> <a name="faqId" id="@cdk_utils/iam.kendra.KendraFaqArnProps.property.faqId"></a>

```typescript
public readonly faqId: string;
```

- *Type:* string

The FaqId component of the ARN.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraFaqArnProps.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraFaqArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraFaqArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraFaqArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KendraFeaturedResultsSetArnComponents <a name="KendraFeaturedResultsSetArnComponents" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents"></a>

Parsed components of a featured-results-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraFeaturedResultsSetArnComponents: kendra.KendraFeaturedResultsSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents.property.featuredResultsSetId">featuredResultsSetId</a></code> | <code>string</code> | The FeaturedResultsSetId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `featuredResultsSetId`<sup>Required</sup> <a name="featuredResultsSetId" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents.property.featuredResultsSetId"></a>

```typescript
public readonly featuredResultsSetId: string;
```

- *Type:* string

The FeaturedResultsSetId component.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KendraFeaturedResultsSetArnProps <a name="KendraFeaturedResultsSetArnProps" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps"></a>

Properties for building a featured-results-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraFeaturedResultsSetArnProps: kendra.KendraFeaturedResultsSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps.property.featuredResultsSetId">featuredResultsSetId</a></code> | <code>string</code> | The FeaturedResultsSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `featuredResultsSetId`<sup>Required</sup> <a name="featuredResultsSetId" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps.property.featuredResultsSetId"></a>

```typescript
public readonly featuredResultsSetId: string;
```

- *Type:* string

The FeaturedResultsSetId component of the ARN.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KendraIndexArnComponents <a name="KendraIndexArnComponents" id="@cdk_utils/iam.kendra.KendraIndexArnComponents"></a>

Parsed components of a index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraIndexArnComponents.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraIndexArnComponents: kendra.KendraIndexArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraIndexArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraIndexArnComponents.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraIndexArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraIndexArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraIndexArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraIndexArnComponents.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraIndexArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraIndexArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KendraIndexArnProps <a name="KendraIndexArnProps" id="@cdk_utils/iam.kendra.KendraIndexArnProps"></a>

Properties for building a index ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraIndexArnProps.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraIndexArnProps: kendra.KendraIndexArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraIndexArnProps.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraIndexArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraIndexArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraIndexArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraIndexArnProps.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraIndexArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraIndexArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraIndexArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KendraQuerySuggestionsBlockListArnComponents <a name="KendraQuerySuggestionsBlockListArnComponents" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents"></a>

Parsed components of a query-suggestions-block-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraQuerySuggestionsBlockListArnComponents: kendra.KendraQuerySuggestionsBlockListArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents.property.querySuggestionsBlockListId">querySuggestionsBlockListId</a></code> | <code>string</code> | The QuerySuggestionsBlockListId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `querySuggestionsBlockListId`<sup>Required</sup> <a name="querySuggestionsBlockListId" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents.property.querySuggestionsBlockListId"></a>

```typescript
public readonly querySuggestionsBlockListId: string;
```

- *Type:* string

The QuerySuggestionsBlockListId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KendraQuerySuggestionsBlockListArnProps <a name="KendraQuerySuggestionsBlockListArnProps" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps"></a>

Properties for building a query-suggestions-block-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraQuerySuggestionsBlockListArnProps: kendra.KendraQuerySuggestionsBlockListArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps.property.querySuggestionsBlockListId">querySuggestionsBlockListId</a></code> | <code>string</code> | The QuerySuggestionsBlockListId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component of the ARN.

---

##### `querySuggestionsBlockListId`<sup>Required</sup> <a name="querySuggestionsBlockListId" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps.property.querySuggestionsBlockListId"></a>

```typescript
public readonly querySuggestionsBlockListId: string;
```

- *Type:* string

The QuerySuggestionsBlockListId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KendraThesaurusArnComponents <a name="KendraThesaurusArnComponents" id="@cdk_utils/iam.kendra.KendraThesaurusArnComponents"></a>

Parsed components of a thesaurus ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraThesaurusArnComponents.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraThesaurusArnComponents: kendra.KendraThesaurusArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraThesaurusArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraThesaurusArnComponents.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component. |
| <code><a href="#@cdk_utils/iam.kendra.KendraThesaurusArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraThesaurusArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kendra.KendraThesaurusArnComponents.property.thesaurusId">thesaurusId</a></code> | <code>string</code> | The ThesaurusId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraThesaurusArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraThesaurusArnComponents.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraThesaurusArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraThesaurusArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `thesaurusId`<sup>Required</sup> <a name="thesaurusId" id="@cdk_utils/iam.kendra.KendraThesaurusArnComponents.property.thesaurusId"></a>

```typescript
public readonly thesaurusId: string;
```

- *Type:* string

The ThesaurusId component.

---

### KendraThesaurusArnProps <a name="KendraThesaurusArnProps" id="@cdk_utils/iam.kendra.KendraThesaurusArnProps"></a>

Properties for building a thesaurus ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra.KendraThesaurusArnProps.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

const kendraThesaurusArnProps: kendra.KendraThesaurusArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraThesaurusArnProps.property.indexId">indexId</a></code> | <code>string</code> | The IndexId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraThesaurusArnProps.property.thesaurusId">thesaurusId</a></code> | <code>string</code> | The ThesaurusId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra.KendraThesaurusArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra.KendraThesaurusArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra.KendraThesaurusArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdk_utils/iam.kendra.KendraThesaurusArnProps.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The IndexId component of the ARN.

---

##### `thesaurusId`<sup>Required</sup> <a name="thesaurusId" id="@cdk_utils/iam.kendra.KendraThesaurusArnProps.property.thesaurusId"></a>

```typescript
public readonly thesaurusId: string;
```

- *Type:* string

The ThesaurusId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kendra.KendraThesaurusArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kendra.KendraThesaurusArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kendra.KendraThesaurusArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### KendraActions <a name="KendraActions" id="@cdk_utils/iam.kendra.KendraActions"></a>

IAM action constants for the kendra service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kendra.KendraActions.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

new kendra.KendraActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.actionGetQuerySuggestions">actionGetQuerySuggestions</a></code> | <code>string</code> | [Read] kendra:GetQuerySuggestions. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.actionGetSnapshots">actionGetSnapshots</a></code> | <code>string</code> | [Read] kendra:GetSnapshots. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.AssociateEntitiesToExperience">AssociateEntitiesToExperience</a></code> | <code>string</code> | [Write] kendra:AssociateEntitiesToExperience. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.AssociatePersonasToEntities">AssociatePersonasToEntities</a></code> | <code>string</code> | [Write] kendra:AssociatePersonasToEntities. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.BatchDeleteDocument">BatchDeleteDocument</a></code> | <code>string</code> | [Write] kendra:BatchDeleteDocument. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.BatchDeleteFeaturedResultsSet">BatchDeleteFeaturedResultsSet</a></code> | <code>string</code> | [Write] kendra:BatchDeleteFeaturedResultsSet. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.BatchGetDocumentStatus">BatchGetDocumentStatus</a></code> | <code>string</code> | [Read] kendra:BatchGetDocumentStatus. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.BatchPutDocument">BatchPutDocument</a></code> | <code>string</code> | [Write] kendra:BatchPutDocument. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ClearQuerySuggestions">ClearQuerySuggestions</a></code> | <code>string</code> | [Write] kendra:ClearQuerySuggestions. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.CreateAccessControlConfiguration">CreateAccessControlConfiguration</a></code> | <code>string</code> | [Write] kendra:CreateAccessControlConfiguration. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.CreateDataSource">CreateDataSource</a></code> | <code>string</code> | [Write] kendra:CreateDataSource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.CreateExperience">CreateExperience</a></code> | <code>string</code> | [Write] kendra:CreateExperience. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.CreateFaq">CreateFaq</a></code> | <code>string</code> | [Write] kendra:CreateFaq. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.CreateFeaturedResultsSet">CreateFeaturedResultsSet</a></code> | <code>string</code> | [Write] kendra:CreateFeaturedResultsSet. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.CreateIndex">CreateIndex</a></code> | <code>string</code> | [Write] kendra:CreateIndex. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.CreateQuerySuggestionsBlockList">CreateQuerySuggestionsBlockList</a></code> | <code>string</code> | [Write] kendra:CreateQuerySuggestionsBlockList. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.CreateThesaurus">CreateThesaurus</a></code> | <code>string</code> | [Write] kendra:CreateThesaurus. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DeleteAccessControlConfiguration">DeleteAccessControlConfiguration</a></code> | <code>string</code> | [Write] kendra:DeleteAccessControlConfiguration. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string</code> | [Write] kendra:DeleteDataSource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DeleteExperience">DeleteExperience</a></code> | <code>string</code> | [Write] kendra:DeleteExperience. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DeleteFaq">DeleteFaq</a></code> | <code>string</code> | [Write] kendra:DeleteFaq. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DeleteIndex">DeleteIndex</a></code> | <code>string</code> | [Write] kendra:DeleteIndex. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DeletePrincipalMapping">DeletePrincipalMapping</a></code> | <code>string</code> | [Write] kendra:DeletePrincipalMapping. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DeleteQuerySuggestionsBlockList">DeleteQuerySuggestionsBlockList</a></code> | <code>string</code> | [Write] kendra:DeleteQuerySuggestionsBlockList. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DeleteThesaurus">DeleteThesaurus</a></code> | <code>string</code> | [Write] kendra:DeleteThesaurus. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DescribeAccessControlConfiguration">DescribeAccessControlConfiguration</a></code> | <code>string</code> | [Read] kendra:DescribeAccessControlConfiguration. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DescribeDataSource">DescribeDataSource</a></code> | <code>string</code> | [Read] kendra:DescribeDataSource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DescribeExperience">DescribeExperience</a></code> | <code>string</code> | [Read] kendra:DescribeExperience. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DescribeFaq">DescribeFaq</a></code> | <code>string</code> | [Read] kendra:DescribeFaq. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DescribeFeaturedResultsSet">DescribeFeaturedResultsSet</a></code> | <code>string</code> | [Read] kendra:DescribeFeaturedResultsSet. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DescribeIndex">DescribeIndex</a></code> | <code>string</code> | [Read] kendra:DescribeIndex. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DescribePrincipalMapping">DescribePrincipalMapping</a></code> | <code>string</code> | [Read] kendra:DescribePrincipalMapping. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DescribeQuerySuggestionsBlockList">DescribeQuerySuggestionsBlockList</a></code> | <code>string</code> | [Read] kendra:DescribeQuerySuggestionsBlockList. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DescribeQuerySuggestionsConfig">DescribeQuerySuggestionsConfig</a></code> | <code>string</code> | [Read] kendra:DescribeQuerySuggestionsConfig. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DescribeThesaurus">DescribeThesaurus</a></code> | <code>string</code> | [Read] kendra:DescribeThesaurus. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DisassociateEntitiesFromExperience">DisassociateEntitiesFromExperience</a></code> | <code>string</code> | [Write] kendra:DisassociateEntitiesFromExperience. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.DisassociatePersonasFromEntities">DisassociatePersonasFromEntities</a></code> | <code>string</code> | [Write] kendra:DisassociatePersonasFromEntities. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListAccessControlConfigurations">ListAccessControlConfigurations</a></code> | <code>string</code> | [List] kendra:ListAccessControlConfigurations. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListDataSources">ListDataSources</a></code> | <code>string</code> | [List] kendra:ListDataSources. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListDataSourceSyncJobs">ListDataSourceSyncJobs</a></code> | <code>string</code> | [List] kendra:ListDataSourceSyncJobs. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListEntityPersonas">ListEntityPersonas</a></code> | <code>string</code> | [List] kendra:ListEntityPersonas. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListExperienceEntities">ListExperienceEntities</a></code> | <code>string</code> | [List] kendra:ListExperienceEntities. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListExperiences">ListExperiences</a></code> | <code>string</code> | [List] kendra:ListExperiences. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListFaqs">ListFaqs</a></code> | <code>string</code> | [List] kendra:ListFaqs. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListFeaturedResultsSets">ListFeaturedResultsSets</a></code> | <code>string</code> | [List] kendra:ListFeaturedResultsSets. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListGroupsOlderThanOrderingId">ListGroupsOlderThanOrderingId</a></code> | <code>string</code> | [List] kendra:ListGroupsOlderThanOrderingId. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListIndices">ListIndices</a></code> | <code>string</code> | [List] kendra:ListIndices. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListQuerySuggestionsBlockLists">ListQuerySuggestionsBlockLists</a></code> | <code>string</code> | [List] kendra:ListQuerySuggestionsBlockLists. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] kendra:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.ListThesauri">ListThesauri</a></code> | <code>string</code> | [List] kendra:ListThesauri. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.PutPrincipalMapping">PutPrincipalMapping</a></code> | <code>string</code> | [Write] kendra:PutPrincipalMapping. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.Query">Query</a></code> | <code>string</code> | [Read] kendra:Query. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.Retrieve">Retrieve</a></code> | <code>string</code> | [Read] kendra:Retrieve. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.StartDataSourceSyncJob">StartDataSourceSyncJob</a></code> | <code>string</code> | [Write] kendra:StartDataSourceSyncJob. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.StopDataSourceSyncJob">StopDataSourceSyncJob</a></code> | <code>string</code> | [Write] kendra:StopDataSourceSyncJob. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.SubmitFeedback">SubmitFeedback</a></code> | <code>string</code> | [Write] kendra:SubmitFeedback. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] kendra:TagResource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] kendra:UntagResource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.UpdateAccessControlConfiguration">UpdateAccessControlConfiguration</a></code> | <code>string</code> | [Write] kendra:UpdateAccessControlConfiguration. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string</code> | [Write] kendra:UpdateDataSource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.UpdateExperience">UpdateExperience</a></code> | <code>string</code> | [Write] kendra:UpdateExperience. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.UpdateFeaturedResultsSet">UpdateFeaturedResultsSet</a></code> | <code>string</code> | [Write] kendra:UpdateFeaturedResultsSet. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.UpdateIndex">UpdateIndex</a></code> | <code>string</code> | [Write] kendra:UpdateIndex. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.UpdateQuerySuggestionsBlockList">UpdateQuerySuggestionsBlockList</a></code> | <code>string</code> | [Write] kendra:UpdateQuerySuggestionsBlockList. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.UpdateQuerySuggestionsConfig">UpdateQuerySuggestionsConfig</a></code> | <code>string</code> | [Write] kendra:UpdateQuerySuggestionsConfig. |
| <code><a href="#@cdk_utils/iam.kendra.KendraActions.property.UpdateThesaurus">UpdateThesaurus</a></code> | <code>string</code> | [Write] kendra:UpdateThesaurus. |

---

##### `actionGetQuerySuggestions`<sup>Required</sup> <a name="actionGetQuerySuggestions" id="@cdk_utils/iam.kendra.KendraActions.property.actionGetQuerySuggestions"></a>

```typescript
public readonly actionGetQuerySuggestions: string;
```

- *Type:* string

[Read] kendra:GetQuerySuggestions.

---

##### `actionGetSnapshots`<sup>Required</sup> <a name="actionGetSnapshots" id="@cdk_utils/iam.kendra.KendraActions.property.actionGetSnapshots"></a>

```typescript
public readonly actionGetSnapshots: string;
```

- *Type:* string

[Read] kendra:GetSnapshots.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.kendra.KendraActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.kendra.KendraActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.kendra.KendraActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.kendra.KendraActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.kendra.KendraActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateEntitiesToExperience`<sup>Required</sup> <a name="AssociateEntitiesToExperience" id="@cdk_utils/iam.kendra.KendraActions.property.AssociateEntitiesToExperience"></a>

```typescript
public readonly AssociateEntitiesToExperience: string;
```

- *Type:* string

[Write] kendra:AssociateEntitiesToExperience.

---

##### `AssociatePersonasToEntities`<sup>Required</sup> <a name="AssociatePersonasToEntities" id="@cdk_utils/iam.kendra.KendraActions.property.AssociatePersonasToEntities"></a>

```typescript
public readonly AssociatePersonasToEntities: string;
```

- *Type:* string

[Write] kendra:AssociatePersonasToEntities.

---

##### `BatchDeleteDocument`<sup>Required</sup> <a name="BatchDeleteDocument" id="@cdk_utils/iam.kendra.KendraActions.property.BatchDeleteDocument"></a>

```typescript
public readonly BatchDeleteDocument: string;
```

- *Type:* string

[Write] kendra:BatchDeleteDocument.

---

##### `BatchDeleteFeaturedResultsSet`<sup>Required</sup> <a name="BatchDeleteFeaturedResultsSet" id="@cdk_utils/iam.kendra.KendraActions.property.BatchDeleteFeaturedResultsSet"></a>

```typescript
public readonly BatchDeleteFeaturedResultsSet: string;
```

- *Type:* string

[Write] kendra:BatchDeleteFeaturedResultsSet.

---

##### `BatchGetDocumentStatus`<sup>Required</sup> <a name="BatchGetDocumentStatus" id="@cdk_utils/iam.kendra.KendraActions.property.BatchGetDocumentStatus"></a>

```typescript
public readonly BatchGetDocumentStatus: string;
```

- *Type:* string

[Read] kendra:BatchGetDocumentStatus.

---

##### `BatchPutDocument`<sup>Required</sup> <a name="BatchPutDocument" id="@cdk_utils/iam.kendra.KendraActions.property.BatchPutDocument"></a>

```typescript
public readonly BatchPutDocument: string;
```

- *Type:* string

[Write] kendra:BatchPutDocument.

---

##### `ClearQuerySuggestions`<sup>Required</sup> <a name="ClearQuerySuggestions" id="@cdk_utils/iam.kendra.KendraActions.property.ClearQuerySuggestions"></a>

```typescript
public readonly ClearQuerySuggestions: string;
```

- *Type:* string

[Write] kendra:ClearQuerySuggestions.

---

##### `CreateAccessControlConfiguration`<sup>Required</sup> <a name="CreateAccessControlConfiguration" id="@cdk_utils/iam.kendra.KendraActions.property.CreateAccessControlConfiguration"></a>

```typescript
public readonly CreateAccessControlConfiguration: string;
```

- *Type:* string

[Write] kendra:CreateAccessControlConfiguration.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.kendra.KendraActions.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string;
```

- *Type:* string

[Write] kendra:CreateDataSource.

---

##### `CreateExperience`<sup>Required</sup> <a name="CreateExperience" id="@cdk_utils/iam.kendra.KendraActions.property.CreateExperience"></a>

```typescript
public readonly CreateExperience: string;
```

- *Type:* string

[Write] kendra:CreateExperience.

---

##### `CreateFaq`<sup>Required</sup> <a name="CreateFaq" id="@cdk_utils/iam.kendra.KendraActions.property.CreateFaq"></a>

```typescript
public readonly CreateFaq: string;
```

- *Type:* string

[Write] kendra:CreateFaq.

---

##### `CreateFeaturedResultsSet`<sup>Required</sup> <a name="CreateFeaturedResultsSet" id="@cdk_utils/iam.kendra.KendraActions.property.CreateFeaturedResultsSet"></a>

```typescript
public readonly CreateFeaturedResultsSet: string;
```

- *Type:* string

[Write] kendra:CreateFeaturedResultsSet.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.kendra.KendraActions.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string;
```

- *Type:* string

[Write] kendra:CreateIndex.

---

##### `CreateQuerySuggestionsBlockList`<sup>Required</sup> <a name="CreateQuerySuggestionsBlockList" id="@cdk_utils/iam.kendra.KendraActions.property.CreateQuerySuggestionsBlockList"></a>

```typescript
public readonly CreateQuerySuggestionsBlockList: string;
```

- *Type:* string

[Write] kendra:CreateQuerySuggestionsBlockList.

---

##### `CreateThesaurus`<sup>Required</sup> <a name="CreateThesaurus" id="@cdk_utils/iam.kendra.KendraActions.property.CreateThesaurus"></a>

```typescript
public readonly CreateThesaurus: string;
```

- *Type:* string

[Write] kendra:CreateThesaurus.

---

##### `DeleteAccessControlConfiguration`<sup>Required</sup> <a name="DeleteAccessControlConfiguration" id="@cdk_utils/iam.kendra.KendraActions.property.DeleteAccessControlConfiguration"></a>

```typescript
public readonly DeleteAccessControlConfiguration: string;
```

- *Type:* string

[Write] kendra:DeleteAccessControlConfiguration.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.kendra.KendraActions.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string;
```

- *Type:* string

[Write] kendra:DeleteDataSource.

---

##### `DeleteExperience`<sup>Required</sup> <a name="DeleteExperience" id="@cdk_utils/iam.kendra.KendraActions.property.DeleteExperience"></a>

```typescript
public readonly DeleteExperience: string;
```

- *Type:* string

[Write] kendra:DeleteExperience.

---

##### `DeleteFaq`<sup>Required</sup> <a name="DeleteFaq" id="@cdk_utils/iam.kendra.KendraActions.property.DeleteFaq"></a>

```typescript
public readonly DeleteFaq: string;
```

- *Type:* string

[Write] kendra:DeleteFaq.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.kendra.KendraActions.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string;
```

- *Type:* string

[Write] kendra:DeleteIndex.

---

##### `DeletePrincipalMapping`<sup>Required</sup> <a name="DeletePrincipalMapping" id="@cdk_utils/iam.kendra.KendraActions.property.DeletePrincipalMapping"></a>

```typescript
public readonly DeletePrincipalMapping: string;
```

- *Type:* string

[Write] kendra:DeletePrincipalMapping.

---

##### `DeleteQuerySuggestionsBlockList`<sup>Required</sup> <a name="DeleteQuerySuggestionsBlockList" id="@cdk_utils/iam.kendra.KendraActions.property.DeleteQuerySuggestionsBlockList"></a>

```typescript
public readonly DeleteQuerySuggestionsBlockList: string;
```

- *Type:* string

[Write] kendra:DeleteQuerySuggestionsBlockList.

---

##### `DeleteThesaurus`<sup>Required</sup> <a name="DeleteThesaurus" id="@cdk_utils/iam.kendra.KendraActions.property.DeleteThesaurus"></a>

```typescript
public readonly DeleteThesaurus: string;
```

- *Type:* string

[Write] kendra:DeleteThesaurus.

---

##### `DescribeAccessControlConfiguration`<sup>Required</sup> <a name="DescribeAccessControlConfiguration" id="@cdk_utils/iam.kendra.KendraActions.property.DescribeAccessControlConfiguration"></a>

```typescript
public readonly DescribeAccessControlConfiguration: string;
```

- *Type:* string

[Read] kendra:DescribeAccessControlConfiguration.

---

##### `DescribeDataSource`<sup>Required</sup> <a name="DescribeDataSource" id="@cdk_utils/iam.kendra.KendraActions.property.DescribeDataSource"></a>

```typescript
public readonly DescribeDataSource: string;
```

- *Type:* string

[Read] kendra:DescribeDataSource.

---

##### `DescribeExperience`<sup>Required</sup> <a name="DescribeExperience" id="@cdk_utils/iam.kendra.KendraActions.property.DescribeExperience"></a>

```typescript
public readonly DescribeExperience: string;
```

- *Type:* string

[Read] kendra:DescribeExperience.

---

##### `DescribeFaq`<sup>Required</sup> <a name="DescribeFaq" id="@cdk_utils/iam.kendra.KendraActions.property.DescribeFaq"></a>

```typescript
public readonly DescribeFaq: string;
```

- *Type:* string

[Read] kendra:DescribeFaq.

---

##### `DescribeFeaturedResultsSet`<sup>Required</sup> <a name="DescribeFeaturedResultsSet" id="@cdk_utils/iam.kendra.KendraActions.property.DescribeFeaturedResultsSet"></a>

```typescript
public readonly DescribeFeaturedResultsSet: string;
```

- *Type:* string

[Read] kendra:DescribeFeaturedResultsSet.

---

##### `DescribeIndex`<sup>Required</sup> <a name="DescribeIndex" id="@cdk_utils/iam.kendra.KendraActions.property.DescribeIndex"></a>

```typescript
public readonly DescribeIndex: string;
```

- *Type:* string

[Read] kendra:DescribeIndex.

---

##### `DescribePrincipalMapping`<sup>Required</sup> <a name="DescribePrincipalMapping" id="@cdk_utils/iam.kendra.KendraActions.property.DescribePrincipalMapping"></a>

```typescript
public readonly DescribePrincipalMapping: string;
```

- *Type:* string

[Read] kendra:DescribePrincipalMapping.

---

##### `DescribeQuerySuggestionsBlockList`<sup>Required</sup> <a name="DescribeQuerySuggestionsBlockList" id="@cdk_utils/iam.kendra.KendraActions.property.DescribeQuerySuggestionsBlockList"></a>

```typescript
public readonly DescribeQuerySuggestionsBlockList: string;
```

- *Type:* string

[Read] kendra:DescribeQuerySuggestionsBlockList.

---

##### `DescribeQuerySuggestionsConfig`<sup>Required</sup> <a name="DescribeQuerySuggestionsConfig" id="@cdk_utils/iam.kendra.KendraActions.property.DescribeQuerySuggestionsConfig"></a>

```typescript
public readonly DescribeQuerySuggestionsConfig: string;
```

- *Type:* string

[Read] kendra:DescribeQuerySuggestionsConfig.

---

##### `DescribeThesaurus`<sup>Required</sup> <a name="DescribeThesaurus" id="@cdk_utils/iam.kendra.KendraActions.property.DescribeThesaurus"></a>

```typescript
public readonly DescribeThesaurus: string;
```

- *Type:* string

[Read] kendra:DescribeThesaurus.

---

##### `DisassociateEntitiesFromExperience`<sup>Required</sup> <a name="DisassociateEntitiesFromExperience" id="@cdk_utils/iam.kendra.KendraActions.property.DisassociateEntitiesFromExperience"></a>

```typescript
public readonly DisassociateEntitiesFromExperience: string;
```

- *Type:* string

[Write] kendra:DisassociateEntitiesFromExperience.

---

##### `DisassociatePersonasFromEntities`<sup>Required</sup> <a name="DisassociatePersonasFromEntities" id="@cdk_utils/iam.kendra.KendraActions.property.DisassociatePersonasFromEntities"></a>

```typescript
public readonly DisassociatePersonasFromEntities: string;
```

- *Type:* string

[Write] kendra:DisassociatePersonasFromEntities.

---

##### `ListAccessControlConfigurations`<sup>Required</sup> <a name="ListAccessControlConfigurations" id="@cdk_utils/iam.kendra.KendraActions.property.ListAccessControlConfigurations"></a>

```typescript
public readonly ListAccessControlConfigurations: string;
```

- *Type:* string

[List] kendra:ListAccessControlConfigurations.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.kendra.KendraActions.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string;
```

- *Type:* string

[List] kendra:ListDataSources.

---

##### `ListDataSourceSyncJobs`<sup>Required</sup> <a name="ListDataSourceSyncJobs" id="@cdk_utils/iam.kendra.KendraActions.property.ListDataSourceSyncJobs"></a>

```typescript
public readonly ListDataSourceSyncJobs: string;
```

- *Type:* string

[List] kendra:ListDataSourceSyncJobs.

---

##### `ListEntityPersonas`<sup>Required</sup> <a name="ListEntityPersonas" id="@cdk_utils/iam.kendra.KendraActions.property.ListEntityPersonas"></a>

```typescript
public readonly ListEntityPersonas: string;
```

- *Type:* string

[List] kendra:ListEntityPersonas.

---

##### `ListExperienceEntities`<sup>Required</sup> <a name="ListExperienceEntities" id="@cdk_utils/iam.kendra.KendraActions.property.ListExperienceEntities"></a>

```typescript
public readonly ListExperienceEntities: string;
```

- *Type:* string

[List] kendra:ListExperienceEntities.

---

##### `ListExperiences`<sup>Required</sup> <a name="ListExperiences" id="@cdk_utils/iam.kendra.KendraActions.property.ListExperiences"></a>

```typescript
public readonly ListExperiences: string;
```

- *Type:* string

[List] kendra:ListExperiences.

---

##### `ListFaqs`<sup>Required</sup> <a name="ListFaqs" id="@cdk_utils/iam.kendra.KendraActions.property.ListFaqs"></a>

```typescript
public readonly ListFaqs: string;
```

- *Type:* string

[List] kendra:ListFaqs.

---

##### `ListFeaturedResultsSets`<sup>Required</sup> <a name="ListFeaturedResultsSets" id="@cdk_utils/iam.kendra.KendraActions.property.ListFeaturedResultsSets"></a>

```typescript
public readonly ListFeaturedResultsSets: string;
```

- *Type:* string

[List] kendra:ListFeaturedResultsSets.

---

##### `ListGroupsOlderThanOrderingId`<sup>Required</sup> <a name="ListGroupsOlderThanOrderingId" id="@cdk_utils/iam.kendra.KendraActions.property.ListGroupsOlderThanOrderingId"></a>

```typescript
public readonly ListGroupsOlderThanOrderingId: string;
```

- *Type:* string

[List] kendra:ListGroupsOlderThanOrderingId.

---

##### `ListIndices`<sup>Required</sup> <a name="ListIndices" id="@cdk_utils/iam.kendra.KendraActions.property.ListIndices"></a>

```typescript
public readonly ListIndices: string;
```

- *Type:* string

[List] kendra:ListIndices.

---

##### `ListQuerySuggestionsBlockLists`<sup>Required</sup> <a name="ListQuerySuggestionsBlockLists" id="@cdk_utils/iam.kendra.KendraActions.property.ListQuerySuggestionsBlockLists"></a>

```typescript
public readonly ListQuerySuggestionsBlockLists: string;
```

- *Type:* string

[List] kendra:ListQuerySuggestionsBlockLists.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kendra.KendraActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] kendra:ListTagsForResource.

---

##### `ListThesauri`<sup>Required</sup> <a name="ListThesauri" id="@cdk_utils/iam.kendra.KendraActions.property.ListThesauri"></a>

```typescript
public readonly ListThesauri: string;
```

- *Type:* string

[List] kendra:ListThesauri.

---

##### `PutPrincipalMapping`<sup>Required</sup> <a name="PutPrincipalMapping" id="@cdk_utils/iam.kendra.KendraActions.property.PutPrincipalMapping"></a>

```typescript
public readonly PutPrincipalMapping: string;
```

- *Type:* string

[Write] kendra:PutPrincipalMapping.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdk_utils/iam.kendra.KendraActions.property.Query"></a>

```typescript
public readonly Query: string;
```

- *Type:* string

[Read] kendra:Query.

---

##### `Retrieve`<sup>Required</sup> <a name="Retrieve" id="@cdk_utils/iam.kendra.KendraActions.property.Retrieve"></a>

```typescript
public readonly Retrieve: string;
```

- *Type:* string

[Read] kendra:Retrieve.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.kendra.KendraActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDataSourceSyncJob`<sup>Required</sup> <a name="StartDataSourceSyncJob" id="@cdk_utils/iam.kendra.KendraActions.property.StartDataSourceSyncJob"></a>

```typescript
public readonly StartDataSourceSyncJob: string;
```

- *Type:* string

[Write] kendra:StartDataSourceSyncJob.

---

##### `StopDataSourceSyncJob`<sup>Required</sup> <a name="StopDataSourceSyncJob" id="@cdk_utils/iam.kendra.KendraActions.property.StopDataSourceSyncJob"></a>

```typescript
public readonly StopDataSourceSyncJob: string;
```

- *Type:* string

[Write] kendra:StopDataSourceSyncJob.

---

##### `SubmitFeedback`<sup>Required</sup> <a name="SubmitFeedback" id="@cdk_utils/iam.kendra.KendraActions.property.SubmitFeedback"></a>

```typescript
public readonly SubmitFeedback: string;
```

- *Type:* string

[Write] kendra:SubmitFeedback.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kendra.KendraActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] kendra:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kendra.KendraActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] kendra:UntagResource.

---

##### `UpdateAccessControlConfiguration`<sup>Required</sup> <a name="UpdateAccessControlConfiguration" id="@cdk_utils/iam.kendra.KendraActions.property.UpdateAccessControlConfiguration"></a>

```typescript
public readonly UpdateAccessControlConfiguration: string;
```

- *Type:* string

[Write] kendra:UpdateAccessControlConfiguration.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.kendra.KendraActions.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string;
```

- *Type:* string

[Write] kendra:UpdateDataSource.

---

##### `UpdateExperience`<sup>Required</sup> <a name="UpdateExperience" id="@cdk_utils/iam.kendra.KendraActions.property.UpdateExperience"></a>

```typescript
public readonly UpdateExperience: string;
```

- *Type:* string

[Write] kendra:UpdateExperience.

---

##### `UpdateFeaturedResultsSet`<sup>Required</sup> <a name="UpdateFeaturedResultsSet" id="@cdk_utils/iam.kendra.KendraActions.property.UpdateFeaturedResultsSet"></a>

```typescript
public readonly UpdateFeaturedResultsSet: string;
```

- *Type:* string

[Write] kendra:UpdateFeaturedResultsSet.

---

##### `UpdateIndex`<sup>Required</sup> <a name="UpdateIndex" id="@cdk_utils/iam.kendra.KendraActions.property.UpdateIndex"></a>

```typescript
public readonly UpdateIndex: string;
```

- *Type:* string

[Write] kendra:UpdateIndex.

---

##### `UpdateQuerySuggestionsBlockList`<sup>Required</sup> <a name="UpdateQuerySuggestionsBlockList" id="@cdk_utils/iam.kendra.KendraActions.property.UpdateQuerySuggestionsBlockList"></a>

```typescript
public readonly UpdateQuerySuggestionsBlockList: string;
```

- *Type:* string

[Write] kendra:UpdateQuerySuggestionsBlockList.

---

##### `UpdateQuerySuggestionsConfig`<sup>Required</sup> <a name="UpdateQuerySuggestionsConfig" id="@cdk_utils/iam.kendra.KendraActions.property.UpdateQuerySuggestionsConfig"></a>

```typescript
public readonly UpdateQuerySuggestionsConfig: string;
```

- *Type:* string

[Write] kendra:UpdateQuerySuggestionsConfig.

---

##### `UpdateThesaurus`<sup>Required</sup> <a name="UpdateThesaurus" id="@cdk_utils/iam.kendra.KendraActions.property.UpdateThesaurus"></a>

```typescript
public readonly UpdateThesaurus: string;
```

- *Type:* string

[Write] kendra:UpdateThesaurus.

---

### KendraConditions <a name="KendraConditions" id="@cdk_utils/iam.kendra.KendraConditions"></a>

Condition key constants and builders for kendra.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kendra.KendraConditions.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

new kendra.KendraConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.kendra.KendraConditions.requestTag"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kendra.KendraConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.kendra.KendraConditions.resourceTag"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kendra.KendraConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.kendra.KendraConditions.tagKeys"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kendra.KendraConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.property.CreateDataSourceConditionKeys">CreateDataSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataSource action. |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.property.CreateFaqConditionKeys">CreateFaqConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFaq action. |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.property.CreateFeaturedResultsSetConditionKeys">CreateFeaturedResultsSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFeaturedResultsSet action. |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.property.CreateIndexConditionKeys">CreateIndexConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIndex action. |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.property.CreateQuerySuggestionsBlockListConditionKeys">CreateQuerySuggestionsBlockListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQuerySuggestionsBlockList action. |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.property.CreateThesaurusConditionKeys">CreateThesaurusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateThesaurus action. |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.kendra.KendraConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.kendra.KendraConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.kendra.KendraConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.kendra.KendraConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDataSourceConditionKeys`<sup>Required</sup> <a name="CreateDataSourceConditionKeys" id="@cdk_utils/iam.kendra.KendraConditions.property.CreateDataSourceConditionKeys"></a>

```typescript
public readonly CreateDataSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataSource action.

---

##### `CreateFaqConditionKeys`<sup>Required</sup> <a name="CreateFaqConditionKeys" id="@cdk_utils/iam.kendra.KendraConditions.property.CreateFaqConditionKeys"></a>

```typescript
public readonly CreateFaqConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFaq action.

---

##### `CreateFeaturedResultsSetConditionKeys`<sup>Required</sup> <a name="CreateFeaturedResultsSetConditionKeys" id="@cdk_utils/iam.kendra.KendraConditions.property.CreateFeaturedResultsSetConditionKeys"></a>

```typescript
public readonly CreateFeaturedResultsSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFeaturedResultsSet action.

---

##### `CreateIndexConditionKeys`<sup>Required</sup> <a name="CreateIndexConditionKeys" id="@cdk_utils/iam.kendra.KendraConditions.property.CreateIndexConditionKeys"></a>

```typescript
public readonly CreateIndexConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIndex action.

---

##### `CreateQuerySuggestionsBlockListConditionKeys`<sup>Required</sup> <a name="CreateQuerySuggestionsBlockListConditionKeys" id="@cdk_utils/iam.kendra.KendraConditions.property.CreateQuerySuggestionsBlockListConditionKeys"></a>

```typescript
public readonly CreateQuerySuggestionsBlockListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQuerySuggestionsBlockList action.

---

##### `CreateThesaurusConditionKeys`<sup>Required</sup> <a name="CreateThesaurusConditionKeys" id="@cdk_utils/iam.kendra.KendraConditions.property.CreateThesaurusConditionKeys"></a>

```typescript
public readonly CreateThesaurusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateThesaurus action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.kendra.KendraConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.kendra.KendraConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### KendraOperations <a name="KendraOperations" id="@cdk_utils/iam.kendra.KendraOperations"></a>

API operation to required IAM actions mapping for kendra.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kendra.KendraOperations.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

new kendra.KendraOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.AssociateEntitiesToExperience">AssociateEntitiesToExperience</a></code> | <code>string[]</code> | IAM actions required for the AssociateEntitiesToExperience API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.AssociatePersonasToEntities">AssociatePersonasToEntities</a></code> | <code>string[]</code> | IAM actions required for the AssociatePersonasToEntities API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.BatchDeleteDocument">BatchDeleteDocument</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteDocument API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.BatchDeleteFeaturedResultsSet">BatchDeleteFeaturedResultsSet</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteFeaturedResultsSet API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.BatchGetDocumentStatus">BatchGetDocumentStatus</a></code> | <code>string[]</code> | IAM actions required for the BatchGetDocumentStatus API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.BatchPutDocument">BatchPutDocument</a></code> | <code>string[]</code> | IAM actions required for the BatchPutDocument API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ClearQuerySuggestions">ClearQuerySuggestions</a></code> | <code>string[]</code> | IAM actions required for the ClearQuerySuggestions API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.CreateAccessControlConfiguration">CreateAccessControlConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessControlConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.CreateDataSource">CreateDataSource</a></code> | <code>string[]</code> | IAM actions required for the CreateDataSource API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.CreateExperience">CreateExperience</a></code> | <code>string[]</code> | IAM actions required for the CreateExperience API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.CreateFaq">CreateFaq</a></code> | <code>string[]</code> | IAM actions required for the CreateFaq API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.CreateFeaturedResultsSet">CreateFeaturedResultsSet</a></code> | <code>string[]</code> | IAM actions required for the CreateFeaturedResultsSet API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.CreateIndex">CreateIndex</a></code> | <code>string[]</code> | IAM actions required for the CreateIndex API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.CreateQuerySuggestionsBlockList">CreateQuerySuggestionsBlockList</a></code> | <code>string[]</code> | IAM actions required for the CreateQuerySuggestionsBlockList API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.CreateThesaurus">CreateThesaurus</a></code> | <code>string[]</code> | IAM actions required for the CreateThesaurus API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DeleteAccessControlConfiguration">DeleteAccessControlConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessControlConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataSource API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DeleteExperience">DeleteExperience</a></code> | <code>string[]</code> | IAM actions required for the DeleteExperience API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DeleteFaq">DeleteFaq</a></code> | <code>string[]</code> | IAM actions required for the DeleteFaq API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DeleteIndex">DeleteIndex</a></code> | <code>string[]</code> | IAM actions required for the DeleteIndex API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DeletePrincipalMapping">DeletePrincipalMapping</a></code> | <code>string[]</code> | IAM actions required for the DeletePrincipalMapping API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DeleteQuerySuggestionsBlockList">DeleteQuerySuggestionsBlockList</a></code> | <code>string[]</code> | IAM actions required for the DeleteQuerySuggestionsBlockList API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DeleteThesaurus">DeleteThesaurus</a></code> | <code>string[]</code> | IAM actions required for the DeleteThesaurus API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DescribeAccessControlConfiguration">DescribeAccessControlConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccessControlConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DescribeDataSource">DescribeDataSource</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataSource API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DescribeExperience">DescribeExperience</a></code> | <code>string[]</code> | IAM actions required for the DescribeExperience API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DescribeFaq">DescribeFaq</a></code> | <code>string[]</code> | IAM actions required for the DescribeFaq API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DescribeFeaturedResultsSet">DescribeFeaturedResultsSet</a></code> | <code>string[]</code> | IAM actions required for the DescribeFeaturedResultsSet API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DescribeIndex">DescribeIndex</a></code> | <code>string[]</code> | IAM actions required for the DescribeIndex API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DescribePrincipalMapping">DescribePrincipalMapping</a></code> | <code>string[]</code> | IAM actions required for the DescribePrincipalMapping API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DescribeQuerySuggestionsBlockList">DescribeQuerySuggestionsBlockList</a></code> | <code>string[]</code> | IAM actions required for the DescribeQuerySuggestionsBlockList API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DescribeQuerySuggestionsConfig">DescribeQuerySuggestionsConfig</a></code> | <code>string[]</code> | IAM actions required for the DescribeQuerySuggestionsConfig API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DescribeThesaurus">DescribeThesaurus</a></code> | <code>string[]</code> | IAM actions required for the DescribeThesaurus API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DisassociateEntitiesFromExperience">DisassociateEntitiesFromExperience</a></code> | <code>string[]</code> | IAM actions required for the DisassociateEntitiesFromExperience API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.DisassociatePersonasFromEntities">DisassociatePersonasFromEntities</a></code> | <code>string[]</code> | IAM actions required for the DisassociatePersonasFromEntities API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListAccessControlConfigurations">ListAccessControlConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListAccessControlConfigurations API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListDataSources">ListDataSources</a></code> | <code>string[]</code> | IAM actions required for the ListDataSources API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListDataSourceSyncJobs">ListDataSourceSyncJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDataSourceSyncJobs API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListEntityPersonas">ListEntityPersonas</a></code> | <code>string[]</code> | IAM actions required for the ListEntityPersonas API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListExperienceEntities">ListExperienceEntities</a></code> | <code>string[]</code> | IAM actions required for the ListExperienceEntities API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListExperiences">ListExperiences</a></code> | <code>string[]</code> | IAM actions required for the ListExperiences API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListFaqs">ListFaqs</a></code> | <code>string[]</code> | IAM actions required for the ListFaqs API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListFeaturedResultsSets">ListFeaturedResultsSets</a></code> | <code>string[]</code> | IAM actions required for the ListFeaturedResultsSets API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListGroupsOlderThanOrderingId">ListGroupsOlderThanOrderingId</a></code> | <code>string[]</code> | IAM actions required for the ListGroupsOlderThanOrderingId API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListIndices">ListIndices</a></code> | <code>string[]</code> | IAM actions required for the ListIndices API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListQuerySuggestionsBlockLists">ListQuerySuggestionsBlockLists</a></code> | <code>string[]</code> | IAM actions required for the ListQuerySuggestionsBlockLists API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.ListThesauri">ListThesauri</a></code> | <code>string[]</code> | IAM actions required for the ListThesauri API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.opGetQuerySuggestions">opGetQuerySuggestions</a></code> | <code>string[]</code> | IAM actions required for the GetQuerySuggestions API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.opGetSnapshots">opGetSnapshots</a></code> | <code>string[]</code> | IAM actions required for the GetSnapshots API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.PutPrincipalMapping">PutPrincipalMapping</a></code> | <code>string[]</code> | IAM actions required for the PutPrincipalMapping API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.Query">Query</a></code> | <code>string[]</code> | IAM actions required for the Query API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.Retrieve">Retrieve</a></code> | <code>string[]</code> | IAM actions required for the Retrieve API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.StartDataSourceSyncJob">StartDataSourceSyncJob</a></code> | <code>string[]</code> | IAM actions required for the StartDataSourceSyncJob API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.StopDataSourceSyncJob">StopDataSourceSyncJob</a></code> | <code>string[]</code> | IAM actions required for the StopDataSourceSyncJob API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.SubmitFeedback">SubmitFeedback</a></code> | <code>string[]</code> | IAM actions required for the SubmitFeedback API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.UpdateAccessControlConfiguration">UpdateAccessControlConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccessControlConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSource API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.UpdateExperience">UpdateExperience</a></code> | <code>string[]</code> | IAM actions required for the UpdateExperience API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.UpdateFeaturedResultsSet">UpdateFeaturedResultsSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateFeaturedResultsSet API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.UpdateIndex">UpdateIndex</a></code> | <code>string[]</code> | IAM actions required for the UpdateIndex API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.UpdateQuerySuggestionsBlockList">UpdateQuerySuggestionsBlockList</a></code> | <code>string[]</code> | IAM actions required for the UpdateQuerySuggestionsBlockList API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.UpdateQuerySuggestionsConfig">UpdateQuerySuggestionsConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateQuerySuggestionsConfig API call. |
| <code><a href="#@cdk_utils/iam.kendra.KendraOperations.property.UpdateThesaurus">UpdateThesaurus</a></code> | <code>string[]</code> | IAM actions required for the UpdateThesaurus API call. |

---

##### `AssociateEntitiesToExperience`<sup>Required</sup> <a name="AssociateEntitiesToExperience" id="@cdk_utils/iam.kendra.KendraOperations.property.AssociateEntitiesToExperience"></a>

```typescript
public readonly AssociateEntitiesToExperience: string[];
```

- *Type:* string[]

IAM actions required for the AssociateEntitiesToExperience API call.

---

##### `AssociatePersonasToEntities`<sup>Required</sup> <a name="AssociatePersonasToEntities" id="@cdk_utils/iam.kendra.KendraOperations.property.AssociatePersonasToEntities"></a>

```typescript
public readonly AssociatePersonasToEntities: string[];
```

- *Type:* string[]

IAM actions required for the AssociatePersonasToEntities API call.

---

##### `BatchDeleteDocument`<sup>Required</sup> <a name="BatchDeleteDocument" id="@cdk_utils/iam.kendra.KendraOperations.property.BatchDeleteDocument"></a>

```typescript
public readonly BatchDeleteDocument: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteDocument API call.

---

##### `BatchDeleteFeaturedResultsSet`<sup>Required</sup> <a name="BatchDeleteFeaturedResultsSet" id="@cdk_utils/iam.kendra.KendraOperations.property.BatchDeleteFeaturedResultsSet"></a>

```typescript
public readonly BatchDeleteFeaturedResultsSet: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteFeaturedResultsSet API call.

---

##### `BatchGetDocumentStatus`<sup>Required</sup> <a name="BatchGetDocumentStatus" id="@cdk_utils/iam.kendra.KendraOperations.property.BatchGetDocumentStatus"></a>

```typescript
public readonly BatchGetDocumentStatus: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetDocumentStatus API call.

---

##### `BatchPutDocument`<sup>Required</sup> <a name="BatchPutDocument" id="@cdk_utils/iam.kendra.KendraOperations.property.BatchPutDocument"></a>

```typescript
public readonly BatchPutDocument: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutDocument API call.

---

##### `ClearQuerySuggestions`<sup>Required</sup> <a name="ClearQuerySuggestions" id="@cdk_utils/iam.kendra.KendraOperations.property.ClearQuerySuggestions"></a>

```typescript
public readonly ClearQuerySuggestions: string[];
```

- *Type:* string[]

IAM actions required for the ClearQuerySuggestions API call.

---

##### `CreateAccessControlConfiguration`<sup>Required</sup> <a name="CreateAccessControlConfiguration" id="@cdk_utils/iam.kendra.KendraOperations.property.CreateAccessControlConfiguration"></a>

```typescript
public readonly CreateAccessControlConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessControlConfiguration API call.

---

##### `CreateDataSource`<sup>Required</sup> <a name="CreateDataSource" id="@cdk_utils/iam.kendra.KendraOperations.property.CreateDataSource"></a>

```typescript
public readonly CreateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataSource API call.

---

##### `CreateExperience`<sup>Required</sup> <a name="CreateExperience" id="@cdk_utils/iam.kendra.KendraOperations.property.CreateExperience"></a>

```typescript
public readonly CreateExperience: string[];
```

- *Type:* string[]

IAM actions required for the CreateExperience API call.

---

##### `CreateFaq`<sup>Required</sup> <a name="CreateFaq" id="@cdk_utils/iam.kendra.KendraOperations.property.CreateFaq"></a>

```typescript
public readonly CreateFaq: string[];
```

- *Type:* string[]

IAM actions required for the CreateFaq API call.

---

##### `CreateFeaturedResultsSet`<sup>Required</sup> <a name="CreateFeaturedResultsSet" id="@cdk_utils/iam.kendra.KendraOperations.property.CreateFeaturedResultsSet"></a>

```typescript
public readonly CreateFeaturedResultsSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateFeaturedResultsSet API call.

---

##### `CreateIndex`<sup>Required</sup> <a name="CreateIndex" id="@cdk_utils/iam.kendra.KendraOperations.property.CreateIndex"></a>

```typescript
public readonly CreateIndex: string[];
```

- *Type:* string[]

IAM actions required for the CreateIndex API call.

---

##### `CreateQuerySuggestionsBlockList`<sup>Required</sup> <a name="CreateQuerySuggestionsBlockList" id="@cdk_utils/iam.kendra.KendraOperations.property.CreateQuerySuggestionsBlockList"></a>

```typescript
public readonly CreateQuerySuggestionsBlockList: string[];
```

- *Type:* string[]

IAM actions required for the CreateQuerySuggestionsBlockList API call.

---

##### `CreateThesaurus`<sup>Required</sup> <a name="CreateThesaurus" id="@cdk_utils/iam.kendra.KendraOperations.property.CreateThesaurus"></a>

```typescript
public readonly CreateThesaurus: string[];
```

- *Type:* string[]

IAM actions required for the CreateThesaurus API call.

---

##### `DeleteAccessControlConfiguration`<sup>Required</sup> <a name="DeleteAccessControlConfiguration" id="@cdk_utils/iam.kendra.KendraOperations.property.DeleteAccessControlConfiguration"></a>

```typescript
public readonly DeleteAccessControlConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessControlConfiguration API call.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.kendra.KendraOperations.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataSource API call.

---

##### `DeleteExperience`<sup>Required</sup> <a name="DeleteExperience" id="@cdk_utils/iam.kendra.KendraOperations.property.DeleteExperience"></a>

```typescript
public readonly DeleteExperience: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExperience API call.

---

##### `DeleteFaq`<sup>Required</sup> <a name="DeleteFaq" id="@cdk_utils/iam.kendra.KendraOperations.property.DeleteFaq"></a>

```typescript
public readonly DeleteFaq: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFaq API call.

---

##### `DeleteIndex`<sup>Required</sup> <a name="DeleteIndex" id="@cdk_utils/iam.kendra.KendraOperations.property.DeleteIndex"></a>

```typescript
public readonly DeleteIndex: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIndex API call.

---

##### `DeletePrincipalMapping`<sup>Required</sup> <a name="DeletePrincipalMapping" id="@cdk_utils/iam.kendra.KendraOperations.property.DeletePrincipalMapping"></a>

```typescript
public readonly DeletePrincipalMapping: string[];
```

- *Type:* string[]

IAM actions required for the DeletePrincipalMapping API call.

---

##### `DeleteQuerySuggestionsBlockList`<sup>Required</sup> <a name="DeleteQuerySuggestionsBlockList" id="@cdk_utils/iam.kendra.KendraOperations.property.DeleteQuerySuggestionsBlockList"></a>

```typescript
public readonly DeleteQuerySuggestionsBlockList: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQuerySuggestionsBlockList API call.

---

##### `DeleteThesaurus`<sup>Required</sup> <a name="DeleteThesaurus" id="@cdk_utils/iam.kendra.KendraOperations.property.DeleteThesaurus"></a>

```typescript
public readonly DeleteThesaurus: string[];
```

- *Type:* string[]

IAM actions required for the DeleteThesaurus API call.

---

##### `DescribeAccessControlConfiguration`<sup>Required</sup> <a name="DescribeAccessControlConfiguration" id="@cdk_utils/iam.kendra.KendraOperations.property.DescribeAccessControlConfiguration"></a>

```typescript
public readonly DescribeAccessControlConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccessControlConfiguration API call.

---

##### `DescribeDataSource`<sup>Required</sup> <a name="DescribeDataSource" id="@cdk_utils/iam.kendra.KendraOperations.property.DescribeDataSource"></a>

```typescript
public readonly DescribeDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataSource API call.

---

##### `DescribeExperience`<sup>Required</sup> <a name="DescribeExperience" id="@cdk_utils/iam.kendra.KendraOperations.property.DescribeExperience"></a>

```typescript
public readonly DescribeExperience: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExperience API call.

---

##### `DescribeFaq`<sup>Required</sup> <a name="DescribeFaq" id="@cdk_utils/iam.kendra.KendraOperations.property.DescribeFaq"></a>

```typescript
public readonly DescribeFaq: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFaq API call.

---

##### `DescribeFeaturedResultsSet`<sup>Required</sup> <a name="DescribeFeaturedResultsSet" id="@cdk_utils/iam.kendra.KendraOperations.property.DescribeFeaturedResultsSet"></a>

```typescript
public readonly DescribeFeaturedResultsSet: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFeaturedResultsSet API call.

---

##### `DescribeIndex`<sup>Required</sup> <a name="DescribeIndex" id="@cdk_utils/iam.kendra.KendraOperations.property.DescribeIndex"></a>

```typescript
public readonly DescribeIndex: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIndex API call.

---

##### `DescribePrincipalMapping`<sup>Required</sup> <a name="DescribePrincipalMapping" id="@cdk_utils/iam.kendra.KendraOperations.property.DescribePrincipalMapping"></a>

```typescript
public readonly DescribePrincipalMapping: string[];
```

- *Type:* string[]

IAM actions required for the DescribePrincipalMapping API call.

---

##### `DescribeQuerySuggestionsBlockList`<sup>Required</sup> <a name="DescribeQuerySuggestionsBlockList" id="@cdk_utils/iam.kendra.KendraOperations.property.DescribeQuerySuggestionsBlockList"></a>

```typescript
public readonly DescribeQuerySuggestionsBlockList: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQuerySuggestionsBlockList API call.

---

##### `DescribeQuerySuggestionsConfig`<sup>Required</sup> <a name="DescribeQuerySuggestionsConfig" id="@cdk_utils/iam.kendra.KendraOperations.property.DescribeQuerySuggestionsConfig"></a>

```typescript
public readonly DescribeQuerySuggestionsConfig: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQuerySuggestionsConfig API call.

---

##### `DescribeThesaurus`<sup>Required</sup> <a name="DescribeThesaurus" id="@cdk_utils/iam.kendra.KendraOperations.property.DescribeThesaurus"></a>

```typescript
public readonly DescribeThesaurus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeThesaurus API call.

---

##### `DisassociateEntitiesFromExperience`<sup>Required</sup> <a name="DisassociateEntitiesFromExperience" id="@cdk_utils/iam.kendra.KendraOperations.property.DisassociateEntitiesFromExperience"></a>

```typescript
public readonly DisassociateEntitiesFromExperience: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateEntitiesFromExperience API call.

---

##### `DisassociatePersonasFromEntities`<sup>Required</sup> <a name="DisassociatePersonasFromEntities" id="@cdk_utils/iam.kendra.KendraOperations.property.DisassociatePersonasFromEntities"></a>

```typescript
public readonly DisassociatePersonasFromEntities: string[];
```

- *Type:* string[]

IAM actions required for the DisassociatePersonasFromEntities API call.

---

##### `ListAccessControlConfigurations`<sup>Required</sup> <a name="ListAccessControlConfigurations" id="@cdk_utils/iam.kendra.KendraOperations.property.ListAccessControlConfigurations"></a>

```typescript
public readonly ListAccessControlConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessControlConfigurations API call.

---

##### `ListDataSources`<sup>Required</sup> <a name="ListDataSources" id="@cdk_utils/iam.kendra.KendraOperations.property.ListDataSources"></a>

```typescript
public readonly ListDataSources: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSources API call.

---

##### `ListDataSourceSyncJobs`<sup>Required</sup> <a name="ListDataSourceSyncJobs" id="@cdk_utils/iam.kendra.KendraOperations.property.ListDataSourceSyncJobs"></a>

```typescript
public readonly ListDataSourceSyncJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDataSourceSyncJobs API call.

---

##### `ListEntityPersonas`<sup>Required</sup> <a name="ListEntityPersonas" id="@cdk_utils/iam.kendra.KendraOperations.property.ListEntityPersonas"></a>

```typescript
public readonly ListEntityPersonas: string[];
```

- *Type:* string[]

IAM actions required for the ListEntityPersonas API call.

---

##### `ListExperienceEntities`<sup>Required</sup> <a name="ListExperienceEntities" id="@cdk_utils/iam.kendra.KendraOperations.property.ListExperienceEntities"></a>

```typescript
public readonly ListExperienceEntities: string[];
```

- *Type:* string[]

IAM actions required for the ListExperienceEntities API call.

---

##### `ListExperiences`<sup>Required</sup> <a name="ListExperiences" id="@cdk_utils/iam.kendra.KendraOperations.property.ListExperiences"></a>

```typescript
public readonly ListExperiences: string[];
```

- *Type:* string[]

IAM actions required for the ListExperiences API call.

---

##### `ListFaqs`<sup>Required</sup> <a name="ListFaqs" id="@cdk_utils/iam.kendra.KendraOperations.property.ListFaqs"></a>

```typescript
public readonly ListFaqs: string[];
```

- *Type:* string[]

IAM actions required for the ListFaqs API call.

---

##### `ListFeaturedResultsSets`<sup>Required</sup> <a name="ListFeaturedResultsSets" id="@cdk_utils/iam.kendra.KendraOperations.property.ListFeaturedResultsSets"></a>

```typescript
public readonly ListFeaturedResultsSets: string[];
```

- *Type:* string[]

IAM actions required for the ListFeaturedResultsSets API call.

---

##### `ListGroupsOlderThanOrderingId`<sup>Required</sup> <a name="ListGroupsOlderThanOrderingId" id="@cdk_utils/iam.kendra.KendraOperations.property.ListGroupsOlderThanOrderingId"></a>

```typescript
public readonly ListGroupsOlderThanOrderingId: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupsOlderThanOrderingId API call.

---

##### `ListIndices`<sup>Required</sup> <a name="ListIndices" id="@cdk_utils/iam.kendra.KendraOperations.property.ListIndices"></a>

```typescript
public readonly ListIndices: string[];
```

- *Type:* string[]

IAM actions required for the ListIndices API call.

---

##### `ListQuerySuggestionsBlockLists`<sup>Required</sup> <a name="ListQuerySuggestionsBlockLists" id="@cdk_utils/iam.kendra.KendraOperations.property.ListQuerySuggestionsBlockLists"></a>

```typescript
public readonly ListQuerySuggestionsBlockLists: string[];
```

- *Type:* string[]

IAM actions required for the ListQuerySuggestionsBlockLists API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kendra.KendraOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListThesauri`<sup>Required</sup> <a name="ListThesauri" id="@cdk_utils/iam.kendra.KendraOperations.property.ListThesauri"></a>

```typescript
public readonly ListThesauri: string[];
```

- *Type:* string[]

IAM actions required for the ListThesauri API call.

---

##### `opGetQuerySuggestions`<sup>Required</sup> <a name="opGetQuerySuggestions" id="@cdk_utils/iam.kendra.KendraOperations.property.opGetQuerySuggestions"></a>

```typescript
public readonly opGetQuerySuggestions: string[];
```

- *Type:* string[]

IAM actions required for the GetQuerySuggestions API call.

---

##### `opGetSnapshots`<sup>Required</sup> <a name="opGetSnapshots" id="@cdk_utils/iam.kendra.KendraOperations.property.opGetSnapshots"></a>

```typescript
public readonly opGetSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the GetSnapshots API call.

---

##### `PutPrincipalMapping`<sup>Required</sup> <a name="PutPrincipalMapping" id="@cdk_utils/iam.kendra.KendraOperations.property.PutPrincipalMapping"></a>

```typescript
public readonly PutPrincipalMapping: string[];
```

- *Type:* string[]

IAM actions required for the PutPrincipalMapping API call.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdk_utils/iam.kendra.KendraOperations.property.Query"></a>

```typescript
public readonly Query: string[];
```

- *Type:* string[]

IAM actions required for the Query API call.

---

##### `Retrieve`<sup>Required</sup> <a name="Retrieve" id="@cdk_utils/iam.kendra.KendraOperations.property.Retrieve"></a>

```typescript
public readonly Retrieve: string[];
```

- *Type:* string[]

IAM actions required for the Retrieve API call.

---

##### `StartDataSourceSyncJob`<sup>Required</sup> <a name="StartDataSourceSyncJob" id="@cdk_utils/iam.kendra.KendraOperations.property.StartDataSourceSyncJob"></a>

```typescript
public readonly StartDataSourceSyncJob: string[];
```

- *Type:* string[]

IAM actions required for the StartDataSourceSyncJob API call.

---

##### `StopDataSourceSyncJob`<sup>Required</sup> <a name="StopDataSourceSyncJob" id="@cdk_utils/iam.kendra.KendraOperations.property.StopDataSourceSyncJob"></a>

```typescript
public readonly StopDataSourceSyncJob: string[];
```

- *Type:* string[]

IAM actions required for the StopDataSourceSyncJob API call.

---

##### `SubmitFeedback`<sup>Required</sup> <a name="SubmitFeedback" id="@cdk_utils/iam.kendra.KendraOperations.property.SubmitFeedback"></a>

```typescript
public readonly SubmitFeedback: string[];
```

- *Type:* string[]

IAM actions required for the SubmitFeedback API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kendra.KendraOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kendra.KendraOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccessControlConfiguration`<sup>Required</sup> <a name="UpdateAccessControlConfiguration" id="@cdk_utils/iam.kendra.KendraOperations.property.UpdateAccessControlConfiguration"></a>

```typescript
public readonly UpdateAccessControlConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccessControlConfiguration API call.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.kendra.KendraOperations.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSource API call.

---

##### `UpdateExperience`<sup>Required</sup> <a name="UpdateExperience" id="@cdk_utils/iam.kendra.KendraOperations.property.UpdateExperience"></a>

```typescript
public readonly UpdateExperience: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExperience API call.

---

##### `UpdateFeaturedResultsSet`<sup>Required</sup> <a name="UpdateFeaturedResultsSet" id="@cdk_utils/iam.kendra.KendraOperations.property.UpdateFeaturedResultsSet"></a>

```typescript
public readonly UpdateFeaturedResultsSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFeaturedResultsSet API call.

---

##### `UpdateIndex`<sup>Required</sup> <a name="UpdateIndex" id="@cdk_utils/iam.kendra.KendraOperations.property.UpdateIndex"></a>

```typescript
public readonly UpdateIndex: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIndex API call.

---

##### `UpdateQuerySuggestionsBlockList`<sup>Required</sup> <a name="UpdateQuerySuggestionsBlockList" id="@cdk_utils/iam.kendra.KendraOperations.property.UpdateQuerySuggestionsBlockList"></a>

```typescript
public readonly UpdateQuerySuggestionsBlockList: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQuerySuggestionsBlockList API call.

---

##### `UpdateQuerySuggestionsConfig`<sup>Required</sup> <a name="UpdateQuerySuggestionsConfig" id="@cdk_utils/iam.kendra.KendraOperations.property.UpdateQuerySuggestionsConfig"></a>

```typescript
public readonly UpdateQuerySuggestionsConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQuerySuggestionsConfig API call.

---

##### `UpdateThesaurus`<sup>Required</sup> <a name="UpdateThesaurus" id="@cdk_utils/iam.kendra.KendraOperations.property.UpdateThesaurus"></a>

```typescript
public readonly UpdateThesaurus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThesaurus API call.

---

### KendraResources <a name="KendraResources" id="@cdk_utils/iam.kendra.KendraResources"></a>

ARN builders, validators, and parsers for kendra resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kendra.KendraResources.Initializer"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

new kendra.KendraResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.accessControlConfiguration">accessControlConfiguration</a></code> | Builds an ARN for the access-control-configuration resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.dataSource">dataSource</a></code> | Builds an ARN for the data-source resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.experience">experience</a></code> | Builds an ARN for the experience resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.faq">faq</a></code> | Builds an ARN for the faq resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.featuredResultsSet">featuredResultsSet</a></code> | Builds an ARN for the featured-results-set resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.index">index</a></code> | Builds an ARN for the index resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.isValidAccessControlConfigurationArn">isValidAccessControlConfigurationArn</a></code> | Validates whether a string is a valid ARN for the access-control-configuration resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.isValidDataSourceArn">isValidDataSourceArn</a></code> | Validates whether a string is a valid ARN for the data-source resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.isValidExperienceArn">isValidExperienceArn</a></code> | Validates whether a string is a valid ARN for the experience resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.isValidFaqArn">isValidFaqArn</a></code> | Validates whether a string is a valid ARN for the faq resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.isValidFeaturedResultsSetArn">isValidFeaturedResultsSetArn</a></code> | Validates whether a string is a valid ARN for the featured-results-set resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.isValidIndexArn">isValidIndexArn</a></code> | Validates whether a string is a valid ARN for the index resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.isValidQuerySuggestionsBlockListArn">isValidQuerySuggestionsBlockListArn</a></code> | Validates whether a string is a valid ARN for the query-suggestions-block-list resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.isValidThesaurusArn">isValidThesaurusArn</a></code> | Validates whether a string is a valid ARN for the thesaurus resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.parseAccessControlConfigurationArn">parseAccessControlConfigurationArn</a></code> | Parses a access-control-configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.parseDataSourceArn">parseDataSourceArn</a></code> | Parses a data-source ARN into its components. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.parseExperienceArn">parseExperienceArn</a></code> | Parses a experience ARN into its components. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.parseFaqArn">parseFaqArn</a></code> | Parses a faq ARN into its components. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.parseFeaturedResultsSetArn">parseFeaturedResultsSetArn</a></code> | Parses a featured-results-set ARN into its components. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.parseIndexArn">parseIndexArn</a></code> | Parses a index ARN into its components. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.parseQuerySuggestionsBlockListArn">parseQuerySuggestionsBlockListArn</a></code> | Parses a query-suggestions-block-list ARN into its components. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.parseThesaurusArn">parseThesaurusArn</a></code> | Parses a thesaurus ARN into its components. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.querySuggestionsBlockList">querySuggestionsBlockList</a></code> | Builds an ARN for the query-suggestions-block-list resource. |
| <code><a href="#@cdk_utils/iam.kendra.KendraResources.thesaurus">thesaurus</a></code> | Builds an ARN for the thesaurus resource. |

---

##### `accessControlConfiguration` <a name="accessControlConfiguration" id="@cdk_utils/iam.kendra.KendraResources.accessControlConfiguration"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.accessControlConfiguration(props: KendraAccessControlConfigurationArnProps)
```

Builds an ARN for the access-control-configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kendra.KendraResources.accessControlConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kendra.KendraAccessControlConfigurationArnProps">KendraAccessControlConfigurationArnProps</a>

---

##### `dataSource` <a name="dataSource" id="@cdk_utils/iam.kendra.KendraResources.dataSource"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.dataSource(props: KendraDataSourceArnProps)
```

Builds an ARN for the data-source resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kendra.KendraResources.dataSource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kendra.KendraDataSourceArnProps">KendraDataSourceArnProps</a>

---

##### `experience` <a name="experience" id="@cdk_utils/iam.kendra.KendraResources.experience"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.experience(props: KendraExperienceArnProps)
```

Builds an ARN for the experience resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kendra.KendraResources.experience.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kendra.KendraExperienceArnProps">KendraExperienceArnProps</a>

---

##### `faq` <a name="faq" id="@cdk_utils/iam.kendra.KendraResources.faq"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.faq(props: KendraFaqArnProps)
```

Builds an ARN for the faq resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kendra.KendraResources.faq.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kendra.KendraFaqArnProps">KendraFaqArnProps</a>

---

##### `featuredResultsSet` <a name="featuredResultsSet" id="@cdk_utils/iam.kendra.KendraResources.featuredResultsSet"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.featuredResultsSet(props: KendraFeaturedResultsSetArnProps)
```

Builds an ARN for the featured-results-set resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kendra.KendraResources.featuredResultsSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kendra.KendraFeaturedResultsSetArnProps">KendraFeaturedResultsSetArnProps</a>

---

##### `index` <a name="index" id="@cdk_utils/iam.kendra.KendraResources.index"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.index(props: KendraIndexArnProps)
```

Builds an ARN for the index resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kendra.KendraResources.index.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kendra.KendraIndexArnProps">KendraIndexArnProps</a>

---

##### `isValidAccessControlConfigurationArn` <a name="isValidAccessControlConfigurationArn" id="@cdk_utils/iam.kendra.KendraResources.isValidAccessControlConfigurationArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.isValidAccessControlConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the access-control-configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.isValidAccessControlConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataSourceArn` <a name="isValidDataSourceArn" id="@cdk_utils/iam.kendra.KendraResources.isValidDataSourceArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.isValidDataSourceArn(arn: string)
```

Validates whether a string is a valid ARN for the data-source resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.isValidDataSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExperienceArn` <a name="isValidExperienceArn" id="@cdk_utils/iam.kendra.KendraResources.isValidExperienceArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.isValidExperienceArn(arn: string)
```

Validates whether a string is a valid ARN for the experience resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.isValidExperienceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFaqArn` <a name="isValidFaqArn" id="@cdk_utils/iam.kendra.KendraResources.isValidFaqArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.isValidFaqArn(arn: string)
```

Validates whether a string is a valid ARN for the faq resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.isValidFaqArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFeaturedResultsSetArn` <a name="isValidFeaturedResultsSetArn" id="@cdk_utils/iam.kendra.KendraResources.isValidFeaturedResultsSetArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.isValidFeaturedResultsSetArn(arn: string)
```

Validates whether a string is a valid ARN for the featured-results-set resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.isValidFeaturedResultsSetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIndexArn` <a name="isValidIndexArn" id="@cdk_utils/iam.kendra.KendraResources.isValidIndexArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.isValidIndexArn(arn: string)
```

Validates whether a string is a valid ARN for the index resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.isValidIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQuerySuggestionsBlockListArn` <a name="isValidQuerySuggestionsBlockListArn" id="@cdk_utils/iam.kendra.KendraResources.isValidQuerySuggestionsBlockListArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.isValidQuerySuggestionsBlockListArn(arn: string)
```

Validates whether a string is a valid ARN for the query-suggestions-block-list resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.isValidQuerySuggestionsBlockListArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidThesaurusArn` <a name="isValidThesaurusArn" id="@cdk_utils/iam.kendra.KendraResources.isValidThesaurusArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.isValidThesaurusArn(arn: string)
```

Validates whether a string is a valid ARN for the thesaurus resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.isValidThesaurusArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccessControlConfigurationArn` <a name="parseAccessControlConfigurationArn" id="@cdk_utils/iam.kendra.KendraResources.parseAccessControlConfigurationArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.parseAccessControlConfigurationArn(arn: string)
```

Parses a access-control-configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.parseAccessControlConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataSourceArn` <a name="parseDataSourceArn" id="@cdk_utils/iam.kendra.KendraResources.parseDataSourceArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.parseDataSourceArn(arn: string)
```

Parses a data-source ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.parseDataSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExperienceArn` <a name="parseExperienceArn" id="@cdk_utils/iam.kendra.KendraResources.parseExperienceArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.parseExperienceArn(arn: string)
```

Parses a experience ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.parseExperienceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFaqArn` <a name="parseFaqArn" id="@cdk_utils/iam.kendra.KendraResources.parseFaqArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.parseFaqArn(arn: string)
```

Parses a faq ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.parseFaqArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFeaturedResultsSetArn` <a name="parseFeaturedResultsSetArn" id="@cdk_utils/iam.kendra.KendraResources.parseFeaturedResultsSetArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.parseFeaturedResultsSetArn(arn: string)
```

Parses a featured-results-set ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.parseFeaturedResultsSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIndexArn` <a name="parseIndexArn" id="@cdk_utils/iam.kendra.KendraResources.parseIndexArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.parseIndexArn(arn: string)
```

Parses a index ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.parseIndexArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQuerySuggestionsBlockListArn` <a name="parseQuerySuggestionsBlockListArn" id="@cdk_utils/iam.kendra.KendraResources.parseQuerySuggestionsBlockListArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.parseQuerySuggestionsBlockListArn(arn: string)
```

Parses a query-suggestions-block-list ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.parseQuerySuggestionsBlockListArn.parameter.arn"></a>

- *Type:* string

---

##### `parseThesaurusArn` <a name="parseThesaurusArn" id="@cdk_utils/iam.kendra.KendraResources.parseThesaurusArn"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.parseThesaurusArn(arn: string)
```

Parses a thesaurus ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra.KendraResources.parseThesaurusArn.parameter.arn"></a>

- *Type:* string

---

##### `querySuggestionsBlockList` <a name="querySuggestionsBlockList" id="@cdk_utils/iam.kendra.KendraResources.querySuggestionsBlockList"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.querySuggestionsBlockList(props: KendraQuerySuggestionsBlockListArnProps)
```

Builds an ARN for the query-suggestions-block-list resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kendra.KendraResources.querySuggestionsBlockList.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kendra.KendraQuerySuggestionsBlockListArnProps">KendraQuerySuggestionsBlockListArnProps</a>

---

##### `thesaurus` <a name="thesaurus" id="@cdk_utils/iam.kendra.KendraResources.thesaurus"></a>

```typescript
import { kendra } from '@cdk_utils/iam'

kendra.KendraResources.thesaurus(props: KendraThesaurusArnProps)
```

Builds an ARN for the thesaurus resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kendra.KendraResources.thesaurus.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kendra.KendraThesaurusArnProps">KendraThesaurusArnProps</a>

---




