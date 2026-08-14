# `dms` Submodule <a name="`dms` Submodule" id="@cdk_utils/iam.dms"></a>


## Structs <a name="Structs" id="Structs"></a>

### DmsCertificateArnComponents <a name="DmsCertificateArnComponents" id="@cdk_utils/iam.dms.DmsCertificateArnComponents"></a>

Parsed components of a Certificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsCertificateArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsCertificateArnComponents: dms.DmsCertificateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsCertificateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsCertificateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsCertificateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsCertificateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsCertificateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsCertificateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsCertificateArnProps <a name="DmsCertificateArnProps" id="@cdk_utils/iam.dms.DmsCertificateArnProps"></a>

Properties for building a Certificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsCertificateArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsCertificateArnProps: dms.DmsCertificateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsCertificateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsCertificateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsCertificateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsCertificateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsCertificateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsCertificateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsDataMigrationArnComponents <a name="DmsDataMigrationArnComponents" id="@cdk_utils/iam.dms.DmsDataMigrationArnComponents"></a>

Parsed components of a DataMigration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsDataMigrationArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsDataMigrationArnComponents: dms.DmsDataMigrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsDataMigrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsDataMigrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsDataMigrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsDataMigrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsDataMigrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsDataMigrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsDataMigrationArnProps <a name="DmsDataMigrationArnProps" id="@cdk_utils/iam.dms.DmsDataMigrationArnProps"></a>

Properties for building a DataMigration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsDataMigrationArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsDataMigrationArnProps: dms.DmsDataMigrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsDataMigrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsDataMigrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsDataMigrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsDataMigrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsDataMigrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsDataMigrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsDataProviderArnComponents <a name="DmsDataProviderArnComponents" id="@cdk_utils/iam.dms.DmsDataProviderArnComponents"></a>

Parsed components of a DataProvider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsDataProviderArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsDataProviderArnComponents: dms.DmsDataProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsDataProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsDataProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsDataProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsDataProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsDataProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsDataProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsDataProviderArnProps <a name="DmsDataProviderArnProps" id="@cdk_utils/iam.dms.DmsDataProviderArnProps"></a>

Properties for building a DataProvider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsDataProviderArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsDataProviderArnProps: dms.DmsDataProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsDataProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsDataProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsDataProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsDataProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsDataProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsDataProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsEndpointArnComponents <a name="DmsEndpointArnComponents" id="@cdk_utils/iam.dms.DmsEndpointArnComponents"></a>

Parsed components of a Endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsEndpointArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsEndpointArnComponents: dms.DmsEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsEndpointArnProps <a name="DmsEndpointArnProps" id="@cdk_utils/iam.dms.DmsEndpointArnProps"></a>

Properties for building a Endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsEndpointArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsEndpointArnProps: dms.DmsEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsEventSubscriptionArnComponents <a name="DmsEventSubscriptionArnComponents" id="@cdk_utils/iam.dms.DmsEventSubscriptionArnComponents"></a>

Parsed components of a EventSubscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsEventSubscriptionArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsEventSubscriptionArnComponents: dms.DmsEventSubscriptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsEventSubscriptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsEventSubscriptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsEventSubscriptionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsEventSubscriptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsEventSubscriptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsEventSubscriptionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsEventSubscriptionArnProps <a name="DmsEventSubscriptionArnProps" id="@cdk_utils/iam.dms.DmsEventSubscriptionArnProps"></a>

Properties for building a EventSubscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsEventSubscriptionArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsEventSubscriptionArnProps: dms.DmsEventSubscriptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsEventSubscriptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsEventSubscriptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsEventSubscriptionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsEventSubscriptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsEventSubscriptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsEventSubscriptionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsInstanceProfileArnComponents <a name="DmsInstanceProfileArnComponents" id="@cdk_utils/iam.dms.DmsInstanceProfileArnComponents"></a>

Parsed components of a InstanceProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsInstanceProfileArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsInstanceProfileArnComponents: dms.DmsInstanceProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsInstanceProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsInstanceProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsInstanceProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsInstanceProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsInstanceProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsInstanceProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsInstanceProfileArnProps <a name="DmsInstanceProfileArnProps" id="@cdk_utils/iam.dms.DmsInstanceProfileArnProps"></a>

Properties for building a InstanceProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsInstanceProfileArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsInstanceProfileArnProps: dms.DmsInstanceProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsInstanceProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsInstanceProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsInstanceProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsInstanceProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsInstanceProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsInstanceProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsMigrationProjectArnComponents <a name="DmsMigrationProjectArnComponents" id="@cdk_utils/iam.dms.DmsMigrationProjectArnComponents"></a>

Parsed components of a MigrationProject ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsMigrationProjectArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsMigrationProjectArnComponents: dms.DmsMigrationProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsMigrationProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsMigrationProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsMigrationProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsMigrationProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsMigrationProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsMigrationProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsMigrationProjectArnProps <a name="DmsMigrationProjectArnProps" id="@cdk_utils/iam.dms.DmsMigrationProjectArnProps"></a>

Properties for building a MigrationProject ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsMigrationProjectArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsMigrationProjectArnProps: dms.DmsMigrationProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsMigrationProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsMigrationProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsMigrationProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsMigrationProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsMigrationProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsMigrationProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsReplicationConfigArnComponents <a name="DmsReplicationConfigArnComponents" id="@cdk_utils/iam.dms.DmsReplicationConfigArnComponents"></a>

Parsed components of a ReplicationConfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationConfigArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationConfigArnComponents: dms.DmsReplicationConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationConfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationConfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsReplicationConfigArnProps <a name="DmsReplicationConfigArnProps" id="@cdk_utils/iam.dms.DmsReplicationConfigArnProps"></a>

Properties for building a ReplicationConfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationConfigArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationConfigArnProps: dms.DmsReplicationConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationConfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationConfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsReplicationInstanceArnComponents <a name="DmsReplicationInstanceArnComponents" id="@cdk_utils/iam.dms.DmsReplicationInstanceArnComponents"></a>

Parsed components of a ReplicationInstance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationInstanceArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationInstanceArnComponents: dms.DmsReplicationInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsReplicationInstanceArnProps <a name="DmsReplicationInstanceArnProps" id="@cdk_utils/iam.dms.DmsReplicationInstanceArnProps"></a>

Properties for building a ReplicationInstance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationInstanceArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationInstanceArnProps: dms.DmsReplicationInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsReplicationSubnetGroupArnComponents <a name="DmsReplicationSubnetGroupArnComponents" id="@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnComponents"></a>

Parsed components of a ReplicationSubnetGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationSubnetGroupArnComponents: dms.DmsReplicationSubnetGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsReplicationSubnetGroupArnProps <a name="DmsReplicationSubnetGroupArnProps" id="@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnProps"></a>

Properties for building a ReplicationSubnetGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationSubnetGroupArnProps: dms.DmsReplicationSubnetGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsReplicationTaskArnComponents <a name="DmsReplicationTaskArnComponents" id="@cdk_utils/iam.dms.DmsReplicationTaskArnComponents"></a>

Parsed components of a ReplicationTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationTaskArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationTaskArnComponents: dms.DmsReplicationTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsReplicationTaskArnProps <a name="DmsReplicationTaskArnProps" id="@cdk_utils/iam.dms.DmsReplicationTaskArnProps"></a>

Properties for building a ReplicationTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationTaskArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationTaskArnProps: dms.DmsReplicationTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsReplicationTaskAssessmentRunArnComponents <a name="DmsReplicationTaskAssessmentRunArnComponents" id="@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnComponents"></a>

Parsed components of a ReplicationTaskAssessmentRun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationTaskAssessmentRunArnComponents: dms.DmsReplicationTaskAssessmentRunArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsReplicationTaskAssessmentRunArnProps <a name="DmsReplicationTaskAssessmentRunArnProps" id="@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnProps"></a>

Properties for building a ReplicationTaskAssessmentRun ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationTaskAssessmentRunArnProps: dms.DmsReplicationTaskAssessmentRunArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DmsReplicationTaskIndividualAssessmentArnComponents <a name="DmsReplicationTaskIndividualAssessmentArnComponents" id="@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnComponents"></a>

Parsed components of a ReplicationTaskIndividualAssessment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnComponents.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationTaskIndividualAssessmentArnComponents: dms.DmsReplicationTaskIndividualAssessmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DmsReplicationTaskIndividualAssessmentArnProps <a name="DmsReplicationTaskIndividualAssessmentArnProps" id="@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnProps"></a>

Properties for building a ReplicationTaskIndividualAssessment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnProps.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

const dmsReplicationTaskIndividualAssessmentArnProps: dms.DmsReplicationTaskIndividualAssessmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DmsActions <a name="DmsActions" id="@cdk_utils/iam.dms.DmsActions"></a>

IAM action constants for the dms service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dms.DmsActions.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

new dms.DmsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.actionGetMetadataModel">actionGetMetadataModel</a></code> | <code>string</code> | [Read] dms:GetMetadataModel. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.actionGetTargetSelectionRules">actionGetTargetSelectionRules</a></code> | <code>string</code> | [Read] dms:GetTargetSelectionRules. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string</code> | [Tagging] dms:AddTagsToResource. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ApplyPendingMaintenanceAction">ApplyPendingMaintenanceAction</a></code> | <code>string</code> | [Write] dms:ApplyPendingMaintenanceAction. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.AssociateExtensionPack">AssociateExtensionPack</a></code> | <code>string</code> | [Write] dms:AssociateExtensionPack. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.BatchStartRecommendations">BatchStartRecommendations</a></code> | <code>string</code> | [Write] dms:BatchStartRecommendations. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CancelMetadataModelConversion">CancelMetadataModelConversion</a></code> | <code>string</code> | [Write] dms:CancelMetadataModelConversion. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CancelMetadataModelCreation">CancelMetadataModelCreation</a></code> | <code>string</code> | [Write] dms:CancelMetadataModelCreation. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CancelReplicationTaskAssessmentRun">CancelReplicationTaskAssessmentRun</a></code> | <code>string</code> | [Write] dms:CancelReplicationTaskAssessmentRun. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateDataMigration">CreateDataMigration</a></code> | <code>string</code> | [Write] dms:CreateDataMigration. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateDataProvider">CreateDataProvider</a></code> | <code>string</code> | [Write] dms:CreateDataProvider. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateEndpoint">CreateEndpoint</a></code> | <code>string</code> | [Write] dms:CreateEndpoint. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateEventSubscription">CreateEventSubscription</a></code> | <code>string</code> | [Write] dms:CreateEventSubscription. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateFleetAdvisorCollector">CreateFleetAdvisorCollector</a></code> | <code>string</code> | [Write] dms:CreateFleetAdvisorCollector. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateInstanceProfile">CreateInstanceProfile</a></code> | <code>string</code> | [Write] dms:CreateInstanceProfile. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateMigrationProject">CreateMigrationProject</a></code> | <code>string</code> | [Write] dms:CreateMigrationProject. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateOutboundIntegration">CreateOutboundIntegration</a></code> | <code>string</code> | [Write] dms:CreateOutboundIntegration. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateReplicationConfig">CreateReplicationConfig</a></code> | <code>string</code> | [Write] dms:CreateReplicationConfig. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateReplicationInstance">CreateReplicationInstance</a></code> | <code>string</code> | [Write] dms:CreateReplicationInstance. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateReplicationSubnetGroup">CreateReplicationSubnetGroup</a></code> | <code>string</code> | [Write] dms:CreateReplicationSubnetGroup. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.CreateReplicationTask">CreateReplicationTask</a></code> | <code>string</code> | [Write] dms:CreateReplicationTask. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteCertificate">DeleteCertificate</a></code> | <code>string</code> | [Write] dms:DeleteCertificate. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] dms:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteDataMigration">DeleteDataMigration</a></code> | <code>string</code> | [Write] dms:DeleteDataMigration. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteDataProvider">DeleteDataProvider</a></code> | <code>string</code> | [Write] dms:DeleteDataProvider. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string</code> | [Write] dms:DeleteEndpoint. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteEventSubscription">DeleteEventSubscription</a></code> | <code>string</code> | [Write] dms:DeleteEventSubscription. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteFleetAdvisorCollector">DeleteFleetAdvisorCollector</a></code> | <code>string</code> | [Write] dms:DeleteFleetAdvisorCollector. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteFleetAdvisorDatabases">DeleteFleetAdvisorDatabases</a></code> | <code>string</code> | [Write] dms:DeleteFleetAdvisorDatabases. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteInstanceProfile">DeleteInstanceProfile</a></code> | <code>string</code> | [Write] dms:DeleteInstanceProfile. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteMigrationProject">DeleteMigrationProject</a></code> | <code>string</code> | [Write] dms:DeleteMigrationProject. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteReplicationConfig">DeleteReplicationConfig</a></code> | <code>string</code> | [Write] dms:DeleteReplicationConfig. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteReplicationInstance">DeleteReplicationInstance</a></code> | <code>string</code> | [Write] dms:DeleteReplicationInstance. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteReplicationSubnetGroup">DeleteReplicationSubnetGroup</a></code> | <code>string</code> | [Write] dms:DeleteReplicationSubnetGroup. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteReplicationTask">DeleteReplicationTask</a></code> | <code>string</code> | [Write] dms:DeleteReplicationTask. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DeleteReplicationTaskAssessmentRun">DeleteReplicationTaskAssessmentRun</a></code> | <code>string</code> | [Write] dms:DeleteReplicationTaskAssessmentRun. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeAccountAttributes">DescribeAccountAttributes</a></code> | <code>string</code> | [Read] dms:DescribeAccountAttributes. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeApplicableIndividualAssessments">DescribeApplicableIndividualAssessments</a></code> | <code>string</code> | [Read] dms:DescribeApplicableIndividualAssessments. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeCertificates">DescribeCertificates</a></code> | <code>string</code> | [Read] dms:DescribeCertificates. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeConnections">DescribeConnections</a></code> | <code>string</code> | [Read] dms:DescribeConnections. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeConversionConfiguration">DescribeConversionConfiguration</a></code> | <code>string</code> | [Read] dms:DescribeConversionConfiguration. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeDataMigrations">DescribeDataMigrations</a></code> | <code>string</code> | [Read] dms:DescribeDataMigrations. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeEndpoints">DescribeEndpoints</a></code> | <code>string</code> | [Read] dms:DescribeEndpoints. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeEndpointSettings">DescribeEndpointSettings</a></code> | <code>string</code> | [Read] dms:DescribeEndpointSettings. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeEndpointTypes">DescribeEndpointTypes</a></code> | <code>string</code> | [Read] dms:DescribeEndpointTypes. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeEngineVersions">DescribeEngineVersions</a></code> | <code>string</code> | [Read] dms:DescribeEngineVersions. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeEventCategories">DescribeEventCategories</a></code> | <code>string</code> | [Read] dms:DescribeEventCategories. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeEvents">DescribeEvents</a></code> | <code>string</code> | [Read] dms:DescribeEvents. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeEventSubscriptions">DescribeEventSubscriptions</a></code> | <code>string</code> | [Read] dms:DescribeEventSubscriptions. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeFleetAdvisorCollectors">DescribeFleetAdvisorCollectors</a></code> | <code>string</code> | [Read] dms:DescribeFleetAdvisorCollectors. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeFleetAdvisorDatabases">DescribeFleetAdvisorDatabases</a></code> | <code>string</code> | [Read] dms:DescribeFleetAdvisorDatabases. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeFleetAdvisorLsaAnalysis">DescribeFleetAdvisorLsaAnalysis</a></code> | <code>string</code> | [Read] dms:DescribeFleetAdvisorLsaAnalysis. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeFleetAdvisorSchemaObjectSummary">DescribeFleetAdvisorSchemaObjectSummary</a></code> | <code>string</code> | [Read] dms:DescribeFleetAdvisorSchemaObjectSummary. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeFleetAdvisorSchemas">DescribeFleetAdvisorSchemas</a></code> | <code>string</code> | [Read] dms:DescribeFleetAdvisorSchemas. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeMetadataModel">DescribeMetadataModel</a></code> | <code>string</code> | [Read] dms:DescribeMetadataModel. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeMetadataModelChildren">DescribeMetadataModelChildren</a></code> | <code>string</code> | [Read] dms:DescribeMetadataModelChildren. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeMetadataModelCreations">DescribeMetadataModelCreations</a></code> | <code>string</code> | [Read] dms:DescribeMetadataModelCreations. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeMetadataModelImports">DescribeMetadataModelImports</a></code> | <code>string</code> | [Read] dms:DescribeMetadataModelImports. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeOrderableReplicationInstances">DescribeOrderableReplicationInstances</a></code> | <code>string</code> | [Read] dms:DescribeOrderableReplicationInstances. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribePendingMaintenanceActions">DescribePendingMaintenanceActions</a></code> | <code>string</code> | [Read] dms:DescribePendingMaintenanceActions. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeRecommendationLimitations">DescribeRecommendationLimitations</a></code> | <code>string</code> | [Read] dms:DescribeRecommendationLimitations. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeRecommendations">DescribeRecommendations</a></code> | <code>string</code> | [Read] dms:DescribeRecommendations. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeRefreshSchemasStatus">DescribeRefreshSchemasStatus</a></code> | <code>string</code> | [Read] dms:DescribeRefreshSchemasStatus. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationConfigs">DescribeReplicationConfigs</a></code> | <code>string</code> | [Read] dms:DescribeReplicationConfigs. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationInstances">DescribeReplicationInstances</a></code> | <code>string</code> | [Read] dms:DescribeReplicationInstances. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationInstanceTaskLogs">DescribeReplicationInstanceTaskLogs</a></code> | <code>string</code> | [Read] dms:DescribeReplicationInstanceTaskLogs. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeReplications">DescribeReplications</a></code> | <code>string</code> | [Read] dms:DescribeReplications. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationSubnetGroups">DescribeReplicationSubnetGroups</a></code> | <code>string</code> | [Read] dms:DescribeReplicationSubnetGroups. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationTableStatistics">DescribeReplicationTableStatistics</a></code> | <code>string</code> | [Read] dms:DescribeReplicationTableStatistics. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationTaskAssessmentResults">DescribeReplicationTaskAssessmentResults</a></code> | <code>string</code> | [Read] dms:DescribeReplicationTaskAssessmentResults. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationTaskAssessmentRuns">DescribeReplicationTaskAssessmentRuns</a></code> | <code>string</code> | [Read] dms:DescribeReplicationTaskAssessmentRuns. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationTaskIndividualAssessments">DescribeReplicationTaskIndividualAssessments</a></code> | <code>string</code> | [Read] dms:DescribeReplicationTaskIndividualAssessments. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationTasks">DescribeReplicationTasks</a></code> | <code>string</code> | [Read] dms:DescribeReplicationTasks. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeSchemas">DescribeSchemas</a></code> | <code>string</code> | [Read] dms:DescribeSchemas. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.DescribeTableStatistics">DescribeTableStatistics</a></code> | <code>string</code> | [Read] dms:DescribeTableStatistics. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ExportMetadataModelAssessment">ExportMetadataModelAssessment</a></code> | <code>string</code> | [Write] dms:ExportMetadataModelAssessment. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ImportCertificate">ImportCertificate</a></code> | <code>string</code> | [Write] dms:ImportCertificate. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ListDataProviders">ListDataProviders</a></code> | <code>string</code> | [Read] dms:ListDataProviders. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ListExtensionPacks">ListExtensionPacks</a></code> | <code>string</code> | [Read] dms:ListExtensionPacks. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ListInstanceProfiles">ListInstanceProfiles</a></code> | <code>string</code> | [Read] dms:ListInstanceProfiles. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ListMetadataModelAssessmentActionItems">ListMetadataModelAssessmentActionItems</a></code> | <code>string</code> | [Read] dms:ListMetadataModelAssessmentActionItems. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ListMetadataModelAssessments">ListMetadataModelAssessments</a></code> | <code>string</code> | [Read] dms:ListMetadataModelAssessments. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ListMetadataModelConversions">ListMetadataModelConversions</a></code> | <code>string</code> | [Read] dms:ListMetadataModelConversions. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ListMetadataModelExports">ListMetadataModelExports</a></code> | <code>string</code> | [Read] dms:ListMetadataModelExports. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ListMigrationProjects">ListMigrationProjects</a></code> | <code>string</code> | [Read] dms:ListMigrationProjects. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] dms:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ModifyDataMigration">ModifyDataMigration</a></code> | <code>string</code> | [Write] dms:ModifyDataMigration. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ModifyEndpoint">ModifyEndpoint</a></code> | <code>string</code> | [Write] dms:ModifyEndpoint. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ModifyEventSubscription">ModifyEventSubscription</a></code> | <code>string</code> | [Write] dms:ModifyEventSubscription. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ModifyFleetAdvisorCollector">ModifyFleetAdvisorCollector</a></code> | <code>string</code> | [Write] dms:ModifyFleetAdvisorCollector. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ModifyFleetAdvisorCollectorStatuses">ModifyFleetAdvisorCollectorStatuses</a></code> | <code>string</code> | [Write] dms:ModifyFleetAdvisorCollectorStatuses. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ModifyOutboundIntegration">ModifyOutboundIntegration</a></code> | <code>string</code> | [Write] dms:ModifyOutboundIntegration. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ModifyReplicationConfig">ModifyReplicationConfig</a></code> | <code>string</code> | [Write] dms:ModifyReplicationConfig. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ModifyReplicationInstance">ModifyReplicationInstance</a></code> | <code>string</code> | [Write] dms:ModifyReplicationInstance. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ModifyReplicationSubnetGroup">ModifyReplicationSubnetGroup</a></code> | <code>string</code> | [Write] dms:ModifyReplicationSubnetGroup. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ModifyReplicationTask">ModifyReplicationTask</a></code> | <code>string</code> | [Write] dms:ModifyReplicationTask. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.MoveReplicationTask">MoveReplicationTask</a></code> | <code>string</code> | [Write] dms:MoveReplicationTask. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.RebootReplicationInstance">RebootReplicationInstance</a></code> | <code>string</code> | [Write] dms:RebootReplicationInstance. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.RefreshSchemas">RefreshSchemas</a></code> | <code>string</code> | [Write] dms:RefreshSchemas. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ReloadReplicationTables">ReloadReplicationTables</a></code> | <code>string</code> | [Write] dms:ReloadReplicationTables. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.ReloadTables">ReloadTables</a></code> | <code>string</code> | [Write] dms:ReloadTables. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string</code> | [Tagging] dms:RemoveTagsFromResource. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.RunFleetAdvisorLsaAnalysis">RunFleetAdvisorLsaAnalysis</a></code> | <code>string</code> | [Write] dms:RunFleetAdvisorLsaAnalysis. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartDataMigration">StartDataMigration</a></code> | <code>string</code> | [Write] dms:StartDataMigration. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelAssessment">StartMetadataModelAssessment</a></code> | <code>string</code> | [Write] dms:StartMetadataModelAssessment. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelConversion">StartMetadataModelConversion</a></code> | <code>string</code> | [Write] dms:StartMetadataModelConversion. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelCreation">StartMetadataModelCreation</a></code> | <code>string</code> | [Write] dms:StartMetadataModelCreation. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelExportAsScripts">StartMetadataModelExportAsScripts</a></code> | <code>string</code> | [Write] dms:StartMetadataModelExportAsScripts. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelExportToTarget">StartMetadataModelExportToTarget</a></code> | <code>string</code> | [Write] dms:StartMetadataModelExportToTarget. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelImport">StartMetadataModelImport</a></code> | <code>string</code> | [Write] dms:StartMetadataModelImport. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartRecommendations">StartRecommendations</a></code> | <code>string</code> | [Write] dms:StartRecommendations. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartReplication">StartReplication</a></code> | <code>string</code> | [Write] dms:StartReplication. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartReplicationTask">StartReplicationTask</a></code> | <code>string</code> | [Write] dms:StartReplicationTask. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartReplicationTaskAssessment">StartReplicationTaskAssessment</a></code> | <code>string</code> | [Write] dms:StartReplicationTaskAssessment. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StartReplicationTaskAssessmentRun">StartReplicationTaskAssessmentRun</a></code> | <code>string</code> | [Write] dms:StartReplicationTaskAssessmentRun. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StopDataMigration">StopDataMigration</a></code> | <code>string</code> | [Write] dms:StopDataMigration. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StopReplication">StopReplication</a></code> | <code>string</code> | [Write] dms:StopReplication. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.StopReplicationTask">StopReplicationTask</a></code> | <code>string</code> | [Write] dms:StopReplicationTask. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.TestConnection">TestConnection</a></code> | <code>string</code> | [Read] dms:TestConnection. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.UpdateConversionConfiguration">UpdateConversionConfiguration</a></code> | <code>string</code> | [Write] dms:UpdateConversionConfiguration. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.UpdateDataProvider">UpdateDataProvider</a></code> | <code>string</code> | [Write] dms:UpdateDataProvider. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.UpdateInstanceProfile">UpdateInstanceProfile</a></code> | <code>string</code> | [Write] dms:UpdateInstanceProfile. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.UpdateMigrationProject">UpdateMigrationProject</a></code> | <code>string</code> | [Write] dms:UpdateMigrationProject. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.UpdateSubscriptionsToEventBridge">UpdateSubscriptionsToEventBridge</a></code> | <code>string</code> | [Write] dms:UpdateSubscriptionsToEventBridge. |
| <code><a href="#@cdk_utils/iam.dms.DmsActions.property.UploadFileMetadataList">UploadFileMetadataList</a></code> | <code>string</code> | [Write] dms:UploadFileMetadataList. |

---

##### `actionGetMetadataModel`<sup>Required</sup> <a name="actionGetMetadataModel" id="@cdk_utils/iam.dms.DmsActions.property.actionGetMetadataModel"></a>

```typescript
public readonly actionGetMetadataModel: string;
```

- *Type:* string

[Read] dms:GetMetadataModel.

---

##### `actionGetTargetSelectionRules`<sup>Required</sup> <a name="actionGetTargetSelectionRules" id="@cdk_utils/iam.dms.DmsActions.property.actionGetTargetSelectionRules"></a>

```typescript
public readonly actionGetTargetSelectionRules: string;
```

- *Type:* string

[Read] dms:GetTargetSelectionRules.

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.dms.DmsActions.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string;
```

- *Type:* string

[Tagging] dms:AddTagsToResource.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.dms.DmsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.dms.DmsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.dms.DmsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.dms.DmsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.dms.DmsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApplyPendingMaintenanceAction`<sup>Required</sup> <a name="ApplyPendingMaintenanceAction" id="@cdk_utils/iam.dms.DmsActions.property.ApplyPendingMaintenanceAction"></a>

```typescript
public readonly ApplyPendingMaintenanceAction: string;
```

- *Type:* string

[Write] dms:ApplyPendingMaintenanceAction.

---

##### `AssociateExtensionPack`<sup>Required</sup> <a name="AssociateExtensionPack" id="@cdk_utils/iam.dms.DmsActions.property.AssociateExtensionPack"></a>

```typescript
public readonly AssociateExtensionPack: string;
```

- *Type:* string

[Write] dms:AssociateExtensionPack.

---

##### `BatchStartRecommendations`<sup>Required</sup> <a name="BatchStartRecommendations" id="@cdk_utils/iam.dms.DmsActions.property.BatchStartRecommendations"></a>

```typescript
public readonly BatchStartRecommendations: string;
```

- *Type:* string

[Write] dms:BatchStartRecommendations.

---

##### `CancelMetadataModelConversion`<sup>Required</sup> <a name="CancelMetadataModelConversion" id="@cdk_utils/iam.dms.DmsActions.property.CancelMetadataModelConversion"></a>

```typescript
public readonly CancelMetadataModelConversion: string;
```

- *Type:* string

[Write] dms:CancelMetadataModelConversion.

---

##### `CancelMetadataModelCreation`<sup>Required</sup> <a name="CancelMetadataModelCreation" id="@cdk_utils/iam.dms.DmsActions.property.CancelMetadataModelCreation"></a>

```typescript
public readonly CancelMetadataModelCreation: string;
```

- *Type:* string

[Write] dms:CancelMetadataModelCreation.

---

##### `CancelReplicationTaskAssessmentRun`<sup>Required</sup> <a name="CancelReplicationTaskAssessmentRun" id="@cdk_utils/iam.dms.DmsActions.property.CancelReplicationTaskAssessmentRun"></a>

```typescript
public readonly CancelReplicationTaskAssessmentRun: string;
```

- *Type:* string

[Write] dms:CancelReplicationTaskAssessmentRun.

---

##### `CreateDataMigration`<sup>Required</sup> <a name="CreateDataMigration" id="@cdk_utils/iam.dms.DmsActions.property.CreateDataMigration"></a>

```typescript
public readonly CreateDataMigration: string;
```

- *Type:* string

[Write] dms:CreateDataMigration.

---

##### `CreateDataProvider`<sup>Required</sup> <a name="CreateDataProvider" id="@cdk_utils/iam.dms.DmsActions.property.CreateDataProvider"></a>

```typescript
public readonly CreateDataProvider: string;
```

- *Type:* string

[Write] dms:CreateDataProvider.

---

##### `CreateEndpoint`<sup>Required</sup> <a name="CreateEndpoint" id="@cdk_utils/iam.dms.DmsActions.property.CreateEndpoint"></a>

```typescript
public readonly CreateEndpoint: string;
```

- *Type:* string

[Write] dms:CreateEndpoint.

---

##### `CreateEventSubscription`<sup>Required</sup> <a name="CreateEventSubscription" id="@cdk_utils/iam.dms.DmsActions.property.CreateEventSubscription"></a>

```typescript
public readonly CreateEventSubscription: string;
```

- *Type:* string

[Write] dms:CreateEventSubscription.

---

##### `CreateFleetAdvisorCollector`<sup>Required</sup> <a name="CreateFleetAdvisorCollector" id="@cdk_utils/iam.dms.DmsActions.property.CreateFleetAdvisorCollector"></a>

```typescript
public readonly CreateFleetAdvisorCollector: string;
```

- *Type:* string

[Write] dms:CreateFleetAdvisorCollector.

---

##### `CreateInstanceProfile`<sup>Required</sup> <a name="CreateInstanceProfile" id="@cdk_utils/iam.dms.DmsActions.property.CreateInstanceProfile"></a>

```typescript
public readonly CreateInstanceProfile: string;
```

- *Type:* string

[Write] dms:CreateInstanceProfile.

---

##### `CreateMigrationProject`<sup>Required</sup> <a name="CreateMigrationProject" id="@cdk_utils/iam.dms.DmsActions.property.CreateMigrationProject"></a>

```typescript
public readonly CreateMigrationProject: string;
```

- *Type:* string

[Write] dms:CreateMigrationProject.

---

##### `CreateOutboundIntegration`<sup>Required</sup> <a name="CreateOutboundIntegration" id="@cdk_utils/iam.dms.DmsActions.property.CreateOutboundIntegration"></a>

```typescript
public readonly CreateOutboundIntegration: string;
```

- *Type:* string

[Write] dms:CreateOutboundIntegration.

---

##### `CreateReplicationConfig`<sup>Required</sup> <a name="CreateReplicationConfig" id="@cdk_utils/iam.dms.DmsActions.property.CreateReplicationConfig"></a>

```typescript
public readonly CreateReplicationConfig: string;
```

- *Type:* string

[Write] dms:CreateReplicationConfig.

---

##### `CreateReplicationInstance`<sup>Required</sup> <a name="CreateReplicationInstance" id="@cdk_utils/iam.dms.DmsActions.property.CreateReplicationInstance"></a>

```typescript
public readonly CreateReplicationInstance: string;
```

- *Type:* string

[Write] dms:CreateReplicationInstance.

---

##### `CreateReplicationSubnetGroup`<sup>Required</sup> <a name="CreateReplicationSubnetGroup" id="@cdk_utils/iam.dms.DmsActions.property.CreateReplicationSubnetGroup"></a>

```typescript
public readonly CreateReplicationSubnetGroup: string;
```

- *Type:* string

[Write] dms:CreateReplicationSubnetGroup.

---

##### `CreateReplicationTask`<sup>Required</sup> <a name="CreateReplicationTask" id="@cdk_utils/iam.dms.DmsActions.property.CreateReplicationTask"></a>

```typescript
public readonly CreateReplicationTask: string;
```

- *Type:* string

[Write] dms:CreateReplicationTask.

---

##### `DeleteCertificate`<sup>Required</sup> <a name="DeleteCertificate" id="@cdk_utils/iam.dms.DmsActions.property.DeleteCertificate"></a>

```typescript
public readonly DeleteCertificate: string;
```

- *Type:* string

[Write] dms:DeleteCertificate.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.dms.DmsActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] dms:DeleteConnection.

---

##### `DeleteDataMigration`<sup>Required</sup> <a name="DeleteDataMigration" id="@cdk_utils/iam.dms.DmsActions.property.DeleteDataMigration"></a>

```typescript
public readonly DeleteDataMigration: string;
```

- *Type:* string

[Write] dms:DeleteDataMigration.

---

##### `DeleteDataProvider`<sup>Required</sup> <a name="DeleteDataProvider" id="@cdk_utils/iam.dms.DmsActions.property.DeleteDataProvider"></a>

```typescript
public readonly DeleteDataProvider: string;
```

- *Type:* string

[Write] dms:DeleteDataProvider.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.dms.DmsActions.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string;
```

- *Type:* string

[Write] dms:DeleteEndpoint.

---

##### `DeleteEventSubscription`<sup>Required</sup> <a name="DeleteEventSubscription" id="@cdk_utils/iam.dms.DmsActions.property.DeleteEventSubscription"></a>

```typescript
public readonly DeleteEventSubscription: string;
```

- *Type:* string

[Write] dms:DeleteEventSubscription.

---

##### `DeleteFleetAdvisorCollector`<sup>Required</sup> <a name="DeleteFleetAdvisorCollector" id="@cdk_utils/iam.dms.DmsActions.property.DeleteFleetAdvisorCollector"></a>

```typescript
public readonly DeleteFleetAdvisorCollector: string;
```

- *Type:* string

[Write] dms:DeleteFleetAdvisorCollector.

---

##### `DeleteFleetAdvisorDatabases`<sup>Required</sup> <a name="DeleteFleetAdvisorDatabases" id="@cdk_utils/iam.dms.DmsActions.property.DeleteFleetAdvisorDatabases"></a>

```typescript
public readonly DeleteFleetAdvisorDatabases: string;
```

- *Type:* string

[Write] dms:DeleteFleetAdvisorDatabases.

---

##### `DeleteInstanceProfile`<sup>Required</sup> <a name="DeleteInstanceProfile" id="@cdk_utils/iam.dms.DmsActions.property.DeleteInstanceProfile"></a>

```typescript
public readonly DeleteInstanceProfile: string;
```

- *Type:* string

[Write] dms:DeleteInstanceProfile.

---

##### `DeleteMigrationProject`<sup>Required</sup> <a name="DeleteMigrationProject" id="@cdk_utils/iam.dms.DmsActions.property.DeleteMigrationProject"></a>

```typescript
public readonly DeleteMigrationProject: string;
```

- *Type:* string

[Write] dms:DeleteMigrationProject.

---

##### `DeleteReplicationConfig`<sup>Required</sup> <a name="DeleteReplicationConfig" id="@cdk_utils/iam.dms.DmsActions.property.DeleteReplicationConfig"></a>

```typescript
public readonly DeleteReplicationConfig: string;
```

- *Type:* string

[Write] dms:DeleteReplicationConfig.

---

##### `DeleteReplicationInstance`<sup>Required</sup> <a name="DeleteReplicationInstance" id="@cdk_utils/iam.dms.DmsActions.property.DeleteReplicationInstance"></a>

```typescript
public readonly DeleteReplicationInstance: string;
```

- *Type:* string

[Write] dms:DeleteReplicationInstance.

---

##### `DeleteReplicationSubnetGroup`<sup>Required</sup> <a name="DeleteReplicationSubnetGroup" id="@cdk_utils/iam.dms.DmsActions.property.DeleteReplicationSubnetGroup"></a>

```typescript
public readonly DeleteReplicationSubnetGroup: string;
```

- *Type:* string

[Write] dms:DeleteReplicationSubnetGroup.

---

##### `DeleteReplicationTask`<sup>Required</sup> <a name="DeleteReplicationTask" id="@cdk_utils/iam.dms.DmsActions.property.DeleteReplicationTask"></a>

```typescript
public readonly DeleteReplicationTask: string;
```

- *Type:* string

[Write] dms:DeleteReplicationTask.

---

##### `DeleteReplicationTaskAssessmentRun`<sup>Required</sup> <a name="DeleteReplicationTaskAssessmentRun" id="@cdk_utils/iam.dms.DmsActions.property.DeleteReplicationTaskAssessmentRun"></a>

```typescript
public readonly DeleteReplicationTaskAssessmentRun: string;
```

- *Type:* string

[Write] dms:DeleteReplicationTaskAssessmentRun.

---

##### `DescribeAccountAttributes`<sup>Required</sup> <a name="DescribeAccountAttributes" id="@cdk_utils/iam.dms.DmsActions.property.DescribeAccountAttributes"></a>

```typescript
public readonly DescribeAccountAttributes: string;
```

- *Type:* string

[Read] dms:DescribeAccountAttributes.

---

##### `DescribeApplicableIndividualAssessments`<sup>Required</sup> <a name="DescribeApplicableIndividualAssessments" id="@cdk_utils/iam.dms.DmsActions.property.DescribeApplicableIndividualAssessments"></a>

```typescript
public readonly DescribeApplicableIndividualAssessments: string;
```

- *Type:* string

[Read] dms:DescribeApplicableIndividualAssessments.

---

##### `DescribeCertificates`<sup>Required</sup> <a name="DescribeCertificates" id="@cdk_utils/iam.dms.DmsActions.property.DescribeCertificates"></a>

```typescript
public readonly DescribeCertificates: string;
```

- *Type:* string

[Read] dms:DescribeCertificates.

---

##### `DescribeConnections`<sup>Required</sup> <a name="DescribeConnections" id="@cdk_utils/iam.dms.DmsActions.property.DescribeConnections"></a>

```typescript
public readonly DescribeConnections: string;
```

- *Type:* string

[Read] dms:DescribeConnections.

---

##### `DescribeConversionConfiguration`<sup>Required</sup> <a name="DescribeConversionConfiguration" id="@cdk_utils/iam.dms.DmsActions.property.DescribeConversionConfiguration"></a>

```typescript
public readonly DescribeConversionConfiguration: string;
```

- *Type:* string

[Read] dms:DescribeConversionConfiguration.

---

##### `DescribeDataMigrations`<sup>Required</sup> <a name="DescribeDataMigrations" id="@cdk_utils/iam.dms.DmsActions.property.DescribeDataMigrations"></a>

```typescript
public readonly DescribeDataMigrations: string;
```

- *Type:* string

[Read] dms:DescribeDataMigrations.

---

##### `DescribeEndpoints`<sup>Required</sup> <a name="DescribeEndpoints" id="@cdk_utils/iam.dms.DmsActions.property.DescribeEndpoints"></a>

```typescript
public readonly DescribeEndpoints: string;
```

- *Type:* string

[Read] dms:DescribeEndpoints.

---

##### `DescribeEndpointSettings`<sup>Required</sup> <a name="DescribeEndpointSettings" id="@cdk_utils/iam.dms.DmsActions.property.DescribeEndpointSettings"></a>

```typescript
public readonly DescribeEndpointSettings: string;
```

- *Type:* string

[Read] dms:DescribeEndpointSettings.

---

##### `DescribeEndpointTypes`<sup>Required</sup> <a name="DescribeEndpointTypes" id="@cdk_utils/iam.dms.DmsActions.property.DescribeEndpointTypes"></a>

```typescript
public readonly DescribeEndpointTypes: string;
```

- *Type:* string

[Read] dms:DescribeEndpointTypes.

---

##### `DescribeEngineVersions`<sup>Required</sup> <a name="DescribeEngineVersions" id="@cdk_utils/iam.dms.DmsActions.property.DescribeEngineVersions"></a>

```typescript
public readonly DescribeEngineVersions: string;
```

- *Type:* string

[Read] dms:DescribeEngineVersions.

---

##### `DescribeEventCategories`<sup>Required</sup> <a name="DescribeEventCategories" id="@cdk_utils/iam.dms.DmsActions.property.DescribeEventCategories"></a>

```typescript
public readonly DescribeEventCategories: string;
```

- *Type:* string

[Read] dms:DescribeEventCategories.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.dms.DmsActions.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string;
```

- *Type:* string

[Read] dms:DescribeEvents.

---

##### `DescribeEventSubscriptions`<sup>Required</sup> <a name="DescribeEventSubscriptions" id="@cdk_utils/iam.dms.DmsActions.property.DescribeEventSubscriptions"></a>

```typescript
public readonly DescribeEventSubscriptions: string;
```

- *Type:* string

[Read] dms:DescribeEventSubscriptions.

---

##### `DescribeFleetAdvisorCollectors`<sup>Required</sup> <a name="DescribeFleetAdvisorCollectors" id="@cdk_utils/iam.dms.DmsActions.property.DescribeFleetAdvisorCollectors"></a>

```typescript
public readonly DescribeFleetAdvisorCollectors: string;
```

- *Type:* string

[Read] dms:DescribeFleetAdvisorCollectors.

---

##### `DescribeFleetAdvisorDatabases`<sup>Required</sup> <a name="DescribeFleetAdvisorDatabases" id="@cdk_utils/iam.dms.DmsActions.property.DescribeFleetAdvisorDatabases"></a>

```typescript
public readonly DescribeFleetAdvisorDatabases: string;
```

- *Type:* string

[Read] dms:DescribeFleetAdvisorDatabases.

---

##### `DescribeFleetAdvisorLsaAnalysis`<sup>Required</sup> <a name="DescribeFleetAdvisorLsaAnalysis" id="@cdk_utils/iam.dms.DmsActions.property.DescribeFleetAdvisorLsaAnalysis"></a>

```typescript
public readonly DescribeFleetAdvisorLsaAnalysis: string;
```

- *Type:* string

[Read] dms:DescribeFleetAdvisorLsaAnalysis.

---

##### `DescribeFleetAdvisorSchemaObjectSummary`<sup>Required</sup> <a name="DescribeFleetAdvisorSchemaObjectSummary" id="@cdk_utils/iam.dms.DmsActions.property.DescribeFleetAdvisorSchemaObjectSummary"></a>

```typescript
public readonly DescribeFleetAdvisorSchemaObjectSummary: string;
```

- *Type:* string

[Read] dms:DescribeFleetAdvisorSchemaObjectSummary.

---

##### `DescribeFleetAdvisorSchemas`<sup>Required</sup> <a name="DescribeFleetAdvisorSchemas" id="@cdk_utils/iam.dms.DmsActions.property.DescribeFleetAdvisorSchemas"></a>

```typescript
public readonly DescribeFleetAdvisorSchemas: string;
```

- *Type:* string

[Read] dms:DescribeFleetAdvisorSchemas.

---

##### `DescribeMetadataModel`<sup>Required</sup> <a name="DescribeMetadataModel" id="@cdk_utils/iam.dms.DmsActions.property.DescribeMetadataModel"></a>

```typescript
public readonly DescribeMetadataModel: string;
```

- *Type:* string

[Read] dms:DescribeMetadataModel.

---

##### `DescribeMetadataModelChildren`<sup>Required</sup> <a name="DescribeMetadataModelChildren" id="@cdk_utils/iam.dms.DmsActions.property.DescribeMetadataModelChildren"></a>

```typescript
public readonly DescribeMetadataModelChildren: string;
```

- *Type:* string

[Read] dms:DescribeMetadataModelChildren.

---

##### `DescribeMetadataModelCreations`<sup>Required</sup> <a name="DescribeMetadataModelCreations" id="@cdk_utils/iam.dms.DmsActions.property.DescribeMetadataModelCreations"></a>

```typescript
public readonly DescribeMetadataModelCreations: string;
```

- *Type:* string

[Read] dms:DescribeMetadataModelCreations.

---

##### `DescribeMetadataModelImports`<sup>Required</sup> <a name="DescribeMetadataModelImports" id="@cdk_utils/iam.dms.DmsActions.property.DescribeMetadataModelImports"></a>

```typescript
public readonly DescribeMetadataModelImports: string;
```

- *Type:* string

[Read] dms:DescribeMetadataModelImports.

---

##### `DescribeOrderableReplicationInstances`<sup>Required</sup> <a name="DescribeOrderableReplicationInstances" id="@cdk_utils/iam.dms.DmsActions.property.DescribeOrderableReplicationInstances"></a>

```typescript
public readonly DescribeOrderableReplicationInstances: string;
```

- *Type:* string

[Read] dms:DescribeOrderableReplicationInstances.

---

##### `DescribePendingMaintenanceActions`<sup>Required</sup> <a name="DescribePendingMaintenanceActions" id="@cdk_utils/iam.dms.DmsActions.property.DescribePendingMaintenanceActions"></a>

```typescript
public readonly DescribePendingMaintenanceActions: string;
```

- *Type:* string

[Read] dms:DescribePendingMaintenanceActions.

---

##### `DescribeRecommendationLimitations`<sup>Required</sup> <a name="DescribeRecommendationLimitations" id="@cdk_utils/iam.dms.DmsActions.property.DescribeRecommendationLimitations"></a>

```typescript
public readonly DescribeRecommendationLimitations: string;
```

- *Type:* string

[Read] dms:DescribeRecommendationLimitations.

---

##### `DescribeRecommendations`<sup>Required</sup> <a name="DescribeRecommendations" id="@cdk_utils/iam.dms.DmsActions.property.DescribeRecommendations"></a>

```typescript
public readonly DescribeRecommendations: string;
```

- *Type:* string

[Read] dms:DescribeRecommendations.

---

##### `DescribeRefreshSchemasStatus`<sup>Required</sup> <a name="DescribeRefreshSchemasStatus" id="@cdk_utils/iam.dms.DmsActions.property.DescribeRefreshSchemasStatus"></a>

```typescript
public readonly DescribeRefreshSchemasStatus: string;
```

- *Type:* string

[Read] dms:DescribeRefreshSchemasStatus.

---

##### `DescribeReplicationConfigs`<sup>Required</sup> <a name="DescribeReplicationConfigs" id="@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationConfigs"></a>

```typescript
public readonly DescribeReplicationConfigs: string;
```

- *Type:* string

[Read] dms:DescribeReplicationConfigs.

---

##### `DescribeReplicationInstances`<sup>Required</sup> <a name="DescribeReplicationInstances" id="@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationInstances"></a>

```typescript
public readonly DescribeReplicationInstances: string;
```

- *Type:* string

[Read] dms:DescribeReplicationInstances.

---

##### `DescribeReplicationInstanceTaskLogs`<sup>Required</sup> <a name="DescribeReplicationInstanceTaskLogs" id="@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationInstanceTaskLogs"></a>

```typescript
public readonly DescribeReplicationInstanceTaskLogs: string;
```

- *Type:* string

[Read] dms:DescribeReplicationInstanceTaskLogs.

---

##### `DescribeReplications`<sup>Required</sup> <a name="DescribeReplications" id="@cdk_utils/iam.dms.DmsActions.property.DescribeReplications"></a>

```typescript
public readonly DescribeReplications: string;
```

- *Type:* string

[Read] dms:DescribeReplications.

---

##### `DescribeReplicationSubnetGroups`<sup>Required</sup> <a name="DescribeReplicationSubnetGroups" id="@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationSubnetGroups"></a>

```typescript
public readonly DescribeReplicationSubnetGroups: string;
```

- *Type:* string

[Read] dms:DescribeReplicationSubnetGroups.

---

##### `DescribeReplicationTableStatistics`<sup>Required</sup> <a name="DescribeReplicationTableStatistics" id="@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationTableStatistics"></a>

```typescript
public readonly DescribeReplicationTableStatistics: string;
```

- *Type:* string

[Read] dms:DescribeReplicationTableStatistics.

---

##### `DescribeReplicationTaskAssessmentResults`<sup>Required</sup> <a name="DescribeReplicationTaskAssessmentResults" id="@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationTaskAssessmentResults"></a>

```typescript
public readonly DescribeReplicationTaskAssessmentResults: string;
```

- *Type:* string

[Read] dms:DescribeReplicationTaskAssessmentResults.

---

##### `DescribeReplicationTaskAssessmentRuns`<sup>Required</sup> <a name="DescribeReplicationTaskAssessmentRuns" id="@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationTaskAssessmentRuns"></a>

```typescript
public readonly DescribeReplicationTaskAssessmentRuns: string;
```

- *Type:* string

[Read] dms:DescribeReplicationTaskAssessmentRuns.

---

##### `DescribeReplicationTaskIndividualAssessments`<sup>Required</sup> <a name="DescribeReplicationTaskIndividualAssessments" id="@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationTaskIndividualAssessments"></a>

```typescript
public readonly DescribeReplicationTaskIndividualAssessments: string;
```

- *Type:* string

[Read] dms:DescribeReplicationTaskIndividualAssessments.

---

##### `DescribeReplicationTasks`<sup>Required</sup> <a name="DescribeReplicationTasks" id="@cdk_utils/iam.dms.DmsActions.property.DescribeReplicationTasks"></a>

```typescript
public readonly DescribeReplicationTasks: string;
```

- *Type:* string

[Read] dms:DescribeReplicationTasks.

---

##### `DescribeSchemas`<sup>Required</sup> <a name="DescribeSchemas" id="@cdk_utils/iam.dms.DmsActions.property.DescribeSchemas"></a>

```typescript
public readonly DescribeSchemas: string;
```

- *Type:* string

[Read] dms:DescribeSchemas.

---

##### `DescribeTableStatistics`<sup>Required</sup> <a name="DescribeTableStatistics" id="@cdk_utils/iam.dms.DmsActions.property.DescribeTableStatistics"></a>

```typescript
public readonly DescribeTableStatistics: string;
```

- *Type:* string

[Read] dms:DescribeTableStatistics.

---

##### `ExportMetadataModelAssessment`<sup>Required</sup> <a name="ExportMetadataModelAssessment" id="@cdk_utils/iam.dms.DmsActions.property.ExportMetadataModelAssessment"></a>

```typescript
public readonly ExportMetadataModelAssessment: string;
```

- *Type:* string

[Write] dms:ExportMetadataModelAssessment.

---

##### `ImportCertificate`<sup>Required</sup> <a name="ImportCertificate" id="@cdk_utils/iam.dms.DmsActions.property.ImportCertificate"></a>

```typescript
public readonly ImportCertificate: string;
```

- *Type:* string

[Write] dms:ImportCertificate.

---

##### `ListDataProviders`<sup>Required</sup> <a name="ListDataProviders" id="@cdk_utils/iam.dms.DmsActions.property.ListDataProviders"></a>

```typescript
public readonly ListDataProviders: string;
```

- *Type:* string

[Read] dms:ListDataProviders.

---

##### `ListExtensionPacks`<sup>Required</sup> <a name="ListExtensionPacks" id="@cdk_utils/iam.dms.DmsActions.property.ListExtensionPacks"></a>

```typescript
public readonly ListExtensionPacks: string;
```

- *Type:* string

[Read] dms:ListExtensionPacks.

---

##### `ListInstanceProfiles`<sup>Required</sup> <a name="ListInstanceProfiles" id="@cdk_utils/iam.dms.DmsActions.property.ListInstanceProfiles"></a>

```typescript
public readonly ListInstanceProfiles: string;
```

- *Type:* string

[Read] dms:ListInstanceProfiles.

---

##### `ListMetadataModelAssessmentActionItems`<sup>Required</sup> <a name="ListMetadataModelAssessmentActionItems" id="@cdk_utils/iam.dms.DmsActions.property.ListMetadataModelAssessmentActionItems"></a>

```typescript
public readonly ListMetadataModelAssessmentActionItems: string;
```

- *Type:* string

[Read] dms:ListMetadataModelAssessmentActionItems.

---

##### `ListMetadataModelAssessments`<sup>Required</sup> <a name="ListMetadataModelAssessments" id="@cdk_utils/iam.dms.DmsActions.property.ListMetadataModelAssessments"></a>

```typescript
public readonly ListMetadataModelAssessments: string;
```

- *Type:* string

[Read] dms:ListMetadataModelAssessments.

---

##### `ListMetadataModelConversions`<sup>Required</sup> <a name="ListMetadataModelConversions" id="@cdk_utils/iam.dms.DmsActions.property.ListMetadataModelConversions"></a>

```typescript
public readonly ListMetadataModelConversions: string;
```

- *Type:* string

[Read] dms:ListMetadataModelConversions.

---

##### `ListMetadataModelExports`<sup>Required</sup> <a name="ListMetadataModelExports" id="@cdk_utils/iam.dms.DmsActions.property.ListMetadataModelExports"></a>

```typescript
public readonly ListMetadataModelExports: string;
```

- *Type:* string

[Read] dms:ListMetadataModelExports.

---

##### `ListMigrationProjects`<sup>Required</sup> <a name="ListMigrationProjects" id="@cdk_utils/iam.dms.DmsActions.property.ListMigrationProjects"></a>

```typescript
public readonly ListMigrationProjects: string;
```

- *Type:* string

[Read] dms:ListMigrationProjects.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.dms.DmsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] dms:ListTagsForResource.

---

##### `ModifyDataMigration`<sup>Required</sup> <a name="ModifyDataMigration" id="@cdk_utils/iam.dms.DmsActions.property.ModifyDataMigration"></a>

```typescript
public readonly ModifyDataMigration: string;
```

- *Type:* string

[Write] dms:ModifyDataMigration.

---

##### `ModifyEndpoint`<sup>Required</sup> <a name="ModifyEndpoint" id="@cdk_utils/iam.dms.DmsActions.property.ModifyEndpoint"></a>

```typescript
public readonly ModifyEndpoint: string;
```

- *Type:* string

[Write] dms:ModifyEndpoint.

---

##### `ModifyEventSubscription`<sup>Required</sup> <a name="ModifyEventSubscription" id="@cdk_utils/iam.dms.DmsActions.property.ModifyEventSubscription"></a>

```typescript
public readonly ModifyEventSubscription: string;
```

- *Type:* string

[Write] dms:ModifyEventSubscription.

---

##### `ModifyFleetAdvisorCollector`<sup>Required</sup> <a name="ModifyFleetAdvisorCollector" id="@cdk_utils/iam.dms.DmsActions.property.ModifyFleetAdvisorCollector"></a>

```typescript
public readonly ModifyFleetAdvisorCollector: string;
```

- *Type:* string

[Write] dms:ModifyFleetAdvisorCollector.

---

##### `ModifyFleetAdvisorCollectorStatuses`<sup>Required</sup> <a name="ModifyFleetAdvisorCollectorStatuses" id="@cdk_utils/iam.dms.DmsActions.property.ModifyFleetAdvisorCollectorStatuses"></a>

```typescript
public readonly ModifyFleetAdvisorCollectorStatuses: string;
```

- *Type:* string

[Write] dms:ModifyFleetAdvisorCollectorStatuses.

---

##### `ModifyOutboundIntegration`<sup>Required</sup> <a name="ModifyOutboundIntegration" id="@cdk_utils/iam.dms.DmsActions.property.ModifyOutboundIntegration"></a>

```typescript
public readonly ModifyOutboundIntegration: string;
```

- *Type:* string

[Write] dms:ModifyOutboundIntegration.

---

##### `ModifyReplicationConfig`<sup>Required</sup> <a name="ModifyReplicationConfig" id="@cdk_utils/iam.dms.DmsActions.property.ModifyReplicationConfig"></a>

```typescript
public readonly ModifyReplicationConfig: string;
```

- *Type:* string

[Write] dms:ModifyReplicationConfig.

---

##### `ModifyReplicationInstance`<sup>Required</sup> <a name="ModifyReplicationInstance" id="@cdk_utils/iam.dms.DmsActions.property.ModifyReplicationInstance"></a>

```typescript
public readonly ModifyReplicationInstance: string;
```

- *Type:* string

[Write] dms:ModifyReplicationInstance.

---

##### `ModifyReplicationSubnetGroup`<sup>Required</sup> <a name="ModifyReplicationSubnetGroup" id="@cdk_utils/iam.dms.DmsActions.property.ModifyReplicationSubnetGroup"></a>

```typescript
public readonly ModifyReplicationSubnetGroup: string;
```

- *Type:* string

[Write] dms:ModifyReplicationSubnetGroup.

---

##### `ModifyReplicationTask`<sup>Required</sup> <a name="ModifyReplicationTask" id="@cdk_utils/iam.dms.DmsActions.property.ModifyReplicationTask"></a>

```typescript
public readonly ModifyReplicationTask: string;
```

- *Type:* string

[Write] dms:ModifyReplicationTask.

---

##### `MoveReplicationTask`<sup>Required</sup> <a name="MoveReplicationTask" id="@cdk_utils/iam.dms.DmsActions.property.MoveReplicationTask"></a>

```typescript
public readonly MoveReplicationTask: string;
```

- *Type:* string

[Write] dms:MoveReplicationTask.

---

##### `RebootReplicationInstance`<sup>Required</sup> <a name="RebootReplicationInstance" id="@cdk_utils/iam.dms.DmsActions.property.RebootReplicationInstance"></a>

```typescript
public readonly RebootReplicationInstance: string;
```

- *Type:* string

[Write] dms:RebootReplicationInstance.

---

##### `RefreshSchemas`<sup>Required</sup> <a name="RefreshSchemas" id="@cdk_utils/iam.dms.DmsActions.property.RefreshSchemas"></a>

```typescript
public readonly RefreshSchemas: string;
```

- *Type:* string

[Write] dms:RefreshSchemas.

---

##### `ReloadReplicationTables`<sup>Required</sup> <a name="ReloadReplicationTables" id="@cdk_utils/iam.dms.DmsActions.property.ReloadReplicationTables"></a>

```typescript
public readonly ReloadReplicationTables: string;
```

- *Type:* string

[Write] dms:ReloadReplicationTables.

---

##### `ReloadTables`<sup>Required</sup> <a name="ReloadTables" id="@cdk_utils/iam.dms.DmsActions.property.ReloadTables"></a>

```typescript
public readonly ReloadTables: string;
```

- *Type:* string

[Write] dms:ReloadTables.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.dms.DmsActions.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string;
```

- *Type:* string

[Tagging] dms:RemoveTagsFromResource.

---

##### `RunFleetAdvisorLsaAnalysis`<sup>Required</sup> <a name="RunFleetAdvisorLsaAnalysis" id="@cdk_utils/iam.dms.DmsActions.property.RunFleetAdvisorLsaAnalysis"></a>

```typescript
public readonly RunFleetAdvisorLsaAnalysis: string;
```

- *Type:* string

[Write] dms:RunFleetAdvisorLsaAnalysis.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.dms.DmsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDataMigration`<sup>Required</sup> <a name="StartDataMigration" id="@cdk_utils/iam.dms.DmsActions.property.StartDataMigration"></a>

```typescript
public readonly StartDataMigration: string;
```

- *Type:* string

[Write] dms:StartDataMigration.

---

##### `StartMetadataModelAssessment`<sup>Required</sup> <a name="StartMetadataModelAssessment" id="@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelAssessment"></a>

```typescript
public readonly StartMetadataModelAssessment: string;
```

- *Type:* string

[Write] dms:StartMetadataModelAssessment.

---

##### `StartMetadataModelConversion`<sup>Required</sup> <a name="StartMetadataModelConversion" id="@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelConversion"></a>

```typescript
public readonly StartMetadataModelConversion: string;
```

- *Type:* string

[Write] dms:StartMetadataModelConversion.

---

##### `StartMetadataModelCreation`<sup>Required</sup> <a name="StartMetadataModelCreation" id="@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelCreation"></a>

```typescript
public readonly StartMetadataModelCreation: string;
```

- *Type:* string

[Write] dms:StartMetadataModelCreation.

---

##### `StartMetadataModelExportAsScripts`<sup>Required</sup> <a name="StartMetadataModelExportAsScripts" id="@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelExportAsScripts"></a>

```typescript
public readonly StartMetadataModelExportAsScripts: string;
```

- *Type:* string

[Write] dms:StartMetadataModelExportAsScripts.

---

##### `StartMetadataModelExportToTarget`<sup>Required</sup> <a name="StartMetadataModelExportToTarget" id="@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelExportToTarget"></a>

```typescript
public readonly StartMetadataModelExportToTarget: string;
```

- *Type:* string

[Write] dms:StartMetadataModelExportToTarget.

---

##### `StartMetadataModelImport`<sup>Required</sup> <a name="StartMetadataModelImport" id="@cdk_utils/iam.dms.DmsActions.property.StartMetadataModelImport"></a>

```typescript
public readonly StartMetadataModelImport: string;
```

- *Type:* string

[Write] dms:StartMetadataModelImport.

---

##### `StartRecommendations`<sup>Required</sup> <a name="StartRecommendations" id="@cdk_utils/iam.dms.DmsActions.property.StartRecommendations"></a>

```typescript
public readonly StartRecommendations: string;
```

- *Type:* string

[Write] dms:StartRecommendations.

---

##### `StartReplication`<sup>Required</sup> <a name="StartReplication" id="@cdk_utils/iam.dms.DmsActions.property.StartReplication"></a>

```typescript
public readonly StartReplication: string;
```

- *Type:* string

[Write] dms:StartReplication.

---

##### `StartReplicationTask`<sup>Required</sup> <a name="StartReplicationTask" id="@cdk_utils/iam.dms.DmsActions.property.StartReplicationTask"></a>

```typescript
public readonly StartReplicationTask: string;
```

- *Type:* string

[Write] dms:StartReplicationTask.

---

##### `StartReplicationTaskAssessment`<sup>Required</sup> <a name="StartReplicationTaskAssessment" id="@cdk_utils/iam.dms.DmsActions.property.StartReplicationTaskAssessment"></a>

```typescript
public readonly StartReplicationTaskAssessment: string;
```

- *Type:* string

[Write] dms:StartReplicationTaskAssessment.

---

##### `StartReplicationTaskAssessmentRun`<sup>Required</sup> <a name="StartReplicationTaskAssessmentRun" id="@cdk_utils/iam.dms.DmsActions.property.StartReplicationTaskAssessmentRun"></a>

```typescript
public readonly StartReplicationTaskAssessmentRun: string;
```

- *Type:* string

[Write] dms:StartReplicationTaskAssessmentRun.

---

##### `StopDataMigration`<sup>Required</sup> <a name="StopDataMigration" id="@cdk_utils/iam.dms.DmsActions.property.StopDataMigration"></a>

```typescript
public readonly StopDataMigration: string;
```

- *Type:* string

[Write] dms:StopDataMigration.

---

##### `StopReplication`<sup>Required</sup> <a name="StopReplication" id="@cdk_utils/iam.dms.DmsActions.property.StopReplication"></a>

```typescript
public readonly StopReplication: string;
```

- *Type:* string

[Write] dms:StopReplication.

---

##### `StopReplicationTask`<sup>Required</sup> <a name="StopReplicationTask" id="@cdk_utils/iam.dms.DmsActions.property.StopReplicationTask"></a>

```typescript
public readonly StopReplicationTask: string;
```

- *Type:* string

[Write] dms:StopReplicationTask.

---

##### `TestConnection`<sup>Required</sup> <a name="TestConnection" id="@cdk_utils/iam.dms.DmsActions.property.TestConnection"></a>

```typescript
public readonly TestConnection: string;
```

- *Type:* string

[Read] dms:TestConnection.

---

##### `UpdateConversionConfiguration`<sup>Required</sup> <a name="UpdateConversionConfiguration" id="@cdk_utils/iam.dms.DmsActions.property.UpdateConversionConfiguration"></a>

```typescript
public readonly UpdateConversionConfiguration: string;
```

- *Type:* string

[Write] dms:UpdateConversionConfiguration.

---

##### `UpdateDataProvider`<sup>Required</sup> <a name="UpdateDataProvider" id="@cdk_utils/iam.dms.DmsActions.property.UpdateDataProvider"></a>

```typescript
public readonly UpdateDataProvider: string;
```

- *Type:* string

[Write] dms:UpdateDataProvider.

---

##### `UpdateInstanceProfile`<sup>Required</sup> <a name="UpdateInstanceProfile" id="@cdk_utils/iam.dms.DmsActions.property.UpdateInstanceProfile"></a>

```typescript
public readonly UpdateInstanceProfile: string;
```

- *Type:* string

[Write] dms:UpdateInstanceProfile.

---

##### `UpdateMigrationProject`<sup>Required</sup> <a name="UpdateMigrationProject" id="@cdk_utils/iam.dms.DmsActions.property.UpdateMigrationProject"></a>

```typescript
public readonly UpdateMigrationProject: string;
```

- *Type:* string

[Write] dms:UpdateMigrationProject.

---

##### `UpdateSubscriptionsToEventBridge`<sup>Required</sup> <a name="UpdateSubscriptionsToEventBridge" id="@cdk_utils/iam.dms.DmsActions.property.UpdateSubscriptionsToEventBridge"></a>

```typescript
public readonly UpdateSubscriptionsToEventBridge: string;
```

- *Type:* string

[Write] dms:UpdateSubscriptionsToEventBridge.

---

##### `UploadFileMetadataList`<sup>Required</sup> <a name="UploadFileMetadataList" id="@cdk_utils/iam.dms.DmsActions.property.UploadFileMetadataList"></a>

```typescript
public readonly UploadFileMetadataList: string;
```

- *Type:* string

[Write] dms:UploadFileMetadataList.

---

### DmsConditions <a name="DmsConditions" id="@cdk_utils/iam.dms.DmsConditions"></a>

Condition key constants and builders for dms.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dms.DmsConditions.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

new dms.DmsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.assessmentRunTag">assessmentRunTag</a></code> | Generates a condition block for `dms:assessment-run-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.certTag">certTag</a></code> | Generates a condition block for `dms:cert-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.dataMigrationTag">dataMigrationTag</a></code> | Generates a condition block for `dms:data-migration-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.dataProviderTag">dataProviderTag</a></code> | Generates a condition block for `dms:data-provider-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.endpointTag">endpointTag</a></code> | Generates a condition block for `dms:endpoint-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.esTag">esTag</a></code> | Generates a condition block for `dms:es-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.individualAssessmentTag">individualAssessmentTag</a></code> | Generates a condition block for `dms:individual-assessment-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.instanceProfileTag">instanceProfileTag</a></code> | Generates a condition block for `dms:instance-profile-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.migrationProjectTag">migrationProjectTag</a></code> | Generates a condition block for `dms:migration-project-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.replicationConfigTag">replicationConfigTag</a></code> | Generates a condition block for `dms:replication-config-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.repTag">repTag</a></code> | Generates a condition block for `dms:rep-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.reqTag">reqTag</a></code> | Generates a condition block for `dms:req-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.subgrpTag">subgrpTag</a></code> | Generates a condition block for `dms:subgrp-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.taskTag">taskTag</a></code> | Generates a condition block for `dms:task-tag/${TagKey}`. |

---

##### `assessmentRunTag` <a name="assessmentRunTag" id="@cdk_utils/iam.dms.DmsConditions.assessmentRunTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.assessmentRunTag(value: string)
```

Generates a condition block for `dms:assessment-run-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.assessmentRunTag.parameter.value"></a>

- *Type:* string

---

##### `certTag` <a name="certTag" id="@cdk_utils/iam.dms.DmsConditions.certTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.certTag(value: string)
```

Generates a condition block for `dms:cert-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.certTag.parameter.value"></a>

- *Type:* string

---

##### `dataMigrationTag` <a name="dataMigrationTag" id="@cdk_utils/iam.dms.DmsConditions.dataMigrationTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.dataMigrationTag(value: string)
```

Generates a condition block for `dms:data-migration-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.dataMigrationTag.parameter.value"></a>

- *Type:* string

---

##### `dataProviderTag` <a name="dataProviderTag" id="@cdk_utils/iam.dms.DmsConditions.dataProviderTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.dataProviderTag(value: string)
```

Generates a condition block for `dms:data-provider-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.dataProviderTag.parameter.value"></a>

- *Type:* string

---

##### `endpointTag` <a name="endpointTag" id="@cdk_utils/iam.dms.DmsConditions.endpointTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.endpointTag(value: string)
```

Generates a condition block for `dms:endpoint-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.endpointTag.parameter.value"></a>

- *Type:* string

---

##### `esTag` <a name="esTag" id="@cdk_utils/iam.dms.DmsConditions.esTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.esTag(value: string)
```

Generates a condition block for `dms:es-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.esTag.parameter.value"></a>

- *Type:* string

---

##### `individualAssessmentTag` <a name="individualAssessmentTag" id="@cdk_utils/iam.dms.DmsConditions.individualAssessmentTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.individualAssessmentTag(value: string)
```

Generates a condition block for `dms:individual-assessment-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.individualAssessmentTag.parameter.value"></a>

- *Type:* string

---

##### `instanceProfileTag` <a name="instanceProfileTag" id="@cdk_utils/iam.dms.DmsConditions.instanceProfileTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.instanceProfileTag(value: string)
```

Generates a condition block for `dms:instance-profile-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.instanceProfileTag.parameter.value"></a>

- *Type:* string

---

##### `migrationProjectTag` <a name="migrationProjectTag" id="@cdk_utils/iam.dms.DmsConditions.migrationProjectTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.migrationProjectTag(value: string)
```

Generates a condition block for `dms:migration-project-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.migrationProjectTag.parameter.value"></a>

- *Type:* string

---

##### `replicationConfigTag` <a name="replicationConfigTag" id="@cdk_utils/iam.dms.DmsConditions.replicationConfigTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.replicationConfigTag(value: string)
```

Generates a condition block for `dms:replication-config-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.replicationConfigTag.parameter.value"></a>

- *Type:* string

---

##### `repTag` <a name="repTag" id="@cdk_utils/iam.dms.DmsConditions.repTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.repTag(value: string)
```

Generates a condition block for `dms:rep-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.repTag.parameter.value"></a>

- *Type:* string

---

##### `reqTag` <a name="reqTag" id="@cdk_utils/iam.dms.DmsConditions.reqTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.reqTag(value: string)
```

Generates a condition block for `dms:req-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.reqTag.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.dms.DmsConditions.requestTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.dms.DmsConditions.resourceTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `subgrpTag` <a name="subgrpTag" id="@cdk_utils/iam.dms.DmsConditions.subgrpTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.subgrpTag(value: string)
```

Generates a condition block for `dms:subgrp-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.subgrpTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.dms.DmsConditions.tagKeys"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dms.DmsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `taskTag` <a name="taskTag" id="@cdk_utils/iam.dms.DmsConditions.taskTag"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsConditions.taskTag(value: string)
```

Generates a condition block for `dms:task-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dms.DmsConditions.taskTag.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.AddTagsToResourceConditionKeys">AddTagsToResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTagsToResource action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.ASSESSMENT_RUN_TAG">ASSESSMENT_RUN_TAG</a></code> | <code>string</code> | Condition key: dms:assessment-run-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CERT_TAG">CERT_TAG</a></code> | <code>string</code> | Condition key: dms:cert-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CreateDataMigrationConditionKeys">CreateDataMigrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataMigration action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CreateDataProviderConditionKeys">CreateDataProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataProvider action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CreateEndpointConditionKeys">CreateEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEndpoint action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CreateEventSubscriptionConditionKeys">CreateEventSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventSubscription action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CreateInstanceProfileConditionKeys">CreateInstanceProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInstanceProfile action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CreateMigrationProjectConditionKeys">CreateMigrationProjectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMigrationProject action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CreateOutboundIntegrationConditionKeys">CreateOutboundIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOutboundIntegration action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CreateReplicationConfigConditionKeys">CreateReplicationConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReplicationConfig action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CreateReplicationInstanceConditionKeys">CreateReplicationInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReplicationInstance action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CreateReplicationSubnetGroupConditionKeys">CreateReplicationSubnetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReplicationSubnetGroup action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.CreateReplicationTaskConditionKeys">CreateReplicationTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReplicationTask action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.DATA_MIGRATION_TAG">DATA_MIGRATION_TAG</a></code> | <code>string</code> | Condition key: dms:data-migration-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.DATA_PROVIDER_TAG">DATA_PROVIDER_TAG</a></code> | <code>string</code> | Condition key: dms:data-provider-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.DescribeReplicationInstanceTaskLogsConditionKeys">DescribeReplicationInstanceTaskLogsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeReplicationInstanceTaskLogs action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.ENDPOINT_TAG">ENDPOINT_TAG</a></code> | <code>string</code> | Condition key: dms:endpoint-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.ES_TAG">ES_TAG</a></code> | <code>string</code> | Condition key: dms:es-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.ImportCertificateConditionKeys">ImportCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportCertificate action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.INDIVIDUAL_ASSESSMENT_TAG">INDIVIDUAL_ASSESSMENT_TAG</a></code> | <code>string</code> | Condition key: dms:individual-assessment-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.INSTANCE_PROFILE_TAG">INSTANCE_PROFILE_TAG</a></code> | <code>string</code> | Condition key: dms:instance-profile-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.MIGRATION_PROJECT_TAG">MIGRATION_PROJECT_TAG</a></code> | <code>string</code> | Condition key: dms:migration-project-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.RemoveTagsFromResourceConditionKeys">RemoveTagsFromResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTagsFromResource action. |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.REP_TAG">REP_TAG</a></code> | <code>string</code> | Condition key: dms:rep-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.REPLICATION_CONFIG_TAG">REPLICATION_CONFIG_TAG</a></code> | <code>string</code> | Condition key: dms:replication-config-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.REQ_TAG">REQ_TAG</a></code> | <code>string</code> | Condition key: dms:req-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.SUBGRP_TAG">SUBGRP_TAG</a></code> | <code>string</code> | Condition key: dms:subgrp-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dms.DmsConditions.property.TASK_TAG">TASK_TAG</a></code> | <code>string</code> | Condition key: dms:task-tag/${TagKey} (String). |

---

##### `AddTagsToResourceConditionKeys`<sup>Required</sup> <a name="AddTagsToResourceConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.AddTagsToResourceConditionKeys"></a>

```typescript
public readonly AddTagsToResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTagsToResource action.

---

##### `ASSESSMENT_RUN_TAG`<sup>Required</sup> <a name="ASSESSMENT_RUN_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.ASSESSMENT_RUN_TAG"></a>

```typescript
public readonly ASSESSMENT_RUN_TAG: string;
```

- *Type:* string

Condition key: dms:assessment-run-tag/${TagKey} (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.dms.DmsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CERT_TAG`<sup>Required</sup> <a name="CERT_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.CERT_TAG"></a>

```typescript
public readonly CERT_TAG: string;
```

- *Type:* string

Condition key: dms:cert-tag/${TagKey} (String).

---

##### `CreateDataMigrationConditionKeys`<sup>Required</sup> <a name="CreateDataMigrationConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.CreateDataMigrationConditionKeys"></a>

```typescript
public readonly CreateDataMigrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataMigration action.

---

##### `CreateDataProviderConditionKeys`<sup>Required</sup> <a name="CreateDataProviderConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.CreateDataProviderConditionKeys"></a>

```typescript
public readonly CreateDataProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataProvider action.

---

##### `CreateEndpointConditionKeys`<sup>Required</sup> <a name="CreateEndpointConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.CreateEndpointConditionKeys"></a>

```typescript
public readonly CreateEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEndpoint action.

---

##### `CreateEventSubscriptionConditionKeys`<sup>Required</sup> <a name="CreateEventSubscriptionConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.CreateEventSubscriptionConditionKeys"></a>

```typescript
public readonly CreateEventSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventSubscription action.

---

##### `CreateInstanceProfileConditionKeys`<sup>Required</sup> <a name="CreateInstanceProfileConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.CreateInstanceProfileConditionKeys"></a>

```typescript
public readonly CreateInstanceProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInstanceProfile action.

---

##### `CreateMigrationProjectConditionKeys`<sup>Required</sup> <a name="CreateMigrationProjectConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.CreateMigrationProjectConditionKeys"></a>

```typescript
public readonly CreateMigrationProjectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMigrationProject action.

---

##### `CreateOutboundIntegrationConditionKeys`<sup>Required</sup> <a name="CreateOutboundIntegrationConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.CreateOutboundIntegrationConditionKeys"></a>

```typescript
public readonly CreateOutboundIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOutboundIntegration action.

---

##### `CreateReplicationConfigConditionKeys`<sup>Required</sup> <a name="CreateReplicationConfigConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.CreateReplicationConfigConditionKeys"></a>

```typescript
public readonly CreateReplicationConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReplicationConfig action.

---

##### `CreateReplicationInstanceConditionKeys`<sup>Required</sup> <a name="CreateReplicationInstanceConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.CreateReplicationInstanceConditionKeys"></a>

```typescript
public readonly CreateReplicationInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReplicationInstance action.

---

##### `CreateReplicationSubnetGroupConditionKeys`<sup>Required</sup> <a name="CreateReplicationSubnetGroupConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.CreateReplicationSubnetGroupConditionKeys"></a>

```typescript
public readonly CreateReplicationSubnetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReplicationSubnetGroup action.

---

##### `CreateReplicationTaskConditionKeys`<sup>Required</sup> <a name="CreateReplicationTaskConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.CreateReplicationTaskConditionKeys"></a>

```typescript
public readonly CreateReplicationTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReplicationTask action.

---

##### `DATA_MIGRATION_TAG`<sup>Required</sup> <a name="DATA_MIGRATION_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.DATA_MIGRATION_TAG"></a>

```typescript
public readonly DATA_MIGRATION_TAG: string;
```

- *Type:* string

Condition key: dms:data-migration-tag/${TagKey} (String).

---

##### `DATA_PROVIDER_TAG`<sup>Required</sup> <a name="DATA_PROVIDER_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.DATA_PROVIDER_TAG"></a>

```typescript
public readonly DATA_PROVIDER_TAG: string;
```

- *Type:* string

Condition key: dms:data-provider-tag/${TagKey} (String).

---

##### `DescribeReplicationInstanceTaskLogsConditionKeys`<sup>Required</sup> <a name="DescribeReplicationInstanceTaskLogsConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.DescribeReplicationInstanceTaskLogsConditionKeys"></a>

```typescript
public readonly DescribeReplicationInstanceTaskLogsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeReplicationInstanceTaskLogs action.

---

##### `ENDPOINT_TAG`<sup>Required</sup> <a name="ENDPOINT_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.ENDPOINT_TAG"></a>

```typescript
public readonly ENDPOINT_TAG: string;
```

- *Type:* string

Condition key: dms:endpoint-tag/${TagKey} (String).

---

##### `ES_TAG`<sup>Required</sup> <a name="ES_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.ES_TAG"></a>

```typescript
public readonly ES_TAG: string;
```

- *Type:* string

Condition key: dms:es-tag/${TagKey} (String).

---

##### `ImportCertificateConditionKeys`<sup>Required</sup> <a name="ImportCertificateConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.ImportCertificateConditionKeys"></a>

```typescript
public readonly ImportCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportCertificate action.

---

##### `INDIVIDUAL_ASSESSMENT_TAG`<sup>Required</sup> <a name="INDIVIDUAL_ASSESSMENT_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.INDIVIDUAL_ASSESSMENT_TAG"></a>

```typescript
public readonly INDIVIDUAL_ASSESSMENT_TAG: string;
```

- *Type:* string

Condition key: dms:individual-assessment-tag/${TagKey} (String).

---

##### `INSTANCE_PROFILE_TAG`<sup>Required</sup> <a name="INSTANCE_PROFILE_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.INSTANCE_PROFILE_TAG"></a>

```typescript
public readonly INSTANCE_PROFILE_TAG: string;
```

- *Type:* string

Condition key: dms:instance-profile-tag/${TagKey} (String).

---

##### `MIGRATION_PROJECT_TAG`<sup>Required</sup> <a name="MIGRATION_PROJECT_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.MIGRATION_PROJECT_TAG"></a>

```typescript
public readonly MIGRATION_PROJECT_TAG: string;
```

- *Type:* string

Condition key: dms:migration-project-tag/${TagKey} (String).

---

##### `RemoveTagsFromResourceConditionKeys`<sup>Required</sup> <a name="RemoveTagsFromResourceConditionKeys" id="@cdk_utils/iam.dms.DmsConditions.property.RemoveTagsFromResourceConditionKeys"></a>

```typescript
public readonly RemoveTagsFromResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTagsFromResource action.

---

##### `REP_TAG`<sup>Required</sup> <a name="REP_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.REP_TAG"></a>

```typescript
public readonly REP_TAG: string;
```

- *Type:* string

Condition key: dms:rep-tag/${TagKey} (String).

---

##### `REPLICATION_CONFIG_TAG`<sup>Required</sup> <a name="REPLICATION_CONFIG_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.REPLICATION_CONFIG_TAG"></a>

```typescript
public readonly REPLICATION_CONFIG_TAG: string;
```

- *Type:* string

Condition key: dms:replication-config-tag/${TagKey} (String).

---

##### `REQ_TAG`<sup>Required</sup> <a name="REQ_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.REQ_TAG"></a>

```typescript
public readonly REQ_TAG: string;
```

- *Type:* string

Condition key: dms:req-tag/${TagKey} (String).

---

##### `SUBGRP_TAG`<sup>Required</sup> <a name="SUBGRP_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.SUBGRP_TAG"></a>

```typescript
public readonly SUBGRP_TAG: string;
```

- *Type:* string

Condition key: dms:subgrp-tag/${TagKey} (String).

---

##### `TASK_TAG`<sup>Required</sup> <a name="TASK_TAG" id="@cdk_utils/iam.dms.DmsConditions.property.TASK_TAG"></a>

```typescript
public readonly TASK_TAG: string;
```

- *Type:* string

Condition key: dms:task-tag/${TagKey} (String).

---

### DmsOperations <a name="DmsOperations" id="@cdk_utils/iam.dms.DmsOperations"></a>

API operation to required IAM actions mapping for dms.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dms.DmsOperations.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

new dms.DmsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string[]</code> | IAM actions required for the AddTagsToResource API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ApplyPendingMaintenanceAction">ApplyPendingMaintenanceAction</a></code> | <code>string[]</code> | IAM actions required for the ApplyPendingMaintenanceAction API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.BatchStartRecommendations">BatchStartRecommendations</a></code> | <code>string[]</code> | IAM actions required for the BatchStartRecommendations API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CancelMetadataModelConversion">CancelMetadataModelConversion</a></code> | <code>string[]</code> | IAM actions required for the CancelMetadataModelConversion API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CancelMetadataModelCreation">CancelMetadataModelCreation</a></code> | <code>string[]</code> | IAM actions required for the CancelMetadataModelCreation API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CancelReplicationTaskAssessmentRun">CancelReplicationTaskAssessmentRun</a></code> | <code>string[]</code> | IAM actions required for the CancelReplicationTaskAssessmentRun API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CreateDataMigration">CreateDataMigration</a></code> | <code>string[]</code> | IAM actions required for the CreateDataMigration API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CreateDataProvider">CreateDataProvider</a></code> | <code>string[]</code> | IAM actions required for the CreateDataProvider API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CreateEndpoint">CreateEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateEndpoint API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CreateEventSubscription">CreateEventSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateEventSubscription API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CreateFleetAdvisorCollector">CreateFleetAdvisorCollector</a></code> | <code>string[]</code> | IAM actions required for the CreateFleetAdvisorCollector API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CreateInstanceProfile">CreateInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CreateMigrationProject">CreateMigrationProject</a></code> | <code>string[]</code> | IAM actions required for the CreateMigrationProject API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CreateReplicationConfig">CreateReplicationConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateReplicationConfig API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CreateReplicationInstance">CreateReplicationInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateReplicationInstance API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CreateReplicationSubnetGroup">CreateReplicationSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateReplicationSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.CreateReplicationTask">CreateReplicationTask</a></code> | <code>string[]</code> | IAM actions required for the CreateReplicationTask API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteCertificate">DeleteCertificate</a></code> | <code>string[]</code> | IAM actions required for the DeleteCertificate API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteDataMigration">DeleteDataMigration</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataMigration API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteDataProvider">DeleteDataProvider</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataProvider API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteEndpoint API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteEventSubscription">DeleteEventSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventSubscription API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteFleetAdvisorCollector">DeleteFleetAdvisorCollector</a></code> | <code>string[]</code> | IAM actions required for the DeleteFleetAdvisorCollector API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteFleetAdvisorDatabases">DeleteFleetAdvisorDatabases</a></code> | <code>string[]</code> | IAM actions required for the DeleteFleetAdvisorDatabases API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteInstanceProfile">DeleteInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteMigrationProject">DeleteMigrationProject</a></code> | <code>string[]</code> | IAM actions required for the DeleteMigrationProject API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteReplicationConfig">DeleteReplicationConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteReplicationConfig API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteReplicationInstance">DeleteReplicationInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteReplicationInstance API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteReplicationSubnetGroup">DeleteReplicationSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteReplicationSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteReplicationTask">DeleteReplicationTask</a></code> | <code>string[]</code> | IAM actions required for the DeleteReplicationTask API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DeleteReplicationTaskAssessmentRun">DeleteReplicationTaskAssessmentRun</a></code> | <code>string[]</code> | IAM actions required for the DeleteReplicationTaskAssessmentRun API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeAccountAttributes">DescribeAccountAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountAttributes API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeApplicableIndividualAssessments">DescribeApplicableIndividualAssessments</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplicableIndividualAssessments API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeCertificates">DescribeCertificates</a></code> | <code>string[]</code> | IAM actions required for the DescribeCertificates API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeConnections">DescribeConnections</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnections API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeConversionConfiguration">DescribeConversionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeConversionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeDataMigrations">DescribeDataMigrations</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataMigrations API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeDataProviders">DescribeDataProviders</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataProviders API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeEndpoints">DescribeEndpoints</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpoints API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeEndpointSettings">DescribeEndpointSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpointSettings API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeEndpointTypes">DescribeEndpointTypes</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpointTypes API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeEngineVersions">DescribeEngineVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeEngineVersions API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeEventCategories">DescribeEventCategories</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventCategories API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeEvents">DescribeEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribeEvents API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeEventSubscriptions">DescribeEventSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeExtensionPackAssociations">DescribeExtensionPackAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeExtensionPackAssociations API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeFleetAdvisorCollectors">DescribeFleetAdvisorCollectors</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetAdvisorCollectors API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeFleetAdvisorDatabases">DescribeFleetAdvisorDatabases</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetAdvisorDatabases API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeFleetAdvisorLsaAnalysis">DescribeFleetAdvisorLsaAnalysis</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetAdvisorLsaAnalysis API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeFleetAdvisorSchemaObjectSummary">DescribeFleetAdvisorSchemaObjectSummary</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetAdvisorSchemaObjectSummary API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeFleetAdvisorSchemas">DescribeFleetAdvisorSchemas</a></code> | <code>string[]</code> | IAM actions required for the DescribeFleetAdvisorSchemas API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeInstanceProfiles">DescribeInstanceProfiles</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstanceProfiles API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModel">DescribeMetadataModel</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetadataModel API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelAssessments">DescribeMetadataModelAssessments</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetadataModelAssessments API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelChildren">DescribeMetadataModelChildren</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetadataModelChildren API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelConversions">DescribeMetadataModelConversions</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetadataModelConversions API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelCreations">DescribeMetadataModelCreations</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetadataModelCreations API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelExportsAsScript">DescribeMetadataModelExportsAsScript</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetadataModelExportsAsScript API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelExportsToTarget">DescribeMetadataModelExportsToTarget</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetadataModelExportsToTarget API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelImports">DescribeMetadataModelImports</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetadataModelImports API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeMigrationProjects">DescribeMigrationProjects</a></code> | <code>string[]</code> | IAM actions required for the DescribeMigrationProjects API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeOrderableReplicationInstances">DescribeOrderableReplicationInstances</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrderableReplicationInstances API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribePendingMaintenanceActions">DescribePendingMaintenanceActions</a></code> | <code>string[]</code> | IAM actions required for the DescribePendingMaintenanceActions API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeRecommendationLimitations">DescribeRecommendationLimitations</a></code> | <code>string[]</code> | IAM actions required for the DescribeRecommendationLimitations API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeRecommendations">DescribeRecommendations</a></code> | <code>string[]</code> | IAM actions required for the DescribeRecommendations API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeRefreshSchemasStatus">DescribeRefreshSchemasStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeRefreshSchemasStatus API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationConfigs">DescribeReplicationConfigs</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationConfigs API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationInstances">DescribeReplicationInstances</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationInstances API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationInstanceTaskLogs">DescribeReplicationInstanceTaskLogs</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationInstanceTaskLogs API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeReplications">DescribeReplications</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplications API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationSubnetGroups">DescribeReplicationSubnetGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationSubnetGroups API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationTableStatistics">DescribeReplicationTableStatistics</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationTableStatistics API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationTaskAssessmentResults">DescribeReplicationTaskAssessmentResults</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationTaskAssessmentResults API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationTaskAssessmentRuns">DescribeReplicationTaskAssessmentRuns</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationTaskAssessmentRuns API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationTaskIndividualAssessments">DescribeReplicationTaskIndividualAssessments</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationTaskIndividualAssessments API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationTasks">DescribeReplicationTasks</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationTasks API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeSchemas">DescribeSchemas</a></code> | <code>string[]</code> | IAM actions required for the DescribeSchemas API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.DescribeTableStatistics">DescribeTableStatistics</a></code> | <code>string[]</code> | IAM actions required for the DescribeTableStatistics API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ExportMetadataModelAssessment">ExportMetadataModelAssessment</a></code> | <code>string[]</code> | IAM actions required for the ExportMetadataModelAssessment API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ImportCertificate">ImportCertificate</a></code> | <code>string[]</code> | IAM actions required for the ImportCertificate API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ModifyConversionConfiguration">ModifyConversionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ModifyConversionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ModifyDataMigration">ModifyDataMigration</a></code> | <code>string[]</code> | IAM actions required for the ModifyDataMigration API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ModifyDataProvider">ModifyDataProvider</a></code> | <code>string[]</code> | IAM actions required for the ModifyDataProvider API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ModifyEndpoint">ModifyEndpoint</a></code> | <code>string[]</code> | IAM actions required for the ModifyEndpoint API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ModifyEventSubscription">ModifyEventSubscription</a></code> | <code>string[]</code> | IAM actions required for the ModifyEventSubscription API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ModifyInstanceProfile">ModifyInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the ModifyInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ModifyMigrationProject">ModifyMigrationProject</a></code> | <code>string[]</code> | IAM actions required for the ModifyMigrationProject API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ModifyReplicationConfig">ModifyReplicationConfig</a></code> | <code>string[]</code> | IAM actions required for the ModifyReplicationConfig API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ModifyReplicationInstance">ModifyReplicationInstance</a></code> | <code>string[]</code> | IAM actions required for the ModifyReplicationInstance API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ModifyReplicationSubnetGroup">ModifyReplicationSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyReplicationSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ModifyReplicationTask">ModifyReplicationTask</a></code> | <code>string[]</code> | IAM actions required for the ModifyReplicationTask API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.MoveReplicationTask">MoveReplicationTask</a></code> | <code>string[]</code> | IAM actions required for the MoveReplicationTask API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.opGetTargetSelectionRules">opGetTargetSelectionRules</a></code> | <code>string[]</code> | IAM actions required for the GetTargetSelectionRules API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.RebootReplicationInstance">RebootReplicationInstance</a></code> | <code>string[]</code> | IAM actions required for the RebootReplicationInstance API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.RefreshSchemas">RefreshSchemas</a></code> | <code>string[]</code> | IAM actions required for the RefreshSchemas API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ReloadReplicationTables">ReloadReplicationTables</a></code> | <code>string[]</code> | IAM actions required for the ReloadReplicationTables API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.ReloadTables">ReloadTables</a></code> | <code>string[]</code> | IAM actions required for the ReloadTables API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string[]</code> | IAM actions required for the RemoveTagsFromResource API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.RunFleetAdvisorLsaAnalysis">RunFleetAdvisorLsaAnalysis</a></code> | <code>string[]</code> | IAM actions required for the RunFleetAdvisorLsaAnalysis API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartDataMigration">StartDataMigration</a></code> | <code>string[]</code> | IAM actions required for the StartDataMigration API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartExtensionPackAssociation">StartExtensionPackAssociation</a></code> | <code>string[]</code> | IAM actions required for the StartExtensionPackAssociation API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelAssessment">StartMetadataModelAssessment</a></code> | <code>string[]</code> | IAM actions required for the StartMetadataModelAssessment API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelConversion">StartMetadataModelConversion</a></code> | <code>string[]</code> | IAM actions required for the StartMetadataModelConversion API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelCreation">StartMetadataModelCreation</a></code> | <code>string[]</code> | IAM actions required for the StartMetadataModelCreation API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelExportAsScript">StartMetadataModelExportAsScript</a></code> | <code>string[]</code> | IAM actions required for the StartMetadataModelExportAsScript API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelExportToTarget">StartMetadataModelExportToTarget</a></code> | <code>string[]</code> | IAM actions required for the StartMetadataModelExportToTarget API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelImport">StartMetadataModelImport</a></code> | <code>string[]</code> | IAM actions required for the StartMetadataModelImport API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartRecommendations">StartRecommendations</a></code> | <code>string[]</code> | IAM actions required for the StartRecommendations API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartReplication">StartReplication</a></code> | <code>string[]</code> | IAM actions required for the StartReplication API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartReplicationTask">StartReplicationTask</a></code> | <code>string[]</code> | IAM actions required for the StartReplicationTask API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartReplicationTaskAssessment">StartReplicationTaskAssessment</a></code> | <code>string[]</code> | IAM actions required for the StartReplicationTaskAssessment API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StartReplicationTaskAssessmentRun">StartReplicationTaskAssessmentRun</a></code> | <code>string[]</code> | IAM actions required for the StartReplicationTaskAssessmentRun API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StopDataMigration">StopDataMigration</a></code> | <code>string[]</code> | IAM actions required for the StopDataMigration API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StopReplication">StopReplication</a></code> | <code>string[]</code> | IAM actions required for the StopReplication API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.StopReplicationTask">StopReplicationTask</a></code> | <code>string[]</code> | IAM actions required for the StopReplicationTask API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.TestConnection">TestConnection</a></code> | <code>string[]</code> | IAM actions required for the TestConnection API call. |
| <code><a href="#@cdk_utils/iam.dms.DmsOperations.property.UpdateSubscriptionsToEventBridge">UpdateSubscriptionsToEventBridge</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubscriptionsToEventBridge API call. |

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.dms.DmsOperations.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string[];
```

- *Type:* string[]

IAM actions required for the AddTagsToResource API call.

---

##### `ApplyPendingMaintenanceAction`<sup>Required</sup> <a name="ApplyPendingMaintenanceAction" id="@cdk_utils/iam.dms.DmsOperations.property.ApplyPendingMaintenanceAction"></a>

```typescript
public readonly ApplyPendingMaintenanceAction: string[];
```

- *Type:* string[]

IAM actions required for the ApplyPendingMaintenanceAction API call.

---

##### `BatchStartRecommendations`<sup>Required</sup> <a name="BatchStartRecommendations" id="@cdk_utils/iam.dms.DmsOperations.property.BatchStartRecommendations"></a>

```typescript
public readonly BatchStartRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the BatchStartRecommendations API call.

---

##### `CancelMetadataModelConversion`<sup>Required</sup> <a name="CancelMetadataModelConversion" id="@cdk_utils/iam.dms.DmsOperations.property.CancelMetadataModelConversion"></a>

```typescript
public readonly CancelMetadataModelConversion: string[];
```

- *Type:* string[]

IAM actions required for the CancelMetadataModelConversion API call.

---

##### `CancelMetadataModelCreation`<sup>Required</sup> <a name="CancelMetadataModelCreation" id="@cdk_utils/iam.dms.DmsOperations.property.CancelMetadataModelCreation"></a>

```typescript
public readonly CancelMetadataModelCreation: string[];
```

- *Type:* string[]

IAM actions required for the CancelMetadataModelCreation API call.

---

##### `CancelReplicationTaskAssessmentRun`<sup>Required</sup> <a name="CancelReplicationTaskAssessmentRun" id="@cdk_utils/iam.dms.DmsOperations.property.CancelReplicationTaskAssessmentRun"></a>

```typescript
public readonly CancelReplicationTaskAssessmentRun: string[];
```

- *Type:* string[]

IAM actions required for the CancelReplicationTaskAssessmentRun API call.

---

##### `CreateDataMigration`<sup>Required</sup> <a name="CreateDataMigration" id="@cdk_utils/iam.dms.DmsOperations.property.CreateDataMigration"></a>

```typescript
public readonly CreateDataMigration: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataMigration API call.

---

##### `CreateDataProvider`<sup>Required</sup> <a name="CreateDataProvider" id="@cdk_utils/iam.dms.DmsOperations.property.CreateDataProvider"></a>

```typescript
public readonly CreateDataProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataProvider API call.

---

##### `CreateEndpoint`<sup>Required</sup> <a name="CreateEndpoint" id="@cdk_utils/iam.dms.DmsOperations.property.CreateEndpoint"></a>

```typescript
public readonly CreateEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateEndpoint API call.

---

##### `CreateEventSubscription`<sup>Required</sup> <a name="CreateEventSubscription" id="@cdk_utils/iam.dms.DmsOperations.property.CreateEventSubscription"></a>

```typescript
public readonly CreateEventSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventSubscription API call.

---

##### `CreateFleetAdvisorCollector`<sup>Required</sup> <a name="CreateFleetAdvisorCollector" id="@cdk_utils/iam.dms.DmsOperations.property.CreateFleetAdvisorCollector"></a>

```typescript
public readonly CreateFleetAdvisorCollector: string[];
```

- *Type:* string[]

IAM actions required for the CreateFleetAdvisorCollector API call.

---

##### `CreateInstanceProfile`<sup>Required</sup> <a name="CreateInstanceProfile" id="@cdk_utils/iam.dms.DmsOperations.property.CreateInstanceProfile"></a>

```typescript
public readonly CreateInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateInstanceProfile API call.

---

##### `CreateMigrationProject`<sup>Required</sup> <a name="CreateMigrationProject" id="@cdk_utils/iam.dms.DmsOperations.property.CreateMigrationProject"></a>

```typescript
public readonly CreateMigrationProject: string[];
```

- *Type:* string[]

IAM actions required for the CreateMigrationProject API call.

---

##### `CreateReplicationConfig`<sup>Required</sup> <a name="CreateReplicationConfig" id="@cdk_utils/iam.dms.DmsOperations.property.CreateReplicationConfig"></a>

```typescript
public readonly CreateReplicationConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateReplicationConfig API call.

---

##### `CreateReplicationInstance`<sup>Required</sup> <a name="CreateReplicationInstance" id="@cdk_utils/iam.dms.DmsOperations.property.CreateReplicationInstance"></a>

```typescript
public readonly CreateReplicationInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateReplicationInstance API call.

---

##### `CreateReplicationSubnetGroup`<sup>Required</sup> <a name="CreateReplicationSubnetGroup" id="@cdk_utils/iam.dms.DmsOperations.property.CreateReplicationSubnetGroup"></a>

```typescript
public readonly CreateReplicationSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateReplicationSubnetGroup API call.

---

##### `CreateReplicationTask`<sup>Required</sup> <a name="CreateReplicationTask" id="@cdk_utils/iam.dms.DmsOperations.property.CreateReplicationTask"></a>

```typescript
public readonly CreateReplicationTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateReplicationTask API call.

---

##### `DeleteCertificate`<sup>Required</sup> <a name="DeleteCertificate" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteCertificate"></a>

```typescript
public readonly DeleteCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCertificate API call.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `DeleteDataMigration`<sup>Required</sup> <a name="DeleteDataMigration" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteDataMigration"></a>

```typescript
public readonly DeleteDataMigration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataMigration API call.

---

##### `DeleteDataProvider`<sup>Required</sup> <a name="DeleteDataProvider" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteDataProvider"></a>

```typescript
public readonly DeleteDataProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataProvider API call.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEndpoint API call.

---

##### `DeleteEventSubscription`<sup>Required</sup> <a name="DeleteEventSubscription" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteEventSubscription"></a>

```typescript
public readonly DeleteEventSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventSubscription API call.

---

##### `DeleteFleetAdvisorCollector`<sup>Required</sup> <a name="DeleteFleetAdvisorCollector" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteFleetAdvisorCollector"></a>

```typescript
public readonly DeleteFleetAdvisorCollector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFleetAdvisorCollector API call.

---

##### `DeleteFleetAdvisorDatabases`<sup>Required</sup> <a name="DeleteFleetAdvisorDatabases" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteFleetAdvisorDatabases"></a>

```typescript
public readonly DeleteFleetAdvisorDatabases: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFleetAdvisorDatabases API call.

---

##### `DeleteInstanceProfile`<sup>Required</sup> <a name="DeleteInstanceProfile" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteInstanceProfile"></a>

```typescript
public readonly DeleteInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInstanceProfile API call.

---

##### `DeleteMigrationProject`<sup>Required</sup> <a name="DeleteMigrationProject" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteMigrationProject"></a>

```typescript
public readonly DeleteMigrationProject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMigrationProject API call.

---

##### `DeleteReplicationConfig`<sup>Required</sup> <a name="DeleteReplicationConfig" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteReplicationConfig"></a>

```typescript
public readonly DeleteReplicationConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReplicationConfig API call.

---

##### `DeleteReplicationInstance`<sup>Required</sup> <a name="DeleteReplicationInstance" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteReplicationInstance"></a>

```typescript
public readonly DeleteReplicationInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReplicationInstance API call.

---

##### `DeleteReplicationSubnetGroup`<sup>Required</sup> <a name="DeleteReplicationSubnetGroup" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteReplicationSubnetGroup"></a>

```typescript
public readonly DeleteReplicationSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReplicationSubnetGroup API call.

---

##### `DeleteReplicationTask`<sup>Required</sup> <a name="DeleteReplicationTask" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteReplicationTask"></a>

```typescript
public readonly DeleteReplicationTask: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReplicationTask API call.

---

##### `DeleteReplicationTaskAssessmentRun`<sup>Required</sup> <a name="DeleteReplicationTaskAssessmentRun" id="@cdk_utils/iam.dms.DmsOperations.property.DeleteReplicationTaskAssessmentRun"></a>

```typescript
public readonly DeleteReplicationTaskAssessmentRun: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReplicationTaskAssessmentRun API call.

---

##### `DescribeAccountAttributes`<sup>Required</sup> <a name="DescribeAccountAttributes" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeAccountAttributes"></a>

```typescript
public readonly DescribeAccountAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountAttributes API call.

---

##### `DescribeApplicableIndividualAssessments`<sup>Required</sup> <a name="DescribeApplicableIndividualAssessments" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeApplicableIndividualAssessments"></a>

```typescript
public readonly DescribeApplicableIndividualAssessments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplicableIndividualAssessments API call.

---

##### `DescribeCertificates`<sup>Required</sup> <a name="DescribeCertificates" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeCertificates"></a>

```typescript
public readonly DescribeCertificates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCertificates API call.

---

##### `DescribeConnections`<sup>Required</sup> <a name="DescribeConnections" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeConnections"></a>

```typescript
public readonly DescribeConnections: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnections API call.

---

##### `DescribeConversionConfiguration`<sup>Required</sup> <a name="DescribeConversionConfiguration" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeConversionConfiguration"></a>

```typescript
public readonly DescribeConversionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConversionConfiguration API call.

---

##### `DescribeDataMigrations`<sup>Required</sup> <a name="DescribeDataMigrations" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeDataMigrations"></a>

```typescript
public readonly DescribeDataMigrations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataMigrations API call.

---

##### `DescribeDataProviders`<sup>Required</sup> <a name="DescribeDataProviders" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeDataProviders"></a>

```typescript
public readonly DescribeDataProviders: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataProviders API call.

---

##### `DescribeEndpoints`<sup>Required</sup> <a name="DescribeEndpoints" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeEndpoints"></a>

```typescript
public readonly DescribeEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpoints API call.

---

##### `DescribeEndpointSettings`<sup>Required</sup> <a name="DescribeEndpointSettings" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeEndpointSettings"></a>

```typescript
public readonly DescribeEndpointSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpointSettings API call.

---

##### `DescribeEndpointTypes`<sup>Required</sup> <a name="DescribeEndpointTypes" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeEndpointTypes"></a>

```typescript
public readonly DescribeEndpointTypes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpointTypes API call.

---

##### `DescribeEngineVersions`<sup>Required</sup> <a name="DescribeEngineVersions" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeEngineVersions"></a>

```typescript
public readonly DescribeEngineVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEngineVersions API call.

---

##### `DescribeEventCategories`<sup>Required</sup> <a name="DescribeEventCategories" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeEventCategories"></a>

```typescript
public readonly DescribeEventCategories: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventCategories API call.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEvents API call.

---

##### `DescribeEventSubscriptions`<sup>Required</sup> <a name="DescribeEventSubscriptions" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeEventSubscriptions"></a>

```typescript
public readonly DescribeEventSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventSubscriptions API call.

---

##### `DescribeExtensionPackAssociations`<sup>Required</sup> <a name="DescribeExtensionPackAssociations" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeExtensionPackAssociations"></a>

```typescript
public readonly DescribeExtensionPackAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExtensionPackAssociations API call.

---

##### `DescribeFleetAdvisorCollectors`<sup>Required</sup> <a name="DescribeFleetAdvisorCollectors" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeFleetAdvisorCollectors"></a>

```typescript
public readonly DescribeFleetAdvisorCollectors: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetAdvisorCollectors API call.

---

##### `DescribeFleetAdvisorDatabases`<sup>Required</sup> <a name="DescribeFleetAdvisorDatabases" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeFleetAdvisorDatabases"></a>

```typescript
public readonly DescribeFleetAdvisorDatabases: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetAdvisorDatabases API call.

---

##### `DescribeFleetAdvisorLsaAnalysis`<sup>Required</sup> <a name="DescribeFleetAdvisorLsaAnalysis" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeFleetAdvisorLsaAnalysis"></a>

```typescript
public readonly DescribeFleetAdvisorLsaAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetAdvisorLsaAnalysis API call.

---

##### `DescribeFleetAdvisorSchemaObjectSummary`<sup>Required</sup> <a name="DescribeFleetAdvisorSchemaObjectSummary" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeFleetAdvisorSchemaObjectSummary"></a>

```typescript
public readonly DescribeFleetAdvisorSchemaObjectSummary: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetAdvisorSchemaObjectSummary API call.

---

##### `DescribeFleetAdvisorSchemas`<sup>Required</sup> <a name="DescribeFleetAdvisorSchemas" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeFleetAdvisorSchemas"></a>

```typescript
public readonly DescribeFleetAdvisorSchemas: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFleetAdvisorSchemas API call.

---

##### `DescribeInstanceProfiles`<sup>Required</sup> <a name="DescribeInstanceProfiles" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeInstanceProfiles"></a>

```typescript
public readonly DescribeInstanceProfiles: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstanceProfiles API call.

---

##### `DescribeMetadataModel`<sup>Required</sup> <a name="DescribeMetadataModel" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModel"></a>

```typescript
public readonly DescribeMetadataModel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetadataModel API call.

---

##### `DescribeMetadataModelAssessments`<sup>Required</sup> <a name="DescribeMetadataModelAssessments" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelAssessments"></a>

```typescript
public readonly DescribeMetadataModelAssessments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetadataModelAssessments API call.

---

##### `DescribeMetadataModelChildren`<sup>Required</sup> <a name="DescribeMetadataModelChildren" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelChildren"></a>

```typescript
public readonly DescribeMetadataModelChildren: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetadataModelChildren API call.

---

##### `DescribeMetadataModelConversions`<sup>Required</sup> <a name="DescribeMetadataModelConversions" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelConversions"></a>

```typescript
public readonly DescribeMetadataModelConversions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetadataModelConversions API call.

---

##### `DescribeMetadataModelCreations`<sup>Required</sup> <a name="DescribeMetadataModelCreations" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelCreations"></a>

```typescript
public readonly DescribeMetadataModelCreations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetadataModelCreations API call.

---

##### `DescribeMetadataModelExportsAsScript`<sup>Required</sup> <a name="DescribeMetadataModelExportsAsScript" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelExportsAsScript"></a>

```typescript
public readonly DescribeMetadataModelExportsAsScript: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetadataModelExportsAsScript API call.

---

##### `DescribeMetadataModelExportsToTarget`<sup>Required</sup> <a name="DescribeMetadataModelExportsToTarget" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelExportsToTarget"></a>

```typescript
public readonly DescribeMetadataModelExportsToTarget: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetadataModelExportsToTarget API call.

---

##### `DescribeMetadataModelImports`<sup>Required</sup> <a name="DescribeMetadataModelImports" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeMetadataModelImports"></a>

```typescript
public readonly DescribeMetadataModelImports: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetadataModelImports API call.

---

##### `DescribeMigrationProjects`<sup>Required</sup> <a name="DescribeMigrationProjects" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeMigrationProjects"></a>

```typescript
public readonly DescribeMigrationProjects: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMigrationProjects API call.

---

##### `DescribeOrderableReplicationInstances`<sup>Required</sup> <a name="DescribeOrderableReplicationInstances" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeOrderableReplicationInstances"></a>

```typescript
public readonly DescribeOrderableReplicationInstances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrderableReplicationInstances API call.

---

##### `DescribePendingMaintenanceActions`<sup>Required</sup> <a name="DescribePendingMaintenanceActions" id="@cdk_utils/iam.dms.DmsOperations.property.DescribePendingMaintenanceActions"></a>

```typescript
public readonly DescribePendingMaintenanceActions: string[];
```

- *Type:* string[]

IAM actions required for the DescribePendingMaintenanceActions API call.

---

##### `DescribeRecommendationLimitations`<sup>Required</sup> <a name="DescribeRecommendationLimitations" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeRecommendationLimitations"></a>

```typescript
public readonly DescribeRecommendationLimitations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRecommendationLimitations API call.

---

##### `DescribeRecommendations`<sup>Required</sup> <a name="DescribeRecommendations" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeRecommendations"></a>

```typescript
public readonly DescribeRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRecommendations API call.

---

##### `DescribeRefreshSchemasStatus`<sup>Required</sup> <a name="DescribeRefreshSchemasStatus" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeRefreshSchemasStatus"></a>

```typescript
public readonly DescribeRefreshSchemasStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRefreshSchemasStatus API call.

---

##### `DescribeReplicationConfigs`<sup>Required</sup> <a name="DescribeReplicationConfigs" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationConfigs"></a>

```typescript
public readonly DescribeReplicationConfigs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationConfigs API call.

---

##### `DescribeReplicationInstances`<sup>Required</sup> <a name="DescribeReplicationInstances" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationInstances"></a>

```typescript
public readonly DescribeReplicationInstances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationInstances API call.

---

##### `DescribeReplicationInstanceTaskLogs`<sup>Required</sup> <a name="DescribeReplicationInstanceTaskLogs" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationInstanceTaskLogs"></a>

```typescript
public readonly DescribeReplicationInstanceTaskLogs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationInstanceTaskLogs API call.

---

##### `DescribeReplications`<sup>Required</sup> <a name="DescribeReplications" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeReplications"></a>

```typescript
public readonly DescribeReplications: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplications API call.

---

##### `DescribeReplicationSubnetGroups`<sup>Required</sup> <a name="DescribeReplicationSubnetGroups" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationSubnetGroups"></a>

```typescript
public readonly DescribeReplicationSubnetGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationSubnetGroups API call.

---

##### `DescribeReplicationTableStatistics`<sup>Required</sup> <a name="DescribeReplicationTableStatistics" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationTableStatistics"></a>

```typescript
public readonly DescribeReplicationTableStatistics: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationTableStatistics API call.

---

##### `DescribeReplicationTaskAssessmentResults`<sup>Required</sup> <a name="DescribeReplicationTaskAssessmentResults" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationTaskAssessmentResults"></a>

```typescript
public readonly DescribeReplicationTaskAssessmentResults: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationTaskAssessmentResults API call.

---

##### `DescribeReplicationTaskAssessmentRuns`<sup>Required</sup> <a name="DescribeReplicationTaskAssessmentRuns" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationTaskAssessmentRuns"></a>

```typescript
public readonly DescribeReplicationTaskAssessmentRuns: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationTaskAssessmentRuns API call.

---

##### `DescribeReplicationTaskIndividualAssessments`<sup>Required</sup> <a name="DescribeReplicationTaskIndividualAssessments" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationTaskIndividualAssessments"></a>

```typescript
public readonly DescribeReplicationTaskIndividualAssessments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationTaskIndividualAssessments API call.

---

##### `DescribeReplicationTasks`<sup>Required</sup> <a name="DescribeReplicationTasks" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeReplicationTasks"></a>

```typescript
public readonly DescribeReplicationTasks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationTasks API call.

---

##### `DescribeSchemas`<sup>Required</sup> <a name="DescribeSchemas" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeSchemas"></a>

```typescript
public readonly DescribeSchemas: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSchemas API call.

---

##### `DescribeTableStatistics`<sup>Required</sup> <a name="DescribeTableStatistics" id="@cdk_utils/iam.dms.DmsOperations.property.DescribeTableStatistics"></a>

```typescript
public readonly DescribeTableStatistics: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTableStatistics API call.

---

##### `ExportMetadataModelAssessment`<sup>Required</sup> <a name="ExportMetadataModelAssessment" id="@cdk_utils/iam.dms.DmsOperations.property.ExportMetadataModelAssessment"></a>

```typescript
public readonly ExportMetadataModelAssessment: string[];
```

- *Type:* string[]

IAM actions required for the ExportMetadataModelAssessment API call.

---

##### `ImportCertificate`<sup>Required</sup> <a name="ImportCertificate" id="@cdk_utils/iam.dms.DmsOperations.property.ImportCertificate"></a>

```typescript
public readonly ImportCertificate: string[];
```

- *Type:* string[]

IAM actions required for the ImportCertificate API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.dms.DmsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ModifyConversionConfiguration`<sup>Required</sup> <a name="ModifyConversionConfiguration" id="@cdk_utils/iam.dms.DmsOperations.property.ModifyConversionConfiguration"></a>

```typescript
public readonly ModifyConversionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ModifyConversionConfiguration API call.

---

##### `ModifyDataMigration`<sup>Required</sup> <a name="ModifyDataMigration" id="@cdk_utils/iam.dms.DmsOperations.property.ModifyDataMigration"></a>

```typescript
public readonly ModifyDataMigration: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDataMigration API call.

---

##### `ModifyDataProvider`<sup>Required</sup> <a name="ModifyDataProvider" id="@cdk_utils/iam.dms.DmsOperations.property.ModifyDataProvider"></a>

```typescript
public readonly ModifyDataProvider: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDataProvider API call.

---

##### `ModifyEndpoint`<sup>Required</sup> <a name="ModifyEndpoint" id="@cdk_utils/iam.dms.DmsOperations.property.ModifyEndpoint"></a>

```typescript
public readonly ModifyEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the ModifyEndpoint API call.

---

##### `ModifyEventSubscription`<sup>Required</sup> <a name="ModifyEventSubscription" id="@cdk_utils/iam.dms.DmsOperations.property.ModifyEventSubscription"></a>

```typescript
public readonly ModifyEventSubscription: string[];
```

- *Type:* string[]

IAM actions required for the ModifyEventSubscription API call.

---

##### `ModifyInstanceProfile`<sup>Required</sup> <a name="ModifyInstanceProfile" id="@cdk_utils/iam.dms.DmsOperations.property.ModifyInstanceProfile"></a>

```typescript
public readonly ModifyInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the ModifyInstanceProfile API call.

---

##### `ModifyMigrationProject`<sup>Required</sup> <a name="ModifyMigrationProject" id="@cdk_utils/iam.dms.DmsOperations.property.ModifyMigrationProject"></a>

```typescript
public readonly ModifyMigrationProject: string[];
```

- *Type:* string[]

IAM actions required for the ModifyMigrationProject API call.

---

##### `ModifyReplicationConfig`<sup>Required</sup> <a name="ModifyReplicationConfig" id="@cdk_utils/iam.dms.DmsOperations.property.ModifyReplicationConfig"></a>

```typescript
public readonly ModifyReplicationConfig: string[];
```

- *Type:* string[]

IAM actions required for the ModifyReplicationConfig API call.

---

##### `ModifyReplicationInstance`<sup>Required</sup> <a name="ModifyReplicationInstance" id="@cdk_utils/iam.dms.DmsOperations.property.ModifyReplicationInstance"></a>

```typescript
public readonly ModifyReplicationInstance: string[];
```

- *Type:* string[]

IAM actions required for the ModifyReplicationInstance API call.

---

##### `ModifyReplicationSubnetGroup`<sup>Required</sup> <a name="ModifyReplicationSubnetGroup" id="@cdk_utils/iam.dms.DmsOperations.property.ModifyReplicationSubnetGroup"></a>

```typescript
public readonly ModifyReplicationSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyReplicationSubnetGroup API call.

---

##### `ModifyReplicationTask`<sup>Required</sup> <a name="ModifyReplicationTask" id="@cdk_utils/iam.dms.DmsOperations.property.ModifyReplicationTask"></a>

```typescript
public readonly ModifyReplicationTask: string[];
```

- *Type:* string[]

IAM actions required for the ModifyReplicationTask API call.

---

##### `MoveReplicationTask`<sup>Required</sup> <a name="MoveReplicationTask" id="@cdk_utils/iam.dms.DmsOperations.property.MoveReplicationTask"></a>

```typescript
public readonly MoveReplicationTask: string[];
```

- *Type:* string[]

IAM actions required for the MoveReplicationTask API call.

---

##### `opGetTargetSelectionRules`<sup>Required</sup> <a name="opGetTargetSelectionRules" id="@cdk_utils/iam.dms.DmsOperations.property.opGetTargetSelectionRules"></a>

```typescript
public readonly opGetTargetSelectionRules: string[];
```

- *Type:* string[]

IAM actions required for the GetTargetSelectionRules API call.

---

##### `RebootReplicationInstance`<sup>Required</sup> <a name="RebootReplicationInstance" id="@cdk_utils/iam.dms.DmsOperations.property.RebootReplicationInstance"></a>

```typescript
public readonly RebootReplicationInstance: string[];
```

- *Type:* string[]

IAM actions required for the RebootReplicationInstance API call.

---

##### `RefreshSchemas`<sup>Required</sup> <a name="RefreshSchemas" id="@cdk_utils/iam.dms.DmsOperations.property.RefreshSchemas"></a>

```typescript
public readonly RefreshSchemas: string[];
```

- *Type:* string[]

IAM actions required for the RefreshSchemas API call.

---

##### `ReloadReplicationTables`<sup>Required</sup> <a name="ReloadReplicationTables" id="@cdk_utils/iam.dms.DmsOperations.property.ReloadReplicationTables"></a>

```typescript
public readonly ReloadReplicationTables: string[];
```

- *Type:* string[]

IAM actions required for the ReloadReplicationTables API call.

---

##### `ReloadTables`<sup>Required</sup> <a name="ReloadTables" id="@cdk_utils/iam.dms.DmsOperations.property.ReloadTables"></a>

```typescript
public readonly ReloadTables: string[];
```

- *Type:* string[]

IAM actions required for the ReloadTables API call.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.dms.DmsOperations.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTagsFromResource API call.

---

##### `RunFleetAdvisorLsaAnalysis`<sup>Required</sup> <a name="RunFleetAdvisorLsaAnalysis" id="@cdk_utils/iam.dms.DmsOperations.property.RunFleetAdvisorLsaAnalysis"></a>

```typescript
public readonly RunFleetAdvisorLsaAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the RunFleetAdvisorLsaAnalysis API call.

---

##### `StartDataMigration`<sup>Required</sup> <a name="StartDataMigration" id="@cdk_utils/iam.dms.DmsOperations.property.StartDataMigration"></a>

```typescript
public readonly StartDataMigration: string[];
```

- *Type:* string[]

IAM actions required for the StartDataMigration API call.

---

##### `StartExtensionPackAssociation`<sup>Required</sup> <a name="StartExtensionPackAssociation" id="@cdk_utils/iam.dms.DmsOperations.property.StartExtensionPackAssociation"></a>

```typescript
public readonly StartExtensionPackAssociation: string[];
```

- *Type:* string[]

IAM actions required for the StartExtensionPackAssociation API call.

---

##### `StartMetadataModelAssessment`<sup>Required</sup> <a name="StartMetadataModelAssessment" id="@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelAssessment"></a>

```typescript
public readonly StartMetadataModelAssessment: string[];
```

- *Type:* string[]

IAM actions required for the StartMetadataModelAssessment API call.

---

##### `StartMetadataModelConversion`<sup>Required</sup> <a name="StartMetadataModelConversion" id="@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelConversion"></a>

```typescript
public readonly StartMetadataModelConversion: string[];
```

- *Type:* string[]

IAM actions required for the StartMetadataModelConversion API call.

---

##### `StartMetadataModelCreation`<sup>Required</sup> <a name="StartMetadataModelCreation" id="@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelCreation"></a>

```typescript
public readonly StartMetadataModelCreation: string[];
```

- *Type:* string[]

IAM actions required for the StartMetadataModelCreation API call.

---

##### `StartMetadataModelExportAsScript`<sup>Required</sup> <a name="StartMetadataModelExportAsScript" id="@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelExportAsScript"></a>

```typescript
public readonly StartMetadataModelExportAsScript: string[];
```

- *Type:* string[]

IAM actions required for the StartMetadataModelExportAsScript API call.

---

##### `StartMetadataModelExportToTarget`<sup>Required</sup> <a name="StartMetadataModelExportToTarget" id="@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelExportToTarget"></a>

```typescript
public readonly StartMetadataModelExportToTarget: string[];
```

- *Type:* string[]

IAM actions required for the StartMetadataModelExportToTarget API call.

---

##### `StartMetadataModelImport`<sup>Required</sup> <a name="StartMetadataModelImport" id="@cdk_utils/iam.dms.DmsOperations.property.StartMetadataModelImport"></a>

```typescript
public readonly StartMetadataModelImport: string[];
```

- *Type:* string[]

IAM actions required for the StartMetadataModelImport API call.

---

##### `StartRecommendations`<sup>Required</sup> <a name="StartRecommendations" id="@cdk_utils/iam.dms.DmsOperations.property.StartRecommendations"></a>

```typescript
public readonly StartRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the StartRecommendations API call.

---

##### `StartReplication`<sup>Required</sup> <a name="StartReplication" id="@cdk_utils/iam.dms.DmsOperations.property.StartReplication"></a>

```typescript
public readonly StartReplication: string[];
```

- *Type:* string[]

IAM actions required for the StartReplication API call.

---

##### `StartReplicationTask`<sup>Required</sup> <a name="StartReplicationTask" id="@cdk_utils/iam.dms.DmsOperations.property.StartReplicationTask"></a>

```typescript
public readonly StartReplicationTask: string[];
```

- *Type:* string[]

IAM actions required for the StartReplicationTask API call.

---

##### `StartReplicationTaskAssessment`<sup>Required</sup> <a name="StartReplicationTaskAssessment" id="@cdk_utils/iam.dms.DmsOperations.property.StartReplicationTaskAssessment"></a>

```typescript
public readonly StartReplicationTaskAssessment: string[];
```

- *Type:* string[]

IAM actions required for the StartReplicationTaskAssessment API call.

---

##### `StartReplicationTaskAssessmentRun`<sup>Required</sup> <a name="StartReplicationTaskAssessmentRun" id="@cdk_utils/iam.dms.DmsOperations.property.StartReplicationTaskAssessmentRun"></a>

```typescript
public readonly StartReplicationTaskAssessmentRun: string[];
```

- *Type:* string[]

IAM actions required for the StartReplicationTaskAssessmentRun API call.

---

##### `StopDataMigration`<sup>Required</sup> <a name="StopDataMigration" id="@cdk_utils/iam.dms.DmsOperations.property.StopDataMigration"></a>

```typescript
public readonly StopDataMigration: string[];
```

- *Type:* string[]

IAM actions required for the StopDataMigration API call.

---

##### `StopReplication`<sup>Required</sup> <a name="StopReplication" id="@cdk_utils/iam.dms.DmsOperations.property.StopReplication"></a>

```typescript
public readonly StopReplication: string[];
```

- *Type:* string[]

IAM actions required for the StopReplication API call.

---

##### `StopReplicationTask`<sup>Required</sup> <a name="StopReplicationTask" id="@cdk_utils/iam.dms.DmsOperations.property.StopReplicationTask"></a>

```typescript
public readonly StopReplicationTask: string[];
```

- *Type:* string[]

IAM actions required for the StopReplicationTask API call.

---

##### `TestConnection`<sup>Required</sup> <a name="TestConnection" id="@cdk_utils/iam.dms.DmsOperations.property.TestConnection"></a>

```typescript
public readonly TestConnection: string[];
```

- *Type:* string[]

IAM actions required for the TestConnection API call.

---

##### `UpdateSubscriptionsToEventBridge`<sup>Required</sup> <a name="UpdateSubscriptionsToEventBridge" id="@cdk_utils/iam.dms.DmsOperations.property.UpdateSubscriptionsToEventBridge"></a>

```typescript
public readonly UpdateSubscriptionsToEventBridge: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubscriptionsToEventBridge API call.

---

### DmsResources <a name="DmsResources" id="@cdk_utils/iam.dms.DmsResources"></a>

ARN builders, validators, and parsers for dms resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dms.DmsResources.Initializer"></a>

```typescript
import { dms } from '@cdk_utils/iam'

new dms.DmsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.certificate">certificate</a></code> | Builds an ARN for the Certificate resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.dataMigration">dataMigration</a></code> | Builds an ARN for the DataMigration resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.dataProvider">dataProvider</a></code> | Builds an ARN for the DataProvider resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.endpoint">endpoint</a></code> | Builds an ARN for the Endpoint resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.eventSubscription">eventSubscription</a></code> | Builds an ARN for the EventSubscription resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.instanceProfile">instanceProfile</a></code> | Builds an ARN for the InstanceProfile resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidCertificateArn">isValidCertificateArn</a></code> | Validates whether a string is a valid ARN for the Certificate resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidDataMigrationArn">isValidDataMigrationArn</a></code> | Validates whether a string is a valid ARN for the DataMigration resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidDataProviderArn">isValidDataProviderArn</a></code> | Validates whether a string is a valid ARN for the DataProvider resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidEndpointArn">isValidEndpointArn</a></code> | Validates whether a string is a valid ARN for the Endpoint resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidEventSubscriptionArn">isValidEventSubscriptionArn</a></code> | Validates whether a string is a valid ARN for the EventSubscription resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidInstanceProfileArn">isValidInstanceProfileArn</a></code> | Validates whether a string is a valid ARN for the InstanceProfile resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidMigrationProjectArn">isValidMigrationProjectArn</a></code> | Validates whether a string is a valid ARN for the MigrationProject resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidReplicationConfigArn">isValidReplicationConfigArn</a></code> | Validates whether a string is a valid ARN for the ReplicationConfig resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidReplicationInstanceArn">isValidReplicationInstanceArn</a></code> | Validates whether a string is a valid ARN for the ReplicationInstance resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidReplicationSubnetGroupArn">isValidReplicationSubnetGroupArn</a></code> | Validates whether a string is a valid ARN for the ReplicationSubnetGroup resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidReplicationTaskArn">isValidReplicationTaskArn</a></code> | Validates whether a string is a valid ARN for the ReplicationTask resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidReplicationTaskAssessmentRunArn">isValidReplicationTaskAssessmentRunArn</a></code> | Validates whether a string is a valid ARN for the ReplicationTaskAssessmentRun resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.isValidReplicationTaskIndividualAssessmentArn">isValidReplicationTaskIndividualAssessmentArn</a></code> | Validates whether a string is a valid ARN for the ReplicationTaskIndividualAssessment resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.migrationProject">migrationProject</a></code> | Builds an ARN for the MigrationProject resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseCertificateArn">parseCertificateArn</a></code> | Parses a Certificate ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseDataMigrationArn">parseDataMigrationArn</a></code> | Parses a DataMigration ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseDataProviderArn">parseDataProviderArn</a></code> | Parses a DataProvider ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseEndpointArn">parseEndpointArn</a></code> | Parses a Endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseEventSubscriptionArn">parseEventSubscriptionArn</a></code> | Parses a EventSubscription ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseInstanceProfileArn">parseInstanceProfileArn</a></code> | Parses a InstanceProfile ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseMigrationProjectArn">parseMigrationProjectArn</a></code> | Parses a MigrationProject ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseReplicationConfigArn">parseReplicationConfigArn</a></code> | Parses a ReplicationConfig ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseReplicationInstanceArn">parseReplicationInstanceArn</a></code> | Parses a ReplicationInstance ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseReplicationSubnetGroupArn">parseReplicationSubnetGroupArn</a></code> | Parses a ReplicationSubnetGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseReplicationTaskArn">parseReplicationTaskArn</a></code> | Parses a ReplicationTask ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseReplicationTaskAssessmentRunArn">parseReplicationTaskAssessmentRunArn</a></code> | Parses a ReplicationTaskAssessmentRun ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.parseReplicationTaskIndividualAssessmentArn">parseReplicationTaskIndividualAssessmentArn</a></code> | Parses a ReplicationTaskIndividualAssessment ARN into its components. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.replicationConfig">replicationConfig</a></code> | Builds an ARN for the ReplicationConfig resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.replicationInstance">replicationInstance</a></code> | Builds an ARN for the ReplicationInstance resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.replicationSubnetGroup">replicationSubnetGroup</a></code> | Builds an ARN for the ReplicationSubnetGroup resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.replicationTask">replicationTask</a></code> | Builds an ARN for the ReplicationTask resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.replicationTaskAssessmentRun">replicationTaskAssessmentRun</a></code> | Builds an ARN for the ReplicationTaskAssessmentRun resource. |
| <code><a href="#@cdk_utils/iam.dms.DmsResources.replicationTaskIndividualAssessment">replicationTaskIndividualAssessment</a></code> | Builds an ARN for the ReplicationTaskIndividualAssessment resource. |

---

##### `certificate` <a name="certificate" id="@cdk_utils/iam.dms.DmsResources.certificate"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.certificate(props: DmsCertificateArnProps)
```

Builds an ARN for the Certificate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.certificate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsCertificateArnProps">DmsCertificateArnProps</a>

---

##### `dataMigration` <a name="dataMigration" id="@cdk_utils/iam.dms.DmsResources.dataMigration"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.dataMigration(props: DmsDataMigrationArnProps)
```

Builds an ARN for the DataMigration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.dataMigration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsDataMigrationArnProps">DmsDataMigrationArnProps</a>

---

##### `dataProvider` <a name="dataProvider" id="@cdk_utils/iam.dms.DmsResources.dataProvider"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.dataProvider(props: DmsDataProviderArnProps)
```

Builds an ARN for the DataProvider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.dataProvider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsDataProviderArnProps">DmsDataProviderArnProps</a>

---

##### `endpoint` <a name="endpoint" id="@cdk_utils/iam.dms.DmsResources.endpoint"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.endpoint(props: DmsEndpointArnProps)
```

Builds an ARN for the Endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.endpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsEndpointArnProps">DmsEndpointArnProps</a>

---

##### `eventSubscription` <a name="eventSubscription" id="@cdk_utils/iam.dms.DmsResources.eventSubscription"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.eventSubscription(props: DmsEventSubscriptionArnProps)
```

Builds an ARN for the EventSubscription resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.eventSubscription.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsEventSubscriptionArnProps">DmsEventSubscriptionArnProps</a>

---

##### `instanceProfile` <a name="instanceProfile" id="@cdk_utils/iam.dms.DmsResources.instanceProfile"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.instanceProfile(props: DmsInstanceProfileArnProps)
```

Builds an ARN for the InstanceProfile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.instanceProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsInstanceProfileArnProps">DmsInstanceProfileArnProps</a>

---

##### `isValidCertificateArn` <a name="isValidCertificateArn" id="@cdk_utils/iam.dms.DmsResources.isValidCertificateArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidCertificateArn(arn: string)
```

Validates whether a string is a valid ARN for the Certificate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataMigrationArn` <a name="isValidDataMigrationArn" id="@cdk_utils/iam.dms.DmsResources.isValidDataMigrationArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidDataMigrationArn(arn: string)
```

Validates whether a string is a valid ARN for the DataMigration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidDataMigrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataProviderArn` <a name="isValidDataProviderArn" id="@cdk_utils/iam.dms.DmsResources.isValidDataProviderArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidDataProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the DataProvider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidDataProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEndpointArn` <a name="isValidEndpointArn" id="@cdk_utils/iam.dms.DmsResources.isValidEndpointArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the Endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventSubscriptionArn` <a name="isValidEventSubscriptionArn" id="@cdk_utils/iam.dms.DmsResources.isValidEventSubscriptionArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidEventSubscriptionArn(arn: string)
```

Validates whether a string is a valid ARN for the EventSubscription resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidEventSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceProfileArn` <a name="isValidInstanceProfileArn" id="@cdk_utils/iam.dms.DmsResources.isValidInstanceProfileArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidInstanceProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the InstanceProfile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidInstanceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMigrationProjectArn` <a name="isValidMigrationProjectArn" id="@cdk_utils/iam.dms.DmsResources.isValidMigrationProjectArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidMigrationProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the MigrationProject resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidMigrationProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplicationConfigArn` <a name="isValidReplicationConfigArn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationConfigArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidReplicationConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the ReplicationConfig resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplicationInstanceArn` <a name="isValidReplicationInstanceArn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationInstanceArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidReplicationInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the ReplicationInstance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplicationSubnetGroupArn` <a name="isValidReplicationSubnetGroupArn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationSubnetGroupArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidReplicationSubnetGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the ReplicationSubnetGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationSubnetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplicationTaskArn` <a name="isValidReplicationTaskArn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationTaskArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidReplicationTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the ReplicationTask resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplicationTaskAssessmentRunArn` <a name="isValidReplicationTaskAssessmentRunArn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationTaskAssessmentRunArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidReplicationTaskAssessmentRunArn(arn: string)
```

Validates whether a string is a valid ARN for the ReplicationTaskAssessmentRun resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationTaskAssessmentRunArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplicationTaskIndividualAssessmentArn` <a name="isValidReplicationTaskIndividualAssessmentArn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationTaskIndividualAssessmentArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.isValidReplicationTaskIndividualAssessmentArn(arn: string)
```

Validates whether a string is a valid ARN for the ReplicationTaskIndividualAssessment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.isValidReplicationTaskIndividualAssessmentArn.parameter.arn"></a>

- *Type:* string

---

##### `migrationProject` <a name="migrationProject" id="@cdk_utils/iam.dms.DmsResources.migrationProject"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.migrationProject(props: DmsMigrationProjectArnProps)
```

Builds an ARN for the MigrationProject resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.migrationProject.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsMigrationProjectArnProps">DmsMigrationProjectArnProps</a>

---

##### `parseCertificateArn` <a name="parseCertificateArn" id="@cdk_utils/iam.dms.DmsResources.parseCertificateArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseCertificateArn(arn: string)
```

Parses a Certificate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataMigrationArn` <a name="parseDataMigrationArn" id="@cdk_utils/iam.dms.DmsResources.parseDataMigrationArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseDataMigrationArn(arn: string)
```

Parses a DataMigration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseDataMigrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataProviderArn` <a name="parseDataProviderArn" id="@cdk_utils/iam.dms.DmsResources.parseDataProviderArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseDataProviderArn(arn: string)
```

Parses a DataProvider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseDataProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEndpointArn` <a name="parseEndpointArn" id="@cdk_utils/iam.dms.DmsResources.parseEndpointArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseEndpointArn(arn: string)
```

Parses a Endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventSubscriptionArn` <a name="parseEventSubscriptionArn" id="@cdk_utils/iam.dms.DmsResources.parseEventSubscriptionArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseEventSubscriptionArn(arn: string)
```

Parses a EventSubscription ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseEventSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceProfileArn` <a name="parseInstanceProfileArn" id="@cdk_utils/iam.dms.DmsResources.parseInstanceProfileArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseInstanceProfileArn(arn: string)
```

Parses a InstanceProfile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseInstanceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMigrationProjectArn` <a name="parseMigrationProjectArn" id="@cdk_utils/iam.dms.DmsResources.parseMigrationProjectArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseMigrationProjectArn(arn: string)
```

Parses a MigrationProject ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseMigrationProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplicationConfigArn` <a name="parseReplicationConfigArn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationConfigArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseReplicationConfigArn(arn: string)
```

Parses a ReplicationConfig ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplicationInstanceArn` <a name="parseReplicationInstanceArn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationInstanceArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseReplicationInstanceArn(arn: string)
```

Parses a ReplicationInstance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplicationSubnetGroupArn` <a name="parseReplicationSubnetGroupArn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationSubnetGroupArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseReplicationSubnetGroupArn(arn: string)
```

Parses a ReplicationSubnetGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationSubnetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplicationTaskArn` <a name="parseReplicationTaskArn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationTaskArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseReplicationTaskArn(arn: string)
```

Parses a ReplicationTask ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplicationTaskAssessmentRunArn` <a name="parseReplicationTaskAssessmentRunArn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationTaskAssessmentRunArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseReplicationTaskAssessmentRunArn(arn: string)
```

Parses a ReplicationTaskAssessmentRun ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationTaskAssessmentRunArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplicationTaskIndividualAssessmentArn` <a name="parseReplicationTaskIndividualAssessmentArn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationTaskIndividualAssessmentArn"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.parseReplicationTaskIndividualAssessmentArn(arn: string)
```

Parses a ReplicationTaskIndividualAssessment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dms.DmsResources.parseReplicationTaskIndividualAssessmentArn.parameter.arn"></a>

- *Type:* string

---

##### `replicationConfig` <a name="replicationConfig" id="@cdk_utils/iam.dms.DmsResources.replicationConfig"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.replicationConfig(props: DmsReplicationConfigArnProps)
```

Builds an ARN for the ReplicationConfig resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.replicationConfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsReplicationConfigArnProps">DmsReplicationConfigArnProps</a>

---

##### `replicationInstance` <a name="replicationInstance" id="@cdk_utils/iam.dms.DmsResources.replicationInstance"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.replicationInstance(props: DmsReplicationInstanceArnProps)
```

Builds an ARN for the ReplicationInstance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.replicationInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsReplicationInstanceArnProps">DmsReplicationInstanceArnProps</a>

---

##### `replicationSubnetGroup` <a name="replicationSubnetGroup" id="@cdk_utils/iam.dms.DmsResources.replicationSubnetGroup"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.replicationSubnetGroup(props: DmsReplicationSubnetGroupArnProps)
```

Builds an ARN for the ReplicationSubnetGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.replicationSubnetGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsReplicationSubnetGroupArnProps">DmsReplicationSubnetGroupArnProps</a>

---

##### `replicationTask` <a name="replicationTask" id="@cdk_utils/iam.dms.DmsResources.replicationTask"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.replicationTask(props: DmsReplicationTaskArnProps)
```

Builds an ARN for the ReplicationTask resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.replicationTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsReplicationTaskArnProps">DmsReplicationTaskArnProps</a>

---

##### `replicationTaskAssessmentRun` <a name="replicationTaskAssessmentRun" id="@cdk_utils/iam.dms.DmsResources.replicationTaskAssessmentRun"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.replicationTaskAssessmentRun(props: DmsReplicationTaskAssessmentRunArnProps)
```

Builds an ARN for the ReplicationTaskAssessmentRun resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.replicationTaskAssessmentRun.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsReplicationTaskAssessmentRunArnProps">DmsReplicationTaskAssessmentRunArnProps</a>

---

##### `replicationTaskIndividualAssessment` <a name="replicationTaskIndividualAssessment" id="@cdk_utils/iam.dms.DmsResources.replicationTaskIndividualAssessment"></a>

```typescript
import { dms } from '@cdk_utils/iam'

dms.DmsResources.replicationTaskIndividualAssessment(props: DmsReplicationTaskIndividualAssessmentArnProps)
```

Builds an ARN for the ReplicationTaskIndividualAssessment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dms.DmsResources.replicationTaskIndividualAssessment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dms.DmsReplicationTaskIndividualAssessmentArnProps">DmsReplicationTaskIndividualAssessmentArnProps</a>

---




