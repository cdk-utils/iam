# `elasticbeanstalk` Submodule <a name="`elasticbeanstalk` Submodule" id="@cdk_utils/iam.elasticbeanstalk"></a>


## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkApplicationArnComponents <a name="ElasticBeanstalkApplicationArnComponents" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnComponents.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkApplicationArnComponents: elasticbeanstalk.ElasticBeanstalkApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnComponents.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnComponents.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticBeanstalkApplicationArnProps <a name="ElasticBeanstalkApplicationArnProps" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnProps.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkApplicationArnProps: elasticbeanstalk.ElasticBeanstalkApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnProps.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticBeanstalkApplicationversionArnComponents <a name="ElasticBeanstalkApplicationversionArnComponents" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents"></a>

Parsed components of a applicationversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkApplicationversionArnComponents: elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents.property.versionLabel">versionLabel</a></code> | <code>string</code> | The VersionLabel component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionLabel`<sup>Required</sup> <a name="versionLabel" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnComponents.property.versionLabel"></a>

```typescript
public readonly versionLabel: string;
```

- *Type:* string

The VersionLabel component.

---

### ElasticBeanstalkApplicationversionArnProps <a name="ElasticBeanstalkApplicationversionArnProps" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps"></a>

Properties for building a applicationversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkApplicationversionArnProps: elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps.property.versionLabel">versionLabel</a></code> | <code>string</code> | The VersionLabel component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component of the ARN.

---

##### `versionLabel`<sup>Required</sup> <a name="versionLabel" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps.property.versionLabel"></a>

```typescript
public readonly versionLabel: string;
```

- *Type:* string

The VersionLabel component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticBeanstalkConfigurationtemplateArnComponents <a name="ElasticBeanstalkConfigurationtemplateArnComponents" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents"></a>

Parsed components of a configurationtemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkConfigurationtemplateArnComponents: elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnComponents.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component.

---

### ElasticBeanstalkConfigurationtemplateArnProps <a name="ElasticBeanstalkConfigurationtemplateArnProps" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps"></a>

Properties for building a configurationtemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkConfigurationtemplateArnProps: elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component of the ARN.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticBeanstalkEnvironmentArnComponents <a name="ElasticBeanstalkEnvironmentArnComponents" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkEnvironmentArnComponents: elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticBeanstalkEnvironmentArnProps <a name="ElasticBeanstalkEnvironmentArnProps" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkEnvironmentArnProps: elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps.property.applicationName">applicationName</a></code> | <code>string</code> | The ApplicationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps.property.environmentName">environmentName</a></code> | <code>string</code> | The EnvironmentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The ApplicationName component of the ARN.

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The EnvironmentName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticBeanstalkPlatformArnComponents <a name="ElasticBeanstalkPlatformArnComponents" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnComponents"></a>

Parsed components of a platform ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnComponents.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkPlatformArnComponents: elasticbeanstalk.ElasticBeanstalkPlatformArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnComponents.property.platformNameWithVersion">platformNameWithVersion</a></code> | <code>string</code> | The PlatformNameWithVersion component. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `platformNameWithVersion`<sup>Required</sup> <a name="platformNameWithVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnComponents.property.platformNameWithVersion"></a>

```typescript
public readonly platformNameWithVersion: string;
```

- *Type:* string

The PlatformNameWithVersion component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticBeanstalkPlatformArnProps <a name="ElasticBeanstalkPlatformArnProps" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnProps"></a>

Properties for building a platform ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnProps.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkPlatformArnProps: elasticbeanstalk.ElasticBeanstalkPlatformArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnProps.property.platformNameWithVersion">platformNameWithVersion</a></code> | <code>string</code> | The PlatformNameWithVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `platformNameWithVersion`<sup>Required</sup> <a name="platformNameWithVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnProps.property.platformNameWithVersion"></a>

```typescript
public readonly platformNameWithVersion: string;
```

- *Type:* string

The PlatformNameWithVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticBeanstalkSolutionstackArnComponents <a name="ElasticBeanstalkSolutionstackArnComponents" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnComponents"></a>

Parsed components of a solutionstack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnComponents.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkSolutionstackArnComponents: elasticbeanstalk.ElasticBeanstalkSolutionstackArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnComponents.property.solutionStackName">solutionStackName</a></code> | <code>string</code> | The SolutionStackName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `solutionStackName`<sup>Required</sup> <a name="solutionStackName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnComponents.property.solutionStackName"></a>

```typescript
public readonly solutionStackName: string;
```

- *Type:* string

The SolutionStackName component.

---

### ElasticBeanstalkSolutionstackArnProps <a name="ElasticBeanstalkSolutionstackArnProps" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps"></a>

Properties for building a solutionstack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

const elasticBeanstalkSolutionstackArnProps: elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps.property.solutionStackName">solutionStackName</a></code> | <code>string</code> | The SolutionStackName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `solutionStackName`<sup>Required</sup> <a name="solutionStackName" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps.property.solutionStackName"></a>

```typescript
public readonly solutionStackName: string;
```

- *Type:* string

The SolutionStackName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkActions <a name="ElasticBeanstalkActions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions"></a>

IAM action constants for the elasticbeanstalk service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

new elasticbeanstalk.ElasticBeanstalkActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AbortEnvironmentUpdate">AbortEnvironmentUpdate</a></code> | <code>string</code> | [Write] elasticbeanstalk:AbortEnvironmentUpdate. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AddTags">AddTags</a></code> | <code>string</code> | [Tagging] elasticbeanstalk:AddTags. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ApplyEnvironmentManagedAction">ApplyEnvironmentManagedAction</a></code> | <code>string</code> | [Write] elasticbeanstalk:ApplyEnvironmentManagedAction. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AssociateEnvironmentOperationsRole">AssociateEnvironmentOperationsRole</a></code> | <code>string</code> | [Write] elasticbeanstalk:AssociateEnvironmentOperationsRole. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CheckDNSAvailability">CheckDNSAvailability</a></code> | <code>string</code> | [Read] elasticbeanstalk:CheckDNSAvailability. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ComposeEnvironments">ComposeEnvironments</a></code> | <code>string</code> | [Write] elasticbeanstalk:ComposeEnvironments. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] elasticbeanstalk:CreateApplication. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreateApplicationVersion">CreateApplicationVersion</a></code> | <code>string</code> | [Write] elasticbeanstalk:CreateApplicationVersion. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreateConfigurationTemplate">CreateConfigurationTemplate</a></code> | <code>string</code> | [Write] elasticbeanstalk:CreateConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] elasticbeanstalk:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreatePlatformVersion">CreatePlatformVersion</a></code> | <code>string</code> | [Write] elasticbeanstalk:CreatePlatformVersion. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreateStorageLocation">CreateStorageLocation</a></code> | <code>string</code> | [Write] elasticbeanstalk:CreateStorageLocation. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] elasticbeanstalk:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DeleteApplicationVersion">DeleteApplicationVersion</a></code> | <code>string</code> | [Write] elasticbeanstalk:DeleteApplicationVersion. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DeleteConfigurationTemplate">DeleteConfigurationTemplate</a></code> | <code>string</code> | [Write] elasticbeanstalk:DeleteConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DeleteEnvironmentConfiguration">DeleteEnvironmentConfiguration</a></code> | <code>string</code> | [Write] elasticbeanstalk:DeleteEnvironmentConfiguration. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DeletePlatformVersion">DeletePlatformVersion</a></code> | <code>string</code> | [Write] elasticbeanstalk:DeletePlatformVersion. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeAccountAttributes">DescribeAccountAttributes</a></code> | <code>string</code> | [Read] elasticbeanstalk:DescribeAccountAttributes. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeApplications">DescribeApplications</a></code> | <code>string</code> | [List] elasticbeanstalk:DescribeApplications. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeApplicationVersions">DescribeApplicationVersions</a></code> | <code>string</code> | [List] elasticbeanstalk:DescribeApplicationVersions. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeConfigurationOptions">DescribeConfigurationOptions</a></code> | <code>string</code> | [Read] elasticbeanstalk:DescribeConfigurationOptions. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeConfigurationSettings">DescribeConfigurationSettings</a></code> | <code>string</code> | [Read] elasticbeanstalk:DescribeConfigurationSettings. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEnvironmentHealth">DescribeEnvironmentHealth</a></code> | <code>string</code> | [Read] elasticbeanstalk:DescribeEnvironmentHealth. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEnvironmentManagedActionHistory">DescribeEnvironmentManagedActionHistory</a></code> | <code>string</code> | [Read] elasticbeanstalk:DescribeEnvironmentManagedActionHistory. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEnvironmentManagedActions">DescribeEnvironmentManagedActions</a></code> | <code>string</code> | [Read] elasticbeanstalk:DescribeEnvironmentManagedActions. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEnvironmentResources">DescribeEnvironmentResources</a></code> | <code>string</code> | [Read] elasticbeanstalk:DescribeEnvironmentResources. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEnvironments">DescribeEnvironments</a></code> | <code>string</code> | [List] elasticbeanstalk:DescribeEnvironments. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEvents">DescribeEvents</a></code> | <code>string</code> | [Read] elasticbeanstalk:DescribeEvents. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeInstancesHealth">DescribeInstancesHealth</a></code> | <code>string</code> | [Read] elasticbeanstalk:DescribeInstancesHealth. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribePlatformVersion">DescribePlatformVersion</a></code> | <code>string</code> | [Read] elasticbeanstalk:DescribePlatformVersion. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DisassociateEnvironmentOperationsRole">DisassociateEnvironmentOperationsRole</a></code> | <code>string</code> | [Write] elasticbeanstalk:DisassociateEnvironmentOperationsRole. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ListAvailableSolutionStacks">ListAvailableSolutionStacks</a></code> | <code>string</code> | [List] elasticbeanstalk:ListAvailableSolutionStacks. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ListPlatformBranches">ListPlatformBranches</a></code> | <code>string</code> | [List] elasticbeanstalk:ListPlatformBranches. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ListPlatformVersions">ListPlatformVersions</a></code> | <code>string</code> | [List] elasticbeanstalk:ListPlatformVersions. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] elasticbeanstalk:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.PutInstanceStatistics">PutInstanceStatistics</a></code> | <code>string</code> | [Write] elasticbeanstalk:PutInstanceStatistics. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.RebuildEnvironment">RebuildEnvironment</a></code> | <code>string</code> | [Write] elasticbeanstalk:RebuildEnvironment. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.RemoveTags">RemoveTags</a></code> | <code>string</code> | [Tagging] elasticbeanstalk:RemoveTags. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.RequestEnvironmentInfo">RequestEnvironmentInfo</a></code> | <code>string</code> | [Read] elasticbeanstalk:RequestEnvironmentInfo. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.RestartAppServer">RestartAppServer</a></code> | <code>string</code> | [Write] elasticbeanstalk:RestartAppServer. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.RetrieveEnvironmentInfo">RetrieveEnvironmentInfo</a></code> | <code>string</code> | [Read] elasticbeanstalk:RetrieveEnvironmentInfo. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.SwapEnvironmentCNAMEs">SwapEnvironmentCNAMEs</a></code> | <code>string</code> | [Write] elasticbeanstalk:SwapEnvironmentCNAMEs. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.TerminateEnvironment">TerminateEnvironment</a></code> | <code>string</code> | [Write] elasticbeanstalk:TerminateEnvironment. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] elasticbeanstalk:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateApplicationResourceLifecycle">UpdateApplicationResourceLifecycle</a></code> | <code>string</code> | [Write] elasticbeanstalk:UpdateApplicationResourceLifecycle. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateApplicationVersion">UpdateApplicationVersion</a></code> | <code>string</code> | [Write] elasticbeanstalk:UpdateApplicationVersion. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateConfigurationTemplate">UpdateConfigurationTemplate</a></code> | <code>string</code> | [Write] elasticbeanstalk:UpdateConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] elasticbeanstalk:UpdateEnvironment. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateTagsForResource">UpdateTagsForResource</a></code> | <code>string</code> | [Tagging] elasticbeanstalk:UpdateTagsForResource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ValidateConfigurationSettings">ValidateConfigurationSettings</a></code> | <code>string</code> | [Read] elasticbeanstalk:ValidateConfigurationSettings. |

---

##### `AbortEnvironmentUpdate`<sup>Required</sup> <a name="AbortEnvironmentUpdate" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AbortEnvironmentUpdate"></a>

```typescript
public readonly AbortEnvironmentUpdate: string;
```

- *Type:* string

[Write] elasticbeanstalk:AbortEnvironmentUpdate.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AddTags"></a>

```typescript
public readonly AddTags: string;
```

- *Type:* string

[Tagging] elasticbeanstalk:AddTags.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApplyEnvironmentManagedAction`<sup>Required</sup> <a name="ApplyEnvironmentManagedAction" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ApplyEnvironmentManagedAction"></a>

```typescript
public readonly ApplyEnvironmentManagedAction: string;
```

- *Type:* string

[Write] elasticbeanstalk:ApplyEnvironmentManagedAction.

---

##### `AssociateEnvironmentOperationsRole`<sup>Required</sup> <a name="AssociateEnvironmentOperationsRole" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.AssociateEnvironmentOperationsRole"></a>

```typescript
public readonly AssociateEnvironmentOperationsRole: string;
```

- *Type:* string

[Write] elasticbeanstalk:AssociateEnvironmentOperationsRole.

---

##### `CheckDNSAvailability`<sup>Required</sup> <a name="CheckDNSAvailability" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CheckDNSAvailability"></a>

```typescript
public readonly CheckDNSAvailability: string;
```

- *Type:* string

[Read] elasticbeanstalk:CheckDNSAvailability.

---

##### `ComposeEnvironments`<sup>Required</sup> <a name="ComposeEnvironments" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ComposeEnvironments"></a>

```typescript
public readonly ComposeEnvironments: string;
```

- *Type:* string

[Write] elasticbeanstalk:ComposeEnvironments.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] elasticbeanstalk:CreateApplication.

---

##### `CreateApplicationVersion`<sup>Required</sup> <a name="CreateApplicationVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreateApplicationVersion"></a>

```typescript
public readonly CreateApplicationVersion: string;
```

- *Type:* string

[Write] elasticbeanstalk:CreateApplicationVersion.

---

##### `CreateConfigurationTemplate`<sup>Required</sup> <a name="CreateConfigurationTemplate" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreateConfigurationTemplate"></a>

```typescript
public readonly CreateConfigurationTemplate: string;
```

- *Type:* string

[Write] elasticbeanstalk:CreateConfigurationTemplate.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] elasticbeanstalk:CreateEnvironment.

---

##### `CreatePlatformVersion`<sup>Required</sup> <a name="CreatePlatformVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreatePlatformVersion"></a>

```typescript
public readonly CreatePlatformVersion: string;
```

- *Type:* string

[Write] elasticbeanstalk:CreatePlatformVersion.

---

##### `CreateStorageLocation`<sup>Required</sup> <a name="CreateStorageLocation" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.CreateStorageLocation"></a>

```typescript
public readonly CreateStorageLocation: string;
```

- *Type:* string

[Write] elasticbeanstalk:CreateStorageLocation.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] elasticbeanstalk:DeleteApplication.

---

##### `DeleteApplicationVersion`<sup>Required</sup> <a name="DeleteApplicationVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DeleteApplicationVersion"></a>

```typescript
public readonly DeleteApplicationVersion: string;
```

- *Type:* string

[Write] elasticbeanstalk:DeleteApplicationVersion.

---

##### `DeleteConfigurationTemplate`<sup>Required</sup> <a name="DeleteConfigurationTemplate" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DeleteConfigurationTemplate"></a>

```typescript
public readonly DeleteConfigurationTemplate: string;
```

- *Type:* string

[Write] elasticbeanstalk:DeleteConfigurationTemplate.

---

##### `DeleteEnvironmentConfiguration`<sup>Required</sup> <a name="DeleteEnvironmentConfiguration" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DeleteEnvironmentConfiguration"></a>

```typescript
public readonly DeleteEnvironmentConfiguration: string;
```

- *Type:* string

[Write] elasticbeanstalk:DeleteEnvironmentConfiguration.

---

##### `DeletePlatformVersion`<sup>Required</sup> <a name="DeletePlatformVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DeletePlatformVersion"></a>

```typescript
public readonly DeletePlatformVersion: string;
```

- *Type:* string

[Write] elasticbeanstalk:DeletePlatformVersion.

---

##### `DescribeAccountAttributes`<sup>Required</sup> <a name="DescribeAccountAttributes" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeAccountAttributes"></a>

```typescript
public readonly DescribeAccountAttributes: string;
```

- *Type:* string

[Read] elasticbeanstalk:DescribeAccountAttributes.

---

##### `DescribeApplications`<sup>Required</sup> <a name="DescribeApplications" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeApplications"></a>

```typescript
public readonly DescribeApplications: string;
```

- *Type:* string

[List] elasticbeanstalk:DescribeApplications.

---

##### `DescribeApplicationVersions`<sup>Required</sup> <a name="DescribeApplicationVersions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeApplicationVersions"></a>

```typescript
public readonly DescribeApplicationVersions: string;
```

- *Type:* string

[List] elasticbeanstalk:DescribeApplicationVersions.

---

##### `DescribeConfigurationOptions`<sup>Required</sup> <a name="DescribeConfigurationOptions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeConfigurationOptions"></a>

```typescript
public readonly DescribeConfigurationOptions: string;
```

- *Type:* string

[Read] elasticbeanstalk:DescribeConfigurationOptions.

---

##### `DescribeConfigurationSettings`<sup>Required</sup> <a name="DescribeConfigurationSettings" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeConfigurationSettings"></a>

```typescript
public readonly DescribeConfigurationSettings: string;
```

- *Type:* string

[Read] elasticbeanstalk:DescribeConfigurationSettings.

---

##### `DescribeEnvironmentHealth`<sup>Required</sup> <a name="DescribeEnvironmentHealth" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEnvironmentHealth"></a>

```typescript
public readonly DescribeEnvironmentHealth: string;
```

- *Type:* string

[Read] elasticbeanstalk:DescribeEnvironmentHealth.

---

##### `DescribeEnvironmentManagedActionHistory`<sup>Required</sup> <a name="DescribeEnvironmentManagedActionHistory" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEnvironmentManagedActionHistory"></a>

```typescript
public readonly DescribeEnvironmentManagedActionHistory: string;
```

- *Type:* string

[Read] elasticbeanstalk:DescribeEnvironmentManagedActionHistory.

---

##### `DescribeEnvironmentManagedActions`<sup>Required</sup> <a name="DescribeEnvironmentManagedActions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEnvironmentManagedActions"></a>

```typescript
public readonly DescribeEnvironmentManagedActions: string;
```

- *Type:* string

[Read] elasticbeanstalk:DescribeEnvironmentManagedActions.

---

##### `DescribeEnvironmentResources`<sup>Required</sup> <a name="DescribeEnvironmentResources" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEnvironmentResources"></a>

```typescript
public readonly DescribeEnvironmentResources: string;
```

- *Type:* string

[Read] elasticbeanstalk:DescribeEnvironmentResources.

---

##### `DescribeEnvironments`<sup>Required</sup> <a name="DescribeEnvironments" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEnvironments"></a>

```typescript
public readonly DescribeEnvironments: string;
```

- *Type:* string

[List] elasticbeanstalk:DescribeEnvironments.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string;
```

- *Type:* string

[Read] elasticbeanstalk:DescribeEvents.

---

##### `DescribeInstancesHealth`<sup>Required</sup> <a name="DescribeInstancesHealth" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribeInstancesHealth"></a>

```typescript
public readonly DescribeInstancesHealth: string;
```

- *Type:* string

[Read] elasticbeanstalk:DescribeInstancesHealth.

---

##### `DescribePlatformVersion`<sup>Required</sup> <a name="DescribePlatformVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DescribePlatformVersion"></a>

```typescript
public readonly DescribePlatformVersion: string;
```

- *Type:* string

[Read] elasticbeanstalk:DescribePlatformVersion.

---

##### `DisassociateEnvironmentOperationsRole`<sup>Required</sup> <a name="DisassociateEnvironmentOperationsRole" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.DisassociateEnvironmentOperationsRole"></a>

```typescript
public readonly DisassociateEnvironmentOperationsRole: string;
```

- *Type:* string

[Write] elasticbeanstalk:DisassociateEnvironmentOperationsRole.

---

##### `ListAvailableSolutionStacks`<sup>Required</sup> <a name="ListAvailableSolutionStacks" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ListAvailableSolutionStacks"></a>

```typescript
public readonly ListAvailableSolutionStacks: string;
```

- *Type:* string

[List] elasticbeanstalk:ListAvailableSolutionStacks.

---

##### `ListPlatformBranches`<sup>Required</sup> <a name="ListPlatformBranches" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ListPlatformBranches"></a>

```typescript
public readonly ListPlatformBranches: string;
```

- *Type:* string

[List] elasticbeanstalk:ListPlatformBranches.

---

##### `ListPlatformVersions`<sup>Required</sup> <a name="ListPlatformVersions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ListPlatformVersions"></a>

```typescript
public readonly ListPlatformVersions: string;
```

- *Type:* string

[List] elasticbeanstalk:ListPlatformVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] elasticbeanstalk:ListTagsForResource.

---

##### `PutInstanceStatistics`<sup>Required</sup> <a name="PutInstanceStatistics" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.PutInstanceStatistics"></a>

```typescript
public readonly PutInstanceStatistics: string;
```

- *Type:* string

[Write] elasticbeanstalk:PutInstanceStatistics.

---

##### `RebuildEnvironment`<sup>Required</sup> <a name="RebuildEnvironment" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.RebuildEnvironment"></a>

```typescript
public readonly RebuildEnvironment: string;
```

- *Type:* string

[Write] elasticbeanstalk:RebuildEnvironment.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string;
```

- *Type:* string

[Tagging] elasticbeanstalk:RemoveTags.

---

##### `RequestEnvironmentInfo`<sup>Required</sup> <a name="RequestEnvironmentInfo" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.RequestEnvironmentInfo"></a>

```typescript
public readonly RequestEnvironmentInfo: string;
```

- *Type:* string

[Read] elasticbeanstalk:RequestEnvironmentInfo.

---

##### `RestartAppServer`<sup>Required</sup> <a name="RestartAppServer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.RestartAppServer"></a>

```typescript
public readonly RestartAppServer: string;
```

- *Type:* string

[Write] elasticbeanstalk:RestartAppServer.

---

##### `RetrieveEnvironmentInfo`<sup>Required</sup> <a name="RetrieveEnvironmentInfo" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.RetrieveEnvironmentInfo"></a>

```typescript
public readonly RetrieveEnvironmentInfo: string;
```

- *Type:* string

[Read] elasticbeanstalk:RetrieveEnvironmentInfo.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SwapEnvironmentCNAMEs`<sup>Required</sup> <a name="SwapEnvironmentCNAMEs" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.SwapEnvironmentCNAMEs"></a>

```typescript
public readonly SwapEnvironmentCNAMEs: string;
```

- *Type:* string

[Write] elasticbeanstalk:SwapEnvironmentCNAMEs.

---

##### `TerminateEnvironment`<sup>Required</sup> <a name="TerminateEnvironment" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.TerminateEnvironment"></a>

```typescript
public readonly TerminateEnvironment: string;
```

- *Type:* string

[Write] elasticbeanstalk:TerminateEnvironment.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] elasticbeanstalk:UpdateApplication.

---

##### `UpdateApplicationResourceLifecycle`<sup>Required</sup> <a name="UpdateApplicationResourceLifecycle" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateApplicationResourceLifecycle"></a>

```typescript
public readonly UpdateApplicationResourceLifecycle: string;
```

- *Type:* string

[Write] elasticbeanstalk:UpdateApplicationResourceLifecycle.

---

##### `UpdateApplicationVersion`<sup>Required</sup> <a name="UpdateApplicationVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateApplicationVersion"></a>

```typescript
public readonly UpdateApplicationVersion: string;
```

- *Type:* string

[Write] elasticbeanstalk:UpdateApplicationVersion.

---

##### `UpdateConfigurationTemplate`<sup>Required</sup> <a name="UpdateConfigurationTemplate" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateConfigurationTemplate"></a>

```typescript
public readonly UpdateConfigurationTemplate: string;
```

- *Type:* string

[Write] elasticbeanstalk:UpdateConfigurationTemplate.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] elasticbeanstalk:UpdateEnvironment.

---

##### `UpdateTagsForResource`<sup>Required</sup> <a name="UpdateTagsForResource" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.UpdateTagsForResource"></a>

```typescript
public readonly UpdateTagsForResource: string;
```

- *Type:* string

[Tagging] elasticbeanstalk:UpdateTagsForResource.

---

##### `ValidateConfigurationSettings`<sup>Required</sup> <a name="ValidateConfigurationSettings" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkActions.property.ValidateConfigurationSettings"></a>

```typescript
public readonly ValidateConfigurationSettings: string;
```

- *Type:* string

[Read] elasticbeanstalk:ValidateConfigurationSettings.

---

### ElasticBeanstalkConditions <a name="ElasticBeanstalkConditions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions"></a>

Condition key constants and builders for elasticbeanstalk.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

new elasticbeanstalk.ElasticBeanstalkConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromApplication">fromApplication</a></code> | Generates a condition block for `elasticbeanstalk:FromApplication`. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromApplicationVersion">fromApplicationVersion</a></code> | Generates a condition block for `elasticbeanstalk:FromApplicationVersion`. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromConfigurationTemplate">fromConfigurationTemplate</a></code> | Generates a condition block for `elasticbeanstalk:FromConfigurationTemplate`. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromEnvironment">fromEnvironment</a></code> | Generates a condition block for `elasticbeanstalk:FromEnvironment`. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromPlatform">fromPlatform</a></code> | Generates a condition block for `elasticbeanstalk:FromPlatform`. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromSolutionStack">fromSolutionStack</a></code> | Generates a condition block for `elasticbeanstalk:FromSolutionStack`. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.inApplication">inApplication</a></code> | Generates a condition block for `elasticbeanstalk:InApplication`. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `fromApplication` <a name="fromApplication" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromApplication"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkConditions.fromApplication(value: string)
```

Generates a condition block for `elasticbeanstalk:FromApplication`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromApplication.parameter.value"></a>

- *Type:* string

---

##### `fromApplicationVersion` <a name="fromApplicationVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromApplicationVersion"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkConditions.fromApplicationVersion(value: string)
```

Generates a condition block for `elasticbeanstalk:FromApplicationVersion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromApplicationVersion.parameter.value"></a>

- *Type:* string

---

##### `fromConfigurationTemplate` <a name="fromConfigurationTemplate" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromConfigurationTemplate"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkConditions.fromConfigurationTemplate(value: string)
```

Generates a condition block for `elasticbeanstalk:FromConfigurationTemplate`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromConfigurationTemplate.parameter.value"></a>

- *Type:* string

---

##### `fromEnvironment` <a name="fromEnvironment" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromEnvironment"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkConditions.fromEnvironment(value: string)
```

Generates a condition block for `elasticbeanstalk:FromEnvironment`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromEnvironment.parameter.value"></a>

- *Type:* string

---

##### `fromPlatform` <a name="fromPlatform" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromPlatform"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkConditions.fromPlatform(value: string)
```

Generates a condition block for `elasticbeanstalk:FromPlatform`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromPlatform.parameter.value"></a>

- *Type:* string

---

##### `fromSolutionStack` <a name="fromSolutionStack" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromSolutionStack"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkConditions.fromSolutionStack(value: string)
```

Generates a condition block for `elasticbeanstalk:FromSolutionStack`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.fromSolutionStack.parameter.value"></a>

- *Type:* string

---

##### `inApplication` <a name="inApplication" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.inApplication"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkConditions.inApplication(value: string)
```

Generates a condition block for `elasticbeanstalk:InApplication`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.inApplication.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.requestTag"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.resourceTag"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.tagKeys"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.AddTagsConditionKeys">AddTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTags action. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.CreateConfigurationTemplateConditionKeys">CreateConfigurationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConfigurationTemplate action. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.CreatePlatformVersionConditionKeys">CreatePlatformVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePlatformVersion action. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_APPLICATION">FROM_APPLICATION</a></code> | <code>string</code> | Condition key: elasticbeanstalk:FromApplication (ARN). |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_APPLICATION_VERSION">FROM_APPLICATION_VERSION</a></code> | <code>string</code> | Condition key: elasticbeanstalk:FromApplicationVersion (ARN). |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_CONFIGURATION_TEMPLATE">FROM_CONFIGURATION_TEMPLATE</a></code> | <code>string</code> | Condition key: elasticbeanstalk:FromConfigurationTemplate (ARN). |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_ENVIRONMENT">FROM_ENVIRONMENT</a></code> | <code>string</code> | Condition key: elasticbeanstalk:FromEnvironment (ARN). |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_PLATFORM">FROM_PLATFORM</a></code> | <code>string</code> | Condition key: elasticbeanstalk:FromPlatform (ARN). |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_SOLUTION_STACK">FROM_SOLUTION_STACK</a></code> | <code>string</code> | Condition key: elasticbeanstalk:FromSolutionStack (ARN). |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.IN_APPLICATION">IN_APPLICATION</a></code> | <code>string</code> | Condition key: elasticbeanstalk:InApplication (ARN). |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.RemoveTagsConditionKeys">RemoveTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTags action. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.SwapEnvironmentCNAMEsConditionKeys">SwapEnvironmentCNAMEsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SwapEnvironmentCNAMEs action. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.UpdateConfigurationTemplateConditionKeys">UpdateConfigurationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConfigurationTemplate action. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.UpdateEnvironmentConditionKeys">UpdateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEnvironment action. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.UpdateTagsForResourceConditionKeys">UpdateTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTagsForResource action. |

---

##### `AddTagsConditionKeys`<sup>Required</sup> <a name="AddTagsConditionKeys" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.AddTagsConditionKeys"></a>

```typescript
public readonly AddTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTags action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateConfigurationTemplateConditionKeys`<sup>Required</sup> <a name="CreateConfigurationTemplateConditionKeys" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.CreateConfigurationTemplateConditionKeys"></a>

```typescript
public readonly CreateConfigurationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConfigurationTemplate action.

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `CreatePlatformVersionConditionKeys`<sup>Required</sup> <a name="CreatePlatformVersionConditionKeys" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.CreatePlatformVersionConditionKeys"></a>

```typescript
public readonly CreatePlatformVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePlatformVersion action.

---

##### `FROM_APPLICATION`<sup>Required</sup> <a name="FROM_APPLICATION" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_APPLICATION"></a>

```typescript
public readonly FROM_APPLICATION: string;
```

- *Type:* string

Condition key: elasticbeanstalk:FromApplication (ARN).

---

##### `FROM_APPLICATION_VERSION`<sup>Required</sup> <a name="FROM_APPLICATION_VERSION" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_APPLICATION_VERSION"></a>

```typescript
public readonly FROM_APPLICATION_VERSION: string;
```

- *Type:* string

Condition key: elasticbeanstalk:FromApplicationVersion (ARN).

---

##### `FROM_CONFIGURATION_TEMPLATE`<sup>Required</sup> <a name="FROM_CONFIGURATION_TEMPLATE" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_CONFIGURATION_TEMPLATE"></a>

```typescript
public readonly FROM_CONFIGURATION_TEMPLATE: string;
```

- *Type:* string

Condition key: elasticbeanstalk:FromConfigurationTemplate (ARN).

---

##### `FROM_ENVIRONMENT`<sup>Required</sup> <a name="FROM_ENVIRONMENT" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_ENVIRONMENT"></a>

```typescript
public readonly FROM_ENVIRONMENT: string;
```

- *Type:* string

Condition key: elasticbeanstalk:FromEnvironment (ARN).

---

##### `FROM_PLATFORM`<sup>Required</sup> <a name="FROM_PLATFORM" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_PLATFORM"></a>

```typescript
public readonly FROM_PLATFORM: string;
```

- *Type:* string

Condition key: elasticbeanstalk:FromPlatform (ARN).

---

##### `FROM_SOLUTION_STACK`<sup>Required</sup> <a name="FROM_SOLUTION_STACK" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.FROM_SOLUTION_STACK"></a>

```typescript
public readonly FROM_SOLUTION_STACK: string;
```

- *Type:* string

Condition key: elasticbeanstalk:FromSolutionStack (ARN).

---

##### `IN_APPLICATION`<sup>Required</sup> <a name="IN_APPLICATION" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.IN_APPLICATION"></a>

```typescript
public readonly IN_APPLICATION: string;
```

- *Type:* string

Condition key: elasticbeanstalk:InApplication (ARN).

---

##### `RemoveTagsConditionKeys`<sup>Required</sup> <a name="RemoveTagsConditionKeys" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.RemoveTagsConditionKeys"></a>

```typescript
public readonly RemoveTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTags action.

---

##### `SwapEnvironmentCNAMEsConditionKeys`<sup>Required</sup> <a name="SwapEnvironmentCNAMEsConditionKeys" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.SwapEnvironmentCNAMEsConditionKeys"></a>

```typescript
public readonly SwapEnvironmentCNAMEsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SwapEnvironmentCNAMEs action.

---

##### `UpdateConfigurationTemplateConditionKeys`<sup>Required</sup> <a name="UpdateConfigurationTemplateConditionKeys" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.UpdateConfigurationTemplateConditionKeys"></a>

```typescript
public readonly UpdateConfigurationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConfigurationTemplate action.

---

##### `UpdateEnvironmentConditionKeys`<sup>Required</sup> <a name="UpdateEnvironmentConditionKeys" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.UpdateEnvironmentConditionKeys"></a>

```typescript
public readonly UpdateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEnvironment action.

---

##### `UpdateTagsForResourceConditionKeys`<sup>Required</sup> <a name="UpdateTagsForResourceConditionKeys" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConditions.property.UpdateTagsForResourceConditionKeys"></a>

```typescript
public readonly UpdateTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTagsForResource action.

---

### ElasticBeanstalkOperations <a name="ElasticBeanstalkOperations" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations"></a>

API operation to required IAM actions mapping for elasticbeanstalk.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

new elasticbeanstalk.ElasticBeanstalkOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.AbortEnvironmentUpdate">AbortEnvironmentUpdate</a></code> | <code>string[]</code> | IAM actions required for the AbortEnvironmentUpdate API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ApplyEnvironmentManagedAction">ApplyEnvironmentManagedAction</a></code> | <code>string[]</code> | IAM actions required for the ApplyEnvironmentManagedAction API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.AssociateEnvironmentOperationsRole">AssociateEnvironmentOperationsRole</a></code> | <code>string[]</code> | IAM actions required for the AssociateEnvironmentOperationsRole API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CheckDNSAvailability">CheckDNSAvailability</a></code> | <code>string[]</code> | IAM actions required for the CheckDNSAvailability API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ComposeEnvironments">ComposeEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ComposeEnvironments API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreateApplicationVersion">CreateApplicationVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateApplicationVersion API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreateConfigurationTemplate">CreateConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreatePlatformVersion">CreatePlatformVersion</a></code> | <code>string[]</code> | IAM actions required for the CreatePlatformVersion API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreateStorageLocation">CreateStorageLocation</a></code> | <code>string[]</code> | IAM actions required for the CreateStorageLocation API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DeleteApplicationVersion">DeleteApplicationVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplicationVersion API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DeleteConfigurationTemplate">DeleteConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DeleteEnvironmentConfiguration">DeleteEnvironmentConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironmentConfiguration API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DeletePlatformVersion">DeletePlatformVersion</a></code> | <code>string[]</code> | IAM actions required for the DeletePlatformVersion API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeAccountAttributes">DescribeAccountAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountAttributes API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeApplications">DescribeApplications</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplications API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeApplicationVersions">DescribeApplicationVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplicationVersions API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeConfigurationOptions">DescribeConfigurationOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurationOptions API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeConfigurationSettings">DescribeConfigurationSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurationSettings API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEnvironmentHealth">DescribeEnvironmentHealth</a></code> | <code>string[]</code> | IAM actions required for the DescribeEnvironmentHealth API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEnvironmentManagedActionHistory">DescribeEnvironmentManagedActionHistory</a></code> | <code>string[]</code> | IAM actions required for the DescribeEnvironmentManagedActionHistory API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEnvironmentManagedActions">DescribeEnvironmentManagedActions</a></code> | <code>string[]</code> | IAM actions required for the DescribeEnvironmentManagedActions API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEnvironmentResources">DescribeEnvironmentResources</a></code> | <code>string[]</code> | IAM actions required for the DescribeEnvironmentResources API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEnvironments">DescribeEnvironments</a></code> | <code>string[]</code> | IAM actions required for the DescribeEnvironments API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEvents">DescribeEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribeEvents API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeInstancesHealth">DescribeInstancesHealth</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstancesHealth API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribePlatformVersion">DescribePlatformVersion</a></code> | <code>string[]</code> | IAM actions required for the DescribePlatformVersion API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DisassociateEnvironmentOperationsRole">DisassociateEnvironmentOperationsRole</a></code> | <code>string[]</code> | IAM actions required for the DisassociateEnvironmentOperationsRole API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ListAvailableSolutionStacks">ListAvailableSolutionStacks</a></code> | <code>string[]</code> | IAM actions required for the ListAvailableSolutionStacks API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ListPlatformBranches">ListPlatformBranches</a></code> | <code>string[]</code> | IAM actions required for the ListPlatformBranches API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ListPlatformVersions">ListPlatformVersions</a></code> | <code>string[]</code> | IAM actions required for the ListPlatformVersions API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.RebuildEnvironment">RebuildEnvironment</a></code> | <code>string[]</code> | IAM actions required for the RebuildEnvironment API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.RequestEnvironmentInfo">RequestEnvironmentInfo</a></code> | <code>string[]</code> | IAM actions required for the RequestEnvironmentInfo API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.RestartAppServer">RestartAppServer</a></code> | <code>string[]</code> | IAM actions required for the RestartAppServer API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.RetrieveEnvironmentInfo">RetrieveEnvironmentInfo</a></code> | <code>string[]</code> | IAM actions required for the RetrieveEnvironmentInfo API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.SwapEnvironmentCNAMEs">SwapEnvironmentCNAMEs</a></code> | <code>string[]</code> | IAM actions required for the SwapEnvironmentCNAMEs API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.TerminateEnvironment">TerminateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the TerminateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateApplicationResourceLifecycle">UpdateApplicationResourceLifecycle</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplicationResourceLifecycle API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateApplicationVersion">UpdateApplicationVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplicationVersion API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateConfigurationTemplate">UpdateConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateTagsForResource">UpdateTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the UpdateTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ValidateConfigurationSettings">ValidateConfigurationSettings</a></code> | <code>string[]</code> | IAM actions required for the ValidateConfigurationSettings API call. |

---

##### `AbortEnvironmentUpdate`<sup>Required</sup> <a name="AbortEnvironmentUpdate" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.AbortEnvironmentUpdate"></a>

```typescript
public readonly AbortEnvironmentUpdate: string[];
```

- *Type:* string[]

IAM actions required for the AbortEnvironmentUpdate API call.

---

##### `ApplyEnvironmentManagedAction`<sup>Required</sup> <a name="ApplyEnvironmentManagedAction" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ApplyEnvironmentManagedAction"></a>

```typescript
public readonly ApplyEnvironmentManagedAction: string[];
```

- *Type:* string[]

IAM actions required for the ApplyEnvironmentManagedAction API call.

---

##### `AssociateEnvironmentOperationsRole`<sup>Required</sup> <a name="AssociateEnvironmentOperationsRole" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.AssociateEnvironmentOperationsRole"></a>

```typescript
public readonly AssociateEnvironmentOperationsRole: string[];
```

- *Type:* string[]

IAM actions required for the AssociateEnvironmentOperationsRole API call.

---

##### `CheckDNSAvailability`<sup>Required</sup> <a name="CheckDNSAvailability" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CheckDNSAvailability"></a>

```typescript
public readonly CheckDNSAvailability: string[];
```

- *Type:* string[]

IAM actions required for the CheckDNSAvailability API call.

---

##### `ComposeEnvironments`<sup>Required</sup> <a name="ComposeEnvironments" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ComposeEnvironments"></a>

```typescript
public readonly ComposeEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ComposeEnvironments API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateApplicationVersion`<sup>Required</sup> <a name="CreateApplicationVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreateApplicationVersion"></a>

```typescript
public readonly CreateApplicationVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplicationVersion API call.

---

##### `CreateConfigurationTemplate`<sup>Required</sup> <a name="CreateConfigurationTemplate" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreateConfigurationTemplate"></a>

```typescript
public readonly CreateConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfigurationTemplate API call.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironment API call.

---

##### `CreatePlatformVersion`<sup>Required</sup> <a name="CreatePlatformVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreatePlatformVersion"></a>

```typescript
public readonly CreatePlatformVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreatePlatformVersion API call.

---

##### `CreateStorageLocation`<sup>Required</sup> <a name="CreateStorageLocation" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.CreateStorageLocation"></a>

```typescript
public readonly CreateStorageLocation: string[];
```

- *Type:* string[]

IAM actions required for the CreateStorageLocation API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteApplicationVersion`<sup>Required</sup> <a name="DeleteApplicationVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DeleteApplicationVersion"></a>

```typescript
public readonly DeleteApplicationVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplicationVersion API call.

---

##### `DeleteConfigurationTemplate`<sup>Required</sup> <a name="DeleteConfigurationTemplate" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DeleteConfigurationTemplate"></a>

```typescript
public readonly DeleteConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfigurationTemplate API call.

---

##### `DeleteEnvironmentConfiguration`<sup>Required</sup> <a name="DeleteEnvironmentConfiguration" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DeleteEnvironmentConfiguration"></a>

```typescript
public readonly DeleteEnvironmentConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironmentConfiguration API call.

---

##### `DeletePlatformVersion`<sup>Required</sup> <a name="DeletePlatformVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DeletePlatformVersion"></a>

```typescript
public readonly DeletePlatformVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeletePlatformVersion API call.

---

##### `DescribeAccountAttributes`<sup>Required</sup> <a name="DescribeAccountAttributes" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeAccountAttributes"></a>

```typescript
public readonly DescribeAccountAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountAttributes API call.

---

##### `DescribeApplications`<sup>Required</sup> <a name="DescribeApplications" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeApplications"></a>

```typescript
public readonly DescribeApplications: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplications API call.

---

##### `DescribeApplicationVersions`<sup>Required</sup> <a name="DescribeApplicationVersions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeApplicationVersions"></a>

```typescript
public readonly DescribeApplicationVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplicationVersions API call.

---

##### `DescribeConfigurationOptions`<sup>Required</sup> <a name="DescribeConfigurationOptions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeConfigurationOptions"></a>

```typescript
public readonly DescribeConfigurationOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurationOptions API call.

---

##### `DescribeConfigurationSettings`<sup>Required</sup> <a name="DescribeConfigurationSettings" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeConfigurationSettings"></a>

```typescript
public readonly DescribeConfigurationSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurationSettings API call.

---

##### `DescribeEnvironmentHealth`<sup>Required</sup> <a name="DescribeEnvironmentHealth" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEnvironmentHealth"></a>

```typescript
public readonly DescribeEnvironmentHealth: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEnvironmentHealth API call.

---

##### `DescribeEnvironmentManagedActionHistory`<sup>Required</sup> <a name="DescribeEnvironmentManagedActionHistory" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEnvironmentManagedActionHistory"></a>

```typescript
public readonly DescribeEnvironmentManagedActionHistory: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEnvironmentManagedActionHistory API call.

---

##### `DescribeEnvironmentManagedActions`<sup>Required</sup> <a name="DescribeEnvironmentManagedActions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEnvironmentManagedActions"></a>

```typescript
public readonly DescribeEnvironmentManagedActions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEnvironmentManagedActions API call.

---

##### `DescribeEnvironmentResources`<sup>Required</sup> <a name="DescribeEnvironmentResources" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEnvironmentResources"></a>

```typescript
public readonly DescribeEnvironmentResources: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEnvironmentResources API call.

---

##### `DescribeEnvironments`<sup>Required</sup> <a name="DescribeEnvironments" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEnvironments"></a>

```typescript
public readonly DescribeEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEnvironments API call.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEvents API call.

---

##### `DescribeInstancesHealth`<sup>Required</sup> <a name="DescribeInstancesHealth" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribeInstancesHealth"></a>

```typescript
public readonly DescribeInstancesHealth: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstancesHealth API call.

---

##### `DescribePlatformVersion`<sup>Required</sup> <a name="DescribePlatformVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DescribePlatformVersion"></a>

```typescript
public readonly DescribePlatformVersion: string[];
```

- *Type:* string[]

IAM actions required for the DescribePlatformVersion API call.

---

##### `DisassociateEnvironmentOperationsRole`<sup>Required</sup> <a name="DisassociateEnvironmentOperationsRole" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.DisassociateEnvironmentOperationsRole"></a>

```typescript
public readonly DisassociateEnvironmentOperationsRole: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateEnvironmentOperationsRole API call.

---

##### `ListAvailableSolutionStacks`<sup>Required</sup> <a name="ListAvailableSolutionStacks" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ListAvailableSolutionStacks"></a>

```typescript
public readonly ListAvailableSolutionStacks: string[];
```

- *Type:* string[]

IAM actions required for the ListAvailableSolutionStacks API call.

---

##### `ListPlatformBranches`<sup>Required</sup> <a name="ListPlatformBranches" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ListPlatformBranches"></a>

```typescript
public readonly ListPlatformBranches: string[];
```

- *Type:* string[]

IAM actions required for the ListPlatformBranches API call.

---

##### `ListPlatformVersions`<sup>Required</sup> <a name="ListPlatformVersions" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ListPlatformVersions"></a>

```typescript
public readonly ListPlatformVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListPlatformVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `RebuildEnvironment`<sup>Required</sup> <a name="RebuildEnvironment" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.RebuildEnvironment"></a>

```typescript
public readonly RebuildEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the RebuildEnvironment API call.

---

##### `RequestEnvironmentInfo`<sup>Required</sup> <a name="RequestEnvironmentInfo" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.RequestEnvironmentInfo"></a>

```typescript
public readonly RequestEnvironmentInfo: string[];
```

- *Type:* string[]

IAM actions required for the RequestEnvironmentInfo API call.

---

##### `RestartAppServer`<sup>Required</sup> <a name="RestartAppServer" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.RestartAppServer"></a>

```typescript
public readonly RestartAppServer: string[];
```

- *Type:* string[]

IAM actions required for the RestartAppServer API call.

---

##### `RetrieveEnvironmentInfo`<sup>Required</sup> <a name="RetrieveEnvironmentInfo" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.RetrieveEnvironmentInfo"></a>

```typescript
public readonly RetrieveEnvironmentInfo: string[];
```

- *Type:* string[]

IAM actions required for the RetrieveEnvironmentInfo API call.

---

##### `SwapEnvironmentCNAMEs`<sup>Required</sup> <a name="SwapEnvironmentCNAMEs" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.SwapEnvironmentCNAMEs"></a>

```typescript
public readonly SwapEnvironmentCNAMEs: string[];
```

- *Type:* string[]

IAM actions required for the SwapEnvironmentCNAMEs API call.

---

##### `TerminateEnvironment`<sup>Required</sup> <a name="TerminateEnvironment" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.TerminateEnvironment"></a>

```typescript
public readonly TerminateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the TerminateEnvironment API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateApplicationResourceLifecycle`<sup>Required</sup> <a name="UpdateApplicationResourceLifecycle" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateApplicationResourceLifecycle"></a>

```typescript
public readonly UpdateApplicationResourceLifecycle: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplicationResourceLifecycle API call.

---

##### `UpdateApplicationVersion`<sup>Required</sup> <a name="UpdateApplicationVersion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateApplicationVersion"></a>

```typescript
public readonly UpdateApplicationVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplicationVersion API call.

---

##### `UpdateConfigurationTemplate`<sup>Required</sup> <a name="UpdateConfigurationTemplate" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateConfigurationTemplate"></a>

```typescript
public readonly UpdateConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfigurationTemplate API call.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironment API call.

---

##### `UpdateTagsForResource`<sup>Required</sup> <a name="UpdateTagsForResource" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.UpdateTagsForResource"></a>

```typescript
public readonly UpdateTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTagsForResource API call.

---

##### `ValidateConfigurationSettings`<sup>Required</sup> <a name="ValidateConfigurationSettings" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkOperations.property.ValidateConfigurationSettings"></a>

```typescript
public readonly ValidateConfigurationSettings: string[];
```

- *Type:* string[]

IAM actions required for the ValidateConfigurationSettings API call.

---

### ElasticBeanstalkResources <a name="ElasticBeanstalkResources" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources"></a>

ARN builders, validators, and parsers for elasticbeanstalk resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.Initializer"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

new elasticbeanstalk.ElasticBeanstalkResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.applicationversion">applicationversion</a></code> | Builds an ARN for the applicationversion resource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.configurationtemplate">configurationtemplate</a></code> | Builds an ARN for the configurationtemplate resource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidApplicationversionArn">isValidApplicationversionArn</a></code> | Validates whether a string is a valid ARN for the applicationversion resource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidConfigurationtemplateArn">isValidConfigurationtemplateArn</a></code> | Validates whether a string is a valid ARN for the configurationtemplate resource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidPlatformArn">isValidPlatformArn</a></code> | Validates whether a string is a valid ARN for the platform resource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidSolutionstackArn">isValidSolutionstackArn</a></code> | Validates whether a string is a valid ARN for the solutionstack resource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseApplicationversionArn">parseApplicationversionArn</a></code> | Parses a applicationversion ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseConfigurationtemplateArn">parseConfigurationtemplateArn</a></code> | Parses a configurationtemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parsePlatformArn">parsePlatformArn</a></code> | Parses a platform ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseSolutionstackArn">parseSolutionstackArn</a></code> | Parses a solutionstack ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.platform">platform</a></code> | Builds an ARN for the platform resource. |
| <code><a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.solutionstack">solutionstack</a></code> | Builds an ARN for the solutionstack resource. |

---

##### `application` <a name="application" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.application"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.application(props: ElasticBeanstalkApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationArnProps">ElasticBeanstalkApplicationArnProps</a>

---

##### `applicationversion` <a name="applicationversion" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.applicationversion"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.applicationversion(props: ElasticBeanstalkApplicationversionArnProps)
```

Builds an ARN for the applicationversion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.applicationversion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkApplicationversionArnProps">ElasticBeanstalkApplicationversionArnProps</a>

---

##### `configurationtemplate` <a name="configurationtemplate" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.configurationtemplate"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.configurationtemplate(props: ElasticBeanstalkConfigurationtemplateArnProps)
```

Builds an ARN for the configurationtemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.configurationtemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkConfigurationtemplateArnProps">ElasticBeanstalkConfigurationtemplateArnProps</a>

---

##### `environment` <a name="environment" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.environment"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.environment(props: ElasticBeanstalkEnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkEnvironmentArnProps">ElasticBeanstalkEnvironmentArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidApplicationArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApplicationversionArn` <a name="isValidApplicationversionArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidApplicationversionArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.isValidApplicationversionArn(arn: string)
```

Validates whether a string is a valid ARN for the applicationversion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidApplicationversionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigurationtemplateArn` <a name="isValidConfigurationtemplateArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidConfigurationtemplateArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.isValidConfigurationtemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the configurationtemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidConfigurationtemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidEnvironmentArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPlatformArn` <a name="isValidPlatformArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidPlatformArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.isValidPlatformArn(arn: string)
```

Validates whether a string is a valid ARN for the platform resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidPlatformArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSolutionstackArn` <a name="isValidSolutionstackArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidSolutionstackArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.isValidSolutionstackArn(arn: string)
```

Validates whether a string is a valid ARN for the solutionstack resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.isValidSolutionstackArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseApplicationArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationversionArn` <a name="parseApplicationversionArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseApplicationversionArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.parseApplicationversionArn(arn: string)
```

Parses a applicationversion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseApplicationversionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationtemplateArn` <a name="parseConfigurationtemplateArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseConfigurationtemplateArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.parseConfigurationtemplateArn(arn: string)
```

Parses a configurationtemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseConfigurationtemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseEnvironmentArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePlatformArn` <a name="parsePlatformArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parsePlatformArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.parsePlatformArn(arn: string)
```

Parses a platform ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parsePlatformArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSolutionstackArn` <a name="parseSolutionstackArn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseSolutionstackArn"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.parseSolutionstackArn(arn: string)
```

Parses a solutionstack ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.parseSolutionstackArn.parameter.arn"></a>

- *Type:* string

---

##### `platform` <a name="platform" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.platform"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.platform(props: ElasticBeanstalkPlatformArnProps)
```

Builds an ARN for the platform resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.platform.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkPlatformArnProps">ElasticBeanstalkPlatformArnProps</a>

---

##### `solutionstack` <a name="solutionstack" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.solutionstack"></a>

```typescript
import { elasticbeanstalk } from '@cdk_utils/iam'

elasticbeanstalk.ElasticBeanstalkResources.solutionstack(props: ElasticBeanstalkSolutionstackArnProps)
```

Builds an ARN for the solutionstack resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkResources.solutionstack.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticbeanstalk.ElasticBeanstalkSolutionstackArnProps">ElasticBeanstalkSolutionstackArnProps</a>

---




