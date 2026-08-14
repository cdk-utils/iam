# `macie2` Submodule <a name="`macie2` Submodule" id="@cdk_utils/iam.macie2"></a>


## Structs <a name="Structs" id="Structs"></a>

### Macie2AllowListArnComponents <a name="Macie2AllowListArnComponents" id="@cdk_utils/iam.macie2.Macie2AllowListArnComponents"></a>

Parsed components of a AllowList ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.macie2.Macie2AllowListArnComponents.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

const macie2AllowListArnComponents: macie2.Macie2AllowListArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2AllowListArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2AllowListArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2AllowListArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2AllowListArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.macie2.Macie2AllowListArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.macie2.Macie2AllowListArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.macie2.Macie2AllowListArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.macie2.Macie2AllowListArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Macie2AllowListArnProps <a name="Macie2AllowListArnProps" id="@cdk_utils/iam.macie2.Macie2AllowListArnProps"></a>

Properties for building a AllowList ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.macie2.Macie2AllowListArnProps.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

const macie2AllowListArnProps: macie2.Macie2AllowListArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2AllowListArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2AllowListArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2AllowListArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2AllowListArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.macie2.Macie2AllowListArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.macie2.Macie2AllowListArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.macie2.Macie2AllowListArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.macie2.Macie2AllowListArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Macie2ClassificationJobArnComponents <a name="Macie2ClassificationJobArnComponents" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnComponents"></a>

Parsed components of a ClassificationJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnComponents.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

const macie2ClassificationJobArnComponents: macie2.Macie2ClassificationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2ClassificationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2ClassificationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2ClassificationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2ClassificationJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Macie2ClassificationJobArnProps <a name="Macie2ClassificationJobArnProps" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnProps"></a>

Properties for building a ClassificationJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnProps.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

const macie2ClassificationJobArnProps: macie2.Macie2ClassificationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2ClassificationJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2ClassificationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2ClassificationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2ClassificationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.macie2.Macie2ClassificationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Macie2CustomDataIdentifierArnComponents <a name="Macie2CustomDataIdentifierArnComponents" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnComponents"></a>

Parsed components of a CustomDataIdentifier ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnComponents.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

const macie2CustomDataIdentifierArnComponents: macie2.Macie2CustomDataIdentifierArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Macie2CustomDataIdentifierArnProps <a name="Macie2CustomDataIdentifierArnProps" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnProps"></a>

Properties for building a CustomDataIdentifier ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnProps.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

const macie2CustomDataIdentifierArnProps: macie2.Macie2CustomDataIdentifierArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Macie2FindingsFilterArnComponents <a name="Macie2FindingsFilterArnComponents" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnComponents"></a>

Parsed components of a FindingsFilter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnComponents.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

const macie2FindingsFilterArnComponents: macie2.Macie2FindingsFilterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2FindingsFilterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2FindingsFilterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2FindingsFilterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2FindingsFilterArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Macie2FindingsFilterArnProps <a name="Macie2FindingsFilterArnProps" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnProps"></a>

Properties for building a FindingsFilter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnProps.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

const macie2FindingsFilterArnProps: macie2.Macie2FindingsFilterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2FindingsFilterArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2FindingsFilterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2FindingsFilterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2FindingsFilterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.macie2.Macie2FindingsFilterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Macie2MemberArnComponents <a name="Macie2MemberArnComponents" id="@cdk_utils/iam.macie2.Macie2MemberArnComponents"></a>

Parsed components of a Member ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.macie2.Macie2MemberArnComponents.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

const macie2MemberArnComponents: macie2.Macie2MemberArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2MemberArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2MemberArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2MemberArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2MemberArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.macie2.Macie2MemberArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.macie2.Macie2MemberArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.macie2.Macie2MemberArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.macie2.Macie2MemberArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Macie2MemberArnProps <a name="Macie2MemberArnProps" id="@cdk_utils/iam.macie2.Macie2MemberArnProps"></a>

Properties for building a Member ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.macie2.Macie2MemberArnProps.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

const macie2MemberArnProps: macie2.Macie2MemberArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2MemberArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2MemberArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2MemberArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2MemberArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.macie2.Macie2MemberArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.macie2.Macie2MemberArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.macie2.Macie2MemberArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.macie2.Macie2MemberArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2Actions <a name="Macie2Actions" id="@cdk_utils/iam.macie2.Macie2Actions"></a>

IAM action constants for the macie2 service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.macie2.Macie2Actions.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

new macie2.Macie2Actions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.AcceptInvitation">AcceptInvitation</a></code> | <code>string</code> | [Write] macie2:AcceptInvitation. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetAdministratorAccount">actionGetAdministratorAccount</a></code> | <code>string</code> | [Read] macie2:GetAdministratorAccount. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetAllowList">actionGetAllowList</a></code> | <code>string</code> | [Read] macie2:GetAllowList. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetAutomatedDiscoveryConfiguration">actionGetAutomatedDiscoveryConfiguration</a></code> | <code>string</code> | [Read] macie2:GetAutomatedDiscoveryConfiguration. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetBucketStatistics">actionGetBucketStatistics</a></code> | <code>string</code> | [Read] macie2:GetBucketStatistics. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetClassificationExportConfiguration">actionGetClassificationExportConfiguration</a></code> | <code>string</code> | [Read] macie2:GetClassificationExportConfiguration. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetClassificationScope">actionGetClassificationScope</a></code> | <code>string</code> | [Read] macie2:GetClassificationScope. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetCustomDataIdentifier">actionGetCustomDataIdentifier</a></code> | <code>string</code> | [Read] macie2:GetCustomDataIdentifier. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetFindings">actionGetFindings</a></code> | <code>string</code> | [Read] macie2:GetFindings. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetFindingsFilter">actionGetFindingsFilter</a></code> | <code>string</code> | [Read] macie2:GetFindingsFilter. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetFindingsPublicationConfiguration">actionGetFindingsPublicationConfiguration</a></code> | <code>string</code> | [Read] macie2:GetFindingsPublicationConfiguration. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetFindingStatistics">actionGetFindingStatistics</a></code> | <code>string</code> | [Read] macie2:GetFindingStatistics. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetInvitationsCount">actionGetInvitationsCount</a></code> | <code>string</code> | [Read] macie2:GetInvitationsCount. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetMacieSession">actionGetMacieSession</a></code> | <code>string</code> | [Read] macie2:GetMacieSession. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetMasterAccount">actionGetMasterAccount</a></code> | <code>string</code> | [Read] macie2:GetMasterAccount. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetMember">actionGetMember</a></code> | <code>string</code> | [Read] macie2:GetMember. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetResourceProfile">actionGetResourceProfile</a></code> | <code>string</code> | [Read] macie2:GetResourceProfile. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetRevealConfiguration">actionGetRevealConfiguration</a></code> | <code>string</code> | [Read] macie2:GetRevealConfiguration. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetSensitiveDataOccurrences">actionGetSensitiveDataOccurrences</a></code> | <code>string</code> | [Read] macie2:GetSensitiveDataOccurrences. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetSensitiveDataOccurrencesAvailability">actionGetSensitiveDataOccurrencesAvailability</a></code> | <code>string</code> | [Read] macie2:GetSensitiveDataOccurrencesAvailability. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetSensitivityInspectionTemplate">actionGetSensitivityInspectionTemplate</a></code> | <code>string</code> | [Read] macie2:GetSensitivityInspectionTemplate. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetUsageStatistics">actionGetUsageStatistics</a></code> | <code>string</code> | [Read] macie2:GetUsageStatistics. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.actionGetUsageTotals">actionGetUsageTotals</a></code> | <code>string</code> | [Read] macie2:GetUsageTotals. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.BatchGetCustomDataIdentifiers">BatchGetCustomDataIdentifiers</a></code> | <code>string</code> | [Read] macie2:BatchGetCustomDataIdentifiers. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.BatchUpdateAutomatedDiscoveryAccounts">BatchUpdateAutomatedDiscoveryAccounts</a></code> | <code>string</code> | [Write] macie2:BatchUpdateAutomatedDiscoveryAccounts. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.CreateAllowList">CreateAllowList</a></code> | <code>string</code> | [Write] macie2:CreateAllowList. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.CreateClassificationJob">CreateClassificationJob</a></code> | <code>string</code> | [Write] macie2:CreateClassificationJob. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.CreateCustomDataIdentifier">CreateCustomDataIdentifier</a></code> | <code>string</code> | [Write] macie2:CreateCustomDataIdentifier. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.CreateFindingsFilter">CreateFindingsFilter</a></code> | <code>string</code> | [Write] macie2:CreateFindingsFilter. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.CreateInvitations">CreateInvitations</a></code> | <code>string</code> | [Write] macie2:CreateInvitations. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.CreateMember">CreateMember</a></code> | <code>string</code> | [Write] macie2:CreateMember. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.CreateSampleFindings">CreateSampleFindings</a></code> | <code>string</code> | [Write] macie2:CreateSampleFindings. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DeclineInvitations">DeclineInvitations</a></code> | <code>string</code> | [Write] macie2:DeclineInvitations. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DeleteAllowList">DeleteAllowList</a></code> | <code>string</code> | [Write] macie2:DeleteAllowList. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DeleteCustomDataIdentifier">DeleteCustomDataIdentifier</a></code> | <code>string</code> | [Write] macie2:DeleteCustomDataIdentifier. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DeleteFindingsFilter">DeleteFindingsFilter</a></code> | <code>string</code> | [Write] macie2:DeleteFindingsFilter. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DeleteInvitations">DeleteInvitations</a></code> | <code>string</code> | [Write] macie2:DeleteInvitations. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DeleteMember">DeleteMember</a></code> | <code>string</code> | [Write] macie2:DeleteMember. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DescribeBuckets">DescribeBuckets</a></code> | <code>string</code> | [Read] macie2:DescribeBuckets. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DescribeClassificationJob">DescribeClassificationJob</a></code> | <code>string</code> | [Read] macie2:DescribeClassificationJob. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DescribeOrganizationConfiguration">DescribeOrganizationConfiguration</a></code> | <code>string</code> | [Read] macie2:DescribeOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DisableMacie">DisableMacie</a></code> | <code>string</code> | [Write] macie2:DisableMacie. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DisableOrganizationAdminAccount">DisableOrganizationAdminAccount</a></code> | <code>string</code> | [Write] macie2:DisableOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</a></code> | <code>string</code> | [Write] macie2:DisassociateFromAdministratorAccount. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DisassociateFromMasterAccount">DisassociateFromMasterAccount</a></code> | <code>string</code> | [Write] macie2:DisassociateFromMasterAccount. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.DisassociateMember">DisassociateMember</a></code> | <code>string</code> | [Write] macie2:DisassociateMember. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.EnableMacie">EnableMacie</a></code> | <code>string</code> | [Write] macie2:EnableMacie. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.EnableOrganizationAdminAccount">EnableOrganizationAdminAccount</a></code> | <code>string</code> | [Write] macie2:EnableOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListAllowLists">ListAllowLists</a></code> | <code>string</code> | [List] macie2:ListAllowLists. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListAutomatedDiscoveryAccounts">ListAutomatedDiscoveryAccounts</a></code> | <code>string</code> | [List] macie2:ListAutomatedDiscoveryAccounts. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListClassificationJobs">ListClassificationJobs</a></code> | <code>string</code> | [List] macie2:ListClassificationJobs. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListClassificationScopes">ListClassificationScopes</a></code> | <code>string</code> | [List] macie2:ListClassificationScopes. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListCustomDataIdentifiers">ListCustomDataIdentifiers</a></code> | <code>string</code> | [List] macie2:ListCustomDataIdentifiers. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListFindings">ListFindings</a></code> | <code>string</code> | [List] macie2:ListFindings. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListFindingsFilters">ListFindingsFilters</a></code> | <code>string</code> | [List] macie2:ListFindingsFilters. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListInvitations">ListInvitations</a></code> | <code>string</code> | [List] macie2:ListInvitations. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListManagedDataIdentifiers">ListManagedDataIdentifiers</a></code> | <code>string</code> | [List] macie2:ListManagedDataIdentifiers. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListMembers">ListMembers</a></code> | <code>string</code> | [List] macie2:ListMembers. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListOrganizationAdminAccounts">ListOrganizationAdminAccounts</a></code> | <code>string</code> | [List] macie2:ListOrganizationAdminAccounts. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListResourceProfileArtifacts">ListResourceProfileArtifacts</a></code> | <code>string</code> | [List] macie2:ListResourceProfileArtifacts. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListResourceProfileDetections">ListResourceProfileDetections</a></code> | <code>string</code> | [List] macie2:ListResourceProfileDetections. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListSensitivityInspectionTemplates">ListSensitivityInspectionTemplates</a></code> | <code>string</code> | [List] macie2:ListSensitivityInspectionTemplates. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] macie2:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.PutClassificationExportConfiguration">PutClassificationExportConfiguration</a></code> | <code>string</code> | [Write] macie2:PutClassificationExportConfiguration. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.PutFindingsPublicationConfiguration">PutFindingsPublicationConfiguration</a></code> | <code>string</code> | [Write] macie2:PutFindingsPublicationConfiguration. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.SearchResources">SearchResources</a></code> | <code>string</code> | [Read] macie2:SearchResources. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] macie2:TagResource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.TestCustomDataIdentifier">TestCustomDataIdentifier</a></code> | <code>string</code> | [Write] macie2:TestCustomDataIdentifier. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] macie2:UntagResource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateAllowList">UpdateAllowList</a></code> | <code>string</code> | [Write] macie2:UpdateAllowList. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateAutomatedDiscoveryConfiguration">UpdateAutomatedDiscoveryConfiguration</a></code> | <code>string</code> | [Write] macie2:UpdateAutomatedDiscoveryConfiguration. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateClassificationJob">UpdateClassificationJob</a></code> | <code>string</code> | [Write] macie2:UpdateClassificationJob. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateClassificationScope">UpdateClassificationScope</a></code> | <code>string</code> | [Write] macie2:UpdateClassificationScope. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateFindingsFilter">UpdateFindingsFilter</a></code> | <code>string</code> | [Write] macie2:UpdateFindingsFilter. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateMacieSession">UpdateMacieSession</a></code> | <code>string</code> | [Write] macie2:UpdateMacieSession. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateMemberSession">UpdateMemberSession</a></code> | <code>string</code> | [Write] macie2:UpdateMemberSession. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateOrganizationConfiguration">UpdateOrganizationConfiguration</a></code> | <code>string</code> | [Write] macie2:UpdateOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateResourceProfile">UpdateResourceProfile</a></code> | <code>string</code> | [Write] macie2:UpdateResourceProfile. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateResourceProfileDetections">UpdateResourceProfileDetections</a></code> | <code>string</code> | [Write] macie2:UpdateResourceProfileDetections. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateRevealConfiguration">UpdateRevealConfiguration</a></code> | <code>string</code> | [Write] macie2:UpdateRevealConfiguration. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Actions.property.UpdateSensitivityInspectionTemplate">UpdateSensitivityInspectionTemplate</a></code> | <code>string</code> | [Write] macie2:UpdateSensitivityInspectionTemplate. |

---

##### `AcceptInvitation`<sup>Required</sup> <a name="AcceptInvitation" id="@cdk_utils/iam.macie2.Macie2Actions.property.AcceptInvitation"></a>

```typescript
public readonly AcceptInvitation: string;
```

- *Type:* string

[Write] macie2:AcceptInvitation.

---

##### `actionGetAdministratorAccount`<sup>Required</sup> <a name="actionGetAdministratorAccount" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetAdministratorAccount"></a>

```typescript
public readonly actionGetAdministratorAccount: string;
```

- *Type:* string

[Read] macie2:GetAdministratorAccount.

---

##### `actionGetAllowList`<sup>Required</sup> <a name="actionGetAllowList" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetAllowList"></a>

```typescript
public readonly actionGetAllowList: string;
```

- *Type:* string

[Read] macie2:GetAllowList.

---

##### `actionGetAutomatedDiscoveryConfiguration`<sup>Required</sup> <a name="actionGetAutomatedDiscoveryConfiguration" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetAutomatedDiscoveryConfiguration"></a>

```typescript
public readonly actionGetAutomatedDiscoveryConfiguration: string;
```

- *Type:* string

[Read] macie2:GetAutomatedDiscoveryConfiguration.

---

##### `actionGetBucketStatistics`<sup>Required</sup> <a name="actionGetBucketStatistics" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetBucketStatistics"></a>

```typescript
public readonly actionGetBucketStatistics: string;
```

- *Type:* string

[Read] macie2:GetBucketStatistics.

---

##### `actionGetClassificationExportConfiguration`<sup>Required</sup> <a name="actionGetClassificationExportConfiguration" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetClassificationExportConfiguration"></a>

```typescript
public readonly actionGetClassificationExportConfiguration: string;
```

- *Type:* string

[Read] macie2:GetClassificationExportConfiguration.

---

##### `actionGetClassificationScope`<sup>Required</sup> <a name="actionGetClassificationScope" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetClassificationScope"></a>

```typescript
public readonly actionGetClassificationScope: string;
```

- *Type:* string

[Read] macie2:GetClassificationScope.

---

##### `actionGetCustomDataIdentifier`<sup>Required</sup> <a name="actionGetCustomDataIdentifier" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetCustomDataIdentifier"></a>

```typescript
public readonly actionGetCustomDataIdentifier: string;
```

- *Type:* string

[Read] macie2:GetCustomDataIdentifier.

---

##### `actionGetFindings`<sup>Required</sup> <a name="actionGetFindings" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetFindings"></a>

```typescript
public readonly actionGetFindings: string;
```

- *Type:* string

[Read] macie2:GetFindings.

---

##### `actionGetFindingsFilter`<sup>Required</sup> <a name="actionGetFindingsFilter" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetFindingsFilter"></a>

```typescript
public readonly actionGetFindingsFilter: string;
```

- *Type:* string

[Read] macie2:GetFindingsFilter.

---

##### `actionGetFindingsPublicationConfiguration`<sup>Required</sup> <a name="actionGetFindingsPublicationConfiguration" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetFindingsPublicationConfiguration"></a>

```typescript
public readonly actionGetFindingsPublicationConfiguration: string;
```

- *Type:* string

[Read] macie2:GetFindingsPublicationConfiguration.

---

##### `actionGetFindingStatistics`<sup>Required</sup> <a name="actionGetFindingStatistics" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetFindingStatistics"></a>

```typescript
public readonly actionGetFindingStatistics: string;
```

- *Type:* string

[Read] macie2:GetFindingStatistics.

---

##### `actionGetInvitationsCount`<sup>Required</sup> <a name="actionGetInvitationsCount" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetInvitationsCount"></a>

```typescript
public readonly actionGetInvitationsCount: string;
```

- *Type:* string

[Read] macie2:GetInvitationsCount.

---

##### `actionGetMacieSession`<sup>Required</sup> <a name="actionGetMacieSession" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetMacieSession"></a>

```typescript
public readonly actionGetMacieSession: string;
```

- *Type:* string

[Read] macie2:GetMacieSession.

---

##### `actionGetMasterAccount`<sup>Required</sup> <a name="actionGetMasterAccount" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetMasterAccount"></a>

```typescript
public readonly actionGetMasterAccount: string;
```

- *Type:* string

[Read] macie2:GetMasterAccount.

---

##### `actionGetMember`<sup>Required</sup> <a name="actionGetMember" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetMember"></a>

```typescript
public readonly actionGetMember: string;
```

- *Type:* string

[Read] macie2:GetMember.

---

##### `actionGetResourceProfile`<sup>Required</sup> <a name="actionGetResourceProfile" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetResourceProfile"></a>

```typescript
public readonly actionGetResourceProfile: string;
```

- *Type:* string

[Read] macie2:GetResourceProfile.

---

##### `actionGetRevealConfiguration`<sup>Required</sup> <a name="actionGetRevealConfiguration" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetRevealConfiguration"></a>

```typescript
public readonly actionGetRevealConfiguration: string;
```

- *Type:* string

[Read] macie2:GetRevealConfiguration.

---

##### `actionGetSensitiveDataOccurrences`<sup>Required</sup> <a name="actionGetSensitiveDataOccurrences" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetSensitiveDataOccurrences"></a>

```typescript
public readonly actionGetSensitiveDataOccurrences: string;
```

- *Type:* string

[Read] macie2:GetSensitiveDataOccurrences.

---

##### `actionGetSensitiveDataOccurrencesAvailability`<sup>Required</sup> <a name="actionGetSensitiveDataOccurrencesAvailability" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetSensitiveDataOccurrencesAvailability"></a>

```typescript
public readonly actionGetSensitiveDataOccurrencesAvailability: string;
```

- *Type:* string

[Read] macie2:GetSensitiveDataOccurrencesAvailability.

---

##### `actionGetSensitivityInspectionTemplate`<sup>Required</sup> <a name="actionGetSensitivityInspectionTemplate" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetSensitivityInspectionTemplate"></a>

```typescript
public readonly actionGetSensitivityInspectionTemplate: string;
```

- *Type:* string

[Read] macie2:GetSensitivityInspectionTemplate.

---

##### `actionGetUsageStatistics`<sup>Required</sup> <a name="actionGetUsageStatistics" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetUsageStatistics"></a>

```typescript
public readonly actionGetUsageStatistics: string;
```

- *Type:* string

[Read] macie2:GetUsageStatistics.

---

##### `actionGetUsageTotals`<sup>Required</sup> <a name="actionGetUsageTotals" id="@cdk_utils/iam.macie2.Macie2Actions.property.actionGetUsageTotals"></a>

```typescript
public readonly actionGetUsageTotals: string;
```

- *Type:* string

[Read] macie2:GetUsageTotals.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.macie2.Macie2Actions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.macie2.Macie2Actions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.macie2.Macie2Actions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.macie2.Macie2Actions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.macie2.Macie2Actions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetCustomDataIdentifiers`<sup>Required</sup> <a name="BatchGetCustomDataIdentifiers" id="@cdk_utils/iam.macie2.Macie2Actions.property.BatchGetCustomDataIdentifiers"></a>

```typescript
public readonly BatchGetCustomDataIdentifiers: string;
```

- *Type:* string

[Read] macie2:BatchGetCustomDataIdentifiers.

---

##### `BatchUpdateAutomatedDiscoveryAccounts`<sup>Required</sup> <a name="BatchUpdateAutomatedDiscoveryAccounts" id="@cdk_utils/iam.macie2.Macie2Actions.property.BatchUpdateAutomatedDiscoveryAccounts"></a>

```typescript
public readonly BatchUpdateAutomatedDiscoveryAccounts: string;
```

- *Type:* string

[Write] macie2:BatchUpdateAutomatedDiscoveryAccounts.

---

##### `CreateAllowList`<sup>Required</sup> <a name="CreateAllowList" id="@cdk_utils/iam.macie2.Macie2Actions.property.CreateAllowList"></a>

```typescript
public readonly CreateAllowList: string;
```

- *Type:* string

[Write] macie2:CreateAllowList.

---

##### `CreateClassificationJob`<sup>Required</sup> <a name="CreateClassificationJob" id="@cdk_utils/iam.macie2.Macie2Actions.property.CreateClassificationJob"></a>

```typescript
public readonly CreateClassificationJob: string;
```

- *Type:* string

[Write] macie2:CreateClassificationJob.

---

##### `CreateCustomDataIdentifier`<sup>Required</sup> <a name="CreateCustomDataIdentifier" id="@cdk_utils/iam.macie2.Macie2Actions.property.CreateCustomDataIdentifier"></a>

```typescript
public readonly CreateCustomDataIdentifier: string;
```

- *Type:* string

[Write] macie2:CreateCustomDataIdentifier.

---

##### `CreateFindingsFilter`<sup>Required</sup> <a name="CreateFindingsFilter" id="@cdk_utils/iam.macie2.Macie2Actions.property.CreateFindingsFilter"></a>

```typescript
public readonly CreateFindingsFilter: string;
```

- *Type:* string

[Write] macie2:CreateFindingsFilter.

---

##### `CreateInvitations`<sup>Required</sup> <a name="CreateInvitations" id="@cdk_utils/iam.macie2.Macie2Actions.property.CreateInvitations"></a>

```typescript
public readonly CreateInvitations: string;
```

- *Type:* string

[Write] macie2:CreateInvitations.

---

##### `CreateMember`<sup>Required</sup> <a name="CreateMember" id="@cdk_utils/iam.macie2.Macie2Actions.property.CreateMember"></a>

```typescript
public readonly CreateMember: string;
```

- *Type:* string

[Write] macie2:CreateMember.

---

##### `CreateSampleFindings`<sup>Required</sup> <a name="CreateSampleFindings" id="@cdk_utils/iam.macie2.Macie2Actions.property.CreateSampleFindings"></a>

```typescript
public readonly CreateSampleFindings: string;
```

- *Type:* string

[Write] macie2:CreateSampleFindings.

---

##### `DeclineInvitations`<sup>Required</sup> <a name="DeclineInvitations" id="@cdk_utils/iam.macie2.Macie2Actions.property.DeclineInvitations"></a>

```typescript
public readonly DeclineInvitations: string;
```

- *Type:* string

[Write] macie2:DeclineInvitations.

---

##### `DeleteAllowList`<sup>Required</sup> <a name="DeleteAllowList" id="@cdk_utils/iam.macie2.Macie2Actions.property.DeleteAllowList"></a>

```typescript
public readonly DeleteAllowList: string;
```

- *Type:* string

[Write] macie2:DeleteAllowList.

---

##### `DeleteCustomDataIdentifier`<sup>Required</sup> <a name="DeleteCustomDataIdentifier" id="@cdk_utils/iam.macie2.Macie2Actions.property.DeleteCustomDataIdentifier"></a>

```typescript
public readonly DeleteCustomDataIdentifier: string;
```

- *Type:* string

[Write] macie2:DeleteCustomDataIdentifier.

---

##### `DeleteFindingsFilter`<sup>Required</sup> <a name="DeleteFindingsFilter" id="@cdk_utils/iam.macie2.Macie2Actions.property.DeleteFindingsFilter"></a>

```typescript
public readonly DeleteFindingsFilter: string;
```

- *Type:* string

[Write] macie2:DeleteFindingsFilter.

---

##### `DeleteInvitations`<sup>Required</sup> <a name="DeleteInvitations" id="@cdk_utils/iam.macie2.Macie2Actions.property.DeleteInvitations"></a>

```typescript
public readonly DeleteInvitations: string;
```

- *Type:* string

[Write] macie2:DeleteInvitations.

---

##### `DeleteMember`<sup>Required</sup> <a name="DeleteMember" id="@cdk_utils/iam.macie2.Macie2Actions.property.DeleteMember"></a>

```typescript
public readonly DeleteMember: string;
```

- *Type:* string

[Write] macie2:DeleteMember.

---

##### `DescribeBuckets`<sup>Required</sup> <a name="DescribeBuckets" id="@cdk_utils/iam.macie2.Macie2Actions.property.DescribeBuckets"></a>

```typescript
public readonly DescribeBuckets: string;
```

- *Type:* string

[Read] macie2:DescribeBuckets.

---

##### `DescribeClassificationJob`<sup>Required</sup> <a name="DescribeClassificationJob" id="@cdk_utils/iam.macie2.Macie2Actions.property.DescribeClassificationJob"></a>

```typescript
public readonly DescribeClassificationJob: string;
```

- *Type:* string

[Read] macie2:DescribeClassificationJob.

---

##### `DescribeOrganizationConfiguration`<sup>Required</sup> <a name="DescribeOrganizationConfiguration" id="@cdk_utils/iam.macie2.Macie2Actions.property.DescribeOrganizationConfiguration"></a>

```typescript
public readonly DescribeOrganizationConfiguration: string;
```

- *Type:* string

[Read] macie2:DescribeOrganizationConfiguration.

---

##### `DisableMacie`<sup>Required</sup> <a name="DisableMacie" id="@cdk_utils/iam.macie2.Macie2Actions.property.DisableMacie"></a>

```typescript
public readonly DisableMacie: string;
```

- *Type:* string

[Write] macie2:DisableMacie.

---

##### `DisableOrganizationAdminAccount`<sup>Required</sup> <a name="DisableOrganizationAdminAccount" id="@cdk_utils/iam.macie2.Macie2Actions.property.DisableOrganizationAdminAccount"></a>

```typescript
public readonly DisableOrganizationAdminAccount: string;
```

- *Type:* string

[Write] macie2:DisableOrganizationAdminAccount.

---

##### `DisassociateFromAdministratorAccount`<sup>Required</sup> <a name="DisassociateFromAdministratorAccount" id="@cdk_utils/iam.macie2.Macie2Actions.property.DisassociateFromAdministratorAccount"></a>

```typescript
public readonly DisassociateFromAdministratorAccount: string;
```

- *Type:* string

[Write] macie2:DisassociateFromAdministratorAccount.

---

##### `DisassociateFromMasterAccount`<sup>Required</sup> <a name="DisassociateFromMasterAccount" id="@cdk_utils/iam.macie2.Macie2Actions.property.DisassociateFromMasterAccount"></a>

```typescript
public readonly DisassociateFromMasterAccount: string;
```

- *Type:* string

[Write] macie2:DisassociateFromMasterAccount.

---

##### `DisassociateMember`<sup>Required</sup> <a name="DisassociateMember" id="@cdk_utils/iam.macie2.Macie2Actions.property.DisassociateMember"></a>

```typescript
public readonly DisassociateMember: string;
```

- *Type:* string

[Write] macie2:DisassociateMember.

---

##### `EnableMacie`<sup>Required</sup> <a name="EnableMacie" id="@cdk_utils/iam.macie2.Macie2Actions.property.EnableMacie"></a>

```typescript
public readonly EnableMacie: string;
```

- *Type:* string

[Write] macie2:EnableMacie.

---

##### `EnableOrganizationAdminAccount`<sup>Required</sup> <a name="EnableOrganizationAdminAccount" id="@cdk_utils/iam.macie2.Macie2Actions.property.EnableOrganizationAdminAccount"></a>

```typescript
public readonly EnableOrganizationAdminAccount: string;
```

- *Type:* string

[Write] macie2:EnableOrganizationAdminAccount.

---

##### `ListAllowLists`<sup>Required</sup> <a name="ListAllowLists" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListAllowLists"></a>

```typescript
public readonly ListAllowLists: string;
```

- *Type:* string

[List] macie2:ListAllowLists.

---

##### `ListAutomatedDiscoveryAccounts`<sup>Required</sup> <a name="ListAutomatedDiscoveryAccounts" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListAutomatedDiscoveryAccounts"></a>

```typescript
public readonly ListAutomatedDiscoveryAccounts: string;
```

- *Type:* string

[List] macie2:ListAutomatedDiscoveryAccounts.

---

##### `ListClassificationJobs`<sup>Required</sup> <a name="ListClassificationJobs" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListClassificationJobs"></a>

```typescript
public readonly ListClassificationJobs: string;
```

- *Type:* string

[List] macie2:ListClassificationJobs.

---

##### `ListClassificationScopes`<sup>Required</sup> <a name="ListClassificationScopes" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListClassificationScopes"></a>

```typescript
public readonly ListClassificationScopes: string;
```

- *Type:* string

[List] macie2:ListClassificationScopes.

---

##### `ListCustomDataIdentifiers`<sup>Required</sup> <a name="ListCustomDataIdentifiers" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListCustomDataIdentifiers"></a>

```typescript
public readonly ListCustomDataIdentifiers: string;
```

- *Type:* string

[List] macie2:ListCustomDataIdentifiers.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListFindings"></a>

```typescript
public readonly ListFindings: string;
```

- *Type:* string

[List] macie2:ListFindings.

---

##### `ListFindingsFilters`<sup>Required</sup> <a name="ListFindingsFilters" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListFindingsFilters"></a>

```typescript
public readonly ListFindingsFilters: string;
```

- *Type:* string

[List] macie2:ListFindingsFilters.

---

##### `ListInvitations`<sup>Required</sup> <a name="ListInvitations" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListInvitations"></a>

```typescript
public readonly ListInvitations: string;
```

- *Type:* string

[List] macie2:ListInvitations.

---

##### `ListManagedDataIdentifiers`<sup>Required</sup> <a name="ListManagedDataIdentifiers" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListManagedDataIdentifiers"></a>

```typescript
public readonly ListManagedDataIdentifiers: string;
```

- *Type:* string

[List] macie2:ListManagedDataIdentifiers.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListMembers"></a>

```typescript
public readonly ListMembers: string;
```

- *Type:* string

[List] macie2:ListMembers.

---

##### `ListOrganizationAdminAccounts`<sup>Required</sup> <a name="ListOrganizationAdminAccounts" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListOrganizationAdminAccounts"></a>

```typescript
public readonly ListOrganizationAdminAccounts: string;
```

- *Type:* string

[List] macie2:ListOrganizationAdminAccounts.

---

##### `ListResourceProfileArtifacts`<sup>Required</sup> <a name="ListResourceProfileArtifacts" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListResourceProfileArtifacts"></a>

```typescript
public readonly ListResourceProfileArtifacts: string;
```

- *Type:* string

[List] macie2:ListResourceProfileArtifacts.

---

##### `ListResourceProfileDetections`<sup>Required</sup> <a name="ListResourceProfileDetections" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListResourceProfileDetections"></a>

```typescript
public readonly ListResourceProfileDetections: string;
```

- *Type:* string

[List] macie2:ListResourceProfileDetections.

---

##### `ListSensitivityInspectionTemplates`<sup>Required</sup> <a name="ListSensitivityInspectionTemplates" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListSensitivityInspectionTemplates"></a>

```typescript
public readonly ListSensitivityInspectionTemplates: string;
```

- *Type:* string

[List] macie2:ListSensitivityInspectionTemplates.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.macie2.Macie2Actions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] macie2:ListTagsForResource.

---

##### `PutClassificationExportConfiguration`<sup>Required</sup> <a name="PutClassificationExportConfiguration" id="@cdk_utils/iam.macie2.Macie2Actions.property.PutClassificationExportConfiguration"></a>

```typescript
public readonly PutClassificationExportConfiguration: string;
```

- *Type:* string

[Write] macie2:PutClassificationExportConfiguration.

---

##### `PutFindingsPublicationConfiguration`<sup>Required</sup> <a name="PutFindingsPublicationConfiguration" id="@cdk_utils/iam.macie2.Macie2Actions.property.PutFindingsPublicationConfiguration"></a>

```typescript
public readonly PutFindingsPublicationConfiguration: string;
```

- *Type:* string

[Write] macie2:PutFindingsPublicationConfiguration.

---

##### `SearchResources`<sup>Required</sup> <a name="SearchResources" id="@cdk_utils/iam.macie2.Macie2Actions.property.SearchResources"></a>

```typescript
public readonly SearchResources: string;
```

- *Type:* string

[Read] macie2:SearchResources.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.macie2.Macie2Actions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.macie2.Macie2Actions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] macie2:TagResource.

---

##### `TestCustomDataIdentifier`<sup>Required</sup> <a name="TestCustomDataIdentifier" id="@cdk_utils/iam.macie2.Macie2Actions.property.TestCustomDataIdentifier"></a>

```typescript
public readonly TestCustomDataIdentifier: string;
```

- *Type:* string

[Write] macie2:TestCustomDataIdentifier.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.macie2.Macie2Actions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] macie2:UntagResource.

---

##### `UpdateAllowList`<sup>Required</sup> <a name="UpdateAllowList" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateAllowList"></a>

```typescript
public readonly UpdateAllowList: string;
```

- *Type:* string

[Write] macie2:UpdateAllowList.

---

##### `UpdateAutomatedDiscoveryConfiguration`<sup>Required</sup> <a name="UpdateAutomatedDiscoveryConfiguration" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateAutomatedDiscoveryConfiguration"></a>

```typescript
public readonly UpdateAutomatedDiscoveryConfiguration: string;
```

- *Type:* string

[Write] macie2:UpdateAutomatedDiscoveryConfiguration.

---

##### `UpdateClassificationJob`<sup>Required</sup> <a name="UpdateClassificationJob" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateClassificationJob"></a>

```typescript
public readonly UpdateClassificationJob: string;
```

- *Type:* string

[Write] macie2:UpdateClassificationJob.

---

##### `UpdateClassificationScope`<sup>Required</sup> <a name="UpdateClassificationScope" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateClassificationScope"></a>

```typescript
public readonly UpdateClassificationScope: string;
```

- *Type:* string

[Write] macie2:UpdateClassificationScope.

---

##### `UpdateFindingsFilter`<sup>Required</sup> <a name="UpdateFindingsFilter" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateFindingsFilter"></a>

```typescript
public readonly UpdateFindingsFilter: string;
```

- *Type:* string

[Write] macie2:UpdateFindingsFilter.

---

##### `UpdateMacieSession`<sup>Required</sup> <a name="UpdateMacieSession" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateMacieSession"></a>

```typescript
public readonly UpdateMacieSession: string;
```

- *Type:* string

[Write] macie2:UpdateMacieSession.

---

##### `UpdateMemberSession`<sup>Required</sup> <a name="UpdateMemberSession" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateMemberSession"></a>

```typescript
public readonly UpdateMemberSession: string;
```

- *Type:* string

[Write] macie2:UpdateMemberSession.

---

##### `UpdateOrganizationConfiguration`<sup>Required</sup> <a name="UpdateOrganizationConfiguration" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateOrganizationConfiguration"></a>

```typescript
public readonly UpdateOrganizationConfiguration: string;
```

- *Type:* string

[Write] macie2:UpdateOrganizationConfiguration.

---

##### `UpdateResourceProfile`<sup>Required</sup> <a name="UpdateResourceProfile" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateResourceProfile"></a>

```typescript
public readonly UpdateResourceProfile: string;
```

- *Type:* string

[Write] macie2:UpdateResourceProfile.

---

##### `UpdateResourceProfileDetections`<sup>Required</sup> <a name="UpdateResourceProfileDetections" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateResourceProfileDetections"></a>

```typescript
public readonly UpdateResourceProfileDetections: string;
```

- *Type:* string

[Write] macie2:UpdateResourceProfileDetections.

---

##### `UpdateRevealConfiguration`<sup>Required</sup> <a name="UpdateRevealConfiguration" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateRevealConfiguration"></a>

```typescript
public readonly UpdateRevealConfiguration: string;
```

- *Type:* string

[Write] macie2:UpdateRevealConfiguration.

---

##### `UpdateSensitivityInspectionTemplate`<sup>Required</sup> <a name="UpdateSensitivityInspectionTemplate" id="@cdk_utils/iam.macie2.Macie2Actions.property.UpdateSensitivityInspectionTemplate"></a>

```typescript
public readonly UpdateSensitivityInspectionTemplate: string;
```

- *Type:* string

[Write] macie2:UpdateSensitivityInspectionTemplate.

---

### Macie2Conditions <a name="Macie2Conditions" id="@cdk_utils/iam.macie2.Macie2Conditions"></a>

Condition key constants and builders for macie2.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.macie2.Macie2Conditions.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

new macie2.Macie2Conditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.macie2.Macie2Conditions.requestTag"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Conditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.macie2.Macie2Conditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.macie2.Macie2Conditions.resourceTag"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Conditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.macie2.Macie2Conditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.macie2.Macie2Conditions.tagKeys"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Conditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.macie2.Macie2Conditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.CreateAllowListConditionKeys">CreateAllowListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAllowList action. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.CreateClassificationJobConditionKeys">CreateClassificationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateClassificationJob action. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.CreateCustomDataIdentifierConditionKeys">CreateCustomDataIdentifierConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomDataIdentifier action. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.CreateFindingsFilterConditionKeys">CreateFindingsFilterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFindingsFilter action. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.CreateMemberConditionKeys">CreateMemberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMember action. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.UpdateClassificationJobConditionKeys">UpdateClassificationJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateClassificationJob action. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Conditions.property.UpdateFindingsFilterConditionKeys">UpdateFindingsFilterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateFindingsFilter action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.macie2.Macie2Conditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.macie2.Macie2Conditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.macie2.Macie2Conditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAllowListConditionKeys`<sup>Required</sup> <a name="CreateAllowListConditionKeys" id="@cdk_utils/iam.macie2.Macie2Conditions.property.CreateAllowListConditionKeys"></a>

```typescript
public readonly CreateAllowListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAllowList action.

---

##### `CreateClassificationJobConditionKeys`<sup>Required</sup> <a name="CreateClassificationJobConditionKeys" id="@cdk_utils/iam.macie2.Macie2Conditions.property.CreateClassificationJobConditionKeys"></a>

```typescript
public readonly CreateClassificationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateClassificationJob action.

---

##### `CreateCustomDataIdentifierConditionKeys`<sup>Required</sup> <a name="CreateCustomDataIdentifierConditionKeys" id="@cdk_utils/iam.macie2.Macie2Conditions.property.CreateCustomDataIdentifierConditionKeys"></a>

```typescript
public readonly CreateCustomDataIdentifierConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomDataIdentifier action.

---

##### `CreateFindingsFilterConditionKeys`<sup>Required</sup> <a name="CreateFindingsFilterConditionKeys" id="@cdk_utils/iam.macie2.Macie2Conditions.property.CreateFindingsFilterConditionKeys"></a>

```typescript
public readonly CreateFindingsFilterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFindingsFilter action.

---

##### `CreateMemberConditionKeys`<sup>Required</sup> <a name="CreateMemberConditionKeys" id="@cdk_utils/iam.macie2.Macie2Conditions.property.CreateMemberConditionKeys"></a>

```typescript
public readonly CreateMemberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMember action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.macie2.Macie2Conditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.macie2.Macie2Conditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateClassificationJobConditionKeys`<sup>Required</sup> <a name="UpdateClassificationJobConditionKeys" id="@cdk_utils/iam.macie2.Macie2Conditions.property.UpdateClassificationJobConditionKeys"></a>

```typescript
public readonly UpdateClassificationJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateClassificationJob action.

---

##### `UpdateFindingsFilterConditionKeys`<sup>Required</sup> <a name="UpdateFindingsFilterConditionKeys" id="@cdk_utils/iam.macie2.Macie2Conditions.property.UpdateFindingsFilterConditionKeys"></a>

```typescript
public readonly UpdateFindingsFilterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateFindingsFilter action.

---

### Macie2Operations <a name="Macie2Operations" id="@cdk_utils/iam.macie2.Macie2Operations"></a>

API operation to required IAM actions mapping for macie2.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.macie2.Macie2Operations.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

new macie2.Macie2Operations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.AcceptInvitation">AcceptInvitation</a></code> | <code>string[]</code> | IAM actions required for the AcceptInvitation API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.BatchGetCustomDataIdentifiers">BatchGetCustomDataIdentifiers</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCustomDataIdentifiers API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.BatchUpdateAutomatedDiscoveryAccounts">BatchUpdateAutomatedDiscoveryAccounts</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateAutomatedDiscoveryAccounts API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.CreateAllowList">CreateAllowList</a></code> | <code>string[]</code> | IAM actions required for the CreateAllowList API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.CreateClassificationJob">CreateClassificationJob</a></code> | <code>string[]</code> | IAM actions required for the CreateClassificationJob API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.CreateCustomDataIdentifier">CreateCustomDataIdentifier</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomDataIdentifier API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.CreateFindingsFilter">CreateFindingsFilter</a></code> | <code>string[]</code> | IAM actions required for the CreateFindingsFilter API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.CreateInvitations">CreateInvitations</a></code> | <code>string[]</code> | IAM actions required for the CreateInvitations API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.CreateMember">CreateMember</a></code> | <code>string[]</code> | IAM actions required for the CreateMember API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.CreateSampleFindings">CreateSampleFindings</a></code> | <code>string[]</code> | IAM actions required for the CreateSampleFindings API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DeclineInvitations">DeclineInvitations</a></code> | <code>string[]</code> | IAM actions required for the DeclineInvitations API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DeleteAllowList">DeleteAllowList</a></code> | <code>string[]</code> | IAM actions required for the DeleteAllowList API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DeleteCustomDataIdentifier">DeleteCustomDataIdentifier</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomDataIdentifier API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DeleteFindingsFilter">DeleteFindingsFilter</a></code> | <code>string[]</code> | IAM actions required for the DeleteFindingsFilter API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DeleteInvitations">DeleteInvitations</a></code> | <code>string[]</code> | IAM actions required for the DeleteInvitations API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DeleteMember">DeleteMember</a></code> | <code>string[]</code> | IAM actions required for the DeleteMember API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DescribeBuckets">DescribeBuckets</a></code> | <code>string[]</code> | IAM actions required for the DescribeBuckets API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DescribeClassificationJob">DescribeClassificationJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeClassificationJob API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DescribeOrganizationConfiguration">DescribeOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DisableMacie">DisableMacie</a></code> | <code>string[]</code> | IAM actions required for the DisableMacie API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DisableOrganizationAdminAccount">DisableOrganizationAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the DisableOrganizationAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFromAdministratorAccount API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DisassociateFromMasterAccount">DisassociateFromMasterAccount</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFromMasterAccount API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.DisassociateMember">DisassociateMember</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMember API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.EnableMacie">EnableMacie</a></code> | <code>string[]</code> | IAM actions required for the EnableMacie API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.EnableOrganizationAdminAccount">EnableOrganizationAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the EnableOrganizationAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListAllowLists">ListAllowLists</a></code> | <code>string[]</code> | IAM actions required for the ListAllowLists API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListAutomatedDiscoveryAccounts">ListAutomatedDiscoveryAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListAutomatedDiscoveryAccounts API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListClassificationJobs">ListClassificationJobs</a></code> | <code>string[]</code> | IAM actions required for the ListClassificationJobs API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListClassificationScopes">ListClassificationScopes</a></code> | <code>string[]</code> | IAM actions required for the ListClassificationScopes API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListCustomDataIdentifiers">ListCustomDataIdentifiers</a></code> | <code>string[]</code> | IAM actions required for the ListCustomDataIdentifiers API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListFindings">ListFindings</a></code> | <code>string[]</code> | IAM actions required for the ListFindings API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListFindingsFilters">ListFindingsFilters</a></code> | <code>string[]</code> | IAM actions required for the ListFindingsFilters API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListInvitations">ListInvitations</a></code> | <code>string[]</code> | IAM actions required for the ListInvitations API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListManagedDataIdentifiers">ListManagedDataIdentifiers</a></code> | <code>string[]</code> | IAM actions required for the ListManagedDataIdentifiers API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListMembers">ListMembers</a></code> | <code>string[]</code> | IAM actions required for the ListMembers API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListOrganizationAdminAccounts">ListOrganizationAdminAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationAdminAccounts API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListResourceProfileArtifacts">ListResourceProfileArtifacts</a></code> | <code>string[]</code> | IAM actions required for the ListResourceProfileArtifacts API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListResourceProfileDetections">ListResourceProfileDetections</a></code> | <code>string[]</code> | IAM actions required for the ListResourceProfileDetections API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListSensitivityInspectionTemplates">ListSensitivityInspectionTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListSensitivityInspectionTemplates API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetAdministratorAccount">opGetAdministratorAccount</a></code> | <code>string[]</code> | IAM actions required for the GetAdministratorAccount API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetAllowList">opGetAllowList</a></code> | <code>string[]</code> | IAM actions required for the GetAllowList API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetAutomatedDiscoveryConfiguration">opGetAutomatedDiscoveryConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetAutomatedDiscoveryConfiguration API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetBucketStatistics">opGetBucketStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetBucketStatistics API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetClassificationExportConfiguration">opGetClassificationExportConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetClassificationExportConfiguration API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetClassificationScope">opGetClassificationScope</a></code> | <code>string[]</code> | IAM actions required for the GetClassificationScope API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetCustomDataIdentifier">opGetCustomDataIdentifier</a></code> | <code>string[]</code> | IAM actions required for the GetCustomDataIdentifier API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetFindings">opGetFindings</a></code> | <code>string[]</code> | IAM actions required for the GetFindings API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetFindingsFilter">opGetFindingsFilter</a></code> | <code>string[]</code> | IAM actions required for the GetFindingsFilter API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetFindingsPublicationConfiguration">opGetFindingsPublicationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetFindingsPublicationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetFindingStatistics">opGetFindingStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetFindingStatistics API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetInvitationsCount">opGetInvitationsCount</a></code> | <code>string[]</code> | IAM actions required for the GetInvitationsCount API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetMacieSession">opGetMacieSession</a></code> | <code>string[]</code> | IAM actions required for the GetMacieSession API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetMasterAccount">opGetMasterAccount</a></code> | <code>string[]</code> | IAM actions required for the GetMasterAccount API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetMember">opGetMember</a></code> | <code>string[]</code> | IAM actions required for the GetMember API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetResourceProfile">opGetResourceProfile</a></code> | <code>string[]</code> | IAM actions required for the GetResourceProfile API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetRevealConfiguration">opGetRevealConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetRevealConfiguration API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetSensitiveDataOccurrences">opGetSensitiveDataOccurrences</a></code> | <code>string[]</code> | IAM actions required for the GetSensitiveDataOccurrences API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetSensitiveDataOccurrencesAvailability">opGetSensitiveDataOccurrencesAvailability</a></code> | <code>string[]</code> | IAM actions required for the GetSensitiveDataOccurrencesAvailability API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetSensitivityInspectionTemplate">opGetSensitivityInspectionTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetSensitivityInspectionTemplate API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetUsageStatistics">opGetUsageStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetUsageStatistics API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.opGetUsageTotals">opGetUsageTotals</a></code> | <code>string[]</code> | IAM actions required for the GetUsageTotals API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.PutClassificationExportConfiguration">PutClassificationExportConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutClassificationExportConfiguration API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.PutFindingsPublicationConfiguration">PutFindingsPublicationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutFindingsPublicationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.SearchResources">SearchResources</a></code> | <code>string[]</code> | IAM actions required for the SearchResources API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.TestCustomDataIdentifier">TestCustomDataIdentifier</a></code> | <code>string[]</code> | IAM actions required for the TestCustomDataIdentifier API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateAllowList">UpdateAllowList</a></code> | <code>string[]</code> | IAM actions required for the UpdateAllowList API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateAutomatedDiscoveryConfiguration">UpdateAutomatedDiscoveryConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutomatedDiscoveryConfiguration API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateClassificationJob">UpdateClassificationJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateClassificationJob API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateClassificationScope">UpdateClassificationScope</a></code> | <code>string[]</code> | IAM actions required for the UpdateClassificationScope API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateFindingsFilter">UpdateFindingsFilter</a></code> | <code>string[]</code> | IAM actions required for the UpdateFindingsFilter API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateMacieSession">UpdateMacieSession</a></code> | <code>string[]</code> | IAM actions required for the UpdateMacieSession API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateMemberSession">UpdateMemberSession</a></code> | <code>string[]</code> | IAM actions required for the UpdateMemberSession API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateOrganizationConfiguration">UpdateOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateResourceProfile">UpdateResourceProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourceProfile API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateResourceProfileDetections">UpdateResourceProfileDetections</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourceProfileDetections API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateRevealConfiguration">UpdateRevealConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateRevealConfiguration API call. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Operations.property.UpdateSensitivityInspectionTemplate">UpdateSensitivityInspectionTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateSensitivityInspectionTemplate API call. |

---

##### `AcceptInvitation`<sup>Required</sup> <a name="AcceptInvitation" id="@cdk_utils/iam.macie2.Macie2Operations.property.AcceptInvitation"></a>

```typescript
public readonly AcceptInvitation: string[];
```

- *Type:* string[]

IAM actions required for the AcceptInvitation API call.

---

##### `BatchGetCustomDataIdentifiers`<sup>Required</sup> <a name="BatchGetCustomDataIdentifiers" id="@cdk_utils/iam.macie2.Macie2Operations.property.BatchGetCustomDataIdentifiers"></a>

```typescript
public readonly BatchGetCustomDataIdentifiers: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCustomDataIdentifiers API call.

---

##### `BatchUpdateAutomatedDiscoveryAccounts`<sup>Required</sup> <a name="BatchUpdateAutomatedDiscoveryAccounts" id="@cdk_utils/iam.macie2.Macie2Operations.property.BatchUpdateAutomatedDiscoveryAccounts"></a>

```typescript
public readonly BatchUpdateAutomatedDiscoveryAccounts: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateAutomatedDiscoveryAccounts API call.

---

##### `CreateAllowList`<sup>Required</sup> <a name="CreateAllowList" id="@cdk_utils/iam.macie2.Macie2Operations.property.CreateAllowList"></a>

```typescript
public readonly CreateAllowList: string[];
```

- *Type:* string[]

IAM actions required for the CreateAllowList API call.

---

##### `CreateClassificationJob`<sup>Required</sup> <a name="CreateClassificationJob" id="@cdk_utils/iam.macie2.Macie2Operations.property.CreateClassificationJob"></a>

```typescript
public readonly CreateClassificationJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateClassificationJob API call.

---

##### `CreateCustomDataIdentifier`<sup>Required</sup> <a name="CreateCustomDataIdentifier" id="@cdk_utils/iam.macie2.Macie2Operations.property.CreateCustomDataIdentifier"></a>

```typescript
public readonly CreateCustomDataIdentifier: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomDataIdentifier API call.

---

##### `CreateFindingsFilter`<sup>Required</sup> <a name="CreateFindingsFilter" id="@cdk_utils/iam.macie2.Macie2Operations.property.CreateFindingsFilter"></a>

```typescript
public readonly CreateFindingsFilter: string[];
```

- *Type:* string[]

IAM actions required for the CreateFindingsFilter API call.

---

##### `CreateInvitations`<sup>Required</sup> <a name="CreateInvitations" id="@cdk_utils/iam.macie2.Macie2Operations.property.CreateInvitations"></a>

```typescript
public readonly CreateInvitations: string[];
```

- *Type:* string[]

IAM actions required for the CreateInvitations API call.

---

##### `CreateMember`<sup>Required</sup> <a name="CreateMember" id="@cdk_utils/iam.macie2.Macie2Operations.property.CreateMember"></a>

```typescript
public readonly CreateMember: string[];
```

- *Type:* string[]

IAM actions required for the CreateMember API call.

---

##### `CreateSampleFindings`<sup>Required</sup> <a name="CreateSampleFindings" id="@cdk_utils/iam.macie2.Macie2Operations.property.CreateSampleFindings"></a>

```typescript
public readonly CreateSampleFindings: string[];
```

- *Type:* string[]

IAM actions required for the CreateSampleFindings API call.

---

##### `DeclineInvitations`<sup>Required</sup> <a name="DeclineInvitations" id="@cdk_utils/iam.macie2.Macie2Operations.property.DeclineInvitations"></a>

```typescript
public readonly DeclineInvitations: string[];
```

- *Type:* string[]

IAM actions required for the DeclineInvitations API call.

---

##### `DeleteAllowList`<sup>Required</sup> <a name="DeleteAllowList" id="@cdk_utils/iam.macie2.Macie2Operations.property.DeleteAllowList"></a>

```typescript
public readonly DeleteAllowList: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAllowList API call.

---

##### `DeleteCustomDataIdentifier`<sup>Required</sup> <a name="DeleteCustomDataIdentifier" id="@cdk_utils/iam.macie2.Macie2Operations.property.DeleteCustomDataIdentifier"></a>

```typescript
public readonly DeleteCustomDataIdentifier: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomDataIdentifier API call.

---

##### `DeleteFindingsFilter`<sup>Required</sup> <a name="DeleteFindingsFilter" id="@cdk_utils/iam.macie2.Macie2Operations.property.DeleteFindingsFilter"></a>

```typescript
public readonly DeleteFindingsFilter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFindingsFilter API call.

---

##### `DeleteInvitations`<sup>Required</sup> <a name="DeleteInvitations" id="@cdk_utils/iam.macie2.Macie2Operations.property.DeleteInvitations"></a>

```typescript
public readonly DeleteInvitations: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInvitations API call.

---

##### `DeleteMember`<sup>Required</sup> <a name="DeleteMember" id="@cdk_utils/iam.macie2.Macie2Operations.property.DeleteMember"></a>

```typescript
public readonly DeleteMember: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMember API call.

---

##### `DescribeBuckets`<sup>Required</sup> <a name="DescribeBuckets" id="@cdk_utils/iam.macie2.Macie2Operations.property.DescribeBuckets"></a>

```typescript
public readonly DescribeBuckets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBuckets API call.

---

##### `DescribeClassificationJob`<sup>Required</sup> <a name="DescribeClassificationJob" id="@cdk_utils/iam.macie2.Macie2Operations.property.DescribeClassificationJob"></a>

```typescript
public readonly DescribeClassificationJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClassificationJob API call.

---

##### `DescribeOrganizationConfiguration`<sup>Required</sup> <a name="DescribeOrganizationConfiguration" id="@cdk_utils/iam.macie2.Macie2Operations.property.DescribeOrganizationConfiguration"></a>

```typescript
public readonly DescribeOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationConfiguration API call.

---

##### `DisableMacie`<sup>Required</sup> <a name="DisableMacie" id="@cdk_utils/iam.macie2.Macie2Operations.property.DisableMacie"></a>

```typescript
public readonly DisableMacie: string[];
```

- *Type:* string[]

IAM actions required for the DisableMacie API call.

---

##### `DisableOrganizationAdminAccount`<sup>Required</sup> <a name="DisableOrganizationAdminAccount" id="@cdk_utils/iam.macie2.Macie2Operations.property.DisableOrganizationAdminAccount"></a>

```typescript
public readonly DisableOrganizationAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisableOrganizationAdminAccount API call.

---

##### `DisassociateFromAdministratorAccount`<sup>Required</sup> <a name="DisassociateFromAdministratorAccount" id="@cdk_utils/iam.macie2.Macie2Operations.property.DisassociateFromAdministratorAccount"></a>

```typescript
public readonly DisassociateFromAdministratorAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFromAdministratorAccount API call.

---

##### `DisassociateFromMasterAccount`<sup>Required</sup> <a name="DisassociateFromMasterAccount" id="@cdk_utils/iam.macie2.Macie2Operations.property.DisassociateFromMasterAccount"></a>

```typescript
public readonly DisassociateFromMasterAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFromMasterAccount API call.

---

##### `DisassociateMember`<sup>Required</sup> <a name="DisassociateMember" id="@cdk_utils/iam.macie2.Macie2Operations.property.DisassociateMember"></a>

```typescript
public readonly DisassociateMember: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMember API call.

---

##### `EnableMacie`<sup>Required</sup> <a name="EnableMacie" id="@cdk_utils/iam.macie2.Macie2Operations.property.EnableMacie"></a>

```typescript
public readonly EnableMacie: string[];
```

- *Type:* string[]

IAM actions required for the EnableMacie API call.

---

##### `EnableOrganizationAdminAccount`<sup>Required</sup> <a name="EnableOrganizationAdminAccount" id="@cdk_utils/iam.macie2.Macie2Operations.property.EnableOrganizationAdminAccount"></a>

```typescript
public readonly EnableOrganizationAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the EnableOrganizationAdminAccount API call.

---

##### `ListAllowLists`<sup>Required</sup> <a name="ListAllowLists" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListAllowLists"></a>

```typescript
public readonly ListAllowLists: string[];
```

- *Type:* string[]

IAM actions required for the ListAllowLists API call.

---

##### `ListAutomatedDiscoveryAccounts`<sup>Required</sup> <a name="ListAutomatedDiscoveryAccounts" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListAutomatedDiscoveryAccounts"></a>

```typescript
public readonly ListAutomatedDiscoveryAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomatedDiscoveryAccounts API call.

---

##### `ListClassificationJobs`<sup>Required</sup> <a name="ListClassificationJobs" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListClassificationJobs"></a>

```typescript
public readonly ListClassificationJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListClassificationJobs API call.

---

##### `ListClassificationScopes`<sup>Required</sup> <a name="ListClassificationScopes" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListClassificationScopes"></a>

```typescript
public readonly ListClassificationScopes: string[];
```

- *Type:* string[]

IAM actions required for the ListClassificationScopes API call.

---

##### `ListCustomDataIdentifiers`<sup>Required</sup> <a name="ListCustomDataIdentifiers" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListCustomDataIdentifiers"></a>

```typescript
public readonly ListCustomDataIdentifiers: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomDataIdentifiers API call.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListFindings"></a>

```typescript
public readonly ListFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListFindings API call.

---

##### `ListFindingsFilters`<sup>Required</sup> <a name="ListFindingsFilters" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListFindingsFilters"></a>

```typescript
public readonly ListFindingsFilters: string[];
```

- *Type:* string[]

IAM actions required for the ListFindingsFilters API call.

---

##### `ListInvitations`<sup>Required</sup> <a name="ListInvitations" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListInvitations"></a>

```typescript
public readonly ListInvitations: string[];
```

- *Type:* string[]

IAM actions required for the ListInvitations API call.

---

##### `ListManagedDataIdentifiers`<sup>Required</sup> <a name="ListManagedDataIdentifiers" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListManagedDataIdentifiers"></a>

```typescript
public readonly ListManagedDataIdentifiers: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedDataIdentifiers API call.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListMembers"></a>

```typescript
public readonly ListMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListMembers API call.

---

##### `ListOrganizationAdminAccounts`<sup>Required</sup> <a name="ListOrganizationAdminAccounts" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListOrganizationAdminAccounts"></a>

```typescript
public readonly ListOrganizationAdminAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationAdminAccounts API call.

---

##### `ListResourceProfileArtifacts`<sup>Required</sup> <a name="ListResourceProfileArtifacts" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListResourceProfileArtifacts"></a>

```typescript
public readonly ListResourceProfileArtifacts: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceProfileArtifacts API call.

---

##### `ListResourceProfileDetections`<sup>Required</sup> <a name="ListResourceProfileDetections" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListResourceProfileDetections"></a>

```typescript
public readonly ListResourceProfileDetections: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceProfileDetections API call.

---

##### `ListSensitivityInspectionTemplates`<sup>Required</sup> <a name="ListSensitivityInspectionTemplates" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListSensitivityInspectionTemplates"></a>

```typescript
public readonly ListSensitivityInspectionTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListSensitivityInspectionTemplates API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.macie2.Macie2Operations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAdministratorAccount`<sup>Required</sup> <a name="opGetAdministratorAccount" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetAdministratorAccount"></a>

```typescript
public readonly opGetAdministratorAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetAdministratorAccount API call.

---

##### `opGetAllowList`<sup>Required</sup> <a name="opGetAllowList" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetAllowList"></a>

```typescript
public readonly opGetAllowList: string[];
```

- *Type:* string[]

IAM actions required for the GetAllowList API call.

---

##### `opGetAutomatedDiscoveryConfiguration`<sup>Required</sup> <a name="opGetAutomatedDiscoveryConfiguration" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetAutomatedDiscoveryConfiguration"></a>

```typescript
public readonly opGetAutomatedDiscoveryConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomatedDiscoveryConfiguration API call.

---

##### `opGetBucketStatistics`<sup>Required</sup> <a name="opGetBucketStatistics" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetBucketStatistics"></a>

```typescript
public readonly opGetBucketStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetBucketStatistics API call.

---

##### `opGetClassificationExportConfiguration`<sup>Required</sup> <a name="opGetClassificationExportConfiguration" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetClassificationExportConfiguration"></a>

```typescript
public readonly opGetClassificationExportConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetClassificationExportConfiguration API call.

---

##### `opGetClassificationScope`<sup>Required</sup> <a name="opGetClassificationScope" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetClassificationScope"></a>

```typescript
public readonly opGetClassificationScope: string[];
```

- *Type:* string[]

IAM actions required for the GetClassificationScope API call.

---

##### `opGetCustomDataIdentifier`<sup>Required</sup> <a name="opGetCustomDataIdentifier" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetCustomDataIdentifier"></a>

```typescript
public readonly opGetCustomDataIdentifier: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomDataIdentifier API call.

---

##### `opGetFindings`<sup>Required</sup> <a name="opGetFindings" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetFindings"></a>

```typescript
public readonly opGetFindings: string[];
```

- *Type:* string[]

IAM actions required for the GetFindings API call.

---

##### `opGetFindingsFilter`<sup>Required</sup> <a name="opGetFindingsFilter" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetFindingsFilter"></a>

```typescript
public readonly opGetFindingsFilter: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingsFilter API call.

---

##### `opGetFindingsPublicationConfiguration`<sup>Required</sup> <a name="opGetFindingsPublicationConfiguration" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetFindingsPublicationConfiguration"></a>

```typescript
public readonly opGetFindingsPublicationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingsPublicationConfiguration API call.

---

##### `opGetFindingStatistics`<sup>Required</sup> <a name="opGetFindingStatistics" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetFindingStatistics"></a>

```typescript
public readonly opGetFindingStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingStatistics API call.

---

##### `opGetInvitationsCount`<sup>Required</sup> <a name="opGetInvitationsCount" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetInvitationsCount"></a>

```typescript
public readonly opGetInvitationsCount: string[];
```

- *Type:* string[]

IAM actions required for the GetInvitationsCount API call.

---

##### `opGetMacieSession`<sup>Required</sup> <a name="opGetMacieSession" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetMacieSession"></a>

```typescript
public readonly opGetMacieSession: string[];
```

- *Type:* string[]

IAM actions required for the GetMacieSession API call.

---

##### `opGetMasterAccount`<sup>Required</sup> <a name="opGetMasterAccount" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetMasterAccount"></a>

```typescript
public readonly opGetMasterAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetMasterAccount API call.

---

##### `opGetMember`<sup>Required</sup> <a name="opGetMember" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetMember"></a>

```typescript
public readonly opGetMember: string[];
```

- *Type:* string[]

IAM actions required for the GetMember API call.

---

##### `opGetResourceProfile`<sup>Required</sup> <a name="opGetResourceProfile" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetResourceProfile"></a>

```typescript
public readonly opGetResourceProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceProfile API call.

---

##### `opGetRevealConfiguration`<sup>Required</sup> <a name="opGetRevealConfiguration" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetRevealConfiguration"></a>

```typescript
public readonly opGetRevealConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetRevealConfiguration API call.

---

##### `opGetSensitiveDataOccurrences`<sup>Required</sup> <a name="opGetSensitiveDataOccurrences" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetSensitiveDataOccurrences"></a>

```typescript
public readonly opGetSensitiveDataOccurrences: string[];
```

- *Type:* string[]

IAM actions required for the GetSensitiveDataOccurrences API call.

---

##### `opGetSensitiveDataOccurrencesAvailability`<sup>Required</sup> <a name="opGetSensitiveDataOccurrencesAvailability" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetSensitiveDataOccurrencesAvailability"></a>

```typescript
public readonly opGetSensitiveDataOccurrencesAvailability: string[];
```

- *Type:* string[]

IAM actions required for the GetSensitiveDataOccurrencesAvailability API call.

---

##### `opGetSensitivityInspectionTemplate`<sup>Required</sup> <a name="opGetSensitivityInspectionTemplate" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetSensitivityInspectionTemplate"></a>

```typescript
public readonly opGetSensitivityInspectionTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetSensitivityInspectionTemplate API call.

---

##### `opGetUsageStatistics`<sup>Required</sup> <a name="opGetUsageStatistics" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetUsageStatistics"></a>

```typescript
public readonly opGetUsageStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetUsageStatistics API call.

---

##### `opGetUsageTotals`<sup>Required</sup> <a name="opGetUsageTotals" id="@cdk_utils/iam.macie2.Macie2Operations.property.opGetUsageTotals"></a>

```typescript
public readonly opGetUsageTotals: string[];
```

- *Type:* string[]

IAM actions required for the GetUsageTotals API call.

---

##### `PutClassificationExportConfiguration`<sup>Required</sup> <a name="PutClassificationExportConfiguration" id="@cdk_utils/iam.macie2.Macie2Operations.property.PutClassificationExportConfiguration"></a>

```typescript
public readonly PutClassificationExportConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutClassificationExportConfiguration API call.

---

##### `PutFindingsPublicationConfiguration`<sup>Required</sup> <a name="PutFindingsPublicationConfiguration" id="@cdk_utils/iam.macie2.Macie2Operations.property.PutFindingsPublicationConfiguration"></a>

```typescript
public readonly PutFindingsPublicationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutFindingsPublicationConfiguration API call.

---

##### `SearchResources`<sup>Required</sup> <a name="SearchResources" id="@cdk_utils/iam.macie2.Macie2Operations.property.SearchResources"></a>

```typescript
public readonly SearchResources: string[];
```

- *Type:* string[]

IAM actions required for the SearchResources API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.macie2.Macie2Operations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestCustomDataIdentifier`<sup>Required</sup> <a name="TestCustomDataIdentifier" id="@cdk_utils/iam.macie2.Macie2Operations.property.TestCustomDataIdentifier"></a>

```typescript
public readonly TestCustomDataIdentifier: string[];
```

- *Type:* string[]

IAM actions required for the TestCustomDataIdentifier API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.macie2.Macie2Operations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAllowList`<sup>Required</sup> <a name="UpdateAllowList" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateAllowList"></a>

```typescript
public readonly UpdateAllowList: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAllowList API call.

---

##### `UpdateAutomatedDiscoveryConfiguration`<sup>Required</sup> <a name="UpdateAutomatedDiscoveryConfiguration" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateAutomatedDiscoveryConfiguration"></a>

```typescript
public readonly UpdateAutomatedDiscoveryConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutomatedDiscoveryConfiguration API call.

---

##### `UpdateClassificationJob`<sup>Required</sup> <a name="UpdateClassificationJob" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateClassificationJob"></a>

```typescript
public readonly UpdateClassificationJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateClassificationJob API call.

---

##### `UpdateClassificationScope`<sup>Required</sup> <a name="UpdateClassificationScope" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateClassificationScope"></a>

```typescript
public readonly UpdateClassificationScope: string[];
```

- *Type:* string[]

IAM actions required for the UpdateClassificationScope API call.

---

##### `UpdateFindingsFilter`<sup>Required</sup> <a name="UpdateFindingsFilter" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateFindingsFilter"></a>

```typescript
public readonly UpdateFindingsFilter: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFindingsFilter API call.

---

##### `UpdateMacieSession`<sup>Required</sup> <a name="UpdateMacieSession" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateMacieSession"></a>

```typescript
public readonly UpdateMacieSession: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMacieSession API call.

---

##### `UpdateMemberSession`<sup>Required</sup> <a name="UpdateMemberSession" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateMemberSession"></a>

```typescript
public readonly UpdateMemberSession: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMemberSession API call.

---

##### `UpdateOrganizationConfiguration`<sup>Required</sup> <a name="UpdateOrganizationConfiguration" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateOrganizationConfiguration"></a>

```typescript
public readonly UpdateOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOrganizationConfiguration API call.

---

##### `UpdateResourceProfile`<sup>Required</sup> <a name="UpdateResourceProfile" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateResourceProfile"></a>

```typescript
public readonly UpdateResourceProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourceProfile API call.

---

##### `UpdateResourceProfileDetections`<sup>Required</sup> <a name="UpdateResourceProfileDetections" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateResourceProfileDetections"></a>

```typescript
public readonly UpdateResourceProfileDetections: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourceProfileDetections API call.

---

##### `UpdateRevealConfiguration`<sup>Required</sup> <a name="UpdateRevealConfiguration" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateRevealConfiguration"></a>

```typescript
public readonly UpdateRevealConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRevealConfiguration API call.

---

##### `UpdateSensitivityInspectionTemplate`<sup>Required</sup> <a name="UpdateSensitivityInspectionTemplate" id="@cdk_utils/iam.macie2.Macie2Operations.property.UpdateSensitivityInspectionTemplate"></a>

```typescript
public readonly UpdateSensitivityInspectionTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSensitivityInspectionTemplate API call.

---

### Macie2Resources <a name="Macie2Resources" id="@cdk_utils/iam.macie2.Macie2Resources"></a>

ARN builders, validators, and parsers for macie2 resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.macie2.Macie2Resources.Initializer"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

new macie2.Macie2Resources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.allowList">allowList</a></code> | Builds an ARN for the AllowList resource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.classificationJob">classificationJob</a></code> | Builds an ARN for the ClassificationJob resource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.customDataIdentifier">customDataIdentifier</a></code> | Builds an ARN for the CustomDataIdentifier resource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.findingsFilter">findingsFilter</a></code> | Builds an ARN for the FindingsFilter resource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.isValidAllowListArn">isValidAllowListArn</a></code> | Validates whether a string is a valid ARN for the AllowList resource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.isValidClassificationJobArn">isValidClassificationJobArn</a></code> | Validates whether a string is a valid ARN for the ClassificationJob resource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.isValidCustomDataIdentifierArn">isValidCustomDataIdentifierArn</a></code> | Validates whether a string is a valid ARN for the CustomDataIdentifier resource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.isValidFindingsFilterArn">isValidFindingsFilterArn</a></code> | Validates whether a string is a valid ARN for the FindingsFilter resource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.isValidMemberArn">isValidMemberArn</a></code> | Validates whether a string is a valid ARN for the Member resource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.member">member</a></code> | Builds an ARN for the Member resource. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.parseAllowListArn">parseAllowListArn</a></code> | Parses a AllowList ARN into its components. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.parseClassificationJobArn">parseClassificationJobArn</a></code> | Parses a ClassificationJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.parseCustomDataIdentifierArn">parseCustomDataIdentifierArn</a></code> | Parses a CustomDataIdentifier ARN into its components. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.parseFindingsFilterArn">parseFindingsFilterArn</a></code> | Parses a FindingsFilter ARN into its components. |
| <code><a href="#@cdk_utils/iam.macie2.Macie2Resources.parseMemberArn">parseMemberArn</a></code> | Parses a Member ARN into its components. |

---

##### `allowList` <a name="allowList" id="@cdk_utils/iam.macie2.Macie2Resources.allowList"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.allowList(props: Macie2AllowListArnProps)
```

Builds an ARN for the AllowList resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.macie2.Macie2Resources.allowList.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.macie2.Macie2AllowListArnProps">Macie2AllowListArnProps</a>

---

##### `classificationJob` <a name="classificationJob" id="@cdk_utils/iam.macie2.Macie2Resources.classificationJob"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.classificationJob(props: Macie2ClassificationJobArnProps)
```

Builds an ARN for the ClassificationJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.macie2.Macie2Resources.classificationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.macie2.Macie2ClassificationJobArnProps">Macie2ClassificationJobArnProps</a>

---

##### `customDataIdentifier` <a name="customDataIdentifier" id="@cdk_utils/iam.macie2.Macie2Resources.customDataIdentifier"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.customDataIdentifier(props: Macie2CustomDataIdentifierArnProps)
```

Builds an ARN for the CustomDataIdentifier resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.macie2.Macie2Resources.customDataIdentifier.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.macie2.Macie2CustomDataIdentifierArnProps">Macie2CustomDataIdentifierArnProps</a>

---

##### `findingsFilter` <a name="findingsFilter" id="@cdk_utils/iam.macie2.Macie2Resources.findingsFilter"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.findingsFilter(props: Macie2FindingsFilterArnProps)
```

Builds an ARN for the FindingsFilter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.macie2.Macie2Resources.findingsFilter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.macie2.Macie2FindingsFilterArnProps">Macie2FindingsFilterArnProps</a>

---

##### `isValidAllowListArn` <a name="isValidAllowListArn" id="@cdk_utils/iam.macie2.Macie2Resources.isValidAllowListArn"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.isValidAllowListArn(arn: string)
```

Validates whether a string is a valid ARN for the AllowList resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.macie2.Macie2Resources.isValidAllowListArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClassificationJobArn` <a name="isValidClassificationJobArn" id="@cdk_utils/iam.macie2.Macie2Resources.isValidClassificationJobArn"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.isValidClassificationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the ClassificationJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.macie2.Macie2Resources.isValidClassificationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomDataIdentifierArn` <a name="isValidCustomDataIdentifierArn" id="@cdk_utils/iam.macie2.Macie2Resources.isValidCustomDataIdentifierArn"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.isValidCustomDataIdentifierArn(arn: string)
```

Validates whether a string is a valid ARN for the CustomDataIdentifier resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.macie2.Macie2Resources.isValidCustomDataIdentifierArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFindingsFilterArn` <a name="isValidFindingsFilterArn" id="@cdk_utils/iam.macie2.Macie2Resources.isValidFindingsFilterArn"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.isValidFindingsFilterArn(arn: string)
```

Validates whether a string is a valid ARN for the FindingsFilter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.macie2.Macie2Resources.isValidFindingsFilterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMemberArn` <a name="isValidMemberArn" id="@cdk_utils/iam.macie2.Macie2Resources.isValidMemberArn"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.isValidMemberArn(arn: string)
```

Validates whether a string is a valid ARN for the Member resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.macie2.Macie2Resources.isValidMemberArn.parameter.arn"></a>

- *Type:* string

---

##### `member` <a name="member" id="@cdk_utils/iam.macie2.Macie2Resources.member"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.member(props: Macie2MemberArnProps)
```

Builds an ARN for the Member resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.macie2.Macie2Resources.member.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.macie2.Macie2MemberArnProps">Macie2MemberArnProps</a>

---

##### `parseAllowListArn` <a name="parseAllowListArn" id="@cdk_utils/iam.macie2.Macie2Resources.parseAllowListArn"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.parseAllowListArn(arn: string)
```

Parses a AllowList ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.macie2.Macie2Resources.parseAllowListArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClassificationJobArn` <a name="parseClassificationJobArn" id="@cdk_utils/iam.macie2.Macie2Resources.parseClassificationJobArn"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.parseClassificationJobArn(arn: string)
```

Parses a ClassificationJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.macie2.Macie2Resources.parseClassificationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomDataIdentifierArn` <a name="parseCustomDataIdentifierArn" id="@cdk_utils/iam.macie2.Macie2Resources.parseCustomDataIdentifierArn"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.parseCustomDataIdentifierArn(arn: string)
```

Parses a CustomDataIdentifier ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.macie2.Macie2Resources.parseCustomDataIdentifierArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFindingsFilterArn` <a name="parseFindingsFilterArn" id="@cdk_utils/iam.macie2.Macie2Resources.parseFindingsFilterArn"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.parseFindingsFilterArn(arn: string)
```

Parses a FindingsFilter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.macie2.Macie2Resources.parseFindingsFilterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMemberArn` <a name="parseMemberArn" id="@cdk_utils/iam.macie2.Macie2Resources.parseMemberArn"></a>

```typescript
import { macie2 } from '@cdk_utils/iam'

macie2.Macie2Resources.parseMemberArn(arn: string)
```

Parses a Member ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.macie2.Macie2Resources.parseMemberArn.parameter.arn"></a>

- *Type:* string

---




