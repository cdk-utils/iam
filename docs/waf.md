# `waf` Submodule <a name="`waf` Submodule" id="@cdk_utils/iam.waf"></a>


## Structs <a name="Structs" id="Structs"></a>

### WAFBytematchsetArnComponents <a name="WAFBytematchsetArnComponents" id="@cdk_utils/iam.waf.WAFBytematchsetArnComponents"></a>

Parsed components of a bytematchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFBytematchsetArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFBytematchsetArnComponents: waf.WAFBytematchsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFBytematchsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFBytematchsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFBytematchsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFBytematchsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFBytematchsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFBytematchsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFBytematchsetArnProps <a name="WAFBytematchsetArnProps" id="@cdk_utils/iam.waf.WAFBytematchsetArnProps"></a>

Properties for building a bytematchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFBytematchsetArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFBytematchsetArnProps: waf.WAFBytematchsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFBytematchsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFBytematchsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFBytematchsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFBytematchsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFBytematchsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFBytematchsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### WAFGeomatchsetArnComponents <a name="WAFGeomatchsetArnComponents" id="@cdk_utils/iam.waf.WAFGeomatchsetArnComponents"></a>

Parsed components of a geomatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFGeomatchsetArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFGeomatchsetArnComponents: waf.WAFGeomatchsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFGeomatchsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFGeomatchsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFGeomatchsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFGeomatchsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFGeomatchsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFGeomatchsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFGeomatchsetArnProps <a name="WAFGeomatchsetArnProps" id="@cdk_utils/iam.waf.WAFGeomatchsetArnProps"></a>

Properties for building a geomatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFGeomatchsetArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFGeomatchsetArnProps: waf.WAFGeomatchsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFGeomatchsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFGeomatchsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFGeomatchsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFGeomatchsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFGeomatchsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFGeomatchsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### WAFIpsetArnComponents <a name="WAFIpsetArnComponents" id="@cdk_utils/iam.waf.WAFIpsetArnComponents"></a>

Parsed components of a ipset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFIpsetArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFIpsetArnComponents: waf.WAFIpsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFIpsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFIpsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFIpsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFIpsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFIpsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFIpsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFIpsetArnProps <a name="WAFIpsetArnProps" id="@cdk_utils/iam.waf.WAFIpsetArnProps"></a>

Properties for building a ipset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFIpsetArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFIpsetArnProps: waf.WAFIpsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFIpsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFIpsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFIpsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFIpsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFIpsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFIpsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### WAFRatebasedruleArnComponents <a name="WAFRatebasedruleArnComponents" id="@cdk_utils/iam.waf.WAFRatebasedruleArnComponents"></a>

Parsed components of a ratebasedrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFRatebasedruleArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFRatebasedruleArnComponents: waf.WAFRatebasedruleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFRatebasedruleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFRatebasedruleArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFRatebasedruleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFRatebasedruleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFRatebasedruleArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFRatebasedruleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFRatebasedruleArnProps <a name="WAFRatebasedruleArnProps" id="@cdk_utils/iam.waf.WAFRatebasedruleArnProps"></a>

Properties for building a ratebasedrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFRatebasedruleArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFRatebasedruleArnProps: waf.WAFRatebasedruleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFRatebasedruleArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFRatebasedruleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFRatebasedruleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFRatebasedruleArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFRatebasedruleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFRatebasedruleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### WAFRegexmatchsetArnComponents <a name="WAFRegexmatchsetArnComponents" id="@cdk_utils/iam.waf.WAFRegexmatchsetArnComponents"></a>

Parsed components of a regexmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFRegexmatchsetArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFRegexmatchsetArnComponents: waf.WAFRegexmatchsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexmatchsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexmatchsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexmatchsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFRegexmatchsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFRegexmatchsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFRegexmatchsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFRegexmatchsetArnProps <a name="WAFRegexmatchsetArnProps" id="@cdk_utils/iam.waf.WAFRegexmatchsetArnProps"></a>

Properties for building a regexmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFRegexmatchsetArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFRegexmatchsetArnProps: waf.WAFRegexmatchsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexmatchsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexmatchsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexmatchsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFRegexmatchsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFRegexmatchsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFRegexmatchsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### WAFRegexpatternsetArnComponents <a name="WAFRegexpatternsetArnComponents" id="@cdk_utils/iam.waf.WAFRegexpatternsetArnComponents"></a>

Parsed components of a regexpatternset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFRegexpatternsetArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFRegexpatternsetArnComponents: waf.WAFRegexpatternsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexpatternsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexpatternsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexpatternsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFRegexpatternsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFRegexpatternsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFRegexpatternsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFRegexpatternsetArnProps <a name="WAFRegexpatternsetArnProps" id="@cdk_utils/iam.waf.WAFRegexpatternsetArnProps"></a>

Properties for building a regexpatternset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFRegexpatternsetArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFRegexpatternsetArnProps: waf.WAFRegexpatternsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexpatternsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexpatternsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFRegexpatternsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFRegexpatternsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFRegexpatternsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFRegexpatternsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### WAFRuleArnComponents <a name="WAFRuleArnComponents" id="@cdk_utils/iam.waf.WAFRuleArnComponents"></a>

Parsed components of a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFRuleArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFRuleArnComponents: waf.WAFRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFRuleArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFRuleArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFRuleArnProps <a name="WAFRuleArnProps" id="@cdk_utils/iam.waf.WAFRuleArnProps"></a>

Properties for building a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFRuleArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFRuleArnProps: waf.WAFRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFRuleArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFRuleArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### WAFRulegroupArnComponents <a name="WAFRulegroupArnComponents" id="@cdk_utils/iam.waf.WAFRulegroupArnComponents"></a>

Parsed components of a rulegroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFRulegroupArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFRulegroupArnComponents: waf.WAFRulegroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFRulegroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFRulegroupArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFRulegroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFRulegroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFRulegroupArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFRulegroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFRulegroupArnProps <a name="WAFRulegroupArnProps" id="@cdk_utils/iam.waf.WAFRulegroupArnProps"></a>

Properties for building a rulegroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFRulegroupArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFRulegroupArnProps: waf.WAFRulegroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFRulegroupArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFRulegroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFRulegroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFRulegroupArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFRulegroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFRulegroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### WAFSizeconstraintsetArnComponents <a name="WAFSizeconstraintsetArnComponents" id="@cdk_utils/iam.waf.WAFSizeconstraintsetArnComponents"></a>

Parsed components of a sizeconstraintset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFSizeconstraintsetArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFSizeconstraintsetArnComponents: waf.WAFSizeconstraintsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFSizeconstraintsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFSizeconstraintsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFSizeconstraintsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFSizeconstraintsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFSizeconstraintsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFSizeconstraintsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFSizeconstraintsetArnProps <a name="WAFSizeconstraintsetArnProps" id="@cdk_utils/iam.waf.WAFSizeconstraintsetArnProps"></a>

Properties for building a sizeconstraintset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFSizeconstraintsetArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFSizeconstraintsetArnProps: waf.WAFSizeconstraintsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFSizeconstraintsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFSizeconstraintsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFSizeconstraintsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFSizeconstraintsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFSizeconstraintsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFSizeconstraintsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### WAFSqlinjectionmatchsetArnComponents <a name="WAFSqlinjectionmatchsetArnComponents" id="@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnComponents"></a>

Parsed components of a sqlinjectionmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFSqlinjectionmatchsetArnComponents: waf.WAFSqlinjectionmatchsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFSqlinjectionmatchsetArnProps <a name="WAFSqlinjectionmatchsetArnProps" id="@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnProps"></a>

Properties for building a sqlinjectionmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFSqlinjectionmatchsetArnProps: waf.WAFSqlinjectionmatchsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### WAFWebaclArnComponents <a name="WAFWebaclArnComponents" id="@cdk_utils/iam.waf.WAFWebaclArnComponents"></a>

Parsed components of a webacl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFWebaclArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFWebaclArnComponents: waf.WAFWebaclArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFWebaclArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFWebaclArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFWebaclArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFWebaclArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFWebaclArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFWebaclArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFWebaclArnProps <a name="WAFWebaclArnProps" id="@cdk_utils/iam.waf.WAFWebaclArnProps"></a>

Properties for building a webacl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFWebaclArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFWebaclArnProps: waf.WAFWebaclArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFWebaclArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFWebaclArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFWebaclArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFWebaclArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFWebaclArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFWebaclArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### WAFXssmatchsetArnComponents <a name="WAFXssmatchsetArnComponents" id="@cdk_utils/iam.waf.WAFXssmatchsetArnComponents"></a>

Parsed components of a xssmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFXssmatchsetArnComponents.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFXssmatchsetArnComponents: waf.WAFXssmatchsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFXssmatchsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFXssmatchsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf.WAFXssmatchsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf.WAFXssmatchsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFXssmatchsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFXssmatchsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### WAFXssmatchsetArnProps <a name="WAFXssmatchsetArnProps" id="@cdk_utils/iam.waf.WAFXssmatchsetArnProps"></a>

Properties for building a xssmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf.WAFXssmatchsetArnProps.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

const wAFXssmatchsetArnProps: waf.WAFXssmatchsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFXssmatchsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf.WAFXssmatchsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf.WAFXssmatchsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf.WAFXssmatchsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf.WAFXssmatchsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf.WAFXssmatchsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### WAFActions <a name="WAFActions" id="@cdk_utils/iam.waf.WAFActions"></a>

IAM action constants for the waf service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.waf.WAFActions.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

new waf.WAFActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetByteMatchSet">actionGetByteMatchSet</a></code> | <code>string</code> | [Read] waf:GetByteMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetChangeToken">actionGetChangeToken</a></code> | <code>string</code> | [Read] waf:GetChangeToken. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetChangeTokenStatus">actionGetChangeTokenStatus</a></code> | <code>string</code> | [Read] waf:GetChangeTokenStatus. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetGeoMatchSet">actionGetGeoMatchSet</a></code> | <code>string</code> | [Read] waf:GetGeoMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetIPSet">actionGetIPSet</a></code> | <code>string</code> | [Read] waf:GetIPSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetLoggingConfiguration">actionGetLoggingConfiguration</a></code> | <code>string</code> | [Read] waf:GetLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetPermissionPolicy">actionGetPermissionPolicy</a></code> | <code>string</code> | [Read] waf:GetPermissionPolicy. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetRateBasedRule">actionGetRateBasedRule</a></code> | <code>string</code> | [Read] waf:GetRateBasedRule. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetRateBasedRuleManagedKeys">actionGetRateBasedRuleManagedKeys</a></code> | <code>string</code> | [Read] waf:GetRateBasedRuleManagedKeys. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetRegexMatchSet">actionGetRegexMatchSet</a></code> | <code>string</code> | [Read] waf:GetRegexMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetRegexPatternSet">actionGetRegexPatternSet</a></code> | <code>string</code> | [Read] waf:GetRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetRule">actionGetRule</a></code> | <code>string</code> | [Read] waf:GetRule. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetRuleGroup">actionGetRuleGroup</a></code> | <code>string</code> | [Read] waf:GetRuleGroup. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetSampledRequests">actionGetSampledRequests</a></code> | <code>string</code> | [Read] waf:GetSampledRequests. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetSizeConstraintSet">actionGetSizeConstraintSet</a></code> | <code>string</code> | [Read] waf:GetSizeConstraintSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetSqlInjectionMatchSet">actionGetSqlInjectionMatchSet</a></code> | <code>string</code> | [Read] waf:GetSqlInjectionMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetWebACL">actionGetWebACL</a></code> | <code>string</code> | [Read] waf:GetWebACL. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.actionGetXssMatchSet">actionGetXssMatchSet</a></code> | <code>string</code> | [Read] waf:GetXssMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateByteMatchSet">CreateByteMatchSet</a></code> | <code>string</code> | [Write] waf:CreateByteMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateGeoMatchSet">CreateGeoMatchSet</a></code> | <code>string</code> | [Write] waf:CreateGeoMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateIPSet">CreateIPSet</a></code> | <code>string</code> | [Write] waf:CreateIPSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateRateBasedRule">CreateRateBasedRule</a></code> | <code>string</code> | [Write] waf:CreateRateBasedRule. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateRegexMatchSet">CreateRegexMatchSet</a></code> | <code>string</code> | [Write] waf:CreateRegexMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateRegexPatternSet">CreateRegexPatternSet</a></code> | <code>string</code> | [Write] waf:CreateRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateRule">CreateRule</a></code> | <code>string</code> | [Write] waf:CreateRule. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateRuleGroup">CreateRuleGroup</a></code> | <code>string</code> | [Write] waf:CreateRuleGroup. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateSizeConstraintSet">CreateSizeConstraintSet</a></code> | <code>string</code> | [Write] waf:CreateSizeConstraintSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateSqlInjectionMatchSet">CreateSqlInjectionMatchSet</a></code> | <code>string</code> | [Write] waf:CreateSqlInjectionMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateWebACL">CreateWebACL</a></code> | <code>string</code> | [PermissionManagement] waf:CreateWebACL. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateWebACLMigrationStack">CreateWebACLMigrationStack</a></code> | <code>string</code> | [Write] waf:CreateWebACLMigrationStack. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.CreateXssMatchSet">CreateXssMatchSet</a></code> | <code>string</code> | [Write] waf:CreateXssMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteByteMatchSet">DeleteByteMatchSet</a></code> | <code>string</code> | [Write] waf:DeleteByteMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteGeoMatchSet">DeleteGeoMatchSet</a></code> | <code>string</code> | [Write] waf:DeleteGeoMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteIPSet">DeleteIPSet</a></code> | <code>string</code> | [Write] waf:DeleteIPSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteLoggingConfiguration">DeleteLoggingConfiguration</a></code> | <code>string</code> | [Write] waf:DeleteLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeletePermissionPolicy">DeletePermissionPolicy</a></code> | <code>string</code> | [PermissionManagement] waf:DeletePermissionPolicy. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteRateBasedRule">DeleteRateBasedRule</a></code> | <code>string</code> | [Write] waf:DeleteRateBasedRule. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteRegexMatchSet">DeleteRegexMatchSet</a></code> | <code>string</code> | [Write] waf:DeleteRegexMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteRegexPatternSet">DeleteRegexPatternSet</a></code> | <code>string</code> | [Write] waf:DeleteRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteRule">DeleteRule</a></code> | <code>string</code> | [Write] waf:DeleteRule. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteRuleGroup">DeleteRuleGroup</a></code> | <code>string</code> | [Write] waf:DeleteRuleGroup. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteSizeConstraintSet">DeleteSizeConstraintSet</a></code> | <code>string</code> | [Write] waf:DeleteSizeConstraintSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteSqlInjectionMatchSet">DeleteSqlInjectionMatchSet</a></code> | <code>string</code> | [Write] waf:DeleteSqlInjectionMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteWebACL">DeleteWebACL</a></code> | <code>string</code> | [PermissionManagement] waf:DeleteWebACL. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.DeleteXssMatchSet">DeleteXssMatchSet</a></code> | <code>string</code> | [Write] waf:DeleteXssMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListActivatedRulesInRuleGroup">ListActivatedRulesInRuleGroup</a></code> | <code>string</code> | [List] waf:ListActivatedRulesInRuleGroup. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListByteMatchSets">ListByteMatchSets</a></code> | <code>string</code> | [List] waf:ListByteMatchSets. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListGeoMatchSets">ListGeoMatchSets</a></code> | <code>string</code> | [List] waf:ListGeoMatchSets. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListIPSets">ListIPSets</a></code> | <code>string</code> | [List] waf:ListIPSets. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListLoggingConfigurations">ListLoggingConfigurations</a></code> | <code>string</code> | [List] waf:ListLoggingConfigurations. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListRateBasedRules">ListRateBasedRules</a></code> | <code>string</code> | [List] waf:ListRateBasedRules. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListRegexMatchSets">ListRegexMatchSets</a></code> | <code>string</code> | [List] waf:ListRegexMatchSets. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListRegexPatternSets">ListRegexPatternSets</a></code> | <code>string</code> | [List] waf:ListRegexPatternSets. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListRuleGroups">ListRuleGroups</a></code> | <code>string</code> | [List] waf:ListRuleGroups. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListRules">ListRules</a></code> | <code>string</code> | [List] waf:ListRules. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListSizeConstraintSets">ListSizeConstraintSets</a></code> | <code>string</code> | [List] waf:ListSizeConstraintSets. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListSqlInjectionMatchSets">ListSqlInjectionMatchSets</a></code> | <code>string</code> | [List] waf:ListSqlInjectionMatchSets. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListSubscribedRuleGroups">ListSubscribedRuleGroups</a></code> | <code>string</code> | [List] waf:ListSubscribedRuleGroups. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] waf:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListWebACLs">ListWebACLs</a></code> | <code>string</code> | [List] waf:ListWebACLs. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.ListXssMatchSets">ListXssMatchSets</a></code> | <code>string</code> | [List] waf:ListXssMatchSets. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.PutLoggingConfiguration">PutLoggingConfiguration</a></code> | <code>string</code> | [Write] waf:PutLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.PutPermissionPolicy">PutPermissionPolicy</a></code> | <code>string</code> | [PermissionManagement] waf:PutPermissionPolicy. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] waf:TagResource. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] waf:UntagResource. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateByteMatchSet">UpdateByteMatchSet</a></code> | <code>string</code> | [Write] waf:UpdateByteMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateGeoMatchSet">UpdateGeoMatchSet</a></code> | <code>string</code> | [Write] waf:UpdateGeoMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateIPSet">UpdateIPSet</a></code> | <code>string</code> | [Write] waf:UpdateIPSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateRateBasedRule">UpdateRateBasedRule</a></code> | <code>string</code> | [Write] waf:UpdateRateBasedRule. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateRegexMatchSet">UpdateRegexMatchSet</a></code> | <code>string</code> | [Write] waf:UpdateRegexMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateRegexPatternSet">UpdateRegexPatternSet</a></code> | <code>string</code> | [Write] waf:UpdateRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateRule">UpdateRule</a></code> | <code>string</code> | [Write] waf:UpdateRule. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateRuleGroup">UpdateRuleGroup</a></code> | <code>string</code> | [Write] waf:UpdateRuleGroup. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateSizeConstraintSet">UpdateSizeConstraintSet</a></code> | <code>string</code> | [Write] waf:UpdateSizeConstraintSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateSqlInjectionMatchSet">UpdateSqlInjectionMatchSet</a></code> | <code>string</code> | [Write] waf:UpdateSqlInjectionMatchSet. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateWebACL">UpdateWebACL</a></code> | <code>string</code> | [PermissionManagement] waf:UpdateWebACL. |
| <code><a href="#@cdk_utils/iam.waf.WAFActions.property.UpdateXssMatchSet">UpdateXssMatchSet</a></code> | <code>string</code> | [Write] waf:UpdateXssMatchSet. |

---

##### `actionGetByteMatchSet`<sup>Required</sup> <a name="actionGetByteMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.actionGetByteMatchSet"></a>

```typescript
public readonly actionGetByteMatchSet: string;
```

- *Type:* string

[Read] waf:GetByteMatchSet.

---

##### `actionGetChangeToken`<sup>Required</sup> <a name="actionGetChangeToken" id="@cdk_utils/iam.waf.WAFActions.property.actionGetChangeToken"></a>

```typescript
public readonly actionGetChangeToken: string;
```

- *Type:* string

[Read] waf:GetChangeToken.

---

##### `actionGetChangeTokenStatus`<sup>Required</sup> <a name="actionGetChangeTokenStatus" id="@cdk_utils/iam.waf.WAFActions.property.actionGetChangeTokenStatus"></a>

```typescript
public readonly actionGetChangeTokenStatus: string;
```

- *Type:* string

[Read] waf:GetChangeTokenStatus.

---

##### `actionGetGeoMatchSet`<sup>Required</sup> <a name="actionGetGeoMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.actionGetGeoMatchSet"></a>

```typescript
public readonly actionGetGeoMatchSet: string;
```

- *Type:* string

[Read] waf:GetGeoMatchSet.

---

##### `actionGetIPSet`<sup>Required</sup> <a name="actionGetIPSet" id="@cdk_utils/iam.waf.WAFActions.property.actionGetIPSet"></a>

```typescript
public readonly actionGetIPSet: string;
```

- *Type:* string

[Read] waf:GetIPSet.

---

##### `actionGetLoggingConfiguration`<sup>Required</sup> <a name="actionGetLoggingConfiguration" id="@cdk_utils/iam.waf.WAFActions.property.actionGetLoggingConfiguration"></a>

```typescript
public readonly actionGetLoggingConfiguration: string;
```

- *Type:* string

[Read] waf:GetLoggingConfiguration.

---

##### `actionGetPermissionPolicy`<sup>Required</sup> <a name="actionGetPermissionPolicy" id="@cdk_utils/iam.waf.WAFActions.property.actionGetPermissionPolicy"></a>

```typescript
public readonly actionGetPermissionPolicy: string;
```

- *Type:* string

[Read] waf:GetPermissionPolicy.

---

##### `actionGetRateBasedRule`<sup>Required</sup> <a name="actionGetRateBasedRule" id="@cdk_utils/iam.waf.WAFActions.property.actionGetRateBasedRule"></a>

```typescript
public readonly actionGetRateBasedRule: string;
```

- *Type:* string

[Read] waf:GetRateBasedRule.

---

##### `actionGetRateBasedRuleManagedKeys`<sup>Required</sup> <a name="actionGetRateBasedRuleManagedKeys" id="@cdk_utils/iam.waf.WAFActions.property.actionGetRateBasedRuleManagedKeys"></a>

```typescript
public readonly actionGetRateBasedRuleManagedKeys: string;
```

- *Type:* string

[Read] waf:GetRateBasedRuleManagedKeys.

---

##### `actionGetRegexMatchSet`<sup>Required</sup> <a name="actionGetRegexMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.actionGetRegexMatchSet"></a>

```typescript
public readonly actionGetRegexMatchSet: string;
```

- *Type:* string

[Read] waf:GetRegexMatchSet.

---

##### `actionGetRegexPatternSet`<sup>Required</sup> <a name="actionGetRegexPatternSet" id="@cdk_utils/iam.waf.WAFActions.property.actionGetRegexPatternSet"></a>

```typescript
public readonly actionGetRegexPatternSet: string;
```

- *Type:* string

[Read] waf:GetRegexPatternSet.

---

##### `actionGetRule`<sup>Required</sup> <a name="actionGetRule" id="@cdk_utils/iam.waf.WAFActions.property.actionGetRule"></a>

```typescript
public readonly actionGetRule: string;
```

- *Type:* string

[Read] waf:GetRule.

---

##### `actionGetRuleGroup`<sup>Required</sup> <a name="actionGetRuleGroup" id="@cdk_utils/iam.waf.WAFActions.property.actionGetRuleGroup"></a>

```typescript
public readonly actionGetRuleGroup: string;
```

- *Type:* string

[Read] waf:GetRuleGroup.

---

##### `actionGetSampledRequests`<sup>Required</sup> <a name="actionGetSampledRequests" id="@cdk_utils/iam.waf.WAFActions.property.actionGetSampledRequests"></a>

```typescript
public readonly actionGetSampledRequests: string;
```

- *Type:* string

[Read] waf:GetSampledRequests.

---

##### `actionGetSizeConstraintSet`<sup>Required</sup> <a name="actionGetSizeConstraintSet" id="@cdk_utils/iam.waf.WAFActions.property.actionGetSizeConstraintSet"></a>

```typescript
public readonly actionGetSizeConstraintSet: string;
```

- *Type:* string

[Read] waf:GetSizeConstraintSet.

---

##### `actionGetSqlInjectionMatchSet`<sup>Required</sup> <a name="actionGetSqlInjectionMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.actionGetSqlInjectionMatchSet"></a>

```typescript
public readonly actionGetSqlInjectionMatchSet: string;
```

- *Type:* string

[Read] waf:GetSqlInjectionMatchSet.

---

##### `actionGetWebACL`<sup>Required</sup> <a name="actionGetWebACL" id="@cdk_utils/iam.waf.WAFActions.property.actionGetWebACL"></a>

```typescript
public readonly actionGetWebACL: string;
```

- *Type:* string

[Read] waf:GetWebACL.

---

##### `actionGetXssMatchSet`<sup>Required</sup> <a name="actionGetXssMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.actionGetXssMatchSet"></a>

```typescript
public readonly actionGetXssMatchSet: string;
```

- *Type:* string

[Read] waf:GetXssMatchSet.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.waf.WAFActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.waf.WAFActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.waf.WAFActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.waf.WAFActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.waf.WAFActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateByteMatchSet`<sup>Required</sup> <a name="CreateByteMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.CreateByteMatchSet"></a>

```typescript
public readonly CreateByteMatchSet: string;
```

- *Type:* string

[Write] waf:CreateByteMatchSet.

---

##### `CreateGeoMatchSet`<sup>Required</sup> <a name="CreateGeoMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.CreateGeoMatchSet"></a>

```typescript
public readonly CreateGeoMatchSet: string;
```

- *Type:* string

[Write] waf:CreateGeoMatchSet.

---

##### `CreateIPSet`<sup>Required</sup> <a name="CreateIPSet" id="@cdk_utils/iam.waf.WAFActions.property.CreateIPSet"></a>

```typescript
public readonly CreateIPSet: string;
```

- *Type:* string

[Write] waf:CreateIPSet.

---

##### `CreateRateBasedRule`<sup>Required</sup> <a name="CreateRateBasedRule" id="@cdk_utils/iam.waf.WAFActions.property.CreateRateBasedRule"></a>

```typescript
public readonly CreateRateBasedRule: string;
```

- *Type:* string

[Write] waf:CreateRateBasedRule.

---

##### `CreateRegexMatchSet`<sup>Required</sup> <a name="CreateRegexMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.CreateRegexMatchSet"></a>

```typescript
public readonly CreateRegexMatchSet: string;
```

- *Type:* string

[Write] waf:CreateRegexMatchSet.

---

##### `CreateRegexPatternSet`<sup>Required</sup> <a name="CreateRegexPatternSet" id="@cdk_utils/iam.waf.WAFActions.property.CreateRegexPatternSet"></a>

```typescript
public readonly CreateRegexPatternSet: string;
```

- *Type:* string

[Write] waf:CreateRegexPatternSet.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.waf.WAFActions.property.CreateRule"></a>

```typescript
public readonly CreateRule: string;
```

- *Type:* string

[Write] waf:CreateRule.

---

##### `CreateRuleGroup`<sup>Required</sup> <a name="CreateRuleGroup" id="@cdk_utils/iam.waf.WAFActions.property.CreateRuleGroup"></a>

```typescript
public readonly CreateRuleGroup: string;
```

- *Type:* string

[Write] waf:CreateRuleGroup.

---

##### `CreateSizeConstraintSet`<sup>Required</sup> <a name="CreateSizeConstraintSet" id="@cdk_utils/iam.waf.WAFActions.property.CreateSizeConstraintSet"></a>

```typescript
public readonly CreateSizeConstraintSet: string;
```

- *Type:* string

[Write] waf:CreateSizeConstraintSet.

---

##### `CreateSqlInjectionMatchSet`<sup>Required</sup> <a name="CreateSqlInjectionMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.CreateSqlInjectionMatchSet"></a>

```typescript
public readonly CreateSqlInjectionMatchSet: string;
```

- *Type:* string

[Write] waf:CreateSqlInjectionMatchSet.

---

##### `CreateWebACL`<sup>Required</sup> <a name="CreateWebACL" id="@cdk_utils/iam.waf.WAFActions.property.CreateWebACL"></a>

```typescript
public readonly CreateWebACL: string;
```

- *Type:* string

[PermissionManagement] waf:CreateWebACL.

---

##### `CreateWebACLMigrationStack`<sup>Required</sup> <a name="CreateWebACLMigrationStack" id="@cdk_utils/iam.waf.WAFActions.property.CreateWebACLMigrationStack"></a>

```typescript
public readonly CreateWebACLMigrationStack: string;
```

- *Type:* string

[Write] waf:CreateWebACLMigrationStack.

---

##### `CreateXssMatchSet`<sup>Required</sup> <a name="CreateXssMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.CreateXssMatchSet"></a>

```typescript
public readonly CreateXssMatchSet: string;
```

- *Type:* string

[Write] waf:CreateXssMatchSet.

---

##### `DeleteByteMatchSet`<sup>Required</sup> <a name="DeleteByteMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.DeleteByteMatchSet"></a>

```typescript
public readonly DeleteByteMatchSet: string;
```

- *Type:* string

[Write] waf:DeleteByteMatchSet.

---

##### `DeleteGeoMatchSet`<sup>Required</sup> <a name="DeleteGeoMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.DeleteGeoMatchSet"></a>

```typescript
public readonly DeleteGeoMatchSet: string;
```

- *Type:* string

[Write] waf:DeleteGeoMatchSet.

---

##### `DeleteIPSet`<sup>Required</sup> <a name="DeleteIPSet" id="@cdk_utils/iam.waf.WAFActions.property.DeleteIPSet"></a>

```typescript
public readonly DeleteIPSet: string;
```

- *Type:* string

[Write] waf:DeleteIPSet.

---

##### `DeleteLoggingConfiguration`<sup>Required</sup> <a name="DeleteLoggingConfiguration" id="@cdk_utils/iam.waf.WAFActions.property.DeleteLoggingConfiguration"></a>

```typescript
public readonly DeleteLoggingConfiguration: string;
```

- *Type:* string

[Write] waf:DeleteLoggingConfiguration.

---

##### `DeletePermissionPolicy`<sup>Required</sup> <a name="DeletePermissionPolicy" id="@cdk_utils/iam.waf.WAFActions.property.DeletePermissionPolicy"></a>

```typescript
public readonly DeletePermissionPolicy: string;
```

- *Type:* string

[PermissionManagement] waf:DeletePermissionPolicy.

---

##### `DeleteRateBasedRule`<sup>Required</sup> <a name="DeleteRateBasedRule" id="@cdk_utils/iam.waf.WAFActions.property.DeleteRateBasedRule"></a>

```typescript
public readonly DeleteRateBasedRule: string;
```

- *Type:* string

[Write] waf:DeleteRateBasedRule.

---

##### `DeleteRegexMatchSet`<sup>Required</sup> <a name="DeleteRegexMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.DeleteRegexMatchSet"></a>

```typescript
public readonly DeleteRegexMatchSet: string;
```

- *Type:* string

[Write] waf:DeleteRegexMatchSet.

---

##### `DeleteRegexPatternSet`<sup>Required</sup> <a name="DeleteRegexPatternSet" id="@cdk_utils/iam.waf.WAFActions.property.DeleteRegexPatternSet"></a>

```typescript
public readonly DeleteRegexPatternSet: string;
```

- *Type:* string

[Write] waf:DeleteRegexPatternSet.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.waf.WAFActions.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string;
```

- *Type:* string

[Write] waf:DeleteRule.

---

##### `DeleteRuleGroup`<sup>Required</sup> <a name="DeleteRuleGroup" id="@cdk_utils/iam.waf.WAFActions.property.DeleteRuleGroup"></a>

```typescript
public readonly DeleteRuleGroup: string;
```

- *Type:* string

[Write] waf:DeleteRuleGroup.

---

##### `DeleteSizeConstraintSet`<sup>Required</sup> <a name="DeleteSizeConstraintSet" id="@cdk_utils/iam.waf.WAFActions.property.DeleteSizeConstraintSet"></a>

```typescript
public readonly DeleteSizeConstraintSet: string;
```

- *Type:* string

[Write] waf:DeleteSizeConstraintSet.

---

##### `DeleteSqlInjectionMatchSet`<sup>Required</sup> <a name="DeleteSqlInjectionMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.DeleteSqlInjectionMatchSet"></a>

```typescript
public readonly DeleteSqlInjectionMatchSet: string;
```

- *Type:* string

[Write] waf:DeleteSqlInjectionMatchSet.

---

##### `DeleteWebACL`<sup>Required</sup> <a name="DeleteWebACL" id="@cdk_utils/iam.waf.WAFActions.property.DeleteWebACL"></a>

```typescript
public readonly DeleteWebACL: string;
```

- *Type:* string

[PermissionManagement] waf:DeleteWebACL.

---

##### `DeleteXssMatchSet`<sup>Required</sup> <a name="DeleteXssMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.DeleteXssMatchSet"></a>

```typescript
public readonly DeleteXssMatchSet: string;
```

- *Type:* string

[Write] waf:DeleteXssMatchSet.

---

##### `ListActivatedRulesInRuleGroup`<sup>Required</sup> <a name="ListActivatedRulesInRuleGroup" id="@cdk_utils/iam.waf.WAFActions.property.ListActivatedRulesInRuleGroup"></a>

```typescript
public readonly ListActivatedRulesInRuleGroup: string;
```

- *Type:* string

[List] waf:ListActivatedRulesInRuleGroup.

---

##### `ListByteMatchSets`<sup>Required</sup> <a name="ListByteMatchSets" id="@cdk_utils/iam.waf.WAFActions.property.ListByteMatchSets"></a>

```typescript
public readonly ListByteMatchSets: string;
```

- *Type:* string

[List] waf:ListByteMatchSets.

---

##### `ListGeoMatchSets`<sup>Required</sup> <a name="ListGeoMatchSets" id="@cdk_utils/iam.waf.WAFActions.property.ListGeoMatchSets"></a>

```typescript
public readonly ListGeoMatchSets: string;
```

- *Type:* string

[List] waf:ListGeoMatchSets.

---

##### `ListIPSets`<sup>Required</sup> <a name="ListIPSets" id="@cdk_utils/iam.waf.WAFActions.property.ListIPSets"></a>

```typescript
public readonly ListIPSets: string;
```

- *Type:* string

[List] waf:ListIPSets.

---

##### `ListLoggingConfigurations`<sup>Required</sup> <a name="ListLoggingConfigurations" id="@cdk_utils/iam.waf.WAFActions.property.ListLoggingConfigurations"></a>

```typescript
public readonly ListLoggingConfigurations: string;
```

- *Type:* string

[List] waf:ListLoggingConfigurations.

---

##### `ListRateBasedRules`<sup>Required</sup> <a name="ListRateBasedRules" id="@cdk_utils/iam.waf.WAFActions.property.ListRateBasedRules"></a>

```typescript
public readonly ListRateBasedRules: string;
```

- *Type:* string

[List] waf:ListRateBasedRules.

---

##### `ListRegexMatchSets`<sup>Required</sup> <a name="ListRegexMatchSets" id="@cdk_utils/iam.waf.WAFActions.property.ListRegexMatchSets"></a>

```typescript
public readonly ListRegexMatchSets: string;
```

- *Type:* string

[List] waf:ListRegexMatchSets.

---

##### `ListRegexPatternSets`<sup>Required</sup> <a name="ListRegexPatternSets" id="@cdk_utils/iam.waf.WAFActions.property.ListRegexPatternSets"></a>

```typescript
public readonly ListRegexPatternSets: string;
```

- *Type:* string

[List] waf:ListRegexPatternSets.

---

##### `ListRuleGroups`<sup>Required</sup> <a name="ListRuleGroups" id="@cdk_utils/iam.waf.WAFActions.property.ListRuleGroups"></a>

```typescript
public readonly ListRuleGroups: string;
```

- *Type:* string

[List] waf:ListRuleGroups.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.waf.WAFActions.property.ListRules"></a>

```typescript
public readonly ListRules: string;
```

- *Type:* string

[List] waf:ListRules.

---

##### `ListSizeConstraintSets`<sup>Required</sup> <a name="ListSizeConstraintSets" id="@cdk_utils/iam.waf.WAFActions.property.ListSizeConstraintSets"></a>

```typescript
public readonly ListSizeConstraintSets: string;
```

- *Type:* string

[List] waf:ListSizeConstraintSets.

---

##### `ListSqlInjectionMatchSets`<sup>Required</sup> <a name="ListSqlInjectionMatchSets" id="@cdk_utils/iam.waf.WAFActions.property.ListSqlInjectionMatchSets"></a>

```typescript
public readonly ListSqlInjectionMatchSets: string;
```

- *Type:* string

[List] waf:ListSqlInjectionMatchSets.

---

##### `ListSubscribedRuleGroups`<sup>Required</sup> <a name="ListSubscribedRuleGroups" id="@cdk_utils/iam.waf.WAFActions.property.ListSubscribedRuleGroups"></a>

```typescript
public readonly ListSubscribedRuleGroups: string;
```

- *Type:* string

[List] waf:ListSubscribedRuleGroups.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.waf.WAFActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] waf:ListTagsForResource.

---

##### `ListWebACLs`<sup>Required</sup> <a name="ListWebACLs" id="@cdk_utils/iam.waf.WAFActions.property.ListWebACLs"></a>

```typescript
public readonly ListWebACLs: string;
```

- *Type:* string

[List] waf:ListWebACLs.

---

##### `ListXssMatchSets`<sup>Required</sup> <a name="ListXssMatchSets" id="@cdk_utils/iam.waf.WAFActions.property.ListXssMatchSets"></a>

```typescript
public readonly ListXssMatchSets: string;
```

- *Type:* string

[List] waf:ListXssMatchSets.

---

##### `PutLoggingConfiguration`<sup>Required</sup> <a name="PutLoggingConfiguration" id="@cdk_utils/iam.waf.WAFActions.property.PutLoggingConfiguration"></a>

```typescript
public readonly PutLoggingConfiguration: string;
```

- *Type:* string

[Write] waf:PutLoggingConfiguration.

---

##### `PutPermissionPolicy`<sup>Required</sup> <a name="PutPermissionPolicy" id="@cdk_utils/iam.waf.WAFActions.property.PutPermissionPolicy"></a>

```typescript
public readonly PutPermissionPolicy: string;
```

- *Type:* string

[PermissionManagement] waf:PutPermissionPolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.waf.WAFActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.waf.WAFActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] waf:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.waf.WAFActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] waf:UntagResource.

---

##### `UpdateByteMatchSet`<sup>Required</sup> <a name="UpdateByteMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.UpdateByteMatchSet"></a>

```typescript
public readonly UpdateByteMatchSet: string;
```

- *Type:* string

[Write] waf:UpdateByteMatchSet.

---

##### `UpdateGeoMatchSet`<sup>Required</sup> <a name="UpdateGeoMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.UpdateGeoMatchSet"></a>

```typescript
public readonly UpdateGeoMatchSet: string;
```

- *Type:* string

[Write] waf:UpdateGeoMatchSet.

---

##### `UpdateIPSet`<sup>Required</sup> <a name="UpdateIPSet" id="@cdk_utils/iam.waf.WAFActions.property.UpdateIPSet"></a>

```typescript
public readonly UpdateIPSet: string;
```

- *Type:* string

[Write] waf:UpdateIPSet.

---

##### `UpdateRateBasedRule`<sup>Required</sup> <a name="UpdateRateBasedRule" id="@cdk_utils/iam.waf.WAFActions.property.UpdateRateBasedRule"></a>

```typescript
public readonly UpdateRateBasedRule: string;
```

- *Type:* string

[Write] waf:UpdateRateBasedRule.

---

##### `UpdateRegexMatchSet`<sup>Required</sup> <a name="UpdateRegexMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.UpdateRegexMatchSet"></a>

```typescript
public readonly UpdateRegexMatchSet: string;
```

- *Type:* string

[Write] waf:UpdateRegexMatchSet.

---

##### `UpdateRegexPatternSet`<sup>Required</sup> <a name="UpdateRegexPatternSet" id="@cdk_utils/iam.waf.WAFActions.property.UpdateRegexPatternSet"></a>

```typescript
public readonly UpdateRegexPatternSet: string;
```

- *Type:* string

[Write] waf:UpdateRegexPatternSet.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.waf.WAFActions.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string;
```

- *Type:* string

[Write] waf:UpdateRule.

---

##### `UpdateRuleGroup`<sup>Required</sup> <a name="UpdateRuleGroup" id="@cdk_utils/iam.waf.WAFActions.property.UpdateRuleGroup"></a>

```typescript
public readonly UpdateRuleGroup: string;
```

- *Type:* string

[Write] waf:UpdateRuleGroup.

---

##### `UpdateSizeConstraintSet`<sup>Required</sup> <a name="UpdateSizeConstraintSet" id="@cdk_utils/iam.waf.WAFActions.property.UpdateSizeConstraintSet"></a>

```typescript
public readonly UpdateSizeConstraintSet: string;
```

- *Type:* string

[Write] waf:UpdateSizeConstraintSet.

---

##### `UpdateSqlInjectionMatchSet`<sup>Required</sup> <a name="UpdateSqlInjectionMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.UpdateSqlInjectionMatchSet"></a>

```typescript
public readonly UpdateSqlInjectionMatchSet: string;
```

- *Type:* string

[Write] waf:UpdateSqlInjectionMatchSet.

---

##### `UpdateWebACL`<sup>Required</sup> <a name="UpdateWebACL" id="@cdk_utils/iam.waf.WAFActions.property.UpdateWebACL"></a>

```typescript
public readonly UpdateWebACL: string;
```

- *Type:* string

[PermissionManagement] waf:UpdateWebACL.

---

##### `UpdateXssMatchSet`<sup>Required</sup> <a name="UpdateXssMatchSet" id="@cdk_utils/iam.waf.WAFActions.property.UpdateXssMatchSet"></a>

```typescript
public readonly UpdateXssMatchSet: string;
```

- *Type:* string

[Write] waf:UpdateXssMatchSet.

---

### WAFConditions <a name="WAFConditions" id="@cdk_utils/iam.waf.WAFConditions"></a>

Condition key constants and builders for waf.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.waf.WAFConditions.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

new waf.WAFConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.waf.WAFConditions.requestTag"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.waf.WAFConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.waf.WAFConditions.resourceTag"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.waf.WAFConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.waf.WAFConditions.tagKeys"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.waf.WAFConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.property.CreateRateBasedRuleConditionKeys">CreateRateBasedRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRateBasedRule action. |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.property.CreateRuleConditionKeys">CreateRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRule action. |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.property.CreateRuleGroupConditionKeys">CreateRuleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRuleGroup action. |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.property.CreateWebACLConditionKeys">CreateWebACLConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWebACL action. |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.waf.WAFConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.waf.WAFConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.waf.WAFConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.waf.WAFConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateRateBasedRuleConditionKeys`<sup>Required</sup> <a name="CreateRateBasedRuleConditionKeys" id="@cdk_utils/iam.waf.WAFConditions.property.CreateRateBasedRuleConditionKeys"></a>

```typescript
public readonly CreateRateBasedRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRateBasedRule action.

---

##### `CreateRuleConditionKeys`<sup>Required</sup> <a name="CreateRuleConditionKeys" id="@cdk_utils/iam.waf.WAFConditions.property.CreateRuleConditionKeys"></a>

```typescript
public readonly CreateRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRule action.

---

##### `CreateRuleGroupConditionKeys`<sup>Required</sup> <a name="CreateRuleGroupConditionKeys" id="@cdk_utils/iam.waf.WAFConditions.property.CreateRuleGroupConditionKeys"></a>

```typescript
public readonly CreateRuleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRuleGroup action.

---

##### `CreateWebACLConditionKeys`<sup>Required</sup> <a name="CreateWebACLConditionKeys" id="@cdk_utils/iam.waf.WAFConditions.property.CreateWebACLConditionKeys"></a>

```typescript
public readonly CreateWebACLConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWebACL action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.waf.WAFConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.waf.WAFConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### WAFOperations <a name="WAFOperations" id="@cdk_utils/iam.waf.WAFOperations"></a>

API operation to required IAM actions mapping for waf.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.waf.WAFOperations.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

new waf.WAFOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateByteMatchSet">CreateByteMatchSet</a></code> | <code>string[]</code> | IAM actions required for the CreateByteMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateGeoMatchSet">CreateGeoMatchSet</a></code> | <code>string[]</code> | IAM actions required for the CreateGeoMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateIPSet">CreateIPSet</a></code> | <code>string[]</code> | IAM actions required for the CreateIPSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateRateBasedRule">CreateRateBasedRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRateBasedRule API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateRegexMatchSet">CreateRegexMatchSet</a></code> | <code>string[]</code> | IAM actions required for the CreateRegexMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateRegexPatternSet">CreateRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the CreateRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateRule">CreateRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRule API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateRuleGroup">CreateRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateSizeConstraintSet">CreateSizeConstraintSet</a></code> | <code>string[]</code> | IAM actions required for the CreateSizeConstraintSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateSqlInjectionMatchSet">CreateSqlInjectionMatchSet</a></code> | <code>string[]</code> | IAM actions required for the CreateSqlInjectionMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateWebACL">CreateWebACL</a></code> | <code>string[]</code> | IAM actions required for the CreateWebACL API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateWebACLMigrationStack">CreateWebACLMigrationStack</a></code> | <code>string[]</code> | IAM actions required for the CreateWebACLMigrationStack API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.CreateXssMatchSet">CreateXssMatchSet</a></code> | <code>string[]</code> | IAM actions required for the CreateXssMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteByteMatchSet">DeleteByteMatchSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteByteMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteGeoMatchSet">DeleteGeoMatchSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteGeoMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteIPSet">DeleteIPSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteIPSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteLoggingConfiguration">DeleteLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeletePermissionPolicy">DeletePermissionPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePermissionPolicy API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteRateBasedRule">DeleteRateBasedRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRateBasedRule API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteRegexMatchSet">DeleteRegexMatchSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegexMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteRegexPatternSet">DeleteRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteRule">DeleteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRule API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteRuleGroup">DeleteRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteSizeConstraintSet">DeleteSizeConstraintSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteSizeConstraintSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteSqlInjectionMatchSet">DeleteSqlInjectionMatchSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteSqlInjectionMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteWebACL">DeleteWebACL</a></code> | <code>string[]</code> | IAM actions required for the DeleteWebACL API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.DeleteXssMatchSet">DeleteXssMatchSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteXssMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListActivatedRulesInRuleGroup">ListActivatedRulesInRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the ListActivatedRulesInRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListByteMatchSets">ListByteMatchSets</a></code> | <code>string[]</code> | IAM actions required for the ListByteMatchSets API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListGeoMatchSets">ListGeoMatchSets</a></code> | <code>string[]</code> | IAM actions required for the ListGeoMatchSets API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListIPSets">ListIPSets</a></code> | <code>string[]</code> | IAM actions required for the ListIPSets API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListLoggingConfigurations">ListLoggingConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListLoggingConfigurations API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListRateBasedRules">ListRateBasedRules</a></code> | <code>string[]</code> | IAM actions required for the ListRateBasedRules API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListRegexMatchSets">ListRegexMatchSets</a></code> | <code>string[]</code> | IAM actions required for the ListRegexMatchSets API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListRegexPatternSets">ListRegexPatternSets</a></code> | <code>string[]</code> | IAM actions required for the ListRegexPatternSets API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListRuleGroups">ListRuleGroups</a></code> | <code>string[]</code> | IAM actions required for the ListRuleGroups API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListRules">ListRules</a></code> | <code>string[]</code> | IAM actions required for the ListRules API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListSizeConstraintSets">ListSizeConstraintSets</a></code> | <code>string[]</code> | IAM actions required for the ListSizeConstraintSets API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListSqlInjectionMatchSets">ListSqlInjectionMatchSets</a></code> | <code>string[]</code> | IAM actions required for the ListSqlInjectionMatchSets API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListSubscribedRuleGroups">ListSubscribedRuleGroups</a></code> | <code>string[]</code> | IAM actions required for the ListSubscribedRuleGroups API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListWebACLs">ListWebACLs</a></code> | <code>string[]</code> | IAM actions required for the ListWebACLs API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.ListXssMatchSets">ListXssMatchSets</a></code> | <code>string[]</code> | IAM actions required for the ListXssMatchSets API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetByteMatchSet">opGetByteMatchSet</a></code> | <code>string[]</code> | IAM actions required for the GetByteMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetChangeToken">opGetChangeToken</a></code> | <code>string[]</code> | IAM actions required for the GetChangeToken API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetChangeTokenStatus">opGetChangeTokenStatus</a></code> | <code>string[]</code> | IAM actions required for the GetChangeTokenStatus API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetGeoMatchSet">opGetGeoMatchSet</a></code> | <code>string[]</code> | IAM actions required for the GetGeoMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetIPSet">opGetIPSet</a></code> | <code>string[]</code> | IAM actions required for the GetIPSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetLoggingConfiguration">opGetLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetPermissionPolicy">opGetPermissionPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPermissionPolicy API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetRateBasedRule">opGetRateBasedRule</a></code> | <code>string[]</code> | IAM actions required for the GetRateBasedRule API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetRateBasedRuleManagedKeys">opGetRateBasedRuleManagedKeys</a></code> | <code>string[]</code> | IAM actions required for the GetRateBasedRuleManagedKeys API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetRegexMatchSet">opGetRegexMatchSet</a></code> | <code>string[]</code> | IAM actions required for the GetRegexMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetRegexPatternSet">opGetRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the GetRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetRule">opGetRule</a></code> | <code>string[]</code> | IAM actions required for the GetRule API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetRuleGroup">opGetRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the GetRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetSampledRequests">opGetSampledRequests</a></code> | <code>string[]</code> | IAM actions required for the GetSampledRequests API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetSizeConstraintSet">opGetSizeConstraintSet</a></code> | <code>string[]</code> | IAM actions required for the GetSizeConstraintSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetSqlInjectionMatchSet">opGetSqlInjectionMatchSet</a></code> | <code>string[]</code> | IAM actions required for the GetSqlInjectionMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetWebACL">opGetWebACL</a></code> | <code>string[]</code> | IAM actions required for the GetWebACL API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.opGetXssMatchSet">opGetXssMatchSet</a></code> | <code>string[]</code> | IAM actions required for the GetXssMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.PutLoggingConfiguration">PutLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.PutPermissionPolicy">PutPermissionPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutPermissionPolicy API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateByteMatchSet">UpdateByteMatchSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateByteMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateGeoMatchSet">UpdateGeoMatchSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateGeoMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateIPSet">UpdateIPSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateIPSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateRateBasedRule">UpdateRateBasedRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateRateBasedRule API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateRegexMatchSet">UpdateRegexMatchSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegexMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateRegexPatternSet">UpdateRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateRule">UpdateRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateRule API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateRuleGroup">UpdateRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateSizeConstraintSet">UpdateSizeConstraintSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateSizeConstraintSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateSqlInjectionMatchSet">UpdateSqlInjectionMatchSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateSqlInjectionMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateWebACL">UpdateWebACL</a></code> | <code>string[]</code> | IAM actions required for the UpdateWebACL API call. |
| <code><a href="#@cdk_utils/iam.waf.WAFOperations.property.UpdateXssMatchSet">UpdateXssMatchSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateXssMatchSet API call. |

---

##### `CreateByteMatchSet`<sup>Required</sup> <a name="CreateByteMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.CreateByteMatchSet"></a>

```typescript
public readonly CreateByteMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateByteMatchSet API call.

---

##### `CreateGeoMatchSet`<sup>Required</sup> <a name="CreateGeoMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.CreateGeoMatchSet"></a>

```typescript
public readonly CreateGeoMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateGeoMatchSet API call.

---

##### `CreateIPSet`<sup>Required</sup> <a name="CreateIPSet" id="@cdk_utils/iam.waf.WAFOperations.property.CreateIPSet"></a>

```typescript
public readonly CreateIPSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateIPSet API call.

---

##### `CreateRateBasedRule`<sup>Required</sup> <a name="CreateRateBasedRule" id="@cdk_utils/iam.waf.WAFOperations.property.CreateRateBasedRule"></a>

```typescript
public readonly CreateRateBasedRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRateBasedRule API call.

---

##### `CreateRegexMatchSet`<sup>Required</sup> <a name="CreateRegexMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.CreateRegexMatchSet"></a>

```typescript
public readonly CreateRegexMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegexMatchSet API call.

---

##### `CreateRegexPatternSet`<sup>Required</sup> <a name="CreateRegexPatternSet" id="@cdk_utils/iam.waf.WAFOperations.property.CreateRegexPatternSet"></a>

```typescript
public readonly CreateRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegexPatternSet API call.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.waf.WAFOperations.property.CreateRule"></a>

```typescript
public readonly CreateRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRule API call.

---

##### `CreateRuleGroup`<sup>Required</sup> <a name="CreateRuleGroup" id="@cdk_utils/iam.waf.WAFOperations.property.CreateRuleGroup"></a>

```typescript
public readonly CreateRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateRuleGroup API call.

---

##### `CreateSizeConstraintSet`<sup>Required</sup> <a name="CreateSizeConstraintSet" id="@cdk_utils/iam.waf.WAFOperations.property.CreateSizeConstraintSet"></a>

```typescript
public readonly CreateSizeConstraintSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateSizeConstraintSet API call.

---

##### `CreateSqlInjectionMatchSet`<sup>Required</sup> <a name="CreateSqlInjectionMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.CreateSqlInjectionMatchSet"></a>

```typescript
public readonly CreateSqlInjectionMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateSqlInjectionMatchSet API call.

---

##### `CreateWebACL`<sup>Required</sup> <a name="CreateWebACL" id="@cdk_utils/iam.waf.WAFOperations.property.CreateWebACL"></a>

```typescript
public readonly CreateWebACL: string[];
```

- *Type:* string[]

IAM actions required for the CreateWebACL API call.

---

##### `CreateWebACLMigrationStack`<sup>Required</sup> <a name="CreateWebACLMigrationStack" id="@cdk_utils/iam.waf.WAFOperations.property.CreateWebACLMigrationStack"></a>

```typescript
public readonly CreateWebACLMigrationStack: string[];
```

- *Type:* string[]

IAM actions required for the CreateWebACLMigrationStack API call.

---

##### `CreateXssMatchSet`<sup>Required</sup> <a name="CreateXssMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.CreateXssMatchSet"></a>

```typescript
public readonly CreateXssMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateXssMatchSet API call.

---

##### `DeleteByteMatchSet`<sup>Required</sup> <a name="DeleteByteMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteByteMatchSet"></a>

```typescript
public readonly DeleteByteMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteByteMatchSet API call.

---

##### `DeleteGeoMatchSet`<sup>Required</sup> <a name="DeleteGeoMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteGeoMatchSet"></a>

```typescript
public readonly DeleteGeoMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGeoMatchSet API call.

---

##### `DeleteIPSet`<sup>Required</sup> <a name="DeleteIPSet" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteIPSet"></a>

```typescript
public readonly DeleteIPSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIPSet API call.

---

##### `DeleteLoggingConfiguration`<sup>Required</sup> <a name="DeleteLoggingConfiguration" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteLoggingConfiguration"></a>

```typescript
public readonly DeleteLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoggingConfiguration API call.

---

##### `DeletePermissionPolicy`<sup>Required</sup> <a name="DeletePermissionPolicy" id="@cdk_utils/iam.waf.WAFOperations.property.DeletePermissionPolicy"></a>

```typescript
public readonly DeletePermissionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePermissionPolicy API call.

---

##### `DeleteRateBasedRule`<sup>Required</sup> <a name="DeleteRateBasedRule" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteRateBasedRule"></a>

```typescript
public readonly DeleteRateBasedRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRateBasedRule API call.

---

##### `DeleteRegexMatchSet`<sup>Required</sup> <a name="DeleteRegexMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteRegexMatchSet"></a>

```typescript
public readonly DeleteRegexMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegexMatchSet API call.

---

##### `DeleteRegexPatternSet`<sup>Required</sup> <a name="DeleteRegexPatternSet" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteRegexPatternSet"></a>

```typescript
public readonly DeleteRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegexPatternSet API call.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRule API call.

---

##### `DeleteRuleGroup`<sup>Required</sup> <a name="DeleteRuleGroup" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteRuleGroup"></a>

```typescript
public readonly DeleteRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRuleGroup API call.

---

##### `DeleteSizeConstraintSet`<sup>Required</sup> <a name="DeleteSizeConstraintSet" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteSizeConstraintSet"></a>

```typescript
public readonly DeleteSizeConstraintSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSizeConstraintSet API call.

---

##### `DeleteSqlInjectionMatchSet`<sup>Required</sup> <a name="DeleteSqlInjectionMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteSqlInjectionMatchSet"></a>

```typescript
public readonly DeleteSqlInjectionMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSqlInjectionMatchSet API call.

---

##### `DeleteWebACL`<sup>Required</sup> <a name="DeleteWebACL" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteWebACL"></a>

```typescript
public readonly DeleteWebACL: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWebACL API call.

---

##### `DeleteXssMatchSet`<sup>Required</sup> <a name="DeleteXssMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.DeleteXssMatchSet"></a>

```typescript
public readonly DeleteXssMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteXssMatchSet API call.

---

##### `ListActivatedRulesInRuleGroup`<sup>Required</sup> <a name="ListActivatedRulesInRuleGroup" id="@cdk_utils/iam.waf.WAFOperations.property.ListActivatedRulesInRuleGroup"></a>

```typescript
public readonly ListActivatedRulesInRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListActivatedRulesInRuleGroup API call.

---

##### `ListByteMatchSets`<sup>Required</sup> <a name="ListByteMatchSets" id="@cdk_utils/iam.waf.WAFOperations.property.ListByteMatchSets"></a>

```typescript
public readonly ListByteMatchSets: string[];
```

- *Type:* string[]

IAM actions required for the ListByteMatchSets API call.

---

##### `ListGeoMatchSets`<sup>Required</sup> <a name="ListGeoMatchSets" id="@cdk_utils/iam.waf.WAFOperations.property.ListGeoMatchSets"></a>

```typescript
public readonly ListGeoMatchSets: string[];
```

- *Type:* string[]

IAM actions required for the ListGeoMatchSets API call.

---

##### `ListIPSets`<sup>Required</sup> <a name="ListIPSets" id="@cdk_utils/iam.waf.WAFOperations.property.ListIPSets"></a>

```typescript
public readonly ListIPSets: string[];
```

- *Type:* string[]

IAM actions required for the ListIPSets API call.

---

##### `ListLoggingConfigurations`<sup>Required</sup> <a name="ListLoggingConfigurations" id="@cdk_utils/iam.waf.WAFOperations.property.ListLoggingConfigurations"></a>

```typescript
public readonly ListLoggingConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListLoggingConfigurations API call.

---

##### `ListRateBasedRules`<sup>Required</sup> <a name="ListRateBasedRules" id="@cdk_utils/iam.waf.WAFOperations.property.ListRateBasedRules"></a>

```typescript
public readonly ListRateBasedRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRateBasedRules API call.

---

##### `ListRegexMatchSets`<sup>Required</sup> <a name="ListRegexMatchSets" id="@cdk_utils/iam.waf.WAFOperations.property.ListRegexMatchSets"></a>

```typescript
public readonly ListRegexMatchSets: string[];
```

- *Type:* string[]

IAM actions required for the ListRegexMatchSets API call.

---

##### `ListRegexPatternSets`<sup>Required</sup> <a name="ListRegexPatternSets" id="@cdk_utils/iam.waf.WAFOperations.property.ListRegexPatternSets"></a>

```typescript
public readonly ListRegexPatternSets: string[];
```

- *Type:* string[]

IAM actions required for the ListRegexPatternSets API call.

---

##### `ListRuleGroups`<sup>Required</sup> <a name="ListRuleGroups" id="@cdk_utils/iam.waf.WAFOperations.property.ListRuleGroups"></a>

```typescript
public readonly ListRuleGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListRuleGroups API call.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.waf.WAFOperations.property.ListRules"></a>

```typescript
public readonly ListRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRules API call.

---

##### `ListSizeConstraintSets`<sup>Required</sup> <a name="ListSizeConstraintSets" id="@cdk_utils/iam.waf.WAFOperations.property.ListSizeConstraintSets"></a>

```typescript
public readonly ListSizeConstraintSets: string[];
```

- *Type:* string[]

IAM actions required for the ListSizeConstraintSets API call.

---

##### `ListSqlInjectionMatchSets`<sup>Required</sup> <a name="ListSqlInjectionMatchSets" id="@cdk_utils/iam.waf.WAFOperations.property.ListSqlInjectionMatchSets"></a>

```typescript
public readonly ListSqlInjectionMatchSets: string[];
```

- *Type:* string[]

IAM actions required for the ListSqlInjectionMatchSets API call.

---

##### `ListSubscribedRuleGroups`<sup>Required</sup> <a name="ListSubscribedRuleGroups" id="@cdk_utils/iam.waf.WAFOperations.property.ListSubscribedRuleGroups"></a>

```typescript
public readonly ListSubscribedRuleGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscribedRuleGroups API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.waf.WAFOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWebACLs`<sup>Required</sup> <a name="ListWebACLs" id="@cdk_utils/iam.waf.WAFOperations.property.ListWebACLs"></a>

```typescript
public readonly ListWebACLs: string[];
```

- *Type:* string[]

IAM actions required for the ListWebACLs API call.

---

##### `ListXssMatchSets`<sup>Required</sup> <a name="ListXssMatchSets" id="@cdk_utils/iam.waf.WAFOperations.property.ListXssMatchSets"></a>

```typescript
public readonly ListXssMatchSets: string[];
```

- *Type:* string[]

IAM actions required for the ListXssMatchSets API call.

---

##### `opGetByteMatchSet`<sup>Required</sup> <a name="opGetByteMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.opGetByteMatchSet"></a>

```typescript
public readonly opGetByteMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the GetByteMatchSet API call.

---

##### `opGetChangeToken`<sup>Required</sup> <a name="opGetChangeToken" id="@cdk_utils/iam.waf.WAFOperations.property.opGetChangeToken"></a>

```typescript
public readonly opGetChangeToken: string[];
```

- *Type:* string[]

IAM actions required for the GetChangeToken API call.

---

##### `opGetChangeTokenStatus`<sup>Required</sup> <a name="opGetChangeTokenStatus" id="@cdk_utils/iam.waf.WAFOperations.property.opGetChangeTokenStatus"></a>

```typescript
public readonly opGetChangeTokenStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetChangeTokenStatus API call.

---

##### `opGetGeoMatchSet`<sup>Required</sup> <a name="opGetGeoMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.opGetGeoMatchSet"></a>

```typescript
public readonly opGetGeoMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the GetGeoMatchSet API call.

---

##### `opGetIPSet`<sup>Required</sup> <a name="opGetIPSet" id="@cdk_utils/iam.waf.WAFOperations.property.opGetIPSet"></a>

```typescript
public readonly opGetIPSet: string[];
```

- *Type:* string[]

IAM actions required for the GetIPSet API call.

---

##### `opGetLoggingConfiguration`<sup>Required</sup> <a name="opGetLoggingConfiguration" id="@cdk_utils/iam.waf.WAFOperations.property.opGetLoggingConfiguration"></a>

```typescript
public readonly opGetLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetLoggingConfiguration API call.

---

##### `opGetPermissionPolicy`<sup>Required</sup> <a name="opGetPermissionPolicy" id="@cdk_utils/iam.waf.WAFOperations.property.opGetPermissionPolicy"></a>

```typescript
public readonly opGetPermissionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPermissionPolicy API call.

---

##### `opGetRateBasedRule`<sup>Required</sup> <a name="opGetRateBasedRule" id="@cdk_utils/iam.waf.WAFOperations.property.opGetRateBasedRule"></a>

```typescript
public readonly opGetRateBasedRule: string[];
```

- *Type:* string[]

IAM actions required for the GetRateBasedRule API call.

---

##### `opGetRateBasedRuleManagedKeys`<sup>Required</sup> <a name="opGetRateBasedRuleManagedKeys" id="@cdk_utils/iam.waf.WAFOperations.property.opGetRateBasedRuleManagedKeys"></a>

```typescript
public readonly opGetRateBasedRuleManagedKeys: string[];
```

- *Type:* string[]

IAM actions required for the GetRateBasedRuleManagedKeys API call.

---

##### `opGetRegexMatchSet`<sup>Required</sup> <a name="opGetRegexMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.opGetRegexMatchSet"></a>

```typescript
public readonly opGetRegexMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the GetRegexMatchSet API call.

---

##### `opGetRegexPatternSet`<sup>Required</sup> <a name="opGetRegexPatternSet" id="@cdk_utils/iam.waf.WAFOperations.property.opGetRegexPatternSet"></a>

```typescript
public readonly opGetRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the GetRegexPatternSet API call.

---

##### `opGetRule`<sup>Required</sup> <a name="opGetRule" id="@cdk_utils/iam.waf.WAFOperations.property.opGetRule"></a>

```typescript
public readonly opGetRule: string[];
```

- *Type:* string[]

IAM actions required for the GetRule API call.

---

##### `opGetRuleGroup`<sup>Required</sup> <a name="opGetRuleGroup" id="@cdk_utils/iam.waf.WAFOperations.property.opGetRuleGroup"></a>

```typescript
public readonly opGetRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetRuleGroup API call.

---

##### `opGetSampledRequests`<sup>Required</sup> <a name="opGetSampledRequests" id="@cdk_utils/iam.waf.WAFOperations.property.opGetSampledRequests"></a>

```typescript
public readonly opGetSampledRequests: string[];
```

- *Type:* string[]

IAM actions required for the GetSampledRequests API call.

---

##### `opGetSizeConstraintSet`<sup>Required</sup> <a name="opGetSizeConstraintSet" id="@cdk_utils/iam.waf.WAFOperations.property.opGetSizeConstraintSet"></a>

```typescript
public readonly opGetSizeConstraintSet: string[];
```

- *Type:* string[]

IAM actions required for the GetSizeConstraintSet API call.

---

##### `opGetSqlInjectionMatchSet`<sup>Required</sup> <a name="opGetSqlInjectionMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.opGetSqlInjectionMatchSet"></a>

```typescript
public readonly opGetSqlInjectionMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the GetSqlInjectionMatchSet API call.

---

##### `opGetWebACL`<sup>Required</sup> <a name="opGetWebACL" id="@cdk_utils/iam.waf.WAFOperations.property.opGetWebACL"></a>

```typescript
public readonly opGetWebACL: string[];
```

- *Type:* string[]

IAM actions required for the GetWebACL API call.

---

##### `opGetXssMatchSet`<sup>Required</sup> <a name="opGetXssMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.opGetXssMatchSet"></a>

```typescript
public readonly opGetXssMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the GetXssMatchSet API call.

---

##### `PutLoggingConfiguration`<sup>Required</sup> <a name="PutLoggingConfiguration" id="@cdk_utils/iam.waf.WAFOperations.property.PutLoggingConfiguration"></a>

```typescript
public readonly PutLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutLoggingConfiguration API call.

---

##### `PutPermissionPolicy`<sup>Required</sup> <a name="PutPermissionPolicy" id="@cdk_utils/iam.waf.WAFOperations.property.PutPermissionPolicy"></a>

```typescript
public readonly PutPermissionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutPermissionPolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.waf.WAFOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.waf.WAFOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateByteMatchSet`<sup>Required</sup> <a name="UpdateByteMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateByteMatchSet"></a>

```typescript
public readonly UpdateByteMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateByteMatchSet API call.

---

##### `UpdateGeoMatchSet`<sup>Required</sup> <a name="UpdateGeoMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateGeoMatchSet"></a>

```typescript
public readonly UpdateGeoMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGeoMatchSet API call.

---

##### `UpdateIPSet`<sup>Required</sup> <a name="UpdateIPSet" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateIPSet"></a>

```typescript
public readonly UpdateIPSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIPSet API call.

---

##### `UpdateRateBasedRule`<sup>Required</sup> <a name="UpdateRateBasedRule" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateRateBasedRule"></a>

```typescript
public readonly UpdateRateBasedRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRateBasedRule API call.

---

##### `UpdateRegexMatchSet`<sup>Required</sup> <a name="UpdateRegexMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateRegexMatchSet"></a>

```typescript
public readonly UpdateRegexMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegexMatchSet API call.

---

##### `UpdateRegexPatternSet`<sup>Required</sup> <a name="UpdateRegexPatternSet" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateRegexPatternSet"></a>

```typescript
public readonly UpdateRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegexPatternSet API call.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRule API call.

---

##### `UpdateRuleGroup`<sup>Required</sup> <a name="UpdateRuleGroup" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateRuleGroup"></a>

```typescript
public readonly UpdateRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRuleGroup API call.

---

##### `UpdateSizeConstraintSet`<sup>Required</sup> <a name="UpdateSizeConstraintSet" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateSizeConstraintSet"></a>

```typescript
public readonly UpdateSizeConstraintSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSizeConstraintSet API call.

---

##### `UpdateSqlInjectionMatchSet`<sup>Required</sup> <a name="UpdateSqlInjectionMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateSqlInjectionMatchSet"></a>

```typescript
public readonly UpdateSqlInjectionMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSqlInjectionMatchSet API call.

---

##### `UpdateWebACL`<sup>Required</sup> <a name="UpdateWebACL" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateWebACL"></a>

```typescript
public readonly UpdateWebACL: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWebACL API call.

---

##### `UpdateXssMatchSet`<sup>Required</sup> <a name="UpdateXssMatchSet" id="@cdk_utils/iam.waf.WAFOperations.property.UpdateXssMatchSet"></a>

```typescript
public readonly UpdateXssMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateXssMatchSet API call.

---

### WAFResources <a name="WAFResources" id="@cdk_utils/iam.waf.WAFResources"></a>

ARN builders, validators, and parsers for waf resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.waf.WAFResources.Initializer"></a>

```typescript
import { waf } from '@cdk_utils/iam'

new waf.WAFResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.bytematchset">bytematchset</a></code> | Builds an ARN for the bytematchset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.geomatchset">geomatchset</a></code> | Builds an ARN for the geomatchset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.ipset">ipset</a></code> | Builds an ARN for the ipset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidBytematchsetArn">isValidBytematchsetArn</a></code> | Validates whether a string is a valid ARN for the bytematchset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidGeomatchsetArn">isValidGeomatchsetArn</a></code> | Validates whether a string is a valid ARN for the geomatchset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidIpsetArn">isValidIpsetArn</a></code> | Validates whether a string is a valid ARN for the ipset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidRatebasedruleArn">isValidRatebasedruleArn</a></code> | Validates whether a string is a valid ARN for the ratebasedrule resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidRegexmatchsetArn">isValidRegexmatchsetArn</a></code> | Validates whether a string is a valid ARN for the regexmatchset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidRegexpatternsetArn">isValidRegexpatternsetArn</a></code> | Validates whether a string is a valid ARN for the regexpatternset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidRuleArn">isValidRuleArn</a></code> | Validates whether a string is a valid ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidRulegroupArn">isValidRulegroupArn</a></code> | Validates whether a string is a valid ARN for the rulegroup resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidSizeconstraintsetArn">isValidSizeconstraintsetArn</a></code> | Validates whether a string is a valid ARN for the sizeconstraintset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidSqlinjectionmatchsetArn">isValidSqlinjectionmatchsetArn</a></code> | Validates whether a string is a valid ARN for the sqlinjectionmatchset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidWebaclArn">isValidWebaclArn</a></code> | Validates whether a string is a valid ARN for the webacl resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.isValidXssmatchsetArn">isValidXssmatchsetArn</a></code> | Validates whether a string is a valid ARN for the xssmatchset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseBytematchsetArn">parseBytematchsetArn</a></code> | Parses a bytematchset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseGeomatchsetArn">parseGeomatchsetArn</a></code> | Parses a geomatchset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseIpsetArn">parseIpsetArn</a></code> | Parses a ipset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseRatebasedruleArn">parseRatebasedruleArn</a></code> | Parses a ratebasedrule ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseRegexmatchsetArn">parseRegexmatchsetArn</a></code> | Parses a regexmatchset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseRegexpatternsetArn">parseRegexpatternsetArn</a></code> | Parses a regexpatternset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseRuleArn">parseRuleArn</a></code> | Parses a rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseRulegroupArn">parseRulegroupArn</a></code> | Parses a rulegroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseSizeconstraintsetArn">parseSizeconstraintsetArn</a></code> | Parses a sizeconstraintset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseSqlinjectionmatchsetArn">parseSqlinjectionmatchsetArn</a></code> | Parses a sqlinjectionmatchset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseWebaclArn">parseWebaclArn</a></code> | Parses a webacl ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.parseXssmatchsetArn">parseXssmatchsetArn</a></code> | Parses a xssmatchset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.ratebasedrule">ratebasedrule</a></code> | Builds an ARN for the ratebasedrule resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.regexmatchset">regexmatchset</a></code> | Builds an ARN for the regexmatchset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.regexpatternset">regexpatternset</a></code> | Builds an ARN for the regexpatternset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.rule">rule</a></code> | Builds an ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.rulegroup">rulegroup</a></code> | Builds an ARN for the rulegroup resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.sizeconstraintset">sizeconstraintset</a></code> | Builds an ARN for the sizeconstraintset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.sqlinjectionmatchset">sqlinjectionmatchset</a></code> | Builds an ARN for the sqlinjectionmatchset resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.webacl">webacl</a></code> | Builds an ARN for the webacl resource. |
| <code><a href="#@cdk_utils/iam.waf.WAFResources.xssmatchset">xssmatchset</a></code> | Builds an ARN for the xssmatchset resource. |

---

##### `bytematchset` <a name="bytematchset" id="@cdk_utils/iam.waf.WAFResources.bytematchset"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.bytematchset(props: WAFBytematchsetArnProps)
```

Builds an ARN for the bytematchset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.bytematchset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFBytematchsetArnProps">WAFBytematchsetArnProps</a>

---

##### `geomatchset` <a name="geomatchset" id="@cdk_utils/iam.waf.WAFResources.geomatchset"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.geomatchset(props: WAFGeomatchsetArnProps)
```

Builds an ARN for the geomatchset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.geomatchset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFGeomatchsetArnProps">WAFGeomatchsetArnProps</a>

---

##### `ipset` <a name="ipset" id="@cdk_utils/iam.waf.WAFResources.ipset"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.ipset(props: WAFIpsetArnProps)
```

Builds an ARN for the ipset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.ipset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFIpsetArnProps">WAFIpsetArnProps</a>

---

##### `isValidBytematchsetArn` <a name="isValidBytematchsetArn" id="@cdk_utils/iam.waf.WAFResources.isValidBytematchsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidBytematchsetArn(arn: string)
```

Validates whether a string is a valid ARN for the bytematchset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidBytematchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGeomatchsetArn` <a name="isValidGeomatchsetArn" id="@cdk_utils/iam.waf.WAFResources.isValidGeomatchsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidGeomatchsetArn(arn: string)
```

Validates whether a string is a valid ARN for the geomatchset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidGeomatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIpsetArn` <a name="isValidIpsetArn" id="@cdk_utils/iam.waf.WAFResources.isValidIpsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidIpsetArn(arn: string)
```

Validates whether a string is a valid ARN for the ipset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidIpsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRatebasedruleArn` <a name="isValidRatebasedruleArn" id="@cdk_utils/iam.waf.WAFResources.isValidRatebasedruleArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidRatebasedruleArn(arn: string)
```

Validates whether a string is a valid ARN for the ratebasedrule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidRatebasedruleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegexmatchsetArn` <a name="isValidRegexmatchsetArn" id="@cdk_utils/iam.waf.WAFResources.isValidRegexmatchsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidRegexmatchsetArn(arn: string)
```

Validates whether a string is a valid ARN for the regexmatchset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidRegexmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegexpatternsetArn` <a name="isValidRegexpatternsetArn" id="@cdk_utils/iam.waf.WAFResources.isValidRegexpatternsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidRegexpatternsetArn(arn: string)
```

Validates whether a string is a valid ARN for the regexpatternset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidRegexpatternsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuleArn` <a name="isValidRuleArn" id="@cdk_utils/iam.waf.WAFResources.isValidRuleArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRulegroupArn` <a name="isValidRulegroupArn" id="@cdk_utils/iam.waf.WAFResources.isValidRulegroupArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidRulegroupArn(arn: string)
```

Validates whether a string is a valid ARN for the rulegroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidRulegroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSizeconstraintsetArn` <a name="isValidSizeconstraintsetArn" id="@cdk_utils/iam.waf.WAFResources.isValidSizeconstraintsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidSizeconstraintsetArn(arn: string)
```

Validates whether a string is a valid ARN for the sizeconstraintset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidSizeconstraintsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSqlinjectionmatchsetArn` <a name="isValidSqlinjectionmatchsetArn" id="@cdk_utils/iam.waf.WAFResources.isValidSqlinjectionmatchsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidSqlinjectionmatchsetArn(arn: string)
```

Validates whether a string is a valid ARN for the sqlinjectionmatchset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidSqlinjectionmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWebaclArn` <a name="isValidWebaclArn" id="@cdk_utils/iam.waf.WAFResources.isValidWebaclArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidWebaclArn(arn: string)
```

Validates whether a string is a valid ARN for the webacl resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidWebaclArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidXssmatchsetArn` <a name="isValidXssmatchsetArn" id="@cdk_utils/iam.waf.WAFResources.isValidXssmatchsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.isValidXssmatchsetArn(arn: string)
```

Validates whether a string is a valid ARN for the xssmatchset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.isValidXssmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBytematchsetArn` <a name="parseBytematchsetArn" id="@cdk_utils/iam.waf.WAFResources.parseBytematchsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseBytematchsetArn(arn: string)
```

Parses a bytematchset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseBytematchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGeomatchsetArn` <a name="parseGeomatchsetArn" id="@cdk_utils/iam.waf.WAFResources.parseGeomatchsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseGeomatchsetArn(arn: string)
```

Parses a geomatchset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseGeomatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIpsetArn` <a name="parseIpsetArn" id="@cdk_utils/iam.waf.WAFResources.parseIpsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseIpsetArn(arn: string)
```

Parses a ipset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseIpsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRatebasedruleArn` <a name="parseRatebasedruleArn" id="@cdk_utils/iam.waf.WAFResources.parseRatebasedruleArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseRatebasedruleArn(arn: string)
```

Parses a ratebasedrule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseRatebasedruleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegexmatchsetArn` <a name="parseRegexmatchsetArn" id="@cdk_utils/iam.waf.WAFResources.parseRegexmatchsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseRegexmatchsetArn(arn: string)
```

Parses a regexmatchset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseRegexmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegexpatternsetArn` <a name="parseRegexpatternsetArn" id="@cdk_utils/iam.waf.WAFResources.parseRegexpatternsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseRegexpatternsetArn(arn: string)
```

Parses a regexpatternset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseRegexpatternsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuleArn` <a name="parseRuleArn" id="@cdk_utils/iam.waf.WAFResources.parseRuleArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseRuleArn(arn: string)
```

Parses a rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRulegroupArn` <a name="parseRulegroupArn" id="@cdk_utils/iam.waf.WAFResources.parseRulegroupArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseRulegroupArn(arn: string)
```

Parses a rulegroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseRulegroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSizeconstraintsetArn` <a name="parseSizeconstraintsetArn" id="@cdk_utils/iam.waf.WAFResources.parseSizeconstraintsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseSizeconstraintsetArn(arn: string)
```

Parses a sizeconstraintset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseSizeconstraintsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSqlinjectionmatchsetArn` <a name="parseSqlinjectionmatchsetArn" id="@cdk_utils/iam.waf.WAFResources.parseSqlinjectionmatchsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseSqlinjectionmatchsetArn(arn: string)
```

Parses a sqlinjectionmatchset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseSqlinjectionmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWebaclArn` <a name="parseWebaclArn" id="@cdk_utils/iam.waf.WAFResources.parseWebaclArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseWebaclArn(arn: string)
```

Parses a webacl ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseWebaclArn.parameter.arn"></a>

- *Type:* string

---

##### `parseXssmatchsetArn` <a name="parseXssmatchsetArn" id="@cdk_utils/iam.waf.WAFResources.parseXssmatchsetArn"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.parseXssmatchsetArn(arn: string)
```

Parses a xssmatchset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf.WAFResources.parseXssmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `ratebasedrule` <a name="ratebasedrule" id="@cdk_utils/iam.waf.WAFResources.ratebasedrule"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.ratebasedrule(props: WAFRatebasedruleArnProps)
```

Builds an ARN for the ratebasedrule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.ratebasedrule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFRatebasedruleArnProps">WAFRatebasedruleArnProps</a>

---

##### `regexmatchset` <a name="regexmatchset" id="@cdk_utils/iam.waf.WAFResources.regexmatchset"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.regexmatchset(props: WAFRegexmatchsetArnProps)
```

Builds an ARN for the regexmatchset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.regexmatchset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFRegexmatchsetArnProps">WAFRegexmatchsetArnProps</a>

---

##### `regexpatternset` <a name="regexpatternset" id="@cdk_utils/iam.waf.WAFResources.regexpatternset"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.regexpatternset(props: WAFRegexpatternsetArnProps)
```

Builds an ARN for the regexpatternset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.regexpatternset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFRegexpatternsetArnProps">WAFRegexpatternsetArnProps</a>

---

##### `rule` <a name="rule" id="@cdk_utils/iam.waf.WAFResources.rule"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.rule(props: WAFRuleArnProps)
```

Builds an ARN for the rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.rule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFRuleArnProps">WAFRuleArnProps</a>

---

##### `rulegroup` <a name="rulegroup" id="@cdk_utils/iam.waf.WAFResources.rulegroup"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.rulegroup(props: WAFRulegroupArnProps)
```

Builds an ARN for the rulegroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.rulegroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFRulegroupArnProps">WAFRulegroupArnProps</a>

---

##### `sizeconstraintset` <a name="sizeconstraintset" id="@cdk_utils/iam.waf.WAFResources.sizeconstraintset"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.sizeconstraintset(props: WAFSizeconstraintsetArnProps)
```

Builds an ARN for the sizeconstraintset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.sizeconstraintset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFSizeconstraintsetArnProps">WAFSizeconstraintsetArnProps</a>

---

##### `sqlinjectionmatchset` <a name="sqlinjectionmatchset" id="@cdk_utils/iam.waf.WAFResources.sqlinjectionmatchset"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.sqlinjectionmatchset(props: WAFSqlinjectionmatchsetArnProps)
```

Builds an ARN for the sqlinjectionmatchset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.sqlinjectionmatchset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFSqlinjectionmatchsetArnProps">WAFSqlinjectionmatchsetArnProps</a>

---

##### `webacl` <a name="webacl" id="@cdk_utils/iam.waf.WAFResources.webacl"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.webacl(props: WAFWebaclArnProps)
```

Builds an ARN for the webacl resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.webacl.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFWebaclArnProps">WAFWebaclArnProps</a>

---

##### `xssmatchset` <a name="xssmatchset" id="@cdk_utils/iam.waf.WAFResources.xssmatchset"></a>

```typescript
import { waf } from '@cdk_utils/iam'

waf.WAFResources.xssmatchset(props: WAFXssmatchsetArnProps)
```

Builds an ARN for the xssmatchset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf.WAFResources.xssmatchset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf.WAFXssmatchsetArnProps">WAFXssmatchsetArnProps</a>

---




