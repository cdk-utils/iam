# `profile` Submodule <a name="`profile` Submodule" id="@cdk_utils/iam.profile"></a>


## Structs <a name="Structs" id="Structs"></a>

### ProfileCalculatedAttributesArnComponents <a name="ProfileCalculatedAttributesArnComponents" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents"></a>

Parsed components of a calculated-attributes ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileCalculatedAttributesArnComponents: profile.ProfileCalculatedAttributesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents.property.calculatedAttributeName">calculatedAttributeName</a></code> | <code>string</code> | The CalculatedAttributeName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `calculatedAttributeName`<sup>Required</sup> <a name="calculatedAttributeName" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents.property.calculatedAttributeName"></a>

```typescript
public readonly calculatedAttributeName: string;
```

- *Type:* string

The CalculatedAttributeName component.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProfileCalculatedAttributesArnProps <a name="ProfileCalculatedAttributesArnProps" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps"></a>

Properties for building a calculated-attributes ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileCalculatedAttributesArnProps: profile.ProfileCalculatedAttributesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps.property.calculatedAttributeName">calculatedAttributeName</a></code> | <code>string</code> | The CalculatedAttributeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `calculatedAttributeName`<sup>Required</sup> <a name="calculatedAttributeName" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps.property.calculatedAttributeName"></a>

```typescript
public readonly calculatedAttributeName: string;
```

- *Type:* string

The CalculatedAttributeName component of the ARN.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProfileDomainObjectTypesArnComponents <a name="ProfileDomainObjectTypesArnComponents" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents"></a>

Parsed components of a domain-object-types ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileDomainObjectTypesArnComponents: profile.ProfileDomainObjectTypesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | The ObjectTypeName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

The ObjectTypeName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProfileDomainObjectTypesArnProps <a name="ProfileDomainObjectTypesArnProps" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps"></a>

Properties for building a domain-object-types ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileDomainObjectTypesArnProps: profile.ProfileDomainObjectTypesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | The ObjectTypeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

The ObjectTypeName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProfileDomainsArnComponents <a name="ProfileDomainsArnComponents" id="@cdk_utils/iam.profile.ProfileDomainsArnComponents"></a>

Parsed components of a domains ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileDomainsArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileDomainsArnComponents: profile.ProfileDomainsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainsArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileDomainsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileDomainsArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileDomainsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileDomainsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProfileDomainsArnProps <a name="ProfileDomainsArnProps" id="@cdk_utils/iam.profile.ProfileDomainsArnProps"></a>

Properties for building a domains ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileDomainsArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileDomainsArnProps: profile.ProfileDomainsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainsArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileDomainsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileDomainsArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileDomainsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileDomainsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileDomainsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProfileEventStreamsArnComponents <a name="ProfileEventStreamsArnComponents" id="@cdk_utils/iam.profile.ProfileEventStreamsArnComponents"></a>

Parsed components of a event-streams ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileEventStreamsArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileEventStreamsArnComponents: profile.ProfileEventStreamsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventStreamsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventStreamsArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventStreamsArnComponents.property.eventStreamName">eventStreamName</a></code> | <code>string</code> | The EventStreamName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventStreamsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventStreamsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileEventStreamsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileEventStreamsArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `eventStreamName`<sup>Required</sup> <a name="eventStreamName" id="@cdk_utils/iam.profile.ProfileEventStreamsArnComponents.property.eventStreamName"></a>

```typescript
public readonly eventStreamName: string;
```

- *Type:* string

The EventStreamName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileEventStreamsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileEventStreamsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProfileEventStreamsArnProps <a name="ProfileEventStreamsArnProps" id="@cdk_utils/iam.profile.ProfileEventStreamsArnProps"></a>

Properties for building a event-streams ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileEventStreamsArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileEventStreamsArnProps: profile.ProfileEventStreamsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventStreamsArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventStreamsArnProps.property.eventStreamName">eventStreamName</a></code> | <code>string</code> | The EventStreamName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventStreamsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventStreamsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventStreamsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileEventStreamsArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `eventStreamName`<sup>Required</sup> <a name="eventStreamName" id="@cdk_utils/iam.profile.ProfileEventStreamsArnProps.property.eventStreamName"></a>

```typescript
public readonly eventStreamName: string;
```

- *Type:* string

The EventStreamName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileEventStreamsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileEventStreamsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileEventStreamsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProfileEventTriggersArnComponents <a name="ProfileEventTriggersArnComponents" id="@cdk_utils/iam.profile.ProfileEventTriggersArnComponents"></a>

Parsed components of a event-triggers ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileEventTriggersArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileEventTriggersArnComponents: profile.ProfileEventTriggersArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventTriggersArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventTriggersArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventTriggersArnComponents.property.eventTriggerName">eventTriggerName</a></code> | <code>string</code> | The EventTriggerName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventTriggersArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventTriggersArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileEventTriggersArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileEventTriggersArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `eventTriggerName`<sup>Required</sup> <a name="eventTriggerName" id="@cdk_utils/iam.profile.ProfileEventTriggersArnComponents.property.eventTriggerName"></a>

```typescript
public readonly eventTriggerName: string;
```

- *Type:* string

The EventTriggerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileEventTriggersArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileEventTriggersArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProfileEventTriggersArnProps <a name="ProfileEventTriggersArnProps" id="@cdk_utils/iam.profile.ProfileEventTriggersArnProps"></a>

Properties for building a event-triggers ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileEventTriggersArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileEventTriggersArnProps: profile.ProfileEventTriggersArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventTriggersArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventTriggersArnProps.property.eventTriggerName">eventTriggerName</a></code> | <code>string</code> | The EventTriggerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventTriggersArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventTriggersArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileEventTriggersArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileEventTriggersArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `eventTriggerName`<sup>Required</sup> <a name="eventTriggerName" id="@cdk_utils/iam.profile.ProfileEventTriggersArnProps.property.eventTriggerName"></a>

```typescript
public readonly eventTriggerName: string;
```

- *Type:* string

The EventTriggerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileEventTriggersArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileEventTriggersArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileEventTriggersArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProfileIntegrationsArnComponents <a name="ProfileIntegrationsArnComponents" id="@cdk_utils/iam.profile.ProfileIntegrationsArnComponents"></a>

Parsed components of a integrations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileIntegrationsArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileIntegrationsArnComponents: profile.ProfileIntegrationsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileIntegrationsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileIntegrationsArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileIntegrationsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileIntegrationsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.profile.ProfileIntegrationsArnComponents.property.uri">uri</a></code> | <code>string</code> | The Uri component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileIntegrationsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileIntegrationsArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileIntegrationsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileIntegrationsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdk_utils/iam.profile.ProfileIntegrationsArnComponents.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The Uri component.

---

### ProfileIntegrationsArnProps <a name="ProfileIntegrationsArnProps" id="@cdk_utils/iam.profile.ProfileIntegrationsArnProps"></a>

Properties for building a integrations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileIntegrationsArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileIntegrationsArnProps: profile.ProfileIntegrationsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileIntegrationsArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileIntegrationsArnProps.property.uri">uri</a></code> | <code>string</code> | The Uri component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileIntegrationsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileIntegrationsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileIntegrationsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileIntegrationsArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdk_utils/iam.profile.ProfileIntegrationsArnProps.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The Uri component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileIntegrationsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileIntegrationsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileIntegrationsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProfileLayoutsArnComponents <a name="ProfileLayoutsArnComponents" id="@cdk_utils/iam.profile.ProfileLayoutsArnComponents"></a>

Parsed components of a layouts ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileLayoutsArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileLayoutsArnComponents: profile.ProfileLayoutsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileLayoutsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileLayoutsArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileLayoutsArnComponents.property.layoutDefinitionName">layoutDefinitionName</a></code> | <code>string</code> | The LayoutDefinitionName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileLayoutsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileLayoutsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileLayoutsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileLayoutsArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `layoutDefinitionName`<sup>Required</sup> <a name="layoutDefinitionName" id="@cdk_utils/iam.profile.ProfileLayoutsArnComponents.property.layoutDefinitionName"></a>

```typescript
public readonly layoutDefinitionName: string;
```

- *Type:* string

The LayoutDefinitionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileLayoutsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileLayoutsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProfileLayoutsArnProps <a name="ProfileLayoutsArnProps" id="@cdk_utils/iam.profile.ProfileLayoutsArnProps"></a>

Properties for building a layouts ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileLayoutsArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileLayoutsArnProps: profile.ProfileLayoutsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileLayoutsArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileLayoutsArnProps.property.layoutDefinitionName">layoutDefinitionName</a></code> | <code>string</code> | The LayoutDefinitionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileLayoutsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileLayoutsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileLayoutsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileLayoutsArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `layoutDefinitionName`<sup>Required</sup> <a name="layoutDefinitionName" id="@cdk_utils/iam.profile.ProfileLayoutsArnProps.property.layoutDefinitionName"></a>

```typescript
public readonly layoutDefinitionName: string;
```

- *Type:* string

The LayoutDefinitionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileLayoutsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileLayoutsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileLayoutsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProfileObjectTypesArnComponents <a name="ProfileObjectTypesArnComponents" id="@cdk_utils/iam.profile.ProfileObjectTypesArnComponents"></a>

Parsed components of a object-types ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileObjectTypesArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileObjectTypesArnComponents: profile.ProfileObjectTypesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileObjectTypesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileObjectTypesArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileObjectTypesArnComponents.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | The ObjectTypeName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileObjectTypesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileObjectTypesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileObjectTypesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileObjectTypesArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdk_utils/iam.profile.ProfileObjectTypesArnComponents.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

The ObjectTypeName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileObjectTypesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileObjectTypesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProfileObjectTypesArnProps <a name="ProfileObjectTypesArnProps" id="@cdk_utils/iam.profile.ProfileObjectTypesArnProps"></a>

Properties for building a object-types ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileObjectTypesArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileObjectTypesArnProps: profile.ProfileObjectTypesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileObjectTypesArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileObjectTypesArnProps.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | The ObjectTypeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileObjectTypesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileObjectTypesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileObjectTypesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileObjectTypesArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdk_utils/iam.profile.ProfileObjectTypesArnProps.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

The ObjectTypeName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileObjectTypesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileObjectTypesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileObjectTypesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProfileRecommenderFiltersArnComponents <a name="ProfileRecommenderFiltersArnComponents" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents"></a>

Parsed components of a recommender-filters ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileRecommenderFiltersArnComponents: profile.ProfileRecommenderFiltersArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents.property.recommenderFilterName">recommenderFilterName</a></code> | <code>string</code> | The RecommenderFilterName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recommenderFilterName`<sup>Required</sup> <a name="recommenderFilterName" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents.property.recommenderFilterName"></a>

```typescript
public readonly recommenderFilterName: string;
```

- *Type:* string

The RecommenderFilterName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProfileRecommenderFiltersArnProps <a name="ProfileRecommenderFiltersArnProps" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps"></a>

Properties for building a recommender-filters ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileRecommenderFiltersArnProps: profile.ProfileRecommenderFiltersArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps.property.recommenderFilterName">recommenderFilterName</a></code> | <code>string</code> | The RecommenderFilterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `recommenderFilterName`<sup>Required</sup> <a name="recommenderFilterName" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps.property.recommenderFilterName"></a>

```typescript
public readonly recommenderFilterName: string;
```

- *Type:* string

The RecommenderFilterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProfileRecommendersArnComponents <a name="ProfileRecommendersArnComponents" id="@cdk_utils/iam.profile.ProfileRecommendersArnComponents"></a>

Parsed components of a recommenders ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileRecommendersArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileRecommendersArnComponents: profile.ProfileRecommendersArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommendersArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommendersArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommendersArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommendersArnComponents.property.recommenderTypeName">recommenderTypeName</a></code> | <code>string</code> | The RecommenderTypeName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommendersArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileRecommendersArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileRecommendersArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileRecommendersArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recommenderTypeName`<sup>Required</sup> <a name="recommenderTypeName" id="@cdk_utils/iam.profile.ProfileRecommendersArnComponents.property.recommenderTypeName"></a>

```typescript
public readonly recommenderTypeName: string;
```

- *Type:* string

The RecommenderTypeName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileRecommendersArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProfileRecommendersArnProps <a name="ProfileRecommendersArnProps" id="@cdk_utils/iam.profile.ProfileRecommendersArnProps"></a>

Properties for building a recommenders ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileRecommendersArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileRecommendersArnProps: profile.ProfileRecommendersArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommendersArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommendersArnProps.property.recommenderTypeName">recommenderTypeName</a></code> | <code>string</code> | The RecommenderTypeName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommendersArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommendersArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommendersArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileRecommendersArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `recommenderTypeName`<sup>Required</sup> <a name="recommenderTypeName" id="@cdk_utils/iam.profile.ProfileRecommendersArnProps.property.recommenderTypeName"></a>

```typescript
public readonly recommenderTypeName: string;
```

- *Type:* string

The RecommenderTypeName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileRecommendersArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileRecommendersArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileRecommendersArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProfileRecommenderSchemasArnComponents <a name="ProfileRecommenderSchemasArnComponents" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents"></a>

Parsed components of a recommender-schemas ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileRecommenderSchemasArnComponents: profile.ProfileRecommenderSchemasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents.property.recommenderSchemaName">recommenderSchemaName</a></code> | <code>string</code> | The RecommenderSchemaName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recommenderSchemaName`<sup>Required</sup> <a name="recommenderSchemaName" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents.property.recommenderSchemaName"></a>

```typescript
public readonly recommenderSchemaName: string;
```

- *Type:* string

The RecommenderSchemaName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProfileRecommenderSchemasArnProps <a name="ProfileRecommenderSchemasArnProps" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps"></a>

Properties for building a recommender-schemas ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileRecommenderSchemasArnProps: profile.ProfileRecommenderSchemasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps.property.recommenderSchemaName">recommenderSchemaName</a></code> | <code>string</code> | The RecommenderSchemaName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `recommenderSchemaName`<sup>Required</sup> <a name="recommenderSchemaName" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps.property.recommenderSchemaName"></a>

```typescript
public readonly recommenderSchemaName: string;
```

- *Type:* string

The RecommenderSchemaName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProfileSegmentDefinitionsArnComponents <a name="ProfileSegmentDefinitionsArnComponents" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents"></a>

Parsed components of a segment-definitions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileSegmentDefinitionsArnComponents: profile.ProfileSegmentDefinitionsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents.property.segmentDefinitionName">segmentDefinitionName</a></code> | <code>string</code> | The SegmentDefinitionName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `segmentDefinitionName`<sup>Required</sup> <a name="segmentDefinitionName" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnComponents.property.segmentDefinitionName"></a>

```typescript
public readonly segmentDefinitionName: string;
```

- *Type:* string

The SegmentDefinitionName component.

---

### ProfileSegmentDefinitionsArnProps <a name="ProfileSegmentDefinitionsArnProps" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps"></a>

Properties for building a segment-definitions ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

const profileSegmentDefinitionsArnProps: profile.ProfileSegmentDefinitionsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps.property.segmentDefinitionName">segmentDefinitionName</a></code> | <code>string</code> | The SegmentDefinitionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `segmentDefinitionName`<sup>Required</sup> <a name="segmentDefinitionName" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps.property.segmentDefinitionName"></a>

```typescript
public readonly segmentDefinitionName: string;
```

- *Type:* string

The SegmentDefinitionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ProfileActions <a name="ProfileActions" id="@cdk_utils/iam.profile.ProfileActions"></a>

IAM action constants for the profile service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.profile.ProfileActions.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

new profile.ProfileActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetAutoMergingPreview">actionGetAutoMergingPreview</a></code> | <code>string</code> | [Read] profile:GetAutoMergingPreview. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetCalculatedAttributeDefinition">actionGetCalculatedAttributeDefinition</a></code> | <code>string</code> | [Read] profile:GetCalculatedAttributeDefinition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetCalculatedAttributeForProfile">actionGetCalculatedAttributeForProfile</a></code> | <code>string</code> | [Read] profile:GetCalculatedAttributeForProfile. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetDomain">actionGetDomain</a></code> | <code>string</code> | [Read] profile:GetDomain. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetDomainLayout">actionGetDomainLayout</a></code> | <code>string</code> | [Read] profile:GetDomainLayout. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetDomainObjectType">actionGetDomainObjectType</a></code> | <code>string</code> | [Read] profile:GetDomainObjectType. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetEventStream">actionGetEventStream</a></code> | <code>string</code> | [Read] profile:GetEventStream. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetEventTrigger">actionGetEventTrigger</a></code> | <code>string</code> | [Read] profile:GetEventTrigger. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetIdentityResolutionJob">actionGetIdentityResolutionJob</a></code> | <code>string</code> | [Read] profile:GetIdentityResolutionJob. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetIntegration">actionGetIntegration</a></code> | <code>string</code> | [Read] profile:GetIntegration. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetMatches">actionGetMatches</a></code> | <code>string</code> | [List] profile:GetMatches. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetObjectTypeAttributeStatistics">actionGetObjectTypeAttributeStatistics</a></code> | <code>string</code> | [Read] profile:GetObjectTypeAttributeStatistics. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetProfileHistoryRecord">actionGetProfileHistoryRecord</a></code> | <code>string</code> | [Read] profile:GetProfileHistoryRecord. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetProfileInsights">actionGetProfileInsights</a></code> | <code>string</code> | [Read] profile:GetProfileInsights. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetProfileObjectType">actionGetProfileObjectType</a></code> | <code>string</code> | [Read] profile:GetProfileObjectType. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetProfileObjectTypeTemplate">actionGetProfileObjectTypeTemplate</a></code> | <code>string</code> | [Read] profile:GetProfileObjectTypeTemplate. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetProfileRecommendations">actionGetProfileRecommendations</a></code> | <code>string</code> | [Read] profile:GetProfileRecommendations. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetRecommender">actionGetRecommender</a></code> | <code>string</code> | [Read] profile:GetRecommender. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetRecommenderFilter">actionGetRecommenderFilter</a></code> | <code>string</code> | [Read] profile:GetRecommenderFilter. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetRecommenderSchema">actionGetRecommenderSchema</a></code> | <code>string</code> | [Read] profile:GetRecommenderSchema. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetSegmentDefinition">actionGetSegmentDefinition</a></code> | <code>string</code> | [Read] profile:GetSegmentDefinition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetSegmentEstimate">actionGetSegmentEstimate</a></code> | <code>string</code> | [Read] profile:GetSegmentEstimate. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetSegmentMembership">actionGetSegmentMembership</a></code> | <code>string</code> | [Read] profile:GetSegmentMembership. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetSegmentSnapshot">actionGetSegmentSnapshot</a></code> | <code>string</code> | [Read] profile:GetSegmentSnapshot. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetSegmentSubscription">actionGetSegmentSubscription</a></code> | <code>string</code> | [Read] profile:GetSegmentSubscription. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetSimilarProfiles">actionGetSimilarProfiles</a></code> | <code>string</code> | [List] profile:GetSimilarProfiles. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetSnapshot">actionGetSnapshot</a></code> | <code>string</code> | [Read] profile:GetSnapshot. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetStreamForSegments">actionGetStreamForSegments</a></code> | <code>string</code> | [Read] profile:GetStreamForSegments. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetUploadJob">actionGetUploadJob</a></code> | <code>string</code> | [Read] profile:GetUploadJob. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetUploadJobPath">actionGetUploadJobPath</a></code> | <code>string</code> | [Read] profile:GetUploadJobPath. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetWorkflow">actionGetWorkflow</a></code> | <code>string</code> | [Read] profile:GetWorkflow. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.actionGetWorkflowSteps">actionGetWorkflowSteps</a></code> | <code>string</code> | [Read] profile:GetWorkflowSteps. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.AddProfileKey">AddProfileKey</a></code> | <code>string</code> | [Write] profile:AddProfileKey. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.AssociateStreamForSegments">AssociateStreamForSegments</a></code> | <code>string</code> | [Write] profile:AssociateStreamForSegments. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.BatchGetCalculatedAttributeForProfile">BatchGetCalculatedAttributeForProfile</a></code> | <code>string</code> | [Read] profile:BatchGetCalculatedAttributeForProfile. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.BatchGetProfile">BatchGetProfile</a></code> | <code>string</code> | [Read] profile:BatchGetProfile. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateCalculatedAttributeDefinition">CreateCalculatedAttributeDefinition</a></code> | <code>string</code> | [Write] profile:CreateCalculatedAttributeDefinition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateDomain">CreateDomain</a></code> | <code>string</code> | [Write] profile:CreateDomain. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateDomainLayout">CreateDomainLayout</a></code> | <code>string</code> | [Write] profile:CreateDomainLayout. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateEventStream">CreateEventStream</a></code> | <code>string</code> | [Write] profile:CreateEventStream. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateEventTrigger">CreateEventTrigger</a></code> | <code>string</code> | [Write] profile:CreateEventTrigger. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateIntegrationWorkflow">CreateIntegrationWorkflow</a></code> | <code>string</code> | [Write] profile:CreateIntegrationWorkflow. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateProfile">CreateProfile</a></code> | <code>string</code> | [Write] profile:CreateProfile. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateRecommender">CreateRecommender</a></code> | <code>string</code> | [Write] profile:CreateRecommender. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateRecommenderFilter">CreateRecommenderFilter</a></code> | <code>string</code> | [Write] profile:CreateRecommenderFilter. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateRecommenderSchema">CreateRecommenderSchema</a></code> | <code>string</code> | [Write] profile:CreateRecommenderSchema. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateSegmentDefinition">CreateSegmentDefinition</a></code> | <code>string</code> | [Write] profile:CreateSegmentDefinition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateSegmentEstimate">CreateSegmentEstimate</a></code> | <code>string</code> | [Write] profile:CreateSegmentEstimate. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateSegmentSnapshot">CreateSegmentSnapshot</a></code> | <code>string</code> | [Write] profile:CreateSegmentSnapshot. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string</code> | [Write] profile:CreateSnapshot. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.CreateUploadJob">CreateUploadJob</a></code> | <code>string</code> | [Write] profile:CreateUploadJob. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteCalculatedAttributeDefinition">DeleteCalculatedAttributeDefinition</a></code> | <code>string</code> | [Write] profile:DeleteCalculatedAttributeDefinition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] profile:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteDomainLayout">DeleteDomainLayout</a></code> | <code>string</code> | [Write] profile:DeleteDomainLayout. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteDomainObjectType">DeleteDomainObjectType</a></code> | <code>string</code> | [Write] profile:DeleteDomainObjectType. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteEventStream">DeleteEventStream</a></code> | <code>string</code> | [Write] profile:DeleteEventStream. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteEventTrigger">DeleteEventTrigger</a></code> | <code>string</code> | [Write] profile:DeleteEventTrigger. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string</code> | [Write] profile:DeleteIntegration. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteProfile">DeleteProfile</a></code> | <code>string</code> | [Write] profile:DeleteProfile. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteProfileKey">DeleteProfileKey</a></code> | <code>string</code> | [Write] profile:DeleteProfileKey. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteProfileObject">DeleteProfileObject</a></code> | <code>string</code> | [Write] profile:DeleteProfileObject. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteProfileObjectType">DeleteProfileObjectType</a></code> | <code>string</code> | [Write] profile:DeleteProfileObjectType. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteRecommender">DeleteRecommender</a></code> | <code>string</code> | [Write] profile:DeleteRecommender. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteRecommenderFilter">DeleteRecommenderFilter</a></code> | <code>string</code> | [Write] profile:DeleteRecommenderFilter. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteRecommenderSchema">DeleteRecommenderSchema</a></code> | <code>string</code> | [Write] profile:DeleteRecommenderSchema. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteSegmentDefinition">DeleteSegmentDefinition</a></code> | <code>string</code> | [Write] profile:DeleteSegmentDefinition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteSegmentSubscription">DeleteSegmentSubscription</a></code> | <code>string</code> | [Write] profile:DeleteSegmentSubscription. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string</code> | [Write] profile:DeleteWorkflow. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DetectProfileObjectType">DetectProfileObjectType</a></code> | <code>string</code> | [Read] profile:DetectProfileObjectType. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.DisassociateStreamForSegments">DisassociateStreamForSegments</a></code> | <code>string</code> | [Write] profile:DisassociateStreamForSegments. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListAccountIntegrations">ListAccountIntegrations</a></code> | <code>string</code> | [List] profile:ListAccountIntegrations. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListCalculatedAttributeDefinitions">ListCalculatedAttributeDefinitions</a></code> | <code>string</code> | [List] profile:ListCalculatedAttributeDefinitions. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListCalculatedAttributesForProfile">ListCalculatedAttributesForProfile</a></code> | <code>string</code> | [List] profile:ListCalculatedAttributesForProfile. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListDomainLayouts">ListDomainLayouts</a></code> | <code>string</code> | [List] profile:ListDomainLayouts. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListDomainObjects">ListDomainObjects</a></code> | <code>string</code> | [List] profile:ListDomainObjects. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListDomainObjectTypes">ListDomainObjectTypes</a></code> | <code>string</code> | [List] profile:ListDomainObjectTypes. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] profile:ListDomains. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListEventStreams">ListEventStreams</a></code> | <code>string</code> | [List] profile:ListEventStreams. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListEventTriggers">ListEventTriggers</a></code> | <code>string</code> | [List] profile:ListEventTriggers. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListIdentityResolutionJobs">ListIdentityResolutionJobs</a></code> | <code>string</code> | [List] profile:ListIdentityResolutionJobs. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListIntegrations">ListIntegrations</a></code> | <code>string</code> | [List] profile:ListIntegrations. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListObjectTypeAttributes">ListObjectTypeAttributes</a></code> | <code>string</code> | [List] profile:ListObjectTypeAttributes. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListObjectTypeAttributeValues">ListObjectTypeAttributeValues</a></code> | <code>string</code> | [List] profile:ListObjectTypeAttributeValues. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListProfileAttributeValues">ListProfileAttributeValues</a></code> | <code>string</code> | [List] profile:ListProfileAttributeValues. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListProfileHistoryRecords">ListProfileHistoryRecords</a></code> | <code>string</code> | [List] profile:ListProfileHistoryRecords. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListProfileObjects">ListProfileObjects</a></code> | <code>string</code> | [List] profile:ListProfileObjects. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListProfileObjectTypes">ListProfileObjectTypes</a></code> | <code>string</code> | [List] profile:ListProfileObjectTypes. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListProfileObjectTypeTemplates">ListProfileObjectTypeTemplates</a></code> | <code>string</code> | [List] profile:ListProfileObjectTypeTemplates. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListRecommenderFilters">ListRecommenderFilters</a></code> | <code>string</code> | [List] profile:ListRecommenderFilters. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListRecommenderRecipes">ListRecommenderRecipes</a></code> | <code>string</code> | [List] profile:ListRecommenderRecipes. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListRecommenders">ListRecommenders</a></code> | <code>string</code> | [List] profile:ListRecommenders. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListRecommenderSchemas">ListRecommenderSchemas</a></code> | <code>string</code> | [List] profile:ListRecommenderSchemas. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListRuleBasedMatches">ListRuleBasedMatches</a></code> | <code>string</code> | [List] profile:ListRuleBasedMatches. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListSegmentDefinitions">ListSegmentDefinitions</a></code> | <code>string</code> | [List] profile:ListSegmentDefinitions. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListSegmentSubscriptionEvents">ListSegmentSubscriptionEvents</a></code> | <code>string</code> | [Read] profile:ListSegmentSubscriptionEvents. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] profile:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListUploadJobs">ListUploadJobs</a></code> | <code>string</code> | [List] profile:ListUploadJobs. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.ListWorkflows">ListWorkflows</a></code> | <code>string</code> | [List] profile:ListWorkflows. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.MergeProfiles">MergeProfiles</a></code> | <code>string</code> | [Write] profile:MergeProfiles. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.PutDomainObjectType">PutDomainObjectType</a></code> | <code>string</code> | [Write] profile:PutDomainObjectType. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.PutIntegration">PutIntegration</a></code> | <code>string</code> | [Write] profile:PutIntegration. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.PutProfileObject">PutProfileObject</a></code> | <code>string</code> | [Write] profile:PutProfileObject. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.PutProfileObjectType">PutProfileObjectType</a></code> | <code>string</code> | [Write] profile:PutProfileObjectType. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.PutSegmentSubscription">PutSegmentSubscription</a></code> | <code>string</code> | [Write] profile:PutSegmentSubscription. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.SearchProfiles">SearchProfiles</a></code> | <code>string</code> | [Read] profile:SearchProfiles. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.StartRecommender">StartRecommender</a></code> | <code>string</code> | [Write] profile:StartRecommender. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.StartUploadJob">StartUploadJob</a></code> | <code>string</code> | [Write] profile:StartUploadJob. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.StopRecommender">StopRecommender</a></code> | <code>string</code> | [Write] profile:StopRecommender. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.StopUploadJob">StopUploadJob</a></code> | <code>string</code> | [Write] profile:StopUploadJob. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] profile:TagResource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] profile:UntagResource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.UpdateCalculatedAttributeDefinition">UpdateCalculatedAttributeDefinition</a></code> | <code>string</code> | [Write] profile:UpdateCalculatedAttributeDefinition. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.UpdateDomain">UpdateDomain</a></code> | <code>string</code> | [Write] profile:UpdateDomain. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.UpdateDomainLayout">UpdateDomainLayout</a></code> | <code>string</code> | [Write] profile:UpdateDomainLayout. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.UpdateEventTrigger">UpdateEventTrigger</a></code> | <code>string</code> | [Write] profile:UpdateEventTrigger. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.UpdateProfile">UpdateProfile</a></code> | <code>string</code> | [Write] profile:UpdateProfile. |
| <code><a href="#@cdk_utils/iam.profile.ProfileActions.property.UpdateRecommender">UpdateRecommender</a></code> | <code>string</code> | [Write] profile:UpdateRecommender. |

---

##### `actionGetAutoMergingPreview`<sup>Required</sup> <a name="actionGetAutoMergingPreview" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetAutoMergingPreview"></a>

```typescript
public readonly actionGetAutoMergingPreview: string;
```

- *Type:* string

[Read] profile:GetAutoMergingPreview.

---

##### `actionGetCalculatedAttributeDefinition`<sup>Required</sup> <a name="actionGetCalculatedAttributeDefinition" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetCalculatedAttributeDefinition"></a>

```typescript
public readonly actionGetCalculatedAttributeDefinition: string;
```

- *Type:* string

[Read] profile:GetCalculatedAttributeDefinition.

---

##### `actionGetCalculatedAttributeForProfile`<sup>Required</sup> <a name="actionGetCalculatedAttributeForProfile" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetCalculatedAttributeForProfile"></a>

```typescript
public readonly actionGetCalculatedAttributeForProfile: string;
```

- *Type:* string

[Read] profile:GetCalculatedAttributeForProfile.

---

##### `actionGetDomain`<sup>Required</sup> <a name="actionGetDomain" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetDomain"></a>

```typescript
public readonly actionGetDomain: string;
```

- *Type:* string

[Read] profile:GetDomain.

---

##### `actionGetDomainLayout`<sup>Required</sup> <a name="actionGetDomainLayout" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetDomainLayout"></a>

```typescript
public readonly actionGetDomainLayout: string;
```

- *Type:* string

[Read] profile:GetDomainLayout.

---

##### `actionGetDomainObjectType`<sup>Required</sup> <a name="actionGetDomainObjectType" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetDomainObjectType"></a>

```typescript
public readonly actionGetDomainObjectType: string;
```

- *Type:* string

[Read] profile:GetDomainObjectType.

---

##### `actionGetEventStream`<sup>Required</sup> <a name="actionGetEventStream" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetEventStream"></a>

```typescript
public readonly actionGetEventStream: string;
```

- *Type:* string

[Read] profile:GetEventStream.

---

##### `actionGetEventTrigger`<sup>Required</sup> <a name="actionGetEventTrigger" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetEventTrigger"></a>

```typescript
public readonly actionGetEventTrigger: string;
```

- *Type:* string

[Read] profile:GetEventTrigger.

---

##### `actionGetIdentityResolutionJob`<sup>Required</sup> <a name="actionGetIdentityResolutionJob" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetIdentityResolutionJob"></a>

```typescript
public readonly actionGetIdentityResolutionJob: string;
```

- *Type:* string

[Read] profile:GetIdentityResolutionJob.

---

##### `actionGetIntegration`<sup>Required</sup> <a name="actionGetIntegration" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetIntegration"></a>

```typescript
public readonly actionGetIntegration: string;
```

- *Type:* string

[Read] profile:GetIntegration.

---

##### `actionGetMatches`<sup>Required</sup> <a name="actionGetMatches" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetMatches"></a>

```typescript
public readonly actionGetMatches: string;
```

- *Type:* string

[List] profile:GetMatches.

---

##### `actionGetObjectTypeAttributeStatistics`<sup>Required</sup> <a name="actionGetObjectTypeAttributeStatistics" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetObjectTypeAttributeStatistics"></a>

```typescript
public readonly actionGetObjectTypeAttributeStatistics: string;
```

- *Type:* string

[Read] profile:GetObjectTypeAttributeStatistics.

---

##### `actionGetProfileHistoryRecord`<sup>Required</sup> <a name="actionGetProfileHistoryRecord" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetProfileHistoryRecord"></a>

```typescript
public readonly actionGetProfileHistoryRecord: string;
```

- *Type:* string

[Read] profile:GetProfileHistoryRecord.

---

##### `actionGetProfileInsights`<sup>Required</sup> <a name="actionGetProfileInsights" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetProfileInsights"></a>

```typescript
public readonly actionGetProfileInsights: string;
```

- *Type:* string

[Read] profile:GetProfileInsights.

---

##### `actionGetProfileObjectType`<sup>Required</sup> <a name="actionGetProfileObjectType" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetProfileObjectType"></a>

```typescript
public readonly actionGetProfileObjectType: string;
```

- *Type:* string

[Read] profile:GetProfileObjectType.

---

##### `actionGetProfileObjectTypeTemplate`<sup>Required</sup> <a name="actionGetProfileObjectTypeTemplate" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetProfileObjectTypeTemplate"></a>

```typescript
public readonly actionGetProfileObjectTypeTemplate: string;
```

- *Type:* string

[Read] profile:GetProfileObjectTypeTemplate.

---

##### `actionGetProfileRecommendations`<sup>Required</sup> <a name="actionGetProfileRecommendations" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetProfileRecommendations"></a>

```typescript
public readonly actionGetProfileRecommendations: string;
```

- *Type:* string

[Read] profile:GetProfileRecommendations.

---

##### `actionGetRecommender`<sup>Required</sup> <a name="actionGetRecommender" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetRecommender"></a>

```typescript
public readonly actionGetRecommender: string;
```

- *Type:* string

[Read] profile:GetRecommender.

---

##### `actionGetRecommenderFilter`<sup>Required</sup> <a name="actionGetRecommenderFilter" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetRecommenderFilter"></a>

```typescript
public readonly actionGetRecommenderFilter: string;
```

- *Type:* string

[Read] profile:GetRecommenderFilter.

---

##### `actionGetRecommenderSchema`<sup>Required</sup> <a name="actionGetRecommenderSchema" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetRecommenderSchema"></a>

```typescript
public readonly actionGetRecommenderSchema: string;
```

- *Type:* string

[Read] profile:GetRecommenderSchema.

---

##### `actionGetSegmentDefinition`<sup>Required</sup> <a name="actionGetSegmentDefinition" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetSegmentDefinition"></a>

```typescript
public readonly actionGetSegmentDefinition: string;
```

- *Type:* string

[Read] profile:GetSegmentDefinition.

---

##### `actionGetSegmentEstimate`<sup>Required</sup> <a name="actionGetSegmentEstimate" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetSegmentEstimate"></a>

```typescript
public readonly actionGetSegmentEstimate: string;
```

- *Type:* string

[Read] profile:GetSegmentEstimate.

---

##### `actionGetSegmentMembership`<sup>Required</sup> <a name="actionGetSegmentMembership" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetSegmentMembership"></a>

```typescript
public readonly actionGetSegmentMembership: string;
```

- *Type:* string

[Read] profile:GetSegmentMembership.

---

##### `actionGetSegmentSnapshot`<sup>Required</sup> <a name="actionGetSegmentSnapshot" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetSegmentSnapshot"></a>

```typescript
public readonly actionGetSegmentSnapshot: string;
```

- *Type:* string

[Read] profile:GetSegmentSnapshot.

---

##### `actionGetSegmentSubscription`<sup>Required</sup> <a name="actionGetSegmentSubscription" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetSegmentSubscription"></a>

```typescript
public readonly actionGetSegmentSubscription: string;
```

- *Type:* string

[Read] profile:GetSegmentSubscription.

---

##### `actionGetSimilarProfiles`<sup>Required</sup> <a name="actionGetSimilarProfiles" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetSimilarProfiles"></a>

```typescript
public readonly actionGetSimilarProfiles: string;
```

- *Type:* string

[List] profile:GetSimilarProfiles.

---

##### `actionGetSnapshot`<sup>Required</sup> <a name="actionGetSnapshot" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetSnapshot"></a>

```typescript
public readonly actionGetSnapshot: string;
```

- *Type:* string

[Read] profile:GetSnapshot.

---

##### `actionGetStreamForSegments`<sup>Required</sup> <a name="actionGetStreamForSegments" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetStreamForSegments"></a>

```typescript
public readonly actionGetStreamForSegments: string;
```

- *Type:* string

[Read] profile:GetStreamForSegments.

---

##### `actionGetUploadJob`<sup>Required</sup> <a name="actionGetUploadJob" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetUploadJob"></a>

```typescript
public readonly actionGetUploadJob: string;
```

- *Type:* string

[Read] profile:GetUploadJob.

---

##### `actionGetUploadJobPath`<sup>Required</sup> <a name="actionGetUploadJobPath" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetUploadJobPath"></a>

```typescript
public readonly actionGetUploadJobPath: string;
```

- *Type:* string

[Read] profile:GetUploadJobPath.

---

##### `actionGetWorkflow`<sup>Required</sup> <a name="actionGetWorkflow" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetWorkflow"></a>

```typescript
public readonly actionGetWorkflow: string;
```

- *Type:* string

[Read] profile:GetWorkflow.

---

##### `actionGetWorkflowSteps`<sup>Required</sup> <a name="actionGetWorkflowSteps" id="@cdk_utils/iam.profile.ProfileActions.property.actionGetWorkflowSteps"></a>

```typescript
public readonly actionGetWorkflowSteps: string;
```

- *Type:* string

[Read] profile:GetWorkflowSteps.

---

##### `AddProfileKey`<sup>Required</sup> <a name="AddProfileKey" id="@cdk_utils/iam.profile.ProfileActions.property.AddProfileKey"></a>

```typescript
public readonly AddProfileKey: string;
```

- *Type:* string

[Write] profile:AddProfileKey.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.profile.ProfileActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.profile.ProfileActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.profile.ProfileActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.profile.ProfileActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.profile.ProfileActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateStreamForSegments`<sup>Required</sup> <a name="AssociateStreamForSegments" id="@cdk_utils/iam.profile.ProfileActions.property.AssociateStreamForSegments"></a>

```typescript
public readonly AssociateStreamForSegments: string;
```

- *Type:* string

[Write] profile:AssociateStreamForSegments.

---

##### `BatchGetCalculatedAttributeForProfile`<sup>Required</sup> <a name="BatchGetCalculatedAttributeForProfile" id="@cdk_utils/iam.profile.ProfileActions.property.BatchGetCalculatedAttributeForProfile"></a>

```typescript
public readonly BatchGetCalculatedAttributeForProfile: string;
```

- *Type:* string

[Read] profile:BatchGetCalculatedAttributeForProfile.

---

##### `BatchGetProfile`<sup>Required</sup> <a name="BatchGetProfile" id="@cdk_utils/iam.profile.ProfileActions.property.BatchGetProfile"></a>

```typescript
public readonly BatchGetProfile: string;
```

- *Type:* string

[Read] profile:BatchGetProfile.

---

##### `CreateCalculatedAttributeDefinition`<sup>Required</sup> <a name="CreateCalculatedAttributeDefinition" id="@cdk_utils/iam.profile.ProfileActions.property.CreateCalculatedAttributeDefinition"></a>

```typescript
public readonly CreateCalculatedAttributeDefinition: string;
```

- *Type:* string

[Write] profile:CreateCalculatedAttributeDefinition.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.profile.ProfileActions.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string;
```

- *Type:* string

[Write] profile:CreateDomain.

---

##### `CreateDomainLayout`<sup>Required</sup> <a name="CreateDomainLayout" id="@cdk_utils/iam.profile.ProfileActions.property.CreateDomainLayout"></a>

```typescript
public readonly CreateDomainLayout: string;
```

- *Type:* string

[Write] profile:CreateDomainLayout.

---

##### `CreateEventStream`<sup>Required</sup> <a name="CreateEventStream" id="@cdk_utils/iam.profile.ProfileActions.property.CreateEventStream"></a>

```typescript
public readonly CreateEventStream: string;
```

- *Type:* string

[Write] profile:CreateEventStream.

---

##### `CreateEventTrigger`<sup>Required</sup> <a name="CreateEventTrigger" id="@cdk_utils/iam.profile.ProfileActions.property.CreateEventTrigger"></a>

```typescript
public readonly CreateEventTrigger: string;
```

- *Type:* string

[Write] profile:CreateEventTrigger.

---

##### `CreateIntegrationWorkflow`<sup>Required</sup> <a name="CreateIntegrationWorkflow" id="@cdk_utils/iam.profile.ProfileActions.property.CreateIntegrationWorkflow"></a>

```typescript
public readonly CreateIntegrationWorkflow: string;
```

- *Type:* string

[Write] profile:CreateIntegrationWorkflow.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.profile.ProfileActions.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string;
```

- *Type:* string

[Write] profile:CreateProfile.

---

##### `CreateRecommender`<sup>Required</sup> <a name="CreateRecommender" id="@cdk_utils/iam.profile.ProfileActions.property.CreateRecommender"></a>

```typescript
public readonly CreateRecommender: string;
```

- *Type:* string

[Write] profile:CreateRecommender.

---

##### `CreateRecommenderFilter`<sup>Required</sup> <a name="CreateRecommenderFilter" id="@cdk_utils/iam.profile.ProfileActions.property.CreateRecommenderFilter"></a>

```typescript
public readonly CreateRecommenderFilter: string;
```

- *Type:* string

[Write] profile:CreateRecommenderFilter.

---

##### `CreateRecommenderSchema`<sup>Required</sup> <a name="CreateRecommenderSchema" id="@cdk_utils/iam.profile.ProfileActions.property.CreateRecommenderSchema"></a>

```typescript
public readonly CreateRecommenderSchema: string;
```

- *Type:* string

[Write] profile:CreateRecommenderSchema.

---

##### `CreateSegmentDefinition`<sup>Required</sup> <a name="CreateSegmentDefinition" id="@cdk_utils/iam.profile.ProfileActions.property.CreateSegmentDefinition"></a>

```typescript
public readonly CreateSegmentDefinition: string;
```

- *Type:* string

[Write] profile:CreateSegmentDefinition.

---

##### `CreateSegmentEstimate`<sup>Required</sup> <a name="CreateSegmentEstimate" id="@cdk_utils/iam.profile.ProfileActions.property.CreateSegmentEstimate"></a>

```typescript
public readonly CreateSegmentEstimate: string;
```

- *Type:* string

[Write] profile:CreateSegmentEstimate.

---

##### `CreateSegmentSnapshot`<sup>Required</sup> <a name="CreateSegmentSnapshot" id="@cdk_utils/iam.profile.ProfileActions.property.CreateSegmentSnapshot"></a>

```typescript
public readonly CreateSegmentSnapshot: string;
```

- *Type:* string

[Write] profile:CreateSegmentSnapshot.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.profile.ProfileActions.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string;
```

- *Type:* string

[Write] profile:CreateSnapshot.

---

##### `CreateUploadJob`<sup>Required</sup> <a name="CreateUploadJob" id="@cdk_utils/iam.profile.ProfileActions.property.CreateUploadJob"></a>

```typescript
public readonly CreateUploadJob: string;
```

- *Type:* string

[Write] profile:CreateUploadJob.

---

##### `DeleteCalculatedAttributeDefinition`<sup>Required</sup> <a name="DeleteCalculatedAttributeDefinition" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteCalculatedAttributeDefinition"></a>

```typescript
public readonly DeleteCalculatedAttributeDefinition: string;
```

- *Type:* string

[Write] profile:DeleteCalculatedAttributeDefinition.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] profile:DeleteDomain.

---

##### `DeleteDomainLayout`<sup>Required</sup> <a name="DeleteDomainLayout" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteDomainLayout"></a>

```typescript
public readonly DeleteDomainLayout: string;
```

- *Type:* string

[Write] profile:DeleteDomainLayout.

---

##### `DeleteDomainObjectType`<sup>Required</sup> <a name="DeleteDomainObjectType" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteDomainObjectType"></a>

```typescript
public readonly DeleteDomainObjectType: string;
```

- *Type:* string

[Write] profile:DeleteDomainObjectType.

---

##### `DeleteEventStream`<sup>Required</sup> <a name="DeleteEventStream" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteEventStream"></a>

```typescript
public readonly DeleteEventStream: string;
```

- *Type:* string

[Write] profile:DeleteEventStream.

---

##### `DeleteEventTrigger`<sup>Required</sup> <a name="DeleteEventTrigger" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteEventTrigger"></a>

```typescript
public readonly DeleteEventTrigger: string;
```

- *Type:* string

[Write] profile:DeleteEventTrigger.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string;
```

- *Type:* string

[Write] profile:DeleteIntegration.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string;
```

- *Type:* string

[Write] profile:DeleteProfile.

---

##### `DeleteProfileKey`<sup>Required</sup> <a name="DeleteProfileKey" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteProfileKey"></a>

```typescript
public readonly DeleteProfileKey: string;
```

- *Type:* string

[Write] profile:DeleteProfileKey.

---

##### `DeleteProfileObject`<sup>Required</sup> <a name="DeleteProfileObject" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteProfileObject"></a>

```typescript
public readonly DeleteProfileObject: string;
```

- *Type:* string

[Write] profile:DeleteProfileObject.

---

##### `DeleteProfileObjectType`<sup>Required</sup> <a name="DeleteProfileObjectType" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteProfileObjectType"></a>

```typescript
public readonly DeleteProfileObjectType: string;
```

- *Type:* string

[Write] profile:DeleteProfileObjectType.

---

##### `DeleteRecommender`<sup>Required</sup> <a name="DeleteRecommender" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteRecommender"></a>

```typescript
public readonly DeleteRecommender: string;
```

- *Type:* string

[Write] profile:DeleteRecommender.

---

##### `DeleteRecommenderFilter`<sup>Required</sup> <a name="DeleteRecommenderFilter" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteRecommenderFilter"></a>

```typescript
public readonly DeleteRecommenderFilter: string;
```

- *Type:* string

[Write] profile:DeleteRecommenderFilter.

---

##### `DeleteRecommenderSchema`<sup>Required</sup> <a name="DeleteRecommenderSchema" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteRecommenderSchema"></a>

```typescript
public readonly DeleteRecommenderSchema: string;
```

- *Type:* string

[Write] profile:DeleteRecommenderSchema.

---

##### `DeleteSegmentDefinition`<sup>Required</sup> <a name="DeleteSegmentDefinition" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteSegmentDefinition"></a>

```typescript
public readonly DeleteSegmentDefinition: string;
```

- *Type:* string

[Write] profile:DeleteSegmentDefinition.

---

##### `DeleteSegmentSubscription`<sup>Required</sup> <a name="DeleteSegmentSubscription" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteSegmentSubscription"></a>

```typescript
public readonly DeleteSegmentSubscription: string;
```

- *Type:* string

[Write] profile:DeleteSegmentSubscription.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.profile.ProfileActions.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string;
```

- *Type:* string

[Write] profile:DeleteWorkflow.

---

##### `DetectProfileObjectType`<sup>Required</sup> <a name="DetectProfileObjectType" id="@cdk_utils/iam.profile.ProfileActions.property.DetectProfileObjectType"></a>

```typescript
public readonly DetectProfileObjectType: string;
```

- *Type:* string

[Read] profile:DetectProfileObjectType.

---

##### `DisassociateStreamForSegments`<sup>Required</sup> <a name="DisassociateStreamForSegments" id="@cdk_utils/iam.profile.ProfileActions.property.DisassociateStreamForSegments"></a>

```typescript
public readonly DisassociateStreamForSegments: string;
```

- *Type:* string

[Write] profile:DisassociateStreamForSegments.

---

##### `ListAccountIntegrations`<sup>Required</sup> <a name="ListAccountIntegrations" id="@cdk_utils/iam.profile.ProfileActions.property.ListAccountIntegrations"></a>

```typescript
public readonly ListAccountIntegrations: string;
```

- *Type:* string

[List] profile:ListAccountIntegrations.

---

##### `ListCalculatedAttributeDefinitions`<sup>Required</sup> <a name="ListCalculatedAttributeDefinitions" id="@cdk_utils/iam.profile.ProfileActions.property.ListCalculatedAttributeDefinitions"></a>

```typescript
public readonly ListCalculatedAttributeDefinitions: string;
```

- *Type:* string

[List] profile:ListCalculatedAttributeDefinitions.

---

##### `ListCalculatedAttributesForProfile`<sup>Required</sup> <a name="ListCalculatedAttributesForProfile" id="@cdk_utils/iam.profile.ProfileActions.property.ListCalculatedAttributesForProfile"></a>

```typescript
public readonly ListCalculatedAttributesForProfile: string;
```

- *Type:* string

[List] profile:ListCalculatedAttributesForProfile.

---

##### `ListDomainLayouts`<sup>Required</sup> <a name="ListDomainLayouts" id="@cdk_utils/iam.profile.ProfileActions.property.ListDomainLayouts"></a>

```typescript
public readonly ListDomainLayouts: string;
```

- *Type:* string

[List] profile:ListDomainLayouts.

---

##### `ListDomainObjects`<sup>Required</sup> <a name="ListDomainObjects" id="@cdk_utils/iam.profile.ProfileActions.property.ListDomainObjects"></a>

```typescript
public readonly ListDomainObjects: string;
```

- *Type:* string

[List] profile:ListDomainObjects.

---

##### `ListDomainObjectTypes`<sup>Required</sup> <a name="ListDomainObjectTypes" id="@cdk_utils/iam.profile.ProfileActions.property.ListDomainObjectTypes"></a>

```typescript
public readonly ListDomainObjectTypes: string;
```

- *Type:* string

[List] profile:ListDomainObjectTypes.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.profile.ProfileActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] profile:ListDomains.

---

##### `ListEventStreams`<sup>Required</sup> <a name="ListEventStreams" id="@cdk_utils/iam.profile.ProfileActions.property.ListEventStreams"></a>

```typescript
public readonly ListEventStreams: string;
```

- *Type:* string

[List] profile:ListEventStreams.

---

##### `ListEventTriggers`<sup>Required</sup> <a name="ListEventTriggers" id="@cdk_utils/iam.profile.ProfileActions.property.ListEventTriggers"></a>

```typescript
public readonly ListEventTriggers: string;
```

- *Type:* string

[List] profile:ListEventTriggers.

---

##### `ListIdentityResolutionJobs`<sup>Required</sup> <a name="ListIdentityResolutionJobs" id="@cdk_utils/iam.profile.ProfileActions.property.ListIdentityResolutionJobs"></a>

```typescript
public readonly ListIdentityResolutionJobs: string;
```

- *Type:* string

[List] profile:ListIdentityResolutionJobs.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.profile.ProfileActions.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string;
```

- *Type:* string

[List] profile:ListIntegrations.

---

##### `ListObjectTypeAttributes`<sup>Required</sup> <a name="ListObjectTypeAttributes" id="@cdk_utils/iam.profile.ProfileActions.property.ListObjectTypeAttributes"></a>

```typescript
public readonly ListObjectTypeAttributes: string;
```

- *Type:* string

[List] profile:ListObjectTypeAttributes.

---

##### `ListObjectTypeAttributeValues`<sup>Required</sup> <a name="ListObjectTypeAttributeValues" id="@cdk_utils/iam.profile.ProfileActions.property.ListObjectTypeAttributeValues"></a>

```typescript
public readonly ListObjectTypeAttributeValues: string;
```

- *Type:* string

[List] profile:ListObjectTypeAttributeValues.

---

##### `ListProfileAttributeValues`<sup>Required</sup> <a name="ListProfileAttributeValues" id="@cdk_utils/iam.profile.ProfileActions.property.ListProfileAttributeValues"></a>

```typescript
public readonly ListProfileAttributeValues: string;
```

- *Type:* string

[List] profile:ListProfileAttributeValues.

---

##### `ListProfileHistoryRecords`<sup>Required</sup> <a name="ListProfileHistoryRecords" id="@cdk_utils/iam.profile.ProfileActions.property.ListProfileHistoryRecords"></a>

```typescript
public readonly ListProfileHistoryRecords: string;
```

- *Type:* string

[List] profile:ListProfileHistoryRecords.

---

##### `ListProfileObjects`<sup>Required</sup> <a name="ListProfileObjects" id="@cdk_utils/iam.profile.ProfileActions.property.ListProfileObjects"></a>

```typescript
public readonly ListProfileObjects: string;
```

- *Type:* string

[List] profile:ListProfileObjects.

---

##### `ListProfileObjectTypes`<sup>Required</sup> <a name="ListProfileObjectTypes" id="@cdk_utils/iam.profile.ProfileActions.property.ListProfileObjectTypes"></a>

```typescript
public readonly ListProfileObjectTypes: string;
```

- *Type:* string

[List] profile:ListProfileObjectTypes.

---

##### `ListProfileObjectTypeTemplates`<sup>Required</sup> <a name="ListProfileObjectTypeTemplates" id="@cdk_utils/iam.profile.ProfileActions.property.ListProfileObjectTypeTemplates"></a>

```typescript
public readonly ListProfileObjectTypeTemplates: string;
```

- *Type:* string

[List] profile:ListProfileObjectTypeTemplates.

---

##### `ListRecommenderFilters`<sup>Required</sup> <a name="ListRecommenderFilters" id="@cdk_utils/iam.profile.ProfileActions.property.ListRecommenderFilters"></a>

```typescript
public readonly ListRecommenderFilters: string;
```

- *Type:* string

[List] profile:ListRecommenderFilters.

---

##### `ListRecommenderRecipes`<sup>Required</sup> <a name="ListRecommenderRecipes" id="@cdk_utils/iam.profile.ProfileActions.property.ListRecommenderRecipes"></a>

```typescript
public readonly ListRecommenderRecipes: string;
```

- *Type:* string

[List] profile:ListRecommenderRecipes.

---

##### `ListRecommenders`<sup>Required</sup> <a name="ListRecommenders" id="@cdk_utils/iam.profile.ProfileActions.property.ListRecommenders"></a>

```typescript
public readonly ListRecommenders: string;
```

- *Type:* string

[List] profile:ListRecommenders.

---

##### `ListRecommenderSchemas`<sup>Required</sup> <a name="ListRecommenderSchemas" id="@cdk_utils/iam.profile.ProfileActions.property.ListRecommenderSchemas"></a>

```typescript
public readonly ListRecommenderSchemas: string;
```

- *Type:* string

[List] profile:ListRecommenderSchemas.

---

##### `ListRuleBasedMatches`<sup>Required</sup> <a name="ListRuleBasedMatches" id="@cdk_utils/iam.profile.ProfileActions.property.ListRuleBasedMatches"></a>

```typescript
public readonly ListRuleBasedMatches: string;
```

- *Type:* string

[List] profile:ListRuleBasedMatches.

---

##### `ListSegmentDefinitions`<sup>Required</sup> <a name="ListSegmentDefinitions" id="@cdk_utils/iam.profile.ProfileActions.property.ListSegmentDefinitions"></a>

```typescript
public readonly ListSegmentDefinitions: string;
```

- *Type:* string

[List] profile:ListSegmentDefinitions.

---

##### `ListSegmentSubscriptionEvents`<sup>Required</sup> <a name="ListSegmentSubscriptionEvents" id="@cdk_utils/iam.profile.ProfileActions.property.ListSegmentSubscriptionEvents"></a>

```typescript
public readonly ListSegmentSubscriptionEvents: string;
```

- *Type:* string

[Read] profile:ListSegmentSubscriptionEvents.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.profile.ProfileActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] profile:ListTagsForResource.

---

##### `ListUploadJobs`<sup>Required</sup> <a name="ListUploadJobs" id="@cdk_utils/iam.profile.ProfileActions.property.ListUploadJobs"></a>

```typescript
public readonly ListUploadJobs: string;
```

- *Type:* string

[List] profile:ListUploadJobs.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.profile.ProfileActions.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string;
```

- *Type:* string

[List] profile:ListWorkflows.

---

##### `MergeProfiles`<sup>Required</sup> <a name="MergeProfiles" id="@cdk_utils/iam.profile.ProfileActions.property.MergeProfiles"></a>

```typescript
public readonly MergeProfiles: string;
```

- *Type:* string

[Write] profile:MergeProfiles.

---

##### `PutDomainObjectType`<sup>Required</sup> <a name="PutDomainObjectType" id="@cdk_utils/iam.profile.ProfileActions.property.PutDomainObjectType"></a>

```typescript
public readonly PutDomainObjectType: string;
```

- *Type:* string

[Write] profile:PutDomainObjectType.

---

##### `PutIntegration`<sup>Required</sup> <a name="PutIntegration" id="@cdk_utils/iam.profile.ProfileActions.property.PutIntegration"></a>

```typescript
public readonly PutIntegration: string;
```

- *Type:* string

[Write] profile:PutIntegration.

---

##### `PutProfileObject`<sup>Required</sup> <a name="PutProfileObject" id="@cdk_utils/iam.profile.ProfileActions.property.PutProfileObject"></a>

```typescript
public readonly PutProfileObject: string;
```

- *Type:* string

[Write] profile:PutProfileObject.

---

##### `PutProfileObjectType`<sup>Required</sup> <a name="PutProfileObjectType" id="@cdk_utils/iam.profile.ProfileActions.property.PutProfileObjectType"></a>

```typescript
public readonly PutProfileObjectType: string;
```

- *Type:* string

[Write] profile:PutProfileObjectType.

---

##### `PutSegmentSubscription`<sup>Required</sup> <a name="PutSegmentSubscription" id="@cdk_utils/iam.profile.ProfileActions.property.PutSegmentSubscription"></a>

```typescript
public readonly PutSegmentSubscription: string;
```

- *Type:* string

[Write] profile:PutSegmentSubscription.

---

##### `SearchProfiles`<sup>Required</sup> <a name="SearchProfiles" id="@cdk_utils/iam.profile.ProfileActions.property.SearchProfiles"></a>

```typescript
public readonly SearchProfiles: string;
```

- *Type:* string

[Read] profile:SearchProfiles.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.profile.ProfileActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartRecommender`<sup>Required</sup> <a name="StartRecommender" id="@cdk_utils/iam.profile.ProfileActions.property.StartRecommender"></a>

```typescript
public readonly StartRecommender: string;
```

- *Type:* string

[Write] profile:StartRecommender.

---

##### `StartUploadJob`<sup>Required</sup> <a name="StartUploadJob" id="@cdk_utils/iam.profile.ProfileActions.property.StartUploadJob"></a>

```typescript
public readonly StartUploadJob: string;
```

- *Type:* string

[Write] profile:StartUploadJob.

---

##### `StopRecommender`<sup>Required</sup> <a name="StopRecommender" id="@cdk_utils/iam.profile.ProfileActions.property.StopRecommender"></a>

```typescript
public readonly StopRecommender: string;
```

- *Type:* string

[Write] profile:StopRecommender.

---

##### `StopUploadJob`<sup>Required</sup> <a name="StopUploadJob" id="@cdk_utils/iam.profile.ProfileActions.property.StopUploadJob"></a>

```typescript
public readonly StopUploadJob: string;
```

- *Type:* string

[Write] profile:StopUploadJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.profile.ProfileActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] profile:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.profile.ProfileActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] profile:UntagResource.

---

##### `UpdateCalculatedAttributeDefinition`<sup>Required</sup> <a name="UpdateCalculatedAttributeDefinition" id="@cdk_utils/iam.profile.ProfileActions.property.UpdateCalculatedAttributeDefinition"></a>

```typescript
public readonly UpdateCalculatedAttributeDefinition: string;
```

- *Type:* string

[Write] profile:UpdateCalculatedAttributeDefinition.

---

##### `UpdateDomain`<sup>Required</sup> <a name="UpdateDomain" id="@cdk_utils/iam.profile.ProfileActions.property.UpdateDomain"></a>

```typescript
public readonly UpdateDomain: string;
```

- *Type:* string

[Write] profile:UpdateDomain.

---

##### `UpdateDomainLayout`<sup>Required</sup> <a name="UpdateDomainLayout" id="@cdk_utils/iam.profile.ProfileActions.property.UpdateDomainLayout"></a>

```typescript
public readonly UpdateDomainLayout: string;
```

- *Type:* string

[Write] profile:UpdateDomainLayout.

---

##### `UpdateEventTrigger`<sup>Required</sup> <a name="UpdateEventTrigger" id="@cdk_utils/iam.profile.ProfileActions.property.UpdateEventTrigger"></a>

```typescript
public readonly UpdateEventTrigger: string;
```

- *Type:* string

[Write] profile:UpdateEventTrigger.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.profile.ProfileActions.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string;
```

- *Type:* string

[Write] profile:UpdateProfile.

---

##### `UpdateRecommender`<sup>Required</sup> <a name="UpdateRecommender" id="@cdk_utils/iam.profile.ProfileActions.property.UpdateRecommender"></a>

```typescript
public readonly UpdateRecommender: string;
```

- *Type:* string

[Write] profile:UpdateRecommender.

---

### ProfileConditions <a name="ProfileConditions" id="@cdk_utils/iam.profile.ProfileConditions"></a>

Condition key constants and builders for profile.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.profile.ProfileConditions.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

new profile.ProfileConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.profile.ProfileConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.profile.ProfileConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.profile.ProfileConditions.requestTag"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.profile.ProfileConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.profile.ProfileConditions.resourceTag"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.profile.ProfileConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.profile.ProfileConditions.tagKeys"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.profile.ProfileConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.profile.ProfileConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.profile.ProfileConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.profile.ProfileConditions.property.CreateRecommenderFilterConditionKeys">CreateRecommenderFilterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRecommenderFilter action. |
| <code><a href="#@cdk_utils/iam.profile.ProfileConditions.property.CreateRecommenderSchemaConditionKeys">CreateRecommenderSchemaConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRecommenderSchema action. |
| <code><a href="#@cdk_utils/iam.profile.ProfileConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.profile.ProfileConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.profile.ProfileConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.profile.ProfileConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.profile.ProfileConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateRecommenderFilterConditionKeys`<sup>Required</sup> <a name="CreateRecommenderFilterConditionKeys" id="@cdk_utils/iam.profile.ProfileConditions.property.CreateRecommenderFilterConditionKeys"></a>

```typescript
public readonly CreateRecommenderFilterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRecommenderFilter action.

---

##### `CreateRecommenderSchemaConditionKeys`<sup>Required</sup> <a name="CreateRecommenderSchemaConditionKeys" id="@cdk_utils/iam.profile.ProfileConditions.property.CreateRecommenderSchemaConditionKeys"></a>

```typescript
public readonly CreateRecommenderSchemaConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRecommenderSchema action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.profile.ProfileConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.profile.ProfileConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ProfileOperations <a name="ProfileOperations" id="@cdk_utils/iam.profile.ProfileOperations"></a>

API operation to required IAM actions mapping for profile.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.profile.ProfileOperations.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

new profile.ProfileOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.AddProfileKey">AddProfileKey</a></code> | <code>string[]</code> | IAM actions required for the AddProfileKey API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.BatchGetCalculatedAttributeForProfile">BatchGetCalculatedAttributeForProfile</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCalculatedAttributeForProfile API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.BatchGetProfile">BatchGetProfile</a></code> | <code>string[]</code> | IAM actions required for the BatchGetProfile API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.BatchPutProfileObject">BatchPutProfileObject</a></code> | <code>string[]</code> | IAM actions required for the BatchPutProfileObject API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateCalculatedAttributeDefinition">CreateCalculatedAttributeDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateCalculatedAttributeDefinition API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateDomain">CreateDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateDomain API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateDomainLayout">CreateDomainLayout</a></code> | <code>string[]</code> | IAM actions required for the CreateDomainLayout API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateEventStream">CreateEventStream</a></code> | <code>string[]</code> | IAM actions required for the CreateEventStream API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateEventTrigger">CreateEventTrigger</a></code> | <code>string[]</code> | IAM actions required for the CreateEventTrigger API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateIntegrationWorkflow">CreateIntegrationWorkflow</a></code> | <code>string[]</code> | IAM actions required for the CreateIntegrationWorkflow API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateProfile">CreateProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateProfile API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateRecommender">CreateRecommender</a></code> | <code>string[]</code> | IAM actions required for the CreateRecommender API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateRecommenderFilter">CreateRecommenderFilter</a></code> | <code>string[]</code> | IAM actions required for the CreateRecommenderFilter API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateRecommenderSchema">CreateRecommenderSchema</a></code> | <code>string[]</code> | IAM actions required for the CreateRecommenderSchema API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateSegmentDefinition">CreateSegmentDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateSegmentDefinition API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateSegmentEstimate">CreateSegmentEstimate</a></code> | <code>string[]</code> | IAM actions required for the CreateSegmentEstimate API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateSegmentSnapshot">CreateSegmentSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateSegmentSnapshot API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.CreateUploadJob">CreateUploadJob</a></code> | <code>string[]</code> | IAM actions required for the CreateUploadJob API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteCalculatedAttributeDefinition">DeleteCalculatedAttributeDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteCalculatedAttributeDefinition API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteDomain">DeleteDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomain API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteDomainLayout">DeleteDomainLayout</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomainLayout API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteDomainObjectType">DeleteDomainObjectType</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomainObjectType API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteEventStream">DeleteEventStream</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventStream API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteEventTrigger">DeleteEventTrigger</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventTrigger API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegration API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteProfile">DeleteProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteProfile API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteProfileKey">DeleteProfileKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteProfileKey API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteProfileObject">DeleteProfileObject</a></code> | <code>string[]</code> | IAM actions required for the DeleteProfileObject API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteProfileObjectType">DeleteProfileObjectType</a></code> | <code>string[]</code> | IAM actions required for the DeleteProfileObjectType API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteRecommender">DeleteRecommender</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecommender API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteRecommenderFilter">DeleteRecommenderFilter</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecommenderFilter API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteRecommenderSchema">DeleteRecommenderSchema</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecommenderSchema API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteSegmentDefinition">DeleteSegmentDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteSegmentDefinition API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflow API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.DetectProfileObjectType">DetectProfileObjectType</a></code> | <code>string[]</code> | IAM actions required for the DetectProfileObjectType API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListAccountIntegrations">ListAccountIntegrations</a></code> | <code>string[]</code> | IAM actions required for the ListAccountIntegrations API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListCalculatedAttributeDefinitions">ListCalculatedAttributeDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListCalculatedAttributeDefinitions API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListCalculatedAttributesForProfile">ListCalculatedAttributesForProfile</a></code> | <code>string[]</code> | IAM actions required for the ListCalculatedAttributesForProfile API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListDomainLayouts">ListDomainLayouts</a></code> | <code>string[]</code> | IAM actions required for the ListDomainLayouts API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListDomainObjectTypes">ListDomainObjectTypes</a></code> | <code>string[]</code> | IAM actions required for the ListDomainObjectTypes API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListDomains">ListDomains</a></code> | <code>string[]</code> | IAM actions required for the ListDomains API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListEventStreams">ListEventStreams</a></code> | <code>string[]</code> | IAM actions required for the ListEventStreams API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListEventTriggers">ListEventTriggers</a></code> | <code>string[]</code> | IAM actions required for the ListEventTriggers API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListIdentityResolutionJobs">ListIdentityResolutionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListIdentityResolutionJobs API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListIntegrations">ListIntegrations</a></code> | <code>string[]</code> | IAM actions required for the ListIntegrations API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListObjectTypeAttributes">ListObjectTypeAttributes</a></code> | <code>string[]</code> | IAM actions required for the ListObjectTypeAttributes API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListObjectTypeAttributeValues">ListObjectTypeAttributeValues</a></code> | <code>string[]</code> | IAM actions required for the ListObjectTypeAttributeValues API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListProfileAttributeValues">ListProfileAttributeValues</a></code> | <code>string[]</code> | IAM actions required for the ListProfileAttributeValues API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListProfileHistoryRecords">ListProfileHistoryRecords</a></code> | <code>string[]</code> | IAM actions required for the ListProfileHistoryRecords API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListProfileObjects">ListProfileObjects</a></code> | <code>string[]</code> | IAM actions required for the ListProfileObjects API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListProfileObjectTypes">ListProfileObjectTypes</a></code> | <code>string[]</code> | IAM actions required for the ListProfileObjectTypes API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListProfileObjectTypeTemplates">ListProfileObjectTypeTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListProfileObjectTypeTemplates API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListRecommenderFilters">ListRecommenderFilters</a></code> | <code>string[]</code> | IAM actions required for the ListRecommenderFilters API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListRecommenderRecipes">ListRecommenderRecipes</a></code> | <code>string[]</code> | IAM actions required for the ListRecommenderRecipes API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListRecommenders">ListRecommenders</a></code> | <code>string[]</code> | IAM actions required for the ListRecommenders API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListRecommenderSchemas">ListRecommenderSchemas</a></code> | <code>string[]</code> | IAM actions required for the ListRecommenderSchemas API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListRuleBasedMatches">ListRuleBasedMatches</a></code> | <code>string[]</code> | IAM actions required for the ListRuleBasedMatches API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListSegmentDefinitions">ListSegmentDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListSegmentDefinitions API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListUploadJobs">ListUploadJobs</a></code> | <code>string[]</code> | IAM actions required for the ListUploadJobs API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.ListWorkflows">ListWorkflows</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflows API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.MergeProfiles">MergeProfiles</a></code> | <code>string[]</code> | IAM actions required for the MergeProfiles API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetAutoMergingPreview">opGetAutoMergingPreview</a></code> | <code>string[]</code> | IAM actions required for the GetAutoMergingPreview API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetCalculatedAttributeDefinition">opGetCalculatedAttributeDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetCalculatedAttributeDefinition API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetCalculatedAttributeForProfile">opGetCalculatedAttributeForProfile</a></code> | <code>string[]</code> | IAM actions required for the GetCalculatedAttributeForProfile API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetDomain">opGetDomain</a></code> | <code>string[]</code> | IAM actions required for the GetDomain API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetDomainLayout">opGetDomainLayout</a></code> | <code>string[]</code> | IAM actions required for the GetDomainLayout API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetDomainObjectType">opGetDomainObjectType</a></code> | <code>string[]</code> | IAM actions required for the GetDomainObjectType API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetEventStream">opGetEventStream</a></code> | <code>string[]</code> | IAM actions required for the GetEventStream API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetEventTrigger">opGetEventTrigger</a></code> | <code>string[]</code> | IAM actions required for the GetEventTrigger API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetIdentityResolutionJob">opGetIdentityResolutionJob</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityResolutionJob API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetIntegration">opGetIntegration</a></code> | <code>string[]</code> | IAM actions required for the GetIntegration API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetMatches">opGetMatches</a></code> | <code>string[]</code> | IAM actions required for the GetMatches API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetObjectTypeAttributeStatistics">opGetObjectTypeAttributeStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetObjectTypeAttributeStatistics API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetProfileHistoryRecord">opGetProfileHistoryRecord</a></code> | <code>string[]</code> | IAM actions required for the GetProfileHistoryRecord API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetProfileObjectType">opGetProfileObjectType</a></code> | <code>string[]</code> | IAM actions required for the GetProfileObjectType API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetProfileObjectTypeTemplate">opGetProfileObjectTypeTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetProfileObjectTypeTemplate API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetProfileRecommendations">opGetProfileRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetProfileRecommendations API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetRecommender">opGetRecommender</a></code> | <code>string[]</code> | IAM actions required for the GetRecommender API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetRecommenderFilter">opGetRecommenderFilter</a></code> | <code>string[]</code> | IAM actions required for the GetRecommenderFilter API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetRecommenderSchema">opGetRecommenderSchema</a></code> | <code>string[]</code> | IAM actions required for the GetRecommenderSchema API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetSegmentDefinition">opGetSegmentDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetSegmentDefinition API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetSegmentEstimate">opGetSegmentEstimate</a></code> | <code>string[]</code> | IAM actions required for the GetSegmentEstimate API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetSegmentMembership">opGetSegmentMembership</a></code> | <code>string[]</code> | IAM actions required for the GetSegmentMembership API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetSegmentSnapshot">opGetSegmentSnapshot</a></code> | <code>string[]</code> | IAM actions required for the GetSegmentSnapshot API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetSimilarProfiles">opGetSimilarProfiles</a></code> | <code>string[]</code> | IAM actions required for the GetSimilarProfiles API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetUploadJob">opGetUploadJob</a></code> | <code>string[]</code> | IAM actions required for the GetUploadJob API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetUploadJobPath">opGetUploadJobPath</a></code> | <code>string[]</code> | IAM actions required for the GetUploadJobPath API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetWorkflow">opGetWorkflow</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflow API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.opGetWorkflowSteps">opGetWorkflowSteps</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowSteps API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.PutDomainObjectType">PutDomainObjectType</a></code> | <code>string[]</code> | IAM actions required for the PutDomainObjectType API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.PutIntegration">PutIntegration</a></code> | <code>string[]</code> | IAM actions required for the PutIntegration API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.PutProfileObject">PutProfileObject</a></code> | <code>string[]</code> | IAM actions required for the PutProfileObject API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.PutProfileObjectType">PutProfileObjectType</a></code> | <code>string[]</code> | IAM actions required for the PutProfileObjectType API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.SearchProfiles">SearchProfiles</a></code> | <code>string[]</code> | IAM actions required for the SearchProfiles API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.StartRecommender">StartRecommender</a></code> | <code>string[]</code> | IAM actions required for the StartRecommender API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.StartUploadJob">StartUploadJob</a></code> | <code>string[]</code> | IAM actions required for the StartUploadJob API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.StopRecommender">StopRecommender</a></code> | <code>string[]</code> | IAM actions required for the StopRecommender API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.StopUploadJob">StopUploadJob</a></code> | <code>string[]</code> | IAM actions required for the StopUploadJob API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.UpdateCalculatedAttributeDefinition">UpdateCalculatedAttributeDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateCalculatedAttributeDefinition API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.UpdateDomain">UpdateDomain</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomain API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.UpdateDomainLayout">UpdateDomainLayout</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainLayout API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.UpdateEventTrigger">UpdateEventTrigger</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventTrigger API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.UpdateProfile">UpdateProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateProfile API call. |
| <code><a href="#@cdk_utils/iam.profile.ProfileOperations.property.UpdateRecommender">UpdateRecommender</a></code> | <code>string[]</code> | IAM actions required for the UpdateRecommender API call. |

---

##### `AddProfileKey`<sup>Required</sup> <a name="AddProfileKey" id="@cdk_utils/iam.profile.ProfileOperations.property.AddProfileKey"></a>

```typescript
public readonly AddProfileKey: string[];
```

- *Type:* string[]

IAM actions required for the AddProfileKey API call.

---

##### `BatchGetCalculatedAttributeForProfile`<sup>Required</sup> <a name="BatchGetCalculatedAttributeForProfile" id="@cdk_utils/iam.profile.ProfileOperations.property.BatchGetCalculatedAttributeForProfile"></a>

```typescript
public readonly BatchGetCalculatedAttributeForProfile: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCalculatedAttributeForProfile API call.

---

##### `BatchGetProfile`<sup>Required</sup> <a name="BatchGetProfile" id="@cdk_utils/iam.profile.ProfileOperations.property.BatchGetProfile"></a>

```typescript
public readonly BatchGetProfile: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetProfile API call.

---

##### `BatchPutProfileObject`<sup>Required</sup> <a name="BatchPutProfileObject" id="@cdk_utils/iam.profile.ProfileOperations.property.BatchPutProfileObject"></a>

```typescript
public readonly BatchPutProfileObject: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutProfileObject API call.

---

##### `CreateCalculatedAttributeDefinition`<sup>Required</sup> <a name="CreateCalculatedAttributeDefinition" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateCalculatedAttributeDefinition"></a>

```typescript
public readonly CreateCalculatedAttributeDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateCalculatedAttributeDefinition API call.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomain API call.

---

##### `CreateDomainLayout`<sup>Required</sup> <a name="CreateDomainLayout" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateDomainLayout"></a>

```typescript
public readonly CreateDomainLayout: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomainLayout API call.

---

##### `CreateEventStream`<sup>Required</sup> <a name="CreateEventStream" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateEventStream"></a>

```typescript
public readonly CreateEventStream: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventStream API call.

---

##### `CreateEventTrigger`<sup>Required</sup> <a name="CreateEventTrigger" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateEventTrigger"></a>

```typescript
public readonly CreateEventTrigger: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventTrigger API call.

---

##### `CreateIntegrationWorkflow`<sup>Required</sup> <a name="CreateIntegrationWorkflow" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateIntegrationWorkflow"></a>

```typescript
public readonly CreateIntegrationWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntegrationWorkflow API call.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateProfile API call.

---

##### `CreateRecommender`<sup>Required</sup> <a name="CreateRecommender" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateRecommender"></a>

```typescript
public readonly CreateRecommender: string[];
```

- *Type:* string[]

IAM actions required for the CreateRecommender API call.

---

##### `CreateRecommenderFilter`<sup>Required</sup> <a name="CreateRecommenderFilter" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateRecommenderFilter"></a>

```typescript
public readonly CreateRecommenderFilter: string[];
```

- *Type:* string[]

IAM actions required for the CreateRecommenderFilter API call.

---

##### `CreateRecommenderSchema`<sup>Required</sup> <a name="CreateRecommenderSchema" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateRecommenderSchema"></a>

```typescript
public readonly CreateRecommenderSchema: string[];
```

- *Type:* string[]

IAM actions required for the CreateRecommenderSchema API call.

---

##### `CreateSegmentDefinition`<sup>Required</sup> <a name="CreateSegmentDefinition" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateSegmentDefinition"></a>

```typescript
public readonly CreateSegmentDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateSegmentDefinition API call.

---

##### `CreateSegmentEstimate`<sup>Required</sup> <a name="CreateSegmentEstimate" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateSegmentEstimate"></a>

```typescript
public readonly CreateSegmentEstimate: string[];
```

- *Type:* string[]

IAM actions required for the CreateSegmentEstimate API call.

---

##### `CreateSegmentSnapshot`<sup>Required</sup> <a name="CreateSegmentSnapshot" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateSegmentSnapshot"></a>

```typescript
public readonly CreateSegmentSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateSegmentSnapshot API call.

---

##### `CreateUploadJob`<sup>Required</sup> <a name="CreateUploadJob" id="@cdk_utils/iam.profile.ProfileOperations.property.CreateUploadJob"></a>

```typescript
public readonly CreateUploadJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateUploadJob API call.

---

##### `DeleteCalculatedAttributeDefinition`<sup>Required</sup> <a name="DeleteCalculatedAttributeDefinition" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteCalculatedAttributeDefinition"></a>

```typescript
public readonly DeleteCalculatedAttributeDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCalculatedAttributeDefinition API call.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomain API call.

---

##### `DeleteDomainLayout`<sup>Required</sup> <a name="DeleteDomainLayout" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteDomainLayout"></a>

```typescript
public readonly DeleteDomainLayout: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomainLayout API call.

---

##### `DeleteDomainObjectType`<sup>Required</sup> <a name="DeleteDomainObjectType" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteDomainObjectType"></a>

```typescript
public readonly DeleteDomainObjectType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomainObjectType API call.

---

##### `DeleteEventStream`<sup>Required</sup> <a name="DeleteEventStream" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteEventStream"></a>

```typescript
public readonly DeleteEventStream: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventStream API call.

---

##### `DeleteEventTrigger`<sup>Required</sup> <a name="DeleteEventTrigger" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteEventTrigger"></a>

```typescript
public readonly DeleteEventTrigger: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventTrigger API call.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegration API call.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProfile API call.

---

##### `DeleteProfileKey`<sup>Required</sup> <a name="DeleteProfileKey" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteProfileKey"></a>

```typescript
public readonly DeleteProfileKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProfileKey API call.

---

##### `DeleteProfileObject`<sup>Required</sup> <a name="DeleteProfileObject" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteProfileObject"></a>

```typescript
public readonly DeleteProfileObject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProfileObject API call.

---

##### `DeleteProfileObjectType`<sup>Required</sup> <a name="DeleteProfileObjectType" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteProfileObjectType"></a>

```typescript
public readonly DeleteProfileObjectType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProfileObjectType API call.

---

##### `DeleteRecommender`<sup>Required</sup> <a name="DeleteRecommender" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteRecommender"></a>

```typescript
public readonly DeleteRecommender: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecommender API call.

---

##### `DeleteRecommenderFilter`<sup>Required</sup> <a name="DeleteRecommenderFilter" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteRecommenderFilter"></a>

```typescript
public readonly DeleteRecommenderFilter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecommenderFilter API call.

---

##### `DeleteRecommenderSchema`<sup>Required</sup> <a name="DeleteRecommenderSchema" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteRecommenderSchema"></a>

```typescript
public readonly DeleteRecommenderSchema: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecommenderSchema API call.

---

##### `DeleteSegmentDefinition`<sup>Required</sup> <a name="DeleteSegmentDefinition" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteSegmentDefinition"></a>

```typescript
public readonly DeleteSegmentDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSegmentDefinition API call.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.profile.ProfileOperations.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflow API call.

---

##### `DetectProfileObjectType`<sup>Required</sup> <a name="DetectProfileObjectType" id="@cdk_utils/iam.profile.ProfileOperations.property.DetectProfileObjectType"></a>

```typescript
public readonly DetectProfileObjectType: string[];
```

- *Type:* string[]

IAM actions required for the DetectProfileObjectType API call.

---

##### `ListAccountIntegrations`<sup>Required</sup> <a name="ListAccountIntegrations" id="@cdk_utils/iam.profile.ProfileOperations.property.ListAccountIntegrations"></a>

```typescript
public readonly ListAccountIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountIntegrations API call.

---

##### `ListCalculatedAttributeDefinitions`<sup>Required</sup> <a name="ListCalculatedAttributeDefinitions" id="@cdk_utils/iam.profile.ProfileOperations.property.ListCalculatedAttributeDefinitions"></a>

```typescript
public readonly ListCalculatedAttributeDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListCalculatedAttributeDefinitions API call.

---

##### `ListCalculatedAttributesForProfile`<sup>Required</sup> <a name="ListCalculatedAttributesForProfile" id="@cdk_utils/iam.profile.ProfileOperations.property.ListCalculatedAttributesForProfile"></a>

```typescript
public readonly ListCalculatedAttributesForProfile: string[];
```

- *Type:* string[]

IAM actions required for the ListCalculatedAttributesForProfile API call.

---

##### `ListDomainLayouts`<sup>Required</sup> <a name="ListDomainLayouts" id="@cdk_utils/iam.profile.ProfileOperations.property.ListDomainLayouts"></a>

```typescript
public readonly ListDomainLayouts: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainLayouts API call.

---

##### `ListDomainObjectTypes`<sup>Required</sup> <a name="ListDomainObjectTypes" id="@cdk_utils/iam.profile.ProfileOperations.property.ListDomainObjectTypes"></a>

```typescript
public readonly ListDomainObjectTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainObjectTypes API call.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.profile.ProfileOperations.property.ListDomains"></a>

```typescript
public readonly ListDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListDomains API call.

---

##### `ListEventStreams`<sup>Required</sup> <a name="ListEventStreams" id="@cdk_utils/iam.profile.ProfileOperations.property.ListEventStreams"></a>

```typescript
public readonly ListEventStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListEventStreams API call.

---

##### `ListEventTriggers`<sup>Required</sup> <a name="ListEventTriggers" id="@cdk_utils/iam.profile.ProfileOperations.property.ListEventTriggers"></a>

```typescript
public readonly ListEventTriggers: string[];
```

- *Type:* string[]

IAM actions required for the ListEventTriggers API call.

---

##### `ListIdentityResolutionJobs`<sup>Required</sup> <a name="ListIdentityResolutionJobs" id="@cdk_utils/iam.profile.ProfileOperations.property.ListIdentityResolutionJobs"></a>

```typescript
public readonly ListIdentityResolutionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentityResolutionJobs API call.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.profile.ProfileOperations.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the ListIntegrations API call.

---

##### `ListObjectTypeAttributes`<sup>Required</sup> <a name="ListObjectTypeAttributes" id="@cdk_utils/iam.profile.ProfileOperations.property.ListObjectTypeAttributes"></a>

```typescript
public readonly ListObjectTypeAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ListObjectTypeAttributes API call.

---

##### `ListObjectTypeAttributeValues`<sup>Required</sup> <a name="ListObjectTypeAttributeValues" id="@cdk_utils/iam.profile.ProfileOperations.property.ListObjectTypeAttributeValues"></a>

```typescript
public readonly ListObjectTypeAttributeValues: string[];
```

- *Type:* string[]

IAM actions required for the ListObjectTypeAttributeValues API call.

---

##### `ListProfileAttributeValues`<sup>Required</sup> <a name="ListProfileAttributeValues" id="@cdk_utils/iam.profile.ProfileOperations.property.ListProfileAttributeValues"></a>

```typescript
public readonly ListProfileAttributeValues: string[];
```

- *Type:* string[]

IAM actions required for the ListProfileAttributeValues API call.

---

##### `ListProfileHistoryRecords`<sup>Required</sup> <a name="ListProfileHistoryRecords" id="@cdk_utils/iam.profile.ProfileOperations.property.ListProfileHistoryRecords"></a>

```typescript
public readonly ListProfileHistoryRecords: string[];
```

- *Type:* string[]

IAM actions required for the ListProfileHistoryRecords API call.

---

##### `ListProfileObjects`<sup>Required</sup> <a name="ListProfileObjects" id="@cdk_utils/iam.profile.ProfileOperations.property.ListProfileObjects"></a>

```typescript
public readonly ListProfileObjects: string[];
```

- *Type:* string[]

IAM actions required for the ListProfileObjects API call.

---

##### `ListProfileObjectTypes`<sup>Required</sup> <a name="ListProfileObjectTypes" id="@cdk_utils/iam.profile.ProfileOperations.property.ListProfileObjectTypes"></a>

```typescript
public readonly ListProfileObjectTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListProfileObjectTypes API call.

---

##### `ListProfileObjectTypeTemplates`<sup>Required</sup> <a name="ListProfileObjectTypeTemplates" id="@cdk_utils/iam.profile.ProfileOperations.property.ListProfileObjectTypeTemplates"></a>

```typescript
public readonly ListProfileObjectTypeTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListProfileObjectTypeTemplates API call.

---

##### `ListRecommenderFilters`<sup>Required</sup> <a name="ListRecommenderFilters" id="@cdk_utils/iam.profile.ProfileOperations.property.ListRecommenderFilters"></a>

```typescript
public readonly ListRecommenderFilters: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommenderFilters API call.

---

##### `ListRecommenderRecipes`<sup>Required</sup> <a name="ListRecommenderRecipes" id="@cdk_utils/iam.profile.ProfileOperations.property.ListRecommenderRecipes"></a>

```typescript
public readonly ListRecommenderRecipes: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommenderRecipes API call.

---

##### `ListRecommenders`<sup>Required</sup> <a name="ListRecommenders" id="@cdk_utils/iam.profile.ProfileOperations.property.ListRecommenders"></a>

```typescript
public readonly ListRecommenders: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommenders API call.

---

##### `ListRecommenderSchemas`<sup>Required</sup> <a name="ListRecommenderSchemas" id="@cdk_utils/iam.profile.ProfileOperations.property.ListRecommenderSchemas"></a>

```typescript
public readonly ListRecommenderSchemas: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommenderSchemas API call.

---

##### `ListRuleBasedMatches`<sup>Required</sup> <a name="ListRuleBasedMatches" id="@cdk_utils/iam.profile.ProfileOperations.property.ListRuleBasedMatches"></a>

```typescript
public readonly ListRuleBasedMatches: string[];
```

- *Type:* string[]

IAM actions required for the ListRuleBasedMatches API call.

---

##### `ListSegmentDefinitions`<sup>Required</sup> <a name="ListSegmentDefinitions" id="@cdk_utils/iam.profile.ProfileOperations.property.ListSegmentDefinitions"></a>

```typescript
public readonly ListSegmentDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListSegmentDefinitions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.profile.ProfileOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListUploadJobs`<sup>Required</sup> <a name="ListUploadJobs" id="@cdk_utils/iam.profile.ProfileOperations.property.ListUploadJobs"></a>

```typescript
public readonly ListUploadJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListUploadJobs API call.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.profile.ProfileOperations.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflows API call.

---

##### `MergeProfiles`<sup>Required</sup> <a name="MergeProfiles" id="@cdk_utils/iam.profile.ProfileOperations.property.MergeProfiles"></a>

```typescript
public readonly MergeProfiles: string[];
```

- *Type:* string[]

IAM actions required for the MergeProfiles API call.

---

##### `opGetAutoMergingPreview`<sup>Required</sup> <a name="opGetAutoMergingPreview" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetAutoMergingPreview"></a>

```typescript
public readonly opGetAutoMergingPreview: string[];
```

- *Type:* string[]

IAM actions required for the GetAutoMergingPreview API call.

---

##### `opGetCalculatedAttributeDefinition`<sup>Required</sup> <a name="opGetCalculatedAttributeDefinition" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetCalculatedAttributeDefinition"></a>

```typescript
public readonly opGetCalculatedAttributeDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetCalculatedAttributeDefinition API call.

---

##### `opGetCalculatedAttributeForProfile`<sup>Required</sup> <a name="opGetCalculatedAttributeForProfile" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetCalculatedAttributeForProfile"></a>

```typescript
public readonly opGetCalculatedAttributeForProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetCalculatedAttributeForProfile API call.

---

##### `opGetDomain`<sup>Required</sup> <a name="opGetDomain" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetDomain"></a>

```typescript
public readonly opGetDomain: string[];
```

- *Type:* string[]

IAM actions required for the GetDomain API call.

---

##### `opGetDomainLayout`<sup>Required</sup> <a name="opGetDomainLayout" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetDomainLayout"></a>

```typescript
public readonly opGetDomainLayout: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainLayout API call.

---

##### `opGetDomainObjectType`<sup>Required</sup> <a name="opGetDomainObjectType" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetDomainObjectType"></a>

```typescript
public readonly opGetDomainObjectType: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainObjectType API call.

---

##### `opGetEventStream`<sup>Required</sup> <a name="opGetEventStream" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetEventStream"></a>

```typescript
public readonly opGetEventStream: string[];
```

- *Type:* string[]

IAM actions required for the GetEventStream API call.

---

##### `opGetEventTrigger`<sup>Required</sup> <a name="opGetEventTrigger" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetEventTrigger"></a>

```typescript
public readonly opGetEventTrigger: string[];
```

- *Type:* string[]

IAM actions required for the GetEventTrigger API call.

---

##### `opGetIdentityResolutionJob`<sup>Required</sup> <a name="opGetIdentityResolutionJob" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetIdentityResolutionJob"></a>

```typescript
public readonly opGetIdentityResolutionJob: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityResolutionJob API call.

---

##### `opGetIntegration`<sup>Required</sup> <a name="opGetIntegration" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetIntegration"></a>

```typescript
public readonly opGetIntegration: string[];
```

- *Type:* string[]

IAM actions required for the GetIntegration API call.

---

##### `opGetMatches`<sup>Required</sup> <a name="opGetMatches" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetMatches"></a>

```typescript
public readonly opGetMatches: string[];
```

- *Type:* string[]

IAM actions required for the GetMatches API call.

---

##### `opGetObjectTypeAttributeStatistics`<sup>Required</sup> <a name="opGetObjectTypeAttributeStatistics" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetObjectTypeAttributeStatistics"></a>

```typescript
public readonly opGetObjectTypeAttributeStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetObjectTypeAttributeStatistics API call.

---

##### `opGetProfileHistoryRecord`<sup>Required</sup> <a name="opGetProfileHistoryRecord" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetProfileHistoryRecord"></a>

```typescript
public readonly opGetProfileHistoryRecord: string[];
```

- *Type:* string[]

IAM actions required for the GetProfileHistoryRecord API call.

---

##### `opGetProfileObjectType`<sup>Required</sup> <a name="opGetProfileObjectType" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetProfileObjectType"></a>

```typescript
public readonly opGetProfileObjectType: string[];
```

- *Type:* string[]

IAM actions required for the GetProfileObjectType API call.

---

##### `opGetProfileObjectTypeTemplate`<sup>Required</sup> <a name="opGetProfileObjectTypeTemplate" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetProfileObjectTypeTemplate"></a>

```typescript
public readonly opGetProfileObjectTypeTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetProfileObjectTypeTemplate API call.

---

##### `opGetProfileRecommendations`<sup>Required</sup> <a name="opGetProfileRecommendations" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetProfileRecommendations"></a>

```typescript
public readonly opGetProfileRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetProfileRecommendations API call.

---

##### `opGetRecommender`<sup>Required</sup> <a name="opGetRecommender" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetRecommender"></a>

```typescript
public readonly opGetRecommender: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommender API call.

---

##### `opGetRecommenderFilter`<sup>Required</sup> <a name="opGetRecommenderFilter" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetRecommenderFilter"></a>

```typescript
public readonly opGetRecommenderFilter: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommenderFilter API call.

---

##### `opGetRecommenderSchema`<sup>Required</sup> <a name="opGetRecommenderSchema" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetRecommenderSchema"></a>

```typescript
public readonly opGetRecommenderSchema: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommenderSchema API call.

---

##### `opGetSegmentDefinition`<sup>Required</sup> <a name="opGetSegmentDefinition" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetSegmentDefinition"></a>

```typescript
public readonly opGetSegmentDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetSegmentDefinition API call.

---

##### `opGetSegmentEstimate`<sup>Required</sup> <a name="opGetSegmentEstimate" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetSegmentEstimate"></a>

```typescript
public readonly opGetSegmentEstimate: string[];
```

- *Type:* string[]

IAM actions required for the GetSegmentEstimate API call.

---

##### `opGetSegmentMembership`<sup>Required</sup> <a name="opGetSegmentMembership" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetSegmentMembership"></a>

```typescript
public readonly opGetSegmentMembership: string[];
```

- *Type:* string[]

IAM actions required for the GetSegmentMembership API call.

---

##### `opGetSegmentSnapshot`<sup>Required</sup> <a name="opGetSegmentSnapshot" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetSegmentSnapshot"></a>

```typescript
public readonly opGetSegmentSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the GetSegmentSnapshot API call.

---

##### `opGetSimilarProfiles`<sup>Required</sup> <a name="opGetSimilarProfiles" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetSimilarProfiles"></a>

```typescript
public readonly opGetSimilarProfiles: string[];
```

- *Type:* string[]

IAM actions required for the GetSimilarProfiles API call.

---

##### `opGetUploadJob`<sup>Required</sup> <a name="opGetUploadJob" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetUploadJob"></a>

```typescript
public readonly opGetUploadJob: string[];
```

- *Type:* string[]

IAM actions required for the GetUploadJob API call.

---

##### `opGetUploadJobPath`<sup>Required</sup> <a name="opGetUploadJobPath" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetUploadJobPath"></a>

```typescript
public readonly opGetUploadJobPath: string[];
```

- *Type:* string[]

IAM actions required for the GetUploadJobPath API call.

---

##### `opGetWorkflow`<sup>Required</sup> <a name="opGetWorkflow" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetWorkflow"></a>

```typescript
public readonly opGetWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflow API call.

---

##### `opGetWorkflowSteps`<sup>Required</sup> <a name="opGetWorkflowSteps" id="@cdk_utils/iam.profile.ProfileOperations.property.opGetWorkflowSteps"></a>

```typescript
public readonly opGetWorkflowSteps: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowSteps API call.

---

##### `PutDomainObjectType`<sup>Required</sup> <a name="PutDomainObjectType" id="@cdk_utils/iam.profile.ProfileOperations.property.PutDomainObjectType"></a>

```typescript
public readonly PutDomainObjectType: string[];
```

- *Type:* string[]

IAM actions required for the PutDomainObjectType API call.

---

##### `PutIntegration`<sup>Required</sup> <a name="PutIntegration" id="@cdk_utils/iam.profile.ProfileOperations.property.PutIntegration"></a>

```typescript
public readonly PutIntegration: string[];
```

- *Type:* string[]

IAM actions required for the PutIntegration API call.

---

##### `PutProfileObject`<sup>Required</sup> <a name="PutProfileObject" id="@cdk_utils/iam.profile.ProfileOperations.property.PutProfileObject"></a>

```typescript
public readonly PutProfileObject: string[];
```

- *Type:* string[]

IAM actions required for the PutProfileObject API call.

---

##### `PutProfileObjectType`<sup>Required</sup> <a name="PutProfileObjectType" id="@cdk_utils/iam.profile.ProfileOperations.property.PutProfileObjectType"></a>

```typescript
public readonly PutProfileObjectType: string[];
```

- *Type:* string[]

IAM actions required for the PutProfileObjectType API call.

---

##### `SearchProfiles`<sup>Required</sup> <a name="SearchProfiles" id="@cdk_utils/iam.profile.ProfileOperations.property.SearchProfiles"></a>

```typescript
public readonly SearchProfiles: string[];
```

- *Type:* string[]

IAM actions required for the SearchProfiles API call.

---

##### `StartRecommender`<sup>Required</sup> <a name="StartRecommender" id="@cdk_utils/iam.profile.ProfileOperations.property.StartRecommender"></a>

```typescript
public readonly StartRecommender: string[];
```

- *Type:* string[]

IAM actions required for the StartRecommender API call.

---

##### `StartUploadJob`<sup>Required</sup> <a name="StartUploadJob" id="@cdk_utils/iam.profile.ProfileOperations.property.StartUploadJob"></a>

```typescript
public readonly StartUploadJob: string[];
```

- *Type:* string[]

IAM actions required for the StartUploadJob API call.

---

##### `StopRecommender`<sup>Required</sup> <a name="StopRecommender" id="@cdk_utils/iam.profile.ProfileOperations.property.StopRecommender"></a>

```typescript
public readonly StopRecommender: string[];
```

- *Type:* string[]

IAM actions required for the StopRecommender API call.

---

##### `StopUploadJob`<sup>Required</sup> <a name="StopUploadJob" id="@cdk_utils/iam.profile.ProfileOperations.property.StopUploadJob"></a>

```typescript
public readonly StopUploadJob: string[];
```

- *Type:* string[]

IAM actions required for the StopUploadJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.profile.ProfileOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.profile.ProfileOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCalculatedAttributeDefinition`<sup>Required</sup> <a name="UpdateCalculatedAttributeDefinition" id="@cdk_utils/iam.profile.ProfileOperations.property.UpdateCalculatedAttributeDefinition"></a>

```typescript
public readonly UpdateCalculatedAttributeDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCalculatedAttributeDefinition API call.

---

##### `UpdateDomain`<sup>Required</sup> <a name="UpdateDomain" id="@cdk_utils/iam.profile.ProfileOperations.property.UpdateDomain"></a>

```typescript
public readonly UpdateDomain: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomain API call.

---

##### `UpdateDomainLayout`<sup>Required</sup> <a name="UpdateDomainLayout" id="@cdk_utils/iam.profile.ProfileOperations.property.UpdateDomainLayout"></a>

```typescript
public readonly UpdateDomainLayout: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainLayout API call.

---

##### `UpdateEventTrigger`<sup>Required</sup> <a name="UpdateEventTrigger" id="@cdk_utils/iam.profile.ProfileOperations.property.UpdateEventTrigger"></a>

```typescript
public readonly UpdateEventTrigger: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventTrigger API call.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.profile.ProfileOperations.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProfile API call.

---

##### `UpdateRecommender`<sup>Required</sup> <a name="UpdateRecommender" id="@cdk_utils/iam.profile.ProfileOperations.property.UpdateRecommender"></a>

```typescript
public readonly UpdateRecommender: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRecommender API call.

---

### ProfileResources <a name="ProfileResources" id="@cdk_utils/iam.profile.ProfileResources"></a>

ARN builders, validators, and parsers for profile resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.profile.ProfileResources.Initializer"></a>

```typescript
import { profile } from '@cdk_utils/iam'

new profile.ProfileResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.calculatedAttributes">calculatedAttributes</a></code> | Builds an ARN for the calculated-attributes resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.domainObjectTypes">domainObjectTypes</a></code> | Builds an ARN for the domain-object-types resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.domains">domains</a></code> | Builds an ARN for the domains resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.eventStreams">eventStreams</a></code> | Builds an ARN for the event-streams resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.eventTriggers">eventTriggers</a></code> | Builds an ARN for the event-triggers resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.integrations">integrations</a></code> | Builds an ARN for the integrations resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidCalculatedAttributesArn">isValidCalculatedAttributesArn</a></code> | Validates whether a string is a valid ARN for the calculated-attributes resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidDomainObjectTypesArn">isValidDomainObjectTypesArn</a></code> | Validates whether a string is a valid ARN for the domain-object-types resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidDomainsArn">isValidDomainsArn</a></code> | Validates whether a string is a valid ARN for the domains resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidEventStreamsArn">isValidEventStreamsArn</a></code> | Validates whether a string is a valid ARN for the event-streams resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidEventTriggersArn">isValidEventTriggersArn</a></code> | Validates whether a string is a valid ARN for the event-triggers resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidIntegrationsArn">isValidIntegrationsArn</a></code> | Validates whether a string is a valid ARN for the integrations resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidLayoutsArn">isValidLayoutsArn</a></code> | Validates whether a string is a valid ARN for the layouts resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidObjectTypesArn">isValidObjectTypesArn</a></code> | Validates whether a string is a valid ARN for the object-types resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidRecommenderFiltersArn">isValidRecommenderFiltersArn</a></code> | Validates whether a string is a valid ARN for the recommender-filters resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidRecommendersArn">isValidRecommendersArn</a></code> | Validates whether a string is a valid ARN for the recommenders resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidRecommenderSchemasArn">isValidRecommenderSchemasArn</a></code> | Validates whether a string is a valid ARN for the recommender-schemas resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.isValidSegmentDefinitionsArn">isValidSegmentDefinitionsArn</a></code> | Validates whether a string is a valid ARN for the segment-definitions resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.layouts">layouts</a></code> | Builds an ARN for the layouts resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.objectTypes">objectTypes</a></code> | Builds an ARN for the object-types resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseCalculatedAttributesArn">parseCalculatedAttributesArn</a></code> | Parses a calculated-attributes ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseDomainObjectTypesArn">parseDomainObjectTypesArn</a></code> | Parses a domain-object-types ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseDomainsArn">parseDomainsArn</a></code> | Parses a domains ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseEventStreamsArn">parseEventStreamsArn</a></code> | Parses a event-streams ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseEventTriggersArn">parseEventTriggersArn</a></code> | Parses a event-triggers ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseIntegrationsArn">parseIntegrationsArn</a></code> | Parses a integrations ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseLayoutsArn">parseLayoutsArn</a></code> | Parses a layouts ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseObjectTypesArn">parseObjectTypesArn</a></code> | Parses a object-types ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseRecommenderFiltersArn">parseRecommenderFiltersArn</a></code> | Parses a recommender-filters ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseRecommendersArn">parseRecommendersArn</a></code> | Parses a recommenders ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseRecommenderSchemasArn">parseRecommenderSchemasArn</a></code> | Parses a recommender-schemas ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.parseSegmentDefinitionsArn">parseSegmentDefinitionsArn</a></code> | Parses a segment-definitions ARN into its components. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.recommenderFilters">recommenderFilters</a></code> | Builds an ARN for the recommender-filters resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.recommenders">recommenders</a></code> | Builds an ARN for the recommenders resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.recommenderSchemas">recommenderSchemas</a></code> | Builds an ARN for the recommender-schemas resource. |
| <code><a href="#@cdk_utils/iam.profile.ProfileResources.segmentDefinitions">segmentDefinitions</a></code> | Builds an ARN for the segment-definitions resource. |

---

##### `calculatedAttributes` <a name="calculatedAttributes" id="@cdk_utils/iam.profile.ProfileResources.calculatedAttributes"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.calculatedAttributes(props: ProfileCalculatedAttributesArnProps)
```

Builds an ARN for the calculated-attributes resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.calculatedAttributes.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileCalculatedAttributesArnProps">ProfileCalculatedAttributesArnProps</a>

---

##### `domainObjectTypes` <a name="domainObjectTypes" id="@cdk_utils/iam.profile.ProfileResources.domainObjectTypes"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.domainObjectTypes(props: ProfileDomainObjectTypesArnProps)
```

Builds an ARN for the domain-object-types resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.domainObjectTypes.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileDomainObjectTypesArnProps">ProfileDomainObjectTypesArnProps</a>

---

##### `domains` <a name="domains" id="@cdk_utils/iam.profile.ProfileResources.domains"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.domains(props: ProfileDomainsArnProps)
```

Builds an ARN for the domains resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.domains.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileDomainsArnProps">ProfileDomainsArnProps</a>

---

##### `eventStreams` <a name="eventStreams" id="@cdk_utils/iam.profile.ProfileResources.eventStreams"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.eventStreams(props: ProfileEventStreamsArnProps)
```

Builds an ARN for the event-streams resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.eventStreams.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileEventStreamsArnProps">ProfileEventStreamsArnProps</a>

---

##### `eventTriggers` <a name="eventTriggers" id="@cdk_utils/iam.profile.ProfileResources.eventTriggers"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.eventTriggers(props: ProfileEventTriggersArnProps)
```

Builds an ARN for the event-triggers resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.eventTriggers.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileEventTriggersArnProps">ProfileEventTriggersArnProps</a>

---

##### `integrations` <a name="integrations" id="@cdk_utils/iam.profile.ProfileResources.integrations"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.integrations(props: ProfileIntegrationsArnProps)
```

Builds an ARN for the integrations resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.integrations.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileIntegrationsArnProps">ProfileIntegrationsArnProps</a>

---

##### `isValidCalculatedAttributesArn` <a name="isValidCalculatedAttributesArn" id="@cdk_utils/iam.profile.ProfileResources.isValidCalculatedAttributesArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidCalculatedAttributesArn(arn: string)
```

Validates whether a string is a valid ARN for the calculated-attributes resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidCalculatedAttributesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainObjectTypesArn` <a name="isValidDomainObjectTypesArn" id="@cdk_utils/iam.profile.ProfileResources.isValidDomainObjectTypesArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidDomainObjectTypesArn(arn: string)
```

Validates whether a string is a valid ARN for the domain-object-types resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidDomainObjectTypesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainsArn` <a name="isValidDomainsArn" id="@cdk_utils/iam.profile.ProfileResources.isValidDomainsArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidDomainsArn(arn: string)
```

Validates whether a string is a valid ARN for the domains resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidDomainsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventStreamsArn` <a name="isValidEventStreamsArn" id="@cdk_utils/iam.profile.ProfileResources.isValidEventStreamsArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidEventStreamsArn(arn: string)
```

Validates whether a string is a valid ARN for the event-streams resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidEventStreamsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventTriggersArn` <a name="isValidEventTriggersArn" id="@cdk_utils/iam.profile.ProfileResources.isValidEventTriggersArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidEventTriggersArn(arn: string)
```

Validates whether a string is a valid ARN for the event-triggers resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidEventTriggersArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationsArn` <a name="isValidIntegrationsArn" id="@cdk_utils/iam.profile.ProfileResources.isValidIntegrationsArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidIntegrationsArn(arn: string)
```

Validates whether a string is a valid ARN for the integrations resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidIntegrationsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLayoutsArn` <a name="isValidLayoutsArn" id="@cdk_utils/iam.profile.ProfileResources.isValidLayoutsArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidLayoutsArn(arn: string)
```

Validates whether a string is a valid ARN for the layouts resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidLayoutsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidObjectTypesArn` <a name="isValidObjectTypesArn" id="@cdk_utils/iam.profile.ProfileResources.isValidObjectTypesArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidObjectTypesArn(arn: string)
```

Validates whether a string is a valid ARN for the object-types resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidObjectTypesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecommenderFiltersArn` <a name="isValidRecommenderFiltersArn" id="@cdk_utils/iam.profile.ProfileResources.isValidRecommenderFiltersArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidRecommenderFiltersArn(arn: string)
```

Validates whether a string is a valid ARN for the recommender-filters resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidRecommenderFiltersArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecommendersArn` <a name="isValidRecommendersArn" id="@cdk_utils/iam.profile.ProfileResources.isValidRecommendersArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidRecommendersArn(arn: string)
```

Validates whether a string is a valid ARN for the recommenders resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidRecommendersArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecommenderSchemasArn` <a name="isValidRecommenderSchemasArn" id="@cdk_utils/iam.profile.ProfileResources.isValidRecommenderSchemasArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidRecommenderSchemasArn(arn: string)
```

Validates whether a string is a valid ARN for the recommender-schemas resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidRecommenderSchemasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSegmentDefinitionsArn` <a name="isValidSegmentDefinitionsArn" id="@cdk_utils/iam.profile.ProfileResources.isValidSegmentDefinitionsArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.isValidSegmentDefinitionsArn(arn: string)
```

Validates whether a string is a valid ARN for the segment-definitions resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.isValidSegmentDefinitionsArn.parameter.arn"></a>

- *Type:* string

---

##### `layouts` <a name="layouts" id="@cdk_utils/iam.profile.ProfileResources.layouts"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.layouts(props: ProfileLayoutsArnProps)
```

Builds an ARN for the layouts resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.layouts.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileLayoutsArnProps">ProfileLayoutsArnProps</a>

---

##### `objectTypes` <a name="objectTypes" id="@cdk_utils/iam.profile.ProfileResources.objectTypes"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.objectTypes(props: ProfileObjectTypesArnProps)
```

Builds an ARN for the object-types resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.objectTypes.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileObjectTypesArnProps">ProfileObjectTypesArnProps</a>

---

##### `parseCalculatedAttributesArn` <a name="parseCalculatedAttributesArn" id="@cdk_utils/iam.profile.ProfileResources.parseCalculatedAttributesArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseCalculatedAttributesArn(arn: string)
```

Parses a calculated-attributes ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseCalculatedAttributesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainObjectTypesArn` <a name="parseDomainObjectTypesArn" id="@cdk_utils/iam.profile.ProfileResources.parseDomainObjectTypesArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseDomainObjectTypesArn(arn: string)
```

Parses a domain-object-types ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseDomainObjectTypesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainsArn` <a name="parseDomainsArn" id="@cdk_utils/iam.profile.ProfileResources.parseDomainsArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseDomainsArn(arn: string)
```

Parses a domains ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseDomainsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventStreamsArn` <a name="parseEventStreamsArn" id="@cdk_utils/iam.profile.ProfileResources.parseEventStreamsArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseEventStreamsArn(arn: string)
```

Parses a event-streams ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseEventStreamsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventTriggersArn` <a name="parseEventTriggersArn" id="@cdk_utils/iam.profile.ProfileResources.parseEventTriggersArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseEventTriggersArn(arn: string)
```

Parses a event-triggers ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseEventTriggersArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationsArn` <a name="parseIntegrationsArn" id="@cdk_utils/iam.profile.ProfileResources.parseIntegrationsArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseIntegrationsArn(arn: string)
```

Parses a integrations ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseIntegrationsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLayoutsArn` <a name="parseLayoutsArn" id="@cdk_utils/iam.profile.ProfileResources.parseLayoutsArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseLayoutsArn(arn: string)
```

Parses a layouts ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseLayoutsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseObjectTypesArn` <a name="parseObjectTypesArn" id="@cdk_utils/iam.profile.ProfileResources.parseObjectTypesArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseObjectTypesArn(arn: string)
```

Parses a object-types ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseObjectTypesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecommenderFiltersArn` <a name="parseRecommenderFiltersArn" id="@cdk_utils/iam.profile.ProfileResources.parseRecommenderFiltersArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseRecommenderFiltersArn(arn: string)
```

Parses a recommender-filters ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseRecommenderFiltersArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecommendersArn` <a name="parseRecommendersArn" id="@cdk_utils/iam.profile.ProfileResources.parseRecommendersArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseRecommendersArn(arn: string)
```

Parses a recommenders ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseRecommendersArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecommenderSchemasArn` <a name="parseRecommenderSchemasArn" id="@cdk_utils/iam.profile.ProfileResources.parseRecommenderSchemasArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseRecommenderSchemasArn(arn: string)
```

Parses a recommender-schemas ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseRecommenderSchemasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSegmentDefinitionsArn` <a name="parseSegmentDefinitionsArn" id="@cdk_utils/iam.profile.ProfileResources.parseSegmentDefinitionsArn"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.parseSegmentDefinitionsArn(arn: string)
```

Parses a segment-definitions ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.profile.ProfileResources.parseSegmentDefinitionsArn.parameter.arn"></a>

- *Type:* string

---

##### `recommenderFilters` <a name="recommenderFilters" id="@cdk_utils/iam.profile.ProfileResources.recommenderFilters"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.recommenderFilters(props: ProfileRecommenderFiltersArnProps)
```

Builds an ARN for the recommender-filters resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.recommenderFilters.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileRecommenderFiltersArnProps">ProfileRecommenderFiltersArnProps</a>

---

##### `recommenders` <a name="recommenders" id="@cdk_utils/iam.profile.ProfileResources.recommenders"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.recommenders(props: ProfileRecommendersArnProps)
```

Builds an ARN for the recommenders resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.recommenders.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileRecommendersArnProps">ProfileRecommendersArnProps</a>

---

##### `recommenderSchemas` <a name="recommenderSchemas" id="@cdk_utils/iam.profile.ProfileResources.recommenderSchemas"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.recommenderSchemas(props: ProfileRecommenderSchemasArnProps)
```

Builds an ARN for the recommender-schemas resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.recommenderSchemas.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileRecommenderSchemasArnProps">ProfileRecommenderSchemasArnProps</a>

---

##### `segmentDefinitions` <a name="segmentDefinitions" id="@cdk_utils/iam.profile.ProfileResources.segmentDefinitions"></a>

```typescript
import { profile } from '@cdk_utils/iam'

profile.ProfileResources.segmentDefinitions(props: ProfileSegmentDefinitionsArnProps)
```

Builds an ARN for the segment-definitions resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.profile.ProfileResources.segmentDefinitions.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.profile.ProfileSegmentDefinitionsArnProps">ProfileSegmentDefinitionsArnProps</a>

---




