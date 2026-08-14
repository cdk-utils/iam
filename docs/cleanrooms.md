# `cleanrooms` Submodule <a name="`cleanrooms` Submodule" id="@cdk_utils/iam.cleanrooms"></a>


## Structs <a name="Structs" id="Structs"></a>

### CleanroomsAnalysistemplateArnComponents <a name="CleanroomsAnalysistemplateArnComponents" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents"></a>

Parsed components of a analysistemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsAnalysistemplateArnComponents: cleanrooms.CleanroomsAnalysistemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents.property.analysisTemplateId">analysisTemplateId</a></code> | <code>string</code> | The AnalysisTemplateId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `analysisTemplateId`<sup>Required</sup> <a name="analysisTemplateId" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents.property.analysisTemplateId"></a>

```typescript
public readonly analysisTemplateId: string;
```

- *Type:* string

The AnalysisTemplateId component.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CleanroomsAnalysistemplateArnProps <a name="CleanroomsAnalysistemplateArnProps" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps"></a>

Properties for building a analysistemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsAnalysistemplateArnProps: cleanrooms.CleanroomsAnalysistemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps.property.analysisTemplateId">analysisTemplateId</a></code> | <code>string</code> | The AnalysisTemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `analysisTemplateId`<sup>Required</sup> <a name="analysisTemplateId" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps.property.analysisTemplateId"></a>

```typescript
public readonly analysisTemplateId: string;
```

- *Type:* string

The AnalysisTemplateId component of the ARN.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CleanroomsCollaborationArnComponents <a name="CleanroomsCollaborationArnComponents" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnComponents"></a>

Parsed components of a collaboration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnComponents.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsCollaborationArnComponents: cleanrooms.CleanroomsCollaborationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnComponents.property.collaborationId">collaborationId</a></code> | <code>string</code> | The CollaborationId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `collaborationId`<sup>Required</sup> <a name="collaborationId" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnComponents.property.collaborationId"></a>

```typescript
public readonly collaborationId: string;
```

- *Type:* string

The CollaborationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CleanroomsCollaborationArnProps <a name="CleanroomsCollaborationArnProps" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnProps"></a>

Properties for building a collaboration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnProps.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsCollaborationArnProps: cleanrooms.CleanroomsCollaborationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnProps.property.collaborationId">collaborationId</a></code> | <code>string</code> | The CollaborationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `collaborationId`<sup>Required</sup> <a name="collaborationId" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnProps.property.collaborationId"></a>

```typescript
public readonly collaborationId: string;
```

- *Type:* string

The CollaborationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CleanroomsConfiguredaudiencemodelassociationArnComponents <a name="CleanroomsConfiguredaudiencemodelassociationArnComponents" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents"></a>

Parsed components of a configuredaudiencemodelassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsConfiguredaudiencemodelassociationArnComponents: cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents.property.configuredAudienceModelAssociationId">configuredAudienceModelAssociationId</a></code> | <code>string</code> | The ConfiguredAudienceModelAssociationId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configuredAudienceModelAssociationId`<sup>Required</sup> <a name="configuredAudienceModelAssociationId" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents.property.configuredAudienceModelAssociationId"></a>

```typescript
public readonly configuredAudienceModelAssociationId: string;
```

- *Type:* string

The ConfiguredAudienceModelAssociationId component.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CleanroomsConfiguredaudiencemodelassociationArnProps <a name="CleanroomsConfiguredaudiencemodelassociationArnProps" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps"></a>

Properties for building a configuredaudiencemodelassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsConfiguredaudiencemodelassociationArnProps: cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps.property.configuredAudienceModelAssociationId">configuredAudienceModelAssociationId</a></code> | <code>string</code> | The ConfiguredAudienceModelAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configuredAudienceModelAssociationId`<sup>Required</sup> <a name="configuredAudienceModelAssociationId" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps.property.configuredAudienceModelAssociationId"></a>

```typescript
public readonly configuredAudienceModelAssociationId: string;
```

- *Type:* string

The ConfiguredAudienceModelAssociationId component of the ARN.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CleanroomsConfiguredtableArnComponents <a name="CleanroomsConfiguredtableArnComponents" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnComponents"></a>

Parsed components of a configuredtable ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnComponents.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsConfiguredtableArnComponents: cleanrooms.CleanroomsConfiguredtableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnComponents.property.configuredTableId">configuredTableId</a></code> | <code>string</code> | The ConfiguredTableId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configuredTableId`<sup>Required</sup> <a name="configuredTableId" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnComponents.property.configuredTableId"></a>

```typescript
public readonly configuredTableId: string;
```

- *Type:* string

The ConfiguredTableId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CleanroomsConfiguredtableArnProps <a name="CleanroomsConfiguredtableArnProps" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnProps"></a>

Properties for building a configuredtable ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnProps.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsConfiguredtableArnProps: cleanrooms.CleanroomsConfiguredtableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnProps.property.configuredTableId">configuredTableId</a></code> | <code>string</code> | The ConfiguredTableId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configuredTableId`<sup>Required</sup> <a name="configuredTableId" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnProps.property.configuredTableId"></a>

```typescript
public readonly configuredTableId: string;
```

- *Type:* string

The ConfiguredTableId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CleanroomsConfiguredtableassociationArnComponents <a name="CleanroomsConfiguredtableassociationArnComponents" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents"></a>

Parsed components of a configuredtableassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsConfiguredtableassociationArnComponents: cleanrooms.CleanroomsConfiguredtableassociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents.property.configuredTableAssociationId">configuredTableAssociationId</a></code> | <code>string</code> | The ConfiguredTableAssociationId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configuredTableAssociationId`<sup>Required</sup> <a name="configuredTableAssociationId" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents.property.configuredTableAssociationId"></a>

```typescript
public readonly configuredTableAssociationId: string;
```

- *Type:* string

The ConfiguredTableAssociationId component.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CleanroomsConfiguredtableassociationArnProps <a name="CleanroomsConfiguredtableassociationArnProps" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps"></a>

Properties for building a configuredtableassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsConfiguredtableassociationArnProps: cleanrooms.CleanroomsConfiguredtableassociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps.property.configuredTableAssociationId">configuredTableAssociationId</a></code> | <code>string</code> | The ConfiguredTableAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configuredTableAssociationId`<sup>Required</sup> <a name="configuredTableAssociationId" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps.property.configuredTableAssociationId"></a>

```typescript
public readonly configuredTableAssociationId: string;
```

- *Type:* string

The ConfiguredTableAssociationId component of the ARN.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CleanroomsIdmappingtableArnComponents <a name="CleanroomsIdmappingtableArnComponents" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents"></a>

Parsed components of a idmappingtable ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsIdmappingtableArnComponents: cleanrooms.CleanroomsIdmappingtableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents.property.idMappingTableId">idMappingTableId</a></code> | <code>string</code> | The IdMappingTableId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `idMappingTableId`<sup>Required</sup> <a name="idMappingTableId" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents.property.idMappingTableId"></a>

```typescript
public readonly idMappingTableId: string;
```

- *Type:* string

The IdMappingTableId component.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CleanroomsIdmappingtableArnProps <a name="CleanroomsIdmappingtableArnProps" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps"></a>

Properties for building a idmappingtable ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsIdmappingtableArnProps: cleanrooms.CleanroomsIdmappingtableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps.property.idMappingTableId">idMappingTableId</a></code> | <code>string</code> | The IdMappingTableId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `idMappingTableId`<sup>Required</sup> <a name="idMappingTableId" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps.property.idMappingTableId"></a>

```typescript
public readonly idMappingTableId: string;
```

- *Type:* string

The IdMappingTableId component of the ARN.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CleanroomsIdnamespaceassociationArnComponents <a name="CleanroomsIdnamespaceassociationArnComponents" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents"></a>

Parsed components of a idnamespaceassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsIdnamespaceassociationArnComponents: cleanrooms.CleanroomsIdnamespaceassociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents.property.idNamespaceAssociationId">idNamespaceAssociationId</a></code> | <code>string</code> | The IdNamespaceAssociationId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `idNamespaceAssociationId`<sup>Required</sup> <a name="idNamespaceAssociationId" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents.property.idNamespaceAssociationId"></a>

```typescript
public readonly idNamespaceAssociationId: string;
```

- *Type:* string

The IdNamespaceAssociationId component.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CleanroomsIdnamespaceassociationArnProps <a name="CleanroomsIdnamespaceassociationArnProps" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps"></a>

Properties for building a idnamespaceassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsIdnamespaceassociationArnProps: cleanrooms.CleanroomsIdnamespaceassociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps.property.idNamespaceAssociationId">idNamespaceAssociationId</a></code> | <code>string</code> | The IdNamespaceAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `idNamespaceAssociationId`<sup>Required</sup> <a name="idNamespaceAssociationId" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps.property.idNamespaceAssociationId"></a>

```typescript
public readonly idNamespaceAssociationId: string;
```

- *Type:* string

The IdNamespaceAssociationId component of the ARN.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CleanroomsIntermediatetableArnComponents <a name="CleanroomsIntermediatetableArnComponents" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents"></a>

Parsed components of a intermediatetable ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsIntermediatetableArnComponents: cleanrooms.CleanroomsIntermediatetableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents.property.intermediateTableId">intermediateTableId</a></code> | <code>string</code> | The IntermediateTableId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `intermediateTableId`<sup>Required</sup> <a name="intermediateTableId" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents.property.intermediateTableId"></a>

```typescript
public readonly intermediateTableId: string;
```

- *Type:* string

The IntermediateTableId component.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CleanroomsIntermediatetableArnProps <a name="CleanroomsIntermediatetableArnProps" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps"></a>

Properties for building a intermediatetable ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsIntermediatetableArnProps: cleanrooms.CleanroomsIntermediatetableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps.property.intermediateTableId">intermediateTableId</a></code> | <code>string</code> | The IntermediateTableId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `intermediateTableId`<sup>Required</sup> <a name="intermediateTableId" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps.property.intermediateTableId"></a>

```typescript
public readonly intermediateTableId: string;
```

- *Type:* string

The IntermediateTableId component of the ARN.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CleanroomsMembershipArnComponents <a name="CleanroomsMembershipArnComponents" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnComponents"></a>

Parsed components of a membership ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnComponents.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsMembershipArnComponents: cleanrooms.CleanroomsMembershipArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnComponents.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnComponents.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CleanroomsMembershipArnProps <a name="CleanroomsMembershipArnProps" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnProps"></a>

Properties for building a membership ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnProps.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsMembershipArnProps: cleanrooms.CleanroomsMembershipArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnProps.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnProps.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CleanroomsPrivacybudgettemplateArnComponents <a name="CleanroomsPrivacybudgettemplateArnComponents" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents"></a>

Parsed components of a privacybudgettemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsPrivacybudgettemplateArnComponents: cleanrooms.CleanroomsPrivacybudgettemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents.property.privacyBudgetTemplateId">privacyBudgetTemplateId</a></code> | <code>string</code> | The PrivacyBudgetTemplateId component. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `privacyBudgetTemplateId`<sup>Required</sup> <a name="privacyBudgetTemplateId" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents.property.privacyBudgetTemplateId"></a>

```typescript
public readonly privacyBudgetTemplateId: string;
```

- *Type:* string

The PrivacyBudgetTemplateId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CleanroomsPrivacybudgettemplateArnProps <a name="CleanroomsPrivacybudgettemplateArnProps" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps"></a>

Properties for building a privacybudgettemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

const cleanroomsPrivacybudgettemplateArnProps: cleanrooms.CleanroomsPrivacybudgettemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps.property.privacyBudgetTemplateId">privacyBudgetTemplateId</a></code> | <code>string</code> | The PrivacyBudgetTemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component of the ARN.

---

##### `privacyBudgetTemplateId`<sup>Required</sup> <a name="privacyBudgetTemplateId" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps.property.privacyBudgetTemplateId"></a>

```typescript
public readonly privacyBudgetTemplateId: string;
```

- *Type:* string

The PrivacyBudgetTemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsActions <a name="CleanroomsActions" id="@cdk_utils/iam.cleanrooms.CleanroomsActions"></a>

IAM action constants for the cleanrooms service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

new cleanrooms.CleanroomsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetAnalysisLogExport">actionGetAnalysisLogExport</a></code> | <code>string</code> | [Read] cleanrooms:GetAnalysisLogExport. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetAnalysisTemplate">actionGetAnalysisTemplate</a></code> | <code>string</code> | [Read] cleanrooms:GetAnalysisTemplate. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaboration">actionGetCollaboration</a></code> | <code>string</code> | [Read] cleanrooms:GetCollaboration. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaborationAnalysisTemplate">actionGetCollaborationAnalysisTemplate</a></code> | <code>string</code> | [Read] cleanrooms:GetCollaborationAnalysisTemplate. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaborationChangeRequest">actionGetCollaborationChangeRequest</a></code> | <code>string</code> | [Read] cleanrooms:GetCollaborationChangeRequest. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaborationConfiguredAudienceModelAssociation">actionGetCollaborationConfiguredAudienceModelAssociation</a></code> | <code>string</code> | [Read] cleanrooms:GetCollaborationConfiguredAudienceModelAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaborationIdNamespaceAssociation">actionGetCollaborationIdNamespaceAssociation</a></code> | <code>string</code> | [Read] cleanrooms:GetCollaborationIdNamespaceAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaborationPrivacyBudgetTemplate">actionGetCollaborationPrivacyBudgetTemplate</a></code> | <code>string</code> | [Read] cleanrooms:GetCollaborationPrivacyBudgetTemplate. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetConfiguredAudienceModelAssociation">actionGetConfiguredAudienceModelAssociation</a></code> | <code>string</code> | [Read] cleanrooms:GetConfiguredAudienceModelAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetConfiguredTable">actionGetConfiguredTable</a></code> | <code>string</code> | [Read] cleanrooms:GetConfiguredTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetConfiguredTableAnalysisRule">actionGetConfiguredTableAnalysisRule</a></code> | <code>string</code> | [Read] cleanrooms:GetConfiguredTableAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetConfiguredTableAssociation">actionGetConfiguredTableAssociation</a></code> | <code>string</code> | [Read] cleanrooms:GetConfiguredTableAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetConfiguredTableAssociationAnalysisRule">actionGetConfiguredTableAssociationAnalysisRule</a></code> | <code>string</code> | [Read] cleanrooms:GetConfiguredTableAssociationAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetIdMappingTable">actionGetIdMappingTable</a></code> | <code>string</code> | [Read] cleanrooms:GetIdMappingTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetIdNamespaceAssociation">actionGetIdNamespaceAssociation</a></code> | <code>string</code> | [Read] cleanrooms:GetIdNamespaceAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetIntermediateTable">actionGetIntermediateTable</a></code> | <code>string</code> | [Read] cleanrooms:GetIntermediateTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetIntermediateTableAnalysisRule">actionGetIntermediateTableAnalysisRule</a></code> | <code>string</code> | [Read] cleanrooms:GetIntermediateTableAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetMembership">actionGetMembership</a></code> | <code>string</code> | [Read] cleanrooms:GetMembership. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetPrivacyBudgetTemplate">actionGetPrivacyBudgetTemplate</a></code> | <code>string</code> | [Read] cleanrooms:GetPrivacyBudgetTemplate. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetProtectedJob">actionGetProtectedJob</a></code> | <code>string</code> | [Read] cleanrooms:GetProtectedJob. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetProtectedQuery">actionGetProtectedQuery</a></code> | <code>string</code> | [Read] cleanrooms:GetProtectedQuery. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetSchema">actionGetSchema</a></code> | <code>string</code> | [Read] cleanrooms:GetSchema. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetSchemaAnalysisRule">actionGetSchemaAnalysisRule</a></code> | <code>string</code> | [Read] cleanrooms:GetSchemaAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.BatchGetCollaborationAnalysisTemplate">BatchGetCollaborationAnalysisTemplate</a></code> | <code>string</code> | [Read] cleanrooms:BatchGetCollaborationAnalysisTemplate. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.BatchGetSchema">BatchGetSchema</a></code> | <code>string</code> | [Read] cleanrooms:BatchGetSchema. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.BatchGetSchemaAnalysisRule">BatchGetSchemaAnalysisRule</a></code> | <code>string</code> | [Read] cleanrooms:BatchGetSchemaAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateAnalysisTemplate">CreateAnalysisTemplate</a></code> | <code>string</code> | [Write] cleanrooms:CreateAnalysisTemplate. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateCollaboration">CreateCollaboration</a></code> | <code>string</code> | [Write] cleanrooms:CreateCollaboration. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateCollaborationChangeRequest">CreateCollaborationChangeRequest</a></code> | <code>string</code> | [Write] cleanrooms:CreateCollaborationChangeRequest. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateConfiguredAudienceModelAssociation">CreateConfiguredAudienceModelAssociation</a></code> | <code>string</code> | [Write] cleanrooms:CreateConfiguredAudienceModelAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateConfiguredTable">CreateConfiguredTable</a></code> | <code>string</code> | [Write] cleanrooms:CreateConfiguredTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateConfiguredTableAnalysisRule">CreateConfiguredTableAnalysisRule</a></code> | <code>string</code> | [Write] cleanrooms:CreateConfiguredTableAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateConfiguredTableAssociation">CreateConfiguredTableAssociation</a></code> | <code>string</code> | [Write] cleanrooms:CreateConfiguredTableAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateConfiguredTableAssociationAnalysisRule">CreateConfiguredTableAssociationAnalysisRule</a></code> | <code>string</code> | [Write] cleanrooms:CreateConfiguredTableAssociationAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateIdMappingTable">CreateIdMappingTable</a></code> | <code>string</code> | [Write] cleanrooms:CreateIdMappingTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateIdNamespaceAssociation">CreateIdNamespaceAssociation</a></code> | <code>string</code> | [Write] cleanrooms:CreateIdNamespaceAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateIntermediateTable">CreateIntermediateTable</a></code> | <code>string</code> | [Write] cleanrooms:CreateIntermediateTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateIntermediateTableAnalysisRule">CreateIntermediateTableAnalysisRule</a></code> | <code>string</code> | [Write] cleanrooms:CreateIntermediateTableAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateMembership">CreateMembership</a></code> | <code>string</code> | [Write] cleanrooms:CreateMembership. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreatePrivacyBudgetTemplate">CreatePrivacyBudgetTemplate</a></code> | <code>string</code> | [Write] cleanrooms:CreatePrivacyBudgetTemplate. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteAnalysisTemplate">DeleteAnalysisTemplate</a></code> | <code>string</code> | [Write] cleanrooms:DeleteAnalysisTemplate. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteCollaboration">DeleteCollaboration</a></code> | <code>string</code> | [Write] cleanrooms:DeleteCollaboration. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteConfiguredAudienceModelAssociation">DeleteConfiguredAudienceModelAssociation</a></code> | <code>string</code> | [Write] cleanrooms:DeleteConfiguredAudienceModelAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteConfiguredTable">DeleteConfiguredTable</a></code> | <code>string</code> | [Write] cleanrooms:DeleteConfiguredTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteConfiguredTableAnalysisRule">DeleteConfiguredTableAnalysisRule</a></code> | <code>string</code> | [Write] cleanrooms:DeleteConfiguredTableAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteConfiguredTableAssociation">DeleteConfiguredTableAssociation</a></code> | <code>string</code> | [Write] cleanrooms:DeleteConfiguredTableAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteConfiguredTableAssociationAnalysisRule">DeleteConfiguredTableAssociationAnalysisRule</a></code> | <code>string</code> | [Write] cleanrooms:DeleteConfiguredTableAssociationAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteIdMappingTable">DeleteIdMappingTable</a></code> | <code>string</code> | [Write] cleanrooms:DeleteIdMappingTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteIdNamespaceAssociation">DeleteIdNamespaceAssociation</a></code> | <code>string</code> | [Write] cleanrooms:DeleteIdNamespaceAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteIntermediateTable">DeleteIntermediateTable</a></code> | <code>string</code> | [Write] cleanrooms:DeleteIntermediateTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteIntermediateTableAnalysisRule">DeleteIntermediateTableAnalysisRule</a></code> | <code>string</code> | [Write] cleanrooms:DeleteIntermediateTableAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteMember">DeleteMember</a></code> | <code>string</code> | [Write] cleanrooms:DeleteMember. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteMembership">DeleteMembership</a></code> | <code>string</code> | [Write] cleanrooms:DeleteMembership. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeletePrivacyBudgetTemplate">DeletePrivacyBudgetTemplate</a></code> | <code>string</code> | [Write] cleanrooms:DeletePrivacyBudgetTemplate. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DisallowIntermediateTable">DisallowIntermediateTable</a></code> | <code>string</code> | [Write] cleanrooms:DisallowIntermediateTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListAnalysisLogExports">ListAnalysisLogExports</a></code> | <code>string</code> | [List] cleanrooms:ListAnalysisLogExports. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListAnalysisTemplates">ListAnalysisTemplates</a></code> | <code>string</code> | [List] cleanrooms:ListAnalysisTemplates. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationAnalysisTemplates">ListCollaborationAnalysisTemplates</a></code> | <code>string</code> | [List] cleanrooms:ListCollaborationAnalysisTemplates. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationChangeRequests">ListCollaborationChangeRequests</a></code> | <code>string</code> | [List] cleanrooms:ListCollaborationChangeRequests. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationConfiguredAudienceModelAssociations">ListCollaborationConfiguredAudienceModelAssociations</a></code> | <code>string</code> | [List] cleanrooms:ListCollaborationConfiguredAudienceModelAssociations. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationIdNamespaceAssociations">ListCollaborationIdNamespaceAssociations</a></code> | <code>string</code> | [List] cleanrooms:ListCollaborationIdNamespaceAssociations. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationPrivacyBudgets">ListCollaborationPrivacyBudgets</a></code> | <code>string</code> | [List] cleanrooms:ListCollaborationPrivacyBudgets. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationPrivacyBudgetTemplates">ListCollaborationPrivacyBudgetTemplates</a></code> | <code>string</code> | [List] cleanrooms:ListCollaborationPrivacyBudgetTemplates. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborations">ListCollaborations</a></code> | <code>string</code> | [List] cleanrooms:ListCollaborations. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListConfiguredAudienceModelAssociations">ListConfiguredAudienceModelAssociations</a></code> | <code>string</code> | [List] cleanrooms:ListConfiguredAudienceModelAssociations. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListConfiguredTableAssociations">ListConfiguredTableAssociations</a></code> | <code>string</code> | [List] cleanrooms:ListConfiguredTableAssociations. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListConfiguredTables">ListConfiguredTables</a></code> | <code>string</code> | [List] cleanrooms:ListConfiguredTables. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListIdMappingTables">ListIdMappingTables</a></code> | <code>string</code> | [List] cleanrooms:ListIdMappingTables. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListIdNamespaceAssociations">ListIdNamespaceAssociations</a></code> | <code>string</code> | [List] cleanrooms:ListIdNamespaceAssociations. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListIntermediateTables">ListIntermediateTables</a></code> | <code>string</code> | [List] cleanrooms:ListIntermediateTables. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListIntermediateTableVersions">ListIntermediateTableVersions</a></code> | <code>string</code> | [List] cleanrooms:ListIntermediateTableVersions. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListMembers">ListMembers</a></code> | <code>string</code> | [List] cleanrooms:ListMembers. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListMemberships">ListMemberships</a></code> | <code>string</code> | [List] cleanrooms:ListMemberships. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListPrivacyBudgets">ListPrivacyBudgets</a></code> | <code>string</code> | [List] cleanrooms:ListPrivacyBudgets. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListPrivacyBudgetTemplates">ListPrivacyBudgetTemplates</a></code> | <code>string</code> | [List] cleanrooms:ListPrivacyBudgetTemplates. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListProtectedJobs">ListProtectedJobs</a></code> | <code>string</code> | [List] cleanrooms:ListProtectedJobs. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListProtectedQueries">ListProtectedQueries</a></code> | <code>string</code> | [List] cleanrooms:ListProtectedQueries. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListSchemas">ListSchemas</a></code> | <code>string</code> | [List] cleanrooms:ListSchemas. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] cleanrooms:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.PassCollaboration">PassCollaboration</a></code> | <code>string</code> | [Read] cleanrooms:PassCollaboration. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.PassMembership">PassMembership</a></code> | <code>string</code> | [Read] cleanrooms:PassMembership. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.PopulateIdMappingTable">PopulateIdMappingTable</a></code> | <code>string</code> | [Write] cleanrooms:PopulateIdMappingTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.PopulateIntermediateTable">PopulateIntermediateTable</a></code> | <code>string</code> | [Write] cleanrooms:PopulateIntermediateTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.PreviewPrivacyImpact">PreviewPrivacyImpact</a></code> | <code>string</code> | [Read] cleanrooms:PreviewPrivacyImpact. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.StartAnalysisLogExport">StartAnalysisLogExport</a></code> | <code>string</code> | [Write] cleanrooms:StartAnalysisLogExport. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.StartProtectedJob">StartProtectedJob</a></code> | <code>string</code> | [Write] cleanrooms:StartProtectedJob. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.StartProtectedQuery">StartProtectedQuery</a></code> | <code>string</code> | [Write] cleanrooms:StartProtectedQuery. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cleanrooms:TagResource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cleanrooms:UntagResource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateAnalysisTemplate">UpdateAnalysisTemplate</a></code> | <code>string</code> | [Write] cleanrooms:UpdateAnalysisTemplate. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateCollaboration">UpdateCollaboration</a></code> | <code>string</code> | [Write] cleanrooms:UpdateCollaboration. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateCollaborationChangeRequest">UpdateCollaborationChangeRequest</a></code> | <code>string</code> | [Write] cleanrooms:UpdateCollaborationChangeRequest. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredAudienceModelAssociation">UpdateConfiguredAudienceModelAssociation</a></code> | <code>string</code> | [Write] cleanrooms:UpdateConfiguredAudienceModelAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTable">UpdateConfiguredTable</a></code> | <code>string</code> | [Write] cleanrooms:UpdateConfiguredTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTableAllowedColumns">UpdateConfiguredTableAllowedColumns</a></code> | <code>string</code> | [Write] cleanrooms:UpdateConfiguredTableAllowedColumns. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTableAnalysisRule">UpdateConfiguredTableAnalysisRule</a></code> | <code>string</code> | [Write] cleanrooms:UpdateConfiguredTableAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTableAssociation">UpdateConfiguredTableAssociation</a></code> | <code>string</code> | [Write] cleanrooms:UpdateConfiguredTableAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTableAssociationAnalysisRule">UpdateConfiguredTableAssociationAnalysisRule</a></code> | <code>string</code> | [Write] cleanrooms:UpdateConfiguredTableAssociationAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTableReference">UpdateConfiguredTableReference</a></code> | <code>string</code> | [Write] cleanrooms:UpdateConfiguredTableReference. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateIdMappingTable">UpdateIdMappingTable</a></code> | <code>string</code> | [Write] cleanrooms:UpdateIdMappingTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateIdNamespaceAssociation">UpdateIdNamespaceAssociation</a></code> | <code>string</code> | [Write] cleanrooms:UpdateIdNamespaceAssociation. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateIntermediateTable">UpdateIntermediateTable</a></code> | <code>string</code> | [Write] cleanrooms:UpdateIntermediateTable. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateIntermediateTableAnalysisRule">UpdateIntermediateTableAnalysisRule</a></code> | <code>string</code> | [Write] cleanrooms:UpdateIntermediateTableAnalysisRule. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateMembership">UpdateMembership</a></code> | <code>string</code> | [Write] cleanrooms:UpdateMembership. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdatePrivacyBudgetTemplate">UpdatePrivacyBudgetTemplate</a></code> | <code>string</code> | [Write] cleanrooms:UpdatePrivacyBudgetTemplate. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateProtectedJob">UpdateProtectedJob</a></code> | <code>string</code> | [Write] cleanrooms:UpdateProtectedJob. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateProtectedQuery">UpdateProtectedQuery</a></code> | <code>string</code> | [Write] cleanrooms:UpdateProtectedQuery. |

---

##### `actionGetAnalysisLogExport`<sup>Required</sup> <a name="actionGetAnalysisLogExport" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetAnalysisLogExport"></a>

```typescript
public readonly actionGetAnalysisLogExport: string;
```

- *Type:* string

[Read] cleanrooms:GetAnalysisLogExport.

---

##### `actionGetAnalysisTemplate`<sup>Required</sup> <a name="actionGetAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetAnalysisTemplate"></a>

```typescript
public readonly actionGetAnalysisTemplate: string;
```

- *Type:* string

[Read] cleanrooms:GetAnalysisTemplate.

---

##### `actionGetCollaboration`<sup>Required</sup> <a name="actionGetCollaboration" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaboration"></a>

```typescript
public readonly actionGetCollaboration: string;
```

- *Type:* string

[Read] cleanrooms:GetCollaboration.

---

##### `actionGetCollaborationAnalysisTemplate`<sup>Required</sup> <a name="actionGetCollaborationAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaborationAnalysisTemplate"></a>

```typescript
public readonly actionGetCollaborationAnalysisTemplate: string;
```

- *Type:* string

[Read] cleanrooms:GetCollaborationAnalysisTemplate.

---

##### `actionGetCollaborationChangeRequest`<sup>Required</sup> <a name="actionGetCollaborationChangeRequest" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaborationChangeRequest"></a>

```typescript
public readonly actionGetCollaborationChangeRequest: string;
```

- *Type:* string

[Read] cleanrooms:GetCollaborationChangeRequest.

---

##### `actionGetCollaborationConfiguredAudienceModelAssociation`<sup>Required</sup> <a name="actionGetCollaborationConfiguredAudienceModelAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaborationConfiguredAudienceModelAssociation"></a>

```typescript
public readonly actionGetCollaborationConfiguredAudienceModelAssociation: string;
```

- *Type:* string

[Read] cleanrooms:GetCollaborationConfiguredAudienceModelAssociation.

---

##### `actionGetCollaborationIdNamespaceAssociation`<sup>Required</sup> <a name="actionGetCollaborationIdNamespaceAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaborationIdNamespaceAssociation"></a>

```typescript
public readonly actionGetCollaborationIdNamespaceAssociation: string;
```

- *Type:* string

[Read] cleanrooms:GetCollaborationIdNamespaceAssociation.

---

##### `actionGetCollaborationPrivacyBudgetTemplate`<sup>Required</sup> <a name="actionGetCollaborationPrivacyBudgetTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetCollaborationPrivacyBudgetTemplate"></a>

```typescript
public readonly actionGetCollaborationPrivacyBudgetTemplate: string;
```

- *Type:* string

[Read] cleanrooms:GetCollaborationPrivacyBudgetTemplate.

---

##### `actionGetConfiguredAudienceModelAssociation`<sup>Required</sup> <a name="actionGetConfiguredAudienceModelAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetConfiguredAudienceModelAssociation"></a>

```typescript
public readonly actionGetConfiguredAudienceModelAssociation: string;
```

- *Type:* string

[Read] cleanrooms:GetConfiguredAudienceModelAssociation.

---

##### `actionGetConfiguredTable`<sup>Required</sup> <a name="actionGetConfiguredTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetConfiguredTable"></a>

```typescript
public readonly actionGetConfiguredTable: string;
```

- *Type:* string

[Read] cleanrooms:GetConfiguredTable.

---

##### `actionGetConfiguredTableAnalysisRule`<sup>Required</sup> <a name="actionGetConfiguredTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetConfiguredTableAnalysisRule"></a>

```typescript
public readonly actionGetConfiguredTableAnalysisRule: string;
```

- *Type:* string

[Read] cleanrooms:GetConfiguredTableAnalysisRule.

---

##### `actionGetConfiguredTableAssociation`<sup>Required</sup> <a name="actionGetConfiguredTableAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetConfiguredTableAssociation"></a>

```typescript
public readonly actionGetConfiguredTableAssociation: string;
```

- *Type:* string

[Read] cleanrooms:GetConfiguredTableAssociation.

---

##### `actionGetConfiguredTableAssociationAnalysisRule`<sup>Required</sup> <a name="actionGetConfiguredTableAssociationAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetConfiguredTableAssociationAnalysisRule"></a>

```typescript
public readonly actionGetConfiguredTableAssociationAnalysisRule: string;
```

- *Type:* string

[Read] cleanrooms:GetConfiguredTableAssociationAnalysisRule.

---

##### `actionGetIdMappingTable`<sup>Required</sup> <a name="actionGetIdMappingTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetIdMappingTable"></a>

```typescript
public readonly actionGetIdMappingTable: string;
```

- *Type:* string

[Read] cleanrooms:GetIdMappingTable.

---

##### `actionGetIdNamespaceAssociation`<sup>Required</sup> <a name="actionGetIdNamespaceAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetIdNamespaceAssociation"></a>

```typescript
public readonly actionGetIdNamespaceAssociation: string;
```

- *Type:* string

[Read] cleanrooms:GetIdNamespaceAssociation.

---

##### `actionGetIntermediateTable`<sup>Required</sup> <a name="actionGetIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetIntermediateTable"></a>

```typescript
public readonly actionGetIntermediateTable: string;
```

- *Type:* string

[Read] cleanrooms:GetIntermediateTable.

---

##### `actionGetIntermediateTableAnalysisRule`<sup>Required</sup> <a name="actionGetIntermediateTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetIntermediateTableAnalysisRule"></a>

```typescript
public readonly actionGetIntermediateTableAnalysisRule: string;
```

- *Type:* string

[Read] cleanrooms:GetIntermediateTableAnalysisRule.

---

##### `actionGetMembership`<sup>Required</sup> <a name="actionGetMembership" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetMembership"></a>

```typescript
public readonly actionGetMembership: string;
```

- *Type:* string

[Read] cleanrooms:GetMembership.

---

##### `actionGetPrivacyBudgetTemplate`<sup>Required</sup> <a name="actionGetPrivacyBudgetTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetPrivacyBudgetTemplate"></a>

```typescript
public readonly actionGetPrivacyBudgetTemplate: string;
```

- *Type:* string

[Read] cleanrooms:GetPrivacyBudgetTemplate.

---

##### `actionGetProtectedJob`<sup>Required</sup> <a name="actionGetProtectedJob" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetProtectedJob"></a>

```typescript
public readonly actionGetProtectedJob: string;
```

- *Type:* string

[Read] cleanrooms:GetProtectedJob.

---

##### `actionGetProtectedQuery`<sup>Required</sup> <a name="actionGetProtectedQuery" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetProtectedQuery"></a>

```typescript
public readonly actionGetProtectedQuery: string;
```

- *Type:* string

[Read] cleanrooms:GetProtectedQuery.

---

##### `actionGetSchema`<sup>Required</sup> <a name="actionGetSchema" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetSchema"></a>

```typescript
public readonly actionGetSchema: string;
```

- *Type:* string

[Read] cleanrooms:GetSchema.

---

##### `actionGetSchemaAnalysisRule`<sup>Required</sup> <a name="actionGetSchemaAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.actionGetSchemaAnalysisRule"></a>

```typescript
public readonly actionGetSchemaAnalysisRule: string;
```

- *Type:* string

[Read] cleanrooms:GetSchemaAnalysisRule.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetCollaborationAnalysisTemplate`<sup>Required</sup> <a name="BatchGetCollaborationAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.BatchGetCollaborationAnalysisTemplate"></a>

```typescript
public readonly BatchGetCollaborationAnalysisTemplate: string;
```

- *Type:* string

[Read] cleanrooms:BatchGetCollaborationAnalysisTemplate.

---

##### `BatchGetSchema`<sup>Required</sup> <a name="BatchGetSchema" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.BatchGetSchema"></a>

```typescript
public readonly BatchGetSchema: string;
```

- *Type:* string

[Read] cleanrooms:BatchGetSchema.

---

##### `BatchGetSchemaAnalysisRule`<sup>Required</sup> <a name="BatchGetSchemaAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.BatchGetSchemaAnalysisRule"></a>

```typescript
public readonly BatchGetSchemaAnalysisRule: string;
```

- *Type:* string

[Read] cleanrooms:BatchGetSchemaAnalysisRule.

---

##### `CreateAnalysisTemplate`<sup>Required</sup> <a name="CreateAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateAnalysisTemplate"></a>

```typescript
public readonly CreateAnalysisTemplate: string;
```

- *Type:* string

[Write] cleanrooms:CreateAnalysisTemplate.

---

##### `CreateCollaboration`<sup>Required</sup> <a name="CreateCollaboration" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateCollaboration"></a>

```typescript
public readonly CreateCollaboration: string;
```

- *Type:* string

[Write] cleanrooms:CreateCollaboration.

---

##### `CreateCollaborationChangeRequest`<sup>Required</sup> <a name="CreateCollaborationChangeRequest" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateCollaborationChangeRequest"></a>

```typescript
public readonly CreateCollaborationChangeRequest: string;
```

- *Type:* string

[Write] cleanrooms:CreateCollaborationChangeRequest.

---

##### `CreateConfiguredAudienceModelAssociation`<sup>Required</sup> <a name="CreateConfiguredAudienceModelAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateConfiguredAudienceModelAssociation"></a>

```typescript
public readonly CreateConfiguredAudienceModelAssociation: string;
```

- *Type:* string

[Write] cleanrooms:CreateConfiguredAudienceModelAssociation.

---

##### `CreateConfiguredTable`<sup>Required</sup> <a name="CreateConfiguredTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateConfiguredTable"></a>

```typescript
public readonly CreateConfiguredTable: string;
```

- *Type:* string

[Write] cleanrooms:CreateConfiguredTable.

---

##### `CreateConfiguredTableAnalysisRule`<sup>Required</sup> <a name="CreateConfiguredTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateConfiguredTableAnalysisRule"></a>

```typescript
public readonly CreateConfiguredTableAnalysisRule: string;
```

- *Type:* string

[Write] cleanrooms:CreateConfiguredTableAnalysisRule.

---

##### `CreateConfiguredTableAssociation`<sup>Required</sup> <a name="CreateConfiguredTableAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateConfiguredTableAssociation"></a>

```typescript
public readonly CreateConfiguredTableAssociation: string;
```

- *Type:* string

[Write] cleanrooms:CreateConfiguredTableAssociation.

---

##### `CreateConfiguredTableAssociationAnalysisRule`<sup>Required</sup> <a name="CreateConfiguredTableAssociationAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateConfiguredTableAssociationAnalysisRule"></a>

```typescript
public readonly CreateConfiguredTableAssociationAnalysisRule: string;
```

- *Type:* string

[Write] cleanrooms:CreateConfiguredTableAssociationAnalysisRule.

---

##### `CreateIdMappingTable`<sup>Required</sup> <a name="CreateIdMappingTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateIdMappingTable"></a>

```typescript
public readonly CreateIdMappingTable: string;
```

- *Type:* string

[Write] cleanrooms:CreateIdMappingTable.

---

##### `CreateIdNamespaceAssociation`<sup>Required</sup> <a name="CreateIdNamespaceAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateIdNamespaceAssociation"></a>

```typescript
public readonly CreateIdNamespaceAssociation: string;
```

- *Type:* string

[Write] cleanrooms:CreateIdNamespaceAssociation.

---

##### `CreateIntermediateTable`<sup>Required</sup> <a name="CreateIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateIntermediateTable"></a>

```typescript
public readonly CreateIntermediateTable: string;
```

- *Type:* string

[Write] cleanrooms:CreateIntermediateTable.

---

##### `CreateIntermediateTableAnalysisRule`<sup>Required</sup> <a name="CreateIntermediateTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateIntermediateTableAnalysisRule"></a>

```typescript
public readonly CreateIntermediateTableAnalysisRule: string;
```

- *Type:* string

[Write] cleanrooms:CreateIntermediateTableAnalysisRule.

---

##### `CreateMembership`<sup>Required</sup> <a name="CreateMembership" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreateMembership"></a>

```typescript
public readonly CreateMembership: string;
```

- *Type:* string

[Write] cleanrooms:CreateMembership.

---

##### `CreatePrivacyBudgetTemplate`<sup>Required</sup> <a name="CreatePrivacyBudgetTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.CreatePrivacyBudgetTemplate"></a>

```typescript
public readonly CreatePrivacyBudgetTemplate: string;
```

- *Type:* string

[Write] cleanrooms:CreatePrivacyBudgetTemplate.

---

##### `DeleteAnalysisTemplate`<sup>Required</sup> <a name="DeleteAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteAnalysisTemplate"></a>

```typescript
public readonly DeleteAnalysisTemplate: string;
```

- *Type:* string

[Write] cleanrooms:DeleteAnalysisTemplate.

---

##### `DeleteCollaboration`<sup>Required</sup> <a name="DeleteCollaboration" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteCollaboration"></a>

```typescript
public readonly DeleteCollaboration: string;
```

- *Type:* string

[Write] cleanrooms:DeleteCollaboration.

---

##### `DeleteConfiguredAudienceModelAssociation`<sup>Required</sup> <a name="DeleteConfiguredAudienceModelAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteConfiguredAudienceModelAssociation"></a>

```typescript
public readonly DeleteConfiguredAudienceModelAssociation: string;
```

- *Type:* string

[Write] cleanrooms:DeleteConfiguredAudienceModelAssociation.

---

##### `DeleteConfiguredTable`<sup>Required</sup> <a name="DeleteConfiguredTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteConfiguredTable"></a>

```typescript
public readonly DeleteConfiguredTable: string;
```

- *Type:* string

[Write] cleanrooms:DeleteConfiguredTable.

---

##### `DeleteConfiguredTableAnalysisRule`<sup>Required</sup> <a name="DeleteConfiguredTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteConfiguredTableAnalysisRule"></a>

```typescript
public readonly DeleteConfiguredTableAnalysisRule: string;
```

- *Type:* string

[Write] cleanrooms:DeleteConfiguredTableAnalysisRule.

---

##### `DeleteConfiguredTableAssociation`<sup>Required</sup> <a name="DeleteConfiguredTableAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteConfiguredTableAssociation"></a>

```typescript
public readonly DeleteConfiguredTableAssociation: string;
```

- *Type:* string

[Write] cleanrooms:DeleteConfiguredTableAssociation.

---

##### `DeleteConfiguredTableAssociationAnalysisRule`<sup>Required</sup> <a name="DeleteConfiguredTableAssociationAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteConfiguredTableAssociationAnalysisRule"></a>

```typescript
public readonly DeleteConfiguredTableAssociationAnalysisRule: string;
```

- *Type:* string

[Write] cleanrooms:DeleteConfiguredTableAssociationAnalysisRule.

---

##### `DeleteIdMappingTable`<sup>Required</sup> <a name="DeleteIdMappingTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteIdMappingTable"></a>

```typescript
public readonly DeleteIdMappingTable: string;
```

- *Type:* string

[Write] cleanrooms:DeleteIdMappingTable.

---

##### `DeleteIdNamespaceAssociation`<sup>Required</sup> <a name="DeleteIdNamespaceAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteIdNamespaceAssociation"></a>

```typescript
public readonly DeleteIdNamespaceAssociation: string;
```

- *Type:* string

[Write] cleanrooms:DeleteIdNamespaceAssociation.

---

##### `DeleteIntermediateTable`<sup>Required</sup> <a name="DeleteIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteIntermediateTable"></a>

```typescript
public readonly DeleteIntermediateTable: string;
```

- *Type:* string

[Write] cleanrooms:DeleteIntermediateTable.

---

##### `DeleteIntermediateTableAnalysisRule`<sup>Required</sup> <a name="DeleteIntermediateTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteIntermediateTableAnalysisRule"></a>

```typescript
public readonly DeleteIntermediateTableAnalysisRule: string;
```

- *Type:* string

[Write] cleanrooms:DeleteIntermediateTableAnalysisRule.

---

##### `DeleteMember`<sup>Required</sup> <a name="DeleteMember" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteMember"></a>

```typescript
public readonly DeleteMember: string;
```

- *Type:* string

[Write] cleanrooms:DeleteMember.

---

##### `DeleteMembership`<sup>Required</sup> <a name="DeleteMembership" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeleteMembership"></a>

```typescript
public readonly DeleteMembership: string;
```

- *Type:* string

[Write] cleanrooms:DeleteMembership.

---

##### `DeletePrivacyBudgetTemplate`<sup>Required</sup> <a name="DeletePrivacyBudgetTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DeletePrivacyBudgetTemplate"></a>

```typescript
public readonly DeletePrivacyBudgetTemplate: string;
```

- *Type:* string

[Write] cleanrooms:DeletePrivacyBudgetTemplate.

---

##### `DisallowIntermediateTable`<sup>Required</sup> <a name="DisallowIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.DisallowIntermediateTable"></a>

```typescript
public readonly DisallowIntermediateTable: string;
```

- *Type:* string

[Write] cleanrooms:DisallowIntermediateTable.

---

##### `ListAnalysisLogExports`<sup>Required</sup> <a name="ListAnalysisLogExports" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListAnalysisLogExports"></a>

```typescript
public readonly ListAnalysisLogExports: string;
```

- *Type:* string

[List] cleanrooms:ListAnalysisLogExports.

---

##### `ListAnalysisTemplates`<sup>Required</sup> <a name="ListAnalysisTemplates" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListAnalysisTemplates"></a>

```typescript
public readonly ListAnalysisTemplates: string;
```

- *Type:* string

[List] cleanrooms:ListAnalysisTemplates.

---

##### `ListCollaborationAnalysisTemplates`<sup>Required</sup> <a name="ListCollaborationAnalysisTemplates" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationAnalysisTemplates"></a>

```typescript
public readonly ListCollaborationAnalysisTemplates: string;
```

- *Type:* string

[List] cleanrooms:ListCollaborationAnalysisTemplates.

---

##### `ListCollaborationChangeRequests`<sup>Required</sup> <a name="ListCollaborationChangeRequests" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationChangeRequests"></a>

```typescript
public readonly ListCollaborationChangeRequests: string;
```

- *Type:* string

[List] cleanrooms:ListCollaborationChangeRequests.

---

##### `ListCollaborationConfiguredAudienceModelAssociations`<sup>Required</sup> <a name="ListCollaborationConfiguredAudienceModelAssociations" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationConfiguredAudienceModelAssociations"></a>

```typescript
public readonly ListCollaborationConfiguredAudienceModelAssociations: string;
```

- *Type:* string

[List] cleanrooms:ListCollaborationConfiguredAudienceModelAssociations.

---

##### `ListCollaborationIdNamespaceAssociations`<sup>Required</sup> <a name="ListCollaborationIdNamespaceAssociations" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationIdNamespaceAssociations"></a>

```typescript
public readonly ListCollaborationIdNamespaceAssociations: string;
```

- *Type:* string

[List] cleanrooms:ListCollaborationIdNamespaceAssociations.

---

##### `ListCollaborationPrivacyBudgets`<sup>Required</sup> <a name="ListCollaborationPrivacyBudgets" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationPrivacyBudgets"></a>

```typescript
public readonly ListCollaborationPrivacyBudgets: string;
```

- *Type:* string

[List] cleanrooms:ListCollaborationPrivacyBudgets.

---

##### `ListCollaborationPrivacyBudgetTemplates`<sup>Required</sup> <a name="ListCollaborationPrivacyBudgetTemplates" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborationPrivacyBudgetTemplates"></a>

```typescript
public readonly ListCollaborationPrivacyBudgetTemplates: string;
```

- *Type:* string

[List] cleanrooms:ListCollaborationPrivacyBudgetTemplates.

---

##### `ListCollaborations`<sup>Required</sup> <a name="ListCollaborations" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListCollaborations"></a>

```typescript
public readonly ListCollaborations: string;
```

- *Type:* string

[List] cleanrooms:ListCollaborations.

---

##### `ListConfiguredAudienceModelAssociations`<sup>Required</sup> <a name="ListConfiguredAudienceModelAssociations" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListConfiguredAudienceModelAssociations"></a>

```typescript
public readonly ListConfiguredAudienceModelAssociations: string;
```

- *Type:* string

[List] cleanrooms:ListConfiguredAudienceModelAssociations.

---

##### `ListConfiguredTableAssociations`<sup>Required</sup> <a name="ListConfiguredTableAssociations" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListConfiguredTableAssociations"></a>

```typescript
public readonly ListConfiguredTableAssociations: string;
```

- *Type:* string

[List] cleanrooms:ListConfiguredTableAssociations.

---

##### `ListConfiguredTables`<sup>Required</sup> <a name="ListConfiguredTables" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListConfiguredTables"></a>

```typescript
public readonly ListConfiguredTables: string;
```

- *Type:* string

[List] cleanrooms:ListConfiguredTables.

---

##### `ListIdMappingTables`<sup>Required</sup> <a name="ListIdMappingTables" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListIdMappingTables"></a>

```typescript
public readonly ListIdMappingTables: string;
```

- *Type:* string

[List] cleanrooms:ListIdMappingTables.

---

##### `ListIdNamespaceAssociations`<sup>Required</sup> <a name="ListIdNamespaceAssociations" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListIdNamespaceAssociations"></a>

```typescript
public readonly ListIdNamespaceAssociations: string;
```

- *Type:* string

[List] cleanrooms:ListIdNamespaceAssociations.

---

##### `ListIntermediateTables`<sup>Required</sup> <a name="ListIntermediateTables" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListIntermediateTables"></a>

```typescript
public readonly ListIntermediateTables: string;
```

- *Type:* string

[List] cleanrooms:ListIntermediateTables.

---

##### `ListIntermediateTableVersions`<sup>Required</sup> <a name="ListIntermediateTableVersions" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListIntermediateTableVersions"></a>

```typescript
public readonly ListIntermediateTableVersions: string;
```

- *Type:* string

[List] cleanrooms:ListIntermediateTableVersions.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListMembers"></a>

```typescript
public readonly ListMembers: string;
```

- *Type:* string

[List] cleanrooms:ListMembers.

---

##### `ListMemberships`<sup>Required</sup> <a name="ListMemberships" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListMemberships"></a>

```typescript
public readonly ListMemberships: string;
```

- *Type:* string

[List] cleanrooms:ListMemberships.

---

##### `ListPrivacyBudgets`<sup>Required</sup> <a name="ListPrivacyBudgets" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListPrivacyBudgets"></a>

```typescript
public readonly ListPrivacyBudgets: string;
```

- *Type:* string

[List] cleanrooms:ListPrivacyBudgets.

---

##### `ListPrivacyBudgetTemplates`<sup>Required</sup> <a name="ListPrivacyBudgetTemplates" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListPrivacyBudgetTemplates"></a>

```typescript
public readonly ListPrivacyBudgetTemplates: string;
```

- *Type:* string

[List] cleanrooms:ListPrivacyBudgetTemplates.

---

##### `ListProtectedJobs`<sup>Required</sup> <a name="ListProtectedJobs" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListProtectedJobs"></a>

```typescript
public readonly ListProtectedJobs: string;
```

- *Type:* string

[List] cleanrooms:ListProtectedJobs.

---

##### `ListProtectedQueries`<sup>Required</sup> <a name="ListProtectedQueries" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListProtectedQueries"></a>

```typescript
public readonly ListProtectedQueries: string;
```

- *Type:* string

[List] cleanrooms:ListProtectedQueries.

---

##### `ListSchemas`<sup>Required</sup> <a name="ListSchemas" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListSchemas"></a>

```typescript
public readonly ListSchemas: string;
```

- *Type:* string

[List] cleanrooms:ListSchemas.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] cleanrooms:ListTagsForResource.

---

##### `PassCollaboration`<sup>Required</sup> <a name="PassCollaboration" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.PassCollaboration"></a>

```typescript
public readonly PassCollaboration: string;
```

- *Type:* string

[Read] cleanrooms:PassCollaboration.

---

##### `PassMembership`<sup>Required</sup> <a name="PassMembership" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.PassMembership"></a>

```typescript
public readonly PassMembership: string;
```

- *Type:* string

[Read] cleanrooms:PassMembership.

---

##### `PopulateIdMappingTable`<sup>Required</sup> <a name="PopulateIdMappingTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.PopulateIdMappingTable"></a>

```typescript
public readonly PopulateIdMappingTable: string;
```

- *Type:* string

[Write] cleanrooms:PopulateIdMappingTable.

---

##### `PopulateIntermediateTable`<sup>Required</sup> <a name="PopulateIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.PopulateIntermediateTable"></a>

```typescript
public readonly PopulateIntermediateTable: string;
```

- *Type:* string

[Write] cleanrooms:PopulateIntermediateTable.

---

##### `PreviewPrivacyImpact`<sup>Required</sup> <a name="PreviewPrivacyImpact" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.PreviewPrivacyImpact"></a>

```typescript
public readonly PreviewPrivacyImpact: string;
```

- *Type:* string

[Read] cleanrooms:PreviewPrivacyImpact.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAnalysisLogExport`<sup>Required</sup> <a name="StartAnalysisLogExport" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.StartAnalysisLogExport"></a>

```typescript
public readonly StartAnalysisLogExport: string;
```

- *Type:* string

[Write] cleanrooms:StartAnalysisLogExport.

---

##### `StartProtectedJob`<sup>Required</sup> <a name="StartProtectedJob" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.StartProtectedJob"></a>

```typescript
public readonly StartProtectedJob: string;
```

- *Type:* string

[Write] cleanrooms:StartProtectedJob.

---

##### `StartProtectedQuery`<sup>Required</sup> <a name="StartProtectedQuery" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.StartProtectedQuery"></a>

```typescript
public readonly StartProtectedQuery: string;
```

- *Type:* string

[Write] cleanrooms:StartProtectedQuery.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cleanrooms:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cleanrooms:UntagResource.

---

##### `UpdateAnalysisTemplate`<sup>Required</sup> <a name="UpdateAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateAnalysisTemplate"></a>

```typescript
public readonly UpdateAnalysisTemplate: string;
```

- *Type:* string

[Write] cleanrooms:UpdateAnalysisTemplate.

---

##### `UpdateCollaboration`<sup>Required</sup> <a name="UpdateCollaboration" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateCollaboration"></a>

```typescript
public readonly UpdateCollaboration: string;
```

- *Type:* string

[Write] cleanrooms:UpdateCollaboration.

---

##### `UpdateCollaborationChangeRequest`<sup>Required</sup> <a name="UpdateCollaborationChangeRequest" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateCollaborationChangeRequest"></a>

```typescript
public readonly UpdateCollaborationChangeRequest: string;
```

- *Type:* string

[Write] cleanrooms:UpdateCollaborationChangeRequest.

---

##### `UpdateConfiguredAudienceModelAssociation`<sup>Required</sup> <a name="UpdateConfiguredAudienceModelAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredAudienceModelAssociation"></a>

```typescript
public readonly UpdateConfiguredAudienceModelAssociation: string;
```

- *Type:* string

[Write] cleanrooms:UpdateConfiguredAudienceModelAssociation.

---

##### `UpdateConfiguredTable`<sup>Required</sup> <a name="UpdateConfiguredTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTable"></a>

```typescript
public readonly UpdateConfiguredTable: string;
```

- *Type:* string

[Write] cleanrooms:UpdateConfiguredTable.

---

##### `UpdateConfiguredTableAllowedColumns`<sup>Required</sup> <a name="UpdateConfiguredTableAllowedColumns" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTableAllowedColumns"></a>

```typescript
public readonly UpdateConfiguredTableAllowedColumns: string;
```

- *Type:* string

[Write] cleanrooms:UpdateConfiguredTableAllowedColumns.

---

##### `UpdateConfiguredTableAnalysisRule`<sup>Required</sup> <a name="UpdateConfiguredTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTableAnalysisRule"></a>

```typescript
public readonly UpdateConfiguredTableAnalysisRule: string;
```

- *Type:* string

[Write] cleanrooms:UpdateConfiguredTableAnalysisRule.

---

##### `UpdateConfiguredTableAssociation`<sup>Required</sup> <a name="UpdateConfiguredTableAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTableAssociation"></a>

```typescript
public readonly UpdateConfiguredTableAssociation: string;
```

- *Type:* string

[Write] cleanrooms:UpdateConfiguredTableAssociation.

---

##### `UpdateConfiguredTableAssociationAnalysisRule`<sup>Required</sup> <a name="UpdateConfiguredTableAssociationAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTableAssociationAnalysisRule"></a>

```typescript
public readonly UpdateConfiguredTableAssociationAnalysisRule: string;
```

- *Type:* string

[Write] cleanrooms:UpdateConfiguredTableAssociationAnalysisRule.

---

##### `UpdateConfiguredTableReference`<sup>Required</sup> <a name="UpdateConfiguredTableReference" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateConfiguredTableReference"></a>

```typescript
public readonly UpdateConfiguredTableReference: string;
```

- *Type:* string

[Write] cleanrooms:UpdateConfiguredTableReference.

---

##### `UpdateIdMappingTable`<sup>Required</sup> <a name="UpdateIdMappingTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateIdMappingTable"></a>

```typescript
public readonly UpdateIdMappingTable: string;
```

- *Type:* string

[Write] cleanrooms:UpdateIdMappingTable.

---

##### `UpdateIdNamespaceAssociation`<sup>Required</sup> <a name="UpdateIdNamespaceAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateIdNamespaceAssociation"></a>

```typescript
public readonly UpdateIdNamespaceAssociation: string;
```

- *Type:* string

[Write] cleanrooms:UpdateIdNamespaceAssociation.

---

##### `UpdateIntermediateTable`<sup>Required</sup> <a name="UpdateIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateIntermediateTable"></a>

```typescript
public readonly UpdateIntermediateTable: string;
```

- *Type:* string

[Write] cleanrooms:UpdateIntermediateTable.

---

##### `UpdateIntermediateTableAnalysisRule`<sup>Required</sup> <a name="UpdateIntermediateTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateIntermediateTableAnalysisRule"></a>

```typescript
public readonly UpdateIntermediateTableAnalysisRule: string;
```

- *Type:* string

[Write] cleanrooms:UpdateIntermediateTableAnalysisRule.

---

##### `UpdateMembership`<sup>Required</sup> <a name="UpdateMembership" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateMembership"></a>

```typescript
public readonly UpdateMembership: string;
```

- *Type:* string

[Write] cleanrooms:UpdateMembership.

---

##### `UpdatePrivacyBudgetTemplate`<sup>Required</sup> <a name="UpdatePrivacyBudgetTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdatePrivacyBudgetTemplate"></a>

```typescript
public readonly UpdatePrivacyBudgetTemplate: string;
```

- *Type:* string

[Write] cleanrooms:UpdatePrivacyBudgetTemplate.

---

##### `UpdateProtectedJob`<sup>Required</sup> <a name="UpdateProtectedJob" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateProtectedJob"></a>

```typescript
public readonly UpdateProtectedJob: string;
```

- *Type:* string

[Write] cleanrooms:UpdateProtectedJob.

---

##### `UpdateProtectedQuery`<sup>Required</sup> <a name="UpdateProtectedQuery" id="@cdk_utils/iam.cleanrooms.CleanroomsActions.property.UpdateProtectedQuery"></a>

```typescript
public readonly UpdateProtectedQuery: string;
```

- *Type:* string

[Write] cleanrooms:UpdateProtectedQuery.

---

### CleanroomsConditions <a name="CleanroomsConditions" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions"></a>

Condition key constants and builders for cleanrooms.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

new cleanrooms.CleanroomsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.requestTag"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.resourceTag"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.tagKeys"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cleanrooms.CleanroomsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CleanroomsOperations <a name="CleanroomsOperations" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations"></a>

API operation to required IAM actions mapping for cleanrooms.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

new cleanrooms.CleanroomsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.BatchGetCollaborationAnalysisTemplate">BatchGetCollaborationAnalysisTemplate</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCollaborationAnalysisTemplate API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.BatchGetSchema">BatchGetSchema</a></code> | <code>string[]</code> | IAM actions required for the BatchGetSchema API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.BatchGetSchemaAnalysisRule">BatchGetSchemaAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the BatchGetSchemaAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateAnalysisTemplate">CreateAnalysisTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateAnalysisTemplate API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateCollaboration">CreateCollaboration</a></code> | <code>string[]</code> | IAM actions required for the CreateCollaboration API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateCollaborationChangeRequest">CreateCollaborationChangeRequest</a></code> | <code>string[]</code> | IAM actions required for the CreateCollaborationChangeRequest API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateConfiguredAudienceModelAssociation">CreateConfiguredAudienceModelAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateConfiguredAudienceModelAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateConfiguredTable">CreateConfiguredTable</a></code> | <code>string[]</code> | IAM actions required for the CreateConfiguredTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateConfiguredTableAnalysisRule">CreateConfiguredTableAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the CreateConfiguredTableAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateConfiguredTableAssociation">CreateConfiguredTableAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateConfiguredTableAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateConfiguredTableAssociationAnalysisRule">CreateConfiguredTableAssociationAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the CreateConfiguredTableAssociationAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateIdMappingTable">CreateIdMappingTable</a></code> | <code>string[]</code> | IAM actions required for the CreateIdMappingTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateIdNamespaceAssociation">CreateIdNamespaceAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateIdNamespaceAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateIntermediateTable">CreateIntermediateTable</a></code> | <code>string[]</code> | IAM actions required for the CreateIntermediateTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateIntermediateTableAnalysisRule">CreateIntermediateTableAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the CreateIntermediateTableAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateMembership">CreateMembership</a></code> | <code>string[]</code> | IAM actions required for the CreateMembership API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreatePrivacyBudgetTemplate">CreatePrivacyBudgetTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreatePrivacyBudgetTemplate API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteAnalysisTemplate">DeleteAnalysisTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnalysisTemplate API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteCollaboration">DeleteCollaboration</a></code> | <code>string[]</code> | IAM actions required for the DeleteCollaboration API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteConfiguredAudienceModelAssociation">DeleteConfiguredAudienceModelAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfiguredAudienceModelAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteConfiguredTable">DeleteConfiguredTable</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfiguredTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteConfiguredTableAnalysisRule">DeleteConfiguredTableAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfiguredTableAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteConfiguredTableAssociation">DeleteConfiguredTableAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfiguredTableAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteConfiguredTableAssociationAnalysisRule">DeleteConfiguredTableAssociationAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfiguredTableAssociationAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteIdMappingTable">DeleteIdMappingTable</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdMappingTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteIdNamespaceAssociation">DeleteIdNamespaceAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdNamespaceAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteIntermediateTable">DeleteIntermediateTable</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntermediateTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteIntermediateTableAnalysisRule">DeleteIntermediateTableAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntermediateTableAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteMember">DeleteMember</a></code> | <code>string[]</code> | IAM actions required for the DeleteMember API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteMembership">DeleteMembership</a></code> | <code>string[]</code> | IAM actions required for the DeleteMembership API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeletePrivacyBudgetTemplate">DeletePrivacyBudgetTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeletePrivacyBudgetTemplate API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DisallowIntermediateTable">DisallowIntermediateTable</a></code> | <code>string[]</code> | IAM actions required for the DisallowIntermediateTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListAnalysisLogExports">ListAnalysisLogExports</a></code> | <code>string[]</code> | IAM actions required for the ListAnalysisLogExports API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListAnalysisTemplates">ListAnalysisTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListAnalysisTemplates API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationAnalysisTemplates">ListCollaborationAnalysisTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListCollaborationAnalysisTemplates API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationChangeRequests">ListCollaborationChangeRequests</a></code> | <code>string[]</code> | IAM actions required for the ListCollaborationChangeRequests API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationConfiguredAudienceModelAssociations">ListCollaborationConfiguredAudienceModelAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListCollaborationConfiguredAudienceModelAssociations API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationIdNamespaceAssociations">ListCollaborationIdNamespaceAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListCollaborationIdNamespaceAssociations API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationPrivacyBudgets">ListCollaborationPrivacyBudgets</a></code> | <code>string[]</code> | IAM actions required for the ListCollaborationPrivacyBudgets API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationPrivacyBudgetTemplates">ListCollaborationPrivacyBudgetTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListCollaborationPrivacyBudgetTemplates API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborations">ListCollaborations</a></code> | <code>string[]</code> | IAM actions required for the ListCollaborations API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListConfiguredAudienceModelAssociations">ListConfiguredAudienceModelAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListConfiguredAudienceModelAssociations API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListConfiguredTableAssociations">ListConfiguredTableAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListConfiguredTableAssociations API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListConfiguredTables">ListConfiguredTables</a></code> | <code>string[]</code> | IAM actions required for the ListConfiguredTables API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListIdMappingTables">ListIdMappingTables</a></code> | <code>string[]</code> | IAM actions required for the ListIdMappingTables API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListIdNamespaceAssociations">ListIdNamespaceAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListIdNamespaceAssociations API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListIntermediateTables">ListIntermediateTables</a></code> | <code>string[]</code> | IAM actions required for the ListIntermediateTables API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListIntermediateTableVersions">ListIntermediateTableVersions</a></code> | <code>string[]</code> | IAM actions required for the ListIntermediateTableVersions API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListMembers">ListMembers</a></code> | <code>string[]</code> | IAM actions required for the ListMembers API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListMemberships">ListMemberships</a></code> | <code>string[]</code> | IAM actions required for the ListMemberships API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListPrivacyBudgets">ListPrivacyBudgets</a></code> | <code>string[]</code> | IAM actions required for the ListPrivacyBudgets API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListPrivacyBudgetTemplates">ListPrivacyBudgetTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListPrivacyBudgetTemplates API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListProtectedJobs">ListProtectedJobs</a></code> | <code>string[]</code> | IAM actions required for the ListProtectedJobs API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListProtectedQueries">ListProtectedQueries</a></code> | <code>string[]</code> | IAM actions required for the ListProtectedQueries API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListSchemas">ListSchemas</a></code> | <code>string[]</code> | IAM actions required for the ListSchemas API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetAnalysisLogExport">opGetAnalysisLogExport</a></code> | <code>string[]</code> | IAM actions required for the GetAnalysisLogExport API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetAnalysisTemplate">opGetAnalysisTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetAnalysisTemplate API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaboration">opGetCollaboration</a></code> | <code>string[]</code> | IAM actions required for the GetCollaboration API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaborationAnalysisTemplate">opGetCollaborationAnalysisTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetCollaborationAnalysisTemplate API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaborationChangeRequest">opGetCollaborationChangeRequest</a></code> | <code>string[]</code> | IAM actions required for the GetCollaborationChangeRequest API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaborationConfiguredAudienceModelAssociation">opGetCollaborationConfiguredAudienceModelAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetCollaborationConfiguredAudienceModelAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaborationIdNamespaceAssociation">opGetCollaborationIdNamespaceAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetCollaborationIdNamespaceAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaborationPrivacyBudgetTemplate">opGetCollaborationPrivacyBudgetTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetCollaborationPrivacyBudgetTemplate API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetConfiguredAudienceModelAssociation">opGetConfiguredAudienceModelAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetConfiguredAudienceModelAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetConfiguredTable">opGetConfiguredTable</a></code> | <code>string[]</code> | IAM actions required for the GetConfiguredTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetConfiguredTableAnalysisRule">opGetConfiguredTableAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the GetConfiguredTableAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetConfiguredTableAssociation">opGetConfiguredTableAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetConfiguredTableAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetConfiguredTableAssociationAnalysisRule">opGetConfiguredTableAssociationAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the GetConfiguredTableAssociationAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetIdMappingTable">opGetIdMappingTable</a></code> | <code>string[]</code> | IAM actions required for the GetIdMappingTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetIdNamespaceAssociation">opGetIdNamespaceAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetIdNamespaceAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetIntermediateTable">opGetIntermediateTable</a></code> | <code>string[]</code> | IAM actions required for the GetIntermediateTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetIntermediateTableAnalysisRule">opGetIntermediateTableAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the GetIntermediateTableAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetMembership">opGetMembership</a></code> | <code>string[]</code> | IAM actions required for the GetMembership API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetPrivacyBudgetTemplate">opGetPrivacyBudgetTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetPrivacyBudgetTemplate API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetProtectedJob">opGetProtectedJob</a></code> | <code>string[]</code> | IAM actions required for the GetProtectedJob API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetProtectedQuery">opGetProtectedQuery</a></code> | <code>string[]</code> | IAM actions required for the GetProtectedQuery API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetSchema">opGetSchema</a></code> | <code>string[]</code> | IAM actions required for the GetSchema API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetSchemaAnalysisRule">opGetSchemaAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the GetSchemaAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.PopulateIdMappingTable">PopulateIdMappingTable</a></code> | <code>string[]</code> | IAM actions required for the PopulateIdMappingTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.PopulateIntermediateTable">PopulateIntermediateTable</a></code> | <code>string[]</code> | IAM actions required for the PopulateIntermediateTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.PreviewPrivacyImpact">PreviewPrivacyImpact</a></code> | <code>string[]</code> | IAM actions required for the PreviewPrivacyImpact API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.StartAnalysisLogExport">StartAnalysisLogExport</a></code> | <code>string[]</code> | IAM actions required for the StartAnalysisLogExport API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.StartProtectedJob">StartProtectedJob</a></code> | <code>string[]</code> | IAM actions required for the StartProtectedJob API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.StartProtectedQuery">StartProtectedQuery</a></code> | <code>string[]</code> | IAM actions required for the StartProtectedQuery API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateAnalysisTemplate">UpdateAnalysisTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateAnalysisTemplate API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateCollaboration">UpdateCollaboration</a></code> | <code>string[]</code> | IAM actions required for the UpdateCollaboration API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateCollaborationChangeRequest">UpdateCollaborationChangeRequest</a></code> | <code>string[]</code> | IAM actions required for the UpdateCollaborationChangeRequest API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateConfiguredAudienceModelAssociation">UpdateConfiguredAudienceModelAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfiguredAudienceModelAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateConfiguredTable">UpdateConfiguredTable</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfiguredTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateConfiguredTableAnalysisRule">UpdateConfiguredTableAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfiguredTableAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateConfiguredTableAssociation">UpdateConfiguredTableAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfiguredTableAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateConfiguredTableAssociationAnalysisRule">UpdateConfiguredTableAssociationAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfiguredTableAssociationAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateIdMappingTable">UpdateIdMappingTable</a></code> | <code>string[]</code> | IAM actions required for the UpdateIdMappingTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateIdNamespaceAssociation">UpdateIdNamespaceAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateIdNamespaceAssociation API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateIntermediateTable">UpdateIntermediateTable</a></code> | <code>string[]</code> | IAM actions required for the UpdateIntermediateTable API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateIntermediateTableAnalysisRule">UpdateIntermediateTableAnalysisRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateIntermediateTableAnalysisRule API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateMembership">UpdateMembership</a></code> | <code>string[]</code> | IAM actions required for the UpdateMembership API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdatePrivacyBudgetTemplate">UpdatePrivacyBudgetTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdatePrivacyBudgetTemplate API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateProtectedJob">UpdateProtectedJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateProtectedJob API call. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateProtectedQuery">UpdateProtectedQuery</a></code> | <code>string[]</code> | IAM actions required for the UpdateProtectedQuery API call. |

---

##### `BatchGetCollaborationAnalysisTemplate`<sup>Required</sup> <a name="BatchGetCollaborationAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.BatchGetCollaborationAnalysisTemplate"></a>

```typescript
public readonly BatchGetCollaborationAnalysisTemplate: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCollaborationAnalysisTemplate API call.

---

##### `BatchGetSchema`<sup>Required</sup> <a name="BatchGetSchema" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.BatchGetSchema"></a>

```typescript
public readonly BatchGetSchema: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetSchema API call.

---

##### `BatchGetSchemaAnalysisRule`<sup>Required</sup> <a name="BatchGetSchemaAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.BatchGetSchemaAnalysisRule"></a>

```typescript
public readonly BatchGetSchemaAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetSchemaAnalysisRule API call.

---

##### `CreateAnalysisTemplate`<sup>Required</sup> <a name="CreateAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateAnalysisTemplate"></a>

```typescript
public readonly CreateAnalysisTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateAnalysisTemplate API call.

---

##### `CreateCollaboration`<sup>Required</sup> <a name="CreateCollaboration" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateCollaboration"></a>

```typescript
public readonly CreateCollaboration: string[];
```

- *Type:* string[]

IAM actions required for the CreateCollaboration API call.

---

##### `CreateCollaborationChangeRequest`<sup>Required</sup> <a name="CreateCollaborationChangeRequest" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateCollaborationChangeRequest"></a>

```typescript
public readonly CreateCollaborationChangeRequest: string[];
```

- *Type:* string[]

IAM actions required for the CreateCollaborationChangeRequest API call.

---

##### `CreateConfiguredAudienceModelAssociation`<sup>Required</sup> <a name="CreateConfiguredAudienceModelAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateConfiguredAudienceModelAssociation"></a>

```typescript
public readonly CreateConfiguredAudienceModelAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfiguredAudienceModelAssociation API call.

---

##### `CreateConfiguredTable`<sup>Required</sup> <a name="CreateConfiguredTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateConfiguredTable"></a>

```typescript
public readonly CreateConfiguredTable: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfiguredTable API call.

---

##### `CreateConfiguredTableAnalysisRule`<sup>Required</sup> <a name="CreateConfiguredTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateConfiguredTableAnalysisRule"></a>

```typescript
public readonly CreateConfiguredTableAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfiguredTableAnalysisRule API call.

---

##### `CreateConfiguredTableAssociation`<sup>Required</sup> <a name="CreateConfiguredTableAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateConfiguredTableAssociation"></a>

```typescript
public readonly CreateConfiguredTableAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfiguredTableAssociation API call.

---

##### `CreateConfiguredTableAssociationAnalysisRule`<sup>Required</sup> <a name="CreateConfiguredTableAssociationAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateConfiguredTableAssociationAnalysisRule"></a>

```typescript
public readonly CreateConfiguredTableAssociationAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfiguredTableAssociationAnalysisRule API call.

---

##### `CreateIdMappingTable`<sup>Required</sup> <a name="CreateIdMappingTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateIdMappingTable"></a>

```typescript
public readonly CreateIdMappingTable: string[];
```

- *Type:* string[]

IAM actions required for the CreateIdMappingTable API call.

---

##### `CreateIdNamespaceAssociation`<sup>Required</sup> <a name="CreateIdNamespaceAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateIdNamespaceAssociation"></a>

```typescript
public readonly CreateIdNamespaceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateIdNamespaceAssociation API call.

---

##### `CreateIntermediateTable`<sup>Required</sup> <a name="CreateIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateIntermediateTable"></a>

```typescript
public readonly CreateIntermediateTable: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntermediateTable API call.

---

##### `CreateIntermediateTableAnalysisRule`<sup>Required</sup> <a name="CreateIntermediateTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateIntermediateTableAnalysisRule"></a>

```typescript
public readonly CreateIntermediateTableAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntermediateTableAnalysisRule API call.

---

##### `CreateMembership`<sup>Required</sup> <a name="CreateMembership" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreateMembership"></a>

```typescript
public readonly CreateMembership: string[];
```

- *Type:* string[]

IAM actions required for the CreateMembership API call.

---

##### `CreatePrivacyBudgetTemplate`<sup>Required</sup> <a name="CreatePrivacyBudgetTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.CreatePrivacyBudgetTemplate"></a>

```typescript
public readonly CreatePrivacyBudgetTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreatePrivacyBudgetTemplate API call.

---

##### `DeleteAnalysisTemplate`<sup>Required</sup> <a name="DeleteAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteAnalysisTemplate"></a>

```typescript
public readonly DeleteAnalysisTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnalysisTemplate API call.

---

##### `DeleteCollaboration`<sup>Required</sup> <a name="DeleteCollaboration" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteCollaboration"></a>

```typescript
public readonly DeleteCollaboration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCollaboration API call.

---

##### `DeleteConfiguredAudienceModelAssociation`<sup>Required</sup> <a name="DeleteConfiguredAudienceModelAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteConfiguredAudienceModelAssociation"></a>

```typescript
public readonly DeleteConfiguredAudienceModelAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfiguredAudienceModelAssociation API call.

---

##### `DeleteConfiguredTable`<sup>Required</sup> <a name="DeleteConfiguredTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteConfiguredTable"></a>

```typescript
public readonly DeleteConfiguredTable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfiguredTable API call.

---

##### `DeleteConfiguredTableAnalysisRule`<sup>Required</sup> <a name="DeleteConfiguredTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteConfiguredTableAnalysisRule"></a>

```typescript
public readonly DeleteConfiguredTableAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfiguredTableAnalysisRule API call.

---

##### `DeleteConfiguredTableAssociation`<sup>Required</sup> <a name="DeleteConfiguredTableAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteConfiguredTableAssociation"></a>

```typescript
public readonly DeleteConfiguredTableAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfiguredTableAssociation API call.

---

##### `DeleteConfiguredTableAssociationAnalysisRule`<sup>Required</sup> <a name="DeleteConfiguredTableAssociationAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteConfiguredTableAssociationAnalysisRule"></a>

```typescript
public readonly DeleteConfiguredTableAssociationAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfiguredTableAssociationAnalysisRule API call.

---

##### `DeleteIdMappingTable`<sup>Required</sup> <a name="DeleteIdMappingTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteIdMappingTable"></a>

```typescript
public readonly DeleteIdMappingTable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdMappingTable API call.

---

##### `DeleteIdNamespaceAssociation`<sup>Required</sup> <a name="DeleteIdNamespaceAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteIdNamespaceAssociation"></a>

```typescript
public readonly DeleteIdNamespaceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdNamespaceAssociation API call.

---

##### `DeleteIntermediateTable`<sup>Required</sup> <a name="DeleteIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteIntermediateTable"></a>

```typescript
public readonly DeleteIntermediateTable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntermediateTable API call.

---

##### `DeleteIntermediateTableAnalysisRule`<sup>Required</sup> <a name="DeleteIntermediateTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteIntermediateTableAnalysisRule"></a>

```typescript
public readonly DeleteIntermediateTableAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntermediateTableAnalysisRule API call.

---

##### `DeleteMember`<sup>Required</sup> <a name="DeleteMember" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteMember"></a>

```typescript
public readonly DeleteMember: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMember API call.

---

##### `DeleteMembership`<sup>Required</sup> <a name="DeleteMembership" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeleteMembership"></a>

```typescript
public readonly DeleteMembership: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMembership API call.

---

##### `DeletePrivacyBudgetTemplate`<sup>Required</sup> <a name="DeletePrivacyBudgetTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DeletePrivacyBudgetTemplate"></a>

```typescript
public readonly DeletePrivacyBudgetTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeletePrivacyBudgetTemplate API call.

---

##### `DisallowIntermediateTable`<sup>Required</sup> <a name="DisallowIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.DisallowIntermediateTable"></a>

```typescript
public readonly DisallowIntermediateTable: string[];
```

- *Type:* string[]

IAM actions required for the DisallowIntermediateTable API call.

---

##### `ListAnalysisLogExports`<sup>Required</sup> <a name="ListAnalysisLogExports" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListAnalysisLogExports"></a>

```typescript
public readonly ListAnalysisLogExports: string[];
```

- *Type:* string[]

IAM actions required for the ListAnalysisLogExports API call.

---

##### `ListAnalysisTemplates`<sup>Required</sup> <a name="ListAnalysisTemplates" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListAnalysisTemplates"></a>

```typescript
public readonly ListAnalysisTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListAnalysisTemplates API call.

---

##### `ListCollaborationAnalysisTemplates`<sup>Required</sup> <a name="ListCollaborationAnalysisTemplates" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationAnalysisTemplates"></a>

```typescript
public readonly ListCollaborationAnalysisTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListCollaborationAnalysisTemplates API call.

---

##### `ListCollaborationChangeRequests`<sup>Required</sup> <a name="ListCollaborationChangeRequests" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationChangeRequests"></a>

```typescript
public readonly ListCollaborationChangeRequests: string[];
```

- *Type:* string[]

IAM actions required for the ListCollaborationChangeRequests API call.

---

##### `ListCollaborationConfiguredAudienceModelAssociations`<sup>Required</sup> <a name="ListCollaborationConfiguredAudienceModelAssociations" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationConfiguredAudienceModelAssociations"></a>

```typescript
public readonly ListCollaborationConfiguredAudienceModelAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListCollaborationConfiguredAudienceModelAssociations API call.

---

##### `ListCollaborationIdNamespaceAssociations`<sup>Required</sup> <a name="ListCollaborationIdNamespaceAssociations" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationIdNamespaceAssociations"></a>

```typescript
public readonly ListCollaborationIdNamespaceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListCollaborationIdNamespaceAssociations API call.

---

##### `ListCollaborationPrivacyBudgets`<sup>Required</sup> <a name="ListCollaborationPrivacyBudgets" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationPrivacyBudgets"></a>

```typescript
public readonly ListCollaborationPrivacyBudgets: string[];
```

- *Type:* string[]

IAM actions required for the ListCollaborationPrivacyBudgets API call.

---

##### `ListCollaborationPrivacyBudgetTemplates`<sup>Required</sup> <a name="ListCollaborationPrivacyBudgetTemplates" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborationPrivacyBudgetTemplates"></a>

```typescript
public readonly ListCollaborationPrivacyBudgetTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListCollaborationPrivacyBudgetTemplates API call.

---

##### `ListCollaborations`<sup>Required</sup> <a name="ListCollaborations" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListCollaborations"></a>

```typescript
public readonly ListCollaborations: string[];
```

- *Type:* string[]

IAM actions required for the ListCollaborations API call.

---

##### `ListConfiguredAudienceModelAssociations`<sup>Required</sup> <a name="ListConfiguredAudienceModelAssociations" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListConfiguredAudienceModelAssociations"></a>

```typescript
public readonly ListConfiguredAudienceModelAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListConfiguredAudienceModelAssociations API call.

---

##### `ListConfiguredTableAssociations`<sup>Required</sup> <a name="ListConfiguredTableAssociations" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListConfiguredTableAssociations"></a>

```typescript
public readonly ListConfiguredTableAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListConfiguredTableAssociations API call.

---

##### `ListConfiguredTables`<sup>Required</sup> <a name="ListConfiguredTables" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListConfiguredTables"></a>

```typescript
public readonly ListConfiguredTables: string[];
```

- *Type:* string[]

IAM actions required for the ListConfiguredTables API call.

---

##### `ListIdMappingTables`<sup>Required</sup> <a name="ListIdMappingTables" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListIdMappingTables"></a>

```typescript
public readonly ListIdMappingTables: string[];
```

- *Type:* string[]

IAM actions required for the ListIdMappingTables API call.

---

##### `ListIdNamespaceAssociations`<sup>Required</sup> <a name="ListIdNamespaceAssociations" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListIdNamespaceAssociations"></a>

```typescript
public readonly ListIdNamespaceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListIdNamespaceAssociations API call.

---

##### `ListIntermediateTables`<sup>Required</sup> <a name="ListIntermediateTables" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListIntermediateTables"></a>

```typescript
public readonly ListIntermediateTables: string[];
```

- *Type:* string[]

IAM actions required for the ListIntermediateTables API call.

---

##### `ListIntermediateTableVersions`<sup>Required</sup> <a name="ListIntermediateTableVersions" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListIntermediateTableVersions"></a>

```typescript
public readonly ListIntermediateTableVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListIntermediateTableVersions API call.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListMembers"></a>

```typescript
public readonly ListMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListMembers API call.

---

##### `ListMemberships`<sup>Required</sup> <a name="ListMemberships" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListMemberships"></a>

```typescript
public readonly ListMemberships: string[];
```

- *Type:* string[]

IAM actions required for the ListMemberships API call.

---

##### `ListPrivacyBudgets`<sup>Required</sup> <a name="ListPrivacyBudgets" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListPrivacyBudgets"></a>

```typescript
public readonly ListPrivacyBudgets: string[];
```

- *Type:* string[]

IAM actions required for the ListPrivacyBudgets API call.

---

##### `ListPrivacyBudgetTemplates`<sup>Required</sup> <a name="ListPrivacyBudgetTemplates" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListPrivacyBudgetTemplates"></a>

```typescript
public readonly ListPrivacyBudgetTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListPrivacyBudgetTemplates API call.

---

##### `ListProtectedJobs`<sup>Required</sup> <a name="ListProtectedJobs" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListProtectedJobs"></a>

```typescript
public readonly ListProtectedJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListProtectedJobs API call.

---

##### `ListProtectedQueries`<sup>Required</sup> <a name="ListProtectedQueries" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListProtectedQueries"></a>

```typescript
public readonly ListProtectedQueries: string[];
```

- *Type:* string[]

IAM actions required for the ListProtectedQueries API call.

---

##### `ListSchemas`<sup>Required</sup> <a name="ListSchemas" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListSchemas"></a>

```typescript
public readonly ListSchemas: string[];
```

- *Type:* string[]

IAM actions required for the ListSchemas API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAnalysisLogExport`<sup>Required</sup> <a name="opGetAnalysisLogExport" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetAnalysisLogExport"></a>

```typescript
public readonly opGetAnalysisLogExport: string[];
```

- *Type:* string[]

IAM actions required for the GetAnalysisLogExport API call.

---

##### `opGetAnalysisTemplate`<sup>Required</sup> <a name="opGetAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetAnalysisTemplate"></a>

```typescript
public readonly opGetAnalysisTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetAnalysisTemplate API call.

---

##### `opGetCollaboration`<sup>Required</sup> <a name="opGetCollaboration" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaboration"></a>

```typescript
public readonly opGetCollaboration: string[];
```

- *Type:* string[]

IAM actions required for the GetCollaboration API call.

---

##### `opGetCollaborationAnalysisTemplate`<sup>Required</sup> <a name="opGetCollaborationAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaborationAnalysisTemplate"></a>

```typescript
public readonly opGetCollaborationAnalysisTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetCollaborationAnalysisTemplate API call.

---

##### `opGetCollaborationChangeRequest`<sup>Required</sup> <a name="opGetCollaborationChangeRequest" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaborationChangeRequest"></a>

```typescript
public readonly opGetCollaborationChangeRequest: string[];
```

- *Type:* string[]

IAM actions required for the GetCollaborationChangeRequest API call.

---

##### `opGetCollaborationConfiguredAudienceModelAssociation`<sup>Required</sup> <a name="opGetCollaborationConfiguredAudienceModelAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaborationConfiguredAudienceModelAssociation"></a>

```typescript
public readonly opGetCollaborationConfiguredAudienceModelAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetCollaborationConfiguredAudienceModelAssociation API call.

---

##### `opGetCollaborationIdNamespaceAssociation`<sup>Required</sup> <a name="opGetCollaborationIdNamespaceAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaborationIdNamespaceAssociation"></a>

```typescript
public readonly opGetCollaborationIdNamespaceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetCollaborationIdNamespaceAssociation API call.

---

##### `opGetCollaborationPrivacyBudgetTemplate`<sup>Required</sup> <a name="opGetCollaborationPrivacyBudgetTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetCollaborationPrivacyBudgetTemplate"></a>

```typescript
public readonly opGetCollaborationPrivacyBudgetTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetCollaborationPrivacyBudgetTemplate API call.

---

##### `opGetConfiguredAudienceModelAssociation`<sup>Required</sup> <a name="opGetConfiguredAudienceModelAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetConfiguredAudienceModelAssociation"></a>

```typescript
public readonly opGetConfiguredAudienceModelAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetConfiguredAudienceModelAssociation API call.

---

##### `opGetConfiguredTable`<sup>Required</sup> <a name="opGetConfiguredTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetConfiguredTable"></a>

```typescript
public readonly opGetConfiguredTable: string[];
```

- *Type:* string[]

IAM actions required for the GetConfiguredTable API call.

---

##### `opGetConfiguredTableAnalysisRule`<sup>Required</sup> <a name="opGetConfiguredTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetConfiguredTableAnalysisRule"></a>

```typescript
public readonly opGetConfiguredTableAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the GetConfiguredTableAnalysisRule API call.

---

##### `opGetConfiguredTableAssociation`<sup>Required</sup> <a name="opGetConfiguredTableAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetConfiguredTableAssociation"></a>

```typescript
public readonly opGetConfiguredTableAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetConfiguredTableAssociation API call.

---

##### `opGetConfiguredTableAssociationAnalysisRule`<sup>Required</sup> <a name="opGetConfiguredTableAssociationAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetConfiguredTableAssociationAnalysisRule"></a>

```typescript
public readonly opGetConfiguredTableAssociationAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the GetConfiguredTableAssociationAnalysisRule API call.

---

##### `opGetIdMappingTable`<sup>Required</sup> <a name="opGetIdMappingTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetIdMappingTable"></a>

```typescript
public readonly opGetIdMappingTable: string[];
```

- *Type:* string[]

IAM actions required for the GetIdMappingTable API call.

---

##### `opGetIdNamespaceAssociation`<sup>Required</sup> <a name="opGetIdNamespaceAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetIdNamespaceAssociation"></a>

```typescript
public readonly opGetIdNamespaceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetIdNamespaceAssociation API call.

---

##### `opGetIntermediateTable`<sup>Required</sup> <a name="opGetIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetIntermediateTable"></a>

```typescript
public readonly opGetIntermediateTable: string[];
```

- *Type:* string[]

IAM actions required for the GetIntermediateTable API call.

---

##### `opGetIntermediateTableAnalysisRule`<sup>Required</sup> <a name="opGetIntermediateTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetIntermediateTableAnalysisRule"></a>

```typescript
public readonly opGetIntermediateTableAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the GetIntermediateTableAnalysisRule API call.

---

##### `opGetMembership`<sup>Required</sup> <a name="opGetMembership" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetMembership"></a>

```typescript
public readonly opGetMembership: string[];
```

- *Type:* string[]

IAM actions required for the GetMembership API call.

---

##### `opGetPrivacyBudgetTemplate`<sup>Required</sup> <a name="opGetPrivacyBudgetTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetPrivacyBudgetTemplate"></a>

```typescript
public readonly opGetPrivacyBudgetTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetPrivacyBudgetTemplate API call.

---

##### `opGetProtectedJob`<sup>Required</sup> <a name="opGetProtectedJob" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetProtectedJob"></a>

```typescript
public readonly opGetProtectedJob: string[];
```

- *Type:* string[]

IAM actions required for the GetProtectedJob API call.

---

##### `opGetProtectedQuery`<sup>Required</sup> <a name="opGetProtectedQuery" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetProtectedQuery"></a>

```typescript
public readonly opGetProtectedQuery: string[];
```

- *Type:* string[]

IAM actions required for the GetProtectedQuery API call.

---

##### `opGetSchema`<sup>Required</sup> <a name="opGetSchema" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetSchema"></a>

```typescript
public readonly opGetSchema: string[];
```

- *Type:* string[]

IAM actions required for the GetSchema API call.

---

##### `opGetSchemaAnalysisRule`<sup>Required</sup> <a name="opGetSchemaAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.opGetSchemaAnalysisRule"></a>

```typescript
public readonly opGetSchemaAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the GetSchemaAnalysisRule API call.

---

##### `PopulateIdMappingTable`<sup>Required</sup> <a name="PopulateIdMappingTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.PopulateIdMappingTable"></a>

```typescript
public readonly PopulateIdMappingTable: string[];
```

- *Type:* string[]

IAM actions required for the PopulateIdMappingTable API call.

---

##### `PopulateIntermediateTable`<sup>Required</sup> <a name="PopulateIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.PopulateIntermediateTable"></a>

```typescript
public readonly PopulateIntermediateTable: string[];
```

- *Type:* string[]

IAM actions required for the PopulateIntermediateTable API call.

---

##### `PreviewPrivacyImpact`<sup>Required</sup> <a name="PreviewPrivacyImpact" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.PreviewPrivacyImpact"></a>

```typescript
public readonly PreviewPrivacyImpact: string[];
```

- *Type:* string[]

IAM actions required for the PreviewPrivacyImpact API call.

---

##### `StartAnalysisLogExport`<sup>Required</sup> <a name="StartAnalysisLogExport" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.StartAnalysisLogExport"></a>

```typescript
public readonly StartAnalysisLogExport: string[];
```

- *Type:* string[]

IAM actions required for the StartAnalysisLogExport API call.

---

##### `StartProtectedJob`<sup>Required</sup> <a name="StartProtectedJob" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.StartProtectedJob"></a>

```typescript
public readonly StartProtectedJob: string[];
```

- *Type:* string[]

IAM actions required for the StartProtectedJob API call.

---

##### `StartProtectedQuery`<sup>Required</sup> <a name="StartProtectedQuery" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.StartProtectedQuery"></a>

```typescript
public readonly StartProtectedQuery: string[];
```

- *Type:* string[]

IAM actions required for the StartProtectedQuery API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAnalysisTemplate`<sup>Required</sup> <a name="UpdateAnalysisTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateAnalysisTemplate"></a>

```typescript
public readonly UpdateAnalysisTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAnalysisTemplate API call.

---

##### `UpdateCollaboration`<sup>Required</sup> <a name="UpdateCollaboration" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateCollaboration"></a>

```typescript
public readonly UpdateCollaboration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCollaboration API call.

---

##### `UpdateCollaborationChangeRequest`<sup>Required</sup> <a name="UpdateCollaborationChangeRequest" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateCollaborationChangeRequest"></a>

```typescript
public readonly UpdateCollaborationChangeRequest: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCollaborationChangeRequest API call.

---

##### `UpdateConfiguredAudienceModelAssociation`<sup>Required</sup> <a name="UpdateConfiguredAudienceModelAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateConfiguredAudienceModelAssociation"></a>

```typescript
public readonly UpdateConfiguredAudienceModelAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfiguredAudienceModelAssociation API call.

---

##### `UpdateConfiguredTable`<sup>Required</sup> <a name="UpdateConfiguredTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateConfiguredTable"></a>

```typescript
public readonly UpdateConfiguredTable: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfiguredTable API call.

---

##### `UpdateConfiguredTableAnalysisRule`<sup>Required</sup> <a name="UpdateConfiguredTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateConfiguredTableAnalysisRule"></a>

```typescript
public readonly UpdateConfiguredTableAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfiguredTableAnalysisRule API call.

---

##### `UpdateConfiguredTableAssociation`<sup>Required</sup> <a name="UpdateConfiguredTableAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateConfiguredTableAssociation"></a>

```typescript
public readonly UpdateConfiguredTableAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfiguredTableAssociation API call.

---

##### `UpdateConfiguredTableAssociationAnalysisRule`<sup>Required</sup> <a name="UpdateConfiguredTableAssociationAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateConfiguredTableAssociationAnalysisRule"></a>

```typescript
public readonly UpdateConfiguredTableAssociationAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfiguredTableAssociationAnalysisRule API call.

---

##### `UpdateIdMappingTable`<sup>Required</sup> <a name="UpdateIdMappingTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateIdMappingTable"></a>

```typescript
public readonly UpdateIdMappingTable: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIdMappingTable API call.

---

##### `UpdateIdNamespaceAssociation`<sup>Required</sup> <a name="UpdateIdNamespaceAssociation" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateIdNamespaceAssociation"></a>

```typescript
public readonly UpdateIdNamespaceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIdNamespaceAssociation API call.

---

##### `UpdateIntermediateTable`<sup>Required</sup> <a name="UpdateIntermediateTable" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateIntermediateTable"></a>

```typescript
public readonly UpdateIntermediateTable: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIntermediateTable API call.

---

##### `UpdateIntermediateTableAnalysisRule`<sup>Required</sup> <a name="UpdateIntermediateTableAnalysisRule" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateIntermediateTableAnalysisRule"></a>

```typescript
public readonly UpdateIntermediateTableAnalysisRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIntermediateTableAnalysisRule API call.

---

##### `UpdateMembership`<sup>Required</sup> <a name="UpdateMembership" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateMembership"></a>

```typescript
public readonly UpdateMembership: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMembership API call.

---

##### `UpdatePrivacyBudgetTemplate`<sup>Required</sup> <a name="UpdatePrivacyBudgetTemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdatePrivacyBudgetTemplate"></a>

```typescript
public readonly UpdatePrivacyBudgetTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePrivacyBudgetTemplate API call.

---

##### `UpdateProtectedJob`<sup>Required</sup> <a name="UpdateProtectedJob" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateProtectedJob"></a>

```typescript
public readonly UpdateProtectedJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProtectedJob API call.

---

##### `UpdateProtectedQuery`<sup>Required</sup> <a name="UpdateProtectedQuery" id="@cdk_utils/iam.cleanrooms.CleanroomsOperations.property.UpdateProtectedQuery"></a>

```typescript
public readonly UpdateProtectedQuery: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProtectedQuery API call.

---

### CleanroomsResources <a name="CleanroomsResources" id="@cdk_utils/iam.cleanrooms.CleanroomsResources"></a>

ARN builders, validators, and parsers for cleanrooms resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.Initializer"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

new cleanrooms.CleanroomsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.analysistemplate">analysistemplate</a></code> | Builds an ARN for the analysistemplate resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.collaboration">collaboration</a></code> | Builds an ARN for the collaboration resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.configuredaudiencemodelassociation">configuredaudiencemodelassociation</a></code> | Builds an ARN for the configuredaudiencemodelassociation resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.configuredtable">configuredtable</a></code> | Builds an ARN for the configuredtable resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.configuredtableassociation">configuredtableassociation</a></code> | Builds an ARN for the configuredtableassociation resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.idmappingtable">idmappingtable</a></code> | Builds an ARN for the idmappingtable resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.idnamespaceassociation">idnamespaceassociation</a></code> | Builds an ARN for the idnamespaceassociation resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.intermediatetable">intermediatetable</a></code> | Builds an ARN for the intermediatetable resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidAnalysistemplateArn">isValidAnalysistemplateArn</a></code> | Validates whether a string is a valid ARN for the analysistemplate resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidCollaborationArn">isValidCollaborationArn</a></code> | Validates whether a string is a valid ARN for the collaboration resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidConfiguredaudiencemodelassociationArn">isValidConfiguredaudiencemodelassociationArn</a></code> | Validates whether a string is a valid ARN for the configuredaudiencemodelassociation resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidConfiguredtableArn">isValidConfiguredtableArn</a></code> | Validates whether a string is a valid ARN for the configuredtable resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidConfiguredtableassociationArn">isValidConfiguredtableassociationArn</a></code> | Validates whether a string is a valid ARN for the configuredtableassociation resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidIdmappingtableArn">isValidIdmappingtableArn</a></code> | Validates whether a string is a valid ARN for the idmappingtable resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidIdnamespaceassociationArn">isValidIdnamespaceassociationArn</a></code> | Validates whether a string is a valid ARN for the idnamespaceassociation resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidIntermediatetableArn">isValidIntermediatetableArn</a></code> | Validates whether a string is a valid ARN for the intermediatetable resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidMembershipArn">isValidMembershipArn</a></code> | Validates whether a string is a valid ARN for the membership resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidPrivacybudgettemplateArn">isValidPrivacybudgettemplateArn</a></code> | Validates whether a string is a valid ARN for the privacybudgettemplate resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.membership">membership</a></code> | Builds an ARN for the membership resource. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.parseAnalysistemplateArn">parseAnalysistemplateArn</a></code> | Parses a analysistemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.parseCollaborationArn">parseCollaborationArn</a></code> | Parses a collaboration ARN into its components. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.parseConfiguredaudiencemodelassociationArn">parseConfiguredaudiencemodelassociationArn</a></code> | Parses a configuredaudiencemodelassociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.parseConfiguredtableArn">parseConfiguredtableArn</a></code> | Parses a configuredtable ARN into its components. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.parseConfiguredtableassociationArn">parseConfiguredtableassociationArn</a></code> | Parses a configuredtableassociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.parseIdmappingtableArn">parseIdmappingtableArn</a></code> | Parses a idmappingtable ARN into its components. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.parseIdnamespaceassociationArn">parseIdnamespaceassociationArn</a></code> | Parses a idnamespaceassociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.parseIntermediatetableArn">parseIntermediatetableArn</a></code> | Parses a intermediatetable ARN into its components. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.parseMembershipArn">parseMembershipArn</a></code> | Parses a membership ARN into its components. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.parsePrivacybudgettemplateArn">parsePrivacybudgettemplateArn</a></code> | Parses a privacybudgettemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.cleanrooms.CleanroomsResources.privacybudgettemplate">privacybudgettemplate</a></code> | Builds an ARN for the privacybudgettemplate resource. |

---

##### `analysistemplate` <a name="analysistemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.analysistemplate"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.analysistemplate(props: CleanroomsAnalysistemplateArnProps)
```

Builds an ARN for the analysistemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.analysistemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cleanrooms.CleanroomsAnalysistemplateArnProps">CleanroomsAnalysistemplateArnProps</a>

---

##### `collaboration` <a name="collaboration" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.collaboration"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.collaboration(props: CleanroomsCollaborationArnProps)
```

Builds an ARN for the collaboration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.collaboration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cleanrooms.CleanroomsCollaborationArnProps">CleanroomsCollaborationArnProps</a>

---

##### `configuredaudiencemodelassociation` <a name="configuredaudiencemodelassociation" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.configuredaudiencemodelassociation"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.configuredaudiencemodelassociation(props: CleanroomsConfiguredaudiencemodelassociationArnProps)
```

Builds an ARN for the configuredaudiencemodelassociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.configuredaudiencemodelassociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredaudiencemodelassociationArnProps">CleanroomsConfiguredaudiencemodelassociationArnProps</a>

---

##### `configuredtable` <a name="configuredtable" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.configuredtable"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.configuredtable(props: CleanroomsConfiguredtableArnProps)
```

Builds an ARN for the configuredtable resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.configuredtable.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableArnProps">CleanroomsConfiguredtableArnProps</a>

---

##### `configuredtableassociation` <a name="configuredtableassociation" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.configuredtableassociation"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.configuredtableassociation(props: CleanroomsConfiguredtableassociationArnProps)
```

Builds an ARN for the configuredtableassociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.configuredtableassociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cleanrooms.CleanroomsConfiguredtableassociationArnProps">CleanroomsConfiguredtableassociationArnProps</a>

---

##### `idmappingtable` <a name="idmappingtable" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.idmappingtable"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.idmappingtable(props: CleanroomsIdmappingtableArnProps)
```

Builds an ARN for the idmappingtable resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.idmappingtable.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdmappingtableArnProps">CleanroomsIdmappingtableArnProps</a>

---

##### `idnamespaceassociation` <a name="idnamespaceassociation" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.idnamespaceassociation"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.idnamespaceassociation(props: CleanroomsIdnamespaceassociationArnProps)
```

Builds an ARN for the idnamespaceassociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.idnamespaceassociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cleanrooms.CleanroomsIdnamespaceassociationArnProps">CleanroomsIdnamespaceassociationArnProps</a>

---

##### `intermediatetable` <a name="intermediatetable" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.intermediatetable"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.intermediatetable(props: CleanroomsIntermediatetableArnProps)
```

Builds an ARN for the intermediatetable resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.intermediatetable.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cleanrooms.CleanroomsIntermediatetableArnProps">CleanroomsIntermediatetableArnProps</a>

---

##### `isValidAnalysistemplateArn` <a name="isValidAnalysistemplateArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidAnalysistemplateArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.isValidAnalysistemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the analysistemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidAnalysistemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCollaborationArn` <a name="isValidCollaborationArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidCollaborationArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.isValidCollaborationArn(arn: string)
```

Validates whether a string is a valid ARN for the collaboration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidCollaborationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfiguredaudiencemodelassociationArn` <a name="isValidConfiguredaudiencemodelassociationArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidConfiguredaudiencemodelassociationArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.isValidConfiguredaudiencemodelassociationArn(arn: string)
```

Validates whether a string is a valid ARN for the configuredaudiencemodelassociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidConfiguredaudiencemodelassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfiguredtableArn` <a name="isValidConfiguredtableArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidConfiguredtableArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.isValidConfiguredtableArn(arn: string)
```

Validates whether a string is a valid ARN for the configuredtable resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidConfiguredtableArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfiguredtableassociationArn` <a name="isValidConfiguredtableassociationArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidConfiguredtableassociationArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.isValidConfiguredtableassociationArn(arn: string)
```

Validates whether a string is a valid ARN for the configuredtableassociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidConfiguredtableassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIdmappingtableArn` <a name="isValidIdmappingtableArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidIdmappingtableArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.isValidIdmappingtableArn(arn: string)
```

Validates whether a string is a valid ARN for the idmappingtable resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidIdmappingtableArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIdnamespaceassociationArn` <a name="isValidIdnamespaceassociationArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidIdnamespaceassociationArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.isValidIdnamespaceassociationArn(arn: string)
```

Validates whether a string is a valid ARN for the idnamespaceassociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidIdnamespaceassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntermediatetableArn` <a name="isValidIntermediatetableArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidIntermediatetableArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.isValidIntermediatetableArn(arn: string)
```

Validates whether a string is a valid ARN for the intermediatetable resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidIntermediatetableArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMembershipArn` <a name="isValidMembershipArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidMembershipArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.isValidMembershipArn(arn: string)
```

Validates whether a string is a valid ARN for the membership resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidMembershipArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPrivacybudgettemplateArn` <a name="isValidPrivacybudgettemplateArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidPrivacybudgettemplateArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.isValidPrivacybudgettemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the privacybudgettemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.isValidPrivacybudgettemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `membership` <a name="membership" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.membership"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.membership(props: CleanroomsMembershipArnProps)
```

Builds an ARN for the membership resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.membership.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cleanrooms.CleanroomsMembershipArnProps">CleanroomsMembershipArnProps</a>

---

##### `parseAnalysistemplateArn` <a name="parseAnalysistemplateArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseAnalysistemplateArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.parseAnalysistemplateArn(arn: string)
```

Parses a analysistemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseAnalysistemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCollaborationArn` <a name="parseCollaborationArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseCollaborationArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.parseCollaborationArn(arn: string)
```

Parses a collaboration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseCollaborationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfiguredaudiencemodelassociationArn` <a name="parseConfiguredaudiencemodelassociationArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseConfiguredaudiencemodelassociationArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.parseConfiguredaudiencemodelassociationArn(arn: string)
```

Parses a configuredaudiencemodelassociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseConfiguredaudiencemodelassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfiguredtableArn` <a name="parseConfiguredtableArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseConfiguredtableArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.parseConfiguredtableArn(arn: string)
```

Parses a configuredtable ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseConfiguredtableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfiguredtableassociationArn` <a name="parseConfiguredtableassociationArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseConfiguredtableassociationArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.parseConfiguredtableassociationArn(arn: string)
```

Parses a configuredtableassociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseConfiguredtableassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdmappingtableArn` <a name="parseIdmappingtableArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseIdmappingtableArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.parseIdmappingtableArn(arn: string)
```

Parses a idmappingtable ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseIdmappingtableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdnamespaceassociationArn` <a name="parseIdnamespaceassociationArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseIdnamespaceassociationArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.parseIdnamespaceassociationArn(arn: string)
```

Parses a idnamespaceassociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseIdnamespaceassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntermediatetableArn` <a name="parseIntermediatetableArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseIntermediatetableArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.parseIntermediatetableArn(arn: string)
```

Parses a intermediatetable ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseIntermediatetableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMembershipArn` <a name="parseMembershipArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseMembershipArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.parseMembershipArn(arn: string)
```

Parses a membership ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parseMembershipArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePrivacybudgettemplateArn` <a name="parsePrivacybudgettemplateArn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parsePrivacybudgettemplateArn"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.parsePrivacybudgettemplateArn(arn: string)
```

Parses a privacybudgettemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.parsePrivacybudgettemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `privacybudgettemplate` <a name="privacybudgettemplate" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.privacybudgettemplate"></a>

```typescript
import { cleanrooms } from '@cdk_utils/iam'

cleanrooms.CleanroomsResources.privacybudgettemplate(props: CleanroomsPrivacybudgettemplateArnProps)
```

Builds an ARN for the privacybudgettemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cleanrooms.CleanroomsResources.privacybudgettemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cleanrooms.CleanroomsPrivacybudgettemplateArnProps">CleanroomsPrivacybudgettemplateArnProps</a>

---




