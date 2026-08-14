# `app_integrations` Submodule <a name="`app_integrations` Submodule" id="@cdk_utils/iam.app_integrations"></a>


## Structs <a name="Structs" id="Structs"></a>

### AppIntegrationsApplicationArnComponents <a name="AppIntegrationsApplicationArnComponents" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnComponents.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsApplicationArnComponents: app_integrations.AppIntegrationsApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppIntegrationsApplicationArnProps <a name="AppIntegrationsApplicationArnProps" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnProps.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsApplicationArnProps: app_integrations.AppIntegrationsApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppIntegrationsApplicationAssociationArnComponents <a name="AppIntegrationsApplicationAssociationArnComponents" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents"></a>

Parsed components of a application-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsApplicationAssociationArnComponents: app_integrations.AppIntegrationsApplicationAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents.property.applicationAssociationId">applicationAssociationId</a></code> | <code>string</code> | The ApplicationAssociationId component. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `applicationAssociationId`<sup>Required</sup> <a name="applicationAssociationId" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents.property.applicationAssociationId"></a>

```typescript
public readonly applicationAssociationId: string;
```

- *Type:* string

The ApplicationAssociationId component.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppIntegrationsApplicationAssociationArnProps <a name="AppIntegrationsApplicationAssociationArnProps" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps"></a>

Properties for building a application-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsApplicationAssociationArnProps: app_integrations.AppIntegrationsApplicationAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps.property.applicationAssociationId">applicationAssociationId</a></code> | <code>string</code> | The ApplicationAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps.property.applicationId">applicationId</a></code> | <code>string</code> | The ApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `applicationAssociationId`<sup>Required</sup> <a name="applicationAssociationId" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps.property.applicationAssociationId"></a>

```typescript
public readonly applicationAssociationId: string;
```

- *Type:* string

The ApplicationAssociationId component of the ARN.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The ApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppIntegrationsDataIntegrationArnComponents <a name="AppIntegrationsDataIntegrationArnComponents" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnComponents"></a>

Parsed components of a data-integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnComponents.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsDataIntegrationArnComponents: app_integrations.AppIntegrationsDataIntegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnComponents.property.dataIntegrationId">dataIntegrationId</a></code> | <code>string</code> | The DataIntegrationId component. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataIntegrationId`<sup>Required</sup> <a name="dataIntegrationId" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnComponents.property.dataIntegrationId"></a>

```typescript
public readonly dataIntegrationId: string;
```

- *Type:* string

The DataIntegrationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppIntegrationsDataIntegrationArnProps <a name="AppIntegrationsDataIntegrationArnProps" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnProps"></a>

Properties for building a data-integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnProps.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsDataIntegrationArnProps: app_integrations.AppIntegrationsDataIntegrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnProps.property.dataIntegrationId">dataIntegrationId</a></code> | <code>string</code> | The DataIntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataIntegrationId`<sup>Required</sup> <a name="dataIntegrationId" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnProps.property.dataIntegrationId"></a>

```typescript
public readonly dataIntegrationId: string;
```

- *Type:* string

The DataIntegrationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppIntegrationsDataIntegrationAssociationArnComponents <a name="AppIntegrationsDataIntegrationAssociationArnComponents" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents"></a>

Parsed components of a data-integration-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsDataIntegrationAssociationArnComponents: app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents.property.dataIntegrationId">dataIntegrationId</a></code> | <code>string</code> | The DataIntegrationId component. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataIntegrationId`<sup>Required</sup> <a name="dataIntegrationId" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents.property.dataIntegrationId"></a>

```typescript
public readonly dataIntegrationId: string;
```

- *Type:* string

The DataIntegrationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AppIntegrationsDataIntegrationAssociationArnProps <a name="AppIntegrationsDataIntegrationAssociationArnProps" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps"></a>

Properties for building a data-integration-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsDataIntegrationAssociationArnProps: app_integrations.AppIntegrationsDataIntegrationAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps.property.dataIntegrationId">dataIntegrationId</a></code> | <code>string</code> | The DataIntegrationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataIntegrationId`<sup>Required</sup> <a name="dataIntegrationId" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps.property.dataIntegrationId"></a>

```typescript
public readonly dataIntegrationId: string;
```

- *Type:* string

The DataIntegrationId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppIntegrationsEventIntegrationArnComponents <a name="AppIntegrationsEventIntegrationArnComponents" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnComponents"></a>

Parsed components of a event-integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnComponents.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsEventIntegrationArnComponents: app_integrations.AppIntegrationsEventIntegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnComponents.property.eventIntegrationName">eventIntegrationName</a></code> | <code>string</code> | The EventIntegrationName component. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventIntegrationName`<sup>Required</sup> <a name="eventIntegrationName" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnComponents.property.eventIntegrationName"></a>

```typescript
public readonly eventIntegrationName: string;
```

- *Type:* string

The EventIntegrationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppIntegrationsEventIntegrationArnProps <a name="AppIntegrationsEventIntegrationArnProps" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnProps"></a>

Properties for building a event-integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnProps.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsEventIntegrationArnProps: app_integrations.AppIntegrationsEventIntegrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnProps.property.eventIntegrationName">eventIntegrationName</a></code> | <code>string</code> | The EventIntegrationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventIntegrationName`<sup>Required</sup> <a name="eventIntegrationName" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnProps.property.eventIntegrationName"></a>

```typescript
public readonly eventIntegrationName: string;
```

- *Type:* string

The EventIntegrationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppIntegrationsEventIntegrationAssociationArnComponents <a name="AppIntegrationsEventIntegrationAssociationArnComponents" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents"></a>

Parsed components of a event-integration-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsEventIntegrationAssociationArnComponents: app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents.property.eventIntegrationName">eventIntegrationName</a></code> | <code>string</code> | The EventIntegrationName component. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventIntegrationName`<sup>Required</sup> <a name="eventIntegrationName" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents.property.eventIntegrationName"></a>

```typescript
public readonly eventIntegrationName: string;
```

- *Type:* string

The EventIntegrationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AppIntegrationsEventIntegrationAssociationArnProps <a name="AppIntegrationsEventIntegrationAssociationArnProps" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps"></a>

Properties for building a event-integration-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

const appIntegrationsEventIntegrationAssociationArnProps: app_integrations.AppIntegrationsEventIntegrationAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps.property.eventIntegrationName">eventIntegrationName</a></code> | <code>string</code> | The EventIntegrationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventIntegrationName`<sup>Required</sup> <a name="eventIntegrationName" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps.property.eventIntegrationName"></a>

```typescript
public readonly eventIntegrationName: string;
```

- *Type:* string

The EventIntegrationName component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AppIntegrationsActions <a name="AppIntegrationsActions" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions"></a>

IAM action constants for the app-integrations service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

new app_integrations.AppIntegrationsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] app-integrations:GetApplication. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.actionGetDataIntegration">actionGetDataIntegration</a></code> | <code>string</code> | [Read] app-integrations:GetDataIntegration. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.actionGetDataIntegrationExecution">actionGetDataIntegrationExecution</a></code> | <code>string</code> | [Read] app-integrations:GetDataIntegrationExecution. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.actionGetDataIntegrationSchedule">actionGetDataIntegrationSchedule</a></code> | <code>string</code> | [Read] app-integrations:GetDataIntegrationSchedule. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.actionGetEventIntegration">actionGetEventIntegration</a></code> | <code>string</code> | [Read] app-integrations:GetEventIntegration. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] app-integrations:CreateApplication. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateApplicationAssociation">CreateApplicationAssociation</a></code> | <code>string</code> | [Write] app-integrations:CreateApplicationAssociation. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateDataIntegration">CreateDataIntegration</a></code> | <code>string</code> | [Write] app-integrations:CreateDataIntegration. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateDataIntegrationAssociation">CreateDataIntegrationAssociation</a></code> | <code>string</code> | [Write] app-integrations:CreateDataIntegrationAssociation. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateDataIntegrationSchedule">CreateDataIntegrationSchedule</a></code> | <code>string</code> | [Write] app-integrations:CreateDataIntegrationSchedule. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateEventIntegration">CreateEventIntegration</a></code> | <code>string</code> | [Write] app-integrations:CreateEventIntegration. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateEventIntegrationAssociation">CreateEventIntegrationAssociation</a></code> | <code>string</code> | [Write] app-integrations:CreateEventIntegrationAssociation. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] app-integrations:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteApplicationAssociation">DeleteApplicationAssociation</a></code> | <code>string</code> | [Write] app-integrations:DeleteApplicationAssociation. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteDataIntegration">DeleteDataIntegration</a></code> | <code>string</code> | [Write] app-integrations:DeleteDataIntegration. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteDataIntegrationAssociation">DeleteDataIntegrationAssociation</a></code> | <code>string</code> | [Write] app-integrations:DeleteDataIntegrationAssociation. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteEventIntegration">DeleteEventIntegration</a></code> | <code>string</code> | [Write] app-integrations:DeleteEventIntegration. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteEventIntegrationAssociation">DeleteEventIntegrationAssociation</a></code> | <code>string</code> | [Write] app-integrations:DeleteEventIntegrationAssociation. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListApplicationAssociations">ListApplicationAssociations</a></code> | <code>string</code> | [List] app-integrations:ListApplicationAssociations. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] app-integrations:ListApplications. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListDataIntegrationAssociations">ListDataIntegrationAssociations</a></code> | <code>string</code> | [List] app-integrations:ListDataIntegrationAssociations. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListDataIntegrationExecutions">ListDataIntegrationExecutions</a></code> | <code>string</code> | [List] app-integrations:ListDataIntegrationExecutions. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListDataIntegrations">ListDataIntegrations</a></code> | <code>string</code> | [List] app-integrations:ListDataIntegrations. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListDataIntegrationSchedules">ListDataIntegrationSchedules</a></code> | <code>string</code> | [List] app-integrations:ListDataIntegrationSchedules. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListEventIntegrationAssociations">ListEventIntegrationAssociations</a></code> | <code>string</code> | [Read] app-integrations:ListEventIntegrationAssociations. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListEventIntegrations">ListEventIntegrations</a></code> | <code>string</code> | [List] app-integrations:ListEventIntegrations. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] app-integrations:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.StartDataIntegrationExecution">StartDataIntegrationExecution</a></code> | <code>string</code> | [Write] app-integrations:StartDataIntegrationExecution. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] app-integrations:TagResource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] app-integrations:UntagResource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] app-integrations:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UpdateDataIntegration">UpdateDataIntegration</a></code> | <code>string</code> | [Write] app-integrations:UpdateDataIntegration. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UpdateDataIntegrationAssociation">UpdateDataIntegrationAssociation</a></code> | <code>string</code> | [Write] app-integrations:UpdateDataIntegrationAssociation. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UpdateDataIntegrationSchedule">UpdateDataIntegrationSchedule</a></code> | <code>string</code> | [Write] app-integrations:UpdateDataIntegrationSchedule. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UpdateEventIntegration">UpdateEventIntegration</a></code> | <code>string</code> | [Write] app-integrations:UpdateEventIntegration. |

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] app-integrations:GetApplication.

---

##### `actionGetDataIntegration`<sup>Required</sup> <a name="actionGetDataIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.actionGetDataIntegration"></a>

```typescript
public readonly actionGetDataIntegration: string;
```

- *Type:* string

[Read] app-integrations:GetDataIntegration.

---

##### `actionGetDataIntegrationExecution`<sup>Required</sup> <a name="actionGetDataIntegrationExecution" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.actionGetDataIntegrationExecution"></a>

```typescript
public readonly actionGetDataIntegrationExecution: string;
```

- *Type:* string

[Read] app-integrations:GetDataIntegrationExecution.

---

##### `actionGetDataIntegrationSchedule`<sup>Required</sup> <a name="actionGetDataIntegrationSchedule" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.actionGetDataIntegrationSchedule"></a>

```typescript
public readonly actionGetDataIntegrationSchedule: string;
```

- *Type:* string

[Read] app-integrations:GetDataIntegrationSchedule.

---

##### `actionGetEventIntegration`<sup>Required</sup> <a name="actionGetEventIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.actionGetEventIntegration"></a>

```typescript
public readonly actionGetEventIntegration: string;
```

- *Type:* string

[Read] app-integrations:GetEventIntegration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] app-integrations:CreateApplication.

---

##### `CreateApplicationAssociation`<sup>Required</sup> <a name="CreateApplicationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateApplicationAssociation"></a>

```typescript
public readonly CreateApplicationAssociation: string;
```

- *Type:* string

[Write] app-integrations:CreateApplicationAssociation.

---

##### `CreateDataIntegration`<sup>Required</sup> <a name="CreateDataIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateDataIntegration"></a>

```typescript
public readonly CreateDataIntegration: string;
```

- *Type:* string

[Write] app-integrations:CreateDataIntegration.

---

##### `CreateDataIntegrationAssociation`<sup>Required</sup> <a name="CreateDataIntegrationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateDataIntegrationAssociation"></a>

```typescript
public readonly CreateDataIntegrationAssociation: string;
```

- *Type:* string

[Write] app-integrations:CreateDataIntegrationAssociation.

---

##### `CreateDataIntegrationSchedule`<sup>Required</sup> <a name="CreateDataIntegrationSchedule" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateDataIntegrationSchedule"></a>

```typescript
public readonly CreateDataIntegrationSchedule: string;
```

- *Type:* string

[Write] app-integrations:CreateDataIntegrationSchedule.

---

##### `CreateEventIntegration`<sup>Required</sup> <a name="CreateEventIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateEventIntegration"></a>

```typescript
public readonly CreateEventIntegration: string;
```

- *Type:* string

[Write] app-integrations:CreateEventIntegration.

---

##### `CreateEventIntegrationAssociation`<sup>Required</sup> <a name="CreateEventIntegrationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.CreateEventIntegrationAssociation"></a>

```typescript
public readonly CreateEventIntegrationAssociation: string;
```

- *Type:* string

[Write] app-integrations:CreateEventIntegrationAssociation.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] app-integrations:DeleteApplication.

---

##### `DeleteApplicationAssociation`<sup>Required</sup> <a name="DeleteApplicationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteApplicationAssociation"></a>

```typescript
public readonly DeleteApplicationAssociation: string;
```

- *Type:* string

[Write] app-integrations:DeleteApplicationAssociation.

---

##### `DeleteDataIntegration`<sup>Required</sup> <a name="DeleteDataIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteDataIntegration"></a>

```typescript
public readonly DeleteDataIntegration: string;
```

- *Type:* string

[Write] app-integrations:DeleteDataIntegration.

---

##### `DeleteDataIntegrationAssociation`<sup>Required</sup> <a name="DeleteDataIntegrationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteDataIntegrationAssociation"></a>

```typescript
public readonly DeleteDataIntegrationAssociation: string;
```

- *Type:* string

[Write] app-integrations:DeleteDataIntegrationAssociation.

---

##### `DeleteEventIntegration`<sup>Required</sup> <a name="DeleteEventIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteEventIntegration"></a>

```typescript
public readonly DeleteEventIntegration: string;
```

- *Type:* string

[Write] app-integrations:DeleteEventIntegration.

---

##### `DeleteEventIntegrationAssociation`<sup>Required</sup> <a name="DeleteEventIntegrationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.DeleteEventIntegrationAssociation"></a>

```typescript
public readonly DeleteEventIntegrationAssociation: string;
```

- *Type:* string

[Write] app-integrations:DeleteEventIntegrationAssociation.

---

##### `ListApplicationAssociations`<sup>Required</sup> <a name="ListApplicationAssociations" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListApplicationAssociations"></a>

```typescript
public readonly ListApplicationAssociations: string;
```

- *Type:* string

[List] app-integrations:ListApplicationAssociations.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] app-integrations:ListApplications.

---

##### `ListDataIntegrationAssociations`<sup>Required</sup> <a name="ListDataIntegrationAssociations" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListDataIntegrationAssociations"></a>

```typescript
public readonly ListDataIntegrationAssociations: string;
```

- *Type:* string

[List] app-integrations:ListDataIntegrationAssociations.

---

##### `ListDataIntegrationExecutions`<sup>Required</sup> <a name="ListDataIntegrationExecutions" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListDataIntegrationExecutions"></a>

```typescript
public readonly ListDataIntegrationExecutions: string;
```

- *Type:* string

[List] app-integrations:ListDataIntegrationExecutions.

---

##### `ListDataIntegrations`<sup>Required</sup> <a name="ListDataIntegrations" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListDataIntegrations"></a>

```typescript
public readonly ListDataIntegrations: string;
```

- *Type:* string

[List] app-integrations:ListDataIntegrations.

---

##### `ListDataIntegrationSchedules`<sup>Required</sup> <a name="ListDataIntegrationSchedules" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListDataIntegrationSchedules"></a>

```typescript
public readonly ListDataIntegrationSchedules: string;
```

- *Type:* string

[List] app-integrations:ListDataIntegrationSchedules.

---

##### `ListEventIntegrationAssociations`<sup>Required</sup> <a name="ListEventIntegrationAssociations" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListEventIntegrationAssociations"></a>

```typescript
public readonly ListEventIntegrationAssociations: string;
```

- *Type:* string

[Read] app-integrations:ListEventIntegrationAssociations.

---

##### `ListEventIntegrations`<sup>Required</sup> <a name="ListEventIntegrations" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListEventIntegrations"></a>

```typescript
public readonly ListEventIntegrations: string;
```

- *Type:* string

[List] app-integrations:ListEventIntegrations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] app-integrations:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDataIntegrationExecution`<sup>Required</sup> <a name="StartDataIntegrationExecution" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.StartDataIntegrationExecution"></a>

```typescript
public readonly StartDataIntegrationExecution: string;
```

- *Type:* string

[Write] app-integrations:StartDataIntegrationExecution.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] app-integrations:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] app-integrations:UntagResource.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] app-integrations:UpdateApplication.

---

##### `UpdateDataIntegration`<sup>Required</sup> <a name="UpdateDataIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UpdateDataIntegration"></a>

```typescript
public readonly UpdateDataIntegration: string;
```

- *Type:* string

[Write] app-integrations:UpdateDataIntegration.

---

##### `UpdateDataIntegrationAssociation`<sup>Required</sup> <a name="UpdateDataIntegrationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UpdateDataIntegrationAssociation"></a>

```typescript
public readonly UpdateDataIntegrationAssociation: string;
```

- *Type:* string

[Write] app-integrations:UpdateDataIntegrationAssociation.

---

##### `UpdateDataIntegrationSchedule`<sup>Required</sup> <a name="UpdateDataIntegrationSchedule" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UpdateDataIntegrationSchedule"></a>

```typescript
public readonly UpdateDataIntegrationSchedule: string;
```

- *Type:* string

[Write] app-integrations:UpdateDataIntegrationSchedule.

---

##### `UpdateEventIntegration`<sup>Required</sup> <a name="UpdateEventIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsActions.property.UpdateEventIntegration"></a>

```typescript
public readonly UpdateEventIntegration: string;
```

- *Type:* string

[Write] app-integrations:UpdateEventIntegration.

---

### AppIntegrationsConditions <a name="AppIntegrationsConditions" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions"></a>

Condition key constants and builders for app-integrations.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

new app_integrations.AppIntegrationsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.requestTag"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.resourceTag"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.tagKeys"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.actionGetApplicationConditionKeys">actionGetApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetApplication action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.actionGetDataIntegrationConditionKeys">actionGetDataIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDataIntegration action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.actionGetEventIntegrationConditionKeys">actionGetEventIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEventIntegration action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateApplicationAssociationConditionKeys">CreateApplicationAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplicationAssociation action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateDataIntegrationAssociationConditionKeys">CreateDataIntegrationAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataIntegrationAssociation action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateDataIntegrationConditionKeys">CreateDataIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataIntegration action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateEventIntegrationAssociationConditionKeys">CreateEventIntegrationAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventIntegrationAssociation action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateEventIntegrationConditionKeys">CreateEventIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventIntegration action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.DeleteApplicationConditionKeys">DeleteApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteApplication action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.DeleteDataIntegrationConditionKeys">DeleteDataIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDataIntegration action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.DeleteEventIntegrationConditionKeys">DeleteEventIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEventIntegration action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.UpdateApplicationConditionKeys">UpdateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateApplication action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.UpdateDataIntegrationAssociationConditionKeys">UpdateDataIntegrationAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDataIntegrationAssociation action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.UpdateDataIntegrationConditionKeys">UpdateDataIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDataIntegration action. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.UpdateEventIntegrationConditionKeys">UpdateEventIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEventIntegration action. |

---

##### `actionGetApplicationConditionKeys`<sup>Required</sup> <a name="actionGetApplicationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.actionGetApplicationConditionKeys"></a>

```typescript
public readonly actionGetApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetApplication action.

---

##### `actionGetDataIntegrationConditionKeys`<sup>Required</sup> <a name="actionGetDataIntegrationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.actionGetDataIntegrationConditionKeys"></a>

```typescript
public readonly actionGetDataIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDataIntegration action.

---

##### `actionGetEventIntegrationConditionKeys`<sup>Required</sup> <a name="actionGetEventIntegrationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.actionGetEventIntegrationConditionKeys"></a>

```typescript
public readonly actionGetEventIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEventIntegration action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationAssociationConditionKeys`<sup>Required</sup> <a name="CreateApplicationAssociationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateApplicationAssociationConditionKeys"></a>

```typescript
public readonly CreateApplicationAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplicationAssociation action.

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `CreateDataIntegrationAssociationConditionKeys`<sup>Required</sup> <a name="CreateDataIntegrationAssociationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateDataIntegrationAssociationConditionKeys"></a>

```typescript
public readonly CreateDataIntegrationAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataIntegrationAssociation action.

---

##### `CreateDataIntegrationConditionKeys`<sup>Required</sup> <a name="CreateDataIntegrationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateDataIntegrationConditionKeys"></a>

```typescript
public readonly CreateDataIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataIntegration action.

---

##### `CreateEventIntegrationAssociationConditionKeys`<sup>Required</sup> <a name="CreateEventIntegrationAssociationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateEventIntegrationAssociationConditionKeys"></a>

```typescript
public readonly CreateEventIntegrationAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventIntegrationAssociation action.

---

##### `CreateEventIntegrationConditionKeys`<sup>Required</sup> <a name="CreateEventIntegrationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.CreateEventIntegrationConditionKeys"></a>

```typescript
public readonly CreateEventIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventIntegration action.

---

##### `DeleteApplicationConditionKeys`<sup>Required</sup> <a name="DeleteApplicationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.DeleteApplicationConditionKeys"></a>

```typescript
public readonly DeleteApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteApplication action.

---

##### `DeleteDataIntegrationConditionKeys`<sup>Required</sup> <a name="DeleteDataIntegrationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.DeleteDataIntegrationConditionKeys"></a>

```typescript
public readonly DeleteDataIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDataIntegration action.

---

##### `DeleteEventIntegrationConditionKeys`<sup>Required</sup> <a name="DeleteEventIntegrationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.DeleteEventIntegrationConditionKeys"></a>

```typescript
public readonly DeleteEventIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEventIntegration action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateApplicationConditionKeys`<sup>Required</sup> <a name="UpdateApplicationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.UpdateApplicationConditionKeys"></a>

```typescript
public readonly UpdateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateApplication action.

---

##### `UpdateDataIntegrationAssociationConditionKeys`<sup>Required</sup> <a name="UpdateDataIntegrationAssociationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.UpdateDataIntegrationAssociationConditionKeys"></a>

```typescript
public readonly UpdateDataIntegrationAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDataIntegrationAssociation action.

---

##### `UpdateDataIntegrationConditionKeys`<sup>Required</sup> <a name="UpdateDataIntegrationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.UpdateDataIntegrationConditionKeys"></a>

```typescript
public readonly UpdateDataIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDataIntegration action.

---

##### `UpdateEventIntegrationConditionKeys`<sup>Required</sup> <a name="UpdateEventIntegrationConditionKeys" id="@cdk_utils/iam.app_integrations.AppIntegrationsConditions.property.UpdateEventIntegrationConditionKeys"></a>

```typescript
public readonly UpdateEventIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEventIntegration action.

---

### AppIntegrationsOperations <a name="AppIntegrationsOperations" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations"></a>

API operation to required IAM actions mapping for app-integrations.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

new app_integrations.AppIntegrationsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.CreateDataIntegration">CreateDataIntegration</a></code> | <code>string[]</code> | IAM actions required for the CreateDataIntegration API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.CreateDataIntegrationAssociation">CreateDataIntegrationAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateDataIntegrationAssociation API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.CreateEventIntegration">CreateEventIntegration</a></code> | <code>string[]</code> | IAM actions required for the CreateEventIntegration API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.DeleteDataIntegration">DeleteDataIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataIntegration API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.DeleteEventIntegration">DeleteEventIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventIntegration API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListApplicationAssociations">ListApplicationAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationAssociations API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListDataIntegrationAssociations">ListDataIntegrationAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListDataIntegrationAssociations API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListDataIntegrations">ListDataIntegrations</a></code> | <code>string[]</code> | IAM actions required for the ListDataIntegrations API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListEventIntegrationAssociations">ListEventIntegrationAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListEventIntegrationAssociations API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListEventIntegrations">ListEventIntegrations</a></code> | <code>string[]</code> | IAM actions required for the ListEventIntegrations API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.opGetDataIntegration">opGetDataIntegration</a></code> | <code>string[]</code> | IAM actions required for the GetDataIntegration API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.opGetEventIntegration">opGetEventIntegration</a></code> | <code>string[]</code> | IAM actions required for the GetEventIntegration API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.UpdateDataIntegration">UpdateDataIntegration</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataIntegration API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.UpdateDataIntegrationAssociation">UpdateDataIntegrationAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataIntegrationAssociation API call. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.UpdateEventIntegration">UpdateEventIntegration</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventIntegration API call. |

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateDataIntegration`<sup>Required</sup> <a name="CreateDataIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.CreateDataIntegration"></a>

```typescript
public readonly CreateDataIntegration: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataIntegration API call.

---

##### `CreateDataIntegrationAssociation`<sup>Required</sup> <a name="CreateDataIntegrationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.CreateDataIntegrationAssociation"></a>

```typescript
public readonly CreateDataIntegrationAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataIntegrationAssociation API call.

---

##### `CreateEventIntegration`<sup>Required</sup> <a name="CreateEventIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.CreateEventIntegration"></a>

```typescript
public readonly CreateEventIntegration: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventIntegration API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteDataIntegration`<sup>Required</sup> <a name="DeleteDataIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.DeleteDataIntegration"></a>

```typescript
public readonly DeleteDataIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataIntegration API call.

---

##### `DeleteEventIntegration`<sup>Required</sup> <a name="DeleteEventIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.DeleteEventIntegration"></a>

```typescript
public readonly DeleteEventIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventIntegration API call.

---

##### `ListApplicationAssociations`<sup>Required</sup> <a name="ListApplicationAssociations" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListApplicationAssociations"></a>

```typescript
public readonly ListApplicationAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationAssociations API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListDataIntegrationAssociations`<sup>Required</sup> <a name="ListDataIntegrationAssociations" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListDataIntegrationAssociations"></a>

```typescript
public readonly ListDataIntegrationAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListDataIntegrationAssociations API call.

---

##### `ListDataIntegrations`<sup>Required</sup> <a name="ListDataIntegrations" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListDataIntegrations"></a>

```typescript
public readonly ListDataIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the ListDataIntegrations API call.

---

##### `ListEventIntegrationAssociations`<sup>Required</sup> <a name="ListEventIntegrationAssociations" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListEventIntegrationAssociations"></a>

```typescript
public readonly ListEventIntegrationAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListEventIntegrationAssociations API call.

---

##### `ListEventIntegrations`<sup>Required</sup> <a name="ListEventIntegrations" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListEventIntegrations"></a>

```typescript
public readonly ListEventIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the ListEventIntegrations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetDataIntegration`<sup>Required</sup> <a name="opGetDataIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.opGetDataIntegration"></a>

```typescript
public readonly opGetDataIntegration: string[];
```

- *Type:* string[]

IAM actions required for the GetDataIntegration API call.

---

##### `opGetEventIntegration`<sup>Required</sup> <a name="opGetEventIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.opGetEventIntegration"></a>

```typescript
public readonly opGetEventIntegration: string[];
```

- *Type:* string[]

IAM actions required for the GetEventIntegration API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateDataIntegration`<sup>Required</sup> <a name="UpdateDataIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.UpdateDataIntegration"></a>

```typescript
public readonly UpdateDataIntegration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataIntegration API call.

---

##### `UpdateDataIntegrationAssociation`<sup>Required</sup> <a name="UpdateDataIntegrationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.UpdateDataIntegrationAssociation"></a>

```typescript
public readonly UpdateDataIntegrationAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataIntegrationAssociation API call.

---

##### `UpdateEventIntegration`<sup>Required</sup> <a name="UpdateEventIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsOperations.property.UpdateEventIntegration"></a>

```typescript
public readonly UpdateEventIntegration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventIntegration API call.

---

### AppIntegrationsResources <a name="AppIntegrationsResources" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources"></a>

ARN builders, validators, and parsers for app-integrations resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.Initializer"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

new app_integrations.AppIntegrationsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.applicationAssociation">applicationAssociation</a></code> | Builds an ARN for the application-association resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.dataIntegration">dataIntegration</a></code> | Builds an ARN for the data-integration resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.dataIntegrationAssociation">dataIntegrationAssociation</a></code> | Builds an ARN for the data-integration-association resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.eventIntegration">eventIntegration</a></code> | Builds an ARN for the event-integration resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.eventIntegrationAssociation">eventIntegrationAssociation</a></code> | Builds an ARN for the event-integration-association resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidApplicationAssociationArn">isValidApplicationAssociationArn</a></code> | Validates whether a string is a valid ARN for the application-association resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidDataIntegrationArn">isValidDataIntegrationArn</a></code> | Validates whether a string is a valid ARN for the data-integration resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidDataIntegrationAssociationArn">isValidDataIntegrationAssociationArn</a></code> | Validates whether a string is a valid ARN for the data-integration-association resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidEventIntegrationArn">isValidEventIntegrationArn</a></code> | Validates whether a string is a valid ARN for the event-integration resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidEventIntegrationAssociationArn">isValidEventIntegrationAssociationArn</a></code> | Validates whether a string is a valid ARN for the event-integration-association resource. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseApplicationAssociationArn">parseApplicationAssociationArn</a></code> | Parses a application-association ARN into its components. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseDataIntegrationArn">parseDataIntegrationArn</a></code> | Parses a data-integration ARN into its components. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseDataIntegrationAssociationArn">parseDataIntegrationAssociationArn</a></code> | Parses a data-integration-association ARN into its components. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseEventIntegrationArn">parseEventIntegrationArn</a></code> | Parses a event-integration ARN into its components. |
| <code><a href="#@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseEventIntegrationAssociationArn">parseEventIntegrationAssociationArn</a></code> | Parses a event-integration-association ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.application"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.application(props: AppIntegrationsApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationArnProps">AppIntegrationsApplicationArnProps</a>

---

##### `applicationAssociation` <a name="applicationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.applicationAssociation"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.applicationAssociation(props: AppIntegrationsApplicationAssociationArnProps)
```

Builds an ARN for the application-association resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.applicationAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.app_integrations.AppIntegrationsApplicationAssociationArnProps">AppIntegrationsApplicationAssociationArnProps</a>

---

##### `dataIntegration` <a name="dataIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.dataIntegration"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.dataIntegration(props: AppIntegrationsDataIntegrationArnProps)
```

Builds an ARN for the data-integration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.dataIntegration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationArnProps">AppIntegrationsDataIntegrationArnProps</a>

---

##### `dataIntegrationAssociation` <a name="dataIntegrationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.dataIntegrationAssociation"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.dataIntegrationAssociation(props: AppIntegrationsDataIntegrationAssociationArnProps)
```

Builds an ARN for the data-integration-association resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.dataIntegrationAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.app_integrations.AppIntegrationsDataIntegrationAssociationArnProps">AppIntegrationsDataIntegrationAssociationArnProps</a>

---

##### `eventIntegration` <a name="eventIntegration" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.eventIntegration"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.eventIntegration(props: AppIntegrationsEventIntegrationArnProps)
```

Builds an ARN for the event-integration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.eventIntegration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationArnProps">AppIntegrationsEventIntegrationArnProps</a>

---

##### `eventIntegrationAssociation` <a name="eventIntegrationAssociation" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.eventIntegrationAssociation"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.eventIntegrationAssociation(props: AppIntegrationsEventIntegrationAssociationArnProps)
```

Builds an ARN for the event-integration-association resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.eventIntegrationAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.app_integrations.AppIntegrationsEventIntegrationAssociationArnProps">AppIntegrationsEventIntegrationAssociationArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidApplicationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApplicationAssociationArn` <a name="isValidApplicationAssociationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidApplicationAssociationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.isValidApplicationAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the application-association resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidApplicationAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataIntegrationArn` <a name="isValidDataIntegrationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidDataIntegrationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.isValidDataIntegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the data-integration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidDataIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataIntegrationAssociationArn` <a name="isValidDataIntegrationAssociationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidDataIntegrationAssociationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.isValidDataIntegrationAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the data-integration-association resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidDataIntegrationAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventIntegrationArn` <a name="isValidEventIntegrationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidEventIntegrationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.isValidEventIntegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the event-integration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidEventIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventIntegrationAssociationArn` <a name="isValidEventIntegrationAssociationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidEventIntegrationAssociationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.isValidEventIntegrationAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the event-integration-association resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.isValidEventIntegrationAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseApplicationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationAssociationArn` <a name="parseApplicationAssociationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseApplicationAssociationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.parseApplicationAssociationArn(arn: string)
```

Parses a application-association ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseApplicationAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataIntegrationArn` <a name="parseDataIntegrationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseDataIntegrationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.parseDataIntegrationArn(arn: string)
```

Parses a data-integration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseDataIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataIntegrationAssociationArn` <a name="parseDataIntegrationAssociationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseDataIntegrationAssociationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.parseDataIntegrationAssociationArn(arn: string)
```

Parses a data-integration-association ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseDataIntegrationAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventIntegrationArn` <a name="parseEventIntegrationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseEventIntegrationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.parseEventIntegrationArn(arn: string)
```

Parses a event-integration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseEventIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventIntegrationAssociationArn` <a name="parseEventIntegrationAssociationArn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseEventIntegrationAssociationArn"></a>

```typescript
import { app_integrations } from '@cdk_utils/iam'

app_integrations.AppIntegrationsResources.parseEventIntegrationAssociationArn(arn: string)
```

Parses a event-integration-association ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.app_integrations.AppIntegrationsResources.parseEventIntegrationAssociationArn.parameter.arn"></a>

- *Type:* string

---




