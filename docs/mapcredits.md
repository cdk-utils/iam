# `mapcredits` Submodule <a name="`mapcredits` Submodule" id="@cdk_utils/iam.mapcredits"></a>


## Structs <a name="Structs" id="Structs"></a>

### MapcreditsAgreementArnComponents <a name="MapcreditsAgreementArnComponents" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents"></a>

Parsed components of a agreement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents.Initializer"></a>

```typescript
import { mapcredits } from '@cdk_utils/iam'

const mapcreditsAgreementArnComponents: mapcredits.MapcreditsAgreementArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents.property.agreement">agreement</a></code> | <code>string</code> | The Agreement component. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents.property.agreementId">agreementId</a></code> | <code>string</code> | The AgreementId component. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agreement`<sup>Required</sup> <a name="agreement" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents.property.agreement"></a>

```typescript
public readonly agreement: string;
```

- *Type:* string

The Agreement component.

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents.property.agreementId"></a>

```typescript
public readonly agreementId: string;
```

- *Type:* string

The AgreementId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MapcreditsAgreementArnProps <a name="MapcreditsAgreementArnProps" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps"></a>

Properties for building a agreement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps.Initializer"></a>

```typescript
import { mapcredits } from '@cdk_utils/iam'

const mapcreditsAgreementArnProps: mapcredits.MapcreditsAgreementArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps.property.agreement">agreement</a></code> | <code>string</code> | The Agreement component of the ARN. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps.property.agreementId">agreementId</a></code> | <code>string</code> | The AgreementId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agreement`<sup>Required</sup> <a name="agreement" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps.property.agreement"></a>

```typescript
public readonly agreement: string;
```

- *Type:* string

The Agreement component of the ARN.

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps.property.agreementId"></a>

```typescript
public readonly agreementId: string;
```

- *Type:* string

The AgreementId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MapcreditsActions <a name="MapcreditsActions" id="@cdk_utils/iam.mapcredits.MapcreditsActions"></a>

IAM action constants for the mapcredits service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mapcredits.MapcreditsActions.Initializer"></a>

```typescript
import { mapcredits } from '@cdk_utils/iam'

new mapcredits.MapcreditsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsActions.property.ListAssociatedPrograms">ListAssociatedPrograms</a></code> | <code>string</code> | [List] mapcredits:ListAssociatedPrograms. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsActions.property.ListQuarterCredits">ListQuarterCredits</a></code> | <code>string</code> | [List] mapcredits:ListQuarterCredits. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsActions.property.ListQuarterSpend">ListQuarterSpend</a></code> | <code>string</code> | [List] mapcredits:ListQuarterSpend. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mapcredits.MapcreditsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mapcredits.MapcreditsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mapcredits.MapcreditsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mapcredits.MapcreditsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mapcredits.MapcreditsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ListAssociatedPrograms`<sup>Required</sup> <a name="ListAssociatedPrograms" id="@cdk_utils/iam.mapcredits.MapcreditsActions.property.ListAssociatedPrograms"></a>

```typescript
public readonly ListAssociatedPrograms: string;
```

- *Type:* string

[List] mapcredits:ListAssociatedPrograms.

---

##### `ListQuarterCredits`<sup>Required</sup> <a name="ListQuarterCredits" id="@cdk_utils/iam.mapcredits.MapcreditsActions.property.ListQuarterCredits"></a>

```typescript
public readonly ListQuarterCredits: string;
```

- *Type:* string

[List] mapcredits:ListQuarterCredits.

---

##### `ListQuarterSpend`<sup>Required</sup> <a name="ListQuarterSpend" id="@cdk_utils/iam.mapcredits.MapcreditsActions.property.ListQuarterSpend"></a>

```typescript
public readonly ListQuarterSpend: string;
```

- *Type:* string

[List] mapcredits:ListQuarterSpend.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mapcredits.MapcreditsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### MapcreditsResources <a name="MapcreditsResources" id="@cdk_utils/iam.mapcredits.MapcreditsResources"></a>

ARN builders, validators, and parsers for mapcredits resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mapcredits.MapcreditsResources.Initializer"></a>

```typescript
import { mapcredits } from '@cdk_utils/iam'

new mapcredits.MapcreditsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsResources.agreement">agreement</a></code> | Builds an ARN for the agreement resource. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsResources.isValidAgreementArn">isValidAgreementArn</a></code> | Validates whether a string is a valid ARN for the agreement resource. |
| <code><a href="#@cdk_utils/iam.mapcredits.MapcreditsResources.parseAgreementArn">parseAgreementArn</a></code> | Parses a agreement ARN into its components. |

---

##### `agreement` <a name="agreement" id="@cdk_utils/iam.mapcredits.MapcreditsResources.agreement"></a>

```typescript
import { mapcredits } from '@cdk_utils/iam'

mapcredits.MapcreditsResources.agreement(props: MapcreditsAgreementArnProps)
```

Builds an ARN for the agreement resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mapcredits.MapcreditsResources.agreement.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mapcredits.MapcreditsAgreementArnProps">MapcreditsAgreementArnProps</a>

---

##### `isValidAgreementArn` <a name="isValidAgreementArn" id="@cdk_utils/iam.mapcredits.MapcreditsResources.isValidAgreementArn"></a>

```typescript
import { mapcredits } from '@cdk_utils/iam'

mapcredits.MapcreditsResources.isValidAgreementArn(arn: string)
```

Validates whether a string is a valid ARN for the agreement resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mapcredits.MapcreditsResources.isValidAgreementArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAgreementArn` <a name="parseAgreementArn" id="@cdk_utils/iam.mapcredits.MapcreditsResources.parseAgreementArn"></a>

```typescript
import { mapcredits } from '@cdk_utils/iam'

mapcredits.MapcreditsResources.parseAgreementArn(arn: string)
```

Parses a agreement ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mapcredits.MapcreditsResources.parseAgreementArn.parameter.arn"></a>

- *Type:* string

---




