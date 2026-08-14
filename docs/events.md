# `events` Submodule <a name="`events` Submodule" id="@cdk_utils/iam.events"></a>


## Structs <a name="Structs" id="Structs"></a>

### EventsAliasArnComponents <a name="EventsAliasArnComponents" id="@cdk_utils/iam.events.EventsAliasArnComponents"></a>

Parsed components of a alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsAliasArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsAliasArnComponents: events.EventsAliasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsAliasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsAliasArnComponents.property.alias">alias</a></code> | <code>string</code> | The Alias component. |
| <code><a href="#@cdk_utils/iam.events.EventsAliasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsAliasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsAliasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdk_utils/iam.events.EventsAliasArnComponents.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The Alias component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsAliasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsAliasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsAliasArnProps <a name="EventsAliasArnProps" id="@cdk_utils/iam.events.EventsAliasArnProps"></a>

Properties for building a alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsAliasArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsAliasArnProps: events.EventsAliasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsAliasArnProps.property.alias">alias</a></code> | <code>string</code> | The Alias component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsAliasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsAliasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsAliasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdk_utils/iam.events.EventsAliasArnProps.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The Alias component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsAliasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsAliasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsAliasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsAPIDestinationArnComponents <a name="EventsAPIDestinationArnComponents" id="@cdk_utils/iam.events.EventsAPIDestinationArnComponents"></a>

Parsed components of a api-destination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsAPIDestinationArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsAPIDestinationArnComponents: events.EventsAPIDestinationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsAPIDestinationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsAPIDestinationArnComponents.property.apiDestinationName">apiDestinationName</a></code> | <code>string</code> | The ApiDestinationName component. |
| <code><a href="#@cdk_utils/iam.events.EventsAPIDestinationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsAPIDestinationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsAPIDestinationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `apiDestinationName`<sup>Required</sup> <a name="apiDestinationName" id="@cdk_utils/iam.events.EventsAPIDestinationArnComponents.property.apiDestinationName"></a>

```typescript
public readonly apiDestinationName: string;
```

- *Type:* string

The ApiDestinationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsAPIDestinationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsAPIDestinationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsAPIDestinationArnProps <a name="EventsAPIDestinationArnProps" id="@cdk_utils/iam.events.EventsAPIDestinationArnProps"></a>

Properties for building a api-destination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsAPIDestinationArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsAPIDestinationArnProps: events.EventsAPIDestinationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsAPIDestinationArnProps.property.apiDestinationName">apiDestinationName</a></code> | <code>string</code> | The ApiDestinationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsAPIDestinationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsAPIDestinationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsAPIDestinationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `apiDestinationName`<sup>Required</sup> <a name="apiDestinationName" id="@cdk_utils/iam.events.EventsAPIDestinationArnProps.property.apiDestinationName"></a>

```typescript
public readonly apiDestinationName: string;
```

- *Type:* string

The ApiDestinationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsAPIDestinationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsAPIDestinationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsAPIDestinationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsArchiveArnComponents <a name="EventsArchiveArnComponents" id="@cdk_utils/iam.events.EventsArchiveArnComponents"></a>

Parsed components of a archive ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsArchiveArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsArchiveArnComponents: events.EventsArchiveArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsArchiveArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsArchiveArnComponents.property.archiveName">archiveName</a></code> | <code>string</code> | The ArchiveName component. |
| <code><a href="#@cdk_utils/iam.events.EventsArchiveArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsArchiveArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsArchiveArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `archiveName`<sup>Required</sup> <a name="archiveName" id="@cdk_utils/iam.events.EventsArchiveArnComponents.property.archiveName"></a>

```typescript
public readonly archiveName: string;
```

- *Type:* string

The ArchiveName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsArchiveArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsArchiveArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsArchiveArnProps <a name="EventsArchiveArnProps" id="@cdk_utils/iam.events.EventsArchiveArnProps"></a>

Properties for building a archive ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsArchiveArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsArchiveArnProps: events.EventsArchiveArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsArchiveArnProps.property.archiveName">archiveName</a></code> | <code>string</code> | The ArchiveName component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsArchiveArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsArchiveArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsArchiveArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `archiveName`<sup>Required</sup> <a name="archiveName" id="@cdk_utils/iam.events.EventsArchiveArnProps.property.archiveName"></a>

```typescript
public readonly archiveName: string;
```

- *Type:* string

The ArchiveName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsArchiveArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsArchiveArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsArchiveArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsConnectionArnComponents <a name="EventsConnectionArnComponents" id="@cdk_utils/iam.events.EventsConnectionArnComponents"></a>

Parsed components of a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsConnectionArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsConnectionArnComponents: events.EventsConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsConnectionArnComponents.property.connectionName">connectionName</a></code> | <code>string</code> | The ConnectionName component. |
| <code><a href="#@cdk_utils/iam.events.EventsConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdk_utils/iam.events.EventsConnectionArnComponents.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The ConnectionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsConnectionArnProps <a name="EventsConnectionArnProps" id="@cdk_utils/iam.events.EventsConnectionArnProps"></a>

Properties for building a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsConnectionArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsConnectionArnProps: events.EventsConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsConnectionArnProps.property.connectionName">connectionName</a></code> | <code>string</code> | The ConnectionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdk_utils/iam.events.EventsConnectionArnProps.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The ConnectionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsCreateSnapshotArnComponents <a name="EventsCreateSnapshotArnComponents" id="@cdk_utils/iam.events.EventsCreateSnapshotArnComponents"></a>

Parsed components of a create-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsCreateSnapshotArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsCreateSnapshotArnComponents: events.EventsCreateSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsCreateSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsCreateSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsCreateSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsCreateSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsCreateSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsCreateSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsCreateSnapshotArnProps <a name="EventsCreateSnapshotArnProps" id="@cdk_utils/iam.events.EventsCreateSnapshotArnProps"></a>

Properties for building a create-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsCreateSnapshotArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsCreateSnapshotArnProps: events.EventsCreateSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsCreateSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsCreateSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsCreateSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsCreateSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsCreateSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsCreateSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsEndpointArnComponents <a name="EventsEndpointArnComponents" id="@cdk_utils/iam.events.EventsEndpointArnComponents"></a>

Parsed components of a endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsEndpointArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsEndpointArnComponents: events.EventsEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsEndpointArnComponents.property.endpointName">endpointName</a></code> | <code>string</code> | The EndpointName component. |
| <code><a href="#@cdk_utils/iam.events.EventsEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdk_utils/iam.events.EventsEndpointArnComponents.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

The EndpointName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsEndpointArnProps <a name="EventsEndpointArnProps" id="@cdk_utils/iam.events.EventsEndpointArnProps"></a>

Properties for building a endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsEndpointArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsEndpointArnProps: events.EventsEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsEndpointArnProps.property.endpointName">endpointName</a></code> | <code>string</code> | The EndpointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdk_utils/iam.events.EventsEndpointArnProps.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

The EndpointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsEventBusArnComponents <a name="EventsEventBusArnComponents" id="@cdk_utils/iam.events.EventsEventBusArnComponents"></a>

Parsed components of a event-bus ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsEventBusArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsEventBusArnComponents: events.EventsEventBusArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsEventBusArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsEventBusArnComponents.property.eventBusName">eventBusName</a></code> | <code>string</code> | The EventBusName component. |
| <code><a href="#@cdk_utils/iam.events.EventsEventBusArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsEventBusArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsEventBusArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventBusName`<sup>Required</sup> <a name="eventBusName" id="@cdk_utils/iam.events.EventsEventBusArnComponents.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

The EventBusName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsEventBusArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsEventBusArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsEventBusArnProps <a name="EventsEventBusArnProps" id="@cdk_utils/iam.events.EventsEventBusArnProps"></a>

Properties for building a event-bus ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsEventBusArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsEventBusArnProps: events.EventsEventBusArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsEventBusArnProps.property.eventBusName">eventBusName</a></code> | <code>string</code> | The EventBusName component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsEventBusArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsEventBusArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsEventBusArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventBusName`<sup>Required</sup> <a name="eventBusName" id="@cdk_utils/iam.events.EventsEventBusArnProps.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

The EventBusName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsEventBusArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsEventBusArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsEventBusArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsEventSourceArnComponents <a name="EventsEventSourceArnComponents" id="@cdk_utils/iam.events.EventsEventSourceArnComponents"></a>

Parsed components of a event-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsEventSourceArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsEventSourceArnComponents: events.EventsEventSourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsEventSourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsEventSourceArnComponents.property.eventSourceName">eventSourceName</a></code> | <code>string</code> | The EventSourceName component. |
| <code><a href="#@cdk_utils/iam.events.EventsEventSourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsEventSourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsEventSourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventSourceName`<sup>Required</sup> <a name="eventSourceName" id="@cdk_utils/iam.events.EventsEventSourceArnComponents.property.eventSourceName"></a>

```typescript
public readonly eventSourceName: string;
```

- *Type:* string

The EventSourceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsEventSourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsEventSourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsEventSourceArnProps <a name="EventsEventSourceArnProps" id="@cdk_utils/iam.events.EventsEventSourceArnProps"></a>

Properties for building a event-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsEventSourceArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsEventSourceArnProps: events.EventsEventSourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsEventSourceArnProps.property.eventSourceName">eventSourceName</a></code> | <code>string</code> | The EventSourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsEventSourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsEventSourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsEventSourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventSourceName`<sup>Required</sup> <a name="eventSourceName" id="@cdk_utils/iam.events.EventsEventSourceArnProps.property.eventSourceName"></a>

```typescript
public readonly eventSourceName: string;
```

- *Type:* string

The EventSourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsEventSourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsEventSourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsEventSourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsKeyArnComponents <a name="EventsKeyArnComponents" id="@cdk_utils/iam.events.EventsKeyArnComponents"></a>

Parsed components of a key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsKeyArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsKeyArnComponents: events.EventsKeyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsKeyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsKeyArnComponents.property.keyId">keyId</a></code> | <code>string</code> | The KeyId component. |
| <code><a href="#@cdk_utils/iam.events.EventsKeyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsKeyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsKeyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdk_utils/iam.events.EventsKeyArnComponents.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The KeyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsKeyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsKeyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsKeyArnProps <a name="EventsKeyArnProps" id="@cdk_utils/iam.events.EventsKeyArnProps"></a>

Properties for building a key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsKeyArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsKeyArnProps: events.EventsKeyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsKeyArnProps.property.keyId">keyId</a></code> | <code>string</code> | The KeyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsKeyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsKeyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsKeyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdk_utils/iam.events.EventsKeyArnProps.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The KeyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsKeyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsKeyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsKeyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsRebootInstanceArnComponents <a name="EventsRebootInstanceArnComponents" id="@cdk_utils/iam.events.EventsRebootInstanceArnComponents"></a>

Parsed components of a reboot-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsRebootInstanceArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsRebootInstanceArnComponents: events.EventsRebootInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsRebootInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsRebootInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsRebootInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsRebootInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsRebootInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsRebootInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsRebootInstanceArnProps <a name="EventsRebootInstanceArnProps" id="@cdk_utils/iam.events.EventsRebootInstanceArnProps"></a>

Properties for building a reboot-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsRebootInstanceArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsRebootInstanceArnProps: events.EventsRebootInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsRebootInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsRebootInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsRebootInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsRebootInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsRebootInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsRebootInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsReplayArnComponents <a name="EventsReplayArnComponents" id="@cdk_utils/iam.events.EventsReplayArnComponents"></a>

Parsed components of a replay ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsReplayArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsReplayArnComponents: events.EventsReplayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsReplayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsReplayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsReplayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.events.EventsReplayArnComponents.property.replayName">replayName</a></code> | <code>string</code> | The ReplayName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsReplayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsReplayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsReplayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `replayName`<sup>Required</sup> <a name="replayName" id="@cdk_utils/iam.events.EventsReplayArnComponents.property.replayName"></a>

```typescript
public readonly replayName: string;
```

- *Type:* string

The ReplayName component.

---

### EventsReplayArnProps <a name="EventsReplayArnProps" id="@cdk_utils/iam.events.EventsReplayArnProps"></a>

Properties for building a replay ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsReplayArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsReplayArnProps: events.EventsReplayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsReplayArnProps.property.replayName">replayName</a></code> | <code>string</code> | The ReplayName component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsReplayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsReplayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsReplayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `replayName`<sup>Required</sup> <a name="replayName" id="@cdk_utils/iam.events.EventsReplayArnProps.property.replayName"></a>

```typescript
public readonly replayName: string;
```

- *Type:* string

The ReplayName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsReplayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsReplayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsReplayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsRuleOnCustomEventBusArnComponents <a name="EventsRuleOnCustomEventBusArnComponents" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents"></a>

Parsed components of a rule-on-custom-event-bus ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsRuleOnCustomEventBusArnComponents: events.EventsRuleOnCustomEventBusArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents.property.eventBusName">eventBusName</a></code> | <code>string</code> | The EventBusName component. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents.property.ruleName">ruleName</a></code> | <code>string</code> | The RuleName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventBusName`<sup>Required</sup> <a name="eventBusName" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

The EventBusName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnComponents.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The RuleName component.

---

### EventsRuleOnCustomEventBusArnProps <a name="EventsRuleOnCustomEventBusArnProps" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps"></a>

Properties for building a rule-on-custom-event-bus ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsRuleOnCustomEventBusArnProps: events.EventsRuleOnCustomEventBusArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps.property.eventBusName">eventBusName</a></code> | <code>string</code> | The EventBusName component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps.property.ruleName">ruleName</a></code> | <code>string</code> | The RuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventBusName`<sup>Required</sup> <a name="eventBusName" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

The EventBusName component of the ARN.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The RuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsRuleOnDefaultEventBusArnComponents <a name="EventsRuleOnDefaultEventBusArnComponents" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnComponents"></a>

Parsed components of a rule-on-default-event-bus ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsRuleOnDefaultEventBusArnComponents: events.EventsRuleOnDefaultEventBusArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnComponents.property.ruleName">ruleName</a></code> | <code>string</code> | The RuleName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnComponents.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The RuleName component.

---

### EventsRuleOnDefaultEventBusArnProps <a name="EventsRuleOnDefaultEventBusArnProps" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnProps"></a>

Properties for building a rule-on-default-event-bus ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsRuleOnDefaultEventBusArnProps: events.EventsRuleOnDefaultEventBusArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnProps.property.ruleName">ruleName</a></code> | <code>string</code> | The RuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The RuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsStopInstanceArnComponents <a name="EventsStopInstanceArnComponents" id="@cdk_utils/iam.events.EventsStopInstanceArnComponents"></a>

Parsed components of a stop-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsStopInstanceArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsStopInstanceArnComponents: events.EventsStopInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsStopInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsStopInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsStopInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsStopInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsStopInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsStopInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsStopInstanceArnProps <a name="EventsStopInstanceArnProps" id="@cdk_utils/iam.events.EventsStopInstanceArnProps"></a>

Properties for building a stop-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsStopInstanceArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsStopInstanceArnProps: events.EventsStopInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsStopInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsStopInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsStopInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsStopInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsStopInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsStopInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EventsTerminateInstanceArnComponents <a name="EventsTerminateInstanceArnComponents" id="@cdk_utils/iam.events.EventsTerminateInstanceArnComponents"></a>

Parsed components of a terminate-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsTerminateInstanceArnComponents.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsTerminateInstanceArnComponents: events.EventsTerminateInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsTerminateInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsTerminateInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsTerminateInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.events.EventsTerminateInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.events.EventsTerminateInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.events.EventsTerminateInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EventsTerminateInstanceArnProps <a name="EventsTerminateInstanceArnProps" id="@cdk_utils/iam.events.EventsTerminateInstanceArnProps"></a>

Properties for building a terminate-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.events.EventsTerminateInstanceArnProps.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

const eventsTerminateInstanceArnProps: events.EventsTerminateInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsTerminateInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.events.EventsTerminateInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.events.EventsTerminateInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.events.EventsTerminateInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.events.EventsTerminateInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.events.EventsTerminateInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EventsActions <a name="EventsActions" id="@cdk_utils/iam.events.EventsActions"></a>

IAM action constants for the events service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.events.EventsActions.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

new events.EventsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ActivateEventSource">ActivateEventSource</a></code> | <code>string</code> | [Write] events:ActivateEventSource. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [Write] events:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.CancelReplay">CancelReplay</a></code> | <code>string</code> | [Write] events:CancelReplay. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.CreateApiDestination">CreateApiDestination</a></code> | <code>string</code> | [Write] events:CreateApiDestination. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.CreateArchive">CreateArchive</a></code> | <code>string</code> | [Write] events:CreateArchive. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.CreateConnection">CreateConnection</a></code> | <code>string</code> | [Write] events:CreateConnection. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.CreateEndpoint">CreateEndpoint</a></code> | <code>string</code> | [Write] events:CreateEndpoint. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.CreateEventBus">CreateEventBus</a></code> | <code>string</code> | [Write] events:CreateEventBus. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.CreatePartnerEventSource">CreatePartnerEventSource</a></code> | <code>string</code> | [Write] events:CreatePartnerEventSource. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DeactivateEventSource">DeactivateEventSource</a></code> | <code>string</code> | [Write] events:DeactivateEventSource. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DeauthorizeConnection">DeauthorizeConnection</a></code> | <code>string</code> | [Write] events:DeauthorizeConnection. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DeleteApiDestination">DeleteApiDestination</a></code> | <code>string</code> | [Write] events:DeleteApiDestination. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DeleteArchive">DeleteArchive</a></code> | <code>string</code> | [Write] events:DeleteArchive. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] events:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string</code> | [Write] events:DeleteEndpoint. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DeleteEventBus">DeleteEventBus</a></code> | <code>string</code> | [Write] events:DeleteEventBus. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DeletePartnerEventSource">DeletePartnerEventSource</a></code> | <code>string</code> | [Write] events:DeletePartnerEventSource. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DeleteRule">DeleteRule</a></code> | <code>string</code> | [Write] events:DeleteRule. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DescribeApiDestination">DescribeApiDestination</a></code> | <code>string</code> | [Read] events:DescribeApiDestination. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DescribeArchive">DescribeArchive</a></code> | <code>string</code> | [Read] events:DescribeArchive. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DescribeConnection">DescribeConnection</a></code> | <code>string</code> | [Read] events:DescribeConnection. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DescribeEndpoint">DescribeEndpoint</a></code> | <code>string</code> | [Read] events:DescribeEndpoint. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DescribeEventBus">DescribeEventBus</a></code> | <code>string</code> | [Read] events:DescribeEventBus. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DescribeEventSource">DescribeEventSource</a></code> | <code>string</code> | [Read] events:DescribeEventSource. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DescribePartnerEventSource">DescribePartnerEventSource</a></code> | <code>string</code> | [Read] events:DescribePartnerEventSource. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DescribeReplay">DescribeReplay</a></code> | <code>string</code> | [Read] events:DescribeReplay. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DescribeRule">DescribeRule</a></code> | <code>string</code> | [Read] events:DescribeRule. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.DisableRule">DisableRule</a></code> | <code>string</code> | [Write] events:DisableRule. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.EnableRule">EnableRule</a></code> | <code>string</code> | [Write] events:EnableRule. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.InvokeApiDestination">InvokeApiDestination</a></code> | <code>string</code> | [Write] events:InvokeApiDestination. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListApiDestinations">ListApiDestinations</a></code> | <code>string</code> | [List] events:ListApiDestinations. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListArchives">ListArchives</a></code> | <code>string</code> | [List] events:ListArchives. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] events:ListConnections. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListEndpoints">ListEndpoints</a></code> | <code>string</code> | [List] events:ListEndpoints. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListEventBuses">ListEventBuses</a></code> | <code>string</code> | [List] events:ListEventBuses. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListEventSources">ListEventSources</a></code> | <code>string</code> | [List] events:ListEventSources. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListPartnerEventSourceAccounts">ListPartnerEventSourceAccounts</a></code> | <code>string</code> | [List] events:ListPartnerEventSourceAccounts. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListPartnerEventSources">ListPartnerEventSources</a></code> | <code>string</code> | [List] events:ListPartnerEventSources. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListReplays">ListReplays</a></code> | <code>string</code> | [List] events:ListReplays. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListRuleNamesByTarget">ListRuleNamesByTarget</a></code> | <code>string</code> | [List] events:ListRuleNamesByTarget. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListRules">ListRules</a></code> | <code>string</code> | [List] events:ListRules. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] events:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.ListTargetsByRule">ListTargetsByRule</a></code> | <code>string</code> | [List] events:ListTargetsByRule. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.PutEvents">PutEvents</a></code> | <code>string</code> | [Write] events:PutEvents. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.PutPartnerEvents">PutPartnerEvents</a></code> | <code>string</code> | [Write] events:PutPartnerEvents. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.PutPermission">PutPermission</a></code> | <code>string</code> | [PermissionManagement] events:PutPermission. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.PutRule">PutRule</a></code> | <code>string</code> | [Write] events:PutRule. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.PutTargets">PutTargets</a></code> | <code>string</code> | [Write] events:PutTargets. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.RemovePermission">RemovePermission</a></code> | <code>string</code> | [PermissionManagement] events:RemovePermission. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.RemoveTargets">RemoveTargets</a></code> | <code>string</code> | [Write] events:RemoveTargets. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.RetrieveConnectionCredentials">RetrieveConnectionCredentials</a></code> | <code>string</code> | [Write] events:RetrieveConnectionCredentials. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.StartReplay">StartReplay</a></code> | <code>string</code> | [Write] events:StartReplay. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] events:TagResource. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.TestEventPattern">TestEventPattern</a></code> | <code>string</code> | [Read] events:TestEventPattern. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] events:UntagResource. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.UpdateApiDestination">UpdateApiDestination</a></code> | <code>string</code> | [Write] events:UpdateApiDestination. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.UpdateArchive">UpdateArchive</a></code> | <code>string</code> | [Write] events:UpdateArchive. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.UpdateConnection">UpdateConnection</a></code> | <code>string</code> | [Write] events:UpdateConnection. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.UpdateEndpoint">UpdateEndpoint</a></code> | <code>string</code> | [Write] events:UpdateEndpoint. |
| <code><a href="#@cdk_utils/iam.events.EventsActions.property.UpdateEventBus">UpdateEventBus</a></code> | <code>string</code> | [Write] events:UpdateEventBus. |

---

##### `ActivateEventSource`<sup>Required</sup> <a name="ActivateEventSource" id="@cdk_utils/iam.events.EventsActions.property.ActivateEventSource"></a>

```typescript
public readonly ActivateEventSource: string;
```

- *Type:* string

[Write] events:ActivateEventSource.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.events.EventsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.events.EventsActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[Write] events:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.events.EventsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.events.EventsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.events.EventsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.events.EventsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelReplay`<sup>Required</sup> <a name="CancelReplay" id="@cdk_utils/iam.events.EventsActions.property.CancelReplay"></a>

```typescript
public readonly CancelReplay: string;
```

- *Type:* string

[Write] events:CancelReplay.

---

##### `CreateApiDestination`<sup>Required</sup> <a name="CreateApiDestination" id="@cdk_utils/iam.events.EventsActions.property.CreateApiDestination"></a>

```typescript
public readonly CreateApiDestination: string;
```

- *Type:* string

[Write] events:CreateApiDestination.

---

##### `CreateArchive`<sup>Required</sup> <a name="CreateArchive" id="@cdk_utils/iam.events.EventsActions.property.CreateArchive"></a>

```typescript
public readonly CreateArchive: string;
```

- *Type:* string

[Write] events:CreateArchive.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.events.EventsActions.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string;
```

- *Type:* string

[Write] events:CreateConnection.

---

##### `CreateEndpoint`<sup>Required</sup> <a name="CreateEndpoint" id="@cdk_utils/iam.events.EventsActions.property.CreateEndpoint"></a>

```typescript
public readonly CreateEndpoint: string;
```

- *Type:* string

[Write] events:CreateEndpoint.

---

##### `CreateEventBus`<sup>Required</sup> <a name="CreateEventBus" id="@cdk_utils/iam.events.EventsActions.property.CreateEventBus"></a>

```typescript
public readonly CreateEventBus: string;
```

- *Type:* string

[Write] events:CreateEventBus.

---

##### `CreatePartnerEventSource`<sup>Required</sup> <a name="CreatePartnerEventSource" id="@cdk_utils/iam.events.EventsActions.property.CreatePartnerEventSource"></a>

```typescript
public readonly CreatePartnerEventSource: string;
```

- *Type:* string

[Write] events:CreatePartnerEventSource.

---

##### `DeactivateEventSource`<sup>Required</sup> <a name="DeactivateEventSource" id="@cdk_utils/iam.events.EventsActions.property.DeactivateEventSource"></a>

```typescript
public readonly DeactivateEventSource: string;
```

- *Type:* string

[Write] events:DeactivateEventSource.

---

##### `DeauthorizeConnection`<sup>Required</sup> <a name="DeauthorizeConnection" id="@cdk_utils/iam.events.EventsActions.property.DeauthorizeConnection"></a>

```typescript
public readonly DeauthorizeConnection: string;
```

- *Type:* string

[Write] events:DeauthorizeConnection.

---

##### `DeleteApiDestination`<sup>Required</sup> <a name="DeleteApiDestination" id="@cdk_utils/iam.events.EventsActions.property.DeleteApiDestination"></a>

```typescript
public readonly DeleteApiDestination: string;
```

- *Type:* string

[Write] events:DeleteApiDestination.

---

##### `DeleteArchive`<sup>Required</sup> <a name="DeleteArchive" id="@cdk_utils/iam.events.EventsActions.property.DeleteArchive"></a>

```typescript
public readonly DeleteArchive: string;
```

- *Type:* string

[Write] events:DeleteArchive.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.events.EventsActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] events:DeleteConnection.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.events.EventsActions.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string;
```

- *Type:* string

[Write] events:DeleteEndpoint.

---

##### `DeleteEventBus`<sup>Required</sup> <a name="DeleteEventBus" id="@cdk_utils/iam.events.EventsActions.property.DeleteEventBus"></a>

```typescript
public readonly DeleteEventBus: string;
```

- *Type:* string

[Write] events:DeleteEventBus.

---

##### `DeletePartnerEventSource`<sup>Required</sup> <a name="DeletePartnerEventSource" id="@cdk_utils/iam.events.EventsActions.property.DeletePartnerEventSource"></a>

```typescript
public readonly DeletePartnerEventSource: string;
```

- *Type:* string

[Write] events:DeletePartnerEventSource.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.events.EventsActions.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string;
```

- *Type:* string

[Write] events:DeleteRule.

---

##### `DescribeApiDestination`<sup>Required</sup> <a name="DescribeApiDestination" id="@cdk_utils/iam.events.EventsActions.property.DescribeApiDestination"></a>

```typescript
public readonly DescribeApiDestination: string;
```

- *Type:* string

[Read] events:DescribeApiDestination.

---

##### `DescribeArchive`<sup>Required</sup> <a name="DescribeArchive" id="@cdk_utils/iam.events.EventsActions.property.DescribeArchive"></a>

```typescript
public readonly DescribeArchive: string;
```

- *Type:* string

[Read] events:DescribeArchive.

---

##### `DescribeConnection`<sup>Required</sup> <a name="DescribeConnection" id="@cdk_utils/iam.events.EventsActions.property.DescribeConnection"></a>

```typescript
public readonly DescribeConnection: string;
```

- *Type:* string

[Read] events:DescribeConnection.

---

##### `DescribeEndpoint`<sup>Required</sup> <a name="DescribeEndpoint" id="@cdk_utils/iam.events.EventsActions.property.DescribeEndpoint"></a>

```typescript
public readonly DescribeEndpoint: string;
```

- *Type:* string

[Read] events:DescribeEndpoint.

---

##### `DescribeEventBus`<sup>Required</sup> <a name="DescribeEventBus" id="@cdk_utils/iam.events.EventsActions.property.DescribeEventBus"></a>

```typescript
public readonly DescribeEventBus: string;
```

- *Type:* string

[Read] events:DescribeEventBus.

---

##### `DescribeEventSource`<sup>Required</sup> <a name="DescribeEventSource" id="@cdk_utils/iam.events.EventsActions.property.DescribeEventSource"></a>

```typescript
public readonly DescribeEventSource: string;
```

- *Type:* string

[Read] events:DescribeEventSource.

---

##### `DescribePartnerEventSource`<sup>Required</sup> <a name="DescribePartnerEventSource" id="@cdk_utils/iam.events.EventsActions.property.DescribePartnerEventSource"></a>

```typescript
public readonly DescribePartnerEventSource: string;
```

- *Type:* string

[Read] events:DescribePartnerEventSource.

---

##### `DescribeReplay`<sup>Required</sup> <a name="DescribeReplay" id="@cdk_utils/iam.events.EventsActions.property.DescribeReplay"></a>

```typescript
public readonly DescribeReplay: string;
```

- *Type:* string

[Read] events:DescribeReplay.

---

##### `DescribeRule`<sup>Required</sup> <a name="DescribeRule" id="@cdk_utils/iam.events.EventsActions.property.DescribeRule"></a>

```typescript
public readonly DescribeRule: string;
```

- *Type:* string

[Read] events:DescribeRule.

---

##### `DisableRule`<sup>Required</sup> <a name="DisableRule" id="@cdk_utils/iam.events.EventsActions.property.DisableRule"></a>

```typescript
public readonly DisableRule: string;
```

- *Type:* string

[Write] events:DisableRule.

---

##### `EnableRule`<sup>Required</sup> <a name="EnableRule" id="@cdk_utils/iam.events.EventsActions.property.EnableRule"></a>

```typescript
public readonly EnableRule: string;
```

- *Type:* string

[Write] events:EnableRule.

---

##### `InvokeApiDestination`<sup>Required</sup> <a name="InvokeApiDestination" id="@cdk_utils/iam.events.EventsActions.property.InvokeApiDestination"></a>

```typescript
public readonly InvokeApiDestination: string;
```

- *Type:* string

[Write] events:InvokeApiDestination.

---

##### `ListApiDestinations`<sup>Required</sup> <a name="ListApiDestinations" id="@cdk_utils/iam.events.EventsActions.property.ListApiDestinations"></a>

```typescript
public readonly ListApiDestinations: string;
```

- *Type:* string

[List] events:ListApiDestinations.

---

##### `ListArchives`<sup>Required</sup> <a name="ListArchives" id="@cdk_utils/iam.events.EventsActions.property.ListArchives"></a>

```typescript
public readonly ListArchives: string;
```

- *Type:* string

[List] events:ListArchives.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.events.EventsActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] events:ListConnections.

---

##### `ListEndpoints`<sup>Required</sup> <a name="ListEndpoints" id="@cdk_utils/iam.events.EventsActions.property.ListEndpoints"></a>

```typescript
public readonly ListEndpoints: string;
```

- *Type:* string

[List] events:ListEndpoints.

---

##### `ListEventBuses`<sup>Required</sup> <a name="ListEventBuses" id="@cdk_utils/iam.events.EventsActions.property.ListEventBuses"></a>

```typescript
public readonly ListEventBuses: string;
```

- *Type:* string

[List] events:ListEventBuses.

---

##### `ListEventSources`<sup>Required</sup> <a name="ListEventSources" id="@cdk_utils/iam.events.EventsActions.property.ListEventSources"></a>

```typescript
public readonly ListEventSources: string;
```

- *Type:* string

[List] events:ListEventSources.

---

##### `ListPartnerEventSourceAccounts`<sup>Required</sup> <a name="ListPartnerEventSourceAccounts" id="@cdk_utils/iam.events.EventsActions.property.ListPartnerEventSourceAccounts"></a>

```typescript
public readonly ListPartnerEventSourceAccounts: string;
```

- *Type:* string

[List] events:ListPartnerEventSourceAccounts.

---

##### `ListPartnerEventSources`<sup>Required</sup> <a name="ListPartnerEventSources" id="@cdk_utils/iam.events.EventsActions.property.ListPartnerEventSources"></a>

```typescript
public readonly ListPartnerEventSources: string;
```

- *Type:* string

[List] events:ListPartnerEventSources.

---

##### `ListReplays`<sup>Required</sup> <a name="ListReplays" id="@cdk_utils/iam.events.EventsActions.property.ListReplays"></a>

```typescript
public readonly ListReplays: string;
```

- *Type:* string

[List] events:ListReplays.

---

##### `ListRuleNamesByTarget`<sup>Required</sup> <a name="ListRuleNamesByTarget" id="@cdk_utils/iam.events.EventsActions.property.ListRuleNamesByTarget"></a>

```typescript
public readonly ListRuleNamesByTarget: string;
```

- *Type:* string

[List] events:ListRuleNamesByTarget.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.events.EventsActions.property.ListRules"></a>

```typescript
public readonly ListRules: string;
```

- *Type:* string

[List] events:ListRules.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.events.EventsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] events:ListTagsForResource.

---

##### `ListTargetsByRule`<sup>Required</sup> <a name="ListTargetsByRule" id="@cdk_utils/iam.events.EventsActions.property.ListTargetsByRule"></a>

```typescript
public readonly ListTargetsByRule: string;
```

- *Type:* string

[List] events:ListTargetsByRule.

---

##### `PutEvents`<sup>Required</sup> <a name="PutEvents" id="@cdk_utils/iam.events.EventsActions.property.PutEvents"></a>

```typescript
public readonly PutEvents: string;
```

- *Type:* string

[Write] events:PutEvents.

---

##### `PutPartnerEvents`<sup>Required</sup> <a name="PutPartnerEvents" id="@cdk_utils/iam.events.EventsActions.property.PutPartnerEvents"></a>

```typescript
public readonly PutPartnerEvents: string;
```

- *Type:* string

[Write] events:PutPartnerEvents.

---

##### `PutPermission`<sup>Required</sup> <a name="PutPermission" id="@cdk_utils/iam.events.EventsActions.property.PutPermission"></a>

```typescript
public readonly PutPermission: string;
```

- *Type:* string

[PermissionManagement] events:PutPermission.

---

##### `PutRule`<sup>Required</sup> <a name="PutRule" id="@cdk_utils/iam.events.EventsActions.property.PutRule"></a>

```typescript
public readonly PutRule: string;
```

- *Type:* string

[Write] events:PutRule.

---

##### `PutTargets`<sup>Required</sup> <a name="PutTargets" id="@cdk_utils/iam.events.EventsActions.property.PutTargets"></a>

```typescript
public readonly PutTargets: string;
```

- *Type:* string

[Write] events:PutTargets.

---

##### `RemovePermission`<sup>Required</sup> <a name="RemovePermission" id="@cdk_utils/iam.events.EventsActions.property.RemovePermission"></a>

```typescript
public readonly RemovePermission: string;
```

- *Type:* string

[PermissionManagement] events:RemovePermission.

---

##### `RemoveTargets`<sup>Required</sup> <a name="RemoveTargets" id="@cdk_utils/iam.events.EventsActions.property.RemoveTargets"></a>

```typescript
public readonly RemoveTargets: string;
```

- *Type:* string

[Write] events:RemoveTargets.

---

##### `RetrieveConnectionCredentials`<sup>Required</sup> <a name="RetrieveConnectionCredentials" id="@cdk_utils/iam.events.EventsActions.property.RetrieveConnectionCredentials"></a>

```typescript
public readonly RetrieveConnectionCredentials: string;
```

- *Type:* string

[Write] events:RetrieveConnectionCredentials.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.events.EventsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartReplay`<sup>Required</sup> <a name="StartReplay" id="@cdk_utils/iam.events.EventsActions.property.StartReplay"></a>

```typescript
public readonly StartReplay: string;
```

- *Type:* string

[Write] events:StartReplay.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.events.EventsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] events:TagResource.

---

##### `TestEventPattern`<sup>Required</sup> <a name="TestEventPattern" id="@cdk_utils/iam.events.EventsActions.property.TestEventPattern"></a>

```typescript
public readonly TestEventPattern: string;
```

- *Type:* string

[Read] events:TestEventPattern.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.events.EventsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] events:UntagResource.

---

##### `UpdateApiDestination`<sup>Required</sup> <a name="UpdateApiDestination" id="@cdk_utils/iam.events.EventsActions.property.UpdateApiDestination"></a>

```typescript
public readonly UpdateApiDestination: string;
```

- *Type:* string

[Write] events:UpdateApiDestination.

---

##### `UpdateArchive`<sup>Required</sup> <a name="UpdateArchive" id="@cdk_utils/iam.events.EventsActions.property.UpdateArchive"></a>

```typescript
public readonly UpdateArchive: string;
```

- *Type:* string

[Write] events:UpdateArchive.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.events.EventsActions.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string;
```

- *Type:* string

[Write] events:UpdateConnection.

---

##### `UpdateEndpoint`<sup>Required</sup> <a name="UpdateEndpoint" id="@cdk_utils/iam.events.EventsActions.property.UpdateEndpoint"></a>

```typescript
public readonly UpdateEndpoint: string;
```

- *Type:* string

[Write] events:UpdateEndpoint.

---

##### `UpdateEventBus`<sup>Required</sup> <a name="UpdateEventBus" id="@cdk_utils/iam.events.EventsActions.property.UpdateEventBus"></a>

```typescript
public readonly UpdateEventBus: string;
```

- *Type:* string

[Write] events:UpdateEventBus.

---

### EventsConditions <a name="EventsConditions" id="@cdk_utils/iam.events.EventsConditions"></a>

Condition key constants and builders for events.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.events.EventsConditions.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

new events.EventsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.creatorAccount">creatorAccount</a></code> | Generates a condition block for `events:creatorAccount`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.detailEventTypeCode">detailEventTypeCode</a></code> | Generates a condition block for `events:detail.eventTypeCode`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.detailService">detailService</a></code> | Generates a condition block for `events:detail.service`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.detailType">detailType</a></code> | Generates a condition block for `events:detail-type`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.detailUserIdentityPrincipalId">detailUserIdentityPrincipalId</a></code> | Generates a condition block for `events:detail.userIdentity.principalId`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.eventBusARN">eventBusARN</a></code> | Generates a condition block for `events:EventBusArn`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.eventBusInvocation">eventBusInvocation</a></code> | Generates a condition block for `events:eventBusInvocation`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.managedBy">managedBy</a></code> | Generates a condition block for `events:ManagedBy`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.source">source</a></code> | Generates a condition block for `events:source`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.targetARN">targetARN</a></code> | Generates a condition block for `events:TargetArn`. |

---

##### `creatorAccount` <a name="creatorAccount" id="@cdk_utils/iam.events.EventsConditions.creatorAccount"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.creatorAccount(value: string)
```

Generates a condition block for `events:creatorAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.events.EventsConditions.creatorAccount.parameter.value"></a>

- *Type:* string

---

##### `detailEventTypeCode` <a name="detailEventTypeCode" id="@cdk_utils/iam.events.EventsConditions.detailEventTypeCode"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.detailEventTypeCode(value: string)
```

Generates a condition block for `events:detail.eventTypeCode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.events.EventsConditions.detailEventTypeCode.parameter.value"></a>

- *Type:* string

---

##### `detailService` <a name="detailService" id="@cdk_utils/iam.events.EventsConditions.detailService"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.detailService(value: string)
```

Generates a condition block for `events:detail.service`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.events.EventsConditions.detailService.parameter.value"></a>

- *Type:* string

---

##### `detailType` <a name="detailType" id="@cdk_utils/iam.events.EventsConditions.detailType"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.detailType(values: string[])
```

Generates a condition block for `events:detail-type`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.events.EventsConditions.detailType.parameter.values"></a>

- *Type:* string[]

---

##### `detailUserIdentityPrincipalId` <a name="detailUserIdentityPrincipalId" id="@cdk_utils/iam.events.EventsConditions.detailUserIdentityPrincipalId"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.detailUserIdentityPrincipalId(value: string)
```

Generates a condition block for `events:detail.userIdentity.principalId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.events.EventsConditions.detailUserIdentityPrincipalId.parameter.value"></a>

- *Type:* string

---

##### `eventBusARN` <a name="eventBusARN" id="@cdk_utils/iam.events.EventsConditions.eventBusARN"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.eventBusARN(values: string[])
```

Generates a condition block for `events:EventBusArn`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.events.EventsConditions.eventBusARN.parameter.values"></a>

- *Type:* string[]

---

##### `eventBusInvocation` <a name="eventBusInvocation" id="@cdk_utils/iam.events.EventsConditions.eventBusInvocation"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.eventBusInvocation(value: string)
```

Generates a condition block for `events:eventBusInvocation`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.events.EventsConditions.eventBusInvocation.parameter.value"></a>

- *Type:* string

---

##### `managedBy` <a name="managedBy" id="@cdk_utils/iam.events.EventsConditions.managedBy"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.managedBy(value: string)
```

Generates a condition block for `events:ManagedBy`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.events.EventsConditions.managedBy.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.events.EventsConditions.requestTag"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.events.EventsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.events.EventsConditions.resourceTag"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.events.EventsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `source` <a name="source" id="@cdk_utils/iam.events.EventsConditions.source"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.source(values: string[])
```

Generates a condition block for `events:source`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.events.EventsConditions.source.parameter.values"></a>

- *Type:* string[]

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.events.EventsConditions.tagKeys"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.events.EventsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `targetARN` <a name="targetARN" id="@cdk_utils/iam.events.EventsConditions.targetARN"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsConditions.targetARN(values: string[])
```

Generates a condition block for `events:TargetArn`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.events.EventsConditions.targetARN.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.CreateEndpointConditionKeys">CreateEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEndpoint action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.CreateEventBusConditionKeys">CreateEventBusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventBus action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.CREATOR_ACCOUNT">CREATOR_ACCOUNT</a></code> | <code>string</code> | Condition key: events:creatorAccount (String). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.DeleteRuleConditionKeys">DeleteRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRule action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.DescribeRuleConditionKeys">DescribeRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeRule action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.DETAIL_EVENT_TYPE_CODE">DETAIL_EVENT_TYPE_CODE</a></code> | <code>string</code> | Condition key: events:detail.eventTypeCode (String). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.DETAIL_SERVICE">DETAIL_SERVICE</a></code> | <code>string</code> | Condition key: events:detail.service (String). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.DETAIL_TYPE">DETAIL_TYPE</a></code> | <code>string</code> | Condition key: events:detail-type (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.DETAIL_USER_IDENTITY_PRINCIPAL_ID">DETAIL_USER_IDENTITY_PRINCIPAL_ID</a></code> | <code>string</code> | Condition key: events:detail.userIdentity.principalId (String). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.DisableRuleConditionKeys">DisableRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisableRule action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.EnableRuleConditionKeys">EnableRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnableRule action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.EVENT_BUS_ARN">EVENT_BUS_ARN</a></code> | <code>string</code> | Condition key: events:EventBusArn (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.EVENT_BUS_INVOCATION">EVENT_BUS_INVOCATION</a></code> | <code>string</code> | Condition key: events:eventBusInvocation (String). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.ListTargetsByRuleConditionKeys">ListTargetsByRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTargetsByRule action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.MANAGED_BY">MANAGED_BY</a></code> | <code>string</code> | Condition key: events:ManagedBy (String). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.PutEventsConditionKeys">PutEventsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutEvents action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.PutRuleConditionKeys">PutRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutRule action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.PutTargetsConditionKeys">PutTargetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTargets action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.RemoveTargetsConditionKeys">RemoveTargetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTargets action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.SOURCE">SOURCE</a></code> | <code>string</code> | Condition key: events:source (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.TARGET_ARN">TARGET_ARN</a></code> | <code>string</code> | Condition key: events:TargetArn (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.events.EventsConditions.property.UpdateEndpointConditionKeys">UpdateEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEndpoint action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.events.EventsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.events.EventsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.events.EventsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateEndpointConditionKeys`<sup>Required</sup> <a name="CreateEndpointConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.CreateEndpointConditionKeys"></a>

```typescript
public readonly CreateEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEndpoint action.

---

##### `CreateEventBusConditionKeys`<sup>Required</sup> <a name="CreateEventBusConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.CreateEventBusConditionKeys"></a>

```typescript
public readonly CreateEventBusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventBus action.

---

##### `CREATOR_ACCOUNT`<sup>Required</sup> <a name="CREATOR_ACCOUNT" id="@cdk_utils/iam.events.EventsConditions.property.CREATOR_ACCOUNT"></a>

```typescript
public readonly CREATOR_ACCOUNT: string;
```

- *Type:* string

Condition key: events:creatorAccount (String).

---

##### `DeleteRuleConditionKeys`<sup>Required</sup> <a name="DeleteRuleConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.DeleteRuleConditionKeys"></a>

```typescript
public readonly DeleteRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRule action.

---

##### `DescribeRuleConditionKeys`<sup>Required</sup> <a name="DescribeRuleConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.DescribeRuleConditionKeys"></a>

```typescript
public readonly DescribeRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeRule action.

---

##### `DETAIL_EVENT_TYPE_CODE`<sup>Required</sup> <a name="DETAIL_EVENT_TYPE_CODE" id="@cdk_utils/iam.events.EventsConditions.property.DETAIL_EVENT_TYPE_CODE"></a>

```typescript
public readonly DETAIL_EVENT_TYPE_CODE: string;
```

- *Type:* string

Condition key: events:detail.eventTypeCode (String).

---

##### `DETAIL_SERVICE`<sup>Required</sup> <a name="DETAIL_SERVICE" id="@cdk_utils/iam.events.EventsConditions.property.DETAIL_SERVICE"></a>

```typescript
public readonly DETAIL_SERVICE: string;
```

- *Type:* string

Condition key: events:detail.service (String).

---

##### `DETAIL_TYPE`<sup>Required</sup> <a name="DETAIL_TYPE" id="@cdk_utils/iam.events.EventsConditions.property.DETAIL_TYPE"></a>

```typescript
public readonly DETAIL_TYPE: string;
```

- *Type:* string

Condition key: events:detail-type (ArrayOfString).

---

##### `DETAIL_USER_IDENTITY_PRINCIPAL_ID`<sup>Required</sup> <a name="DETAIL_USER_IDENTITY_PRINCIPAL_ID" id="@cdk_utils/iam.events.EventsConditions.property.DETAIL_USER_IDENTITY_PRINCIPAL_ID"></a>

```typescript
public readonly DETAIL_USER_IDENTITY_PRINCIPAL_ID: string;
```

- *Type:* string

Condition key: events:detail.userIdentity.principalId (String).

---

##### `DisableRuleConditionKeys`<sup>Required</sup> <a name="DisableRuleConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.DisableRuleConditionKeys"></a>

```typescript
public readonly DisableRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisableRule action.

---

##### `EnableRuleConditionKeys`<sup>Required</sup> <a name="EnableRuleConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.EnableRuleConditionKeys"></a>

```typescript
public readonly EnableRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnableRule action.

---

##### `EVENT_BUS_ARN`<sup>Required</sup> <a name="EVENT_BUS_ARN" id="@cdk_utils/iam.events.EventsConditions.property.EVENT_BUS_ARN"></a>

```typescript
public readonly EVENT_BUS_ARN: string;
```

- *Type:* string

Condition key: events:EventBusArn (ArrayOfARN).

---

##### `EVENT_BUS_INVOCATION`<sup>Required</sup> <a name="EVENT_BUS_INVOCATION" id="@cdk_utils/iam.events.EventsConditions.property.EVENT_BUS_INVOCATION"></a>

```typescript
public readonly EVENT_BUS_INVOCATION: string;
```

- *Type:* string

Condition key: events:eventBusInvocation (String).

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ListTargetsByRuleConditionKeys`<sup>Required</sup> <a name="ListTargetsByRuleConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.ListTargetsByRuleConditionKeys"></a>

```typescript
public readonly ListTargetsByRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTargetsByRule action.

---

##### `MANAGED_BY`<sup>Required</sup> <a name="MANAGED_BY" id="@cdk_utils/iam.events.EventsConditions.property.MANAGED_BY"></a>

```typescript
public readonly MANAGED_BY: string;
```

- *Type:* string

Condition key: events:ManagedBy (String).

---

##### `PutEventsConditionKeys`<sup>Required</sup> <a name="PutEventsConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.PutEventsConditionKeys"></a>

```typescript
public readonly PutEventsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutEvents action.

---

##### `PutRuleConditionKeys`<sup>Required</sup> <a name="PutRuleConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.PutRuleConditionKeys"></a>

```typescript
public readonly PutRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutRule action.

---

##### `PutTargetsConditionKeys`<sup>Required</sup> <a name="PutTargetsConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.PutTargetsConditionKeys"></a>

```typescript
public readonly PutTargetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTargets action.

---

##### `RemoveTargetsConditionKeys`<sup>Required</sup> <a name="RemoveTargetsConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.RemoveTargetsConditionKeys"></a>

```typescript
public readonly RemoveTargetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTargets action.

---

##### `SOURCE`<sup>Required</sup> <a name="SOURCE" id="@cdk_utils/iam.events.EventsConditions.property.SOURCE"></a>

```typescript
public readonly SOURCE: string;
```

- *Type:* string

Condition key: events:source (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TARGET_ARN`<sup>Required</sup> <a name="TARGET_ARN" id="@cdk_utils/iam.events.EventsConditions.property.TARGET_ARN"></a>

```typescript
public readonly TARGET_ARN: string;
```

- *Type:* string

Condition key: events:TargetArn (ArrayOfARN).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateEndpointConditionKeys`<sup>Required</sup> <a name="UpdateEndpointConditionKeys" id="@cdk_utils/iam.events.EventsConditions.property.UpdateEndpointConditionKeys"></a>

```typescript
public readonly UpdateEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEndpoint action.

---

### EventsOperations <a name="EventsOperations" id="@cdk_utils/iam.events.EventsOperations"></a>

API operation to required IAM actions mapping for events.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.events.EventsOperations.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

new events.EventsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ActivateEventSource">ActivateEventSource</a></code> | <code>string[]</code> | IAM actions required for the ActivateEventSource API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.CancelReplay">CancelReplay</a></code> | <code>string[]</code> | IAM actions required for the CancelReplay API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.CreateApiDestination">CreateApiDestination</a></code> | <code>string[]</code> | IAM actions required for the CreateApiDestination API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.CreateArchive">CreateArchive</a></code> | <code>string[]</code> | IAM actions required for the CreateArchive API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.CreateConnection">CreateConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateConnection API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.CreateEndpoint">CreateEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateEndpoint API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.CreateEventBus">CreateEventBus</a></code> | <code>string[]</code> | IAM actions required for the CreateEventBus API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.CreatePartnerEventSource">CreatePartnerEventSource</a></code> | <code>string[]</code> | IAM actions required for the CreatePartnerEventSource API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DeactivateEventSource">DeactivateEventSource</a></code> | <code>string[]</code> | IAM actions required for the DeactivateEventSource API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DeauthorizeConnection">DeauthorizeConnection</a></code> | <code>string[]</code> | IAM actions required for the DeauthorizeConnection API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DeleteApiDestination">DeleteApiDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteApiDestination API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DeleteArchive">DeleteArchive</a></code> | <code>string[]</code> | IAM actions required for the DeleteArchive API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteEndpoint API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DeleteEventBus">DeleteEventBus</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventBus API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DeletePartnerEventSource">DeletePartnerEventSource</a></code> | <code>string[]</code> | IAM actions required for the DeletePartnerEventSource API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DeleteRule">DeleteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRule API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DescribeApiDestination">DescribeApiDestination</a></code> | <code>string[]</code> | IAM actions required for the DescribeApiDestination API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DescribeArchive">DescribeArchive</a></code> | <code>string[]</code> | IAM actions required for the DescribeArchive API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DescribeConnection">DescribeConnection</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnection API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DescribeEndpoint">DescribeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DescribeEventBus">DescribeEventBus</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventBus API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DescribeEventSource">DescribeEventSource</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventSource API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DescribePartnerEventSource">DescribePartnerEventSource</a></code> | <code>string[]</code> | IAM actions required for the DescribePartnerEventSource API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DescribeReplay">DescribeReplay</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplay API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DescribeRule">DescribeRule</a></code> | <code>string[]</code> | IAM actions required for the DescribeRule API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.DisableRule">DisableRule</a></code> | <code>string[]</code> | IAM actions required for the DisableRule API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.EnableRule">EnableRule</a></code> | <code>string[]</code> | IAM actions required for the EnableRule API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListApiDestinations">ListApiDestinations</a></code> | <code>string[]</code> | IAM actions required for the ListApiDestinations API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListArchives">ListArchives</a></code> | <code>string[]</code> | IAM actions required for the ListArchives API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListConnections">ListConnections</a></code> | <code>string[]</code> | IAM actions required for the ListConnections API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListEndpoints">ListEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListEndpoints API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListEventBuses">ListEventBuses</a></code> | <code>string[]</code> | IAM actions required for the ListEventBuses API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListEventSources">ListEventSources</a></code> | <code>string[]</code> | IAM actions required for the ListEventSources API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListPartnerEventSourceAccounts">ListPartnerEventSourceAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListPartnerEventSourceAccounts API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListPartnerEventSources">ListPartnerEventSources</a></code> | <code>string[]</code> | IAM actions required for the ListPartnerEventSources API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListReplays">ListReplays</a></code> | <code>string[]</code> | IAM actions required for the ListReplays API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListRuleNamesByTarget">ListRuleNamesByTarget</a></code> | <code>string[]</code> | IAM actions required for the ListRuleNamesByTarget API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListRules">ListRules</a></code> | <code>string[]</code> | IAM actions required for the ListRules API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.ListTargetsByRule">ListTargetsByRule</a></code> | <code>string[]</code> | IAM actions required for the ListTargetsByRule API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.PutEvents">PutEvents</a></code> | <code>string[]</code> | IAM actions required for the PutEvents API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.PutPartnerEvents">PutPartnerEvents</a></code> | <code>string[]</code> | IAM actions required for the PutPartnerEvents API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.PutPermission">PutPermission</a></code> | <code>string[]</code> | IAM actions required for the PutPermission API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.PutRule">PutRule</a></code> | <code>string[]</code> | IAM actions required for the PutRule API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.PutTargets">PutTargets</a></code> | <code>string[]</code> | IAM actions required for the PutTargets API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.RemovePermission">RemovePermission</a></code> | <code>string[]</code> | IAM actions required for the RemovePermission API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.RemoveTargets">RemoveTargets</a></code> | <code>string[]</code> | IAM actions required for the RemoveTargets API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.StartReplay">StartReplay</a></code> | <code>string[]</code> | IAM actions required for the StartReplay API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.TestEventPattern">TestEventPattern</a></code> | <code>string[]</code> | IAM actions required for the TestEventPattern API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.UpdateApiDestination">UpdateApiDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateApiDestination API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.UpdateArchive">UpdateArchive</a></code> | <code>string[]</code> | IAM actions required for the UpdateArchive API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.UpdateConnection">UpdateConnection</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnection API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.UpdateEndpoint">UpdateEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateEndpoint API call. |
| <code><a href="#@cdk_utils/iam.events.EventsOperations.property.UpdateEventBus">UpdateEventBus</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventBus API call. |

---

##### `ActivateEventSource`<sup>Required</sup> <a name="ActivateEventSource" id="@cdk_utils/iam.events.EventsOperations.property.ActivateEventSource"></a>

```typescript
public readonly ActivateEventSource: string[];
```

- *Type:* string[]

IAM actions required for the ActivateEventSource API call.

---

##### `CancelReplay`<sup>Required</sup> <a name="CancelReplay" id="@cdk_utils/iam.events.EventsOperations.property.CancelReplay"></a>

```typescript
public readonly CancelReplay: string[];
```

- *Type:* string[]

IAM actions required for the CancelReplay API call.

---

##### `CreateApiDestination`<sup>Required</sup> <a name="CreateApiDestination" id="@cdk_utils/iam.events.EventsOperations.property.CreateApiDestination"></a>

```typescript
public readonly CreateApiDestination: string[];
```

- *Type:* string[]

IAM actions required for the CreateApiDestination API call.

---

##### `CreateArchive`<sup>Required</sup> <a name="CreateArchive" id="@cdk_utils/iam.events.EventsOperations.property.CreateArchive"></a>

```typescript
public readonly CreateArchive: string[];
```

- *Type:* string[]

IAM actions required for the CreateArchive API call.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.events.EventsOperations.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnection API call.

---

##### `CreateEndpoint`<sup>Required</sup> <a name="CreateEndpoint" id="@cdk_utils/iam.events.EventsOperations.property.CreateEndpoint"></a>

```typescript
public readonly CreateEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateEndpoint API call.

---

##### `CreateEventBus`<sup>Required</sup> <a name="CreateEventBus" id="@cdk_utils/iam.events.EventsOperations.property.CreateEventBus"></a>

```typescript
public readonly CreateEventBus: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventBus API call.

---

##### `CreatePartnerEventSource`<sup>Required</sup> <a name="CreatePartnerEventSource" id="@cdk_utils/iam.events.EventsOperations.property.CreatePartnerEventSource"></a>

```typescript
public readonly CreatePartnerEventSource: string[];
```

- *Type:* string[]

IAM actions required for the CreatePartnerEventSource API call.

---

##### `DeactivateEventSource`<sup>Required</sup> <a name="DeactivateEventSource" id="@cdk_utils/iam.events.EventsOperations.property.DeactivateEventSource"></a>

```typescript
public readonly DeactivateEventSource: string[];
```

- *Type:* string[]

IAM actions required for the DeactivateEventSource API call.

---

##### `DeauthorizeConnection`<sup>Required</sup> <a name="DeauthorizeConnection" id="@cdk_utils/iam.events.EventsOperations.property.DeauthorizeConnection"></a>

```typescript
public readonly DeauthorizeConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeauthorizeConnection API call.

---

##### `DeleteApiDestination`<sup>Required</sup> <a name="DeleteApiDestination" id="@cdk_utils/iam.events.EventsOperations.property.DeleteApiDestination"></a>

```typescript
public readonly DeleteApiDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApiDestination API call.

---

##### `DeleteArchive`<sup>Required</sup> <a name="DeleteArchive" id="@cdk_utils/iam.events.EventsOperations.property.DeleteArchive"></a>

```typescript
public readonly DeleteArchive: string[];
```

- *Type:* string[]

IAM actions required for the DeleteArchive API call.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.events.EventsOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.events.EventsOperations.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEndpoint API call.

---

##### `DeleteEventBus`<sup>Required</sup> <a name="DeleteEventBus" id="@cdk_utils/iam.events.EventsOperations.property.DeleteEventBus"></a>

```typescript
public readonly DeleteEventBus: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventBus API call.

---

##### `DeletePartnerEventSource`<sup>Required</sup> <a name="DeletePartnerEventSource" id="@cdk_utils/iam.events.EventsOperations.property.DeletePartnerEventSource"></a>

```typescript
public readonly DeletePartnerEventSource: string[];
```

- *Type:* string[]

IAM actions required for the DeletePartnerEventSource API call.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.events.EventsOperations.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRule API call.

---

##### `DescribeApiDestination`<sup>Required</sup> <a name="DescribeApiDestination" id="@cdk_utils/iam.events.EventsOperations.property.DescribeApiDestination"></a>

```typescript
public readonly DescribeApiDestination: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApiDestination API call.

---

##### `DescribeArchive`<sup>Required</sup> <a name="DescribeArchive" id="@cdk_utils/iam.events.EventsOperations.property.DescribeArchive"></a>

```typescript
public readonly DescribeArchive: string[];
```

- *Type:* string[]

IAM actions required for the DescribeArchive API call.

---

##### `DescribeConnection`<sup>Required</sup> <a name="DescribeConnection" id="@cdk_utils/iam.events.EventsOperations.property.DescribeConnection"></a>

```typescript
public readonly DescribeConnection: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnection API call.

---

##### `DescribeEndpoint`<sup>Required</sup> <a name="DescribeEndpoint" id="@cdk_utils/iam.events.EventsOperations.property.DescribeEndpoint"></a>

```typescript
public readonly DescribeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpoint API call.

---

##### `DescribeEventBus`<sup>Required</sup> <a name="DescribeEventBus" id="@cdk_utils/iam.events.EventsOperations.property.DescribeEventBus"></a>

```typescript
public readonly DescribeEventBus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventBus API call.

---

##### `DescribeEventSource`<sup>Required</sup> <a name="DescribeEventSource" id="@cdk_utils/iam.events.EventsOperations.property.DescribeEventSource"></a>

```typescript
public readonly DescribeEventSource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventSource API call.

---

##### `DescribePartnerEventSource`<sup>Required</sup> <a name="DescribePartnerEventSource" id="@cdk_utils/iam.events.EventsOperations.property.DescribePartnerEventSource"></a>

```typescript
public readonly DescribePartnerEventSource: string[];
```

- *Type:* string[]

IAM actions required for the DescribePartnerEventSource API call.

---

##### `DescribeReplay`<sup>Required</sup> <a name="DescribeReplay" id="@cdk_utils/iam.events.EventsOperations.property.DescribeReplay"></a>

```typescript
public readonly DescribeReplay: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplay API call.

---

##### `DescribeRule`<sup>Required</sup> <a name="DescribeRule" id="@cdk_utils/iam.events.EventsOperations.property.DescribeRule"></a>

```typescript
public readonly DescribeRule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRule API call.

---

##### `DisableRule`<sup>Required</sup> <a name="DisableRule" id="@cdk_utils/iam.events.EventsOperations.property.DisableRule"></a>

```typescript
public readonly DisableRule: string[];
```

- *Type:* string[]

IAM actions required for the DisableRule API call.

---

##### `EnableRule`<sup>Required</sup> <a name="EnableRule" id="@cdk_utils/iam.events.EventsOperations.property.EnableRule"></a>

```typescript
public readonly EnableRule: string[];
```

- *Type:* string[]

IAM actions required for the EnableRule API call.

---

##### `ListApiDestinations`<sup>Required</sup> <a name="ListApiDestinations" id="@cdk_utils/iam.events.EventsOperations.property.ListApiDestinations"></a>

```typescript
public readonly ListApiDestinations: string[];
```

- *Type:* string[]

IAM actions required for the ListApiDestinations API call.

---

##### `ListArchives`<sup>Required</sup> <a name="ListArchives" id="@cdk_utils/iam.events.EventsOperations.property.ListArchives"></a>

```typescript
public readonly ListArchives: string[];
```

- *Type:* string[]

IAM actions required for the ListArchives API call.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.events.EventsOperations.property.ListConnections"></a>

```typescript
public readonly ListConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListConnections API call.

---

##### `ListEndpoints`<sup>Required</sup> <a name="ListEndpoints" id="@cdk_utils/iam.events.EventsOperations.property.ListEndpoints"></a>

```typescript
public readonly ListEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListEndpoints API call.

---

##### `ListEventBuses`<sup>Required</sup> <a name="ListEventBuses" id="@cdk_utils/iam.events.EventsOperations.property.ListEventBuses"></a>

```typescript
public readonly ListEventBuses: string[];
```

- *Type:* string[]

IAM actions required for the ListEventBuses API call.

---

##### `ListEventSources`<sup>Required</sup> <a name="ListEventSources" id="@cdk_utils/iam.events.EventsOperations.property.ListEventSources"></a>

```typescript
public readonly ListEventSources: string[];
```

- *Type:* string[]

IAM actions required for the ListEventSources API call.

---

##### `ListPartnerEventSourceAccounts`<sup>Required</sup> <a name="ListPartnerEventSourceAccounts" id="@cdk_utils/iam.events.EventsOperations.property.ListPartnerEventSourceAccounts"></a>

```typescript
public readonly ListPartnerEventSourceAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListPartnerEventSourceAccounts API call.

---

##### `ListPartnerEventSources`<sup>Required</sup> <a name="ListPartnerEventSources" id="@cdk_utils/iam.events.EventsOperations.property.ListPartnerEventSources"></a>

```typescript
public readonly ListPartnerEventSources: string[];
```

- *Type:* string[]

IAM actions required for the ListPartnerEventSources API call.

---

##### `ListReplays`<sup>Required</sup> <a name="ListReplays" id="@cdk_utils/iam.events.EventsOperations.property.ListReplays"></a>

```typescript
public readonly ListReplays: string[];
```

- *Type:* string[]

IAM actions required for the ListReplays API call.

---

##### `ListRuleNamesByTarget`<sup>Required</sup> <a name="ListRuleNamesByTarget" id="@cdk_utils/iam.events.EventsOperations.property.ListRuleNamesByTarget"></a>

```typescript
public readonly ListRuleNamesByTarget: string[];
```

- *Type:* string[]

IAM actions required for the ListRuleNamesByTarget API call.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.events.EventsOperations.property.ListRules"></a>

```typescript
public readonly ListRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRules API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.events.EventsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTargetsByRule`<sup>Required</sup> <a name="ListTargetsByRule" id="@cdk_utils/iam.events.EventsOperations.property.ListTargetsByRule"></a>

```typescript
public readonly ListTargetsByRule: string[];
```

- *Type:* string[]

IAM actions required for the ListTargetsByRule API call.

---

##### `PutEvents`<sup>Required</sup> <a name="PutEvents" id="@cdk_utils/iam.events.EventsOperations.property.PutEvents"></a>

```typescript
public readonly PutEvents: string[];
```

- *Type:* string[]

IAM actions required for the PutEvents API call.

---

##### `PutPartnerEvents`<sup>Required</sup> <a name="PutPartnerEvents" id="@cdk_utils/iam.events.EventsOperations.property.PutPartnerEvents"></a>

```typescript
public readonly PutPartnerEvents: string[];
```

- *Type:* string[]

IAM actions required for the PutPartnerEvents API call.

---

##### `PutPermission`<sup>Required</sup> <a name="PutPermission" id="@cdk_utils/iam.events.EventsOperations.property.PutPermission"></a>

```typescript
public readonly PutPermission: string[];
```

- *Type:* string[]

IAM actions required for the PutPermission API call.

---

##### `PutRule`<sup>Required</sup> <a name="PutRule" id="@cdk_utils/iam.events.EventsOperations.property.PutRule"></a>

```typescript
public readonly PutRule: string[];
```

- *Type:* string[]

IAM actions required for the PutRule API call.

---

##### `PutTargets`<sup>Required</sup> <a name="PutTargets" id="@cdk_utils/iam.events.EventsOperations.property.PutTargets"></a>

```typescript
public readonly PutTargets: string[];
```

- *Type:* string[]

IAM actions required for the PutTargets API call.

---

##### `RemovePermission`<sup>Required</sup> <a name="RemovePermission" id="@cdk_utils/iam.events.EventsOperations.property.RemovePermission"></a>

```typescript
public readonly RemovePermission: string[];
```

- *Type:* string[]

IAM actions required for the RemovePermission API call.

---

##### `RemoveTargets`<sup>Required</sup> <a name="RemoveTargets" id="@cdk_utils/iam.events.EventsOperations.property.RemoveTargets"></a>

```typescript
public readonly RemoveTargets: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTargets API call.

---

##### `StartReplay`<sup>Required</sup> <a name="StartReplay" id="@cdk_utils/iam.events.EventsOperations.property.StartReplay"></a>

```typescript
public readonly StartReplay: string[];
```

- *Type:* string[]

IAM actions required for the StartReplay API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.events.EventsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestEventPattern`<sup>Required</sup> <a name="TestEventPattern" id="@cdk_utils/iam.events.EventsOperations.property.TestEventPattern"></a>

```typescript
public readonly TestEventPattern: string[];
```

- *Type:* string[]

IAM actions required for the TestEventPattern API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.events.EventsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApiDestination`<sup>Required</sup> <a name="UpdateApiDestination" id="@cdk_utils/iam.events.EventsOperations.property.UpdateApiDestination"></a>

```typescript
public readonly UpdateApiDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApiDestination API call.

---

##### `UpdateArchive`<sup>Required</sup> <a name="UpdateArchive" id="@cdk_utils/iam.events.EventsOperations.property.UpdateArchive"></a>

```typescript
public readonly UpdateArchive: string[];
```

- *Type:* string[]

IAM actions required for the UpdateArchive API call.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.events.EventsOperations.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnection API call.

---

##### `UpdateEndpoint`<sup>Required</sup> <a name="UpdateEndpoint" id="@cdk_utils/iam.events.EventsOperations.property.UpdateEndpoint"></a>

```typescript
public readonly UpdateEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEndpoint API call.

---

##### `UpdateEventBus`<sup>Required</sup> <a name="UpdateEventBus" id="@cdk_utils/iam.events.EventsOperations.property.UpdateEventBus"></a>

```typescript
public readonly UpdateEventBus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventBus API call.

---

### EventsResources <a name="EventsResources" id="@cdk_utils/iam.events.EventsResources"></a>

ARN builders, validators, and parsers for events resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.events.EventsResources.Initializer"></a>

```typescript
import { events } from '@cdk_utils/iam'

new events.EventsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.events.EventsResources.alias">alias</a></code> | Builds an ARN for the alias resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.apiDestination">apiDestination</a></code> | Builds an ARN for the api-destination resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.archive">archive</a></code> | Builds an ARN for the archive resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.connection">connection</a></code> | Builds an ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.createSnapshot">createSnapshot</a></code> | Builds an ARN for the create-snapshot resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.endpoint">endpoint</a></code> | Builds an ARN for the endpoint resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.eventBus">eventBus</a></code> | Builds an ARN for the event-bus resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.eventSource">eventSource</a></code> | Builds an ARN for the event-source resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidAliasArn">isValidAliasArn</a></code> | Validates whether a string is a valid ARN for the alias resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidAPIDestinationArn">isValidAPIDestinationArn</a></code> | Validates whether a string is a valid ARN for the api-destination resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidArchiveArn">isValidArchiveArn</a></code> | Validates whether a string is a valid ARN for the archive resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidConnectionArn">isValidConnectionArn</a></code> | Validates whether a string is a valid ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidCreateSnapshotArn">isValidCreateSnapshotArn</a></code> | Validates whether a string is a valid ARN for the create-snapshot resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidEndpointArn">isValidEndpointArn</a></code> | Validates whether a string is a valid ARN for the endpoint resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidEventBusArn">isValidEventBusArn</a></code> | Validates whether a string is a valid ARN for the event-bus resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidEventSourceArn">isValidEventSourceArn</a></code> | Validates whether a string is a valid ARN for the event-source resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidKeyArn">isValidKeyArn</a></code> | Validates whether a string is a valid ARN for the key resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidRebootInstanceArn">isValidRebootInstanceArn</a></code> | Validates whether a string is a valid ARN for the reboot-instance resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidReplayArn">isValidReplayArn</a></code> | Validates whether a string is a valid ARN for the replay resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidRuleOnCustomEventBusArn">isValidRuleOnCustomEventBusArn</a></code> | Validates whether a string is a valid ARN for the rule-on-custom-event-bus resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidRuleOnDefaultEventBusArn">isValidRuleOnDefaultEventBusArn</a></code> | Validates whether a string is a valid ARN for the rule-on-default-event-bus resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidStopInstanceArn">isValidStopInstanceArn</a></code> | Validates whether a string is a valid ARN for the stop-instance resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.isValidTerminateInstanceArn">isValidTerminateInstanceArn</a></code> | Validates whether a string is a valid ARN for the terminate-instance resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.key">key</a></code> | Builds an ARN for the key resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseAliasArn">parseAliasArn</a></code> | Parses a alias ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseAPIDestinationArn">parseAPIDestinationArn</a></code> | Parses a api-destination ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseArchiveArn">parseArchiveArn</a></code> | Parses a archive ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseConnectionArn">parseConnectionArn</a></code> | Parses a connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseCreateSnapshotArn">parseCreateSnapshotArn</a></code> | Parses a create-snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseEndpointArn">parseEndpointArn</a></code> | Parses a endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseEventBusArn">parseEventBusArn</a></code> | Parses a event-bus ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseEventSourceArn">parseEventSourceArn</a></code> | Parses a event-source ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseKeyArn">parseKeyArn</a></code> | Parses a key ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseRebootInstanceArn">parseRebootInstanceArn</a></code> | Parses a reboot-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseReplayArn">parseReplayArn</a></code> | Parses a replay ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseRuleOnCustomEventBusArn">parseRuleOnCustomEventBusArn</a></code> | Parses a rule-on-custom-event-bus ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseRuleOnDefaultEventBusArn">parseRuleOnDefaultEventBusArn</a></code> | Parses a rule-on-default-event-bus ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseStopInstanceArn">parseStopInstanceArn</a></code> | Parses a stop-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.parseTerminateInstanceArn">parseTerminateInstanceArn</a></code> | Parses a terminate-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.rebootInstance">rebootInstance</a></code> | Builds an ARN for the reboot-instance resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.replay">replay</a></code> | Builds an ARN for the replay resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.ruleOnCustomEventBus">ruleOnCustomEventBus</a></code> | Builds an ARN for the rule-on-custom-event-bus resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.ruleOnDefaultEventBus">ruleOnDefaultEventBus</a></code> | Builds an ARN for the rule-on-default-event-bus resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.stopInstance">stopInstance</a></code> | Builds an ARN for the stop-instance resource. |
| <code><a href="#@cdk_utils/iam.events.EventsResources.terminateInstance">terminateInstance</a></code> | Builds an ARN for the terminate-instance resource. |

---

##### `alias` <a name="alias" id="@cdk_utils/iam.events.EventsResources.alias"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.alias(props: EventsAliasArnProps)
```

Builds an ARN for the alias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.alias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsAliasArnProps">EventsAliasArnProps</a>

---

##### `apiDestination` <a name="apiDestination" id="@cdk_utils/iam.events.EventsResources.apiDestination"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.apiDestination(props: EventsAPIDestinationArnProps)
```

Builds an ARN for the api-destination resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.apiDestination.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsAPIDestinationArnProps">EventsAPIDestinationArnProps</a>

---

##### `archive` <a name="archive" id="@cdk_utils/iam.events.EventsResources.archive"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.archive(props: EventsArchiveArnProps)
```

Builds an ARN for the archive resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.archive.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsArchiveArnProps">EventsArchiveArnProps</a>

---

##### `connection` <a name="connection" id="@cdk_utils/iam.events.EventsResources.connection"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.connection(props: EventsConnectionArnProps)
```

Builds an ARN for the connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.connection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsConnectionArnProps">EventsConnectionArnProps</a>

---

##### `createSnapshot` <a name="createSnapshot" id="@cdk_utils/iam.events.EventsResources.createSnapshot"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.createSnapshot(props: EventsCreateSnapshotArnProps)
```

Builds an ARN for the create-snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.createSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsCreateSnapshotArnProps">EventsCreateSnapshotArnProps</a>

---

##### `endpoint` <a name="endpoint" id="@cdk_utils/iam.events.EventsResources.endpoint"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.endpoint(props: EventsEndpointArnProps)
```

Builds an ARN for the endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.endpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsEndpointArnProps">EventsEndpointArnProps</a>

---

##### `eventBus` <a name="eventBus" id="@cdk_utils/iam.events.EventsResources.eventBus"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.eventBus(props: EventsEventBusArnProps)
```

Builds an ARN for the event-bus resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.eventBus.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsEventBusArnProps">EventsEventBusArnProps</a>

---

##### `eventSource` <a name="eventSource" id="@cdk_utils/iam.events.EventsResources.eventSource"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.eventSource(props: EventsEventSourceArnProps)
```

Builds an ARN for the event-source resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.eventSource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsEventSourceArnProps">EventsEventSourceArnProps</a>

---

##### `isValidAliasArn` <a name="isValidAliasArn" id="@cdk_utils/iam.events.EventsResources.isValidAliasArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidAliasArn(arn: string)
```

Validates whether a string is a valid ARN for the alias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAPIDestinationArn` <a name="isValidAPIDestinationArn" id="@cdk_utils/iam.events.EventsResources.isValidAPIDestinationArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidAPIDestinationArn(arn: string)
```

Validates whether a string is a valid ARN for the api-destination resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidAPIDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidArchiveArn` <a name="isValidArchiveArn" id="@cdk_utils/iam.events.EventsResources.isValidArchiveArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidArchiveArn(arn: string)
```

Validates whether a string is a valid ARN for the archive resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidArchiveArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionArn` <a name="isValidConnectionArn" id="@cdk_utils/iam.events.EventsResources.isValidConnectionArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCreateSnapshotArn` <a name="isValidCreateSnapshotArn" id="@cdk_utils/iam.events.EventsResources.isValidCreateSnapshotArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidCreateSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the create-snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidCreateSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEndpointArn` <a name="isValidEndpointArn" id="@cdk_utils/iam.events.EventsResources.isValidEndpointArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventBusArn` <a name="isValidEventBusArn" id="@cdk_utils/iam.events.EventsResources.isValidEventBusArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidEventBusArn(arn: string)
```

Validates whether a string is a valid ARN for the event-bus resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidEventBusArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventSourceArn` <a name="isValidEventSourceArn" id="@cdk_utils/iam.events.EventsResources.isValidEventSourceArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidEventSourceArn(arn: string)
```

Validates whether a string is a valid ARN for the event-source resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidEventSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKeyArn` <a name="isValidKeyArn" id="@cdk_utils/iam.events.EventsResources.isValidKeyArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidKeyArn(arn: string)
```

Validates whether a string is a valid ARN for the key resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRebootInstanceArn` <a name="isValidRebootInstanceArn" id="@cdk_utils/iam.events.EventsResources.isValidRebootInstanceArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidRebootInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the reboot-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidRebootInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplayArn` <a name="isValidReplayArn" id="@cdk_utils/iam.events.EventsResources.isValidReplayArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidReplayArn(arn: string)
```

Validates whether a string is a valid ARN for the replay resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidReplayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuleOnCustomEventBusArn` <a name="isValidRuleOnCustomEventBusArn" id="@cdk_utils/iam.events.EventsResources.isValidRuleOnCustomEventBusArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidRuleOnCustomEventBusArn(arn: string)
```

Validates whether a string is a valid ARN for the rule-on-custom-event-bus resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidRuleOnCustomEventBusArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuleOnDefaultEventBusArn` <a name="isValidRuleOnDefaultEventBusArn" id="@cdk_utils/iam.events.EventsResources.isValidRuleOnDefaultEventBusArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidRuleOnDefaultEventBusArn(arn: string)
```

Validates whether a string is a valid ARN for the rule-on-default-event-bus resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidRuleOnDefaultEventBusArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStopInstanceArn` <a name="isValidStopInstanceArn" id="@cdk_utils/iam.events.EventsResources.isValidStopInstanceArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidStopInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the stop-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidStopInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTerminateInstanceArn` <a name="isValidTerminateInstanceArn" id="@cdk_utils/iam.events.EventsResources.isValidTerminateInstanceArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.isValidTerminateInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the terminate-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.isValidTerminateInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `key` <a name="key" id="@cdk_utils/iam.events.EventsResources.key"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.key(props: EventsKeyArnProps)
```

Builds an ARN for the key resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.key.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsKeyArnProps">EventsKeyArnProps</a>

---

##### `parseAliasArn` <a name="parseAliasArn" id="@cdk_utils/iam.events.EventsResources.parseAliasArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseAliasArn(arn: string)
```

Parses a alias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAPIDestinationArn` <a name="parseAPIDestinationArn" id="@cdk_utils/iam.events.EventsResources.parseAPIDestinationArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseAPIDestinationArn(arn: string)
```

Parses a api-destination ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseAPIDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseArchiveArn` <a name="parseArchiveArn" id="@cdk_utils/iam.events.EventsResources.parseArchiveArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseArchiveArn(arn: string)
```

Parses a archive ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseArchiveArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionArn` <a name="parseConnectionArn" id="@cdk_utils/iam.events.EventsResources.parseConnectionArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseConnectionArn(arn: string)
```

Parses a connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCreateSnapshotArn` <a name="parseCreateSnapshotArn" id="@cdk_utils/iam.events.EventsResources.parseCreateSnapshotArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseCreateSnapshotArn(arn: string)
```

Parses a create-snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseCreateSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEndpointArn` <a name="parseEndpointArn" id="@cdk_utils/iam.events.EventsResources.parseEndpointArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseEndpointArn(arn: string)
```

Parses a endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventBusArn` <a name="parseEventBusArn" id="@cdk_utils/iam.events.EventsResources.parseEventBusArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseEventBusArn(arn: string)
```

Parses a event-bus ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseEventBusArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventSourceArn` <a name="parseEventSourceArn" id="@cdk_utils/iam.events.EventsResources.parseEventSourceArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseEventSourceArn(arn: string)
```

Parses a event-source ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseEventSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKeyArn` <a name="parseKeyArn" id="@cdk_utils/iam.events.EventsResources.parseKeyArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseKeyArn(arn: string)
```

Parses a key ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRebootInstanceArn` <a name="parseRebootInstanceArn" id="@cdk_utils/iam.events.EventsResources.parseRebootInstanceArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseRebootInstanceArn(arn: string)
```

Parses a reboot-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseRebootInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplayArn` <a name="parseReplayArn" id="@cdk_utils/iam.events.EventsResources.parseReplayArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseReplayArn(arn: string)
```

Parses a replay ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseReplayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuleOnCustomEventBusArn` <a name="parseRuleOnCustomEventBusArn" id="@cdk_utils/iam.events.EventsResources.parseRuleOnCustomEventBusArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseRuleOnCustomEventBusArn(arn: string)
```

Parses a rule-on-custom-event-bus ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseRuleOnCustomEventBusArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuleOnDefaultEventBusArn` <a name="parseRuleOnDefaultEventBusArn" id="@cdk_utils/iam.events.EventsResources.parseRuleOnDefaultEventBusArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseRuleOnDefaultEventBusArn(arn: string)
```

Parses a rule-on-default-event-bus ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseRuleOnDefaultEventBusArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStopInstanceArn` <a name="parseStopInstanceArn" id="@cdk_utils/iam.events.EventsResources.parseStopInstanceArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseStopInstanceArn(arn: string)
```

Parses a stop-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseStopInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTerminateInstanceArn` <a name="parseTerminateInstanceArn" id="@cdk_utils/iam.events.EventsResources.parseTerminateInstanceArn"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.parseTerminateInstanceArn(arn: string)
```

Parses a terminate-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.events.EventsResources.parseTerminateInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `rebootInstance` <a name="rebootInstance" id="@cdk_utils/iam.events.EventsResources.rebootInstance"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.rebootInstance(props: EventsRebootInstanceArnProps)
```

Builds an ARN for the reboot-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.rebootInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsRebootInstanceArnProps">EventsRebootInstanceArnProps</a>

---

##### `replay` <a name="replay" id="@cdk_utils/iam.events.EventsResources.replay"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.replay(props: EventsReplayArnProps)
```

Builds an ARN for the replay resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.replay.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsReplayArnProps">EventsReplayArnProps</a>

---

##### `ruleOnCustomEventBus` <a name="ruleOnCustomEventBus" id="@cdk_utils/iam.events.EventsResources.ruleOnCustomEventBus"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.ruleOnCustomEventBus(props: EventsRuleOnCustomEventBusArnProps)
```

Builds an ARN for the rule-on-custom-event-bus resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.ruleOnCustomEventBus.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsRuleOnCustomEventBusArnProps">EventsRuleOnCustomEventBusArnProps</a>

---

##### `ruleOnDefaultEventBus` <a name="ruleOnDefaultEventBus" id="@cdk_utils/iam.events.EventsResources.ruleOnDefaultEventBus"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.ruleOnDefaultEventBus(props: EventsRuleOnDefaultEventBusArnProps)
```

Builds an ARN for the rule-on-default-event-bus resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.ruleOnDefaultEventBus.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsRuleOnDefaultEventBusArnProps">EventsRuleOnDefaultEventBusArnProps</a>

---

##### `stopInstance` <a name="stopInstance" id="@cdk_utils/iam.events.EventsResources.stopInstance"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.stopInstance(props: EventsStopInstanceArnProps)
```

Builds an ARN for the stop-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.stopInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsStopInstanceArnProps">EventsStopInstanceArnProps</a>

---

##### `terminateInstance` <a name="terminateInstance" id="@cdk_utils/iam.events.EventsResources.terminateInstance"></a>

```typescript
import { events } from '@cdk_utils/iam'

events.EventsResources.terminateInstance(props: EventsTerminateInstanceArnProps)
```

Builds an ARN for the terminate-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.events.EventsResources.terminateInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.events.EventsTerminateInstanceArnProps">EventsTerminateInstanceArnProps</a>

---




