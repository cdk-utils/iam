# `cases` Submodule <a name="`cases` Submodule" id="@cdk_utils/iam.cases"></a>


## Structs <a name="Structs" id="Structs"></a>

### CasesCaseArnComponents <a name="CasesCaseArnComponents" id="@cdk_utils/iam.cases.CasesCaseArnComponents"></a>

Parsed components of a Case ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesCaseArnComponents.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesCaseArnComponents: cases.CasesCaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseArnComponents.property.caseId">caseId</a></code> | <code>string</code> | The CaseId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cases.CasesCaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `caseId`<sup>Required</sup> <a name="caseId" id="@cdk_utils/iam.cases.CasesCaseArnComponents.property.caseId"></a>

```typescript
public readonly caseId: string;
```

- *Type:* string

The CaseId component.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesCaseArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesCaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cases.CasesCaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CasesCaseArnProps <a name="CasesCaseArnProps" id="@cdk_utils/iam.cases.CasesCaseArnProps"></a>

Properties for building a Case ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesCaseArnProps.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesCaseArnProps: cases.CasesCaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseArnProps.property.caseId">caseId</a></code> | <code>string</code> | The CaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `caseId`<sup>Required</sup> <a name="caseId" id="@cdk_utils/iam.cases.CasesCaseArnProps.property.caseId"></a>

```typescript
public readonly caseId: string;
```

- *Type:* string

The CaseId component of the ARN.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesCaseArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cases.CasesCaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesCaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cases.CasesCaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CasesCaseRuleArnComponents <a name="CasesCaseRuleArnComponents" id="@cdk_utils/iam.cases.CasesCaseRuleArnComponents"></a>

Parsed components of a CaseRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesCaseRuleArnComponents.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesCaseRuleArnComponents: cases.CasesCaseRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseRuleArnComponents.property.caseRuleId">caseRuleId</a></code> | <code>string</code> | The CaseRuleId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseRuleArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cases.CasesCaseRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `caseRuleId`<sup>Required</sup> <a name="caseRuleId" id="@cdk_utils/iam.cases.CasesCaseRuleArnComponents.property.caseRuleId"></a>

```typescript
public readonly caseRuleId: string;
```

- *Type:* string

The CaseRuleId component.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesCaseRuleArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesCaseRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cases.CasesCaseRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CasesCaseRuleArnProps <a name="CasesCaseRuleArnProps" id="@cdk_utils/iam.cases.CasesCaseRuleArnProps"></a>

Properties for building a CaseRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesCaseRuleArnProps.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesCaseRuleArnProps: cases.CasesCaseRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseRuleArnProps.property.caseRuleId">caseRuleId</a></code> | <code>string</code> | The CaseRuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseRuleArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesCaseRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `caseRuleId`<sup>Required</sup> <a name="caseRuleId" id="@cdk_utils/iam.cases.CasesCaseRuleArnProps.property.caseRuleId"></a>

```typescript
public readonly caseRuleId: string;
```

- *Type:* string

The CaseRuleId component of the ARN.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesCaseRuleArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cases.CasesCaseRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesCaseRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cases.CasesCaseRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CasesDomainArnComponents <a name="CasesDomainArnComponents" id="@cdk_utils/iam.cases.CasesDomainArnComponents"></a>

Parsed components of a Domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesDomainArnComponents.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesDomainArnComponents: cases.CasesDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesDomainArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cases.CasesDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesDomainArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cases.CasesDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CasesDomainArnProps <a name="CasesDomainArnProps" id="@cdk_utils/iam.cases.CasesDomainArnProps"></a>

Properties for building a Domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesDomainArnProps.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesDomainArnProps: cases.CasesDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesDomainArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesDomainArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cases.CasesDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cases.CasesDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CasesFieldArnComponents <a name="CasesFieldArnComponents" id="@cdk_utils/iam.cases.CasesFieldArnComponents"></a>

Parsed components of a Field ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesFieldArnComponents.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesFieldArnComponents: cases.CasesFieldArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesFieldArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesFieldArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesFieldArnComponents.property.fieldId">fieldId</a></code> | <code>string</code> | The FieldId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesFieldArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesFieldArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cases.CasesFieldArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesFieldArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdk_utils/iam.cases.CasesFieldArnComponents.property.fieldId"></a>

```typescript
public readonly fieldId: string;
```

- *Type:* string

The FieldId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesFieldArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cases.CasesFieldArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CasesFieldArnProps <a name="CasesFieldArnProps" id="@cdk_utils/iam.cases.CasesFieldArnProps"></a>

Properties for building a Field ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesFieldArnProps.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesFieldArnProps: cases.CasesFieldArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesFieldArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesFieldArnProps.property.fieldId">fieldId</a></code> | <code>string</code> | The FieldId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesFieldArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesFieldArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesFieldArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesFieldArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdk_utils/iam.cases.CasesFieldArnProps.property.fieldId"></a>

```typescript
public readonly fieldId: string;
```

- *Type:* string

The FieldId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cases.CasesFieldArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesFieldArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cases.CasesFieldArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CasesLayoutArnComponents <a name="CasesLayoutArnComponents" id="@cdk_utils/iam.cases.CasesLayoutArnComponents"></a>

Parsed components of a Layout ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesLayoutArnComponents.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesLayoutArnComponents: cases.CasesLayoutArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesLayoutArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesLayoutArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesLayoutArnComponents.property.layoutId">layoutId</a></code> | <code>string</code> | The LayoutId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesLayoutArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesLayoutArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cases.CasesLayoutArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesLayoutArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `layoutId`<sup>Required</sup> <a name="layoutId" id="@cdk_utils/iam.cases.CasesLayoutArnComponents.property.layoutId"></a>

```typescript
public readonly layoutId: string;
```

- *Type:* string

The LayoutId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesLayoutArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cases.CasesLayoutArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CasesLayoutArnProps <a name="CasesLayoutArnProps" id="@cdk_utils/iam.cases.CasesLayoutArnProps"></a>

Properties for building a Layout ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesLayoutArnProps.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesLayoutArnProps: cases.CasesLayoutArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesLayoutArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesLayoutArnProps.property.layoutId">layoutId</a></code> | <code>string</code> | The LayoutId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesLayoutArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesLayoutArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesLayoutArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesLayoutArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `layoutId`<sup>Required</sup> <a name="layoutId" id="@cdk_utils/iam.cases.CasesLayoutArnProps.property.layoutId"></a>

```typescript
public readonly layoutId: string;
```

- *Type:* string

The LayoutId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cases.CasesLayoutArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesLayoutArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cases.CasesLayoutArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CasesRelatedItemArnComponents <a name="CasesRelatedItemArnComponents" id="@cdk_utils/iam.cases.CasesRelatedItemArnComponents"></a>

Parsed components of a RelatedItem ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesRelatedItemArnComponents.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesRelatedItemArnComponents: cases.CasesRelatedItemArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.caseId">caseId</a></code> | <code>string</code> | The CaseId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.relatedItemId">relatedItemId</a></code> | <code>string</code> | The RelatedItemId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `caseId`<sup>Required</sup> <a name="caseId" id="@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.caseId"></a>

```typescript
public readonly caseId: string;
```

- *Type:* string

The CaseId component.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `relatedItemId`<sup>Required</sup> <a name="relatedItemId" id="@cdk_utils/iam.cases.CasesRelatedItemArnComponents.property.relatedItemId"></a>

```typescript
public readonly relatedItemId: string;
```

- *Type:* string

The RelatedItemId component.

---

### CasesRelatedItemArnProps <a name="CasesRelatedItemArnProps" id="@cdk_utils/iam.cases.CasesRelatedItemArnProps"></a>

Properties for building a RelatedItem ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesRelatedItemArnProps.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesRelatedItemArnProps: cases.CasesRelatedItemArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.caseId">caseId</a></code> | <code>string</code> | The CaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.relatedItemId">relatedItemId</a></code> | <code>string</code> | The RelatedItemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `caseId`<sup>Required</sup> <a name="caseId" id="@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.caseId"></a>

```typescript
public readonly caseId: string;
```

- *Type:* string

The CaseId component of the ARN.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `relatedItemId`<sup>Required</sup> <a name="relatedItemId" id="@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.relatedItemId"></a>

```typescript
public readonly relatedItemId: string;
```

- *Type:* string

The RelatedItemId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cases.CasesRelatedItemArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CasesTemplateArnComponents <a name="CasesTemplateArnComponents" id="@cdk_utils/iam.cases.CasesTemplateArnComponents"></a>

Parsed components of a Template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesTemplateArnComponents.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesTemplateArnComponents: cases.CasesTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesTemplateArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.cases.CasesTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cases.CasesTemplateArnComponents.property.templateId">templateId</a></code> | <code>string</code> | The TemplateId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cases.CasesTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesTemplateArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cases.CasesTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdk_utils/iam.cases.CasesTemplateArnComponents.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The TemplateId component.

---

### CasesTemplateArnProps <a name="CasesTemplateArnProps" id="@cdk_utils/iam.cases.CasesTemplateArnProps"></a>

Properties for building a Template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cases.CasesTemplateArnProps.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

const casesTemplateArnProps: cases.CasesTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesTemplateArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesTemplateArnProps.property.templateId">templateId</a></code> | <code>string</code> | The TemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cases.CasesTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cases.CasesTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cases.CasesTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.cases.CasesTemplateArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdk_utils/iam.cases.CasesTemplateArnProps.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The TemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cases.CasesTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cases.CasesTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cases.CasesTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CasesActions <a name="CasesActions" id="@cdk_utils/iam.cases.CasesActions"></a>

IAM action constants for the cases service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cases.CasesActions.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

new cases.CasesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.actionGetCase">actionGetCase</a></code> | <code>string</code> | [Read] cases:GetCase. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.actionGetCaseAuditEvents">actionGetCaseAuditEvents</a></code> | <code>string</code> | [Read] cases:GetCaseAuditEvents. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.actionGetCaseEventConfiguration">actionGetCaseEventConfiguration</a></code> | <code>string</code> | [Read] cases:GetCaseEventConfiguration. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.actionGetDomain">actionGetDomain</a></code> | <code>string</code> | [Read] cases:GetDomain. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.actionGetLayout">actionGetLayout</a></code> | <code>string</code> | [Read] cases:GetLayout. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.actionGetTemplate">actionGetTemplate</a></code> | <code>string</code> | [Read] cases:GetTemplate. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.BatchGetCaseRule">BatchGetCaseRule</a></code> | <code>string</code> | [Read] cases:BatchGetCaseRule. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.BatchGetField">BatchGetField</a></code> | <code>string</code> | [Read] cases:BatchGetField. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.BatchPutFieldOptions">BatchPutFieldOptions</a></code> | <code>string</code> | [Write] cases:BatchPutFieldOptions. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.CreateCase">CreateCase</a></code> | <code>string</code> | [Write] cases:CreateCase. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.CreateCaseRule">CreateCaseRule</a></code> | <code>string</code> | [Write] cases:CreateCaseRule. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.CreateDomain">CreateDomain</a></code> | <code>string</code> | [Write] cases:CreateDomain. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.CreateField">CreateField</a></code> | <code>string</code> | [Write] cases:CreateField. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.CreateLayout">CreateLayout</a></code> | <code>string</code> | [Write] cases:CreateLayout. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.CreateRelatedItem">CreateRelatedItem</a></code> | <code>string</code> | [Write] cases:CreateRelatedItem. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.CreateTemplate">CreateTemplate</a></code> | <code>string</code> | [Write] cases:CreateTemplate. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.DeleteCase">DeleteCase</a></code> | <code>string</code> | [Write] cases:DeleteCase. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.DeleteCaseRule">DeleteCaseRule</a></code> | <code>string</code> | [Write] cases:DeleteCaseRule. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] cases:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.DeleteField">DeleteField</a></code> | <code>string</code> | [Write] cases:DeleteField. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.DeleteLayout">DeleteLayout</a></code> | <code>string</code> | [Write] cases:DeleteLayout. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.DeleteRelatedItem">DeleteRelatedItem</a></code> | <code>string</code> | [Write] cases:DeleteRelatedItem. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string</code> | [Write] cases:DeleteTemplate. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.ListCaseRules">ListCaseRules</a></code> | <code>string</code> | [List] cases:ListCaseRules. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.ListCasesForContact">ListCasesForContact</a></code> | <code>string</code> | [List] cases:ListCasesForContact. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] cases:ListDomains. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.ListFieldOptions">ListFieldOptions</a></code> | <code>string</code> | [List] cases:ListFieldOptions. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.ListFields">ListFields</a></code> | <code>string</code> | [List] cases:ListFields. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.ListLayouts">ListLayouts</a></code> | <code>string</code> | [List] cases:ListLayouts. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] cases:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.ListTemplates">ListTemplates</a></code> | <code>string</code> | [List] cases:ListTemplates. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.PutCaseEventConfiguration">PutCaseEventConfiguration</a></code> | <code>string</code> | [Write] cases:PutCaseEventConfiguration. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.SearchAllRelatedItems">SearchAllRelatedItems</a></code> | <code>string</code> | [Read] cases:SearchAllRelatedItems. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.SearchCases">SearchCases</a></code> | <code>string</code> | [Read] cases:SearchCases. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.SearchRelatedItems">SearchRelatedItems</a></code> | <code>string</code> | [Read] cases:SearchRelatedItems. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cases:TagResource. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cases:UntagResource. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.UpdateCase">UpdateCase</a></code> | <code>string</code> | [Write] cases:UpdateCase. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.UpdateCaseRule">UpdateCaseRule</a></code> | <code>string</code> | [Write] cases:UpdateCaseRule. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.UpdateField">UpdateField</a></code> | <code>string</code> | [Write] cases:UpdateField. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.UpdateLayout">UpdateLayout</a></code> | <code>string</code> | [Write] cases:UpdateLayout. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.UpdateRelatedItem">UpdateRelatedItem</a></code> | <code>string</code> | [Write] cases:UpdateRelatedItem. |
| <code><a href="#@cdk_utils/iam.cases.CasesActions.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string</code> | [Write] cases:UpdateTemplate. |

---

##### `actionGetCase`<sup>Required</sup> <a name="actionGetCase" id="@cdk_utils/iam.cases.CasesActions.property.actionGetCase"></a>

```typescript
public readonly actionGetCase: string;
```

- *Type:* string

[Read] cases:GetCase.

---

##### `actionGetCaseAuditEvents`<sup>Required</sup> <a name="actionGetCaseAuditEvents" id="@cdk_utils/iam.cases.CasesActions.property.actionGetCaseAuditEvents"></a>

```typescript
public readonly actionGetCaseAuditEvents: string;
```

- *Type:* string

[Read] cases:GetCaseAuditEvents.

---

##### `actionGetCaseEventConfiguration`<sup>Required</sup> <a name="actionGetCaseEventConfiguration" id="@cdk_utils/iam.cases.CasesActions.property.actionGetCaseEventConfiguration"></a>

```typescript
public readonly actionGetCaseEventConfiguration: string;
```

- *Type:* string

[Read] cases:GetCaseEventConfiguration.

---

##### `actionGetDomain`<sup>Required</sup> <a name="actionGetDomain" id="@cdk_utils/iam.cases.CasesActions.property.actionGetDomain"></a>

```typescript
public readonly actionGetDomain: string;
```

- *Type:* string

[Read] cases:GetDomain.

---

##### `actionGetLayout`<sup>Required</sup> <a name="actionGetLayout" id="@cdk_utils/iam.cases.CasesActions.property.actionGetLayout"></a>

```typescript
public readonly actionGetLayout: string;
```

- *Type:* string

[Read] cases:GetLayout.

---

##### `actionGetTemplate`<sup>Required</sup> <a name="actionGetTemplate" id="@cdk_utils/iam.cases.CasesActions.property.actionGetTemplate"></a>

```typescript
public readonly actionGetTemplate: string;
```

- *Type:* string

[Read] cases:GetTemplate.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cases.CasesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cases.CasesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cases.CasesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cases.CasesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cases.CasesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetCaseRule`<sup>Required</sup> <a name="BatchGetCaseRule" id="@cdk_utils/iam.cases.CasesActions.property.BatchGetCaseRule"></a>

```typescript
public readonly BatchGetCaseRule: string;
```

- *Type:* string

[Read] cases:BatchGetCaseRule.

---

##### `BatchGetField`<sup>Required</sup> <a name="BatchGetField" id="@cdk_utils/iam.cases.CasesActions.property.BatchGetField"></a>

```typescript
public readonly BatchGetField: string;
```

- *Type:* string

[Read] cases:BatchGetField.

---

##### `BatchPutFieldOptions`<sup>Required</sup> <a name="BatchPutFieldOptions" id="@cdk_utils/iam.cases.CasesActions.property.BatchPutFieldOptions"></a>

```typescript
public readonly BatchPutFieldOptions: string;
```

- *Type:* string

[Write] cases:BatchPutFieldOptions.

---

##### `CreateCase`<sup>Required</sup> <a name="CreateCase" id="@cdk_utils/iam.cases.CasesActions.property.CreateCase"></a>

```typescript
public readonly CreateCase: string;
```

- *Type:* string

[Write] cases:CreateCase.

---

##### `CreateCaseRule`<sup>Required</sup> <a name="CreateCaseRule" id="@cdk_utils/iam.cases.CasesActions.property.CreateCaseRule"></a>

```typescript
public readonly CreateCaseRule: string;
```

- *Type:* string

[Write] cases:CreateCaseRule.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.cases.CasesActions.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string;
```

- *Type:* string

[Write] cases:CreateDomain.

---

##### `CreateField`<sup>Required</sup> <a name="CreateField" id="@cdk_utils/iam.cases.CasesActions.property.CreateField"></a>

```typescript
public readonly CreateField: string;
```

- *Type:* string

[Write] cases:CreateField.

---

##### `CreateLayout`<sup>Required</sup> <a name="CreateLayout" id="@cdk_utils/iam.cases.CasesActions.property.CreateLayout"></a>

```typescript
public readonly CreateLayout: string;
```

- *Type:* string

[Write] cases:CreateLayout.

---

##### `CreateRelatedItem`<sup>Required</sup> <a name="CreateRelatedItem" id="@cdk_utils/iam.cases.CasesActions.property.CreateRelatedItem"></a>

```typescript
public readonly CreateRelatedItem: string;
```

- *Type:* string

[Write] cases:CreateRelatedItem.

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.cases.CasesActions.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string;
```

- *Type:* string

[Write] cases:CreateTemplate.

---

##### `DeleteCase`<sup>Required</sup> <a name="DeleteCase" id="@cdk_utils/iam.cases.CasesActions.property.DeleteCase"></a>

```typescript
public readonly DeleteCase: string;
```

- *Type:* string

[Write] cases:DeleteCase.

---

##### `DeleteCaseRule`<sup>Required</sup> <a name="DeleteCaseRule" id="@cdk_utils/iam.cases.CasesActions.property.DeleteCaseRule"></a>

```typescript
public readonly DeleteCaseRule: string;
```

- *Type:* string

[Write] cases:DeleteCaseRule.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.cases.CasesActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] cases:DeleteDomain.

---

##### `DeleteField`<sup>Required</sup> <a name="DeleteField" id="@cdk_utils/iam.cases.CasesActions.property.DeleteField"></a>

```typescript
public readonly DeleteField: string;
```

- *Type:* string

[Write] cases:DeleteField.

---

##### `DeleteLayout`<sup>Required</sup> <a name="DeleteLayout" id="@cdk_utils/iam.cases.CasesActions.property.DeleteLayout"></a>

```typescript
public readonly DeleteLayout: string;
```

- *Type:* string

[Write] cases:DeleteLayout.

---

##### `DeleteRelatedItem`<sup>Required</sup> <a name="DeleteRelatedItem" id="@cdk_utils/iam.cases.CasesActions.property.DeleteRelatedItem"></a>

```typescript
public readonly DeleteRelatedItem: string;
```

- *Type:* string

[Write] cases:DeleteRelatedItem.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.cases.CasesActions.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string;
```

- *Type:* string

[Write] cases:DeleteTemplate.

---

##### `ListCaseRules`<sup>Required</sup> <a name="ListCaseRules" id="@cdk_utils/iam.cases.CasesActions.property.ListCaseRules"></a>

```typescript
public readonly ListCaseRules: string;
```

- *Type:* string

[List] cases:ListCaseRules.

---

##### `ListCasesForContact`<sup>Required</sup> <a name="ListCasesForContact" id="@cdk_utils/iam.cases.CasesActions.property.ListCasesForContact"></a>

```typescript
public readonly ListCasesForContact: string;
```

- *Type:* string

[List] cases:ListCasesForContact.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.cases.CasesActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] cases:ListDomains.

---

##### `ListFieldOptions`<sup>Required</sup> <a name="ListFieldOptions" id="@cdk_utils/iam.cases.CasesActions.property.ListFieldOptions"></a>

```typescript
public readonly ListFieldOptions: string;
```

- *Type:* string

[List] cases:ListFieldOptions.

---

##### `ListFields`<sup>Required</sup> <a name="ListFields" id="@cdk_utils/iam.cases.CasesActions.property.ListFields"></a>

```typescript
public readonly ListFields: string;
```

- *Type:* string

[List] cases:ListFields.

---

##### `ListLayouts`<sup>Required</sup> <a name="ListLayouts" id="@cdk_utils/iam.cases.CasesActions.property.ListLayouts"></a>

```typescript
public readonly ListLayouts: string;
```

- *Type:* string

[List] cases:ListLayouts.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cases.CasesActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] cases:ListTagsForResource.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.cases.CasesActions.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string;
```

- *Type:* string

[List] cases:ListTemplates.

---

##### `PutCaseEventConfiguration`<sup>Required</sup> <a name="PutCaseEventConfiguration" id="@cdk_utils/iam.cases.CasesActions.property.PutCaseEventConfiguration"></a>

```typescript
public readonly PutCaseEventConfiguration: string;
```

- *Type:* string

[Write] cases:PutCaseEventConfiguration.

---

##### `SearchAllRelatedItems`<sup>Required</sup> <a name="SearchAllRelatedItems" id="@cdk_utils/iam.cases.CasesActions.property.SearchAllRelatedItems"></a>

```typescript
public readonly SearchAllRelatedItems: string;
```

- *Type:* string

[Read] cases:SearchAllRelatedItems.

---

##### `SearchCases`<sup>Required</sup> <a name="SearchCases" id="@cdk_utils/iam.cases.CasesActions.property.SearchCases"></a>

```typescript
public readonly SearchCases: string;
```

- *Type:* string

[Read] cases:SearchCases.

---

##### `SearchRelatedItems`<sup>Required</sup> <a name="SearchRelatedItems" id="@cdk_utils/iam.cases.CasesActions.property.SearchRelatedItems"></a>

```typescript
public readonly SearchRelatedItems: string;
```

- *Type:* string

[Read] cases:SearchRelatedItems.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cases.CasesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cases.CasesActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cases:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cases.CasesActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cases:UntagResource.

---

##### `UpdateCase`<sup>Required</sup> <a name="UpdateCase" id="@cdk_utils/iam.cases.CasesActions.property.UpdateCase"></a>

```typescript
public readonly UpdateCase: string;
```

- *Type:* string

[Write] cases:UpdateCase.

---

##### `UpdateCaseRule`<sup>Required</sup> <a name="UpdateCaseRule" id="@cdk_utils/iam.cases.CasesActions.property.UpdateCaseRule"></a>

```typescript
public readonly UpdateCaseRule: string;
```

- *Type:* string

[Write] cases:UpdateCaseRule.

---

##### `UpdateField`<sup>Required</sup> <a name="UpdateField" id="@cdk_utils/iam.cases.CasesActions.property.UpdateField"></a>

```typescript
public readonly UpdateField: string;
```

- *Type:* string

[Write] cases:UpdateField.

---

##### `UpdateLayout`<sup>Required</sup> <a name="UpdateLayout" id="@cdk_utils/iam.cases.CasesActions.property.UpdateLayout"></a>

```typescript
public readonly UpdateLayout: string;
```

- *Type:* string

[Write] cases:UpdateLayout.

---

##### `UpdateRelatedItem`<sup>Required</sup> <a name="UpdateRelatedItem" id="@cdk_utils/iam.cases.CasesActions.property.UpdateRelatedItem"></a>

```typescript
public readonly UpdateRelatedItem: string;
```

- *Type:* string

[Write] cases:UpdateRelatedItem.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.cases.CasesActions.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string;
```

- *Type:* string

[Write] cases:UpdateTemplate.

---

### CasesConditions <a name="CasesConditions" id="@cdk_utils/iam.cases.CasesConditions"></a>

Condition key constants and builders for cases.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cases.CasesConditions.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

new cases.CasesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.createdBy">createdBy</a></code> | Generates a condition block for `cases:CreatedBy`. |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.relatedItemType">relatedItemType</a></code> | Generates a condition block for `cases:RelatedItemType`. |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `createdBy` <a name="createdBy" id="@cdk_utils/iam.cases.CasesConditions.createdBy"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesConditions.createdBy(value: string)
```

Generates a condition block for `cases:CreatedBy`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cases.CasesConditions.createdBy.parameter.value"></a>

- *Type:* string

---

##### `relatedItemType` <a name="relatedItemType" id="@cdk_utils/iam.cases.CasesConditions.relatedItemType"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesConditions.relatedItemType(value: string)
```

Generates a condition block for `cases:RelatedItemType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cases.CasesConditions.relatedItemType.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cases.CasesConditions.requestTag"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cases.CasesConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cases.CasesConditions.resourceTag"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cases.CasesConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cases.CasesConditions.tagKeys"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cases.CasesConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.property.CreateCaseConditionKeys">CreateCaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCase action. |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.property.CREATED_BY">CREATED_BY</a></code> | <code>string</code> | Condition key: cases:CreatedBy (String). |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.property.CreateRelatedItemConditionKeys">CreateRelatedItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRelatedItem action. |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.property.RELATED_ITEM_TYPE">RELATED_ITEM_TYPE</a></code> | <code>string</code> | Condition key: cases:RelatedItemType (String). |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.property.UpdateCaseConditionKeys">UpdateCaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCase action. |
| <code><a href="#@cdk_utils/iam.cases.CasesConditions.property.USER_ARN">USER_ARN</a></code> | <code>string</code> | Condition key: connect:UserArn (ARN). |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cases.CasesConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cases.CasesConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cases.CasesConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCaseConditionKeys`<sup>Required</sup> <a name="CreateCaseConditionKeys" id="@cdk_utils/iam.cases.CasesConditions.property.CreateCaseConditionKeys"></a>

```typescript
public readonly CreateCaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCase action.

---

##### `CREATED_BY`<sup>Required</sup> <a name="CREATED_BY" id="@cdk_utils/iam.cases.CasesConditions.property.CREATED_BY"></a>

```typescript
public readonly CREATED_BY: string;
```

- *Type:* string

Condition key: cases:CreatedBy (String).

---

##### `CreateRelatedItemConditionKeys`<sup>Required</sup> <a name="CreateRelatedItemConditionKeys" id="@cdk_utils/iam.cases.CasesConditions.property.CreateRelatedItemConditionKeys"></a>

```typescript
public readonly CreateRelatedItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRelatedItem action.

---

##### `RELATED_ITEM_TYPE`<sup>Required</sup> <a name="RELATED_ITEM_TYPE" id="@cdk_utils/iam.cases.CasesConditions.property.RELATED_ITEM_TYPE"></a>

```typescript
public readonly RELATED_ITEM_TYPE: string;
```

- *Type:* string

Condition key: cases:RelatedItemType (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cases.CasesConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cases.CasesConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateCaseConditionKeys`<sup>Required</sup> <a name="UpdateCaseConditionKeys" id="@cdk_utils/iam.cases.CasesConditions.property.UpdateCaseConditionKeys"></a>

```typescript
public readonly UpdateCaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCase action.

---

##### `USER_ARN`<sup>Required</sup> <a name="USER_ARN" id="@cdk_utils/iam.cases.CasesConditions.property.USER_ARN"></a>

```typescript
public readonly USER_ARN: string;
```

- *Type:* string

Condition key: connect:UserArn (ARN).

---

### CasesOperations <a name="CasesOperations" id="@cdk_utils/iam.cases.CasesOperations"></a>

API operation to required IAM actions mapping for cases.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cases.CasesOperations.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

new cases.CasesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.BatchGetCaseRule">BatchGetCaseRule</a></code> | <code>string[]</code> | IAM actions required for the BatchGetCaseRule API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.BatchGetField">BatchGetField</a></code> | <code>string[]</code> | IAM actions required for the BatchGetField API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.BatchPutFieldOptions">BatchPutFieldOptions</a></code> | <code>string[]</code> | IAM actions required for the BatchPutFieldOptions API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.CreateCase">CreateCase</a></code> | <code>string[]</code> | IAM actions required for the CreateCase API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.CreateCaseRule">CreateCaseRule</a></code> | <code>string[]</code> | IAM actions required for the CreateCaseRule API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.CreateDomain">CreateDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateDomain API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.CreateField">CreateField</a></code> | <code>string[]</code> | IAM actions required for the CreateField API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.CreateLayout">CreateLayout</a></code> | <code>string[]</code> | IAM actions required for the CreateLayout API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.CreateRelatedItem">CreateRelatedItem</a></code> | <code>string[]</code> | IAM actions required for the CreateRelatedItem API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.CreateTemplate">CreateTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateTemplate API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.DeleteCase">DeleteCase</a></code> | <code>string[]</code> | IAM actions required for the DeleteCase API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.DeleteCaseRule">DeleteCaseRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteCaseRule API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.DeleteDomain">DeleteDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomain API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.DeleteField">DeleteField</a></code> | <code>string[]</code> | IAM actions required for the DeleteField API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.DeleteLayout">DeleteLayout</a></code> | <code>string[]</code> | IAM actions required for the DeleteLayout API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.DeleteRelatedItem">DeleteRelatedItem</a></code> | <code>string[]</code> | IAM actions required for the DeleteRelatedItem API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteTemplate API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.ListCaseRules">ListCaseRules</a></code> | <code>string[]</code> | IAM actions required for the ListCaseRules API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.ListCasesForContact">ListCasesForContact</a></code> | <code>string[]</code> | IAM actions required for the ListCasesForContact API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.ListDomains">ListDomains</a></code> | <code>string[]</code> | IAM actions required for the ListDomains API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.ListFieldOptions">ListFieldOptions</a></code> | <code>string[]</code> | IAM actions required for the ListFieldOptions API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.ListFields">ListFields</a></code> | <code>string[]</code> | IAM actions required for the ListFields API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.ListLayouts">ListLayouts</a></code> | <code>string[]</code> | IAM actions required for the ListLayouts API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.ListTemplates">ListTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListTemplates API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.opGetCase">opGetCase</a></code> | <code>string[]</code> | IAM actions required for the GetCase API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.opGetCaseAuditEvents">opGetCaseAuditEvents</a></code> | <code>string[]</code> | IAM actions required for the GetCaseAuditEvents API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.opGetCaseEventConfiguration">opGetCaseEventConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetCaseEventConfiguration API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.opGetDomain">opGetDomain</a></code> | <code>string[]</code> | IAM actions required for the GetDomain API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.opGetLayout">opGetLayout</a></code> | <code>string[]</code> | IAM actions required for the GetLayout API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.opGetTemplate">opGetTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetTemplate API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.PutCaseEventConfiguration">PutCaseEventConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutCaseEventConfiguration API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.SearchAllRelatedItems">SearchAllRelatedItems</a></code> | <code>string[]</code> | IAM actions required for the SearchAllRelatedItems API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.SearchCases">SearchCases</a></code> | <code>string[]</code> | IAM actions required for the SearchCases API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.SearchRelatedItems">SearchRelatedItems</a></code> | <code>string[]</code> | IAM actions required for the SearchRelatedItems API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.UpdateCase">UpdateCase</a></code> | <code>string[]</code> | IAM actions required for the UpdateCase API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.UpdateCaseRule">UpdateCaseRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateCaseRule API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.UpdateField">UpdateField</a></code> | <code>string[]</code> | IAM actions required for the UpdateField API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.UpdateLayout">UpdateLayout</a></code> | <code>string[]</code> | IAM actions required for the UpdateLayout API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.UpdateRelatedItem">UpdateRelatedItem</a></code> | <code>string[]</code> | IAM actions required for the UpdateRelatedItem API call. |
| <code><a href="#@cdk_utils/iam.cases.CasesOperations.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateTemplate API call. |

---

##### `BatchGetCaseRule`<sup>Required</sup> <a name="BatchGetCaseRule" id="@cdk_utils/iam.cases.CasesOperations.property.BatchGetCaseRule"></a>

```typescript
public readonly BatchGetCaseRule: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetCaseRule API call.

---

##### `BatchGetField`<sup>Required</sup> <a name="BatchGetField" id="@cdk_utils/iam.cases.CasesOperations.property.BatchGetField"></a>

```typescript
public readonly BatchGetField: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetField API call.

---

##### `BatchPutFieldOptions`<sup>Required</sup> <a name="BatchPutFieldOptions" id="@cdk_utils/iam.cases.CasesOperations.property.BatchPutFieldOptions"></a>

```typescript
public readonly BatchPutFieldOptions: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutFieldOptions API call.

---

##### `CreateCase`<sup>Required</sup> <a name="CreateCase" id="@cdk_utils/iam.cases.CasesOperations.property.CreateCase"></a>

```typescript
public readonly CreateCase: string[];
```

- *Type:* string[]

IAM actions required for the CreateCase API call.

---

##### `CreateCaseRule`<sup>Required</sup> <a name="CreateCaseRule" id="@cdk_utils/iam.cases.CasesOperations.property.CreateCaseRule"></a>

```typescript
public readonly CreateCaseRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateCaseRule API call.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.cases.CasesOperations.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomain API call.

---

##### `CreateField`<sup>Required</sup> <a name="CreateField" id="@cdk_utils/iam.cases.CasesOperations.property.CreateField"></a>

```typescript
public readonly CreateField: string[];
```

- *Type:* string[]

IAM actions required for the CreateField API call.

---

##### `CreateLayout`<sup>Required</sup> <a name="CreateLayout" id="@cdk_utils/iam.cases.CasesOperations.property.CreateLayout"></a>

```typescript
public readonly CreateLayout: string[];
```

- *Type:* string[]

IAM actions required for the CreateLayout API call.

---

##### `CreateRelatedItem`<sup>Required</sup> <a name="CreateRelatedItem" id="@cdk_utils/iam.cases.CasesOperations.property.CreateRelatedItem"></a>

```typescript
public readonly CreateRelatedItem: string[];
```

- *Type:* string[]

IAM actions required for the CreateRelatedItem API call.

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.cases.CasesOperations.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateTemplate API call.

---

##### `DeleteCase`<sup>Required</sup> <a name="DeleteCase" id="@cdk_utils/iam.cases.CasesOperations.property.DeleteCase"></a>

```typescript
public readonly DeleteCase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCase API call.

---

##### `DeleteCaseRule`<sup>Required</sup> <a name="DeleteCaseRule" id="@cdk_utils/iam.cases.CasesOperations.property.DeleteCaseRule"></a>

```typescript
public readonly DeleteCaseRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCaseRule API call.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.cases.CasesOperations.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomain API call.

---

##### `DeleteField`<sup>Required</sup> <a name="DeleteField" id="@cdk_utils/iam.cases.CasesOperations.property.DeleteField"></a>

```typescript
public readonly DeleteField: string[];
```

- *Type:* string[]

IAM actions required for the DeleteField API call.

---

##### `DeleteLayout`<sup>Required</sup> <a name="DeleteLayout" id="@cdk_utils/iam.cases.CasesOperations.property.DeleteLayout"></a>

```typescript
public readonly DeleteLayout: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLayout API call.

---

##### `DeleteRelatedItem`<sup>Required</sup> <a name="DeleteRelatedItem" id="@cdk_utils/iam.cases.CasesOperations.property.DeleteRelatedItem"></a>

```typescript
public readonly DeleteRelatedItem: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRelatedItem API call.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.cases.CasesOperations.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTemplate API call.

---

##### `ListCaseRules`<sup>Required</sup> <a name="ListCaseRules" id="@cdk_utils/iam.cases.CasesOperations.property.ListCaseRules"></a>

```typescript
public readonly ListCaseRules: string[];
```

- *Type:* string[]

IAM actions required for the ListCaseRules API call.

---

##### `ListCasesForContact`<sup>Required</sup> <a name="ListCasesForContact" id="@cdk_utils/iam.cases.CasesOperations.property.ListCasesForContact"></a>

```typescript
public readonly ListCasesForContact: string[];
```

- *Type:* string[]

IAM actions required for the ListCasesForContact API call.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.cases.CasesOperations.property.ListDomains"></a>

```typescript
public readonly ListDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListDomains API call.

---

##### `ListFieldOptions`<sup>Required</sup> <a name="ListFieldOptions" id="@cdk_utils/iam.cases.CasesOperations.property.ListFieldOptions"></a>

```typescript
public readonly ListFieldOptions: string[];
```

- *Type:* string[]

IAM actions required for the ListFieldOptions API call.

---

##### `ListFields`<sup>Required</sup> <a name="ListFields" id="@cdk_utils/iam.cases.CasesOperations.property.ListFields"></a>

```typescript
public readonly ListFields: string[];
```

- *Type:* string[]

IAM actions required for the ListFields API call.

---

##### `ListLayouts`<sup>Required</sup> <a name="ListLayouts" id="@cdk_utils/iam.cases.CasesOperations.property.ListLayouts"></a>

```typescript
public readonly ListLayouts: string[];
```

- *Type:* string[]

IAM actions required for the ListLayouts API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cases.CasesOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.cases.CasesOperations.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplates API call.

---

##### `opGetCase`<sup>Required</sup> <a name="opGetCase" id="@cdk_utils/iam.cases.CasesOperations.property.opGetCase"></a>

```typescript
public readonly opGetCase: string[];
```

- *Type:* string[]

IAM actions required for the GetCase API call.

---

##### `opGetCaseAuditEvents`<sup>Required</sup> <a name="opGetCaseAuditEvents" id="@cdk_utils/iam.cases.CasesOperations.property.opGetCaseAuditEvents"></a>

```typescript
public readonly opGetCaseAuditEvents: string[];
```

- *Type:* string[]

IAM actions required for the GetCaseAuditEvents API call.

---

##### `opGetCaseEventConfiguration`<sup>Required</sup> <a name="opGetCaseEventConfiguration" id="@cdk_utils/iam.cases.CasesOperations.property.opGetCaseEventConfiguration"></a>

```typescript
public readonly opGetCaseEventConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetCaseEventConfiguration API call.

---

##### `opGetDomain`<sup>Required</sup> <a name="opGetDomain" id="@cdk_utils/iam.cases.CasesOperations.property.opGetDomain"></a>

```typescript
public readonly opGetDomain: string[];
```

- *Type:* string[]

IAM actions required for the GetDomain API call.

---

##### `opGetLayout`<sup>Required</sup> <a name="opGetLayout" id="@cdk_utils/iam.cases.CasesOperations.property.opGetLayout"></a>

```typescript
public readonly opGetLayout: string[];
```

- *Type:* string[]

IAM actions required for the GetLayout API call.

---

##### `opGetTemplate`<sup>Required</sup> <a name="opGetTemplate" id="@cdk_utils/iam.cases.CasesOperations.property.opGetTemplate"></a>

```typescript
public readonly opGetTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplate API call.

---

##### `PutCaseEventConfiguration`<sup>Required</sup> <a name="PutCaseEventConfiguration" id="@cdk_utils/iam.cases.CasesOperations.property.PutCaseEventConfiguration"></a>

```typescript
public readonly PutCaseEventConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutCaseEventConfiguration API call.

---

##### `SearchAllRelatedItems`<sup>Required</sup> <a name="SearchAllRelatedItems" id="@cdk_utils/iam.cases.CasesOperations.property.SearchAllRelatedItems"></a>

```typescript
public readonly SearchAllRelatedItems: string[];
```

- *Type:* string[]

IAM actions required for the SearchAllRelatedItems API call.

---

##### `SearchCases`<sup>Required</sup> <a name="SearchCases" id="@cdk_utils/iam.cases.CasesOperations.property.SearchCases"></a>

```typescript
public readonly SearchCases: string[];
```

- *Type:* string[]

IAM actions required for the SearchCases API call.

---

##### `SearchRelatedItems`<sup>Required</sup> <a name="SearchRelatedItems" id="@cdk_utils/iam.cases.CasesOperations.property.SearchRelatedItems"></a>

```typescript
public readonly SearchRelatedItems: string[];
```

- *Type:* string[]

IAM actions required for the SearchRelatedItems API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cases.CasesOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cases.CasesOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCase`<sup>Required</sup> <a name="UpdateCase" id="@cdk_utils/iam.cases.CasesOperations.property.UpdateCase"></a>

```typescript
public readonly UpdateCase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCase API call.

---

##### `UpdateCaseRule`<sup>Required</sup> <a name="UpdateCaseRule" id="@cdk_utils/iam.cases.CasesOperations.property.UpdateCaseRule"></a>

```typescript
public readonly UpdateCaseRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCaseRule API call.

---

##### `UpdateField`<sup>Required</sup> <a name="UpdateField" id="@cdk_utils/iam.cases.CasesOperations.property.UpdateField"></a>

```typescript
public readonly UpdateField: string[];
```

- *Type:* string[]

IAM actions required for the UpdateField API call.

---

##### `UpdateLayout`<sup>Required</sup> <a name="UpdateLayout" id="@cdk_utils/iam.cases.CasesOperations.property.UpdateLayout"></a>

```typescript
public readonly UpdateLayout: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLayout API call.

---

##### `UpdateRelatedItem`<sup>Required</sup> <a name="UpdateRelatedItem" id="@cdk_utils/iam.cases.CasesOperations.property.UpdateRelatedItem"></a>

```typescript
public readonly UpdateRelatedItem: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRelatedItem API call.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.cases.CasesOperations.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTemplate API call.

---

### CasesResources <a name="CasesResources" id="@cdk_utils/iam.cases.CasesResources"></a>

ARN builders, validators, and parsers for cases resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cases.CasesResources.Initializer"></a>

```typescript
import { cases } from '@cdk_utils/iam'

new cases.CasesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.case">case</a></code> | Builds an ARN for the Case resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.caseRule">caseRule</a></code> | Builds an ARN for the CaseRule resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.domain">domain</a></code> | Builds an ARN for the Domain resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.field">field</a></code> | Builds an ARN for the Field resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.isValidCaseArn">isValidCaseArn</a></code> | Validates whether a string is a valid ARN for the Case resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.isValidCaseRuleArn">isValidCaseRuleArn</a></code> | Validates whether a string is a valid ARN for the CaseRule resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the Domain resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.isValidFieldArn">isValidFieldArn</a></code> | Validates whether a string is a valid ARN for the Field resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.isValidLayoutArn">isValidLayoutArn</a></code> | Validates whether a string is a valid ARN for the Layout resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.isValidRelatedItemArn">isValidRelatedItemArn</a></code> | Validates whether a string is a valid ARN for the RelatedItem resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.isValidTemplateArn">isValidTemplateArn</a></code> | Validates whether a string is a valid ARN for the Template resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.layout">layout</a></code> | Builds an ARN for the Layout resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.parseCaseArn">parseCaseArn</a></code> | Parses a Case ARN into its components. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.parseCaseRuleArn">parseCaseRuleArn</a></code> | Parses a CaseRule ARN into its components. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.parseDomainArn">parseDomainArn</a></code> | Parses a Domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.parseFieldArn">parseFieldArn</a></code> | Parses a Field ARN into its components. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.parseLayoutArn">parseLayoutArn</a></code> | Parses a Layout ARN into its components. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.parseRelatedItemArn">parseRelatedItemArn</a></code> | Parses a RelatedItem ARN into its components. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.parseTemplateArn">parseTemplateArn</a></code> | Parses a Template ARN into its components. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.relatedItem">relatedItem</a></code> | Builds an ARN for the RelatedItem resource. |
| <code><a href="#@cdk_utils/iam.cases.CasesResources.template">template</a></code> | Builds an ARN for the Template resource. |

---

##### `case` <a name="case" id="@cdk_utils/iam.cases.CasesResources.case"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.case(props: CasesCaseArnProps)
```

Builds an ARN for the Case resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cases.CasesResources.case.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cases.CasesCaseArnProps">CasesCaseArnProps</a>

---

##### `caseRule` <a name="caseRule" id="@cdk_utils/iam.cases.CasesResources.caseRule"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.caseRule(props: CasesCaseRuleArnProps)
```

Builds an ARN for the CaseRule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cases.CasesResources.caseRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cases.CasesCaseRuleArnProps">CasesCaseRuleArnProps</a>

---

##### `domain` <a name="domain" id="@cdk_utils/iam.cases.CasesResources.domain"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.domain(props: CasesDomainArnProps)
```

Builds an ARN for the Domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cases.CasesResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cases.CasesDomainArnProps">CasesDomainArnProps</a>

---

##### `field` <a name="field" id="@cdk_utils/iam.cases.CasesResources.field"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.field(props: CasesFieldArnProps)
```

Builds an ARN for the Field resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cases.CasesResources.field.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cases.CasesFieldArnProps">CasesFieldArnProps</a>

---

##### `isValidCaseArn` <a name="isValidCaseArn" id="@cdk_utils/iam.cases.CasesResources.isValidCaseArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.isValidCaseArn(arn: string)
```

Validates whether a string is a valid ARN for the Case resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.isValidCaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCaseRuleArn` <a name="isValidCaseRuleArn" id="@cdk_utils/iam.cases.CasesResources.isValidCaseRuleArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.isValidCaseRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the CaseRule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.isValidCaseRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.cases.CasesResources.isValidDomainArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the Domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFieldArn` <a name="isValidFieldArn" id="@cdk_utils/iam.cases.CasesResources.isValidFieldArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.isValidFieldArn(arn: string)
```

Validates whether a string is a valid ARN for the Field resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.isValidFieldArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLayoutArn` <a name="isValidLayoutArn" id="@cdk_utils/iam.cases.CasesResources.isValidLayoutArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.isValidLayoutArn(arn: string)
```

Validates whether a string is a valid ARN for the Layout resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.isValidLayoutArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRelatedItemArn` <a name="isValidRelatedItemArn" id="@cdk_utils/iam.cases.CasesResources.isValidRelatedItemArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.isValidRelatedItemArn(arn: string)
```

Validates whether a string is a valid ARN for the RelatedItem resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.isValidRelatedItemArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTemplateArn` <a name="isValidTemplateArn" id="@cdk_utils/iam.cases.CasesResources.isValidTemplateArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.isValidTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the Template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.isValidTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `layout` <a name="layout" id="@cdk_utils/iam.cases.CasesResources.layout"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.layout(props: CasesLayoutArnProps)
```

Builds an ARN for the Layout resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cases.CasesResources.layout.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cases.CasesLayoutArnProps">CasesLayoutArnProps</a>

---

##### `parseCaseArn` <a name="parseCaseArn" id="@cdk_utils/iam.cases.CasesResources.parseCaseArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.parseCaseArn(arn: string)
```

Parses a Case ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.parseCaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCaseRuleArn` <a name="parseCaseRuleArn" id="@cdk_utils/iam.cases.CasesResources.parseCaseRuleArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.parseCaseRuleArn(arn: string)
```

Parses a CaseRule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.parseCaseRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.cases.CasesResources.parseDomainArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.parseDomainArn(arn: string)
```

Parses a Domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFieldArn` <a name="parseFieldArn" id="@cdk_utils/iam.cases.CasesResources.parseFieldArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.parseFieldArn(arn: string)
```

Parses a Field ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.parseFieldArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLayoutArn` <a name="parseLayoutArn" id="@cdk_utils/iam.cases.CasesResources.parseLayoutArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.parseLayoutArn(arn: string)
```

Parses a Layout ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.parseLayoutArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRelatedItemArn` <a name="parseRelatedItemArn" id="@cdk_utils/iam.cases.CasesResources.parseRelatedItemArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.parseRelatedItemArn(arn: string)
```

Parses a RelatedItem ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.parseRelatedItemArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTemplateArn` <a name="parseTemplateArn" id="@cdk_utils/iam.cases.CasesResources.parseTemplateArn"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.parseTemplateArn(arn: string)
```

Parses a Template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cases.CasesResources.parseTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `relatedItem` <a name="relatedItem" id="@cdk_utils/iam.cases.CasesResources.relatedItem"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.relatedItem(props: CasesRelatedItemArnProps)
```

Builds an ARN for the RelatedItem resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cases.CasesResources.relatedItem.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cases.CasesRelatedItemArnProps">CasesRelatedItemArnProps</a>

---

##### `template` <a name="template" id="@cdk_utils/iam.cases.CasesResources.template"></a>

```typescript
import { cases } from '@cdk_utils/iam'

cases.CasesResources.template(props: CasesTemplateArnProps)
```

Builds an ARN for the Template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cases.CasesResources.template.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cases.CasesTemplateArnProps">CasesTemplateArnProps</a>

---




