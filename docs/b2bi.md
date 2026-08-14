# `b2bi` Submodule <a name="`b2bi` Submodule" id="@cdk_utils/iam.b2bi"></a>


## Structs <a name="Structs" id="Structs"></a>

### B2biCapabilityArnComponents <a name="B2biCapabilityArnComponents" id="@cdk_utils/iam.b2bi.B2biCapabilityArnComponents"></a>

Parsed components of a capability ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.b2bi.B2biCapabilityArnComponents.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

const b2biCapabilityArnComponents: b2bi.B2biCapabilityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biCapabilityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biCapabilityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biCapabilityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biCapabilityArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.b2bi.B2biCapabilityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.b2bi.B2biCapabilityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.b2bi.B2biCapabilityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.b2bi.B2biCapabilityArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### B2biCapabilityArnProps <a name="B2biCapabilityArnProps" id="@cdk_utils/iam.b2bi.B2biCapabilityArnProps"></a>

Properties for building a capability ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.b2bi.B2biCapabilityArnProps.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

const b2biCapabilityArnProps: b2bi.B2biCapabilityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biCapabilityArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biCapabilityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biCapabilityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biCapabilityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.b2bi.B2biCapabilityArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.b2bi.B2biCapabilityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.b2bi.B2biCapabilityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.b2bi.B2biCapabilityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### B2biPartnershipArnComponents <a name="B2biPartnershipArnComponents" id="@cdk_utils/iam.b2bi.B2biPartnershipArnComponents"></a>

Parsed components of a partnership ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.b2bi.B2biPartnershipArnComponents.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

const b2biPartnershipArnComponents: b2bi.B2biPartnershipArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biPartnershipArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biPartnershipArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biPartnershipArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biPartnershipArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.b2bi.B2biPartnershipArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.b2bi.B2biPartnershipArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.b2bi.B2biPartnershipArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.b2bi.B2biPartnershipArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### B2biPartnershipArnProps <a name="B2biPartnershipArnProps" id="@cdk_utils/iam.b2bi.B2biPartnershipArnProps"></a>

Properties for building a partnership ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.b2bi.B2biPartnershipArnProps.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

const b2biPartnershipArnProps: b2bi.B2biPartnershipArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biPartnershipArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biPartnershipArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biPartnershipArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biPartnershipArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.b2bi.B2biPartnershipArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.b2bi.B2biPartnershipArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.b2bi.B2biPartnershipArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.b2bi.B2biPartnershipArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### B2biProfileArnComponents <a name="B2biProfileArnComponents" id="@cdk_utils/iam.b2bi.B2biProfileArnComponents"></a>

Parsed components of a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.b2bi.B2biProfileArnComponents.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

const b2biProfileArnComponents: b2bi.B2biProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biProfileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.b2bi.B2biProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.b2bi.B2biProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.b2bi.B2biProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.b2bi.B2biProfileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### B2biProfileArnProps <a name="B2biProfileArnProps" id="@cdk_utils/iam.b2bi.B2biProfileArnProps"></a>

Properties for building a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.b2bi.B2biProfileArnProps.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

const b2biProfileArnProps: b2bi.B2biProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biProfileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.b2bi.B2biProfileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.b2bi.B2biProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.b2bi.B2biProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.b2bi.B2biProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### B2biTransformerArnComponents <a name="B2biTransformerArnComponents" id="@cdk_utils/iam.b2bi.B2biTransformerArnComponents"></a>

Parsed components of a transformer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.b2bi.B2biTransformerArnComponents.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

const b2biTransformerArnComponents: b2bi.B2biTransformerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biTransformerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biTransformerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biTransformerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biTransformerArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.b2bi.B2biTransformerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.b2bi.B2biTransformerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.b2bi.B2biTransformerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.b2bi.B2biTransformerArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### B2biTransformerArnProps <a name="B2biTransformerArnProps" id="@cdk_utils/iam.b2bi.B2biTransformerArnProps"></a>

Properties for building a transformer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.b2bi.B2biTransformerArnProps.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

const b2biTransformerArnProps: b2bi.B2biTransformerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biTransformerArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biTransformerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biTransformerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biTransformerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.b2bi.B2biTransformerArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.b2bi.B2biTransformerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.b2bi.B2biTransformerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.b2bi.B2biTransformerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### B2biActions <a name="B2biActions" id="@cdk_utils/iam.b2bi.B2biActions"></a>

IAM action constants for the b2bi service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.b2bi.B2biActions.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

new b2bi.B2biActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.actionGetCapability">actionGetCapability</a></code> | <code>string</code> | [Read] b2bi:GetCapability. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.actionGetPartnership">actionGetPartnership</a></code> | <code>string</code> | [Read] b2bi:GetPartnership. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.actionGetProfile">actionGetProfile</a></code> | <code>string</code> | [Read] b2bi:GetProfile. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.actionGetTransformer">actionGetTransformer</a></code> | <code>string</code> | [Read] b2bi:GetTransformer. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.actionGetTransformerJob">actionGetTransformerJob</a></code> | <code>string</code> | [Read] b2bi:GetTransformerJob. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.CreateCapability">CreateCapability</a></code> | <code>string</code> | [Write] b2bi:CreateCapability. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.CreatePartnership">CreatePartnership</a></code> | <code>string</code> | [Write] b2bi:CreatePartnership. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.CreateProfile">CreateProfile</a></code> | <code>string</code> | [Write] b2bi:CreateProfile. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.CreateStarterMappingTemplate">CreateStarterMappingTemplate</a></code> | <code>string</code> | [Write] b2bi:CreateStarterMappingTemplate. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.CreateTransformer">CreateTransformer</a></code> | <code>string</code> | [Write] b2bi:CreateTransformer. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.DeleteCapability">DeleteCapability</a></code> | <code>string</code> | [Write] b2bi:DeleteCapability. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.DeletePartnership">DeletePartnership</a></code> | <code>string</code> | [Write] b2bi:DeletePartnership. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.DeleteProfile">DeleteProfile</a></code> | <code>string</code> | [Write] b2bi:DeleteProfile. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.DeleteTransformer">DeleteTransformer</a></code> | <code>string</code> | [Write] b2bi:DeleteTransformer. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.GenerateMapping">GenerateMapping</a></code> | <code>string</code> | [Write] b2bi:GenerateMapping. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.ListCapabilities">ListCapabilities</a></code> | <code>string</code> | [List] b2bi:ListCapabilities. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.ListPartnerships">ListPartnerships</a></code> | <code>string</code> | [List] b2bi:ListPartnerships. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.ListProfiles">ListProfiles</a></code> | <code>string</code> | [List] b2bi:ListProfiles. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] b2bi:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.ListTransformers">ListTransformers</a></code> | <code>string</code> | [List] b2bi:ListTransformers. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.StartTransformerJob">StartTransformerJob</a></code> | <code>string</code> | [Write] b2bi:StartTransformerJob. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] b2bi:TagResource. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.TestConversion">TestConversion</a></code> | <code>string</code> | [Write] b2bi:TestConversion. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.TestMapping">TestMapping</a></code> | <code>string</code> | [Write] b2bi:TestMapping. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.TestParsing">TestParsing</a></code> | <code>string</code> | [Write] b2bi:TestParsing. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] b2bi:UntagResource. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.UpdateCapability">UpdateCapability</a></code> | <code>string</code> | [Write] b2bi:UpdateCapability. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.UpdatePartnership">UpdatePartnership</a></code> | <code>string</code> | [Write] b2bi:UpdatePartnership. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.UpdateProfile">UpdateProfile</a></code> | <code>string</code> | [Write] b2bi:UpdateProfile. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biActions.property.UpdateTransformer">UpdateTransformer</a></code> | <code>string</code> | [Write] b2bi:UpdateTransformer. |

---

##### `actionGetCapability`<sup>Required</sup> <a name="actionGetCapability" id="@cdk_utils/iam.b2bi.B2biActions.property.actionGetCapability"></a>

```typescript
public readonly actionGetCapability: string;
```

- *Type:* string

[Read] b2bi:GetCapability.

---

##### `actionGetPartnership`<sup>Required</sup> <a name="actionGetPartnership" id="@cdk_utils/iam.b2bi.B2biActions.property.actionGetPartnership"></a>

```typescript
public readonly actionGetPartnership: string;
```

- *Type:* string

[Read] b2bi:GetPartnership.

---

##### `actionGetProfile`<sup>Required</sup> <a name="actionGetProfile" id="@cdk_utils/iam.b2bi.B2biActions.property.actionGetProfile"></a>

```typescript
public readonly actionGetProfile: string;
```

- *Type:* string

[Read] b2bi:GetProfile.

---

##### `actionGetTransformer`<sup>Required</sup> <a name="actionGetTransformer" id="@cdk_utils/iam.b2bi.B2biActions.property.actionGetTransformer"></a>

```typescript
public readonly actionGetTransformer: string;
```

- *Type:* string

[Read] b2bi:GetTransformer.

---

##### `actionGetTransformerJob`<sup>Required</sup> <a name="actionGetTransformerJob" id="@cdk_utils/iam.b2bi.B2biActions.property.actionGetTransformerJob"></a>

```typescript
public readonly actionGetTransformerJob: string;
```

- *Type:* string

[Read] b2bi:GetTransformerJob.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.b2bi.B2biActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.b2bi.B2biActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.b2bi.B2biActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.b2bi.B2biActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.b2bi.B2biActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCapability`<sup>Required</sup> <a name="CreateCapability" id="@cdk_utils/iam.b2bi.B2biActions.property.CreateCapability"></a>

```typescript
public readonly CreateCapability: string;
```

- *Type:* string

[Write] b2bi:CreateCapability.

---

##### `CreatePartnership`<sup>Required</sup> <a name="CreatePartnership" id="@cdk_utils/iam.b2bi.B2biActions.property.CreatePartnership"></a>

```typescript
public readonly CreatePartnership: string;
```

- *Type:* string

[Write] b2bi:CreatePartnership.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.b2bi.B2biActions.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string;
```

- *Type:* string

[Write] b2bi:CreateProfile.

---

##### `CreateStarterMappingTemplate`<sup>Required</sup> <a name="CreateStarterMappingTemplate" id="@cdk_utils/iam.b2bi.B2biActions.property.CreateStarterMappingTemplate"></a>

```typescript
public readonly CreateStarterMappingTemplate: string;
```

- *Type:* string

[Write] b2bi:CreateStarterMappingTemplate.

---

##### `CreateTransformer`<sup>Required</sup> <a name="CreateTransformer" id="@cdk_utils/iam.b2bi.B2biActions.property.CreateTransformer"></a>

```typescript
public readonly CreateTransformer: string;
```

- *Type:* string

[Write] b2bi:CreateTransformer.

---

##### `DeleteCapability`<sup>Required</sup> <a name="DeleteCapability" id="@cdk_utils/iam.b2bi.B2biActions.property.DeleteCapability"></a>

```typescript
public readonly DeleteCapability: string;
```

- *Type:* string

[Write] b2bi:DeleteCapability.

---

##### `DeletePartnership`<sup>Required</sup> <a name="DeletePartnership" id="@cdk_utils/iam.b2bi.B2biActions.property.DeletePartnership"></a>

```typescript
public readonly DeletePartnership: string;
```

- *Type:* string

[Write] b2bi:DeletePartnership.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.b2bi.B2biActions.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string;
```

- *Type:* string

[Write] b2bi:DeleteProfile.

---

##### `DeleteTransformer`<sup>Required</sup> <a name="DeleteTransformer" id="@cdk_utils/iam.b2bi.B2biActions.property.DeleteTransformer"></a>

```typescript
public readonly DeleteTransformer: string;
```

- *Type:* string

[Write] b2bi:DeleteTransformer.

---

##### `GenerateMapping`<sup>Required</sup> <a name="GenerateMapping" id="@cdk_utils/iam.b2bi.B2biActions.property.GenerateMapping"></a>

```typescript
public readonly GenerateMapping: string;
```

- *Type:* string

[Write] b2bi:GenerateMapping.

---

##### `ListCapabilities`<sup>Required</sup> <a name="ListCapabilities" id="@cdk_utils/iam.b2bi.B2biActions.property.ListCapabilities"></a>

```typescript
public readonly ListCapabilities: string;
```

- *Type:* string

[List] b2bi:ListCapabilities.

---

##### `ListPartnerships`<sup>Required</sup> <a name="ListPartnerships" id="@cdk_utils/iam.b2bi.B2biActions.property.ListPartnerships"></a>

```typescript
public readonly ListPartnerships: string;
```

- *Type:* string

[List] b2bi:ListPartnerships.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.b2bi.B2biActions.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string;
```

- *Type:* string

[List] b2bi:ListProfiles.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.b2bi.B2biActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] b2bi:ListTagsForResource.

---

##### `ListTransformers`<sup>Required</sup> <a name="ListTransformers" id="@cdk_utils/iam.b2bi.B2biActions.property.ListTransformers"></a>

```typescript
public readonly ListTransformers: string;
```

- *Type:* string

[List] b2bi:ListTransformers.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.b2bi.B2biActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartTransformerJob`<sup>Required</sup> <a name="StartTransformerJob" id="@cdk_utils/iam.b2bi.B2biActions.property.StartTransformerJob"></a>

```typescript
public readonly StartTransformerJob: string;
```

- *Type:* string

[Write] b2bi:StartTransformerJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.b2bi.B2biActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] b2bi:TagResource.

---

##### `TestConversion`<sup>Required</sup> <a name="TestConversion" id="@cdk_utils/iam.b2bi.B2biActions.property.TestConversion"></a>

```typescript
public readonly TestConversion: string;
```

- *Type:* string

[Write] b2bi:TestConversion.

---

##### `TestMapping`<sup>Required</sup> <a name="TestMapping" id="@cdk_utils/iam.b2bi.B2biActions.property.TestMapping"></a>

```typescript
public readonly TestMapping: string;
```

- *Type:* string

[Write] b2bi:TestMapping.

---

##### `TestParsing`<sup>Required</sup> <a name="TestParsing" id="@cdk_utils/iam.b2bi.B2biActions.property.TestParsing"></a>

```typescript
public readonly TestParsing: string;
```

- *Type:* string

[Write] b2bi:TestParsing.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.b2bi.B2biActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] b2bi:UntagResource.

---

##### `UpdateCapability`<sup>Required</sup> <a name="UpdateCapability" id="@cdk_utils/iam.b2bi.B2biActions.property.UpdateCapability"></a>

```typescript
public readonly UpdateCapability: string;
```

- *Type:* string

[Write] b2bi:UpdateCapability.

---

##### `UpdatePartnership`<sup>Required</sup> <a name="UpdatePartnership" id="@cdk_utils/iam.b2bi.B2biActions.property.UpdatePartnership"></a>

```typescript
public readonly UpdatePartnership: string;
```

- *Type:* string

[Write] b2bi:UpdatePartnership.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.b2bi.B2biActions.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string;
```

- *Type:* string

[Write] b2bi:UpdateProfile.

---

##### `UpdateTransformer`<sup>Required</sup> <a name="UpdateTransformer" id="@cdk_utils/iam.b2bi.B2biActions.property.UpdateTransformer"></a>

```typescript
public readonly UpdateTransformer: string;
```

- *Type:* string

[Write] b2bi:UpdateTransformer.

---

### B2biConditions <a name="B2biConditions" id="@cdk_utils/iam.b2bi.B2biConditions"></a>

Condition key constants and builders for b2bi.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.b2bi.B2biConditions.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

new b2bi.B2biConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.b2bi.B2biConditions.requestTag"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.b2bi.B2biConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.b2bi.B2biConditions.resourceTag"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.b2bi.B2biConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.b2bi.B2biConditions.tagKeys"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.b2bi.B2biConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.property.CreateCapabilityConditionKeys">CreateCapabilityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCapability action. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.property.CreatePartnershipConditionKeys">CreatePartnershipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePartnership action. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.property.CreateProfileConditionKeys">CreateProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProfile action. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.property.CreateTransformerConditionKeys">CreateTransformerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTransformer action. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.b2bi.B2biConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.b2bi.B2biConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.b2bi.B2biConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCapabilityConditionKeys`<sup>Required</sup> <a name="CreateCapabilityConditionKeys" id="@cdk_utils/iam.b2bi.B2biConditions.property.CreateCapabilityConditionKeys"></a>

```typescript
public readonly CreateCapabilityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCapability action.

---

##### `CreatePartnershipConditionKeys`<sup>Required</sup> <a name="CreatePartnershipConditionKeys" id="@cdk_utils/iam.b2bi.B2biConditions.property.CreatePartnershipConditionKeys"></a>

```typescript
public readonly CreatePartnershipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePartnership action.

---

##### `CreateProfileConditionKeys`<sup>Required</sup> <a name="CreateProfileConditionKeys" id="@cdk_utils/iam.b2bi.B2biConditions.property.CreateProfileConditionKeys"></a>

```typescript
public readonly CreateProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProfile action.

---

##### `CreateTransformerConditionKeys`<sup>Required</sup> <a name="CreateTransformerConditionKeys" id="@cdk_utils/iam.b2bi.B2biConditions.property.CreateTransformerConditionKeys"></a>

```typescript
public readonly CreateTransformerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTransformer action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.b2bi.B2biConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.b2bi.B2biConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### B2biOperations <a name="B2biOperations" id="@cdk_utils/iam.b2bi.B2biOperations"></a>

API operation to required IAM actions mapping for b2bi.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.b2bi.B2biOperations.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

new b2bi.B2biOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.CreateCapability">CreateCapability</a></code> | <code>string[]</code> | IAM actions required for the CreateCapability API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.CreatePartnership">CreatePartnership</a></code> | <code>string[]</code> | IAM actions required for the CreatePartnership API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.CreateProfile">CreateProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateProfile API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.CreateStarterMappingTemplate">CreateStarterMappingTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateStarterMappingTemplate API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.CreateTransformer">CreateTransformer</a></code> | <code>string[]</code> | IAM actions required for the CreateTransformer API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.DeleteCapability">DeleteCapability</a></code> | <code>string[]</code> | IAM actions required for the DeleteCapability API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.DeletePartnership">DeletePartnership</a></code> | <code>string[]</code> | IAM actions required for the DeletePartnership API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.DeleteProfile">DeleteProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteProfile API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.DeleteTransformer">DeleteTransformer</a></code> | <code>string[]</code> | IAM actions required for the DeleteTransformer API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.GenerateMapping">GenerateMapping</a></code> | <code>string[]</code> | IAM actions required for the GenerateMapping API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.ListCapabilities">ListCapabilities</a></code> | <code>string[]</code> | IAM actions required for the ListCapabilities API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.ListPartnerships">ListPartnerships</a></code> | <code>string[]</code> | IAM actions required for the ListPartnerships API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.ListProfiles">ListProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListProfiles API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.ListTransformers">ListTransformers</a></code> | <code>string[]</code> | IAM actions required for the ListTransformers API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.opGetCapability">opGetCapability</a></code> | <code>string[]</code> | IAM actions required for the GetCapability API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.opGetPartnership">opGetPartnership</a></code> | <code>string[]</code> | IAM actions required for the GetPartnership API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.opGetProfile">opGetProfile</a></code> | <code>string[]</code> | IAM actions required for the GetProfile API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.opGetTransformer">opGetTransformer</a></code> | <code>string[]</code> | IAM actions required for the GetTransformer API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.opGetTransformerJob">opGetTransformerJob</a></code> | <code>string[]</code> | IAM actions required for the GetTransformerJob API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.StartTransformerJob">StartTransformerJob</a></code> | <code>string[]</code> | IAM actions required for the StartTransformerJob API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.TestConversion">TestConversion</a></code> | <code>string[]</code> | IAM actions required for the TestConversion API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.TestMapping">TestMapping</a></code> | <code>string[]</code> | IAM actions required for the TestMapping API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.TestParsing">TestParsing</a></code> | <code>string[]</code> | IAM actions required for the TestParsing API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.UpdateCapability">UpdateCapability</a></code> | <code>string[]</code> | IAM actions required for the UpdateCapability API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.UpdatePartnership">UpdatePartnership</a></code> | <code>string[]</code> | IAM actions required for the UpdatePartnership API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.UpdateProfile">UpdateProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateProfile API call. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biOperations.property.UpdateTransformer">UpdateTransformer</a></code> | <code>string[]</code> | IAM actions required for the UpdateTransformer API call. |

---

##### `CreateCapability`<sup>Required</sup> <a name="CreateCapability" id="@cdk_utils/iam.b2bi.B2biOperations.property.CreateCapability"></a>

```typescript
public readonly CreateCapability: string[];
```

- *Type:* string[]

IAM actions required for the CreateCapability API call.

---

##### `CreatePartnership`<sup>Required</sup> <a name="CreatePartnership" id="@cdk_utils/iam.b2bi.B2biOperations.property.CreatePartnership"></a>

```typescript
public readonly CreatePartnership: string[];
```

- *Type:* string[]

IAM actions required for the CreatePartnership API call.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.b2bi.B2biOperations.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateProfile API call.

---

##### `CreateStarterMappingTemplate`<sup>Required</sup> <a name="CreateStarterMappingTemplate" id="@cdk_utils/iam.b2bi.B2biOperations.property.CreateStarterMappingTemplate"></a>

```typescript
public readonly CreateStarterMappingTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateStarterMappingTemplate API call.

---

##### `CreateTransformer`<sup>Required</sup> <a name="CreateTransformer" id="@cdk_utils/iam.b2bi.B2biOperations.property.CreateTransformer"></a>

```typescript
public readonly CreateTransformer: string[];
```

- *Type:* string[]

IAM actions required for the CreateTransformer API call.

---

##### `DeleteCapability`<sup>Required</sup> <a name="DeleteCapability" id="@cdk_utils/iam.b2bi.B2biOperations.property.DeleteCapability"></a>

```typescript
public readonly DeleteCapability: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCapability API call.

---

##### `DeletePartnership`<sup>Required</sup> <a name="DeletePartnership" id="@cdk_utils/iam.b2bi.B2biOperations.property.DeletePartnership"></a>

```typescript
public readonly DeletePartnership: string[];
```

- *Type:* string[]

IAM actions required for the DeletePartnership API call.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.b2bi.B2biOperations.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProfile API call.

---

##### `DeleteTransformer`<sup>Required</sup> <a name="DeleteTransformer" id="@cdk_utils/iam.b2bi.B2biOperations.property.DeleteTransformer"></a>

```typescript
public readonly DeleteTransformer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTransformer API call.

---

##### `GenerateMapping`<sup>Required</sup> <a name="GenerateMapping" id="@cdk_utils/iam.b2bi.B2biOperations.property.GenerateMapping"></a>

```typescript
public readonly GenerateMapping: string[];
```

- *Type:* string[]

IAM actions required for the GenerateMapping API call.

---

##### `ListCapabilities`<sup>Required</sup> <a name="ListCapabilities" id="@cdk_utils/iam.b2bi.B2biOperations.property.ListCapabilities"></a>

```typescript
public readonly ListCapabilities: string[];
```

- *Type:* string[]

IAM actions required for the ListCapabilities API call.

---

##### `ListPartnerships`<sup>Required</sup> <a name="ListPartnerships" id="@cdk_utils/iam.b2bi.B2biOperations.property.ListPartnerships"></a>

```typescript
public readonly ListPartnerships: string[];
```

- *Type:* string[]

IAM actions required for the ListPartnerships API call.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.b2bi.B2biOperations.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListProfiles API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.b2bi.B2biOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTransformers`<sup>Required</sup> <a name="ListTransformers" id="@cdk_utils/iam.b2bi.B2biOperations.property.ListTransformers"></a>

```typescript
public readonly ListTransformers: string[];
```

- *Type:* string[]

IAM actions required for the ListTransformers API call.

---

##### `opGetCapability`<sup>Required</sup> <a name="opGetCapability" id="@cdk_utils/iam.b2bi.B2biOperations.property.opGetCapability"></a>

```typescript
public readonly opGetCapability: string[];
```

- *Type:* string[]

IAM actions required for the GetCapability API call.

---

##### `opGetPartnership`<sup>Required</sup> <a name="opGetPartnership" id="@cdk_utils/iam.b2bi.B2biOperations.property.opGetPartnership"></a>

```typescript
public readonly opGetPartnership: string[];
```

- *Type:* string[]

IAM actions required for the GetPartnership API call.

---

##### `opGetProfile`<sup>Required</sup> <a name="opGetProfile" id="@cdk_utils/iam.b2bi.B2biOperations.property.opGetProfile"></a>

```typescript
public readonly opGetProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetProfile API call.

---

##### `opGetTransformer`<sup>Required</sup> <a name="opGetTransformer" id="@cdk_utils/iam.b2bi.B2biOperations.property.opGetTransformer"></a>

```typescript
public readonly opGetTransformer: string[];
```

- *Type:* string[]

IAM actions required for the GetTransformer API call.

---

##### `opGetTransformerJob`<sup>Required</sup> <a name="opGetTransformerJob" id="@cdk_utils/iam.b2bi.B2biOperations.property.opGetTransformerJob"></a>

```typescript
public readonly opGetTransformerJob: string[];
```

- *Type:* string[]

IAM actions required for the GetTransformerJob API call.

---

##### `StartTransformerJob`<sup>Required</sup> <a name="StartTransformerJob" id="@cdk_utils/iam.b2bi.B2biOperations.property.StartTransformerJob"></a>

```typescript
public readonly StartTransformerJob: string[];
```

- *Type:* string[]

IAM actions required for the StartTransformerJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.b2bi.B2biOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestConversion`<sup>Required</sup> <a name="TestConversion" id="@cdk_utils/iam.b2bi.B2biOperations.property.TestConversion"></a>

```typescript
public readonly TestConversion: string[];
```

- *Type:* string[]

IAM actions required for the TestConversion API call.

---

##### `TestMapping`<sup>Required</sup> <a name="TestMapping" id="@cdk_utils/iam.b2bi.B2biOperations.property.TestMapping"></a>

```typescript
public readonly TestMapping: string[];
```

- *Type:* string[]

IAM actions required for the TestMapping API call.

---

##### `TestParsing`<sup>Required</sup> <a name="TestParsing" id="@cdk_utils/iam.b2bi.B2biOperations.property.TestParsing"></a>

```typescript
public readonly TestParsing: string[];
```

- *Type:* string[]

IAM actions required for the TestParsing API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.b2bi.B2biOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCapability`<sup>Required</sup> <a name="UpdateCapability" id="@cdk_utils/iam.b2bi.B2biOperations.property.UpdateCapability"></a>

```typescript
public readonly UpdateCapability: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCapability API call.

---

##### `UpdatePartnership`<sup>Required</sup> <a name="UpdatePartnership" id="@cdk_utils/iam.b2bi.B2biOperations.property.UpdatePartnership"></a>

```typescript
public readonly UpdatePartnership: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePartnership API call.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.b2bi.B2biOperations.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProfile API call.

---

##### `UpdateTransformer`<sup>Required</sup> <a name="UpdateTransformer" id="@cdk_utils/iam.b2bi.B2biOperations.property.UpdateTransformer"></a>

```typescript
public readonly UpdateTransformer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTransformer API call.

---

### B2biResources <a name="B2biResources" id="@cdk_utils/iam.b2bi.B2biResources"></a>

ARN builders, validators, and parsers for b2bi resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.b2bi.B2biResources.Initializer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

new b2bi.B2biResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.capability">capability</a></code> | Builds an ARN for the capability resource. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.isValidCapabilityArn">isValidCapabilityArn</a></code> | Validates whether a string is a valid ARN for the capability resource. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.isValidPartnershipArn">isValidPartnershipArn</a></code> | Validates whether a string is a valid ARN for the partnership resource. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.isValidProfileArn">isValidProfileArn</a></code> | Validates whether a string is a valid ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.isValidTransformerArn">isValidTransformerArn</a></code> | Validates whether a string is a valid ARN for the transformer resource. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.parseCapabilityArn">parseCapabilityArn</a></code> | Parses a capability ARN into its components. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.parsePartnershipArn">parsePartnershipArn</a></code> | Parses a partnership ARN into its components. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.parseProfileArn">parseProfileArn</a></code> | Parses a profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.parseTransformerArn">parseTransformerArn</a></code> | Parses a transformer ARN into its components. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.partnership">partnership</a></code> | Builds an ARN for the partnership resource. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.profile">profile</a></code> | Builds an ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.b2bi.B2biResources.transformer">transformer</a></code> | Builds an ARN for the transformer resource. |

---

##### `capability` <a name="capability" id="@cdk_utils/iam.b2bi.B2biResources.capability"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.capability(props: B2biCapabilityArnProps)
```

Builds an ARN for the capability resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.b2bi.B2biResources.capability.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.b2bi.B2biCapabilityArnProps">B2biCapabilityArnProps</a>

---

##### `isValidCapabilityArn` <a name="isValidCapabilityArn" id="@cdk_utils/iam.b2bi.B2biResources.isValidCapabilityArn"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.isValidCapabilityArn(arn: string)
```

Validates whether a string is a valid ARN for the capability resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.b2bi.B2biResources.isValidCapabilityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPartnershipArn` <a name="isValidPartnershipArn" id="@cdk_utils/iam.b2bi.B2biResources.isValidPartnershipArn"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.isValidPartnershipArn(arn: string)
```

Validates whether a string is a valid ARN for the partnership resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.b2bi.B2biResources.isValidPartnershipArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProfileArn` <a name="isValidProfileArn" id="@cdk_utils/iam.b2bi.B2biResources.isValidProfileArn"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.isValidProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.b2bi.B2biResources.isValidProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTransformerArn` <a name="isValidTransformerArn" id="@cdk_utils/iam.b2bi.B2biResources.isValidTransformerArn"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.isValidTransformerArn(arn: string)
```

Validates whether a string is a valid ARN for the transformer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.b2bi.B2biResources.isValidTransformerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCapabilityArn` <a name="parseCapabilityArn" id="@cdk_utils/iam.b2bi.B2biResources.parseCapabilityArn"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.parseCapabilityArn(arn: string)
```

Parses a capability ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.b2bi.B2biResources.parseCapabilityArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePartnershipArn` <a name="parsePartnershipArn" id="@cdk_utils/iam.b2bi.B2biResources.parsePartnershipArn"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.parsePartnershipArn(arn: string)
```

Parses a partnership ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.b2bi.B2biResources.parsePartnershipArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProfileArn` <a name="parseProfileArn" id="@cdk_utils/iam.b2bi.B2biResources.parseProfileArn"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.parseProfileArn(arn: string)
```

Parses a profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.b2bi.B2biResources.parseProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTransformerArn` <a name="parseTransformerArn" id="@cdk_utils/iam.b2bi.B2biResources.parseTransformerArn"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.parseTransformerArn(arn: string)
```

Parses a transformer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.b2bi.B2biResources.parseTransformerArn.parameter.arn"></a>

- *Type:* string

---

##### `partnership` <a name="partnership" id="@cdk_utils/iam.b2bi.B2biResources.partnership"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.partnership(props: B2biPartnershipArnProps)
```

Builds an ARN for the partnership resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.b2bi.B2biResources.partnership.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.b2bi.B2biPartnershipArnProps">B2biPartnershipArnProps</a>

---

##### `profile` <a name="profile" id="@cdk_utils/iam.b2bi.B2biResources.profile"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.profile(props: B2biProfileArnProps)
```

Builds an ARN for the profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.b2bi.B2biResources.profile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.b2bi.B2biProfileArnProps">B2biProfileArnProps</a>

---

##### `transformer` <a name="transformer" id="@cdk_utils/iam.b2bi.B2biResources.transformer"></a>

```typescript
import { b2bi } from '@cdk_utils/iam'

b2bi.B2biResources.transformer(props: B2biTransformerArnProps)
```

Builds an ARN for the transformer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.b2bi.B2biResources.transformer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.b2bi.B2biTransformerArnProps">B2biTransformerArnProps</a>

---




