# `guardduty` Submodule <a name="`guardduty` Submodule" id="@cdk_utils/iam.guardduty"></a>


## Structs <a name="Structs" id="Structs"></a>

### GuardDutyCustomdetectionruleArnComponents <a name="GuardDutyCustomdetectionruleArnComponents" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnComponents"></a>

Parsed components of a customdetectionrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnComponents.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyCustomdetectionruleArnComponents: guardduty.GuardDutyCustomdetectionruleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnComponents.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnComponents.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component.

---

### GuardDutyCustomdetectionruleArnProps <a name="GuardDutyCustomdetectionruleArnProps" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnProps"></a>

Properties for building a customdetectionrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnProps.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyCustomdetectionruleArnProps: guardduty.GuardDutyCustomdetectionruleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnProps.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GuardDutyCustomdetectionruleassociationArnComponents <a name="GuardDutyCustomdetectionruleassociationArnComponents" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents"></a>

Parsed components of a customdetectionruleassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyCustomdetectionruleassociationArnComponents: guardduty.GuardDutyCustomdetectionruleassociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents.property.associationId">associationId</a></code> | <code>string</code> | The AssociationId component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

The AssociationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnComponents.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component.

---

### GuardDutyCustomdetectionruleassociationArnProps <a name="GuardDutyCustomdetectionruleassociationArnProps" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps"></a>

Properties for building a customdetectionruleassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyCustomdetectionruleassociationArnProps: guardduty.GuardDutyCustomdetectionruleassociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps.property.associationId">associationId</a></code> | <code>string</code> | The AssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

The AssociationId component of the ARN.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GuardDutyDetectorArnComponents <a name="GuardDutyDetectorArnComponents" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnComponents"></a>

Parsed components of a detector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnComponents.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyDetectorArnComponents: guardduty.GuardDutyDetectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyDetectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyDetectorArnComponents.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyDetectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyDetectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnComponents.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GuardDutyDetectorArnProps <a name="GuardDutyDetectorArnProps" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnProps"></a>

Properties for building a detector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnProps.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyDetectorArnProps: guardduty.GuardDutyDetectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyDetectorArnProps.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyDetectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyDetectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyDetectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnProps.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyDetectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GuardDutyFilterArnComponents <a name="GuardDutyFilterArnComponents" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents"></a>

Parsed components of a filter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyFilterArnComponents: guardduty.GuardDutyFilterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents.property.filterName">filterName</a></code> | <code>string</code> | The FilterName component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component.

---

##### `filterName`<sup>Required</sup> <a name="filterName" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents.property.filterName"></a>

```typescript
public readonly filterName: string;
```

- *Type:* string

The FilterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GuardDutyFilterArnProps <a name="GuardDutyFilterArnProps" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnProps"></a>

Properties for building a filter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnProps.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyFilterArnProps: guardduty.GuardDutyFilterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyFilterArnProps.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyFilterArnProps.property.filterName">filterName</a></code> | <code>string</code> | The FilterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyFilterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyFilterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyFilterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnProps.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component of the ARN.

---

##### `filterName`<sup>Required</sup> <a name="filterName" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnProps.property.filterName"></a>

```typescript
public readonly filterName: string;
```

- *Type:* string

The FilterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyFilterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GuardDutyIpsetArnComponents <a name="GuardDutyIpsetArnComponents" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents"></a>

Parsed components of a ipset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyIpsetArnComponents: guardduty.GuardDutyIpsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents.property.ipSetId">ipSetId</a></code> | <code>string</code> | The IPSetId component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component.

---

##### `ipSetId`<sup>Required</sup> <a name="ipSetId" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents.property.ipSetId"></a>

```typescript
public readonly ipSetId: string;
```

- *Type:* string

The IPSetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GuardDutyIpsetArnProps <a name="GuardDutyIpsetArnProps" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps"></a>

Properties for building a ipset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyIpsetArnProps: guardduty.GuardDutyIpsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps.property.ipSetId">ipSetId</a></code> | <code>string</code> | The IPSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component of the ARN.

---

##### `ipSetId`<sup>Required</sup> <a name="ipSetId" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps.property.ipSetId"></a>

```typescript
public readonly ipSetId: string;
```

- *Type:* string

The IPSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GuardDutyMalwareprotectionplanArnComponents <a name="GuardDutyMalwareprotectionplanArnComponents" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnComponents"></a>

Parsed components of a malwareprotectionplan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnComponents.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyMalwareprotectionplanArnComponents: guardduty.GuardDutyMalwareprotectionplanArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnComponents.property.malwareProtectionPlanId">malwareProtectionPlanId</a></code> | <code>string</code> | The MalwareProtectionPlanId component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `malwareProtectionPlanId`<sup>Required</sup> <a name="malwareProtectionPlanId" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnComponents.property.malwareProtectionPlanId"></a>

```typescript
public readonly malwareProtectionPlanId: string;
```

- *Type:* string

The MalwareProtectionPlanId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GuardDutyMalwareprotectionplanArnProps <a name="GuardDutyMalwareprotectionplanArnProps" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnProps"></a>

Properties for building a malwareprotectionplan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnProps.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyMalwareprotectionplanArnProps: guardduty.GuardDutyMalwareprotectionplanArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnProps.property.malwareProtectionPlanId">malwareProtectionPlanId</a></code> | <code>string</code> | The MalwareProtectionPlanId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `malwareProtectionPlanId`<sup>Required</sup> <a name="malwareProtectionPlanId" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnProps.property.malwareProtectionPlanId"></a>

```typescript
public readonly malwareProtectionPlanId: string;
```

- *Type:* string

The MalwareProtectionPlanId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GuardDutyPublishingDestinationArnComponents <a name="GuardDutyPublishingDestinationArnComponents" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents"></a>

Parsed components of a publishingDestination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyPublishingDestinationArnComponents: guardduty.GuardDutyPublishingDestinationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents.property.publishingDestinationId">publishingDestinationId</a></code> | <code>string</code> | The PublishingDestinationId component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `publishingDestinationId`<sup>Required</sup> <a name="publishingDestinationId" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents.property.publishingDestinationId"></a>

```typescript
public readonly publishingDestinationId: string;
```

- *Type:* string

The PublishingDestinationId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GuardDutyPublishingDestinationArnProps <a name="GuardDutyPublishingDestinationArnProps" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps"></a>

Properties for building a publishingDestination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyPublishingDestinationArnProps: guardduty.GuardDutyPublishingDestinationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps.property.publishingDestinationId">publishingDestinationId</a></code> | <code>string</code> | The PublishingDestinationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component of the ARN.

---

##### `publishingDestinationId`<sup>Required</sup> <a name="publishingDestinationId" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps.property.publishingDestinationId"></a>

```typescript
public readonly publishingDestinationId: string;
```

- *Type:* string

The PublishingDestinationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GuardDutyThreatentitysetArnComponents <a name="GuardDutyThreatentitysetArnComponents" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents"></a>

Parsed components of a threatentityset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyThreatentitysetArnComponents: guardduty.GuardDutyThreatentitysetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents.property.threatEntitySetId">threatEntitySetId</a></code> | <code>string</code> | The ThreatEntitySetId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `threatEntitySetId`<sup>Required</sup> <a name="threatEntitySetId" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnComponents.property.threatEntitySetId"></a>

```typescript
public readonly threatEntitySetId: string;
```

- *Type:* string

The ThreatEntitySetId component.

---

### GuardDutyThreatentitysetArnProps <a name="GuardDutyThreatentitysetArnProps" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps"></a>

Properties for building a threatentityset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyThreatentitysetArnProps: guardduty.GuardDutyThreatentitysetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps.property.threatEntitySetId">threatEntitySetId</a></code> | <code>string</code> | The ThreatEntitySetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component of the ARN.

---

##### `threatEntitySetId`<sup>Required</sup> <a name="threatEntitySetId" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps.property.threatEntitySetId"></a>

```typescript
public readonly threatEntitySetId: string;
```

- *Type:* string

The ThreatEntitySetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GuardDutyThreatintelsetArnComponents <a name="GuardDutyThreatintelsetArnComponents" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents"></a>

Parsed components of a threatintelset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyThreatintelsetArnComponents: guardduty.GuardDutyThreatintelsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents.property.threatIntelSetId">threatIntelSetId</a></code> | <code>string</code> | The ThreatIntelSetId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `threatIntelSetId`<sup>Required</sup> <a name="threatIntelSetId" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnComponents.property.threatIntelSetId"></a>

```typescript
public readonly threatIntelSetId: string;
```

- *Type:* string

The ThreatIntelSetId component.

---

### GuardDutyThreatintelsetArnProps <a name="GuardDutyThreatintelsetArnProps" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps"></a>

Properties for building a threatintelset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyThreatintelsetArnProps: guardduty.GuardDutyThreatintelsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps.property.threatIntelSetId">threatIntelSetId</a></code> | <code>string</code> | The ThreatIntelSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component of the ARN.

---

##### `threatIntelSetId`<sup>Required</sup> <a name="threatIntelSetId" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps.property.threatIntelSetId"></a>

```typescript
public readonly threatIntelSetId: string;
```

- *Type:* string

The ThreatIntelSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GuardDutyTrustedentitysetArnComponents <a name="GuardDutyTrustedentitysetArnComponents" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents"></a>

Parsed components of a trustedentityset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyTrustedentitysetArnComponents: guardduty.GuardDutyTrustedentitysetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents.property.trustedEntitySetId">trustedEntitySetId</a></code> | <code>string</code> | The TrustedEntitySetId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `trustedEntitySetId`<sup>Required</sup> <a name="trustedEntitySetId" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnComponents.property.trustedEntitySetId"></a>

```typescript
public readonly trustedEntitySetId: string;
```

- *Type:* string

The TrustedEntitySetId component.

---

### GuardDutyTrustedentitysetArnProps <a name="GuardDutyTrustedentitysetArnProps" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps"></a>

Properties for building a trustedentityset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

const guardDutyTrustedentitysetArnProps: guardduty.GuardDutyTrustedentitysetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps.property.trustedEntitySetId">trustedEntitySetId</a></code> | <code>string</code> | The TrustedEntitySetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component of the ARN.

---

##### `trustedEntitySetId`<sup>Required</sup> <a name="trustedEntitySetId" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps.property.trustedEntitySetId"></a>

```typescript
public readonly trustedEntitySetId: string;
```

- *Type:* string

The TrustedEntitySetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GuardDutyActions <a name="GuardDutyActions" id="@cdk_utils/iam.guardduty.GuardDutyActions"></a>

IAM action constants for the guardduty service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.guardduty.GuardDutyActions.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

new guardduty.GuardDutyActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.AcceptAdministratorInvitation">AcceptAdministratorInvitation</a></code> | <code>string</code> | [Write] guardduty:AcceptAdministratorInvitation. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.AcceptInvitation">AcceptInvitation</a></code> | <code>string</code> | [Write] guardduty:AcceptInvitation. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetAdministratorAccount">actionGetAdministratorAccount</a></code> | <code>string</code> | [Read] guardduty:GetAdministratorAccount. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetCoverageStatistics">actionGetCoverageStatistics</a></code> | <code>string</code> | [Read] guardduty:GetCoverageStatistics. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetCustomDetectionRule">actionGetCustomDetectionRule</a></code> | <code>string</code> | [Read] guardduty:GetCustomDetectionRule. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetCustomDetectionRuleAssociation">actionGetCustomDetectionRuleAssociation</a></code> | <code>string</code> | [Read] guardduty:GetCustomDetectionRuleAssociation. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetCustomDetectionRuleOrgConfiguration">actionGetCustomDetectionRuleOrgConfiguration</a></code> | <code>string</code> | [Read] guardduty:GetCustomDetectionRuleOrgConfiguration. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetDetector">actionGetDetector</a></code> | <code>string</code> | [Read] guardduty:GetDetector. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetFilter">actionGetFilter</a></code> | <code>string</code> | [Read] guardduty:GetFilter. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetFindings">actionGetFindings</a></code> | <code>string</code> | [Read] guardduty:GetFindings. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetFindingsStatistics">actionGetFindingsStatistics</a></code> | <code>string</code> | [Read] guardduty:GetFindingsStatistics. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetInvestigation">actionGetInvestigation</a></code> | <code>string</code> | [Read] guardduty:GetInvestigation. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetInvitationsCount">actionGetInvitationsCount</a></code> | <code>string</code> | [Read] guardduty:GetInvitationsCount. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetIPSet">actionGetIPSet</a></code> | <code>string</code> | [Read] guardduty:GetIPSet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMalwareProtectionPlan">actionGetMalwareProtectionPlan</a></code> | <code>string</code> | [Read] guardduty:GetMalwareProtectionPlan. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMalwareScan">actionGetMalwareScan</a></code> | <code>string</code> | [Read] guardduty:GetMalwareScan. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMalwareScanSettings">actionGetMalwareScanSettings</a></code> | <code>string</code> | [Read] guardduty:GetMalwareScanSettings. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMasterAccount">actionGetMasterAccount</a></code> | <code>string</code> | [Read] guardduty:GetMasterAccount. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMemberDetectors">actionGetMemberDetectors</a></code> | <code>string</code> | [Read] guardduty:GetMemberDetectors. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMembers">actionGetMembers</a></code> | <code>string</code> | [Read] guardduty:GetMembers. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetOrganizationStatistics">actionGetOrganizationStatistics</a></code> | <code>string</code> | [Read] guardduty:GetOrganizationStatistics. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetRemainingFreeTrialDays">actionGetRemainingFreeTrialDays</a></code> | <code>string</code> | [Read] guardduty:GetRemainingFreeTrialDays. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetThreatEntitySet">actionGetThreatEntitySet</a></code> | <code>string</code> | [Read] guardduty:GetThreatEntitySet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetThreatIntelSet">actionGetThreatIntelSet</a></code> | <code>string</code> | [Read] guardduty:GetThreatIntelSet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetTrustedEntitySet">actionGetTrustedEntitySet</a></code> | <code>string</code> | [Read] guardduty:GetTrustedEntitySet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetUsageStatistics">actionGetUsageStatistics</a></code> | <code>string</code> | [Read] guardduty:GetUsageStatistics. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ArchiveFindings">ArchiveFindings</a></code> | <code>string</code> | [Write] guardduty:ArchiveFindings. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateCustomDetectionRuleAssociation">CreateCustomDetectionRuleAssociation</a></code> | <code>string</code> | [Write] guardduty:CreateCustomDetectionRuleAssociation. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateCustomDetectionRuleOrgConfiguration">CreateCustomDetectionRuleOrgConfiguration</a></code> | <code>string</code> | [Write] guardduty:CreateCustomDetectionRuleOrgConfiguration. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateDetector">CreateDetector</a></code> | <code>string</code> | [Write] guardduty:CreateDetector. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateFilter">CreateFilter</a></code> | <code>string</code> | [Write] guardduty:CreateFilter. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateInvestigation">CreateInvestigation</a></code> | <code>string</code> | [Write] guardduty:CreateInvestigation. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateIPSet">CreateIPSet</a></code> | <code>string</code> | [Write] guardduty:CreateIPSet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateMalwareProtectionPlan">CreateMalwareProtectionPlan</a></code> | <code>string</code> | [Write] guardduty:CreateMalwareProtectionPlan. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateMembers">CreateMembers</a></code> | <code>string</code> | [Write] guardduty:CreateMembers. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreatePublishingDestination">CreatePublishingDestination</a></code> | <code>string</code> | [Write] guardduty:CreatePublishingDestination. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateSampleFindings">CreateSampleFindings</a></code> | <code>string</code> | [Write] guardduty:CreateSampleFindings. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateThreatEntitySet">CreateThreatEntitySet</a></code> | <code>string</code> | [Write] guardduty:CreateThreatEntitySet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateThreatIntelSet">CreateThreatIntelSet</a></code> | <code>string</code> | [Write] guardduty:CreateThreatIntelSet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateTrustedEntitySet">CreateTrustedEntitySet</a></code> | <code>string</code> | [Write] guardduty:CreateTrustedEntitySet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeclineInvitations">DeclineInvitations</a></code> | <code>string</code> | [Write] guardduty:DeclineInvitations. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteCustomDetectionRuleAssociation">DeleteCustomDetectionRuleAssociation</a></code> | <code>string</code> | [Write] guardduty:DeleteCustomDetectionRuleAssociation. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteCustomDetectionRuleOrgConfiguration">DeleteCustomDetectionRuleOrgConfiguration</a></code> | <code>string</code> | [Write] guardduty:DeleteCustomDetectionRuleOrgConfiguration. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteDetector">DeleteDetector</a></code> | <code>string</code> | [Write] guardduty:DeleteDetector. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteFilter">DeleteFilter</a></code> | <code>string</code> | [Write] guardduty:DeleteFilter. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteInvitations">DeleteInvitations</a></code> | <code>string</code> | [Write] guardduty:DeleteInvitations. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteIPSet">DeleteIPSet</a></code> | <code>string</code> | [Write] guardduty:DeleteIPSet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteMalwareProtectionPlan">DeleteMalwareProtectionPlan</a></code> | <code>string</code> | [Write] guardduty:DeleteMalwareProtectionPlan. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteMembers">DeleteMembers</a></code> | <code>string</code> | [Write] guardduty:DeleteMembers. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeletePublishingDestination">DeletePublishingDestination</a></code> | <code>string</code> | [Write] guardduty:DeletePublishingDestination. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteThreatEntitySet">DeleteThreatEntitySet</a></code> | <code>string</code> | [Write] guardduty:DeleteThreatEntitySet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteThreatIntelSet">DeleteThreatIntelSet</a></code> | <code>string</code> | [Write] guardduty:DeleteThreatIntelSet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteTrustedEntitySet">DeleteTrustedEntitySet</a></code> | <code>string</code> | [Write] guardduty:DeleteTrustedEntitySet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DescribeMalwareScans">DescribeMalwareScans</a></code> | <code>string</code> | [Read] guardduty:DescribeMalwareScans. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DescribeOrganizationConfiguration">DescribeOrganizationConfiguration</a></code> | <code>string</code> | [Read] guardduty:DescribeOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DescribePublishingDestination">DescribePublishingDestination</a></code> | <code>string</code> | [Read] guardduty:DescribePublishingDestination. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DisableOrganizationAdminAccount">DisableOrganizationAdminAccount</a></code> | <code>string</code> | [Write] guardduty:DisableOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</a></code> | <code>string</code> | [Write] guardduty:DisassociateFromAdministratorAccount. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DisassociateFromMasterAccount">DisassociateFromMasterAccount</a></code> | <code>string</code> | [Write] guardduty:DisassociateFromMasterAccount. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.DisassociateMembers">DisassociateMembers</a></code> | <code>string</code> | [Write] guardduty:DisassociateMembers. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.EnableOrganizationAdminAccount">EnableOrganizationAdminAccount</a></code> | <code>string</code> | [Write] guardduty:EnableOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.InviteMembers">InviteMembers</a></code> | <code>string</code> | [Write] guardduty:InviteMembers. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListCoverage">ListCoverage</a></code> | <code>string</code> | [List] guardduty:ListCoverage. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListCustomDetectionRuleAssociations">ListCustomDetectionRuleAssociations</a></code> | <code>string</code> | [List] guardduty:ListCustomDetectionRuleAssociations. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListCustomDetectionRuleOrgConfigurations">ListCustomDetectionRuleOrgConfigurations</a></code> | <code>string</code> | [List] guardduty:ListCustomDetectionRuleOrgConfigurations. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListCustomDetectionRules">ListCustomDetectionRules</a></code> | <code>string</code> | [List] guardduty:ListCustomDetectionRules. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListDetectors">ListDetectors</a></code> | <code>string</code> | [List] guardduty:ListDetectors. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListFilters">ListFilters</a></code> | <code>string</code> | [List] guardduty:ListFilters. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListFindings">ListFindings</a></code> | <code>string</code> | [List] guardduty:ListFindings. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListInvestigations">ListInvestigations</a></code> | <code>string</code> | [List] guardduty:ListInvestigations. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListInvitations">ListInvitations</a></code> | <code>string</code> | [List] guardduty:ListInvitations. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListIPSets">ListIPSets</a></code> | <code>string</code> | [List] guardduty:ListIPSets. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListMalwareProtectionPlans">ListMalwareProtectionPlans</a></code> | <code>string</code> | [List] guardduty:ListMalwareProtectionPlans. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListMalwareScans">ListMalwareScans</a></code> | <code>string</code> | [List] guardduty:ListMalwareScans. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListMembers">ListMembers</a></code> | <code>string</code> | [List] guardduty:ListMembers. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListOrganizationAdminAccounts">ListOrganizationAdminAccounts</a></code> | <code>string</code> | [List] guardduty:ListOrganizationAdminAccounts. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListPublishingDestinations">ListPublishingDestinations</a></code> | <code>string</code> | [List] guardduty:ListPublishingDestinations. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] guardduty:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListThreatEntitySets">ListThreatEntitySets</a></code> | <code>string</code> | [List] guardduty:ListThreatEntitySets. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListThreatIntelSets">ListThreatIntelSets</a></code> | <code>string</code> | [List] guardduty:ListThreatIntelSets. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.ListTrustedEntitySets">ListTrustedEntitySets</a></code> | <code>string</code> | [List] guardduty:ListTrustedEntitySets. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.SendObjectMalwareScan">SendObjectMalwareScan</a></code> | <code>string</code> | [Write] guardduty:SendObjectMalwareScan. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.SendSecurityTelemetry">SendSecurityTelemetry</a></code> | <code>string</code> | [Write] guardduty:SendSecurityTelemetry. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.StartMalwareScan">StartMalwareScan</a></code> | <code>string</code> | [Write] guardduty:StartMalwareScan. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.StartMonitoringMembers">StartMonitoringMembers</a></code> | <code>string</code> | [Write] guardduty:StartMonitoringMembers. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.StopMonitoringMembers">StopMonitoringMembers</a></code> | <code>string</code> | [Write] guardduty:StopMonitoringMembers. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] guardduty:TagResource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UnarchiveFindings">UnarchiveFindings</a></code> | <code>string</code> | [Write] guardduty:UnarchiveFindings. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] guardduty:UntagResource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateCustomDetectionRuleAssociation">UpdateCustomDetectionRuleAssociation</a></code> | <code>string</code> | [Write] guardduty:UpdateCustomDetectionRuleAssociation. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateCustomDetectionRuleOrgConfiguration">UpdateCustomDetectionRuleOrgConfiguration</a></code> | <code>string</code> | [Write] guardduty:UpdateCustomDetectionRuleOrgConfiguration. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateDetector">UpdateDetector</a></code> | <code>string</code> | [Write] guardduty:UpdateDetector. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateFilter">UpdateFilter</a></code> | <code>string</code> | [Write] guardduty:UpdateFilter. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateFindingsFeedback">UpdateFindingsFeedback</a></code> | <code>string</code> | [Write] guardduty:UpdateFindingsFeedback. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateIPSet">UpdateIPSet</a></code> | <code>string</code> | [Write] guardduty:UpdateIPSet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateMalwareProtectionPlan">UpdateMalwareProtectionPlan</a></code> | <code>string</code> | [Write] guardduty:UpdateMalwareProtectionPlan. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateMalwareScanSettings">UpdateMalwareScanSettings</a></code> | <code>string</code> | [Write] guardduty:UpdateMalwareScanSettings. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateMemberDetectors">UpdateMemberDetectors</a></code> | <code>string</code> | [Write] guardduty:UpdateMemberDetectors. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateOrganizationConfiguration">UpdateOrganizationConfiguration</a></code> | <code>string</code> | [Write] guardduty:UpdateOrganizationConfiguration. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdatePublishingDestination">UpdatePublishingDestination</a></code> | <code>string</code> | [Write] guardduty:UpdatePublishingDestination. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateThreatEntitySet">UpdateThreatEntitySet</a></code> | <code>string</code> | [Write] guardduty:UpdateThreatEntitySet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateThreatIntelSet">UpdateThreatIntelSet</a></code> | <code>string</code> | [Write] guardduty:UpdateThreatIntelSet. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateTrustedEntitySet">UpdateTrustedEntitySet</a></code> | <code>string</code> | [Write] guardduty:UpdateTrustedEntitySet. |

---

##### `AcceptAdministratorInvitation`<sup>Required</sup> <a name="AcceptAdministratorInvitation" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.AcceptAdministratorInvitation"></a>

```typescript
public readonly AcceptAdministratorInvitation: string;
```

- *Type:* string

[Write] guardduty:AcceptAdministratorInvitation.

---

##### `AcceptInvitation`<sup>Required</sup> <a name="AcceptInvitation" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.AcceptInvitation"></a>

```typescript
public readonly AcceptInvitation: string;
```

- *Type:* string

[Write] guardduty:AcceptInvitation.

---

##### `actionGetAdministratorAccount`<sup>Required</sup> <a name="actionGetAdministratorAccount" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetAdministratorAccount"></a>

```typescript
public readonly actionGetAdministratorAccount: string;
```

- *Type:* string

[Read] guardduty:GetAdministratorAccount.

---

##### `actionGetCoverageStatistics`<sup>Required</sup> <a name="actionGetCoverageStatistics" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetCoverageStatistics"></a>

```typescript
public readonly actionGetCoverageStatistics: string;
```

- *Type:* string

[Read] guardduty:GetCoverageStatistics.

---

##### `actionGetCustomDetectionRule`<sup>Required</sup> <a name="actionGetCustomDetectionRule" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetCustomDetectionRule"></a>

```typescript
public readonly actionGetCustomDetectionRule: string;
```

- *Type:* string

[Read] guardduty:GetCustomDetectionRule.

---

##### `actionGetCustomDetectionRuleAssociation`<sup>Required</sup> <a name="actionGetCustomDetectionRuleAssociation" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetCustomDetectionRuleAssociation"></a>

```typescript
public readonly actionGetCustomDetectionRuleAssociation: string;
```

- *Type:* string

[Read] guardduty:GetCustomDetectionRuleAssociation.

---

##### `actionGetCustomDetectionRuleOrgConfiguration`<sup>Required</sup> <a name="actionGetCustomDetectionRuleOrgConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetCustomDetectionRuleOrgConfiguration"></a>

```typescript
public readonly actionGetCustomDetectionRuleOrgConfiguration: string;
```

- *Type:* string

[Read] guardduty:GetCustomDetectionRuleOrgConfiguration.

---

##### `actionGetDetector`<sup>Required</sup> <a name="actionGetDetector" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetDetector"></a>

```typescript
public readonly actionGetDetector: string;
```

- *Type:* string

[Read] guardduty:GetDetector.

---

##### `actionGetFilter`<sup>Required</sup> <a name="actionGetFilter" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetFilter"></a>

```typescript
public readonly actionGetFilter: string;
```

- *Type:* string

[Read] guardduty:GetFilter.

---

##### `actionGetFindings`<sup>Required</sup> <a name="actionGetFindings" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetFindings"></a>

```typescript
public readonly actionGetFindings: string;
```

- *Type:* string

[Read] guardduty:GetFindings.

---

##### `actionGetFindingsStatistics`<sup>Required</sup> <a name="actionGetFindingsStatistics" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetFindingsStatistics"></a>

```typescript
public readonly actionGetFindingsStatistics: string;
```

- *Type:* string

[Read] guardduty:GetFindingsStatistics.

---

##### `actionGetInvestigation`<sup>Required</sup> <a name="actionGetInvestigation" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetInvestigation"></a>

```typescript
public readonly actionGetInvestigation: string;
```

- *Type:* string

[Read] guardduty:GetInvestigation.

---

##### `actionGetInvitationsCount`<sup>Required</sup> <a name="actionGetInvitationsCount" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetInvitationsCount"></a>

```typescript
public readonly actionGetInvitationsCount: string;
```

- *Type:* string

[Read] guardduty:GetInvitationsCount.

---

##### `actionGetIPSet`<sup>Required</sup> <a name="actionGetIPSet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetIPSet"></a>

```typescript
public readonly actionGetIPSet: string;
```

- *Type:* string

[Read] guardduty:GetIPSet.

---

##### `actionGetMalwareProtectionPlan`<sup>Required</sup> <a name="actionGetMalwareProtectionPlan" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMalwareProtectionPlan"></a>

```typescript
public readonly actionGetMalwareProtectionPlan: string;
```

- *Type:* string

[Read] guardduty:GetMalwareProtectionPlan.

---

##### `actionGetMalwareScan`<sup>Required</sup> <a name="actionGetMalwareScan" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMalwareScan"></a>

```typescript
public readonly actionGetMalwareScan: string;
```

- *Type:* string

[Read] guardduty:GetMalwareScan.

---

##### `actionGetMalwareScanSettings`<sup>Required</sup> <a name="actionGetMalwareScanSettings" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMalwareScanSettings"></a>

```typescript
public readonly actionGetMalwareScanSettings: string;
```

- *Type:* string

[Read] guardduty:GetMalwareScanSettings.

---

##### `actionGetMasterAccount`<sup>Required</sup> <a name="actionGetMasterAccount" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMasterAccount"></a>

```typescript
public readonly actionGetMasterAccount: string;
```

- *Type:* string

[Read] guardduty:GetMasterAccount.

---

##### `actionGetMemberDetectors`<sup>Required</sup> <a name="actionGetMemberDetectors" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMemberDetectors"></a>

```typescript
public readonly actionGetMemberDetectors: string;
```

- *Type:* string

[Read] guardduty:GetMemberDetectors.

---

##### `actionGetMembers`<sup>Required</sup> <a name="actionGetMembers" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetMembers"></a>

```typescript
public readonly actionGetMembers: string;
```

- *Type:* string

[Read] guardduty:GetMembers.

---

##### `actionGetOrganizationStatistics`<sup>Required</sup> <a name="actionGetOrganizationStatistics" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetOrganizationStatistics"></a>

```typescript
public readonly actionGetOrganizationStatistics: string;
```

- *Type:* string

[Read] guardduty:GetOrganizationStatistics.

---

##### `actionGetRemainingFreeTrialDays`<sup>Required</sup> <a name="actionGetRemainingFreeTrialDays" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetRemainingFreeTrialDays"></a>

```typescript
public readonly actionGetRemainingFreeTrialDays: string;
```

- *Type:* string

[Read] guardduty:GetRemainingFreeTrialDays.

---

##### `actionGetThreatEntitySet`<sup>Required</sup> <a name="actionGetThreatEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetThreatEntitySet"></a>

```typescript
public readonly actionGetThreatEntitySet: string;
```

- *Type:* string

[Read] guardduty:GetThreatEntitySet.

---

##### `actionGetThreatIntelSet`<sup>Required</sup> <a name="actionGetThreatIntelSet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetThreatIntelSet"></a>

```typescript
public readonly actionGetThreatIntelSet: string;
```

- *Type:* string

[Read] guardduty:GetThreatIntelSet.

---

##### `actionGetTrustedEntitySet`<sup>Required</sup> <a name="actionGetTrustedEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetTrustedEntitySet"></a>

```typescript
public readonly actionGetTrustedEntitySet: string;
```

- *Type:* string

[Read] guardduty:GetTrustedEntitySet.

---

##### `actionGetUsageStatistics`<sup>Required</sup> <a name="actionGetUsageStatistics" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.actionGetUsageStatistics"></a>

```typescript
public readonly actionGetUsageStatistics: string;
```

- *Type:* string

[Read] guardduty:GetUsageStatistics.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ArchiveFindings`<sup>Required</sup> <a name="ArchiveFindings" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ArchiveFindings"></a>

```typescript
public readonly ArchiveFindings: string;
```

- *Type:* string

[Write] guardduty:ArchiveFindings.

---

##### `CreateCustomDetectionRuleAssociation`<sup>Required</sup> <a name="CreateCustomDetectionRuleAssociation" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateCustomDetectionRuleAssociation"></a>

```typescript
public readonly CreateCustomDetectionRuleAssociation: string;
```

- *Type:* string

[Write] guardduty:CreateCustomDetectionRuleAssociation.

---

##### `CreateCustomDetectionRuleOrgConfiguration`<sup>Required</sup> <a name="CreateCustomDetectionRuleOrgConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateCustomDetectionRuleOrgConfiguration"></a>

```typescript
public readonly CreateCustomDetectionRuleOrgConfiguration: string;
```

- *Type:* string

[Write] guardduty:CreateCustomDetectionRuleOrgConfiguration.

---

##### `CreateDetector`<sup>Required</sup> <a name="CreateDetector" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateDetector"></a>

```typescript
public readonly CreateDetector: string;
```

- *Type:* string

[Write] guardduty:CreateDetector.

---

##### `CreateFilter`<sup>Required</sup> <a name="CreateFilter" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateFilter"></a>

```typescript
public readonly CreateFilter: string;
```

- *Type:* string

[Write] guardduty:CreateFilter.

---

##### `CreateInvestigation`<sup>Required</sup> <a name="CreateInvestigation" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateInvestigation"></a>

```typescript
public readonly CreateInvestigation: string;
```

- *Type:* string

[Write] guardduty:CreateInvestigation.

---

##### `CreateIPSet`<sup>Required</sup> <a name="CreateIPSet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateIPSet"></a>

```typescript
public readonly CreateIPSet: string;
```

- *Type:* string

[Write] guardduty:CreateIPSet.

---

##### `CreateMalwareProtectionPlan`<sup>Required</sup> <a name="CreateMalwareProtectionPlan" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateMalwareProtectionPlan"></a>

```typescript
public readonly CreateMalwareProtectionPlan: string;
```

- *Type:* string

[Write] guardduty:CreateMalwareProtectionPlan.

---

##### `CreateMembers`<sup>Required</sup> <a name="CreateMembers" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateMembers"></a>

```typescript
public readonly CreateMembers: string;
```

- *Type:* string

[Write] guardduty:CreateMembers.

---

##### `CreatePublishingDestination`<sup>Required</sup> <a name="CreatePublishingDestination" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreatePublishingDestination"></a>

```typescript
public readonly CreatePublishingDestination: string;
```

- *Type:* string

[Write] guardduty:CreatePublishingDestination.

---

##### `CreateSampleFindings`<sup>Required</sup> <a name="CreateSampleFindings" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateSampleFindings"></a>

```typescript
public readonly CreateSampleFindings: string;
```

- *Type:* string

[Write] guardduty:CreateSampleFindings.

---

##### `CreateThreatEntitySet`<sup>Required</sup> <a name="CreateThreatEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateThreatEntitySet"></a>

```typescript
public readonly CreateThreatEntitySet: string;
```

- *Type:* string

[Write] guardduty:CreateThreatEntitySet.

---

##### `CreateThreatIntelSet`<sup>Required</sup> <a name="CreateThreatIntelSet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateThreatIntelSet"></a>

```typescript
public readonly CreateThreatIntelSet: string;
```

- *Type:* string

[Write] guardduty:CreateThreatIntelSet.

---

##### `CreateTrustedEntitySet`<sup>Required</sup> <a name="CreateTrustedEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.CreateTrustedEntitySet"></a>

```typescript
public readonly CreateTrustedEntitySet: string;
```

- *Type:* string

[Write] guardduty:CreateTrustedEntitySet.

---

##### `DeclineInvitations`<sup>Required</sup> <a name="DeclineInvitations" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeclineInvitations"></a>

```typescript
public readonly DeclineInvitations: string;
```

- *Type:* string

[Write] guardduty:DeclineInvitations.

---

##### `DeleteCustomDetectionRuleAssociation`<sup>Required</sup> <a name="DeleteCustomDetectionRuleAssociation" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteCustomDetectionRuleAssociation"></a>

```typescript
public readonly DeleteCustomDetectionRuleAssociation: string;
```

- *Type:* string

[Write] guardduty:DeleteCustomDetectionRuleAssociation.

---

##### `DeleteCustomDetectionRuleOrgConfiguration`<sup>Required</sup> <a name="DeleteCustomDetectionRuleOrgConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteCustomDetectionRuleOrgConfiguration"></a>

```typescript
public readonly DeleteCustomDetectionRuleOrgConfiguration: string;
```

- *Type:* string

[Write] guardduty:DeleteCustomDetectionRuleOrgConfiguration.

---

##### `DeleteDetector`<sup>Required</sup> <a name="DeleteDetector" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteDetector"></a>

```typescript
public readonly DeleteDetector: string;
```

- *Type:* string

[Write] guardduty:DeleteDetector.

---

##### `DeleteFilter`<sup>Required</sup> <a name="DeleteFilter" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteFilter"></a>

```typescript
public readonly DeleteFilter: string;
```

- *Type:* string

[Write] guardduty:DeleteFilter.

---

##### `DeleteInvitations`<sup>Required</sup> <a name="DeleteInvitations" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteInvitations"></a>

```typescript
public readonly DeleteInvitations: string;
```

- *Type:* string

[Write] guardduty:DeleteInvitations.

---

##### `DeleteIPSet`<sup>Required</sup> <a name="DeleteIPSet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteIPSet"></a>

```typescript
public readonly DeleteIPSet: string;
```

- *Type:* string

[Write] guardduty:DeleteIPSet.

---

##### `DeleteMalwareProtectionPlan`<sup>Required</sup> <a name="DeleteMalwareProtectionPlan" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteMalwareProtectionPlan"></a>

```typescript
public readonly DeleteMalwareProtectionPlan: string;
```

- *Type:* string

[Write] guardduty:DeleteMalwareProtectionPlan.

---

##### `DeleteMembers`<sup>Required</sup> <a name="DeleteMembers" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteMembers"></a>

```typescript
public readonly DeleteMembers: string;
```

- *Type:* string

[Write] guardduty:DeleteMembers.

---

##### `DeletePublishingDestination`<sup>Required</sup> <a name="DeletePublishingDestination" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeletePublishingDestination"></a>

```typescript
public readonly DeletePublishingDestination: string;
```

- *Type:* string

[Write] guardduty:DeletePublishingDestination.

---

##### `DeleteThreatEntitySet`<sup>Required</sup> <a name="DeleteThreatEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteThreatEntitySet"></a>

```typescript
public readonly DeleteThreatEntitySet: string;
```

- *Type:* string

[Write] guardduty:DeleteThreatEntitySet.

---

##### `DeleteThreatIntelSet`<sup>Required</sup> <a name="DeleteThreatIntelSet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteThreatIntelSet"></a>

```typescript
public readonly DeleteThreatIntelSet: string;
```

- *Type:* string

[Write] guardduty:DeleteThreatIntelSet.

---

##### `DeleteTrustedEntitySet`<sup>Required</sup> <a name="DeleteTrustedEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DeleteTrustedEntitySet"></a>

```typescript
public readonly DeleteTrustedEntitySet: string;
```

- *Type:* string

[Write] guardduty:DeleteTrustedEntitySet.

---

##### `DescribeMalwareScans`<sup>Required</sup> <a name="DescribeMalwareScans" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DescribeMalwareScans"></a>

```typescript
public readonly DescribeMalwareScans: string;
```

- *Type:* string

[Read] guardduty:DescribeMalwareScans.

---

##### `DescribeOrganizationConfiguration`<sup>Required</sup> <a name="DescribeOrganizationConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DescribeOrganizationConfiguration"></a>

```typescript
public readonly DescribeOrganizationConfiguration: string;
```

- *Type:* string

[Read] guardduty:DescribeOrganizationConfiguration.

---

##### `DescribePublishingDestination`<sup>Required</sup> <a name="DescribePublishingDestination" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DescribePublishingDestination"></a>

```typescript
public readonly DescribePublishingDestination: string;
```

- *Type:* string

[Read] guardduty:DescribePublishingDestination.

---

##### `DisableOrganizationAdminAccount`<sup>Required</sup> <a name="DisableOrganizationAdminAccount" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DisableOrganizationAdminAccount"></a>

```typescript
public readonly DisableOrganizationAdminAccount: string;
```

- *Type:* string

[Write] guardduty:DisableOrganizationAdminAccount.

---

##### `DisassociateFromAdministratorAccount`<sup>Required</sup> <a name="DisassociateFromAdministratorAccount" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DisassociateFromAdministratorAccount"></a>

```typescript
public readonly DisassociateFromAdministratorAccount: string;
```

- *Type:* string

[Write] guardduty:DisassociateFromAdministratorAccount.

---

##### `DisassociateFromMasterAccount`<sup>Required</sup> <a name="DisassociateFromMasterAccount" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DisassociateFromMasterAccount"></a>

```typescript
public readonly DisassociateFromMasterAccount: string;
```

- *Type:* string

[Write] guardduty:DisassociateFromMasterAccount.

---

##### `DisassociateMembers`<sup>Required</sup> <a name="DisassociateMembers" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.DisassociateMembers"></a>

```typescript
public readonly DisassociateMembers: string;
```

- *Type:* string

[Write] guardduty:DisassociateMembers.

---

##### `EnableOrganizationAdminAccount`<sup>Required</sup> <a name="EnableOrganizationAdminAccount" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.EnableOrganizationAdminAccount"></a>

```typescript
public readonly EnableOrganizationAdminAccount: string;
```

- *Type:* string

[Write] guardduty:EnableOrganizationAdminAccount.

---

##### `InviteMembers`<sup>Required</sup> <a name="InviteMembers" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.InviteMembers"></a>

```typescript
public readonly InviteMembers: string;
```

- *Type:* string

[Write] guardduty:InviteMembers.

---

##### `ListCoverage`<sup>Required</sup> <a name="ListCoverage" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListCoverage"></a>

```typescript
public readonly ListCoverage: string;
```

- *Type:* string

[List] guardduty:ListCoverage.

---

##### `ListCustomDetectionRuleAssociations`<sup>Required</sup> <a name="ListCustomDetectionRuleAssociations" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListCustomDetectionRuleAssociations"></a>

```typescript
public readonly ListCustomDetectionRuleAssociations: string;
```

- *Type:* string

[List] guardduty:ListCustomDetectionRuleAssociations.

---

##### `ListCustomDetectionRuleOrgConfigurations`<sup>Required</sup> <a name="ListCustomDetectionRuleOrgConfigurations" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListCustomDetectionRuleOrgConfigurations"></a>

```typescript
public readonly ListCustomDetectionRuleOrgConfigurations: string;
```

- *Type:* string

[List] guardduty:ListCustomDetectionRuleOrgConfigurations.

---

##### `ListCustomDetectionRules`<sup>Required</sup> <a name="ListCustomDetectionRules" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListCustomDetectionRules"></a>

```typescript
public readonly ListCustomDetectionRules: string;
```

- *Type:* string

[List] guardduty:ListCustomDetectionRules.

---

##### `ListDetectors`<sup>Required</sup> <a name="ListDetectors" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListDetectors"></a>

```typescript
public readonly ListDetectors: string;
```

- *Type:* string

[List] guardduty:ListDetectors.

---

##### `ListFilters`<sup>Required</sup> <a name="ListFilters" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListFilters"></a>

```typescript
public readonly ListFilters: string;
```

- *Type:* string

[List] guardduty:ListFilters.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListFindings"></a>

```typescript
public readonly ListFindings: string;
```

- *Type:* string

[List] guardduty:ListFindings.

---

##### `ListInvestigations`<sup>Required</sup> <a name="ListInvestigations" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListInvestigations"></a>

```typescript
public readonly ListInvestigations: string;
```

- *Type:* string

[List] guardduty:ListInvestigations.

---

##### `ListInvitations`<sup>Required</sup> <a name="ListInvitations" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListInvitations"></a>

```typescript
public readonly ListInvitations: string;
```

- *Type:* string

[List] guardduty:ListInvitations.

---

##### `ListIPSets`<sup>Required</sup> <a name="ListIPSets" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListIPSets"></a>

```typescript
public readonly ListIPSets: string;
```

- *Type:* string

[List] guardduty:ListIPSets.

---

##### `ListMalwareProtectionPlans`<sup>Required</sup> <a name="ListMalwareProtectionPlans" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListMalwareProtectionPlans"></a>

```typescript
public readonly ListMalwareProtectionPlans: string;
```

- *Type:* string

[List] guardduty:ListMalwareProtectionPlans.

---

##### `ListMalwareScans`<sup>Required</sup> <a name="ListMalwareScans" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListMalwareScans"></a>

```typescript
public readonly ListMalwareScans: string;
```

- *Type:* string

[List] guardduty:ListMalwareScans.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListMembers"></a>

```typescript
public readonly ListMembers: string;
```

- *Type:* string

[List] guardduty:ListMembers.

---

##### `ListOrganizationAdminAccounts`<sup>Required</sup> <a name="ListOrganizationAdminAccounts" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListOrganizationAdminAccounts"></a>

```typescript
public readonly ListOrganizationAdminAccounts: string;
```

- *Type:* string

[List] guardduty:ListOrganizationAdminAccounts.

---

##### `ListPublishingDestinations`<sup>Required</sup> <a name="ListPublishingDestinations" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListPublishingDestinations"></a>

```typescript
public readonly ListPublishingDestinations: string;
```

- *Type:* string

[List] guardduty:ListPublishingDestinations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] guardduty:ListTagsForResource.

---

##### `ListThreatEntitySets`<sup>Required</sup> <a name="ListThreatEntitySets" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListThreatEntitySets"></a>

```typescript
public readonly ListThreatEntitySets: string;
```

- *Type:* string

[List] guardduty:ListThreatEntitySets.

---

##### `ListThreatIntelSets`<sup>Required</sup> <a name="ListThreatIntelSets" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListThreatIntelSets"></a>

```typescript
public readonly ListThreatIntelSets: string;
```

- *Type:* string

[List] guardduty:ListThreatIntelSets.

---

##### `ListTrustedEntitySets`<sup>Required</sup> <a name="ListTrustedEntitySets" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.ListTrustedEntitySets"></a>

```typescript
public readonly ListTrustedEntitySets: string;
```

- *Type:* string

[List] guardduty:ListTrustedEntitySets.

---

##### `SendObjectMalwareScan`<sup>Required</sup> <a name="SendObjectMalwareScan" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.SendObjectMalwareScan"></a>

```typescript
public readonly SendObjectMalwareScan: string;
```

- *Type:* string

[Write] guardduty:SendObjectMalwareScan.

---

##### `SendSecurityTelemetry`<sup>Required</sup> <a name="SendSecurityTelemetry" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.SendSecurityTelemetry"></a>

```typescript
public readonly SendSecurityTelemetry: string;
```

- *Type:* string

[Write] guardduty:SendSecurityTelemetry.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartMalwareScan`<sup>Required</sup> <a name="StartMalwareScan" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.StartMalwareScan"></a>

```typescript
public readonly StartMalwareScan: string;
```

- *Type:* string

[Write] guardduty:StartMalwareScan.

---

##### `StartMonitoringMembers`<sup>Required</sup> <a name="StartMonitoringMembers" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.StartMonitoringMembers"></a>

```typescript
public readonly StartMonitoringMembers: string;
```

- *Type:* string

[Write] guardduty:StartMonitoringMembers.

---

##### `StopMonitoringMembers`<sup>Required</sup> <a name="StopMonitoringMembers" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.StopMonitoringMembers"></a>

```typescript
public readonly StopMonitoringMembers: string;
```

- *Type:* string

[Write] guardduty:StopMonitoringMembers.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] guardduty:TagResource.

---

##### `UnarchiveFindings`<sup>Required</sup> <a name="UnarchiveFindings" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UnarchiveFindings"></a>

```typescript
public readonly UnarchiveFindings: string;
```

- *Type:* string

[Write] guardduty:UnarchiveFindings.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] guardduty:UntagResource.

---

##### `UpdateCustomDetectionRuleAssociation`<sup>Required</sup> <a name="UpdateCustomDetectionRuleAssociation" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateCustomDetectionRuleAssociation"></a>

```typescript
public readonly UpdateCustomDetectionRuleAssociation: string;
```

- *Type:* string

[Write] guardduty:UpdateCustomDetectionRuleAssociation.

---

##### `UpdateCustomDetectionRuleOrgConfiguration`<sup>Required</sup> <a name="UpdateCustomDetectionRuleOrgConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateCustomDetectionRuleOrgConfiguration"></a>

```typescript
public readonly UpdateCustomDetectionRuleOrgConfiguration: string;
```

- *Type:* string

[Write] guardduty:UpdateCustomDetectionRuleOrgConfiguration.

---

##### `UpdateDetector`<sup>Required</sup> <a name="UpdateDetector" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateDetector"></a>

```typescript
public readonly UpdateDetector: string;
```

- *Type:* string

[Write] guardduty:UpdateDetector.

---

##### `UpdateFilter`<sup>Required</sup> <a name="UpdateFilter" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateFilter"></a>

```typescript
public readonly UpdateFilter: string;
```

- *Type:* string

[Write] guardduty:UpdateFilter.

---

##### `UpdateFindingsFeedback`<sup>Required</sup> <a name="UpdateFindingsFeedback" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateFindingsFeedback"></a>

```typescript
public readonly UpdateFindingsFeedback: string;
```

- *Type:* string

[Write] guardduty:UpdateFindingsFeedback.

---

##### `UpdateIPSet`<sup>Required</sup> <a name="UpdateIPSet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateIPSet"></a>

```typescript
public readonly UpdateIPSet: string;
```

- *Type:* string

[Write] guardduty:UpdateIPSet.

---

##### `UpdateMalwareProtectionPlan`<sup>Required</sup> <a name="UpdateMalwareProtectionPlan" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateMalwareProtectionPlan"></a>

```typescript
public readonly UpdateMalwareProtectionPlan: string;
```

- *Type:* string

[Write] guardduty:UpdateMalwareProtectionPlan.

---

##### `UpdateMalwareScanSettings`<sup>Required</sup> <a name="UpdateMalwareScanSettings" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateMalwareScanSettings"></a>

```typescript
public readonly UpdateMalwareScanSettings: string;
```

- *Type:* string

[Write] guardduty:UpdateMalwareScanSettings.

---

##### `UpdateMemberDetectors`<sup>Required</sup> <a name="UpdateMemberDetectors" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateMemberDetectors"></a>

```typescript
public readonly UpdateMemberDetectors: string;
```

- *Type:* string

[Write] guardduty:UpdateMemberDetectors.

---

##### `UpdateOrganizationConfiguration`<sup>Required</sup> <a name="UpdateOrganizationConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateOrganizationConfiguration"></a>

```typescript
public readonly UpdateOrganizationConfiguration: string;
```

- *Type:* string

[Write] guardduty:UpdateOrganizationConfiguration.

---

##### `UpdatePublishingDestination`<sup>Required</sup> <a name="UpdatePublishingDestination" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdatePublishingDestination"></a>

```typescript
public readonly UpdatePublishingDestination: string;
```

- *Type:* string

[Write] guardduty:UpdatePublishingDestination.

---

##### `UpdateThreatEntitySet`<sup>Required</sup> <a name="UpdateThreatEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateThreatEntitySet"></a>

```typescript
public readonly UpdateThreatEntitySet: string;
```

- *Type:* string

[Write] guardduty:UpdateThreatEntitySet.

---

##### `UpdateThreatIntelSet`<sup>Required</sup> <a name="UpdateThreatIntelSet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateThreatIntelSet"></a>

```typescript
public readonly UpdateThreatIntelSet: string;
```

- *Type:* string

[Write] guardduty:UpdateThreatIntelSet.

---

##### `UpdateTrustedEntitySet`<sup>Required</sup> <a name="UpdateTrustedEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyActions.property.UpdateTrustedEntitySet"></a>

```typescript
public readonly UpdateTrustedEntitySet: string;
```

- *Type:* string

[Write] guardduty:UpdateTrustedEntitySet.

---

### GuardDutyConditions <a name="GuardDutyConditions" id="@cdk_utils/iam.guardduty.GuardDutyConditions"></a>

Condition key constants and builders for guardduty.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.guardduty.GuardDutyConditions.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

new guardduty.GuardDutyConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.guardduty.GuardDutyConditions.requestTag"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.guardduty.GuardDutyConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.guardduty.GuardDutyConditions.resourceTag"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.guardduty.GuardDutyConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.tagKeys"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.guardduty.GuardDutyConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateCustomDetectionRuleAssociationConditionKeys">CreateCustomDetectionRuleAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomDetectionRuleAssociation action. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateDetectorConditionKeys">CreateDetectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDetector action. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateFilterConditionKeys">CreateFilterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFilter action. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateIPSetConditionKeys">CreateIPSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIPSet action. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateMalwareProtectionPlanConditionKeys">CreateMalwareProtectionPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMalwareProtectionPlan action. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreatePublishingDestinationConditionKeys">CreatePublishingDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePublishingDestination action. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateThreatEntitySetConditionKeys">CreateThreatEntitySetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateThreatEntitySet action. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateThreatIntelSetConditionKeys">CreateThreatIntelSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateThreatIntelSet action. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateTrustedEntitySetConditionKeys">CreateTrustedEntitySetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTrustedEntitySet action. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCustomDetectionRuleAssociationConditionKeys`<sup>Required</sup> <a name="CreateCustomDetectionRuleAssociationConditionKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateCustomDetectionRuleAssociationConditionKeys"></a>

```typescript
public readonly CreateCustomDetectionRuleAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomDetectionRuleAssociation action.

---

##### `CreateDetectorConditionKeys`<sup>Required</sup> <a name="CreateDetectorConditionKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateDetectorConditionKeys"></a>

```typescript
public readonly CreateDetectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDetector action.

---

##### `CreateFilterConditionKeys`<sup>Required</sup> <a name="CreateFilterConditionKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateFilterConditionKeys"></a>

```typescript
public readonly CreateFilterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFilter action.

---

##### `CreateIPSetConditionKeys`<sup>Required</sup> <a name="CreateIPSetConditionKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateIPSetConditionKeys"></a>

```typescript
public readonly CreateIPSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIPSet action.

---

##### `CreateMalwareProtectionPlanConditionKeys`<sup>Required</sup> <a name="CreateMalwareProtectionPlanConditionKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateMalwareProtectionPlanConditionKeys"></a>

```typescript
public readonly CreateMalwareProtectionPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMalwareProtectionPlan action.

---

##### `CreatePublishingDestinationConditionKeys`<sup>Required</sup> <a name="CreatePublishingDestinationConditionKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreatePublishingDestinationConditionKeys"></a>

```typescript
public readonly CreatePublishingDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePublishingDestination action.

---

##### `CreateThreatEntitySetConditionKeys`<sup>Required</sup> <a name="CreateThreatEntitySetConditionKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateThreatEntitySetConditionKeys"></a>

```typescript
public readonly CreateThreatEntitySetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateThreatEntitySet action.

---

##### `CreateThreatIntelSetConditionKeys`<sup>Required</sup> <a name="CreateThreatIntelSetConditionKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateThreatIntelSetConditionKeys"></a>

```typescript
public readonly CreateThreatIntelSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateThreatIntelSet action.

---

##### `CreateTrustedEntitySetConditionKeys`<sup>Required</sup> <a name="CreateTrustedEntitySetConditionKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.CreateTrustedEntitySetConditionKeys"></a>

```typescript
public readonly CreateTrustedEntitySetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTrustedEntitySet action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.guardduty.GuardDutyConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### GuardDutyOperations <a name="GuardDutyOperations" id="@cdk_utils/iam.guardduty.GuardDutyOperations"></a>

API operation to required IAM actions mapping for guardduty.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.guardduty.GuardDutyOperations.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

new guardduty.GuardDutyOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.AcceptAdministratorInvitation">AcceptAdministratorInvitation</a></code> | <code>string[]</code> | IAM actions required for the AcceptAdministratorInvitation API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.AcceptInvitation">AcceptInvitation</a></code> | <code>string[]</code> | IAM actions required for the AcceptInvitation API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ArchiveFindings">ArchiveFindings</a></code> | <code>string[]</code> | IAM actions required for the ArchiveFindings API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateCustomDetectionRuleAssociation">CreateCustomDetectionRuleAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomDetectionRuleAssociation API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateCustomDetectionRuleOrgConfiguration">CreateCustomDetectionRuleOrgConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomDetectionRuleOrgConfiguration API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateDetector">CreateDetector</a></code> | <code>string[]</code> | IAM actions required for the CreateDetector API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateFilter">CreateFilter</a></code> | <code>string[]</code> | IAM actions required for the CreateFilter API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateInvestigation">CreateInvestigation</a></code> | <code>string[]</code> | IAM actions required for the CreateInvestigation API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateIPSet">CreateIPSet</a></code> | <code>string[]</code> | IAM actions required for the CreateIPSet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateMalwareProtectionPlan">CreateMalwareProtectionPlan</a></code> | <code>string[]</code> | IAM actions required for the CreateMalwareProtectionPlan API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateMembers">CreateMembers</a></code> | <code>string[]</code> | IAM actions required for the CreateMembers API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreatePublishingDestination">CreatePublishingDestination</a></code> | <code>string[]</code> | IAM actions required for the CreatePublishingDestination API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateSampleFindings">CreateSampleFindings</a></code> | <code>string[]</code> | IAM actions required for the CreateSampleFindings API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateThreatEntitySet">CreateThreatEntitySet</a></code> | <code>string[]</code> | IAM actions required for the CreateThreatEntitySet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateThreatIntelSet">CreateThreatIntelSet</a></code> | <code>string[]</code> | IAM actions required for the CreateThreatIntelSet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateTrustedEntitySet">CreateTrustedEntitySet</a></code> | <code>string[]</code> | IAM actions required for the CreateTrustedEntitySet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeclineInvitations">DeclineInvitations</a></code> | <code>string[]</code> | IAM actions required for the DeclineInvitations API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteCustomDetectionRuleAssociation">DeleteCustomDetectionRuleAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomDetectionRuleAssociation API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteCustomDetectionRuleOrgConfiguration">DeleteCustomDetectionRuleOrgConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomDetectionRuleOrgConfiguration API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteDetector">DeleteDetector</a></code> | <code>string[]</code> | IAM actions required for the DeleteDetector API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteFilter">DeleteFilter</a></code> | <code>string[]</code> | IAM actions required for the DeleteFilter API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteInvitations">DeleteInvitations</a></code> | <code>string[]</code> | IAM actions required for the DeleteInvitations API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteIPSet">DeleteIPSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteIPSet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteMalwareProtectionPlan">DeleteMalwareProtectionPlan</a></code> | <code>string[]</code> | IAM actions required for the DeleteMalwareProtectionPlan API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteMembers">DeleteMembers</a></code> | <code>string[]</code> | IAM actions required for the DeleteMembers API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeletePublishingDestination">DeletePublishingDestination</a></code> | <code>string[]</code> | IAM actions required for the DeletePublishingDestination API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteThreatEntitySet">DeleteThreatEntitySet</a></code> | <code>string[]</code> | IAM actions required for the DeleteThreatEntitySet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteThreatIntelSet">DeleteThreatIntelSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteThreatIntelSet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteTrustedEntitySet">DeleteTrustedEntitySet</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrustedEntitySet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DescribeMalwareScans">DescribeMalwareScans</a></code> | <code>string[]</code> | IAM actions required for the DescribeMalwareScans API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DescribeOrganizationConfiguration">DescribeOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DescribePublishingDestination">DescribePublishingDestination</a></code> | <code>string[]</code> | IAM actions required for the DescribePublishingDestination API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DisableOrganizationAdminAccount">DisableOrganizationAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the DisableOrganizationAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFromAdministratorAccount API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DisassociateFromMasterAccount">DisassociateFromMasterAccount</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFromMasterAccount API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.DisassociateMembers">DisassociateMembers</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMembers API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.EnableOrganizationAdminAccount">EnableOrganizationAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the EnableOrganizationAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.InviteMembers">InviteMembers</a></code> | <code>string[]</code> | IAM actions required for the InviteMembers API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListCoverage">ListCoverage</a></code> | <code>string[]</code> | IAM actions required for the ListCoverage API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListCustomDetectionRuleAssociations">ListCustomDetectionRuleAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListCustomDetectionRuleAssociations API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListCustomDetectionRuleOrgConfigurations">ListCustomDetectionRuleOrgConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListCustomDetectionRuleOrgConfigurations API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListCustomDetectionRules">ListCustomDetectionRules</a></code> | <code>string[]</code> | IAM actions required for the ListCustomDetectionRules API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListDetectors">ListDetectors</a></code> | <code>string[]</code> | IAM actions required for the ListDetectors API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListFilters">ListFilters</a></code> | <code>string[]</code> | IAM actions required for the ListFilters API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListFindings">ListFindings</a></code> | <code>string[]</code> | IAM actions required for the ListFindings API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListInvestigations">ListInvestigations</a></code> | <code>string[]</code> | IAM actions required for the ListInvestigations API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListInvitations">ListInvitations</a></code> | <code>string[]</code> | IAM actions required for the ListInvitations API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListIPSets">ListIPSets</a></code> | <code>string[]</code> | IAM actions required for the ListIPSets API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListMalwareProtectionPlans">ListMalwareProtectionPlans</a></code> | <code>string[]</code> | IAM actions required for the ListMalwareProtectionPlans API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListMalwareScans">ListMalwareScans</a></code> | <code>string[]</code> | IAM actions required for the ListMalwareScans API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListMembers">ListMembers</a></code> | <code>string[]</code> | IAM actions required for the ListMembers API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListOrganizationAdminAccounts">ListOrganizationAdminAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationAdminAccounts API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListPublishingDestinations">ListPublishingDestinations</a></code> | <code>string[]</code> | IAM actions required for the ListPublishingDestinations API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListThreatEntitySets">ListThreatEntitySets</a></code> | <code>string[]</code> | IAM actions required for the ListThreatEntitySets API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListThreatIntelSets">ListThreatIntelSets</a></code> | <code>string[]</code> | IAM actions required for the ListThreatIntelSets API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListTrustedEntitySets">ListTrustedEntitySets</a></code> | <code>string[]</code> | IAM actions required for the ListTrustedEntitySets API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetAdministratorAccount">opGetAdministratorAccount</a></code> | <code>string[]</code> | IAM actions required for the GetAdministratorAccount API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetCoverageStatistics">opGetCoverageStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetCoverageStatistics API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetCustomDetectionRule">opGetCustomDetectionRule</a></code> | <code>string[]</code> | IAM actions required for the GetCustomDetectionRule API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetCustomDetectionRuleAssociation">opGetCustomDetectionRuleAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetCustomDetectionRuleAssociation API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetCustomDetectionRuleOrgConfiguration">opGetCustomDetectionRuleOrgConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetCustomDetectionRuleOrgConfiguration API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetDetector">opGetDetector</a></code> | <code>string[]</code> | IAM actions required for the GetDetector API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetFilter">opGetFilter</a></code> | <code>string[]</code> | IAM actions required for the GetFilter API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetFindings">opGetFindings</a></code> | <code>string[]</code> | IAM actions required for the GetFindings API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetFindingsStatistics">opGetFindingsStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetFindingsStatistics API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetInvestigation">opGetInvestigation</a></code> | <code>string[]</code> | IAM actions required for the GetInvestigation API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetInvitationsCount">opGetInvitationsCount</a></code> | <code>string[]</code> | IAM actions required for the GetInvitationsCount API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetIPSet">opGetIPSet</a></code> | <code>string[]</code> | IAM actions required for the GetIPSet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMalwareProtectionPlan">opGetMalwareProtectionPlan</a></code> | <code>string[]</code> | IAM actions required for the GetMalwareProtectionPlan API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMalwareScan">opGetMalwareScan</a></code> | <code>string[]</code> | IAM actions required for the GetMalwareScan API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMalwareScanSettings">opGetMalwareScanSettings</a></code> | <code>string[]</code> | IAM actions required for the GetMalwareScanSettings API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMasterAccount">opGetMasterAccount</a></code> | <code>string[]</code> | IAM actions required for the GetMasterAccount API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMemberDetectors">opGetMemberDetectors</a></code> | <code>string[]</code> | IAM actions required for the GetMemberDetectors API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMembers">opGetMembers</a></code> | <code>string[]</code> | IAM actions required for the GetMembers API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetOrganizationStatistics">opGetOrganizationStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetOrganizationStatistics API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetRemainingFreeTrialDays">opGetRemainingFreeTrialDays</a></code> | <code>string[]</code> | IAM actions required for the GetRemainingFreeTrialDays API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetThreatEntitySet">opGetThreatEntitySet</a></code> | <code>string[]</code> | IAM actions required for the GetThreatEntitySet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetThreatIntelSet">opGetThreatIntelSet</a></code> | <code>string[]</code> | IAM actions required for the GetThreatIntelSet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetTrustedEntitySet">opGetTrustedEntitySet</a></code> | <code>string[]</code> | IAM actions required for the GetTrustedEntitySet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetUsageStatistics">opGetUsageStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetUsageStatistics API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.SendObjectMalwareScan">SendObjectMalwareScan</a></code> | <code>string[]</code> | IAM actions required for the SendObjectMalwareScan API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.StartMalwareScan">StartMalwareScan</a></code> | <code>string[]</code> | IAM actions required for the StartMalwareScan API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.StartMonitoringMembers">StartMonitoringMembers</a></code> | <code>string[]</code> | IAM actions required for the StartMonitoringMembers API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.StopMonitoringMembers">StopMonitoringMembers</a></code> | <code>string[]</code> | IAM actions required for the StopMonitoringMembers API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UnarchiveFindings">UnarchiveFindings</a></code> | <code>string[]</code> | IAM actions required for the UnarchiveFindings API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateCustomDetectionRuleAssociation">UpdateCustomDetectionRuleAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomDetectionRuleAssociation API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateCustomDetectionRuleOrgConfiguration">UpdateCustomDetectionRuleOrgConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomDetectionRuleOrgConfiguration API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateDetector">UpdateDetector</a></code> | <code>string[]</code> | IAM actions required for the UpdateDetector API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateFilter">UpdateFilter</a></code> | <code>string[]</code> | IAM actions required for the UpdateFilter API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateFindingsFeedback">UpdateFindingsFeedback</a></code> | <code>string[]</code> | IAM actions required for the UpdateFindingsFeedback API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateIPSet">UpdateIPSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateIPSet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateMalwareProtectionPlan">UpdateMalwareProtectionPlan</a></code> | <code>string[]</code> | IAM actions required for the UpdateMalwareProtectionPlan API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateMalwareScanSettings">UpdateMalwareScanSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateMalwareScanSettings API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateMemberDetectors">UpdateMemberDetectors</a></code> | <code>string[]</code> | IAM actions required for the UpdateMemberDetectors API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateOrganizationConfiguration">UpdateOrganizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateOrganizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdatePublishingDestination">UpdatePublishingDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdatePublishingDestination API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateThreatEntitySet">UpdateThreatEntitySet</a></code> | <code>string[]</code> | IAM actions required for the UpdateThreatEntitySet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateThreatIntelSet">UpdateThreatIntelSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateThreatIntelSet API call. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateTrustedEntitySet">UpdateTrustedEntitySet</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrustedEntitySet API call. |

---

##### `AcceptAdministratorInvitation`<sup>Required</sup> <a name="AcceptAdministratorInvitation" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.AcceptAdministratorInvitation"></a>

```typescript
public readonly AcceptAdministratorInvitation: string[];
```

- *Type:* string[]

IAM actions required for the AcceptAdministratorInvitation API call.

---

##### `AcceptInvitation`<sup>Required</sup> <a name="AcceptInvitation" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.AcceptInvitation"></a>

```typescript
public readonly AcceptInvitation: string[];
```

- *Type:* string[]

IAM actions required for the AcceptInvitation API call.

---

##### `ArchiveFindings`<sup>Required</sup> <a name="ArchiveFindings" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ArchiveFindings"></a>

```typescript
public readonly ArchiveFindings: string[];
```

- *Type:* string[]

IAM actions required for the ArchiveFindings API call.

---

##### `CreateCustomDetectionRuleAssociation`<sup>Required</sup> <a name="CreateCustomDetectionRuleAssociation" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateCustomDetectionRuleAssociation"></a>

```typescript
public readonly CreateCustomDetectionRuleAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomDetectionRuleAssociation API call.

---

##### `CreateCustomDetectionRuleOrgConfiguration`<sup>Required</sup> <a name="CreateCustomDetectionRuleOrgConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateCustomDetectionRuleOrgConfiguration"></a>

```typescript
public readonly CreateCustomDetectionRuleOrgConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomDetectionRuleOrgConfiguration API call.

---

##### `CreateDetector`<sup>Required</sup> <a name="CreateDetector" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateDetector"></a>

```typescript
public readonly CreateDetector: string[];
```

- *Type:* string[]

IAM actions required for the CreateDetector API call.

---

##### `CreateFilter`<sup>Required</sup> <a name="CreateFilter" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateFilter"></a>

```typescript
public readonly CreateFilter: string[];
```

- *Type:* string[]

IAM actions required for the CreateFilter API call.

---

##### `CreateInvestigation`<sup>Required</sup> <a name="CreateInvestigation" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateInvestigation"></a>

```typescript
public readonly CreateInvestigation: string[];
```

- *Type:* string[]

IAM actions required for the CreateInvestigation API call.

---

##### `CreateIPSet`<sup>Required</sup> <a name="CreateIPSet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateIPSet"></a>

```typescript
public readonly CreateIPSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateIPSet API call.

---

##### `CreateMalwareProtectionPlan`<sup>Required</sup> <a name="CreateMalwareProtectionPlan" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateMalwareProtectionPlan"></a>

```typescript
public readonly CreateMalwareProtectionPlan: string[];
```

- *Type:* string[]

IAM actions required for the CreateMalwareProtectionPlan API call.

---

##### `CreateMembers`<sup>Required</sup> <a name="CreateMembers" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateMembers"></a>

```typescript
public readonly CreateMembers: string[];
```

- *Type:* string[]

IAM actions required for the CreateMembers API call.

---

##### `CreatePublishingDestination`<sup>Required</sup> <a name="CreatePublishingDestination" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreatePublishingDestination"></a>

```typescript
public readonly CreatePublishingDestination: string[];
```

- *Type:* string[]

IAM actions required for the CreatePublishingDestination API call.

---

##### `CreateSampleFindings`<sup>Required</sup> <a name="CreateSampleFindings" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateSampleFindings"></a>

```typescript
public readonly CreateSampleFindings: string[];
```

- *Type:* string[]

IAM actions required for the CreateSampleFindings API call.

---

##### `CreateThreatEntitySet`<sup>Required</sup> <a name="CreateThreatEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateThreatEntitySet"></a>

```typescript
public readonly CreateThreatEntitySet: string[];
```

- *Type:* string[]

IAM actions required for the CreateThreatEntitySet API call.

---

##### `CreateThreatIntelSet`<sup>Required</sup> <a name="CreateThreatIntelSet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateThreatIntelSet"></a>

```typescript
public readonly CreateThreatIntelSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateThreatIntelSet API call.

---

##### `CreateTrustedEntitySet`<sup>Required</sup> <a name="CreateTrustedEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.CreateTrustedEntitySet"></a>

```typescript
public readonly CreateTrustedEntitySet: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrustedEntitySet API call.

---

##### `DeclineInvitations`<sup>Required</sup> <a name="DeclineInvitations" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeclineInvitations"></a>

```typescript
public readonly DeclineInvitations: string[];
```

- *Type:* string[]

IAM actions required for the DeclineInvitations API call.

---

##### `DeleteCustomDetectionRuleAssociation`<sup>Required</sup> <a name="DeleteCustomDetectionRuleAssociation" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteCustomDetectionRuleAssociation"></a>

```typescript
public readonly DeleteCustomDetectionRuleAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomDetectionRuleAssociation API call.

---

##### `DeleteCustomDetectionRuleOrgConfiguration`<sup>Required</sup> <a name="DeleteCustomDetectionRuleOrgConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteCustomDetectionRuleOrgConfiguration"></a>

```typescript
public readonly DeleteCustomDetectionRuleOrgConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomDetectionRuleOrgConfiguration API call.

---

##### `DeleteDetector`<sup>Required</sup> <a name="DeleteDetector" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteDetector"></a>

```typescript
public readonly DeleteDetector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDetector API call.

---

##### `DeleteFilter`<sup>Required</sup> <a name="DeleteFilter" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteFilter"></a>

```typescript
public readonly DeleteFilter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFilter API call.

---

##### `DeleteInvitations`<sup>Required</sup> <a name="DeleteInvitations" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteInvitations"></a>

```typescript
public readonly DeleteInvitations: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInvitations API call.

---

##### `DeleteIPSet`<sup>Required</sup> <a name="DeleteIPSet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteIPSet"></a>

```typescript
public readonly DeleteIPSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIPSet API call.

---

##### `DeleteMalwareProtectionPlan`<sup>Required</sup> <a name="DeleteMalwareProtectionPlan" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteMalwareProtectionPlan"></a>

```typescript
public readonly DeleteMalwareProtectionPlan: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMalwareProtectionPlan API call.

---

##### `DeleteMembers`<sup>Required</sup> <a name="DeleteMembers" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteMembers"></a>

```typescript
public readonly DeleteMembers: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMembers API call.

---

##### `DeletePublishingDestination`<sup>Required</sup> <a name="DeletePublishingDestination" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeletePublishingDestination"></a>

```typescript
public readonly DeletePublishingDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeletePublishingDestination API call.

---

##### `DeleteThreatEntitySet`<sup>Required</sup> <a name="DeleteThreatEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteThreatEntitySet"></a>

```typescript
public readonly DeleteThreatEntitySet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteThreatEntitySet API call.

---

##### `DeleteThreatIntelSet`<sup>Required</sup> <a name="DeleteThreatIntelSet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteThreatIntelSet"></a>

```typescript
public readonly DeleteThreatIntelSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteThreatIntelSet API call.

---

##### `DeleteTrustedEntitySet`<sup>Required</sup> <a name="DeleteTrustedEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DeleteTrustedEntitySet"></a>

```typescript
public readonly DeleteTrustedEntitySet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrustedEntitySet API call.

---

##### `DescribeMalwareScans`<sup>Required</sup> <a name="DescribeMalwareScans" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DescribeMalwareScans"></a>

```typescript
public readonly DescribeMalwareScans: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMalwareScans API call.

---

##### `DescribeOrganizationConfiguration`<sup>Required</sup> <a name="DescribeOrganizationConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DescribeOrganizationConfiguration"></a>

```typescript
public readonly DescribeOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationConfiguration API call.

---

##### `DescribePublishingDestination`<sup>Required</sup> <a name="DescribePublishingDestination" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DescribePublishingDestination"></a>

```typescript
public readonly DescribePublishingDestination: string[];
```

- *Type:* string[]

IAM actions required for the DescribePublishingDestination API call.

---

##### `DisableOrganizationAdminAccount`<sup>Required</sup> <a name="DisableOrganizationAdminAccount" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DisableOrganizationAdminAccount"></a>

```typescript
public readonly DisableOrganizationAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisableOrganizationAdminAccount API call.

---

##### `DisassociateFromAdministratorAccount`<sup>Required</sup> <a name="DisassociateFromAdministratorAccount" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DisassociateFromAdministratorAccount"></a>

```typescript
public readonly DisassociateFromAdministratorAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFromAdministratorAccount API call.

---

##### `DisassociateFromMasterAccount`<sup>Required</sup> <a name="DisassociateFromMasterAccount" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DisassociateFromMasterAccount"></a>

```typescript
public readonly DisassociateFromMasterAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFromMasterAccount API call.

---

##### `DisassociateMembers`<sup>Required</sup> <a name="DisassociateMembers" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.DisassociateMembers"></a>

```typescript
public readonly DisassociateMembers: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMembers API call.

---

##### `EnableOrganizationAdminAccount`<sup>Required</sup> <a name="EnableOrganizationAdminAccount" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.EnableOrganizationAdminAccount"></a>

```typescript
public readonly EnableOrganizationAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the EnableOrganizationAdminAccount API call.

---

##### `InviteMembers`<sup>Required</sup> <a name="InviteMembers" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.InviteMembers"></a>

```typescript
public readonly InviteMembers: string[];
```

- *Type:* string[]

IAM actions required for the InviteMembers API call.

---

##### `ListCoverage`<sup>Required</sup> <a name="ListCoverage" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListCoverage"></a>

```typescript
public readonly ListCoverage: string[];
```

- *Type:* string[]

IAM actions required for the ListCoverage API call.

---

##### `ListCustomDetectionRuleAssociations`<sup>Required</sup> <a name="ListCustomDetectionRuleAssociations" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListCustomDetectionRuleAssociations"></a>

```typescript
public readonly ListCustomDetectionRuleAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomDetectionRuleAssociations API call.

---

##### `ListCustomDetectionRuleOrgConfigurations`<sup>Required</sup> <a name="ListCustomDetectionRuleOrgConfigurations" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListCustomDetectionRuleOrgConfigurations"></a>

```typescript
public readonly ListCustomDetectionRuleOrgConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomDetectionRuleOrgConfigurations API call.

---

##### `ListCustomDetectionRules`<sup>Required</sup> <a name="ListCustomDetectionRules" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListCustomDetectionRules"></a>

```typescript
public readonly ListCustomDetectionRules: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomDetectionRules API call.

---

##### `ListDetectors`<sup>Required</sup> <a name="ListDetectors" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListDetectors"></a>

```typescript
public readonly ListDetectors: string[];
```

- *Type:* string[]

IAM actions required for the ListDetectors API call.

---

##### `ListFilters`<sup>Required</sup> <a name="ListFilters" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListFilters"></a>

```typescript
public readonly ListFilters: string[];
```

- *Type:* string[]

IAM actions required for the ListFilters API call.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListFindings"></a>

```typescript
public readonly ListFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListFindings API call.

---

##### `ListInvestigations`<sup>Required</sup> <a name="ListInvestigations" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListInvestigations"></a>

```typescript
public readonly ListInvestigations: string[];
```

- *Type:* string[]

IAM actions required for the ListInvestigations API call.

---

##### `ListInvitations`<sup>Required</sup> <a name="ListInvitations" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListInvitations"></a>

```typescript
public readonly ListInvitations: string[];
```

- *Type:* string[]

IAM actions required for the ListInvitations API call.

---

##### `ListIPSets`<sup>Required</sup> <a name="ListIPSets" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListIPSets"></a>

```typescript
public readonly ListIPSets: string[];
```

- *Type:* string[]

IAM actions required for the ListIPSets API call.

---

##### `ListMalwareProtectionPlans`<sup>Required</sup> <a name="ListMalwareProtectionPlans" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListMalwareProtectionPlans"></a>

```typescript
public readonly ListMalwareProtectionPlans: string[];
```

- *Type:* string[]

IAM actions required for the ListMalwareProtectionPlans API call.

---

##### `ListMalwareScans`<sup>Required</sup> <a name="ListMalwareScans" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListMalwareScans"></a>

```typescript
public readonly ListMalwareScans: string[];
```

- *Type:* string[]

IAM actions required for the ListMalwareScans API call.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListMembers"></a>

```typescript
public readonly ListMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListMembers API call.

---

##### `ListOrganizationAdminAccounts`<sup>Required</sup> <a name="ListOrganizationAdminAccounts" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListOrganizationAdminAccounts"></a>

```typescript
public readonly ListOrganizationAdminAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationAdminAccounts API call.

---

##### `ListPublishingDestinations`<sup>Required</sup> <a name="ListPublishingDestinations" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListPublishingDestinations"></a>

```typescript
public readonly ListPublishingDestinations: string[];
```

- *Type:* string[]

IAM actions required for the ListPublishingDestinations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListThreatEntitySets`<sup>Required</sup> <a name="ListThreatEntitySets" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListThreatEntitySets"></a>

```typescript
public readonly ListThreatEntitySets: string[];
```

- *Type:* string[]

IAM actions required for the ListThreatEntitySets API call.

---

##### `ListThreatIntelSets`<sup>Required</sup> <a name="ListThreatIntelSets" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListThreatIntelSets"></a>

```typescript
public readonly ListThreatIntelSets: string[];
```

- *Type:* string[]

IAM actions required for the ListThreatIntelSets API call.

---

##### `ListTrustedEntitySets`<sup>Required</sup> <a name="ListTrustedEntitySets" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.ListTrustedEntitySets"></a>

```typescript
public readonly ListTrustedEntitySets: string[];
```

- *Type:* string[]

IAM actions required for the ListTrustedEntitySets API call.

---

##### `opGetAdministratorAccount`<sup>Required</sup> <a name="opGetAdministratorAccount" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetAdministratorAccount"></a>

```typescript
public readonly opGetAdministratorAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetAdministratorAccount API call.

---

##### `opGetCoverageStatistics`<sup>Required</sup> <a name="opGetCoverageStatistics" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetCoverageStatistics"></a>

```typescript
public readonly opGetCoverageStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetCoverageStatistics API call.

---

##### `opGetCustomDetectionRule`<sup>Required</sup> <a name="opGetCustomDetectionRule" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetCustomDetectionRule"></a>

```typescript
public readonly opGetCustomDetectionRule: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomDetectionRule API call.

---

##### `opGetCustomDetectionRuleAssociation`<sup>Required</sup> <a name="opGetCustomDetectionRuleAssociation" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetCustomDetectionRuleAssociation"></a>

```typescript
public readonly opGetCustomDetectionRuleAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomDetectionRuleAssociation API call.

---

##### `opGetCustomDetectionRuleOrgConfiguration`<sup>Required</sup> <a name="opGetCustomDetectionRuleOrgConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetCustomDetectionRuleOrgConfiguration"></a>

```typescript
public readonly opGetCustomDetectionRuleOrgConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomDetectionRuleOrgConfiguration API call.

---

##### `opGetDetector`<sup>Required</sup> <a name="opGetDetector" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetDetector"></a>

```typescript
public readonly opGetDetector: string[];
```

- *Type:* string[]

IAM actions required for the GetDetector API call.

---

##### `opGetFilter`<sup>Required</sup> <a name="opGetFilter" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetFilter"></a>

```typescript
public readonly opGetFilter: string[];
```

- *Type:* string[]

IAM actions required for the GetFilter API call.

---

##### `opGetFindings`<sup>Required</sup> <a name="opGetFindings" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetFindings"></a>

```typescript
public readonly opGetFindings: string[];
```

- *Type:* string[]

IAM actions required for the GetFindings API call.

---

##### `opGetFindingsStatistics`<sup>Required</sup> <a name="opGetFindingsStatistics" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetFindingsStatistics"></a>

```typescript
public readonly opGetFindingsStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingsStatistics API call.

---

##### `opGetInvestigation`<sup>Required</sup> <a name="opGetInvestigation" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetInvestigation"></a>

```typescript
public readonly opGetInvestigation: string[];
```

- *Type:* string[]

IAM actions required for the GetInvestigation API call.

---

##### `opGetInvitationsCount`<sup>Required</sup> <a name="opGetInvitationsCount" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetInvitationsCount"></a>

```typescript
public readonly opGetInvitationsCount: string[];
```

- *Type:* string[]

IAM actions required for the GetInvitationsCount API call.

---

##### `opGetIPSet`<sup>Required</sup> <a name="opGetIPSet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetIPSet"></a>

```typescript
public readonly opGetIPSet: string[];
```

- *Type:* string[]

IAM actions required for the GetIPSet API call.

---

##### `opGetMalwareProtectionPlan`<sup>Required</sup> <a name="opGetMalwareProtectionPlan" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMalwareProtectionPlan"></a>

```typescript
public readonly opGetMalwareProtectionPlan: string[];
```

- *Type:* string[]

IAM actions required for the GetMalwareProtectionPlan API call.

---

##### `opGetMalwareScan`<sup>Required</sup> <a name="opGetMalwareScan" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMalwareScan"></a>

```typescript
public readonly opGetMalwareScan: string[];
```

- *Type:* string[]

IAM actions required for the GetMalwareScan API call.

---

##### `opGetMalwareScanSettings`<sup>Required</sup> <a name="opGetMalwareScanSettings" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMalwareScanSettings"></a>

```typescript
public readonly opGetMalwareScanSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetMalwareScanSettings API call.

---

##### `opGetMasterAccount`<sup>Required</sup> <a name="opGetMasterAccount" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMasterAccount"></a>

```typescript
public readonly opGetMasterAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetMasterAccount API call.

---

##### `opGetMemberDetectors`<sup>Required</sup> <a name="opGetMemberDetectors" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMemberDetectors"></a>

```typescript
public readonly opGetMemberDetectors: string[];
```

- *Type:* string[]

IAM actions required for the GetMemberDetectors API call.

---

##### `opGetMembers`<sup>Required</sup> <a name="opGetMembers" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetMembers"></a>

```typescript
public readonly opGetMembers: string[];
```

- *Type:* string[]

IAM actions required for the GetMembers API call.

---

##### `opGetOrganizationStatistics`<sup>Required</sup> <a name="opGetOrganizationStatistics" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetOrganizationStatistics"></a>

```typescript
public readonly opGetOrganizationStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetOrganizationStatistics API call.

---

##### `opGetRemainingFreeTrialDays`<sup>Required</sup> <a name="opGetRemainingFreeTrialDays" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetRemainingFreeTrialDays"></a>

```typescript
public readonly opGetRemainingFreeTrialDays: string[];
```

- *Type:* string[]

IAM actions required for the GetRemainingFreeTrialDays API call.

---

##### `opGetThreatEntitySet`<sup>Required</sup> <a name="opGetThreatEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetThreatEntitySet"></a>

```typescript
public readonly opGetThreatEntitySet: string[];
```

- *Type:* string[]

IAM actions required for the GetThreatEntitySet API call.

---

##### `opGetThreatIntelSet`<sup>Required</sup> <a name="opGetThreatIntelSet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetThreatIntelSet"></a>

```typescript
public readonly opGetThreatIntelSet: string[];
```

- *Type:* string[]

IAM actions required for the GetThreatIntelSet API call.

---

##### `opGetTrustedEntitySet`<sup>Required</sup> <a name="opGetTrustedEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetTrustedEntitySet"></a>

```typescript
public readonly opGetTrustedEntitySet: string[];
```

- *Type:* string[]

IAM actions required for the GetTrustedEntitySet API call.

---

##### `opGetUsageStatistics`<sup>Required</sup> <a name="opGetUsageStatistics" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.opGetUsageStatistics"></a>

```typescript
public readonly opGetUsageStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetUsageStatistics API call.

---

##### `SendObjectMalwareScan`<sup>Required</sup> <a name="SendObjectMalwareScan" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.SendObjectMalwareScan"></a>

```typescript
public readonly SendObjectMalwareScan: string[];
```

- *Type:* string[]

IAM actions required for the SendObjectMalwareScan API call.

---

##### `StartMalwareScan`<sup>Required</sup> <a name="StartMalwareScan" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.StartMalwareScan"></a>

```typescript
public readonly StartMalwareScan: string[];
```

- *Type:* string[]

IAM actions required for the StartMalwareScan API call.

---

##### `StartMonitoringMembers`<sup>Required</sup> <a name="StartMonitoringMembers" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.StartMonitoringMembers"></a>

```typescript
public readonly StartMonitoringMembers: string[];
```

- *Type:* string[]

IAM actions required for the StartMonitoringMembers API call.

---

##### `StopMonitoringMembers`<sup>Required</sup> <a name="StopMonitoringMembers" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.StopMonitoringMembers"></a>

```typescript
public readonly StopMonitoringMembers: string[];
```

- *Type:* string[]

IAM actions required for the StopMonitoringMembers API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UnarchiveFindings`<sup>Required</sup> <a name="UnarchiveFindings" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UnarchiveFindings"></a>

```typescript
public readonly UnarchiveFindings: string[];
```

- *Type:* string[]

IAM actions required for the UnarchiveFindings API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCustomDetectionRuleAssociation`<sup>Required</sup> <a name="UpdateCustomDetectionRuleAssociation" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateCustomDetectionRuleAssociation"></a>

```typescript
public readonly UpdateCustomDetectionRuleAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomDetectionRuleAssociation API call.

---

##### `UpdateCustomDetectionRuleOrgConfiguration`<sup>Required</sup> <a name="UpdateCustomDetectionRuleOrgConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateCustomDetectionRuleOrgConfiguration"></a>

```typescript
public readonly UpdateCustomDetectionRuleOrgConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomDetectionRuleOrgConfiguration API call.

---

##### `UpdateDetector`<sup>Required</sup> <a name="UpdateDetector" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateDetector"></a>

```typescript
public readonly UpdateDetector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDetector API call.

---

##### `UpdateFilter`<sup>Required</sup> <a name="UpdateFilter" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateFilter"></a>

```typescript
public readonly UpdateFilter: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFilter API call.

---

##### `UpdateFindingsFeedback`<sup>Required</sup> <a name="UpdateFindingsFeedback" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateFindingsFeedback"></a>

```typescript
public readonly UpdateFindingsFeedback: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFindingsFeedback API call.

---

##### `UpdateIPSet`<sup>Required</sup> <a name="UpdateIPSet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateIPSet"></a>

```typescript
public readonly UpdateIPSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIPSet API call.

---

##### `UpdateMalwareProtectionPlan`<sup>Required</sup> <a name="UpdateMalwareProtectionPlan" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateMalwareProtectionPlan"></a>

```typescript
public readonly UpdateMalwareProtectionPlan: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMalwareProtectionPlan API call.

---

##### `UpdateMalwareScanSettings`<sup>Required</sup> <a name="UpdateMalwareScanSettings" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateMalwareScanSettings"></a>

```typescript
public readonly UpdateMalwareScanSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMalwareScanSettings API call.

---

##### `UpdateMemberDetectors`<sup>Required</sup> <a name="UpdateMemberDetectors" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateMemberDetectors"></a>

```typescript
public readonly UpdateMemberDetectors: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMemberDetectors API call.

---

##### `UpdateOrganizationConfiguration`<sup>Required</sup> <a name="UpdateOrganizationConfiguration" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateOrganizationConfiguration"></a>

```typescript
public readonly UpdateOrganizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOrganizationConfiguration API call.

---

##### `UpdatePublishingDestination`<sup>Required</sup> <a name="UpdatePublishingDestination" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdatePublishingDestination"></a>

```typescript
public readonly UpdatePublishingDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePublishingDestination API call.

---

##### `UpdateThreatEntitySet`<sup>Required</sup> <a name="UpdateThreatEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateThreatEntitySet"></a>

```typescript
public readonly UpdateThreatEntitySet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThreatEntitySet API call.

---

##### `UpdateThreatIntelSet`<sup>Required</sup> <a name="UpdateThreatIntelSet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateThreatIntelSet"></a>

```typescript
public readonly UpdateThreatIntelSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateThreatIntelSet API call.

---

##### `UpdateTrustedEntitySet`<sup>Required</sup> <a name="UpdateTrustedEntitySet" id="@cdk_utils/iam.guardduty.GuardDutyOperations.property.UpdateTrustedEntitySet"></a>

```typescript
public readonly UpdateTrustedEntitySet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrustedEntitySet API call.

---

### GuardDutyResources <a name="GuardDutyResources" id="@cdk_utils/iam.guardduty.GuardDutyResources"></a>

ARN builders, validators, and parsers for guardduty resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.guardduty.GuardDutyResources.Initializer"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

new guardduty.GuardDutyResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.customdetectionrule">customdetectionrule</a></code> | Builds an ARN for the customdetectionrule resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.customdetectionruleassociation">customdetectionruleassociation</a></code> | Builds an ARN for the customdetectionruleassociation resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.detector">detector</a></code> | Builds an ARN for the detector resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.filter">filter</a></code> | Builds an ARN for the filter resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.ipset">ipset</a></code> | Builds an ARN for the ipset resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.isValidCustomdetectionruleArn">isValidCustomdetectionruleArn</a></code> | Validates whether a string is a valid ARN for the customdetectionrule resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.isValidCustomdetectionruleassociationArn">isValidCustomdetectionruleassociationArn</a></code> | Validates whether a string is a valid ARN for the customdetectionruleassociation resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.isValidDetectorArn">isValidDetectorArn</a></code> | Validates whether a string is a valid ARN for the detector resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.isValidFilterArn">isValidFilterArn</a></code> | Validates whether a string is a valid ARN for the filter resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.isValidIpsetArn">isValidIpsetArn</a></code> | Validates whether a string is a valid ARN for the ipset resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.isValidMalwareprotectionplanArn">isValidMalwareprotectionplanArn</a></code> | Validates whether a string is a valid ARN for the malwareprotectionplan resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.isValidPublishingDestinationArn">isValidPublishingDestinationArn</a></code> | Validates whether a string is a valid ARN for the publishingDestination resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.isValidThreatentitysetArn">isValidThreatentitysetArn</a></code> | Validates whether a string is a valid ARN for the threatentityset resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.isValidThreatintelsetArn">isValidThreatintelsetArn</a></code> | Validates whether a string is a valid ARN for the threatintelset resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.isValidTrustedentitysetArn">isValidTrustedentitysetArn</a></code> | Validates whether a string is a valid ARN for the trustedentityset resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.malwareprotectionplan">malwareprotectionplan</a></code> | Builds an ARN for the malwareprotectionplan resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.parseCustomdetectionruleArn">parseCustomdetectionruleArn</a></code> | Parses a customdetectionrule ARN into its components. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.parseCustomdetectionruleassociationArn">parseCustomdetectionruleassociationArn</a></code> | Parses a customdetectionruleassociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.parseDetectorArn">parseDetectorArn</a></code> | Parses a detector ARN into its components. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.parseFilterArn">parseFilterArn</a></code> | Parses a filter ARN into its components. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.parseIpsetArn">parseIpsetArn</a></code> | Parses a ipset ARN into its components. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.parseMalwareprotectionplanArn">parseMalwareprotectionplanArn</a></code> | Parses a malwareprotectionplan ARN into its components. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.parsePublishingDestinationArn">parsePublishingDestinationArn</a></code> | Parses a publishingDestination ARN into its components. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.parseThreatentitysetArn">parseThreatentitysetArn</a></code> | Parses a threatentityset ARN into its components. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.parseThreatintelsetArn">parseThreatintelsetArn</a></code> | Parses a threatintelset ARN into its components. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.parseTrustedentitysetArn">parseTrustedentitysetArn</a></code> | Parses a trustedentityset ARN into its components. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.publishingDestination">publishingDestination</a></code> | Builds an ARN for the publishingDestination resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.threatentityset">threatentityset</a></code> | Builds an ARN for the threatentityset resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.threatintelset">threatintelset</a></code> | Builds an ARN for the threatintelset resource. |
| <code><a href="#@cdk_utils/iam.guardduty.GuardDutyResources.trustedentityset">trustedentityset</a></code> | Builds an ARN for the trustedentityset resource. |

---

##### `customdetectionrule` <a name="customdetectionrule" id="@cdk_utils/iam.guardduty.GuardDutyResources.customdetectionrule"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.customdetectionrule(props: GuardDutyCustomdetectionruleArnProps)
```

Builds an ARN for the customdetectionrule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.guardduty.GuardDutyResources.customdetectionrule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleArnProps">GuardDutyCustomdetectionruleArnProps</a>

---

##### `customdetectionruleassociation` <a name="customdetectionruleassociation" id="@cdk_utils/iam.guardduty.GuardDutyResources.customdetectionruleassociation"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.customdetectionruleassociation(props: GuardDutyCustomdetectionruleassociationArnProps)
```

Builds an ARN for the customdetectionruleassociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.guardduty.GuardDutyResources.customdetectionruleassociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.guardduty.GuardDutyCustomdetectionruleassociationArnProps">GuardDutyCustomdetectionruleassociationArnProps</a>

---

##### `detector` <a name="detector" id="@cdk_utils/iam.guardduty.GuardDutyResources.detector"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.detector(props: GuardDutyDetectorArnProps)
```

Builds an ARN for the detector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.guardduty.GuardDutyResources.detector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.guardduty.GuardDutyDetectorArnProps">GuardDutyDetectorArnProps</a>

---

##### `filter` <a name="filter" id="@cdk_utils/iam.guardduty.GuardDutyResources.filter"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.filter(props: GuardDutyFilterArnProps)
```

Builds an ARN for the filter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.guardduty.GuardDutyResources.filter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.guardduty.GuardDutyFilterArnProps">GuardDutyFilterArnProps</a>

---

##### `ipset` <a name="ipset" id="@cdk_utils/iam.guardduty.GuardDutyResources.ipset"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.ipset(props: GuardDutyIpsetArnProps)
```

Builds an ARN for the ipset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.guardduty.GuardDutyResources.ipset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.guardduty.GuardDutyIpsetArnProps">GuardDutyIpsetArnProps</a>

---

##### `isValidCustomdetectionruleArn` <a name="isValidCustomdetectionruleArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidCustomdetectionruleArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.isValidCustomdetectionruleArn(arn: string)
```

Validates whether a string is a valid ARN for the customdetectionrule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidCustomdetectionruleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomdetectionruleassociationArn` <a name="isValidCustomdetectionruleassociationArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidCustomdetectionruleassociationArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.isValidCustomdetectionruleassociationArn(arn: string)
```

Validates whether a string is a valid ARN for the customdetectionruleassociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidCustomdetectionruleassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDetectorArn` <a name="isValidDetectorArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidDetectorArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.isValidDetectorArn(arn: string)
```

Validates whether a string is a valid ARN for the detector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidDetectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFilterArn` <a name="isValidFilterArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidFilterArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.isValidFilterArn(arn: string)
```

Validates whether a string is a valid ARN for the filter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidFilterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIpsetArn` <a name="isValidIpsetArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidIpsetArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.isValidIpsetArn(arn: string)
```

Validates whether a string is a valid ARN for the ipset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidIpsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMalwareprotectionplanArn` <a name="isValidMalwareprotectionplanArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidMalwareprotectionplanArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.isValidMalwareprotectionplanArn(arn: string)
```

Validates whether a string is a valid ARN for the malwareprotectionplan resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidMalwareprotectionplanArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPublishingDestinationArn` <a name="isValidPublishingDestinationArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidPublishingDestinationArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.isValidPublishingDestinationArn(arn: string)
```

Validates whether a string is a valid ARN for the publishingDestination resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidPublishingDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidThreatentitysetArn` <a name="isValidThreatentitysetArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidThreatentitysetArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.isValidThreatentitysetArn(arn: string)
```

Validates whether a string is a valid ARN for the threatentityset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidThreatentitysetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidThreatintelsetArn` <a name="isValidThreatintelsetArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidThreatintelsetArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.isValidThreatintelsetArn(arn: string)
```

Validates whether a string is a valid ARN for the threatintelset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidThreatintelsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTrustedentitysetArn` <a name="isValidTrustedentitysetArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidTrustedentitysetArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.isValidTrustedentitysetArn(arn: string)
```

Validates whether a string is a valid ARN for the trustedentityset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.isValidTrustedentitysetArn.parameter.arn"></a>

- *Type:* string

---

##### `malwareprotectionplan` <a name="malwareprotectionplan" id="@cdk_utils/iam.guardduty.GuardDutyResources.malwareprotectionplan"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.malwareprotectionplan(props: GuardDutyMalwareprotectionplanArnProps)
```

Builds an ARN for the malwareprotectionplan resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.guardduty.GuardDutyResources.malwareprotectionplan.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.guardduty.GuardDutyMalwareprotectionplanArnProps">GuardDutyMalwareprotectionplanArnProps</a>

---

##### `parseCustomdetectionruleArn` <a name="parseCustomdetectionruleArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseCustomdetectionruleArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.parseCustomdetectionruleArn(arn: string)
```

Parses a customdetectionrule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseCustomdetectionruleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomdetectionruleassociationArn` <a name="parseCustomdetectionruleassociationArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseCustomdetectionruleassociationArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.parseCustomdetectionruleassociationArn(arn: string)
```

Parses a customdetectionruleassociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseCustomdetectionruleassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDetectorArn` <a name="parseDetectorArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseDetectorArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.parseDetectorArn(arn: string)
```

Parses a detector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseDetectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFilterArn` <a name="parseFilterArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseFilterArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.parseFilterArn(arn: string)
```

Parses a filter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseFilterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIpsetArn` <a name="parseIpsetArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseIpsetArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.parseIpsetArn(arn: string)
```

Parses a ipset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseIpsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMalwareprotectionplanArn` <a name="parseMalwareprotectionplanArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseMalwareprotectionplanArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.parseMalwareprotectionplanArn(arn: string)
```

Parses a malwareprotectionplan ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseMalwareprotectionplanArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePublishingDestinationArn` <a name="parsePublishingDestinationArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parsePublishingDestinationArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.parsePublishingDestinationArn(arn: string)
```

Parses a publishingDestination ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parsePublishingDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseThreatentitysetArn` <a name="parseThreatentitysetArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseThreatentitysetArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.parseThreatentitysetArn(arn: string)
```

Parses a threatentityset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseThreatentitysetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseThreatintelsetArn` <a name="parseThreatintelsetArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseThreatintelsetArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.parseThreatintelsetArn(arn: string)
```

Parses a threatintelset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseThreatintelsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTrustedentitysetArn` <a name="parseTrustedentitysetArn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseTrustedentitysetArn"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.parseTrustedentitysetArn(arn: string)
```

Parses a trustedentityset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.guardduty.GuardDutyResources.parseTrustedentitysetArn.parameter.arn"></a>

- *Type:* string

---

##### `publishingDestination` <a name="publishingDestination" id="@cdk_utils/iam.guardduty.GuardDutyResources.publishingDestination"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.publishingDestination(props: GuardDutyPublishingDestinationArnProps)
```

Builds an ARN for the publishingDestination resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.guardduty.GuardDutyResources.publishingDestination.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.guardduty.GuardDutyPublishingDestinationArnProps">GuardDutyPublishingDestinationArnProps</a>

---

##### `threatentityset` <a name="threatentityset" id="@cdk_utils/iam.guardduty.GuardDutyResources.threatentityset"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.threatentityset(props: GuardDutyThreatentitysetArnProps)
```

Builds an ARN for the threatentityset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.guardduty.GuardDutyResources.threatentityset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.guardduty.GuardDutyThreatentitysetArnProps">GuardDutyThreatentitysetArnProps</a>

---

##### `threatintelset` <a name="threatintelset" id="@cdk_utils/iam.guardduty.GuardDutyResources.threatintelset"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.threatintelset(props: GuardDutyThreatintelsetArnProps)
```

Builds an ARN for the threatintelset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.guardduty.GuardDutyResources.threatintelset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.guardduty.GuardDutyThreatintelsetArnProps">GuardDutyThreatintelsetArnProps</a>

---

##### `trustedentityset` <a name="trustedentityset" id="@cdk_utils/iam.guardduty.GuardDutyResources.trustedentityset"></a>

```typescript
import { guardduty } from '@cdk_utils/iam'

guardduty.GuardDutyResources.trustedentityset(props: GuardDutyTrustedentitysetArnProps)
```

Builds an ARN for the trustedentityset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.guardduty.GuardDutyResources.trustedentityset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.guardduty.GuardDutyTrustedentitysetArnProps">GuardDutyTrustedentitysetArnProps</a>

---




